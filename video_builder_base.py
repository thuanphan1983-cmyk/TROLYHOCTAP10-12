import os
import sys
import json
import shutil
import subprocess
import time
import asyncio
import edge_tts
from gtts import gTTS

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")

CHROME_PATH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
REPO_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012"
VIDEOS_DIR = os.path.join(REPO_DIR, "videos")
PUBLIC_VIDEOS_DIR = VIDEOS_DIR  # Serve directly from root videos/ to avoid Vercel 404
TEMP_DIR = os.path.join(REPO_DIR, "_video_temp")

os.makedirs(VIDEOS_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

def run_cmd(cmd, desc=""):
    print(f"--> [RUNNING] {desc}")
    res = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8")
    if res.returncode != 0:
        print(f"ERROR in {desc}:\n{res.stderr}")
        raise RuntimeError(f"Command failed: {' '.join(cmd)}")
    return res.stdout

def get_audio_duration(file_path):
    cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "json", file_path
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    data = json.loads(res.stdout)
    return float(data["format"]["duration"])

def render_html_to_png(html_content, output_png):
    temp_html = os.path.join(TEMP_DIR, f"temp_{int(time.time()*1000)}.html")
    with open(temp_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    clean_html_path = os.path.abspath(temp_html).replace("\\", "/")
    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--virtual-time-budget=2500",
        f"--screenshot={os.path.abspath(output_png)}",
        "--window-size=1920,1080",
        "--hide-scrollbars",
        f"file:///{clean_html_path}"
    ]
    run_cmd(cmd, f"Render Slide to {os.path.basename(output_png)}")
    if os.path.exists(temp_html):
        try:
            os.remove(temp_html)
        except Exception:
            pass

async def _save_edge_tts(text, voice, out_path):
    # vi-VN-NamMinhNeural, rate 0.95 (-5%), pitch -2Hz for slow, deliberate, clear teacher cadence
    communicate = edge_tts.Communicate(text, voice, rate="-5%", pitch="-2Hz")
    await communicate.save(out_path)

def generate_tts_audio(text, output_mp3, voice="vi-VN-NamMinhNeural"):
    raw_mp3 = output_mp3.replace(".mp3", "_raw.mp3")
    print(f"--> [TTS] Synthesizing audio for {os.path.basename(output_mp3)}...")
    
    generated = False
    # Attempt 1 & 2: edge-tts (NamMinh / HoaiMy)
    for v in [voice, "vi-VN-HoaiMyNeural" if voice != "vi-VN-HoaiMyNeural" else "vi-VN-NamMinhNeural"]:
        try:
            asyncio.run(_save_edge_tts(text, v, raw_mp3))
            if os.path.exists(raw_mp3) and os.path.getsize(raw_mp3) > 1000:
                print(f"    ✔ Successfully generated with edge-tts ({v})")
                generated = True
                break
        except Exception as e:
            print(f"    ⚠️ edge-tts ({v}) note: {e}")
            time.sleep(1)

    # Fallback to gTTS if edge-tts had network drop
    if not generated:
        print("    🔄 Using Vietnamese Neural Engine fallback (gTTS)...")
        tts = gTTS(text, lang="vi")
        tts.save(raw_mp3)
        print("    ✔ Successfully generated with gTTS engine!")

    # Pad 0.8s silence at end with ffmpeg for natural breathing pause
    cmd_pad = [
        "ffmpeg", "-y", "-i", raw_mp3,
        "-af", "apad=pad_dur=0.8",
        output_mp3
    ]
    run_cmd(cmd_pad, f"Pad Audio {os.path.basename(output_mp3)}")
    if os.path.exists(raw_mp3):
        try:
            os.remove(raw_mp3)
        except Exception:
            pass

def create_scene_mp4(slide_png, audio_mp3, output_mp4):
    cmd = [
        "ffmpeg", "-y",
        "-loop", "1", "-i", slide_png,
        "-i", audio_mp3,
        "-c:v", "libx264", "-tune", "stillimage",
        "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "192k",
        "-shortest",
        output_mp4
    ]
    run_cmd(cmd, f"Create Scene Video {os.path.basename(output_mp4)}")

def concat_scenes(scene_mp4_list, output_mp4):
    concat_txt = os.path.join(TEMP_DIR, f"concat_{int(time.time()*1000)}.txt")
    with open(concat_txt, "w", encoding="utf-8") as f:
        for s in scene_mp4_list:
            clean_path = os.path.abspath(s).replace("\\", "/")
            f.write(f"file '{clean_path}'\n")
    
    cmd = [
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0",
        "-i", concat_txt,
        "-c", "copy",
        output_mp4
    ]
    run_cmd(cmd, f"Concatenate to {os.path.basename(output_mp4)}")
    if os.path.exists(concat_txt):
        try:
            os.remove(concat_txt)
        except Exception:
            pass

# 2D Vector Wise Owl (Cú Thông Thái) SVG Builder
def get_owl_svg(mascot_mode="pointer"):
    if mascot_mode == "magnifier":
        action_svg = """
        <!-- Magnifier Glass -->
        <circle cx="32" cy="88" r="19" stroke="#38bdf8" stroke-width="4.5" fill="rgba(56,189,248,0.25)"/>
        <line x1="45" y1="102" x2="60" y2="120" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
        <path d="M24 80 A 10 10 0 0 1 36 74" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <text x="32" y="93" font-size="16" text-anchor="middle" fill="#facc15">🔍</text>
        <ellipse cx="132" cy="125" rx="12" ry="24" fill="#312e81"/>
        """
    elif mascot_mode == "cheer":
        action_svg = """
        <!-- Cheering wings -->
        <path d="M42,125 Q18,95 30,78 Q48,96 50,118 Z" fill="#312e81"/>
        <path d="M128,125 Q152,95 140,78 Q122,96 120,118 Z" fill="#312e81"/>
        <!-- Golden Star on Cap -->
        <polygon points="85,6 88,14 96,14 89,19 92,27 85,22 78,27 81,19 74,14 82,14" fill="#fbbf24"/>
        """
    else:  # pointer
        action_svg = """
        <!-- Pointer Stick -->
        <path d="M45,115 Q25,125 35,145 Q50,140 45,115 Z" fill="#312e81"/>
        <ellipse cx="132" cy="125" rx="12" ry="24" fill="#312e81"/>
        <line x1="38" y1="135" x2="6" y2="40" stroke="#fbbf24" stroke-width="5" stroke-linecap="round"/>
        <circle cx="6" cy="40" r="5" fill="#ef4444"/>
        """

    svg = f"""<svg width="150" height="180" viewBox="0 0 170 195" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Drop Shadow / Perch -->
    <ellipse cx="85" cy="188" rx="55" ry="6" fill="rgba(0,0,0,0.3)"/>
    <!-- Feet -->
    <ellipse cx="65" cy="180" rx="10" ry="5" fill="#f97316"/>
    <ellipse cx="105" cy="180" rx="10" ry="5" fill="#f97316"/>
    <!-- Body -->
    <ellipse cx="85" cy="120" rx="55" ry="60" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
    <ellipse cx="85" cy="128" rx="38" ry="42" fill="#f8fafc"/>
    <path d="M72 120 Q85 128 98 120" stroke="#cbd5e1" stroke-width="2.5" fill="none"/>
    <path d="M68 135 Q85 145 102 135" stroke="#cbd5e1" stroke-width="2.5" fill="none"/>
    <path d="M74 150 Q85 158 96 150" stroke="#cbd5e1" stroke-width="2.5" fill="none"/>
    <!-- Ear Tufts -->
    <polygon points="42,65 52,40 64,58" fill="#312e81"/>
    <polygon points="128,65 118,40 106,58" fill="#312e81"/>
    <!-- Head -->
    <circle cx="85" cy="85" r="48" fill="#1e1b4b" stroke="#6366f1" stroke-width="3"/>
    <ellipse cx="66" cy="86" rx="22" ry="24" fill="#312e81"/>
    <ellipse cx="104" cy="86" rx="22" ry="24" fill="#312e81"/>
    <!-- Eyes -->
    <circle cx="66" cy="86" r="16" fill="#ffffff"/>
    <circle cx="104" cy="86" r="16" fill="#ffffff"/>
    <circle cx="67" cy="86" r="10" fill="#f59e0b"/>
    <circle cx="103" cy="86" r="10" fill="#f59e0b"/>
    <circle cx="68" cy="86" r="6" fill="#0f172a"/>
    <circle cx="102" cy="86" r="6" fill="#0f172a"/>
    <circle cx="70" cy="83" r="2.5" fill="#ffffff"/>
    <circle cx="104" cy="83" r="2.5" fill="#ffffff"/>
    <!-- Beak -->
    <polygon points="80,95 90,95 85,108" fill="#f97316"/>
    <!-- Round Glasses -->
    <circle cx="66" cy="86" r="19" stroke="#fbbf24" stroke-width="3" fill="none"/>
    <circle cx="104" cy="86" r="19" stroke="#fbbf24" stroke-width="3" fill="none"/>
    <line x1="84" y1="86" x2="86" y2="86" stroke="#fbbf24" stroke-width="3"/>
    <!-- Bowtie -->
    <polygon points="75,112 85,116 75,120" fill="#ef4444"/>
    <polygon points="95,112 85,116 95,120" fill="#ef4444"/>
    <circle cx="85" cy="116" r="3" fill="#991b1b"/>
    <!-- Cap -->
    <polygon points="85,22 135,35 85,48 35,35" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
    <path d="M55,42 Q85,54 115,42 L115,50 Q85,62 55,50 Z" fill="#1e293b"/>
    <circle cx="85" cy="35" r="3.5" fill="#f59e0b"/>
    <path d="M85,35 Q115,40 125,55" stroke="#f59e0b" stroke-width="2.5" fill="none"/>
    <rect x="122" y="55" width="6" height="12" rx="2" fill="#d97706"/>
    <!-- Action / Pose -->
    {action_svg}
    </svg>"""
    return svg

# HTML Slide Template Builder with Wise Owl Mascot
def make_slide_html(title, subtitle, body_html, footer_note="Hệ thống Micro-learning Toán 12 • Thầy Thuấn Phan", mascot_mode="pointer"):
    mascot_sub_map = {
        "pointer": "Trọng tâm cốt lõi",
        "magnifier": "Soi bẫy đề thi",
        "cheer": "Chinh phục điểm 9+"
    }
    owl_svg = get_owl_svg(mascot_mode)
    sub = mascot_sub_map.get(mascot_mode, "Trợ lý Toán 12")

    return f"""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
        onload="renderMathInElement(document.body, {{delimiters: [{{left: '$$', right: '$$', display: true}}, {{left: '$', right: '$', display: false}}]}});"></script>
<link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; }}
  body {{
    margin: 0; width: 1920px; height: 1080px; overflow: hidden;
    background: radial-gradient(circle at 20% 20%, #1e1b4b 0%, #0f172a 60%, #020617 100%);
    color: #f8fafc;
    font-family: 'Tinos', 'Times New Roman', serif;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 45px 70px;
    position: relative;
  }}
  .header {{
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 2px solid rgba(245, 158, 11, 0.4);
    padding-bottom: 20px;
  }}
  .header-left {{
    display: flex; align-items: center; gap: 20px;
  }}
  .badge-icon {{
    background: #f59e0b; color: #020617; font-size: 32px; font-weight: 900;
    width: 65px; height: 65px; border-radius: 18px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  }}
  .title-main {{
    font-size: 38px; font-weight: 700; color: #ffffff; margin: 0; line-height: 1.2;
    letter-spacing: -0.5px;
  }}
  .title-sub {{
    font-size: 22px; color: #cbd5e1; margin-top: 4px;
  }}
  .header-right {{
    background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 10px 24px; border-radius: 16px; text-align: right;
  }}
  .badge-grade {{
    font-size: 18px; font-weight: bold; color: #f59e0b; text-transform: uppercase;
  }}
  .badge-school {{
    font-size: 16px; color: #94a3b8;
  }}
  .content-area {{
    flex: 1; margin: 30px 0; display: flex; flex-direction: column; justify-content: center;
    margin-right: 210px;
  }}
  .footer {{
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 15px; font-size: 20px; color: #94a3b8;
    margin-right: 210px;
  }}
  .katex {{ font-size: 1.18em !important; }}

  /* Mascot Widget in Corner */
  .mascot-widget {{
    position: absolute;
    bottom: 45px;
    right: 50px;
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, rgba(30, 27, 75, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%);
    border: 2px solid rgba(245, 158, 11, 0.6);
    border-radius: 24px;
    padding: 16px 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(245, 158, 11, 0.2);
    z-index: 99;
  }}
  .mascot-caption {{
    margin-top: 8px;
    text-align: center;
  }}
  .mascot-title {{
    font-size: 16px;
    font-weight: 800;
    color: #facc15;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }}
  .mascot-role {{
    font-size: 13px;
    color: #94a3b8;
    margin-top: 3px;
    white-space: nowrap;
  }}
</style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      <div class="badge-icon">📐</div>
      <div>
        <h1 class="title-main">{title}</h1>
        <div class="title-sub">{subtitle}</div>
      </div>
    </div>
    <div class="header-right">
      <div class="badge-grade">TOÁN 12 • SGK KẾT NỐI TRI THỨC</div>
      <div class="badge-school">LỚP HỌC TOÁN THẦY THUẤN PHAN</div>
    </div>
  </div>

  <div class="content-area">
    {body_html}
  </div>

  <div class="footer">
    <div>{footer_note}</div>
    <div style="color: #f59e0b; font-weight: bold;">Micro-learning Chuẩn GD&ĐT (16:9 • 1080p)</div>
  </div>

  <!-- Wise Owl Mascot Widget -->
  <div class="mascot-widget">
    {owl_svg}
    <div class="mascot-caption">
      <div class="mascot-title">🦉 CÚ THÔNG THÁI</div>
      <div class="mascot-role">{sub}</div>
    </div>
  </div>
</body>
</html>"""

print("Base module with Wise Owl mascot and multi-engine TTS loaded!")
