# -*- coding: utf-8 -*-
"""
Generator script for ch3_bai9_data.py
Creates BAI9_MUC1_SCENES, BAI9_MUC2_SCENES, BAI9_MUC3_SCENES with 12 scenes each.
All HTML strings use raw string syntax r\"\"\" to ensure KaTeX compliance.
"""

import sys

content = r'''# -*- coding: utf-8 -*-
"""
CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
BÀI 9: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: SỐ TRUNG BÌNH CỦA MẪU SỐ LIỆU GHÉP NHÓM
# ==============================================================================
BAI9_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. KHÁI NIỆM & Ý NGHĨA SỐ TRUNG BÌNH",
        "subtitle": "BÀI 9 • MỤC 1 • CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM",
        "mascotMode": "pointer",
        "mascotTip": r"Số trung bình của mẫu số liệu ghép nhóm là giá trị xấp xỉ cho số trung bình của mẫu số liệu gốc!",
        "narration": "Chào mừng các em đến với Bài 9: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm. Trong thống kê, số trung bình là đại lượng phổ biến nhất dùng để đại diện cho mức độ trung bình của toàn bộ tập dữ liệu. Khi số liệu đã được gom vào các nhóm nửa khoảng, chúng ta không còn giá trị chính xác của từng cá thể nữa. Vì vậy, ta quy ước lấy giá trị đại diện của từng nhóm để tính toán số trung bình xấp xỉ cho toàn mẫu số liệu.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Khái niệm cốt lõi</span>
      <h3 class="text-xl font-black text-emerald-200">Số Trung Bình Mẫu Ghép Nhóm $\overline{x}$</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      Số trung bình của mẫu số liệu ghép nhóm kí hiệu là $\overline{x}$, là giá trị đại diện cho xu thế trung tâm của tập dữ liệu, tính bằng trung bình cộng có trọng số của các giá trị đại diện $c_i$ với trọng số là tần số tương ứng $m_i$.
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">🎯 Ý nghĩa thống kê</h4>
      <p class="text-slate-300 leading-relaxed">
        • Cho biết mức độ bình quân của mẫu nghiên cứu (thu nhập, điểm số, năng suất).<br/>
        • Dùng làm thước đo chuẩn để so sánh giữa hai hay nhiều tập dữ liệu cùng loại.<br/>
        • Là giá trị ước lượng điểm không chệch cho kì vọng của biến ngẫu nhiên tổng thể.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">⚡ Lưu ý bản chất</h4>
      <p class="text-slate-300 leading-relaxed">
        • $\overline{x}$ của mẫu ghép nhóm là một giá trị <b>xấp xỉ</b> cho trung bình mẫu gốc.<br/>
        • Phụ thuộc vào cách phân chia độ dài nhóm và số nhóm.<br/>
        • Nhạy cảm với các giá trị bất thường (outliers) quá lớn hoặc quá nhỏ.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÔNG THỨC & 3 BƯỚC TÍNH SỐ TRUNG BÌNH",
        "subtitle": "BÀI 9 • MỤC 1 • CÔNG THỨC TOÁN HỌC CHUẨN SGK",
        "mascotMode": "explaining",
        "mascotTip": r"Nhớ công thức: $\overline{x} = \frac{1}{n}\sum_{i=1}^k m_i c_i$ với $c_i = \frac{a_i + a_{i+1}}{2}$!",
        "narration": "Để tính số trung bình của mẫu số liệu ghép nhóm gồm k nhóm với cỡ mẫu n, chúng ta thực hiện theo ba bước chuẩn mực. Bước 1: Xác định giá trị đại diện c_i của từng nhóm bằng trung bình cộng hai đầu mút a_i và a_{i+1}. Bước 2: Nhân từng giá trị đại diện với tần số tương ứng m_i để được tích m_i nhân c_i, rồi cộng tất cả các tích lại. Bước 3: Lấy tổng tích vừa tính chia cho cỡ mẫu n.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-4 rounded-xl border border-cyan-500/40 shadow-lg text-center">
    <div class="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1">Công thức toán học chính tắc</div>
    <div class="text-2xl font-black text-cyan-200 py-1 font-mono">
      $$\overline{x} = \frac{m_1 c_1 + m_2 c_2 + \dots + m_k c_k}{n} = \frac{1}{n} \sum_{i=1}^k m_i c_i$$
    </div>
    <div class="text-xs text-slate-400 mt-1">
      Trong đó: $c_i = \frac{a_i + a_{i+1}}{2}$ là giá trị đại diện nhóm $[a_i; a_{i+1})$; $m_i$ là tần số nhóm $i$; $n = \sum_{i=1}^k m_i$ là cỡ mẫu.
    </div>
  </div>

  <div class="grid grid-cols-3 gap-2.5 text-xs">
    <div class="bg-slate-800/80 p-3 rounded-lg border-t-2 border-emerald-400">
      <div class="font-bold text-emerald-300 mb-1">Bước 1: Tính đại diện $c_i$</div>
      <p class="text-slate-300 leading-relaxed">
        Lấy trung bình cộng hai đầu mút của từng nhóm:<br/>
        $c_i = \frac{a_i + a_{i+1}}{2}$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3 rounded-lg border-t-2 border-cyan-400">
      <div class="font-bold text-cyan-300 mb-1">Bước 2: Tính tổng tích $m_i c_i$</div>
      <p class="text-slate-300 leading-relaxed">
        Nhân từng tần số với giá trị đại diện:<br/>
        $S = \sum_{i=1}^k m_i c_i$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3 rounded-lg border-t-2 border-teal-400">
      <div class="font-bold text-teal-300 mb-1">Bước 3: Chia cho cỡ mẫu $n$</div>
      <p class="text-slate-300 leading-relaxed">
        Lấy tổng $S$ chia cho $n$:<br/>
        $\overline{x} = \frac{S}{n}$ (làm tròn số theo yêu cầu).
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: THỜI GIAN SỬ DỤNG MÁY TÍNH HỌC TẬP",
        "subtitle": "BÀI 9 • MỤC 1 • LUYỆN TẬP PHẢN XẠ CÔNG THỨC CƠ BẢN",
        "mascotMode": "thinking",
        "mascotTip": r"Tìm nhanh các giá trị đại diện $c_i$: 1; 3; 5; 7; 9 rồi bấm máy tính tính tổng tích nhé!",
        "narration": "Bây giờ, thầy và các em cùng thực chiến Ví dụ 1. Bảng số liệu thống kê thời gian học bài trên máy tính mỗi ngày của 40 học sinh lớp 11A gồm 5 nhóm: từ 0 đến 2 giờ có 6 học sinh, từ 2 đến 4 giờ có 14 học sinh, từ 4 đến 6 giờ có 12 học sinh, từ 6 đến 8 giờ có 5 học sinh, và từ 8 đến 10 giờ có 3 học sinh. Hãy tính thời gian sử dụng máy tính trung bình mỗi ngày của một học sinh. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết - Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Khảo sát thời gian sử dụng máy tính học tập mỗi ngày (đơn vị: giờ) của <b>$n = 40$</b> học sinh lớp 11A thu được bảng tần số ghép nhóm sau:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Thời gian (giờ)</th>
            <th class="p-1.5 border border-slate-600">$[0; 2)$</th>
            <th class="p-1.5 border border-slate-600">$[2; 4)$</th>
            <th class="p-1.5 border border-slate-600">$[4; 6)$</th>
            <th class="p-1.5 border border-slate-600">$[6; 8)$</th>
            <th class="p-1.5 border border-slate-600">$[8; 10)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-emerald-300">Số học sinh ($m_i$)</td>
            <td class="p-1.5 border border-slate-600">6</td>
            <td class="p-1.5 border border-slate-600">14</td>
            <td class="p-1.5 border border-slate-600">12</td>
            <td class="p-1.5 border border-slate-600">5</td>
            <td class="p-1.5 border border-slate-600">3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính thời gian sử dụng máy tính trung bình $\overline{x}$ của một học sinh trong một ngày.
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: TÍNH $\\overline{x}$ CHI TIẾT",
        "subtitle": "BÀI 9 • MỤC 1 • TRÌNH BÀY BẢNG ĐẠI DIỆN VÀ TÍNH TOÁN",
        "mascotMode": "celebrating",
        "mascotTip": r"Tổng tích bằng 170, chia cho 40 ra kết quả đẹp 4,25 giờ!",
        "narration": "Hết thời gian. Chúng ta cùng xem lời giải chi tiết. Đầu tiên, ta lập hàng giá trị đại diện c_i. Nhóm 0 đến 2 có tâm là 1; nhóm 2 đến 4 có tâm là 3; nhóm 4 đến 6 có tâm là 5; nhóm 6 đến 8 có tâm là 7; và nhóm 8 đến 10 có tâm là 9. Tiếp theo, nhân m_i với c_i: 6 nhân 1 bằng 6; 14 nhân 3 bằng 42; 12 nhân 5 bằng 60; 5 nhân 7 bằng 35; 3 nhân 9 bằng 27. Cộng lại ta được tổng tích bằng 170. Cuối cùng, lấy 170 chia cho 40, ta được số trung bình bằng 4,25 giờ mỗi ngày.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Bảng tính toán giá trị đại diện và tích số</div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1 border border-slate-600">Nhóm</th>
            <th class="p-1 border border-slate-600">$[0; 2)$</th>
            <th class="p-1 border border-slate-600">$[2; 4)$</th>
            <th class="p-1 border border-slate-600">$[4; 6)$</th>
            <th class="p-1 border border-slate-600">$[6; 8)$</th>
            <th class="p-1 border border-slate-600">$[8; 10)$</th>
            <th class="p-1 border border-slate-600 bg-emerald-950/60 text-emerald-300 font-bold">Tổng</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-cyan-300">Đại diện $c_i$</td>
            <td class="p-1 border border-slate-600 font-mono">1</td>
            <td class="p-1 border border-slate-600 font-mono">3</td>
            <td class="p-1 border border-slate-600 font-mono">5</td>
            <td class="p-1 border border-slate-600 font-mono">7</td>
            <td class="p-1 border border-slate-600 font-mono">9</td>
            <td class="p-1 border border-slate-600 text-slate-400">—</td>
          </tr>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-emerald-300">Tần số $m_i$</td>
            <td class="p-1 border border-slate-600 font-mono">6</td>
            <td class="p-1 border border-slate-600 font-mono">14</td>
            <td class="p-1 border border-slate-600 font-mono">12</td>
            <td class="p-1 border border-slate-600 font-mono">5</td>
            <td class="p-1 border border-slate-600 font-mono">3</td>
            <td class="p-1 border border-slate-600 font-mono font-bold text-emerald-300">$n = 40$</td>
          </tr>
          <tr class="bg-slate-900 text-amber-300">
            <td class="p-1 border border-slate-600 font-semibold text-amber-300">Tích $m_i c_i$</td>
            <td class="p-1 border border-slate-600 font-mono">6</td>
            <td class="p-1 border border-slate-600 font-mono">42</td>
            <td class="p-1 border border-slate-600 font-mono">60</td>
            <td class="p-1 border border-slate-600 font-mono">35</td>
            <td class="p-1 border border-slate-600 font-mono">27</td>
            <td class="p-1 border border-slate-600 font-mono font-bold text-amber-200">170</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-3 bg-slate-900/80 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-300 mb-1">Áp dụng công thức:</div>
      <div class="text-sm font-mono text-cyan-200 text-center font-bold">
        $$\overline{x} = \frac{\sum m_i c_i}{n} = \frac{6 + 42 + 60 + 35 + 27}{40} = \frac{170}{40} = 4,25\text{ (giờ)}$$
      </div>
      <p class="text-slate-300 text-center mt-1">
        <b>Kết luận:</b> Thời gian học bài trên máy tính trung bình của mỗi học sinh lớp 11A là <b>4,25 giờ</b>/ngày.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. Ý NGHĨA & ĐẶC ĐIỂM CỦA SỐ TRUNG BÌNH",
        "subtitle": "BÀI 9 • MỤC 1 • PHÂN TÍCH ƯU - NHƯỢC ĐIỂM SÂU SẮC",
        "mascotMode": "explaining",
        "mascotTip": r"Số trung bình tận dụng toàn bộ số liệu nhưng rất dễ bị 'kéo lệch' bởi các giá trị ngoại lai!",
        "narration": "Các em cần nắm vững bản chất toán học của số trung bình. Ưu điểm lớn nhất của số trung bình là nó sử dụng thông tin của toàn bộ 100% mẫu số liệu, có tính đại số cao và dễ kết hợp vào các mô hình xác suất thống kê tiếp theo. Tuy nhiên, nhược điểm chí mạng của số trung bình là nó rất nhạy cảm với các giá trị dị biệt hay còn gọi là ngoại lai. Chẳng hạn trong một công ty có thu nhập bình quân rất cao do lương ban giám đốc lên tới hàng trăm triệu, trong khi lương đa số nhân viên chỉ khoảng 8 đến 10 triệu đồng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-emerald-400 font-bold text-sm">✅ Ưu điểm vượt trội</span>
      </div>
      <ul class="space-y-1.5 text-slate-300 leading-relaxed">
        <li>• <b>Toàn diện:</b> Tận dụng thông tin của từng cá thể và tần số trong mẫu.</li>
        <li>• <b>Đại số:</b> Có công thức giải tích rõ ràng, dễ dàng biến đổi trung bình gia quyền.</li>
        <li>• <b>Ứng dụng rộng rãi:</b> Tính điểm trung bình môn, doanh thu trung bình, năng suất bình quân.</li>
      </ul>
    </div>

    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-rose-400 font-bold text-sm">⚠️ Hạn chế cần tránh bẫy</span>
      </div>
      <ul class="space-y-1.5 text-slate-300 leading-relaxed">
        <li>• <b>Bị méo mó do ngoại lai:</b> Chỉ cần 1 vài giá trị quá lớn hoặc quá bé sẽ kéo lệch hẳn $\overline{x}$.</li>
        <li>• <b>Không phản ánh độ phân tán:</b> Hai tập dữ liệu có cùng $\overline{x}$ nhưng có thể một bên rất đồng đều, một bên rất chênh lệch.</li>
        <li>• <b>Khi dữ liệu bất đối xứng nặng:</b> Nên ưu tiên dùng <b>Trung vị</b> hoặc <b>Mốt</b>.</li>
      </ul>
    </div>
  </div>

  <div class="bg-indigo-950/40 p-3 rounded-lg border border-indigo-500/30 text-xs text-indigo-200">
    💡 <b>Ghi nhớ sư phạm:</b> Khi mẫu số liệu có sự chênh lệch đột biến giữa các nhóm biên (ví dụ: nhóm cuối có khoảng lương từ 100 triệu đến 500 triệu), số trung bình sẽ không còn đại diện tốt cho số đông người lao động!
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: ĐIỂM THI THỬ MÔN TOÁN LỚP 11A",
        "subtitle": "BÀI 9 • MỤC 1 • MẪU SỐ LIỆU GHÉP 6 NHÓM CỠ MẪU 50",
        "mascotMode": "thinking",
        "mascotTip": r"Lưu ý nhóm cuối cùng $[9; 10]$ lấy cả đầu mút phải, giá trị đại diện là (9 + 10)/2 = 9,5!",
        "narration": "Tiếp theo là Ví dụ 2. Thống kê kết quả thi thử tốt nghiệp THPT môn Toán của 50 học sinh lớp 11A được chia làm 6 nhóm: [4; 5) có 4 học sinh; [5; 6) có 10 học sinh; [6; 7) có 16 học sinh; [7; 8) có 12 học sinh; [8; 9) có 6 học sinh; và [9; 10] có 2 học sinh. Hãy tính điểm thi thử trung bình của học sinh lớp 11A. Các em có 15 giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Điểm thi thử môn Toán của <b>$n = 50$</b> học sinh được thống kê như sau:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1 border border-slate-600">Khoảng điểm</th>
            <th class="p-1 border border-slate-600">$[4; 5)$</th>
            <th class="p-1 border border-slate-600">$[5; 6)$</th>
            <th class="p-1 border border-slate-600">$[6; 7)$</th>
            <th class="p-1 border border-slate-600">$[7; 8)$</th>
            <th class="p-1 border border-slate-600">$[8; 9)$</th>
            <th class="p-1 border border-slate-600">$[9; 10]$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-cyan-300">Số học sinh ($m_i$)</td>
            <td class="p-1 border border-slate-600">4</td>
            <td class="p-1 border border-slate-600">10</td>
            <td class="p-1 border border-slate-600">16</td>
            <td class="p-1 border border-slate-600">12</td>
            <td class="p-1 border border-slate-600">6</td>
            <td class="p-1 border border-slate-600">2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-cyan-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính điểm thi thử môn Toán trung bình $\overline{x}$ của lớp 11A.
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-cyan-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐIỂM TRUNG BÌNH LỚP 11A",
        "subtitle": "BÀI 9 • MỤC 1 • TÍNH TOÁN CHÍNH XÁC ZERO ERROR",
        "mascotMode": "celebrating",
        "mascotTip": r"Tổng tích bằng 337, chia 50 ra chính xác 6,74 điểm!",
        "narration": "Đã hết thời gian. Ta lập bảng giá trị đại diện: nhóm 4 đến 5 có đại diện 4,5; nhóm 5 đến 6 là 5,5; nhóm 6 đến 7 là 6,5; nhóm 7 đến 8 là 7,5; nhóm 8 đến 9 là 8,5; và nhóm 9 đến 10 là 9,5. Nhân với tần số: 4 nhân 4,5 bằng 18; 10 nhân 5,5 bằng 55; 16 nhân 6,5 bằng 104; 12 nhân 7,5 bằng 90; 6 nhân 8,5 bằng 51; và 2 nhân 9,5 bằng 19. Tổng các tích là 18 cộng 55 cộng 104 cộng 90 cộng 51 cộng 19 bằng 337. Lấy 337 chia cho cỡ mẫu 50, ta được điểm trung bình bằng 6,74.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Bảng tổng hợp tích số chi tiết</div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1 border border-slate-600">Đại diện $c_i$</th>
            <th class="p-1 border border-slate-600">4,5</th>
            <th class="p-1 border border-slate-600">5,5</th>
            <th class="p-1 border border-slate-600">6,5</th>
            <th class="p-1 border border-slate-600">7,5</th>
            <th class="p-1 border border-slate-600">8,5</th>
            <th class="p-1 border border-slate-600">9,5</th>
            <th class="p-1 border border-slate-600 bg-cyan-950 text-cyan-300 font-bold">Tổng</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-emerald-300">Tần số $m_i$</td>
            <td class="p-1 border border-slate-600 font-mono">4</td>
            <td class="p-1 border border-slate-600 font-mono">10</td>
            <td class="p-1 border border-slate-600 font-mono">16</td>
            <td class="p-1 border border-slate-600 font-mono">12</td>
            <td class="p-1 border border-slate-600 font-mono">6</td>
            <td class="p-1 border border-slate-600 font-mono">2</td>
            <td class="p-1 border border-slate-600 font-mono font-bold text-emerald-300">50</td>
          </tr>
          <tr class="bg-slate-900 text-amber-300">
            <td class="p-1 border border-slate-600 font-semibold text-amber-300">Tích $m_i c_i$</td>
            <td class="p-1 border border-slate-600 font-mono">18</td>
            <td class="p-1 border border-slate-600 font-mono">55</td>
            <td class="p-1 border border-slate-600 font-mono">104</td>
            <td class="p-1 border border-slate-600 font-mono">90</td>
            <td class="p-1 border border-slate-600 font-mono">51</td>
            <td class="p-1 border border-slate-600 font-mono">19</td>
            <td class="p-1 border border-slate-600 font-mono font-bold text-amber-200">337</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-3 bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30 text-xs">
      <div class="font-bold text-cyan-300 mb-1">Kết quả tính toán:</div>
      <div class="text-sm font-mono text-emerald-300 text-center font-bold">
        $$\overline{x} = \frac{337}{50} = 6,74\text{ (điểm)}$$
      </div>
      <p class="text-slate-300 text-center mt-1">
        <b>Đánh giá:</b> Điểm trung bình môn Toán của lớp 11A đạt <b>6,74 điểm</b>, thuộc mức học lực Khá theo chuẩn đánh giá.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. KỸ NĂNG THỰC CHIẾN: SO SÁNH HAI MẪU DỮ LIỆU",
        "subtitle": "BÀI 9 • MỤC 1 • ỨNG DỤNG THỐNG KÊ ĐÁNH GIÁ CHẤT LƯỢNG",
        "mascotMode": "explaining",
        "mascotTip": r"Khi so sánh hai tập dữ liệu, ngoài số trung bình ta còn cần quan sát phân bố tần số nữa!",
        "narration": "Trong thực tế quản lý doanh nghiệp, giáo dục và y tế, ta thường xuyên phải so sánh hai mẫu số liệu để đưa ra quyết định tối ưu. Chẳng hạn, so sánh năng suất lao động giữa hai phân xưởng A và B, hoặc so sánh hiệu quả của hai phương pháp giảng dạy khác nhau. Để so sánh, ta tính số trung bình x_A và x_B của từng mẫu. Mẫu nào có số trung bình lớn hơn thì mặt bằng chung của mẫu đó đạt kết quả tốt hơn.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded uppercase">Kỹ năng phân tích</span>
      <h3 class="text-lg font-bold text-indigo-200">Quy Trình So Sánh Hai Mẫu Số Liệu Ghép Nhóm</h3>
    </div>
    <div class="grid grid-cols-3 gap-2.5 text-xs mt-3">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-indigo-400">
        <b class="text-indigo-300">Bước 1: Đồng bộ nhóm</b>
        <p class="text-slate-300 mt-1">Đảm bảo hai mẫu chia cùng các nhóm $[a_i; a_{i+1})$ hoặc tìm đúng các $c_i$ tương ứng.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-purple-400">
        <b class="text-purple-300">Bước 2: Tính $\overline{x}_1, \overline{x}_2$</b>
        <p class="text-slate-300 mt-1">Tính riêng số trung bình của từng nhóm theo công thức chuẩn.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-pink-400">
        <b class="text-pink-300">Bước 3: Đưa kết luận</b>
        <p class="text-slate-300 mt-1">So sánh độ lớn và kết luận mẫu nào có mặt bằng chung vượt trội hơn.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: SO SÁNH NĂNG SUẤT HAI PHÂN XƯỞNG",
        "subtitle": "BÀI 9 • MỤC 1 • BÀI TOÁN QUẢN LÝ DOANH NGHIỆP THỰC TẾ",
        "mascotMode": "thinking",
        "mascotTip": r"Tính nhanh $\overline{x}_A$ và $\overline{x}_B$ xem phân xưởng nào có năng suất cao hơn nhé!",
        "narration": "Ví dụ 3 là một bài toán quản trị sản xuất thực tế. Một công ty may theo dõi sản lượng áo may được mỗi ngày của 40 công nhân tại Phân xưởng A và 40 công nhân tại Phân xưởng B. Bảng số liệu cho thấy cả hai xưởng đều chia thành 4 nhóm năng suất: từ 10 đến 20; từ 20 đến 30; từ 30 đến 40; và từ 40 đến 50 sản phẩm. Hãy tính sản lượng trung bình mỗi ngày của công nhân ở từng phân xưởng và so sánh. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Năng suất may mỗi ngày (sản phẩm/ngày) của 40 công nhân ở hai xưởng A và B:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Nhóm năng suất</th>
            <th class="p-1.5 border border-slate-600">$[10; 20)$</th>
            <th class="p-1.5 border border-slate-600">$[20; 30)$</th>
            <th class="p-1.5 border border-slate-600">$[30; 40)$</th>
            <th class="p-1.5 border border-slate-600">$[40; 50)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-emerald-300">Số CN Xưởng A</td>
            <td class="p-1.5 border border-slate-600 font-mono">5</td>
            <td class="p-1.5 border border-slate-600 font-mono">15</td>
            <td class="p-1.5 border border-slate-600 font-mono">12</td>
            <td class="p-1.5 border border-slate-600 font-mono">8</td>
          </tr>
          <tr class="bg-slate-800/90 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-cyan-300">Số CN Xưởng B</td>
            <td class="p-1.5 border border-slate-600 font-mono">2</td>
            <td class="p-1.5 border border-slate-600 font-mono">18</td>
            <td class="p-1.5 border border-slate-600 font-mono">16</td>
            <td class="p-1.5 border border-slate-600 font-mono">4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-indigo-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính năng suất trung bình $\overline{x}_A$ và $\overline{x}_B$, từ đó cho biết công nhân phân xưởng nào có năng suất cao hơn?
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: ĐỐI CHIẾU NĂNG SUẤT A VÀ B",
        "subtitle": "BÀI 9 • MỤC 1 • SO SÁNH SỐ TRUNG BÌNH CHÍNH XÁC",
        "mascotMode": "celebrating",
        "mascotTip": r"$\overline{x}_A = 30,75$ và $\overline{x}_B = 30,5$. Phân xưởng A có năng suất cao hơn!",
        "narration": "Hết 30 giây. Giá trị đại diện của 4 nhóm lần lượt là 15, 25, 35 và 45. Đối với Phân xưởng A: Tổng tích bằng 5 nhân 15 cộng 15 nhân 25 cộng 12 nhân 35 cộng 8 nhân 45 bằng 1230. Chia cho 40, ta được năng suất trung bình x_A bằng 30,75 sản phẩm mỗi ngày. Đối với Phân xưởng B: Tổng tích bằng 2 nhân 15 cộng 18 nhân 25 cộng 16 nhân 35 cộng 4 nhân 45 bằng 1220. Chia cho 40, ta được năng suất trung bình x_B bằng 30,5 sản phẩm mỗi ngày. Vì 30,75 lớn hơn 30,5 nên công nhân Phân xưởng A có năng suất trung bình cao hơn.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40">
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded-lg border border-emerald-500/30">
        <div class="font-bold text-emerald-300 mb-1">🏭 Phân xưởng A ($n_A = 40$)</div>
        <p class="text-slate-300 font-mono leading-relaxed">
          $S_A = 5(15) + 15(25) + 12(35) + 8(45)$<br/>
          $S_A = 75 + 375 + 420 + 360 = 1230$.
        </p>
        <div class="text-center font-bold text-emerald-200 text-sm mt-1 bg-emerald-950/40 py-1 rounded">
          $$\overline{x}_A = \frac{1230}{40} = 30,75\text{ (sp)}$$
        </div>
      </div>

      <div class="bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30">
        <div class="font-bold text-cyan-300 mb-1">🏭 Phân xưởng B ($n_B = 40$)</div>
        <p class="text-slate-300 font-mono leading-relaxed">
          $S_B = 2(15) + 18(25) + 16(35) + 4(45)$<br/>
          $S_B = 30 + 450 + 560 + 180 = 1220$.
        </p>
        <div class="text-center font-bold text-cyan-200 text-sm mt-1 bg-cyan-950/40 py-1 rounded">
          $$\overline{x}_B = \frac{1220}{40} = 30,50\text{ (sp)}$$
        </div>
      </div>
    </div>

    <div class="mt-2.5 bg-slate-900/90 p-2.5 rounded-lg border border-indigo-500/30 text-xs text-center">
      <span class="text-slate-300">So sánh: </span>
      <span class="font-bold text-amber-300 font-mono">$\overline{x}_A = 30,75 > \overline{x}_B = 30,50$</span>.<br/>
      <span class="text-emerald-300 font-semibold">Kết luận:</span> Công nhân <b>Phân xưởng A</b> có năng suất lao động trung bình cao hơn Phân xưởng B.
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: TUỔI THỌ TRUNG BÌNH BÓNG ĐÈN LED",
        "subtitle": "BÀI 9 • MỤC 1 • MẪU SỐ LIỆU CỠ LỚN N = 100",
        "mascotMode": "thinking",
        "mascotTip": r"Cỡ mẫu $n = 100$ là một con số rất đẹp, chia tổng tích cho 100 chỉ cần dời dấu phẩy!",
        "narration": "Ví dụ 4 là bài toán kiểm định chất lượng sản phẩm công nghiệp. Một nhà máy tiến hành thử nghiệm tuổi thọ của 100 bóng đèn LED thông minh, đơn vị tính bằng nghìn giờ. Kết quả ghi nhận gồm 5 nhóm: từ 20 đến 25 nghìn giờ có 8 bóng; từ 25 đến 30 có 22 bóng; từ 30 đến 35 có 35 bóng; từ 35 đến 40 có 25 bóng; và từ 40 đến 45 có 10 bóng. Hãy tính tuổi thọ trung bình của bóng đèn do nhà máy sản xuất. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng thực tế</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Thử nghiệm tuổi thọ (đơn vị: nghìn giờ) của <b>$n = 100$</b> bóng đèn LED công nghiệp:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Tuổi thọ (nghìn giờ)</th>
            <th class="p-1.5 border border-slate-600">$[20; 25)$</th>
            <th class="p-1.5 border border-slate-600">$[25; 30)$</th>
            <th class="p-1.5 border border-slate-600">$[30; 35)$</th>
            <th class="p-1.5 border border-slate-600">$[35; 40)$</th>
            <th class="p-1.5 border border-slate-600">$[40; 45)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-amber-300">Số bóng ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">8</td>
            <td class="p-1.5 border border-slate-600 font-mono">22</td>
            <td class="p-1.5 border border-slate-600 font-mono">35</td>
            <td class="p-1.5 border border-slate-600 font-mono">25</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính tuổi thọ trung bình của loại bóng đèn LED này (theo đơn vị nghìn giờ và giờ).
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
        "subtitle": "BÀI 9 • MỤC 1 • TỔNG HỢP KIẾN THỨC CỐT LÕI SỐ TRUNG BÌNH",
        "mascotMode": "celebrating",
        "mascotTip": r"Tuổi thọ trung bình là 32,85 nghìn giờ, tức 32.850 giờ phát sáng liên tục!",
        "narration": "Chúc mừng các em đã hoàn thành Mục 1. Ta có các giá trị đại diện: 22,5; 27,5; 32,5; 37,5; và 42,5. Tích số: 8 nhân 22,5 bằng 180; 22 nhân 27,5 bằng 605; 35 nhân 32,5 bằng 1137,5; 25 nhân 37,5 bằng 937,5; và 10 nhân 42,5 bằng 425. Tổng cộng ta được 3285. Chia cho cỡ mẫu 100, ta được tuổi thọ trung bình bằng 32,85 nghìn giờ, tương đương 32850 giờ. Như vậy, chúng ta đã nắm chắc công thức và kỹ năng tính số trung bình của mẫu số liệu ghép nhóm. Hãy cùng chuyển sang Mục 2 để tìm hiểu về Trung vị và Tứ phân vị.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải chi tiết Ví dụ 4:</div>
    <div class="text-xs text-slate-300 font-mono leading-relaxed">
      • Tổng tích: $S = 8(22,5) + 22(27,5) + 35(32,5) + 25(37,5) + 10(42,5)$<br/>
      • $S = 180 + 605 + 1137,5 + 937,5 + 425 = 3285$.<br/>
      • Số trung bình: $\overline{x} = \frac{3285}{100} = 32,85\text{ (nghìn giờ)} = 32.850\text{ (giờ)}$.
    </div>

    <div class="mt-3 bg-gradient-to-r from-emerald-950 to-teal-950 p-3 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>⭐</span> <span>TỔNG KẾT MỤC 1 CẦN NHỚ</span>
      </div>
      <ul class="text-slate-300 space-y-1">
        <li>1. <b>Giá trị đại diện:</b> $c_i = \frac{a_i + a_{i+1}}{2}$.</li>
        <li>2. <b>Công thức trung bình:</b> $\overline{x} = \frac{1}{n}\sum_{i=1}^k m_i c_i$.</li>
        <li>3. <b>Ứng dụng:</b> Đại diện mặt bằng chung, so sánh chất lượng, hiệu suất giữa các mẫu.</li>
      </ul>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: TRUNG VỊ VÀ TỨ PHÂN VỊ CỦA MẪU SỐ LIỆU GHÉP NHÓM
# ==============================================================================
BAI9_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TRUNG VỊ MẪU GHÉP NHÓM & CÔNG THỨC CHUẨN",
        "subtitle": "BÀI 9 • MỤC 2 • ĐẠI LƯỢNG KHÔNG BỊ ẢNH HƯỞNG BỞI NGOẠI LAI",
        "mascotMode": "pointer",
        "mascotTip": r"Trung vị $M_e$ chia đôi mẫu số liệu: 50% nhỏ hơn và 50% lớn hơn $M_e$!",
        "narration": "Chào các em đến với Mục 2: Trung vị và Tứ phân vị của mẫu số liệu ghép nhóm. Nếu như số trung bình rất dễ bị bóp méo bởi các giá trị ngoại lai thì Trung vị lại có ưu điểm vượt trội là hoàn toàn miễn nhiễm với các giá trị bất thường đó. Để tính Trung vị M_e của mẫu ghép nhóm cỡ n, ta tìm nhóm chứa trung vị, đó là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng n chia 2. Công thức chuẩn SGK được hiển thị ngay trên màn hình.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40 text-center shadow-lg">
    <div class="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1">Công thức tính Trung vị Mẫu ghép nhóm</div>
    <div class="text-2xl font-black text-emerald-200 py-1 font-mono">
      $$M_e = u_m + \frac{\frac{n}{2} - C}{n_m} \cdot (u_{m+1} - u_m)$$
    </div>
    <div class="text-xs text-slate-300 mt-2 grid grid-cols-2 gap-2 text-left bg-slate-800/80 p-2.5 rounded-lg">
      <div>• $[u_m; u_{m+1})$: Nhóm chứa trung vị (có $cf \ge \frac{n}{2}$).<br/>• $u_m$: Đầu mút trái của nhóm chứa $M_e$.</div>
      <div>• $C = cf_{m-1}$: Tần số tích lũy nhóm đứng trước.<br/>• $n_m$: Tần số của nhóm chứa $M_e$; $h = u_{m+1} - u_m$.</div>
    </div>
  </div>

  <div class="bg-slate-800/80 p-3 rounded-lg border-l-4 border-teal-400 text-xs">
    <b class="text-teal-300">🎯 Ý nghĩa thực tế:</b> Giá trị trung vị $M_e$ chia tập dữ liệu thành hai phần có số lượng quan sát bằng nhau: khoảng 50% quan sát nhận giá trị nhỏ hơn $M_e$ và khoảng 50% quan sát nhận giá trị lớn hơn $M_e$.
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. TỨ PHÂN VỊ $Q_1, Q_2, Q_3$ VÀ KHOẢNG TỨ PHÂN VỊ",
        "subtitle": "BÀI 9 • MỤC 2 • BỘ BA ĐẶC TRƯNG PHÂN ĐOÀN DỮ LIỆU",
        "mascotMode": "explaining",
        "mascotTip": r"$Q_2$ chính là Trung vị $M_e$; $Q_1$ tìm ở vị trí $n/4$; $Q_3$ tìm ở vị trí $3n/4$!",
        "narration": "Tứ phân vị gồm ba giá trị Q_1, Q_2, Q_3 chia mẫu số liệu đã sắp xếp thành bốn phần bằng nhau, mỗi phần chứa xấp xỉ 25% số quan sát. Trong đó, Q_2 chính là Trung vị M_e. Để tìm tứ phân vị thứ nhất Q_1, ta tìm nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng n chia 4, rồi áp dụng công thức tương tự. Để tìm tứ phân vị thứ ba Q_3, ta tìm nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng 3n chia 4. Hiệu số delta Q bằng Q_3 trừ Q_1 được gọi là khoảng tứ phân vị, đo độ phân tán của 50% số liệu ở chính giữa.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/90 p-3 rounded-xl border border-cyan-500/40">
      <div class="font-bold text-cyan-300 text-sm mb-1">Tứ phân vị thứ nhất $Q_1$ (25%)</div>
      <p class="text-slate-300 leading-relaxed mb-2">
        Nhóm chứa $Q_1$ là $[u_p; u_{p+1})$ có $cf \ge \frac{n}{4}$:
      </p>
      <div class="font-mono text-cyan-200 font-bold bg-slate-900 p-2 rounded text-center">
        $$Q_1 = u_p + \frac{\frac{n}{4} - C_{p-1}}{n_p} \cdot h_p$$
      </div>
      <p class="text-slate-400 text-xs mt-1">Khoảng 25% giá trị nhỏ hơn $Q_1$, 75% lớn hơn $Q_1$.</p>
    </div>

    <div class="bg-slate-800/90 p-3 rounded-xl border border-purple-500/40">
      <div class="font-bold text-purple-300 text-sm mb-1">Tứ phân vị thứ ba $Q_3$ (75%)</div>
      <p class="text-slate-300 leading-relaxed mb-2">
        Nhóm chứa $Q_3$ là $[u_q; u_{q+1})$ có $cf \ge \frac{3n}{4}$:
      </p>
      <div class="font-mono text-purple-200 font-bold bg-slate-900 p-2 rounded text-center">
        $$Q_3 = u_q + \frac{\frac{3n}{4} - C_{q-1}}{n_q} \cdot h_q$$
      </div>
      <p class="text-slate-400 text-xs mt-1">Khoảng 75% giá trị nhỏ hơn $Q_3$, 25% lớn hơn $Q_3$.</p>
    </div>
  </div>

  <div class="bg-slate-900/90 p-3 rounded-lg border border-amber-500/30 text-xs flex items-center justify-between">
    <div>
      <span class="font-bold text-amber-300">Khoảng tứ phân vị (Interquartile Range): </span>
      <span class="font-mono text-amber-200 font-bold text-sm">$\Delta_Q = Q_3 - Q_1$</span>
    </div>
    <span class="text-slate-400">Đo độ phân tán của 50% số liệu trung tâm</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: TÍNH TRUNG VỊ THỜI GIAN CHẠY 100M",
        "subtitle": "BÀI 9 • MỤC 2 • THỰC HÀNH TÍNH TRUNG VỊ CHUẨN XÁC",
        "mascotMode": "thinking",
        "mascotTip": r"Tìm $n/2 = 30/2 = 15$. Nhóm nào có tần số tích lũy đầu tiên vượt qua 15?",
        "narration": "Chúng ta cùng làm Ví dụ 1. Đo thành tích chạy cự li 100m của 30 học sinh nam lớp 11, kết quả được nhóm lại như sau: từ 12 đến 13 giây có 4 học sinh; từ 13 đến 14 giây có 10 học sinh; từ 14 đến 15 giây có 11 học sinh; và từ 15 đến 16 giây có 5 học sinh. Hãy tính trung vị của mẫu số liệu trên. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Thành tích chạy 100m (giây) của <b>$n = 30$</b> học sinh nam:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Thời gian (giây)</th>
            <th class="p-1.5 border border-slate-600">$[12; 13)$</th>
            <th class="p-1.5 border border-slate-600">$[13; 14)$</th>
            <th class="p-1.5 border border-slate-600">$[14; 15)$</th>
            <th class="p-1.5 border border-slate-600">$[15; 16)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-emerald-300">Tần số ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">4</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
            <td class="p-1.5 border border-slate-600 font-mono">11</td>
            <td class="p-1.5 border border-slate-600 font-mono">5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-emerald-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Xác định nhóm chứa trung vị và tính giá trị trung vị $M_e$ (làm tròn đến chữ số thập phân thứ hai).
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-emerald-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: TÍNH TRUNG VỊ $M_e$",
        "subtitle": "BÀI 9 • MỤC 2 • ÁP DỤNG CÔNG THỨC CHI TIẾT TỪNG BƯỚC",
        "mascotMode": "celebrating",
        "mascotTip": r"$M_e = 14 + \frac{15 - 14}{11} \cdot 1 = 14 + \frac{1}{11} \approx 14,09$ giây!",
        "narration": "Hết thời gian. Ta tính tần số tích lũy: nhóm 1 có cf bằng 4; nhóm 2 có cf bằng 14; nhóm 3 có cf bằng 25. Cỡ mẫu n bằng 30 nên n chia 2 bằng 15. Vì 14 nhỏ hơn 15 và 15 nhỏ hơn hoặc bằng 25, nên nhóm chứa trung vị chính là nhóm thứ ba, tức nửa khoảng từ 14 đến 15. Ta có đầu mút trái u_m bằng 14; độ dài nhóm h bằng 1; tần số tích lũy trước C bằng 14; tần số nhóm chứa trung vị n_m bằng 11. Thay vào công thức, M_e bằng 14 cộng với phân số 15 trừ 14 chia cho 11, nhân 1. Kết quả xấp xỉ 14,09 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Các bước giải chi tiết:</div>

    <div class="space-y-2 text-xs text-slate-300">
      <p><b>Bước 1: Tính tần số tích lũy:</b> $cf_1 = 4$; $cf_2 = 4 + 10 = 14$; $cf_3 = 14 + 11 = 25$; $cf_4 = 30$.</p>
      <p><b>Bước 2: Tìm nhóm chứa trung vị:</b> Ta có $\frac{n}{2} = \frac{30}{2} = 15$. Do $cf_2 = 14 < 15 \le cf_3 = 25$ nên nhóm chứa trung vị là <b>$[14; 15)$</b>.</p>
      <p><b>Bước 3: Xác định các tham số:</b> $u_m = 14$; $h = 15 - 14 = 1$; $C = cf_2 = 14$; $n_m = 11$.</p>
      <p><b>Bước 4: Tính toán:</b></p>
      <div class="text-sm font-mono text-cyan-200 text-center font-bold bg-slate-900 p-2 rounded">
        $$M_e = 14 + \frac{15 - 14}{11} \cdot 1 = 14 + \frac{1}{11} \approx 14,09\text{ (giây)}$$
      </div>
      <p class="text-slate-300 text-center">
        <b>Ý nghĩa:</b> Có khoảng 50% học sinh chạy 100m dưới 14,09 giây và 50% học sinh chạy từ 14,09 giây trở lên.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. PHƯƠNG PHÁP XÁC ĐỊNH NHANH NHÓM CHỨA $Q_1, Q_3$",
        "subtitle": "BÀI 9 • MỤC 2 • BÍ QUYẾT TRÁNH NHẦM LẪN VỊ TRÍ PHÂN VỊ",
        "mascotMode": "explaining",
        "mascotTip": r"Luôn lập thêm hàng tần số tích lũy $cf_i$ ngay phía dưới bảng để tra cứu siêu tốc!",
        "narration": "Một lỗi phổ biến của học sinh là xác định nhầm nhóm chứa tứ phân vị. Để không bao giờ bị nhầm, bí quyết là luôn kẻ thêm hàng tần số tích lũy cf_i ngay dưới hàng tần số. Khi cần tìm Q_1, tính n chia 4 rồi nhìn từ trái qua phải, nhóm nào đầu tiên có cf chạm hoặc vượt mức n chia 4 thì đó chính là nhóm chứa Q_1. Khi cần tìm Q_3, tính 3n chia 4 rồi tìm nhóm đầu tiên có cf chạm hoặc vượt mức 3n chia 4. Nhớ rằng C chính là cf của nhóm đứng ngay liền trước.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-indigo-500/40">
    <div class="font-bold text-indigo-300 text-xs uppercase mb-2">Bảng quy tắc đối chiếu xác định nhóm tứ phân vị</div>
    <div class="grid grid-cols-3 gap-2.5 text-xs text-center">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300 text-sm">Vị trí $Q_1$</b>
        <div class="font-mono text-slate-200 my-1 font-bold text-base">$\frac{n}{4}$</div>
        <p class="text-slate-400 text-xs">Tìm nhóm đầu tiên thỏa mãn $cf_p \ge \frac{n}{4}$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300 text-sm">Vị trí $Q_2 = M_e$</b>
        <div class="font-mono text-slate-200 my-1 font-bold text-base">$\frac{n}{2}$</div>
        <p class="text-slate-400 text-xs">Tìm nhóm đầu tiên thỏa mãn $cf_m \ge \frac{n}{2}$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400">
        <b class="text-purple-300 text-sm">Vị trí $Q_3$</b>
        <div class="font-mono text-slate-200 my-1 font-bold text-base">$\frac{3n}{4}$</div>
        <p class="text-slate-400 text-xs">Tìm nhóm đầu tiên thỏa mãn $cf_q \ge \frac{3n}{4}$.</p>
      </div>
    </div>
  </div>

  <div class="bg-amber-950/40 p-2.5 rounded-lg border border-amber-500/30 text-xs text-amber-200">
    ⚠️ <b>Cảnh báo bẫy thi cử:</b> Rất nhiều bạn lấy nhầm $C$ là tần số của nhóm hiện tại thay vì tần số tích lũy của <b>nhóm đứng trước</b> ($cf_{m-1}$). Nếu nhóm chứa là nhóm đầu tiên ($m=1$) thì $C = 0$!
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÍNH TỨ PHÂN VỊ THỨ NHẤT $Q_1$",
        "subtitle": "BÀI 9 • MỤC 2 • THỰC CHIẾN TÍNH $Q_1$ CÂN NẶNG HỌC SINH",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 40$ thì $n/4 = 10$. Tần số tích lũy các nhóm là 5, 17... Nhóm chứa $Q_1$ là nhóm nào?",
        "narration": "Ví dụ 2 yêu cầu tính tứ phân vị thứ nhất. Bảng số liệu thống kê cân nặng của 40 học sinh lớp 11B gồm 5 nhóm: từ 40 đến 45kg có 5 bạn; từ 45 đến 50kg có 12 bạn; từ 50 đến 55kg có 14 bạn; từ 55 đến 60kg có 7 bạn; và từ 60 đến 65kg có 2 bạn. Hãy tính tứ phân vị thứ nhất Q_1 của mẫu số liệu trên. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Cân nặng (kg) của <b>$n = 40$</b> học sinh lớp 11B:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Cân nặng (kg)</th>
            <th class="p-1.5 border border-slate-600">$[40; 45)$</th>
            <th class="p-1.5 border border-slate-600">$[45; 50)$</th>
            <th class="p-1.5 border border-slate-600">$[50; 55)$</th>
            <th class="p-1.5 border border-slate-600">$[55; 60)$</th>
            <th class="p-1.5 border border-slate-600">$[60; 65)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-cyan-300">Số HS ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">5</td>
            <td class="p-1.5 border border-slate-600 font-mono">12</td>
            <td class="p-1.5 border border-slate-600 font-mono">14</td>
            <td class="p-1.5 border border-slate-600 font-mono">7</td>
            <td class="p-1.5 border border-slate-600 font-mono">2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-cyan-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tìm nhóm chứa tứ phân vị thứ nhất và tính giá trị $Q_1$ (làm tròn đến hai chữ số thập phân).
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-cyan-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: TÍNH $Q_1$ CHÍNH XÁC",
        "subtitle": "BÀI 9 • MỤC 2 • KẾT QUẢ VÀ Ý NGHĨA PHÂN VỊ DỮ LIỆU",
        "mascotMode": "celebrating",
        "mascotTip": r"$Q_1 = 45 + \frac{10 - 5}{12} \cdot 5 = 45 + \frac{25}{12} \approx 47,08$ kg!",
        "narration": "Hết thời gian. Ta có cỡ mẫu n bằng 40 nên n chia 4 bằng 10. Tần số tích lũy: nhóm 1 có cf bằng 5; nhóm 2 có cf bằng 5 cộng 12 bằng 17. Vì 5 nhỏ hơn 10 và 10 nhỏ hơn hoặc bằng 17 nên nhóm chứa Q_1 là nhóm thứ hai, tức nửa khoảng từ 45 đến 50. Các tham số: đầu mút trái u_p bằng 45; độ dài nhóm h bằng 5; tần số tích lũy trước C bằng 5; tần số nhóm n_p bằng 12. Thay vào công thức, Q_1 bằng 45 cộng với phân số 10 trừ 5 chia 12, nhân 5. Ta được 45 cộng 25 phần 12, xấp xỉ 47,08 kg.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40">
    <div class="text-xs font-bold text-cyan-300 uppercase mb-2">Các bước giải chi tiết:</div>

    <div class="space-y-2 text-xs text-slate-300">
      <p><b>Bước 1: Tính vị trí:</b> $\frac{n}{4} = \frac{40}{4} = 10$.</p>
      <p><b>Bước 2: Tần số tích lũy:</b> $cf_1 = 5 < 10 \le cf_2 = 17$. Do đó nhóm chứa $Q_1$ là <b>$[45; 50)$</b>.</p>
      <p><b>Bước 3: Tham số:</b> $u_p = 45$; $h = 5$; $C = cf_1 = 5$; $n_p = 12$.</p>
      <p><b>Bước 4: Áp dụng công thức:</b></p>
      <div class="text-sm font-mono text-cyan-200 text-center font-bold bg-slate-900 p-2 rounded">
        $$Q_1 = 45 + \frac{10 - 5}{12} \cdot 5 = 45 + \frac{25}{12} \approx 47,08\text{ (kg)}$$
      </div>
      <p class="text-slate-300 text-center">
        <b>Ý nghĩa thực tế:</b> Khoảng 25% số học sinh có cân nặng dưới 47,08 kg và 75% học sinh có cân nặng từ 47,08 kg trở lên.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. QUY TRÌNH 4 BƯỚC TÍNH BỘ BA $(Q_1, Q_2, Q_3)$",
        "subtitle": "BÀI 9 • MỤC 2 • BẢN ĐỒ CHIẾN THUẬT XỬ LÝ TOÀN DIỆN",
        "mascotMode": "explaining",
        "mascotTip": r"Làm trọn bộ $(Q_1, Q_2, Q_3)$ và $\Delta_Q$ theo một bảng tích lũy duy nhất!",
        "narration": "Khi gặp bài toán yêu cầu tìm trọn bộ tứ phân vị Q_1, Q_2, Q_3 và khoảng tứ phân vị delta Q, các em hãy bám chắc quy trình 4 bước chuẩn sau. Bước 1: Lập cột hoặc hàng tần số tích lũy cf_i. Bước 2: Tính ba mốc giá trị n chia 4, n chia 2 và 3n chia 4. Bước 3: Tra bảng để xác định chính xác ba nhóm chứa Q_1, Q_2 và Q_3. Bước 4: Áp dụng công thức tính giá trị của từng tứ phân vị rồi lấy Q_3 trừ Q_1 để ra khoảng tứ phân vị delta Q.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 font-bold text-xs rounded uppercase">Quy trình chuẩn</span>
      <h3 class="text-lg font-bold text-purple-200">4 Bước Tính Trọn Bộ Tứ Phân Vị & $\Delta_Q$</h3>
    </div>
    <div class="grid grid-cols-4 gap-2 text-xs mt-3">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">1. Lập $cf_i$</b>
        <p class="text-slate-300 mt-1">Cộng dồn tần số từ trái sang phải: $cf_i = cf_{i-1} + m_i$.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">2. Tính 3 mốc</b>
        <p class="text-slate-300 mt-1">Tính giá trị ba vị trí: $\frac{n}{4}, \frac{n}{2}, \frac{3n}{4}$.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-purple-400">
        <b class="text-purple-300">3. Tra nhóm</b>
        <p class="text-slate-300 mt-1">Xác định 3 nhóm tương ứng chứa $Q_1, Q_2, Q_3$.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-amber-400">
        <b class="text-amber-300">4. Tính $\Delta_Q$</b>
        <p class="text-slate-300 mt-1">Tính từng $Q_k$ rồi trừ: $\Delta_Q = Q_3 - Q_1$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÍNH TRỌN BỘ TỨ PHÂN VỊ $(Q_1, Q_2, Q_3)$",
        "subtitle": "BÀI 9 • MỤC 2 • BẢNG ĐIỂM KIỂM TRA 60 HỌC SINH",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 60 \Rightarrow n/4 = 15; n/2 = 30; 3n/4 = 45$. Nhóm [5; 7) chứa $Q_1$, nhóm [7; 9) chứa cả $Q_2$ và $Q_3$!",
        "narration": "Ví dụ 3 là bài toán tổng hợp yêu cầu tính toàn bộ các tứ phân vị. Cho bảng phân phối điểm kiểm tra của 60 học sinh: nhóm từ 3 đến 5 điểm có 6 học sinh; nhóm từ 5 đến 7 điểm có 18 học sinh; nhóm từ 7 đến 9 điểm có 26 học sinh; và nhóm từ 9 đến 11 điểm có 10 học sinh. Hãy tính Q_1, Q_2, Q_3 và khoảng tứ phân vị delta Q. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Điểm kiểm tra của <b>$n = 60$</b> học sinh:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Điểm số</th>
            <th class="p-1.5 border border-slate-600">$[3; 5)$</th>
            <th class="p-1.5 border border-slate-600">$[5; 7)$</th>
            <th class="p-1.5 border border-slate-600">$[7; 9)$</th>
            <th class="p-1.5 border border-slate-600">$[9; 11)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-purple-300">Tần số ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">6</td>
            <td class="p-1.5 border border-slate-600 font-mono">18</td>
            <td class="p-1.5 border border-slate-600 font-mono">26</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
          </tr>
          <tr class="bg-slate-900 text-amber-300 font-bold">
            <td class="p-1.5 border border-slate-600 font-semibold text-amber-300">Tần số tích lũy ($cf_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">6</td>
            <td class="p-1.5 border border-slate-600 font-mono">24</td>
            <td class="p-1.5 border border-slate-600 font-mono">50</td>
            <td class="p-1.5 border border-slate-600 font-mono">60</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-purple-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính bộ ba tứ phân vị $(Q_1, Q_2, Q_3)$ và khoảng tứ phân vị $\Delta_Q$.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-purple-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: TÍNH $Q_1, Q_2, Q_3$ VÀ $\\Delta_Q$",
        "subtitle": "BÀI 9 • MỤC 2 • KẾT QUẢ CHUẨN XÁC 100% ZERO ERROR",
        "mascotMode": "celebrating",
        "mascotTip": r"$Q_1 = 6,0$; $Q_2 \approx 7,46$; $Q_3 \approx 8,62$; $\Delta_Q = 8,62 - 6,0 = 2,62$ điểm!",
        "narration": "Đã hết thời gian. Cỡ mẫu 60 nên n chia 4 bằng 15; n chia 2 bằng 30; 3n chia 4 bằng 45. Nhóm chứa Q_1 là nhóm từ 5 đến 7 điểm: Q_1 bằng 5 cộng 15 trừ 6 chia 18 nhân 2, bằng đúng 6,0 điểm. Nhóm chứa Q_2 là nhóm từ 7 đến 9 điểm: Q_2 bằng 7 cộng 30 trừ 24 chia 26 nhân 2, bằng 7 cộng 12 phần 26, xấp xỉ 7,46 điểm. Nhóm chứa Q_3 cũng là nhóm từ 7 đến 9 điểm: Q_3 bằng 7 cộng 45 trừ 24 chia 26 nhân 2, bằng 7 cộng 42 phần 26, xấp xỉ 8,62 điểm. Khoảng tứ phân vị delta Q bằng 8,62 trừ 6,0 bằng 2,62 điểm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40">
    <div class="grid grid-cols-3 gap-2.5 text-xs">
      <div class="bg-slate-900/80 p-2 rounded-lg border border-cyan-500/30">
        <b class="text-cyan-300">Tính $Q_1$ ($\frac{n}{4} = 15$)</b>
        <p class="text-slate-300 text-xs mt-1">Nhóm chứa: $[5; 7)$<br/>$C = 6, n_p = 18, h = 2$.</p>
        <div class="font-mono text-cyan-200 font-bold mt-1 text-center">
          $$Q_1 = 5 + \frac{15 - 6}{18} \cdot 2 = 6,0$$
        </div>
      </div>

      <div class="bg-slate-900/80 p-2 rounded-lg border border-emerald-500/30">
        <b class="text-emerald-300">Tính $Q_2$ ($\frac{n}{2} = 30$)</b>
        <p class="text-slate-300 text-xs mt-1">Nhóm chứa: $[7; 9)$<br/>$C = 24, n_m = 26, h = 2$.</p>
        <div class="font-mono text-emerald-200 font-bold mt-1 text-center">
          $$Q_2 = 7 + \frac{30 - 24}{26} \cdot 2 \approx 7,46$$
        </div>
      </div>

      <div class="bg-slate-900/80 p-2 rounded-lg border border-purple-500/30">
        <b class="text-purple-300">Tính $Q_3$ ($\frac{3n}{4} = 45$)</b>
        <p class="text-slate-300 text-xs mt-1">Nhóm chứa: $[7; 9)$<br/>$C = 24, n_q = 26, h = 2$.</p>
        <div class="font-mono text-purple-200 font-bold mt-1 text-center">
          $$Q_3 = 7 + \frac{45 - 24}{26} \cdot 2 \approx 8,62$$
        </div>
      </div>
    </div>

    <div class="mt-2.5 bg-slate-900 p-2.5 rounded-lg border border-amber-500/30 text-xs flex items-center justify-between">
      <div>
        <span class="text-slate-300">Khoảng tứ phân vị: </span>
        <span class="font-mono text-amber-300 font-bold">$\Delta_Q = Q_3 - Q_1 = 8,62 - 6,00 = 2,62\text{ (điểm)}$</span>
      </div>
      <span class="text-emerald-400 font-medium">Độ chênh lệch 50% học sinh trung tâm là 2,62 điểm</span>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: PHÂN LOẠI THU NHẬP DOANH NGHIỆP",
        "subtitle": "BÀI 9 • MỤC 2 • BÀI TOÁN XẾP MỨC THƯỞNG CUỐI NĂM",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 100$: Tìm $M_e$ ($n/2 = 50$) và $Q_3$ ($3n/4 = 75$) để phân loại top 50% và top 25% thu nhập cao nhất!",
        "narration": "Ví dụ 4 là ứng dụng thực tế phân loại mức thu nhập của 100 nhân viên trong một công ty để xét duyệt chính sách thưởng Tết. Thu nhập theo đơn vị triệu đồng mỗi tháng gồm 5 nhóm: từ 6 đến 9 triệu có 15 người; từ 9 đến 12 triệu có 35 người; từ 12 đến 15 triệu có 30 người; từ 15 đến 18 triệu có 15 người; và từ 18 đến 21 triệu có 5 người. Hãy xác định mức thu nhập trung vị và mức thu nhập tối thiểu của nhóm 25% nhân viên có thu nhập cao nhất. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng thực tế</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Thu nhập hàng tháng (triệu đồng) của <b>$n = 100$</b> nhân viên:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Thu nhập (triệu đồng)</th>
            <th class="p-1.5 border border-slate-600">$[6; 9)$</th>
            <th class="p-1.5 border border-slate-600">$[9; 12)$</th>
            <th class="p-1.5 border border-slate-600">$[12; 15)$</th>
            <th class="p-1.5 border border-slate-600">$[15; 18)$</th>
            <th class="p-1.5 border border-slate-600">$[18; 21)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-amber-300">Số nhân viên</td>
            <td class="p-1.5 border border-slate-600 font-mono">15</td>
            <td class="p-1.5 border border-slate-600 font-mono">35</td>
            <td class="p-1.5 border border-slate-600 font-mono">30</td>
            <td class="p-1.5 border border-slate-600 font-mono">15</td>
            <td class="p-1.5 border border-slate-600 font-mono">5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính Trung vị $M_e$ và Tứ phân vị thứ ba $Q_3$, từ đó xác định ngưỡng thu nhập của 25% nhân viên thu nhập cao nhất.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
        "subtitle": "BÀI 9 • MỤC 2 • Ý NGHĨA KINH TẾ CỦA TỨ PHÂN VỊ",
        "mascotMode": "celebrating",
        "mascotTip": r"$M_e = 12,0$ triệu đồng; $Q_3 = 14,5$ triệu đồng. Ngưỡng top 25% thu nhập cao là từ 14,5 triệu trở lên!",
        "narration": "Chúc mừng các em đã tìm ra đáp án. Tần số tích lũy các nhóm lần lượt là 15, 50, 80, 95 và 100. Để tính trung vị, n chia 2 bằng 50. Nhóm chứa trung vị là từ 9 đến 12 triệu. M_e bằng 9 cộng với phân số 50 trừ 15 chia 35, nhân 3, ra đúng 12,0 triệu đồng. Để tính Q_3 xác định top 25% thu nhập cao nhất, 3n chia 4 bằng 75. Nhóm chứa Q_3 là nhóm từ 12 đến 15 triệu có cf bằng 80. Q_3 bằng 12 cộng với phân số 75 trừ 50 chia 30, nhân 3, bằng 12 cộng 2,5 ra đúng 14,5 triệu đồng. Như vậy, 25% nhân viên có thu nhập cao nhất kiếm được từ 14,5 triệu đồng mỗi tháng trở lên.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải chi tiết Ví dụ 4:</div>
    <div class="grid grid-cols-2 gap-3 text-xs text-slate-300">
      <div class="bg-slate-900 p-2 rounded border border-emerald-500/30">
        <b class="text-emerald-300">1. Trung vị $M_e$ ($\frac{n}{2} = 50$)</b>
        <p class="font-mono text-xs mt-1">Nhóm $[9; 12)$: $u_m=9, C=15, n_m=35, h=3$.</p>
        <div class="font-bold text-emerald-200 text-center font-mono mt-1">
          $$M_e = 9 + \frac{50 - 15}{35} \cdot 3 = 12,0\text{ (triệu)}$$
        </div>
      </div>
      <div class="bg-slate-900 p-2 rounded border border-purple-500/30">
        <b class="text-purple-300">2. Tứ phân vị $Q_3$ ($\frac{3n}{4} = 75$)</b>
        <p class="font-mono text-xs mt-1">Nhóm $[12; 15)$: $u_q=12, C=50, n_q=30, h=3$.</p>
        <div class="font-bold text-purple-200 text-center font-mono mt-1">
          $$Q_3 = 12 + \frac{75 - 50}{30} \cdot 3 = 14,5\text{ (triệu)}$$
        </div>
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>⭐</span> <span>KẾT LUẬN QUẢN TRỊ THỰC TIỄN</span>
      </div>
      <p class="text-slate-300">
        • 50% nhân viên công ty có thu nhập dưới <b>12,0 triệu đồng</b>/tháng.<br/>
        • Ngưỡng thu nhập của top 25% nhân viên xuất sắc nhất công ty là từ <b>14,5 triệu đồng</b>/tháng trở lên.
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: MỐT CỦA MẪU SỐ LIỆU GHÉP NHÓM & SO SÁNH CÁC SỐ ĐẶC TRƯNG
# ==============================================================================
BAI9_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. MỐT CỦA MẪU SỐ LIỆU GHÉP NHÓM",
        "subtitle": "BÀI 9 • MỤC 3 • GIÁ TRỊ CÓ TẦN SỐ CAO NHẤT",
        "mascotMode": "pointer",
        "mascotTip": r"Nhóm chứa mốt là nhóm có tần số LỚN NHẤT trong bảng tần số ghép nhóm!",
        "narration": "Chào mừng các em đến với Mục 3: Mốt của mẫu số liệu ghép nhóm và phương pháp lựa chọn số đặc trưng phù hợp. Ở lớp 10, mốt là giá trị xuất hiện nhiều lần nhất. Đối với mẫu ghép nhóm, nhóm chứa mốt là nhóm có tần số lớn nhất. Để ước lượng giá trị mốt M_o, ta sử dụng công thức nội suy dựa vào sự chênh lệch tần số giữa nhóm mốt với nhóm liền trước và nhóm liền sau nó.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-4 rounded-xl border border-amber-500/40 text-center shadow-lg">
    <div class="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">Công thức toán học tính Mốt Mẫu ghép nhóm</div>
    <div class="text-2xl font-black text-amber-200 py-1 font-mono">
      $$M_o = u_m + \frac{n_m - n_{m-1}}{(n_m - n_{m-1}) + (n_m - n_{m+1})} \cdot (u_{m+1} - u_m)$$
    </div>
    <div class="text-xs text-slate-300 mt-2 grid grid-cols-2 gap-2 text-left bg-slate-800/80 p-2.5 rounded-lg">
      <div>• $[u_m; u_{m+1})$: Nhóm chứa mốt (nhóm có $n_m = \max$).<br/>• $u_m$: Đầu mút trái của nhóm chứa mốt.</div>
      <div>• $n_{m-1}$: Tần số nhóm đứng liền trước.<br/>• $n_{m+1}$: Tần số nhóm đứng liền sau; $h = u_{m+1} - u_m$.</div>
    </div>
  </div>

  <div class="bg-slate-800/80 p-3 rounded-lg border-l-4 border-amber-400 text-xs">
    <b class="text-amber-300">🎯 Ý nghĩa thực tế:</b> Mốt đại diện cho giá trị có mức độ phổ biến cao nhất, được người tiêu dùng hoặc cá thể trong mẫu lựa chọn nhiều nhất (ví dụ: cỡ áo bán chạy nhất, khung giờ xe cộ đông đúc nhất).
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÁC TRƯỜNG HỢP ĐẶC BIỆT KHI TÍNH MỐT",
        "subtitle": "BÀI 9 • MỤC 3 • XỬ LÝ NHÓM MỐT Ở BIÊN ĐẦU VÀ BIÊN CUỐI",
        "mascotMode": "explaining",
        "mascotTip": r"Nếu nhóm mốt là nhóm đầu tiên thì $n_{m-1} = 0$; nếu là nhóm cuối thì $n_{m+1} = 0$!",
        "narration": "Khi áp dụng công thức mốt, có hai trường hợp đặc biệt các em cần hết sức chú ý. Trường hợp một: Nhóm chứa mốt là nhóm đầu tiên của bảng số liệu, khi đó không có nhóm liền trước nên ta quy ước tần số n_{m-1} bằng 0. Trường hợp hai: Nhóm chứa mốt là nhóm cuối cùng của bảng, khi đó không có nhóm liền sau nên ta quy ước tần số n_{m+1} bằng 0. Ngoài ra, nếu trong bảng có hai nhóm có tần số lớn nhất bằng nhau và không liền kề, mẫu số liệu đó được gọi là mẫu đa mốt.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/90 p-3 rounded-xl border border-cyan-500/40">
      <div class="font-bold text-cyan-300 text-sm mb-1">Trường hợp 1: Mốt ở nhóm đầu</div>
      <p class="text-slate-300 leading-relaxed">
        Nếu nhóm 1 ($[u_1; u_2)$) có tần số lớn nhất, không có nhóm đứng trước:<br/>
        <span class="font-mono text-cyan-200 font-bold">Quy ước: $n_0 = n_{m-1} = 0$</span>.<br/>
        Công thức chuyển thành:<br/>
        $$M_o = u_1 + \frac{n_1}{n_1 + (n_1 - n_2)} \cdot h$$
      </p>
    </div>

    <div class="bg-slate-800/90 p-3 rounded-xl border border-purple-500/40">
      <div class="font-bold text-purple-300 text-sm mb-1">Trường hợp 2: Mốt ở nhóm cuối</div>
      <p class="text-slate-300 leading-relaxed">
        Nếu nhóm cuối $k$ ($[u_k; u_{k+1})$) có tần số lớn nhất, không có nhóm sau:<br/>
        <span class="font-mono text-purple-200 font-bold">Quy ước: $n_{k+1} = n_{m+1} = 0$</span>.<br/>
        Công thức chuyển thành:<br/>
        $$M_o = u_k + \frac{n_k - n_{k-1}}{(n_k - n_{k-1}) + n_k} \cdot h$$
      </p>
    </div>
  </div>

  <div class="bg-slate-900/90 p-3 rounded-lg border border-amber-500/30 text-xs text-amber-200">
    💡 <b>Mẹo giải nhanh:</b> Đặt $d_1 = n_m - n_{m-1}$ (độ chênh lệch với nhóm trước) và $d_2 = n_m - n_{m+1}$ (độ chênh lệch với nhóm sau). Khi đó công thức rút gọn cực đẹp: $M_o = u_m + \frac{d_1}{d_1 + d_2} \cdot h$.
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: TÍNH MỐT THỜI GIAN LÀM BÀI THI",
        "subtitle": "BÀI 9 • MỤC 3 • THỰC HÀNH CÔNG THỨC MỐT CƠ BẢN",
        "mascotMode": "thinking",
        "mascotTip": r"Tìm nhóm có tần số lớn nhất: $n_m = 15$ thuộc nhóm $[30; 35)$. Tính $d_1 = 15 - 6 = 9$ và $d_2 = 15 - 14 = 1$!",
        "narration": "Ví dụ 1: Thống kê thời gian hoàn thành bài kiểm tra 45 phút của 40 học sinh thu được bảng sau: từ 25 đến 30 phút có 6 bạn; từ 30 đến 35 phút có 15 bạn; từ 35 đến 40 phút có 14 bạn; và từ 40 đến 45 phút có 5 bạn. Hãy tìm nhóm chứa mốt và tính giá trị mốt M_o. Các em có 15 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Thời gian hoàn thành bài thi (phút) của <b>$n = 40$</b> học sinh:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Thời gian (phút)</th>
            <th class="p-1.5 border border-slate-600">$[25; 30)$</th>
            <th class="p-1.5 border border-slate-600">$[30; 35)$</th>
            <th class="p-1.5 border border-slate-600">$[35; 40)$</th>
            <th class="p-1.5 border border-slate-600">$[40; 45)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-amber-300">Số HS ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">6</td>
            <td class="p-1.5 border border-slate-600 font-mono font-bold text-amber-400">15</td>
            <td class="p-1.5 border border-slate-600 font-mono">14</td>
            <td class="p-1.5 border border-slate-600 font-mono">5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Xác định nhóm chứa mốt và tính giá trị mốt $M_o$ của mẫu số liệu.
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: TÍNH $M_o$ CHÍNH XÁC",
        "subtitle": "BÀI 9 • MỤC 3 • KẾT QUẢ ĐẸP 34,5 PHÚT",
        "mascotMode": "celebrating",
        "mascotTip": r"$M_o = 30 + \frac{9}{9 + 1} \cdot 5 = 30 + 4,5 = 34,5$ phút!",
        "narration": "Hết thời gian. Ta thấy tần số lớn nhất là 15 thuộc về nhóm thứ hai từ 30 đến 35 phút. Do đó nhóm chứa mốt là nửa khoảng từ 30 đến 35. Các thông số: đầu mút trái u_m bằng 30; độ dài h bằng 5; tần số n_m bằng 15; tần số nhóm trước n_{m-1} bằng 6; tần số nhóm sau n_{m+1} bằng 14. Ta tính độ chênh lệch d_1 bằng 15 trừ 6 bằng 9; d_2 bằng 15 trừ 14 bằng 1. Áp dụng công thức, M_o bằng 30 cộng với phân số 9 chia cho 9 cộng 1, nhân với 5. Kết quả bằng 30 cộng 4,5 bằng 34,5 phút.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="text-xs font-bold text-amber-300 uppercase mb-2">Các bước giải chi tiết:</div>

    <div class="space-y-2 text-xs text-slate-300">
      <p><b>Bước 1: Nhóm chứa mốt:</b> Tần số lớn nhất là $n_m = 15$ nên nhóm chứa mốt là <b>$[30; 35)$</b>.</p>
      <p><b>Bước 2: Xác định thông số:</b> $u_m = 30$; $h = 5$; $n_{m-1} = 6$; $n_{m+1} = 14$.</p>
      <p><b>Bước 3: Tính các độ chênh lệch:</b> $d_1 = 15 - 6 = 9$; $d_2 = 15 - 14 = 1$.</p>
      <p><b>Bước 4: Áp dụng công thức:</b></p>
      <div class="text-sm font-mono text-amber-200 text-center font-bold bg-slate-900 p-2 rounded">
        $$M_o = 30 + \frac{9}{9 + 1} \cdot 5 = 30 + \frac{9}{10} \cdot 5 = 30 + 4,5 = 34,5\text{ (phút)}$$
      </div>
      <p class="text-slate-300 text-center">
        <b>Ý nghĩa thực tế:</b> Đa số học sinh hoàn thành bài kiểm tra ở mốc thời gian quanh <b>34,5 phút</b>.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. BẢNG SO SÁNH 4 SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM",
        "subtitle": "BÀI 9 • MỤC 3 • CHIẾN LƯỢC LỰA CHỌN ĐẠI LƯỢNG THỐNG KÊ",
        "mascotMode": "explaining",
        "mascotTip": r"Dữ liệu đối xứng: dùng $\overline{x}$; Có ngoại lai lệch: dùng $M_e$; Sản xuất quy mô: dùng $M_o$!",
        "narration": "Để trở thành một chuyên gia phân tích dữ liệu giỏi, các em cần biết khi nào nên sử dụng số đặc trưng nào. Số trung bình x_ngang đại diện tốt nhất khi dữ liệu phân bố đối xứng và không có giá trị bất thường. Trung vị M_e là lựa chọn hàng đầu khi dữ liệu bị lệch hoặc có các giá trị ngoại lai cực lớn hay cực nhỏ như phân tích thu nhập hay giá bất động sản. Tứ phân vị giúp đánh giá thêm 50% trung tâm và độ phân tán qua delta Q. Còn Mốt M_o lại cực kì hữu ích trong kinh doanh thương mại khi cần tìm mặt hàng bán chạy nhất.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="overflow-x-auto">
    <table class="w-full text-xs text-left border-collapse">
      <thead>
        <tr class="bg-slate-700 text-slate-200">
          <th class="p-2 border border-slate-600">Đặc trưng</th>
          <th class="p-2 border border-slate-600">Khi nào nên sử dụng?</th>
          <th class="p-2 border border-slate-600">Ưu điểm & Nhược điểm</th>
        </tr>
      </thead>
      <tbody class="text-slate-300">
        <tr class="bg-slate-800/80">
          <td class="p-2 border border-slate-600 font-bold text-emerald-300">Trung bình $\overline{x}$</td>
          <td class="p-2 border border-slate-600">Dữ liệu phân bố tương đối đối xứng, không có ngoại lai.</td>
          <td class="p-2 border border-slate-600">Dùng toàn bộ dữ liệu nhưng rất nhạy cảm với giá trị cực đoan.</td>
        </tr>
        <tr class="bg-slate-800/50">
          <td class="p-2 border border-slate-600 font-bold text-cyan-300">Trung vị $M_e$</td>
          <td class="p-2 border border-slate-600">Dữ liệu bị lệch hoặc có ngoại lai (thu nhập, giá nhà).</td>
          <td class="p-2 border border-slate-600">Không bị méo mó bởi ngoại lai, phản ánh chuẩn xác số đông.</td>
        </tr>
        <tr class="bg-slate-800/80">
          <td class="p-2 border border-slate-600 font-bold text-purple-300">Tứ phân vị $Q_k$</td>
          <td class="p-2 border border-slate-600">Phân đoạn dữ liệu thành 4 phần bằng nhau (top 25%, 50%, 75%).</td>
          <td class="p-2 border border-slate-600">Kết hợp với $\Delta_Q$ đánh giá độ phân tán 50% trung tâm.</td>
        </tr>
        <tr class="bg-slate-800/50">
          <td class="p-2 border border-slate-600 font-bold text-amber-300">Mốt $M_o$</td>
          <td class="p-2 border border-slate-600">Tìm giá trị có tần suất cao nhất (sản xuất, bán lẻ).</td>
          <td class="p-2 border border-slate-600">Dễ xác định, phản ánh xu hướng số đông ưa chuộng nhất.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÍNH MỐT CỠ ÁO NAM GIỚI BÁN LẺ",
        "subtitle": "BÀI 9 • MỤC 3 • TỐI ƯU NHẬP HÀNG TRONG KINH DOANH",
        "mascotMode": "thinking",
        "mascotTip": r"Tần số lớn nhất là 45 thuộc nhóm $[92; 96)$. $d_1 = 45 - 30 = 15; d_2 = 45 - 25 = 20$!",
        "narration": "Ví dụ 2 là bài toán bán lẻ thời trang nam. Khảo sát số đo vòng ngực của 120 nam giới đến mua áo tại một cửa hàng thu được bảng số liệu: từ 84 đến 88 cm có 10 người; từ 88 đến 92 cm có 30 người; từ 92 đến 96 cm có 45 người; từ 96 đến 100 cm có 25 người; và từ 100 đến 104 cm có 10 người. Hãy tính mốt của mẫu số liệu và cho biết cửa hàng nên nhập nhiều áo cỡ tương ứng với kích thước nào nhất. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Vòng ngực (cm) của <b>$n = 120$</b> khách hàng nam:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Vòng ngực (cm)</th>
            <th class="p-1.5 border border-slate-600">$[84; 88)$</th>
            <th class="p-1.5 border border-slate-600">$[88; 92)$</th>
            <th class="p-1.5 border border-slate-600">$[92; 96)$</th>
            <th class="p-1.5 border border-slate-600">$[96; 100)$</th>
            <th class="p-1.5 border border-slate-600">$[100; 104)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-amber-300">Số khách</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
            <td class="p-1.5 border border-slate-600 font-mono">30</td>
            <td class="p-1.5 border border-slate-600 font-mono font-bold text-amber-400">45</td>
            <td class="p-1.5 border border-slate-600 font-mono">25</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính mốt $M_o$ và đưa ra tư vấn kinh doanh cho chủ cửa hàng.
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: TÍNH $M_o$ VÒNG NGỰC KHÁCH HÀNG",
        "subtitle": "BÀI 9 • MỤC 3 • TƯ VẤN QUY HOẠCH KHO HÀNG CHÍNH XÁC",
        "mascotMode": "celebrating",
        "mascotTip": r"$M_o = 92 + \frac{15}{15 + 20} \cdot 4 = 92 + \frac{60}{35} \approx 93,71$ cm (Size L)!",
        "narration": "Hết thời gian. Tần số lớn nhất là 45 thuộc nhóm từ 92 đến 96 cm. Đầu mút trái u_m bằng 92; độ dài h bằng 4. Nhóm liền trước có tần số 30 nên d_1 bằng 45 trừ 30 bằng 15. Nhóm liền sau có tần số 25 nên d_2 bằng 45 trừ 25 bằng 20. Thay vào công thức, M_o bằng 92 cộng với phân số 15 chia cho 15 cộng 20, nhân 4. Ta được 92 cộng 60 chia 35, xấp xỉ 93,71 cm. Vòng ngực này tương ứng với áo cỡ L, do đó cửa hàng nên ưu tiên nhập nhiều áo size L nhất.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="text-xs font-bold text-amber-300 uppercase mb-2">Lời giải chi tiết:</div>

    <div class="space-y-2 text-xs text-slate-300">
      <p><b>Nhóm chứa mốt:</b> $[92; 96)$ vì có tần số lớn nhất $n_m = 45$.</p>
      <p><b>Các tham số:</b> $u_m = 92$; $h = 4$; $d_1 = 45 - 30 = 15$; $d_2 = 45 - 25 = 20$.</p>
      <div class="text-sm font-mono text-amber-200 text-center font-bold bg-slate-900 p-2 rounded">
        $$M_o = 92 + \frac{15}{15 + 20} \cdot 4 = 92 + \frac{15}{35} \cdot 4 \approx 93,71\text{ (cm)}$$
      </div>
      <p class="text-slate-300 text-center">
        <b>Tư vấn kinh doanh:</b> Cửa hàng nên nhập nhiều áo có kích cỡ vòng ngực quanh <b>93,71 cm</b> (tương đương Size L), vì đây là nhóm khách hàng có nhu cầu mua lớn nhất.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. PHÂN TÍCH TÁC ĐỘNG CỦA GIÁ TRỊ NGOẠI LAI (OUTLIERS)",
        "subtitle": "BÀI 9 • MỤC 3 • VÌ SAO SỐ TRUNG BÌNH CÓ THỂ ĐÁNH LỪA BẠN?",
        "mascotMode": "explaining",
        "mascotTip": r"Chỉ cần 1 giám đốc lương 200 triệu sẽ kéo lương trung bình của 49 công nhân lên gấp đôi!",
        "narration": "Tại sao trong thực tế có những bản báo cáo ghi nhận thu nhập trung bình của công ty rất cao nhưng người lao động lại cảm thấy không đúng? Đó là vì hiện tượng ngoại lai. Giả sử một công ty có 50 người, gồm 49 công nhân lương từ 8 đến 10 triệu và một giám đốc lương 200 triệu đồng. Khi tính trung bình, tổng lương bị kéo vọt lên khiến số trung bình đạt gần 14 triệu đồng, cao hơn hẳn thu nhập thực của 98% nhân viên. Trong trường hợp này, Trung vị hoặc Mốt mới là con số phản ánh chân thực cuộc sống của người lao động.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-rose-950/70 to-slate-900/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded uppercase">Thực tế cuộc sống</span>
      <h3 class="text-base font-bold text-rose-200">Bẫy Số Trung Bình Khi Có Ngoại Lai Cực Đoan</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs mt-2">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-rose-400">
        <b class="text-rose-300">⚠️ Số trung bình $\overline{x} \approx 13,8$ triệu</b>
        <p class="text-slate-300 mt-1">Bị giám đốc 200 triệu kéo lệch, tạo cảm giác 'ai cũng có lương cao' nhưng thực tế 98% công nhân không đạt được!</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-emerald-400">
        <b class="text-emerald-300">✅ Trung vị $M_e \approx 9,0$ triệu</b>
        <p class="text-slate-300 mt-1">Không bị ảnh hưởng bởi 200 triệu, phản ánh chính xác 50% người lao động có mức lương quanh 9 triệu đồng.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: LỰA CHỌN SỐ ĐẶC TRƯNG THÍCH HỢP",
        "subtitle": "BÀI 9 • MỤC 3 • BÀI TOÁN TƯ DUY PHÂN TÍCH DỮ LIỆU",
        "mascotMode": "thinking",
        "mascotTip": r"Xem xét phân bố dữ liệu: nhóm cuối [50; 250) có khoảng biến thiên quá rộng và tách biệt!",
        "narration": "Ví dụ 3 là câu hỏi đánh giá tư duy thống kê. Bảng khảo sát tiền thưởng Tết của 50 nhân viên một công ty công nghệ: từ 5 đến 10 triệu có 10 người; từ 10 đến 15 triệu có 25 người; từ 15 đến 20 triệu có 12 người; và nhóm đặc biệt từ 50 đến 250 triệu dành cho ban lãnh đạo có 3 người. Hãy phân tích tại sao nên dùng Trung vị thay vì Số trung bình để đại diện cho mức thưởng Tết của đa số nhân viên. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng cao</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Khảo sát tiền thưởng Tết (triệu đồng) của <b>$n = 50$</b> nhân viên:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Thưởng Tết (triệu)</th>
            <th class="p-1.5 border border-slate-600">$[5; 10)$</th>
            <th class="p-1.5 border border-slate-600">$[10; 15)$</th>
            <th class="p-1.5 border border-slate-600">$[15; 20)$</th>
            <th class="p-1.5 border border-slate-600 bg-rose-950/60 text-rose-300 font-bold">$[50; 250)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-rose-300">Số người</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
            <td class="p-1.5 border border-slate-600 font-mono">25</td>
            <td class="p-1.5 border border-slate-600 font-mono">12</td>
            <td class="p-1.5 border border-slate-600 font-mono font-bold text-rose-400">3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-rose-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính $\overline{x}$ và $M_e$, so sánh và giải thích số đặc trưng nào phản ánh đúng mặt bằng chung hơn.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ tính toán:</span>
    </div>
    <span class="text-base font-black text-rose-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: ĐỐI CHIẾU $\\overline{x}$ VÀ $M_e$",
        "subtitle": "BÀI 9 • MỤC 3 • CHỨNG MINH KHOA HỌC ƯU THẾ CỦA TRUNG VỊ",
        "mascotMode": "celebrating",
        "mascotTip": r"$\overline{x} \approx 20,95$ triệu nhưng $M_e = 13,0$ triệu. Rõ ràng 94% nhân viên chỉ thưởng dưới 20 triệu!",
        "narration": "Đã hết thời gian. Ta tính số trung bình: Các giá trị đại diện là 7,5; 12,5; 17,5 và 150. Tổng tích bằng 10 nhân 7,5 cộng 25 nhân 12,5 cộng 12 nhân 17,5 cộng 3 nhân 150 bằng 1047,5. Chia cho 50, ta được số trung bình bằng 20,95 triệu đồng. Bây giờ tính trung vị: n chia 2 bằng 25. Nhóm chứa trung vị là từ 10 đến 15 triệu. M_e bằng 10 cộng với 25 trừ 10 chia 25 nhân 5, ra đúng 13,0 triệu đồng. Nhìn vào bảng, có tới 47 trên 50 nhân viên nhận thưởng dưới 20 triệu, do đó con số trung bình 20,95 triệu là không đại diện tốt. Trung vị 13 triệu đồng phản ánh chân thực hơn rất nhiều.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40">
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900 p-2.5 rounded-lg border border-rose-500/30">
        <b class="text-rose-300">1. Số trung bình $\overline{x}$</b>
        <p class="font-mono text-xs text-slate-300 mt-1">
          $S = 10(7,5) + 25(12,5) + 12(17,5) + 3(150)$<br/>
          $S = 75 + 312,5 + 210 + 450 = 1047,5$.
        </p>
        <div class="font-bold text-rose-200 text-center font-mono mt-1">
          $$\overline{x} = \frac{1047,5}{50} = 20,95\text{ (triệu)}$$
        </div>
      </div>

      <div class="bg-slate-900 p-2.5 rounded-lg border border-emerald-500/30">
        <b class="text-emerald-300">2. Trung vị $M_e$ ($\frac{n}{2} = 25$)</b>
        <p class="font-mono text-xs text-slate-300 mt-1">
          Nhóm $[10; 15)$: $u_m=10, C=10, n_m=25, h=5$.
        </p>
        <div class="font-bold text-emerald-200 text-center font-mono mt-1">
          $$M_e = 10 + \frac{25 - 10}{25} \cdot 5 = 13,0\text{ (triệu)}$$
        </div>
      </div>
    </div>

    <div class="mt-2.5 bg-slate-900/90 p-2.5 rounded-lg border border-cyan-500/30 text-xs">
      <span class="text-cyan-300 font-bold">Kết luận phân tích: </span>
      <span class="text-slate-300">Có tới <b>$47/50$ ($94\%$)</b> nhân viên có tiền thưởng dưới 20 triệu. Vì vậy, số trung bình $\overline{x} = 20,95$ triệu bị kéo lệch quá đà bởi 3 sếp lãnh đạo. Con số <b>Trung vị $M_e = 13,0$ triệu</b> là đại diện chuẩn xác và trung thực nhất!</span>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: QUẢN LÝ SIÊU THỊ BỐ TRÍ THU NGÂN",
        "subtitle": "BÀI 9 • MỤC 3 • BÀI TOÁN GIỜ CAO ĐIỂM BẰNG MỐT",
        "mascotMode": "thinking",
        "mascotTip": r"Khung giờ có đông khách nhất tương ứng với Mốt $M_o$ để mở thêm quầy thu ngân!",
        "narration": "Ví dụ 4 là bài toán vận hành chuỗi siêu thị. Thống kê lượng khách hàng vào mua sắm trong các khung giờ chiều tối: từ 16 đến 17 giờ có 40 khách; từ 17 đến 18 giờ có 95 khách; từ 18 đến 19 giờ có 180 khách; từ 19 đến 20 giờ có 130 khách; và từ 20 đến 21 giờ có 55 khách. Hãy tính mốt khung giờ đông khách nhất để giám đốc siêu thị tăng cường nhân viên thu ngân. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng thực tế</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Số lượng khách mua sắm tại siêu thị theo khung giờ chiều tối:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Khung giờ</th>
            <th class="p-1.5 border border-slate-600">$[16; 17)$</th>
            <th class="p-1.5 border border-slate-600">$[17; 18)$</th>
            <th class="p-1.5 border border-slate-600">$[18; 19)$</th>
            <th class="p-1.5 border border-slate-600">$[19; 20)$</th>
            <th class="p-1.5 border border-slate-600">$[20; 21)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-amber-300">Lượng khách</td>
            <td class="p-1.5 border border-slate-600 font-mono">40</td>
            <td class="p-1.5 border border-slate-600 font-mono">95</td>
            <td class="p-1.5 border border-slate-600 font-mono font-bold text-amber-400">180</td>
            <td class="p-1.5 border border-slate-600 font-mono">130</td>
            <td class="p-1.5 border border-slate-600 font-mono">55</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính mốt thời gian cao điểm $M_o$ (chuyển đổi ra giờ và phút).
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT TOÀN BỘ BÀI 9",
        "subtitle": "BÀI 9 • MỤC 3 • HOÀN THÀNH XUẤT SẮC CÁC SỐ ĐẶC TRƯNG",
        "mascotMode": "celebrating",
        "mascotTip": r"$M_o = 18 + \frac{85}{85 + 50} \cdot 1 = 18 + \frac{85}{135} \approx 18,63$ giờ (18 giờ 38 phút)!",
        "narration": "Chúc mừng các em đã tìm ra đáp án chính xác. Nhóm có lượng khách đông nhất là từ 18 đến 19 giờ với 180 khách. Ta có u_m bằng 18; độ dài h bằng 1 giờ. Nhóm trước có 95 khách nên d_1 bằng 180 trừ 95 bằng 85. Nhóm sau có 130 khách nên d_2 bằng 180 trừ 130 bằng 50. Thay vào công thức, M_o bằng 18 cộng với phân số 85 chia cho 85 cộng 50, nhân 1. Ta được 18 cộng 85 chia 135, xấp xỉ 18,63 giờ, tức khoảng 18 giờ 38 phút. Giám đốc siêu thị nên bố trí tối đa nhân viên thu ngân từ 18 giờ đến 19 giờ 15 phút. Như vậy chúng ta đã hoàn thành xuất sắc toàn bộ kiến thức Bài 9.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải chi tiết Ví dụ 4:</div>
    <div class="space-y-1 text-xs text-slate-300 font-mono">
      <p>• Nhóm mốt: $[18; 19)$ có $n_m = 180$. $u_m = 18, h = 1$.</p>
      <p>• $d_1 = 180 - 95 = 85$; $d_2 = 180 - 130 = 50$.</p>
      <div class="text-sm font-mono text-amber-200 text-center font-bold bg-slate-900 p-2 rounded">
        $$M_o = 18 + \frac{85}{85 + 50} \cdot 1 = 18 + \frac{85}{135} \approx 18,63\text{ (giờ)} \approx 18\text{ giờ } 38\text{ phút}$$
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>⭐</span> <span>TỔNG KẾT TOÀN DIỆN BÀI 9 CẦN NHỚ</span>
      </div>
      <ul class="text-slate-300 space-y-1">
        <li>1. <b>Số trung bình $\overline{x}$ :</b> Đại diện xu thế chung, tính bằng $\frac{1}{n}\sum m_i c_i$.</li>
        <li>2. <b>Trung vị $M_e$ :</b> Chia đôi dữ liệu tại $\frac{n}{2}$, không bị kéo lệch bởi ngoại lai.</li>
        <li>3. <b>Tứ phân vị $Q_1, Q_2, Q_3$ :</b> Phân vị 4 phần tại $\frac{n}{4}, \frac{n}{2}, \frac{3n}{4}$; $\Delta_Q = Q_3 - Q_1$.</li>
        <li>4. <b>Mốt $M_o$ :</b> Đại diện cho giá trị phổ biến nhất, tính tại nhóm có $n_m = \max$.</li>
      </ul>
    </div>
  </div>
</div>
"""
    }
]

print("ch3_bai9_data.py initialized: BAI9_MUC1_SCENES, BAI9_MUC2_SCENES, BAI9_MUC3_SCENES ready.")
'''

with open(r"C:\Users\May Tinh Chau A\.gemini\antigravity\scratch\TROLYHOCTAPTOAN1012\ch3_bai9_data.py", "w", encoding="utf-8") as f:
    f.write(content)

print("ch3_bai9_data.py generated successfully.")
