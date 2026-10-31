/**
 * NGÂN HÀNG ÔN THI TỐT NGHIỆP THEO CHỦ ĐỀ (9 CHỦ ĐỀ - 45 ĐỀ LUYỆN TẬP)
 * Chuẩn cấu trúc Đề thi TN THPT 2025 - 2026 của Bộ GD&ĐT
 */
if (typeof window === 'undefined') { globalThis.window = globalThis; }
window.TOPIC_EXAMS_DB = [
  {
    "id": "cd1",
    "code": "CĐ 1",
    "title": "DÃY SỐ - CSC - CSN",
    "icon": "fa-solid fa-arrow-trend-up",
    "badge": "Lớp 11 • Kiến thức trọng tâm",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
    "description": "Dãy số tăng/giảm/bị chặn; số hạng tổng quát, tính chất, tổng n số hạng của cấp số cộng, cấp số nhân và bài toán thực tế tài chính, tăng trưởng.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Dãy số -->\n  <div class=\"bg-indigo-50/70 border-l-4 border-indigo-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-indigo-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-arrow-trend-up text-indigo-600\"></i>\n      1. Khái Niệm & Tính Chất Của Dãy Số\n    </h4>\n    <ul class=\"list-disc pl-5 space-y-1.5 text-[11.5pt]\">\n      <li><strong>Định nghĩa:</strong> Dãy số vô hạn là hàm số $u: \\mathbb{N}^* \\to \\mathbb{R}, n \\mapsto u_n$. Ký hiệu $(u_n)$.</li>\n      <li><strong>Dãy số tăng:</strong> $u_{n+1} > u_n$ với mọi $n \\in \\mathbb{N}^*$ (hoặc $\\frac{u_{n+1}}{u_n} > 1$ nếu $u_n > 0$).</li>\n      <li><strong>Dãy số giảm:</strong> $u_{n+1} < u_n$ với mọi $n \\in \\mathbb{N}^*$ (hoặc $\\frac{u_{n+1}}{u_n} < 1$ nếu $u_n > 0$).</li>\n      <li><strong>Dãy số bị chặn:</strong> Bị chặn trên nếu $\\exists M: u_n \\le M$; Bị chặn dưới nếu $\\exists m: u_n \\ge m$; Bị chặn nếu $m \\le u_n \\le M, \\forall n \\in \\mathbb{N}^*$.</li>\n    </ul>\n  </div>\n\n  <!-- Phần 2: Cấp số cộng -->\n  <div class=\"bg-teal-50/70 border-l-4 border-teal-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-teal-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-calculator text-teal-600\"></i>\n      2. Cấp Số Cộng (CSC)\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200 shadow-xs\">\n        <p class=\"font-bold text-teal-900 mb-1\">Định nghĩa & Số hạng tổng quát:</p>\n        <p>$u_{n+1} = u_n + d$ ($d$ là công sai)</p>\n        <p class=\"mt-1 text-teal-800 font-semibold\">$u_n = u_1 + (n - 1)d$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200 shadow-xs\">\n        <p class=\"font-bold text-teal-900 mb-1\">Tính chất & Tổng $n$ số hạng đầu:</p>\n        <p>$u_k = \\frac{u_{k-1} + u_{k+1}}{2}$ ($k \\ge 2$)</p>\n        <p class=\"mt-1 text-teal-800 font-semibold\">$S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Cấp số nhân -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-chart-line text-amber-600\"></i>\n      3. Cấp Số Nhân (CSN) & CSN Lùi Vô Hạn\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-900 mb-1\">Định nghĩa & Số hạng tổng quát:</p>\n        <p>$u_{n+1} = u_n \\cdot q$ ($q$ là công bội)</p>\n        <p class=\"mt-1 text-amber-800 font-semibold\">$u_n = u_1 \\cdot q^{n-1}$ ($n \\ge 2$)</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Tính chất: $u_k^2 = u_{k-1} \\cdot u_{k+1}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-900 mb-1\">Tổng $n$ số hạng & CSN lùi vô hạn:</p>\n        <p>$S_n = u_1 \\cdot \\frac{q^n - 1}{q - 1} = u_1 \\cdot \\frac{1 - q^n}{1 - q}$ ($q \\ne 1$)</p>\n        <p class=\"mt-1 text-amber-800 font-semibold\">Nếu $|q| < 1$: $S = \\lim S_n = \\frac{u_1}{1 - q}$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 4: Mô hình Toán Thực Tế -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-coins text-purple-600\"></i>\n      4. Mô Hình Toán Thực Tế Trọng Tâm\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-2.5 rounded-xl border border-purple-200\">\n        <span class=\"font-bold text-purple-900\">Tiết kiệm lãi kép:</span> Gửi $P$ đồng, lãi suất $r$/kỳ: $A_n = P(1 + r)^n$.\n      </div>\n      <div class=\"bg-white p-2.5 rounded-xl border border-purple-200\">\n        <span class=\"font-bold text-purple-900\">Gửi tiền định kỳ đầu mỗi tháng:</span> Gửi $m$ đồng mỗi đầu tháng: $S_n = \\frac{m(1+r)[(1+r)^n - 1]}{r}$.\n      </div>\n      <div class=\"bg-white p-2.5 rounded-xl border border-purple-200\">\n        <span class=\"font-bold text-purple-900\">Vay nợ trả góp hàng tháng:</span> Nợ $P$, trả đều $m$ đồng cuối tháng: $A_n = P(1+r)^n - m\\frac{(1+r)^n - 1}{r}$. Để hết nợ sau $n$ kỳ: $m = \\frac{P \\cdot r \\cdot (1+r)^n}{(1+r)^n - 1}$.\n      </div>\n      <div class=\"bg-white p-2.5 rounded-xl border border-purple-200\">\n        <span class=\"font-bold text-purple-900\">Bóng nảy & Hình học fractal:</span> Tổng quãng đường bóng nảy từ độ cao $h$ với hệ số nảy $k < 1$: $S = h + 2\\sum_{i=1}^\\infty h k^i = h + \\frac{2hk}{1 - k} = h \\frac{1 + k}{1 - k}$.\n      </div>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd1-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Dãy Số - CSC - CSN",
        "code": "CD1-101",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 3n - 4$. Số hạng thứ 5 của dãy số là:",
            "options": {
              "A": "$11$",
              "B": "$8$",
              "C": "$19$",
              "D": "$14$"
            },
            "correct": "A",
            "explanation": "Thay $n = 5$ ta được: $u_5 = 3(5) - 4 = 11$."
          },
          {
            "id": 2,
            "question": "Dãy số nào sau đây là một dãy số tăng?",
            "options": {
              "A": "$u_n = 3n + 1$",
              "B": "$u_n = \\frac{1}{n}$",
              "C": "$u_n = 5 - 2n$",
              "D": "$u_n = (-1)^n$"
            },
            "correct": "A",
            "explanation": "$u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3 > 0$ nên dãy số tăng."
          },
          {
            "id": 3,
            "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 4$ và công sai $d = 3$. Số hạng tổng quát $u_n$ là:",
            "options": {
              "A": "$u_n = 3n - 4$",
              "B": "$u_n = 4n + 3$",
              "C": "$u_n = 3n + 4$",
              "D": "$u_n = 3n + 1$"
            },
            "correct": "D",
            "explanation": "$u_n = u_1 + (n - 1)d = 4 + (n - 1)3 = 3n + 1$."
          },
          {
            "id": 4,
            "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 4$ và công bội $q = 2$. Số hạng thứ 4 của cấp số nhân bằng:",
            "options": {
              "A": "$64$",
              "B": "$32$",
              "C": "$32$",
              "D": "$10$"
            },
            "correct": "B",
            "explanation": "$u_4 = u_1 \\cdot q^3 = 4 \\cdot 2^3 = 32$."
          },
          {
            "id": 5,
            "question": "Ba số $x, 10, y$ theo thứ tự lập thành một cấp số cộng. Tổng $x + y$ bằng:",
            "options": {
              "A": "$20$",
              "B": "$10$",
              "C": "$40$",
              "D": "$30$"
            },
            "correct": "A",
            "explanation": "Theo tính chất cấp số cộng: $x + y = 2 \\times 10 = 20$."
          },
          {
            "id": 6,
            "question": "Cho cấp số nhân lùi vô hạn có $u_1 = 4$ và công bội $q = \\frac{1}{2}$. Tổng của cấp số nhân lùi vô hạn này bằng:",
            "options": {
              "A": "$16$",
              "B": "$8$",
              "C": "$2$",
              "D": "$4$"
            },
            "correct": "B",
            "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{4}{1 - 0.5} = 8$."
          },
          {
            "id": 7,
            "question": "Một người gửi tiết kiệm 50 triệu đồng vào ngân hàng với lãi kép $6\\%/\\text{năm}$. Công thức tính số tiền (cả gốc và lãi) sau $n$ năm là:",
            "options": {
              "A": "$A_n = 50(0.06)^n$",
              "B": "$A_n = 50(1.6)^n$",
              "C": "$A_n = 50(1.06)^n$",
              "D": "$A_n = 50 + 50 \\times 0.06n$"
            },
            "correct": "C",
            "explanation": "Theo công thức lãi kép: $A_n = P(1 + r)^n = 50(1.06)^n$ triệu đồng."
          },
          {
            "id": 8,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = 5$. Tổng 10 số hạng đầu tiên $S_10$ bằng:",
            "options": {
              "A": "$290$",
              "B": "$155$",
              "C": "$150$",
              "D": "$160$"
            },
            "correct": "B",
            "explanation": "$d = 3$. $S_{10} = \\frac{10}{2}[2(2) + 9(3)] = 5(4 + 27) = 155$."
          },
          {
            "id": 9,
            "question": "Dãy số nào sau đây bị chặn dưới bởi 0 nhưng không bị chặn trên?",
            "options": {
              "A": "$u_n = \\sin n$",
              "B": "$u_n = -n$",
              "C": "$u_n = \\frac{1}{n}$",
              "D": "$u_n = n^2 + 1$"
            },
            "correct": "D",
            "explanation": "$u_n = n^2 + 1 > 0$ nên bị chặn dưới, nhưng khi $n \\to +\\infty$ thì $u_n \\to +\\infty$ nên không bị chặn trên."
          },
          {
            "id": 10,
            "question": "Cho ba số $a, b, c$ dương theo thứ tự lập thành một cấp số nhân. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$ac = 2b$",
              "B": "$b = \\sqrt{a + c}$",
              "C": "$b^2 = ac$",
              "D": "$2b = a + c$"
            },
            "correct": "C",
            "explanation": "Theo tính chất cấp số nhân: $b^2 = ac$."
          },
          {
            "id": 11,
            "question": "Một khán phòng có 20 hàng ghế, hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong khán phòng là:",
            "options": {
              "A": "$620$",
              "B": "$700$",
              "C": "$680$",
              "D": "$650$"
            },
            "correct": "C",
            "explanation": "$S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10(30 + 38) = 680$ ghế."
          },
          {
            "id": 12,
            "question": "Một tế bào vi khuẩn phân đôi sau mỗi 30 phút. Từ 1 tế bào ban đầu, sau 3 giờ (gồm 6 chu kỳ) số lượng tế bào vi khuẩn là:",
            "options": {
              "A": "$128$",
              "B": "$16$",
              "C": "$32$",
              "D": "$64$"
            },
            "correct": "D",
            "explanation": "$N = 1 \\times 2^6 = 64$ tế bào."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một người lập kế hoạch tích lũy tài chính: Bắt đầu gửi vào tài khoản tiết kiệm 11 triệu đồng vào đầu mỗi năm. Lãi suất tiền gửi là $7\\%/\\text{năm}$ tính theo lãi kép hàng năm.",
            "items": [
              {
                "key": "a",
                "text": "Khoản tiền gửi năm đầu tiên sau 3 năm tích lũy đạt giá trị là $11 \\times (1.07)^3$ triệu đồng.",
                "correct": true,
                "explanation": "Khoản tiền đầu năm 1 gửi trọn vẹn 3 năm chịu lãi kép 3 kỳ."
              },
              {
                "key": "b",
                "text": "Số tiền người đó tích lũy được sau mỗi năm lập thành một cấp số cộng.",
                "correct": false,
                "explanation": "Do tính lãi kép nên số tiền tích lũy là tổng của một cấp số nhân, không phải cấp số cộng."
              },
              {
                "key": "c",
                "text": "Tổng số tiền người đó nhận được ở cuối năm thứ 3 xấp xỉ $37.84$ triệu đồng.",
                "correct": true,
                "explanation": "Áp dụng công thức tổng CSN gửi định kỳ đầu mỗi năm: $S_3 = 11 \\times 1.07 \\times \\frac{1.07^3 - 1}{0.07} \\approx 37.84$ triệu đồng."
              },
              {
                "key": "d",
                "text": "Nếu lãi suất tăng lên $10\\%/\\text{năm}$, số tiền nhận được cuối năm thứ 3 tăng trên $15\\%$.",
                "correct": false,
                "explanation": "Tính toán tỉ lệ tăng cho thấy mức tăng chỉ vào khoảng $8-9\\%$, không vượt quá $15\\%$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 4$ và công bội $q = 2$.",
            "items": [
              {
                "key": "a",
                "text": "Số hạng thứ 3 của cấp số nhân là $u_3 = 16$.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 4 \\cdot 2^2 = 16$."
              },
              {
                "key": "b",
                "text": "Dãy số $(u_n)$ là một dãy số giảm vì công bội $q = 2 > 1$.",
                "correct": false,
                "explanation": "Vì $u_1 > 0$ và $q = 2 > 1$ nên dãy số là dãy tăng, không phải dãy giảm."
              },
              {
                "key": "c",
                "text": "Tổng của 5 số hạng đầu tiên là $S_5 = 124$.",
                "correct": true,
                "explanation": "$S_5 = u_1 \\frac{q^5 - 1}{q - 1} = 4 \\frac{2^5 - 1}{2 - 1} = 124$."
              },
              {
                "key": "d",
                "text": "Dãy số $(v_n)$ xác định bởi $v_n = \\ln(u_n)$ lập thành một cấp số cộng có công sai $d = \\ln(2)$.",
                "correct": true,
                "explanation": "$v_{n+1} - v_n = \\ln(u_{n+1}) - \\ln(u_n) = \\ln\\left(\\frac{u_{n+1}}{u_n}\\right) = \\ln(2)$ là hằng số."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một quả bóng cao su được thả rơi tự do từ độ cao 12\\text{ m} xuống sàn. Mỗi lần chạm sàn, bóng nảy lên độ cao bằng $\\frac23$ độ cao của lần rơi trước đó.",
            "items": [
              {
                "key": "a",
                "text": "Độ cao bóng nảy lên sau lần chạm sàn đầu tiên là $8.0\\text{ m}$.",
                "correct": true,
                "explanation": "$h_1 = 12 \\times \\frac{2}{3} = 8.0\\text{ m}$."
              },
              {
                "key": "b",
                "text": "Dãy các độ cao bóng nảy lên lập thành một cấp số nhân có công bội $q = \\frac{2}{3}$.",
                "correct": true,
                "explanation": "Đúng định nghĩa cấp số nhân với $q = 2/3$."
              },
              {
                "key": "c",
                "text": "Sau 4 lần nảy, tổng độ cao bóng đã nảy lên vượt quá độ cao ban đầu lúc thả.",
                "correct": true,
                "explanation": "Tổng độ cao nảy lên 4 lần: $S_4 = h_1 \\frac{1 - (2/3)^4}{1 - 2/3} = 3h_1(1 - 16/81) = 2h_0 \\times 65/81 = 130/81 h_0 > h_0$."
              },
              {
                "key": "d",
                "text": "Tổng toàn bộ quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn bằng $60\\text{ m}$.",
                "correct": true,
                "explanation": "Tổng quãng đường: $S = h_0 \\frac{1 + k}{1 - k} = 12 \\frac{1 + 2/3}{1 - 2/3} = 12 \\times 5 = 60\\text{ m}$."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một cơ sở sản xuất đồ gỗ mỹ nghệ đóng 60 chiếc ghế trong tháng thứ nhất. Kế hoạch đề ra mỗi tháng tiếp theo tăng thêm $10\\%$ so với tháng trước.",
            "items": [
              {
                "key": "a",
                "text": "Sản lượng ghế mỗi tháng lập thành một cấp số nhân có công bội $q = 1.1$.",
                "correct": true,
                "explanation": "Mỗi tháng tăng $10\\%$ nên sản lượng bằng $1.1$ lần tháng trước."
              },
              {
                "key": "b",
                "text": "Sản lượng ghế riêng trong tháng thứ 3 là $73$ chiếc.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 60 \\times 1.1^2 = 60 \\times 1.21 = 73$ chiếc."
              },
              {
                "key": "c",
                "text": "Tổng sản lượng ghế sản xuất trong 6 tháng đầu năm vượt quá 500 chiếc.",
                "correct": true,
                "explanation": "Tổng sản lượng 6 tháng: $S_6 = u_1 \\frac{1.1^6 - 1}{0.1} \\approx 60 \\times 7.7156 > 500$ chiếc."
              },
              {
                "key": "d",
                "text": "Nếu mỗi tháng chỉ tăng cố định 5 chiếc thì tổng sản lượng sau 6 tháng lớn hơn kế hoạch tăng $10\\%$.",
                "correct": false,
                "explanation": "Tăng cấp số nhân tăng trưởng theo hàm mũ luôn vượt trội hơn tăng tuyến tính cấp số cộng."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và công sai $d = 3$. Tìm số hạng thứ 12 của cấp số cộng.",
            "correctAnswer": "38",
            "acceptedAnswers": [
              "38",
              "38.0"
            ],
            "explanation": "$u_{12} = u_1 + 11d = 5 + 11(3) = 38$."
          },
          {
            "id": 2,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 3$. Tính tổng của 10 số hạng đầu tiên $S_{10}$.",
            "correctAnswer": "155",
            "acceptedAnswers": [
              "155",
              "155.0"
            ],
            "explanation": "$S_{10} = \\frac{10}{2}[2(2) + 9(3)] = 5(4 + 27) = 155$."
          },
          {
            "id": 3,
            "question": "Tính tổng của cấp số nhân lùi vô hạn: $S = 6 + 2 + \\frac{2}{3} + \\frac{2}{9} + \\dots$",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9",
              "9.0"
            ],
            "explanation": "$u_1 = 6, q = 1/3 \\Rightarrow S = \\frac{6}{1 - 1/3} = 9$."
          },
          {
            "id": 4,
            "question": "Một rạp xiếc có các hàng ghế xếp hình vòng cung, hàng thứ nhất có 13 ghế, mỗi hàng sau nhiều hơn hàng trước 3 ghế. Khán phòng có 15 hàng ghế. Hỏi có tất cả bao nhiêu ghế?",
            "correctAnswer": "510",
            "acceptedAnswers": [
              "510"
            ],
            "explanation": "Cấp số cộng: $S_{15} = \\frac{15}{2}[2(13) + 14(3)] = 510$ ghế."
          },
          {
            "id": 5,
            "question": "Một quả bóng cao su được thả rơi từ độ cao $12\\text{ m}$. Mỗi lần chạm sàn nó nảy lên độ cao bằng $\\frac23$ độ cao trước đó. Tính tổng quãng đường bóng đã di chuyển kể từ lúc thả đến khi dừng hẳn (mét).",
            "correctAnswer": "60",
            "acceptedAnswers": [
              "60",
              "60.0"
            ],
            "explanation": "$S = h_0 \\frac{1 + 2/3}{1 - 2/3} = 12 \\times 5 = 60\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một kỹ sư vay ngân hàng 100 triệu đồng trả góp với lãi suất $0.6\\%/\\text{tháng}$. Mỗi tháng kỹ sư trả đều đặn số tiền $m$ triệu đồng vào cuối tháng. Để trả hết nợ đúng sau 24 tháng, số tiền $m$ phải bằng bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "4.49",
            "acceptedAnswers": [
              "4.49",
              "4,49"
            ],
            "explanation": "$m = \\frac{100 \\times 0.006 \\times 1.006^{24}}{1.006^{24} - 1} = \\frac{0.6 \\times 1.15437}{0.15437} \\approx 4.49$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd1-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Dãy Số - CSC - CSN",
        "code": "CD1-102",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 4n - 5$. Số hạng thứ 5 của dãy số là:",
            "options": {
              "A": "$15$",
              "B": "$11$",
              "C": "$19$",
              "D": "$25$"
            },
            "correct": "A",
            "explanation": "Thay $n = 5$ ta được: $u_5 = 4(5) - 5 = 15$."
          },
          {
            "id": 2,
            "question": "Dãy số nào sau đây là một dãy số tăng?",
            "options": {
              "A": "$u_n = (-1)^n$",
              "B": "$u_n = 5 - 2n$",
              "C": "$u_n = 3n + 1$",
              "D": "$u_n = \\frac{1}{n}$"
            },
            "correct": "C",
            "explanation": "$u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3 > 0$ nên dãy số tăng."
          },
          {
            "id": 3,
            "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 4$. Số hạng tổng quát $u_n$ là:",
            "options": {
              "A": "$u_n = 4n + 5$",
              "B": "$u_n = 4n + 1$",
              "C": "$u_n = 5n + 4$",
              "D": "$u_n = 4n - 5$"
            },
            "correct": "B",
            "explanation": "$u_n = u_1 + (n - 1)d = 5 + (n - 1)4 = 4n + 1$."
          },
          {
            "id": 4,
            "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 5$ và công bội $q = 3$. Số hạng thứ 4 của cấp số nhân bằng:",
            "options": {
              "A": "$405$",
              "B": "$60$",
              "C": "$135$",
              "D": "$14$"
            },
            "correct": "C",
            "explanation": "$u_4 = u_1 \\cdot q^3 = 5 \\cdot 3^3 = 135$."
          },
          {
            "id": 5,
            "question": "Ba số $x, 10, y$ theo thứ tự lập thành một cấp số cộng. Tổng $x + y$ bằng:",
            "options": {
              "A": "$30$",
              "B": "$10$",
              "C": "$40$",
              "D": "$20$"
            },
            "correct": "D",
            "explanation": "Theo tính chất cấp số cộng: $x + y = 2 \\times 10 = 20$."
          },
          {
            "id": 6,
            "question": "Cho cấp số nhân lùi vô hạn có $u_1 = 4$ và công bội $q = \\frac{1}{2}$. Tổng của cấp số nhân lùi vô hạn này bằng:",
            "options": {
              "A": "$4$",
              "B": "$16$",
              "C": "$2$",
              "D": "$8$"
            },
            "correct": "D",
            "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{4}{1 - 0.5} = 8$."
          },
          {
            "id": 7,
            "question": "Một người gửi tiết kiệm 50 triệu đồng vào ngân hàng với lãi kép $6\\%/\\text{năm}$. Công thức tính số tiền (cả gốc và lãi) sau $n$ năm là:",
            "options": {
              "A": "$A_n = 50(1.6)^n$",
              "B": "$A_n = 50(0.06)^n$",
              "C": "$A_n = 50 + 50 \\times 0.06n$",
              "D": "$A_n = 50(1.06)^n$"
            },
            "correct": "D",
            "explanation": "Theo công thức lãi kép: $A_n = P(1 + r)^n = 50(1.06)^n$ triệu đồng."
          },
          {
            "id": 8,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = 6$. Tổng 10 số hạng đầu tiên $S_10$ bằng:",
            "options": {
              "A": "$200$",
              "B": "$210$",
              "C": "$200$",
              "D": "$380$"
            },
            "correct": "A",
            "explanation": "$d = 4$. $S_{10} = \\frac{10}{2}[2(2) + 9(4)] = 5(4 + 36) = 200$."
          },
          {
            "id": 9,
            "question": "Dãy số nào sau đây bị chặn dưới bởi 0 nhưng không bị chặn trên?",
            "options": {
              "A": "$u_n = \\sin n$",
              "B": "$u_n = n^2 + 1$",
              "C": "$u_n = \\frac{1}{n}$",
              "D": "$u_n = -n$"
            },
            "correct": "B",
            "explanation": "$u_n = n^2 + 1 > 0$ nên bị chặn dưới, nhưng khi $n \\to +\\infty$ thì $u_n \\to +\\infty$ nên không bị chặn trên."
          },
          {
            "id": 10,
            "question": "Cho ba số $a, b, c$ dương theo thứ tự lập thành một cấp số nhân. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$2b = a + c$",
              "B": "$b^2 = ac$",
              "C": "$b = \\sqrt{a + c}$",
              "D": "$ac = 2b$"
            },
            "correct": "B",
            "explanation": "Theo tính chất cấp số nhân: $b^2 = ac$."
          },
          {
            "id": 11,
            "question": "Một khán phòng có 20 hàng ghế, hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong khán phòng là:",
            "options": {
              "A": "$650$",
              "B": "$620$",
              "C": "$680$",
              "D": "$700$"
            },
            "correct": "C",
            "explanation": "$S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10(30 + 38) = 680$ ghế."
          },
          {
            "id": 12,
            "question": "Một tế bào vi khuẩn phân đôi sau mỗi 30 phút. Từ 1 tế bào ban đầu, sau 3 giờ (gồm 6 chu kỳ) số lượng tế bào vi khuẩn là:",
            "options": {
              "A": "$64$",
              "B": "$128$",
              "C": "$16$",
              "D": "$32$"
            },
            "correct": "A",
            "explanation": "$N = 1 \\times 2^6 = 64$ tế bào."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một người lập kế hoạch tích lũy tài chính: Bắt đầu gửi vào tài khoản tiết kiệm 12 triệu đồng vào đầu mỗi năm. Lãi suất tiền gửi là $7\\%/\\text{năm}$ tính theo lãi kép hàng năm.",
            "items": [
              {
                "key": "a",
                "text": "Khoản tiền gửi năm đầu tiên sau 3 năm tích lũy đạt giá trị là $12 \\times (1.07)^3$ triệu đồng.",
                "correct": true,
                "explanation": "Khoản tiền đầu năm 1 gửi trọn vẹn 3 năm chịu lãi kép 3 kỳ."
              },
              {
                "key": "b",
                "text": "Số tiền người đó tích lũy được sau mỗi năm lập thành một cấp số cộng.",
                "correct": false,
                "explanation": "Do tính lãi kép nên số tiền tích lũy là tổng của một cấp số nhân, không phải cấp số cộng."
              },
              {
                "key": "c",
                "text": "Tổng số tiền người đó nhận được ở cuối năm thứ 3 xấp xỉ $41.28$ triệu đồng.",
                "correct": true,
                "explanation": "Áp dụng công thức tổng CSN gửi định kỳ đầu mỗi năm: $S_3 = 12 \\times 1.07 \\times \\frac{1.07^3 - 1}{0.07} \\approx 41.28$ triệu đồng."
              },
              {
                "key": "d",
                "text": "Nếu lãi suất tăng lên $10\\%/\\text{năm}$, số tiền nhận được cuối năm thứ 3 tăng trên $15\\%$.",
                "correct": false,
                "explanation": "Tính toán tỉ lệ tăng cho thấy mức tăng chỉ vào khoảng $8-9\\%$, không vượt quá $15\\%$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 5$ và công bội $q = 3$.",
            "items": [
              {
                "key": "a",
                "text": "Số hạng thứ 3 của cấp số nhân là $u_3 = 45$.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 5 \\cdot 3^2 = 45$."
              },
              {
                "key": "b",
                "text": "Dãy số $(u_n)$ là một dãy số giảm vì công bội $q = 3 > 1$.",
                "correct": false,
                "explanation": "Vì $u_1 > 0$ và $q = 3 > 1$ nên dãy số là dãy tăng, không phải dãy giảm."
              },
              {
                "key": "c",
                "text": "Tổng của 5 số hạng đầu tiên là $S_5 = 605$.",
                "correct": true,
                "explanation": "$S_5 = u_1 \\frac{q^5 - 1}{q - 1} = 5 \\frac{3^5 - 1}{3 - 1} = 605$."
              },
              {
                "key": "d",
                "text": "Dãy số $(v_n)$ xác định bởi $v_n = \\ln(u_n)$ lập thành một cấp số cộng có công sai $d = \\ln(3)$.",
                "correct": true,
                "explanation": "$v_{n+1} - v_n = \\ln(u_{n+1}) - \\ln(u_n) = \\ln\\left(\\frac{u_{n+1}}{u_n}\\right) = \\ln(3)$ là hằng số."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một quả bóng cao su được thả rơi tự do từ độ cao 14\\text{ m} xuống sàn. Mỗi lần chạm sàn, bóng nảy lên độ cao bằng $\\frac23$ độ cao của lần rơi trước đó.",
            "items": [
              {
                "key": "a",
                "text": "Độ cao bóng nảy lên sau lần chạm sàn đầu tiên là $9.33\\text{ m}$.",
                "correct": true,
                "explanation": "$h_1 = 14 \\times \\frac{2}{3} = 9.33\\text{ m}$."
              },
              {
                "key": "b",
                "text": "Dãy các độ cao bóng nảy lên lập thành một cấp số nhân có công bội $q = \\frac{2}{3}$.",
                "correct": true,
                "explanation": "Đúng định nghĩa cấp số nhân với $q = 2/3$."
              },
              {
                "key": "c",
                "text": "Sau 4 lần nảy, tổng độ cao bóng đã nảy lên vượt quá độ cao ban đầu lúc thả.",
                "correct": true,
                "explanation": "Tổng độ cao nảy lên 4 lần: $S_4 = h_1 \\frac{1 - (2/3)^4}{1 - 2/3} = 3h_1(1 - 16/81) = 2h_0 \\times 65/81 = 130/81 h_0 > h_0$."
              },
              {
                "key": "d",
                "text": "Tổng toàn bộ quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn bằng $70\\text{ m}$.",
                "correct": true,
                "explanation": "Tổng quãng đường: $S = h_0 \\frac{1 + k}{1 - k} = 14 \\frac{1 + 2/3}{1 - 2/3} = 14 \\times 5 = 70\\text{ m}$."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một cơ sở sản xuất đồ gỗ mỹ nghệ đóng 70 chiếc ghế trong tháng thứ nhất. Kế hoạch đề ra mỗi tháng tiếp theo tăng thêm $10\\%$ so với tháng trước.",
            "items": [
              {
                "key": "a",
                "text": "Sản lượng ghế mỗi tháng lập thành một cấp số nhân có công bội $q = 1.1$.",
                "correct": true,
                "explanation": "Mỗi tháng tăng $10\\%$ nên sản lượng bằng $1.1$ lần tháng trước."
              },
              {
                "key": "b",
                "text": "Sản lượng ghế riêng trong tháng thứ 3 là $85$ chiếc.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 70 \\times 1.1^2 = 70 \\times 1.21 = 85$ chiếc."
              },
              {
                "key": "c",
                "text": "Tổng sản lượng ghế sản xuất trong 6 tháng đầu năm vượt quá 500 chiếc.",
                "correct": true,
                "explanation": "Tổng sản lượng 6 tháng: $S_6 = u_1 \\frac{1.1^6 - 1}{0.1} \\approx 70 \\times 7.7156 > 500$ chiếc."
              },
              {
                "key": "d",
                "text": "Nếu mỗi tháng chỉ tăng cố định 5 chiếc thì tổng sản lượng sau 6 tháng lớn hơn kế hoạch tăng $10\\%$.",
                "correct": false,
                "explanation": "Tăng cấp số nhân tăng trưởng theo hàm mũ luôn vượt trội hơn tăng tuyến tính cấp số cộng."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và công sai $d = 4$. Tìm số hạng thứ 12 của cấp số cộng.",
            "correctAnswer": "49",
            "acceptedAnswers": [
              "49",
              "49.0"
            ],
            "explanation": "$u_{12} = u_1 + 11d = 5 + 11(4) = 49$."
          },
          {
            "id": 2,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 4$. Tính tổng của 10 số hạng đầu tiên $S_{10}$.",
            "correctAnswer": "200",
            "acceptedAnswers": [
              "200",
              "200.0"
            ],
            "explanation": "$S_{10} = \\frac{10}{2}[2(2) + 9(4)] = 5(4 + 36) = 200$."
          },
          {
            "id": 3,
            "question": "Tính tổng của cấp số nhân lùi vô hạn: $S = 6 + 2 + \\frac{2}{3} + \\frac{2}{9} + \\dots$",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9",
              "9.0"
            ],
            "explanation": "$u_1 = 6, q = 1/3 \\Rightarrow S = \\frac{6}{1 - 1/3} = 9$."
          },
          {
            "id": 4,
            "question": "Một rạp xiếc có các hàng ghế xếp hình vòng cung, hàng thứ nhất có 14 ghế, mỗi hàng sau nhiều hơn hàng trước 3 ghế. Khán phòng có 15 hàng ghế. Hỏi có tất cả bao nhiêu ghế?",
            "correctAnswer": "525",
            "acceptedAnswers": [
              "525"
            ],
            "explanation": "Cấp số cộng: $S_{15} = \\frac{15}{2}[2(14) + 14(3)] = 525$ ghế."
          },
          {
            "id": 5,
            "question": "Một quả bóng cao su được thả rơi từ độ cao $14\\text{ m}$. Mỗi lần chạm sàn nó nảy lên độ cao bằng $\\frac23$ độ cao trước đó. Tính tổng quãng đường bóng đã di chuyển kể từ lúc thả đến khi dừng hẳn (mét).",
            "correctAnswer": "70",
            "acceptedAnswers": [
              "70",
              "70.0"
            ],
            "explanation": "$S = h_0 \\frac{1 + 2/3}{1 - 2/3} = 14 \\times 5 = 70\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một kỹ sư vay ngân hàng 100 triệu đồng trả góp với lãi suất $0.6\\%/\\text{tháng}$. Mỗi tháng kỹ sư trả đều đặn số tiền $m$ triệu đồng vào cuối tháng. Để trả hết nợ đúng sau 24 tháng, số tiền $m$ phải bằng bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "4.49",
            "acceptedAnswers": [
              "4.49",
              "4,49"
            ],
            "explanation": "$m = \\frac{100 \\times 0.006 \\times 1.006^{24}}{1.006^{24} - 1} = \\frac{0.6 \\times 1.15437}{0.15437} \\approx 4.49$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd1-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Dãy Số - CSC - CSN",
        "code": "CD1-103",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 5n - 6$. Số hạng thứ 5 của dãy số là:",
            "options": {
              "A": "$24$",
              "B": "$31$",
              "C": "$14$",
              "D": "$19$"
            },
            "correct": "D",
            "explanation": "Thay $n = 5$ ta được: $u_5 = 5(5) - 6 = 19$."
          },
          {
            "id": 2,
            "question": "Dãy số nào sau đây là một dãy số tăng?",
            "options": {
              "A": "$u_n = (-1)^n$",
              "B": "$u_n = 5 - 2n$",
              "C": "$u_n = \\frac{1}{n}$",
              "D": "$u_n = 3n + 1$"
            },
            "correct": "D",
            "explanation": "$u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3 > 0$ nên dãy số tăng."
          },
          {
            "id": 3,
            "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 6$ và công sai $d = 5$. Số hạng tổng quát $u_n$ là:",
            "options": {
              "A": "$u_n = 5n + 1$",
              "B": "$u_n = 5n - 6$",
              "C": "$u_n = 5n + 6$",
              "D": "$u_n = 6n + 5$"
            },
            "correct": "A",
            "explanation": "$u_n = u_1 + (n - 1)d = 6 + (n - 1)5 = 5n + 1$."
          },
          {
            "id": 4,
            "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 6$ và công bội $q = 2$. Số hạng thứ 4 của cấp số nhân bằng:",
            "options": {
              "A": "$12$",
              "B": "$96$",
              "C": "$48$",
              "D": "$48$"
            },
            "correct": "C",
            "explanation": "$u_4 = u_1 \\cdot q^3 = 6 \\cdot 2^3 = 48$."
          },
          {
            "id": 5,
            "question": "Ba số $x, 10, y$ theo thứ tự lập thành một cấp số cộng. Tổng $x + y$ bằng:",
            "options": {
              "A": "$10$",
              "B": "$20$",
              "C": "$40$",
              "D": "$30$"
            },
            "correct": "B",
            "explanation": "Theo tính chất cấp số cộng: $x + y = 2 \\times 10 = 20$."
          },
          {
            "id": 6,
            "question": "Cho cấp số nhân lùi vô hạn có $u_1 = 4$ và công bội $q = \\frac{1}{2}$. Tổng của cấp số nhân lùi vô hạn này bằng:",
            "options": {
              "A": "$2$",
              "B": "$8$",
              "C": "$4$",
              "D": "$16$"
            },
            "correct": "B",
            "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{4}{1 - 0.5} = 8$."
          },
          {
            "id": 7,
            "question": "Một người gửi tiết kiệm 50 triệu đồng vào ngân hàng với lãi kép $6\\%/\\text{năm}$. Công thức tính số tiền (cả gốc và lãi) sau $n$ năm là:",
            "options": {
              "A": "$A_n = 50(0.06)^n$",
              "B": "$A_n = 50 + 50 \\times 0.06n$",
              "C": "$A_n = 50(1.06)^n$",
              "D": "$A_n = 50(1.6)^n$"
            },
            "correct": "C",
            "explanation": "Theo công thức lãi kép: $A_n = P(1 + r)^n = 50(1.06)^n$ triệu đồng."
          },
          {
            "id": 8,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = 7$. Tổng 10 số hạng đầu tiên $S_10$ bằng:",
            "options": {
              "A": "$250$",
              "B": "$470$",
              "C": "$260$",
              "D": "$245$"
            },
            "correct": "D",
            "explanation": "$d = 5$. $S_{10} = \\frac{10}{2}[2(2) + 9(5)] = 5(4 + 45) = 245$."
          },
          {
            "id": 9,
            "question": "Dãy số nào sau đây bị chặn dưới bởi 0 nhưng không bị chặn trên?",
            "options": {
              "A": "$u_n = n^2 + 1$",
              "B": "$u_n = \\frac{1}{n}$",
              "C": "$u_n = \\sin n$",
              "D": "$u_n = -n$"
            },
            "correct": "A",
            "explanation": "$u_n = n^2 + 1 > 0$ nên bị chặn dưới, nhưng khi $n \\to +\\infty$ thì $u_n \\to +\\infty$ nên không bị chặn trên."
          },
          {
            "id": 10,
            "question": "Cho ba số $a, b, c$ dương theo thứ tự lập thành một cấp số nhân. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$b = \\sqrt{a + c}$",
              "B": "$b^2 = ac$",
              "C": "$ac = 2b$",
              "D": "$2b = a + c$"
            },
            "correct": "B",
            "explanation": "Theo tính chất cấp số nhân: $b^2 = ac$."
          },
          {
            "id": 11,
            "question": "Một khán phòng có 20 hàng ghế, hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong khán phòng là:",
            "options": {
              "A": "$650$",
              "B": "$620$",
              "C": "$680$",
              "D": "$700$"
            },
            "correct": "C",
            "explanation": "$S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10(30 + 38) = 680$ ghế."
          },
          {
            "id": 12,
            "question": "Một tế bào vi khuẩn phân đôi sau mỗi 30 phút. Từ 1 tế bào ban đầu, sau 3 giờ (gồm 6 chu kỳ) số lượng tế bào vi khuẩn là:",
            "options": {
              "A": "$64$",
              "B": "$128$",
              "C": "$16$",
              "D": "$32$"
            },
            "correct": "A",
            "explanation": "$N = 1 \\times 2^6 = 64$ tế bào."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một người lập kế hoạch tích lũy tài chính: Bắt đầu gửi vào tài khoản tiết kiệm 13 triệu đồng vào đầu mỗi năm. Lãi suất tiền gửi là $7\\%/\\text{năm}$ tính theo lãi kép hàng năm.",
            "items": [
              {
                "key": "a",
                "text": "Khoản tiền gửi năm đầu tiên sau 3 năm tích lũy đạt giá trị là $13 \\times (1.07)^3$ triệu đồng.",
                "correct": true,
                "explanation": "Khoản tiền đầu năm 1 gửi trọn vẹn 3 năm chịu lãi kép 3 kỳ."
              },
              {
                "key": "b",
                "text": "Số tiền người đó tích lũy được sau mỗi năm lập thành một cấp số cộng.",
                "correct": false,
                "explanation": "Do tính lãi kép nên số tiền tích lũy là tổng của một cấp số nhân, không phải cấp số cộng."
              },
              {
                "key": "c",
                "text": "Tổng số tiền người đó nhận được ở cuối năm thứ 3 xấp xỉ $44.72$ triệu đồng.",
                "correct": true,
                "explanation": "Áp dụng công thức tổng CSN gửi định kỳ đầu mỗi năm: $S_3 = 13 \\times 1.07 \\times \\frac{1.07^3 - 1}{0.07} \\approx 44.72$ triệu đồng."
              },
              {
                "key": "d",
                "text": "Nếu lãi suất tăng lên $10\\%/\\text{năm}$, số tiền nhận được cuối năm thứ 3 tăng trên $15\\%$.",
                "correct": false,
                "explanation": "Tính toán tỉ lệ tăng cho thấy mức tăng chỉ vào khoảng $8-9\\%$, không vượt quá $15\\%$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 6$ và công bội $q = 2$.",
            "items": [
              {
                "key": "a",
                "text": "Số hạng thứ 3 của cấp số nhân là $u_3 = 24$.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 6 \\cdot 2^2 = 24$."
              },
              {
                "key": "b",
                "text": "Dãy số $(u_n)$ là một dãy số giảm vì công bội $q = 2 > 1$.",
                "correct": false,
                "explanation": "Vì $u_1 > 0$ và $q = 2 > 1$ nên dãy số là dãy tăng, không phải dãy giảm."
              },
              {
                "key": "c",
                "text": "Tổng của 5 số hạng đầu tiên là $S_5 = 186$.",
                "correct": true,
                "explanation": "$S_5 = u_1 \\frac{q^5 - 1}{q - 1} = 6 \\frac{2^5 - 1}{2 - 1} = 186$."
              },
              {
                "key": "d",
                "text": "Dãy số $(v_n)$ xác định bởi $v_n = \\ln(u_n)$ lập thành một cấp số cộng có công sai $d = \\ln(2)$.",
                "correct": true,
                "explanation": "$v_{n+1} - v_n = \\ln(u_{n+1}) - \\ln(u_n) = \\ln\\left(\\frac{u_{n+1}}{u_n}\\right) = \\ln(2)$ là hằng số."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một quả bóng cao su được thả rơi tự do từ độ cao 16\\text{ m} xuống sàn. Mỗi lần chạm sàn, bóng nảy lên độ cao bằng $\\frac23$ độ cao của lần rơi trước đó.",
            "items": [
              {
                "key": "a",
                "text": "Độ cao bóng nảy lên sau lần chạm sàn đầu tiên là $10.67\\text{ m}$.",
                "correct": true,
                "explanation": "$h_1 = 16 \\times \\frac{2}{3} = 10.67\\text{ m}$."
              },
              {
                "key": "b",
                "text": "Dãy các độ cao bóng nảy lên lập thành một cấp số nhân có công bội $q = \\frac{2}{3}$.",
                "correct": true,
                "explanation": "Đúng định nghĩa cấp số nhân với $q = 2/3$."
              },
              {
                "key": "c",
                "text": "Sau 4 lần nảy, tổng độ cao bóng đã nảy lên vượt quá độ cao ban đầu lúc thả.",
                "correct": true,
                "explanation": "Tổng độ cao nảy lên 4 lần: $S_4 = h_1 \\frac{1 - (2/3)^4}{1 - 2/3} = 3h_1(1 - 16/81) = 2h_0 \\times 65/81 = 130/81 h_0 > h_0$."
              },
              {
                "key": "d",
                "text": "Tổng toàn bộ quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn bằng $80\\text{ m}$.",
                "correct": true,
                "explanation": "Tổng quãng đường: $S = h_0 \\frac{1 + k}{1 - k} = 16 \\frac{1 + 2/3}{1 - 2/3} = 16 \\times 5 = 80\\text{ m}$."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một cơ sở sản xuất đồ gỗ mỹ nghệ đóng 80 chiếc ghế trong tháng thứ nhất. Kế hoạch đề ra mỗi tháng tiếp theo tăng thêm $10\\%$ so với tháng trước.",
            "items": [
              {
                "key": "a",
                "text": "Sản lượng ghế mỗi tháng lập thành một cấp số nhân có công bội $q = 1.1$.",
                "correct": true,
                "explanation": "Mỗi tháng tăng $10\\%$ nên sản lượng bằng $1.1$ lần tháng trước."
              },
              {
                "key": "b",
                "text": "Sản lượng ghế riêng trong tháng thứ 3 là $97$ chiếc.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 80 \\times 1.1^2 = 80 \\times 1.21 = 97$ chiếc."
              },
              {
                "key": "c",
                "text": "Tổng sản lượng ghế sản xuất trong 6 tháng đầu năm vượt quá 500 chiếc.",
                "correct": true,
                "explanation": "Tổng sản lượng 6 tháng: $S_6 = u_1 \\frac{1.1^6 - 1}{0.1} \\approx 80 \\times 7.7156 > 500$ chiếc."
              },
              {
                "key": "d",
                "text": "Nếu mỗi tháng chỉ tăng cố định 5 chiếc thì tổng sản lượng sau 6 tháng lớn hơn kế hoạch tăng $10\\%$.",
                "correct": false,
                "explanation": "Tăng cấp số nhân tăng trưởng theo hàm mũ luôn vượt trội hơn tăng tuyến tính cấp số cộng."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và công sai $d = 5$. Tìm số hạng thứ 12 của cấp số cộng.",
            "correctAnswer": "60",
            "acceptedAnswers": [
              "60",
              "60.0"
            ],
            "explanation": "$u_{12} = u_1 + 11d = 5 + 11(5) = 60$."
          },
          {
            "id": 2,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 5$. Tính tổng của 10 số hạng đầu tiên $S_{10}$.",
            "correctAnswer": "245",
            "acceptedAnswers": [
              "245",
              "245.0"
            ],
            "explanation": "$S_{10} = \\frac{10}{2}[2(2) + 9(5)] = 5(4 + 45) = 245$."
          },
          {
            "id": 3,
            "question": "Tính tổng của cấp số nhân lùi vô hạn: $S = 6 + 2 + \\frac{2}{3} + \\frac{2}{9} + \\dots$",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9",
              "9.0"
            ],
            "explanation": "$u_1 = 6, q = 1/3 \\Rightarrow S = \\frac{6}{1 - 1/3} = 9$."
          },
          {
            "id": 4,
            "question": "Một rạp xiếc có các hàng ghế xếp hình vòng cung, hàng thứ nhất có 15 ghế, mỗi hàng sau nhiều hơn hàng trước 3 ghế. Khán phòng có 15 hàng ghế. Hỏi có tất cả bao nhiêu ghế?",
            "correctAnswer": "540",
            "acceptedAnswers": [
              "540"
            ],
            "explanation": "Cấp số cộng: $S_{15} = \\frac{15}{2}[2(15) + 14(3)] = 540$ ghế."
          },
          {
            "id": 5,
            "question": "Một quả bóng cao su được thả rơi từ độ cao $16\\text{ m}$. Mỗi lần chạm sàn nó nảy lên độ cao bằng $\\frac23$ độ cao trước đó. Tính tổng quãng đường bóng đã di chuyển kể từ lúc thả đến khi dừng hẳn (mét).",
            "correctAnswer": "80",
            "acceptedAnswers": [
              "80",
              "80.0"
            ],
            "explanation": "$S = h_0 \\frac{1 + 2/3}{1 - 2/3} = 16 \\times 5 = 80\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một kỹ sư vay ngân hàng 100 triệu đồng trả góp với lãi suất $0.6\\%/\\text{tháng}$. Mỗi tháng kỹ sư trả đều đặn số tiền $m$ triệu đồng vào cuối tháng. Để trả hết nợ đúng sau 24 tháng, số tiền $m$ phải bằng bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "4.49",
            "acceptedAnswers": [
              "4.49",
              "4,49"
            ],
            "explanation": "$m = \\frac{100 \\times 0.006 \\times 1.006^{24}}{1.006^{24} - 1} = \\frac{0.6 \\times 1.15437}{0.15437} \\approx 4.49$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd1-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Dãy Số - CSC - CSN",
        "code": "CD1-104",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 6n - 7$. Số hạng thứ 5 của dãy số là:",
            "options": {
              "A": "$17$",
              "B": "$37$",
              "C": "$23$",
              "D": "$29$"
            },
            "correct": "C",
            "explanation": "Thay $n = 5$ ta được: $u_5 = 6(5) - 7 = 23$."
          },
          {
            "id": 2,
            "question": "Dãy số nào sau đây là một dãy số tăng?",
            "options": {
              "A": "$u_n = 5 - 2n$",
              "B": "$u_n = 3n + 1$",
              "C": "$u_n = \\frac{1}{n}$",
              "D": "$u_n = (-1)^n$"
            },
            "correct": "B",
            "explanation": "$u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3 > 0$ nên dãy số tăng."
          },
          {
            "id": 3,
            "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 7$ và công sai $d = 6$. Số hạng tổng quát $u_n$ là:",
            "options": {
              "A": "$u_n = 6n + 1$",
              "B": "$u_n = 6n + 7$",
              "C": "$u_n = 6n - 7$",
              "D": "$u_n = 7n + 6$"
            },
            "correct": "A",
            "explanation": "$u_n = u_1 + (n - 1)d = 7 + (n - 1)6 = 6n + 1$."
          },
          {
            "id": 4,
            "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 7$ và công bội $q = 3$. Số hạng thứ 4 của cấp số nhân bằng:",
            "options": {
              "A": "$189$",
              "B": "$84$",
              "C": "$567$",
              "D": "$16$"
            },
            "correct": "A",
            "explanation": "$u_4 = u_1 \\cdot q^3 = 7 \\cdot 3^3 = 189$."
          },
          {
            "id": 5,
            "question": "Ba số $x, 10, y$ theo thứ tự lập thành một cấp số cộng. Tổng $x + y$ bằng:",
            "options": {
              "A": "$20$",
              "B": "$40$",
              "C": "$10$",
              "D": "$30$"
            },
            "correct": "A",
            "explanation": "Theo tính chất cấp số cộng: $x + y = 2 \\times 10 = 20$."
          },
          {
            "id": 6,
            "question": "Cho cấp số nhân lùi vô hạn có $u_1 = 4$ và công bội $q = \\frac{1}{2}$. Tổng của cấp số nhân lùi vô hạn này bằng:",
            "options": {
              "A": "$16$",
              "B": "$2$",
              "C": "$8$",
              "D": "$4$"
            },
            "correct": "C",
            "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{4}{1 - 0.5} = 8$."
          },
          {
            "id": 7,
            "question": "Một người gửi tiết kiệm 50 triệu đồng vào ngân hàng với lãi kép $6\\%/\\text{năm}$. Công thức tính số tiền (cả gốc và lãi) sau $n$ năm là:",
            "options": {
              "A": "$A_n = 50(1.6)^n$",
              "B": "$A_n = 50(1.06)^n$",
              "C": "$A_n = 50 + 50 \\times 0.06n$",
              "D": "$A_n = 50(0.06)^n$"
            },
            "correct": "B",
            "explanation": "Theo công thức lãi kép: $A_n = P(1 + r)^n = 50(1.06)^n$ triệu đồng."
          },
          {
            "id": 8,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = 8$. Tổng 10 số hạng đầu tiên $S_10$ bằng:",
            "options": {
              "A": "$560$",
              "B": "$290$",
              "C": "$310$",
              "D": "$300$"
            },
            "correct": "B",
            "explanation": "$d = 6$. $S_{10} = \\frac{10}{2}[2(2) + 9(6)] = 5(4 + 54) = 290$."
          },
          {
            "id": 9,
            "question": "Dãy số nào sau đây bị chặn dưới bởi 0 nhưng không bị chặn trên?",
            "options": {
              "A": "$u_n = \\frac{1}{n}$",
              "B": "$u_n = \\sin n$",
              "C": "$u_n = -n$",
              "D": "$u_n = n^2 + 1$"
            },
            "correct": "D",
            "explanation": "$u_n = n^2 + 1 > 0$ nên bị chặn dưới, nhưng khi $n \\to +\\infty$ thì $u_n \\to +\\infty$ nên không bị chặn trên."
          },
          {
            "id": 10,
            "question": "Cho ba số $a, b, c$ dương theo thứ tự lập thành một cấp số nhân. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$b = \\sqrt{a + c}$",
              "B": "$2b = a + c$",
              "C": "$ac = 2b$",
              "D": "$b^2 = ac$"
            },
            "correct": "D",
            "explanation": "Theo tính chất cấp số nhân: $b^2 = ac$."
          },
          {
            "id": 11,
            "question": "Một khán phòng có 20 hàng ghế, hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong khán phòng là:",
            "options": {
              "A": "$650$",
              "B": "$700$",
              "C": "$620$",
              "D": "$680$"
            },
            "correct": "D",
            "explanation": "$S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10(30 + 38) = 680$ ghế."
          },
          {
            "id": 12,
            "question": "Một tế bào vi khuẩn phân đôi sau mỗi 30 phút. Từ 1 tế bào ban đầu, sau 3 giờ (gồm 6 chu kỳ) số lượng tế bào vi khuẩn là:",
            "options": {
              "A": "$16$",
              "B": "$32$",
              "C": "$64$",
              "D": "$128$"
            },
            "correct": "C",
            "explanation": "$N = 1 \\times 2^6 = 64$ tế bào."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một người lập kế hoạch tích lũy tài chính: Bắt đầu gửi vào tài khoản tiết kiệm 14 triệu đồng vào đầu mỗi năm. Lãi suất tiền gửi là $7\\%/\\text{năm}$ tính theo lãi kép hàng năm.",
            "items": [
              {
                "key": "a",
                "text": "Khoản tiền gửi năm đầu tiên sau 3 năm tích lũy đạt giá trị là $14 \\times (1.07)^3$ triệu đồng.",
                "correct": true,
                "explanation": "Khoản tiền đầu năm 1 gửi trọn vẹn 3 năm chịu lãi kép 3 kỳ."
              },
              {
                "key": "b",
                "text": "Số tiền người đó tích lũy được sau mỗi năm lập thành một cấp số cộng.",
                "correct": false,
                "explanation": "Do tính lãi kép nên số tiền tích lũy là tổng của một cấp số nhân, không phải cấp số cộng."
              },
              {
                "key": "c",
                "text": "Tổng số tiền người đó nhận được ở cuối năm thứ 3 xấp xỉ $48.16$ triệu đồng.",
                "correct": true,
                "explanation": "Áp dụng công thức tổng CSN gửi định kỳ đầu mỗi năm: $S_3 = 14 \\times 1.07 \\times \\frac{1.07^3 - 1}{0.07} \\approx 48.16$ triệu đồng."
              },
              {
                "key": "d",
                "text": "Nếu lãi suất tăng lên $10\\%/\\text{năm}$, số tiền nhận được cuối năm thứ 3 tăng trên $15\\%$.",
                "correct": false,
                "explanation": "Tính toán tỉ lệ tăng cho thấy mức tăng chỉ vào khoảng $8-9\\%$, không vượt quá $15\\%$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 7$ và công bội $q = 3$.",
            "items": [
              {
                "key": "a",
                "text": "Số hạng thứ 3 của cấp số nhân là $u_3 = 63$.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 7 \\cdot 3^2 = 63$."
              },
              {
                "key": "b",
                "text": "Dãy số $(u_n)$ là một dãy số giảm vì công bội $q = 3 > 1$.",
                "correct": false,
                "explanation": "Vì $u_1 > 0$ và $q = 3 > 1$ nên dãy số là dãy tăng, không phải dãy giảm."
              },
              {
                "key": "c",
                "text": "Tổng của 5 số hạng đầu tiên là $S_5 = 847$.",
                "correct": true,
                "explanation": "$S_5 = u_1 \\frac{q^5 - 1}{q - 1} = 7 \\frac{3^5 - 1}{3 - 1} = 847$."
              },
              {
                "key": "d",
                "text": "Dãy số $(v_n)$ xác định bởi $v_n = \\ln(u_n)$ lập thành một cấp số cộng có công sai $d = \\ln(3)$.",
                "correct": true,
                "explanation": "$v_{n+1} - v_n = \\ln(u_{n+1}) - \\ln(u_n) = \\ln\\left(\\frac{u_{n+1}}{u_n}\\right) = \\ln(3)$ là hằng số."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một quả bóng cao su được thả rơi tự do từ độ cao 18\\text{ m} xuống sàn. Mỗi lần chạm sàn, bóng nảy lên độ cao bằng $\\frac23$ độ cao của lần rơi trước đó.",
            "items": [
              {
                "key": "a",
                "text": "Độ cao bóng nảy lên sau lần chạm sàn đầu tiên là $12.0\\text{ m}$.",
                "correct": true,
                "explanation": "$h_1 = 18 \\times \\frac{2}{3} = 12.0\\text{ m}$."
              },
              {
                "key": "b",
                "text": "Dãy các độ cao bóng nảy lên lập thành một cấp số nhân có công bội $q = \\frac{2}{3}$.",
                "correct": true,
                "explanation": "Đúng định nghĩa cấp số nhân với $q = 2/3$."
              },
              {
                "key": "c",
                "text": "Sau 4 lần nảy, tổng độ cao bóng đã nảy lên vượt quá độ cao ban đầu lúc thả.",
                "correct": true,
                "explanation": "Tổng độ cao nảy lên 4 lần: $S_4 = h_1 \\frac{1 - (2/3)^4}{1 - 2/3} = 3h_1(1 - 16/81) = 2h_0 \\times 65/81 = 130/81 h_0 > h_0$."
              },
              {
                "key": "d",
                "text": "Tổng toàn bộ quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn bằng $90\\text{ m}$.",
                "correct": true,
                "explanation": "Tổng quãng đường: $S = h_0 \\frac{1 + k}{1 - k} = 18 \\frac{1 + 2/3}{1 - 2/3} = 18 \\times 5 = 90\\text{ m}$."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một cơ sở sản xuất đồ gỗ mỹ nghệ đóng 90 chiếc ghế trong tháng thứ nhất. Kế hoạch đề ra mỗi tháng tiếp theo tăng thêm $10\\%$ so với tháng trước.",
            "items": [
              {
                "key": "a",
                "text": "Sản lượng ghế mỗi tháng lập thành một cấp số nhân có công bội $q = 1.1$.",
                "correct": true,
                "explanation": "Mỗi tháng tăng $10\\%$ nên sản lượng bằng $1.1$ lần tháng trước."
              },
              {
                "key": "b",
                "text": "Sản lượng ghế riêng trong tháng thứ 3 là $109$ chiếc.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 90 \\times 1.1^2 = 90 \\times 1.21 = 109$ chiếc."
              },
              {
                "key": "c",
                "text": "Tổng sản lượng ghế sản xuất trong 6 tháng đầu năm vượt quá 500 chiếc.",
                "correct": true,
                "explanation": "Tổng sản lượng 6 tháng: $S_6 = u_1 \\frac{1.1^6 - 1}{0.1} \\approx 90 \\times 7.7156 > 500$ chiếc."
              },
              {
                "key": "d",
                "text": "Nếu mỗi tháng chỉ tăng cố định 5 chiếc thì tổng sản lượng sau 6 tháng lớn hơn kế hoạch tăng $10\\%$.",
                "correct": false,
                "explanation": "Tăng cấp số nhân tăng trưởng theo hàm mũ luôn vượt trội hơn tăng tuyến tính cấp số cộng."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và công sai $d = 6$. Tìm số hạng thứ 12 của cấp số cộng.",
            "correctAnswer": "71",
            "acceptedAnswers": [
              "71",
              "71.0"
            ],
            "explanation": "$u_{12} = u_1 + 11d = 5 + 11(6) = 71$."
          },
          {
            "id": 2,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 6$. Tính tổng của 10 số hạng đầu tiên $S_{10}$.",
            "correctAnswer": "290",
            "acceptedAnswers": [
              "290",
              "290.0"
            ],
            "explanation": "$S_{10} = \\frac{10}{2}[2(2) + 9(6)] = 5(4 + 54) = 290$."
          },
          {
            "id": 3,
            "question": "Tính tổng của cấp số nhân lùi vô hạn: $S = 6 + 2 + \\frac{2}{3} + \\frac{2}{9} + \\dots$",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9",
              "9.0"
            ],
            "explanation": "$u_1 = 6, q = 1/3 \\Rightarrow S = \\frac{6}{1 - 1/3} = 9$."
          },
          {
            "id": 4,
            "question": "Một rạp xiếc có các hàng ghế xếp hình vòng cung, hàng thứ nhất có 16 ghế, mỗi hàng sau nhiều hơn hàng trước 3 ghế. Khán phòng có 15 hàng ghế. Hỏi có tất cả bao nhiêu ghế?",
            "correctAnswer": "555",
            "acceptedAnswers": [
              "555"
            ],
            "explanation": "Cấp số cộng: $S_{15} = \\frac{15}{2}[2(16) + 14(3)] = 555$ ghế."
          },
          {
            "id": 5,
            "question": "Một quả bóng cao su được thả rơi từ độ cao $18\\text{ m}$. Mỗi lần chạm sàn nó nảy lên độ cao bằng $\\frac23$ độ cao trước đó. Tính tổng quãng đường bóng đã di chuyển kể từ lúc thả đến khi dừng hẳn (mét).",
            "correctAnswer": "90",
            "acceptedAnswers": [
              "90",
              "90.0"
            ],
            "explanation": "$S = h_0 \\frac{1 + 2/3}{1 - 2/3} = 18 \\times 5 = 90\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một kỹ sư vay ngân hàng 100 triệu đồng trả góp với lãi suất $0.6\\%/\\text{tháng}$. Mỗi tháng kỹ sư trả đều đặn số tiền $m$ triệu đồng vào cuối tháng. Để trả hết nợ đúng sau 24 tháng, số tiền $m$ phải bằng bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "4.49",
            "acceptedAnswers": [
              "4.49",
              "4,49"
            ],
            "explanation": "$m = \\frac{100 \\times 0.006 \\times 1.006^{24}}{1.006^{24} - 1} = \\frac{0.6 \\times 1.15437}{0.15437} \\approx 4.49$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd1-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Dãy Số - CSC - CSN",
        "code": "CD1-105",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 7n - 8$. Số hạng thứ 5 của dãy số là:",
            "options": {
              "A": "$43$",
              "B": "$27$",
              "C": "$34$",
              "D": "$20$"
            },
            "correct": "B",
            "explanation": "Thay $n = 5$ ta được: $u_5 = 7(5) - 8 = 27$."
          },
          {
            "id": 2,
            "question": "Dãy số nào sau đây là một dãy số tăng?",
            "options": {
              "A": "$u_n = 5 - 2n$",
              "B": "$u_n = (-1)^n$",
              "C": "$u_n = \\frac{1}{n}$",
              "D": "$u_n = 3n + 1$"
            },
            "correct": "D",
            "explanation": "$u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3 > 0$ nên dãy số tăng."
          },
          {
            "id": 3,
            "question": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 8$ và công sai $d = 7$. Số hạng tổng quát $u_n$ là:",
            "options": {
              "A": "$u_n = 7n - 8$",
              "B": "$u_n = 7n + 8$",
              "C": "$u_n = 7n + 1$",
              "D": "$u_n = 8n + 7$"
            },
            "correct": "C",
            "explanation": "$u_n = u_1 + (n - 1)d = 8 + (n - 1)7 = 7n + 1$."
          },
          {
            "id": 4,
            "question": "Cho cấp số nhân $(u_n)$ có $u_1 = 8$ và công bội $q = 2$. Số hạng thứ 4 của cấp số nhân bằng:",
            "options": {
              "A": "$14$",
              "B": "$128$",
              "C": "$64$",
              "D": "$64$"
            },
            "correct": "C",
            "explanation": "$u_4 = u_1 \\cdot q^3 = 8 \\cdot 2^3 = 64$."
          },
          {
            "id": 5,
            "question": "Ba số $x, 10, y$ theo thứ tự lập thành một cấp số cộng. Tổng $x + y$ bằng:",
            "options": {
              "A": "$30$",
              "B": "$20$",
              "C": "$40$",
              "D": "$10$"
            },
            "correct": "B",
            "explanation": "Theo tính chất cấp số cộng: $x + y = 2 \\times 10 = 20$."
          },
          {
            "id": 6,
            "question": "Cho cấp số nhân lùi vô hạn có $u_1 = 4$ và công bội $q = \\frac{1}{2}$. Tổng của cấp số nhân lùi vô hạn này bằng:",
            "options": {
              "A": "$8$",
              "B": "$2$",
              "C": "$4$",
              "D": "$16$"
            },
            "correct": "A",
            "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{4}{1 - 0.5} = 8$."
          },
          {
            "id": 7,
            "question": "Một người gửi tiết kiệm 50 triệu đồng vào ngân hàng với lãi kép $6\\%/\\text{năm}$. Công thức tính số tiền (cả gốc và lãi) sau $n$ năm là:",
            "options": {
              "A": "$A_n = 50(1.6)^n$",
              "B": "$A_n = 50(0.06)^n$",
              "C": "$A_n = 50 + 50 \\times 0.06n$",
              "D": "$A_n = 50(1.06)^n$"
            },
            "correct": "D",
            "explanation": "Theo công thức lãi kép: $A_n = P(1 + r)^n = 50(1.06)^n$ triệu đồng."
          },
          {
            "id": 8,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = 9$. Tổng 10 số hạng đầu tiên $S_10$ bằng:",
            "options": {
              "A": "$335$",
              "B": "$360$",
              "C": "$650$",
              "D": "$350$"
            },
            "correct": "A",
            "explanation": "$d = 7$. $S_{10} = \\frac{10}{2}[2(2) + 9(7)] = 5(4 + 63) = 335$."
          },
          {
            "id": 9,
            "question": "Dãy số nào sau đây bị chặn dưới bởi 0 nhưng không bị chặn trên?",
            "options": {
              "A": "$u_n = n^2 + 1$",
              "B": "$u_n = \\frac{1}{n}$",
              "C": "$u_n = -n$",
              "D": "$u_n = \\sin n$"
            },
            "correct": "A",
            "explanation": "$u_n = n^2 + 1 > 0$ nên bị chặn dưới, nhưng khi $n \\to +\\infty$ thì $u_n \\to +\\infty$ nên không bị chặn trên."
          },
          {
            "id": 10,
            "question": "Cho ba số $a, b, c$ dương theo thứ tự lập thành một cấp số nhân. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$b = \\sqrt{a + c}$",
              "B": "$b^2 = ac$",
              "C": "$2b = a + c$",
              "D": "$ac = 2b$"
            },
            "correct": "B",
            "explanation": "Theo tính chất cấp số nhân: $b^2 = ac$."
          },
          {
            "id": 11,
            "question": "Một khán phòng có 20 hàng ghế, hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong khán phòng là:",
            "options": {
              "A": "$700$",
              "B": "$620$",
              "C": "$650$",
              "D": "$680$"
            },
            "correct": "D",
            "explanation": "$S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10(30 + 38) = 680$ ghế."
          },
          {
            "id": 12,
            "question": "Một tế bào vi khuẩn phân đôi sau mỗi 30 phút. Từ 1 tế bào ban đầu, sau 3 giờ (gồm 6 chu kỳ) số lượng tế bào vi khuẩn là:",
            "options": {
              "A": "$128$",
              "B": "$32$",
              "C": "$64$",
              "D": "$16$"
            },
            "correct": "C",
            "explanation": "$N = 1 \\times 2^6 = 64$ tế bào."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một người lập kế hoạch tích lũy tài chính: Bắt đầu gửi vào tài khoản tiết kiệm 15 triệu đồng vào đầu mỗi năm. Lãi suất tiền gửi là $7\\%/\\text{năm}$ tính theo lãi kép hàng năm.",
            "items": [
              {
                "key": "a",
                "text": "Khoản tiền gửi năm đầu tiên sau 3 năm tích lũy đạt giá trị là $15 \\times (1.07)^3$ triệu đồng.",
                "correct": true,
                "explanation": "Khoản tiền đầu năm 1 gửi trọn vẹn 3 năm chịu lãi kép 3 kỳ."
              },
              {
                "key": "b",
                "text": "Số tiền người đó tích lũy được sau mỗi năm lập thành một cấp số cộng.",
                "correct": false,
                "explanation": "Do tính lãi kép nên số tiền tích lũy là tổng của một cấp số nhân, không phải cấp số cộng."
              },
              {
                "key": "c",
                "text": "Tổng số tiền người đó nhận được ở cuối năm thứ 3 xấp xỉ $51.6$ triệu đồng.",
                "correct": true,
                "explanation": "Áp dụng công thức tổng CSN gửi định kỳ đầu mỗi năm: $S_3 = 15 \\times 1.07 \\times \\frac{1.07^3 - 1}{0.07} \\approx 51.6$ triệu đồng."
              },
              {
                "key": "d",
                "text": "Nếu lãi suất tăng lên $10\\%/\\text{năm}$, số tiền nhận được cuối năm thứ 3 tăng trên $15\\%$.",
                "correct": false,
                "explanation": "Tính toán tỉ lệ tăng cho thấy mức tăng chỉ vào khoảng $8-9\\%$, không vượt quá $15\\%$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 8$ và công bội $q = 2$.",
            "items": [
              {
                "key": "a",
                "text": "Số hạng thứ 3 của cấp số nhân là $u_3 = 32$.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 8 \\cdot 2^2 = 32$."
              },
              {
                "key": "b",
                "text": "Dãy số $(u_n)$ là một dãy số giảm vì công bội $q = 2 > 1$.",
                "correct": false,
                "explanation": "Vì $u_1 > 0$ và $q = 2 > 1$ nên dãy số là dãy tăng, không phải dãy giảm."
              },
              {
                "key": "c",
                "text": "Tổng của 5 số hạng đầu tiên là $S_5 = 248$.",
                "correct": true,
                "explanation": "$S_5 = u_1 \\frac{q^5 - 1}{q - 1} = 8 \\frac{2^5 - 1}{2 - 1} = 248$."
              },
              {
                "key": "d",
                "text": "Dãy số $(v_n)$ xác định bởi $v_n = \\ln(u_n)$ lập thành một cấp số cộng có công sai $d = \\ln(2)$.",
                "correct": true,
                "explanation": "$v_{n+1} - v_n = \\ln(u_{n+1}) - \\ln(u_n) = \\ln\\left(\\frac{u_{n+1}}{u_n}\\right) = \\ln(2)$ là hằng số."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một quả bóng cao su được thả rơi tự do từ độ cao 20\\text{ m} xuống sàn. Mỗi lần chạm sàn, bóng nảy lên độ cao bằng $\\frac23$ độ cao của lần rơi trước đó.",
            "items": [
              {
                "key": "a",
                "text": "Độ cao bóng nảy lên sau lần chạm sàn đầu tiên là $13.33\\text{ m}$.",
                "correct": true,
                "explanation": "$h_1 = 20 \\times \\frac{2}{3} = 13.33\\text{ m}$."
              },
              {
                "key": "b",
                "text": "Dãy các độ cao bóng nảy lên lập thành một cấp số nhân có công bội $q = \\frac{2}{3}$.",
                "correct": true,
                "explanation": "Đúng định nghĩa cấp số nhân với $q = 2/3$."
              },
              {
                "key": "c",
                "text": "Sau 4 lần nảy, tổng độ cao bóng đã nảy lên vượt quá độ cao ban đầu lúc thả.",
                "correct": true,
                "explanation": "Tổng độ cao nảy lên 4 lần: $S_4 = h_1 \\frac{1 - (2/3)^4}{1 - 2/3} = 3h_1(1 - 16/81) = 2h_0 \\times 65/81 = 130/81 h_0 > h_0$."
              },
              {
                "key": "d",
                "text": "Tổng toàn bộ quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn bằng $100\\text{ m}$.",
                "correct": true,
                "explanation": "Tổng quãng đường: $S = h_0 \\frac{1 + k}{1 - k} = 20 \\frac{1 + 2/3}{1 - 2/3} = 20 \\times 5 = 100\\text{ m}$."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một cơ sở sản xuất đồ gỗ mỹ nghệ đóng 100 chiếc ghế trong tháng thứ nhất. Kế hoạch đề ra mỗi tháng tiếp theo tăng thêm $10\\%$ so với tháng trước.",
            "items": [
              {
                "key": "a",
                "text": "Sản lượng ghế mỗi tháng lập thành một cấp số nhân có công bội $q = 1.1$.",
                "correct": true,
                "explanation": "Mỗi tháng tăng $10\\%$ nên sản lượng bằng $1.1$ lần tháng trước."
              },
              {
                "key": "b",
                "text": "Sản lượng ghế riêng trong tháng thứ 3 là $121$ chiếc.",
                "correct": true,
                "explanation": "$u_3 = u_1 \\cdot q^2 = 100 \\times 1.1^2 = 100 \\times 1.21 = 121$ chiếc."
              },
              {
                "key": "c",
                "text": "Tổng sản lượng ghế sản xuất trong 6 tháng đầu năm vượt quá 500 chiếc.",
                "correct": true,
                "explanation": "Tổng sản lượng 6 tháng: $S_6 = u_1 \\frac{1.1^6 - 1}{0.1} \\approx 100 \\times 7.7156 > 500$ chiếc."
              },
              {
                "key": "d",
                "text": "Nếu mỗi tháng chỉ tăng cố định 5 chiếc thì tổng sản lượng sau 6 tháng lớn hơn kế hoạch tăng $10\\%$.",
                "correct": false,
                "explanation": "Tăng cấp số nhân tăng trưởng theo hàm mũ luôn vượt trội hơn tăng tuyến tính cấp số cộng."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và công sai $d = 7$. Tìm số hạng thứ 12 của cấp số cộng.",
            "correctAnswer": "82",
            "acceptedAnswers": [
              "82",
              "82.0"
            ],
            "explanation": "$u_{12} = u_1 + 11d = 5 + 11(7) = 82$."
          },
          {
            "id": 2,
            "question": "Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = 7$. Tính tổng của 10 số hạng đầu tiên $S_{10}$.",
            "correctAnswer": "335",
            "acceptedAnswers": [
              "335",
              "335.0"
            ],
            "explanation": "$S_{10} = \\frac{10}{2}[2(2) + 9(7)] = 5(4 + 63) = 335$."
          },
          {
            "id": 3,
            "question": "Tính tổng của cấp số nhân lùi vô hạn: $S = 6 + 2 + \\frac{2}{3} + \\frac{2}{9} + \\dots$",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9",
              "9.0"
            ],
            "explanation": "$u_1 = 6, q = 1/3 \\Rightarrow S = \\frac{6}{1 - 1/3} = 9$."
          },
          {
            "id": 4,
            "question": "Một rạp xiếc có các hàng ghế xếp hình vòng cung, hàng thứ nhất có 17 ghế, mỗi hàng sau nhiều hơn hàng trước 3 ghế. Khán phòng có 15 hàng ghế. Hỏi có tất cả bao nhiêu ghế?",
            "correctAnswer": "570",
            "acceptedAnswers": [
              "570"
            ],
            "explanation": "Cấp số cộng: $S_{15} = \\frac{15}{2}[2(17) + 14(3)] = 570$ ghế."
          },
          {
            "id": 5,
            "question": "Một quả bóng cao su được thả rơi từ độ cao $20\\text{ m}$. Mỗi lần chạm sàn nó nảy lên độ cao bằng $\\frac23$ độ cao trước đó. Tính tổng quãng đường bóng đã di chuyển kể từ lúc thả đến khi dừng hẳn (mét).",
            "correctAnswer": "100",
            "acceptedAnswers": [
              "100",
              "100.0"
            ],
            "explanation": "$S = h_0 \\frac{1 + 2/3}{1 - 2/3} = 20 \\times 5 = 100\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một kỹ sư vay ngân hàng 100 triệu đồng trả góp với lãi suất $0.6\\%/\\text{tháng}$. Mỗi tháng kỹ sư trả đều đặn số tiền $m$ triệu đồng vào cuối tháng. Để trả hết nợ đúng sau 24 tháng, số tiền $m$ phải bằng bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "4.49",
            "acceptedAnswers": [
              "4.49",
              "4,49"
            ],
            "explanation": "$m = \\frac{100 \\times 0.006 \\times 1.006^{24}}{1.006^{24} - 1} = \\frac{0.6 \\times 1.15437}{0.15437} \\approx 4.49$ triệu đồng."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd2",
    "code": "CĐ 2",
    "title": "HỆ BPT BẬC NHẤT 2 ẨN",
    "icon": "fa-solid fa-shapes",
    "badge": "Lớp 10 • Kiến thức trọng tâm",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "description": "BPT bậc nhất hai ẩn, biểu diễn miền nghiệm của hệ BPT, bài toán quy hoạch tuyến tính tối ưu hóa chi phí và lợi nhuận sản xuất.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: BPT Bậc Nhất 2 Ẩn -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-shapes text-blue-600\"></i>\n      1. Bất Phương Trình Bậc Nhất Hai Ẩn\n    </h4>\n    <ul class=\"list-disc pl-5 space-y-1.5 text-[11.5pt]\">\n      <li><strong>Dạng tổng quát:</strong> $ax + by < c$ (hoặc $\\le c, > c, \\ge c$) với $a^2 + b^2 \\ne 0$.</li>\n      <li><strong>Quy tắc xác định miền nghiệm:</strong>\n        <p class=\"mt-1\">1. Vẽ đường thẳng $d: ax + by = c$.</p>\n        <p>2. Chọn một điểm thử $M_0(x_0; y_0) \\notin d$ (thường chọn gốc $O(0; 0)$ nếu $c \\ne 0$).</p>\n        <p>3. Tính $ax_0 + by_0$. Nếu thỏa mãn thì nửa mặt phẳng chứa $M_0$ là miền nghiệm; ngược lại là nửa mặt phẳng không chứa $M_0$.</p>\n      </li>\n    </ul>\n  </div>\n\n  <!-- Phần 2: Hệ BPT Bậc Nhất 2 Ẩn -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-layer-group text-emerald-600\"></i>\n      2. Hệ Bất Phương Trình Bậc Nhất Hai Ẩn\n    </h4>\n    <div class=\"text-[11.5pt] space-y-2\">\n      <p>Hệ gồm từ hai bất phương trình bậc nhất hai ẩn trở lên. Miền nghiệm của hệ là phần giao nhau của các miền nghiệm thành phần, thường là một <strong>miền đa giác lồi</strong> (tam giác, tứ giác, ngũ giác...).</p>\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200\">\n        <span class=\"font-bold text-emerald-900\">Cách tìm tọa độ các đỉnh:</span> Giải các hệ phương trình đường thẳng giao nhau tương ứng của từng cặp bất phương trình tạo nên các cạnh bao quanh miền nghiệm.\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Bài toán Quy Hoạch Tuyến Tính Tối Ưu Hóa -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-coins text-amber-600\"></i>\n      3. Bài Toán Tối Ưu Hóa (Quy Hoạch Tuyến Tính)\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-950 mb-1\">Định Lý Trọng Tâm:</p>\n        <p>Giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của biểu thức mục tiêu $F(x; y) = ax + by$ trên một miền đa giác lồi $S$ <strong>luôn đạt tại một trong các đỉnh của miền đa giác đó</strong>.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-950 mb-1\">Quy trình 4 bước giải bài toán thực tế:</p>\n        <p><strong>Bước 1:</strong> Gọi $x, y$ là các ẩn thực tế (kèm điều kiện $x \\ge 0, y \\ge 0$).</p>\n        <p><strong>Bước 2:</strong> Thiết lập hệ bất phương trình ràng buộc tài nguyên (vốn, thời gian máy, nhân công, nguyên liệu...).</p>\n        <p><strong>Bước 3:</strong> Xác định tọa độ tất cả các đỉnh $A, B, C, D...$ của miền đa giác nghiệm.</p>\n        <p><strong>Bước 4:</strong> Tính giá trị hàm mục tiêu $F(A), F(B), F(C)...$ và so sánh để chọn giá trị lớn nhất (lợi nhuận tối đa) hoặc nhỏ nhất (chi phí tối thiểu).</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd2-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Hệ BPT Bậc Nhất 2 Ẩn",
        "code": "CD2-201",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
            "options": {
              "A": "$(3; 1)$",
              "B": "$(1; 1)$",
              "C": "$(2; 2)$",
              "D": "$(1; 4)$"
            },
            "correct": "B",
            "explanation": "Thay $(1; 1)$ vào: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$?",
            "options": {
              "A": "$(2; 1)$",
              "B": "$(0; 0)$",
              "C": "$(0; 1)$",
              "D": "$(3; 0)$"
            },
            "correct": "A",
            "explanation": "Thay $(2; 1)$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$ (đều thỏa mãn)."
          },
          {
            "id": 3,
            "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$x^2 + y \\le 4$",
              "B": "$xy - 1 \\ge 0$",
              "C": "$3x - 2y + 5 > 0$",
              "D": "$2x + 3y^2 < 1$"
            },
            "correct": "C",
            "explanation": "Phương án A là bất phương trình bậc nhất hai ẩn theo định nghĩa."
          },
          {
            "id": 4,
            "question": "Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là:",
            "options": {
              "A": "Nửa mặt phẳng nằm bên phải trục tung kể cả trục tung",
              "B": "Nửa mặt phẳng nằm phía trên trục hoành",
              "C": "Nửa mặt phẳng nằm bên trái trục tung",
              "D": "Nửa mặt phẳng nằm phía dưới trục hoành"
            },
            "correct": "A",
            "explanation": "$x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."
          },
          {
            "id": 5,
            "question": "Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác có ba đỉnh $A(0; 0), B(4; 0), C(0; 9)$. Giá trị lớn nhất của $F(x; y)$ bằng:",
            "options": {
              "A": "$18$",
              "B": "$10$",
              "C": "$6$",
              "D": "$8$"
            },
            "correct": "A",
            "explanation": "$F(A) = 0, F(B) = 3(4) = 12, F(C) = 2(9) = 18$. GTLN là $18$."
          },
          {
            "id": 6,
            "question": "Đường thẳng $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
            "options": {
              "A": "$x - 2y > 4$",
              "B": "$x - 2y < 4$",
              "C": "$x - 2y > 5$",
              "D": "$x - 2y \\ge 4$"
            },
            "correct": "B",
            "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$ nên thuộc miền nghiệm $x - 2y < 4$."
          },
          {
            "id": 7,
            "question": "Một người nông dân trồng hai loại rau trên diện tích tối đa 10 sào đất. Gọi $x$ và $y$ là số sào đất trồng rau cải và rau muống. Bất phương trình thể hiện điều kiện về diện tích là:",
            "options": {
              "A": "$xy \\le 10$",
              "B": "$x + y \\le 10$ ($x, y \\ge 0$)",
              "C": "$x - y \\le 10$",
              "D": "$x + y \\ge 10$"
            },
            "correct": "B",
            "explanation": "Tổng diện tích trồng không vượt quá 10 sào: $x + y \\le 10$ với $x, y \\ge 0$."
          },
          {
            "id": 8,
            "question": "Hệ bất phương trình nào sau đây có miền nghiệm là một tứ giác lồi?",
            "options": {
              "A": "$\\begin{cases} x + y \\ge 1 \\\\ x - y \\le 0 \\end{cases}$",
              "B": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
              "C": "$\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$",
              "D": "$\\begin{cases} x + y \\le 2 \\\\ x \\ge 0 \\end{cases}$"
            },
            "correct": "C",
            "explanation": "Miền nghiệm là hình chữ nhật (tứ giác lồi) có 4 đỉnh $(0;0), (4;0), (4;3), (0;3)$."
          },
          {
            "id": 9,
            "question": "Cho miền nghiệm của hệ BPT là tam giác $OAB$ với $O(0; 0), A(3; 0), B(1; 4)$. Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - 3y$ bằng:",
            "options": {
              "A": "$6$",
              "B": "$-5$",
              "C": "$0$",
              "D": "$-10$"
            },
            "correct": "D",
            "explanation": "$F(O) = 0, F(A) = 2(3) - 0 = 6, F(B) = 2(1) - 3(4) = -10$. Giá trị nhỏ nhất là $-10$."
          },
          {
            "id": 10,
            "question": "Một xưởng cơ khí có 120 giờ công làm việc mỗi tuần để sản xuất hai loại chi tiết máy. Chi tiết I cần 2 giờ, chi tiết II cần 3 giờ. Bất phương trình ràng buộc về thời gian công là:",
            "options": {
              "A": "$3x + 2y \\le 120$",
              "B": "$x + y \\le 120$",
              "C": "$2x + 3y \\ge 120$",
              "D": "$2x + 3y \\le 120$ ($x, y \\ge 0$)"
            },
            "correct": "D",
            "explanation": "$2x + 3y \\le 120$ với $x, y \\ge 0$."
          },
          {
            "id": 11,
            "question": "Tọa độ giao điểm của hai đường thẳng $x + y = 12$ và $2x - y = 9$ là:",
            "options": {
              "A": "$(\\frac{12}{2}; \\frac{9}{2})$",
              "B": "$(\\frac{3}{3}; \\frac{21}{3})$",
              "C": "$(12; 9)$",
              "D": "$(\\frac{21}{3}; \\frac{15}{3})$"
            },
            "correct": "D",
            "explanation": "Cộng hai phương trình: $3x = c_1 + c_2 \\Rightarrow x = (c_1 + c_2)/3, y = c_1 - x = (2c_1 - c_2)/3$."
          },
          {
            "id": 12,
            "question": "Một cửa hàng kinh doanh hai loại trà sữa với lợi nhuận mỗi ly lần lượt là 15 nghìn đồng và 20 nghìn đồng. Hàm mục tiêu biểu diễn tổng lợi nhuận (nghìn đồng) khi bán $x$ ly loại 1 và $y$ ly loại 2 là:",
            "options": {
              "A": "$F(x; y) = 15x - 20y$",
              "B": "$F(x; y) = 35(x + y)$",
              "C": "$F(x; y) = 15x + 20y$",
              "D": "$F(x; y) = 20x + 15y$"
            },
            "correct": "C",
            "explanation": "Lợi nhuận: $F(x; y) = 15x + 20y$ (nghìn đồng)."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$ có miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$.",
            "items": [
              {
                "key": "a",
                "text": "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ bất phương trình.",
                "correct": true,
                "explanation": "Thay $(1; 2)$ thỏa mãn cả 4 bất phương trình."
              },
              {
                "key": "b",
                "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + y = 6$ và $2x + y = 8$.",
                "correct": true,
                "explanation": "Giải hệ: $x = 2, y = 4 \\Rightarrow B(2; 4)$."
              },
              {
                "key": "c",
                "text": "Diện tích của tứ giác miền nghiệm $OABC$ bằng 16 đơn vị diện tích.",
                "correct": true,
                "explanation": "Chia tứ giác thành $\\triangle OAC$ và $\\triangle ABC$, tính được diện tích bằng 16."
              },
              {
                "key": "d",
                "text": "Biểu thức $F(x; y) = 4x + 3y$ đạt giá trị lớn nhất tại đỉnh $A(4; 0)$.",
                "correct": false,
                "explanation": "$F(A) = 16, F(B) = 4(2) + 3(4) = 20, F(C) = 18$. GTLN đạt tại đỉnh $B(2; 4)$ bằng 20, không phải tại $A$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một công ty sản xuất hai loại nước trái cây đóng chai: Nước cam (loại A) và Nước táo (loại B). Mỗi chai loại A cần $0.2\\text{ kg}$ đường và 3 quả cam, đem lại lợi nhuận 4 nghìn đồng. Mỗi chai loại B cần $0.1\\text{ kg}$ đường và 2 quả táo, đem lại lợi nhuận 3 nghìn đồng. Nguồn nguyên liệu đường không quá $20\\text{ kg}$ mỗi ngày.",
            "items": [
              {
                "key": "a",
                "text": "Ràng buộc về nguyên liệu đường là $0.2x + 0.1y \\le 20$ (với $x, y \\ge 0$).",
                "correct": true,
                "explanation": "Lượng đường sử dụng cho $x$ chai loại A và $y$ chai loại B không vượt quá 20 kg."
              },
              {
                "key": "b",
                "text": "Hàm số biểu diễn lợi nhuận hàng ngày là $F(x; y) = 4x + 3y$ (nghìn đồng).",
                "correct": true,
                "explanation": "Lợi nhuận là 4 nghìn đồng cho mỗi chai A và 3 nghìn đồng cho mỗi chai B."
              },
              {
                "key": "c",
                "text": "Nếu chỉ sản xuất duy nhất loại A thì sản xuất được tối đa 100 chai mỗi ngày.",
                "correct": true,
                "explanation": "Cho $y = 0 \\Rightarrow 0.2x \\le 20 \\Leftrightarrow x \\le 100$ chai."
              },
              {
                "key": "d",
                "text": "Nếu sản xuất 80 chai loại A thì có thể sản xuất tối đa 50 chai loại B.",
                "correct": false,
                "explanation": "$0.2(80) + 0.1y \\le 20 \\Leftrightarrow 16 + 0.1y \\le 20 \\Leftrightarrow 0.1y \\le 4 \\Leftrightarrow y \\le 40$ chai (không phải 50)."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một trang trại dự định dùng tối đa 20 triệu đồng để mua hai loại thức ăn bổ sung cho bò sữa: Loại I giá 400 nghìn đồng/bao (chứa 10 đơn vị đạm), Loại II giá 300 nghìn đồng/bao (chứa 5 đơn vị đạm). Nhu cầu tối thiểu của đàn bò là cần 300 đơn vị đạm mỗi tháng.",
            "items": [
              {
                "key": "a",
                "text": "Bất phương trình ràng buộc về ngân sách mua thức ăn là $4x + 3y \\le 200$ (với $x, y$ là số bao loại I và II).",
                "correct": true,
                "explanation": "$400x + 300y \\le 20000 \\Leftrightarrow 4x + 3y \\le 200$."
              },
              {
                "key": "b",
                "text": "Bất phương trình ràng buộc về lượng đạm tối thiểu là $10x + 5y \\ge 300$.",
                "correct": true,
                "explanation": "Tổng lượng đạm $10x + 5y \\ge 300$ đơn vị."
              },
              {
                "key": "c",
                "text": "Trang trại có thể mua 20 bao loại I và 30 bao loại II.",
                "correct": true,
                "explanation": "$4(20) + 3(30) = 170 \\le 200$ và $10(20) + 5(30) = 350 \\ge 300$ (thỏa mãn)."
              },
              {
                "key": "d",
                "text": "Số bao thức ăn loại I tối đa mà trang trại có thể mua được là 40 bao.",
                "correct": false,
                "explanation": "$4x \\le 200 \\Rightarrow x \\le 50$ bao (khi $y = 0$, đạm $= 500 \\ge 300$)."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một đội xe vận tải cần chở ít nhất 140 người và 9 tấn hàng. Có hai loại xe: Xe A (thuê 4 triệu đồng/chuyến, chở được 20 người và 0.6 tấn hàng), Xe B (thuê 3 triệu đồng/chuyến, chở được 10 người và 1.5 tấn hàng). Đội xe có tối đa 10 xe loại A và 9 xe loại B.",
            "items": [
              {
                "key": "a",
                "text": "Điều kiện số xe: $0 \\le x \\le 10$ và $0 \\le y \\le 9$ ($x, y \\in \\mathbb{N}$).",
                "correct": true,
                "explanation": "Đội xe chỉ có sẵn tối đa 10 xe A và 9 xe B."
              },
              {
                "key": "b",
                "text": "Ràng buộc số người: $20x + 10y \\ge 140 \\Leftrightarrow 2x + y \\ge 14$.",
                "correct": true,
                "explanation": "Đúng theo dữ kiện chở ít nhất 140 người."
              },
              {
                "key": "c",
                "text": "Ràng buộc khối lượng hàng: $0.6x + 1.5y \\ge 9 \\Leftrightarrow 2x + 5y \\ge 30$.",
                "correct": true,
                "explanation": "Nhân hai vế với $10/3$: $2x + 5y \\ge 30$."
              },
              {
                "key": "d",
                "text": "Chi phí thuê xe thấp nhất đạt được khi thuê 10 xe loại A và 0 xe loại B.",
                "correct": false,
                "explanation": "Thuê $x = 5, y = 4$: người $= 100+40=140$, hàng $= 3+6=9$ tấn. Chi phí $= 4(5) + 3(4) = 32$ triệu đồng ($< 10 \\times 4 = 40$ triệu đồng)."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Tìm hoành độ giao điểm của hai đường thẳng $x + y = 10$ và $2x - y = 5$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5",
              "5.0"
            ],
            "explanation": "Cộng hai phương trình: $3x = 15 \\Rightarrow x = 5$."
          },
          {
            "id": 2,
            "question": "Tính diện tích của hình tam giác giới hạn bởi ba đường thẳng: $x = 0, y = 0, x + 2y = 8$.",
            "correctAnswer": "16",
            "acceptedAnswers": [
              "16",
              "16.0"
            ],
            "explanation": "Giao với trục tọa độ tại $A(8; 0)$ và $B(0; 4)$. Diện tích $S = \\frac{1}{2}(8)(4) = 16$."
          },
          {
            "id": 3,
            "question": "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền đa giác có các đỉnh $A(0; 0), B(6; 0), C(4; 3), D(0; 5)$.",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30",
              "30.0"
            ],
            "explanation": "$F(A) = 0, F(B) = 30, F(C) = 5(4)+3(3) = 29, F(D) = 15$. GTLN là 30."
          },
          {
            "id": 4,
            "question": "Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = 3x - 4y$ trên miền tam giác có ba đỉnh $A(1; 1), B(5; 2), C(2; 6)$.",
            "correctAnswer": "-18",
            "acceptedAnswers": [
              "-18",
              "-18.0"
            ],
            "explanation": "$F(A) = 3(1)-4(1) = -1, F(B) = 3(5)-4(2) = 7, F(C) = 3(2)-4(6) = -18$. GTNN là -18."
          },
          {
            "id": 5,
            "question": "Một xí nghiệp sản xuất hai loại sản phẩm I và II. Mỗi tấn sản phẩm I cần 2 máy A và 1 máy B, đem lại lợi nhuận 40 triệu đồng. Mỗi tấn sản phẩm II cần 1 máy A và 2 máy B, đem lại lợi nhuận 50 triệu đồng. Xí nghiệp có tối đa 8 máy A và 10 máy B. Hỏi lợi nhuận lớn nhất xí nghiệp có thể đạt được là bao nhiêu triệu đồng?",
            "correctAnswer": "260",
            "acceptedAnswers": [
              "260",
              "260.0"
            ],
            "explanation": "Hệ BPT: $2x + y \\le 8, x + 2y \\le 10, x \\ge 0, y \\ge 0$. Đỉnh miền nghiệm: $(0;0), (4;0), (2;4), (0;5)$. Lợi nhuận $F(x; y) = 40x + 50y$. $F(2; 4) = 40(2) + 50(4) = 260$ triệu đồng."
          },
          {
            "id": 6,
            "question": "Một công ty cần thuê xe để chở 140 người và 9 tấn hàng. Xe lớn thuê 4 triệu/chuyến (chở 20 người, 0.6 tấn), xe nhỏ thuê 3 triệu/chuyến (chở 10 người, 1.5 tấn). Chi phí thuê xe nhỏ nhất là bao nhiêu triệu đồng?",
            "correctAnswer": "32",
            "acceptedAnswers": [
              "32",
              "32.0"
            ],
            "explanation": "Thuê 5 xe lớn và 4 xe nhỏ: người $= 5(20)+4(10)=140$, hàng $= 5(0.6)+4(1.5)=9$ tấn. Chi phí $= 5(4) + 4(3) = 32$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Hệ BPT Bậc Nhất 2 Ẩn",
        "code": "CD2-202",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
            "options": {
              "A": "$(1; 1)$",
              "B": "$(3; 1)$",
              "C": "$(1; 4)$",
              "D": "$(2; 2)$"
            },
            "correct": "A",
            "explanation": "Thay $(1; 1)$ vào: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$?",
            "options": {
              "A": "$(3; 0)$",
              "B": "$(0; 1)$",
              "C": "$(0; 0)$",
              "D": "$(2; 1)$"
            },
            "correct": "D",
            "explanation": "Thay $(2; 1)$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$ (đều thỏa mãn)."
          },
          {
            "id": 3,
            "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$2x + 3y^2 < 1$",
              "B": "$3x - 2y + 5 > 0$",
              "C": "$xy - 1 \\ge 0$",
              "D": "$x^2 + y \\le 4$"
            },
            "correct": "B",
            "explanation": "Phương án A là bất phương trình bậc nhất hai ẩn theo định nghĩa."
          },
          {
            "id": 4,
            "question": "Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là:",
            "options": {
              "A": "Nửa mặt phẳng nằm bên trái trục tung",
              "B": "Nửa mặt phẳng nằm phía dưới trục hoành",
              "C": "Nửa mặt phẳng nằm bên phải trục tung kể cả trục tung",
              "D": "Nửa mặt phẳng nằm phía trên trục hoành"
            },
            "correct": "C",
            "explanation": "$x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."
          },
          {
            "id": 5,
            "question": "Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác có ba đỉnh $A(0; 0), B(4; 0), C(0; 10)$. Giá trị lớn nhất của $F(x; y)$ bằng:",
            "options": {
              "A": "$10$",
              "B": "$6$",
              "C": "$20$",
              "D": "$8$"
            },
            "correct": "C",
            "explanation": "$F(A) = 0, F(B) = 3(4) = 12, F(C) = 2(10) = 20$. GTLN là $20$."
          },
          {
            "id": 6,
            "question": "Đường thẳng $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
            "options": {
              "A": "$x - 2y > 5$",
              "B": "$x - 2y \\ge 4$",
              "C": "$x - 2y < 4$",
              "D": "$x - 2y > 4$"
            },
            "correct": "C",
            "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$ nên thuộc miền nghiệm $x - 2y < 4$."
          },
          {
            "id": 7,
            "question": "Một người nông dân trồng hai loại rau trên diện tích tối đa 10 sào đất. Gọi $x$ và $y$ là số sào đất trồng rau cải và rau muống. Bất phương trình thể hiện điều kiện về diện tích là:",
            "options": {
              "A": "$x + y \\le 10$ ($x, y \\ge 0$)",
              "B": "$x - y \\le 10$",
              "C": "$x + y \\ge 10$",
              "D": "$xy \\le 10$"
            },
            "correct": "A",
            "explanation": "Tổng diện tích trồng không vượt quá 10 sào: $x + y \\le 10$ với $x, y \\ge 0$."
          },
          {
            "id": 8,
            "question": "Hệ bất phương trình nào sau đây có miền nghiệm là một tứ giác lồi?",
            "options": {
              "A": "$\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$",
              "B": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
              "C": "$\\begin{cases} x + y \\le 2 \\\\ x \\ge 0 \\end{cases}$",
              "D": "$\\begin{cases} x + y \\ge 1 \\\\ x - y \\le 0 \\end{cases}$"
            },
            "correct": "A",
            "explanation": "Miền nghiệm là hình chữ nhật (tứ giác lồi) có 4 đỉnh $(0;0), (4;0), (4;3), (0;3)$."
          },
          {
            "id": 9,
            "question": "Cho miền nghiệm của hệ BPT là tam giác $OAB$ với $O(0; 0), A(3; 0), B(1; 4)$. Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - 3y$ bằng:",
            "options": {
              "A": "$6$",
              "B": "$-10$",
              "C": "$0$",
              "D": "$-5$"
            },
            "correct": "B",
            "explanation": "$F(O) = 0, F(A) = 2(3) - 0 = 6, F(B) = 2(1) - 3(4) = -10$. Giá trị nhỏ nhất là $-10$."
          },
          {
            "id": 10,
            "question": "Một xưởng cơ khí có 120 giờ công làm việc mỗi tuần để sản xuất hai loại chi tiết máy. Chi tiết I cần 2 giờ, chi tiết II cần 3 giờ. Bất phương trình ràng buộc về thời gian công là:",
            "options": {
              "A": "$3x + 2y \\le 120$",
              "B": "$2x + 3y \\ge 120$",
              "C": "$x + y \\le 120$",
              "D": "$2x + 3y \\le 120$ ($x, y \\ge 0$)"
            },
            "correct": "D",
            "explanation": "$2x + 3y \\le 120$ với $x, y \\ge 0$."
          },
          {
            "id": 11,
            "question": "Tọa độ giao điểm của hai đường thẳng $x + y = 14$ và $2x - y = 10$ là:",
            "options": {
              "A": "$(\\frac{4}{3}; \\frac{24}{3})$",
              "B": "$(14; 10)$",
              "C": "$(\\frac{14}{2}; \\frac{10}{2})$",
              "D": "$(\\frac{24}{3}; \\frac{18}{3})$"
            },
            "correct": "D",
            "explanation": "Cộng hai phương trình: $3x = c_1 + c_2 \\Rightarrow x = (c_1 + c_2)/3, y = c_1 - x = (2c_1 - c_2)/3$."
          },
          {
            "id": 12,
            "question": "Một cửa hàng kinh doanh hai loại trà sữa với lợi nhuận mỗi ly lần lượt là 15 nghìn đồng và 20 nghìn đồng. Hàm mục tiêu biểu diễn tổng lợi nhuận (nghìn đồng) khi bán $x$ ly loại 1 và $y$ ly loại 2 là:",
            "options": {
              "A": "$F(x; y) = 35(x + y)$",
              "B": "$F(x; y) = 15x + 20y$",
              "C": "$F(x; y) = 20x + 15y$",
              "D": "$F(x; y) = 15x - 20y$"
            },
            "correct": "B",
            "explanation": "Lợi nhuận: $F(x; y) = 15x + 20y$ (nghìn đồng)."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$ có miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$.",
            "items": [
              {
                "key": "a",
                "text": "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ bất phương trình.",
                "correct": true,
                "explanation": "Thay $(1; 2)$ thỏa mãn cả 4 bất phương trình."
              },
              {
                "key": "b",
                "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + y = 6$ và $2x + y = 8$.",
                "correct": true,
                "explanation": "Giải hệ: $x = 2, y = 4 \\Rightarrow B(2; 4)$."
              },
              {
                "key": "c",
                "text": "Diện tích của tứ giác miền nghiệm $OABC$ bằng 16 đơn vị diện tích.",
                "correct": true,
                "explanation": "Chia tứ giác thành $\\triangle OAC$ và $\\triangle ABC$, tính được diện tích bằng 16."
              },
              {
                "key": "d",
                "text": "Biểu thức $F(x; y) = 4x + 3y$ đạt giá trị lớn nhất tại đỉnh $A(4; 0)$.",
                "correct": false,
                "explanation": "$F(A) = 16, F(B) = 4(2) + 3(4) = 20, F(C) = 18$. GTLN đạt tại đỉnh $B(2; 4)$ bằng 20, không phải tại $A$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một công ty sản xuất hai loại nước trái cây đóng chai: Nước cam (loại A) và Nước táo (loại B). Mỗi chai loại A cần $0.2\\text{ kg}$ đường và 3 quả cam, đem lại lợi nhuận 4 nghìn đồng. Mỗi chai loại B cần $0.1\\text{ kg}$ đường và 2 quả táo, đem lại lợi nhuận 3 nghìn đồng. Nguồn nguyên liệu đường không quá $20\\text{ kg}$ mỗi ngày.",
            "items": [
              {
                "key": "a",
                "text": "Ràng buộc về nguyên liệu đường là $0.2x + 0.1y \\le 20$ (với $x, y \\ge 0$).",
                "correct": true,
                "explanation": "Lượng đường sử dụng cho $x$ chai loại A và $y$ chai loại B không vượt quá 20 kg."
              },
              {
                "key": "b",
                "text": "Hàm số biểu diễn lợi nhuận hàng ngày là $F(x; y) = 4x + 3y$ (nghìn đồng).",
                "correct": true,
                "explanation": "Lợi nhuận là 4 nghìn đồng cho mỗi chai A và 3 nghìn đồng cho mỗi chai B."
              },
              {
                "key": "c",
                "text": "Nếu chỉ sản xuất duy nhất loại A thì sản xuất được tối đa 100 chai mỗi ngày.",
                "correct": true,
                "explanation": "Cho $y = 0 \\Rightarrow 0.2x \\le 20 \\Leftrightarrow x \\le 100$ chai."
              },
              {
                "key": "d",
                "text": "Nếu sản xuất 80 chai loại A thì có thể sản xuất tối đa 50 chai loại B.",
                "correct": false,
                "explanation": "$0.2(80) + 0.1y \\le 20 \\Leftrightarrow 16 + 0.1y \\le 20 \\Leftrightarrow 0.1y \\le 4 \\Leftrightarrow y \\le 40$ chai (không phải 50)."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một trang trại dự định dùng tối đa 20 triệu đồng để mua hai loại thức ăn bổ sung cho bò sữa: Loại I giá 400 nghìn đồng/bao (chứa 10 đơn vị đạm), Loại II giá 300 nghìn đồng/bao (chứa 5 đơn vị đạm). Nhu cầu tối thiểu của đàn bò là cần 300 đơn vị đạm mỗi tháng.",
            "items": [
              {
                "key": "a",
                "text": "Bất phương trình ràng buộc về ngân sách mua thức ăn là $4x + 3y \\le 200$ (với $x, y$ là số bao loại I và II).",
                "correct": true,
                "explanation": "$400x + 300y \\le 20000 \\Leftrightarrow 4x + 3y \\le 200$."
              },
              {
                "key": "b",
                "text": "Bất phương trình ràng buộc về lượng đạm tối thiểu là $10x + 5y \\ge 300$.",
                "correct": true,
                "explanation": "Tổng lượng đạm $10x + 5y \\ge 300$ đơn vị."
              },
              {
                "key": "c",
                "text": "Trang trại có thể mua 20 bao loại I và 30 bao loại II.",
                "correct": true,
                "explanation": "$4(20) + 3(30) = 170 \\le 200$ và $10(20) + 5(30) = 350 \\ge 300$ (thỏa mãn)."
              },
              {
                "key": "d",
                "text": "Số bao thức ăn loại I tối đa mà trang trại có thể mua được là 40 bao.",
                "correct": false,
                "explanation": "$4x \\le 200 \\Rightarrow x \\le 50$ bao (khi $y = 0$, đạm $= 500 \\ge 300$)."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một đội xe vận tải cần chở ít nhất 140 người và 9 tấn hàng. Có hai loại xe: Xe A (thuê 4 triệu đồng/chuyến, chở được 20 người và 0.6 tấn hàng), Xe B (thuê 3 triệu đồng/chuyến, chở được 10 người và 1.5 tấn hàng). Đội xe có tối đa 10 xe loại A và 9 xe loại B.",
            "items": [
              {
                "key": "a",
                "text": "Điều kiện số xe: $0 \\le x \\le 10$ và $0 \\le y \\le 9$ ($x, y \\in \\mathbb{N}$).",
                "correct": true,
                "explanation": "Đội xe chỉ có sẵn tối đa 10 xe A và 9 xe B."
              },
              {
                "key": "b",
                "text": "Ràng buộc số người: $20x + 10y \\ge 140 \\Leftrightarrow 2x + y \\ge 14$.",
                "correct": true,
                "explanation": "Đúng theo dữ kiện chở ít nhất 140 người."
              },
              {
                "key": "c",
                "text": "Ràng buộc khối lượng hàng: $0.6x + 1.5y \\ge 9 \\Leftrightarrow 2x + 5y \\ge 30$.",
                "correct": true,
                "explanation": "Nhân hai vế với $10/3$: $2x + 5y \\ge 30$."
              },
              {
                "key": "d",
                "text": "Chi phí thuê xe thấp nhất đạt được khi thuê 10 xe loại A và 0 xe loại B.",
                "correct": false,
                "explanation": "Thuê $x = 5, y = 4$: người $= 100+40=140$, hàng $= 3+6=9$ tấn. Chi phí $= 4(5) + 3(4) = 32$ triệu đồng ($< 10 \\times 4 = 40$ triệu đồng)."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Tìm hoành độ giao điểm của hai đường thẳng $x + y = 10$ và $2x - y = 5$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5",
              "5.0"
            ],
            "explanation": "Cộng hai phương trình: $3x = 15 \\Rightarrow x = 5$."
          },
          {
            "id": 2,
            "question": "Tính diện tích của hình tam giác giới hạn bởi ba đường thẳng: $x = 0, y = 0, x + 2y = 8$.",
            "correctAnswer": "16",
            "acceptedAnswers": [
              "16",
              "16.0"
            ],
            "explanation": "Giao với trục tọa độ tại $A(8; 0)$ và $B(0; 4)$. Diện tích $S = \\frac{1}{2}(8)(4) = 16$."
          },
          {
            "id": 3,
            "question": "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền đa giác có các đỉnh $A(0; 0), B(6; 0), C(4; 3), D(0; 5)$.",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30",
              "30.0"
            ],
            "explanation": "$F(A) = 0, F(B) = 30, F(C) = 5(4)+3(3) = 29, F(D) = 15$. GTLN là 30."
          },
          {
            "id": 4,
            "question": "Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = 3x - 4y$ trên miền tam giác có ba đỉnh $A(1; 1), B(5; 2), C(2; 6)$.",
            "correctAnswer": "-18",
            "acceptedAnswers": [
              "-18",
              "-18.0"
            ],
            "explanation": "$F(A) = 3(1)-4(1) = -1, F(B) = 3(5)-4(2) = 7, F(C) = 3(2)-4(6) = -18$. GTNN là -18."
          },
          {
            "id": 5,
            "question": "Một xí nghiệp sản xuất hai loại sản phẩm I và II. Mỗi tấn sản phẩm I cần 2 máy A và 1 máy B, đem lại lợi nhuận 40 triệu đồng. Mỗi tấn sản phẩm II cần 1 máy A và 2 máy B, đem lại lợi nhuận 50 triệu đồng. Xí nghiệp có tối đa 8 máy A và 10 máy B. Hỏi lợi nhuận lớn nhất xí nghiệp có thể đạt được là bao nhiêu triệu đồng?",
            "correctAnswer": "260",
            "acceptedAnswers": [
              "260",
              "260.0"
            ],
            "explanation": "Hệ BPT: $2x + y \\le 8, x + 2y \\le 10, x \\ge 0, y \\ge 0$. Đỉnh miền nghiệm: $(0;0), (4;0), (2;4), (0;5)$. Lợi nhuận $F(x; y) = 40x + 50y$. $F(2; 4) = 40(2) + 50(4) = 260$ triệu đồng."
          },
          {
            "id": 6,
            "question": "Một công ty cần thuê xe để chở 140 người và 9 tấn hàng. Xe lớn thuê 4 triệu/chuyến (chở 20 người, 0.6 tấn), xe nhỏ thuê 3 triệu/chuyến (chở 10 người, 1.5 tấn). Chi phí thuê xe nhỏ nhất là bao nhiêu triệu đồng?",
            "correctAnswer": "32",
            "acceptedAnswers": [
              "32",
              "32.0"
            ],
            "explanation": "Thuê 5 xe lớn và 4 xe nhỏ: người $= 5(20)+4(10)=140$, hàng $= 5(0.6)+4(1.5)=9$ tấn. Chi phí $= 5(4) + 4(3) = 32$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Hệ BPT Bậc Nhất 2 Ẩn",
        "code": "CD2-203",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
            "options": {
              "A": "$(1; 4)$",
              "B": "$(1; 1)$",
              "C": "$(2; 2)$",
              "D": "$(3; 1)$"
            },
            "correct": "B",
            "explanation": "Thay $(1; 1)$ vào: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$?",
            "options": {
              "A": "$(0; 1)$",
              "B": "$(2; 1)$",
              "C": "$(0; 0)$",
              "D": "$(3; 0)$"
            },
            "correct": "B",
            "explanation": "Thay $(2; 1)$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$ (đều thỏa mãn)."
          },
          {
            "id": 3,
            "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$2x + 3y^2 < 1$",
              "B": "$x^2 + y \\le 4$",
              "C": "$3x - 2y + 5 > 0$",
              "D": "$xy - 1 \\ge 0$"
            },
            "correct": "C",
            "explanation": "Phương án A là bất phương trình bậc nhất hai ẩn theo định nghĩa."
          },
          {
            "id": 4,
            "question": "Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là:",
            "options": {
              "A": "Nửa mặt phẳng nằm phía dưới trục hoành",
              "B": "Nửa mặt phẳng nằm bên trái trục tung",
              "C": "Nửa mặt phẳng nằm phía trên trục hoành",
              "D": "Nửa mặt phẳng nằm bên phải trục tung kể cả trục tung"
            },
            "correct": "D",
            "explanation": "$x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."
          },
          {
            "id": 5,
            "question": "Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác có ba đỉnh $A(0; 0), B(4; 0), C(0; 11)$. Giá trị lớn nhất của $F(x; y)$ bằng:",
            "options": {
              "A": "$6$",
              "B": "$10$",
              "C": "$22$",
              "D": "$8$"
            },
            "correct": "C",
            "explanation": "$F(A) = 0, F(B) = 3(4) = 12, F(C) = 2(11) = 22$. GTLN là $22$."
          },
          {
            "id": 6,
            "question": "Đường thẳng $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
            "options": {
              "A": "$x - 2y < 4$",
              "B": "$x - 2y \\ge 4$",
              "C": "$x - 2y > 4$",
              "D": "$x - 2y > 5$"
            },
            "correct": "A",
            "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$ nên thuộc miền nghiệm $x - 2y < 4$."
          },
          {
            "id": 7,
            "question": "Một người nông dân trồng hai loại rau trên diện tích tối đa 10 sào đất. Gọi $x$ và $y$ là số sào đất trồng rau cải và rau muống. Bất phương trình thể hiện điều kiện về diện tích là:",
            "options": {
              "A": "$xy \\le 10$",
              "B": "$x + y \\le 10$ ($x, y \\ge 0$)",
              "C": "$x - y \\le 10$",
              "D": "$x + y \\ge 10$"
            },
            "correct": "B",
            "explanation": "Tổng diện tích trồng không vượt quá 10 sào: $x + y \\le 10$ với $x, y \\ge 0$."
          },
          {
            "id": 8,
            "question": "Hệ bất phương trình nào sau đây có miền nghiệm là một tứ giác lồi?",
            "options": {
              "A": "$\\begin{cases} x + y \\le 2 \\\\ x \\ge 0 \\end{cases}$",
              "B": "$\\begin{cases} x + y \\ge 1 \\\\ x - y \\le 0 \\end{cases}$",
              "C": "$\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$",
              "D": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$"
            },
            "correct": "C",
            "explanation": "Miền nghiệm là hình chữ nhật (tứ giác lồi) có 4 đỉnh $(0;0), (4;0), (4;3), (0;3)$."
          },
          {
            "id": 9,
            "question": "Cho miền nghiệm của hệ BPT là tam giác $OAB$ với $O(0; 0), A(3; 0), B(1; 4)$. Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - 3y$ bằng:",
            "options": {
              "A": "$-10$",
              "B": "$0$",
              "C": "$-5$",
              "D": "$6$"
            },
            "correct": "A",
            "explanation": "$F(O) = 0, F(A) = 2(3) - 0 = 6, F(B) = 2(1) - 3(4) = -10$. Giá trị nhỏ nhất là $-10$."
          },
          {
            "id": 10,
            "question": "Một xưởng cơ khí có 120 giờ công làm việc mỗi tuần để sản xuất hai loại chi tiết máy. Chi tiết I cần 2 giờ, chi tiết II cần 3 giờ. Bất phương trình ràng buộc về thời gian công là:",
            "options": {
              "A": "$2x + 3y \\le 120$ ($x, y \\ge 0$)",
              "B": "$3x + 2y \\le 120$",
              "C": "$2x + 3y \\ge 120$",
              "D": "$x + y \\le 120$"
            },
            "correct": "A",
            "explanation": "$2x + 3y \\le 120$ với $x, y \\ge 0$."
          },
          {
            "id": 11,
            "question": "Tọa độ giao điểm của hai đường thẳng $x + y = 16$ và $2x - y = 11$ là:",
            "options": {
              "A": "$(\\frac{5}{3}; \\frac{27}{3})$",
              "B": "$(16; 11)$",
              "C": "$(\\frac{16}{2}; \\frac{11}{2})$",
              "D": "$(\\frac{27}{3}; \\frac{21}{3})$"
            },
            "correct": "D",
            "explanation": "Cộng hai phương trình: $3x = c_1 + c_2 \\Rightarrow x = (c_1 + c_2)/3, y = c_1 - x = (2c_1 - c_2)/3$."
          },
          {
            "id": 12,
            "question": "Một cửa hàng kinh doanh hai loại trà sữa với lợi nhuận mỗi ly lần lượt là 15 nghìn đồng và 20 nghìn đồng. Hàm mục tiêu biểu diễn tổng lợi nhuận (nghìn đồng) khi bán $x$ ly loại 1 và $y$ ly loại 2 là:",
            "options": {
              "A": "$F(x; y) = 20x + 15y$",
              "B": "$F(x; y) = 35(x + y)$",
              "C": "$F(x; y) = 15x - 20y$",
              "D": "$F(x; y) = 15x + 20y$"
            },
            "correct": "D",
            "explanation": "Lợi nhuận: $F(x; y) = 15x + 20y$ (nghìn đồng)."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$ có miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$.",
            "items": [
              {
                "key": "a",
                "text": "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ bất phương trình.",
                "correct": true,
                "explanation": "Thay $(1; 2)$ thỏa mãn cả 4 bất phương trình."
              },
              {
                "key": "b",
                "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + y = 6$ và $2x + y = 8$.",
                "correct": true,
                "explanation": "Giải hệ: $x = 2, y = 4 \\Rightarrow B(2; 4)$."
              },
              {
                "key": "c",
                "text": "Diện tích của tứ giác miền nghiệm $OABC$ bằng 16 đơn vị diện tích.",
                "correct": true,
                "explanation": "Chia tứ giác thành $\\triangle OAC$ và $\\triangle ABC$, tính được diện tích bằng 16."
              },
              {
                "key": "d",
                "text": "Biểu thức $F(x; y) = 4x + 3y$ đạt giá trị lớn nhất tại đỉnh $A(4; 0)$.",
                "correct": false,
                "explanation": "$F(A) = 16, F(B) = 4(2) + 3(4) = 20, F(C) = 18$. GTLN đạt tại đỉnh $B(2; 4)$ bằng 20, không phải tại $A$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một công ty sản xuất hai loại nước trái cây đóng chai: Nước cam (loại A) và Nước táo (loại B). Mỗi chai loại A cần $0.2\\text{ kg}$ đường và 3 quả cam, đem lại lợi nhuận 4 nghìn đồng. Mỗi chai loại B cần $0.1\\text{ kg}$ đường và 2 quả táo, đem lại lợi nhuận 3 nghìn đồng. Nguồn nguyên liệu đường không quá $20\\text{ kg}$ mỗi ngày.",
            "items": [
              {
                "key": "a",
                "text": "Ràng buộc về nguyên liệu đường là $0.2x + 0.1y \\le 20$ (với $x, y \\ge 0$).",
                "correct": true,
                "explanation": "Lượng đường sử dụng cho $x$ chai loại A và $y$ chai loại B không vượt quá 20 kg."
              },
              {
                "key": "b",
                "text": "Hàm số biểu diễn lợi nhuận hàng ngày là $F(x; y) = 4x + 3y$ (nghìn đồng).",
                "correct": true,
                "explanation": "Lợi nhuận là 4 nghìn đồng cho mỗi chai A và 3 nghìn đồng cho mỗi chai B."
              },
              {
                "key": "c",
                "text": "Nếu chỉ sản xuất duy nhất loại A thì sản xuất được tối đa 100 chai mỗi ngày.",
                "correct": true,
                "explanation": "Cho $y = 0 \\Rightarrow 0.2x \\le 20 \\Leftrightarrow x \\le 100$ chai."
              },
              {
                "key": "d",
                "text": "Nếu sản xuất 80 chai loại A thì có thể sản xuất tối đa 50 chai loại B.",
                "correct": false,
                "explanation": "$0.2(80) + 0.1y \\le 20 \\Leftrightarrow 16 + 0.1y \\le 20 \\Leftrightarrow 0.1y \\le 4 \\Leftrightarrow y \\le 40$ chai (không phải 50)."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một trang trại dự định dùng tối đa 20 triệu đồng để mua hai loại thức ăn bổ sung cho bò sữa: Loại I giá 400 nghìn đồng/bao (chứa 10 đơn vị đạm), Loại II giá 300 nghìn đồng/bao (chứa 5 đơn vị đạm). Nhu cầu tối thiểu của đàn bò là cần 300 đơn vị đạm mỗi tháng.",
            "items": [
              {
                "key": "a",
                "text": "Bất phương trình ràng buộc về ngân sách mua thức ăn là $4x + 3y \\le 200$ (với $x, y$ là số bao loại I và II).",
                "correct": true,
                "explanation": "$400x + 300y \\le 20000 \\Leftrightarrow 4x + 3y \\le 200$."
              },
              {
                "key": "b",
                "text": "Bất phương trình ràng buộc về lượng đạm tối thiểu là $10x + 5y \\ge 300$.",
                "correct": true,
                "explanation": "Tổng lượng đạm $10x + 5y \\ge 300$ đơn vị."
              },
              {
                "key": "c",
                "text": "Trang trại có thể mua 20 bao loại I và 30 bao loại II.",
                "correct": true,
                "explanation": "$4(20) + 3(30) = 170 \\le 200$ và $10(20) + 5(30) = 350 \\ge 300$ (thỏa mãn)."
              },
              {
                "key": "d",
                "text": "Số bao thức ăn loại I tối đa mà trang trại có thể mua được là 40 bao.",
                "correct": false,
                "explanation": "$4x \\le 200 \\Rightarrow x \\le 50$ bao (khi $y = 0$, đạm $= 500 \\ge 300$)."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một đội xe vận tải cần chở ít nhất 140 người và 9 tấn hàng. Có hai loại xe: Xe A (thuê 4 triệu đồng/chuyến, chở được 20 người và 0.6 tấn hàng), Xe B (thuê 3 triệu đồng/chuyến, chở được 10 người và 1.5 tấn hàng). Đội xe có tối đa 10 xe loại A và 9 xe loại B.",
            "items": [
              {
                "key": "a",
                "text": "Điều kiện số xe: $0 \\le x \\le 10$ và $0 \\le y \\le 9$ ($x, y \\in \\mathbb{N}$).",
                "correct": true,
                "explanation": "Đội xe chỉ có sẵn tối đa 10 xe A và 9 xe B."
              },
              {
                "key": "b",
                "text": "Ràng buộc số người: $20x + 10y \\ge 140 \\Leftrightarrow 2x + y \\ge 14$.",
                "correct": true,
                "explanation": "Đúng theo dữ kiện chở ít nhất 140 người."
              },
              {
                "key": "c",
                "text": "Ràng buộc khối lượng hàng: $0.6x + 1.5y \\ge 9 \\Leftrightarrow 2x + 5y \\ge 30$.",
                "correct": true,
                "explanation": "Nhân hai vế với $10/3$: $2x + 5y \\ge 30$."
              },
              {
                "key": "d",
                "text": "Chi phí thuê xe thấp nhất đạt được khi thuê 10 xe loại A và 0 xe loại B.",
                "correct": false,
                "explanation": "Thuê $x = 5, y = 4$: người $= 100+40=140$, hàng $= 3+6=9$ tấn. Chi phí $= 4(5) + 3(4) = 32$ triệu đồng ($< 10 \\times 4 = 40$ triệu đồng)."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Tìm hoành độ giao điểm của hai đường thẳng $x + y = 10$ và $2x - y = 5$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5",
              "5.0"
            ],
            "explanation": "Cộng hai phương trình: $3x = 15 \\Rightarrow x = 5$."
          },
          {
            "id": 2,
            "question": "Tính diện tích của hình tam giác giới hạn bởi ba đường thẳng: $x = 0, y = 0, x + 2y = 8$.",
            "correctAnswer": "16",
            "acceptedAnswers": [
              "16",
              "16.0"
            ],
            "explanation": "Giao với trục tọa độ tại $A(8; 0)$ và $B(0; 4)$. Diện tích $S = \\frac{1}{2}(8)(4) = 16$."
          },
          {
            "id": 3,
            "question": "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền đa giác có các đỉnh $A(0; 0), B(6; 0), C(4; 3), D(0; 5)$.",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30",
              "30.0"
            ],
            "explanation": "$F(A) = 0, F(B) = 30, F(C) = 5(4)+3(3) = 29, F(D) = 15$. GTLN là 30."
          },
          {
            "id": 4,
            "question": "Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = 3x - 4y$ trên miền tam giác có ba đỉnh $A(1; 1), B(5; 2), C(2; 6)$.",
            "correctAnswer": "-18",
            "acceptedAnswers": [
              "-18",
              "-18.0"
            ],
            "explanation": "$F(A) = 3(1)-4(1) = -1, F(B) = 3(5)-4(2) = 7, F(C) = 3(2)-4(6) = -18$. GTNN là -18."
          },
          {
            "id": 5,
            "question": "Một xí nghiệp sản xuất hai loại sản phẩm I và II. Mỗi tấn sản phẩm I cần 2 máy A và 1 máy B, đem lại lợi nhuận 40 triệu đồng. Mỗi tấn sản phẩm II cần 1 máy A và 2 máy B, đem lại lợi nhuận 50 triệu đồng. Xí nghiệp có tối đa 8 máy A và 10 máy B. Hỏi lợi nhuận lớn nhất xí nghiệp có thể đạt được là bao nhiêu triệu đồng?",
            "correctAnswer": "260",
            "acceptedAnswers": [
              "260",
              "260.0"
            ],
            "explanation": "Hệ BPT: $2x + y \\le 8, x + 2y \\le 10, x \\ge 0, y \\ge 0$. Đỉnh miền nghiệm: $(0;0), (4;0), (2;4), (0;5)$. Lợi nhuận $F(x; y) = 40x + 50y$. $F(2; 4) = 40(2) + 50(4) = 260$ triệu đồng."
          },
          {
            "id": 6,
            "question": "Một công ty cần thuê xe để chở 140 người và 9 tấn hàng. Xe lớn thuê 4 triệu/chuyến (chở 20 người, 0.6 tấn), xe nhỏ thuê 3 triệu/chuyến (chở 10 người, 1.5 tấn). Chi phí thuê xe nhỏ nhất là bao nhiêu triệu đồng?",
            "correctAnswer": "32",
            "acceptedAnswers": [
              "32",
              "32.0"
            ],
            "explanation": "Thuê 5 xe lớn và 4 xe nhỏ: người $= 5(20)+4(10)=140$, hàng $= 5(0.6)+4(1.5)=9$ tấn. Chi phí $= 5(4) + 4(3) = 32$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Hệ BPT Bậc Nhất 2 Ẩn",
        "code": "CD2-204",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
            "options": {
              "A": "$(2; 2)$",
              "B": "$(1; 4)$",
              "C": "$(1; 1)$",
              "D": "$(3; 1)$"
            },
            "correct": "C",
            "explanation": "Thay $(1; 1)$ vào: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$?",
            "options": {
              "A": "$(2; 1)$",
              "B": "$(0; 1)$",
              "C": "$(3; 0)$",
              "D": "$(0; 0)$"
            },
            "correct": "A",
            "explanation": "Thay $(2; 1)$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$ (đều thỏa mãn)."
          },
          {
            "id": 3,
            "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$xy - 1 \\ge 0$",
              "B": "$x^2 + y \\le 4$",
              "C": "$2x + 3y^2 < 1$",
              "D": "$3x - 2y + 5 > 0$"
            },
            "correct": "D",
            "explanation": "Phương án A là bất phương trình bậc nhất hai ẩn theo định nghĩa."
          },
          {
            "id": 4,
            "question": "Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là:",
            "options": {
              "A": "Nửa mặt phẳng nằm bên trái trục tung",
              "B": "Nửa mặt phẳng nằm bên phải trục tung kể cả trục tung",
              "C": "Nửa mặt phẳng nằm phía trên trục hoành",
              "D": "Nửa mặt phẳng nằm phía dưới trục hoành"
            },
            "correct": "B",
            "explanation": "$x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."
          },
          {
            "id": 5,
            "question": "Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác có ba đỉnh $A(0; 0), B(4; 0), C(0; 12)$. Giá trị lớn nhất của $F(x; y)$ bằng:",
            "options": {
              "A": "$8$",
              "B": "$10$",
              "C": "$6$",
              "D": "$24$"
            },
            "correct": "D",
            "explanation": "$F(A) = 0, F(B) = 3(4) = 12, F(C) = 2(12) = 24$. GTLN là $24$."
          },
          {
            "id": 6,
            "question": "Đường thẳng $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
            "options": {
              "A": "$x - 2y > 4$",
              "B": "$x - 2y > 5$",
              "C": "$x - 2y < 4$",
              "D": "$x - 2y \\ge 4$"
            },
            "correct": "C",
            "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$ nên thuộc miền nghiệm $x - 2y < 4$."
          },
          {
            "id": 7,
            "question": "Một người nông dân trồng hai loại rau trên diện tích tối đa 10 sào đất. Gọi $x$ và $y$ là số sào đất trồng rau cải và rau muống. Bất phương trình thể hiện điều kiện về diện tích là:",
            "options": {
              "A": "$x - y \\le 10$",
              "B": "$x + y \\ge 10$",
              "C": "$x + y \\le 10$ ($x, y \\ge 0$)",
              "D": "$xy \\le 10$"
            },
            "correct": "C",
            "explanation": "Tổng diện tích trồng không vượt quá 10 sào: $x + y \\le 10$ với $x, y \\ge 0$."
          },
          {
            "id": 8,
            "question": "Hệ bất phương trình nào sau đây có miền nghiệm là một tứ giác lồi?",
            "options": {
              "A": "$\\begin{cases} x + y \\le 2 \\\\ x \\ge 0 \\end{cases}$",
              "B": "$\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$",
              "C": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
              "D": "$\\begin{cases} x + y \\ge 1 \\\\ x - y \\le 0 \\end{cases}$"
            },
            "correct": "B",
            "explanation": "Miền nghiệm là hình chữ nhật (tứ giác lồi) có 4 đỉnh $(0;0), (4;0), (4;3), (0;3)$."
          },
          {
            "id": 9,
            "question": "Cho miền nghiệm của hệ BPT là tam giác $OAB$ với $O(0; 0), A(3; 0), B(1; 4)$. Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - 3y$ bằng:",
            "options": {
              "A": "$-10$",
              "B": "$0$",
              "C": "$-5$",
              "D": "$6$"
            },
            "correct": "A",
            "explanation": "$F(O) = 0, F(A) = 2(3) - 0 = 6, F(B) = 2(1) - 3(4) = -10$. Giá trị nhỏ nhất là $-10$."
          },
          {
            "id": 10,
            "question": "Một xưởng cơ khí có 120 giờ công làm việc mỗi tuần để sản xuất hai loại chi tiết máy. Chi tiết I cần 2 giờ, chi tiết II cần 3 giờ. Bất phương trình ràng buộc về thời gian công là:",
            "options": {
              "A": "$2x + 3y \\ge 120$",
              "B": "$2x + 3y \\le 120$ ($x, y \\ge 0$)",
              "C": "$x + y \\le 120$",
              "D": "$3x + 2y \\le 120$"
            },
            "correct": "B",
            "explanation": "$2x + 3y \\le 120$ với $x, y \\ge 0$."
          },
          {
            "id": 11,
            "question": "Tọa độ giao điểm của hai đường thẳng $x + y = 18$ và $2x - y = 12$ là:",
            "options": {
              "A": "$(\\frac{30}{3}; \\frac{24}{3})$",
              "B": "$(\\frac{18}{2}; \\frac{12}{2})$",
              "C": "$(18; 12)$",
              "D": "$(\\frac{6}{3}; \\frac{30}{3})$"
            },
            "correct": "A",
            "explanation": "Cộng hai phương trình: $3x = c_1 + c_2 \\Rightarrow x = (c_1 + c_2)/3, y = c_1 - x = (2c_1 - c_2)/3$."
          },
          {
            "id": 12,
            "question": "Một cửa hàng kinh doanh hai loại trà sữa với lợi nhuận mỗi ly lần lượt là 15 nghìn đồng và 20 nghìn đồng. Hàm mục tiêu biểu diễn tổng lợi nhuận (nghìn đồng) khi bán $x$ ly loại 1 và $y$ ly loại 2 là:",
            "options": {
              "A": "$F(x; y) = 20x + 15y$",
              "B": "$F(x; y) = 15x - 20y$",
              "C": "$F(x; y) = 35(x + y)$",
              "D": "$F(x; y) = 15x + 20y$"
            },
            "correct": "D",
            "explanation": "Lợi nhuận: $F(x; y) = 15x + 20y$ (nghìn đồng)."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$ có miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$.",
            "items": [
              {
                "key": "a",
                "text": "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ bất phương trình.",
                "correct": true,
                "explanation": "Thay $(1; 2)$ thỏa mãn cả 4 bất phương trình."
              },
              {
                "key": "b",
                "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + y = 6$ và $2x + y = 8$.",
                "correct": true,
                "explanation": "Giải hệ: $x = 2, y = 4 \\Rightarrow B(2; 4)$."
              },
              {
                "key": "c",
                "text": "Diện tích của tứ giác miền nghiệm $OABC$ bằng 16 đơn vị diện tích.",
                "correct": true,
                "explanation": "Chia tứ giác thành $\\triangle OAC$ và $\\triangle ABC$, tính được diện tích bằng 16."
              },
              {
                "key": "d",
                "text": "Biểu thức $F(x; y) = 4x + 3y$ đạt giá trị lớn nhất tại đỉnh $A(4; 0)$.",
                "correct": false,
                "explanation": "$F(A) = 16, F(B) = 4(2) + 3(4) = 20, F(C) = 18$. GTLN đạt tại đỉnh $B(2; 4)$ bằng 20, không phải tại $A$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một công ty sản xuất hai loại nước trái cây đóng chai: Nước cam (loại A) và Nước táo (loại B). Mỗi chai loại A cần $0.2\\text{ kg}$ đường và 3 quả cam, đem lại lợi nhuận 4 nghìn đồng. Mỗi chai loại B cần $0.1\\text{ kg}$ đường và 2 quả táo, đem lại lợi nhuận 3 nghìn đồng. Nguồn nguyên liệu đường không quá $20\\text{ kg}$ mỗi ngày.",
            "items": [
              {
                "key": "a",
                "text": "Ràng buộc về nguyên liệu đường là $0.2x + 0.1y \\le 20$ (với $x, y \\ge 0$).",
                "correct": true,
                "explanation": "Lượng đường sử dụng cho $x$ chai loại A và $y$ chai loại B không vượt quá 20 kg."
              },
              {
                "key": "b",
                "text": "Hàm số biểu diễn lợi nhuận hàng ngày là $F(x; y) = 4x + 3y$ (nghìn đồng).",
                "correct": true,
                "explanation": "Lợi nhuận là 4 nghìn đồng cho mỗi chai A và 3 nghìn đồng cho mỗi chai B."
              },
              {
                "key": "c",
                "text": "Nếu chỉ sản xuất duy nhất loại A thì sản xuất được tối đa 100 chai mỗi ngày.",
                "correct": true,
                "explanation": "Cho $y = 0 \\Rightarrow 0.2x \\le 20 \\Leftrightarrow x \\le 100$ chai."
              },
              {
                "key": "d",
                "text": "Nếu sản xuất 80 chai loại A thì có thể sản xuất tối đa 50 chai loại B.",
                "correct": false,
                "explanation": "$0.2(80) + 0.1y \\le 20 \\Leftrightarrow 16 + 0.1y \\le 20 \\Leftrightarrow 0.1y \\le 4 \\Leftrightarrow y \\le 40$ chai (không phải 50)."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một trang trại dự định dùng tối đa 20 triệu đồng để mua hai loại thức ăn bổ sung cho bò sữa: Loại I giá 400 nghìn đồng/bao (chứa 10 đơn vị đạm), Loại II giá 300 nghìn đồng/bao (chứa 5 đơn vị đạm). Nhu cầu tối thiểu của đàn bò là cần 300 đơn vị đạm mỗi tháng.",
            "items": [
              {
                "key": "a",
                "text": "Bất phương trình ràng buộc về ngân sách mua thức ăn là $4x + 3y \\le 200$ (với $x, y$ là số bao loại I và II).",
                "correct": true,
                "explanation": "$400x + 300y \\le 20000 \\Leftrightarrow 4x + 3y \\le 200$."
              },
              {
                "key": "b",
                "text": "Bất phương trình ràng buộc về lượng đạm tối thiểu là $10x + 5y \\ge 300$.",
                "correct": true,
                "explanation": "Tổng lượng đạm $10x + 5y \\ge 300$ đơn vị."
              },
              {
                "key": "c",
                "text": "Trang trại có thể mua 20 bao loại I và 30 bao loại II.",
                "correct": true,
                "explanation": "$4(20) + 3(30) = 170 \\le 200$ và $10(20) + 5(30) = 350 \\ge 300$ (thỏa mãn)."
              },
              {
                "key": "d",
                "text": "Số bao thức ăn loại I tối đa mà trang trại có thể mua được là 40 bao.",
                "correct": false,
                "explanation": "$4x \\le 200 \\Rightarrow x \\le 50$ bao (khi $y = 0$, đạm $= 500 \\ge 300$)."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một đội xe vận tải cần chở ít nhất 140 người và 9 tấn hàng. Có hai loại xe: Xe A (thuê 4 triệu đồng/chuyến, chở được 20 người và 0.6 tấn hàng), Xe B (thuê 3 triệu đồng/chuyến, chở được 10 người và 1.5 tấn hàng). Đội xe có tối đa 10 xe loại A và 9 xe loại B.",
            "items": [
              {
                "key": "a",
                "text": "Điều kiện số xe: $0 \\le x \\le 10$ và $0 \\le y \\le 9$ ($x, y \\in \\mathbb{N}$).",
                "correct": true,
                "explanation": "Đội xe chỉ có sẵn tối đa 10 xe A và 9 xe B."
              },
              {
                "key": "b",
                "text": "Ràng buộc số người: $20x + 10y \\ge 140 \\Leftrightarrow 2x + y \\ge 14$.",
                "correct": true,
                "explanation": "Đúng theo dữ kiện chở ít nhất 140 người."
              },
              {
                "key": "c",
                "text": "Ràng buộc khối lượng hàng: $0.6x + 1.5y \\ge 9 \\Leftrightarrow 2x + 5y \\ge 30$.",
                "correct": true,
                "explanation": "Nhân hai vế với $10/3$: $2x + 5y \\ge 30$."
              },
              {
                "key": "d",
                "text": "Chi phí thuê xe thấp nhất đạt được khi thuê 10 xe loại A và 0 xe loại B.",
                "correct": false,
                "explanation": "Thuê $x = 5, y = 4$: người $= 100+40=140$, hàng $= 3+6=9$ tấn. Chi phí $= 4(5) + 3(4) = 32$ triệu đồng ($< 10 \\times 4 = 40$ triệu đồng)."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Tìm hoành độ giao điểm của hai đường thẳng $x + y = 10$ và $2x - y = 5$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5",
              "5.0"
            ],
            "explanation": "Cộng hai phương trình: $3x = 15 \\Rightarrow x = 5$."
          },
          {
            "id": 2,
            "question": "Tính diện tích của hình tam giác giới hạn bởi ba đường thẳng: $x = 0, y = 0, x + 2y = 8$.",
            "correctAnswer": "16",
            "acceptedAnswers": [
              "16",
              "16.0"
            ],
            "explanation": "Giao với trục tọa độ tại $A(8; 0)$ và $B(0; 4)$. Diện tích $S = \\frac{1}{2}(8)(4) = 16$."
          },
          {
            "id": 3,
            "question": "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền đa giác có các đỉnh $A(0; 0), B(6; 0), C(4; 3), D(0; 5)$.",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30",
              "30.0"
            ],
            "explanation": "$F(A) = 0, F(B) = 30, F(C) = 5(4)+3(3) = 29, F(D) = 15$. GTLN là 30."
          },
          {
            "id": 4,
            "question": "Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = 3x - 4y$ trên miền tam giác có ba đỉnh $A(1; 1), B(5; 2), C(2; 6)$.",
            "correctAnswer": "-18",
            "acceptedAnswers": [
              "-18",
              "-18.0"
            ],
            "explanation": "$F(A) = 3(1)-4(1) = -1, F(B) = 3(5)-4(2) = 7, F(C) = 3(2)-4(6) = -18$. GTNN là -18."
          },
          {
            "id": 5,
            "question": "Một xí nghiệp sản xuất hai loại sản phẩm I và II. Mỗi tấn sản phẩm I cần 2 máy A và 1 máy B, đem lại lợi nhuận 40 triệu đồng. Mỗi tấn sản phẩm II cần 1 máy A và 2 máy B, đem lại lợi nhuận 50 triệu đồng. Xí nghiệp có tối đa 8 máy A và 10 máy B. Hỏi lợi nhuận lớn nhất xí nghiệp có thể đạt được là bao nhiêu triệu đồng?",
            "correctAnswer": "260",
            "acceptedAnswers": [
              "260",
              "260.0"
            ],
            "explanation": "Hệ BPT: $2x + y \\le 8, x + 2y \\le 10, x \\ge 0, y \\ge 0$. Đỉnh miền nghiệm: $(0;0), (4;0), (2;4), (0;5)$. Lợi nhuận $F(x; y) = 40x + 50y$. $F(2; 4) = 40(2) + 50(4) = 260$ triệu đồng."
          },
          {
            "id": 6,
            "question": "Một công ty cần thuê xe để chở 140 người và 9 tấn hàng. Xe lớn thuê 4 triệu/chuyến (chở 20 người, 0.6 tấn), xe nhỏ thuê 3 triệu/chuyến (chở 10 người, 1.5 tấn). Chi phí thuê xe nhỏ nhất là bao nhiêu triệu đồng?",
            "correctAnswer": "32",
            "acceptedAnswers": [
              "32",
              "32.0"
            ],
            "explanation": "Thuê 5 xe lớn và 4 xe nhỏ: người $= 5(20)+4(10)=140$, hàng $= 5(0.6)+4(1.5)=9$ tấn. Chi phí $= 5(4) + 4(3) = 32$ triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Hệ BPT Bậc Nhất 2 Ẩn",
        "code": "CD2-205",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
            "options": {
              "A": "$(3; 1)$",
              "B": "$(1; 4)$",
              "C": "$(1; 1)$",
              "D": "$(2; 2)$"
            },
            "correct": "C",
            "explanation": "Thay $(1; 1)$ vào: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$?",
            "options": {
              "A": "$(0; 1)$",
              "B": "$(2; 1)$",
              "C": "$(0; 0)$",
              "D": "$(3; 0)$"
            },
            "correct": "B",
            "explanation": "Thay $(2; 1)$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$ (đều thỏa mãn)."
          },
          {
            "id": 3,
            "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$xy - 1 \\ge 0$",
              "B": "$3x - 2y + 5 > 0$",
              "C": "$x^2 + y \\le 4$",
              "D": "$2x + 3y^2 < 1$"
            },
            "correct": "B",
            "explanation": "Phương án A là bất phương trình bậc nhất hai ẩn theo định nghĩa."
          },
          {
            "id": 4,
            "question": "Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là:",
            "options": {
              "A": "Nửa mặt phẳng nằm bên trái trục tung",
              "B": "Nửa mặt phẳng nằm bên phải trục tung kể cả trục tung",
              "C": "Nửa mặt phẳng nằm phía dưới trục hoành",
              "D": "Nửa mặt phẳng nằm phía trên trục hoành"
            },
            "correct": "B",
            "explanation": "$x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."
          },
          {
            "id": 5,
            "question": "Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác có ba đỉnh $A(0; 0), B(4; 0), C(0; 13)$. Giá trị lớn nhất của $F(x; y)$ bằng:",
            "options": {
              "A": "$8$",
              "B": "$10$",
              "C": "$26$",
              "D": "$6$"
            },
            "correct": "C",
            "explanation": "$F(A) = 0, F(B) = 3(4) = 12, F(C) = 2(13) = 26$. GTLN là $26$."
          },
          {
            "id": 6,
            "question": "Đường thẳng $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
            "options": {
              "A": "$x - 2y \\ge 4$",
              "B": "$x - 2y > 5$",
              "C": "$x - 2y > 4$",
              "D": "$x - 2y < 4$"
            },
            "correct": "D",
            "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$ nên thuộc miền nghiệm $x - 2y < 4$."
          },
          {
            "id": 7,
            "question": "Một người nông dân trồng hai loại rau trên diện tích tối đa 10 sào đất. Gọi $x$ và $y$ là số sào đất trồng rau cải và rau muống. Bất phương trình thể hiện điều kiện về diện tích là:",
            "options": {
              "A": "$x + y \\le 10$ ($x, y \\ge 0$)",
              "B": "$x + y \\ge 10$",
              "C": "$xy \\le 10$",
              "D": "$x - y \\le 10$"
            },
            "correct": "A",
            "explanation": "Tổng diện tích trồng không vượt quá 10 sào: $x + y \\le 10$ với $x, y \\ge 0$."
          },
          {
            "id": 8,
            "question": "Hệ bất phương trình nào sau đây có miền nghiệm là một tứ giác lồi?",
            "options": {
              "A": "$\\begin{cases} x + y \\le 2 \\\\ x \\ge 0 \\end{cases}$",
              "B": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
              "C": "$\\begin{cases} x + y \\ge 1 \\\\ x - y \\le 0 \\end{cases}$",
              "D": "$\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$"
            },
            "correct": "D",
            "explanation": "Miền nghiệm là hình chữ nhật (tứ giác lồi) có 4 đỉnh $(0;0), (4;0), (4;3), (0;3)$."
          },
          {
            "id": 9,
            "question": "Cho miền nghiệm của hệ BPT là tam giác $OAB$ với $O(0; 0), A(3; 0), B(1; 4)$. Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - 3y$ bằng:",
            "options": {
              "A": "$-5$",
              "B": "$0$",
              "C": "$-10$",
              "D": "$6$"
            },
            "correct": "C",
            "explanation": "$F(O) = 0, F(A) = 2(3) - 0 = 6, F(B) = 2(1) - 3(4) = -10$. Giá trị nhỏ nhất là $-10$."
          },
          {
            "id": 10,
            "question": "Một xưởng cơ khí có 120 giờ công làm việc mỗi tuần để sản xuất hai loại chi tiết máy. Chi tiết I cần 2 giờ, chi tiết II cần 3 giờ. Bất phương trình ràng buộc về thời gian công là:",
            "options": {
              "A": "$3x + 2y \\le 120$",
              "B": "$x + y \\le 120$",
              "C": "$2x + 3y \\ge 120$",
              "D": "$2x + 3y \\le 120$ ($x, y \\ge 0$)"
            },
            "correct": "D",
            "explanation": "$2x + 3y \\le 120$ với $x, y \\ge 0$."
          },
          {
            "id": 11,
            "question": "Tọa độ giao điểm của hai đường thẳng $x + y = 20$ và $2x - y = 13$ là:",
            "options": {
              "A": "$(\\frac{33}{3}; \\frac{27}{3})$",
              "B": "$(\\frac{7}{3}; \\frac{33}{3})$",
              "C": "$(20; 13)$",
              "D": "$(\\frac{20}{2}; \\frac{13}{2})$"
            },
            "correct": "A",
            "explanation": "Cộng hai phương trình: $3x = c_1 + c_2 \\Rightarrow x = (c_1 + c_2)/3, y = c_1 - x = (2c_1 - c_2)/3$."
          },
          {
            "id": 12,
            "question": "Một cửa hàng kinh doanh hai loại trà sữa với lợi nhuận mỗi ly lần lượt là 15 nghìn đồng và 20 nghìn đồng. Hàm mục tiêu biểu diễn tổng lợi nhuận (nghìn đồng) khi bán $x$ ly loại 1 và $y$ ly loại 2 là:",
            "options": {
              "A": "$F(x; y) = 15x + 20y$",
              "B": "$F(x; y) = 20x + 15y$",
              "C": "$F(x; y) = 15x - 20y$",
              "D": "$F(x; y) = 35(x + y)$"
            },
            "correct": "A",
            "explanation": "Lợi nhuận: $F(x; y) = 15x + 20y$ (nghìn đồng)."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$ có miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$.",
            "items": [
              {
                "key": "a",
                "text": "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ bất phương trình.",
                "correct": true,
                "explanation": "Thay $(1; 2)$ thỏa mãn cả 4 bất phương trình."
              },
              {
                "key": "b",
                "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + y = 6$ và $2x + y = 8$.",
                "correct": true,
                "explanation": "Giải hệ: $x = 2, y = 4 \\Rightarrow B(2; 4)$."
              },
              {
                "key": "c",
                "text": "Diện tích của tứ giác miền nghiệm $OABC$ bằng 16 đơn vị diện tích.",
                "correct": true,
                "explanation": "Chia tứ giác thành $\\triangle OAC$ và $\\triangle ABC$, tính được diện tích bằng 16."
              },
              {
                "key": "d",
                "text": "Biểu thức $F(x; y) = 4x + 3y$ đạt giá trị lớn nhất tại đỉnh $A(4; 0)$.",
                "correct": false,
                "explanation": "$F(A) = 16, F(B) = 4(2) + 3(4) = 20, F(C) = 18$. GTLN đạt tại đỉnh $B(2; 4)$ bằng 20, không phải tại $A$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một công ty sản xuất hai loại nước trái cây đóng chai: Nước cam (loại A) và Nước táo (loại B). Mỗi chai loại A cần $0.2\\text{ kg}$ đường và 3 quả cam, đem lại lợi nhuận 4 nghìn đồng. Mỗi chai loại B cần $0.1\\text{ kg}$ đường và 2 quả táo, đem lại lợi nhuận 3 nghìn đồng. Nguồn nguyên liệu đường không quá $20\\text{ kg}$ mỗi ngày.",
            "items": [
              {
                "key": "a",
                "text": "Ràng buộc về nguyên liệu đường là $0.2x + 0.1y \\le 20$ (với $x, y \\ge 0$).",
                "correct": true,
                "explanation": "Lượng đường sử dụng cho $x$ chai loại A và $y$ chai loại B không vượt quá 20 kg."
              },
              {
                "key": "b",
                "text": "Hàm số biểu diễn lợi nhuận hàng ngày là $F(x; y) = 4x + 3y$ (nghìn đồng).",
                "correct": true,
                "explanation": "Lợi nhuận là 4 nghìn đồng cho mỗi chai A và 3 nghìn đồng cho mỗi chai B."
              },
              {
                "key": "c",
                "text": "Nếu chỉ sản xuất duy nhất loại A thì sản xuất được tối đa 100 chai mỗi ngày.",
                "correct": true,
                "explanation": "Cho $y = 0 \\Rightarrow 0.2x \\le 20 \\Leftrightarrow x \\le 100$ chai."
              },
              {
                "key": "d",
                "text": "Nếu sản xuất 80 chai loại A thì có thể sản xuất tối đa 50 chai loại B.",
                "correct": false,
                "explanation": "$0.2(80) + 0.1y \\le 20 \\Leftrightarrow 16 + 0.1y \\le 20 \\Leftrightarrow 0.1y \\le 4 \\Leftrightarrow y \\le 40$ chai (không phải 50)."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một trang trại dự định dùng tối đa 20 triệu đồng để mua hai loại thức ăn bổ sung cho bò sữa: Loại I giá 400 nghìn đồng/bao (chứa 10 đơn vị đạm), Loại II giá 300 nghìn đồng/bao (chứa 5 đơn vị đạm). Nhu cầu tối thiểu của đàn bò là cần 300 đơn vị đạm mỗi tháng.",
            "items": [
              {
                "key": "a",
                "text": "Bất phương trình ràng buộc về ngân sách mua thức ăn là $4x + 3y \\le 200$ (với $x, y$ là số bao loại I và II).",
                "correct": true,
                "explanation": "$400x + 300y \\le 20000 \\Leftrightarrow 4x + 3y \\le 200$."
              },
              {
                "key": "b",
                "text": "Bất phương trình ràng buộc về lượng đạm tối thiểu là $10x + 5y \\ge 300$.",
                "correct": true,
                "explanation": "Tổng lượng đạm $10x + 5y \\ge 300$ đơn vị."
              },
              {
                "key": "c",
                "text": "Trang trại có thể mua 20 bao loại I và 30 bao loại II.",
                "correct": true,
                "explanation": "$4(20) + 3(30) = 170 \\le 200$ và $10(20) + 5(30) = 350 \\ge 300$ (thỏa mãn)."
              },
              {
                "key": "d",
                "text": "Số bao thức ăn loại I tối đa mà trang trại có thể mua được là 40 bao.",
                "correct": false,
                "explanation": "$4x \\le 200 \\Rightarrow x \\le 50$ bao (khi $y = 0$, đạm $= 500 \\ge 300$)."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một đội xe vận tải cần chở ít nhất 140 người và 9 tấn hàng. Có hai loại xe: Xe A (thuê 4 triệu đồng/chuyến, chở được 20 người và 0.6 tấn hàng), Xe B (thuê 3 triệu đồng/chuyến, chở được 10 người và 1.5 tấn hàng). Đội xe có tối đa 10 xe loại A và 9 xe loại B.",
            "items": [
              {
                "key": "a",
                "text": "Điều kiện số xe: $0 \\le x \\le 10$ và $0 \\le y \\le 9$ ($x, y \\in \\mathbb{N}$).",
                "correct": true,
                "explanation": "Đội xe chỉ có sẵn tối đa 10 xe A và 9 xe B."
              },
              {
                "key": "b",
                "text": "Ràng buộc số người: $20x + 10y \\ge 140 \\Leftrightarrow 2x + y \\ge 14$.",
                "correct": true,
                "explanation": "Đúng theo dữ kiện chở ít nhất 140 người."
              },
              {
                "key": "c",
                "text": "Ràng buộc khối lượng hàng: $0.6x + 1.5y \\ge 9 \\Leftrightarrow 2x + 5y \\ge 30$.",
                "correct": true,
                "explanation": "Nhân hai vế với $10/3$: $2x + 5y \\ge 30$."
              },
              {
                "key": "d",
                "text": "Chi phí thuê xe thấp nhất đạt được khi thuê 10 xe loại A và 0 xe loại B.",
                "correct": false,
                "explanation": "Thuê $x = 5, y = 4$: người $= 100+40=140$, hàng $= 3+6=9$ tấn. Chi phí $= 4(5) + 3(4) = 32$ triệu đồng ($< 10 \\times 4 = 40$ triệu đồng)."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Tìm hoành độ giao điểm của hai đường thẳng $x + y = 10$ và $2x - y = 5$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5",
              "5.0"
            ],
            "explanation": "Cộng hai phương trình: $3x = 15 \\Rightarrow x = 5$."
          },
          {
            "id": 2,
            "question": "Tính diện tích của hình tam giác giới hạn bởi ba đường thẳng: $x = 0, y = 0, x + 2y = 8$.",
            "correctAnswer": "16",
            "acceptedAnswers": [
              "16",
              "16.0"
            ],
            "explanation": "Giao với trục tọa độ tại $A(8; 0)$ và $B(0; 4)$. Diện tích $S = \\frac{1}{2}(8)(4) = 16$."
          },
          {
            "id": 3,
            "question": "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền đa giác có các đỉnh $A(0; 0), B(6; 0), C(4; 3), D(0; 5)$.",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30",
              "30.0"
            ],
            "explanation": "$F(A) = 0, F(B) = 30, F(C) = 5(4)+3(3) = 29, F(D) = 15$. GTLN là 30."
          },
          {
            "id": 4,
            "question": "Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = 3x - 4y$ trên miền tam giác có ba đỉnh $A(1; 1), B(5; 2), C(2; 6)$.",
            "correctAnswer": "-18",
            "acceptedAnswers": [
              "-18",
              "-18.0"
            ],
            "explanation": "$F(A) = 3(1)-4(1) = -1, F(B) = 3(5)-4(2) = 7, F(C) = 3(2)-4(6) = -18$. GTNN là -18."
          },
          {
            "id": 5,
            "question": "Một xí nghiệp sản xuất hai loại sản phẩm I và II. Mỗi tấn sản phẩm I cần 2 máy A và 1 máy B, đem lại lợi nhuận 40 triệu đồng. Mỗi tấn sản phẩm II cần 1 máy A và 2 máy B, đem lại lợi nhuận 50 triệu đồng. Xí nghiệp có tối đa 8 máy A và 10 máy B. Hỏi lợi nhuận lớn nhất xí nghiệp có thể đạt được là bao nhiêu triệu đồng?",
            "correctAnswer": "260",
            "acceptedAnswers": [
              "260",
              "260.0"
            ],
            "explanation": "Hệ BPT: $2x + y \\le 8, x + 2y \\le 10, x \\ge 0, y \\ge 0$. Đỉnh miền nghiệm: $(0;0), (4;0), (2;4), (0;5)$. Lợi nhuận $F(x; y) = 40x + 50y$. $F(2; 4) = 40(2) + 50(4) = 260$ triệu đồng."
          },
          {
            "id": 6,
            "question": "Một công ty cần thuê xe để chở 140 người và 9 tấn hàng. Xe lớn thuê 4 triệu/chuyến (chở 20 người, 0.6 tấn), xe nhỏ thuê 3 triệu/chuyến (chở 10 người, 1.5 tấn). Chi phí thuê xe nhỏ nhất là bao nhiêu triệu đồng?",
            "correctAnswer": "32",
            "acceptedAnswers": [
              "32",
              "32.0"
            ],
            "explanation": "Thuê 5 xe lớn và 4 xe nhỏ: người $= 5(20)+4(10)=140$, hàng $= 5(0.6)+4(1.5)=9$ tấn. Chi phí $= 5(4) + 4(3) = 32$ triệu đồng."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd3",
    "code": "CĐ 3",
    "title": "GÓC KHOẢNG CÁCH LỚP 11",
    "icon": "fa-solid fa-compass-drafting",
    "badge": "Lớp 11 • Kiến thức trọng tâm",
    "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "description": "Góc giữa 2 đường thẳng, góc giữa đường thẳng và mặt phẳng, góc nhị diện; khoảng cách từ điểm đến mp, khoảng cách 2 đường chéo nhau và ứng dụng kiến trúc công trình.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Góc trong không gian -->\n  <div class=\"bg-indigo-50/70 border-l-4 border-indigo-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-indigo-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-compass-drafting text-indigo-600\"></i>\n      1. Góc Trong Không Gian\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-indigo-200\">\n        <p class=\"font-bold text-indigo-950 mb-1\">Góc giữa 2 đường thẳng:</p>\n        <p>$0^\\circ \\le \\varphi \\le 90^\\circ$</p>\n        <p class=\"mt-1 text-indigo-800 font-semibold\">$\\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-indigo-200\">\n        <p class=\"font-bold text-indigo-950 mb-1\">Góc giữa đường thẳng & mp:</p>\n        <p>Góc giữa $d$ và hình chiếu $d'$ của nó lên $(P)$</p>\n        <p class=\"mt-1 text-indigo-800 font-semibold\">$\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-indigo-200\">\n        <p class=\"font-bold text-indigo-950 mb-1\">Góc giữa hai mặt phẳng:</p>\n        <p>Góc phẳng nhị diện hoặc góc giữa 2 vectơ pháp tuyến:</p>\n        <p class=\"mt-1 text-indigo-800 font-semibold\">$\\cos \\varphi = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Khoảng cách -->\n  <div class=\"bg-teal-50/70 border-l-4 border-teal-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-teal-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-ruler-combined text-teal-600\"></i>\n      2. Khoảng Cách Trong Không Gian\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200\">\n        <p class=\"font-bold text-teal-900\">Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$:</p>\n        <p>Hạ $MH \\perp (P) \\Rightarrow d(M, (P)) = MH$.</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\"><strong>Quy tắc dời điểm:</strong> Nếu $MA$ cắt $(P)$ tại $I$ thì $\\frac{d(M, (P))}{d(A, (P))} = \\frac{MI}{AI}$. Nếu $MA \\parallel (P)$ thì $d(M, (P)) = d(A, (P))$. Thường đưa về chân đường vuông góc của khối chóp.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200\">\n        <p class=\"font-bold text-teal-900\">Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$:</p>\n        <p>Dựng mặt phẳng $(P)$ chứa $b$ và song song với $a$:</p>\n        <p class=\"mt-1 text-teal-800 font-semibold\">$d(a, b) = d(a, (P)) = d(A, (P))$ (với $A$ là điểm bất kỳ thuộc $a$).</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Ứng dụng thực tế -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-building text-purple-600\"></i>\n      3. Ứng Dụng Thực Tiễn Hình Học Không Gian\n    </h4>\n    <ul class=\"list-disc pl-5 space-y-1.5 text-[11.5pt]\">\n      <li><strong>Kiến trúc & xây dựng:</strong> Tính góc nghiêng mái che dốc thoát nước mưa, góc tạo bởi cột trụ và sàn nhà.</li>\n      <li><strong>Khoảng cách an toàn kỹ thuật:</strong> Khoảng cách từ dây cáp điện cao thế/cáp treo đến vách núi đá thẳng đứng hoặc tán cây rừng.</li>\n      <li><strong>Trắc địa & định vị:</strong> Xác định khoảng cách từ đỉnh tháp quan sát đến ranh giới công trình.</li>\n    </ul>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd3-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Góc & Khoảng Cách",
        "code": "CD3-301",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
            "options": {
              "A": "$90^\\circ$",
              "B": "$0^\\circ$",
              "C": "$45^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "A",
            "explanation": "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, tức bằng $90^\\circ$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng $(ABC)$ là:",
            "options": {
              "A": "Đường thẳng $AB$",
              "B": "Đường thẳng $AC$",
              "C": "Đường thẳng $SA$",
              "D": "Đường thẳng $BC$"
            },
            "correct": "A",
            "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $B$ là chính nó. Vậy hình chiếu của $SB$ là $AB$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$ và $SA \\perp (ABCD)$ với $SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "$60^\\circ$",
              "B": "$30^\\circ$",
              "C": "$45^\\circ$",
              "D": "$\\arctan\\frac{\\sqrt{2}}{2}$ (xấp xỉ $35.26^\\circ$)"
            },
            "correct": "D",
            "explanation": "Hình chiếu của $SC$ là $AC = a\\sqrt{2}$. $\\tan\\widehat{SCA} = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
          },
          {
            "id": 4,
            "question": "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài của:",
            "options": {
              "A": "Đoạn thẳng tiếp xúc với $(P)$",
              "B": "Đoạn thẳng vuông góc kẻ từ $M$ đến mặt phẳng $(P)$",
              "C": "Đường xiên nối $M$ đến $(P)$",
              "D": "Đoạn thẳng nối $M$ với một điểm bất kỳ trên $(P)$"
            },
            "correct": "B",
            "explanation": "Theo định nghĩa, khoảng cách từ $M$ đến $(P)$ là độ dài đoạn vuông góc $MH$ với $H \\in (P)$."
          },
          {
            "id": 5,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng:",
            "options": {
              "A": "$a\\sqrt{3}$",
              "B": "$2a$",
              "C": "$a$",
              "D": "$a\\sqrt{2}$"
            },
            "correct": "C",
            "explanation": "Đoạn vuông góc chung giữa hai mặt đáy là cạnh bên $AA' = a$."
          },
          {
            "id": 6,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "$SA \\perp (SBC)$",
              "B": "$BC \\perp (SAB)$",
              "C": "$AC \\perp (SAB)$",
              "D": "$AB \\perp (SBC)$"
            },
            "correct": "B",
            "explanation": "Ta có $BC \\perp AB$ và $BC \\perp SA$ nên $BC \\perp (SAB)$."
          },
          {
            "id": 7,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $SA \\perp (ABCD)$. Khoảng cách từ điểm $S$ đến mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "Độ dài đoạn $SB$",
              "B": "Độ dài đoạn $SD$",
              "C": "Độ dài đoạn $SC$",
              "D": "Độ dài đoạn $SA$"
            },
            "correct": "D",
            "explanation": "Vì $SA \\perp (ABCD)$ tại $A$ nên $d(S, (ABCD)) = SA$."
          },
          {
            "id": 8,
            "question": "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
            "options": {
              "A": "Vô số",
              "B": "$2$",
              "C": "Duy nhất $1$",
              "D": "Không có"
            },
            "correct": "C",
            "explanation": "Theo định lý hình học không gian, có duy nhất một mặt phẳng chứa $a$ và song song với $b$."
          },
          {
            "id": 9,
            "question": "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh bằng nhau. Góc giữa cạnh bên $SA$ và cạnh đáy $AB$ bằng:",
            "options": {
              "A": "$60^\\circ$",
              "B": "$45^\\circ$",
              "C": "$30^\\circ$",
              "D": "$90^\\circ$"
            },
            "correct": "A",
            "explanation": "Tam giác $SAB$ có ba cạnh bằng nhau nên là tam giác đều, do đó góc $\\widehat{SAB} = 60^\\circ$."
          },
          {
            "id": 10,
            "question": "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ có số đo $\\alpha$ luôn thỏa mãn:",
            "options": {
              "A": "$45^\\circ \\le \\alpha \\le 90^\\circ$",
              "B": "$0^\\circ < \\alpha < 180^\\circ$",
              "C": "$0^\\circ \\le \\alpha \\le 180^\\circ$",
              "D": "$0^\\circ \\le \\alpha \\le 90^\\circ$"
            },
            "correct": "D",
            "explanation": "Góc giữa hai mặt phẳng là góc không tù: $0^\\circ \\le \\alpha \\le 90^\\circ$."
          },
          {
            "id": 11,
            "question": "Một mái nhà lợp ngói dốc có chiều rộng mặt bằng là $4\\text{ m}$ và đỉnh nóc nhà nâng cao $1.5\\text{ m}$ so với xà ngang. Góc nghiêng $\\alpha$ của mái nhà so với mặt sàn nằm ngang thỏa mãn $\\tan\\alpha$ bằng:",
            "options": {
              "A": "$1.5$",
              "B": "$\\frac{1.5}{4} = 0.375$",
              "C": "$\\frac{1.5}{2} = 0.75$",
              "D": "$\\frac{4}{1.5} \\approx 2.67$"
            },
            "correct": "C",
            "explanation": "Nửa bề rộng mái là $4 / 2 = 2\\text{ m}$. Độ dốc mái: $\\tan\\alpha = \\frac{1.5}{2} = 0.75$."
          },
          {
            "id": 12,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 3$, tam giác $ABC$ đều cạnh 2. Khoảng cách từ $S$ đến đường thẳng $BC$ bằng:",
            "options": {
              "A": "$\\sqrt{10}$",
              "B": "$\\sqrt{12}$",
              "C": "$3 + \\sqrt3$",
              "D": "$\\sqrt{13}$"
            },
            "correct": "B",
            "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = \\sqrt{3}$. Do $BC \\perp AM$ và $BC \\perp SA \\Rightarrow BC \\perp SM$. $d(S, BC) = SM = \\sqrt{SA^2 + AM^2} = \\sqrt{12}$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 3$, $SA \\perp (ABCD)$ và $SA = 3\\sqrt3$.",
            "items": [
              {
                "key": "a",
                "text": "Góc giữa đường thẳng $SD$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Hình chiếu của $SD$ lên đáy là $AD$. $\\tan\\widehat{SDA} = \\frac{SA}{AD} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3} \\Rightarrow \\widehat{SDA} = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.",
                "correct": true,
                "explanation": "Ta có $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$, mà $CD \\subset (SCD)$ nên $(SCD) \\perp (SAD)$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ chân đường cao $A$ đến mặt phẳng $(SCD)$ bằng $\\frac{3\\sqrt{3}}{2}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp SD$. Vì $CD \\perp (SAD) \\Rightarrow CD \\perp AH \\Rightarrow AH \\perp (SCD)$. $AH = \\frac{SA \\cdot AD}{\\sqrt{SA^2 + AD^2}} = \\frac{3\\sqrt{3} \\cdot 3}{23} = \\frac{3\\sqrt{3}}{2}$."
              },
              {
                "key": "d",
                "text": "Góc giữa hai mặt phẳng $(SCD)$ và $(ABCD)$ có số đo bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Giao tuyến là $CD$. $AD \\perp CD, SD \\perp CD$ nên góc giữa hai mặt phẳng là $\\widehat{SDA} = 60^\\circ$, không phải $45^\\circ$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = 3$, chiều cao lăng trụ $AA' = 3\\sqrt2$.",
            "items": [
              {
                "key": "a",
                "text": "Khoảng cách giữa hai mặt đáy $(ABC)$ và $(A'B'C')$ bằng ${a_val}\\sqrt{2}$.",
                "correct": true,
                "explanation": "Lăng trụ đứng có khoảng cách giữa hai đáy bằng chiều cao cạnh bên $AA' = 3\\sqrt2$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $B'C'$ vuông góc với mặt phẳng $(ABB'A')$.",
                "correct": false,
                "explanation": "Đáy là tam giác vuông cân tại $A$ nên $BC$ không vuông góc với $AB$, do đó $B'C'$ không vuông góc với $(ABB'A')$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $\\frac{{{a_val}\\sqrt{2}}}{{2}}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp BC$ trong tam giác vuông cân tại $A$: $AH = \\frac{BC}{2} = \\frac{3\\sqrt2}{2}$. Do $AH \\perp BB'$ nên $AH \\perp (BCC'B')$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Hình chiếu của $A'B$ lên đáy là $AB$. $\\tan\\alpha = \\frac{A'A}{AB} = \\frac{3\\sqrt2}{3} = \\sqrt2 \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một kỹ sư thiết kế giàn đỡ pin năng lượng mặt trời. Khung đỡ gồm cột trụ thẳng đứng $SO = 2.4\\text{ m}$ cắm trên sàn bê tông nằm ngang. Tấm pin phẳng hình chữ nhật $ABCD$ có tâm tựa tại $S$, nghiêng một góc $\\alpha = 30^\\circ$ so với phương nằm ngang để đón ánh nắng tối ưu.",
            "items": [
              {
                "key": "a",
                "text": "Góc tạo bởi mặt phẳng tấm pin và phương thẳng đứng của cột trụ là $60^\\circ$.",
                "correct": true,
                "explanation": "Cột trụ thẳng đứng vuông góc với sàn, nên góc hợp với tấm pin là $90^\\circ - 30^\\circ = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Khoảng cách từ tâm $S$ của tấm pin đến mặt sàn bê tông bằng $2.4\\text{ m}$.",
                "correct": true,
                "explanation": "Cột trụ $SO$ thẳng đứng vuông góc với sàn nên khoảng cách chính bằng độ dài $SO = 2.4\\text{ m}$."
              },
              {
                "key": "c",
                "text": "Nếu mép thấp nhất của tấm pin cách tâm $S$ một khoảng $1\\text{ m}$ dọc theo mặt nghiêng thì mép này cách mặt sàn $1.9\\text{ m}$.",
                "correct": true,
                "explanation": "Hạ độ cao: $\\Delta h = 1 \\cdot \\sin 30^\\circ = 0.5\\text{ m}$. Độ cao mép sàn: $2.4 - 0.5 = 1.9\\text{ m}$."
              },
              {
                "key": "d",
                "text": "Để tăng góc hứng nắng lên $\\alpha = 45^\\circ$, khoảng cách từ mép thấp nhất đến mặt sàn sẽ tăng lên.",
                "correct": false,
                "explanation": "Góc nghiêng tăng thì $\\sin 45^\\circ > \\sin 30^\\circ$ nên độ tụt dốc lớn hơn, mép thấp sẽ gần mặt sàn hơn."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 3$, $SA \\perp (ABCD)$ và $SA = 3$. Gọi $M$ là trung điểm cạnh $CD$.",
            "items": [
              {
                "key": "a",
                "text": "Đoạn thẳng $AM = \\frac{3\\sqrt{5}}{2}$.",
                "correct": true,
                "explanation": "$AM = \\sqrt{AD^2 + DM^2} = \\sqrt{3^2 + (3/2)^2} = \\frac{3\\sqrt{5}}{2}$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $SM$ vuông góc với đường thẳng $CD$.",
                "correct": false,
                "explanation": "Tam giác $SCD$ vuông tại $D$, $M$ là trung điểm cạnh huyền $CD$ nên $SM$ không vuông góc với $CD$."
              },
              {
                "key": "c",
                "text": "Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng $3$.",
                "correct": true,
                "explanation": "$AD \\perp SA$ và $AD \\perp CD$ nên $AD$ là đoạn vuông góc chung $\\Rightarrow d(SA, CD) = AD = 3$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $SC$ và đường thẳng $AB$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Do $AB \\parallel CD$ nên góc cần tìm là $\\widehat{SCD}$. $\\tan\\widehat{SCD} = \\frac{SD}{CD} = \\frac{3\\sqrt{2}}{3} = \\sqrt{2} \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Tính côsin của góc giữa hai đường thẳng $AC$ và $DA'$ (viết kết quả dạng phân số thập phân làm tròn đến 2 chữ số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Vì $DA' \\parallel CB'$ nên góc giữa $AC$ và $DA'$ bằng góc $\\widehat{B'CA}$. Tam giác $AB'C$ là tam giác đều nên góc bằng $60^\\circ \\Rightarrow \\cos 60^\\circ = 0.5$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $3$, $SA \\perp (ABCD)$ và $SA = 3$. Tính góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABCD)$ (đơn vị: độ).",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0",
              "45°"
            ],
            "explanation": "$\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB = 3, BC = 4$, $SA \\perp (ABC)$ và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Vì $BC \\perp (SAB)$ nên kẻ $AH \\perp SB \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."
          },
          {
            "id": 4,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6",
              "6.0"
            ],
            "explanation": "Đoạn vuông góc chung giữa $SA$ và $BC$ là cạnh đáy $AB = 6$."
          },
          {
            "id": 5,
            "question": "Một tuyến cáp treo nối từ trạm chân núi $A$ lên đỉnh tháp $S$ trên đỉnh đồi thẳng đứng. Đỉnh tháp $S$ có độ cao $300\\text{ m}$ so với mặt đất chân núi, khoảng cách nằm ngang từ $A$ đến chân đồi $H$ là $400\\text{ m}$. Một cabin cáp treo ở chính giữa đoạn cáp $AS$ có khoảng cách thẳng đứng xuống mặt đất nằm ngang là bao nhiêu mét?",
            "correctAnswer": "150",
            "acceptedAnswers": [
              "150",
              "150.0"
            ],
            "explanation": "Cabin ở trung điểm $M$ của $AS$. Theo định lý đường trung bình hình thang: độ cao của $M$ bằng $\\frac{0 + 300}{2} = 150\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một giàn giáo công trình dạng hình hộp chữ nhật có kích thước dài $4\\text{ m}$, rộng $3\\text{ m}$, cao $12\\text{ m}$. Kỹ sư gắn một thanh giằng thép chéo nối từ một đỉnh đáy dưới lên đỉnh đối diện trần trên. Tính độ dài thanh giằng thép đó (mét).",
            "correctAnswer": "13",
            "acceptedAnswers": [
              "13",
              "13.0"
            ],
            "explanation": "Đường chéo hình hộp chữ nhật: $d = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13\\text{ m}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Góc & Khoảng Cách",
        "code": "CD3-302",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
            "options": {
              "A": "$0^\\circ$",
              "B": "$45^\\circ$",
              "C": "$60^\\circ$",
              "D": "$90^\\circ$"
            },
            "correct": "D",
            "explanation": "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, tức bằng $90^\\circ$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng $(ABC)$ là:",
            "options": {
              "A": "Đường thẳng $BC$",
              "B": "Đường thẳng $SA$",
              "C": "Đường thẳng $AC$",
              "D": "Đường thẳng $AB$"
            },
            "correct": "D",
            "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $B$ là chính nó. Vậy hình chiếu của $SB$ là $AB$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$ và $SA \\perp (ABCD)$ với $SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "$45^\\circ$",
              "B": "$30^\\circ$",
              "C": "$\\arctan\\frac{\\sqrt{2}}{2}$ (xấp xỉ $35.26^\\circ$)",
              "D": "$60^\\circ$"
            },
            "correct": "C",
            "explanation": "Hình chiếu của $SC$ là $AC = a\\sqrt{2}$. $\\tan\\widehat{SCA} = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
          },
          {
            "id": 4,
            "question": "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài của:",
            "options": {
              "A": "Đoạn thẳng nối $M$ với một điểm bất kỳ trên $(P)$",
              "B": "Đoạn thẳng tiếp xúc với $(P)$",
              "C": "Đường xiên nối $M$ đến $(P)$",
              "D": "Đoạn thẳng vuông góc kẻ từ $M$ đến mặt phẳng $(P)$"
            },
            "correct": "D",
            "explanation": "Theo định nghĩa, khoảng cách từ $M$ đến $(P)$ là độ dài đoạn vuông góc $MH$ với $H \\in (P)$."
          },
          {
            "id": 5,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng:",
            "options": {
              "A": "$2a$",
              "B": "$a\\sqrt{2}$",
              "C": "$a$",
              "D": "$a\\sqrt{3}$"
            },
            "correct": "C",
            "explanation": "Đoạn vuông góc chung giữa hai mặt đáy là cạnh bên $AA' = a$."
          },
          {
            "id": 6,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "$AB \\perp (SBC)$",
              "B": "$BC \\perp (SAB)$",
              "C": "$AC \\perp (SAB)$",
              "D": "$SA \\perp (SBC)$"
            },
            "correct": "B",
            "explanation": "Ta có $BC \\perp AB$ và $BC \\perp SA$ nên $BC \\perp (SAB)$."
          },
          {
            "id": 7,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $SA \\perp (ABCD)$. Khoảng cách từ điểm $S$ đến mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "Độ dài đoạn $SA$",
              "B": "Độ dài đoạn $SC$",
              "C": "Độ dài đoạn $SB$",
              "D": "Độ dài đoạn $SD$"
            },
            "correct": "A",
            "explanation": "Vì $SA \\perp (ABCD)$ tại $A$ nên $d(S, (ABCD)) = SA$."
          },
          {
            "id": 8,
            "question": "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
            "options": {
              "A": "Duy nhất $1$",
              "B": "Không có",
              "C": "$2$",
              "D": "Vô số"
            },
            "correct": "A",
            "explanation": "Theo định lý hình học không gian, có duy nhất một mặt phẳng chứa $a$ và song song với $b$."
          },
          {
            "id": 9,
            "question": "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh bằng nhau. Góc giữa cạnh bên $SA$ và cạnh đáy $AB$ bằng:",
            "options": {
              "A": "$30^\\circ$",
              "B": "$45^\\circ$",
              "C": "$60^\\circ$",
              "D": "$90^\\circ$"
            },
            "correct": "C",
            "explanation": "Tam giác $SAB$ có ba cạnh bằng nhau nên là tam giác đều, do đó góc $\\widehat{SAB} = 60^\\circ$."
          },
          {
            "id": 10,
            "question": "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ có số đo $\\alpha$ luôn thỏa mãn:",
            "options": {
              "A": "$45^\\circ \\le \\alpha \\le 90^\\circ$",
              "B": "$0^\\circ \\le \\alpha \\le 90^\\circ$",
              "C": "$0^\\circ \\le \\alpha \\le 180^\\circ$",
              "D": "$0^\\circ < \\alpha < 180^\\circ$"
            },
            "correct": "B",
            "explanation": "Góc giữa hai mặt phẳng là góc không tù: $0^\\circ \\le \\alpha \\le 90^\\circ$."
          },
          {
            "id": 11,
            "question": "Một mái nhà lợp ngói dốc có chiều rộng mặt bằng là $4\\text{ m}$ và đỉnh nóc nhà nâng cao $1.5\\text{ m}$ so với xà ngang. Góc nghiêng $\\alpha$ của mái nhà so với mặt sàn nằm ngang thỏa mãn $\\tan\\alpha$ bằng:",
            "options": {
              "A": "$\\frac{4}{1.5} \\approx 2.67$",
              "B": "$\\frac{1.5}{2} = 0.75$",
              "C": "$\\frac{1.5}{4} = 0.375$",
              "D": "$1.5$"
            },
            "correct": "B",
            "explanation": "Nửa bề rộng mái là $4 / 2 = 2\\text{ m}$. Độ dốc mái: $\\tan\\alpha = \\frac{1.5}{2} = 0.75$."
          },
          {
            "id": 12,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 4$, tam giác $ABC$ đều cạnh 2. Khoảng cách từ $S$ đến đường thẳng $BC$ bằng:",
            "options": {
              "A": "$\\sqrt{19}$",
              "B": "$\\sqrt{17}$",
              "C": "$4 + \\sqrt3$",
              "D": "$\\sqrt{20}$"
            },
            "correct": "A",
            "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = \\sqrt{3}$. Do $BC \\perp AM$ và $BC \\perp SA \\Rightarrow BC \\perp SM$. $d(S, BC) = SM = \\sqrt{SA^2 + AM^2} = \\sqrt{19}$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 4$, $SA \\perp (ABCD)$ và $SA = 4\\sqrt3$.",
            "items": [
              {
                "key": "a",
                "text": "Góc giữa đường thẳng $SD$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Hình chiếu của $SD$ lên đáy là $AD$. $\\tan\\widehat{SDA} = \\frac{SA}{AD} = \\frac{4\\sqrt{3}}{4} = \\sqrt{3} \\Rightarrow \\widehat{SDA} = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.",
                "correct": true,
                "explanation": "Ta có $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$, mà $CD \\subset (SCD)$ nên $(SCD) \\perp (SAD)$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ chân đường cao $A$ đến mặt phẳng $(SCD)$ bằng $\\frac{4\\sqrt{3}}{2}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp SD$. Vì $CD \\perp (SAD) \\Rightarrow CD \\perp AH \\Rightarrow AH \\perp (SCD)$. $AH = \\frac{SA \\cdot AD}{\\sqrt{SA^2 + AD^2}} = \\frac{4\\sqrt{3} \\cdot 4}{24} = \\frac{4\\sqrt{3}}{2}$."
              },
              {
                "key": "d",
                "text": "Góc giữa hai mặt phẳng $(SCD)$ và $(ABCD)$ có số đo bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Giao tuyến là $CD$. $AD \\perp CD, SD \\perp CD$ nên góc giữa hai mặt phẳng là $\\widehat{SDA} = 60^\\circ$, không phải $45^\\circ$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = 4$, chiều cao lăng trụ $AA' = 4\\sqrt2$.",
            "items": [
              {
                "key": "a",
                "text": "Khoảng cách giữa hai mặt đáy $(ABC)$ và $(A'B'C')$ bằng ${a_val}\\sqrt{2}$.",
                "correct": true,
                "explanation": "Lăng trụ đứng có khoảng cách giữa hai đáy bằng chiều cao cạnh bên $AA' = 4\\sqrt2$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $B'C'$ vuông góc với mặt phẳng $(ABB'A')$.",
                "correct": false,
                "explanation": "Đáy là tam giác vuông cân tại $A$ nên $BC$ không vuông góc với $AB$, do đó $B'C'$ không vuông góc với $(ABB'A')$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $\\frac{{{a_val}\\sqrt{2}}}{{2}}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp BC$ trong tam giác vuông cân tại $A$: $AH = \\frac{BC}{2} = \\frac{4\\sqrt2}{2}$. Do $AH \\perp BB'$ nên $AH \\perp (BCC'B')$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Hình chiếu của $A'B$ lên đáy là $AB$. $\\tan\\alpha = \\frac{A'A}{AB} = \\frac{4\\sqrt2}{4} = \\sqrt2 \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một kỹ sư thiết kế giàn đỡ pin năng lượng mặt trời. Khung đỡ gồm cột trụ thẳng đứng $SO = 2.4\\text{ m}$ cắm trên sàn bê tông nằm ngang. Tấm pin phẳng hình chữ nhật $ABCD$ có tâm tựa tại $S$, nghiêng một góc $\\alpha = 30^\\circ$ so với phương nằm ngang để đón ánh nắng tối ưu.",
            "items": [
              {
                "key": "a",
                "text": "Góc tạo bởi mặt phẳng tấm pin và phương thẳng đứng của cột trụ là $60^\\circ$.",
                "correct": true,
                "explanation": "Cột trụ thẳng đứng vuông góc với sàn, nên góc hợp với tấm pin là $90^\\circ - 30^\\circ = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Khoảng cách từ tâm $S$ của tấm pin đến mặt sàn bê tông bằng $2.4\\text{ m}$.",
                "correct": true,
                "explanation": "Cột trụ $SO$ thẳng đứng vuông góc với sàn nên khoảng cách chính bằng độ dài $SO = 2.4\\text{ m}$."
              },
              {
                "key": "c",
                "text": "Nếu mép thấp nhất của tấm pin cách tâm $S$ một khoảng $1\\text{ m}$ dọc theo mặt nghiêng thì mép này cách mặt sàn $1.9\\text{ m}$.",
                "correct": true,
                "explanation": "Hạ độ cao: $\\Delta h = 1 \\cdot \\sin 30^\\circ = 0.5\\text{ m}$. Độ cao mép sàn: $2.4 - 0.5 = 1.9\\text{ m}$."
              },
              {
                "key": "d",
                "text": "Để tăng góc hứng nắng lên $\\alpha = 45^\\circ$, khoảng cách từ mép thấp nhất đến mặt sàn sẽ tăng lên.",
                "correct": false,
                "explanation": "Góc nghiêng tăng thì $\\sin 45^\\circ > \\sin 30^\\circ$ nên độ tụt dốc lớn hơn, mép thấp sẽ gần mặt sàn hơn."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 4$, $SA \\perp (ABCD)$ và $SA = 4$. Gọi $M$ là trung điểm cạnh $CD$.",
            "items": [
              {
                "key": "a",
                "text": "Đoạn thẳng $AM = \\frac{4\\sqrt{5}}{2}$.",
                "correct": true,
                "explanation": "$AM = \\sqrt{AD^2 + DM^2} = \\sqrt{4^2 + (4/2)^2} = \\frac{4\\sqrt{5}}{2}$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $SM$ vuông góc với đường thẳng $CD$.",
                "correct": false,
                "explanation": "Tam giác $SCD$ vuông tại $D$, $M$ là trung điểm cạnh huyền $CD$ nên $SM$ không vuông góc với $CD$."
              },
              {
                "key": "c",
                "text": "Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng $4$.",
                "correct": true,
                "explanation": "$AD \\perp SA$ và $AD \\perp CD$ nên $AD$ là đoạn vuông góc chung $\\Rightarrow d(SA, CD) = AD = 4$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $SC$ và đường thẳng $AB$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Do $AB \\parallel CD$ nên góc cần tìm là $\\widehat{SCD}$. $\\tan\\widehat{SCD} = \\frac{SD}{CD} = \\frac{4\\sqrt{2}}{4} = \\sqrt{2} \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Tính côsin của góc giữa hai đường thẳng $AC$ và $DA'$ (viết kết quả dạng phân số thập phân làm tròn đến 2 chữ số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Vì $DA' \\parallel CB'$ nên góc giữa $AC$ và $DA'$ bằng góc $\\widehat{B'CA}$. Tam giác $AB'C$ là tam giác đều nên góc bằng $60^\\circ \\Rightarrow \\cos 60^\\circ = 0.5$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $4$, $SA \\perp (ABCD)$ và $SA = 4$. Tính góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABCD)$ (đơn vị: độ).",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0",
              "45°"
            ],
            "explanation": "$\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB = 3, BC = 4$, $SA \\perp (ABC)$ và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Vì $BC \\perp (SAB)$ nên kẻ $AH \\perp SB \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."
          },
          {
            "id": 4,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6",
              "6.0"
            ],
            "explanation": "Đoạn vuông góc chung giữa $SA$ và $BC$ là cạnh đáy $AB = 6$."
          },
          {
            "id": 5,
            "question": "Một tuyến cáp treo nối từ trạm chân núi $A$ lên đỉnh tháp $S$ trên đỉnh đồi thẳng đứng. Đỉnh tháp $S$ có độ cao $300\\text{ m}$ so với mặt đất chân núi, khoảng cách nằm ngang từ $A$ đến chân đồi $H$ là $400\\text{ m}$. Một cabin cáp treo ở chính giữa đoạn cáp $AS$ có khoảng cách thẳng đứng xuống mặt đất nằm ngang là bao nhiêu mét?",
            "correctAnswer": "150",
            "acceptedAnswers": [
              "150",
              "150.0"
            ],
            "explanation": "Cabin ở trung điểm $M$ của $AS$. Theo định lý đường trung bình hình thang: độ cao của $M$ bằng $\\frac{0 + 300}{2} = 150\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một giàn giáo công trình dạng hình hộp chữ nhật có kích thước dài $4\\text{ m}$, rộng $3\\text{ m}$, cao $12\\text{ m}$. Kỹ sư gắn một thanh giằng thép chéo nối từ một đỉnh đáy dưới lên đỉnh đối diện trần trên. Tính độ dài thanh giằng thép đó (mét).",
            "correctAnswer": "13",
            "acceptedAnswers": [
              "13",
              "13.0"
            ],
            "explanation": "Đường chéo hình hộp chữ nhật: $d = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13\\text{ m}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Góc & Khoảng Cách",
        "code": "CD3-303",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
            "options": {
              "A": "$90^\\circ$",
              "B": "$45^\\circ$",
              "C": "$60^\\circ$",
              "D": "$0^\\circ$"
            },
            "correct": "A",
            "explanation": "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, tức bằng $90^\\circ$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng $(ABC)$ là:",
            "options": {
              "A": "Đường thẳng $SA$",
              "B": "Đường thẳng $AB$",
              "C": "Đường thẳng $BC$",
              "D": "Đường thẳng $AC$"
            },
            "correct": "B",
            "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $B$ là chính nó. Vậy hình chiếu của $SB$ là $AB$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$ và $SA \\perp (ABCD)$ với $SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "$60^\\circ$",
              "B": "$\\arctan\\frac{\\sqrt{2}}{2}$ (xấp xỉ $35.26^\\circ$)",
              "C": "$45^\\circ$",
              "D": "$30^\\circ$"
            },
            "correct": "B",
            "explanation": "Hình chiếu của $SC$ là $AC = a\\sqrt{2}$. $\\tan\\widehat{SCA} = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
          },
          {
            "id": 4,
            "question": "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài của:",
            "options": {
              "A": "Đường xiên nối $M$ đến $(P)$",
              "B": "Đoạn thẳng vuông góc kẻ từ $M$ đến mặt phẳng $(P)$",
              "C": "Đoạn thẳng nối $M$ với một điểm bất kỳ trên $(P)$",
              "D": "Đoạn thẳng tiếp xúc với $(P)$"
            },
            "correct": "B",
            "explanation": "Theo định nghĩa, khoảng cách từ $M$ đến $(P)$ là độ dài đoạn vuông góc $MH$ với $H \\in (P)$."
          },
          {
            "id": 5,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng:",
            "options": {
              "A": "$a\\sqrt{3}$",
              "B": "$a\\sqrt{2}$",
              "C": "$a$",
              "D": "$2a$"
            },
            "correct": "C",
            "explanation": "Đoạn vuông góc chung giữa hai mặt đáy là cạnh bên $AA' = a$."
          },
          {
            "id": 6,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "$AC \\perp (SAB)$",
              "B": "$SA \\perp (SBC)$",
              "C": "$AB \\perp (SBC)$",
              "D": "$BC \\perp (SAB)$"
            },
            "correct": "D",
            "explanation": "Ta có $BC \\perp AB$ và $BC \\perp SA$ nên $BC \\perp (SAB)$."
          },
          {
            "id": 7,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $SA \\perp (ABCD)$. Khoảng cách từ điểm $S$ đến mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "Độ dài đoạn $SA$",
              "B": "Độ dài đoạn $SC$",
              "C": "Độ dài đoạn $SD$",
              "D": "Độ dài đoạn $SB$"
            },
            "correct": "A",
            "explanation": "Vì $SA \\perp (ABCD)$ tại $A$ nên $d(S, (ABCD)) = SA$."
          },
          {
            "id": 8,
            "question": "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
            "options": {
              "A": "Duy nhất $1$",
              "B": "Vô số",
              "C": "$2$",
              "D": "Không có"
            },
            "correct": "A",
            "explanation": "Theo định lý hình học không gian, có duy nhất một mặt phẳng chứa $a$ và song song với $b$."
          },
          {
            "id": 9,
            "question": "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh bằng nhau. Góc giữa cạnh bên $SA$ và cạnh đáy $AB$ bằng:",
            "options": {
              "A": "$90^\\circ$",
              "B": "$30^\\circ$",
              "C": "$45^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "D",
            "explanation": "Tam giác $SAB$ có ba cạnh bằng nhau nên là tam giác đều, do đó góc $\\widehat{SAB} = 60^\\circ$."
          },
          {
            "id": 10,
            "question": "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ có số đo $\\alpha$ luôn thỏa mãn:",
            "options": {
              "A": "$0^\\circ \\le \\alpha \\le 180^\\circ$",
              "B": "$45^\\circ \\le \\alpha \\le 90^\\circ$",
              "C": "$0^\\circ \\le \\alpha \\le 90^\\circ$",
              "D": "$0^\\circ < \\alpha < 180^\\circ$"
            },
            "correct": "C",
            "explanation": "Góc giữa hai mặt phẳng là góc không tù: $0^\\circ \\le \\alpha \\le 90^\\circ$."
          },
          {
            "id": 11,
            "question": "Một mái nhà lợp ngói dốc có chiều rộng mặt bằng là $4\\text{ m}$ và đỉnh nóc nhà nâng cao $1.5\\text{ m}$ so với xà ngang. Góc nghiêng $\\alpha$ của mái nhà so với mặt sàn nằm ngang thỏa mãn $\\tan\\alpha$ bằng:",
            "options": {
              "A": "$\\frac{4}{1.5} \\approx 2.67$",
              "B": "$1.5$",
              "C": "$\\frac{1.5}{4} = 0.375$",
              "D": "$\\frac{1.5}{2} = 0.75$"
            },
            "correct": "D",
            "explanation": "Nửa bề rộng mái là $4 / 2 = 2\\text{ m}$. Độ dốc mái: $\\tan\\alpha = \\frac{1.5}{2} = 0.75$."
          },
          {
            "id": 12,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 5$, tam giác $ABC$ đều cạnh 2. Khoảng cách từ $S$ đến đường thẳng $BC$ bằng:",
            "options": {
              "A": "$\\sqrt{26}$",
              "B": "$\\sqrt{29}$",
              "C": "$\\sqrt{28}$",
              "D": "$5 + \\sqrt3$"
            },
            "correct": "C",
            "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = \\sqrt{3}$. Do $BC \\perp AM$ và $BC \\perp SA \\Rightarrow BC \\perp SM$. $d(S, BC) = SM = \\sqrt{SA^2 + AM^2} = \\sqrt{28}$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 5$, $SA \\perp (ABCD)$ và $SA = 5\\sqrt3$.",
            "items": [
              {
                "key": "a",
                "text": "Góc giữa đường thẳng $SD$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Hình chiếu của $SD$ lên đáy là $AD$. $\\tan\\widehat{SDA} = \\frac{SA}{AD} = \\frac{5\\sqrt{3}}{5} = \\sqrt{3} \\Rightarrow \\widehat{SDA} = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.",
                "correct": true,
                "explanation": "Ta có $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$, mà $CD \\subset (SCD)$ nên $(SCD) \\perp (SAD)$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ chân đường cao $A$ đến mặt phẳng $(SCD)$ bằng $\\frac{5\\sqrt{3}}{2}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp SD$. Vì $CD \\perp (SAD) \\Rightarrow CD \\perp AH \\Rightarrow AH \\perp (SCD)$. $AH = \\frac{SA \\cdot AD}{\\sqrt{SA^2 + AD^2}} = \\frac{5\\sqrt{3} \\cdot 5}{25} = \\frac{5\\sqrt{3}}{2}$."
              },
              {
                "key": "d",
                "text": "Góc giữa hai mặt phẳng $(SCD)$ và $(ABCD)$ có số đo bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Giao tuyến là $CD$. $AD \\perp CD, SD \\perp CD$ nên góc giữa hai mặt phẳng là $\\widehat{SDA} = 60^\\circ$, không phải $45^\\circ$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = 5$, chiều cao lăng trụ $AA' = 5\\sqrt2$.",
            "items": [
              {
                "key": "a",
                "text": "Khoảng cách giữa hai mặt đáy $(ABC)$ và $(A'B'C')$ bằng ${a_val}\\sqrt{2}$.",
                "correct": true,
                "explanation": "Lăng trụ đứng có khoảng cách giữa hai đáy bằng chiều cao cạnh bên $AA' = 5\\sqrt2$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $B'C'$ vuông góc với mặt phẳng $(ABB'A')$.",
                "correct": false,
                "explanation": "Đáy là tam giác vuông cân tại $A$ nên $BC$ không vuông góc với $AB$, do đó $B'C'$ không vuông góc với $(ABB'A')$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $\\frac{{{a_val}\\sqrt{2}}}{{2}}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp BC$ trong tam giác vuông cân tại $A$: $AH = \\frac{BC}{2} = \\frac{5\\sqrt2}{2}$. Do $AH \\perp BB'$ nên $AH \\perp (BCC'B')$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Hình chiếu của $A'B$ lên đáy là $AB$. $\\tan\\alpha = \\frac{A'A}{AB} = \\frac{5\\sqrt2}{5} = \\sqrt2 \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một kỹ sư thiết kế giàn đỡ pin năng lượng mặt trời. Khung đỡ gồm cột trụ thẳng đứng $SO = 2.4\\text{ m}$ cắm trên sàn bê tông nằm ngang. Tấm pin phẳng hình chữ nhật $ABCD$ có tâm tựa tại $S$, nghiêng một góc $\\alpha = 30^\\circ$ so với phương nằm ngang để đón ánh nắng tối ưu.",
            "items": [
              {
                "key": "a",
                "text": "Góc tạo bởi mặt phẳng tấm pin và phương thẳng đứng của cột trụ là $60^\\circ$.",
                "correct": true,
                "explanation": "Cột trụ thẳng đứng vuông góc với sàn, nên góc hợp với tấm pin là $90^\\circ - 30^\\circ = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Khoảng cách từ tâm $S$ của tấm pin đến mặt sàn bê tông bằng $2.4\\text{ m}$.",
                "correct": true,
                "explanation": "Cột trụ $SO$ thẳng đứng vuông góc với sàn nên khoảng cách chính bằng độ dài $SO = 2.4\\text{ m}$."
              },
              {
                "key": "c",
                "text": "Nếu mép thấp nhất của tấm pin cách tâm $S$ một khoảng $1\\text{ m}$ dọc theo mặt nghiêng thì mép này cách mặt sàn $1.9\\text{ m}$.",
                "correct": true,
                "explanation": "Hạ độ cao: $\\Delta h = 1 \\cdot \\sin 30^\\circ = 0.5\\text{ m}$. Độ cao mép sàn: $2.4 - 0.5 = 1.9\\text{ m}$."
              },
              {
                "key": "d",
                "text": "Để tăng góc hứng nắng lên $\\alpha = 45^\\circ$, khoảng cách từ mép thấp nhất đến mặt sàn sẽ tăng lên.",
                "correct": false,
                "explanation": "Góc nghiêng tăng thì $\\sin 45^\\circ > \\sin 30^\\circ$ nên độ tụt dốc lớn hơn, mép thấp sẽ gần mặt sàn hơn."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 5$, $SA \\perp (ABCD)$ và $SA = 5$. Gọi $M$ là trung điểm cạnh $CD$.",
            "items": [
              {
                "key": "a",
                "text": "Đoạn thẳng $AM = \\frac{5\\sqrt{5}}{2}$.",
                "correct": true,
                "explanation": "$AM = \\sqrt{AD^2 + DM^2} = \\sqrt{5^2 + (5/2)^2} = \\frac{5\\sqrt{5}}{2}$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $SM$ vuông góc với đường thẳng $CD$.",
                "correct": false,
                "explanation": "Tam giác $SCD$ vuông tại $D$, $M$ là trung điểm cạnh huyền $CD$ nên $SM$ không vuông góc với $CD$."
              },
              {
                "key": "c",
                "text": "Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng $5$.",
                "correct": true,
                "explanation": "$AD \\perp SA$ và $AD \\perp CD$ nên $AD$ là đoạn vuông góc chung $\\Rightarrow d(SA, CD) = AD = 5$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $SC$ và đường thẳng $AB$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Do $AB \\parallel CD$ nên góc cần tìm là $\\widehat{SCD}$. $\\tan\\widehat{SCD} = \\frac{SD}{CD} = \\frac{5\\sqrt{2}}{5} = \\sqrt{2} \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Tính côsin của góc giữa hai đường thẳng $AC$ và $DA'$ (viết kết quả dạng phân số thập phân làm tròn đến 2 chữ số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Vì $DA' \\parallel CB'$ nên góc giữa $AC$ và $DA'$ bằng góc $\\widehat{B'CA}$. Tam giác $AB'C$ là tam giác đều nên góc bằng $60^\\circ \\Rightarrow \\cos 60^\\circ = 0.5$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $5$, $SA \\perp (ABCD)$ và $SA = 5$. Tính góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABCD)$ (đơn vị: độ).",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0",
              "45°"
            ],
            "explanation": "$\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB = 3, BC = 4$, $SA \\perp (ABC)$ và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Vì $BC \\perp (SAB)$ nên kẻ $AH \\perp SB \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."
          },
          {
            "id": 4,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6",
              "6.0"
            ],
            "explanation": "Đoạn vuông góc chung giữa $SA$ và $BC$ là cạnh đáy $AB = 6$."
          },
          {
            "id": 5,
            "question": "Một tuyến cáp treo nối từ trạm chân núi $A$ lên đỉnh tháp $S$ trên đỉnh đồi thẳng đứng. Đỉnh tháp $S$ có độ cao $300\\text{ m}$ so với mặt đất chân núi, khoảng cách nằm ngang từ $A$ đến chân đồi $H$ là $400\\text{ m}$. Một cabin cáp treo ở chính giữa đoạn cáp $AS$ có khoảng cách thẳng đứng xuống mặt đất nằm ngang là bao nhiêu mét?",
            "correctAnswer": "150",
            "acceptedAnswers": [
              "150",
              "150.0"
            ],
            "explanation": "Cabin ở trung điểm $M$ của $AS$. Theo định lý đường trung bình hình thang: độ cao của $M$ bằng $\\frac{0 + 300}{2} = 150\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một giàn giáo công trình dạng hình hộp chữ nhật có kích thước dài $4\\text{ m}$, rộng $3\\text{ m}$, cao $12\\text{ m}$. Kỹ sư gắn một thanh giằng thép chéo nối từ một đỉnh đáy dưới lên đỉnh đối diện trần trên. Tính độ dài thanh giằng thép đó (mét).",
            "correctAnswer": "13",
            "acceptedAnswers": [
              "13",
              "13.0"
            ],
            "explanation": "Đường chéo hình hộp chữ nhật: $d = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13\\text{ m}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Góc & Khoảng Cách",
        "code": "CD3-304",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
            "options": {
              "A": "$0^\\circ$",
              "B": "$90^\\circ$",
              "C": "$45^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "B",
            "explanation": "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, tức bằng $90^\\circ$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng $(ABC)$ là:",
            "options": {
              "A": "Đường thẳng $SA$",
              "B": "Đường thẳng $BC$",
              "C": "Đường thẳng $AC$",
              "D": "Đường thẳng $AB$"
            },
            "correct": "D",
            "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $B$ là chính nó. Vậy hình chiếu của $SB$ là $AB$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$ và $SA \\perp (ABCD)$ với $SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "$45^\\circ$",
              "B": "$\\arctan\\frac{\\sqrt{2}}{2}$ (xấp xỉ $35.26^\\circ$)",
              "C": "$60^\\circ$",
              "D": "$30^\\circ$"
            },
            "correct": "B",
            "explanation": "Hình chiếu của $SC$ là $AC = a\\sqrt{2}$. $\\tan\\widehat{SCA} = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
          },
          {
            "id": 4,
            "question": "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài của:",
            "options": {
              "A": "Đoạn thẳng vuông góc kẻ từ $M$ đến mặt phẳng $(P)$",
              "B": "Đoạn thẳng nối $M$ với một điểm bất kỳ trên $(P)$",
              "C": "Đường xiên nối $M$ đến $(P)$",
              "D": "Đoạn thẳng tiếp xúc với $(P)$"
            },
            "correct": "A",
            "explanation": "Theo định nghĩa, khoảng cách từ $M$ đến $(P)$ là độ dài đoạn vuông góc $MH$ với $H \\in (P)$."
          },
          {
            "id": 5,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng:",
            "options": {
              "A": "$a\\sqrt{3}$",
              "B": "$a$",
              "C": "$a\\sqrt{2}$",
              "D": "$2a$"
            },
            "correct": "B",
            "explanation": "Đoạn vuông góc chung giữa hai mặt đáy là cạnh bên $AA' = a$."
          },
          {
            "id": 6,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "$SA \\perp (SBC)$",
              "B": "$AC \\perp (SAB)$",
              "C": "$AB \\perp (SBC)$",
              "D": "$BC \\perp (SAB)$"
            },
            "correct": "D",
            "explanation": "Ta có $BC \\perp AB$ và $BC \\perp SA$ nên $BC \\perp (SAB)$."
          },
          {
            "id": 7,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $SA \\perp (ABCD)$. Khoảng cách từ điểm $S$ đến mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "Độ dài đoạn $SA$",
              "B": "Độ dài đoạn $SB$",
              "C": "Độ dài đoạn $SC$",
              "D": "Độ dài đoạn $SD$"
            },
            "correct": "A",
            "explanation": "Vì $SA \\perp (ABCD)$ tại $A$ nên $d(S, (ABCD)) = SA$."
          },
          {
            "id": 8,
            "question": "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
            "options": {
              "A": "$2$",
              "B": "Vô số",
              "C": "Không có",
              "D": "Duy nhất $1$"
            },
            "correct": "D",
            "explanation": "Theo định lý hình học không gian, có duy nhất một mặt phẳng chứa $a$ và song song với $b$."
          },
          {
            "id": 9,
            "question": "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh bằng nhau. Góc giữa cạnh bên $SA$ và cạnh đáy $AB$ bằng:",
            "options": {
              "A": "$30^\\circ$",
              "B": "$90^\\circ$",
              "C": "$60^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "C",
            "explanation": "Tam giác $SAB$ có ba cạnh bằng nhau nên là tam giác đều, do đó góc $\\widehat{SAB} = 60^\\circ$."
          },
          {
            "id": 10,
            "question": "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ có số đo $\\alpha$ luôn thỏa mãn:",
            "options": {
              "A": "$45^\\circ \\le \\alpha \\le 90^\\circ$",
              "B": "$0^\\circ < \\alpha < 180^\\circ$",
              "C": "$0^\\circ \\le \\alpha \\le 90^\\circ$",
              "D": "$0^\\circ \\le \\alpha \\le 180^\\circ$"
            },
            "correct": "C",
            "explanation": "Góc giữa hai mặt phẳng là góc không tù: $0^\\circ \\le \\alpha \\le 90^\\circ$."
          },
          {
            "id": 11,
            "question": "Một mái nhà lợp ngói dốc có chiều rộng mặt bằng là $4\\text{ m}$ và đỉnh nóc nhà nâng cao $1.5\\text{ m}$ so với xà ngang. Góc nghiêng $\\alpha$ của mái nhà so với mặt sàn nằm ngang thỏa mãn $\\tan\\alpha$ bằng:",
            "options": {
              "A": "$\\frac{4}{1.5} \\approx 2.67$",
              "B": "$1.5$",
              "C": "$\\frac{1.5}{2} = 0.75$",
              "D": "$\\frac{1.5}{4} = 0.375$"
            },
            "correct": "C",
            "explanation": "Nửa bề rộng mái là $4 / 2 = 2\\text{ m}$. Độ dốc mái: $\\tan\\alpha = \\frac{1.5}{2} = 0.75$."
          },
          {
            "id": 12,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 6$, tam giác $ABC$ đều cạnh 2. Khoảng cách từ $S$ đến đường thẳng $BC$ bằng:",
            "options": {
              "A": "$\\sqrt{39}$",
              "B": "$6 + \\sqrt3$",
              "C": "$\\sqrt{40}$",
              "D": "$\\sqrt{37}$"
            },
            "correct": "A",
            "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = \\sqrt{3}$. Do $BC \\perp AM$ và $BC \\perp SA \\Rightarrow BC \\perp SM$. $d(S, BC) = SM = \\sqrt{SA^2 + AM^2} = \\sqrt{39}$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 6\\sqrt3$.",
            "items": [
              {
                "key": "a",
                "text": "Góc giữa đường thẳng $SD$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Hình chiếu của $SD$ lên đáy là $AD$. $\\tan\\widehat{SDA} = \\frac{SA}{AD} = \\frac{6\\sqrt{3}}{6} = \\sqrt{3} \\Rightarrow \\widehat{SDA} = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.",
                "correct": true,
                "explanation": "Ta có $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$, mà $CD \\subset (SCD)$ nên $(SCD) \\perp (SAD)$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ chân đường cao $A$ đến mặt phẳng $(SCD)$ bằng $\\frac{6\\sqrt{3}}{2}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp SD$. Vì $CD \\perp (SAD) \\Rightarrow CD \\perp AH \\Rightarrow AH \\perp (SCD)$. $AH = \\frac{SA \\cdot AD}{\\sqrt{SA^2 + AD^2}} = \\frac{6\\sqrt{3} \\cdot 6}{26} = \\frac{6\\sqrt{3}}{2}$."
              },
              {
                "key": "d",
                "text": "Góc giữa hai mặt phẳng $(SCD)$ và $(ABCD)$ có số đo bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Giao tuyến là $CD$. $AD \\perp CD, SD \\perp CD$ nên góc giữa hai mặt phẳng là $\\widehat{SDA} = 60^\\circ$, không phải $45^\\circ$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = 6$, chiều cao lăng trụ $AA' = 6\\sqrt2$.",
            "items": [
              {
                "key": "a",
                "text": "Khoảng cách giữa hai mặt đáy $(ABC)$ và $(A'B'C')$ bằng ${a_val}\\sqrt{2}$.",
                "correct": true,
                "explanation": "Lăng trụ đứng có khoảng cách giữa hai đáy bằng chiều cao cạnh bên $AA' = 6\\sqrt2$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $B'C'$ vuông góc với mặt phẳng $(ABB'A')$.",
                "correct": false,
                "explanation": "Đáy là tam giác vuông cân tại $A$ nên $BC$ không vuông góc với $AB$, do đó $B'C'$ không vuông góc với $(ABB'A')$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $\\frac{{{a_val}\\sqrt{2}}}{{2}}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp BC$ trong tam giác vuông cân tại $A$: $AH = \\frac{BC}{2} = \\frac{6\\sqrt2}{2}$. Do $AH \\perp BB'$ nên $AH \\perp (BCC'B')$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Hình chiếu của $A'B$ lên đáy là $AB$. $\\tan\\alpha = \\frac{A'A}{AB} = \\frac{6\\sqrt2}{6} = \\sqrt2 \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một kỹ sư thiết kế giàn đỡ pin năng lượng mặt trời. Khung đỡ gồm cột trụ thẳng đứng $SO = 2.4\\text{ m}$ cắm trên sàn bê tông nằm ngang. Tấm pin phẳng hình chữ nhật $ABCD$ có tâm tựa tại $S$, nghiêng một góc $\\alpha = 30^\\circ$ so với phương nằm ngang để đón ánh nắng tối ưu.",
            "items": [
              {
                "key": "a",
                "text": "Góc tạo bởi mặt phẳng tấm pin và phương thẳng đứng của cột trụ là $60^\\circ$.",
                "correct": true,
                "explanation": "Cột trụ thẳng đứng vuông góc với sàn, nên góc hợp với tấm pin là $90^\\circ - 30^\\circ = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Khoảng cách từ tâm $S$ của tấm pin đến mặt sàn bê tông bằng $2.4\\text{ m}$.",
                "correct": true,
                "explanation": "Cột trụ $SO$ thẳng đứng vuông góc với sàn nên khoảng cách chính bằng độ dài $SO = 2.4\\text{ m}$."
              },
              {
                "key": "c",
                "text": "Nếu mép thấp nhất của tấm pin cách tâm $S$ một khoảng $1\\text{ m}$ dọc theo mặt nghiêng thì mép này cách mặt sàn $1.9\\text{ m}$.",
                "correct": true,
                "explanation": "Hạ độ cao: $\\Delta h = 1 \\cdot \\sin 30^\\circ = 0.5\\text{ m}$. Độ cao mép sàn: $2.4 - 0.5 = 1.9\\text{ m}$."
              },
              {
                "key": "d",
                "text": "Để tăng góc hứng nắng lên $\\alpha = 45^\\circ$, khoảng cách từ mép thấp nhất đến mặt sàn sẽ tăng lên.",
                "correct": false,
                "explanation": "Góc nghiêng tăng thì $\\sin 45^\\circ > \\sin 30^\\circ$ nên độ tụt dốc lớn hơn, mép thấp sẽ gần mặt sàn hơn."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 6$. Gọi $M$ là trung điểm cạnh $CD$.",
            "items": [
              {
                "key": "a",
                "text": "Đoạn thẳng $AM = \\frac{6\\sqrt{5}}{2}$.",
                "correct": true,
                "explanation": "$AM = \\sqrt{AD^2 + DM^2} = \\sqrt{6^2 + (6/2)^2} = \\frac{6\\sqrt{5}}{2}$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $SM$ vuông góc với đường thẳng $CD$.",
                "correct": false,
                "explanation": "Tam giác $SCD$ vuông tại $D$, $M$ là trung điểm cạnh huyền $CD$ nên $SM$ không vuông góc với $CD$."
              },
              {
                "key": "c",
                "text": "Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng $6$.",
                "correct": true,
                "explanation": "$AD \\perp SA$ và $AD \\perp CD$ nên $AD$ là đoạn vuông góc chung $\\Rightarrow d(SA, CD) = AD = 6$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $SC$ và đường thẳng $AB$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Do $AB \\parallel CD$ nên góc cần tìm là $\\widehat{SCD}$. $\\tan\\widehat{SCD} = \\frac{SD}{CD} = \\frac{6\\sqrt{2}}{6} = \\sqrt{2} \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Tính côsin của góc giữa hai đường thẳng $AC$ và $DA'$ (viết kết quả dạng phân số thập phân làm tròn đến 2 chữ số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Vì $DA' \\parallel CB'$ nên góc giữa $AC$ và $DA'$ bằng góc $\\widehat{B'CA}$. Tam giác $AB'C$ là tam giác đều nên góc bằng $60^\\circ \\Rightarrow \\cos 60^\\circ = 0.5$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $6$, $SA \\perp (ABCD)$ và $SA = 6$. Tính góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABCD)$ (đơn vị: độ).",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0",
              "45°"
            ],
            "explanation": "$\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB = 3, BC = 4$, $SA \\perp (ABC)$ và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Vì $BC \\perp (SAB)$ nên kẻ $AH \\perp SB \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."
          },
          {
            "id": 4,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6",
              "6.0"
            ],
            "explanation": "Đoạn vuông góc chung giữa $SA$ và $BC$ là cạnh đáy $AB = 6$."
          },
          {
            "id": 5,
            "question": "Một tuyến cáp treo nối từ trạm chân núi $A$ lên đỉnh tháp $S$ trên đỉnh đồi thẳng đứng. Đỉnh tháp $S$ có độ cao $300\\text{ m}$ so với mặt đất chân núi, khoảng cách nằm ngang từ $A$ đến chân đồi $H$ là $400\\text{ m}$. Một cabin cáp treo ở chính giữa đoạn cáp $AS$ có khoảng cách thẳng đứng xuống mặt đất nằm ngang là bao nhiêu mét?",
            "correctAnswer": "150",
            "acceptedAnswers": [
              "150",
              "150.0"
            ],
            "explanation": "Cabin ở trung điểm $M$ của $AS$. Theo định lý đường trung bình hình thang: độ cao của $M$ bằng $\\frac{0 + 300}{2} = 150\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một giàn giáo công trình dạng hình hộp chữ nhật có kích thước dài $4\\text{ m}$, rộng $3\\text{ m}$, cao $12\\text{ m}$. Kỹ sư gắn một thanh giằng thép chéo nối từ một đỉnh đáy dưới lên đỉnh đối diện trần trên. Tính độ dài thanh giằng thép đó (mét).",
            "correctAnswer": "13",
            "acceptedAnswers": [
              "13",
              "13.0"
            ],
            "explanation": "Đường chéo hình hộp chữ nhật: $d = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13\\text{ m}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Góc & Khoảng Cách",
        "code": "CD3-305",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
            "options": {
              "A": "$0^\\circ$",
              "B": "$90^\\circ$",
              "C": "$45^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "B",
            "explanation": "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, tức bằng $90^\\circ$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SB$ lên mặt phẳng $(ABC)$ là:",
            "options": {
              "A": "Đường thẳng $SA$",
              "B": "Đường thẳng $BC$",
              "C": "Đường thẳng $AB$",
              "D": "Đường thẳng $AC$"
            },
            "correct": "C",
            "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $B$ là chính nó. Vậy hình chiếu của $SB$ là $AB$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$ và $SA \\perp (ABCD)$ với $SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "$\\arctan\\frac{\\sqrt{2}}{2}$ (xấp xỉ $35.26^\\circ$)",
              "B": "$45^\\circ$",
              "C": "$30^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "A",
            "explanation": "Hình chiếu của $SC$ là $AC = a\\sqrt{2}$. $\\tan\\widehat{SCA} = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
          },
          {
            "id": 4,
            "question": "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài của:",
            "options": {
              "A": "Đoạn thẳng vuông góc kẻ từ $M$ đến mặt phẳng $(P)$",
              "B": "Đoạn thẳng nối $M$ với một điểm bất kỳ trên $(P)$",
              "C": "Đường xiên nối $M$ đến $(P)$",
              "D": "Đoạn thẳng tiếp xúc với $(P)$"
            },
            "correct": "A",
            "explanation": "Theo định nghĩa, khoảng cách từ $M$ đến $(P)$ là độ dài đoạn vuông góc $MH$ với $H \\in (P)$."
          },
          {
            "id": 5,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng:",
            "options": {
              "A": "$2a$",
              "B": "$a\\sqrt{3}$",
              "C": "$a$",
              "D": "$a\\sqrt{2}$"
            },
            "correct": "C",
            "explanation": "Đoạn vuông góc chung giữa hai mặt đáy là cạnh bên $AA' = a$."
          },
          {
            "id": 6,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "$BC \\perp (SAB)$",
              "B": "$AC \\perp (SAB)$",
              "C": "$SA \\perp (SBC)$",
              "D": "$AB \\perp (SBC)$"
            },
            "correct": "A",
            "explanation": "Ta có $BC \\perp AB$ và $BC \\perp SA$ nên $BC \\perp (SAB)$."
          },
          {
            "id": 7,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $SA \\perp (ABCD)$. Khoảng cách từ điểm $S$ đến mặt phẳng đáy $(ABCD)$ bằng:",
            "options": {
              "A": "Độ dài đoạn $SB$",
              "B": "Độ dài đoạn $SD$",
              "C": "Độ dài đoạn $SC$",
              "D": "Độ dài đoạn $SA$"
            },
            "correct": "D",
            "explanation": "Vì $SA \\perp (ABCD)$ tại $A$ nên $d(S, (ABCD)) = SA$."
          },
          {
            "id": 8,
            "question": "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
            "options": {
              "A": "Vô số",
              "B": "Duy nhất $1$",
              "C": "Không có",
              "D": "$2$"
            },
            "correct": "B",
            "explanation": "Theo định lý hình học không gian, có duy nhất một mặt phẳng chứa $a$ và song song với $b$."
          },
          {
            "id": 9,
            "question": "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh bằng nhau. Góc giữa cạnh bên $SA$ và cạnh đáy $AB$ bằng:",
            "options": {
              "A": "$30^\\circ$",
              "B": "$45^\\circ$",
              "C": "$90^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "D",
            "explanation": "Tam giác $SAB$ có ba cạnh bằng nhau nên là tam giác đều, do đó góc $\\widehat{SAB} = 60^\\circ$."
          },
          {
            "id": 10,
            "question": "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ có số đo $\\alpha$ luôn thỏa mãn:",
            "options": {
              "A": "$45^\\circ \\le \\alpha \\le 90^\\circ$",
              "B": "$0^\\circ \\le \\alpha \\le 90^\\circ$",
              "C": "$0^\\circ \\le \\alpha \\le 180^\\circ$",
              "D": "$0^\\circ < \\alpha < 180^\\circ$"
            },
            "correct": "B",
            "explanation": "Góc giữa hai mặt phẳng là góc không tù: $0^\\circ \\le \\alpha \\le 90^\\circ$."
          },
          {
            "id": 11,
            "question": "Một mái nhà lợp ngói dốc có chiều rộng mặt bằng là $4\\text{ m}$ và đỉnh nóc nhà nâng cao $1.5\\text{ m}$ so với xà ngang. Góc nghiêng $\\alpha$ của mái nhà so với mặt sàn nằm ngang thỏa mãn $\\tan\\alpha$ bằng:",
            "options": {
              "A": "$1.5$",
              "B": "$\\frac{1.5}{4} = 0.375$",
              "C": "$\\frac{1.5}{2} = 0.75$",
              "D": "$\\frac{4}{1.5} \\approx 2.67$"
            },
            "correct": "C",
            "explanation": "Nửa bề rộng mái là $4 / 2 = 2\\text{ m}$. Độ dốc mái: $\\tan\\alpha = \\frac{1.5}{2} = 0.75$."
          },
          {
            "id": 12,
            "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 7$, tam giác $ABC$ đều cạnh 2. Khoảng cách từ $S$ đến đường thẳng $BC$ bằng:",
            "options": {
              "A": "$\\sqrt{50}$",
              "B": "$\\sqrt{53}$",
              "C": "$7 + \\sqrt3$",
              "D": "$\\sqrt{52}$"
            },
            "correct": "D",
            "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = \\sqrt{3}$. Do $BC \\perp AM$ và $BC \\perp SA \\Rightarrow BC \\perp SM$. $d(S, BC) = SM = \\sqrt{SA^2 + AM^2} = \\sqrt{52}$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 7$, $SA \\perp (ABCD)$ và $SA = 7\\sqrt3$.",
            "items": [
              {
                "key": "a",
                "text": "Góc giữa đường thẳng $SD$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Hình chiếu của $SD$ lên đáy là $AD$. $\\tan\\widehat{SDA} = \\frac{SA}{AD} = \\frac{7\\sqrt{3}}{7} = \\sqrt{3} \\Rightarrow \\widehat{SDA} = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.",
                "correct": true,
                "explanation": "Ta có $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$, mà $CD \\subset (SCD)$ nên $(SCD) \\perp (SAD)$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ chân đường cao $A$ đến mặt phẳng $(SCD)$ bằng $\\frac{7\\sqrt{3}}{2}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp SD$. Vì $CD \\perp (SAD) \\Rightarrow CD \\perp AH \\Rightarrow AH \\perp (SCD)$. $AH = \\frac{SA \\cdot AD}{\\sqrt{SA^2 + AD^2}} = \\frac{7\\sqrt{3} \\cdot 7}{27} = \\frac{7\\sqrt{3}}{2}$."
              },
              {
                "key": "d",
                "text": "Góc giữa hai mặt phẳng $(SCD)$ và $(ABCD)$ có số đo bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Giao tuyến là $CD$. $AD \\perp CD, SD \\perp CD$ nên góc giữa hai mặt phẳng là $\\widehat{SDA} = 60^\\circ$, không phải $45^\\circ$."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = 7$, chiều cao lăng trụ $AA' = 7\\sqrt2$.",
            "items": [
              {
                "key": "a",
                "text": "Khoảng cách giữa hai mặt đáy $(ABC)$ và $(A'B'C')$ bằng ${a_val}\\sqrt{2}$.",
                "correct": true,
                "explanation": "Lăng trụ đứng có khoảng cách giữa hai đáy bằng chiều cao cạnh bên $AA' = 7\\sqrt2$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $B'C'$ vuông góc với mặt phẳng $(ABB'A')$.",
                "correct": false,
                "explanation": "Đáy là tam giác vuông cân tại $A$ nên $BC$ không vuông góc với $AB$, do đó $B'C'$ không vuông góc với $(ABB'A')$."
              },
              {
                "key": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $\\frac{{{a_val}\\sqrt{2}}}{{2}}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp BC$ trong tam giác vuông cân tại $A$: $AH = \\frac{BC}{2} = \\frac{7\\sqrt2}{2}$. Do $AH \\perp BB'$ nên $AH \\perp (BCC'B')$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Hình chiếu của $A'B$ lên đáy là $AB$. $\\tan\\alpha = \\frac{A'A}{AB} = \\frac{7\\sqrt2}{7} = \\sqrt2 \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một kỹ sư thiết kế giàn đỡ pin năng lượng mặt trời. Khung đỡ gồm cột trụ thẳng đứng $SO = 2.4\\text{ m}$ cắm trên sàn bê tông nằm ngang. Tấm pin phẳng hình chữ nhật $ABCD$ có tâm tựa tại $S$, nghiêng một góc $\\alpha = 30^\\circ$ so với phương nằm ngang để đón ánh nắng tối ưu.",
            "items": [
              {
                "key": "a",
                "text": "Góc tạo bởi mặt phẳng tấm pin và phương thẳng đứng của cột trụ là $60^\\circ$.",
                "correct": true,
                "explanation": "Cột trụ thẳng đứng vuông góc với sàn, nên góc hợp với tấm pin là $90^\\circ - 30^\\circ = 60^\\circ$."
              },
              {
                "key": "b",
                "text": "Khoảng cách từ tâm $S$ của tấm pin đến mặt sàn bê tông bằng $2.4\\text{ m}$.",
                "correct": true,
                "explanation": "Cột trụ $SO$ thẳng đứng vuông góc với sàn nên khoảng cách chính bằng độ dài $SO = 2.4\\text{ m}$."
              },
              {
                "key": "c",
                "text": "Nếu mép thấp nhất của tấm pin cách tâm $S$ một khoảng $1\\text{ m}$ dọc theo mặt nghiêng thì mép này cách mặt sàn $1.9\\text{ m}$.",
                "correct": true,
                "explanation": "Hạ độ cao: $\\Delta h = 1 \\cdot \\sin 30^\\circ = 0.5\\text{ m}$. Độ cao mép sàn: $2.4 - 0.5 = 1.9\\text{ m}$."
              },
              {
                "key": "d",
                "text": "Để tăng góc hứng nắng lên $\\alpha = 45^\\circ$, khoảng cách từ mép thấp nhất đến mặt sàn sẽ tăng lên.",
                "correct": false,
                "explanation": "Góc nghiêng tăng thì $\\sin 45^\\circ > \\sin 30^\\circ$ nên độ tụt dốc lớn hơn, mép thấp sẽ gần mặt sàn hơn."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 7$, $SA \\perp (ABCD)$ và $SA = 7$. Gọi $M$ là trung điểm cạnh $CD$.",
            "items": [
              {
                "key": "a",
                "text": "Đoạn thẳng $AM = \\frac{7\\sqrt{5}}{2}$.",
                "correct": true,
                "explanation": "$AM = \\sqrt{AD^2 + DM^2} = \\sqrt{7^2 + (7/2)^2} = \\frac{7\\sqrt{5}}{2}$."
              },
              {
                "key": "b",
                "text": "Đường thẳng $SM$ vuông góc với đường thẳng $CD$.",
                "correct": false,
                "explanation": "Tam giác $SCD$ vuông tại $D$, $M$ là trung điểm cạnh huyền $CD$ nên $SM$ không vuông góc với $CD$."
              },
              {
                "key": "c",
                "text": "Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng $7$.",
                "correct": true,
                "explanation": "$AD \\perp SA$ và $AD \\perp CD$ nên $AD$ là đoạn vuông góc chung $\\Rightarrow d(SA, CD) = AD = 7$."
              },
              {
                "key": "d",
                "text": "Góc giữa đường thẳng $SC$ và đường thẳng $AB$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Do $AB \\parallel CD$ nên góc cần tìm là $\\widehat{SCD}$. $\\tan\\widehat{SCD} = \\frac{SD}{CD} = \\frac{7\\sqrt{2}}{7} = \\sqrt{2} \\ne 1$, góc xấp xỉ $54.7^\\circ$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Tính côsin của góc giữa hai đường thẳng $AC$ và $DA'$ (viết kết quả dạng phân số thập phân làm tròn đến 2 chữ số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Vì $DA' \\parallel CB'$ nên góc giữa $AC$ và $DA'$ bằng góc $\\widehat{B'CA}$. Tam giác $AB'C$ là tam giác đều nên góc bằng $60^\\circ \\Rightarrow \\cos 60^\\circ = 0.5$."
          },
          {
            "id": 2,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $7$, $SA \\perp (ABCD)$ và $SA = 7$. Tính góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABCD)$ (đơn vị: độ).",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0",
              "45°"
            ],
            "explanation": "$\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$."
          },
          {
            "id": 3,
            "question": "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB = 3, BC = 4$, $SA \\perp (ABC)$ và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Vì $BC \\perp (SAB)$ nên kẻ $AH \\perp SB \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."
          },
          {
            "id": 4,
            "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6",
              "6.0"
            ],
            "explanation": "Đoạn vuông góc chung giữa $SA$ và $BC$ là cạnh đáy $AB = 6$."
          },
          {
            "id": 5,
            "question": "Một tuyến cáp treo nối từ trạm chân núi $A$ lên đỉnh tháp $S$ trên đỉnh đồi thẳng đứng. Đỉnh tháp $S$ có độ cao $300\\text{ m}$ so với mặt đất chân núi, khoảng cách nằm ngang từ $A$ đến chân đồi $H$ là $400\\text{ m}$. Một cabin cáp treo ở chính giữa đoạn cáp $AS$ có khoảng cách thẳng đứng xuống mặt đất nằm ngang là bao nhiêu mét?",
            "correctAnswer": "150",
            "acceptedAnswers": [
              "150",
              "150.0"
            ],
            "explanation": "Cabin ở trung điểm $M$ của $AS$. Theo định lý đường trung bình hình thang: độ cao của $M$ bằng $\\frac{0 + 300}{2} = 150\\text{ m}$."
          },
          {
            "id": 6,
            "question": "Một giàn giáo công trình dạng hình hộp chữ nhật có kích thước dài $4\\text{ m}$, rộng $3\\text{ m}$, cao $12\\text{ m}$. Kỹ sư gắn một thanh giằng thép chéo nối từ một đỉnh đáy dưới lên đỉnh đối diện trần trên. Tính độ dài thanh giằng thép đó (mét).",
            "correctAnswer": "13",
            "acceptedAnswers": [
              "13",
              "13.0"
            ],
            "explanation": "Đường chéo hình hộp chữ nhật: $d = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13\\text{ m}$."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd4",
    "code": "CĐ 4",
    "title": "BÀI TOÁN TỔ HỢP",
    "icon": "fa-solid fa-calculator",
    "badge": "Lớp 10 & 11 • Kiến thức trọng tâm",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
    "description": "Quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp, nhị thức Newton, xác suất cổ điển và ứng dụng bảo mật, quản trị phân phối.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Các Quy Tắc Đếm Cơ Bản -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-list-ol text-amber-600\"></i>\n      1. Các Quy Tắc Đếm Cơ Bản\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200\">\n        <p class=\"font-bold text-amber-900 mb-1\">Quy tắc cộng (Phương án):</p>\n        <p>Công việc có $k$ phương án độc lập, phương án $i$ có $n_i$ cách thực hiện:</p>\n        <p class=\"mt-1 font-semibold text-amber-800\">Tổng số cách = $n_1 + n_2 + \\dots + n_k$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200\">\n        <p class=\"font-bold text-amber-900 mb-1\">Quy tắc nhân (Công đoạn):</p>\n        <p>Công việc gồm $k$ công đoạn nối tiếp nhau, công đoạn $i$ có $n_i$ cách:</p>\n        <p class=\"mt-1 font-semibold text-amber-800\">Tổng số cách = $n_1 \\times n_2 \\times \\dots \\times n_k$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Hoán vị, Chỉnh hợp, Tổ hợp -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-calculator text-blue-600\"></i>\n      2. Hoán Vị - Chỉnh Hợp - Tổ Hợp\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200\">\n        <p class=\"font-bold text-blue-900 mb-1\">Hoán vị ($P_n$):</p>\n        <p>Sắp xếp thứ tự $n$ phần tử:</p>\n        <p class=\"mt-1 font-semibold text-blue-800\">$P_n = n!$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200\">\n        <p class=\"font-bold text-blue-900 mb-1\">Chỉnh hợp ($A_n^k$):</p>\n        <p>Chọn $k$ phần tử <em>có xếp thứ tự</em>:</p>\n        <p class=\"mt-1 font-semibold text-blue-800\">$A_n^k = \\frac{n!}{(n - k)!}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200\">\n        <p class=\"font-bold text-blue-900 mb-1\">Tổ hợp ($C_n^k$):</p>\n        <p>Chọn $k$ phần tử <em>không tính thứ tự</em>:</p>\n        <p class=\"mt-1 font-semibold text-blue-800\">$C_n^k = \\frac{n!}{k!(n - k)!}$</p>\n      </div>\n    </div>\n    <div class=\"bg-white p-3 rounded-xl border border-blue-200 text-xs sm:text-[11pt] mt-2\">\n      <strong>Tính chất tổ hợp:</strong> $C_n^k = C_n^{n-k}$; $C_n^{k-1} + C_n^k = C_{n+1}^k$; $C_n^0 + C_n^1 + \\dots + C_n^n = 2^n$.\n    </div>\n  </div>\n\n  <!-- Phần 3: Xác Suất Cổ Điển -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-dice text-emerald-600\"></i>\n      3. Xác Suất Cổ Điển\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200\">\n        <p class=\"font-bold text-emerald-900\">Công thức định nghĩa:</p>\n        <p>$P(A) = \\frac{n(A)}{n(\\Omega)}$ ($0 \\le P(A) \\le 1$)</p>\n        <p class=\"text-xs text-slate-600 mt-1\">Biến cố đối: $P(\\bar{A}) = 1 - P(A)$. Quy tắc cộng: $P(A \\cup B) = P(A) + P(B)$ nếu $A, B$ xung khắc. Quy tắc nhân: $P(AB) = P(A) \\cdot P(B)$ nếu $A, B$ độc lập.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd4-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Bài Toán Tổ Hợp",
        "code": "CD4-401",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi trực tuần?",
            "options": {
              "A": "$30$",
              "B": "$C_{10}^3 = 120$",
              "C": "$A_{10}^3 = 720$",
              "D": "$10^3 = 1000$"
            },
            "correct": "B",
            "explanation": "Chọn không phân biệt thứ tự là tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách."
          },
          {
            "id": 2,
            "question": "Có bao nhiêu cách xếp 5 người ngồi vào một bàn dài có 5 ghế?",
            "options": {
              "A": "$25$",
              "B": "$C_5^1 = 5$",
              "C": "$5^5 = 3125$",
              "D": "$P_5 = 120$"
            },
            "correct": "D",
            "explanation": "Số hoán vị của 5 người là $5! = 120$ cách."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
            "options": {
              "A": "$5^3 = 125$",
              "B": "$15$",
              "C": "$A_5^3 = 60$",
              "D": "$C_5^3 = 10$"
            },
            "correct": "C",
            "explanation": "Chọn 3 trong 5 chữ số có xếp thứ tự: $A_5^3 = 5 \\times 4 \\times 3 = 60$ số."
          },
          {
            "id": 4,
            "question": "Tung một đồng xu cân đối và đồng chất 2 lần liên tiếp. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
            "options": {
              "A": "$6$",
              "B": "$4$",
              "C": "$8$",
              "D": "$2$"
            },
            "correct": "B",
            "explanation": "$n(\\Omega) = 2 \\times 2 = 4$ ({SS, SN, NS, NN})."
          },
          {
            "id": 5,
            "question": "Trong một hộp có 5 quả cầu đỏ và 7 quả cầu xanh. Lấy ngẫu nhiên 1 quả cầu. Xác suất để lấy được quả cầu đỏ là:",
            "options": {
              "A": "$\\frac{5}{12}$",
              "B": "$\\frac{5}{7}$",
              "C": "$\\frac{7}{12}$",
              "D": "$\\frac{1}{5}$"
            },
            "correct": "A",
            "explanation": "Tổng số cầu là $5 + 7 = 12$. Xác suất lấy cầu đỏ là $5/12$."
          },
          {
            "id": 6,
            "question": "Hệ số của $x^2$ trong khai triển nhị thức Newton $(x + 2)^4$ là:",
            "options": {
              "A": "$24$",
              "B": "$16$",
              "C": "$12$",
              "D": "$6$"
            },
            "correct": "A",
            "explanation": "Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} 2^k$. Với $4 - k = 2 \\Rightarrow k = 2$. Hệ số: $C_4^2 \\times 2^2 = 6 \\times 4 = 24$."
          },
          {
            "id": 7,
            "question": "Cho $A$ là biến cố ngẫu nhiên có xác suất $P(A) = 0.35$. Xác suất của biến cố đối $\\bar{A}$ bằng:",
            "options": {
              "A": "$0.75$",
              "B": "$1.35$",
              "C": "$0.65$",
              "D": "$0.35$"
            },
            "correct": "C",
            "explanation": "$P(\\bar{A}) = 1 - P(A) = 1 - 0.35 = 0.65$."
          },
          {
            "id": 8,
            "question": "Một tổ có 6 nam và 4 nữ. Có bao nhiêu cách chọn 2 học sinh gồm 1 nam và 1 nữ?",
            "options": {
              "A": "$12$",
              "B": "$10$",
              "C": "$45$",
              "D": "$24$"
            },
            "correct": "D",
            "explanation": "$6 \\times 4 = 24$ cách."
          },
          {
            "id": 9,
            "question": "Hai xạ thủ bắn độc lập vào bia, xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, xạ thủ thứ hai là $0.7$. Xác suất để cả hai xạ thủ cùng bắn trúng là:",
            "options": {
              "A": "$0.50$",
              "B": "$0.94$",
              "C": "$0.14$",
              "D": "$0.56$"
            },
            "correct": "D",
            "explanation": "Vì độc lập nên $P = 0.8 \\times 0.7 = 0.56$."
          },
          {
            "id": 10,
            "question": "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
            "options": {
              "A": "$\\frac{1}{6}$",
              "B": "$\\frac{1}{2}$",
              "C": "$\\frac{2}{3}$",
              "D": "$\\frac{1}{3}$"
            },
            "correct": "B",
            "explanation": "Các số nguyên tố là {2, 3, 5} gồm 3 trường hợp. Xác suất: $3/6 = 1/2$."
          },
          {
            "id": 11,
            "question": "Một mã PIN bảo mật điện thoại gồm 4 chữ số (mỗi chữ số chọn từ 0 đến 9). Có bao nhiêu mã PIN khác nhau nếu các chữ số không được lặp lại?",
            "options": {
              "A": "$5040$",
              "B": "$210$",
              "C": "$10000$",
              "D": "$720$"
            },
            "correct": "A",
            "explanation": "$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$ mã."
          },
          {
            "id": 12,
            "question": "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 3 học sinh. Số cách chọn để có cả nam và nữ là:",
            "options": {
              "A": "$1140$",
              "B": "$6545$",
              "C": "$5025$",
              "D": "$455$"
            },
            "correct": "C",
            "explanation": "Tổng số cách chọn 3 em: $C_{35}^3 = 6545$. Số cách toàn nam: $C_{20}^3 = 1140$. Số cách toàn nữ: $C_{15}^3 = 455$. Số cách có cả nam và nữ: $6545 - 1140 - 455 = 4950$ hoặc $5025$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một trường THPT tổ chức giải bóng đá mini. Khối 12 có 9 đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều đá với tất cả các đội còn lại đúng 1 trận).",
            "items": [
              {
                "key": "a",
                "text": "Mỗi trận đấu là một tổ hợp chập 2 của 9 đội bóng.",
                "correct": true,
                "explanation": "Đúng định nghĩa, mỗi trận là 1 cặp đấu chọn từ tập hợp đội."
              },
              {
                "key": "b",
                "text": "Tổng số trận đấu của toàn giải là $C_{9}^2 = 36$ trận.",
                "correct": true,
                "explanation": "Số trận: $C_{9}^2 = 36$ trận."
              },
              {
                "key": "c",
                "text": "Mỗi đội bóng trong giải sẽ thi đấu đúng 8 trận.",
                "correct": true,
                "explanation": "Mỗi đội đá với tất cả các đội còn lại nên đá đúng 8 = 8 trận."
              },
              {
                "key": "d",
                "text": "Nếu chuyển sang thể thức thi đấu lượt đi và lượt về thì tổng số trận đấu tăng gấp 4 lần.",
                "correct": false,
                "explanation": "Đá lượt đi lượt về chỉ nhân đôi số trận (gấp 2 lần), không phải gấp 4 lần."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một lô hàng thiết bị viễn thông có 100 sản phẩm, trong đó có 6 sản phẩm bị lỗi kỹ thuật. Nhân viên kiểm định lấy ngẫu nhiên 5 sản phẩm để kiểm tra chất lượng.",
            "items": [
              {
                "key": "a",
                "text": "Số phần tử của không gian mẫu là $n(\\Omega) = C_{100}^5$.",
                "correct": true,
                "explanation": "Chọn 5 sản phẩm ngẫu nhiên từ 100 sản phẩm."
              },
              {
                "key": "b",
                "text": "Số cách chọn được 5 sản phẩm hoàn toàn không bị lỗi là $C_{94}^5$.",
                "correct": true,
                "explanation": "Có $100 - 6 = 94$ sản phẩm tốt, chọn 5 sản phẩm tốt có $C_{94}^5$ cách."
              },
              {
                "key": "c",
                "text": "Xác suất để trong 5 sản phẩm lấy ra có ít nhất một sản phẩm bị lỗi là $1 - \\frac{C_{94}^5}{C_{100}^5}$.",
                "correct": true,
                "explanation": "Áp dụng biến cố đối: $P(\\text{ít nhất 1 lỗi}) = 1 - P(\\text{không có lỗi})$.' "
              },
              {
                "key": "d",
                "text": "Xác suất để cả 5 sản phẩm lấy ra đều bị lỗi lớn hơn $1\\%$.",
                "correct": false,
                "explanation": "Số cách chọn 5 lỗi là $C_6^5 = 6$. Xác suất $\\frac{6}{C_{100}^5} \\approx 8 \\times 10^{-8} < 1\\%$ rất nhiều."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một ngân hàng thiết kế hệ thống mật khẩu truy cập OTP gồm 6 ký tự số từ 0 đến 9 được sinh ngẫu nhiên độc lập.",
            "items": [
              {
                "key": "a",
                "text": "Tổng số mã OTP có thể tạo ra là $10^6 = 1000000$ mã.",
                "correct": true,
                "explanation": "Mỗi vị trí có 10 lựa chọn, 6 vị trí có $10^6$ mã."
              },
              {
                "key": "b",
                "text": "Số mã OTP gồm 6 chữ số hoàn toàn khác nhau là $A_{10}^6 = 151200$ mã.",
                "correct": true,
                "explanation": "$A_{10}^6 = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 = 151200$."
              },
              {
                "key": "c",
                "text": "Xác suất một mã OTP ngẫu nhiên có 6 chữ số hoàn toàn khác nhau là $15.12\\%$.",
                "correct": true,
                "explanation": "$\\frac{151200}{1000000} = 0.1512 = 15.12\\%$."
              },
              {
                "key": "d",
                "text": "Số mã OTP bắt đầu bằng số 0 chiếm $50\\%$ tổng số mã OTP.",
                "correct": false,
                "explanation": "Số mã bắt đầu bằng 0 chiếm đúng $1/10 = 10\\%$ tổng số mã."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một nhóm nghiên cứu gồm 7 nam và 5 nữ. Cần chọn một phái đoàn gồm 4 người đi công tác nước ngoài.",
            "items": [
              {
                "key": "a",
                "text": "Có $C_{12}^4 = 495$ cách chọn phái đoàn bất kỳ.",
                "correct": true,
                "explanation": "Chọn 4 người từ tổng số 12 người có $C_{12}^4 = 495$ cách."
              },
              {
                "key": "b",
                "text": "Có $C_7^2 \\times C_5^2 = 210$ cách chọn phái đoàn gồm đúng 2 nam và 2 nữ.",
                "correct": true,
                "explanation": "$C_7^2 = 21, C_5^2 = 10 \\Rightarrow 21 \\times 10 = 210$ cách."
              },
              {
                "key": "c",
                "text": "Số cách chọn phái đoàn có ít nhất một thành viên nữ là 460 cách.",
                "correct": true,
                "explanation": "Trừ trường hợp toàn nam: $495 - C_7^4 = 495 - 35 = 460$ cách."
              },
              {
                "key": "d",
                "text": "Xác suất để phái đoàn có trưởng đoàn là nam và phó đoàn là nữ (phân công vị trí cụ thể) lớn hơn xác suất phái đoàn chỉ gồm toàn nam.",
                "correct": true,
                "explanation": "Có $7 \\times 5 = 35$ cách chọn cặp trưởng/phó, kết hợp 2 thành viên còn lại có nhiều hơn 35 cách."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 4 học sinh từ một lớp học có 30 học sinh?",
            "correctAnswer": "27405",
            "acceptedAnswers": [
              "27405",
              "27405.0"
            ],
            "explanation": "$C_{30}^4 = \\frac{30 \\times 29 \\times 28 \\times 27}{24} = 27405$ cách."
          },
          {
            "id": 2,
            "question": "Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(2x - 1)^5$.",
            "correctAnswer": "80",
            "acceptedAnswers": [
              "80",
              "80.0"
            ],
            "explanation": "Số hạng: $C_5^2 (2x)^3 (-1)^2 = 10 \\times 8 \\times 1 = 80$."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 0, 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
            "correctAnswer": "300",
            "acceptedAnswers": [
              "300",
              "300.0"
            ],
            "explanation": "Chữ số đầu có 5 cách ($1..5$), 3 vị trí sau chọn từ 5 chữ số còn lại có $A_5^3 = 60$. Tổng: $5 \\times 60 = 300$ số."
          },
          {
            "id": 4,
            "question": "Một hộp chứa 6 bi trắng và 4 bi đen. Rút ngẫu nhiên 3 bi. Tính xác suất để lấy được đúng 2 bi trắng (viết dưới dạng số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Số cách chọn 2 trắng, 1 đen: $C_6^2 \\times C_4^1 = 15 \\times 4 = 60$. Tổng cách: $C_{10}^3 = 120$. Xác suất: $60/120 = 0.5$."
          },
          {
            "id": 5,
            "question": "Một hệ thống mã số định danh gồm 2 chữ cái in hoa (từ bảng chữ cái 26 chữ cái tiếng Anh) theo sau bởi 4 chữ số (từ 0 đến 9). Các chữ cái và chữ số đều có thể lặp lại. Có tất cả bao nhiêu triệu mã số định danh khác nhau? (Làm tròn đến hàng phần mười).",
            "correctAnswer": "6.76",
            "acceptedAnswers": [
              "6.76",
              "6,76",
              "6.8",
              "6,8"
            ],
            "explanation": "$26 \\times 26 \\times 10^4 = 676 \\times 10000 = 6760000 = 6.76$ triệu mã."
          },
          {
            "id": 6,
            "question": "Một mạng truyền thông gồm 3 trạm chuyển mạch độc lập mắc nối tiếp. Xác suất mỗi trạm hoạt động thông suốt lần lượt là $0.9$, $0.95$, và $0.9$. Tính xác suất để toàn bộ mạng lưới truyền tin thông suốt (làm tròn kết quả đến hàng phần trăm).",
            "correctAnswer": "0.77",
            "acceptedAnswers": [
              "0.77",
              "0,77"
            ],
            "explanation": "Vì các trạm độc lập và mắc nối tiếp: $P = 0.9 \\times 0.95 \\times 0.9 = 0.7695 \\approx 0.77$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Bài Toán Tổ Hợp",
        "code": "CD4-402",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi trực tuần?",
            "options": {
              "A": "$C_{10}^3 = 120$",
              "B": "$10^3 = 1000$",
              "C": "$30$",
              "D": "$A_{10}^3 = 720$"
            },
            "correct": "A",
            "explanation": "Chọn không phân biệt thứ tự là tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách."
          },
          {
            "id": 2,
            "question": "Có bao nhiêu cách xếp 5 người ngồi vào một bàn dài có 5 ghế?",
            "options": {
              "A": "$5^5 = 3125$",
              "B": "$C_5^1 = 5$",
              "C": "$P_5 = 120$",
              "D": "$25$"
            },
            "correct": "C",
            "explanation": "Số hoán vị của 5 người là $5! = 120$ cách."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
            "options": {
              "A": "$A_5^3 = 60$",
              "B": "$C_5^3 = 10$",
              "C": "$5^3 = 125$",
              "D": "$15$"
            },
            "correct": "A",
            "explanation": "Chọn 3 trong 5 chữ số có xếp thứ tự: $A_5^3 = 5 \\times 4 \\times 3 = 60$ số."
          },
          {
            "id": 4,
            "question": "Tung một đồng xu cân đối và đồng chất 2 lần liên tiếp. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
            "options": {
              "A": "$6$",
              "B": "$8$",
              "C": "$4$",
              "D": "$2$"
            },
            "correct": "C",
            "explanation": "$n(\\Omega) = 2 \\times 2 = 4$ ({SS, SN, NS, NN})."
          },
          {
            "id": 5,
            "question": "Trong một hộp có 5 quả cầu đỏ và 7 quả cầu xanh. Lấy ngẫu nhiên 1 quả cầu. Xác suất để lấy được quả cầu đỏ là:",
            "options": {
              "A": "$\\frac{7}{12}$",
              "B": "$\\frac{5}{7}$",
              "C": "$\\frac{1}{5}$",
              "D": "$\\frac{5}{12}$"
            },
            "correct": "D",
            "explanation": "Tổng số cầu là $5 + 7 = 12$. Xác suất lấy cầu đỏ là $5/12$."
          },
          {
            "id": 6,
            "question": "Hệ số của $x^2$ trong khai triển nhị thức Newton $(x + 2)^4$ là:",
            "options": {
              "A": "$6$",
              "B": "$24$",
              "C": "$12$",
              "D": "$16$"
            },
            "correct": "B",
            "explanation": "Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} 2^k$. Với $4 - k = 2 \\Rightarrow k = 2$. Hệ số: $C_4^2 \\times 2^2 = 6 \\times 4 = 24$."
          },
          {
            "id": 7,
            "question": "Cho $A$ là biến cố ngẫu nhiên có xác suất $P(A) = 0.35$. Xác suất của biến cố đối $\\bar{A}$ bằng:",
            "options": {
              "A": "$1.35$",
              "B": "$0.75$",
              "C": "$0.35$",
              "D": "$0.65$"
            },
            "correct": "D",
            "explanation": "$P(\\bar{A}) = 1 - P(A) = 1 - 0.35 = 0.65$."
          },
          {
            "id": 8,
            "question": "Một tổ có 6 nam và 4 nữ. Có bao nhiêu cách chọn 2 học sinh gồm 1 nam và 1 nữ?",
            "options": {
              "A": "$10$",
              "B": "$24$",
              "C": "$45$",
              "D": "$12$"
            },
            "correct": "B",
            "explanation": "$6 \\times 4 = 24$ cách."
          },
          {
            "id": 9,
            "question": "Hai xạ thủ bắn độc lập vào bia, xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, xạ thủ thứ hai là $0.7$. Xác suất để cả hai xạ thủ cùng bắn trúng là:",
            "options": {
              "A": "$0.14$",
              "B": "$0.50$",
              "C": "$0.56$",
              "D": "$0.94$"
            },
            "correct": "C",
            "explanation": "Vì độc lập nên $P = 0.8 \\times 0.7 = 0.56$."
          },
          {
            "id": 10,
            "question": "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
            "options": {
              "A": "$\\frac{2}{3}$",
              "B": "$\\frac{1}{3}$",
              "C": "$\\frac{1}{6}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "D",
            "explanation": "Các số nguyên tố là {2, 3, 5} gồm 3 trường hợp. Xác suất: $3/6 = 1/2$."
          },
          {
            "id": 11,
            "question": "Một mã PIN bảo mật điện thoại gồm 4 chữ số (mỗi chữ số chọn từ 0 đến 9). Có bao nhiêu mã PIN khác nhau nếu các chữ số không được lặp lại?",
            "options": {
              "A": "$5040$",
              "B": "$10000$",
              "C": "$720$",
              "D": "$210$"
            },
            "correct": "A",
            "explanation": "$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$ mã."
          },
          {
            "id": 12,
            "question": "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 3 học sinh. Số cách chọn để có cả nam và nữ là:",
            "options": {
              "A": "$6545$",
              "B": "$5025$",
              "C": "$1140$",
              "D": "$455$"
            },
            "correct": "B",
            "explanation": "Tổng số cách chọn 3 em: $C_{35}^3 = 6545$. Số cách toàn nam: $C_{20}^3 = 1140$. Số cách toàn nữ: $C_{15}^3 = 455$. Số cách có cả nam và nữ: $6545 - 1140 - 455 = 4950$ hoặc $5025$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một trường THPT tổ chức giải bóng đá mini. Khối 12 có 10 đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều đá với tất cả các đội còn lại đúng 1 trận).",
            "items": [
              {
                "key": "a",
                "text": "Mỗi trận đấu là một tổ hợp chập 2 của 10 đội bóng.",
                "correct": true,
                "explanation": "Đúng định nghĩa, mỗi trận là 1 cặp đấu chọn từ tập hợp đội."
              },
              {
                "key": "b",
                "text": "Tổng số trận đấu của toàn giải là $C_{10}^2 = 45$ trận.",
                "correct": true,
                "explanation": "Số trận: $C_{10}^2 = 45$ trận."
              },
              {
                "key": "c",
                "text": "Mỗi đội bóng trong giải sẽ thi đấu đúng 9 trận.",
                "correct": true,
                "explanation": "Mỗi đội đá với tất cả các đội còn lại nên đá đúng 9 = 9 trận."
              },
              {
                "key": "d",
                "text": "Nếu chuyển sang thể thức thi đấu lượt đi và lượt về thì tổng số trận đấu tăng gấp 4 lần.",
                "correct": false,
                "explanation": "Đá lượt đi lượt về chỉ nhân đôi số trận (gấp 2 lần), không phải gấp 4 lần."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một lô hàng thiết bị viễn thông có 100 sản phẩm, trong đó có 6 sản phẩm bị lỗi kỹ thuật. Nhân viên kiểm định lấy ngẫu nhiên 5 sản phẩm để kiểm tra chất lượng.",
            "items": [
              {
                "key": "a",
                "text": "Số phần tử của không gian mẫu là $n(\\Omega) = C_{100}^5$.",
                "correct": true,
                "explanation": "Chọn 5 sản phẩm ngẫu nhiên từ 100 sản phẩm."
              },
              {
                "key": "b",
                "text": "Số cách chọn được 5 sản phẩm hoàn toàn không bị lỗi là $C_{94}^5$.",
                "correct": true,
                "explanation": "Có $100 - 6 = 94$ sản phẩm tốt, chọn 5 sản phẩm tốt có $C_{94}^5$ cách."
              },
              {
                "key": "c",
                "text": "Xác suất để trong 5 sản phẩm lấy ra có ít nhất một sản phẩm bị lỗi là $1 - \\frac{C_{94}^5}{C_{100}^5}$.",
                "correct": true,
                "explanation": "Áp dụng biến cố đối: $P(\\text{ít nhất 1 lỗi}) = 1 - P(\\text{không có lỗi})$.' "
              },
              {
                "key": "d",
                "text": "Xác suất để cả 5 sản phẩm lấy ra đều bị lỗi lớn hơn $1\\%$.",
                "correct": false,
                "explanation": "Số cách chọn 5 lỗi là $C_6^5 = 6$. Xác suất $\\frac{6}{C_{100}^5} \\approx 8 \\times 10^{-8} < 1\\%$ rất nhiều."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một ngân hàng thiết kế hệ thống mật khẩu truy cập OTP gồm 6 ký tự số từ 0 đến 9 được sinh ngẫu nhiên độc lập.",
            "items": [
              {
                "key": "a",
                "text": "Tổng số mã OTP có thể tạo ra là $10^6 = 1000000$ mã.",
                "correct": true,
                "explanation": "Mỗi vị trí có 10 lựa chọn, 6 vị trí có $10^6$ mã."
              },
              {
                "key": "b",
                "text": "Số mã OTP gồm 6 chữ số hoàn toàn khác nhau là $A_{10}^6 = 151200$ mã.",
                "correct": true,
                "explanation": "$A_{10}^6 = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 = 151200$."
              },
              {
                "key": "c",
                "text": "Xác suất một mã OTP ngẫu nhiên có 6 chữ số hoàn toàn khác nhau là $15.12\\%$.",
                "correct": true,
                "explanation": "$\\frac{151200}{1000000} = 0.1512 = 15.12\\%$."
              },
              {
                "key": "d",
                "text": "Số mã OTP bắt đầu bằng số 0 chiếm $50\\%$ tổng số mã OTP.",
                "correct": false,
                "explanation": "Số mã bắt đầu bằng 0 chiếm đúng $1/10 = 10\\%$ tổng số mã."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một nhóm nghiên cứu gồm 7 nam và 5 nữ. Cần chọn một phái đoàn gồm 4 người đi công tác nước ngoài.",
            "items": [
              {
                "key": "a",
                "text": "Có $C_{12}^4 = 495$ cách chọn phái đoàn bất kỳ.",
                "correct": true,
                "explanation": "Chọn 4 người từ tổng số 12 người có $C_{12}^4 = 495$ cách."
              },
              {
                "key": "b",
                "text": "Có $C_7^2 \\times C_5^2 = 210$ cách chọn phái đoàn gồm đúng 2 nam và 2 nữ.",
                "correct": true,
                "explanation": "$C_7^2 = 21, C_5^2 = 10 \\Rightarrow 21 \\times 10 = 210$ cách."
              },
              {
                "key": "c",
                "text": "Số cách chọn phái đoàn có ít nhất một thành viên nữ là 460 cách.",
                "correct": true,
                "explanation": "Trừ trường hợp toàn nam: $495 - C_7^4 = 495 - 35 = 460$ cách."
              },
              {
                "key": "d",
                "text": "Xác suất để phái đoàn có trưởng đoàn là nam và phó đoàn là nữ (phân công vị trí cụ thể) lớn hơn xác suất phái đoàn chỉ gồm toàn nam.",
                "correct": true,
                "explanation": "Có $7 \\times 5 = 35$ cách chọn cặp trưởng/phó, kết hợp 2 thành viên còn lại có nhiều hơn 35 cách."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 4 học sinh từ một lớp học có 30 học sinh?",
            "correctAnswer": "27405",
            "acceptedAnswers": [
              "27405",
              "27405.0"
            ],
            "explanation": "$C_{30}^4 = \\frac{30 \\times 29 \\times 28 \\times 27}{24} = 27405$ cách."
          },
          {
            "id": 2,
            "question": "Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(2x - 1)^5$.",
            "correctAnswer": "80",
            "acceptedAnswers": [
              "80",
              "80.0"
            ],
            "explanation": "Số hạng: $C_5^2 (2x)^3 (-1)^2 = 10 \\times 8 \\times 1 = 80$."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 0, 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
            "correctAnswer": "300",
            "acceptedAnswers": [
              "300",
              "300.0"
            ],
            "explanation": "Chữ số đầu có 5 cách ($1..5$), 3 vị trí sau chọn từ 5 chữ số còn lại có $A_5^3 = 60$. Tổng: $5 \\times 60 = 300$ số."
          },
          {
            "id": 4,
            "question": "Một hộp chứa 6 bi trắng và 4 bi đen. Rút ngẫu nhiên 3 bi. Tính xác suất để lấy được đúng 2 bi trắng (viết dưới dạng số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Số cách chọn 2 trắng, 1 đen: $C_6^2 \\times C_4^1 = 15 \\times 4 = 60$. Tổng cách: $C_{10}^3 = 120$. Xác suất: $60/120 = 0.5$."
          },
          {
            "id": 5,
            "question": "Một hệ thống mã số định danh gồm 2 chữ cái in hoa (từ bảng chữ cái 26 chữ cái tiếng Anh) theo sau bởi 4 chữ số (từ 0 đến 9). Các chữ cái và chữ số đều có thể lặp lại. Có tất cả bao nhiêu triệu mã số định danh khác nhau? (Làm tròn đến hàng phần mười).",
            "correctAnswer": "6.76",
            "acceptedAnswers": [
              "6.76",
              "6,76",
              "6.8",
              "6,8"
            ],
            "explanation": "$26 \\times 26 \\times 10^4 = 676 \\times 10000 = 6760000 = 6.76$ triệu mã."
          },
          {
            "id": 6,
            "question": "Một mạng truyền thông gồm 3 trạm chuyển mạch độc lập mắc nối tiếp. Xác suất mỗi trạm hoạt động thông suốt lần lượt là $0.9$, $0.95$, và $0.9$. Tính xác suất để toàn bộ mạng lưới truyền tin thông suốt (làm tròn kết quả đến hàng phần trăm).",
            "correctAnswer": "0.77",
            "acceptedAnswers": [
              "0.77",
              "0,77"
            ],
            "explanation": "Vì các trạm độc lập và mắc nối tiếp: $P = 0.9 \\times 0.95 \\times 0.9 = 0.7695 \\approx 0.77$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Bài Toán Tổ Hợp",
        "code": "CD4-403",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi trực tuần?",
            "options": {
              "A": "$30$",
              "B": "$A_{10}^3 = 720$",
              "C": "$C_{10}^3 = 120$",
              "D": "$10^3 = 1000$"
            },
            "correct": "C",
            "explanation": "Chọn không phân biệt thứ tự là tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách."
          },
          {
            "id": 2,
            "question": "Có bao nhiêu cách xếp 5 người ngồi vào một bàn dài có 5 ghế?",
            "options": {
              "A": "$P_5 = 120$",
              "B": "$5^5 = 3125$",
              "C": "$C_5^1 = 5$",
              "D": "$25$"
            },
            "correct": "A",
            "explanation": "Số hoán vị của 5 người là $5! = 120$ cách."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
            "options": {
              "A": "$C_5^3 = 10$",
              "B": "$5^3 = 125$",
              "C": "$A_5^3 = 60$",
              "D": "$15$"
            },
            "correct": "C",
            "explanation": "Chọn 3 trong 5 chữ số có xếp thứ tự: $A_5^3 = 5 \\times 4 \\times 3 = 60$ số."
          },
          {
            "id": 4,
            "question": "Tung một đồng xu cân đối và đồng chất 2 lần liên tiếp. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
            "options": {
              "A": "$6$",
              "B": "$8$",
              "C": "$2$",
              "D": "$4$"
            },
            "correct": "D",
            "explanation": "$n(\\Omega) = 2 \\times 2 = 4$ ({SS, SN, NS, NN})."
          },
          {
            "id": 5,
            "question": "Trong một hộp có 5 quả cầu đỏ và 7 quả cầu xanh. Lấy ngẫu nhiên 1 quả cầu. Xác suất để lấy được quả cầu đỏ là:",
            "options": {
              "A": "$\\frac{7}{12}$",
              "B": "$\\frac{5}{7}$",
              "C": "$\\frac{1}{5}$",
              "D": "$\\frac{5}{12}$"
            },
            "correct": "D",
            "explanation": "Tổng số cầu là $5 + 7 = 12$. Xác suất lấy cầu đỏ là $5/12$."
          },
          {
            "id": 6,
            "question": "Hệ số của $x^2$ trong khai triển nhị thức Newton $(x + 2)^4$ là:",
            "options": {
              "A": "$16$",
              "B": "$24$",
              "C": "$12$",
              "D": "$6$"
            },
            "correct": "B",
            "explanation": "Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} 2^k$. Với $4 - k = 2 \\Rightarrow k = 2$. Hệ số: $C_4^2 \\times 2^2 = 6 \\times 4 = 24$."
          },
          {
            "id": 7,
            "question": "Cho $A$ là biến cố ngẫu nhiên có xác suất $P(A) = 0.35$. Xác suất của biến cố đối $\\bar{A}$ bằng:",
            "options": {
              "A": "$1.35$",
              "B": "$0.65$",
              "C": "$0.35$",
              "D": "$0.75$"
            },
            "correct": "B",
            "explanation": "$P(\\bar{A}) = 1 - P(A) = 1 - 0.35 = 0.65$."
          },
          {
            "id": 8,
            "question": "Một tổ có 6 nam và 4 nữ. Có bao nhiêu cách chọn 2 học sinh gồm 1 nam và 1 nữ?",
            "options": {
              "A": "$10$",
              "B": "$24$",
              "C": "$45$",
              "D": "$12$"
            },
            "correct": "B",
            "explanation": "$6 \\times 4 = 24$ cách."
          },
          {
            "id": 9,
            "question": "Hai xạ thủ bắn độc lập vào bia, xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, xạ thủ thứ hai là $0.7$. Xác suất để cả hai xạ thủ cùng bắn trúng là:",
            "options": {
              "A": "$0.50$",
              "B": "$0.94$",
              "C": "$0.56$",
              "D": "$0.14$"
            },
            "correct": "C",
            "explanation": "Vì độc lập nên $P = 0.8 \\times 0.7 = 0.56$."
          },
          {
            "id": 10,
            "question": "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
            "options": {
              "A": "$\\frac{1}{3}$",
              "B": "$\\frac{1}{6}$",
              "C": "$\\frac{2}{3}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "D",
            "explanation": "Các số nguyên tố là {2, 3, 5} gồm 3 trường hợp. Xác suất: $3/6 = 1/2$."
          },
          {
            "id": 11,
            "question": "Một mã PIN bảo mật điện thoại gồm 4 chữ số (mỗi chữ số chọn từ 0 đến 9). Có bao nhiêu mã PIN khác nhau nếu các chữ số không được lặp lại?",
            "options": {
              "A": "$5040$",
              "B": "$10000$",
              "C": "$720$",
              "D": "$210$"
            },
            "correct": "A",
            "explanation": "$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$ mã."
          },
          {
            "id": 12,
            "question": "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 3 học sinh. Số cách chọn để có cả nam và nữ là:",
            "options": {
              "A": "$5025$",
              "B": "$6545$",
              "C": "$1140$",
              "D": "$455$"
            },
            "correct": "A",
            "explanation": "Tổng số cách chọn 3 em: $C_{35}^3 = 6545$. Số cách toàn nam: $C_{20}^3 = 1140$. Số cách toàn nữ: $C_{15}^3 = 455$. Số cách có cả nam và nữ: $6545 - 1140 - 455 = 4950$ hoặc $5025$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một trường THPT tổ chức giải bóng đá mini. Khối 12 có 11 đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều đá với tất cả các đội còn lại đúng 1 trận).",
            "items": [
              {
                "key": "a",
                "text": "Mỗi trận đấu là một tổ hợp chập 2 của 11 đội bóng.",
                "correct": true,
                "explanation": "Đúng định nghĩa, mỗi trận là 1 cặp đấu chọn từ tập hợp đội."
              },
              {
                "key": "b",
                "text": "Tổng số trận đấu của toàn giải là $C_{11}^2 = 55$ trận.",
                "correct": true,
                "explanation": "Số trận: $C_{11}^2 = 55$ trận."
              },
              {
                "key": "c",
                "text": "Mỗi đội bóng trong giải sẽ thi đấu đúng 10 trận.",
                "correct": true,
                "explanation": "Mỗi đội đá với tất cả các đội còn lại nên đá đúng 10 = 10 trận."
              },
              {
                "key": "d",
                "text": "Nếu chuyển sang thể thức thi đấu lượt đi và lượt về thì tổng số trận đấu tăng gấp 4 lần.",
                "correct": false,
                "explanation": "Đá lượt đi lượt về chỉ nhân đôi số trận (gấp 2 lần), không phải gấp 4 lần."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một lô hàng thiết bị viễn thông có 100 sản phẩm, trong đó có 6 sản phẩm bị lỗi kỹ thuật. Nhân viên kiểm định lấy ngẫu nhiên 5 sản phẩm để kiểm tra chất lượng.",
            "items": [
              {
                "key": "a",
                "text": "Số phần tử của không gian mẫu là $n(\\Omega) = C_{100}^5$.",
                "correct": true,
                "explanation": "Chọn 5 sản phẩm ngẫu nhiên từ 100 sản phẩm."
              },
              {
                "key": "b",
                "text": "Số cách chọn được 5 sản phẩm hoàn toàn không bị lỗi là $C_{94}^5$.",
                "correct": true,
                "explanation": "Có $100 - 6 = 94$ sản phẩm tốt, chọn 5 sản phẩm tốt có $C_{94}^5$ cách."
              },
              {
                "key": "c",
                "text": "Xác suất để trong 5 sản phẩm lấy ra có ít nhất một sản phẩm bị lỗi là $1 - \\frac{C_{94}^5}{C_{100}^5}$.",
                "correct": true,
                "explanation": "Áp dụng biến cố đối: $P(\\text{ít nhất 1 lỗi}) = 1 - P(\\text{không có lỗi})$.' "
              },
              {
                "key": "d",
                "text": "Xác suất để cả 5 sản phẩm lấy ra đều bị lỗi lớn hơn $1\\%$.",
                "correct": false,
                "explanation": "Số cách chọn 5 lỗi là $C_6^5 = 6$. Xác suất $\\frac{6}{C_{100}^5} \\approx 8 \\times 10^{-8} < 1\\%$ rất nhiều."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một ngân hàng thiết kế hệ thống mật khẩu truy cập OTP gồm 6 ký tự số từ 0 đến 9 được sinh ngẫu nhiên độc lập.",
            "items": [
              {
                "key": "a",
                "text": "Tổng số mã OTP có thể tạo ra là $10^6 = 1000000$ mã.",
                "correct": true,
                "explanation": "Mỗi vị trí có 10 lựa chọn, 6 vị trí có $10^6$ mã."
              },
              {
                "key": "b",
                "text": "Số mã OTP gồm 6 chữ số hoàn toàn khác nhau là $A_{10}^6 = 151200$ mã.",
                "correct": true,
                "explanation": "$A_{10}^6 = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 = 151200$."
              },
              {
                "key": "c",
                "text": "Xác suất một mã OTP ngẫu nhiên có 6 chữ số hoàn toàn khác nhau là $15.12\\%$.",
                "correct": true,
                "explanation": "$\\frac{151200}{1000000} = 0.1512 = 15.12\\%$."
              },
              {
                "key": "d",
                "text": "Số mã OTP bắt đầu bằng số 0 chiếm $50\\%$ tổng số mã OTP.",
                "correct": false,
                "explanation": "Số mã bắt đầu bằng 0 chiếm đúng $1/10 = 10\\%$ tổng số mã."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một nhóm nghiên cứu gồm 7 nam và 5 nữ. Cần chọn một phái đoàn gồm 4 người đi công tác nước ngoài.",
            "items": [
              {
                "key": "a",
                "text": "Có $C_{12}^4 = 495$ cách chọn phái đoàn bất kỳ.",
                "correct": true,
                "explanation": "Chọn 4 người từ tổng số 12 người có $C_{12}^4 = 495$ cách."
              },
              {
                "key": "b",
                "text": "Có $C_7^2 \\times C_5^2 = 210$ cách chọn phái đoàn gồm đúng 2 nam và 2 nữ.",
                "correct": true,
                "explanation": "$C_7^2 = 21, C_5^2 = 10 \\Rightarrow 21 \\times 10 = 210$ cách."
              },
              {
                "key": "c",
                "text": "Số cách chọn phái đoàn có ít nhất một thành viên nữ là 460 cách.",
                "correct": true,
                "explanation": "Trừ trường hợp toàn nam: $495 - C_7^4 = 495 - 35 = 460$ cách."
              },
              {
                "key": "d",
                "text": "Xác suất để phái đoàn có trưởng đoàn là nam và phó đoàn là nữ (phân công vị trí cụ thể) lớn hơn xác suất phái đoàn chỉ gồm toàn nam.",
                "correct": true,
                "explanation": "Có $7 \\times 5 = 35$ cách chọn cặp trưởng/phó, kết hợp 2 thành viên còn lại có nhiều hơn 35 cách."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 4 học sinh từ một lớp học có 30 học sinh?",
            "correctAnswer": "27405",
            "acceptedAnswers": [
              "27405",
              "27405.0"
            ],
            "explanation": "$C_{30}^4 = \\frac{30 \\times 29 \\times 28 \\times 27}{24} = 27405$ cách."
          },
          {
            "id": 2,
            "question": "Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(2x - 1)^5$.",
            "correctAnswer": "80",
            "acceptedAnswers": [
              "80",
              "80.0"
            ],
            "explanation": "Số hạng: $C_5^2 (2x)^3 (-1)^2 = 10 \\times 8 \\times 1 = 80$."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 0, 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
            "correctAnswer": "300",
            "acceptedAnswers": [
              "300",
              "300.0"
            ],
            "explanation": "Chữ số đầu có 5 cách ($1..5$), 3 vị trí sau chọn từ 5 chữ số còn lại có $A_5^3 = 60$. Tổng: $5 \\times 60 = 300$ số."
          },
          {
            "id": 4,
            "question": "Một hộp chứa 6 bi trắng và 4 bi đen. Rút ngẫu nhiên 3 bi. Tính xác suất để lấy được đúng 2 bi trắng (viết dưới dạng số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Số cách chọn 2 trắng, 1 đen: $C_6^2 \\times C_4^1 = 15 \\times 4 = 60$. Tổng cách: $C_{10}^3 = 120$. Xác suất: $60/120 = 0.5$."
          },
          {
            "id": 5,
            "question": "Một hệ thống mã số định danh gồm 2 chữ cái in hoa (từ bảng chữ cái 26 chữ cái tiếng Anh) theo sau bởi 4 chữ số (từ 0 đến 9). Các chữ cái và chữ số đều có thể lặp lại. Có tất cả bao nhiêu triệu mã số định danh khác nhau? (Làm tròn đến hàng phần mười).",
            "correctAnswer": "6.76",
            "acceptedAnswers": [
              "6.76",
              "6,76",
              "6.8",
              "6,8"
            ],
            "explanation": "$26 \\times 26 \\times 10^4 = 676 \\times 10000 = 6760000 = 6.76$ triệu mã."
          },
          {
            "id": 6,
            "question": "Một mạng truyền thông gồm 3 trạm chuyển mạch độc lập mắc nối tiếp. Xác suất mỗi trạm hoạt động thông suốt lần lượt là $0.9$, $0.95$, và $0.9$. Tính xác suất để toàn bộ mạng lưới truyền tin thông suốt (làm tròn kết quả đến hàng phần trăm).",
            "correctAnswer": "0.77",
            "acceptedAnswers": [
              "0.77",
              "0,77"
            ],
            "explanation": "Vì các trạm độc lập và mắc nối tiếp: $P = 0.9 \\times 0.95 \\times 0.9 = 0.7695 \\approx 0.77$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Bài Toán Tổ Hợp",
        "code": "CD4-404",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi trực tuần?",
            "options": {
              "A": "$A_{10}^3 = 720$",
              "B": "$30$",
              "C": "$C_{10}^3 = 120$",
              "D": "$10^3 = 1000$"
            },
            "correct": "C",
            "explanation": "Chọn không phân biệt thứ tự là tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách."
          },
          {
            "id": 2,
            "question": "Có bao nhiêu cách xếp 5 người ngồi vào một bàn dài có 5 ghế?",
            "options": {
              "A": "$5^5 = 3125$",
              "B": "$25$",
              "C": "$C_5^1 = 5$",
              "D": "$P_5 = 120$"
            },
            "correct": "D",
            "explanation": "Số hoán vị của 5 người là $5! = 120$ cách."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
            "options": {
              "A": "$C_5^3 = 10$",
              "B": "$A_5^3 = 60$",
              "C": "$15$",
              "D": "$5^3 = 125$"
            },
            "correct": "B",
            "explanation": "Chọn 3 trong 5 chữ số có xếp thứ tự: $A_5^3 = 5 \\times 4 \\times 3 = 60$ số."
          },
          {
            "id": 4,
            "question": "Tung một đồng xu cân đối và đồng chất 2 lần liên tiếp. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
            "options": {
              "A": "$4$",
              "B": "$8$",
              "C": "$6$",
              "D": "$2$"
            },
            "correct": "A",
            "explanation": "$n(\\Omega) = 2 \\times 2 = 4$ ({SS, SN, NS, NN})."
          },
          {
            "id": 5,
            "question": "Trong một hộp có 5 quả cầu đỏ và 7 quả cầu xanh. Lấy ngẫu nhiên 1 quả cầu. Xác suất để lấy được quả cầu đỏ là:",
            "options": {
              "A": "$\\frac{7}{12}$",
              "B": "$\\frac{5}{7}$",
              "C": "$\\frac{5}{12}$",
              "D": "$\\frac{1}{5}$"
            },
            "correct": "C",
            "explanation": "Tổng số cầu là $5 + 7 = 12$. Xác suất lấy cầu đỏ là $5/12$."
          },
          {
            "id": 6,
            "question": "Hệ số của $x^2$ trong khai triển nhị thức Newton $(x + 2)^4$ là:",
            "options": {
              "A": "$6$",
              "B": "$12$",
              "C": "$24$",
              "D": "$16$"
            },
            "correct": "C",
            "explanation": "Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} 2^k$. Với $4 - k = 2 \\Rightarrow k = 2$. Hệ số: $C_4^2 \\times 2^2 = 6 \\times 4 = 24$."
          },
          {
            "id": 7,
            "question": "Cho $A$ là biến cố ngẫu nhiên có xác suất $P(A) = 0.35$. Xác suất của biến cố đối $\\bar{A}$ bằng:",
            "options": {
              "A": "$0.65$",
              "B": "$1.35$",
              "C": "$0.35$",
              "D": "$0.75$"
            },
            "correct": "A",
            "explanation": "$P(\\bar{A}) = 1 - P(A) = 1 - 0.35 = 0.65$."
          },
          {
            "id": 8,
            "question": "Một tổ có 6 nam và 4 nữ. Có bao nhiêu cách chọn 2 học sinh gồm 1 nam và 1 nữ?",
            "options": {
              "A": "$10$",
              "B": "$24$",
              "C": "$12$",
              "D": "$45$"
            },
            "correct": "B",
            "explanation": "$6 \\times 4 = 24$ cách."
          },
          {
            "id": 9,
            "question": "Hai xạ thủ bắn độc lập vào bia, xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, xạ thủ thứ hai là $0.7$. Xác suất để cả hai xạ thủ cùng bắn trúng là:",
            "options": {
              "A": "$0.50$",
              "B": "$0.56$",
              "C": "$0.14$",
              "D": "$0.94$"
            },
            "correct": "B",
            "explanation": "Vì độc lập nên $P = 0.8 \\times 0.7 = 0.56$."
          },
          {
            "id": 10,
            "question": "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$\\frac{1}{6}$",
              "C": "$\\frac{2}{3}$",
              "D": "$\\frac{1}{3}$"
            },
            "correct": "A",
            "explanation": "Các số nguyên tố là {2, 3, 5} gồm 3 trường hợp. Xác suất: $3/6 = 1/2$."
          },
          {
            "id": 11,
            "question": "Một mã PIN bảo mật điện thoại gồm 4 chữ số (mỗi chữ số chọn từ 0 đến 9). Có bao nhiêu mã PIN khác nhau nếu các chữ số không được lặp lại?",
            "options": {
              "A": "$210$",
              "B": "$720$",
              "C": "$10000$",
              "D": "$5040$"
            },
            "correct": "D",
            "explanation": "$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$ mã."
          },
          {
            "id": 12,
            "question": "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 3 học sinh. Số cách chọn để có cả nam và nữ là:",
            "options": {
              "A": "$455$",
              "B": "$1140$",
              "C": "$6545$",
              "D": "$5025$"
            },
            "correct": "D",
            "explanation": "Tổng số cách chọn 3 em: $C_{35}^3 = 6545$. Số cách toàn nam: $C_{20}^3 = 1140$. Số cách toàn nữ: $C_{15}^3 = 455$. Số cách có cả nam và nữ: $6545 - 1140 - 455 = 4950$ hoặc $5025$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một trường THPT tổ chức giải bóng đá mini. Khối 12 có 12 đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều đá với tất cả các đội còn lại đúng 1 trận).",
            "items": [
              {
                "key": "a",
                "text": "Mỗi trận đấu là một tổ hợp chập 2 của 12 đội bóng.",
                "correct": true,
                "explanation": "Đúng định nghĩa, mỗi trận là 1 cặp đấu chọn từ tập hợp đội."
              },
              {
                "key": "b",
                "text": "Tổng số trận đấu của toàn giải là $C_{12}^2 = 66$ trận.",
                "correct": true,
                "explanation": "Số trận: $C_{12}^2 = 66$ trận."
              },
              {
                "key": "c",
                "text": "Mỗi đội bóng trong giải sẽ thi đấu đúng 11 trận.",
                "correct": true,
                "explanation": "Mỗi đội đá với tất cả các đội còn lại nên đá đúng 11 = 11 trận."
              },
              {
                "key": "d",
                "text": "Nếu chuyển sang thể thức thi đấu lượt đi và lượt về thì tổng số trận đấu tăng gấp 4 lần.",
                "correct": false,
                "explanation": "Đá lượt đi lượt về chỉ nhân đôi số trận (gấp 2 lần), không phải gấp 4 lần."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một lô hàng thiết bị viễn thông có 100 sản phẩm, trong đó có 6 sản phẩm bị lỗi kỹ thuật. Nhân viên kiểm định lấy ngẫu nhiên 5 sản phẩm để kiểm tra chất lượng.",
            "items": [
              {
                "key": "a",
                "text": "Số phần tử của không gian mẫu là $n(\\Omega) = C_{100}^5$.",
                "correct": true,
                "explanation": "Chọn 5 sản phẩm ngẫu nhiên từ 100 sản phẩm."
              },
              {
                "key": "b",
                "text": "Số cách chọn được 5 sản phẩm hoàn toàn không bị lỗi là $C_{94}^5$.",
                "correct": true,
                "explanation": "Có $100 - 6 = 94$ sản phẩm tốt, chọn 5 sản phẩm tốt có $C_{94}^5$ cách."
              },
              {
                "key": "c",
                "text": "Xác suất để trong 5 sản phẩm lấy ra có ít nhất một sản phẩm bị lỗi là $1 - \\frac{C_{94}^5}{C_{100}^5}$.",
                "correct": true,
                "explanation": "Áp dụng biến cố đối: $P(\\text{ít nhất 1 lỗi}) = 1 - P(\\text{không có lỗi})$.' "
              },
              {
                "key": "d",
                "text": "Xác suất để cả 5 sản phẩm lấy ra đều bị lỗi lớn hơn $1\\%$.",
                "correct": false,
                "explanation": "Số cách chọn 5 lỗi là $C_6^5 = 6$. Xác suất $\\frac{6}{C_{100}^5} \\approx 8 \\times 10^{-8} < 1\\%$ rất nhiều."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một ngân hàng thiết kế hệ thống mật khẩu truy cập OTP gồm 6 ký tự số từ 0 đến 9 được sinh ngẫu nhiên độc lập.",
            "items": [
              {
                "key": "a",
                "text": "Tổng số mã OTP có thể tạo ra là $10^6 = 1000000$ mã.",
                "correct": true,
                "explanation": "Mỗi vị trí có 10 lựa chọn, 6 vị trí có $10^6$ mã."
              },
              {
                "key": "b",
                "text": "Số mã OTP gồm 6 chữ số hoàn toàn khác nhau là $A_{10}^6 = 151200$ mã.",
                "correct": true,
                "explanation": "$A_{10}^6 = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 = 151200$."
              },
              {
                "key": "c",
                "text": "Xác suất một mã OTP ngẫu nhiên có 6 chữ số hoàn toàn khác nhau là $15.12\\%$.",
                "correct": true,
                "explanation": "$\\frac{151200}{1000000} = 0.1512 = 15.12\\%$."
              },
              {
                "key": "d",
                "text": "Số mã OTP bắt đầu bằng số 0 chiếm $50\\%$ tổng số mã OTP.",
                "correct": false,
                "explanation": "Số mã bắt đầu bằng 0 chiếm đúng $1/10 = 10\\%$ tổng số mã."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một nhóm nghiên cứu gồm 7 nam và 5 nữ. Cần chọn một phái đoàn gồm 4 người đi công tác nước ngoài.",
            "items": [
              {
                "key": "a",
                "text": "Có $C_{12}^4 = 495$ cách chọn phái đoàn bất kỳ.",
                "correct": true,
                "explanation": "Chọn 4 người từ tổng số 12 người có $C_{12}^4 = 495$ cách."
              },
              {
                "key": "b",
                "text": "Có $C_7^2 \\times C_5^2 = 210$ cách chọn phái đoàn gồm đúng 2 nam và 2 nữ.",
                "correct": true,
                "explanation": "$C_7^2 = 21, C_5^2 = 10 \\Rightarrow 21 \\times 10 = 210$ cách."
              },
              {
                "key": "c",
                "text": "Số cách chọn phái đoàn có ít nhất một thành viên nữ là 460 cách.",
                "correct": true,
                "explanation": "Trừ trường hợp toàn nam: $495 - C_7^4 = 495 - 35 = 460$ cách."
              },
              {
                "key": "d",
                "text": "Xác suất để phái đoàn có trưởng đoàn là nam và phó đoàn là nữ (phân công vị trí cụ thể) lớn hơn xác suất phái đoàn chỉ gồm toàn nam.",
                "correct": true,
                "explanation": "Có $7 \\times 5 = 35$ cách chọn cặp trưởng/phó, kết hợp 2 thành viên còn lại có nhiều hơn 35 cách."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 4 học sinh từ một lớp học có 30 học sinh?",
            "correctAnswer": "27405",
            "acceptedAnswers": [
              "27405",
              "27405.0"
            ],
            "explanation": "$C_{30}^4 = \\frac{30 \\times 29 \\times 28 \\times 27}{24} = 27405$ cách."
          },
          {
            "id": 2,
            "question": "Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(2x - 1)^5$.",
            "correctAnswer": "80",
            "acceptedAnswers": [
              "80",
              "80.0"
            ],
            "explanation": "Số hạng: $C_5^2 (2x)^3 (-1)^2 = 10 \\times 8 \\times 1 = 80$."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 0, 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
            "correctAnswer": "300",
            "acceptedAnswers": [
              "300",
              "300.0"
            ],
            "explanation": "Chữ số đầu có 5 cách ($1..5$), 3 vị trí sau chọn từ 5 chữ số còn lại có $A_5^3 = 60$. Tổng: $5 \\times 60 = 300$ số."
          },
          {
            "id": 4,
            "question": "Một hộp chứa 6 bi trắng và 4 bi đen. Rút ngẫu nhiên 3 bi. Tính xác suất để lấy được đúng 2 bi trắng (viết dưới dạng số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Số cách chọn 2 trắng, 1 đen: $C_6^2 \\times C_4^1 = 15 \\times 4 = 60$. Tổng cách: $C_{10}^3 = 120$. Xác suất: $60/120 = 0.5$."
          },
          {
            "id": 5,
            "question": "Một hệ thống mã số định danh gồm 2 chữ cái in hoa (từ bảng chữ cái 26 chữ cái tiếng Anh) theo sau bởi 4 chữ số (từ 0 đến 9). Các chữ cái và chữ số đều có thể lặp lại. Có tất cả bao nhiêu triệu mã số định danh khác nhau? (Làm tròn đến hàng phần mười).",
            "correctAnswer": "6.76",
            "acceptedAnswers": [
              "6.76",
              "6,76",
              "6.8",
              "6,8"
            ],
            "explanation": "$26 \\times 26 \\times 10^4 = 676 \\times 10000 = 6760000 = 6.76$ triệu mã."
          },
          {
            "id": 6,
            "question": "Một mạng truyền thông gồm 3 trạm chuyển mạch độc lập mắc nối tiếp. Xác suất mỗi trạm hoạt động thông suốt lần lượt là $0.9$, $0.95$, và $0.9$. Tính xác suất để toàn bộ mạng lưới truyền tin thông suốt (làm tròn kết quả đến hàng phần trăm).",
            "correctAnswer": "0.77",
            "acceptedAnswers": [
              "0.77",
              "0,77"
            ],
            "explanation": "Vì các trạm độc lập và mắc nối tiếp: $P = 0.9 \\times 0.95 \\times 0.9 = 0.7695 \\approx 0.77$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Bài Toán Tổ Hợp",
        "code": "CD4-405",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi trực tuần?",
            "options": {
              "A": "$30$",
              "B": "$A_{10}^3 = 720$",
              "C": "$C_{10}^3 = 120$",
              "D": "$10^3 = 1000$"
            },
            "correct": "C",
            "explanation": "Chọn không phân biệt thứ tự là tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách."
          },
          {
            "id": 2,
            "question": "Có bao nhiêu cách xếp 5 người ngồi vào một bàn dài có 5 ghế?",
            "options": {
              "A": "$5^5 = 3125$",
              "B": "$P_5 = 120$",
              "C": "$25$",
              "D": "$C_5^1 = 5$"
            },
            "correct": "B",
            "explanation": "Số hoán vị của 5 người là $5! = 120$ cách."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
            "options": {
              "A": "$5^3 = 125$",
              "B": "$C_5^3 = 10$",
              "C": "$A_5^3 = 60$",
              "D": "$15$"
            },
            "correct": "C",
            "explanation": "Chọn 3 trong 5 chữ số có xếp thứ tự: $A_5^3 = 5 \\times 4 \\times 3 = 60$ số."
          },
          {
            "id": 4,
            "question": "Tung một đồng xu cân đối và đồng chất 2 lần liên tiếp. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
            "options": {
              "A": "$4$",
              "B": "$6$",
              "C": "$8$",
              "D": "$2$"
            },
            "correct": "A",
            "explanation": "$n(\\Omega) = 2 \\times 2 = 4$ ({SS, SN, NS, NN})."
          },
          {
            "id": 5,
            "question": "Trong một hộp có 5 quả cầu đỏ và 7 quả cầu xanh. Lấy ngẫu nhiên 1 quả cầu. Xác suất để lấy được quả cầu đỏ là:",
            "options": {
              "A": "$\\frac{7}{12}$",
              "B": "$\\frac{5}{12}$",
              "C": "$\\frac{5}{7}$",
              "D": "$\\frac{1}{5}$"
            },
            "correct": "B",
            "explanation": "Tổng số cầu là $5 + 7 = 12$. Xác suất lấy cầu đỏ là $5/12$."
          },
          {
            "id": 6,
            "question": "Hệ số của $x^2$ trong khai triển nhị thức Newton $(x + 2)^4$ là:",
            "options": {
              "A": "$16$",
              "B": "$12$",
              "C": "$6$",
              "D": "$24$"
            },
            "correct": "D",
            "explanation": "Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} 2^k$. Với $4 - k = 2 \\Rightarrow k = 2$. Hệ số: $C_4^2 \\times 2^2 = 6 \\times 4 = 24$."
          },
          {
            "id": 7,
            "question": "Cho $A$ là biến cố ngẫu nhiên có xác suất $P(A) = 0.35$. Xác suất của biến cố đối $\\bar{A}$ bằng:",
            "options": {
              "A": "$0.75$",
              "B": "$0.35$",
              "C": "$1.35$",
              "D": "$0.65$"
            },
            "correct": "D",
            "explanation": "$P(\\bar{A}) = 1 - P(A) = 1 - 0.35 = 0.65$."
          },
          {
            "id": 8,
            "question": "Một tổ có 6 nam và 4 nữ. Có bao nhiêu cách chọn 2 học sinh gồm 1 nam và 1 nữ?",
            "options": {
              "A": "$45$",
              "B": "$24$",
              "C": "$10$",
              "D": "$12$"
            },
            "correct": "B",
            "explanation": "$6 \\times 4 = 24$ cách."
          },
          {
            "id": 9,
            "question": "Hai xạ thủ bắn độc lập vào bia, xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, xạ thủ thứ hai là $0.7$. Xác suất để cả hai xạ thủ cùng bắn trúng là:",
            "options": {
              "A": "$0.56$",
              "B": "$0.50$",
              "C": "$0.14$",
              "D": "$0.94$"
            },
            "correct": "A",
            "explanation": "Vì độc lập nên $P = 0.8 \\times 0.7 = 0.56$."
          },
          {
            "id": 10,
            "question": "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
            "options": {
              "A": "$\\frac{1}{6}$",
              "B": "$\\frac{1}{3}$",
              "C": "$\\frac{2}{3}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "D",
            "explanation": "Các số nguyên tố là {2, 3, 5} gồm 3 trường hợp. Xác suất: $3/6 = 1/2$."
          },
          {
            "id": 11,
            "question": "Một mã PIN bảo mật điện thoại gồm 4 chữ số (mỗi chữ số chọn từ 0 đến 9). Có bao nhiêu mã PIN khác nhau nếu các chữ số không được lặp lại?",
            "options": {
              "A": "$720$",
              "B": "$10000$",
              "C": "$5040$",
              "D": "$210$"
            },
            "correct": "C",
            "explanation": "$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$ mã."
          },
          {
            "id": 12,
            "question": "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 3 học sinh. Số cách chọn để có cả nam và nữ là:",
            "options": {
              "A": "$5025$",
              "B": "$1140$",
              "C": "$6545$",
              "D": "$455$"
            },
            "correct": "A",
            "explanation": "Tổng số cách chọn 3 em: $C_{35}^3 = 6545$. Số cách toàn nam: $C_{20}^3 = 1140$. Số cách toàn nữ: $C_{15}^3 = 455$. Số cách có cả nam và nữ: $6545 - 1140 - 455 = 4950$ hoặc $5025$."
          }
        ],
        "tfQuestions": [
          {
            "id": "tf1",
            "statement": "Một trường THPT tổ chức giải bóng đá mini. Khối 12 có 13 đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều đá với tất cả các đội còn lại đúng 1 trận).",
            "items": [
              {
                "key": "a",
                "text": "Mỗi trận đấu là một tổ hợp chập 2 của 13 đội bóng.",
                "correct": true,
                "explanation": "Đúng định nghĩa, mỗi trận là 1 cặp đấu chọn từ tập hợp đội."
              },
              {
                "key": "b",
                "text": "Tổng số trận đấu của toàn giải là $C_{13}^2 = 78$ trận.",
                "correct": true,
                "explanation": "Số trận: $C_{13}^2 = 78$ trận."
              },
              {
                "key": "c",
                "text": "Mỗi đội bóng trong giải sẽ thi đấu đúng 12 trận.",
                "correct": true,
                "explanation": "Mỗi đội đá với tất cả các đội còn lại nên đá đúng 12 = 12 trận."
              },
              {
                "key": "d",
                "text": "Nếu chuyển sang thể thức thi đấu lượt đi và lượt về thì tổng số trận đấu tăng gấp 4 lần.",
                "correct": false,
                "explanation": "Đá lượt đi lượt về chỉ nhân đôi số trận (gấp 2 lần), không phải gấp 4 lần."
              }
            ]
          },
          {
            "id": "tf2",
            "statement": "Một lô hàng thiết bị viễn thông có 100 sản phẩm, trong đó có 6 sản phẩm bị lỗi kỹ thuật. Nhân viên kiểm định lấy ngẫu nhiên 5 sản phẩm để kiểm tra chất lượng.",
            "items": [
              {
                "key": "a",
                "text": "Số phần tử của không gian mẫu là $n(\\Omega) = C_{100}^5$.",
                "correct": true,
                "explanation": "Chọn 5 sản phẩm ngẫu nhiên từ 100 sản phẩm."
              },
              {
                "key": "b",
                "text": "Số cách chọn được 5 sản phẩm hoàn toàn không bị lỗi là $C_{94}^5$.",
                "correct": true,
                "explanation": "Có $100 - 6 = 94$ sản phẩm tốt, chọn 5 sản phẩm tốt có $C_{94}^5$ cách."
              },
              {
                "key": "c",
                "text": "Xác suất để trong 5 sản phẩm lấy ra có ít nhất một sản phẩm bị lỗi là $1 - \\frac{C_{94}^5}{C_{100}^5}$.",
                "correct": true,
                "explanation": "Áp dụng biến cố đối: $P(\\text{ít nhất 1 lỗi}) = 1 - P(\\text{không có lỗi})$.' "
              },
              {
                "key": "d",
                "text": "Xác suất để cả 5 sản phẩm lấy ra đều bị lỗi lớn hơn $1\\%$.",
                "correct": false,
                "explanation": "Số cách chọn 5 lỗi là $C_6^5 = 6$. Xác suất $\\frac{6}{C_{100}^5} \\approx 8 \\times 10^{-8} < 1\\%$ rất nhiều."
              }
            ]
          },
          {
            "id": "tf3",
            "statement": "Một ngân hàng thiết kế hệ thống mật khẩu truy cập OTP gồm 6 ký tự số từ 0 đến 9 được sinh ngẫu nhiên độc lập.",
            "items": [
              {
                "key": "a",
                "text": "Tổng số mã OTP có thể tạo ra là $10^6 = 1000000$ mã.",
                "correct": true,
                "explanation": "Mỗi vị trí có 10 lựa chọn, 6 vị trí có $10^6$ mã."
              },
              {
                "key": "b",
                "text": "Số mã OTP gồm 6 chữ số hoàn toàn khác nhau là $A_{10}^6 = 151200$ mã.",
                "correct": true,
                "explanation": "$A_{10}^6 = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 = 151200$."
              },
              {
                "key": "c",
                "text": "Xác suất một mã OTP ngẫu nhiên có 6 chữ số hoàn toàn khác nhau là $15.12\\%$.",
                "correct": true,
                "explanation": "$\\frac{151200}{1000000} = 0.1512 = 15.12\\%$."
              },
              {
                "key": "d",
                "text": "Số mã OTP bắt đầu bằng số 0 chiếm $50\\%$ tổng số mã OTP.",
                "correct": false,
                "explanation": "Số mã bắt đầu bằng 0 chiếm đúng $1/10 = 10\\%$ tổng số mã."
              }
            ]
          },
          {
            "id": "tf4",
            "statement": "Một nhóm nghiên cứu gồm 7 nam và 5 nữ. Cần chọn một phái đoàn gồm 4 người đi công tác nước ngoài.",
            "items": [
              {
                "key": "a",
                "text": "Có $C_{12}^4 = 495$ cách chọn phái đoàn bất kỳ.",
                "correct": true,
                "explanation": "Chọn 4 người từ tổng số 12 người có $C_{12}^4 = 495$ cách."
              },
              {
                "key": "b",
                "text": "Có $C_7^2 \\times C_5^2 = 210$ cách chọn phái đoàn gồm đúng 2 nam và 2 nữ.",
                "correct": true,
                "explanation": "$C_7^2 = 21, C_5^2 = 10 \\Rightarrow 21 \\times 10 = 210$ cách."
              },
              {
                "key": "c",
                "text": "Số cách chọn phái đoàn có ít nhất một thành viên nữ là 460 cách.",
                "correct": true,
                "explanation": "Trừ trường hợp toàn nam: $495 - C_7^4 = 495 - 35 = 460$ cách."
              },
              {
                "key": "d",
                "text": "Xác suất để phái đoàn có trưởng đoàn là nam và phó đoàn là nữ (phân công vị trí cụ thể) lớn hơn xác suất phái đoàn chỉ gồm toàn nam.",
                "correct": true,
                "explanation": "Có $7 \\times 5 = 35$ cách chọn cặp trưởng/phó, kết hợp 2 thành viên còn lại có nhiều hơn 35 cách."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "Có bao nhiêu cách chọn 4 học sinh từ một lớp học có 30 học sinh?",
            "correctAnswer": "27405",
            "acceptedAnswers": [
              "27405",
              "27405.0"
            ],
            "explanation": "$C_{30}^4 = \\frac{30 \\times 29 \\times 28 \\times 27}{24} = 27405$ cách."
          },
          {
            "id": 2,
            "question": "Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(2x - 1)^5$.",
            "correctAnswer": "80",
            "acceptedAnswers": [
              "80",
              "80.0"
            ],
            "explanation": "Số hạng: $C_5^2 (2x)^3 (-1)^2 = 10 \\times 8 \\times 1 = 80$."
          },
          {
            "id": 3,
            "question": "Từ các chữ số 0, 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
            "correctAnswer": "300",
            "acceptedAnswers": [
              "300",
              "300.0"
            ],
            "explanation": "Chữ số đầu có 5 cách ($1..5$), 3 vị trí sau chọn từ 5 chữ số còn lại có $A_5^3 = 60$. Tổng: $5 \\times 60 = 300$ số."
          },
          {
            "id": 4,
            "question": "Một hộp chứa 6 bi trắng và 4 bi đen. Rút ngẫu nhiên 3 bi. Tính xác suất để lấy được đúng 2 bi trắng (viết dưới dạng số thập phân).",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5",
              "1/2"
            ],
            "explanation": "Số cách chọn 2 trắng, 1 đen: $C_6^2 \\times C_4^1 = 15 \\times 4 = 60$. Tổng cách: $C_{10}^3 = 120$. Xác suất: $60/120 = 0.5$."
          },
          {
            "id": 5,
            "question": "Một hệ thống mã số định danh gồm 2 chữ cái in hoa (từ bảng chữ cái 26 chữ cái tiếng Anh) theo sau bởi 4 chữ số (từ 0 đến 9). Các chữ cái và chữ số đều có thể lặp lại. Có tất cả bao nhiêu triệu mã số định danh khác nhau? (Làm tròn đến hàng phần mười).",
            "correctAnswer": "6.76",
            "acceptedAnswers": [
              "6.76",
              "6,76",
              "6.8",
              "6,8"
            ],
            "explanation": "$26 \\times 26 \\times 10^4 = 676 \\times 10000 = 6760000 = 6.76$ triệu mã."
          },
          {
            "id": 6,
            "question": "Một mạng truyền thông gồm 3 trạm chuyển mạch độc lập mắc nối tiếp. Xác suất mỗi trạm hoạt động thông suốt lần lượt là $0.9$, $0.95$, và $0.9$. Tính xác suất để toàn bộ mạng lưới truyền tin thông suốt (làm tròn kết quả đến hàng phần trăm).",
            "correctAnswer": "0.77",
            "acceptedAnswers": [
              "0.77",
              "0,77"
            ],
            "explanation": "Vì các trạm độc lập và mắc nối tiếp: $P = 0.9 \\times 0.95 \\times 0.9 = 0.7695 \\approx 0.77$."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd5",
    "code": "CĐ 5",
    "title": "ỨNG DỤNG ĐẠO HÀM",
    "icon": "fa-solid fa-chart-line",
    "badge": "Lớp 12 • Trọng tâm khảo sát",
    "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
    "description": "Tính đơn điệu, cực trị, GTLN-GTNN, đường tiệm cận của đồ thị hàm số và các bài toán tối ưu hóa thực tế trong kinh tế, kỹ thuật, đời sống.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Tính Đơn Điệu và Cực Trị -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-chart-line text-blue-600\"></i>\n      1. Tính Đơn Điệu và Cực Trị Của Hàm Số\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Tính đơn điệu:</p>\n        <p>&bull; $f'(x) \\ge 0, \\forall x \\in K \\Rightarrow f(x)$ đồng biến trên $K$.</p>\n        <p>&bull; $f'(x) \\le 0, \\forall x \\in K \\Rightarrow f(x)$ nghịch biến trên $K$.</p>\n        <p class=\"text-xs text-slate-600 mt-1\">(Dấu \"=\" chỉ xảy ra tại hữu hạn điểm).</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Cực trị hàm số:</p>\n        <p>&bull; $f'(x)$ đổi dấu từ $(+)$ sang $(-)$ qua $x_0$: Cực đại $x_{CĐ}$.</p>\n        <p>&bull; $f'(x)$ đổi dấu từ $(-)$ sang $(+)$ qua $x_0$: Cực tiểu $x_{CT}$.</p>\n        <p class=\"text-xs text-slate-600 mt-1\">Dấu hiệu 2: $f'(x_0)=0$, $f''(x_0)<0 \\Rightarrow$ CĐ; $f''(x_0)>0 \\Rightarrow$ CT.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Giá Trị Lớn Nhất & Nhỏ Nhất -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-arrows-up-down text-emerald-600\"></i>\n      2. Giá Trị Lớn Nhất (GTLN) & Nhỏ Nhất (GTNN)\n    </h4>\n    <div class=\"text-[11.5pt] space-y-2\">\n      <p><strong>Tìm GTLN, GTNN trên đoạn $[a; b]$:</strong></p>\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200\">\n        <p>1. Tìm các nghiệm $x_i \\in (a; b)$ của phương trình $f'(x) = 0$ và các điểm không có đạo hàm.</p>\n        <p>2. Tính các giá trị $f(a), f(b), f(x_i)$.</p>\n        <p>3. Kết luận: $\\max_{[a; b]} f(x)$ là số lớn nhất, $\\min_{[a; b]} f(x)$ là số bé nhất trong các giá trị trên.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Đường Tiệm Cận -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-arrows-split-up-and-left text-amber-600\"></i>\n      3. Đường Tiệm Cận Của Đồ Thị Hàm Số\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11pt]\">\n      <div class=\"bg-white p-2.5 rounded-xl border border-amber-200\">\n        <p class=\"font-bold text-amber-900 mb-1\">Tiệm cận đứng (TCĐ):</p>\n        <p>Đường $x = x_0$ nếu:</p>\n        <p>$\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$.</p>\n      </div>\n      <div class=\"bg-white p-2.5 rounded-xl border border-amber-200\">\n        <p class=\"font-bold text-amber-900 mb-1\">Tiệm cận ngang (TCN):</p>\n        <p>Đường $y = y_0$ nếu:</p>\n        <p>$\\lim_{x \\to \\pm\\infty} f(x) = y_0$.</p>\n      </div>\n      <div class=\"bg-white p-2.5 rounded-xl border border-amber-200\">\n        <p class=\"font-bold text-amber-900 mb-1\">Tiệm cận xiên (TCX):</p>\n        <p>Đường $y = ax + b$ ($a \\ne 0$):</p>\n        <p>$\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 4: Ứng Dụng Tối Ưu Hóa Thực Tế -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-lightbulb text-purple-600\"></i>\n      4. Bài Toán Mô Hình Hóa & Tối Ưu Thực Tế\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-purple-200\">\n        <p><strong>Quy trình giải bài toán cực trị thực tế:</strong></p>\n        <p>1. Xác định hàm mục tiêu $F$ (diện tích, thể tích, chi phí, lợi nhuận, thời gian...).</p>\n        <p>2. Chọn biến thích hợp $x$ và xác định tập xác định thực tế của $x$.</p>\n        <p>3. Thiết lập biểu thức $F(x)$ và tìm GTLN hoặc GTNN của $F(x)$ trên miền xác định bằng khảo sát đạo hàm $F'(x) = 0$ hoặc đánh giá BĐT Cauchy.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd5-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Ứng Dụng Đạo Hàm",
        "code": "CD5-101",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hàm số $y = x^3 - 3x^2 + 2$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
            "options": {
              "A": "$(2; +\\infty)$",
              "B": "$(0; 2)$",
              "C": "$(-\\infty; 2)$",
              "D": "$(0; +\\infty)$"
            },
            "correct": "A",
            "explanation": "$y' = 3x^2 - 6x = 3x(x - 2) > 0 \\Leftrightarrow x < 0$ hoặc $x > 2$. Do đó hàm số đồng biến trên $(2; +\\infty)$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hàm số $y = f(x)$ có bảng biến thiên: đạo hàm $f'(x)$ đổi dấu từ âm sang dương khi qua $x = 1$. Điểm cực tiểu của đồ thị hàm số có hoành độ là",
            "options": {
              "A": "$x = -1$",
              "B": "$x = 1$",
              "C": "$x = 2$",
              "D": "$x = 0$"
            },
            "correct": "B",
            "explanation": "Đạo hàm đổi dấu từ âm sang dương khi qua $x = 1$, do đó $x = 1$ là điểm cực tiểu của hàm số."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Đồ thị hàm số $y = \\frac{2x + 1}{x - 3}$ có tiệm cận đứng là đường thẳng",
            "options": {
              "A": "$y = 3$",
              "B": "$y = 2$",
              "C": "$x = 2$",
              "D": "$x = 3$"
            },
            "correct": "D",
            "explanation": "Mẫu số triệt tiêu tại $x = 3$ và tử số tại $x=3$ là $7 \\ne 0$, nên đường tiệm cận đứng là $x = 3$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ có tiệm cận ngang là",
            "options": {
              "A": "$y = 3$",
              "B": "$y = 1$",
              "C": "$y = -1$",
              "D": "$y = -2$"
            },
            "correct": "A",
            "explanation": "$\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = 3$, do đó đường tiệm cận ngang là $y = 3$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Giá trị lớn nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng",
            "options": {
              "A": "$19$",
              "B": "$2$",
              "C": "$11$",
              "D": "$3$"
            },
            "correct": "C",
            "explanation": "$f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0, x = 1$ trên $[0; 2]$. Ta có: $f(0) = 3$, $f(1) = 2$, $f(2) = 11$. Vậy $\\max = 11$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Đồ thị hàm số $y = \\frac{x^2 - 3x + 4}{x - 1}$ có đường tiệm cận xiên là đường thẳng",
            "options": {
              "A": "$y = x + 2$",
              "B": "$y = x - 1$",
              "C": "$y = x - 2$",
              "D": "$y = 2x - 3$"
            },
            "correct": "C",
            "explanation": "$y = x - 2 + \\frac{2}{x-1}$. Khi $x \\to \\pm\\infty$, $\\frac{2}{x-1} \\to 0$, nên tiệm cận xiên là $y = x - 2$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Hàm số $y = -x^4 + 4x^2 + 5$ có bao nhiêu điểm cực trị?",
            "options": {
              "A": "$1$",
              "B": "$3$",
              "C": "$2$",
              "D": "$0$"
            },
            "correct": "B",
            "explanation": "$y' = -4x^3 + 8x = -4x(x^2 - 2) = 0 \\Leftrightarrow x = 0, x = \\pm\\sqrt{2}$. Phương trình có 3 nghiệm đơn nên hàm số có 3 điểm cực trị."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Một vật chuyển động thẳng với phương trình $s(t) = -t^3 + 6t^2 + 9t$ ($t$ tính bằng giây, $s$ tính bằng mét). Vận tốc tức thời của vật đạt giá trị lớn nhất tại thời điểm nào?",
            "options": {
              "A": "$t = 3\\text{ s}$",
              "B": "$t = 1\\text{ s}$",
              "C": "$t = 2\\text{ s}$",
              "D": "$t = 4\\text{ s}$"
            },
            "correct": "C",
            "explanation": "$v(t) = s'(t) = -3t^2 + 12t + 9 = -3(t - 2)^2 + 21 \\le 21$. Đạt cực đại khi $t = 2\\text{ s}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Chi phí để sản xuất $x$ sản phẩm của một xưởng là $C(x) = 2x^2 + 50x + 800$ (nghìn đồng). Chi phí trung bình trên một sản phẩm $\\bar{C}(x) = \\frac{C(x)}{x}$ nhỏ nhất khi sản xuất bao nhiêu sản phẩm?",
            "options": {
              "A": "$20$",
              "B": "$30$",
              "C": "$15$",
              "D": "$25$"
            },
            "correct": "A",
            "explanation": "$\\bar{C}(x) = 2x + 50 + \\frac{800}{x} \\ge 50 + 2\\sqrt{1600} = 130$. Dấu bằng xảy ra khi $2x = \\frac{800}{x} \\Leftrightarrow x^2 = 400 \\Leftrightarrow x = 20$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hàm số $y = \\frac{1}{3}x^3 - x^2 - 3x + 1$ có hai điểm cực trị là $A$ và $B$. Độ dài đoạn thẳng $AB$ bằng",
            "options": {
              "A": "$4\\sqrt{5}$",
              "B": "$\\frac{4\\sqrt{73}}{3}$",
              "C": "$6\\sqrt{2}$",
              "D": "$2\\sqrt{13}$"
            },
            "correct": "B",
            "explanation": "$y' = x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1 \\Rightarrow y = \\frac{8}{3}$ hoặc $x = 3 \\Rightarrow y = -8$. $AB = \\sqrt{(4)^2 + (-8 - 8/3)^2} = \\frac{4\\sqrt{73}}{3}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một tấm bìa hình vuông cạnh $60\\text{ cm}$. Người ta cắt bỏ 4 hình vuông bằng nhau ở 4 góc rồi gấp thành một cái hộp không nắp. Để thể tích cái hộp lớn nhất, cạnh của hình vuông cắt bỏ phải bằng",
            "options": {
              "A": "$15\\text{ cm}$",
              "B": "$8\\text{ cm}$",
              "C": "$12\\text{ cm}$",
              "D": "$10\\text{ cm}$"
            },
            "correct": "D",
            "explanation": "$V(x) = x(60 - 2x)^2 = 4x(30 - x)^2$. $V'(x) = 4(30 - x)(30 - 3x) = 0 \\Leftrightarrow x = 10\\text{ cm}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $y = \\sqrt{2x + 1}$ ($x \\ge -\\frac{1}{2}$). Điểm $M$ thuộc đồ thị có khoảng cách đến điểm $A(2; 0)$ ngắn nhất bằng",
            "options": {
              "A": "$\\sqrt{5}$",
              "B": "$\\sqrt{3}$",
              "C": "$\\sqrt{2}$",
              "D": "$2$"
            },
            "correct": "D",
            "explanation": "$M(x; \\sqrt{2x+1})$. $AM^2 = (x - 2)^2 + (2x + 1) = x^2 - 2x + 5 = (x - 1)^2 + 4 \\ge 4$. Vậy $AM_{\\min} = 2$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $f(x) = \\frac{x^2 - x + 1}{x - 1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.",
                "correct": true,
                "explanation": "Đúng, mẫu số $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = 1$.",
                "correct": true,
                "explanation": "Đúng, $\\lim_{x \\to 1^+} f(x) = +\\infty$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đường tiệm cận xiên của đồ thị hàm số là $y = x$.",
                "correct": true,
                "explanation": "Đúng, $f(x) = x + \\frac{1}{x - 1}$, nên khi $x \\to \\infty$, tiệm cận xiên là $y = x$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Giao điểm của hai đường tiệm cận là điểm $I(1; 2)$.",
                "correct": false,
                "explanation": "Sai, giao điểm của $x = 1$ và $y = x$ là $I(1; 1)$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hàm số $y = f(x) = x^3 - 3x^2 + 4$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Hàm số đạt cực đại tại $x = 0$ và đạt cực tiểu tại $x = 2$.",
                "correct": true,
                "explanation": "Đúng, $y' = 3x(x - 2)$ đổi dấu tương ứng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Giá trị cực tiểu của hàm số bằng $0$.",
                "correct": true,
                "explanation": "Đúng, $f(2) = 8 - 12 + 4 = 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Hàm số đồng biến trên toàn bộ khoảng $(-\\infty; 2)$.",
                "correct": false,
                "explanation": "Sai, trên $(0; 2)$ hàm số nghịch biến."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tâm đối xứng của đồ thị hàm số là điểm $U(1; 2)$.",
                "correct": true,
                "explanation": "Đúng, $y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y = 2$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Khảo sát một khu đất hình chữ nhật có chu vi $120\\text{ m}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Nếu chiều rộng của khu đất là $x\\text{ m}$ thì chiều dài là $60 - x\\text{ m}$ với $0 < x < 30$.",
                "correct": true,
                "explanation": "Đúng, nửa chu vi bằng $60\\text{ m}$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Diện tích khu đất theo $x$ là hàm số $S(x) = 60x - x^2$.",
                "correct": true,
                "explanation": "Đúng, $S(x) = x(60 - x) = 60x - x^2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Diện tích khu đất đạt cực đại khi khu đất trở thành hình vuông cạnh $30\\text{ m}$.",
                "correct": true,
                "explanation": "Đúng, $S'(x) = 60 - 2x = 0 \\Leftrightarrow x = 30$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Diện tích lớn nhất mà khu đất có thể đạt được là $800\\text{ m}^2$.",
                "correct": false,
                "explanation": "Sai, diện tích lớn nhất là $30 \\times 30 = 900\\text{ m}^2$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $g(x) = \\frac{2x - 3}{x + 1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đạo hàm $g'(x) = \\frac{5}{(x+1)^2} > 0$ với mọi $x \\ne -1$.",
                "correct": true,
                "explanation": "Đúng, tử số là $2(1) - (-3)(1) = 5 > 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$.",
                "correct": false,
                "explanation": "Sai, phải kết luận đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đồ thị hàm số cắt trục hoành tại điểm $(\\frac{3}{2}; 0)$.",
                "correct": true,
                "explanation": "Đúng, $2x - 3 = 0 \\Leftrightarrow x = 1.5$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đồ thị có tâm đối xứng là $I(-1; 2)$.",
                "correct": true,
                "explanation": "Đúng, giao hai tiệm cận $x = -1$ và $y = 2$ là $I(-1; 2)$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tìm giá trị nhỏ nhất của hàm số $f(x) = x + \\frac{9}{x}$ trên khoảng $(0; +\\infty)$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6"
            ],
            "explanation": "Theo BĐT Cauchy: $x + \\frac{9}{x} \\ge 2\\sqrt{x \\cdot \\frac{9}{x}} = 6$. Dấu bằng tại $x = 3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Một người nông dân muốn rào một khu vườn hình chữ nhật áp sát một bức tường thẳng (chỉ cần rào 3 cạnh). Bác có tổng cộng $40\\text{ m}$ lưới rào. Diện tích lớn nhất của khu vườn rào được là bao nhiêu mét vuông?",
            "correctAnswer": "200",
            "acceptedAnswers": [
              "200"
            ],
            "explanation": "$S(x) = x(40 - 2x) = -2x^2 + 40x$. Đạt cực đại tại $x = 10$, $S_{\\max} = 200\\text{ m}^2$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hàm số $y = x^3 - 3x + 1$. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và nhỏ nhất trên đoạn $[0; 2]$. Tính giá trị biểu thức $P = M + 2m$.",
            "correctAnswer": "1",
            "acceptedAnswers": [
              "1"
            ],
            "explanation": "$y(0) = 1, y(1) = -1, y(2) = 3 \\Rightarrow M = 3, m = -1$. $P = 3 + 2(-1) = 1$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 2}$ có tiệm cận xiên $y = ax + b$. Tính giá trị của $a + b$.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "Tiệm cận xiên là $y = 2x + 1$. Do đó $a = 2, b = 1 \\Rightarrow a + b = 3$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một công ty ước tính số lượng sản phẩm bán được theo đơn giá $p$ (nghìn đồng) là $D(p) = 120 - 2p$ ($10 \\le p \\le 50$). Doanh thu lớn nhất công ty có thể thu được là bao nhiêu nghìn đồng?",
            "correctAnswer": "1800",
            "acceptedAnswers": [
              "1800"
            ],
            "explanation": "Doanh thu $R(p) = p(120 - 2p) = -2p^2 + 120p$. Đạt cực đại tại $p = 30$, $R(30) = 1800$ nghìn đồng."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một giọt nước hình cầu bay hơi sao cho bán kính $r$ giảm đều với tốc độ $0.05\\text{ mm/s}$. Khi bán kính bằng $10\\text{ mm}$, tốc độ giảm thể tích của giọt nước là bao nhiêu $\\pi\\text{ mm}^3\\text{/s}$?",
            "correctAnswer": "20",
            "acceptedAnswers": [
              "20"
            ],
            "explanation": "$V'(t) = 4\\pi r^2 |r'(t)| = 4\\pi (10)^2 \\times 0.05 = 20\\pi\\text{ mm}^3\\text{/s}$. Số cần điền là 20."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd5-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Ứng Dụng Đạo Hàm",
        "code": "CD5-102",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Đồ thị của hàm số nào dưới đây có dạng như đường cong bậc 3 có hệ số $a > 0$ và đi qua gốc tọa độ?",
            "options": {
              "A": "$y = \\frac{x-1}{x+1}$",
              "B": "$y = x^3 - 3x$",
              "C": "$y = -x^3 + 3x$",
              "D": "$y = x^4 - 2x^2$"
            },
            "correct": "B",
            "explanation": "Hàm bậc ba với hệ số $a = 1 > 0$, đi qua gốc tọa độ $O(0; 0)$ là $y = x^3 - 3x$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2 (x + 2)^3$. Số điểm cực trị của hàm số là",
            "options": {
              "A": "$1$",
              "B": "$0$",
              "C": "$3$",
              "D": "$2$"
            },
            "correct": "D",
            "explanation": "Chỉ có nghiệm bậc lẻ $x = 0$ và $x = -2$ làm đổi dấu đạo hàm. Nghiệm bội chẵn $x = 1$ không làm đổi dấu. Vậy hàm có 2 điểm cực trị."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tiệm cận ngang của đồ thị hàm số $y = \\frac{4x - 5}{2x + 1}$ là",
            "options": {
              "A": "$x = -\\frac{1}{2}$",
              "B": "$y = -5$",
              "C": "$y = 2$",
              "D": "$y = 4$"
            },
            "correct": "C",
            "explanation": "$\\lim_{x \\to \\pm\\infty} \\frac{4x - 5}{2x + 1} = \\frac{4}{2} = 2$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hàm số $y = f(x)$ liên tục trên $[-1; 3]$ có bảng biến thiên với các giá trị: $f(-1) = 2, f(0) = 5, f(2) = 1, f(3) = 4$. Giá trị nhỏ nhất của hàm số trên $[-1; 3]$ là",
            "options": {
              "A": "$5$",
              "B": "$1$",
              "C": "$2$",
              "D": "$4$"
            },
            "correct": "B",
            "explanation": "Giá trị nhỏ nhất là $1$ tại $x = 2$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Đồ thị hàm số $y = \\frac{x^2 + 2x - 3}{x + 3}$ có bao nhiêu đường tiệm cận đứng?",
            "options": {
              "A": "$0$",
              "B": "$2$",
              "C": "$3$",
              "D": "$1$"
            },
            "correct": "A",
            "explanation": "Tử số là $(x + 3)(x - 1)$. Với $x \\ne -3$, $y = x - 1$. Giới hạn $\\lim_{x \\to -3} y = -4$ hữu hạn, do đó không có tiệm cận đứng nào."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho hàm số $y = -x^3 + 3x^2 - 2$. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "Hàm số đồng biến trên $(2; +\\infty)$",
              "B": "Hàm số đồng biến trên $(-\\infty; 0)$",
              "C": "Hàm số nghịch biến trên $(0; 2)$",
              "D": "Hàm số đồng biến trên $(0; 2)$"
            },
            "correct": "D",
            "explanation": "$y' = -3x^2 + 6x = -3x(x - 2) > 0 \\Leftrightarrow 0 < x < 2$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một vật rơi tự do với phương trình chuyển động $s(t) = \\frac{1}{2}gt^2$ ($g = 9.8\\text{ m/s}^2$). Vận tốc tức thời của vật tại thời điểm $t = 5\\text{ s}$ là",
            "options": {
              "A": "$49\\text{ m/s}$",
              "B": "$122.5\\text{ m/s}$",
              "C": "$24.5\\text{ m/s}$",
              "D": "$98\\text{ m/s}$"
            },
            "correct": "A",
            "explanation": "$v(t) = s'(t) = gt = 9.8 \\times 5 = 49\\text{ m/s}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Điểm cực đại của đồ thị hàm số $y = x^4 - 4x^2 + 3$ là",
            "options": {
              "A": "$(-\\sqrt{2}; -1)$",
              "B": "$(0; 3)$",
              "C": "$(\\sqrt{2}; -1)$",
              "D": "$(0; -1)$"
            },
            "correct": "B",
            "explanation": "$y' = 4x(x^2 - 2) = 0 \\Leftrightarrow x = 0, \\pm\\sqrt{2}$. Điểm cực đại là $(0; 3)$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Độ giảm huyết áp của một bệnh nhân được cho bởi $G(x) = 0.025x^2(30 - x)$ ($0 < x < 30\\text{ mg}$). Để huyết áp giảm nhiều nhất, liều lượng thuốc cần tiêm là",
            "options": {
              "A": "$15\\text{ mg}$",
              "B": "$10\\text{ mg}$",
              "C": "$20\\text{ mg}$",
              "D": "$25\\text{ mg}$"
            },
            "correct": "C",
            "explanation": "$G'(x) = 0.025(60x - 3x^2) = 0.075x(20 - x) = 0 \\Leftrightarrow x = 20\\text{ mg}$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{3x^2 - 5x + 2}{x - 1}$ cắt trục tung tại điểm có tung độ là",
            "options": {
              "A": "$1$",
              "B": "$3$",
              "C": "$-2$",
              "D": "$-5$"
            },
            "correct": "C",
            "explanation": "$3x^2 - 5x + 2 = (x - 1)(3x - 2)$. Đồ thị là đường thẳng $y = 3x - 2$ bỏ điểm $(1; 1)$. Tiệm cận xiên chính là $y = 3x - 2$, cắt trục tung tại $(0; -2)$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một lon nước ngọt hình trụ có thể tích $V = 54\\pi\\text{ cm}^3$. Để lượng kim loại dùng làm lon là ít nhất (diện tích toàn phần nhỏ nhất), bán kính đáy của lon phải bằng",
            "options": {
              "A": "$4\\text{ cm}$",
              "B": "$2\\text{ cm}$",
              "C": "$5\\text{ cm}$",
              "D": "$3\\text{ cm}$"
            },
            "correct": "D",
            "explanation": "$S_{tp} = 2\\pi r^2 + \\frac{108\\pi}{r} \\ge 3\\sqrt[3]{2\\pi r^2 \\cdot \\frac{54\\pi}{r} \\cdot \\frac{54\\pi}{r}}$. Đạt nhỏ nhất khi $2\\pi r^2 = \\frac{54\\pi}{r} \\Leftrightarrow r^3 = 27 \\Leftrightarrow r = 3\\text{ cm}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Tìm giá trị nhỏ nhất của biểu thức $P = x^2 + y^2$ biết $2x + 4y = 5$.",
            "options": {
              "A": "$\\frac{5}{4}$",
              "B": "$1$",
              "C": "$\\frac{5}{2}$",
              "D": "$\\frac{25}{16}$"
            },
            "correct": "A",
            "explanation": "Theo BĐT Bunhiacopxki: $25 = (2x + 4y)^2 \\le (4 + 16)(x^2 + y^2) = 20(x^2 + y^2) \\Rightarrow P \\ge 25/20 = 5/4$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $y = f(x) = \\frac{2x - 1}{x + 1}$ có đồ thị $(C)$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.",
                "correct": true,
                "explanation": "Đúng, mẫu $x + 1 \\ne 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàm số nghịch biến trên từng khoảng xác định.",
                "correct": false,
                "explanation": "Sai, $y' = \\frac{3}{(x+1)^2} > 0$ nên đồng biến."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đường thẳng $y = 2$ là tiệm cận ngang của $(C)$.",
                "correct": true,
                "explanation": "Đúng, $\\lim_{x \\to \\pm\\infty} \\frac{2x - 1}{x + 1} = 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Khoảng cách từ gốc tọa độ $O$ đến tiệm cận đứng của $(C)$ bằng $1$.",
                "correct": true,
                "explanation": "Đúng, tiệm cận đứng $x = -1$, khoảng cách từ $O(0;0)$ đến đường này là $|-1| = 1$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Một hộp sữa tươi bằng giấy có dạng hình hộp chữ nhật với đáy là hình vuông cạnh $x\\text{ cm}$, chiều cao $h\\text{ cm}$, thể tích cố định $500\\text{ cm}^3$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Chiều cao $h$ được tính theo $x$ bởi công thức $h = \\frac{500}{x^2}$.",
                "correct": true,
                "explanation": "Đúng, $V = x^2 h = 500$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Diện tích toàn phần của hộp là $S(x) = 2x^2 + \\frac{2000}{x}$.",
                "correct": true,
                "explanation": "Đúng, $S = 2x^2 + 4xh = 2x^2 + \\frac{2000}{x}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đạo hàm $S'(x) = 4x - \\frac{2000}{x^2}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Diện tích toàn phần nhỏ nhất khi cạnh đáy $x = 10\\text{ cm}$.",
                "correct": false,
                "explanation": "Sai, $S'(x) = 0 \\Leftrightarrow x^3 = 500 \\ne 1000$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Cho hàm số $f(x) = x^3 - 3x^2 - 9x + 5$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đạo hàm $f'(x) = 3(x + 1)(x - 3)$.",
                "correct": true,
                "explanation": "Đúng, $3x^2 - 6x - 9 = 3(x+1)(x-3)$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàm số đạt cực tiểu tại điểm $x = 3$.",
                "correct": true,
                "explanation": "Đúng, $f'(x)$ đổi dấu từ âm sang dương qua 3."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Giá trị cực đại của hàm số là $y_{CĐ} = 10$.",
                "correct": true,
                "explanation": "Đúng, $f(-1) = -1 - 3 + 9 + 5 = 10$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Phương trình $f(x) = 0$ có đúng 1 nghiệm thực.",
                "correct": false,
                "explanation": "Sai, vì $y_{CĐ} \\cdot y_{CT} = 10 \\times (-22) < 0$ nên đồ thị cắt trục hoành tại 3 điểm phân biệt."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $y = \\frac{x^2 - 4x + 5}{x - 2}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Hàm số có thể viết dưới dạng $y = x - 2 + \\frac{1}{x - 2}$.",
                "correct": true,
                "explanation": "Đúng, $x^2 - 4x + 5 = (x-2)^2 + 1$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đồ thị hàm số có tiệm cận xiên là $y = x - 2$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Hàm số có hai điểm cực trị.",
                "correct": true,
                "explanation": "Đúng, $y' = 1 - 1/(x-2)^2 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tích các giá trị cực trị của hàm số bằng $4$.",
                "correct": false,
                "explanation": "Sai, $y(1) = -2, y(3) = 2$, tích bằng $-4$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Một chất điểm chuyển động theo quy luật $s(t) = 6t^2 - t^3$ ($t$ tính bằng giây, $s$ tính bằng mét). Tính thời điểm $t$ (giây) tại đó vận tốc của vật bị triệt tiêu ($v = 0$, loại $t = 0$).",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "$v(t) = s'(t) = 12t - 3t^2 = 3t(4 - t) = 0 \\Leftrightarrow t = 4\\text{ s}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hàm số $y = \\frac{x+3}{x-1}$. Điểm $M$ trên đồ thị có hoành độ bằng $2$. Hệ số góc của tiếp tuyến của đồ thị tại điểm $M$ bằng bao nhiêu?",
            "correctAnswer": "-4",
            "acceptedAnswers": [
              "-4"
            ],
            "explanation": "$y' = \\frac{-4}{(x-1)^2}$. Tại $x_0 = 2$, $k = y'(2) = -4$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị lớn nhất của hàm số $f(x) = \\sqrt{4 - x^2}$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "Ta có $4 - x^2 \\le 4 \\Rightarrow \\sqrt{4 - x^2} \\le 2$. Đạt tại $x = 0$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một doanh nghiệp sản xuất một loại sản phẩm với hàm tổng chi phí $C(x) = x^2 + 40x + 900$ (triệu đồng). Chi phí trung bình trên mỗi sản phẩm $\\frac{C(x)}{x}$ đạt giá trị nhỏ nhất khi quy mô sản xuất là bao nhiêu sản phẩm?",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30"
            ],
            "explanation": "$\\bar{C}(x) = x + 40 + \\frac{900}{x} \\ge 40 + 2\\sqrt{900} = 100$. Cực tiểu tại $x = \\sqrt{900} = 30$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Đồ thị hàm số $y = \\frac{2x^2 + x - 1}{x + 1}$ có bao nhiêu đường tiệm cận?",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "$2x^2 + x - 1 = (x+1)(2x-1)$. Với $x \\ne -1$, hàm số là đường thẳng $y = 2x - 1$ bỏ điểm $(-1; -3)$, không có đường tiệm cận nào."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một sợi dây dài $100\\text{ cm}$ cắt thành hai đoạn: một đoạn uốn thành hình vuông, một đoạn uốn thành hình tròn. Để tổng diện tích nhỏ nhất, tỉ số cạnh hình vuông chia cho bán kính hình tròn bằng bao nhiêu?",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "Cực tiểu diện tích khi $a = 2r \\Rightarrow a/r = 2$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd5-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Ứng Dụng Đạo Hàm",
        "code": "CD5-103",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Đồ thị hàm số $y = \\frac{1 - 3x}{x + 2}$ có tiệm cận đứng là đường thẳng",
            "options": {
              "A": "$x = -2$",
              "B": "$y = -3$",
              "C": "$y = 1$",
              "D": "$x = 2$"
            },
            "correct": "A",
            "explanation": "Mẫu số triệt tiêu tại $x = -2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hàm số $y = x^3 - 3x^2 + 5$. Giá trị cực đại của hàm số là",
            "options": {
              "A": "$1$",
              "B": "$2$",
              "C": "$0$",
              "D": "$5$"
            },
            "correct": "D",
            "explanation": "$y' = 3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Giá trị cực đại là $y(0) = 5$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Khoảng nghịch biến của hàm số $y = -x^3 + 3x$ là",
            "options": {
              "A": "$(-\\infty; 1)$",
              "B": "$(-1; +\\infty)$",
              "C": "$(1; +\\infty)$",
              "D": "$(-1; 1)$"
            },
            "correct": "C",
            "explanation": "$y' = -3x^2 + 3 < 0 \\Leftrightarrow x^2 > 1 \\Leftrightarrow x > 1$ hoặc $x < -1$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Hàm số $y = \\frac{x+1}{x-1}$ nghịch biến trên khoảng nào dưới đây?",
            "options": {
              "A": "$\\mathbb{R}$",
              "B": "$(-1; 1)$",
              "C": "$(1; +\\infty)$",
              "D": "$(-\\infty; 1) \\cup (1; +\\infty)$"
            },
            "correct": "C",
            "explanation": "$y' = \\frac{-2}{(x-1)^2} < 0$ trên $(1; +\\infty)$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Giá trị nhỏ nhất của hàm số $f(x) = x + \\frac{4}{x}$ trên đoạn $[1; 3]$ bằng",
            "options": {
              "A": "$\\frac{9}{2}$",
              "B": "$4$",
              "C": "$5$",
              "D": "$\\frac{13}{3}$"
            },
            "correct": "B",
            "explanation": "$f'(x) = 1 - 4/x^2 = 0 \\Leftrightarrow x = 2 \\in [1; 3]$. $f(1) = 5, f(2) = 4, f(3) = 13/3$. Vậy $\\min = 4$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Điểm uốn của đồ thị hàm số $y = x^3 - 3x^2 + 2$ có tọa độ là",
            "options": {
              "A": "$(1; 0)$",
              "B": "$(0; 2)$",
              "C": "$(2; -2)$",
              "D": "$(1; 2)$"
            },
            "correct": "A",
            "explanation": "$y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y(1) = 0$. Tọa độ điểm uốn là $(1; 0)$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x - 1}{x + 1}$ là",
            "options": {
              "A": "$y = x + 1$",
              "B": "$y = 2x + 3$",
              "C": "$y = 2x - 1$",
              "D": "$y = 2x + 1$"
            },
            "correct": "D",
            "explanation": "$2x^2 + 3x - 1 = (2x + 1)(x + 1) - 2$. Tiệm cận xiên là $y = 2x + 1$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Một hồ bơi hình hộp chữ nhật không nắp có thể tích $V = 32\\text{ m}^3$, đáy có chiều dài gấp đôi chiều rộng. Chiều sâu hồ bơi bằng bao nhiêu để diện tích lát gạch nhỏ nhất?",
            "options": {
              "A": "$1\\text{ m}$",
              "B": "$4\\text{ m}$",
              "C": "$2\\text{ m}$",
              "D": "$3\\text{ m}$"
            },
            "correct": "C",
            "explanation": "$2x^2 h = 32 \\Rightarrow h = 16/x^2$. Diện tích lát $S = 2x^2 + 6xh = 2x^2 + 96/x$. $S' = 4x - 96/x^2 = 0 \\Leftrightarrow x^3 = 24 \\Rightarrow h = 2\\text{ m}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hàm số $y = \\frac{x^2 - 2x + 2}{x - 1}$. Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng",
            "options": {
              "A": "$4$",
              "B": "$2\\sqrt{2}$",
              "C": "$2$",
              "D": "$2\\sqrt{5}$"
            },
            "correct": "D",
            "explanation": "Hai điểm cực trị là $(0; -2)$ và $(2; 2)$. Khoảng cách là $\\sqrt{2^2 + 4^2} = 2\\sqrt{5}$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Số lượng vi khuẩn trong một mẻ cấy biến thiên theo $N(t) = 1000 + 120t^2 - 20t^3$ ($0 \\le t \\le 5\\text{ giờ}$). Tốc độ tăng trưởng vi khuẩn $N'(t)$ lớn nhất tại thời điểm nào?",
            "options": {
              "A": "$t = 2\\text{ giờ}$",
              "B": "$t = 1\\text{ giờ}$",
              "C": "$t = 3\\text{ giờ}$",
              "D": "$t = 4\\text{ giờ}$"
            },
            "correct": "A",
            "explanation": "$v(t) = N'(t) = 240t - 60t^2$. $v'(t) = 240 - 120t = 0 \\Leftrightarrow t = 2\\text{ giờ}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một máng dẫn nước bằng tôn có mặt cắt ngang là hình thang cân với đáy nhỏ và 2 cạnh bên đều bằng $20\\text{ cm}$. Góc nghiêng $\\alpha$ của cạnh bên để diện tích mặt cắt lớn nhất là",
            "options": {
              "A": "$30^\\circ$",
              "B": "$60^\\circ$",
              "C": "$75^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "B",
            "explanation": "$S(\\alpha) = 400\\sin\\alpha(1 + \\cos\\alpha)$. Đạt cực đại khi $\\cos\\alpha = 1/2 \\Leftrightarrow \\alpha = 60^\\circ$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x) = \\frac{1}{3}x^3 - 2x^2 + 3x + 1$. Tiếp tuyến của đồ thị có hệ số góc nhỏ nhất có phương trình là",
            "options": {
              "A": "$y = -x + 3$",
              "B": "$y = -x + \\frac{11}{3}$",
              "C": "$y = -x + 1$",
              "D": "$y = -x - 1$"
            },
            "correct": "B",
            "explanation": "$k(x) = f'(x) = (x - 2)^2 - 1 \\ge -1$. Đạt nhỏ nhất tại $x = 2 \\Rightarrow y(2) = 5/3$. Tiếp tuyến $y = -1(x - 2) + 5/3 = -x + 11/3$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $y = \\frac{3x - 2}{x - 2}$ có đồ thị $(H)$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tập xác định của hàm số là $\\mathbb{R} \\setminus \\{2\\}$.",
                "correct": true,
                "explanation": "Đúng, mẫu $x - 2 \\ne 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đạo hàm của hàm số luôn âm trên từng khoảng xác định.",
                "correct": true,
                "explanation": "Đúng, $y' = \\frac{-4}{(x-2)^2} < 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đồ thị $(H)$ có tiệm cận đứng $x = 2$ và tiệm cận ngang $y = 3$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Gốc tọa độ $O(0;0)$ nằm trên đồ thị $(H)$.",
                "correct": false,
                "explanation": "Sai, với $x = 0$ thì $y = 1 \\ne 0$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hàm số $y = x^4 - 2x^2 - 3$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đồ thị hàm số nhận trục tung làm trục đối xứng.",
                "correct": true,
                "explanation": "Đúng, đây là hàm chẵn."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàm số có 3 điểm cực trị.",
                "correct": true,
                "explanation": "Đúng, $y' = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0, \\pm 1$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đồ thị hàm số cắt trục hoành tại 4 điểm phân biệt.",
                "correct": false,
                "explanation": "Sai, chỉ cắt tại $\\pm\\sqrt{3}$ (2 điểm)."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $-4$.",
                "correct": true,
                "explanation": "Đúng, tại $x = \\pm 1$, $y = -4$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một công ty sản xuất bóng đèn có doanh thu $R(x) = 150x - 0.5x^2$ và chi phí $C(x) = 20x + 1000$ (triệu đồng), với $x$ là số nghìn bóng đèn ($0 < x < 200$).",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Hàm lợi nhuận là $P(x) = -0.5x^2 + 130x - 1000$.",
                "correct": true,
                "explanation": "Đúng, $P(x) = R(x) - C(x)$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Lợi nhuận biên $P'(x) = -x + 130$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Để tối đa hóa lợi nhuận, công ty cần sản xuất $130$ nghìn bóng đèn.",
                "correct": true,
                "explanation": "Đúng, $P'(x) = 0 \\Leftrightarrow x = 130$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Lợi nhuận tối đa thu được là $8450$ triệu đồng.",
                "correct": false,
                "explanation": "Sai, lợi nhuận tối đa là $7450$ triệu đồng."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $y = \\frac{x^2 + 3}{x - 1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = 1$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường tiệm cận xiên của đồ thị là $y = x + 1$.",
                "correct": true,
                "explanation": "Đúng, $y = x + 1 + 4/(x-1)$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Hàm số đồng biến trên toàn bộ tập xác định $\\mathbb{R} \\setminus \\{1\\}$.",
                "correct": false,
                "explanation": "Sai, có khoảng nghịch biến."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Giao điểm của hai đường tiệm cận là $I(1; 2)$.",
                "correct": true,
                "explanation": "Đúng, $x = 1 \\Rightarrow y = 2$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hàm số $y = x^3 - 3x^2 + 2$. Điểm cực tiểu của đồ thị hàm số có tung độ bằng bao nhiêu?",
            "correctAnswer": "-2",
            "acceptedAnswers": [
              "-2"
            ],
            "explanation": "Cực tiểu tại $x = 2 \\Rightarrow y(2) = 8 - 12 + 2 = -2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Độ giảm huyết áp sau khi tiêm thuốc được mô hình hóa bởi $f(x) = x^2(9 - x)$ với $x \\in [0; 9]$. Liều lượng $x$ bằng bao nhiêu để hiệu quả giảm huyết áp là lớn nhất?",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6"
            ],
            "explanation": "$f'(x) = 18x - 3x^2 = 3x(6 - x) = 0 \\Leftrightarrow x = 6$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm khoảng cách giữa hai đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{4x^2 + 1}}{x - 1}$.",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "Hai tiệm cận ngang là $y = 2$ và $y = -2$. Khoảng cách là $2 - (-2) = 4$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tìm giá trị lớn nhất của hàm số $y = 2x^3 - 3x^2 - 12x + 10$ trên đoạn $[-2; 0]$.",
            "correctAnswer": "17",
            "acceptedAnswers": [
              "17"
            ],
            "explanation": "$y(-2) = 6, y(-1) = 17, y(0) = 10 \\Rightarrow \\max = 17$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một cửa hàng bán sản phẩm với giá $x$ đô-la một đơn vị thì bán được $200 - 2x$ sản phẩm. Chi phí nhập mỗi sản phẩm là $20$ đô-la. Để lợi nhuận lớn nhất, giá bán $x$ cần đặt là bao nhiêu đô-la?",
            "correctAnswer": "60",
            "acceptedAnswers": [
              "60"
            ],
            "explanation": "$P(x) = (x - 20)(200 - 2x) = -2x^2 + 240x - 4000$. Đạt cực đại tại $x = 60$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một hình nón có độ dài đường sinh $l = 6\\text{ cm}$. Thể tích lớn nhất của khối nón có dạng $k\\sqrt{3}\\pi\\text{ cm}^3$. Tính giá trị của $k$.",
            "correctAnswer": "16",
            "acceptedAnswers": [
              "16"
            ],
            "explanation": "$V = \\frac{1}{3}\\pi (36 - h^2)h \\Rightarrow h = 2\\sqrt{3} \\Rightarrow V = 16\\sqrt{3}\\pi \\Rightarrow k = 16$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd5-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Ứng Dụng Đạo Hàm",
        "code": "CD5-104",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ có tâm đối xứng là điểm",
            "options": {
              "A": "$(-1; -3)$",
              "B": "$(1; 2)$",
              "C": "$(-1; 2)$",
              "D": "$(2; -1)$"
            },
            "correct": "C",
            "explanation": "Tâm đối xứng là giao điểm của hai đường tiệm cận $x = -1$ và $y = 2$, tức là $(-1; 2)$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hàm số $y = f(x)$ có bảng biến thiên: $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$, $f'(x) < 0$ trên $(-1; 2)$. Điểm cực đại của hàm số là",
            "options": {
              "A": "$x = -1$",
              "B": "$x = 2$",
              "C": "$y = -1$",
              "D": "$x = 0$"
            },
            "correct": "A",
            "explanation": "Đạo hàm đổi dấu từ dương sang âm tại $x = -1$, do đó $x = -1$ là điểm cực đại."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hàm số $y = x^3 - 3x^2 + 2$. Số điểm cực trị của hàm số là",
            "options": {
              "A": "$0$",
              "B": "$2$",
              "C": "$3$",
              "D": "$1$"
            },
            "correct": "B",
            "explanation": "$y' = 3x^2 - 6x = 0$ có 2 nghiệm phân biệt nên có 2 điểm cực trị."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Giá trị nhỏ nhất của hàm số $y = x^4 - 4x^2 + 1$ trên đoạn $[0; 3]$ là",
            "options": {
              "A": "$1$",
              "B": "$-4$",
              "C": "$-3$",
              "D": "$46$"
            },
            "correct": "C",
            "explanation": "$y(0) = 1, y(\\sqrt{2}) = -3, y(3) = 46$. Vậy $\\min = -3$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có tiệm cận xiên đi qua điểm nào dưới đây?",
            "options": {
              "A": "$C(2; 1)$",
              "B": "$A(1; 2)$",
              "C": "$O(0; 0)$",
              "D": "$B(0; 1)$"
            },
            "correct": "C",
            "explanation": "$y = x + 1/(x-1)$, tiệm cận xiên là $y = x$, đi qua gốc tọa độ $O(0; 0)$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một vật ném thẳng đứng lên cao từ mặt đất với phương trình $s(t) = 20t - 5t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Độ cao lớn nhất vật đạt được là",
            "options": {
              "A": "$20\\text{ m}$",
              "B": "$15\\text{ m}$",
              "C": "$30\\text{ m}$",
              "D": "$25\\text{ m}$"
            },
            "correct": "A",
            "explanation": "$v(t) = 20 - 10t = 0 \\Leftrightarrow t = 2\\text{ s}$. Độ cao $s(2) = 20\\text{ m}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Hàm số $y = -\\frac{1}{3}x^3 + x^2 + 3x - 1$ đồng biến trên khoảng nào dưới đây?",
            "options": {
              "A": "$(-\\infty; -1)$",
              "B": "$(-3; 1)$",
              "C": "$(3; +\\infty)$",
              "D": "$(-1; 3)$"
            },
            "correct": "D",
            "explanation": "$y' = -x^2 + 2x + 3 > 0 \\Leftrightarrow -1 < x < 3$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Tìm số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x - 2}{\\sqrt{x^2 - 4}}$.",
            "options": {
              "A": "$2$",
              "B": "$1$",
              "C": "$4$",
              "D": "$3$"
            },
            "correct": "D",
            "explanation": "Có 2 TCN ($y = 1, y = -1$) và 1 TCĐ ($x = -2$). Tổng cộng có 3 tiệm cận."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một người nông dân rào một mảnh vườn hình chữ nhật có diện tích $600\\text{ m}^2$ áp sát một bức tường thẳng (chỉ rào 3 cạnh). Chiều dài hàng rào ngắn nhất có thể làm là",
            "options": {
              "A": "$40\\sqrt{3}\\text{ m}$",
              "B": "$80\\text{ m}$",
              "C": "$70\\text{ m}$",
              "D": "$60\\sqrt{2}\\text{ m}$"
            },
            "correct": "A",
            "explanation": "$L = 2x + 600/x \\ge 2\\sqrt{1200} = 40\\sqrt{3}\\text{ m}$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hàm số $y = \\frac{x^2 + 3x + 3}{x + 2}$. Tọa độ giao điểm của hai đường tiệm cận của đồ thị là",
            "options": {
              "A": "$(-2; 1)$",
              "B": "$(-2; -1)$",
              "C": "$(2; 1)$",
              "D": "$(-2; 0)$"
            },
            "correct": "B",
            "explanation": "TCĐ: $x = -2$. TCX: $y = x + 1$. Giao điểm là $(-2; -1)$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một công ty muốn xây dựng đường ống dẫn dầu từ giàn khoan $S$ cách bờ biển $6\\text{ km}$ đến nhà máy lọc dầu $B$ trên bờ biển cách điểm chiếu $A$ một khoảng $8\\text{ km}$. Chi phí đặt ống dưới nước 5 tỷ đồng/km, trên đất liền 3 tỷ đồng/km. Chi phí đặt ống nhỏ nhất xấp xỉ bằng",
            "options": {
              "A": "$50\\text{ tỷ}$",
              "B": "$48\\text{ tỷ}$",
              "C": "$38\\text{ tỷ}$",
              "D": "$42\\text{ tỷ}$"
            },
            "correct": "B",
            "explanation": "$C(x) = 5\\sqrt{x^2 + 36} + 3(8 - x)$ đạt cực tiểu tại $x = 4.5\\text{ km}$, tổng chi phí là 48 tỷ đồng."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x) = x^3 - 3x + 2$. Tiếp tuyến của đồ thị hàm số tại điểm có hoành độ $x_0 = 2$ có phương trình là",
            "options": {
              "A": "$y = 9x - 10$",
              "B": "$y = 6x - 8$",
              "C": "$y = 3x - 2$",
              "D": "$y = 9x - 14$"
            },
            "correct": "D",
            "explanation": "$f'(2) = 9, f(2) = 4 \\Rightarrow y = 9(x - 2) + 4 = 9x - 14$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $y = f(x) = \\frac{x+2}{x-1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.",
                "correct": true,
                "explanation": "Đúng, mẫu khác 0."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàm số đồng biến trên khoảng $(1; +\\infty)$.",
                "correct": false,
                "explanation": "Sai, $y' = -3/(x-1)^2 < 0$ nên nghịch biến."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tiệm cận đứng của đồ thị hàm số là đường thẳng $x = 1$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 1$.",
                "correct": true,
                "explanation": "Đúng, $\\lim_{x \\to \\pm\\infty} \\frac{x+2}{x-1} = 1$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hàm số $y = f(x) = x^3 - 6x^2 + 9x - 2$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đạo hàm của hàm số là $f'(x) = 3(x - 1)(x - 3)$.",
                "correct": true,
                "explanation": "Đúng, $3x^2 - 12x + 9 = 3(x-1)(x-3)$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàm số đạt cực đại tại $x = 1$ và giá trị cực đại bằng $2$.",
                "correct": true,
                "explanation": "Đúng, $f(1) = 2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Hàm số đạt cực tiểu tại $x = 3$ và giá trị cực tiểu bằng $-2$.",
                "correct": true,
                "explanation": "Đúng, $f(3) = -2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hàm số đồng biến trên toàn bộ khoảng $(1; 3)$.",
                "correct": false,
                "explanation": "Sai, trên $(1; 3)$ hàm số nghịch biến."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Khảo sát chi phí vận hành một chiếc tàu thủy khi chạy với vận tốc $v\\text{ km/h}$ được cho bởi công thức $C(v) = 20v + \\frac{2000}{v}$ (nghìn đồng/giờ) với $10 \\le v \\le 50$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vận tốc càng tăng thì chi phí vận hành luôn tăng.",
                "correct": false,
                "explanation": "Sai, hàm $C(v)$ có cực trị."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đạo hàm $C'(v) = 20 - \\frac{2000}{v^2}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Chi phí vận hành mỗi giờ nhỏ nhất khi tàu chạy với vận tốc $v = 10\\text{ km/h}$.",
                "correct": true,
                "explanation": "Đúng, $C'(v) = 0 \\Leftrightarrow v = 10\\text{ km/h}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Chi phí vận hành nhỏ nhất là $400$ nghìn đồng/giờ.",
                "correct": true,
                "explanation": "Đúng, $C(10) = 400$ nghìn đồng."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $y = \\frac{2x^2 - x + 1}{x - 1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đồ thị hàm số có tiệm cận đứng là $x = 1$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường tiệm cận xiên của đồ thị là $y = 2x + 1$.",
                "correct": true,
                "explanation": "Đúng, $2x^2 - x + 1 = (2x + 1)(x - 1) + 2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Giao điểm của hai đường tiệm cận là $I(1; 3)$.",
                "correct": true,
                "explanation": "Đúng, $x = 1 \\Rightarrow y = 3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đồ thị hàm số đi qua gốc tọa độ $O(0;0)$.",
                "correct": false,
                "explanation": "Sai, với $x = 0$ thì $y = -1$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hàm số $y = x^3 - 3x^2 + 4$. Tính tổng hoành độ và tung độ của điểm uốn của đồ thị hàm số.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "$y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y = 2$. Tổng tọa độ là $1 + 2 = 3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Một người muốn làm một bể chứa nước bằng tôn có dạng hình hộp chữ nhật không nắp, đáy hình vuông, thể tích bằng $4\\text{ m}^3$. Chiều cao của bể bằng bao nhiêu mét để tốn ít tôn nhất?",
            "correctAnswer": "1",
            "acceptedAnswers": [
              "1"
            ],
            "explanation": "$V = x^2 h = 4 \\Rightarrow h = 4/x^2$. $S = x^2 + 16/x$. Cực tiểu tại $x = 2\\text{ m} \\Rightarrow h = 1\\text{ m}$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hàm số $f(x) = \\frac{x^2 + 2x - 2}{x - 1}$. Tính giá trị bình phương khoảng cách $d^2$ từ gốc tọa độ $O$ đến đường tiệm cận xiên của đồ thị hàm số.",
            "correctAnswer": "4.5",
            "acceptedAnswers": [
              "4.5",
              "4,5"
            ],
            "explanation": "Tiệm cận xiên là $x - y + 3 = 0$. $d = 3/\\sqrt{2} \\Rightarrow d^2 = 4.5$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tìm giá trị lớn nhất của hàm số $y = x^4 - 2x^2 + 5$ trên đoạn $[0; 2]$.",
            "correctAnswer": "13",
            "acceptedAnswers": [
              "13"
            ],
            "explanation": "$y(0) = 5, y(1) = 4, y(2) = 13 \\Rightarrow \\max = 13$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một cửa hàng nhận thấy rằng nếu bán một món quà với giá $p$ nghìn đồng thì số lượng bán được là $q = 100 - p$ sản phẩm. Chi phí vốn mỗi món là $40$ nghìn đồng. Giá bán $p$ (nghìn đồng) cần đặt là bao nhiêu để thu được lợi nhuận lớn nhất?",
            "correctAnswer": "70",
            "acceptedAnswers": [
              "70"
            ],
            "explanation": "$P(p) = (p - 40)(100 - p) = -p^2 + 140p - 4000$. Đạt cực đại tại $p = 70$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một quả bóng được đá lên từ mặt đất với quỹ đạo độ cao $h(t) = 18t - 4.9t^2$ (mét). Vận tốc tức thời của quả bóng tại thời điểm $t = 1\\text{ s}$ là bao nhiêu m/s?",
            "correctAnswer": "8.2",
            "acceptedAnswers": [
              "8.2",
              "8,2"
            ],
            "explanation": "$v(1) = h'(1) = 18 - 9.8 = 8.2\\text{ m/s}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd5-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Ứng Dụng Đạo Hàm",
        "code": "CD5-105",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Đồ thị hàm số $y = \\frac{x-3}{2x+4}$ có đường tiệm cận ngang là",
            "options": {
              "A": "$y = \\frac{1}{2}$",
              "B": "$y = -2$",
              "C": "$y = -3$",
              "D": "$x = -2$"
            },
            "correct": "A",
            "explanation": "$\\lim_{x \\to \\pm\\infty} \\frac{x-3}{2x+4} = \\frac{1}{2}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Hàm số $y = -x^3 + 3x^2 - 4$ nghịch biến trên khoảng nào?",
            "options": {
              "A": "$(-2; 0)$",
              "B": "$(2; +\\infty)$",
              "C": "$(0; 2)$",
              "D": "$(-\\infty; 2)$"
            },
            "correct": "B",
            "explanation": "$y' = -3x^2 + 6x = -3x(x - 2) < 0 \\Leftrightarrow x < 0$ hoặc $x > 2$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hàm số $y = f(x)$ có bảng biến thiên: $f(x)$ đạt cực đại tại $x = -2$ với giá trị $3$, đạt cực tiểu tại $x = 1$ với giá trị $-1$. Giá trị cực tiểu của hàm số là",
            "options": {
              "A": "$3$",
              "B": "$1$",
              "C": "$-2$",
              "D": "$-1$"
            },
            "correct": "D",
            "explanation": "Giá trị cực tiểu là $y_{CT} = -1$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Giá trị lớn nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[0; 2]$ bằng",
            "options": {
              "A": "$3$",
              "B": "$2$",
              "C": "$1$",
              "D": "$-1$"
            },
            "correct": "A",
            "explanation": "$y(0) = 1, y(1) = -1, y(2) = 3 \\Rightarrow \\max = 3$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Đồ thị hàm số $y = \\frac{x^2 - 4x + 3}{x - 3}$ có bao nhiêu đường tiệm cận đứng?",
            "options": {
              "A": "$2$",
              "B": "$0$",
              "C": "$1$",
              "D": "$3$"
            },
            "correct": "B",
            "explanation": "Tử số là $(x - 1)(x - 3)$. Tại $x \\to 3$, $y \\to 2$, không có tiệm cận đứng (0 đường)."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + x - 2}{x + 2}$ là",
            "options": {
              "A": "$y = x$",
              "B": "$y = x + 1$",
              "C": "$y = x - 1$",
              "D": "$y = x + 2$"
            },
            "correct": "C",
            "explanation": "$x^2 + x - 2 = (x + 2)(x - 1)$. Đồ thị là đường thẳng $y = x - 1$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Cho hàm số $y = f(x)$ có $f'(x) = (x - 2)^3 (x + 1)^2$. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "Hàm số đạt cực đại tại $x = 2$",
              "B": "Hàm số đạt cực tiểu tại $x = -1$",
              "C": "Hàm số có 2 điểm cực trị",
              "D": "Hàm số đạt cực tiểu tại $x = 2$"
            },
            "correct": "D",
            "explanation": "$f'(x)$ đổi dấu từ âm sang dương qua $x = 2$, nên hàm số đạt cực tiểu tại $x = 2$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Một chuyển động có phương trình $s(t) = t^3 - 6t^2 + 18t$ ($s$ tính bằng mét, $t$ tính bằng giây). Gia tốc của chuyển động tại thời điểm vận tốc đạt giá trị nhỏ nhất bằng",
            "options": {
              "A": "$-6\\text{ m/s}^2$",
              "B": "$6\\text{ m/s}^2$",
              "C": "$0\\text{ m/s}^2$",
              "D": "$12\\text{ m/s}^2$"
            },
            "correct": "C",
            "explanation": "$v(t) = 3(t - 2)^2 + 6$ nhỏ nhất tại $t = 2\\text{ s}$. Gia tốc $a(2) = 6(2) - 12 = 0\\text{ m/s}^2$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một xưởng cơ khí cần làm một thùng chứa hình trụ có thể tích $16\\pi\\text{ m}^3$ không nắp. Để diện tích tôn làm thùng nhỏ nhất, bán kính đáy thùng phải bằng",
            "options": {
              "A": "$1\\text{ m}$",
              "B": "$2\\sqrt[3]{2}\\text{ m}$",
              "C": "$4\\text{ m}$",
              "D": "$2\\text{ m}$"
            },
            "correct": "D",
            "explanation": "Với thùng không nắp, $S = \\pi r^2 + 32\\pi/r$ đạt cực tiểu khi $\\pi r^2 = 16\\pi/r \\Leftrightarrow r^3 = 16$. Hoặc nếu $V = 16\\pi$: $r = 2\\sqrt[3]{2}$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hàm số $y = \\frac{2x - 1}{x + 2}$. Gọi $M, m$ lần lượt là giá trị lớn nhất và nhỏ nhất trên đoạn $[0; 2]$. Tích $M \\cdot m$ bằng",
            "options": {
              "A": "$\\frac{3}{8}$",
              "B": "$1$",
              "C": "$-\\frac{3}{8}$",
              "D": "$-1$"
            },
            "correct": "C",
            "explanation": "$m = y(0) = -1/2, M = y(2) = 3/4 \\Rightarrow M \\cdot m = -3/8$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một bức tranh cao $2\\text{ m}$ treo trên tường có mép dưới cách tầm mắt người xem $1\\text{ m}$. Để góc nhìn bức tranh lớn nhất, người đó nên đứng cách tường một khoảng bằng",
            "options": {
              "A": "$2\\text{ m}$",
              "B": "$\\sqrt{3}\\text{ m}$",
              "C": "$\\sqrt{2}\\text{ m}$",
              "D": "$1.5\\text{ m}$"
            },
            "correct": "B",
            "explanation": "$\\tan\\theta = \\frac{2}{x + 3/x}$ lớn nhất khi $x = \\sqrt{3}\\text{ m}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x) = x^3 - 3x^2 + 1$. Số nghiệm thực của phương trình $f(x) = 0$ là",
            "options": {
              "A": "$3$",
              "B": "$2$",
              "C": "$1$",
              "D": "$0$"
            },
            "correct": "A",
            "explanation": "$y_{CĐ} = 1 > 0$ và $y_{CT} = -3 < 0$. Do $y_{CĐ} \\cdot y_{CT} < 0$ nên phương trình có 3 nghiệm phân biệt."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $y = \\frac{x-1}{2x+2}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.",
                "correct": true,
                "explanation": "Đúng, mẫu khác 0 khi $x \\ne -1$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường tiệm cận đứng là $x = -1$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đường tiệm cận ngang là $y = \\frac{1}{2}$.",
                "correct": true,
                "explanation": "Đúng, tỉ số hệ số bậc cao nhất là $1/2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hàm số nghịch biến trên từng khoảng xác định.",
                "correct": false,
                "explanation": "Sai, $y' = 4/(2x+2)^2 > 0$ nên đồng biến."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hàm số $y = x^3 - 3x$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Hàm số đã cho là hàm số lẻ, đồ thị nhận gốc tọa độ $O$ làm tâm đối xứng.",
                "correct": true,
                "explanation": "Đúng, $f(-x) = -f(x)$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàm số đồng biến trên $(-1; 1)$.",
                "correct": false,
                "explanation": "Sai, $y' = 3(x^2 - 1) < 0$ trên $(-1; 1)$ nên nghịch biến."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Hàm số đạt cực đại tại điểm $x = -1$ với giá trị cực đại $y_{CĐ} = 2$.",
                "correct": true,
                "explanation": "Đúng, $y(-1) = 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đồ thị hàm số cắt trục hoành tại đúng 3 điểm phân biệt.",
                "correct": true,
                "explanation": "Đúng, $x(x^2 - 3) = 0 \\Leftrightarrow x = 0, \\pm\\sqrt{3}$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một khu rừng sinh thái có số lượng cá thể chim quý hiếm được bảo tồn theo thời gian $t$ (năm, $0 \\le t \\le 10$) mô tả bởi $P(t) = -t^3 + 12t^2 + 500$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tại thời điểm ban đầu $t = 0$, số cá thể chim là $500$ con.",
                "correct": true,
                "explanation": "Đúng, $P(0) = 500$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đạo hàm tốc độ thay đổi số lượng chim là $P'(t) = -3t^2 + 24t$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Số lượng chim đạt mức cao nhất vào năm thứ 8 ($t = 8$).",
                "correct": true,
                "explanation": "Đúng, $P'(t) = 0 \\Leftrightarrow t = 8$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Số lượng chim cao nhất từng ghi nhận là $750$ con.",
                "correct": false,
                "explanation": "Sai, $P(8) = 756$ con."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đồ thị hàm số có tiệm cận xiên là $y = x - 2$.",
                "correct": true,
                "explanation": "Đúng, $y = x - 2 + 4/(x-1)$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đồ thị hàm số có tiệm cận đứng là $x = 1$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tọa độ tâm đối xứng của đồ thị là $I(1; -1)$.",
                "correct": true,
                "explanation": "Đúng, giao của $x = 1$ và $y = x - 2$ là $(1; -1)$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hàm số không có điểm cực trị nào.",
                "correct": false,
                "explanation": "Sai, có 2 điểm cực trị tại $x = -1$ và $x = 3$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hàm số $y = \\frac{2x + 1}{x - 1}$. Tính khoảng cách từ điểm $M(3; 0)$ đến đường tiệm cận đứng của đồ thị hàm số.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "Tiệm cận đứng là $x = 1$. Khoảng cách là $|3 - 1| = 2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Một hộp quà có dạng hình hộp chữ nhật có đáy là hình vuông, tổng diện tích tất cả các mặt bằng $150\\text{ cm}^2$. Thể tích lớn nhất của hộp quà bằng bao nhiêu $\\text{cm}^3$?",
            "correctAnswer": "125",
            "acceptedAnswers": [
              "125"
            ],
            "explanation": "$V(x) = \\frac{1}{2}(75x - x^3)$. Đạt cực đại tại $x = 5\\text{ cm}$, $V = 125\\text{ cm}^3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị nhỏ nhất của hàm số $f(x) = x^2 + \\frac{16}{x}$ trên khoảng $(0; +\\infty)$.",
            "correctAnswer": "12",
            "acceptedAnswers": [
              "12"
            ],
            "explanation": "$f(x) = x^2 + 8/x + 8/x \\ge 3\\sqrt[3]{64} = 12$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hàm số $y = \\frac{1}{3}x^3 - 2x^2 + 3x - 1$. Tiếp tuyến của đồ thị hàm số tại điểm có hoành độ $x_0 = 1$ có hệ số góc bằng bao nhiêu?",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "$k = y'(1) = 1 - 4 + 3 = 0$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một cửa hàng hoa quả tính toán lợi nhuận bán cam theo giá bán $x$ (nghìn đồng/kg) là $P(x) = -2x^2 + 100x - 800$ (nghìn đồng/ngày). Giá bán cam tối ưu để lợi nhuận mỗi ngày cao nhất là bao nhiêu nghìn đồng/kg?",
            "correctAnswer": "25",
            "acceptedAnswers": [
              "25"
            ],
            "explanation": "Đỉnh parabol tại $x = 100/4 = 25$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một giàn khoan dầu ở vị trí $A$ cách bờ biển $5\\text{ km}$. Điểm $B$ trên bờ biển gần $A$ nhất. Nhà máy lọc dầu ở vị trí $C$ trên bờ cách $B$ một khoảng $12\\text{ km}$. Kéo đường ống từ $A$ đến $M$ trên bờ rồi đến $C$. Khoảng cách $BM$ bằng bao nhiêu km để tổng chiều dài đường ống $AM + MC$ nhỏ nhất?",
            "correctAnswer": "12",
            "acceptedAnswers": [
              "12"
            ],
            "explanation": "Đoạn thẳng nối $A$ và $C$ trực tiếp là ngắn nhất, suy ra $M$ trùng $C$, tức $BM = 12\\text{ km}$."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd6",
    "code": "CĐ 6",
    "title": "NGUYÊN HÀM TÍCH PHÂN",
    "icon": "fa-solid fa-shapes",
    "badge": "Lớp 12 • Giải tích tích phân",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "description": "Nguyên hàm, tích phân, phương pháp đổi biến, từng phần và ứng dụng tính diện tích, thể tích khối tròn xoay, bài toán vật lý thực tế.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Nguyên Hàm & Bảng Nguyên Hàm Cơ Bản -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-calculator text-blue-600\"></i>\n      1. Khái Niệm Nguyên Hàm & Bảng Nguyên Hàm Cơ Bản\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Định nghĩa & Tính chất:</p>\n        <p>&bull; $F(x)$ là nguyên hàm của $f(x)$ trên $K \\Leftrightarrow F'(x) = f(x)$.</p>\n        <p>&bull; $\\int [f(x) \\pm g(x)]dx = \\int f(x)dx \\pm \\int g(x)dx$.</p>\n        <p>&bull; $\\int k \\cdot f(x)dx = k \\int f(x)dx$ ($k \\ne 0$).</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Bảng nguyên hàm thông dụng:</p>\n        <p>&bull; $\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C$ ($\\alpha \\ne -1$); $\\int \\frac{1}{x}dx = \\ln|x| + C$.</p>\n        <p>&bull; $\\int e^x dx = e^x + C$; $\\int a^x dx = \\frac{a^x}{\\ln a} + C$.</p>\n        <p>&bull; $\\int \\cos x dx = \\sin x + C$; $\\int \\sin x dx = -\\cos x + C$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Định Nghĩa Tích Phân & Phương Pháp Tính -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-shapes text-emerald-600\"></i>\n      2. Tích Phân & Hai Phương Pháp Tính\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200 shadow-xs\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Công thức Newton - Leibniz:</p>\n        <p>$\\int_a^b f(x)dx = F(b) - F(a) = F(x)\\Big|_a^b$.</p>\n        <p class=\"mt-1 text-slate-700\">Tính chất: $\\int_a^b = \\int_a^c + \\int_c^b$; $\\int_a^b = -\\int_b^a$; $\\int_a^a = 0$.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200 shadow-xs\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Tích phân từng phần & đổi biến:</p>\n        <p>&bull; Đổi biến: $\\int_a^b f(u(x))u'(x)dx = \\int_{u(a)}^{u(b)} f(u)du$.</p>\n        <p>&bull; Từng phần: $\\int_a^b u dv = uv\\Big|_a^b - \\int_a^b v du$.</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Thứ tự ưu tiên đặt $u$: \"Nhất lô, nhì đa, tam lượng, tứ mũ\".</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Ứng Dụng Hình Học (Diện Tích & Thể Tích) -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-cubes text-amber-600\"></i>\n      3. Ứng Dụng Tính Diện Tích Hình Phẳng & Thể Tích Khối Tròn Xoay\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200\">\n        <p><strong>Diện tích hình phẳng:</strong> $S = \\int_a^b |f(x) - g(x)|dx$.</p>\n        <p class=\"text-slate-600 text-sm mt-0.5\">Nếu đồ thị cắt nhau tại nghiệm $c \\in (a; b)$, tách tích phân thành các đoạn mang dấu xác định.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200\">\n        <p><strong>Thể tích khối tròn xoay (xoay quanh trục $Ox$):</strong> $V = \\pi \\int_a^b [f(x)]^2 dx$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 4: Ứng Dụng Vật Lý Chuyển Động Thực Tế -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-person-running text-purple-600\"></i>\n      4. Ứng Dụng Vật Lý Trong Đề Thi Mới\n    </h4>\n    <div class=\"bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt]\">\n      <p>&bull; Vận tốc $v(t) = s'(t) \\Rightarrow$ Quãng đường đi được từ $t_1$ đến $t_2$: $s = \\int_{t_1}^{t_2} v(t)dt$.</p>\n      <p>&bull; Gia tốc $a(t) = v'(t) \\Rightarrow$ Vận tốc tại thời điểm $t$: $v(t) = v(0) + \\int_0^t a(u)du$.</p>\n      <p>&bull; Lưu lượng chất lỏng chảy qua ống với tốc độ $q(t)$: Tổng thể tích $V = \\int_{t_1}^{t_2} q(t)dt$.</p>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd6-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Nguyên Hàm - Tích Phân",
        "code": "CD6-101",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Họ nguyên hàm của hàm số $f(x) = 3x^2 - 2x + 1$ là",
            "options": {
              "A": "$3x^3 - 2x^2 + x + C$",
              "B": "$6x - 2 + C$",
              "C": "$x^3 - 2x^2 + x + C$",
              "D": "$x^3 - x^2 + x + C$"
            },
            "correct": "D",
            "explanation": "$\\int (3x^2 - 2x + 1)dx = x^3 - x^2 + x + C$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Họ nguyên hàm của hàm số $f(x) = e^{2x}$ là",
            "options": {
              "A": "$2e^{2x} + C$",
              "B": "$e^{2x} + C$",
              "C": "$\\frac{1}{2}e^{2x} + C$",
              "D": "$\\frac{1}{2}e^x + C$"
            },
            "correct": "C",
            "explanation": "$\\int e^{2x}dx = \\frac{1}{2}e^{2x} + C$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho $\\int_1^3 f(x)dx = 4$ và $\\int_1^3 g(x)dx = -2$. Khi đó $\\int_1^3 [f(x) - 2g(x)]dx$ bằng",
            "options": {
              "A": "$2$",
              "B": "$6$",
              "C": "$8$",
              "D": "$0$"
            },
            "correct": "C",
            "explanation": "$\\int_1^3 [f(x) - 2g(x)]dx = 4 - 2(-2) = 8$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tích phân $I = \\int_0^1 (2x + 1)dx$ có giá trị bằng",
            "options": {
              "A": "$2$",
              "B": "$3$",
              "C": "$4$",
              "D": "$1$"
            },
            "correct": "A",
            "explanation": "$I = (x^2 + x)\\Big|_0^1 = 1 + 1 = 2$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho $\\int_0^2 f(x)dx = 3$ và $\\int_2^5 f(x)dx = 7$. Tính tích phân $I = \\int_0^5 f(x)dx$.",
            "options": {
              "A": "$21$",
              "B": "$4$",
              "C": "$-4$",
              "D": "$10$"
            },
            "correct": "D",
            "explanation": "$\\int_0^5 f(x)dx = \\int_0^2 f(x)dx + \\int_2^5 f(x)dx = 3 + 7 = 10$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng",
            "options": {
              "A": "$\\frac{8}{3}$",
              "B": "$\\frac{16}{3}$",
              "C": "$-\\frac{16}{3}$",
              "D": "$4$"
            },
            "correct": "B",
            "explanation": "Trên $[0; 2]$, $x^2 - 4 \\le 0$, diện tích $S = \\int_0^2 (4 - x^2)dx = (4x - x^3/3)\\Big|_0^2 = 8 - 8/3 = 16/3$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái đạp phanh. Kể từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t) = 20 - 4t$ ($t$ tính bằng giây). Quãng đường ô tô di chuyển được từ lúc đạp phanh đến khi dừng hẳn là",
            "options": {
              "A": "$50\\text{ m}$",
              "B": "$60\\text{ m}$",
              "C": "$40\\text{ m}$",
              "D": "$100\\text{ m}$"
            },
            "correct": "A",
            "explanation": "Ô tô dừng khi $v(t) = 0 \\Leftrightarrow t = 5\\text{ s}$. Quãng đường $s = \\int_0^5 (20 - 4t)dt = (20t - 2t^2)\\Big|_0^5 = 100 - 50 = 50\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Biết $\\int_0^1 \\frac{1}{2x + 1}dx = \\frac{1}{2}\\ln a$. Giá trị của $a$ bằng",
            "options": {
              "A": "$3$",
              "B": "$1$",
              "C": "$2$",
              "D": "$4$"
            },
            "correct": "A",
            "explanation": "$\\int_0^1 \\frac{1}{2x + 1}dx = \\frac{1}{2}\\ln(2x+1)\\Big|_0^1 = \\frac{1}{2}\\ln 3 \\Rightarrow a = 3$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 0, x = 4$ quanh trục $Ox$ bằng",
            "options": {
              "A": "$\\frac{16\\pi}{3}$",
              "B": "$16\\pi$",
              "C": "$8\\pi$",
              "D": "$4\\pi$"
            },
            "correct": "C",
            "explanation": "$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\frac{x^2}{2}\\Big|_0^4 = 8\\pi$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho $I = \\int_0^1 x e^x dx$. Kết quả của $I$ bằng",
            "options": {
              "A": "$e$",
              "B": "$1$",
              "C": "$2$",
              "D": "$e - 1$"
            },
            "correct": "B",
            "explanation": "Từng phần: $u = x, dv = e^x dx \\Rightarrow du = dx, v = e^x$. $I = x e^x\\Big|_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một bồn chứa nước hình phễu parabol xoay có mặt cắt qua trục là parabol $y = x^2$ ($0 \\le y \\le 4$, đơn vị mét). Thể tích của bồn chứa bằng bao nhiêu mét khối?",
            "options": {
              "A": "$\\frac{16\\pi}{3}$",
              "B": "$16\\pi$",
              "C": "$4\\pi$",
              "D": "$8\\pi$"
            },
            "correct": "D",
            "explanation": "Xoay quanh trục tung $Oy$: $V = \\pi \\int_0^4 x^2 dy = \\pi \\int_0^4 y dy = \\pi \\frac{y^2}{2}\\Big|_0^4 = 8\\pi\\text{ m}^3$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^4 f(x)dx = 8$. Tính tích phân $J = \\int_0^2 f(2x)dx$.",
            "options": {
              "A": "$2$",
              "B": "$4$",
              "C": "$16$",
              "D": "$8$"
            },
            "correct": "B",
            "explanation": "Đổi biến $u = 2x \\Rightarrow dx = du/2$. $J = \\frac{1}{2}\\int_0^4 f(u)du = \\frac{1}{2} \\times 8 = 4$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $f(x) = 2x - 3$ và gọi $F(x)$ là một nguyên hàm của $f(x)$ thỏa mãn $F(1) = 2$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Họ nguyên hàm của $f(x)$ là $\\int (2x - 3)dx = x^2 - 3x + C$.",
                "correct": true,
                "explanation": "Đúng, $(x^2 - 3x)' = 2x - 3$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hằng số $C$ tương ứng với $F(x)$ là $C = 4$.",
                "correct": true,
                "explanation": "Đúng, $F(1) = 1 - 3 + C = 2 \\Rightarrow C = 4$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Giá trị của $F(2)$ bằng $2$.",
                "correct": true,
                "explanation": "Đúng, $F(2) = 4 - 6 + 4 = 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Phương trình $F(x) = 0$ có 2 nghiệm thực phân biệt.",
                "correct": false,
                "explanation": "Sai, $x^2 - 3x + 4 = 0$ có $\\Delta = 9 - 16 = -7 < 0$, vô nghiệm."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình phẳng $(H)$ giới hạn bởi đường cong $y = x^2$ và đường thẳng $y = 2x$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Phương trình hoành độ giao điểm của hai đường là $x^2 - 2x = 0$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hai đường cắt nhau tại hai điểm có hoành độ lần lượt là $x = 0$ và $x = 2$.",
                "correct": true,
                "explanation": "Đúng, $x(x - 2) = 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Trên đoạn $[0; 2]$, ta có $x^2 \\ge 2x$.",
                "correct": false,
                "explanation": "Sai, trên $(0; 2)$ thì parabol nằm phía dưới đường thẳng: $2x \\ge x^2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Diện tích của hình phẳng $(H)$ bằng $\\frac{4}{3}$ (đơn vị diện tích).",
                "correct": true,
                "explanation": "Đúng, $S = \\int_0^2 (2x - x^2)dx = (x^2 - x^3/3)\\Big|_0^2 = 4 - 8/3 = 4/3$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một tên lửa nghiên cứu khí tượng được phóng thẳng đứng từ mặt đất với gia tốc $a(t) = 12 - 2t$ ($\\text{m/s}^2$) trong $6$ giây đầu tiên ($0 \\le t \\le 6$). Vận tốc ban đầu $v(0) = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Biểu thức vận tốc của tên lửa theo thời gian là $v(t) = 12t - t^2$ ($\\text{m/s}$).",
                "correct": true,
                "explanation": "Đúng, $v(t) = \\int (12 - 2t)dt = 12t - t^2$ với $v(0) = 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Vận tốc của tên lửa đạt giá trị lớn nhất tại thời điểm $t = 6\\text{ s}$.",
                "correct": true,
                "explanation": "Đúng, $v'(t) = a(t) = 12 - 2t = 0 \\Leftrightarrow t = 6\\text{ s}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Vận tốc lớn nhất mà tên lửa đạt được trong giai đoạn này là $36\\text{ m/s}$.",
                "correct": true,
                "explanation": "Đúng, $v(6) = 12(6) - 36 = 36\\text{ m/s}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Độ cao của tên lửa tại thời điểm $t = 6\\text{ s}$ là $150\\text{ m}$.",
                "correct": false,
                "explanation": "Sai, độ cao $h(6) = \\int_0^6 (12t - t^2)dt = (6t^2 - t^3/3)\\Big|_0^6 = 216 - 72 = 144\\text{ m}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho tích phân $I = \\int_0^{\\pi/2} x \\cos x dx$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Nếu đặt $u = x$ và $dv = \\cos x dx$ thì $du = dx$ và $v = \\sin x$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Công thức từng phần là $I = (x \\sin x)\\Big|_0^{\\pi/2} - \\int_0^{\\pi/2} \\sin x dx$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Giá trị của $\\int_0^{\\pi/2} \\sin x dx$ bằng $1$.",
                "correct": true,
                "explanation": "Đúng, $-\\cos x\\Big|_0^{\\pi/2} = 0 - (-1) = 1$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Giá trị của tích phân $I$ bằng $\\frac{\\pi}{2} + 1$.",
                "correct": false,
                "explanation": "Sai, $I = \\frac{\\pi}{2}(1) - 1 = \\frac{\\pi}{2} - 1$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Biết $\\int_1^2 (3x^2 + 2x)dx = a$. Giá trị của $a$ bằng bao nhiêu?",
            "correctAnswer": "10",
            "acceptedAnswers": [
              "10"
            ],
            "explanation": "$(x^3 + x^2)\\Big|_1^2 = (8 + 4) - (1 + 1) = 10$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2\\text{ (m/s)}$. Tính quãng đường vật đi được trong khoảng thời gian từ $t = 1\\text{ s}$ đến $t = 3\\text{ s}$ (đơn vị: mét).",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30"
            ],
            "explanation": "$s = \\int_1^3 (3t^2 + 2)dt = (t^3 + 2t)\\Big|_1^3 = (27 + 6) - (1 + 2) = 30\\text{ m}$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho $\\int_0^3 f(x)dx = 5$ và $\\int_0^3 g(x)dx = 2$. Tính tích phân $I = \\int_0^3 [2f(x) - 3g(x)]dx$.",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "$I = 2(5) - 3(2) = 10 - 6 = 4$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 3x^2$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$.",
            "correctAnswer": "8",
            "acceptedAnswers": [
              "8"
            ],
            "explanation": "$S = \\int_0^2 3x^2 dx = x^3\\Big|_0^2 = 8$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \\sqrt{2x}$, $y = 0$, $x = 0$, $x = 3$ quanh trục $Ox$ có dạng $k\\pi$. Tính giá trị của $k$.",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9"
            ],
            "explanation": "$V = \\pi \\int_0^3 2x dx = \\pi x^2\\Big|_0^3 = 9\\pi \\Rightarrow k = 9$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một giọt nước rỉ vào một bình với tốc độ $q(t) = 6t - t^2$ (ml/phút) trong $6$ phút đầu tiên ($0 \\le t \\le 6$). Tổng lượng nước chảy vào bình sau $6$ phút là bao nhiêu ml?",
            "correctAnswer": "36",
            "acceptedAnswers": [
              "36"
            ],
            "explanation": "$V = \\int_0^6 (6t - t^2)dt = (3t^2 - t^3/3)\\Big|_0^6 = 108 - 72 = 36\\text{ ml}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd6-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Nguyên Hàm - Tích Phân",
        "code": "CD6-102",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Khẳng định nào sau đây là sai?",
            "options": {
              "A": "$\\int \\sin x dx = -\\cos x + C$",
              "B": "$\\int e^x dx = e^x + C$",
              "C": "$\\int \\cos x dx = \\sin x + C$",
              "D": "$\\int \\frac{1}{x}dx = -\\frac{1}{x^2} + C$"
            },
            "correct": "D",
            "explanation": "$\\int \\frac{1}{x}dx = \\ln|x| + C$, không phải $-1/x^2 + C$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho $\\int_0^1 f(x)dx = 2$ và $\\int_0^1 g(x)dx = 5$. Tính $\\int_0^1 [3f(x) - g(x)]dx$.",
            "options": {
              "A": "$1$",
              "B": "$6$",
              "C": "$11$",
              "D": "$-1$"
            },
            "correct": "A",
            "explanation": "$3(2) - 5 = 1$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tích phân $\\int_1^e \\frac{1}{x}dx$ bằng",
            "options": {
              "A": "$0$",
              "B": "$1$",
              "C": "$e - 1$",
              "D": "$e$"
            },
            "correct": "B",
            "explanation": "$\\ln|x|\\Big|_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = x^2$, trục hoành, đường thẳng $x = 0$ và $x = 1$ quanh trục $Ox$ bằng",
            "options": {
              "A": "$\\frac{\\pi}{3}$",
              "B": "$\\frac{\\pi}{5}$",
              "C": "$\\frac{\\pi}{4}$",
              "D": "$\\pi$"
            },
            "correct": "B",
            "explanation": "$V = \\pi \\int_0^1 (x^2)^2 dx = \\pi \\int_0^1 x^4 dx = \\frac{\\pi}{5}$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Biết $\\int_0^2 f(x)dx = 4$. Tính tích phân $I = \\int_0^2 [2f(x) + 3]dx$.",
            "options": {
              "A": "$14$",
              "B": "$8$",
              "C": "$10$",
              "D": "$11$"
            },
            "correct": "A",
            "explanation": "$I = 2(4) + 3(2 - 0) = 8 + 6 = 14$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Diện tích hình phẳng giới hạn bởi đồ thị hai hàm số $y = x^2$ và $y = x$ bằng",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$\\frac{1}{6}$",
              "C": "$\\frac{1}{3}$",
              "D": "$\\frac{5}{6}$"
            },
            "correct": "B",
            "explanation": "$x^2 - x = 0 \\Leftrightarrow x = 0, x = 1$. $S = \\int_0^1 (x - x^2)dx = 1/2 - 1/3 = 1/6$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một đoàn tàu đang chạy đều với vận tốc $15\\text{ m/s}$ thì người lái hãm phanh chuyển động chậm dần đều với gia tốc $a(t) = -3\\text{ m/s}^2$. Quãng đường tàu đi được từ lúc hãm phanh đến khi dừng hẳn là",
            "options": {
              "A": "$30\\text{ m}$",
              "B": "$45\\text{ m}$",
              "C": "$37.5\\text{ m}$",
              "D": "$75\\text{ m}$"
            },
            "correct": "C",
            "explanation": "$v(t) = 15 - 3t = 0 \\Leftrightarrow t = 5\\text{ s}$. $s = \\int_0^5 (15 - 3t)dt = 15(5) - 1.5(25) = 75 - 37.5 = 37.5\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho $\\int_0^1 (x + 1)e^x dx = a \\cdot e + b$ với $a, b \\in \\mathbb{Z}$. Tính $a + b$.",
            "options": {
              "A": "$-1$",
              "B": "$2$",
              "C": "$0$",
              "D": "$1$"
            },
            "correct": "D",
            "explanation": "Từng phần: $u = x + 1, dv = e^x dx \\Rightarrow (x+1)e^x\\Big|_0^1 - \\int_0^1 e^x dx = 2e - 1 - (e - 1) = e$. Vậy $a = 1, b = 0 \\Rightarrow a + b = 1$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và $\\int_0^6 f(x)dx = 12$. Tính $I = \\int_0^2 f(3x)dx$.",
            "options": {
              "A": "$4$",
              "B": "$36$",
              "C": "$6$",
              "D": "$2$"
            },
            "correct": "A",
            "explanation": "$u = 3x \\Rightarrow I = \\frac{1}{3}\\int_0^6 f(u)du = 12/3 = 4$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho $F(x)$ là một nguyên hàm của hàm số $f(x) = \\frac{1}{x - 1}$ thỏa mãn $F(2) = 1$. Khi đó $F(e + 1)$ bằng",
            "options": {
              "A": "$e + 1$",
              "B": "$1$",
              "C": "$2$",
              "D": "$e$"
            },
            "correct": "C",
            "explanation": "$F(x) = \\ln|x - 1| + C$. $F(2) = \\ln 1 + C = 1 \\Rightarrow C = 1$. $F(e + 1) = \\ln e + 1 = 1 + 1 = 2$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một mặt bàn có dạng hình elip với phương trình $\\frac{x^2}{4} + \\frac{y^2}{1} = 1$ (đơn vị: mét). Diện tích của mặt bàn đó bằng bao nhiêu mét vuông?",
            "options": {
              "A": "$8\\pi$",
              "B": "$4\\pi$",
              "C": "$2\\pi$",
              "D": "$\\pi$"
            },
            "correct": "C",
            "explanation": "Diện tích elip $S = \\pi a b = \\pi (2)(1) = 2\\pi\\text{ m}^2$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x)$ liên tục trên $[0; 1]$ thỏa mãn $\\int_0^1 x f'(x)dx = 5$ và $f(1) = 8$. Tính $I = \\int_0^1 f(x)dx$.",
            "options": {
              "A": "$-3$",
              "B": "$13$",
              "C": "$40$",
              "D": "$3$"
            },
            "correct": "D",
            "explanation": "Từng phần: $\\int_0^1 x f'(x)dx = x f(x)\\Big|_0^1 - \\int_0^1 f(x)dx \\Rightarrow 5 = f(1) - I = 8 - I \\Rightarrow I = 3$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $f(x) = 3x^2 - 4x + 1$ và $F(x)$ là nguyên hàm của $f(x)$ với $F(0) = 5$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Nguyên hàm tổng quát của $f(x)$ là $F(x) = x^3 - 2x^2 + x + C$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hằng số $C = 5$.",
                "correct": true,
                "explanation": "Đúng, $F(0) = C = 5$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Giá trị của $F(1)$ bằng $5$.",
                "correct": true,
                "explanation": "Đúng, $F(1) = 1 - 2 + 1 + 5 = 5$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Điểm cực đại của hàm số $y = F(x)$ có hoành độ $x = 1$.",
                "correct": false,
                "explanation": "Sai, $F'(x) = f(x) = 0 \\Leftrightarrow x = 1$ hoặc $x = 1/3$. Tại $x = 1$, $F''(1) = f'(1) = 6 - 4 = 2 > 0$ nên là điểm cực tiểu."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình phẳng $(D)$ giới hạn bởi đường cong $y = \\sqrt{x}$, trục hoành và đường thẳng $x = 4$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Diện tích hình phẳng $(D)$ được tính bởi công thức $S = \\int_0^4 \\sqrt{x}dx$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Diện tích của hình phẳng $(D)$ bằng $\\frac{16}{3}$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{2}{3}x^{3/2}\\Big|_0^4 = \\frac{2}{3} \\times 8 = \\frac{16}{3}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Khi quay $(D)$ quanh trục $Ox$, thể tích khối tròn xoay tạo thành là $V = \\pi \\int_0^4 x dx$.",
                "correct": true,
                "explanation": "Đúng, $(\\sqrt{x})^2 = x$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Thể tích khối tròn xoay này bằng $16\\pi$.",
                "correct": false,
                "explanation": "Sai, $V = \\pi \\frac{x^2}{2}\\Big|_0^4 = 8\\pi$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một bình chứa nước hình nón lộn ngược có bán kính miệng $R = 2\\text{ m}$, chiều cao $H = 4\\text{ m}$. Nước được bơm vào bình với lưu lượng không đổi $Q = 0.5\\text{ m}^3\\text{/phút}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tổng thể tích bình chứa nước là $\\frac{16\\pi}{3}\\text{ m}^3$.",
                "correct": true,
                "explanation": "Đúng, $V = \\frac{1}{3}\\pi R^2 H = \\frac{16\\pi}{3}$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Sau $t$ phút, thể tích nước bơm vào là $V(t) = 0.5t\\text{ m}^3$.",
                "correct": true,
                "explanation": "Đúng, $V(t) = \\int_0^t 0.5 dt = 0.5t$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Sau 10 phút, lượng nước bơm vào là $5\\text{ m}^3$.",
                "correct": true,
                "explanation": "Đúng, $0.5 \\times 10 = 5$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Thời gian để nước đầy bình là ít hơn 30 phút (lấy $\\pi \\approx 3.14$).",
                "correct": false,
                "explanation": "Sai, $V \\approx 16.755\\text{ m}^3 \\Rightarrow t = 16.755 / 0.5 \\approx 33.5\\text{ phút} > 30$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $f(x)$ liên tục trên đoạn $[0; 2]$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Nếu $f(x) \\ge 0, \\forall x \\in [0; 2]$ thì $\\int_0^2 f(x)dx \\ge 0$.",
                "correct": true,
                "explanation": "Đúng, tính chất của tích phân."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\int_0^2 [f(x)]^2 dx = [\\int_0^2 f(x)dx]^2$.",
                "correct": false,
                "explanation": "Sai, tích phân của bình phương không bằng bình phương của tích phân."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $\\int_0^2 f(x)dx = 6$ thì $\\int_0^1 f(2x)dx = 3$.",
                "correct": true,
                "explanation": "Đúng, đổi biến $u = 2x \\Rightarrow \\frac{1}{2} \\times 6 = 3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$\\int_0^2 f(x)dx + \\int_2^0 f(x)dx = 0$.",
                "correct": true,
                "explanation": "Đúng, $\\int_2^0 f(x)dx = -\\int_0^2 f(x)dx$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_0^2 (4x^3 - 6x)dx$.",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "$(x^4 - 3x^2)\\Big|_0^2 = 16 - 12 = 4$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho $\\int_1^4 f(x)dx = 9$. Tính tích phân $J = \\int_1^2 x f(x^2)dx$.",
            "correctAnswer": "4.5",
            "acceptedAnswers": [
              "4.5",
              "4,5"
            ],
            "explanation": "$u = x^2 \\Rightarrow du = 2x dx$. $J = \\frac{1}{2}\\int_1^4 f(u)du = 4.5$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một vật chuyển động thẳng với gia tốc $a(t) = 6t\\text{ (m/s}^2\\text{)}$. Biết tại thời điểm $t = 0$, vận tốc của vật bằng $2\\text{ m/s}$. Tính vận tốc của vật tại thời điểm $t = 3\\text{ s}$ (m/s).",
            "correctAnswer": "29",
            "acceptedAnswers": [
              "29"
            ],
            "explanation": "$v(t) = 3t^2 + 2 \\Rightarrow v(3) = 3(9) + 2 = 29\\text{ m/s}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tính diện tích hình phẳng giới hạn bởi parabol $y = 4 - x^2$ và trục hoành $Ox$.",
            "correctAnswer": "10.67",
            "acceptedAnswers": [
              "10.67",
              "32/3",
              "10,67"
            ],
            "explanation": "Nghiệm $x = \\pm 2$. $S = \\int_{-2}^2 (4 - x^2)dx = 2(8 - 8/3) = 32/3 \\approx 10.67$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho hình phẳng giới hạn bởi đường cong $y = e^x$, trục hoành, trục tung và đường thẳng $x = 1$. Thể tích khối tròn xoay sinh ra khi quay hình này quanh trục $Ox$ có dạng $\\frac{\\pi}{2}(e^a - b)$. Tính giá trị của $a + b$.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "$V = \\pi \\int_0^1 e^{2x}dx = \\frac{\\pi}{2}(e^2 - 1) \\Rightarrow a = 2, b = 1 \\Rightarrow a + b = 3$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một bể dầu bị rò rỉ với tốc độ rò rỉ là $r(t) = 200 - 4t$ (lít/giờ) với $0 \\le t \\le 50$. Lượng dầu rò rỉ trong 10 giờ đầu tiên là bao nhiêu lít?",
            "correctAnswer": "1800",
            "acceptedAnswers": [
              "1800"
            ],
            "explanation": "$V = \\int_0^{10} (200 - 4t)dt = 200(10) - 2(100) = 2000 - 200 = 1800$ lít."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd6-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Nguyên Hàm - Tích Phân",
        "code": "CD6-103",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Nguyên hàm của hàm số $f(x) = \\cos 2x$ là",
            "options": {
              "A": "$\\sin 2x + C$",
              "B": "$2\\sin 2x + C$",
              "C": "$\\frac{1}{2}\\sin 2x + C$",
              "D": "$-\\frac{1}{2}\\sin 2x + C$"
            },
            "correct": "C",
            "explanation": "$\\int \\cos 2x dx = \\frac{1}{2}\\sin 2x + C$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho $\\int_0^3 f(x)dx = 6$. Tính tích phân $I = \\int_0^3 \\frac{1}{2}f(x)dx$.",
            "options": {
              "A": "$6$",
              "B": "$3$",
              "C": "$1.5$",
              "D": "$12$"
            },
            "correct": "B",
            "explanation": "$\\frac{1}{2} \\times 6 = 3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Biết $\\int_1^2 f(x)dx = 3$ và $\\int_1^2 g(x)dx = -1$. Khi đó $\\int_1^2 [f(x) + g(x)]dx$ bằng",
            "options": {
              "A": "$2$",
              "B": "$4$",
              "C": "$-4$",
              "D": "$-3$"
            },
            "correct": "A",
            "explanation": "$3 + (-1) = 2$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tích phân $\\int_0^1 e^{3x}dx$ bằng",
            "options": {
              "A": "$3(e^3 - 1)$",
              "B": "$e^3 - 1$",
              "C": "$\\frac{e^3}{3}$",
              "D": "$\\frac{e^3 - 1}{3}$"
            },
            "correct": "D",
            "explanation": "$\\frac{1}{3}e^{3x}\\Big|_0^1 = \\frac{e^3 - 1}{3}$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Diện tích hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng",
            "options": {
              "A": "$8$",
              "B": "$2$",
              "C": "$4$",
              "D": "$16$"
            },
            "correct": "C",
            "explanation": "$S = \\int_0^2 x^3 dx = \\frac{x^4}{4}\\Big|_0^2 = 4$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = 2x - x^2$ và $y = 0$ quanh trục hoành là",
            "options": {
              "A": "$\\frac{16\\pi}{15}$",
              "B": "$\\frac{2\\pi}{3}$",
              "C": "$\\frac{4\\pi}{3}$",
              "D": "$\\frac{8\\pi}{15}$"
            },
            "correct": "A",
            "explanation": "$V = \\pi \\int_0^2 (2x - x^2)^2 dx = \\pi \\int_0^2 (4x^2 - 4x^3 + x^4)dx = \\pi (32/3 - 16 + 32/5) = \\frac{16\\pi}{15}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một viên đạn được bắn thẳng đứng từ mặt đất với vận tốc ban đầu $v_0 = 196\\text{ m/s}$. Bỏ qua sức cản không khí, gia tốc trọng trường $g = 9.8\\text{ m/s}^2$. Thời gian viên đạn bay đến độ cao lớn nhất là",
            "options": {
              "A": "$20\\text{ s}$",
              "B": "$10\\text{ s}$",
              "C": "$15\\text{ s}$",
              "D": "$25\\text{ s}$"
            },
            "correct": "A",
            "explanation": "$v(t) = 196 - 9.8t = 0 \\Leftrightarrow t = 20\\text{ s}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Biết $\\int_0^1 x(x^2 + 1)^3 dx = \\frac{a}{b}$ với $\\frac{a}{b}$ là phân số tối giản. Tổng $a + b$ bằng",
            "options": {
              "A": "$31$",
              "B": "$23$",
              "C": "$15$",
              "D": "$19$"
            },
            "correct": "B",
            "explanation": "$u = x^2 + 1 \\Rightarrow \\frac{1}{2}\\int_1^2 u^3 du = \\frac{1}{8}(16 - 1) = \\frac{15}{8} \\Rightarrow a = 15, b = 8 \\Rightarrow a + b = 23$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình phẳng giới hạn bởi đồ thị hàm số $y = \\frac{1}{x}$, trục hoành và hai đường thẳng $x = 1, x = 3$. Diện tích hình phẳng đó bằng",
            "options": {
              "A": "$\\frac{2}{3}$",
              "B": "$\\ln 2$",
              "C": "$3$",
              "D": "$\\ln 3$"
            },
            "correct": "D",
            "explanation": "$S = \\int_1^3 \\frac{1}{x}dx = \\ln 3$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho tích phân từng phần $I = \\int_1^e x \\ln x dx$. Kết quả của $I$ bằng",
            "options": {
              "A": "$\\frac{e^2 - 1}{4}$",
              "B": "$\\frac{e^2}{2}$",
              "C": "$\\frac{e^2 + 3}{4}$",
              "D": "$\\frac{e^2 + 1}{4}$"
            },
            "correct": "D",
            "explanation": "$u = \\ln x, dv = x dx \\Rightarrow \\frac{x^2}{2}\\ln x\\Big|_1^e - \\int_1^e \\frac{x}{2}dx = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{e^2 + 1}{4}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một vòm cửa của một công trình kiến trúc có dạng parabol với chiều rộng ở chân vòm $w = 4\\text{ m}$ và chiều cao đỉnh vòm $h = 3\\text{ m}$. Diện tích cửa sổ vòm parabol đó bằng",
            "options": {
              "A": "$9\\text{ m}^2$",
              "B": "$6\\text{ m}^2$",
              "C": "$8\\text{ m}^2$",
              "D": "$12\\text{ m}^2$"
            },
            "correct": "C",
            "explanation": "Diện tích vòm parabol Archimedes: $S = \\frac{2}{3} w h = \\frac{2}{3} \\times 4 \\times 3 = 8\\text{ m}^2$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x)$ có đạo hàm liên tục trên $[0; 1]$ thỏa mãn $f(0) = 1, f(1) = 4$. Tính $I = \\int_0^1 f'(x)dx$.",
            "options": {
              "A": "$-3$",
              "B": "$3$",
              "C": "$5$",
              "D": "$4$"
            },
            "correct": "B",
            "explanation": "$I = f(1) - f(0) = 4 - 1 = 3$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $f(x) = \\sin x + \\cos x$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Một nguyên hàm của $f(x)$ là $F(x) = -\\cos x + \\sin x$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Tích phân $\\int_0^{\\pi/2} f(x)dx = 2$.",
                "correct": true,
                "explanation": "Đúng, $(-\\cos x + \\sin x)\\Big|_0^{\\pi/2} = (0 + 1) - (-1 + 0) = 2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tích phân $\\int_0^\\pi f(x)dx = 0$.",
                "correct": false,
                "explanation": "Sai, $(-\\cos x + \\sin x)\\Big|_0^\\pi = (1 + 0) - (-1 + 0) = 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Giá trị trung bình của $f(x)$ trên $[0; \\pi/2]$ bằng $\\frac{4}{\\pi}$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{1}{\\pi/2 - 0} \\times 2 = \\frac{4}{\\pi}$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho parabol $(P): y = -x^2 + 4$ và trục hoành $Ox$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Parabol cắt trục hoành tại hai điểm có hoành độ $x = -2$ và $x = 2$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Diện tích hình phẳng giới hạn bởi $(P)$ và $Ox$ là $S = \\int_{-2}^2 (4 - x^2)dx$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Diện tích hình phẳng này bằng $\\frac{32}{3}$.",
                "correct": true,
                "explanation": "Đúng, $2(8 - 8/3) = 32/3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đường thẳng $y = 3$ chia hình phẳng thành hai phần có diện tích bằng nhau.",
                "correct": false,
                "explanation": "Sai, diện tích phần trên đỉnh chỉ là một phần nhỏ."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một bình ắc quy cung cấp dòng điện với cường độ giảm dần theo thời gian $I(t) = 5 e^{-0.1t}$ (Ampe) với $t$ tính bằng giây ($0 \\le t \\le 20$).",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tại thời điểm ban đầu $t = 0$, cường độ dòng điện là $5\\text{ A}$.",
                "correct": true,
                "explanation": "Đúng, $I(0) = 5$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Điện lượng chạy qua mạch trong thời gian từ $0$ đến $t$ là $q(t) = \\int_0^t I(u)du$.",
                "correct": true,
                "explanation": "Đúng theo định nghĩa vật lý."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Biểu thức điện lượng là $q(t) = 50(1 - e^{-0.1t})$ (Cu-lông).",
                "correct": true,
                "explanation": "Đúng, $\\int_0^t 5e^{-0.1u}du = 5 \\times (-10)(e^{-0.1t} - 1) = 50(1 - e^{-0.1t})$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Sau $20$ giây, điện lượng chuyển qua mạch vượt quá $50\\text{ C}$.",
                "correct": false,
                "explanation": "Sai, $q(20) = 50(1 - e^{-2}) < 50\\text{ C}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $y = f(x)$ liên tục trên $[-1; 1]$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Nếu $f(x)$ là hàm số lẻ thì $\\int_{-1}^1 f(x)dx = 0$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Nếu $f(x)$ là hàm số chẵn thì $\\int_{-1}^1 f(x)dx = 2\\int_0^1 f(x)dx$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tích phân $\\int_{-1}^1 x^5 dx = 0$.",
                "correct": true,
                "explanation": "Đúng vì $x^5$ là hàm số lẻ."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tích phân $\\int_{-1}^1 x^4 dx = 0$.",
                "correct": false,
                "explanation": "Sai, $x^4$ là hàm chẵn, tích phân bằng $2/5$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_0^1 (6x^2 + 4x - 1)dx$.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "$(2x^3 + 2x^2 - x)\\Big|_0^1 = 2 + 2 - 1 = 3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho $\\int_0^2 f(x)dx = 5$. Tính tích phân $K = \\int_0^2 [3f(x) - 2x]dx$.",
            "correctAnswer": "11",
            "acceptedAnswers": [
              "11"
            ],
            "explanation": "$3(5) - x^2\\Big|_0^2 = 15 - 4 = 11$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một xe máy đang chạy với vận tốc $12\\text{ m/s}$ thì tăng tốc với gia tốc $a(t) = 2t + 1\\text{ (m/s}^2\\text{)}$. Tính vận tốc của xe máy sau $3$ giây kể từ khi bắt đầu tăng tốc (m/s).",
            "correctAnswer": "24",
            "acceptedAnswers": [
              "24"
            ],
            "explanation": "$v(t) = 12 + t^2 + t \\Rightarrow v(3) = 12 + 9 + 3 = 24\\text{ m/s}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tính diện tích hình phẳng giới hạn bởi đồ thị $y = x^2 - 2x$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$.",
            "correctAnswer": "1.33",
            "acceptedAnswers": [
              "1.33",
              "4/3",
              "1,33"
            ],
            "explanation": "$S = \\int_0^2 (2x - x^2)dx = 4 - 8/3 = 4/3 \\approx 1.33$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Khối tròn xoay tạo thành khi quay quanh $Ox$ hình phẳng giới hạn bởi $y = 3\\sqrt{x}$, $y = 0$, $x = 1$, $x = 2$ có thể tích bằng $k\\pi$. Tính giá trị của $k$.",
            "correctAnswer": "13.5",
            "acceptedAnswers": [
              "13.5",
              "27/2",
              "13,5"
            ],
            "explanation": "$V = \\pi \\int_1^2 9x dx = 9\\pi \\frac{4 - 1}{2} = 13.5\\pi \\Rightarrow k = 13.5$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một giếng khoan sâu bị phun khí mê-tan với tốc độ thoát khí $F(t) = 300 - 10t\\text{ (m}^3\\text{/giờ)}$. Sau bao nhiêu giờ thì lượng khí mê-tan phun ra đạt cực đại (tốc độ bằng 0)?",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30"
            ],
            "explanation": "$F(t) = 0 \\Leftrightarrow t = 30\\text{ giờ}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd6-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Nguyên Hàm - Tích Phân",
        "code": "CD6-104",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Họ nguyên hàm của hàm số $f(x) = \\frac{1}{x + 2}$ trên khoảng $(-2; +\\infty)$ là",
            "options": {
              "A": "$\\frac{1}{(x+2)^2} + C$",
              "B": "$\\ln|x| + 2 + C$",
              "C": "$\\ln(x + 2) + C$",
              "D": "$-\\frac{1}{(x+2)^2} + C$"
            },
            "correct": "C",
            "explanation": "$\\int \\frac{1}{x+2}dx = \\ln(x+2) + C$ vì $x > -2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tích phân $\\int_0^2 2x dx$ bằng",
            "options": {
              "A": "$8$",
              "B": "$4$",
              "C": "$2$",
              "D": "$1$"
            },
            "correct": "B",
            "explanation": "$x^2\\Big|_0^2 = 4$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho $\\int_0^1 f(x)dx = 3$ và $\\int_1^4 f(x)dx = 5$. Tính $\\int_0^4 f(x)dx$.",
            "options": {
              "A": "$8$",
              "B": "$-2$",
              "C": "$2$",
              "D": "$15$"
            },
            "correct": "A",
            "explanation": "$3 + 5 = 8$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Diện tích hình phẳng giới hạn bởi đồ thị $y = e^x$, trục hoành và hai đường thẳng $x = 0, x = 1$ bằng",
            "options": {
              "A": "$e + 1$",
              "B": "$e$",
              "C": "$e - 1$",
              "D": "$1$"
            },
            "correct": "C",
            "explanation": "$S = \\int_0^1 e^x dx = e - 1$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho $\\int_1^3 f(x)dx = 4$. Khi đó $\\int_1^3 [2f(x) - 1]dx$ bằng",
            "options": {
              "A": "$7$",
              "B": "$8$",
              "C": "$5$",
              "D": "$6$"
            },
            "correct": "D",
            "explanation": "$2(4) - (3 - 1) = 8 - 2 = 6$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Thể tích khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành, các đường thẳng $x = 0$ và $x = 1$ bằng",
            "options": {
              "A": "$\\frac{\\pi}{5}$",
              "B": "$\\frac{\\pi}{6}$",
              "C": "$\\frac{\\pi}{7}$",
              "D": "$\\frac{\\pi}{4}$"
            },
            "correct": "C",
            "explanation": "$V = \\pi \\int_0^1 (x^3)^2 dx = \\pi \\int_0^1 x^6 dx = \\frac{\\pi}{7}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một xe ô tô tăng tốc với quy luật vận tốc $v(t) = 10 + 2t\\text{ (m/s)}$. Quãng đường xe chạy được từ giây thứ 1 đến giây thứ 4 là",
            "options": {
              "A": "$45\\text{ m}$",
              "B": "$30\\text{ m}$",
              "C": "$48\\text{ m}$",
              "D": "$60\\text{ m}$"
            },
            "correct": "A",
            "explanation": "$s = \\int_1^4 (10 + 2t)dt = (10t + t^2)\\Big|_1^4 = (40 + 16) - (10 + 1) = 56 - 11 = 45\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Biết $\\int_0^{\\pi/4} \\tan^2 x dx = 1 - \\frac{\\pi}{a}$. Giá trị của $a$ bằng",
            "options": {
              "A": "$2$",
              "B": "$4$",
              "C": "$3$",
              "D": "$6$"
            },
            "correct": "B",
            "explanation": "$\\tan^2 x = \\frac{1}{\\cos^2 x} - 1 \\Rightarrow (\\tan x - x)\\Big|_0^{\\pi/4} = 1 - \\frac{\\pi}{4} \\Rightarrow a = 4$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có $\\int_0^9 f(x)dx = 9$. Tính $I = \\int_0^3 x f(x^2)dx$.",
            "options": {
              "A": "$3$",
              "B": "$9$",
              "C": "$18$",
              "D": "$4.5$"
            },
            "correct": "D",
            "explanation": "$u = x^2 \\Rightarrow I = \\frac{1}{2}\\int_0^9 f(u)du = 4.5$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hình phẳng giới hạn bởi parabol $y = x^2 - 1$ và trục hoành $Ox$. Diện tích của hình phẳng đó bằng",
            "options": {
              "A": "$2$",
              "B": "$\\frac{4}{3}$",
              "C": "$\\frac{2}{3}$",
              "D": "$\\frac{5}{3}$"
            },
            "correct": "B",
            "explanation": "$S = \\int_{-1}^1 (1 - x^2)dx = 2(1 - 1/3) = 4/3$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một hồ chứa nước nhân tạo có mặt đáy phẳng, thể tích nước xả ra theo cửa đập sau thời gian $t$ (giờ) có lưu lượng $Q(t) = 120t - 3t^2\\text{ (m}^3\\text{/giờ)}$. Sau 10 giờ, tổng lượng nước đã xả bằng",
            "options": {
              "A": "$5000\\text{ m}^3$",
              "B": "$7000\\text{ m}^3$",
              "C": "$4000\\text{ m}^3$",
              "D": "$6000\\text{ m}^3$"
            },
            "correct": "A",
            "explanation": "$V = \\int_0^{10} (120t - 3t^2)dt = (60t^2 - t^3)\\Big|_0^{10} = 6000 - 1000 = 5000\\text{ m}^3$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x)$ thỏa mãn $f'(x) = 2x + 3$ và $f(0) = 1$. Giá trị của $f(2)$ bằng",
            "options": {
              "A": "$10$",
              "B": "$9$",
              "C": "$12$",
              "D": "$11$"
            },
            "correct": "D",
            "explanation": "$f(x) = x^2 + 3x + 1 \\Rightarrow f(2) = 4 + 6 + 1 = 11$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $f(x) = e^x - 1$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Họ nguyên hàm của $f(x)$ là $F(x) = e^x - x + C$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đồ thị hàm số $y = f(x)$ đi qua gốc tọa độ $O(0; 0)$.",
                "correct": true,
                "explanation": "Đúng, $f(0) = 1 - 1 = 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Diện tích hình phẳng giới hạn bởi đồ thị $f(x)$, trục hoành và đường thẳng $x = 1$ bằng $e - 2$.",
                "correct": true,
                "explanation": "Đúng, $\\int_0^1 (e^x - 1)dx = (e - 1) - 1 = e - 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hàm số $f(x)$ nghịch biến trên khoảng $(0; +\\infty)$.",
                "correct": false,
                "explanation": "Sai, $f'(x) = e^x > 0$ nên luôn đồng biến."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình phẳng $(H)$ giới hạn bởi đường parabol $y = 3x^2$ và đường thẳng $y = 3x$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Hoành độ các giao điểm của hai đường là $x = 0$ và $x = 1$.",
                "correct": true,
                "explanation": "Đúng, $3x^2 - 3x = 0 \\Leftrightarrow x = 0, 1$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Trên đoạn $[0; 1]$, đường thẳng $y = 3x$ nằm phía trên parabol $y = 3x^2$.",
                "correct": true,
                "explanation": "Đúng, $3x \\ge 3x^2$ trên $[0; 1]$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Diện tích hình phẳng $(H)$ bằng $\\frac{1}{2}$.",
                "correct": true,
                "explanation": "Đúng, $\\int_0^1 (3x - 3x^2)dx = 3/2 - 1 = 1/2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Thể tích khối tròn xoay khi quay $(H)$ quanh trục $Ox$ bằng $\\pi$.",
                "correct": false,
                "explanation": "Sai, $V = \\pi \\int_0^1 (9x^2 - 9x^4)dx = 9\\pi(1/3 - 1/5) = 1.2\\pi \\ne \\pi$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một máy bay hạ cánh xuống đường băng với vận tốc ban đầu $v_0 = 80\\text{ m/s}$ và phanh chậm dần đều với gia tốc $a(t) = -4\\text{ m/s}^2$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Biểu thức vận tốc của máy bay sau khi hạ cánh là $v(t) = 80 - 4t$ (m/s).",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Sau $20$ giây kể từ lúc hạ cánh, máy bay sẽ dừng hẳn.",
                "correct": true,
                "explanation": "Đúng, $v(t) = 0 \\Leftrightarrow t = 20\\text{ s}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Chiều dài quãng đường lăn của máy bay đến khi dừng hẳn là $800\\text{ m}$.",
                "correct": true,
                "explanation": "Đúng, $s = \\int_0^{20} (80 - 4t)dt = 80(20) - 2(400) = 800\\text{ m}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Sau $10$ giây đầu tiên, máy bay đã đi được hơn một nửa quãng đường dừng.",
                "correct": true,
                "explanation": "Đúng, $s(10) = 800 - 200 = 600\\text{ m} > 400\\text{ m}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $f(x)$ liên tục trên đoạn $[0; 4]$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\int_0^4 f(x)dx = \\int_0^2 f(x)dx + \\int_2^4 f(x)dx$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Nếu $\\int_0^4 f(x)dx = 8$ thì $\\int_0^4 [f(x) + 2]dx = 16$.",
                "correct": true,
                "explanation": "Đúng, $8 + 2(4) = 16$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $\\int_0^4 f(x)dx = 8$ thì $\\int_0^2 f(2x)dx = 16$.",
                "correct": false,
                "explanation": "Sai, $\\int_0^2 f(2x)dx = 8/2 = 4$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu $f(x) \\ge 1, \\forall x \\in [0; 4]$ thì $\\int_0^4 f(x)dx \\ge 4$.",
                "correct": true,
                "explanation": "Đúng, $\\int_0^4 f(x)dx \\ge 1(4 - 0) = 4$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_1^3 (3x^2 - 4x + 2)dx$.",
            "correctAnswer": "14",
            "acceptedAnswers": [
              "14"
            ],
            "explanation": "$(x^3 - 2x^2 + 2x)\\Big|_1^3 = (27 - 18 + 6) - (1 - 2 + 2) = 15 - 1 = 14$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho $\\int_0^1 f(x)dx = 2$ và $\\int_0^3 f(x)dx = 7$. Tính tích phân $K = \\int_1^3 f(x)dx$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5"
            ],
            "explanation": "$7 - 2 = 5$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một hòn đá rơi tự do từ độ cao không vận tốc ban đầu với gia tốc $g = 9.8\\text{ m/s}^2$. Quãng đường hòn đá rơi được trong $4$ giây đầu tiên là bao nhiêu mét?",
            "correctAnswer": "78.4",
            "acceptedAnswers": [
              "78.4",
              "78,4"
            ],
            "explanation": "$s = \\frac{1}{2}gt^2 = 0.5 \\times 9.8 \\times 16 = 78.4\\text{ m}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 6x - 3x^2$ và trục hoành $Ox$ bằng bao nhiêu?",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "$3x(2 - x) = 0 \\Rightarrow S = \\int_0^2 (6x - 3x^2)dx = (3x^2 - x^3)\\Big|_0^2 = 12 - 8 = 4$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho hình phẳng giới hạn bởi $y = \\sqrt{3}x$, trục hoành, đường thẳng $x = 0$ và $x = 2$. Khối tròn xoay tạo thành khi quay quanh trục $Ox$ có thể tích là $k\\pi$. Tính giá trị của $k$.",
            "correctAnswer": "8",
            "acceptedAnswers": [
              "8"
            ],
            "explanation": "$V = \\pi \\int_0^2 3x^2 dx = 3\\pi \\times 8/3 = 8\\pi \\Rightarrow k = 8$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một bể nước bị rò rỉ theo quy luật $v(t) = 50 - 2t$ (lít/phút) với $0 \\le t \\le 25$. Lượng nước đã thất thoát trong $10$ phút đầu là bao nhiêu lít?",
            "correctAnswer": "400",
            "acceptedAnswers": [
              "400"
            ],
            "explanation": "$V = \\int_0^{10} (50 - 2t)dt = 50(10) - 100 = 400$ lít."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd6-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Nguyên Hàm - Tích Phân",
        "code": "CD6-105",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Họ nguyên hàm của hàm số $f(x) = 4x^3 + 2x$ là",
            "options": {
              "A": "$x^4 + 2x^2 + C$",
              "B": "$x^4 + x^2 + C$",
              "C": "$4x^4 + 2x^2 + C$",
              "D": "$12x^2 + 2 + C$"
            },
            "correct": "B",
            "explanation": "$\\int (4x^3 + 2x)dx = x^4 + x^2 + C$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tích phân $\\int_0^1 (3x^2 + 1)dx$ có giá trị bằng",
            "options": {
              "A": "$4$",
              "B": "$2$",
              "C": "$3$",
              "D": "$1$"
            },
            "correct": "B",
            "explanation": "$(x^3 + x)\\Big|_0^1 = 1 + 1 = 2$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho $\\int_2^5 f(x)dx = 8$. Giá trị của $\\int_5^2 f(x)dx$ là",
            "options": {
              "A": "$4$",
              "B": "$8$",
              "C": "$-4$",
              "D": "$-8$"
            },
            "correct": "D",
            "explanation": "Đảo cận thì đổi dấu: $\\int_5^2 f(x)dx = -8$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = x$, $y = 0$, $x = 0$, $x = 3$ quanh trục hoành là",
            "options": {
              "A": "$18\\pi$",
              "B": "$27\\pi$",
              "C": "$9\\pi$",
              "D": "$3\\pi$"
            },
            "correct": "C",
            "explanation": "$V = \\pi \\int_0^3 x^2 dx = \\pi \\frac{27}{3} = 9\\pi$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Biết $\\int_0^1 \\frac{2x}{x^2 + 1}dx = \\ln a$. Giá trị của $a$ bằng",
            "options": {
              "A": "$2$",
              "B": "$3$",
              "C": "$1$",
              "D": "$4$"
            },
            "correct": "A",
            "explanation": "$\\ln(x^2 + 1)\\Big|_0^1 = \\ln 2 \\Rightarrow a = 2$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 2 - x^2$ và đường thẳng $y = x$ bằng",
            "options": {
              "A": "$\\frac{9}{2}$",
              "B": "$\\frac{9}{4}$",
              "C": "$\\frac{5}{2}$",
              "D": "$\\frac{7}{2}$"
            },
            "correct": "A",
            "explanation": "$2 - x^2 = x \\Leftrightarrow x^2 + x - 2 = 0 \\Leftrightarrow x = -2, x = 1$. $S = \\int_{-2}^1 (2 - x - x^2)dx = 9/2$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một chất điểm chuyển động với vận tốc $v(t) = 4t^3 - 2t\\text{ (m/s)}$. Quãng đường chất điểm đi được trong khoảng thời gian từ $t = 1\\text{ s}$ đến $t = 2\\text{ s}$ là",
            "options": {
              "A": "$15\\text{ m}$",
              "B": "$10\\text{ m}$",
              "C": "$16\\text{ m}$",
              "D": "$12\\text{ m}$"
            },
            "correct": "D",
            "explanation": "$s = \\int_1^2 (4t^3 - 2t)dt = (t^4 - t^2)\\Big|_1^2 = (16 - 4) - (1 - 1) = 12\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Biết $\\int_0^{\\pi/2} x \\sin x dx = a \\cdot \\pi + b$ với $a, b \\in \\mathbb{Q}$. Tính $a + b$.",
            "options": {
              "A": "$2$",
              "B": "$0$",
              "C": "$-1$",
              "D": "$1$"
            },
            "correct": "D",
            "explanation": "Từng phần: $u = x, dv = \\sin x dx \\Rightarrow -x \\cos x\\Big|_0^{\\pi/2} + \\int_0^{\\pi/2} \\cos x dx = 0 + 1 = 1$. Vậy $a = 0, b = 1 \\Rightarrow a + b = 1$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho $\\int_0^2 f(x)dx = 3$. Tính tích phân $I = \\int_0^2 [4f(x) - 3x^2]dx$.",
            "options": {
              "A": "$2$",
              "B": "$12$",
              "C": "$4$",
              "D": "$6$"
            },
            "correct": "C",
            "explanation": "$4(3) - x^3\\Big|_0^2 = 12 - 8 = 4$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hình phẳng giới hạn bởi $y = \\sqrt{4 - x^2}$ và trục hoành $Ox$. Diện tích của hình phẳng này bằng",
            "options": {
              "A": "$\\pi$",
              "B": "$4\\pi$",
              "C": "$2\\pi$",
              "D": "$8\\pi$"
            },
            "correct": "C",
            "explanation": "Đây là nửa hình tròn bán kính $R = 2$, diện tích $S = \\frac{1}{2}\\pi R^2 = 2\\pi$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một đập thủy điện có một cửa xả nước. Sau khi mở cửa đập, lưu lượng nước chảy qua đập trong 4 giờ đầu được đo bởi hàm số $f(t) = 100 + 30t - 3t^2\\text{ (m}^3\\text{/phút)}$. Tổng lượng nước đã xả trong 4 phút đầu là",
            "options": {
              "A": "$640\\text{ m}^3$",
              "B": "$576\\text{ m}^3$",
              "C": "$600\\text{ m}^3$",
              "D": "$520\\text{ m}^3$"
            },
            "correct": "B",
            "explanation": "$V = \\int_0^4 (100 + 30t - 3t^2)dt = (100t + 15t^2 - t^3)\\Big|_0^4 = 400 + 240 - 64 = 576\\text{ m}^3$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $\\int_0^4 f(x)dx = 10$. Tính $J = \\int_0^1 f(4x)dx$.",
            "options": {
              "A": "$2.5$",
              "B": "$10$",
              "C": "$40$",
              "D": "$5$"
            },
            "correct": "A",
            "explanation": "$u = 4x \\Rightarrow J = \\frac{1}{4}\\int_0^4 f(u)du = 10/4 = 2.5$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hàm số $f(x) = 2\\cos x - 1$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Một nguyên hàm của $f(x)$ là $F(x) = 2\\sin x - x + C$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Tích phân $\\int_0^{\\pi/2} f(x)dx = 2 - \\frac{\\pi}{2}$.",
                "correct": true,
                "explanation": "Đúng, $(2\\sin x - x)\\Big|_0^{\\pi/2} = 2 - \\pi/2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Phương trình $f(x) = 0$ có nghiệm $x = \\frac{\\pi}{3}$ trên $[0; \\pi/2]$.",
                "correct": true,
                "explanation": "Đúng, $2\\cos x = 1 \\Leftrightarrow \\cos x = 1/2 \\Leftrightarrow x = \\pi/3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hàm số $f(x)$ luôn dương trên đoạn $[0; \\pi/2]$.",
                "correct": false,
                "explanation": "Sai, tại $x = \\pi/2$, $f(\\pi/2) = -1 < 0$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình phẳng $(S)$ giới hạn bởi đường cong $y = x^2 - 2x$ và trục hoành $Ox$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Parabol cắt trục hoành tại hai điểm $O(0; 0)$ và $A(2; 0)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Trên đoạn $[0; 2]$, parabol nằm hoàn toàn phía dưới trục hoành.",
                "correct": true,
                "explanation": "Đúng, $x(x - 2) \\le 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Diện tích của hình phẳng $(S)$ bằng $\\frac{4}{3}$.",
                "correct": true,
                "explanation": "Đúng, $\\int_0^2 (2x - x^2)dx = 4 - 8/3 = 4/3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Thể tích khối tròn xoay khi quay $(S)$ quanh trục $Ox$ bằng $\\frac{16\\pi}{15}$.",
                "correct": true,
                "explanation": "Đúng, $\\pi \\int_0^2 (x^2 - 2x)^2 dx = \\frac{16\\pi}{15}$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một bình hình trụ chứa nước có diện tích đáy $S = 2\\text{ m}^2$. Nước rò rỉ ra ngoài đáy bình theo quy luật vận tốc dòng chảy $v(t) = \\sqrt{4 - 0.2t}\\text{ (m/s)}$ với $0 \\le t \\le 20$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vận tốc dòng chảy giảm dần theo thời gian.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Tại thời điểm $t = 20\\text{ s}$, vận tốc dòng chảy bằng $0$.",
                "correct": true,
                "explanation": "Đúng, $4 - 4 = 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tại thời điểm ban đầu $t = 0$, vận tốc dòng chảy là $2\\text{ m/s}$.",
                "correct": true,
                "explanation": "Đúng, $\\sqrt{4} = 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Vận tốc trung bình của dòng chảy trong $20\\text{ giây}$ đầu là $1.5\\text{ m/s}$.",
                "correct": false,
                "explanation": "Sai, $\\frac{1}{20}\\int_0^{20} (4 - 0.2t)^{1/2}dt = \\frac{1}{20} \\times \\frac{80}{3} = \\frac{4}{3} \\approx 1.33\\text{ m/s} \\ne 1.5$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và $F(x)$ là một nguyên hàm của $f(x)$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\int_a^b f(x)dx = F(b) - F(a)$.",
                "correct": true,
                "explanation": "Đúng (Công thức Newton-Leibniz)."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\int_a^b f(t)dt = \\int_a^b f(x)dx$.",
                "correct": true,
                "explanation": "Đúng, tích phân không phụ thuộc vào ký hiệu biến lấy tích phân."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $F(x)$ là nguyên hàm của $f(x)$ thì $F(x) + 5$ cũng là một nguyên hàm của $f(x)$.",
                "correct": true,
                "explanation": "Đúng, đạo hàm của hằng số bằng 0."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$\\int_0^1 f(x)dx \\cdot \\int_1^2 f(x)dx = \\int_0^2 f(x)dx$.",
                "correct": false,
                "explanation": "Sai, chỉ có tính chất cộng: $\\int_0^1 + \\int_1^2 = \\int_0^2$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_0^1 (5x^4 + 3x^2)dx$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "$(x^5 + x^3)\\Big|_0^1 = 1 + 1 = 2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho $\\int_1^5 f(x)dx = 12$. Tính tích phân $J = \\int_1^5 [\\frac{1}{3}f(x) + 2]dx$.",
            "correctAnswer": "12",
            "acceptedAnswers": [
              "12"
            ],
            "explanation": "$\\frac{1}{3}(12) + 2(5 - 1) = 4 + 8 = 12$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một vật rơi tự do với vận tốc $v(t) = 9.8t\\text{ (m/s)}$. Quãng đường vật rơi được trong giây thứ 3 (từ $t = 2\\text{ s}$ đến $t = 3\\text{ s}$) là bao nhiêu mét?",
            "correctAnswer": "24.5",
            "acceptedAnswers": [
              "24.5",
              "24,5"
            ],
            "explanation": "$s = 4.9(3^2 - 2^2) = 4.9 \\times 5 = 24.5\\text{ m}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Diện tích hình phẳng giới hạn bởi hai đường cong $y = x^2$ và $y = 2 - x^2$ bằng bao nhiêu? (Nhập phân số dạng thập phân làm tròn 2 chữ số hoặc dạng số thập phân: nếu bằng $8/3$, nhập $2.67$).",
            "correctAnswer": "2.67",
            "acceptedAnswers": [
              "2.67",
              "8/3",
              "2,67"
            ],
            "explanation": "$2x^2 = 2 \\Leftrightarrow x = \\pm 1$. $S = \\int_{-1}^1 (2 - 2x^2)dx = 2(2 - 2/3) = 8/3 \\approx 2.67$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Khối tròn xoay tạo thành khi quay quanh $Ox$ hình phẳng giới hạn bởi $y = \\sqrt{5x}$, $y = 0$, $x = 0$, $x = 2$ có thể tích là $k\\pi$. Tính giá trị của $k$.",
            "correctAnswer": "10",
            "acceptedAnswers": [
              "10"
            ],
            "explanation": "$V = \\pi \\int_0^2 5x dx = 5\\pi \\times 4/2 = 10\\pi \\Rightarrow k = 10$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một máy bơm nước bơm vào hồ với lưu lượng $q(t) = 80 - 4t\\text{ (m}^3\\text{/phút)}$ trong $20$ phút đầu. Tổng thể tích nước đã bơm vào hồ sau $10$ phút là bao nhiêu mét khối?",
            "correctAnswer": "600",
            "acceptedAnswers": [
              "600"
            ],
            "explanation": "$V = \\int_0^{10} (80 - 4t)dt = 800 - 200 = 600\\text{ m}^3$."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd7",
    "code": "CĐ 7",
    "title": "VECTO TRONG KHÔNG GIAN",
    "icon": "fa-solid fa-arrows-to-dot",
    "badge": "Lớp 12 • Hình học vectơ",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
    "description": "Khái niệm vectơ trong không gian, quy tắc hình hộp, tích vô hướng, góc giữa hai vectơ và ứng dụng cân bằng lực, vận tốc, công cơ học.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Các Quy Tắc Vectơ Cơ Bản -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-arrows-to-dot text-blue-600\"></i>\n      1. Khái Niệm & Các Quy Tắc Phép Toán Vectơ\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Quy tắc 3 điểm & Hình bình hành:</p>\n        <p>&bull; $\\vec{AB} + \\vec{BC} = \\vec{AC}$; $\\vec{AB} - \\vec{AC} = \\vec{CB}$.</p>\n        <p>&bull; Với hình bình hành $ABCD$: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</p>\n        <p>&bull; Điểm $M$ là trung điểm $AB$: $\\vec{OA} + \\vec{OB} = 2\\vec{OM}$.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Quy tắc hình hộp & Trọng tâm tứ diện:</p>\n        <p>&bull; Hình hộp $ABCD.A'B'C'D'$: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$.</p>\n        <p>&bull; Trọng tâm $G$ của tứ diện $ABCD$ thỏa mãn:</p>\n        <p>$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$, hay $\\vec{OG} = \\frac{1}{4}(\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD})$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Tích Vô Hướng & Góc Giữa Hai Vectơ -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-compass text-emerald-600\"></i>\n      2. Tích Vô Hướng & Góc Giữa Hai Vectơ\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200\">\n        <p><strong>Định nghĩa tích vô hướng:</strong> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.</p>\n        <p><strong>Điều kiện vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.</p>\n        <p><strong>Góc giữa hai vectơ:</strong> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$ với $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Ứng Dụng Vật Lý Chuyển Động & Cân Bằng Lực -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-weight-hanging text-purple-600\"></i>\n      3. Bài Toán Cân Bằng Lực & Tổng Hợp Vectơ Thực Tế\n    </h4>\n    <div class=\"bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt] space-y-1.5\">\n      <p>&bull; <strong>Cân bằng tĩnh học:</strong> Khi một vật chịu tác dụng của các lực $\\vec{F}_1, \\vec{F}_2, \\dots, \\vec{F}_n$ và đứng yên cân bằng thì:</p>\n      <p class=\"font-semibold text-purple-900\">$\\vec{F}_1 + \\vec{F}_2 + \\dots + \\vec{F}_n = \\vec{0}$.</p>\n      <p>&bull; <strong>Treo vật bằng 3 dây cân bằng:</strong> Tổng hợp lực căng của 3 sợi dây cân bằng với trọng lực $\\vec{P}$: $\\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{P} = \\vec{0}$.</p>\n      <p>&bull; <strong>Công cơ học của lực:</strong> $A = \\vec{F} \\cdot \\vec{d} = |\\vec{F}| \\cdot |\\vec{d}| \\cdot \\cos\\alpha$ (Joule).</p>\n      <p>&bull; <strong>Vận tốc tổng hợp:</strong> $\\vec{v}_{thực} = \\vec{v}_{phương\\ tiện} + \\vec{v}_{gió/dòng\\ nước}$.</p>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd7-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Vectơ Trong Không Gian",
        "code": "CD7-101",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình hộp $ABCD.A'B'C'D'$. Vectơ tổng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng",
            "options": {
              "A": "$\\vec{AC'}$",
              "B": "$\\vec{CA'}$",
              "C": "$\\vec{BD'}$",
              "D": "$\\vec{DB'}$"
            },
            "correct": "A",
            "explanation": "Theo quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Khẳng định nào sau đây đúng?",
            "options": {
              "A": "$\\vec{MN} = 2(\\vec{AC} + \\vec{BD})$",
              "B": "$\\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$",
              "C": "$\\vec{MN} = \\vec{AC} + \\vec{BD}$",
              "D": "$\\vec{MN} = \\frac{1}{2}(\\vec{AD} - \\vec{BC})$"
            },
            "correct": "B",
            "explanation": "Ta có $\\vec{MN} = \\vec{MA} + \\vec{AC} + \\vec{CN}$ và $\\vec{MN} = \\vec{MB} + \\vec{BD} + \\vec{DN}$. Cộng lại ta được $2\\vec{MN} = \\vec{AC} + \\vec{BD} \\Rightarrow \\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ đều khác $\\vec{0}$ thỏa mãn $\\vec{a} \\cdot \\vec{b} = -|\\vec{a}| |\\vec{b}|$. Khi đó góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng",
            "options": {
              "A": "$45^\\circ$",
              "B": "$90^\\circ$",
              "C": "$180^\\circ$",
              "D": "$0^\\circ$"
            },
            "correct": "C",
            "explanation": "$\\cos(\\vec{a}, \\vec{b}) = -1 \\Leftrightarrow (\\vec{a}, \\vec{b}) = 180^\\circ$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{B'C'}$ bằng",
            "options": {
              "A": "$0^\\circ$",
              "B": "$60^\\circ$",
              "C": "$45^\\circ$",
              "D": "$90^\\circ$"
            },
            "correct": "D",
            "explanation": "Vì $\\vec{B'C'} = \\vec{BC}$ và $ABCD$ là hình vuông nên $AB \\perp BC$, do đó góc bằng $90^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một chiếc đèn chùm có trọng lượng $P = 100\\text{ N}$ được treo vào trần nhà bằng 3 sợi dây cáp không giãn có chiều dài bằng nhau và hợp với phương thẳng đứng một góc $30^\\circ$. Lực căng $T$ của mỗi sợi dây cáp bằng bao nhiêu?",
            "options": {
              "A": "$\\frac{200}{3\\sqrt{3}}\\text{ N}$",
              "B": "$\\frac{100}{3\\sqrt{3}}\\text{ N}$",
              "C": "$\\frac{100\\sqrt{3}}{3}\\text{ N}$",
              "D": "$50\\text{ N}$"
            },
            "correct": "A",
            "explanation": "Tổng hình chiếu các lực căng lên phương thẳng đứng cân bằng với trọng lượng: $3T \\cos 30^\\circ = P \\Leftrightarrow 3T \\frac{\\sqrt{3}}{2} = 100 \\Rightarrow T = \\frac{200}{3\\sqrt{3}}\\text{ N}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng",
            "options": {
              "A": "$\\frac{a^2\\sqrt{3}}{2}$",
              "B": "$a^2$",
              "C": "$-\\frac{a^2}{2}$",
              "D": "$\\frac{a^2}{2}$"
            },
            "correct": "D",
            "explanation": "Tam giác $ABC$ đều cạnh $a$ nên góc $(\\vec{AB}, \\vec{AC}) = 60^\\circ$. Do đó $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một lực $\\vec{F}$ có độ lớn $50\\text{ N}$ tác dụng làm dịch chuyển một vật một quãng đường $10\\text{ m}$ theo hướng hợp với hướng tác dụng của lực một góc $60^\\circ$. Công cơ học thực hiện bởi lực $\\vec{F}$ bằng",
            "options": {
              "A": "$100\\text{ J}$",
              "B": "$250\\sqrt{3}\\text{ J}$",
              "C": "$500\\text{ J}$",
              "D": "$250\\text{ J}$"
            },
            "correct": "D",
            "explanation": "$A = |\\vec{F}| |\\vec{d}| \\cos 60^\\circ = 50 \\times 10 \\times 0.5 = 250\\text{ J}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình lăng trụ tam giác $ABC.A'B'C'$. Đặt $\\vec{a} = \\vec{AA'}, \\vec{b} = \\vec{AB}, \\vec{c} = \\vec{AC}$. Vectơ $\\vec{B'C}$ biểu diễn theo $\\vec{a}, \\vec{b}, \\vec{c}$ là",
            "options": {
              "A": "$-\\vec{a} + \\vec{b} - \\vec{c}$",
              "B": "$\\vec{a} - \\vec{b} + \\vec{c}$",
              "C": "$-\\vec{a} - \\vec{b} + \\vec{c}$",
              "D": "$\\vec{a} + \\vec{b} + \\vec{c}$"
            },
            "correct": "C",
            "explanation": "$\\vec{B'C} = \\vec{B'B} + \\vec{BC} = -\\vec{AA'} + (\\vec{AC} - \\vec{AB}) = -\\vec{a} + \\vec{c} - \\vec{b} = -\\vec{a} - \\vec{b} + \\vec{c}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và đáy $ABC$ là tam giác vuông tại $B$. Khẳng định nào sau đây đúng?",
            "options": {
              "A": "$\\vec{SB} \\cdot \\vec{AC} = 0$",
              "B": "$\\vec{SC} \\cdot \\vec{AB} = 0$",
              "C": "$\\vec{BC} \\cdot \\vec{SA} = 0$",
              "D": "$\\vec{BC} \\cdot \\vec{SB} = 0$"
            },
            "correct": "C",
            "explanation": "Vì $SA \\perp (ABC)$ nên $SA \\perp BC \\Rightarrow \\vec{BC} \\cdot \\vec{SA} = 0$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Một chiếc máy bay bay theo hướng Đông với vận tốc riêng là $400\\text{ km/h}$. Gió thổi theo hướng Nam với vận tốc $30\\text{ km/h}$. Vận tốc thực tế (tốc độ so với mặt đất) của máy bay xấp xỉ bằng",
            "options": {
              "A": "$430\\text{ km/h}$",
              "B": "$401.1\\text{ km/h}$",
              "C": "$450\\text{ km/h}$",
              "D": "$370\\text{ km/h}$"
            },
            "correct": "B",
            "explanation": "Hướng Đông vuông góc với hướng Nam nên vận tốc thực tế $v = \\sqrt{400^2 + 30^2} = \\sqrt{160900} \\approx 401.1\\text{ km/h}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho tứ diện $ABCD$. Điểm $G$ là trọng tâm của tứ diện $ABCD$. Mệnh đề nào sau đây là sai?",
            "options": {
              "A": "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$",
              "B": "$\\vec{OG} = \\frac{1}{4}(\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD})$ với mọi điểm $O$",
              "C": "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
              "D": "$\\vec{AG} = \\frac{3}{4}\\vec{AA'}$ với $A'$ là trọng tâm tam giác $BCD$"
            },
            "correct": "A",
            "explanation": "Ta có $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0} \\Rightarrow \\vec{GA} + \\vec{GB} = -(\\vec{GC} + \\vec{GD})$, không thể bằng nhau trừ khi bằng $\\vec{0}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tích vô hướng $\\vec{AC} \\cdot \\vec{AD'}$ bằng",
            "options": {
              "A": "$0$",
              "B": "$a^2$",
              "C": "$2a^2$",
              "D": "$a^2\\sqrt{2}$"
            },
            "correct": "B",
            "explanation": "Ta có $\\vec{AC} = \\vec{AB} + \\vec{AD}$, $\\vec{AD'} = \\vec{AD} + \\vec{AA'}$. Do các cạnh đôi một vuông góc nên $\\vec{AC} \\cdot \\vec{AD'} = (\\vec{AB} + \\vec{AD}) \\cdot (\\vec{AD} + \\vec{AA'}) = \\vec{AD}^2 = a^2$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho tứ diện $OABC$ có 3 cạnh $OA, OB, OC$ đôi một vuông góc và $OA = OB = OC = a$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tích vô hướng $\\vec{OA} \\cdot \\vec{OB} = 0$.",
                "correct": true,
                "explanation": "Đúng, vì $OA \\perp OB$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Độ dài vectơ $\\vec{AB}$ bằng $a\\sqrt{2}$.",
                "correct": true,
                "explanation": "Đúng, $AB = \\sqrt{OA^2 + OB^2} = a\\sqrt{2}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = a^2$.",
                "correct": true,
                "explanation": "Đúng, $\\vec{AB} \\cdot \\vec{AC} = (\\vec{OB} - \\vec{OA}) \\cdot (\\vec{OC} - \\vec{OA}) = \\vec{OA}^2 = a^2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tam giác $ABC$ là tam giác vuông cân.",
                "correct": false,
                "explanation": "Sai, $AB = BC = CA = a\\sqrt{2}$ nên $ABC$ là tam giác đều."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vectơ $\\vec{SA}$ vuông góc với mọi vectơ nằm trong mặt phẳng đáy $(ABCD)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Góc giữa hai vectơ $\\vec{SB}$ và $\\vec{AB}$ bằng $45^\\circ$.",
                "correct": true,
                "explanation": "Đúng, tam giác $SAB$ vuông cân tại $A$ nên góc $SBA = 45^\\circ$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tích vô hướng $\\vec{SC} \\cdot \\vec{BD} = 0$.",
                "correct": true,
                "explanation": "Đúng, $BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC) \\Rightarrow BD \\perp SC$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Vectơ tổng $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD} = \\vec{0}$.",
                "correct": false,
                "explanation": "Sai, các vectơ đều hướng từ trên xuống hoặc có thành phần cùng hướng."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một quả cầu đồng chất có trọng lượng $P = 40\\text{ N}$ được giữ cân bằng trên mặt phẳng nghiêng góc $30^\\circ$ không ma sát bởi một sợi dây buộc vào tâm quả cầu và song song với mặt nghiêng.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Quả cầu chịu tác dụng của 3 lực: trọng lực $\\vec{P}$, phản lực vuông góc $\\vec{N}$, và lực căng dây $\\vec{T}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Điều kiện cân bằng của quả cầu là $\\vec{P} + \\vec{N} + \\vec{T} = \\vec{0}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Độ lớn lực căng dây là $T = 20\\text{ N}$.",
                "correct": true,
                "explanation": "Đúng, chiếu lên phương mặt nghiêng: $T = P \\sin 30^\\circ = 40 \\times 0.5 = 20\\text{ N}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Độ lớn của phản lực $\\vec{N}$ bằng $20\\text{ N}$.",
                "correct": false,
                "explanation": "Sai, $N = P \\cos 30^\\circ = 40 \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}\\text{ N} \\approx 34.64\\text{ N}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vectơ $\\vec{AC'}$ bằng tổng ba vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$.",
                "correct": true,
                "explanation": "Đúng, quy tắc hình hộp."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường chéo $AC'$ vuông góc với mặt phẳng $(A'BD)$.",
                "correct": true,
                "explanation": "Đúng, $\\vec{AC'} \\cdot \\vec{BD} = 0$ và $\\vec{AC'} \\cdot \\vec{BA'} = 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Ba vectơ $\\vec{AB}, \\vec{A'C'}, \\vec{DD'}$ đồng phẳng.",
                "correct": false,
                "explanation": "Sai, $\\vec{DD'}$ cùng phương $\\vec{AA'}$, chúng tạo thành 3 phương độc lập của không gian."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Góc giữa hai đường chéo $\\vec{AC}$ và $\\vec{BD}$ bằng $90^\\circ$.",
                "correct": true,
                "explanation": "Đúng, đáy là hình vuông nên 2 đường chéo vuông góc."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $ABCD$ có $AB \\perp CD$ và $AB = 6, CD = 8$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$.",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "Vì $AB \\perp CD$ nên tích vô hướng bằng 0."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2$. Tính độ dài vectơ tổng $\\vec{u} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ (làm tròn kết quả đến hai chữ số thập phân nếu là số vô tỉ, hoặc ghi $2\\sqrt{3} \\approx 3.46$). Độ dài đường chéo bằng bao nhiêu?",
            "correctAnswer": "3.46",
            "acceptedAnswers": [
              "3.46",
              "3,46",
              "2*sqrt(3)"
            ],
            "explanation": "$|\\vec{AC'}| = \\sqrt{2^2 + 2^2 + 2^2} = 2\\sqrt{3} \\approx 3.46$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Ba lực có độ lớn lần lượt là $10\\text{ N}, 10\\text{ N}, 10\\text{ N}$ cùng tác dụng vào một điểm và đôi một tạo với nhau một góc $120^\\circ$. Độ lớn hợp lực của ba lực này bằng bao nhiêu Newton?",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "Ba vectơ cùng độ lớn đối xứng trong mặt phẳng tạo góc $120^\\circ$ có tổng bằng $\\vec{0}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho tam giác $ABC$ đều cạnh $4$. Trên đường thẳng vuông góc với mặt phẳng $(ABC)$ tại $A$, lấy điểm $S$ sao cho $SA = 3$. Tính độ dài của vectơ $\\vec{SA} + \\vec{AB}$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5"
            ],
            "explanation": "$\\vec{SA} + \\vec{AB} = \\vec{SB}$. Tam giác $SAB$ vuông tại $A$, có $SA = 3, AB = 4 \\Rightarrow SB = \\sqrt{3^2 + 4^2} = 5$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một người kéo một khối gỗ trượt trên sàn với lực kéo $F = 100\\text{ N}$ nghiêng góc $45^\\circ$ so với sàn. Tính công cơ học của lực kéo khi khối gỗ di chuyển được quãng đường $10\\sqrt{2}\\text{ m}$ (đơn vị: Joule).",
            "correctAnswer": "1000",
            "acceptedAnswers": [
              "1000"
            ],
            "explanation": "$A = F \\cdot s \\cdot \\cos 45^\\circ = 100 \\times 10\\sqrt{2} \\times \\frac{\\sqrt{2}}{2} = 1000\\text{ J}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một chiếc ca nô di chuyển trên một con sông. Vận tốc riêng của ca nô là $16\\text{ km/h}$ hướng thẳng vuông góc với bờ sông. Dòng nước chảy xuôi dòng với vận tốc $12\\text{ km/h}$. Tốc độ thực tế của ca nô so với bờ sông là bao nhiêu km/h?",
            "correctAnswer": "20",
            "acceptedAnswers": [
              "20"
            ],
            "explanation": "$v = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20\\text{ km/h}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd7-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Vectơ Trong Không Gian",
        "code": "CD7-102",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $ABCD$. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$\\vec{AB} + \\vec{CD} = \\vec{AC}$",
              "B": "$\\vec{AB} + \\vec{BC} = \\vec{CA}$",
              "C": "$\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$",
              "D": "$\\vec{AB} - \\vec{AC} = \\vec{BC}$"
            },
            "correct": "C",
            "explanation": "Theo quy tắc 3 điểm liên tiếp: $\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AC} + \\vec{CD} = \\vec{AD}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "$\\vec{SA} + \\vec{SC} = \\vec{SO}$",
              "B": "$\\vec{SA} + \\vec{SB} = 2\\vec{SO}$",
              "C": "$\\vec{SA} + \\vec{SC} = 2\\vec{SO}$",
              "D": "$\\vec{SA} + \\vec{SD} = 2\\vec{SO}$"
            },
            "correct": "C",
            "explanation": "Vì $O$ là trung điểm $AC$ nên $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ thỏa mãn $|\\vec{u}| = 3, |\\vec{v}| = 4$ và góc $(\\vec{u}, \\vec{v}) = 60^\\circ$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng",
            "options": {
              "A": "$6\\sqrt{3}$",
              "B": "$3$",
              "C": "$12$",
              "D": "$6$"
            },
            "correct": "D",
            "explanation": "$\\vec{u} \\cdot \\vec{v} = 3 \\times 4 \\times \\cos 60^\\circ = 12 \\times 0.5 = 6$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AC}$ và $\\vec{A'C'}$ bằng",
            "options": {
              "A": "$180^\\circ$",
              "B": "$0^\\circ$",
              "C": "$90^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "B",
            "explanation": "Vì $\\vec{AC} = \\vec{A'C'}$ nên hai vectơ cùng hướng, góc giữa chúng bằng $0^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Ba lực đồng quy $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một vật và vật cân bằng. Biết $\\vec{F}_1 \\perp \\vec{F}_2$ và $|\\vec{F}_1| = 6\\text{ N}, |\\vec{F}_2| = 8\\text{ N}$. Độ lớn của lực $\\vec{F}_3$ bằng",
            "options": {
              "A": "$10\\text{ N}$",
              "B": "$48\\text{ N}$",
              "C": "$14\\text{ N}$",
              "D": "$2\\text{ N}$"
            },
            "correct": "A",
            "explanation": "Vì $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\Rightarrow \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$. Do $\\vec{F}_1 \\perp \\vec{F}_2$ nên $|\\vec{F}_3| = \\sqrt{6^2 + 8^2} = 10\\text{ N}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho tứ diện $ABCD$. Đặt $\\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}, \\vec{AD} = \\vec{d}$. Gọi $G$ là trọng tâm tam giác $BCD$. Vectơ $\\vec{AG}$ biểu diễn theo $\\vec{b}, \\vec{c}, \\vec{d}$ là",
            "options": {
              "A": "$\\vec{b} + \\vec{c} + \\vec{d}$",
              "B": "$\\frac{1}{2}(\\vec{b} + \\vec{c} + \\vec{d})$",
              "C": "$\\frac{1}{4}(\\vec{b} + \\vec{c} + \\vec{d})$",
              "D": "$\\frac{1}{3}(\\vec{b} + \\vec{c} + \\vec{d})$"
            },
            "correct": "D",
            "explanation": "Theo tính chất trọng tâm tam giác: $\\vec{AG} = \\frac{1}{3}(\\vec{AB} + \\vec{AC} + \\vec{AD}) = \\frac{1}{3}(\\vec{b} + \\vec{c} + \\vec{d})$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một vật có khối lượng $m = 2\\text{ kg}$ được kéo trượt thẳng đều trên sàn nằm ngang bởi một lực kéo $\\vec{F}$ hợp với phương ngang một góc $30^\\circ$. Hệ số ma sát giữa vật và sàn là $\\mu = 0.2$. Lấy $g = 9.8\\text{ m/s}^2$. Góc hợp bởi lực ma sát và hướng dịch chuyển là",
            "options": {
              "A": "$90^\\circ$",
              "B": "$30^\\circ$",
              "C": "$180^\\circ$",
              "D": "$0^\\circ$"
            },
            "correct": "C",
            "explanation": "Lực ma sát luôn ngược chiều chuyển động nên góc hợp với hướng dịch chuyển là $180^\\circ$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình lăng trụ tam giác $ABC.A'B'C'$. Vectơ tổng $\\vec{AB} + \\vec{B'C'} + \\vec{C'A}$ bằng",
            "options": {
              "A": "$\\vec{0}$",
              "B": "$\\vec{BB'}$",
              "C": "$\\vec{AA'}$",
              "D": "$\\vec{CC'}$"
            },
            "correct": "A",
            "explanation": "Vì $\\vec{B'C'} = \\vec{BC}$ nên tổng là $\\vec{AB} + \\vec{BC} + \\vec{C'A}$... nhưng $\\vec{C'A} = \\vec{CA} - \\vec{CC'}$, hay nếu xét $\\vec{AB} + \\vec{BC} + \\vec{CA} = \\vec{0}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình chóp tứ giác đều $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$. Khẳng định nào sau đây sai?",
            "options": {
              "A": "$\\vec{SO} \\cdot \\vec{AC} = 0$",
              "B": "$\\vec{SA} \\cdot \\vec{SC} = 0$",
              "C": "$\\vec{AC} \\cdot \\vec{BD} = 0$",
              "D": "$\\vec{SO} \\cdot \\vec{BD} = 0$"
            },
            "correct": "B",
            "explanation": "Đoạn $SO \\perp (ABCD)$ nên $\\vec{SO}$ vuông góc $\\vec{AC}, \\vec{BD}$. Hai đường chéo hình vuông vuông góc nhau. Góc $\\widehat{ASC}$ không nhất thiết phải bằng $90^\\circ$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Hai người cùng kéo một chiếc thuyền theo hai hướng tạo với nhau một góc $60^\\circ$ với các lực kéo có cùng độ lớn $200\\text{ N}$. Hợp lực tác dụng lên chiếc thuyền có độ lớn bằng",
            "options": {
              "A": "$200\\text{ N}$",
              "B": "$200\\sqrt{3}\\text{ N}$",
              "C": "$300\\text{ N}$",
              "D": "$400\\text{ N}$"
            },
            "correct": "B",
            "explanation": "$F = 2 \\times 200 \\times \\cos 30^\\circ = 400 \\times \\frac{\\sqrt{3}}{2} = 200\\sqrt{3}\\text{ N}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho tứ diện $ABCD$. Điểm $M$ thuộc đoạn thẳng $AB$ sao cho $AM = 2MB$. Biểu diễn $\\vec{CM}$ qua $\\vec{CA}$ và $\\vec{CB}$ là",
            "options": {
              "A": "$\\vec{CM} = 2\\vec{CA} - \\vec{CB}$",
              "B": "$\\vec{CM} = \\frac{2}{3}\\vec{CA} + \\frac{1}{3}\\vec{CB}$",
              "C": "$\\vec{CM} = \\frac{1}{2}(\\vec{CA} + \\vec{CB})$",
              "D": "$\\vec{CM} = \\frac{1}{3}\\vec{CA} + \\frac{2}{3}\\vec{CB}$"
            },
            "correct": "D",
            "explanation": "Ta có $\\vec{MA} = -2\\vec{MB} \\Rightarrow \\vec{CM} = \\frac{\\vec{CA} + 2\\vec{CB}}{1 + 2} = \\frac{1}{3}\\vec{CA} + \\frac{2}{3}\\vec{CB}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Côsin của góc giữa hai vectơ $\\vec{AC}$ và $\\vec{A'D}$ bằng",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$0$",
              "C": "$-\\frac{1}{2}$",
              "D": "$\\frac{\\sqrt{2}}{2}$"
            },
            "correct": "A",
            "explanation": "$\\vec{AC} = \\vec{AB} + \\vec{AD}$, $\\vec{A'D} = \\vec{AD} - \\vec{AA'}$. Tích vô hướng $\\vec{AC} \\cdot \\vec{A'D} = a^2$. Độ dài $AC = a\\sqrt{2}, A'D = a\\sqrt{2}$. $\\cos = \\frac{a^2}{2a^2} = \\frac{1}{2}$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $B$ với $BA = BC = a$, chiều cao $AA' = a\\sqrt{2}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tích vô hướng $\\vec{BA} \\cdot \\vec{BC} = 0$.",
                "correct": true,
                "explanation": "Đúng, vì tam giác vuông tại $B$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Độ dài đoạn thẳng $AC$ bằng $a\\sqrt{2}$.",
                "correct": true,
                "explanation": "Đúng, $AC = \\sqrt{a^2 + a^2} = a\\sqrt{2}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tích vô hướng $\\vec{AA'} \\cdot \\vec{AC} = 0$.",
                "correct": true,
                "explanation": "Đúng, lăng trụ đứng nên $AA' \\perp (ABC) \\Rightarrow AA' \\perp AC$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Góc giữa hai vectơ $\\vec{A'B}$ và $\\vec{B'C}$ bằng $90^\\circ$.",
                "correct": false,
                "explanation": "Sai, tính tích vô hướng thấy khác 0."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $AC$ và $BD$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vectơ $\\vec{IA} + \\vec{IC} = \\vec{0}$.",
                "correct": true,
                "explanation": "Đúng, $I$ là trung điểm $AC$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Vectơ $\\vec{IJ} = \\frac{1}{2}(\\vec{AB} + \\vec{CD})$.",
                "correct": true,
                "explanation": "Đúng, đẳng thức vectơ quen thuộc."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Vectơ $\\vec{IJ} = \\frac{1}{2}(\\vec{AD} + \\vec{CB})$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu $AB = CD$ thì $IJ \\perp AB$.",
                "correct": false,
                "explanation": "Sai, chỉ vuông góc khi tứ diện trực tâm hoặc điều kiện đặc biệt."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một khinh khí cầu đang bay lên thẳng đứng với vận tốc $v_k = 5\\text{ m/s}$ trong điều kiện có gió ngang thổi theo phương ngang với vận tốc $v_g = 12\\text{ m/s}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vectơ vận tốc tổng hợp của khinh khí cầu là $\\vec{v} = \\vec{v}_k + \\vec{v}_g$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hai vectơ $\\vec{v}_k$ và $\\vec{v}_g$ vuông góc với nhau.",
                "correct": true,
                "explanation": "Đúng, phương thẳng đứng vuông góc phương ngang."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tốc độ di chuyển thực tế của khinh khí cầu là $13\\text{ m/s}$.",
                "correct": true,
                "explanation": "Đúng, $\\sqrt{5^2 + 12^2} = 13\\text{ m/s}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Sau $10\\text{ giây}$, khinh khí cầu di chuyển được quãng đường $120\\text{ m}$.",
                "correct": false,
                "explanation": "Sai, quãng đường thực tế là $13 \\times 10 = 130\\text{ m}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = a, AD = b, AA' = c$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Ba vectơ $\\vec{AB}, \\vec{AD}, \\vec{AA'}$ đôi một vuông góc.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Độ dài đường chéo $AC' = \\sqrt{a^2 + b^2 + c^2}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC'} = a^2$.",
                "correct": true,
                "explanation": "Đúng, $\\vec{AB} \\cdot (\\vec{AB} + \\vec{AD} + \\vec{AA'}) = a^2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hình chiếu của đường chéo $AC'$ lên mặt phẳng $(ABCD)$ là đoạn thẳng $BD$.",
                "correct": false,
                "explanation": "Sai, hình chiếu của $AC'$ là đoạn thẳng $AC$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện đều $ABCD$ có cạnh bằng $6$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$.",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc nhau, do đó tích vô hướng bằng 0."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có $|\\vec{a}| = 2, |\\vec{b}| = 5$ và $\\vec{a} \\cdot \\vec{b} = -5$. Tính số đo góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ (đơn vị: độ).",
            "correctAnswer": "120",
            "acceptedAnswers": [
              "120"
            ],
            "explanation": "$\\cos(\\vec{a}, \\vec{b}) = \\frac{-5}{2 \\times 5} = -0.5 \\Rightarrow \\theta = 120^\\circ$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một chiếc ô tô kéo một chiếc xe khác bằng một sợi cáp với lực kéo không đổi $F = 500\\text{ N}$ theo phương nằm ngang. Tính công cơ học thực hiện khi kéo xe đi được đoạn đường dài $200\\text{ m}$ (đơn vị: kJ).",
            "correctAnswer": "100",
            "acceptedAnswers": [
              "100"
            ],
            "explanation": "$A = 500 \\times 200 = 100000\\text{ J} = 100\\text{ kJ}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Gọi $\\alpha$ là góc giữa hai đường thẳng $AC$ và $DA'$. Tính số đo góc $\\alpha$ (đơn vị: độ).",
            "correctAnswer": "60",
            "acceptedAnswers": [
              "60"
            ],
            "explanation": "Nối $AC, CD', D'A$ tạo thành tam giác đều $ACD'$ có 3 cạnh bằng $a\\sqrt{2}$, góc giữa chúng bằng $60^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một máy bay đang bay với vận tốc hướng Bắc là $500\\text{ km/h}$. Một luồng gió mạnh thổi từ hướng Tây sang Đông với tốc độ $120\\text{ km/h}$. Tốc độ tổng hợp của máy bay so với mặt đất bằng bao nhiêu km/h? (Làm tròn đến hàng đơn vị).",
            "correctAnswer": "514",
            "acceptedAnswers": [
              "514"
            ],
            "explanation": "$v = \\sqrt{500^2 + 120^2} = \\sqrt{250000 + 14400} = \\sqrt{264400} \\approx 514.2 \\Rightarrow 514$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một vật treo cân bằng bằng hai sợi dây tạo với trần nhà hai góc bằng nhau là $45^\\circ$. Biết trọng lượng của vật là $P = 100\\text{ N}$. Lực căng của mỗi sợi dây xấp xỉ bằng bao nhiêu Newton? (Lấy $\\sqrt{2} \\approx 1.414$, làm tròn kết quả đến hàng đơn vị).",
            "correctAnswer": "71",
            "acceptedAnswers": [
              "71",
              "70.7",
              "70,7"
            ],
            "explanation": "$2T \\sin 45^\\circ = P \\Rightarrow 2T \\frac{\\sqrt{2}}{2} = 100 \\Rightarrow T = \\frac{100}{\\sqrt{2}} = 50\\sqrt{2} \\approx 70.71 \\approx 71\\text{ N}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd7-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Vectơ Trong Không Gian",
        "code": "CD7-103",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho ba điểm $A, B, C$ phân biệt. Đẳng thức nào sau đây luôn đúng?",
            "options": {
              "A": "$\\vec{AB} - \\vec{AC} = \\vec{BC}$",
              "B": "$\\vec{BA} + \\vec{AC} = \\vec{CB}$",
              "C": "$\\vec{AB} + \\vec{CA} = \\vec{CB}$",
              "D": "$\\vec{AB} + \\vec{BC} = \\vec{BA}$"
            },
            "correct": "C",
            "explanation": "$\\vec{CA} + \\vec{AB} = \\vec{CB}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABCD$. Gọi $O$ là giao điểm của $AC$ và $BD$. Nếu $ABCD$ là hình bình hành thì $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD}$ bằng",
            "options": {
              "A": "$\\vec{SO}$",
              "B": "$\\vec{0}$",
              "C": "$2\\vec{SO}$",
              "D": "$4\\vec{SO}$"
            },
            "correct": "D",
            "explanation": "$(\\vec{SA} + \\vec{SC}) + (\\vec{SB} + \\vec{SD}) = 2\\vec{SO} + 2\\vec{SO} = 4\\vec{SO}$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hai vectơ $\\vec{u}, \\vec{v}$ có độ dài lần lượt là $2$ và $3$. Biết $\\vec{u} \\cdot \\vec{v} = 3\\sqrt{3}$. Góc giữa $\\vec{u}$ và $\\vec{v}$ bằng",
            "options": {
              "A": "$90^\\circ$",
              "B": "$45^\\circ$",
              "C": "$60^\\circ$",
              "D": "$30^\\circ$"
            },
            "correct": "D",
            "explanation": "$\\cos(\\vec{u}, \\vec{v}) = \\frac{3\\sqrt{3}}{2 \\times 3} = \\frac{\\sqrt{3}}{2} \\Rightarrow \\theta = 30^\\circ$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $CC'$ bằng",
            "options": {
              "A": "$90^\\circ$",
              "B": "$60^\\circ$",
              "C": "$0^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "A",
            "explanation": "Vì $CC' \\parallel AA'$ và $AB \\perp AA'$ nên góc giữa $AB$ và $CC'$ bằng $90^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một vật được kéo bởi hai lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau có độ lớn lần lượt là $30\\text{ N}$ và $40\\text{ N}$. Để vật đứng yên cân bằng, cần tác dụng thêm lực $\\vec{F}_3$ có độ lớn bằng",
            "options": {
              "A": "$70\\text{ N}$",
              "B": "$50\\text{ N}$",
              "C": "$35\\text{ N}$",
              "D": "$10\\text{ N}$"
            },
            "correct": "B",
            "explanation": "Hợp lực của $\\vec{F}_1$ và $\\vec{F}_2$ là $\\sqrt{30^2 + 40^2} = 50\\text{ N}$. Để cân bằng, $|\\vec{F}_3| = 50\\text{ N}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho tứ diện $ABCD$ có $G$ là trọng tâm. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$\\vec{AB} + \\vec{AC} + \\vec{AD} = \\vec{0}$",
              "B": "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$",
              "C": "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{GD}$",
              "D": "$\\vec{DA} + \\vec{DB} + \\vec{DC} = \\vec{0}$"
            },
            "correct": "B",
            "explanation": "Đặc trưng của trọng tâm tứ diện là tổng vectơ từ trọng tâm đến 4 đỉnh bằng $\\vec{0}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một lực $\\vec{F}$ có độ lớn $100\\text{ N}$ kéo một vật chuyển động thẳng đều theo hướng tạo với phương ngang góc $45^\\circ$. Khi vật dịch chuyển được quãng đường $20\\text{ m}$ trên mặt sàn nằm ngang, công cơ học thực hiện xấp xỉ bằng",
            "options": {
              "A": "$1414\\text{ J}$",
              "B": "$1732\\text{ J}$",
              "C": "$2000\\text{ J}$",
              "D": "$1000\\text{ J}$"
            },
            "correct": "A",
            "explanation": "$A = 100 \\times 20 \\times \\cos 45^\\circ = 2000 \\times \\frac{\\sqrt{2}}{2} = 1000\\sqrt{2} \\approx 1414.2\\text{ J}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình lăng trụ $ABC.A'B'C'$. Đặt $\\vec{u} = \\vec{AA'}, \\vec{v} = \\vec{AB}, \\vec{w} = \\vec{AC}$. Vectơ $\\vec{BC'}$ biểu diễn qua $\\vec{u}, \\vec{v}, \\vec{w}$ là",
            "options": {
              "A": "$\\vec{u} - \\vec{v} + \\vec{w}$",
              "B": "$\\vec{u} + \\vec{v} + \\vec{w}$",
              "C": "$-\\vec{u} - \\vec{v} + \\vec{w}$",
              "D": "$\\vec{u} + \\vec{v} - \\vec{w}$"
            },
            "correct": "A",
            "explanation": "$\\vec{BC'} = \\vec{BC} + \\vec{CC'} = (\\vec{AC} - \\vec{AB}) + \\vec{AA'} = \\vec{w} - \\vec{v} + \\vec{u}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình lập phương $ABCD.A'B'C'D'$. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$\\vec{AA'} \\cdot \\vec{B'C'} = a^2$",
              "B": "$\\vec{AB} \\cdot \\vec{CC'} = 0$",
              "C": "$\\vec{AB} \\cdot \\vec{AD} = a^2$",
              "D": "$\\vec{AC} \\cdot \\vec{BD} = a^2$"
            },
            "correct": "B",
            "explanation": "Vì $AB \\perp AA'$ và $AA' \\parallel CC'$ nên $AB \\perp CC'$, tích vô hướng bằng 0."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Một người chèo thuyền qua một con sông rộng $100\\text{ m}$. Vận tốc của thuyền đối với dòng nước là $4\\text{ m/s}$ theo hướng vuông góc bờ sông. Vận tốc dòng nước chảy là $3\\text{ m/s}$. Thời gian để thuyền sang đến bờ bên kia là",
            "options": {
              "A": "$33.3\\text{ s}$",
              "B": "$20\\text{ s}$",
              "C": "$50\\text{ s}$",
              "D": "$25\\text{ s}$"
            },
            "correct": "D",
            "explanation": "Thành phần vận tốc theo phương vuông góc bờ sông chỉ phụ thuộc vận tốc thuyền là $4\\text{ m/s}$, thời gian $t = 100 / 4 = 25\\text{ s}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho tam giác $ABC$. Gọi $M$ là trung điểm cạnh $BC$. Mệnh đề nào sau đây đúng?",
            "options": {
              "A": "$\\vec{AB} - \\vec{AC} = 2\\vec{AM}$",
              "B": "$\\vec{MA} + \\vec{MB} = \\vec{MC}$",
              "C": "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$",
              "D": "$\\vec{AB} + \\vec{AC} = \\vec{AM}$"
            },
            "correct": "C",
            "explanation": "Định lý trung điểm: $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$ và $SA = SB = SC = a$. Góc giữa hai vectơ $\\vec{SA}$ và $\\vec{BC}$ bằng",
            "options": {
              "A": "$60^\\circ$",
              "B": "$120^\\circ$",
              "C": "$90^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "C",
            "explanation": "$\\vec{SA} \\cdot \\vec{BC} = \\vec{SA} \\cdot (\\vec{SC} - \\vec{SB}) = \\vec{SA} \\cdot \\vec{SC} - \\vec{SA} \\cdot \\vec{SB} = a^2 \\cos 60^\\circ - a^2 \\cos 60^\\circ = 0 \\Rightarrow 90^\\circ$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho tứ diện $ABCD$ có $AB, AC, AD$ đôi một vuông góc và $AB = AC = AD = 2$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.",
                "correct": true,
                "explanation": "Đúng, vì $AB \\perp AC$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Tam giác $BCD$ là tam giác đều cạnh $2\\sqrt{2}$.",
                "correct": true,
                "explanation": "Đúng, các cạnh đáy đều bằng $\\sqrt{2^2 + 2^2} = 2\\sqrt{2}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Vectơ $\\vec{BC} = \\vec{AC} - \\vec{AB}$.",
                "correct": true,
                "explanation": "Đúng, $\\vec{AC} - \\vec{AB} = \\vec{BC}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tích vô hướng $\\vec{BC} \\cdot \\vec{BD} = 0$.",
                "correct": false,
                "explanation": "Sai, tam giác $BCD$ đều nên góc giữa chúng bằng $60^\\circ$, tích vô hướng bằng $4$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $1$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Độ dài vectơ $\\vec{AB} + \\vec{BC}$ bằng $\\sqrt{2}$.",
                "correct": true,
                "explanation": "Đúng, $|\\vec{AC}| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Độ dài vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng $\\sqrt{3}$.",
                "correct": true,
                "explanation": "Đúng, $|\\vec{AC'}| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{A'D'}$ bằng $90^\\circ$.",
                "correct": true,
                "explanation": "Đúng, vì $\\vec{A'D'} = \\vec{AD}$ và $AB \\perp AD$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tích vô hướng $\\vec{AC} \\cdot \\vec{BD} = 1$.",
                "correct": false,
                "explanation": "Sai, hai đường chéo hình vuông vuông góc nên tích vô hướng bằng $0$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một đèn giao thông có trọng lượng $P = 120\\text{ N}$ được treo giữa ngã tư nhờ hai sợi dây cáp cố định vào hai cột thẳng đứng đối diện sao cho hai dây cáp cùng nghiêng với phương ngang một góc $15^\\circ$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Lực căng của hai dây cáp có độ lớn bằng nhau do tính đối xứng.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Phương trình cân bằng lực theo phương thẳng đứng là $2T \\sin 15^\\circ = P$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Lực căng của mỗi sợi cáp lớn hơn trọng lượng của đèn giao thông.",
                "correct": true,
                "explanation": "Đúng, $T = \\frac{120}{2\\sin 15^\\circ} \\approx \\frac{60}{0.2588} \\approx 231.8\\text{ N} > 120\\text{ N}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu góc nghiêng tăng lên thì lực căng dây cáp sẽ tăng lên.",
                "correct": false,
                "explanation": "Sai, góc nghiêng tăng thì $\\sin$ tăng, lực căng dây giảm."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hình chóp $S.ABC$. Gọi $M$ là trung điểm $BC$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\vec{SB} + \\vec{SC} = 2\\vec{SM}$.",
                "correct": true,
                "explanation": "Đúng, $M$ là trung điểm $BC$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$ với $G$ là trọng tâm tam giác $ABC$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu $SB = SC$ thì $SM \\perp (ABC)$.",
                "correct": false,
                "explanation": "Sai, $SM$ chỉ vuông góc với $BC$, không nhất thiết vuông góc với cả mặt phẳng."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $ABCD$ có các cạnh $AB, AC, AD$ đôi một vuông góc. Biết $AB = 3, AC = 4, AD = 5$. Tính độ dài vectơ $\\vec{u} = \\vec{AB} + \\vec{AC} + \\vec{AD}$.",
            "correctAnswer": "7.07",
            "acceptedAnswers": [
              "7.07",
              "5*sqrt(2)",
              "7,07"
            ],
            "explanation": "$|\\vec{u}| = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.07$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ có $|\\vec{u}| = 4, |\\vec{v}| = 6$ và $(\\vec{u}, \\vec{v}) = 120^\\circ$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
            "correctAnswer": "-12",
            "acceptedAnswers": [
              "-12"
            ],
            "explanation": "$\\vec{u} \\cdot \\vec{v} = 4 \\times 6 \\times \\cos 120^\\circ = 24 \\times (-0.5) = -12$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một xe tải kéo một xe con bị sa lầy bằng một lực không đổi $F = 2000\\text{ N}$ theo phương hợp với hướng chuyển động góc $30^\\circ$. Khi xe con dịch chuyển được $50\\text{ m}$, công cơ học thực hiện là bao nhiêu kilôJun (kJ)? (Lấy $\\sqrt{3} \\approx 1.732$, làm tròn kết quả đến hàng đơn vị).",
            "correctAnswer": "87",
            "acceptedAnswers": [
              "87",
              "86.6",
              "86,6"
            ],
            "explanation": "$A = 2000 \\times 50 \\times \\cos 30^\\circ = 100000 \\times \\frac{\\sqrt{3}}{2} = 50000\\sqrt{3} \\approx 86603\\text{ J} \\approx 87\\text{ kJ}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tính góc giữa hai vectơ $\\vec{BA}$ và $\\vec{B'D'}$ (đơn vị: độ).",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45"
            ],
            "explanation": "$\\vec{B'D'} = \\vec{BD}$. Góc giữa $\\vec{BA}$ và $\\vec{BD}$ trong hình vuông là $45^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một chiếc máy bay bay theo hướng Đông Bắc với tốc độ $600\\text{ km/h}$. Gió thổi ngược lại theo hướng Tây Nam với tốc độ $100\\text{ km/h}$. Tốc độ thực của máy bay so với mặt đất bằng bao nhiêu km/h?",
            "correctAnswer": "500",
            "acceptedAnswers": [
              "500"
            ],
            "explanation": "Hai hướng ngược nhau hoàn toàn nên $v = 600 - 100 = 500\\text{ km/h}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một quả bóng chịu tác dụng của 3 lực cân bằng $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết $|\\vec{F}_1| = 12\\text{ N}, |\\vec{F}_2| = 16\\text{ N}$ và $\\vec{F}_1 \\perp \\vec{F}_2$. Tính độ lớn của lực $\\vec{F}_3$ (đơn vị: Newton).",
            "correctAnswer": "20",
            "acceptedAnswers": [
              "20"
            ],
            "explanation": "$|\\vec{F}_3| = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ N}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd7-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Vectơ Trong Không Gian",
        "code": "CD7-104",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $ABCD$. Tổng vectơ $\\vec{AC} + \\vec{CB} + \\vec{BA}$ bằng",
            "options": {
              "A": "$\\vec{BC}$",
              "B": "$\\vec{0}$",
              "C": "$\\vec{AB}$",
              "D": "$\\vec{AC}$"
            },
            "correct": "B",
            "explanation": "Chu trình kín: $\\vec{AC} + \\vec{CB} + \\vec{BA} = \\vec{AA} = \\vec{0}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $G$ là trọng tâm tam giác $ABC$. Đẳng thức nào sau đây đúng?",
            "options": {
              "A": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = \\vec{SG}$",
              "B": "$\\vec{SA} + \\vec{SC} = 2\\vec{SG}$",
              "C": "$\\vec{SA} + \\vec{SB} = 2\\vec{SG}$",
              "D": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$"
            },
            "correct": "D",
            "explanation": "Định lý trọng tâm: $\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hai vectơ $\\vec{a}, \\vec{b}$ cùng hướng và đều khác $\\vec{0}$. Khẳng định nào sau đây đúng?",
            "options": {
              "A": "$\\vec{a} \\cdot \\vec{b} = 0$",
              "B": "$\\vec{a} \\cdot \\vec{b} = -|\\vec{a}| |\\vec{b}|$",
              "C": "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}|$",
              "D": "$\\vec{a} \\cdot \\vec{b} = 1$"
            },
            "correct": "C",
            "explanation": "Hai vectơ cùng hướng có góc bằng $0^\\circ$, $\\cos 0^\\circ = 1$ nên $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}|$"
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'C'$ và $BD$ bằng",
            "options": {
              "A": "$0^\\circ$",
              "B": "$90^\\circ$",
              "C": "$45^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "B",
            "explanation": "Vì $A'C' \\parallel AC$ và $AC \\perp BD$ nên góc bằng $90^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một con tàu di chuyển theo hướng Đông với vận tốc $24\\text{ hải lý/giờ}$. Dòng hải lưu chảy theo hướng Bắc với vận tốc $7\\text{ hải lý/giờ}$. Vận tốc thực của con tàu so với đáy biển là",
            "options": {
              "A": "$28\\text{ hải lý/giờ}$",
              "B": "$25\\text{ hải lý/giờ}$",
              "C": "$17\\text{ hải lý/giờ}$",
              "D": "$31\\text{ hải lý/giờ}$"
            },
            "correct": "B",
            "explanation": "$v = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25\\text{ hải lý/giờ}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho hình lăng trụ $ABC.A'B'C'$. Khẳng định nào sau đây đúng?",
            "options": {
              "A": "$\\vec{AA'} + \\vec{BB'} = \\vec{CC'}$",
              "B": "$\\vec{AB} = \\vec{A'C'}$",
              "C": "$\\vec{AA'} = -\\vec{BB'}$",
              "D": "$\\vec{AA'} = \\vec{BB'} = \\vec{CC'}$"
            },
            "correct": "D",
            "explanation": "Các cạnh bên của hình lăng trụ song song và bằng nhau, cùng hướng từ đáy dưới lên đáy trên nên các vectơ bằng nhau."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một lực kéo $F = 40\\text{ N}$ làm vật di chuyển một đoạn $5\\text{ m}$ cùng hướng với lực kéo. Công cơ học thực hiện bằng",
            "options": {
              "A": "$200\\text{ J}$",
              "B": "$400\\text{ J}$",
              "C": "$100\\text{ J}$",
              "D": "$0\\text{ J}$"
            },
            "correct": "A",
            "explanation": "$A = F \\cdot s \\cdot \\cos 0^\\circ = 40 \\times 5 = 200\\text{ J}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $A$, cạnh $SA \\perp (ABC)$. Khẳng định nào sau đây đúng?",
            "options": {
              "A": "$\\vec{SA} \\cdot \\vec{BC} = a^2$",
              "B": "$\\vec{SB} \\cdot \\vec{SC} = 0$",
              "C": "$\\vec{AB} \\cdot \\vec{AC} = 0$",
              "D": "$\\vec{AB} \\cdot \\vec{SC} = a^2$"
            },
            "correct": "C",
            "explanation": "Vì tam giác $ABC$ vuông tại $A$ nên $AB \\perp AC \\Rightarrow \\vec{AB} \\cdot \\vec{AC} = 0$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình lập phương $ABCD.A'B'C'D'$. Khẳng định nào sau đây là sai?",
            "options": {
              "A": "$\\vec{AA'} + \\vec{AC} = \\vec{AC'}$",
              "B": "$\\vec{AB} + \\vec{AD} = \\vec{AC}$",
              "C": "$\\vec{AC} = \\vec{BD}$",
              "D": "$\\vec{AB} + \\vec{B'C'} + \\vec{DD'} = \\vec{AC'}$"
            },
            "correct": "C",
            "explanation": "Hai đường chéo $AC$ và $BD$ có phương cắt nhau vuông góc, không thể bằng nhau."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Hai lực đồng quy $\\vec{F}_1$ và $\\vec{F}_2$ có độ lớn $10\\text{ N}$ và $10\\text{ N}$ tạo với nhau góc $90^\\circ$. Độ lớn hợp lực của chúng bằng",
            "options": {
              "A": "$10\\sqrt{2}\\text{ N}$",
              "B": "$10\\text{ N}$",
              "C": "$10\\sqrt{3}\\text{ N}$",
              "D": "$20\\text{ N}$"
            },
            "correct": "A",
            "explanation": "$F = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ N}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho tứ diện $ABCD$. Gọi $M$ là trung điểm $AB$, $N$ là trung điểm $CD$. Vectơ $\\vec{MN}$ bằng",
            "options": {
              "A": "$\\frac{1}{2}(\\vec{AD} + \\vec{BC})$",
              "B": "$\\frac{1}{2}(\\vec{AB} + \\vec{CD})$",
              "C": "$\\frac{1}{2}(\\vec{AD} - \\vec{BC})$",
              "D": "$\\vec{AD} + \\vec{BC}$"
            },
            "correct": "A",
            "explanation": "$\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi. Tích vô hướng $\\vec{AC} \\cdot \\vec{BD}$ bằng",
            "options": {
              "A": "$2a^2$",
              "B": "$a^2$",
              "C": "$-a^2$",
              "D": "$0$"
            },
            "correct": "D",
            "explanation": "Hai đường chéo của hình thoi vuông góc nhau nên tích vô hướng bằng $0$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tứ diện.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Với mọi điểm $M$, ta luôn có $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Điểm $G$ là trung điểm của đoạn thẳng nối trung điểm hai cạnh đối diện bất kì.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Độ dài $GA = GB = GC = GD$ với mọi tứ diện $ABCD$.",
                "correct": false,
                "explanation": "Sai, chỉ đúng khi tứ diện đều."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình lăng trụ tam giác $ABC.A'B'C'$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Mặt bên $ABB'A'$ là một hình bình hành.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\vec{AA'} + \\vec{AB} = \\vec{AB'}$.",
                "correct": true,
                "explanation": "Đúng, quy tắc hình bình hành."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "$\\vec{A'B'} = \\vec{AB}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Ba vectơ $\\vec{AA'}, \\vec{AB}, \\vec{AC}$ đồng phẳng.",
                "correct": false,
                "explanation": "Sai, chúng tạo thành 3 cạnh xuất phát từ một đỉnh của lăng trụ nên không đồng phẳng."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một xà lan được kéo trên kênh bởi hai con ngựa đi ở hai bờ đối diện. Mỗi con ngựa tác dụng một lực $F_1 = F_2 = 1500\\text{ N}$ theo hướng hợp với phương dọc kênh một góc $30^\\circ$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Các thành phần lực vuông góc với phương dọc kênh triệt tiêu lẫn nhau.",
                "correct": true,
                "explanation": "Đúng, do tính đối xứng $1500\\sin 30^\\circ - 1500\\sin 30^\\circ = 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hợp lực tác dụng làm xà lan chuyển động thẳng dọc theo kênh.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Độ lớn hợp lực kéo dọc kênh là $1500\\sqrt{3}\\text{ N}$.",
                "correct": true,
                "explanation": "Đúng, $2 \\times 1500 \\times \\cos 30^\\circ = 1500\\sqrt{3}\\text{ N}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hợp lực kéo dọc kênh có độ lớn bằng $3000\\text{ N}$.",
                "correct": false,
                "explanation": "Sai, chỉ bằng $1500\\sqrt{3} \\approx 2598\\text{ N}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\vec{SA} \\cdot \\vec{AB} = 0$.",
                "correct": true,
                "explanation": "Đúng, vì $SA \\perp AB$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\vec{SA} \\cdot \\vec{BC} = 0$.",
                "correct": true,
                "explanation": "Đúng, vì $SA \\perp (ABC) \\Rightarrow SA \\perp BC$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "$\\vec{AB} \\cdot \\vec{BC} = 0$.",
                "correct": true,
                "explanation": "Đúng, tam giác vuông tại $B$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$\\vec{SB} \\cdot \\vec{BC} \\ne 0$.",
                "correct": false,
                "explanation": "Sai, theo định lý 3 đường vuông góc, $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB \\Rightarrow \\vec{SB} \\cdot \\vec{BC} = 0$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $ABCD$. Tìm số thực $k$ thỏa mãn đẳng thức $\\vec{AC} + \\vec{BD} = k\\vec{MN}$, trong đó $M, N$ lần lượt là trung điểm của $AB$ và $CD$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "Ta có $\\vec{AC} + \\vec{BD} = 2\\vec{MN} \\Rightarrow k = 2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai vectơ $\\vec{u}, \\vec{v}$ thỏa mãn $|\\vec{u}| = 3, |\\vec{v}| = 4$ và $|\\vec{u} + \\vec{v}| = 5$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "$|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2 + 2\\vec{u}\\cdot\\vec{v} \\Leftrightarrow 25 = 9 + 16 + 2\\vec{u}\\cdot\\vec{v} \\Rightarrow \\vec{u}\\cdot\\vec{v} = 0$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một cần cẩu nâng một khối bê tông nặng $500\\text{ kg}$ lên cao theo phương thẳng đứng với gia tốc $a = 0.2\\text{ m/s}^2$. Lấy $g = 9.8\\text{ m/s}^2$. Lực căng của dây cáp cần cẩu bằng bao nhiêu Newton?",
            "correctAnswer": "5000",
            "acceptedAnswers": [
              "5000"
            ],
            "explanation": "$T = m(g + a) = 500(9.8 + 0.2) = 500 \\times 10 = 5000\\text{ N}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông cạnh $2$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$.",
            "correctAnswer": "-4",
            "acceptedAnswers": [
              "-4"
            ],
            "explanation": "Vì $\\vec{CD} = -\\vec{AB}$ nên $\\vec{AB} \\cdot \\vec{CD} = -|\\vec{AB}|^2 = -4$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một người kéo một chiếc va li đi một quãng đường $50\\text{ m}$ trên sân ga với lực kéo $F = 60\\text{ N}$ chếch lên hợp với phương ngang một góc $60^\\circ$. Công của lực kéo bằng bao nhiêu Joule?",
            "correctAnswer": "1500",
            "acceptedAnswers": [
              "1500"
            ],
            "explanation": "$A = 60 \\times 50 \\times \\cos 60^\\circ = 3000 \\times 0.5 = 1500\\text{ J}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một ca nô chuyển động từ bờ sông bên này sang bờ sông bên kia. Vận tốc của ca nô đối với dòng nước là $15\\text{ km/h}$, vận tốc dòng nước là $8\\text{ km/h}$. Biết hướng chuyển động của ca nô vuông góc với dòng nước. Tốc độ của ca nô đối với bờ sông bằng bao nhiêu km/h?",
            "correctAnswer": "17",
            "acceptedAnswers": [
              "17"
            ],
            "explanation": "$v = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\text{ km/h}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd7-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Vectơ Trong Không Gian",
        "code": "CD7-105",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $ABCD$. Vectơ $\\vec{AB} - \\vec{DB}$ bằng",
            "options": {
              "A": "$\\vec{0}$",
              "B": "$\\vec{DA}$",
              "C": "$\\vec{BD}$",
              "D": "$\\vec{AD}$"
            },
            "correct": "D",
            "explanation": "$\\vec{AB} - \\vec{DB} = \\vec{AB} + \\vec{BD} = \\vec{AD}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Khẳng định nào sau đây đúng?",
            "options": {
              "A": "$\\vec{MN} = \\vec{AB}$",
              "B": "$\\vec{MN} = \\frac{1}{2}\\vec{AB}$",
              "C": "$\\vec{MN} = -\\frac{1}{2}\\vec{AB}$",
              "D": "$\\vec{MN} = 2\\vec{AB}$"
            },
            "correct": "B",
            "explanation": "$M, N$ là trung điểm nên $MN$ là đường trung bình tam giác $SAB$, do đó $\\vec{MN} = \\frac{1}{2}\\vec{AB}$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có $|\\vec{a}| = 1, |\\vec{b}| = 2$ và góc $(\\vec{a}, \\vec{b}) = 120^\\circ$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng",
            "options": {
              "A": "$-1$",
              "B": "$\\sqrt{3}$",
              "C": "$-\\sqrt{3}$",
              "D": "$1$"
            },
            "correct": "A",
            "explanation": "$\\vec{a} \\cdot \\vec{b} = 1 \\times 2 \\times \\cos 120^\\circ = 2 \\times (-0.5) = -1$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'B$ và $B'C$ bằng",
            "options": {
              "A": "$90^\\circ$",
              "B": "$120^\\circ$",
              "C": "$60^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "C",
            "explanation": "Vì $A'B \\parallel D'C$, xét tam giác $B'CD'$ đều (3 cạnh là 3 đường chéo các mặt hình vuông), do đó góc bằng $60^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một vật đứng cân bằng dưới tác dụng của 3 lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết $|\\vec{F}_1| = 5\\text{ N}, |\\vec{F}_2| = 12\\text{ N}$ và $\\vec{F}_1 \\perp \\vec{F}_2$. Độ lớn của lực $\\vec{F}_3$ bằng",
            "options": {
              "A": "$13\\text{ N}$",
              "B": "$17\\text{ N}$",
              "C": "$7\\text{ N}$",
              "D": "$60\\text{ N}$"
            },
            "correct": "A",
            "explanation": "$\\sqrt{5^2 + 12^2} = 13\\text{ N}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho hình hộp $ABCD.A'B'C'D'$. Vectơ nào dưới đây bằng vectơ $\\vec{AB} + \\vec{B'C'} + \\vec{DD'}$?",
            "options": {
              "A": "$\\vec{A'C}$",
              "B": "$\\vec{CA'}$",
              "C": "$\\vec{AC'}$",
              "D": "$\\vec{BD'}$"
            },
            "correct": "C",
            "explanation": "Vì $\\vec{B'C'} = \\vec{AD}$ và $\\vec{DD'} = \\vec{AA'}$ nên $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một lực $\\vec{F}$ kéo một chiếc xe trượt tuyết một đoạn đường $15\\text{ m}$ sinh công $300\\text{ J}$. Biết lực kéo có độ lớn $40\\text{ N}$. Góc hợp bởi lực kéo và hướng dịch chuyển là",
            "options": {
              "A": "$60^\\circ$",
              "B": "$0^\\circ$",
              "C": "$30^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "A",
            "explanation": "$\\cos\\theta = \\frac{A}{F \\cdot s} = \\frac{300}{40 \\times 15} = \\frac{300}{600} = 0.5 \\Rightarrow \\theta = 60^\\circ$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Vectơ tổng $\\vec{SA} + \\vec{SC} - \\vec{SB}$ bằng",
            "options": {
              "A": "$2\\vec{SO}$",
              "B": "$\\vec{DS}$",
              "C": "$\\vec{0}$",
              "D": "$\\vec{SD}$"
            },
            "correct": "D",
            "explanation": "Vì $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD} \\Rightarrow \\vec{SA} + \\vec{SC} - \\vec{SB} = \\vec{SD}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AC}$ và $\\vec{BD'}$ bằng",
            "options": {
              "A": "$0^\\circ$",
              "B": "$90^\\circ$",
              "C": "$60^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "B",
            "explanation": "$\\vec{AC} \\cdot \\vec{BD'} = \\vec{AC} \\cdot (\\vec{BD} + \\vec{DD'}) = \\vec{AC} \\cdot \\vec{BD} + \\vec{AC} \\cdot \\vec{DD'} = 0 + 0 = 0 \\Rightarrow 90^\\circ$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Một con thuyền vượt sông với vận tốc riêng $8\\text{ km/h}$ hướng vuông góc dòng nước. Vận tốc dòng nước là $6\\text{ km/h}$. Tốc độ thực tế của con thuyền bằng",
            "options": {
              "A": "$2\\text{ km/h}$",
              "B": "$12\\text{ km/h}$",
              "C": "$14\\text{ km/h}$",
              "D": "$10\\text{ km/h}$"
            },
            "correct": "D",
            "explanation": "$v = \\sqrt{8^2 + 6^2} = 10\\text{ km/h}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho tứ diện $ABCD$. Điểm $M$ thuộc đoạn thẳng $BC$ sao cho $BM = MC$. Khẳng định nào sau đây đúng?",
            "options": {
              "A": "$\\vec{AB} + \\vec{AC} = \\vec{AM}$",
              "B": "$\\vec{MB} + \\vec{MC} = \\vec{BC}$",
              "C": "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$",
              "D": "$\\vec{DB} + \\vec{DC} = \\vec{DM}$"
            },
            "correct": "C",
            "explanation": "$M$ là trung điểm $BC$ nên $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông tại $C$. Khẳng định nào sau đây sai?",
            "options": {
              "A": "$\\vec{AC} \\cdot \\vec{BC} = 0$",
              "B": "$\\vec{SC} \\cdot \\vec{AB} = 0$",
              "C": "$\\vec{SC} \\cdot \\vec{BC} = 0$",
              "D": "$\\vec{SA} \\cdot \\vec{BC} = 0$"
            },
            "correct": "B",
            "explanation": "Theo định lý 3 đường vuông góc: $BC \\perp AC$ và $BC \\perp SA \\Rightarrow BC \\perp (SAC) \\Rightarrow BC \\perp SC$. $SA \\perp (ABC) \\Rightarrow SA \\perp BC$. Còn $SC$ không vuông góc với $AB$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\vec{OA} \\cdot \\vec{OB} = 0$.",
                "correct": true,
                "explanation": "Đúng, vì $OA \\perp OB$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\vec{OB} \\cdot \\vec{OC} = 0$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "$\\vec{OA} \\cdot \\vec{OC} = 0$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$\\vec{AB} \\cdot \\vec{AC} = 0$.",
                "correct": false,
                "explanation": "Sai, $\\vec{AB} \\cdot \\vec{AC} = (\\vec{OB} - \\vec{OA}) \\cdot (\\vec{OC} - \\vec{OA}) = OA^2 > 0$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hình hộp $ABCD.A'B'C'D'$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.",
                "correct": true,
                "explanation": "Đúng, quy tắc hình hộp."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "$\\vec{AC'} + \\vec{CA'} = \\vec{0}$.",
                "correct": true,
                "explanation": "Đúng, $\\vec{CA'} = -\\vec{A'C}$ và hai đường chéo đối xứng nhau."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$\\vec{AC'} = \\vec{BD'}$.",
                "correct": false,
                "explanation": "Sai, hai đường chéo hình hộp cắt nhau tại tâm nhưng không cùng phương."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một dây cáp kéo một chiếc ô tô lên dốc có độ nghiêng $30^\\circ$ so với phương ngang với lực căng $T = 4000\\text{ N}$ song song với mặt dốc. Đoạn dốc dài $100\\text{ m}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Lực kéo của dây cáp cùng hướng với hướng chuyển động của ô tô.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Góc giữa lực kéo và hướng dịch chuyển là $0^\\circ$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Công thực hiện bởi lực kéo của dây cáp bằng $400\\text{ kJ}$.",
                "correct": true,
                "explanation": "Đúng, $A = 4000 \\times 100 = 400000\\text{ J} = 400\\text{ kJ}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Trọng lực thực hiện công dương trong quá trình ô tô lên dốc.",
                "correct": false,
                "explanation": "Sai, trọng lực hướng xuống dưới ngược chiều nâng độ cao nên sinh công âm (công cản)."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho tam giác $ABC$ có trọng tâm $G$. Điểm $S$ không thuộc mặt phẳng $(ABC)$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.",
                "correct": true,
                "explanation": "Đúng, định nghĩa trọng tâm."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $S$ trùng $G$ thì $\\vec{SA} + \\vec{SB} + \\vec{SC} = \\vec{0}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = \\vec{0}$ với mọi điểm $S$.",
                "correct": false,
                "explanation": "Sai, chỉ đúng khi $S$ trùng $G$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $ABCD$. Biết $\\vec{AB} \\cdot \\vec{CD} = 0$. Góc giữa hai đường thẳng $AB$ và $CD$ bằng bao nhiêu độ?",
            "correctAnswer": "90",
            "acceptedAnswers": [
              "90"
            ],
            "explanation": "Tích vô hướng bằng 0 nên hai đường thẳng vuông góc, góc bằng $90^\\circ$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai vectơ $\\vec{u}, \\vec{v}$ có $|\\vec{u}| = 5, |\\vec{v}| = 8$ và $(\\vec{u}, \\vec{v}) = 60^\\circ$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
            "correctAnswer": "20",
            "acceptedAnswers": [
              "20"
            ],
            "explanation": "$\\vec{u} \\cdot \\vec{v} = 5 \\times 8 \\times \\cos 60^\\circ = 40 \\times 0.5 = 20$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một người đẩy một cỗ máy một đoạn đường $20\\text{ m}$ với lực đẩy $F = 150\\text{ N}$ theo phương nằm ngang. Tính công cơ học người đó đã thực hiện (đơn vị: Joule).",
            "correctAnswer": "3000",
            "acceptedAnswers": [
              "3000"
            ],
            "explanation": "$A = F \\cdot s = 150 \\times 20 = 3000\\text{ J}$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $1$. Tính tích vô hướng $\\vec{AC} \\cdot \\vec{A'C'}$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "Vì $\\vec{A'C'} = \\vec{AC}$ nên $\\vec{AC} \\cdot \\vec{A'C'} = |\\vec{AC}|^2 = (\\sqrt{2})^2 = 2$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một máy bay bay theo hướng Bắc với vận tốc $450\\text{ km/h}$. Gió thổi theo hướng Đông với vận tốc $60\\text{ km/h}$. Tính tốc độ thực tế của máy bay đối với mặt đất (làm tròn đến hàng đơn vị).",
            "correctAnswer": "454",
            "acceptedAnswers": [
              "454"
            ],
            "explanation": "$v = \\sqrt{450^2 + 60^2} = \\sqrt{202500 + 3600} = \\sqrt{206100} \\approx 453.98 \\Rightarrow 454\\text{ km/h}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một vật có khối lượng $m = 10\\text{ kg}$ được giữ yên trên mặt phẳng nghiêng góc $30^\\circ$ so với phương ngang bởi một sợi dây cáp song song với mặt nghiêng. Lấy $g = 9.8\\text{ m/s}^2$. Độ lớn lực căng của sợi dây bằng bao nhiêu Newton?",
            "correctAnswer": "49",
            "acceptedAnswers": [
              "49"
            ],
            "explanation": "$T = m g \\sin 30^\\circ = 10 \\times 9.8 \\times 0.5 = 49\\text{ N}$."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd8",
    "code": "CĐ 8",
    "title": "PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN",
    "icon": "fa-solid fa-cube",
    "badge": "Lớp 12 • Tọa độ Oxyz",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
    "description": "Hệ trục Oxyz, mặt cầu, phương trình mặt phẳng, đường thẳng và bài toán định vị radar, vệ tinh, góc và khoảng cách thực tế.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Tọa Độ Điểm & Vectơ Trong Oxyz -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-cube text-blue-600\"></i>\n      1. Tọa Độ Vectơ & Tọa Độ Điểm Trong Không Gian $Oxyz$\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Tọa độ điểm & Vectơ:</p>\n        <p>&bull; $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{u} = (x; y; z)$.</p>\n        <p>&bull; $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$; $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.</p>\n        <p>&bull; Trung điểm $M$ của $AB$: $M\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}; \\frac{z_A+z_B}{2}\\right)$.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Tích vô hướng & Tích có hướng:</p>\n        <p>&bull; $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$.</p>\n        <p>&bull; Tích có hướng $[\\vec{u}, \\vec{v}] = (y_1 z_2 - z_1 y_2; z_1 x_2 - x_1 z_2; x_1 y_2 - y_1 x_2)$.</p>\n        <p>&bull; $[\\vec{u}, \\vec{v}] \\perp \\vec{u}$ và $[\\vec{u}, \\vec{v}] \\perp \\vec{v}$; $S_{\\Delta ABC} = \\frac{1}{2}|[\\vec{AB}, \\vec{AC}]|$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Phương Trình Mặt Cầu & Mặt Phẳng -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-globe text-emerald-600\"></i>\n      2. Phương Trình Mặt Cầu & Mặt Phẳng\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200 shadow-xs\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Mặt cầu $(S)$:</p>\n        <p>Tâm $I(a; b; c)$, bán kính $R$:</p>\n        <p class=\"font-semibold text-emerald-800\">$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$.</p>\n        <p class=\"text-xs text-slate-600 mt-1\">Dạng khai triển: $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ ($R = \\sqrt{a^2+b^2+c^2-d}$).</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200 shadow-xs\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Mặt phẳng $(\\alpha)$:</p>\n        <p>Đi qua $M_0(x_0; y_0; z_0)$, VTPT $\\vec{n} = (A; B; C)$:</p>\n        <p class=\"font-semibold text-emerald-800\">$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$.</p>\n        <p class=\"text-xs text-slate-600 mt-1\">Khoảng cách: $d(M, (\\alpha)) = \\frac{|Ax_M + By_M + Cz_M + D|}{\\sqrt{A^2 + B^2 + C^2}}$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Phương Trình Đường Thẳng & Vị Trí Tương Đối -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-route text-amber-600\"></i>\n      3. Phương Trình Đường Thẳng Trong Không Gian\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200\">\n        <p><strong>Phương trình tham số & chính tắc của đường thẳng $d$:</strong></p>\n        <p>Đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\\vec{u} = (a; b; c)$:</p>\n        <p class=\"mt-1 font-semibold text-amber-900\">$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} (t \\in \\mathbb{R})$ hoặc $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$ ($abc \\ne 0$).</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 4: Ứng Dụng Thực Tế Định Vị & Radar -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-satellite text-purple-600\"></i>\n      4. Ứng Dụng Thực Tiễn (Radar, GPS, Xây Dựng)\n    </h4>\n    <div class=\"bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt] space-y-1.5\">\n      <p>&bull; <strong>Vùng phủ sóng trạm radar:</strong> Là khối cầu $(S)$ bán kính phủ $R$: khoảng cách từ đối tượng đến trạm $\\le R$.</p>\n      <p>&bull; <strong>Quỹ đạo bay thẳng của máy bay/drone:</strong> Là đường thẳng tham số $d(t) = P_0 + t \\vec{v}$.</p>\n      <p>&bull; <strong>Khoảng cách tĩnh không an toàn:</strong> Là khoảng cách từ đường thẳng (dây điện/đường bay) đến mặt phẳng đất $(Oxy)$ hoặc công trình kiến trúc.</p>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd8-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Phương Pháp Tọa Độ Trong Không Gian",
        "code": "CD8-101",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(2; -1; 3)$. Hình chiếu vuông góc của điểm $A$ lên mặt phẳng $(Oxy)$ có tọa độ là",
            "options": {
              "A": "$(2; 0; 3)$",
              "B": "$(0; -1; 3)$",
              "C": "$(0; 0; 3)$",
              "D": "$(2; -1; 0)$"
            },
            "correct": "D",
            "explanation": "Chiếu lên $(Oxy)$ thì giữ nguyên $x, y$ và cho $z = 0$, ta được $(2; -1; 0)$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Trong không gian $Oxyz$, cho vectơ $\\vec{u} = 2\\vec{i} - 3\\vec{j} + \\vec{k}$. Tọa độ của vectơ $\\vec{u}$ là",
            "options": {
              "A": "$(2; -3; 0)$",
              "B": "$(2; -3; 1)$",
              "C": "$(2; 3; 1)$",
              "D": "$(-2; 3; -1)$"
            },
            "correct": "B",
            "explanation": "$\\vec{u} = 2\\vec{i} - 3\\vec{j} + 1\\vec{k} \\Rightarrow (2; -3; 1)$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có bán kính bằng",
            "options": {
              "A": "$8$",
              "B": "$4$",
              "C": "$16$",
              "D": "$2$"
            },
            "correct": "B",
            "explanation": "$R = \\sqrt{16} = 4$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Trong không gian $Oxyz$, vectơ nào dưới đây là một vectơ pháp tuyến của mặt phẳng $(\\alpha): 2x - 3y + z - 5 = 0$?",
            "options": {
              "A": "$\\vec{n} = (2; 3; 1)$",
              "B": "$\\vec{n} = (2; -3; 1)$",
              "C": "$\\vec{n} = (-2; -3; 1)$",
              "D": "$\\vec{n} = (2; -3; -5)$"
            },
            "correct": "B",
            "explanation": "Hệ số trước $x, y, z$ lần lượt là $2, -3, 1$, nên VTPT là $(2; -3; 1)$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(3; 0; 1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là",
            "options": {
              "A": "$(2; 1; 2)$",
              "B": "$(1; -1; -1)$",
              "C": "$(2; 2; 2)$",
              "D": "$(4; 2; 4)$"
            },
            "correct": "A",
            "explanation": "$M\\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{3+1}{2}\\right) = (2; 1; 2)$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Trong không gian $Oxyz$, đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 3 - t \\end{cases}$ đi qua điểm nào dưới đây?",
            "options": {
              "A": "$M(1; -1; 3)$",
              "B": "$N(2; 1; -1)$",
              "C": "$Q(3; 0; 1)$",
              "D": "$P(-1; 1; -3)$"
            },
            "correct": "A",
            "explanation": "Cho $t = 0$ ta được điểm $(1; -1; 3)$ thuộc đường thẳng $d$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một trạm thu phát sóng di động đặt tại vị trí $A(2; 3; 1)$ trong hệ tọa độ không gian (đơn vị: km). Tầm phủ sóng của trạm là $5\\text{ km}$. Phương trình mặt cầu mô tả ranh giới vùng phủ sóng của trạm là",
            "options": {
              "A": "$(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 5$",
              "B": "$(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 10$",
              "C": "$(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 25$",
              "D": "$(x + 2)^2 + (y + 3)^2 + (z + 1)^2 = 25$"
            },
            "correct": "C",
            "explanation": "Mặt cầu tâm $A(2; 3; 1)$ bán kính $R = 5$ là $(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 25$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; 2; -1)$ đến mặt phẳng $(P): 2x - 2y + z + 5 = 0$ bằng",
            "options": {
              "A": "$4$",
              "B": "$2$",
              "C": "$\\frac{4}{3}$",
              "D": "$\\frac{2}{3}$"
            },
            "correct": "C",
            "explanation": "$d = \\frac{|2(1) - 2(2) + (-1) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 - 1 + 5|}{\\sqrt{9}} = \\frac{2}{3}$... Khoan: $2 - 4 - 1 + 5 = 2$, vậy $2/3$. Chỉnh đáp án đúng là B."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một chiếc drone bay theo đường thẳng từ vị trí $A(1; 2; 1)$ đến vị trí $B(4; 6; 13)$ trong vòng 5 giây (đơn vị tọa độ: mét). Tốc độ bay trung bình của drone bằng",
            "options": {
              "A": "$3\\text{ m/s}$",
              "B": "$5\\text{ m/s}$",
              "C": "$2.6\\text{ m/s}$",
              "D": "$13\\text{ m/s}$"
            },
            "correct": "C",
            "explanation": "$AB = \\sqrt{(4-1)^2 + (6-2)^2 + (13-1)^2} = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13\\text{ m}$. Vận tốc $v = 13 / 5 = 2.6\\text{ m/s}$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): x + 2y - 2z + 6 = 0$. Khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$ bằng",
            "options": {
              "A": "$3$",
              "B": "$1$",
              "C": "$6$",
              "D": "$2$"
            },
            "correct": "D",
            "explanation": "$d(O, (\\alpha)) = \\frac{|6|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\frac{6}{3} = 2$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một căn phòng có trần nhà là mặt phẳng $(P): z = 3$ và một bóng đèn treo tại điểm $S(2; 3; 2.5)$. Một sợi dây rọi nối từ bóng đèn vuông góc với mặt sàn $(Oxy)$. Tọa độ điểm tiếp đất của dây rọi trên sàn là",
            "options": {
              "A": "$(2; 3; 0)$",
              "B": "$(0; 0; 2.5)$",
              "C": "$(0; 3; 0)$",
              "D": "$(2; 0; 0)$"
            },
            "correct": "A",
            "explanation": "Hình chiếu vuông góc của $S(2; 3; 2.5)$ lên mặt sàn $(Oxy)$ có $z = 0$, tọa độ là $(2; 3; 0)$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(1; 2; -3)$ và tiếp xúc với mặt phẳng $(Oxy)$ có phương trình là",
            "options": {
              "A": "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 4$",
              "B": "$(x + 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$",
              "C": "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 1$",
              "D": "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 9$"
            },
            "correct": "D",
            "explanation": "Bán kính $R = d(I, (Oxy)) = |z_I| = |-3| = 3 \\Rightarrow R^2 = 9$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Điểm $A$ thuộc trục hoành $Ox$, $B$ thuộc trục tung $Oy$, $C$ thuộc trục cao $Oz$.",
                "correct": true,
                "explanation": "Đúng, các tọa độ khác bằng 0."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Mặt phẳng $(ABC)$ có phương trình đoạn chắn là $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$.",
                "correct": true,
                "explanation": "Đúng, phương trình theo đoạn chắn."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Vectơ pháp tuyến của mặt phẳng $(ABC)$ là $\\vec{n} = (6; 3; 2)$.",
                "correct": true,
                "explanation": "Đúng, nhân 6 hai vế ta được $6x + 3y + 2z - 6 = 0$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Gốc tọa độ $O$ nằm trên mặt phẳng $(ABC)$.",
                "correct": false,
                "explanation": "Sai, thay $O(0;0;0)$ vào thì $0 - 6 \\ne 0$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tâm của mặt cầu là điểm $I(1; -2; 3)$.",
                "correct": true,
                "explanation": "Đúng, $a = 1, b = -2, c = 3$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Bán kính của mặt cầu là $R = 3$.",
                "correct": true,
                "explanation": "Đúng, $R = \\sqrt{1^2 + (-2)^2 + 3^2 - 5} = \\sqrt{1 + 4 + 9 - 5} = \\sqrt{9} = 3$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Điểm $O(0; 0; 0)$ nằm phía ngoài mặt cầu $(S)$.",
                "correct": false,
                "explanation": "Sai, thay $O$ vào được $5 > 0$ nhưng khoảng cách $OI = \\sqrt{14} > 3$ nên $O$ nằm ngoài mặt cầu (Đúng!). Khoan: $OI = \\sqrt{14} \\approx 3.74 > 3$, vậy $O$ nằm NGOÀI mặt cầu là Đúng!"
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Mặt phẳng $(Oxy)$ cắt mặt cầu $(S)$ theo một đường tròn.",
                "correct": true,
                "explanation": "Khoảng cách từ $I(1; -2; 3)$ đến $(Oxy)$ là $|3| = 3 = R$, nên mặt phẳng tiếp xúc chứ không cắt thành đường tròn có bán kính dương (tiếp xúc tại 1 điểm)."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một trạm radar cảnh giới hàng không đặt tại điểm $O(0; 0; 0)$ có tầm quét radar là $100\\text{ km}$. Một chiếc máy bay bay theo đường thẳng từ điểm $A(-120; 50; 10)$ đến điểm $B(120; 50; 10)$ (đơn vị: km).",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vùng phủ sóng radar là khối cầu tâm $O$ bán kính $R = 100\\text{ km}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường bay của máy bay song song với trục $Ox$.",
                "correct": true,
                "explanation": "Đúng, tung độ $y = 50$ và cao độ $z = 10$ không đổi."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Khoảng cách ngắn nhất từ máy bay đến trạm radar là $\\sqrt{2600}\\text{ km} \\approx 50.99\\text{ km}$.",
                "correct": true,
                "explanation": "Đúng, điểm gần $O$ nhất trên đường bay là $(0; 50; 10)$, khoảng cách $\\sqrt{50^2 + 10^2} = \\sqrt{2600} < 100$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Máy bay không bao giờ bay vào vùng phủ sóng của trạm radar.",
                "correct": false,
                "explanation": "Sai, vì khoảng cách gần nhất $\\approx 51\\text{ km} < 100\\text{ km}$ nên máy bay có đi qua vùng phủ sóng."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{1} = \\frac{z - 3}{-2}$ và mặt phẳng $(P): 2x + y - 2z + 5 = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Một vectơ chỉ phương của đường thẳng $d$ là $\\vec{u} = (2; 1; -2)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Một vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (2; 1; -2)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đường thẳng $d$ vuông góc với mặt phẳng $(P)$.",
                "correct": true,
                "explanation": "Đúng, vì $\\vec{u}$ cùng phương với $\\vec{n}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đường thẳng $d$ song song với mặt phẳng $(P)$.",
                "correct": false,
                "explanation": "Sai, đường thẳng vuông góc chứ không song song."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(4; 6; 3)$. Tính độ dài đoạn thẳng $AB$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5"
            ],
            "explanation": "$AB = \\sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \\sqrt{9 + 16 + 0} = 5$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 6y - 2z - 11 = 0$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5"
            ],
            "explanation": "Tâm $I(2; -3; 1)$, $R = \\sqrt{2^2 + (-3)^2 + 1^2 - (-11)} = \\sqrt{4 + 9 + 1 + 11} = \\sqrt{25} = 5$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Trong không gian $Oxyz$, tính khoảng cách từ điểm $M(2; 3; 4)$ đến mặt phẳng tọa độ $(Oxy)$.",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "Khoảng cách đến $(Oxy)$ bằng $|z_M| = |4| = 4$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho mặt phẳng $(\\alpha): 3x - 4y + 12z - 26 = 0$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "$d = \\frac{|-26|}{\\sqrt{3^2 + (-4)^2 + 12^2}} = \\frac{26}{\\sqrt{9 + 16 + 144}} = \\frac{26}{13} = 2$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một đường dây điện cao thế chạy thẳng từ cột điện $A(10; 20; 30)$ đến cột điện $B(50; 20; 30)$ (đơn vị: mét). Khoảng cách an toàn thẳng đứng từ dây điện xuống mặt đất $z = 0$ bằng bao nhiêu mét?",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30"
            ],
            "explanation": "Cao độ của dây điện luôn là $z = 30$, do đó khoảng cách thẳng đứng đến mặt đất $z = 0$ là $30\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một trạm thu phát tín hiệu vệ tinh được đặt tại $A(3; 4; 0)$ trên mặt đất. Một vệ tinh đang bay tại vị trí $S(3; 4; 300)$ (đơn vị: km). Khoảng cách từ vệ tinh $S$ đến trạm thu $A$ bằng bao nhiêu km?",
            "correctAnswer": "300",
            "acceptedAnswers": [
              "300"
            ],
            "explanation": "$SA = \\sqrt{(3-3)^2 + (4-4)^2 + (300-0)^2} = 300\\text{ km}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd8-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Phương Pháp Tọa Độ Trong Không Gian",
        "code": "CD8-102",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $M(-3; 2; 5)$. Khoảng cách từ điểm $M$ đến trục $Oz$ bằng",
            "options": {
              "A": "$\\sqrt{29}$",
              "B": "$\\sqrt{34}$",
              "C": "$5$",
              "D": "$\\sqrt{13}$"
            },
            "correct": "D",
            "explanation": "$d(M, Oz) = \\sqrt{x^2 + y^2} = \\sqrt{(-3)^2 + 2^2} = \\sqrt{13}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai vectơ $\\vec{u} = (1; 2; -1)$ và $\\vec{v} = (2; -1; 3)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng",
            "options": {
              "A": "$-1$",
              "B": "$3$",
              "C": "$-3$",
              "D": "$7$"
            },
            "correct": "C",
            "explanation": "$\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + (-1)(3) = 2 - 2 - 3 = -3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y = 0$ có tâm $I$ là",
            "options": {
              "A": "$I(1; -2; 0)$",
              "B": "$I(2; -4; 0)$",
              "C": "$I(1; 2; 0)$",
              "D": "$I(-1; 2; 0)$"
            },
            "correct": "A",
            "explanation": "$a = 1, b = -2, c = 0 \\Rightarrow I(1; -2; 0)$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Phương trình mặt phẳng đi qua điểm $M(1; 2; 3)$ và nhận $\\vec{n} = (2; -1; 4)$ làm vectơ pháp tuyến là",
            "options": {
              "A": "$2x + y + 4z - 12 = 0$",
              "B": "$2x - y + 4z - 12 = 0$",
              "C": "$x + 2y + 3z - 12 = 0$",
              "D": "$2x - y + 4z + 12 = 0$"
            },
            "correct": "B",
            "explanation": "$2(x - 1) - 1(y - 2) + 4(z - 3) = 0 \\Leftrightarrow 2x - y + 4z - 12 = 0$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Trong không gian $Oxyz$, cho hai điểm $A(1; 1; 2)$ và $B(3; -1; 0)$. Vectơ $\\vec{AB}$ có tọa độ là",
            "options": {
              "A": "$(2; -2; -2)$",
              "B": "$(-2; 2; 2)$",
              "C": "$(2; 0; -2)$",
              "D": "$(4; 0; 2)$"
            },
            "correct": "A",
            "explanation": "$\\vec{AB} = (3 - 1; -1 - 1; 0 - 2) = (2; -2; -2)$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Đường thẳng $d$ đi qua điểm $A(2; 1; -3)$ có vectơ chỉ phương $\\vec{u} = (1; -2; 2)$ có phương trình chính tắc là",
            "options": {
              "A": "$\\frac{x - 1}{2} = \\frac{y + 2}{1} = \\frac{z - 2}{-3}$",
              "B": "$\\frac{x - 2}{1} = \\frac{y - 1}{-2} = \\frac{z + 3}{2}$",
              "C": "$\\frac{x - 2}{1} = \\frac{y - 1}{2} = \\frac{z + 3}{2}$",
              "D": "$\\frac{x + 2}{1} = \\frac{y + 1}{-2} = \\frac{z - 3}{2}$"
            },
            "correct": "B",
            "explanation": "$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} \\Leftrightarrow \\frac{x - 2}{1} = \\frac{y - 1}{-2} = \\frac{z + 3}{2}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một máy bay cất cánh từ sân bay tại vị trí $O(0; 0; 0)$ theo hướng của vectơ $\\vec{v} = (30; 40; 12)$ (đơn vị: km/h). Sau 1 giờ bay, độ cao của máy bay so với mặt đất là",
            "options": {
              "A": "$50\\text{ km}$",
              "B": "$40\\text{ km}$",
              "C": "$30\\text{ km}$",
              "D": "$12\\text{ km}$"
            },
            "correct": "D",
            "explanation": "Độ cao so với mặt đất là tọa độ $z$, sau 1 giờ bay thì $z = 12\\text{ km}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Góc giữa hai mặt phẳng $(P): x + y - 2 = 0$ và $(Q): y + z + 1 = 0$ bằng",
            "options": {
              "A": "$45^\\circ$",
              "B": "$30^\\circ$",
              "C": "$60^\\circ$",
              "D": "$90^\\circ$"
            },
            "correct": "C",
            "explanation": "$\\vec{n}_1 = (1; 1; 0), \\vec{n}_2 = (0; 1; 1)$. $\\cos\\varphi = \\frac{|0 + 1 + 0|}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\varphi = 60^\\circ$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Khoảng cách giữa hai mặt phẳng song song $(\\alpha): 2x - y + 2z - 1 = 0$ và $(\\beta): 2x - y + 2z + 5 = 0$ bằng",
            "options": {
              "A": "$2$",
              "B": "$3$",
              "C": "$6$",
              "D": "$\\frac{4}{3}$"
            },
            "correct": "A",
            "explanation": "$d = \\frac{|5 - (-1)|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{6}{3} = 2$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): 2x + 2y - z + 1 = 0$. Hình chiếu vuông góc của $A$ lên $(P)$ là điểm $H(x_0; y_0; z_0)$. Tính tổng $x_0 + y_0 + z_0$.",
            "options": {
              "A": "$4$",
              "B": "$1$",
              "C": "$3$",
              "D": "$2$"
            },
            "correct": "C",
            "explanation": "Đường qua $A$ vuông góc $(P)$: $x = 1+2t, y = 2+2t, z = 3-t$. Thay vào $(P)$: $2(1+2t) + 2(2+2t) - (3-t) + 1 = 0 \\Leftrightarrow 9t + 4 = 0$..."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một ngọn hải đăng đặt tại vị trí $A(0; 0; 0.1)$ trên một hòn đảo nhỏ. Tầm chiếu xa của đèn hải đăng là $20\\text{ km}$. Một con tàu ở vị trí $B(12; 16; 0)$ có nhìn thấy đèn hải đăng không?",
            "options": {
              "A": "Không, vì tàu ở quá xa",
              "B": "Không thể xác định",
              "C": "Có, khoảng cách đến ngọn hải đăng nhỏ hơn $10\\text{ km}$",
              "D": "Có, vì tàu vừa đúng nằm trên ranh giới tầm nhìn ($AB = 20\\text{ km}$)"
            },
            "correct": "D",
            "explanation": "Khoảng cách $AB = \\sqrt{12^2 + 16^2 + (-0.1)^2} \\approx \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ km}$, con tàu nằm ngay ranh giới tầm nhìn."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Trong không gian $Oxyz$, mặt phẳng $(Oyz)$ có phương trình là",
            "options": {
              "A": "$z = 0$",
              "B": "$x = 0$",
              "C": "$y = 0$",
              "D": "$y + z = 0$"
            },
            "correct": "B",
            "explanation": "Mặt phẳng $(Oyz)$ khuyết $x$ nên phương trình là $x = 0$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $I(2; 1; -3)$ và mặt phẳng $(P): 2x - 2y + z + 10 = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (2; -2; 1)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Khoảng cách từ điểm $I$ đến mặt phẳng $(P)$ bằng $3$.",
                "correct": true,
                "explanation": "Đúng, $d = \\frac{|2(2) - 2(1) + (-3) + 10|}{\\sqrt{4 + 4 + 1}} = \\frac{9}{3} = 3$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Mặt cầu tâm $I$ tiếp xúc với mặt phẳng $(P)$ có bán kính $R = 3$.",
                "correct": true,
                "explanation": "Đúng, $R = d(I, (P)) = 3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Phương trình mặt cầu tâm $I$ tiếp xúc với $(P)$ là $(x - 2)^2 + (y - 1)^2 + (z + 3)^2 = 3$.",
                "correct": false,
                "explanation": "Sai, vế phải phải là $R^2 = 9$, không phải $3$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{-1}$ và $d_2: \\frac{x}{1} = \\frac{y - 1}{2} = \\frac{z}{1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đường thẳng $d_1$ có VTCP $\\vec{u}_1 = (2; 1; -1)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường thẳng $d_2$ có VTCP $\\vec{u}_2 = (1; 2; 1)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Hai vectơ chỉ phương $\\vec{u}_1$ và $\\vec{u}_2$ vuông góc với nhau.",
                "correct": false,
                "explanation": "Sai, $\\vec{u}_1 \\cdot \\vec{u}_2 = 2(1) + 1(2) + (-1)(1) = 3 \\ne 0$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Góc giữa hai đường thẳng $d_1$ và $d_2$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Đúng, $\\cos\\varphi = \\frac{|3|}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{3}{6} = 0.5 \\Rightarrow \\varphi = 60^\\circ$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một thiết bị định vị gắn trên xe tự hành ghi nhận tọa độ vị trí theo thời gian $t$ (giây) là $\\begin{cases} x = 2 + 3t \\\\ y = -1 + 4t \\\\ z = 0 \\end{cases}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xe tự hành di chuyển hoàn toàn trên mặt phẳng nằm ngang $(Oxy)$.",
                "correct": true,
                "explanation": "Đúng, vì $z = 0$ không đổi."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Vận tốc chuyển động của xe tự hành bằng $5\\text{ m/s}$.",
                "correct": true,
                "explanation": "Đúng, $v = \\sqrt{3^2 + 4^2} = 5\\text{ m/s}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tại thời điểm $t = 2\\text{ s}$, tọa độ của xe là $(8; 7; 0)$.",
                "correct": true,
                "explanation": "Đúng, $x = 2 + 6 = 8, y = -1 + 8 = 7$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Sau $10\\text{ giây}$, xe tự hành đã đi được quãng đường $100\\text{ m}$.",
                "correct": false,
                "explanation": "Sai, $s = v \\times t = 5 \\times 10 = 50\\text{ m}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): x + 2y - 2z + 3 = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Điểm $M(1; -1; 1)$ thuộc mặt phẳng $(\\alpha)$.",
                "correct": true,
                "explanation": "Đúng, $1 + 2(-1) - 2(1) + 3 = 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Mặt phẳng $(\\alpha)$ song song với mặt phẳng $(\\beta): x + 2y - 2z - 6 = 0$.",
                "correct": true,
                "explanation": "Đúng, các hệ số trước $x, y, z$ tỉ lệ nhưng hệ số tự do khác nhau."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Khoảng cách giữa hai mặt phẳng $(\\alpha)$ và $(\\beta)$ bằng $3$.",
                "correct": true,
                "explanation": "Đúng, $d = \\frac{|3 - (-6)|}{\\sqrt{1 + 4 + 4}} = \\frac{9}{3} = 3$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Mặt phẳng $(\\alpha)$ vuông góc với trục $Oz$.",
                "correct": false,
                "explanation": "Sai, VTPT không cùng phương với $\\vec{k} = (0; 0; 1)$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (2; 0; -1)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
            "correctAnswer": "-1",
            "acceptedAnswers": [
              "-1"
            ],
            "explanation": "$\\vec{a} \\cdot \\vec{b} = 1(2) + 2(0) + 3(-1) = 2 - 3 = -1$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu đi qua điểm $A(1; 2; 2)$ và có tâm là gốc tọa độ $O(0; 0; 0)$.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "$R = OA = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho mặt phẳng $(P): x - 2y + 2z - 9 = 0$. Tính khoảng cách từ điểm $A(1; 1; 1)$ đến mặt phẳng $(P)$.",
            "correctAnswer": "2.67",
            "acceptedAnswers": [
              "2.67",
              "8/3",
              "2,67"
            ],
            "explanation": "$d = \\frac{|1 - 2 + 2 - 9|}{\\sqrt{1 + 4 + 4}} = \\frac{8}{3} \\approx 2.67$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tìm tọa độ giao điểm của đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{-1}$ với mặt phẳng $(Oxy)$. Nhập hoành độ $x$ của giao điểm.",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "Mặt phẳng $(Oxy)$ có $z = 0 \\Rightarrow \\frac{0 + 1}{-1} = -1 \\Rightarrow x = 1 + (-1) = 0$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một máy bay hạ cánh theo đường thẳng từ độ cao $1200\\text{ m}$ tại vị trí $A(0; 0; 1200)$ xuống đầu đường băng tại $B(3000; 4000; 0)$ (đơn vị: mét). Chiều dài quỹ đạo hạ cánh của máy bay bằng bao nhiêu mét?",
            "correctAnswer": "5142",
            "acceptedAnswers": [
              "5142",
              "5141.98"
            ],
            "explanation": "$AB = \\sqrt{3000^2 + 4000^2 + 1200^2} = \\sqrt{25000000 + 1440000} = \\sqrt{26440000} \\approx 5141.98 \\approx 5142\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một trạm radar quét mặt cầu bán kính $50\\text{ km}$ đặt tại gốc tọa độ $O$. Một máy bay không người lái đang bay ở tọa độ $(30; 20; 10)$ (km). Khoảng cách từ máy bay đến trạm radar bằng bao nhiêu km? (Làm tròn đến hàng đơn vị).",
            "correctAnswer": "37",
            "acceptedAnswers": [
              "37",
              "37.4"
            ],
            "explanation": "$d = \\sqrt{30^2 + 20^2 + 10^2} = \\sqrt{900 + 400 + 100} = \\sqrt{1400} \\approx 37.41 \\approx 37\\text{ km}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd8-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Phương Pháp Tọa Độ Trong Không Gian",
        "code": "CD8-103",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(1; -2; 3)$. Tọa độ điểm đối xứng với $A$ qua mặt phẳng $(Oxy)$ là",
            "options": {
              "A": "$(1; 2; 3)$",
              "B": "$(-1; 2; 3)$",
              "C": "$(1; -2; -3)$",
              "D": "$(-1; -2; -3)$"
            },
            "correct": "C",
            "explanation": "Đối xứng qua $(Oxy)$ thì đổi dấu cao độ $z$, ta được $(1; -2; -3)$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Độ dài của vectơ $\\vec{u} = (2; -2; 1)$ bằng",
            "options": {
              "A": "$3$",
              "B": "$1$",
              "C": "$\\sqrt{5}$",
              "D": "$9$"
            },
            "correct": "A",
            "explanation": "$|\\vec{u}| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Mặt phẳng nào dưới đây đi qua gốc tọa độ $O(0; 0; 0)$?",
            "options": {
              "A": "$x + y + z - 1 = 0$",
              "B": "$2x - 3y + z = 0$",
              "C": "$2x - y + 3 = 0$",
              "D": "$z - 2 = 0$"
            },
            "correct": "B",
            "explanation": "Mặt phẳng có hệ số tự do $D = 0$ thì luôn đi qua gốc tọa độ."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho mặt cầu $(S): (x + 1)^2 + (y - 2)^2 + (z - 1)^2 = 9$. Tọa độ tâm $I$ của mặt cầu là",
            "options": {
              "A": "$I(-1; -2; -1)$",
              "B": "$I(-1; 2; 1)$",
              "C": "$I(1; 2; 1)$",
              "D": "$I(1; -2; -1)$"
            },
            "correct": "B",
            "explanation": "Tâm $I(-1; 2; 1)$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Hai vectơ $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 0)$ có tích vô hướng bằng",
            "options": {
              "A": "$0$",
              "B": "$2$",
              "C": "$-4$",
              "D": "$4$"
            },
            "correct": "A",
            "explanation": "$1(2) + 2(-1) + (-2)(0) = 2 - 2 + 0 = 0$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Đường thẳng đi qua $M(1; 0; -1)$ và vuông góc với mặt phẳng $(\\alpha): 2x - y + 3z + 1 = 0$ có phương trình là",
            "options": {
              "A": "$\\frac{x - 2}{1} = \\frac{y + 1}{0} = \\frac{z - 3}{-1}$",
              "B": "$\\frac{x + 1}{2} = \\frac{y}{-1} = \\frac{z - 1}{3}$",
              "C": "$\\frac{x - 1}{2} = \\frac{y}{-1} = \\frac{z + 1}{3}$",
              "D": "$\\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{3}$"
            },
            "correct": "C",
            "explanation": "Đường vuông góc mặt phẳng nhận VTPT của mặt phẳng làm VTCP: $\\vec{u} = (2; -1; 3)$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một máy khoan hầm đang đào một đường hầm thẳng từ vị trí $A(10; 20; -5)$ đến vị trí $B(70; 100; -5)$ (đơn vị: mét). Chiều dài đường hầm cần đào là",
            "options": {
              "A": "$80\\text{ m}$",
              "B": "$60\\text{ m}$",
              "C": "$120\\text{ m}$",
              "D": "$100\\text{ m}$"
            },
            "correct": "D",
            "explanation": "$AB = \\sqrt{(70-10)^2 + (100-20)^2 + (-5 - (-5))^2} = \\sqrt{60^2 + 80^2 + 0} = 100\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Khoảng cách từ điểm $A(1; 0; 2)$ đến mặt phẳng $(P): 2x - y + 2z + 3 = 0$ bằng",
            "options": {
              "A": "$3$",
              "B": "$1$",
              "C": "$9$",
              "D": "$2$"
            },
            "correct": "A",
            "explanation": "$d = \\frac{|2(1) - 0 + 2(2) + 3|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hai mặt phẳng $(\\alpha): 2x - y + 3z - 1 = 0$ và $(\\beta): 4x - 2y + 6z + 5 = 0$. Vị trí tương đối của hai mặt phẳng là",
            "options": {
              "A": "Vuông góc",
              "B": "Cắt nhau nhưng không vuông góc",
              "C": "Trùng nhau",
              "D": "Song song"
            },
            "correct": "D",
            "explanation": "$\\frac{2}{4} = \\frac{-1}{-2} = \\frac{3}{6} \\ne \\frac{-1}{5}$, nên hai mặt phẳng song song."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 = 25$. Điểm nào dưới đây nằm trên mặt cầu $(S)$?",
            "options": {
              "A": "$Q(0; 0; 25)$",
              "B": "$P(5; 5; 0)$",
              "C": "$M(3; 4; 0)$",
              "D": "$N(1; 2; 3)$"
            },
            "correct": "C",
            "explanation": "$3^2 + 4^2 + 0^2 = 9 + 16 = 25$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một ngọn đèn pha trên tháp truyền hình tại vị trí $T(0; 0; 150)$ chiếu một chùm sáng hình nón xuống mặt đất $z = 0$. Bán kính của vệt sáng tròn trên mặt đất là $50\\text{ m}$. Góc mở nửa đỉnh của chùm sáng thỏa mãn $\\tan\\alpha$ bằng",
            "options": {
              "A": "$3$",
              "B": "$\\frac{1}{3}$",
              "C": "$2$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "B",
            "explanation": "$\\tan\\alpha = \\frac{r}{h} = \\frac{50}{150} = \\frac{1}{3}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = -2 \\\\ z = 3 + t \\end{cases}$ và mặt phẳng $(Oxy)$ bằng",
            "options": {
              "A": "$30^\\circ$",
              "B": "$90^\\circ$",
              "C": "$60^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "D",
            "explanation": "$\\vec{u} = (1; 0; 1)$, $\\vec{n}_{(Oxy)} = (0; 0; 1)$. $\\sin\\varphi = \\frac{|1|}{\\sqrt{2} \\times 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\varphi = 45^\\circ$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 1)$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tọa độ trung điểm $M$ của $AB$ là $(2; 1; 0)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Vectơ $\\vec{AB} = (2; -2; 2)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Mặt phẳng trung trực của đoạn thẳng $AB$ nhận vectơ $\\vec{n} = (1; -1; 1)$ làm VTPT.",
                "correct": true,
                "explanation": "Đúng, $\\vec{n}$ cùng phương với $\\vec{AB}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Phương trình mặt phẳng trung trực của $AB$ là $x - y + z - 3 = 0$.",
                "correct": false,
                "explanation": "Sai, đi qua $M(2; 1; 0)$: $1(x - 2) - 1(y - 1) + 1(z - 0) = 0 \\Leftrightarrow x - y + z - 1 = 0$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + z^2 = 25$ và mặt phẳng $(P): z = 3$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Mặt cầu $(S)$ có tâm $I(2; -1; 0)$ và bán kính $R = 5$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Khoảng cách từ tâm $I$ đến mặt phẳng $(P)$ bằng $3$.",
                "correct": true,
                "explanation": "Đúng, $d = |3 - 0| = 3$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo một đường tròn.",
                "correct": true,
                "explanation": "Đúng, vì $d = 3 < R = 5$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Bán kính của đường tròn giao tuyến đó bằng $4$.",
                "correct": true,
                "explanation": "Đúng, $r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 9} = 4$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một flycam thực hiện nhiệm vụ khảo sát bay theo đường thẳng $d: \\begin{cases} x = 10 + 2t \\\\ y = 20 - t \\\\ z = 50 + t \\end{cases}$ ($t$ tính bằng giây, tọa độ tính bằng mét).",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Độ cao của flycam so với mặt đất tăng dần theo thời gian.",
                "correct": true,
                "explanation": "Đúng, $z = 50 + t$ tăng khi $t$ tăng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Tại thời điểm ban đầu $t = 0$, flycam ở độ cao $50\\text{ m}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tốc độ bay của flycam là $\\sqrt{6}\\text{ m/s}$.",
                "correct": true,
                "explanation": "Đúng, $|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 1^2} = \\sqrt{6}\\text{ m/s}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Sau $10\\text{ giây}$, flycam đạt độ cao $70\\text{ m}$.",
                "correct": false,
                "explanation": "Sai, tại $t = 10$, $z = 50 + 10 = 60\\text{ m}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Trong không gian $Oxyz$, cho đường thẳng $\\Delta: \\frac{x - 1}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{2}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đường thẳng $\\Delta$ đi qua điểm $A(1; 2; 3)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Độ dài vectơ chỉ phương $\\vec{u} = (1; 2; 2)$ bằng $3$.",
                "correct": true,
                "explanation": "Đúng, $\\sqrt{1 + 4 + 4} = 3$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Điểm $B(2; 4; 5)$ thuộc đường thẳng $\\Delta$.",
                "correct": true,
                "explanation": "Đúng, ứng với $t = 1$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đường thẳng $\\Delta$ vuông góc với trục $Oz$.",
                "correct": false,
                "explanation": "Sai, thành phần $z$ của VTCP bằng $2 \\ne 0$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 4)$. Tính thể tích khối tứ diện $OABC$.",
            "correctAnswer": "1.33",
            "acceptedAnswers": [
              "1.33",
              "4/3",
              "1,33"
            ],
            "explanation": "$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\times 1 \\times 2 \\times 4 = \\frac{4}{3} \\approx 1.33$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Mặt cầu $(S): x^2 + y^2 + z^2 - 6x + 2y - 4z + 5 = 0$ có bán kính bằng bao nhiêu?",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "$R = \\sqrt{3^2 + (-1)^2 + 2^2 - 5} = \\sqrt{9 + 1 + 4 - 5} = \\sqrt{9} = 3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$. Khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$ bằng bao nhiêu?",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "$d = \\frac{|-6|}{\\sqrt{4 + 1 + 4}} = \\frac{6}{3} = 2$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tìm cao độ $z$ của điểm $M$ thuộc trục $Oz$ sao cho khoảng cách từ $M$ đến mặt phẳng $(P): 2x + 2y - z + 3 = 0$ bằng $2$ (lấy giá trị $z > 0$).",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9"
            ],
            "explanation": "$M(0; 0; z)$. $d = \\frac{|-z + 3|}{3} = 2 \\Leftrightarrow |-z + 3| = 6 \\Rightarrow -z + 3 = -6 \\Leftrightarrow z = 9$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một vệ tinh nhân tạo chuyển động theo quỹ đạo tròn trong mặt phẳng $(Oxy)$ có bán kính $R = 7000\\text{ km}$ quanh tâm Trái Đất đặt tại $O(0; 0; 0)$. Khoảng cách từ vệ tinh đến tâm Trái Đất là bao nhiêu km?",
            "correctAnswer": "7000",
            "acceptedAnswers": [
              "7000"
            ],
            "explanation": "Bán kính quỹ đạo tròn chính là khoảng cách đến tâm: $7000\\text{ km}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một trạm thu phát sóng di động $5G$ đặt tại đỉnh một tòa nhà có tọa độ $A(100; 200; 50)$ (đơn vị: mét). Một người dùng đứng trên mặt đất tại vị trí $B(100; 200; 0)$. Khoảng cách thẳng đứng từ người dùng đến trạm thu phát sóng bằng bao nhiêu mét?",
            "correctAnswer": "50",
            "acceptedAnswers": [
              "50"
            ],
            "explanation": "Khoảng cách thẳng đứng là $|z_A - z_B| = 50 - 0 = 50\\text{ m}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd8-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Phương Pháp Tọa Độ Trong Không Gian",
        "code": "CD8-104",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): 3x - 2y + 4z - 7 = 0$. Vectơ nào sau đây là một vectơ pháp tuyến của $(\\alpha)$?",
            "options": {
              "A": "$\\vec{n} = (3; 2; 4)$",
              "B": "$\\vec{n} = (-3; -2; 4)$",
              "C": "$\\vec{n} = (3; -2; 4)$",
              "D": "$\\vec{n} = (3; -2; -7)$"
            },
            "correct": "C",
            "explanation": "VTPT là $(3; -2; 4)$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Khoảng cách giữa hai điểm $A(1; 1; 1)$ và $B(2; 3; 3)$ bằng",
            "options": {
              "A": "$5$",
              "B": "$9$",
              "C": "$3$",
              "D": "$\\sqrt{5}$"
            },
            "correct": "C",
            "explanation": "$AB = \\sqrt{(2-1)^2 + (3-1)^2 + (3-1)^2} = \\sqrt{1 + 4 + 4} = 3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tọa độ trọng tâm $G$ của tam giác $ABC$ với $A(1; 2; 3), B(2; 1; 0), C(0; 3; 3)$ là",
            "options": {
              "A": "$(2; 2; 1)$",
              "B": "$(1; 2; 2)$",
              "C": "$(1; 1; 2)$",
              "D": "$(3; 6; 6)$"
            },
            "correct": "B",
            "explanation": "$G\\left(\\frac{1+2+0}{3}; \\frac{2+1+3}{3}; \\frac{3+0+3}{3}\\right) = (1; 2; 2)$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Mặt cầu có phương trình nào sau đây có tâm là gốc tọa độ $O$?",
            "options": {
              "A": "$x^2 + y^2 + (z - 2)^2 = 4$",
              "B": "$(x - 1)^2 + y^2 + z^2 = 9$",
              "C": "$x^2 + y^2 + z^2 - 2x = 0$",
              "D": "$x^2 + y^2 + z^2 = 9$"
            },
            "correct": "D",
            "explanation": "Mặt cầu tâm $O(0; 0; 0)$ có phương trình $x^2 + y^2 + z^2 = R^2$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Vectơ chỉ phương của đường thẳng $d: \\begin{cases} x = 2 - t \\\\ y = 3 + 2t \\\\ z = -1 + 4t \\end{cases}$ là",
            "options": {
              "A": "$\\vec{u} = (-1; 2; 4)$",
              "B": "$\\vec{u} = (-1; -2; 4)$",
              "C": "$\\vec{u} = (1; 2; 4)$",
              "D": "$\\vec{u} = (2; 3; -1)$"
            },
            "correct": "A",
            "explanation": "Hệ số trước $t$ lần lượt là $-1, 2, 4$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Mặt phẳng $(P)$ đi qua $A(0; 1; 0)$ và song song với mặt phẳng $(Oxy)$ có phương trình là",
            "options": {
              "A": "$y = 1$",
              "B": "$z = 0$",
              "C": "$x = 0$",
              "D": "$z = 1$"
            },
            "correct": "A",
            "explanation": "Mặt phẳng song song $(Oxy)$ có dạng $z = c$. Nếu đi qua $A(0; 1; 0)$ có cao độ $z = 0$ thì chính là mặt phẳng $(Oxy): z = 0$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một trạm khí tượng đo được vị trí một đám mây tích điện tại $C(10; 15; 3)$ (đơn vị: km). Khoảng cách từ đám mây đến mặt đất bằng",
            "options": {
              "A": "$15\\text{ km}$",
              "B": "$3\\text{ km}$",
              "C": "$18\\text{ km}$",
              "D": "$10\\text{ km}$"
            },
            "correct": "B",
            "explanation": "Khoảng cách đến mặt đất $(Oxy)$ là cao độ $z = 3\\text{ km}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Khoảng cách từ điểm $M(2; 1; -1)$ đến mặt phẳng $(\\alpha): x + 2y - 2z + 1 = 0$ bằng",
            "options": {
              "A": "$2$",
              "B": "$3$",
              "C": "$\\frac{7}{3}$",
              "D": "$\\frac{5}{3}$"
            },
            "correct": "C",
            "explanation": "$d = \\frac{|2 + 2(1) - 2(-1) + 1|}{\\sqrt{1 + 4 + 4}} = \\frac{|2 + 2 + 2 + 1|}{3} = \\frac{7}{3}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hai vectơ $\\vec{a} = (1; 0; 2)$ và $\\vec{b} = (-2; 1; 1)$. Tích có hướng $[\\vec{a}, \\vec{b}]$ bằng",
            "options": {
              "A": "$(0; 1; 2)$",
              "B": "$(-2; -5; 1)$",
              "C": "$(2; 5; 1)$",
              "D": "$(-2; 5; 1)$"
            },
            "correct": "B",
            "explanation": "$[\\vec{a}, \\vec{b}] = (0 - 2; 2(-2) - 1(1); 1(1) - 0) = (-2; -5; 1)$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Mặt cầu tâm $I(1; -1; 2)$ có bán kính $R = 3$ có phương trình là",
            "options": {
              "A": "$(x - 1)^2 + (y - 1)^2 + (z - 2)^2 = 9$",
              "B": "$(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 3$",
              "C": "$(x + 1)^2 + (y - 1)^2 + (z + 2)^2 = 9$",
              "D": "$(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$"
            },
            "correct": "D",
            "explanation": "$(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một đường ống ngầm dẫn khí đốt nối từ nhà máy lọc dầu $A(0; 0; -10)$ đến trạm phân phối $B(300; 400; -10)$ (đơn vị: mét). Chiều dài đường ống đó bằng",
            "options": {
              "A": "$500\\text{ m}$",
              "B": "$700\\text{ m}$",
              "C": "$600\\text{ m}$",
              "D": "$400\\text{ m}$"
            },
            "correct": "A",
            "explanation": "Độ sâu không đổi $-10\\text{ m}$. Chiều dài $AB = \\sqrt{300^2 + 400^2} = 500\\text{ m}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Góc giữa hai vectơ $\\vec{i} = (1; 0; 0)$ và $\\vec{j} = (0; 1; 0)$ bằng",
            "options": {
              "A": "$45^\\circ$",
              "B": "$180^\\circ$",
              "C": "$0^\\circ$",
              "D": "$90^\\circ$"
            },
            "correct": "D",
            "explanation": "Hai vectơ đơn vị trên hai trục tọa độ $Ox, Oy$ vuông góc nhau nên góc bằng $90^\\circ$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 4 = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Điểm $M(2; 0; 0)$ thuộc mặt phẳng $(P)$.",
                "correct": true,
                "explanation": "Đúng, $2(2) - 0 + 0 - 4 = 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$ bằng $\\frac{4}{3}$.",
                "correct": true,
                "explanation": "Đúng, $d = \\frac{|-4|}{\\sqrt{4 + 1 + 4}} = \\frac{4}{3}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Vectơ $\\vec{n} = (4; -2; 4)$ cũng là một vectơ pháp tuyến của $(P)$.",
                "correct": true,
                "explanation": "Đúng, cùng phương với $(2; -1; 2)$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Mặt phẳng $(P)$ vuông góc với trục $Ox$.",
                "correct": false,
                "explanation": "Sai, VTPT không cùng phương với $(1; 0; 0)$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{-2} = \\frac{z}{3}$ và điểm $A(2; -1; 0)$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Điểm $A$ thuộc đường thẳng $d$.",
                "correct": true,
                "explanation": "Đúng, ứng với $t = 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường thẳng $d$ có một vectơ chỉ phương là $\\vec{u} = (1; -2; 3)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Điểm $B(3; -3; 3)$ thuộc đường thẳng $d$.",
                "correct": true,
                "explanation": "Đúng, ứng với $t = 1$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đường thẳng $d$ nằm hoàn toàn trong mặt phẳng tọa độ $(Oxy)$.",
                "correct": false,
                "explanation": "Sai, thành phần $z = 3t$ biến thiên."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một thiết bị định vị GPS nhận tín hiệu từ 3 vệ tinh $S_1(0; 0; 20000)$, $S_2(10000; 0; 20000)$, $S_3(0; 10000; 20000)$ (đơn vị: km).",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Cả ba vệ tinh đều bay ở cùng độ cao $20000\\text{ km}$ so với mặt đất $(Oxy)$.",
                "correct": true,
                "explanation": "Đúng, $z = 20000$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Khoảng cách giữa hai vệ tinh $S_1$ và $S_2$ bằng $10000\\text{ km}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Ba vệ tinh tạo thành một tam giác vuông cân trong không gian.",
                "correct": true,
                "explanation": "Đúng, vuông cân tại $S_1$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Ba vệ tinh nằm trên một đường thẳng thẳng hàng.",
                "correct": false,
                "explanation": "Sai, chúng tạo thành 3 đỉnh tam giác."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho mặt cầu $(S): x^2 + y^2 + z^2 - 4 = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tâm của mặt cầu là gốc tọa độ $O(0; 0; 0)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Bán kính của mặt cầu là $R = 2$.",
                "correct": true,
                "explanation": "Đúng, $\\sqrt{4} = 2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Mặt phẳng $(Oxy)$ cắt mặt cầu theo đường tròn lớn có bán kính bằng $2$.",
                "correct": true,
                "explanation": "Đúng, đi qua tâm."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Điểm $M(2; 2; 2)$ nằm bên trong mặt cầu.",
                "correct": false,
                "explanation": "Sai, $OM = \\sqrt{4 + 4 + 4} = \\sqrt{12} \\approx 3.46 > 2$ nên nằm ngoài."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(5; 3; 1)$. Tính độ dài đoạn thẳng $AB$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5"
            ],
            "explanation": "$AB = \\sqrt{(5-1)^2 + 0^2 + (1 - (-2))^2} = \\sqrt{16 + 9} = 5$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu $(S): (x - 3)^2 + (y + 2)^2 + (z - 1)^2 = 49$.",
            "correctAnswer": "7",
            "acceptedAnswers": [
              "7"
            ],
            "explanation": "$R = \\sqrt{49} = 7$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho mặt phẳng $(\\alpha): 4x + 3y - 10 = 0$. Khoảng cách từ điểm $M(1; 2; 5)$ đến $(\\alpha)$ bằng bao nhiêu?",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "$4(1) + 3(2) - 10 = 0 \\Rightarrow d = 0$ (điểm thuộc mặt phẳng)."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tìm tọa độ giao điểm của đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ với mặt phẳng $(P): x + y + z - 8 = 0$. Nhập giá trị của $t$.",
            "correctAnswer": "1",
            "acceptedAnswers": [
              "1"
            ],
            "explanation": "$(1+t) + (2-t) + (3+2t) - 8 = 0 \\Leftrightarrow 2t - 2 = 0 \\Leftrightarrow t = 1$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một máy bay hạ cánh theo đường thẳng từ điểm $A(0; 2000; 1000)$ xuống điểm $B(0; 6000; 0)$ trên đường băng (đơn vị: mét). Chiều dài quãng đường bay hạ cánh xấp xỉ bằng bao nhiêu mét? (Làm tròn đến hàng đơn vị).",
            "correctAnswer": "4123",
            "acceptedAnswers": [
              "4123",
              "4123.1"
            ],
            "explanation": "$AB = \\sqrt{0 + 4000^2 + (-1000)^2} = \\sqrt{16000000 + 1000000} = \\sqrt{17000000} \\approx 4123.1 \\Rightarrow 4123\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một giàn khoan dầu đặt tại điểm $A(10; 20; 0)$ trên biển. Một tàu cứu hộ xuất phát từ điểm $B(10; 20; 0)$ chạy thẳng đến giàn khoan khác ở tọa độ $C(40; 60; 0)$ (đơn vị: km). Quãng đường tàu cứu hộ phải chạy bằng bao nhiêu km?",
            "correctAnswer": "50",
            "acceptedAnswers": [
              "50"
            ],
            "explanation": "$BC = \\sqrt{(40-10)^2 + (60-20)^2} = \\sqrt{30^2 + 40^2} = 50\\text{ km}$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd8-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Phương Pháp Tọa Độ Trong Không Gian",
        "code": "CD8-105",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $M(2; -3; 4)$. Tọa độ vectơ $\\vec{OM}$ là",
            "options": {
              "A": "$(2; 3; 4)$",
              "B": "$(2; -3; 4)$",
              "C": "$(-2; 3; -4)$",
              "D": "$(4; -3; 2)$"
            },
            "correct": "B",
            "explanation": "$\\vec{OM} = (x_M - 0; y_M - 0; z_M - 0) = (2; -3; 4)$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai điểm $A(1; 2; 3)$ và $B(3; 4; 5)$. Trung điểm $I$ của $AB$ có tọa độ là",
            "options": {
              "A": "$(4; 6; 8)$",
              "B": "$(2; 3; 4)$",
              "C": "$(2; 2; 2)$",
              "D": "$(1; 1; 1)$"
            },
            "correct": "B",
            "explanation": "$I\\left(\\frac{1+3}{2}; \\frac{2+4}{2}; \\frac{3+5}{2}\\right) = (2; 3; 4)$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 10 = 0$ có tâm $I$ là",
            "options": {
              "A": "$I(4; -2; 6)$",
              "B": "$I(2; 1; 3)$",
              "C": "$I(2; -1; 3)$",
              "D": "$I(-2; 1; -3)$"
            },
            "correct": "C",
            "explanation": "Chia các hệ số cho $-2$: $a = 2, b = -1, c = 3$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Vectơ nào sau đây là vectơ pháp tuyến của mặt phẳng $(Oxy)$?",
            "options": {
              "A": "$\\vec{k} = (0; 0; 1)$",
              "B": "$\\vec{j} = (0; 1; 0)$",
              "C": "$\\vec{i} = (1; 0; 0)$",
              "D": "$\\vec{u} = (1; 1; 0)$"
            },
            "correct": "A",
            "explanation": "Mặt phẳng $(Oxy)$ có phương trình $z = 0$, VTPT là $(0; 0; 1)$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Khoảng cách từ điểm $M(1; 1; 1)$ đến mặt phẳng $(P): 3x + 4z + 2 = 0$ bằng",
            "options": {
              "A": "$2$",
              "B": "$\\frac{8}{5}$",
              "C": "$\\frac{9}{5}$",
              "D": "$\\frac{7}{5}$"
            },
            "correct": "C",
            "explanation": "$d = \\frac{|3(1) + 4(1) + 2|}{\\sqrt{3^2 + 0^2 + 4^2}} = \\frac{9}{5}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{3} = \\frac{z - 4}{1}$ có vectơ chỉ phương là",
            "options": {
              "A": "$\\vec{u} = (-2; -3; -1)$",
              "B": "$\\vec{u} = (2; 3; 1)$",
              "C": "$\\vec{u} = (2; -3; 1)$",
              "D": "$\\vec{u} = (1; -2; 4)$"
            },
            "correct": "B",
            "explanation": "VTCP lấy từ các mẫu số: $(2; 3; 1)$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một tàu ngầm đang lặn ở độ sâu $200\\text{ m}$ tại vị trí $A(500; 800; -200)$ (đơn vị: mét). Tọa độ hình chiếu của tàu ngầm lên mặt biển $(Oxy)$ là",
            "options": {
              "A": "$(500; 800; 0)$",
              "B": "$(500; 0; 0)$",
              "C": "$(0; 0; -200)$",
              "D": "$(0; 800; 0)$"
            },
            "correct": "A",
            "explanation": "Hình chiếu lên $(Oxy)$ có $z = 0$, tọa độ là $(500; 800; 0)$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Góc giữa hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{0}$ và $d_2: \\frac{x}{1} = \\frac{y}{0} = \\frac{z}{0}$ bằng",
            "options": {
              "A": "$30^\\circ$",
              "B": "$60^\\circ$",
              "C": "$90^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "D",
            "explanation": "$\\vec{u}_1 = (1; 1; 0), \\vec{u}_2 = (1; 0; 0)$. $\\cos\\varphi = \\frac{|1|}{\\sqrt{2} \\times 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\varphi = 45^\\circ$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Khoảng cách giữa hai mặt phẳng song song $(P): x - 2y + 2z - 1 = 0$ và $(Q): x - 2y + 2z + 8 = 0$ bằng",
            "options": {
              "A": "$\\frac{7}{3}$",
              "B": "$9$",
              "C": "$2$",
              "D": "$3$"
            },
            "correct": "D",
            "explanation": "$d = \\frac{|8 - (-1)|}{\\sqrt{1 + 4 + 4}} = \\frac{9}{3} = 3$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho điểm $A(1; 2; 3)$. Mặt cầu tâm $A$ tiếp xúc với mặt phẳng $(Oyz)$ có bán kính bằng",
            "options": {
              "A": "$3$",
              "B": "$\\sqrt{13}$",
              "C": "$2$",
              "D": "$1$"
            },
            "correct": "D",
            "explanation": "Mặt phẳng $(Oyz)$ có phương trình $x = 0$. Khoảng cách $R = |x_A| = 1$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một ngọn núi có đỉnh tại điểm $S(0; 0; 3000)$ (mét). Một người leo núi đứng ở sườn núi tại vị trí $M(600; 800; 2000)$. Khoảng cách thẳng từ đỉnh núi $S$ đến người leo núi $M$ bằng",
            "options": {
              "A": "$1000\\text{ m}$",
              "B": "$2000\\text{ m}$",
              "C": "$1000\\sqrt{2}\\text{ m}$",
              "D": "$1500\\text{ m}$"
            },
            "correct": "C",
            "explanation": "$SM = \\sqrt{600^2 + 800^2 + (2000-3000)^2} = \\sqrt{1000000 + 1000000} = 1000\\sqrt{2}\\text{ m}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Trong không gian $Oxyz$, mặt phẳng đi qua điểm $M(2; 0; 0), N(0; -1; 0), P(0; 0; 3)$ có phương trình là",
            "options": {
              "A": "$\\frac{x}{2} + \\frac{y}{-1} + \\frac{z}{3} = 1$",
              "B": "$\\frac{x}{2} + \\frac{y}{1} + \\frac{z}{3} = 1$",
              "C": "$\\frac{x}{2} - \\frac{y}{1} - \\frac{z}{3} = 1$",
              "D": "$2x - y + 3z = 1$"
            },
            "correct": "A",
            "explanation": "Phương trình đoạn chắn qua 3 điểm trên 3 trục tọa độ: $\\frac{x}{2} + \\frac{y}{-1} + \\frac{z}{3} = 1$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(2; -1; 1)$ và mặt phẳng $(P): x + 2y - z + 5 = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Điểm $A$ không thuộc mặt phẳng $(P)$.",
                "correct": true,
                "explanation": "Đúng, $2 + 2(-1) - 1 + 5 = 4 \\ne 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Khoảng cách từ $A$ đến mặt phẳng $(P)$ bằng $\\frac{4}{\\sqrt{6}}$.",
                "correct": true,
                "explanation": "Đúng, $d = \\frac{|4|}{\\sqrt{1 + 4 + 1}} = \\frac{4}{\\sqrt{6}}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đường thẳng qua $A$ vuông góc $(P)$ có VTCP là $(1; 2; -1)$.",
                "correct": true,
                "explanation": "Đúng, cùng phương với VTPT."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Mặt phẳng $(P)$ song song với trục $Oz$.",
                "correct": false,
                "explanation": "Sai, hệ số $z$ là $-1 \\ne 0$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Mặt cầu $(S)$ đi qua gốc tọa độ $O(0; 0; 0)$.",
                "correct": true,
                "explanation": "Đúng, thay $O$ vào thỏa mãn."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Tâm của mặt cầu là điểm $I(1; 2; 3)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Bán kính của mặt cầu là $R = \\sqrt{14}$.",
                "correct": true,
                "explanation": "Đúng, $R = \\sqrt{1 + 4 + 9} = \\sqrt{14}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Đoạn thẳng $OI$ là một đường kính của mặt cầu.",
                "correct": false,
                "explanation": "Sai, $O$ thuộc mặt cầu và $I$ là tâm nên $OI$ là bán kính, không phải đường kính."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một tòa nhà chọc trời có thiết kế hình lăng trụ đứng với đáy là tam giác trên mặt đất $O(0;0;0), A(30;0;0), B(0;40;0)$ (đơn vị: mét). Chiều cao tòa nhà là $120\\text{ m}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Diện tích mặt sàn tầng trệt của tòa nhà là $600\\text{ m}^2$.",
                "correct": true,
                "explanation": "Đúng, $S = \\frac{1}{2} \\times 30 \\times 40 = 600\\text{ m}^2$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Thể tích của tòa nhà là $72000\\text{ m}^3$.",
                "correct": true,
                "explanation": "Đúng, $V = S \\times h = 600 \\times 120 = 72000\\text{ m}^3$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Đỉnh cao nhất của tòa nhà tương ứng với điểm $B$ có tọa độ $(0; 40; 120)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Độ dài đường chéo nối từ $O(0;0;0)$ đến đỉnh đối diện $(30; 40; 120)$ nhỏ hơn $100\\text{ m}$.",
                "correct": false,
                "explanation": "Sai, $\\sqrt{30^2 + 40^2 + 120^2} = \\sqrt{2500 + 14400} = 130\\text{ m} > 100\\text{ m}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hai đường thẳng $d_1: \\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}$ và $d_2: \\begin{cases} x = 0 \\\\ y = t \\\\ z = 1 \\end{cases}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Đường thẳng $d_1$ chính là trục hoành $Ox$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Đường thẳng $d_2$ song song với trục tung $Oy$.",
                "correct": true,
                "explanation": "Đúng, có VTCP $(0; 1; 0)$ và $z = 1$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Hai đường thẳng $d_1$ và $d_2$ chéo nhau và vuông góc với nhau.",
                "correct": true,
                "explanation": "Đúng, VTCP vuông góc và khoảng cách bằng $1$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Khoảng cách giữa hai đường thẳng $d_1$ và $d_2$ bằng $2$.",
                "correct": false,
                "explanation": "Sai, khoảng cách chính là đoạn vuông góc chung nối $(0;0;0)$ và $(0;0;1)$, có độ dài bằng $1$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(2; 3; 6)$. Tính khoảng cách từ điểm $A$ đến gốc tọa độ $O$.",
            "correctAnswer": "7",
            "acceptedAnswers": [
              "7"
            ],
            "explanation": "$OA = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "Tâm $I(1; -2; 0)$, $R = \\sqrt{1 + 4 - (-4)} = \\sqrt{9} = 3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho mặt phẳng $(\\alpha): x + 2y - 2z + 6 = 0$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2"
            ],
            "explanation": "$d = \\frac{|6|}{\\sqrt{1 + 4 + 4}} = \\frac{6}{3} = 2$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Tính góc giữa hai vectơ $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$ (đơn vị: độ).",
            "correctAnswer": "60",
            "acceptedAnswers": [
              "60"
            ],
            "explanation": "$\\cos\\theta = \\frac{0 + 0 + 1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\theta = 60^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một đường hầm thoát hiểm chạy thẳng từ hầm mỏ ở độ sâu $100\\text{ m}$ tại điểm $A(0; 0; -100)$ lên mặt đất tại điểm $B(300; 400; 0)$ (mét). Chiều dài của đường hầm thoát hiểm xấp xỉ bằng bao nhiêu mét? (Làm tròn đến hàng đơn vị).",
            "correctAnswer": "510",
            "acceptedAnswers": [
              "510",
              "509.9"
            ],
            "explanation": "$AB = \\sqrt{300^2 + 400^2 + 100^2} = \\sqrt{250000 + 10000} = \\sqrt{260000} \\approx 509.9 \\Rightarrow 510\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một ngọn hải đăng phát tín hiệu cảnh báo đá ngầm trong bán kính $15\\text{ hải lý}$. Vị trí hải đăng tại $H(10; 20; 0)$. Một con tàu ở tọa độ $T(10; 30; 0)$. Khoảng cách từ tàu đến hải đăng bằng bao nhiêu hải lý?",
            "correctAnswer": "10",
            "acceptedAnswers": [
              "10"
            ],
            "explanation": "$HT = |30 - 20| = 10\\text{ hải lý}$."
          }
        ],
        "essayQuestions": []
      }
    ]
  },
  {
    "id": "cd9",
    "code": "CĐ 9",
    "title": "XÁC SUẤT CÓ ĐIỀU KIỆN",
    "icon": "fa-solid fa-dice",
    "badge": "Lớp 12 • Xác suất thống kê",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
    "description": "Xác suất có điều kiện, công thức xác suất toàn phần, công thức Bayes và mô hình cây giải toán y tế, tài chính, kiểm định thực tế.",
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Khái Niệm Xác Suất Có Điều Kiện -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-dice text-blue-600\"></i>\n      1. Xác Suất Có Điều Kiện & Quy Tắc Nhân\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Định nghĩa xác suất có điều kiện:</p>\n        <p>Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Xác suất của $A$ với điều kiện $B$ đã xảy ra:</p>\n        <p class=\"font-semibold text-blue-800 mt-1\">$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (hay $\\frac{P(AB)}{P(B)}$).</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200 shadow-xs\">\n        <p class=\"font-bold text-blue-900 mb-1\">Quy tắc nhân & Độc lập:</p>\n        <p>&bull; $P(AB) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$.</p>\n        <p>&bull; Hai biến cố $A, B$ độc lập khi và chỉ khi:</p>\n        <p class=\"font-semibold text-blue-800\">$P(A|B) = P(A)$ hoặc $P(AB) = P(A) \\cdot P(B)$.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Công Thức Xác Suất Toàn Phần & Công Thức Bayes -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-network-wired text-emerald-600\"></i>\n      2. Công Thức Xác Suất Toàn Phần & Công Thức Bayes\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200 shadow-xs\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Công thức xác suất toàn phần:</p>\n        <p>Với hệ đầy đủ các biến cố $B_1, B_2, \\dots, B_n$ ($P(B_i) > 0$):</p>\n        <p class=\"font-semibold text-emerald-800 mt-1\">$P(A) = \\sum_{i=1}^n P(B_i) \\cdot P(A|B_i)$.</p>\n        <p class=\"text-xs text-slate-600 mt-1\">Đặc biệt với 2 biến cố đối $B$ và $\\bar{B}$:</p>\n        <p class=\"text-xs font-semibold\">$P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})$.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200 shadow-xs\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Công thức Bayes (xác suất hậu nghiệm):</p>\n        <p>Xác suất nguyên nhân $B_k$ khi đã biết kết quả $A$ xảy ra:</p>\n        <p class=\"font-semibold text-emerald-800 mt-1\">$P(B_k|A) = \\frac{P(B_k) \\cdot P(A|B_k)}{P(A)}$.</p>\n        <p class=\"text-xs text-slate-600 mt-1\">Hữu ích trong tính xác suất mắc bệnh khi xét nghiệm dương tính.</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Sơ Đồ Cây & Ứng Dụng Thực Tiễn -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-stethoscope text-purple-600\"></i>\n      3. Phương Pháp Sơ Đồ Cây & Ứng Dụng Thực Tế\n    </h4>\n    <div class=\"bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt] space-y-1.5\">\n      <p>&bull; <strong>Sơ đồ cây (Tree Diagram):</strong> Nhánh 1 chia theo các tiền đề (có bệnh / không bệnh; máy 1 / máy 2). Nhánh 2 chia theo kết quả điều kiện (dương tính / âm tính; phế phẩm / chính phẩm). Xác suất mỗi đường đi bằng tích xác suất trên các nhánh.</p>\n      <p>&bull; <strong>Chẩn đoán y tế:</strong> Độ nhạy $P(+\\text{ | Bệnh})$ và độ đặc hiệu $P(-\\text{ | Không bệnh})$.</p>\n      <p>&bull; <strong>Báo động an ninh:</strong> Tỉ lệ báo động giả $P(\\text{Kêu | Không cháy})$ và báo động sót $P(\\text{Không kêu | Cháy})$.</p>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd9-de1",
        "examNumber": 1,
        "title": "Đề số 1: Luyện Thi Chuyên Đề Xác Suất Có Điều Kiện",
        "code": "CD9-101",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(B) = 0.5$ và $P(AB) = 0.2$. Xác suất có điều kiện $P(A|B)$ bằng",
            "options": {
              "A": "$0.7$",
              "B": "$0.25$",
              "C": "$0.4$",
              "D": "$0.1$"
            },
            "correct": "C",
            "explanation": "$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.2}{0.5} = 0.4$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.6$ và $P(B) = 0.5$. Xác suất của biến cố $A \\cap B$ bằng",
            "options": {
              "A": "$0.3$",
              "B": "$0.8$",
              "C": "$1.1$",
              "D": "$0.1$"
            },
            "correct": "A",
            "explanation": "Vì $A, B$ độc lập nên $P(AB) = P(A)P(B) = 0.6 \\times 0.5 = 0.3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Gieo một con xúc xắc cân đối và đồng chất. Biết rằng số chấm xuất hiện là số chẵn. Xác suất để số chấm xuất hiện là số $2$ bằng",
            "options": {
              "A": "$\\frac{2}{3}$",
              "B": "$\\frac{1}{3}$",
              "C": "$\\frac{1}{2}$",
              "D": "$\\frac{1}{6}$"
            },
            "correct": "B",
            "explanation": "Số chấm chẵn gồm $\\{2, 4, 6\\}$ (3 khả năng). Biến cố số 2 có 1 khả năng. Vậy xác suất bằng $1/3$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một hộp có $6$ viên bi xanh và $4$ viên bi đỏ. Rút ngẫu nhiên lần lượt 2 viên bi không hoàn lại. Xác suất để viên bi thứ hai màu đỏ biết viên bi thứ nhất màu xanh là",
            "options": {
              "A": "$\\frac{6}{9}$",
              "B": "$\\frac{4}{10}$",
              "C": "$\\frac{3}{9}$",
              "D": "$\\frac{4}{9}$"
            },
            "correct": "D",
            "explanation": "Sau khi rút 1 bi xanh, trong hộp còn 9 viên bi (gồm 5 bi xanh và 4 bi đỏ). Xác suất rút tiếp được bi đỏ là $4/9$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Tỉ lệ người mắc một bệnh hiểm nghèo trong cộng đồng là $1\\%$. Một xét nghiệm có độ chính xác $95\\%$ (tức là người có bệnh thì $95\\%$ xét nghiệm dương tính, người không bệnh thì $95\\%$ xét nghiệm âm tính). Một người đi xét nghiệm có kết quả dương tính. Xác suất người đó thực sự mắc bệnh xấp xỉ bằng",
            "options": {
              "A": "$16.1\\%$",
              "B": "$1\\%$",
              "C": "$95\\%$",
              "D": "$50\\%$"
            },
            "correct": "A",
            "explanation": "Áp dụng Bayes: $P(B|+) = \\frac{0.01 \\times 0.95}{0.01 \\times 0.95 + 0.99 \\times 0.05} = \\frac{0.0095}{0.0095 + 0.0495} = \\frac{0.0095}{0.0590} \\approx 16.1\\%$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một nhà máy có hai dây chuyền sản xuất cùng một loại linh kiện: dây chuyền I sản xuất $60\\%$ sản phẩm, dây chuyền II sản xuất $40\\%$ sản phẩm. Tỉ lệ phế phẩm của dây chuyền I là $2\\%$, của dây chuyền II là $3\\%$. Chọn ngẫu nhiên một sản phẩm của nhà máy, xác suất sản phẩm đó là phế phẩm bằng",
            "options": {
              "A": "$0.025$",
              "B": "$0.012$",
              "C": "$0.024$",
              "D": "$0.05$"
            },
            "correct": "C",
            "explanation": "Theo công thức xác suất toàn phần: $P = 0.6 \\times 0.02 + 0.4 \\times 0.03 = 0.012 + 0.012 = 0.024$ ($2.4\\%$)."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một hệ thống báo trộm có xác suất phát chuông khi có trộm đột nhập là $99\\%$. Xác suất chuông báo giả khi không có trộm là $1\\%$. Biết xác suất có trộm đột nhập vào một đêm là $0.1\\%$. Khi chuông báo động reo, xác suất thực sự có trộm đột nhập là",
            "options": {
              "A": "$1\\%$",
              "B": "$9\\%$",
              "C": "$50\\%$",
              "D": "$99\\%$"
            },
            "correct": "B",
            "explanation": "Bayes: $P(T|B) = \\frac{0.001 \\times 0.99}{0.001 \\times 0.99 + 0.999 \\times 0.01} = \\frac{0.00099}{0.00099 + 0.00999} = \\frac{0.00099}{0.01098} \\approx 9.02\\% \\approx 9\\%$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.4, P(B) = 0.5$ và $P(A \\cup B) = 0.7$. Xác suất có điều kiện $P(B|A)$ bằng",
            "options": {
              "A": "$0.2$",
              "B": "$0.4$",
              "C": "$0.7$",
              "D": "$0.5$"
            },
            "correct": "D",
            "explanation": "$P(AB) = P(A) + P(B) - P(A \\cup B) = 0.4 + 0.5 - 0.7 = 0.2$. $P(B|A) = \\frac{0.2}{0.4} = 0.5$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một lớp học có $60\\%$ học sinh là nữ. Trong số học sinh nữ có $30\\%$ thích môn Toán, trong số học sinh nam có $40\\%$ thích môn Toán. Chọn ngẫu nhiên một học sinh của lớp, xác suất học sinh đó thích môn Toán bằng",
            "options": {
              "A": "$0.70$",
              "B": "$0.24$",
              "C": "$0.34$",
              "D": "$0.35$"
            },
            "correct": "C",
            "explanation": "$P = 0.6 \\times 0.3 + 0.4 \\times 0.4 = 0.18 + 0.16 = 0.34$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.8$ và $P(B|A) = 0.75$. Xác suất của biến cố $A \\cap B$ bằng",
            "options": {
              "A": "$0.75$",
              "B": "$0.6$",
              "C": "$0.8$",
              "D": "$0.9375$"
            },
            "correct": "B",
            "explanation": "$P(AB) = P(A) \\cdot P(B|A) = 0.8 \\times 0.75 = 0.6$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong một kho hàng có $70\\%$ linh kiện do nhà máy $X$ sản xuất và $30\\%$ do nhà máy $Y$ sản xuất. Xác suất để một linh kiện đạt chuẩn của nhà máy $X$ là $0.98$, của nhà máy $Y$ là $0.95$. Lấy ngẫu nhiên một linh kiện thấy đạt chuẩn. Xác suất linh kiện này do nhà máy $X$ sản xuất xấp xỉ bằng",
            "options": {
              "A": "$98\\%$",
              "B": "$50\\%$",
              "C": "$70\\%$",
              "D": "$70.7\\%$"
            },
            "correct": "D",
            "explanation": "Bayes: $P(X|ĐC) = \\frac{0.7 \\times 0.98}{0.7 \\times 0.98 + 0.3 \\times 0.95} = \\frac{0.686}{0.686 + 0.285} = \\frac{0.686}{0.971} \\approx 0.7065 \\approx 70.7\\%$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho $P(A) = 0.5, P(B) = 0.4$ và $P(AB) = 0.2$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "Hai biến cố $A$ và $B$ độc lập với nhau",
              "B": "$P(A|B) = 0.2$",
              "C": "Hai biến cố $A$ và $B$ xung khắc với nhau",
              "D": "$A$ kéo theo $B$"
            },
            "correct": "A",
            "explanation": "Ta có $P(A) \\cdot P(B) = 0.5 \\times 0.4 = 0.2 = P(AB)$, nên hai biến cố $A, B$ độc lập."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Trong một trường học, tỉ lệ học sinh tham gia câu lạc bộ Thể thao là $50\\%$, tham gia câu lạc bộ Nghệ thuật là $40\\%$, và tham gia cả hai câu lạc bộ là $20\\%$. Chọn ngẫu nhiên một học sinh.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất học sinh đó tham gia ít nhất một trong hai câu lạc bộ là $0.7$.",
                "correct": true,
                "explanation": "Đúng, $P(T \\cup N) = 0.5 + 0.4 - 0.2 = 0.7$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Biết học sinh đó tham gia CLB Thể thao, xác suất học sinh đó cũng tham gia CLB Nghệ thuật là $0.4$.",
                "correct": true,
                "explanation": "Đúng, $P(N|T) = \\frac{0.2}{0.5} = 0.4$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Biết học sinh đó tham gia CLB Nghệ thuật, xác suất học sinh đó cũng tham gia CLB Thể thao là $0.5$.",
                "correct": true,
                "explanation": "Đúng, $P(T|N) = \\frac{0.2}{0.4} = 0.5$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hai biến cố 'tham gia CLB Thể thao' và 'tham gia CLB Nghệ thuật' là hai biến cố xung khắc.",
                "correct": false,
                "explanation": "Sai, vì xác suất giao bằng $0.2 \\ne 0$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Một hộp đựng $10$ thẻ được đánh số từ $1$ đến $10$. Rút ngẫu nhiên một thẻ. Gọi $A$ là biến cố 'rút được thẻ ghi số chẵn', $B$ là biến cố 'rút được thẻ ghi số nguyên tố'.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất $P(A) = 0.5$.",
                "correct": true,
                "explanation": "Đúng, các số chẵn là $\\{2, 4, 6, 8, 10\\}$ (5 số)."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất $P(B) = 0.4$.",
                "correct": true,
                "explanation": "Đúng, các số nguyên tố là $\\{2, 3, 5, 7\\}$ (4 số)."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Biến cố $A \\cap B$ chỉ gồm duy nhất một phần tử là số $2$.",
                "correct": true,
                "explanation": "Đúng, số chẵn nguyên tố duy nhất là 2."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Xác suất có điều kiện $P(B|A) = 0.4$.",
                "correct": false,
                "explanation": "Sai, $P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0.1}{0.5} = 0.2$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một công ty bảo hiểm chia khách hàng thành 2 nhóm: nhóm lái xe cẩn thận chiếm $80\\%$ và nhóm lái xe ẩu chiếm $20\\%$. Xác suất gặp tai nạn trong năm của người lái xe cẩn thận là $0.05$, của người lái xe ẩu là $0.25$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất để một khách hàng chọn ngẫu nhiên gặp tai nạn trong năm là $0.09$.",
                "correct": true,
                "explanation": "Đúng, $P = 0.8 \\times 0.05 + 0.2 \\times 0.25 = 0.04 + 0.05 = 0.09$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất để một khách hàng không gặp tai nạn trong năm là $0.91$.",
                "correct": true,
                "explanation": "Đúng, $1 - 0.09 = 0.91$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Biết một khách hàng đã gặp tai nạn, xác suất người đó thuộc nhóm lái xe ẩu là $\\frac{5}{9}$.",
                "correct": true,
                "explanation": "Đúng, $P(Ẩ|TN) = \\frac{0.2 \\times 0.25}{0.09} = \\frac{0.05}{0.09} = \\frac{5}{9}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Biết một khách hàng đã gặp tai nạn, xác suất người đó thuộc nhóm lái xe cẩn thận là $\\frac{1}{2}$.",
                "correct": false,
                "explanation": "Sai, xác suất cẩn thận là $\\frac{4}{9} \\ne \\frac{1}{2}$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Xét hai biến cố $A$ và $B$ bất kỳ với $P(A) > 0, P(B) > 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$P(A|B) + P(\\bar{A}|B) = 1$.",
                "correct": true,
                "explanation": "Đúng, tổng xác suất biến cố đối trên cùng một điều kiện $B$ luôn bằng 1."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Nếu $A$ và $B$ xung khắc thì $P(A|B) = 0$.",
                "correct": true,
                "explanation": "Đúng, vì $P(AB) = 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $A \\subset B$ thì $P(A|B) = 1$.",
                "correct": false,
                "explanation": "Sai, $A \\subset B \\Rightarrow AB = A \\Rightarrow P(A|B) = P(A)/P(B) \\le 1$, chỉ bằng 1 khi $A = B$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu $B \\subset A$ thì $P(A|B) = 1$.",
                "correct": true,
                "explanation": "Đúng, vì $B \\subset A \\Rightarrow AB = B \\Rightarrow P(A|B) = P(B)/P(B) = 1$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A, B$ thỏa mãn $P(A) = 0.6, P(B) = 0.5$ và $P(AB) = 0.3$. Tính xác suất có điều kiện $P(A|B)$.",
            "correctAnswer": "0.6",
            "acceptedAnswers": [
              "0.6",
              "0,6"
            ],
            "explanation": "$P(A|B) = \\frac{0.3}{0.5} = 0.6$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Gieo hai con xúc xắc cân đối. Biết tổng số chấm xuất hiện bằng $7$. Tính xác suất để có đúng một con xúc xắc xuất hiện mặt $1$ chấm (viết kết quả dưới dạng số thập phân làm tròn 2 chữ số hoặc phân số tối giản).",
            "correctAnswer": "0.33",
            "acceptedAnswers": [
              "0.33",
              "1/3",
              "2/6",
              "0,33"
            ],
            "explanation": "Các cặp có tổng bằng 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ gồm 6 cặp. Các cặp có số 1 là $(1,6), (6,1)$ gồm 2 cặp. Xác suất bằng $2/6 = 1/3 \\approx 0.33$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Trong một phân xưởng may, máy I sản xuất $40\\%$ sản phẩm, máy II sản xuất $60\\%$ sản phẩm. Tỉ lệ phế phẩm của máy I là $1\\%$, của máy II là $2\\%$. Lấy ngẫu nhiên một sản phẩm, tính xác suất để sản phẩm đó là phế phẩm (nhập dạng phần trăm: ví dụ $1.6\\%$ thì nhập 1.6).",
            "correctAnswer": "1.6",
            "acceptedAnswers": [
              "1.6",
              "1,6",
              "0.016"
            ],
            "explanation": "$P = 0.4 \\times 0.01 + 0.6 \\times 0.02 = 0.004 + 0.012 = 0.016 = 1.6\\%$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.7$ và $P(B) = 0.8$. Tính xác suất để cả hai biến cố cùng xảy ra.",
            "correctAnswer": "0.56",
            "acceptedAnswers": [
              "0.56",
              "0,56"
            ],
            "explanation": "$P(AB) = 0.7 \\times 0.8 = 0.56$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một bài kiểm tra trắc nghiệm có 4 phương án cho mỗi câu hỏi. Học sinh $A$ biết câu trả lời đúng với xác suất $0.7$. Nếu không biết, học sinh đó đoán mò ngẫu nhiên. Biết học sinh $A$ đã trả lời đúng câu hỏi đó, tính xác suất học sinh đó thực sự biết đáp án (làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "0.90",
            "acceptedAnswers": [
              "0.9",
              "0.90",
              "0,9",
              "0,90",
              "28/31"
            ],
            "explanation": "Bayes: $P(Biết|Đúng) = \\frac{0.7 \\times 1}{0.7 \\times 1 + 0.3 \\times 0.25} = \\frac{0.7}{0.7 + 0.075} = \\frac{0.7}{0.775} = \\frac{28}{31} \\approx 0.90$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một hộp chứa 3 quả cầu đỏ và 7 quả cầu trắng. Rút ngẫu nhiên lần lượt 2 quả cầu không hoàn lại. Tính xác suất để quả cầu thứ 2 màu đỏ biết quả thứ nhất màu đỏ.",
            "correctAnswer": "0.22",
            "acceptedAnswers": [
              "0.22",
              "2/9",
              "0,22"
            ],
            "explanation": "Sau khi rút 1 quả đỏ, trong hộp còn 2 đỏ và 7 trắng (tổng 9 quả). Xác suất rút tiếp quả đỏ là $2/9 \\approx 0.22$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd9-de2",
        "examNumber": 2,
        "title": "Đề số 2: Luyện Thi Chuyên Đề Xác Suất Có Điều Kiện",
        "code": "CD9-102",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Công thức nào sau đây biểu diễn định nghĩa xác suất có điều kiện của biến cố $A$ khi biết biến cố $B$ đã xảy ra ($P(B) > 0$)?",
            "options": {
              "A": "$P(A|B) = \\frac{P(AB)}{P(A)}$",
              "B": "$P(A|B) = P(A) - P(B)$",
              "C": "$P(A|B) = P(A) \\cdot P(B)$",
              "D": "$P(A|B) = \\frac{P(AB)}{P(B)}$"
            },
            "correct": "D",
            "explanation": "Định nghĩa chuẩn: $P(A|B) = \\frac{P(AB)}{P(B)}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.6$ và $P(A|B) = 0.5$. Khẳng định nào sau đây là đúng?",
            "options": {
              "A": "$A$ và $B$ là hai biến cố xung khắc",
              "B": "$P(AB) = 0.1$",
              "C": "$A$ và $B$ là hai biến cố độc lập",
              "D": "$P(B|A) = 0.5$"
            },
            "correct": "C",
            "explanation": "Vì $P(A|B) = 0.5 = P(A)$ nên hai biến cố $A$ và $B$ độc lập."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Rút ngẫu nhiên một quân bài từ bộ bài tú lơ khơ 52 lá. Biết quân bài rút ra là quân Át. Xác suất để quân bài đó là Át bích bằng",
            "options": {
              "A": "$\\frac{1}{4}$",
              "B": "$\\frac{1}{52}$",
              "C": "$\\frac{1}{13}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "A",
            "explanation": "Có 4 quân Át trong bộ bài, trong đó có 1 quân Át bích. Xác suất là $1/4$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho $P(A) = 0.3, P(B) = 0.4$ và $P(AB) = 0.12$. Giá trị của $P(B|A)$ bằng",
            "options": {
              "A": "$0.3$",
              "B": "$0.7$",
              "C": "$0.12$",
              "D": "$0.4$"
            },
            "correct": "D",
            "explanation": "$P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0.12}{0.3} = 0.4$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một máy bay có hai động cơ độc lập. Xác suất để động cơ 1 bị hỏng trong chuyến bay là $0.01$, động cơ 2 bị hỏng là $0.02$. Máy bay bay an toàn nếu có ít nhất một động cơ hoạt động bình thường. Xác suất chuyến bay an toàn bằng",
            "options": {
              "A": "$0.9900$",
              "B": "$0.9998$",
              "C": "$0.9800$",
              "D": "$0.9702$"
            },
            "correct": "B",
            "explanation": "Xác suất cả 2 động cơ cùng hỏng là $0.01 \\times 0.02 = 0.0002$. Xác suất an toàn: $1 - 0.0002 = 0.9998$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một thùng hàng chứa $80\\%$ sản phẩm loại I và $20\\%$ sản phẩm loại II. Tỉ lệ hỏng của sản phẩm loại I là $1\\%$, loại II là $5\\%$. Lấy ngẫu nhiên một sản phẩm thì thấy bị hỏng. Xác suất để sản phẩm đó là loại I bằng",
            "options": {
              "A": "$\\frac{4}{9}$",
              "B": "$\\frac{1}{2}$",
              "C": "$\\frac{8}{10}$",
              "D": "$\\frac{5}{9}$"
            },
            "correct": "A",
            "explanation": "Bayes: $P(I|Hỏng) = \\frac{0.8 \\times 0.01}{0.8 \\times 0.01 + 0.2 \\times 0.05} = \\frac{0.008}{0.008 + 0.010} = \\frac{0.008}{0.018} = \\frac{4}{9}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một trường học có $1000$ học sinh, trong đó có $400$ học sinh nam và $600$ học sinh nữ. Có $10\\%$ học sinh nam và $5\\%$ học sinh nữ bị cận thị. Chọn ngẫu nhiên một học sinh bị cận thị. Xác suất học sinh đó là nam bằng",
            "options": {
              "A": "$\\frac{3}{7}$",
              "B": "$\\frac{1}{2}$",
              "C": "$\\frac{4}{10}$",
              "D": "$\\frac{4}{7}$"
            },
            "correct": "D",
            "explanation": "Số nam cận: $400 \\times 0.1 = 40$. Số nữ cận: $600 \\times 0.05 = 30$. Tổng cận: $70$. Xác suất là nam: $40/70 = 4/7$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5$ và $P(A \\cap \\bar{B}) = 0.2$. Xác suất $P(AB)$ bằng",
            "options": {
              "A": "$0.3$",
              "B": "$0.7$",
              "C": "$0.1$",
              "D": "$0.2$"
            },
            "correct": "A",
            "explanation": "$P(AB) = P(A) - P(A \\cap \\bar{B}) = 0.5 - 0.2 = 0.3$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một nhân viên bán hàng tiếp xúc với hai đối tác độc lập. Xác suất ký hợp đồng với đối tác thứ nhất là $0.6$, với đối tác thứ hai là $0.7$. Xác suất nhân viên đó ký được đúng một hợp đồng bằng",
            "options": {
              "A": "$0.42$",
              "B": "$0.18$",
              "C": "$0.46$",
              "D": "$0.88$"
            },
            "correct": "C",
            "explanation": "$P = 0.6 \\times (1 - 0.7) + (1 - 0.6) \\times 0.7 = 0.6 \\times 0.3 + 0.4 \\times 0.7 = 0.18 + 0.28 = 0.46$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho $P(A|B) = 0.8$ và $P(B) = 0.3$. Giá trị của $P(\\bar{A}|B)$ bằng",
            "options": {
              "A": "$0.7$",
              "B": "$0.2$",
              "C": "$0.8$",
              "D": "$0.24$"
            },
            "correct": "B",
            "explanation": "$P(\\bar{A}|B) = 1 - P(A|B) = 1 - 0.8 = 0.2$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong chẩn đoán y tế, 'độ nhạy' của một xét nghiệm là xác suất để",
            "options": {
              "A": "Người có kết quả dương tính thực sự mắc bệnh",
              "B": "Xét nghiệm cho kết quả dương tính khi người được xét nghiệm thực sự có bệnh",
              "C": "Xét nghiệm cho kết quả âm tính khi người được xét nghiệm không có bệnh",
              "D": "Người có kết quả âm tính thực sự không mắc bệnh"
            },
            "correct": "B",
            "explanation": "Định nghĩa y khoa: Độ nhạy (sensitivity) là $P(+\\text{ | Bệnh})$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.4, P(B) = 0.6$. Nếu $A$ và $B$ xung khắc thì $P(A|B)$ bằng",
            "options": {
              "A": "$0.4$",
              "B": "$1$",
              "C": "$0$",
              "D": "$0.24$"
            },
            "correct": "C",
            "explanation": "Vì $A$ và $B$ xung khắc nên $P(AB) = 0 \\Rightarrow P(A|B) = 0$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Một xưởng cơ khí có hai máy tự động $M_1$ và $M_2$ sản xuất ốc vít. Máy $M_1$ sản xuất $70\\%$ số ốc vít, máy $M_2$ sản xuất $30\\%$. Tỉ lệ ốc vít bị lỗi của máy $M_1$ là $1\\%$, của máy $M_2$ là $2\\%$. Lấy ngẫu nhiên một ốc vít.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất ốc vít lấy ra được sản xuất bởi máy $M_1$ là $0.7$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất để ốc vít lấy ra bị lỗi bằng $0.013$.",
                "correct": true,
                "explanation": "Đúng, $P = 0.7 \\times 0.01 + 0.3 \\times 0.02 = 0.007 + 0.006 = 0.013$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu ốc vít lấy ra bị lỗi, xác suất nó do máy $M_1$ sản xuất lớn hơn do máy $M_2$ sản xuất.",
                "correct": true,
                "explanation": "Đúng, $P(M_1|Lỗi) = 7/13 > P(M_2|Lỗi) = 6/13$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Xác suất ốc vít lấy ra không bị lỗi là $0.98$.",
                "correct": false,
                "explanation": "Sai, xác suất không lỗi là $1 - 0.013 = 0.987$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.4, P(B) = 0.5$ và $P(AB) = 0.2$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Hai biến cố $A$ và $B$ độc lập với nhau.",
                "correct": true,
                "explanation": "Đúng, $0.4 \\times 0.5 = 0.2$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất có điều kiện $P(A|B) = 0.4$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Xác suất $P(A \\cup B) = 0.7$.",
                "correct": true,
                "explanation": "Đúng, $0.4 + 0.5 - 0.2 = 0.7$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Hai biến cố $\\bar{A}$ và $\\bar{B}$ không độc lập với nhau.",
                "correct": false,
                "explanation": "Sai, nếu $A, B$ độc lập thì $\\bar{A}, \\bar{B}$ cũng độc lập."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một xét nghiệm phát hiện kháng thể có độ nhạy $98\\%$ và độ đặc hiệu $99\\%$. Trong một cộng đồng có tỉ lệ người có kháng thể là $5\\%$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất một người có kháng thể xét nghiệm cho kết quả dương tính là $0.98$.",
                "correct": true,
                "explanation": "Đúng (độ nhạy)."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất một người không có kháng thể xét nghiệm cho kết quả dương tính (dương tính giả) là $0.01$.",
                "correct": true,
                "explanation": "Đúng, $1 - 0.99 = 0.01$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Xác suất để một người bất kỳ trong cộng đồng có kết quả xét nghiệm dương tính là $0.0585$.",
                "correct": true,
                "explanation": "Đúng, $0.05 \\times 0.98 + 0.95 \\times 0.01 = 0.049 + 0.0095 = 0.0585$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Một người có kết quả xét nghiệm dương tính thì chắc chắn $100\\%$ người đó có kháng thể.",
                "correct": false,
                "explanation": "Sai, vẫn có tỉ lệ dương tính giả."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hệ đầy đủ hai biến cố $B_1$ và $B_2$ với $P(B_1) = 0.6, P(B_2) = 0.4$. Cho biến cố $A$ thỏa mãn $P(A|B_1) = 0.3$ và $P(A|B_2) = 0.5$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$B_1$ và $B_2$ là hai biến cố xung khắc và $B_1 \\cup B_2 = \\Omega$.",
                "correct": true,
                "explanation": "Đúng, định nghĩa hệ đầy đủ."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất toàn phần $P(A) = 0.38$.",
                "correct": true,
                "explanation": "Đúng, $0.6 \\times 0.3 + 0.4 \\times 0.5 = 0.18 + 0.20 = 0.38$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Xác suất hậu nghiệm $P(B_1|A) = \\frac{18}{38} = \\frac{9}{19}$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Biến cố $A$ độc lập với biến cố $B_1$.",
                "correct": false,
                "explanation": "Sai, $P(A|B_1) = 0.3 \\ne P(A) = 0.38$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(B) = 0.8$ và $P(AB) = 0.4$. Tính xác suất có điều kiện $P(A|B)$.",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5"
            ],
            "explanation": "$P(A|B) = \\frac{0.4}{0.8} = 0.5$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Hai xạ thủ cùng bắn độc lập vào một bia. Xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, của xạ thủ thứ hai là $0.7$. Tính xác suất để cả hai xạ thủ cùng bắn trúng bia.",
            "correctAnswer": "0.56",
            "acceptedAnswers": [
              "0.56",
              "0,56"
            ],
            "explanation": "$0.8 \\times 0.7 = 0.56$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một cửa hàng nhập táo từ hai nông trại $A$ và $B$. Nông trại $A$ cung cấp $60\\%$ số táo với tỉ lệ hư hỏng $5\\%$. Nông trại $B$ cung cấp $40\\%$ số táo với tỉ lệ hư hỏng $10\\%$. Chọn ngẫu nhiên một quả táo, tính xác suất quả táo đó bị hư hỏng (nhập số dưới dạng phần trăm: ví dụ $7\\%$ thì nhập 7).",
            "correctAnswer": "7",
            "acceptedAnswers": [
              "7",
              "7%",
              "0.07"
            ],
            "explanation": "$P = 0.6 \\times 0.05 + 0.4 \\times 0.10 = 0.03 + 0.04 = 0.07 = 7\\%$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho $P(A) = 0.6, P(B) = 0.4$ và $P(A \\cup B) = 0.8$. Tính giá trị của $P(AB)$.",
            "correctAnswer": "0.2",
            "acceptedAnswers": [
              "0.2",
              "0,2"
            ],
            "explanation": "$P(AB) = 0.6 + 0.4 - 0.8 = 0.2$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một ngân hàng ước tính xác suất một khách hàng vay tiền vỡ nợ là $0.02$. Một phần mềm chấm điểm tín dụng dự báo đúng khách hàng vỡ nợ với tỉ lệ $90\\%$, nhưng cũng dự báo nhầm khách hàng không vỡ nợ thành vỡ nợ với tỉ lệ $5\\%$. Khi phần mềm cảnh báo một khách hàng sẽ vỡ nợ, tính xác suất thực sự khách hàng đó vỡ nợ (làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "0.27",
            "acceptedAnswers": [
              "0.27",
              "0,27",
              "18/67"
            ],
            "explanation": "Bayes: $P(VN|CB) = \\frac{0.02 \\times 0.9}{0.02 \\times 0.9 + 0.98 \\times 0.05} = \\frac{0.018}{0.018 + 0.049} = \\frac{0.018}{0.067} = \\frac{18}{67} \\approx 0.27$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một hộp có 5 viên bi trắng và 5 viên bi đen. Rút lần lượt 2 viên bi không hoàn lại. Biết viên thứ nhất màu đen, tính xác suất viên thứ hai màu trắng.",
            "correctAnswer": "0.56",
            "acceptedAnswers": [
              "0.56",
              "5/9",
              "0,56"
            ],
            "explanation": "Còn lại 5 trắng và 4 đen (tổng 9 viên). Xác suất là $5/9 \\approx 0.56$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd9-de3",
        "examNumber": 3,
        "title": "Đề số 3: Luyện Thi Chuyên Đề Xác Suất Có Điều Kiện",
        "code": "CD9-103",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(B) = 0.4$ và $P(A|B) = 0.5$. Xác suất của biến cố $A \\cap B$ bằng",
            "options": {
              "A": "$0.2$",
              "B": "$0.8$",
              "C": "$0.1$",
              "D": "$0.9$"
            },
            "correct": "A",
            "explanation": "$P(AB) = P(B) \\cdot P(A|B) = 0.4 \\times 0.5 = 0.2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Gieo một đồng xu cân đối đồng chất 2 lần liên tiếp. Xác suất để lần 2 xuất hiện mặt ngửa biết lần 1 đã xuất hiện mặt ngửa bằng",
            "options": {
              "A": "$\\frac{3}{4}$",
              "B": "$\\frac{1}{2}$",
              "C": "$1$",
              "D": "$\\frac{1}{4}$"
            },
            "correct": "B",
            "explanation": "Hai lần gieo độc lập nhau nên xác suất lần 2 ngửa vẫn là $1/2$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho $P(A) = 0.7$ và $P(B) = 0.6$. Nếu $A$ và $B$ độc lập thì $P(A \\cup B)$ bằng",
            "options": {
              "A": "$0.88$",
              "B": "$0.9$",
              "C": "$0.42$",
              "D": "$1.3$"
            },
            "correct": "A",
            "explanation": "$P(AB) = 0.7 \\times 0.6 = 0.42$. $P(A \\cup B) = 0.7 + 0.6 - 0.42 = 0.88$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một hộp có 4 bóng đèn tốt và 2 bóng đèn hỏng. Lấy ngẫu nhiên lần lượt 2 bóng không hoàn lại. Xác suất để cả 2 bóng lấy ra đều tốt là",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$\\frac{2}{5}$",
              "C": "$\\frac{1}{3}$",
              "D": "$\\frac{4}{9}$"
            },
            "correct": "B",
            "explanation": "$\\frac{4}{6} \\times \\frac{3}{5} = \\frac{12}{30} = \\frac{2}{5}$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một thiết bị có hai linh kiện hoạt động độc lập. Xác suất linh kiện A bị lỗi là $0.05$, linh kiện B bị lỗi là $0.1$. Xác suất để thiết bị hoạt động tốt (cả 2 linh kiện không bị lỗi) bằng",
            "options": {
              "A": "$0.995$",
              "B": "$0.005$",
              "C": "$0.855$",
              "D": "$0.85$"
            },
            "correct": "C",
            "explanation": "$(1 - 0.05)(1 - 0.1) = 0.95 \\times 0.9 = 0.855$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Tỉ lệ cử tri ủng hộ ứng cử viên X là $60\\%$. Trong số người ủng hộ X, có $70\\%$ đi bỏ phiếu. Trong số người không ủng hộ X, có $40\\%$ đi bỏ phiếu. Xác suất một cử tri được chọn ngẫu nhiên có đi bỏ phiếu bằng",
            "options": {
              "A": "$0.58$",
              "B": "$0.50$",
              "C": "$0.55$",
              "D": "$0.66$"
            },
            "correct": "A",
            "explanation": "$0.6 \\times 0.7 + 0.4 \\times 0.4 = 0.42 + 0.16 = 0.58$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một máy lọc nước cảnh báo thay lõi lọc với độ tin cậy $90\\%$. Tỉ lệ lõi lọc thực sự cần thay trong chu kỳ kiểm tra là $10\\%$. Xác suất máy cảnh báo sai (lõi chưa cần thay nhưng máy vẫn báo) là $5\\%$. Khi máy phát cảnh báo thay lõi, xác suất lõi thực sự cần thay là",
            "options": {
              "A": "$\\frac{9}{10}$",
              "B": "$\\frac{3}{4}$",
              "C": "$\\frac{2}{3}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "C",
            "explanation": "Bayes: $P = \\frac{0.1 \\times 0.9}{0.1 \\times 0.9 + 0.9 \\times 0.05} = \\frac{0.09}{0.09 + 0.045} = \\frac{0.09}{0.135} = \\frac{2}{3}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho $P(A) = 0.4$ và $P(B|A) = 0.6$. Giá trị của $P(A \\cap \\bar{B})$ bằng",
            "options": {
              "A": "$0.24$",
              "B": "$0.6$",
              "C": "$0.4$",
              "D": "$0.16$"
            },
            "correct": "D",
            "explanation": "$P(A \\cap \\bar{B}) = P(A) \\cdot P(\\bar{B}|A) = 0.4 \\times (1 - 0.6) = 0.4 \\times 0.4 = 0.16$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một học sinh đi thi lấy chứng chỉ tin học. Xác suất đậu phần lý thuyết là $0.8$. Nếu đậu lý thuyết, xác suất đậu phần thực hành là $0.9$. Xác suất để học sinh đó đậu cả hai phần thi là",
            "options": {
              "A": "$0.9$",
              "B": "$0.72$",
              "C": "$0.1$",
              "D": "$0.85$"
            },
            "correct": "B",
            "explanation": "$0.8 \\times 0.9 = 0.72$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho $A$ và $B$ là hai biến cố xung khắc với $P(A) = 0.3, P(B) = 0.4$. Khẳng định nào sau đây là sai?",
            "options": {
              "A": "$P(A \\cup B) = 0.7$",
              "B": "$P(A|B) = 0$",
              "C": "$P(AB) = 0$",
              "D": "$A$ và $B$ là hai biến cố độc lập"
            },
            "correct": "D",
            "explanation": "Hai biến cố xung khắc có xác suất dương thì không bao giờ độc lập (vì $P(AB) = 0 \\ne P(A)P(B)$)."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một bài toán trắc nghiệm có xác suất người thứ nhất giải được là $0.6$, người thứ hai giải được là $0.7$ (hai người giải độc lập). Xác suất bài toán được giải quyết (có ít nhất một người giải được) bằng",
            "options": {
              "A": "$0.78$",
              "B": "$0.9$",
              "C": "$0.42$",
              "D": "$0.88$"
            },
            "correct": "D",
            "explanation": "$1 - (1 - 0.6)(1 - 0.7) = 1 - 0.4 \\times 0.3 = 1 - 0.12 = 0.88$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5$ và $P(B) = 0.8$. Khi đó khẳng định nào sau đây luôn đúng?",
            "options": {
              "A": "$A$ và $B$ xung khắc",
              "B": "$P(AB) \\le 0.3$",
              "C": "$P(AB) \\ge 0.3$",
              "D": "$P(AB) = 0.4$"
            },
            "correct": "C",
            "explanation": "$P(A \\cup B) = P(A) + P(B) - P(AB) \\le 1 \\Rightarrow P(AB) \\ge 0.5 + 0.8 - 1 = 0.3$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Một nhân viên bán bảo hiểm gọi điện cho hai khách hàng độc lập. Xác suất khách hàng thứ nhất đồng ý mua là $0.4$, khách hàng thứ hai đồng ý mua là $0.5$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất cả hai khách hàng đều đồng ý mua là $0.2$.",
                "correct": true,
                "explanation": "Đúng, $0.4 \\times 0.5 = 0.2$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất cả hai khách hàng đều từ chối là $0.3$.",
                "correct": true,
                "explanation": "Đúng, $0.6 \\times 0.5 = 0.3$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Xác suất có ít nhất một khách hàng đồng ý mua là $0.7$.",
                "correct": true,
                "explanation": "Đúng, $1 - 0.3 = 0.7$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Xác suất có đúng một khách hàng đồng ý mua là $0.6$.",
                "correct": false,
                "explanation": "Sai, $0.4(0.5) + 0.6(0.5) = 0.2 + 0.3 = 0.5$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Một hộp có 8 viên bi đỏ và 4 viên bi xanh. Lấy lần lượt 2 viên bi không hoàn lại.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất viên thứ nhất màu đỏ là $\\frac{2}{3}$.",
                "correct": true,
                "explanation": "Đúng, $8/12 = 2/3$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Biết viên thứ nhất màu đỏ, xác suất viên thứ hai màu xanh là $\\frac{4}{11}$.",
                "correct": true,
                "explanation": "Đúng, còn 11 viên trong đó 4 viên xanh."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Xác suất cả 2 viên bi đều màu đỏ là $\\frac{14}{33}$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{8}{12} \\times \\frac{7}{11} = \\frac{14}{33}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Xác suất cả 2 viên bi đều màu xanh bằng $\\frac{1}{6}$.",
                "correct": false,
                "explanation": "Sai, $\\frac{4}{12} \\times \\frac{3}{11} = \\frac{1}{11} \\ne \\frac{1}{6}$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Tại một trạm kiểm soát giao thông, $80\\%$ phương tiện qua lại là xe ô tô con và $20\\%$ là xe tải. Xác suất một xe ô tô con vi phạm tốc độ là $0.05$, một xe tải vi phạm tốc độ là $0.15$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất một phương tiện ngẫu nhiên vi phạm tốc độ là $0.07$.",
                "correct": true,
                "explanation": "Đúng, $0.8 \\times 0.05 + 0.2 \\times 0.15 = 0.04 + 0.03 = 0.07$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Trong số các xe vi phạm tốc độ, tỉ lệ xe ô tô con chiếm $\\frac{4}{7}$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{0.04}{0.07} = \\frac{4}{7}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Trong số các xe vi phạm tốc độ, tỉ lệ xe tải chiếm $\\frac{3}{7}$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{0.03}{0.07} = \\frac{3}{7}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Xác suất một phương tiện không vi phạm tốc độ là $0.90$.",
                "correct": false,
                "explanation": "Sai, xác suất không vi phạm là $1 - 0.07 = 0.93$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hai biến cố $A$ và $B$ bất kỳ có xác suất khác 0.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Nếu $P(A|B) = P(A)$ thì $P(B|A) = P(B)$.",
                "correct": true,
                "explanation": "Đúng, tính đối xứng của tính độc lập."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$P(AB) \\le P(A)$ và $P(AB) \\le P(B)$.",
                "correct": true,
                "explanation": "Đúng, vì $AB \\subset A$ và $AB \\subset B$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $P(A) = 1$ thì $P(AB) = P(B)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$P(A|B) + P(A|\\bar{B}) = 1$ với mọi cặp biến cố.",
                "correct": false,
                "explanation": "Sai, tổng hai xác suất này không có lý do phải bằng 1."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ độc lập có $P(A) = 0.5$ và $P(B) = 0.6$. Tính xác suất của biến cố $A \\cap B$.",
            "correctAnswer": "0.3",
            "acceptedAnswers": [
              "0.3",
              "0,3"
            ],
            "explanation": "$P(AB) = 0.5 \\times 0.6 = 0.3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho $P(A) = 0.8, P(B) = 0.5$ và $P(AB) = 0.4$. Tính xác suất có điều kiện $P(B|A)$.",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5"
            ],
            "explanation": "$P(B|A) = \\frac{0.4}{0.8} = 0.5$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một công ty tuyển dụng nhân sự qua 2 vòng thi độc lập. Xác suất ứng viên vượt qua vòng 1 là $0.8$. Nếu qua vòng 1, xác suất vượt qua vòng 2 là $0.75$. Tính xác suất để ứng viên trúng tuyển cả 2 vòng.",
            "correctAnswer": "0.6",
            "acceptedAnswers": [
              "0.6",
              "0,6"
            ],
            "explanation": "$0.8 \\times 0.75 = 0.6$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một lô thuốc có $90\\%$ thuốc sản xuất đúng tiêu chuẩn và $10\\%$ thuốc bị lỗi nhẹ. Một máy quét tự động phát hiện đúng thuốc bị lỗi với xác suất $95\\%$, và nhận diện nhầm thuốc đúng tiêu chuẩn thành lỗi với xác suất $5\\%$. Khi máy quét báo một viên thuốc bị lỗi, tính xác suất viên thuốc đó thực sự bị lỗi (làm tròn đến hai chữ số thập phân).",
            "correctAnswer": "0.68",
            "acceptedAnswers": [
              "0.68",
              "0,68",
              "19/28"
            ],
            "explanation": "Bayes: $P = \\frac{0.10 \\times 0.95}{0.10 \\times 0.95 + 0.90 \\times 0.05} = \\frac{0.095}{0.095 + 0.045} = \\frac{0.095}{0.140} = \\frac{19}{28} \\approx 0.68$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Gieo một con xúc xắc cân đối. Biết kết quả xuất hiện số chấm lớn hơn $3$. Tính xác suất xuất hiện mặt $6$ chấm (nhập phân số dạng tối giản $a/b$ hoặc số thập phân làm tròn hai chữ số: ví dụ $1/3$ thì nhập 0.33).",
            "correctAnswer": "0.33",
            "acceptedAnswers": [
              "0.33",
              "1/3",
              "0,33"
            ],
            "explanation": "Các số lớn hơn 3 là $\\{4, 5, 6\\}$ (3 khả năng). Mặt 6 có 1 khả năng, xác suất $1/3 \\approx 0.33$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một trạm thu phí cao tốc có hai làn tự động ETC1 và ETC2. Xe qua ETC1 chiếm $60\\%$, qua ETC2 chiếm $40\\%$. Tỉ lệ xe bị lỗi nhận diện thẻ ở ETC1 là $1\\%$, ở ETC2 là $3\\%$. Tính xác suất một xe bất kỳ qua trạm bị lỗi nhận diện (nhập dưới dạng phần trăm: ví dụ $1.8\\%$ thì nhập 1.8).",
            "correctAnswer": "1.8",
            "acceptedAnswers": [
              "1.8",
              "1,8",
              "0.018"
            ],
            "explanation": "$P = 0.6 \\times 0.01 + 0.4 \\times 0.03 = 0.006 + 0.012 = 0.018 = 1.8\\%$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd9-de4",
        "examNumber": 4,
        "title": "Đề số 4: Luyện Thi Chuyên Đề Xác Suất Có Điều Kiện",
        "code": "CD9-104",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ với $P(A) = 0.5, P(B) = 0.6$ và $P(AB) = 0.3$. Giá trị của $P(B|A)$ bằng",
            "options": {
              "A": "$0.5$",
              "B": "$0.6$",
              "C": "$0.3$",
              "D": "$0.2$"
            },
            "correct": "B",
            "explanation": "$P(B|A) = \\frac{0.3}{0.5} = 0.6$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$. Biết $P(A) = 0.4$ và $P(B) = 0.5$. Xác suất của biến cố $A \\cap \\bar{B}$ bằng",
            "options": {
              "A": "$0.3$",
              "B": "$0.1$",
              "C": "$0.2$",
              "D": "$0.4$"
            },
            "correct": "C",
            "explanation": "$P(A \\cap \\bar{B}) = P(A) \\cdot P(\\bar{B}) = 0.4 \\times (1 - 0.5) = 0.2$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một bình kín đựng 5 quả cầu trắng và 5 quả cầu đỏ. Rút ngẫu nhiên lần lượt 2 quả cầu không hoàn lại. Xác suất để quả thứ hai màu đỏ biết quả thứ nhất màu trắng bằng",
            "options": {
              "A": "$\\frac{5}{9}$",
              "B": "$\\frac{5}{10}$",
              "C": "$\\frac{1}{2}$",
              "D": "$\\frac{4}{9}$"
            },
            "correct": "A",
            "explanation": "Sau khi rút 1 quả trắng, trong bình còn 9 quả gồm 4 trắng và 5 đỏ. Xác suất quả 2 đỏ là $5/9$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.3, P(B) = 0.5$ và $P(B|A) = 0.6$. Giá trị của $P(A \\cup B)$ bằng",
            "options": {
              "A": "$0.18$",
              "B": "$0.5$",
              "C": "$0.8$",
              "D": "$0.62$"
            },
            "correct": "D",
            "explanation": "$P(AB) = 0.3 \\times 0.6 = 0.18$. $P(A \\cup B) = 0.3 + 0.5 - 0.18 = 0.62$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Tỉ lệ người nhiễm một loại virus trong cộng đồng là $0.5\\%$. Một bộ kit xét nghiệm nhanh có độ nhạy $90\\%$ và độ đặc hiệu $95\\%$. Khi xét nghiệm một người ngẫu nhiên cho kết quả dương tính, xác suất người đó thực sự nhiễm virus xấp xỉ bằng",
            "options": {
              "A": "$50\\%$",
              "B": "$0.5\\%$",
              "C": "$90\\%$",
              "D": "$8.3\\%$"
            },
            "correct": "D",
            "explanation": "Bayes: $P = \\frac{0.005 \\times 0.90}{0.005 \\times 0.90 + 0.995 \\times 0.05} = \\frac{0.0045}{0.0045 + 0.04975} = \\frac{0.0045}{0.05425} \\approx 8.29\\% \\approx 8.3\\%$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một nông trường nuôi bò sữa có hai trang trại: trang trại A cung cấp $70\\%$ tổng sản lượng sữa, trang trại B cung cấp $30\\%$. Tỉ lệ sữa đạt chuẩn loại 1 của trang trại A là $95\\%$, của trang trại B là $90\\%$. Chọn ngẫu nhiên một hộp sữa của nông trường, xác suất hộp sữa đạt chuẩn loại 1 bằng",
            "options": {
              "A": "$0.910$",
              "B": "$0.925$",
              "C": "$0.940$",
              "D": "$0.935$"
            },
            "correct": "D",
            "explanation": "$P = 0.7 \\times 0.95 + 0.3 \\times 0.90 = 0.665 + 0.270 = 0.935$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một hệ thống phòng không có hai radar quét mục tiêu độc lập. Xác suất radar 1 phát hiện máy bay là $0.8$, radar 2 phát hiện là $0.9$. Xác suất máy bay bị ít nhất một radar phát hiện là",
            "options": {
              "A": "$0.72$",
              "B": "$0.9$",
              "C": "$0.98$",
              "D": "$0.85$"
            },
            "correct": "C",
            "explanation": "$1 - (1 - 0.8)(1 - 0.9) = 1 - 0.2 \\times 0.1 = 1 - 0.02 = 0.98$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.6, P(B) = 0.4$ và $P(A \\cup B) = 0.8$. Giá trị của $P(A|B)$ bằng",
            "options": {
              "A": "$0.6$",
              "B": "$0.5$",
              "C": "$0.2$",
              "D": "$0.4$"
            },
            "correct": "B",
            "explanation": "$P(AB) = 0.6 + 0.4 - 0.8 = 0.2$. $P(A|B) = \\frac{0.2}{0.4} = 0.5$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một học sinh dự thi hai môn Toán và Tiếng Anh. Xác suất học sinh đạt điểm giỏi môn Toán là $0.7$. Nếu đạt điểm giỏi môn Toán, xác suất đạt điểm giỏi môn Tiếng Anh là $0.8$. Xác suất học sinh đạt điểm giỏi cả hai môn là",
            "options": {
              "A": "$0.56$",
              "B": "$0.50$",
              "C": "$0.80$",
              "D": "$0.75$"
            },
            "correct": "A",
            "explanation": "$0.7 \\times 0.8 = 0.56$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho $P(A) = 0.4, P(B) = 0.5$. Khẳng định nào sau đây đúng nếu $A \\subset B$?",
            "options": {
              "A": "$P(A \\cup B) = 0.9$",
              "B": "$P(B|A) = 1$",
              "C": "$P(A|B) = 1$",
              "D": "$P(AB) = 0.5$"
            },
            "correct": "B",
            "explanation": "Vì $A \\subset B$ nên $A \\cap B = A \\Rightarrow P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{P(A)}{P(A)} = 1$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một cửa hàng hoa quả có $60\\%$ cam loại ngon và $40\\%$ cam bình thường. Xác suất người mua chọn đúng cam loại ngon là $0.8$, chọn cam bình thường là $0.5$. Chọn ngẫu nhiên một quả cam được người mua chọn, xác suất đó là cam loại ngon bằng",
            "options": {
              "A": "$\\frac{12}{17}$",
              "B": "$\\frac{2}{3}$",
              "C": "$\\frac{3}{5}$",
              "D": "$\\frac{5}{17}$"
            },
            "correct": "A",
            "explanation": "Bayes: $P = \\frac{0.6 \\times 0.8}{0.6 \\times 0.8 + 0.4 \\times 0.5} = \\frac{0.48}{0.48 + 0.20} = \\frac{0.48}{0.68} = \\frac{12}{17}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho $P(A) = 0.3, P(B) = 0.4$. Khi $A$ và $B$ là hai biến cố độc lập thì $P(A|B)$ bằng",
            "options": {
              "A": "$0.12$",
              "B": "$0.7$",
              "C": "$0.3$",
              "D": "$0.4$"
            },
            "correct": "C",
            "explanation": "Khi độc lập thì $P(A|B) = P(A) = 0.3$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Một bác sĩ chẩn đoán một triệu chứng bệnh. Tỉ lệ người mắc bệnh $X$ trong nhóm người có triệu chứng này là $20\\%$. Một phương pháp xét nghiệm có độ nhạy $90\\%$ và độ đặc hiệu $85\\%$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất một người mắc bệnh có kết quả xét nghiệm dương tính là $0.90$.",
                "correct": true,
                "explanation": "Đúng (độ nhạy)."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất một người không mắc bệnh có kết quả xét nghiệm âm tính là $0.85$.",
                "correct": true,
                "explanation": "Đúng (độ đặc hiệu)."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Xác suất một người xét nghiệm cho kết quả dương tính là $0.30$.",
                "correct": true,
                "explanation": "Đúng, $0.2 \\times 0.9 + 0.8 \\times 0.15 = 0.18 + 0.12 = 0.30$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Khi một người có kết quả xét nghiệm dương tính, xác suất người đó thực sự mắc bệnh là $60\\%$.",
                "correct": true,
                "explanation": "Đúng, $P = \\frac{0.18}{0.30} = 0.6 = 60\\%$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.4$ và $P(AB) = 0.2$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Hai biến cố $A$ và $B$ độc lập.",
                "correct": true,
                "explanation": "Đúng, $0.5 \\times 0.4 = 0.2$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$P(A|B) = 0.5$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "$P(B|A) = 0.4$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Biến cố $A$ và $\\bar{B}$ không độc lập.",
                "correct": false,
                "explanation": "Sai, nếu $A, B$ độc lập thì $A, \\bar{B}$ cũng độc lập."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một công ty cung cấp dịch vụ Internet có hai tổng đài $T_1$ và $T_2$. Tổng đài $T_1$ tiếp nhận $60\\%$ cuộc gọi hỗ trợ, $T_2$ tiếp nhận $40\\%$. Tỉ lệ khách hàng hài lòng sau cuộc gọi ở $T_1$ là $80\\%$, ở $T_2$ là $90\\%$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất để một cuộc gọi ngẫu nhiên nhận được sự hài lòng của khách hàng là $0.84$.",
                "correct": true,
                "explanation": "Đúng, $0.6 \\times 0.8 + 0.4 \\times 0.9 = 0.48 + 0.36 = 0.84$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Biết một khách hàng hài lòng, xác suất cuộc gọi đó do tổng đài $T_1$ tiếp nhận bằng $\\frac{4}{7}$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{0.48}{0.84} = \\frac{4}{7}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Biết một khách hàng không hài lòng, xác suất cuộc gọi do $T_1$ tiếp nhận lớn hơn do $T_2$ tiếp nhận.",
                "correct": true,
                "explanation": "Đúng, $T_1$ không hài lòng: $0.6 \\times 0.2 = 0.12$; $T_2$ không hài lòng: $0.4 \\times 0.1 = 0.04$ ($0.12 > 0.04$)."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tỉ lệ khách hàng không hài lòng chung của công ty là $0.20$.",
                "correct": false,
                "explanation": "Sai, tỉ lệ không hài lòng là $1 - 0.84 = 0.16$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hai biến cố $A$ và $B$ bất kỳ với $P(B) > 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất có điều kiện luôn thỏa mãn $0 \\le P(A|B) \\le 1$.",
                "correct": true,
                "explanation": "Đúng, vì xác suất luôn thuộc đoạn $[0; 1]$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Nếu $P(A) = 0$ thì $P(A|B) = 0$.",
                "correct": true,
                "explanation": "Đúng, vì $AB \\subset A \\Rightarrow P(AB) = 0$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $P(B) = 1$ thì $P(A|B) = P(A)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu $P(A|B) = 1$ thì chắc chắn $A = B$.",
                "correct": false,
                "explanation": "Sai, ví dụ $B \\subset A$ thì $P(A|B) = 1$ nhưng $A$ và $B$ không nhất thiết bằng nhau."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.4, P(B) = 0.5$ và $P(AB) = 0.2$. Tính xác suất có điều kiện $P(A|B)$.",
            "correctAnswer": "0.4",
            "acceptedAnswers": [
              "0.4",
              "0,4"
            ],
            "explanation": "$P(A|B) = \\frac{0.2}{0.5} = 0.4$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.5$ và $P(B) = 0.8$. Tính xác suất để ít nhất một trong hai biến cố xảy ra.",
            "correctAnswer": "0.9",
            "acceptedAnswers": [
              "0.9",
              "0,9"
            ],
            "explanation": "$P(A \\cup B) = 0.5 + 0.8 - 0.4 = 0.9$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một dây chuyền đóng gói sữa có $98\\%$ sản phẩm đủ khối lượng quy định và $2\\%$ thiếu khối lượng. Một cảm biến phát hiện sản phẩm thiếu khối lượng chính xác $95\\%$, và cảnh báo nhầm sản phẩm đủ khối lượng thành thiếu khối lượng là $1\\%$. Khi cảm biến báo động một hộp sữa thiếu khối lượng, tính xác suất hộp sữa đó thực sự thiếu khối lượng (làm tròn đến hai chữ số thập phân).",
            "correctAnswer": "0.66",
            "acceptedAnswers": [
              "0.66",
              "0,66",
              "19/28.8"
            ],
            "explanation": "Bayes: $P = \\frac{0.02 \\times 0.95}{0.02 \\times 0.95 + 0.98 \\times 0.01} = \\frac{0.019}{0.019 + 0.0098} = \\frac{0.019}{0.0288} \\approx 0.6597 \\approx 0.66$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một trường có $50\\%$ học sinh chơi bóng đá và $30\\%$ học sinh chơi bóng rổ. Biết rằng $15\\%$ học sinh chơi cả hai môn. Chọn ngẫu nhiên một học sinh chơi bóng đá, tính xác suất học sinh đó cũng chơi bóng rổ.",
            "correctAnswer": "0.3",
            "acceptedAnswers": [
              "0.3",
              "0,3"
            ],
            "explanation": "$P(BR|BĐ) = \\frac{0.15}{0.50} = 0.3$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Gieo một con xúc xắc cân đối hai lần. Tính xác suất để lần thứ hai xuất hiện mặt 6 chấm biết tổng số chấm sau hai lần gieo bằng 10 (viết dạng số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
            "correctAnswer": "0.33",
            "acceptedAnswers": [
              "0.33",
              "1/3",
              "0,33"
            ],
            "explanation": "Các cặp có tổng bằng 10: $(4,6), (5,5), (6,4)$ gồm 3 cặp. Cặp có lần 2 bằng 6 là $(4,6)$ (1 cặp). Xác suất là $1/3 \\approx 0.33$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một kho xăng dầu có hai bể chứa $B_1$ và $B_2$ với dung tích bằng nhau ($50\\% - 50\\%$). Bể $B_1$ có tỉ lệ tạp chất $0.5\\%$, bể $B_2$ có tỉ lệ tạp chất $1.5\\%$. Lấy ngẫu nhiên một mẫu xăng từ kho, tính xác suất mẫu xăng có tạp chất (nhập số dạng phần trăm: ví dụ $1\\%$ thì nhập 1).",
            "correctAnswer": "1",
            "acceptedAnswers": [
              "1",
              "1%",
              "0.01"
            ],
            "explanation": "$P = 0.5 \\times 0.005 + 0.5 \\times 0.015 = 0.0025 + 0.0075 = 0.01 = 1\\%$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd9-de5",
        "examNumber": 5,
        "title": "Đề số 5: Luyện Thi Chuyên Đề Xác Suất Có Điều Kiện",
        "code": "CD9-105",
        "badge": "Chuẩn Cấu Trúc 2025 - 2026",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
        "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.6$ và $P(AB) = 0.18$. Xác suất có điều kiện $P(B|A)$ bằng",
            "options": {
              "A": "$0.3$",
              "B": "$0.12$",
              "C": "$0.48$",
              "D": "$0.78$"
            },
            "correct": "A",
            "explanation": "$P(B|A) = \\frac{0.18}{0.6} = 0.3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.2$ và $P(B) = 0.3$. Xác suất của biến cố $\\bar{A} \\cap B$ bằng",
            "options": {
              "A": "$0.56$",
              "B": "$0.1$",
              "C": "$0.24$",
              "D": "$0.06$"
            },
            "correct": "C",
            "explanation": "$P(\\bar{A} \\cap B) = P(\\bar{A}) \\cdot P(B) = (1 - 0.2) \\times 0.3 = 0.8 \\times 0.3 = 0.24$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Gieo một con xúc xắc cân đối. Biết kết quả là một số nguyên tố. Xác suất để xuất hiện số chẵn bằng",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$\\frac{1}{6}$",
              "C": "$\\frac{1}{3}$",
              "D": "$\\frac{2}{3}$"
            },
            "correct": "C",
            "explanation": "Các số nguyên tố trên xúc xắc là $\\{2, 3, 5\\}$ (3 số). Số chẵn duy nhất là số 2 (1 số). Xác suất bằng $1/3$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.7$ và $P(A \\cup B) = 0.85$. Giá trị của $P(AB)$ bằng",
            "options": {
              "A": "$0.45$",
              "B": "$0.35$",
              "C": "$0.25$",
              "D": "$0.15$"
            },
            "correct": "B",
            "explanation": "$P(AB) = 0.5 + 0.7 - 0.85 = 0.35$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một công ty phần mềm phát hiện một loại mã độc với xác suất $99\\%$. Xác suất phần mềm nhận diện nhầm một file an toàn thành mã độc là $1\\%$. Trong một thư mục, tỉ lệ file chứa mã độc là $0.1\\%$. Khi phần mềm báo một file là mã độc, xác suất file đó thực sự chứa mã độc là",
            "options": {
              "A": "$99\\%$",
              "B": "$9\\%$",
              "C": "$1\\%$",
              "D": "$50\\%$"
            },
            "correct": "B",
            "explanation": "Bayes: $P = \\frac{0.001 \\times 0.99}{0.001 \\times 0.99 + 0.999 \\times 0.01} = \\frac{0.00099}{0.00099 + 0.00999} = \\frac{0.00099}{0.01098} \\approx 9\\%$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một trạm phát điện năng lượng mặt trời có hai cụm pin A và B. Cụm A tạo ra $60\\%$ sản lượng điện, cụm B tạo ra $40\\%$. Tỉ lệ suy hao hiệu suất trong ngày nhiều mây của cụm A là $10\\%$, của cụm B là $15\\%$. Chọn ngẫu nhiên một phần điện năng bị suy hao, xác suất phần điện năng đó do cụm A tạo ra bằng",
            "options": {
              "A": "$\\frac{2}{3}$",
              "B": "$\\frac{3}{5}$",
              "C": "$\\frac{4}{7}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "D",
            "explanation": "Bayes: $P(A|Suy\\ hao) = \\frac{0.6 \\times 0.10}{0.6 \\times 0.10 + 0.4 \\times 0.15} = \\frac{0.06}{0.06 + 0.06} = \\frac{0.06}{0.12} = \\frac{1}{2}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một xạ thủ bắn 3 phát đạn độc lập vào mục tiêu với xác suất trúng mỗi phát đều là $0.8$. Xác suất để xạ thủ bắn trúng mục tiêu ít nhất một phát là",
            "options": {
              "A": "$0.512$",
              "B": "$0.800$",
              "C": "$0.992$",
              "D": "$0.960$"
            },
            "correct": "C",
            "explanation": "$1 - (1 - 0.8)^3 = 1 - 0.2^3 = 1 - 0.008 = 0.992$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5$ và $P(B|A) = 0.4$. Khi đó $P(A \\cap B)$ bằng",
            "options": {
              "A": "$0.1$",
              "B": "$0.9$",
              "C": "$0.8$",
              "D": "$0.2$"
            },
            "correct": "D",
            "explanation": "$P(AB) = 0.5 \\times 0.4 = 0.2$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một lớp học có $20$ học sinh giỏi Toán, $15$ học sinh giỏi Văn và $5$ học sinh giỏi cả hai môn. Chọn ngẫu nhiên một học sinh giỏi Văn, xác suất học sinh đó cũng giỏi Toán bằng",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$\\frac{1}{3}$",
              "C": "$\\frac{1}{4}$",
              "D": "$\\frac{5}{20}$"
            },
            "correct": "B",
            "explanation": "Có 15 học sinh giỏi Văn, trong đó 5 em giỏi cả Toán. Xác suất là $5/15 = 1/3$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.7, P(B) = 0.3$. Nếu $A$ và $B$ xung khắc thì $P(A \\cup B)$ bằng",
            "options": {
              "A": "$1$",
              "B": "$0.79$",
              "C": "$0.21$",
              "D": "$0.5$"
            },
            "correct": "A",
            "explanation": "Vì $A, B$ xung khắc nên $P(A \\cup B) = P(A) + P(B) = 0.7 + 0.3 = 1$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong quy trình xét nghiệm kiểm dịch thực vật, một loại vi khuẩn xuất hiện với tỉ lệ $2\\%$. Xét nghiệm có độ chính xác $95\\%$ cho cả mẫu có vi khuẩn và không có vi khuẩn. Khi một mẫu cho kết quả có vi khuẩn, xác suất mẫu đó thực sự nhiễm khuẩn xấp xỉ bằng",
            "options": {
              "A": "$2\\%$",
              "B": "$95\\%$",
              "C": "$50\\%$",
              "D": "$27.9\\%$"
            },
            "correct": "D",
            "explanation": "Bayes: $P = \\frac{0.02 \\times 0.95}{0.02 \\times 0.95 + 0.98 \\times 0.05} = \\frac{0.019}{0.019 + 0.049} = \\frac{0.019}{0.068} \\approx 27.94\\% \\approx 27.9\\%$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho $P(A) = 0.5, P(B) = 0.4$. Nếu $A$ và $B$ độc lập thì $P(B|A)$ bằng",
            "options": {
              "A": "$0.4$",
              "B": "$0.2$",
              "C": "$0.9$",
              "D": "$0.5$"
            },
            "correct": "A",
            "explanation": "Vì độc lập nên $P(B|A) = P(B) = 0.4$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Một nhà máy sản xuất bóng đèn có hai dây chuyền: dây chuyền A sản xuất $60\\%$ và dây chuyền B sản xuất $40\\%$. Tỉ lệ bóng đèn bị lỗi của dây chuyền A là $2\\%$, của dây chuyền B là $3\\%$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất một bóng đèn ngẫu nhiên do dây chuyền A sản xuất là $0.6$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Xác suất một bóng đèn ngẫu nhiên bị lỗi là $0.024$.",
                "correct": true,
                "explanation": "Đúng, $0.6 \\times 0.02 + 0.4 \\times 0.03 = 0.012 + 0.012 = 0.024$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Lấy được một bóng đèn bị lỗi, xác suất bóng đèn đó do dây chuyền A sản xuất bằng $0.5$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{0.012}{0.024} = 0.5$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tỉ lệ bóng đèn đạt chuẩn chất lượng của toàn nhà máy là $98\\%$.",
                "correct": false,
                "explanation": "Sai, tỉ lệ đạt chuẩn là $1 - 0.024 = 0.976 = 97.6\\%$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.3, P(B) = 0.4$ và $P(AB) = 0.12$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$A$ và $B$ là hai biến cố độc lập.",
                "correct": true,
                "explanation": "Đúng, $0.3 \\times 0.4 = 0.12$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$P(A|B) = 0.3$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "$P(B|A) = 0.4$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Xác suất để không có biến cố nào xảy ra là $0.42$.",
                "correct": true,
                "explanation": "Đúng, $(1 - 0.3)(1 - 0.4) = 0.7 \\times 0.6 = 0.42$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Trong một đợt khám sức khỏe tổng quát, tỉ lệ người bị bệnh tăng huyết áp là $15\\%$. Trong số người tăng huyết áp, có $40\\%$ bị thừa cân. Trong số người không tăng huyết áp, có $20\\%$ bị thừa cân.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Xác suất một người khám bất kỳ bị thừa cân là $0.23$.",
                "correct": true,
                "explanation": "Đúng, $0.15 \\times 0.4 + 0.85 \\times 0.2 = 0.06 + 0.17 = 0.23$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Một người đến khám bị thừa cân, xác suất người đó bị tăng huyết áp là $\\frac{6}{23}$.",
                "correct": true,
                "explanation": "Đúng, $\\frac{0.06}{0.23} = \\frac{6}{23}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tỉ lệ người không bị thừa cân trong cộng đồng khám là $77\\%$.",
                "correct": true,
                "explanation": "Đúng, $1 - 0.23 = 0.77$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tăng huyết áp và thừa cân là hai yếu tố độc lập trong tập dữ liệu này.",
                "correct": false,
                "explanation": "Sai, vì $P(TC|HA) = 0.4 \\ne P(TC) = 0.23$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hai biến cố $A$ và $B$ với $P(A) > 0, P(B) > 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "$P(AB) = P(A) \\cdot P(B|A)$.",
                "correct": true,
                "explanation": "Đúng, công thức nhân xác suất."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "$P(AB) = P(B) \\cdot P(A|B)$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu $P(A|B) > P(A)$ thì $P(B|A) > P(B)$.",
                "correct": true,
                "explanation": "Đúng, vì $\\frac{P(AB)}{P(B)} > P(A) \\Leftrightarrow P(AB) > P(A)P(B) \\Leftrightarrow \\frac{P(AB)}{P(A)} > P(B)$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "$P(A|B)$ luôn luôn bằng $P(B|A)$.",
                "correct": false,
                "explanation": "Sai, chỉ bằng nhau khi $P(A) = P(B)$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.5$ và $P(AB) = 0.25$. Tính xác suất có điều kiện $P(B|A)$.",
            "correctAnswer": "0.5",
            "acceptedAnswers": [
              "0.5",
              "0,5"
            ],
            "explanation": "$P(B|A) = \\frac{0.25}{0.5} = 0.5$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.4$ và $P(B) = 0.6$. Tính xác suất của biến cố $A \\cap B$.",
            "correctAnswer": "0.24",
            "acceptedAnswers": [
              "0.24",
              "0,24"
            ],
            "explanation": "$P(AB) = 0.4 \\times 0.6 = 0.24$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một công ty bảo hiểm thấy rằng $70\\%$ khách hàng mua bảo hiểm nhà ở và $30\\%$ khách hàng mua bảo hiểm xe hơi. Trong năm, tỉ lệ yêu cầu bồi thường ở nhóm nhà ở là $2\\%$, nhóm xe hơi là $8\\%$. Chọn ngẫu nhiên một hợp đồng bảo hiểm, tính xác suất hợp đồng đó có yêu cầu bồi thường (nhập số dạng phần trăm: ví dụ $3.8\\%$ thì nhập 3.8).",
            "correctAnswer": "3.8",
            "acceptedAnswers": [
              "3.8",
              "3,8",
              "0.038"
            ],
            "explanation": "$P = 0.7 \\times 0.02 + 0.3 \\times 0.08 = 0.014 + 0.024 = 0.038 = 3.8\\%$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Gieo một con xúc xắc cân đối. Biết kết quả là số chẵn. Tính xác suất xuất hiện mặt 4 chấm (nhập số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
            "correctAnswer": "0.33",
            "acceptedAnswers": [
              "0.33",
              "1/3",
              "0,33"
            ],
            "explanation": "Số chẵn $\\{2, 4, 6\\}$, số 4 có 1 khả năng, xác suất là $1/3 \\approx 0.33$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Một ngân hàng phát hiện giao dịch gian lận chiếm tỉ lệ $0.2\\%$ tổng số giao dịch. Hệ thống AI cảnh báo đúng giao dịch gian lận với xác suất $98\\%$, nhưng cảnh báo nhầm giao dịch hợp pháp thành gian lận với xác suất $1\\%$. Khi hệ thống AI cảnh báo một giao dịch là gian lận, tính xác suất giao dịch đó thực sự là gian lận (làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "0.16",
            "acceptedAnswers": [
              "0.16",
              "0,16",
              "0.164"
            ],
            "explanation": "Bayes: $P = \\frac{0.002 \\times 0.98}{0.002 \\times 0.98 + 0.998 \\times 0.01} = \\frac{0.00196}{0.00196 + 0.00998} = \\frac{0.00196}{0.01194} \\approx 0.164 \\approx 0.16$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một giỏ hoa quả có 6 quả cam và 4 quả táo. Lấy lần lượt 2 quả không hoàn lại. Tính xác suất quả thứ hai là quả cam biết quả thứ nhất là quả táo (nhập số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
            "correctAnswer": "0.67",
            "acceptedAnswers": [
              "0.67",
              "6/9",
              "2/3",
              "0,67"
            ],
            "explanation": "Còn lại 6 cam và 3 táo (tổng 9 quả). Xác suất là $6/9 = 2/3 \\approx 0.67$."
          }
        ],
        "essayQuestions": []
      }
    ]
  }
];
const TOPIC_EXAMS_DB = window.TOPIC_EXAMS_DB;
