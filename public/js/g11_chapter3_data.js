/* =========================================================================
   CHƯƠNG III: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
   MÔN TOÁN LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
   Bài 8: Mẫu số liệu ghép nhóm (Mục 1, 2, 3)
   Bài 9: Các số đặc trưng đo xu thế trung tâm (Mục 1, 2, 3)
   Bài tập cuối chương III (Mục 1, 2, 3)
   Mỗi mục gồm 12 scenes, 4 ví dụ minh họa kèm đồng hồ đếm ngược 15s/30s
   Hệ thống Trợ lý Học tập Toán 10-12 Chuẩn Bộ GD&ĐT
   ========================================================================= */

(function() {
  const root = (typeof window !== 'undefined') ? window : ((typeof global !== 'undefined') ? global : {});
  root.G11_CHAPTER3_DATA = root.G11_CHAPTER3_DATA || {};

  root.G11_CHAPTER3_DATA.g11_bai8_muc1 = {
  "lessonId": "toan11_bai8",
  "lessonTitle": "Bài 8: Mẫu số liệu ghép nhóm",
  "sectionId": "g11_bai8_muc1",
  "sectionTitle": "Mục 1: Khái niệm về mẫu số liệu ghép nhóm & Giá trị đại diện",
  "audio": "/audio/g11_bai8_muc1.mp3",
  "audioSrc": "./audio/g11_bai8_muc1.mp3",
  "audio_src": "./audio/g11_bai8_muc1.mp3",
  "title": "Mục 1: Khái niệm về mẫu số liệu ghép nhóm & Giá trị đại diện",
  "owl_tip": "Mẫu ghép nhóm gom số liệu vào các nửa khoảng [a; b). Giá trị đại diện c_i = (a + b)/2, độ dài h = b - a!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. KHÁI NIỆM MẪU SỐ LIỆU GHÉP NHÓM",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. ĐỘ DÀI NHÓM VÀ GIÁ TRỊ ĐẠI DIỆN",
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
      "partTitle": "Phần 4: 11. CẢNH BÁO BẪY THI THƯỜNG GẶP KHI ĐỌC BẢNG SỐ LIỆU",
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
  "totalDuration": 463.73,
  "formattedDuration": "07:43",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. KHÁI NIỆM MẪU SỐ LIỆU GHÉP NHÓM",
      "subtitle": "BÀI 8 • MỤC 1 • MỞ ĐẦU CHƯƠNG III TOÁN 11 KNTT",
      "mascotMode": "pointer",
      "mascotTip": "Mẫu số liệu ghép nhóm là mẫu số liệu cho dưới dạng bảng tần số của các nhóm số liệu $[a_i; a_{i+1})$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Khái niệm cốt lõi</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Mẫu Số Liệu Ghép Nhóm Là Gì?</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      Khi mẫu số liệu có kích thước lớn ($n$ rất lớn) hoặc số liệu liên tục (chiều cao, cân nặng, thời gian), ta gom các giá trị vào từng nhóm có dạng nửa khoảng $[a_i; a_{i+1})$.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">📊 Cấu trúc một nhóm $[a; b)$</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $a$: <b>Đầu mút trái</b> (nhận giá trị $\\ge a$).<br/>\n        • $b$: <b>Đầu mút phải</b> (nhận giá trị $< b$).<br/>\n        • Riêng nhóm cuối cùng có thể lấy cả đầu mút phải dạng $[a; b]$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">🎯 Ý nghĩa thực tiễn</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Tóm tắt gọn gàng tập dữ liệu khổng lồ.<br/>\n        • Dễ dàng quan sát sự phân bố tập trung hay phân tán.<br/>\n        • Là đầu vào bắt buộc để tính Số trung bình, Trung vị, Tứ phân vị và Mốt.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em học sinh đến với Chương 3 môn Toán lớp 11: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm. Ở lớp 10, các em đã làm quen với việc thu thập và xử lý các mẫu số liệu đơn lẻ không ghép nhóm. Tuy nhiên, trong thực tế khi dữ liệu lên tới hàng nghìn hay hàng triệu giá trị như điểm thi tốt nghiệp toàn quốc hay thu nhập của người lao động, việc liệt kê từng số liệu là bất khả thi. Để xử lý bài toán này, người ta chia miền giá trị thành các nhóm nửa khoảng kề nhau. Đó chính là mẫu số liệu ghép nhóm.",
      "startTime": 0.0,
      "endTime": 40.03,
      "duration": 40.03
    },
    {
      "sceneIndex": 2,
      "title": "2. ĐỘ DÀI NHÓM VÀ GIÁ TRỊ ĐẠI DIỆN",
      "subtitle": "HAI THÔNG SỐ TOÁN HỌC QUAN TRỌNG CẦN NHỚ",
      "mascotMode": "explain",
      "mascotTip": "Độ dài nhóm: $L = b - a$. Giá trị đại diện chính là trung điểm: $c = \\frac{a + b}{2}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"w-3 h-3 rounded-full bg-teal-400 animate-pulse\"></span>\n      <h3 class=\"text-sm font-bold text-teal-300\">Công Thức Xác Định Độ Dài Nhóm & Giá Trị Đại Diện</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700\">\n        <span class=\"font-bold text-emerald-400 text-sm block mb-1\">1. Độ dài của nhóm $[a_i; a_{i+1})$:</span>\n        <div class=\"text-emerald-300 font-mono text-center my-2 text-base\">\n          $$L_i = a_{i+1} - a_i$$\n        </div>\n        <p class=\"text-slate-300\">Ví dụ: Nhóm $[40; 60)$ có độ dài $L = 60 - 40 = 20$.</p>\n      </div>\n      <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700\">\n        <span class=\"font-bold text-cyan-400 text-sm block mb-1\">2. Giá trị đại diện $c_i$:</span>\n        <div class=\"text-cyan-300 font-mono text-center my-2 text-base\">\n          $$c_i = \\frac{a_i + a_{i+1}}{2}$$\n        </div>\n        <p class=\"text-slate-300\">Ví dụ: Nhóm $[40; 60)$ có giá trị đại diện $c = \\frac{40 + 60}{2} = 50$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Mỗi nhóm số liệu nửa khoảng từ a đến b được xác định bởi hai thông số cơ bản: Thứ nhất là Độ dài của nhóm, ký hiệu là L, bằng đầu mút phải trừ đi đầu mút trái, tức là b trừ a. Thứ hai là Giá trị đại diện của nhóm, ký hiệu là c, chính là trung điểm của nửa khoảng đó, bằng a cộng b tất cả chia 2. Giá trị đại diện đóng vai trò thay thế cho toàn bộ các số liệu nằm trong nhóm khi chúng ta tính toán số trung bình cộng sau này.",
      "startTime": 40.03,
      "endTime": 74.62,
      "duration": 34.58
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: TÍNH GIÁ TRỊ ĐẠI DIỆN VÀ ĐỘ DÀI NHÓM",
      "subtitle": "VÍ DỤ MINH HỌA 1 • NHẬN BIẾT (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Lấy trung điểm mỗi nhóm: $\\frac{a+b}{2}$ và hiệu $b-a$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 1 (Nhận biết)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-indigo-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Bảng thống kê thời gian tự học (giờ/ngày) của 40 học sinh:\n    </p>\n    <div class=\"overflow-x-auto my-2\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-indigo-300 border-b border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Nhóm thời gian (giờ)</th>\n            <th class=\"p-2 border border-slate-700\">$[1; 2)$</th>\n            <th class=\"p-2 border border-slate-700\">$[2; 3)$</th>\n            <th class=\"p-2 border border-slate-700\">$[3; 4)$</th>\n            <th class=\"p-2 border border-slate-700\">$[4; 5)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-2 font-bold text-slate-400 border border-slate-700\">Số học sinh ($m_i$)</td>\n            <td class=\"p-2 border border-slate-700\">6</td>\n            <td class=\"p-2 border border-slate-700\">14</td>\n            <td class=\"p-2 border border-slate-700\">15</td>\n            <td class=\"p-2 border border-slate-700\">5</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-indigo-300 font-semibold\">\n      👉 Yêu cầu: Xác định độ dài và giá trị đại diện tương ứng của từng nhóm.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng bắt đầu với Ví dụ 1: Cho bảng tần số ghép nhóm về thời gian tự học mỗi ngày của 40 học sinh lớp 11 gồm 4 nhóm: nhóm 1 từ 1 đến 2 giờ có 6 học sinh; nhóm 2 từ 2 đến 3 giờ có 14 học sinh; nhóm 3 từ 3 đến 4 giờ có 15 học sinh; nhóm 4 từ 4 đến 5 giờ có 5 học sinh. Hãy xác định độ dài và giá trị đại diện của từng nhóm. Các em có 15 giây suy nghĩ.",
      "startTime": 74.62,
      "endTime": 108.02,
      "duration": 33.41
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ ĐỘ DÀI $L=1$ VÀ CÁC GIÁ TRỊ ĐẠI DIỆN",
      "mascotMode": "happy",
      "mascotTip": "Các giá trị đại diện là: 1,5; 2,5; 3,5; 4,5. Nhóm đều nhau có độ dài bằng 1!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Bảng Giá Trị Đại Diện Hoàn Chỉnh</h4>\n    </div>\n    <div class=\"overflow-x-auto my-1 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-indigo-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Nhóm</th>\n            <th class=\"p-2 border border-slate-700\">Tần số ($m_i$)</th>\n            <th class=\"p-2 border border-slate-700\">Độ dài ($L_i = b - a$)</th>\n            <th class=\"p-2 border border-slate-700\">Giá trị đại diện ($c_i = \\frac{a+b}{2}$)</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300 divide-y divide-slate-700\">\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[1; 2)$</td>\n            <td class=\"p-2 border border-slate-700\">6</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">1</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">1,5</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[2; 3)$</td>\n            <td class=\"p-2 border border-slate-700\">14</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">1</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">2,5</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[3; 4)$</td>\n            <td class=\"p-2 border border-slate-700\">15</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">1</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">3,5</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[4; 5)$</td>\n            <td class=\"p-2 border border-slate-700\">5</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">1</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">4,5</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"bg-indigo-950/40 p-2 rounded border border-indigo-500/30 text-indigo-200 text-xs font-semibold\">\n      👉 Cỡ mẫu: $n = 6 + 14 + 15 + 5 = \\mathbf{40}$ học sinh.\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải chi tiết như sau: Tất cả các nhóm đều có độ dài bằng nhau: L bằng 2 trừ 1 bằng 3 trừ 2 bằng 4 trừ 3 bằng 5 trừ 4 bằng 1 giờ. Giá trị đại diện của từng nhóm lần lượt là: Nhóm một có c 1 bằng 1 cộng 2 chia 2 bằng 1,5; Nhóm hai có c 2 bằng 2 cộng 3 chia 2 bằng 2,5; Nhóm ba có c 3 bằng 3 cộng 4 chia 2 bằng 3,5; Nhóm bốn có c 4 bằng 4 cộng 5 chia 2 bằng 4,5. Tổng cỡ mẫu n bằng 6 cộng 14 cộng 15 cộng 5 bằng 40 học sinh.",
      "startTime": 108.02,
      "endTime": 152.81,
      "duration": 44.78
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: XÁC ĐỊNH CỠ MẪU VÀ TẦN SỐ TƯƠNG ĐỐI",
      "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Tần số tương đối: $f_i = \\frac{m_i}{n} \\times 100\\%$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 2 (Thông hiểu)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-emerald-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Khảo sát khối lượng ($g$) của 50 quả bơ:\n    </p>\n    <div class=\"overflow-x-auto my-2\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-emerald-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Khối lượng ($g$)</th>\n            <th class=\"p-2 border border-slate-700\">$[200; 250)$</th>\n            <th class=\"p-2 border border-slate-700\">$[250; 300)$</th>\n            <th class=\"p-2 border border-slate-700\">$[300; 350)$</th>\n            <th class=\"p-2 border border-slate-700\">$[350; 400)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-2 font-bold text-slate-400 border border-slate-700\">Số quả ($m_i$)</td>\n            <td class=\"p-2 border border-slate-700\">8</td>\n            <td class=\"p-2 border border-slate-700\">18</td>\n            <td class=\"p-2 border border-slate-700\">16</td>\n            <td class=\"p-2 border border-slate-700\">8</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-emerald-300 font-semibold\">\n      👉 Yêu cầu: Tính tỉ lệ phần trăm số quả bơ có khối lượng từ $250g$ đến dưới $350g$.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với Ví dụ 2: Khảo sát cân nặng của 50 quả bơ xuất khẩu thu được bảng số liệu ghép nhóm: nhóm từ 200 đến 250 gam có 8 quả; nhóm từ 250 đến 300 gam có 18 quả; nhóm từ 300 đến 350 gam có 16 quả; nhóm từ 350 đến 400 gam có 8 quả. Hãy tính tỉ lệ phần trăm số quả bơ có cân nặng từ 250 gam đến dưới 350 gam. Các em có 15 giây suy nghĩ.",
      "startTime": 152.81,
      "endTime": 190.01,
      "duration": 37.2
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: 68% SỐ QUẢ BƠ ĐẠT TIÊU CHUẨN",
      "mascotMode": "happy",
      "mascotTip": "Cộng tần số nhóm 2 và nhóm 3: $18 + 16 = 34$ quả $\\implies \\frac{34}{50} = 68\\%$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Tính tổng tần số và tỉ lệ phần trăm</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>Bước 1:</b> Số quả bơ có khối lượng từ $250g$ đến dưới $350g$ gồm hai nhóm $[250; 300)$ và $[300; 350)$:</p>\n      <div class=\"text-emerald-300 font-mono text-sm\">\n        $$m = 18 + 16 = \\mathbf{34} \\text{ (quả)}$$\n      </div>\n      <p><b>Bước 2:</b> Tính tỉ lệ phần trăm so với toàn bộ cỡ mẫu $n = 50$:</p>\n      <div class=\"text-cyan-300 font-mono text-sm\">\n        $$f = \\frac{34}{50} \\times 100\\% = \\mathbf{68\\%}$$\n      </div>\n      <div class=\"bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 font-bold\">\n        👉 Đáp số: Có <b>$68\\%$</b> số quả bơ có khối lượng trong khoảng từ $250g$ đến dưới $350g$.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Cỡ mẫu là n bằng 50 quả. Khối lượng từ 250 gam đến dưới 350 gam bao gồm hai nhóm kề nhau: nhóm từ 250 đến 300 gam có 18 quả, và nhóm từ 300 đến 350 gam có 16 quả. Tổng số quả thuộc khoảng này là: 18 cộng 16 bằng 34 quả. Tỉ lệ phần trăm tương ứng là: 34 chia 50 nhân 100 phần trăm bằng 68 phần trăm. Như vậy có 68 phần trăm số quả bơ đạt khối lượng từ 250 đến dưới 350 gam.",
      "startTime": 190.01,
      "endTime": 234.48,
      "duration": 44.47
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: ĐỌC VÀ PHÂN TÍCH NHÓM CHỨA ĐIỀU KIỆN",
      "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Lưu ý điều kiện đầu mút: Nhóm $[a; b)$ lấy $x \\ge a$ và $x < b$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 3 (Vận dụng)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-amber-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Kết quả điểm kiểm tra Toán của 100 học sinh ($n = 100$):\n    </p>\n    <div class=\"overflow-x-auto my-2 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-amber-300 border border-slate-700\">\n            <th class=\"p-1.5 border border-slate-700\">Điểm số</th>\n            <th class=\"p-1.5 border border-slate-700\">$[4; 5)$</th>\n            <th class=\"p-1.5 border border-slate-700\">$[5; 6)$</th>\n            <th class=\"p-1.5 border border-slate-700\">$[6; 7)$</th>\n            <th class=\"p-1.5 border border-slate-700\">$[7; 8)$</th>\n            <th class=\"p-1.5 border border-slate-700\">$[8; 9)$</th>\n            <th class=\"p-1.5 border border-slate-700\">$[9; 10]$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-1.5 font-bold text-slate-400 border border-slate-700\">Tần số ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-700\">5</td>\n            <td class=\"p-1.5 border border-slate-700\">15</td>\n            <td class=\"p-1.5 border border-slate-700\">30</td>\n            <td class=\"p-1.5 border border-slate-700\">25</td>\n            <td class=\"p-1.5 border border-slate-700\">15</td>\n            <td class=\"p-1.5 border border-slate-700\">10</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-amber-300 font-semibold\">\n      a) Có bao nhiêu học sinh đạt điểm từ 7,0 trở lên?<br/>\n      b) Nhóm điểm nào tập trung đông học sinh nhất?\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta tiếp tục với Ví dụ 3: Cho bảng phân bố ghép nhóm về điểm kiểm tra giữa kỳ môn Toán của 100 học sinh: từ 4 đến 5 điểm có 5 em; từ 5 đến 6 điểm có 15 em; từ 6 đến 7 điểm có 30 em; từ 7 đến 8 điểm có 25 em; từ 8 đến 9 điểm có 15 em; từ 9 đến 10 điểm có 10 em. Hỏi: Có bao nhiêu học sinh đạt điểm từ 7 trở lên? Và nhóm nào có số lượng học sinh đông nhất? Các em có 15 giây suy nghĩ.",
      "startTime": 234.48,
      "endTime": 271.68,
      "duration": 37.2
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: 50 HỌC SINH ĐẠT TỪ 7 ĐIỂM TRỞ LÊN",
      "mascotMode": "happy",
      "mascotTip": "Cộng 3 nhóm cuối: $25 + 15 + 10 = 50$ học sinh. Nhóm đông nhất là $[6; 7)$ với 30 học sinh!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Đọc bảng và xác định nhóm tần số lớn nhất</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>a) Số học sinh đạt điểm từ $7,0$ trở lên:</b></p>\n      <p>Bao gồm 3 nhóm: $[7; 8)$, $[8; 9)$ và $[9; 10]$:</p>\n      <div class=\"text-emerald-300 font-mono text-sm\">\n        $$N_{\\ge 7} = 25 + 15 + 10 = \\mathbf{50} \\text{ (học sinh)} \\implies \\frac{50}{100} = \\mathbf{50\\%}$$\n      </div>\n\n      <p><b>b) Nhóm có số lượng học sinh đông nhất:</b></p>\n      <p>So sánh các tần số: $5, 15, 30, 25, 15, 10$ thì giá trị lớn nhất là $30$.</p>\n      <div class=\"text-cyan-300 font-mono\">\n        👉 Nhóm tập trung đông học sinh nhất là nhóm <b>$[6; 7)$</b> với <b>$30$ học sinh</b>.\n      </div>\n\n      <div class=\"bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 font-bold\">\n        👉 Kết luận: a) <b>50 học sinh</b> đạt từ 7 điểm trở lên | b) Nhóm đông nhất là <b>$[6; 7)$</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Ở câu a: Các học sinh có điểm từ 7 trở lên thuộc 3 nhóm cuối: nhóm từ 7 đến 8 có 25 em; nhóm từ 8 đến 9 có 15 em; và nhóm từ 9 đến 10 có 10 em. Tổng số học sinh đạt điểm từ 7 trở lên là: 25 cộng 15 cộng 10 bằng 50 học sinh, chiếm đúng 50 phần trăm cả lớp. Ở câu b: Quan sát hàng tần số, ta thấy nhóm từ 6 đến 7 điểm có tần số lớn nhất bằng 30 học sinh. Đây chính là nhóm tập trung đông học sinh nhất, sau này các em sẽ biết đây là nhóm chứa mốt.",
      "startTime": 271.68,
      "endTime": 316.61,
      "duration": 44.93
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: XÁC ĐỊNH MẪU SỐ LIỆU ĐỘ DÀI KHÔNG ĐỀU",
      "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Lưu ý: Không phải mọi bảng ghép nhóm đều có độ dài bằng nhau, nhóm cuối có thể mở rộng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 4 (Độ dài nhóm không đều)</span>\n      <div class=\"countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-rose-400 countdown-num\">30s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Thống kê độ tuổi của 80 nhân viên một công ty công nghệ:\n    </p>\n    <div class=\"overflow-x-auto my-2 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-rose-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Độ tuổi</th>\n            <th class=\"p-2 border border-slate-700\">$[20; 25)$</th>\n            <th class=\"p-2 border border-slate-700\">$[25; 30)$</th>\n            <th class=\"p-2 border border-slate-700\">$[30; 40)$</th>\n            <th class=\"p-2 border border-slate-700\">$[40; 60)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-2 font-bold text-slate-400 border border-slate-700\">Số nhân viên</td>\n            <td class=\"p-2 border border-slate-700\">18</td>\n            <td class=\"p-2 border border-slate-700\">32</td>\n            <td class=\"p-2 border border-slate-700\">22</td>\n            <td class=\"p-2 border border-slate-700\">8</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-rose-300 font-semibold\">\n      👉 Yêu cầu: Xác định độ dài, giá trị đại diện của từng nhóm và rút ra nhận xét.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta đến với Ví dụ 4: Một công ty công nghệ thống kê độ tuổi của 80 nhân viên theo bảng: từ 20 đến 25 tuổi có 18 người; từ 25 đến 30 tuổi có 32 người; từ 30 đến 40 tuổi có 22 người; từ 40 đến 60 tuổi có 8 người. Hãy tính độ dài và giá trị đại diện của từng nhóm. Em có nhận xét gì về độ dài của các nhóm này? Các em có 30 giây suy nghĩ.",
      "startTime": 316.61,
      "endTime": 342.94,
      "duration": 26.33
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KỸ NĂNG TÍNH TOÁN KHI ĐỘ DÀI CÁC NHÓM KHÔNG BẰNG NHAU",
      "mascotMode": "happy",
      "mascotTip": "Độ dài các nhóm lần lượt là: 5, 5, 10, 20. Giá trị đại diện là 22,5; 27,5; 35; 50!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Bảng thông số khi độ dài các nhóm khác nhau</h4>\n    </div>\n    <div class=\"overflow-x-auto my-1 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-rose-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Độ tuổi</th>\n            <th class=\"p-2 border border-slate-700\">Tần số ($m_i$)</th>\n            <th class=\"p-2 border border-slate-700\">Độ dài ($L_i = b - a$)</th>\n            <th class=\"p-2 border border-slate-700\">Giá trị đại diện ($c_i$)</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300 divide-y divide-slate-700\">\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[20; 25)$</td>\n            <td class=\"p-2 border border-slate-700\">18</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">5</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">22,5</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[25; 30)$</td>\n            <td class=\"p-2 border border-slate-700\">32</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">5</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">27,5</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[30; 40)$</td>\n            <td class=\"p-2 border border-slate-700\">22</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">10</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">35,0</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[40; 60)$</td>\n            <td class=\"p-2 border border-slate-700\">8</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">20</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400 font-bold\">50,0</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 text-xs font-semibold\">\n      💡 <b>Nhận xét:</b> Các nhóm có độ dài khác nhau ($5, 5, 10, 20$). Khi tính toán, ta luôn dùng giá trị đại diện chính xác $c_i = \\frac{a_i + a_{i+1}}{2}$.\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây! Lời giải như sau: Ta tính toán cho từng nhóm: Nhóm một từ 20 đến 25 có độ dài bằng 5, giá trị đại diện là 22,5; Nhóm hai từ 25 đến 30 có độ dài bằng 5, giá trị đại diện là 27,5; Nhóm ba từ 30 đến 40 có độ dài bằng 10, giá trị đại diện là 35; Nhóm bốn từ 40 đến 60 có độ dài bằng 20, giá trị đại diện là 50. Nhận xét: Trong thực tế, các nhóm số liệu không bắt buộc phải có độ dài bằng nhau. Khi dữ liệu ở các nhóm tuổi cao thưa thớt hơn, người ta thường gộp khoảng rộng hơn để đảm bảo mỗi nhóm đều có tần số đủ lớn phục vụ phân tích thống kê.",
      "startTime": 342.94,
      "endTime": 396.12,
      "duration": 53.18
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO BẪY THI THƯỜNG GẶP KHI ĐỌC BẢNG SỐ LIỆU",
      "subtitle": "3 SAI LẦM KHIẾN HỌC SINH MẤT ĐIỂM",
      "mascotMode": "warning",
      "mascotTip": "Bẫy lớn nhất: Nhầm lẫn dấu ngoặc vuông $[$ và ngoặc tròn $($ ở hai đầu mút!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"text-lg\">⚠️</span>\n      <h3 class=\"text-sm font-bold text-amber-300\">3 Lỗi Sai Thường Gặp Về Mẫu Số Liệu Ghép Nhóm</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">1. Nhầm quy tắc đầu mút:</span>\n        <p class=\"text-slate-300 mt-1\">Số liệu bằng $b$ thuộc nhóm $[b; c)$, <b>không</b> thuộc nhóm $[a; b)$! Trừ nhóm cuối cùng $[a_k; a_{k+1}]$.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">2. Lẫn lộn độ dài & đại diện:</span>\n        <p class=\"text-slate-300 mt-1\">Độ dài: $L = b - a$ (phép trừ).<br/>Đại diện: $c = \\frac{a+b}{2}$ (phép cộng chia đôi).</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400\">3. Quên kiểm tra cỡ mẫu:</span>\n        <p class=\"text-slate-300 mt-1\">Luôn tính $\\sum m_i = n$ để đảm bảo không bỏ sót số liệu hay đếm trùng lặp.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi kết thúc Mục 1, Thầy Cú có 3 cảnh báo bẫy thi đặc biệt quan trọng: Thứ nhất là bẫy phân loại giá trị tại đầu mút. Giá trị bằng đúng a thì thuộc nhóm a đến b, nhưng giá trị bằng đúng b thì thuộc nhóm kế tiếp, trừ nhóm cuối cùng có thể lấy cả hai mút. Thứ hai là nhầm lẫn giá trị đại diện với độ dài nhóm. Độ dài là hiệu b trừ a, còn giá trị đại diện là trung bình cộng a cộng b chia 2. Thứ ba là quên cộng tổng tần số để kiểm tra lại cỡ mẫu n xem có đủ số liệu hay không.",
      "startTime": 396.12,
      "endTime": 434.69,
      "duration": 38.57
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 1 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "KẾT THÚC MỤC 1 • CHUYỂN SANG MỤC 2: GHÉP NHÓM MẪU SỐ LIỆU",
      "mascotMode": "happy",
      "mascotTip": "Nắm chắc: Nhóm $[a; b)$ có độ dài $b-a$ và giá trị đại diện $\\frac{a+b}{2}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center\">\n    <div class=\"inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2\">\n      <span class=\"text-2xl\">🦉📊</span>\n    </div>\n    <h3 class=\"text-lg font-black text-emerald-200 mb-1\">Bí Kíp Cốt Lõi Mục 1</h3>\n    <p class=\"text-xs text-slate-300 max-w-xl mx-auto leading-relaxed\">\n      Mẫu số liệu ghép nhóm $[a_i; a_{i+1})$ thay thế hàng nghìn dữ liệu đơn lẻ bằng các cặp giá trị:<br/>\n      <span class=\"text-cyan-400 font-bold\">Giá trị đại diện $c_i = \\frac{a_i + a_{i+1}}{2}$</span> đi kèm với <span class=\"text-emerald-400 font-bold\">Tần số nhóm $m_i$</span>.\n    </p>\n    <div class=\"mt-3 flex justify-center gap-2\">\n      <span class=\"px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40\">\n        Sẵn sàng chuyển sang Mục 2: Ghép nhóm mẫu số liệu 🚀\n      </span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã nắm chắc toàn bộ kiến thức nền tảng của Mục 1! Chúng ta đã hiểu bản chất của mẫu số liệu ghép nhóm, cách đọc bảng tần số, xác định chính xác độ dài nhóm và giá trị đại diện. Bây giờ hãy sẵn sàng chuyển sang Mục 2: nơi chúng ta cùng tìm hiểu quy trình các bước chuyển đổi từ một tập dữ liệu thô ban đầu thành một bảng số liệu ghép nhóm khoa học và trực quan.",
      "startTime": 434.69,
      "endTime": 463.73,
      "duration": 29.04
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_bai8_muc1 = root.G11_CHAPTER3_DATA.g11_bai8_muc1;

  root.G11_CHAPTER3_DATA.g11_bai8_muc2 = {
  "lessonId": "toan11_bai8",
  "lessonTitle": "Bài 8: Mẫu số liệu ghép nhóm",
  "sectionId": "g11_bai8_muc2",
  "sectionTitle": "Mục 2: Kỹ thuật ghép nhóm mẫu số liệu & Bảng tần số ghép nhóm",
  "audio": "/audio/g11_bai8_muc2.mp3",
  "audioSrc": "./audio/g11_bai8_muc2.mp3",
  "audio_src": "./audio/g11_bai8_muc2.mp3",
  "title": "Mục 2: Kỹ thuật ghép nhóm mẫu số liệu & Bảng tần số ghép nhóm",
  "owl_tip": "4 bước ghép nhóm: Tìm R = x_max - x_min, chọn k nhóm (5-20), xác định độ dài L = R/k, lập các nửa khoảng [a_i; a_{i+1})!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. QUY TRÌNH 4 BƯỚC GHÉP NHÓM MẪU SỐ LIỆU THÔ",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÔNG THỨC CHỌN ĐỘ DÀI NHÓM $L$",
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
      "partTitle": "Phần 4: 11. CẢNH BÁO CÁC BẪY THI KHI GHÉP NHÓM SỐ LIỆU",
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
  "totalDuration": 495.24,
  "formattedDuration": "08:15",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. QUY TRÌNH 4 BƯỚC GHÉP NHÓM MẪU SỐ LIỆU THÔ",
      "subtitle": "BÀI 8 • MỤC 2 • KỸ NĂNG XỬ LÝ VÀ CHUYỂN ĐỔI DỮ LIỆU",
      "mascotMode": "pointer",
      "mascotTip": "4 bước: Tìm min, max -> Chọn số nhóm $k$ -> Xác định độ dài $L$ -> Đếm tần số lập bảng!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase\">Quy trình chuẩn</span>\n      <h3 class=\"text-lg font-black text-teal-200\">4 Bước Ghép Nhóm Mẫu Số Liệu Thô</h3>\n    </div>\n    <p class=\"text-xs text-slate-300\">Áp dụng tuần tự 4 bước để chuyển đổi dữ liệu thô sang bảng ghép nhóm:</p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-indigo-400\">\n      <h4 class=\"font-bold text-indigo-300 mb-1\">🔍 Bước 1: Xác định biên dữ liệu</h4>\n      <p class=\"text-slate-300\">Tìm giá trị nhỏ nhất $x_{\\min}$ và lớn nhất $x_{\\max}$. Tính khoảng biến thiên $R = x_{\\max} - x_{\\min}$.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-emerald-400\">\n      <h4 class=\"font-bold text-emerald-300 mb-1\">🔢 Bước 2: Chọn số nhóm $k$</h4>\n      <p class=\"text-slate-300\">Thông thường chọn $k$ từ 5 đến 8 nhóm (hoặc theo yêu cầu cụ thể của bài toán đề bài).</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-amber-400\">\n      <h4 class=\"font-bold text-amber-300 mb-1\">📏 Bước 3: Xác định độ dài nhóm $L$</h4>\n      <p class=\"text-slate-300\">Chọn $L > \\frac{x_{\\max} - x_{\\min}}{k}$, chọn đầu mút trái $a_1 \\le x_{\\min}$ và đầu mút phải cuối $a_{k+1} \\ge x_{\\max}$.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-rose-400\">\n      <h4 class=\"font-bold text-rose-300 mb-1\">📋 Bước 4: Đếm tần số & Lập bảng</h4>\n      <p class=\"text-slate-300\">Đếm số giá trị thuộc từng nửa khoảng $[a_i; a_{i+1})$, kiểm tra lại tổng tần số $\\sum m_i = n$.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Ghép nhóm mẫu số liệu. Khi có trong tay một tập dữ liệu thô gồm nhiều giá trị chưa được sắp xếp, làm thế nào để chúng ta tạo ra được một bảng tần số ghép nhóm chuẩn mực? Chúng ta thực hiện tuần tự qua 4 bước: Bước 1: Tìm giá trị nhỏ nhất min và lớn nhất max của mẫu số liệu; Bước 2: Chọn số lượng nhóm k phù hợp, thông thường từ 5 đến 8 nhóm; Bước 3: Xác định độ dài mỗi nhóm L sao cho k nhân L lớn hơn hoặc bằng khoảng biến thiên max trừ min; và Bước 4: Phân loại, đếm tần số của từng nhóm rồi ghi vào bảng thống kê.",
      "startTime": 0.0,
      "endTime": 34.87,
      "duration": 34.87
    },
    {
      "sceneIndex": 2,
      "title": "2. CÔNG THỨC CHỌN ĐỘ DÀI NHÓM $L$",
      "subtitle": "KỸ THUẬT PHÂN CHIA KHOẢNG ĐỀU ĐẶN",
      "mascotMode": "explain",
      "mascotTip": "Quy tắc chọn $L$: Chọn $L$ là số tròn (như 2, 5, 10, 20...) lớn hơn $\\frac{x_{\\max} - x_{\\min}}{k}$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"w-3 h-3 rounded-full bg-cyan-400 animate-pulse\"></span>\n      <h3 class=\"text-sm font-bold text-cyan-300\">Kỹ Thuật Chọn Độ Dài Nhóm $L$ Tròn Trịa</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700\">\n        <span class=\"font-bold text-emerald-400\">Điều kiện bao phủ toàn bộ dữ liệu:</span>\n        <div class=\"text-emerald-300 font-mono text-center my-2 text-sm\">\n          $$k \\cdot L \\ge x_{\\max} - x_{\\min}$$\n        </div>\n        <p class=\"text-slate-300\">Đảm bảo nhóm đầu tiên chứa $x_{\\min}$ và nhóm cuối cùng bao trọn $x_{\\max}$.</p>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700\">\n        <span class=\"font-bold text-amber-400\">Kinh nghiệm chọn số tròn:</span>\n        <p class=\"text-slate-300 mt-1\">\n          • Nếu chia ra $\\frac{R}{k} = 4,2 \\implies$ Chọn $L = 5$.<br/>\n          • Nếu chia ra $\\frac{R}{k} = 8,6 \\implies$ Chọn $L = 10$.<br/>\n          • Chọn $a_1$ là bội số của $L$ để các đầu mút tròn chục, tròn trăm.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Một kỹ năng thực hành rất quan trọng là việc chọn độ dài nhóm L. Ta lấy giá trị lớn nhất trừ giá trị nhỏ nhất rồi chia cho số nhóm k. Sau đó, ta làm tròn lên một số nguyên đẹp và tròn trịa, ví dụ như 2, 5, 10 hoặc 20 đơn vị. Đầu mút trái đầu tiên a 1 nên chọn nhỏ hơn hoặc bằng x min một chút sao cho tròn số để việc đếm và phân loại số liệu diễn ra nhanh chóng, hạn chế tối đa sai sót.",
      "startTime": 34.87,
      "endTime": 59.64,
      "duration": 24.77
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: GHÉP NHÓM 20 SỐ LIỆU ĐIỂM THI",
      "subtitle": "VÍ DỤ MINH HỌA 1 • THỰC HÀNH GHÉP 4 NHÓM (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Tìm $x_{\\min}, x_{\\max}$ trong dãy 20 số rồi phân vào 4 nhóm $[4; 5,5), [5,5; 7), [7; 8,5), [8,5; 10]$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 1 (Ghép nhóm)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-indigo-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-xs text-slate-200 font-semibold mb-2\">\n      Mẫu số liệu thô về điểm Toán của 20 học sinh ($n = 20$):\n    </p>\n    <div class=\"bg-slate-900/90 p-2.5 rounded border border-slate-700 font-mono text-cyan-300 text-xs text-center my-2 leading-relaxed\">\n      4,5 ; 5,0 ; 5,5 ; 6,0 ; 6,0 ; 6,5 ; 7,0 ; 7,0 ; 7,5 ; 7,5 ;<br/>\n      8,0 ; 8,0 ; 8,0 ; 8,5 ; 8,5 ; 9,0 ; 9,0 ; 9,5 ; 9,5 ; 10,0.\n    </div>\n    <p class=\"text-xs text-indigo-300 font-semibold\">\n      👉 Yêu cầu: Ghép số liệu vào 4 nhóm: $[4; 5,5)$, $[5,5; 7)$, $[7; 8,5)$, $[8,5; 10]$ và đếm tần số mỗi nhóm.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng làm Ví dụ 1: Điểm kiểm tra Toán của 20 học sinh gồm các số liệu sau: 4,5; 5,0; 5,5; 6,0; 6,0; 6,5; 7,0; 7,0; 7,5; 7,5; 8,0; 8,0; 8,0; 8,5; 8,5; 9,0; 9,0; 9,5; 9,5; 10,0. Hãy ghép mẫu số liệu trên thành 4 nhóm có độ dài bằng nhau: từ 4 đến 5,5; từ 5,5 đến 7; từ 7 đến 8,5; và từ 8,5 đến 10. Các em có 15 giây đếm số lượng học sinh trong từng nhóm.",
      "startTime": 59.64,
      "endTime": 112.9,
      "duration": 53.26
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ BẢNG TẦN SỐ GHÉP NHÓM: 2, 4, 7, 7",
      "mascotMode": "happy",
      "mascotTip": "Lưu ý: 5,5 thuộc nhóm $[5,5; 7)$; 7,0 thuộc nhóm $[7; 8,5)$; 8,5 thuộc nhóm $[8,5; 10]$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Bảng Tần Số Ghép Nhóm Sau Phân Loại</h4>\n    </div>\n    <div class=\"overflow-x-auto my-1 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-indigo-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Nhóm điểm</th>\n            <th class=\"p-2 border border-slate-700\">Các giá trị thuộc nhóm</th>\n            <th class=\"p-2 border border-slate-700\">Tần số ($m_i$)</th>\n            <th class=\"p-2 border border-slate-700\">Giá trị đại diện ($c_i$)</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300 divide-y divide-slate-700\">\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[4; 5,5)$</td>\n            <td class=\"p-2 border border-slate-700 text-slate-400\">4,5 ; 5,0</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">2</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400\">4,75</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[5,5; 7)$</td>\n            <td class=\"p-2 border border-slate-700 text-slate-400\">5,5 ; 6,0 ; 6,0 ; 6,5</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">4</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400\">6,25</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[7; 8,5)$</td>\n            <td class=\"p-2 border border-slate-700 text-slate-400\">7,0 ; 7,0 ; 7,5 ; 7,5 ; 8,0 ; 8,0 ; 8,0</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">7</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400\">7,75</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[8,5; 10]$</td>\n            <td class=\"p-2 border border-slate-700 text-slate-400\">8,5 ; 8,5 ; 9,0 ; 9,0 ; 9,5 ; 9,5 ; 10,0</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">7</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-400\">9,25</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"bg-indigo-950/40 p-2 rounded border border-indigo-500/30 text-indigo-200 text-xs font-semibold\">\n      👉 Kiểm tra cỡ mẫu: $\\sum m_i = 2 + 4 + 7 + 7 = \\mathbf{20}$ (chính xác tuyệt đối).\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải chi tiết như sau: Đếm cẩn thận theo quy tắc đầu mút: Nhóm một từ 4 đến dưới 5,5 gồm hai điểm: 4,5 và 5,0, nên tần số bằng 2; Nhóm hai từ 5,5 đến dưới 7 gồm bốn điểm: 5,5; 6,0; 6,0; 6,5, nên tần số bằng 4; Nhóm ba từ 7 đến dưới 8,5 gồm bảy điểm: 7,0; 7,0; 7,5; 7,5; 8,0; 8,0; 8,0, nên tần số bằng 7; Nhóm bốn từ 8,5 đến 10 gồm bảy điểm: 8,5; 8,5; 9,0; 9,0; 9,5; 9,5; 10,0, nên tần số bằng 7. Tổng tần số là 2 cộng 4 cộng 7 cộng 7 bằng đúng 20 học sinh.",
      "startTime": 112.9,
      "endTime": 178.03,
      "duration": 65.14
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: TỰ CHỌN ĐỘ DÀI VÀ GHÉP NHÓM",
      "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "$x_{\\min} = 152, x_{\\max} = 178 \\implies R = 26$. Chia 5 nhóm thì $L = \\frac{26}{5} = 5,2 \\implies$ Chọn $L = 6$ hoặc chọn các mốc $[150; 155), ...$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 2 (Chia khoảng ghép nhóm)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-emerald-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Đo chiều cao ($cm$) của $25$ học sinh lớp 11:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2\">\n      <p>• Chiều cao thấp nhất: <b>$x_{\\min} = 152\\text{ cm}$</b>.</p>\n      <p>• Chiều cao cao nhất: <b>$x_{\\max} = 178\\text{ cm}$</b>.</p>\n      <p>• Số nhóm cần chia: <b>$k = 5$ nhóm</b> có độ dài <b>$L = 6\\text{ cm}$</b>.</p>\n      <p>• Nhóm đầu tiên bắt đầu từ <b>$150\\text{ cm}$</b>.</p>\n    </div>\n    <p class=\"text-xs text-emerald-300 font-semibold\">\n      👉 Yêu cầu: Xác định cụ thể 5 nhóm ghép nửa khoảng tương ứng.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với Ví dụ 2: Đo chiều cao tính bằng centimet của 25 bạn học sinh lớp 11, kết quả nhỏ nhất là 152 centimet và lớn nhất là 178 centimet. Đề bài yêu cầu: Hãy chia mẫu số liệu này thành 5 nhóm có độ dài bằng nhau và bằng 6 centimet, với nhóm đầu tiên bắt đầu từ 150 centimet. Xác định các nhóm ghép tương ứng. Các em có 15 giây suy nghĩ.",
      "startTime": 178.03,
      "endTime": 210.55,
      "duration": 32.52
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ 5 NHÓM ĐỀU ĐẶN CÁCH NHAU 6 CM",
      "mascotMode": "happy",
      "mascotTip": "Bắt đầu từ 150, cộng dồn 6: $[150; 156), [156; 162), [162; 168), [168; 174), [174; 180)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">5 Nhóm Ghép Số Liệu Chiều Cao</h4>\n    </div>\n    <div class=\"grid grid-cols-5 gap-2 text-xs text-center my-2\">\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-emerald-500/40\">\n        <span class=\"text-slate-400 font-bold block mb-1\">Nhóm 1</span>\n        <b class=\"text-emerald-300 text-sm\">$[150; 156)$</b>\n        <span class=\"text-[10px] text-slate-400 block mt-1\">Chứa $x_{\\min}=152$</span>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-emerald-500/40\">\n        <span class=\"text-slate-400 font-bold block mb-1\">Nhóm 2</span>\n        <b class=\"text-emerald-300 text-sm\">$[156; 162)$</b>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-emerald-500/40\">\n        <span class=\"text-slate-400 font-bold block mb-1\">Nhóm 3</span>\n        <b class=\"text-emerald-300 text-sm\">$[162; 168)$</b>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-emerald-500/40\">\n        <span class=\"text-slate-400 font-bold block mb-1\">Nhóm 4</span>\n        <b class=\"text-emerald-300 text-sm\">$[168; 174)$</b>\n      </div>\n      <div class=\"bg-slate-900/90 p-2.5 rounded border border-emerald-500/40\">\n        <span class=\"text-slate-400 font-bold block mb-1\">Nhóm 5</span>\n        <b class=\"text-emerald-300 text-sm\">$[174; 180)$</b>\n        <span class=\"text-[10px] text-slate-400 block mt-1\">Chứa $x_{\\max}=178$</span>\n      </div>\n    </div>\n    <div class=\"bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 text-xs font-semibold\">\n      👉 Kiểm tra: Miền bao phủ $[150; 180)$ có độ dài $30\\text{ cm} \\ge (178 - 152 = 26\\text{ cm})$. Đạt chuẩn 100%.\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Bắt đầu từ đầu mút trái a 1 bằng 150 centimet và mỗi nhóm có độ dài L bằng 6 centimet, ta cộng dồn liên tiếp: Nhóm một là nửa khoảng từ 150 đến 156 centimet; Nhóm hai là nửa khoảng từ 156 đến 162 centimet; Nhóm ba là nửa khoảng từ 162 đến 168 centimet; Nhóm bốn là nửa khoảng từ 168 đến 174 centimet; và Nhóm năm là nửa khoảng từ 174 đến 180 centimet. Nhóm đầu tiên chứa giá trị nhỏ nhất 152, và nhóm cuối cùng bao trọn giá trị lớn nhất 178, phân chia hoàn toàn chính xác.",
      "startTime": 210.55,
      "endTime": 267.02,
      "duration": 56.47
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: TÍNH TẦN SUẤT VÀ VẼ BIỂU ĐỒ TẦN SỐ",
      "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Tần suất $f_i = \\frac{m_i}{n}$. Tổng tất cả các tần suất luôn bằng 1 hay 100%!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 3 (Tính tần suất)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-amber-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Thời gian chạy 100m ($s$) của 40 vận động viên ($n = 40$):\n    </p>\n    <div class=\"overflow-x-auto my-2 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-amber-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Thời gian ($s$)</th>\n            <th class=\"p-2 border border-slate-700\">$[11; 12)$</th>\n            <th class=\"p-2 border border-slate-700\">$[12; 13)$</th>\n            <th class=\"p-2 border border-slate-700\">$[13; 14)$</th>\n            <th class=\"p-2 border border-slate-700\">$[14; 15)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-2 font-bold text-slate-400 border border-slate-700\">Số VĐV ($m_i$)</td>\n            <td class=\"p-2 border border-slate-700\">6</td>\n            <td class=\"p-2 border border-slate-700\">16</td>\n            <td class=\"p-2 border border-slate-700\">12</td>\n            <td class=\"p-2 border border-slate-700\">6</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-amber-300 font-semibold\">\n      👉 Yêu cầu: Tính tần suất tương ứng của từng nhóm (dưới dạng tỉ số phần trăm).\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta tiếp tục với Ví dụ 3: Thời gian hoàn thành một bài chạy 100 mét tính bằng giây của 40 vận động viên được thống kê vào bảng: từ 11 đến 12 giây có 6 người; từ 12 đến 13 giây có 16 người; từ 13 đến 14 giây có 12 người; từ 14 đến 15 giây có 6 người. Hãy tính tần suất của từng nhóm. Các em có 15 giây suy nghĩ.",
      "startTime": 267.02,
      "endTime": 289.58,
      "duration": 22.56
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ TẦN SUẤT: 15%, 40%, 30%, 15%",
      "mascotMode": "happy",
      "mascotTip": "Lấy tần số chia cho tổng số 40: $\\frac{6}{40} = 15\\%$; $\\frac{16}{40} = 40\\%$; $\\frac{12}{40} = 30\\%$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Bảng Tần Suất Ghép Nhóm ($n = 40$)</h4>\n    </div>\n    <div class=\"overflow-x-auto my-1 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-amber-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Thời gian ($s$)</th>\n            <th class=\"p-2 border border-slate-700\">Tần số ($m_i$)</th>\n            <th class=\"p-2 border border-slate-700\">Công thức tính</th>\n            <th class=\"p-2 border border-slate-700\">Tần suất ($f_i$)</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300 divide-y divide-slate-700\">\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[11; 12)$</td>\n            <td class=\"p-2 border border-slate-700\">6</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$\\frac{6}{40} \\times 100\\%$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">15%</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[12; 13)$</td>\n            <td class=\"p-2 border border-slate-700\">16</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$\\frac{16}{40} \\times 100\\%$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">40%</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[13; 14)$</td>\n            <td class=\"p-2 border border-slate-700\">12</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$\\frac{12}{40} \\times 100\\%$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">30%</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[14; 15)$</td>\n            <td class=\"p-2 border border-slate-700\">6</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$\\frac{6}{40} \\times 100\\%$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">15%</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 text-xs font-semibold\">\n      👉 Tổng tần suất: $\\sum f_i = 15\\% + 40\\% + 30\\% + 15\\% = \\mathbf{100\\%}$.\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Cỡ mẫu là 40 vận động viên. Tần suất của nhóm một từ 11 đến 12 giây là: 6 chia 40 bằng 15 phần trăm; Tần suất của nhóm hai từ 12 đến 13 giây là: 16 chia 40 bằng 40 phần trăm; Tần suất của nhóm ba từ 13 đến 14 giây là: 12 chia 40 bằng 30 phần trăm; Tần suất của nhóm bốn từ 14 đến 15 giây là: 6 chia 40 bằng 15 phần trăm. Tổng các tần suất là 15 cộng 40 cộng 30 cộng 15 bằng đúng 100 phần trăm.",
      "startTime": 289.58,
      "endTime": 333.14,
      "duration": 43.56
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: XỬ LÝ DỮ LIỆU ĐO LIÊN TỤC TRONG THÍ NGHIỆM",
      "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Dữ liệu liên tục có số thập phân: Cần chia nhóm bao phủ từ 18,0 đến 25,0 với bước nhảy hợp lý!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 4 (Thực nghiệm liên tục)</span>\n      <div class=\"countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-rose-400 countdown-num\">30s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Đo nhiệt độ ($^\\circ\\text{C}$) trong 30 ngày liên tiếp:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-1 mb-2\">\n      <p>• Nhiệt độ thấp nhất: <b>$18,2^\\circ\\text{C}$</b>.</p>\n      <p>• Nhiệt độ cao nhất: <b>$24,8^\\circ\\text{C}$</b>.</p>\n      <p>• Yêu cầu: Chia thành <b>$7$ nhóm</b> có độ dài <b>$1^\\circ\\text{C}$</b>, bắt đầu từ <b>$18^\\circ\\text{C}$</b>.</p>\n    </div>\n    <p class=\"text-xs text-rose-300 font-bold\">\n      Hỏi: Giá trị nhiệt độ $22,0^\\circ\\text{C}$ sẽ thuộc vào nhóm nào trong bảng ghép nhóm?\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta đến với Ví dụ 4: Trong một thí nghiệm nông nghiệp công nghệ cao, người ta đo nhiệt độ không khí lúc 12 giờ trưa trong 30 ngày liên tiếp, kết quả thu được dao động từ 18,2 độ C đến 24,8 độ C. Yêu cầu: Hãy chia mẫu số liệu trên thành 7 nhóm có độ dài bằng nhau bằng 1 độ C, bắt đầu từ 18 độ C, và cho biết nhiệt độ 22,0 độ C sẽ thuộc vào nhóm nào trong bảng phân loại? Các em có 30 giây suy nghĩ.",
      "startTime": 333.14,
      "endTime": 368.57,
      "duration": 35.42
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "GIẢI THÍCH: 22,0°C THUỘC NHÓM [22; 23), KHÔNG PHẢI [21; 22)",
      "mascotMode": "happy",
      "mascotTip": "Quy ước: Giá trị 22,0 rơi vào mút trái của nhóm $[22; 23)$, vì nhóm trước là $[21; 22)$ không lấy 22!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">7 Nhóm Nhiệt Độ Và Vị Trí Của $22,0^\\circ\\text{C}$</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>Bước 1: Liệt kê 7 nhóm nhiệt độ:</b></p>\n      <div class=\"grid grid-cols-4 gap-1.5 font-mono text-center my-1 text-[11px]\">\n        <span class=\"p-1 bg-slate-800 rounded\">1. $[18; 19)$</span>\n        <span class=\"p-1 bg-slate-800 rounded\">2. $[19; 20)$</span>\n        <span class=\"p-1 bg-slate-800 rounded\">3. $[20; 21)$</span>\n        <span class=\"p-1 bg-slate-800 rounded\">4. $[21; 22)$</span>\n        <span class=\"p-1 bg-emerald-900/50 text-emerald-300 font-bold rounded border border-emerald-500/50\">5. $[22; 23)$</span>\n        <span class=\"p-1 bg-slate-800 rounded\">6. $[23; 24)$</span>\n        <span class=\"p-1 bg-slate-800 rounded\">7. $[24; 25]$</span>\n      </div>\n\n      <p><b>Bước 2: Xác định nhóm chứa giá trị $22,0^\\circ\\text{C}$:</b></p>\n      <p class=\"text-slate-300\">\n        • Nhóm 4: $[21; 22)$ chỉ chứa các số $x$ thỏa mãn $21 \\le x < 22$ (<b>không chứa 22</b>).<br/>\n        • Nhóm 5: $[22; 23)$ chứa các số $x$ thỏa mãn $22 \\le x < 23$ (<b>chứa đúng số 22</b>).\n      </p>\n\n      <div class=\"bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 font-bold\">\n        👉 Kết luận: Giá trị $22,0^\\circ\\text{C}$ thuộc nhóm thứ 5: <b class=\"text-white text-sm\">$[22; 23)$</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây! Lời giải như sau: Với 7 nhóm có độ dài bằng 1 độ C bắt đầu từ 18 độ C, ta có các nhóm: Nhóm một là 18 đến 19; Nhóm hai là 19 đến 20; Nhóm ba là 20 đến 21; Nhóm bốn là 21 đến 22; Nhóm năm là 22 đến 23; Nhóm sáu là 23 đến 24; và Nhóm bảy là 24 đến 25. Xét giá trị 22,0 độ C: Vì nhóm bốn là nửa khoảng mở tại đầu mút phải, tức là từ 21 đến nhỏ hơn 22, nên giá trị 22,0 không thể thuộc nhóm bốn. Giá trị 22,0 đóng vai trò là đầu mút trái có ngoặc vuông của nhóm năm từ 22 đến 23. Do đó, nhiệt độ 22,0 độ C thuộc nhóm năm.",
      "startTime": 368.57,
      "endTime": 429.65,
      "duration": 61.08
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO CÁC BẪY THI KHI GHÉP NHÓM SỐ LIỆU",
      "subtitle": "3 NGUY CƠ SAI SÓT KHI ĐẾM THỦ CÔNG",
      "mascotMode": "warning",
      "mascotTip": "Mẹo chống sót: Vừa đếm vừa gạch chéo số liệu thô và dùng kiểm tra $\\sum m_i = n$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"text-lg\">⚠️</span>\n      <h3 class=\"text-sm font-bold text-amber-300\">3 Lưu Ý Đắt Giá Khi Ghép Nhóm Mẫu Số Liệu</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">1. Sót hoặc trùng lặp số liệu:</span>\n        <p class=\"text-slate-300 mt-1\">Đếm thủ công dễ bỏ sót. Bắt buộc kiểm tra tổng tần số $\\sum m_i = n$ trước khi làm tiếp.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-rose-500\">\n        <span class=\"font-bold text-rose-400\">2. Nhầm lẫn mút tròn và vuông:</span>\n        <p class=\"text-slate-300 mt-1\">Giá trị đúng bằng đầu mút biên $b$ luôn rơi vào nhóm sau $[b; c)$, không thuộc nhóm $[a; b)$.</p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400\">3. Chọn số nhóm $k$ bất hợp lý:</span>\n        <p class=\"text-slate-300 mt-1\">Nếu $k < 4$: mất tính phân bố; nếu $k > 10$: bảng quá dài. Khoảng tối ưu là $k \\in [5; 8]$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi kết thúc Mục 2, Thầy Cú có 3 lưu ý quan trọng: Thứ nhất là lỗi bỏ sót hoặc đếm lặp số liệu khi xử lý mẫu thô. Để tránh sai sót, các em nên gạch nhẹ số liệu đã đếm và ghi tần số bằng phương pháp gạch 5 vạch một cụm. Thứ hai là nhầm lẫn đầu mút như trường hợp số 22 ở ví dụ vừa rồi. Thứ ba là chọn số lượng nhóm quá ít hoặc quá nhiều. Nếu chia quá ít nhóm thì dữ liệu bị dồn cục, mất thông tin; nếu chia quá nhiều nhóm thì bảng cồng kềnh, không phát huy được ưu điểm của việc ghép nhóm.",
      "startTime": 429.65,
      "endTime": 469.22,
      "duration": 39.58
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT MỤC 2 & BÍ KÍP CÚ THÔNG THÁI",
      "subtitle": "KẾT THÚC MỤC 2 • CHUYỂN SANG MỤC 3: TẦN SỐ TÍCH LŨY",
      "mascotMode": "happy",
      "mascotTip": "Chuẩn bị sang Mục 3: Học về Tần số tích lũy - công cụ then chốt để xác định Trung vị và Tứ phân vị!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-4 rounded-xl border border-emerald-500/40 text-center\">\n    <div class=\"inline-flex p-2 bg-emerald-500/20 rounded-full text-emerald-300 mb-2\">\n      <span class=\"text-2xl\">🦉📐</span>\n    </div>\n    <h3 class=\"text-lg font-black text-emerald-200 mb-1\">Hoàn Thành Mục 2 Xuất Sắc!</h3>\n    <p class=\"text-xs text-slate-300 max-w-xl mx-auto leading-relaxed\">\n      Các em đã thành thạo kỹ năng biến mẫu số liệu thô lộn xộn thành bảng ghép nhóm khoa học.<br/>\n      Hãy tiếp tục tiến bước sang Mục 3: <b>Tần số tích lũy</b> 🚀\n    </p>\n    <div class=\"mt-3 flex justify-center gap-2\">\n      <span class=\"px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-xs font-semibold border border-emerald-500/40\">\n        Khám phá Mục 3: Tần số tích lũy ngay 🌟\n      </span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã làm chủ kỹ năng ghép nhóm mẫu số liệu ở Mục 2! Chúng ta đã nắm chắc quy trình 4 bước, kỹ thuật chọn độ dài nhóm L tròn trịa và phương pháp phân loại chính xác các số liệu biên. Bây giờ, hãy bước sang Mục 3: Tần số tích lũy của mẫu số liệu ghép nhóm. Đây là một khái niệm cực kỳ quan trọng, là chìa khóa then chốt để các em xác định được nhóm chứa trung vị và tứ phân vị trong Bài 9 sắp tới.",
      "startTime": 469.22,
      "endTime": 495.24,
      "duration": 26.02
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_bai8_muc2 = root.G11_CHAPTER3_DATA.g11_bai8_muc2;

  root.G11_CHAPTER3_DATA.g11_bai8_muc3 = {
  "lessonId": "toan11_bai8",
  "lessonTitle": "Bài 8: Mẫu số liệu ghép nhóm",
  "sectionId": "g11_bai8_muc3",
  "sectionTitle": "Mục 3: Tần số tích lũy & Ý nghĩa xác định phân vị dữ liệu",
  "audio": "/audio/g11_bai8_muc3.mp3",
  "audioSrc": "./audio/g11_bai8_muc3.mp3",
  "audio_src": "./audio/g11_bai8_muc3.mp3",
  "title": "Mục 3: Tần số tích lũy & Ý nghĩa xác định phân vị dữ liệu",
  "owl_tip": "Tần số tích lũy cf_i = cf_{i-1} + m_i. Đây là chìa khóa vàng để xác định vị trí Trung vị n/2 và Tứ phân vị n/4, 3n/4!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. ĐỊNH NGHĨA TẦN SỐ TÍCH LŨY",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÁCH LẬP BẢNG TẦN SỐ TÍCH LŨY CỘNG DỒN",
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
      "partTitle": "Phần 4: 11. CẢNH BÁO CÁC BẪY THI VỀ TẦN SỐ TÍCH LŨY",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. TỔNG KẾT TOÀN BỘ BÀI 8 & CHUYỂN SANG BÀI 9",
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
  "totalDuration": 517.15,
  "formattedDuration": "08:37",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. ĐỊNH NGHĨA TẦN SỐ TÍCH LŨY",
      "subtitle": "BÀI 8 • MỤC 3 • CÔNG CỤ XÁC ĐỊNH PHÂN VỊ THỐNG KÊ",
      "mascotMode": "pointer",
      "mascotTip": "Tần số tích lũy $cf_i = m_1 + m_2 + ... + m_i$ là số lượng giá trị nhỏ hơn đầu mút phải $a_{i+1}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-teal-500/20 text-teal-300 font-bold text-xs rounded-lg uppercase\">Khái niệm cốt lõi</span>\n      <h3 class=\"text-lg font-black text-teal-200\">Tần Số Tích Lũy Là Gì?</h3>\n    </div>\n    <p class=\"text-xs text-slate-300 leading-relaxed\">\n      <b>Tần số tích lũy</b> của nhóm thứ $i$, ký hiệu $cf_i$, là tổng các tần số từ nhóm thứ $1$ đến nhóm thứ $i$:\n    </p>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-center font-mono text-emerald-300 text-sm my-2\">\n      $$cf_i = m_1 + m_2 + \\dots + m_i = cf_{i-1} + m_i \\quad (cf_1 = m_1)$$\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-indigo-400\">\n      <h4 class=\"font-bold text-indigo-300 mb-1\">📈 Ý nghĩa thống kê</h4>\n      <p class=\"text-slate-300\">$cf_i$ cho biết số lượng phần tử có giá trị <b>nhỏ hơn đầu mút phải $a_{i+1}$</b> của nhóm thứ $i$.</p>\n    </div>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border-l-4 border-emerald-400\">\n      <h4 class=\"font-bold text-emerald-300 mb-1\">🏁 Giá trị cuối cùng</h4>\n      <p class=\"text-slate-300\">Tần số tích lũy của nhóm cuối cùng luôn luôn bằng đúng cỡ mẫu: <b>$cf_k = n$</b>.</p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Tần số tích lũy của mẫu số liệu ghép nhóm. Vậy tần số tích lũy là gì? Tần số tích lũy của nhóm thứ i, ký hiệu là c f i, chính là tổng tần số của tất cả các nhóm từ nhóm 1 cho đến nhóm thứ i. Về mặt ý nghĩa thống kê, tần số tích lũy c f i cho ta biết có bao nhiêu số liệu trong mẫu có giá trị nhỏ hơn đầu mút phải a i cộng một của nhóm đó. Nhóm cuối cùng sẽ có tần số tích lũy đúng bằng cỡ mẫu n.",
      "startTime": 0.0,
      "endTime": 36.38,
      "duration": 36.38
    },
    {
      "sceneIndex": 2,
      "title": "2. CÁCH LẬP BẢNG TẦN SỐ TÍCH LŨY CỘNG DỒN",
      "subtitle": "KỸ THUẬT CỘNG CHÉO LIÊN TIẾP NHANH CHÓNG",
      "mascotMode": "explain",
      "mascotTip": "Quy tắc cộng chéo: $cf_1 = m_1$, sau đó lấy $cf_1 + m_2 = cf_2$, lấy $cf_2 + m_3 = cf_3$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"w-3 h-3 rounded-full bg-cyan-400 animate-pulse\"></span>\n      <h3 class=\"text-sm font-bold text-cyan-300\">Quy Trình Cộng Chéo Lập Bảng Tần Số Tích Lũy</h3>\n    </div>\n    <div class=\"overflow-x-auto text-xs my-1\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-cyan-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Nhóm</th>\n            <th class=\"p-2 border border-slate-700\">$[a_1; a_2)$</th>\n            <th class=\"p-2 border border-slate-700\">$[a_2; a_3)$</th>\n            <th class=\"p-2 border border-slate-700\">$[a_3; a_4)$</th>\n            <th class=\"p-2 border border-slate-700\">$\\dots$</th>\n            <th class=\"p-2 border border-slate-700\">$[a_k; a_{k+1}]$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300 divide-y divide-slate-700\">\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold text-slate-400\">Tần số ($m_i$)</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">$m_1$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">$m_2$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">$m_3$</td>\n            <td class=\"p-2 border border-slate-700\">$\\dots$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">$m_k$</td>\n          </tr>\n          <tr class=\"bg-slate-900/60 font-mono\">\n            <td class=\"p-2 border border-slate-700 font-bold text-amber-400\">Tích lũy ($cf_i$)</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-300 font-bold\">$m_1$</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-300 font-bold\">$m_1 + m_2$</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-300 font-bold\">$cf_2 + m_3$</td>\n            <td class=\"p-2 border border-slate-700\">$\\dots$</td>\n            <td class=\"p-2 border border-slate-700 text-yellow-300 font-black\">$\\mathbf{n}$</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-slate-400 mt-1\">\n      💡 Điểm kiểm tra chéo: Số cuối cùng ở hàng tích lũy bắt buộc phải bằng tổng cỡ mẫu $n$.\n    </p>\n  </div>\n</div>\n",
      "narration": "Để lập bảng tần số tích lũy một cách nhanh chóng và không bao giờ nhầm lẫn, các em hãy áp dụng quy tắc cộng chéo hình bậc thang: Tần số tích lũy của nhóm đầu tiên chính bằng tần số m 1 của nó. Sau đó, lấy kết quả này cộng chéo với tần số m 2 của nhóm tiếp theo ta được c f 2; lấy c f 2 cộng tiếp với m 3 ta được c f 3; cứ tiếp tục như vậy cho đến nhóm cuối cùng ta phải thu được đúng bằng cỡ mẫu n. Nếu con số cuối cùng khác n thì chắc chắn ta đã cộng nhầm ở một bước nào đó.",
      "startTime": 36.38,
      "endTime": 76.2,
      "duration": 39.82
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1 - ĐỀ BÀI: LẬP BẢNG TẦN SỐ TÍCH LŨY CƠ BẢN",
      "subtitle": "VÍ DỤ MINH HỌA 1 • NHẬN BIẾT (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Cộng dồn: 5 -> 5+12=17 -> 17+18=35 -> 35+10=45 -> 45+5=50!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 1 (Lập bảng tích lũy)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-indigo-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-indigo-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Thời gian truy cập mạng xã hội (phút/ngày) của 50 học sinh ($n = 50$):\n    </p>\n    <div class=\"overflow-x-auto my-2 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-indigo-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Thời gian (phút)</th>\n            <th class=\"p-2 border border-slate-700\">$[0; 30)$</th>\n            <th class=\"p-2 border border-slate-700\">$[30; 60)$</th>\n            <th class=\"p-2 border border-slate-700\">$[60; 90)$</th>\n            <th class=\"p-2 border border-slate-700\">$[90; 120)$</th>\n            <th class=\"p-2 border border-slate-700\">$[120; 150)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-2 font-bold text-slate-400 border border-slate-700\">Tần số ($m_i$)</td>\n            <td class=\"p-2 border border-slate-700\">5</td>\n            <td class=\"p-2 border border-slate-700\">12</td>\n            <td class=\"p-2 border border-slate-700\">18</td>\n            <td class=\"p-2 border border-slate-700\">10</td>\n            <td class=\"p-2 border border-slate-700\">5</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-indigo-300 font-semibold\">\n      👉 Yêu cầu: Xác định dãy tần số tích lũy $cf_1, cf_2, cf_3, cf_4, cf_5$.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng bắt đầu với Ví dụ 1: Cho bảng tần số ghép nhóm về thời gian truy cập mạng xã hội của 50 học sinh gồm 5 nhóm: từ 0 đến 30 phút có 5 em; từ 30 đến 60 phút có 12 em; từ 60 đến 90 phút có 18 em; từ 90 đến 120 phút có 10 em; từ 120 đến 150 phút có 5 em. Hãy lập bảng tần số tích lũy cho mẫu số liệu trên. Các em có 15 giây để tính nhẩm các giá trị tích lũy.",
      "startTime": 76.2,
      "endTime": 114.05,
      "duration": 37.85
    },
    {
      "sceneIndex": 4,
      "title": "4. VÍ DỤ 1 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ TẦN SỐ TÍCH LŨY: 5, 17, 35, 45, 50",
      "mascotMode": "happy",
      "mascotTip": "Dãy số tích lũy: $cf_1=5, cf_2=17, cf_3=35, cf_4=45, cf_5=50$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Bảng Tần Số Tích Lũy Cộng Dồn</h4>\n    </div>\n    <div class=\"overflow-x-auto my-1 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-indigo-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Thời gian (phút)</th>\n            <th class=\"p-2 border border-slate-700\">$[0; 30)$</th>\n            <th class=\"p-2 border border-slate-700\">$[30; 60)$</th>\n            <th class=\"p-2 border border-slate-700\">$[60; 90)$</th>\n            <th class=\"p-2 border border-slate-700\">$[90; 120)$</th>\n            <th class=\"p-2 border border-slate-700\">$[120; 150)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300 divide-y divide-slate-700\">\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold text-slate-400\">Tần số ($m_i$)</td>\n            <td class=\"p-2 border border-slate-700\">5</td>\n            <td class=\"p-2 border border-slate-700\">12</td>\n            <td class=\"p-2 border border-slate-700\">18</td>\n            <td class=\"p-2 border border-slate-700\">10</td>\n            <td class=\"p-2 border border-slate-700\">5</td>\n          </tr>\n          <tr class=\"bg-slate-900 font-mono\">\n            <td class=\"p-2 border border-slate-700 font-bold text-amber-400\">Tích lũy ($cf_i$)</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-300 font-bold\">5</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-300 font-bold\">17</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-300 font-bold\">35</td>\n            <td class=\"p-2 border border-slate-700 text-cyan-300 font-bold\">45</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-black\">50</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"bg-indigo-950/40 p-2.5 rounded border border-indigo-500/30 text-indigo-200 text-xs font-semibold\">\n      👉 Các giá trị tích lũy lần lượt là: $\\mathbf{5, \\; 17, \\; 35, \\; 45, \\; 50}$.\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Áp dụng quy tắc cộng dồn liên tiếp: Nhóm một có c f 1 bằng 5; Nhóm hai có c f 2 bằng 5 cộng 12 bằng 17; Nhóm ba có c f 3 bằng 17 cộng 18 bằng 35; Nhóm bốn có c f 4 bằng 35 cộng 10 bằng 45; Nhóm năm có c f 5 bằng 45 cộng 5 bằng 50. Con số 50 ở nhóm cuối cùng đúng bằng tổng số 50 học sinh điều tra, xác nhận kết quả chính xác.",
      "startTime": 114.05,
      "endTime": 151.2,
      "duration": 37.15
    },
    {
      "sceneIndex": 5,
      "title": "5. VÍ DỤ 2 - ĐỀ BÀI: ĐỌC Ý NGHĨA TẦN SỐ TÍCH LŨY",
      "subtitle": "VÍ DỤ MINH HỌA 2 • THÔNG HIỂU (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "$cf_3 = 35$ nghĩa là có 35 học sinh dùng dưới 90 phút!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 2 (Ý nghĩa tích lũy)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-emerald-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-emerald-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Dựa vào bảng tần số tích lũy của 50 học sinh ở Ví dụ 1:\n    </p>\n    <div class=\"bg-slate-900/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 font-mono my-2 space-y-1\">\n      <p>• Dãy nhóm: $[0; 30), \\; [30; 60), \\; [60; 90), \\; [90; 120), \\; [120; 150)$.</p>\n      <p>• Dãy tích lũy: $cf_1 = 5, \\; cf_2 = 17, \\; cf_3 = 35, \\; cf_4 = 45, \\; cf_5 = 50$.</p>\n    </div>\n    <p class=\"text-xs text-emerald-300 font-semibold\">\n      a) Có bao nhiêu học sinh truy cập mạng xã hội dưới $90$ phút/ngày?<br/>\n      b) Có bao nhiêu học sinh truy cập mạng xã hội từ $60$ phút trở lên mỗi ngày?\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng đến với Ví dụ 2: Dựa vào bảng tần số tích lũy vừa lập ở Ví dụ 1, hãy trả lời hai câu hỏi sau: Câu a: Có bao nhiêu học sinh truy cập mạng xã hội dưới 90 phút một ngày? Câu b: Có bao nhiêu học sinh truy cập mạng xã hội từ 60 phút trở lên mỗi ngày? Các em có 15 giây suy nghĩ.",
      "startTime": 151.2,
      "endTime": 170.62,
      "duration": 19.42
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: a) 35 HỌC SINH • b) 33 HỌC SINH",
      "mascotMode": "happy",
      "mascotTip": "Dưới 90 phút là $cf_3 = 35$. Từ 60 phút trở lên là lấy tổng trừ đi dưới 60 phút: $50 - cf_2 = 50 - 17 = 33$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Khai thác giá trị từ hàng tích lũy</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>a) Số học sinh sử dụng dưới $90$ phút/ngày:</b></p>\n      <p>Số liệu nhỏ hơn đầu mút phải của nhóm thứ ba $[60; 90)$ chính là $cf_3$:</p>\n      <div class=\"text-emerald-300 font-mono text-sm\">\n        $$N_{< 90} = cf_3 = \\mathbf{35} \\text{ (học sinh)}$$\n      </div>\n\n      <p><b>b) Số học sinh sử dụng từ $60$ phút trở lên:</b></p>\n      <p>Lấy tổng cỡ mẫu trừ đi số học sinh sử dụng dưới $60$ phút ($cf_2$):</p>\n      <div class=\"text-cyan-300 font-mono text-sm\">\n        $$N_{\\ge 60} = n - cf_2 = 50 - 17 = \\mathbf{33} \\text{ (học sinh)}$$\n      </div>\n\n      <div class=\"bg-emerald-950/40 p-2.5 rounded border border-emerald-500/30 text-emerald-200 font-bold\">\n        👉 Đáp số: a) <b>35 học sinh</b> | b) <b>33 học sinh</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Ở câu a: Dưới 90 phút chính là số liệu nhỏ hơn đầu mút phải của nhóm thứ ba từ 60 đến 90. Do đó nó bằng đúng tần số tích lũy c f 3 bằng 35 học sinh. Ở câu b: Từ 60 phút trở lên chính là phần bù của số học sinh sử dụng dưới 60 phút. Dưới 60 phút có c f 2 bằng 17 học sinh. Do đó, số học sinh sử dụng từ 60 phút trở lên là: 50 trừ 17 bằng 33 học sinh. Rất nhanh và không cần phải cộng từng nhóm lẻ.",
      "startTime": 170.62,
      "endTime": 210.74,
      "duration": 40.13
    },
    {
      "sceneIndex": 7,
      "title": "7. VÍ DỤ 3 - ĐỀ BÀI: XÁC ĐỊNH NHÓM CHỨA VỊ TRÍ PHÂN VỊ",
      "subtitle": "VÍ DỤ MINH HỌA 3 • VẬN DỤNG THẤP (15 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Tìm nhóm chứa vị trí thứ $k$: Nhóm $i$ đầu tiên có $cf_i \\ge k$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 3 (Xác định nhóm chứa vị trí)</span>\n      <div class=\"countdown-clock-widget cd-15s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-amber-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-amber-400 countdown-num\">15s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Bảng tích lũy chiều cao ($cm$) của 100 học sinh ($n = 100$):\n    </p>\n    <div class=\"overflow-x-auto my-2 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-amber-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Chiều cao ($cm$)</th>\n            <th class=\"p-2 border border-slate-700\">$[150; 155)$</th>\n            <th class=\"p-2 border border-slate-700\">$[155; 160)$</th>\n            <th class=\"p-2 border border-slate-700\">$[160; 165)$</th>\n            <th class=\"p-2 border border-slate-700\">$[165; 170)$</th>\n            <th class=\"p-2 border border-slate-700\">$[170; 175)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-2 font-bold text-slate-400 border border-slate-700\">Tích lũy ($cf_i$)</td>\n            <td class=\"p-2 border border-slate-700\">15</td>\n            <td class=\"p-2 border border-slate-700\">40</td>\n            <td class=\"p-2 border border-slate-700\">75</td>\n            <td class=\"p-2 border border-slate-700\">90</td>\n            <td class=\"p-2 border border-slate-700\">100</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-amber-300 font-semibold\">\n      👉 Yêu cầu: Xác định nhóm chứa học sinh thứ 25 và nhóm chứa học sinh thứ 50.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta tiếp tục với Ví dụ 3: Cho bảng tần số tích lũy về chiều cao của 100 học sinh với 5 nhóm: từ 150 đến 155 có c f bằng 15; từ 155 đến 160 có c f bằng 40; từ 160 đến 165 có c f bằng 75; từ 165 đến 170 có c f bằng 90; từ 170 đến 175 có c f bằng 100. Hãy xác định: Học sinh ở vị trí thứ 25 và học sinh ở vị trí thứ 50 theo thứ tự chiều cao tăng dần sẽ thuộc vào nhóm nào? Các em có 15 giây suy nghĩ.",
      "startTime": 210.74,
      "endTime": 258.22,
      "duration": 47.47
    },
    {
      "sceneIndex": 8,
      "title": "8. VÍ DỤ 3 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ: THỨ 25 THUỘC [155; 160) • THỨ 50 THUỘC [160; 165)",
      "mascotMode": "happy",
      "mascotTip": "$15 < 25 \\le 40 \\implies$ Vị trí 25 thuộc nhóm 2; $40 < 50 \\le 75 \\implies$ Vị trí 50 thuộc nhóm 3!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Quy tắc tìm nhóm chứa vị trí thứ $k$</h4>\n    </div>\n    <div class=\"bg-slate-900/90 p-3 rounded-lg border border-slate-700 text-xs text-slate-300 space-y-2\">\n      <p><b>1. Xác định nhóm chứa học sinh thứ 25:</b></p>\n      <p class=\"text-slate-300\">\n        Ta có: $cf_1 = 15 < \\mathbf{25} \\le cf_2 = 40$.<br/>\n        👉 Học sinh thứ 25 thuộc nhóm thứ hai: <b class=\"text-amber-300\">$[155; 160)$</b>.\n      </p>\n\n      <p><b>2. Xác định nhóm chứa học sinh thứ 50:</b></p>\n      <p class=\"text-slate-300\">\n        Ta có: $cf_2 = 40 < \\mathbf{50} \\le cf_3 = 75$.<br/>\n        👉 Học sinh thứ 50 thuộc nhóm thứ ba: <b class=\"text-emerald-300\">$[160; 165)$</b>.\n      </p>\n\n      <div class=\"bg-amber-950/40 p-2.5 rounded border border-amber-500/30 text-amber-200 font-bold\">\n        👉 Kết luận: Học sinh thứ 25 thuộc nhóm <b>$[155; 160)$</b> | Học sinh thứ 50 thuộc nhóm <b>$[160; 165)$</b>.\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 15 giây! Lời giải như sau: Ta so sánh vị trí cần tìm với các giá trị tích lũy c f i: Với vị trí thứ 25: Nhóm một chỉ chứa từ học sinh thứ 1 đến thứ 15 vì c f 1 bằng 15. Nhóm hai chứa từ học sinh thứ 16 đến thứ 40 vì c f 2 bằng 40. Do 25 nằm giữa 15 và 40 nên học sinh thứ 25 thuộc nhóm hai, tức là nhóm từ 155 đến 160 centimet. Với vị trí thứ 50: Nhóm hai kết thúc ở học sinh thứ 40, còn nhóm ba kết thúc ở học sinh thứ 75. Do 50 nằm giữa 40 và 75 nên học sinh thứ 50 thuộc nhóm ba, tức là nhóm từ 160 đến 165 centimet. Đây chính là bước quan trọng nhất để tìm Trung vị và Tứ phân vị sau này.",
      "startTime": 258.22,
      "endTime": 318.07,
      "duration": 59.86
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 4 - ĐỀ BÀI: KHÔI PHỤC BẢNG TẦN SỐ GỐC TỪ TÍCH LŨY",
      "subtitle": "VÍ DỤ MINH HỌA 4 • VẬN DỤNG CAO (30 GIÂY SUY NGHĨ)",
      "mascotMode": "think",
      "mascotTip": "Phép toán ngược: $m_i = cf_i - cf_{i-1}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-800/90 p-4 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center justify-between border-b border-slate-700 pb-2 mb-3\">\n      <span class=\"px-2.5 py-1 bg-rose-500/20 text-rose-300 font-bold text-xs rounded-lg uppercase\">Ví dụ 4 (Tư duy ngược khôi phục bảng)</span>\n      <div class=\"countdown-clock-widget cd-30s flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-rose-500/30\">\n        <span class=\"text-xs text-slate-400\">Thời gian suy nghĩ:</span>\n        <span class=\"text-sm font-black text-rose-400 countdown-num\">30s</span>\n      </div>\n    </div>\n    <p class=\"text-sm text-slate-200 font-semibold mb-2\">\n      Cho bảng tần số tích lũy số giờ làm thêm ($h$):\n    </p>\n    <div class=\"overflow-x-auto my-2 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-rose-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Số giờ làm thêm</th>\n            <th class=\"p-2 border border-slate-700\">$[0; 5)$</th>\n            <th class=\"p-2 border border-slate-700\">$[5; 10)$</th>\n            <th class=\"p-2 border border-slate-700\">$[10; 15)$</th>\n            <th class=\"p-2 border border-slate-700\">$[15; 20)$</th>\n            <th class=\"p-2 border border-slate-700\">$[20; 25)$</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300\">\n          <tr>\n            <td class=\"p-2 font-bold text-slate-400 border border-slate-700\">Tích lũy ($cf_i$)</td>\n            <td class=\"p-2 border border-slate-700\">8</td>\n            <td class=\"p-2 border border-slate-700\">26</td>\n            <td class=\"p-2 border border-slate-700\">54</td>\n            <td class=\"p-2 border border-slate-700\">72</td>\n            <td class=\"p-2 border border-slate-700\">80</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <p class=\"text-xs text-rose-300 font-bold\">\n      👉 Yêu cầu: Khôi phục lại tần số $m_i$ của từng nhóm và chỉ ra nhóm có tần số cao nhất.\n    </p>\n  </div>\n</div>\n",
      "narration": "Chúng ta đến với bài toán tư duy ngược ở Ví dụ 4: Người ta cho trước một bảng tần số tích lũy về số giờ làm thêm trong tuần của một nhóm nhân viên: nhóm từ 0 đến 5 giờ có c f bằng 8; nhóm từ 5 đến 10 giờ có c f bằng 26; nhóm từ 10 đến 15 giờ có c f bằng 54; nhóm từ 15 đến 20 giờ có c f bằng 72; nhóm từ 20 đến 25 giờ có c f bằng 80. Hãy khôi phục lại bảng tần số gốc m i của từng nhóm và tìm nhóm có số nhân viên làm thêm nhiều nhất. Các em có 30 giây suy nghĩ.",
      "startTime": 318.07,
      "endTime": 362.54,
      "duration": 44.47
    },
    {
      "sceneIndex": 10,
      "title": "10. VÍ DỤ 4 - LỜI GIẢI CHI TIẾT",
      "subtitle": "KẾT QUẢ TẦN SỐ: 8, 18, 28, 18, 8 • NHÓM ĐÔNG NHẤT LÀ [10; 15)",
      "mascotMode": "happy",
      "mascotTip": "$m_1=8, m_2=26-8=18, m_3=54-26=28, m_4=72-54=18, m_5=80-72=8$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded\">Lời giải chi tiết</span>\n      <h4 class=\"text-sm font-bold text-slate-200\">Áp dụng công thức hiệu: $m_i = cf_i - cf_{i-1}$</h4>\n    </div>\n    <div class=\"overflow-x-auto my-1 text-xs\">\n      <table class=\"w-full text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-900 text-rose-300 border border-slate-700\">\n            <th class=\"p-2 border border-slate-700\">Nhóm</th>\n            <th class=\"p-2 border border-slate-700\">Tích lũy ($cf_i$)</th>\n            <th class=\"p-2 border border-slate-700\">Phép tính khôi phục</th>\n            <th class=\"p-2 border border-slate-700\">Tần số ($m_i$)</th>\n          </tr>\n        </thead>\n        <tbody class=\"text-slate-300 divide-y divide-slate-700\">\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[0; 5)$</td>\n            <td class=\"p-2 border border-slate-700\">8</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$cf_1$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">8</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[5; 10)$</td>\n            <td class=\"p-2 border border-slate-700\">26</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$26 - 8$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">18</td>\n          </tr>\n          <tr class=\"bg-emerald-950/20\">\n            <td class=\"p-2 border border-slate-700 font-bold text-yellow-300\">$[10; 15)$</td>\n            <td class=\"p-2 border border-slate-700\">54</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$54 - 26$</td>\n            <td class=\"p-2 border border-slate-700 text-yellow-300 font-black text-sm\">28</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[15; 20)$</td>\n            <td class=\"p-2 border border-slate-700\">72</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$72 - 54$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">18</td>\n          </tr>\n          <tr>\n            <td class=\"p-2 border border-slate-700 font-bold\">$[20; 25)$</td>\n            <td class=\"p-2 border border-slate-700\">80</td>\n            <td class=\"p-2 border border-slate-700 font-mono text-slate-400\">$80 - 72$</td>\n            <td class=\"p-2 border border-slate-700 text-emerald-400 font-bold\">8</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"bg-rose-950/40 p-2.5 rounded border border-rose-500/30 text-rose-200 text-xs font-semibold\">\n      👉 Nhóm có tần số cao nhất là <b>$[10; 15)$</b> với <b>$28$ nhân viên</b>.\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây! Lời giải như sau: Để khôi phục tần số ban đầu từ tần số tích lũy, ta thực hiện phép trừ lùi liên tiếp: m i bằng c f i trừ c f i trừ một. Cụ thể: Tần số nhóm một là m 1 bằng c f 1 bằng 8; Nhóm hai có m 2 bằng c f 2 trừ c f 1, bằng 26 trừ 8 bằng 18; Nhóm ba có m 3 bằng c f 3 trừ c f 2, bằng 54 trừ 26 bằng 28; Nhóm bốn có m 4 bằng c f 4 trừ c f 3, bằng 72 trừ 54 bằng 18; Nhóm năm có m 5 bằng c f 5 trừ c f 4, bằng 80 trừ 72 bằng 8. So sánh các tần số 8, 18, 28, 18, 8 thì tần số lớn nhất là 28, thuộc nhóm từ 10 đến 15 giờ. Vậy nhóm nhân viên làm thêm từ 10 đến 15 giờ là đông nhất.",
      "startTime": 362.54,
      "endTime": 433.87,
      "duration": 71.33
    },
    {
      "sceneIndex": 11,
      "title": "11. CẢNH BÁO CÁC BẪY THI VỀ TẦN SỐ TÍCH LŨY",
      "subtitle": "TRÁNH NHẦM LẪN GIỮA TẦN SỐ VÀ TẦN SỐ TÍCH LŨY",
      "mascotMode": "warning",
      "mascotTip": "Cảnh báo: Không được nhầm lẫn $m_i$ và $cf_i$ khi thay vào công thức tính Trung vị!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-amber-950/30 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"text-lg\">⚠️</span>\n      <h3 class=\"text-sm font-bold text-amber-300\">Phân Biệt Rạch Ròi $m_i$ và $cf_i$</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-3 rounded border-l-4 border-emerald-500\">\n        <span class=\"font-bold text-emerald-400 text-sm\">Tần số nhóm $m_i$:</span>\n        <p class=\"text-slate-300 mt-1\">\n          • Là số lượng phần tử thuộc <b>riêng nhóm thứ $i$</b>.<br/>\n          • Có thể tăng, giảm tùy theo dữ liệu.<br/>\n          • Được dùng ở mẫu số công thức Trung vị: $\\frac{\\dots}{m_i} \\cdot h$.\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-3 rounded border-l-4 border-amber-500\">\n        <span class=\"font-bold text-amber-400 text-sm\">Tần số tích lũy $cf_i$:</span>\n        <p class=\"text-slate-300 mt-1\">\n          • Là tổng dồn: $cf_i = cf_{i-1} + m_i$.<br/>\n          • <b>Luôn luôn tăng</b> (hoặc không giảm).<br/>\n          • $cf_{i-1}$ được dùng ở tử số công thức Trung vị: $\\frac{\\frac{n}{2} - cf_{i-1}}{m_i}$.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước khi kết thúc Bài 8, Thầy Cú có một cảnh báo tối quan trọng chuẩn bị cho Bài 9: Rất nhiều học sinh khi tính trung vị và tứ phân vị đã nhầm lẫn tai hại giữa tần số m i và tần số tích lũy c f i. Hãy nhớ: c f i là tổng dồn tăng dần từ đầu đến cuối, còn m i là số lượng của riêng nhóm đó. Khi dùng công thức ở Bài 9, đại lượng trừ ở tử số là c f của nhóm phía trước, còn chia ở mẫu số là m của chính nhóm đó. Hãy phân biệt rạch ròi hai đại lượng này để không bao giờ bị mất điểm oan uổng.",
      "startTime": 433.87,
      "endTime": 475.73,
      "duration": 41.86
    },
    {
      "sceneIndex": 12,
      "title": "12. TỔNG KẾT TOÀN BỘ BÀI 8 & CHUYỂN SANG BÀI 9",
      "subtitle": "HOÀN THÀNH BÀI 8 • SẴN SÀNG CHINH PHỤC CÁC SỐ ĐẶC TRƯNG",
      "mascotMode": "happy",
      "mascotTip": "Chúc mừng hoàn thành Bài 8! Bước tiếp theo: Chinh phục Trung bình, Trung vị, Tứ phân vị và Mốt ở Bài 9!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/60 p-4 rounded-xl border border-emerald-500/40 text-center\">\n    <div class=\"inline-flex p-3 bg-emerald-500/20 rounded-full text-emerald-300 mb-2\">\n      <span class=\"text-3xl\">🎓🦉📊</span>\n    </div>\n    <h3 class=\"text-xl font-black text-emerald-200 mb-1\">HOÀN THÀNH TOÀN DIỆN BÀI 8!</h3>\n    <p class=\"text-xs text-slate-300 max-w-lg mx-auto leading-relaxed\">\n      Các em đã nắm vững toàn bộ kiến thức nền tảng về Mẫu số liệu ghép nhóm.<br/>\n      Hãy tiếp tục hành trình bứt phá tại <b>Bài 9: Các số đặc trưng đo xu thế trung tâm</b>!\n    </p>\n    <div class=\"mt-3 flex justify-center gap-2\">\n      <span class=\"px-3.5 py-1 bg-emerald-600/40 text-emerald-200 rounded-full text-xs font-bold border border-emerald-400/50 shadow-lg\">\n        Sẵn sàng bước vào Bài 9 🚀\n      </span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng tất cả các em đã hoàn thành xuất sắc toàn bộ Bài 8: Mẫu số liệu ghép nhóm! Qua 3 mục bài giảng vừa rồi, các em đã làm chủ cấu trúc của một nhóm nửa khoảng, nắm vững ý nghĩa độ dài nhóm và giá trị đại diện, thành thạo quy trình 4 bước ghép nhóm từ số liệu thô và sở hữu công cụ tần số tích lũy cực kỳ lợi hại. Giờ đây, các em đã có đầy đủ vũ khí để bước sang Bài 9: Các số đặc trưng đo xu thế trung tâm, nơi chúng ta cùng chinh phục các công thức tính số trung bình, trung vị, tứ phân vị và mốt.",
      "startTime": 475.73,
      "endTime": 517.15,
      "duration": 41.42
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_bai8_muc3 = root.G11_CHAPTER3_DATA.g11_bai8_muc3;

  root.G11_CHAPTER3_DATA.g11_bai9_muc1 = {
  "lessonId": "toan11_bai9",
  "lessonTitle": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
  "sectionId": "g11_bai9_muc1",
  "sectionTitle": "Mục 1: Số trung bình của mẫu số liệu ghép nhóm & Ý nghĩa thực tiễn",
  "audio": "/audio/g11_bai9_muc1.mp3",
  "audioSrc": "./audio/g11_bai9_muc1.mp3",
  "audio_src": "./audio/g11_bai9_muc1.mp3",
  "title": "Mục 1: Số trung bình của mẫu số liệu ghép nhóm & Ý nghĩa thực tiễn",
  "owl_tip": "Số trung bình xấp xỉ bằng tổng các tích m_i * c_i chia cho cỡ mẫu n: x_bar = (1/n) * sum(m_i * c_i)!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. KHÁI NIỆM & Ý NGHĨA SỐ TRUNG BÌNH",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÔNG THỨC & 3 BƯỚC TÍNH SỐ TRUNG BÌNH",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: TUỔI THỌ TRUNG BÌNH BÓNG ĐÈN LED",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
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
  "totalDuration": 512.45,
  "formattedDuration": "08:32",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. KHÁI NIỆM & Ý NGHĨA SỐ TRUNG BÌNH",
      "subtitle": "BÀI 9 • MỤC 1 • CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM",
      "mascotMode": "pointer",
      "mascotTip": "Số trung bình của mẫu số liệu ghép nhóm là giá trị xấp xỉ cho số trung bình của mẫu số liệu gốc!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Khái niệm cốt lõi</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Số Trung Bình Mẫu Ghép Nhóm $\\overline{x}$</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      Số trung bình của mẫu số liệu ghép nhóm kí hiệu là $\\overline{x}$, là giá trị đại diện cho xu thế trung tâm của tập dữ liệu, tính bằng trung bình cộng có trọng số của các giá trị đại diện $c_i$ với trọng số là tần số tương ứng $m_i$.\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">🎯 Ý nghĩa thống kê</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Cho biết mức độ bình quân của mẫu nghiên cứu (thu nhập, điểm số, năng suất).<br/>\n        • Dùng làm thước đo chuẩn để so sánh giữa hai hay nhiều tập dữ liệu cùng loại.<br/>\n        • Là giá trị ước lượng điểm không chệch cho kì vọng của biến ngẫu nhiên tổng thể.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">⚡ Lưu ý bản chất</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $\\overline{x}$ của mẫu ghép nhóm là một giá trị <b>xấp xỉ</b> cho trung bình mẫu gốc.<br/>\n        • Phụ thuộc vào cách phân chia độ dài nhóm và số nhóm.<br/>\n        • Nhạy cảm với các giá trị bất thường (outliers) quá lớn hoặc quá nhỏ.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Bài 9: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm. Trong thống kê, số trung bình là đại lượng phổ biến nhất dùng để đại diện cho mức độ trung bình của toàn bộ tập dữ liệu. Khi số liệu đã được gom vào các nhóm nửa khoảng, chúng ta không còn giá trị chính xác của từng cá thể nữa. Vì vậy, ta quy ước lấy giá trị đại diện của từng nhóm để tính toán số trung bình xấp xỉ cho toàn mẫu số liệu.",
      "startTime": 0.0,
      "endTime": 32.93,
      "duration": 32.93
    },
    {
      "sceneIndex": 2,
      "title": "2. CÔNG THỨC & 3 BƯỚC TÍNH SỐ TRUNG BÌNH",
      "subtitle": "BÀI 9 • MỤC 1 • CÔNG THỨC TOÁN HỌC CHUẨN SGK",
      "mascotMode": "explaining",
      "mascotTip": "Nhớ công thức: $\\overline{x} = \\frac{1}{n}\\sum_{i=1}^k m_i c_i$ với $c_i = \\frac{a_i + a_{i+1}}{2}$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-cyan-500/40 shadow-lg text-center\">\n    <div class=\"text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1\">Công thức toán học chính tắc</div>\n    <div class=\"text-2xl font-black text-cyan-200 py-1 font-mono\">\n      $$\\overline{x} = \\frac{m_1 c_1 + m_2 c_2 + \\dots + m_k c_k}{n} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i$$\n    </div>\n    <div class=\"text-xs text-slate-400 mt-1\">\n      Trong đó: $c_i = \\frac{a_i + a_{i+1}}{2}$ là giá trị đại diện nhóm $[a_i; a_{i+1})$; $m_i$ là tần số nhóm $i$; $n = \\sum_{i=1}^k m_i$ là cỡ mẫu.\n    </div>\n  </div>\n\n  <div class=\"grid grid-cols-3 gap-2.5 text-xs\">\n    <div class=\"bg-slate-800/80 p-3 rounded-lg border-t-2 border-emerald-400\">\n      <div class=\"font-bold text-emerald-300 mb-1\">Bước 1: Tính đại diện $c_i$</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Lấy trung bình cộng hai đầu mút của từng nhóm:<br/>\n        $c_i = \\frac{a_i + a_{i+1}}{2}$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3 rounded-lg border-t-2 border-cyan-400\">\n      <div class=\"font-bold text-cyan-300 mb-1\">Bước 2: Tính tổng tích $m_i c_i$</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Nhân từng tần số với giá trị đại diện:<br/>\n        $S = \\sum_{i=1}^k m_i c_i$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3 rounded-lg border-t-2 border-teal-400\">\n      <div class=\"font-bold text-teal-300 mb-1\">Bước 3: Chia cho cỡ mẫu $n$</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Lấy tổng $S$ chia cho $n$:<br/>\n        $\\overline{x} = \\frac{S}{n}$ (làm tròn số theo yêu cầu).\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để tính số trung bình của mẫu số liệu ghép nhóm gồm k nhóm với cỡ mẫu n, chúng ta thực hiện theo ba bước chuẩn mực. Bước 1: Xác định giá trị đại diện c_i của từng nhóm bằng trung bình cộng hai đầu mút a_i và a_{i+1}. Bước 2: Nhân từng giá trị đại diện với tần số tương ứng m_i để được tích m_i nhân c_i, rồi cộng tất cả các tích lại. Bước 3: Lấy tổng tích vừa tính chia cho cỡ mẫu n.",
      "startTime": 32.93,
      "endTime": 60.12,
      "duration": 27.19
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: THỜI GIAN SỬ DỤNG MÁY TÍNH HỌC TẬP",
      "subtitle": "BÀI 9 • MỤC 1 • LUYỆN TẬP PHẢN XẠ CÔNG THỨC CƠ BẢN",
      "mascotMode": "thinking",
      "mascotTip": "Tìm nhanh các giá trị đại diện $c_i$: 1; 3; 5; 7; 9 rồi bấm máy tính tính tổng tích nhé!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết - Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Khảo sát thời gian sử dụng máy tính học tập mỗi ngày (đơn vị: giờ) của <b>$n = 40$</b> học sinh lớp 11A thu được bảng tần số ghép nhóm sau:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Thời gian (giờ)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[0; 2)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[2; 4)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[4; 6)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[6; 8)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[8; 10)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-emerald-300\">Số học sinh ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600\">6</td>\n            <td class=\"p-1.5 border border-slate-600\">14</td>\n            <td class=\"p-1.5 border border-slate-600\">12</td>\n            <td class=\"p-1.5 border border-slate-600\">5</td>\n            <td class=\"p-1.5 border border-slate-600\">3</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính thời gian sử dụng máy tính trung bình $\\overline{x}$ của một học sinh trong một ngày.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Bây giờ, thầy và các em cùng thực chiến Ví dụ 1. Bảng số liệu thống kê thời gian học bài trên máy tính mỗi ngày của 40 học sinh lớp 11A gồm 5 nhóm: từ 0 đến 2 giờ có 6 học sinh, từ 2 đến 4 giờ có 14 học sinh, từ 4 đến 6 giờ có 12 học sinh, từ 6 đến 8 giờ có 5 học sinh, và từ 8 đến 10 giờ có 3 học sinh. Hãy tính thời gian sử dụng máy tính trung bình mỗi ngày của một học sinh. Các em có 15 giây suy nghĩ.",
      "startTime": 60.12,
      "endTime": 96.05,
      "duration": 35.93
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: TÍNH $\\overline{x}$ CHI TIẾT",
      "subtitle": "BÀI 9 • MỤC 1 • TRÌNH BÀY BẢNG ĐẠI DIỆN VÀ TÍNH TOÁN",
      "mascotMode": "celebrating",
      "mascotTip": "Tổng tích bằng 170, chia cho 40 ra kết quả đẹp 4,25 giờ!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Bảng tính toán giá trị đại diện và tích số</div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1 border border-slate-600\">Nhóm</th>\n            <th class=\"p-1 border border-slate-600\">$[0; 2)$</th>\n            <th class=\"p-1 border border-slate-600\">$[2; 4)$</th>\n            <th class=\"p-1 border border-slate-600\">$[4; 6)$</th>\n            <th class=\"p-1 border border-slate-600\">$[6; 8)$</th>\n            <th class=\"p-1 border border-slate-600\">$[8; 10)$</th>\n            <th class=\"p-1 border border-slate-600 bg-emerald-950/60 text-emerald-300 font-bold\">Tổng</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-cyan-300\">Đại diện $c_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">1</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">3</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">5</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">7</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">9</td>\n            <td class=\"p-1 border border-slate-600 text-slate-400\">—</td>\n          </tr>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-emerald-300\">Tần số $m_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">14</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">5</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">3</td>\n            <td class=\"p-1 border border-slate-600 font-mono font-bold text-emerald-300\">$n = 40$</td>\n          </tr>\n          <tr class=\"bg-slate-900 text-amber-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-amber-300\">Tích $m_i c_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">42</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">60</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">35</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">27</td>\n            <td class=\"p-1 border border-slate-600 font-mono font-bold text-amber-200\">170</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"mt-3 bg-slate-900/80 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-300 mb-1\">Áp dụng công thức:</div>\n      <div class=\"text-sm font-mono text-cyan-200 text-center font-bold\">\n        $$\\overline{x} = \\frac{\\sum m_i c_i}{n} = \\frac{6 + 42 + 60 + 35 + 27}{40} = \\frac{170}{40} = 4,25\\text{ (giờ)}$$\n      </div>\n      <p class=\"text-slate-300 text-center mt-1\">\n        <b>Kết luận:</b> Thời gian học bài trên máy tính trung bình của mỗi học sinh lớp 11A là <b>4,25 giờ</b>/ngày.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Chúng ta cùng xem lời giải chi tiết. Đầu tiên, ta lập hàng giá trị đại diện c_i. Nhóm 0 đến 2 có tâm là 1; nhóm 2 đến 4 có tâm là 3; nhóm 4 đến 6 có tâm là 5; nhóm 6 đến 8 có tâm là 7; và nhóm 8 đến 10 có tâm là 9. Tiếp theo, nhân m_i với c_i: 6 nhân 1 bằng 6; 14 nhân 3 bằng 42; 12 nhân 5 bằng 60; 5 nhân 7 bằng 35; 3 nhân 9 bằng 27. Cộng lại ta được tổng tích bằng 170. Cuối cùng, lấy 170 chia cho 40, ta được số trung bình bằng 4,25 giờ mỗi ngày.",
      "startTime": 96.05,
      "endTime": 149.42,
      "duration": 53.38
    },
    {
      "sceneIndex": 5,
      "title": "5. Ý NGHĨA & ĐẶC ĐIỂM CỦA SỐ TRUNG BÌNH",
      "subtitle": "BÀI 9 • MỤC 1 • PHÂN TÍCH ƯU - NHƯỢC ĐIỂM SÂU SẮC",
      "mascotMode": "explaining",
      "mascotTip": "Số trung bình tận dụng toàn bộ số liệu nhưng rất dễ bị 'kéo lệch' bởi các giá trị ngoại lai!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n      <div class=\"flex items-center gap-2 mb-2\">\n        <span class=\"text-emerald-400 font-bold text-sm\">✅ Ưu điểm vượt trội</span>\n      </div>\n      <ul class=\"space-y-1.5 text-slate-300 leading-relaxed\">\n        <li>• <b>Toàn diện:</b> Tận dụng thông tin của từng cá thể và tần số trong mẫu.</li>\n        <li>• <b>Đại số:</b> Có công thức giải tích rõ ràng, dễ dàng biến đổi trung bình gia quyền.</li>\n        <li>• <b>Ứng dụng rộng rãi:</b> Tính điểm trung bình môn, doanh thu trung bình, năng suất bình quân.</li>\n      </ul>\n    </div>\n\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30\">\n      <div class=\"flex items-center gap-2 mb-2\">\n        <span class=\"text-rose-400 font-bold text-sm\">⚠️ Hạn chế cần tránh bẫy</span>\n      </div>\n      <ul class=\"space-y-1.5 text-slate-300 leading-relaxed\">\n        <li>• <b>Bị méo mó do ngoại lai:</b> Chỉ cần 1 vài giá trị quá lớn hoặc quá bé sẽ kéo lệch hẳn $\\overline{x}$.</li>\n        <li>• <b>Không phản ánh độ phân tán:</b> Hai tập dữ liệu có cùng $\\overline{x}$ nhưng có thể một bên rất đồng đều, một bên rất chênh lệch.</li>\n        <li>• <b>Khi dữ liệu bất đối xứng nặng:</b> Nên ưu tiên dùng <b>Trung vị</b> hoặc <b>Mốt</b>.</li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"bg-indigo-950/40 p-3 rounded-lg border border-indigo-500/30 text-xs text-indigo-200\">\n    💡 <b>Ghi nhớ sư phạm:</b> Khi mẫu số liệu có sự chênh lệch đột biến giữa các nhóm biên (ví dụ: nhóm cuối có khoảng lương từ 100 triệu đến 500 triệu), số trung bình sẽ không còn đại diện tốt cho số đông người lao động!\n  </div>\n</div>\n",
      "narration": "Các em cần nắm vững bản chất toán học của số trung bình. Ưu điểm lớn nhất của số trung bình là nó sử dụng thông tin của toàn bộ 100% mẫu số liệu, có tính đại số cao và dễ kết hợp vào các mô hình xác suất thống kê tiếp theo. Tuy nhiên, nhược điểm chí mạng của số trung bình là nó rất nhạy cảm với các giá trị dị biệt hay còn gọi là ngoại lai. Chẳng hạn trong một công ty có thu nhập bình quân rất cao do lương ban giám đốc lên tới hàng trăm triệu, trong khi lương đa số nhân viên chỉ khoảng 8 đến 10 triệu đồng.",
      "startTime": 149.42,
      "endTime": 187.9,
      "duration": 38.47
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: ĐIỂM THI THỬ MÔN TOÁN LỚP 11A",
      "subtitle": "BÀI 9 • MỤC 1 • MẪU SỐ LIỆU GHÉP 6 NHÓM CỠ MẪU 50",
      "mascotMode": "thinking",
      "mascotTip": "Lưu ý nhóm cuối cùng $[9; 10]$ lấy cả đầu mút phải, giá trị đại diện là (9 + 10)/2 = 9,5!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Điểm thi thử môn Toán của <b>$n = 50$</b> học sinh được thống kê như sau:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1 border border-slate-600\">Khoảng điểm</th>\n            <th class=\"p-1 border border-slate-600\">$[4; 5)$</th>\n            <th class=\"p-1 border border-slate-600\">$[5; 6)$</th>\n            <th class=\"p-1 border border-slate-600\">$[6; 7)$</th>\n            <th class=\"p-1 border border-slate-600\">$[7; 8)$</th>\n            <th class=\"p-1 border border-slate-600\">$[8; 9)$</th>\n            <th class=\"p-1 border border-slate-600\">$[9; 10]$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-cyan-300\">Số học sinh ($m_i$)</td>\n            <td class=\"p-1 border border-slate-600\">4</td>\n            <td class=\"p-1 border border-slate-600\">10</td>\n            <td class=\"p-1 border border-slate-600\">16</td>\n            <td class=\"p-1 border border-slate-600\">12</td>\n            <td class=\"p-1 border border-slate-600\">6</td>\n            <td class=\"p-1 border border-slate-600\">2</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-cyan-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính điểm thi thử môn Toán trung bình $\\overline{x}$ của lớp 11A.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Tiếp theo là Ví dụ 2. Thống kê kết quả thi thử tốt nghiệp THPT môn Toán của 50 học sinh lớp 11A được chia làm 6 nhóm: [4; 5) có 4 học sinh; [5; 6) có 10 học sinh; [6; 7) có 16 học sinh; [7; 8) có 12 học sinh; [8; 9) có 6 học sinh; và [9; 10] có 2 học sinh. Hãy tính điểm thi thử trung bình của học sinh lớp 11A. Các em có 15 giây để tính toán.",
      "startTime": 187.9,
      "endTime": 226.56,
      "duration": 38.66
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐIỂM TRUNG BÌNH LỚP 11A",
      "subtitle": "BÀI 9 • MỤC 1 • TÍNH TOÁN CHÍNH XÁC ZERO ERROR",
      "mascotMode": "celebrating",
      "mascotTip": "Tổng tích bằng 337, chia 50 ra chính xác 6,74 điểm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Bảng tổng hợp tích số chi tiết</div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1 border border-slate-600\">Đại diện $c_i$</th>\n            <th class=\"p-1 border border-slate-600\">4,5</th>\n            <th class=\"p-1 border border-slate-600\">5,5</th>\n            <th class=\"p-1 border border-slate-600\">6,5</th>\n            <th class=\"p-1 border border-slate-600\">7,5</th>\n            <th class=\"p-1 border border-slate-600\">8,5</th>\n            <th class=\"p-1 border border-slate-600\">9,5</th>\n            <th class=\"p-1 border border-slate-600 bg-cyan-950 text-cyan-300 font-bold\">Tổng</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-emerald-300\">Tần số $m_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">4</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">16</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">2</td>\n            <td class=\"p-1 border border-slate-600 font-mono font-bold text-emerald-300\">50</td>\n          </tr>\n          <tr class=\"bg-slate-900 text-amber-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-amber-300\">Tích $m_i c_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">18</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">55</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">104</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">90</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">51</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">19</td>\n            <td class=\"p-1 border border-slate-600 font-mono font-bold text-amber-200\">337</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"mt-3 bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30 text-xs\">\n      <div class=\"font-bold text-cyan-300 mb-1\">Kết quả tính toán:</div>\n      <div class=\"text-sm font-mono text-emerald-300 text-center font-bold\">\n        $$\\overline{x} = \\frac{337}{50} = 6,74\\text{ (điểm)}$$\n      </div>\n      <p class=\"text-slate-300 text-center mt-1\">\n        <b>Đánh giá:</b> Điểm trung bình môn Toán của lớp 11A đạt <b>6,74 điểm</b>, thuộc mức học lực Khá theo chuẩn đánh giá.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết thời gian. Ta lập bảng giá trị đại diện: nhóm 4 đến 5 có đại diện 4,5; nhóm 5 đến 6 là 5,5; nhóm 6 đến 7 là 6,5; nhóm 7 đến 8 là 7,5; nhóm 8 đến 9 là 8,5; và nhóm 9 đến 10 là 9,5. Nhân với tần số: 4 nhân 4,5 bằng 18; 10 nhân 5,5 bằng 55; 16 nhân 6,5 bằng 104; 12 nhân 7,5 bằng 90; 6 nhân 8,5 bằng 51; và 2 nhân 9,5 bằng 19. Tổng các tích là 18 cộng 55 cộng 104 cộng 90 cộng 51 cộng 19 bằng 337. Lấy 337 chia cho cỡ mẫu 50, ta được điểm trung bình bằng 6,74.",
      "startTime": 226.56,
      "endTime": 286.7,
      "duration": 60.14
    },
    {
      "sceneIndex": 8,
      "title": "8. KỸ NĂNG THỰC CHIẾN: SO SÁNH HAI MẪU DỮ LIỆU",
      "subtitle": "BÀI 9 • MỤC 1 • ỨNG DỤNG THỐNG KÊ ĐÁNH GIÁ CHẤT LƯỢNG",
      "mascotMode": "explaining",
      "mascotTip": "Khi so sánh hai tập dữ liệu, ngoài số trung bình ta còn cần quan sát phân bố tần số nữa!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-indigo-900/60 to-purple-900/40 p-4 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded uppercase\">Kỹ năng phân tích</span>\n      <h3 class=\"text-lg font-bold text-indigo-200\">Quy Trình So Sánh Hai Mẫu Số Liệu Ghép Nhóm</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs mt-3\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-indigo-400\">\n        <b class=\"text-indigo-300\">Bước 1: Đồng bộ nhóm</b>\n        <p class=\"text-slate-300 mt-1\">Đảm bảo hai mẫu chia cùng các nhóm $[a_i; a_{i+1})$ hoặc tìm đúng các $c_i$ tương ứng.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <b class=\"text-purple-300\">Bước 2: Tính $\\overline{x}_1, \\overline{x}_2$</b>\n        <p class=\"text-slate-300 mt-1\">Tính riêng số trung bình của từng nhóm theo công thức chuẩn.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-pink-400\">\n        <b class=\"text-pink-300\">Bước 3: Đưa kết luận</b>\n        <p class=\"text-slate-300 mt-1\">So sánh độ lớn và kết luận mẫu nào có mặt bằng chung vượt trội hơn.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trong thực tế quản lý doanh nghiệp, giáo dục và y tế, ta thường xuyên phải so sánh hai mẫu số liệu để đưa ra quyết định tối ưu. Chẳng hạn, so sánh năng suất lao động giữa hai phân xưởng A và B, hoặc so sánh hiệu quả của hai phương pháp giảng dạy khác nhau. Để so sánh, ta tính số trung bình x_A và x_B của từng mẫu. Mẫu nào có số trung bình lớn hơn thì mặt bằng chung của mẫu đó đạt kết quả tốt hơn.",
      "startTime": 286.7,
      "endTime": 312.24,
      "duration": 25.54
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: SO SÁNH NĂNG SUẤT HAI PHÂN XƯỞNG",
      "subtitle": "BÀI 9 • MỤC 1 • BÀI TOÁN QUẢN LÝ DOANH NGHIỆP THỰC TẾ",
      "mascotMode": "thinking",
      "mascotTip": "Tính nhanh $\\overline{x}_A$ và $\\overline{x}_B$ xem phân xưởng nào có năng suất cao hơn nhé!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Năng suất may mỗi ngày (sản phẩm/ngày) của 40 công nhân ở hai xưởng A và B:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Nhóm năng suất</th>\n            <th class=\"p-1.5 border border-slate-600\">$[10; 20)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[20; 30)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[30; 40)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[40; 50)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-emerald-300\">Số CN Xưởng A</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">5</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">15</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">8</td>\n          </tr>\n          <tr class=\"bg-slate-800/90 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-cyan-300\">Số CN Xưởng B</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">2</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">18</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">16</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">4</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-indigo-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính năng suất trung bình $\\overline{x}_A$ và $\\overline{x}_B$, từ đó cho biết công nhân phân xưởng nào có năng suất cao hơn?\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là một bài toán quản trị sản xuất thực tế. Một công ty may theo dõi sản lượng áo may được mỗi ngày của 40 công nhân tại Phân xưởng A và 40 công nhân tại Phân xưởng B. Bảng số liệu cho thấy cả hai xưởng đều chia thành 4 nhóm năng suất: từ 10 đến 20; từ 20 đến 30; từ 30 đến 40; và từ 40 đến 50 sản phẩm. Hãy tính sản lượng trung bình mỗi ngày của công nhân ở từng phân xưởng và so sánh. Các em có 30 giây.",
      "startTime": 312.24,
      "endTime": 348.74,
      "duration": 36.5
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: ĐỐI CHIẾU NĂNG SUẤT A VÀ B",
      "subtitle": "BÀI 9 • MỤC 1 • SO SÁNH SỐ TRUNG BÌNH CHÍNH XÁC",
      "mascotMode": "celebrating",
      "mascotTip": "$\\overline{x}_A = 30,75$ và $\\overline{x}_B = 30,5$. Phân xưởng A có năng suất cao hơn!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40\">\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border border-emerald-500/30\">\n        <div class=\"font-bold text-emerald-300 mb-1\">🏭 Phân xưởng A ($n_A = 40$)</div>\n        <p class=\"text-slate-300 font-mono leading-relaxed\">\n          $S_A = 5(15) + 15(25) + 12(35) + 8(45)$<br/>\n          $S_A = 75 + 375 + 420 + 360 = 1230$.\n        </p>\n        <div class=\"text-center font-bold text-emerald-200 text-sm mt-1 bg-emerald-950/40 py-1 rounded\">\n          $$\\overline{x}_A = \\frac{1230}{40} = 30,75\\text{ (sp)}$$\n        </div>\n      </div>\n\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30\">\n        <div class=\"font-bold text-cyan-300 mb-1\">🏭 Phân xưởng B ($n_B = 40$)</div>\n        <p class=\"text-slate-300 font-mono leading-relaxed\">\n          $S_B = 2(15) + 18(25) + 16(35) + 4(45)$<br/>\n          $S_B = 30 + 450 + 560 + 180 = 1220$.\n        </p>\n        <div class=\"text-center font-bold text-cyan-200 text-sm mt-1 bg-cyan-950/40 py-1 rounded\">\n          $$\\overline{x}_B = \\frac{1220}{40} = 30,50\\text{ (sp)}$$\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-slate-900/90 p-2.5 rounded-lg border border-indigo-500/30 text-xs text-center\">\n      <span class=\"text-slate-300\">So sánh: </span>\n      <span class=\"font-bold text-amber-300 font-mono\">$\\overline{x}_A = 30,75 > \\overline{x}_B = 30,50$</span>.<br/>\n      <span class=\"text-emerald-300 font-semibold\">Kết luận:</span> Công nhân <b>Phân xưởng A</b> có năng suất lao động trung bình cao hơn Phân xưởng B.\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết 30 giây. Giá trị đại diện của 4 nhóm lần lượt là 15, 25, 35 và 45. Đối với Phân xưởng A: Tổng tích bằng 5 nhân 15 cộng 15 nhân 25 cộng 12 nhân 35 cộng 8 nhân 45 bằng 1230. Chia cho 40, ta được năng suất trung bình x_A bằng 30,75 sản phẩm mỗi ngày. Đối với Phân xưởng B: Tổng tích bằng 2 nhân 15 cộng 18 nhân 25 cộng 16 nhân 35 cộng 4 nhân 45 bằng 1220. Chia cho 40, ta được năng suất trung bình x_B bằng 30,5 sản phẩm mỗi ngày. Vì 30,75 lớn hơn 30,5 nên công nhân Phân xưởng A có năng suất trung bình cao hơn.",
      "startTime": 348.74,
      "endTime": 404.45,
      "duration": 55.7
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: TUỔI THỌ TRUNG BÌNH BÓNG ĐÈN LED",
      "subtitle": "BÀI 9 • MỤC 1 • MẪU SỐ LIỆU CỠ LỚN N = 100",
      "mascotMode": "thinking",
      "mascotTip": "Cỡ mẫu $n = 100$ là một con số rất đẹp, chia tổng tích cho 100 chỉ cần dời dấu phẩy!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng thực tế</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Thử nghiệm tuổi thọ (đơn vị: nghìn giờ) của <b>$n = 100$</b> bóng đèn LED công nghiệp:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Tuổi thọ (nghìn giờ)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[20; 25)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[25; 30)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[30; 35)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[35; 40)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[40; 45)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-amber-300\">Số bóng ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">8</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">22</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">35</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">25</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính tuổi thọ trung bình của loại bóng đèn LED này (theo đơn vị nghìn giờ và giờ).\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán kiểm định chất lượng sản phẩm công nghiệp. Một nhà máy tiến hành thử nghiệm tuổi thọ của 100 bóng đèn LED thông minh, đơn vị tính bằng nghìn giờ. Kết quả ghi nhận gồm 5 nhóm: từ 20 đến 25 nghìn giờ có 8 bóng; từ 25 đến 30 có 22 bóng; từ 30 đến 35 có 35 bóng; từ 35 đến 40 có 25 bóng; và từ 40 đến 45 có 10 bóng. Hãy tính tuổi thọ trung bình của bóng đèn do nhà máy sản xuất. Các em có 30 giây.",
      "startTime": 404.45,
      "endTime": 445.32,
      "duration": 40.87
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "subtitle": "BÀI 9 • MỤC 1 • TỔNG HỢP KIẾN THỨC CỐT LÕI SỐ TRUNG BÌNH",
      "mascotMode": "celebrating",
      "mascotTip": "Tuổi thọ trung bình là 32,85 nghìn giờ, tức 32.850 giờ phát sáng liên tục!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải chi tiết Ví dụ 4:</div>\n    <div class=\"text-xs text-slate-300 font-mono leading-relaxed\">\n      • Tổng tích: $S = 8(22,5) + 22(27,5) + 35(32,5) + 25(37,5) + 10(42,5)$<br/>\n      • $S = 180 + 605 + 1137,5 + 937,5 + 425 = 3285$.<br/>\n      • Số trung bình: $\\overline{x} = \\frac{3285}{100} = 32,85\\text{ (nghìn giờ)} = 32.850\\text{ (giờ)}$.\n    </div>\n\n    <div class=\"mt-3 bg-gradient-to-r from-emerald-950 to-teal-950 p-3 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>⭐</span> <span>TỔNG KẾT MỤC 1 CẦN NHỚ</span>\n      </div>\n      <ul class=\"text-slate-300 space-y-1\">\n        <li>1. <b>Giá trị đại diện:</b> $c_i = \\frac{a_i + a_{i+1}}{2}$.</li>\n        <li>2. <b>Công thức trung bình:</b> $\\overline{x} = \\frac{1}{n}\\sum_{i=1}^k m_i c_i$.</li>\n        <li>3. <b>Ứng dụng:</b> Đại diện mặt bằng chung, so sánh chất lượng, hiệu suất giữa các mẫu.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã hoàn thành Mục 1. Ta có các giá trị đại diện: 22,5; 27,5; 32,5; 37,5; và 42,5. Tích số: 8 nhân 22,5 bằng 180; 22 nhân 27,5 bằng 605; 35 nhân 32,5 bằng 1137,5; 25 nhân 37,5 bằng 937,5; và 10 nhân 42,5 bằng 425. Tổng cộng ta được 3285. Chia cho cỡ mẫu 100, ta được tuổi thọ trung bình bằng 32,85 nghìn giờ, tương đương 32850 giờ. Như vậy, chúng ta đã nắm chắc công thức và kỹ năng tính số trung bình của mẫu số liệu ghép nhóm. Hãy cùng chuyển sang Mục 2 để tìm hiểu về Trung vị và Tứ phân vị.",
      "startTime": 445.32,
      "endTime": 512.45,
      "duration": 67.13
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_bai9_muc1 = root.G11_CHAPTER3_DATA.g11_bai9_muc1;

  root.G11_CHAPTER3_DATA.g11_bai9_muc2 = {
  "lessonId": "toan11_bai9",
  "lessonTitle": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
  "sectionId": "g11_bai9_muc2",
  "sectionTitle": "Mục 2: Trung vị và Tứ phân vị của mẫu số liệu ghép nhóm",
  "audio": "/audio/g11_bai9_muc2.mp3",
  "audioSrc": "./audio/g11_bai9_muc2.mp3",
  "audio_src": "./audio/g11_bai9_muc2.mp3",
  "title": "Mục 2: Trung vị và Tứ phân vị của mẫu số liệu ghép nhóm",
  "owl_tip": "M_e chia đôi dữ liệu tại n/2; Q_1 tại n/4; Q_3 tại 3n/4. Khoảng tứ phân vị Delta_Q = Q_3 - Q_1 đo độ biến thiên 50% ở giữa!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. TRUNG VỊ MẪU GHÉP NHÓM & CÔNG THỨC CHUẨN",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. TỨ PHÂN VỊ $Q_1, Q_2, Q_3$ VÀ KHOẢNG TỨ PHÂN VỊ",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: PHÂN LOẠI THU NHẬP DOANH NGHIỆP",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
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
  "totalDuration": 552.86,
  "formattedDuration": "09:12",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. TRUNG VỊ MẪU GHÉP NHÓM & CÔNG THỨC CHUẨN",
      "subtitle": "BÀI 9 • MỤC 2 • ĐẠI LƯỢNG KHÔNG BỊ ẢNH HƯỞNG BỞI NGOẠI LAI",
      "mascotMode": "pointer",
      "mascotTip": "Trung vị $M_e$ chia đôi mẫu số liệu: 50% nhỏ hơn và 50% lớn hơn $M_e$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/40 text-center shadow-lg\">\n    <div class=\"text-xs uppercase tracking-widest text-emerald-400 font-bold mb-1\">Công thức tính Trung vị Mẫu ghép nhóm</div>\n    <div class=\"text-2xl font-black text-emerald-200 py-1 font-mono\">\n      $$M_e = u_m + \\frac{\\frac{n}{2} - C}{n_m} \\cdot (u_{m+1} - u_m)$$\n    </div>\n    <div class=\"text-xs text-slate-300 mt-2 grid grid-cols-2 gap-2 text-left bg-slate-800/80 p-2.5 rounded-lg\">\n      <div>• $[u_m; u_{m+1})$: Nhóm chứa trung vị (có $cf \\ge \\frac{n}{2}$).<br/>• $u_m$: Đầu mút trái của nhóm chứa $M_e$.</div>\n      <div>• $C = cf_{m-1}$: Tần số tích lũy nhóm đứng trước.<br/>• $n_m$: Tần số của nhóm chứa $M_e$; $h = u_{m+1} - u_m$.</div>\n    </div>\n  </div>\n\n  <div class=\"bg-slate-800/80 p-3 rounded-lg border-l-4 border-teal-400 text-xs\">\n    <b class=\"text-teal-300\">🎯 Ý nghĩa thực tế:</b> Giá trị trung vị $M_e$ chia tập dữ liệu thành hai phần có số lượng quan sát bằng nhau: khoảng 50% quan sát nhận giá trị nhỏ hơn $M_e$ và khoảng 50% quan sát nhận giá trị lớn hơn $M_e$.\n  </div>\n</div>\n",
      "narration": "Chào các em đến với Mục 2: Trung vị và Tứ phân vị của mẫu số liệu ghép nhóm. Nếu như số trung bình rất dễ bị bóp méo bởi các giá trị ngoại lai thì Trung vị lại có ưu điểm vượt trội là hoàn toàn miễn nhiễm với các giá trị bất thường đó. Để tính Trung vị M_e của mẫu ghép nhóm cỡ n, ta tìm nhóm chứa trung vị, đó là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng n chia 2. Công thức chuẩn SGK được hiển thị ngay trên màn hình.",
      "startTime": 0.0,
      "endTime": 28.61,
      "duration": 28.61
    },
    {
      "sceneIndex": 2,
      "title": "2. TỨ PHÂN VỊ $Q_1, Q_2, Q_3$ VÀ KHOẢNG TỨ PHÂN VỊ",
      "subtitle": "BÀI 9 • MỤC 2 • BỘ BA ĐẶC TRƯNG PHÂN ĐOÀN DỮ LIỆU",
      "mascotMode": "explaining",
      "mascotTip": "$Q_2$ chính là Trung vị $M_e$; $Q_1$ tìm ở vị trí $n/4$; $Q_3$ tìm ở vị trí $3n/4$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/90 p-3 rounded-xl border border-cyan-500/40\">\n      <div class=\"font-bold text-cyan-300 text-sm mb-1\">Tứ phân vị thứ nhất $Q_1$ (25%)</div>\n      <p class=\"text-slate-300 leading-relaxed mb-2\">\n        Nhóm chứa $Q_1$ là $[u_p; u_{p+1})$ có $cf \\ge \\frac{n}{4}$:\n      </p>\n      <div class=\"font-mono text-cyan-200 font-bold bg-slate-900 p-2 rounded text-center\">\n        $$Q_1 = u_p + \\frac{\\frac{n}{4} - C_{p-1}}{n_p} \\cdot h_p$$\n      </div>\n      <p class=\"text-slate-400 text-xs mt-1\">Khoảng 25% giá trị nhỏ hơn $Q_1$, 75% lớn hơn $Q_1$.</p>\n    </div>\n\n    <div class=\"bg-slate-800/90 p-3 rounded-xl border border-purple-500/40\">\n      <div class=\"font-bold text-purple-300 text-sm mb-1\">Tứ phân vị thứ ba $Q_3$ (75%)</div>\n      <p class=\"text-slate-300 leading-relaxed mb-2\">\n        Nhóm chứa $Q_3$ là $[u_q; u_{q+1})$ có $cf \\ge \\frac{3n}{4}$:\n      </p>\n      <div class=\"font-mono text-purple-200 font-bold bg-slate-900 p-2 rounded text-center\">\n        $$Q_3 = u_q + \\frac{\\frac{3n}{4} - C_{q-1}}{n_q} \\cdot h_q$$\n      </div>\n      <p class=\"text-slate-400 text-xs mt-1\">Khoảng 75% giá trị nhỏ hơn $Q_3$, 25% lớn hơn $Q_3$.</p>\n    </div>\n  </div>\n\n  <div class=\"bg-slate-900/90 p-3 rounded-lg border border-amber-500/30 text-xs flex items-center justify-between\">\n    <div>\n      <span class=\"font-bold text-amber-300\">Khoảng tứ phân vị (Interquartile Range): </span>\n      <span class=\"font-mono text-amber-200 font-bold text-sm\">$\\Delta_Q = Q_3 - Q_1$</span>\n    </div>\n    <span class=\"text-slate-400\">Đo độ phân tán của 50% số liệu trung tâm</span>\n  </div>\n</div>\n",
      "narration": "Tứ phân vị gồm ba giá trị Q_1, Q_2, Q_3 chia mẫu số liệu đã sắp xếp thành bốn phần bằng nhau, mỗi phần chứa xấp xỉ 25% số quan sát. Trong đó, Q_2 chính là Trung vị M_e. Để tìm tứ phân vị thứ nhất Q_1, ta tìm nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng n chia 4, rồi áp dụng công thức tương tự. Để tìm tứ phân vị thứ ba Q_3, ta tìm nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng 3n chia 4. Hiệu số delta Q bằng Q_3 trừ Q_1 được gọi là khoảng tứ phân vị, đo độ phân tán của 50% số liệu ở chính giữa.",
      "startTime": 28.61,
      "endTime": 82.15,
      "duration": 53.54
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: TÍNH TRUNG VỊ THỜI GIAN CHẠY 100M",
      "subtitle": "BÀI 9 • MỤC 2 • THỰC HÀNH TÍNH TRUNG VỊ CHUẨN XÁC",
      "mascotMode": "thinking",
      "mascotTip": "Tìm $n/2 = 30/2 = 15$. Nhóm nào có tần số tích lũy đầu tiên vượt qua 15?",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Thành tích chạy 100m (giây) của <b>$n = 30$</b> học sinh nam:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Thời gian (giây)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[12; 13)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[13; 14)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[14; 15)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[15; 16)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-emerald-300\">Tần số ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">4</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">11</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">5</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-emerald-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Xác định nhóm chứa trung vị và tính giá trị trung vị $M_e$ (làm tròn đến chữ số thập phân thứ hai).\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-emerald-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng làm Ví dụ 1. Đo thành tích chạy cự li 100m của 30 học sinh nam lớp 11, kết quả được nhóm lại như sau: từ 12 đến 13 giây có 4 học sinh; từ 13 đến 14 giây có 10 học sinh; từ 14 đến 15 giây có 11 học sinh; và từ 15 đến 16 giây có 5 học sinh. Hãy tính trung vị của mẫu số liệu trên. Các em có 15 giây.",
      "startTime": 82.15,
      "endTime": 106.56,
      "duration": 24.41
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: TÍNH TRUNG VỊ $M_e$",
      "subtitle": "BÀI 9 • MỤC 2 • ÁP DỤNG CÔNG THỨC CHI TIẾT TỪNG BƯỚC",
      "mascotMode": "celebrating",
      "mascotTip": "$M_e = 14 + \\frac{15 - 14}{11} \\cdot 1 = 14 + \\frac{1}{11} \\approx 14,09$ giây!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Các bước giải chi tiết:</div>\n\n    <div class=\"space-y-2 text-xs text-slate-300\">\n      <p><b>Bước 1: Tính tần số tích lũy:</b> $cf_1 = 4$; $cf_2 = 4 + 10 = 14$; $cf_3 = 14 + 11 = 25$; $cf_4 = 30$.</p>\n      <p><b>Bước 2: Tìm nhóm chứa trung vị:</b> Ta có $\\frac{n}{2} = \\frac{30}{2} = 15$. Do $cf_2 = 14 < 15 \\le cf_3 = 25$ nên nhóm chứa trung vị là <b>$[14; 15)$</b>.</p>\n      <p><b>Bước 3: Xác định các tham số:</b> $u_m = 14$; $h = 15 - 14 = 1$; $C = cf_2 = 14$; $n_m = 11$.</p>\n      <p><b>Bước 4: Tính toán:</b></p>\n      <div class=\"text-sm font-mono text-cyan-200 text-center font-bold bg-slate-900 p-2 rounded\">\n        $$M_e = 14 + \\frac{15 - 14}{11} \\cdot 1 = 14 + \\frac{1}{11} \\approx 14,09\\text{ (giây)}$$\n      </div>\n      <p class=\"text-slate-300 text-center\">\n        <b>Ý nghĩa:</b> Có khoảng 50% học sinh chạy 100m dưới 14,09 giây và 50% học sinh chạy từ 14,09 giây trở lên.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta tính tần số tích lũy: nhóm 1 có cf bằng 4; nhóm 2 có cf bằng 14; nhóm 3 có cf bằng 25. Cỡ mẫu n bằng 30 nên n chia 2 bằng 15. Vì 14 nhỏ hơn 15 và 15 nhỏ hơn hoặc bằng 25, nên nhóm chứa trung vị chính là nhóm thứ ba, tức nửa khoảng từ 14 đến 15. Ta có đầu mút trái u_m bằng 14; độ dài nhóm h bằng 1; tần số tích lũy trước C bằng 14; tần số nhóm chứa trung vị n_m bằng 11. Thay vào công thức, M_e bằng 14 cộng với phân số 15 trừ 14 chia cho 11, nhân 1. Kết quả xấp xỉ 14,09 giây.",
      "startTime": 106.56,
      "endTime": 162.65,
      "duration": 56.09
    },
    {
      "sceneIndex": 5,
      "title": "5. PHƯƠNG PHÁP XÁC ĐỊNH NHANH NHÓM CHỨA $Q_1, Q_3$",
      "subtitle": "BÀI 9 • MỤC 2 • BÍ QUYẾT TRÁNH NHẦM LẪN VỊ TRÍ PHÂN VỊ",
      "mascotMode": "explaining",
      "mascotTip": "Luôn lập thêm hàng tần số tích lũy $cf_i$ ngay phía dưới bảng để tra cứu siêu tốc!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-indigo-500/40\">\n    <div class=\"font-bold text-indigo-300 text-xs uppercase mb-2\">Bảng quy tắc đối chiếu xác định nhóm tứ phân vị</div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs text-center\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300 text-sm\">Vị trí $Q_1$</b>\n        <div class=\"font-mono text-slate-200 my-1 font-bold text-base\">$\\frac{n}{4}$</div>\n        <p class=\"text-slate-400 text-xs\">Tìm nhóm đầu tiên thỏa mãn $cf_p \\ge \\frac{n}{4}$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300 text-sm\">Vị trí $Q_2 = M_e$</b>\n        <div class=\"font-mono text-slate-200 my-1 font-bold text-base\">$\\frac{n}{2}$</div>\n        <p class=\"text-slate-400 text-xs\">Tìm nhóm đầu tiên thỏa mãn $cf_m \\ge \\frac{n}{2}$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <b class=\"text-purple-300 text-sm\">Vị trí $Q_3$</b>\n        <div class=\"font-mono text-slate-200 my-1 font-bold text-base\">$\\frac{3n}{4}$</div>\n        <p class=\"text-slate-400 text-xs\">Tìm nhóm đầu tiên thỏa mãn $cf_q \\ge \\frac{3n}{4}$.</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"bg-amber-950/40 p-2.5 rounded-lg border border-amber-500/30 text-xs text-amber-200\">\n    ⚠️ <b>Cảnh báo bẫy thi cử:</b> Rất nhiều bạn lấy nhầm $C$ là tần số của nhóm hiện tại thay vì tần số tích lũy của <b>nhóm đứng trước</b> ($cf_{m-1}$). Nếu nhóm chứa là nhóm đầu tiên ($m=1$) thì $C = 0$!\n  </div>\n</div>\n",
      "narration": "Một lỗi phổ biến của học sinh là xác định nhầm nhóm chứa tứ phân vị. Để không bao giờ bị nhầm, bí quyết là luôn kẻ thêm hàng tần số tích lũy cf_i ngay dưới hàng tần số. Khi cần tìm Q_1, tính n chia 4 rồi nhìn từ trái qua phải, nhóm nào đầu tiên có cf chạm hoặc vượt mức n chia 4 thì đó chính là nhóm chứa Q_1. Khi cần tìm Q_3, tính 3n chia 4 rồi tìm nhóm đầu tiên có cf chạm hoặc vượt mức 3n chia 4. Nhớ rằng C chính là cf của nhóm đứng ngay liền trước.",
      "startTime": 162.65,
      "endTime": 205.9,
      "duration": 43.25
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÍNH TỨ PHÂN VỊ THỨ NHẤT $Q_1$",
      "subtitle": "BÀI 9 • MỤC 2 • THỰC CHIẾN TÍNH $Q_1$ CÂN NẶNG HỌC SINH",
      "mascotMode": "thinking",
      "mascotTip": "$n = 40$ thì $n/4 = 10$. Tần số tích lũy các nhóm là 5, 17... Nhóm chứa $Q_1$ là nhóm nào?",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Cân nặng (kg) của <b>$n = 40$</b> học sinh lớp 11B:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Cân nặng (kg)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[40; 45)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[45; 50)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[50; 55)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[55; 60)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[60; 65)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-cyan-300\">Số HS ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">5</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">14</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">7</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">2</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-cyan-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tìm nhóm chứa tứ phân vị thứ nhất và tính giá trị $Q_1$ (làm tròn đến hai chữ số thập phân).\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 yêu cầu tính tứ phân vị thứ nhất. Bảng số liệu thống kê cân nặng của 40 học sinh lớp 11B gồm 5 nhóm: từ 40 đến 45kg có 5 bạn; từ 45 đến 50kg có 12 bạn; từ 50 đến 55kg có 14 bạn; từ 55 đến 60kg có 7 bạn; và từ 60 đến 65kg có 2 bạn. Hãy tính tứ phân vị thứ nhất Q_1 của mẫu số liệu trên. Các em có 15 giây.",
      "startTime": 205.9,
      "endTime": 243.36,
      "duration": 37.46
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: TÍNH $Q_1$ CHÍNH XÁC",
      "subtitle": "BÀI 9 • MỤC 2 • KẾT QUẢ VÀ Ý NGHĨA PHÂN VỊ DỮ LIỆU",
      "mascotMode": "celebrating",
      "mascotTip": "$Q_1 = 45 + \\frac{10 - 5}{12} \\cdot 5 = 45 + \\frac{25}{12} \\approx 47,08$ kg!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40\">\n    <div class=\"text-xs font-bold text-cyan-300 uppercase mb-2\">Các bước giải chi tiết:</div>\n\n    <div class=\"space-y-2 text-xs text-slate-300\">\n      <p><b>Bước 1: Tính vị trí:</b> $\\frac{n}{4} = \\frac{40}{4} = 10$.</p>\n      <p><b>Bước 2: Tần số tích lũy:</b> $cf_1 = 5 < 10 \\le cf_2 = 17$. Do đó nhóm chứa $Q_1$ là <b>$[45; 50)$</b>.</p>\n      <p><b>Bước 3: Tham số:</b> $u_p = 45$; $h = 5$; $C = cf_1 = 5$; $n_p = 12$.</p>\n      <p><b>Bước 4: Áp dụng công thức:</b></p>\n      <div class=\"text-sm font-mono text-cyan-200 text-center font-bold bg-slate-900 p-2 rounded\">\n        $$Q_1 = 45 + \\frac{10 - 5}{12} \\cdot 5 = 45 + \\frac{25}{12} \\approx 47,08\\text{ (kg)}$$\n      </div>\n      <p class=\"text-slate-300 text-center\">\n        <b>Ý nghĩa thực tế:</b> Khoảng 25% số học sinh có cân nặng dưới 47,08 kg và 75% học sinh có cân nặng từ 47,08 kg trở lên.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta có cỡ mẫu n bằng 40 nên n chia 4 bằng 10. Tần số tích lũy: nhóm 1 có cf bằng 5; nhóm 2 có cf bằng 5 cộng 12 bằng 17. Vì 5 nhỏ hơn 10 và 10 nhỏ hơn hoặc bằng 17 nên nhóm chứa Q_1 là nhóm thứ hai, tức nửa khoảng từ 45 đến 50. Các tham số: đầu mút trái u_p bằng 45; độ dài nhóm h bằng 5; tần số tích lũy trước C bằng 5; tần số nhóm n_p bằng 12. Thay vào công thức, Q_1 bằng 45 cộng với phân số 10 trừ 5 chia 12, nhân 5. Ta được 45 cộng 25 phần 12, xấp xỉ 47,08 kg.",
      "startTime": 243.36,
      "endTime": 299.42,
      "duration": 56.06
    },
    {
      "sceneIndex": 8,
      "title": "8. QUY TRÌNH 4 BƯỚC TÍNH BỘ BA $(Q_1, Q_2, Q_3)$",
      "subtitle": "BÀI 9 • MỤC 2 • BẢN ĐỒ CHIẾN THUẬT XỬ LÝ TOÀN DIỆN",
      "mascotMode": "explaining",
      "mascotTip": "Làm trọn bộ $(Q_1, Q_2, Q_3)$ và $\\Delta_Q$ theo một bảng tích lũy duy nhất!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-4 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-purple-500/20 text-purple-300 font-bold text-xs rounded uppercase\">Quy trình chuẩn</span>\n      <h3 class=\"text-lg font-bold text-purple-200\">4 Bước Tính Trọn Bộ Tứ Phân Vị & $\\Delta_Q$</h3>\n    </div>\n    <div class=\"grid grid-cols-4 gap-2 text-xs mt-3\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">1. Lập $cf_i$</b>\n        <p class=\"text-slate-300 mt-1\">Cộng dồn tần số từ trái sang phải: $cf_i = cf_{i-1} + m_i$.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">2. Tính 3 mốc</b>\n        <p class=\"text-slate-300 mt-1\">Tính giá trị ba vị trí: $\\frac{n}{4}, \\frac{n}{2}, \\frac{3n}{4}$.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <b class=\"text-purple-300\">3. Tra nhóm</b>\n        <p class=\"text-slate-300 mt-1\">Xác định 3 nhóm tương ứng chứa $Q_1, Q_2, Q_3$.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-amber-400\">\n        <b class=\"text-amber-300\">4. Tính $\\Delta_Q$</b>\n        <p class=\"text-slate-300 mt-1\">Tính từng $Q_k$ rồi trừ: $\\Delta_Q = Q_3 - Q_1$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Khi gặp bài toán yêu cầu tìm trọn bộ tứ phân vị Q_1, Q_2, Q_3 và khoảng tứ phân vị delta Q, các em hãy bám chắc quy trình 4 bước chuẩn sau. Bước 1: Lập cột hoặc hàng tần số tích lũy cf_i. Bước 2: Tính ba mốc giá trị n chia 4, n chia 2 và 3n chia 4. Bước 3: Tra bảng để xác định chính xác ba nhóm chứa Q_1, Q_2 và Q_3. Bước 4: Áp dụng công thức tính giá trị của từng tứ phân vị rồi lấy Q_3 trừ Q_1 để ra khoảng tứ phân vị delta Q.",
      "startTime": 299.42,
      "endTime": 346.7,
      "duration": 47.28
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÍNH TRỌN BỘ TỨ PHÂN VỊ $(Q_1, Q_2, Q_3)$",
      "subtitle": "BÀI 9 • MỤC 2 • BẢNG ĐIỂM KIỂM TRA 60 HỌC SINH",
      "mascotMode": "thinking",
      "mascotTip": "$n = 60 \\Rightarrow n/4 = 15; n/2 = 30; 3n/4 = 45$. Nhóm [5; 7) chứa $Q_1$, nhóm [7; 9) chứa cả $Q_2$ và $Q_3$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Điểm kiểm tra của <b>$n = 60$</b> học sinh:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Điểm số</th>\n            <th class=\"p-1.5 border border-slate-600\">$[3; 5)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[5; 7)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[7; 9)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[9; 11)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-purple-300\">Tần số ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">18</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">26</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n          </tr>\n          <tr class=\"bg-slate-900 text-amber-300 font-bold\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-amber-300\">Tần số tích lũy ($cf_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">24</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">50</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">60</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-purple-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính bộ ba tứ phân vị $(Q_1, Q_2, Q_3)$ và khoảng tứ phân vị $\\Delta_Q$.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-purple-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán tổng hợp yêu cầu tính toàn bộ các tứ phân vị. Cho bảng phân phối điểm kiểm tra của 60 học sinh: nhóm từ 3 đến 5 điểm có 6 học sinh; nhóm từ 5 đến 7 điểm có 18 học sinh; nhóm từ 7 đến 9 điểm có 26 học sinh; và nhóm từ 9 đến 11 điểm có 10 học sinh. Hãy tính Q_1, Q_2, Q_3 và khoảng tứ phân vị delta Q. Các em có 30 giây.",
      "startTime": 346.7,
      "endTime": 381.46,
      "duration": 34.75
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: TÍNH $Q_1, Q_2, Q_3$ VÀ $\\Delta_Q$",
      "subtitle": "BÀI 9 • MỤC 2 • KẾT QUẢ CHUẨN XÁC 100% ZERO ERROR",
      "mascotMode": "celebrating",
      "mascotTip": "$Q_1 = 6,0$; $Q_2 \\approx 7,46$; $Q_3 \\approx 8,62$; $\\Delta_Q = 8,62 - 6,0 = 2,62$ điểm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40\">\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs\">\n      <div class=\"bg-slate-900/80 p-2 rounded-lg border border-cyan-500/30\">\n        <b class=\"text-cyan-300\">Tính $Q_1$ ($\\frac{n}{4} = 15$)</b>\n        <p class=\"text-slate-300 text-xs mt-1\">Nhóm chứa: $[5; 7)$<br/>$C = 6, n_p = 18, h = 2$.</p>\n        <div class=\"font-mono text-cyan-200 font-bold mt-1 text-center\">\n          $$Q_1 = 5 + \\frac{15 - 6}{18} \\cdot 2 = 6,0$$\n        </div>\n      </div>\n\n      <div class=\"bg-slate-900/80 p-2 rounded-lg border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">Tính $Q_2$ ($\\frac{n}{2} = 30$)</b>\n        <p class=\"text-slate-300 text-xs mt-1\">Nhóm chứa: $[7; 9)$<br/>$C = 24, n_m = 26, h = 2$.</p>\n        <div class=\"font-mono text-emerald-200 font-bold mt-1 text-center\">\n          $$Q_2 = 7 + \\frac{30 - 24}{26} \\cdot 2 \\approx 7,46$$\n        </div>\n      </div>\n\n      <div class=\"bg-slate-900/80 p-2 rounded-lg border border-purple-500/30\">\n        <b class=\"text-purple-300\">Tính $Q_3$ ($\\frac{3n}{4} = 45$)</b>\n        <p class=\"text-slate-300 text-xs mt-1\">Nhóm chứa: $[7; 9)$<br/>$C = 24, n_q = 26, h = 2$.</p>\n        <div class=\"font-mono text-purple-200 font-bold mt-1 text-center\">\n          $$Q_3 = 7 + \\frac{45 - 24}{26} \\cdot 2 \\approx 8,62$$\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-slate-900 p-2.5 rounded-lg border border-amber-500/30 text-xs flex items-center justify-between\">\n      <div>\n        <span class=\"text-slate-300\">Khoảng tứ phân vị: </span>\n        <span class=\"font-mono text-amber-300 font-bold\">$\\Delta_Q = Q_3 - Q_1 = 8,62 - 6,00 = 2,62\\text{ (điểm)}$</span>\n      </div>\n      <span class=\"text-emerald-400 font-medium\">Độ chênh lệch 50% học sinh trung tâm là 2,62 điểm</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết thời gian. Cỡ mẫu 60 nên n chia 4 bằng 15; n chia 2 bằng 30; 3n chia 4 bằng 45. Nhóm chứa Q_1 là nhóm từ 5 đến 7 điểm: Q_1 bằng 5 cộng 15 trừ 6 chia 18 nhân 2, bằng đúng 6,0 điểm. Nhóm chứa Q_2 là nhóm từ 7 đến 9 điểm: Q_2 bằng 7 cộng 30 trừ 24 chia 26 nhân 2, bằng 7 cộng 12 phần 26, xấp xỉ 7,46 điểm. Nhóm chứa Q_3 cũng là nhóm từ 7 đến 9 điểm: Q_3 bằng 7 cộng 45 trừ 24 chia 26 nhân 2, bằng 7 cộng 42 phần 26, xấp xỉ 8,62 điểm. Khoảng tứ phân vị delta Q bằng 8,62 trừ 6,0 bằng 2,62 điểm.",
      "startTime": 381.46,
      "endTime": 446.52,
      "duration": 65.06
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: PHÂN LOẠI THU NHẬP DOANH NGHIỆP",
      "subtitle": "BÀI 9 • MỤC 2 • BÀI TOÁN XẾP MỨC THƯỞNG CUỐI NĂM",
      "mascotMode": "thinking",
      "mascotTip": "$n = 100$: Tìm $M_e$ ($n/2 = 50$) và $Q_3$ ($3n/4 = 75$) để phân loại top 50% và top 25% thu nhập cao nhất!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng thực tế</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Thu nhập hàng tháng (triệu đồng) của <b>$n = 100$</b> nhân viên:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Thu nhập (triệu đồng)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[6; 9)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[9; 12)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[12; 15)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[15; 18)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[18; 21)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-amber-300\">Số nhân viên</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">15</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">35</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">30</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">15</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">5</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính Trung vị $M_e$ và Tứ phân vị thứ ba $Q_3$, từ đó xác định ngưỡng thu nhập của 25% nhân viên thu nhập cao nhất.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là ứng dụng thực tế phân loại mức thu nhập của 100 nhân viên trong một công ty để xét duyệt chính sách thưởng Tết. Thu nhập theo đơn vị triệu đồng mỗi tháng gồm 5 nhóm: từ 6 đến 9 triệu có 15 người; từ 9 đến 12 triệu có 35 người; từ 12 đến 15 triệu có 30 người; từ 15 đến 18 triệu có 15 người; và từ 18 đến 21 triệu có 5 người. Hãy xác định mức thu nhập trung vị và mức thu nhập tối thiểu của nhóm 25% nhân viên có thu nhập cao nhất. Các em có 30 giây.",
      "startTime": 446.52,
      "endTime": 488.02,
      "duration": 41.5
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "subtitle": "BÀI 9 • MỤC 2 • Ý NGHĨA KINH TẾ CỦA TỨ PHÂN VỊ",
      "mascotMode": "celebrating",
      "mascotTip": "$M_e = 12,0$ triệu đồng; $Q_3 = 14,5$ triệu đồng. Ngưỡng top 25% thu nhập cao là từ 14,5 triệu trở lên!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải chi tiết Ví dụ 4:</div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs text-slate-300\">\n      <div class=\"bg-slate-900 p-2 rounded border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">1. Trung vị $M_e$ ($\\frac{n}{2} = 50$)</b>\n        <p class=\"font-mono text-xs mt-1\">Nhóm $[9; 12)$: $u_m=9, C=15, n_m=35, h=3$.</p>\n        <div class=\"font-bold text-emerald-200 text-center font-mono mt-1\">\n          $$M_e = 9 + \\frac{50 - 15}{35} \\cdot 3 = 12,0\\text{ (triệu)}$$\n        </div>\n      </div>\n      <div class=\"bg-slate-900 p-2 rounded border border-purple-500/30\">\n        <b class=\"text-purple-300\">2. Tứ phân vị $Q_3$ ($\\frac{3n}{4} = 75$)</b>\n        <p class=\"font-mono text-xs mt-1\">Nhóm $[12; 15)$: $u_q=12, C=50, n_q=30, h=3$.</p>\n        <div class=\"font-bold text-purple-200 text-center font-mono mt-1\">\n          $$Q_3 = 12 + \\frac{75 - 50}{30} \\cdot 3 = 14,5\\text{ (triệu)}$$\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>⭐</span> <span>KẾT LUẬN QUẢN TRỊ THỰC TIỄN</span>\n      </div>\n      <p class=\"text-slate-300\">\n        • 50% nhân viên công ty có thu nhập dưới <b>12,0 triệu đồng</b>/tháng.<br/>\n        • Ngưỡng thu nhập của top 25% nhân viên xuất sắc nhất công ty là từ <b>14,5 triệu đồng</b>/tháng trở lên.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã tìm ra đáp án. Tần số tích lũy các nhóm lần lượt là 15, 50, 80, 95 và 100. Để tính trung vị, n chia 2 bằng 50. Nhóm chứa trung vị là từ 9 đến 12 triệu. M_e bằng 9 cộng với phân số 50 trừ 15 chia 35, nhân 3, ra đúng 12,0 triệu đồng. Để tính Q_3 xác định top 25% thu nhập cao nhất, 3n chia 4 bằng 75. Nhóm chứa Q_3 là nhóm từ 12 đến 15 triệu có cf bằng 80. Q_3 bằng 12 cộng với phân số 75 trừ 50 chia 30, nhân 3, bằng 12 cộng 2,5 ra đúng 14,5 triệu đồng. Như vậy, 25% nhân viên có thu nhập cao nhất kiếm được từ 14,5 triệu đồng mỗi tháng trở lên.",
      "startTime": 488.02,
      "endTime": 552.86,
      "duration": 64.85
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_bai9_muc2 = root.G11_CHAPTER3_DATA.g11_bai9_muc2;

  root.G11_CHAPTER3_DATA.g11_bai9_muc3 = {
  "lessonId": "toan11_bai9",
  "lessonTitle": "Bài 9: Các số đặc trưng đo xu thế trung tâm",
  "sectionId": "g11_bai9_muc3",
  "sectionTitle": "Mục 3: Mốt của mẫu số liệu ghép nhóm & Lựa chọn số đặc trưng phù hợp",
  "audio": "/audio/g11_bai9_muc3.mp3",
  "audioSrc": "./audio/g11_bai9_muc3.mp3",
  "audio_src": "./audio/g11_bai9_muc3.mp3",
  "title": "Mục 3: Mốt của mẫu số liệu ghép nhóm & Lựa chọn số đặc trưng phù hợp",
  "owl_tip": "Mốt M_o tính tại nhóm có tần số cực đại: M_o = u_m + [d_1 / (d_1 + d_2)] * h với d_1 = n_m - n_{m-1}, d_2 = n_m - n_{m+1}!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. MỐT CỦA MẪU SỐ LIỆU GHÉP NHÓM",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. CÁC TRƯỜNG HỢP ĐẶC BIỆT KHI TÍNH MỐT",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: QUẢN LÝ SIÊU THỊ BỐ TRÍ THU NGÂN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT TOÀN BỘ BÀI 9",
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
  "totalDuration": 516.98,
  "formattedDuration": "08:36",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. MỐT CỦA MẪU SỐ LIỆU GHÉP NHÓM",
      "subtitle": "BÀI 9 • MỤC 3 • GIÁ TRỊ CÓ TẦN SỐ CAO NHẤT",
      "mascotMode": "pointer",
      "mascotTip": "Nhóm chứa mốt là nhóm có tần số LỚN NHẤT trong bảng tần số ghép nhóm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-amber-500/40 text-center shadow-lg\">\n    <div class=\"text-xs uppercase tracking-widest text-amber-400 font-bold mb-1\">Công thức toán học tính Mốt Mẫu ghép nhóm</div>\n    <div class=\"text-2xl font-black text-amber-200 py-1 font-mono\">\n      $$M_o = u_m + \\frac{n_m - n_{m-1}}{(n_m - n_{m-1}) + (n_m - n_{m+1})} \\cdot (u_{m+1} - u_m)$$\n    </div>\n    <div class=\"text-xs text-slate-300 mt-2 grid grid-cols-2 gap-2 text-left bg-slate-800/80 p-2.5 rounded-lg\">\n      <div>• $[u_m; u_{m+1})$: Nhóm chứa mốt (nhóm có $n_m = \\max$).<br/>• $u_m$: Đầu mút trái của nhóm chứa mốt.</div>\n      <div>• $n_{m-1}$: Tần số nhóm đứng liền trước.<br/>• $n_{m+1}$: Tần số nhóm đứng liền sau; $h = u_{m+1} - u_m$.</div>\n    </div>\n  </div>\n\n  <div class=\"bg-slate-800/80 p-3 rounded-lg border-l-4 border-amber-400 text-xs\">\n    <b class=\"text-amber-300\">🎯 Ý nghĩa thực tế:</b> Mốt đại diện cho giá trị có mức độ phổ biến cao nhất, được người tiêu dùng hoặc cá thể trong mẫu lựa chọn nhiều nhất (ví dụ: cỡ áo bán chạy nhất, khung giờ xe cộ đông đúc nhất).\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Mốt của mẫu số liệu ghép nhóm và phương pháp lựa chọn số đặc trưng phù hợp. Ở lớp 10, mốt là giá trị xuất hiện nhiều lần nhất. Đối với mẫu ghép nhóm, nhóm chứa mốt là nhóm có tần số lớn nhất. Để ước lượng giá trị mốt M_o, ta sử dụng công thức nội suy dựa vào sự chênh lệch tần số giữa nhóm mốt với nhóm liền trước và nhóm liền sau nó.",
      "startTime": 0.0,
      "endTime": 24.26,
      "duration": 24.26
    },
    {
      "sceneIndex": 2,
      "title": "2. CÁC TRƯỜNG HỢP ĐẶC BIỆT KHI TÍNH MỐT",
      "subtitle": "BÀI 9 • MỤC 3 • XỬ LÝ NHÓM MỐT Ở BIÊN ĐẦU VÀ BIÊN CUỐI",
      "mascotMode": "explaining",
      "mascotTip": "Nếu nhóm mốt là nhóm đầu tiên thì $n_{m-1} = 0$; nếu là nhóm cuối thì $n_{m+1} = 0$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/90 p-3 rounded-xl border border-cyan-500/40\">\n      <div class=\"font-bold text-cyan-300 text-sm mb-1\">Trường hợp 1: Mốt ở nhóm đầu</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Nếu nhóm 1 ($[u_1; u_2)$) có tần số lớn nhất, không có nhóm đứng trước:<br/>\n        <span class=\"font-mono text-cyan-200 font-bold\">Quy ước: $n_0 = n_{m-1} = 0$</span>.<br/>\n        Công thức chuyển thành:<br/>\n        $$M_o = u_1 + \\frac{n_1}{n_1 + (n_1 - n_2)} \\cdot h$$\n      </p>\n    </div>\n\n    <div class=\"bg-slate-800/90 p-3 rounded-xl border border-purple-500/40\">\n      <div class=\"font-bold text-purple-300 text-sm mb-1\">Trường hợp 2: Mốt ở nhóm cuối</div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        Nếu nhóm cuối $k$ ($[u_k; u_{k+1})$) có tần số lớn nhất, không có nhóm sau:<br/>\n        <span class=\"font-mono text-purple-200 font-bold\">Quy ước: $n_{k+1} = n_{m+1} = 0$</span>.<br/>\n        Công thức chuyển thành:<br/>\n        $$M_o = u_k + \\frac{n_k - n_{k-1}}{(n_k - n_{k-1}) + n_k} \\cdot h$$\n      </p>\n    </div>\n  </div>\n\n  <div class=\"bg-slate-900/90 p-3 rounded-lg border border-amber-500/30 text-xs text-amber-200\">\n    💡 <b>Mẹo giải nhanh:</b> Đặt $d_1 = n_m - n_{m-1}$ (độ chênh lệch với nhóm trước) và $d_2 = n_m - n_{m+1}$ (độ chênh lệch với nhóm sau). Khi đó công thức rút gọn cực đẹp: $M_o = u_m + \\frac{d_1}{d_1 + d_2} \\cdot h$.\n  </div>\n</div>\n",
      "narration": "Khi áp dụng công thức mốt, có hai trường hợp đặc biệt các em cần hết sức chú ý. Trường hợp một: Nhóm chứa mốt là nhóm đầu tiên của bảng số liệu, khi đó không có nhóm liền trước nên ta quy ước tần số n_{m-1} bằng 0. Trường hợp hai: Nhóm chứa mốt là nhóm cuối cùng của bảng, khi đó không có nhóm liền sau nên ta quy ước tần số n_{m+1} bằng 0. Ngoài ra, nếu trong bảng có hai nhóm có tần số lớn nhất bằng nhau và không liền kề, mẫu số liệu đó được gọi là mẫu đa mốt.",
      "startTime": 24.26,
      "endTime": 54.7,
      "duration": 30.43
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: TÍNH MỐT THỜI GIAN LÀM BÀI THI",
      "subtitle": "BÀI 9 • MỤC 3 • THỰC HÀNH CÔNG THỨC MỐT CƠ BẢN",
      "mascotMode": "thinking",
      "mascotTip": "Tìm nhóm có tần số lớn nhất: $n_m = 15$ thuộc nhóm $[30; 35)$. Tính $d_1 = 15 - 6 = 9$ và $d_2 = 15 - 14 = 1$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Thời gian hoàn thành bài thi (phút) của <b>$n = 40$</b> học sinh:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Thời gian (phút)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[25; 30)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[30; 35)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[35; 40)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[40; 45)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-amber-300\">Số HS ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono font-bold text-amber-400\">15</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">14</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">5</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Xác định nhóm chứa mốt và tính giá trị mốt $M_o$ của mẫu số liệu.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Thống kê thời gian hoàn thành bài kiểm tra 45 phút của 40 học sinh thu được bảng sau: từ 25 đến 30 phút có 6 bạn; từ 30 đến 35 phút có 15 bạn; từ 35 đến 40 phút có 14 bạn; và từ 40 đến 45 phút có 5 bạn. Hãy tìm nhóm chứa mốt và tính giá trị mốt M_o. Các em có 15 giây suy nghĩ.",
      "startTime": 54.7,
      "endTime": 85.15,
      "duration": 30.46
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: TÍNH $M_o$ CHÍNH XÁC",
      "subtitle": "BÀI 9 • MỤC 3 • KẾT QUẢ ĐẸP 34,5 PHÚT",
      "mascotMode": "celebrating",
      "mascotTip": "$M_o = 30 + \\frac{9}{9 + 1} \\cdot 5 = 30 + 4,5 = 34,5$ phút!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"text-xs font-bold text-amber-300 uppercase mb-2\">Các bước giải chi tiết:</div>\n\n    <div class=\"space-y-2 text-xs text-slate-300\">\n      <p><b>Bước 1: Nhóm chứa mốt:</b> Tần số lớn nhất là $n_m = 15$ nên nhóm chứa mốt là <b>$[30; 35)$</b>.</p>\n      <p><b>Bước 2: Xác định thông số:</b> $u_m = 30$; $h = 5$; $n_{m-1} = 6$; $n_{m+1} = 14$.</p>\n      <p><b>Bước 3: Tính các độ chênh lệch:</b> $d_1 = 15 - 6 = 9$; $d_2 = 15 - 14 = 1$.</p>\n      <p><b>Bước 4: Áp dụng công thức:</b></p>\n      <div class=\"text-sm font-mono text-amber-200 text-center font-bold bg-slate-900 p-2 rounded\">\n        $$M_o = 30 + \\frac{9}{9 + 1} \\cdot 5 = 30 + \\frac{9}{10} \\cdot 5 = 30 + 4,5 = 34,5\\text{ (phút)}$$\n      </div>\n      <p class=\"text-slate-300 text-center\">\n        <b>Ý nghĩa thực tế:</b> Đa số học sinh hoàn thành bài kiểm tra ở mốc thời gian quanh <b>34,5 phút</b>.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta thấy tần số lớn nhất là 15 thuộc về nhóm thứ hai từ 30 đến 35 phút. Do đó nhóm chứa mốt là nửa khoảng từ 30 đến 35. Các thông số: đầu mút trái u_m bằng 30; độ dài h bằng 5; tần số n_m bằng 15; tần số nhóm trước n_{m-1} bằng 6; tần số nhóm sau n_{m+1} bằng 14. Ta tính độ chênh lệch d_1 bằng 15 trừ 6 bằng 9; d_2 bằng 15 trừ 14 bằng 1. Áp dụng công thức, M_o bằng 30 cộng với phân số 9 chia cho 9 cộng 1, nhân với 5. Kết quả bằng 30 cộng 4,5 bằng 34,5 phút.",
      "startTime": 85.15,
      "endTime": 142.44,
      "duration": 57.29
    },
    {
      "sceneIndex": 5,
      "title": "5. BẢNG SO SÁNH 4 SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM",
      "subtitle": "BÀI 9 • MỤC 3 • CHIẾN LƯỢC LỰA CHỌN ĐẠI LƯỢNG THỐNG KÊ",
      "mascotMode": "explaining",
      "mascotTip": "Dữ liệu đối xứng: dùng $\\overline{x}$; Có ngoại lai lệch: dùng $M_e$; Sản xuất quy mô: dùng $M_o$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"overflow-x-auto\">\n    <table class=\"w-full text-xs text-left border-collapse\">\n      <thead>\n        <tr class=\"bg-slate-700 text-slate-200\">\n          <th class=\"p-2 border border-slate-600\">Đặc trưng</th>\n          <th class=\"p-2 border border-slate-600\">Khi nào nên sử dụng?</th>\n          <th class=\"p-2 border border-slate-600\">Ưu điểm & Nhược điểm</th>\n        </tr>\n      </thead>\n      <tbody class=\"text-slate-300\">\n        <tr class=\"bg-slate-800/80\">\n          <td class=\"p-2 border border-slate-600 font-bold text-emerald-300\">Trung bình $\\overline{x}$</td>\n          <td class=\"p-2 border border-slate-600\">Dữ liệu phân bố tương đối đối xứng, không có ngoại lai.</td>\n          <td class=\"p-2 border border-slate-600\">Dùng toàn bộ dữ liệu nhưng rất nhạy cảm với giá trị cực đoan.</td>\n        </tr>\n        <tr class=\"bg-slate-800/50\">\n          <td class=\"p-2 border border-slate-600 font-bold text-cyan-300\">Trung vị $M_e$</td>\n          <td class=\"p-2 border border-slate-600\">Dữ liệu bị lệch hoặc có ngoại lai (thu nhập, giá nhà).</td>\n          <td class=\"p-2 border border-slate-600\">Không bị méo mó bởi ngoại lai, phản ánh chuẩn xác số đông.</td>\n        </tr>\n        <tr class=\"bg-slate-800/80\">\n          <td class=\"p-2 border border-slate-600 font-bold text-purple-300\">Tứ phân vị $Q_k$</td>\n          <td class=\"p-2 border border-slate-600\">Phân đoạn dữ liệu thành 4 phần bằng nhau (top 25%, 50%, 75%).</td>\n          <td class=\"p-2 border border-slate-600\">Kết hợp với $\\Delta_Q$ đánh giá độ phân tán 50% trung tâm.</td>\n        </tr>\n        <tr class=\"bg-slate-800/50\">\n          <td class=\"p-2 border border-slate-600 font-bold text-amber-300\">Mốt $M_o$</td>\n          <td class=\"p-2 border border-slate-600\">Tìm giá trị có tần suất cao nhất (sản xuất, bán lẻ).</td>\n          <td class=\"p-2 border border-slate-600\">Dễ xác định, phản ánh xu hướng số đông ưa chuộng nhất.</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n",
      "narration": "Để trở thành một chuyên gia phân tích dữ liệu giỏi, các em cần biết khi nào nên sử dụng số đặc trưng nào. Số trung bình x_ngang đại diện tốt nhất khi dữ liệu phân bố đối xứng và không có giá trị bất thường. Trung vị M_e là lựa chọn hàng đầu khi dữ liệu bị lệch hoặc có các giá trị ngoại lai cực lớn hay cực nhỏ như phân tích thu nhập hay giá bất động sản. Tứ phân vị giúp đánh giá thêm 50% trung tâm và độ phân tán qua delta Q. Còn Mốt M_o lại cực kì hữu ích trong kinh doanh thương mại khi cần tìm mặt hàng bán chạy nhất.",
      "startTime": 142.44,
      "endTime": 182.88,
      "duration": 40.44
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÍNH MỐT CỠ ÁO NAM GIỚI BÁN LẺ",
      "subtitle": "BÀI 9 • MỤC 3 • TỐI ƯU NHẬP HÀNG TRONG KINH DOANH",
      "mascotMode": "thinking",
      "mascotTip": "Tần số lớn nhất là 45 thuộc nhóm $[92; 96)$. $d_1 = 45 - 30 = 15; d_2 = 45 - 25 = 20$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Vòng ngực (cm) của <b>$n = 120$</b> khách hàng nam:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Vòng ngực (cm)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[84; 88)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[88; 92)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[92; 96)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[96; 100)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[100; 104)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-amber-300\">Số khách</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">30</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono font-bold text-amber-400\">45</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">25</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính mốt $M_o$ và đưa ra tư vấn kinh doanh cho chủ cửa hàng.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2 là bài toán bán lẻ thời trang nam. Khảo sát số đo vòng ngực của 120 nam giới đến mua áo tại một cửa hàng thu được bảng số liệu: từ 84 đến 88 cm có 10 người; từ 88 đến 92 cm có 30 người; từ 92 đến 96 cm có 45 người; từ 96 đến 100 cm có 25 người; và từ 100 đến 104 cm có 10 người. Hãy tính mốt của mẫu số liệu và cho biết cửa hàng nên nhập nhiều áo cỡ tương ứng với kích thước nào nhất. Các em có 15 giây.",
      "startTime": 182.88,
      "endTime": 228.05,
      "duration": 45.17
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: TÍNH $M_o$ VÒNG NGỰC KHÁCH HÀNG",
      "subtitle": "BÀI 9 • MỤC 3 • TƯ VẤN QUY HOẠCH KHO HÀNG CHÍNH XÁC",
      "mascotMode": "celebrating",
      "mascotTip": "$M_o = 92 + \\frac{15}{15 + 20} \\cdot 4 = 92 + \\frac{60}{35} \\approx 93,71$ cm (Size L)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"text-xs font-bold text-amber-300 uppercase mb-2\">Lời giải chi tiết:</div>\n\n    <div class=\"space-y-2 text-xs text-slate-300\">\n      <p><b>Nhóm chứa mốt:</b> $[92; 96)$ vì có tần số lớn nhất $n_m = 45$.</p>\n      <p><b>Các tham số:</b> $u_m = 92$; $h = 4$; $d_1 = 45 - 30 = 15$; $d_2 = 45 - 25 = 20$.</p>\n      <div class=\"text-sm font-mono text-amber-200 text-center font-bold bg-slate-900 p-2 rounded\">\n        $$M_o = 92 + \\frac{15}{15 + 20} \\cdot 4 = 92 + \\frac{15}{35} \\cdot 4 \\approx 93,71\\text{ (cm)}$$\n      </div>\n      <p class=\"text-slate-300 text-center\">\n        <b>Tư vấn kinh doanh:</b> Cửa hàng nên nhập nhiều áo có kích cỡ vòng ngực quanh <b>93,71 cm</b> (tương đương Size L), vì đây là nhóm khách hàng có nhu cầu mua lớn nhất.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Tần số lớn nhất là 45 thuộc nhóm từ 92 đến 96 cm. Đầu mút trái u_m bằng 92; độ dài h bằng 4. Nhóm liền trước có tần số 30 nên d_1 bằng 45 trừ 30 bằng 15. Nhóm liền sau có tần số 25 nên d_2 bằng 45 trừ 25 bằng 20. Thay vào công thức, M_o bằng 92 cộng với phân số 15 chia cho 15 cộng 20, nhân 4. Ta được 92 cộng 60 chia 35, xấp xỉ 93,71 cm. Vòng ngực này tương ứng với áo cỡ L, do đó cửa hàng nên ưu tiên nhập nhiều áo size L nhất.",
      "startTime": 228.05,
      "endTime": 280.37,
      "duration": 52.32
    },
    {
      "sceneIndex": 8,
      "title": "8. PHÂN TÍCH TÁC ĐỘNG CỦA GIÁ TRỊ NGOẠI LAI (OUTLIERS)",
      "subtitle": "BÀI 9 • MỤC 3 • VÌ SAO SỐ TRUNG BÌNH CÓ THỂ ĐÁNH LỪA BẠN?",
      "mascotMode": "explaining",
      "mascotTip": "Chỉ cần 1 giám đốc lương 200 triệu sẽ kéo lương trung bình của 49 công nhân lên gấp đôi!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-950/70 to-slate-900/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded uppercase\">Thực tế cuộc sống</span>\n      <h3 class=\"text-base font-bold text-rose-200\">Bẫy Số Trung Bình Khi Có Ngoại Lai Cực Đoan</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs mt-2\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-rose-400\">\n        <b class=\"text-rose-300\">⚠️ Số trung bình $\\overline{x} \\approx 13,8$ triệu</b>\n        <p class=\"text-slate-300 mt-1\">Bị giám đốc 200 triệu kéo lệch, tạo cảm giác 'ai cũng có lương cao' nhưng thực tế 98% công nhân không đạt được!</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">✅ Trung vị $M_e \\approx 9,0$ triệu</b>\n        <p class=\"text-slate-300 mt-1\">Không bị ảnh hưởng bởi 200 triệu, phản ánh chính xác 50% người lao động có mức lương quanh 9 triệu đồng.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tại sao trong thực tế có những bản báo cáo ghi nhận thu nhập trung bình của công ty rất cao nhưng người lao động lại cảm thấy không đúng? Đó là vì hiện tượng ngoại lai. Giả sử một công ty có 50 người, gồm 49 công nhân lương từ 8 đến 10 triệu và một giám đốc lương 200 triệu đồng. Khi tính trung bình, tổng lương bị kéo vọt lên khiến số trung bình đạt gần 14 triệu đồng, cao hơn hẳn thu nhập thực của 98% nhân viên. Trong trường hợp này, Trung vị hoặc Mốt mới là con số phản ánh chân thực cuộc sống của người lao động.",
      "startTime": 280.37,
      "endTime": 320.3,
      "duration": 39.94
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: LỰA CHỌN SỐ ĐẶC TRƯNG THÍCH HỢP",
      "subtitle": "BÀI 9 • MỤC 3 • BÀI TOÁN TƯ DUY PHÂN TÍCH DỮ LIỆU",
      "mascotMode": "thinking",
      "mascotTip": "Xem xét phân bố dữ liệu: nhóm cuối [50; 250) có khoảng biến thiên quá rộng và tách biệt!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng cao</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Khảo sát tiền thưởng Tết (triệu đồng) của <b>$n = 50$</b> nhân viên:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Thưởng Tết (triệu)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[5; 10)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[10; 15)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[15; 20)$</th>\n            <th class=\"p-1.5 border border-slate-600 bg-rose-950/60 text-rose-300 font-bold\">$[50; 250)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-rose-300\">Số người</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">25</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono font-bold text-rose-400\">3</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-rose-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính $\\overline{x}$ và $M_e$, so sánh và giải thích số đặc trưng nào phản ánh đúng mặt bằng chung hơn.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-rose-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là câu hỏi đánh giá tư duy thống kê. Bảng khảo sát tiền thưởng Tết của 50 nhân viên một công ty công nghệ: từ 5 đến 10 triệu có 10 người; từ 10 đến 15 triệu có 25 người; từ 15 đến 20 triệu có 12 người; và nhóm đặc biệt từ 50 đến 250 triệu dành cho ban lãnh đạo có 3 người. Hãy phân tích tại sao nên dùng Trung vị thay vì Số trung bình để đại diện cho mức thưởng Tết của đa số nhân viên. Các em có 30 giây.",
      "startTime": 320.3,
      "endTime": 355.85,
      "duration": 35.54
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: ĐỐI CHIẾU $\\overline{x}$ VÀ $M_e$",
      "subtitle": "BÀI 9 • MỤC 3 • CHỨNG MINH KHOA HỌC ƯU THẾ CỦA TRUNG VỊ",
      "mascotMode": "celebrating",
      "mascotTip": "$\\overline{x} \\approx 20,95$ triệu nhưng $M_e = 13,0$ triệu. Rõ ràng 94% nhân viên chỉ thưởng dưới 20 triệu!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-rose-500/40\">\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900 p-2.5 rounded-lg border border-rose-500/30\">\n        <b class=\"text-rose-300\">1. Số trung bình $\\overline{x}$</b>\n        <p class=\"font-mono text-xs text-slate-300 mt-1\">\n          $S = 10(7,5) + 25(12,5) + 12(17,5) + 3(150)$<br/>\n          $S = 75 + 312,5 + 210 + 450 = 1047,5$.\n        </p>\n        <div class=\"font-bold text-rose-200 text-center font-mono mt-1\">\n          $$\\overline{x} = \\frac{1047,5}{50} = 20,95\\text{ (triệu)}$$\n        </div>\n      </div>\n\n      <div class=\"bg-slate-900 p-2.5 rounded-lg border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">2. Trung vị $M_e$ ($\\frac{n}{2} = 25$)</b>\n        <p class=\"font-mono text-xs text-slate-300 mt-1\">\n          Nhóm $[10; 15)$: $u_m=10, C=10, n_m=25, h=5$.\n        </p>\n        <div class=\"font-bold text-emerald-200 text-center font-mono mt-1\">\n          $$M_e = 10 + \\frac{25 - 10}{25} \\cdot 5 = 13,0\\text{ (triệu)}$$\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-slate-900/90 p-2.5 rounded-lg border border-cyan-500/30 text-xs\">\n      <span class=\"text-cyan-300 font-bold\">Kết luận phân tích: </span>\n      <span class=\"text-slate-300\">Có tới <b>$47/50$ ($94\\%$)</b> nhân viên có tiền thưởng dưới 20 triệu. Vì vậy, số trung bình $\\overline{x} = 20,95$ triệu bị kéo lệch quá đà bởi 3 sếp lãnh đạo. Con số <b>Trung vị $M_e = 13,0$ triệu</b> là đại diện chuẩn xác và trung thực nhất!</span>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết thời gian. Ta tính số trung bình: Các giá trị đại diện là 7,5; 12,5; 17,5 và 150. Tổng tích bằng 10 nhân 7,5 cộng 25 nhân 12,5 cộng 12 nhân 17,5 cộng 3 nhân 150 bằng 1047,5. Chia cho 50, ta được số trung bình bằng 20,95 triệu đồng. Bây giờ tính trung vị: n chia 2 bằng 25. Nhóm chứa trung vị là từ 10 đến 15 triệu. M_e bằng 10 cộng với 25 trừ 10 chia 25 nhân 5, ra đúng 13,0 triệu đồng. Nhìn vào bảng, có tới 47 trên 50 nhân viên nhận thưởng dưới 20 triệu, do đó con số trung bình 20,95 triệu là không đại diện tốt. Trung vị 13 triệu đồng phản ánh chân thực hơn rất nhiều.",
      "startTime": 355.85,
      "endTime": 418.06,
      "duration": 62.21
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: QUẢN LÝ SIÊU THỊ BỐ TRÍ THU NGÂN",
      "subtitle": "BÀI 9 • MỤC 3 • BÀI TOÁN GIỜ CAO ĐIỂM BẰNG MỐT",
      "mascotMode": "thinking",
      "mascotTip": "Khung giờ có đông khách nhất tương ứng với Mốt $M_o$ để mở thêm quầy thu ngân!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng thực tế</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Số lượng khách mua sắm tại siêu thị theo khung giờ chiều tối:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Khung giờ</th>\n            <th class=\"p-1.5 border border-slate-600\">$[16; 17)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[17; 18)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[18; 19)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[19; 20)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[20; 21)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-amber-300\">Lượng khách</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">40</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">95</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono font-bold text-amber-400\">180</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">130</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">55</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính mốt thời gian cao điểm $M_o$ (chuyển đổi ra giờ và phút).\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán vận hành chuỗi siêu thị. Thống kê lượng khách hàng vào mua sắm trong các khung giờ chiều tối: từ 16 đến 17 giờ có 40 khách; từ 17 đến 18 giờ có 95 khách; từ 18 đến 19 giờ có 180 khách; từ 19 đến 20 giờ có 130 khách; và từ 20 đến 21 giờ có 55 khách. Hãy tính mốt khung giờ đông khách nhất để giám đốc siêu thị tăng cường nhân viên thu ngân. Các em có 30 giây.",
      "startTime": 418.06,
      "endTime": 454.61,
      "duration": 36.55
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT TOÀN BỘ BÀI 9",
      "subtitle": "BÀI 9 • MỤC 3 • HOÀN THÀNH XUẤT SẮC CÁC SỐ ĐẶC TRƯNG",
      "mascotMode": "celebrating",
      "mascotTip": "$M_o = 18 + \\frac{85}{85 + 50} \\cdot 1 = 18 + \\frac{85}{135} \\approx 18,63$ giờ (18 giờ 38 phút)!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải chi tiết Ví dụ 4:</div>\n    <div class=\"space-y-1 text-xs text-slate-300 font-mono\">\n      <p>• Nhóm mốt: $[18; 19)$ có $n_m = 180$. $u_m = 18, h = 1$.</p>\n      <p>• $d_1 = 180 - 95 = 85$; $d_2 = 180 - 130 = 50$.</p>\n      <div class=\"text-sm font-mono text-amber-200 text-center font-bold bg-slate-900 p-2 rounded\">\n        $$M_o = 18 + \\frac{85}{85 + 50} \\cdot 1 = 18 + \\frac{85}{135} \\approx 18,63\\text{ (giờ)} \\approx 18\\text{ giờ } 38\\text{ phút}$$\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>⭐</span> <span>TỔNG KẾT TOÀN DIỆN BÀI 9 CẦN NHỚ</span>\n      </div>\n      <ul class=\"text-slate-300 space-y-1\">\n        <li>1. <b>Số trung bình $\\overline{x}$ :</b> Đại diện xu thế chung, tính bằng $\\frac{1}{n}\\sum m_i c_i$.</li>\n        <li>2. <b>Trung vị $M_e$ :</b> Chia đôi dữ liệu tại $\\frac{n}{2}$, không bị kéo lệch bởi ngoại lai.</li>\n        <li>3. <b>Tứ phân vị $Q_1, Q_2, Q_3$ :</b> Phân vị 4 phần tại $\\frac{n}{4}, \\frac{n}{2}, \\frac{3n}{4}$; $\\Delta_Q = Q_3 - Q_1$.</li>\n        <li>4. <b>Mốt $M_o$ :</b> Đại diện cho giá trị phổ biến nhất, tính tại nhóm có $n_m = \\max$.</li>\n      </ul>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã tìm ra đáp án chính xác. Nhóm có lượng khách đông nhất là từ 18 đến 19 giờ với 180 khách. Ta có u_m bằng 18; độ dài h bằng 1 giờ. Nhóm trước có 95 khách nên d_1 bằng 180 trừ 95 bằng 85. Nhóm sau có 130 khách nên d_2 bằng 180 trừ 130 bằng 50. Thay vào công thức, M_o bằng 18 cộng với phân số 85 chia cho 85 cộng 50, nhân 1. Ta được 18 cộng 85 chia 135, xấp xỉ 18,63 giờ, tức khoảng 18 giờ 38 phút. Giám đốc siêu thị nên bố trí tối đa nhân viên thu ngân từ 18 giờ đến 19 giờ 15 phút. Như vậy chúng ta đã hoàn thành xuất sắc toàn bộ kiến thức Bài 9.",
      "startTime": 454.61,
      "endTime": 516.98,
      "duration": 62.38
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_bai9_muc3 = root.G11_CHAPTER3_DATA.g11_bai9_muc3;

  root.G11_CHAPTER3_DATA.g11_ontap_c3_muc1 = {
  "lessonId": "toan11_ontap_c3",
  "lessonTitle": "Bài tập cuối chương III",
  "sectionId": "g11_ontap_c3_muc1",
  "sectionTitle": "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy toàn bộ Chương 3",
  "audio": "/audio/g11_ontap_c3_muc1.mp3",
  "audioSrc": "./audio/g11_ontap_c3_muc1.mp3",
  "audio_src": "./audio/g11_ontap_c3_muc1.mp3",
  "title": "Mục 1: Hệ thống hóa lý thuyết & Sơ đồ tư duy toàn bộ Chương 3",
  "owl_tip": "Ôn tập toàn diện: Bảng đối chiếu 4 số đặc trưng x_bar, M_e, Q_1, Q_3, M_o và khoảng tứ phân vị Delta_Q!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. TỔNG QUAN CẤU TRÚC CHƯƠNG 3 TOÁN 11 KNTT",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. BẢNG ĐỐI CHIẾU CÁC CÔNG THỨC NỀN TẢNG BÀI 8",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐÁNH GIÁ ĐỘ PHÂN TÁN QUA $\\Delta_Q$",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
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
  "totalDuration": 477.34,
  "formattedDuration": "07:57",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. TỔNG QUAN CẤU TRÚC CHƯƠNG 3 TOÁN 11 KNTT",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • HỆ THỐNG KIẾN THỨC CỐT LÕI",
      "mascotMode": "pointer",
      "mascotTip": "Chương 3 gồm 2 trụ cột: Kỹ thuật ghép nhóm mẫu số liệu và 4 nhóm số đặc trưng đo xu thế trung tâm!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-emerald-900/60 to-teal-900/40 p-4 rounded-xl border border-emerald-500/30\">\n    <div class=\"flex items-center gap-3 mb-2\">\n      <span class=\"px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider\">Hệ thống hóa</span>\n      <h3 class=\"text-xl font-black text-emerald-200\">Sơ Đồ Cấu Trúc Toàn Diện Chương III</h3>\n    </div>\n    <p class=\"text-sm text-slate-300 leading-relaxed\">\n      Chương III gồm <b>2 trụ cột kiến thức</b> gắn liền chặt chẽ với nhau:\n    </p>\n  </div>\n\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-emerald-400 shadow-md\">\n      <h4 class=\"font-bold text-emerald-300 text-sm mb-1\">📘 Trụ cột 1: Bài 8 - Mẫu ghép nhóm</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • Khái niệm nhóm nửa khoảng $[a_i; a_{i+1})$.<br/>\n        • Giá trị đại diện $c_i = \\frac{a_i + a_{i+1}}{2}$ & độ dài $h$.<br/>\n        • 4 bước ghép nhóm từ số liệu thô.<br/>\n        • Bảng tần số tích lũy $cf_i = \\sum_{j=1}^i m_j$.\n      </p>\n    </div>\n    <div class=\"bg-slate-800/80 p-3.5 rounded-lg border-l-4 border-teal-400 shadow-md\">\n      <h4 class=\"font-bold text-teal-300 text-sm mb-1\">📙 Trụ cột 2: Bài 9 - Số đặc trưng</h4>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • <b>Số trung bình $\\overline{x}$:</b> $\\frac{1}{n}\\sum m_i c_i$.<br/>\n        • <b>Trung vị $M_e$:</b> Chia đôi tại mốc $\\frac{n}{2}$.<br/>\n        • <b>Tứ phân vị $Q_1, Q_2, Q_3$:</b> Mốc $\\frac{n}{4}, \\frac{n}{2}, \\frac{3n}{4}$.<br/>\n        • <b>Mốt $M_o$:</b> Giá trị tại nhóm có $n_m = \\max$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với tiết Ôn tập toàn diện Chương 3 môn Toán lớp 11: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm. Chương này đóng vai trò cầu nối quan trọng giữa kiến thức thống kê mô tả ở lớp 10 với các bài toán kiểm định giả thuyết và xác suất thống kê ở bậc đại học. Cấu trúc toàn bộ chương gồm hai phần chính: Bài 8 trang bị cho chúng ta phương pháp ghép nhóm dữ liệu thô và xây dựng bảng tần số tích lũy; Bài 9 hướng dẫn tính toán và ứng dụng thực tế của 4 số đặc trưng: Số trung bình, Trung vị, Tứ phân vị và Mốt.",
      "startTime": 0.0,
      "endTime": 41.59,
      "duration": 41.59
    },
    {
      "sceneIndex": 2,
      "title": "2. BẢNG ĐỐI CHIẾU CÁC CÔNG THỨC NỀN TẢNG BÀI 8",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • CÔNG THỨC GHÉP NHÓM & TÍCH LŨY",
      "mascotMode": "explaining",
      "mascotTip": "Luôn nhớ quy tắc cộng dồn tần số chéo: $cf_i = cf_{i-1} + m_i$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-4 rounded-xl border border-cyan-500/40 text-center shadow-lg\">\n    <div class=\"text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1\">Bảng công thức nền tảng Bài 8</div>\n    <div class=\"grid grid-cols-3 gap-3 text-xs mt-3\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300 text-sm\">Giá trị đại diện</b>\n        <div class=\"font-mono text-emerald-200 font-bold text-sm my-1\">\n          $$c_i = \\frac{a_i + a_{i+1}}{2}$$\n        </div>\n        <p class=\"text-slate-400\">Trung bình cộng 2 đầu mút</p>\n      </div>\n\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300 text-sm\">Độ dài nhóm</b>\n        <div class=\"font-mono text-cyan-200 font-bold text-sm my-1\">\n          $$h_i = a_{i+1} - a_i$$\n        </div>\n        <p class=\"text-slate-400\">Đầu mút phải trừ đầu mút trái</p>\n      </div>\n\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-teal-400\">\n        <b class=\"text-teal-300 text-sm\">Tần số tích lũy</b>\n        <div class=\"font-mono text-teal-200 font-bold text-sm my-1\">\n          $$cf_i = \\sum_{j=1}^i m_j$$\n        </div>\n        <p class=\"text-slate-400\">Cộng dồn tần số đến nhóm $i$</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Trước hết, chúng ta cùng điểm lại các công thức nền tảng của Bài 8. Mỗi nhóm ghép có dạng nửa khoảng a_i đến a_{i+1}, độ dài nhóm h bằng đầu mút phải trừ đầu mút trái. Giá trị đại diện c_i là trung bình cộng hai đầu mút. Tần số tích lũy cf_i được tính bằng tổng tần số từ nhóm 1 đến nhóm i. Đây chính là chìa khóa then chốt để xác định vị trí của Trung vị và các Tứ phân vị ở Bài 9.",
      "startTime": 41.59,
      "endTime": 68.02,
      "duration": 26.42
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: ĐỌC BẢNG & TÍNH ĐẠI DIỆN SIÊU NHANH",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • KHỞI ĐỘNG PHẢN XẠ NHANH 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Lấy $(a + b)/2$ cho từng nhóm, tính nhanh trong đầu không cần bấm máy tính!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Khởi động phản xạ</span>\n    </div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Nhóm</th>\n            <th class=\"p-1.5 border border-slate-600\">$[10; 20)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[20; 30)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[30; 40)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[40; 50)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-emerald-300\">Tần số ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">4</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">5</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tìm cỡ mẫu $n$ và tính các giá trị đại diện $c_1, c_2, c_3, c_4$.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Chúng ta cùng bắt đầu phần thực hành với Ví dụ 1. Cho bảng tần số ghép nhóm gồm 4 nhóm: [10; 20) có tần số 4; [20; 30) có tần số 10; [30; 40) có tần số 6; và [40; 50) có tần số 5. Hãy tính cỡ mẫu n và xác định dãy giá trị đại diện c_1, c_2, c_3, c_4. Các em có 15 giây.",
      "startTime": 68.02,
      "endTime": 95.35,
      "duration": 27.34
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: ĐÁP SỐ CHUẨN XÁC",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • CỠ MẪU VÀ GIÁ TRỊ ĐẠI DIỆN",
      "mascotMode": "celebrating",
      "mascotTip": "Cỡ mẫu $n = 25$; Dãy giá trị đại diện là 15; 25; 35; 45!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-2\">Đáp án chi tiết:</div>\n    <div class=\"space-y-2 text-xs text-slate-300 font-mono\">\n      <p>• <b>Cỡ mẫu:</b> $n = 4 + 10 + 6 + 5 = 25$.</p>\n      <p>• <b>Giá trị đại diện:</b></p>\n      <div class=\"grid grid-cols-4 gap-2 text-center text-cyan-200 font-bold bg-slate-900 p-2 rounded\">\n        <div>$c_1 = 15$</div>\n        <div>$c_2 = 25$</div>\n        <div>$c_3 = 35$</div>\n        <div>$c_4 = 45$</div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Cỡ mẫu n là tổng của tất cả tần số: 4 cộng 10 cộng 6 cộng 5 bằng 25. Giá trị đại diện của từng nhóm: c_1 bằng 10 cộng 20 chia 2 bằng 15; c_2 bằng 20 cộng 30 chia 2 bằng 25; c_3 bằng 30 cộng 40 chia 2 bằng 35; và c_4 bằng 40 cộng 50 chia 2 bằng 45. Kết quả rất chính xác.",
      "startTime": 95.35,
      "endTime": 128.93,
      "duration": 33.58
    },
    {
      "sceneIndex": 5,
      "title": "5. BẢNG TỔNG HỢP CÔNG THỨC $\\overline{x}$ VÀ $M_e$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • SO SÁNH HAI CÔNG THỨC TRUNG TÂM",
      "mascotMode": "explaining",
      "mascotTip": "Nhớ: $\\overline{x}$ tính theo tổng tích $m_i c_i$, còn $M_e$ tính theo vị trí tích lũy $n/2$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n      <div class=\"font-bold text-emerald-300 text-sm mb-1\">1. Số trung bình $\\overline{x}$</div>\n      <div class=\"font-mono text-emerald-200 font-bold bg-slate-900 p-2 rounded text-center my-2\">\n        $$\\overline{x} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i$$\n      </div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $c_i$: Giá trị đại diện.<br/>\n        • $m_i$: Tần số nhóm.<br/>\n        • $n$: Cỡ mẫu toàn thể.\n      </p>\n    </div>\n\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40\">\n      <div class=\"font-bold text-cyan-300 text-sm mb-1\">2. Trung vị $M_e$</div>\n      <div class=\"font-mono text-cyan-200 font-bold bg-slate-900 p-2 rounded text-center my-2\">\n        $$M_e = u_m + \\frac{\\frac{n}{2} - C}{n_m} \\cdot h$$\n      </div>\n      <p class=\"text-slate-300 leading-relaxed\">\n        • $[u_m; u_{m+1})$ có $cf \\ge \\frac{n}{2}$.<br/>\n        • $C = cf_{m-1}$ (tích lũy trước).<br/>\n        • $n_m$: Tần số nhóm chứa $M_e$.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Bây giờ, chúng ta đối chiếu hai đại lượng đo xu thế trung tâm phổ biến nhất là Số trung bình x_ngang và Trung vị M_e. Số trung bình bằng 1 phần n nhân tổng của các tích m_i nhân c_i, đại diện cho mức bình quân toán học. Trong khi đó, Trung vị M_e được xác định bằng công thức nội suy tuyến tính tại vị trí n chia 2, chia đôi mẫu số liệu và hoàn toàn không bị ảnh hưởng bởi các giá trị ngoại lai.",
      "startTime": 128.93,
      "endTime": 163.92,
      "duration": 34.99
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: TÍNH NHANH $\\overline{x}$ VÀ $M_e$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • LUYỆN TẬP PHẢN XẠ ĐỒNG THỜI 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "$n = 20$. Tìm $n/2 = 10$. Tính nhanh tổng tích và áp dụng công thức!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Nhóm</th>\n            <th class=\"p-1.5 border border-slate-600\">$[10; 20)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[20; 30)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[30; 40)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-cyan-300\">Tần số ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">4</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">6</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-cyan-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính số trung bình $\\overline{x}$ và trung vị $M_e$ của mẫu số liệu.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Cho bảng số liệu gồm 3 nhóm: [10; 20) có 4 giá trị; [20; 30) có 10 giá trị; và [30; 40) có 6 giá trị. Cỡ mẫu n bằng 20. Hãy tính số trung bình x_ngang và trung vị M_e. Các em có 15 giây.",
      "startTime": 163.92,
      "endTime": 184.87,
      "duration": 20.95
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: TÍNH $\\overline{x}$ VÀ $M_e$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • SỰ TRÙNG HỢP KỲ DIỆU GIỮA HAI ĐẠI LƯỢNG",
      "mascotMode": "celebrating",
      "mascotTip": "Cả $\\overline{x}$ và $M_e$ đều bằng đúng 26,0 tuyệt đẹp!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/40\">\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900 p-2.5 rounded-lg border border-emerald-500/30\">\n        <b class=\"text-emerald-300\">1. Số trung bình $\\overline{x}$</b>\n        <p class=\"font-mono text-xs text-slate-300 mt-1\">\n          $S = 4(15) + 10(25) + 6(35) = 520$.\n        </p>\n        <div class=\"font-bold text-emerald-200 text-center font-mono mt-1\">\n          $$\\overline{x} = \\frac{520}{20} = 26,0$$\n        </div>\n      </div>\n\n      <div class=\"bg-slate-900 p-2.5 rounded-lg border border-cyan-500/30\">\n        <b class=\"text-cyan-300\">2. Trung vị $M_e$ ($\\frac{n}{2} = 10$)</b>\n        <p class=\"font-mono text-xs text-slate-300 mt-1\">\n          Nhóm $[20; 30)$: $u_m=20, C=4, n_m=10, h=10$.\n        </p>\n        <div class=\"font-bold text-cyan-200 text-center font-mono mt-1\">\n          $$M_e = 20 + \\frac{10 - 4}{10} \\cdot 10 = 26,0$$\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta có các giá trị đại diện là 15, 25 và 35. Tính số trung bình: tổng tích bằng 4 nhân 15 cộng 10 nhân 25 cộng 6 nhân 35 bằng 60 cộng 250 cộng 210 bằng 520. Chia cho cỡ mẫu 20, ta được x_ngang bằng 26,0. Bây giờ tính trung vị: n chia 2 bằng 10. Tần số tích lũy: cf_1 bằng 4; cf_2 bằng 14. Nhóm chứa trung vị là từ 20 đến 30. M_e bằng 20 cộng với phân số 10 trừ 4 chia 10 nhân 10. Ta được 20 cộng 6 bằng đúng 26,0. Khi dữ liệu có tính phân bố cân đối, số trung bình và trung vị sẽ rất gần nhau hoặc trùng nhau.",
      "startTime": 184.87,
      "endTime": 243.02,
      "duration": 58.15
    },
    {
      "sceneIndex": 8,
      "title": "8. BẢNG TỔNG HỢP CÔNG THỨC $Q_1, Q_3, \\Delta_Q$ VÀ $M_o$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • BỘ CÔNG CỤ PHÂN VỊ VÀ ĐỘ PHỔ BIẾN",
      "mascotMode": "explaining",
      "mascotTip": "$Q_1$ ở vị trí $n/4$; $Q_3$ ở vị trí $3n/4$; Mốt $M_o$ tại nhóm tần số cực đại!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"grid grid-cols-2 gap-3 text-xs\">\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40\">\n      <div class=\"font-bold text-purple-300 text-sm mb-1\">Tứ phân vị & $\\Delta_Q$</div>\n      <p class=\"text-slate-300 font-mono text-xs leading-relaxed\">\n        $Q_1 = u_p + \\frac{\\frac{n}{4} - C_{p-1}}{n_p} \\cdot h$<br/>\n        $Q_3 = u_q + \\frac{\\frac{3n}{4} - C_{q-1}}{n_q} \\cdot h$<br/>\n        <b class=\"text-amber-300\">$\\Delta_Q = Q_3 - Q_1$</b> (Khoảng tứ phân vị)\n      </p>\n    </div>\n\n    <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n      <div class=\"font-bold text-amber-300 text-sm mb-1\">Mốt $M_o$</div>\n      <p class=\"text-slate-300 font-mono text-xs leading-relaxed\">\n        Nhóm chứa mốt có $n_m = \\max$<br/>\n        $d_1 = n_m - n_{m-1}$ ; $d_2 = n_m - n_{m+1}$<br/>\n        <b class=\"text-amber-200\">$$M_o = u_m + \\frac{d_1}{d_1 + d_2} \\cdot h$$</b>\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Tiếp theo là bảng tổng hợp công thức của Tứ phân vị và Mốt. Tứ phân vị thứ nhất Q_1 tính theo mốc n chia 4; Tứ phân vị thứ ba Q_3 tính theo mốc 3n chia 4; Khoảng tứ phân vị delta Q bằng Q_3 trừ Q_1, phản ánh độ phân tán của 50% số liệu ở giữa. Mốt M_o tính theo độ chênh lệch d_1 và d_2 tại nhóm có tần số lớn nhất, là công cụ không thể thiếu trong kinh doanh và dự báo thị trường.",
      "startTime": 243.02,
      "endTime": 281.28,
      "duration": 38.26
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TÍNH $Q_1, Q_3, \\Delta_Q$ VÀ $M_o$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • BÀI TOÁN TỔNG HỢP 4 NHÓM DỮ LIỆU",
      "mascotMode": "thinking",
      "mascotTip": "$n = 40$. $n/4 = 10; 3n/4 = 30$. Nhóm mốt là [10; 20) có tần số lớn nhất bằng 16!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Nhóm</th>\n            <th class=\"p-1.5 border border-slate-600\">$[0; 10)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[10; 20)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[20; 30)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[30; 40)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-purple-300\">Tần số ($m_i$)</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">8</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono font-bold text-amber-300\">16</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">4</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-purple-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính $Q_1, Q_3$, khoảng tứ phân vị $\\Delta_Q$ và Mốt $M_o$ của mẫu số liệu.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-purple-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài tập tổng hợp rèn luyện trọn bộ các số đặc trưng. Cho bảng số liệu gồm 4 nhóm: [0; 10) có 8; [10; 20) có 16; [20; 30) có 12; và [30; 40) có 4. Cỡ mẫu n bằng 40. Hãy tính Q_1, Q_3, khoảng tứ phân vị delta Q và Mốt M_o. Các em có 30 giây.",
      "startTime": 281.28,
      "endTime": 316.18,
      "duration": 34.9
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: TÍNH $Q_1, Q_3, \\Delta_Q$ VÀ $M_o$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • LỜI GIẢI CHUẨN XÁC 100% ZERO ERROR",
      "mascotMode": "celebrating",
      "mascotTip": "$Q_1 = 11,25; Q_3 = 25,0; \\Delta_Q = 13,75; M_o \\approx 16,67$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40\">\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900 p-2.5 rounded-lg border border-purple-500/30\">\n        <b class=\"text-purple-300\">1. Tứ phân vị & $\\Delta_Q$</b>\n        <p class=\"font-mono text-xs text-slate-300 mt-1\">\n          • $Q_1 = 10 + \\frac{10 - 8}{16} \\cdot 10 = 11,25$.<br/>\n          • $Q_3 = 20 + \\frac{30 - 24}{12} \\cdot 10 = 25,00$.<br/>\n          • <b class=\"text-amber-300\">$\\Delta_Q = 25,00 - 11,25 = 13,75$</b>.\n        </p>\n      </div>\n\n      <div class=\"bg-slate-900 p-2.5 rounded-lg border border-amber-500/30\">\n        <b class=\"text-amber-300\">2. Mốt $M_o$ ($n_m = 16$)</b>\n        <p class=\"font-mono text-xs text-slate-300 mt-1\">\n          • Nhóm $[10; 20)$: $d_1 = 8, d_2 = 4, h = 10$.<br/>\n          • $M_o = 10 + \\frac{8}{8 + 4} \\cdot 10 = 10 + \\frac{20}{3} \\approx 16,67$.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết 30 giây. Cỡ mẫu 40 nên n chia 4 bằng 10; 3n chia 4 bằng 30. Tần số tích lũy: nhóm 1 là 8; nhóm 2 là 24; nhóm 3 là 36; nhóm 4 là 40. Nhóm chứa Q_1 là [10; 20): Q_1 bằng 10 cộng 10 trừ 8 chia 16 nhân 10, bằng 10 cộng 1,25 bằng 11,25. Nhóm chứa Q_3 là [20; 30): Q_3 bằng 20 cộng 30 trừ 24 chia 12 nhân 10, bằng 20 cộng 5 bằng 25,0. Khoảng tứ phân vị delta Q bằng 25 trừ 11,25 bằng 13,75. Nhóm chứa mốt là [10; 20) vì có tần số lớn nhất bằng 16. Ta có d_1 bằng 16 trừ 8 bằng 8; d_2 bằng 16 trừ 12 bằng 4. M_o bằng 10 cộng 8 chia 12 nhân 10, xấp xỉ 16,67.",
      "startTime": 316.18,
      "endTime": 394.97,
      "duration": 78.79
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐÁNH GIÁ ĐỘ PHÂN TÁN QUA $\\Delta_Q$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • SO SÁNH ĐỘ ỔN ĐỊNH CỦA HAI MẪU",
      "mascotMode": "thinking",
      "mascotTip": "Mẫu nào có khoảng tứ phân vị $\\Delta_Q$ nhỏ hơn thì dữ liệu tập trung và ổn định hơn!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Tư duy phân tích dữ liệu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      Kết quả thi môn Toán của hai lớp 11C và 11D có các thông số thống kê sau:\n    </p>\n\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30 text-center\">\n        <b class=\"text-cyan-300\">Lớp 11C</b>\n        <p class=\"text-slate-300 font-mono mt-1\">$\\overline{x}_C = 7,5$ điểm<br/><b class=\"text-emerald-300\">$\\Delta_{Q_C} = 1,2$ điểm</b></p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border border-purple-500/30 text-center\">\n        <b class=\"text-purple-300\">Lớp 11D</b>\n        <p class=\"text-slate-300 font-mono mt-1\">$\\overline{x}_D = 7,5$ điểm<br/><b class=\"text-rose-300\">$\\Delta_{Q_D} = 3,5$ điểm</b></p>\n      </div>\n    </div>\n\n    <p class=\"text-xs text-indigo-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Dựa vào $\\Delta_Q$, so sánh mức độ đồng đều về học lực của học sinh hai lớp.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian suy nghĩ:</span>\n    </div>\n    <span class=\"text-base font-black text-indigo-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán so sánh độ đồng đều của kết quả học tập giữa hai lớp 11C và 11D. Sau khi kiểm tra chung một đề, điểm số của hai lớp có cùng số trung bình là 7,5 điểm. Tuy nhiên, lớp 11C có khoảng tứ phân vị delta Q bằng 1,2 điểm, trong khi lớp 11D có khoảng tứ phân vị delta Q bằng 3,5 điểm. Em hãy cho biết lớp nào có lực học đồng đều và ổn định hơn? Các em có 30 giây.",
      "startTime": 394.97,
      "endTime": 429.5,
      "duration": 34.54
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 1",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 1 • Ý NGHĨA QUAN TRỌNG CỦA $\\Delta_Q$",
      "mascotMode": "celebrating",
      "mascotTip": "Lớp 11C có $\\Delta_Q = 1,2 < 3,5$ nên học lực đồng đều hơn hẳn lớp 11D!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Kết luận phân tích:</div>\n    <p class=\"text-xs text-slate-300 leading-relaxed\">\n      • Vì $\\Delta_{Q_C} = 1,2 < \\Delta_{Q_D} = 3,5$ nên độ phân tán điểm số của học sinh lớp 11C nhỏ hơn.<br/>\n      • <b>Kết luận:</b> Học sinh <b>Lớp 11C</b> có học lực đồng đều và ổn định hơn so với Lớp 11D.\n    </p>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>⭐</span> <span>BÀI HỌC CỐT LÕI MỤC 1</span>\n      </div>\n      <p class=\"text-slate-300\">\n        Không chỉ nhìn vào số trung bình $\\overline{x}$, nhà thống kê luôn cần quan sát <b>khoảng tứ phân vị $\\Delta_Q$</b> để đánh giá chính xác độ rủi ro, sự biến thiên và tính ổn định của hệ thống!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em đã đưa ra nhận định chính xác. Mặc dù cả hai lớp đều có cùng số trung bình 7,5 điểm nhưng khoảng tứ phân vị của lớp 11C chỉ là 1,2 điểm, nhỏ hơn rất nhiều so với khoảng tứ phân vị 3,5 điểm của lớp 11D. Điều này chứng minh rằng 50% học sinh ở khoảng giữa của lớp 11C có điểm số rất sát nhau, thể hiện học lực đồng đều và chất lượng giảng dạy ổn định. Ngược lại, lớp 11D có độ phân tán lớn, có sự chênh lệch học lực khá xa giữa các nhóm học sinh. Như vậy chúng ta đã khép lại Mục 1. Hãy cùng bước sang Mục 2 để rèn luyện 4 dạng toán thực tế trọng tâm.",
      "startTime": 429.5,
      "endTime": 477.34,
      "duration": 47.83
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_ontap_c3_muc1 = root.G11_CHAPTER3_DATA.g11_ontap_c3_muc1;

  root.G11_CHAPTER3_DATA.g11_ontap_c3_muc2 = {
  "lessonId": "toan11_ontap_c3",
  "lessonTitle": "Bài tập cuối chương III",
  "sectionId": "g11_ontap_c3_muc2",
  "sectionTitle": "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Bài toán thực tế thống kê",
  "audio": "/audio/g11_ontap_c3_muc2.mp3",
  "audioSrc": "./audio/g11_ontap_c3_muc2.mp3",
  "audio_src": "./audio/g11_ontap_c3_muc2.mp3",
  "title": "Mục 2: Rèn luyện 4 dạng toán trọng tâm & Bài toán thực tế thống kê",
  "owl_tip": "4 dạng toán cốt lõi: Chuyển mẫu thô sang ghép nhóm, Tứ phân vị xếp học bổng, Mốt quy hoạch kho hàng, So sánh độ biến thiên!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. BẢN ĐỒ 4 DẠNG TOÁN TRỌNG TÂM CHƯƠNG 3",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. DẠNG 1: CHUYỂN MẪU THÔ SANG GHÉP NHÓM & TÍNH $\\overline{x}$",
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
      "partTitle": "Phần 4: 11. VÍ DỤ 4: ĐÁNH GIÁ ĐỘ BỀN HAI DÒNG LỐP XE",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
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
  "totalDuration": 482.16,
  "formattedDuration": "08:02",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. BẢN ĐỒ 4 DẠNG TOÁN TRỌNG TÂM CHƯƠNG 3",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • ĐỊNH HƯỚNG ÔN THI ĐẠT ĐIỂM TỐI ĐA",
      "mascotMode": "pointer",
      "mascotTip": "Nắm vững 4 dạng toán: Ghép nhóm số liệu thô; Tứ phân vị; Bài toán Mốt kinh doanh; So sánh mẫu!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-teal-900/60 to-emerald-900/40 p-4 rounded-xl border border-teal-500/30\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-teal-500/20 text-teal-300 font-bold text-xs rounded uppercase\">Chiến lược thực chiến</span>\n      <h3 class=\"text-lg font-bold text-teal-200\">Bản Đồ 4 Dạng Toán Trọng Tâm Ôn Thi</h3>\n    </div>\n    <div class=\"grid grid-cols-2 gap-3 text-xs mt-3\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Dạng 1: Chuyển đổi thô sang nhóm</b>\n        <p class=\"text-slate-300 mt-1\">Đếm tần số, chọn độ dài $h$, lập bảng và tính nhanh $\\overline{x}$.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-cyan-400\">\n        <b class=\"text-cyan-300\">Dạng 2: Phân vị & Xếp hạng</b>\n        <p class=\"text-slate-300 mt-1\">Tính $M_e, Q_1, Q_3$ để phân loại top 25%, 50%, 75% thành tích.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Dạng 3: Mốt & Bài toán kinh doanh</b>\n        <p class=\"text-slate-300 mt-1\">Tìm giá trị phổ biến nhất để nhập hàng, tối ưu giờ phục vụ.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-l-4 border-purple-400\">\n        <b class=\"text-purple-300\">Dạng 4: So sánh & Đánh giá rủi ro</b>\n        <p class=\"text-slate-300 mt-1\">So sánh $\\overline{x}$ và $\\Delta_Q$ giữa hai nhà máy, hai phương án.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 2: Rèn luyện 4 dạng toán trọng tâm và bài toán thực tế thống kê. Trong các đề kiểm tra định kì và đề thi tốt nghiệp THPT, các câu hỏi về mẫu số liệu ghép nhóm luôn tập trung vào 4 dạng toán chính: Dạng 1: Chuyển mẫu số liệu thô sang ghép nhóm và tính số trung bình; Dạng 2: Tính bộ ba tứ phân vị và phân loại chất lượng đối tượng; Dạng 3: Tính mốt để tối ưu hóa quy mô kinh doanh thương mại; Dạng 4: So sánh, đối chiếu và phân tích độ ổn định giữa hai tập dữ liệu độc lập.",
      "startTime": 0.0,
      "endTime": 40.27,
      "duration": 40.27
    },
    {
      "sceneIndex": 2,
      "title": "2. DẠNG 1: CHUYỂN MẪU THÔ SANG GHÉP NHÓM & TÍNH $\\overline{x}$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KỸ THUẬT PHÂN TỔ DỮ LIỆU ĐỀ THI",
      "mascotMode": "explaining",
      "mascotTip": "Đếm cẩn thận từng giá trị thuộc nửa khoảng $[a; b)$ không để sót số liệu nào!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"font-bold text-emerald-300 text-sm mb-2\">Quy trình 3 bước chuẩn hóa Dạng 1</div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-center\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">1. Đếm tần số</b>\n        <p class=\"text-slate-300 mt-1\">Phân loại các số liệu thuộc nửa khoảng $[a_i; a_{i+1})$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">2. Lập bảng nhóm</b>\n        <p class=\"text-slate-300 mt-1\">Ghi tần số $m_i$ và tính giá trị đại diện $c_i$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-teal-400\">\n        <b class=\"text-teal-300\">3. Tính $\\overline{x}$</b>\n        <p class=\"text-slate-300 mt-1\">Áp dụng công thức $\\overline{x} = \\frac{1}{n}\\sum m_i c_i$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ở Dạng 1, đề bài thường cung cấp một dãy số liệu thô gồm từ 20 đến 30 giá trị chưa được sắp xếp. Để giải dạng toán này, bước một: tìm giá trị nhỏ nhất và lớn nhất. Bước hai: gom các số liệu vào các nhóm theo độ dài quy định. Bước ba: đếm chính xác tần số m_i của từng nhóm, kiểm tra tổng các m_i phải bằng đúng cỡ mẫu n. Bước bốn: tìm giá trị đại diện c_i và tính số trung bình x_ngang.",
      "startTime": 40.27,
      "endTime": 67.25,
      "duration": 26.98
    },
    {
      "sceneIndex": 3,
      "title": "3. VÍ DỤ 1: CHUYỂN 20 SỐ LIỆU ĐIỂM THI SANG GHÉP NHÓM",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • THỰC CHIẾN PHÂN TỔ DỮ LIỆU",
      "mascotMode": "thinking",
      "mascotTip": "Chia làm 3 nhóm: $[4; 6)$, $[6; 8)$, $[8; 10]$. Đếm tần số từng nhóm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 1 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <div class=\"bg-slate-900 p-2 rounded text-xs text-slate-200 font-mono mb-2\">\n      4,5 ; 5,0 ; 5,2 ; 5,5 ; 5,8 ; 6,0 ; 6,2 ; 6,5 ; 6,5 ; 6,8 ; 7,0 ; 7,2 ; 7,5 ; 7,8 ; 8,0 ; 8,2 ; 8,5 ; 8,8 ; 9,0 ; 9,5\n    </div>\n    <p class=\"text-xs text-amber-200 font-semibold\">\n      <b>Yêu cầu:</b> Lập bảng tần số ghép 3 nhóm $[4; 6)$, $[6; 8)$, $[8; 10]$ và tính số trung bình $\\overline{x}$.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 1: Điểm thi môn Toán của 20 học sinh gồm các giá trị: 4,5; 5,0; 5,2; 5,5; 5,8; 6,0; 6,2; 6,5; 6,5; 6,8; 7,0; 7,2; 7,5; 7,8; 8,0; 8,2; 8,5; 8,8; 9,0; và 9,5. Hãy gom mẫu số liệu trên vào 3 nhóm: từ 4 đến 6; từ 6 đến 8; và từ 8 đến 10. Sau đó tính số trung bình của mẫu ghép nhóm. Các em có 15 giây.",
      "startTime": 67.25,
      "endTime": 115.68,
      "duration": 48.43
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI VÍ DỤ 1: BẢNG GHÉP NHÓM VÀ TÍNH $\\overline{x}$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT QUẢ ĐẸP $\\overline{x} = 7,1$ ĐIỂM",
      "mascotMode": "celebrating",
      "mascotTip": "Tần số 3 nhóm là 5; 9; 6. Tổng tích là 142 chia 20 ra 7,1 điểm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1 border border-slate-600\">Nhóm điểm</th>\n            <th class=\"p-1 border border-slate-600\">$[4; 6)$</th>\n            <th class=\"p-1 border border-slate-600\">$[6; 8)$</th>\n            <th class=\"p-1 border border-slate-600\">$[8; 10]$</th>\n            <th class=\"p-1 border border-slate-600 bg-emerald-950 text-emerald-300 font-bold\">Tổng</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-cyan-300\">Đại diện $c_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">5</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">7</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">9</td>\n            <td class=\"p-1 border border-slate-600\">—</td>\n          </tr>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-emerald-300\">Tần số $m_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">5</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">9</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1 border border-slate-600 font-mono font-bold text-emerald-300\">20</td>\n          </tr>\n          <tr class=\"bg-slate-900 text-amber-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-amber-300\">Tích $m_i c_i$</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">25</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">63</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">54</td>\n            <td class=\"p-1 border border-slate-600 font-mono font-bold text-amber-200\">142</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"mt-2 text-center text-xs text-slate-200 font-mono\">\n      $$\\overline{x} = \\frac{142}{20} = 7,1\\text{ (điểm)}$$\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Ta đếm: nhóm từ 4 đến 6 có 5 giá trị với đại diện là 5,0; nhóm từ 6 đến 8 có 9 giá trị với đại diện là 7,0; nhóm từ 8 đến 10 có 6 giá trị với đại diện là 9,0. Tổng tần số là 5 cộng 9 cộng 6 bằng 20, khớp đúng cỡ mẫu. Tổng tích m_i nhân c_i bằng 5 nhân 5 cộng 9 nhân 7 cộng 6 nhân 9 bằng 25 cộng 63 cộng 54 bằng 142. Lấy 142 chia cho 20, ta được điểm trung bình bằng 7,1 điểm.",
      "startTime": 115.68,
      "endTime": 158.54,
      "duration": 42.86
    },
    {
      "sceneIndex": 5,
      "title": "5. DẠNG 2: BÀI TOÁN XẾP HẠNG & PHÂN LOẠI ĐỐI TƯỢNG",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • ỨNG DỤNG TỨ PHÂN VỊ TRONG QUẢN LÝ",
      "mascotMode": "explaining",
      "mascotTip": "Top 25% cao nhất bắt đầu từ $Q_3$; 50% ở giữa nằm từ $Q_1$ đến $Q_3$!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-purple-900/60 to-indigo-900/40 p-3.5 rounded-xl border border-purple-500/30 text-xs\">\n    <div class=\"font-bold text-purple-300 text-sm mb-2\">Bản đồ phân loại dữ liệu bằng Tứ phân vị</div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-center\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-rose-400\">\n        <b class=\"text-rose-300\">Nhóm 25% thấp nhất</b>\n        <p class=\"text-slate-300 mt-1 font-mono\">Giá trị $< Q_1$</p>\n        <span class=\"text-slate-400 text-xs\">Cần hỗ trợ, bồi dưỡng</span>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">50% ở trung tâm</b>\n        <p class=\"text-slate-300 mt-1 font-mono\">$Q_1 \\le$ Giá trị $\\le Q_3$</p>\n        <span class=\"text-slate-400 text-xs\">Độ rộng bằng $\\Delta_Q$</span>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">Top 25% xuất sắc</b>\n        <p class=\"text-slate-300 mt-1 font-mono\">Giá trị $\\ge Q_3$</p>\n        <span class=\"text-slate-400 text-xs\">Khen thưởng, cấp học bổng</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ở Dạng 2, các bài toán thường yêu cầu tìm ngưỡng phân loại học bổng, mức thưởng hoặc tiêu chuẩn tuyển sinh. Để tìm ngưỡng cho top 25% xuất sắc nhất, ta tính tứ phân vị thứ ba Q_3. Để tìm ngưỡng cho 50% trung tâm, ta tính khoảng từ Q_1 đến Q_3. Còn nếu bài toán yêu cầu tìm nhóm 25% có kết quả thấp nhất cần bồi dưỡng thêm thì đó chính là các cá thể có giá trị nhỏ hơn Q_1.",
      "startTime": 158.54,
      "endTime": 193.97,
      "duration": 35.42
    },
    {
      "sceneIndex": 6,
      "title": "6. VÍ DỤ 2: XÉT HỌC BỔNG BẰNG TỨ PHÂN VỊ $Q_3$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • BÀI TOÁN XÁC ĐỊNH NGƯỠNG ĐIỂM",
      "mascotMode": "thinking",
      "mascotTip": "$n = 80 \\Rightarrow 3n/4 = 60$. Tìm nhóm chứa $Q_3$ và tính giá trị chính xác!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-purple-500/20 text-purple-300 text-xs font-bold rounded\">Ví dụ 2 (15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Khoảng điểm</th>\n            <th class=\"p-1.5 border border-slate-600\">$[5; 6)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[6; 7)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[7; 8)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[8; 9)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-purple-300\">Số thí sinh</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">25</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">30</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">15</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-purple-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính tứ phân vị thứ ba $Q_3$ để xác định điểm sàn nhận học bổng (top 25%).\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-purple-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 2: Thống kê điểm thi môn tiếng Anh của 80 thí sinh: nhóm từ 5 đến 6 có 10 bạn; nhóm từ 6 đến 7 có 25 bạn; nhóm từ 7 đến 8 có 30 bạn; và nhóm từ 8 đến 9 có 15 bạn. Hội đồng thi quyết định trao học bổng cho 25% thí sinh có điểm cao nhất. Hãy xác định ngưỡng điểm tối thiểu để được nhận học bổng. Các em có 15 giây.",
      "startTime": 193.97,
      "endTime": 223.51,
      "duration": 29.54
    },
    {
      "sceneIndex": 7,
      "title": "7. LỜI GIẢI VÍ DỤ 2: ĐIỂM SÀN HỌC BỔNG $Q_3$",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT QUẢ $Q_3 = 7,83$ ĐIỂM",
      "mascotMode": "celebrating",
      "mascotTip": "$Q_3 = 7 + \\frac{60 - 35}{30} \\cdot 1 = 7 + \\frac{25}{30} \\approx 7,83$ điểm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-purple-500/40\">\n    <div class=\"space-y-1 text-xs text-slate-300 font-mono\">\n      <p>• Vị trí top 25%: $\\frac{3n}{4} = \\frac{3 \\cdot 80}{4} = 60$.</p>\n      <p>• $cf_1 = 10; cf_2 = 35 < 60 \\le cf_3 = 65 \\Rightarrow$ Nhóm chứa $Q_3$ là $[7; 8)$.</p>\n      <div class=\"text-sm font-bold text-purple-200 text-center bg-slate-900 p-2 rounded\">\n        $$Q_3 = 7 + \\frac{60 - 35}{30} \\cdot 1 = 7 + \\frac{25}{30} = 7 + \\frac{5}{6} \\approx 7,83\\text{ (điểm)}$$\n      </div>\n      <p class=\"text-emerald-300 text-center font-sans font-semibold mt-1\">\n        <b>Kết luận:</b> Thí sinh có điểm thi từ <b>7,83 điểm</b> trở lên sẽ được trao học bổng.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Cỡ mẫu 80 nên vị trí 3n chia 4 bằng 60. Tần số tích lũy: nhóm 1 là 10; nhóm 2 là 35; nhóm 3 là 65. Vì 35 nhỏ hơn 60 và 60 nhỏ hơn hoặc bằng 65 nên nhóm chứa Q_3 là nhóm từ 7 đến 8 điểm. Đầu mút trái u_q bằng 7; độ dài h bằng 1; tần số tích lũy trước C bằng 35; tần số nhóm n_q bằng 30. Thay vào công thức, Q_3 bằng 7 cộng với phân số 60 trừ 35 chia 30, nhân 1. Ta được 7 cộng 25 phần 30, xấp xỉ 7,83 điểm. Vậy thí sinh đạt từ 7,83 điểm trở lên sẽ được nhận học bổng.",
      "startTime": 223.51,
      "endTime": 279.53,
      "duration": 56.02
    },
    {
      "sceneIndex": 8,
      "title": "8. DẠNG 3: BÀI TOÁN KINH DOANH & TỐI ƯU BẰNG MỐT",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • ỨNG DỤNG THỰC TẾ TRONG THƯƠNG MẠI",
      "mascotMode": "explaining",
      "mascotTip": "Mốt $M_o$ chỉ ra giá trị được ưa chuộng nhiều nhất, giảm thiểu tồn kho và tăng doanh thu!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-amber-500/40 text-xs\">\n    <div class=\"font-bold text-amber-300 text-sm mb-2\">Ý nghĩa kinh tế của Mốt Mẫu Ghép Nhóm</div>\n    <div class=\"grid grid-cols-2 gap-3\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-amber-400\">\n        <b class=\"text-amber-300\">Tối ưu hàng tồn kho</b>\n        <p class=\"text-slate-300 mt-1\">Tránh nhập tràn lan các kích cỡ ít người mua; tập trung 60-70% vốn vào khoảng kích cỡ quanh $M_o$.</p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-l-4 border-emerald-400\">\n        <b class=\"text-emerald-300\">Bố trí nguồn lực</b>\n        <p class=\"text-slate-300 mt-1\">Tập trung nhân lực, máy móc và dịch vụ chăm sóc vào đúng khung giờ cao điểm do $M_o$ xác định.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Ở Dạng 3, bài toán ứng dụng Mốt trong thương mại đóng vai trò vô cùng thiết thực. Đối với các nhà sản xuất giày dép, may mặc hay kinh doanh bán lẻ, sản xuất mẫu mã kích thước nào nhiều nhất để không bị tồn kho ứ đọng vốn luôn là bài toán sống còn. Khi đó, Mốt M_o sẽ chỉ ra chính xác kích cỡ tối ưu cần sản xuất với sản lượng lớn nhất.",
      "startTime": 279.53,
      "endTime": 300.24,
      "duration": 20.71
    },
    {
      "sceneIndex": 9,
      "title": "9. VÍ DỤ 3: TƯ VẤN NHẬP KHO GIÀY THỂ THAO",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • BÀI TOÁN KINH DOANH THỰC TẾ 30 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Tần số lớn nhất là 60 thuộc nhóm $[250; 260)$. Tính $d_1 = 60 - 35 = 25; d_2 = 60 - 40 = 20$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Ví dụ 3 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng thực tế</span>\n    </div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1.5 border border-slate-600\">Chiều dài (mm)</th>\n            <th class=\"p-1.5 border border-slate-600\">$[230; 240)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[240; 250)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[250; 260)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[260; 270)$</th>\n            <th class=\"p-1.5 border border-slate-600\">$[270; 280)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1.5 border border-slate-600 font-semibold text-amber-300\">Số khách</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">10</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">35</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono font-bold text-amber-400\">60</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">40</td>\n            <td class=\"p-1.5 border border-slate-600 font-mono\">15</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính mốt $M_o$ và tư vấn cỡ giày bán chạy nhất cho chủ shop.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 3 là bài toán quản trị kho hàng của một cửa hàng giày thể thao. Khảo sát chiều dài bàn chân của 160 khách hàng nam: từ 230 đến 240 mm có 10 người; từ 240 đến 250 mm có 35 người; từ 250 đến 260 mm có 60 người; từ 260 đến 270 mm có 40 người; và từ 270 đến 280 mm có 15 người. Hãy tính mốt chiều dài bàn chân và cho biết cửa hàng nên nhập nhiều giày tương ứng với chiều dài chân nào nhất. Các em có 30 giây.",
      "startTime": 300.24,
      "endTime": 347.59,
      "duration": 47.35
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI VÍ DỤ 3: TƯ VẤN QUY HOẠCH KHO GIÀY",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT QUẢ $M_o \\approx 255,56$ MM (SIZE 41)",
      "mascotMode": "celebrating",
      "mascotTip": "$M_o = 250 + \\frac{25}{25 + 20} \\cdot 10 = 250 + \\frac{250}{45} \\approx 255,56$ mm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/40\">\n    <div class=\"space-y-1 text-xs text-slate-300 font-mono\">\n      <p>• Nhóm mốt: $[250; 260)$ có $n_m = 60$. $u_m = 250, h = 10$.</p>\n      <p>• $d_1 = 60 - 35 = 25$; $d_2 = 60 - 40 = 20$.</p>\n      <div class=\"text-sm font-bold text-amber-200 text-center bg-slate-900 p-2 rounded\">\n        $$M_o = 250 + \\frac{25}{25 + 20} \\cdot 10 = 250 + \\frac{250}{45} \\approx 255,56\\text{ (mm)}$$\n      </div>\n      <p class=\"text-emerald-300 text-center font-sans font-semibold mt-1\">\n        <b>Tư vấn kinh doanh:</b> Chiều dài bàn chân phổ biến nhất là <b>255,56 mm</b> (tương đương Size 41). Shop nên tập trung nhập nhiều giày Size 41 nhất.\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Tần số lớn nhất là 60 thuộc nhóm từ 250 đến 260 mm. Ta có đầu mút trái u_m bằng 250; độ dài h bằng 10. Độ chênh lệch tần số: d_1 bằng 60 trừ 35 bằng 25; d_2 bằng 60 trừ 40 bằng 20. Áp dụng công thức, M_o bằng 250 cộng với phân số 25 chia cho 25 cộng 20, nhân 10. Ta được 250 cộng 250 chia 45, xấp xỉ 255,56 mm. Kích thước này tương ứng với cỡ giày 41 tiêu chuẩn. Cửa hàng nên ưu tiên nhập nhiều giày size 41 nhất.",
      "startTime": 347.59,
      "endTime": 401.66,
      "duration": 54.07
    },
    {
      "sceneIndex": 11,
      "title": "11. VÍ DỤ 4: ĐÁNH GIÁ ĐỘ BỀN HAI DÒNG LỐP XE",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • BÀI TOÁN KIỂM ĐỊNH CHẤT LƯỢNG",
      "mascotMode": "thinking",
      "mascotTip": "Dòng lốp nào có tuổi thọ trung bình cao hơn và khoảng tứ phân vị hẹp hơn sẽ chất lượng hơn!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-cyan-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded\">Ví dụ 4 (30s)</span>\n      <span class=\"text-xs text-slate-400\">Tư duy kỹ thuật công nghiệp</span>\n    </div>\n\n    <div class=\"grid grid-cols-2 gap-3 text-xs\">\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border border-cyan-500/30 text-center\">\n        <b class=\"text-cyan-300\">Dòng lốp xe X</b>\n        <p class=\"text-slate-300 font-mono mt-1\">\n          $\\overline{x}_X = 65\\text{ nghìn km}$<br/>\n          <b class=\"text-emerald-300\">$\\Delta_{Q_X} = 4\\text{ nghìn km}$</b>\n        </p>\n      </div>\n      <div class=\"bg-slate-900/80 p-2.5 rounded-lg border border-purple-500/30 text-center\">\n        <b class=\"text-purple-300\">Dòng lốp xe Y</b>\n        <p class=\"text-slate-300 font-mono mt-1\">\n          $\\overline{x}_Y = 62\\text{ nghìn km}$<br/>\n          <b class=\"text-rose-300\">$\\Delta_{Q_Y} = 10\\text{ nghìn km}$</b>\n        </p>\n      </div>\n    </div>\n\n    <p class=\"text-xs text-cyan-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Đưa ra đánh giá toàn diện về tuổi thọ trung bình và độ tin cậy của hai dòng lốp xe.\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian phân tích:</span>\n    </div>\n    <span class=\"text-base font-black text-cyan-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Ví dụ 4 là bài toán kiểm định công nghiệp của hãng sản xuất xe hơi. Thử nghiệm độ bền của hai dòng lốp xe X và Y thu được kết quả: Dòng X có quãng đường chạy trung bình là 65 nghìn km với khoảng tứ phân vị delta Q là 4 nghìn km. Dòng Y có quãng đường chạy trung bình là 62 nghìn km với khoảng tứ phân vị delta Q là 10 nghìn km. Hãy phân tích và đưa ra lời khuyên chọn dòng lốp xe nào cho khách hàng. Các em có 30 giây.",
      "startTime": 401.66,
      "endTime": 435.53,
      "duration": 33.86
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI VÍ DỤ 4 & TỔNG KẾT MỤC 2",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 2 • KẾT LUẬN TOÀN DIỆN VỀ ĐỘ BỀN VÀ ĐỘ TIN CẬY",
      "mascotMode": "celebrating",
      "mascotTip": "Dòng X vừa có tuổi thọ trung bình cao hơn vừa có chất lượng ổn định tin cậy hơn hẳn!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Đánh giá kỹ thuật đa chiều:</div>\n    <ul class=\"text-xs text-slate-300 space-y-1\">\n      <li>• <b>Tuổi thọ trung bình:</b> $\\overline{x}_X = 65 > \\overline{x}_Y = 62$ (Dòng X bền hơn 3.000 km).</li>\n      <li>• <b>Độ ổn định & rủi ro:</b> $\\Delta_{Q_X} = 4 < \\Delta_{Q_Y} = 10$ (Dòng X ổn định gấp 2,5 lần dòng Y).</li>\n      <li>• <b>Khuyến nghị tiêu dùng:</b> Chọn <b>Dòng lốp xe X</b> vì vừa bền hơn vừa an toàn tin cậy hơn!</li>\n    </ul>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>⭐</span> <span>TỔNG KẾT MỤC 2 CẦN NHỚ</span>\n      </div>\n      <p class=\"text-slate-300\">\n        4 dạng toán trọng tâm đã được làm chủ trọn vẹn: Ghép nhóm số liệu thô; Phân vị xét học bổng; Mốt quy hoạch kho hàng; và So sánh đối chiếu hai mẫu dữ liệu!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em. Phân tích số liệu cho thấy hai điểm vượt trội của Dòng lốp X. Thứ nhất, tuổi thọ trung bình của dòng X là 65 nghìn km, cao hơn 62 nghìn km của dòng Y. Thứ hai, khoảng tứ phân vị của dòng X chỉ là 4 nghìn km, nhỏ hơn rất nhiều so với 10 nghìn km của dòng Y. Điều này chứng minh rằng chất lượng sản xuất dòng X cực kì đồng đều và ổn định, ít có nguy cơ bị hỏng hóc bất thường. Lời khuyên tối ưu là nên chọn Dòng lốp X. Chúng ta đã kết thúc Mục 2 và sẵn sàng bước sang Mục 3 để chinh phục Kỹ năng Casio và Đề tổng ôn chuẩn Bộ GD&ĐT.",
      "startTime": 435.53,
      "endTime": 482.16,
      "duration": 46.63
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_ontap_c3_muc2 = root.G11_CHAPTER3_DATA.g11_ontap_c3_muc2;

  root.G11_CHAPTER3_DATA.g11_ontap_c3_muc3 = {
  "lessonId": "toan11_ontap_c3",
  "lessonTitle": "Bài tập cuối chương III",
  "sectionId": "g11_ontap_c3_muc3",
  "sectionTitle": "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn chuẩn Bộ GD&ĐT",
  "audio": "/audio/g11_ontap_c3_muc3.mp3",
  "audioSrc": "./audio/g11_ontap_c3_muc3.mp3",
  "audio_src": "./audio/g11_ontap_c3_muc3.mp3",
  "title": "Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng Casio 580 & Đề tổng ôn chuẩn Bộ GD&ĐT",
  "owl_tip": "Bấm máy tính Casio 580 Menu 6 1-Variable siêu tốc; Bộ đề chuẩn 3 phần: Trắc nghiệm 4 lựa chọn, Đúng/Sai, Trả lời ngắn!",
  "parts": [
    {
      "partNumber": 1,
      "partTitle": "Phần 1: 1. BỘ 3 BẪY KINH ĐIỂN CẦN TRÁNH TRONG PHÒNG THI",
      "scenes": [
        1
      ]
    },
    {
      "partNumber": 2,
      "partTitle": "Phần 2: 2. KỸ NĂNG CASIO FX-580VN X: MENU 6 1-VARIABLE",
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
      "partTitle": "Phần 4: 11. ĐỀ TỔNG ÔN - PHẦN III: CÂU HỎI TRẢ LỜI NGẮN",
      "scenes": [
        11
      ]
    },
    {
      "partNumber": 5,
      "partTitle": "Phần 5: 12. LỜI GIẢI PHẦN III & BẾ MẠC TOÀN KHÓA CHƯƠNG 3",
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
  "totalDuration": 520.92,
  "formattedDuration": "08:40",
  "scenes": [
    {
      "sceneIndex": 1,
      "title": "1. BỘ 3 BẪY KINH ĐIỂN CẦN TRÁNH TRONG PHÒNG THI",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • BẢO TOÀN ĐIỂM SỐ TUYỆT ĐỐI",
      "mascotMode": "pointer",
      "mascotTip": "Đừng để mất điểm oan vì: Nhầm tần số tích lũy; Quên nhân độ dài h; Nhầm nhóm chứa mốt!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-gradient-to-r from-rose-950/70 to-slate-900/90 p-3.5 rounded-xl border border-rose-500/40 text-xs\">\n    <div class=\"flex items-center gap-2 mb-2\">\n      <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold text-xs rounded uppercase\">Cảnh báo phòng thi</span>\n      <h3 class=\"text-base font-bold text-rose-200\">3 Cạm Bẫy Trắc Nghiệm Thường Gặp Nhất</h3>\n    </div>\n    <div class=\"grid grid-cols-3 gap-2.5 text-xs mt-2\">\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-rose-400\">\n        <b class=\"text-rose-300\">Bẫy 1: Nhầm lẫn $C$</b>\n        <p class=\"text-slate-300 mt-1\">Lấy $C$ là tần số tích lũy của <i>nhóm hiện tại</i> thay vì <b>nhóm đứng trước</b> ($cf_{m-1}$).</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-amber-400\">\n        <b class=\"text-amber-300\">Bẫy 2: Quên nhân độ dài $h$</b>\n        <p class=\"text-slate-300 mt-1\">Nhiều bạn chỉ tính $u_m + \\frac{\\dots}{\\dots}$ mà quên nhân với độ dài khoảng $h = u_{m+1} - u_m$.</p>\n      </div>\n      <div class=\"bg-slate-800/80 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">Bẫy 3: Nhầm mốt với tần số</b>\n        <p class=\"text-slate-300 mt-1\">Khoanh đáp án là tần số lớn nhất $n_{\\max}$ thay vì giá trị nội suy $M_o$!</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chào mừng các em đến với Mục 3: Cảnh báo bẫy trắc nghiệm, Kỹ năng bấm máy tính Casio fx-580VN X và Đề tổng ôn chuẩn cấu trúc của Bộ GD&ĐT. Trong các kì thi trắc nghiệm, các câu hỏi về Chương 3 tuy không quá đánh đố về mặt ý tưởng nhưng lại có rất nhiều bẫy số học tinh vi khiến học sinh mất điểm đáng tiếc. Hãy cùng thầy điểm mặt ba cái bẫy kinh điển nhất.",
      "startTime": 0.0,
      "endTime": 28.49,
      "duration": 28.49
    },
    {
      "sceneIndex": 2,
      "title": "2. KỸ NĂNG CASIO FX-580VN X: MENU 6 1-VARIABLE",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH SỐ TRUNG BÌNH SIÊU TỐC TRONG 5 GIÂY",
      "mascotMode": "explaining",
      "mascotTip": "Bật tần số: SHIFT -> MENU -> Cuộn xuống -> 3: Thống kê -> 1: On!",
      "bodyHtml": "\n<div class=\"space-y-4\">\n  <div class=\"bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/40 text-xs\">\n    <div class=\"font-bold text-cyan-300 text-sm mb-2 flex items-center gap-2\">\n      <span>📟</span> <span>Quy Trình Bấm Máy Tính Casio fx-580VN X Chuẩn Nhất</span>\n    </div>\n    <div class=\"grid grid-cols-3 gap-2.5\">\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-emerald-400\">\n        <b class=\"text-emerald-300\">Bước 1: Bật cột FREQ</b>\n        <p class=\"text-slate-300 mt-1 font-mono text-xs\">\n          SHIFT ➔ MENU ➔ ▼ ➔ 3 (Thống kê) ➔ 1 (On).\n        </p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-cyan-400\">\n        <b class=\"text-cyan-300\">Bước 2: Nhập dữ liệu</b>\n        <p class=\"text-slate-300 mt-1 font-mono text-xs\">\n          MENU ➔ 6 ➔ 1 (1-Variable).<br/>\n          Cột X: nhập $c_i$; Cột FREQ: nhập $m_i$.\n        </p>\n      </div>\n      <div class=\"bg-slate-800 p-2.5 rounded-lg border-t-2 border-purple-400\">\n        <b class=\"text-purple-300\">Bước 3: Xuất kết quả</b>\n        <p class=\"text-slate-300 mt-1 font-mono text-xs\">\n          Bấm OPTN ➔ 2 (hoặc 3).<br/>\n          Đọc ngay $\\overline{x}, n, \\sum x$ tức thì!\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Để tiết kiệm thời gian và đảm bảo độ chính xác tuyệt đối không bị sai sót cộng trừ, việc sử dụng máy tính Casio fx-580VN X là một vũ khí cực kì lợi hại. Bước 1: Kích hoạt cột tần số: bấm SHIFT, MENU, bấm phím cuộn xuống, chọn mục 3 Thống kê, rồi bấm phím 1 để Bật tần số. Bước 2: Vào chức năng thống kê 1 biến: bấm MENU, phím 6, phím 1. Cột x nhập các giá trị đại diện c_i, cột FREQ nhập các tần số m_i tương ứng. Bước 3: Bấm phím OPTN rồi chọn mục 2 hoặc 3, máy sẽ hiển thị ngay số trung bình x_ngang và cỡ mẫu n chỉ trong tích tắc.",
      "startTime": 28.49,
      "endTime": 81.22,
      "duration": 52.73
    },
    {
      "sceneIndex": 3,
      "title": "3. ĐỀ TỔNG ÔN - PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (CÂU 1)",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • BẮT ĐẦU VỚI CÂU HỎI NHẬN BIẾT 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Giá trị đại diện của nhóm $[150; 160)$ là $(150 + 160)/2 = 155$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Câu 1 (Phần I - 15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Nhận biết</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 1:</b> Trong mẫu số liệu ghép nhóm về chiều cao học sinh, nhóm thứ hai là nửa khoảng $[150; 160)$. Giá trị đại diện của nhóm này là bao nhiêu?\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>A.</b> 150</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer\"><b>B.</b> 155</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>C.</b> 160</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>D.</b> 10</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Bắt đầu với Phần I của đề thi tổng hợp: Trắc nghiệm nhiều lựa chọn. Câu 1: Cho mẫu số liệu ghép nhóm về chiều cao của học sinh có nhóm thứ hai là nửa khoảng từ 150 đến 160 cm. Giá trị đại diện của nhóm này là: Phương án A: 150; Phương án B: 155; Phương án C: 160; Phương án D: 10. Các em có 15 giây chọn đáp án.",
      "startTime": 81.22,
      "endTime": 114.12,
      "duration": 32.9
    },
    {
      "sceneIndex": 4,
      "title": "4. LỜI GIẢI CÂU 1: ĐÁP ÁN B CHÍNH XÁC",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • CÔNG THỨC GIÁ TRỊ ĐẠI DIỆN",
      "mascotMode": "celebrating",
      "mascotTip": "Đáp án chính xác là B: 155 cm!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải Câu 1:</div>\n    <p class=\"text-slate-300\">\n      Áp dụng công thức giá trị đại diện: $c = \\frac{150 + 160}{2} = 155\\text{ (cm)}$.<br/>\n      <span class=\"text-emerald-300 font-bold font-mono\">➔ Chọn đáp án B.</span>\n    </p>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là B. Giá trị đại diện của nhóm nửa khoảng từ a đến b là trung bình cộng hai đầu mút: 150 cộng 160 chia 2 bằng 155. Rất nhanh và chính xác.",
      "startTime": 114.12,
      "endTime": 127.99,
      "duration": 13.87
    },
    {
      "sceneIndex": 5,
      "title": "5. ĐỀ TỔNG ÔN - PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (CÂU 2)",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÌM NHÓM CHỨA TRUNG VỊ 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "$n = 40 \\Rightarrow n/2 = 20$. Tần số tích lũy: 6, 18, 30... Nhóm nào chứa 20?",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Câu 2 (Phần I - 15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Thông hiểu</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-2\">\n      <b>Câu 2:</b> Khảo sát mẫu số liệu cỡ $n = 40$ có bảng phân phối tần số:\n    </p>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1 border border-slate-600\">Nhóm</th>\n            <th class=\"p-1 border border-slate-600\">$[0; 5)$</th>\n            <th class=\"p-1 border border-slate-600\">$[5; 10)$</th>\n            <th class=\"p-1 border border-slate-600\">$[10; 15)$</th>\n            <th class=\"p-1 border border-slate-600\">$[15; 20)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-emerald-300\">Tần số</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">6</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">12</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">10</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center mt-3\">\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>A.</b> $[0; 5)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>B.</b> $[5; 10)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer\"><b>C.</b> $[10; 15)$</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>D.</b> $[15; 20)$</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Câu 2: Cho bảng tần số ghép nhóm cỡ mẫu n bằng 40 gồm các nhóm: [0; 5) có tần số 6; [5; 10) có tần số 12; [10; 15) có tần số 12; và [15; 20) có tần số 10. Nhóm chứa trung vị là: Phương án A: [0; 5); Phương án B: [5; 10); Phương án C: [10; 15); Phương án D: [15; 20). Các em có 15 giây.",
      "startTime": 127.99,
      "endTime": 166.13,
      "duration": 38.14
    },
    {
      "sceneIndex": 6,
      "title": "6. LỜI GIẢI CÂU 2: ĐÁP ÁN C CHÍNH XÁC",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TẦN SỐ TÍCH LŨY VƯỢT MỐC $N/2 = 20$",
      "mascotMode": "celebrating",
      "mascotTip": "$cf_1 = 6; cf_2 = 18 < 20 \\le cf_3 = 30 \\Rightarrow$ Chọn C: $[10; 15)$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải Câu 2:</div>\n    <p class=\"text-slate-300 font-mono\">\n      • $\\frac{n}{2} = \\frac{40}{2} = 20$.<br/>\n      • $cf_1 = 6$; $cf_2 = 18 < 20 \\le cf_3 = 30$.<br/>\n      ➔ Nhóm chứa trung vị là <b>$[10; 15)$</b>.<br/>\n      <span class=\"text-emerald-300 font-bold font-sans\">➔ Chọn đáp án C.</span>\n    </p>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là C. Ta có n chia 2 bằng 20. Tần số tích lũy: nhóm 1 có cf bằng 6; nhóm 2 có cf bằng 6 cộng 12 bằng 18; nhóm 3 có cf bằng 18 cộng 12 bằng 30. Vì 18 nhỏ hơn 20 và 20 nhỏ hơn hoặc bằng 30 nên nhóm chứa trung vị là nhóm thứ ba, tức nửa khoảng từ 10 đến 15. Chọn C.",
      "startTime": 166.13,
      "endTime": 198.48,
      "duration": 32.35
    },
    {
      "sceneIndex": 7,
      "title": "7. ĐỀ TỔNG ÔN - PHẦN I: TRẮC NGHIỆM 4 LỰA CHỌN (CÂU 3)",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH MỐT MẪU SỐ LIỆU GHÉP NHÓM 15 GIÂY",
      "mascotMode": "thinking",
      "mascotTip": "Tần số lớn nhất là 18 thuộc $[10; 20)$. $d_1 = 18 - 8 = 10; d_2 = 18 - 14 = 4$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Câu 3 (Phần I - 15s)</span>\n      <span class=\"text-xs text-slate-400\">Mức độ: Vận dụng</span>\n    </div>\n    <p class=\"text-xs text-slate-200 leading-relaxed mb-3\">\n      <b>Câu 3:</b> Cho nhóm chứa mốt là $[10; 20)$ với $n_m = 18$. Biết nhóm đứng trước có tần số $n_{m-1} = 8$ và nhóm đứng sau có tần số $n_{m+1} = 14$. Giá trị mốt $M_o$ xấp xỉ bằng:\n    </p>\n\n    <div class=\"grid grid-cols-4 gap-2 text-xs font-mono text-center\">\n      <div class=\"p-2 bg-slate-900 rounded border border-emerald-500 font-bold text-emerald-300 cursor-pointer\"><b>A.</b> 17,14</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>B.</b> 15,50</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>C.</b> 16,67</div>\n      <div class=\"p-2 bg-slate-900 rounded border border-slate-700 hover:border-emerald-500 cursor-pointer\"><b>D.</b> 18,00</div>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-15s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian chọn đáp án:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">15 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Câu 3: Bảng tần số ghép nhóm có nhóm chứa mốt là [10; 20) với tần số 18. Tần số nhóm liền trước là 8 và tần số nhóm liền sau là 14. Giá trị mốt M_o xấp xỉ bằng: Phương án A: 17,14; Phương án B: 15,50; Phương án C: 16,67; Phương án D: 18,00. Các em có 15 giây.",
      "startTime": 198.48,
      "endTime": 232.54,
      "duration": 34.06
    },
    {
      "sceneIndex": 8,
      "title": "8. LỜI GIẢI CÂU 3: ĐÁP ÁN A CHÍNH XÁC",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH TOÁN $M_o \\approx 17,14$",
      "mascotMode": "celebrating",
      "mascotTip": "$M_o = 10 + \\frac{10}{10 + 4} \\cdot 10 = 10 + \\frac{100}{14} \\approx 17,14$!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải Câu 3:</div>\n    <p class=\"text-slate-300 font-mono\">\n      • $d_1 = 18 - 8 = 10$; $d_2 = 18 - 14 = 4$; $h = 10$.<br/>\n      • $M_o = 10 + \\frac{10}{10 + 4} \\cdot 10 = 10 + \\frac{100}{14} \\approx 17,14$.<br/>\n      <span class=\"text-emerald-300 font-bold font-sans\">➔ Chọn đáp án A.</span>\n    </p>\n  </div>\n</div>\n",
      "narration": "Hết thời gian. Đáp án đúng là A. Ta có u_m bằng 10; độ dài h bằng 10. Chênh lệch d_1 bằng 18 trừ 8 bằng 10; d_2 bằng 18 trừ 14 bằng 4. Áp dụng công thức, M_o bằng 10 cộng 10 chia 10 cộng 4, nhân 10. Ta được 10 cộng 100 chia 14, xấp xỉ 17,14. Chọn A.",
      "startTime": 232.54,
      "endTime": 264.22,
      "duration": 31.68
    },
    {
      "sceneIndex": 9,
      "title": "9. ĐỀ TỔNG ÔN - PHẦN II: TRẮC NGHIỆM ĐÚNG/SAI",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • ĐỊNH DẠNG ĐỀ THI MỚI CHUẨN BỘ GD&ĐT",
      "mascotMode": "thinking",
      "mascotTip": "Xét từng mệnh đề a, b, c, d độc lập: a) n=50; b) Nhóm Me; c) Số trung bình; d) Mốt Mo!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded\">Câu Hỏi Phần II (Đúng/Sai - 30s)</span>\n      <span class=\"text-xs text-slate-400\">Chuẩn cấu trúc 4 ý Bộ GD&ĐT</span>\n    </div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1 border border-slate-600\">Nhóm</th>\n            <th class=\"p-1 border border-slate-600\">$[10; 20)$</th>\n            <th class=\"p-1 border border-slate-600\">$[20; 30)$</th>\n            <th class=\"p-1 border border-slate-600\">$[30; 40)$</th>\n            <th class=\"p-1 border border-slate-600\">$[40; 50)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-emerald-300\">Tần số ($m_i$)</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">8</td>\n            <td class=\"p-1 border border-slate-600 font-mono font-bold text-amber-300\">20</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">16</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">6</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"mt-2 space-y-1 text-xs text-slate-200\">\n      <p><b>a)</b> Cỡ mẫu của mẫu số liệu trên là $n = 50$.</p>\n      <p><b>b)</b> Nhóm chứa trung vị là nhóm $[20; 30)$.</p>\n      <p><b>c)</b> Số trung bình của mẫu số liệu trên bằng $28,6$.</p>\n      <p><b>d)</b> Mốt của mẫu số liệu trên là $M_o = 27,5$.</p>\n    </div>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian thẩm định:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Tiếp theo là dạng câu hỏi Trắc nghiệm Đúng/Sai thuộc Phần II của cấu trúc đề thi mới. Cho bảng phân phối tần số gồm 4 nhóm: [10; 20) có 8; [20; 30) có 20; [30; 40) có 16; và [40; 50) có 6. Hãy xét tính đúng sai của 4 mệnh đề sau: Ý a: Cỡ mẫu của mẫu số liệu là n bằng 50; Ý b: Nhóm chứa trung vị là nửa khoảng từ 20 đến 30; Ý c: Số trung bình của mẫu số liệu là 28,6; Ý d: Mốt của mẫu số liệu là 27,5. Các em có 30 giây suy nghĩ.",
      "startTime": 264.22,
      "endTime": 314.26,
      "duration": 50.04
    },
    {
      "sceneIndex": 10,
      "title": "10. LỜI GIẢI CHI TIẾT PHẦN II: THẨM ĐỊNH 4 MỆNH ĐỀ",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • ĐÁP ÁN: a-ĐÚNG, b-ĐÚNG, c-SAI, d-ĐÚNG",
      "mascotMode": "celebrating",
      "mascotTip": "Mệnh đề c Sai vì số trung bình chuẩn xác bằng 1450/50 = 29,0 chứ không phải 28,6!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-indigo-500/40 text-xs\">\n    <div class=\"space-y-2 text-slate-300\">\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>a)</b> $n = 8 + 20 + 16 + 6 = 50$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>b)</b> $\\frac{n}{2} = 25$; $cf_1 = 8 < 25 \\le cf_2 = 28 \\Rightarrow$ Nhóm $[20; 30)$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>c)</b> $\\overline{x} = \\frac{8(15) + 20(25) + 16(35) + 6(45)}{50} = \\frac{1450}{50} = 29,0 \\ne 28,6$.</span>\n        <span class=\"px-2 py-0.5 bg-rose-500/20 text-rose-300 font-bold rounded\">SAI</span>\n      </div>\n      <div class=\"flex items-center justify-between p-1.5 bg-slate-900 rounded\">\n        <span><b>d)</b> $M_o = 20 + \\frac{12}{12 + 4} \\cdot 10 = 20 + 7,5 = 27,5$.</span>\n        <span class=\"px-2 py-0.5 bg-emerald-500/20 text-emerald-300 font-bold rounded\">ĐÚNG</span>\n      </div>\n    </div>\n  </div>\n</div>\n",
      "narration": "Đã hết thời gian. Thầy cùng các em thẩm định từng mệnh đề. Mệnh đề a: Tổng tần số là 8 cộng 20 cộng 16 cộng 6 bằng 50. Đúng. Mệnh đề b: n chia 2 bằng 25. Tần số tích lũy: cf_1 là 8; cf_2 là 28. Vì 8 nhỏ hơn 25 và 25 nhỏ hơn hoặc bằng 28 nên nhóm chứa trung vị là [20; 30). Đúng. Mệnh đề c: Tổng tích m_i nhân c_i bằng 8 nhân 15 cộng 20 nhân 25 cộng 16 nhân 35 cộng 6 nhân 45 bằng 120 cộng 500 cộng 560 cộng 270 bằng 1450. Chia cho 50, ta được số trung bình bằng đúng 29,0 chứ không phải 28,6. Mệnh đề c Sai. Mệnh đề d: Nhóm chứa mốt là [20; 30) có tần số lớn nhất 20. d_1 bằng 20 trừ 8 bằng 12; d_2 bằng 20 trừ 16 bằng 4. M_o bằng 20 cộng 12 chia 16 nhân 10 bằng 20 cộng 7,5 bằng 27,5. Đúng. Vậy kết quả là: a Đúng, b Đúng, c Sai, d Đúng.",
      "startTime": 314.26,
      "endTime": 408.79,
      "duration": 94.54
    },
    {
      "sceneIndex": 11,
      "title": "11. ĐỀ TỔNG ÔN - PHẦN III: CÂU HỎI TRẢ LỜI NGẮN",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • TÍNH KHOẢNG TỨ PHÂN VỊ $\\Delta_Q$ CHÍNH XÁC",
      "mascotMode": "thinking",
      "mascotTip": "$n = 50 \\Rightarrow n/4 = 12,5$ và $3n/4 = 37,5$. Tính $Q_1, Q_3$ rồi trừ!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-amber-500/30\">\n    <div class=\"flex items-center justify-between mb-2\">\n      <span class=\"px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded\">Câu Hỏi Phần III (Trả Lời Ngắn - 30s)</span>\n      <span class=\"text-xs text-slate-400\">Tô số trực tiếp vào phiếu</span>\n    </div>\n\n    <div class=\"overflow-x-auto\">\n      <table class=\"w-full text-xs text-center border-collapse\">\n        <thead>\n          <tr class=\"bg-slate-700 text-slate-200\">\n            <th class=\"p-1 border border-slate-600\">Nhóm</th>\n            <th class=\"p-1 border border-slate-600\">$[0; 5)$</th>\n            <th class=\"p-1 border border-slate-600\">$[5; 10)$</th>\n            <th class=\"p-1 border border-slate-600\">$[10; 15)$</th>\n            <th class=\"p-1 border border-slate-600\">$[15; 20)$</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"bg-slate-800/60 text-slate-300\">\n            <td class=\"p-1 border border-slate-600 font-semibold text-amber-300\">Tần số ($m_i$)</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">5</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">15</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">20</td>\n            <td class=\"p-1 border border-slate-600 font-mono\">10</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <p class=\"text-xs text-amber-200 font-semibold mt-2\">\n      <b>Yêu cầu:</b> Tính khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ (làm tròn số đến hàng phần trăm).\n    </p>\n  </div>\n\n  <div class=\"countdown-clock-widget cd-30s flex items-center justify-between p-2.5 bg-slate-900/80 rounded-lg border border-indigo-500/30\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"text-lg\">⏳</span>\n      <span class=\"text-xs text-indigo-300 font-medium\">Thời gian tính toán:</span>\n    </div>\n    <span class=\"text-base font-black text-amber-400 font-mono tracking-wider\">30 GIÂY</span>\n  </div>\n</div>\n",
      "narration": "Tiếp theo là Phần III: Câu hỏi trả lời ngắn. Thí sinh tô đáp án số học trực tiếp vào phiếu trả lời. Cho bảng số liệu ghép nhóm cỡ mẫu n bằng 50: nhóm [0; 5) có 5; nhóm [5; 10) có 15; nhóm [10; 15) có 20; và nhóm [15; 20) có 10. Hãy tính khoảng tứ phân vị delta Q và làm tròn đến hai chữ số thập phân. Các em có 30 giây tính toán.",
      "startTime": 408.79,
      "endTime": 445.63,
      "duration": 36.84
    },
    {
      "sceneIndex": 12,
      "title": "12. LỜI GIẢI PHẦN III & BẾ MẠC TOÀN KHÓA CHƯƠNG 3",
      "subtitle": "ÔN TẬP CHƯƠNG III • MỤC 3 • CHÚC MỪNG BẠN ĐÃ CHINH PHỤC CHƯƠNG III",
      "mascotMode": "celebrating",
      "mascotTip": "$\\Delta_Q = 14,38 - 7,50 = 6,88$. Chúc các em luôn đạt điểm 10 môn Toán!",
      "bodyHtml": "\n<div class=\"space-y-3\">\n  <div class=\"bg-slate-800/90 p-3.5 rounded-xl border border-emerald-500/40 text-xs\">\n    <div class=\"text-xs font-bold text-emerald-300 uppercase mb-1\">Lời giải chi tiết Phần III:</div>\n    <div class=\"space-y-1 text-slate-300 font-mono\">\n      <p>• $Q_1 = 5 + \\frac{12,5 - 5}{15} \\cdot 5 = 7,50$.</p>\n      <p>• $Q_3 = 10 + \\frac{37,5 - 20}{20} \\cdot 5 = 14,375$.</p>\n      <div class=\"text-sm font-bold text-amber-200 text-center bg-slate-900 p-2 rounded\">\n        $$\\Delta_Q = Q_3 - Q_1 = 14,375 - 7,500 = 6,875 \\approx 6,88$$\n      </div>\n    </div>\n\n    <div class=\"mt-2.5 bg-gradient-to-r from-emerald-950 to-teal-950 p-2.5 rounded-lg border border-emerald-500/30 text-xs\">\n      <div class=\"font-bold text-emerald-200 mb-1 flex items-center gap-1.5\">\n        <span>🎉</span> <span>CHÚC MỪNG BẠN ĐÃ LÀM CHỦ TRỌN VẸN CHƯƠNG III TOÁN 11 KNTT!</span>\n      </div>\n      <p class=\"text-slate-300\">\n        Bạn đã nắm vững toàn bộ kiến thức lý thuyết, kỹ năng giải toán 4 dạng trọng tâm, nghệ thuật né bẫy phòng thi và kỹ năng Casio fx-580VN X!\n      </p>\n    </div>\n  </div>\n</div>\n",
      "narration": "Chúc mừng các em. Cỡ mẫu 50 nên n chia 4 bằng 12,5; 3n chia 4 bằng 37,5. Tần số tích lũy: nhóm 1 là 5; nhóm 2 là 20; nhóm 3 là 40; nhóm 4 là 50. Nhóm chứa Q_1 là [5; 10): Q_1 bằng 5 cộng 12,5 trừ 5 chia 15 nhân 5, bằng 5 cộng 2,5 bằng 7,5. Nhóm chứa Q_3 là [10; 15): Q_3 bằng 10 cộng 37,5 trừ 20 chia 20 nhân 5, bằng 10 cộng 4,375 bằng 14,375. Khoảng tứ phân vị delta Q bằng 14,375 trừ 7,5 bằng 6,875, làm tròn đến hàng phần trăm là 6,88. Như vậy, chúng ta đã hoàn thành trọn vẹn toàn bộ Chương 3 môn Toán lớp 11 Kết Nối Tri Thức. Thầy Nam Minh chúc các em luôn tự tin, yêu thích môn Toán và đạt kết quả cao nhất trong mọi kì thi!",
      "startTime": 445.63,
      "endTime": 520.92,
      "duration": 75.29
    }
  ]
};
  root.G11_CHAPTER3_DATA.toan11_ontap_c3_muc3 = root.G11_CHAPTER3_DATA.g11_ontap_c3_muc3;

  // Auto merge into global LECTURE_DATA
  if (typeof LECTURE_DATA !== 'undefined') {
    Object.assign(LECTURE_DATA, root.G11_CHAPTER3_DATA);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = root.G11_CHAPTER3_DATA;
  }
})();
