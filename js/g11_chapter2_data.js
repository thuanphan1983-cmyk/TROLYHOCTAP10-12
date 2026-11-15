/* =========================================================================
   CHƯƠNG II: DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN - TOÁN 11 KNTT
   Bài 5: Dãy số (Mục 1, 2, 3)
   Bài 6: Cấp số cộng (Mục 1, 2, 3)
   Bài 7: Cấp số nhân (Mục 1, 2, 3)
   Mỗi mục gồm 12 scenes, 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
   Hệ thống Trợ lý Học tập Toán 10-12 Chuẩn Bộ GD&ĐT
   ========================================================================= */

if (typeof window !== 'undefined') {
  window.G11_CHAPTER2_DATA = window.G11_CHAPTER2_DATA || {};

  window.G11_CHAPTER2_DATA.g11_bai5_muc1 = {
  "lessonId": "toan11_bai5",
  "lessonTitle": "Bài 5: Dãy số",
  "sectionId": "g11_bai5_muc1",
  "sectionTitle": "Mục 1: Khái niệm dãy số & Các cách cho một dãy số",
  "audio": "/audio/g11_bai5_muc1.mp3",
  "audioSrc": "./audio/g11_bai5_muc1.mp3",
  "audio_src": "./audio/g11_bai5_muc1.mp3",
  "title": "Mục 1: Khái niệm dãy số & Các cách cho một dãy số",
  "owl_tip": "Dãy số là hàm số xác định trên tập số nguyên dương N*. Dãy số có thể cho bằng công thức TQ, truy hồi hoặc mô tả!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. KHÁI NIỆM DÃY SỐ VÔ HẠN VÀ HỮU HẠN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÁC CÁCH XÁC ĐỊNH MỘT DÃY SỐ",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI & SAI LẦM THƯỜNG GẶP",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 333.43,
  "formattedDuration": "05:33",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. KHÁI NIỆM DÃY SỐ VÔ HẠN VÀ HỮU HẠN",
      "subtitle": "BÀI 5 • DÃY SỐ • MỤC 1: ĐỊNH NGHĨA & PHÂN LOẠI",
      "mascotMode": "pointer",
      "mascotTip": "Dãy số là hàm số xác định trên tập số nguyên dương N*! Mỗi giá trị u(n) ký hiệu gọn là u_n!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định nghĩa cốt lõi</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Dãy Số Vô Hạn & Dãy Số Hữu Hạn</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Khái niệm dãy số trong chương trình Toán 11 Kết Nối Tri Thức:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">1. Dãy số vô hạn</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Là hàm số $u: \\mathbb{N}^* \\to \\mathbb{R}$, $n \\mapsto u(n)$.<br/>\n        • Ký hiệu: $(u_n)$ hay $u_1, u_2, u_3, \\dots, u_n, \\dots$<br/>\n        • $u_1$: số hạng đầu; $u_n$: số hạng thứ $n$ (số hạng tổng quát).\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">2. Dãy số hữu hạn</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Là hàm số xác định trên tập $\\{1, 2, \\dots, m\\}$ ($m \\in \\mathbb{N}^*$).<br/>\n        • Viết dưới dạng khai triển: $u_1, u_2, \\dots, u_m$.<br/>\n        • $u_1$: số hạng đầu; $u_m$: số hạng cuối cùng.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em học sinh lớp mười một đến với Chương hai: Dãy số, cấp số cộng và cấp số nhân. Bài học đầu tiên của chương là Bài năm: Dãy số. Ở Mục một, chúng ta cùng tìm hiểu về định nghĩa dãy số và ba cách cho dãy số. Trong toán học, mỗi hàm số u xác định trên tập hợp các số nguyên dương N sao được gọi là một dãy số vô hạn. Ký hiệu là mở ngoặc u n đóng ngoặc. Giá trị u tại n được viết gọn là u n và gọi là số hạng thứ n hay số hạng tổng quát của dãy số. Nếu hàm số chỉ xác định trên tập m số nguyên dương đầu tiên, ta có một dãy số hữu hạn.",
      "startTime": 0.0,
      "endTime": 39.98,
      "duration": 39.98
    },
    {
      "sceneIndex": 2,
      "title": "2. CÁC CÁCH XÁC ĐỊNH MỘT DÃY SỐ",
      "subtitle": "3 PHƯƠNG PHÁP CHO DÃY SỐ TRỌNG TÂM",
      "mascotMode": "explain",
      "mascotTip": "3 cách cho dãy số: 1) Công thức tổng quát; 2) Hệ thức truy hồi; 3) Phương pháp mô tả!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-teal-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-teal-300\">3 Phương Pháp Xác Định Dãy Số</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-emerald-400 font-bold block mb-1\">1. Công thức tổng quát</span>\n        Cho biết trực tiếp $u_n$ theo $n$:\n        $$u_n = \\frac{2n - 1}{n + 1}$$\n        👉 Muốn tính $u_k$, chỉ cần thay $n = k$.\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-cyan-400 font-bold block mb-1\">2. Hệ thức truy hồi</span>\n        Cho $u_1$ và quy tắc tính $u_{n+1}$:\n        $$\\begin{cases} u_1 = 3 \\\\ u_{n+1} = 2u_n - 1 \\end{cases}$$\n        👉 Tính lần lượt $u_1 \\to u_2 \\to u_3 \\to \\dots$\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold block mb-1\">3. Phương pháp mô tả</span>\n        Mô tả đặc điểm thuật toán của $u_n$:\n        • $u_n$ là số nguyên tố thứ $n$.<br/>\n        • $u_1 = 2, u_2 = 3, u_3 = 5, u_4 = 7...$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một dãy số có thể được cho bằng ba cách phổ biến: Cách thứ nhất là cho bởi công thức số hạng tổng quát, ví dụ u n bằng hai n trừ một. Biết n ta tính được ngay u n. Cách thứ hai là cho bởi hệ thức truy hồi: cho số hạng đầu tiên u một và công thức tính u n cộng một thông qua u n đứng trước nó. Cách thứ ba là cho bằng phương pháp mô tả, ví dụ u n là số nguyên tố thứ n trong toán học. Trong các đề kiểm tra, công thức tổng quát và hệ thức truy hồi là hai dạng xuất hiện nhiều nhất.",
      "startTime": 39.98,
      "endTime": 72.98,
      "duration": 33.0
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG CỦA DÃY SỐ",
      "subtitle": "DẠNG 1 • XÁC ĐỊNH SỐ HẠNG QUA CÔNG THỨC TỔNG QUÁT",
      "mascotMode": "think",
      "mascotTip": "Thay n = 1 để tính u_1, thay n = 4 để tính u_4. Cẩn thận tính nhẩm phân số!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Tính Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Tính $u_1$ và $u_4$ của dãy số</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho dãy số $(u_n)$ xác định bởi $u_n = \\frac{3n - 1}{n + 2}$. Tìm $u_1$ và $u_4$:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $u_1 = \\frac{2}{3}; \\; u_4 = \\frac{11}{6}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $u_1 = 1; \\; u_4 = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $u_1 = \\frac{2}{3}; \\; u_4 = \\frac{5}{3}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $u_1 = \\frac{1}{3}; \\; u_4 = \\frac{11}{6}$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng bắt đầu với Ví dụ số một. Cho dãy số u n với công thức số hạng tổng quát u n bằng phân thức ba n trừ một chia cho n cộng hai. Hãy tìm số hạng đầu tiên u một và số hạng thứ tư u bốn của dãy số. Các em có mười lăm giây để tính toán.",
      "startTime": 72.98,
      "endTime": 91.9,
      "duration": 18.91
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $u_1 = \\frac{2}{3}$ VÀ $u_4 = \\frac{11}{6}$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "u_1 = (3*1 - 1)/(1 + 2) = 2/3. u_4 = (3*4 - 1)/(4 + 2) = 11/6. Chuẩn xác!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Thay trực tiếp giá trị $n$ vào công thức</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Với $n = 1$:</p>\n      <div class=\"text-center font-bold text-emerald-300 text-sm py-1\">\n        $$u_1 = \\frac{3(1) - 1}{1 + 2} = \\frac{2}{3}$$\n      </div>\n      <p class=\"text-slate-200\">• Với $n = 4$:</p>\n      <div class=\"text-center font-bold text-teal-300 text-sm py-1\">\n        $$u_4 = \\frac{3(4) - 1}{4 + 2} = \\frac{11}{6}$$\n      </div>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        👉 <b>Đáp án chọn: A ($u_1 = \\frac{2}{3}; u_4 = \\frac{11}{6}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Lời giải chi tiết như sau: Với n bằng một, ta thay vào công thức: u một bằng ba nhân một trừ một chia cho một cộng hai, tử số bằng hai, mẫu số bằng ba, kết quả u một bằng hai phần ba. Với n bằng bốn, ta thay vào: u bốn bằng ba nhân bốn trừ một chia cho bốn cộng hai, ba nhân bốn bằng mười hai, trừ một bằng mười một; mẫu số bốn cộng hai bằng sáu, kết quả u bốn bằng mười một phần sáu. Đáp án chính xác là A.",
      "startTime": 91.9,
      "endTime": 121.73,
      "duration": 29.83
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH SỐ HẠNG QUA HỆ THỨC TRUY HỒI",
      "subtitle": "DẠNG 2 • TÍNH TỪNG BƯỚC THEO CÔNG THỨC TRUY HỒI",
      "mascotMode": "think",
      "mascotTip": "Tính lần lượt: u_2 = 2*u_1 - 1, sau đó u_3 = 2*u_2 - 1, rồi u_4 = 2*u_3 - 1!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Dãy Truy Hồi</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-teal-200 mb-2\">Tính số hạng của dãy truy hồi bậc 1</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho dãy số $(u_n)$ xác định bởi: $\\begin{cases} u_1 = 3 \\\\ u_{n+1} = 2u_n - 1 \\quad (\\forall n \\ge 1) \\end{cases}$. Số hạng $u_4$ bằng:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $u_4 = 9$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $u_4 = 17$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $u_4 = 33$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $u_4 = 15$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Cho dãy số u n xác định bởi u một bằng ba và u n cộng một bằng hai u n trừ một với mọi n lớn hơn hoặc bằng một. Hãy tính số hạng thứ tư u bốn của dãy số. Các em có ba mươi giây để tính toán từng bước.",
      "startTime": 121.73,
      "endTime": 138.26,
      "duration": 16.54
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $u_4 = 17$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "u_2 = 2(3)-1 = 5; u_3 = 2(5)-1 = 9; u_4 = 2(9)-1 = 17. Chúc mừng các em chọn B!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-teal-300\">Tính tuần tự các số hạng theo hệ thức truy hồi</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Đã có: $u_1 = 3$.</p>\n      <p class=\"text-slate-200\">• Tính $u_2$: $u_2 = 2u_1 - 1 = 2(3) - 1 = 5$.</p>\n      <p class=\"text-slate-200\">• Tính $u_3$: $u_3 = 2u_2 - 1 = 2(5) - 1 = 9$.</p>\n      <div class=\"text-center font-bold text-teal-300 text-sm py-1\">\n        $$u_4 = 2u_3 - 1 = 2(9) - 1 = 17$$\n      </div>\n      <div class=\"p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($u_4 = 17$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Chúng ta cùng tính tuần tự từng số hạng: Đầu tiên, với n bằng một: u hai bằng hai lần u một trừ một, bằng hai nhân ba trừ một bằng năm. Tiếp theo, với n bằng hai: u ba bằng hai lần u hai trừ một, bằng hai nhân năm trừ một bằng chín. Cuối cùng, với n bằng ba: u bốn bằng hai lần u ba trừ một, bằng hai nhân chín trừ một bằng mười bảy. Đáp án chính xác là B.",
      "startTime": 138.26,
      "endTime": 166.92,
      "duration": 28.66
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM VỊ TRÍ CỦA MỘT SỐ HẠNG TRONG DÃY",
      "subtitle": "DẠNG 3 • GIẢI PHƯƠNG TRÌNH TÌM CHỈ SỐ NGUYÊN DƯƠNG $n$",
      "mascotMode": "think",
      "mascotTip": "Giải phương trình u_n = 42, tức là n^2 - 3n + 2 = 42. Nhớ điều kiện n thuộc N*!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Vị Trí Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Số 42 là số hạng thứ mấy?</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho dãy số $(u_n)$ có $u_n = n^2 - 3n + 2$. Hỏi số $42$ là số hạng thứ bao nhiêu của dãy số?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Số hạng thứ 7</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Số hạng thứ 8</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Số hạng thứ 9</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Không thuộc dãy số</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Bước sang Ví dụ số ba: Cho dãy số u n với công thức số hạng tổng quát u n bằng n bình phương trừ ba n cộng hai. Hỏi số bốn mươi hai là số hạng thứ bao nhiêu của dãy số? Các em có mười lăm giây để giải phương trình tìm n.",
      "startTime": 166.92,
      "endTime": 183.36,
      "duration": 16.44
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $n = 8 \\implies 42 = u_8$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "explain",
      "mascotTip": "Phương trình n^2 - 3n - 40 = 0 có nghiệm n = 8 (nhận) và n = -5 (loại vì n thuộc N*)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Giải phương trình bậc hai với điều kiện $n \\in \\mathbb{N}^*$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta giải phương trình $u_n = 42$:</p>\n      $$n^2 - 3n + 2 = 42 \\iff n^2 - 3n - 40 = 0$$\n      <p class=\"text-slate-200\">• Phân tích nhân tử:</p>\n      $$(n - 8)(n + 5) = 0 \\iff \\left[\\begin{array}{l} n = 8 \\;\\text{(thỏa mãn } n \\in \\mathbb{N}^*) \\\\ n = -5 \\;\\text{(loại vì } n \\notin \\mathbb{N}^*) \\end{array}\\right.$$\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Kết luận:</b> $42$ là số hạng thứ 8 ($u_8 = 42$). <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Để biết số bốn mươi hai là số hạng thứ mấy, ta giải phương trình u n bằng bốn mươi hai: n bình trừ ba n cộng hai bằng bốn mươi hai. Chuyển vế ta được: n bình trừ ba n trừ bốn mươi bằng không. Phương trình bậc hai này có hai nghiệm: n bằng tám và n bằng trừ năm. Vì chỉ số của dãy số bắt buộc phải là số nguyên dương, tức n thuộc N sao, nên ta loại n bằng trừ năm và nhận n bằng tám. Vậy số bốn mươi hai là số hạng thứ tám của dãy số. Đáp án chọn là B.",
      "startTime": 183.36,
      "endTime": 219.98,
      "duration": 36.62
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ LÃI KÉP",
      "subtitle": "DẠNG 4 • MÔ HÌNH HÓA TĂNG TRƯỞNG TIỀN GỬI TIẾT KIỆM",
      "mascotMode": "think",
      "mascotTip": "Công thức lãi kép: A_n = A_0 * (1 + r)^n. Với A_0 = 100, r = 0.06, tính A_3!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Thực Tế</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Bài toán lãi kép ngân hàng</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Bác Nam gửi tiết kiệm $100$ triệu đồng vào ngân hàng với lãi suất $6\\%$/năm theo thể thức lãi kép. Tổng số tiền bác Nam nhận được sau $3$ năm (triệu đồng, làm tròn đến hàng phần mười) là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $118{,}0\\text{ triệu}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $119{,}1\\text{ triệu}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $120{,}5\\text{ triệu}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $116{,}0\\text{ triệu}$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn là một bài toán tài chính thực tế: Một người gửi tiết kiệm một trăm triệu đồng vào ngân hàng với lãi suất sáu phần trăm một năm theo hình thức lãi kép, tức là tiền lãi của mỗi năm được nhập vào vốn để tính lãi cho năm sau. Gọi A n là tổng số tiền người đó nhận được sau n năm. Hãy tính số tiền người đó nhận được sau ba năm, làm tròn kết quả đến hàng phần mười triệu đồng. Các em có ba mươi giây để tính toán.",
      "startTime": 219.98,
      "endTime": 246.38,
      "duration": 26.4
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $A_3 \\approx 119{,}1\\text{ TRIỆU ĐỒNG}$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "A_3 = 100 * (1 + 0.06)^3 = 100 * 1.191016 = 119.1016 triệu đồng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Thiết lập công thức tổng quát của bài toán lãi kép</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Sau 1 năm: $A_1 = 100(1 + 0{,}06) = 100 \\times 1{,}06$.</p>\n      <p class=\"text-slate-200\">• Sau $n$ năm, tổng số tiền là: $A_n = 100(1{,}06)^n$ (triệu đồng).</p>\n      <p class=\"text-slate-200\">• Với $n = 3$ năm:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$A_3 = 100 \\times (1{,}06)^3 = 100 \\times 1{,}191016 = 119{,}1016 \\approx 119{,}1 \\text{ (triệu đồng)}$$\n      </div>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($119{,}1\\text{ triệu đồng}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Lời giải chi tiết: Sau năm thứ nhất, số tiền là: một trăm nhân mở ngoặc một cộng không phẩy không sáu đóng ngoặc bằng một trăm nhân một phẩy không sáu. Cứ như vậy, sau n năm, số tiền nhận được là: A n bằng một trăm nhân mở ngoặc một phẩy không sáu đóng ngoặc mũ n triệu đồng. Thay n bằng ba vào, ta có: A ba bằng một trăm nhân một phẩy không sáu mũ ba, bằng một trăm nhân một phẩy một chín một không một sáu, xấp xỉ một trăm mười chín phẩy một triệu đồng. Đáp án chọn là B.",
      "startTime": 246.38,
      "endTime": 279.0,
      "duration": 32.62
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI & SAI LẦM THƯỜNG GẶP",
      "subtitle": "LỖI CHỈ SỐ BẮT ĐẦU VÀ LỖI TÍNH TOÁN DÃY TRUY HỒI",
      "mascotMode": "explain",
      "mascotTip": "Chỉ số dãy số luôn là số tự nhiên dương n >= 1 (n thuộc N*). Tuyệt đối không lấy n <= 0!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">3 Sai Lầm Thường Gặp Về Dãy Số</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Quên $n \\in \\mathbb{N}^*$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Chỉ số vị trí $n$ phải là số nguyên dương ($n = 1, 2, 3...$). Nghiệm $n = 0, n = -5$ hoặc phân số bắt buộc phải loại!</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Nhầm giữa $n$ và $u_n$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">$n$ là số thứ tự vị trí (số nguyên dương), còn $u_n$ là giá trị số hạng (có thể âm, phân số, vô tỉ tùy ý).</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-cyan-400\">\n        <h4 class=\"font-bold text-cyan-300 mb-1\">❌ Bẫy 3: Nhảy cóc dãy truy hồi</h4>\n        <p class=\"text-slate-300 leading-relaxed\">Khi tính $u_5$ từ hệ thức truy hồi, phải tính lần lượt $u_1 \\to u_2 \\to u_3 \\to u_4 \\to u_5$, không được đoán bừa.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý ba lỗi sai học sinh rất hay mắc phải ở bài dãy số: Thứ nhất là quên điều kiện n thuộc N sao, tức n là số nguyên dương lớn hơn hoặc bằng một. Khi giải phương trình tìm chỉ số mà ra số âm hoặc phân số, các em phải loại ngay. Thứ hai là nhầm lẫn giữa chỉ số n và giá trị u n. Chỉ số n chỉ vị trí thứ mấy, còn u n là giá trị của số hạng đó. Thứ ba, đối với dãy truy hồi, không được tính nhẩm nhảy cóc mà phải tính tuần tự từ u một lên u hai, u ba để tránh sai sót dây chuyền.",
      "startTime": 279.0,
      "endTime": 313.06,
      "duration": 34.06
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "NẮM VỮNG KHÁI NIỆM ĐỂ CHUYỂN SANG MỤC 2: DÃY TĂNG VÀ DÃY GIẢM",
      "mascotMode": "celebrate",
      "mascotTip": "Làm chủ 3 cách cho dãy số! Chuyển ngay sang Mục 2 để rèn kỹ năng xét tính tăng, giảm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl\">🦉✨</div>\n    <h3 class=\"text-xl font-black text-emerald-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 1!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã nắm vững định nghĩa dãy số vô hạn, hữu hạn, công thức tổng quát và hệ thức truy hồi. Hãy tự tin chuyển sang Mục 2 để rèn luyện phương pháp xét tính Tăng / Giảm của dãy số!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 4 Ví dụ đã hoàn thành</span>\n      <span class=\"px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40\">✔ 3 Cách cho dãy số</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 2</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục một của Bài năm. Chúng ta đã làm chủ khái niệm dãy số, ba cách xác định và bốn ví dụ tiêu biểu. Hãy ghi nhớ thật kỹ điều kiện n thuộc N sao. Bây giờ, thầy mời các em cùng chuyển sang Mục hai để tìm hiểu về phương pháp xét tính tăng và giảm của một dãy số.",
      "startTime": 313.06,
      "endTime": 333.43,
      "duration": 20.38
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai5_muc1 = window.G11_CHAPTER2_DATA.g11_bai5_muc1;

  window.G11_CHAPTER2_DATA.g11_bai5_muc2 = {
  "lessonId": "toan11_bai5",
  "lessonTitle": "Bài 5: Dãy số",
  "sectionId": "g11_bai5_muc2",
  "sectionTitle": "Mục 2: Dãy số tăng, dãy số giảm & Phương pháp xét tính đơn điệu",
  "audio": "/audio/g11_bai5_muc2.mp3",
  "audioSrc": "./audio/g11_bai5_muc2.mp3",
  "audio_src": "./audio/g11_bai5_muc2.mp3",
  "title": "Mục 2: Dãy số tăng, dãy số giảm & Phương pháp xét tính đơn điệu",
  "owl_tip": "Để xét tăng/giảm: lập hiệu u_{n+1} - u_n so sánh với 0; nếu số hạng luôn dương thì lập tỉ số u_{n+1}/u_n so sánh với 1!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA DÃY SỐ TĂNG VÀ DÃY SỐ GIẢM",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. PHƯƠNG PHÁP XÉT TÍNH TĂNG, GIẢM CỦA DÃY SỐ",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ TÍNH ĐƠN ĐIỆU CỦA DÃY SỐ",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 392.04,
  "formattedDuration": "06:32",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA DÃY SỐ TĂNG VÀ DÃY SỐ GIẢM",
      "subtitle": "BÀI 5 • DÃY SỐ • MỤC 2: TÍNH ĐƠN ĐIỆU CỦA DÃY SỐ",
      "mascotMode": "pointer",
      "mascotTip": "Dãy tăng: số hạng sau lớn hơn số hạng trước (u_{n+1} > u_n). Dãy giảm: u_{n+1} < u_n!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Khái niệm cốt lõi</span>\n      <h3 class=\"text-xl font-black text-blue-200\">Định Nghĩa Dãy Số Tăng & Dãy Số Giảm</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Tính chất đơn điệu của dãy số với mọi $n \\in \\mathbb{N}^*$:</p>\n  </div>\n\n  <div class=\"grid grid-cols-3 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">📈 1. Dãy số tăng</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        $$u_{n+1} > u_n, \\quad \\forall n \\in \\mathbb{N}^*$$\n        Số hạng sau luôn lớn hơn số hạng liền trước nó.<br/>\n        Ví dụ: $1, 3, 5, 7, \\dots$ ($u_n = 2n - 1$).\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-rose-400 shadow-md\">\n      <h4 class=\"font-bold text-rose-300 text-sm mb-1\">📉 2. Dãy số giảm</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        $$u_{n+1} < u_n, \\quad \\forall n \\in \\mathbb{N}^*$$\n        Số hạng sau luôn nhỏ hơn số hạng liền trước nó.<br/>\n        Ví dụ: $1, \\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\dots$ ($u_n = \\frac{1}{n}$).\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">⚖️ 3. Không tăng, không giảm</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Dãy số đan dấu âm dương hoặc lúc tăng lúc giảm.<br/>\n        Ví dụ: $u_n = (-1)^n$: $-1, 1, -1, 1...$<br/>\n        Dãy số không đổi: $c, c, c, \\dots$\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục hai: Dãy số tăng và dãy số giảm. Tương tự như hàm số đồng biến và nghịch biến, một dãy số u n được gọi là dãy số tăng nếu với mọi số nguyên dương n, số hạng sau luôn lớn hơn số hạng đứng ngay trước nó, tức là u n cộng một lớn hơn u n. Ngược lại, dãy số được gọi là dãy số giảm nếu số hạng sau luôn nhỏ hơn số hạng đứng trước, tức u n cộng một nhỏ hơn u n với mọi n thuộc N sao. Nếu dãy số có các số hạng đan dấu hoặc lúc tăng lúc giảm thì được gọi là dãy số không tăng, không giảm.",
      "startTime": 0.0,
      "endTime": 34.1,
      "duration": 34.1
    },
    {
      "sceneIndex": 2,
      "title": "2. PHƯƠNG PHÁP XÉT TÍNH TĂNG, GIẢM CỦA DÃY SỐ",
      "subtitle": "2 PHƯƠNG PHÁP THỰC CHIẾN: XÉT HIỆU HOẶC XÉT TỈ SỐ",
      "mascotMode": "explain",
      "mascotTip": "Phương pháp 1: Xét hiệu u_{n+1} - u_n so với 0. Phương pháp 2: Xét tỉ số u_{n+1} / u_n so với 1 (khi u_n > 0)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-blue-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-blue-300\">2 Công Cụ Xét Tính Tăng / Giảm Chuẩn Mực</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-blue-400 font-bold block mb-1\">Phương pháp 1: Xét Hiệu Số</span>\n        Lập hiệu: $H = u_{n+1} - u_n$:\n        <ul class=\"list-disc pl-4 text-slate-300 space-y-1 mt-1\">\n          <li>Nếu $H > 0, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>TĂNG</b>.</li>\n          <li>Nếu $H < 0, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>GIẢM</b>.</li>\n        </ul>\n        👉 <i>Thích hợp cho đa thức, phân thức hữu tỉ, căn thức.</i>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-purple-400 font-bold block mb-1\">Phương pháp 2: Xét Tỉ Số (khi $u_n > 0$)</span>\n        Lập tỉ số: $T = \\frac{u_{n+1}}{u_n}$:\n        <ul class=\"list-disc pl-4 text-slate-300 space-y-1 mt-1\">\n          <li>Nếu $T > 1, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>TĂNG</b>.</li>\n          <li>Nếu $T < 1, \\forall n \\in \\mathbb{N}^* \\implies$ Dãy số <b>GIẢM</b>.</li>\n        </ul>\n        👉 <i>Thích hợp cho biểu thức chứa lũy thừa $a^n$ và giai thừa $n!$.</i>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để xét tính tăng hay giảm của một dãy số, các em có hai phương pháp chuẩn mực: Phương pháp thứ nhất là xét hiệu: Ta lập hiệu số H bằng u n cộng một trừ u n. Nếu H luôn lớn hơn không với mọi n, dãy số tăng. Nếu H luôn nhỏ hơn không, dãy số giảm. Phương pháp thứ hai là xét tỉ số: Khi dãy số có tất cả các số hạng đều dương, ta lập tỉ số T bằng u n cộng một chia cho u n rồi so sánh với số một. Nếu T lớn hơn một, dãy số tăng. Nếu T nhỏ hơn một, dãy số giảm. Phương pháp xét tỉ số cực kỳ hiệu quả khi số hạng chứa lũy thừa hoặc giai thừa.",
      "startTime": 34.1,
      "endTime": 81.02,
      "duration": 46.92
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: XÉT TÍNH TĂNG GIẢM CỦA PHÂN THỨC",
      "subtitle": "DẠNG 1 • XÉT HIỆU $u_{n+1} - u_n$ VỚI PHÂN THỨC HỮU TỈ",
      "mascotMode": "think",
      "mascotTip": "Lập hiệu u_{n+1} - u_n. Chú ý quy đồng mẫu số và rút gọn cẩn thận!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Xét Tính Đơn Điệu</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-blue-200 mb-2\">Xét tính tăng, giảm của dãy số</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Dãy số $(u_n)$ với $u_n = \\frac{2n + 1}{n + 3}$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Dãy số tăng</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Dãy số giảm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Dãy số không tăng không giảm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Dãy số hằng</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Xét tính tăng, giảm của dãy số u n với công thức u n bằng phân thức hai n cộng một chia cho n cộng ba. Các em có mười lăm giây để lập hiệu và kết luận.",
      "startTime": 81.02,
      "endTime": 93.82,
      "duration": 12.79
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: DÃY SỐ TĂNG VÌ HIỆU $u_{n+1} - u_n = \\frac{5}{(n+4)(n+3)} > 0$ (CHỌN A)",
      "mascotMode": "cheer",
      "mascotTip": "Hiệu luôn dương với mọi n thuộc N*. Do đó (u_n) là dãy số tăng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-blue-300\">Xét hiệu $u_{n+1} - u_n$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có $u_{n+1} = \\frac{2(n+1) + 1}{(n+1) + 3} = \\frac{2n + 3}{n + 4}$.</p>\n      <p class=\"text-slate-200\">• Lập hiệu $u_{n+1} - u_n$:</p>\n      $$u_{n+1} - u_n = \\frac{2n + 3}{n + 4} - \\frac{2n + 1}{n + 3} = \\frac{(2n+3)(n+3) - (2n+1)(n+4)}{(n+4)(n+3)}$$\n      $$= \\frac{(2n^2 + 9n + 9) - (2n^2 + 9n + 4)}{(n+4)(n+3)} = \\frac{5}{(n+4)(n+3)}$$\n      <p class=\"text-slate-200\">• Với mọi $n \\in \\mathbb{N}^*$, ta có $n+4 > 0$ và $n+3 > 0 \\implies \\frac{5}{(n+4)(n+3)} > 0$.</p>\n      <div class=\"p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2\">\n        👉 $u_{n+1} > u_n, \\forall n \\in \\mathbb{N}^* \\implies$ <b>Dãy số $(u_n)$ là dãy số tăng</b>. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Chúng ta cùng lập hiệu u n cộng một trừ u n: Số hạng u n cộng một bằng hai lần mở ngoặc n cộng một đóng ngoặc cộng một chia cho n cộng một cộng ba, rút gọn được hai n cộng ba chia cho n cộng bốn. Trừ đi u n là hai n cộng một chia cho n cộng ba. Quy đồng mẫu số chung, tử số trở thành: hai n cộng ba nhân n cộng ba, trừ đi hai n cộng một nhân n cộng bốn. Khai triển rút gọn, tử số còn lại đúng số dương năm. Mẫu số là tích của hai số dương n cộng bốn và n cộng ba. Vì năm chia cho tích này luôn lớn hơn không với mọi n thuộc N sao, nên dãy số là dãy số tăng. Đáp án chọn là A.",
      "startTime": 93.82,
      "endTime": 141.41,
      "duration": 47.59
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: XÉT TÍNH TĂNG GIẢM BẰNG TỈ SỐ",
      "subtitle": "DẠNG 2 • DÃY SỐ CHỨA LŨY THỪA VÀ GIAI THỪA $u_n = \\frac{3^n}{n!}$",
      "mascotMode": "think",
      "mascotTip": "Tất cả u_n > 0. Lập tỉ số u_{n+1} / u_n = [3^{n+1}/(n+1)!] * [n!/3^n] = 3/(n+1)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Xét Tỉ Số</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-indigo-200 mb-2\">Dãy số chứa giai thừa $u_n = \\frac{3^n}{n!}$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Khẳng định nào sau đây là đúng về dãy số $u_n = \\frac{3^n}{n!}$?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Dãy số tăng với mọi $n$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Dãy số giảm kể từ số hạng thứ 3 ($n \\ge 3$)</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Dãy số không tăng không giảm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Dãy số giảm với mọi $n$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Xét tính tăng, giảm của dãy số u n với số hạng tổng quát u n bằng ba mũ n chia cho n giai thừa. Các em có ba mươi giây để sử dụng phương pháp xét tỉ số.",
      "startTime": 141.41,
      "endTime": 154.46,
      "duration": 13.06
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: GIẢM KỂ TỪ $n \\ge 3$ VÌ $\\frac{u_{n+1}}{u_n} = \\frac{3}{n+1} < 1$ (CHỌN B)",
      "mascotMode": "celebrate",
      "mascotTip": "u_1 = 3, u_2 = 4.5, u_3 = 4.5, u_4 = 3.375... Kể từ n >= 3 dãy số giảm rõ rệt!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-indigo-300\">Rút gọn tỉ số $\\frac{u_{n+1}}{u_n}$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta thấy $u_n = \\frac{3^n}{n!} > 0, \\forall n \\in \\mathbb{N}^*$. Lập tỉ số:</p>\n      $$\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{(n+1)!} \\cdot \\frac{n!}{3^n} = \\frac{3^{n+1}}{3^n} \\cdot \\frac{n!}{(n+1)n!} = \\frac{3}{n+1}$$\n      <p class=\"text-slate-200\">• So sánh tỉ số với 1:</p>\n      $$\\frac{3}{n+1} < 1 \\iff n + 1 > 3 \\iff n > 2 \\iff n \\ge 3$$\n      <div class=\"p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2\">\n        👉 Với mọi $n \\ge 3$, ta có $\\frac{u_{n+1}}{u_n} < 1 \\implies u_{n+1} < u_n$. <br/>\n        👉 <b>Dãy số giảm kể từ số hạng thứ 3</b>. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Vì u n luôn dương với mọi n thuộc N sao, ta lập tỉ số u n cộng một chia cho u n: u n cộng một bằng ba mũ n cộng một chia cho mở ngoặc n cộng một đóng ngoặc giai thừa. Chia cho u n tức là nhân với nghịch đảo: nhân n giai thừa chia cho ba mũ n. Rút gọn ba mũ n cộng một với ba mũ n còn ba; rút gọn n giai thừa với n cộng một giai thừa thì dưới mẫu còn lại n cộng một. Như vậy tỉ số bằng ba chia cho n cộng một. Với n lớn hơn hoặc bằng ba thì n cộng một lớn hơn hoặc bằng bốn, do đó ba chia cho n cộng một nhỏ hơn một, suy ra u n cộng một nhỏ hơn u n. Vậy kể từ số hạng thứ ba trở đi, dãy số là dãy số giảm. Đáp án chính xác là B.",
      "startTime": 154.46,
      "endTime": 204.14,
      "duration": 49.68
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: DÃY SỐ ĐAN DẤU $u_n = (-1)^n \\cdot n$",
      "subtitle": "DẠNG 3 • NHẬN DIỆN DÃY SỐ KHÔNG TĂNG, KHÔNG GIẢM",
      "mascotMode": "think",
      "mascotTip": "Tính vài số hạng đầu: u_1 = -1, u_2 = 2, u_3 = -3, u_4 = 4... Số âm rồi số dương đan xen!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Dãy Đan Dấu</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Tính đơn điệu của $u_n = (-1)^n \\cdot n$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Khẳng định nào sau đây là đúng về dãy số $u_n = (-1)^n \\cdot n$?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Là dãy số tăng</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Là dãy số giảm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Là dãy số không tăng, không giảm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Dãy số hằng</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Cho dãy số u n có số hạng tổng quát u n bằng trừ một tất cả mũ n nhân n. Dãy số này có tính chất đơn điệu như thế nào? Các em có mười lăm giây để suy luận.",
      "startTime": 204.14,
      "endTime": 216.84,
      "duration": 12.7
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: DÃY SỐ KHÔNG TĂNG, KHÔNG GIẢM (CHỌN ĐÁP ÁN C)",
      "mascotMode": "explain",
      "mascotTip": "u_1 = -1 < u_2 = 2 (tăng), nhưng u_2 = 2 > u_3 = -3 (giảm) -> Không tăng không giảm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Liệt kê các số hạng đầu tiên</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Khai triển các số hạng đầu:</p>\n      $$u_1 = (-1)^1 \\cdot 1 = -1$$\n      $$u_2 = (-1)^2 \\cdot 2 = 2$$\n      $$u_3 = (-1)^3 \\cdot 3 = -3$$\n      $$u_4 = (-1)^4 \\cdot 4 = 4$$\n      <p class=\"text-slate-200\">• So sánh liên tiếp:</p>\n      $$u_1 < u_2 \\;\\text{(tăng)}, \\quad u_2 > u_3 \\;\\text{(giảm)}, \\quad u_3 < u_4 \\;\\text{(tăng)}$$\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 Dãy số vừa tăng vừa giảm luân phiên nên <b>không tăng, không giảm</b>. <br/>\n        👉 <b>Đáp án chọn: C</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta hãy viết ra bốn số hạng đầu tiên của dãy số: u một bằng trừ một mũ một nhân một bằng trừ một. u hai bằng trừ một mũ hai nhân hai bằng hai. u ba bằng trừ một mũ ba nhân ba bằng trừ ba. u bốn bằng trừ một mũ bốn nhân bốn bằng bốn. Ta thấy: từ u một lên u hai là tăng vì trừ một nhỏ hơn hai. Nhưng từ u hai sang u ba lại là giảm vì hai lớn hơn trừ ba. Do các số hạng luân phiên tăng giảm và đan dấu âm dương nên dãy số này là dãy số không tăng và không giảm. Đáp án chính xác là C.",
      "startTime": 216.84,
      "endTime": 254.95,
      "duration": 38.11
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: TÌM THAM SỐ $m$ ĐỂ DÃY SỐ TĂNG",
      "subtitle": "DẠNG 4 • BÀI TOÁN PHÂN HÓA VẬN DỤNG CHỨA THAM SỐ $m$",
      "mascotMode": "think",
      "mascotTip": "Lập hiệu u_{n+1} - u_n. Cho tử số > 0 với mọi n để dãy tăng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Chứa Tham Số $m$</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Tìm $m$ để $(u_n)$ là dãy số tăng</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tìm tất cả các giá trị của tham số $m$ để dãy số $u_n = \\frac{mn + 1}{n + 2}$ là một dãy số tăng:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $m > \\frac{1}{2}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $m < \\frac{1}{2}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $m \\ge \\frac{1}{2}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $m > 1$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn là bài toán phân hóa vận dụng có chứa tham số: Tìm tất cả các giá trị của tham số m để dãy số u n với công thức u n bằng phân thức m n cộng một chia cho n cộng hai là một dãy số tăng. Các em có ba mươi giây để tìm điều kiện của m.",
      "startTime": 254.95,
      "endTime": 272.09,
      "duration": 17.14
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $2m - 1 > 0 \\iff m > \\frac{1}{2}$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "celebrate",
      "mascotTip": "Hiệu u_{n+1} - u_n = (2m - 1) / [(n+3)(n+2)]. Dãy tăng khi và chỉ khi 2m - 1 > 0!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Quy đồng và tìm dấu của tử thức</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Lập hiệu $u_{n+1} - u_n$:</p>\n      $$u_{n+1} - u_n = \\frac{m(n+1) + 1}{n + 3} - \\frac{mn + 1}{n + 2} = \\frac{(mn + m + 1)(n + 2) - (mn + 1)(n + 3)}{(n + 3)(n + 2)}$$\n      $$= \\frac{(mn^2 + 2mn + mn + 2m + n + 2) - (mn^2 + 3mn + n + 3)}{(n + 3)(n + 2)} = \\frac{2m - 1}{(n + 3)(n + 2)}$$\n      <p class=\"text-slate-200\">• Vì $(n + 3)(n + 2) > 0, \\forall n \\in \\mathbb{N}^*$, dãy số là dãy số tăng khi và chỉ khi:</p>\n      <div class=\"text-center font-bold text-cyan-300 text-sm py-1\">\n        $$2m - 1 > 0 \\iff m > \\frac{1}{2}$$\n      </div>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Đáp án chọn: A ($m > \\frac{1}{2}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Ta lập hiệu u n cộng một trừ u n: u n cộng một bằng m nhân mở ngoặc n cộng một đóng ngoặc cộng một chia cho n cộng một cộng hai, tức m n cộng m cộng một chia cho n cộng ba. Trừ đi u n là m n cộng một chia cho n cộng hai. Quy đồng mẫu số, tử số là: mở ngoặc m n cộng m cộng một đóng ngoặc nhân mở ngoặc n cộng hai đóng ngoặc, trừ đi mở ngoặc m n cộng một đóng ngoặc nhân mở ngoặc n cộng ba đóng ngoặc. Khai triển và triệt tiêu các hạng tử chứa n, tử số còn lại đúng hai m trừ một. Mẫu số n cộng ba nhân n cộng hai luôn dương với mọi n thuộc N sao. Do đó, dãy số là dãy tăng khi và chỉ khi tử số hai m trừ một lớn hơn hẳn không, tương đương m lớn hơn một phần hai. Đáp án chính xác là A.",
      "startTime": 272.09,
      "endTime": 337.39,
      "duration": 65.3
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ TÍNH ĐƠN ĐIỆU CỦA DÃY SỐ",
      "subtitle": "LỖI LẤY DẤU BẰNG VÀ LỖI ÁP DỤNG SAI PHƯƠNG PHÁP TỈ SỐ",
      "mascotMode": "explain",
      "mascotTip": "Dãy tăng là u_{n+1} > u_n (dấu > nghiêm ngặt, không có dấu =). Chỉ dùng tỉ số khi u_n > 0!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Bẫy Thi Điển Hình Về Dãy Tăng / Giảm</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Nhầm lẫn dấu bằng $\\ge$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          • Dãy tăng: $u_{n+1} > u_n$ (dấu $>$ tuyệt đối).<br/>\n          • Nếu $u_{n+1} \\ge u_n$ thì chỉ là dãy <i>không giảm</i>.<br/>\n          👉 Chọn $m \\ge \\frac{1}{2}$ thay vì $m > \\frac{1}{2}$ là mất điểm đáng tiếc!\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Dùng tỉ số khi $u_n < 0$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Phương pháp xét tỉ số $\\frac{u_{n+1}}{u_n} > 1$ CHỈ ĐƯỢC DÙNG khi $u_n > 0, \\forall n$.<br/>\n          Nếu $u_n < 0$, bất đẳng thức đảo chiều dẫn đến kết luận sai ngược 180 độ!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý hai lỗi bẫy thi rất nguy hiểm: Lỗi thứ nhất là lấy nhầm dấu lớn hơn hoặc bằng. Theo định nghĩa sách giáo khoa Kết nối tri thức, dãy số tăng yêu cầu u n cộng một phải lớn hơn hẳn u n, không có dấu bằng. Nếu có dấu bằng thì đó là dãy không giảm chứ không phải dãy tăng. Vì vậy ở ví dụ bốn, điều kiện là m lớn hơn một phần hai chứ không lấy dấu bằng. Lỗi thứ hai là vội vàng dùng phương pháp xét tỉ số khi chưa kiểm tra các số hạng có dương hay không. Nếu dãy số có số hạng âm thì việc so sánh tỉ số với một sẽ dẫn đến kết luận hoàn toàn sai lệch.",
      "startTime": 337.39,
      "endTime": 374.88,
      "duration": 37.49
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "LÀM CHỦ PHƯƠNG PHÁP XÉT ĐƠN ĐIỆU ĐỂ BƯỚC SANG MỤC 3: DÃY BỊ CHẶN",
      "mascotMode": "celebrate",
      "mascotTip": "Ghi nhớ quy tắc xét hiệu và xét tỉ số! Sẵn sàng bước sang Mục 3 để tìm hiểu Dãy số bị chặn!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl\">🎯🚀</div>\n    <h3 class=\"text-xl font-black text-blue-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 2!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã thành thạo cả 2 kỹ thuật xét hiệu $u_{n+1} - u_n$ và xét tỉ số $\\frac{u_{n+1}}{u_n}$. Hãy tự tin chuyển sang Mục 3 để chinh phục khái niệm Dãy số bị chặn!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40\">✔ 4 Ví dụ hoàn thành</span>\n      <span class=\"px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40\">✔ Bài toán tham số $m$</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 3</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai. Chúng ta đã làm chủ hai phương pháp xét tính tăng giảm cùng bốn ví dụ tiêu biểu từ cơ bản đến nâng cao có chứa tham số m. Ngay bây giờ, mời các em chuyển sang Mục ba để tìm hiểu về một tính chất rất quan trọng khác của dãy số: Tính bị chặn.",
      "startTime": 374.88,
      "endTime": 392.04,
      "duration": 17.16
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai5_muc2 = window.G11_CHAPTER2_DATA.g11_bai5_muc2;

  window.G11_CHAPTER2_DATA.g11_bai5_muc3 = {
  "lessonId": "toan11_bai5",
  "lessonTitle": "Bài 5: Dãy số",
  "sectionId": "g11_bai5_muc3",
  "sectionTitle": "Mục 3: Dãy số bị chặn & Nhận biết tính bị chặn trên, bị chặn dưới",
  "audio": "/audio/g11_bai5_muc3.mp3",
  "audioSrc": "./audio/g11_bai5_muc3.mp3",
  "audio_src": "./audio/g11_bai5_muc3.mp3",
  "title": "Mục 3: Dãy số bị chặn & Nhận biết tính bị chặn trên, bị chặn dưới",
  "owl_tip": "Dãy số bị chặn khi vừa bị chặn trên vừa bị chặn dưới: tồn tại m, M sao cho m <= u_n <= M với mọi n thuộc N*!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA DÃY SỐ BỊ CHẶN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. KỸ THUẬT CHỨNG MINH DÃY SỐ BỊ CHẶN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ DÃY SỐ BỊ CHẶN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT TOÀN BỘ BÀI 5 & CHUYỂN SANG BÀI 6: CẤP SỐ CỘNG",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 357.19,
  "formattedDuration": "05:57",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA DÃY SỐ BỊ CHẶN",
      "subtitle": "BÀI 5 • DÃY SỐ • MỤC 3: BỊ CHẶN TRÊN, BỊ CHẶN DƯỚI & BỊ CHẶN",
      "mascotMode": "pointer",
      "mascotTip": "Bị chặn trên: u_n <= M; Bị chặn dưới: u_n >= m; Bị chặn: m <= u_n <= M với mọi n!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định nghĩa cốt lõi</span>\n      <h3 class=\"text-xl font-black text-purple-200\">Dãy Số Bị Chặn Trên, Bị Chặn Dưới & Bị Chặn</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Khái niệm chuẩn mực theo SGK Toán 11 Kết Nối Tri Thức:</p>\n  </div>\n\n  <div class=\"grid grid-cols-3 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">1. Bị chặn trên</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Tồn tại số thực $M$ sao cho:\n        $$u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$$\n        Số $M$ gọi là một cận trên của dãy số.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">2. Bị chặn dưới</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Tồn tại số thực $m$ sao cho:\n        $$u_n \\ge m, \\quad \\forall n \\in \\mathbb{N}^*$$\n        Số $m$ gọi là một cận dưới của dãy số.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md\">\n      <h4 class=\"font-bold text-purple-300 text-sm mb-1\">3. Dãy số bị chặn</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Vừa bị chặn trên vừa bị chặn dưới:\n        $$m \\le u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$$\n        Tất cả các số hạng đều nằm trong đoạn $[m; M]$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục ba của Bài năm: Dãy số bị chặn. Đây là khái niệm bản lề để sau này chúng ta học về giới hạn của dãy số ở Chương năm. Một dãy số u n được gọi là bị chặn trên nếu tồn tại một số thực M sao cho mọi số hạng u n đều nhỏ hơn hoặc bằng M. Dãy số được gọi là bị chặn dưới nếu tồn tại số thực m sao cho mọi số hạng u n đều lớn hơn hoặc bằng m. Một dãy số vừa bị chặn trên vừa bị chặn dưới thì được gọi là dãy số bị chặn, tức là tồn tại hai số m và M sao cho m nhỏ hơn hoặc bằng u n, nhỏ hơn hoặc bằng M với mọi n thuộc N sao.",
      "startTime": 0.0,
      "endTime": 36.84,
      "duration": 36.84
    },
    {
      "sceneIndex": 2,
      "title": "2. KỸ THUẬT CHỨNG MINH DÃY SỐ BỊ CHẶN",
      "subtitle": "KỸ NĂNG TÁCH PHÂN THỨC & BẤT ĐẲNG THỨC CƠ BẢN",
      "mascotMode": "explain",
      "mascotTip": "Phân thức bậc 1 / bậc 1: Chia đa thức đưa về dạng A - B/(n+c) để thấy rõ miền chặn!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-purple-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-purple-300\">3 Kỹ Thuật Đánh Giá Bị Chặn Thường Dùng</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-purple-400 font-bold block mb-1\">1. Tách phần nguyên</span>\n        Với phân thức $\\frac{an+b}{cn+d}$:<br/>\n        $$u_n = A + \\frac{B}{cn+d}$$\n        Đánh giá khi $n \\ge 1$: $\\frac{B}{cn+d}$ nằm trong khoảng xác định.\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-pink-400 font-bold block mb-1\">2. Đánh giá lượng giác</span>\n        Dùng miền giá trị $[-1; 1]$:<br/>\n        $$-1 \\le \\sin(f(n)) \\le 1$$\n        $$-1 \\le \\cos(f(n)) \\le 1$$\n        Kết hợp chặn mẫu số.\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"text-amber-400 font-bold block mb-1\">3. Hằng đẳng thức</span>\n        Đưa về bình phương cộng số:<br/>\n        $$u_n = a(n - x_0)^2 + m \\ge m$$\n        Chặn dưới bởi $m$, khi $n \\to +\\infty$ dãy không bị chặn trên.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để chứng minh một dãy số bị chặn, ta thường sử dụng các kỹ thuật biến đổi đại số sau: Đối với phân thức bậc nhất trên bậc nhất, các em hãy chia tử số cho mẫu số để tách thành phần nguyên cộng với một phân thức có tử số là hằng số. Khi n thay đổi từ một đến dương vô cùng, ta sẽ dễ dàng đánh giá được giá trị nhỏ nhất và giá trị lớn nhất. Đối với dãy số lượng giác chứa sin hoặc cos, ta sử dụng tính chất sin và cos luôn nằm trong đoạn từ trừ một đến một. Đối với dãy số đa thức bậc hai trở lên, ta viết dưới dạng bình phương để tìm cận dưới.",
      "startTime": 36.84,
      "endTime": 69.94,
      "duration": 33.1
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: CHỨNG MINH DÃY PHÂN THỨC BỊ CHẶN",
      "subtitle": "DẠNG 1 • DÃY SỐ $u_n = \\frac{2n - 1}{n + 1}$",
      "mascotMode": "think",
      "mascotTip": "Tách 2n - 1 = 2(n + 1) - 3. Suy ra u_n = 2 - 3/(n+1). Đánh giá khi n >= 1!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Dãy Bị Chặn</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Xét tính bị chặn của dãy số $u_n = \\frac{2n - 1}{n + 1}$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Khẳng định nào sau đây là đúng về dãy số $u_n = \\frac{2n - 1}{n + 1}$?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Bị chặn vì $\\frac{1}{2} \\le u_n < 2, \\forall n$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Chỉ bị chặn dưới, không bị chặn trên</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Chỉ bị chặn trên, không bị chặn dưới</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Không bị chặn</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Xét tính bị chặn của dãy số u n có số hạng tổng quát u n bằng phân thức hai n trừ một chia cho n cộng một. Các em có mười lăm giây để tìm miền chặn của dãy số.",
      "startTime": 69.94,
      "endTime": 82.99,
      "duration": 13.06
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: DÃY SỐ BỊ CHẶN $\\frac{1}{2} \\le u_n < 2$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "u_n = 2 - 3/(n+1). Khi n = 1: u_1 = 1/2. Khi n tăng, 3/(n+1) -> 0 nên u_n < 2!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Tách phần nguyên và đánh giá hai đầu chặn</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Tách phần nguyên:</p>\n      $$u_n = \\frac{2(n + 1) - 3}{n + 1} = 2 - \\frac{3}{n + 1}$$\n      <p class=\"text-slate-200\">• Đánh giá cận dưới (với $n \\ge 1$):</p>\n      $$n \\ge 1 \\iff n + 1 \\ge 2 \\iff \\frac{3}{n + 1} \\le \\frac{3}{2} \\iff -\\frac{3}{n + 1} \\ge -\\frac{3}{2} \\iff u_n \\ge 2 - \\frac{3}{2} = \\frac{1}{2}$$\n      <p class=\"text-slate-200\">• Đánh giá cận trên (với $n \\ge 1$):</p>\n      $$n \\ge 1 \\implies \\frac{3}{n + 1} > 0 \\implies 2 - \\frac{3}{n + 1} < 2 \\iff u_n < 2$$\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 $\\frac{1}{2} \\le u_n < 2, \\forall n \\in \\mathbb{N}^* \\implies$ <b>Dãy số bị chặn</b>. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Chúng ta cùng biến đổi u n bằng cách tách phần nguyên: hai n trừ một viết thành hai nhân mở ngoặc n cộng một đóng ngoặc trừ ba. Chia cho n cộng một, ta được u n bằng hai trừ đi ba chia cho n cộng một. Vì n là số nguyên dương nên n lớn hơn hoặc bằng một, suy ra n cộng một lớn hơn hoặc bằng hai, dẫn đến ba chia cho n cộng một nhỏ hơn hoặc bằng ba phần hai. Do đó u n lớn hơn hoặc bằng hai trừ ba phần hai bằng một phần hai. Mặt khác, vì ba chia cho n cộng một luôn dương nên hai trừ đi một số dương phải luôn nhỏ hơn hai. Như vậy, một phần hai nhỏ hơn hoặc bằng u n nhỏ hơn hai với mọi n. Dãy số vừa bị chặn dưới bởi một phần hai, vừa bị chặn trên bởi hai, nên đây là một dãy số bị chặn. Đáp án chọn là A.",
      "startTime": 82.99,
      "endTime": 135.12,
      "duration": 52.13
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: DÃY SỐ CHỨA HÀM SỐ LƯỢNG GIÁC",
      "subtitle": "DẠNG 2 • DÃY SỐ $u_n = \\frac{\\sin n + \\cos n}{n^2 + 1}$",
      "mascotMode": "think",
      "mascotTip": "Biến đổi tử số: |sin n + cos n| = |căn(2) * sin(n + pi/4)| <= căn(2). Mẫu n^2 + 1 >= 2!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Dãy Lượng Giác</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-pink-200 mb-2\">Xét tính bị chặn của $u_n = \\frac{\\sin n + \\cos n}{n^2 + 1}$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Dãy số $(u_n)$ với $u_n = \\frac{\\sin n + \\cos n}{n^2 + 1}$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Bị chặn trên bởi $0$, không bị chặn dưới</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Dãy số bị chặn vì $|u_n| \\le \\frac{\\sqrt{2}}{2}, \\forall n$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Dãy số không bị chặn</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Chỉ bị chặn dưới, không bị chặn trên</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Xét tính bị chặn của dãy số u n bằng phân thức sin n cộng cos n chia cho n bình phương cộng một. Các em có ba mươi giây để đánh giá biểu thức lượng giác ở tử số.",
      "startTime": 135.12,
      "endTime": 147.82,
      "duration": 12.7
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: DÃY SỐ BỊ CHẶN $|u_n| \\le \\frac{\\sqrt{2}}{2}$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "|Tử| <= căn(2), Mẫu >= 2 => |u_n| <= căn(2)/2. Rất đẹp mắt và chặt chẽ!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-pink-300\">Đánh giá trị tuyệt đối tử số và mẫu số</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Đánh giá tử số:</p>\n      $$|\\sin n + \\cos n| = \\left|\\sqrt{2}\\sin\\left(n + \\frac{\\pi}{4}\\right)\\right| \\le \\sqrt{2}, \\quad \\forall n$$\n      <p class=\"text-slate-200\">• Đánh giá mẫu số:</p>\n      $$n \\ge 1 \\implies n^2 \\ge 1 \\implies n^2 + 1 \\ge 2 > 0$$\n      <p class=\"text-slate-200\">• Suy ra trị tuyệt đối của $u_n$:</p>\n      <div class=\"text-center font-bold text-pink-300 text-sm py-1\">\n        $$|u_n| = \\frac{|\\sin n + \\cos n|}{n^2 + 1} \\le \\frac{\\sqrt{2}}{2} \\iff -\\frac{\\sqrt{2}}{2} \\le u_n \\le \\frac{\\sqrt{2}}{2}, \\quad \\forall n \\in \\mathbb{N}^*$$\n      </div>\n      <div class=\"p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2\">\n        👉 <b>Kết luận: Dãy số $(u_n)$ là dãy số bị chặn</b>. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Lời giải chi tiết: Ở tử số, ta có công thức sin n cộng cos n bằng căn bậc hai của hai nhân sin của n cộng pi phần tư. Do giá trị của sin luôn nằm từ trừ một đến một nên giá trị tuyệt đối của tử số luôn nhỏ hơn hoặc bằng căn hai. Ở mẫu số, vì n là số nguyên dương lớn hơn hoặc bằng một, nên n bình cộng một luôn lớn hơn hoặc bằng một bình cộng một bằng hai. Do đó, giá trị tuyệt đối của u n bằng trị tuyệt đối của tử chia cho mẫu, nhỏ hơn hoặc bằng căn hai chia cho hai. Điều này có nghĩa là trừ căn hai chia hai nhỏ hơn hoặc bằng u n nhỏ hơn hoặc bằng căn hai chia hai với mọi n. Vậy dãy số là dãy số bị chặn. Đáp án chọn là B.",
      "startTime": 147.82,
      "endTime": 193.8,
      "duration": 45.98
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: DÃY ĐA THỨC BẬC HAI $u_n = 2n^2 + 3$",
      "subtitle": "DẠNG 3 • DÃY SỐ CHỈ BỊ CHẶN DƯỚI, KHÔNG BỊ CHẶN TRÊN",
      "mascotMode": "think",
      "mascotTip": "u_n = 2n^2 + 3 >= 2(1)^2 + 3 = 5 với mọi n >= 1. Khi n tăng vô hạn thì u_n tiến tới đâu?",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Dãy Đa Thức</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Tính bị chặn của $u_n = 2n^2 + 3$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Khẳng định nào sau đây là đúng về dãy số $u_n = 2n^2 + 3$?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Dãy số bị chặn</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Dãy số bị chặn trên bởi 5</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Dãy số bị chặn dưới bởi 5, không bị chặn trên</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Dãy số không bị chặn dưới</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Cho dãy số u n với số hạng tổng quát u n bằng hai n bình phương cộng ba. Khẳng định nào sau đây là đúng về tính bị chặn của dãy số này? Các em có mười lăm giây để trả lời.",
      "startTime": 193.8,
      "endTime": 208.03,
      "duration": 14.23
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: BỊ CHẶN DƯỚI BỞI 5, KHÔNG BỊ CHẶN TRÊN (CHỌN ĐÁP ÁN C)",
      "mascotMode": "explain",
      "mascotTip": "u_n >= 5 (chặn dưới). Khi n -> vô cùng thì u_n -> vô cùng nên không bị chặn trên!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Đánh giá cận dưới và tính vô hạn</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $n \\ge 1, \\forall n \\in \\mathbb{N}^*$ nên:</p>\n      $$n^2 \\ge 1 \\implies u_n = 2n^2 + 3 \\ge 2(1)^2 + 3 = 5, \\quad \\forall n \\in \\mathbb{N}^*$$\n      <p class=\"text-emerald-300 font-bold\">• Do đó, dãy số $(u_n)$ bị chặn dưới bởi số 5.</p>\n      <p class=\"text-slate-200\">• Khi $n$ tăng lớn tùy ý ($n \\to +\\infty$), $u_n \\to +\\infty$ nên không tồn tại số $M$ sao cho $u_n \\le M, \\forall n$. Dãy số không bị chặn trên.</p>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Kết luận:</b> Dãy số bị chặn dưới bởi 5, không bị chặn trên. <br/>\n        👉 <b>Đáp án chọn: C</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta thấy: vì n là số nguyên dương lớn hơn hoặc bằng một, nên n bình phương lớn hơn hoặc bằng một. Suy ra hai n bình phương cộng ba lớn hơn hoặc bằng hai nhân một cộng ba bằng năm với mọi n thuộc N sao. Như vậy dãy số bị chặn dưới bởi số năm. Khi n tăng lên vô hạn thì u n cũng tăng lên vô hạn, không có số thực M nào lớn hơn hoặc bằng mọi số hạng của dãy. Do đó dãy số không bị chặn trên. Đáp án chính xác là C.",
      "startTime": 208.03,
      "endTime": 241.54,
      "duration": 33.5
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ NỒNG ĐỘ MUỐI",
      "subtitle": "DẠNG 4 • MÔ HÌNH HÓA DÃY SỐ BỊ CHẶN TRONG HÓA HỌC & ĐỜI SỐNG",
      "mascotMode": "think",
      "mascotTip": "C_n = 0.5 * (1 - 0.96^n). Vì 0 < 0.96^n < 1 nên 0 < 1 - 0.96^n < 1!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Mô Hình Thực Tế</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Nồng độ muối $C_n = 0{,}5(1 - 0{,}96^n)$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Nồng độ muối sau $n$ phút trong bồn là $C_n = 0{,}5(1 - 0{,}96^n)$ (g/L). Dãy $(C_n)$ có tính chất:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Không bị chặn vì $n \\to +\\infty$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Bị chặn vì $0 < C_n < 0{,}5\\text{ g/L}, \\forall n$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Chỉ bị chặn dưới bởi 0, không bị chặn trên</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Bị chặn trên bởi 1 g/L, không bị chặn dưới</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn là bài toán thực tế trong sách giáo khoa Kết nối tri thức: Trong một bồn chứa dung dịch, nồng độ muối ký hiệu là C n đơn vị gam trên lít sau n phút pha trộn được mô hình bởi công thức: C n bằng không phẩy năm nhân mở ngoặc một trừ không phẩy chín mươi sáu mũ n đóng ngoặc. Khẳng định nào sau đây là đúng về tính bị chặn của dãy số nồng độ C n? Các em có ba mươi giây để suy luận.",
      "startTime": 241.54,
      "endTime": 265.78,
      "duration": 24.24
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: BỊ CHẶN VÌ $0 < C_n < 0{,}5\\text{ g/L}$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "Nồng độ muối không bao giờ vượt quá 0.5 g/L! Đây là nồng độ bão hòa tiệm cận!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Đánh giá cơ số lũy thừa $0 < q < 1$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $0 < 0{,}96 < 1$ nên với mọi $n \\in \\mathbb{N}^*$:</p>\n      $$0 < 0{,}96^n < 1$$\n      <p class=\"text-slate-200\">• Trừ cả hai vế cho 1:</p>\n      $$-1 < -0{,}96^n < 0 \\iff 0 < 1 - 0{,}96^n < 1$$\n      <p class=\"text-slate-200\">• Nhân với $0{,}5 > 0$:</p>\n      <div class=\"text-center font-bold text-emerald-300 text-sm py-1\">\n        $$0 < 0{,}5(1 - 0{,}96^n) < 0{,}5 \\iff 0 < C_n < 0{,}5 \\quad (\\forall n \\in \\mathbb{N}^*)$$\n      </div>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        👉 <b>Dãy $(C_n)$ bị chặn trong khoảng $(0; 0{,}5)$ gam/lít</b>. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Lời giải chi tiết: Vì không phẩy chín mươi sáu là số dương nhỏ hơn một, nên với mọi số nguyên dương n, không phẩy chín mươi sáu mũ n luôn nằm trong khoảng từ không đến một. Do đó một trừ không phẩy chín mươi sáu mũ n cũng luôn nằm trong khoảng từ không đến một. Nhân với không phẩy năm, ta được: không nhỏ hơn C n nhỏ hơn không phẩy năm với mọi n thuộc N sao. Như vậy dãy nồng độ C n là một dãy số bị chặn, bị chặn dưới bởi không và bị chặn trên bởi không phẩy năm gam trên lít. Đáp án chính xác là B.",
      "startTime": 265.78,
      "endTime": 301.01,
      "duration": 35.23
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ DÃY SỐ BỊ CHẶN",
      "subtitle": "PHÂN BIỆT RÕ: BỊ CHẶN TRÊN, BỊ CHẶN DƯỚI VÀ BỊ CHẶN",
      "mascotMode": "explain",
      "mascotTip": "Một dãy số được gọi là 'BỊ CHẶN' khi và chỉ khi nó VỪA bị chặn trên VỪA bị chặn dưới!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Lý Thuyết</span>\n      <h3 class=\"text-base font-bold text-rose-300\">Phân Biệt Rõ Khái Niệm Bị Chặn</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Sai lầm: Chặn một phía kết luận 'Bị chặn'</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Ví dụ dãy $u_n = n^2$: có $u_n \\ge 1$ nên <b>bị chặn dưới</b>.<br/>\n          Nhưng $u_n \\to +\\infty$ nên <b>không bị chặn trên</b>.<br/>\n          👉 Khẳng định \"Dãy $(u_n)$ bị chặn\" là <b>SAI HOÀN TOÀN</b>!\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-emerald-400\">\n        <h4 class=\"font-bold text-emerald-300 mb-1\">✔ Định nghĩa đúng: Hai đầu phải kẹp kín</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Dãy số $(u_n)$ được gọi là <b>bị chặn</b> $\\iff$ tồn tại cả $m$ và $M$ sao cho:<br/>\n          $$m \\le u_n \\le M, \\quad \\forall n \\in \\mathbb{N}^*$$\n          👉 Phải kiểm tra cả hai phía cận trên và cận dưới!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý một bẫy trắc nghiệm lý thuyết cực kỳ phổ biến: Đề bài hỏi dãy số có bị chặn hay không. Rất nhiều bạn thấy dãy số có chặn dưới là vội vàng kết luận dãy số bị chặn. Điều này là sai! Một dãy số chỉ được gọi là bị chặn khi nó thỏa mãn đồng thời cả hai điều kiện: vừa bị chặn trên, vừa bị chặn dưới. Nếu chỉ bị chặn một phía (chỉ chặn trên hoặc chỉ chặn dưới) thì ta phải nói rõ là bị chặn trên hoặc bị chặn dưới, chứ không được nói chung là bị chặn.",
      "startTime": 301.01,
      "endTime": 331.22,
      "duration": 30.22
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT TOÀN BỘ BÀI 5 & CHUYỂN SANG BÀI 6: CẤP SỐ CỘNG",
      "subtitle": "NẮM TRỌN 3 MỤC BÀI 5 • SẴN SÀNG CHINH PHỤC CẤP SỐ CỘNG",
      "mascotMode": "celebrate",
      "mascotTip": "Chúc mừng em hoàn thành trọn vẹn Bài 5 Dãy số! Chuyển ngay sang Bài 6 Cấp số cộng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl\">🎓⭐🎉</div>\n    <h3 class=\"text-xl font-black text-purple-200 mb-2\">Chúc Mừng Em Hoàn Thành Xuất Sắc Bài 5!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã nắm trọn vẹn 3 trụ cột của Dãy số: Khái niệm & cách cho dãy, Tính tăng / giảm, và Tính bị chặn với 12 ví dụ thực chiến. Giờ là lúc bước sang Bài 6: Cấp số cộng!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 12 Ví dụ tiêu biểu Bài 5</span>\n      <span class=\"px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40\">✔ Đơn điệu & Bị chặn vững vàng</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🔥 Chuyển sang Bài 6: Cấp số cộng</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em học sinh thân mến đã hoàn thành trọn vẹn toàn bộ ba mục bài giảng của Bài năm: Dãy số. Chúng ta đã làm chủ định nghĩa, ba cách xác định dãy số, phương pháp xét tính tăng giảm và phương pháp đánh giá tính bị chặn. Nền tảng vững chắc này sẽ là hành trang tuyệt vời để các em bước sang Bài sáu: Cấp số cộng, một dạng dãy số có quy luật cộng dồn vô cùng đặc biệt. Hẹn gặp lại các em ở Bài sáu!",
      "startTime": 331.22,
      "endTime": 357.19,
      "duration": 25.97
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai5_muc3 = window.G11_CHAPTER2_DATA.g11_bai5_muc3;

  window.G11_CHAPTER2_DATA.g11_bai6_muc1 = {
  "lessonId": "toan11_bai6",
  "lessonTitle": "Bài 6: Cấp số cộng",
  "sectionId": "g11_bai6_muc1",
  "sectionTitle": "Mục 1: Định nghĩa cấp số cộng & Công sai d",
  "audio": "/audio/g11_bai6_muc1.mp3",
  "audioSrc": "./audio/g11_bai6_muc1.mp3",
  "audio_src": "./audio/g11_bai6_muc1.mp3",
  "title": "Mục 1: Định nghĩa cấp số cộng & Công sai d",
  "owl_tip": "Cấp số cộng là dãy số mà u_{n+1} = u_n + d với mọi n >= 1. Công sai d = u_{n+1} - u_n không đổi!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA CẤP SỐ CỘNG VÀ CÔNG SAI",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. TÍNH CHẤT TRUNG BÌNH CỘNG CỦA 3 SỐ HẠNG LIÊN TIẾP",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ CẤP SỐ CỘNG",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 324.96,
  "formattedDuration": "05:24",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA CẤP SỐ CỘNG VÀ CÔNG SAI",
      "subtitle": "BÀI 6 • CẤP SỐ CỘNG • MỤC 1: QUY LUẬT CỘNG DỒN HẰNG SỐ",
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc vàng: Mỗi số hạng (từ thứ hai) bằng số hạng đứng ngay trước nó CỘNG với một số không đổi d!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định nghĩa cốt lõi</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Định Nghĩa Cấp Số Cộng & Công Sai $d$</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Dãy số có quy luật cộng dồn hằng số với mọi $n \\in \\mathbb{N}^*$:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">1. Định nghĩa chuẩn</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Dãy số $(u_n)$ là cấp số cộng khi và chỉ khi:\n        $$u_{n+1} = u_n + d, \\quad \\forall n \\ge 1$$\n        • $d$: <b>công sai</b> ($d = u_{n+1} - u_n$).<br/>\n        • $u_1$: số hạng đầu tiên.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">2. Dấu của công sai $d$</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $d > 0 \\implies$ Cấp số cộng là dãy số <b>TĂNG</b>.<br/>\n        • $d < 0 \\implies$ Cấp số cộng là dãy số <b>GIẢM</b>.<br/>\n        • $d = 0 \\implies$ Cấp số cộng là dãy số <b>HẰNG</b> ($u, u, u, \\dots$).\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài sáu: Cấp số cộng. Ở Mục một, chúng ta cùng khám phá định nghĩa cấp số cộng và tính chất của ba số hạng liên tiếp. Trong toán học, một dãy số vô hạn hoặc hữu hạn được gọi là cấp số cộng nếu kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó cộng với một số không đổi d. Số d được gọi là công sai của cấp số cộng. Nếu công sai d bằng không, cấp số cộng là một dãy số không đổi. Nếu d lớn hơn không, cấp số cộng là dãy tăng; nếu d nhỏ hơn không, cấp số cộng là dãy giảm.",
      "startTime": 0.0,
      "endTime": 35.14,
      "duration": 35.14
    },
    {
      "sceneIndex": 2,
      "title": "2. TÍNH CHẤT TRUNG BÌNH CỘNG CỦA 3 SỐ HẠNG LIÊN TIẾP",
      "subtitle": "MỐI QUAN HỆ ĐẶC BIỆT GIỮA CÁC SỐ HẠNG KỀ NHAU",
      "mascotMode": "explain",
      "mascotTip": "Tính chất vàng: Số ở giữa bằng trung bình cộng của 2 số hai bên: u_k = (u_{k-1} + u_{k+1}) / 2!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-teal-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-teal-300\">Tính Chất Cốt Lõi: Trung Bình Cộng</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">Với mọi số hạng thứ $k \\ge 2$ trong cấp số cộng $(u_n)$:</p>\n      <div class=\"text-center font-bold text-teal-300 text-base py-1\">\n        $$u_k = \\frac{u_{k-1} + u_{k+1}}{2} \\iff u_{k-1} + u_{k+1} = 2u_k$$\n      </div>\n      <p class=\"text-slate-300\">👉 <b>Quy tắc 3 số liên tiếp:</b> Ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$a + c = 2b \\iff b = \\frac{a + c}{2}$$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Cấp số cộng có một tính chất hình học vô cùng đẹp mắt: Trong một cấp số cộng, mỗi số hạng kể từ số hạng thứ hai đều là trung bình cộng của hai số hạng kề bên nó. Tức là u k bằng u k trừ một cộng u k cộng một, tất cả chia cho hai; hay viết dạng tương đương: u k trừ một cộng u k cộng một bằng hai lần u k. Tính chất này được dùng liên tục để giải các bài toán tìm tham số x khi ba số lập thành một cấp số cộng.",
      "startTime": 35.14,
      "endTime": 59.66,
      "duration": 24.53
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: NHẬN DIỆN CẤP SỐ CỘNG VÀ TÌM CÔNG SAI",
      "subtitle": "DẠNG 1 • KIỂM TRA HIỆU $u_{n+1} - u_n = d$",
      "mascotMode": "think",
      "mascotTip": "Tính u_{n+1} - u_n. Nếu kết quả là hằng số không đổi d thì dãy là cấp số cộng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Nhận Diện</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Nhận diện cấp số cộng</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Khẳng định nào sau đây là đúng về dãy số $u_n = 3n - 2$?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Là CSC với $u_1 = 1, d = 3$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Là CSC với $u_1 = 1, d = -2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Là CSC với $u_1 = 3, d = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Không phải là cấp số cộng</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Trong các dãy số sau, dãy số nào là một cấp số cộng? Tìm số hạng đầu u một và công sai d của cấp số cộng đó: Dãy số u n bằng ba n trừ hai; hay dãy số v n bằng hai mũ n. Các em có mười lăm giây để suy luận.",
      "startTime": 59.66,
      "endTime": 76.63,
      "duration": 16.97
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: LÀ CSC VỚI $u_1 = 1, d = 3$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "u_{n+1} - u_n = [3(n+1)-2] - (3n-2) = 3 (hằng số). u_1 = 3(1)-2 = 1. Chuẩn xác!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Kiểm tra hiệu hai số hạng liên tiếp</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có $u_1 = 3(1) - 2 = 1$.</p>\n      <p class=\"text-slate-200\">• Xét hiệu với mọi $n \\ge 1$:</p>\n      $$u_{n+1} - u_n = [3(n + 1) - 2] - (3n - 2) = (3n + 1) - (3n - 2) = 3 \\;\\text{(hằng số)}$$\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        👉 $(u_n)$ là cấp số cộng có số hạng đầu $u_1 = 1$ và công sai $d = 3$. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta xét hiệu u n cộng một trừ u n: u n cộng một bằng ba nhân mở ngoặc n cộng một đóng ngoặc trừ hai, bằng ba n cộng một. Lấy u n cộng một trừ u n, ta có ba n cộng một trừ đi mở ngoặc ba n trừ hai đóng ngoặc, rút gọn được đúng ba, là một hằng số không đổi với mọi n. Do đó dãy số u n là một cấp số cộng với công sai d bằng ba. Số hạng đầu tiên u một bằng ba nhân một trừ hai bằng một. Đáp án chính xác là A.",
      "startTime": 76.63,
      "endTime": 109.32,
      "duration": 32.69
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH CÔNG SAI VÀ CÁC SỐ HẠNG TIẾP THEO",
      "subtitle": "DẠNG 2 • TÌM $d = u_2 - u_1$ VÀ TÍNH TIẾP $u_3, u_4$",
      "mascotMode": "think",
      "mascotTip": "Công sai d = u_2 - u_1 = 2 - (-3) = 5. Cộng d liên tiếp để tìm u_3, u_4!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Tính Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-teal-200 mb-2\">Tính $d, u_3, u_4$ khi biết $u_1, u_2$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số cộng $(u_n)$ có $u_1 = -3$ và $u_2 = 2$. Giá trị của $d, u_3, u_4$ lần lượt là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $d = -1; u_3 = 1; u_4 = 0$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $d = 5; u_3 = 7; u_4 = 12$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $d = 5; u_3 = 8; u_4 = 13$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $d = -5; u_3 = -3; u_4 = -8$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Cho cấp số cộng u n có số hạng đầu u một bằng trừ ba và số hạng thứ hai u hai bằng hai. Hãy tính công sai d và hai số hạng tiếp theo là u ba và u bốn. Các em có ba mươi giây để tính toán.",
      "startTime": 109.32,
      "endTime": 124.3,
      "duration": 14.98
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $d = 5, u_3 = 7, u_4 = 12$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "d = 2 - (-3) = 5. u_3 = 2 + 5 = 7. u_4 = 7 + 5 = 12. Rất đơn giản và trực quan!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-teal-300\">Cộng dồn công sai $d$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Tính công sai $d$:</p>\n      <div class=\"text-center font-bold text-teal-300 text-sm py-1\">\n        $$d = u_2 - u_1 = 2 - (-3) = 5$$\n      </div>\n      <p class=\"text-slate-200\">• Tính các số hạng tiếp theo:</p>\n      $$u_3 = u_2 + d = 2 + 5 = 7$$\n      $$u_4 = u_3 + d = 7 + 5 = 12$$\n      <div class=\"p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($d = 5; u_3 = 7; u_4 = 12$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Lời giải rất trực quan: Theo định nghĩa cấp số cộng, công sai d bằng số hạng sau trừ số hạng trước: d bằng u hai trừ u một, bằng hai trừ đi trừ ba, hai cộng ba bằng năm. Từ đó ta tính các số hạng tiếp theo bằng cách cộng thêm công sai d: u ba bằng u hai cộng d, bằng hai cộng năm bằng bảy. u bốn bằng u ba cộng d, bằng bảy cộng năm bằng mười hai. Đáp án chính xác là B.",
      "startTime": 124.3,
      "endTime": 152.69,
      "duration": 28.39
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM $x$ ĐỂ 3 SỐ LẬP THÀNH CẤP SỐ CỘNG",
      "subtitle": "DẠNG 3 • ÁP DỤNG HỆ THỨC $a + c = 2b$",
      "mascotMode": "think",
      "mascotTip": "Tính chất: (2x - 1) + (4x + 3) = 2(x + 2). Giải phương trình bậc nhất tìm x!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Tìm Ẩn Số</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Tìm $x$ để ba số lập thành CSC</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tìm $x$ để ba số $2x - 1, \\; x + 2, \\; 4x + 3$ theo thứ tự lập thành một cấp số cộng:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $x = \\frac{1}{2}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $x = 1$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $x = -\\frac{1}{2}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $x = 2$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Tìm giá trị của x để ba số: hai x trừ một, x cộng hai, và bốn x cộng ba theo thứ tự lập thành một cấp số cộng. Các em có mười lăm giây để thiết lập phương trình và tìm x.",
      "startTime": 152.69,
      "endTime": 165.96,
      "duration": 13.27
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $x = \\frac{1}{2}$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "explain",
      "mascotTip": "6x + 2 = 2x + 4 <=> 4x = 2 <=> x = 1/2. Thay lại: 0, 2.5, 5 đúng là CSC công sai 2.5!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Thiết lập phương trình trung bình cộng</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Áp dụng điều kiện: $u_1 + u_3 = 2u_2$:</p>\n      $$(2x - 1) + (4x + 3) = 2(x + 2)$$\n      <p class=\"text-slate-200\">• Khai triển và giải phương trình bậc nhất:</p>\n      $$6x + 2 = 2x + 4 \\iff 4x = 2 \\iff x = \\frac{1}{2}$$\n      <p class=\"text-emerald-300 font-mono\">• Thử lại: với $x = \\frac{1}{2} \\implies$ 3 số là: $0; \\; 2{,}5; \\; 5$ (CSC có $d = 2{,}5$).</p>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Đáp án chọn: A ($x = \\frac{1}{2}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Áp dụng tính chất ba số liên tiếp của cấp số cộng: tổng số đầu và số cuối bằng hai lần số ở giữa. Ta có: mở ngoặc hai x trừ một đóng ngoặc cộng mở ngoặc bốn x cộng ba đóng ngoặc, bằng hai lần mở ngoặc x cộng hai đóng ngoặc. Rút gọn vế trái: hai x cộng bốn x bằng sáu x; trừ một cộng ba bằng hai. Vế phải khai triển: hai x cộng bốn. Chuyển vế ta được: sáu x trừ hai x bằng bốn x; bốn trừ hai bằng hai. Suy ra x bằng hai phần tư, tức x bằng một phần hai. Thử lại: với x bằng một phần hai, ba số là không, hai phẩy năm, và năm, đúng là một cấp số cộng với công sai hai phẩy năm. Đáp án chọn là A.",
      "startTime": 165.96,
      "endTime": 212.21,
      "duration": 46.25
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: 3 GÓC CỦA TAM GIÁC LẬP THÀNH CẤP SỐ CỘNG",
      "subtitle": "DẠNG 4 • ỨNG DỤNG HÌNH HỌC • TỔNG 3 GÓC BẰNG 180°",
      "mascotMode": "think",
      "mascotTip": "A + C = 2B. Mà A + B + C = 180° => 3B = 180° => B = 60°! Góc nhỏ nhất A = 30°!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Ứng Dụng Tam Giác</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">3 góc tam giác lập thành cấp số cộng</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho tam giác có 3 góc $A, B, C$ ($A \\le B \\le C$) lập thành một cấp số cộng. Biết góc nhỏ nhất $A = 30^\\circ$. Số đo góc lớn nhất $C$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $C = 75^\\circ$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $C = 80^\\circ$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $C = 90^\\circ$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $C = 100^\\circ$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn: Ba góc của một tam giác lập thành một cấp số cộng. Biết rằng góc nhỏ nhất của tam giác có số đo bằng ba mươi độ. Tìm số đo của góc lớn nhất trong tam giác đó. Các em có ba mươi giây để tính toán.",
      "startTime": 212.21,
      "endTime": 227.95,
      "duration": 15.74
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ GÓC LỚN NHẤT $C = 90^\\circ$ (CHỌN ĐÁP ÁN C)",
      "mascotMode": "celebrate",
      "mascotTip": "Góc ở giữa B luôn bằng 60°. A = 30° => C = 180° - 30° - 60° = 90° (Tam giác vuông)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Kết hợp tính chất CSC và định lý tổng 3 góc</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $A, B, C$ lập thành CSC nên: $A + C = 2B$.</p>\n      <p class=\"text-slate-200\">• Tổng 3 góc trong tam giác: $A + B + C = 180^\\circ$:</p>\n      $$(A + C) + B = 180^\\circ \\iff 2B + B = 180^\\circ \\iff 3B = 180^\\circ \\iff B = 60^\\circ$$\n      <p class=\"text-slate-200\">• Với $A = 30^\\circ$, ta tìm góc lớn nhất $C$:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$C = 180^\\circ - (A + B) = 180^\\circ - (30^\\circ + 60^\\circ) = 90^\\circ$$\n      </div>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 Ba góc là: $30^\\circ, 60^\\circ, 90^\\circ$ (CSC có công sai $d = 30^\\circ$). <br/>\n        👉 <b>Đáp án chọn: C ($C = 90^\\circ$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Gọi ba góc theo thứ tự tăng dần là A, B, C. Vì ba góc lập thành cấp số cộng nên ta có: A cộng C bằng hai lần B. Mặt khác, tổng ba góc trong một tam giác luôn bằng một trăm tám mươi độ: A cộng B cộng C bằng một trăm tám mươi độ. Thay A cộng C bằng hai B vào, ta được: hai B cộng B bằng ba B bằng một trăm tám mươi độ, suy ra góc B bằng sáu mươi độ. Đây là một kết quả kinh điển: bất kỳ tam giác nào có ba góc lập thành cấp số cộng thì góc ở giữa luôn bằng sáu mươi độ. Đề bài cho góc nhỏ nhất A bằng ba mươi độ, vậy góc lớn nhất C bằng một trăm tám mươi độ trừ ba mươi độ trừ sáu mươi độ bằng chín mươi độ. Tam giác này là tam giác vuông. Đáp án chính xác là C.",
      "startTime": 227.95,
      "endTime": 273.48,
      "duration": 45.53
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ CẤP SỐ CỘNG",
      "subtitle": "NHẦM LẪN THỨ TỰ SỐ HẠNG VÀ CÔNG SAI ÂM",
      "mascotMode": "explain",
      "mascotTip": "Quy tắc: d = số sau - số trước! Nếu dãy giảm thì d < 0, đừng quên dấu âm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Lỗi Sai Nghiêm Trọng Cần Tránh</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Tính ngược công sai $d$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Công thức: $d = u_{n+1} - u_n$ (Sau $-$ Trước).<br/>\n          Nếu dãy số giảm: $10, 7, 4... \\implies d = 7 - 10 = -3$.<br/>\n          👉 Tuyệt đối không lấy $10 - 7 = 3$ làm sai dấu toàn bộ!\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Nhầm vị trí số ở giữa</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Ba số $x, y, z$ theo thứ tự lập thành CSC $\\implies x + z = 2y$ (số giữa nhân 2).<br/>\n          👉 Phải xác định đúng số nằm ở chính giữa!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý hai lỗi bẫy học sinh rất hay mắc: Thứ nhất là nhầm công sai d thành số trước trừ số sau. Công thức chuẩn luôn là: d bằng số đứng sau trừ số đứng trước, tức u hai trừ u một. Ví dụ nếu dãy là năm, ba, một thì công sai d bằng ba trừ năm bằng trừ hai chứ không phải dương hai. Thứ hai là khi đề bài nói ba số a, b, c lập thành cấp số cộng thì số ở giữa là b, nên a cộng c bằng hai b. Nếu các em viết nhầm thành a cộng b bằng hai c là bài toán sai hoàn toàn.",
      "startTime": 273.48,
      "endTime": 305.28,
      "duration": 31.8
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "NẮM VỮNG ĐỊNH NGHĨA ĐỂ CHUYỂN SANG MỤC 2: SỐ HẠNG TỔNG QUÁT",
      "mascotMode": "celebrate",
      "mascotTip": "Làm chủ định nghĩa và tính chất trung bình cộng! Chuyển sang Mục 2 để lập công thức u_n!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl\">🦉✨</div>\n    <h3 class=\"text-xl font-black text-emerald-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 1!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã nắm trọn định nghĩa cấp số cộng và tính chất trung bình cộng $a + c = 2b$. Hãy chuyển sang Mục 2 để làm chủ công thức Số hạng tổng quát $u_n = u_1 + (n - 1)d$!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 4 Ví dụ đã hoàn thành</span>\n      <span class=\"px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40\">✔ Tính chất $a + c = 2b$</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 2</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục một của Bài sáu. Chúng ta đã làm chủ định nghĩa cấp số cộng, công sai d và tính chất trung bình cộng tuyệt vời. Ngay bây giờ, thầy mời các em cùng chuyển sang Mục hai để khám phá công thức số hạng tổng quát u n, chìa khóa để tìm bất kỳ số hạng nào trong một cấp số cộng.",
      "startTime": 305.28,
      "endTime": 324.96,
      "duration": 19.68
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai6_muc1 = window.G11_CHAPTER2_DATA.g11_bai6_muc1;

  window.G11_CHAPTER2_DATA.g11_bai6_muc2 = {
  "lessonId": "toan11_bai6",
  "lessonTitle": "Bài 6: Cấp số cộng",
  "sectionId": "g11_bai6_muc2",
  "sectionTitle": "Mục 2: Số hạng tổng quát của cấp số cộng & Tính chất ba số hạng liên tiếp",
  "audio": "/audio/g11_bai6_muc2.mp3",
  "audioSrc": "./audio/g11_bai6_muc2.mp3",
  "audio_src": "./audio/g11_bai6_muc2.mp3",
  "title": "Mục 2: Số hạng tổng quát của cấp số cộng & Tính chất ba số hạng liên tiếp",
  "owl_tip": "Số hạng tổng quát u_n = u_1 + (n - 1)d. Tính chất 3 số hạng liên tiếp: u_{k-1} + u_{k+1} = 2*u_k!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ CỘNG",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. PHƯƠNG PHÁP GIẢI HỆ PHƯƠNG TRÌNH TÌM $u_1$ VÀ $d$",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ SỐ HẠNG TỔNG QUÁT",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 328.2,
  "formattedDuration": "05:28",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ CỘNG",
      "subtitle": "BÀI 6 • CẤP SỐ CỘNG • MỤC 2: CÔNG THỨC $u_n = u_1 + (n - 1)d$",
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc vàng: Để đi từ u_1 đến u_n ta cần cộng thêm đúng (n - 1) lần công sai d!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định lý trọng tâm</span>\n      <h3 class=\"text-xl font-black text-blue-200\">Công Thức Số Hạng Tổng Quát $u_n$</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Tính số hạng bất kỳ theo số hạng đầu $u_1$ và công sai $d$:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md\">\n      <h4 class=\"font-bold text-blue-300 text-sm mb-1\">1. Công thức số hạng tổng quát</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        $$u_n = u_1 + (n - 1)d, \\quad \\forall n \\ge 1$$\n        • $u_1$: số hạng đầu tiên.<br/>\n        • $d$: công sai.<br/>\n        • $n$: số thứ tự (chỉ số vị trí).\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md\">\n      <h4 class=\"font-bold text-indigo-300 text-sm mb-1\">2. Khoảng cách giữa 2 số hạng bất kỳ</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Với hai số hạng $u_m$ và $u_n$ bất kỳ ($m > n$):\n        $$u_m - u_n = (m - n)d \\iff u_m = u_n + (m - n)d$$\n        👉 <i>Cực kỳ hữu ích để giải nhanh các bài toán tìm $d$!</i>\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục hai: Số hạng tổng quát của cấp số cộng. Nếu biết số hạng đầu u một và công sai d, ta có thể tính ngay bất kỳ số hạng u n nào mà không cần tính lần lượt từng bước. Định lý nêu rõ: Nếu cấp số cộng u n có số hạng đầu u một và công sai d thì số hạng tổng quát u n được xác định bởi công thức: u n bằng u một cộng mở ngoặc n trừ một đóng ngoặc nhân d, với mọi n lớn hơn hoặc bằng hai. Hãy chú ý rằng hệ số trước d là n trừ một chứ không phải n, vì để đi từ số hạng thứ nhất đến số hạng thứ n, ta chỉ cần bước qua n trừ một khoảng cách d.",
      "startTime": 0.0,
      "endTime": 47.78,
      "duration": 47.78
    },
    {
      "sceneIndex": 2,
      "title": "2. PHƯƠNG PHÁP GIẢI HỆ PHƯƠNG TRÌNH TÌM $u_1$ VÀ $d$",
      "subtitle": "KỸ NĂNG CỐT LÕI: ĐƯA MỌI GIẢ THIẾT VỀ $u_1$ VÀ $d$",
      "mascotMode": "explain",
      "mascotTip": "Mọi phương trình cấp số cộng đều đưa về hệ bậc nhất 2 ẩn u_1 và d. Bấm máy Casio 580 giải hệ 2 ẩn!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-blue-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-blue-300\">Quy Trình Giải Hệ Phương Trình Cấp Số Cộng</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">Giả sử bài toán cho biết $u_p = A$ và $u_q = B$ ($p < q$):</p>\n      <div class=\"text-center font-bold text-blue-300 text-sm py-1\">\n        $$\\begin{cases} u_1 + (p - 1)d = A \\\\ u_1 + (q - 1)d = B \\end{cases} \\implies (q - p)d = B - A \\implies d = \\frac{B - A}{q - p}$$\n      </div>\n      <p class=\"text-slate-300\">👉 Thay $d$ ngược lại để tìm $u_1 = A - (p - 1)d$. Từ đó viết được công thức $u_n$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi gặp bài toán cho biết hai số hạng bất kỳ của cấp số cộng, ví dụ u ba và u tám, phương pháp chuẩn mực nhất là biểu diễn cả hai số hạng đó theo u một và d. Khi đó ta thu được một hệ phương trình bậc nhất hai ẩn u một và d. Bằng phương pháp cộng đại số hoặc bấm máy tính cầm tay, các em sẽ tìm được chính xác số hạng đầu u một và công sai d. Từ đó, ta có thể trả lời mọi câu hỏi về số hạng thứ n hoặc vị trí của một số hạng trong dãy.",
      "startTime": 47.78,
      "endTime": 73.01,
      "duration": 25.22
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG THỨ 20",
      "subtitle": "DẠNG 1 • ÁP DỤNG TRỰC TIẾP CÔNG THỨC $u_n = u_1 + (n - 1)d$",
      "mascotMode": "think",
      "mascotTip": "u_{20} = u_1 + 19d. Với u_1 = 4, d = -3. Chú ý tính toán dấu âm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Tính $u_{20}$</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-blue-200 mb-2\">Tìm số hạng thứ 20 của cấp số cộng</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = -3$. Số hạng $u_{20}$ bằng:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $u_{20} = -53$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $u_{20} = -56$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $u_{20} = 61$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $u_{20} = -50$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Cho cấp số cộng u n có số hạng đầu u một bằng bốn và công sai d bằng trừ ba. Hãy tìm số hạng thứ hai mươi, tức u hai mươi của cấp số cộng đó. Các em có mười lăm giây để tính toán.",
      "startTime": 73.01,
      "endTime": 87.79,
      "duration": 14.78
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $u_{20} = -53$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "u_{20} = 4 + 19(-3) = 4 - 57 = -53. Chúc mừng các em chọn A!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-blue-300\">Áp dụng công thức $u_n = u_1 + (n - 1)d$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Với $n = 20$:</p>\n      $$u_{20} = u_1 + (20 - 1)d = u_1 + 19d$$\n      <p class=\"text-slate-200\">• Thay $u_1 = 4$ và $d = -3$ vào:</p>\n      <div class=\"text-center font-bold text-blue-300 text-sm py-1\">\n        $$u_{20} = 4 + 19(-3) = 4 - 57 = -53$$\n      </div>\n      <div class=\"p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2\">\n        👉 <b>Đáp án chọn: A ($u_{20} = -53$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Áp dụng công thức số hạng tổng quát: u n bằng u một cộng mở ngoặc n trừ một đóng ngoặc nhân d. Với n bằng hai mươi, ta có: u hai mươi bằng u một cộng mười chín nhân d. Thay số vào: u một bằng bốn, d bằng trừ ba, ta có: bốn cộng mười chín nhân trừ ba. Mười chín nhân trừ ba bằng trừ năm mươi bảy, bốn trừ năm mươi bảy bằng trừ năm mươi ba. Đáp án chính xác là A.",
      "startTime": 87.79,
      "endTime": 114.38,
      "duration": 26.59
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $u_1$ VÀ $d$ TỪ 2 SỐ HẠNG",
      "subtitle": "DẠNG 2 • HỆ PHƯƠNG TRÌNH CHO $u_3 = 11$ VÀ $u_8 = 31$",
      "mascotMode": "think",
      "mascotTip": "Lập hệ: u_1 + 2d = 11 và u_1 + 7d = 31. Trừ 2 vế tìm 5d = 20 => d = 4!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Tìm $u_1, d$</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-indigo-200 mb-2\">Tìm $u_1$ và $d$ khi biết $u_3 = 11, u_8 = 31$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số cộng $(u_n)$ có $u_3 = 11$ và $u_8 = 31$. Giá trị của $u_1$ và $d$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $u_1 = 2; d = 4$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $u_1 = 3; d = 4$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $u_1 = 3; d = 5$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $u_1 = 1; d = 4$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Cho cấp số cộng u n biết số hạng thứ ba u ba bằng mười một và số hạng thứ tám u tám bằng ba mươi mốt. Tìm số hạng đầu u một và công sai d của cấp số cộng này. Các em có ba mươi giây để giải hệ phương trình.",
      "startTime": 114.38,
      "endTime": 130.22,
      "duration": 15.84
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $u_1 = 3$ VÀ $d = 4$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "5d = u_8 - u_3 = 31 - 11 = 20 => d = 4. Thay vào: u_1 = 11 - 2(4) = 3!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-indigo-300\">Thiết lập hệ phương trình bậc nhất 2 ẩn</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có hệ phương trình:</p>\n      $$\\begin{cases} u_1 + 2d = 11 \\\\ u_1 + 7d = 31 \\end{cases}$$\n      <p class=\"text-slate-200\">• Lấy phương trình thứ hai trừ phương trình thứ nhất:</p>\n      $$5d = 20 \\iff d = 4$$\n      <p class=\"text-slate-200\">• Thay $d = 4$ vào phương trình thứ nhất:</p>\n      $$u_1 + 2(4) = 11 \\iff u_1 = 11 - 8 = 3$$\n      <div class=\"p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2\">\n        👉 <b>Kết luận:</b> $u_1 = 3$ và $d = 4$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Ta biểu diễn u ba và u tám theo u một và d: u ba bằng u một cộng hai d bằng mười một. u tám bằng u một cộng bảy d bằng ba mươi mốt. Lấy phương trình dưới trừ phương trình trên, ta triệt tiêu được u một: bảy d trừ hai d bằng năm d; ba mươi mốt trừ mười một bằng hai mươi. Suy ra d bằng hai mươi chia năm bằng bốn. Thay d bằng bốn vào phương trình đầu tiên: u một cộng hai nhân bốn bằng mười một, suy ra u một bằng mười một trừ tám bằng ba. Như vậy, số hạng đầu u một bằng ba và công sai d bằng bốn. Đáp án chọn là B.",
      "startTime": 130.22,
      "endTime": 176.02,
      "duration": 45.79
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM VỊ TRÍ CỦA SỐ 248 TRONG DÃY",
      "subtitle": "DẠNG 3 • GIẢI PHƯƠNG TRÌNH TÌM CHỈ SỐ $n$",
      "mascotMode": "think",
      "mascotTip": "u_n = 5n - 2 = 248 <=> 5n = 250 <=> n = 50!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Vị Trí Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Số 248 là số hạng thứ bao nhiêu?</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số cộng $(u_n)$ có $u_n = 5n - 2$. Số $248$ là số hạng thứ mấy?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Thứ 48</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Thứ 50</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Thứ 52</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Không thuộc dãy</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Cho cấp số cộng u n có số hạng tổng quát u n bằng năm n trừ hai. Hỏi số hai trăm bốn mươi tám là số hạng thứ bao nhiêu của cấp số cộng đó? Các em có mười lăm giây để tính nhẩm.",
      "startTime": 176.02,
      "endTime": 190.75,
      "duration": 14.74
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $n = 50 \\implies 248 = u_{50}$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "explain",
      "mascotTip": "5n = 250 => n = 50. Số 248 đứng ở vị trí thứ 50 trong cấp số cộng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Giải phương trình $u_n = 248$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có phương trình:</p>\n      $$5n - 2 = 248 \\iff 5n = 250 \\iff n = 50$$\n      <p class=\"text-slate-200\">• Vì $n = 50 \\in \\mathbb{N}^*$, giá trị $248$ thuộc cấp số cộng.</p>\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 <b>Kết luận:</b> Số $248$ là số hạng thứ $50$ ($u_{50} = 248$). <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta giải phương trình u n bằng hai trăm bốn mươi tám: năm n trừ hai bằng hai trăm bốn mươi tám. Chuyển trừ hai sang vế phải, ta được: năm n bằng hai trăm bốn mươi tám cộng hai bằng hai trăm năm mươi. Chia hai vế cho năm, ta được n bằng hai trăm năm mươi chia năm bằng năm mươi. Vì năm mươi là số nguyên dương nên số hai trăm bốn mươi tám chính là số hạng thứ năm mươi, tức u năm mươi của cấp số cộng. Đáp án chính xác là B.",
      "startTime": 190.75,
      "endTime": 221.74,
      "duration": 30.98
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: CHÈN THÊM CÁC SỐ VÀO GIỮA 2 SỐ CHO TRƯỚC",
      "subtitle": "DẠNG 4 • CHÈN 5 SỐ VÀO GIỮA 4 VÀ 28 ĐỂ THÀNH CẤP SỐ CỘNG",
      "mascotMode": "think",
      "mascotTip": "Chèn 5 số vào giữa 2 số => Dãy có tất cả 7 số hạng! u_1 = 4 và u_7 = 28!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Chèn Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Chèn 5 số vào giữa 4 và 28</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Chèn thêm 5 số vào giữa 4 và 28 để được một cấp số cộng gồm 7 số hạng. Năm số đó là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $8; \\; 12; \\; 16; \\; 20; \\; 24$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $6; \\; 10; \\; 14; \\; 18; \\; 22$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $9; \\; 14; \\; 19; \\; 24; \\; 27$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $7; \\; 11; \\; 15; \\; 19; \\; 23$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn: Giữa hai số bốn và hai mươi tám, hãy chèn thêm năm số nữa để tạo thành một cấp số cộng gồm bảy số hạng. Hãy tìm công sai d và năm số được chèn vào đó. Các em có ba mươi giây để tính toán.",
      "startTime": 221.74,
      "endTime": 236.47,
      "duration": 14.74
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $d = 4 \\implies 8, 12, 16, 20, 24$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "celebrate",
      "mascotTip": "u_7 = u_1 + 6d <=> 4 + 6d = 28 <=> 6d = 24 <=> d = 4. Năm số chèn: 8, 12, 16, 20, 24!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Xác định tổng số số hạng và tìm công sai $d$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Cấp số cộng có 7 số hạng: $u_1 = 4$ và $u_7 = 28$.</p>\n      <p class=\"text-slate-200\">• Áp dụng công thức số hạng tổng quát:</p>\n      $$u_7 = u_1 + 6d \\iff 4 + 6d = 28 \\iff 6d = 24 \\iff d = 4$$\n      <p class=\"text-slate-200\">• Năm số hạng được chèn thêm vào là:</p>\n      <div class=\"text-center font-bold text-cyan-300 text-sm py-1\">\n        $$u_2 = 8; \\quad u_3 = 12; \\quad u_4 = 16; \\quad u_5 = 20; \\quad u_6 = 24$$\n      </div>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 Cấp số cộng hoàn chỉnh: $4, \\mathbf{8, 12, 16, 20, 24}, 28$. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Khi chèn thêm năm số vào giữa hai số ban đầu, cấp số cộng mới sẽ có tổng cộng hai cộng năm bằng bảy số hạng. Trong đó số hạng đầu tiên u một bằng bốn, và số hạng thứ bảy u bảy bằng hai mươi tám. Áp dụng công thức số hạng tổng quát: u bảy bằng u một cộng sáu d. Thay số vào: bốn cộng sáu d bằng hai mươi tám, suy ra sáu d bằng hai mươi tám trừ bốn bằng hai mươi tư, d bằng hai mươi tư chia sáu bằng bốn. Khi đã có công sai d bằng bốn, ta cộng dồn liên tiếp: u hai bằng tám, u ba bằng mười hai, u bốn bằng mười sáu, u năm bằng hai mươi, và u sáu bằng hai mươi tư. Năm số cần tìm chính là tám, mười hai, mười sáu, hai mươi và hai mươi tư. Đáp án chọn là A.",
      "startTime": 236.47,
      "endTime": 284.35,
      "duration": 47.88
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ SỐ HẠNG TỔNG QUÁT",
      "subtitle": "LỖI NHẦM $u_n = u_1 + nd$ THAY VÌ $(n - 1)d$",
      "mascotMode": "explain",
      "mascotTip": "Luôn luôn là (n - 1)d! Ví dụ u_{10} = u_1 + 9d, không bao giờ là u_1 + 10d!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">Lỗi Sai Kinh Điển: Nhầm Lẫn Hệ Số $d$</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Công thức SAI rất hay gặp</h4>\n        <p class=\"text-slate-300 leading-relaxed font-mono\">\n          $u_n = u_1 + nd$ (SAI!)<br/>\n          Ví dụ tính $u_{10} = u_1 + 10d$ là sai lầm làm mất điểm hàng loạt câu hỏi trắc nghiệm!\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-emerald-400\">\n        <h4 class=\"font-bold text-emerald-300 mb-1\">✔ Công thức ĐÚNG chuẩn SGK</h4>\n        <p class=\"text-slate-300 leading-relaxed font-mono\">\n          $u_n = u_1 + (n - 1)d$ (ĐÚNG!)<br/>\n          $u_1 = u_1 + 0d$<br/>\n          $u_2 = u_1 + 1d$<br/>\n          $u_{10} = u_1 + 9d$\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh cảnh báo một lỗi sai kinh điển mà ba mươi phần trăm học sinh mắc phải: Đó là viết nhầm công thức u n bằng u một cộng n nhân d thay vì n trừ một nhân d. Các em hãy nhớ rằng: u một thì có không lần d, u hai có một lần d, u ba có hai lần d, vậy u n chỉ có n trừ một lần d. Nếu lấy n nhân d thì các em đã cộng thừa thêm một lần công sai d, dẫn đến kết quả bài toán bị sai lệch hoàn toàn.",
      "startTime": 284.35,
      "endTime": 309.38,
      "duration": 25.03
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "LÀM CHỦ CÔNG THỨC $u_n$ ĐỂ CHUYỂN SANG MỤC 3: TÍNH TỔNG $S_n$",
      "mascotMode": "celebrate",
      "mascotTip": "Ghi nhớ công thức u_n = u_1 + (n - 1)d! Sẵn sàng bước sang Mục 3 để tính tổng S_n!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl\">🎯🚀</div>\n    <h3 class=\"text-xl font-black text-blue-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 2!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã thành thạo kỹ năng tìm số hạng bất kỳ $u_n = u_1 + (n - 1)d$, giải hệ phương trình và chèn số hạng. Hãy chuyển sang Mục 3 để chinh phục công thức Tính Tổng $S_n$!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40\">✔ 4 Ví dụ hoàn thành</span>\n      <span class=\"px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40\">✔ Kỹ thuật giải hệ tìm $u_1, d$</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 3</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai. Chúng ta đã làm chủ công thức số hạng tổng quát, phương pháp giải hệ tìm u một và d, cùng bài toán chèn số hạng tiêu biểu. Ngay bây giờ, mời các em bước sang Mục ba: Tổng n số hạng đầu tiên của cấp số cộng và các bài toán thực tế đời sống.",
      "startTime": 309.38,
      "endTime": 328.2,
      "duration": 18.82
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai6_muc2 = window.G11_CHAPTER2_DATA.g11_bai6_muc2;

  window.G11_CHAPTER2_DATA.g11_bai6_muc3 = {
  "lessonId": "toan11_bai6",
  "lessonTitle": "Bài 6: Cấp số cộng",
  "sectionId": "g11_bai6_muc3",
  "sectionTitle": "Mục 3: Tổng n số hạng đầu tiên của cấp số cộng & Bài toán thực tế",
  "audio": "/audio/g11_bai6_muc3.mp3",
  "audioSrc": "./audio/g11_bai6_muc3.mp3",
  "audio_src": "./audio/g11_bai6_muc3.mp3",
  "title": "Mục 3: Tổng n số hạng đầu tiên của cấp số cộng & Bài toán thực tế",
  "owl_tip": "Công thức tổng: S_n = n(u_1 + u_n)/2 = n[2u_1 + (n - 1)d]/2. Áp dụng giải bài toán kim tự tháp, xếp gạch, trả góp!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. CÔNG THỨC TÍNH TỔNG $n$ SỐ HẠNG ĐẦU TIÊN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. KỸ THUẬT TÌM $u_n$ VÀ $d$ KHI BIẾT TỔNG $S_n$",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ TÍNH TỔNG $S_n$",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT TOÀN BỘ BÀI 6 & CHUYỂN SANG BÀI 7: CẤP SỐ NHÂN",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 393.82,
  "formattedDuration": "06:33",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CÔNG THỨC TÍNH TỔNG $n$ SỐ HẠNG ĐẦU TIÊN",
      "subtitle": "BÀI 6 • CẤP SỐ CỘNG • MỤC 3: CÔNG THỨC GAUSS NÂNG CAO",
      "mascotMode": "pointer",
      "mascotTip": "Công thức 1: S_n = n(u_1 + u_n) / 2. Công thức 2: S_n = n[2u_1 + (n - 1)d] / 2!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Công thức cốt lõi</span>\n      <h3 class=\"text-xl font-black text-purple-200\">2 Công Thức Tính Tổng $S_n$ Chuẩn Mực</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Tổng $S_n = u_1 + u_2 + \\dots + u_n$ của cấp số cộng:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md\">\n      <h4 class=\"font-bold text-purple-300 text-sm mb-1\">Công thức 1 (Theo số đầu và số cuối)</h4>\n      $$S_n = \\frac{n(u_1 + u_n)}{2}$$\n      👉 Dùng khi đã biết số hạng đầu $u_1$ và số hạng cuối $u_n$.\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-pink-400 shadow-md\">\n      <h4 class=\"font-bold text-pink-300 text-sm mb-1\">Công thức 2 (Theo $u_1$ và công sai $d$)</h4>\n      $$S_n = \\frac{n[2u_1 + (n - 1)d]}{2}$$\n      👉 Dùng khi biết $u_1$, $d$ và số lượng $n$ (không cần tính $u_n$).\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục ba: Tổng n số hạng đầu tiên của cấp số cộng. Xuất phát từ phương pháp tính tổng thiên tài của nhà toán học Gauss, ta có công thức tổng quát tính tổng S n của n số hạng đầu tiên: S n bằng n nhân mở ngoặc u một cộng u n đóng ngoặc chia cho hai. Tức là số các số hạng nhân với tổng của số đầu và số cuối, rồi chia đôi. Khi thay u n bằng u một cộng n trừ một nhân d, ta thu được công thức thứ hai rất tiện lợi khi chưa biết u n: S n bằng n nhân mở ngoặc hai u một cộng n trừ một nhân d đóng ngoặc, tất cả chia cho hai.",
      "startTime": 0.0,
      "endTime": 46.51,
      "duration": 46.51
    },
    {
      "sceneIndex": 2,
      "title": "2. KỸ THUẬT TÌM $u_n$ VÀ $d$ KHI BIẾT TỔNG $S_n$",
      "subtitle": "MỐI QUAN HỆ ĐẶC BIỆT: $u_1 = S_1$ VÀ $u_n = S_n - S_{n-1}$",
      "mascotMode": "explain",
      "mascotTip": "Quy tắc: u_1 = S_1; u_2 = S_2 - S_1. Từ đó suy ra công sai d = u_2 - u_1!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-purple-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-purple-300\">Tuyệt Kỹ Suy Ngược $u_n$ Từ Tổng $S_n$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">Cho công thức tổng $S_n$ theo $n$. Để xác định cấp số cộng:</p>\n      <div class=\"grid grid-cols-3 gap-2 text-center pt-1\">\n        <div class=\"bg-slate-950 p-2.5 rounded border border-slate-800\">\n          <span class=\"text-purple-300 font-bold block mb-1\">Bước 1: Tìm $u_1$</span>\n          $$u_1 = S_1$$\n        </div>\n        <div class=\"bg-slate-950 p-2.5 rounded border border-slate-800\">\n          <span class=\"text-pink-300 font-bold block mb-1\">Bước 2: Tìm $u_2$</span>\n          $$u_2 = S_2 - S_1$$\n        </div>\n        <div class=\"bg-slate-950 p-2.5 rounded border border-slate-800\">\n          <span class=\"text-amber-300 font-bold block mb-1\">Bước 3: Tìm $d$</span>\n          $$d = u_2 - u_1$$\n        </div>\n      </div>\n      <p class=\"text-slate-300 pt-1\">👉 <b>Công thức tổng quát:</b> $u_n = S_n - S_{n-1}, \\quad \\forall n \\ge 2$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một dạng toán trắc nghiệm rất hay gặp trong đề thi là cho biết công thức tính tổng S n theo n, ví dụ S n bằng hai n bình cộng ba n, rồi yêu cầu tìm số hạng đầu và công sai. Kỹ thuật giải cực kỳ nhanh như sau: Số hạng đầu tiên u một chính là bằng S một. Để tìm số hạng thứ hai u hai, ta lấy S hai trừ S một. Khi có u một và u hai, ta tính ngay được công sai d bằng u hai trừ u một. Tổng quát hơn, với mọi n lớn hơn hoặc bằng hai, ta luôn có u n bằng S n trừ S n trừ một.",
      "startTime": 46.51,
      "endTime": 89.4,
      "duration": 42.89
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH TỔNG 30 SỐ HẠNG ĐẦU TIÊN",
      "subtitle": "DẠNG 1 • CHO BIẾT $u_1 = 3, d = 5$, TÍNH $S_{30}$",
      "mascotMode": "think",
      "mascotTip": "Áp dụng: S_{30} = 30 * [2(3) + 29(5)] / 2 = 15 * (6 + 145) = 15 * 151!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Tính $S_{30}$</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Tính tổng $S_{30}$ khi $u_1 = 3, d = 5$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tổng 30 số hạng đầu tiên của cấp số cộng có $u_1 = 3, d = 5$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $S_{30} = 2175$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $S_{30} = 2265$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $S_{30} = 2340$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $S_{30} = 4530$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Tính tổng của ba mươi số hạng đầu tiên của cấp số cộng u n, biết số hạng đầu u một bằng ba và công sai d bằng năm. Các em có mười lăm giây để tính ra kết quả.",
      "startTime": 89.4,
      "endTime": 104.09,
      "duration": 14.69
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $S_{30} = 2265$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "cheer",
      "mascotTip": "S_{30} = 15 * 151 = 2265. Tính toán rất gọn gàng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Áp dụng công thức $S_n = \\frac{n[2u_1 + (n - 1)d]}{2}$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Thay số với $n = 30, u_1 = 3, d = 5$:</p>\n      $$S_{30} = \\frac{30[2(3) + (30 - 1)5]}{2} = 15 \\times [6 + 29 \\times 5]$$\n      <div class=\"text-center font-bold text-purple-300 text-sm py-1\">\n        $$S_{30} = 15 \\times [6 + 145] = 15 \\times 151 = 2265$$\n      </div>\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($S_{30} = 2265$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Áp dụng công thức số hai: S n bằng n nhân mở ngoặc hai u một cộng n trừ một nhân d đóng ngoặc chia cho hai. Với n bằng ba mươi, ta có: S ba mươi bằng ba mươi nhân mở ngoặc hai nhân ba cộng hai mươi chín nhân năm đóng ngoặc chia cho hai. Ba mươi chia hai được mười lăm. Bên trong ngoặc: hai nhân ba bằng sáu; hai mươi chín nhân năm bằng một trăm bốn mươi lăm; sáu cộng một trăm bốn mươi lăm bằng một trăm năm mươi mốt. Mười lăm nhân với một trăm năm mươi mốt bằng hai nghìn hai trăm sáu mươi lăm. Đáp án chính xác là B.",
      "startTime": 104.09,
      "endTime": 140.54,
      "duration": 36.46
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $u_1$ VÀ $d$ KHI BIẾT TỔNG $S_n = 2n^2 + 3n$",
      "subtitle": "DẠNG 2 • BÀI TOÁN XÁC ĐỊNH CSC QUA ĐA THỨC TỔNG $S_n$",
      "mascotMode": "think",
      "mascotTip": "u_1 = S_1 = 2(1)^2 + 3(1) = 5. S_2 = 2(4) + 6 = 14 => u_2 = 14 - 5 = 9 => d = 4!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Xác Định Từ $S_n$</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-pink-200 mb-2\">Cho $S_n = 2n^2 + 3n$, tìm $u_1$ và $d$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số cộng $(u_n)$ có $S_n = 2n^2 + 3n$. Giá trị của $u_1$ và $d$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $u_1 = 5; \\; d = 4$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $u_1 = 5; \\; d = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $u_1 = 3; \\; d = 4$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $u_1 = 5; \\; d = 3$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Cho cấp số cộng u n có tổng n số hạng đầu tiên được xác định bởi công thức S n bằng hai n bình phương cộng ba n với mọi n thuộc N sao. Hãy tìm số hạng đầu u một và công sai d của cấp số cộng đó. Các em có ba mươi giây để tính toán.",
      "startTime": 140.54,
      "endTime": 159.17,
      "duration": 18.62
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $u_1 = 5$ VÀ $d = 4$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "celebrate",
      "mascotTip": "u_1 = 5, u_2 = 14 - 5 = 9 => d = 9 - 5 = 4. Rất nhanh chỉ trong 5 giây!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-pink-300\">Tính trực tiếp $S_1$ và $S_2$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Tính $u_1 = S_1$:</p>\n      $$u_1 = S_1 = 2(1)^2 + 3(1) = 5$$\n      <p class=\"text-slate-200\">• Tính $S_2 = u_1 + u_2$:</p>\n      $$S_2 = 2(2)^2 + 3(2) = 8 + 6 = 14 \\implies u_2 = S_2 - u_1 = 14 - 5 = 9$$\n      <p class=\"text-slate-200\">• Tính công sai $d$:</p>\n      <div class=\"text-center font-bold text-pink-300 text-sm py-1\">\n        $$d = u_2 - u_1 = 9 - 5 = 4$$\n      </div>\n      <div class=\"p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2\">\n        👉 <b>Kết luận:</b> $u_1 = 5$ và $d = 4$. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Lời giải cực nhanh: Với n bằng một, tổng của một số hạng đầu tiên chính là u một: u một bằng S một bằng hai nhân một bình cộng ba nhân một bằng năm. Với n bằng hai, tổng của hai số hạng đầu tiên là S hai: S hai bằng hai nhân hai bình cộng ba nhân hai, bằng tám cộng sáu bằng mười bốn. Vì S hai bằng u một cộng u hai nên u hai bằng S hai trừ u một, bằng mười bốn trừ năm bằng chín. Khi đó công sai d bằng u hai trừ u một, bằng chín trừ năm bằng bốn. Như vậy u một bằng năm và d bằng bốn. Đáp án chính xác là A.",
      "startTime": 159.17,
      "endTime": 205.49,
      "duration": 46.32
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÍNH TỔNG CÁC SỐ CHIA HẾT CHO 3",
      "subtitle": "DẠNG 3 • TÍNH TỔNG DÃY SỐ TỰ NHIÊN CÁCH ĐỀU NHỎ HƠN 100",
      "mascotMode": "think",
      "mascotTip": "Các số đó: 3, 6, 9... 99. u_1 = 3, d = 3, u_n = 99 => n = 33 số hạng. Tính S_{33}!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Số Tự Nhiên</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Tổng các số chia hết cho 3 nhỏ hơn 100</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tổng $S = 3 + 6 + 9 + \\dots + 99$ bằng:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $S = 1650$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $S = 1683$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $S = 1716$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $S = 3366$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Tính tổng của tất cả các số tự nhiên chia hết cho ba và nhỏ hơn một trăm. Các em có mười lăm giây để xác định số lượng số hạng và tính tổng.",
      "startTime": 205.49,
      "endTime": 216.1,
      "duration": 10.61
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $S = 1683$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "explain",
      "mascotTip": "n = (99 - 3)/3 + 1 = 33 số. S = 33 * (3 + 99) / 2 = 33 * 51 = 1683!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Áp dụng công thức $S_n = \\frac{n(u_1 + u_n)}{2}$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Dãy các số là: $3, 6, 9, \\dots, 99$ ($u_1 = 3, d = 3, u_n = 99$).</p>\n      <p class=\"text-slate-200\">• Số lượng số hạng:</p>\n      $$n = \\frac{99 - 3}{3} + 1 = 33$$\n      <p class=\"text-slate-200\">• Tính tổng:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$S_{33} = \\frac{33(3 + 99)}{2} = \\frac{33 \\times 102}{2} = 33 \\times 51 = 1683$$\n      </div>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($S = 1683$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Các số tự nhiên chia hết cho ba và nhỏ hơn một trăm là: ba, sáu, chín, chấm chấm chấm đến chín mươi chín. Đây là một cấp số cộng có số hạng đầu u một bằng ba, công sai d bằng ba và số hạng cuối u n bằng chín mươi chín. Ta tìm số lượng số hạng n: chín mươi chín trừ ba chia ba cộng một, bằng ba mươi ba số hạng. Áp dụng công thức một: tổng S bằng n nhân mở ngoặc số đầu cộng số cuối đóng ngoặc chia hai. Thay số vào: ba mươi ba nhân mở ngoặc ba cộng chín mươi chín đóng ngoặc chia hai. Ba cộng chín mươi chín bằng một trăm lẻ hai, chia hai bằng năm mươi mốt. Ba mươi ba nhân năm mươi mốt bằng một nghìn sáu trăm tám mươi ba. Đáp án chính xác là B.",
      "startTime": 216.1,
      "endTime": 262.66,
      "duration": 46.56
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ HÀNG GHẾ RẠP HÁT",
      "subtitle": "DẠNG 4 • TÍNH TỔNG SỐ GHẾ TRONG KHÁN PHÒNG",
      "mascotMode": "think",
      "mascotTip": "Hàng 1 có 18 ghế (u_1 = 18). Mỗi hàng sau tăng 2 ghế (d = 2). Rạp có 25 hàng (n = 25)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Bài Toán Thực Tế</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Số ghế trong rạp hát 25 hàng</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Hàng 1 có 18 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Tổng số ghế của cả 25 hàng là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> 1050 ghế</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> 1025 ghế</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> 1100 ghế</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> 980 ghế</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn là bài toán thực tế rất hay gặp trong đề thi: Một rạp hát có hai mươi lăm hàng ghế. Hàng ghế đầu tiên có mười tám ghế, mỗi hàng tiếp theo nhiều hơn hàng đứng trước nó hai ghế. Hỏi toàn bộ rạp hát đó có tất cả bao nhiêu ghế? Các em có ba mươi giây để tính tổng số ghế.",
      "startTime": 262.66,
      "endTime": 281.81,
      "duration": 19.15
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ TỔNG CỘNG 1050 GHẾ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "celebrate",
      "mascotTip": "S_{25} = 25 * [2(18) + 24(2)] / 2 = 25 * (36 + 48) / 2 = 25 * 42 = 1050 ghế!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Mô hình hóa số ghế bằng cấp số cộng</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Số ghế mỗi hàng là CSC có: $u_1 = 18, d = 2, n = 25$.</p>\n      <p class=\"text-slate-200\">• Tổng số ghế của rạp hát là:</p>\n      $$S_{25} = \\frac{25[2(18) + (25 - 1)2]}{2} = \\frac{25[36 + 48]}{2} = \\frac{25 \\times 84}{2} = 25 \\times 42 = 1050 \\text{ (ghế)}$$\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        👉 <b>Kết luận:</b> Rạp hát có tất cả $1050$ ghế. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Số ghế ở mỗi hàng lập thành một cấp số cộng có số hạng đầu u một bằng mười tám, công sai d bằng hai, và số lượng hàng ghế n bằng hai mươi lăm. Tổng số ghế của toàn bộ rạp hát chính là S hai mươi lăm: S hai mươi lăm bằng hai mươi lăm nhân mở ngoặc hai nhân mười tám cộng hai mươi lăm trừ một nhân hai đóng ngoặc chia cho hai. Bên trong ngoặc: hai nhân mười tám bằng ba mươi sáu; hai mươi tư nhân hai bằng bốn mươi tám; ba mươi sáu cộng bốn mươi tám bằng tám mươi tư. Tám mươi tư chia hai bằng bốn mươi hai. Hai mươi lăm nhân bốn mươi hai bằng một nghìn không trăm năm mươi ghế. Đáp án chính xác là A.",
      "startTime": 281.81,
      "endTime": 329.83,
      "duration": 48.02
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ TÍNH TỔNG $S_n$",
      "subtitle": "LỖI QUÊN HỆ SỐ 2 Ở $2u_1$ VÀ LỖI ĐẾM SAI $n$",
      "mascotMode": "explain",
      "mascotTip": "Công thức là n[2u_1 + (n - 1)d] / 2. Rất nhiều học sinh quên số 2 ở trước u_1!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Lỗi Sai Phổ Biến Khi Tính Tổng $S_n$</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Quên số 2 ở $2u_1$</h4>\n        <p class=\"text-slate-300 leading-relaxed font-mono\">\n          $S_n = \\frac{n[u_1 + (n - 1)d]}{2}$ (SAI!)<br/>\n          Chính xác phải là: $\\mathbf{2u_1}$!<br/>\n          $$S_n = \\frac{n[\\mathbf{2}u_1 + (n - 1)d]}{2}$$\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Quên cộng 1 khi đếm số hạng</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Công thức đếm số lượng:\n          $$n = \\frac{\\text{Cuối} - \\text{Đầu}}{d} \\mathbf{+ 1}$$\n          👉 Quên $+1$ sẽ đếm thiếu 1 số hạng dẫn đến sai toàn bộ kết quả!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý hai lỗi bẫy thi thường gặp khi tính tổng cấp số cộng: Thứ nhất là khi dùng công thức hai, rất nhiều bạn viết nhầm thành u một cộng n trừ một nhân d, quên mất hệ số hai ở trước u một. Nhớ rằng ở công thức một có u một cộng u n, mà u n bằng u một cộng n trừ một d, nên phải là hai u một. Thứ hai là khi đếm số các số hạng n từ số a đến số b cách đều d, công thức tính số lượng luôn là: số cuối trừ số đầu chia khoảng cách d rồi cộng thêm một. Nếu quên cộng một thì các em sẽ bị đếm thiếu một số hạng dẫn đến sai toàn bộ tổng.",
      "startTime": 329.83,
      "endTime": 366.34,
      "duration": 36.5
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT TOÀN BỘ BÀI 6 & CHUYỂN SANG BÀI 7: CẤP SỐ NHÂN",
      "subtitle": "CHINH PHỤC CẤP SỐ CỘNG • BÀN ĐẠP TIẾN VÀO CẤP SỐ NHÂN",
      "mascotMode": "celebrate",
      "mascotTip": "Chúc mừng em hoàn thành trọn vẹn Bài 6 Cấp số cộng! Hãy bước sang Bài 7 Cấp số nhân!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl\">🎓⭐🎉</div>\n    <h3 class=\"text-xl font-black text-purple-200 mb-2\">Chúc Mừng Em Hoàn Thành Xuất Sắc Bài 6!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã chinh phục trọn vẹn Cấp số cộng: Định nghĩa, Công sai $d$, Số hạng tổng quát $u_n$ và Công thức tính tổng $S_n$ với 12 ví dụ mẫu mực. Giờ là lúc bước sang Bài 7: Cấp số nhân!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 12 Ví dụ tiêu biểu Bài 6</span>\n      <span class=\"px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40\">✔ 2 Công thức $S_n$ làm chủ</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🔥 Chuyển sang Bài 7: Cấp số nhân</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng tất cả các em đã hoàn thành xuất sắc toàn bộ ba mục bài giảng của Bài sáu: Cấp số cộng. Chúng ta đã làm chủ định nghĩa, công sai d, công thức số hạng tổng quát và hai công thức tính tổng S n cùng các bài toán ứng dụng thực tế. Bây giờ, thầy mời các em cùng bước sang Bài bảy: Cấp số nhân, nơi quy luật cộng dồn sẽ được nâng cấp thành quy luật nhân dồn lũy thừa vô cùng kỳ diệu. Hẹn gặp lại các em ở Bài bảy!",
      "startTime": 366.34,
      "endTime": 393.82,
      "duration": 27.48
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai6_muc3 = window.G11_CHAPTER2_DATA.g11_bai6_muc3;

  window.G11_CHAPTER2_DATA.g11_bai7_muc1 = {
  "lessonId": "toan11_bai7",
  "lessonTitle": "Bài 7: Cấp số nhân",
  "sectionId": "g11_bai7_muc1",
  "sectionTitle": "Mục 1: Định nghĩa cấp số nhân & Công bội q",
  "audio": "/audio/g11_bai7_muc1.mp3",
  "audioSrc": "./audio/g11_bai7_muc1.mp3",
  "audio_src": "./audio/g11_bai7_muc1.mp3",
  "title": "Mục 1: Định nghĩa cấp số nhân & Công bội q",
  "owl_tip": "Cấp số nhân là dãy số mà u_{n+1} = u_n * q với mọi n >= 1. Công bội q = u_{n+1} / u_n không đổi!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA CẤP SỐ NHÂN VÀ CÔNG BỘI",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. TÍNH CHẤT TRUNG BÌNH NHÂN CỦA 3 SỐ HẠNG LIÊN TIẾP",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ CẤP SỐ NHÂN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 346.39,
  "formattedDuration": "05:46",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA CẤP SỐ NHÂN VÀ CÔNG BỘI",
      "subtitle": "BÀI 7 • CẤP SỐ NHÂN • MỤC 1: QUY LUẬT NHÂN DỒN HẰNG SỐ $q$",
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc: Kể từ số hạng thứ hai, mỗi số hạng bằng số hạng trước NHÂN với công bội q không đổi!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định nghĩa cốt lõi</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Định Nghĩa Cấp Số Nhân & Công Bội $q$</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Dãy số có quy luật nhân dồn hằng số với mọi $n \\in \\mathbb{N}^*$:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">1. Định nghĩa chuẩn</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Dãy số $(u_n)$ là cấp số nhân khi và chỉ khi:\n        $$u_{n+1} = u_n \\cdot q, \\quad \\forall n \\ge 1$$\n        • $q$: <b>công bội</b> ($q = \\frac{u_{n+1}}{u_n}$ khi $u_n \\ne 0$).<br/>\n        • $u_1$: số hạng đầu tiên.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">2. Các trường hợp đặc biệt</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $q = 1 \\implies u_n = u_1$ (dãy số không đổi: $c, c, c, \\dots$).<br/>\n        • $q = 0 \\implies u_1, 0, 0, 0, \\dots$<br/>\n        • $q < 0 \\implies$ Dãy số <b>đan dấu</b> ($+, -, +, -, \\dots$).\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài bảy: Cấp số nhân, bài học trọng tâm cuối cùng của Chương hai. Ở Mục một, chúng ta cùng tìm hiểu về định nghĩa cấp số nhân và tính chất của ba số hạng liên tiếp. Trong toán học, một dãy số vô hạn hoặc hữu hạn được gọi là cấp số nhân nếu kể từ số hạng thứ hai, mỗi số hạng đều bằng số hạng đứng ngay trước nó nhân với một số không đổi q. Số q được gọi là công bội của cấp số nhân. Nếu công bội q bằng một, cấp số nhân là một dãy số không đổi. Nếu q lớn hơn một, dãy số tăng trưởng rất nhanh theo hàm mũ. Nếu q âm, các số hạng sẽ đan dấu âm dương luân phiên.",
      "startTime": 0.0,
      "endTime": 38.93,
      "duration": 38.93
    },
    {
      "sceneIndex": 2,
      "title": "2. TÍNH CHẤT TRUNG BÌNH NHÂN CỦA 3 SỐ HẠNG LIÊN TIẾP",
      "subtitle": "HỆ THỨC HÌNH HỌC: BÌNH PHƯƠNG SỐ GIỮA BẰNG TÍCH 2 SỐ HAI BÊN",
      "mascotMode": "explain",
      "mascotTip": "Tính chất vàng của CSN: u_k^2 = u_{k-1} * u_{k+1} hay a * c = b^2!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-teal-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-teal-300\">Tính Chất Cốt Lõi: Trung Bình Nhân</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">Với mọi số hạng thứ $k \\ge 2$ trong cấp số nhân $(u_n)$:</p>\n      <div class=\"text-center font-bold text-teal-300 text-base py-1\">\n        $$u_k^2 = u_{k-1} \\cdot u_{k+1}$$\n      </div>\n      <p class=\"text-slate-300\">👉 <b>Quy tắc 3 số liên tiếp:</b> Ba số $a, b, c$ theo thứ tự lập thành một cấp số nhân:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$a \\cdot c = b^2 \\iff |b| = \\sqrt{ac} \\; (\\text{khi } ac \\ge 0)$$\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Cấp số nhân có một tính chất trung bình nhân rất đặc sắc: Trong một cấp số nhân, bình phương của mỗi số hạng kể từ số hạng thứ hai luôn bằng tích của hai số hạng kề bên nó. Tức là u k bình phương bằng u k trừ một nhân u k cộng một. Nếu ba số a, b, c theo thứ tự lập thành một cấp số nhân thì ta luôn có hệ thức kinh điển: a nhân c bằng b bình phương. Khi cả ba số đều dương thì b chính là trung bình nhân của a và c.",
      "startTime": 38.93,
      "endTime": 66.94,
      "duration": 28.01
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: NHẬN DIỆN CẤP SỐ NHÂN VÀ TÌM CÔNG BỘI",
      "subtitle": "DẠNG 1 • XÉT TỈ SỐ $\\frac{u_{n+1}}{u_n} = q$ KHÔNG ĐỔI",
      "mascotMode": "think",
      "mascotTip": "u_{n+1} / u_n = [3 * 2^{n+1}] / [3 * 2^n] = 2 (hằng số) => CSN có u_1 = 6, q = 2!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Nhận Diện</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Nhận diện cấp số nhân</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Khẳng định nào sau đây là đúng về dãy số $u_n = 3 \\cdot 2^n$?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Là CSN với $u_1 = 6, q = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Là CSN với $u_1 = 3, q = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Là CSC với $u_1 = 6, d = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Không phải cấp số nhân</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Khẳng định nào sau đây là đúng về dãy số u n có số hạng tổng quát u n bằng ba nhân hai mũ n? Tìm số hạng đầu u một và công bội q của dãy số đó. Các em có mười lăm giây để suy luận.",
      "startTime": 66.94,
      "endTime": 82.08,
      "duration": 15.14
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: LÀ CSN VỚI $u_1 = 6, q = 2$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "u_1 = 3 * 2^1 = 6. Tỉ số u_{n+1} / u_n = 2 (hằng số). Rất nhiều học sinh nhầm u_1 = 3!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Xét tỉ số giữa hai số hạng liên tiếp</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Tính $u_1$ (với $n = 1$):</p>\n      <div class=\"text-center font-bold text-emerald-300 text-sm py-1\">\n        $$u_1 = 3 \\cdot 2^1 = 6$$\n      </div>\n      <p class=\"text-slate-200\">• Xét tỉ số với mọi $n \\ge 1$:</p>\n      $$\\frac{u_{n+1}}{u_n} = \\frac{3 \\cdot 2^{n+1}}{3 \\cdot 2^n} = \\frac{2^{n+1}}{2^n} = 2 \\;\\text{(hằng số)}$$\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        👉 $(u_n)$ là cấp số nhân có số hạng đầu $u_1 = 6$ và công bội $q = 2$. <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta xét tỉ số u n cộng một chia cho u n: u n cộng một bằng ba nhân hai mũ n cộng một. Chia cho u n bằng ba nhân hai mũ n. Rút gọn số ba ở tử và mẫu, hai mũ n cộng một chia hai mũ n bằng hai, là một hằng số không đổi với mọi n. Do đó dãy số u n là một cấp số nhân có công bội q bằng hai. Chú ý số hạng đầu tiên: thay n bằng một vào công thức, ta có u một bằng ba nhân hai mũ một bằng sáu. Rất nhiều bạn nhìn vào số ba tưởng u một bằng ba là sai. Đáp án chính xác là A.",
      "startTime": 82.08,
      "endTime": 120.14,
      "duration": 38.06
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH CÔNG BỘI VÀ CÁC SỐ HẠNG TIẾP THEO",
      "subtitle": "DẠNG 2 • TÌM $q = \\frac{u_2}{u_1}$ VÀ TÍNH $u_3, u_4$",
      "mascotMode": "think",
      "mascotTip": "Công bội q = u_2 / u_1 = -6 / 2 = -3. Nhân q liên tiếp: u_3 = (-6)(-3) = 18!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-950/80 to-slate-900 p-5 rounded-2xl border-2 border-teal-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Tính Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-teal-200 mb-2\">Tính $q, u_3, u_4$ khi biết $u_1 = 2, u_2 = -6$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và $u_2 = -6$. Giá trị của $q, u_3, u_4$ lần lượt là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $q = 3; u_3 = 18; u_4 = 54$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $q = -3; u_3 = 18; u_4 = -54$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $q = -3; u_3 = -18; u_4 = 54$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $q = -4; u_3 = 24; u_4 = -96$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Cho cấp số nhân u n có số hạng đầu u một bằng hai và số hạng thứ hai u hai bằng trừ sáu. Hãy tìm công bội q và tính hai số hạng tiếp theo là u ba và u bốn. Các em có ba mươi giây để tính toán.",
      "startTime": 120.14,
      "endTime": 135.43,
      "duration": 15.29
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $q = -3, u_3 = 18, u_4 = -54$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "q = -3 âm nên dãy đan dấu: 2, -6, 18, -54... Chúc mừng các em chọn B!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-teal-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-teal-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-teal-300\">Nhân dồn công bội $q = -3$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Tính công bội $q$:</p>\n      <div class=\"text-center font-bold text-teal-300 text-sm py-1\">\n        $$q = \\frac{u_2}{u_1} = \\frac{-6}{2} = -3$$\n      </div>\n      <p class=\"text-slate-200\">• Tính các số hạng tiếp theo:</p>\n      $$u_3 = u_2 \\cdot q = (-6) \\cdot (-3) = 18$$\n      $$u_4 = u_3 \\cdot q = 18 \\cdot (-3) = -54$$\n      <div class=\"p-2.5 bg-teal-500/20 border-l-4 border-teal-400 rounded text-teal-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($q = -3; u_3 = 18; u_4 = -54$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Lời giải rất dễ dàng: Công bội q bằng u hai chia cho u một: q bằng trừ sáu chia cho hai bằng trừ ba. Vì q âm nên các số hạng đan dấu: u ba bằng u hai nhân q, bằng trừ sáu nhân trừ ba bằng dương mười tám. u bốn bằng u ba nhân q, bằng mười tám nhân trừ ba bằng trừ năm mươi tư. Bốn số hạng đầu tiên là hai, trừ sáu, mười tám, trừ năm mươi tư. Đáp án chính xác là B.",
      "startTime": 135.43,
      "endTime": 169.61,
      "duration": 34.18
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM $x$ ĐỂ 3 SỐ LẬP THÀNH CẤP SỐ NHÂN",
      "subtitle": "DẠNG 3 • ÁP DỤNG HỆ THỨC TRUNG BÌNH NHÂN $a \\cdot c = b^2$",
      "mascotMode": "think",
      "mascotTip": "(x + 1)^2 = (x - 2)(3x + 3). Khai triển giải phương trình bậc hai tìm x!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-cyan-950/80 to-slate-900 p-5 rounded-2xl border-2 border-cyan-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Tìm Ẩn Số</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-cyan-200 mb-2\">Tìm $x$ để 3 số lập thành CSN</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tìm $x$ để ba số $x - 2, \\; x + 1, \\; 3x + 3$ theo thứ tự lập thành một cấp số nhân:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $x = 1$ hoặc $x = -\\frac{7}{2}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $x = 2$ hoặc $x = -1$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $x = -1$ hoặc $x = \\frac{7}{2}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $x = 3$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Tìm tất cả các giá trị của x để ba số: x trừ hai, x cộng một, và ba x cộng ba theo thứ tự lập thành một cấp số nhân. Các em có mười lăm giây để thiết lập phương trình và tìm nghiệm.",
      "startTime": 169.61,
      "endTime": 182.78,
      "duration": 13.18
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $x = -1$ HOẶC $x = \\frac{7}{2}$ (CHỌN ĐÁP ÁN C)",
      "mascotMode": "explain",
      "mascotTip": "(x+1)^2 = (x-2)(3x+3) <=> x^2 + 2x + 1 = 3x^2 - 3x - 6 <=> 2x^2 - 5x - 7 = 0!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-cyan-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-cyan-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-cyan-300\">Giải phương trình bậc hai từ hệ thức $b^2 = ac$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Áp dụng điều kiện: $(x + 1)^2 = (x - 2)(3x + 3)$:</p>\n      $$x^2 + 2x + 1 = 3x^2 + 3x - 6x - 6 = 3x^2 - 3x - 6$$\n      <p class=\"text-slate-200\">• Chuyển vế sang phải:</p>\n      $$2x^2 - 5x - 7 = 0 \\iff (x + 1)(2x - 7) = 0 \\iff \\left[\\begin{array}{l} x = -1 \\\\ x = \\frac{7}{2} \\end{array}\\right.$$\n      <p class=\"text-emerald-300 font-mono\">• Với $x = -1$: dãy là $-3, 0, 0$ (CSN có $q = 0$). Với $x = \\frac{7}{2}$: dãy là $\\frac{3}{2}, \\frac{9}{2}, \\frac{27}{2}$ (CSN có $q = 3$).</p>\n      <div class=\"p-2.5 bg-cyan-500/20 border-l-4 border-cyan-400 rounded text-cyan-200 mt-2\">\n        👉 <b>Đáp án chọn: C ($x = -1$ hoặc $x = \\frac{7}{2}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Áp dụng tính chất ba số liên tiếp của cấp số nhân: tích số đầu và số cuối bằng bình phương số ở giữa. Ta có: mở ngoặc x trừ hai đóng ngoặc nhân mở ngoặc ba x cộng ba đóng ngoặc, bằng mở ngoặc x cộng một đóng ngoặc bình phương. Khai triển vế trái: ba x bình trừ ba x trừ sáu. Khai triển vế phải: x bình cộng hai x cộng một. Chuyển vế rút gọn, ta được phương trình bậc hai: hai x bình trừ năm x trừ bảy bằng không. Phương trình này có dạng a trừ b cộng c bằng không, cho ta hai nghiệm: x bằng trừ một và x bằng trừ c chia a bằng bảy phần hai. Cả hai giá trị x này đều thỏa mãn. Đáp án chính xác là C.",
      "startTime": 182.78,
      "endTime": 234.38,
      "duration": 51.6
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: 3 SỐ DƯƠNG LẬP THÀNH CSN CÓ TÍCH BẰNG 216",
      "subtitle": "DẠNG 4 • TẬN DỤNG HỆ THỨC $a \\cdot c = b^2 \\implies a \\cdot b \\cdot c = b^3$",
      "mascotMode": "think",
      "mascotTip": "Tích a * b * c = (a * c) * b = b^2 * b = b^3 = 216 => b = căn bậc ba của 216!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Tích 3 Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Tìm số thứ hai $b$ khi biết tích</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Ba số dương $a, b, c$ theo thứ tự lập thành một cấp số nhân và có tích $a \\cdot b \\cdot c = 216$. Giá trị của $b$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $b = 4$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $b = 6$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $b = 8$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $b = 9$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn: Ba số thực dương a, b, c theo thứ tự lập thành một cấp số nhân. Biết rằng tích của ba số đó bằng hai trăm mười sáu. Hãy tìm giá trị của số đứng ở giữa là số b. Các em có ba mươi giây để suy luận.",
      "startTime": 234.38,
      "endTime": 250.56,
      "duration": 16.18
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $b^3 = 216 \\implies b = 6$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "Tích của 3 số liên tiếp luôn bằng lập phương số ở giữa: b^3 = 216 => b = 6!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Áp dụng công thức $a \\cdot c = b^2$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Vì $a, b, c$ lập thành cấp số nhân nên: $a \\cdot c = b^2$.</p>\n      <p class=\"text-slate-200\">• Tích của ba số hạng:</p>\n      $$a \\cdot b \\cdot c = (a \\cdot c) \\cdot b = b^2 \\cdot b = b^3$$\n      <p class=\"text-slate-200\">• Theo giả thiết bài toán:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$b^3 = 216 \\iff b = \\sqrt[3]{216} = 6$$\n      </div>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Kết luận:</b> Số thứ hai là $b = 6$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Đây là bài toán kinh điển áp dụng tính chất trung bình nhân: Vì a, b, c lập thành cấp số nhân nên tích của số đầu và số cuối bằng bình phương số ở giữa: a nhân c bằng b bình phương. Khi đó, tích của cả ba số là: a nhân b nhân c, ta nhóm a nhân c lại được b bình phương nhân với b, bằng b mũ ba. Theo đề bài, tích này bằng hai trăm mười sáu. Ta có phương trình: b mũ ba bằng hai trăm mười sáu. Lấy căn bậc ba hai vế, ta tìm được ngay b bằng sáu. Đáp án chính xác là B.",
      "startTime": 250.56,
      "endTime": 294.46,
      "duration": 43.9
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ CẤP SỐ NHÂN",
      "subtitle": "DÃY ĐAN DẤU KHI $q < 0$ VÀ TRƯỜNG HỢP $q = 0$",
      "mascotMode": "explain",
      "mascotTip": "Khi q < 0, dãy đan dấu (+, -, +, -) nên không phải dãy tăng cũng không phải dãy giảm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Bẫy Thi Phổ Biến Về Cấp Số Nhân</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Ngộ nhận tính đơn điệu khi $q < 0$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Ví dụ dãy $2, -6, 18, -54...$ có $q = -3 < 0$.<br/>\n          Dãy số này <b>KHÔNG TĂNG, KHÔNG GIẢM</b> vì các số hạng đan dấu!<br/>\n          👉 Tuyệt đối không kết luận dãy giảm khi $q < 0$!\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Quên dấu $\\pm$ khi khai căn</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Từ $q^2 = 4 \\implies q = \\pm 2$ (có 2 giá trị công bội).<br/>\n          Nếu đề bài không cho dữ kiện \"các số hạng dương\", bỏ sót $q = -2$ sẽ làm mất một nửa số nghiệm!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý hai bẫy thi trắc nghiệm rất dễ mất điểm: Thứ nhất, khi công bội q âm, cấp số nhân sẽ luân phiên đổi dấu giữa dương và âm. Khi đó dãy số này là dãy số không tăng, không giảm. Đừng nhầm lẫn cứ công bội q âm là dãy giảm. Thứ hai, khi tính công bội q từ phương trình b bình bằng a nhân c, ta phải lấy căn bậc hai, luôn có hai trường hợp cộng trừ căn bậc hai. Nếu đề bài không cho giả thiết các số dương thì các em phải xét cả hai trường hợp q dương và q âm để không bị sót nghiệm.",
      "startTime": 294.46,
      "endTime": 327.19,
      "duration": 32.74
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "NẮM VỮNG ĐỊNH NGHĨA ĐỂ CHUYỂN SANG MỤC 2: SỐ HẠNG TỔNG QUÁT",
      "mascotMode": "celebrate",
      "mascotTip": "Làm chủ định nghĩa và hệ thức trung bình nhân! Chuyển sang Mục 2 để lập công thức u_n = u_1 * q^{n-1}!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-emerald-900/80 via-teal-900/60 to-slate-900 p-6 rounded-2xl border-2 border-emerald-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-emerald-500/20 rounded-full mb-3 text-3xl\">🦉✨</div>\n    <h3 class=\"text-xl font-black text-emerald-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 1!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã nắm trọn định nghĩa cấp số nhân và hệ thức trung bình nhân $a \\cdot c = b^2$. Hãy chuyển sang Mục 2 để làm chủ công thức Số hạng tổng quát $u_n = u_1 \\cdot q^{n-1}$!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ 4 Ví dụ đã hoàn thành</span>\n      <span class=\"px-4 py-2 bg-teal-500/30 text-teal-300 rounded-lg border border-teal-400/40\">✔ Hệ thức $a \\cdot c = b^2$</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 2</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục một của Bài bảy. Chúng ta đã làm chủ định nghĩa cấp số nhân, công bội q và tính chất trung bình nhân tuyệt vời. Ngay bây giờ, mời các em cùng chuyển sang Mục hai để khám phá công thức số hạng tổng quát u n, chìa khóa để tính nhanh số hạng bất kỳ theo cấp số nhân.",
      "startTime": 327.19,
      "endTime": 346.39,
      "duration": 19.2
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai7_muc1 = window.G11_CHAPTER2_DATA.g11_bai7_muc1;

  window.G11_CHAPTER2_DATA.g11_bai7_muc2 = {
  "lessonId": "toan11_bai7",
  "lessonTitle": "Bài 7: Cấp số nhân",
  "sectionId": "g11_bai7_muc2",
  "sectionTitle": "Mục 2: Số hạng tổng quát của cấp số nhân & Tính chất ba số hạng liên tiếp",
  "audio": "/audio/g11_bai7_muc2.mp3",
  "audioSrc": "./audio/g11_bai7_muc2.mp3",
  "audio_src": "./audio/g11_bai7_muc2.mp3",
  "title": "Mục 2: Số hạng tổng quát của cấp số nhân & Tính chất ba số hạng liên tiếp",
  "owl_tip": "Số hạng tổng quát u_n = u_1 * q^{n - 1}. Tính chất 3 số hạng liên tiếp: u_{k-1} * u_{k+1} = (u_k)^2!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ NHÂN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. PHƯƠNG PHÁP CHIA VẾ TÌM $u_1$ VÀ $q$",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ SỐ HẠNG TỔNG QUÁT CSN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 351.55,
  "formattedDuration": "05:51",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH LÝ SỐ HẠNG TỔNG QUÁT CỦA CẤP SỐ NHÂN",
      "subtitle": "BÀI 7 • CẤP SỐ NHÂN • MỤC 2: CÔNG THỨC $u_n = u_1 \\cdot q^{n-1}$",
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc vàng: Để đi từ u_1 đến u_n, ta nhân thêm (n - 1) lần công bội q: u_n = u_1 * q^{n-1}!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-900/60 to-indigo-900/40 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-blue-500/20 text-blue-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Định lý trọng tâm</span>\n      <h3 class=\"text-xl font-black text-blue-200\">Công Thức Số Hạng Tổng Quát $u_n$</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Tính số hạng bất kỳ theo số hạng đầu $u_1$ và công bội $q$:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-blue-400 shadow-md\">\n      <h4 class=\"font-bold text-blue-300 text-sm mb-1\">1. Công thức số hạng tổng quát</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        $$u_n = u_1 \\cdot q^{n-1}, \\quad \\forall n \\ge 1$$\n        • $u_1$: số hạng đầu tiên.<br/>\n        • $q$: công bội.<br/>\n        • Số mũ là: $n - 1$ (chứ không phải $n$!).\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md\">\n      <h4 class=\"font-bold text-indigo-300 text-sm mb-1\">2. Mối liên hệ 2 số hạng bất kỳ</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Với hai số hạng $u_m$ và $u_n$ bất kỳ ($m > n$):\n        $$\\frac{u_m}{u_n} = q^{m - n} \\iff u_m = u_n \\cdot q^{m - n}$$\n        👉 <i>Chia vế cho vế để tìm công bội $q$ cực nhanh!</i>\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục hai: Số hạng tổng quát của cấp số nhân. Nếu biết số hạng đầu u một và công bội q, ta có thể tính ngay lập tức bất kỳ số hạng u n nào mà không cần nhân liên tiếp từng bước. Định lý nêu rõ: Nếu cấp số nhân u n có số hạng đầu u một và công bội q thì số hạng tổng quát u n được xác định bởi công thức: u n bằng u một nhân q mũ n trừ một, với mọi n lớn hơn hoặc bằng hai. Hãy đặc biệt lưu ý số mũ của q là n trừ một chứ không phải n, vì từ số hạng thứ nhất đến số hạng thứ n, ta chỉ cần nhân qua n trừ một lần công bội q.",
      "startTime": 0.0,
      "endTime": 38.52,
      "duration": 38.52
    },
    {
      "sceneIndex": 2,
      "title": "2. PHƯƠNG PHÁP CHIA VẾ TÌM $u_1$ VÀ $q$",
      "subtitle": "KỸ NĂNG XỬ LÝ HỆ PHƯƠNG TRÌNH CẤP SỐ NHÂN",
      "mascotMode": "explain",
      "mascotTip": "Hệ phương trình CSN giải bằng cách CHIA hai vế cho nhau để triệt tiêu u_1, tìm ra q^{m-n}!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-blue-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-blue-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-blue-300\">Quy Trình Chia Vế Tìm $u_1$ Và Công Bội $q$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">Giả sử bài toán cho biết $u_p = A$ và $u_q = B$ ($p < q$):</p>\n      <div class=\"text-center font-bold text-blue-300 text-sm py-1\">\n        $$\\begin{cases} u_1 \\cdot q^{p-1} = A \\\\ u_1 \\cdot q^{q-1} = B \\end{cases} \\implies \\frac{u_1 \\cdot q^{q-1}}{u_1 \\cdot q^{p-1}} = \\frac{B}{A} \\implies q^{q - p} = \\frac{B}{A}$$\n      </div>\n      <p class=\"text-slate-300\">👉 Khai căn để tìm $q$, sau đó thay vào tìm $u_1 = \\frac{A}{q^{p-1}}$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi gặp bài toán cho biết hai số hạng bất kỳ của cấp số nhân, ví dụ u hai và u năm, phương pháp giải tối ưu nhất là chia phương trình thứ hai cho phương trình thứ nhất. Khi đó số hạng đầu u một ở cả tử và mẫu bị triệt tiêu hoàn toàn, ta chỉ còn lại q mũ năm trừ hai bằng q mũ ba. Từ đó ta giải tìm được q, rồi thay ngược lại để tìm u một. Phương pháp chia vế này giúp đơn giản hóa mọi bài toán hệ phương trình cấp số nhân.",
      "startTime": 38.52,
      "endTime": 65.83,
      "duration": 27.31
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG THỨ 8 CỦA CSN",
      "subtitle": "DẠNG 1 • CHO BIẾT $u_1 = 3, q = 2$, TÍNH $u_8$",
      "mascotMode": "think",
      "mascotTip": "u_8 = u_1 * q^7 = 3 * 2^7 = 3 * 128. Tính cẩn thận lũy thừa!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-blue-950/80 to-slate-900 p-5 rounded-2xl border-2 border-blue-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Tính $u_8$</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-blue-200 mb-2\">Tìm số hạng thứ 8 của cấp số nhân</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Số hạng $u_8$ bằng:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $u_8 = 384$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $u_8 = 768$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $u_8 = 192$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $u_8 = 256$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Cho cấp số nhân u n có số hạng đầu u một bằng ba và công bội q bằng hai. Hãy tính số hạng thứ tám u tám của cấp số nhân đó. Các em có mười lăm giây để tính toán.",
      "startTime": 65.83,
      "endTime": 79.61,
      "duration": 13.78
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $u_8 = 384$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "u_8 = 3 * 2^7 = 3 * 128 = 384. Chúc mừng các em chọn A!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-blue-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-blue-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-blue-300\">Áp dụng công thức $u_n = u_1 \\cdot q^{n-1}$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Với $n = 8$:</p>\n      $$u_8 = u_1 \\cdot q^{8 - 1} = u_1 \\cdot q^7$$\n      <p class=\"text-slate-200\">• Thay $u_1 = 3$ và $q = 2$ vào:</p>\n      <div class=\"text-center font-bold text-blue-300 text-sm py-1\">\n        $$u_8 = 3 \\cdot 2^7 = 3 \\cdot 128 = 384$$\n      </div>\n      <div class=\"p-2.5 bg-blue-500/20 border-l-4 border-blue-400 rounded text-blue-200 mt-2\">\n        👉 <b>Đáp án chọn: A ($u_8 = 384$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Áp dụng công thức số hạng tổng quát: u n bằng u một nhân q mũ n trừ một. Với n bằng tám, ta có: u tám bằng u một nhân q mũ tám trừ một, tức bằng u một nhân q mũ bảy. Thay số vào: u một bằng ba, q bằng hai, ta có ba nhân hai mũ bảy. Hai mũ bảy bằng một trăm hai mươi tám; ba nhân một trăm hai mươi tám bằng ba trăm tám mươi tư. Đáp án chính xác là A.",
      "startTime": 79.61,
      "endTime": 109.8,
      "duration": 30.19
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $u_1$ VÀ $q$ KHI BIẾT $u_2 = 6, u_5 = 48$",
      "subtitle": "DẠNG 2 • CHIA HAI VẾ ĐỂ TÌM CÔNG BỘI $q$",
      "mascotMode": "think",
      "mascotTip": "u_5 / u_2 = q^3 = 48 / 6 = 8 => q = 2. Sau đó u_1 = u_2 / q = 6 / 2 = 3!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-950/80 to-slate-900 p-5 rounded-2xl border-2 border-indigo-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Tìm $u_1, q$</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-indigo-200 mb-2\">Tìm $u_1$ và $q$ khi biết $u_2 = 6, u_5 = 48$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số nhân $(u_n)$ có $u_2 = 6$ và $u_5 = 48$. Giá trị của $u_1$ và $q$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $u_1 = 2; q = 3$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $u_1 = 3; q = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $u_1 = 3; q = -2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $u_1 = 4; q = 2$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Cho cấp số nhân u n có số hạng thứ hai u hai bằng sáu và số hạng thứ năm u năm bằng bốn mươi tám. Hãy tìm số hạng đầu u một và công bội q của cấp số nhân này. Các em có ba mươi giây để tính toán.",
      "startTime": 109.8,
      "endTime": 125.14,
      "duration": 15.34
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $u_1 = 3$ VÀ $q = 2$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "q^3 = 48 / 6 = 8 => q = 2. u_1 = 6 / 2 = 3. Hoàn toàn chuẩn xác!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-indigo-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-indigo-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-indigo-300\">Chia hai phương trình cho nhau</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có hệ phương trình:</p>\n      $$\\begin{cases} u_1 \\cdot q = 6 \\\\ u_1 \\cdot q^4 = 48 \\end{cases}$$\n      <p class=\"text-slate-200\">• Lấy phương trình thứ hai chia phương trình thứ nhất:</p>\n      $$\\frac{u_1 \\cdot q^4}{u_1 \\cdot q} = \\frac{48}{6} \\iff q^3 = 8 \\iff q = 2$$\n      <p class=\"text-slate-200\">• Thay $q = 2$ vào phương trình thứ nhất:</p>\n      $$u_1 \\cdot 2 = 6 \\iff u_1 = 3$$\n      <div class=\"p-2.5 bg-indigo-500/20 border-l-4 border-indigo-400 rounded text-indigo-200 mt-2\">\n        👉 <b>Kết luận:</b> $u_1 = 3$ và $q = 2$. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Ta có hệ phương trình: u hai bằng u một nhân q bằng sáu. u năm bằng u một nhân q mũ bốn bằng bốn mươi tám. Lấy phương trình dưới chia cho phương trình trên: u một nhân q mũ bốn chia cho u một nhân q bằng q mũ ba. Bốn mươi tám chia sáu bằng tám. Ta có phương trình: q mũ ba bằng tám, suy ra q bằng căn bậc ba của tám bằng hai. Thay q bằng hai vào phương trình đầu tiên: u một nhân hai bằng sáu, suy ra u một bằng sáu chia hai bằng ba. Như vậy, số hạng đầu u một bằng ba và công bội q bằng hai. Đáp án chính xác là B.",
      "startTime": 125.14,
      "endTime": 172.27,
      "duration": 47.14
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÌM VỊ TRÍ CỦA SỐ 729/2 TRONG DÃY",
      "subtitle": "DẠNG 3 • GIẢI PHƯƠNG TRÌNH MŨ TÌM CHỈ SỐ $n$",
      "mascotMode": "think",
      "mascotTip": "(1/2) * 3^{n-1} = 729/2 <=> 3^{n-1} = 729 = 3^6 <=> n - 1 = 6 <=> n = 7!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Vị Trí Số Hạng</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Số 729/2 là số hạng thứ mấy?</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Cho cấp số nhân $(u_n)$ có $u_1 = \\frac{1}{2}$ và $q = 3$. Số $\\frac{729}{2}$ là số hạng thứ mấy?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> Số hạng thứ 7</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> Số hạng thứ 6</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> Số hạng thứ 8</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> Không thuộc dãy</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Cho cấp số nhân u n có số hạng đầu u một bằng một phần hai và công bội q bằng ba. Hỏi số bảy trăm hai mươi chín phần hai là số hạng thứ bao nhiêu của cấp số nhân đó? Các em có mười lăm giây để giải phương trình mũ.",
      "startTime": 172.27,
      "endTime": 187.87,
      "duration": 15.6
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $n = 7 \\implies \\frac{729}{2} = u_7$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "explain",
      "mascotTip": "3^{n-1} = 729 = 3^6 => n - 1 = 6 => n = 7 (u_7 = 729/2)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Giải phương trình mũ cơ bản</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có phương trình $u_n = \\frac{729}{2}$:</p>\n      $$\\frac{1}{2} \\cdot 3^{n-1} = \\frac{729}{2} \\iff 3^{n-1} = 729$$\n      <p class=\"text-slate-200\">• Đưa về cùng cơ số 3:</p>\n      $$3^{n-1} = 3^6 \\iff n - 1 = 6 \\iff n = 7$$\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 <b>Kết luận:</b> Số $\\frac{729}{2}$ là số hạng thứ $7$ ($u_7 = \\frac{729}{2}$). <br/>\n        👉 <b>Đáp án chọn: A</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta giải phương trình u n bằng bảy trăm hai mươi chín phần hai: một phần hai nhân ba mũ n trừ một bằng bảy trăm hai mươi chín phần hai. Nhân cả hai vế với hai để triệt tiêu mẫu số, ta được: ba mũ n trừ một bằng bảy trăm hai mươi chín. Ta biết rằng bảy trăm hai mươi chín chính là ba mũ sáu: ba mũ hai là chín, chín mũ ba là bảy trăm hai mươi chín. Do đó n trừ một bằng sáu, suy ra n bằng sáu cộng một bằng bảy. Vậy số bảy trăm hai mươi chín phần hai chính là số hạng thứ bảy u bảy của cấp số nhân. Đáp án chọn là A.",
      "startTime": 187.87,
      "endTime": 226.34,
      "duration": 38.47
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: TĂNG TRƯỞNG QUẦN THỂ VI KHUẨN",
      "subtitle": "DẠNG 4 • BÀI TOÁN SINH HỌC THỰC TẾ NHÂN ĐÔI MỖI GIỜ",
      "mascotMode": "think",
      "mascotTip": "Ban đầu có 1000 con. Sau mỗi giờ nhân đôi (q = 2). Sau 6 giờ: N(6) = 1000 * 2^6!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Sinh Học Thực Tế</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Tăng trưởng số lượng vi khuẩn sau 6 giờ</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Quần thể vi khuẩn ban đầu có $1000$ con, nhân đôi sau mỗi giờ. Sau $6$ giờ, số lượng vi khuẩn là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> 32000 con</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> 64000 con</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> 128000 con</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> 60000 con</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn là bài toán sinh học thực tế tiêu biểu: Một quần thể vi khuẩn ban đầu có một nghìn cá thể. Trong điều kiện nuôi cấy lý tưởng, cứ sau mỗi giờ số lượng vi khuẩn lại nhân đôi. Hỏi sau sáu giờ, quần thể đó có tất cả bao nhiêu con vi khuẩn? Các em có ba mươi giây để tính toán.",
      "startTime": 226.34,
      "endTime": 246.02,
      "duration": 19.68
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: 64000 CON VI KHUẨN (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "N = 1000 * 2^6 = 1000 * 64 = 64000 con. Tăng trưởng hàm mũ cực nhanh!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Mô hình tăng trưởng hàm mũ</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Số lượng ban đầu ($t = 0$): $N_0 = 1000$.</p>\n      <p class=\"text-slate-200\">• Sau $t$ giờ, số lượng nhân đôi liên tiếp $t$ lần:</p>\n      $$N(t) = 1000 \\cdot 2^t$$\n      <p class=\"text-slate-200\">• Với $t = 6$ giờ:</p>\n      <div class=\"text-center font-bold text-emerald-300 text-sm py-1\">\n        $$N(6) = 1000 \\cdot 2^6 = 1000 \\cdot 64 = 64000 \\text{ (con vi khuẩn)}$$\n      </div>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        👉 <b>Kết luận:</b> Sau 6 giờ có $64000$ con vi khuẩn. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Ban đầu tại thời điểm không giờ, số lượng vi khuẩn là một nghìn con. Sau một giờ, số lượng là một nghìn nhân hai bằng hai nghìn con. Sau hai giờ, số lượng là một nghìn nhân hai mũ hai bằng bốn nghìn con. Tổng quát, sau t giờ số lượng vi khuẩn được mô hình bởi công thức: N theo t bằng một nghìn nhân hai mũ t con. Với t bằng sáu giờ, ta có: N tại sáu bằng một nghìn nhân hai mũ sáu. Hai mũ sáu bằng sáu mươi tư; một nghìn nhân sáu mươi tư bằng sáu mươi tư nghìn con vi khuẩn. Đáp án chính xác là B.",
      "startTime": 246.02,
      "endTime": 289.75,
      "duration": 43.73
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ SỐ HẠNG TỔNG QUÁT CSN",
      "subtitle": "LỖI NHẦM SỐ MŨ $q^n$ VÀ LỖI DẤU NGOẶC VỚI CÔNG BỘI ÂM",
      "mascotMode": "explain",
      "mascotTip": "Luôn viết u_n = u_1 * q^{n-1} (số mũ n-1). Khi q âm, bắt buộc phải để trong ngoặc: (-q)^{n-1}!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Lỗi Sai Phổ Biến Về Công Thức $u_n$</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Nhầm số mũ $q^n$</h4>\n        <p class=\"text-slate-300 leading-relaxed font-mono\">\n          $u_n = u_1 \\cdot q^n$ (SAI!)<br/>\n          Chính xác phải là: $\\mathbf{q^{n-1}}$!<br/>\n          Ví dụ $u_5 = u_1 \\cdot q^4$, không phải $u_1 \\cdot q^5$.\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Quên ngoặc khi $q < 0$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Với $q = -2$: $(-2)^4 = +16$.<br/>\n          Nếu bấm máy viết $-2^4 = -16$ sẽ làm sai dấu toàn bộ bài toán trắc nghiệm!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý hai lỗi sai rất hay gặp khi làm bài tập số hạng tổng quát cấp số nhân: Thứ nhất là nhầm số mũ của q thành n thay vì n trừ một. Ví dụ số hạng thứ mười là u một nhân q mũ chín chứ không phải q mũ mười. Thứ hai, khi công bội q là số âm hoặc phân số, các em bắt buộc phải để q trong dấu ngoặc tròn trước khi nâng lên lũy thừa. Ví dụ trừ ba tất cả mũ bốn bằng dương tám mươi mốt, nhưng nếu không viết ngoặc thì máy tính sẽ hiểu là trừ của ba mũ bốn bằng trừ tám mươi mốt, dẫn đến sai dấu hoàn toàn.",
      "startTime": 289.75,
      "endTime": 331.2,
      "duration": 41.45
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "LÀM CHỦ CÔNG THỨC $u_n$ ĐỂ CHUYỂN SANG MỤC 3: TÍNH TỔNG $S_n$",
      "mascotMode": "celebrate",
      "mascotTip": "Ghi nhớ công thức u_n = u_1 * q^{n-1}! Sẵn sàng bước sang Mục 3 để tính tổng S_n và bài toán lãi kép!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-blue-900/80 via-indigo-900/60 to-slate-900 p-6 rounded-2xl border-2 border-blue-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-blue-500/20 rounded-full mb-3 text-3xl\">🎯🚀</div>\n    <h3 class=\"text-xl font-black text-blue-200 mb-2\">Chúc Mừng Em Hoàn Thành Mục 2!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã thành thạo kỹ thuật tìm số hạng $u_n = u_1 \\cdot q^{n-1}$, chia vế tìm $q$ và giải phương trình mũ. Hãy chuyển sang Mục 3 để chinh phục công thức Tính Tổng $S_n$!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40\">✔ 4 Ví dụ hoàn thành</span>\n      <span class=\"px-4 py-2 bg-indigo-500/30 text-indigo-300 rounded-lg border border-indigo-400/40\">✔ Kỹ thuật chia vế tìm $q$</span>\n      <span class=\"px-4 py-2 bg-amber-500/30 text-amber-300 rounded-lg border border-amber-400/40\">🚀 Chuyển sang Mục 3</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục hai. Chúng ta đã làm chủ công thức số hạng tổng quát của cấp số nhân, phương pháp chia vế tìm u một và q, cùng bài toán tăng trưởng vi khuẩn thực tế. Ngay bây giờ, mời các em bước sang Mục ba: Tổng n số hạng đầu tiên của cấp số nhân và bài toán gửi tiết kiệm lãi kép ngân hàng.",
      "startTime": 331.2,
      "endTime": 351.55,
      "duration": 20.35
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai7_muc2 = window.G11_CHAPTER2_DATA.g11_bai7_muc2;

  window.G11_CHAPTER2_DATA.g11_bai7_muc3 = {
  "lessonId": "toan11_bai7",
  "lessonTitle": "Bài 7: Cấp số nhân",
  "sectionId": "g11_bai7_muc3",
  "sectionTitle": "Mục 3: Tổng n số hạng đầu tiên của cấp số nhân & Bài toán lãi kép",
  "audio": "/audio/g11_bai7_muc3.mp3",
  "audioSrc": "./audio/g11_bai7_muc3.mp3",
  "audio_src": "./audio/g11_bai7_muc3.mp3",
  "title": "Mục 3: Tổng n số hạng đầu tiên của cấp số nhân & Bài toán lãi kép",
  "owl_tip": "Tổng n số hạng đầu: S_n = u_1(1 - q^n)/(1 - q) (q khác 1). Bài toán tăng trưởng vi khuẩn, lãi kép, phân rã!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. CÔNG THỨC TÍNH TỔNG $n$ SỐ HẠNG ĐẦU TIÊN CỦA CSN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. TỔNG CẤP SỐ NHÂN LÙI VÔ HẠN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI VỀ TÍNH TỔNG CẤP SỐ NHÂN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT TOÀN DIỆN CHƯƠNG 2 & LỜI CHÚC TỪ CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 404.04,
  "formattedDuration": "06:44",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CÔNG THỨC TÍNH TỔNG $n$ SỐ HẠNG ĐẦU TIÊN CỦA CSN",
      "subtitle": "BÀI 7 • CẤP SỐ NHÂN • MỤC 3: CÔNG THỨC $S_n = \\frac{u_1(1 - q^n)}{1 - q}$",
      "mascotMode": "pointer",
      "mascotTip": "Quy tắc vàng: S_n = u_1 * (1 - q^n) / (1 - q) với q khác 1. Nếu q = 1 thì S_n = n * u_1!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-pink-900/40 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-purple-500/20 text-purple-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Công thức cốt lõi</span>\n      <h3 class=\"text-xl font-black text-purple-200\">Công Thức Tính Tổng $S_n$ Của Cấp Số Nhân</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Tổng $S_n = u_1 + u_2 + \\dots + u_n$ của cấp số nhân:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-purple-400 shadow-md\">\n      <h4 class=\"font-bold text-purple-300 text-sm mb-1\">Trường hợp $q \\ne 1$</h4>\n      $$S_n = \\frac{u_1(1 - q^n)}{1 - q} = \\frac{u_1(q^n - 1)}{q - 1}$$\n      👉 Số mũ của $q$ đúng bằng số lượng số hạng $n$.\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-pink-400 shadow-md\">\n      <h4 class=\"font-bold text-pink-300 text-sm mb-1\">Trường hợp $q = 1$</h4>\n      $$S_n = n \\cdot u_1$$\n      👉 Mọi số hạng đều bằng $u_1$ (dãy số hằng).\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục ba: Tổng n số hạng đầu tiên của cấp số nhân. Cho cấp số nhân u n có số hạng đầu u một và công bội q. Nếu công bội q khác một, tổng của n số hạng đầu tiên S n bằng u một cộng u hai cộng chấm chấm chấm cộng u n được tính bởi công thức: S n bằng u một nhân mở ngoặc một trừ q mũ n đóng ngoặc, tất cả chia cho một trừ q; hoặc có thể viết tương đương là u một nhân mở ngoặc q mũ n trừ một đóng ngoặc chia cho q trừ một. Nếu công bội q bằng một thì tất cả các số hạng đều bằng u một, khi đó tổng S n đơn giản bằng n nhân u một.",
      "startTime": 0.0,
      "endTime": 48.24,
      "duration": 48.24
    },
    {
      "sceneIndex": 2,
      "title": "2. TỔNG CẤP SỐ NHÂN LÙI VÔ HẠN",
      "subtitle": "KHI CÔNG BỘI CÓ TRỊ TUYỆT ĐỐI NHỎ HƠN 1 ($|q| < 1$)",
      "mascotMode": "explain",
      "mascotTip": "Khi |q| < 1, q^n tiến về 0 khi n ra vô cùng. Tổng vô hạn là: S = u_1 / (1 - q)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"w-3 h-3 rounded-full bg-purple-400 animate-pulse\"></span>\n      <h3 class=\"text-lg font-bold text-purple-300\">Tổng Cấp Số Nhân Lùi Vô Hạn ($|q| < 1$)</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">Khi $|q| < 1$, ta có $\\lim_{n \\to \\infty} q^n = 0$. Khi đó tổng vô hạn:</p>\n      <div class=\"text-center font-bold text-purple-300 text-base py-1\">\n        $$S = u_1 + u_2 + u_3 + \\dots = \\frac{u_1}{1 - q}$$\n      </div>\n      <p class=\"text-slate-300\">👉 <b>Ví dụ:</b> $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = \\frac{1}{1 - 1/2} = 2$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một trường hợp đặc biệt và vô cùng kỳ thú của cấp số nhân là Cấp số nhân lùi vô hạn. Đó là cấp số nhân có trị tuyệt đối của công bội q nhỏ hơn một. Khi số lượng số hạng n tăng lên vô hạn, q mũ n sẽ dần tiến về số không. Khi đó, tổng của toàn bộ vô hạn các số hạng trong dãy số sẽ hội tụ về một số hữu hạn duy nhất: S bằng u một chia cho một trừ q. Công thức này giúp chúng ta tính được các tổng vô hạn như một cộng một phần hai cộng một phần tư cộng một phần tám chấm chấm chấm có kết quả đúng bằng hai.",
      "startTime": 48.24,
      "endTime": 80.14,
      "duration": 31.9
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH TỔNG 8 SỐ HẠNG ĐẦU TIÊN",
      "subtitle": "DẠNG 1 • CHO BIẾT $u_1 = 2, q = 3$, TÍNH $S_8$",
      "mascotMode": "think",
      "mascotTip": "S_8 = 2 * (1 - 3^8) / (1 - 3) = 2 * (1 - 6561) / (-2) = 6561 - 1 = 6560!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-950/80 to-slate-900 p-5 rounded-2xl border-2 border-purple-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 1 • Tính $S_8$</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-purple-200 mb-2\">Tính tổng $S_8$ khi $u_1 = 2, q = 3$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Tổng 8 số hạng đầu tiên của cấp số nhân có $u_1 = 2, q = 3$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $S_8 = 6560$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $S_8 = 6561$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $S_8 = 4374$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $S_8 = 2187$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số một: Tính tổng của tám số hạng đầu tiên của cấp số nhân u n, biết số hạng đầu u một bằng hai và công bội q bằng ba. Các em có mười lăm giây để tính ra kết quả.",
      "startTime": 80.14,
      "endTime": 92.26,
      "duration": 12.12
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $S_8 = 6560$ (CHỌN ĐÁP ÁN A)",
      "mascotMode": "cheer",
      "mascotTip": "S_8 = 2 * (3^8 - 1)/(3 - 1) = 3^8 - 1 = 6561 - 1 = 6560. Chúc mừng các em chọn A!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-purple-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-purple-300\">Áp dụng công thức $S_n = \\frac{u_1(q^n - 1)}{q - 1}$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Thay số với $n = 8, u_1 = 2, q = 3$:</p>\n      $$S_8 = \\frac{2(3^8 - 1)}{3 - 1} = \\frac{2(3^8 - 1)}{2} = 3^8 - 1$$\n      <div class=\"text-center font-bold text-purple-300 text-sm py-1\">\n        $$S_8 = 6561 - 1 = 6560$$\n      </div>\n      <div class=\"p-2.5 bg-purple-500/20 border-l-4 border-purple-400 rounded text-purple-200 mt-2\">\n        👉 <b>Đáp án chọn: A ($S_8 = 6560$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Áp dụng công thức tính tổng: S n bằng u một nhân mở ngoặc q mũ n trừ một đóng ngoặc chia cho q trừ một. Với n bằng tám, ta có: S tám bằng hai nhân mở ngoặc ba mũ tám trừ một đóng ngoặc chia cho ba trừ một. Ở mẫu số, ba trừ một bằng hai, triệt tiêu với số hai ở tử số. Kết quả còn lại đúng ba mũ tám trừ một. Ta tính: ba mũ tám bằng sáu nghìn năm trăm sáu mươi mốt; trừ đi một bằng sáu nghìn năm trăm sáu mươi. Đáp án chính xác là A.",
      "startTime": 92.26,
      "endTime": 132.02,
      "duration": 39.77
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÌM $n$ KHI BIẾT TỔNG $S_n = -105$",
      "subtitle": "DẠNG 2 • CHO $u_1 = 5, q = -2, S_n = -105$, TÌM $n$",
      "mascotMode": "think",
      "mascotTip": "5 * [1 - (-2)^n] / [1 - (-2)] = -105 <=> 1 - (-2)^n = -63 <=> (-2)^n = 64 => n = 6!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-pink-950/80 to-slate-900 p-5 rounded-2xl border-2 border-pink-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 2 • Tìm Chỉ Số $n$</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-pink-200 mb-2\">Cho $u_1 = 5, q = -2, S_n = -105$, tìm $n$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Số lượng số hạng $n$ thỏa mãn tổng $S_n = -105$ là:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $n = 5$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $n = 6$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $n = 7$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $n = 8$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số hai: Cho cấp số nhân u n có số hạng đầu u một bằng năm và công bội q bằng trừ hai. Biết rằng tổng n số hạng đầu tiên S n bằng trừ một trăm lẻ năm. Hỏi n bằng bao nhiêu? Các em có ba mươi giây để giải phương trình tìm n.",
      "startTime": 132.02,
      "endTime": 150.26,
      "duration": 18.24
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $n = 6$ (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "(-2)^n = 64 = (-2)^6 => n = 6. Vì 6 là số chẵn nên (-2)^6 ra dương 64!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-pink-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-pink-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-pink-300\">Giải phương trình mũ tìm $n$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Ta có phương trình:</p>\n      $$\\frac{5[1 - (-2)^n]}{1 - (-2)} = -105 \\iff \\frac{5[1 - (-2)^n]}{3} = -105$$\n      <p class=\"text-slate-200\">• Rút gọn phương trình:</p>\n      $$1 - (-2)^n = \\frac{-105 \\times 3}{5} = -63 \\iff (-2)^n = 64$$\n      <p class=\"text-slate-200\">• Vì $64 = (-2)^6$ nên:</p>\n      <div class=\"text-center font-bold text-pink-300 text-sm py-1\">\n        $$(-2)^n = (-2)^6 \\iff n = 6$$\n      </div>\n      <div class=\"p-2.5 bg-pink-500/20 border-l-4 border-pink-400 rounded text-pink-200 mt-2\">\n        👉 <b>Đáp án chọn: B ($n = 6$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết ba mươi giây. Ta áp dụng công thức: S n bằng u một nhân mở ngoặc một trừ q mũ n đóng ngoặc chia cho một trừ q. Thay số vào: năm nhân mở ngoặc một trừ trừ hai tất cả mũ n đóng ngoặc, chia cho một trừ đi trừ hai, bằng trừ một trăm lẻ năm. Ở mẫu số: một trừ đi trừ hai bằng ba. Nhân ba sang vế phải và chia cho năm: trừ một trăm lẻ năm nhân ba chia năm bằng trừ sáu mươi ba. Ta có phương trình: một trừ trừ hai mũ n bằng trừ sáu mươi ba, suy ra trừ hai tất cả mũ n bằng sáu mươi tư. Vì sáu mươi tư bằng hai mũ sáu, và cũng bằng trừ hai tất cả mũ sáu, nên ta suy ra n bằng sáu. Đáp án chính xác là B.",
      "startTime": 150.26,
      "endTime": 204.19,
      "duration": 53.93
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÍNH TỔNG DÃY PHÂN SỐ LŨY THỪA",
      "subtitle": "DẠNG 3 • TÍNH TỔNG $S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{256}$",
      "mascotMode": "think",
      "mascotTip": "u_1 = 1, q = 1/2. Số cuối 1/256 = (1/2)^8 => Có 9 số hạng (n = 9). Tính S!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-amber-950/80 to-slate-900 p-5 rounded-2xl border-2 border-amber-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 3 • Tổng Hữu Hạn</span>\n      <span class=\"countdown-clock-widget cd-15s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 15s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-amber-200 mb-2\">Tính tổng $S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{256}$</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Giá trị của tổng $S$ bằng:\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> $S = \\frac{255}{128}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> $S = 2$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> $S = \\frac{511}{256}$</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> $S = \\frac{255}{256}$</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số ba: Tính tổng S bằng một cộng một phần hai cộng một phần tư cộng chấm chấm chấm cộng một phần hai trăm năm mươi sáu. Các em có mười lăm giây để tính tổng cấp số nhân này.",
      "startTime": 204.19,
      "endTime": 215.66,
      "duration": 11.47
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ $S = \\frac{511}{256}$ (CHỌN ĐÁP ÁN C)",
      "mascotMode": "explain",
      "mascotTip": "S = 1 * [1 - (1/2)^9] / (1 - 1/2) = 2 * (1 - 1/512) = 511/256!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-amber-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-amber-300\">Xác định số lượng số hạng $n = 9$</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Dãy là CSN có: $u_1 = 1, q = \\frac{1}{2}$.</p>\n      <p class=\"text-slate-200\">• Số hạng cuối: $u_n = u_1 \\cdot q^{n-1} = 1 \\cdot \\left(\\frac{1}{2}\\right)^{n-1} = \\frac{1}{256} = \\left(\\frac{1}{2}\\right)^8 \\implies n = 9$.</p>\n      <p class=\"text-slate-200\">• Áp dụng công thức tính tổng $S_9$:</p>\n      <div class=\"text-center font-bold text-amber-300 text-sm py-1\">\n        $$S = \\frac{1 \\cdot \\left[1 - \\left(\\frac{1}{2}\\right)^9\\right]}{1 - \\frac{1}{2}} = 2 \\cdot \\left(1 - \\frac{1}{512}\\right) = 2 \\cdot \\frac{511}{512} = \\frac{511}{256}$$\n      </div>\n      <div class=\"p-2.5 bg-amber-500/20 border-l-4 border-amber-400 rounded text-amber-200 mt-2\">\n        👉 <b>Đáp án chọn: C ($S = \\frac{511}{256}$)</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta nhận thấy đây là tổng của một cấp số nhân có số hạng đầu u một bằng một, công bội q bằng một phần hai. Số hạng cuối cùng là một phần hai trăm năm mươi sáu, bằng một phần hai tất cả mũ tám. Vì số hạng thứ n có số mũ là n trừ một, nên n trừ một bằng tám, suy ra tổng này có tất cả n bằng chín số hạng. Áp dụng công thức tính tổng: S bằng một nhân mở ngoặc một trừ mở ngoặc một phần hai đóng ngoặc mũ chín, tất cả chia cho một trừ một phần hai. Ở mẫu số: một trừ một phần hai bằng một phần hai. Chia cho một phần hai tức là nhân với hai: hai nhân mở ngoặc một trừ một phần năm trăm mười hai đóng ngoặc, bằng hai nhân năm trăm mười một phần năm trăm mười hai, rút gọn được năm trăm mười một phần hai trăm năm mươi sáu. Đáp án chính xác là C.",
      "startTime": 215.66,
      "endTime": 265.49,
      "duration": 49.82
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ GẤP ĐÔI TIỀN TIẾT KIỆM",
      "subtitle": "DẠNG 4 • TÍNH THỜI GIAN ĐẦU TƯ SINH LỜI THEO LÃI KÉP",
      "mascotMode": "think",
      "mascotTip": "Gửi 50 triệu lãi 7%/năm. Cần số tiền >= 100 triệu: 50 * (1.07)^n >= 100 <=> 1.07^n >= 2!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-950/80 to-slate-900 p-5 rounded-2xl border-2 border-emerald-500/40 shadow-xl\">\n    <div class=\"flex items-center justify-between mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full uppercase tracking-wider\">Ví dụ 4 • Tài Chính Lãi Kép</span>\n      <span class=\"countdown-clock-widget cd-30s text-amber-400 font-mono font-bold text-sm bg-slate-900/80 px-2.5 py-1 rounded-lg border border-amber-500/30\">⏳ 30s</span>\n    </div>\n    <h3 class=\"text-lg font-bold text-emerald-200 mb-2\">Sau bao nhiêu năm gấp đôi số tiền gửi?</h3>\n    <p class=\"text-slate-200 text-sm leading-relaxed mb-4\">\n      Gửi $50$ triệu đồng, lãi suất $7\\%$/năm lãi kép. Sau ít nhất bao nhiêu năm số tiền nhận được $\\ge 100$ triệu?\n    </p>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>A.</b> 10 năm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>B.</b> 11 năm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>C.</b> 12 năm</div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 text-slate-300\"><b>D.</b> 9 năm</div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ví dụ số bốn là bài toán tài chính ứng dụng cấp số nhân: Bác An gửi tiết kiệm năm mươi triệu đồng vào ngân hàng với lãi suất bảy phần trăm một năm theo thể thức lãi kép. Hỏi sau ít nhất bao nhiêu năm thì bác An nhận được tổng số tiền cả gốc lẫn lãi lớn hơn hoặc bằng một trăm triệu đồng, tức là gấp đôi số tiền ban đầu? Các em có ba mươi giây để tính toán số năm.",
      "startTime": 265.49,
      "endTime": 287.06,
      "duration": 21.58
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: SAU ÍT NHẤT 11 NĂM (CHỌN ĐÁP ÁN B)",
      "mascotMode": "celebrate",
      "mascotTip": "n >= log_{1.07}(2) = 10.24 năm. Vì n là số nguyên năm nên cần ít nhất 11 năm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-5 rounded-2xl border-2 border-emerald-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-emerald-500 text-slate-950 font-black text-xs rounded-full\">Lời Giải Chi Tiết</span>\n      <h3 class=\"text-base font-bold text-emerald-300\">Giải bất phương trình mũ lãi kép</h3>\n    </div>\n    <div class=\"bg-slate-900/80 p-4 rounded-xl border border-slate-700 text-xs leading-relaxed space-y-2\">\n      <p class=\"text-slate-200\">• Số tiền sau $n$ năm là: $T_n = 50(1 + 0{,}07)^n = 50(1{,}07)^n$ (triệu đồng).</p>\n      <p class=\"text-slate-200\">• Yêu cầu bài toán $T_n \\ge 100$:</p>\n      $$50(1{,}07)^n \\ge 100 \\iff (1{,}07)^n \\ge 2$$\n      <p class=\"text-slate-200\">• Lấy logarit cơ số $1{,}07$ hai vế:</p>\n      <div class=\"text-center font-bold text-emerald-300 text-sm py-1\">\n        $$n \\ge \\log_{1{,}07} 2 = \\frac{\\ln 2}{\\ln 1{,}07} \\approx 10{,}24 \\text{ (năm)}$$\n      </div>\n      <p class=\"text-slate-300\">• Vì $n \\in \\mathbb{N}^*$, ta chọn số nguyên nhỏ nhất $n = 11$.</p>\n      <div class=\"p-2.5 bg-emerald-500/20 border-l-4 border-emerald-400 rounded text-emerald-200 mt-2\">\n        👉 <b>Kết luận:</b> Cần ít nhất $11$ năm để gấp đôi số tiền ban đầu. <br/>\n        👉 <b>Đáp án chọn: B</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thời gian đã hết. Lời giải chi tiết: Số tiền bác An nhận được sau n năm được tính theo công thức lãi kép: T n bằng năm mươi nhân mở ngoặc một cộng không phẩy không bảy đóng ngoặc mũ n, tức bằng năm mươi nhân một phẩy không bảy mũ n triệu đồng. Để số tiền gấp đôi, ta có bất phương trình: năm mươi nhân một phẩy không bảy mũ n lớn hơn hoặc bằng một trăm. Chia cả hai vế cho năm mươi, ta được: một phẩy không bảy mũ n lớn hơn hoặc bằng hai. Lấy logarit cơ số một phẩy không bảy cả hai vế, ta được n lớn hơn hoặc bằng logarit cơ số một phẩy không bảy của hai, xấp xỉ mười phẩy hai mươi tư năm. Vì kỳ hạn tính lãi là theo năm nguyên vẹn nên sau mười năm số tiền vẫn chưa đủ gấp đôi. Do đó bác An cần ít nhất mười một năm để số tiền nhận được vượt qua mốc một trăm triệu đồng. Đáp án chính xác là B.",
      "startTime": 287.06,
      "endTime": 339.94,
      "duration": 52.87
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI VỀ TÍNH TỔNG CẤP SỐ NHÂN",
      "subtitle": "QUÊN ĐIỀU KIỆN $q \\ne 1$ VÀ NHẦM LẪN SỐ MŨ $q^n$ VỚI $q^{n-1}$",
      "mascotMode": "explain",
      "mascotTip": "Ở công thức tính tổng S_n, số mũ của q là ĐÚNG n: (1 - q^n). Đừng nhầm thành n - 1!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-rose-950/60 p-5 rounded-2xl border-2 border-rose-500/50 shadow-xl\">\n    <div class=\"flex items-center gap-2 mb-3\">\n      <span class=\"px-3 py-1 bg-rose-500 text-white font-black text-xs rounded-full uppercase\">Cảnh Báo Bẫy Thi</span>\n      <h3 class=\"text-base font-bold text-rose-300\">2 Lỗi Sai Dễ Mắc Phải Khi Tính Tổng $S_n$</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-rose-400\">\n        <h4 class=\"font-bold text-rose-300 mb-1\">❌ Bẫy 1: Nhầm số mũ $q^{n-1}$</h4>\n        <p class=\"text-slate-300 leading-relaxed font-mono\">\n          $S_n = \\frac{u_1(1 - q^{n-1})}{1 - q}$ (SAI!)<br/>\n          Chính xác phải là số mũ $\\mathbf{n}$:<br/>\n          $$S_n = \\frac{u_1(1 - \\mathbf{q^n})}{1 - q}$$\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-2 border-amber-400\">\n        <h4 class=\"font-bold text-amber-300 mb-1\">❌ Bẫy 2: Chia cho 0 khi $q = 1$</h4>\n        <p class=\"text-slate-300 leading-relaxed\">\n          Khi $q = 1$: mẫu số $1 - q = 0$ không xác định.<br/>\n          Phải dùng công thức riêng:<br/>\n          $$S_n = n \\cdot u_1$$\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Thầy Nam Minh lưu ý hai bẫy thi trắc nghiệm thường gặp khi tính tổng cấp số nhân: Thứ nhất là sự nhầm lẫn giữa công thức số hạng tổng quát và công thức tính tổng: Ở số hạng tổng quát u n thì số mũ của q là n trừ một, nhưng ở công thức tính tổng S n thì số mũ của q là n nguyên vẹn. Nhớ rằng có n số hạng thì số mũ là n. Thứ hai là khi công bội q bằng một thì mẫu số một trừ q bằng không, phân thức không xác định. Khi đó ta không dùng công thức phân thức mà dùng công thức S n bằng n nhân u một. Hãy ghi nhớ để không bao giờ bị nhầm lẫn.",
      "startTime": 339.94,
      "endTime": 374.93,
      "duration": 34.99
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT TOÀN DIỆN CHƯƠNG 2 & LỜI CHÚC TỪ CÚ THÔNG THÁI",
      "subtitle": "HOÀN THÀNH XUẤT SẮC TOÀN BỘ BÀI 5, 6, 7 CHƯƠNG 2 TOÁN 11 KNTT!",
      "mascotMode": "celebrate",
      "mascotTip": "Chúc mừng em đã làm chủ trọn vẹn 3 bài học Chương 2: Dãy số, Cấp số cộng và Cấp số nhân!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-slate-900 p-6 rounded-2xl border-2 border-purple-400/40 text-center shadow-2xl\">\n    <div class=\"inline-block p-3 bg-purple-500/20 rounded-full mb-3 text-3xl\">🎓🏆⭐🎉</div>\n    <h3 class=\"text-xl font-black text-purple-200 mb-2\">Chúc Mừng Em Hoàn Thành Xuất Sắc Toàn Bộ Chương 2!</h3>\n    <p class=\"text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mb-4\">\n      Em đã chinh phục trọn vẹn 9 mục bài giảng của cả 3 bài học: Bài 5 (Dãy số), Bài 6 (Cấp số cộng) và Bài 7 (Cấp số nhân) với 36 ví dụ tiêu biểu. Em đã sẵn sàng bứt phá điểm 10 môn Toán 11!\n    </p>\n    <div class=\"flex justify-center gap-4 text-xs font-bold\">\n      <span class=\"px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-lg border border-emerald-400/40\">✔ Bài 5: Dãy số</span>\n      <span class=\"px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg border border-blue-400/40\">✔ Bài 6: Cấp số cộng</span>\n      <span class=\"px-4 py-2 bg-purple-500/30 text-purple-300 rounded-lg border border-purple-400/40\">✔ Bài 7: Cấp số nhân</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng tất cả các em học sinh thân mến đã hoàn thành trọn vẹn toàn bộ ba bài học trọng tâm của Chương hai: Bài năm Dãy số, Bài sáu Cấp số cộng và Bài bảy Cấp số nhân. Các em đã làm chủ đầy đủ chín mục bài giảng với ba mươi sáu ví dụ mẫu mực, các bẫy trắc nghiệm và các bài toán thực tế sinh động. Thầy Nam Minh và Cú Thông Thái tin tưởng rằng các em sẽ hoàn toàn tự tin đạt điểm mười tuyệt đối trong các bài kiểm tra và bài thi sắp tới. Chúc các em luôn học giỏi và đam mê môn Toán!",
      "startTime": 374.93,
      "endTime": 404.04,
      "duration": 29.11
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_bai7_muc3 = window.G11_CHAPTER2_DATA.g11_bai7_muc3;


  // --- BÀI TẬP CUỐI CHƯƠNG II (ÔN TẬP CHƯƠNG 2) ---
  window.G11_CHAPTER2_DATA.g11_ontap_c2_muc1 = {
  "lessonId": "toan11_ontap_c2",
  "lessonTitle": "Bài tập cuối chương II (Ôn tập chương 2)",
  "sectionId": "g11_ontap_c2_muc1",
  "sectionTitle": "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy toàn bộ Chương 2",
  "audio": "/audio/g11_ontap_c2_muc1.mp3",
  "audioSrc": "./audio/g11_ontap_c2_muc1.mp3",
  "audio_src": "./audio/g11_ontap_c2_muc1.mp3",
  "title": "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy toàn bộ Chương 2",
  "owl_tip": "Chương 2 liên kết chặt chẽ: Dãy số -> Cấp số cộng (cộng dồn d) -> Cấp số nhân (nhân dồn q)!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. TỔNG QUAN KIẾN THỨC CỐT LÕI CHƯƠNG 2",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. BẢNG SO SÁNH SONG SONG: CẤP SỐ CỘNG VS CẤP SỐ NHÂN",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO CÁC BẪY THI THƯỜNG GẶP TRONG CHƯƠNG 2",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 468.84,
  "formattedDuration": "07:48",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. TỔNG QUAN KIẾN THỨC CỐT LÕI CHƯƠNG 2",
      "subtitle": "ÔN TẬP CHƯƠNG II • TOÁN 11 KẾT NỐI TRI THỨC",
      "mascotMode": "pointer",
      "mascotTip": "Chương 2 liên kết chặt chẽ: Khái niệm Dãy số -> Cấp số cộng (cộng dồn d) -> Cấp số nhân (nhân dồn q)!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Hệ thống hóa</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Sơ Đồ Liên Hoàn 3 Bài Học Cốt Lõi Chương 2</h3>\n    </div>\n    <p class=\"text-sm text-slate-300\">Toàn bộ kiến thức Chương 2 được xây dựng từ tổng quát đến hai trường hợp quy luật đặc biệt:</p>\n  </div>\n\n  <div class=\"grid grid-cols-3 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-indigo-400 shadow-md\">\n      <h4 class=\"font-bold text-indigo-300 text-sm mb-1\">📘 Bài 5: Dãy Số</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Hàm số $u: \\mathbb{N}^* \to \\mathbb{R}, n \\mapsto u_n$.<br/>• Các cách cho: TQ, truy hồi, mô tả.<br/>• Dãy tăng ($u_{n+1} > u_n$), dãy giảm ($u_{n+1} < u_n$).<br/>• Bị chặn trên, bị chặn dưới & bị chặn.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">📗 Bài 6: Cấp Số Cộng</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Quy luật: $u_{n+1} = u_n + d$ (cộng dồn $d$).<br/>• TQ: $u_n = u_1 + (n - 1)d$.<br/>• Tính chất: $u_{k-1} + u_{k+1} = 2u_k$.<br/>• Tổng $n$ số hạng: $S_n = \frac{n(u_1 + u_n)}{2}$.</p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-amber-400 shadow-md\">\n      <h4 class=\"font-bold text-amber-300 text-sm mb-1\">📙 Bài 7: Cấp Số Nhân</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Quy luật: $u_{n+1} = u_n \\cdot q$ (nhân dồn $q$).<br/>• TQ: $u_n = u_1 \\cdot q^{n-1}$.<br/>• Tính chất: $u_{k-1} \\cdot u_{k+1} = (u_k)^2$.<br/>• Tổng $n$ số: $S_n = \frac{u_1(1 - q^n)}{1 - q}$; Lùi vô hạn: $S = \frac{u_1}{1 - q}$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em học sinh đến với bài ôn tập toàn diện Chương 2 môn Toán lớp 11: Dãy số, Cấp số cộng và Cấp số nhân. Chương học này mở ra một thế giới toán học rời rạc vô cùng sinh động, kết nối ba mắt xích logic cốt lõi: Bài 5 là nền tảng về khái niệm dãy số, tính tăng giảm và bị chặn; Bài 6 là mô hình cấp số cộng với bước nhảy không đổi thông qua phép cộng dồn công sai d; và Bài 7 là mô hình cấp số nhân với sự tăng trưởng theo cấp số nhân thông qua phép nhân dồn công bội q. Nắm chắc bản chất và sự tương đồng giữa hai mô hình này sẽ giúp các em giải quyết mọi bài toán từ nhận biết đến ứng dụng thực tế phân hóa cao.",
      "startTime": 0.0,
      "endTime": 48.12,
      "duration": 48.12
    },
    {
      "sceneIndex": 2,
      "title": "2. BẢNG SO SÁNH SONG SONG: CẤP SỐ CỘNG VS CẤP SỐ NHÂN",
      "subtitle": "BẢN ĐỒ CÔNG THỨC ĐỐI XỨNG CẦN NHỚ",
      "mascotMode": "explain",
      "mascotTip": "Ghi nhớ thần chú đối xứng: Cấp số cộng gắn với CỘNG & NHÂN ĐÔI, Cấp số nhân gắn với NHÂN & BÌNH PHƯƠNG!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"w-3 h-3 rounded-full bg-teal-400 animate-pulse\"></span>\n      <h3 class=\"text-base font-bold text-teal-300\">Bảng So Sánh Đối Xứng Hai Mô Hình Toán Học Rời Rạc</h3>\n    </div>\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-left border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900/90 text-slate-200 border-b border-slate-700\">\n            <th class=\"p-2 border-r border-slate-700 font-bold text-center w-1/4\">Đặc trưng</th>\n            <th class=\"p-2 border-r border-slate-700 font-bold text-emerald-400 text-center w-3/8\">Cấp số cộng (CSC)</th>\n            <th class=\"p-2 font-bold text-amber-400 text-center w-3/8\">Cấp số nhân (CSN)</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-slate-700 text-slate-300\">\n          <tr class=\"hover:bg-slate-700/40\">\n            <td class=\"p-2 font-bold text-slate-400 text-center\">Định nghĩa</td>\n            <td class=\"p-2 text-center border-r border-slate-700\">$u_{n+1} = u_n + d$</td>\n            <td class=\"p-2 text-center\">$u_{n+1} = u_n \\cdot q$</td>\n          </tr>\n          <tr class=\"hover:bg-slate-700/40 bg-slate-900/40\">\n            <td class=\"p-2 font-bold text-slate-400 text-center\">Số hạng tổng quát</td>\n            <td class=\"p-2 text-center border-r border-slate-700\"><b class=\"text-emerald-300\">$u_n = u_1 + (n - 1)d$</b></td>\n            <td class=\"p-2 text-center\"><b class=\"text-amber-300\">$u_n = u_1 \\cdot q^{n - 1}$</b></td>\n          </tr>\n          <tr class=\"hover:bg-slate-700/40\">\n            <td class=\"p-2 font-bold text-slate-400 text-center\">Tính chất 3 số liên tiếp</td>\n            <td class=\"p-2 text-center border-r border-slate-700\">$u_{k-1} + u_{k+1} = 2u_k$</td>\n            <td class=\"p-2 text-center\">$u_{k-1} \\cdot u_{k+1} = (u_k)^2$</td>\n          </tr>\n          <tr class=\"hover:bg-slate-700/40 bg-slate-900/40\">\n            <td class=\"p-2 font-bold text-slate-400 text-center\">Tổng $n$ số hạng đầu</td>\n            <td class=\"p-2 text-center border-r border-slate-700\"><span class=\"text-emerald-300\">$S_n = \frac{n(u_1 + u_n)}{2} = \frac{n[2u_1 + (n - 1)d]}{2}$</span></td>\n            <td class=\"p-2 text-center\"><span class=\"text-amber-300\">$S_n = \frac{u_1(1 - q^n)}{1 - q} \\; (q \ne 1)$</span></td>\n          </tr>\n          <tr class=\"hover:bg-slate-700/40\">\n            <td class=\"p-2 font-bold text-slate-400 text-center\">Trường hợp đặc biệt</td>\n            <td class=\"p-2 text-center border-r border-slate-700\">$d = 0 \\implies$ Dãy không đổi: $u_n = u_1$</td>\n            <td class=\"p-2 text-center\">$|q| < 1 \\implies$ CSN lùi vô hạn: $S = \frac{u_1}{1 - q}$</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để không bao giờ bị nhầm lẫn giữa cấp số cộng và cấp số nhân, các em hãy ghi nhớ bản đồ đối xứng tuyệt đẹp này: Về định nghĩa: cấp số cộng lấy số sau bằng số trước cộng d, còn cấp số nhân lấy số sau bằng số trước nhân q. Về số hạng tổng quát: cấp số cộng dùng phép nhân n trừ một nhân d, còn cấp số nhân nâng lên lũy thừa q mũ n trừ một. Về tính chất 3 số hạng liên tiếp: cấp số cộng là trung bình cộng, tổng hai số biên bằng hai lần số giữa; cấp số nhân là trung bình nhân, tích hai số biên bằng bình phương số giữa. Nắm vững sự đối xứng này sẽ giúp các em nhẩm công thức siêu nhanh và chính xác tuyệt đối.",
      "startTime": 48.12,
      "endTime": 86.02,
      "duration": 37.9
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: NHẬN DIỆN DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
      "subtitle": "VÍ DỤ MINH HỌA 1 • NHẬN BIẾT & THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Nếu $u_{n+1} - u_n = d$ là hằng số -> CSC; nếu $u_{n+1} / u_n = q$ là hằng số -> CSN!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 1 (Nhận biết)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-indigo-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-3\">\n      Trong các dãy số sau, dãy số nào là cấp số cộng, dãy số nào là cấp số nhân? Tìm công sai hoặc công bội tương ứng:\n    </p>\n    <div class=\"grid grid-cols-3 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"font-bold text-indigo-300\">a) Dãy số $(u_n)$:</span>\n        <p class=\"text-slate-300 mt-1\">$u_n = 3n - 5$</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"font-bold text-emerald-300\">b) Dãy số $(v_n)$:</span>\n        <p class=\"text-slate-300 mt-1\">$v_n = 2 \\cdot 3^n$</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700\">\n        <span class=\"font-bold text-amber-300\">c) Dãy số $(w_n)$:</span>\n        <p class=\"text-slate-300 mt-1\">$w_n = n^2 + 1$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng bắt đầu với Ví dụ 1: Nhận diện dãy số. Trong các dãy số sau đây, dãy số nào là cấp số cộng, dãy số nào là cấp số nhân? Xác định công sai hoặc công bội tương ứng: Câu a: u n bằng ba n trừ năm. Câu b: v n bằng hai nhân ba mũ n. Câu c: w n bằng n bình phương cộng một. Các em có 15 giây để quan sát và xác định bản chất của từng dãy.",
      "startTime": 86.02,
      "endTime": 114.5,
      "duration": 28.49
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "PHƯƠNG PHÁP XÉT HIỆU $u_{n+1}-u_n$ VÀ TỈ SỐ $v_{n+1}/v_n$",
      "mascotMode": "happy",
      "mascotTip": "Ghi nhớ nhanh: Dãy bậc nhất $an+b$ luôn là CSC với công sai $d=a$. Dãy hàm mũ $a \\cdot b^n$ luôn là CSN với công bội $q=b$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Phân tích bản chất từng dãy số</h4>\n    </div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs\">\n      <div class=\"bg-slate-900/90 p-2.5 rounded-lg border border-indigo-500/30\">\n        <span class=\"font-bold text-indigo-400\">a) Dãy $u_n = 3n - 5$:</span>\n        <p class=\"text-slate-300 mt-1 leading-relaxed\">\n          $u_{n+1} - u_n = [3(n+1) - 5] - [3n - 5]$<br/>\n          $= 3n - 2 - 3n + 5 = \\mathbf{3}$ (hằng số).<br/>\n          👉 <b>Kết luận:</b> $(u_n)$ là <b>Cấp số cộng</b> có số hạng đầu $u_1 = -2$, công sai $d = 3$.\n        </p>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded-lg border border-emerald-500/30\">\n        <span class=\"font-bold text-emerald-400\">b) Dãy $v_n = 2 \\cdot 3^n$:</span>\n        <p class=\"text-slate-300 mt-1 leading-relaxed\">\n          $\frac{v_{n+1}}{v_n} = \frac{2 \\cdot 3^{n+1}}{2 \\cdot 3^n} = \\mathbf{3}$ (hằng số).<br/>\n          👉 <b>Kết luận:</b> $(v_n)$ là <b>Cấp số nhân</b> có số hạng đầu $v_1 = 2 \\cdot 3^1 = 6$, công bội $q = 3$.\n        </p>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded-lg border border-amber-500/30\">\n        <span class=\"font-bold text-amber-400\">c) Dãy $w_n = n^2 + 1$:</span>\n        <p class=\"text-slate-300 mt-1 leading-relaxed\">\n          $w_1 = 2, w_2 = 5, w_3 = 10$.<br/>\n          $w_2 - w_1 = 3 \ne w_3 - w_2 = 5$.<br/>\n          $\frac{w_2}{w_1} = 2,5 \ne \frac{w_3}{w_2} = 2$.<br/>\n          👉 <b>Kết luận:</b> $(w_n)$ <b>không</b> là CSC, cũng <b>không</b> là CSN.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải chi tiết như sau: Ở câu a, ta xét hiệu u n cộng 1 trừ u n: bằng ba nhân n cộng một trừ năm, trừ đi mở ngoặc ba n trừ năm. Rút gọn được đúng bằng 3 không đổi với mọi n. Do đó, u n là cấp số cộng có số hạng đầu u 1 bằng âm 2 và công sai d bằng 3. Ở câu b, ta xét tỉ số v n cộng 1 chia v n: bằng hai nhân ba mũ n cộng một chia cho hai nhân ba mũ n, rút gọn được đúng bằng 3 không đổi. Do đó, v n là cấp số nhân có số hạng đầu v 1 bằng 6 và công bội q bằng 3. Ở câu c, xét w 1 bằng 2, w 2 bằng 5, w 3 bằng 10. Hiệu w 2 trừ w 1 bằng 3, nhưng w 3 trừ w 2 lại bằng 5; tỉ số cũng không bằng nhau. Do đó w n không phải là cấp số cộng, cũng không phải cấp số nhân.",
      "startTime": 114.5,
      "endTime": 172.27,
      "duration": 57.77
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: XÁC ĐỊNH CẤP SỐ CỘNG KHI BIẾT HỆ THỨC",
      "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Biểu diễn tất cả các số hạng theo $u_1$ và $d$ bằng công thức $u_n = u_1 + (n - 1)d$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 2 (Thông hiểu)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-emerald-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Cho cấp số cộng $(u_n)$ thỏa mãn hệ phương trình:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-emerald-300 text-sm mb-3\">\n      $$\begin{cases} u_3 + u_5 = 14 \\ u_2 + u_7 = 16 \\end{cases}$$\n    </div>\n    <p class=\"text-xs text-slate-300\">\n      <b>Yêu cầu:</b> Xác định số hạng đầu $u_1$, công sai $d$ và tính giá trị số hạng $u_{20}$.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với Ví dụ 2: Cho cấp số cộng u n thỏa mãn hệ phương trình: u 3 cộng u 5 bằng 14, và u 2 cộng u 7 bằng 16. Yêu cầu: Tìm số hạng đầu u 1, công sai d và tính số hạng thứ hai mươi u 20. Các em có 15 giây suy nghĩ để lập hệ phương trình hai ẩn u 1 và d.",
      "startTime": 172.27,
      "endTime": 198.34,
      "duration": 26.06
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "GIẢI HỆ PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN $u_1$ VÀ $d$",
      "mascotMode": "explaining",
      "mascotTip": "Nhận xét nhanh: $u_3 + u_5 = 2u_4 = 14 \\implies u_4 = 7$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Đưa về hệ phương trình bậc nhất 2 ẩn $(u_1, d)$</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p>Áp dụng công thức $u_n = u_1 + (n - 1)d$, ta biến đổi hệ đã cho:</p>\n      <div class=\"text-emerald-300 font-mono\">\n        $$\begin{cases} (u_1 + 2d) + (u_1 + 4d) = 14 \\ (u_1 + d) + (u_1 + 6d) = 16 \\end{cases} \\iff \begin{cases} 2u_1 + 6d = 14 \\ 2u_1 + 7d = 16 \\end{cases}$$\n      </div>\n      <p>Lấy phương trình thứ hai trừ đi phương trình thứ nhất vế theo vế:</p>\n      <p class=\"text-cyan-300 font-semibold\">• $7d - 6d = 16 - 14 \\implies \\mathbf{d = 2}$.</p>\n      <p class=\"text-cyan-300 font-semibold\">• Thay $d = 2$ vào phương trình đầu: $2u_1 + 6(2) = 14 \\implies 2u_1 = 2 \\implies \\mathbf{u_1 = 1}$.</p>\n      <div class=\"bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200\">\n        👉 <b>Số hạng thứ 20:</b> $u_{20} = u_1 + 19d = 1 + 19 \\cdot 2 = 1 + 38 = \\mathbf{39}$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Sử dụng công thức số hạng tổng quát u n bằng u 1 cộng n trừ 1 nhân d. Ta có: u 3 bằng u 1 cộng hai d, u 5 bằng u 1 cộng bốn d; nên u 3 cộng u 5 bằng hai u 1 cộng sáu d bằng 14. Tương tự: u 2 bằng u 1 cộng d, u 7 bằng u 1 cộng sáu d; nên u 2 cộng u 7 bằng hai u 1 cộng bảy d bằng 16. Trừ phương trình dưới cho phương trình trên, ta được ngay: d bằng 16 trừ 14 bằng 2. Thay d bằng 2 vào phương trình đầu, ta tìm được hai u 1 cộng 12 bằng 14, suy ra u 1 bằng 1. Từ đó, số hạng thứ hai mươi là: u 20 bằng u 1 cộng 19 d, bằng 1 cộng 19 nhân 2 bằng 39.",
      "startTime": 198.34,
      "endTime": 245.52,
      "duration": 47.18
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: XÁC ĐỊNH CẤP SỐ NHÂN KHI BIẾT HỆ THỨC",
      "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Đặt nhân tử chung để xuất hiện thừa số giống nhau rồi lập tỉ số triệt tiêu $u_1$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 3 (Vận dụng)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-amber-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Cho cấp số nhân $(u_n)$ có công bội $q > 0$ thỏa mãn hệ phương trình:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-amber-300 text-sm mb-3\">\n      $$\begin{cases} u_1 + u_3 = 10 \\ u_2 + u_4 = 20 \\end{cases}$$\n    </div>\n    <p class=\"text-xs text-slate-300\">\n      <b>Yêu cầu:</b> Tìm số hạng đầu $u_1$, công bội $q$ và tính tổng 10 số hạng đầu tiên $S_{10}$.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta tiếp tục với Ví dụ 3: Cho cấp số nhân u n có công bội q dương thỏa mãn hệ phương trình: u 1 cộng u 3 bằng 10, và u 2 cộng u 4 bằng 20. Yêu cầu: Tìm số hạng đầu u 1, công bội q và tính tổng mười số hạng đầu tiên S 10 của cấp số nhân. Các em có 15 giây suy nghĩ.",
      "startTime": 245.52,
      "endTime": 265.66,
      "duration": 20.14
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "PHƯƠNG PHÁP CHIA VẾ THEO VẾ TÌM CÔNG BỘI $q$",
      "mascotMode": "happy",
      "mascotTip": "Lưu ý công thức tổng: $S_{10} = \frac{u_1(1 - q^{10})}{1 - q}$. Với $q=2$, mẫu là $1 - 2 = -1$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Đặt nhân tử chung và lập tỉ số khử $u_1$</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p>Biểu diễn hệ theo $u_1$ và $q$:</p>\n      <div class=\"text-amber-300 font-mono\">\n        $$\begin{cases} u_1 + u_1 q^2 = 10 \\ u_1 q + u_1 q^3 = 20 \\end{cases} \\iff \begin{cases} u_1(1 + q^2) = 10 \\quad (1) \\ u_1 q(1 + q^2) = 20 \\quad (2) \\end{cases}$$\n      </div>\n      <p>Lấy $(2)$ chia cho $(1)$ vế theo vế:</p>\n      <p class=\"text-cyan-300 font-semibold\">• $\frac{u_1 q(1 + q^2)}{u_1(1 + q^2)} = \frac{20}{10} \\implies \\mathbf{q = 2}$ (thỏa mãn $q > 0$).</p>\n      <p class=\"text-cyan-300 font-semibold\">• Thay $q = 2$ vào $(1)$: $u_1(1 + 2^2) = 10 \\implies 5u_1 = 10 \\implies \\mathbf{u_1 = 2}$.</p>\n      <div class=\"bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200\">\n        👉 <b>Tổng 10 số hạng đầu:</b><br/>\n        $$S_{10} = \frac{u_1(1 - q^{10})}{1 - q} = \frac{2(1 - 2^{10})}{1 - 2} = \frac{2(1 - 1024)}{-1} = 2 \times 1023 = \\mathbf{2046}$$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Sử dụng công thức số hạng tổng quát u n bằng u 1 nhân q mũ n trừ một. Phương trình thứ nhất trở thành: u 1 cộng u 1 nhân q bình phương, đặt u 1 làm nhân tử chung được u 1 nhân mở ngoặc 1 cộng q bình đóng ngoặc bằng 10. Phương trình thứ hai trở thành: u 1 nhân q cộng u 1 nhân q mũ ba, đặt u 1 nhân q làm nhân tử chung được u 1 nhân q nhân mở ngoặc 1 cộng q bình đóng ngoặc bằng 20. Chia phương trình hai cho phương trình một vế theo vế, ta triệt tiêu được u 1 nhân mở ngoặc 1 cộng q bình, thu được ngay q bằng 20 chia 10 bằng 2. Thay q bằng 2 vào phương trình một: u 1 nhân mở ngoặc 1 cộng 4 đóng ngoặc bằng 10, suy ra u 1 bằng 2. Tổng mười số hạng đầu tiên là: S 10 bằng 2 nhân mở ngoặc 1 trừ hai mũ mười đóng ngoặc chia cho 1 trừ 2, bằng 2 nhân 1023 bằng 2046.",
      "startTime": 265.66,
      "endTime": 337.44,
      "duration": 71.78
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN KẾT HỢP CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
      "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Ba số lập thành CSC có tổng bằng 15 thì gọi là $a - d, a, a + d$ để tìm ngay $a = 5$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 4 (Vận dụng cao)</span>\n      <div class=\"countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-rose-400 countdown-num\">30s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Ba số $x, y, z$ theo thứ tự lập thành một cấp số cộng có tổng bằng $15$. Nếu lần lượt cộng thêm $1, 4, 19$ vào ba số đó thì được ba số mới $x + 1, y + 4, z + 19$ theo thứ tự lập thành một cấp số nhân.\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300\">\n      Biết công sai của cấp số cộng ban đầu là số dương ($d > 0$). Hãy tìm bộ ba số $(x, y, z)$.\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta đến với bài toán kinh điển kết hợp cả hai mô hình ở Ví dụ 4: Cho ba số x, y, z theo thứ tự lập thành một cấp số cộng có tổng bằng 15. Nếu lần lượt cộng thêm 1, 4, 19 vào ba số đó thì được ba số mới x cộng 1, y cộng 4, z cộng 19 theo thứ tự lập thành một cấp số nhân. Tìm ba số x, y, z ban đầu biết công sai d dương. Các em có 30 giây để tìm ra đáp án.",
      "startTime": 337.44,
      "endTime": 365.4,
      "duration": 27.96
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KỸ THUẬT ĐẶT ẨN ĐỐI XỨNG $y-d, y, y+d$",
      "mascotMode": "happy",
      "mascotTip": "Kỹ thuật vàng: Đặt 3 số CSC là $y-d, y, y+d$ triệt tiêu ngay $d$ khi lấy tổng!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Áp dụng tính chất kết hợp CSC và CSN</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>Bước 1:</b> Gọi 3 số hạng của CSC là $x = y - d, \\; y, \\; z = y + d$.</p>\n      <p class=\"text-emerald-300 font-semibold\">• Tổng 3 số: $(y - d) + y + (y + d) = 15 \\iff 3y = 15 \\implies \\mathbf{y = 5}$.</p>\n      <p>Khi đó 3 số là: $x = 5 - d, \\; y = 5, \\; z = 5 + d$.</p>\n\n      <p><b>Bước 2:</b> Cộng thêm $1, 4, 19$ ta được 3 số mới:</p>\n      <p class=\"text-amber-300 font-semibold\">\n        • $X = x + 1 = 6 - d$<br/>\n        • $Y = y + 4 = 9$<br/>\n        • $Z = z + 19 = 24 + d$\n      </p>\n\n      <p><b>Bước 3:</b> Ba số $X, Y, Z$ lập thành CSN nên $X \\cdot Z = Y^2$:</p>\n      <div class=\"text-cyan-300 font-mono\">\n        $$(6 - d)(24 + d) = 9^2 \\iff 144 - 18d - d^2 = 81 \\iff d^2 + 18d - 63 = 0$$\n      </div>\n      <p>Phương trình có 2 nghiệm: $d = 3$ (nhận vì $d > 0$) hoặc $d = -21$ (loại).</p>\n\n      <div class=\"bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold\">\n        👉 Kết luận bộ ba số cần tìm là: $\\mathbf{x = 2, \\; y = 5, \\; z = 8}$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây! Lời giải như sau: Vì ba số x, y, z lập thành cấp số cộng nên ta đặt: x bằng y trừ d, z bằng y cộng d. Tổng ba số là: y trừ d cộng y cộng y cộng d bằng ba y bằng 15, suy ra ngay y bằng 5. Do đó ba số là 5 trừ d, 5, và 5 cộng d. Khi cộng thêm 1, 4, 19, ta được ba số mới là: số thứ nhất là 6 trừ d; số thứ hai là 5 cộng 4 bằng 9; số thứ ba là 24 cộng d. Vì ba số mới lập thành cấp số nhân nên tích hai số biên bằng bình phương số giữa: mở ngoặc 6 trừ d đóng ngoặc nhân mở ngoặc 24 cộng d đóng ngoặc bằng 9 bình phương bằng 81. Khai triển ta được phương trình bậc hai: âm d bình trừ 18 d cộng 144 bằng 81, hay d bình cộng 18 d trừ 63 bằng không. Giải phương trình ta được hai nghiệm: d bằng 3 hoặc d bằng âm 21. Vì đề bài cho d dương nên ta nhận d bằng 3. Với y bằng 5 và d bằng 3, ta tìm được: x bằng 2, y bằng 5, z bằng 8.",
      "startTime": 365.4,
      "endTime": 399.77,
      "duration": 34.37
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO CÁC BẪY THI THƯỜNG GẶP TRONG CHƯƠNG 2",
      "subtitle": "4 SAI LẦM KHIẾN HỌC SINH MẤT ĐIỂM ĐÁNG TIẾC",
      "mascotMode": "warning",
      "mascotTip": "Ghi nhớ: Cấp số nhân $u_n = u_1 q^{n-1}$, số mũ luôn là $n-1$, không bao giờ là $n$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"text-lg\">⚠️</span>\n      <h3 class=\"text-sm font-bold text-amber-300\">4 Cạm Bẫy Trắc Nghiệm Kinh Điển Chương 2</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-2.5 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">1. Nhầm lẫn số mũ CSN:</span>\n        <p class=\"text-slate-300 mt-1\">Sai: $u_n = u_1 \\cdot q^n$.<br/><b class=\"text-emerald-400\">Đúng: $u_n = u_1 \\cdot q^{n - 1}$</b> (Số mũ lùi 1 đơn vị).</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">2. Lẫn lộn tính chất trung gian:</span>\n        <p class=\"text-slate-300 mt-1\">CSC: $u_{k-1} + u_{k+1} = \\mathbf{2u_k}$ (Cộng đôi).<br/>CSN: $u_{k-1} \\cdot u_{k+1} = \\mathbf{(u_k)^2}$ (Nhân bình phương).</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400\">3. Bẫy CSN lùi vô hạn:</span>\n        <p class=\"text-slate-300 mt-1\">Công thức $S = \frac{u_1}{1 - q}$ <b>chỉ áp dụng khi $|q| < 1$</b>. Nếu $|q| \\ge 1$ thì tổng không tồn tại hữu hạn!</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400\">4. Nhầm lẫn vị trí $n$ và giá trị $u_n$:</span>\n        <p class=\"text-slate-300 mt-1\">$n \\in \\mathbb{N}^*$ là số thứ tự (vị trí số hạng), còn $u_n \\in \\mathbb{R}$ là giá trị thực của số hạng đó.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi kết thúc Mục 1, Thầy Cú có 4 cảnh báo cạm bẫy đặc biệt quan trọng: Thứ nhất, khi tính số hạng tổng quát của cấp số nhân, rất nhiều bạn viết nhầm thành u n bằng u 1 nhân q mũ n thay vì n trừ 1. Thứ hai, nhầm lẫn giữa tính chất cấp số cộng và cấp số nhân: cấp số cộng là u k trừ một cộng u k cộng một bằng hai u k; còn cấp số nhân là tích bằng bình phương. Thứ ba, khi tính tổng cấp số nhân lùi vô hạn S bằng u 1 chia cho 1 trừ q, bắt buộc điều kiện là trị tuyệt đối của q phải nhỏ hơn 1. Nếu trị tuyệt đối của q lớn hơn hoặc bằng 1 mà vẫn áp dụng công thức này là sai hoàn toàn. Thứ tư, nhầm lẫn giữa số thứ tự n và giá trị số hạng u n.",
      "startTime": 399.77,
      "endTime": 443.78,
      "duration": 44.02
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "KẾT THÚC MỤC 1 • CHUYỂN SANG MỤC 2: 4 DẠNG TOÁN TRỌNG TÂM",
      "mascotMode": "happy",
      "mascotTip": "Chìa khóa vàng: Luôn quy mọi bài toán CSC về $(u_1, d)$ và CSN về $(u_1, q)$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center\">\n    <div class=\"inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2\">\n      <span class=\"text-2xl\">🦉✨</span>\n    </div>\n    <h3 class=\"text-lg font-black text-emerald-200 mb-1\">Bí Kíp Cốt Lõi Mục 1</h3>\n    <p class=\"text-xs text-slate-300 max-w-xl mx-auto leading-relaxed\">\n      Mọi bài toán phức tạp về Cấp số cộng hay Cấp số nhân đều được giải quyết nhẹ nhàng khi đưa về hệ 2 ẩn:<br/>\n      <span class=\"text-emerald-400 font-bold\">Cấp số cộng: Giải tìm bộ đôi $(u_1, d)$</span> | <span class=\"text-amber-400 font-bold\">Cấp số nhân: Lập tỉ số tìm bộ đôi $(u_1, q)$</span>.\n    </p>\n    <div class=\"mt-3 flex justify-center gap-2\">\n      <span class=\"px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40\">\n        Đã sẵn sàng chuyển sang Mục 2 🚀\n      </span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành xuất sắc Mục 1 của bài ôn tập Chương 2! Chúng ta đã hệ thống hóa toàn bộ lý thuyết, so sánh đối xứng song song hai mô hình cấp số cộng và cấp số nhân, đồng thời rèn luyện 4 bài toán nhận diện và biến đổi nền tảng. Bây giờ, hãy chuẩn bị giấy bút để bước sang Mục 2: nơi chúng ta cùng giải quyết 4 dạng toán trọng tâm và các mô hình thực tế phân hóa cao xuất hiện trong các đề thi tuyển sinh.",
      "startTime": 443.78,
      "endTime": 468.84,
      "duration": 25.06
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_ontap_c2_muc1 = window.G11_CHAPTER2_DATA.g11_ontap_c2_muc1;
  window.G11_CHAPTER2_DATA.ontap_c2_muc1 = window.G11_CHAPTER2_DATA.g11_ontap_c2_muc1;

  window.G11_CHAPTER2_DATA.g11_ontap_c2_muc2 = {
  "lessonId": "toan11_ontap_c2",
  "lessonTitle": "Bài tập cuối chương II (Ôn tập chương 2)",
  "sectionId": "g11_ontap_c2_muc2",
  "sectionTitle": "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Phương pháp giải",
  "audio": "/audio/g11_ontap_c2_muc2.mp3",
  "audioSrc": "./audio/g11_ontap_c2_muc2.mp3",
  "audio_src": "./audio/g11_ontap_c2_muc2.mp3",
  "title": "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Phương pháp giải",
  "owl_tip": "4 dạng toán cốt lõi: Tính đơn điệu & bị chặn -> Bài toán thực tế CSC -> Tổng CSN lùi vô hạn -> Lãi kép & Tăng trưởng!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. PHÂN LOẠI 4 DẠNG TOÁN TRỌNG TÂM CHƯƠNG 2",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÔNG CỤ VÀ CHIẾN LƯỢC XỬ LÝ NHANH",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI TRONG BÀI TOÁN THỰC TẾ & LÃI KÉP",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 470.98,
  "formattedDuration": "07:50",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. PHÂN LOẠI 4 DẠNG TOÁN TRỌNG TÂM CHƯƠNG 2",
      "subtitle": "MỤC 2 • MA TRẬN ĐỀ THI VÀ PHƯƠNG PHÁP GIẢI CHUẨN TẮC",
      "mascotMode": "pointer",
      "mascotTip": "4 dạng toán cốt lõi: Tính đơn điệu & bị chặn -> Bài toán thực tế CSC -> Tổng CSN lùi vô hạn -> Lãi kép & Tăng trưởng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase\">Bản đồ dạng bài</span>\n      <h3 class=\"text-lg font-black text-teal-200\">4 Dạng Toán Trọng Tâm Đề Thi Chương 2</h3>\n    </div>\n    <p class=\"text-xs text-slate-300\">Mỗi dạng bài mang một công cụ giải toán đặc thù và ứng dụng thực tiễn cao:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-indigo-400\">\n      <h4 class=\"font-bold text-indigo-300 mb-1\">🎯 Dạng 1: Đơn điệu & Bị chặn</h4>\n      <p class=\"text-slate-300\">Xét hiệu $u_{n+1} - u_n$ hoặc tỉ số $u_{n+1}/u_n$. Tách phần nguyên để tìm chặn trên $M$ và chặn dưới $m$.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-emerald-400\">\n      <h4 class=\"font-bold text-emerald-300 mb-1\">🏛️ Dạng 2: Bài toán thực tế CSC</h4>\n      <p class=\"text-slate-300\">Xếp hàng rạp hát, tháp bậc thang, đào giếng... Khai thác linh hoạt $u_n = u_1 + (n - 1)d$ và $S_n = \frac{n(u_1 + u_n)}{2}$.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-amber-400\">\n      <h4 class=\"font-bold text-amber-300 mb-1\">♾️ Dạng 3: Tổng CSN lùi vô hạn</h4>\n      <p class=\"text-slate-300\">Biểu diễn số thập phân vô hạn tuần hoàn sang phân số tối giản: $0,(a) = \frac{a}{10^k - 1}$ qua công thức $S = \frac{u_1}{1 - q}$.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-rose-400\">\n      <h4 class=\"font-bold text-rose-300 mb-1\">📈 Dạng 4: Lãi kép & Tăng trưởng mũ</h4>\n      <p class=\"text-slate-300\">Mô hình $A_n = A(1 + r)^n$ hoặc phân rã bán rã. Dùng bất phương trình mũ hoặc logarit để tìm số chu kỳ $n$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Rèn luyện 4 dạng toán trọng tâm và bài toán thực tế Chương 2. Trong các đề thi học kỳ và kỳ thi đánh giá năng lực, phần Dãy số - Cấp số thường tập trung vào 4 dạng toán chủ lực: Dạng 1 là xét tính tăng giảm và tính bị chặn của dãy phân thức hữu tỉ; Dạng 2 là bài toán thực tế áp dụng cấp số cộng vào quy luật xếp hàng, chia tiền hay khán đài; Dạng 3 là ứng dụng cấp số nhân lùi vô hạn để chuyển đổi số thập phân vô hạn tuần hoàn sang phân số tối giản; và Dạng 4 là bài toán tăng trưởng mũ, lãi kép và trả góp phân hóa sâu sắc.",
      "startTime": 0.0,
      "endTime": 44.18,
      "duration": 44.18
    },
    {
      "sceneIndex": 2,
      "title": "2. CÔNG CỤ VÀ CHIẾN LƯỢC XỬ LÝ NHANH",
      "subtitle": "KỸ THUẬT PHÂN TÍCH VÀ CÔNG THỨC GIẢI NHANH",
      "mascotMode": "explain",
      "mascotTip": "Phân thức bậc nhất $u_n = \frac{an+b}{cn+d}$: Tính tăng giảm phụ thuộc vào dấu của định thức $ad - bc$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"w-3 h-3 rounded-full bg-cyan-400 animate-pulse\"></span>\n      <h3 class=\"text-sm font-bold text-cyan-300\">Chiến Thuật Vàng: Dãy Phân Thức $u_n = \frac{an+b}{cn+d} \\; (c > 0, n \\ge 1)$</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700\">\n        <span class=\"font-bold text-emerald-400\">1. Quy tắc xét dấu định thức:</span>\n        <p class=\"text-slate-300 mt-1\">\n          $$u_{n+1} - u_n = \frac{ad - bc}{[c(n+1) + d](cn + d)}$$\n          • Nếu $ad - bc > 0 \\implies$ Dãy số <b>TĂNG</b>.<br/>\n          • Nếu $ad - bc < 0 \\implies$ Dãy số <b>GIẢM</b>.\n        </p>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700\">\n        <span class=\"font-bold text-amber-400\">2. Quy tắc tìm hai đầu chặn:</span>\n        <p class=\"text-slate-300 mt-1\">\n          • Điểm xuất phát: $u_1 = \frac{a+b}{c+d}$.<br/>\n          • Điểm tiệm cận vô cực: $\\lim u_n = \frac{a}{c}$.<br/>\n          👉 Dãy tăng: $u_1 \\le u_n < \frac{a}{c}$ $\\implies$ Bị chặn.<br/>\n          👉 Dãy giảm: $\frac{a}{c} < u_n \\le u_1$ $\\implies$ Bị chặn.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hãy lưu ý kỹ thuật giải nhanh tuyệt vời cho dãy phân thức bậc nhất u n bằng a n cộng b chia c n cộng d: Hiệu u n cộng 1 trừ u n luôn có dấu cùng với dấu của định thức a d trừ b c. Nếu a d trừ b c dương thì dãy luôn tăng; nếu âm thì dãy luôn giảm. Ngoài ra, giới hạn khi n tiến ra vô cực của dãy chính là tỉ số a chia c, đây cũng chính là một cận chặn tự nhiên của dãy số. Nắm chắc mẹo này giúp các em kết luận tính bị chặn chỉ trong 3 giây.",
      "startTime": 44.18,
      "endTime": 74.11,
      "duration": 29.93
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: XÉT TÍNH TĂNG GIẢM VÀ BỊ CHẶN",
      "subtitle": "DẠNG 1 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Lập hiệu $u_{n+1} - u_n$ và tách phần nguyên của phân thức!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 1 (Dạng 1)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-indigo-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-3\">\n      Xét tính tăng, giảm và tính bị chặn của dãy số $(u_n)$ xác định bởi:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-indigo-300 text-base\">\n      $$u_n = \frac{2n - 1}{n + 2} \\quad (n \\in \\mathbb{N}^*)$$\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng làm Ví dụ 1: Xét tính tăng, giảm và tính bị chặn của dãy số u n cho bởi công thức: u n bằng hai n trừ một chia cho n cộng hai. Các em có 15 giây suy nghĩ.",
      "startTime": 74.11,
      "endTime": 87.36,
      "duration": 13.25
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "CHỨNG MINH DÃY TĂNG VÀ BỊ CHẶN TOÀN DIỆN",
      "mascotMode": "happy",
      "mascotTip": "Tách phần nguyên: $u_n = \frac{2(n+2) - 5}{n+2} = 2 - \frac{5}{n+2}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Xét tính đơn điệu và tính bị chặn</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>1. Xét tính tăng, giảm:</b> Với mọi $n \\ge 1$:</p>\n      <div class=\"text-indigo-300 font-mono\">\n        $$u_{n+1} - u_n = \frac{2n + 1}{n + 3} - \frac{2n - 1}{n + 2} = \frac{(2n+1)(n+2) - (2n-1)(n+3)}{(n+3)(n+2)} = \frac{5}{(n+3)(n+2)} > 0$$\n      </div>\n      <p>👉 Vậy $(u_n)$ là <b>dãy số tăng</b>.</p>\n\n      <p><b>2. Xét tính bị chặn:</b></p>\n      <p>• Vì $(u_n)$ là dãy tăng nên: $u_n \\ge u_1 = \frac{2(1) - 1}{1 + 2} = \\mathbf{\frac{1}{3}} \\implies (u_n)$ bị chặn dưới bởi $\frac{1}{3}$.</p>\n      <p>• Mặt khác, tách phân thức: $u_n = \frac{2(n+2) - 5}{n+2} = 2 - \frac{5}{n+2} < \\mathbf{2} \\implies (u_n)$ bị chặn trên bởi $2$.</p>\n      <div class=\"bg-indigo-950/40 p-2.5 rounded border border-indigo-500/30 text-indigo-200 font-bold\">\n        👉 Kết luận: $\frac{1}{3} \\le u_n < 2, \\; \forall n \\in \\mathbb{N}^*$. Dãy số $(u_n)$ <b>bị chặn</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Thứ nhất, về tính đơn điệu: ta xét hiệu u n cộng 1 trừ u n. Bằng hai nhân n cộng 1 trừ 1 chia cho n cộng 1 cộng 2, trừ đi hai n trừ 1 chia cho n cộng 2. Bằng hai n cộng 1 chia cho n cộng 3 trừ đi hai n trừ 1 chia cho n cộng 2. Quy đồng mẫu số, tử số là: mở ngoặc hai n cộng 1 đóng ngoặc nhân mở ngoặc n cộng 2 đóng ngoặc, trừ đi mở ngoặc hai n trừ 1 đóng ngoặc nhân mở ngoặc n cộng 3 đóng ngoặc, rút gọn đúng bằng 5. Vì 5 dương và mẫu luôn dương với mọi n thuộc N sao, nên hiệu này luôn lớn hơn không. Vậy u n là dãy số tăng. Thứ hai, về tính bị chặn: vì dãy tăng nên số hạng đầu tiên là số nhỏ nhất: u n lớn hơn hoặc bằng u 1 bằng một phần ba. Mặt khác, tách phần nguyên ta có u n bằng 2 trừ 5 chia cho n cộng 2. Vì 5 chia n cộng 2 luôn dương nên u n luôn nhỏ hơn 2. Vậy một phần ba nhỏ hơn hoặc bằng u n nhỏ hơn 2 với mọi n, kết luận dãy số bị chặn.",
      "startTime": 87.36,
      "endTime": 157.99,
      "duration": 70.63
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: BÀI TOÁN THỰC TẾ RẠP HÁT",
      "subtitle": "DẠNG 2 • CẤP SỐ CỘNG THỰC TẾ (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Quy về CSC với $u_1 = 20, d = 4$. Dùng $u_{15}$ cho hàng 15 và $S_{25}$ cho tổng khán giả!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 2 (Thực tế CSC)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-emerald-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Một rạp hát thiết kế các hàng ghế theo quy luật:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2\">\n      <p>• Hàng ghế đầu tiên có <b>$20$ ghế</b>.</p>\n      <p>• Mỗi hàng ghế sau nhiều hơn hàng ghế liền trước <b>$4$ ghế</b>.</p>\n    </div>\n    <p class=\"text-xs text-emerald-300 font-bold\">\n      a) Hàng thứ 15 có bao nhiêu chiếc ghế?<br/>\n      b) Nếu rạp có tất cả 25 hàng ghế thì rạp chứa được tối đa bao nhiêu khán giả?\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với bài toán thực tế ở Ví dụ 2: Một rạp hát có các hàng ghế được xếp thành hình vòng cung mở rộng dần. Hàng ghế đầu tiên có 20 ghế, mỗi hàng ghế tiếp theo có nhiều hơn hàng liền trước 4 ghế. Hỏi: Câu a: Hàng ghế thứ 15 có bao nhiêu ghế? Câu b: Nếu rạp hát có tất cả 25 hàng ghế thì tổng sức chứa của rạp là bao nhiêu khán giả? Các em có 15 giây suy nghĩ.",
      "startTime": 157.99,
      "endTime": 184.75,
      "duration": 26.76
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "MÔ HÌNH HÓA TOÁN HỌC VÀ TÍNH TỔNG $S_{25}$",
      "mascotMode": "happy",
      "mascotTip": "Tính nhanh: $S_{25} = \frac{25 \times [2(20) + 24(4)]}{2} = \frac{25 \times 136}{2} = 25 \times 68 = 1700$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Mô hình cấp số cộng: $u_1 = 20, d = 4$</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p>Số ghế ở mỗi hàng lập thành cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 20$, công sai $d = 4$.</p>\n      \n      <p><b>a) Số ghế ở hàng thứ 15:</b></p>\n      <div class=\"text-emerald-300 font-mono\">\n        $$u_{15} = u_1 + 14d = 20 + 14 \times 4 = 20 + 56 = \\mathbf{76} \text{ (ghế)}$$\n      </div>\n\n      <p><b>b) Tổng số ghế của cả 25 hàng ghế:</b></p>\n      <div class=\"text-emerald-300 font-mono\">\n        $$S_{25} = \frac{25[2u_1 + 24d]}{2} = \frac{25[2(20) + 24(4)]}{2} = \frac{25 \times 136}{2} = 25 \times 68 = \\mathbf{1700} \text{ (ghế)}$$\n      </div>\n\n      <div class=\"bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 font-bold\">\n        👉 Đáp số: a) Hàng thứ 15 có <b>76 ghế</b> | b) Sức chứa tối đa: <b>1700 khán giả</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Số ghế ở mỗi hàng lập thành một cấp số cộng với số hạng đầu u 1 bằng 20 và công sai d bằng 4. Ở câu a: Số ghế của hàng thứ 15 là số hạng thứ 15: u 15 bằng u 1 cộng 14 d, bằng 20 cộng 14 nhân 4, bằng 20 cộng 56 bằng 76 chiếc ghế. Ở câu b: Tổng số ghế của toàn bộ 25 hàng ghế chính là tổng 25 số hạng đầu tiên của cấp số cộng: S 25 bằng 25 nhân mở ngoặc vuông hai lần u 1 cộng 24 nhân d đóng ngoặc vuông chia 2. Thay số vào: bằng 25 nhân mở ngoặc hai nhân 20 cộng 24 nhân 4 đóng ngoặc chia 2, bằng 25 nhân 136 chia 2, bằng 25 nhân 68 bằng 1700 ghế. Vậy rạp hát chứa được tối đa 1700 khán giả.",
      "startTime": 184.75,
      "endTime": 249.55,
      "duration": 64.8
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: CHUYỂN SỐ THẬP PHÂN VÔ HẠN TUẦN HOÀN SANG PHÂN SỐ",
      "subtitle": "DẠNG 3 • TỔNG CẤP SỐ NHÂN LÙI VÔ HẠN (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Phân tích: $0,(23) = \frac{23}{100} + \frac{23}{100^2} + ...$ có $u_1 = \frac{23}{100}, q = \frac{1}{100}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 3 (CSN lùi vô hạn)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-amber-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-3\">\n      Biểu diễn số thập phân vô hạn tuần hoàn sau dưới dạng phân số tối giản:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-amber-300 text-base\">\n      $$A = 0,(23) = 0,232323...$$\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với dạng toán rất hay gặp ở Ví dụ 3: Biểu diễn số thập phân vô hạn tuần hoàn sau đây dưới dạng phân số tối giản bằng cách sử dụng tổng của cấp số nhân lùi vô hạn: Số A bằng không phẩy chu kỳ hai mươi ba, tức là không phẩy hai ba hai ba hai ba kéo dài vô tận. Các em có 15 giây để xác định số hạng đầu và công bội.",
      "startTime": 249.55,
      "endTime": 269.45,
      "duration": 19.9
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "ÁP DỤNG CÔNG THỨC $S = \frac{u_1}{1 - q}$",
      "mascotMode": "happy",
      "mascotTip": "Mẹo tổng quát: $0,(abc...) = \frac{abc...}{999...}$ (mẫu có số chữ số 9 bằng độ dài chu kỳ)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Khai triển số thập phân thành chuỗi số vô hạn</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p>Ta phân tích số $A$:</p>\n      <div class=\"text-amber-300 font-mono\">\n        $$A = 0,23 + 0,0023 + 0,000023 + ... = \frac{23}{10^2} + \frac{23}{10^4} + \frac{23}{10^6} + ...$$\n      </div>\n      <p>Đây là tổng của cấp số nhân lùi vô hạn có:</p>\n      <p class=\"text-cyan-300 font-semibold\">• Số hạng đầu: $u_1 = \frac{23}{100}$.</p>\n      <p class=\"text-cyan-300 font-semibold\">• Công bội: $q = \frac{1}{100}$ (thỏa mãn $|q| = 0,01 < 1$).</p>\n      \n      <p>Áp dụng công thức tổng CSN lùi vô hạn:</p>\n      <div class=\"text-emerald-300 font-mono text-sm\">\n        $$A = \frac{u_1}{1 - q} = \frac{\frac{23}{100}}{1 - \frac{1}{100}} = \frac{\frac{23}{100}}{\frac{99}{100}} = \\mathbf{\frac{23}{99}}$$\n      </div>\n\n      <div class=\"bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 font-bold\">\n        👉 Kết luận: Phân số tối giản cần tìm là $\\mathbf{\frac{23}{99}}$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Ta viết số A dưới dạng tổng của các phân số thập phân: A bằng không phẩy hai ba cộng không phẩy không không hai ba cộng không phẩy không không không không hai ba, kéo dài vô tận. Tức là bằng hai mươi ba phần một trăm cộng hai mươi ba phần một trăm bình phương cộng hai mươi ba phần một trăm mũ ba, vân vân. Đây chính là tổng của một cấp số nhân lùi vô hạn có số hạng đầu u 1 bằng hai mươi ba phần một trăm và công bội q bằng một phần một trăm. Do trị tuyệt đối của q bằng không phẩy không một nhỏ hơn một, nên áp dụng công thức tổng cấp số nhân lùi vô hạn: A bằng u 1 chia cho 1 trừ q, bằng hai mươi ba phần một trăm chia cho một trừ một phần một trăm, bằng hai mươi ba phần một trăm chia cho chín mươi chín phần một trăm, rút gọn được đúng bằng hai mươi ba phần chín mươi chín.",
      "startTime": 269.45,
      "endTime": 315.74,
      "duration": 46.3
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: BÀI TOÁN LÃI KÉP TIẾT KIỆM NGÂN HÀNG",
      "subtitle": "DẠNG 4 • MÔ HÌNH LÃI KÉP & BẤT PHƯƠNG TRÌNH MŨ (30 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Công thức lãi kép: $T = A(1 + r)^n$. Đặt $A(1 + r)^n > 350$ triệu để tìm $n$ nguyên nhỏ nhất!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 4 (Lãi kép thực tế)</span>\n      <div class=\"countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-rose-400 countdown-num\">30s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Bác An gửi tiết kiệm ngân hàng:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2\">\n      <p>• Số tiền gốc ban đầu: <b>$A = 200$ triệu đồng</b>.</p>\n      <p>• Lãi suất: <b>$r = 6\\%$/năm</b> (hình thức lãi kép, lãi nhập vốn hàng năm).</p>\n    </div>\n    <p class=\"text-xs text-rose-300 font-bold\">\n      Hỏi sau ít nhất bao nhiêu năm, tổng số tiền bác An nhận được (cả gốc và lãi) vượt quá 350 triệu đồng?\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta đến với bài toán thực tế Vận dụng cao ở Ví dụ 4: Bác An gửi tiết kiệm số tiền 200 triệu đồng vào ngân hàng với lãi suất 6 phần trăm một năm theo hình thức lãi kép, tức là tiền lãi của mỗi năm được gộp vào vốn để tính lãi cho năm tiếp theo. Giả sử lãi suất không thay đổi trong suốt quá trình gửi và bác An không rút tiền ra. Hỏi sau ít nhất bao nhiêu năm thì tổng số tiền cả gốc lẫn lãi bác An nhận được sẽ vượt quá 350 triệu đồng? Các em có 30 giây suy nghĩ.",
      "startTime": 315.74,
      "endTime": 344.62,
      "duration": 28.87
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "GIẢI BẤT PHƯƠNG TRÌNH MŨ & QUY TẮC LÀM TRÒN LÊN",
      "mascotMode": "happy",
      "mascotTip": "Khi $n > 9,59$, vì số năm gửi phải là số nguyên nên phải làm tròn lên thành 10 năm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Mô hình tăng trưởng lãi kép: $T_n = A(1 + r)^n$</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p>Số tiền cả gốc lẫn lãi sau $n$ năm là:</p>\n      <div class=\"text-rose-300 font-mono\">\n        $$T_n = 200 \times (1 + 0,06)^n = 200 \times (1,06)^n \text{ (triệu đồng)}$$\n      </div>\n      <p>Để số tiền vượt quá $350$ triệu đồng, ta có bất phương trình:</p>\n      <div class=\"text-cyan-300 font-mono\">\n        $$200 \times (1,06)^n > 350 \\iff (1,06)^n > \frac{350}{200} = 1,75$$\n      </div>\n      <p>Lấy logarit tự nhiên hoặc logarit cơ số $1,06$ hai vế:</p>\n      <div class=\"text-emerald-300 font-mono\">\n        $$n > \\log_{1,06}(1,75) = \frac{\\ln(1,75)}{\\ln(1,06)} \u0007pprox 9,59 \text{ (năm)}$$\n      </div>\n      <p class=\"text-slate-300\">Vì số năm gửi ngân hàng phải là số nguyên ($n \\in \\mathbb{N}^*$):</p>\n      <div class=\"bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold\">\n        👉 Sau ít nhất <b>10 năm</b> thì số tiền bác An nhận được vượt quá $350$ triệu đồng.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây! Lời giải như sau: Gọi n là số năm bác An gửi tiền. Số tiền nhận được sau n năm theo công thức lãi kép là: T n bằng A nhân mở ngoặc 1 cộng r đóng ngoặc mũ n, bằng 200 nhân mở ngoặc 1 cộng không phẩy không sáu đóng ngoặc mũ n, bằng 200 nhân một phẩy không sáu mũ n triệu đồng. Để số tiền vượt quá 350 triệu đồng, ta có bất phương trình: 200 nhân một phẩy không sáu mũ n lớn hơn 350. Chia hai vế cho 200, ta được: một phẩy không sáu mũ n lớn hơn một phẩy bảy lăm. Lấy logarit cơ số một phẩy không sáu của hai vế, ta được: n lớn hơn logarit cơ số một phẩy không sáu của một phẩy bảy lăm, xấp xỉ 9 phẩy 59 năm. Vì số năm gửi ngân hàng phải là một số nguyên dương, nên sau ít nhất 10 năm, số tiền bác An nhận được sẽ vượt quá 350 triệu đồng.",
      "startTime": 344.62,
      "endTime": 399.02,
      "duration": 54.41
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI TRONG BÀI TOÁN THỰC TẾ & LÃI KÉP",
      "subtitle": "CẨN TRỌNG ĐƠN VỊ THỜI GIAN VÀ QUY TẮC LÀM TRÒN",
      "mascotMode": "warning",
      "mascotTip": "Quy tắc bắt buộc: Bài toán thực tế tìm số lần/số năm thì $n > 9,01$ vẫn phải làm tròn lên thành 10!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"text-lg\">⚠️</span>\n      <h3 class=\"text-sm font-bold text-amber-300\">3 Lỗi Sai Thường Gặp Trong Bài Toán Thực Tế</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">1. Làm tròn số học thông thường:</span>\n        <p class=\"text-slate-300 mt-1\">Sai: $n > 9,1$ làm tròn xuống $9$.<br/><b class=\"text-emerald-400\">Đúng: Phải làm tròn lên (Ceiling) thành 10</b> vì sau 9 năm chưa đạt yêu cầu.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">2. Lẫn lộn kỳ hạn tính lãi:</span>\n        <p class=\"text-slate-300 mt-1\">Lãi suất năm $r$, nhưng tính lãi theo quý thì lãi suất mỗi kỳ là $\frac{r}{4}$ và số kỳ sau $t$ năm là $4t$.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400\">3. Nhầm Lãi đơn & Lãi kép:</span>\n        <p class=\"text-slate-300 mt-1\">Lãi đơn: $T_n = A(1 + nr)$ (tăng tuyến tính).<br/>Lãi kép: $T_n = A(1 + r)^n$ (tăng theo cấp số nhân).</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi kết thúc Mục 2, Thầy Cú có 3 lưu ý đắt giá về bài toán thực tế: Một là: quy tắc làm tròn thời gian. Khi giải ra n lớn hơn 9 phẩy 01 thì bắt buộc phải làm tròn lên thành 10 năm, vì hết năm thứ 9 số tiền vẫn chưa đủ vượt ngưỡng. Hai là: đồng nhất đơn vị lãi suất và kỳ hạn. Nếu lãi suất cho theo năm nhưng gửi theo kỳ hạn quý hoặc tháng thì phải chia tỉ lệ tương ứng. Ba là: phân biệt lãi đơn và lãi kép. Lãi đơn chỉ sinh lãi trên vốn ban đầu; còn lãi kép thì lãi nhập vào vốn để tiếp tục sinh lãi.",
      "startTime": 399.02,
      "endTime": 441.58,
      "duration": 42.55
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "KẾT THÚC MỤC 2 • CHUYỂN SANG MỤC 3: CASIO 580 & ĐỀ TỔNG ÔN",
      "mascotMode": "happy",
      "mascotTip": "Chuyển sang Mục 3: Học bí kíp bấm máy Casio fx-580VN X giải đề trắc nghiệm chuẩn Bộ GD&ĐT!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center\">\n    <div class=\"inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2\">\n      <span class=\"text-2xl\">🦉🎯</span>\n    </div>\n    <h3 class=\"text-lg font-black text-emerald-200 mb-1\">Hoàn Thành Mục 2 Xuất Sắc!</h3>\n    <p class=\"text-xs text-slate-300 max-w-xl mx-auto leading-relaxed\">\n      Các em đã trang bị đầy đủ công cụ phân tích và mô hình hóa thực tế.<br/>\n      Hãy tiếp tục giữ vững phong độ để chinh phục các mẹo bấm máy Casio đỉnh cao ở Mục 3!\n    </p>\n    <div class=\"mt-3 flex justify-center gap-2\">\n      <span class=\"px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40\">\n        Sẵn sàng bước vào Mục 3: Kỹ năng Casio 🚀\n      </span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã làm chủ 4 dạng toán trọng tâm của Chương 2! Chúng ta đã nắm vững phương pháp chứng minh tính đơn điệu và bị chặn, giải quyết bài toán rạp hát với cấp số cộng, chuyển đổi số thập phân vô hạn tuần hoàn bằng cấp số nhân lùi vô hạn, và xử lý bài toán lãi kép bằng bất phương trình mũ. Bây giờ, chúng ta sẽ bước sang Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio fx 580VN X và thực chiến đề tổng ôn theo đúng cấu trúc đề thi của Bộ Giáo dục và Đào tạo.",
      "startTime": 441.58,
      "endTime": 470.98,
      "duration": 29.4
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_ontap_c2_muc2 = window.G11_CHAPTER2_DATA.g11_ontap_c2_muc2;
  window.G11_CHAPTER2_DATA.ontap_c2_muc2 = window.G11_CHAPTER2_DATA.g11_ontap_c2_muc2;

  window.G11_CHAPTER2_DATA.g11_ontap_c2_muc3 = {
  "lessonId": "toan11_ontap_c2",
  "lessonTitle": "Bài tập cuối chương II (Ôn tập chương 2)",
  "sectionId": "g11_ontap_c2_muc3",
  "sectionTitle": "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn",
  "audio": "/audio/g11_ontap_c2_muc3.mp3",
  "audioSrc": "./audio/g11_ontap_c2_muc3.mp3",
  "audio_src": "./audio/g11_ontap_c2_muc3.mp3",
  "title": "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn",
  "owl_tip": "3 phím chức năng thần thánh: [TABLE] Menu 8 quét dãy số; [Ans] tính dãy truy hồi; [Shift][x] tính tổng xích-ma!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. CHIẾN THUẬT CASIO FX-580VN X TRONG DÃY SỐ VÀ CẤP SỐ",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CẤU TRÚC ĐỀ THI TOÁN CHUẨN MỚI CỦA BỘ GD&ĐT",
      "scenes": [
        2
      ]
    },
    {
      "partNumber": 3,
      "partTitle": "Phần 3: 4 Ví dụ minh họa trọng tâm & Đồng hồ bấm giờ",
      "scenes": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ]
    },
    {
      "partNumber": 4,
      "partTitle": "Phần 4: 11. TỔNG HỢP 5 CẠM BẪY ĐỀ THI TỐT NGHIỆP VÀ ĐGNL",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT TOÀN BỘ CHƯƠNG 2 & LỜI CHÚC TỪ THẦY CÚ",
      "scenes": [
        12
      ]
    }
  ],
  "timeline": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "totalDuration": 548.86,
  "formattedDuration": "09:08",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. CHIẾN THUẬT CASIO FX-580VN X TRONG DÃY SỐ VÀ CẤP SỐ",
      "subtitle": "MỤC 3 • LẬP TRÌNH BÀI TOÁN DÃY SỐ TRÊN MÁY TÍNH CẦM TAY",
      "mascotMode": "pointer",
      "mascotTip": "3 phím chức năng thần thánh: [TABLE] Menu 8 quét dãy số; [Ans] tính dãy truy hồi; [Shift][x] tính tổng xích-ma!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-lg uppercase\">Kỹ năng Casio</span>\n      <h3 class=\"text-lg font-black text-cyan-200\">3 Tính Năng Vượt Trội Trên Casio fx-580VN X</h3>\n    </div>\n    <p class=\"text-xs text-slate-300\">Làm chủ các phím bấm giúp tăng tốc độ làm bài gấp 3 lần và triệt tiêu sai sót tính toán:</p>\n  </div>\n\n  <div class=\"grid grid-cols-3 gap-3 text-xs\">\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-4 border-cyan-400\">\n      <h4 class=\"font-bold text-cyan-300 mb-1\">📊 1. Bảng Giá Trị [MENU] [8]</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Nhập $f(x) = u_n$.<br/>• Start: 1, End: 20, Step: 1.<br/>• Quan sát cột $f(x)$ để kết luận tính tăng/giảm và giá trị chặn $m, M$.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-4 border-emerald-400\">\n      <h4 class=\"font-bold text-emerald-300 mb-1\">🔁 2. Vòng lặp [Ans] Truy hồi</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Nhập giá trị ban đầu $u_1$ [=].<br/>• Nhập công thức: $f(\text{Ans})$ rồi bấm liên tục phím [=] để tính $u_2, u_3, u_4...$ nhanh chóng.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-t-4 border-amber-400\">\n      <h4 class=\"font-bold text-amber-300 mb-1\">∑ 3. Tổng Xích-ma [SHIFT] [x]</h4>\n      <p class=\"text-slate-300 leading-relaxed\">• Phím $\\sum_{x=1}^n f(x)$.<br/>• Tính trực tiếp tổng $S_n$ mà không cần nhớ công thức biến đổi trung gian.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Kỹ năng máy tính Casio fx 580VN X và Đề tổng ôn chuẩn cấu trúc Bộ Giáo dục và Đào tạo. Máy tính cầm tay là một trợ thủ đắc lực giúp các em kiểm tra kết quả và giải nhanh trắc nghiệm trong phòng thi. Trong Chương 2, có ba tính năng vượt trội: Một là chức năng bảng giá trị Bảng Menu 8 để quét bảng giá trị tính tăng giảm và bị chặn; Hai là phím Ans kết hợp hai chấm để lập trình vòng lặp giải dãy số truy hồi; và Ba là phím tính tổng chuỗi xích-ma để tính tổng n số hạng của cấp số cộng và cấp số nhân chỉ trong hai giây.",
      "startTime": 0.0,
      "endTime": 33.86,
      "duration": 33.86
    },
    {
      "sceneIndex": 2,
      "title": "2. CẤU TRÚC ĐỀ THI TOÁN CHUẨN MỚI CỦA BỘ GD&ĐT",
      "subtitle": "ĐỊNH DẠNG 3 PHẦN: NHIỀU LỰA CHỌN, ĐÚNG/SAI VÀ TRẢ LỜI NGẮN",
      "mascotMode": "explain",
      "mascotTip": "Phần II (Đúng/Sai) có 4 ý a, b, c, d với thang điểm lũy tiến 0.1 - 0.25 - 0.5 - 1.0 điểm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"w-3 h-3 rounded-full bg-emerald-400 animate-pulse\"></span>\n      <h3 class=\"text-sm font-bold text-emerald-300\">Cấu Trúc Đề Thi Môn Toán Chuẩn Bộ GD&ĐT</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-3 text-xs\">\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700\">\n        <span class=\"font-bold text-indigo-400\">Phần I: Trắc nghiệm 4 lựa chọn</span>\n        <p class=\"text-slate-300 mt-1\">Gồm các câu hỏi 4 phương án $A, B, C, D$, chỉ có duy nhất 1 phương án đúng. Mỗi câu đúng được <b>0,25 điểm</b>.</p>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700\">\n        <span class=\"font-bold text-emerald-400\">Phần II: Câu hỏi Đúng / Sai</span>\n        <p class=\"text-slate-300 mt-1\">Mỗi câu có 4 ý $a, b, c, d$.<br/>• Đúng 1 ý: 0,1 đ.<br/>• Đúng 2 ý: 0,25 đ.<br/>• Đúng 3 ý: 0,5 đ.<br/>• Đúng cả 4 ý: <b>1,0 điểm</b>.</p>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700\">\n        <span class=\"font-bold text-amber-400\">Phần III: Câu trả lời ngắn</span>\n        <p class=\"text-slate-300 mt-1\">Học sinh tự giải toán và tô đáp số vào khung số trên phiếu trả lời. Mỗi câu đúng được <b>0,5 điểm</b>.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Kỳ thi tốt nghiệp Trung học phổ thông và các bài kiểm tra định kỳ hiện nay áp dụng cấu trúc đề chuẩn mới gồm 3 phần rõ rệt: Phần 1 gồm các câu trắc nghiệm nhiều lựa chọn 4 phương án A, B, C, D quen thuộc. Phần 2 là dạng câu hỏi Trắc nghiệm Đúng Sai: mỗi câu có 4 mệnh đề a, b, c, d; học sinh cần phân tích tính đúng sai của từng ý, thang điểm lũy tiến tối đa 1 điểm cho một câu nếu trả lời đúng cả 4 ý. Phần 3 là dạng câu hỏi Trắc nghiệm Trả lời ngắn: học sinh tự tính toán và điền đáp số vào phiếu, không có gợi ý phương án. Ngay sau đây, chúng ta sẽ thực hành các dạng bài chuẩn này.",
      "startTime": 33.86,
      "endTime": 82.8,
      "duration": 48.94
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH SỐ HẠNG DÃY TRUY HỒI BẰNG CASIO",
      "subtitle": "KỸ THUẬT VÒNG LẶP ANS TRUY HỒI (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Bấm: 2 [=], sau đó gõ: 3 x Ans - 2 rồi bấm [=] liên tiếp để ra $u_2, u_3...$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-cyan-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 1 (Casio Truy Hồi)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-cyan-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-cyan-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-3\">\n      Cho dãy số $(u_n)$ xác định bởi hệ thức truy hồi:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-cyan-300 text-sm mb-3\">\n      $$\begin{cases} u_1 = 2 \\ u_{n+1} = 3u_n - 2 \\quad (n \\ge 1) \\end{cases}$$\n    </div>\n    <p class=\"text-xs text-slate-300\">\n      <b>Yêu cầu:</b> Tính giá trị số hạng thứ sáu $u_6$.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta bắt đầu với Ví dụ 1: Cho dãy số u n xác định bởi công thức truy hồi: u 1 bằng 2, và u n cộng 1 bằng 3 lần u n trừ 2 với mọi n lớn hơn hoặc bằng 1. Yêu cầu: Hãy tìm số hạng thứ 6 của dãy số u 6. Các em có 15 giây suy nghĩ.",
      "startTime": 82.8,
      "endTime": 101.88,
      "duration": 19.08
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT HỢP BẤM MÁY VÀ CÔNG THỨC TỔNG QUÁT",
      "mascotMode": "happy",
      "mascotTip": "Quy luật: $u_{n+1} - 1 = 3(u_n - 1) \\implies u_n - 1 = (u_1 - 1) \\cdot 3^{n-1} \\implies u_n = 3^{n-1} + 1$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Hai cách xử lý: Máy tính Casio & Công thức tổng quát</h4>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-cyan-500/30\">\n        <span class=\"font-bold text-cyan-400\">Cách 1: Quy trình bấm Casio fx-580VN X:</span>\n        <ul class=\"text-slate-300 mt-1 space-y-1 list-disc pl-4\">\n          <li>Bấm: <span class=\"bg-slate-800 px-1 py-0.5 rounded font-mono text-cyan-300\">2 [=]</span> (lưu $u_1$).</li>\n          <li>Nhập: <span class=\"bg-slate-800 px-1 py-0.5 rounded font-mono text-cyan-300\">3 × [Ans] - 2</span>.</li>\n          <li>Bấm <span class=\"text-cyan-300\">[=]</span> lần 1: $u_2 = 4$.</li>\n          <li>Bấm <span class=\"text-cyan-300\">[=]</span> lần 2: $u_3 = 10$.</li>\n          <li>Bấm <span class=\"text-cyan-300\">[=]</span> lần 3: $u_4 = 28$.</li>\n          <li>Bấm <span class=\"text-cyan-300\">[=]</span> lần 4: $u_5 = 82$.</li>\n          <li>Bấm <span class=\"text-cyan-300\">[=]</span> lần 5: $\\mathbf{u_6 = 244}$.</li>\n        </ul>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-emerald-500/30\">\n        <span class=\"font-bold text-emerald-400\">Cách 2: Giải tích số học đưa về CSN:</span>\n        <p class=\"text-slate-300 mt-1 leading-relaxed\">\n          Biến đổi hệ thức truy hồi:<br/>\n          $u_{n+1} - 1 = 3(u_n - 1)$<br/>\n          Đặt $v_n = u_n - 1 \\implies v_{n+1} = 3v_n$.<br/>\n          $(v_n)$ là CSN có $v_1 = u_1 - 1 = 1$, công bội $q = 3$.<br/>\n          $\\implies v_n = 1 \\cdot 3^{n-1} = 3^{n-1}$.<br/>\n          $\\implies u_n = v_n + 1 = 3^{n-1} + 1$.<br/>\n          Với $n = 6$:<br/>\n          $u_6 = 3^5 + 1 = 243 + 1 = \\mathbf{244}$.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Cách một bấm máy Casio siêu tốc: Bước một, bấm 2 rồi ấn phím bằng để gán giá trị 2 vào biến Ans. Bước hai, gõ biểu thức 3 nhân Ans trừ 2. Bước ba, ấn dấu bằng lần thứ nhất ta được u 2 bằng 4; ấn dấu bằng lần hai được u 3 bằng 10; lần ba được u 4 bằng 28; lần bốn được u 5 bằng 82; và ấn dấu bằng lần thứ năm ta thu được u 6 bằng 244. Cách hai dùng công thức: Ta biến đổi u n cộng 1 trừ 1 bằng 3 lần mở ngoặc u n trừ 1 đóng ngoặc. Đặt v n bằng u n trừ 1 thì v n là cấp số nhân có v 1 bằng 1 và công bội q bằng 3. Do đó v n bằng 3 mũ n trừ một, suy ra u n bằng 3 mũ n trừ một cộng một. Với n bằng 6, ta có u 6 bằng 3 mũ 5 cộng một, bằng 243 cộng 1 bằng 244.",
      "startTime": 101.88,
      "endTime": 158.76,
      "duration": 56.88
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TÍNH TỔNG DÃY SỐ BẰNG PHÍM XÍCH-MA",
      "subtitle": "KỸ THUẬT TÍNH NHANH TỔNG BẰNG PHÍM $\\sum$ (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Phím [SHIFT] [x] cho phép tính $\\sum_{x=1}^{50} u_x$. Với CSC: $u_x = 5 + (x - 1) \\cdot 3$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 2 (Casio Tính Tổng)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-emerald-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-3\">\n      Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$.\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-center font-mono text-emerald-300 text-base mb-3\">\n      $$S_{50} = u_1 + u_2 + u_3 + \\dots + u_{50} = ?$$\n    </div>\n    <p class=\"text-xs text-slate-300\">\n      <b>Yêu cầu:</b> Tính giá trị $S_{50}$ và kiểm chứng bằng phím bấm $\\sum$ trên Casio fx-580VN X.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta tiếp tục với Ví dụ 2: Cho cấp số cộng u n có số hạng đầu u 1 bằng 5 và công sai d bằng 3. Hãy tính tổng của 50 số hạng đầu tiên: S 50 bằng u 1 cộng u 2 cộng chấm chấm cộng u 50. Các em có 15 giây suy nghĩ để tính nhẩm bằng công thức hoặc thiết lập phép tính trên máy tính.",
      "startTime": 158.76,
      "endTime": 178.61,
      "duration": 19.85
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT HỢP CÔNG THỨC TỔNG CSC VÀ PHÍM $\\sum$ TRÊN MÁY TÍNH",
      "mascotMode": "happy",
      "mascotTip": "Bấm phím: [SHIFT] [x] nhập (5 + (x - 1) * 3) với x chạy từ 1 đến 50 -> Kết quả: 3925!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Hai cách tính tổng $S_{50}$</h4>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-emerald-500/30\">\n        <span class=\"font-bold text-emerald-400\">Cách 1: Áp dụng công thức tổng CSC:</span>\n        <div class=\"text-slate-300 mt-1 space-y-1\">\n          $$S_{50} = \frac{50[2u_1 + 49d]}{2}$$\n          $$= 25 \times [2(5) + 49(3)]$$\n          $$= 25 \times (10 + 147)$$\n          $$= 25 \times 157 = \\mathbf{3925}$$.\n        </div>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-cyan-500/30\">\n        <span class=\"font-bold text-cyan-400\">Cách 2: Bấm phím $\\sum$ trên Casio fx-580:</span>\n        <div class=\"text-slate-300 mt-1 space-y-1\">\n          <p>• Nhấn: <span class=\"bg-slate-800 px-1 py-0.5 rounded font-mono text-cyan-300\">[SHIFT] [x]</span></p>\n          <p>• Nhập biểu thức: $5 + (x - 1) \times 3$</p>\n          <p>• Cận dưới: $x = 1$ | Cận trên: $50$</p>\n          <div class=\"bg-slate-950 p-1.5 rounded font-mono text-cyan-300 text-center my-1\">\n            $$\\sum_{x=1}^{50} (5 + 3(x-1)) = \\mathbf{3925}$$\n          </div>\n          <p class=\"text-emerald-300 font-semibold\">👉 Máy hiển thị ngay 3925.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Cách một dùng công thức toán học: Áp dụng công thức S n bằng n nhân mở ngoặc vuông hai lần u 1 cộng n trừ 1 nhân d đóng ngoặc vuông chia 2. Ta có: S 50 bằng 50 nhân mở ngoặc vuông hai nhân 5 cộng 49 nhân 3 đóng ngoặc vuông chia 2, bằng 25 nhân mở ngoặc 10 cộng 147 đóng ngoặc, bằng 25 nhân 157 bằng 3925. Cách hai dùng phím xích-ma trên Casio: Ta ấn Shift phím x dưới nút nguồn. Trên màn hình hiện ra ký hiệu xích-ma. Ta nhập biểu thức số hạng tổng quát: 5 cộng mở ngoặc x trừ 1 đóng ngoặc nhân 3; cận dưới nhập x bằng 1; cận trên nhập 50. Nhấn dấu bằng, máy tính xuất ngay kết quả chính xác 3925 chỉ trong một giây.",
      "startTime": 178.61,
      "endTime": 239.71,
      "duration": 61.1
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: CÂU HỎI ĐÚNG / SAI CHUẨN ĐỀ BỘ GD&ĐT",
      "subtitle": "PHẦN II • CÂU HỎI ĐÚNG / SAI 4 Ý (30 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Phần II: Xét tính đúng sai của từng ý độc lập: ý a tính $u_5$; ý b tìm $u_n$; ý c giải $u_n = 2023$; ý d tính $S_{20}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 3 (Dạng Đúng / Sai)</span>\n      <div class=\"countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-indigo-400 countdown-num\">30s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Xét tính Đúng/Sai của các mệnh đề sau:\n    </p>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between\">\n        <span class=\"text-slate-200\"><b>a)</b> Số hạng thứ năm của cấp số cộng là $u_5 = 19$.</span>\n        <span class=\"px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono\">[Đ / S ?]</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between\">\n        <span class=\"text-slate-200\"><b>b)</b> Công thức số hạng tổng quát của cấp số cộng là $u_n = 4n - 1$.</span>\n        <span class=\"px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono\">[Đ / S ?]</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between\">\n        <span class=\"text-slate-200\"><b>c)</b> Số $2023$ là một số hạng của cấp số cộng đã cho.</span>\n        <span class=\"px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono\">[Đ / S ?]</span>\n      </div>\n      <div class=\"p-2.5 bg-slate-900/80 rounded border border-slate-700 flex items-center justify-between\">\n        <span class=\"text-slate-200\"><b>d)</b> Tổng của 20 số hạng đầu tiên là $S_{20} = 820$.</span>\n        <span class=\"px-2 py-0.5 bg-slate-800 text-slate-400 rounded text-[11px] font-mono\">[Đ / S ?]</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúng ta đến với câu hỏi dạng Đúng Sai theo chuẩn đề thi của Bộ Giáo dục và Đào tạo ở Ví dụ 3: Cho cấp số cộng u n có số hạng đầu u 1 bằng 3 và công sai d bằng 4. Xét tính Đúng hoặc Sai của bốn mệnh đề sau: Ý a: Số hạng thứ năm u 5 bằng 19. Ý b: Số hạng tổng quát u n bằng bốn n trừ một. Ý c: Số 2023 là một số hạng của cấp số cộng đã cho. Ý d: Tổng hai mươi số hạng đầu tiên S 20 bằng 820. Các em có 30 giây để xác định tính đúng sai của cả 4 mệnh đề.",
      "startTime": 239.71,
      "endTime": 284.16,
      "duration": 44.45
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: a) ĐÚNG • b) ĐÚNG • c) ĐÚNG • d) ĐÚNG",
      "mascotMode": "happy",
      "mascotTip": "Thẩm định: $u_5 = 3 + 4(4) = 19$; $4n-1=2023 \\implies 4n=2024 \\implies n=506 \\in \\mathbb{N}^*$; $S_{20} = 20[6 + 19(4)]/2 = 820$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded\">Đáp án chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Thẩm định tính Đúng/Sai của từng ý</h4>\n    </div>\n    <div class=\"space-y-2 text-xs\">\n      <div class=\"p-2 bg-slate-900/90 rounded border border-emerald-500/40\">\n        <div class=\"flex justify-between items-center mb-1\">\n          <span class=\"text-slate-200\"><b>a)</b> $u_5 = u_1 + 4d = 3 + 4(4) = 19$.</span>\n          <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold\">ĐÚNG</span>\n        </div>\n      </div>\n      <div class=\"p-2 bg-slate-900/90 rounded border border-emerald-500/40\">\n        <div class=\"flex justify-between items-center mb-1\">\n          <span class=\"text-slate-200\"><b>b)</b> $u_n = u_1 + (n - 1)d = 3 + 4(n - 1) = 4n - 1$.</span>\n          <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold\">ĐÚNG</span>\n        </div>\n      </div>\n      <div class=\"p-2 bg-slate-900/90 rounded border border-emerald-500/40\">\n        <div class=\"flex justify-between items-center mb-1\">\n          <span class=\"text-slate-200\"><b>c)</b> Cho $4n - 1 = 2023 \\iff 4n = 2024 \\iff n = 506 \\in \\mathbb{N}^*$.</span>\n          <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold\">ĐÚNG</span>\n        </div>\n      </div>\n      <div class=\"p-2 bg-slate-900/90 rounded border border-emerald-500/40\">\n        <div class=\"flex justify-between items-center mb-1\">\n          <span class=\"text-slate-200\"><b>d)</b> $S_{20} = \frac{20[2(3) + 19(4)]}{2} = 10 \times (6 + 76) = 10 \times 82 = 820$.</span>\n          <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold\">ĐÚNG</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây! Chúng ta cùng thẩm định từng mệnh đề: Ở ý a: u 5 bằng u 1 cộng 4 d, bằng 3 cộng 4 nhân 4 bằng 19. Mệnh đề a là ĐÚNG. Ở ý b: u n bằng u 1 cộng n trừ 1 nhân d, bằng 3 cộng n trừ 1 nhân 4, bằng 4 n trừ 1. Mệnh đề b là ĐÚNG. Ở ý c: Giả sử 2023 là số hạng thứ n, ta có phương trình: 4 n trừ 1 bằng 2023, suy ra 4 n bằng 2024, tương đương n bằng 506. Vì 506 là số nguyên dương nên 2023 chính là số hạng thứ 506 của dãy. Mệnh đề c là ĐÚNG. Ở ý d: Tổng hai mươi số hạng đầu là S 20 bằng 20 nhân mở ngoặc vuông hai lần u 1 cộng 19 d đóng ngoặc vuông chia 2, bằng 10 nhân mở ngoặc 6 cộng 19 nhân 4 đóng ngoặc, bằng 10 nhân mở ngoặc 6 cộng 76 đóng ngoặc, bằng 10 nhân 82 bằng 820. Mệnh đề d là ĐÚNG. Cả bốn mệnh đề đều đúng, đạt trọn vẹn 1 điểm.",
      "startTime": 284.16,
      "endTime": 369.77,
      "duration": 85.61
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: CÂU HỎI TRẢ LỜI NGẮN (SINH HỌC & CSN)",
      "subtitle": "PHẦN III • CÂU HỎI TRẢ LỜI NGẮN (30 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "4 giờ = 240 phút = 12 chu kỳ phân đôi. Sau 12 chu kỳ: $N = 100 \times 2^{12}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 4 (Dạng Trả lời ngắn)</span>\n      <div class=\"countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-rose-400 countdown-num\">30s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Một quần thể vi khuẩn nhân đôi sau mỗi $20$ phút:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2\">\n      <p>• Số lượng vi khuẩn ban đầu: <b>$N_0 = 100$ vi khuẩn</b>.</p>\n      <p>• Chu kỳ phân đôi: <b>$20$ phút/lần</b>.</p>\n    </div>\n    <p class=\"text-xs text-rose-300 font-bold\">\n      Hỏi sau 4 giờ nuôi cấy, số lượng vi khuẩn là bao nhiêu tế bào?\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta đến với câu hỏi dạng Trả lời ngắn theo chuẩn Phần 3 ở Ví dụ 4: Trong một phòng thí nghiệm sinh học, người ta nghiên cứu sự sinh trưởng của một loài vi khuẩn. Biết rằng cứ sau 20 phút thì mỗi tế bào vi khuẩn lại nhân đôi một lần. Giả sử ban đầu có đúng 100 tế bào vi khuẩn và các điều kiện môi trường đều tối ưu để toàn bộ tế bào đều phân chia bình thường. Hỏi sau đúng 4 giờ, số lượng vi khuẩn trong môi trường nuôi cấy là bao nhiêu tế bào? Các em có 30 giây để tính toán đáp số.",
      "startTime": 369.77,
      "endTime": 400.42,
      "duration": 30.65
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: 409600 TẾ BÀO VI KHUẨN",
      "mascotMode": "happy",
      "mascotTip": "Tính: $2^{12} = 4096 \\implies N = 100 \times 4096 = 409600$ tế bào!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Mô hình phân bào theo Cấp số nhân</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>Bước 1: Tính số chu kỳ phân bào:</b></p>\n      <p class=\"text-cyan-300 font-semibold\">• Đổi: $4 \text{ giờ} = 4 \times 60 = 240 \text{ phút}$.</p>\n      <p class=\"text-cyan-300 font-semibold\">• Số lần phân chia: $k = \frac{240}{20} = \\mathbf{12} \text{ (lần)}$.</p>\n\n      <p><b>Bước 2: Thiết lập cấp số nhân:</b></p>\n      <p>Mỗi lần phân đôi, số lượng vi khuẩn tăng gấp $2$ lần ($q = 2$).</p>\n      <div class=\"text-emerald-300 font-mono text-sm\">\n        $$N = N_0 \times 2^k = 100 \times 2^{12} = 100 \times 4096 = \\mathbf{409600} \text{ (tế bào)}$$\n      </div>\n\n      <div class=\"bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold\">\n        👉 Đáp số điền vào phiếu trả lời trắc nghiệm: <b class=\"text-white text-base\">409600</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây! Lời giải chi tiết như sau: Đổi 4 giờ bằng 240 phút. Vì cứ sau 20 phút vi khuẩn lại phân đôi một lần, nên sau 4 giờ số chu kỳ phân đôi là: 240 chia 20 bằng 12 chu kỳ. Số lượng vi khuẩn sau mỗi chu kỳ lập thành một cấp số nhân: Ban đầu có N 0 bằng 100; sau chu kỳ thứ nhất có N 1 bằng 100 nhân 2; sau chu kỳ thứ hai có N 2 bằng 100 nhân hai mũ hai. Do đó, sau chu kỳ thứ 12, số lượng vi khuẩn là: N 12 bằng N 0 nhân hai mũ 12, bằng 100 nhân 4096, bằng 409600 tế bào vi khuẩn. Đáp số học sinh tô vào phiếu trả lời là 409600.",
      "startTime": 400.42,
      "endTime": 459.48,
      "duration": 59.06
    },
    {
      "sceneIndex": 11,
      "title": "11. TỔNG HỢP 5 CẠM BẪY ĐỀ THI TỐT NGHIỆP VÀ ĐGNL",
      "subtitle": "BỘ LỌC CẢNH BÁO BẢO TOÀN ĐIỂM SỐ TUYỆT ĐỐI",
      "mascotMode": "warning",
      "mascotTip": "Ghi nhớ: Đề thi thường gài bẫy công sai âm $d < 0$, công bội âm $q < 0$ và số hạng không xác định!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"text-lg\">🛡️</span>\n      <h3 class=\"text-sm font-bold text-amber-300\">5 Cạm Bẫy Đề Thi Đánh Giá Năng Lực & Tốt Nghiệp</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-2 text-xs\">\n      <div class=\"bg-slate-900/80 p-2 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">1. Cấp số nhân đan dấu ($q < 0$):</span>\n        <p class=\"text-slate-300 mt-0.5\">Dãy có các số hạng xen kẽ dấu, cẩn thận dấu âm khi lũy thừa chẵn lẻ: $(-2)^n$ khác $-2^n$.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">2. Phương trình tìm $n$ có nghiệm lẻ:</span>\n        <p class=\"text-slate-300 mt-0.5\">Nếu giải ra $n = 15,4$ thì số đó <b>không thuộc</b> dãy số (vì $n$ phải là số nguyên dương).</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400\">3. Trường hợp công bội kép:</span>\n        <p class=\"text-slate-300 mt-0.5\">$q^2 = 4 \\implies q = 2$ hoặc $q = -2$. Đọc kỹ đề bài có yêu cầu $q > 0$ hay không!</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400\">4. Đếm số khoảng cách chu kỳ:</span>\n        <p class=\"text-slate-300 mt-0.5\">Khoảng cách giữa số hạng thứ $m$ và thứ $n$ là $(n - m)d$, chứ không phải $(n - m + 1)d$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để bảo toàn điểm số tuyệt đối trong kỳ thi, các em hãy ghi nhớ 5 chiếc bẫy tinh vi thường được người ra đề gài vào: Một là: công bội q âm. Khi q âm, các số hạng của cấp số nhân sẽ đan dấu âm dương xen kẽ, nếu đề bài hỏi số hạng thứ mấy mang dấu dương thì phải xét số mũ chẵn lẻ cẩn thận. Hai là: bài toán ba số lập thành cấp số nhân có tích bằng hằng số, luôn tồn tại hai trường hợp của công bội q. Ba là: bẫy điều kiện công sai d bằng 0. Khi d bằng 0, cấp số cộng là một dãy hằng số. Bốn là: quên điều kiện n thuộc N sao khi giải phương trình tìm vị trí số hạng. Năm là: nhầm lẫn giữa chu kỳ phân chia ban đầu và số hạng thứ n của dãy số.",
      "startTime": 459.48,
      "endTime": 503.54,
      "duration": 44.06
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT TOÀN BỘ CHƯƠNG 2 & LỜI CHÚC TỪ THẦY CÚ",
      "subtitle": "HOÀN THÀNH TOÀN DIỆN CHƯƠNG II: DÃY SỐ, CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
      "mascotMode": "happy",
      "mascotTip": "Thầy chúc các em tự tin bứt phá điểm 9, 10 trong tất cả các bài kiểm tra và kỳ thi sắp tới!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 via-teal-900/60 to-cyan-900/60 p-4 rounded-xl border border-emerald-500/40 text-center\">\n    <div class=\"inline-flex p-3 bg-emerald-500/20 rounded-full text-emerald-300 mb-2\">\n      <span class=\"text-3xl\">🎓🦉🏆</span>\n    </div>\n    <h3 class=\"text-xl font-black text-emerald-200 mb-1\">CHÚC MỪNG HOÀN THÀNH XUẤT SẮC CHƯƠNG 2!</h3>\n    <p class=\"text-xs text-slate-300 max-w-lg mx-auto leading-relaxed\">\n      Các em đã làm chủ trọn vẹn 3 bài học và toàn bộ các dạng toán Dãy số - Cấp số cộng - Cấp số nhân chuẩn Bộ GD&ĐT.<br/>\n      Hẹn gặp lại các em tại <b>Chương 3: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm</b>!\n    </p>\n    <div class=\"mt-3 flex justify-center gap-2\">\n      <span class=\"px-3.5 py-1 bg-emerald-600/40 text-emerald-200 rounded-full text-xs font-bold border border-emerald-400/50 shadow-lg\">\n        Tự tin chinh phục điểm 10 môn Toán 11 🌟\n      </span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng tất cả các em học sinh thân yêu đã hoàn thành trọn vẹn toàn bộ Chương 2: Dãy số, Cấp số cộng và Cấp số nhân! Qua bài học này, các em đã sở hữu trong tay toàn bộ hệ thống lý thuyết, phương pháp giải 4 dạng toán cốt lõi, thành thạo các kỹ năng bấm máy tính Casio fx 580VN X và làm quen với cấu trúc đề thi 3 phần chuẩn của Bộ Giáo dục và Đào tạo. Hãy tự tin áp dụng những bí kíp này để bứt phá điểm số cao trong các bài kiểm tra định kỳ và kỳ thi sắp tới. Hẹn gặp lại các em ở Chương 3: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm!",
      "startTime": 503.54,
      "endTime": 548.86,
      "duration": 45.31
    }
  ]
};
  window.G11_CHAPTER2_DATA.toan11_ontap_c2_muc3 = window.G11_CHAPTER2_DATA.g11_ontap_c2_muc3;
  window.G11_CHAPTER2_DATA.ontap_c2_muc3 = window.G11_CHAPTER2_DATA.g11_ontap_c2_muc3;

  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, window.G11_CHAPTER2_DATA);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.G11_CHAPTER2_DATA;
}
