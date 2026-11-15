import os
import sys
import json
import shutil
import asyncio
import subprocess
from mutagen.mp3 import MP3
import edge_tts
from gtts import gTTS

# Import scene data for Chapter 3
from ch3_bai8_data import BAI8_MUC1_SCENES, BAI8_MUC2_SCENES, BAI8_MUC3_SCENES
from ch3_bai9_data import BAI9_MUC1_SCENES, BAI9_MUC2_SCENES, BAI9_MUC3_SCENES
from ch3_ontap_data import ONTAP_C3_MUC1_SCENES, ONTAP_C3_MUC2_SCENES, ONTAP_C3_MUC3_SCENES

VOICE = "vi-VN-NamMinhNeural"
TEMP_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\temp_audio_ch3"
ROOT_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\audio"
PUBLIC_AUDIO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\audio"
JS_TARGET_1 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\js\g11_chapter3_data.js"
JS_TARGET_2 = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\js\g11_chapter3_data.js"

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
    # BÀI 8: MẪU SỐ LIỆU GHÉP NHÓM
    {
        "sec_key": "g11_bai8_muc1",
        "lesson_id": "toan11_bai8",
        "lesson_title": "Bài 8: Mẫu số liệu ghép nhóm",
        "sec_title": "Mục 1: Khái niệm về mẫu số liệu ghép nhóm & Giá trị đại diện",
        "owl_tip": "Mẫu ghép nhóm gom số liệu vào các nửa khoảng [a; b). Giá trị đại diện c_i = (a + b)/2, độ dài h = b - a!",
        "scenes": BAI8_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai8_muc2",
        "lesson_id": "toan11_bai8",
        "lesson_title": "Bài 8: Mẫu số liệu ghép nhóm",
        "sec_title": "Mục 2: Kỹ thuật ghép nhóm mẫu số liệu & Bảng tần số ghép nhóm",
        "owl_tip": "4 bước ghép nhóm: Tìm R = x_max - x_min, chọn k nhóm (5-20), xác định độ dài L = R/k, lập các nửa khoảng [a_i; a_{i+1})!",
        "scenes": BAI8_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai8_muc3",
        "lesson_id": "toan11_bai8",
        "lesson_title": "Bài 8: Mẫu số liệu ghép nhóm",
        "sec_title": "Mục 3: Tần số tích lũy & Ý nghĩa xác định phân vị dữ liệu",
        "owl_tip": "Tần số tích lũy cf_i = cf_{i-1} + m_i. Đây là chìa khóa vàng để xác định vị trí Trung vị n/2 và Tứ phân vị n/4, 3n/4!",
        "scenes": BAI8_MUC3_SCENES
    },
    
    # BÀI 9: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM
    {
        "sec_key": "g11_bai9_muc1",
        "lesson_id": "toan11_bai9",
        "lesson_title": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
        "sec_title": "Mục 1: Số trung bình của mẫu số liệu ghép nhóm & Ý nghĩa thực tiễn",
        "owl_tip": "Số trung bình xấp xỉ bằng tổng các tích m_i * c_i chia cho cỡ mẫu n: x_bar = (1/n) * sum(m_i * c_i)!",
        "scenes": BAI9_MUC1_SCENES
    },
    {
        "sec_key": "g11_bai9_muc2",
        "lesson_id": "toan11_bai9",
        "lesson_title": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
        "sec_title": "Mục 2: Trung vị và Tứ phân vị của mẫu số liệu ghép nhóm",
        "owl_tip": "M_e chia đôi dữ liệu tại n/2; Q_1 tại n/4; Q_3 tại 3n/4. Khoảng tứ phân vị Delta_Q = Q_3 - Q_1 đo độ biến thiên 50% ở giữa!",
        "scenes": BAI9_MUC2_SCENES
    },
    {
        "sec_key": "g11_bai9_muc3",
        "lesson_id": "toan11_bai9",
        "lesson_title": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
        "sec_title": "Mục 3: Mốt của mẫu số liệu ghép nhóm & Lựa chọn số đặc trưng phù hợp",
        "owl_tip": "Mốt M_o tính tại nhóm có tần số cực đại: M_o = u_m + [d_1 / (d_1 + d_2)] * h với d_1 = n_m - n_{m-1}, d_2 = n_m - n_{m+1}!",
        "scenes": BAI9_MUC3_SCENES
    },

    # ÔN TẬP CHƯƠNG III (BÀI TẬP CUỐI CHƯƠNG III)
    {
        "sec_key": "g11_ontap_c3_muc1",
        "lesson_id": "toan11_ontap_c3",
        "lesson_title": "Bài tập cuối chương III",
        "sec_title": "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy toàn bộ Chương 3",
        "owl_tip": "Ôn tập toàn diện: Bảng đối chiếu 4 số đặc trưng x_bar, M_e, Q_1, Q_3, M_o và khoảng tứ phân vị Delta_Q!",
        "scenes": ONTAP_C3_MUC1_SCENES
    },
    {
        "sec_key": "g11_ontap_c3_muc2",
        "lesson_id": "toan11_ontap_c3",
        "lesson_title": "Bài tập cuối chương III",
        "sec_title": "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Bài toán thực tế thống kê",
        "owl_tip": "4 dạng toán cốt lõi: Chuyển mẫu thô sang ghép nhóm, Tứ phân vị xếp học bổng, Mốt quy hoạch kho hàng, So sánh độ biến thiên!",
        "scenes": ONTAP_C3_MUC2_SCENES
    },
    {
        "sec_key": "g11_ontap_c3_muc3",
        "lesson_id": "toan11_ontap_c3",
        "lesson_title": "Bài tập cuối chương III",
        "sec_title": "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn chuẩn Bộ GD&ĐT",
        "owl_tip": "Bấm máy tính Casio 580 Menu 6 1-Variable siêu tốc; Bộ đề chuẩn 3 phần: Trắc nghiệm 4 lựa chọn, Đúng/Sai, Trả lời ngắn!",
        "scenes": ONTAP_C3_MUC3_SCENES
    }
]

async def main():
    print(f"🔥 BẮT ĐẦU TẠO VIDEO BÀI GIẢNG CHƯƠNG 3 TOÁN 11 KNTT (BÀI 8, 9, ÔN TẬP C3) 🔥", flush=True)
    print(f"Tổng số mục: 9 mục (108 scenes). Giọng đọc: {VOICE}", flush=True)
    
    all_data = {}
    time_summary = {}
    
    for sec_cfg in SECTIONS_CONFIG:
        sec_key, sec_data, formatted_time = await process_section(sec_cfg)
        all_data[sec_key] = sec_data
        time_summary[sec_key] = formatted_time
    
    # Save JSON dump
    dump_path = os.path.join(TEMP_DIR, "g11_chapter3_data.json")
    with open(dump_path, "w", encoding="utf-8") as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f"\n✔ Full Chapter 3 JSON dumped to {dump_path}", flush=True)
    
    # Generate standalone JS file
    js_header = """/* =========================================================================
   CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
   MÔN TOÁN LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
   Bài 8: Mẫu số liệu ghép nhóm (Mục 1, 2, 3)
   Bài 9: Các số đặc trưng đo xu thế trung tâm (Mục 1, 2, 3)
   Bài tập cuối chương III (Mục 1, 2, 3)
   Mỗi mục gồm 12 scenes, 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
   Hệ thống Trợ lý Học tập Toán 10-12 Chuẩn Bộ GD&ĐT
   ========================================================================= */

(function() {
  const root = (typeof window !== 'undefined') ? window : ((typeof global !== 'undefined') ? global : {});
  root.G11_CHAPTER3_DATA = root.G11_CHAPTER3_DATA || {};
"""
    
    js_body = ""
    for sec_key, sec_data in all_data.items():
        alias_key = sec_key.replace("g11_", "toan11_")
        js_body += f"\n  root.G11_CHAPTER3_DATA.{sec_key} = {json.dumps(sec_data, ensure_ascii=False, indent=2)};\n"
        js_body += f"  root.G11_CHAPTER3_DATA.{alias_key} = root.G11_CHAPTER3_DATA.{sec_key};\n"
        
    js_footer = """
  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, root.G11_CHAPTER3_DATA);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.G11_CHAPTER3_DATA;
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
    print("🎉 HOÀN TẤT XUẤT SẮC TOÀN BỘ CHƯƠNG 3 TOÁN 11 KNTT 🎉", flush=True)
    print("=======================================================", flush=True)
    for k, v in time_summary.items():
        print(f"  • {k:20s}: Thời lượng {v}", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
