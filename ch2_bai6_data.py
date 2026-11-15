# -*- coding: utf-8 -*-
"""
ch2_bai6_data.py
Dữ liệu 3 mục bài giảng cho Bài 6: Cấp số cộng (Chương 2 - Toán 11 KNTT):
- Mục 1: Định nghĩa cấp số cộng & Công sai
- Mục 2: Số hạng tổng quát của cấp số cộng
- Mục 3: Tổng n số hạng đầu tiên của cấp số cộng & Bài toán thực tế
Mỗi mục 12 scenes, 4 ví dụ minh họa tiêu biểu, đồng hồ 15s/30s, mascot Cú Thông Thái.
"""

# ==============================================================================
# BÀI 6 - MỤC 1: ĐỊNH NGHĨA CẤP SỐ CỘNG & CÔNG SAI
# ==============================================================================
BAI6_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA CẤP SỐ CỘNG VÀ CÔNG SAI",
        "subtitle": "BÀI 6 • CẤP SỐ CỘNG • MỤC 1: QUY LUẬT CỘNG DỒN HẰNG SỐ",
        "mascotMode": "pointer",
        "mascotTip": "Quy tắc vàng: Mỗi số hạng (từ thứ hai) bằng số hạng đứng ngay trước nó CỘNG với một số không đổi d!",
        "narration": "Chào mừng các em đến với Bài sáu: Cấp số cộng. Ở Mục một, chúng ta cùng khám phá định nghĩa cấp số cộng và tính chất của ba số hạng liên tiếp. Trong toán học, một dãy số vô hạn hoặc hữu hạn được gọi là cấp số cộng nếu kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi d. Số d được gọi là công sai của cấp số cộng. Nếu công sai d bằng không, cấp số cộng là một dãy số không đổi. Nếu d lớn hơn không, cấp số cộng là dãy tăng; nếu d nhỏ hơn không, cấp số cộng là dãy giảm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định nghĩa cốt lõi</span>
      <h3 class="text-xl font-black text-emerald-200">Định Nghĩa Cấp Số Cộng & Công Sai $d$</h3>
    </div>
    <p class="text-sm text-slate-300">Dãy số có quy luật cộng dồn hằng số với mọi $n \\in \\mathbb{N}^*$:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">1. Định nghĩa chuẩn</h4>
      <p class="text-slate-300 leading-relaxed">
        Dãy số $(u_n)$ là cấp số cộng khi và chỉ khi:
        $$u_{n+1} = u_n + d, \\quad \\forall n \\ge 1$$
        • $d$: <b>công sai</b> ($d = u_{n+1} - u_n$).<br/>
        • $u_1$: số hạng đầu tiên.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">2. Dấu của công sai $d$</h4>
      <p class="text-slate-300 leading-relaxed">
        • $d > 0 \\implies$ Cấp số cộng là dãy số <b>TĂNG</b>.<br/>
        • $d < 0 \\implies$ Cấp số cộng là dãy số <b>GIẢM</b>.<br/>
        • $d = 0 \\implies$ Cấp số cộng là dãy số <b>HẰNG</b> ($u, u, u, \\dots$).
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. TÍNH CHẤT TRUNG BÌNH CỘNG CỦA 3 SỐ HẠNG LIÊN TIẾP",
        "subtitle": "MỐI QUAN HỆ ĐẶC BIỆT GIỮA CÁC SỐ HẠNG KỀ NHAU",
        "mascotMode": "explain",
        "mascotTip": "Tính chất vàng: Số ở giữa bằng trung bình cộng của 2 số hai bên: u_k = (u_{k-1} + u_{k+1}) / 2!",
        "narration": "Cấp số cộng có một tính chất hình học vô cùng đẹp mắt: Trong một cấp số cộng, mỗi số hạng kể từ số hạng thứ hai đều là trung bình cộng của hai số hạng kề bên nó. Tức là u k bằng u k trừ một cộng u k cộng một, tất cả chia cho hai; hay viết dạng tương đương: u k trừ một cộng u k cộng một bằng hai lần u k. Tính chất này được dùng liên tục để giải các bài toán tìm tham số x khi ba số lập thành một cấp số cộng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-teal-300">Tính Chất Cốt Lõi: Trung Bình Cộng</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">Với mọi số hạng thứ $k \\ge 2$ trong cấp số cộng $(u_n)$:</p>
      <div class="text-center font-bold text-teal-300 text-base py-1">
        $$u_k = \\frac{u_{k-1} + u_{k+1}}{2} \\iff u_{k-1} + u_{k+1} = 2u_k$$
      </div>
      <p class="text-slate-300">👉 <b>Quy tắc 3 số liên tiếp:</b> Ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$a + c = 2b \\iff b = \\frac{a + c}{2}$$
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: NHẬN DIỆN CẤP SỐ CỘNG VÀ TÌM CÔNG SAI",
        "subtitle": "DẠNG 1 • KIỂM TRA HIỆU $u_{n+1} - u_n = d$",
        "mascotMode": "think",
        "mascotTip": "Tính u_{n+1} - u_n. Nếu kết quả là hằng số không đổi d thì dãy là cấp số cộng!",
        "narration": "Ví dụ số một: Trong các dãy số sau, dãy số nào là một cấp số cộng? Tìm số hạng đầu u một và công sai d của cấp số cộng đó: Dãy số u n bằng ba n trừ hai; hay dãy số v n bằng hai mũ n. Các em có mười lăm giây để suy luận.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Nhận Diện</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Nhận diện cấp số cộng</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Khẳng định nào sau đây là đúng về dãy số $u_n = 3n - 2$?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Là CSC với $u_1 = 1, d = 3$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Là CSC với $u_1 = 1, d = -2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Là CSC với $u_1 = 3, d = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Không phải là cấp số cộng</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: LÀ CSC VỚI $u_1 = 1, d = 3$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "u_{n+1} - u_n = [3(n+1)-2] - (3n-2) = 3 (hằng số). u_1 = 3(1)-2 = 1. Chuẩn xác!",
        "narration": "Hết thời gian. Ta xét hiệu u n cộng một trừ u n: u n cộng một bằng ba nhân mở ngoặc n cộng một đóng ngoặc trừ hai, bằng ba n cộng một. Lấy u n cộng một trừ u n, ta có ba n cộng một trừ đi mở ngoặc ba n trừ hai đóng ngoặc, rút gọn được đúng ba, là một hằng số không đổi với mọi n. Do đó dãy số u n là một cấp số cộng với công sai d bằng ba. Số hạng đầu tiên u một bằng ba nhân một trừ hai bằng một. Đáp án chính xác là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Kiểm tra hiệu hai số hạng liên tiếp</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có $u_1 = 3(1) - 2 = 1$.</p>
      <p class="text-slate-200">• Xét hiệu với mọi $n \\ge 1$:</p>
      $$u_{n+1} - u_n = [3(n + 1) - 2] - (3n - 2) = (3n + 1) - (3n - 2) = 3 \\;\\text{(hằng số)}$$
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        👉 $(u_n)$ là cấp số cộng có số hạng đầu $u_1 = 1$ và công sai $d = 3$. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH CÔNG SAI VÀ CÁC SỐ HẠNG TIẾP THEO",
        "subtitle": "DẠNG 2 • TÌM $d = u_2 - u_1$ VÀ TÍNH TIẾP $u_3, u_4$",
        "mascotMode": "think",
        "mascotTip": "Công sai d = u_2 - u_1 = 2 - (-3) = 5. Cộng d liên tiếp để tìm u_3, u_4!",
        "narration": "Ví dụ số hai: Cho cấp số cộng u n có số hạng đầu u một bằng trừ ba và số hạng thứ hai u hai bằng hai. Hãy tính công sai d và hai số hạng tiếp theo là u ba và u bốn. Các em có ba mươi giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Tính Số Hạng</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-teal-200 mb-2">Tính $d, u_3, u_4$ khi biết $u_1, u_2$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số cộng $(u_n)$ có $u_1 = -3$ và $u_2 = 2$. Giá trị của $d, u_3, u_4$ lần lượt là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $d = -1; u_3 = 1; u_4 = 0$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $d = 5; u_3 = 7; u_4 = 12$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $d = 5; u_3 = 8; u_4 = 13$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $d = -5; u_3 = -3; u_4 = -8$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $d = 5, u_3 = 7, u_4 = 12$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "d = 2 - (-3) = 5. u_3 = 2 + 5 = 7. u_4 = 7 + 5 = 12. Rất đơn giản và trực quan!",
        "narration": "Hết ba mươi giây. Lời giải rất trực quan: Theo định nghĩa cấp số cộng, công sai d bằng số hạng sau trừ số hạng trước: d bằng u hai trừ u một, bằng hai trừ đi trừ ba, hai cộng ba bằng năm. Từ đó ta tính các số hạng tiếp theo bằng cách cộng thêm công sai d: u ba bằng u hai cộng d, bằng hai cộng năm bằng bảy. u bốn bằng u ba cộng d, bằng bảy cộng năm bằng mười hai. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-teal-300">Cộng dồn công sai $d$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Tính công sai $d$:</p>
      <div class="text-center font-bold text-teal-300 text-sm py-1">
        $$d = u_2 - u_1 = 2 - (-3) = 5$$
      </div>
      <p class="text-slate-200">• Tính các số hạng tiếp theo:</p>
      $$u_3 = u_2 + d = 2 + 5 = 7$$
      $$u_4 = u_3 + d = 7 + 5 = 12$$
      <div class="p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2">
        👉 <b>Đáp án chọn: B ($d = 5; u_3 = 7; u_4 = 12$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM $x$ ĐỂ 3 SỐ LẬP THÀNH CẤP SỐ CỘNG",
        "subtitle": "DẠNG 3 • ÁP DỤNG HỆ THỨC $a + c = 2b$",
        "mascotMode": "think",
        "mascotTip": "Tính chất: (2x - 1) + (4x + 3) = 2(x + 2). Giải phương trình bậc nhất tìm x!",
        "narration": "Ví dụ số ba: Tìm giá trị của x để ba số: hai x trừ một, x cộng hai, và bốn x cộng ba theo thứ tự lập thành một cấp số cộng. Các em có mười lăm giây để thiết lập phương trình và tìm x.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Tìm Ẩn Số</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-cyan-200 mb-2">Tìm $x$ để ba số lập thành CSC</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Tìm $x$ để ba số $2x - 1, \\; x + 2, \\; 4x + 3$ theo thứ tự lập thành một cấp số cộng:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $x = \\frac{1}{2}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $x = 1$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $x = -\\frac{1}{2}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $x = 2$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $x = \\frac{1}{2}$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "explain",
        "mascotTip": "6x + 2 = 2x + 4 <=> 4x = 2 <=> x = 1/2. Thay lại: 0, 2.5, 5 đúng là CSC công sai 2.5!",
        "narration": "Hết thời gian. Áp dụng tính chất ba số liên tiếp của cấp số cộng: tổng số đầu và số cuối bằng hai lần số ở giữa. Ta có: mở ngoặc hai x trừ một đóng ngoặc cộng mở ngoặc bốn x cộng ba đóng ngoặc, bằng hai lần mở ngoặc x cộng hai đóng ngoặc. Rút gọn vế trái: hai x cộng bốn x bằng sáu x; trừ một cộng ba bằng hai. Vế phải khai triển: hai x cộng bốn. Chuyển vế ta được: sáu x trừ hai x bằng bốn x; bốn trừ hai bằng hai. Suy ra x bằng hai phần tư, tức x bằng một phần hai. Thử lại: với x bằng một phần hai, ba số là không, hai phẩy năm, và năm, đúng là một cấp số cộng với công sai hai phẩy năm. Đáp án chọn là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-cyan-300">Thiết lập phương trình trung bình cộng</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Áp dụng điều kiện: $u_1 + u_3 = 2u_2$:</p>
      $$(2x - 1) + (4x + 3) = 2(x + 2)$$
      <p class="text-slate-200">• Khai triển và giải phương trình bậc nhất:</p>
      $$6x + 2 = 2x + 4 \\iff 4x = 2 \\iff x = \\frac{1}{2}$$
      <p class="text-emerald-300 font-mono">• Thử lại: với $x = \\frac{1}{2} \\implies$ 3 số là: $0; \\; 2{,}5; \\; 5$ (CSC có $d = 2{,}5$).</p>
      <div class="p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2">
        👉 <b>Đáp án chọn: A ($x = \\frac{1}{2}$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: 3 GÓC CỦA TAM GIÁC LẬP THÀNH CẤP SỐ CỘNG",
        "subtitle": "DẠNG 4 • ỨNG DỤNG HÌNH HỌC • TỔNG 3 GÓC BẰNG 180°",
        "mascotMode": "think",
        "mascotTip": "A + C = 2B. Mà A + B + C = 180° => 3B = 180° => B = 60°! Góc nhỏ nhất A = 30°!",
        "narration": "Ví dụ số bốn: Ba góc của một tam giác lập thành một cấp số cộng. Biết rằng góc nhỏ nhất của tam giác có số đo bằng ba mươi độ. Tìm số đo của góc lớn nhất trong tam giác đó. Các em có ba mươi giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Ứng Dụng Tam Giác</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">3 góc tam giác lập thành cấp số cộng</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho tam giác có 3 góc $A, B, C$ ($A \\le B \\le C$) lập thành một cấp số cộng. Biết góc nhỏ nhất $A = 30^\\circ$. Số đo góc lớn nhất $C$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $C = 75^\\circ$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $C = 80^\\circ$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $C = 90^\\circ$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $C = 100^\\circ$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ GÓC LỚN NHẤT $C = 90^\\circ$ (CHỌN ĐÁP ÁN C)",
        "mascotMode": "celebrate",
        "mascotTip": "Góc ở giữa B luôn bằng 60°. A = 30° => C = 180° - 30° - 60° = 90° (Tam giác vuông)!",
        "narration": "Thời gian đã hết. Gọi ba góc theo thứ tự tăng dần là A, B, C. Vì ba góc lập thành cấp số cộng nên ta có: A cộng C bằng hai lần B. Mặt khác, tổng ba góc trong một tam giác luôn bằng một trăm tám mươi độ: A cộng B cộng C bằng một trăm tám mươi độ. Thay A cộng C bằng hai B vào, ta được: hai B cộng B bằng ba B bằng một trăm tám mươi độ, suy ra góc B bằng sáu mươi độ. Đây là một kết quả kinh điển: bất kỳ tam giác nào có ba góc lập thành cấp số cộng thì góc ở giữa luôn bằng sáu mươi độ. Đề bài cho góc nhỏ nhất A bằng ba mươi độ, vậy góc lớn nhất C bằng một trăm tám mươi độ trừ ba mươi độ trừ sáu mươi độ bằng chín mươi độ. Tam giác này là tam giác vuông. Đáp án chính xác là C.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Kết hợp tính chất CSC và định lý tổng 3 góc</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Vì $A, B, C$ lập thành CSC nên: $A + C = 2B$.</p>
      <p class="text-slate-200">• Tổng 3 góc trong tam giác: $A + B + C = 180^\\circ$:</p>
      $$(A + C) + B = 180^\\circ \\iff 2B + B = 180^\\circ \\iff 3B = 180^\\circ \\iff B = 60^\\circ$$
      <p class="text-slate-200">• Với $A = 30^\\circ$, ta tìm góc lớn nhất $C$:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$C = 180^\\circ - (A + B) = 180^\\circ - (30^\\circ + 60^\\circ) = 90^\\circ$$
      </div>
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 Ba góc là: $30^\\circ, 60^\\circ, 90^\\circ$ (CSC có công sai $d = 30^\\circ$). <br/>
        👉 <b>Đáp án chọn: C ($C = 90^\\circ$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ CẤP SỐ CỘNG",
        "subtitle": "NHẦM LẪN THỨ TỰ SỐ HẠNG VÀ CÔNG SAI ÂM",
        "mascotMode": "explain",
        "mascotTip": "Quy tắc: d = số sau - số trước! Nếu dãy giảm thì d < 0, đừng quên dấu âm!",
        "narration": "Thầy Nam Minh lưu ý hai lỗi bẫy học sinh rất hay mắc: Thứ nhất là nhầm công sai d thành số trước trừ số sau. Công thức chuẩn luôn là: d bằng số đứng sau trừ số đứng trước, tức u hai trừ u một. Ví dụ nếu dãy là năm, ba, một thì công sai d bằng ba trừ năm bằng trừ hai chứ không phải dương hai. Thứ hai là khi đề bài nói ba số a, b, c lập thành cấp số cộng thì số ở giữa là b, nên a cộng c bằng hai b. Nếu các em viết nhầm thành a cộng b bằng hai c là bài toán sai hoàn toàn.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">2 Lỗi Sai Nghiêm Trọng Cần Tránh</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Tính ngược công sai $d$</h4>
        <p class="text-slate-300 leading-relaxed">
          Công thức: $d = u_{n+1} - u_n$ (Sau $-$ Trước).<br/>
          Nếu dãy số giảm: $10, 7, 4... \\implies d = 7 - 10 = -3$.<br/>
          👉 Tuyệt đối không lấy $10 - 7 = 3$ làm sai dấu toàn bộ!
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Nhầm vị trí số ở giữa</h4>
        <p class="text-slate-300 leading-relaxed">
          Ba số $x, y, z$ theo thứ tự lập thành CSC $\\implies x + z = 2y$ (số giữa nhân 2).<br/>
          👉 Phải xác định đúng số nằm ở chính giữa!
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "NẮM VỮNG ĐỊNH NGHĨA ĐỂ CHUYỂN SANG MỤC 2: SỐ HẠNG TỔNG QUÁT",
        "mascotMode": "celebrate",
        "mascotTip": "Làm chủ định nghĩa và tính chất trung bình cộng! Chuyển sang Mục 2 để lập công thức u_n!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục một của Bài sáu. Chúng ta đã làm chủ định nghĩa cấp số cộng, công sai d và tính chất trung bình cộng tuyệt vời. Ngay bây giờ, thầy mời các em cùng chuyển sang Mục hai để khám phá công thức số hạng tổng quát u n, chìa khóa để tìm bất kỳ số hạng nào trong một cấp số cộng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl">🦉✨</div>
    <h3 class="text-xl font-black text-emerald-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 1!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã nắm trọn định nghĩa cấp số cộng và tính chất trung bình cộng $a + c = 2b$. Hãy chuyển sang Mục 2 để làm chủ công thức Số hạng tổng quát $u_n = u_1 + (n - 1)d$!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ 4 Ví dụ đã hoàn thành</span>
      <span class="px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40">✔ Tính chất $a + c = 2b$</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 2</span>
    </div>
  </div>
</div>
"""
    }
]

print("ch2_bai6_data.py initialized: BAI6_MUC1_SCENES ready.")

# ==============================================================================
# BÀI 6 - MỤC 2: SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ CỘNG
# ==============================================================================
BAI6_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ CỘNG",
        "subtitle": "BÀI 6 • CẤP SỐ CỘNG • MỤC 2: CÔNG THỨC $u_n = u_1 + (n - 1)d$",
        "mascotMode": "pointer",
        "mascotTip": "Quy tắc vàng: Để đi từ u_1 đến u_n ta cần cộng thêm đúng (n - 1) lần công sai d!",
        "narration": "Chào mừng các em đến với Mục hai: Số hạng tổng quát của cấp số cộng. Nếu biết số hạng đầu u một và công sai d, ta có thể tính ngay bất kỳ số hạng u n nào mà không cần tính lần lượt từng bước. Định lý nêu rõ: Nếu cấp số cộng u n có số hạng đầu u một và công sai d thì số hạng tổng quát u n được xác định bởi công thức: u n bằng u một cộng mở ngoặc n trừ một đóng ngoặc nhân d, với mọi n lớn hơn hoặc bằng hai. Hãy chú ý rằng hệ số trước d là n trừ một chứ không phải n, vì để đi từ số hạng thứ nhất đến số hạng thứ n, ta chỉ cần bước qua n trừ một khoảng cách d.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định lý trọng tâm</span>
      <h3 class="text-xl font-black text-blue-200">Công Thức Số Hạng Tổng Quát $u_n$</h3>
    </div>
    <p class="text-sm text-slate-300">Tính số hạng bất kỳ theo số hạng đầu $u_1$ và công sai $d$:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md">
      <h4 class="font-bold text-blue-300 text-sm mb-1">1. Công thức số hạng tổng quát</h4>
      <p class="text-slate-300 leading-relaxed">
        $$u_n = u_1 + (n - 1)d, \\quad \\forall n \\ge 1$$
        • $u_1$: số hạng đầu tiên.<br/>
        • $d$: công sai.<br/>
        • $n$: số thứ tự (chỉ số vị trí).
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md">
      <h4 class="font-bold text-indigo-300 text-sm mb-1">2. Khoảng cách giữa 2 số hạng bất kỳ</h4>
      <p class="text-slate-300 leading-relaxed">
        Với hai số hạng $u_m$ và $u_n$ bất kỳ ($m > n$):
        $$u_m - u_n = (m - n)d \\iff u_m = u_n + (m - n)d$$
        👉 <i>Cực kỳ hữu ích để giải nhanh các bài toán tìm $d$!</i>
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. PHƯƠNG PHÁP GIẢI HỆ PHƯƠNG TRÌNH TÌM $u_1$ VÀ $d$",
        "subtitle": "KỸ NĂNG CỐT LÕI: ĐƯA MỌI GIẢ THIẾT VỀ $u_1$ VÀ $d$",
        "mascotMode": "explain",
        "mascotTip": "Mọi phương trình cấp số cộng đều đưa về hệ bậc nhất 2 ẩn u_1 và d. Bấm máy Casio 580 giải hệ 2 ẩn!",
        "narration": "Khi gặp bài toán cho biết hai số hạng bất kỳ của cấp số cộng, ví dụ u ba và u tám, phương pháp chuẩn mực nhất là biểu diễn cả hai số hạng đó theo u một và d. Khi đó ta thu được một hệ phương trình bậc nhất hai ẩn u một và d. Bằng phương pháp cộng đại số hoặc bấm máy tính cầm tay, các em sẽ tìm được chính xác số hạng đầu u một và công sai d. Từ đó, ta có thể trả lời mọi câu hỏi về số hạng thứ n hoặc vị trí của một số hạng trong dãy.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-blue-300">Quy Trình Giải Hệ Phương Trình Cấp Số Cộng</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">Giả sử bài toán cho biết $u_p = A$ và $u_q = B$ ($p < q$):</p>
      <div class="text-center font-bold text-blue-300 text-sm py-1">
        $$\\begin{cases} u_1 + (p - 1)d = A \\\\ u_1 + (q - 1)d = B \\end{cases} \\implies (q - p)d = B - A \\implies d = \\frac{B - A}{q - p}$$
      </div>
      <p class="text-slate-300">👉 Thay $d$ ngược lại để tìm $u_1 = A - (p - 1)d$. Từ đó viết được công thức $u_n$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG THỨ 20",
        "subtitle": "DẠNG 1 • ÁP DỤNG TRỰC TIẾP CÔNG THỨC $u_n = u_1 + (n - 1)d$",
        "mascotMode": "think",
        "mascotTip": "u_{20} = u_1 + 19d. Với u_1 = 4, d = -3. Chú ý tính toán dấu âm!",
        "narration": "Ví dụ số một: Cho cấp số cộng u n có số hạng đầu u một bằng bốn và công sai d bằng trừ ba. Hãy tìm số hạng thứ hai mươi, tức u hai mươi của cấp số cộng đó. Các em có mười lăm giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Tính $u_{20}$</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-blue-200 mb-2">Tìm số hạng thứ 20 của cấp số cộng</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = -3$. Số hạng $u_{20}$ bằng:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $u_{20} = -53$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $u_{20} = -56$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $u_{20} = 61$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $u_{20} = -50$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $u_{20} = -53$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "u_{20} = 4 + 19(-3) = 4 - 57 = -53. Chúc mừng các em chọn A!",
        "narration": "Hết thời gian. Áp dụng công thức số hạng tổng quát: u n bằng u một cộng mở ngoặc n trừ một đóng ngoặc nhân d. Với n bằng hai mươi, ta có: u hai mươi bằng u một cộng mười chín nhân d. Thay số vào: u một bằng bốn, d bằng trừ ba, ta có: bốn cộng mười chín nhân trừ ba. Mười chín nhân trừ ba bằng trừ năm mươi bảy, bốn trừ năm mươi bảy bằng trừ năm mươi ba. Đáp án chính xác là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-blue-300">Áp dụng công thức $u_n = u_1 + (n - 1)d$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Với $n = 20$:</p>
      $$u_{20} = u_1 + (20 - 1)d = u_1 + 19d$$
      <p class="text-slate-200">• Thay $u_1 = 4$ và $d = -3$ vào:</p>
      <div class="text-center font-bold text-blue-300 text-sm py-1">
        $$u_{20} = 4 + 19(-3) = 4 - 57 = -53$$
      </div>
      <div class="p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2">
        👉 <b>Đáp án chọn: A ($u_{20} = -53$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $u_1$ VÀ $d$ TỪ 2 SỐ HẠNG",
        "subtitle": "DẠNG 2 • HỆ PHƯƠNG TRÌNH CHO $u_3 = 11$ VÀ $u_8 = 31$",
        "mascotMode": "think",
        "mascotTip": "Lập hệ: u_1 + 2d = 11 và u_1 + 7d = 31. Trừ 2 vế tìm 5d = 20 => d = 4!",
        "narration": "Ví dụ số hai: Cho cấp số cộng u n biết số hạng thứ ba u ba bằng mười một và số hạng thứ tám u tám bằng ba mươi mốt. Tìm số hạng đầu u một và công sai d của cấp số cộng này. Các em có ba mươi giây để giải hệ phương trình.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Tìm $u_1, d$</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-indigo-200 mb-2">Tìm $u_1$ và $d$ khi biết $u_3 = 11, u_8 = 31$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số cộng $(u_n)$ có $u_3 = 11$ và $u_8 = 31$. Giá trị của $u_1$ và $d$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $u_1 = 2; d = 4$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $u_1 = 3; d = 4$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $u_1 = 3; d = 5$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $u_1 = 1; d = 4$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $u_1 = 3$ VÀ $d = 4$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "5d = u_8 - u_3 = 31 - 11 = 20 => d = 4. Thay vào: u_1 = 11 - 2(4) = 3!",
        "narration": "Hết ba mươi giây. Ta biểu diễn u ba và u tám theo u một và d: u ba bằng u một cộng hai d bằng mười một. u tám bằng u một cộng bảy d bằng ba mươi mốt. Lấy phương trình dưới trừ phương trình trên, ta triệt tiêu được u một: bảy d trừ hai d bằng năm d; ba mươi mốt trừ mười một bằng hai mươi. Suy ra d bằng hai mươi chia năm bằng bốn. Thay d bằng bốn vào phương trình đầu tiên: u một cộng hai nhân bốn bằng mười một, suy ra u một bằng mười một trừ tám bằng ba. Như vậy, số hạng đầu u một bằng ba và công sai d bằng bốn. Đáp án chọn là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-indigo-300">Thiết lập hệ phương trình bậc nhất 2 ẩn</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có hệ phương trình:</p>
      $$\\begin{cases} u_1 + 2d = 11 \\\\ u_1 + 7d = 31 \\end{cases}$$
      <p class="text-slate-200">• Lấy phương trình thứ hai trừ phương trình thứ nhất:</p>
      $$5d = 20 \\iff d = 4$$
      <p class="text-slate-200">• Thay $d = 4$ vào phương trình thứ nhất:</p>
      $$u_1 + 2(4) = 11 \\iff u_1 = 11 - 8 = 3$$
      <div class="p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2">
        👉 <b>Kết luận:</b> $u_1 = 3$ và $d = 4$. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM VỊ TRÍ CỦA SỐ 248 TRONG DÃY",
        "subtitle": "DẠNG 3 • GIẢI PHƯƠNG TRÌNH TÌM CHỈ SỐ $n$",
        "mascotMode": "think",
        "mascotTip": "u_n = 5n - 2 = 248 <=> 5n = 250 <=> n = 50!",
        "narration": "Ví dụ số ba: Cho cấp số cộng u n có số hạng tổng quát u n bằng năm n trừ hai. Hỏi số hai trăm bốn mươi tám là số hạng thứ bao nhiêu của cấp số cộng đó? Các em có mười lăm giây để tính nhẩm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Vị Trí Số Hạng</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Số 248 là số hạng thứ bao nhiêu?</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số cộng $(u_n)$ có $u_n = 5n - 2$. Số $248$ là số hạng thứ mấy?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Thứ 48</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Thứ 50</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Thứ 52</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Không thuộc dãy</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $n = 50 \\implies 248 = u_{50}$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "explain",
        "mascotTip": "5n = 250 => n = 50. Số 248 đứng ở vị trí thứ 50 trong cấp số cộng!",
        "narration": "Hết thời gian. Ta giải phương trình u n bằng hai trăm bốn mươi tám: năm n trừ hai bằng hai trăm bốn mươi tám. Chuyển trừ hai sang vế phải, ta được: năm n bằng hai trăm bốn mươi tám cộng hai bằng hai trăm năm mươi. Chia hai vế cho năm, ta được n bằng hai trăm năm mươi chia năm bằng năm mươi. Vì năm mươi là số nguyên dương nên số hai trăm bốn mươi tám chính là số hạng thứ năm mươi, tức u năm mươi của cấp số cộng. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Giải phương trình $u_n = 248$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có phương trình:</p>
      $$5n - 2 = 248 \\iff 5n = 250 \\iff n = 50$$
      <p class="text-slate-200">• Vì $n = 50 \\in \\mathbb{N}^*$, giá trị $248$ thuộc cấp số cộng.</p>
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 <b>Kết luận:</b> Số $248$ là số hạng thứ $50$ ($u_{50} = 248$). <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: CHÈN THÊM CÁC SỐ VÀO GIỮA 2 SỐ CHO TRƯỚC",
        "subtitle": "DẠNG 4 • CHÈN 5 SỐ VÀO GIỮA 4 VÀ 28 ĐỂ THÀNH CẤP SỐ CỘNG",
        "mascotMode": "think",
        "mascotTip": "Chèn 5 số vào giữa 2 số => Dãy có tất cả 7 số hạng! u_1 = 4 và u_7 = 28!",
        "narration": "Ví dụ số bốn: Giữa hai số bốn và hai mươi tám, hãy chèn thêm năm số nữa để tạo thành một cấp số cộng gồm bảy số hạng. Hãy tìm công sai d và năm số được chèn vào đó. Các em có ba mươi giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Chèn Số Hạng</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-cyan-200 mb-2">Chèn 5 số vào giữa 4 và 28</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Chèn thêm 5 số vào giữa 4 và 28 để được một cấp số cộng gồm 7 số hạng. Năm số đó là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $8; \\; 12; \\; 16; \\; 20; \\; 24$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $6; \\; 10; \\; 14; \\; 18; \\; 22$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $9; \\; 14; \\; 19; \\; 24; \\; 27$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $7; \\; 11; \\; 15; \\; 19; \\; 23$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $d = 4 \\implies 8, 12, 16, 20, 24$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "celebrate",
        "mascotTip": "u_7 = u_1 + 6d <=> 4 + 6d = 28 <=> 6d = 24 <=> d = 4. Năm số chèn: 8, 12, 16, 20, 24!",
        "narration": "Thời gian đã hết. Khi chèn thêm năm số vào giữa hai số ban đầu, cấp số cộng mới sẽ có tổng cộng hai cộng năm bằng bảy số hạng. Trong đó số hạng đầu tiên u một bằng bốn, và số hạng thứ bảy u bảy bằng hai mươi tám. Áp dụng công thức số hạng tổng quát: u bảy bằng u một cộng sáu d. Thay số vào: bốn cộng sáu d bằng hai mươi tám, suy ra sáu d bằng hai mươi tám trừ bốn bằng hai mươi tư, d bằng hai mươi tư chia sáu bằng bốn. Khi đã có công sai d bằng bốn, ta cộng dồn liên tiếp: u hai bằng tám, u ba bằng mười hai, u bốn bằng mười sáu, u năm bằng hai mươi, và u sáu bằng hai mươi tư. Năm số cần tìm chính là tám, mười hai, mười sáu, hai mươi và hai mươi tư. Đáp án chọn là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-cyan-300">Xác định tổng số số hạng và tìm công sai $d$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Cấp số cộng có 7 số hạng: $u_1 = 4$ và $u_7 = 28$.</p>
      <p class="text-slate-200">• Áp dụng công thức số hạng tổng quát:</p>
      $$u_7 = u_1 + 6d \\iff 4 + 6d = 28 \\iff 6d = 24 \\iff d = 4$$
      <p class="text-slate-200">• Năm số hạng được chèn thêm vào là:</p>
      <div class="text-center font-bold text-cyan-300 text-sm py-1">
        $$u_2 = 8; \\quad u_3 = 12; \\quad u_4 = 16; \\quad u_5 = 20; \\quad u_6 = 24$$
      </div>
      <div class="p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2">
        👉 Cấp số cộng hoàn chỉnh: $4, \\mathbf{8, 12, 16, 20, 24}, 28$. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ SỐ HẠNG TỔNG QUÁT",
        "subtitle": "LỖI NHẦM $u_n = u_1 + nd$ THAY VÌ $(n - 1)d$",
        "mascotMode": "explain",
        "mascotTip": "Luôn luôn là (n - 1)d! Ví dụ u_{10} = u_1 + 9d, không bao giờ là u_1 + 10d!",
        "narration": "Thầy Nam Minh cảnh báo một lỗi sai kinh điển mà ba mươi phần trăm học sinh mắc phải: Đó là viết nhầm công thức u n bằng u một cộng n nhân d thay vì n trừ một nhân d. Các em hãy nhớ rằng: u một thì có không lần d, u hai có một lần d, u ba có hai lần d, vậy u n chỉ có n trừ một lần d. Nếu lấy n nhân d thì các em đã cộng thừa thêm một lần công sai d, dẫn đến kết quả bài toán bị sai lệch hoàn toàn.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">Lỗi Sai Kinh Điển: Nhầm Lẫn Hệ Số $d$</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Công thức SAI rất hay gặp</h4>
        <p class="text-slate-300 leading-relaxed font-mono">
          $u_n = u_1 + nd$ (SAI!)<br/>
          Ví dụ tính $u_{10} = u_1 + 10d$ là sai lầm làm mất điểm hàng loạt câu hỏi trắc nghiệm!
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-emerald-400">
        <h4 class="font-bold text-emerald-300 mb-1">✔ Công thức ĐÚNG chuẩn SGK</h4>
        <p class="text-slate-300 leading-relaxed font-mono">
          $u_n = u_1 + (n - 1)d$ (ĐÚNG!)<br/>
          $u_1 = u_1 + 0d$<br/>
          $u_2 = u_1 + 1d$<br/>
          $u_{10} = u_1 + 9d$
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "LÀM CHỦ CÔNG THỨC $u_n$ ĐỂ CHUYỂN SANG MỤC 3: TÍNH TỔNG $S_n$",
        "mascotMode": "celebrate",
        "mascotTip": "Ghi nhớ công thức u_n = u_1 + (n - 1)d! Sẵn sàng bước sang Mục 3 để tính tổng S_n!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai. Chúng ta đã làm chủ công thức số hạng tổng quát, phương pháp giải hệ tìm u một và d, cùng bài toán chèn số hạng tiêu biểu. Ngay bây giờ, mời các em bước sang Mục ba: Tổng n số hạng đầu tiên của cấp số cộng và các bài toán thực tế đời sống.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl">🎯🚀</div>
    <h3 class="text-xl font-black text-blue-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 2!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã thành thạo kỹ năng tìm số hạng bất kỳ $u_n = u_1 + (n - 1)d$, giải hệ phương trình và chèn số hạng. Hãy chuyển sang Mục 3 để chinh phục công thức Tính Tổng $S_n$!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40">✔ 4 Ví dụ hoàn thành</span>
      <span class="px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40">✔ Kỹ thuật giải hệ tìm $u_1, d$</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 3</span>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# BÀI 6 - MỤC 3: TỔNG N SỐ HẠNG ĐẦU TIÊN CỦA CẤP SỐ CỘNG
# ==============================================================================
BAI6_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. CÔNG THỨC TÍNH TỔNG $n$ SỐ HẠNG ĐẦU TIÊN",
        "subtitle": "BÀI 6 • CẤP SỐ CỘNG • MỤC 3: CÔNG THỨC GAUSS NÂNG CAO",
        "mascotMode": "pointer",
        "mascotTip": "Công thức 1: S_n = n(u_1 + u_n) / 2. Công thức 2: S_n = n[2u_1 + (n - 1)d] / 2!",
        "narration": "Chào mừng các em đến với Mục ba: Tổng n số hạng đầu tiên của cấp số cộng. Xuất phát từ phương pháp tính tổng thiên tài của nhà toán học Gauss, ta có công thức tổng quát tính tổng S n của n số hạng đầu tiên: S n bằng n nhân mở ngoặc u một cộng u n đóng ngoặc chia cho hai. Tức là số các số hạng nhân với tổng của số đầu và số cuối, rồi chia đôi. Khi thay u n bằng u một cộng n trừ một nhân d, ta thu được công thức thứ hai rất tiện lợi khi chưa biết u n: S n bằng n nhân mở ngoặc hai u một cộng n trừ một nhân d đóng ngoặc, tất cả chia cho hai.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider">Công thức cốt lõi</span>
      <h3 class="text-xl font-black text-purple-200">2 Công Thức Tính Tổng $S_n$ Chuẩn Mực</h3>
    </div>
    <p class="text-sm text-slate-300">Tổng $S_n = u_1 + u_2 + \\dots + u_n$ của cấp số cộng:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md">
      <h4 class="font-bold text-purple-300 text-sm mb-1">Công thức 1 (Theo số đầu và số cuối)</h4>
      $$S_n = \\frac{n(u_1 + u_n)}{2}$$
      👉 Dùng khi đã biết số hạng đầu $u_1$ và số hạng cuối $u_n$.
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-pink-400 shadow-md">
      <h4 class="font-bold text-pink-300 text-sm mb-1">Công thức 2 (Theo $u_1$ và công sai $d$)</h4>
      $$S_n = \\frac{n[2u_1 + (n - 1)d]}{2}$$
      👉 Dùng khi biết $u_1$, $d$ và số lượng $n$ (không cần tính $u_n$).
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. KỸ THUẬT TÌM $u_n$ VÀ $d$ KHI BIẾT TỔNG $S_n$",
        "subtitle": "MỐI QUAN HỆ ĐẶC BIỆT: $u_1 = S_1$ VÀ $u_n = S_n - S_{n-1}$",
        "mascotMode": "explain",
        "mascotTip": "Quy tắc: u_1 = S_1; u_2 = S_2 - S_1. Từ đó suy ra công sai d = u_2 - u_1!",
        "narration": "Một dạng toán trắc nghiệm rất hay gặp trong đề thi là cho biết công thức tính tổng S n theo n, ví dụ S n bằng hai n bình cộng ba n, rồi yêu cầu tìm số hạng đầu và công sai. Kỹ thuật giải cực kỳ nhanh như sau: Số hạng đầu tiên u một chính là bằng S một. Để tìm số hạng thứ hai u hai, ta lấy S hai trừ S một. Khi có u một và u hai, ta tính ngay được công sai d bằng u hai trừ u một. Tổng quát hơn, với mọi n lớn hơn hoặc bằng hai, ta luôn có u n bằng S n trừ S n trừ một.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-purple-300">Tuyệt Kỹ Suy Ngược $u_n$ Từ Tổng $S_n$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">Cho công thức tổng $S_n$ theo $n$. Để xác định cấp số cộng:</p>
      <div class="grid grid-cols-3 gap-2 text-center pt-1">
        <div class="bg-slate-950 p-2.5 rounded border border-slate-800">
          <span class="text-purple-300 font-bold block mb-1">Bước 1: Tìm $u_1$</span>
          $$u_1 = S_1$$
        </div>
        <div class="bg-slate-950 p-2.5 rounded border border-slate-800">
          <span class="text-pink-300 font-bold block mb-1">Bước 2: Tìm $u_2$</span>
          $$u_2 = S_2 - S_1$$
        </div>
        <div class="bg-slate-950 p-2.5 rounded border border-slate-800">
          <span class="text-amber-300 font-bold block mb-1">Bước 3: Tìm $d$</span>
          $$d = u_2 - u_1$$
        </div>
      </div>
      <p class="text-slate-300 pt-1">👉 <b>Công thức tổng quát:</b> $u_n = S_n - S_{n-1}, \\quad \\forall n \\ge 2$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH TỔNG 30 SỐ HẠNG ĐẦU TIÊN",
        "subtitle": "DẠNG 1 • CHO BIẾT $u_1 = 3, d = 5$, TÍNH $S_{30}$",
        "mascotMode": "think",
        "mascotTip": "Áp dụng: S_{30} = 30 * [2(3) + 29(5)] / 2 = 15 * (6 + 145) = 15 * 151!",
        "narration": "Ví dụ số một: Tính tổng của ba mươi số hạng đầu tiên của cấp số cộng u n, biết số hạng đầu u một bằng ba và công sai d bằng năm. Các em có mười lăm giây để tính ra kết quả.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Tính $S_{30}$</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Tính tổng $S_{30}$ khi $u_1 = 3, d = 5$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Tổng 30 số hạng đầu tiên của cấp số cộng có $u_1 = 3, d = 5$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $S_{30} = 2175$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $S_{30} = 2265$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $S_{30} = 2340$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $S_{30} = 4530$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $S_{30} = 2265$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "cheer",
        "mascotTip": "S_{30} = 15 * 151 = 2265. Tính toán rất gọn gàng!",
        "narration": "Hết thời gian. Áp dụng công thức số hai: S n bằng n nhân mở ngoặc hai u một cộng n trừ một nhân d đóng ngoặc chia cho hai. Với n bằng ba mươi, ta có: S ba mươi bằng ba mươi nhân mở ngoặc hai nhân ba cộng hai mươi chín nhân năm đóng ngoặc chia cho hai. Ba mươi chia hai được mười lăm. Bên trong ngoặc: hai nhân ba bằng sáu; hai mươi chín nhân năm bằng một trăm bốn mươi lăm; sáu cộng một trăm bốn mươi lăm bằng một trăm năm mươi mốt. Mười lăm nhân với một trăm năm mươi mốt bằng hai nghìn hai trăm sáu mươi lăm. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Áp dụng công thức $S_n = \\frac{n[2u_1 + (n - 1)d]}{2}$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Thay số với $n = 30, u_1 = 3, d = 5$:</p>
      $$S_{30} = \\frac{30[2(3) + (30 - 1)5]}{2} = 15 \\times [6 + 29 \\times 5]$$
      <div class="text-center font-bold text-purple-300 text-sm py-1">
        $$S_{30} = 15 \\times [6 + 145] = 15 \\times 151 = 2265$$
      </div>
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 <b>Đáp án chọn: B ($S_{30} = 2265$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $u_1$ VÀ $d$ KHI BIẾT TỔNG $S_n = 2n^2 + 3n$",
        "subtitle": "DẠNG 2 • BÀI TOÁN XÁC ĐỊNH CSC QUA ĐA THỨC TỔNG $S_n$",
        "mascotMode": "think",
        "mascotTip": "u_1 = S_1 = 2(1)^2 + 3(1) = 5. S_2 = 2(4) + 6 = 14 => u_2 = 14 - 5 = 9 => d = 4!",
        "narration": "Ví dụ số hai: Cho cấp số cộng u n có tổng n số hạng đầu tiên được xác định bởi công thức S n bằng hai n bình phương cộng ba n với mọi n thuộc N sao. Hãy tìm số hạng đầu u một và công sai d của cấp số cộng đó. Các em có ba mươi giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Xác Định Từ $S_n$</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-pink-200 mb-2">Cho $S_n = 2n^2 + 3n$, tìm $u_1$ và $d$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số cộng $(u_n)$ có $S_n = 2n^2 + 3n$. Giá trị của $u_1$ và $d$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $u_1 = 5; \\; d = 4$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $u_1 = 5; \\; d = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $u_1 = 3; \\; d = 4$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $u_1 = 5; \\; d = 3$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $u_1 = 5$ VÀ $d = 4$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "celebrate",
        "mascotTip": "u_1 = 5, u_2 = 14 - 5 = 9 => d = 9 - 5 = 4. Rất nhanh chỉ trong 5 giây!",
        "narration": "Hết ba mươi giây. Lời giải cực nhanh: Với n bằng một, tổng của một số hạng đầu tiên chính là u một: u một bằng S một bằng hai nhân một bình cộng ba nhân một bằng năm. Với n bằng hai, tổng của hai số hạng đầu tiên là S hai: S hai bằng hai nhân hai bình cộng ba nhân hai, bằng tám cộng sáu bằng mười bốn. Vì S hai bằng u một cộng u hai nên u hai bằng S hai trừ u một, bằng mười bốn trừ năm bằng chín. Khi đó công sai d bằng u hai trừ u một, bằng chín trừ năm bằng bốn. Như vậy u một bằng năm và d bằng bốn. Đáp án chính xác là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-pink-300">Tính trực tiếp $S_1$ và $S_2$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Tính $u_1 = S_1$:</p>
      $$u_1 = S_1 = 2(1)^2 + 3(1) = 5$$
      <p class="text-slate-200">• Tính $S_2 = u_1 + u_2$:</p>
      $$S_2 = 2(2)^2 + 3(2) = 8 + 6 = 14 \\implies u_2 = S_2 - u_1 = 14 - 5 = 9$$
      <p class="text-slate-200">• Tính công sai $d$:</p>
      <div class="text-center font-bold text-pink-300 text-sm py-1">
        $$d = u_2 - u_1 = 9 - 5 = 4$$
      </div>
      <div class="p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2">
        👉 <b>Kết luận:</b> $u_1 = 5$ và $d = 4$. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÍNH TỔNG CÁC SỐ CHIA HẾT CHO 3",
        "subtitle": "DẠNG 3 • TÍNH TỔNG DÃY SỐ TỰ NHIÊN CÁCH ĐỀU NHỎ HƠN 100",
        "mascotMode": "think",
        "mascotTip": "Các số đó: 3, 6, 9... 99. u_1 = 3, d = 3, u_n = 99 => n = 33 số hạng. Tính S_{33}!",
        "narration": "Ví dụ số ba: Tính tổng của tất cả các số tự nhiên chia hết cho ba và nhỏ hơn một trăm. Các em có mười lăm giây để xác định số lượng số hạng và tính tổng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Số Tự Nhiên</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">Tổng các số chia hết cho 3 nhỏ hơn 100</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Tổng $S = 3 + 6 + 9 + \\dots + 99$ bằng:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $S = 1650$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $S = 1683$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $S = 1716$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $S = 3366$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $S = 1683$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "explain",
        "mascotTip": "n = (99 - 3)/3 + 1 = 33 số. S = 33 * (3 + 99) / 2 = 33 * 51 = 1683!",
        "narration": "Hết thời gian. Các số tự nhiên chia hết cho ba và nhỏ hơn một trăm là: ba, sáu, chín, chấm chấm chấm đến chín mươi chín. Đây là một cấp số cộng có số hạng đầu u một bằng ba, công sai d bằng ba và số hạng cuối u n bằng chín mươi chín. Ta tìm số lượng số hạng n: chín mươi chín trừ ba chia ba cộng một, bằng ba mươi ba số hạng. Áp dụng công thức một: tổng S bằng n nhân mở ngoặc số đầu cộng số cuối đóng ngoặc chia hai. Thay số vào: ba mươi ba nhân mở ngoặc ba cộng chín mươi chín đóng ngoặc chia hai. Ba cộng chín mươi chín bằng một trăm lẻ hai, chia hai bằng năm mươi mốt. Ba mươi ba nhân năm mươi mốt bằng một nghìn sáu trăm tám mươi ba. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Áp dụng công thức $S_n = \\frac{n(u_1 + u_n)}{2}$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Dãy các số là: $3, 6, 9, \\dots, 99$ ($u_1 = 3, d = 3, u_n = 99$).</p>
      <p class="text-slate-200">• Số lượng số hạng:</p>
      $$n = \\frac{99 - 3}{3} + 1 = 33$$
      <p class="text-slate-200">• Tính tổng:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$S_{33} = \\frac{33(3 + 99)}{2} = \\frac{33 \\times 102}{2} = 33 \\times 51 = 1683$$
      </div>
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 <b>Đáp án chọn: B ($S = 1683$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ HÀNG GHẾ RẠP HÁT",
        "subtitle": "DẠNG 4 • TÍNH TỔNG SỐ GHẾ TRONG KHÁN PHÒNG",
        "mascotMode": "think",
        "mascotTip": "Hàng 1 có 18 ghế (u_1 = 18). Mỗi hàng sau tăng 2 ghế (d = 2). Rạp có 25 hàng (n = 25)!",
        "narration": "Ví dụ số bốn là bài toán thực tế rất hay gặp trong đề thi: Một rạp hát có hai mươi lăm hàng ghế. Hàng ghế đầu tiên có mười tám ghế, mỗi hàng tiếp theo nhiều hơn hàng đứng trước nó hai ghế. Hỏi toàn bộ rạp hát đó có tất cả bao nhiêu ghế? Các em có ba mươi giây để tính tổng số ghế.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Bài Toán Thực Tế</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Số ghế trong rạp hát 25 hàng</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Hàng 1 có 18 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Tổng số ghế của cả 25 hàng là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> 1050 ghế</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> 1025 ghế</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> 1100 ghế</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> 980 ghế</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ TỔNG CỘNG 1050 GHẾ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "celebrate",
        "mascotTip": "S_{25} = 25 * [2(18) + 24(2)] / 2 = 25 * (36 + 48) / 2 = 25 * 42 = 1050 ghế!",
        "narration": "Thời gian đã hết. Số ghế ở mỗi hàng lập thành một cấp số cộng có số hạng đầu u một bằng mười tám, công sai d bằng hai, và số lượng hàng ghế n bằng hai mươi lăm. Tổng số ghế của toàn bộ rạp hát chính là S hai mươi lăm: S hai mươi lăm bằng hai mươi lăm nhân mở ngoặc hai nhân mười tám cộng hai mươi lăm trừ một nhân hai đóng ngoặc chia cho hai. Bên trong ngoặc: hai nhân mười tám bằng ba mươi sáu; hai mươi tư nhân hai bằng bốn mươi tám; ba mươi sáu cộng bốn mươi tám bằng tám mươi tư. Tám mươi tư chia hai bằng bốn mươi hai. Hai mươi lăm nhân bốn mươi hai bằng một nghìn không trăm năm mươi ghế. Đáp án chính xác là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Mô hình hóa số ghế bằng cấp số cộng</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Số ghế mỗi hàng là CSC có: $u_1 = 18, d = 2, n = 25$.</p>
      <p class="text-slate-200">• Tổng số ghế của rạp hát là:</p>
      $$S_{25} = \\frac{25[2(18) + (25 - 1)2]}{2} = \\frac{25[36 + 48]}{2} = \\frac{25 \\times 84}{2} = 25 \\times 42 = 1050 \\text{ (ghế)}$$
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        👉 <b>Kết luận:</b> Rạp hát có tất cả $1050$ ghế. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ TÍNH TỔNG $S_n$",
        "subtitle": "LỖI QUÊN HỆ SỐ 2 Ở $2u_1$ VÀ LỖI ĐẾM SAI $n$",
        "mascotMode": "explain",
        "mascotTip": "Công thức là n[2u_1 + (n - 1)d] / 2. Rất nhiều học sinh quên số 2 ở trước u_1!",
        "narration": "Thầy Nam Minh lưu ý hai lỗi bẫy thi thường gặp khi tính tổng cấp số cộng: Thứ nhất là khi dùng công thức hai, rất nhiều bạn viết nhầm thành u một cộng n trừ một nhân d, quên mất hệ số hai ở trước u một. Nhớ rằng ở công thức một có u một cộng u n, mà u n bằng u một cộng n trừ một d, nên phải là hai u một. Thứ hai là khi đếm số các số hạng n từ số a đến số b cách đều d, công thức tính số lượng luôn là: số cuối trừ số đầu chia khoảng cách d rồi cộng thêm một. Nếu quên cộng một thì các em sẽ bị đếm thiếu một số hạng dẫn đến sai toàn bộ tổng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">2 Lỗi Sai Phổ Biến Khi Tính Tổng $S_n$</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Quên số 2 ở $2u_1$</h4>
        <p class="text-slate-300 leading-relaxed font-mono">
          $S_n = \\frac{n[u_1 + (n - 1)d]}{2}$ (SAI!)<br/>
          Chính xác phải là: $\\mathbf{2u_1}$!<br/>
          $$S_n = \\frac{n[\\mathbf{2}u_1 + (n - 1)d]}{2}$$
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Quên cộng 1 khi đếm số hạng</h4>
        <p class="text-slate-300 leading-relaxed">
          Công thức đếm số lượng:
          $$n = \\frac{\\text{Cuối} - \\text{Đầu}}{d} \\mathbf{+ 1}$$
          👉 Quên $+1$ sẽ đếm thiếu 1 số hạng dẫn đến sai toàn bộ kết quả!
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT TOÀN BỘ BÀI 6 & CHUYỂN SANG BÀI 7: CẤP SỐ NHÂN",
        "subtitle": "CHINH PHỤC CẤP SỐ CỘNG • BÀN ĐẠP TIẾN VÀO CẤP SỐ NHÂN",
        "mascotMode": "celebrate",
        "mascotTip": "Chúc mừng em hoàn thành trọn vẹn Bài 6 Cấp số cộng! Hãy bước sang Bài 7 Cấp số nhân!",
        "narration": "Chúc mừng tất cả các em đã hoàn thành xuất sắc toàn bộ ba mục bài giảng của Bài sáu: Cấp số cộng. Chúng ta đã làm chủ định nghĩa, công sai d, công thức số hạng tổng quát và hai công thức tính tổng S n cùng các bài toán ứng dụng thực tế. Bây giờ, thầy mời các em cùng bước sang Bài bảy: Cấp số nhân, nơi quy luật cộng dồn sẽ được nâng cấp thành quy luật nhân dồn lũy thừa vô cùng kỳ diệu. Hẹn gặp lại các em ở Bài bảy!",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl">🎓⭐🎉</div>
    <h3 class="text-xl font-black text-purple-200 mb-2">Chúc Mừng Em Hoàn Thành Xuất Sắc Bài 6!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã chinh phục trọn vẹn Cấp số cộng: Định nghĩa, Công sai $d$, Số hạng tổng quát $u_n$ và Công thức tính tổng $S_n$ với 12 ví dụ mẫu mực. Giờ là lúc bước sang Bài 7: Cấp số nhân!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ 12 Ví dụ tiêu biểu Bài 6</span>
      <span class="px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40">✔ 2 Công thức $S_n$ làm chủ</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🔥 Chuyển sang Bài 7: Cấp số nhân</span>
    </div>
  </div>
</div>
"""
    }
]

print("ch2_bai6_data.py fully completed: MUC1, MUC2, MUC3 ready.")
