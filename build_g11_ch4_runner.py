import os
import sys
import json
import shutil
import asyncio
import subprocess
from mutagen.mp3 import MP3
import edge_tts
from gtts import gTTS

# Import scene data for Chapter 4
from ch4_bai10_data import BAI10_MUC1_SCENES, BAI10_MUC2_SCENES, BAI10_MUC3_SCENES
from ch4_bai11_data import BAI11_MUC1_SCENES, BAI11_MUC2_SCENES, BAI11_MUC3_SCENES
from ch4_bai12_data import BAI12_MUC1_SCENES, BAI12_MUC2_SCENES, BAI12_MUC3_SCENES

VOICE = "vi-VN-NamMinhNeural"
TEMP_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\temp_audio_ch4"
ROOT_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\audio"
PUBLIC_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\audio"
JS_TARGET_1 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\js\g11_chapter4_data.js"
JS_TARGET_2 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\js\g11_chapter4_data.js"

os.makedirs(TEMP_DIR, exist_ok=True)
os.makedirs(ROOT_AUDIO_DIR, exist_ok=True)
os.makedirs(PUBLIC_AUDIO_DIR, exist_ok=True)

# Concurrency semaphore (5 parallel streams)
SEMAPHORE = asyncio.Semaphore(5)

def run_gtts_sync(text, out_mp3):
    tts = gTTS(text, lang='vi')
    tts.save(out_mp3)

async def tts_scene_async(text, out_mp3):
    if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 1000:
        return True

    if os.path.exists(out_mp3):
        try:
            os.remove(out_mp3)
        except Exception:
            pass

    async with SEMAPHORE:
        # Try edge_tts once with quick timeout
        try:
            comm = edge_tts.Communicate(text, VOICE)
            await asyncio.wait_for(comm.save(out_mp3), timeout=3.5)
            if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 500:
                return True
        except Exception:
            if os.path.exists(out_mp3):
                try:
                    os.remove(out_mp3)
                except Exception:
                    pass
                
        # Fast gTTS fallback immediately
        try:
            await asyncio.wait_for(asyncio.to_thread(run_gtts_sync, text, out_mp3), timeout=15.0)
            if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 500:
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
    # BÀI 10: ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN
    {
        "sec_key": "g11_bai10_muc1",
        "lesson_id": "toan11_bai10",
        "lesson_title": "Bài 10: Đường thẳng và mặt phẳng trong không gian",
        "sec_title": "Mục 1: Khái niệm mở đầu, 6 tính chất thừa nhận & 3 cách xác định mặt phẳng",
        "owl_tip": "Nắm vững 6 tính chất thừa nhận và 3 cách xác định mặt phẳng: 3 điểm không thẳng hàng, 1 đường thẳng và 1 điểm ngoài, hoặc 2 đường thẳng cắt nhau!",
        "scenes": BAI10_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai10_muc2",
        "lesson_id": "toan11_bai10",
        "lesson_title": "Bài 10: Đường thẳng và mặt phẳng trong không gian",
        "sec_title": "Mục 2: Hình chóp, hình tứ diện & Kỹ thuật tìm giao tuyến của hai mặt phẳng",
        "owl_tip": "Muốn tìm giao tuyến của hai mặt phẳng, hãy tìm 2 điểm chung phân biệt rồi nối chúng lại!",
        "scenes": BAI10_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai10_muc3",
        "lesson_id": "toan11_bai10",
        "lesson_title": "Bài 10: Đường thẳng và mặt phẳng trong không gian",
        "sec_title": "Mục 3: Giao điểm đường thẳng và mặt phẳng & Thiết diện của hình chóp",
        "owl_tip": "Để tìm giao điểm d cắt (P), tìm mặt phẳng phụ (Q) chứa d, tìm giao tuyến a = (P) cắt (Q), khi đó giao điểm là d cắt a!",
        "scenes": BAI10_MUC3_SCENES
    },
    
    # BÀI 11: HAI ĐƯỜNG THẲNG SONG SONG TRONG KHÔNG GIAN
    {
        "sec_key": "g11_bai11_muc1",
        "lesson_id": "toan11_bai11",
        "lesson_title": "Bài 11: Hai đường thẳng song song trong không gian",
        "sec_title": "Mục 1: Vị trí tương đối của hai đường thẳng (chéo nhau, cắt nhau, song song, trùng nhau)",
        "owl_tip": "Hai đường thẳng đồng phẳng thì cắt nhau, song song hoặc trùng nhau. Không đồng phẳng thì chéo nhau!",
        "scenes": BAI11_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai11_muc2",
        "lesson_id": "toan11_bai11",
        "lesson_title": "Bài 11: Hai đường thẳng song song trong không gian",
        "sec_title": "Mục 2: Tính chất hai đường thẳng song song & Định lí ba giao tuyến",
        "owl_tip": "Ba mặt phẳng cắt nhau từng đôi một theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc song song hoặc đồng quy!",
        "scenes": BAI11_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai11_muc3",
        "lesson_id": "toan11_bai11",
        "lesson_title": "Bài 11: Hai đường thẳng song song trong không gian",
        "sec_title": "Mục 3: Kỹ thuật chứng minh hai đường thẳng song song & Thiết diện song song",
        "owl_tip": "Phương pháp vàng: Đường trung bình, định lí Ta-lét đảo, hình bình hành hoặc định lí ba giao tuyến!",
        "scenes": BAI11_MUC3_SCENES
    },

    # BÀI 12: ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG
    {
        "sec_key": "g11_bai12_muc1",
        "lesson_id": "toan11_bai12",
        "lesson_title": "Bài 12: Đường thẳng và mặt phẳng song song",
        "sec_title": "Mục 1: Vị trí tương đối của đường thẳng và mặt phẳng & Điều kiện d // (P)",
        "owl_tip": "Định lí 1: Nếu d không nằm trong (P) và d song song với một đường thẳng b trong (P) thì d // (P)!",
        "scenes": BAI12_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai12_muc2",
        "lesson_id": "toan11_bai12",
        "lesson_title": "Bài 12: Đường thẳng và mặt phẳng song song",
        "sec_title": "Mục 2: Tính chất của đường thẳng song song mặt phẳng & Định lí giao tuyến song song",
        "owl_tip": "Định lí 2: Mặt phẳng chứa đường thẳng d // (P) cắt (P) theo giao tuyến song song với d!",
        "scenes": BAI12_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai12_muc3",
        "lesson_id": "toan11_bai12",
        "lesson_title": "Bài 12: Đường thẳng và mặt phẳng song song",
        "sec_title": "Mục 3: Phương pháp chứng minh d // (P) & Kỹ thuật dựng thiết diện song song",
        "owl_tip": "Quy trình 4 bước dựng thiết diện: Xác định điểm chung -> Kẻ giao tuyến song song -> Lan tỏa các mặt -> Khép kín đa giác!",
        "scenes": BAI12_MUC3_SCENES
    }
]

async def main():
    print("=================================================================", flush=True)
    print("🎯 BẮT ĐẦU TỔNG HỢP VÀ SINH AUDIO CHƯƠNG IV TOÁN 11 KNTT", flush=True)
    print("   BÀI 10, BÀI 11, BÀI 12 (Tổng cộng 9 mục - 108 scenes)", flush=True)
    print("=================================================================", flush=True)
    
    all_data = {}
    time_summary = {}
    
    for sec_cfg in SECTIONS_CONFIG:
        sec_key, sec_data, formatted_time = await process_section(sec_cfg)
        all_data[sec_key] = sec_data
        time_summary[sec_key] = formatted_time
    
    # Save JSON dump
    dump_path = os.path.join(TEMP_DIR, "g11_chapter4_data.json")
    with open(dump_path, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f"\n✔ Full Chapter 4 JSON dumped to {dump_path}", flush=True)
    
    # Generate standalone JS file
    js_header = """/* =========================================================================
   CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN
   MÔN TOÁN LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
   Bài 10: Đường thẳng và mặt phẳng trong không gian (Mục 1, 2, 3)
   Bài 11: Hai đường thẳng song song trong không gian (Mục 1, 2, 3)
   Bài 12: Đường thẳng và mặt phẳng song song (Mục 1, 2, 3)
   Mỗi mục gồm 12 scenes, 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
   Hệ thống Trợ lý Học tập Toán 10-12 Chuẩn Bộ GD&ĐT
   ========================================================================= */

(function() {
  const root = (typeof window !== 'undefined') ? window : ((typeof global !== 'undefined') ? global : {});
  root.G11_CHAPTER4_DATA = root.G11_CHAPTER4_DATA || {};
"""
    
    js_body = ""
    for sec_key, sec_data in all_data.items():
        alias_key = sec_key.replace("g11_", "toan11_")
        js_body += f"\n  root.G11_CHAPTER4_DATA.{sec_key} = {json.dumps(sec_data, ensure_ascii=False, indent=2)};\n"
        js_body += f"  root.G11_CHAPTER4_DATA.{alias_key} = root.G11_CHAPTER4_DATA.{sec_key};\n"
        
    js_footer = """
  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, root.G11_CHAPTER4_DATA);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.G11_CHAPTER4_DATA;
  }
})();
"""
    full_js = js_header + js_body + js_footer
    
    with open(JS_TARGET_1, "w", encoding="utf-8") as f:
        f.write(full_js)
    print(f"✔ Successfully saved JS to {JS_TARGET_1}", flush=True)

    with open(JS_TARGET_2, "w", encoding="utf-8") as f:
        f.write(full_js)
    print(f"✔ Successfully saved JS to {JS_TARGET_2}", flush=True)
    
    print("\n=======================================================", flush=True)
    print("🎉 HOÀN TẤT XUẤT SẮC TOÀN BỘ CHƯƠNG 4 (BÀI 10, 11, 12) TOÁN 11 KNTT 🎉", flush=True)
    print("=======================================================", flush=True)
    for k, v in time_summary.items():
        print(f"  • {k:20s}: Thời lượng {v}", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
