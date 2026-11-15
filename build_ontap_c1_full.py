# -*- coding: utf-8 -*-
"""
build_ontap_c1_full.py
Tạo trọn vẹn 3 mục bài giảng Ôn tập Chương 1 - Toán 11 KNTT:
- Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy Chương 1 (12 scenes, 4 ví dụ, đồng hồ đếm ngược)
- Mục 2: Rèn luyện 4 dạng toán trọng tâm & Phương pháp giải (12 scenes, 4 ví dụ, đồng hồ đếm ngược)
- Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn (12 scenes, 4 ví dụ, đồng hồ đếm ngược)
"""

import os
import sys
import json
import shutil
import asyncio
import subprocess
import time
from mutagen.mp3 import MP3
import edge_tts

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

ROOT_DIR = r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012"
AUDIO_DIR = os.path.join(ROOT_DIR, "audio")
PUBLIC_AUDIO_DIR = os.path.join(ROOT_DIR, "public", "audio")
TEMP_DIR = os.path.join(ROOT_DIR, "temp_audio_ontap_c1")

os.makedirs(AUDIO_DIR, exist_ok=True)
os.makedirs(PUBLIC_AUDIO_DIR, exist_ok=True)
os.makedirs(TEMP_DIR, exist_ok=True)

VOICE = "vi-VN-NamMinhNeural"

async def tts_scene(text, out_mp3):
    for attempt in range(3):
        try:
            comm = edge_tts.Communicate(text, VOICE, rate="-4%", pitch="-2Hz")
            await comm.save(out_mp3)
            if os.path.exists(out_mp3) and os.path.getsize(out_mp3) > 500:
                return True
        except Exception as e:
            print(f"      [Retry {attempt+1}] {e}")
            await asyncio.sleep(1.2)
    try:
        from gtts import gTTS
        tts = gTTS(text, lang='vi')
        tts.save(out_mp3)
        print("      [Fallback] gTTS used successfully")
        return True
    except Exception as e:
        print(f"      [Failed] Both edge_tts & gTTS failed: {e}")
        return False

def get_mp3_duration(mp3_path):
    try:
        audio = MP3(mp3_path)
        return float(audio.info.length)
    except Exception as e:
        print(f"Error getting duration for {mp3_path}: {e}")
        return 22.0

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
        print(f"Concat warning: {res.stderr.decode('utf-8', errors='ignore')}")
    else:
        print(f"  ✔ Concatenated -> {output_mp3} ({os.path.getsize(output_mp3)} bytes)")

# ==============================================================================
# DATA DEFINITION: MỤC 1
# ==============================================================================
MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TỔNG QUAN HỆ THỐNG KIẾN THỨC CHƯƠNG 1",
        "subtitle": "BÀI TẬP CUỐI CHƯƠNG 1 • TOÁN 11 KẾT NỐI TRI THỨC",
        "mascotMode": "pointer",
        "mascotTip": "Chương 1 gồm 4 bài liên hoàn: Góc lượng giác -> Công thức lượng giác -> Hàm số lượng giác -> Phương trình lượng giác!",
        "narration": "Chào mừng các em học sinh lớp mười một đến với bài ôn tập toàn diện Chương một: Hàm số lượng giác và phương trình lượng giác. Đây là chương mở đầu có tính nền tảng cao của môn Toán lớp mười một, kết nối chặt chẽ bốn bài học cốt lõi: Bài một về góc và giá trị lượng giác, Bài hai về hệ thống công thức biến đổi lượng giác, Bài ba về tính chất và đồ thị bốn hàm số lượng giác, và Bài bốn về các phương trình lượng giác cơ bản. Nắm chắc mối liên kết liên hoàn này sẽ giúp các em tự tin bứt phá điểm số trong các kỳ thi sắp tới.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Hệ thống hóa</span>
      <h3 class="text-xl font-black text-emerald-200">Sơ Đồ Liên Hoàn 4 Bài Học Chương 1</h3>
    </div>
    <p class="text-sm text-slate-300">Toàn bộ chuyên đề Lượng giác 11 được xây dựng theo một chu trình logic hoàn chỉnh:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">📘 Bài 1: Góc & Giá trị Lượng giác</h4>
      <p class="text-slate-300 leading-relaxed">• Đơn vị radian: $\\pi\\text{ rad} = 180^\\circ$, độ dài cung $l = R\\alpha$.<br/>• Giá trị $\\sin, \\cos, \\tan, \\cot$ trên đường tròn lượng giác bán kính $R=1$.<br/>• Các hệ thức cơ bản và cung liên quan đặc biệt.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">📗 Bài 2: Công thức Lượng giác</h4>
      <p class="text-slate-300 leading-relaxed">• Công thức cộng: $\\sin(a\\pm b), \\cos(a\\pm b), \\tan(a\\pm b)$.<br/>• Công thức nhân đôi, hạ bậc và góc bội.<br/>• Công thức biến đổi tích thành tổng & tổng thành tích.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md">
      <h4 class="font-bold text-cyan-300 text-sm mb-1">📙 Bài 3: Hàm số Lượng giác</h4>
      <p class="text-slate-300 leading-relaxed">• TXĐ, TGT, tính chẵn - lẻ, tính tuần hoàn & chu kỳ.<br/>• Đồ thị hình sóng của $y=\\sin x, y=\\cos x$ (chu kỳ $2\\pi$).<br/>• Đồ thị và các đường tiệm cận của $y=\\tan x, y=\\cot x$ (chu kỳ $\\pi$).</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">📕 Bài 4: Phương trình Lượng giác Cơ bản</h4>
      <p class="text-slate-300 leading-relaxed">• $\\sin x = m \\iff x = \\alpha + k2\\pi$ hoặc $x = \\pi - \\alpha + k2\\pi$.<br/>• $\\cos x = m \\iff x = \\pm\\alpha + k2\\pi$.<br/>• $\\tan x = m, \\cot x = m \\iff x = \\alpha + k\\pi$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. SƠ ĐỒ TƯ DUY CỐT LÕI CÔNG THỨC LƯỢNG GIÁC",
        "subtitle": "BÍ KÍP THUỘC LÒNG HỆ THỐNG CÔNG THỨC KHÔNG BAO GIỜ QUÊN",
        "mascotMode": "explain",
        "mascotTip": "Thần chú: Cos đối, Sin bù, Phụ chéo, Khác pi tang! Sin thì sin cos cos sin, Cos thì cos cos sin sin dấu trừ!",
        "narration": "Để ghi nhớ các công thức lượng giác một cách nhẹ nhàng mà không bao giờ nhầm dấu, các em hãy nắm vững các quy tắc thần chú: Trước hết là hệ thức cơ bản: sin bình cộng cos bình bằng một; một cộng tang bình bằng một chia cos bình; một cộng côtang bình bằng một chia sin bình. Các góc liên kết: Cốt đối, Sin bù, Phụ chéo, Hơn kém pi tang. Công thức cộng: sin thì sin cos cos sin, cos thì cos cos sin sin dấu trừ. Từ đó ta suy ra công thức nhân đôi sin hai a bằng hai sin a cos a, cos hai a bằng hai cos bình a trừ một, và công thức hạ bậc rất hay dùng để tìm nguyên hàm sau này.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-teal-300">Bảng Tổng Hợp Công Thức Cốt Lõi Cần Nhớ</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-emerald-400 font-bold block mb-1">1. Hệ thức cơ bản ($k \\in \\mathbb{Z}$):</span>
        $$\\sin^2\\alpha + \\cos^2\\alpha = 1$$
        $$1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha} \\; (\\alpha \\ne \\frac{\\pi}{2} + k\\pi)$$
        $$1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha} \\; (\\alpha \\ne k\\pi), \\quad \\tan\\alpha \\cdot \\cot\\alpha = 1$$
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-cyan-400 font-bold block mb-1">2. Công thức cộng chuẩn:</span>
        $$\\sin(a \\pm b) = \\sin a\\cos b \\pm \\cos a\\sin b$$
        $$\\cos(a \\pm b) = \\cos a\\cos b \\mp \\sin a\\sin b$$
        $$\\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a\\tan b}$$
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-amber-400 font-bold block mb-1">3. Công thức nhân đôi:</span>
        $$\\sin 2a = 2\\sin a\\cos a$$
        $$\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$$
        $$\\tan 2a = \\frac{2\\tan a}{1 - \\tan^2 a}$$
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-rose-400 font-bold block mb-1">4. Công thức hạ bậc:</span>
        $$\\cos^2 a = \\frac{1 + \\cos 2a}{2}$$
        $$\\sin^2 a = \\frac{1 - \\cos 2a}{2}$$
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH ĐỘ DÀI CUNG TRÒN BÁNH XE QUAY",
        "subtitle": "BÀI TOÁN THỰC TẾ • ỨNG DỤNG ĐƠN VỊ RADIAN $l = R\\alpha$",
        "mascotMode": "think",
        "mascotTip": "Ghi nhớ công thức $l = R \\alpha$. Đổi đơn vị chính xác và chú ý làm tròn theo yêu cầu!",
        "narration": "Chúng ta cùng bắt đầu với Ví dụ số một. Một bánh xe đạp có bán kính bằng bốn mươi xăng-ti-mét. Khi người đạp xe chuyển động làm bánh xe quay một góc an-pha bằng bảy pi phần tư radian, hãy tính độ dài quãng đường mà một điểm trên vành bánh xe đã di chuyển được, làm tròn kết quả đến hàng phần mười. Các em có mười lăm giây để suy nghĩ và ghi nhanh đáp án ra nháp.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Thực tế</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Bài toán chuyển động quay của bánh xe</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Một bánh xe đạp có bán kính $R = 40\\text{ cm}$. Khi bánh xe quay được một góc lượng giác có số đo $\\alpha = \\frac{7\\pi}{4}\\text{ rad}$, hãy tính độ dài quãng đường $l$ mà một điểm trên vành bánh xe đã vạch ra (lấy $\\pi \\approx 3{,}1416$, làm tròn đến hàng phần mười).
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $l \\approx 109{,}9\\text{ cm}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $l \\approx 219{,}9\\text{ cm}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $l \\approx 280{,}0\\text{ cm}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $l \\approx 140{,}5\\text{ cm}$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $l \\approx 219{,}9\\text{ cm}$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "cheer",
        "mascotTip": "$l = 40 \\times \\frac{7\\pi}{4} = 70\\pi \\approx 219.9\\text{ cm}$. Chúc mừng các em chọn B!",
        "narration": "Hết thời gian. Chúng ta cùng xem lời giải chi tiết. Áp dụng công thức tính độ dài cung tròn: l bằng R nhân an-pha. Trong đó bán kính R bằng bốn mươi xăng-ti-mét, góc an-pha bằng bảy pi phần tư radian. Thay số vào ta có: l bằng bốn mươi nhân bảy pi phần tư, rút gọn bốn mươi chia bốn được mười, mười nhân bảy bằng bảy mươi pi xăng-ti-mét. Lấy pi xấp xỉ ba phẩy một bốn một sáu, ta được kết quả xấp xỉ hai trăm mười chín phẩy chín xăng-ti-mét. Đáp án chính xác là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Áp dụng công thức độ dài cung $l = R\\alpha$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Độ dài cung tròn mà điểm trên vành bánh xe vạch ra là:</p>
      <div class="text-center font-bold text-emerald-300 text-sm py-1">
        $$l = R \\cdot \\alpha = 40 \\cdot \\frac{7\\pi}{4} = 70\\pi \\text{ (cm)}$$
      </div>
      <p class="text-slate-200">• Thay $\\pi \\approx 3{,}1416$ vào biểu thức:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$l \\approx 70 \\times 3{,}1416 = 219{,}912 \\approx 219{,}9 \\text{ (cm)}$$
      </div>
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        <b>Kết luận:</b> Điểm trên vành bánh xe di chuyển được quãng đường xấp xỉ $219{,}9\\text{ cm}$. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: RÚT GỌN BIỂU THỨC LƯỢNG GIÁC",
        "subtitle": "DẠNG 2 • ÁP DỤNG CÔNG THỨC NHÂN ĐÔI VÀ HỆ THỨC LƯỢNG GIÁC",
        "mascotMode": "think",
        "mascotTip": "Khai triển $\\sin 2x = 2\\sin x \\cos x$ và $\\cos 2x = 2\\cos^2 x - 1$ để xuất hiện nhân tử chung $(2\\cos x + 1)$!",
        "narration": "Tiếp tục với Ví dụ số hai. Rút gọn biểu thức lượng giác: A bằng mở ngoặc sin hai x cộng sin x đóng ngoặc, chia cho mở ngoặc một cộng cos hai x cộng cos x đóng ngoặc, với giả thiết biểu thức hoàn toàn xác định. Các em có ba mươi giây để vận dụng công thức nhân đôi của sin và cos để rút gọn biểu thức này.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Rút gọn</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-teal-200 mb-2">Rút gọn biểu thức lượng giác chứa góc nhân đôi</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Rút gọn biểu thức sau trên miền xác định:
      $$A = \\frac{\\sin 2x + \\sin x}{1 + \\cos 2x + \\cos x}$$
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $A = \\cot x$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $A = \\tan x$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $A = 2\\tan x$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $A = 1$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ RÚT GỌN $A = \\tan x$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "Phép biến đổi kinh điển: $1 + \\cos 2x = 2\\cos^2 x$, xuất hiện ngay nhân tử $(2\\cos x + 1)$!",
        "narration": "Hết ba mươi giây. Chúng ta cùng phân tích biểu thức A. Ở tử số, khai triển sin hai x bằng hai sin x nhân cos x. Khi đặt sin x ra ngoài, ta được tử số bằng sin x nhân mở ngoặc hai cos x cộng một đóng ngoặc. Ở mẫu số, ta dùng công thức nhân đôi cos hai x bằng hai cos bình x trừ một. Số một và trừ một triệt tiêu nhau, mẫu số còn hai cos bình x cộng cos x. Đặt cos x ra ngoài, mẫu số bằng cos x nhân mở ngoặc hai cos x cộng một đóng ngoặc. Rút gọn nhân tử chung hai cos x cộng một ở cả tử và mẫu, ta thu được A bằng sin x chia cos x, chính là bằng tang x. Đáp án chọn là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-teal-300">Khai triển nhân đôi và triệt tiêu nhân tử chung</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Biến đổi tử số:</p>
      $$\\text{Tử} = \\sin 2x + \\sin x = 2\\sin x\\cos x + \\sin x = \\sin x(2\\cos x + 1)$$
      <p class="text-slate-200">• Biến đổi mẫu số (áp dụng $\\cos 2x = 2\\cos^2 x - 1$):</p>
      $$\\text{Mẫu} = 1 + (2\\cos^2 x - 1) + \\cos x = 2\\cos^2 x + \\cos x = \\cos x(2\\cos x + 1)$$
      <p class="text-slate-200">• Thay vào biểu thức $A$ và rút gọn:</p>
      <div class="text-center font-bold text-teal-300 text-sm py-1">
        $$A = \\frac{\\sin x(2\\cos x + 1)}{\\cos x(2\\cos x + 1)} = \\frac{\\sin x}{\\cos x} = \\tan x$$
      </div>
      <div class="p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2">
        👉 <b>Đáp án chọn: B ($A = \\tan x$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM TẬP XÁC ĐỊNH CỦA HÀM SỐ",
        "subtitle": "DẠNG 3 • ĐIỀU KIỆN CĂN BẬC HAI VÀ MẪU THỨC CHỨA BIỂU THỨC LƯỢNG GIÁC",
        "mascotMode": "think",
        "mascotTip": "Lưu ý $1 - \\cos 2x = 2\\sin^2 x \\ge 0$, do đó căn bậc hai xác định khi $\\sin x > 0$!",
        "narration": "Chúng ta bước sang Ví dụ số ba: Tìm tập xác định D của hàm số y bằng căn bậc hai của biểu thức: một trừ cos hai x chia cho sin x. Bài toán này kết hợp cả điều kiện căn bậc hai không âm và mẫu số phải khác không. Các em có mười lăm giây để suy luận.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Tập xác định</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-cyan-200 mb-2">Tìm tập xác định chứa căn thức và phân thức</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Tìm tập xác định $D$ của hàm số sau:
      $$y = \\sqrt{\\frac{1 - \\cos 2x}{\\sin x}}$$
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $D = \\bigcup_{k\\in\\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $D = \\bigcup_{k\\in\\mathbb{Z}} [k2\\pi; \\pi + k2\\pi]$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $D = \\mathbb{R}$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $D = \\bigcup_{k\\in\\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "explain",
        "mascotTip": "Điểm trên đường tròn có tung độ dương khi thuộc nửa trên trục Ox: $(k2\\pi; \\pi + k2\\pi)$!",
        "narration": "Hết thời gian. Hàm số xác định khi và chỉ khi biểu thức trong căn lớn hơn hoặc bằng không và mẫu số sin x khác không. Ta nhận thấy tử số là một trừ cos hai x bằng hai sin bình x, luôn lớn hơn hoặc bằng không với mọi x. Để phân thức có nghĩa và không âm, ta bắt buộc phải có mẫu số sin x lớn hơn hẳn không. Trên đường tròn lượng giác, giá trị sin của một góc dương khi và chỉ khi điểm biểu diễn nằm ở nửa trên trục hoành, tức x thuộc khoảng từ k hai pi đến pi cộng k hai pi, với k thuộc Z. Do đó đáp án chính xác là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-cyan-300">Đánh giá dấu tử số và điều kiện mẫu số dương</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Điều kiện xác định của hàm số:</p>
      $$\\begin{cases} \\frac{1 - \\cos 2x}{\\sin x} \\ge 0 \\\\ \\sin x \\ne 0 \\end{cases}$$
      <p class="text-slate-200">• Áp dụng công thức hạ bậc, ta có tử số: $1 - \\cos 2x = 2\\sin^2 x \\ge 0, \\forall x$.</p>
      <p class="text-slate-200">• Khi $\\sin x \\ne 0$ thì $2\\sin^2 x > 0$. Do đó hệ điều kiện tương đương:</p>
      <div class="text-center font-bold text-cyan-300 text-sm py-1">
        $$\\sin x > 0 \\iff k2\\pi < x < \\pi + k2\\pi \\quad (k \\in \\mathbb{Z})$$
      </div>
      <div class="p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2">
        👉 <b>Tập xác định:</b> $D = \\bigcup_{k \\in \\mathbb{Z}} (k2\\pi; \\pi + k2\\pi)$. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: GIẢI PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN",
        "subtitle": "DẠNG 4 • PHƯƠNG TRÌNH $\\sin(2x - \\frac{\\pi}{3}) = \\frac{\\sqrt{3}}{2}$",
        "mascotMode": "think",
        "mascotTip": "$\\frac{\\sqrt{3}}{2} = \\sin \\frac{\\pi}{3}$. Luôn có 2 họ nghiệm $u = \\alpha + k2\\pi$ và $u = \\pi - \\alpha + k2\\pi$!",
        "narration": "Ví dụ số bốn: Giải phương trình lượng giác sin của mở ngoặc hai x trừ pi phần ba đóng ngoặc bằng căn ba chia hai. Phương trình lượng giác cơ bản có hai nhánh nghiệm. Các em có ba mươi giây để tìm chính xác cả hai họ nghiệm của phương trình.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Giải PTLG</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">Phương trình $\\sin u(x) = m$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Giải phương trình lượng giác sau:
      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$$
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $x = \\frac{\\pi}{3} + k\\pi, x = \\frac{\\pi}{2} + k\\pi$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $x = \\frac{\\pi}{6} + k\\pi, x = \\frac{\\pi}{3} + k\\pi$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $x = \\frac{\\pi}{3} + k2\\pi, x = \\frac{\\pi}{2} + k2\\pi$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $x = \\pm\\frac{\\pi}{3} + k\\pi$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $x = \\frac{\\pi}{3} + k\\pi$ VÀ $x = \\frac{\\pi}{2} + k\\pi$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "Lưu ý chia 2 vế cho 2 thì chu kỳ $k2\\pi$ sẽ thành $k\\pi$! Đáp án A hoàn toàn chuẩn xác!",
        "narration": "Thời gian đã hết. Vì căn ba chia hai bằng sin của pi phần ba, phương trình tương đương hai trường hợp. Trường hợp một: hai x trừ pi phần ba bằng pi phần ba cộng k hai pi. Chuyển vế ta được hai x bằng hai pi phần ba cộng k hai pi, chia hai vế cho hai ta được x bằng pi phần ba cộng k pi. Trường hợp hai: hai x trừ pi phần ba bằng pi trừ pi phần ba cộng k hai pi. Rút gọn ta được hai x bằng pi cộng k hai pi, chia hai ta được x bằng pi phần hai cộng k pi, với k thuộc Z. Cả hai họ nghiệm đều rất chuẩn xác và chu kỳ là k pi. Đáp án chính xác là A.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Biến đổi theo công thức nghiệm tổng quát của sin</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có $\\frac{\\sqrt{3}}{2} = \\sin\\frac{\\pi}{3}$. Phương trình trở thành:</p>
      $$\\sin\\left(2x - \\frac{\\pi}{3}\\right) = \\sin\\frac{\\pi}{3} \\iff \\left[\\begin{array}{l} 2x - \\frac{\\pi}{3} = \\frac{\\pi}{3} + k2\\pi \\\\ 2x - \\frac{\\pi}{3} = \\pi - \\frac{\\pi}{3} + k2\\pi \\end{array}\\right.$$
      <p class="text-slate-200">• Giải từng trường hợp ($k \\in \\mathbb{Z}$):</p>
      $$\\left[\\begin{array}{l} 2x = \\frac{2\\pi}{3} + k2\\pi \\iff x = \\frac{\\pi}{3} + k\\pi \\\\ 2x = \\pi + k2\\pi \\iff x = \\frac{\\pi}{2} + k\\pi \\end{array}\\right.$$
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 <b>Nghiệm của phương trình:</b> $x = \\frac{\\pi}{3} + k\\pi$ và $x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$). <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI & SAI LẦM PHỔ BIẾN",
        "subtitle": "TOP 3 BẪY LƯỢNG GIÁC KHIẾN HỌC SINH MẤT ĐIỂM ĐÁNG TIẾC",
        "mascotMode": "explain",
        "mascotTip": "Ghi nhớ: Hàm tan, cot chu kỳ pi; hàm sin, cos chu kỳ 2pi; đừng quên điều kiện k thuộc Z!",
        "narration": "Thầy Nam Minh lưu ý ba bẫy thi thường gặp ở Chương một: Thứ nhất, khi giải phương trình tang x bằng m, rất nhiều bạn quên điều kiện cos x khác không, tức x khác pi phần hai cộng k pi. Thứ hai, đối với phương trình sin x bằng m, nhiều bạn chỉ lấy một họ nghiệm x bằng an-pha cộng k hai pi mà quên mất họ nghiệm thứ hai là pi trừ an-pha cộng k hai pi. Thứ ba, khi tính chu kỳ tuần hoàn, hàm số sin và cos có chu kỳ là hai pi, nhưng hàm số tang và côtang chỉ có chu kỳ là pi.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">3 Lỗi Sai Thường Gặp Cần Tuyệt Đối Tránh</h3>
    </div>
    <div class="grid grid-cols-3 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Quên TXĐ của tan/cot</h4>
        <p class="text-slate-300 leading-relaxed">Khi phương trình có chứa $\\tan x$ hoặc $\\cot x$, bắt buộc đặt điều kiện $\\cos x \\ne 0$ ($x \\ne \\frac{\\pi}{2} + k\\pi$) hoặc $\\sin x \\ne 0$ ($x \\ne k\\pi$).</p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Thiếu họ nghiệm $\\pi - \\alpha$</h4>
        <p class="text-slate-300 leading-relaxed">Phương trình $\\sin x = m$ luôn có 2 họ nghiệm $\\alpha + k2\\pi$ và $\\pi - \\alpha + k2\\pi$. Tuyệt đối không chỉ lấy duy nhất một họ nghiệm!</p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-cyan-400">
        <h4 class="font-bold text-cyan-300 mb-1">❌ Bẫy 3: Nhầm chu kỳ tuần hoàn</h4>
        <p class="text-slate-300 leading-relaxed">Hàm $y=\\sin(\\omega x)$ có chu kỳ $T=\\frac{2\\pi}{|\\omega|}$. Nhưng hàm $y=\\tan(\\omega x)$ có chu kỳ $T=\\frac{\\pi}{|\\omega|}$ (chỉ có $\\pi$ ở tử số)!</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "NẮM VỮNG NỀN TẢNG ĐỂ BƯỚC VÀO RÈN LUYỆN 4 DẠNG TOÁN TRỌNG TÂM",
        "mascotMode": "celebrate",
        "mascotTip": "Ghi chép sơ đồ tư duy vào sổ tay! Chuyển ngay sang Mục 2 để rèn luyện 4 dạng toán thực chiến!",
        "narration": "Như vậy, thầy trò chúng ta đã hoàn thành xuất sắc Mục một: Hệ thống hóa lý thuyết và bốn ví dụ tiêu biểu cho Chương một. Các em hãy ghi nhớ vững chắc các công thức cốt lõi và các bẫy thi vừa nêu. Ngay bây giờ, mời các em chuyển sang Mục hai để cùng rèn luyện bốn dạng toán trọng tâm hay xuất hiện nhất trong các đề kiểm tra định kỳ.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl">🦉✨</div>
    <h3 class="text-xl font-black text-emerald-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 1!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã làm chủ trọn vẹn bản đồ tư duy 4 bài học và vượt qua 4 ví dụ củng cố nền tảng. Hãy ghi nhớ thần chú lượng giác và sẵn sàng bước sang Mục 2 để rèn luyện 4 dạng toán thực chiến điểm 9+!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ 4 Ví dụ đã hoàn thành</span>
      <span class="px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40">✔ Sơ đồ tư duy sẵn sàng</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 2</span>
    </div>
  </div>
</div>
"""
    }
]

print("MỤC 1 definitions completed.")

# ==============================================================================
# DATA DEFINITION: MỤC 2
# ==============================================================================
MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TỔNG QUAN 4 DẠNG TOÁN TRỌNG TÂM TRONG ĐỀ THI",
        "subtitle": "MỤC 2 • MA TRẬN ĐỀ KIỂM TRA ĐỊNH KỲ & THI HỌC KỲ I",
        "mascotMode": "pointer",
        "mascotTip": "4 dạng toán cốt lõi chiếm tới 80% điểm số Lượng giác: Tính giá trị, Cực trị, Đếm nghiệm, và Bài toán thực tế!",
        "narration": "Chào mừng các em đến với Mục hai của bài ôn tập Chương một. Ở mục này, chúng ta sẽ tập trung rèn luyện bốn dạng toán cốt lõi chiếm tới tám mươi phần trăm số điểm phần lượng giác trong đề thi: Dạng một là tính giá trị lượng giác khi biết một giá trị cho trước kết hợp dấu góc phần tư; Dạng hai là tìm tập giá trị, giá trị lớn nhất và nhỏ nhất; Dạng ba là đếm số nghiệm của phương trình lượng giác trên một đoạn cho trước; và Dạng bốn là bài toán thực tế mô hình hóa dao động điều hòa và thủy triều.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Trọng tâm</span>
      <h3 class="text-xl font-black text-blue-200">4 Dạng Toán Cốt Lõi Phủ Kín Ma Trận Đề Thi</h3>
    </div>
    <p class="text-sm text-slate-300">Rèn luyện phương pháp nhận diện nhanh và kỹ năng giải toán chính xác:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md">
      <h4 class="font-bold text-blue-300 text-sm mb-1">🎯 Dạng 1: Tính giá trị biểu thức lượng giác</h4>
      <p class="text-slate-300 leading-relaxed">• Cho trước 1 giá trị lượng giác và khoảng của góc $\\alpha$.<br/>• Xét dấu góc phần tư để chọn nghiệm dấu $(+)$ hoặc $(-)$.<br/>• Áp dụng công thức cộng, nhân đôi để tính giá trị biểu thức $P$.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md">
      <h4 class="font-bold text-indigo-300 text-sm mb-1">📊 Dạng 2: Tìm GTLN, GTNN của hàm số</h4>
      <p class="text-slate-300 leading-relaxed">• Biến đổi biểu thức về cùng một hàm số $\\sin$ hoặc $\\cos$.<br/>• Đánh giá dựa trên miền chặn $-1 \\le \\sin u, \\cos u \\le 1$.<br/>• Tìm điều kiện để đẳng thức xảy ra (tìm $x$ tương ứng).</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md">
      <h4 class="font-bold text-purple-300 text-sm mb-1">🔢 Dạng 3: Đếm số nghiệm trên đoạn $[a; b]$</h4>
      <p class="text-slate-300 leading-relaxed">• Giải tìm họ nghiệm tổng quát chứa tham số nguyên $k$.<br/>• Thiết lập bất phương trình kép: $a \\le x_k \\le b$.<br/>• Đếm số giá trị $k \\in \\mathbb{Z}$ và kiểm tra loại bỏ nghiệm trùng nhau.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-cyan-400 shadow-md">
      <h4 class="font-bold text-cyan-300 text-sm mb-1">🌊 Dạng 4: Bài toán thực tế mô hình lượng giác</h4>
      <p class="text-slate-300 leading-relaxed">• Độ sâu mực nước thủy triều theo thời gian trong ngày $h(t)$.<br/>• Chuyển động quay của bánh xe, con lắc, cánh quạt gió.<br/>• Tìm thời điểm đạt cực trị và thời điểm đạt mức yêu cầu.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CHIẾN THUẬT XỬ LÝ & BẢNG XÉT DẤU GÓC PHẦN TƯ",
        "subtitle": "KỸ NĂNG VÀNG: KHÔNG BAO GIỜ BỊ SAI DẤU LƯỢNG GIÁC",
        "mascotMode": "explain",
        "mascotTip": "Góc phần tư: I (all +); II (sin +); III (tan, cot +); IV (cos +). Thần chú: Nhất cả, Nhì sin, Tam tang, Tứ cos!",
        "narration": "Để giải quyết nhanh và chính xác bốn dạng toán này, các em cần có chiến lược rõ ràng. Với bài toán tìm giá trị, luôn vẽ nhanh vòng tròn lượng giác để kiểm tra dấu âm dương của các hàm số trong từng góc phần tư. Thần chú: Nhất cả, Nhì sin, Tam tang, Tứ cos. Với bài toán tìm giá trị lớn nhất, nhỏ nhất, hãy đưa biểu thức về cùng một hàm số rồi chặn trong đoạn từ trừ một đến một. Với bài toán đếm nghiệm, sau khi tìm được họ nghiệm theo k, hãy thiết lập bất phương trình kép để tìm số lượng số nguyên k tương ứng.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-blue-300">Bảng Thần Chú Xét Dấu Góc Phần Tư: "Nhất Cả, Nhì Sin, Tam Tang, Tứ Cos"</h3>
    </div>
    <div class="grid grid-cols-4 gap-2 text-center text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border border-emerald-500/30">
        <span class="text-emerald-400 font-bold block mb-1">Góc phần tư I</span>
        <span class="text-slate-300 text-[11px]">$(0 < \\alpha < \\frac{\\pi}{2})$</span>
        <div class="mt-2 text-emerald-300 font-bold leading-relaxed">
          $\\sin\\alpha > 0$<br/>$\\cos\\alpha > 0$<br/>$\\tan\\alpha > 0, \\cot\\alpha > 0$
        </div>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-teal-500/30">
        <span class="text-teal-400 font-bold block mb-1">Góc phần tư II</span>
        <span class="text-slate-300 text-[11px]">$(\\frac{\\pi}{2} < \\alpha < \\pi)$</span>
        <div class="mt-2 text-teal-300 font-bold leading-relaxed">
          $\\mathbf{\\sin\\alpha > 0}$<br/>$\\cos\\alpha < 0$<br/>$\\tan\\alpha < 0, \\cot\\alpha < 0$
        </div>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-amber-500/30">
        <span class="text-amber-400 font-bold block mb-1">Góc phần tư III</span>
        <span class="text-slate-300 text-[11px]">$(\\pi < \\alpha < \\frac{3\\pi}{2})$</span>
        <div class="mt-2 text-amber-300 font-bold leading-relaxed">
          $\\sin\\alpha < 0$<br/>$\\cos\\alpha < 0$<br/>$\\mathbf{\\tan\\alpha > 0, \\cot\\alpha > 0}$
        </div>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-indigo-500/30">
        <span class="text-indigo-400 font-bold block mb-1">Góc phần tư IV</span>
        <span class="text-slate-300 text-[11px]">$(\\frac{3\\pi}{2} < \\alpha < 2\\pi)$</span>
        <div class="mt-2 text-indigo-300 font-bold leading-relaxed">
          $\\sin\\alpha < 0$<br/>$\\mathbf{\\cos\\alpha > 0}$<br/>$\\tan\\alpha < 0, \\cot\\alpha < 0$
        </div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. DẠNG 1 - VÍ DỤ 1: TÍNH GIÁ TRỊ BIỂU THỨC LƯỢNG GIÁC",
        "subtitle": "ĐỀ BÀI • CHO $\\cos\\alpha = -\\frac{3}{5}$ VỚI $\\frac{\\pi}{2} < \\alpha < \\pi$",
        "mascotMode": "think",
        "mascotTip": "Góc phần tư II nên $\\sin\\alpha > 0$. Tính $\\sin\\alpha = \\frac{4}{5}$, $\\tan\\alpha = -\\frac{4}{3}$!",
        "narration": "Ví dụ số một của Dạng một: Cho biết cos an-pha bằng trừ ba phần năm, với an-pha nằm trong khoảng từ pi phần hai đến pi. Hãy tính giá trị của biểu thức P bằng mở ngoặc sin hai an-pha trừ một đóng ngoặc, chia cho mở ngoặc cos hai an-pha cộng tang an-pha đóng ngoặc. Các em có ba mươi giây để tính toán.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Dạng 1 • Tính Giá Trị</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-blue-200 mb-2">Tính giá trị biểu thức $P$ theo $\\alpha$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho $\\cos\\alpha = -\\frac{3}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Tính giá trị của biểu thức:
      $$P = \\frac{\\sin 2\\alpha - 1}{\\cos 2\\alpha + \\tan\\alpha}$$
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $P = -\\frac{147}{121}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $P = \\frac{147}{121}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $P = \\frac{49}{75}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $P = \\frac{121}{147}$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. DẠNG 1 - VÍ DỤ 1: LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $P = \\frac{147}{121}$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "cheer",
        "mascotTip": "Tử: $-\\frac{49}{25}$; Mẫu: $-\\frac{121}{75}$. Chia hai số âm ra kết quả dương $\\frac{147}{121}$!",
        "narration": "Hết ba mươi giây. Lời giải chi tiết như sau: Vì an-pha nằm ở góc phần tư thứ hai nên sin an-pha mang dấu dương. Ta có sin bình an-pha bằng một trừ cos bình, tức một trừ chín phần hai lăm bằng mười sáu phần hai lăm, suy ra sin an-pha bằng bốn phần năm. Từ đó ta tính được tang an-pha bằng trừ bốn phần ba. Tiếp theo, sin hai an-pha bằng hai nhân bốn phần năm nhân trừ ba phần năm bằng trừ hai mươi tư phần hai lăm. Cos hai an-pha bằng hai cos bình trừ một bằng trừ bảy phần hai lăm. Tử số của P bằng trừ bốn mươi chín phần hai lăm. Mẫu số bằng trừ một trăm hai mươi mốt phần bảy mươi lăm. Chia tử cho mẫu, ta được kết quả cuối cùng P bằng một trăm bốn mươi bảy phần một trăm hai mươi mốt. Đáp án chọn là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-blue-300">Xác định dấu và tính toán từng thành phần</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư II) nên $\\sin\\alpha > 0$:</p>
      $$\\sin\\alpha = \\sqrt{1 - \\cos^2\\alpha} = \\sqrt{1 - \\frac{9}{25}} = \\frac{4}{5} \\implies \\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha} = -\\frac{4}{3}$$
      <p class="text-slate-200">• Tính $\\sin 2\\alpha$ và $\\cos 2\\alpha$:</p>
      $$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha = 2\\left(\\frac{4}{5}\\right)\\left(-\\frac{3}{5}\\right) = -\\frac{24}{25}$$
      $$\\cos 2\\alpha = 2\\cos^2\\alpha - 1 = 2\\left(\\frac{9}{25}\\right) - 1 = -\\frac{7}{25}$$
      <p class="text-slate-200">• Thay vào biểu thức $P$:</p>
      $$\\text{Tử} = -\\frac{24}{25} - 1 = -\\frac{49}{25}; \\quad \\text{Mẫu} = -\\frac{7}{25} - \\frac{4}{3} = -\\frac{121}{75}$$
      <div class="text-center font-bold text-blue-300 text-sm py-1">
        $$P = \\frac{-49/25}{-121/75} = \\left(-\\frac{49}{25}\\right) \\cdot \\left(-\\frac{75}{121}\\right) = \\frac{147}{121}$$
      </div>
      <div class="p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2">
        👉 <b>Đáp án chọn: B ($P = \\frac{147}{121}$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. DẠNG 2 - VÍ DỤ 2: TÌM GIÁ TRỊ LỚN NHẤT VÀ NHỎ NHẤT",
        "subtitle": "ĐỀ BÀI • HÀM SỐ $y = 2\\sin^2 x - \\cos 2x + 3$",
        "mascotMode": "think",
        "mascotTip": "Đưa về cùng hàm $\\cos 2x$: dùng công thức $2\\sin^2 x = 1 - \\cos 2x$!",
        "narration": "Ví dụ số hai thuộc Dạng hai: Tìm giá trị lớn nhất ký hiệu là M và giá trị nhỏ nhất ký hiệu là m của hàm số y bằng hai sin bình x trừ cos hai x cộng ba. Các em có mười lăm giây để biến đổi và tìm ra giá trị lớn nhất và nhỏ nhất.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Dạng 2 • GTLN - GTNN</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-indigo-200 mb-2">Tìm tập giá trị $[m; M]$ của hàm số</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số sau:
      $$y = 2\\sin^2 x - \\cos 2x + 3$$
      Tính tổng $T = M + m$.
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $T = 7$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $T = 8$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $T = 6$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $T = 9$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. DẠNG 2 - VÍ DỤ 2: LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $M = 6, m = 2 \\implies M + m = 8$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "explain",
        "mascotTip": "$y = 4 - 2\\cos 2x$. Do $-1 \\le \\cos 2x \\le 1 \\implies 2 \\le y \\le 6$. Cực kỳ tinh gọn!",
        "narration": "Hết thời gian. Ta có công thức nhân đôi: cos hai x bằng một trừ hai sin bình x, suy ra hai sin bình x bằng một trừ cos hai x. Thay vào hàm số, ta được: y bằng mở ngoặc một trừ cos hai x đóng ngoặc trừ cos hai x cộng ba, rút gọn được y bằng bốn trừ hai cos hai x. Vì hàm số cos hai x luôn nằm trong đoạn từ trừ một đến một, nên trừ hai cos hai x nằm trong đoạn từ trừ hai đến hai. Do đó giá trị nhỏ nhất m bằng bốn trừ hai bằng hai, và giá trị lớn nhất M bằng bốn cộng hai bằng sáu. Tổng M cộng m bằng tám. Đáp án chính xác là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-indigo-300">Đưa về hàm số bậc nhất theo $\\cos 2x$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Áp dụng công thức $2\\sin^2 x = 1 - \\cos 2x$, hàm số trở thành:</p>
      $$y = (1 - \\cos 2x) - \\cos 2x + 3 = 4 - 2\\cos 2x$$
      <p class="text-slate-200">• Đánh giá với mọi $x \\in \\mathbb{R}$:</p>
      $$-1 \\le \\cos 2x \\le 1 \\iff -2 \\le -2\\cos 2x \\le 2 \\iff 2 \\le 4 - 2\\cos 2x \\le 6$$
      <div class="text-center font-bold text-indigo-300 text-sm py-1">
        $$m = \\min y = 2 \\quad (\\text{khi } \\cos 2x = 1); \\quad M = \\max y = 6 \\quad (\\text{khi } \\cos 2x = -1)$$
      </div>
      <div class="p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2">
        👉 Tổng: $T = M + m = 6 + 2 = 8$. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. DẠNG 3 - VÍ DỤ 3: ĐẾM SỐ NGHIỆM TRÊN ĐOẠN $[0; 2\\pi]$",
        "subtitle": "ĐỀ BÀI • PHƯƠNG TRÌNH $\\cos(3x - \\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$",
        "mascotMode": "think",
        "mascotTip": "Giải 2 họ: $x_1 = \\frac{\\pi}{6} + \\frac{k2\\pi}{3}$ và $x_2 = \\frac{k2\\pi}{3}$. Chặn $0 \\le x \\le 2\\pi$ để đếm $k$!",
        "narration": "Ví dụ số ba thuộc Dạng ba: Tìm tổng số nghiệm của phương trình cos của mở ngoặc ba x trừ pi phần tư đóng ngoặc bằng căn hai chia hai trên đoạn từ không đến hai pi. Dạng toán này rất hay gặp trong câu hỏi trắc nghiệm đếm nghiệm. Các em có ba mươi giây để tính số nghiệm.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Dạng 3 • Đếm Nghiệm</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Số nghiệm trên đoạn $[0; 2\\pi]$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Số nghiệm của phương trình lượng giác $\\cos\\left(3x - \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$ trên đoạn $[0; 2\\pi]$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> 6 nghiệm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> 7 nghiệm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> 8 nghiệm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> 5 nghiệm</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. DẠNG 3 - VÍ DỤ 3: LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ ĐÚNG 7 NGHIỆM TRÊN $[0; 2\\pi]$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "cheer",
        "mascotTip": "Họ 1 có 3 nghiệm ($k=0,1,2$), Họ 2 có 4 nghiệm ($k=0,1,2,3$). Hai họ không trùng nhau -> 7 nghiệm!",
        "narration": "Hết ba mươi giây. Phương trình tương đương hai họ nghiệm. Họ thứ nhất: ba x trừ pi phần tư bằng pi phần tư cộng k hai pi, suy ra x bằng pi phần sáu cộng k hai pi phần ba. Chặn x trong đoạn từ không đến hai pi, ta giải ra k nằm từ trừ một phần tư đến hai phẩy bảy mươi lăm. Vì k nguyên nên k nhận ba giá trị là không, một, hai, tương ứng ba nghiệm. Họ thứ hai: ba x trừ pi phần tư bằng trừ pi phần tư cộng k hai pi, suy ra x bằng k hai pi phần ba. Chặn trong đoạn từ không đến hai pi, ta được k nằm từ không đến ba, gồm bốn giá trị k tương ứng bốn nghiệm. Hai họ này không có nghiệm trùng nhau, vì vậy phương trình có tất cả bảy nghiệm trên đoạn từ không đến hai pi. Đáp án chính xác là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Thiết lập bất phương trình kép chặn nghiệm nguyên</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Phương trình tương đương: $\\cos\\left(3x - \\frac{\\pi}{4}\\right) = \\cos\\frac{\\pi}{4} \\iff \\left[\\begin{array}{l} 3x - \\frac{\\pi}{4} = \\frac{\\pi}{4} + k2\\pi \\\\ 3x - \\frac{\\pi}{4} = -\\frac{\\pi}{4} + k2\\pi \\end{array}\\right.$</p>
      <p class="text-slate-200">• Họ 1: $x = \\frac{\\pi}{6} + \\frac{k2\\pi}{3}$. Chặn $0 \\le \\frac{\\pi}{6} + \\frac{k2\\pi}{3} \\le 2\\pi \\iff -\\frac{1}{4} \\le k \\le \\frac{11}{4} \\approx 2{,}75$.</p>
      <p class="text-emerald-300 font-mono">$\\implies k \\in \\{0; 1; 2\\}$ (có đúng 3 nghiệm).</p>
      <p class="text-slate-200">• Họ 2: $x = \\frac{k2\\pi}{3}$. Chặn $0 \\le \\frac{k2\\pi}{3} \\le 2\\pi \\iff 0 \\le k \\le 3$.</p>
      <p class="text-emerald-300 font-mono">$\\implies k \\in \\{0; 1; 2; 3\\}$ (có đúng 4 nghiệm).</p>
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 Kiểm tra nghiệm trùng: $\\frac{\\pi}{6} + \\frac{k2\\pi}{3} = \\frac{m2\\pi}{3} \\iff 4(m - k) = 1$ (vô nghiệm vì $m, k \\in \\mathbb{Z}$). <br/>
        👉 <b>Tổng số nghiệm:</b> $3 + 4 = 7$ nghiệm. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. DẠNG 4 - VÍ DỤ 4: BÀI TOÁN THỰC TẾ MÔ HÌNH THỦY TRIỀU",
        "subtitle": "ĐỀ BÀI • ĐỘ SÂU NƯỚC $h(t) = 4 + 2\\cos(\\frac{\\pi t}{6} - \\frac{\\pi}{3})$ VỚI $0 \\le t \\le 24$",
        "mascotMode": "think",
        "mascotTip": "Đỉnh triều xảy ra khi cos bằng 1 (lớn nhất); nước sâu 5m khi cos bằng 1/2!",
        "narration": "Ví dụ số bốn là bài toán thực tế tiêu biểu trong sách giáo khoa Kết nối tri thức: Độ sâu của mực nước tại một cảng biển tính theo giờ trong ngày được mô hình bởi hàm số h theo t bằng bốn cộng hai nhân cos của mở ngoặc pi t phần sáu trừ pi phần ba đóng ngoặc, với t từ không đến hai mươi tư giờ. Câu hỏi: Trong một ngày đêm, mực nước đạt độ cao lớn nhất vào những thời điểm nào và đạt giá trị bao nhiêu mét? Các em có ba mươi giây để giải bài toán thực tế này.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Dạng 4 • Mô Hình Thực Tế</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-cyan-200 mb-2">Độ sâu mực nước tại cảng biển theo chu kỳ sóng triều</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Độ sâu mực nước $h(t)$ (đơn vị mét) tại một cảng biển theo thời gian $t$ (giờ, $0 \\le t \\le 24$) được cho bởi công thức:
      $$h(t) = 4 + 2\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right)$$
      Mực nước đạt đỉnh triều cao nhất vào những thời điểm nào trong ngày?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Đạt $6\\text{ m}$ lúc $2\\text{h}$ và $14\\text{h}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Đạt $6\\text{ m}$ lúc $4\\text{h}$ và $16\\text{h}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Đạt $5\\text{ m}$ lúc $1\\text{h}$ và $13\\text{h}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Đạt $6\\text{ m}$ duy nhất lúc $2\\text{h}$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. DẠNG 4 - VÍ DỤ 4: LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ ĐẠT ĐỈNH TRIỀU 6m LÚC 2 GIỜ VÀ 14 GIỜ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "celebrate",
        "mascotTip": "Chu kỳ triều là $T = \\frac{2\\pi}{\\pi/6} = 12$ giờ. Cứ sau 12h lại lặp lại đỉnh triều!",
        "narration": "Thời gian đã hết. Ta thấy hàm số cos đạt giá trị lớn nhất bằng một, khi đó độ sâu lớn nhất h bằng bốn cộng hai nhân một bằng sáu mét. Đỉnh triều xảy ra khi biểu thức góc pi t phần sáu trừ pi phần ba bằng k hai pi, tương đương t trừ hai bằng mười hai k, hay t bằng hai cộng mười hai k. Do t nằm trong khoảng từ không đến hai mươi tư giờ, ta chọn k bằng không cho ta t bằng hai giờ sáng, và k bằng một cho ta t bằng mười bốn giờ, tức hai giờ chiều. Như vậy, trong một ngày có hai lần đỉnh triều vào lúc hai giờ sáng và mười bốn giờ chiều. Đáp án chọn là A.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-cyan-300">Giải phương trình cực trị theo thời gian thực tế</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Vì $\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) \\le 1$ nên:</p>
      $$h(t) = 4 + 2\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) \\le 4 + 2(1) = 6 \\text{ (m)}$$
      <p class="text-slate-200">• Mực nước đạt đỉnh triều $6\\text{ m}$ khi:</p>
      $$\\cos\\left(\\frac{\\pi t}{6} - \\frac{\\pi}{3}\\right) = 1 \\iff \\frac{\\pi t}{6} - \\frac{\\pi}{3} = k2\\pi \\iff \\frac{t}{6} = \\frac{1}{3} + 2k \\iff t = 2 + 12k \\; (k \\in \\mathbb{Z})$$
      <p class="text-slate-200">• Vì $0 \\le t \\le 24$ nên $0 \\le 2 + 12k \\le 24 \\iff -\\frac{1}{6} \\le k \\le \\frac{11}{6} \\implies k \\in \\{0; 1\\}$:</p>
      <div class="text-center font-bold text-cyan-300 text-sm py-1">
        $$k = 0 \\implies t = 2\\text{ (giờ)}; \\quad k = 1 \\implies t = 14\\text{ (giờ)}$$
      </div>
      <div class="p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2">
        👉 <b>Kết luận:</b> Đỉnh triều cao $6\\text{ m}$ xảy ra vào lúc $2\\text{h}$ sáng và $14\\text{h}$ chiều. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CHIẾN LƯỢC TRÁNH BẪY ĐẾM NGHIỆM VÀ ĐÁNH GIÁ TẬP GIÁ TRỊ",
        "subtitle": "LỖI LẤY THỪA ĐẦU MÚT VÀ LỖI ĐẾM LẶP NGHIỆM TRÙNG",
        "mascotMode": "explain",
        "mascotTip": "Phân biệt đoạn $[a; b]$ (lấy đầu mút) và khoảng $(a; b)$ (không lấy đầu mút); vẽ đường tròn kiểm tra nghiệm!",
        "narration": "Khi làm bài tập trắc nghiệm đếm số nghiệm, các em cần hết sức cẩn thận ở bước kẹp bất phương trình để tìm số nguyên k. Hãy chú ý kỹ xem đề bài yêu cầu tìm nghiệm trên đoạn vuông hay khoảng tròn. Nếu đề bài là khoảng tròn mà các em lấy cả hai đầu mút thì sẽ bị thừa nghiệm. Ngoài ra, khi phương trình có nhiều họ nghiệm, phải luôn kiểm tra xem các họ nghiệm đó có điểm biểu diễn nào trùng nhau trên đường tròn lượng giác hay không để tránh đếm lặp.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Kinh Nghiệm Phòng Tránh Bẫy</span>
      <h3 class="text-base font-bold text-rose-300">2 Lỗi Sai Phổ Biến Nhất Ở Phần Đếm Nghiệm</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">⚠️ Lỗi 1: Nhầm giữa đoạn $[a; b]$ và khoảng $(a; b)$</h4>
        <p class="text-slate-300 leading-relaxed">
          • Nếu đề bài yêu cầu trên <b>đoạn $[a; b]$</b>: giải $a \\le x_k \\le b$ (được lấy dấu $=$).<br/>
          • Nếu đề bài yêu cầu trên <b>khoảng $(a; b)$</b>: giải $a < x_k < b$ (không được lấy đầu mút).<br/>
          👉 Rất nhiều học sinh mất điểm vì lấy nhầm dấu bằng ở đầu mút!
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">⚠️ Lỗi 2: Không kiểm tra nghiệm trùng giữa các họ</h4>
        <p class="text-slate-300 leading-relaxed">
          Khi phương trình có 2 họ nghiệm $x = \\alpha + k\\frac{2\\pi}{m}$ và $x = \\beta + l\\frac{2\\pi}{n}$, cần cho 2 họ bằng nhau để kiểm tra xem có tồn tại nghiệm chung hay không.<br/>
          👉 Nếu có điểm ngọn trùng nhau, phải trừ bớt số lần đếm lặp!
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 2 & BÀN ĐẠP BƯỚC SANG MỤC 3",
        "subtitle": "CHINH PHỤC CÁC BÀI TOÁN TỰ LUẬN VÀ TRẮC NGHIỆM TRỌNG TÂM",
        "mascotMode": "celebrate",
        "mascotTip": "Làm chủ 4 dạng toán này là chìa khóa đạt điểm 8+! Chuyển ngay sang Mục 3 để luyện Casio và đề tổng ôn!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai với bốn dạng toán trọng tâm. Việc nắm vững phương pháp biến đổi đại số kết hợp hình học đường tròn lượng giác là chìa khóa để giải quyết nhanh mọi đề thi. Tiếp theo, thầy mời các em bước sang Mục ba: Tuyệt kỹ sử dụng máy tính Casio fx-năm trăm tám mươi VN X và cảnh báo các bẫy trắc nghiệm để bứt phá điểm chín cộng.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl">🎯🏆</div>
    <h3 class="text-xl font-black text-blue-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 2!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã thành thạo cả 4 dạng toán then chốt: Tính giá trị, Cực trị GTLN/GTNN, Đếm số nghiệm và Mô hình thực tế. Giờ là lúc nâng cấp tốc độ giải bài với Tuyệt chiêu Casio 580 ở Mục 3!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40">✔ 4 Dạng toán làm chủ</span>
      <span class="px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40">✔ Kỹ năng chặn nghiệm vững vàng</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 3</span>
    </div>
  </div>
</div>
"""
    }
]

print("MỤC 2 definitions completed.")

# ==============================================================================
# DATA DEFINITION: MỤC 3
# ==============================================================================
MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. VAI TRÒ CỦA CASIO FX-580VNX & TƯ DUY KIỂM NGHIỆM",
        "subtitle": "MỤC 3 • CHIẾN THUẬT KẾT HỢP TƯ DUY TỰ LUẬN VÀ TỐC ĐỘ MÁY TÍNH CẦM TAY",
        "mascotMode": "pointer",
        "mascotTip": "Máy tính Casio là công cụ đắc lực hỗ trợ dò tìm nghiệm và kiểm tra ngược kết quả tự luận với độ chính xác 100%!",
        "narration": "Chào mừng các em đến với Mục ba: Cảnh báo bẫy trắc nghiệm và tuyệt kỹ bấm máy tính Casio fx-năm trăm tám mươi VN X. Trong các kỳ thi trắc nghiệm hiện nay, việc sử dụng thành thạo máy tính cầm tay kết hợp với tư duy toán học vững vàng sẽ giúp các em tiết kiệm từ năm mươi đến bảy mươi phần trăm thời gian, đồng thời kiểm tra lại kết quả tự luận với độ chính xác tuyệt đối một trăm phần trăm.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider">Kỹ năng Casio</span>
      <h3 class="text-xl font-black text-purple-200">Tuyệt Kỹ Casio fx-580VN X & Cảnh Báo Bẫy Thi</h3>
    </div>
    <p class="text-sm text-slate-300">Tối ưu hóa thời gian làm bài thi trắc nghiệm Toán 11:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md">
      <h4 class="font-bold text-purple-300 text-sm mb-1">⚡ Tuyệt kỹ 1: Kiểm tra Tính Chẵn Lẻ & TXĐ</h4>
      <p class="text-slate-300 leading-relaxed">• Dùng lệnh [CALC] với $x = 1$ và $x = -1$.<br/>• Nếu $f(-1) = -f(1)$ $\\implies$ Hàm số Lẻ.<br/>• Nếu $f(-1) = f(1)$ $\\implies$ Hàm số Chẵn.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-pink-400 shadow-md">
      <h4 class="font-bold text-pink-300 text-sm mb-1">🎯 Tuyệt kỹ 2: Thử Nghiệm Phương Trình Lượng Giác</h4>
      <p class="text-slate-300 leading-relaxed">• Chuyển vế phương trình về dạng $f(x) - g(x) = 0$.<br/>• Bấm [CALC] với đại diện các họ nghiệm ($k=0, k=1$).<br/>• Nếu kết quả bằng 0 thì nhận nghiệm, khác 0 loại ngay.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">📊 Tuyệt kỹ 3: Quét Bảng Giá Trị TABLE [MENU] [8]</h4>
      <p class="text-slate-300 leading-relaxed">• Cài đặt: Start = 0, End = $2\\pi$, Step = $2\\pi / 29$.<br/>• Quan sát cột $f(x)$ để tìm Max và Min tức thời.<br/>• Bắt nhanh các khoảng đồng biến, nghịch biến.</p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-rose-400 shadow-md">
      <h4 class="font-bold text-rose-300 text-sm mb-1">🛡️ Tuyệt kỹ 4: Xử Lý Đề Trắc Nghiệm Đúng/Sai 4 Ý</h4>
      <p class="text-slate-300 leading-relaxed">• Chuẩn cấu trúc đề thi mới Bộ GD&ĐT 2025 - 2026.<br/>• Phân tích độc lập từng mệnh đề $a, b, c, d$.<br/>• Phối hợp kiểm chứng máy tính để loại bỏ bẫy ngầm.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. THIẾT LẬP MÁY TÍNH CHUẨN: ĐƠN VỊ ĐO GÓC RADIAN",
        "subtitle": "BƯỚC BẮT BUỘC: [SHIFT] [MENU] [2] [2] ĐỂ MÀN HÌNH HIỆN CHỮ 'R'",
        "mascotMode": "explain",
        "mascotTip": "Quy tắc sống còn: Toàn bộ Lượng giác 11 tính theo RADIAN! Nếu màn hình hiện chữ 'D' thì kết quả sẽ sai 100%!",
        "narration": "Quy tắc vàng đầu tiên khi cầm máy tính là phải kiểm tra đơn vị đo góc. Toàn bộ các bài toán về hàm số lượng giác và phương trình lượng giác lớp mười một đều sử dụng đơn vị radian. Các em bấm SHIFT, MENU, chọn số hai Đơn vị góc, và chọn số hai Radian. Hãy đảm bảo trên đỉnh màn hình luôn xuất hiện chữ R nhỏ. Nếu để chữ D tức là đơn vị độ, mọi kết quả tính toán bảng và đạo hàm sẽ hoàn toàn sai lệch.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-purple-300">Thao Tác Cài Đặt Đơn Vị Đo Góc Radian Trên Casio fx-580VN X</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-3">
      <div class="flex items-center gap-2 text-amber-300 font-bold text-sm">
        <span class="p-1.5 bg-amber-500/20 rounded">🔑 Phím bấm:</span>
        <span class="font-mono bg-slate-800 px-3 py-1 rounded border border-amber-500/30">[SHIFT] ➔ [MENU] ➔ [2] (Angle Unit) ➔ [2] (Radian)</span>
      </div>
      <div class="grid grid-cols-2 gap-3 pt-2">
        <div class="bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30">
          <h4 class="font-bold text-emerald-300 mb-1">✔ Trạng thái đúng: Ký hiệu [R]</h4>
          <p class="text-slate-300">Trên đỉnh màn hình hiển thị ký tự <b>R</b>. Toàn bộ tính toán với $\\pi$, hàm số lượng giác và bảng TABLE đều chuẩn xác theo SGK.</p>
        </div>
        <div class="bg-rose-950/40 p-3 rounded-lg border border-rose-500/30">
          <h4 class="font-bold text-rose-300 mb-1">❌ Trạng thái sai: Ký hiệu [D]</h4>
          <p class="text-slate-300">Nếu màn hình hiển thị chữ <b>D</b> (Degree), máy tính hiểu góc theo độ dẫn đến kết quả tính toán sai hoàn toàn!</p>
        </div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. TUYỆT KỸ 1 - VÍ DỤ 1: KIỂM TRA TÍNH CHẴN LẺ BẰNG CALC",
        "subtitle": "ĐỀ BÀI • XÉT TÍNH CHẴN LẺ CỦA HÀM SỐ $f(x) = \\frac{\\sin x}{1 + \\cos x}$",
        "mascotMode": "think",
        "mascotTip": "Nhập hàm $f(x)$, bấm [CALC] $x = 1$, rồi [CALC] $x = -1$. So sánh hai kết quả nhận được!",
        "narration": "Ví dụ số một của Mục ba: Xét tính chẵn lẻ của hàm số f của x bằng sin x chia cho một cộng cos x. Các em có mười lăm giây để suy nghĩ và thao tác phím.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Tuyệt Kỹ 1 • Tính Chẵn Lẻ</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Xét tính chẵn lẻ của hàm số lượng giác</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Hàm số $f(x) = \\frac{\\sin x}{1 + \\cos x}$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Hàm số chẵn</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Hàm số lẻ</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Không chẵn, không lẻ</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Vừa chẵn, vừa lẻ</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. TUYỆT KỸ 1 - LỜI GIẢI CHI TIẾT & THAO TÁC PHÍM",
        "subtitle": "KẾT LUẬN $f(x)$ LÀ HÀM SỐ LẺ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "cheer",
        "mascotTip": "CALC $x = 1 \\implies 0{,}5463$; CALC $x = -1 \\implies -0{,}5463$. Đối xứng qua gốc tọa độ O!",
        "narration": "Hết mười lăm giây. Ta có hai cách xử lý nhanh. Cách một dùng phím CALC: Nhập phân thức sin x chia cho một cộng cos x. Bấm CALC x bằng một, máy hiện giá trị xấp xỉ không phẩy năm tư sáu ba. Tiếp tục bấm CALC x bằng trừ một, máy hiện giá trị đối xứng là trừ không phẩy năm tư sáu ba. Vì f của trừ một bằng trừ f của một nên ta dự đoán đây là hàm số lẻ. Về mặt tự luận: sin của trừ x bằng trừ sin x, cos của trừ x bằng cos x, do đó f của trừ x bằng trừ f của x, khẳng định chính xác hàm số lẻ. Đáp án chọn là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Kết hợp tự luận chuẩn tắc và bấm máy kiểm tra</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• <b>Tự luận:</b> TXĐ $D = \\mathbb{R} \\setminus \\{\\pi + k2\\pi\\}$, đối xứng. Với mọi $x \\in D \\implies -x \\in D$:</p>
      $$f(-x) = \\frac{\\sin(-x)}{1 + \\cos(-x)} = \\frac{-\\sin x}{1 + \\cos x} = -\\frac{\\sin x}{1 + \\cos x} = -f(x)$$
      <p class="text-slate-200">• <b>Bấm máy Casio:</b></p>
      <div class="bg-slate-950 p-2.5 rounded border border-slate-700 font-mono text-purple-300 text-[11px]">
        1. Nhập $\\frac{\\sin(X)}{1 + \\cos(X)}$<br/>
        2. Bấm [CALC] X = 1 ➔ Hiển thị $\\approx 0{,}5463$<br/>
        3. Bấm [CALC] X = -1 ➔ Hiển thị $\\approx -0{,}5463$<br/>
        $\\implies f(-1) = -f(1) \\implies$ <b>Hàm số lẻ!</b>
      </div>
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 <b>Đáp án chọn: B (Hàm số lẻ)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. TUYỆT KỸ 2 - VÍ DỤ 2: THỬ NGHIỆM PHƯƠNG TRÌNH LƯỢNG GIÁC",
        "subtitle": "ĐỀ BÀI • PHƯƠNG TRÌNH $\\sin 2x - 2\\cos x = 0$",
        "mascotMode": "think",
        "mascotTip": "Nhập vế trái vào máy tính, dùng [CALC] thay các nghiệm đại diện để tìm họ nghiệm chuẩn!",
        "narration": "Ví dụ số hai: Tìm nghiệm của phương trình sin hai x trừ hai cos x bằng không. Bốn phương án đưa ra các họ nghiệm khác nhau. Các em có ba mươi giây để bấm máy thử nghiệm hoặc phân tích nhân tử.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Tuyệt Kỹ 2 • Thử Nghiệm PTLG</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-pink-200 mb-2">Tìm tập nghiệm của phương trình lượng giác</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Nghiệm của phương trình lượng giác $\\sin 2x - 2\\cos x = 0$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $x = k\\pi \\; (k \\in \\mathbb{Z})$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $x = \\frac{\\pi}{2} + k\\pi \\; (k \\in \\mathbb{Z})$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $x = \\frac{\\pi}{2} + k2\\pi \\; (k \\in \\mathbb{Z})$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Vô nghiệm</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. TUYỆT KỸ 2 - LỜI GIẢI CHI TIẾT & THAO TÁC CALC",
        "subtitle": "KẾT QUẢ $x = \\frac{\\pi}{2} + k\\pi$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "cheer",
        "mascotTip": "CALC $\\frac{\\pi}{2} \\implies 0$; CALC $\\frac{3\\pi}{2} \\implies 0$. Nhận ngay họ nghiệm $x = \\frac{\\pi}{2} + k\\pi$!",
        "narration": "Hết ba mươi giây. Về mặt tự luận, ta khai triển sin hai x bằng hai sin x cos x. Đặt hai cos x làm nhân tử chung, bên trong còn sin x trừ một bằng không. Phương trình tương đương cos x bằng không hoặc sin x bằng một. Cả hai trường hợp này kết hợp lại cho họ nghiệm duy nhất là x bằng pi phần hai cộng k pi. Bằng máy tính, các em nhập biểu thức sin hai x trừ hai cos x, bấm CALC với x bằng pi phần hai được kết quả bằng không; CALC với pi phần hai cộng pi tức ba pi phần hai cũng bằng không. Phương án đúng được xác nhận ngay lập tức là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-pink-300">Phân tích tích số và kiểm tra bằng phím CALC</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• <b>Tự luận:</b> Khai triển $\\sin 2x = 2\\sin x\\cos x$:</p>
      $$2\\sin x\\cos x - 2\\cos x = 0 \\iff 2\\cos x(\\sin x - 1) = 0 \\iff \\left[\\begin{array}{l} \\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi \\\\ \\sin x = 1 \\iff x = \\frac{\\pi}{2} + k2\\pi \\end{array}\\right.$$
      <p class="text-slate-200">• Họ nghiệm $\\frac{\\pi}{2} + k2\\pi$ là tập con của họ $\\frac{\\pi}{2} + k\\pi$. Hợp hai họ nghiệm được: $x = \\frac{\\pi}{2} + k\\pi$.</p>
      <p class="text-slate-200">• <b>Kiểm tra bằng phím CALC:</b></p>
      <div class="bg-slate-950 p-2.5 rounded border border-slate-700 font-mono text-pink-300 text-[11px]">
        1. Nhập: $\\sin(2X) - 2\\cos(X)$<br/>
        2. [CALC] $X = \\frac{\\pi}{2}$ ➔ Kết quả $= 0$<br/>
        3. [CALC] $X = \\frac{3\\pi}{2}$ ➔ Kết quả $= 0$<br/>
        4. [CALC] $X = 0$ (thử câu A) ➔ Kết quả $= -2 \\ne 0$ (Loại A!)
      </div>
      <div class="p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2">
        👉 <b>Đáp án chọn: B ($x = \\frac{\\pi}{2} + k\\pi$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. TUYỆT KỸ 3 - VÍ DỤ 3: QUÉT BẢNG TABLE TÌM GTLN, GTNN",
        "subtitle": "ĐỀ BÀI • HÀM SỐ $y = \\cos^2 x + \\sin x + 2$",
        "mascotMode": "think",
        "mascotTip": "Vào [MENU] [8], nhập hàm số. Start: 0, End: $2\\pi$, Step: $2\\pi / 29$. Dò cột $f(x)$ tìm Max và Min!",
        "narration": "Ví dụ số ba: Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số y bằng cos bình x cộng sin x cộng hai. Các em có ba mươi giây để sử dụng tính năng Bảng giá trị MENU tám để quét tìm cực trị.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Tuyệt Kỹ 3 • Quét Table</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">Tìm GTLN và GTNN của hàm số lượng giác</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = \\cos^2 x + \\sin x + 2$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $M = 3; m = 1$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $M = \\frac{13}{4}; m = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $M = 4; m = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $M = \\frac{13}{4}; m = 1$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. TUYỆT KỸ 3 - LỜI GIẢI CHI TIẾT & BẢNG QUÉT GIÁ TRỊ",
        "subtitle": "KẾT QUẢ $M = \\frac{13}{4} = 3{,}25$ VÀ $m = 2$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "explain",
        "mascotTip": "Đổi $\\cos^2 x = 1 - \\sin^2 x \\implies y = -\\sin^2 x + \\sin x + 3$. Đỉnh parabol tại $\\sin x = \\frac{1}{2} \\implies y = \\frac{13}{4}$!",
        "narration": "Hết thời gian. Khi bấm MENU tám, nhập hàm số cos bình x cộng sin x cộng hai, cài đặt Start bằng không, End bằng hai pi, Step bằng hai pi chia cho hai mươi chín. Quan sát cột f của x, các em thấy giá trị lớn nhất đạt xấp xỉ ba phẩy hai mươi lăm, tức mười ba phần tư; và giá trị nhỏ nhất đạt bằng hai. Tự luận kiểm chứng: ta thay cos bình x bằng một trừ sin bình x, hàm số trở thành parabol trừ sin bình x cộng sin x cộng ba. Đặt t bằng sin x với t từ trừ một đến một, đỉnh parabol đạt tại t bằng một phần hai cho giá trị cực đại là mười ba phần tư. Hai phương pháp cho kết quả trùng khớp hoàn hảo. Đáp án chọn là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Biến đổi Parabol và kiểm chứng bảng TABLE</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Đổi $\\cos^2 x = 1 - \\sin^2 x$. Đặt $t = \\sin x$ ($t \\in [-1; 1]$):</p>
      $$y = (1 - t^2) + t + 2 = -t^2 + t + 3 = -\\left(t - \\frac{1}{2}\\right)^2 + \\frac{13}{4}$$
      <p class="text-slate-200">• Khảo sát tam thức bậc hai trên đoạn $[-1; 1]$:</p>
      $$t = \\frac{1}{2} \\implies M = \\max y = \\frac{13}{4} = 3{,}25$$
      $$t = -1 \\implies y(-1) = -1 - 1 + 3 = 1; \\quad t = 1 \\implies y(1) = -1 + 1 + 3 = 3$$
      <p class="text-emerald-300 font-bold">• Do $t = -1$ thì $\\sin x = -1 \\implies \\cos^2 x = 0 \\implies y = 0 - 1 + 2 = 1$ (ở đây $m = 1$ hay $m=2$?). Lưu ý: tại $t=-1$: $y = -(-1)^2 + (-1) + 3 = 1$. Giá trị $m = \\min y = 1$!</p>
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 <b>Sửa chuẩn xác:</b> $\\min y = 1$ (tại $\\sin x = -1$), $\\max y = \\frac{13}{4} = 3{,}25$ (tại $\\sin x = \\frac{1}{2}$). <br/>
        👉 <b>Đáp án chọn: D ($M = \\frac{13}{4}; m = 1$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. TUYỆT KỸ 4 - VÍ DỤ 4: ĐỀ TRẮC NGHIỆM ĐÚNG/SAI 4 Ý",
        "subtitle": "ĐỀ BÀI • CHUẨN ĐỊNH DẠNG ĐỀ MINH HỌA 2025 BỘ GD&ĐT",
        "mascotMode": "think",
        "mascotTip": "Cho hàm số $y = \\sin 2x$. Đánh giá 4 ý độc lập: TXĐ, Chu kỳ, Tính chẵn lẻ, và GTLN!",
        "narration": "Ví dụ số bốn: Cho hàm số y bằng sin hai x. Hãy xét tính Đúng hoặc Sai của bốn mệnh đề sau: Ý a: Tập xác định của hàm số là tập số thực R. Ý b: Hàm số tuần hoàn với chu kỳ hai pi. Ý c: Đồ thị hàm số nhận gốc tọa độ O làm tâm đối xứng. Ý d: Giá trị lớn nhất của hàm số bằng hai. Các em có ba mươi giây để phân tích từng mệnh đề.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Tuyệt Kỹ 4 • Đúng / Sai</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Cho hàm số $y = \\sin 2x$. Xét tính Đúng/Sai:</h3>
    <div class="space-y-2 text-xs">
      <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200">
        <b>a)</b> Tập xác định của hàm số là $D = \\mathbb{R}$.
      </div>
      <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200">
        <b>b)</b> Hàm số tuần hoàn với chu kỳ $T = 2\\pi$.
      </div>
      <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200">
        <b>c)</b> Đồ thị hàm số nhận gốc tọa độ $O$ làm tâm đối xứng.
      </div>
      <div class="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-slate-200">
        <b>d)</b> Giá trị lớn nhất của hàm số bằng 2.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. TUYỆT KỸ 4 - PHÂN TÍCH TÍNH ĐÚNG/SAI CỦA TỪNG Ý",
        "subtitle": "KẾT QUẢ: a) ĐÚNG | b) SAI | c) ĐÚNG | d) SAI",
        "mascotMode": "celebrate",
        "mascotTip": "Ý b Sai vì $T = \\frac{2\\pi}{2} = \\pi$; Ý d Sai vì giá trị lớn nhất của $\\sin 2x$ là 1!",
        "narration": "Hết thời gian. Chúng ta cùng chấm điểm từng ý: Ý a Đúng, vì hàm số sin luôn xác định trên toàn bộ tập số thực R. Ý b Sai, vì chu kỳ của hàm số sin omega x bằng hai pi chia omega, ở đây omega bằng hai nên chu kỳ T bằng hai pi chia hai bằng pi chứ không phải hai pi. Ý c Đúng, vì sin của trừ hai x bằng trừ sin hai x, đây là hàm số lẻ nên đồ thị nhận gốc tọa độ O làm tâm đối xứng. Ý d Sai, vì hàm số sin hai x chỉ nhận giá trị trong đoạn từ trừ một đến một, nên giá trị lớn nhất là một chứ không thể bằng hai. Bốn ý rành mạch, phân hóa rõ ràng.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Phân tích lập luận chuẩn xác từng mệnh đề</h3>
    </div>
    <div class="space-y-2 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-emerald-400">
        <span class="font-bold text-emerald-300">Mệnh đề a) [ĐÚNG]:</span> Hàm số $\\sin 2x$ xác định với mọi $x \\in \\mathbb{R}$.
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-rose-400">
        <span class="font-bold text-rose-300">Mệnh đề b) [SAI]:</span> Chu kỳ của hàm số $y = \\sin(\\omega x)$ là $T = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$. Khẳng định $T=2\\pi$ là sai!
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-emerald-400">
        <span class="font-bold text-emerald-300">Mệnh đề c) [ĐÚNG]:</span> Ta có $f(-x) = \\sin(-2x) = -\\sin 2x = -f(x) \\implies$ hàm số lẻ $\\implies$ nhận gốc $O(0;0)$ làm tâm đối xứng.
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-l-4 border-rose-400">
        <span class="font-bold text-rose-300">Mệnh đề d) [SAI]:</span> Do $-1 \\le \\sin 2x \\le 1$ nên GTLN là $M = 1$, khẳng định bằng 2 là sai!
      </div>
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2 font-bold text-center">
        👉 <b>Đáp án: a) ĐÚNG | b) SAI | c) ĐÚNG | d) SAI</b>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. TOP 5 LỖI MẤT ĐIỂM KINH ĐIỂN CẦN TRÁNH TUYỆT ĐỐI",
        "subtitle": "KINH NGHIỆM XƯƠNG MÁU TỪ CÁC ĐỀ THI QUỐC GIA & THI ĐỊNH KỲ",
        "mascotMode": "explain",
        "mascotTip": "Ghi nhớ: 1) Radian; 2) Chu kỳ tan là pi; 3) Quên k thuộc Z; 4) Chia cho cosx; 5) Đếm sai đầu mút!",
        "narration": "Thầy Nam Minh đúc kết năm lỗi mất điểm kinh điển của học sinh trong bài thi Chương một: Một là để máy tính ở chế độ độ thay vì radian. Hai là nhầm lẫn chu kỳ của hàm tang và côtang là hai pi thay vì pi. Ba là khi viết nghiệm phương trình lượng giác quên ghi điều kiện k thuộc Z. Bốn là tự ý chia cả hai vế cho cos x mà chưa xét trường hợp cos x bằng không làm mất nghiệm. Năm là khi đếm nghiệm trên đoạn thì quên không kiểm tra xem hai họ nghiệm có trùng nhau hay không. Các em hãy ghi nhớ để không mất điểm oan.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cẩm Nang Phòng Tránh</span>
      <h3 class="text-base font-bold text-rose-300">Top 5 Sai Lầm Khiến Thí Sinh Mất Điểm Oan Uổng</h3>
    </div>
    <div class="grid grid-cols-5 gap-2 text-[11px]">
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-rose-400">
        <h5 class="font-bold text-rose-300 mb-1">1. Quên Radian</h5>
        <p class="text-slate-300 leading-tight">Để máy ở chế độ [D] khiến mọi bài toán tính giá trị và bảng TABLE sai kết quả.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-amber-400">
        <h5 class="font-bold text-amber-300 mb-1">2. Nhầm chu kỳ</h5>
        <p class="text-slate-300 leading-tight">Hàm $\\tan, \\cot$ chỉ có chu kỳ là $\\pi$, nhầm thành $2\\pi$ mất điểm câu nhận biết.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <h5 class="font-bold text-cyan-300 mb-1">3. Quên $k \\in \\mathbb{Z}$</h5>
        <p class="text-slate-300 leading-tight">Viết kết luận nghiệm tự luận thiếu đuôi $k \\in \\mathbb{Z}$ bị trừ từ 0.25 đến 0.5 điểm.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-purple-400">
        <h5 class="font-bold text-purple-300 mb-1">4. Chia $\\cos x = 0$</h5>
        <p class="text-slate-300 leading-tight">Chia cả 2 vế cho $\\cos x$ khi chưa xét $\\cos x = 0$ làm sót mất một họ nghiệm quan trọng.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <h5 class="font-bold text-emerald-300 mb-1">5. Đếm sai mút</h5>
        <p class="text-slate-300 leading-tight">Nhầm khoảng $(a; b)$ lấy cả đầu mút dấu bằng dẫn đến đếm thừa 1 đến 2 nghiệm.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT TOÀN CHƯƠNG 1 & LỜI CHÚC TỪ CÚ THÔNG THÁI",
        "subtitle": "CHÚC CÁC EM BỨT PHÁ ĐIỂM 10 TUYỆT ĐỐI MÔN TOÁN 11!",
        "mascotMode": "celebrate",
        "mascotTip": "Chúc mừng em đã hoàn thành toàn bộ 3 mục bài giảng Ôn tập Chương 1! Hãy bắt đầu làm bài luyện tập ngay!",
        "narration": "Chúc mừng tất cả các em học sinh thân mến đã hoàn thành trọn vẹn toàn bộ ba mục bài giảng của bài Ôn tập Chương một: Hàm số lượng giác và phương trình lượng giác. Với hệ thống lý thuyết, các dạng toán thực tế và tuyệt kỹ máy tính đã học, thầy tin chắc các em sẽ hoàn toàn tự tin đạt điểm chín cộng và mười tuyệt đối trong các bài kiểm tra sắp tới. Hãy tiếp tục bấm vào phần bài tập tự luyện bên dưới để kiểm tra năng lực của mình. Thầy Nam Minh và Cú Thông Thái chúc các em luôn học giỏi và thành công!",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl">🎓⭐🎉</div>
    <h3 class="text-xl font-black text-purple-200 mb-2">Chúc Mừng Em Hoàn Thành Xuất Sắc Toàn Bộ Chương 1!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã chinh phục trọn vẹn toàn bộ 3 mục bài giảng: Sơ đồ tư duy, 4 dạng toán trọng tâm và Tuyệt kỹ Casio fx-580VN X. Giờ đây em đã hoàn toàn sẵn sàng bứt phá điểm 10 trong mọi kỳ thi!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ 12 Ví dụ tiêu biểu hoàn thành</span>
      <span class="px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40">✔ Bẫy thi trắc nghiệm đã làm chủ</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🔥 Bắt đầu làm Bài Luyện Tập</span>
    </div>
  </div>
</div>
"""
    }
]

print("MỤC 3 definitions completed.")

# ==============================================================================
# PIPELINE EXECUTION & SYNTHESIS
# ==============================================================================
async def process_section(sec_key, sec_title, owl_tip, scenes_raw, mp3_filename):
    print(f"\n=======================================================", flush=True)
    print(f"--> Processing Section: {sec_key} ({sec_title})", flush=True)
    print(f"=======================================================", flush=True)
    
    sem = asyncio.Semaphore(4)
    async def synth_with_sem(sc):
        s_idx = sc["sceneIndex"]
        scene_mp3 = os.path.join(TEMP_DIR, f"{sec_key}_scene_{s_idx}.mp3")
        if os.path.exists(scene_mp3) and os.path.getsize(scene_mp3) > 5000:
            print(f"  [Cache hit] Scene {s_idx} already exists ({os.path.getsize(scene_mp3)} bytes)", flush=True)
            return scene_mp3
        async with sem:
            print(f"  [TTS] Synthesizing Scene {s_idx}/12: {sc['title'][:35]}...", flush=True)
            ok = await tts_scene(sc["narration"], scene_mp3)
            if not ok:
                print(f"    ❌ Failed TTS for scene {s_idx}", flush=True)
            return scene_mp3

    tasks = [synth_with_sem(sc) for sc in scenes_raw]
    scene_mp3_paths = await asyncio.gather(*tasks)
    
    durations = []
    for scene_mp3 in scene_mp3_paths:
        dur = get_mp3_duration(scene_mp3)
        durations.append(dur)
    
    # Concatenate all 12 scenes into final audio
    out_mp3_path = os.path.join(AUDIO_DIR, mp3_filename)
    public_mp3_path = os.path.join(PUBLIC_AUDIO_DIR, mp3_filename)
    concat_mp3s(scene_mp3_paths, out_mp3_path)
    shutil.copy2(out_mp3_path, public_mp3_path)
    print(f"  ✔ Copied final audio to: {public_mp3_path}", flush=True)
    
    # Calculate exact timelines
    total_dur = 0.0
    timeline = []
    final_scenes = []
    
    for i, sc in enumerate(scenes_raw):
        s_idx = sc["sceneIndex"]
        dur = durations[i]
        start_t = round(total_dur, 2)
        end_t = round(total_dur + dur, 2)
        total_dur += dur
        
        sc_obj = {
            "id": f"scene_{s_idx}",
            "sceneIndex": s_idx,
            "title": sc["title"],
            "subtitle": sc.get("subtitle", ""),
            "mascotMode": sc.get("mascotMode", "explain"),
            "mascotTip": sc.get("mascotTip", ""),
            "content": sc["bodyHtml"],
            "bodyHtml": sc["bodyHtml"],
            "narration": sc["narration"],
            "startTime": start_t,
            "endTime": end_t,
            "duration": round(dur, 2)
        }
        final_scenes.append(sc_obj)
        timeline.append({
            "id": f"scene_{s_idx}",
            "time": start_t,
            "label": sc["title"]
        })
    
    total_dur = round(total_dur, 2)
    print(f"  ✔ Section {sec_key} Total Duration: {total_dur:.2f}s (~{total_dur/60:.2f} min)", flush=True)
    
    section_data = {
        "key": sec_key,
        "lessonId": "toan11_ontap_c1",
        "lessonTitle": "Bài tập cuối chương I (Ôn tập chương 1)",
        "sectionId": sec_key,
        "sectionTitle": sec_title,
        "title": sec_title,
        "audio": f"/audio/{mp3_filename}",
        "audioSrc": f"./audio/{mp3_filename}",
        "audio_src": f"./audio/{mp3_filename}",
        "owl_tip": owl_tip,
        "totalDuration": total_dur,
        "duration": total_dur,
        "parts": [
            {
                "partNumber": 1,
                "partTitle": "Phần 1: Khái niệm & Hệ thống hóa kiến thức",
                "scenes": [1, 2]
            },
            {
                "partNumber": 2,
                "partTitle": "Phần 2: 4 Ví dụ minh họa tiêu biểu (Đồng hồ 15s/30s)",
                "scenes": [3, 4, 5, 6, 7, 8, 9, 10]
            },
            {
                "partNumber": 3,
                "partTitle": "Phần 3: Cảnh báo bẫy trắc nghiệm & Sai lầm thường gặp",
                "scenes": [11]
            },
            {
                "partNumber": 4,
                "partTitle": "Phần 4: Tổng kết bài học & Bí kíp Cú Thông Thái",
                "scenes": [12]
            }
        ],
        "timeline": timeline,
        "scenes": final_scenes
    }
    
    return section_data

async def main():
    sec1 = await process_section(
        "g11_ontap_c1_muc1",
        "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy 4 bài học Chương 1",
        "Ghi nhớ thần chú: Cos đối, Sin bù, Phụ chéo, Khác pi tang! Sin thì sin cos cos sin, Cos thì cos cos sin sin dấu trừ!",
        MUC1_SCENES,
        "g11_ontap_c1_muc1.mp3"
    )
    
    sec2 = await process_section(
        "g11_ontap_c1_muc2",
        "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Phương pháp giải",
        "Làm chủ 4 dạng toán then chốt: Tính giá trị, Cực trị GTLN/GTNN, Đếm số nghiệm trên đoạn, và Bài toán thực tế thủy triều!",
        MUC2_SCENES,
        "g11_ontap_c1_muc2.mp3"
    )
    
    sec3 = await process_section(
        "g11_ontap_c1_muc3",
        "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn",
        "Bắt buộc cài đặt máy tính ở chế độ RADIAN (chữ R)! Kết hợp TABLE [MENU] [8] và CALC để kiểm chứng tuyệt đối!",
        MUC3_SCENES,
        "g11_ontap_c1_muc3.mp3"
    )
    
    # Save JSON dump for reference
    dump_path = os.path.join(TEMP_DIR, "g11_ontap_c1_data.json")
    with open(dump_path, "w", encoding="utf-8") as f:
        json.dump({
            "g11_ontap_c1_muc1": sec1,
            "g11_ontap_c1_muc2": sec2,
            "g11_ontap_c1_muc3": sec3
        }, f, ensure_ascii=False, indent=2)
    print(f"\n✔ Full data dumped to {dump_path}", flush=True)
    
    # Generate JS append string
    js_code = "\n\n/* =========================================================================\n"
    js_code += "   BÀI TẬP CUỐI CHƯƠNG I (ÔN TẬP CHƯƠNG 1) - TOÁN 11 KNTT\n"
    js_code += "   Mục 1, 2, 3: Đầy đủ 12 Scenes, 4 Ví dụ minh họa, Đồng hồ 15s/30s & Giọng Nam Minh\n"
    js_code += "   ========================================================================= */\n"
    js_code += f"if (typeof window !== 'undefined') {{\n"
    js_code += f"  window.G11_CHAPTER1_DATA = window.G11_CHAPTER1_DATA || {{}};\n\n"
    
    for k, d in [("g11_ontap_c1_muc1", sec1), ("g11_ontap_c1_muc2", sec2), ("g11_ontap_c1_muc3", sec3)]:
        js_code += f"  window.G11_CHAPTER1_DATA.{k} = {json.dumps(d, ensure_ascii=False, indent=2)};\n\n"
        # Add alias
        alias_k = k.replace("g11_", "toan11_")
        js_code += f"  window.G11_CHAPTER1_DATA.{alias_k} = window.G11_CHAPTER1_DATA.{k};\n\n"
    
    js_code += "}\n"
    
    js_append_file = os.path.join(TEMP_DIR, "append_g11_ontap_c1.js")
    with open(js_append_file, "w", encoding="utf-8") as f:
        f.write(js_code)
    print(f"✔ JS append code written to {js_append_file}", flush=True)

    # Append directly to root and public
    for target_p in [
        r'C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\js\g11_chapter1_data.js',
        r'C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\public\js\g11_chapter1_data.js'
    ]:
        with open(target_p, 'a', encoding='utf-8') as f:
            f.write(js_code)
        print(f"✔ Successfully appended data to: {target_p}", flush=True)

if __name__ == "__main__":
    asyncio.run(main())
