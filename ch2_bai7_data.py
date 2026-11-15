# -*- coding: utf-8 -*-
"""
ch2_bai7_data.py
Dữ liệu 3 mục bài giảng cho Bài 7: Cấp số nhân (Chương 2 - Toán 11 KNTT):
- Mục 1: Định nghĩa cấp số nhân & Công bội
- Mục 2: Số hạng tổng quát của cấp số nhân
- Mục 3: Tổng n số hạng đầu tiên của cấp số nhân & Bài toán lãi kép
Mỗi mục 12 scenes, 4 ví dụ minh họa tiêu biểu, đồng hồ 15s/30s, mascot Cú Thông Thái.
"""

# ==============================================================================
# BÀI 7 - MỤC 1: ĐỊNH NGHĨA CẤP SỐ NHÂN & CÔNG BỘI
# ==============================================================================
BAI7_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA CẤP SỐ NHÂN VÀ CÔNG BỘI",
        "subtitle": "BÀI 7 • CẤP SỐ NHÂN • MỤC 1: QUY LUẬT NHÂN DỒN HẰNG SỐ $q$",
        "mascotMode": "pointer",
        "mascotTip": "Quy tắc: Kể từ số hạng thứ hai, mỗi số hạng bằng số hạng trước NHÂN với công bội q không đổi!",
        "narration": "Chào mừng các em đến với Bài bảy: Cấp số nhân, bài học trọng tâm cuối cùng của Chương hai. Ở Mục một, chúng ta cùng tìm hiểu về định nghĩa cấp số nhân và tính chất của ba số hạng liên tiếp. Trong toán học, một dãy số vô hạn hoặc hữu hạn được gọi là cấp số nhân nếu kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó nhân với một số không đổi q. Số q được gọi là công bội của cấp số nhân. Nếu công bội q bằng một, cấp số nhân là một dãy số không đổi. Nếu q lớn hơn một, dãy số tăng trưởng rất nhanh theo hàm mũ. Nếu q âm, các số hạng sẽ đan dấu âm dương luân phiên.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định nghĩa cốt lõi</span>
      <h3 class="text-xl font-black text-emerald-200">Định Nghĩa Cấp Số Nhân & Công Bội $q$</h3>
    </div>
    <p class="text-sm text-slate-300">Dãy số có quy luật nhân dồn hằng số với mọi $n \\in \\mathbb{N}^*$:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">1. Định nghĩa chuẩn</h4>
      <p class="text-slate-300 leading-relaxed">
        Dãy số $(u_n)$ là cấp số nhân khi và chỉ khi:
        $$u_{n+1} = u_n \\cdot q, \\quad \\forall n \\ge 1$$
        • $q$: <b>công bội</b> ($q = \\frac{u_{n+1}}{u_n}$ khi $u_n \\ne 0$).<br/>
        • $u_1$: số hạng đầu tiên.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">2. Các trường hợp đặc biệt</h4>
      <p class="text-slate-300 leading-relaxed">
        • $q = 1 \\implies u_n = u_1$ (dãy số không đổi: $c, c, c, \\dots$).<br/>
        • $q = 0 \\implies u_1, 0, 0, 0, \\dots$<br/>
        • $q < 0 \\implies$ Dãy số <b>đan dấu</b> ($+, -, +, -, \\dots$).
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. TÍNH CHẤT TRUNG BÌNH NHÂN CỦA 3 SỐ HẠNG LIÊN TIẾP",
        "subtitle": "HỆ THỨC HÌNH HỌC: BÌNH PHƯƠNG SỐ GIỮA BẰNG TÍCH 2 SỐ HAI BÊN",
        "mascotMode": "explain",
        "mascotTip": "Tính chất vàng của CSN: u_k^2 = u_{k-1} * u_{k+1} hay a * c = b^2!",
        "narration": "Cấp số nhân có một tính chất trung bình nhân rất đặc sắc: Trong một cấp số nhân, bình phương của mỗi số hạng kể từ số hạng thứ hai luôn bằng tích của hai số hạng kề bên nó. Tức là u k bình phương bằng u k trừ một nhân u k cộng một. Nếu ba số a, b, c theo thứ tự lập thành một cấp số nhân thì ta luôn có hệ thức kinh điển: a nhân c bằng b bình phương. Khi cả ba số đều dương thì b chính là trung bình nhân của a và c.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-teal-300">Tính Chất Cốt Lõi: Trung Bình Nhân</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">Với mọi số hạng thứ $k \\ge 2$ trong cấp số nhân $(u_n)$:</p>
      <div class="text-center font-bold text-teal-300 text-base py-1">
        $$u_k^2 = u_{k-1} \\cdot u_{k+1}$$
      </div>
      <p class="text-slate-300">👉 <b>Quy tắc 3 số liên tiếp:</b> Ba số $a, b, c$ theo thứ tự lập thành một cấp số nhân:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$a \\cdot c = b^2 \\iff |b| = \\sqrt{ac} \\; (\\text{khi } ac \\ge 0)$$
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: NHẬN DIỆN CẤP SỐ NHÂN VÀ TÌM CÔNG BỘI",
        "subtitle": "DẠNG 1 • XÉT TỈ SỐ $\\frac{u_{n+1}}{u_n} = q$ KHÔNG ĐỔI",
        "mascotMode": "think",
        "mascotTip": "u_{n+1} / u_n = [3 * 2^{n+1}] / [3 * 2^n] = 2 (hằng số) => CSN có u_1 = 6, q = 2!",
        "narration": "Ví dụ số một: Khẳng định nào sau đây là đúng về dãy số u n có số hạng tổng quát u n bằng ba nhân hai mũ n? Tìm số hạng đầu u một và công bội q của dãy số đó. Các em có mười lăm giây để suy luận.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Nhận Diện</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Nhận diện cấp số nhân</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Khẳng định nào sau đây là đúng về dãy số $u_n = 3 \\cdot 2^n$?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Là CSN với $u_1 = 6, q = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Là CSN với $u_1 = 3, q = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Là CSC với $u_1 = 6, d = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Không phải cấp số nhân</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: LÀ CSN VỚI $u_1 = 6, q = 2$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "u_1 = 3 * 2^1 = 6. Tỉ số u_{n+1} / u_n = 2 (hằng số). Rất nhiều học sinh nhầm u_1 = 3!",
        "narration": "Hết thời gian. Ta xét tỉ số u n cộng một chia cho u n: u n cộng một bằng ba nhân hai mũ n cộng một. Chia cho u n bằng ba nhân hai mũ n. Rút gọn số ba ở tử và mẫu, hai mũ n cộng một chia hai mũ n bằng hai, là một hằng số không đổi với mọi n. Do đó dãy số u n là một cấp số nhân có công bội q bằng hai. Chú ý số hạng đầu tiên: thay n bằng một vào công thức, ta có u một bằng ba nhân hai mũ một bằng sáu. Rất nhiều bạn nhìn vào số ba tưởng u một bằng ba là sai. Đáp án chính xác là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Xét tỉ số giữa hai số hạng liên tiếp</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Tính $u_1$ (với $n = 1$):</p>
      <div class="text-center font-bold text-emerald-300 text-sm py-1">
        $$u_1 = 3 \\cdot 2^1 = 6$$
      </div>
      <p class="text-slate-200">• Xét tỉ số với mọi $n \\ge 1$:</p>
      $$\\frac{u_{n+1}}{u_n} = \\frac{3 \\cdot 2^{n+1}}{3 \\cdot 2^n} = \\frac{2^{n+1}}{2^n} = 2 \\;\\text{(hằng số)}$$
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        👉 $(u_n)$ là cấp số nhân có số hạng đầu $u_1 = 6$ và công bội $q = 2$. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH CÔNG BỘI VÀ CÁC SỐ HẠNG TIẾP THEO",
        "subtitle": "DẠNG 2 • TÌM $q = \\frac{u_2}{u_1}$ VÀ TÍNH $u_3, u_4$",
        "mascotMode": "think",
        "mascotTip": "Công bội q = u_2 / u_1 = -6 / 2 = -3. Nhân q liên tiếp: u_3 = (-6)(-3) = 18!",
        "narration": "Ví dụ số hai: Cho cấp số nhân u n có số hạng đầu u một bằng hai và số hạng thứ hai u hai bằng trừ sáu. Hãy tìm công bội q và tính hai số hạng tiếp theo là u ba và u bốn. Các em có ba mươi giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Tính Số Hạng</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-teal-200 mb-2">Tính $q, u_3, u_4$ khi biết $u_1 = 2, u_2 = -6$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và $u_2 = -6$. Giá trị của $q, u_3, u_4$ lần lượt là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $q = 3; u_3 = 18; u_4 = 54$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $q = -3; u_3 = 18; u_4 = -54$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $q = -3; u_3 = -18; u_4 = 54$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $q = -4; u_3 = 24; u_4 = -96$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $q = -3, u_3 = 18, u_4 = -54$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "q = -3 âm nên dãy đan dấu: 2, -6, 18, -54... Chúc mừng các em chọn B!",
        "narration": "Hết ba mươi giây. Lời giải rất dễ dàng: Công bội q bằng u hai chia cho u một: q bằng trừ sáu chia cho hai bằng trừ ba. Vì q âm nên các số hạng đan dấu: u ba bằng u hai nhân q, bằng trừ sáu nhân trừ ba bằng dương mười tám. u bốn bằng u ba nhân q, bằng mười tám nhân trừ ba bằng trừ năm mươi tư. Bốn số hạng đầu tiên là hai, trừ sáu, mười tám, trừ năm mươi tư. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-teal-300">Nhân dồn công bội $q = -3$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Tính công bội $q$:</p>
      <div class="text-center font-bold text-teal-300 text-sm py-1">
        $$q = \\frac{u_2}{u_1} = \\frac{-6}{2} = -3$$
      </div>
      <p class="text-slate-200">• Tính các số hạng tiếp theo:</p>
      $$u_3 = u_2 \\cdot q = (-6) \\cdot (-3) = 18$$
      $$u_4 = u_3 \\cdot q = 18 \\cdot (-3) = -54$$
      <div class="p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2">
        👉 <b>Đáp án chọn: B ($q = -3; u_3 = 18; u_4 = -54$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM $x$ ĐỂ 3 SỐ LẬP THÀNH CẤP SỐ NHÂN",
        "subtitle": "DẠNG 3 • ÁP DỤNG HỆ THỨC TRUNG BÌNH NHÂN $a \\cdot c = b^2$",
        "mascotMode": "think",
        "mascotTip": "(x + 1)^2 = (x - 2)(3x + 3). Khai triển giải phương trình bậc hai tìm x!",
        "narration": "Ví dụ số ba: Tìm tất cả các giá trị của x để ba số: x trừ hai, x cộng một, và ba x cộng ba theo thứ tự lập thành một cấp số nhân. Các em có mười lăm giây để thiết lập phương trình và tìm nghiệm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Tìm Ẩn Số</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-cyan-200 mb-2">Tìm $x$ để 3 số lập thành CSN</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Tìm $x$ để ba số $x - 2, \\; x + 1, \\; 3x + 3$ theo thứ tự lập thành một cấp số nhân:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $x = 1$ hoặc $x = -\\frac{7}{2}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $x = 2$ hoặc $x = -1$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $x = -1$ hoặc $x = \\frac{7}{2}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $x = 3$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $x = -1$ HOẶC $x = \\frac{7}{2}$ (CHỌN ĐÁP ÁN C)",
        "mascotMode": "explain",
        "mascotTip": "(x+1)^2 = (x-2)(3x+3) <=> x^2 + 2x + 1 = 3x^2 - 3x - 6 <=> 2x^2 - 5x - 7 = 0!",
        "narration": "Hết thời gian. Áp dụng tính chất ba số liên tiếp của cấp số nhân: tích số đầu và số cuối bằng bình phương số ở giữa. Ta có: mở ngoặc x trừ hai đóng ngoặc nhân mở ngoặc ba x cộng ba đóng ngoặc, bằng mở ngoặc x cộng một đóng ngoặc bình phương. Khai triển vế trái: ba x bình trừ ba x trừ sáu. Khai triển vế phải: x bình cộng hai x cộng một. Chuyển vế rút gọn, ta được phương trình bậc hai: hai x bình trừ năm x trừ bảy bằng không. Phương trình này có dạng a trừ b cộng c bằng không, cho ta hai nghiệm: x bằng trừ một và x bằng trừ c chia a bằng bảy phần hai. Cả hai giá trị x này đều thỏa mãn. Đáp án chính xác là C.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-cyan-300">Giải phương trình bậc hai từ hệ thức $b^2 = ac$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Áp dụng điều kiện: $(x + 1)^2 = (x - 2)(3x + 3)$:</p>
      $$x^2 + 2x + 1 = 3x^2 + 3x - 6x - 6 = 3x^2 - 3x - 6$$
      <p class="text-slate-200">• Chuyển vế sang phải:</p>
      $$2x^2 - 5x - 7 = 0 \\iff (x + 1)(2x - 7) = 0 \\iff \\left[\\begin{array}{l} x = -1 \\\\ x = \\frac{7}{2} \\end{array}\\right.$$
      <p class="text-emerald-300 font-mono">• Với $x = -1$: dãy là $-3, 0, 0$ (CSN có $q = 0$). Với $x = \\frac{7}{2}$: dãy là $\\frac{3}{2}, \\frac{9}{2}, \\frac{27}{2}$ (CSN có $q = 3$).</p>
      <div class="p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2">
        👉 <b>Đáp án chọn: C ($x = -1$ hoặc $x = \\frac{7}{2}$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: 3 SỐ DƯƠNG LẬP THÀNH CSN CÓ TÍCH BẰNG 216",
        "subtitle": "DẠNG 4 • TẬN DỤNG HỆ THỨC $a \\cdot c = b^2 \\implies a \\cdot b \\cdot c = b^3$",
        "mascotMode": "think",
        "mascotTip": "Tích a * b * c = (a * c) * b = b^2 * b = b^3 = 216 => b = căn bậc ba của 216!",
        "narration": "Ví dụ số bốn: Ba số thực dương a, b, c theo thứ tự lập thành một cấp số nhân. Biết rằng tích của ba số đó bằng hai trăm mười sáu. Hãy tìm giá trị của số đứng ở giữa là số b. Các em có ba mươi giây để suy luận.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Tích 3 Số Hạng</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">Tìm số thứ hai $b$ khi biết tích</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Ba số dương $a, b, c$ theo thứ tự lập thành một cấp số nhân và có tích $a \\cdot b \\cdot c = 216$. Giá trị của $b$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $b = 4$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $b = 6$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $b = 8$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $b = 9$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $b^3 = 216 \\implies b = 6$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "Tích của 3 số liên tiếp luôn bằng lập phương số ở giữa: b^3 = 216 => b = 6!",
        "narration": "Thời gian đã hết. Đây là bài toán kinh điển áp dụng tính chất trung bình nhân: Vì a, b, c lập thành cấp số nhân nên tích của số đầu và số cuối bằng bình phương số ở giữa: a nhân c bằng b bình phương. Khi đó, tích của cả ba số là: a nhân b nhân c, ta nhóm a nhân c lại được b bình phương nhân với b, bằng b mũ ba. Theo đề bài, tích này bằng hai trăm mười sáu. Ta có phương trình: b mũ ba bằng hai trăm mười sáu. Lấy căn bậc ba hai vế, ta tìm được ngay b bằng sáu. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Áp dụng công thức $a \\cdot c = b^2$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Vì $a, b, c$ lập thành cấp số nhân nên: $a \\cdot c = b^2$.</p>
      <p class="text-slate-200">• Tích của ba số hạng:</p>
      $$a \\cdot b \\cdot c = (a \\cdot c) \\cdot b = b^2 \\cdot b = b^3$$
      <p class="text-slate-200">• Theo giả thiết bài toán:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$b^3 = 216 \\iff b = \\sqrt[3]{216} = 6$$
      </div>
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 <b>Kết luận:</b> Số thứ hai là $b = 6$. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ CẤP SỐ NHÂN",
        "subtitle": "DÃY ĐAN DẤU KHI $q < 0$ VÀ TRƯỜNG HỢP $q = 0$",
        "mascotMode": "explain",
        "mascotTip": "Khi q < 0, dãy đan dấu (+, -, +, -) nên không phải dãy tăng cũng không phải dãy giảm!",
        "narration": "Thầy Nam Minh lưu ý hai bẫy thi trắc nghiệm rất dễ mất điểm: Thứ nhất, khi công bội q âm, cấp số nhân sẽ luân phiên đổi dấu giữa dương và âm. Khi đó dãy số này là dãy số không tăng, không giảm. Đừng nhầm lẫn cứ công bội q âm là dãy giảm. Thứ hai, khi tính công bội q từ phương trình b bình bằng a nhân c, ta phải lấy căn bậc hai, luôn có hai trường hợp cộng trừ căn bậc hai. Nếu đề bài không cho giả thiết các số dương thì các em phải xét cả hai trường hợp q dương và q âm để không bị sót nghiệm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">2 Bẫy Thi Phổ Biến Về Cấp Số Nhân</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Ngộ nhận tính đơn điệu khi $q < 0$</h4>
        <p class="text-slate-300 leading-relaxed">
          Ví dụ dãy $2, -6, 18, -54...$ có $q = -3 < 0$.<br/>
          Dãy số này <b>KHÔNG TĂNG, KHÔNG GIẢM</b> vì các số hạng đan dấu!<br/>
          👉 Tuyệt đối không kết luận dãy giảm khi $q < 0$!
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Quên dấu $\\pm$ khi khai căn</h4>
        <p class="text-slate-300 leading-relaxed">
          Từ $q^2 = 4 \\implies q = \\pm 2$ (có 2 giá trị công bội).<br/>
          Nếu đề bài không cho dữ kiện "các số hạng dương", bỏ sót $q = -2$ sẽ làm mất một nửa số nghiệm!
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
        "mascotTip": "Làm chủ định nghĩa và hệ thức trung bình nhân! Chuyển sang Mục 2 để lập công thức u_n = u_1 * q^{n-1}!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục một của Bài bảy. Chúng ta đã làm chủ định nghĩa cấp số nhân, công bội q và tính chất trung bình nhân tuyệt vời. Ngay bây giờ, mời các em cùng chuyển sang Mục hai để khám phá công thức số hạng tổng quát u n, chìa khóa để tính nhanh số hạng bất kỳ theo cấp số nhân.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl">🦉✨</div>
    <h3 class="text-xl font-black text-emerald-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 1!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã nắm trọn định nghĩa cấp số nhân và hệ thức trung bình nhân $a \\cdot c = b^2$. Hãy chuyển sang Mục 2 để làm chủ công thức Số hạng tổng quát $u_n = u_1 \\cdot q^{n-1}$!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ 4 Ví dụ đã hoàn thành</span>
      <span class="px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40">✔ Hệ thức $a \\cdot c = b^2$</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 2</span>
    </div>
  </div>
</div>
"""
    }
]

print("ch2_bai7_data.py initialized: BAI7_MUC1_SCENES ready.")

# ==============================================================================
# BÀI 7 - MỤC 2: SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ NHÂN
# ==============================================================================
BAI7_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ NHÂN",
        "subtitle": "BÀI 7 • CẤP SỐ NHÂN • MỤC 2: CÔNG THỨC $u_n = u_1 \\cdot q^{n-1}$",
        "mascotMode": "pointer",
        "mascotTip": "Quy tắc vàng: Để đi từ u_1 đến u_n, ta nhân thêm (n - 1) lần công bội q: u_n = u_1 * q^{n-1}!",
        "narration": "Chào mừng các em đến với Mục hai: Số hạng tổng quát của cấp số nhân. Nếu biết số hạng đầu u một và công bội q, ta có thể tính ngay lập tức bất kỳ số hạng u n nào mà không cần nhân liên tiếp từng bước. Định lý nêu rõ: Nếu cấp số nhân u n có số hạng đầu u một và công bội q thì số hạng tổng quát u n được xác định bởi công thức: u n bằng u một nhân q mũ n trừ một, với mọi n lớn hơn hoặc bằng hai. Hãy đặc biệt lưu ý số mũ của q là n trừ một chứ không phải n, vì từ số hạng thứ nhất đến số hạng thứ n, ta chỉ cần nhân qua n trừ một lần công bội q.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định lý trọng tâm</span>
      <h3 class="text-xl font-black text-blue-200">Công Thức Số Hạng Tổng Quát $u_n$</h3>
    </div>
    <p class="text-sm text-slate-300">Tính số hạng bất kỳ theo số hạng đầu $u_1$ và công bội $q$:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md">
      <h4 class="font-bold text-blue-300 text-sm mb-1">1. Công thức số hạng tổng quát</h4>
      <p class="text-slate-300 leading-relaxed">
        $$u_n = u_1 \\cdot q^{n-1}, \\quad \\forall n \\ge 1$$
        • $u_1$: số hạng đầu tiên.<br/>
        • $q$: công bội.<br/>
        • Số mũ là: $n - 1$ (chứ không phải $n$!).
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md">
      <h4 class="font-bold text-indigo-300 text-sm mb-1">2. Mối liên hệ 2 số hạng bất kỳ</h4>
      <p class="text-slate-300 leading-relaxed">
        Với hai số hạng $u_m$ và $u_n$ bất kỳ ($m > n$):
        $$\\frac{u_m}{u_n} = q^{m - n} \\iff u_m = u_n \\cdot q^{m - n}$$
        👉 <i>Chia vế cho vế để tìm công bội $q$ cực nhanh!</i>
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. PHƯƠNG PHÁP CHIA VẾ TÌM $u_1$ VÀ $q$",
        "subtitle": "KỸ NĂNG XỬ LÝ HỆ PHƯƠNG TRÌNH CẤP SỐ NHÂN",
        "mascotMode": "explain",
        "mascotTip": "Hệ phương trình CSN giải bằng cách CHIA hai vế cho nhau để triệt tiêu u_1, tìm ra q^{m-n}!",
        "narration": "Khi gặp bài toán cho biết hai số hạng bất kỳ của cấp số nhân, ví dụ u hai và u năm, phương pháp giải tối ưu nhất là chia phương trình thứ hai cho phương trình thứ nhất. Khi đó số hạng đầu u một ở cả tử và mẫu bị triệt tiêu hoàn toàn, ta chỉ còn lại q mũ năm trừ hai bằng q mũ ba. Từ đó ta giải tìm được q, rồi thay ngược lại để tìm u một. Phương pháp chia vế này giúp đơn giản hóa mọi bài toán hệ phương trình cấp số nhân.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-blue-300">Quy Trình Chia Vế Tìm $u_1$ Và Công Bội $q$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">Giả sử bài toán cho biết $u_p = A$ và $u_q = B$ ($p < q$):</p>
      <div class="text-center font-bold text-blue-300 text-sm py-1">
        $$\\begin{cases} u_1 \\cdot q^{p-1} = A \\\\ u_1 \\cdot q^{q-1} = B \\end{cases} \\implies \\frac{u_1 \\cdot q^{q-1}}{u_1 \\cdot q^{p-1}} = \\frac{B}{A} \\implies q^{q - p} = \\frac{B}{A}$$
      </div>
      <p class="text-slate-300">👉 Khai căn để tìm $q$, sau đó thay vào tìm $u_1 = \\frac{A}{q^{p-1}}$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG THỨ 8 CỦA CSN",
        "subtitle": "DẠNG 1 • CHO BIẾT $u_1 = 3, q = 2$, TÍNH $u_8$",
        "mascotMode": "think",
        "mascotTip": "u_8 = u_1 * q^7 = 3 * 2^7 = 3 * 128. Tính cẩn thận lũy thừa!",
        "narration": "Ví dụ số một: Cho cấp số nhân u n có số hạng đầu u một bằng ba và công bội q bằng hai. Hãy tính số hạng thứ tám u tám của cấp số nhân đó. Các em có mười lăm giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Tính $u_8$</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-blue-200 mb-2">Tìm số hạng thứ 8 của cấp số nhân</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Số hạng $u_8$ bằng:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $u_8 = 384$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $u_8 = 768$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $u_8 = 192$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $u_8 = 256$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $u_8 = 384$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "u_8 = 3 * 2^7 = 3 * 128 = 384. Chúc mừng các em chọn A!",
        "narration": "Hết thời gian. Áp dụng công thức số hạng tổng quát: u n bằng u một nhân q mũ n trừ một. Với n bằng tám, ta có: u tám bằng u một nhân q mũ tám trừ một, tức bằng u một nhân q mũ bảy. Thay số vào: u một bằng ba, q bằng hai, ta có ba nhân hai mũ bảy. Hai mũ bảy bằng một trăm hai mươi tám; ba nhân một trăm hai mươi tám bằng ba trăm tám mươi tư. Đáp án chính xác là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-blue-300">Áp dụng công thức $u_n = u_1 \\cdot q^{n-1}$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Với $n = 8$:</p>
      $$u_8 = u_1 \\cdot q^{8 - 1} = u_1 \\cdot q^7$$
      <p class="text-slate-200">• Thay $u_1 = 3$ và $q = 2$ vào:</p>
      <div class="text-center font-bold text-blue-300 text-sm py-1">
        $$u_8 = 3 \\cdot 2^7 = 3 \\cdot 128 = 384$$
      </div>
      <div class="p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2">
        👉 <b>Đáp án chọn: A ($u_8 = 384$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $u_1$ VÀ $q$ KHI BIẾT $u_2 = 6, u_5 = 48$",
        "subtitle": "DẠNG 2 • CHIA HAI VẾ ĐỂ TÌM CÔNG BỘI $q$",
        "mascotMode": "think",
        "mascotTip": "u_5 / u_2 = q^3 = 48 / 6 = 8 => q = 2. Sau đó u_1 = u_2 / q = 6 / 2 = 3!",
        "narration": "Ví dụ số hai: Cho cấp số nhân u n có số hạng thứ hai u hai bằng sáu và số hạng thứ năm u năm bằng bốn mươi tám. Hãy tìm số hạng đầu u một và công bội q của cấp số nhân này. Các em có ba mươi giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Tìm $u_1, q$</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-indigo-200 mb-2">Tìm $u_1$ và $q$ khi biết $u_2 = 6, u_5 = 48$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số nhân $(u_n)$ có $u_2 = 6$ và $u_5 = 48$. Giá trị của $u_1$ và $q$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $u_1 = 2; q = 3$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $u_1 = 3; q = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $u_1 = 3; q = -2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $u_1 = 4; q = 2$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $u_1 = 3$ VÀ $q = 2$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "q^3 = 48 / 6 = 8 => q = 2. u_1 = 6 / 2 = 3. Hoàn toàn chuẩn xác!",
        "narration": "Hết ba mươi giây. Ta có hệ phương trình: u hai bằng u một nhân q bằng sáu. u năm bằng u một nhân q mũ bốn bằng bốn mươi tám. Lấy phương trình dưới chia cho phương trình trên: u một nhân q mũ bốn chia cho u một nhân q bằng q mũ ba. Bốn mươi tám chia sáu bằng tám. Ta có phương trình: q mũ ba bằng tám, suy ra q bằng căn bậc ba của tám bằng hai. Thay q bằng hai vào phương trình đầu tiên: u một nhân hai bằng sáu, suy ra u một bằng sáu chia hai bằng ba. Như vậy, số hạng đầu u một bằng ba và công bội q bằng hai. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-indigo-300">Chia hai phương trình cho nhau</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có hệ phương trình:</p>
      $$\\begin{cases} u_1 \\cdot q = 6 \\\\ u_1 \\cdot q^4 = 48 \\end{cases}$$
      <p class="text-slate-200">• Lấy phương trình thứ hai chia phương trình thứ nhất:</p>
      $$\\frac{u_1 \\cdot q^4}{u_1 \\cdot q} = \\frac{48}{6} \\iff q^3 = 8 \\iff q = 2$$
      <p class="text-slate-200">• Thay $q = 2$ vào phương trình thứ nhất:</p>
      $$u_1 \\cdot 2 = 6 \\iff u_1 = 3$$
      <div class="p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2">
        👉 <b>Kết luận:</b> $u_1 = 3$ và $q = 2$. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM VỊ TRÍ CỦA SỐ 729/2 TRONG DÃY",
        "subtitle": "DẠNG 3 • GIẢI PHƯƠNG TRÌNH MŨ TÌM CHỈ SỐ $n$",
        "mascotMode": "think",
        "mascotTip": "(1/2) * 3^{n-1} = 729/2 <=> 3^{n-1} = 729 = 3^6 <=> n - 1 = 6 <=> n = 7!",
        "narration": "Ví dụ số ba: Cho cấp số nhân u n có số hạng đầu u một bằng một phần hai và công bội q bằng ba. Hỏi số bảy trăm hai mươi chín phần hai là số hạng thứ bao nhiêu của cấp số nhân đó? Các em có mười lăm giây để giải phương trình mũ.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Vị Trí Số Hạng</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Số 729/2 là số hạng thứ mấy?</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho cấp số nhân $(u_n)$ có $u_1 = \\frac{1}{2}$ và $q = 3$. Số $\\frac{729}{2}$ là số hạng thứ mấy?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Số hạng thứ 7</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Số hạng thứ 6</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Số hạng thứ 8</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Không thuộc dãy</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $n = 7 \\implies \\frac{729}{2} = u_7$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "explain",
        "mascotTip": "3^{n-1} = 729 = 3^6 => n - 1 = 6 => n = 7 (u_7 = 729/2)!",
        "narration": "Hết thời gian. Ta giải phương trình u n bằng bảy trăm hai mươi chín phần hai: một phần hai nhân ba mũ n trừ một bằng bảy trăm hai mươi chín phần hai. Nhân cả hai vế với hai để triệt tiêu mẫu số, ta được: ba mũ n trừ một bằng bảy trăm hai mươi chín. Ta biết rằng bảy trăm hai mươi chín chính là ba mũ sáu: ba mũ hai là chín, chín mũ ba là bảy trăm hai mươi chín. Do đó n trừ một bằng sáu, suy ra n bằng sáu cộng một bằng bảy. Vậy số bảy trăm hai mươi chín phần hai chính là số hạng thứ bảy u bảy của cấp số nhân. Đáp án chọn là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Giải phương trình mũ cơ bản</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có phương trình $u_n = \\frac{729}{2}$:</p>
      $$\\frac{1}{2} \\cdot 3^{n-1} = \\frac{729}{2} \\iff 3^{n-1} = 729$$
      <p class="text-slate-200">• Đưa về cùng cơ số 3:</p>
      $$3^{n-1} = 3^6 \\iff n - 1 = 6 \\iff n = 7$$
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 <b>Kết luận:</b> Số $\\frac{729}{2}$ là số hạng thứ $7$ ($u_7 = \\frac{729}{2}$). <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: TĂNG TRƯỞNG QUẦN THỂ VI KHUẨN",
        "subtitle": "DẠNG 4 • BÀI TOÁN SINH HỌC THỰC TẾ NHÂN ĐÔI MỖI GIỜ",
        "mascotMode": "think",
        "mascotTip": "Ban đầu có 1000 con. Sau mỗi giờ nhân đôi (q = 2). Sau 6 giờ: N(6) = 1000 * 2^6!",
        "narration": "Ví dụ số bốn là bài toán sinh học thực tế tiêu biểu: Một quần thể vi khuẩn ban đầu có một nghìn cá thể. Trong điều kiện nuôi cấy lý tưởng, cứ sau mỗi giờ số lượng vi khuẩn lại nhân đôi. Hỏi sau sáu giờ, quần thể đó có tất cả bao nhiêu con vi khuẩn? Các em có ba mươi giây để tính toán.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Sinh Học Thực Tế</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Tăng trưởng số lượng vi khuẩn sau 6 giờ</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Quần thể vi khuẩn ban đầu có $1000$ con, nhân đôi sau mỗi giờ. Sau $6$ giờ, số lượng vi khuẩn là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> 32000 con</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> 64000 con</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> 128000 con</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> 60000 con</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: 64000 CON VI KHUẨN (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "N = 1000 * 2^6 = 1000 * 64 = 64000 con. Tăng trưởng hàm mũ cực nhanh!",
        "narration": "Thời gian đã hết. Ban đầu tại thời điểm không giờ, số lượng vi khuẩn là một nghìn con. Sau một giờ, số lượng là một nghìn nhân hai bằng hai nghìn con. Sau hai giờ, số lượng là một nghìn nhân hai mũ hai bằng bốn nghìn con. Tổng quát, sau t giờ số lượng vi khuẩn được mô hình bởi công thức: N theo t bằng một nghìn nhân hai mũ t con. Với t bằng sáu giờ, ta có: N tại sáu bằng một nghìn nhân hai mũ sáu. Hai mũ sáu bằng sáu mươi tư; một nghìn nhân sáu mươi tư bằng sáu mươi tư nghìn con vi khuẩn. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Mô hình tăng trưởng hàm mũ</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Số lượng ban đầu ($t = 0$): $N_0 = 1000$.</p>
      <p class="text-slate-200">• Sau $t$ giờ, số lượng nhân đôi liên tiếp $t$ lần:</p>
      $$N(t) = 1000 \\cdot 2^t$$
      <p class="text-slate-200">• Với $t = 6$ giờ:</p>
      <div class="text-center font-bold text-emerald-300 text-sm py-1">
        $$N(6) = 1000 \\cdot 2^6 = 1000 \\cdot 64 = 64000 \\text{ (con vi khuẩn)}$$
      </div>
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        👉 <b>Kết luận:</b> Sau 6 giờ có $64000$ con vi khuẩn. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ SỐ HẠNG TỔNG QUÁT CSN",
        "subtitle": "LỖI NHẦM SỐ MŨ $q^n$ VÀ LỖI DẤU NGOẶC VỚI CÔNG BỘI ÂM",
        "mascotMode": "explain",
        "mascotTip": "Luôn viết u_n = u_1 * q^{n-1} (số mũ n-1). Khi q âm, bắt buộc phải để trong ngoặc: (-q)^{n-1}!",
        "narration": "Thầy Nam Minh lưu ý hai lỗi sai rất hay gặp khi làm bài tập số hạng tổng quát cấp số nhân: Thứ nhất là nhầm số mũ của q thành n thay vì n trừ một. Ví dụ số hạng thứ mười là u một nhân q mũ chín chứ không phải q mũ mười. Thứ hai, khi công bội q là số âm hoặc phân số, các em bắt buộc phải để q trong dấu ngoặc tròn trước khi nâng lên lũy thừa. Ví dụ trừ ba tất cả mũ bốn bằng dương tám mươi mốt, nhưng nếu không viết ngoặc thì máy tính sẽ hiểu là trừ của ba mũ bốn bằng trừ tám mươi mốt, dẫn đến sai dấu hoàn toàn.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">2 Lỗi Sai Phổ Biến Về Công Thức $u_n$</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Nhầm số mũ $q^n$</h4>
        <p class="text-slate-300 leading-relaxed font-mono">
          $u_n = u_1 \\cdot q^n$ (SAI!)<br/>
          Chính xác phải là: $\\mathbf{q^{n-1}}$!<br/>
          Ví dụ $u_5 = u_1 \\cdot q^4$, không phải $u_1 \\cdot q^5$.
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Quên ngoặc khi $q < 0$</h4>
        <p class="text-slate-300 leading-relaxed">
          Với $q = -2$: $(-2)^4 = +16$.<br/>
          Nếu bấm máy viết $-2^4 = -16$ sẽ làm sai dấu toàn bộ bài toán trắc nghiệm!
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
        "mascotTip": "Ghi nhớ công thức u_n = u_1 * q^{n-1}! Sẵn sàng bước sang Mục 3 để tính tổng S_n và bài toán lãi kép!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai. Chúng ta đã làm chủ công thức số hạng tổng quát của cấp số nhân, phương pháp chia vế tìm u một và q, cùng bài toán tăng trưởng vi khuẩn thực tế. Ngay bây giờ, mời các em bước sang Mục ba: Tổng n số hạng đầu tiên của cấp số nhân và bài toán gửi tiết kiệm lãi kép ngân hàng.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl">🎯🚀</div>
    <h3 class="text-xl font-black text-blue-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 2!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã thành thạo kỹ thuật tìm số hạng $u_n = u_1 \\cdot q^{n-1}$, chia vế tìm $q$ và giải phương trình mũ. Hãy chuyển sang Mục 3 để chinh phục công thức Tính Tổng $S_n$!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40">✔ 4 Ví dụ hoàn thành</span>
      <span class="px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40">✔ Kỹ thuật chia vế tìm $q$</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 3</span>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# BÀI 7 - MỤC 3: TỔNG N SỐ HẠNG ĐẦU TIÊN CỦA CẤP SỐ NHÂN
# ==============================================================================
BAI7_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. CÔNG THỨC TÍNH TỔNG $n$ SỐ HẠNG ĐẦU TIÊN CỦA CSN",
        "subtitle": "BÀI 7 • CẤP SỐ NHÂN • MỤC 3: CÔNG THỨC $S_n = \\frac{u_1(1 - q^n)}{1 - q}$",
        "mascotMode": "pointer",
        "mascotTip": "Quy tắc vàng: S_n = u_1 * (1 - q^n) / (1 - q) với q khác 1. Nếu q = 1 thì S_n = n * u_1!",
        "narration": "Chào mừng các em đến với Mục ba: Tổng n số hạng đầu tiên của cấp số nhân. Cho cấp số nhân u n có số hạng đầu u một và công bội q. Nếu công bội q khác một, tổng của n số hạng đầu tiên S n bằng u một cộng u hai cộng chấm chấm chấm cộng u n được tính bởi công thức: S n bằng u một nhân mở ngoặc một trừ q mũ n đóng ngoặc, tất cả chia cho một trừ q; hoặc có thể viết tương đương là u một nhân mở ngoặc q mũ n trừ một đóng ngoặc chia cho q trừ một. Nếu công bội q bằng một thì tất cả các số hạng đều bằng u một, khi đó tổng S n đơn giản bằng n nhân u một.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider">Công thức cốt lõi</span>
      <h3 class="text-xl font-black text-purple-200">Công Thức Tính Tổng $S_n$ Của Cấp Số Nhân</h3>
    </div>
    <p class="text-sm text-slate-300">Tổng $S_n = u_1 + u_2 + \\dots + u_n$ của cấp số nhân:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md">
      <h4 class="font-bold text-purple-300 text-sm mb-1">Trường hợp $q \\ne 1$</h4>
      $$S_n = \\frac{u_1(1 - q^n)}{1 - q} = \\frac{u_1(q^n - 1)}{q - 1}$$
      👉 Số mũ của $q$ đúng bằng số lượng số hạng $n$.
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-pink-400 shadow-md">
      <h4 class="font-bold text-pink-300 text-sm mb-1">Trường hợp $q = 1$</h4>
      $$S_n = n \\cdot u_1$$
      👉 Mọi số hạng đều bằng $u_1$ (dãy số hằng).
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. TỔNG CẤP SỐ NHÂN LÙI VÔ HẠN",
        "subtitle": "KHI CÔNG BỘI CÓ TRỊ TUYỆT ĐỐI NHỎ HƠN 1 ($|q| < 1$)",
        "mascotMode": "explain",
        "mascotTip": "Khi |q| < 1, q^n tiến về 0 khi n ra vô cùng. Tổng vô hạn là: S = u_1 / (1 - q)!",
        "narration": "Một trường hợp đặc biệt và vô cùng kỳ thú của cấp số nhân là Cấp số nhân lùi vô hạn. Đó là cấp số nhân có trị tuyệt đối của công bội q nhỏ hơn một. Khi số lượng số hạng n tăng lên vô hạn, q mũ n sẽ dần tiến về số không. Khi đó, tổng của toàn bộ vô hạn các số hạng trong dãy số sẽ hội tụ về một số hữu hạn duy nhất: S bằng u một chia cho một trừ q. Công thức này giúp chúng ta tính được các tổng vô hạn như một cộng một phần hai cộng một phần tư cộng một phần tám chấm chấm chấm có kết quả đúng bằng hai.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-purple-300">Tổng Cấp Số Nhân Lùi Vô Hạn ($|q| < 1$)</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">Khi $|q| < 1$, ta có $\\lim_{n \\to \\infty} q^n = 0$. Khi đó tổng vô hạn:</p>
      <div class="text-center font-bold text-purple-300 text-base py-1">
        $$S = u_1 + u_2 + u_3 + \\dots = \\frac{u_1}{1 - q}$$
      </div>
      <p class="text-slate-300">👉 <b>Ví dụ:</b> $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = \\frac{1}{1 - 1/2} = 2$.</p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH TỔNG 8 SỐ HẠNG ĐẦU TIÊN",
        "subtitle": "DẠNG 1 • CHO BIẾT $u_1 = 2, q = 3$, TÍNH $S_8$",
        "mascotMode": "think",
        "mascotTip": "S_8 = 2 * (1 - 3^8) / (1 - 3) = 2 * (1 - 6561) / (-2) = 6561 - 1 = 6560!",
        "narration": "Ví dụ số một: Tính tổng của tám số hạng đầu tiên của cấp số nhân u n, biết số hạng đầu u một bằng hai và công bội q bằng ba. Các em có mười lăm giây để tính ra kết quả.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Tính $S_8$</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Tính tổng $S_8$ khi $u_1 = 2, q = 3$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Tổng 8 số hạng đầu tiên của cấp số nhân có $u_1 = 2, q = 3$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $S_8 = 6560$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $S_8 = 6561$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $S_8 = 4374$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $S_8 = 2187$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $S_8 = 6560$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "S_8 = 2 * (3^8 - 1)/(3 - 1) = 3^8 - 1 = 6561 - 1 = 6560. Chúc mừng các em chọn A!",
        "narration": "Hết thời gian. Áp dụng công thức tính tổng: S n bằng u một nhân mở ngoặc q mũ n trừ một đóng ngoặc chia cho q trừ một. Với n bằng tám, ta có: S tám bằng hai nhân mở ngoặc ba mũ tám trừ một đóng ngoặc chia cho ba trừ một. Ở mẫu số, ba trừ một bằng hai, triệt tiêu với số hai ở tử số. Kết quả còn lại đúng ba mũ tám trừ một. Ta tính: ba mũ tám bằng sáu nghìn năm trăm sáu mươi mốt; trừ đi một bằng sáu nghìn năm trăm sáu mươi. Đáp án chính xác là A.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Áp dụng công thức $S_n = \\frac{u_1(q^n - 1)}{q - 1}$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Thay số với $n = 8, u_1 = 2, q = 3$:</p>
      $$S_8 = \\frac{2(3^8 - 1)}{3 - 1} = \\frac{2(3^8 - 1)}{2} = 3^8 - 1$$
      <div class="text-center font-bold text-purple-300 text-sm py-1">
        $$S_8 = 6561 - 1 = 6560$$
      </div>
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 <b>Đáp án chọn: A ($S_8 = 6560$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $n$ KHI BIẾT TỔNG $S_n = -105$",
        "subtitle": "DẠNG 2 • CHO $u_1 = 5, q = -2, S_n = -105$, TÌM $n$",
        "mascotMode": "think",
        "mascotTip": "5 * [1 - (-2)^n] / [1 - (-2)] = -105 <=> 1 - (-2)^n = -63 <=> (-2)^n = 64 => n = 6!",
        "narration": "Ví dụ số hai: Cho cấp số nhân u n có số hạng đầu u một bằng năm và công bội q bằng trừ hai. Biết rằng tổng n số hạng đầu tiên S n bằng trừ một trăm lẻ năm. Hỏi n bằng bao nhiêu? Các em có ba mươi giây để giải phương trình tìm n.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Tìm Chỉ Số $n$</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-pink-200 mb-2">Cho $u_1 = 5, q = -2, S_n = -105$, tìm $n$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Số lượng số hạng $n$ thỏa mãn tổng $S_n = -105$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $n = 5$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $n = 6$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $n = 7$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $n = 8$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $n = 6$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "(-2)^n = 64 = (-2)^6 => n = 6. Vì 6 là số chẵn nên (-2)^6 ra dương 64!",
        "narration": "Hết ba mươi giây. Ta áp dụng công thức: S n bằng u một nhân mở ngoặc một trừ q mũ n đóng ngoặc chia cho một trừ q. Thay số vào: năm nhân mở ngoặc một trừ trừ hai tất cả mũ n đóng ngoặc, chia cho một trừ đi trừ hai, bằng trừ một trăm lẻ năm. Ở mẫu số: một trừ đi trừ hai bằng ba. Nhân ba sang vế phải và chia cho năm: trừ một trăm lẻ năm nhân ba chia năm bằng trừ sáu mươi ba. Ta có phương trình: một trừ trừ hai mũ n bằng trừ sáu mươi ba, suy ra trừ hai tất cả mũ n bằng sáu mươi tư. Vì sáu mươi tư bằng hai mũ sáu, và cũng bằng trừ hai tất cả mũ sáu, nên ta suy ra n bằng sáu. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-pink-300">Giải phương trình mũ tìm $n$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có phương trình:</p>
      $$\\frac{5[1 - (-2)^n]}{1 - (-2)} = -105 \\iff \\frac{5[1 - (-2)^n]}{3} = -105$$
      <p class="text-slate-200">• Rút gọn phương trình:</p>
      $$1 - (-2)^n = \\frac{-105 \\times 3}{5} = -63 \\iff (-2)^n = 64$$
      <p class="text-slate-200">• Vì $64 = (-2)^6$ nên:</p>
      <div class="text-center font-bold text-pink-300 text-sm py-1">
        $$(-2)^n = (-2)^6 \\iff n = 6$$
      </div>
      <div class="p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2">
        👉 <b>Đáp án chọn: B ($n = 6$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÍNH TỔNG DÃY PHÂN SỐ LŨY THỪA",
        "subtitle": "DẠNG 3 • TÍNH TỔNG $S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{256}$",
        "mascotMode": "think",
        "mascotTip": "u_1 = 1, q = 1/2. Số cuối 1/256 = (1/2)^8 => Có 9 số hạng (n = 9). Tính S!",
        "narration": "Ví dụ số ba: Tính tổng S bằng một cộng một phần hai cộng một phần tư cộng chấm chấm chấm cộng một phần hai trăm năm mươi sáu. Các em có mười lăm giây để tính tổng cấp số nhân này.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Tổng Hữu Hạn</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">Tính tổng $S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{256}$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Giá trị của tổng $S$ bằng:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $S = \\frac{255}{128}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $S = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $S = \\frac{511}{256}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $S = \\frac{255}{256}$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $S = \\frac{511}{256}$ (CHỌN ĐÁP ÁN C)",
        "mascotMode": "explain",
        "mascotTip": "S = 1 * [1 - (1/2)^9] / (1 - 1/2) = 2 * (1 - 1/512) = 511/256!",
        "narration": "Hết thời gian. Ta nhận thấy đây là tổng của một cấp số nhân có số hạng đầu u một bằng một, công bội q bằng một phần hai. Số hạng cuối cùng là một phần hai trăm năm mươi sáu, bằng một phần hai tất cả mũ tám. Vì số hạng thứ n có số mũ là n trừ một, nên n trừ một bằng tám, suy ra tổng này có tất cả n bằng chín số hạng. Áp dụng công thức tính tổng: S bằng một nhân mở ngoặc một trừ mở ngoặc một phần hai đóng ngoặc mũ chín, tất cả chia cho một trừ một phần hai. Ở mẫu số: một trừ một phần hai bằng một phần hai. Chia cho một phần hai tức là nhân với hai: hai nhân mở ngoặc một trừ một phần năm trăm mười hai đóng ngoặc, bằng hai nhân năm trăm mười một phần năm trăm mười hai, rút gọn được năm trăm mười một phần hai trăm năm mươi sáu. Đáp án chính xác là C.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Xác định số lượng số hạng $n = 9$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Dãy là CSN có: $u_1 = 1, q = \\frac{1}{2}$.</p>
      <p class="text-slate-200">• Số hạng cuối: $u_n = u_1 \\cdot q^{n-1} = 1 \\cdot \\left(\\frac{1}{2}\\right)^{n-1} = \\frac{1}{256} = \\left(\\frac{1}{2}\\right)^8 \\implies n = 9$.</p>
      <p class="text-slate-200">• Áp dụng công thức tính tổng $S_9$:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$S = \\frac{1 \\cdot \\left[1 - \\left(\\frac{1}{2}\\right)^9\\right]}{1 - \\frac{1}{2}} = 2 \\cdot \\left(1 - \\frac{1}{512}\\right) = 2 \\cdot \\frac{511}{512} = \\frac{511}{256}$$
      </div>
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 <b>Đáp án chọn: C ($S = \\frac{511}{256}$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ GẤP ĐÔI TIỀN TIẾT KIỆM",
        "subtitle": "DẠNG 4 • TÍNH THỜI GIAN ĐẦU TƯ SINH LỜI THEO LÃI KÉP",
        "mascotMode": "think",
        "mascotTip": "Gửi 50 triệu lãi 7%/năm. Cần số tiền >= 100 triệu: 50 * (1.07)^n >= 100 <=> 1.07^n >= 2!",
        "narration": "Ví dụ số bốn là bài toán tài chính ứng dụng cấp số nhân: Bác An gửi tiết kiệm năm mươi triệu đồng vào ngân hàng với lãi suất bảy phần trăm một năm theo thể thức lãi kép. Hỏi sau ít nhất bao nhiêu năm thì bác An nhận được tổng số tiền cả gốc lẫn lãi lớn hơn hoặc bằng một trăm triệu đồng, tức là gấp đôi số tiền ban đầu? Các em có ba mươi giây để tính toán số năm.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Tài Chính Lãi Kép</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Sau bao nhiêu năm gấp đôi số tiền gửi?</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Gửi $50$ triệu đồng, lãi suất $7\\%$/năm lãi kép. Sau ít nhất bao nhiêu năm số tiền nhận được $\\ge 100$ triệu?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> 10 năm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> 11 năm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> 12 năm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> 9 năm</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: SAU ÍT NHẤT 11 NĂM (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "n >= log_{1.07}(2) = 10.24 năm. Vì n là số nguyên năm nên cần ít nhất 11 năm!",
        "narration": "Thời gian đã hết. Lời giải chi tiết: Số tiền bác An nhận được sau n năm được tính theo công thức lãi kép: T n bằng năm mươi nhân mở ngoặc một cộng không phẩy không bảy đóng ngoặc mũ n, tức bằng năm mươi nhân một phẩy không bảy mũ n triệu đồng. Để số tiền gấp đôi, ta có bất phương trình: năm mươi nhân một phẩy không bảy mũ n lớn hơn hoặc bằng một trăm. Chia cả hai vế cho năm mươi, ta được: một phẩy không bảy mũ n lớn hơn hoặc bằng hai. Lấy logarit cơ số một phẩy không bảy cả hai vế, ta được n lớn hơn hoặc bằng logarit cơ số một phẩy không bảy của hai, xấp xỉ mười phẩy hai mươi tư năm. Vì kỳ hạn tính lãi là theo năm nguyên vẹn nên sau mười năm số tiền vẫn chưa đủ gấp đôi. Do đó bác An cần ít nhất mười một năm để số tiền nhận được vượt qua mốc một trăm triệu đồng. Đáp án chính xác là B.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Giải bất phương trình mũ lãi kép</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Số tiền sau $n$ năm là: $T_n = 50(1 + 0{,}07)^n = 50(1{,}07)^n$ (triệu đồng).</p>
      <p class="text-slate-200">• Yêu cầu bài toán $T_n \\ge 100$:</p>
      $$50(1{,}07)^n \\ge 100 \\iff (1{,}07)^n \\ge 2$$
      <p class="text-slate-200">• Lấy logarit cơ số $1{,}07$ hai vế:</p>
      <div class="text-center font-bold text-emerald-300 text-sm py-1">
        $$n \\ge \\log_{1{,}07} 2 = \\frac{\\ln 2}{\\ln 1{,}07} \\approx 10{,}24 \\text{ (năm)}$$
      </div>
      <p class="text-slate-300">• Vì $n \\in \\mathbb{N}^*$, ta chọn số nguyên nhỏ nhất $n = 11$.</p>
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        👉 <b>Kết luận:</b> Cần ít nhất $11$ năm để gấp đôi số tiền ban đầu. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ TÍNH TỔNG CẤP SỐ NHÂN",
        "subtitle": "QUÊN ĐIỀU KIỆN $q \\ne 1$ VÀ NHẦM LẪN SỐ MŨ $q^n$ VỚI $q^{n-1}$",
        "mascotMode": "explain",
        "mascotTip": "Ở công thức tính tổng S_n, số mũ của q là ĐÚNG n: (1 - q^n). Đừng nhầm thành n - 1!",
        "narration": "Thầy Nam Minh lưu ý hai bẫy thi trắc nghiệm thường gặp khi tính tổng cấp số nhân: Thứ nhất là sự nhầm lẫn giữa công thức số hạng tổng quát và công thức tính tổng: Ở số hạng tổng quát u n thì số mũ của q là n trừ một, nhưng ở công thức tính tổng S n thì số mũ của q là n nguyên vẹn. Nhớ rằng có n số hạng thì số mũ là n. Thứ hai là khi công bội q bằng một thì mẫu số một trừ q bằng không, phân thức không xác định. Khi đó ta không dùng công thức phân thức mà dùng công thức S n bằng n nhân u một. Hãy ghi nhớ để không bao giờ bị nhầm lẫn.",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">2 Lỗi Sai Dễ Mắc Phải Khi Tính Tổng $S_n$</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Nhầm số mũ $q^{n-1}$</h4>
        <p class="text-slate-300 leading-relaxed font-mono">
          $S_n = \\frac{u_1(1 - q^{n-1})}{1 - q}$ (SAI!)<br/>
          Chính xác phải là số mũ $\\mathbf{n}$:<br/>
          $$S_n = \\frac{u_1(1 - \\mathbf{q^n})}{1 - q}$$
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Chia cho 0 khi $q = 1$</h4>
        <p class="text-slate-300 leading-relaxed">
          Khi $q = 1$: mẫu số $1 - q = 0$ không xác định.<br/>
          Phải dùng công thức riêng:<br/>
          $$S_n = n \\cdot u_1$$
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT TOÀN DIỆN CHƯƠNG 2 & LỜI CHÚC TỪ CÚ THÔNG THÁI",
        "subtitle": "HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 5, 6, 7 CHƯƠNG 2 TOÁN 11 KNTT!",
        "mascotMode": "celebrate",
        "mascotTip": "Chúc mừng em đã làm chủ trọn vẹn 3 bài học Chương 2: Dãy số, Cấp số cộng và Cấp số nhân!",
        "narration": "Chúc mừng tất cả các em học sinh thân mến đã hoàn thành trọn vẹn toàn bộ ba bài học trọng tâm của Chương hai: Bài năm Dãy số, Bài sáu Cấp số cộng và Bài bảy Cấp số nhân. Các em đã làm chủ đầy đủ chín mục bài giảng với ba mươi sáu ví dụ mẫu mực, các bẫy trắc nghiệm và các bài toán thực tế sinh động. Thầy Nam Minh và Cú Thông Thái tin tưởng rằng các em sẽ hoàn toàn tự tin đạt điểm mười tuyệt đối trong các bài kiểm tra và bài thi sắp tới. Chúc các em luôn học giỏi và đam mê môn Toán!",
        "bodyHtml": r"""
<div class="space-y-4">
  <div class="bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl">🎓🏆⭐🎉</div>
    <h3 class="text-xl font-black text-purple-200 mb-2">Chúc Mừng Em Hoàn Thành Xuất Sắc Toàn Bộ Chương 2!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã chinh phục trọn vẹn 9 mục bài giảng của cả 3 bài học: Bài 5 (Dãy số), Bài 6 (Cấp số cộng) và Bài 7 (Cấp số nhân) với 36 ví dụ tiêu biểu. Em đã sẵn sàng bứt phá điểm 10 môn Toán 11!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ Bài 5: Dãy số</span>
      <span class="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40">✔ Bài 6: Cấp số cộng</span>
      <span class="px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40">✔ Bài 7: Cấp số nhân</span>
    </div>
  </div>
</div>
"""
    }
]

print("ch2_bai7_data.py fully completed: MUC1, MUC2, MUC3 ready.")
