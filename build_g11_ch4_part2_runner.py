import os
import sys
import json
import shutil
import asyncio
import subprocess
from mutagen.mp3 import MP3
import edge_tts
from gtts import gTTS

# Import scene data for Chapter 4 Part 2
from ch4_bai13_data import BAI13_MUC1_SCENES, BAI13_MUC2_SCENES, BAI13_MUC3_SCENES
from ch4_bai14_data import BAI14_MUC1_SCENES, BAI14_MUC2_SCENES, BAI14_MUC3_SCENES
from ch4_ontap_data import ONTAP_C4_MUC1_SCENES, ONTAP_C4_MUC2_SCENES, ONTAP_C4_MUC3_SCENES

VOICE = "vi-VN-NamMinhNeural"
TEMP_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\temp_audio_ch4"
ROOT_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\audio"
PUBLIC_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\audio"
JS_TARGET_1 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\js\g11_chapter4_data.js"
JS_TARGET_2 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\js\g11_chapter4_data.js"

os.makedirs(TEMP_DIR, exist_ok=True)
os.makedirs(ROOT_AUDIO_DIR, exist_ok=True)
os.makedirs(PUBLIC_AUDIO_DIR, exist_ok=True)

# Concurrency semaphore
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
            await asyncio.wait_for(comm.save(out_mp3), timeout=6.0)
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

SECTIONS_CONFIG_PART2 = [
    # BÀI 13: HAI MẶT PHẲNG SONG SONG
    {
        "sec_key": "g11_bai13_muc1",
        "lesson_id": "toan11_bai13",
        "lesson_title": "Bài 13: Hai mặt phẳng song song",
        "sec_title": "Mục 1: Khái niệm & Điều kiện để hai mặt phẳng song song",
        "owl_tip": "Định lí 1: Nếu mặt phẳng (P) chứa hai đường thẳng cắt nhau a, b và a, b cùng song song với (Q) thì (P) // (Q)!",
        "scenes": BAI13_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai13_muc2",
        "lesson_id": "toan11_bai13",
        "lesson_title": "Bài 13: Hai mặt phẳng song song",
        "sec_title": "Mục 2: Tính chất của hai mặt phẳng song song & Định lí Ta-lét trong không gian",
        "owl_tip": "Qua một điểm ngoài mặt phẳng có duy nhất 1 mặt phẳng song song với nó. Định lí Ta-lét: Ba mặt phẳng song song chắn trên hai cát tuyến bất kì những đoạn thẳng tương ứng tỉ lệ!",
        "scenes": BAI13_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai13_muc3",
        "lesson_id": "toan11_bai13",
        "lesson_title": "Bài 13: Hai mặt phẳng song song",
        "sec_title": "Mục 3: Hình lăng trụ, hình hộp và hình chóp cụt",
        "owl_tip": "Lăng trụ có 2 đáy song song và bằng nhau, các cạnh bên song song và bằng nhau, các mặt bên là hình bình hành!",
        "scenes": BAI13_MUC3_SCENES
    },
    
    # BÀI 14: PHÉP CHIẾU SONG SONG
    {
        "sec_key": "g11_bai14_muc1",
        "lesson_id": "toan11_bai14",
        "lesson_title": "Bài 14: Phép chiếu song song",
        "sec_title": "Mục 1: Khái niệm & Các tính chất cơ bản của phép chiếu song song",
        "owl_tip": "Phép chiếu song song bảo toàn tính thẳng hàng, thứ tự các điểm, tính song song và tỉ số độ dài của hai đoạn thẳng cùng phương!",
        "scenes": BAI14_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai14_muc2",
        "lesson_id": "toan11_bai14",
        "lesson_title": "Bài 14: Phép chiếu song song",
        "sec_title": "Mục 2: Hình biểu diễn của một hình không gian trên mặt phẳng",
        "owl_tip": "Hình biểu diễn của đường tròn là elip hoặc hình tròn (đặc biệt đoạn thẳng nếu mặt phẳng chứa đường tròn song song phương chiếu)!",
        "scenes": BAI14_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai14_muc3",
        "lesson_id": "toan11_bai14",
        "lesson_title": "Bài 14: Phép chiếu song song",
        "sec_title": "Mục 3: Kỹ năng vẽ hình không gian chuẩn xác & Giải toán bằng phép chiếu",
        "owl_tip": "Quy ước vẽ hình không gian: Nhìn thấy vẽ nét liền, bị che khuất bắt buộc vẽ nét đứt đoạn!",
        "scenes": BAI14_MUC3_SCENES
    },

    # BÀI TẬP CUỐI CHƯƠNG IV
    {
        "sec_key": "g11_ontap_c4_muc1",
        "lesson_id": "toan11_ontap_c4",
        "lesson_title": "Bài tập cuối chương IV: Quan hệ song song trong không gian",
        "sec_title": "Mục 1: Hệ thống hóa kiến thức toàn chương & Sơ đồ tư duy 4 quan hệ song song",
        "owl_tip": "Nắm chắc 4 quan hệ then chốt: Đường // Đường, Đường // Mặt, Mặt // Mặt và Phép chiếu song song!",
        "scenes": ONTAP_C4_MUC1_SCENES
    },
    {
        "sec_key": "g11_ontap_c4_muc2",
        "lesson_id": "toan11_ontap_c4",
        "lesson_title": "Bài tập cuối chương IV: Quan hệ song song trong không gian",
        "sec_title": "Mục 2: 4 Dạng toán cốt lõi & Phương pháp giải kinh điển",
        "owl_tip": "4 dạng cốt lõi: Giao tuyến, Giao điểm, Chứng minh song song và Xác định thiết diện!",
        "scenes": ONTAP_C4_MUC2_SCENES
    },
    {
        "sec_key": "g11_ontap_c4_muc3",
        "lesson_id": "toan11_ontap_c4",
        "lesson_title": "Bài tập cuối chương IV: Quan hệ song song trong không gian",
        "sec_title": "Mục 3: Luyện đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT 2025",
        "owl_tip": "Luyện đề theo ma trận 3 phần: Trắc nghiệm 4 lựa chọn, Trắc nghiệm Đúng/Sai và Trả lời ngắn!",
        "scenes": ONTAP_C4_MUC3_SCENES
    }
]

async def main():
    print("=================================================================", flush=True)
    print("🎯 BẮT ĐẦU TỔNG HỢP VÀ SINH AUDIO CHƯƠNG IV PHẦN 2 TOÁN 11 KNTT", flush=True)
    print("   BÀI 13, BÀI 14, ÔN TẬP CHƯƠNG IV (9 mục - 108 scenes)", flush=True)
    print("=================================================================", flush=True)
    
    # Load existing Part 1 data (Bài 10, 11, 12)
    dump_path = os.path.join(TEMP_DIR, "g11_chapter4_data.json")
    if os.path.exists(dump_path):
        with open(dump_path, "r", encoding="utf-8") as f:
            all_data = json.load(f)
        print(f"Loaded existing {len(all_data)} sections from {dump_path}", flush=True)
    else:
        all_data = {}
        
    time_summary = {}
    
    for sec_cfg in SECTIONS_CONFIG_PART2:
        sec_key, sec_data, formatted_time = await process_section(sec_cfg)
        all_data[sec_key] = sec_data
        time_summary[sec_key] = formatted_time
    
    # Save combined JSON dump (all 18 sections)
    with open(dump_path, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f"\n✔ Full Chapter 4 JSON (all 18 sections) dumped to {dump_path}", flush=True)
    
    # Generate standalone JS file containing all 18 sections
    js_header = """/* =========================================================================
   CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN (HOÀN CHỈNH TOÀN CHƯƠNG)
   MÔN TOÁN LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
   Bài 10: Đường thẳng và mặt phẳng trong không gian (Mục 1, 2, 3)
   Bài 11: Hai đường thẳng song song trong không gian (Mục 1, 2, 3)
   Bài 12: Đường thẳng và mặt phẳng song song (Mục 1, 2, 3)
   Bài 13: Hai mặt phẳng song song (Mục 1, 2, 3)
   Bài 14: Phép chiếu song song (Mục 1, 2, 3)
   Bài tập cuối chương IV: Ôn tập chương IV (Mục 1, 2, 3)
   Tổng cộng: 6 bài/chuyên đề × 3 mục = 18 mục (216 scenes chuẩn SGK)
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
    print("🎉 HOÀN TẤT XUẤT SẮC TOÀN BỘ CHƯƠNG 4 (BÀI 10 -> BÀI 14 & ÔN TẬP C4) 🎉", flush=True)
    print("=======================================================", flush=True)
    for k, v in time_summary.items():
        print(f"  • {k:20s}: Thời lượng {v}", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
