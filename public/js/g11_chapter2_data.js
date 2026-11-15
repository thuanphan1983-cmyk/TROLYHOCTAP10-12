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

  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, window.G11_CHAPTER2_DATA);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.G11_CHAPTER2_DATA;
}
