import os
import sys
import json
import shutil
import asyncio
import subprocess
from mutagen.mp3 import MP3
import edge_tts
from gtts import gTTS

# Import scene data for Chapter 2
from ch2_bai5_data import BAI5_MUC1_SCENES, BAI5_MUC2_SCENES, BAI5_MUC3_SCENES
from ch2_bai6_data import BAI6_MUC1_SCENES, BAI6_MUC2_SCENES, BAI6_MUC3_SCENES
from ch2_bai7_data import BAI7_MUC1_SCENES, BAI7_MUC2_SCENES, BAI7_MUC3_SCENES

VOICE = "vi-VN-NamMinhNeural"
TEMP_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\temp_audio_ch2"
ROOT_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\audio"
PUBLIC_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\audio"
JS_TARGET_1 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\js\g11_chapter2_data.js"
JS_TARGET_2 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\js\g11_chapter2_data.js"

os.makedirs(TEMP_DIR, exist_ok=True)
os.makedirs(ROOT_AUDIO_DIR, exist_ok=True)
os.makedirs(PUBLIC_AUDIO_DIR, exist_ok=True)

# Concurrency semaphore (3 parallel streams is rock solid)
SEMAPHORE = asyncio.Semaphore(3)

def run_gtts_sync(text, out_mp3):
    tts = gTTS(text, lang='vi')
    tts.save(out_mp3)

async def tts_scene_async(text, out_mp3):
    if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 1000:
        return True

    # If partial file exists, remove it
    if os.path.exists(out_mp3):
        try:
            os.remove(out_mp3)
        except Exception:
            pass

    async with SEMAPHORE:
        for attempt in range(3):
            try:
                comm = edge_tts.Communicate(text, VOICE, rate="-4%", pitch="-2Hz")
                # Wrap in wait_for with 25s timeout to prevent hanging forever
                await asyncio.wait_for(comm.save(out_mp3), timeout=25.0)
                if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 500:
                    return True
            except Exception as e:
                print(f"      [Retry {attempt+1}] for {os.path.basename(out_mp3)}: {e}", flush=True)
                if os.path.exists(out_mp3):
                    try:
                        os.remove(out_mp3)
                    except Exception:
                        pass
                await asyncio.sleep(1.2)
                
        # Fallback to gTTS if edge-tts fails after 3 tries
        try:
            await asyncio.wait_for(asyncio.to_thread(run_gtts_sync, text, out_mp3), timeout=25.0)
            if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 500:
                print(f"      [Fallback] gTTS used for {os.path.basename(out_mp3)}", flush=True)
                return True
        except Exception as e:
            print(f"      [Failed] {os.path.basename(out_mp3)}: {e}", flush=True)
            return False

def get_mp3_duration(mp3_path):
    try:
        audio = MP3(mp3_path)
        return float(audio.info.length)
    except Exception as e:
        print(f"Error getting duration for {mp3_path}: {e}")
        return 20.0

def concat_mp3s(input_list, output_mp3):
    list_txt = os.path.join(TEMP_DIR, f"concat_list_{os.path.basename(output_mp3)}.txt")
    with open(list_txt, "w", encoding="utf-8") as f:
        for p in input_list:
            safe_p = p.replace('\\', '/')
            f.write(f"file '{safe_p}'\n")
    
    cmd = [
        "ffmpeg", "-y", "-f", "concat", "-safe", "0",
        "-i", list_txt, "-c", "copy", output_mp3
    ]
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if res.returncode != 0:
        print(f"Concat warning: {res.stderr.decode('utf-8', errors='ignore')}", flush=True)
    else:
        print(f"  ✔ Concatenated -> {output_mp3} ({os.path.getsize(output_mp3)} bytes)", flush=True)

async def process_single_scene(sec_key, scene):
    idx = scene["sceneIndex"]
    temp_mp3 = os.path.join(TEMP_DIR, f"{sec_key}_scene_{idx}.mp3")
    await tts_scene_async(scene["narration"], temp_mp3)
    dur = get_mp3_duration(temp_mp3)
    print(f"    ✔ Done [{sec_key}] Scene {idx:2d} ({dur:5.2f}s)", flush=True)
    return idx, temp_mp3, dur

async def process_section(sec_info):
    sec_key = sec_info["sec_key"]
    lesson_id = sec_info["lesson_id"]
    lesson_title = sec_info["lesson_title"]
    sec_title = sec_info["sec_title"]
    owl_tip = sec_info["owl_tip"]
    raw_scenes = sec_info["scenes"]
    
    print(f"\n=======================================================", flush=True)
    print(f"🚀 Processing [{sec_key}]: {sec_title}", flush=True)
    print(f"=======================================================", flush=True)
    
    tasks = [process_single_scene(sec_key, sc) for sc in raw_scenes]
    results = await asyncio.gather(*tasks)
    
    # Sort by sceneIndex
    results.sort(key=lambda x: x[0])
    
    temp_mp3_list = []
    final_scenes = []
    timeline = []
    current_time = 0.0
    
    for idx, temp_mp3, dur in results:
        temp_mp3_list.append(temp_mp3)
        orig_sc = raw_scenes[idx - 1]
        
        start_t = round(current_time, 2)
        end_t = round(current_time + dur, 2)
        current_time += dur
        
        sc_data = {
            "sceneIndex": idx,
            "title": orig_sc["title"],
            "subtitle": orig_sc["subtitle"],
            "mascotMode": orig_sc["mascotMode"],
            "mascotTip": orig_sc["mascotTip"],
            "bodyHtml": orig_sc["bodyHtml"],
            "narration": orig_sc["narration"],
            "startTime": start_t,
            "endTime": end_t,
            "duration": round(dur, 2)
        }
        final_scenes.append(sc_data)
        timeline.append(idx)
        print(f"  Scene {idx:2d}: {start_t:6.2f}s -> {end_t:6.2f}s ({dur:5.2f}s) | {orig_sc['title'][:40]}", flush=True)
        
    out_mp3_name = f"{sec_key}.mp3"
    root_mp3 = os.path.join(ROOT_AUDIO_DIR, out_mp3_name)
    public_mp3 = os.path.join(PUBLIC_AUDIO_DIR, out_mp3_name)
    
    concat_mp3s(temp_mp3_list, root_mp3)
    shutil.copy2(root_mp3, public_mp3)
    print(f"  ✔ Copied to {public_mp3}", flush=True)
    
    total_sec = int(current_time)
    formatted_time = f"{total_sec // 60:02d}:{total_sec % 60:02d}"
    
    # Structure parts
    parts = [
        {
            "partNumber": 1,
            "partTitle": f"Phần 1: {final_scenes[0]['title']}",
            "scenes": [1]
        },
        {
            "partNumber": 2,
            "partTitle": f"Phần 2: {final_scenes[1]['title']}",
            "scenes": [2]
        },
        {
            "partNumber": 3,
            "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
            "scenes": [3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            "partNumber": 4,
            "partTitle": f"Phần 4: {final_scenes[10]['title']}",
            "scenes": [11]
        },
        {
            "partNumber": 5,
            "partTitle": f"Phần 5: {final_scenes[11]['title']}",
            "scenes": [12]
        }
    ]
    
    section_data = {
        "lessonId": lesson_id,
        "lessonTitle": lesson_title,
        "sectionId": sec_key,
        "sectionTitle": sec_title,
        "audio": f"/audio/{out_mp3_name}",
        "audioSrc": f"./audio/{out_mp3_name}",
        "audio_src": f"./audio/{out_mp3_name}",
        "title": sec_title,
        "owl_tip": owl_tip,
        "parts": parts,
        "timeline": timeline,
        "totalDuration": round(current_time, 2),
        "formattedDuration": formatted_time,
        "scenes": final_scenes
    }
    
    return sec_key, section_data, formatted_time

SECTIONS_CONFIG = [
    # BÀI 5: DÃY SỐ
    {
        "sec_key": "g11_bai5_muc1",
        "lesson_id": "toan11_bai5",
        "lesson_title": "Bài 5: Dãy số",
        "sec_title": "Mục 1: Khái niệm dãy số & Các cách cho một dãy số",
        "owl_tip": "Dãy số là hàm số xác định trên tập số nguyên dương N*. Dãy số có thể cho bằng công thức TQ, truy hồi hoặc mô tả!",
        "scenes": BAI5_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai5_muc2",
        "lesson_id": "toan11_bai5",
        "lesson_title": "Bài 5: Dãy số",
        "sec_title": "Mục 2: Dãy số tăng, dãy số giảm & Phương pháp xét tính đơn điệu",
        "owl_tip": "Để xét tăng/giảm: lập hiệu u_{n+1} - u_n so sánh với 0; nếu số hạng luôn dương thì lập tỉ số u_{n+1}/u_n so sánh với 1!",
        "scenes": BAI5_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai5_muc3",
        "lesson_id": "toan11_bai5",
        "lesson_title": "Bài 5: Dãy số",
        "sec_title": "Mục 3: Dãy số bị chặn & Nhận biết tính bị chặn trên, bị chặn dưới",
        "owl_tip": "Dãy số bị chặn khi vừa bị chặn trên vừa bị chặn dưới: tồn tại m, M sao cho m <= u_n <= M với mọi n thuộc N*!",
        "scenes": BAI5_MUC3_SCENES
    },
    
    # BÀI 6: CẤP SỐ CỘNG
    {
        "sec_key": "g11_bai6_muc1",
        "lesson_id": "toan11_bai6",
        "lesson_title": "Bài 6: Cấp số cộng",
        "sec_title": "Mục 1: Định nghĩa cấp số cộng & Công sai d",
        "owl_tip": "Cấp số cộng là dãy số mà u_{n+1} = u_n + d với mọi n >= 1. Công sai d = u_{n+1} - u_n không đổi!",
        "scenes": BAI6_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai6_muc2",
        "lesson_id": "toan11_bai6",
        "lesson_title": "Bài 6: Cấp số cộng",
        "sec_title": "Mục 2: Số hạng tổng quát của cấp số cộng & Tính chất ba số hạng liên tiếp",
        "owl_tip": "Số hạng tổng quát u_n = u_1 + (n - 1)d. Tính chất 3 số hạng liên tiếp: u_{k-1} + u_{k+1} = 2*u_k!",
        "scenes": BAI6_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai6_muc3",
        "lesson_id": "toan11_bai6",
        "lesson_title": "Bài 6: Cấp số cộng",
        "sec_title": "Mục 3: Tổng n số hạng đầu tiên của cấp số cộng & Bài toán thực tế",
        "owl_tip": "Công thức tổng: S_n = n(u_1 + u_n)/2 = n[2u_1 + (n - 1)d]/2. Áp dụng giải bài toán kim tự tháp, xếp gạch, trả góp!",
        "scenes": BAI6_MUC3_SCENES
    },

    # BÀI 7: CẤP SỐ NHÂN
    {
        "sec_key": "g11_bai7_muc1",
        "lesson_id": "toan11_bai7",
        "lesson_title": "Bài 7: Cấp số nhân",
        "sec_title": "Mục 1: Định nghĩa cấp số nhân & Công bội q",
        "owl_tip": "Cấp số nhân là dãy số mà u_{n+1} = u_n * q với mọi n >= 1. Công bội q = u_{n+1} / u_n không đổi!",
        "scenes": BAI7_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai7_muc2",
        "lesson_id": "toan11_bai7",
        "lesson_title": "Bài 7: Cấp số nhân",
        "sec_title": "Mục 2: Số hạng tổng quát của cấp số nhân & Tính chất ba số hạng liên tiếp",
        "owl_tip": "Số hạng tổng quát u_n = u_1 * q^{n - 1}. Tính chất 3 số hạng liên tiếp: u_{k-1} * u_{k+1} = (u_k)^2!",
        "scenes": BAI7_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai7_muc3",
        "lesson_id": "toan11_bai7",
        "lesson_title": "Bài 7: Cấp số nhân",
        "sec_title": "Mục 3: Tổng n số hạng đầu tiên của cấp số nhân & Bài toán lãi kép",
        "owl_tip": "Tổng n số hạng đầu: S_n = u_1(1 - q^n)/(1 - q) (q khác 1). Bài toán tăng trưởng vi khuẩn, lãi kép, phân rã!",
        "scenes": BAI7_MUC3_SCENES
    }
]

async def main():
    print(f"🔥 BẮT ĐẦU TẠO VIDEO BÀI GIẢNG CHƯƠNG 2 TOÁN 11 KNTT (BÀI 5, 6, 7) 🔥", flush=True)
    print(f"Tổng số mục: 9 mục (108 scenes). Giọng đọc: {VOICE}", flush=True)
    
    all_data = {}
    time_summary = {}
    
    for sec_cfg in SECTIONS_CONFIG:
        sec_key, sec_data, formatted_time = await process_section(sec_cfg)
        all_data[sec_key] = sec_data
        time_summary[sec_key] = formatted_time
    
    # Save JSON dump
    dump_path = os.path.join(TEMP_DIR, "g11_chapter2_data.json")
    with open(dump_path, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f"\n✔ Full Chapter 2 JSON dumped to {dump_path}", flush=True)
    
    # Generate standalone JS file
    js_header = """/* =========================================================================
   CHƯƠNG II: DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN - TOÁN 11 KNTT
   Bài 5: Dãy số (Mục 1, 2, 3)
   Bài 6: Cấp số cộng (Mục 1, 2, 3)
   Bài 7: Cấp số nhân (Mục 1, 2, 3)
   Mỗi mục gồm 12 scenes, 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
   Hệ thống Trợ lý Học tập Toán 10-12 Chuẩn Bộ GD&ĐT
   ========================================================================= */

if (typeof window !== 'undefined') {
  window.G11_CHAPTER2_DATA = window.G11_CHAPTER2_DATA || {};
"""
    
    js_body = ""
    for sec_key, sec_data in all_data.items():
        alias_key = sec_key.replace("g11_", "toan11_")
        js_body += f"\n  window.G11_CHAPTER2_DATA.{sec_key} = {json.dumps(sec_data, ensure_ascii=False, indent=2)};\n"
        js_body += f"  window.G11_CHAPTER2_DATA.{alias_key} = window.G11_CHAPTER2_DATA.{sec_key};\n"
        
    js_footer = """
  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, window.G11_CHAPTER2_DATA);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.G11_CHAPTER2_DATA;
}
"""
    full_js = js_header + js_body + js_footer
    
    with open(JS_TARGET_1, "w", encoding="utf-8") as f:
        f.write(full_js)
    print(f"✔ Wrote {JS_TARGET_1} ({os.path.getsize(JS_TARGET_1)} bytes)", flush=True)

    with open(JS_TARGET_2, "w", encoding="utf-8") as f:
        f.write(full_js)
    print(f"✔ Wrote {JS_TARGET_2} ({os.path.getsize(JS_TARGET_2)} bytes)", flush=True)
    
    print("\n================ TỔNG KẾT THỜI LƯỢNG AUDIO ================", flush=True)
    for k, t in time_summary.items():
        print(f"  • {k}: {t}", flush=True)
    print("===========================================================", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
