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
PUBLIC_VIDEOS_DIR = os.path.join(REPO_DIR, "public", "videos")
VIDEOS_DIR = os.path.join(REPO_DIR, "videos")
TEMP_DIR = os.path.join(REPO_DIR, "_video_temp")

os.makedirs(PUBLIC_VIDEOS_DIR, exist_ok=True)
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
    
    cmd = [
        CHROME_PATH,
        "--headless=new",
        "--virtual-time-budget=2500",
        f"--screenshot={output_png}",
        "--window-size=1920,1080",
        "--hide-scrollbars",
        os.path.abspath(temp_html)
    ]
    run_cmd(cmd, f"Render Slide to {os.path.basename(output_png)}")
    if os.path.exists(temp_html):
        try:
            os.remove(temp_html)
        except Exception:
            pass

async def _save_edge_tts(text, voice, out_path):
    communicate = edge_tts.Communicate(text, voice)
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

# HTML Slide Template Builder
def make_slide_html(title, subtitle, body_html, footer_note="Hệ thống Micro-learning Toán 12 • Thầy Thuấn Phan"):
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
  }}
  .footer {{
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 15px; font-size: 20px; color: #94a3b8;
  }}
  .katex {{ font-size: 1.18em !important; }}
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
</body>
</html>"""

print("Base module with multi-engine TTS loaded!")
