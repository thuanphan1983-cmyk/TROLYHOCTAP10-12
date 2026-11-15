# -*- coding: utf-8 -*-
"""
CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
BÀI 8: MẪU SỐ LIỆU GHÉP NHÓM - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: GIỚI THIỆU VỀ MẪU SỐ LIỆU GHÉP NHÓM
# ==============================================================================
BAI8_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. KHÁI NIỆM MẪU SỐ LIỆU GHÉP NHÓM",
        "subtitle": "BÀI 8 • MỤC 1 • MỞ ĐẦU CHƯƠNG III TOÁN 11 KNTT",
        "mascotMode": "pointer",
        "mascotTip": r"Mẫu số liệu ghép nhóm là mẫu số liệu cho dưới dạng bảng tần số của các nhóm số liệu $[a_i; a_{i+1})$!",
        "narration": "Chào mừng các em học sinh đến với Chương 3 môn Toán lớp 11: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm. Ở lớp 10, các em đã làm quen với việc thu thập và xử lý các mẫu số liệu đơn lẻ không ghép nhóm. Tuy nhiên, trong thực tế khi dữ liệu lên tới hàng nghìn hay hàng triệu giá trị như điểm thi tốt nghiệp toàn quốc hay thu nhập của người lao động, việc liệt kê từng số liệu là bất khả thi. Để xử lý bài toán này, người ta chia miền giá trị thành các nhóm nửa khoảng kề nhau. Đó chính là mẫu số liệu ghép nhóm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Khái niệm cốt lõi</span>
      <h3 class="text-xl font-black text-emerald-200">Mẫu Số Liệu Ghép Nhóm Là Gì?</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      Khi mẫu số liệu có kích thước lớn ($n$ rất lớn) hoặc số liệu liên tục (chiều cao, cân nặng, thời gian), ta gom các giá trị vào từng nhóm có dạng nửa khoảng $[a_i; a_{i+1})$.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">📊 Cấu trúc một nhóm $[a; b)$</h4>
      <p class="text-slate-300 leading-relaxed">
        • $a$: <b>Đầu mút trái</b> (nhận giá trị $\ge a$).<br/>
        • $b$: <b>Đầu mút phải</b> (nhận giá trị $< b$).<br/>
        • Riêng nhóm cuối cùng có thể lấy cả đầu mút phải dạng $[a; b]$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">🎯 Ý nghĩa thực tiễn</h4>
      <p class="text-slate-300 leading-relaxed">
        • Tóm tắt gọn gàng tập dữ liệu khổng lồ.<br/>
        • Dễ dàng quan sát sự phân bố tập trung hay phân tán.<br/>
        • Là đầu vào bắt buộc để tính Số trung bình, Trung vị, Tứ phân vị và Mốt.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. ĐỘ DÀI NHÓM VÀ GIÁ TRỊ ĐẠI DIỆN",
        "subtitle": "HAI THÔNG SỐ TOÁN HỌC QUAN TRỌNG CẦN NHỚ",
        "mascotMode": "explain",
        "mascotTip": r"Độ dài nhóm: $L = b - a$. Giá trị đại diện chính là trung điểm: $c = \frac{a + b}{2}$!",
        "narration": "Mỗi nhóm số liệu nửa khoảng từ a đến b được xác định bởi hai thông số cơ bản: Thứ nhất là Độ dài của nhóm, ký hiệu là L, bằng đầu mút phải trừ đi đầu mút trái, tức là b trừ a. Thứ hai là Giá trị đại diện của nhóm, ký hiệu là c, chính là trung điểm của nửa khoảng đó, bằng a cộng b tất cả chia 2. Giá trị đại diện đóng vai trò thay thế cho toàn bộ các số liệu nằm trong nhóm khi chúng ta tính toán số trung bình cộng sau này.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></span>
      <h3 class="text-sm font-bold text-teal-300">Công Thức Xác Định Độ Dài Nhóm & Giá Trị Đại Diện</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
        <span class="font-bold text-emerald-400 text-sm block mb-1">1. Độ dài của nhóm $[a_i; a_{i+1})$:</span>
        <div class="text-emerald-300 font-mono text-center my-2 text-base">
          $$L_i = a_{i+1} - a_i$$
        </div>
        <p class="text-slate-300">Ví dụ: Nhóm $[40; 60)$ có độ dài $L = 60 - 40 = 20$.</p>
      </div>
      <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700">
        <span class="font-bold text-cyan-400 text-sm block mb-1">2. Giá trị đại diện $c_i$:</span>
        <div class="text-cyan-300 font-mono text-center my-2 text-base">
          $$c_i = \frac{a_i + a_{i+1}}{2}$$
        </div>
        <p class="text-slate-300">Ví dụ: Nhóm $[40; 60)$ có giá trị đại diện $c = \frac{40 + 60}{2} = 50$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH GIÁ TRỊ ĐẠI DIỆN VÀ ĐỘ DÀI NHÓM",
        "subtitle": "VÍ DỤ MINH HỌA 1 • NHẬN BIẾT (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Lấy trung điểm mỗi nhóm: $\frac{a+b}{2}$ và hiệu $b-a$!",
        "narration": "Chúng ta cùng bắt đầu với Ví dụ 1: Cho bảng tần số ghép nhóm về thời gian tự học mỗi ngày của 40 học sinh lớp 11 gồm 4 nhóm: nhóm 1 từ 1 đến 2 giờ có 6 học sinh; nhóm 2 từ 2 đến 3 giờ có 14 học sinh; nhóm 3 từ 3 đến 4 giờ có 15 học sinh; nhóm 4 từ 4 đến 5 giờ có 5 học sinh. Hãy xác định độ dài và giá trị đại diện của từng nhóm. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase">Ví dụ 1 (Nhận biết)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-indigo-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Bảng thống kê thời gian tự học (giờ/ngày) của 40 học sinh:
    </p>
    <div class="overflow-x-auto my-2">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-indigo-300 border-b border-slate-700">
            <th class="p-2 border border-slate-700">Nhóm thời gian (giờ)</th>
            <th class="p-2 border border-slate-700">$[1; 2)$</th>
            <th class="p-2 border border-slate-700">$[2; 3)$</th>
            <th class="p-2 border border-slate-700">$[3; 4)$</th>
            <th class="p-2 border border-slate-700">$[4; 5)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-2 font-bold text-slate-400 border border-slate-700">Số học sinh ($m_i$)</td>
            <td class="p-2 border border-slate-700">6</td>
            <td class="p-2 border border-slate-700">14</td>
            <td class="p-2 border border-slate-700">15</td>
            <td class="p-2 border border-slate-700">5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-indigo-300 font-semibold">
      👉 Yêu cầu: Xác định độ dài và giá trị đại diện tương ứng của từng nhóm.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ ĐỘ DÀI $L=1$ VÀ CÁC GIÁ TRỊ ĐẠI DIỆN",
        "mascotMode": "happy",
        "mascotTip": r"Các giá trị đại diện là: 1,5; 2,5; 3,5; 4,5. Nhóm đều nhau có độ dài bằng 1!",
        "narration": "Hết 15 giây! Lời giải chi tiết như sau: Tất cả các nhóm đều có độ dài bằng nhau: L bằng 2 trừ 1 bằng 3 trừ 2 bằng 4 trừ 3 bằng 5 trừ 4 bằng 1 giờ. Giá trị đại diện của từng nhóm lần lượt là: Nhóm một có c 1 bằng 1 cộng 2 chia 2 bằng 1,5; Nhóm hai có c 2 bằng 2 cộng 3 chia 2 bằng 2,5; Nhóm ba có c 3 bằng 3 cộng 4 chia 2 bằng 3,5; Nhóm bốn có c 4 bằng 4 cộng 5 chia 2 bằng 4,5. Tổng cỡ mẫu n bằng 6 cộng 14 cộng 15 cộng 5 bằng 40 học sinh.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Bảng Giá Trị Đại Diện Hoàn Chỉnh</h4>
    </div>
    <div class="overflow-x-auto my-1 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-indigo-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Nhóm</th>
            <th class="p-2 border border-slate-700">Tần số ($m_i$)</th>
            <th class="p-2 border border-slate-700">Độ dài ($L_i = b - a$)</th>
            <th class="p-2 border border-slate-700">Giá trị đại diện ($c_i = \frac{a+b}{2}$)</th>
          </tr>
        </thead>
        <tbody class="text-slate-300 divide-y divide-slate-700">
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[1; 2)$</td>
            <td class="p-2 border border-slate-700">6</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">1</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">1,5</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[2; 3)$</td>
            <td class="p-2 border border-slate-700">14</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">1</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">2,5</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[3; 4)$</td>
            <td class="p-2 border border-slate-700">15</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">1</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">3,5</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[4; 5)$</td>
            <td class="p-2 border border-slate-700">5</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">1</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">4,5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-indigo-950/40 p-2 rounded border border-indigo-500/30 text-indigo-200 text-xs font-semibold">
      👉 Cỡ mẫu: $n = 6 + 14 + 15 + 5 = \mathbf{40}$ học sinh.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: XÁC ĐỊNH CỠ MẪU VÀ TẦN SỐ TƯƠNG ĐỐI",
        "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Tần số tương đối: $f_i = \frac{m_i}{n} \times 100\%$!",
        "narration": "Chúng ta cùng đến với Ví dụ 2: Khảo sát cân nặng của 50 quả bơ xuất khẩu thu được bảng số liệu ghép nhóm: nhóm từ 200 đến 250 gam có 8 quả; nhóm từ 250 đến 300 gam có 18 quả; nhóm từ 300 đến 350 gam có 16 quả; nhóm từ 350 đến 400 gam có 8 quả. Hãy tính tỉ lệ phần trăm số quả bơ có cân nặng từ 250 gam đến dưới 350 gam. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase">Ví dụ 2 (Thông hiểu)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-emerald-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Khảo sát khối lượng ($g$) của 50 quả bơ:
    </p>
    <div class="overflow-x-auto my-2">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-emerald-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Khối lượng ($g$)</th>
            <th class="p-2 border border-slate-700">$[200; 250)$</th>
            <th class="p-2 border border-slate-700">$[250; 300)$</th>
            <th class="p-2 border border-slate-700">$[300; 350)$</th>
            <th class="p-2 border border-slate-700">$[350; 400)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-2 font-bold text-slate-400 border border-slate-700">Số quả ($m_i$)</td>
            <td class="p-2 border border-slate-700">8</td>
            <td class="p-2 border border-slate-700">18</td>
            <td class="p-2 border border-slate-700">16</td>
            <td class="p-2 border border-slate-700">8</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-emerald-300 font-semibold">
      👉 Yêu cầu: Tính tỉ lệ phần trăm số quả bơ có khối lượng từ $250g$ đến dưới $350g$.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: 68% SỐ QUẢ BƠ ĐẠT TIÊU CHUẨN",
        "mascotMode": "happy",
        "mascotTip": r"Cộng tần số nhóm 2 và nhóm 3: $18 + 16 = 34$ quả $\implies \frac{34}{50} = 68\%$!",
        "narration": "Hết 15 giây! Lời giải như sau: Cỡ mẫu là n bằng 50 quả. Khối lượng từ 250 gam đến dưới 350 gam bao gồm hai nhóm kề nhau: nhóm từ 250 đến 300 gam có 18 quả, và nhóm từ 300 đến 350 gam có 16 quả. Tổng số quả thuộc khoảng này là: 18 cộng 16 bằng 34 quả. Tỉ lệ phần trăm tương ứng là: 34 chia 50 nhân 100 phần trăm bằng 68 phần trăm. Như vậy có 68 phần trăm số quả bơ đạt khối lượng từ 250 đến dưới 350 gam.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Tính tổng tần số và tỉ lệ phần trăm</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>Bước 1:</b> Số quả bơ có khối lượng từ $250g$ đến dưới $350g$ gồm hai nhóm $[250; 300)$ và $[300; 350)$:</p>
      <div class="text-emerald-300 font-mono text-sm">
        $$m = 18 + 16 = \mathbf{34} \text{ (quả)}$$
      </div>
      <p><b>Bước 2:</b> Tính tỉ lệ phần trăm so với toàn bộ cỡ mẫu $n = 50$:</p>
      <div class="text-cyan-300 font-mono text-sm">
        $$f = \frac{34}{50} \times 100\% = \mathbf{68\%}$$
      </div>
      <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 font-bold">
        👉 Đáp số: Có <b>$68\%$</b> số quả bơ có khối lượng trong khoảng từ $250g$ đến dưới $350g$.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: ĐỌC VÀ PHÂN TÍCH NHÓM CHỨA ĐIỀU KIỆN",
        "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Lưu ý điều kiện đầu mút: Nhóm $[a; b)$ lấy $x \ge a$ và $x < b$!",
        "narration": "Chúng ta tiếp tục với Ví dụ 3: Cho bảng phân bố ghép nhóm về điểm kiểm tra giữa kỳ môn Toán của 100 học sinh: từ 4 đến 5 điểm có 5 em; từ 5 đến 6 điểm có 15 em; từ 6 đến 7 điểm có 30 em; từ 7 đến 8 điểm có 25 em; từ 8 đến 9 điểm có 15 em; từ 9 đến 10 điểm có 10 em. Hỏi: Có bao nhiêu học sinh đạt điểm từ 7 trở lên? Và nhóm nào có số lượng học sinh đông nhất? Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-amber-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase">Ví dụ 3 (Vận dụng)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-amber-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Kết quả điểm kiểm tra Toán của 100 học sinh ($n = 100$):
    </p>
    <div class="overflow-x-auto my-2 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-amber-300 border border-slate-700">
            <th class="p-1.5 border border-slate-700">Điểm số</th>
            <th class="p-1.5 border border-slate-700">$[4; 5)$</th>
            <th class="p-1.5 border border-slate-700">$[5; 6)$</th>
            <th class="p-1.5 border border-slate-700">$[6; 7)$</th>
            <th class="p-1.5 border border-slate-700">$[7; 8)$</th>
            <th class="p-1.5 border border-slate-700">$[8; 9)$</th>
            <th class="p-1.5 border border-slate-700">$[9; 10]$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-1.5 font-bold text-slate-400 border border-slate-700">Tần số ($m_i$)</td>
            <td class="p-1.5 border border-slate-700">5</td>
            <td class="p-1.5 border border-slate-700">15</td>
            <td class="p-1.5 border border-slate-700">30</td>
            <td class="p-1.5 border border-slate-700">25</td>
            <td class="p-1.5 border border-slate-700">15</td>
            <td class="p-1.5 border border-slate-700">10</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-amber-300 font-semibold">
      a) Có bao nhiêu học sinh đạt điểm từ 7,0 trở lên?<br/>
      b) Nhóm điểm nào tập trung đông học sinh nhất?
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: 50 HỌC SINH ĐẠT TỪ 7 ĐIỂM TRỞ LÊN",
        "mascotMode": "happy",
        "mascotTip": r"Cộng 3 nhóm cuối: $25 + 15 + 10 = 50$ học sinh. Nhóm đông nhất là $[6; 7)$ với 30 học sinh!",
        "narration": "Hết 15 giây! Lời giải như sau: Ở câu a: Các học sinh có điểm từ 7 trở lên thuộc 3 nhóm cuối: nhóm từ 7 đến 8 có 25 em; nhóm từ 8 đến 9 có 15 em; và nhóm từ 9 đến 10 có 10 em. Tổng số học sinh đạt điểm từ 7 trở lên là: 25 cộng 15 cộng 10 bằng 50 học sinh, chiếm đúng 50 phần trăm cả lớp. Ở câu b: Quan sát hàng tần số, ta thấy nhóm từ 6 đến 7 điểm có tần số lớn nhất bằng 30 học sinh. Đây chính là nhóm tập trung đông học sinh nhất, sau này các em sẽ biết đây là nhóm chứa mốt.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Đọc bảng và xác định nhóm tần số lớn nhất</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>a) Số học sinh đạt điểm từ $7,0$ trở lên:</b></p>
      <p>Bao gồm 3 nhóm: $[7; 8)$, $[8; 9)$ và $[9; 10]$:</p>
      <div class="text-emerald-300 font-mono text-sm">
        $$N_{\ge 7} = 25 + 15 + 10 = \mathbf{50} \text{ (học sinh)} \implies \frac{50}{100} = \mathbf{50\%}$$
      </div>

      <p><b>b) Nhóm có số lượng học sinh đông nhất:</b></p>
      <p>So sánh các tần số: $5, 15, 30, 25, 15, 10$ thì giá trị lớn nhất là $30$.</p>
      <div class="text-cyan-300 font-mono">
        👉 Nhóm tập trung đông học sinh nhất là nhóm <b>$[6; 7)$</b> với <b>$30$ học sinh</b>.
      </div>

      <div class="bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 font-bold">
        👉 Kết luận: a) <b>50 học sinh</b> đạt từ 7 điểm trở lên | b) Nhóm đông nhất là <b>$[6; 7)$</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: XÁC ĐỊNH MẪU SỐ LIỆU ĐỘ DÀI KHÔNG ĐỀU",
        "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Lưu ý: Không phải mọi bảng ghép nhóm đều có độ dài bằng nhau, nhóm cuối có thể mở rộng!",
        "narration": "Chúng ta đến với Ví dụ 4: Một công ty công nghệ thống kê độ tuổi của 80 nhân viên theo bảng: từ 20 đến 25 tuổi có 18 người; từ 25 đến 30 tuổi có 32 người; từ 30 đến 40 tuổi có 22 người; từ 40 đến 60 tuổi có 8 người. Hãy tính độ dài và giá trị đại diện của từng nhóm. Em có nhận xét gì về độ dài của các nhóm này? Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-rose-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase">Ví dụ 4 (Độ dài nhóm không đều)</span>
      <div class="countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-rose-400 countdown-num">30s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Thống kê độ tuổi của 80 nhân viên một công ty công nghệ:
    </p>
    <div class="overflow-x-auto my-2 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-rose-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Độ tuổi</th>
            <th class="p-2 border border-slate-700">$[20; 25)$</th>
            <th class="p-2 border border-slate-700">$[25; 30)$</th>
            <th class="p-2 border border-slate-700">$[30; 40)$</th>
            <th class="p-2 border border-slate-700">$[40; 60)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-2 font-bold text-slate-400 border border-slate-700">Số nhân viên</td>
            <td class="p-2 border border-slate-700">18</td>
            <td class="p-2 border border-slate-700">32</td>
            <td class="p-2 border border-slate-700">22</td>
            <td class="p-2 border border-slate-700">8</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-rose-300 font-semibold">
      👉 Yêu cầu: Xác định độ dài, giá trị đại diện của từng nhóm và rút ra nhận xét.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KỸ NĂNG TÍNH TOÁN KHI ĐỘ DÀI CÁC NHÓM KHÔNG BẰNG NHAU",
        "mascotMode": "happy",
        "mascotTip": r"Độ dài các nhóm lần lượt là: 5, 5, 10, 20. Giá trị đại diện là 22,5; 27,5; 35; 50!",
        "narration": "Hết 30 giây! Lời giải như sau: Ta tính toán cho từng nhóm: Nhóm một từ 20 đến 25 có độ dài bằng 5, giá trị đại diện là 22,5; Nhóm hai từ 25 đến 30 có độ dài bằng 5, giá trị đại diện là 27,5; Nhóm ba từ 30 đến 40 có độ dài bằng 10, giá trị đại diện là 35; Nhóm bốn từ 40 đến 60 có độ dài bằng 20, giá trị đại diện là 50. Nhận xét: Trong thực tế, các nhóm số liệu không bắt buộc phải có độ dài bằng nhau. Khi dữ liệu ở các nhóm tuổi cao thưa thớt hơn, người ta thường gộp khoảng rộng hơn để đảm bảo mỗi nhóm đều có tần số đủ lớn phục vụ phân tích thống kê.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Bảng thông số khi độ dài các nhóm khác nhau</h4>
    </div>
    <div class="overflow-x-auto my-1 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-rose-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Độ tuổi</th>
            <th class="p-2 border border-slate-700">Tần số ($m_i$)</th>
            <th class="p-2 border border-slate-700">Độ dài ($L_i = b - a$)</th>
            <th class="p-2 border border-slate-700">Giá trị đại diện ($c_i$)</th>
          </tr>
        </thead>
        <tbody class="text-slate-300 divide-y divide-slate-700">
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[20; 25)$</td>
            <td class="p-2 border border-slate-700">18</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">5</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">22,5</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[25; 30)$</td>
            <td class="p-2 border border-slate-700">32</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">5</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">27,5</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[30; 40)$</td>
            <td class="p-2 border border-slate-700">22</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">10</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">35,0</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[40; 60)$</td>
            <td class="p-2 border border-slate-700">8</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">20</td>
            <td class="p-2 border border-slate-700 text-cyan-400 font-bold">50,0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 text-xs font-semibold">
      💡 <b>Nhận xét:</b> Các nhóm có độ dài khác nhau ($5, 5, 10, 20$). Khi tính toán, ta luôn dùng giá trị đại diện chính xác $c_i = \frac{a_i + a_{i+1}}{2}$.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI THƯỜNG GẶP KHI ĐỌC BẢNG SỐ LIỆU",
        "subtitle": "3 SAI LẦM KHIẾN HỌC SINH MẤT ĐIỂM",
        "mascotMode": "warning",
        "mascotTip": r"Bẫy lớn nhất: Nhầm lẫn dấu ngoặc vuông $[$ và ngoặc tròn $($ ở hai đầu mút!",
        "narration": "Trước khi kết thúc Mục 1, Thầy Cú có 3 cảnh báo bẫy thi đặc biệt quan trọng: Thứ nhất là bẫy phân loại giá trị tại đầu mút. Giá trị bằng đúng a thì thuộc nhóm a đến b, nhưng giá trị bằng đúng b thì thuộc nhóm kế tiếp, trừ nhóm cuối cùng có thể lấy cả hai mút. Thứ hai là nhầm lẫn giá trị đại diện với độ dài nhóm. Độ dài là hiệu b trừ a, còn giá trị đại diện là trung bình cộng a cộng b chia 2. Thứ ba là quên cộng tổng tần số để kiểm tra lại cỡ mẫu n xem có đủ số liệu hay không.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">⚠️</span>
      <h3 class="text-sm font-bold text-amber-300">3 Lỗi Sai Thường Gặp Về Mẫu Số Liệu Ghép Nhóm</h3>
    </div>
    <div class="grid grid-cols-3 gap-2.5 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">1. Nhầm quy tắc đầu mút:</span>
        <p class="text-slate-300 mt-1">Số liệu bằng $b$ thuộc nhóm $[b; c)$, <b>không</b> thuộc nhóm $[a; b)$! Trừ nhóm cuối cùng $[a_k; a_{k+1}]$.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">2. Lẫn lộn độ dài & đại diện:</span>
        <p class="text-slate-300 mt-1">Độ dài: $L = b - a$ (phép trừ).<br/>Đại diện: $c = \frac{a+b}{2}$ (phép cộng chia đôi).</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400">3. Quên kiểm tra cỡ mẫu:</span>
        <p class="text-slate-300 mt-1">Luôn tính $\sum m_i = n$ để đảm bảo không bỏ sót số liệu hay đếm trùng lặp.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "KẾT THÚC MỤC 1 • CHUYỂN SANG MỤC 2: GHÉP NHÓM MẪU SỐ LIỆU",
        "mascotMode": "happy",
        "mascotTip": r"Nắm chắc: Nhóm $[a; b)$ có độ dài $b-a$ và giá trị đại diện $\frac{a+b}{2}$!",
        "narration": "Chúc mừng các em đã nắm chắc toàn bộ kiến thức nền tảng của Mục 1! Chúng ta đã hiểu bản chất của mẫu số liệu ghép nhóm, cách đọc bảng tần số, xác định chính xác độ dài nhóm và giá trị đại diện. Bây giờ hãy sẵn sàng chuyển sang Mục 2: nơi chúng ta cùng tìm hiểu quy trình các bước chuyển đổi từ một tập dữ liệu thô ban đầu thành một bảng số liệu ghép nhóm khoa học và trực quan.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center">
    <div class="inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2">
      <span class="text-2xl">🦉📊</span>
    </div>
    <h3 class="text-lg font-black text-emerald-200 mb-1">Bí Kíp Cốt Lõi Mục 1</h3>
    <p class="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
      Mẫu số liệu ghép nhóm $[a_i; a_{i+1})$ thay thế hàng nghìn dữ liệu đơn lẻ bằng các cặp giá trị:<br/>
      <span class="text-cyan-400 font-bold">Giá trị đại diện $c_i = \frac{a_i + a_{i+1}}{2}$</span> đi kèm với <span class="text-emerald-400 font-bold">Tần số nhóm $m_i$</span>.
    </p>
    <div class="mt-3 flex justify-center gap-2">
      <span class="px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40">
        Sẵn sàng chuyển sang Mục 2: Ghép nhóm mẫu số liệu 🚀
      </span>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: GHÉP NHÓM MẪU SỐ LIỆU TỪ MẪU DỮ LIỆU THÔ
# ==============================================================================
BAI8_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. QUY TRÌNH 4 BƯỚC GHÉP NHÓM MẪU SỐ LIỆU THÔ",
        "subtitle": "BÀI 8 • MỤC 2 • KỸ NĂNG XỬ LÝ VÀ CHUYỂN ĐỔI DỮ LIỆU",
        "mascotMode": "pointer",
        "mascotTip": r"4 bước: Tìm min, max -> Chọn số nhóm $k$ -> Xác định độ dài $L$ -> Đếm tần số lập bảng!",
        "narration": "Chào mừng các em đến với Mục 2: Ghép nhóm mẫu số liệu. Khi có trong tay một tập dữ liệu thô gồm nhiều giá trị chưa được sắp xếp, làm thế nào để chúng ta tạo ra được một bảng tần số ghép nhóm chuẩn mực? Chúng ta thực hiện tuần tự qua 4 bước: Bước 1: Tìm giá trị nhỏ nhất min và lớn nhất max của mẫu số liệu; Bước 2: Chọn số lượng nhóm k phù hợp, thông thường từ 5 đến 8 nhóm; Bước 3: Xác định độ dài mỗi nhóm L sao cho k nhân L lớn hơn hoặc bằng khoảng biến thiên max trừ min; và Bước 4: Phân loại, đếm tần số của từng nhóm rồi ghi vào bảng thống kê.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase">Quy trình chuẩn</span>
      <h3 class="text-lg font-black text-teal-200">4 Bước Ghép Nhóm Mẫu Số Liệu Thô</h3>
    </div>
    <p class="text-xs text-slate-300">Áp dụng tuần tự 4 bước để chuyển đổi dữ liệu thô sang bảng ghép nhóm:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-indigo-400">
      <h4 class="font-bold text-indigo-300 mb-1">🔍 Bước 1: Xác định biên dữ liệu</h4>
      <p class="text-slate-300">Tìm giá trị nhỏ nhất $x_{\min}$ và lớn nhất $x_{\max}$. Tính khoảng biến thiên $R = x_{\max} - x_{\min}$.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-emerald-400">
      <h4 class="font-bold text-emerald-300 mb-1">🔢 Bước 2: Chọn số nhóm $k$</h4>
      <p class="text-slate-300">Thông thường chọn $k$ từ 5 đến 8 nhóm (hoặc theo yêu cầu cụ thể của bài toán đề bài).</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-amber-400">
      <h4 class="font-bold text-amber-300 mb-1">📏 Bước 3: Xác định độ dài nhóm $L$</h4>
      <p class="text-slate-300">Chọn $L > \frac{x_{\max} - x_{\min}}{k}$, chọn đầu mút trái $a_1 \le x_{\min}$ và đầu mút phải cuối $a_{k+1} \ge x_{\max}$.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-rose-400">
      <h4 class="font-bold text-rose-300 mb-1">📋 Bước 4: Đếm tần số & Lập bảng</h4>
      <p class="text-slate-300">Đếm số giá trị thuộc từng nửa khoảng $[a_i; a_{i+1})$, kiểm tra lại tổng tần số $\sum m_i = n$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÔNG THỨC CHỌN ĐỘ DÀI NHÓM $L$",
        "subtitle": "KỸ THUẬT PHÂN CHIA KHOẢNG ĐỀU ĐẶN",
        "mascotMode": "explain",
        "mascotTip": r"Quy tắc chọn $L$: Chọn $L$ là số tròn (như 2, 5, 10, 20...) lớn hơn $\frac{x_{\max} - x_{\min}}{k}$!",
        "narration": "Một kỹ năng thực hành rất quan trọng là việc chọn độ dài nhóm L. Ta lấy giá trị lớn nhất trừ giá trị nhỏ nhất rồi chia cho số nhóm k. Sau đó, ta làm tròn lên một số nguyên đẹp và tròn trịa, ví dụ như 2, 5, 10 hoặc 20 đơn vị. Đầu mút trái đầu tiên a 1 nên chọn nhỏ hơn hoặc bằng x min một chút sao cho tròn số để việc đếm và phân loại số liệu diễn ra nhanh chóng, hạn chế tối đa sai sót.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
      <h3 class="text-sm font-bold text-cyan-300">Kỹ Thuật Chọn Độ Dài Nhóm $L$ Tròn Trịa</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700">
        <span class="font-bold text-emerald-400">Điều kiện bao phủ toàn bộ dữ liệu:</span>
        <div class="text-emerald-300 font-mono text-center my-2 text-sm">
          $$k \cdot L \ge x_{\max} - x_{\min}$$
        </div>
        <p class="text-slate-300">Đảm bảo nhóm đầu tiên chứa $x_{\min}$ và nhóm cuối cùng bao trọn $x_{\max}$.</p>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700">
        <span class="font-bold text-amber-400">Kinh nghiệm chọn số tròn:</span>
        <p class="text-slate-300 mt-1">
          • Nếu chia ra $\frac{R}{k} = 4,2 \implies$ Chọn $L = 5$.<br/>
          • Nếu chia ra $\frac{R}{k} = 8,6 \implies$ Chọn $L = 10$.<br/>
          • Chọn $a_1$ là bội số của $L$ để các đầu mút tròn chục, tròn trăm.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: GHÉP NHÓM 20 SỐ LIỆU ĐIỂM THI",
        "subtitle": "VÍ DỤ MINH HỌA 1 • THỰC HÀNH GHÉP 4 NHÓM (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Tìm $x_{\min}, x_{\max}$ trong dãy 20 số rồi phân vào 4 nhóm $[4; 5,5), [5,5; 7), [7; 8,5), [8,5; 10]$!",
        "narration": "Chúng ta cùng làm Ví dụ 1: Điểm kiểm tra Toán của 20 học sinh gồm các số liệu sau: 4,5; 5,0; 5,5; 6,0; 6,0; 6,5; 7,0; 7,0; 7,5; 7,5; 8,0; 8,0; 8,0; 8,5; 8,5; 9,0; 9,0; 9,5; 9,5; 10,0. Hãy ghép mẫu số liệu trên thành 4 nhóm có độ dài bằng nhau: từ 4 đến 5,5; từ 5,5 đến 7; từ 7 đến 8,5; và từ 8,5 đến 10. Các em có 15 giây đếm số lượng học sinh trong từng nhóm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase">Ví dụ 1 (Ghép nhóm)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-indigo-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-xs text-slate-200 font-semibold mb-2">
      Mẫu số liệu thô về điểm Toán của 20 học sinh ($n = 20$):
    </p>
    <div class="bg-slate-900/90 p-2.5 rounded border border-slate-700 font-mono text-cyan-300 text-xs text-center my-2 leading-relaxed">
      4,5 ; 5,0 ; 5,5 ; 6,0 ; 6,0 ; 6,5 ; 7,0 ; 7,0 ; 7,5 ; 7,5 ;<br/>
      8,0 ; 8,0 ; 8,0 ; 8,5 ; 8,5 ; 9,0 ; 9,0 ; 9,5 ; 9,5 ; 10,0.
    </div>
    <p class="text-xs text-indigo-300 font-semibold">
      👉 Yêu cầu: Ghép số liệu vào 4 nhóm: $[4; 5,5)$, $[5,5; 7)$, $[7; 8,5)$, $[8,5; 10]$ và đếm tần số mỗi nhóm.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ BẢNG TẦN SỐ GHÉP NHÓM: 2, 4, 7, 7",
        "mascotMode": "happy",
        "mascotTip": r"Lưu ý: 5,5 thuộc nhóm $[5,5; 7)$; 7,0 thuộc nhóm $[7; 8,5)$; 8,5 thuộc nhóm $[8,5; 10]$!",
        "narration": "Hết 15 giây! Lời giải chi tiết như sau: Đếm cẩn thận theo quy tắc đầu mút: Nhóm một từ 4 đến dưới 5,5 gồm hai điểm: 4,5 và 5,0, nên tần số bằng 2; Nhóm hai từ 5,5 đến dưới 7 gồm bốn điểm: 5,5; 6,0; 6,0; 6,5, nên tần số bằng 4; Nhóm ba từ 7 đến dưới 8,5 gồm bảy điểm: 7,0; 7,0; 7,5; 7,5; 8,0; 8,0; 8,0, nên tần số bằng 7; Nhóm bốn từ 8,5 đến 10 gồm bảy điểm: 8,5; 8,5; 9,0; 9,0; 9,5; 9,5; 10,0, nên tần số bằng 7. Tổng tần số là 2 cộng 4 cộng 7 cộng 7 bằng đúng 20 học sinh.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Bảng Tần Số Ghép Nhóm Sau Phân Loại</h4>
    </div>
    <div class="overflow-x-auto my-1 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-indigo-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Nhóm điểm</th>
            <th class="p-2 border border-slate-700">Các giá trị thuộc nhóm</th>
            <th class="p-2 border border-slate-700">Tần số ($m_i$)</th>
            <th class="p-2 border border-slate-700">Giá trị đại diện ($c_i$)</th>
          </tr>
        </thead>
        <tbody class="text-slate-300 divide-y divide-slate-700">
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[4; 5,5)$</td>
            <td class="p-2 border border-slate-700 text-slate-400">4,5 ; 5,0</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">2</td>
            <td class="p-2 border border-slate-700 text-cyan-400">4,75</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[5,5; 7)$</td>
            <td class="p-2 border border-slate-700 text-slate-400">5,5 ; 6,0 ; 6,0 ; 6,5</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">4</td>
            <td class="p-2 border border-slate-700 text-cyan-400">6,25</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[7; 8,5)$</td>
            <td class="p-2 border border-slate-700 text-slate-400">7,0 ; 7,0 ; 7,5 ; 7,5 ; 8,0 ; 8,0 ; 8,0</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">7</td>
            <td class="p-2 border border-slate-700 text-cyan-400">7,75</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[8,5; 10]$</td>
            <td class="p-2 border border-slate-700 text-slate-400">8,5 ; 8,5 ; 9,0 ; 9,0 ; 9,5 ; 9,5 ; 10,0</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">7</td>
            <td class="p-2 border border-slate-700 text-cyan-400">9,25</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-indigo-950/40 p-2 rounded border border-indigo-500/30 text-indigo-200 text-xs font-semibold">
      👉 Kiểm tra cỡ mẫu: $\sum m_i = 2 + 4 + 7 + 7 = \mathbf{20}$ (chính xác tuyệt đối).
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TỰ CHỌN ĐỘ DÀI VÀ GHÉP NHÓM",
        "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"$x_{\min} = 152, x_{\max} = 178 \implies R = 26$. Chia 5 nhóm thì $L = \frac{26}{5} = 5,2 \implies$ Chọn $L = 6$ hoặc chọn các mốc $[150; 155), ...$!",
        "narration": "Chúng ta cùng đến với Ví dụ 2: Đo chiều cao tính bằng centimet của 25 bạn học sinh lớp 11, kết quả nhỏ nhất là 152 centimet và lớn nhất là 178 centimet. Đề bài yêu cầu: Hãy chia mẫu số liệu này thành 5 nhóm có độ dài bằng nhau và bằng 6 centimet, với nhóm đầu tiên bắt đầu từ 150 centimet. Xác định các nhóm ghép tương ứng. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase">Ví dụ 2 (Chia khoảng ghép nhóm)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-emerald-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Đo chiều cao ($cm$) của $25$ học sinh lớp 11:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2">
      <p>• Chiều cao thấp nhất: <b>$x_{\min} = 152\text{ cm}$</b>.</p>
      <p>• Chiều cao cao nhất: <b>$x_{\max} = 178\text{ cm}$</b>.</p>
      <p>• Số nhóm cần chia: <b>$k = 5$ nhóm</b> có độ dài <b>$L = 6\text{ cm}$</b>.</p>
      <p>• Nhóm đầu tiên bắt đầu từ <b>$150\text{ cm}$</b>.</p>
    </div>
    <p class="text-xs text-emerald-300 font-semibold">
      👉 Yêu cầu: Xác định cụ thể 5 nhóm ghép nửa khoảng tương ứng.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ 5 NHÓM ĐỀU ĐẶN CÁCH NHAU 6 CM",
        "mascotMode": "happy",
        "mascotTip": r"Bắt đầu từ 150, cộng dồn 6: $[150; 156), [156; 162), [162; 168), [168; 174), [174; 180)$!",
        "narration": "Hết 15 giây! Lời giải như sau: Bắt đầu từ đầu mút trái a 1 bằng 150 centimet và mỗi nhóm có độ dài L bằng 6 centimet, ta cộng dồn liên tiếp: Nhóm một là nửa khoảng từ 150 đến 156 centimet; Nhóm hai là nửa khoảng từ 156 đến 162 centimet; Nhóm ba là nửa khoảng từ 162 đến 168 centimet; Nhóm bốn là nửa khoảng từ 168 đến 174 centimet; và Nhóm năm là nửa khoảng từ 174 đến 180 centimet. Nhóm đầu tiên chứa giá trị nhỏ nhất 152, và nhóm cuối cùng bao trọn giá trị lớn nhất 178, phân chia hoàn toàn chính xác.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">5 Nhóm Ghép Số Liệu Chiều Cao</h4>
    </div>
    <div class="grid grid-cols-5 gap-2 text-xs text-center my-2">
      <div class="bg-slate-900/90 p-2.5 rounded border border-emerald-500/40">
        <span class="text-slate-400 font-bold block mb-1">Nhóm 1</span>
        <b class="text-emerald-300 text-sm">$[150; 156)$</b>
        <span class="text-[10px] text-slate-400 block mt-1">Chứa $x_{\min}=152$</span>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-emerald-500/40">
        <span class="text-slate-400 font-bold block mb-1">Nhóm 2</span>
        <b class="text-emerald-300 text-sm">$[156; 162)$</b>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-emerald-500/40">
        <span class="text-slate-400 font-bold block mb-1">Nhóm 3</span>
        <b class="text-emerald-300 text-sm">$[162; 168)$</b>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-emerald-500/40">
        <span class="text-slate-400 font-bold block mb-1">Nhóm 4</span>
        <b class="text-emerald-300 text-sm">$[168; 174)$</b>
      </div>
      <div class="bg-slate-900/90 p-2.5 rounded border border-emerald-500/40">
        <span class="text-slate-400 font-bold block mb-1">Nhóm 5</span>
        <b class="text-emerald-300 text-sm">$[174; 180)$</b>
        <span class="text-[10px] text-slate-400 block mt-1">Chứa $x_{\max}=178$</span>
      </div>
    </div>
    <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 text-xs font-semibold">
      👉 Kiểm tra: Miền bao phủ $[150; 180)$ có độ dài $30\text{ cm} \ge (178 - 152 = 26\text{ cm})$. Đạt chuẩn 100%.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÍNH TẦN SUẤT VÀ VẼ BIỂU ĐỒ TẦN SỐ",
        "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Tần suất $f_i = \frac{m_i}{n}$. Tổng tất cả các tần suất luôn bằng 1 hay 100%!",
        "narration": "Chúng ta tiếp tục với Ví dụ 3: Thời gian hoàn thành một bài chạy 100 mét tính bằng giây của 40 vận động viên được thống kê vào bảng: từ 11 đến 12 giây có 6 người; từ 12 đến 13 giây có 16 người; từ 13 đến 14 giây có 12 người; từ 14 đến 15 giây có 6 người. Hãy tính tần suất của từng nhóm. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-amber-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase">Ví dụ 3 (Tính tần suất)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-amber-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Thời gian chạy 100m ($s$) của 40 vận động viên ($n = 40$):
    </p>
    <div class="overflow-x-auto my-2 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-amber-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Thời gian ($s$)</th>
            <th class="p-2 border border-slate-700">$[11; 12)$</th>
            <th class="p-2 border border-slate-700">$[12; 13)$</th>
            <th class="p-2 border border-slate-700">$[13; 14)$</th>
            <th class="p-2 border border-slate-700">$[14; 15)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-2 font-bold text-slate-400 border border-slate-700">Số VĐV ($m_i$)</td>
            <td class="p-2 border border-slate-700">6</td>
            <td class="p-2 border border-slate-700">16</td>
            <td class="p-2 border border-slate-700">12</td>
            <td class="p-2 border border-slate-700">6</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-amber-300 font-semibold">
      👉 Yêu cầu: Tính tần suất tương ứng của từng nhóm (dưới dạng tỉ số phần trăm).
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ TẦN SUẤT: 15%, 40%, 30%, 15%",
        "mascotMode": "happy",
        "mascotTip": r"Lấy tần số chia cho tổng số 40: $\frac{6}{40} = 15\%$; $\frac{16}{40} = 40\%$; $\frac{12}{40} = 30\%$!",
        "narration": "Hết 15 giây! Lời giải như sau: Cỡ mẫu là 40 vận động viên. Tần suất của nhóm một từ 11 đến 12 giây là: 6 chia 40 bằng 15 phần trăm; Tần suất của nhóm hai từ 12 đến 13 giây là: 16 chia 40 bằng 40 phần trăm; Tần suất của nhóm ba từ 13 đến 14 giây là: 12 chia 40 bằng 30 phần trăm; Tần suất của nhóm bốn từ 14 đến 15 giây là: 6 chia 40 bằng 15 phần trăm. Tổng các tần suất là 15 cộng 40 cộng 30 cộng 15 bằng đúng 100 phần trăm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Bảng Tần Suất Ghép Nhóm ($n = 40$)</h4>
    </div>
    <div class="overflow-x-auto my-1 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-amber-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Thời gian ($s$)</th>
            <th class="p-2 border border-slate-700">Tần số ($m_i$)</th>
            <th class="p-2 border border-slate-700">Công thức tính</th>
            <th class="p-2 border border-slate-700">Tần suất ($f_i$)</th>
          </tr>
        </thead>
        <tbody class="text-slate-300 divide-y divide-slate-700">
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[11; 12)$</td>
            <td class="p-2 border border-slate-700">6</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$\frac{6}{40} \times 100\%$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">15%</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[12; 13)$</td>
            <td class="p-2 border border-slate-700">16</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$\frac{16}{40} \times 100\%$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">40%</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[13; 14)$</td>
            <td class="p-2 border border-slate-700">12</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$\frac{12}{40} \times 100\%$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">30%</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[14; 15)$</td>
            <td class="p-2 border border-slate-700">6</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$\frac{6}{40} \times 100\%$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">15%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 text-xs font-semibold">
      👉 Tổng tần suất: $\sum f_i = 15\% + 40\% + 30\% + 15\% = \mathbf{100\%}$.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: XỬ LÝ DỮ LIỆU ĐO LIÊN TỤC TRONG THÍ NGHIỆM",
        "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Dữ liệu liên tục có số thập phân: Cần chia nhóm bao phủ từ 18,0 đến 25,0 với bước nhảy hợp lý!",
        "narration": "Chúng ta đến với Ví dụ 4: Trong một thí nghiệm nông nghiệp công nghệ cao, người ta đo nhiệt độ không khí lúc 12 giờ trưa trong 30 ngày liên tiếp, kết quả thu được dao động từ 18,2 độ C đến 24,8 độ C. Yêu cầu: Hãy chia mẫu số liệu trên thành 7 nhóm có độ dài bằng nhau bằng 1 độ C, bắt đầu từ 18 độ C, và cho biết nhiệt độ 22,0 độ C sẽ thuộc vào nhóm nào trong bảng phân loại? Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-rose-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase">Ví dụ 4 (Thực nghiệm liên tục)</span>
      <div class="countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-rose-400 countdown-num">30s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Đo nhiệt độ ($^\circ\text{C}$) trong 30 ngày liên tiếp:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2">
      <p>• Nhiệt độ thấp nhất: <b>$18,2^\circ\text{C}$</b>.</p>
      <p>• Nhiệt độ cao nhất: <b>$24,8^\circ\text{C}$</b>.</p>
      <p>• Yêu cầu: Chia thành <b>$7$ nhóm</b> có độ dài <b>$1^\circ\text{C}$</b>, bắt đầu từ <b>$18^\circ\text{C}$</b>.</p>
    </div>
    <p class="text-xs text-rose-300 font-bold">
      Hỏi: Giá trị nhiệt độ $22,0^\circ\text{C}$ sẽ thuộc vào nhóm nào trong bảng ghép nhóm?
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "GIẢI THÍCH: 22,0°C THUỘC NHÓM [22; 23), KHÔNG PHẢI [21; 22)",
        "mascotMode": "happy",
        "mascotTip": r"Quy ước: Giá trị 22,0 rơi vào mút trái của nhóm $[22; 23)$, vì nhóm trước là $[21; 22)$ không lấy 22!",
        "narration": "Hết 30 giây! Lời giải như sau: Với 7 nhóm có độ dài bằng 1 độ C bắt đầu từ 18 độ C, ta có các nhóm: Nhóm một là 18 đến 19; Nhóm hai là 19 đến 20; Nhóm ba là 20 đến 21; Nhóm bốn là 21 đến 22; Nhóm năm là 22 đến 23; Nhóm sáu là 23 đến 24; và Nhóm bảy là 24 đến 25. Xét giá trị 22,0 độ C: Vì nhóm bốn là nửa khoảng mở tại đầu mút phải, tức là từ 21 đến nhỏ hơn 22, nên giá trị 22,0 không thể thuộc nhóm bốn. Giá trị 22,0 đóng vai trò là đầu mút trái có ngoặc vuông của nhóm năm từ 22 đến 23. Do đó, nhiệt độ 22,0 độ C thuộc nhóm năm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">7 Nhóm Nhiệt Độ Và Vị Trí Của $22,0^\circ\text{C}$</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>Bước 1: Liệt kê 7 nhóm nhiệt độ:</b></p>
      <div class="grid grid-cols-4 gap-1.5 font-mono text-center my-1 text-[11px]">
        <span class="p-1 bg-slate-800 rounded">1. $[18; 19)$</span>
        <span class="p-1 bg-slate-800 rounded">2. $[19; 20)$</span>
        <span class="p-1 bg-slate-800 rounded">3. $[20; 21)$</span>
        <span class="p-1 bg-slate-800 rounded">4. $[21; 22)$</span>
        <span class="p-1 bg-emerald-900/50 text-emerald-300 font-bold rounded border border-emerald-500/50">5. $[22; 23)$</span>
        <span class="p-1 bg-slate-800 rounded">6. $[23; 24)$</span>
        <span class="p-1 bg-slate-800 rounded">7. $[24; 25]$</span>
      </div>

      <p><b>Bước 2: Xác định nhóm chứa giá trị $22,0^\circ\text{C}$:</b></p>
      <p class="text-slate-300">
        • Nhóm 4: $[21; 22)$ chỉ chứa các số $x$ thỏa mãn $21 \le x < 22$ (<b>không chứa 22</b>).<br/>
        • Nhóm 5: $[22; 23)$ chứa các số $x$ thỏa mãn $22 \le x < 23$ (<b>chứa đúng số 22</b>).
      </p>

      <div class="bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold">
        👉 Kết luận: Giá trị $22,0^\circ\text{C}$ thuộc nhóm thứ 5: <b class="text-white text-sm">$[22; 23)$</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO CÁC BẪY THI KHI GHÉP NHÓM SỐ LIỆU",
        "subtitle": "3 NGUY CƠ SAI SÓT KHI ĐẾM THỦ CÔNG",
        "mascotMode": "warning",
        "mascotTip": r"Mẹo chống sót: Vừa đếm vừa gạch chéo số liệu thô và dùng kiểm tra $\sum m_i = n$!",
        "narration": "Trước khi kết thúc Mục 2, Thầy Cú có 3 lưu ý quan trọng: Thứ nhất là lỗi bỏ sót hoặc đếm lặp số liệu khi xử lý mẫu thô. Để tránh sai sót, các em nên gạch nhẹ số liệu đã đếm và ghi tần số bằng phương pháp gạch 5 vạch một cụm. Thứ hai là nhầm lẫn đầu mút như trường hợp số 22 ở ví dụ vừa rồi. Thứ ba là chọn số lượng nhóm quá ít hoặc quá nhiều. Nếu chia quá ít nhóm thì dữ liệu bị dồn cục, mất thông tin; nếu chia quá nhiều nhóm thì bảng cồng kềnh, không phát huy được ưu điểm của việc ghép nhóm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">⚠️</span>
      <h3 class="text-sm font-bold text-amber-300">3 Lưu Ý Đắt Giá Khi Ghép Nhóm Mẫu Số Liệu</h3>
    </div>
    <div class="grid grid-cols-3 gap-2.5 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">1. Sót hoặc trùng lặp số liệu:</span>
        <p class="text-slate-300 mt-1">Đếm thủ công dễ bỏ sót. Bắt buộc kiểm tra tổng tần số $\sum m_i = n$ trước khi làm tiếp.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500">
        <span class="font-bold text-rose-400">2. Nhầm lẫn mút tròn và vuông:</span>
        <p class="text-slate-300 mt-1">Giá trị đúng bằng đầu mút biên $b$ luôn rơi vào nhóm sau $[b; c)$, không thuộc nhóm $[a; b)$.</p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400">3. Chọn số nhóm $k$ bất hợp lý:</span>
        <p class="text-slate-300 mt-1">Nếu $k < 4$: mất tính phân bố; nếu $k > 10$: bảng quá dài. Khoảng tối ưu là $k \in [5; 8]$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "KẾT THÚC MỤC 2 • CHUYỂN SANG MỤC 3: TẦN SỐ TÍCH LŨY",
        "mascotMode": "happy",
        "mascotTip": r"Chuẩn bị sang Mục 3: Học về Tần số tích lũy - công cụ then chốt để xác định Trung vị và Tứ phân vị!",
        "narration": "Chúc mừng các em đã làm chủ kỹ năng ghép nhóm mẫu số liệu ở Mục 2! Chúng ta đã nắm chắc quy trình 4 bước, kỹ thuật chọn độ dài nhóm L tròn trịa và phương pháp phân loại chính xác các số liệu biên. Bây giờ, hãy bước sang Mục 3: Tần số tích lũy của mẫu số liệu ghép nhóm. Đây là một khái niệm cực kỳ quan trọng, là chìa khóa then chốt để các em xác định được nhóm chứa trung vị và tứ phân vị trong Bài 9 sắp tới.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center">
    <div class="inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2">
      <span class="text-2xl">🦉📐</span>
    </div>
    <h3 class="text-lg font-black text-emerald-200 mb-1">Hoàn Thành Mục 2 Xuất Sắc!</h3>
    <p class="text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
      Các em đã thành thạo kỹ năng biến mẫu số liệu thô lộn xộn thành bảng ghép nhóm khoa học.<br/>
      Hãy tiếp tục tiến bước sang Mục 3: <b>Tần số tích lũy</b> 🚀
    </p>
    <div class="mt-3 flex justify-center gap-2">
      <span class="px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40">
        Khám phá Mục 3: Tần số tích lũy ngay 🌟
      </span>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: TẦN SỐ TÍCH LŨY CỦA MẪU SỐ LIỆU GHÉP NHÓM
# ==============================================================================
BAI8_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA TẦN SỐ TÍCH LŨY",
        "subtitle": "BÀI 8 • MỤC 3 • CÔNG CỤ XÁC ĐỊNH PHÂN VỊ THỐNG KÊ",
        "mascotMode": "pointer",
        "mascotTip": r"Tần số tích lũy $cf_i = m_1 + m_2 + ... + m_i$ là số lượng giá trị nhỏ hơn đầu mút phải $a_{i+1}$!",
        "narration": "Chào mừng các em đến với Mục 3: Tần số tích lũy của mẫu số liệu ghép nhóm. Vậy tần số tích lũy là gì? Tần số tích lũy của nhóm thứ i, ký hiệu là c f i, chính là tổng tần số của tất cả các nhóm từ nhóm 1 cho đến nhóm thứ i. Về mặt ý nghĩa thống kê, tần số tích lũy c f i cho ta biết có bao nhiêu số liệu trong mẫu có giá trị nhỏ hơn đầu mút phải a i cộng một của nhóm đó. Nhóm cuối cùng sẽ có tần số tích lũy đúng bằng cỡ mẫu n.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase">Khái niệm cốt lõi</span>
      <h3 class="text-lg font-black text-teal-200">Tần Số Tích Lũy Là Gì?</h3>
    </div>
    <p class="text-xs text-slate-300 leading-relaxed">
      <b>Tần số tích lũy</b> của nhóm thứ $i$, ký hiệu $cf_i$, là tổng các tần số từ nhóm thứ $1$ đến nhóm thứ $i$:
    </p>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-mono text-emerald-300 text-sm my-2">
      $$cf_i = m_1 + m_2 + \dots + m_i = cf_{i-1} + m_i \quad (cf_1 = m_1)$$
    </div>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-indigo-400">
      <h4 class="font-bold text-indigo-300 mb-1">📈 Ý nghĩa thống kê</h4>
      <p class="text-slate-300">$cf_i$ cho biết số lượng phần tử có giá trị <b>nhỏ hơn đầu mút phải $a_{i+1}$</b> của nhóm thứ $i$.</p>
    </div>
    <div class="bg-slate-900/80 p-3 rounded-lg border-l-4 border-emerald-400">
      <h4 class="font-bold text-emerald-300 mb-1">🏁 Giá trị cuối cùng</h4>
      <p class="text-slate-300">Tần số tích lũy của nhóm cuối cùng luôn luôn bằng đúng cỡ mẫu: <b>$cf_k = n$</b>.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÁCH LẬP BẢNG TẦN SỐ TÍCH LŨY CỘNG DỒN",
        "subtitle": "KỸ THUẬT CỘNG CHÉO LIÊN TIẾP NHANH CHÓNG",
        "mascotMode": "explain",
        "mascotTip": r"Quy tắc cộng chéo: $cf_1 = m_1$, sau đó lấy $cf_1 + m_2 = cf_2$, lấy $cf_2 + m_3 = cf_3$!",
        "narration": "Để lập bảng tần số tích lũy một cách nhanh chóng và không bao giờ nhầm lẫn, các em hãy áp dụng quy tắc cộng chéo hình bậc thang: Tần số tích lũy của nhóm đầu tiên chính bằng tần số m 1 của nó. Sau đó, lấy kết quả này cộng chéo với tần số m 2 của nhóm tiếp theo ta được c f 2; lấy c f 2 cộng tiếp với m 3 ta được c f 3; cứ tiếp tục như vậy cho đến nhóm cuối cùng ta phải thu được đúng bằng cỡ mẫu n. Nếu con số cuối cùng khác n thì chắc chắn ta đã cộng nhầm ở một bước nào đó.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
      <h3 class="text-sm font-bold text-cyan-300">Quy Trình Cộng Chéo Lập Bảng Tần Số Tích Lũy</h3>
    </div>
    <div class="overflow-x-auto text-xs my-1">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-cyan-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Nhóm</th>
            <th class="p-2 border border-slate-700">$[a_1; a_2)$</th>
            <th class="p-2 border border-slate-700">$[a_2; a_3)$</th>
            <th class="p-2 border border-slate-700">$[a_3; a_4)$</th>
            <th class="p-2 border border-slate-700">$\dots$</th>
            <th class="p-2 border border-slate-700">$[a_k; a_{k+1}]$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300 divide-y divide-slate-700">
          <tr>
            <td class="p-2 border border-slate-700 font-bold text-slate-400">Tần số ($m_i$)</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">$m_1$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">$m_2$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">$m_3$</td>
            <td class="p-2 border border-slate-700">$\dots$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">$m_k$</td>
          </tr>
          <tr class="bg-slate-900/60 font-mono">
            <td class="p-2 border border-slate-700 font-bold text-amber-400">Tích lũy ($cf_i$)</td>
            <td class="p-2 border border-slate-700 text-cyan-300 font-bold">$m_1$</td>
            <td class="p-2 border border-slate-700 text-cyan-300 font-bold">$m_1 + m_2$</td>
            <td class="p-2 border border-slate-700 text-cyan-300 font-bold">$cf_2 + m_3$</td>
            <td class="p-2 border border-slate-700">$\dots$</td>
            <td class="p-2 border border-slate-700 text-yellow-300 font-black">$\mathbf{n}$</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-400 mt-1">
      💡 Điểm kiểm tra chéo: Số cuối cùng ở hàng tích lũy bắt buộc phải bằng tổng cỡ mẫu $n$.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: LẬP BẢNG TẦN SỐ TÍCH LŨY CƠ BẢN",
        "subtitle": "VÍ DỤ MINH HỌA 1 • NHẬN BIẾT (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Cộng dồn: 5 -> 5+12=17 -> 17+18=35 -> 35+10=45 -> 45+5=50!",
        "narration": "Chúng ta cùng bắt đầu với Ví dụ 1: Cho bảng tần số ghép nhóm về thời gian truy cập mạng xã hội của 50 học sinh gồm 5 nhóm: từ 0 đến 30 phút có 5 em; từ 30 đến 60 phút có 12 em; từ 60 đến 90 phút có 18 em; từ 90 đến 120 phút có 10 em; từ 120 đến 150 phút có 5 em. Hãy lập bảng tần số tích lũy cho mẫu số liệu trên. Các em có 15 giây để tính nhẩm các giá trị tích lũy.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase">Ví dụ 1 (Lập bảng tích lũy)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-indigo-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Thời gian truy cập mạng xã hội (phút/ngày) của 50 học sinh ($n = 50$):
    </p>
    <div class="overflow-x-auto my-2 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-indigo-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Thời gian (phút)</th>
            <th class="p-2 border border-slate-700">$[0; 30)$</th>
            <th class="p-2 border border-slate-700">$[30; 60)$</th>
            <th class="p-2 border border-slate-700">$[60; 90)$</th>
            <th class="p-2 border border-slate-700">$[90; 120)$</th>
            <th class="p-2 border border-slate-700">$[120; 150)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-2 font-bold text-slate-400 border border-slate-700">Tần số ($m_i$)</td>
            <td class="p-2 border border-slate-700">5</td>
            <td class="p-2 border border-slate-700">12</td>
            <td class="p-2 border border-slate-700">18</td>
            <td class="p-2 border border-slate-700">10</td>
            <td class="p-2 border border-slate-700">5</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-indigo-300 font-semibold">
      👉 Yêu cầu: Xác định dãy tần số tích lũy $cf_1, cf_2, cf_3, cf_4, cf_5$.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ TẦN SỐ TÍCH LŨY: 5, 17, 35, 45, 50",
        "mascotMode": "happy",
        "mascotTip": r"Dãy số tích lũy: $cf_1=5, cf_2=17, cf_3=35, cf_4=45, cf_5=50$!",
        "narration": "Hết 15 giây! Lời giải như sau: Áp dụng quy tắc cộng dồn liên tiếp: Nhóm một có c f 1 bằng 5; Nhóm hai có c f 2 bằng 5 cộng 12 bằng 17; Nhóm ba có c f 3 bằng 17 cộng 18 bằng 35; Nhóm bốn có c f 4 bằng 35 cộng 10 bằng 45; Nhóm năm có c f 5 bằng 45 cộng 5 bằng 50. Con số 50 ở nhóm cuối cùng đúng bằng tổng số 50 học sinh điều tra, xác nhận kết quả chính xác.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Bảng Tần Số Tích Lũy Cộng Dồn</h4>
    </div>
    <div class="overflow-x-auto my-1 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-indigo-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Thời gian (phút)</th>
            <th class="p-2 border border-slate-700">$[0; 30)$</th>
            <th class="p-2 border border-slate-700">$[30; 60)$</th>
            <th class="p-2 border border-slate-700">$[60; 90)$</th>
            <th class="p-2 border border-slate-700">$[90; 120)$</th>
            <th class="p-2 border border-slate-700">$[120; 150)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300 divide-y divide-slate-700">
          <tr>
            <td class="p-2 border border-slate-700 font-bold text-slate-400">Tần số ($m_i$)</td>
            <td class="p-2 border border-slate-700">5</td>
            <td class="p-2 border border-slate-700">12</td>
            <td class="p-2 border border-slate-700">18</td>
            <td class="p-2 border border-slate-700">10</td>
            <td class="p-2 border border-slate-700">5</td>
          </tr>
          <tr class="bg-slate-900 font-mono">
            <td class="p-2 border border-slate-700 font-bold text-amber-400">Tích lũy ($cf_i$)</td>
            <td class="p-2 border border-slate-700 text-cyan-300 font-bold">5</td>
            <td class="p-2 border border-slate-700 text-cyan-300 font-bold">17</td>
            <td class="p-2 border border-slate-700 text-cyan-300 font-bold">35</td>
            <td class="p-2 border border-slate-700 text-cyan-300 font-bold">45</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-black">50</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-indigo-950/40 p-2.5 rounded border border-indigo-500/30 text-indigo-200 text-xs font-semibold">
      👉 Các giá trị tích lũy lần lượt là: $\mathbf{5, \; 17, \; 35, \; 45, \; 50}$.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: ĐỌC Ý NGHĨA TẦN SỐ TÍCH LŨY",
        "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"$cf_3 = 35$ nghĩa là có 35 học sinh dùng dưới 90 phút!",
        "narration": "Chúng ta cùng đến với Ví dụ 2: Dựa vào bảng tần số tích lũy vừa lập ở Ví dụ 1, hãy trả lời hai câu hỏi sau: Câu a: Có bao nhiêu học sinh truy cập mạng xã hội dưới 90 phút một ngày? Câu b: Có bao nhiêu học sinh truy cập mạng xã hội từ 60 phút trở lên mỗi ngày? Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase">Ví dụ 2 (Ý nghĩa tích lũy)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-emerald-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Dựa vào bảng tần số tích lũy của 50 học sinh ở Ví dụ 1:
    </p>
    <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 font-mono my-2 space-y-1">
      <p>• Dãy nhóm: $[0; 30), \; [30; 60), \; [60; 90), \; [90; 120), \; [120; 150)$.</p>
      <p>• Dãy tích lũy: $cf_1 = 5, \; cf_2 = 17, \; cf_3 = 35, \; cf_4 = 45, \; cf_5 = 50$.</p>
    </div>
    <p class="text-xs text-emerald-300 font-semibold">
      a) Có bao nhiêu học sinh truy cập mạng xã hội dưới $90$ phút/ngày?<br/>
      b) Có bao nhiêu học sinh truy cập mạng xã hội từ $60$ phút trở lên mỗi ngày?
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: a) 35 HỌC SINH • b) 33 HỌC SINH",
        "mascotMode": "happy",
        "mascotTip": r"Dưới 90 phút là $cf_3 = 35$. Từ 60 phút trở lên là lấy tổng trừ đi dưới 60 phút: $50 - cf_2 = 50 - 17 = 33$!",
        "narration": "Hết 15 giây! Lời giải như sau: Ở câu a: Dưới 90 phút chính là số liệu nhỏ hơn đầu mút phải của nhóm thứ ba từ 60 đến 90. Do đó nó bằng đúng tần số tích lũy c f 3 bằng 35 học sinh. Ở câu b: Từ 60 phút trở lên chính là phần bù của số học sinh sử dụng dưới 60 phút. Dưới 60 phút có c f 2 bằng 17 học sinh. Do đó, số học sinh sử dụng từ 60 phút trở lên là: 50 trừ 17 bằng 33 học sinh. Rất nhanh và không cần phải cộng từng nhóm lẻ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Khai thác giá trị từ hàng tích lũy</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>a) Số học sinh sử dụng dưới $90$ phút/ngày:</b></p>
      <p>Số liệu nhỏ hơn đầu mút phải của nhóm thứ ba $[60; 90)$ chính là $cf_3$:</p>
      <div class="text-emerald-300 font-mono text-sm">
        $$N_{< 90} = cf_3 = \mathbf{35} \text{ (học sinh)}$$
      </div>

      <p><b>b) Số học sinh sử dụng từ $60$ phút trở lên:</b></p>
      <p>Lấy tổng cỡ mẫu trừ đi số học sinh sử dụng dưới $60$ phút ($cf_2$):</p>
      <div class="text-cyan-300 font-mono text-sm">
        $$N_{\ge 60} = n - cf_2 = 50 - 17 = \mathbf{33} \text{ (học sinh)}$$
      </div>

      <div class="bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 font-bold">
        👉 Đáp số: a) <b>35 học sinh</b> | b) <b>33 học sinh</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: XÁC ĐỊNH NHÓM CHỨA VỊ TRÍ PHÂN VỊ",
        "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Tìm nhóm chứa vị trí thứ $k$: Nhóm $i$ đầu tiên có $cf_i \ge k$!",
        "narration": "Chúng ta tiếp tục với Ví dụ 3: Cho bảng tần số tích lũy về chiều cao của 100 học sinh với 5 nhóm: từ 150 đến 155 có c f bằng 15; từ 155 đến 160 có c f bằng 40; từ 160 đến 165 có c f bằng 75; từ 165 đến 170 có c f bằng 90; từ 170 đến 175 có c f bằng 100. Hãy xác định: Học sinh ở vị trí thứ 25 và học sinh ở vị trí thứ 50 theo thứ tự chiều cao tăng dần sẽ thuộc vào nhóm nào? Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-amber-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase">Ví dụ 3 (Xác định nhóm chứa vị trí)</span>
      <div class="countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-amber-400 countdown-num">15s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Bảng tích lũy chiều cao ($cm$) của 100 học sinh ($n = 100$):
    </p>
    <div class="overflow-x-auto my-2 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-amber-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Chiều cao ($cm$)</th>
            <th class="p-2 border border-slate-700">$[150; 155)$</th>
            <th class="p-2 border border-slate-700">$[155; 160)$</th>
            <th class="p-2 border border-slate-700">$[160; 165)$</th>
            <th class="p-2 border border-slate-700">$[165; 170)$</th>
            <th class="p-2 border border-slate-700">$[170; 175)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-2 font-bold text-slate-400 border border-slate-700">Tích lũy ($cf_i$)</td>
            <td class="p-2 border border-slate-700">15</td>
            <td class="p-2 border border-slate-700">40</td>
            <td class="p-2 border border-slate-700">75</td>
            <td class="p-2 border border-slate-700">90</td>
            <td class="p-2 border border-slate-700">100</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-amber-300 font-semibold">
      👉 Yêu cầu: Xác định nhóm chứa học sinh thứ 25 và nhóm chứa học sinh thứ 50.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: THỨ 25 THUỘC [155; 160) • THỨ 50 THUỘC [160; 165)",
        "mascotMode": "happy",
        "mascotTip": r"$15 < 25 \le 40 \implies$ Vị trí 25 thuộc nhóm 2; $40 < 50 \le 75 \implies$ Vị trí 50 thuộc nhóm 3!",
        "narration": "Hết 15 giây! Lời giải như sau: Ta so sánh vị trí cần tìm với các giá trị tích lũy c f i: Với vị trí thứ 25: Nhóm một chỉ chứa từ học sinh thứ 1 đến thứ 15 vì c f 1 bằng 15. Nhóm hai chứa từ học sinh thứ 16 đến thứ 40 vì c f 2 bằng 40. Do 25 nằm giữa 15 và 40 nên học sinh thứ 25 thuộc nhóm hai, tức là nhóm từ 155 đến 160 centimet. Với vị trí thứ 50: Nhóm hai kết thúc ở học sinh thứ 40, còn nhóm ba kết thúc ở học sinh thứ 75. Do 50 nằm giữa 40 và 75 nên học sinh thứ 50 thuộc nhóm ba, tức là nhóm từ 160 đến 165 centimet. Đây chính là bước quan trọng nhất để tìm Trung vị và Tứ phân vị sau này.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Quy tắc tìm nhóm chứa vị trí thứ $k$</h4>
    </div>
    <div class="bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2">
      <p><b>1. Xác định nhóm chứa học sinh thứ 25:</b></p>
      <p class="text-slate-300">
        Ta có: $cf_1 = 15 < \mathbf{25} \le cf_2 = 40$.<br/>
        👉 Học sinh thứ 25 thuộc nhóm thứ hai: <b class="text-amber-300">$[155; 160)$</b>.
      </p>

      <p><b>2. Xác định nhóm chứa học sinh thứ 50:</b></p>
      <p class="text-slate-300">
        Ta có: $cf_2 = 40 < \mathbf{50} \le cf_3 = 75$.<br/>
        👉 Học sinh thứ 50 thuộc nhóm thứ ba: <b class="text-emerald-300">$[160; 165)$</b>.
      </p>

      <div class="bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 font-bold">
        👉 Kết luận: Học sinh thứ 25 thuộc nhóm <b>$[155; 160)$</b> | Học sinh thứ 50 thuộc nhóm <b>$[160; 165)$</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: KHÔI PHỤC BẢNG TẦN SỐ GỐC TỪ TÍCH LŨY",
        "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
        "mascotMode": "think",
        "mascotTip": r"Phép toán ngược: $m_i = cf_i - cf_{i-1}$!",
        "narration": "Chúng ta đến với bài toán tư duy ngược ở Ví dụ 4: Người ta cho trước một bảng tần số tích lũy về số giờ làm thêm trong tuần của một nhóm nhân viên: nhóm từ 0 đến 5 giờ có c f bằng 8; nhóm từ 5 đến 10 giờ có c f bằng 26; nhóm từ 10 đến 15 giờ có c f bằng 54; nhóm từ 15 đến 20 giờ có c f bằng 72; nhóm từ 20 đến 25 giờ có c f bằng 80. Hãy khôi phục lại bảng tần số gốc m i của từng nhóm và tìm nhóm có số nhân viên làm thêm nhiều nhất. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-rose-500/40">
    <div class="flex items-center justify-between border-b border-slate-700 pb-2 mb-3">
      <span class="px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase">Ví dụ 4 (Tư duy ngược khôi phục bảng)</span>
      <div class="countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30">
        <span class="text-xs text-slate-400">Thời gian suy nghĩ:</span>
        <span class="text-sm font-black text-rose-400 countdown-num">30s</span>
      </div>
    </div>
    <p class="text-sm text-slate-200 font-semibold mb-2">
      Cho bảng tần số tích lũy số giờ làm thêm ($h$):
    </p>
    <div class="overflow-x-auto my-2 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-rose-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Số giờ làm thêm</th>
            <th class="p-2 border border-slate-700">$[0; 5)$</th>
            <th class="p-2 border border-slate-700">$[5; 10)$</th>
            <th class="p-2 border border-slate-700">$[10; 15)$</th>
            <th class="p-2 border border-slate-700">$[15; 20)$</th>
            <th class="p-2 border border-slate-700">$[20; 25)$</th>
          </tr>
        </thead>
        <tbody class="text-slate-300">
          <tr>
            <td class="p-2 font-bold text-slate-400 border border-slate-700">Tích lũy ($cf_i$)</td>
            <td class="p-2 border border-slate-700">8</td>
            <td class="p-2 border border-slate-700">26</td>
            <td class="p-2 border border-slate-700">54</td>
            <td class="p-2 border border-slate-700">72</td>
            <td class="p-2 border border-slate-700">80</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-rose-300 font-bold">
      👉 Yêu cầu: Khôi phục lại tần số $m_i$ của từng nhóm và chỉ ra nhóm có tần số cao nhất.
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ TẦN SỐ: 8, 18, 28, 18, 8 • NHÓM ĐÔNG NHẤT LÀ [10; 15)",
        "mascotMode": "happy",
        "mascotTip": r"$m_1=8, m_2=26-8=18, m_3=54-26=28, m_4=72-54=18, m_5=80-72=8$!",
        "narration": "Hết 30 giây! Lời giải như sau: Để khôi phục tần số ban đầu từ tần số tích lũy, ta thực hiện phép trừ lùi liên tiếp: m i bằng c f i trừ c f i trừ một. Cụ thể: Tần số nhóm một là m 1 bằng c f 1 bằng 8; Nhóm hai có m 2 bằng c f 2 trừ c f 1, bằng 26 trừ 8 bằng 18; Nhóm ba có m 3 bằng c f 3 trừ c f 2, bằng 54 trừ 26 bằng 28; Nhóm bốn có m 4 bằng c f 4 trừ c f 3, bằng 72 trừ 54 bằng 18; Nhóm năm có m 5 bằng c f 5 trừ c f 4, bằng 80 trừ 72 bằng 8. So sánh các tần số 8, 18, 28, 18, 8 thì tần số lớn nhất là 28, thuộc nhóm từ 10 đến 15 giờ. Vậy nhóm nhân viên làm thêm từ 10 đến 15 giờ là đông nhất.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded">Lời giải chi tiết</span>
      <h4 class="text-sm font-bold text-slate-200">Áp dụng công thức hiệu: $m_i = cf_i - cf_{i-1}$</h4>
    </div>
    <div class="overflow-x-auto my-1 text-xs">
      <table class="w-full text-center border-collapse">
        <thead>
          <tr class="bg-slate-900 text-rose-300 border border-slate-700">
            <th class="p-2 border border-slate-700">Nhóm</th>
            <th class="p-2 border border-slate-700">Tích lũy ($cf_i$)</th>
            <th class="p-2 border border-slate-700">Phép tính khôi phục</th>
            <th class="p-2 border border-slate-700">Tần số ($m_i$)</th>
          </tr>
        </thead>
        <tbody class="text-slate-300 divide-y divide-slate-700">
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[0; 5)$</td>
            <td class="p-2 border border-slate-700">8</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$cf_1$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">8</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[5; 10)$</td>
            <td class="p-2 border border-slate-700">26</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$26 - 8$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">18</td>
          </tr>
          <tr class="bg-emerald-950/20">
            <td class="p-2 border border-slate-700 font-bold text-yellow-300">$[10; 15)$</td>
            <td class="p-2 border border-slate-700">54</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$54 - 26$</td>
            <td class="p-2 border border-slate-700 text-yellow-300 font-black text-sm">28</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[15; 20)$</td>
            <td class="p-2 border border-slate-700">72</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$72 - 54$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">18</td>
          </tr>
          <tr>
            <td class="p-2 border border-slate-700 font-bold">$[20; 25)$</td>
            <td class="p-2 border border-slate-700">80</td>
            <td class="p-2 border border-slate-700 font-mono text-slate-400">$80 - 72$</td>
            <td class="p-2 border border-slate-700 text-emerald-400 font-bold">8</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 text-xs font-semibold">
      👉 Nhóm có tần số cao nhất là <b>$[10; 15)$</b> với <b>$28$ nhân viên</b>.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO CÁC BẪY THI VỀ TẦN SỐ TÍCH LŨY",
        "subtitle": "TRÁNH NHẦM LẪN GIỮA TẦN SỐ VÀ TẦN SỐ TÍCH LŨY",
        "mascotMode": "warning",
        "mascotTip": r"Cảnh báo: Không được nhầm lẫn $m_i$ và $cf_i$ khi thay vào công thức tính Trung vị!",
        "narration": "Trước khi kết thúc Bài 8, Thầy Cú có một cảnh báo tối quan trọng chuẩn bị cho Bài 9: Rất nhiều học sinh khi tính trung vị và tứ phân vị đã nhầm lẫn tai hại giữa tần số m i và tần số tích lũy c f i. Hãy nhớ: c f i là tổng dồn tăng dần từ đầu đến cuối, còn m i là số lượng của riêng nhóm đó. Khi dùng công thức ở Bài 9, đại lượng trừ ở tử số là c f của nhóm phía trước, còn chia ở mẫu số là m của chính nhóm đó. Hãy phân biệt rạch ròi hai đại lượng này để không bao giờ bị mất điểm oan uổng.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">⚠️</span>
      <h3 class="text-sm font-bold text-amber-300">Phân Biệt Rạch Ròi $m_i$ và $cf_i$</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded border-l-4 border-emerald-500">
        <span class="font-bold text-emerald-400 text-sm">Tần số nhóm $m_i$:</span>
        <p class="text-slate-300 mt-1">
          • Là số lượng phần tử thuộc <b>riêng nhóm thứ $i$</b>.<br/>
          • Có thể tăng, giảm tùy theo dữ liệu.<br/>
          • Được dùng ở mẫu số công thức Trung vị: $\frac{\dots}{m_i} \cdot h$.
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded border-l-4 border-amber-500">
        <span class="font-bold text-amber-400 text-sm">Tần số tích lũy $cf_i$:</span>
        <p class="text-slate-300 mt-1">
          • Là tổng dồn: $cf_i = cf_{i-1} + m_i$.<br/>
          • <b>Luôn luôn tăng</b> (hoặc không giảm).<br/>
          • $cf_{i-1}$ được dùng ở tử số công thức Trung vị: $\frac{\frac{n}{2} - cf_{i-1}}{m_i}$.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT TOÀN BỘ BÀI 8 & CHUYỂN SANG BÀI 9",
        "subtitle": "HOÀN THÀNH BÀI 8 • SẴN SÀNG CHINH PHỤC CÁC SỐ ĐẶC TRƯNG",
        "mascotMode": "happy",
        "mascotTip": r"Chúc mừng hoàn thành Bài 8! Bước tiếp theo: Chinh phục Trung bình, Trung vị, Tứ phân vị và Mốt ở Bài 9!",
        "narration": "Chúc mừng tất cả các em đã hoàn thành xuất sắc toàn bộ Bài 8: Mẫu số liệu ghép nhóm! Qua 3 mục bài giảng vừa rồi, các em đã làm chủ cấu trúc của một nhóm nửa khoảng, nắm vững ý nghĩa độ dài nhóm và giá trị đại diện, thành thạo quy trình 4 bước ghép nhóm từ số liệu thô và sở hữu công cụ tần số tích lũy cực kỳ lợi hại. Giờ đây, các em đã có đầy đủ vũ khí để bước sang Bài 9: Các số đặc trưng đo xu thế trung tâm, nơi chúng ta cùng chinh phục các công thức tính số trung bình, trung vị, tứ phân vị và mốt.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/60 p-4 rounded-xl border border-emerald-500/40 text-center">
    <div class="inline-flex p-3 bg-emerald-500/20 rounded-full text-emerald-300 mb-2">
      <span class="text-3xl">🎓🦉📊</span>
    </div>
    <h3 class="text-xl font-black text-emerald-200 mb-1">HOÀN THÀNH TOÀN DIỆN BÀI 8!</h3>
    <p class="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
      Các em đã nắm vững toàn bộ kiến thức nền tảng về Mẫu số liệu ghép nhóm.<br/>
      Hãy tiếp tục hành trình bứt phá tại <b>Bài 9: Các số đặc trưng đo xu thế trung tâm</b>!
    </p>
    <div class="mt-3 flex justify-center gap-2">
      <span class="px-3.5 py-1 bg-emerald-600/40 text-emerald-200 rounded-full text-xs font-bold border border-emerald-400/50 shadow-lg">
        Sẵn sàng bước vào Bài 9 🚀
      </span>
    </div>
  </div>
</div>
"""
    }
]

print("ch3_bai8_data.py initialized: BAI8_MUC1_SCENES, BAI8_MUC2_SCENES, BAI8_MUC3_SCENES ready.")
