# -*- coding: utf-8 -*-
"""
CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
BÀI TẬP CUỐI CHƯƠNG III (ÔN TẬP CHƯƠNG 3) - TOÁN 11 KNTT
Mục 1, Mục 2, Mục 3 - Đầy đủ 36 Scenes (12 scenes/mục)
Mỗi mục có 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
Giọng đọc Thầy Nam Minh (vi-VN-NamMinhNeural) chuẩn sư phạm Bộ GD&ĐT
"""

# ==============================================================================
# MỤC 1: HỆ THỐNG HÓA LÝ THUYẾT & SƠ ĐỒ TƯ DUY TOÀN BỘ CHƯƠNG 3
# ==============================================================================
ONTAP_C3_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. TỔNG QUAN CẤU TRÚC CHƯƠNG 3 TOÁN 11 KNTT",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • HỆ THỐNG KIẾN THỨC CỐT LÕI",
        "mascotMode": "pointer",
        "mascotTip": r"Chương 3 gồm 2 trụ cột: Kỹ thuật ghép nhóm mẫu số liệu và 4 nhóm số đặc trưng đo xu thế trung tâm!",
        "narration": "Chào mừng các em đến với tiết Ôn tập toàn diện Chương 3 môn Toán lớp 11: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm. Chương này đóng vai trò cầu nối quan trọng giữa kiến thức thống kê mô tả ở lớp 10 với các bài toán kiểm định giả thuyết và xác suất thống kê ở bậc đại học. Cấu trúc toàn bộ chương gồm hai phần chính: Bài 8 trang bị cho chúng ta phương pháp ghép nhóm dữ liệu thô và xây dựng bảng tần số tích lũy; Bài 9 hướng dẫn tính toán và ứng dụng thực tế của 4 số đặc trưng: Số trung bình, Trung vị, Tứ phân vị và Mốt.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Hệ thống hóa</span>
      <h3 class="text-xl font-black text-emerald-200">Sơ Đồ Cấu Trúc Toàn Diện Chương III</h3>
    </div>
    <p class="text-sm text-slate-300 leading-relaxed">
      Chương III gồm <b>2 trụ cột kiến thức</b> gắn liền chặt chẽ với nhau:
    </p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">📘 Trụ cột 1: Bài 8 - Mẫu ghép nhóm</h4>
      <p class="text-slate-300 leading-relaxed">
        • Khái niệm nhóm nửa khoảng $[a_i; a_{i+1})$.<br/>
        • Giá trị đại diện $c_i = \frac{a_i + a_{i+1}}{2}$ & độ dài $h$.<br/>
        • 4 bước ghép nhóm từ số liệu thô.<br/>
        • Bảng tần số tích lũy $cf_i = \sum_{j=1}^i m_j$.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">📙 Trụ cột 2: Bài 9 - Số đặc trưng</h4>
      <p class="text-slate-300 leading-relaxed">
        • <b>Số trung bình $\overline{x}$:</b> $\frac{1}{n}\sum m_i c_i$.<br/>
        • <b>Trung vị $M_e$:</b> Chia đôi tại mốc $\frac{n}{2}$.<br/>
        • <b>Tứ phân vị $Q_1, Q_2, Q_3$:</b> Mốc $\frac{n}{4}, \frac{n}{2}, \frac{3n}{4}$.<br/>
        • <b>Mốt $M_o$:</b> Giá trị tại nhóm có $n_m = \max$.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. BẢNG ĐỐI CHIẾU CÁC CÔNG THỨC NỀN TẢNG BÀI 8",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • CÔNG THỨC GHÉP NHÓM & TÍCH LŨY",
        "mascotMode": "explaining",
        "mascotTip": r"Luôn nhớ quy tắc cộng dồn tần số chéo: $cf_i = cf_{i-1} + m_i$!",
        "narration": "Trước hết, chúng ta cùng điểm lại các công thức nền tảng của Bài 8. Mỗi nhóm ghép có dạng nửa khoảng a_i đến a_{i+1}, độ dài nhóm h bằng đầu mút phải trừ đầu mút trái. Giá trị đại diện c_i là trung bình cộng hai đầu mút. Tần số tích lũy cf_i được tính bằng tổng tần số từ nhóm 1 đến nhóm i. Đây chính là chìa khóa then chốt để xác định vị trí của Trung vị và các Tứ phân vị ở Bài 9.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-4 rounded-xl border border-cyan-500/40 text-center shadow-lg">
    <div class="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1">Bảng công thức nền tảng Bài 8</div>
    <div class="grid grid-cols-3 gap-3 text-xs mt-3">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300 text-sm">Giá trị đại diện</b>
        <div class="font-mono text-emerald-200 font-bold text-sm my-1">
          $$c_i = \frac{a_i + a_{i+1}}{2}$$
        </div>
        <p class="text-slate-400">Trung bình cộng 2 đầu mút</p>
      </div>

      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300 text-sm">Độ dài nhóm</b>
        <div class="font-mono text-cyan-200 font-bold text-sm my-1">
          $$h_i = a_{i+1} - a_i$$
        </div>
        <p class="text-slate-400">Đầu mút phải trừ đầu mút trái</p>
      </div>

      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-teal-400">
        <b class="text-teal-300 text-sm">Tần số tích lũy</b>
        <div class="font-mono text-teal-200 font-bold text-sm my-1">
          $$cf_i = \sum_{j=1}^i m_j$$
        </div>
        <p class="text-slate-400">Cộng dồn tần số đến nhóm $i$</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: ĐỌC BẢNG & TÍNH ĐẠI DIỆN SIÊU NHANH",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • KHỞI ĐỘNG PHẢN XẠ NHANH 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Lấy $(a + b)/2$ cho từng nhóm, tính nhanh trong đầu không cần bấm máy tính!",
        "narration": "Chúng ta cùng bắt đầu phần thực hành với Ví dụ 1. Cho bảng tần số ghép nhóm gồm 4 nhóm: [10; 20) có tần số 4; [20; 30) có tần số 10; [30; 40) có tần số 6; và [40; 50) có tần số 5. Hãy tính cỡ mẫu n và xác định dãy giá trị đại diện c_1, c_2, c_3, c_4. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Khởi động phản xạ</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Nhóm</th>
            <th class="p-1.5 border border-slate-600">$[10; 20)$</th>
            <th class="p-1.5 border border-slate-600">$[20; 30)$</th>
            <th class="p-1.5 border border-slate-600">$[30; 40)$</th>
            <th class="p-1.5 border border-slate-600">$[40; 50)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-emerald-300">Tần số ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">4</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
            <td class="p-1.5 border border-slate-600 font-mono">6</td>
            <td class="p-1.5 border border-slate-600 font-mono">5</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tìm cỡ mẫu $n$ và tính các giá trị đại diện $c_1, c_2, c_3, c_4$.
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP SỐ CHUẨN XÁC",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • CỠ MẪU VÀ GIÁ TRỊ ĐẠI DIỆN",
        "mascotMode": "celebrating",
        "mascotTip": r"Cỡ mẫu $n = 25$; Dãy giá trị đại diện là 15; 25; 35; 45!",
        "narration": "Hết thời gian. Cỡ mẫu n là tổng của tất cả tần số: 4 cộng 10 cộng 6 cộng 5 bằng 25. Giá trị đại diện của từng nhóm: c_1 bằng 10 cộng 20 chia 2 bằng 15; c_2 bằng 20 cộng 30 chia 2 bằng 25; c_3 bằng 30 cộng 40 chia 2 bằng 35; và c_4 bằng 40 cộng 50 chia 2 bằng 45. Kết quả rất chính xác.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-2">Đáp án chi tiết:</div>
    <div class="space-y-2 text-xs text-slate-300 font-mono">
      <p>• <b>Cỡ mẫu:</b> $n = 4 + 10 + 6 + 5 = 25$.</p>
      <p>• <b>Giá trị đại diện:</b></p>
      <div class="grid grid-cols-4 gap-2 text-center text-cyan-200 font-bold bg-slate-900 p-2 rounded">
        <div>$c_1 = 15$</div>
        <div>$c_2 = 25$</div>
        <div>$c_3 = 35$</div>
        <div>$c_4 = 45$</div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. BẢNG TỔNG HỢP CÔNG THỨC $\\overline{x}$ VÀ $M_e$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • SO SÁNH HAI CÔNG THỨC TRUNG TÂM",
        "mascotMode": "explaining",
        "mascotTip": r"Nhớ: $\overline{x}$ tính theo tổng tích $m_i c_i$, còn $M_e$ tính theo vị trí tích lũy $n/2$!",
        "narration": "Bây giờ, chúng ta đối chiếu hai đại lượng đo xu thế trung tâm phổ biến nhất là Số trung bình x_ngang và Trung vị M_e. Số trung bình bằng 1 phần n nhân tổng của các tích m_i nhân c_i, đại diện cho mức bình quân toán học. Trong khi đó, Trung vị M_e được xác định bằng công thức nội suy tuyến tính tại vị trí n chia 2, chia đôi mẫu số liệu và hoàn toàn không bị ảnh hưởng bởi các giá trị ngoại lai.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
      <div class="font-bold text-emerald-300 text-sm mb-1">1. Số trung bình $\overline{x}$</div>
      <div class="font-mono text-emerald-200 font-bold bg-slate-900 p-2 rounded text-center my-2">
        $$\overline{x} = \frac{1}{n} \sum_{i=1}^k m_i c_i$$
      </div>
      <p class="text-slate-300 leading-relaxed">
        • $c_i$: Giá trị đại diện.<br/>
        • $m_i$: Tần số nhóm.<br/>
        • $n$: Cỡ mẫu toàn thể.
      </p>
    </div>

    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40">
      <div class="font-bold text-cyan-300 text-sm mb-1">2. Trung vị $M_e$</div>
      <div class="font-mono text-cyan-200 font-bold bg-slate-900 p-2 rounded text-center my-2">
        $$M_e = u_m + \frac{\frac{n}{2} - C}{n_m} \cdot h$$
      </div>
      <p class="text-slate-300 leading-relaxed">
        • $[u_m; u_{m+1})$ có $cf \ge \frac{n}{2}$.<br/>
        • $C = cf_{m-1}$ (tích lũy trước).<br/>
        • $n_m$: Tần số nhóm chứa $M_e$.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: TÍNH NHANH $\\overline{x}$ VÀ $M_e$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • LUYỆN TẬP PHẢN XẠ ĐỒNG THỜI 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 20$. Tìm $n/2 = 10$. Tính nhanh tổng tích và áp dụng công thức!",
        "narration": "Ví dụ 2: Cho bảng số liệu gồm 3 nhóm: [10; 20) có 4 giá trị; [20; 30) có 10 giá trị; và [30; 40) có 6 giá trị. Cỡ mẫu n bằng 20. Hãy tính số trung bình x_ngang và trung vị M_e. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Nhóm</th>
            <th class="p-1.5 border border-slate-600">$[10; 20)$</th>
            <th class="p-1.5 border border-slate-600">$[20; 30)$</th>
            <th class="p-1.5 border border-slate-600">$[30; 40)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-cyan-300">Tần số ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">4</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
            <td class="p-1.5 border border-slate-600 font-mono">6</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-cyan-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính số trung bình $\overline{x}$ và trung vị $M_e$ của mẫu số liệu.
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
        "title": "7. LỜI GIẢI VÍ DỤ 2: TÍNH $\\overline{x}$ VÀ $M_e$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • SỰ TRÙNG HỢP KỲ DIỆU GIỮA HAI ĐẠI LƯỢNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Cả $\overline{x}$ và $M_e$ đều bằng đúng 26,0 tuyệt đẹp!",
        "narration": "Hết thời gian. Ta có các giá trị đại diện là 15, 25 và 35. Tính số trung bình: tổng tích bằng 4 nhân 15 cộng 10 nhân 25 cộng 6 nhân 35 bằng 60 cộng 250 cộng 210 bằng 520. Chia cho cỡ mẫu 20, ta được x_ngang bằng 26,0. Bây giờ tính trung vị: n chia 2 bằng 10. Tần số tích lũy: cf_1 bằng 4; cf_2 bằng 14. Nhóm chứa trung vị là từ 20 đến 30. M_e bằng 20 cộng với phân số 10 trừ 4 chia 10 nhân 10. Ta được 20 cộng 6 bằng đúng 26,0. Khi dữ liệu có tính phân bố cân đối, số trung bình và trung vị sẽ rất gần nhau hoặc trùng nhau.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40">
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900 p-2.5 rounded-lg border border-emerald-500/30">
        <b class="text-emerald-300">1. Số trung bình $\overline{x}$</b>
        <p class="font-mono text-xs text-slate-300 mt-1">
          $S = 4(15) + 10(25) + 6(35) = 520$.
        </p>
        <div class="font-bold text-emerald-200 text-center font-mono mt-1">
          $$\overline{x} = \frac{520}{20} = 26,0$$
        </div>
      </div>

      <div class="bg-slate-900 p-2.5 rounded-lg border border-cyan-500/30">
        <b class="text-cyan-300">2. Trung vị $M_e$ ($\frac{n}{2} = 10$)</b>
        <p class="font-mono text-xs text-slate-300 mt-1">
          Nhóm $[20; 30)$: $u_m=20, C=4, n_m=10, h=10$.
        </p>
        <div class="font-bold text-cyan-200 text-center font-mono mt-1">
          $$M_e = 20 + \frac{10 - 4}{10} \cdot 10 = 26,0$$
        </div>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. BẢNG TỔNG HỢP CÔNG THỨC $Q_1, Q_3, \\Delta_Q$ VÀ $M_o$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • BỘ CÔNG CỤ PHÂN VỊ VÀ ĐỘ PHỔ BIẾN",
        "mascotMode": "explaining",
        "mascotTip": r"$Q_1$ ở vị trí $n/4$; $Q_3$ ở vị trí $3n/4$; Mốt $M_o$ tại nhóm tần số cực đại!",
        "narration": "Tiếp theo là bảng tổng hợp công thức của Tứ phân vị và Mốt. Tứ phân vị thứ nhất Q_1 tính theo mốc n chia 4; Tứ phân vị thứ ba Q_3 tính theo mốc 3n chia 4; Khoảng tứ phân vị delta Q bằng Q_3 trừ Q_1, phản ánh độ phân tán của 50% số liệu ở giữa. Mốt M_o tính theo độ chênh lệch d_1 và d_2 tại nhóm có tần số lớn nhất, là công cụ không thể thiếu trong kinh doanh và dự báo thị trường.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40">
      <div class="font-bold text-purple-300 text-sm mb-1">Tứ phân vị & $\Delta_Q$</div>
      <p class="text-slate-300 font-mono text-xs leading-relaxed">
        $Q_1 = u_p + \frac{\frac{n}{4} - C_{p-1}}{n_p} \cdot h$<br/>
        $Q_3 = u_q + \frac{\frac{3n}{4} - C_{q-1}}{n_q} \cdot h$<br/>
        <b class="text-amber-300">$\Delta_Q = Q_3 - Q_1$</b> (Khoảng tứ phân vị)
      </p>
    </div>

    <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
      <div class="font-bold text-amber-300 text-sm mb-1">Mốt $M_o$</div>
      <p class="text-slate-300 font-mono text-xs leading-relaxed">
        Nhóm chứa mốt có $n_m = \max$<br/>
        $d_1 = n_m - n_{m-1}$ ; $d_2 = n_m - n_{m+1}$<br/>
        <b class="text-amber-200">$$M_o = u_m + \frac{d_1}{d_1 + d_2} \cdot h$$</b>
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TÍNH $Q_1, Q_3, \\Delta_Q$ VÀ $M_o$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • BÀI TOÁN TỔNG HỢP 4 NHÓM DỮ LIỆU",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 40$. $n/4 = 10; 3n/4 = 30$. Nhóm mốt là [10; 20) có tần số lớn nhất bằng 16!",
        "narration": "Ví dụ 3 là bài tập tổng hợp rèn luyện trọn bộ các số đặc trưng. Cho bảng số liệu gồm 4 nhóm: [0; 10) có 8; [10; 20) có 16; [20; 30) có 12; và [30; 40) có 4. Cỡ mẫu n bằng 40. Hãy tính Q_1, Q_3, khoảng tứ phân vị delta Q và Mốt M_o. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Nhóm</th>
            <th class="p-1.5 border border-slate-600">$[0; 10)$</th>
            <th class="p-1.5 border border-slate-600">$[10; 20)$</th>
            <th class="p-1.5 border border-slate-600">$[20; 30)$</th>
            <th class="p-1.5 border border-slate-600">$[30; 40)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-purple-300">Tần số ($m_i$)</td>
            <td class="p-1.5 border border-slate-600 font-mono">8</td>
            <td class="p-1.5 border border-slate-600 font-mono font-bold text-amber-300">16</td>
            <td class="p-1.5 border border-slate-600 font-mono">12</td>
            <td class="p-1.5 border border-slate-600 font-mono">4</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-purple-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính $Q_1, Q_3$, khoảng tứ phân vị $\Delta_Q$ và Mốt $M_o$ của mẫu số liệu.
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
        "title": "10. LỜI GIẢI VÍ DỤ 3: TÍNH $Q_1, Q_3, \\Delta_Q$ VÀ $M_o$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • LỜI GIẢI CHUẨN XÁC 100% ZERO ERROR",
        "mascotMode": "celebrating",
        "mascotTip": r"$Q_1 = 11,25; Q_3 = 25,0; \Delta_Q = 13,75; M_o \approx 16,67$!",
        "narration": "Đã hết 30 giây. Cỡ mẫu 40 nên n chia 4 bằng 10; 3n chia 4 bằng 30. Tần số tích lũy: nhóm 1 là 8; nhóm 2 là 24; nhóm 3 là 36; nhóm 4 là 40. Nhóm chứa Q_1 là [10; 20): Q_1 bằng 10 cộng 10 trừ 8 chia 16 nhân 10, bằng 10 cộng 1,25 bằng 11,25. Nhóm chứa Q_3 là [20; 30): Q_3 bằng 20 cộng 30 trừ 24 chia 12 nhân 10, bằng 20 cộng 5 bằng 25,0. Khoảng tứ phân vị delta Q bằng 25 trừ 11,25 bằng 13,75. Nhóm chứa mốt là [10; 20) vì có tần số lớn nhất bằng 16. Ta có d_1 bằng 16 trừ 8 bằng 8; d_2 bằng 16 trừ 12 bằng 4. M_o bằng 10 cộng 8 chia 12 nhân 10, xấp xỉ 16,67.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40">
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900 p-2.5 rounded-lg border border-purple-500/30">
        <b class="text-purple-300">1. Tứ phân vị & $\Delta_Q$</b>
        <p class="font-mono text-xs text-slate-300 mt-1">
          • $Q_1 = 10 + \frac{10 - 8}{16} \cdot 10 = 11,25$.<br/>
          • $Q_3 = 20 + \frac{30 - 24}{12} \cdot 10 = 25,00$.<br/>
          • <b class="text-amber-300">$\Delta_Q = 25,00 - 11,25 = 13,75$</b>.
        </p>
      </div>

      <div class="bg-slate-900 p-2.5 rounded-lg border border-amber-500/30">
        <b class="text-amber-300">2. Mốt $M_o$ ($n_m = 16$)</b>
        <p class="font-mono text-xs text-slate-300 mt-1">
          • Nhóm $[10; 20)$: $d_1 = 8, d_2 = 4, h = 10$.<br/>
          • $M_o = 10 + \frac{8}{8 + 4} \cdot 10 = 10 + \frac{20}{3} \approx 16,67$.
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐÁNH GIÁ ĐỘ PHÂN TÁN QUA $\\Delta_Q$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • SO SÁNH ĐỘ ỔN ĐỊNH CỦA HAI MẪU",
        "mascotMode": "thinking",
        "mascotTip": r"Mẫu nào có khoảng tứ phân vị $\Delta_Q$ nhỏ hơn thì dữ liệu tập trung và ổn định hơn!",
        "narration": "Ví dụ 4 là bài toán so sánh độ đồng đều của kết quả học tập giữa hai lớp 11C và 11D. Sau khi kiểm tra chung một đề, điểm số của hai lớp có cùng số trung bình là 7,5 điểm. Tuy nhiên, lớp 11C có khoảng tứ phân vị delta Q bằng 1,2 điểm, trong khi lớp 11D có khoảng tứ phân vị delta Q bằng 3,5 điểm. Em hãy cho biết lớp nào có lực học đồng đều và ổn định hơn? Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Tư duy phân tích dữ liệu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      Kết quả thi môn Toán của hai lớp 11C và 11D có các thông số thống kê sau:
    </p>

    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30 text-center">
        <b class="text-cyan-300">Lớp 11C</b>
        <p class="text-slate-300 font-mono mt-1">$\overline{x}_C = 7,5$ điểm<br/><b class="text-emerald-300">$\Delta_{Q_C} = 1,2$ điểm</b></p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border border-purple-500/30 text-center">
        <b class="text-purple-300">Lớp 11D</b>
        <p class="text-slate-300 font-mono mt-1">$\overline{x}_D = 7,5$ điểm<br/><b class="text-rose-300">$\Delta_{Q_D} = 3,5$ điểm</b></p>
      </div>
    </div>

    <p class="text-xs text-indigo-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Dựa vào $\Delta_Q$, so sánh mức độ đồng đều về học lực của học sinh hai lớp.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian suy nghĩ:</span>
    </div>
    <span class="text-base font-black text-indigo-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • Ý NGHĨA QUAN TRỌNG CỦA $\\Delta_Q$",
        "mascotMode": "celebrating",
        "mascotTip": r"Lớp 11C có $\Delta_Q = 1,2 < 3,5$ nên học lực đồng đều hơn hẳn lớp 11D!",
        "narration": "Chúc mừng các em đã đưa ra nhận định chính xác. Mặc dù cả hai lớp đều có cùng số trung bình 7,5 điểm nhưng khoảng tứ phân vị của lớp 11C chỉ là 1,2 điểm, nhỏ hơn rất nhiều so với khoảng tứ phân vị 3,5 điểm của lớp 11D. Điều này chứng minh rằng 50% học sinh ở khoảng giữa của lớp 11C có điểm số rất sát nhau, thể hiện học lực đồng đều và chất lượng giảng dạy ổn định. Ngược lại, lớp 11D có độ phân tán lớn, có sự chênh lệch học lực khá xa giữa các nhóm học sinh. Như vậy chúng ta đã khép lại Mục 1. Hãy cùng bước sang Mục 2 để rèn luyện 4 dạng toán thực tế trọng tâm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Kết luận phân tích:</div>
    <p class="text-xs text-slate-300 leading-relaxed">
      • Vì $\Delta_{Q_C} = 1,2 < \Delta_{Q_D} = 3,5$ nên độ phân tán điểm số của học sinh lớp 11C nhỏ hơn.<br/>
      • <b>Kết luận:</b> Học sinh <b>Lớp 11C</b> có học lực đồng đều và ổn định hơn so với Lớp 11D.
    </p>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>⭐</span> <span>BÀI HỌC CỐT LÕI MỤC 1</span>
      </div>
      <p class="text-slate-300">
        Không chỉ nhìn vào số trung bình $\overline{x}$, nhà thống kê luôn cần quan sát <b>khoảng tứ phân vị $\Delta_Q$</b> để đánh giá chính xác độ rủi ro, sự biến thiên và tính ổn định của hệ thống!
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 2: RÈN LUYỆN 4 DẠNG TOÁN TRỌNG TÂM & BÀI TOÁN THỰC TẾ THỐNG KÊ
# ==============================================================================
ONTAP_C3_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. BẢN ĐỒ 4 DẠNG TOÁN TRỌNG TÂM CHƯƠNG 3",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • ĐỊNH HƯỚNG ÔN THI ĐẠT ĐIỂM TỐI ĐA",
        "mascotMode": "pointer",
        "mascotTip": r"Nắm vững 4 dạng toán: Ghép nhóm số liệu thô; Tứ phân vị; Bài toán Mốt kinh doanh; So sánh mẫu!",
        "narration": "Chào mừng các em đến với Mục 2: Rèn luyện 4 dạng toán trọng tâm và bài toán thực tế thống kê. Trong các đề kiểm tra định kì và đề thi tốt nghiệp THPT, các câu hỏi về mẫu số liệu ghép nhóm luôn tập trung vào 4 dạng toán chính: Dạng 1: Chuyển mẫu số liệu thô sang ghép nhóm và tính số trung bình; Dạng 2: Tính bộ ba tứ phân vị và phân loại chất lượng đối tượng; Dạng 3: Tính mốt để tối ưu hóa quy mô kinh doanh thương mại; Dạng 4: So sánh, đối chiếu và phân tích độ ổn định giữa hai tập dữ liệu độc lập.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-900/60 to-emerald-900/40 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-teal-500/20 text-teal-300 font-bold text-xs rounded uppercase">Chiến lược thực chiến</span>
      <h3 class="text-lg font-bold text-teal-200">Bản Đồ 4 Dạng Toán Trọng Tâm Ôn Thi</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs mt-3">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-emerald-400">
        <b class="text-emerald-300">Dạng 1: Chuyển đổi thô sang nhóm</b>
        <p class="text-slate-300 mt-1">Đếm tần số, chọn độ dài $h$, lập bảng và tính nhanh $\overline{x}$.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-cyan-400">
        <b class="text-cyan-300">Dạng 2: Phân vị & Xếp hạng</b>
        <p class="text-slate-300 mt-1">Tính $M_e, Q_1, Q_3$ để phân loại top 25%, 50%, 75% thành tích.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-amber-400">
        <b class="text-amber-300">Dạng 3: Mốt & Bài toán kinh doanh</b>
        <p class="text-slate-300 mt-1">Tìm giá trị phổ biến nhất để nhập hàng, tối ưu giờ phục vụ.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-purple-400">
        <b class="text-purple-300">Dạng 4: So sánh & Đánh giá rủi ro</b>
        <p class="text-slate-300 mt-1">So sánh $\overline{x}$ và $\Delta_Q$ giữa hai nhà máy, hai phương án.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. DẠNG 1: CHUYỂN MẪU THÔ SANG GHÉP NHÓM & TÍNH $\\overline{x}$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KỸ THUẬT PHÂN TỔ DỮ LIỆU ĐỀ THI",
        "mascotMode": "explaining",
        "mascotTip": r"Đếm cẩn thận từng giá trị thuộc nửa khoảng $[a; b)$ không để sót số liệu nào!",
        "narration": "Ở Dạng 1, đề bài thường cung cấp một dãy số liệu thô gồm từ 20 đến 30 giá trị chưa được sắp xếp. Để giải dạng toán này, bước một: tìm giá trị nhỏ nhất và lớn nhất. Bước hai: gom các số liệu vào các nhóm theo độ dài quy định. Bước ba: đếm chính xác tần số m_i của từng nhóm, kiểm tra tổng các m_i phải bằng đúng cỡ mẫu n. Bước bốn: tìm giá trị đại diện c_i và tính số trung bình x_ngang.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="font-bold text-emerald-300 text-sm mb-2">Quy trình 3 bước chuẩn hóa Dạng 1</div>
    <div class="grid grid-cols-3 gap-2.5 text-center">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">1. Đếm tần số</b>
        <p class="text-slate-300 mt-1">Phân loại các số liệu thuộc nửa khoảng $[a_i; a_{i+1})$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">2. Lập bảng nhóm</b>
        <p class="text-slate-300 mt-1">Ghi tần số $m_i$ và tính giá trị đại diện $c_i$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-teal-400">
        <b class="text-teal-300">3. Tính $\overline{x}$</b>
        <p class="text-slate-300 mt-1">Áp dụng công thức $\overline{x} = \frac{1}{n}\sum m_i c_i$.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1: CHUYỂN 20 SỐ LIỆU ĐIỂM THI SANG GHÉP NHÓM",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • THỰC CHIẾN PHÂN TỔ DỮ LIỆU",
        "mascotMode": "thinking",
        "mascotTip": r"Chia làm 3 nhóm: $[4; 6)$, $[6; 8)$, $[8; 10]$. Đếm tần số từng nhóm!",
        "narration": "Ví dụ 1: Điểm thi môn Toán của 20 học sinh gồm các giá trị: 4,5; 5,0; 5,2; 5,5; 5,8; 6,0; 6,2; 6,5; 6,5; 6,8; 7,0; 7,2; 7,5; 7,8; 8,0; 8,2; 8,5; 8,8; 9,0; và 9,5. Hãy gom mẫu số liệu trên vào 3 nhóm: từ 4 đến 6; từ 6 đến 8; và từ 8 đến 10. Sau đó tính số trung bình của mẫu ghép nhóm. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 1 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <div class="bg-slate-900 p-2 rounded text-xs text-slate-200 font-mono mb-2">
      4,5 ; 5,0 ; 5,2 ; 5,5 ; 5,8 ; 6,0 ; 6,2 ; 6,5 ; 6,5 ; 6,8 ; 7,0 ; 7,2 ; 7,5 ; 7,8 ; 8,0 ; 8,2 ; 8,5 ; 8,8 ; 9,0 ; 9,5
    </div>
    <p class="text-xs text-amber-200 font-semibold">
      <b>Yêu cầu:</b> Lập bảng tần số ghép 3 nhóm $[4; 6)$, $[6; 8)$, $[8; 10]$ và tính số trung bình $\overline{x}$.
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
        "title": "4. LỜI GIẢI VÍ DỤ 1: BẢNG GHÉP NHÓM VÀ TÍNH $\\overline{x}$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT QUẢ ĐẸP $\\overline{x} = 7,1$ ĐIỂM",
        "mascotMode": "celebrating",
        "mascotTip": r"Tần số 3 nhóm là 5; 9; 6. Tổng tích là 142 chia 20 ra 7,1 điểm!",
        "narration": "Hết thời gian. Ta đếm: nhóm từ 4 đến 6 có 5 giá trị với đại diện là 5,0; nhóm từ 6 đến 8 có 9 giá trị với đại diện là 7,0; nhóm từ 8 đến 10 có 6 giá trị với đại diện là 9,0. Tổng tần số là 5 cộng 9 cộng 6 bằng 20, khớp đúng cỡ mẫu. Tổng tích m_i nhân c_i bằng 5 nhân 5 cộng 9 nhân 7 cộng 6 nhân 9 bằng 25 cộng 63 cộng 54 bằng 142. Lấy 142 chia cho 20, ta được điểm trung bình bằng 7,1 điểm.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1 border border-slate-600">Nhóm điểm</th>
            <th class="p-1 border border-slate-600">$[4; 6)$</th>
            <th class="p-1 border border-slate-600">$[6; 8)$</th>
            <th class="p-1 border border-slate-600">$[8; 10]$</th>
            <th class="p-1 border border-slate-600 bg-emerald-950 text-emerald-300 font-bold">Tổng</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-cyan-300">Đại diện $c_i$</td>
            <td class="p-1 border border-slate-600 font-mono">5</td>
            <td class="p-1 border border-slate-600 font-mono">7</td>
            <td class="p-1 border border-slate-600 font-mono">9</td>
            <td class="p-1 border border-slate-600">—</td>
          </tr>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-emerald-300">Tần số $m_i$</td>
            <td class="p-1 border border-slate-600 font-mono">5</td>
            <td class="p-1 border border-slate-600 font-mono">9</td>
            <td class="p-1 border border-slate-600 font-mono">6</td>
            <td class="p-1 border border-slate-600 font-mono font-bold text-emerald-300">20</td>
          </tr>
          <tr class="bg-slate-900 text-amber-300">
            <td class="p-1 border border-slate-600 font-semibold text-amber-300">Tích $m_i c_i$</td>
            <td class="p-1 border border-slate-600 font-mono">25</td>
            <td class="p-1 border border-slate-600 font-mono">63</td>
            <td class="p-1 border border-slate-600 font-mono">54</td>
            <td class="p-1 border border-slate-600 font-mono font-bold text-amber-200">142</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-2 text-center text-xs text-slate-200 font-mono">
      $$\overline{x} = \frac{142}{20} = 7,1\text{ (điểm)}$$
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. DẠNG 2: BÀI TOÁN XẾP HẠNG & PHÂN LOẠI ĐỐI TƯỢNG",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • ỨNG DỤNG TỨ PHÂN VỊ TRONG QUẢN LÝ",
        "mascotMode": "explaining",
        "mascotTip": r"Top 25% cao nhất bắt đầu từ $Q_3$; 50% ở giữa nằm từ $Q_1$ đến $Q_3$!",
        "narration": "Ở Dạng 2, các bài toán thường yêu cầu tìm ngưỡng phân loại học bổng, mức thưởng hoặc tiêu chuẩn tuyển sinh. Để tìm ngưỡng cho top 25% xuất sắc nhất, ta tính tứ phân vị thứ ba Q_3. Để tìm ngưỡng cho 50% trung tâm, ta tính khoảng từ Q_1 đến Q_3. Còn nếu bài toán yêu cầu tìm nhóm 25% có kết quả thấp nhất cần bồi dưỡng thêm thì đó chính là các cá thể có giá trị nhỏ hơn Q_1.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-3.5 rounded-xl border border-purple-500/30 text-xs">
    <div class="font-bold text-purple-300 text-sm mb-2">Bản đồ phân loại dữ liệu bằng Tứ phân vị</div>
    <div class="grid grid-cols-3 gap-2.5 text-center">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-rose-400">
        <b class="text-rose-300">Nhóm 25% thấp nhất</b>
        <p class="text-slate-300 mt-1 font-mono">Giá trị $< Q_1$</p>
        <span class="text-slate-400 text-xs">Cần hỗ trợ, bồi dưỡng</span>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">50% ở trung tâm</b>
        <p class="text-slate-300 mt-1 font-mono">$Q_1 \le$ Giá trị $\le Q_3$</p>
        <span class="text-slate-400 text-xs">Độ rộng bằng $\Delta_Q$</span>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">Top 25% xuất sắc</b>
        <p class="text-slate-300 mt-1 font-mono">Giá trị $\ge Q_3$</p>
        <span class="text-slate-400 text-xs">Khen thưởng, cấp học bổng</span>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2: XÉT HỌC BỔNG BẰNG TỨ PHÂN VỊ $Q_3$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • BÀI TOÁN XÁC ĐỊNH NGƯỠNG ĐIỂM",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 80 \Rightarrow 3n/4 = 60$. Tìm nhóm chứa $Q_3$ và tính giá trị chính xác!",
        "narration": "Ví dụ 2: Thống kê điểm thi môn tiếng Anh của 80 thí sinh: nhóm từ 5 đến 6 có 10 bạn; nhóm từ 6 đến 7 có 25 bạn; nhóm từ 7 đến 8 có 30 bạn; và nhóm từ 8 đến 9 có 15 bạn. Hội đồng thi quyết định trao học bổng cho 25% thí sinh có điểm cao nhất. Hãy xác định ngưỡng điểm tối thiểu để được nhận học bổng. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-bold rounded">Ví dụ 2 (15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Khoảng điểm</th>
            <th class="p-1.5 border border-slate-600">$[5; 6)$</th>
            <th class="p-1.5 border border-slate-600">$[6; 7)$</th>
            <th class="p-1.5 border border-slate-600">$[7; 8)$</th>
            <th class="p-1.5 border border-slate-600">$[8; 9)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-purple-300">Số thí sinh</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
            <td class="p-1.5 border border-slate-600 font-mono">25</td>
            <td class="p-1.5 border border-slate-600 font-mono">30</td>
            <td class="p-1.5 border border-slate-600 font-mono">15</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-purple-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính tứ phân vị thứ ba $Q_3$ để xác định điểm sàn nhận học bổng (top 25%).
    </p>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian tính toán:</span>
    </div>
    <span class="text-base font-black text-purple-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. LỜI GIẢI VÍ DỤ 2: ĐIỂM SÀN HỌC BỔNG $Q_3$",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT QUẢ $Q_3 = 7,83$ ĐIỂM",
        "mascotMode": "celebrating",
        "mascotTip": r"$Q_3 = 7 + \frac{60 - 35}{30} \cdot 1 = 7 + \frac{25}{30} \approx 7,83$ điểm!",
        "narration": "Hết thời gian. Cỡ mẫu 80 nên vị trí 3n chia 4 bằng 60. Tần số tích lũy: nhóm 1 là 10; nhóm 2 là 35; nhóm 3 là 65. Vì 35 nhỏ hơn 60 và 60 nhỏ hơn hoặc bằng 65 nên nhóm chứa Q_3 là nhóm từ 7 đến 8 điểm. Đầu mút trái u_q bằng 7; độ dài h bằng 1; tần số tích lũy trước C bằng 35; tần số nhóm n_q bằng 30. Thay vào công thức, Q_3 bằng 7 cộng với phân số 60 trừ 35 chia 30, nhân 1. Ta được 7 cộng 25 phần 30, xấp xỉ 7,83 điểm. Vậy thí sinh đạt từ 7,83 điểm trở lên sẽ được nhận học bổng.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40">
    <div class="space-y-1 text-xs text-slate-300 font-mono">
      <p>• Vị trí top 25%: $\frac{3n}{4} = \frac{3 \cdot 80}{4} = 60$.</p>
      <p>• $cf_1 = 10; cf_2 = 35 < 60 \le cf_3 = 65 \Rightarrow$ Nhóm chứa $Q_3$ là $[7; 8)$.</p>
      <div class="text-sm font-bold text-purple-200 text-center bg-slate-900 p-2 rounded">
        $$Q_3 = 7 + \frac{60 - 35}{30} \cdot 1 = 7 + \frac{25}{30} = 7 + \frac{5}{6} \approx 7,83\text{ (điểm)}$$
      </div>
      <p class="text-emerald-300 text-center font-sans font-semibold mt-1">
        <b>Kết luận:</b> Thí sinh có điểm thi từ <b>7,83 điểm</b> trở lên sẽ được trao học bổng.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. DẠNG 3: BÀI TOÁN KINH DOANH & TỐI ƯU BẰNG MỐT",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • ỨNG DỤNG THỰC TẾ TRONG THƯƠNG MẠI",
        "mascotMode": "explaining",
        "mascotTip": r"Mốt $M_o$ chỉ ra giá trị được ưa chuộng nhiều nhất, giảm thiểu tồn kho và tăng doanh thu!",
        "narration": "Ở Dạng 3, bài toán ứng dụng Mốt trong thương mại đóng vai trò vô cùng thiết thực. Đối với các nhà sản xuất giày dép, may mặc hay kinh doanh bán lẻ, sản xuất mẫu mã kích thước nào nhiều nhất để không bị tồn kho ứ đọng vốn luôn là bài toán sống còn. Khi đó, Mốt M_o sẽ chỉ ra chính xác kích cỡ tối ưu cần sản xuất với sản lượng lớn nhất.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-amber-500/40 text-xs">
    <div class="font-bold text-amber-300 text-sm mb-2">Ý nghĩa kinh tế của Mốt Mẫu Ghép Nhóm</div>
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-400">
        <b class="text-amber-300">Tối ưu hàng tồn kho</b>
        <p class="text-slate-300 mt-1">Tránh nhập tràn lan các kích cỡ ít người mua; tập trung 60-70% vốn vào khoảng kích cỡ quanh $M_o$.</p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-l-4 border-emerald-400">
        <b class="text-emerald-300">Bố trí nguồn lực</b>
        <p class="text-slate-300 mt-1">Tập trung nhân lực, máy móc và dịch vụ chăm sóc vào đúng khung giờ cao điểm do $M_o$ xác định.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 3: TƯ VẤN NHẬP KHO GIÀY THỂ THAO",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • BÀI TOÁN KINH DOANH THỰC TẾ 30 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Tần số lớn nhất là 60 thuộc nhóm $[250; 260)$. Tính $d_1 = 60 - 35 = 25; d_2 = 60 - 40 = 20$!",
        "narration": "Ví dụ 3 là bài toán quản trị kho hàng của một cửa hàng giày thể thao. Khảo sát chiều dài bàn chân của 160 khách hàng nam: từ 230 đến 240 mm có 10 người; từ 240 đến 250 mm có 35 người; từ 250 đến 260 mm có 60 người; từ 260 đến 270 mm có 40 người; và từ 270 đến 280 mm có 15 người. Hãy tính mốt chiều dài bàn chân và cho biết cửa hàng nên nhập nhiều giày tương ứng với chiều dài chân nào nhất. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Ví dụ 3 (30s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng thực tế</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1.5 border border-slate-600">Chiều dài (mm)</th>
            <th class="p-1.5 border border-slate-600">$[230; 240)$</th>
            <th class="p-1.5 border border-slate-600">$[240; 250)$</th>
            <th class="p-1.5 border border-slate-600">$[250; 260)$</th>
            <th class="p-1.5 border border-slate-600">$[260; 270)$</th>
            <th class="p-1.5 border border-slate-600">$[270; 280)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1.5 border border-slate-600 font-semibold text-amber-300">Số khách</td>
            <td class="p-1.5 border border-slate-600 font-mono">10</td>
            <td class="p-1.5 border border-slate-600 font-mono">35</td>
            <td class="p-1.5 border border-slate-600 font-mono font-bold text-amber-400">60</td>
            <td class="p-1.5 border border-slate-600 font-mono">40</td>
            <td class="p-1.5 border border-slate-600 font-mono">15</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính mốt $M_o$ và tư vấn cỡ giày bán chạy nhất cho chủ shop.
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
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI VÍ DỤ 3: TƯ VẤN QUY HOẠCH KHO GIÀY",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT QUẢ $M_o \\approx 255,56$ MM (SIZE 41)",
        "mascotMode": "celebrating",
        "mascotTip": r"$M_o = 250 + \frac{25}{25 + 20} \cdot 10 = 250 + \frac{250}{45} \approx 255,56$ mm!",
        "narration": "Hết thời gian. Tần số lớn nhất là 60 thuộc nhóm từ 250 đến 260 mm. Ta có đầu mút trái u_m bằng 250; độ dài h bằng 10. Độ chênh lệch tần số: d_1 bằng 60 trừ 35 bằng 25; d_2 bằng 60 trừ 40 bằng 20. Áp dụng công thức, M_o bằng 250 cộng với phân số 25 chia cho 25 cộng 20, nhân 10. Ta được 250 cộng 250 chia 45, xấp xỉ 255,56 mm. Kích thước này tương ứng với cỡ giày 41 tiêu chuẩn. Cửa hàng nên ưu tiên nhập nhiều giày size 41 nhất.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40">
    <div class="space-y-1 text-xs text-slate-300 font-mono">
      <p>• Nhóm mốt: $[250; 260)$ có $n_m = 60$. $u_m = 250, h = 10$.</p>
      <p>• $d_1 = 60 - 35 = 25$; $d_2 = 60 - 40 = 20$.</p>
      <div class="text-sm font-bold text-amber-200 text-center bg-slate-900 p-2 rounded">
        $$M_o = 250 + \frac{25}{25 + 20} \cdot 10 = 250 + \frac{250}{45} \approx 255,56\text{ (mm)}$$
      </div>
      <p class="text-emerald-300 text-center font-sans font-semibold mt-1">
        <b>Tư vấn kinh doanh:</b> Chiều dài bàn chân phổ biến nhất là <b>255,56 mm</b> (tương đương Size 41). Shop nên tập trung nhập nhiều giày Size 41 nhất.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. VÍ DỤ 4: ĐÁNH GIÁ ĐỘ BỀN HAI DÒNG LỐP XE",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • BÀI TOÁN KIỂM ĐỊNH CHẤT LƯỢNG",
        "mascotMode": "thinking",
        "mascotTip": r"Dòng lốp nào có tuổi thọ trung bình cao hơn và khoảng tứ phân vị hẹp hơn sẽ chất lượng hơn!",
        "narration": "Ví dụ 4 là bài toán kiểm định công nghiệp của hãng sản xuất xe hơi. Thử nghiệm độ bền của hai dòng lốp xe X và Y thu được kết quả: Dòng X có quãng đường chạy trung bình là 65 nghìn km với khoảng tứ phân vị delta Q là 4 nghìn km. Dòng Y có quãng đường chạy trung bình là 62 nghìn km với khoảng tứ phân vị delta Q là 10 nghìn km. Hãy phân tích và đưa ra lời khuyên chọn dòng lốp xe nào cho khách hàng. Các em có 30 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded">Ví dụ 4 (30s)</span>
      <span class="text-xs text-slate-400">Tư duy kỹ thuật công nghiệp</span>
    </div>

    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30 text-center">
        <b class="text-cyan-300">Dòng lốp xe X</b>
        <p class="text-slate-300 font-mono mt-1">
          $\overline{x}_X = 65\text{ nghìn km}$<br/>
          <b class="text-emerald-300">$\Delta_{Q_X} = 4\text{ nghìn km}$</b>
        </p>
      </div>
      <div class="bg-slate-900/80 p-2.5 rounded-lg border border-purple-500/30 text-center">
        <b class="text-purple-300">Dòng lốp xe Y</b>
        <p class="text-slate-300 font-mono mt-1">
          $\overline{x}_Y = 62\text{ nghìn km}$<br/>
          <b class="text-rose-300">$\Delta_{Q_Y} = 10\text{ nghìn km}$</b>
        </p>
      </div>
    </div>

    <p class="text-xs text-cyan-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Đưa ra đánh giá toàn diện về tuổi thọ trung bình và độ tin cậy của hai dòng lốp xe.
    </p>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian phân tích:</span>
    </div>
    <span class="text-base font-black text-cyan-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT LUẬN TOÀN DIỆN VỀ ĐỘ BỀN VÀ ĐỘ TIN CẬY",
        "mascotMode": "celebrating",
        "mascotTip": r"Dòng X vừa có tuổi thọ trung bình cao hơn vừa có chất lượng ổn định tin cậy hơn hẳn!",
        "narration": "Chúc mừng các em. Phân tích số liệu cho thấy hai điểm vượt trội của Dòng lốp X. Thứ nhất, tuổi thọ trung bình của dòng X là 65 nghìn km, cao hơn 62 nghìn km của dòng Y. Thứ hai, khoảng tứ phân vị của dòng X chỉ là 4 nghìn km, nhỏ hơn rất nhiều so với 10 nghìn km của dòng Y. Điều này chứng minh rằng chất lượng sản xuất dòng X cực kì đồng đều và ổn định, ít có nguy cơ bị hỏng hóc bất thường. Lời khuyên tối ưu là nên chọn Dòng lốp X. Chúng ta đã kết thúc Mục 2 và sẵn sàng bước sang Mục 3 để chinh phục Kỹ năng Casio và Đề tổng ôn chuẩn Bộ GD&ĐT.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Đánh giá kỹ thuật đa chiều:</div>
    <ul class="text-xs text-slate-300 space-y-1">
      <li>• <b>Tuổi thọ trung bình:</b> $\overline{x}_X = 65 > \overline{x}_Y = 62$ (Dòng X bền hơn 3.000 km).</li>
      <li>• <b>Độ ổn định & rủi ro:</b> $\Delta_{Q_X} = 4 < \Delta_{Q_Y} = 10$ (Dòng X ổn định gấp 2,5 lần dòng Y).</li>
      <li>• <b>Khuyến nghị tiêu dùng:</b> Chọn <b>Dòng lốp xe X</b> vì vừa bền hơn vừa an toàn tin cậy hơn!</li>
    </ul>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>⭐</span> <span>TỔNG KẾT MỤC 2 CẦN NHỚ</span>
      </div>
      <p class="text-slate-300">
        4 dạng toán trọng tâm đã được làm chủ trọn vẹn: Ghép nhóm số liệu thô; Phân vị xét học bổng; Mốt quy hoạch kho hàng; và So sánh đối chiếu hai mẫu dữ liệu!
      </p>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# MỤC 3: CẢNH BÁO BẪY TRẮC NGHIỆM, KỸ NĂNG CASIO 580 & ĐỀ TỔNG ÔN CHUẨN BỘ GD&ĐT
# ==============================================================================
ONTAP_C3_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. BỘ 3 BẪY KINH ĐIỂN CẦN TRÁNH TRONG PHÒNG THI",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • BẢO TOÀN ĐIỂM SỐ TUYỆT ĐỐI",
        "mascotMode": "pointer",
        "mascotTip": r"Đừng để mất điểm oan vì: Nhầm tần số tích lũy; Quên nhân độ dài h; Nhầm nhóm chứa mốt!",
        "narration": "Chào mừng các em đến với Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng bấm máy tính Casio fx-580VN X và Đề tổng ôn chuẩn cấu trúc của Bộ GD&ĐT. Trong các kì thi trắc nghiệm, các câu hỏi về Chương 3 tuy không quá đánh đố về mặt ý tưởng nhưng lại có rất nhiều bẫy số học tinh vi khiến học sinh mất điểm đáng tiếc. Hãy cùng thầy điểm mặt ba cái bẫy kinh điển nhất.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-rose-950/70 to-slate-900/90 p-3.5 rounded-xl border border-rose-500/40 text-xs">
    <div class="flex items-center gap-2 mb-2">
      <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded uppercase">Cảnh báo phòng thi</span>
      <h3 class="text-base font-bold text-rose-200">3 Cạm Bẫy Trắc Nghiệm Thường Gặp Nhất</h3>
    </div>
    <div class="grid grid-cols-3 gap-2.5 text-xs mt-2">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-rose-400">
        <b class="text-rose-300">Bẫy 1: Nhầm lẫn $C$</b>
        <p class="text-slate-300 mt-1">Lấy $C$ là tần số tích lũy của <i>nhóm hiện tại</i> thay vì <b>nhóm đứng trước</b> ($cf_{m-1}$).</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-amber-400">
        <b class="text-amber-300">Bẫy 2: Quên nhân độ dài $h$</b>
        <p class="text-slate-300 mt-1">Nhiều bạn chỉ tính $u_m + \frac{\dots}{\dots}$ mà quên nhân với độ dài khoảng $h = u_{m+1} - u_m$.</p>
      </div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">Bẫy 3: Nhầm mốt với tần số</b>
        <p class="text-slate-300 mt-1">Khoanh đáp án là tần số lớn nhất $n_{\max}$ thay vì giá trị nội suy $M_o$!</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. KỸ NĂNG CASIO FX-580VN X: MENU 6 1-VARIABLE",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH SỐ TRUNG BÌNH SIÊU TỐC TRONG 5 GIÂY",
        "mascotMode": "explaining",
        "mascotTip": r"Bật tần số: SHIFT -> MENU -> Cuộn xuống -> 3: Thống kê -> 1: On!",
        "narration": "Để tiết kiệm thời gian và đảm bảo độ chính xác tuyệt đối không bị sai sót cộng trừ, việc sử dụng máy tính Casio fx-580VN X là một vũ khí cực kì lợi hại. Bước 1: Kích hoạt cột tần số: bấm SHIFT, MENU, bấm phím cuộn xuống, chọn mục 3 Thống kê, rồi bấm phím 1 để Bật tần số. Bước 2: Vào chức năng thống kê 1 biến: bấm MENU, phím 6, phím 1. Cột x nhập các giá trị đại diện c_i, cột FREQ nhập các tần số m_i tương ứng. Bước 3: Bấm phím OPTN rồi chọn mục 2 hoặc 3, máy sẽ hiển thị ngay số trung bình x_ngang và cỡ mẫu n chỉ trong tích tắc.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs">
    <div class="font-bold text-cyan-300 text-sm mb-2 flex items-center gap-2">
      <span>📟</span> <span>Quy Trình Bấm Máy Tính Casio fx-580VN X Chuẩn Nhất</span>
    </div>
    <div class="grid grid-cols-3 gap-2.5">
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400">
        <b class="text-emerald-300">Bước 1: Bật cột FREQ</b>
        <p class="text-slate-300 mt-1 font-mono text-xs">
          SHIFT ➔ MENU ➔ ▼ ➔ 3 (Thống kê) ➔ 1 (On).
        </p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400">
        <b class="text-cyan-300">Bước 2: Nhập dữ liệu</b>
        <p class="text-slate-300 mt-1 font-mono text-xs">
          MENU ➔ 6 ➔ 1 (1-Variable).<br/>
          Cột X: nhập $c_i$; Cột FREQ: nhập $m_i$.
        </p>
      </div>
      <div class="bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400">
        <b class="text-purple-300">Bước 3: Xuất kết quả</b>
        <p class="text-slate-300 mt-1 font-mono text-xs">
          Bấm OPTN ➔ 2 (hoặc 3).<br/>
          Đọc ngay $\overline{x}, n, \sum x$ tức thì!
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. ĐỀ TỔNG ÔN - PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (CÂU 1)",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • BẮT ĐẦU VỚI CÂU HỎI NHẬN BIẾT 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Giá trị đại diện của nhóm $[150; 160)$ là $(150 + 160)/2 = 155$!",
        "narration": "Bắt đầu với Phần I của đề thi tổng hợp: Trắc nghiệm nhiều lựa chọn. Câu 1: Cho mẫu số liệu ghép nhóm về chiều cao của học sinh có nhóm thứ hai là nửa khoảng từ 150 đến 160 cm. Giá trị đại diện của nhóm này là: Phương án A: 150; Phương án B: 155; Phương án C: 160; Phương án D: 10. Các em có 15 giây chọn đáp án.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Câu 1 (Phần I - 15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Nhận biết</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 1:</b> Trong mẫu số liệu ghép nhóm về chiều cao học sinh, nhóm thứ hai là nửa khoảng $[150; 160)$. Giá trị đại diện của nhóm này là bao nhiêu?
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>A.</b> 150</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer"><b>B.</b> 155</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>C.</b> 160</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>D.</b> 10</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. LỜI GIẢI CÂU 1: ĐÁP ÁN B CHÍNH XÁC",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • CÔNG THỨC GIÁ TRỊ ĐẠI DIỆN",
        "mascotMode": "celebrating",
        "mascotTip": r"Đáp án chính xác là B: 155 cm!",
        "narration": "Hết thời gian. Đáp án đúng là B. Giá trị đại diện của nhóm nửa khoảng từ a đến b là trung bình cộng hai đầu mút: 150 cộng 160 chia 2 bằng 155. Rất nhanh và chính xác.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải Câu 1:</div>
    <p class="text-slate-300">
      Áp dụng công thức giá trị đại diện: $c = \frac{150 + 160}{2} = 155\text{ (cm)}$.<br/>
      <span class="text-emerald-300 font-bold font-mono">➔ Chọn đáp án B.</span>
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. ĐỀ TỔNG ÔN - PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (CÂU 2)",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÌM NHÓM CHỨA TRUNG VỊ 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 40 \Rightarrow n/2 = 20$. Tần số tích lũy: 6, 18, 30... Nhóm nào chứa 20?",
        "narration": "Câu 2: Cho bảng tần số ghép nhóm cỡ mẫu n bằng 40 gồm các nhóm: [0; 5) có tần số 6; [5; 10) có tần số 12; [10; 15) có tần số 12; và [15; 20) có tần số 10. Nhóm chứa trung vị là: Phương án A: [0; 5); Phương án B: [5; 10); Phương án C: [10; 15); Phương án D: [15; 20). Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Câu 2 (Phần I - 15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Thông hiểu</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-2">
      <b>Câu 2:</b> Khảo sát mẫu số liệu cỡ $n = 40$ có bảng phân phối tần số:
    </p>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1 border border-slate-600">Nhóm</th>
            <th class="p-1 border border-slate-600">$[0; 5)$</th>
            <th class="p-1 border border-slate-600">$[5; 10)$</th>
            <th class="p-1 border border-slate-600">$[10; 15)$</th>
            <th class="p-1 border border-slate-600">$[15; 20)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-emerald-300">Tần số</td>
            <td class="p-1 border border-slate-600 font-mono">6</td>
            <td class="p-1 border border-slate-600 font-mono">12</td>
            <td class="p-1 border border-slate-600 font-mono">12</td>
            <td class="p-1 border border-slate-600 font-mono">10</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center mt-3">
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>A.</b> $[0; 5)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>B.</b> $[5; 10)$</div>
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer"><b>C.</b> $[10; 15)$</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>D.</b> $[15; 20)$</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. LỜI GIẢI CÂU 2: ĐÁP ÁN C CHÍNH XÁC",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TẦN SỐ TÍCH LŨY VƯỢT MỐC $N/2 = 20$",
        "mascotMode": "celebrating",
        "mascotTip": r"$cf_1 = 6; cf_2 = 18 < 20 \le cf_3 = 30 \Rightarrow$ Chọn C: $[10; 15)$!",
        "narration": "Hết thời gian. Đáp án đúng là C. Ta có n chia 2 bằng 20. Tần số tích lũy: nhóm 1 có cf bằng 6; nhóm 2 có cf bằng 6 cộng 12 bằng 18; nhóm 3 có cf bằng 18 cộng 12 bằng 30. Vì 18 nhỏ hơn 20 và 20 nhỏ hơn hoặc bằng 30 nên nhóm chứa trung vị là nhóm thứ ba, tức nửa khoảng từ 10 đến 15. Chọn C.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải Câu 2:</div>
    <p class="text-slate-300 font-mono">
      • $\frac{n}{2} = \frac{40}{2} = 20$.<br/>
      • $cf_1 = 6$; $cf_2 = 18 < 20 \le cf_3 = 30$.<br/>
      ➔ Nhóm chứa trung vị là <b>$[10; 15)$</b>.<br/>
      <span class="text-emerald-300 font-bold font-sans">➔ Chọn đáp án C.</span>
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. ĐỀ TỔNG ÔN - PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (CÂU 3)",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH MỐT MẪU SỐ LIỆU GHÉP NHÓM 15 GIÂY",
        "mascotMode": "thinking",
        "mascotTip": r"Tần số lớn nhất là 18 thuộc $[10; 20)$. $d_1 = 18 - 8 = 10; d_2 = 18 - 14 = 4$!",
        "narration": "Câu 3: Bảng tần số ghép nhóm có nhóm chứa mốt là [10; 20) với tần số 18. Tần số nhóm liền trước là 8 và tần số nhóm liền sau là 14. Giá trị mốt M_o xấp xỉ bằng: Phương án A: 17,14; Phương án B: 15,50; Phương án C: 16,67; Phương án D: 18,00. Các em có 15 giây.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Câu 3 (Phần I - 15s)</span>
      <span class="text-xs text-slate-400">Mức độ: Vận dụng</span>
    </div>
    <p class="text-xs text-slate-200 leading-relaxed mb-3">
      <b>Câu 3:</b> Cho nhóm chứa mốt là $[10; 20)$ với $n_m = 18$. Biết nhóm đứng trước có tần số $n_{m-1} = 8$ và nhóm đứng sau có tần số $n_{m+1} = 14$. Giá trị mốt $M_o$ xấp xỉ bằng:
    </p>

    <div class="grid grid-cols-4 gap-2 text-xs font-mono text-center">
      <div class="p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer"><b>A.</b> 17,14</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>B.</b> 15,50</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>C.</b> 16,67</div>
      <div class="p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer"><b>D.</b> 18,00</div>
    </div>
  </div>

  <div class="countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian chọn đáp án:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">15 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. LỜI GIẢI CÂU 3: ĐÁP ÁN A CHÍNH XÁC",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH TOÁN $M_o \\approx 17,14$",
        "mascotMode": "celebrating",
        "mascotTip": r"$M_o = 10 + \frac{10}{10 + 4} \cdot 10 = 10 + \frac{100}{14} \approx 17,14$!",
        "narration": "Hết thời gian. Đáp án đúng là A. Ta có u_m bằng 10; độ dài h bằng 10. Chênh lệch d_1 bằng 18 trừ 8 bằng 10; d_2 bằng 18 trừ 14 bằng 4. Áp dụng công thức, M_o bằng 10 cộng 10 chia 10 cộng 4, nhân 10. Ta được 10 cộng 100 chia 14, xấp xỉ 17,14. Chọn A.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải Câu 3:</div>
    <p class="text-slate-300 font-mono">
      • $d_1 = 18 - 8 = 10$; $d_2 = 18 - 14 = 4$; $h = 10$.<br/>
      • $M_o = 10 + \frac{10}{10 + 4} \cdot 10 = 10 + \frac{100}{14} \approx 17,14$.<br/>
      <span class="text-emerald-300 font-bold font-sans">➔ Chọn đáp án A.</span>
    </p>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. ĐỀ TỔNG ÔN - PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • ĐỊNH DẠNG ĐỀ THI MỚI CHUẨN BỘ GD&ĐT",
        "mascotMode": "thinking",
        "mascotTip": r"Xét từng mệnh đề a, b, c, d độc lập: a) n=50; b) Nhóm Me; c) Số trung bình; d) Mốt Mo!",
        "narration": "Tiếp theo là dạng câu hỏi Trắc nghiệm Đúng/Sai thuộc Phần II của cấu trúc đề thi mới. Cho bảng phân phối tần số gồm 4 nhóm: [10; 20) có 8; [20; 30) có 20; [30; 40) có 16; và [40; 50) có 6. Hãy xét tính đúng sai của 4 mệnh đề sau: Ý a: Cỡ mẫu của mẫu số liệu là n bằng 50; Ý b: Nhóm chứa trung vị là nửa khoảng từ 20 đến 30; Ý c: Số trung bình của mẫu số liệu là 28,6; Ý d: Mốt của mẫu số liệu là 27,5. Các em có 30 giây suy nghĩ.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded">Câu Hỏi Phần II (Đúng/Sai - 30s)</span>
      <span class="text-xs text-slate-400">Chuẩn cấu trúc 4 ý Bộ GD&ĐT</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1 border border-slate-600">Nhóm</th>
            <th class="p-1 border border-slate-600">$[10; 20)$</th>
            <th class="p-1 border border-slate-600">$[20; 30)$</th>
            <th class="p-1 border border-slate-600">$[30; 40)$</th>
            <th class="p-1 border border-slate-600">$[40; 50)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-emerald-300">Tần số ($m_i$)</td>
            <td class="p-1 border border-slate-600 font-mono">8</td>
            <td class="p-1 border border-slate-600 font-mono font-bold text-amber-300">20</td>
            <td class="p-1 border border-slate-600 font-mono">16</td>
            <td class="p-1 border border-slate-600 font-mono">6</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-2 space-y-1 text-xs text-slate-200">
      <p><b>a)</b> Cỡ mẫu của mẫu số liệu trên là $n = 50$.</p>
      <p><b>b)</b> Nhóm chứa trung vị là nhóm $[20; 30)$.</p>
      <p><b>c)</b> Số trung bình của mẫu số liệu trên bằng $28,6$.</p>
      <p><b>d)</b> Mốt của mẫu số liệu trên là $M_o = 27,5$.</p>
    </div>
  </div>

  <div class="countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30">
    <div class="flex items-center gap-2">
      <span class="text-lg">⏳</span>
      <span class="text-xs text-indigo-300 font-medium">Thời gian thẩm định:</span>
    </div>
    <span class="text-base font-black text-amber-400 font-mono tracking-wider">30 GIÂY</span>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. LỜI GIẢI CHI TIẾT PHẦN II: THẨM ĐỊNH 4 MỆNH ĐỀ",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • ĐÁP ÁN: a-ĐÚNG, b-ĐÚNG, c-SAI, d-ĐÚNG",
        "mascotMode": "celebrating",
        "mascotTip": r"Mệnh đề c Sai vì số trung bình chuẩn xác bằng 1450/50 = 29,0 chứ không phải 28,6!",
        "narration": "Đã hết thời gian. Thầy cùng các em thẩm định từng mệnh đề. Mệnh đề a: Tổng tần số là 8 cộng 20 cộng 16 cộng 6 bằng 50. Đúng. Mệnh đề b: n chia 2 bằng 25. Tần số tích lũy: cf_1 là 8; cf_2 là 28. Vì 8 nhỏ hơn 25 và 25 nhỏ hơn hoặc bằng 28 nên nhóm chứa trung vị là [20; 30). Đúng. Mệnh đề c: Tổng tích m_i nhân c_i bằng 8 nhân 15 cộng 20 nhân 25 cộng 16 nhân 35 cộng 6 nhân 45 bằng 120 cộng 500 cộng 560 cộng 270 bằng 1450. Chia cho 50, ta được số trung bình bằng đúng 29,0 chứ không phải 28,6. Mệnh đề c Sai. Mệnh đề d: Nhóm chứa mốt là [20; 30) có tần số lớn nhất 20. d_1 bằng 20 trừ 8 bằng 12; d_2 bằng 20 trừ 16 bằng 4. M_o bằng 20 cộng 12 chia 16 nhân 10 bằng 20 cộng 7,5 bằng 27,5. Đúng. Vậy kết quả là: a Đúng, b Đúng, c Sai, d Đúng.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs">
    <div class="space-y-2 text-slate-300">
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>a)</b> $n = 8 + 20 + 16 + 6 = 50$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>b)</b> $\frac{n}{2} = 25$; $cf_1 = 8 < 25 \le cf_2 = 28 \Rightarrow$ Nhóm $[20; 30)$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>c)</b> $\overline{x} = \frac{8(15) + 20(25) + 16(35) + 6(45)}{50} = \frac{1450}{50} = 29,0 \ne 28,6$.</span>
        <span class="px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded">SAI</span>
      </div>
      <div class="flex items-center justify-between p-1.5 bg-slate-900 rounded">
        <span><b>d)</b> $M_o = 20 + \frac{12}{12 + 4} \cdot 10 = 20 + 7,5 = 27,5$.</span>
        <span class="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded">ĐÚNG</span>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. ĐỀ TỔNG ÔN - PHẦN III: CÂU HỎI TRẢ LỜI NGẮN",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH KHOẢNG TỨ PHÂN VỊ $\\Delta_Q$ CHÍNH XÁC",
        "mascotMode": "thinking",
        "mascotTip": r"$n = 50 \Rightarrow n/4 = 12,5$ và $3n/4 = 37,5$. Tính $Q_1, Q_3$ rồi trừ!",
        "narration": "Tiếp theo là Phần III: Câu hỏi trả lời ngắn. Thí sinh tô đáp án số học trực tiếp vào phiếu trả lời. Cho bảng số liệu ghép nhóm cỡ mẫu n bằng 50: nhóm [0; 5) có 5; nhóm [5; 10) có 15; nhóm [10; 15) có 20; và nhóm [15; 20) có 10. Hãy tính khoảng tứ phân vị delta Q và làm tròn đến hai chữ số thập phân. Các em có 30 giây tính toán.",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30">
    <div class="flex items-center justify-between mb-2">
      <span class="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded">Câu Hỏi Phần III (Trả Lời Ngắn - 30s)</span>
      <span class="text-xs text-slate-400">Tô số trực tiếp vào phiếu</span>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-xs text-center border-collapse">
        <thead>
          <tr class="bg-slate-700 text-slate-200">
            <th class="p-1 border border-slate-600">Nhóm</th>
            <th class="p-1 border border-slate-600">$[0; 5)$</th>
            <th class="p-1 border border-slate-600">$[5; 10)$</th>
            <th class="p-1 border border-slate-600">$[10; 15)$</th>
            <th class="p-1 border border-slate-600">$[15; 20)$</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-slate-800/60 text-slate-300">
            <td class="p-1 border border-slate-600 font-semibold text-amber-300">Tần số ($m_i$)</td>
            <td class="p-1 border border-slate-600 font-mono">5</td>
            <td class="p-1 border border-slate-600 font-mono">15</td>
            <td class="p-1 border border-slate-600 font-mono">20</td>
            <td class="p-1 border border-slate-600 font-mono">10</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-amber-200 font-semibold mt-2">
      <b>Yêu cầu:</b> Tính khoảng tứ phân vị $\Delta_Q = Q_3 - Q_1$ (làm tròn số đến hàng phần trăm).
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
        "title": "12. LỜI GIẢI PHẦN III & BẾ MẠC TOÀN KHÓA CHƯƠNG 3",
        "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • CHÚC MỪNG BẠN ĐÃ CHINH PHỤC CHƯƠNG III",
        "mascotMode": "celebrating",
        "mascotTip": r"$\Delta_Q = 14,38 - 7,50 = 6,88$. Chúc các em luôn đạt điểm 10 môn Toán!",
        "narration": "Chúc mừng các em. Cỡ mẫu 50 nên n chia 4 bằng 12,5; 3n chia 4 bằng 37,5. Tần số tích lũy: nhóm 1 là 5; nhóm 2 là 20; nhóm 3 là 40; nhóm 4 là 50. Nhóm chứa Q_1 là [5; 10): Q_1 bằng 5 cộng 12,5 trừ 5 chia 15 nhân 5, bằng 5 cộng 2,5 bằng 7,5. Nhóm chứa Q_3 là [10; 15): Q_3 bằng 10 cộng 37,5 trừ 20 chia 20 nhân 5, bằng 10 cộng 4,375 bằng 14,375. Khoảng tứ phân vị delta Q bằng 14,375 trừ 7,5 bằng 6,875, làm tròn đến hàng phần trăm là 6,88. Như vậy, chúng ta đã hoàn thành trọn vẹn toàn bộ Chương 3 môn Toán lớp 11 Kết Nối Tri Thức. Thầy Nam Minh chúc các em luôn tự tin, yêu thích môn Toán và đạt kết quả cao nhất trong mọi kì thi!",
        "bodyHtml": r"""
<div class="space-y-3">
  <div class="bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs">
    <div class="text-xs font-bold text-emerald-300 uppercase mb-1">Lời giải chi tiết Phần III:</div>
    <div class="space-y-1 text-slate-300 font-mono">
      <p>• $Q_1 = 5 + \frac{12,5 - 5}{15} \cdot 5 = 7,50$.</p>
      <p>• $Q_3 = 10 + \frac{37,5 - 20}{20} \cdot 5 = 14,375$.</p>
      <div class="text-sm font-bold text-amber-200 text-center bg-slate-900 p-2 rounded">
        $$\Delta_Q = Q_3 - Q_1 = 14,375 - 7,500 = 6,875 \approx 6,88$$
      </div>
    </div>

    <div class="mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs">
      <div class="font-bold text-emerald-200 mb-1 flex items-center gap-1.5">
        <span>🎉</span> <span>CHÚC MỪNG BẠN ĐÃ LÀM CHỦ TRỌN VẸN CHƯƠNG III TOÁN 11 KNTT!</span>
      </div>
      <p class="text-slate-300">
        Bạn đã nắm vững toàn bộ kiến thức lý thuyết, kỹ năng giải toán 4 dạng trọng tâm, nghệ thuật né bẫy phòng thi và kỹ năng Casio fx-580VN X!
      </p>
    </div>
  </div>
</div>
"""
    }
]

print("ch3_ontap_data.py initialized: ONTAP_C3_MUC1_SCENES, ONTAP_C3_MUC2_SCENES, ONTAP_C3_MUC3_SCENES ready.")
