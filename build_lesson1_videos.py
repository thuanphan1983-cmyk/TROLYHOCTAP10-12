#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
build_lesson1_videos.py
-----------------------
Generates 2 lesson videos for Bai 1 - Toan 12:
  - Muc 1: Tinh don dieu cua ham so  (~5 min)
  - Muc 2: Cuc tri cua ham so         (~5 min)

Uses: edge-tts (vi-VN-NamMinhNeural), Pillow for slides, FFmpeg for assembly.
Outputs: public/videos/bai1_muc1_don_dieu.mp4, public/videos/bai1_muc2_cuc_tri.mp4
"""

import os, sys, asyncio, textwrap, subprocess, json, shutil
from pathlib import Path

PROJECT_DIR = Path(r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012")
os.chdir(PROJECT_DIR)

VIDEO_DIR = PROJECT_DIR / "public" / "videos"
VIDEO_DIR.mkdir(parents=True, exist_ok=True)
TEMP_DIR = PROJECT_DIR / "_temp_video_build"
if TEMP_DIR.exists():
    shutil.rmtree(TEMP_DIR)
TEMP_DIR.mkdir(parents=True, exist_ok=True)

# FFmpeg path
import imageio_ffmpeg
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

WIDTH, HEIGHT = 1920, 1080

# ============================================================
# 1. SLIDE RENDERING WITH PILLOW
# ============================================================
from PIL import Image, ImageDraw, ImageFont

def get_font(size=42, bold=False):
    candidates = [
        "C:/Windows/Fonts/timesbd.ttf" if bold else "C:/Windows/Fonts/times.ttf",
        "C:/Windows/Fonts/arial.ttf",
    ]
    for fp in candidates:
        if os.path.exists(fp):
            try:
                return ImageFont.truetype(fp, size)
            except Exception:
                continue
    return ImageFont.load_default()

def draw_owl_mascot(draw, x, y, mode="pointer"):
    # Body
    draw.ellipse([x, y, x+120, y+140], fill="#F5A623", outline="#333", width=3)
    # Eyes
    draw.ellipse([x+25, y+30, x+55, y+60], fill="white", outline="#333", width=2)
    draw.ellipse([x+65, y+30, x+95, y+60], fill="white", outline="#333", width=2)
    # Pupils
    draw.ellipse([x+35, y+38, x+47, y+52], fill="#333")
    draw.ellipse([x+75, y+38, x+87, y+52], fill="#333")
    # Glasses
    draw.arc([x+22, y+27, x+58, y+63], 0, 360, fill="#555", width=2)
    draw.arc([x+62, y+27, x+98, y+63], 0, 360, fill="#555", width=2)
    draw.line([x+58, y+45, x+62, y+45], fill="#555", width=2)
    # Beak
    draw.polygon([(x+55, y+65), (x+65, y+65), (x+60, y+80)], fill="#E67E22")
    # Graduation cap
    draw.polygon([(x+20, y+15), (x+60, y+5), (x+100, y+15), (x+60, y+25)], fill="#333")
    draw.rectangle([x+57, y+5, x+63, y+25], fill="#333")
    draw.ellipse([x+50, y+2, x+70, y+10], fill="#E74C3C")
    # Mode-specific
    if mode == "pointer":
        draw.line([x+120, y+70, x+160, y+50], fill="#D4941A", width=4)
        draw.polygon([(x+155, y+45), (x+170, y+40), (x+160, y+55)], fill="#D4941A")
    elif mode == "magnifier":
        draw.ellipse([x+130, y+40, x+170, y+80], outline="#555", width=3)
        draw.line([x+165, y+75, x+180, y+95], fill="#555", width=3)
    elif mode == "cheer":
        draw.line([x+120, y+50, x+150, y+20], fill="#D4941A", width=4)

def render_slide(title, body_lines, slide_path, mascot_mode="pointer",
                 bg_color="#FFFFFF", accent_color="#1A5276"):
    img = Image.new("RGB", (WIDTH, HEIGHT), bg_color)
    draw = ImageDraw.Draw(img)
    # Header
    draw.rectangle([0, 0, WIDTH, 100], fill=accent_color)
    title_font = get_font(44, bold=True)
    draw.text((60, 22), title, fill="white", font=title_font)
    # Body
    body_font = get_font(36)
    y_pos = 140
    for line in body_lines:
        wrapped = textwrap.wrap(line, width=70) if line else [""]
        for wl in wrapped:
            draw.text((80, y_pos), wl, fill="#222", font=body_font)
            y_pos += 52
        y_pos += 10
    # Mascot
    draw_owl_mascot(draw, WIDTH - 200, HEIGHT - 200, mode=mascot_mode)
    # Footer
    draw.rectangle([0, HEIGHT-40, WIDTH, HEIGHT], fill=accent_color)
    footer_font = get_font(20)
    draw.text((60, HEIGHT-35), "Tro ly hoc tap Thay Thuan Phan - SGK Toan 12 KNTT", fill="white", font=footer_font)
    img.save(str(slide_path), quality=95)

# ============================================================
# 2. TTS WITH EDGE-TTS
# ============================================================
import edge_tts

async def generate_tts(text, output_path):
    try:
        comm = edge_tts.Communicate(text, voice="vi-VN-NamMinhNeural", rate="-10%", pitch="-2Hz")
        await comm.save(str(output_path))
        sz = os.path.getsize(output_path)
        if sz < 500:
            raise ValueError(f"Audio too small: {sz} bytes")
        print(f"  TTS OK: {output_path.name} ({sz:,} bytes)")
    except Exception as e:
        print(f"  TTS error: {e}, trying fallback...")
        try:
            comm2 = edge_tts.Communicate(text, voice="vi-VN-HoaiMyNeural", rate="-5%", pitch="-1Hz")
            await comm2.save(str(output_path))
            print(f"  TTS fallback OK: {output_path.name}")
        except Exception as e2:
            print(f"  All TTS failed: {e2}, generating silence")
            generate_silence(str(output_path), 10)

def generate_silence(path, duration_sec):
    """Generate a silent MP3 using FFmpeg."""
    subprocess.run([
        FFMPEG, "-y", "-f", "lavfi", "-i",
        f"anullsrc=r=44100:cl=mono",
        "-t", str(duration_sec),
        "-q:a", "9", str(path)
    ], capture_output=True)

def get_audio_duration(path):
    """Get duration using ffprobe via ffmpeg."""
    try:
        result = subprocess.run([
            FFMPEG, "-i", str(path), "-f", "null", "-"
        ], capture_output=True, text=True, timeout=10)
        # Parse duration from stderr
        for line in result.stderr.split("\n"):
            if "Duration:" in line:
                parts = line.split("Duration:")[1].split(",")[0].strip()
                h, m, s = parts.split(":")
                return float(h)*3600 + float(m)*60 + float(s)
    except Exception:
        pass
    return 12.0  # fallback

# ============================================================
# 3. VIDEO ASSEMBLY WITH FFMPEG DIRECTLY
# ============================================================

def make_scene_video(slide_png, audio_mp3, output_mp4, min_duration=8.0):
    """Create a single scene video: still image + audio using FFmpeg."""
    dur = get_audio_duration(audio_mp3)
    dur = max(dur + 1.0, min_duration)  # +1s padding, min 8s

    cmd = [
        FFMPEG, "-y",
        "-loop", "1", "-i", str(slide_png),
        "-i", str(audio_mp3),
        "-c:v", "libx264", "-tune", "stillimage",
        "-c:a", "aac", "-b:a", "128k",
        "-pix_fmt", "yuv420p",
        "-t", f"{dur:.2f}",
        "-shortest",
        "-vf", f"scale={WIDTH}:{HEIGHT}",
        str(output_mp4)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
    if result.returncode != 0:
        print(f"  FFmpeg error: {result.stderr[-300:]}")
        return False
    print(f"  Scene video OK: {output_mp4.name} ({dur:.1f}s, {os.path.getsize(output_mp4):,} bytes)")
    return True

def concatenate_videos(scene_files, output_path):
    """Concatenate scene MP4s into final video using FFmpeg concat demuxer."""
    list_file = TEMP_DIR / "concat_list.txt"
    with open(list_file, "w", encoding="utf-8") as f:
        for sf in scene_files:
            f.write(f"file '{sf}'\n")

    cmd = [
        FFMPEG, "-y",
        "-f", "concat", "-safe", "0",
        "-i", str(list_file),
        "-c", "copy",
        str(output_path)
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
    if result.returncode != 0:
        print(f"  Concat error: {result.stderr[-300:]}")
        return False
    print(f"  Final video: {output_path} ({os.path.getsize(output_path):,} bytes)")
    return True

# ============================================================
# 4. BUILD VIDEO FROM SCENES
# ============================================================

def build_video(scenes, output_path, video_label):
    print(f"\n{'='*60}")
    print(f"  {video_label} ({len(scenes)} scenes)")
    print(f"{'='*60}")

    scene_mp4s = []
    for i, scene in enumerate(scenes):
        print(f"\n--- Scene {i+1}/{len(scenes)}: {scene['title'][:50]} ---")

        slide_path = TEMP_DIR / f"{video_label}_slide_{i}.png"
        audio_path = TEMP_DIR / f"{video_label}_audio_{i}.mp3"
        scene_mp4 = TEMP_DIR / f"{video_label}_scene_{i}.mp4"

        # Render slide
        render_slide(
            title=scene["title"],
            body_lines=scene["body"],
            slide_path=slide_path,
            mascot_mode=scene.get("mascot_mode", "pointer"),
            accent_color=scene.get("accent_color", "#1A5276")
        )
        print(f"  Slide rendered: {slide_path.name}")

        # Generate TTS
        asyncio.run(generate_tts(scene["narration"], audio_path))

        # Create scene video
        ok = make_scene_video(slide_path, audio_path, scene_mp4)
        if ok:
            scene_mp4s.append(scene_mp4)
        else:
            print(f"  SKIP scene {i+1} due to error")

    # Concatenate
    if scene_mp4s:
        concatenate_videos(scene_mp4s, output_path)
    else:
        print("  ERROR: No scenes were rendered!")

# ============================================================
# 5. SCENE DEFINITIONS
# ============================================================

SCENES_MUC1 = [
    {
        "title": "MUC 1: TINH DON DIEU CUA HAM SO",
        "body": [
            "Bai 1 - Toan 12 (SGK Ket noi tri thuc)",
            "",
            "Trong muc nay, chung ta se tim hieu:",
            "- Dinh nghia ham so dong bien, nghich bien",
            "- Moi lien he giua dau dao ham va tinh don dieu",
            "- Cach lap bang xet dau dao ham",
            "- Vi du minh hoa chi tiet",
        ],
        "narration": "Xin chào các em! Hôm nay thầy sẽ hướng dẫn các em tìm hiểu Mục 1 của Bài 1: Tính đơn điệu của hàm số. Đây là kiến thức nền tảng rất quan trọng trong chương trình Toán 12.",
        "mascot_mode": "cheer",
        "accent_color": "#1A5276",
    },
    {
        "title": "DINH NGHIA TINH DON DIEU",
        "body": [
            "Cho ham so f(x) xac dinh tren khoang (a; b).",
            "",
            "f(x) dong bien tren (a; b) neu:",
            "   Voi moi x1, x2: x1 < x2 => f(x1) < f(x2)",
            "",
            "f(x) nghich bien tren (a; b) neu:",
            "   Voi moi x1, x2: x1 < x2 => f(x1) > f(x2)",
            "",
            "Do thi: Dong bien = di len tu trai sang phai",
            "        Nghich bien = di xuong tu trai sang phai",
        ],
        "narration": "Hàm số f x được gọi là đồng biến trên khoảng a b nếu với mọi x 1 nhỏ hơn x 2 thì f x 1 nhỏ hơn f x 2. Nói đơn giản, khi x tăng thì f x cũng tăng, đồ thị đi lên. Ngược lại, hàm nghịch biến khi x tăng thì f x giảm, đồ thị đi xuống.",
        "mascot_mode": "pointer",
        "accent_color": "#1A5276",
    },
    {
        "title": "DINH LY: DAU DAO HAM VA TINH DON DIEU",
        "body": [
            "Dinh ly (Dieu kien du):",
            "",
            "Cho f(x) co dao ham tren khoang (a; b).",
            "",
            "- Neu f'(x) > 0 voi moi x thuoc (a; b)",
            "  => f(x) dong bien tren (a; b)",
            "",
            "- Neu f'(x) < 0 voi moi x thuoc (a; b)",
            "  => f(x) nghich bien tren (a; b)",
            "",
            "- Neu f'(x) = 0 voi moi x thuoc (a; b)",
            "  => f(x) la ham hang tren (a; b)",
            "",
            "Luu y: f'(x) >= 0 va bang 0 tai huu han diem",
            "  => f(x) van dong bien!",
        ],
        "narration": "Định lý quan trọng nhất: Nếu đạo hàm f phẩy x lớn hơn 0 trên khoảng a b, thì hàm số đồng biến trên khoảng đó. Nếu f phẩy x nhỏ hơn 0, hàm nghịch biến. Các em lưu ý trường hợp đặc biệt: nếu f phẩy x lớn hơn hoặc bằng 0 và chỉ bằng 0 tại hữu hạn điểm, thì f vẫn đồng biến.",
        "mascot_mode": "pointer",
        "accent_color": "#2E86C1",
    },
    {
        "title": "VI DU 1: XET TINH DON DIEU CUA f(x) = x^3 - 3x",
        "body": [
            "Cho f(x) = x^3 - 3x",
            "",
            "Buoc 1: Tinh dao ham",
            "  f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)",
            "",
            "Buoc 2: Giai f'(x) = 0",
            "  f'(x) = 0 khi x = -1 hoac x = 1",
            "",
            "Buoc 3: Lap bang xet dau f'(x)",
            "  x:       (-oo)   -1    (-1;1)    1    (+oo)",
            "  f'(x):    +      0      -        0     +",
            "",
            "Buoc 4: Ket luan",
            "  f dong bien tren (-oo; -1) va (1; +oo)",
            "  f nghich bien tren (-1; 1)",
        ],
        "narration": "Ví dụ 1: Xét tính đơn điệu của hàm số f x bằng x mũ 3 trừ 3 x. Bước 1, ta tính đạo hàm: f phẩy x bằng 3 x bình trừ 3, phân tích thành 3 nhân x trừ 1 nhân x cộng 1. Bước 2, giải f phẩy x bằng 0, ta được x bằng âm 1 hoặc x bằng 1. Bước 3, lập bảng xét dấu. Kết luận: hàm đồng biến trên khoảng âm vô cùng đến âm 1 và từ 1 đến dương vô cùng, nghịch biến trên khoảng âm 1 đến 1.",
        "mascot_mode": "pointer",
        "accent_color": "#1A5276",
    },
    {
        "title": "VI DU 2: DOC BANG XET DAU DAO HAM",
        "body": [
            "Cho bang xet dau cua f'(x):",
            "",
            "+--------+------------------------------------+",
            "|   x    | (-oo)  -2     (-2;3)    3    (+oo) |",
            "+--------+------------------------------------+",
            "|  f'(x) |   -    0       +        0      -   |",
            "+--------+------------------------------------+",
            "",
            "Doc bang:",
            "- f'(x) < 0 tren (-oo; -2): f nghich bien",
            "- f'(x) > 0 tren (-2; 3): f dong bien",
            "- f'(x) < 0 tren (3; +oo): f nghich bien",
        ],
        "narration": "Ví dụ 2: Từ bảng xét dấu cho sẵn, ta đọc như sau. Trên khoảng âm vô cùng đến âm 2, f phẩy x mang dấu âm nên hàm nghịch biến. Trên khoảng âm 2 đến 3, f phẩy x mang dấu dương nên hàm đồng biến. Trên khoảng 3 đến dương vô cùng, f phẩy x lại âm nên hàm nghịch biến.",
        "mascot_mode": "magnifier",
        "accent_color": "#7D3C98",
    },
    {
        "title": "VI DU 3: DOC DO THI -> XAC DINH KHOANG DON DIEU",
        "body": [
            "Quan sat do thi ham so y = f(x):",
            "",
            "- Doan di len (tu trai sang phai):",
            "  -> Ham so DONG BIEN",
            "",
            "- Doan di xuong (tu trai sang phai):",
            "  -> Ham so NGHICH BIEN",
            "",
            "LUU Y QUAN TRONG:",
            "  Ket luan theo KHOANG mo (a; b),",
            "  KHONG ket luan theo doan [a; b].",
            "",
            "  Vi du: Noi 'f dong bien tren (-1; 2)'",
            "  chu KHONG noi 'f dong bien tren [-1; 2]'",
        ],
        "narration": "Khi đọc đồ thị, các em nhìn hướng đi của đồ thị từ trái sang phải. Đoạn nào đi lên thì hàm đồng biến, đoạn nào đi xuống thì hàm nghịch biến. Lưu ý rất quan trọng: các em phải kết luận trên khoảng mở, dùng dấu ngoặc tròn, chứ không dùng đoạn đóng ngoặc vuông.",
        "mascot_mode": "magnifier",
        "accent_color": "#C0392B",
    },
    {
        "title": "TONG KET MUC 1: TINH DON DIEU",
        "body": [
            "Cac buoc xet tinh don dieu cua ham so:",
            "",
            "  1. Tim tap xac dinh D",
            "  2. Tinh dao ham f'(x)",
            "  3. Tim nghiem f'(x) = 0 va diem f'(x) khong XD",
            "  4. Lap bang xet dau f'(x)",
            "  5. Ket luan cac khoang dong bien / nghich bien",
            "",
            "Ghi nho:",
            "  f'(x) > 0 -> dong bien (do thi di len)",
            "  f'(x) < 0 -> nghich bien (do thi di xuong)",
            "  Ket luan tren KHOANG (khong phai doan)",
        ],
        "narration": "Tổng kết Mục 1: Để xét tính đơn điệu, các em thực hiện 5 bước: tìm tập xác định, tính đạo hàm, giải f phẩy bằng 0, lập bảng xét dấu, và kết luận. Ghi nhớ: f phẩy dương thì đồng biến, f phẩy âm thì nghịch biến, và luôn kết luận trên khoảng mở. Hẹn gặp lại các em ở Mục 2 về Cực trị của hàm số!",
        "mascot_mode": "cheer",
        "accent_color": "#27AE60",
    },
]

SCENES_MUC2 = [
    {
        "title": "MUC 2: CUC TRI CUA HAM SO",
        "body": [
            "Bai 1 - Toan 12 (SGK Ket noi tri thuc)",
            "",
            "Trong muc nay, chung ta se tim hieu:",
            "- Dinh nghia cuc dai, cuc tieu",
            "- Dieu kien can va du cua cuc tri",
            "- Quy tac tim cuc tri bang bang bien thien",
            "- Vi du minh hoa va bai toan thuc te",
        ],
        "narration": "Xin chào các em! Bây giờ chúng ta sang Mục 2: Cực trị của hàm số. Đây là phần tiếp nối trực tiếp từ tính đơn điệu mà các em vừa học. Cực trị giúp chúng ta xác định các điểm cao nhất, thấp nhất của đồ thị trên từng khoảng.",
        "mascot_mode": "cheer",
        "accent_color": "#8E44AD",
    },
    {
        "title": "DINH NGHIA CUC DAI - CUC TIEU",
        "body": [
            "Cho ham so f(x) lien tuc tren (a; b) chua x0.",
            "",
            "x0 la diem CUC DAI neu:",
            "  f(x) < f(x0) voi moi x khac x0 lan can x0",
            "  -> f(x0) la gia tri cuc dai",
            "",
            "x0 la diem CUC TIEU neu:",
            "  f(x) > f(x0) voi moi x khac x0 lan can x0",
            "  -> f(x0) la gia tri cuc tieu",
            "",
            "Diem cuc tri = diem cuc dai hoac cuc tieu",
            "Gia tri cuc tri = f(x0) tai diem cuc tri",
        ],
        "narration": "Điểm x 0 được gọi là điểm cực đại nếu tại lân cận của x 0, giá trị f x 0 là lớn nhất. Tức là f x nhỏ hơn f x 0 với mọi x gần x 0. Ngược lại, x 0 là điểm cực tiểu nếu f x 0 là nhỏ nhất trong lân cận.",
        "mascot_mode": "pointer",
        "accent_color": "#8E44AD",
    },
    {
        "title": "DIEU KIEN CAN CUA CUC TRI",
        "body": [
            "Dinh ly (Dieu kien can):",
            "",
            "Neu x0 la diem cuc tri cua f(x)",
            "va f'(x0) ton tai",
            "  => f'(x0) = 0",
            "",
            "CHU Y QUAN TRONG:",
            "- f'(x0) = 0 CHUA CHAC x0 la cuc tri!",
            "",
            "- Vi du: f(x) = x^3 -> f'(x) = 3x^2",
            "  f'(0) = 0 nhung x = 0 KHONG la cuc tri",
            "  (vi f dong bien tren toan R)",
            "",
            "-> Can them dieu kien DU!",
        ],
        "narration": "Điều kiện cần: Nếu x 0 là điểm cực trị và đạo hàm tại x 0 tồn tại, thì f phẩy x 0 bằng 0. Tuy nhiên, các em cần lưu ý: f phẩy bằng 0 chưa chắc đã là cực trị! Ví dụ hàm x mũ 3 có đạo hàm bằng 0 tại x bằng 0, nhưng x bằng 0 không phải cực trị vì hàm đồng biến trên toàn tập số thực.",
        "mascot_mode": "magnifier",
        "accent_color": "#C0392B",
    },
    {
        "title": "DIEU KIEN DU: QUY TAC 1 - BANG BIEN THIEN",
        "body": [
            "Quy tac 1: Dua vao su doi dau cua f'(x)",
            "",
            "Neu f'(x0) = 0 hoac f'(x0) khong ton tai:",
            "",
            "- f'(x) doi dau tu (+) sang (-) khi qua x0",
            "  => x0 la diem CUC DAI",
            "  (Do thi: di len roi di xuong)",
            "",
            "- f'(x) doi dau tu (-) sang (+) khi qua x0",
            "  => x0 la diem CUC TIEU",
            "  (Do thi: di xuong roi di len)",
            "",
            "- f'(x) KHONG doi dau => x0 KHONG la cuc tri",
        ],
        "narration": "Quy tắc 1, dựa vào bảng biến thiên: Nếu f phẩy x đổi dấu từ dương sang âm khi đi qua x 0 thì x 0 là điểm cực đại. Nếu đổi dấu từ âm sang dương thì x 0 là điểm cực tiểu. Nếu không đổi dấu thì không phải cực trị.",
        "mascot_mode": "pointer",
        "accent_color": "#2E86C1",
    },
    {
        "title": "VI DU: TIM CUC TRI CUA f(x) = x^3 - 3x + 2",
        "body": [
            "Cho f(x) = x^3 - 3x + 2",
            "",
            "Buoc 1: f'(x) = 3x^2 - 3 = 3(x-1)(x+1)",
            "",
            "Buoc 2: f'(x) = 0 khi x = -1 hoac x = 1",
            "",
            "Buoc 3: Bang xet dau va bien thien:",
            "  x:     (-oo)   -1    (-1;1)    1    (+oo)",
            "  f'(x):   +      0      -       0      +",
            "  f(x):   /     f(-1)    \\      f(1)   /",
            "",
            "Buoc 4: Ket luan:",
            "  x = -1: cuc dai, f(-1) = 4",
            "  x = 1: cuc tieu, f(1) = 0",
        ],
        "narration": "Ví dụ: Tìm cực trị của f x bằng x mũ 3 trừ 3 x cộng 2. Đạo hàm bằng 3 x bình trừ 3. Giải f phẩy bằng 0 được x bằng âm 1 và x bằng 1. Từ bảng biến thiên: tại x bằng âm 1, f phẩy đổi dấu từ dương sang âm nên đó là cực đại với f âm 1 bằng 4. Tại x bằng 1, f phẩy đổi dấu từ âm sang dương nên đó là cực tiểu với f 1 bằng 0.",
        "mascot_mode": "pointer",
        "accent_color": "#1A5276",
    },
    {
        "title": "QUY TAC 2: DUNG DAO HAM CAP HAI",
        "body": [
            "Quy tac 2 (Dao ham cap hai):",
            "",
            "Cho f'(x0) = 0 va f''(x0) ton tai:",
            "",
            "- Neu f''(x0) < 0 => x0 la diem CUC DAI",
            "",
            "- Neu f''(x0) > 0 => x0 la diem CUC TIEU",
            "",
            "- Neu f''(x0) = 0 => CHUA KET LUAN DUOC",
            "  (Quay lai dung Quy tac 1)",
            "",
            "Vi du: f(x) = x^3 - 3x + 2, f''(x) = 6x",
            "  f''(-1) = -6 < 0 => CUC DAI tai x = -1",
            "  f''(1)  = 6 > 0  => CUC TIEU tai x = 1",
        ],
        "narration": "Quy tắc 2 dùng đạo hàm cấp hai: Nếu f phẩy x 0 bằng 0 và f hai phẩy x 0 nhỏ hơn 0 thì x 0 là cực đại. Nếu f hai phẩy x 0 lớn hơn 0 thì x 0 là cực tiểu. Nếu f hai phẩy bằng 0 thì chưa kết luận được, phải quay lại dùng quy tắc 1.",
        "mascot_mode": "pointer",
        "accent_color": "#2E86C1",
    },
    {
        "title": "TONG KET MUC 2: CUC TRI CUA HAM SO",
        "body": [
            "Cac buoc tim cuc tri cua ham so:",
            "",
            "  1. Tinh f'(x)",
            "  2. Giai f'(x) = 0 -> cac diem x0 nghi ngo",
            "  3. Dung QT1 (bang bien thien) hoac QT2 (f'')",
            "  4. Ket luan: cuc dai / cuc tieu",
            "",
            "Ghi nho nhanh:",
            "  (+) -> (-): Cuc DAI (dinh nui)",
            "  (-) -> (+): Cuc TIEU (day thung lung)",
            "  f'' < 0: Cuc dai | f'' > 0: Cuc tieu",
            "",
            "Chuc cac em hoc tot Bai 1!",
        ],
        "narration": "Tổng kết Mục 2: Để tìm cực trị, các em tính đạo hàm, giải f phẩy bằng 0, rồi dùng quy tắc 1 hoặc quy tắc 2 để xác định cực đại hay cực tiểu. Ghi nhớ: dấu đổi từ dương sang âm là cực đại như đỉnh núi, từ âm sang dương là cực tiểu như đáy thung lũng. Chúc các em học tốt Bài 1 Toán 12!",
        "mascot_mode": "cheer",
        "accent_color": "#27AE60",
    },
]

# ============================================================
# 6. MAIN
# ============================================================

def main():
    print("=" * 60)
    print("  BUILD LESSON 1 VIDEOS - Bai 1 Toan 12 KNTT")
    print("=" * 60)

    out1 = VIDEO_DIR / "bai1_muc1_don_dieu.mp4"
    build_video(SCENES_MUC1, out1, "MUC1")

    out2 = VIDEO_DIR / "bai1_muc2_cuc_tri.mp4"
    build_video(SCENES_MUC2, out2, "MUC2")

    print(f"\n{'='*60}")
    print(f"  DONE!")
    if out1.exists():
        print(f"  Video 1: {out1} ({os.path.getsize(out1):,} bytes)")
    if out2.exists():
        print(f"  Video 2: {out2} ({os.path.getsize(out2):,} bytes)")
    print(f"{'='*60}")

    # Cleanup
    try:
        shutil.rmtree(TEMP_DIR)
        print("  Temp files cleaned.")
    except Exception:
        pass

if __name__ == "__main__":
    main()
