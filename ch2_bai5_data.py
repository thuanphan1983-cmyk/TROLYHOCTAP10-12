# -*- coding: utf-8 -*-
"""
ch2_bai5_data.py
Dữ liệu 3 mục bài giảng cho Bài 5: Dãy số (Chương 2 - Toán 11 KNTT):
- Mục 1: Khái niệm dãy số & Các cách cho dãy số
- Mục 2: Dãy số tăng, dãy số giảm
- Mục 3: Dãy số bị chặn
Mỗi mục 12 scenes, 4 ví dụ minh họa tiêu biểu, đồng hồ 15s/30s, mascot Cú Thông Thái.
"""

# ==============================================================================
# BÀI 5 - MỤC 1: KHÁI NIỆM DÃY SỐ & CÁC CÁCH CHO DÃY SỐ
# ==============================================================================
BAI5_MUC1_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. KHÁI NIỆM DÃY SỐ VÔ HẠN VÀ HỮU HẠN",
        "subtitle": "BÀI 5 • DÃY SỐ • MỤC 1: ĐỊNH NGHĨA & PHÂN LOẠI",
        "mascotMode": "pointer",
        "mascotTip": "Dãy số là hàm số xác định trên tập số nguyên dương N*! Mỗi giá trị u(n) ký hiệu gọn là u_n!",
        "narration": "Chào mừng các em học sinh lớp mười một đến với Chương hai: Dãy số, cấp số cộng và cấp số nhân. Bài học đầu tiên của chương là Bài năm: Dãy số. Ở Mục một, chúng ta cùng tìm hiểu về định nghĩa dãy số và ba cách cho dãy số. Trong toán học, mỗi hàm số u xác định trên tập hợp các số nguyên dương N sao được gọi là một dãy số vô hạn. Ký hiệu là mở ngoặc u n đóng ngoặc. Giá trị u tại n được viết gọn là u n và gọi là số hạng thứ n hay số hạng tổng quát của dãy số. Nếu hàm số chỉ xác định trên tập m số nguyên dương đầu tiên, ta có một dãy số hữu hạn.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định nghĩa cốt lõi</span>
      <h3 class="text-xl font-black text-emerald-200">Dãy Số Vô Hạn & Dãy Số Hữu Hạn</h3>
    </div>
    <p class="text-sm text-slate-300">Khái niệm dãy số trong chương trình Toán 11 Kết Nối Tri Thức:</p>
  </div>

  <div class="grid grid-cols-2 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">1. Dãy số vô hạn</h4>
      <p class="text-slate-300 leading-relaxed">
        • Là hàm số $u: \\mathbb{N}^* \\to \\mathbb{R}$, $n \\mapsto u(n)$.<br/>
        • Ký hiệu: $(u_n)$ hay $u_1, u_2, u_3, \\dots, u_n, \\dots$<br/>
        • $u_1$: số hạng đầu; $u_n$: số hạng thứ $n$ (số hạng tổng quát).
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">2. Dãy số hữu hạn</h4>
      <p class="text-slate-300 leading-relaxed">
        • Là hàm số xác định trên tập $\\{1, 2, \\dots, m\\}$ ($m \\in \\mathbb{N}^*$).<br/>
        • Viết dưới dạng khai triển: $u_1, u_2, \\dots, u_m$.<br/>
        • $u_1$: số hạng đầu; $u_m$: số hạng cuối cùng.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. CÁC CÁCH XÁC ĐỊNH MỘT DÃY SỐ",
        "subtitle": "3 PHƯƠNG PHÁP CHO DÃY SỐ TRỌNG TÂM",
        "mascotMode": "explain",
        "mascotTip": "3 cách cho dãy số: 1) Công thức tổng quát; 2) Hệ thức truy hồi; 3) Phương pháp mô tả!",
        "narration": "Một dãy số có thể được cho bằng ba cách phổ biến: Cách thứ nhất là cho bởi công thức số hạng tổng quát, ví dụ u n bằng hai n trừ một. Biết n ta tính được ngay u n. Cách thứ hai là cho bởi hệ thức truy hồi: cho số hạng đầu tiên u một và công thức tính u n cộng một thông qua u n đứng trước nó. Cách thứ ba là cho bằng phương pháp mô tả, ví dụ u n là số nguyên tố thứ n trong toán học. Trong các đề kiểm tra, công thức tổng quát và hệ thức truy hồi là hai dạng xuất hiện nhiều nhất.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-teal-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-teal-300">3 Phương Pháp Xác Định Dãy Số</h3>
    </div>
    <div class="grid grid-cols-3 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-emerald-400 font-bold block mb-1">1. Công thức tổng quát</span>
        Cho biết trực tiếp $u_n$ theo $n$:
        $$u_n = \\frac{2n - 1}{n + 1}$$
        👉 Muốn tính $u_k$, chỉ cần thay $n = k$.
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-cyan-400 font-bold block mb-1">2. Hệ thức truy hồi</span>
        Cho $u_1$ và quy tắc tính $u_{n+1}$:
        $$\\begin{cases} u_1 = 3 \\\\ u_{n+1} = 2u_n - 1 \\end{cases}$$
        👉 Tính lần lượt $u_1 \\to u_2 \\to u_3 \\to \\dots$
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-amber-400 font-bold block mb-1">3. Phương pháp mô tả</span>
        Mô tả đặc điểm thuật toán của $u_n$:
        • $u_n$ là số nguyên tố thứ $n$.<br/>
        • $u_1 = 2, u_2 = 3, u_3 = 5, u_4 = 7...$
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG CỦA DÃY SỐ",
        "subtitle": "DẠNG 1 • XÁC ĐỊNH SỐ HẠNG QUA CÔNG THỨC TỔNG QUÁT",
        "mascotMode": "think",
        "mascotTip": "Thay n = 1 để tính u_1, thay n = 4 để tính u_4. Cẩn thận tính nhẩm phân số!",
        "narration": "Chúng ta cùng bắt đầu với Ví dụ số một. Cho dãy số u n với công thức số hạng tổng quát u n bằng phân thức ba n trừ một chia cho n cộng hai. Hãy tìm số hạng đầu tiên u một và số hạng thứ tư u bốn của dãy số. Các em có mười lăm giây để tính toán.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Tính Số Hạng</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Tính $u_1$ và $u_4$ của dãy số</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho dãy số $(u_n)$ xác định bởi $u_n = \\frac{3n - 1}{n + 2}$. Tìm $u_1$ và $u_4$:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $u_1 = \\frac{2}{3}; \\; u_4 = \\frac{11}{6}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $u_1 = 1; \\; u_4 = 2$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $u_1 = \\frac{2}{3}; \\; u_4 = \\frac{5}{3}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $u_1 = \\frac{1}{3}; \\; u_4 = \\frac{11}{6}$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $u_1 = \\frac{2}{3}$ VÀ $u_4 = \\frac{11}{6}$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "u_1 = (3*1 - 1)/(1 + 2) = 2/3. u_4 = (3*4 - 1)/(4 + 2) = 11/6. Chuẩn xác!",
        "narration": "Hết thời gian. Lời giải chi tiết như sau: Với n bằng một, ta thay vào công thức: u một bằng ba nhân một trừ một chia cho một cộng hai, tử số bằng hai, mẫu số bằng ba, kết quả u một bằng hai phần ba. Với n bằng bốn, ta thay vào: u bốn bằng ba nhân bốn trừ một chia cho bốn cộng hai, ba nhân bốn bằng mười hai, trừ một bằng mười một; mẫu số bốn cộng hai bằng sáu, kết quả u bốn bằng mười một phần sáu. Đáp án chính xác là A.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Thay trực tiếp giá trị $n$ vào công thức</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Với $n = 1$:</p>
      <div class="text-center font-bold text-emerald-300 text-sm py-1">
        $$u_1 = \\frac{3(1) - 1}{1 + 2} = \\frac{2}{3}$$
      </div>
      <p class="text-slate-200">• Với $n = 4$:</p>
      <div class="text-center font-bold text-teal-300 text-sm py-1">
        $$u_4 = \\frac{3(4) - 1}{4 + 2} = \\frac{11}{6}$$
      </div>
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        👉 <b>Đáp án chọn: A ($u_1 = \\frac{2}{3}; u_4 = \\frac{11}{6}$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH SỐ HẠNG QUA HỆ THỨC TRUY HỒI",
        "subtitle": "DẠNG 2 • TÍNH TỪNG BƯỚC THEO CÔNG THỨC TRUY HỒI",
        "mascotMode": "think",
        "mascotTip": "Tính lần lượt: u_2 = 2*u_1 - 1, sau đó u_3 = 2*u_2 - 1, rồi u_4 = 2*u_3 - 1!",
        "narration": "Ví dụ số hai: Cho dãy số u n xác định bởi u một bằng ba và u n cộng một bằng hai u n trừ một với mọi n lớn hơn hoặc bằng một. Hãy tính số hạng thứ tư u bốn của dãy số. Các em có ba mươi giây để tính toán từng bước.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Dãy Truy Hồi</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-teal-200 mb-2">Tính số hạng của dãy truy hồi bậc 1</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho dãy số $(u_n)$ xác định bởi: $\\begin{cases} u_1 = 3 \\\\ u_{n+1} = 2u_n - 1 \\quad (\\forall n \\ge 1) \\end{cases}$. Số hạng $u_4$ bằng:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $u_4 = 9$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $u_4 = 17$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $u_4 = 33$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $u_4 = 15$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $u_4 = 17$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "u_2 = 2(3)-1 = 5; u_3 = 2(5)-1 = 9; u_4 = 2(9)-1 = 17. Chúc mừng các em chọn B!",
        "narration": "Hết ba mươi giây. Chúng ta cùng tính tuần tự từng số hạng: Đầu tiên, với n bằng một: u hai bằng hai lần u một trừ một, bằng hai nhân ba trừ một bằng năm. Tiếp theo, với n bằng hai: u ba bằng hai lần u hai trừ một, bằng hai nhân năm trừ một bằng chín. Cuối cùng, với n bằng ba: u bốn bằng hai lần u ba trừ một, bằng hai nhân chín trừ một bằng mười bảy. Đáp án chính xác là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-teal-300">Tính tuần tự các số hạng theo hệ thức truy hồi</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Đã có: $u_1 = 3$.</p>
      <p class="text-slate-200">• Tính $u_2$: $u_2 = 2u_1 - 1 = 2(3) - 1 = 5$.</p>
      <p class="text-slate-200">• Tính $u_3$: $u_3 = 2u_2 - 1 = 2(5) - 1 = 9$.</p>
      <div class="text-center font-bold text-teal-300 text-sm py-1">
        $$u_4 = 2u_3 - 1 = 2(9) - 1 = 17$$
      </div>
      <div class="p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2">
        👉 <b>Đáp án chọn: B ($u_4 = 17$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM VỊ TRÍ CỦA MỘT SỐ HẠNG TRONG DÃY",
        "subtitle": "DẠNG 3 • GIẢI PHƯƠNG TRÌNH TÌM CHỈ SỐ NGUYÊN DƯƠNG $n$",
        "mascotMode": "think",
        "mascotTip": "Giải phương trình u_n = 42, tức là n^2 - 3n + 2 = 42. Nhớ điều kiện n thuộc N*!",
        "narration": "Bước sang Ví dụ số ba: Cho dãy số u n với công thức số hạng tổng quát u n bằng n bình phương trừ ba n cộng hai. Hỏi số bốn mươi hai là số hạng thứ bao nhiêu của dãy số? Các em có mười lăm giây để giải phương trình tìm n.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Vị Trí Số Hạng</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-cyan-200 mb-2">Số 42 là số hạng thứ mấy?</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Cho dãy số $(u_n)$ có $u_n = n^2 - 3n + 2$. Hỏi số $42$ là số hạng thứ bao nhiêu của dãy số?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Số hạng thứ 7</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Số hạng thứ 8</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Số hạng thứ 9</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Không thuộc dãy số</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $n = 8 \\implies 42 = u_8$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "explain",
        "mascotTip": "Phương trình n^2 - 3n - 40 = 0 có nghiệm n = 8 (nhận) và n = -5 (loại vì n thuộc N*)!",
        "narration": "Hết thời gian. Để biết số bốn mươi hai là số hạng thứ mấy, ta giải phương trình u n bằng bốn mươi hai: n bình trừ ba n cộng hai bằng bốn mươi hai. Chuyển vế ta được: n bình trừ ba n trừ bốn mươi bằng không. Phương trình bậc hai này có hai nghiệm: n bằng tám và n bằng trừ năm. Vì chỉ số của dãy số bắt buộc phải là số nguyên dương, tức n thuộc N sao, nên ta loại n bằng trừ năm và nhận n bằng tám. Vậy số bốn mươi hai là số hạng thứ tám của dãy số. Đáp án chọn là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-cyan-300">Giải phương trình bậc hai với điều kiện $n \\in \\mathbb{N}^*$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta giải phương trình $u_n = 42$:</p>
      $$n^2 - 3n + 2 = 42 \\iff n^2 - 3n - 40 = 0$$
      <p class="text-slate-200">• Phân tích nhân tử:</p>
      $$(n - 8)(n + 5) = 0 \\iff \\left[\\begin{array}{l} n = 8 \\;\\text{(thỏa mãn } n \\in \\mathbb{N}^*) \\\\ n = -5 \\;\\text{(loại vì } n \\notin \\mathbb{N}^*) \\end{array}\\right.$$
      <div class="p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2">
        👉 <b>Kết luận:</b> $42$ là số hạng thứ 8 ($u_8 = 42$). <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ LÃI KÉP",
        "subtitle": "DẠNG 4 • MÔ HÌNH HÓA TĂNG TRƯỞNG TIỀN GỬI TIẾT KIỆM",
        "mascotMode": "think",
        "mascotTip": "Công thức lãi kép: A_n = A_0 * (1 + r)^n. Với A_0 = 100, r = 0.06, tính A_3!",
        "narration": "Ví dụ số bốn là một bài toán tài chính thực tế: Một người gửi tiết kiệm một trăm triệu đồng vào ngân hàng với lãi suất sáu phần trăm một năm theo hình thức lãi kép, tức là tiền lãi của mỗi năm được nhập vào vốn để tính lãi cho năm sau. Gọi A n là tổng số tiền người đó nhận được sau n năm. Hãy tính số tiền người đó nhận được sau ba năm, làm tròn kết quả đến hàng phần mười triệu đồng. Các em có ba mươi giây để tính toán.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Thực Tế</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">Bài toán lãi kép ngân hàng</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Bác Nam gửi tiết kiệm $100$ triệu đồng vào ngân hàng với lãi suất $6\\%$/năm theo thể thức lãi kép. Tổng số tiền bác Nam nhận được sau $3$ năm (triệu đồng, làm tròn đến hàng phần mười) là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $118{,}0\\text{ triệu}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $119{,}1\\text{ triệu}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $120{,}5\\text{ triệu}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $116{,}0\\text{ triệu}$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $A_3 \\approx 119{,}1\\text{ TRIỆU ĐỒNG}$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "A_3 = 100 * (1 + 0.06)^3 = 100 * 1.191016 = 119.1016 triệu đồng!",
        "narration": "Hết ba mươi giây. Lời giải chi tiết: Sau năm thứ nhất, số tiền là: một trăm nhân mở ngoặc một cộng không phẩy không sáu đóng ngoặc bằng một trăm nhân một phẩy không sáu. Cứ như vậy, sau n năm, số tiền nhận được là: A n bằng một trăm nhân mở ngoặc một phẩy không sáu đóng ngoặc mũ n triệu đồng. Thay n bằng ba vào, ta có: A ba bằng một trăm nhân một phẩy không sáu mũ ba, bằng một trăm nhân một phẩy một chín một không một sáu, xấp xỉ một trăm mười chín phẩy một triệu đồng. Đáp án chọn là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Thiết lập công thức tổng quát của bài toán lãi kép</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Sau 1 năm: $A_1 = 100(1 + 0{,}06) = 100 \\times 1{,}06$.</p>
      <p class="text-slate-200">• Sau $n$ năm, tổng số tiền là: $A_n = 100(1{,}06)^n$ (triệu đồng).</p>
      <p class="text-slate-200">• Với $n = 3$ năm:</p>
      <div class="text-center font-bold text-amber-300 text-sm py-1">
        $$A_3 = 100 \\times (1{,}06)^3 = 100 \\times 1{,}191016 = 119{,}1016 \\approx 119{,}1 \\text{ (triệu đồng)}$$
      </div>
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 <b>Đáp án chọn: B ($119{,}1\\text{ triệu đồng}$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI & SAI LẦM THƯỜNG GẶP",
        "subtitle": "LỖI CHỈ SỐ BẮT ĐẦU VÀ LỖI TÍNH TOÁN DÃY TRUY HỒI",
        "mascotMode": "explain",
        "mascotTip": "Chỉ số dãy số luôn là số tự nhiên dương n >= 1 (n thuộc N*). Tuyệt đối không lấy n <= 0!",
        "narration": "Thầy Nam Minh lưu ý ba lỗi sai học sinh rất hay mắc phải ở bài dãy số: Thứ nhất là quên điều kiện n thuộc N sao, tức n là số nguyên dương lớn hơn hoặc bằng một. Khi giải phương trình tìm chỉ số mà ra số âm hoặc phân số, các em phải loại ngay. Thứ hai là nhầm lẫn giữa chỉ số n và giá trị u n. Chỉ số n chỉ vị trí thứ mấy, còn u n là giá trị của số hạng đó. Thứ ba, đối với dãy truy hồi, không được tính nhẩm nhảy cóc mà phải tính tuần tự từ u một lên u hai, u ba để tránh sai sót dây chuyền.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">3 Sai Lầm Thường Gặp Về Dãy Số</h3>
    </div>
    <div class="grid grid-cols-3 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Quên $n \\in \\mathbb{N}^*$</h4>
        <p class="text-slate-300 leading-relaxed">Chỉ số vị trí $n$ phải là số nguyên dương ($n = 1, 2, 3...$). Nghiệm $n = 0, n = -5$ hoặc phân số bắt buộc phải loại!</p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Nhầm giữa $n$ và $u_n$</h4>
        <p class="text-slate-300 leading-relaxed">$n$ là số thứ tự vị trí (số nguyên dương), còn $u_n$ là giá trị số hạng (có thể âm, phân số, vô tỉ tùy ý).</p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-cyan-400">
        <h4 class="font-bold text-cyan-300 mb-1">❌ Bẫy 3: Nhảy cóc dãy truy hồi</h4>
        <p class="text-slate-300 leading-relaxed">Khi tính $u_5$ từ hệ thức truy hồi, phải tính lần lượt $u_1 \\to u_2 \\to u_3 \\to u_4 \\to u_5$, không được đoán bừa.</p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
        "subtitle": "NẮM VỮNG KHÁI NIỆM ĐỂ CHUYỂN SANG MỤC 2: DÃY TĂNG VÀ DÃY GIẢM",
        "mascotMode": "celebrate",
        "mascotTip": "Làm chủ 3 cách cho dãy số! Chuyển ngay sang Mục 2 để rèn kỹ năng xét tính tăng, giảm!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục một của Bài năm. Chúng ta đã làm chủ khái niệm dãy số, ba cách xác định và bốn ví dụ tiêu biểu. Hãy ghi nhớ thật kỹ điều kiện n thuộc N sao. Bây giờ, thầy mời các em cùng chuyển sang Mục hai để tìm hiểu về phương pháp xét tính tăng và giảm của một dãy số.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl">🦉✨</div>
    <h3 class="text-xl font-black text-emerald-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 1!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã nắm vững định nghĩa dãy số vô hạn, hữu hạn, công thức tổng quát và hệ thức truy hồi. Hãy tự tin chuyển sang Mục 2 để rèn luyện phương pháp xét tính Tăng / Giảm của dãy số!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ 4 Ví dụ đã hoàn thành</span>
      <span class="px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40">✔ 3 Cách cho dãy số</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 2</span>
    </div>
  </div>
</div>
"""
    }
]

print("ch2_bai5_data.py initialized: BAI5_MUC1_SCENES ready.")

# ==============================================================================
# BÀI 5 - MỤC 2: DÃY SỐ TĂNG, DÃY SỐ GIẢM
# ==============================================================================
BAI5_MUC2_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA DÃY SỐ TĂNG VÀ DÃY SỐ GIẢM",
        "subtitle": "BÀI 5 • DÃY SỐ • MỤC 2: TÍNH ĐƠN ĐIỆU CỦA DÃY SỐ",
        "mascotMode": "pointer",
        "mascotTip": "Dãy tăng: số hạng sau lớn hơn số hạng trước (u_{n+1} > u_n). Dãy giảm: u_{n+1} < u_n!",
        "narration": "Chào mừng các em đến với Mục hai: Dãy số tăng và dãy số giảm. Tương tự như hàm số đồng biến và nghịch biến, một dãy số u n được gọi là dãy số tăng nếu với mọi số nguyên dương n, số hạng sau luôn lớn hơn số hạng đứng ngay trước nó, tức là u n cộng một lớn hơn u n. Ngược lại, dãy số được gọi là dãy số giảm nếu số hạng sau luôn nhỏ hơn số hạng đứng trước, tức u n cộng một nhỏ hơn u n với mọi n thuộc N sao. Nếu dãy số có các số hạng đan dấu hoặc lúc tăng lúc giảm thì được gọi là dãy số không tăng, không giảm.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider">Khái niệm cốt lõi</span>
      <h3 class="text-xl font-black text-blue-200">Định Nghĩa Dãy Số Tăng & Dãy Số Giảm</h3>
    </div>
    <p class="text-sm text-slate-300">Tính chất đơn điệu của dãy số với mọi $n \\in \\mathbb{N}^*$:</p>
  </div>

  <div class="grid grid-cols-3 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md">
      <h4 class="font-bold text-emerald-300 text-sm mb-1">📈 1. Dãy số tăng</h4>
      <p class="text-slate-300 leading-relaxed">
        $$u_{n+1} > u_n, \\quad \\forall n \\in \\mathbb{N}^*$$
        Số hạng sau luôn lớn hơn số hạng liền trước nó.<br/>
        Ví dụ: $1, 3, 5, 7, \\dots$ ($u_n = 2n - 1$).
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-rose-400 shadow-md">
      <h4 class="font-bold text-rose-300 text-sm mb-1">📉 2. Dãy số giảm</h4>
      <p class="text-slate-300 leading-relaxed">
        $$u_{n+1} < u_n, \\quad \\forall n \\in \\mathbb{N}^*$$
        Số hạng sau luôn nhỏ hơn số hạng liền trước nó.<br/>
        Ví dụ: $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\dots$ ($u_n = \\frac{1}{n}$).
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">⚖️ 3. Không tăng, không giảm</h4>
      <p class="text-slate-300 leading-relaxed">
        Dãy số đan dấu âm dương hoặc lúc tăng lúc giảm.<br/>
        Ví dụ: $u_n = (-1)^n$: $-1, 1, -1, 1...$<br/>
        Dãy số không đổi: $c, c, c, \\dots$
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. PHƯƠNG PHÁP XÉT TÍNH TĂNG, GIẢM CỦA DÃY SỐ",
        "subtitle": "2 PHƯƠNG PHÁP THỰC CHIẾN: XÉT HIỆU HOẶC XÉT TỈ SỐ",
        "mascotMode": "explain",
        "mascotTip": "Phương pháp 1: Xét hiệu u_{n+1} - u_n so với 0. Phương pháp 2: Xét tỉ số u_{n+1} / u_n so với 1 (khi u_n > 0)!",
        "narration": "Để xét tính tăng hay giảm của một dãy số, các em có hai phương pháp chuẩn mực: Phương pháp thứ nhất là xét hiệu: Ta lập hiệu số H bằng u n cộng một trừ u n. Nếu H luôn lớn hơn không với mọi n, dãy số tăng. Nếu H luôn nhỏ hơn không, dãy số giảm. Phương pháp thứ hai là xét tỉ số: Khi dãy số có tất cả các số hạng đều dương, ta lập tỉ số T bằng u n cộng một chia cho u n rồi so sánh với số một. Nếu T lớn hơn một, dãy số tăng. Nếu T nhỏ hơn một, dãy số giảm. Phương pháp xét tỉ số cực kỳ hiệu quả khi số hạng chứa lũy thừa hoặc giai thừa.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-blue-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-blue-300">2 Công Cụ Xét Tính Tăng / Giảm Chuẩn Mực</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-blue-400 font-bold block mb-1">Phương pháp 1: Xét Hiệu Số</span>
        Lập hiệu: $H = u_{n+1} - u_n$:
        <ul class="list-disc pl-4 text-slate-300 space-y-1 mt-1">
          <li>Nếu $H > 0, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>TĂNG</b>.</li>
          <li>Nếu $H < 0, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>GIẢM</b>.</li>
        </ul>
        👉 <i>Thích hợp cho đa thức, phân thức hữu tỉ, căn thức.</i>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-purple-400 font-bold block mb-1">Phương pháp 2: Xét Tỉ Số (khi $u_n > 0$)</span>
        Lập tỉ số: $T = \\frac{u_{n+1}}{u_n}$:
        <ul class="list-disc pl-4 text-slate-300 space-y-1 mt-1">
          <li>Nếu $T > 1, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>TĂNG</b>.</li>
          <li>Nếu $T < 1, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>GIẢM</b>.</li>
        </ul>
        👉 <i>Thích hợp cho biểu thức chứa lũy thừa $a^n$ và giai thừa $n!$.</i>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: XÉT TÍNH TĂNG GIẢM CỦA PHÂN THỨC",
        "subtitle": "DẠNG 1 • XÉT HIỆU $u_{n+1} - u_n$ VỚI PHÂN THỨC HỮU TỈ",
        "mascotMode": "think",
        "mascotTip": "Lập hiệu u_{n+1} - u_n. Chú ý quy đồng mẫu số và rút gọn cẩn thận!",
        "narration": "Ví dụ số một: Xét tính tăng, giảm của dãy số u n với công thức u n bằng phân thức hai n cộng một chia cho n cộng ba. Các em có mười lăm giây để lập hiệu và kết luận.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Xét Tính Đơn Điệu</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-blue-200 mb-2">Xét tính tăng, giảm của dãy số</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Dãy số $(u_n)$ với $u_n = \\frac{2n + 1}{n + 3}$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Dãy số tăng</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Dãy số giảm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Dãy số không tăng không giảm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Dãy số hằng</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: DÃY SỐ TĂNG VÌ HIỆU $u_{n+1} - u_n = \\frac{5}{(n+4)(n+3)} > 0$ (CHỌN A)",
        "mascotMode": "cheer",
        "mascotTip": "Hiệu luôn dương với mọi n thuộc N*. Do đó (u_n) là dãy số tăng!",
        "narration": "Hết thời gian. Chúng ta cùng lập hiệu u n cộng một trừ u n: Số hạng u n cộng một bằng hai lần mở ngoặc n cộng một đóng ngoặc cộng một chia cho n cộng một cộng ba, rút gọn được hai n cộng ba chia cho n cộng bốn. Trừ đi u n là hai n cộng một chia cho n cộng ba. Quy đồng mẫu số chung, tử số trở thành: hai n cộng ba nhân n cộng ba, trừ đi hai n cộng một nhân n cộng bốn. Khai triển rút gọn, tử số còn lại đúng số dương năm. Mẫu số là tích của hai số dương n cộng bốn và n cộng ba. Vì năm chia cho tích này luôn lớn hơn không với mọi n thuộc N sao, nên dãy số là dãy số tăng. Đáp án chọn là A.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-blue-300">Xét hiệu $u_{n+1} - u_n$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta có $u_{n+1} = \\frac{2(n+1) + 1}{(n+1) + 3} = \\frac{2n + 3}{n + 4}$.</p>
      <p class="text-slate-200">• Lập hiệu $u_{n+1} - u_n$:</p>
      $$u_{n+1} - u_n = \\frac{2n + 3}{n + 4} - \\frac{2n + 1}{n + 3} = \\frac{(2n+3)(n+3) - (2n+1)(n+4)}{(n+4)(n+3)}$$
      $$= \\frac{(2n^2 + 9n + 9) - (2n^2 + 9n + 4)}{(n+4)(n+3)} = \\frac{5}{(n+4)(n+3)}$$
      <p class="text-slate-200">• Với mọi $n \\in \\mathbb{N}^*$, ta có $n+4 > 0$ và $n+3 > 0 \\implies \\frac{5}{(n+4)(n+3)} > 0$.</p>
      <div class="p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2">
        👉 $u_{n+1} > u_n, \\forall n \\in \\mathbb{N}^* \\implies$ <b>Dãy số $(u_n)$ là dãy số tăng</b>. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: XÉT TÍNH TĂNG GIẢM BẰNG TỈ SỐ",
        "subtitle": "DẠNG 2 • DÃY SỐ CHỨA LŨY THỪA VÀ GIAI THỪA $u_n = \\frac{3^n}{n!}$",
        "mascotMode": "think",
        "mascotTip": "Tất cả u_n > 0. Lập tỉ số u_{n+1} / u_n = [3^{n+1}/(n+1)!] * [n!/3^n] = 3/(n+1)!",
        "narration": "Ví dụ số hai: Xét tính tăng, giảm của dãy số u n với số hạng tổng quát u n bằng ba mũ n chia cho n giai thừa. Các em có ba mươi giây để sử dụng phương pháp xét tỉ số.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Xét Tỉ Số</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-indigo-200 mb-2">Dãy số chứa giai thừa $u_n = \\frac{3^n}{n!}$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Khẳng định nào sau đây là đúng về dãy số $u_n = \\frac{3^n}{n!}$?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Dãy số tăng với mọi $n$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Dãy số giảm kể từ số hạng thứ 3 ($n \\ge 3$)</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Dãy số không tăng không giảm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Dãy số giảm với mọi $n$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: GIẢM KỂ TỪ $n \\ge 3$ VÌ $\\frac{u_{n+1}}{u_n} = \\frac{3}{n+1} < 1$ (CHỌN B)",
        "mascotMode": "celebrate",
        "mascotTip": "u_1 = 3, u_2 = 4.5, u_3 = 4.5, u_4 = 3.375... Kể từ n >= 3 dãy số giảm rõ rệt!",
        "narration": "Hết ba mươi giây. Vì u n luôn dương với mọi n thuộc N sao, ta lập tỉ số u n cộng một chia cho u n: u n cộng một bằng ba mũ n cộng một chia cho mở ngoặc n cộng một đóng ngoặc giai thừa. Chia cho u n tức là nhân với nghịch đảo: nhân n giai thừa chia cho ba mũ n. Rút gọn ba mũ n cộng một với ba mũ n còn ba; rút gọn n giai thừa với n cộng một giai thừa thì dưới mẫu còn lại n cộng một. Như vậy tỉ số bằng ba chia cho n cộng một. Với n lớn hơn hoặc bằng ba thì n cộng một lớn hơn hoặc bằng bốn, do đó ba chia cho n cộng một nhỏ hơn một, suy ra u n cộng một nhỏ hơn u n. Vậy kể từ số hạng thứ ba trở đi, dãy số là dãy số giảm. Đáp án chính xác là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-indigo-300">Rút gọn tỉ số $\\frac{u_{n+1}}{u_n}$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Ta thấy $u_n = \\frac{3^n}{n!} > 0, \\forall n \\in \\mathbb{N}^*$. Lập tỉ số:</p>
      $$\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{(n+1)!} \\cdot \\frac{n!}{3^n} = \\frac{3^{n+1}}{3^n} \\cdot \\frac{n!}{(n+1)n!} = \\frac{3}{n+1}$$
      <p class="text-slate-200">• So sánh tỉ số với 1:</p>
      $$\\frac{3}{n+1} < 1 \\iff n + 1 > 3 \\iff n > 2 \\iff n \\ge 3$$
      <div class="p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2">
        👉 Với mọi $n \\ge 3$, ta có $\\frac{u_{n+1}}{u_n} < 1 \\implies u_{n+1} < u_n$. <br/>
        👉 <b>Dãy số giảm kể từ số hạng thứ 3</b>. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: DÃY SỐ ĐAN DẤU $u_n = (-1)^n \\cdot n$",
        "subtitle": "DẠNG 3 • NHẬN DIỆN DÃY SỐ KHÔNG TĂNG, KHÔNG GIẢM",
        "mascotMode": "think",
        "mascotTip": "Tính vài số hạng đầu: u_1 = -1, u_2 = 2, u_3 = -3, u_4 = 4... Số âm rồi số dương đan xen!",
        "narration": "Ví dụ số ba: Cho dãy số u n có số hạng tổng quát u n bằng trừ một tất cả mũ n nhân n. Dãy số này có tính chất đơn điệu như thế nào? Các em có mười lăm giây để suy luận.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Dãy Đan Dấu</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Tính đơn điệu của $u_n = (-1)^n \\cdot n$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Khẳng định nào sau đây là đúng về dãy số $u_n = (-1)^n \\cdot n$?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Là dãy số tăng</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Là dãy số giảm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Là dãy số không tăng, không giảm</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Dãy số hằng</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: DÃY SỐ KHÔNG TĂNG, KHÔNG GIẢM (CHỌN ĐÁP ÁN C)",
        "mascotMode": "explain",
        "mascotTip": "u_1 = -1 < u_2 = 2 (tăng), nhưng u_2 = 2 > u_3 = -3 (giảm) -> Không tăng không giảm!",
        "narration": "Hết thời gian. Ta hãy viết ra bốn số hạng đầu tiên của dãy số: u một bằng trừ một mũ một nhân một bằng trừ một. u hai bằng trừ một mũ hai nhân hai bằng hai. u ba bằng trừ một mũ ba nhân ba bằng trừ ba. u bốn bằng trừ một mũ bốn nhân bốn bằng bốn. Ta thấy: từ u một lên u hai là tăng vì trừ một nhỏ hơn hai. Nhưng từ u hai sang u ba lại là giảm vì hai lớn hơn trừ ba. Do các số hạng luân phiên tăng giảm và đan dấu âm dương nên dãy số này là dãy số không tăng và không giảm. Đáp án chính xác là C.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Liệt kê các số hạng đầu tiên</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Khai triển các số hạng đầu:</p>
      $$u_1 = (-1)^1 \\cdot 1 = -1$$
      $$u_2 = (-1)^2 \\cdot 2 = 2$$
      $$u_3 = (-1)^3 \\cdot 3 = -3$$
      $$u_4 = (-1)^4 \\cdot 4 = 4$$
      <p class="text-slate-200">• So sánh liên tiếp:</p>
      $$u_1 < u_2 \\;\\text{(tăng)}, \\quad u_2 > u_3 \\;\\text{(giảm)}, \\quad u_3 < u_4 \\;\\text{(tăng)}$$
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 Dãy số vừa tăng vừa giảm luân phiên nên <b>không tăng, không giảm</b>. <br/>
        👉 <b>Đáp án chọn: C</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: TÌM THAM SỐ $m$ ĐỂ DÃY SỐ TĂNG",
        "subtitle": "DẠNG 4 • BÀI TOÁN PHÂN HÓA VẬN DỤNG CHỨA THAM SỐ $m$",
        "mascotMode": "think",
        "mascotTip": "Lập hiệu u_{n+1} - u_n. Cho tử số > 0 với mọi n để dãy tăng!",
        "narration": "Ví dụ số bốn là bài toán phân hóa vận dụng có chứa tham số: Tìm tất cả các giá trị của tham số m để dãy số u n với công thức u n bằng phân thức m n cộng một chia cho n cộng hai là một dãy số tăng. Các em có ba mươi giây để tìm điều kiện của m.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Chứa Tham Số $m$</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-cyan-200 mb-2">Tìm $m$ để $(u_n)$ là dãy số tăng</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Tìm tất cả các giá trị của tham số $m$ để dãy số $u_n = \\frac{mn + 1}{n + 2}$ là một dãy số tăng:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> $m > \\frac{1}{2}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> $m < \\frac{1}{2}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> $m \\ge \\frac{1}{2}$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> $m > 1$</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ $2m - 1 > 0 \\iff m > \\frac{1}{2}$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "celebrate",
        "mascotTip": "Hiệu u_{n+1} - u_n = (2m - 1) / [(n+3)(n+2)]. Dãy tăng khi và chỉ khi 2m - 1 > 0!",
        "narration": "Thời gian đã hết. Ta lập hiệu u n cộng một trừ u n: u n cộng một bằng m nhân mở ngoặc n cộng một đóng ngoặc cộng một chia cho n cộng một cộng hai, tức m n cộng m cộng một chia cho n cộng ba. Trừ đi u n là m n cộng một chia cho n cộng hai. Quy đồng mẫu số, tử số là: mở ngoặc m n cộng m cộng một đóng ngoặc nhân mở ngoặc n cộng hai đóng ngoặc, trừ đi mở ngoặc m n cộng một đóng ngoặc nhân mở ngoặc n cộng ba đóng ngoặc. Khai triển và triệt tiêu các hạng tử chứa n, tử số còn lại đúng hai m trừ một. Mẫu số n cộng ba nhân n cộng hai luôn dương với mọi n thuộc N sao. Do đó, dãy số là dãy tăng khi và chỉ khi tử số hai m trừ một lớn hơn hẳn không, tương đương m lớn hơn một phần hai. Đáp án chính xác là A.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-cyan-300">Quy đồng và tìm dấu của tử thức</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Lập hiệu $u_{n+1} - u_n$:</p>
      $$u_{n+1} - u_n = \\frac{m(n+1) + 1}{n + 3} - \\frac{mn + 1}{n + 2} = \\frac{(mn + m + 1)(n + 2) - (mn + 1)(n + 3)}{(n + 3)(n + 2)}$$
      $$= \\frac{(mn^2 + 2mn + mn + 2m + n + 2) - (mn^2 + 3mn + n + 3)}{(n + 3)(n + 2)} = \\frac{2m - 1}{(n + 3)(n + 2)}$$
      <p class="text-slate-200">• Vì $(n + 3)(n + 2) > 0, \\forall n \\in \\mathbb{N}^*$, dãy số là dãy số tăng khi và chỉ khi:</p>
      <div class="text-center font-bold text-cyan-300 text-sm py-1">
        $$2m - 1 > 0 \\iff m > \\frac{1}{2}$$
      </div>
      <div class="p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2">
        👉 <b>Đáp án chọn: A ($m > \\frac{1}{2}$)</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ TÍNH ĐƠN ĐIỆU CỦA DÃY SỐ",
        "subtitle": "LỖI LẤY DẤU BẰNG VÀ LỖI ÁP DỤNG SAI PHƯƠNG PHÁP TỈ SỐ",
        "mascotMode": "explain",
        "mascotTip": "Dãy tăng là u_{n+1} > u_n (dấu > nghiêm ngặt, không có dấu =). Chỉ dùng tỉ số khi u_n > 0!",
        "narration": "Thầy Nam Minh lưu ý hai lỗi bẫy thi rất nguy hiểm: Lỗi thứ nhất là lấy nhầm dấu lớn hơn hoặc bằng. Theo định nghĩa sách giáo khoa Kết nối tri thức, dãy số tăng yêu cầu u n cộng một phải lớn hơn hẳn u n, không có dấu bằng. Nếu có dấu bằng thì đó là dãy không giảm chứ không phải dãy tăng. Vì vậy ở ví dụ bốn, điều kiện là m lớn hơn một phần hai chứ không lấy dấu bằng. Lỗi thứ hai là vội vàng dùng phương pháp xét tỉ số khi chưa kiểm tra các số hạng có dương hay không. Nếu dãy số có số hạng âm thì việc so sánh tỉ số với một sẽ dẫn đến kết luận hoàn toàn sai lệch.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Thi</span>
      <h3 class="text-base font-bold text-rose-300">2 Bẫy Thi Điển Hình Về Dãy Tăng / Giảm</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Bẫy 1: Nhầm lẫn dấu bằng $\\ge$</h4>
        <p class="text-slate-300 leading-relaxed">
          • Dãy tăng: $u_{n+1} > u_n$ (dấu $>$ tuyệt đối).<br/>
          • Nếu $u_{n+1} \\ge u_n$ thì chỉ là dãy <i>không giảm</i>.<br/>
          👉 Chọn $m \\ge \\frac{1}{2}$ thay vì $m > \\frac{1}{2}$ là mất điểm đáng tiếc!
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400">
        <h4 class="font-bold text-amber-300 mb-1">❌ Bẫy 2: Dùng tỉ số khi $u_n < 0$</h4>
        <p class="text-slate-300 leading-relaxed">
          Phương pháp xét tỉ số $\\frac{u_{n+1}}{u_n} > 1$ CHỈ ĐƯỢC DÙNG khi $u_n > 0, \\forall n$.<br/>
          Nếu $u_n < 0$, bất đẳng thức đảo chiều dẫn đến kết luận sai ngược 180 độ!
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
        "subtitle": "LÀM CHỦ PHƯƠNG PHÁP XÉT ĐƠN ĐIỆU ĐỂ BƯỚC SANG MỤC 3: DÃY BỊ CHẶN",
        "mascotMode": "celebrate",
        "mascotTip": "Ghi nhớ quy tắc xét hiệu và xét tỉ số! Sẵn sàng bước sang Mục 3 để tìm hiểu Dãy số bị chặn!",
        "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai. Chúng ta đã làm chủ hai phương pháp xét tính tăng giảm cùng bốn ví dụ tiêu biểu từ cơ bản đến nâng cao có chứa tham số m. Ngay bây giờ, mời các em chuyển sang Mục ba để tìm hiểu về một tính chất rất quan trọng khác của dãy số: Tính bị chặn.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl">🎯🚀</div>
    <h3 class="text-xl font-black text-blue-200 mb-2">Chúc Mừng Em Hoàn Thành Mục 2!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã thành thạo cả 2 kỹ thuật xét hiệu $u_{n+1} - u_n$ và xét tỉ số $\\frac{u_{n+1}}{u_n}$. Hãy tự tin chuyển sang Mục 3 để chinh phục khái niệm Dãy số bị chặn!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40">✔ 4 Ví dụ hoàn thành</span>
      <span class="px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40">✔ Bài toán tham số $m$</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🚀 Chuyển sang Mục 3</span>
    </div>
  </div>
</div>
"""
    }
]

# ==============================================================================
# BÀI 5 - MỤC 3: DÃY SỐ BỊ CHẶN
# ==============================================================================
BAI5_MUC3_SCENES = [
    {
        "sceneIndex": 1,
        "title": "1. ĐỊNH NGHĨA DÃY SỐ BỊ CHẶN",
        "subtitle": "BÀI 5 • DÃY SỐ • MỤC 3: BỊ CHẶN TRÊN, BỊ CHẶN DƯỚI & BỊ CHẶN",
        "mascotMode": "pointer",
        "mascotTip": "Bị chặn trên: u_n <= M; Bị chặn dưới: u_n >= m; Bị chặn: m <= u_n <= M với mọi n!",
        "narration": "Chào mừng các em đến với Mục ba của Bài năm: Dãy số bị chặn. Đây là khái niệm bản lề để sau này chúng ta học về giới hạn của dãy số ở Chương năm. Một dãy số u n được gọi là bị chặn trên nếu tồn tại một số thực M sao cho mọi số hạng u n đều nhỏ hơn hoặc bằng M. Dãy số được gọi là bị chặn dưới nếu tồn tại số thực m sao cho mọi số hạng u n đều lớn hơn hoặc bằng m. Một dãy số vừa bị chặn trên vừa bị chặn dưới thì được gọi là dãy số bị chặn, tức là tồn tại hai số m và M sao cho m nhỏ hơn hoặc bằng u n, nhỏ hơn hoặc bằng M với mọi n thuộc N sao.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider">Định nghĩa cốt lõi</span>
      <h3 class="text-xl font-black text-purple-200">Dãy Số Bị Chặn Trên, Bị Chặn Dưới & Bị Chặn</h3>
    </div>
    <p class="text-sm text-slate-300">Khái niệm chuẩn mực theo SGK Toán 11 Kết Nối Tri Thức:</p>
  </div>

  <div class="grid grid-cols-3 gap-3 text-xs">
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md">
      <h4 class="font-bold text-amber-300 text-sm mb-1">1. Bị chặn trên</h4>
      <p class="text-slate-300 leading-relaxed">
        Tồn tại số thực $M$ sao cho:
        $$u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$$
        Số $M$ gọi là một cận trên của dãy số.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md">
      <h4 class="font-bold text-teal-300 text-sm mb-1">2. Bị chặn dưới</h4>
      <p class="text-slate-300 leading-relaxed">
        Tồn tại số thực $m$ sao cho:
        $$u_n \\ge m, \\quad \\forall n \\in \\mathbb{N}^*$$
        Số $m$ gọi là một cận dưới của dãy số.
      </p>
    </div>
    <div class="bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md">
      <h4 class="font-bold text-purple-300 text-sm mb-1">3. Dãy số bị chặn</h4>
      <p class="text-slate-300 leading-relaxed">
        Vừa bị chặn trên vừa bị chặn dưới:
        $$m \\le u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$$
        Tất cả các số hạng đều nằm trong đoạn $[m; M]$.
      </p>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 2,
        "title": "2. KỸ THUẬT CHỨNG MINH DÃY SỐ BỊ CHẶN",
        "subtitle": "KỸ NĂNG TÁCH PHÂN THỨC & BẤT ĐẲNG THỨC CƠ BẢN",
        "mascotMode": "explain",
        "mascotTip": "Phân thức bậc 1 / bậc 1: Chia đa thức đưa về dạng A - B/(n+c) để thấy rõ miền chặn!",
        "narration": "Để chứng minh một dãy số bị chặn, ta thường sử dụng các kỹ thuật biến đổi đại số sau: Đối với phân thức bậc nhất trên bậc nhất, các em hãy chia tử số cho mẫu số để tách thành phần nguyên cộng với một phân thức có tử số là hằng số. Khi n thay đổi từ một đến dương vô cùng, ta sẽ dễ dàng đánh giá được giá trị nhỏ nhất và giá trị lớn nhất. Đối với dãy số lượng giác chứa sin hoặc cos, ta sử dụng tính chất sin và cos luôn nằm trong đoạn từ trừ một đến một. Đối với dãy số đa thức bậc hai trở lên, ta viết dưới dạng bình phương để tìm cận dưới.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-4 rounded-xl border border-purple-500/30">
    <div class="flex items-center gap-2 mb-3">
      <span class="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></span>
      <h3 class="text-lg font-bold text-purple-300">3 Kỹ Thuật Đánh Giá Bị Chặn Thường Dùng</h3>
    </div>
    <div class="grid grid-cols-3 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-purple-400 font-bold block mb-1">1. Tách phần nguyên</span>
        Với phân thức $\\frac{an+b}{cn+d}$:<br/>
        $$u_n = A + \\frac{B}{cn+d}$$
        Đánh giá khi $n \\ge 1$: $\\frac{B}{cn+d}$ nằm trong khoảng xác định.
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-pink-400 font-bold block mb-1">2. Đánh giá lượng giác</span>
        Dùng miền giá trị $[-1; 1]$:<br/>
        $$-1 \\le \\sin(f(n)) \\le 1$$
        $$-1 \\le \\cos(f(n)) \\le 1$$
        Kết hợp chặn mẫu số.
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border border-slate-700">
        <span class="text-amber-400 font-bold block mb-1">3. Hằng đẳng thức</span>
        Đưa về bình phương cộng số:<br/>
        $$u_n = a(n - x_0)^2 + m \\ge m$$
        Chặn dưới bởi $m$, khi $n \\to +\\infty$ dãy không bị chặn trên.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 3,
        "title": "3. VÍ DỤ 1 - ĐỀ BÀI: CHỨNG MINH DÃY PHÂN THỨC BỊ CHẶN",
        "subtitle": "DẠNG 1 • DÃY SỐ $u_n = \\frac{2n - 1}{n + 1}$",
        "mascotMode": "think",
        "mascotTip": "Tách 2n - 1 = 2(n + 1) - 3. Suy ra u_n = 2 - 3/(n+1). Đánh giá khi n >= 1!",
        "narration": "Ví dụ số một: Xét tính bị chặn của dãy số u n có số hạng tổng quát u n bằng phân thức hai n trừ một chia cho n cộng một. Các em có mười lăm giây để tìm miền chặn của dãy số.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 1 • Dãy Bị Chặn</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-purple-200 mb-2">Xét tính bị chặn của dãy số $u_n = \\frac{2n - 1}{n + 1}$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Khẳng định nào sau đây là đúng về dãy số $u_n = \\frac{2n - 1}{n + 1}$?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Bị chặn vì $\\frac{1}{2} \\le u_n < 2, \\forall n$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Chỉ bị chặn dưới, không bị chặn trên</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Chỉ bị chặn trên, không bị chặn dưới</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Không bị chặn</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 4,
        "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: DÃY SỐ BỊ CHẶN $\\frac{1}{2} \\le u_n < 2$ (CHỌN ĐÁP ÁN A)",
        "mascotMode": "cheer",
        "mascotTip": "u_n = 2 - 3/(n+1). Khi n = 1: u_1 = 1/2. Khi n tăng, 3/(n+1) -> 0 nên u_n < 2!",
        "narration": "Hết thời gian. Chúng ta cùng biến đổi u n bằng cách tách phần nguyên: hai n trừ một viết thành hai nhân mở ngoặc n cộng một đóng ngoặc trừ ba. Chia cho n cộng một, ta được u n bằng hai trừ đi ba chia cho n cộng một. Vì n là số nguyên dương nên n lớn hơn hoặc bằng một, suy ra n cộng một lớn hơn hoặc bằng hai, dẫn đến ba chia cho n cộng một nhỏ hơn hoặc bằng ba phần hai. Do đó u n lớn hơn hoặc bằng hai trừ ba phần hai bằng một phần hai. Mặt khác, vì ba chia cho n cộng một luôn dương nên hai trừ đi một số dương phải luôn nhỏ hơn hai. Như vậy, một phần hai nhỏ hơn hoặc bằng u n nhỏ hơn hai với mọi n. Dãy số vừa bị chặn dưới bởi một phần hai, vừa bị chặn trên bởi hai, nên đây là một dãy số bị chặn. Đáp án chọn là A.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-purple-300">Tách phần nguyên và đánh giá hai đầu chặn</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Tách phần nguyên:</p>
      $$u_n = \\frac{2(n + 1) - 3}{n + 1} = 2 - \\frac{3}{n + 1}$$
      <p class="text-slate-200">• Đánh giá cận dưới (với $n \\ge 1$):</p>
      $$n \\ge 1 \\iff n + 1 \\ge 2 \\iff \\frac{3}{n + 1} \\le \\frac{3}{2} \\iff -\\frac{3}{n + 1} \\ge -\\frac{3}{2} \\iff u_n \\ge 2 - \\frac{3}{2} = \\frac{1}{2}$$
      <p class="text-slate-200">• Đánh giá cận trên (với $n \\ge 1$):</p>
      $$n \\ge 1 \\implies \\frac{3}{n + 1} > 0 \\implies 2 - \\frac{3}{n + 1} < 2 \\iff u_n < 2$$
      <div class="p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2">
        👉 $\\frac{1}{2} \\le u_n < 2, \\forall n \\in \\mathbb{N}^* \\implies$ <b>Dãy số bị chặn</b>. <br/>
        👉 <b>Đáp án chọn: A</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 5,
        "title": "5. VÍ DỤ 2 - ĐỀ BÀI: DÃY SỐ CHỨA HÀM SỐ LƯỢNG GIÁC",
        "subtitle": "DẠNG 2 • DÃY SỐ $u_n = \\frac{\\sin n + \\cos n}{n^2 + 1}$",
        "mascotMode": "think",
        "mascotTip": "Biến đổi tử số: |sin n + cos n| = |căn(2) * sin(n + pi/4)| <= căn(2). Mẫu n^2 + 1 >= 2!",
        "narration": "Ví dụ số hai: Xét tính bị chặn của dãy số u n bằng phân thức sin n cộng cos n chia cho n bình phương cộng một. Các em có ba mươi giây để đánh giá biểu thức lượng giác ở tử số.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 2 • Dãy Lượng Giác</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-pink-200 mb-2">Xét tính bị chặn của $u_n = \\frac{\\sin n + \\cos n}{n^2 + 1}$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Dãy số $(u_n)$ với $u_n = \\frac{\\sin n + \\cos n}{n^2 + 1}$ là:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Bị chặn trên bởi $0$, không bị chặn dưới</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Dãy số bị chặn vì $|u_n| \\le \\frac{\\sqrt{2}}{2}, \\forall n$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Dãy số không bị chặn</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Chỉ bị chặn dưới, không bị chặn trên</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 6,
        "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: DÃY SỐ BỊ CHẶN $|u_n| \\le \\frac{\\sqrt{2}}{2}$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "|Tử| <= căn(2), Mẫu >= 2 => |u_n| <= căn(2)/2. Rất đẹp mắt và chặt chẽ!",
        "narration": "Hết ba mươi giây. Lời giải chi tiết: Ở tử số, ta có công thức sin n cộng cos n bằng căn bậc hai của hai nhân sin của n cộng pi phần tư. Do giá trị của sin luôn nằm từ trừ một đến một nên giá trị tuyệt đối của tử số luôn nhỏ hơn hoặc bằng căn hai. Ở mẫu số, vì n là số nguyên dương lớn hơn hoặc bằng một, nên n bình cộng một luôn lớn hơn hoặc bằng một bình cộng một bằng hai. Do đó, giá trị tuyệt đối của u n bằng trị tuyệt đối của tử chia cho mẫu, nhỏ hơn hoặc bằng căn hai chia cho hai. Điều này có nghĩa là trừ căn hai chia hai nhỏ hơn hoặc bằng u n nhỏ hơn hoặc bằng căn hai chia hai với mọi n. Vậy dãy số là dãy số bị chặn. Đáp án chọn là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-pink-300">Đánh giá trị tuyệt đối tử số và mẫu số</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Đánh giá tử số:</p>
      $$|\\sin n + \\cos n| = \\left|\\sqrt{2}\\sin\\left(n + \\frac{\\pi}{4}\\right)\\right| \\le \\sqrt{2}, \\quad \\forall n$$
      <p class="text-slate-200">• Đánh giá mẫu số:</p>
      $$n \\ge 1 \\implies n^2 \\ge 1 \\implies n^2 + 1 \\ge 2 > 0$$
      <p class="text-slate-200">• Suy ra trị tuyệt đối của $u_n$:</p>
      <div class="text-center font-bold text-pink-300 text-sm py-1">
        $$|u_n| = \\frac{|\\sin n + \\cos n|}{n^2 + 1} \\le \\frac{\\sqrt{2}}{2} \\iff -\\frac{\\sqrt{2}}{2} \\le u_n \\le \\frac{\\sqrt{2}}{2}, \\quad \\forall n \\in \\mathbb{N}^*$$
      </div>
      <div class="p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2">
        👉 <b>Kết luận: Dãy số $(u_n)$ là dãy số bị chặn</b>. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 7,
        "title": "7. VÍ DỤ 3 - ĐỀ BÀI: DÃY ĐA THỨC BẬC HAI $u_n = 2n^2 + 3$",
        "subtitle": "DẠNG 3 • DÃY SỐ CHỈ BỊ CHẶN DƯỚI, KHÔNG BỊ CHẶN TRÊN",
        "mascotMode": "think",
        "mascotTip": "u_n = 2n^2 + 3 >= 2(1)^2 + 3 = 5 với mọi n >= 1. Khi n tăng vô hạn thì u_n tiến tới đâu?",
        "narration": "Ví dụ số ba: Cho dãy số u n với số hạng tổng quát u n bằng hai n bình phương cộng ba. Khẳng định nào sau đây là đúng về tính bị chặn của dãy số này? Các em có mười lăm giây để trả lời.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 3 • Dãy Đa Thức</span>
      <span class="countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 15s</span>
    </div>
    <h3 class="text-lg font-bold text-amber-200 mb-2">Tính bị chặn của $u_n = 2n^2 + 3$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Khẳng định nào sau đây là đúng về dãy số $u_n = 2n^2 + 3$?
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Dãy số bị chặn</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Dãy số bị chặn trên bởi 5</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Dãy số bị chặn dưới bởi 5, không bị chặn trên</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Dãy số không bị chặn dưới</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 8,
        "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: BỊ CHẶN DƯỚI BỞI 5, KHÔNG BỊ CHẶN TRÊN (CHỌN ĐÁP ÁN C)",
        "mascotMode": "explain",
        "mascotTip": "u_n >= 5 (chặn dưới). Khi n -> vô cùng thì u_n -> vô cùng nên không bị chặn trên!",
        "narration": "Hết thời gian. Ta thấy: vì n là số nguyên dương lớn hơn hoặc bằng một, nên n bình phương lớn hơn hoặc bằng một. Suy ra hai n bình phương cộng ba lớn hơn hoặc bằng hai nhân một cộng ba bằng năm với mọi n thuộc N sao. Như vậy dãy số bị chặn dưới bởi số năm. Khi n tăng lên vô hạn thì u n cũng tăng lên vô hạn, không có số thực M nào lớn hơn hoặc bằng mọi số hạng của dãy. Do đó dãy số không bị chặn trên. Đáp án chính xác là C.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-amber-300">Đánh giá cận dưới và tính vô hạn</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Vì $n \\ge 1, \\forall n \\in \\mathbb{N}^*$ nên:</p>
      $$n^2 \\ge 1 \\implies u_n = 2n^2 + 3 \\ge 2(1)^2 + 3 = 5, \\quad \\forall n \\in \\mathbb{N}^*$$
      <p class="text-emerald-300 font-bold">• Do đó, dãy số $(u_n)$ bị chặn dưới bởi số 5.</p>
      <p class="text-slate-200">• Khi $n$ tăng lớn tùy ý ($n \\to +\\infty$), $u_n \\to +\\infty$ nên không tồn tại số $M$ sao cho $u_n \\le M, \\forall n$. Dãy số không bị chặn trên.</p>
      <div class="p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2">
        👉 <b>Kết luận:</b> Dãy số bị chặn dưới bởi 5, không bị chặn trên. <br/>
        👉 <b>Đáp án chọn: C</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 9,
        "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ NỒNG ĐỘ MUỐI",
        "subtitle": "DẠNG 4 • MÔ HÌNH HÓA DÃY SỐ BỊ CHẶN TRONG HÓA HỌC & ĐỜI SỐNG",
        "mascotMode": "think",
        "mascotTip": "C_n = 0.5 * (1 - 0.96^n). Vì 0 < 0.96^n < 1 nên 0 < 1 - 0.96^n < 1!",
        "narration": "Ví dụ số bốn là bài toán thực tế trong sách giáo khoa Kết nối tri thức: Trong một bồn chứa dung dịch, nồng độ muối ký hiệu là C n đơn vị gam trên lít sau n phút pha trộn được mô hình bởi công thức: C n bằng không phẩy năm nhân mở ngoặc một trừ không phẩy chín mươi sáu mũ n đóng ngoặc. Khẳng định nào sau đây là đúng về tính bị chặn của dãy số nồng độ C n? Các em có ba mươi giây để suy luận.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl">
    <div class="flex items-center justify-between mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider">Ví dụ 4 • Mô Hình Thực Tế</span>
      <span class="countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30">⏳ 30s</span>
    </div>
    <h3 class="text-lg font-bold text-emerald-200 mb-2">Nồng độ muối $C_n = 0{,}5(1 - 0{,}96^n)$</h3>
    <p class="text-slate-200 text-sm leading-relaxed mb-4">
      Nồng độ muối sau $n$ phút trong bồn là $C_n = 0{,}5(1 - 0{,}96^n)$ (g/L). Dãy $(C_n)$ có tính chất:
    </p>
    <div class="grid grid-cols-2 gap-2 text-xs">
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>A.</b> Không bị chặn vì $n \\to +\\infty$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>B.</b> Bị chặn vì $0 < C_n < 0{,}5\\text{ g/L}, \\forall n$</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>C.</b> Chỉ bị chặn dưới bởi 0, không bị chặn trên</div>
      <div class="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300"><b>D.</b> Bị chặn trên bởi 1 g/L, không bị chặn dưới</div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 10,
        "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
        "subtitle": "KẾT QUẢ: BỊ CHẶN VÌ $0 < C_n < 0{,}5\\text{ g/L}$ (CHỌN ĐÁP ÁN B)",
        "mascotMode": "celebrate",
        "mascotTip": "Nồng độ muối không bao giờ vượt quá 0.5 g/L! Đây là nồng độ bão hòa tiệm cận!",
        "narration": "Thời gian đã hết. Lời giải chi tiết: Vì không phẩy chín mươi sáu là số dương nhỏ hơn một, nên với mọi số nguyên dương n, không phẩy chín mươi sáu mũ n luôn nằm trong khoảng từ không đến một. Do đó một trừ không phẩy chín mươi sáu mũ n cũng luôn nằm trong khoảng từ không đến một. Nhân với không phẩy năm, ta được: không nhỏ hơn C n nhỏ hơn không phẩy năm với mọi n thuộc N sao. Như vậy dãy nồng độ C n là một dãy số bị chặn, bị chặn dưới bởi không và bị chặn trên bởi không phẩy năm gam trên lít. Đáp án chính xác là B.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full">Lời Giải Chi Tiết</span>
      <h3 class="text-base font-bold text-emerald-300">Đánh giá cơ số lũy thừa $0 < q < 1$</h3>
    </div>
    <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2">
      <p class="text-slate-200">• Vì $0 < 0{,}96 < 1$ nên với mọi $n \\in \\mathbb{N}^*$:</p>
      $$0 < 0{,}96^n < 1$$
      <p class="text-slate-200">• Trừ cả hai vế cho 1:</p>
      $$-1 < -0{,}96^n < 0 \\iff 0 < 1 - 0{,}96^n < 1$$
      <p class="text-slate-200">• Nhân với $0{,}5 > 0$:</p>
      <div class="text-center font-bold text-emerald-300 text-sm py-1">
        $$0 < 0{,}5(1 - 0{,}96^n) < 0{,}5 \\iff 0 < C_n < 0{,}5 \\quad (\\forall n \\in \\mathbb{N}^*)$$
      </div>
      <div class="p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2">
        👉 <b>Dãy $(C_n)$ bị chặn trong khoảng $(0; 0{,}5)$ gam/lít</b>. <br/>
        👉 <b>Đáp án chọn: B</b>.
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 11,
        "title": "11. CẢNH BÁO BẪY THI VỀ DÃY SỐ BỊ CHẶN",
        "subtitle": "PHÂN BIỆT RÕ: BỊ CHẶN TRÊN, BỊ CHẶN DƯỚI VÀ BỊ CHẶN",
        "mascotMode": "explain",
        "mascotTip": "Một dãy số được gọi là 'BỊ CHẶN' khi và chỉ khi nó VỪA bị chặn trên VỪA bị chặn dưới!",
        "narration": "Thầy Nam Minh lưu ý một bẫy trắc nghiệm lý thuyết cực kỳ phổ biến: Đề bài hỏi dãy số có bị chặn hay không. Rất nhiều bạn thấy dãy số có chặn dưới là vội vàng kết luận dãy số bị chặn. Điều này là sai! Một dãy số chỉ được gọi là bị chặn khi nó thỏa mãn đồng thời cả hai điều kiện: vừa bị chặn trên, vừa bị chặn dưới. Nếu chỉ bị chặn một phía (chỉ chặn trên hoặc chỉ chặn dưới) thì ta phải nói rõ là bị chặn trên hoặc bị chặn dưới, chứ không được nói chung là bị chặn.",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl">
    <div class="flex items-center gap-2 mb-3">
      <span class="px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase">Cảnh Báo Bẫy Lý Thuyết</span>
      <h3 class="text-base font-bold text-rose-300">Phân Biệt Rõ Khái Niệm Bị Chặn</h3>
    </div>
    <div class="grid grid-cols-2 gap-3 text-xs">
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400">
        <h4 class="font-bold text-rose-300 mb-1">❌ Sai lầm: Chặn một phía kết luận 'Bị chặn'</h4>
        <p class="text-slate-300 leading-relaxed">
          Ví dụ dãy $u_n = n^2$: có $u_n \\ge 1$ nên <b>bị chặn dưới</b>.<br/>
          Nhưng $u_n \\to +\\infty$ nên <b>không bị chặn trên</b>.<br/>
          👉 Khẳng định "Dãy $(u_n)$ bị chặn" là <b>SAI HOÀN TOÀN</b>!
        </p>
      </div>
      <div class="bg-slate-900/80 p-3 rounded-lg border-t-2 border-emerald-400">
        <h4 class="font-bold text-emerald-300 mb-1">✔ Định nghĩa đúng: Hai đầu phải kẹp kín</h4>
        <p class="text-slate-300 leading-relaxed">
          Dãy số $(u_n)$ được gọi là <b>bị chặn</b> $\\iff$ tồn tại cả $m$ và $M$ sao cho:<br/>
          $$m \\le u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$$
          👉 Phải kiểm tra cả hai phía cận trên và cận dưới!
        </p>
      </div>
    </div>
  </div>
</div>
"""
    },
    {
        "sceneIndex": 12,
        "title": "12. TỔNG KẾT TOÀN BỘ BÀI 5 & CHUYỂN SANG BÀI 6: CẤP SỐ CỘNG",
        "subtitle": "NẮM TRỌN 3 MỤC BÀI 5 • SẴN SÀNG CHINH PHỤC CẤP SỐ CỘNG",
        "mascotMode": "celebrate",
        "mascotTip": "Chúc mừng em hoàn thành trọn vẹn Bài 5 Dãy số! Chuyển ngay sang Bài 6 Cấp số cộng!",
        "narration": "Chúc mừng các em học sinh thân mến đã hoàn thành trọn vẹn toàn bộ ba mục bài giảng của Bài năm: Dãy số. Chúng ta đã làm chủ định nghĩa, ba cách xác định dãy số, phương pháp xét tính tăng giảm và phương pháp đánh giá tính bị chặn. Nền tảng vững chắc này sẽ là hành trang tuyệt vời để các em bước sang Bài sáu: Cấp số cộng, một dạng dãy số có quy luật cộng dồn vô cùng đặc biệt. Hẹn gặp lại các em ở Bài sáu!",
        "bodyHtml": """
<div class="space-y-4">
  <div class="bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl">
    <div class="inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl">🎓⭐🎉</div>
    <h3 class="text-xl font-black text-purple-200 mb-2">Chúc Mừng Em Hoàn Thành Xuất Sắc Bài 5!</h3>
    <p class="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4">
      Em đã nắm trọn vẹn 3 trụ cột của Dãy số: Khái niệm & cách cho dãy, Tính tăng / giảm, và Tính bị chặn với 12 ví dụ thực chiến. Giờ là lúc bước sang Bài 6: Cấp số cộng!
    </p>
    <div class="flex justify-center gap-4 text-xs font-bold">
      <span class="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40">✔ 12 Ví dụ tiêu biểu Bài 5</span>
      <span class="px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40">✔ Đơn điệu & Bị chặn vững vàng</span>
      <span class="px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40">🔥 Chuyển sang Bài 6: Cấp số cộng</span>
    </div>
  </div>
</div>
"""
    }
]

print("ch2_bai5_data.py fully completed: MUC1, MUC2, MUC3 ready.")
