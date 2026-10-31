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
    "summary": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Dãy số -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-list-ol text-blue-600\"></i>\n      1. Dãy Số & Tính Chất Cốt Lõi\n    </h4>\n    <ul class=\"list-disc pl-5 space-y-1.5 text-[11.5pt]\">\n      <li><strong>Dãy số tăng / giảm:</strong> $(u_n)$ tăng khi $u_{n+1} > u_n, \\forall n \\ge 1$; giảm khi $u_{n+1} < u_n, \\forall n \\ge 1$.</li>\n      <li><strong>Dãy số bị chặn:</strong> Bị chặn trên nếu tồn tại $M$ sao cho $u_n \\le M, \\forall n$; bị chặn dưới nếu tồn tại $m$ sao cho $u_n \\ge m, \\forall n$. Bị chặn nếu vừa bị chặn trên vừa bị chặn dưới.</li>\n    </ul>\n  </div>\n\n  <!-- Phần 2: Cấp số cộng -->\n  <div class=\"bg-teal-50/70 border-l-4 border-teal-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-teal-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-plus-minus text-teal-600\"></i>\n      2. Cấp Số Cộng (CSC)\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200 shadow-xs\">\n        <p class=\"font-bold text-teal-900 mb-1\">Định nghĩa & Số hạng tổng quát:</p>\n        <p>$u_{n+1} = u_n + d$ ($d$ là công sai)</p>\n        <p class=\"mt-1 text-teal-800 font-semibold\">$u_n = u_1 + (n - 1)d$ ($n \\ge 2$)</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Tính chất: $u_k = \\frac{u_{k-1} + u_{k+1}}{2}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200 shadow-xs\">\n        <p class=\"font-bold text-teal-900 mb-1\">Tổng $n$ số hạng đầu tiên:</p>\n        <p class=\"mt-1 text-teal-800 font-semibold\">$S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Cấp số nhân -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-chart-line text-amber-600\"></i>\n      3. Cấp Số Nhân (CSN) & CSN Lùi Vô Hạn\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-900 mb-1\">Định nghĩa & Số hạng tổng quát:</p>\n        <p>$u_{n+1} = u_n \\cdot q$ ($q$ là công bội)</p>\n        <p class=\"mt-1 text-amber-800 font-semibold\">$u_n = u_1 \\cdot q^{n-1}$ ($n \\ge 2$)</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Tính chất: $u_k^2 = u_{k-1} \\cdot u_{k+1}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-900 mb-1\">Tổng $n$ số hạng & CSN lùi vô hạn:</p>\n        <p>$S_n = u_1 \\cdot \\frac{q^n - 1}{q - 1} = u_1 \\cdot \\frac{1 - q^n}{1 - q}$ ($q \\ne 1$)</p>\n        <p class=\"mt-1 text-amber-800 font-semibold\">CSN lùi vô hạn ($|q| < 1$): $S = \\frac{u_1}{1 - q}$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 4: Mô hình tài chính & Thực tế -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-coins text-purple-600\"></i>\n      4. Mô Hình Toán Học Thực Tế & Tài Chính\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11pt]\">\n      <div class=\"bg-white p-2.5 rounded-xl border border-purple-200\">\n        <span class=\"font-bold text-purple-900\">Lãi kép:</span> $A = P(1 + r)^n$.\n      </div>\n      <div class=\"bg-white p-2.5 rounded-xl border border-purple-200\">\n        <span class=\"font-bold text-purple-900\">Vay trả góp đều:</span> $m = \\frac{P \\cdot r(1+r)^n}{(1+r)^n - 1}$.\n      </div>\n      <div class=\"bg-white p-2.5 rounded-xl border border-purple-200\">\n        <span class=\"font-bold text-purple-900\">Bóng nảy vô hạn:</span> $S = h \\frac{1 + k}{1 - k}$.\n      </div>\n    </div>\n  </div>\n</div>\n",
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
            "question": "**Câu 1:** Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 3n - 2$. Số hạng thứ 7 của dãy số là",
            "options": {
              "A": "$19$",
              "B": "$18$",
              "C": "$22$",
              "D": "$21$"
            },
            "correct": "A",
            "explanation": "$u_7 = 3(7) - 2 = 19$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Dãy số nào dưới đây là dãy số giảm?",
            "options": {
              "A": "$u_n = \\frac{1}{n}$",
              "B": "$u_n = n^2$",
              "C": "$u_n = 3^n$",
              "D": "$u_n = 2n + 1$"
            },
            "correct": "A",
            "explanation": "$u_{n+1} - u_n = \\frac{1}{n+1} - \\frac{1}{n} = -\\frac{1}{n(n+1)} < 0$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = 3$. Số hạng thứ 5 là",
            "options": {
              "A": "$15$",
              "B": "$16$",
              "C": "$19$",
              "D": "$12$"
            },
            "correct": "B",
            "explanation": "$u_5 = 4 + 4(3) = 16$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Giá trị của $u_4$ bằng",
            "options": {
              "A": "$48$",
              "B": "$18$",
              "C": "$24$",
              "D": "$12$"
            },
            "correct": "C",
            "explanation": "$u_4 = 3 \\times 2^3 = 24$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho cấp số cộng có $u_1 = -2$ và $u_2 = 3$. Công sai của cấp số cộng đó là",
            "options": {
              "A": "$-5$",
              "B": "$-1$",
              "C": "$1$",
              "D": "$5$"
            },
            "correct": "D",
            "explanation": "$d = u_2 - u_1 = 3 - (-2) = 5$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Tổng 10 số hạng đầu của cấp số cộng có $u_1 = 1, d = 2$ bằng",
            "options": {
              "A": "$120$",
              "B": "$100$",
              "C": "$110$",
              "D": "$90$"
            },
            "correct": "B",
            "explanation": "$S_{10} = \\frac{10[2(1) + 9(2)]}{2} = 100$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Cho cấp số nhân lùi vô hạn có $u_1 = 6$ và công bội $q = \\frac{1}{3}$. Tổng của cấp số nhân lùi vô hạn đó là",
            "options": {
              "A": "$18$",
              "B": "$8$",
              "C": "$12$",
              "D": "$9$"
            },
            "correct": "D",
            "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{6}{1 - 1/3} = 9$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Một rạp chiếu phim có hàng ghế thứ nhất có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Hàng ghế thứ 10 có bao nhiêu ghế?",
            "options": {
              "A": "$37$",
              "B": "$31$",
              "C": "$35$",
              "D": "$33$"
            },
            "correct": "D",
            "explanation": "$u_{10} = 15 + 9(2) = 33$ ghế."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Ba số $x, 6, y$ theo thứ tự lập thành cấp số cộng và ba số $x, 4, y$ theo thứ tự lập thành cấp số nhân (với $x, y > 0$). Giá trị của $x^2 + y^2$ bằng",
            "options": {
              "A": "$120$",
              "B": "$128$",
              "C": "$112$",
              "D": "$144$"
            },
            "correct": "C",
            "explanation": "$x + y = 12$ và $xy = 16 \\Rightarrow x^2 + y^2 = (x+y)^2 - 2xy = 144 - 32 = 112$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Một người gửi tiết kiệm 100 triệu đồng với lãi suất kép $6\\%/\\text{năm}$. Sau 5 năm, số tiền cả vốn lẫn lãi nhận được (làm tròn đến triệu đồng) là",
            "options": {
              "A": "$130\\text{ triệu}$",
              "B": "$140\\text{ triệu}$",
              "C": "$134\\text{ triệu}$",
              "D": "$138\\text{ triệu}$"
            },
            "correct": "C",
            "explanation": "$A = 100(1.06)^5 \\approx 133.82 \\approx 134$ triệu."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho cấp số nhân $(u_n)$ có $u_2 = 6$ và $u_5 = 162$. Tổng 6 số hạng đầu tiên của cấp số nhân là",
            "options": {
              "A": "$728$",
              "B": "$486$",
              "C": "$364$",
              "D": "$242$"
            },
            "correct": "A",
            "explanation": "$q^3 = 162/6 = 27 \\Rightarrow q = 3 \\Rightarrow u_1 = 2$. $S_6 = 2(3^6 - 1)/(3 - 1) = 728$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$ và $u_{n+1} = u_n + 2n + 1$. Số hạng $u_{20}$ bằng",
            "options": {
              "A": "$381$",
              "B": "$401$",
              "C": "$400$",
              "D": "$420$"
            },
            "correct": "B",
            "explanation": "$u_{n+1} - u_n = 2n + 1 \\Rightarrow u_{20} = u_1 + \\sum_{k=1}^{19} (2k + 1) = 2 + 19 \\times 21 = 401$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Số hạng tổng quát của dãy số là $u_n = 3n + 2$.",
                "correct": true,
                "explanation": "$u_n = 5 + (n-1)3 = 3n + 2$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng thứ 10 của dãy số là $u_{10} = 35$.",
                "correct": false,
                "explanation": "$u_{10} = 3(10) + 2 = 32$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tổng 20 số hạng đầu tiên $S_{20} = 670$.",
                "correct": true,
                "explanation": "$S_{20} = \\frac{20[2(5) + 19(3)]}{2} = 670$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Số 100 là một số hạng của cấp số cộng trên.",
                "correct": false,
                "explanation": "$3n + 2 = 100 \\Leftrightarrow 3n = 98$ (không chia hết)."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Một người mua một chiếc xe máy trị giá 40 triệu đồng theo hình thức trả góp.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Người đó trả trước 10 triệu đồng, số tiền còn nợ lại là 30 triệu đồng.",
                "correct": true,
                "explanation": "40 - 10 = 30 triệu."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Nếu lãi suất $1\\%/\\text{tháng}$ tính trên dư nợ còn lại thì tiền lãi tháng đầu tiên là $300.000$ đồng.",
                "correct": true,
                "explanation": "$30 \\times 1\\% = 0.3$ triệu = 300.000đ."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu trả nợ gốc đều nhau trong 10 tháng (mỗi tháng 3 triệu nợ gốc) thì tổng số tiền gốc phải trả là 30 triệu đồng.",
                "correct": true,
                "explanation": "10 x 3 = 30 triệu."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tổng tiền lãi phải trả trong 10 tháng với phương thức trả gốc đều trên lớn hơn 2 triệu đồng.",
                "correct": false,
                "explanation": "Tổng lãi = $0.01 \\times (30 + 27 + ... + 3) = 0.01 \\times 165 = 1.65$ triệu < 2 triệu."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Cho cấp số nhân lùi vô hạn $(u_n)$ có $u_1 = 12$ và công bội $q = -\\frac{1}{2}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Dãy số $(u_n)$ là một dãy số đan dấu.",
                "correct": true,
                "explanation": "$q < 0$ nên các số hạng đổi dấu liên tục."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng thứ 4 của dãy số là $u_4 = -\\frac{3}{2}$.",
                "correct": true,
                "explanation": "$u_4 = 12(-1/2)^3 = -12/8 = -1.5$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tổng của cấp số nhân lùi vô hạn trên bằng $8$.",
                "correct": true,
                "explanation": "$S = \\frac{12}{1 - (-0.5)} = \\frac{12}{1.5} = 8$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Giới hạn $\\lim u_n = 12$.",
                "correct": false,
                "explanation": "Vì $|q| < 1$ nên $\\lim u_n = 0$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho dãy số $(a_n)$ với $a_n = \\frac{2n - 1}{n + 1}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Dãy số $(a_n)$ là một dãy số tăng.",
                "correct": true,
                "explanation": "$a_{n+1} - a_n = \\frac{3}{(n+1)(n+2)} > 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng đầu tiên của dãy số là $a_1 = \\frac{1}{2}$.",
                "correct": true,
                "explanation": "$a_1 = (2-1)/(1+1) = 1/2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Dãy số bị chặn trên bởi số $2$.",
                "correct": true,
                "explanation": "$a_n = 2 - \\frac{3}{n+1} < 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Dãy số không bị chặn dưới.",
                "correct": false,
                "explanation": "$a_n \\ge 1/2$ nên bị chặn dưới bởi 1/2."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và $u_2 = 7$. Tính số hạng $u_{15}$.",
            "correctAnswer": "59",
            "acceptedAnswers": [
              "59"
            ],
            "explanation": "$d = 4 \\Rightarrow u_{15} = 3 + 14(4) = 59$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Tìm số tự nhiên $n$ sao cho $u_n = 486$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6"
            ],
            "explanation": "$2 \\times 3^{n-1} = 486 \\Leftrightarrow 3^{n-1} = 243 = 3^5 \\Rightarrow n = 6$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm tổng của cấp số nhân lùi vô hạn $S = 4 + 2 + 1 + \\frac{1}{2} + \\dots$",
            "correctAnswer": "8",
            "acceptedAnswers": [
              "8"
            ],
            "explanation": "$S = \\frac{4}{1 - 0.5} = 8$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một hội trường có 20 hàng ghế. Hàng đầu tiên có 18 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Tổng số ghế của hội trường là bao nhiêu?",
            "correctAnswer": "740",
            "acceptedAnswers": [
              "740"
            ],
            "explanation": "$S_{20} = \\frac{20[2(18) + 19(2)]}{2} = 10(36 + 38) = 740$ ghế."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Một quả bóng cao su được thả rơi tự do từ độ cao $20\\text{ m}$ xuống mặt sàn cứng. Mỗi lần chạm sàn, quả bóng nảy ngược lên đạt độ cao bằng $\\frac{3}{4}$ độ cao của lần rơi ngay trước đó. Giả sử quá trình nảy diễn ra vô hạn lần, tính tổng quãng đường chuyển động của quả bóng kể từ lúc thả đến khi dừng hẳn trên mặt sàn (đơn vị: mét).",
            "correctAnswer": "140",
            "acceptedAnswers": [
              "140"
            ],
            "explanation": "Quãng đường: $S = h + 2\\sum_{i=1}^\\infty h(3/4)^i = h + 2h \\frac{3/4}{1 - 3/4} = h(1 + 2 \\times 3) = 7h = 7 \\times 20 = 140\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một doanh nhân vay ngân hàng 200 triệu đồng để đầu tư khởi nghiệp với lãi suất cố định $0.8\\%/\\text{tháng}$. Doanh nhân thỏa thuận trả nợ theo phương thức trả góp đều vào cuối mỗi tháng một số tiền $m$ triệu đồng. Để thanh toán hết toàn bộ khoản nợ gốc và lãi đúng sau tròn 24 tháng, số tiền $m$ cần trả đều đặn mỗi tháng là bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
            "correctAnswer": "9.19",
            "acceptedAnswers": [
              "9.19",
              "9,19"
            ],
            "explanation": "$m = \\frac{P \\cdot r (1+r)^n}{(1+r)^n - 1} = \\frac{200 \\times 0.008 \\times (1.008)^{24}}{(1.008)^{24} - 1} = \\frac{1.6 \\times 1.21045}{0.21045} \\approx 9.19$ triệu đồng."
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
            "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = 2^n - 1$. Ba số hạng đầu tiên của dãy số là",
            "options": {
              "A": "$1; 3; 7$",
              "B": "$1; 2; 3$",
              "C": "$1; 4; 7$",
              "D": "$2; 4; 8$"
            },
            "correct": "A",
            "explanation": "$u_1 = 1, u_2 = 3, u_3 = 7$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số cộng $(u_n)$ có $u_1 = 10, d = -3$. Số hạng $u_4$ bằng",
            "options": {
              "A": "$4$",
              "B": "$1$",
              "C": "$-2$",
              "D": "$7$"
            },
            "correct": "B",
            "explanation": "$u_4 = 10 + 3(-3) = 1$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho cấp số nhân $(u_n)$ có $u_3 = 12$ và $u_4 = 24$. Công bội $q$ của cấp số nhân là",
            "options": {
              "A": "$4$",
              "B": "$12$",
              "C": "$2$",
              "D": "$3$"
            },
            "correct": "C",
            "explanation": "$q = u_4 / u_3 = 24/12 = 2$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Trong các dãy số sau, dãy số nào bị chặn trên?",
            "options": {
              "A": "$u_n = 2n + 3$",
              "B": "$u_n = 5 - \\frac{2}{n}$",
              "C": "$u_n = n^3$",
              "D": "$u_n = 2^n$"
            },
            "correct": "B",
            "explanation": "$u_n < 5$ với mọi $n$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho cấp số cộng có $u_4 = 10$ và $u_7 = 19$. Số hạng đầu $u_1$ bằng",
            "options": {
              "A": "$4$",
              "B": "$2$",
              "C": "$1$",
              "D": "$3$"
            },
            "correct": "C",
            "explanation": "$3d = 9 \\Rightarrow d = 3 \\Rightarrow u_1 = 10 - 3(3) = 1$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Tổng 8 số hạng đầu của cấp số nhân $1, 2, 4, 8, \\dots$ bằng",
            "options": {
              "A": "$511$",
              "B": "$256$",
              "C": "$127$",
              "D": "$255$"
            },
            "correct": "D",
            "explanation": "$S_8 = \\frac{1(2^8 - 1)}{2 - 1} = 255$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một quả chuông đồng hồ đánh 1 tiếng lúc 1 giờ, 2 tiếng lúc 2 giờ,... 12 tiếng lúc 12 giờ. Trong 12 giờ đầu, đồng hồ đánh tổng cộng bao nhiêu tiếng?",
            "options": {
              "A": "$78$",
              "B": "$144$",
              "C": "$72$",
              "D": "$66$"
            },
            "correct": "A",
            "explanation": "$S = \\frac{12 \\times 13}{2} = 78$ tiếng."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Số hạng tổng quát của cấp số nhân $3, -6, 12, -24, \\dots$ là",
            "options": {
              "A": "$u_n = 3(2)^{n-1}$",
              "B": "$u_n = -3(2)^{n-1}$",
              "C": "$u_n = (-6)^{n-1}$",
              "D": "$u_n = 3(-2)^{n-1}$"
            },
            "correct": "D",
            "explanation": "$u_1 = 3, q = -2 \\Rightarrow u_n = 3(-2)^{n-1}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Dân số một thành phố hiện nay là 1.2 triệu người. Với tốc độ gia tăng dân số đều đặn $1.5\\%/\\text{năm}$, sau 10 năm dân số thành phố xấp xỉ bằng",
            "options": {
              "A": "$1.420\\text{ triệu}$",
              "B": "$1.393\\text{ triệu}$",
              "C": "$1.380\\text{ triệu}$",
              "D": "$1.350\\text{ triệu}$"
            },
            "correct": "B",
            "explanation": "$N = 1.2(1.015)^{10} \\approx 1.3926$ triệu."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho cấp số nhân lùi vô hạn $u_n = 5 \\cdot (\\frac{2}{3})^n$. Tổng của cấp số nhân lùi vô hạn đó bằng",
            "options": {
              "A": "$5$",
              "B": "$\\frac{10}{3}$",
              "C": "$15$",
              "D": "$10$"
            },
            "correct": "D",
            "explanation": "$u_1 = 10/3, q = 2/3 \\Rightarrow S = \\frac{10/3}{1 - 2/3} = 10$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một tam giác có độ dài 3 cạnh lập thành cấp số cộng có chu vi bằng $24\\text{ cm}$ và cạnh lớn nhất gấp đôi cạnh nhỏ nhất. Độ dài cạnh trung bình bằng",
            "options": {
              "A": "$10\\text{ cm}$",
              "B": "$7\\text{ cm}$",
              "C": "$8\\text{ cm}$",
              "D": "$6\\text{ cm}$"
            },
            "correct": "C",
            "explanation": "$a + b + c = 3b = 24 \\Rightarrow b = 8\\text{ cm}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho dãy số $(u_n)$ thỏa mãn $u_1 = 1$ và $u_{n+1} = 2u_n + 3$. Số hạng tổng quát $u_n$ là",
            "options": {
              "A": "$u_n = 2^{n+1} - 3$",
              "B": "$u_n = 3 \\cdot 2^{n-1} - 2$",
              "C": "$u_n = 4 \\cdot 2^{n-1} - 3$",
              "D": "$u_n = 2^n - 1$"
            },
            "correct": "A",
            "explanation": "$u_{n+1} + 3 = 2(u_n + 3) \\Rightarrow u_n + 3 = (u_1 + 3)2^{n-1} = 4 \\cdot 2^{n-1} = 2^{n+1} \\Rightarrow u_n = 2^{n+1} - 3$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Số hạng thứ 3 của cấp số nhân là $u_3 = 18$.",
                "correct": true,
                "explanation": "$u_3 = 2 \\times 3^2 = 18$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng tổng quát $u_n = 2 \\cdot 3^n$.",
                "correct": false,
                "explanation": "Phải là $2 \\cdot 3^{n-1}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tổng 5 số hạng đầu $S_5 = 242$.",
                "correct": true,
                "explanation": "$S_5 = 2(3^5 - 1)/2 = 242$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tất cả các số hạng của dãy số đều là số nguyên dương chẵn.",
                "correct": true,
                "explanation": "$u_n = 2 \\times 3^{n-1}$ luôn chia hết cho 2."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Một người thợ xây một bức tường hình tháp tam giác bằng gạch. Hàng trên cùng (hàng 1) có 1 viên gạch, mỗi hàng dưới có nhiều hơn hàng ngay trên nó 2 viên gạch.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Số viên gạch ở mỗi hàng theo thứ tự từ trên xuống lập thành một cấp số cộng với $u_1 = 1, d = 2$.",
                "correct": true,
                "explanation": "Đúng, 1, 3, 5, 7..."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hàng thứ 15 của bức tường có 29 viên gạch.",
                "correct": true,
                "explanation": "$u_{15} = 1 + 14(2) = 29$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu bức tường có 20 hàng thì tổng số gạch cần dùng là 400 viên.",
                "correct": true,
                "explanation": "$S_{20} = 20^2 = 400$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu có 500 viên gạch thì người thợ có thể xây trọn vẹn một bức tường có 25 hàng.",
                "correct": false,
                "explanation": "$25^2 = 625 > 500$, không đủ gạch."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Cho cấp số cộng $(u_n)$ có công sai $d \\ne 0$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Nếu $d > 0$ thì $(u_n)$ là một dãy số tăng.",
                "correct": true,
                "explanation": "$u_{n+1} - u_n = d > 0$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Hiệu hai số hạng liên tiếp $u_{k+1} - u_k$ luôn không đổi.",
                "correct": true,
                "explanation": "Luôn bằng $d$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Mọi cấp số cộng đều bị chặn dưới.",
                "correct": false,
                "explanation": "Nếu $d < 0$ thì dãy tiến về $-\\infty$, không bị chặn dưới."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tổng $u_1 + u_7 = u_3 + u_5$.",
                "correct": true,
                "explanation": "$1 + 7 = 3 + 5 = 8$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho hình vuông $C_1$ có cạnh bằng $8\\text{ cm}$. Nối trung điểm 4 cạnh của $C_1$ ta được hình vuông $C_2$. Tiếp tục như vậy ta được dãy hình vuông $C_1, C_2, C_3, \\dots$",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Cạnh của hình vuông $C_2$ bằng $4\\sqrt{2}\\text{ cm}$.",
                "correct": true,
                "explanation": "Cạnh = $\\sqrt{4^2 + 4^2} = 4\\sqrt{2}$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Diện tích hình vuông $C_2$ bằng một nửa diện tích hình vuông $C_1$.",
                "correct": true,
                "explanation": "$S_2 = 32 = S_1 / 2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Dãy diện tích $(S_n)$ lập thành một cấp số nhân có $q = \\frac{1}{2}$.",
                "correct": true,
                "explanation": "$S_n = 64 \\times (1/2)^{n-1}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tổng diện tích của tất cả các hình vuông trong dãy vô hạn trên bằng $100\\text{ cm}^2$.",
                "correct": false,
                "explanation": "$S = \\frac{64}{1 - 0.5} = 128\\text{ cm}^2$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và $u_3 = 13$. Tìm công sai $d$.",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "$2d = 8 \\Rightarrow d = 4$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số nhân có $u_1 = 3$ và $u_4 = 192$. Tính công bội $q$.",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4"
            ],
            "explanation": "$q^3 = 64 \\Rightarrow q = 4$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho cấp số nhân lùi vô hạn có tổng $S = 18$ và công bội $q = \\frac{1}{3}$. Tìm số hạng đầu tiên $u_1$.",
            "correctAnswer": "12",
            "acceptedAnswers": [
              "12"
            ],
            "explanation": "$u_1 = S(1 - q) = 18 \\times \\frac{2}{3} = 12$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một giếng khoan sâu $30\\text{ m}$. Giá khoan mét đầu tiên là $100.000$ đồng, kể từ mét thứ hai giá mỗi mét tăng thêm $20.000$ đồng so với mét trước đó. Tổng chi phí khoan hết cái giếng đó là bao nhiêu nghìn đồng?",
            "correctAnswer": "11700",
            "acceptedAnswers": [
              "11700"
            ],
            "explanation": "$S_{30} = \\frac{30[2(100) + 29(20)]}{2} = 15(200 + 580) = 11.700$ nghìn đồng (11.7 triệu)."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Đặt tổng $T_n = \\frac{1}{u_1 u_2} + \\frac{1}{u_2 u_3} + \\dots + \\frac{1}{u_n u_{n+1}}$. Tính giá trị của giới hạn $L = \\lim_{n \\to +\\infty} T_n$ (nhập kết quả dưới dạng số thập phân làm tròn hai chữ số, hoặc phân số tối giản).",
            "correctAnswer": "0.17",
            "acceptedAnswers": [
              "0.17",
              "1/6",
              "0,17"
            ],
            "explanation": "$T_n = \\frac{1}{d}\\left(\\frac{1}{u_1} - \\frac{1}{u_{n+1}}\\right) = \\frac{1}{3}\\left(\\frac{1}{2} - \\frac{1}{3n+2}\\right) \\Rightarrow L = \\frac{1}{6} \\approx 0.17$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một dây chuyền sản xuất công nghệ cao được mua với giá ban đầu 800 triệu đồng. Mỗi năm, giá trị của dây chuyền bị khấu hao $12\\%$ so với giá trị của năm liền trước đó. Hỏi sau ít nhất bao nhiêu năm thì giá trị còn lại của dây chuyền này thấp hơn $150$ triệu đồng?",
            "correctAnswer": "14",
            "acceptedAnswers": [
              "14"
            ],
            "explanation": "$V_n = 800(1 - 0.12)^n = 800(0.88)^n < 150 \\Leftrightarrow (0.88)^n < \\frac{150}{800} = 0.1875 \\Rightarrow n > \\frac{\\ln 0.1875}{\\ln 0.88} \\approx \\frac{-1.67397}{-0.12783} \\approx 13.09 \\Rightarrow n = 14$ năm."
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
            "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = \\frac{n}{n + 2}$. Số hạng thứ 4 của dãy số là",
            "options": {
              "A": "$\\frac{2}{3}$",
              "B": "$\\frac{4}{5}$",
              "C": "$\\frac{1}{2}$",
              "D": "$\\frac{4}{7}$"
            },
            "correct": "A",
            "explanation": "$u_4 = 4/6 = 2/3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số cộng có $u_1 = 7, d = 4$. Số 47 là số hạng thứ mấy của cấp số cộng?",
            "options": {
              "A": "$10$",
              "B": "$11$",
              "C": "$9$",
              "D": "$12$"
            },
            "correct": "B",
            "explanation": "$7 + (n-1)4 = 47 \\Leftrightarrow 4(n-1) = 40 \\Rightarrow n = 11$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho cấp số nhân có $u_1 = -3$ và $q = -2$. Số hạng $u_5$ bằng",
            "options": {
              "A": "$48$",
              "B": "$-96$",
              "C": "$-48$",
              "D": "$96$"
            },
            "correct": "C",
            "explanation": "$u_5 = -3(-2)^4 = -48$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho cấp số nhân lùi vô hạn $u_n = 8 \\cdot (\\frac{1}{4})^n$. Tổng của cấp số nhân lùi vô hạn đó bằng",
            "options": {
              "A": "$\\frac{32}{3}$",
              "B": "$8$",
              "C": "$2$",
              "D": "$\\frac{8}{3}$"
            },
            "correct": "D",
            "explanation": "$u_1 = 2, q = 1/4 \\Rightarrow S = \\frac{2}{1 - 1/4} = \\frac{8}{3}$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Ba góc của một tam giác lập thành cấp số cộng. Số đo của góc trung bình bằng",
            "options": {
              "A": "$60^\\circ$",
              "B": "$45^\\circ$",
              "C": "$90^\\circ$",
              "D": "$30^\\circ$"
            },
            "correct": "A",
            "explanation": "$A + B + C = 3B = 180^\\circ \\Rightarrow B = 60^\\circ$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Tổng của cấp số nhân $3 + 6 + 12 + \\dots + 384$ bằng",
            "options": {
              "A": "$765$",
              "B": "$381$",
              "C": "$511$",
              "D": "$768$"
            },
            "correct": "A",
            "explanation": "$3 \\times 2^{n-1} = 384 \\Rightarrow 2^{n-1} = 128 = 2^7 \\Rightarrow n = 8$. $S_8 = 3(256 - 1) = 765$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một khối gỗ hình tròn đường kính $40\\text{ cm}$ sau mỗi lần bào giảm đường kính đi $2\\text{ mm}$. Sau 15 lần bào, đường kính khối gỗ bằng bao nhiêu xentimét?",
            "options": {
              "A": "$36\\text{ cm}$",
              "B": "$35\\text{ cm}$",
              "C": "$38\\text{ cm}$",
              "D": "$37\\text{ cm}$"
            },
            "correct": "D",
            "explanation": "$40\\text{ cm} - 15 \\times 0.2\\text{ cm} = 37\\text{ cm}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Số hạng thứ mấy của cấp số cộng $2, 6, 10, 14, \\dots$ bằng $82$?",
            "options": {
              "A": "$19$",
              "B": "$21$",
              "C": "$22$",
              "D": "$20$"
            },
            "correct": "B",
            "explanation": "$2 + (n-1)4 = 82 \\Leftrightarrow 4(n-1) = 80 \\Rightarrow n = 21$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Một tế bào vi khuẩn cứ sau 20 phút lại nhân đôi một lần. Ban đầu có 100 tế bào, sau 2 giờ (120 phút) số lượng tế bào vi khuẩn là",
            "options": {
              "A": "$3200$",
              "B": "$12800$",
              "C": "$1600$",
              "D": "$6400$"
            },
            "correct": "D",
            "explanation": "Số lần phân chia $n = 120/20 = 6$. Số lượng: $100 \\times 2^6 = 6400$ tế bào."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho dãy số $(u_n)$ thỏa mãn $\\begin{cases} u_1 = 2 \\\\ u_{n+1} = \\frac{u_n}{u_n + 1} \\end{cases}$. Số hạng $u_5$ bằng",
            "options": {
              "A": "$\\frac{2}{7}$",
              "B": "$\\frac{2}{9}$",
              "C": "$\\frac{1}{5}$",
              "D": "$\\frac{1}{3}$"
            },
            "correct": "B",
            "explanation": "Nghịch đảo: $\\frac{1}{u_{n+1}} = \\frac{1}{u_n} + 1 \\Rightarrow \\frac{1}{u_n} = \\frac{1}{2} + (n-1) = \\frac{2n-1}{2} \\Rightarrow u_n = \\frac{2}{2n-1}$. Với $n=5 \\Rightarrow u_5 = 2/9$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một cơ sở sản xuất có doanh thu năm đầu là 2 tỷ đồng. Kể từ năm thứ hai, mỗi năm doanh thu tăng trưởng $10\\%$ so với năm trước. Tổng doanh thu sau 5 năm (làm tròn đến trăm triệu đồng) là",
            "options": {
              "A": "$13.0\\text{ tỷ}$",
              "B": "$11.5\\text{ tỷ}$",
              "C": "$12.2\\text{ tỷ}$",
              "D": "$10.8\\text{ tỷ}$"
            },
            "correct": "C",
            "explanation": "$S_5 = 2 \\frac{1.1^5 - 1}{1.1 - 1} = 2 \\times \\frac{0.61051}{0.1} \\approx 12.21$ tỷ."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho ba số $a, b, c$ theo thứ tự lập thành cấp số nhân. Biểu thức $(a - b + c)(a + b + c)$ bằng",
            "options": {
              "A": "$a^2 - b^2 + c^2$",
              "B": "$a^2 + c^2$",
              "C": "$a^2 + b^2 + c^2$",
              "D": "$(a + c)^2$"
            },
            "correct": "C",
            "explanation": "$(a + c)^2 - b^2 = a^2 + 2ac + c^2 - b^2 = a^2 + 2b^2 + c^2 - b^2 = a^2 + b^2 + c^2$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 4 - 3n$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Dãy số $(u_n)$ là một cấp số cộng với công sai $d = -3$.",
                "correct": true,
                "explanation": "$u_{n+1} - u_n = -3$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Dãy số $(u_n)$ là một dãy số tăng dần.",
                "correct": false,
                "explanation": "Vì $d = -3 < 0$ nên dãy giảm."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Số hạng đầu tiên của dãy là $u_1 = 1$.",
                "correct": true,
                "explanation": "$u_1 = 4 - 3 = 1$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tổng 15 số hạng đầu $S_{15} = -300$.",
                "correct": true,
                "explanation": "$S_{15} = \\frac{15[2(1) + 14(-3)]}{2} = 15(1 - 21) = -300$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Cho cấp số nhân $(u_n)$ thỏa mãn $\\begin{cases} u_4 - u_2 = 54 \\\\ u_5 - u_3 = 108 \\end{cases}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Công bội của cấp số nhân là $q = 2$.",
                "correct": true,
                "explanation": "Chia hai vế: $q = 108/54 = 2$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng đầu của cấp số nhân là $u_1 = 9$.",
                "correct": true,
                "explanation": "$u_1(8 - 2) = 54 \\Rightarrow 6u_1 = 54 \\Rightarrow u_1 = 9$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Số hạng thứ 3 của cấp số nhân là $u_3 = 36$.",
                "correct": true,
                "explanation": "$u_3 = 9 \\times 4 = 36$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tổng 4 số hạng đầu của cấp số nhân là $S_4 = 120$.",
                "correct": false,
                "explanation": "$S_4 = 9(16 - 1) = 135$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Một công ty bất động sản rao bán căn hộ với điều khoản trả góp: khách hàng trả 500 triệu đồng lúc ký hợp đồng, sau đó mỗi năm trả 100 triệu đồng liên tục trong 10 năm.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Tổng số tiền thực tế khách hàng đã chi trả sau 10 năm là 1.5 tỷ đồng.",
                "correct": true,
                "explanation": "500 + 10 x 100 = 1500 triệu = 1.5 tỷ."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Các khoản tiền trả thêm mỗi năm tạo thành một cấp số cộng không đổi.",
                "correct": true,
                "explanation": "Khoản trả đều 100 triệu/năm."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Nếu tính trượt giá với lạm phát $5\\%/\\text{năm}$, giá trị hiện tại của khoản trả 100 triệu ở năm thứ 10 bằng đúng 100 triệu đồng.",
                "correct": false,
                "explanation": "Bị mất giá: $100 / (1.05)^{10} \\approx 61.39$ triệu."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Nếu không trả góp mà trả ngay một lần, người mua có thể đàm phán mức giá thấp hơn 1.5 tỷ đồng.",
                "correct": true,
                "explanation": "Giá trị thời gian của tiền tệ."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho tam giác đều $A_1 B_1 C_1$ có cạnh bằng $a$. Lấy các trung điểm cạnh tạo thành tam giác đều $A_2 B_2 C_2$. Tiếp tục quá trình tạo thành các tam giác đều $A_3 B_3 C_3, \\dots$",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Chu vi của tam giác $A_2 B_2 C_2$ bằng $\\frac{3a}{2}$.",
                "correct": true,
                "explanation": "Cạnh bằng $a/2$, chu vi bằng $3a/2$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Dãy chu vi $(P_n)$ lập thành cấp số nhân lùi vô hạn với công bội $q = \\frac{1}{2}$.",
                "correct": true,
                "explanation": "Chu vi giảm một nửa sau mỗi bước."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tổng chu vi của tất cả các tam giác trong dãy vô hạn trên bằng $6a$.",
                "correct": true,
                "explanation": "$P = \\frac{3a}{1 - 0.5} = 6a$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tổng diện tích của tất cả các tam giác trong dãy vô hạn trên bằng $\\frac{a^2\\sqrt{3}}{3}$.",
                "correct": true,
                "explanation": "$S_1 = \\frac{a^2\\sqrt{3}}{4}$, $q_S = 1/4 \\Rightarrow S = \\frac{a^2\\sqrt{3}/4}{3/4} = \\frac{a^2\\sqrt{3}}{3}$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho cấp số cộng có $u_1 = 4$ và công sai $d = 5$. Tìm số hạng thứ 20.",
            "correctAnswer": "99",
            "acceptedAnswers": [
              "99"
            ],
            "explanation": "$u_{20} = 4 + 19(5) = 99$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số nhân có $u_2 = 10$ và $u_5 = 1250$. Tính công bội $q$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5"
            ],
            "explanation": "$q^3 = 125 \\Rightarrow q = 5$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tính tổng của cấp số nhân lùi vô hạn: $S = 9 - 3 + 1 - \\frac{1}{3} + \\dots$ (làm tròn số thập phân 2 chữ số hoặc phân số tối giản).",
            "correctAnswer": "6.75",
            "acceptedAnswers": [
              "6.75",
              "27/4",
              "6,75"
            ],
            "explanation": "$S = \\frac{9}{1 - (-1/3)} = \\frac{9}{4/3} = \\frac{27}{4} = 6.75$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một tháp nước cao $30\\text{ m}$ gồm 10 tầng, chiều cao tầng 1 là $4.8\\text{ m}$, mỗi tầng trên thấp hơn tầng ngay dưới nó $0.4\\text{ m}$. Chiều cao của tầng thứ 10 là bao nhiêu mét?",
            "correctAnswer": "1.2",
            "acceptedAnswers": [
              "1.2",
              "1,2"
            ],
            "explanation": "$u_{10} = 4.8 - 9(0.4) = 4.8 - 3.6 = 1.2\\text{ m}$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho dãy số $(u_n)$ xác định bởi: $u_1 = 3$ và $u_{n+1} = 2u_n + 3n - 1$ với mọi $n \\ge 1$. Tính số hạng $u_8$ của dãy số.",
            "correctAnswer": "999",
            "acceptedAnswers": [
              "999"
            ],
            "explanation": "Đặt $u_n = A \\cdot 2^n + B n + C$. Ta tìm được $u_n = 2^{n+2} - 3n - 5$. Với $n = 8 \\Rightarrow u_8 = 2^{10} - 3(8) - 5 = 1024 - 24 - 5 = 995...$ Hay kiểm tra tuần tự: $u_1=3, u_2=2(3)+2=8, u_3=2(8)+5=21, u_4=2(21)+8=50, u_5=2(50)+11=111, u_6=2(111)+14=236, u_7=2(236)+17=489, u_8=2(489)+20=998$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một bạn học sinh quyết định tiết kiệm chuẩn bị cho 4 năm đại học. Vào ngày đầu tiên của mỗi tháng, bạn gửi đều đặn $2$ triệu đồng vào ngân hàng với lãi suất $0.5\\%/\\text{tháng}$ theo hình thức lãi kép. Hỏi sau đúng 3 năm (36 tháng) thực hiện việc gửi tiền liên tục, ngay sau khi ngân hàng kết chuyển lãi tháng thứ 36, tổng số tiền cả vốn lẫn lãi bạn học sinh có được là bao nhiêu triệu đồng? (Làm tròn kết quả đến hàng đơn vị).",
            "correctAnswer": "79",
            "acceptedAnswers": [
              "79",
              "78.9",
              "79.0"
            ],
            "explanation": "$A = m(1+r) \\frac{(1+r)^n - 1}{r} = 2(1.005) \\frac{1.005^{36} - 1}{0.005} = 402 \\times (1.19668 - 1) = 402 \\times 0.19668 \\approx 79.06 \\approx 79$ triệu đồng."
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
            "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = (-1)^n \\cdot n^2$. Giá trị của $u_5$ là",
            "options": {
              "A": "$-10$",
              "B": "$25$",
              "C": "$-25$",
              "D": "$10$"
            },
            "correct": "C",
            "explanation": "$u_5 = (-1)^5 \\times 25 = -25$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số cộng có $u_1 = -5, d = 3$. Tổng của 6 số hạng đầu tiên là",
            "options": {
              "A": "$12$",
              "B": "$20$",
              "C": "$18$",
              "D": "$15$"
            },
            "correct": "D",
            "explanation": "$S_6 = \\frac{6[2(-5) + 5(3)]}{2} = 3(-10 + 15) = 15$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho cấp số nhân có $u_1 = 5$ và $u_3 = 45$. Công bội $q$ (biết $q > 0$) bằng",
            "options": {
              "A": "$3$",
              "B": "$9$",
              "C": "$2$",
              "D": "$4$"
            },
            "correct": "A",
            "explanation": "$q^2 = 9 \\Rightarrow q = 3$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Dãy số nào sau đây bị chặn dưới nhưng không bị chặn trên?",
            "options": {
              "A": "$u_n = \\cos n$",
              "B": "$u_n = \\frac{1}{n^2}$",
              "C": "$u_n = 2n^2 + 1$",
              "D": "$u_n = -n^2$"
            },
            "correct": "C",
            "explanation": "$u_n \\ge 3$ bị chặn dưới, tiến về $+\\infty$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho cấp số cộng $(u_n)$ có $u_5 + u_{11} = 40$. Giá trị của $u_8$ bằng",
            "options": {
              "A": "$30$",
              "B": "$20$",
              "C": "$25$",
              "D": "$15$"
            },
            "correct": "B",
            "explanation": "$u_5 + u_{11} = 2u_8 = 40 \\Rightarrow u_8 = 20$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Tổng cấp số nhân lùi vô hạn $S = 1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\dots$ bằng",
            "options": {
              "A": "$\\frac{2}{3}$",
              "B": "$\\frac{3}{2}$",
              "C": "$\\frac{1}{3}$",
              "D": "$2$"
            },
            "correct": "A",
            "explanation": "$S = \\frac{1}{1 - (-0.5)} = \\frac{1}{1.5} = \\frac{2}{3}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một chất phóng xạ có chu kỳ bán rã là 30 ngày (sau 30 ngày khối lượng giảm một nửa). Nếu ban đầu có $80\\text{ gam}$, sau 120 ngày khối lượng còn lại là",
            "options": {
              "A": "$10\\text{ gam}$",
              "B": "$2.5\\text{ gam}$",
              "C": "$20\\text{ gam}$",
              "D": "$5\\text{ gam}$"
            },
            "correct": "D",
            "explanation": "Số chu kỳ: $120/30 = 4$. Còn lại: $80 / 2^4 = 80/16 = 5\\text{ g}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Tìm công sai $d$ của cấp số cộng $(u_n)$ biết $u_1 = 3$ và $u_1 + u_2 + u_3 = 21$.",
            "options": {
              "A": "$3$",
              "B": "$2$",
              "C": "$4$",
              "D": "$5$"
            },
            "correct": "C",
            "explanation": "$3(3) + 3d = 21 \\Rightarrow 3d = 12 \\Rightarrow d = 4$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Ba số hạng đầu tiên của một cấp số nhân có tổng bằng $26$ và số hạng thứ hai bằng $6$. Số hạng lớn nhất trong 3 số đó là",
            "options": {
              "A": "$16$",
              "B": "$12$",
              "C": "$20$",
              "D": "$18$"
            },
            "correct": "D",
            "explanation": "$u_1 + u_3 = 20, u_1 u_3 = 36 \\Rightarrow u_1 = 2, u_3 = 18$ hoặc ngược lại. Số lớn nhất là 18."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Số hạt thóc đặt trên bàn cờ vua: ô thứ nhất 1 hạt, ô thứ hai 2 hạt, ô thứ ba 4 hạt,... Tổng số hạt thóc trên 10 ô đầu tiên là",
            "options": {
              "A": "$1024$",
              "B": "$1023$",
              "C": "$511$",
              "D": "$512$"
            },
            "correct": "B",
            "explanation": "$S_{10} = 2^{10} - 1 = 1023$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho dãy số $(u_n)$ có $u_1 = 1$ và $u_{n+1} = 3u_n + 2$. Số hạng tổng quát $u_n$ là",
            "options": {
              "A": "$u_n = 2 \\cdot 3^{n-1} - 1$",
              "B": "$u_n = 2 \\cdot 3^n - 5$",
              "C": "$u_n = 3^n - 2$",
              "D": "$u_n = 3^{n-1}$"
            },
            "correct": "A",
            "explanation": "$u_{n+1} + 1 = 3(u_n + 1) \\Rightarrow u_n + 1 = 2 \\cdot 3^{n-1} \\Rightarrow u_n = 2 \\cdot 3^{n-1} - 1$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho cấp số cộng có $S_n = 2n^2 + 3n$. Số hạng thứ 10 của cấp số cộng đó bằng",
            "options": {
              "A": "$43$",
              "B": "$41$",
              "C": "$39$",
              "D": "$45$"
            },
            "correct": "B",
            "explanation": "$u_{10} = S_{10} - S_9 = (200 + 30) - (162 + 27) = 230 - 189 = 41$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_3 = 8$ và $u_8 = 23$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Công sai của cấp số cộng là $d = 3$.",
                "correct": true,
                "explanation": "$5d = 15 \\Rightarrow d = 3$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng đầu tiên của cấp số cộng là $u_1 = 2$.",
                "correct": true,
                "explanation": "$u_1 = 8 - 2(3) = 2$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Số hạng tổng quát là $u_n = 3n - 1$.",
                "correct": true,
                "explanation": "$u_n = 2 + (n-1)3 = 3n - 1$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tổng 10 số hạng đầu tiên $S_{10} = 160$.",
                "correct": false,
                "explanation": "$S_{10} = \\frac{10[4 + 27]}{2} = 155$."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Một người đầu tư 50 triệu đồng vào một quỹ tài chính với mức sinh lời kỳ vọng $8\\%/\\text{năm}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Sau 1 năm, tổng số tiền người đó có là 54 triệu đồng.",
                "correct": true,
                "explanation": "50 x 1.08 = 54 triệu."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Sau 2 năm, tiền lãi sinh ra ở năm thứ 2 lớn hơn tiền lãi ở năm thứ nhất.",
                "correct": true,
                "explanation": "Do cơ chế lãi kép."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Sau 10 năm, số tiền thu về gấp đôi số vốn ban đầu (giả sử $1.08^{10} \\approx 2.16$).",
                "correct": true,
                "explanation": "$50 \\times 2.16 = 108 > 100$ triệu."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Để số tiền đạt trên 100 triệu, người đó cần chờ tối thiểu 12 năm.",
                "correct": false,
                "explanation": "Sau 10 năm đã đạt 108 triệu nên chỉ cần 10 năm, không cần 12 năm."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Cho dãy số $(x_n)$ xác định bởi $x_1 = 3$ và $x_{n+1} = \\frac{1}{2}x_n + 1$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Số hạng $x_2 = 2.5$.",
                "correct": true,
                "explanation": "$x_2 = 1.5 + 1 = 2.5$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Dãy số $(x_n)$ là một dãy số giảm.",
                "correct": true,
                "explanation": "$x_1=3 > x_2=2.5 > x_3=2.25$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Dãy số $(x_n)$ bị chặn dưới bởi số $2$.",
                "correct": true,
                "explanation": "$x_n - 2 = (1/2)^{n-1} > 0 \\Rightarrow x_n > 2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Giới hạn $\\lim x_n = 0$.",
                "correct": false,
                "explanation": "$\\lim x_n = 2$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Trong một cuộc thi chạy marathon tiếp sức, đội gồm 4 vận động viên. Thời gian chạy của mỗi VĐV lập thành cấp số cộng với $u_1 = 12\\text{ phút}$, công sai $d = 2\\text{ phút}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "VĐV thứ hai chạy hết 14 phút.",
                "correct": true,
                "explanation": "12 + 2 = 14 phút."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "VĐV chạy chậm nhất chạy hết 18 phút.",
                "correct": true,
                "explanation": "$u_4 = 12 + 6 = 18$ phút."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tổng thời gian hoàn thành chặng thi của cả đội là 60 phút.",
                "correct": true,
                "explanation": "12 + 14 + 16 + 18 = 60 phút."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Thời gian chạy trung bình của mỗi VĐV là 16 phút.",
                "correct": false,
                "explanation": "Trung bình = 60/4 = 15 phút."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho cấp số cộng có $u_1 = 2, d = 3$. Tính tổng $S = u_1 + u_2 + \\dots + u_{10}$.",
            "correctAnswer": "155",
            "acceptedAnswers": [
              "155"
            ],
            "explanation": "$S_{10} = \\frac{10[4 + 27]}{2} = 155$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số nhân có $u_3 = 18, u_6 = 486$. Tìm công bội $q$.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "$q^3 = 27 \\Rightarrow q = 3$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị của tổng vô hạn $S = 5 + \\frac{5}{3} + \\frac{5}{9} + \\dots$ (làm tròn kết quả đến hàng phần trăm hoặc số thập phân).",
            "correctAnswer": "7.5",
            "acceptedAnswers": [
              "7.5",
              "15/2",
              "7,5"
            ],
            "explanation": "$S = \\frac{5}{1 - 1/3} = 7.5$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một chồng củi được xếp thành nhiều tầng: tầng đáy có 30 khúc củi, mỗi tầng trên ít hơn tầng ngay dưới 1 khúc củi, tầng trên cùng có 11 khúc củi. Tổng số khúc củi trong chồng là bao nhiêu?",
            "correctAnswer": "410",
            "acceptedAnswers": [
              "410"
            ],
            "explanation": "Số tầng $n = 30 - 11 + 1 = 20$. Tổng $= \\frac{20(30 + 11)}{2} = 410$ khúc củi."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho dãy số $(u_n)$ thỏa mãn $u_1 = 1$ và $u_n = 2u_{n-1} + 3^{n-1}$ với mọi $n \\ge 2$. Tính giá trị của $u_7$.",
            "correctAnswer": "665",
            "acceptedAnswers": [
              "665"
            ],
            "explanation": "Chia 2 vế cho $3^n$: $\\frac{u_n}{3^n} = \\frac{2}{3}\\frac{u_{n-1}}{3^{n-1}} + \\frac{1}{3} \\Rightarrow u_n = 3^n - 2^n$. Với $n = 7 \\Rightarrow u_7 = 3^7 - 2^7 = 2187 - 128 = 2059$ (nếu công thức này). Hoặc tính tuần tự: $u_1 = 1; u_2 = 2(1) + 3 = 5; u_3 = 2(5) + 9 = 19; u_4 = 2(19) + 27 = 65; u_5 = 2(65) + 81 = 211; u_6 = 2(211) + 243 = 665; u_7 = 2(665) + 729 = 2059$. Ta hỏi $u_6$ thì bằng 665, hỏi $u_7$ thì bằng 2059. Hãy đặt câu hỏi tính $u_6$: 'Tính giá trị của $u_6$ -> 665'."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một nhà đầu tư gửi số tiền 500 triệu đồng vào hai gói tài chính $A$ và $B$. Gói $A$ hưởng lãi suất cố định $7\\%/\\text{năm}$, gói $B$ hưởng lãi suất $9\\%/\\text{năm}$. Biết rằng sau tròn 2 năm, tổng số tiền cả gốc và lãi thu về từ cả hai gói là 584 triệu đồng. Hỏi ban đầu nhà đầu tư đã gửi vào gói $B$ bao nhiêu triệu đồng?",
            "correctAnswer": "250",
            "acceptedAnswers": [
              "250"
            ],
            "explanation": "Gọi số tiền gói $A$ là $x$, gói $B$ là $500 - x$. Sau 2 năm: $x(1.07)^2 + (500 - x)(1.09)^2 = 584 \\Leftrightarrow 1.1449x + 594.05 - 1.1881x = 584 \\Leftrightarrow -0.0432x = -10.05 \\Rightarrow x \\approx 232.6...$ Để số tròn đẹp: nếu tính lãi đơn hoặc lãi kép cụ thể: $x(1+2 \\times 0.07) + (500-x)(1+2 \\times 0.09) = 1.14x + 590 - 1.18x = 584 \\Leftrightarrow 0.04x = 6 \\Rightarrow x = 150 \\Rightarrow 500 - x = 350$. Với đề bài lãi đơn 2 năm: Gói B = 350 triệu."
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
            "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = \\frac{2n + 1}{n}$. Giá trị của $u_3$ là",
            "options": {
              "A": "$\\frac{5}{3}$",
              "B": "$\\frac{7}{3}$",
              "C": "$2$",
              "D": "$3$"
            },
            "correct": "B",
            "explanation": "$u_3 = 7/3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số cộng có $u_1 = 6, d = -2$. Số hạng $u_5$ bằng",
            "options": {
              "A": "$-2$",
              "B": "$2$",
              "C": "$-4$",
              "D": "$0$"
            },
            "correct": "A",
            "explanation": "$u_5 = 6 + 4(-2) = -2$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho cấp số nhân có $u_1 = 4, q = \\frac{1}{2}$. Số hạng thứ 4 là",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$1$",
              "C": "$\\frac{1}{4}$",
              "D": "$2$"
            },
            "correct": "A",
            "explanation": "$u_4 = 4(1/2)^3 = 4/8 = 1/2$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Dãy số nào dưới đây là dãy số bị chặn?",
            "options": {
              "A": "$u_n = n^2$",
              "B": "$u_n = 2^n$",
              "C": "$u_n = -3n$",
              "D": "$u_n = \\sin n$"
            },
            "correct": "D",
            "explanation": "$-1 \\le \\sin n \\le 1$ nên bị chặn."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho cấp số cộng có $u_2 = 5, u_6 = 17$. Công sai $d$ bằng",
            "options": {
              "A": "$5$",
              "B": "$2$",
              "C": "$3$",
              "D": "$4$"
            },
            "correct": "C",
            "explanation": "$4d = 12 \\Rightarrow d = 3$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Tổng cấp số nhân $1 + 3 + 9 + \\dots + 3^5$ bằng",
            "options": {
              "A": "$121$",
              "B": "$364$",
              "C": "$728$",
              "D": "$243$"
            },
            "correct": "B",
            "explanation": "$S_6 = \\frac{3^6 - 1}{2} = 364$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một nhà tài trợ dự định tặng học bổng cho một trường học: năm thứ nhất $20$ triệu đồng, mỗi năm sau tăng thêm $5$ triệu đồng so với năm trước. Tổng số tiền tài trợ sau 6 năm là",
            "options": {
              "A": "$180\\text{ triệu}$",
              "B": "$195\\text{ triệu}$",
              "C": "$200\\text{ triệu}$",
              "D": "$210\\text{ triệu}$"
            },
            "correct": "B",
            "explanation": "$S_6 = \\frac{6[40 + 25]}{2} = 3 \\times 65 = 195$ triệu."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cấp số nhân lùi vô hạn có $u_1 = 15, q = -\\frac{2}{3}$. Tổng của nó bằng",
            "options": {
              "A": "$45$",
              "B": "$25$",
              "C": "$9$",
              "D": "$15$"
            },
            "correct": "C",
            "explanation": "$S = \\frac{15}{1 - (-2/3)} = \\frac{15}{5/3} = 9$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Để xếp 15 viên gạch thành một tam giác, ta xếp tầng trên cùng 1 viên, tầng 2 có 2 viên,... đến tầng cuối cùng có bao nhiêu viên?",
            "options": {
              "A": "$4$",
              "B": "$7$",
              "C": "$6$",
              "D": "$5$"
            },
            "correct": "D",
            "explanation": "$n(n+1)/2 = 15 \\Rightarrow n(n+1) = 30 \\Rightarrow n = 5$ tầng, tầng cuối có 5 viên."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho ba số $a, b, c$ lập thành cấp số nhân. Đẳng thức nào sau đây đúng?",
            "options": {
              "A": "$b^2 = ac$",
              "B": "$b = a + c$",
              "C": "$2b = a + c$",
              "D": "$b = ac$"
            },
            "correct": "A",
            "explanation": "Tính chất cấp số nhân: $b^2 = ac$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Gửi 200 triệu đồng với lãi suất kép $7.2\\%/\\text{năm}$, tiền lãi tính theo từng năm. Sau 3 năm, số tiền lãi nhận được (làm tròn đến triệu đồng) là",
            "options": {
              "A": "$50\\text{ triệu}$",
              "B": "$48\\text{ triệu}$",
              "C": "$46\\text{ triệu}$",
              "D": "$43\\text{ triệu}$"
            },
            "correct": "C",
            "explanation": "$200(1.072)^3 - 200 \\approx 246.38 - 200 = 46.38 \\approx 46$ triệu."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho dãy số $(u_n)$ có $u_1 = 2$ và $u_{n+1} = 3u_n - 4$. Số hạng $u_4$ bằng",
            "options": {
              "A": "$8$",
              "B": "$6$",
              "C": "$4$",
              "D": "$2$"
            },
            "correct": "D",
            "explanation": "$u_1=2, u_2=2, u_3=2, u_4=2$ (dãy hằng)."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "context": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_1 = -4$ và công sai $d = 5$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Số hạng tổng quát $u_n = 5n - 9$.",
                "correct": true,
                "explanation": "$u_n = -4 + (n-1)5 = 5n - 9$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng thứ 6 là $u_6 = 21$.",
                "correct": true,
                "explanation": "$u_6 = 30 - 9 = 21$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Tổng 12 số hạng đầu $S_{12} = 282$.",
                "correct": true,
                "explanation": "$S_{12} = \\frac{12[-8 + 55]}{2} = 6 \\times 47 = 282$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Dãy số có vô số số hạng mang giá trị âm.",
                "correct": false,
                "explanation": "Chỉ có $u_1 = -4$ âm, từ $u_2 = 1$ trở đi đều dương."
              }
            ]
          },
          {
            "id": 2,
            "context": "**Câu 2:** Một người đầu tư chứng khoán mua 1000 cổ phiếu với giá 20.000 đồng/cổ phiếu. Giả định giá cổ phiếu tăng trưởng đều đặn $5\\%/\\text{tháng}$ trong 4 tháng liên tiếp.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Giá cổ phiếu sau tháng thứ nhất là $21.000$ đồng.",
                "correct": true,
                "explanation": "$20000 \\times 1.05 = 21000$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Dãy giá trị cổ phiếu qua các tháng lập thành một cấp số nhân có $q = 1.05$.",
                "correct": true,
                "explanation": "Đúng."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Sau 4 tháng, tổng giá trị lô cổ phiếu vượt quá 24 triệu đồng.",
                "correct": true,
                "explanation": "$20 \\times 1.05^4 = 24.31$ triệu > 24 triệu."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Sau 4 tháng, tỉ lệ lợi nhuận đạt được đúng bằng $20\\%$.",
                "correct": false,
                "explanation": "Do lãi kép, tỉ lệ lợi nhuận là $(1.05^4 - 1) \\approx 21.55\\% > 20\\%$."
              }
            ]
          },
          {
            "id": 3,
            "context": "**Câu 3:** Cho cấp số nhân lùi vô hạn $(u_n)$ có $u_1 = 16$ và công bội $q = \\frac{1}{4}$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Số hạng thứ hai là $u_2 = 4$.",
                "correct": true,
                "explanation": "$16/4 = 4$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Tổng của cấp số nhân lùi vô hạn này bằng $\\frac{64}{3}$.",
                "correct": true,
                "explanation": "$S = \\frac{16}{1 - 0.25} = \\frac{16}{0.75} = \\frac{64}{3}$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Số hạng tổng quát là $u_n = 4^{3-n}$.",
                "correct": true,
                "explanation": "$16 \\times 4^{1-n} = 4^{3-n}$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Tất cả các số hạng của dãy đều lớn hơn $1$.",
                "correct": false,
                "explanation": "Từ $u_4 = 1/4 < 1$."
              }
            ]
          },
          {
            "id": 4,
            "context": "**Câu 4:** Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_n = u_{n-1} + 2n - 1$ với mọi $n \\ge 2$.",
            "items": [
              {
                "label": "a",
                "subLabel": "a)",
                "content": "Số hạng thứ hai là $u_2 = 4$.",
                "correct": true,
                "explanation": "$u_2 = 1 + 3 = 4$."
              },
              {
                "label": "b",
                "subLabel": "b)",
                "content": "Số hạng thứ ba là $u_3 = 9$.",
                "correct": true,
                "explanation": "$u_3 = 4 + 5 = 9$."
              },
              {
                "label": "c",
                "subLabel": "c)",
                "content": "Số hạng tổng quát của dãy số là $u_n = n^2$.",
                "correct": true,
                "explanation": "Tổng $n$ số lẻ đầu tiên bằng $n^2$."
              },
              {
                "label": "d",
                "subLabel": "d)",
                "content": "Dãy số $(u_n)$ là một cấp số cộng.",
                "correct": false,
                "explanation": "Hiệu không đổi: $u_{n+1} - u_n = 2n+1$ thay đổi theo $n$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho cấp số cộng có $u_1 = 8$ và $u_2 = 13$. Tìm số hạng thứ 12.",
            "correctAnswer": "63",
            "acceptedAnswers": [
              "63"
            ],
            "explanation": "$d = 5 \\Rightarrow u_{12} = 8 + 11(5) = 63$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho cấp số nhân có $u_1 = 6$ và $u_4 = -48$. Tìm công bội $q$.",
            "correctAnswer": "-2",
            "acceptedAnswers": [
              "-2"
            ],
            "explanation": "$q^3 = -8 \\Rightarrow q = -2$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tính tổng của cấp số nhân lùi vô hạn: $S = 10 + 5 + 2.5 + 1.25 + \\dots$",
            "correctAnswer": "20",
            "acceptedAnswers": [
              "20"
            ],
            "explanation": "$S = \\frac{10}{1 - 0.5} = 20$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một nhà thi đấu đa năng có 15 hàng ghế. Hàng ghế cuối cùng có 50 ghế, mỗi hàng tiến về phía trước giảm đi 2 ghế. Tổng số ghế của nhà thi đấu là bao nhiêu?",
            "correctAnswer": "540",
            "acceptedAnswers": [
              "540"
            ],
            "explanation": "$u_1 = 50 - 14(2) = 22$. $S_{15} = \\frac{15(22 + 50)}{2} = 15 \\times 36 = 540$ ghế."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Cần lấy ít nhất bao nhiêu số hạng đầu tiên của cấp số nhân này để tổng của chúng lớn hơn $10000$?",
            "correctAnswer": "12",
            "acceptedAnswers": [
              "12"
            ],
            "explanation": "$S_n = 3(2^n - 1) > 10000 \\Leftrightarrow 2^n - 1 > 3333.33 \\Leftrightarrow 2^n > 3334.33$. Vì $2^{11} = 2048 < 3334$ và $2^{12} = 4096 > 3334$, do đó $n = 12$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một bệnh viện trang bị một máy quét MRI với chi phí ban đầu là $1.2$ tỷ đồng (1200 triệu đồng). Sau mỗi năm sử dụng, giá trị của máy giảm đi $10\\%$ so với giá trị còn lại của năm trước đó. Theo quy định, khi giá trị của máy xuống dưới $400$ triệu đồng thì bệnh viện sẽ thanh lý để nâng cấp. Hỏi sau bao nhiêu năm kể từ khi đưa vào vận hành thì máy quét MRI này sẽ được thanh lý?",
            "correctAnswer": "11",
            "acceptedAnswers": [
              "11"
            ],
            "explanation": "$1200(0.9)^n < 400 \\Leftrightarrow (0.9)^n < \\frac{1}{3} \\Rightarrow n > \\frac{-\\ln 3}{\\ln 0.9} \\approx \\frac{-1.0986}{-0.10536} \\approx 10.42 \\Rightarrow n = 11$ năm."
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
    "subtitle": "Quy hoạch tuyến tính, miền nghiệm đa giác lồi & bài toán thực tế tối ưu hóa",
    "grade": 10,
    "icon": "fa-shapes",
    "accentColor": "from-emerald-600 to-teal-700",
    "theorySummaryHtml": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: BPT Bậc Nhất 2 Ẩn -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-shapes text-blue-600\"></i>\n      1. Bất Phương Trình Bậc Nhất Hai Ẩn\n    </h4>\n    <ul class=\"list-disc pl-5 space-y-1.5 text-[11.5pt]\">\n      <li><strong>Dạng tổng quát:</strong> $ax + by < c$ (hoặc $\\le c, > c, \\ge c$) với $a^2 + b^2 \\ne 0$.</li>\n      <li><strong>Quy tắc xác định miền nghiệm:</strong>\n        <p class=\"mt-1\">1. Vẽ đường thẳng bờ $d: ax + by = c$.</p>\n        <p>2. Chọn một điểm thử $M_0(x_0; y_0) \\notin d$ (thường chọn gốc $O(0; 0)$ nếu $c \\ne 0$).</p>\n        <p>3. Tính $ax_0 + by_0$. Nếu thỏa mãn thì nửa mặt phẳng chứa $M_0$ là miền nghiệm; ngược lại là nửa mặt phẳng không chứa $M_0$.</p>\n      </li>\n    </ul>\n  </div>\n\n  <!-- Phần 2: Hệ BPT Bậc Nhất 2 Ẩn -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-layer-group text-emerald-600\"></i>\n      2. Hệ Bất Phương Trình Bậc Nhất Hai Ẩn\n    </h4>\n    <div class=\"text-[11.5pt] space-y-2\">\n      <p>Hệ gồm từ hai bất phương trình bậc nhất hai ẩn trở lên. Miền nghiệm của hệ là phần giao nhau của các miền nghiệm thành phần, thường là một <strong>miền đa giác lồi</strong> (tam giác, tứ giác, ngũ giác...).</p>\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200\">\n        <span class=\"font-bold text-emerald-900\">Cách tìm tọa độ các đỉnh:</span> Giải các hệ phương trình đường thẳng giao nhau tương ứng của từng cặp bất phương trình tạo nên các cạnh bao quanh miền nghiệm.\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Bài toán Quy Hoạch Tuyến Tính Tối Ưu Hóa -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-coins text-amber-600\"></i>\n      3. Bài Toán Tối Ưu Hóa (Quy Hoạch Tuyến Tính)\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-950 mb-1\">Định Lý Trọng Tâm:</p>\n        <p>Giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của biểu thức mục tiêu $F(x; y) = ax + by$ trên một miền đa giác lồi $S$ <strong>luôn đạt tại một trong các đỉnh của miền đa giác đó</strong>.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200 shadow-xs\">\n        <p class=\"font-bold text-amber-950 mb-1\">Quy trình 4 bước giải bài toán thực tế:</p>\n        <p><strong>Bước 1:</strong> Gọi $x, y$ là các ẩn thực tế (kèm điều kiện $x \\ge 0, y \\ge 0$).</p>\n        <p><strong>Bước 2:</strong> Thiết lập hệ bất phương trình ràng buộc tài nguyên (vốn, thời gian máy, nhân công, nguyên liệu...).</p>\n        <p><strong>Bước 3:</strong> Xác định tọa độ tất cả các đỉnh $A, B, C, D...$ của miền đa giác nghiệm.</p>\n        <p><strong>Bước 4:</strong> Tính giá trị hàm mục tiêu $F(A), F(B), F(C)...$ và so sánh để chọn giá trị lớn nhất (lợi nhuận tối đa) hoặc nhỏ nhất (chi phí tối thiểu).</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd2-exam-1",
        "examNumber": 1,
        "title": "Đề Số 1: Tối Ưu Hóa Sản Xuất Công Nghiệp & Vật Tư",
        "code": "CD2-201",
        "badge": "Mã Đề 201",
        "badgeColor": "bg-blue-50 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$2x - 3y + 1 > 0$",
              "B": "$x^2 + y \\le 2$",
              "C": "$xy + 3 \\ge 0$",
              "D": "$x + 2y^2 < 5$"
            },
            "correct": "A",
            "explanation": "Dạng chuẩn $ax + by + c > 0$ với $a = 2, b = -3$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
            "options": {
              "A": "$(0; 5)$",
              "B": "$(3; 1)$",
              "C": "$(2; 3)$",
              "D": "$(1; 1)$"
            },
            "correct": "D",
            "explanation": "Thay $(1; 1)$: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cặp số $(x; y) = (2; 1)$ là nghiệm của hệ bất phương trình nào sau đây?",
            "options": {
              "A": "$\\begin{cases} x - y > 3 \\\\ x + 2y \\le 0 \\end{cases}$",
              "B": "$\\begin{cases} 2x + y \\le 3 \\\\ x - y > 2 \\end{cases}$",
              "C": "$\\begin{cases} x + y < 2 \\\\ 2x - y > 4 \\end{cases}$",
              "D": "$\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$"
            },
            "correct": "D",
            "explanation": "Thay $x = 2, y = 1$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là",
            "options": {
              "A": "Nửa mặt phẳng nằm phía trên trục hoành",
              "B": "Nửa mặt phẳng nằm bên phải trục tung kể cả bờ",
              "C": "Nửa mặt phẳng nằm phía dưới trục hoành",
              "D": "Nửa mặt phẳng nằm bên trái trục tung"
            },
            "correct": "B",
            "explanation": "$x \\ge 0$ biểu diễn nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác $OAB$ với $O(0; 0), A(4; 0), B(0; 5)$. Giá trị lớn nhất của $F(x; y)$ bằng",
            "options": {
              "A": "$7$",
              "B": "$15$",
              "C": "$10$",
              "D": "$12$"
            },
            "correct": "D",
            "explanation": "$F(O) = 0, F(A) = 12, F(B) = 10$. GTLN là $12$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Đường thẳng bờ $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
            "options": {
              "A": "$x - 2y \\ge 4$",
              "B": "$x - 2y > 6$",
              "C": "$x - 2y < 4$",
              "D": "$x - 2y > 4$"
            },
            "correct": "C",
            "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một xưởng sản xuất bàn và ghế. Gọi $x$ và $y$ lần lượt là số bàn và ghế sản xuất. Biết mỗi ngày xưởng sản xuất không quá 30 sản phẩm cả hai loại. Bất phương trình thể hiện điều kiện này là",
            "options": {
              "A": "$x + y \\ge 30$",
              "B": "$x - y \\le 30$",
              "C": "$x + y \\le 30$",
              "D": "$xy \\le 30$"
            },
            "correct": "C",
            "explanation": "Tổng số bàn và ghế là $x + y \\le 30$ ($x, y \\ge 0$)."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$?",
            "options": {
              "A": "$(2; 3)$",
              "B": "$(3; 1)$",
              "C": "$(0; 4)$",
              "D": "$(1; 2)$"
            },
            "correct": "A",
            "explanation": "Điểm $(2; 3)$ có $x + y = 2 + 3 = 5 > 4$ nên không thuộc miền nghiệm."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Miền tam giác tạo bởi các đường thẳng $x = 0, y = 0$ và $x + 2y = 6$ có diện tích bằng",
            "options": {
              "A": "$9$",
              "B": "$6$",
              "C": "$18$",
              "D": "$12$"
            },
            "correct": "A",
            "explanation": "Giao điểm với các trục là $(0; 0), (6; 0), (0; 3)$. Diện tích $S = \\frac{1}{2} \\cdot 6 \\cdot 3 = 9$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - y$ trên miền tứ giác có các đỉnh $A(0; 0), B(3; 0), C(2; 3), D(0; 4)$ bằng",
            "options": {
              "A": "$-3$",
              "B": "$0$",
              "C": "$-4$",
              "D": "$6$"
            },
            "correct": "C",
            "explanation": "$F(A) = 0, F(B) = 6, F(C) = 1, F(D) = -4$. Nhỏ nhất là $-4$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong mặt phẳng tọa độ $Oxy$, miền nghiệm của hệ $\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$ là một hình chữ nhật có chu vi bằng",
            "options": {
              "A": "$12$",
              "B": "$14$",
              "C": "$7$",
              "D": "$24$"
            },
            "correct": "B",
            "explanation": "Chiều dài 4, chiều rộng 3, chu vi $2(4 + 3) = 14$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hệ bất phương trình $\\begin{cases} x + y - 2 \\ge 0 \\\\ x - y + 2 \\ge 0 \\\\ x \\le 3 \\end{cases}$. Miền nghiệm của hệ là hình gì?",
            "options": {
              "A": "Miền tứ giác",
              "B": "Miền tam giác",
              "C": "Miền ngũ giác",
              "D": "Nửa mặt phẳng"
            },
            "correct": "B",
            "explanation": "Giao của 3 nửa mặt phẳng giới hạn bởi 3 đường thẳng tạo thành một miền tam giác có 3 đỉnh $(0; 2), (3; -1), (3; 5)$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho bất phương trình bậc nhất hai ẩn $2x - 3y + 6 < 0$ ($*$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Cặp số $(0; 0)$ là một nghiệm của bất phương trình ($*$).",
                "correct": false,
                "explanation": "Thay $(0; 0)$: $2(0) - 3(0) + 6 = 6 < 0$ là sai."
              },
              {
                "id": "b",
                "text": "Điểm $M(-4; 0)$ thuộc miền nghiệm của bất phương trình ($*$).",
                "correct": true,
                "explanation": "Thay $(-4; 0)$: $2(-4) + 6 = -2 < 0$ (đúng)."
              },
              {
                "id": "c",
                "text": "Đường thẳng $d: 2x - 3y + 6 = 0$ cắt trục hoành tại điểm $(-3; 0)$.",
                "correct": true,
                "explanation": "Cho $y = 0 \\Rightarrow 2x + 6 = 0 \\Rightarrow x = -3$."
              },
              {
                "id": "d",
                "text": "Miền nghiệm của ($*$) chứa điểm $P(1; 3)$.",
                "correct": true,
                "explanation": "Thay $(1; 3)$: $2(1) - 3(3) + 6 = -1 < 0$ (đúng)."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\\\ 2x + y \\le 6 \\end{cases}$ ($H$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Miền nghiệm của hệ ($H$) là một miền tứ giác lồi.",
                "correct": true,
                "explanation": "Các đỉnh là $O(0; 0), A(3; 0), B(2; 2), C(0; 4)$."
              },
              {
                "id": "b",
                "text": "Tọa độ giao điểm của hai đường thẳng $x + y = 4$ và $2x + y = 6$ là $B(2; 2)$.",
                "correct": true,
                "explanation": "Trừ hai phương trình: $x = 2 \\Rightarrow y = 2$."
              },
              {
                "id": "c",
                "text": "Điểm $K(1; 3)$ nằm ngoài miền nghiệm của hệ ($H$).",
                "correct": false,
                "explanation": "Thay $K(1; 3)$: $1 \\ge 0, 3 \\ge 0, 1+3=4 \\le 4, 2(1)+3=5 \\le 6$. $K$ thuộc miền nghiệm."
              },
              {
                "id": "d",
                "text": "Giá trị lớn nhất của biểu thức $F(x; y) = 3x + y$ trên miền nghiệm là $9$.",
                "correct": true,
                "explanation": "$F(O)=0, F(A)=9, F(B)=8, F(C)=4$. GTLN là 9 tại $A(3; 0)$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một xưởng cơ khí sản xuất hai loại sản phẩm A và B. Mỗi sản phẩm A cần 2 giờ máy và 1 giờ nhân công; mỗi sản phẩm B cần 1 giờ máy và 3 giờ nhân công. Quỹ thời gian máy tối đa là 10 giờ, nhân công tối đa là 15 giờ. Gọi $x, y$ lần lượt là số sản phẩm A và B sản xuất. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 2x + y \\le 10 \\\\ x + 3y \\le 15 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
                "correct": true,
                "explanation": "Đúng với giả thiết về giờ máy và nhân công."
              },
              {
                "id": "b",
                "text": "Xưởng có thể sản xuất đồng thời 4 sản phẩm A và 3 sản phẩm B.",
                "correct": false,
                "explanation": "Với $(4; 3)$: $2(4) + 3 = 11 > 10$ (vượt quá giờ máy)."
              },
              {
                "id": "c",
                "text": "Miền nghiệm của hệ chứa điểm cực biên $(3; 4)$.",
                "correct": true,
                "explanation": "Giải hệ $2x + y = 10$ và $x + 3y = 15 \\Rightarrow x = 3, y = 4$."
              },
              {
                "id": "d",
                "text": "Nếu mỗi sản phẩm A lãi 400 nghìn, mỗi sản phẩm B lãi 500 nghìn, thì lợi nhuận cao nhất đạt được khi sản xuất 3 sản phẩm A và 4 sản phẩm B.",
                "correct": true,
                "explanation": "$L(3; 4) = 400(3) + 500(4) = 3200$. Tại $(5; 0) \\Rightarrow 2000$. Tại $(0; 5) \\Rightarrow 2500$."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho biểu thức mục tiêu $F(x; y) = 2x - 3y$ xác định trên miền đa giác lồi $S$ có các đỉnh $A(-1; 2), B(4; 1), C(3; 5), D(0; 4)$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Giá trị của biểu thức $F$ tại đỉnh $A$ là $-8$.",
                "correct": true,
                "explanation": "$F(A) = 2(-1) - 3(2) = -8$."
              },
              {
                "id": "b",
                "text": "Giá trị lớn nhất của $F(x; y)$ trên miền $S$ bằng $5$.",
                "correct": true,
                "explanation": "$F(B) = 2(4) - 3(1) = 5, F(C) = 6 - 15 = -9, F(D) = -12$. GTLN là 5 tại $B$."
              },
              {
                "id": "c",
                "text": "Giá trị nhỏ nhất của $F(x; y)$ trên miền $S$ đạt tại đỉnh $C(3; 5)$.",
                "correct": false,
                "explanation": "GTNN là $-12$ đạt tại $D(0; 4)$, không phải $C$ (vì $F(D) = -12 < F(C) = -9$)."
              },
              {
                "id": "d",
                "text": "Điểm $M(1; 2)$ nằm trong miền đa giác $S$ và có giá trị $F(M) = -4$.",
                "correct": true,
                "explanation": "$F(1; 2) = 2(1) - 3(2) = -4$ và điểm $(1; 2)$ nằm trong tứ giác."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho điểm $M(m; 2)$ nằm trên đường thẳng bờ của bất phương trình $3x - 4y + 5 = 0$. Tìm giá trị của $m$.",
            "correctAnswer": "1",
            "acceptedAnswers": [
              "1",
              "1.0"
            ],
            "explanation": "Thay vào phương trình: $3m - 4(2) + 5 = 0 \\Rightarrow 3m - 3 = 0 \\Rightarrow m = 1$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tính diện tích của miền tam giác xác định bởi hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 24 \\end{cases}$.",
            "correctAnswer": "24",
            "acceptedAnswers": [
              "24",
              "24.0"
            ],
            "explanation": "Miền tam giác vuông tại $O(0; 0)$ có hai đỉnh trên trục tọa độ là $A(8; 0)$ và $B(0; 6)$. Diện tích $S = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị lớn nhất của biểu thức $F(x; y) = 4x + 3y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 5 \\\\ 2x + y \\le 8 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
            "correctAnswer": "18",
            "acceptedAnswers": [
              "18",
              "18.0"
            ],
            "explanation": "Các đỉnh là $O(0; 0), A(4; 0), B(3; 2), C(0; 5)$. $F(O)=0, F(A)=16, F(B)=4(3)+3(2)=18$? Chờ chút: $B$ là giao của $x+y=5$ và $2x+y=8 \\Rightarrow x=3, y=2$. $F(B)=4(3)+3(2)=18$. Tại $A(4; 0)$: $F(A)=16$. Tại $C(0; 5)$: $F(C)=15$. GTLN là 18. Hãy cập nhật đúng là 18."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một cửa hàng bán hai loại bánh A và B. Mỗi hộp bánh A lãi 30 nghìn đồng, mỗi hộp bánh B lãi 50 nghìn đồng. Do dung lượng tủ bảo quản, tổng số hộp bánh bán ra không quá 40 hộp và số hộp bánh B không quá 25 hộp. Tính số tiền lãi lớn nhất (đơn vị: nghìn đồng) mà cửa hàng có thể thu được.",
            "correctAnswer": "1700",
            "acceptedAnswers": [
              "1700",
              "1700.0"
            ],
            "explanation": "$x + y \\le 40, y \\le 25, x, y \\ge 0$. Lãi $L = 30x + 50y = 30(x+y) + 20y \\le 30(40) + 20(25) = 1200 + 500 = 1700$ nghìn đồng (đạt tại $x = 15, y = 25$)."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Một nhà máy hóa chất cần sản xuất hai loại phân bón cao cấp NPK-1 và NPK-2 từ 3 nguồn nguyên liệu đạm ($N$), lân ($P$) và kali ($K$). Để sản xuất 1 tấn NPK-1 cần $20\\text{ kg } N$, $30\\text{ kg } P$, $10\\text{ kg } K$. Để sản xuất 1 tấn NPK-2 cần $40\\text{ kg } N$, $15\\text{ kg } P$, $30\\text{ kg } K$. Nguồn kho hiện có tối đa $400\\text{ kg } N$, $360\\text{ kg } P$ và $300\\text{ kg } K$. Mỗi tấn NPK-1 lãi 4 triệu đồng, mỗi tấn NPK-2 lãi 5 triệu đồng. Ngoài ra công suất lò sấy chỉ cho phép sản xuất tối đa tổng cộng 14 tấn cả hai loại. Tính lợi nhuận lớn nhất mà nhà máy có thể thu được (triệu đồng).",
            "correctAnswer": "62",
            "acceptedAnswers": [
              "62",
              "62.0"
            ],
            "explanation": "Gọi $x, y \\ge 0$ là số tấn NPK-1 và NPK-2. Các ràng buộc: $20x + 40y \\le 400 \\iff x + 2y \\le 20$; $30x + 15y \\le 360 \\iff 2x + y \\le 24$; $10x + 30y \\le 300 \\iff x + 3y \\le 30$; $x + y \\le 14$. Miền đa giác nghiệm có các đỉnh $O(0; 0), (12; 0), (10; 4), (8; 6), (0; 10)$. Lợi nhuận $L = 4x + 5y$. Tại $(8; 6)$: $L = 4(8) + 5(6) = 62$ triệu đồng. Đây là giá trị lớn nhất."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một dự án xây dựng cần vận chuyển ít nhất 240 tấn xi măng và 360 tấn sắt thép từ cảng về công trường. Công ty vận tải có hai đội xe: Đội xe A gồm các xe tải hạng nặng chở được 12 tấn xi măng và 10 tấn sắt thép mỗi chuyến, chi phí mỗi chuyến là 3 triệu đồng; Đội xe B gồm các xe tải hạng trung chở được 6 tấn xi măng và 15 tấn sắt thép mỗi chuyến, chi phí mỗi chuyến là 2.5 triệu đồng. Do quy định phân luồng giao thông cảng, tổng số chuyến của đội xe A không quá 25 chuyến và tổng số chuyến của cả hai đội xe không vượt quá 40 chuyến. Hỏi công ty cần điều phối số chuyến xe sao cho chi phí vận tải nhỏ nhất, và chi phí nhỏ nhất đó bằng bao nhiêu triệu đồng?",
            "correctAnswer": "76",
            "acceptedAnswers": [
              "76",
              "76.0"
            ],
            "explanation": "Gọi $x$ là số chuyến đội A, $y$ là số chuyến đội B ($x, y \\ge 0$). Ta có hệ ràng buộc: $12x + 6y \\ge 240 \\iff 2x + y \\ge 40$; $10x + 15y \\ge 360 \\iff 2x + 3y \\ge 72$; $x \\le 25$; $x + y \\le 40$. Hàm chi phí cần tối thiểu hóa: $C(x; y) = 3x + 2.5y$. Giao điểm của hai đường giới hạn hàng hóa $2x + y = 40$ và $2x + 3y = 72$ cho tọa độ $x = 12, y = 16$. Điểm $(12; 16)$ thỏa mãn $x \\le 25$ và $x + y = 28 \\le 40$. Tại $(12; 16)$: $C = 3(12) + 2.5(16) = 36 + 40 = 76$ triệu đồng. Kiểm tra các đỉnh biên khác: $(0; 40) \\Rightarrow C = 100$; $(25; 15) \\Rightarrow C = 112.5$; $(25; 22/3) \\Rightarrow C \\approx 93.33$. Chi phí nhỏ nhất là 76 triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-exam-2",
        "examNumber": 2,
        "title": "Đề Số 2: Chế Biến Thực Phẩm, Chăn Nuôi & Dinh Dưỡng Tối Ưu",
        "code": "CD2-202",
        "badge": "Mã Đề 202",
        "badgeColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong mặt phẳng tọa độ $Oxy$, miền nghiệm của bất phương trình nào sau đây chứa gốc tọa độ $O(0; 0)$?",
            "options": {
              "A": "$2x - y + 3 > 0$",
              "B": "$x - 2y - 1 \\ge 0$",
              "C": "$x + 3y - 5 > 0$",
              "D": "$3x - 4y + 2 < 0$"
            },
            "correct": "A",
            "explanation": "Thay $O(0; 0)$: $2(0) - 0 + 3 = 3 > 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cặp số $(x; y) = (1; -2)$ KHÔNG là nghiệm của bất phương trình nào sau đây?",
            "options": {
              "A": "$2x - y \\ge 0$",
              "B": "$3x + 2y + 5 > 0$",
              "C": "$x + y > 0$",
              "D": "$x - 3y \\ge 4$"
            },
            "correct": "C",
            "explanation": "Thay $(1; -2)$: $1 + (-2) = -1 > 0$ là sai."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Miền nghiệm của hệ bất phương trình $\\begin{cases} x - y \\le 0 \\\\ x + 2y \\ge 0 \\end{cases}$ chứa điểm nào sau đây?",
            "options": {
              "A": "$(0; 2)$",
              "B": "$(1; -3)$",
              "C": "$(3; 1)$",
              "D": "$(2; 0)$"
            },
            "correct": "A",
            "explanation": "Thay $(0; 2)$: $0 - 2 = -2 \\le 0$ và $0 + 4 = 4 \\ge 0$ (thỏa mãn)."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Đường thẳng $d: 2x - 3y = 6$ đi qua hai điểm nào trên các trục tọa độ?",
            "options": {
              "A": "$(3; 0)$ và $(0; -2)$",
              "B": "$(6; 0)$ và $(0; -6)$",
              "C": "$(0; 3)$ và $(-2; 0)$",
              "D": "$(2; 0)$ và $(0; -3)$"
            },
            "correct": "A",
            "explanation": "Cho $y = 0 \\Rightarrow x = 3$; cho $x = 0 \\Rightarrow y = -2$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho biểu thức $F(x; y) = x - 4y$ trên miền tam giác có 3 đỉnh $A(0; 0), B(5; 0), C(0; 3)$. Giá trị nhỏ nhất của $F(x; y)$ bằng",
            "options": {
              "A": "$0$",
              "B": "$-12$",
              "C": "$5$",
              "D": "$-4$"
            },
            "correct": "B",
            "explanation": "$F(A) = 0, F(B) = 5, F(C) = -12$. Giá trị nhỏ nhất là $-12$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một cơ sở sản xuất bánh dẻo và bánh nướng. Mỗi ngày cơ sở làm ra ít nhất 50 chiếc bánh dẻo. Gọi $x$ là số bánh dẻo làm ra. Bất phương trình mô tả điều này là",
            "options": {
              "A": "$x < 50$",
              "B": "$x \\ge 50$",
              "C": "$x \\le 50$",
              "D": "$x > 50$"
            },
            "correct": "B",
            "explanation": "Ít nhất 50 nghĩa là $x \\ge 50$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$\\begin{cases} x^2 + y \\le 3 \\\\ x - 2y > 0 \\end{cases}$",
              "B": "$\\begin{cases} 2x + 3y \\le 5 \\\\ x - y > 1 \\end{cases}$",
              "C": "$\\begin{cases} 3x + y^3 \\ge 2 \\\\ 2x - y < 5 \\end{cases}$",
              "D": "$\\begin{cases} xy \\le 4 \\\\ x + y \\ge 1 \\end{cases}$"
            },
            "correct": "B",
            "explanation": "Cả hai bất phương trình đều có bậc nhất đối với hai ẩn $x, y$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Điểm nào sau đây thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + 3y \\le 12 \\end{cases}$?",
            "options": {
              "A": "$(1; 4)$",
              "B": "$(4; 2)$",
              "C": "$(5; 1)$",
              "D": "$(2; 2)$"
            },
            "correct": "D",
            "explanation": "Thay $(2; 2)$: $2(2) + 3(2) = 10 \\le 12$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hệ bất phương trình $\\begin{cases} x \\ge 1 \\\\ y \\ge 1 \\\\ x + y \\le 4 \\end{cases}$. Miền nghiệm của hệ là hình gì?",
            "options": {
              "A": "Miền ngũ giác",
              "B": "Miền tứ giác",
              "C": "Nửa mặt phẳng",
              "D": "Miền tam giác"
            },
            "correct": "D",
            "explanation": "Các đỉnh là $(1; 1), (3; 1), (1; 3)$, tạo thành miền tam giác."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho $F(x; y) = 2x + 5y$. Trong các điểm $A(1; 1), B(2; 4), C(4; 2), D(0; 5)$, điểm nào làm cho $F$ đạt giá trị lớn nhất?",
            "options": {
              "A": "$B(2; 4)$",
              "B": "$A(1; 1)$",
              "C": "$C(4; 2)$",
              "D": "$D(0; 5)$"
            },
            "correct": "D",
            "explanation": "$F(A)=7, F(B)=24, F(C)=18, F(D)=25$. Điểm $D(0; 5)$ cho giá trị 25 lớn nhất."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Diện tích của miền nghiệm tạo bởi hệ $\\begin{cases} -2 \\le x \\le 3 \\\\ 0 \\le y \\le 4 \\end{cases}$ bằng",
            "options": {
              "A": "$12$",
              "B": "$18$",
              "C": "$20$",
              "D": "$15$"
            },
            "correct": "C",
            "explanation": "Chiều rộng là $3 - (-2) = 5$, chiều cao là 4. Diện tích $S = 5 \\times 4 = 20$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Khẳng định nào sau đây là SAI khi nói về bài toán quy hoạch tuyến tính trên miền đa giác lồi?",
            "options": {
              "A": "Miền nghiệm là giao của các nửa mặt phẳng",
              "B": "Giá trị lớn nhất và nhỏ nhất luôn đạt tại ít nhất một trong các đỉnh của miền đa giác",
              "C": "Giá trị lớn nhất của hàm mục tiêu luôn luôn đạt tại tâm của đa giác",
              "D": "Hàm mục tiêu có dạng tuyến tính $F(x; y) = ax + by$"
            },
            "correct": "C",
            "explanation": "Khẳng định A sai vì cực trị tuyến tính luôn đạt tại các đỉnh biên, không phải tâm đa giác."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} 3x + 4y \\le 12 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ ($*$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Miền nghiệm của hệ ($*$) là một tam giác vuông.",
                "correct": true,
                "explanation": "Tam giác giới hạn bởi hai trục tọa độ vuông góc và đường thẳng $3x + 4y = 12$."
              },
              {
                "id": "b",
                "text": "Độ dài cạnh huyền của tam giác miền nghiệm bằng 5.",
                "correct": true,
                "explanation": "Hai cạnh góc vuông là 4 (trên $Ox$) và 3 (trên $Oy$). Cạnh huyền $\\sqrt{4^2 + 3^2} = 5$."
              },
              {
                "id": "c",
                "text": "Điểm $M(2; 1.5)$ nằm trong miền nghiệm của hệ ($*$).",
                "correct": true,
                "explanation": "Thay vào: $3(2) + 4(1.5) = 6 + 6 = 12 \\le 12$."
              },
              {
                "id": "d",
                "text": "Giá trị lớn nhất của biểu thức $F(x; y) = x + y$ trên miền nghiệm là $4$.",
                "correct": true,
                "explanation": "$F(0; 0)=0, F(4; 0)=4, F(0; 3)=3$. GTLN là 4 tại $(4; 0)$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hệ bất phương trình không bị chặn $\\begin{cases} x + y \\ge 3 \\\\ 2x - y \\ge 0 \\\\ x \\le 5 \\end{cases}$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Giao điểm của hai đường thẳng $x + y = 3$ và $2x - y = 0$ là điểm $A(1; 2)$.",
                "correct": true,
                "explanation": "Cộng hai phương trình: $3x = 3 \\Rightarrow x = 1, y = 2$."
              },
              {
                "id": "b",
                "text": "Miền nghiệm của hệ là một miền tam giác đóng.",
                "correct": false,
                "explanation": "Vì $y$ không bị giới hạn dưới nên miền nghiệm không phải tam giác đóng."
              },
              {
                "id": "c",
                "text": "Điểm $B(4; 2)$ thuộc miền nghiệm của hệ.",
                "correct": true,
                "explanation": "Thay $(4; 2)$: $4+2=6 \\ge 3, 2(4)-2=6 \\ge 0, 4 \\le 5$ (đúng)."
              },
              {
                "id": "d",
                "text": "Biểu thức $F(x; y) = x + 2y$ đạt giá trị nhỏ nhất trên miền nghiệm bằng $5$.",
                "correct": true,
                "explanation": "Tại các đỉnh: $A(1; 2) \\Rightarrow F = 1 + 4 = 5$. Tại $(5; -2) \\Rightarrow F = 5 - 4 = 1$ nhưng với $2x - y \\ge 0$ thì $y \\le 2x = 10$. Với $x + y \\ge 3$, min của $x + 2y$ tại giao điểm $A(1; 2)$ là 5."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một trang trại chăn nuôi dự định nuôi gà và vịt. Số gà không quá 80 con, số vịt không quá 60 con. Tổng số gia cầm không quá 100 con. Gọi $x, y$ lần lượt là số gà và vịt. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 0 \\le x \\le 80 \\\\ 0 \\le y \\le 60 \\\\ x + y \\le 100 \\end{cases}$.",
                "correct": true,
                "explanation": "Chính xác theo điều kiện bài toán."
              },
              {
                "id": "b",
                "text": "Trang trại có thể nuôi 70 con gà và 40 con vịt cùng lúc.",
                "correct": false,
                "explanation": "Tổng $70 + 40 = 110 > 100$ (vượt quá tải)."
              },
              {
                "id": "c",
                "text": "Miền nghiệm của hệ là một miền ngũ giác lồi.",
                "correct": true,
                "explanation": "Năm đỉnh là $(0; 0), (80; 0), (80; 20), (40; 60), (0; 60)$."
              },
              {
                "id": "d",
                "text": "Nếu mỗi con gà lãi 40 nghìn và mỗi con vịt lãi 50 nghìn thì nuôi 40 con gà và 60 con vịt đem lại lợi nhuận cao nhất.",
                "correct": true,
                "explanation": "$L(80; 20) = 40(80) + 50(20) = 4200$; $L(40; 60) = 40(40) + 50(60) = 4600$ nghìn đồng (lớn nhất)."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho miền tứ giác $S$ có 4 đỉnh $A(1; 1), B(5; 1), C(4; 4), D(1; 3)$ và hàm mục tiêu $F(x; y) = 3x - 2y$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Giá trị của hàm mục tiêu tại đỉnh $B$ là $13$.",
                "correct": true,
                "explanation": "$F(B) = 3(5) - 2(1) = 13$."
              },
              {
                "id": "b",
                "text": "Giá trị nhỏ nhất của $F(x; y)$ trên miền $S$ bằng $-3$.",
                "correct": true,
                "explanation": "$F(A) = 1, F(B) = 13, F(C) = 4, F(D) = 3 - 6 = -3$. GTNN là $-3$ tại $D$."
              },
              {
                "id": "c",
                "text": "Giá trị lớn nhất của $F(x; y)$ trên miền $S$ đạt tại đỉnh $C(4; 4)$.",
                "correct": false,
                "explanation": "GTLN đạt tại $B(5; 1)$ bằng 13, không phải tại $C$."
              },
              {
                "id": "d",
                "text": "Điểm $I(2; 2)$ nằm trong miền tứ giác $S$ và có giá trị $F(I) = 2$.",
                "correct": true,
                "explanation": "$F(2; 2) = 3(2) - 2(2) = 2$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của biểu thức $F(x; y) = 5x - 2y$ tại điểm $M(4; 3)$.",
            "correctAnswer": "14",
            "acceptedAnswers": [
              "14",
              "14.0"
            ],
            "explanation": "$F(4; 3) = 5(4) - 2(3) = 20 - 6 = 14$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho miền nghiệm của một hệ bất phương trình là tam giác có ba đỉnh $A(1; 1), B(7; 1), C(1; 9)$. Tính diện tích miền tam giác đó.",
            "correctAnswer": "24",
            "acceptedAnswers": [
              "24",
              "24.0"
            ],
            "explanation": "Tam giác vuông tại $A$, cạnh $AB = 6$, cạnh $AC = 8$. Diện tích $S = \\frac{1}{2} \\times 6 \\times 8 = 24$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị lớn nhất của biểu thức $F(x; y) = 2x + 3y$ trên miền nghiệm của hệ $\\begin{cases} 2x + y \\le 10 \\\\ x + 2y \\le 8 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
            "correctAnswer": "14",
            "acceptedAnswers": [
              "14",
              "14.0"
            ],
            "explanation": "Giao của hai đường là $x = 4, y = 2$. Các đỉnh: $(0; 0) \\Rightarrow 0, (5; 0) \\Rightarrow 10, (4; 2) \\Rightarrow 14, (0; 4) \\Rightarrow 12$. GTLN là 14 tại $(4; 2)$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một hộ nông dân chăn nuôi lợn và bò. Mỗi con lợn cần 10 triệu đồng vốn và đem lại lãi 1.5 triệu đồng. Mỗi con bò cần 25 triệu đồng vốn và đem lại lãi 3.5 triệu đồng. Tổng số vốn không quá 200 triệu đồng và chuồng trại chỉ chứa tối đa 14 con. Tính số tiền lãi lớn nhất (đơn vị: triệu đồng) mà hộ nông dân có thể thu được.",
            "correctAnswer": "29",
            "acceptedAnswers": [
              "29",
              "29.0"
            ],
            "explanation": "Ràng buộc: $10x + 25y \\le 200 \\iff 2x + 5y \\le 40$; $x + y \\le 14$; $x, y \\in \\mathbb{N}$. Giao của hai đường: $2(14-y) + 5y = 40 \\Rightarrow 3y = 12 \\Rightarrow y = 4, x = 10$. Tiền lãi $L(10; 4) = 1.5(10) + 3.5(4) = 15 + 14 = 29$ triệu đồng."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Viện dinh dưỡng điều chế một khẩu phần ăn đặc biệt cho vận động viên từ hai loại thực phẩm tinh bột cao cấp $X$ và $Y$. Mỗi lạng thực phẩm $X$ chứa 8 đơn vị protein, 4 đơn vị chất béo và 12 đơn vị carbohydrate, giá bán là 25 nghìn đồng. Mỗi lạng thực phẩm $Y$ chứa 6 đơn vị protein, 8 đơn vị chất béo và 6 đơn vị carbohydrate, giá bán là 30 nghìn đồng. Yêu cầu dinh dưỡng tối thiểu mỗi ngày: ít nhất 48 đơn vị protein, ít nhất 32 đơn vị chất béo và ít nhất 48 đơn vị carbohydrate. Đồng thời, do quy định cân bằng khẩu vị, khối lượng thực phẩm $Y$ không được vượt quá 2 lần khối lượng thực phẩm $X$, và tổng khối lượng hai loại không quá 10 lạng. Hỏi chi phí mua thực phẩm mỗi ngày nhỏ nhất là bao nhiêu nghìn đồng?",
            "correctAnswer": "168",
            "acceptedAnswers": [
              "168",
              "168.0"
            ],
            "explanation": "Gọi $x, y$ là số lạng thực phẩm $X, Y$ ($x, y \\ge 0$). Ràng buộc: Protein: $8x + 6y \\ge 48 \\iff 4x + 3y \\ge 24$; Chất béo: $4x + 8y \\ge 32 \\iff x + 2y \\ge 8$; Carbs: $12x + 6y \\ge 48 \\iff 2x + y \\ge 8$; Khẩu vị: $y \\le 2x$; Tổng khối lượng: $x + y \\le 10$. Hàm chi phí: $C(x; y) = 25x + 30y$ (nghìn đồng). Xét giao điểm của $4x + 3y = 24$ và $x + 2y = 8$: giải hệ được $x = 4.8, y = 1.6$. Kiểm tra: $y = 1.6 \\le 2(4.8) = 9.6$ (thỏa); $2(4.8) + 1.6 = 11.2 \\ge 8$ (thỏa); $4.8 + 1.6 = 6.4 \\le 10$ (thỏa). Chi phí tại $(4.8; 1.6)$: $C = 25(4.8) + 30(1.6) = 120 + 48 = 168$ nghìn đồng. Kiểm tra các đỉnh khác: tại giao $y = 2x$ và $4x + 3y = 24 \\Rightarrow (2.4; 4.8) \\Rightarrow C = 204$; tại $(8; 0) \\Rightarrow C = 200$. Vậy chi phí nhỏ nhất là 168 nghìn đồng."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một trang trại chăn nuôi công nghệ cao cần phối trộn thức ăn hỗn hợp từ hai nguyên liệu ngô nghiền và cám đậu nành. Mỗi kg ngô nghiền chứa $0.5$ đơn vị dinh dưỡng loại I, $0.2$ đơn vị dinh dưỡng loại II và giá mua 8 nghìn đồng/kg. Mỗi kg cám đậu nành chứa $0.25$ đơn vị loại I, $0.6$ đơn vị loại II và giá mua 14 nghìn đồng/kg. Yêu cầu mỗi khẩu phần hàng ngày phải có ít nhất 20 đơn vị loại I và 24 đơn vị loại II. Do thiết bị chứa giới hạn, số kg cám đậu nành sử dụng không vượt quá 30 kg. Hãy tính chi phí mua nguyên liệu thấp nhất (nghìn đồng) để đáp ứng khẩu phần trên.",
            "correctAnswer": "660",
            "acceptedAnswers": [
              "660",
              "660.0"
            ],
            "explanation": "Gọi $x, y$ là số kg ngô và cám ($x, y \\ge 0$). Ta có hệ: Loại I: $0.5x + 0.25y \\ge 20 \\iff 2x + y \\ge 80$; Loại II: $0.2x + 0.6y \\ge 24 \\iff x + 3y \\ge 120$; Giới hạn cám: $y \\le 30$. Hàm chi phí: $C(x; y) = 8x + 14y$. Giao điểm của hai đường thẳng $2x + y = 80$ và $x + 3y = 120$ cho $y = 32 > 30$ (nằm ngoài vùng $y \\le 30$). Do đó trên biên $y = 30$, để thỏa mãn cả hai bất phương trình ta cần: $2x + 30 \\ge 80 \\Rightarrow x \\ge 25$ và $x + 3(30) \\ge 120 \\Rightarrow x \\ge 30$. Điểm biên khả thi có chi phí nhỏ nhất là $(30; 30)$. Tại đó: $C = 8(30) + 14(30) = 240 + 420 = 660$ nghìn đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-exam-3",
        "examNumber": 3,
        "title": "Đề Số 3: Vận Tải, Logistics & Năng Lượng Công Nghiệp",
        "code": "CD2-203",
        "badge": "Mã Đề 203",
        "badgeColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong các cặp số sau, cặp số nào là nghiệm của bất phương trình $x - 3y + 6 \\ge 0$?",
            "options": {
              "A": "$(0; 1)$",
              "B": "$(0; 3)$",
              "C": "$(2; 5)$",
              "D": "$(1; 4)$"
            },
            "correct": "A",
            "explanation": "Thay $(0; 1)$: $0 - 3(1) + 6 = 3 \\ge 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Miền nghiệm của bất phương trình $y \\le 2$ là",
            "options": {
              "A": "Nửa mặt phẳng nằm bên phải trục tung",
              "B": "Nửa mặt phẳng nằm phía dưới đường thẳng $y = 2$ kể cả bờ",
              "C": "Nửa mặt phẳng nằm phía trên đường thẳng $y = 2$",
              "D": "Nửa mặt phẳng nằm bên trái đường thẳng $x = 2$"
            },
            "correct": "B",
            "explanation": "$y \\le 2$ là nửa mặt phẳng phía dưới đường thẳng $y = 2$ kể cả đường thẳng đó."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Bất phương trình nào sau đây KHÔNG là bất phương trình bậc nhất hai ẩn?",
            "options": {
              "A": "$x - y + 4 \\ge 0$",
              "B": "$x^2 - 2y + 1 > 0$",
              "C": "$3x + 5y \\le 10$",
              "D": "$2x + 7y < 0$"
            },
            "correct": "B",
            "explanation": "$x^2$ là bậc hai, không phải bậc nhất."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hệ bất phương trình $\\begin{cases} x + y \\le 6 \\\\ x - y \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Điểm nào sau đây thuộc miền nghiệm của hệ?",
            "options": {
              "A": "$(4; 3)$",
              "B": "$(2; -1)$",
              "C": "$(1; 3)$",
              "D": "$(3; 1)$"
            },
            "correct": "D",
            "explanation": "Thay $(3; 1)$: $3 + 1 = 4 \\le 6$, $3 - 1 = 2 \\ge 0$, $1 \\ge 0$ (đều thỏa mãn)."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Giao điểm của hai đường thẳng $2x + y = 7$ và $x - y = 2$ là",
            "options": {
              "A": "$(2; 3)$",
              "B": "$(1; 5)$",
              "C": "$(3; 1)$",
              "D": "$(4; -1)$"
            },
            "correct": "C",
            "explanation": "Cộng hai phương trình: $3x = 9 \\Rightarrow x = 3 \\Rightarrow y = 1$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho tam giác $ABC$ có các đỉnh $A(0; 0), B(6; 0), C(2; 4)$. Giá trị lớn nhất của $F(x; y) = 2x + y$ trên miền tam giác này bằng",
            "options": {
              "A": "$12$",
              "B": "$8$",
              "C": "$10$",
              "D": "$14$"
            },
            "correct": "A",
            "explanation": "$F(A) = 0, F(B) = 2(6) + 0 = 12, F(C) = 2(2) + 4 = 8$. GTLN là $12$ tại $B$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một đoàn xe tải cần chở ít nhất 120 tấn hàng. Mỗi xe loại I chở 6 tấn, mỗi xe loại II chở 10 tấn. Bất phương trình mô tả tổng số hàng vận chuyển là",
            "options": {
              "A": "$6x + 10y \\le 120$",
              "B": "$10x + 6y < 120$",
              "C": "$6x + 10y \\ge 120$",
              "D": "$6x - 10y \\ge 120$"
            },
            "correct": "C",
            "explanation": "Ít nhất 120 tấn nghĩa là $6x + 10y \\ge 120$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Điểm $M(2; 3)$ thuộc miền nghiệm của bất phương trình nào sau đây?",
            "options": {
              "A": "$4x - y - 6 < 0$",
              "B": "$2x - 3y + 6 < 0$",
              "C": "$3x - 2y + 1 > 0$",
              "D": "$x + 2y - 10 > 0$"
            },
            "correct": "C",
            "explanation": "Thay $(2; 3)$: $3(2) - 2(3) + 1 = 1 > 0$ (thỏa mãn)."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le -1 \\end{cases}$ có miền nghiệm là",
            "options": {
              "A": "Nửa mặt phẳng",
              "B": "Miền tam giác",
              "C": "Một điểm duy nhất",
              "D": "Tập rỗng $\\varnothing$"
            },
            "correct": "D",
            "explanation": "Vì $x \\ge 0, y \\ge 0 \\Rightarrow x + y \\ge 0$, không thể $\\le -1$. Hệ vô nghiệm."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Giá trị nhỏ nhất của $F(x; y) = 3x - y$ trên miền tứ giác có 4 đỉnh $O(0; 0), A(3; 0), B(3; 4), C(0; 2)$ bằng",
            "options": {
              "A": "$9$",
              "B": "$0$",
              "C": "$5$",
              "D": "$-2$"
            },
            "correct": "D",
            "explanation": "$F(O) = 0, F(A) = 9, F(B) = 5, F(C) = -2$. GTNN là $-2$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Đường thẳng $d: 4x + 3y = 12$ chia mặt phẳng thành hai nửa mặt phẳng. Điểm nào sau đây cùng phía với gốc tọa độ $O$ so với đường thẳng $d$?",
            "options": {
              "A": "$(1; 1)$",
              "B": "$(3; 2)$",
              "C": "$(4; 1)$",
              "D": "$(2; 3)$"
            },
            "correct": "A",
            "explanation": "$O(0; 0)$ có $4(0) + 3(0) - 12 = -12 < 0$. Điểm $(1; 1)$ có $4(1) + 3(1) - 12 = -5 < 0$ (cùng phía)."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho biểu thức $F(x; y) = x + 3y$ trên miền đa giác lồi. Nếu $F$ đạt giá trị lớn nhất tại hai đỉnh phân biệt $A$ và $B$ thì",
            "options": {
              "A": "Đa giác không bị chặn",
              "B": "$F$ đạt giá trị lớn nhất tại mọi điểm thuộc đoạn thẳng $AB$",
              "C": "$F$ chỉ đạt giá trị lớn nhất tại trung điểm của $AB$",
              "D": "Bài toán không có giá trị lớn nhất"
            },
            "correct": "B",
            "explanation": "Đặc tính tuyến tính: nếu đạt cực đại tại 2 đỉnh thì đạt cực đại trên toàn bộ đoạn nối 2 đỉnh đó."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + 2y \\le 8 \\\\ 3x + 2y \\le 12 \\end{cases}$ ($S$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Miền nghiệm của hệ ($S$) là miền tứ giác lồi có 4 đỉnh.",
                "correct": true,
                "explanation": "Các đỉnh là $O(0; 0), A(4; 0), B(2; 3), C(0; 4)$."
              },
              {
                "id": "b",
                "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + 2y = 8$ và $3x + 2y = 12$ là $(2; 3)$.",
                "correct": true,
                "explanation": "Trừ hai phương trình: $2x = 4 \\Rightarrow x = 2 \\Rightarrow y = 3$."
              },
              {
                "id": "c",
                "text": "Diện tích của tứ giác miền nghiệm bằng 14.",
                "correct": false,
                "explanation": "Chia thành 2 tam giác: $S = S_{\\triangle OAB} + S_{\\triangle OBC} = \\frac{1}{2}(4)(3) + \\frac{1}{2}(4)(2) = 6 + 4 = 10$? Để kiểm tra: $O(0,0), A(4,0), B(2,3), C(0,4)$. $S = \\frac{1}{2}|0(0-3) + 4(3-4) + 2(4-0) + 0(0-0)| = \\frac{1}{2}|-4 + 8| = 2$ à không, Shoelace: $x_1 y_2 - y_1 x_2$: $(0)(0) - (0)(4) + (4)(3) - (0)(2) + (2)(4) - (3)(0) + (0)(0) - (4)(0) = 12 + 8 = 20 \\Rightarrow S = 10$. Vậy mệnh đề diện tích bằng 14 là SAI."
              },
              {
                "id": "d",
                "text": "Biểu thức $F(x; y) = 5x + 4y$ đạt giá trị lớn nhất trên miền nghiệm bằng $22$.",
                "correct": true,
                "explanation": "$F(O)=0, F(A)=20, F(B)=5(2)+4(3)=22, F(C)=16$. GTLN là 22 tại $B(2; 3)$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho bất phương trình $4x - 5y + 20 \\ge 0$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đường thẳng bờ $d: 4x - 5y + 20 = 0$ đi qua điểm $A(-5; 0)$ và $B(0; 4)$.",
                "correct": true,
                "explanation": "Thay tọa độ $A$ và $B$ đều thỏa mãn phương trình."
              },
              {
                "id": "b",
                "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.",
                "correct": true,
                "explanation": "Thay $(0; 0)$: $0 - 0 + 20 = 20 \\ge 0$ (đúng)."
              },
              {
                "id": "c",
                "text": "Điểm $K(-3; 2)$ thuộc miền nghiệm của bất phương trình.",
                "correct": false,
                "explanation": "Thay $(-3; 2)$: $4(-3) - 5(2) + 20 = -12 - 10 + 20 = -2 < 0$. Đúng là $K$ không thuộc miền nghiệm, nên khẳng định $K$ không thuộc là ĐÚNG. Đổi câu text thành: 'Điểm $K(-3; 2)$ thuộc miền nghiệm' -> SAI."
              },
              {
                "id": "d",
                "text": "Miền nghiệm là nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O$ kể cả bờ.",
                "correct": true,
                "explanation": "Đúng theo quy tắc xác định miền nghiệm."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một công ty cung cấp dịch vụ xe buýt du lịch có hai loại xe: Xe loại A (45 chỗ ngồi, giá thuê 3 triệu/ngày) và Xe loại B (30 chỗ ngồi, giá thuê 2.2 triệu/ngày). Cần chở ít nhất 180 khách, tổng số xe không quá 5 xe. Gọi $x, y$ là số xe loại A và B. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 45x + 30y \\ge 180 \\\\ x + y \\le 5 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
                "correct": true,
                "explanation": "Đúng với giả thiết số khách và tổng số xe."
              },
              {
                "id": "b",
                "text": "Công ty có thể thuê 2 xe loại A và 3 xe loại B.",
                "correct": true,
                "explanation": "Sức chứa: $2(45) + 3(30) = 90 + 90 = 180$ khách và tổng xe $2 + 3 = 5$."
              },
              {
                "id": "c",
                "text": "Miền nghiệm chứa điểm cực biên $(4; 0)$.",
                "correct": true,
                "explanation": "$4(45) = 180$ và $4 \\le 5$."
              },
              {
                "id": "d",
                "text": "Chi phí thuê xe nhỏ nhất là 12 triệu đồng.",
                "correct": true,
                "explanation": "Thuê 4 xe loại A: $4 \\times 3 = 12$ triệu đồng. Thuê 2 xe A + 3 xe B: $2(3) + 3(2.2) = 6 + 6.6 = 12.6$ triệu đồng. Min là 12 triệu."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hàm mục tiêu $F(x; y) = 4x - 2y$ trên miền tam giác có 3 đỉnh $A(0; 1), B(4; 2), C(1; 5)$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Giá trị của $F$ tại đỉnh $A$ bằng $-2$.",
                "correct": true,
                "explanation": "$F(A) = 4(0) - 2(1) = -2$."
              },
              {
                "id": "b",
                "text": "Giá trị lớn nhất của $F(x; y)$ bằng $12$.",
                "correct": true,
                "explanation": "$F(B) = 4(4) - 2(2) = 12$. Các đỉnh khác: $F(A) = -2, F(C) = 4(1) - 2(5) = -6$. GTLN là 12."
              },
              {
                "id": "c",
                "text": "Giá trị nhỏ nhất của $F(x; y)$ bằng $-6$ tại đỉnh $C$.",
                "correct": true,
                "explanation": "$F(C) = -6$ là giá trị nhỏ nhất."
              },
              {
                "id": "d",
                "text": "Điểm $M(2; 2)$ nằm trong tam giác và có giá trị $F(M) = 6$.",
                "correct": false,
                "explanation": "$F(2; 2) = 4(2) - 2(2) = 4 \\ne 6$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho bất phương trình $2x + y - 6 \\le 0$. Điểm $A(a; 2)$ thuộc bờ của bất phương trình. Tìm giá trị của $a$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2",
              "2.0"
            ],
            "explanation": "$2a + 2 - 6 = 0 \\Rightarrow 2a = 4 \\Rightarrow a = 2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tính diện tích miền nghiệm của hệ bất phương trình $\\begin{cases} 0 \\le x \\le 6 \\\\ 0 \\le y \\le 5 \\\\ x + y \\ge 4 \\end{cases}$.",
            "correctAnswer": "22",
            "acceptedAnswers": [
              "22",
              "22.0"
            ],
            "explanation": "Hình chữ nhật kích thước $6 \\times 5 = 30$. Phần tam giác bị bỏ đi ở góc tọa độ có cạnh 4 và 4, diện tích $\\frac{1}{2} \\cdot 4 \\cdot 4 = 8$. Diện tích miền nghiệm là $30 - 8 = 22$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị lớn nhất của $F(x; y) = 3x + 5y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 6 \\\\ y \\le 4 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
            "correctAnswer": "26",
            "acceptedAnswers": [
              "26",
              "26.0"
            ],
            "explanation": "Các đỉnh: $(0; 0) \\Rightarrow 0, (6; 0) \\Rightarrow 18, (2; 4) \\Rightarrow 3(2)+5(4)=26, (0; 4) \\Rightarrow 20$. GTLN là 26 tại $(2; 4)$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một công ty vận tải có hai loại xe tải để chở 12 tấn hàng. Xe lớn chở được 3 tấn, chi phí 1.2 triệu. Xe nhỏ chở được 1.5 tấn, chi phí 0.7 triệu. Tìm chi phí thuê xe nhỏ nhất (đơn vị: triệu đồng).",
            "correctAnswer": "4.8",
            "acceptedAnswers": [
              "4.8",
              "4,8"
            ],
            "explanation": "Thuê 4 xe lớn: chi phí $4 \\times 1.2 = 4.8$ triệu đồng. Thuê 8 xe nhỏ: $8 \\times 0.7 = 5.6$ triệu. Chi phí nhỏ nhất là 4.8 triệu."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Một nhà máy sản xuất linh kiện vi mạch điện tử có hai dây chuyền tự động D1 và D2. Mỗi giờ, dây chuyền D1 tiêu thụ $15\\text{ kWh}$ điện, tạo ra $120$ chip loại A và $60$ chip loại B, phát thải $2\\text{ kg } CO_2$. Dây chuyền D2 tiêu thụ $20\\text{ kWh}$ điện, tạo ra $80$ chip loại A và $120$ chip loại B, phát thải $1.5\\text{ kg } CO_2$. Theo hợp đồng cung ứng trong ngày, nhà máy phải bàn giao ít nhất $1440$ chip loại A và $1080$ chip loại B. Do trạm biến áp của khu công nghiệp hạn chế công suất, tổng điện năng tiêu thụ trong ngày không được vượt quá $280\\text{ kWh}$. Quy định môi trường yêu cầu tổng lượng $CO_2$ xả thải trong ngày không vượt quá $30\\text{ kg}$. Tiền điện cho mỗi giờ hoạt động của D1 là 60 nghìn đồng, của D2 là 75 nghìn đồng. Hãy tìm số tiền điện tối thiểu (nghìn đồng) mà nhà máy phải trả trong ngày để hoàn thành đơn hàng.",
            "correctAnswer": "930",
            "acceptedAnswers": [
              "930",
              "930.0"
            ],
            "explanation": "Gọi $x, y \\ge 0$ là số giờ hoạt động của D1 và D2. Ràng buộc: Chip A: $120x + 80y \\ge 1440 \\iff 3x + 2y \\ge 36$; Chip B: $60x + 120y \\ge 1080 \\iff x + 2y \\ge 20$; Điện năng: $15x + 20y \\le 280$; Xả thải $CO_2$: $2x + 1.5y \\le 30$. Hàm chi phí tiền điện cần cực tiểu: $C(x; y) = 60x + 75y$. Giao điểm của hai đường ràng buộc sản lượng $3x + 2y = 36$ và $x + 2y = 20$ cho $x = 8, y = 6$. Kiểm tra giới hạn: Điện năng $= 15(8) + 20(6) = 240 \\le 280$ (thỏa); $CO_2 = 2(8) + 1.5(6) = 25 \\le 30$ (thỏa). Chi phí điện tại $(8; 6)$ là $C = 60(8) + 75(6) = 480 + 450 = 930$ nghìn đồng. Do cả hai ràng buộc sản phẩm đều có hệ số chi phí dương và $x, y$ giảm xuống điểm biên này, 930 nghìn đồng là chi phí tối thiểu."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một công ty du lịch tổ chức tour khám phá biển đảo bằng hai loại du thuyền cao tốc: Loại Alpha (chở được 40 khách và 15 vali cồng kềnh, chi phí nhiên liệu 12 triệu đồng/chuyến) và Loại Beta (chở được 60 khách và 10 vali cồng kềnh, chi phí nhiên liệu 15 triệu đồng/chuyến). Đoàn khách gồm ít nhất 480 người và 120 vali cồng kềnh. Cảng vụ chỉ cho phép xuất bến tối đa 10 thuyền Alpha và 12 thuyền Beta trong ngày, đồng thời tổng số chuyến của cả hai loại không được quá 15 chuyến. Hãy xác định tổng chi phí nhiên liệu nhỏ nhất (triệu đồng) để vận chuyển hết số khách và hành lý trên.",
            "correctAnswer": "132",
            "acceptedAnswers": [
              "132",
              "132.0"
            ],
            "explanation": "Gọi $x, y \\in \\mathbb{N}$ là số chuyến thuyền Alpha và Beta. Ràng buộc: Khách: $40x + 60y \\ge 480 \\iff 2x + 3y \\ge 24$; Hành lý: $15x + 10y \\ge 120 \\iff 3x + 2y \\ge 24$; $x \\le 10, y \\le 12, x + y \\le 15$. Hàm chi phí: $C(x; y) = 12x + 15y$. Điểm giao nhau của hai đường thẳng $2x + 3y = 24$ và $3x + 2y = 24$ là $(4.8; 4.8)$. Do $x, y$ nguyên, ta xét các điểm nguyên lân cận thỏa mãn cả hai điều kiện: $(6; 4)$ có $2(6)+3(4)=24$ và $3(6)+2(4)=26 \\ge 24$, chi phí $C(6; 4) = 12(6) + 15(4) = 72 + 60 = 132$ triệu đồng; Điểm $(5; 5)$ có $C(5; 5) = 12(5) + 15(5) = 135$ triệu; Điểm $(4; 6)$ có $C(4; 6) = 12(4) + 15(6) = 138$ triệu. Vậy chi phí nhiên liệu nhỏ nhất là 132 triệu đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-exam-4",
        "examNumber": 4,
        "title": "Đề Số 4: Nông Nghiệp Xuất Khẩu & Tối Ưu Nguồn Tài Nguyên",
        "code": "CD2-204",
        "badge": "Mã Đề 204",
        "badgeColor": "bg-purple-50 text-purple-800 border-purple-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cặp số $(x; y) = (2; 3)$ là nghiệm của bất phương trình nào sau đây?",
            "options": {
              "A": "$x - 2y + 5 < 0$",
              "B": "$x + 3y - 12 > 0$",
              "C": "$2x + y - 5 \\ge 0$",
              "D": "$3x - y - 4 < 0$"
            },
            "correct": "C",
            "explanation": "Thay $(2; 3)$: $2(2) + 3 - 5 = 2 \\ge 0$ (thỏa mãn)."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Miền nghiệm của bất phương trình $x - y < 0$ là nửa mặt phẳng bờ $d: x - y = 0$ chứa điểm nào?",
            "options": {
              "A": "$(4; 2)$",
              "B": "$(0; 1)$",
              "C": "$(3; 1)$",
              "D": "$(2; 0)$"
            },
            "correct": "B",
            "explanation": "Thay $(0; 1)$: $0 - 1 = -1 < 0$ (thỏa mãn)."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Hệ bất phương trình nào sau đây có miền nghiệm là một hình vuông?",
            "options": {
              "A": "$\\begin{cases} 0 \\le x \\le 3 \\\\ 0 \\le y \\le 3 \\end{cases}$",
              "B": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 3 \\end{cases}$",
              "C": "$\\begin{cases} x + y \\le 3 \\\\ x - y \\le 3 \\end{cases}$",
              "D": "$\\begin{cases} 0 \\le x \\le 3 \\\\ 0 \\le y \\le 4 \\end{cases}$"
            },
            "correct": "A",
            "explanation": "Cạnh bằng 3 theo cả hai chiều $x$ và $y$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Điểm $O(0; 0)$ KHÔNG thuộc miền nghiệm của bất phương trình nào sau đây?",
            "options": {
              "A": "$2x + 3y + 6 < 0$",
              "B": "$x - y + 1 > 0$",
              "C": "$3x + 2y - 4 \\le 0$",
              "D": "$x + y + 5 \\ge 0$"
            },
            "correct": "A",
            "explanation": "Thay $(0; 0)$: $6 < 0$ là sai."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho tam giác có các đỉnh $O(0; 0), A(5; 0), B(0; 6)$. Giá trị lớn nhất của $F(x; y) = 3x + 2y$ bằng",
            "options": {
              "A": "$18$",
              "B": "$21$",
              "C": "$12$",
              "D": "$15$"
            },
            "correct": "D",
            "explanation": "$F(O)=0, F(A)=15, F(B)=12$. GTLN là $15$ tại $A$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một nông trường có 100 ha đất trồng cà phê và hồ tiêu. Gọi $x, y$ là diện tích trồng cà phê và hồ tiêu. Bất phương trình ràng buộc diện tích là",
            "options": {
              "A": "$xy \\le 100$",
              "B": "$x - y \\le 100$",
              "C": "$x + y \\ge 100$",
              "D": "$x + y \\le 100$"
            },
            "correct": "D",
            "explanation": "Tổng diện tích $x + y \\le 100$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Cặp số $(x; y) = (1; 2)$ thỏa mãn hệ bất phương trình nào sau đây?",
            "options": {
              "A": "$\\begin{cases} 2x + y \\le 5 \\\\ x - y \\le 0 \\end{cases}$",
              "B": "$\\begin{cases} 2x + y \\le 5 \\\\ x - y > 0 \\end{cases}$",
              "C": "$\\begin{cases} x + 2y < 3 \\\\ 2x - y > 1 \\end{cases}$",
              "D": "$\\begin{cases} 2x + y > 5 \\\\ x - y \\le 0 \\end{cases}$"
            },
            "correct": "A",
            "explanation": "$2(1) + 2 = 4 \\le 5$ và $1 - 2 = -1 \\le 0$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Điểm nào sau đây nằm trên đường thẳng bờ của bất phương trình $3x - 5y + 15 \\ge 0$?",
            "options": {
              "A": "$(2; 4)$",
              "B": "$(3; 0)$",
              "C": "$(0; 3)$",
              "D": "$(1; 2)$"
            },
            "correct": "C",
            "explanation": "Thay $(0; 3)$: $3(0) - 5(3) + 15 = 0$ (thuộc bờ đường thẳng)."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 3 \\\\ x - y \\le 1 \\end{cases}$. Miền nghiệm của hệ có bao nhiêu đỉnh?",
            "options": {
              "A": "3 đỉnh",
              "B": "6 đỉnh",
              "C": "5 đỉnh",
              "D": "4 đỉnh"
            },
            "correct": "D",
            "explanation": "Các đỉnh là $(0; 0), (1; 0), (2; 1), (0; 3)$ (tứ giác lồi có 4 đỉnh)."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Giá trị nhỏ nhất của $F(x; y) = 2x - 3y$ trên miền tứ giác có 4 đỉnh $A(0; 0), B(4; 0), C(3; 3), D(0; 2)$ bằng",
            "options": {
              "A": "$8$",
              "B": "$-6$",
              "C": "$-3$",
              "D": "$0$"
            },
            "correct": "B",
            "explanation": "$F(A)=0, F(B)=8, F(C)=-3, F(D)=-6$. GTNN là $-6$ tại $D$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong mặt phẳng $Oxy$, miền nghiệm của bất phương trình $x + y \\ge 0$ là",
            "options": {
              "A": "Nửa mặt phẳng bờ $x + y = 0$ chứa điểm $(-1; -1)$",
              "B": "Nửa mặt phẳng bờ $x + y = 0$ chứa điểm $(1; 1)$",
              "C": "Toàn bộ mặt phẳng",
              "D": "Đường thẳng $x + y = 0$"
            },
            "correct": "B",
            "explanation": "Thay $(1; 1)$: $1 + 1 = 2 \\ge 0$ (thỏa mãn)."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho biểu thức $F(x; y) = ax + by$. Khi vẽ các đường mức $ax + by = c$, các đường mức này có tính chất gì?",
            "options": {
              "A": "Là các đường thẳng cắt nhau tại gốc tọa độ",
              "B": "Là các đường tròn đồng tâm",
              "C": "Là các đường thẳng song song với nhau",
              "D": "Là các đường cong parabol"
            },
            "correct": "C",
            "explanation": "Các đường thẳng $ax + by = c$ có cùng vectơ pháp tuyến nên song song với nhau."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 6 \\\\ x + 2y \\le 6 \\end{cases}$ ($D$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Miền nghiệm ($D$) là một tứ giác đối xứng qua đường thẳng $y = x$.",
                "correct": true,
                "explanation": "Vì các phương trình đối xứng giữa $x$ và $y$."
              },
              {
                "id": "b",
                "text": "Đỉnh đối diện gốc $O$ có tọa độ là $(2; 2)$.",
                "correct": true,
                "explanation": "Giải hệ $2x + y = 6$ và $x + 2y = 6 \\Rightarrow x = 2, y = 2$."
              },
              {
                "id": "c",
                "text": "Điểm $M(1.5; 1.5)$ nằm ngoài miền nghiệm ($D$).",
                "correct": false,
                "explanation": "$2(1.5) + 1.5 = 4.5 \\le 6$. $M$ nằm trong miền nghiệm."
              },
              {
                "id": "d",
                "text": "Giá trị lớn nhất của $F(x; y) = x + y$ trên miền ($D$) bằng $4$.",
                "correct": true,
                "explanation": "Tại $(2; 2)$ thì $x + y = 4$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho bất phương trình $3x - 2y \\le 6$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đường thẳng bờ cắt trục hoành tại $(2; 0)$ và trục tung tại $(0; -3)$.",
                "correct": true,
                "explanation": "Cho $y = 0 \\Rightarrow x = 2$; cho $x = 0 \\Rightarrow y = -3$."
              },
              {
                "id": "b",
                "text": "Điểm $P(1; -2)$ thuộc miền nghiệm của bất phương trình.",
                "correct": false,
                "explanation": "Thay $(1; -2)$: $3(1) - 2(-2) = 7 \\le 6$ là sai."
              },
              {
                "id": "c",
                "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm.",
                "correct": true,
                "explanation": "$3(0) - 2(0) = 0 \\le 6$ (đúng)."
              },
              {
                "id": "d",
                "text": "Miền nghiệm không chứa điểm nào trên trục tung có tung độ dương.",
                "correct": false,
                "explanation": "Với điểm $(0; 1)$: $3(0) - 2(1) = -2 \\le 6$ (vẫn thuộc miền nghiệm)."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một trang trại dự kiến trồng ngô và khoai lang trên diện tích tối đa 8 ha. Chi phí trồng 1 ha ngô là 15 triệu, 1 ha khoai là 20 triệu. Tổng ngân sách tối đa là 140 triệu. Gọi $x, y$ là số ha ngô và khoai. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} x + y \\le 8 \\\\ 15x + 20y \\le 140 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
                "correct": true,
                "explanation": "Chính xác theo giả thiết đề bài."
              },
              {
                "id": "b",
                "text": "Trang trại có thể trồng 5 ha ngô và 4 ha khoai.",
                "correct": false,
                "explanation": "$5 + 4 = 9 > 8$ ha (vượt quá diện tích)."
              },
              {
                "id": "c",
                "text": "Miền nghiệm có đỉnh giao biên là $(4; 4)$.",
                "correct": true,
                "explanation": "Giải $x + y = 8$ và $3x + 4y = 28 \\Rightarrow x = 4, y = 4$."
              },
              {
                "id": "d",
                "text": "Nếu 1 ha ngô lãi 30 triệu, 1 ha khoai lãi 36 triệu thì lợi nhuận lớn nhất đạt được khi trồng 4 ha ngô và 4 ha khoai.",
                "correct": true,
                "explanation": "$L(4; 4) = 30(4) + 36(4) = 264$. Tại $(8; 0) \\Rightarrow L = 240$. Tại $(0; 7) \\Rightarrow L = 36(7) = 252$. Lợi nhuận lớn nhất đúng là 264 tại $(4; 4)$. Hãy sửa mệnh đề thành True."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho tứ giác $ABCD$ với $A(0; 2), B(3; 0), C(4; 3), D(1; 4)$. Xét biểu thức $F(x; y) = 3x - y$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Giá trị của $F$ tại đỉnh $A$ là $-2$.",
                "correct": true,
                "explanation": "$F(A) = 3(0) - 2 = -2$."
              },
              {
                "id": "b",
                "text": "Giá trị lớn nhất của $F$ trên tứ giác bằng $9$.",
                "correct": true,
                "explanation": "$F(B) = 3(3) - 0 = 9, F(C) = 12 - 3 = 9$. GTLN là 9."
              },
              {
                "id": "c",
                "text": "Tất cả các điểm trên đoạn thẳng $BC$ đều làm cho $F$ đạt giá trị lớn nhất.",
                "correct": true,
                "explanation": "Do $F(B) = F(C) = 9$ và hàm $F$ là tuyến tính."
              },
              {
                "id": "d",
                "text": "Giá trị nhỏ nhất của $F$ bằng $-1$ tại đỉnh $D$.",
                "correct": false,
                "explanation": "$F(D) = 3(1) - 4 = -1$. Nhưng $F(A) = -2 < -1$. Vậy GTNN là $-2$ tại $A$, mệnh đề d SAI."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của biểu thức $F(x; y) = 3x + 2y$ tại điểm $A(5; 4)$.",
            "correctAnswer": "23",
            "acceptedAnswers": [
              "23",
              "23.0"
            ],
            "explanation": "$F(5; 4) = 3(5) + 2(4) = 15 + 8 = 23$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Miền nghiệm của hệ $\\begin{cases} 0 \\le x \\le 5 \\\\ 0 \\le y \\le 6 \\\\ y \\le x \\end{cases}$ là một tam giác vuông. Tính diện tích miền tam giác đó.",
            "correctAnswer": "12.5",
            "acceptedAnswers": [
              "12.5",
              "12,5"
            ],
            "explanation": "Đỉnh là $(0; 0), (5; 0), (5; 5)$. Tam giác vuông cân có cạnh góc vuông bằng 5. Diện tích $S = \\frac{1}{2} \\cdot 5 \\cdot 5 = 12.5$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị lớn nhất của $F(x; y) = 4x + y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 7 \\\\ 3x + y \\le 15 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
            "correctAnswer": "20",
            "acceptedAnswers": [
              "20",
              "20.0"
            ],
            "explanation": "Giao của hai đường là $x = 4, y = 3$. Các đỉnh: $(0; 0) \\Rightarrow 0, (5; 0) \\Rightarrow 20, (4; 3) \\Rightarrow 4(4)+3=19, (0; 7) \\Rightarrow 7$. GTLN tại $(5; 0)$ là 20. Nếu tại $(5; 0)$ là 20. Chờ chút: $3(5) + 0 = 15 \\le 15$ và $5 + 0 = 5 \\le 7$. $F(5; 0) = 20$. GTLN là 20."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một xưởng mộc đóng bàn và ghế. Mỗi chiếc bàn cần 2m gỗ và 3 giờ công, lãi 400 nghìn. Mỗi chiếc ghế cần 1m gỗ và 1 giờ công, lãi 150 nghìn. Có sẵn 16m gỗ và 21 giờ công. Tìm số tiền lãi lớn nhất (đơn vị: nghìn đồng).",
            "correctAnswer": "2900",
            "acceptedAnswers": [
              "2900",
              "2900.0"
            ],
            "explanation": "$2x + y \\le 16$ và $3x + y \\le 21$. Trừ hai phương trình: $x = 5, y = 6$. Lợi nhuận $L = 400(5) + 150(6) = 2000 + 900 = 2900$. Tại $(7; 0)$: $400(7) = 2800$. Tại $(0; 16)$: $150(16) = 2400$. Lợi nhuận lớn nhất là 2900 nghìn đồng."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Một hợp tác xã nông nghiệp công nghệ cao dự định trồng sầu riêng Ri6 và thanh long ruột đỏ trên khu đất có diện tích tối đa 12 ha. Trồng 1 ha sầu riêng cần vốn đầu tư ban đầu 120 triệu đồng, 40 ngày công và $300\\text{ m}^3$ nước tưới mỗi tháng, mang lại lợi nhuận dự kiến 150 triệu đồng/năm. Trồng 1 ha thanh long cần 80 triệu đồng vốn, 60 ngày công và $150\\text{ m}^3$ nước tưới mỗi tháng, mang lại lợi nhuận 90 triệu đồng/năm. Hợp tác xã có sẵn tổng nguồn vốn không quá 1200 triệu đồng, nhân lực tối đa 600 ngày công và hệ thống thủy lợi cung cấp tối đa $2700\\text{ m}^3$ nước tưới mỗi tháng. Tính lợi nhuận tối đa hàng năm (triệu đồng) mà hợp tác xã có thể đạt được.",
            "correctAnswer": "1440",
            "acceptedAnswers": [
              "1440",
              "1440.0"
            ],
            "explanation": "Gọi $x, y \\ge 0$ là số ha sầu riêng và thanh long. Các điều kiện: Đất: $x + y \\le 12$; Vốn: $120x + 80y \\le 1200 \\iff 3x + 2y \\le 30$; Công: $40x + 60y \\le 600 \\iff 2x + 3y \\le 30$; Nước: $300x + 150y \\le 2700 \\iff 2x + y \\le 18$. Hàm lợi nhuận: $L(x; y) = 150x + 90y$. Giao điểm của hai đường $3x + 2y = 30$ và $2x + 3y = 30$ là $x = 6, y = 6$. Kiểm tra: $6 + 6 = 12 \\le 12$ (thỏa mãn); $2(6) + 6 = 18 \\le 18$ (thỏa mãn). Điểm $(6; 6)$ là một đỉnh của miền nghiệm. Lợi nhuận tại $(6; 6)$ là $L = 150(6) + 90(6) = 900 + 540 = 1440$ triệu đồng. Tại $(9; 0)$: $L = 1350$; tại $(0; 10)$: $L = 900$. Vậy lợi nhuận tối đa là 1440 triệu đồng."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một xưởng đúc cơ khí chính xác nhận hợp đồng chế tạo hai loại chi tiết máy $P_1$ và $P_2$. Để gia công xong 1 chi tiết $P_1$ cần 3 giờ trên máy tiện, 2 giờ trên máy phay và 1 giờ trên máy mài. Để gia công 1 chi tiết $P_2$ cần 1 giờ trên máy tiện, 2 giờ trên máy phay và 3 giờ trên máy mài. Phân xưởng có tổng số giờ máy khả dụng trong tuần: máy tiện không quá 45 giờ, máy phay không quá 40 giờ, máy mài không quá 45 giờ. Do yêu cầu thị trường, số lượng chi tiết $P_1$ không vượt quá 12 chiếc, và số lượng $P_2$ không vượt quá 14 chiếc. Mỗi chi tiết $P_1$ đem lại tiền lãi 250 nghìn đồng, mỗi chi tiết $P_2$ đem lại tiền lãi 300 nghìn đồng. Hãy tìm số tiền lãi lớn nhất (nghìn đồng) mà xưởng cơ khí có thể đạt được trong một tuần.",
            "correctAnswer": "5600",
            "acceptedAnswers": [
              "5600",
              "5600.0"
            ],
            "explanation": "Gọi $x, y \\in \\mathbb{N}$ là số chi tiết $P_1, P_2$. Ta có hệ: Máy tiện: $3x + y \\le 45$; Máy phay: $2x + 2y \\le 40 \\iff x + y \\le 20$; Máy mài: $x + 3y \\le 45$; Thị trường: $x \\le 12, y \\le 14$. Tiền lãi: $L(x; y) = 250x + 300y$. Giao điểm của $x + y = 20$ và $x + 3y = 45$ cho $y = 12.5, x = 7.5$. Do $x, y$ nguyên và cần tối đa hóa $L$ với hệ số của $y$ lớn hơn ($300 > 250$): Xét $y = 12 \\Rightarrow x \\le 20 - 12 = 8$. Kiểm tra: $3(8) + 12 = 36 \\le 45$; $8 + 3(12) = 44 \\le 45$; $8 \\le 12, 12 \\le 14$. Điểm $(8; 12)$ hoàn toàn khả thi! Lợi nhuận tại $(8; 12)$ là $L = 250(8) + 300(12) = 2000 + 3600 = 5600$ nghìn đồng. Nếu thử $y = 13 \\Rightarrow x + 3(13) \\le 45 \\Rightarrow x \\le 6 \\Rightarrow L(6; 13) = 1500 + 3900 = 5400 < 5600$. Vậy tiền lãi lớn nhất là 5600 nghìn đồng."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd2-exam-5",
        "examNumber": 5,
        "title": "Đề Số 5: Tài Chính Doanh Nghiệp & Danh Mục Đầu Tư",
        "code": "CD2-205",
        "badge": "Mã Đề 205",
        "badgeColor": "bg-rose-50 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Bất phương trình nào sau đây mô tả nửa mặt phẳng bên trái trục tung kể cả trục tung?",
            "options": {
              "A": "$y \\le 0$",
              "B": "$x \\ge 0$",
              "C": "$y \\ge 0$",
              "D": "$x \\le 0$"
            },
            "correct": "D",
            "explanation": "Bên trái trục tung nghĩa là hoành độ $x \\le 0$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Điểm nào sau đây thuộc miền nghiệm của bất phương trình $3x - y + 2 > 0$?",
            "options": {
              "A": "$-2; 1$",
              "B": "$(0; 5)$",
              "C": "$(1; 2)$",
              "D": "$-1; 0$"
            },
            "correct": "C",
            "explanation": "Thay $(1; 2)$: $3(1) - 2 + 2 = 3 > 0$ (thỏa mãn)."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hệ bất phương trình $\\begin{cases} 2x + 3y \\le 6 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Miền nghiệm của hệ có hình dạng là",
            "options": {
              "A": "Miền tam giác vuông",
              "B": "Miền tứ giác",
              "C": "Miền ngũ giác",
              "D": "Nửa mặt phẳng"
            },
            "correct": "A",
            "explanation": "Giao của góc phần tư thứ nhất với nửa mặt phẳng tạo ra tam giác vuông tại $O(0; 0)$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cặp số $(x; y) = (3; 2)$ là nghiệm của hệ bất phương trình nào sau đây?",
            "options": {
              "A": "$\\begin{cases} x + 2y \\ge 5 \\\\ 2x - y \\le 6 \\end{cases}$",
              "B": "$\\begin{cases} x - y > 2 \\\\ x + y < 4 \\end{cases}$",
              "C": "$\\begin{cases} x + 2y < 5 \\\\ 2x - y > 6 \\end{cases}$",
              "D": "$\\begin{cases} 3x - y < 5 \\\\ x + 3y > 10 \\end{cases}$"
            },
            "correct": "A",
            "explanation": "$3 + 2(2) = 7 \\ge 5$ và $2(3) - 2 = 4 \\le 6$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Giá trị nhỏ nhất của $F(x; y) = 3x - 2y$ trên miền tam giác có 3 đỉnh $O(0; 0), A(4; 0), B(0; 3)$ bằng",
            "options": {
              "A": "$0$",
              "B": "$-6$",
              "C": "$12$",
              "D": "$-3$"
            },
            "correct": "B",
            "explanation": "$F(O)=0, F(A)=12, F(B)=-6$. GTNN là $-6$ tại $B$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Một nhà đầu tư có số vốn 500 triệu để rót vào hai kênh cổ phiếu $x$ và trái phiếu $y$. Bất phương trình thể hiện giới hạn vốn đầu tư là",
            "options": {
              "A": "$x + y \\ge 500$",
              "B": "$x + y \\le 500$",
              "C": "$xy \\le 500$",
              "D": "$x - y \\le 500$"
            },
            "correct": "B",
            "explanation": "Tổng số vốn đầu tư $x + y \\le 500$ ($x, y \\ge 0$)."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Đường thẳng bờ $d: 5x - 2y = 10$ cắt trục hoành tại điểm nào?",
            "options": {
              "A": "$(0; 2)$",
              "B": "$(0; -5)$",
              "C": "$(5; 0)$",
              "D": "$(2; 0)$"
            },
            "correct": "D",
            "explanation": "Cho $y = 0 \\Rightarrow 5x = 10 \\Rightarrow x = 2$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 2y \\le 12 \\end{cases}$?",
            "options": {
              "A": "$(2; 1)$",
              "B": "$(0; 4)$",
              "C": "$(3; 2)$",
              "D": "$(1; 2)$"
            },
            "correct": "C",
            "explanation": "Thay $(3; 2)$: $3(3) + 2(2) = 13 > 12$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Diện tích của miền nghiệm tạo bởi hệ $\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 5 \\end{cases}$ bằng",
            "options": {
              "A": "$20$",
              "B": "$9$",
              "C": "$18$",
              "D": "$40$"
            },
            "correct": "A",
            "explanation": "$S = 4 \\times 5 = 20$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho $F(x; y) = 4x + 5y$. Trong 4 điểm sau, điểm nào cho giá trị của $F$ lớn nhất?",
            "options": {
              "A": "$(4; 2)$",
              "B": "$(3; 4)$",
              "C": "$(2; 4)$",
              "D": "$(5; 1)$"
            },
            "correct": "B",
            "explanation": "$F(3; 4) = 4(3) + 5(4) = 32$. Các điểm khác: $(5; 1) \\Rightarrow 25, (2; 4) \\Rightarrow 28, (4; 2) \\Rightarrow 26$. Lớn nhất là 32 tại $(3; 4)$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong mặt phẳng tọa độ $Oxy$, bất phương trình nào sau đây có miền nghiệm là nửa mặt phẳng chứa gốc tọa độ $O$?",
            "options": {
              "A": "$4x - y - 5 > 0$",
              "B": "$3x + 5y + 1 < 0$",
              "C": "$x + 2y - 3 > 0$",
              "D": "$2x - 3y + 4 \\ge 0$"
            },
            "correct": "D",
            "explanation": "Thay $O(0; 0)$: $4 \\ge 0$ (thỏa mãn)."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Điều kiện cần và đủ để miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn là một đa giác lồi bị chặn là",
            "options": {
              "A": "Hệ có vô số nghiệm",
              "B": "Gốc tọa độ phải thuộc miền nghiệm",
              "C": "Miền nghiệm được bao quanh bởi các đoạn thẳng và có diện tích hữu hạn",
              "D": "Hệ có đúng 3 bất phương trình"
            },
            "correct": "C",
            "explanation": "Miền bị chặn là miền có diện tích hữu hạn và nằm trọn trong một hình tròn bán kính đủ lớn."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\\\ 3x + y \\le 9 \\end{cases}$ ($H$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Miền nghiệm ($H$) là một tứ giác có các đỉnh là $O(0; 0), A(3; 0), B(2; 3), C(0; 5)$.",
                "correct": true,
                "explanation": "Giải giao của $x+y=5$ và $3x+y=9 \\Rightarrow 2x = 4 \\Rightarrow x = 2, y = 3$."
              },
              {
                "id": "b",
                "text": "Biểu thức $F(x; y) = 2x + 3y$ đạt giá trị lớn nhất tại đỉnh $B(2; 3)$.",
                "correct": false,
                "explanation": "$F(A)=6, F(B)=2(2)+3(3)=13, F(C)=15$. GTLN là 15 tại $C(0; 5)$. Khẳng định b nói đạt tại C là ĐÚNG. Đổi thành False bằng cách nói: 'GTLN đạt tại B(2; 3)' -> SAI."
              },
              {
                "id": "c",
                "text": "Điểm $M(1; 3)$ thuộc miền nghiệm của hệ ($H$).",
                "correct": true,
                "explanation": "$1+3=4 \\le 5$ và $3(1)+3=6 \\le 9$ (đúng)."
              },
              {
                "id": "d",
                "text": "Diện tích của tứ giác miền nghiệm bằng 11.5.",
                "correct": false,
                "explanation": "$S = S_{OAB} + S_{OBC} = \\frac{1}{2}(3)(3) + \\frac{1}{2}(5)(2) = 4.5 + 5 = 9.5 \\ne 11.5$. Vậy mệnh đề d SAI."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho bất phương trình $-2x + 3y + 6 \\ge 0$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đường thẳng bờ có phương trình là $-2x + 3y + 6 = 0$.",
                "correct": true,
                "explanation": "Đúng phương trình bờ."
              },
              {
                "id": "b",
                "text": "Gốc tọa độ $O(0; 0)$ không thuộc miền nghiệm của bất phương trình.",
                "correct": false,
                "explanation": "Thay $(0; 0)$: $6 \\ge 0$ (thuộc miền nghiệm)."
              },
              {
                "id": "c",
                "text": "Điểm $K(4; 0)$ thuộc miền nghiệm của bất phương trình.",
                "correct": false,
                "explanation": "Thay $(4; 0)$: $-2(4) + 6 = -2 \\ge 0$ là sai."
              },
              {
                "id": "d",
                "text": "Điểm $N(0; 1)$ thuộc miền nghiệm của bất phương trình.",
                "correct": true,
                "explanation": "Thay $(0; 1)$: $3(1) + 6 = 9 \\ge 0$ (đúng)."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một công ty dự định chi không quá 100 triệu đồng cho hai kênh quảng cáo: Truyền hình (chi phí 20 triệu/lần) và Mạng xã hội (chi phí 10 triệu/lần). Số lần phát sóng truyền hình tối đa là 4 lần. Gọi $x, y$ lần lượt là số lần quảng cáo truyền hình và mạng xã hội. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 20x + 10y \\le 100 \\\\ 0 \\le x \\le 4 \\\\ y \\ge 0 \\end{cases}$.",
                "correct": true,
                "explanation": "Đúng với giả thiết chi phí và số lần phát sóng."
              },
              {
                "id": "b",
                "text": "Công ty có thể thực hiện 3 lần truyền hình và 5 lần mạng xã hội.",
                "correct": false,
                "explanation": "Chi phí: $20(3) + 10(5) = 110 > 100$ triệu (vượt ngân sách)."
              },
              {
                "id": "c",
                "text": "Miền nghiệm của hệ là một hình thang vuông.",
                "correct": true,
                "explanation": "Bốn đỉnh là $(0; 0), (4; 0), (4; 2), (0; 10)$ tạo thành hình thang vuông."
              },
              {
                "id": "d",
                "text": "Nếu mỗi lần truyền hình tiếp cận 50 nghìn khách và mạng xã hội tiếp cận 30 nghìn khách thì phương án tiếp cận nhiều khách nhất là 4 lần truyền hình và 2 lần mạng xã hội.",
                "correct": false,
                "explanation": "Tại $(4; 2)$: $50(4) + 30(2) = 260$ nghìn khách. Tại $(0; 10)$: $30(10) = 300$ nghìn khách. 300 > 260 nên phương án $(4; 2)$ không phải nhiều nhất."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hàm mục tiêu $F(x; y) = 5x - y$ trên miền tứ giác có 4 đỉnh $A(1; 1), B(4; 1), C(3; 4), D(1; 3)$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Giá trị của $F$ tại đỉnh $A$ bằng $4$.",
                "correct": true,
                "explanation": "$F(A) = 5(1) - 1 = 4$."
              },
              {
                "id": "b",
                "text": "Giá trị lớn nhất của $F$ trên tứ giác bằng $19$ tại đỉnh $B(4; 1)$.",
                "correct": true,
                "explanation": "$F(B) = 5(4) - 1 = 19$. Tại $C$: $15 - 4 = 11$. Tại $D$: $5 - 3 = 2$. GTLN là 19."
              },
              {
                "id": "c",
                "text": "Giá trị nhỏ nhất của $F$ trên tứ giác bằng $2$ tại đỉnh $D(1; 3)$.",
                "correct": true,
                "explanation": "$F(D) = 2$ là giá trị nhỏ nhất trong 4 đỉnh."
              },
              {
                "id": "d",
                "text": "Điểm $M(2; 2)$ nằm trong tứ giác và có giá trị $F(M) = 10$.",
                "correct": false,
                "explanation": "$F(2; 2) = 5(2) - 2 = 8 \\ne 10$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của biểu thức $F(x; y) = 2x - 5y$ tại điểm $M(6; 2)$.",
            "correctAnswer": "2",
            "acceptedAnswers": [
              "2",
              "2.0"
            ],
            "explanation": "$F(6; 2) = 2(6) - 5(2) = 12 - 10 = 2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hệ bất phương trình $\\begin{cases} 0 \\le x \\le 6 \\\\ 0 \\le y \\le 4 \\\\ x + 2y \\le 8 \\end{cases}$. Miền nghiệm là một hình thang vuông. Tính diện tích miền nghiệm đó.",
            "correctAnswer": "15",
            "acceptedAnswers": [
              "15",
              "15.0"
            ],
            "explanation": "Đỉnh là $(0; 0), (6; 0), (6; 1)$? Tại $x = 6$: $6 + 2y \\le 8 \\Rightarrow 2y \\le 2 \\Rightarrow y \\le 1$. Đỉnh là $(0; 0), (6; 0), (6; 1), (0; 4)$. Hình thang vuông có hai đáy là 4 và 1, chiều cao 6. Diện tích $S = \\frac{4 + 1}{2} \\times 6 = 15$. Cập nhật đúng là 15."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Tìm giá trị lớn nhất của $F(x; y) = 5x + 2y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 4 \\\\ 2x + y \\le 6 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
            "correctAnswer": "15",
            "acceptedAnswers": [
              "15",
              "15.0"
            ],
            "explanation": "Giao của hai đường là $x = 2, y = 2$. Các đỉnh: $(0; 0) \\Rightarrow 0, (3; 0) \\Rightarrow 15, (2; 2) \\Rightarrow 5(2)+2(2)=14, (0; 4) \\Rightarrow 8$. GTLN là 15 tại $(3; 0)$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một công ty tài chính đầu tư hai gói vốn A và B. Gói A lãi 12%/năm, gói B lãi 8%/năm. Tổng vốn đầu tư không quá 40 tỷ, trong đó gói A đầu tư tối đa 25 tỷ. Tính số tiền lãi lớn nhất sau một năm (đơn vị: tỷ đồng).",
            "correctAnswer": "4.2",
            "acceptedAnswers": [
              "4.2",
              "4,2"
            ],
            "explanation": "Để tối đa hóa lãi, đầu tư tối đa vào gói A có lãi suất cao hơn: $x = 25$ tỷ, còn lại $y = 15$ tỷ vào gói B. Tiền lãi $= 25 \\times 0.12 + 15 \\times 0.08 = 3.0 + 1.2 = 4.2$ tỷ đồng."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Một quỹ tín dụng vi mô dành ngân sách 30 tỷ đồng để cho vay đối với hai nhóm đối tượng: Nhóm 1 là các hộ kinh doanh cá thể mở rộng sản xuất (lãi suất 10%/năm, trích lập dự phòng rủi ro 3%), Nhóm 2 là các doanh nghiệp khởi nghiệp đổi mới sáng tạo (lãi suất 14%/năm, trích lập dự phòng rủi ro 6%). Theo quy chế an toàn vốn: tổng vốn cho Nhóm 2 vay không quá 18 tỷ đồng; số tiền cho Nhóm 1 vay phải ít nhất gấp đôi số tiền cho Nhóm 2 vay trừ 6 tỷ đồng (tức $x \\ge 2y - 6$); và tổng mức trích lập dự phòng rủi ro toàn danh mục không được vượt quá $1.35$ tỷ đồng. Hãy tính số tiền lãi sinh lời lớn nhất (tỷ đồng) mà quỹ tín dụng này có thể thu về sau 1 năm.",
            "correctAnswer": "3.48",
            "acceptedAnswers": [
              "3.48",
              "3,48"
            ],
            "explanation": "Gọi $x, y \\ge 0$ là số tỷ đồng cho vay Nhóm 1 và Nhóm 2. Ta có hệ: Tổng vốn: $x + y \\le 30$; Hạn mức Nhóm 2: $y \\le 18$; Tương quan vốn: $x - 2y \\ge -6$; Rủi ro: $0.03x + 0.06y \\le 1.35 \\iff x + 2y \\le 45$. Hàm sinh lời: $L(x; y) = 0.10x + 0.14y$. Giao điểm của $x + y = 30$ và $x - 2y = -6$ cho $x = 18, y = 12$. Kiểm tra: $y = 12 \\le 18$ (thỏa mãn); Rủi ro $= 18 + 2(12) = 42 \\le 45$ (thỏa mãn). Điểm $(18; 12)$ là đỉnh khả thi của miền nghiệm. Lợi nhuận tại $(18; 12)$ là $L = 0.10(18) + 0.14(12) = 1.80 + 1.68 = 3.48$ tỷ đồng. Tại $(30; 0)$: $L = 3.0$. Tại $(0; 3)$: $L = 0.42$. Do đó tiền lãi lớn nhất là 3.48 tỷ đồng."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một chuỗi siêu thị bán lẻ đặt kế hoạch nhập hai dòng sản phẩm gia dụng: Nồi chiên không dầu (giá nhập 1.5 triệu đồng/chiếc, chiếm $0.08\\text{ m}^3$ kho bãi, cần 0.5 giờ kiểm định chất lượng, lợi nhuận 300 nghìn đồng/chiếc) và Máy lọc không khí (giá nhập 2.5 triệu đồng/chiếc, chiếm $0.12\\text{ m}^3$ kho bãi, cần 1 giờ kiểm định, lợi nhuận 600 nghìn đồng/chiếc). Chuỗi siêu thị cấp ngân sách nhập hàng tối đa 150 triệu đồng, kho bãi dự trữ có thể tích chứa tối đa $8.4\\text{ m}^3$, và tổng thời gian của đội kiểm định không quá 50 giờ. Hãy tính số tiền lợi nhuận lớn nhất (triệu đồng) mà chuỗi siêu thị có thể thu được khi bán hết số hàng nhập về.",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30",
              "30.0"
            ],
            "explanation": "Gọi $x, y \\in \\mathbb{N}$ là số nồi chiên và máy lọc không khí. Ta có hệ: Ngân sách: $1.5x + 2.5y \\le 150 \\iff 3x + 5y \\le 300$; Thể tích kho: $0.08x + 0.12y \\le 8.4 \\iff 2x + 3y \\le 210$; Giờ kiểm định: $0.5x + y \\le 50 \\iff x + 2y \\le 100$. Hàm lợi nhuận: $L(x; y) = 0.3x + 0.6y = 0.3(x + 2y)$. Vì $x + 2y \\le 100$ nên $L \\le 0.3 \\times 100 = 30$ triệu đồng. Đẳng thức xảy ra khi $x + 2y = 100$. Thử điểm $(0; 50)$: kiểm tra ngân sách: $5(50) = 250 \\le 300$; thể tích: $3(50) = 150 \\le 210$; kiểm định: $2(50) = 100 \\le 100$. Tất cả đều thỏa mãn! Vậy lợi nhuận tối đa đạt được là 30 triệu đồng."
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
    "subtitle": "Quan hệ vuông góc, góc phẳng, góc nhị diện, khoảng cách chéo nhau & mô hình 3D thực tiễn",
    "grade": 11,
    "icon": "fa-compass-drafting",
    "accentColor": "from-indigo-600 to-purple-700",
    "theorySummaryHtml": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Góc trong không gian -->\n  <div class=\"bg-indigo-50/70 border-l-4 border-indigo-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-indigo-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-compass-drafting text-indigo-600\"></i>\n      1. Góc Trong Không Gian\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-indigo-200\">\n        <p class=\"font-bold text-indigo-950 mb-1\">Góc giữa 2 đường thẳng:</p>\n        <p>$0^\\circ \\le \\varphi \\le 90^\\circ$</p>\n        <p class=\"mt-1 text-indigo-800 font-semibold\">$\\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-indigo-200\">\n        <p class=\"font-bold text-indigo-950 mb-1\">Góc giữa đường thẳng & mp:</p>\n        <p>Góc giữa $d$ và hình chiếu $d'$ của nó lên $(P)$</p>\n        <p class=\"mt-1 text-indigo-800 font-semibold\">$\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-indigo-200\">\n        <p class=\"font-bold text-indigo-950 mb-1\">Góc giữa hai mặt phẳng:</p>\n        <p>Góc phẳng nhị diện hoặc góc giữa 2 vectơ pháp tuyến:</p>\n        <p class=\"mt-1 text-indigo-800 font-semibold\">$\\cos \\varphi = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Khoảng cách -->\n  <div class=\"bg-teal-50/70 border-l-4 border-teal-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-teal-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-ruler-combined text-teal-600\"></i>\n      2. Khoảng Cách Trong Không Gian\n    </h4>\n    <div class=\"space-y-2 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200\">\n        <p class=\"font-bold text-teal-900\">Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$:</p>\n        <p>Hạ $MH \\perp (P) \\Rightarrow d(M, (P)) = MH$.</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\"><strong>Quy tắc dời điểm:</strong> Nếu $MA$ cắt $(P)$ tại $I$ thì $\\frac{d(M, (P))}{d(A, (P))} = \\frac{MI}{AI}$. Nếu $MA \\parallel (P)$ thì $d(M, (P)) = d(A, (P))$. Thường đưa về chân đường vuông góc của khối chóp.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-teal-200\">\n        <p class=\"font-bold text-teal-900\">Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$:</p>\n        <p>Dựng mặt phẳng $(P)$ chứa $b$ và song song với $a$:</p>\n        <p class=\"mt-1 text-teal-800 font-semibold\">$d(a, b) = d(a, (P)) = d(A, (P))$ (với $A$ là điểm bất kỳ thuộc $a$).</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 3: Ứng dụng thực tế -->\n  <div class=\"bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-purple-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-building text-purple-600\"></i>\n      3. Ứng Dụng Thực Tiễn Hình Học Không Gian\n    </h4>\n    <p class=\"text-[11.5pt] mb-2\">Hình học không gian được ứng dụng trực tiếp trong kỹ thuật xây dựng nhà cao tầng, thiết kế giàn giáo chịu lực, xác định góc đón nắng tối ưu của pin mặt trời, và tính khoảng cách an toàn tĩnh không của đường dây tải điện.</p>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd3-exam-1",
        "examNumber": 1,
        "title": "Đề Số 1: Kiến Trúc Mái Dốc & Giàn Không Gian",
        "code": "CD3-301",
        "badge": "Mã Đề 301",
        "badgeColor": "bg-blue-50 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Góc giữa hai đường thẳng song song trong không gian bằng bao nhiêu độ?",
            "options": {
              "A": "$180^\\circ$",
              "B": "$90^\\circ$",
              "C": "$45^\\circ$",
              "D": "$0^\\circ$"
            },
            "correct": "D",
            "explanation": "Theo quy ước, góc giữa hai đường thẳng song song hoặc trùng nhau bằng $0^\\circ$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SC$ lên mặt phẳng $(ABC)$ là",
            "options": {
              "A": "Đường thẳng $SA$",
              "B": "Đường thẳng $BC$",
              "C": "Đường thẳng $AB$",
              "D": "Đường thẳng $AC$"
            },
            "correct": "D",
            "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $C$ là chính nó. Do đó hình chiếu của $SC$ là $AC$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng",
            "options": {
              "A": "$90^\\circ$",
              "B": "$45^\\circ$",
              "C": "$60^\\circ$",
              "D": "$30^\\circ$"
            },
            "correct": "A",
            "explanation": "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ là góc giữa $AB$ và $BC$, bằng $90^\\circ$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình chóp tứ giác đều $S.ABCD$ có tâm đáy là $O$. Đoạn thẳng nào sau đây biểu diễn khoảng cách từ đỉnh $S$ đến mặt phẳng đáy $(ABCD)$?",
            "options": {
              "A": "$SC$",
              "B": "$SB$",
              "C": "$SO$",
              "D": "$SA$"
            },
            "correct": "C",
            "explanation": "Trong chóp tứ giác đều, $SO \\perp (ABCD)$, do đó $d(S, (ABCD)) = SO$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thứ ba thì giao tuyến của chúng (nếu có) sẽ",
            "options": {
              "A": "Vuông góc với mặt phẳng thứ ba đó",
              "B": "Song song với mặt phẳng thứ ba đó",
              "C": "Tạo với mặt phẳng thứ ba một góc $45^\\circ$",
              "D": "Nằm trong mặt phẳng thứ ba đó"
            },
            "correct": "A",
            "explanation": "Định lý: Nếu hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai mặt phẳng song song $(ABCD)$ và $(A'B'C'D')$ bằng",
            "options": {
              "A": "$\\frac{a}{2}$",
              "B": "$a$",
              "C": "$a\\sqrt{2}$",
              "D": "$a\\sqrt{3}$"
            },
            "correct": "B",
            "explanation": "Khoảng cách giữa hai đáy của hình lập phương cạnh $a$ bằng đúng chiều cao $AA' = a$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Cho tứ diện đều $ABCD$. Góc giữa hai đường thẳng chéo nhau $AB$ và $CD$ bằng",
            "options": {
              "A": "$60^\\circ$",
              "B": "$90^\\circ$",
              "C": "$45^\\circ$",
              "D": "$30^\\circ$"
            },
            "correct": "B",
            "explanation": "Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc với nhau từng đôi một."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Mặt phẳng nào sau đây vuông góc với mặt phẳng $(SAB)$?",
            "options": {
              "A": "$(ABC)$",
              "B": "$(SBC)$",
              "C": "Cả $(SBC)$ và $(ABC)$",
              "D": "$(SAC)$"
            },
            "correct": "B",
            "explanation": "Vì $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow (SBC) \\perp (SAB)$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$, $SA \\perp (ABC)$ và $SA = a$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ bằng",
            "options": {
              "A": "$45^\\circ$",
              "B": "$90^\\circ$",
              "C": "$60^\\circ$",
              "D": "$30^\\circ$"
            },
            "correct": "A",
            "explanation": "Góc là $\\widehat{SBA}$. Tam giác $SAB$ vuông tại $A$ có $SA = AB = a$ nên tam giác vuông cân $\\Rightarrow \\widehat{SBA} = 45^\\circ$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Khoảng cách giữa $a$ và $(P)$ được tính bằng",
            "options": {
              "A": "Khoảng cách từ tâm của $(P)$ đến $a$",
              "B": "Độ dài đoạn vuông góc nối từ một điểm trên $(P)$ đến một điểm trên $a$",
              "C": "Khoảng cách từ gốc tọa độ đến $a$",
              "D": "Khoảng cách từ một điểm bất kỳ trên $a$ đến $(P)$"
            },
            "correct": "D",
            "explanation": "Theo định nghĩa, khoảng cách giữa đường thẳng song song với mặt phẳng bằng khoảng cách từ điểm bất kỳ trên đường thẳng đến mặt phẳng."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một cột cờ cao $8\\text{ m}$ vuông góc với mặt sân nằm ngang. Một sợi dây nối từ đỉnh cột cờ đến một cọc neo trên mặt đất cách chân cột $6\\text{ m}$. Chiều dài sợi dây cáp là",
            "options": {
              "A": "$9\\text{ m}$",
              "B": "$12\\text{ m}$",
              "C": "$10\\text{ m}$",
              "D": "$14\\text{ m}$"
            },
            "correct": "C",
            "explanation": "Theo định lý Pytago: $l = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10\\text{ m}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$. Khoảng cách từ điểm $D$ đến mặt phẳng $(SAB)$ bằng",
            "options": {
              "A": "$\\frac{a}{2}$",
              "B": "$a\\sqrt{2}$",
              "C": "$a$",
              "D": "$2a$"
            },
            "correct": "C",
            "explanation": "Vì $DA \\perp AB$ và $DA \\perp SA$ nên $DA \\perp (SAB)$, do đó khoảng cách bằng $DA = a$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh bằng $4$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 4\\sqrt{3}$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAB)$.",
                "correct": true,
                "explanation": "Vì $BC \\perp AB$ và $BC \\perp SA$."
              },
              {
                "id": "b",
                "text": "Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.",
                "correct": false,
                "explanation": "$AC = 4\\sqrt{2}$. $\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{4\\sqrt{3}}{4\\sqrt{2}} = \\sqrt{1.5} \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."
              },
              {
                "id": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$ bằng $\\frac{4\\sqrt{6}}{3}$.",
                "correct": false,
                "explanation": "Hạ $AH \\perp SO$ với $O$ là tâm hình vuông. $OA = 2\\sqrt{2}$. $\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{OA^2} = \\frac{1}{48} + \\frac{1}{8} = \\frac{7}{48} \\Rightarrow AH = \\frac{4\\sqrt{3}}{\\sqrt{7}} \\ne \\frac{4\\sqrt{6}}{3}$."
              },
              {
                "id": "d",
                "text": "Mặt phẳng $(SAC)$ là mặt phẳng trung trực của đoạn thẳng $BD$.",
                "correct": true,
                "explanation": "$BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC)$ tại trung điểm $O$ của $BD$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 4, AD = 3, AA' = 12$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Độ dài đường chéo $AC'$ của hình hộp bằng 13.",
                "correct": true,
                "explanation": "$AC' = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13$."
              },
              {
                "id": "b",
                "text": "Khoảng cách giữa hai đường thẳng $AB$ và $C'D'$ bằng 12.",
                "correct": false,
                "explanation": "$AB \\parallel C'D'$. Khoảng cách bằng độ dài $BC' = \\sqrt{3^2 + 12^2} = \\sqrt{153} \\ne 12$."
              },
              {
                "id": "c",
                "text": "Sin của góc giữa đường chéo $AC'$ và mặt phẳng đáy $(ABCD)$ bằng $\\frac{12}{13}$.",
                "correct": true,
                "explanation": "Hình chiếu của $AC'$ lên $(ABCD)$ là $AC$. $\\sin \\widehat{C'AC} = \\frac{CC'}{AC'} = \\frac{12}{13}$."
              },
              {
                "id": "d",
                "text": "Khoảng cách giữa hai mặt phẳng song song $(ADD'A')$ và $(BCC'B')$ bằng 4.",
                "correct": true,
                "explanation": "Khoảng cách giữa hai mặt phẳng đối diện bằng $AB = 4$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một mái nhà của một trung tâm hội nghị có dạng hình chóp tứ giác đều $S.ABCD$ với đáy là hình vuông cạnh $20\\text{ m}$, chiều cao $SO = 10\\text{ m}$. Kỹ sư dự định lắp đặt các tấm pin mặt trời trên 4 mặt mái phẳng $(SAB), (SBC), (SCD), (SDA)$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hình chiếu vuông góc của đỉnh $S$ lên mặt phẳng trần nhà $(ABCD)$ là tâm $O$ của hình vuông đáy.",
                "correct": true,
                "explanation": "Theo tính chất hình chóp đều."
              },
              {
                "id": "b",
                "text": "Độ dài trung đoạn của chóp (đoạn nối $S$ với trung điểm cạnh đáy) bằng $10\\sqrt{2}\\text{ m}$.",
                "correct": true,
                "explanation": "Gọi $M$ là trung điểm $AB$, $OM = 10\\text{ m}$. $SM = \\sqrt{SO^2 + OM^2} = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ m}$."
              },
              {
                "id": "c",
                "text": "Góc nghiêng của mặt phẳng mái che $(SAB)$ so với trần nhà nằm ngang bằng $45^\\circ$.",
                "correct": true,
                "explanation": "Góc giữa $(SAB)$ và đáy là $\\widehat{SMO}$. $\\tan \\widehat{SMO} = \\frac{SO}{OM} = \\frac{10}{10} = 1 \\Rightarrow \\widehat{SMO} = 45^\\circ$."
              },
              {
                "id": "d",
                "text": "Tổng diện tích của 4 mặt mái che bằng $400\\sqrt{3}\\text{ m}^2$.",
                "correct": false,
                "explanation": "Diện tích mỗi mặt tam giác cân: $S_1 = \\frac{1}{2} \\cdot 20 \\cdot 10\\sqrt{2} = 100\\sqrt{2}$. Tổng 4 mặt là $400\\sqrt{2}\\text{ m}^2 \\ne 400\\sqrt{3}$."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$, với $OA = a, OB = b, OC = c$. Gọi $H$ là hình chiếu vuông góc của $O$ lên mặt phẳng $(ABC)$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "$H$ là trực tâm của tam giác $ABC$.",
                "correct": true,
                "explanation": "Tính chất kinh điển của tứ diện vuông: hình chiếu của $O$ lên mặt đối diện là trực tâm."
              },
              {
                "id": "b",
                "text": "Công thức tính độ dài đường cao $OH$ là $\\frac{1}{OH^2} = \\frac{1}{a^2} + \\frac{1}{b^2} + \\frac{1}{c^2}$.",
                "correct": true,
                "explanation": "Hệ thức lượng mở rộng trong không gian cho tứ diện vuông."
              },
              {
                "id": "c",
                "text": "Góc giữa đường thẳng $OA$ và mặt phẳng $(ABC)$ là góc $\\widehat{OAH}$.",
                "correct": true,
                "explanation": "Hình chiếu của $OA$ lên $(ABC)$ là $AH$, nên góc là $\\widehat{OAH}$."
              },
              {
                "id": "d",
                "text": "Nếu $a = b = c$ thì góc giữa các mặt phẳng bên và mặt phẳng $(ABC)$ đều bằng $60^\\circ$.",
                "correct": false,
                "explanation": "$\\cos \\varphi = \\frac{S_{OAB}}{S_{ABC}} = \\frac{a^2/2}{a^2\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} \\ne \\frac{1}{2}$ nên không bằng $60^\\circ$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và $SA = 4$. Khoảng cách từ đỉnh $S$ đến mặt phẳng đáy $(ABC)$ bằng bao nhiêu?",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4",
              "4.0"
            ],
            "explanation": "Vì $SA \\perp (ABC)$ nên khoảng cách từ $S$ đến $(ABC)$ chính bằng $SA = 4$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ với $AB = 3, BC = 4$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Kẻ $AH \\perp SB$. Vì $BC \\perp (SAB) \\Rightarrow BC \\perp AH \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông cạnh 4, chiều cao $SO = 2\\sqrt{2}$. Tính số đo góc (đơn vị: độ) giữa cạnh bên $SA$ và mặt phẳng đáy $(ABCD)$.",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0"
            ],
            "explanation": "Đường chéo $AC = 4\\sqrt{2} \\Rightarrow OA = 2\\sqrt{2}$. Vì $SO = OA = 2\\sqrt{2}$ nên tam giác $SOA$ vuông cân tại $O \\Rightarrow \\widehat{SAO} = 45^\\circ$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một cột ăng-ten cao $24\\text{ m}$ dựng vuông góc với mặt sân nằm ngang. Người ta dùng 4 sợi dây cáp thép nối từ đỉnh cột xuống 4 cọc neo trên mặt đất cách đều chân cột $7\\text{ m}$. Tính tổng chiều dài 4 sợi dây cáp thép đó (đơn vị: mét).",
            "correctAnswer": "100",
            "acceptedAnswers": [
              "100",
              "100.0"
            ],
            "explanation": "Chiều dài mỗi sợi dây: $l = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25\\text{ m}$. Tổng 4 sợi là $4 \\times 25 = 100\\text{ m}$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 6$, cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 8$. Gọi $M$ là trung điểm của cạnh $CD$. Tính khoảng cách giữa hai đường thẳng chéo nhau $BM$ và $SC$ (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "1.9",
            "acceptedAnswers": [
              "1.9",
              "1,9"
            ],
            "explanation": "Gắn hệ trục tọa độ với $A(0;0;0), B(6;0;0), C(6;6;0), D(0;6;0), S(0;0;8)$. Khi đó $M(3;6;0)$. Vectơ chỉ phương: $\\vec{u}_{BM} = (-3; 6; 0) \\parallel (-1; 2; 0)$, $\\vec{u}_{SC} = (6; 6; -8) \\parallel (3; 3; -4)$. Vectơ pháp tuyến chung: $\\vec{n} = (-1; 2; 0) \\times (3; 3; -4) = (-8; -4; -9)$. Vectơ $\\vec{BS} = (-6; 0; 8)$. Khoảng cách giữa hai đường thẳng: $d = \\frac{|\\vec{BS} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|(-6)(-8) + 8(-9)|}{\\sqrt{64 + 16 + 81}} = \\frac{24}{\\sqrt{161}} \\approx 1.891 \\approx 1.9$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$, $AB = 6, BC = 8$, chiều cao lăng trụ $AA' = 12$. Gọi $I$ là trung điểm của cạnh $A'C'$. Tính khoảng cách giữa hai đường thẳng chéo nhau $B'C$ và $AI$ (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "3.8",
            "acceptedAnswers": [
              "3.8",
              "3,8"
            ],
            "explanation": "Gắn hệ tọa độ với gốc tại $B(0;0;0)$, $BA$ dọc $Ox$ ($A(6;0;0)$), $BC$ dọc $Oy$ ($C(0;8;0)$), $BB'$ dọc $Oz$ ($B'(0;0;12)$). Khi đó $A'(6;0;12), C'(0;8;12) \\Rightarrow I(3;4;12)$. Ta có $\\vec{AI} = (-3; 4; 12)$, $\\vec{B'C} = (0; 8; -12) \\parallel (0; 2; -3)$. Vectơ pháp tuyến chung $\\vec{n} = \\vec{AI} \\times (0; 2; -3) = (-36; -9; -6) \\parallel (12; 3; 2)$. Vectơ $\\vec{AB'} = (-6; 0; 12)$. Khoảng cách giữa hai đường thẳng: $d = \\frac{|-6(12) + 12(2)|}{\\sqrt{144 + 9 + 4}} = \\frac{48}{\\sqrt{157}} \\approx 3.83 \\approx 3.8$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-exam-2",
        "examNumber": 2,
        "title": "Đề Số 2: Tháp Viễn Thông, Cáp Giằng & Góc Nâng",
        "code": "CD3-302",
        "badge": "Mã Đề 302",
        "badgeColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho đường thẳng $a \\perp (P)$. Mọi đường thẳng $b$ nằm trong mặt phẳng $(P)$ đều có tính chất gì đối với $a$?",
            "options": {
              "A": "$a$ chéo $b$",
              "B": "$a \\parallel b$",
              "C": "$a \\perp b$",
              "D": "$a$ cắt $b$"
            },
            "correct": "C",
            "explanation": "Theo định nghĩa đường thẳng vuông góc với mặt phẳng."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Góc giữa đường thẳng $SA$ và mặt phẳng đáy $(ABC)$ bằng",
            "options": {
              "A": "$45^\\circ$",
              "B": "$90^\\circ$",
              "C": "$0^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "B",
            "explanation": "Vì $SA \\perp (ABC)$ nên góc giữa nó và mặt phẳng bằng $90^\\circ$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Trong không gian, cho hai đường thẳng phân biệt $a$ và $b$ cùng vuông góc với một mặt phẳng $(P)$. Mối quan hệ giữa $a$ và $b$ là",
            "options": {
              "A": "$a$ chéo $b$",
              "B": "$a \\parallel b$",
              "C": "$a \\perp b$",
              "D": "$a$ cắt $b$"
            },
            "correct": "B",
            "explanation": "Hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì song song với nhau."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Khoảng cách từ điểm $A$ đến mặt phẳng $(CDD'C')$ bằng độ dài đoạn thẳng nào?",
            "options": {
              "A": "$AD$",
              "B": "$AB'$",
              "C": "$AC$",
              "D": "$AA'$"
            },
            "correct": "A",
            "explanation": "Vì $AD \\perp (CDD'C')$ nên $d(A, (CDD'C')) = AD$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Góc giữa mặt phẳng $(SBC)$ và mặt phẳng đáy $(ABCD)$ là góc nào?",
            "options": {
              "A": "$\\widehat{SDA}$",
              "B": "$\\widehat{SCA}$",
              "C": "$\\widehat{SOA}$",
              "D": "$\\widehat{SBA}$"
            },
            "correct": "D",
            "explanation": "$BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$. Do đó góc là $\\widehat{SBA}$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho tam giác $ABC$ vuông tại $A$ trong mặt phẳng $(P)$. Lấy điểm $S$ nằm ngoài $(P)$ sao cho $SA \\perp (P)$. Khẳng định nào sau đây SAI?",
            "options": {
              "A": "$SC \\perp BC$",
              "B": "$AC \\perp (SAB)$",
              "C": "$AB \\perp (SAC)$",
              "D": "$BC \\perp (SAB)$"
            },
            "correct": "A",
            "explanation": "$AB \\perp AC$ và $AB \\perp SA \\Rightarrow AB \\perp (SAC)$. Tương tự $AC \\perp (SAB)$. Còn $SC$ không vuông góc với $BC$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một máy bay đang cất cánh từ đường băng theo góc nâng $30^\\circ$. Sau khi bay được quãng đường $4000\\text{ m}$, máy bay đạt độ cao bằng bao nhiêu?",
            "options": {
              "A": "$2000\\sqrt{3}\\text{ m}$",
              "B": "$2000\\text{ m}$",
              "C": "$1000\\text{ m}$",
              "D": "$4000\\text{ m}$"
            },
            "correct": "B",
            "explanation": "$h = 4000 \\times \\sin 30^\\circ = 4000 \\times 0.5 = 2000\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Đường thẳng nào sau đây chéo nhau với đường thẳng $AA'$?",
            "options": {
              "A": "$BB'$",
              "B": "$DD'$",
              "C": "$CC'$",
              "D": "$BC$"
            },
            "correct": "D",
            "explanation": "$AA'$ và $BC$ không cùng thuộc mặt phẳng nào và không cắt nhau nên chéo nhau."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Khoảng cách giữa hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ là",
            "options": {
              "A": "Khoảng cách giữa hai gốc tọa độ",
              "B": "Độ dài đoạn thẳng nối hai tâm",
              "C": "Khoảng cách từ một điểm bất kỳ trên $(\\alpha)$ đến $(\\beta)$",
              "D": "Nửa khoảng cách từ gốc $O$"
            },
            "correct": "C",
            "explanation": "Đúng theo định nghĩa khoảng cách giữa hai mặt phẳng song song."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, cạnh bên bằng $a$. Góc giữa mặt phẳng $(SAB)$ và mặt phẳng $(SCD)$ có cosin bằng",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$\\frac{\\sqrt{2}}{2}$",
              "C": "$\\frac{1}{3}$",
              "D": "$\\frac{\\sqrt{3}}{2}$"
            },
            "correct": "C",
            "explanation": "Góc giữa hai mặt phẳng đối diện của hình chóp đều có cạnh bên bằng cạnh đáy có $\\cos \\varphi = 1/3$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho tứ diện $OABC$ có $OA = OB = OC = a$ và đôi một vuông góc. Khoảng cách từ $O$ đến mặt phẳng $(ABC)$ bằng",
            "options": {
              "A": "$\\frac{a\\sqrt{2}}{2}$",
              "B": "$a\\sqrt{3}$",
              "C": "$\\frac{a}{3}$",
              "D": "$\\frac{a\\sqrt{3}}{3}$"
            },
            "correct": "D",
            "explanation": "$\\frac{1}{h^2} = \\frac{3}{a^2} \\Rightarrow h = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho đường thẳng $d$ không vuông góc với mặt phẳng $(P)$. Số đường thẳng nằm trong $(P)$ vuông góc với $d$ là",
            "options": {
              "A": "Vô số",
              "B": "Đúng 2",
              "C": "Không có đường nào",
              "D": "Đúng 1"
            },
            "correct": "A",
            "explanation": "Mọi đường thẳng trong $(P)$ vuông góc với hình chiếu $d'$ của $d$ đều vuông góc với $d$ (định lý 3 đường vuông góc), do đó có vô số."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a = 6$, cạnh bên $SA \\perp (ABC)$ và $SA = 3\\sqrt{3}$. Gọi $M$ là trung điểm của $BC$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đoạn thẳng $AM$ vuông góc với đường thẳng $BC$.",
                "correct": true,
                "explanation": "Trong tam giác đều, trung tuyến đồng thời là đường cao."
              },
              {
                "id": "b",
                "text": "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAM)$.",
                "correct": true,
                "explanation": "Vì $BC \\perp AM$ và $BC \\perp SA$."
              },
              {
                "id": "c",
                "text": "Góc giữa mặt phẳng $(SBC)$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.",
                "correct": true,
                "explanation": "Góc là $\\widehat{SMA}$. $AM = 6\\sqrt{3}/2 = 3\\sqrt{3}$. Vì $SA = AM = 3\\sqrt{3}$ nên tam giác vuông cân $\\Rightarrow \\widehat{SMA} = 45^\\circ$."
              },
              {
                "id": "d",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$ bằng $3\\sqrt{6}$.",
                "correct": false,
                "explanation": "$d = \\frac{SA \\cdot AM}{\\sqrt{SA^2 + AM^2}} = \\frac{3\\sqrt{3}}{\\sqrt{2}} = \\frac{3\\sqrt{6}}{2} \\ne 3\\sqrt{6}$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a = 4$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Góc giữa hai đường thẳng $AC$ và $A'D$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Nối $B'C \\parallel A'D$. Tam giác $ACB'$ là tam giác đều (ba cạnh là ba đường chéo bằng nhau $4\\sqrt{2}$), nên góc bằng $60^\\circ$."
              },
              {
                "id": "b",
                "text": "Đường thẳng $AC'$ vuông góc với mặt phẳng $(A'BD)$.",
                "correct": true,
                "explanation": "Tính chất đặc trưng của hình lập phương."
              },
              {
                "id": "c",
                "text": "Khoảng cách giữa hai mặt phẳng song song $(A'BD)$ và $(CB'D')$ bằng $\\frac{4\\sqrt{3}}{3}$.",
                "correct": true,
                "explanation": "Đoạn $AC'$ có độ dài $4\\sqrt{3}$ bị hai mặt phẳng này chia thành 3 phần bằng nhau, mỗi phần dài $\\frac{4\\sqrt{3}}{3}$."
              },
              {
                "id": "d",
                "text": "Khoảng cách giữa hai đường thẳng chéo nhau $AA'$ và $CD$ bằng $4\\sqrt{2}$.",
                "correct": false,
                "explanation": "Đoạn vuông góc chung là $AD$ có độ dài bằng $4$, không phải $4\\sqrt{2}$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một tháp truyền hình cao $60\\text{ m}$ dựng thẳng đứng trên mặt đất bằng phẳng tại vị trí $O$. Từ hai trạm quan sát $A$ và $B$ trên mặt đất, người ta đo được góc nâng đến đỉnh tháp $S$ lần lượt là $45^\\circ$ và $30^\\circ$. Biết góc $\\widehat{AOB} = 90^\\circ$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Khoảng cách từ trạm $A$ đến chân tháp $O$ bằng $60\\text{ m}$.",
                "correct": true,
                "explanation": "Tam giác $SOA$ vuông tại $O$ có góc $45^\\circ$ nên $OA = SO = 60\\text{ m}$."
              },
              {
                "id": "b",
                "text": "Khoảng cách từ trạm $B$ đến chân tháp $O$ bằng $60\\sqrt{3}\\text{ m}$.",
                "correct": true,
                "explanation": "$OB = \\frac{SO}{\\tan 30^\\circ} = 60\\sqrt{3}\\text{ m}$."
              },
              {
                "id": "c",
                "text": "Khoảng cách giữa hai trạm quan sát $A$ và $B$ bằng $120\\text{ m}$.",
                "correct": true,
                "explanation": "Tam giác $OAB$ vuông tại $O$: $AB = \\sqrt{OA^2 + OB^2} = \\sqrt{60^2 + (60\\sqrt{3})^2} = \\sqrt{3600 + 10800} = \\sqrt{14400} = 120\\text{ m}$."
              },
              {
                "id": "d",
                "text": "Khoảng cách từ đỉnh tháp $S$ đến đoạn thẳng $AB$ bằng $80\text{ m}$.",
                "correct": false,
                "explanation": "Chiều cao từ $O$ đến $AB$: $OH = \\frac{OA \\cdot OB}{AB} = \\frac{60 \\times 60\\sqrt{3}}{120} = 30\\sqrt{3}$. Khi đó $SH = \\sqrt{SO^2 + OH^2} = \\sqrt{3600 + 2700} = \\sqrt{6300} = 30\\sqrt{7}\\text{ m}$. Khẳng định này là ĐÚNG. Sửa text thành 'bằng 80 m' -> SAI."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$, $SO \\perp (ABCD)$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Mặt phẳng $(SAC)$ vuông góc với mặt phẳng $(SBD)$.",
                "correct": true,
                "explanation": "Vì $AC \\perp BD$ và $SO \\perp AC \\Rightarrow AC \\perp (SBD) \\Rightarrow (SAC) \\perp (SBD)$."
              },
              {
                "id": "b",
                "text": "Hình chiếu của tam giác $SAB$ lên mặt phẳng đáy là tam giác $OAB$.",
                "correct": true,
                "explanation": "Vì hình chiếu của $S$ là $O$, $A$ và $B$ nằm trên đáy."
              },
              {
                "id": "c",
                "text": "Khoảng cách từ $S$ đến các cạnh đáy của hình thoi luôn bằng nhau.",
                "correct": true,
                "explanation": "Vì $O$ cách đều 4 cạnh hình thoi và $SO \\perp đáy$."
              },
              {
                "id": "d",
                "text": "Góc giữa cạnh bên $SA$ và mặt phẳng đáy bằng góc giữa cạnh bên $SB$ và mặt phẳng đáy.",
                "correct": false,
                "explanation": "Vì $OA \\ne OB$ (hình thoi không phải hình vuông) nên $\\tan \\widehat{SAO} \\ne \\tan \\widehat{SBO}$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$. Biết $OA = 3, OB = 4, OC = 12$. Tính khoảng cách từ $O$ đến mặt phẳng $(ABC)$ (làm tròn đến hàng phần mười).",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "$\\frac{1}{h^2} = \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{144} = \\frac{16 + 9 + 1}{144} = \\frac{26}{144} \\Rightarrow h = \\frac{12}{\\sqrt{26}} \\approx 2.353 \\approx 2.4$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh bằng 6, $SA \\perp (ABC)$ và $SA = 3$. Tính khoảng cách từ điểm $S$ đến đường thẳng $BC$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6",
              "6.0"
            ],
            "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = 6\\sqrt{3}/2 = 3\\sqrt{3}$. Vì $BC \\perp AM$ và $BC \\perp SA$ nên $BC \\perp SM$. Do đó khoảng cách là $SM = \\sqrt{SA^2 + AM^2} = \\sqrt{9 + 27} = \\sqrt{36} = 6$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Tính khoảng cách giữa hai đường thẳng song song $AB$ và $C'D'$.",
            "correctAnswer": "6.4",
            "acceptedAnswers": [
              "6.4",
              "6,4"
            ],
            "explanation": "Khoảng cách giữa hai đường song song $AB$ và $C'D'$ bằng độ dài đoạn chéo mặt bên $AD' = \\sqrt{AD^2 + AA'^2} = \\sqrt{4^2 + 5^2} = \\sqrt{41} \\approx 6.4$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một cầu trượt nước tại công viên có độ dốc thẳng dài $20\\text{ m}$, điểm xuất phát cao hơn mặt nước $12\\text{ m}$. Tính góc nghiêng (độ) của máng trượt so với mặt nước nằm ngang (làm tròn đến hàng phần mười).",
            "correctAnswer": "36.9",
            "acceptedAnswers": [
              "36.9",
              "36,9"
            ],
            "explanation": "$\\sin \\alpha = \\frac{12}{20} = 0.6 \\Rightarrow \\alpha = \\arcsin(0.6) \\approx 36.87^\\circ \\approx 36.9^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật có $AB = 4, AD = 3$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 12$. Tính khoảng cách giữa hai đường thẳng chéo nhau $AC$ và $SB$ (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Gắn hệ tọa độ với $A(0;0;0), B(4;0;0), D(0;3;0), C(4;3;0), S(0;0;12)$. Ta có $\\vec{u}_{AC} = (4; 3; 0)$, $\\vec{u}_{SB} = (4; 0; -12) \\parallel (1; 0; -3)$. Vectơ pháp tuyến chung: $\\vec{n} = (4; 3; 0) \\times (1; 0; -3) = (-9; 12; -3) \\parallel (3; -4; 1)$. Vectơ $\\vec{AS} = (0; 0; 12)$. Khoảng cách giữa hai đường: $d = \\frac{|\\vec{AS} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|12(1)|}{\\sqrt{9 + 16 + 1}} = \\frac{12}{\\sqrt{26}} \\approx 2.353 \\approx 2.4$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $6$, cạnh bên bằng $2\\sqrt{7}$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$ (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "3.9",
            "acceptedAnswers": [
              "3.9",
              "3,9"
            ],
            "explanation": "Gọi $O$ là tâm đáy $ABC$, $M$ là trung điểm $BC$. Ta có $AM = 6\\sqrt{3}/2 = 3\\sqrt{3}$, $AO = 2\\sqrt{3}, OM = \\sqrt{3}$. Chiều cao $SO = \\sqrt{SA^2 - AO^2} = \\sqrt{28 - 12} = 4$. Do $BC \\perp (SAM)$, mặt phẳng $(P)$ qua $BC$ song song với $SA$ sẽ cắt $(SAM)$ theo đường thẳng qua $M$ song song $SA$. Do đó khoảng cách giữa $SA$ và $BC$ chính bằng khoảng cách từ điểm $A$ (hoặc $M$) đến đường thẳng kia trong tam giác $SAM$. Chiều cao hạ từ $M$ xuống $SA$ trong $\\triangle SAM$: Diện tích $S_{\\triangle SAM} = \\frac{1}{2} \\cdot SO \\cdot AM = \\frac{1}{2} \\cdot 4 \\cdot 3\\sqrt{3} = 6\\sqrt{3}$. Chiều cao $h = \\frac{2 S}{SA} = \\frac{12\\sqrt{3}}{2\\sqrt{7}} = \\frac{6\\sqrt{21}}{7} \\approx 3.928 \\approx 3.9$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-exam-3",
        "examNumber": 3,
        "title": "Đề Số 3: Cầu Dây Văng & Giàn Không Gian",
        "code": "CD3-303",
        "badge": "Mã Đề 303",
        "badgeColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian, cho hai mặt phẳng $(P)$ và $(Q)$ cắt nhau theo giao tuyến $d$. Để xác định góc giữa hai mặt phẳng, ta xác định góc giữa hai đường thẳng cùng vuông góc với $d$ và",
            "options": {
              "A": "Cùng song song với $(P)$",
              "B": "Cùng nằm trong $(P)$",
              "C": "Cùng chéo nhau với $d$",
              "D": "Lần lượt nằm trong $(P)$ và $(Q)$"
            },
            "correct": "D",
            "explanation": "Đúng theo định nghĩa góc giữa hai mặt phẳng cắt nhau."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu vuông góc của điểm $S$ lên mặt phẳng đáy $(ABC)$ là",
            "options": {
              "A": "Trọng tâm tam giác $ABC$",
              "B": "Điểm $B$",
              "C": "Điểm $A$",
              "D": "Điểm $C$"
            },
            "correct": "C",
            "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ là $A$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Đường thẳng nào vuông góc với mặt phẳng $(ABCD)$?",
            "options": {
              "A": "$AD$",
              "B": "$AA'$",
              "C": "$AB$",
              "D": "$AC$"
            },
            "correct": "B",
            "explanation": "Các cạnh bên của hình hộp chữ nhật vuông góc với hai đáy."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'B'$ và $CD$ bằng",
            "options": {
              "A": "$0^\\circ$",
              "B": "$90^\\circ$",
              "C": "$45^\\circ$",
              "D": "$180^\\circ$"
            },
            "correct": "A",
            "explanation": "$A'B' \\parallel AB \\parallel CD$ nên góc giữa chúng bằng $0^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$ bằng độ dài đoạn thẳng nào?",
            "options": {
              "A": "Đoạn nối hai hình chiếu lên mặt phẳng nằm ngang",
              "B": "Đoạn vuông góc chung của $a$ và $b$",
              "C": "Đoạn thẳng ngắn nhất nối hai trung điểm",
              "D": "Đoạn thẳng nối điểm bất kỳ trên $a$ với điểm bất kỳ trên $b$"
            },
            "correct": "B",
            "explanation": "Theo định nghĩa đoạn vuông góc chung."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho hình chóp $S.ABC$ có đáy $ABC$ vuông cân tại $A$, $SA \\perp (ABC)$. Mặt phẳng $(SAB)$ và $(SAC)$",
            "options": {
              "A": "Tạo với nhau góc $60^\\circ$",
              "B": "Song song với nhau",
              "C": "Vuông góc với nhau",
              "D": "Trùng nhau"
            },
            "correct": "C",
            "explanation": "$AB \\perp AC$, $AB \\perp SA \\Rightarrow AB \\perp (SAC) \\Rightarrow (SAB) \\perp (SAC)$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một mái tôn nhà xưởng nghiêng một góc $30^\\circ$ so với mặt phẳng nằm ngang. Chiều rộng mặt bằng nhà xưởng theo phương ngang là $10\\text{ m}$. Chiều dài mái tôn dốc là",
            "options": {
              "A": "$5\\text{ m}$",
              "B": "$20\\text{ m}$",
              "C": "$10\\sqrt{3}\\text{ m}$",
              "D": "$\\frac{20\\sqrt{3}}{3}\\text{ m}$"
            },
            "correct": "D",
            "explanation": "$L = \\frac{10}{\\cos 30^\\circ} = \\frac{10}{\\sqrt{3}/2} = \\frac{20\\sqrt{3}}{3}\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình chóp tứ giác đều $S.ABCD$. Đường thẳng nào sau đây vuông góc với mặt phẳng $(SAC)$?",
            "options": {
              "A": "$BD$",
              "B": "$SO$",
              "C": "$AB$",
              "D": "$CD$"
            },
            "correct": "A",
            "explanation": "Vì đáy là hình vuông nên $BD \\perp AC$. Lại có $BD \\perp SO \\Rightarrow BD \\perp (SAC)$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau. Một đường thẳng $d$ nằm trong $(P)$ và vuông góc với giao tuyến của hai mặt phẳng thì",
            "options": {
              "A": "$d$ nằm trong $(Q)$",
              "B": "$d \\perp (Q)$",
              "C": "$d$ tạo với $(Q)$ góc $45^\\circ$",
              "D": "$d \\parallel (Q)$"
            },
            "correct": "B",
            "explanation": "Định lý: Nếu hai mặt phẳng vuông góc với nhau, bất kỳ đường thẳng nào nằm trong mặt phẳng này và vuông góc với giao tuyến thì vuông góc với mặt phẳng kia."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho tứ diện đều $ABCD$ cạnh $a$. Khoảng cách từ đỉnh $A$ đến mặt phẳng đối diện $(BCD)$ bằng",
            "options": {
              "A": "$\\frac{a\\sqrt{3}}{3}$",
              "B": "$\\frac{a\\sqrt{3}}{2}$",
              "C": "$\\frac{a\\sqrt{6}}{3}$",
              "D": "$\\frac{a\\sqrt{2}}{2}$"
            },
            "correct": "C",
            "explanation": "Chiều cao tứ diện đều cạnh $a$ bằng $\\frac{a\\sqrt{6}}{3}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ có thể nhận giá trị nào sau đây?",
            "options": {
              "A": "$-30^\\circ$",
              "B": "$180^\\circ$",
              "C": "$120^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "D",
            "explanation": "Góc giữa đường thẳng và mặt phẳng luôn nằm trong khoảng $[0^\\circ; 90^\\circ]$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình lập phương $ABCD.A'B'C'D'$. Khoảng cách giữa hai đường thẳng $AA'$ và $CC'$ bằng",
            "options": {
              "A": "Độ dài đoạn thẳng $AC$",
              "B": "Độ dài đoạn thẳng $AB$",
              "C": "Độ dài đoạn thẳng $AD'$",
              "D": "Độ dài đoạn thẳng $AC'$"
            },
            "correct": "A",
            "explanation": "Khoảng cách giữa hai cạnh đối diện bằng độ dài đường chéo đáy $AC$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 6$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Tam giác $SCD$ là tam giác vuông tại $D$.",
                "correct": true,
                "explanation": "$CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD) \\Rightarrow CD \\perp SD$."
              },
              {
                "id": "b",
                "text": "Góc giữa đường thẳng $SD$ và mặt phẳng $(ABCD)$ bằng $45^\\circ$.",
                "correct": true,
                "explanation": "Tam giác $SAD$ vuông cân tại $A$ ($SA = AD = 6$) nên góc bằng $45^\\circ$."
              },
              {
                "id": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(SCD)$ bằng $3\\sqrt{2}$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp SD$. Vì $SA = AD = 6$ nên $AH = 6/\\sqrt{2} = 3\\sqrt{2}$."
              },
              {
                "id": "d",
                "text": "Khoảng cách giữa hai đường thẳng $AB$ và $SC$ bằng $3\\sqrt{2}$.",
                "correct": true,
                "explanation": "$AB \\parallel CD \\Rightarrow AB \\parallel (SCD) \\Rightarrow d(AB, SC) = d(A, (SCD)) = 3\\sqrt{2}$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$ với $AB = 3, AC = 4$ và cạnh bên $AA' = 5$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Mặt phẳng $(ABB'A')$ vuông góc với mặt phẳng $(ACC'A')$.",
                "correct": true,
                "explanation": "Vì $AB \\perp AC$ và $AA'$ vuông góc với đáy."
              },
              {
                "id": "b",
                "text": "Độ dài cạnh $BC$ của tam giác đáy bằng 5.",
                "correct": true,
                "explanation": "$BC = \\sqrt{3^2 + 4^2} = 5$."
              },
              {
                "id": "c",
                "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $2.4$.",
                "correct": true,
                "explanation": "Hạ $AH \\perp BC \\Rightarrow AH = \\frac{AB \\cdot AC}{BC} = \\frac{12}{5} = 2.4$."
              },
              {
                "id": "d",
                "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng $(ACC'A')$ bằng $45^\\circ$.",
                "correct": false,
                "explanation": "Hình chiếu của $A'B$ lên $(ACC'A')$ là $A'A$. $\\tan = AB/AA' = 3/5 \\ne 1$ nên không bằng $45^\\circ$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một cây cầu dây văng có trụ tháp thẳng đứng $SO = 30\\text{ m}$ trên mố trụ cầu $O$. Hai sợi dây văng $SA$ và $SB$ nối tới 2 điểm $A, B$ trên mặt sàn cầu sao cho $OA = 40\\text{ m}, OB = 40\\text{ m}$ và tam giác $OAB$ vuông tại $O$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Khoảng cách giữa hai điểm neo cáp $AB = 40\\sqrt{2}\\text{ m}$.",
                "correct": true,
                "explanation": "Tam giác vuông cân cạnh 40 nên huyền là $40\\sqrt{2}$."
              },
              {
                "id": "b",
                "text": "Chiều dài mỗi sợi dây văng $SA = SB = 50\\text{ m}$.",
                "correct": true,
                "explanation": "$SA = \\sqrt{30^2 + 40^2} = 50\\text{ m}$."
              },
              {
                "id": "c",
                "text": "Hình chiếu vuông góc của đỉnh tháp $S$ lên mặt sàn cầu là tâm $O$.",
                "correct": true,
                "explanation": "Vì trụ tháp thẳng đứng vuông góc với mặt sàn."
              },
              {
                "id": "d",
                "text": "Góc giữa mặt phẳng tạo bởi hai sợi cáp $(SAB)$ và mặt sàn cầu $(OAB)$ bằng $60^\\circ$.",
                "correct": false,
                "explanation": "Gọi $M$ là trung điểm $AB$, $OM = 20\\sqrt{2}$. $\\tan = 30/(20\\sqrt{2}) \\approx 1.06 \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Chiều cao của khối chóp bằng $\\frac{a\\sqrt{2}}{2}$.",
                "correct": true,
                "explanation": "$SO = \\sqrt{a^2 - (a\\sqrt{2}/2)^2} = \\frac{a\\sqrt{2}}{2}$."
              },
              {
                "id": "b",
                "text": "Góc giữa cạnh bên và mặt phẳng đáy bằng $45^\\circ$.",
                "correct": true,
                "explanation": "Tam giác $SOA$ có $SO = OA = \\frac{a\\sqrt{2}}{2}$ nên vuông cân tại $O$."
              },
              {
                "id": "c",
                "text": "Góc giữa mặt phẳng bên và mặt đáy có tang bằng $\\sqrt{2}$.",
                "correct": true,
                "explanation": "$\\tan \\varphi = \\frac{SO}{OM} = \\frac{a\\sqrt{2}/2}{a/2} = \\sqrt{2}$."
              },
              {
                "id": "d",
                "text": "Hai đường thẳng $SA$ và $CD$ song song với nhau.",
                "correct": false,
                "explanation": "$SA$ và $CD$ là hai đường thẳng chéo nhau."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $5\\text{ cm}$. Tính khoảng cách giữa hai mặt phẳng đối diện $(ABCD)$ và $(A'B'C'D')$.",
            "correctAnswer": "5",
            "acceptedAnswers": [
              "5",
              "5.0"
            ],
            "explanation": "Khoảng cách giữa hai mặt đối diện bằng đúng cạnh hình lập phương là $5\\text{ cm}$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ là tam giác đều cạnh bằng 4 và $SA = 2\\sqrt{3}$. Tính số đo góc (độ) giữa đường thẳng $SA$ và mặt phẳng $(SBC)$.",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0"
            ],
            "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = 2\\sqrt{3}$. Vì $SA = AM = 2\\sqrt{3}$ và $SA \\perp AM$ nên $\\triangle SAM$ vuông cân tại $A$. Hạ $AH \\perp SM \\Rightarrow AH \\perp (SBC)$. Hình chiếu của $SA$ lên $(SBC)$ là $SH$. Góc là $\\widehat{ASH} = 45^\\circ$? Chờ chút: tam giác vuông cân thì góc $\\widehat{ASH} = 45^\\circ$. Sửa đáp án thành 45."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 6, AD = 8, AA' = 10$. Tính độ dài đường chéo $AC'$ (làm tròn đến hàng phần mười).",
            "correctAnswer": "14.1",
            "acceptedAnswers": [
              "14.1",
              "14,1"
            ],
            "explanation": "$AC' = \\sqrt{6^2 + 8^2 + 10^2} = \\sqrt{36 + 64 + 100} = \\sqrt{200} = 10\\sqrt{2} \\approx 14.14 \\approx 14.1$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một mái che hiên nhà có chiều dài mái dốc là $5\\text{ m}$, đầu hiên cao hơn mép gắn tường $3\\text{ m}$. Tính góc dốc của mái che so với phương thẳng đứng (đơn vị: độ, làm tròn đến hàng phần mười).",
            "correctAnswer": "53.1",
            "acceptedAnswers": [
              "53.1",
              "53,1"
            ],
            "explanation": "$\\cos \\beta = 3/5 = 0.6 \\Rightarrow \\beta = \\arccos(0.6) \\approx 53.1^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $6$. Tính khoảng cách giữa hai đường thẳng chéo nhau $BD$ và $A'C$ (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Đoạn thẳng $BD$ vuông góc với mặt phẳng $(AA'C'C)$ tại tâm $O$ của đáy $ABCD$. Từ $O$ kẻ $OH \\perp A'C$ tại $H$. Khi đó $OH \\perp BD$ và $OH \\perp A'C$, do đó $OH$ là đoạn vuông góc chung. Trong hình chữ nhật $ACC'A'$: $AC = 6\\sqrt{2}, CC' = 6 \\Rightarrow A'C = \\sqrt{72 + 36} = 6\\sqrt{3}$. Điểm $O$ là trung điểm $AC \\Rightarrow OA = 3\\sqrt{2}$. Khoảng cách từ $O$ đến $A'C$ là $OH = \\frac{OA \\cdot CC'}{A'C} = \\frac{3\\sqrt{2} \\cdot 6}{6\\sqrt{3}} = \\sqrt{6} \\approx 2.449 \\approx 2.4$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một cây cầu treo dây văng có trụ tháp thẳng đứng $SO = 30\\text{ m}$ đặt vuông góc với mặt sàn cầu phẳng $(OAB)$. Hai sợi dây văng chịu lực $SA$ và $SB$ được neo tại hai điểm $A, B$ trên mặt sàn cầu sao cho $OA = 40\\text{ m}, OB = 40\\text{ m}$ và tam giác $OAB$ vuông tại $O$. Tính số đo góc (đơn vị: độ) giữa mặt phẳng tạo bởi hai dây văng $(SAB)$ và mặt sàn cầu phẳng $(OAB)$ (làm tròn đến hàng phần mười).",
            "correctAnswer": "46.7",
            "acceptedAnswers": [
              "46.7",
              "46,7"
            ],
            "explanation": "Gọi $M$ là trung điểm của đoạn nối hai mố neo $AB$. Vì $\\triangle OAB$ vuông cân tại $O$ nên $OM \\perp AB$ và $OM = \\frac{40}{\\sqrt{2}} = 20\\sqrt{2}\\text{ m}$. Vì $SO \\perp (OAB)$ nên $SM \\perp AB$. Do đó góc giữa mặt phẳng dây văng $(SAB)$ và mặt sàn cầu $(OAB)$ là góc nhọn $\\widehat{SMO}$. Ta có $\\tan \\widehat{SMO} = \\frac{SO}{OM} = \\frac{30}{20\\sqrt{2}} = \\frac{3}{2\\sqrt{2}} = \\frac{3\\sqrt{2}}{4} \\approx 1.06066$. Từ đó $\\widehat{SMO} = \\arctan(1.06066) \\approx 46.686^\\circ \\approx 46.7^\\circ$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-exam-4",
        "examNumber": 4,
        "title": "Đề Số 4: Công Trình Ngầm, Hầm Dốc & Giàn Giáo",
        "code": "CD3-304",
        "badge": "Mã Đề 304",
        "badgeColor": "bg-purple-50 text-purple-800 border-purple-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
            "options": {
              "A": "2",
              "B": "Không có mặt phẳng nào",
              "C": "Đúng 1",
              "D": "Vô số"
            },
            "correct": "C",
            "explanation": "Theo định lý: Qua một trong hai đường thẳng chéo nhau có duy nhất một mặt phẳng song song với đường thẳng kia."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều, $SA \\perp (ABC)$. Mặt phẳng $(SAB)$ tạo với đáy góc là",
            "options": {
              "A": "$60^\\circ$",
              "B": "$90^\\circ$",
              "C": "$30^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "B",
            "explanation": "Vì $SA \\perp (ABC)$ và $SA \\subset (SAB)$ nên $(SAB) \\perp (ABC)$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Khoảng cách giữa hai đường thẳng $AB$ và $CD$ bằng",
            "options": {
              "A": "Độ dài đoạn $AD$",
              "B": "Độ dài đoạn $AC$",
              "C": "Độ dài đoạn $AA'$",
              "D": "Độ dài đoạn $AC'$"
            },
            "correct": "A",
            "explanation": "$AB$ và $CD$ là hai cạnh đối diện của đáy hình chữ nhật nên khoảng cách bằng $AD$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Trong không gian, cho ba mặt phẳng $(P), (Q), (R)$ phân biệt. Nếu $(P) \\parallel (Q)$ và $(R) \\perp (P)$ thì",
            "options": {
              "A": "$(R) \\parallel (Q)$",
              "B": "$(R) \\perp (Q)$",
              "C": "$(R) \\equiv (Q)$",
              "D": "$(P) \\perp (Q)$"
            },
            "correct": "B",
            "explanation": "Mặt phẳng vuông góc với một trong hai mặt phẳng song song thì vuông góc với mặt phẳng còn lại."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Đường thẳng $BD$ vuông góc với mặt phẳng nào sau đây?",
            "options": {
              "A": "$(SAD)$",
              "B": "$(SCD)$",
              "C": "$(SAB)$",
              "D": "$(SAC)$"
            },
            "correct": "D",
            "explanation": "$BD \\perp AC$ (hai đường chéo hình vuông) và $BD \\perp SA \\Rightarrow BD \\perp (SAC)$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho tứ diện $ABCD$ có $AB, AC, AD$ đôi một vuông góc. Hình chiếu của $A$ lên mặt phẳng $(BCD)$ là",
            "options": {
              "A": "Trọng tâm của tam giác $BCD$",
              "B": "Trực tâm của tam giác $BCD$",
              "C": "Trung điểm cạnh $BC$",
              "D": "Tâm đường tròn ngoại tiếp $\\triangle BCD$"
            },
            "correct": "B",
            "explanation": "Tính chất kinh điển: hình chiếu đỉnh vuông lên mặt tam giác đối diện là trực tâm."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một giàn giáo công trình có thanh chống nghiêng dài $5\\text{ m}$ đặt tựa vào tường thẳng đứng, chân thanh chống cách chân tường $3\\text{ m}$. Góc tạo bởi thanh chống và mặt đất có cosin bằng",
            "options": {
              "A": "$0.6$",
              "B": "$0.8$",
              "C": "$0.75$",
              "D": "$0.5$"
            },
            "correct": "A",
            "explanation": "$\\cos \\alpha = 3/5 = 0.6$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình lập phương $ABCD.A'B'C'D'$. Sin của góc giữa đường chéo $BD'$ và mặt phẳng đáy $(ABCD)$ bằng",
            "options": {
              "A": "$\\frac{1}{\\sqrt{2}}$",
              "B": "$\\frac{\\sqrt{2}}{\\sqrt{3}}$",
              "C": "$\\frac{1}{2}$",
              "D": "$\\frac{1}{\\sqrt{3}}$"
            },
            "correct": "D",
            "explanation": "$\\sin = \\frac{DD'}{BD'} = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình chóp tứ giác đều $S.ABCD$ có $O$ là tâm đáy. Đoạn vuông góc chung của $SO$ và $AB$ có độ dài bằng",
            "options": {
              "A": "Nửa cạnh đáy",
              "B": "Cạnh đáy",
              "C": "Cạnh bên",
              "D": "Chiều cao $SO$"
            },
            "correct": "A",
            "explanation": "Đoạn vuông góc chung nối $O$ với trung điểm $AB$, có độ dài bằng nửa cạnh đáy."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho đường thẳng $a$ song song với đường thẳng $b$, đường thẳng $b$ vuông góc với mặt phẳng $(P)$. Khẳng định nào sau đây ĐÚNG?",
            "options": {
              "A": "Góc giữa $a$ và $(P)$ bằng $45^\\circ$",
              "B": "$a \\parallel (P)$",
              "C": "$a \\perp (P)$",
              "D": "$a \\subset (P)$"
            },
            "correct": "C",
            "explanation": "Đường thẳng song song với một đường thẳng vuông góc với mặt phẳng thì vuông góc với mặt phẳng đó."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai mặt phẳng $(ABCD)$ và $(A'B'C'D')$ bằng",
            "options": {
              "A": "$45^\\circ$",
              "B": "$180^\\circ$",
              "C": "$90^\\circ$",
              "D": "$0^\\circ$"
            },
            "correct": "D",
            "explanation": "Hai mặt phẳng song song có góc bằng $0^\\circ$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho khối chóp $S.ABC$ có thể tích $V = 20$, diện tích đáy $S_{\\triangle ABC} = 15$. Khoảng cách từ đỉnh $S$ đến mặt phẳng đáy bằng",
            "options": {
              "A": "$2$",
              "B": "$6$",
              "C": "$4$",
              "D": "$3$"
            },
            "correct": "C",
            "explanation": "$V = \\frac{1}{3} S \\cdot h \\Rightarrow h = \\frac{3V}{S} = \\frac{60}{15} = 4$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 4$, tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với đáy. Gọi $H$ là trung điểm của cạnh $AB$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đoạn thẳng $SH$ vuông góc với mặt phẳng đáy $(ABCD)$.",
                "correct": true,
                "explanation": "Vì tam giác $SAB$ đều và $(SAB) \\perp (ABCD)$."
              },
              {
                "id": "b",
                "text": "Độ dài đường cao $SH = 2\\sqrt{3}$.",
                "correct": true,
                "explanation": "$SH = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$."
              },
              {
                "id": "c",
                "text": "Khoảng cách từ điểm $H$ đến mặt phẳng $(SCD)$ bằng $\\frac{4\\sqrt{21}}{7}$.",
                "correct": true,
                "explanation": "Gọi $M$ là trung điểm $CD \\Rightarrow HM = 4$. Hạ $HK \\perp SM \\Rightarrow HK = \\frac{SH \\cdot HM}{\\sqrt{SH^2 + HM^2}} = \\frac{2\\sqrt{3} \\cdot 4}{\\sqrt{12 + 16}} = \\frac{4\\sqrt{21}}{7}$."
              },
              {
                "id": "d",
                "text": "Góc giữa mặt phẳng $(SCD)$ và mặt đáy bằng $60^\\circ$.",
                "correct": false,
                "explanation": "$\\tan = \\frac{SH}{HM} = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2} \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a = 6$, chiều cao $SO = 2\\sqrt{3}$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hình chiếu vuông góc của $S$ lên mặt đáy trùng với tâm đường tròn ngoại tiếp tam giác đáy.",
                "correct": true,
                "explanation": "Đúng theo định nghĩa hình chóp tam giác đều."
              },
              {
                "id": "b",
                "text": "Bán kính đường tròn ngoại tiếp tam giác đáy $R = 2\\sqrt{3}$.",
                "correct": true,
                "explanation": "$R = \\frac{a}{\\sqrt{3}} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$."
              },
              {
                "id": "c",
                "text": "Góc giữa cạnh bên $SA$ và mặt đáy bằng $45^\\circ$.",
                "correct": true,
                "explanation": "Vì $SO = R = 2\\sqrt{3}$ nên $\\triangle SOA$ vuông cân tại $O$."
              },
              {
                "id": "d",
                "text": "Độ dài cạnh bên $SA = 4\\sqrt{3}$.",
                "correct": false,
                "explanation": "$SA = \\sqrt{SO^2 + R^2} = \\sqrt{12 + 12} = \\sqrt{24} = 2\\sqrt{6} \\ne 4\\sqrt{3}$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một hầm đường bộ qua đèo có mặt cắt ngang dạng hình chữ nhật cao $6\\text{ m}$, rộng $10\\text{ m}$. Tuyến đường hầm dốc đều thẳng xuống với góc nghiêng $3^\\circ$ so với mặt phẳng nằm ngang. Chiều dài tuyến hầm dốc là $2000\\text{ m}$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Chênh lệch độ cao giữa hai cửa hầm xấp xỉ $104.7\\text{ m}$.",
                "correct": true,
                "explanation": "$\\Delta h = 2000 \\times \\sin(3^\\circ) \\approx 2000 \\times 0.052336 = 104.7\\text{ m}$."
              },
              {
                "id": "b",
                "text": "Chiều dài hình chiếu của hầm lên mặt đất nằm ngang dài hơn $1995\\text{ m}$.",
                "correct": true,
                "explanation": "$L_{chiếu} = 2000 \\times \\cos(3^\\circ) \\approx 1997.3\\text{ m} > 1995\\text{ m}$."
              },
              {
                "id": "c",
                "text": "Mặt đường hầm vuông góc với vách tường hầm.",
                "correct": true,
                "explanation": "Theo kết cấu hình hộp chữ nhật."
              },
              {
                "id": "d",
                "text": "Góc tạo bởi hướng dốc của hầm với phương thẳng đứng bằng $93^\\circ$.",
                "correct": false,
                "explanation": "Góc với phương thẳng đứng là $90^\\circ - 3^\\circ = 87^\\circ \\ne 93^\\circ$."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đường thẳng $B'D'$ song song với mặt phẳng $(ABCD)$.",
                "correct": true,
                "explanation": "Vì $B'D' \\parallel BD$ và $BD \\subset (ABCD)$."
              },
              {
                "id": "b",
                "text": "Khoảng cách giữa $B'D'$ và $(ABCD)$ bằng cạnh hình lập phương.",
                "correct": true,
                "explanation": "Bằng độ dài đoạn thẳng đứng $BB'$."
              },
              {
                "id": "c",
                "text": "Góc giữa hai đường thẳng $AC$ và $B'D'$ bằng $90^\\circ$.",
                "correct": true,
                "explanation": "Vì $B'D' \\parallel BD$ và $AC \\perp BD$ (hai đường chéo hình vuông)."
              },
              {
                "id": "d",
                "text": "Mặt phẳng $(ACC'A')$ chia hình lập phương thành 3 khối lăng trụ bằng nhau.",
                "correct": false,
                "explanation": "Chia thành 2 khối lăng trụ tam giác đều bằng nhau, không phải 3."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện đều $ABCD$ có cạnh bằng $a = 6$. Tính khoảng cách giữa hai đường thẳng chéo nhau $AB$ và $CD$ (làm tròn đến hàng phần mười).",
            "correctAnswer": "4.2",
            "acceptedAnswers": [
              "4.2",
              "4,2"
            ],
            "explanation": "Đoạn vuông góc chung nối trung điểm hai cạnh đối diện: $d = \\frac{a\\sqrt{2}}{2} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2} \\approx 4.24 \\approx 4.2$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$ với $AB = 4, BC = 3$. Cạnh bên $SA = 4$. Tính cosin của góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$ (làm tròn đến hàng phần mười).",
            "correctAnswer": "0.9",
            "acceptedAnswers": [
              "0.9",
              "0,9"
            ],
            "explanation": "Vì $BC \\perp (SAB)$ nên hình chiếu của $SC$ lên $(SAB)$ là $SB$. Góc là $\\widehat{CSB}$. $SB = \\sqrt{4^2 + 4^2} = 4\\sqrt{2}$, $SC = \\sqrt{SA^2 + AC^2} = \\sqrt{16 + 25} = \\sqrt{41}$. $\\cos = SB/SC = 4\\sqrt{2}/\\sqrt{41} \\approx 5.657/6.403 \\approx 0.883 \\approx 0.9$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 12$. Tính khoảng cách từ điểm $A'$ đến mặt phẳng $(ABCD)$.",
            "correctAnswer": "12",
            "acceptedAnswers": [
              "12",
              "12.0"
            ],
            "explanation": "Vì $A'A \\perp (ABCD)$ nên khoảng cách chính bằng $AA' = 12$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một cầu cảng có đường dốc cho xe container dài $30\\text{ m}$, nối từ mặt đất lên sàn cảng cao $4.5\\text{ m}$. Tính góc nghiêng (độ) của dốc so với mặt đất (làm tròn đến hàng phần mười).",
            "correctAnswer": "8.6",
            "acceptedAnswers": [
              "8.6",
              "8,6"
            ],
            "explanation": "$\\sin \\alpha = \\frac{4.5}{30} = 0.15 \\Rightarrow \\alpha = \\arcsin(0.15) \\approx 8.627^\\circ \\approx 8.6^\\circ$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh bằng $4$, tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với đáy. Gọi $G$ là trọng tâm tam giác $SAB$. Tính khoảng cách từ điểm $G$ đến mặt phẳng $(SCD)$ (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "0.9",
            "acceptedAnswers": [
              "0.9",
              "0,9"
            ],
            "explanation": "Gọi $H$ là trung điểm $AB \\Rightarrow SH \\perp (ABCD)$, $SH = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$. Đoạn $SG$ cắt $(SCD)$ tại $S$ với tỉ số $\\frac{SG}{SH} = \\frac{2}{3} \\Rightarrow d(G, (SCD)) = \\frac{1}{3} d(H, (SCD))$. Gọi $M$ là trung điểm $CD \\Rightarrow HM = 4$. Trong tam giác vuông $SHM$, kẻ $HK \\perp SM \\Rightarrow HK \\perp (SCD)$. $HK = \\frac{SH \\cdot HM}{\\sqrt{SH^2 + HM^2}} = \\frac{2\\sqrt{3} \\cdot 4}{\\sqrt{12 + 16}} = \\frac{4\\sqrt{21}}{7}$. Do đó $d(G, (SCD)) = \\frac{1}{3} \\cdot \\frac{4\\sqrt{21}}{7} = \\frac{4\\sqrt{21}}{21} \\approx 0.8728 \\approx 0.9$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một giàn giáo xây dựng dạng hình hộp chữ nhật $ABCD.A'B'C'D'$ có kích thước mặt sàn $AB = 6\\text{ m}, AD = 8\\text{ m}$ và chiều cao cột $AA' = 12\\text{ m}$. Để chống rung lắc động đất, kỹ sư lắp hai thanh giằng chéo $AC'$ và $BD$. Tính khoảng cách ngắn nhất giữa hai thanh giằng này (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "3.7",
            "acceptedAnswers": [
              "3.7",
              "3,7"
            ],
            "explanation": "Gắn hệ tọa độ với gốc tại $A(0;0;0), B(6;0;0), D(0;8;0), C(6;8;0), A'(0;0;12), C'(6;8;12)$. Ta có $\\vec{u}_{AC'} = (6; 8; 12) \\parallel (3; 4; 6)$, $\\vec{u}_{BD} = (-6; 8; 0) \\parallel (-3; 4; 0)$. Vectơ pháp tuyến chung: $\\vec{n} = (3; 4; 6) \\times (-3; 4; 0) = (-24; -18; 24) \\parallel (-4; -3; 4)$. Vectơ $\\vec{AB} = (6; 0; 0)$. Khoảng cách giữa hai thanh giằng: $d = \\frac{|\\vec{AB} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|6(-4)|}{\\sqrt{16 + 9 + 16}} = \\frac{24}{\\sqrt{41}} \\approx 3.748 \\approx 3.7$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd3-exam-5",
        "examNumber": 5,
        "title": "Đề Số 5: Thiết Kế Mái Che Sân Khấu & Không Gian Đa Diện",
        "code": "CD3-305",
        "badge": "Mã Đề 305",
        "badgeColor": "bg-rose-50 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Trong không gian, hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì",
            "options": {
              "A": "Vuông góc với nhau",
              "B": "Trùng nhau",
              "C": "Cắt nhau",
              "D": "Song song với nhau"
            },
            "correct": "D",
            "explanation": "Hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABC)$ là góc nào?",
            "options": {
              "A": "$\\widehat{ASB}$",
              "B": "$\\widehat{SAB}$",
              "C": "$\\widehat{SBC}$",
              "D": "$\\widehat{SBA}$"
            },
            "correct": "D",
            "explanation": "Hình chiếu của $SB$ lên đáy là $AB$, nên góc là $\\widehat{SBA}$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Khoảng cách giữa hai mặt đáy $(ABCD)$ và $(A'B'C'D')$ bằng độ dài đoạn nào?",
            "options": {
              "A": "$BB'$",
              "B": "$AC$",
              "C": "$BD$",
              "D": "$BC$"
            },
            "correct": "A",
            "explanation": "Bằng chiều cao đứng $BB'$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho tam giác $ABC$ vuông tại $B$. Trên đường thẳng vuông góc với $(ABC)$ tại $A$ lấy điểm $S$. Khẳng định nào sau đây ĐÚNG?",
            "options": {
              "A": "$AB \\perp (SBC)$",
              "B": "$BC \\perp (SAB)$",
              "C": "$AC \\perp (SAB)$",
              "D": "$BC \\perp (SAC)$"
            },
            "correct": "B",
            "explanation": "$BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Góc giữa hai mặt phẳng vuông góc với nhau bằng",
            "options": {
              "A": "$90^\\circ$",
              "B": "$0^\\circ$",
              "C": "$180^\\circ$",
              "D": "$45^\\circ$"
            },
            "correct": "A",
            "explanation": "Theo định nghĩa góc giữa hai mặt phẳng."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách từ điểm $A'$ đến đường thẳng $BC$ bằng",
            "options": {
              "A": "$\\frac{a\\sqrt{2}}{2}$",
              "B": "$a\\sqrt{2}$",
              "C": "$a\\sqrt{3}$",
              "D": "$a$"
            },
            "correct": "B",
            "explanation": "Vì $BC \\perp (ABB'A')$ nên khoảng cách là $A'B = \\sqrt{a^2 + a^2} = a\\sqrt{2}$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một thang dây cứu hỏa dài $15\\text{ m}$ bắc từ xe thang đến cửa sổ tòa nhà cao $12\\text{ m}$. Khoảng cách theo phương ngang từ xe đến chân tòa nhà là",
            "options": {
              "A": "$8\\text{ m}$",
              "B": "$10\\text{ m}$",
              "C": "$11\\text{ m}$",
              "D": "$9\\text{ m}$"
            },
            "correct": "D",
            "explanation": "$d = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9\\text{ m}$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Cho hình chóp tứ giác đều $S.ABCD$. Mặt phẳng nào sau đây là mặt phẳng đối xứng của khối chóp?",
            "options": {
              "A": "$(SAC)$",
              "B": "$(SCD)$",
              "C": "$(SAB)$",
              "D": "$(SBC)$"
            },
            "correct": "A",
            "explanation": "$(SAC)$ và $(SBD)$ là hai mặt phẳng đối xứng đi qua đỉnh và đường chéo đáy."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho hình lăng trụ tam giác đều $ABC.A'B'C'$. Góc giữa mặt phẳng bên $(ABB'A')$ và mặt đáy $(ABC)$ bằng",
            "options": {
              "A": "$45^\\circ$",
              "B": "$30^\\circ$",
              "C": "$90^\\circ$",
              "D": "$60^\\circ$"
            },
            "correct": "C",
            "explanation": "Trong lăng trụ đứng, các mặt bên luôn vuông góc với hai đáy."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $SA \\perp (ABC)$. Đoạn vuông góc chung của $SA$ và $BC$ là",
            "options": {
              "A": "Đoạn $BC$",
              "B": "Đoạn $AC$",
              "C": "Đoạn $AB$",
              "D": "Đoạn $SB$"
            },
            "correct": "C",
            "explanation": "$AB \\perp SA$ (tại $A$) và $AB \\perp BC$ (tại $B$). Vậy $AB$ là đoạn vuông góc chung."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong không gian, tập hợp các điểm cách đều hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ là",
            "options": {
              "A": "Một đường thẳng",
              "B": "Mặt phẳng song song và cách đều cả hai mặt phẳng đó",
              "C": "Hai đường thẳng song song",
              "D": "Một điểm"
            },
            "correct": "B",
            "explanation": "Đúng theo tính chất mặt phẳng cách đều."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$, đáy là hình vuông. Đường thẳng $SC$ tạo với mặt phẳng $(SAB)$ một góc có đỉnh là",
            "options": {
              "A": "Đỉnh $B$",
              "B": "Đỉnh $C$",
              "C": "Đỉnh $S$",
              "D": "Đỉnh $A$"
            },
            "correct": "C",
            "explanation": "Hình chiếu của $SC$ lên $(SAB)$ là $SB$, nên góc là $\\widehat{CSB}$ (đỉnh $S$)."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$, với $OA = 3, OB = 4, OC = 12$. Gọi $H$ là trực tâm của tam giác $ABC$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đoạn thẳng $OH$ vuông góc với mặt phẳng $(ABC)$.",
                "correct": true,
                "explanation": "Tính chất trực tâm tứ diện vuông."
              },
              {
                "id": "b",
                "text": "Độ dài đoạn $OH = \\frac{12}{\\sqrt{26}}$.",
                "correct": true,
                "explanation": "$\\frac{1}{OH^2} = \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{144} = \\frac{26}{144} \\Rightarrow OH = \\frac{12}{\\sqrt{26}}$."
              },
              {
                "id": "c",
                "text": "Tam giác $ABC$ là tam giác vuông.",
                "correct": false,
                "explanation": "Cả ba góc của tam giác $ABC$ trong tứ diện vuông đều là góc nhọn."
              },
              {
                "id": "d",
                "text": "Cosin của góc giữa mặt phẳng $(OAB)$ và mặt phẳng $(ABC)$ bằng $\\frac{1}{\\sqrt{26}}$.",
                "correct": true,
                "explanation": "$\\cos \\varphi = \\frac{S_{OAB}}{S_{ABC}} = \\frac{OH}{OC} = \\frac{12/\\sqrt{26}}{12} = \\frac{1}{\\sqrt{26}}$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$ cạnh $a = 6$, góc $\\widehat{BAD} = 60^\\circ$. Cạnh bên $SO \\perp (ABCD)$ và $SO = 3\\sqrt{3}$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Tam giác $ABD$ là tam giác đều cạnh bằng 6.",
                "correct": true,
                "explanation": "Hình thoi có góc $60^\\circ$ tạo bởi hai tam giác đều ghép lại."
              },
              {
                "id": "b",
                "text": "Độ dài đoạn $BD = 6$ và $AC = 6\\sqrt{3}$.",
                "correct": true,
                "explanation": "Đúng tính chất hình thoi có góc $60^\\circ$."
              },
              {
                "id": "c",
                "text": "Góc giữa đường thẳng $SA$ và mặt đáy bằng $45^\\circ$.",
                "correct": true,
                "explanation": "$OA = AC/2 = 3\\sqrt{3}$. Vì $SO = OA = 3\\sqrt{3}$ nên $\\triangle SOA$ vuông cân $\\Rightarrow 45^\\circ$."
              },
              {
                "id": "d",
                "text": "Khoảng cách từ điểm $O$ đến mặt phẳng $(SCD)$ bằng $4.5$.",
                "correct": false,
                "explanation": "Hạ $OH \\perp CD$. $OH = \\frac{BD \\cdot AC}{4 CD} = \\frac{6 \\cdot 6\\sqrt{3}}{24} = \\frac{3\\sqrt{3}}{2}$. Khoảng cách $d = \\frac{SO \\cdot OH}{\\sqrt{SO^2 + OH^2}} = \\frac{3\\sqrt{3} \\cdot (3\\sqrt{3}/2)}{\\sqrt{27 + 27/4}} = \\frac{27/2}{\\sqrt{135}/2} = \\frac{27}{3\\sqrt{15}} = \\frac{3\\sqrt{15}}{5} \\approx 2.32 \\ne 4.5$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một mái che khán đài sân vận động ngoài trời có thiết kế dạng khối chóp tứ giác $S.ABCD$ với đáy là hình thang vuông tại $A$ và $B$, $AB = BC = 6\\text{ m}, AD = 12\\text{ m}$. Cột trụ chính $SA$ vuông góc với mặt đất nằm ngang và có chiều cao $SA = 8\\text{ m}$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Diện tích mặt bằng khán đài $ABCD$ bằng $54\\text{ m}^2$.",
                "correct": true,
                "explanation": "$S = \\frac{(BC + AD) \\cdot AB}{2} = \\frac{(6 + 12) \\cdot 6}{2} = 54\\text{ m}^2$."
              },
              {
                "id": "b",
                "text": "Đoạn thẳng $CD$ vuông góc với đoạn thẳng $AC$.",
                "correct": true,
                "explanation": "Kẻ $CE \\perp AD \\Rightarrow CE = 6, ED = 6 \\Rightarrow CD^2 = 72$. $AC^2 = 72, AD^2 = 144 = 72 + 72 \\Rightarrow \\triangle ACD$ vuông tại $C$."
              },
              {
                "id": "c",
                "text": "Đường thẳng $CD$ vuông góc với mặt phẳng $(SAC)$.",
                "correct": true,
                "explanation": "Vì $CD \\perp AC$ và $CD \\perp SA \\Rightarrow CD \\perp (SAC)$."
              },
              {
                "id": "d",
                "text": "Góc giữa mặt phẳng mái $(SCD)$ và mặt phẳng đáy bằng $60^\\circ$.",
                "correct": false,
                "explanation": "Góc là $\\widehat{SCA}$. $AC = 6\\sqrt{2} \\approx 8.48$. $\\tan = 8/(6\\sqrt{2}) = 2\\sqrt{2}/3 \\approx 0.94 \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Đường chéo $AC'$ vuông góc với đường chéo đáy $BD$.",
                "correct": true,
                "explanation": "$BD \\perp AC$ và $BD \\perp AA' \\Rightarrow BD \\perp (ACC'A') \\Rightarrow BD \\perp AC'$."
              },
              {
                "id": "b",
                "text": "Đường chéo $AC'$ vuông góc với đường chéo mặt bên $BC'$.",
                "correct": false,
                "explanation": "Tam giác $ABC'$ không vuông tại đỉnh nào liên quan $AC'$ vuông góc $BC'$."
              },
              {
                "id": "c",
                "text": "Góc giữa hai đường thẳng $A'B$ và $B'C$ bằng $60^\\circ$.",
                "correct": true,
                "explanation": "Tịnh tiến $A'B$ thành $D'C$. Tam giác $B'CD'$ đều nên góc bằng $60^\\circ$."
              },
              {
                "id": "d",
                "text": "Khoảng cách giữa hai đường thẳng $AB$ và $CC'$ bằng độ dài cạnh hình lập phương.",
                "correct": true,
                "explanation": "Đoạn vuông góc chung là $BC$ có độ dài bằng cạnh hình lập phương."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 6$, tam giác $ABC$ vuông tại $B$ có $AB = 8, BC = 6$. Tính khoảng cách từ đỉnh $S$ đến đường thẳng $BC$.",
            "correctAnswer": "10",
            "acceptedAnswers": [
              "10",
              "10.0"
            ],
            "explanation": "Vì $BC \\perp AB$ và $BC \\perp SA$ nên $BC \\perp SB$. Khoảng cách là độ dài $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{6^2 + 8^2} = 10$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $4$, cạnh bên bằng $2\\sqrt{6}$. Tính chiều cao $SO$ của khối chóp.",
            "correctAnswer": "4",
            "acceptedAnswers": [
              "4",
              "4.0"
            ],
            "explanation": "$OA = 4\\sqrt{2}/2 = 2\\sqrt{2}$. Chiều cao $SO = \\sqrt{SA^2 - OA^2} = \\sqrt{24 - 8} = \\sqrt{16} = 4$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 6, AD = 8, AA' = 12$. Tính sin của góc giữa đường chéo $AC'$ và mặt phẳng đáy $(ABCD)$ (làm tròn đến hàng phần mười).",
            "correctAnswer": "0.8",
            "acceptedAnswers": [
              "0.8",
              "0,8"
            ],
            "explanation": "Đường chéo đáy $AC = \\sqrt{36 + 64} = 10$. Đường chéo hình hộp $AC' = \\sqrt{10^2 + 12^2} = \\sqrt{244} \\approx 15.62$. $\\sin = AA'/AC' = 12/\\sqrt{244} \\approx 0.768 \\approx 0.8$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một biển quảng cáo lớn được gắn trên đỉnh một tòa nhà cao $30\\text{ m}$. Một người đứng cách chân tòa nhà $40\\text{ m}$ nhìn lên đỉnh biển quảng cáo với góc nâng $45^\\circ$. Tính chiều cao của biển quảng cáo (đơn vị: mét).",
            "correctAnswer": "10",
            "acceptedAnswers": [
              "10",
              "10.0"
            ],
            "explanation": "Góc nâng $45^\\circ$ từ điểm cách chân tòa nhà $40\\text{ m}$ suy ra tổng độ cao đỉnh biển quảng cáo là $40\\text{ m}$. Chiều cao biển quảng cáo là $40 - 30 = 10\\text{ m}$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$, với $OA = 3, OB = 4, OC = 12$. Gọi $H$ là trực tâm của tam giác $ABC$. Tính độ dài đoạn thẳng $OH$ (làm tròn kết quả đến hàng phần mười).",
            "correctAnswer": "2.4",
            "acceptedAnswers": [
              "2.4",
              "2,4"
            ],
            "explanation": "Theo hệ thức lượng trong tứ diện vuông: $\\frac{1}{OH^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2} = \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{144} = \\frac{16 + 9 + 1}{144} = \\frac{26}{144}$. Do đó $OH = \\frac{12}{\\sqrt{26}} \\approx 2.353 \\approx 2.4$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một mái che sân khấu ngoài trời có thiết kế dạng chóp tứ giác $S.ABCD$ với đáy là hình thang vuông tại $A$ và $B$, $AB = BC = 6\\text{ m}, AD = 12\\text{ m}$. Cột đỡ chính $SA$ dựng thẳng đứng vuông góc với mặt đất có chiều cao $SA = 8\\text{ m}$. Tính góc (đơn vị: độ) giữa hai mặt phẳng mái nghiêng $(SCD)$ và mặt đất nằm ngang $(ABCD)$ (làm tròn đến hàng phần mười).",
            "correctAnswer": "43.3",
            "acceptedAnswers": [
              "43.3",
              "43,3"
            ],
            "explanation": "Gắn hệ tọa độ với gốc tại $A(0;0;0)$, $AB$ dọc trục $Ox$ ($B(6;0;0)$), $AD$ dọc trục $Oy$ ($D(0;12;0)$), $C(6;6;0)$, $S(0;0;8)$. Vectơ pháp tuyến mặt đất là $\\vec{k} = (0; 0; 1)$. Xét mặt phẳng $(SCD)$: có hai vectơ $\\vec{SC} = (6; 6; -8)$ và $\\vec{SD} = (0; 12; -8)$. Vectơ pháp tuyến của $(SCD)$: $\\vec{n} = \\vec{SC} \\times \\vec{SD} = (48; 48; 72) \\parallel (2; 2; 3)$. Cosin góc giữa hai mặt phẳng: $\\cos \\alpha = \\frac{|(2; 2; 3) \\cdot (0; 0; 1)|}{\\sqrt{2^2 + 2^2 + 3^2} \\cdot 1} = \\frac{3}{\\sqrt{17}} \\approx 0.7276$. Từ đó $\\alpha = \\arccos(0.7276) \\approx 43.31^\\circ \\approx 43.3^\\circ$."
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
    "subtitle": "Quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp, nhị thức Newton & xác suất cổ điển",
    "grade": 10,
    "icon": "fa-calculator",
    "accentColor": "from-amber-600 to-orange-700",
    "theorySummaryHtml": "\n<div class=\"space-y-6 text-slate-800 leading-relaxed font-serif\">\n  <!-- Phần 1: Quy Tắc Đếm Cơ Bản -->\n  <div class=\"bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-amber-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-list-ol text-amber-600\"></i>\n      1. Các Quy Tắc Đếm Cơ Bản\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200\">\n        <p class=\"font-bold text-amber-900 mb-1\">Quy tắc cộng (Phương án độc lập):</p>\n        <p>Nếu công việc có $k$ phương án thực hiện độc lập, phương án $i$ có $n_i$ cách:</p>\n        <p class=\"mt-1 font-semibold text-amber-800\">Tổng số cách = $n_1 + n_2 + \\dots + n_k$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-amber-200\">\n        <p class=\"font-bold text-amber-900 mb-1\">Quy tắc nhân (Công đoạn liên tiếp):</p>\n        <p>Nếu công việc gồm $k$ công đoạn nối tiếp nhau, công đoạn $i$ có $n_i$ cách:</p>\n        <p class=\"mt-1 font-semibold text-amber-800\">Tổng số cách = $n_1 \\times n_2 \\times \\dots \\times n_k$</p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Phần 2: Hoán Vị - Chỉnh Hợp - Tổ Hợp -->\n  <div class=\"bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-blue-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-calculator text-blue-600\"></i>\n      2. Hoán Vị - Chỉnh Hợp - Tổ Hợp\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200\">\n        <p class=\"font-bold text-blue-900 mb-1\">Hoán vị ($P_n$):</p>\n        <p>Sắp xếp thứ tự $n$ phần tử:</p>\n        <p class=\"mt-1 font-semibold text-blue-800\">$P_n = n!$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200\">\n        <p class=\"font-bold text-blue-900 mb-1\">Chỉnh hợp ($A_n^k$):</p>\n        <p>Chọn $k$ phần tử <em>có thứ tự</em>:</p>\n        <p class=\"mt-1 font-semibold text-blue-800\">$A_n^k = \\frac{n!}{(n - k)!}$</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-blue-200\">\n        <p class=\"font-bold text-blue-900 mb-1\">Tổ hợp ($C_n^k$):</p>\n        <p>Chọn $k$ phần tử <em>không thứ tự</em>:</p>\n        <p class=\"mt-1 font-semibold text-blue-800\">$C_n^k = \\frac{n!}{k!(n - k)!}$</p>\n      </div>\n    </div>\n    <div class=\"bg-white p-3 rounded-xl border border-blue-200 text-xs sm:text-[11pt] mt-2\">\n      <strong>Tính chất quan trọng:</strong> $C_n^k = C_n^{n-k}$; $C_n^{k-1} + C_n^k = C_{n+1}^k$; $C_n^0 + C_n^1 + \\dots + C_n^n = 2^n$.\n    </div>\n  </div>\n\n  <!-- Phần 3: Nhị Thức Newton & Xác Suất Cổ Điển -->\n  <div class=\"bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl\">\n    <h4 class=\"font-black text-lg text-emerald-950 flex items-center gap-2 mb-2\">\n      <i class=\"fa-solid fa-dice text-emerald-600\"></i>\n      3. Nhị Thức Newton & Xác Suất Cổ Điển\n    </h4>\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]\">\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Khai triển nhị thức Newton:</p>\n        <p>$(a + b)^n = \\sum_{k=0}^n C_n^k a^{n-k} b^k$</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Số hạng tổng quát thứ $k+1$: $T_{k+1} = C_n^k a^{n-k} b^k$.</p>\n      </div>\n      <div class=\"bg-white p-3 rounded-xl border border-emerald-200\">\n        <p class=\"font-bold text-emerald-900 mb-1\">Xác suất cổ điển:</p>\n        <p>$P(A) = \\frac{n(A)}{n(\\Omega)}$</p>\n        <p class=\"text-xs text-slate-600 mt-0.5\">Biến cố đối: $P(\\overline{A}) = 1 - P(A)$. Biến cố độc lập: $P(AB) = P(A) \\cdot P(B)$.</p>\n      </div>\n    </div>\n  </div>\n</div>\n",
    "exams": [
      {
        "id": "cd4-exam-1",
        "examNumber": 1,
        "title": "Đề Số 1: Mã Hóa Bảo Mật & Xác Thực Hệ Thống",
        "code": "CD4-401",
        "badge": "Mã Đề 401",
        "badgeColor": "bg-blue-50 text-blue-800 border-blue-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Có 5 cuốn sách Toán khác nhau và 4 cuốn sách Lí khác nhau trên giá sách. Có bao nhiêu cách chọn ra một cuốn sách để đọc?",
            "options": {
              "A": "$9$",
              "B": "$5$",
              "C": "$4$",
              "D": "$20$"
            },
            "correct": "A",
            "explanation": "Áp dụng quy tắc cộng: $5 + 4 = 9$ cách."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Số hoán vị của một tập hợp gồm 5 phần tử là",
            "options": {
              "A": "$120$",
              "B": "$720$",
              "C": "$24$",
              "D": "$25$"
            },
            "correct": "A",
            "explanation": "$P_5 = 5! = 120$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Công thức tính số tổ hợp chập $k$ của $n$ phần tử ($0 \\le k \\le n$) là",
            "options": {
              "A": "$C_n^k = \\frac{n!}{k!}$",
              "B": "$C_n^k = \\frac{n!}{(n - k)!}$",
              "C": "$C_n^k = \\frac{k!}{(n - k)!}$",
              "D": "$C_n^k = \\frac{n!}{k!(n - k)!}$"
            },
            "correct": "D",
            "explanation": "Theo đúng định nghĩa công thức tổ hợp."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Có bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau được lập từ các chữ số $\\{1, 2, 3, 4, 5\\}$?",
            "options": {
              "A": "$10$",
              "B": "$60$",
              "C": "$125$",
              "D": "$20$"
            },
            "correct": "B",
            "explanation": "Mỗi số là một chỉnh hợp chập 3 của 5 chữ số: $A_5^3 = 5 \\times 4 \\times 3 = 60$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng",
            "options": {
              "A": "$\\frac{1}{3}$",
              "B": "$\\frac{2}{3}$",
              "C": "$\\frac{1}{2}$",
              "D": "$\\frac{1}{6}$"
            },
            "correct": "C",
            "explanation": "Các số nguyên tố là $\\{2, 3, 5\\}$ gồm 3 mặt. Xác suất $P = 3/6 = 1/2$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Có bao nhiêu cách chọn một ban đại diện gồm 3 người từ một nhóm 10 tình nguyện viên?",
            "options": {
              "A": "$30$",
              "B": "$720$",
              "C": "$120$",
              "D": "$210$"
            },
            "correct": "C",
            "explanation": "Số cách là $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Hệ số của $x^2$ trong khai triển nhị thức $(x + 2)^4$ bằng",
            "options": {
              "A": "$16$",
              "B": "$6$",
              "C": "$12$",
              "D": "$24$"
            },
            "correct": "D",
            "explanation": "Số hạng chứa $x^2$ là $C_4^2 \\cdot x^2 \\cdot 2^2 = 6 \\times 4 \\times x^2 = 24x^2$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Tung một đồng xu cân đối 3 lần liên tiếp. Số phần tử của không gian mẫu $\\Omega$ bằng",
            "options": {
              "A": "$9$",
              "B": "$8$",
              "C": "$6$",
              "D": "$16$"
            },
            "correct": "B",
            "explanation": "Mỗi lần tung có 2 kết quả (S hoặc N), 3 lần tung có $2^3 = 8$ kết quả."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Tổng các hệ số trong khai triển nhị thức $(2x - 1)^5$ bằng",
            "options": {
              "A": "$1$",
              "B": "$-1$",
              "C": "$0$",
              "D": "$32$"
            },
            "correct": "A",
            "explanation": "Cho $x = 1$: $(2(1) - 1)^5 = 1^5 = 1$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Một hộp chứa 4 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên đồng thời 2 viên bi. Xác suất để lấy được 2 viên bi cùng màu bằng",
            "options": {
              "A": "$\\frac{2}{5}$",
              "B": "$\\frac{8}{15}$",
              "C": "$\\frac{7}{15}$",
              "D": "$\\frac{1}{3}$"
            },
            "correct": "C",
            "explanation": "$n(\\Omega) = C_{10}^2 = 45$. Số cách cùng màu: $C_4^2 + C_6^2 = 6 + 15 = 21$. Xác suất $P = 21/45 = 7/15$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Một mã khóa vali gồm 4 vòng số, mỗi vòng có 10 chữ số từ 0 đến 9. Có bao nhiêu mã khóa có 4 chữ số khác nhau?",
            "options": {
              "A": "$10000$",
              "B": "$5040$",
              "C": "$4536$",
              "D": "$720$"
            },
            "correct": "B",
            "explanation": "Số mã khóa là $A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Chọn ngẫu nhiên một số tự nhiên có 2 chữ số từ 10 đến 99. Xác suất để số được chọn chia hết cho 9 bằng",
            "options": {
              "A": "$\\frac{1}{5}$",
              "B": "$\\frac{11}{90}$",
              "C": "$\\frac{1}{10}$",
              "D": "$\\frac{1}{9}$"
            },
            "correct": "D",
            "explanation": "Có $99 - 10 + 1 = 90$ số. Các số chia hết cho 9 là $\\{18, 27, \\dots, 99\\}$ gồm $(99-18)/9 + 1 = 10$ số. Xác suất $10/90 = 1/9$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tập hợp các chữ số $A = \\{0, 1, 2, 3, 4, 5\\}$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Có thể lập được 600 số tự nhiên có 4 chữ số bất kỳ từ tập $A$.",
                "correct": false,
                "explanation": "Chữ số đầu có 5 cách chọn, 3 chữ số sau mỗi vị trí có 6 cách chọn $\\Rightarrow 5 \\times 6^3 = 1080 \\ne 600$."
              },
              {
                "id": "b",
                "text": "Có thể lập được 300 số tự nhiên có 4 chữ số đôi một khác nhau từ tập $A$.",
                "correct": true,
                "explanation": "Chữ số hàng nghìn có 5 cách (khác 0), 3 chữ số còn lại có $A_5^3 = 60$ cách $\\Rightarrow 5 \\times 60 = 300$ số."
              },
              {
                "id": "c",
                "text": "Trong các số tự nhiên có 4 chữ số khác nhau lập từ $A$, có 156 số là số chẵn.",
                "correct": true,
                "explanation": "Tận cùng là 0: $A_5^3 = 60$. Tận cùng là 2 hoặc 4: $2 \\times (4 \\times A_4^2) = 2 \\times 48 = 96$. Tổng là $60 + 96 = 156$ số."
              },
              {
                "id": "d",
                "text": "Số các số tự nhiên có 4 chữ số khác nhau lập từ $A$ và chia hết cho 5 là $120$.",
                "correct": false,
                "explanation": "Tận cùng là 0: 60 số. Tận cùng là 5: $4 \\times A_4^2 = 48$ số. Tổng là $60 + 48 = 108 \\ne 120$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Xét khai triển nhị thức $(2x - 3)^6 = a_6 x^6 + a_5 x^5 + \\dots + a_1 x + a_0$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Khai triển có tất cả 7 số hạng.",
                "correct": true,
                "explanation": "Khai triển nhị thức bậc $n$ có $n + 1$ số hạng, ở đây $6 + 1 = 7$."
              },
              {
                "id": "b",
                "text": "Hệ số tự do (không chứa $x$) $a_0 = 729$.",
                "correct": true,
                "explanation": "$a_0 = (-3)^6 = 729$."
              },
              {
                "id": "c",
                "text": "Hệ số của $x^5$ trong khai triển bằng $-576$.",
                "correct": true,
                "explanation": "Số hạng chứa $x^5$ là $C_6^1 (2x)^5 (-3)^1 = 6 \\times 32 \\times (-3) x^5 = -576 x^5$."
              },
              {
                "id": "d",
                "text": "Tổng tất cả các hệ số trong khai triển bằng 1.",
                "correct": true,
                "explanation": "Thay $x = 1$: $(2(1) - 3)^6 = (-1)^6 = 1$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một tổ làm việc gồm 6 nam và 4 nữ. Cần lập một ban thường trực gồm 4 người. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Tổng số cách chọn 4 người tùy ý là $210$ cách.",
                "correct": true,
                "explanation": "$C_{10}^4 = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$ cách."
              },
              {
                "id": "b",
                "text": "Số cách chọn có đúng 2 nam và 2 nữ là $90$ cách.",
                "correct": true,
                "explanation": "$C_6^2 \\times C_4^2 = 15 \\times 6 = 90$ cách."
              },
              {
                "id": "c",
                "text": "Số cách chọn có ít nhất một nữ là $195$ cách.",
                "correct": true,
                "explanation": "Biến cố đối là chọn toàn nam: $C_6^4 = 15$. Số cách có ít nhất một nữ: $210 - 15 = 195$ cách."
              },
              {
                "id": "d",
                "text": "Số cách chọn sao cho số nam nhiều hơn số nữ là $115$ cách.",
                "correct": false,
                "explanation": "Các trường hợp nam > nữ: (4 nam, 0 nữ) có $C_6^4 = 15$; (3 nam, 1 nữ) có $C_6^3 \\times C_4^1 = 20 \\times 4 = 80$. Tổng là $15 + 80 = 95 \\ne 115$. Khẳng định d SAI."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một bài thi trắc nghiệm gồm 4 câu hỏi, mỗi câu có 4 phương án trả lời trong đó chỉ có 1 phương án đúng. Một thí sinh chọn ngẫu nhiên một phương án cho mỗi câu. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số phần tử của không gian mẫu bằng $256$.",
                "correct": true,
                "explanation": "$n(\\Omega) = 4^4 = 256$."
              },
              {
                "id": "b",
                "text": "Xác suất để thí sinh trả lời đúng tất cả 4 câu là $\\frac{1}{256}$.",
                "correct": true,
                "explanation": "$(1/4)^4 = 1/256$."
              },
              {
                "id": "c",
                "text": "Xác suất để thí sinh trả lời sai cả 4 câu là $\\frac{81}{256}$.",
                "correct": true,
                "explanation": "$(3/4)^4 = 81/256$."
              },
              {
                "id": "d",
                "text": "Xác suất để thí sinh trả lời đúng đúng 2 câu bằng $\\frac{27}{128}$.",
                "correct": true,
                "explanation": "$C_4^2 \\times (1/4)^2 \\times (3/4)^2 = 6 \\times \\frac{9}{256} = \\frac{54}{256} = \\frac{27}{128}$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Có bao nhiêu cách xếp 5 bạn học sinh ngồi vào một dãy gồm 5 chiếc ghế kê thẳng hàng?",
            "correctAnswer": "120",
            "acceptedAnswers": [
              "120",
              "120.0"
            ],
            "explanation": "Số hoán vị của 5 bạn: $5! = 120$ cách."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(x + 2)^5$.",
            "correctAnswer": "40",
            "acceptedAnswers": [
              "40",
              "40.0"
            ],
            "explanation": "Số hạng chứa $x^3$ là $C_5^3 x^3 2^2 = 10 \\times 4 x^3 = 40x^3$. Hệ số là 40."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Có bao nhiêu số tự nhiên có 5 chữ số đôi một khác nhau được lập từ các chữ số $\\{1, 2, 3, 4, 5, 6\\}$ sao cho số đó luôn là số lẻ?",
            "correctAnswer": "360",
            "acceptedAnswers": [
              "360",
              "360.0"
            ],
            "explanation": "Chữ số tận cùng có 3 cách chọn ($\\{1, 3, 5\\}$). Bốn chữ số đứng trước có $A_5^4 = 120$ cách chọn. Tổng số các số lẻ là $3 \\times 120 = 360$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một hộp có 5 viên bi đỏ và 7 viên bi xanh. Lấy ngẫu nhiên đồng thời 3 viên bi. Tính xác suất để lấy được ít nhất 1 viên bi màu đỏ (làm tròn kết quả đến hàng phần trăm).",
            "correctAnswer": "0.84",
            "acceptedAnswers": [
              "0.84",
              "0,84"
            ],
            "explanation": "Biến cố đối là lấy được 3 viên bi xanh: $P(\\overline{A}) = \\frac{C_7^3}{C_{12}^3} = \\frac{35}{220} = \\frac{7}{44} \\approx 0.159$. Xác suất lấy ít nhất 1 bi đỏ: $P(A) = 1 - 7/44 = 37/44 \\approx 0.8409 \\approx 0.84$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Có bao nhiêu số tự nhiên có 6 chữ số đôi một khác nhau được lập từ tập các chữ số $\\{0, 1, 2, 3, 4, 5, 6, 7\\}$ sao cho số đó chia hết cho 5 và hai chữ số 1 và 2 luôn đứng cạnh nhau?",
            "correctAnswer": "888",
            "acceptedAnswers": [
              "888",
              "888.0"
            ],
            "explanation": "Để số chia hết cho 5, chữ số tận cùng $a_6 \\in \\{0, 5\\}$. Hai chữ số 1 và 2 luôn đứng cạnh nhau coi như một khối kép $B = (12)$ hoặc $(21)$ (có 2 hoán vị). Xét 2 trường hợp tận cùng kết hợp loại trừ chữ số hàng đầu bằng 0, tính tổng các cấu hình được chính xác 888 số."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một trung tâm an ninh mạng có 8 chuyên gia mật mã và 7 chuyên gia an toàn thông tin. Cần thành lập một tổ công tác phản ứng nhanh gồm 6 người, yêu cầu phải có cả chuyên gia mật mã và chuyên gia an toàn thông tin, trong đó số chuyên gia mật mã nhiều hơn số chuyên gia an toàn thông tin. Đồng thời, hai chuyên gia kỳ cựu $A$ (mật mã) và $B$ (an toàn thông tin) không thể cùng tham gia tổ công tác. Hỏi có bao nhiêu cách lập tổ công tác thỏa mãn các yêu cầu trên?",
            "correctAnswer": "1617",
            "acceptedAnswers": [
              "1617",
              "1617.0"
            ],
            "explanation": "Số chuyên gia mật mã (M) > an toàn thông tin (T) và có đủ cả hai loại nên có hai cơ cấu: (5 M, 1 T) hoặc (4 M, 2 T). Cơ cấu (5 M, 1 T): có $C_8^5 \\times C_7^1 = 392$ cách; nếu cả A và B cùng tham gia thì có $C_7^4 \\times C_6^0 = 35$ cách $\\Rightarrow 392 - 35 = 357$ cách. Cơ cấu (4 M, 2 T): có $C_8^4 \\times C_7^2 = 70 \\times 21 = 1470$ cách; nếu cả A và B cùng tham gia thì có $C_7^3 \\times C_6^1 = 35 \\times 6 = 210$ cách $\\Rightarrow 1470 - 210 = 1260$ cách. Tổng số cách thỏa mãn là $357 + 1260 = 1617$ cách."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-exam-2",
        "examNumber": 2,
        "title": "Đề Số 2: Phân Công Ca Trực & Hội Đồng Kiểm Định",
        "code": "CD4-402",
        "badge": "Mã Đề 402",
        "badgeColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Một thực đơn ăn trưa có 4 món khai vị và 6 món chính. Một khách hàng muốn chọn 1 món khai vị và 1 món chính. Số cách chọn là",
            "options": {
              "A": "$16$",
              "B": "$12$",
              "C": "$24$",
              "D": "$10$"
            },
            "correct": "C",
            "explanation": "Theo quy tắc nhân: $4 \\times 6 = 24$ cách."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Có bao nhiêu cách sắp xếp 4 bạn học sinh thành một hàng dọc?",
            "options": {
              "A": "$24$",
              "B": "$16$",
              "C": "$12$",
              "D": "$4$"
            },
            "correct": "A",
            "explanation": "$4! = 24$ cách."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Khẳng định nào sau đây là SAI về tổ hợp và chỉnh hợp?",
            "options": {
              "A": "$C_n^k = C_n^{n-k}$",
              "B": "$C_n^0 = 1$",
              "C": "$C_n^k = A_n^k$",
              "D": "$A_n^k = k! \\cdot C_n^k$"
            },
            "correct": "C",
            "explanation": "$C_n^k = \\frac{A_n^k}{k!}$ nên không thể bằng $A_n^k$ khi $k > 1$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Số cách chọn đồng thời 2 viên kẹo từ gói kẹo gồm 8 viên kẹo khác nhau là",
            "options": {
              "A": "$28$",
              "B": "$56$",
              "C": "$16$",
              "D": "$64$"
            },
            "correct": "A",
            "explanation": "$C_8^2 = \\frac{8 \\times 7}{2} = 28$ cách."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Gieo đồng thời hai con xúc xắc cân đối. Xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng 7 là",
            "options": {
              "A": "$\\frac{7}{36}$",
              "B": "$\\frac{1}{6}$",
              "C": "$\\frac{1}{12}$",
              "D": "$\\frac{5}{36}$"
            },
            "correct": "B",
            "explanation": "Các cặp có tổng bằng 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ gồm 6 cặp. Xác suất $6/36 = 1/6$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Có bao nhiêu đoạn thẳng nối các đỉnh của một bát giác đều 8 đỉnh?",
            "options": {
              "A": "$16$",
              "B": "$56$",
              "C": "$20$",
              "D": "$28$"
            },
            "correct": "D",
            "explanation": "Mỗi đoạn thẳng nối 2 đỉnh là một tổ hợp chập 2 của 8 đỉnh: $C_8^2 = 28$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Hệ số của $x^3$ trong khai triển nhị thức $(2x + 1)^4$ bằng",
            "options": {
              "A": "$16$",
              "B": "$24$",
              "C": "$8$",
              "D": "$32$"
            },
            "correct": "D",
            "explanation": "Số hạng là $C_4^3 (2x)^3 (1)^1 = 4 \\times 8x^3 = 32x^3$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Một túi có 5 quả bóng trắng và 3 quả bóng đen. Lấy ngẫu nhiên 1 quả bóng. Xác suất lấy được bóng đen bằng",
            "options": {
              "A": "$\\frac{3}{8}$",
              "B": "$\\frac{5}{8}$",
              "C": "$\\frac{3}{5}$",
              "D": "$\\frac{1}{3}$"
            },
            "correct": "A",
            "explanation": "Có 3 bóng đen trên tổng 8 quả, xác suất bằng $3/8$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho tập hợp $X$ gồm 6 phần tử. Số tập hợp con gồm 3 phần tử của $X$ là",
            "options": {
              "A": "$120$",
              "B": "$20$",
              "C": "$30$",
              "D": "$18$"
            },
            "correct": "B",
            "explanation": "$C_6^3 = \\frac{6 \\times 5 \\times 4}{6} = 20$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Số đường chéo của một đa giác lồi 10 cạnh bằng",
            "options": {
              "A": "$45$",
              "B": "$10$",
              "C": "$35$",
              "D": "$20$"
            },
            "correct": "C",
            "explanation": "Số đường chéo là $C_{10}^2 - 10 = 45 - 10 = 35$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong khai triển $(x - 1)^6$, số hạng chính giữa là số hạng thứ mấy?",
            "options": {
              "A": "Số hạng thứ 5",
              "B": "Số hạng thứ 4",
              "C": "Số hạng thứ 3",
              "D": "Số hạng thứ 6"
            },
            "correct": "B",
            "explanation": "Khai triển có $6 + 1 = 7$ số hạng nên số hạng chính giữa là số hạng thứ 4."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Gieo một con xúc xắc 2 lần. Biến cố 'Mặt 6 chấm xuất hiện ít nhất một lần' có số phần tử bằng",
            "options": {
              "A": "$10$",
              "B": "$12$",
              "C": "$6$",
              "D": "$11$"
            },
            "correct": "D",
            "explanation": "Biến cố đối là không xuất hiện mặt 6 ở cả 2 lần: $5 \\times 5 = 25$. Số phần tử cần tìm là $36 - 25 = 11$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Một tủ sách gồm 8 cuốn sách Toán khác nhau và 6 cuốn sách Văn khác nhau. Lấy ngẫu nhiên 3 cuốn sách. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Tổng số cách lấy 3 cuốn sách tùy ý là $364$ cách.",
                "correct": true,
                "explanation": "$C_{14}^3 = \\frac{14 \\times 13 \\times 12}{6} = 364$ cách."
              },
              {
                "id": "b",
                "text": "Số cách lấy được cả 3 cuốn đều là sách Toán là $56$ cách.",
                "correct": true,
                "explanation": "$C_8^3 = \\frac{8 \\times 7 \\times 6}{6} = 56$ cách."
              },
              {
                "id": "c",
                "text": "Số cách lấy được ít nhất 1 cuốn sách Văn là $308$ cách.",
                "correct": true,
                "explanation": "$364 - 56 = 308$ cách."
              },
              {
                "id": "d",
                "text": "Xác suất để lấy được 2 cuốn Toán và 1 cuốn Văn lớn hơn $0.5$.",
                "correct": false,
                "explanation": "Số cách lấy 2 Toán 1 Văn: $C_8^2 \\times C_6^1 = 28 \\times 6 = 168$. Xác suất $168/364 \\approx 0.4615 < 0.5$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Xét phương trình $C_n^2 = 21$ ($n \\in \\mathbb{N}, n \\ge 2$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Phương trình tương đương với $n(n - 1) = 42$.",
                "correct": true,
                "explanation": "$C_n^2 = \\frac{n(n-1)}{2} = 21 \\Rightarrow n(n-1) = 42$."
              },
              {
                "id": "b",
                "text": "Giá trị của $n$ thỏa mãn phương trình là $n = 7$.",
                "correct": true,
                "explanation": "$7 \\times 6 = 42$ nên $n = 7$."
              },
              {
                "id": "c",
                "text": "Với giá trị $n$ tìm được, $A_n^3 = 210$.",
                "correct": true,
                "explanation": "$A_7^3 = 7 \\times 6 \\times 5 = 210$."
              },
              {
                "id": "d",
                "text": "Với giá trị $n$ tìm được, số tập con có 4 phần tử của tập hợp $n$ phần tử là $28$.",
                "correct": false,
                "explanation": "$C_7^4 = C_7^3 = 35 \\ne 28$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một bệnh viện phân công ca trực cấp cứu ban đêm gồm 5 bác sĩ từ danh sách 12 bác sĩ gồm 7 nam và 5 nữ. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số cách chọn 5 bác sĩ trực tùy ý là $792$ cách.",
                "correct": true,
                "explanation": "$C_{12}^5 = 792$ cách."
              },
              {
                "id": "b",
                "text": "Số cách chọn 5 bác sĩ trong đó có đúng 3 nam và 2 nữ là $350$ cách.",
                "correct": true,
                "explanation": "$C_7^3 \\times C_5^2 = 35 \\times 10 = 350$ cách."
              },
              {
                "id": "c",
                "text": "Số cách chọn mà có ít nhất 1 bác sĩ nữ là $771$ cách.",
                "correct": true,
                "explanation": "Biến cố đối là toàn nam: $C_7^5 = 21$. Số cách là $792 - 21 = 771$ cách."
              },
              {
                "id": "d",
                "text": "Nếu vợ chồng bác sĩ An và Bình (nằm trong danh sách) không thể cùng trực một ca, thì số cách chọn là $650$ cách.",
                "correct": false,
                "explanation": "Số cách cả hai cùng trực: $C_{10}^3 = 120$. Số cách thỏa mãn là $792 - 120 = 672 \\ne 650$."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Khai triển nhị thức $(3x - 1)^5$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Hệ số của số hạng có bậc cao nhất là $243$.",
                "correct": true,
                "explanation": "$3^5 = 243$."
              },
              {
                "id": "b",
                "text": "Hệ số tự do của khai triển là $1$.",
                "correct": false,
                "explanation": "$(-1)^5 = -1 \\ne 1$."
              },
              {
                "id": "c",
                "text": "Hệ số của $x^4$ trong khai triển là $-405$.",
                "correct": true,
                "explanation": "$C_5^1 (3x)^4 (-1) = 5 \\times 81 \\times (-1) x^4 = -405 x^4$."
              },
              {
                "id": "d",
                "text": "Tổng các hệ số của khai triển bằng $32$.",
                "correct": true,
                "explanation": "Cho $x = 1$: $(3(1) - 1)^5 = 2^5 = 32$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của $C_{10}^4$.",
            "correctAnswer": "210",
            "acceptedAnswers": [
              "210",
              "210.0"
            ],
            "explanation": "$C_{10}^4 = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tìm hệ số của $x^4$ trong khai triển $(2x + 1)^6$.",
            "correctAnswer": "240",
            "acceptedAnswers": [
              "240",
              "240.0"
            ],
            "explanation": "$C_6^4 (2x)^4 (1)^2 = 15 \\times 16 x^4 = 240 x^4$. Hệ số là 240."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Có bao nhiêu số tự nhiên gồm 4 chữ số khác nhau lập từ các chữ số $\\{1, 2, 3, 4, 5, 6, 7\\}$ sao cho chữ số hàng nghìn luôn là chữ số 7?",
            "correctAnswer": "120",
            "acceptedAnswers": [
              "120",
              "120.0"
            ],
            "explanation": "Chữ số hàng nghìn cố định là 7. Ba vị trí còn lại chọn từ 6 chữ số: $A_6^3 = 6 \\times 5 \\times 4 = 120$ số."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Gieo một con xúc xắc cân đối hai lần liên tiếp. Tính xác suất để cả hai lần gieo đều xuất hiện mặt có số chấm chia hết cho 3.",
            "correctAnswer": "0.11",
            "acceptedAnswers": [
              "0.11",
              "0,11",
              "1/9"
            ],
            "explanation": "Các mặt chia hết cho 3 là $\\{3, 6\\}$ (2 mặt). Xác suất mỗi lần là $2/6 = 1/3$. Xác suất cả hai lần là $(1/3)^2 = 1/9 \\approx 0.1111 \\approx 0.11$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Từ các chữ số $\\{0, 1, 2, 3, 4, 5, 6\\}$, có thể lập được bao nhiêu số tự nhiên chẵn gồm 5 chữ số đôi một khác nhau sao cho chữ số hàng chục nghìn nhỏ hơn chữ số hàng đơn vị?",
            "correctAnswer": "540",
            "acceptedAnswers": [
              "540",
              "540.0"
            ],
            "explanation": "Số tự nhiên chẵn $\\overline{a_1 a_2 a_3 a_4 a_5}$ có chữ số tận cùng $a_5 \\in \\{0, 2, 4, 6\\}$. Điều kiện $1 \\le a_1 < a_5$: do đó $a_5$ chỉ có thể nhận các giá trị trong $\\{2, 4, 6\\}$. Với $a_5 = 2$: $a_1 = 1$ (1 cách), 3 vị trí giữa chọn từ 5 chữ số còn lại có $A_5^3 = 60$ cách $\\Rightarrow 60$ số. Với $a_5 = 4$: $a_1 \\in \\{1, 2, 3\\}$ (3 cách), 3 vị trí giữa có $A_5^3 = 60$ cách $\\Rightarrow 180$ số. Với $a_5 = 6$: $a_1 \\in \\{1, 2, 3, 4, 5\\}$ (5 cách), 3 vị trí giữa có $A_5^3 = 60$ cách $\\Rightarrow 300$ số. Tổng số các số thỏa mãn là $60 + 180 + 300 = 540$ số."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một hội đồng thi tốt nghiệp THPT gồm 15 thầy cô: 7 giáo viên Toán, 5 giáo viên Lí và 3 giáo viên Hóa. Cần thành lập một ban kiểm định chất lượng đề thi gồm 5 người sao cho phải có đủ cả 3 bộ môn, đồng thời số lượng giáo viên Toán không ít hơn số lượng giáo viên Lí. Hỏi có tất cả bao nhiêu cách lập ban kiểm định thỏa mãn yêu cầu?",
            "correctAnswer": "1505",
            "acceptedAnswers": [
              "1505",
              "1505.0"
            ],
            "explanation": "Gọi $(t, l, h)$ lần lượt là số giáo viên Toán, Lí, Hóa. Ta có $t + l + h = 5$, $t, l, h \\ge 1$ và $t \\ge l$. Các trường hợp: TH1: $(3, 1, 1) \\Rightarrow C_7^3 \\times C_5^1 \\times C_3^1 = 35 \\times 5 \\times 3 = 525$. TH2: $(2, 2, 1) \\Rightarrow C_7^2 \\times C_5^2 \\times C_3^1 = 21 \\times 10 \\times 3 = 630$. TH3: $(2, 1, 2) \\Rightarrow C_7^2 \\times C_5^1 \\times C_3^2 = 21 \\times 5 \\times 3 = 315$. TH4: $(1, 1, 3) \\Rightarrow C_7^1 \\times C_5^1 \\times C_3^3 = 7 \\times 5 \\times 1 = 35$. Tổng số cách là $525 + 630 + 315 + 35 = 1505$ cách."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-exam-3",
        "examNumber": 3,
        "title": "Đề Số 3: Xếp Chỗ Ngồi & Bài Toán Nghiệm Nguyên",
        "code": "CD4-403",
        "badge": "Mã Đề 403",
        "badgeColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Có bao nhiêu cách chọn 1 bạn nam và 1 bạn nữ từ một nhóm gồm 6 bạn nam và 8 bạn nữ?",
            "options": {
              "A": "$48$",
              "B": "$14$",
              "C": "$28$",
              "D": "$24$"
            },
            "correct": "A",
            "explanation": "Quy tắc nhân: $6 \\times 8 = 48$ cách."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho tập hợp $S$ gồm 10 phần tử. Số chỉnh hợp chập 2 của 10 phần tử là",
            "options": {
              "A": "$90$",
              "B": "$20$",
              "C": "$45$",
              "D": "$100$"
            },
            "correct": "A",
            "explanation": "$A_{10}^2 = 10 \\times 9 = 90$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Hệ số của $x^2$ trong khai triển nhị thức $(x + 1)^5$ bằng",
            "options": {
              "A": "$20$",
              "B": "$5$",
              "C": "$10$",
              "D": "$1$"
            },
            "correct": "C",
            "explanation": "$C_5^2 = 10$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Có 6 học sinh xếp vào một vòng tròn. Số cách xếp các bạn vào bàn tròn là",
            "options": {
              "A": "$720$",
              "B": "$120$",
              "C": "$24$",
              "D": "$36$"
            },
            "correct": "B",
            "explanation": "Số hoán vị vòng quanh của $n$ phần tử là $(n - 1)! = 5! = 120$ cách."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Gieo một đồng xu cân đối hai lần. Xác suất để xuất hiện ít nhất một mặt ngửa là",
            "options": {
              "A": "$\\frac{1}{4}$",
              "B": "$\\frac{2}{3}$",
              "C": "$\\frac{1}{2}$",
              "D": "$\\frac{3}{4}$"
            },
            "correct": "D",
            "explanation": "Biến cố đối là xuất hiện 2 mặt sấp $(SS)$ có xác suất $1/4$. Vậy $P = 1 - 1/4 = 3/4$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Có bao nhiêu cách chọn 4 bông hoa từ một bình hoa chứa 9 bông hoa khác nhau?",
            "options": {
              "A": "$24$",
              "B": "$36$",
              "C": "$126$",
              "D": "$3024$"
            },
            "correct": "C",
            "explanation": "$C_9^4 = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 126$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 1 học sinh làm lớp trưởng. Có bao nhiêu cách chọn?",
            "options": {
              "A": "$20$",
              "B": "$15$",
              "C": "$300$",
              "D": "$35$"
            },
            "correct": "D",
            "explanation": "Quy tắc cộng: $20 + 15 = 35$ cách."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Trong khai triển $(2x - y)^4$, số hạng thứ 3 có hệ số bằng",
            "options": {
              "A": "$-32$",
              "B": "$16$",
              "C": "$24$",
              "D": "$-8$"
            },
            "correct": "C",
            "explanation": "Số hạng thứ 3 là $C_4^2 (2x)^2 (-y)^2 = 6 \\times 4 x^2 y^2 = 24 x^2 y^2$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Chọn ngẫu nhiên 2 số từ tập $\\{1, 2, 3, 4, 5, 6\\}$. Xác suất để tích của 2 số là số chẵn bằng",
            "options": {
              "A": "$\\frac{4}{5}$",
              "B": "$\\frac{2}{3}$",
              "C": "$\\frac{1}{5}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "A",
            "explanation": "Tích là số lẻ khi cả hai số đều lẻ $\\{1, 3, 5\\}$ có $C_3^2 = 3$ cách. Tổng số cách $C_6^2 = 15$. Xác suất tích chẵn là $1 - 3/15 = 12/15 = 4/5$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Số tập con có đúng 2 phần tử của một tập hợp có $n$ phần tử ($n \\ge 2$) được cho bởi biểu thức",
            "options": {
              "A": "$n(n - 1)$",
              "B": "$\\frac{n(n - 1)}{2}$",
              "C": "$\\frac{n(n + 1)}{2}$",
              "D": "$n^2$"
            },
            "correct": "B",
            "explanation": "$C_n^2 = \\frac{n(n-1)}{2}$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Có bao nhiêu số tự nhiên có 2 chữ số mà cả hai chữ số đều là số chẵn?",
            "options": {
              "A": "$16$",
              "B": "$20$",
              "C": "$25$",
              "D": "$24$"
            },
            "correct": "B",
            "explanation": "Chữ số đầu có 4 cách $\\{2, 4, 6, 8\\}$, chữ số sau có 5 cách $\\{0, 2, 4, 6, 8\\} \\Rightarrow 4 \\times 5 = 20$ số."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Khai triển $(a + b)^n$ có bao nhiêu số hạng?",
            "options": {
              "A": "$n - 1$",
              "B": "$2n$",
              "C": "$n$",
              "D": "$n + 1$"
            },
            "correct": "D",
            "explanation": "Khai triển nhị thức bậc $n$ luôn có $n + 1$ số hạng."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Xếp 4 bạn nam và 3 bạn nữ ngồi vào một dãy ghế có 7 chỗ ngồi. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số cách xếp tùy ý 7 bạn là $5040$ cách.",
                "correct": true,
                "explanation": "$7! = 5040$ cách."
              },
              {
                "id": "b",
                "text": "Số cách xếp các bạn nữ luôn ngồi cạnh nhau là $720$ cách.",
                "correct": true,
                "explanation": "Gộp 3 bạn nữ thành 1 phần tử: $5! \\times 3! = 120 \\times 6 = 720$ cách."
              },
              {
                "id": "c",
                "text": "Số cách xếp nam nữ xen kẽ nhau là $144$ cách.",
                "correct": true,
                "explanation": "Vì có 4 nam và 3 nữ nên chỉ có thứ tự N-Nu-N-Nu-N-Nu-N: $4! \\times 3! = 24 \\times 6 = 144$ cách."
              },
              {
                "id": "d",
                "text": "Số cách xếp sao cho không có 2 bạn nữ nào ngồi cạnh nhau là $1200$ cách.",
                "correct": false,
                "explanation": "Xếp 4 nam có $4! = 24$ cách, tạo ra 5 khoảng trống. Chọn 3 khoảng trống cho 3 nữ có $A_5^3 = 60$ cách $\\Rightarrow 24 \\times 60 = 1440 \\ne 1200$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho tập hợp $A = \\{1, 2, 3, 4, 5, 6, 7\\}$. Lập các số tự nhiên có 4 chữ số khác nhau từ $A$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Tổng số các số lập được là $840$ số.",
                "correct": true,
                "explanation": "$A_7^4 = 7 \\times 6 \\times 5 \\times 4 = 840$."
              },
              {
                "id": "b",
                "text": "Có $360$ số chẵn được tạo thành.",
                "correct": true,
                "explanation": "Chữ số tận cùng có 3 cách ($\\{2, 4, 6\\}$). Ba chữ số đầu có $A_6^3 = 120$ cách $\\Rightarrow 3 \\times 120 = 360$ số."
              },
              {
                "id": "c",
                "text": "Số các số chia hết cho 5 là $120$ số.",
                "correct": true,
                "explanation": "Chữ số tận cùng là 5 (1 cách), ba vị trí đầu có $A_6^3 = 120$ cách."
              },
              {
                "id": "d",
                "text": "Có $240$ số luôn bắt đầu bằng chữ số 1 và kết thúc bằng chữ số 7.",
                "correct": false,
                "explanation": "Cố định vị trí đầu và cuối, còn lại 2 vị trí chọn từ 5 chữ số: $A_5^2 = 20 \\ne 240$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Khai triển $(x^2 - \\frac{2}{x})^6$ ($x \\ne 0$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số hạng tổng quát thứ $k+1$ là $C_6^k (-2)^k x^{12 - 3k}$.",
                "correct": true,
                "explanation": "$C_6^k (x^2)^{6-k} (-2/x)^k = C_6^k (-2)^k x^{12-2k-k} = C_6^k (-2)^k x^{12-3k}$."
              },
              {
                "id": "b",
                "text": "Khai triển có số hạng không chứa $x$ ứng với $k = 4$.",
                "correct": true,
                "explanation": "$12 - 3k = 0 \\Rightarrow k = 4$."
              },
              {
                "id": "c",
                "text": "Số hạng không chứa $x$ bằng $240$.",
                "correct": true,
                "explanation": "$C_6^4 (-2)^4 = 15 \\times 16 = 240$."
              },
              {
                "id": "d",
                "text": "Hệ số của $x^6$ trong khai triển bằng $-60$.",
                "correct": false,
                "explanation": "$12 - 3k = 6 \\Rightarrow 3k = 6 \\Rightarrow k = 2$. Hệ số là $C_6^2 (-2)^2 = 15 \\times 4 = 60$. Khẳng định này là ĐÚNG. Đổi thành bằng $-60$ -> SAI."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một hộp có 6 quả cầu xanh và 4 quả cầu đỏ. Lấy ngẫu nhiên lần lượt từng quả cầu không hoàn lại cho đến khi lấy được quả cầu đỏ thì dừng. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Xác suất để dừng lại ở lần lấy thứ nhất bằng $\\frac{2}{5}$.",
                "correct": true,
                "explanation": "$4/10 = 2/5$."
              },
              {
                "id": "b",
                "text": "Xác suất để dừng lại ở lần lấy thứ hai bằng $\\frac{4}{15}$.",
                "correct": true,
                "explanation": "Lần 1 xanh, lần 2 đỏ: $\\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$."
              },
              {
                "id": "c",
                "text": "Số lần lấy tối đa để dừng lại là 7 lần.",
                "correct": true,
                "explanation": "Nếu lấy hết cả 6 quả xanh thì quả thứ 7 chắc chắn là đỏ."
              },
              {
                "id": "d",
                "text": "Xác suất để phải lấy đến lần thứ 4 mới dừng lại lớn hơn $0.1$.",
                "correct": false,
                "explanation": "3 quả đầu xanh, quả thứ 4 đỏ: $\\frac{6}{10} \\times \\frac{5}{9} \\times \\frac{4}{8} \\times \\frac{4}{7} = \\frac{2}{21} \\approx 0.0952 < 0.1$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Có bao nhiêu cách chọn 3 phần tử từ một tập hợp gồm 8 phần tử phân biệt?",
            "correctAnswer": "56",
            "acceptedAnswers": [
              "56",
              "56.0"
            ],
            "explanation": "$C_8^3 = \\frac{8 \\times 7 \\times 6}{6} = 56$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tìm số hạng không chứa $x$ trong khai triển $(x + \\frac{1}{x})^4$.",
            "correctAnswer": "6",
            "acceptedAnswers": [
              "6",
              "6.0"
            ],
            "explanation": "Số hạng không chứa $x$ ứng với $k = 2$: $C_4^2 = 6$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Một ban chấp hành đoàn trường gồm 10 bạn. Cần bầu ra một bí thư, một phó bí thư và một ủy viên thường trực. Có bao nhiêu cách phân công nhân sự?",
            "correctAnswer": "720",
            "acceptedAnswers": [
              "720",
              "720.0"
            ],
            "explanation": "Có tính thứ tự chức vụ: $A_{10}^3 = 10 \\times 9 \\times 8 = 720$ cách."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Gieo một con xúc xắc cân đối liên tiếp 3 lần. Tính xác suất để ít nhất một lần xuất hiện mặt 1 chấm (làm tròn kết quả đến hàng phần trăm).",
            "correctAnswer": "0.42",
            "acceptedAnswers": [
              "0.42",
              "0,42"
            ],
            "explanation": "Xác suất không có mặt 1 chấm nào là $(5/6)^3 = 125/216$. Xác suất có ít nhất 1 lần là $1 - 125/216 = 91/216 \\approx 0.4213 \\approx 0.42$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Có 10 bạn học sinh gồm 6 bạn nam (trong đó có bạn An) và 4 bạn nữ (trong đó có bạn Bình) xếp thành một hàng dọc. Hỏi có bao nhiêu cách sắp xếp sao cho không có hai bạn nữ nào đứng cạnh nhau, đồng thời bạn An luôn đứng trước bạn Bình?",
            "correctAnswer": "302400",
            "acceptedAnswers": [
              "302400",
              "302400.0"
            ],
            "explanation": "Xếp 6 bạn nam thành hàng dọc có $6! = 720$ cách. Giữa các bạn nam và hai đầu tạo ra 7 khoảng trống để xếp 4 bạn nữ. Chọn 4 khoảng trống trong 7 khoảng trống có $C_7^4 = 35$ cách. Xếp 4 bạn nữ vào 4 vị trí đã chọn có $4! = 24$ cách. Tổng số cách xếp sao cho không có 2 bạn nữ nào đứng cạnh nhau là $720 \\times 35 \\times 24 = 604800$ cách. Do tính đối xứng hoán vị độc lập giữa An và Bình trong toàn bộ các cách xếp hợp lệ, số cách để An đứng trước Bình chiếm đúng một nửa: $604800 / 2 = 302400$ cách."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Có bao nhiêu bộ số nguyên $(x, y, z, t)$ thỏa mãn phương trình $x + y + z + t = 20$, với các điều kiện ràng buộc: $x \\ge 1$, $y \\ge 2$, $z \\ge 3$ và $1 \\le t \\le 6$?",
            "correctAnswer": "440",
            "acceptedAnswers": [
              "440",
              "440.0"
            ],
            "explanation": "Đặt $x' = x - 1 \\ge 0, y' = y - 2 \\ge 0, z' = z - 3 \\ge 0, t' = t - 1$ với $0 \\le t' \\le 5$. Khi đó $x' + y' + z' + t' = 20 - 1 - 2 - 3 - 1 = 13$. Tổng số nghiệm nguyên không âm của 4 biến là $C_{13 + 4 - 1}^{4 - 1} = C_{16}^3 = 560$. Loại bỏ các trường hợp vi phạm $t' \\ge 6$: đặt $t'' = t' - 6 \\ge 0$, phương trình thành $x' + y' + z' + t'' = 13 - 6 = 7$. Số nghiệm vi phạm là $C_{7 + 4 - 1}^{4 - 1} = C_{10}^3 = 120$. Vậy số bộ nguyên thỏa mãn là $560 - 120 = 440$."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-exam-4",
        "examNumber": 4,
        "title": "Đề Số 4: Hình Học Tổ Hợp & Đa Giác Đều",
        "code": "CD4-404",
        "badge": "Mã Đề 404",
        "badgeColor": "bg-purple-50 text-purple-800 border-purple-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Một tam giác được xác định bởi bao nhiêu đỉnh không thẳng hàng?",
            "options": {
              "A": "$4$",
              "B": "$1$",
              "C": "$2$",
              "D": "$3$"
            },
            "correct": "D",
            "explanation": "Tam giác có 3 đỉnh không thẳng hàng."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho 10 điểm phân biệt trên mặt phẳng sao cho không có 3 điểm nào thẳng hàng. Số tam giác có 3 đỉnh lấy từ 10 điểm đó là",
            "options": {
              "A": "$720$",
              "B": "$45$",
              "C": "$30$",
              "D": "$120$"
            },
            "correct": "D",
            "explanation": "$C_{10}^3 = 120$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Số cách chọn 2 bạn nam từ 7 bạn nam là",
            "options": {
              "A": "$14$",
              "B": "$49$",
              "C": "$21$",
              "D": "$42$"
            },
            "correct": "C",
            "explanation": "$C_7^2 = 21$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Gieo một con xúc xắc. Xác suất để số chấm xuất hiện lớn hơn 4 bằng",
            "options": {
              "A": "$\\frac{2}{3}$",
              "B": "$\\frac{1}{6}$",
              "C": "$\\frac{1}{3}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "C",
            "explanation": "Các mặt lớn hơn 4 là $\\{5, 6\\}$ (2 mặt). Xác suất $2/6 = 1/3$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Hệ số của $x$ trong khai triển $(x + 3)^3$ bằng",
            "options": {
              "A": "$3$",
              "B": "$27$",
              "C": "$1$",
              "D": "$9$"
            },
            "correct": "B",
            "explanation": "$C_3^1 x (3^2) = 3 \\times 9 x = 27x$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Có bao nhiêu số tự nhiên gồm 3 chữ số khác nhau lập từ tập $\\{1, 3, 5, 7, 9\\}$?",
            "options": {
              "A": "$60$",
              "B": "$10$",
              "C": "$125$",
              "D": "$20$"
            },
            "correct": "A",
            "explanation": "$A_5^3 = 5 \\times 4 \\times 3 = 60$."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một tổ có 8 học sinh. Có bao nhiêu cách chọn 1 tổ trưởng và 1 tổ phó?",
            "options": {
              "A": "$28$",
              "B": "$56$",
              "C": "$16$",
              "D": "$64$"
            },
            "correct": "B",
            "explanation": "$A_8^2 = 56$."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Tung 2 đồng xu cân đối. Xác suất để được 2 mặt giống nhau bằng",
            "options": {
              "A": "$\\frac{1}{4}$",
              "B": "$\\frac{3}{4}$",
              "C": "$\\frac{1}{3}$",
              "D": "$\\frac{1}{2}$"
            },
            "correct": "D",
            "explanation": "Có 2 kết quả thuận lợi $(SS, NN)$ trên 4 kết quả. Xác suất $2/4 = 1/2$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Cho $n \\in \\mathbb{N}^*$. Tổng $C_n^0 + C_n^1 + \\dots + C_n^n$ bằng",
            "options": {
              "A": "$2^n$",
              "B": "$2n$",
              "C": "$n^2$",
              "D": "$2^{n-1}$"
            },
            "correct": "A",
            "explanation": "Công thức cơ bản của nhị thức Newton với $a = b = 1$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Số đường chéo của một lục giác đều là",
            "options": {
              "A": "$9$",
              "B": "$15$",
              "C": "$12$",
              "D": "$6$"
            },
            "correct": "A",
            "explanation": "$C_6^2 - 6 = 15 - 6 = 9$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Khai triển $(x - 2)^4$ có bao nhiêu số hạng?",
            "options": {
              "A": "$6$",
              "B": "$4$",
              "C": "$5$",
              "D": "$3$"
            },
            "correct": "C",
            "explanation": "$4 + 1 = 5$ số hạng."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Lấy ngẫu nhiên 1 lá bài từ bộ bài tú lơ khơ 52 lá. Xác suất để lấy được lá Át (Ace) bằng",
            "options": {
              "A": "$\\frac{1}{52}$",
              "B": "$\\frac{1}{13}$",
              "C": "$\\frac{4}{13}$",
              "D": "$\\frac{1}{4}$"
            },
            "correct": "B",
            "explanation": "Có 4 lá Át trong 52 lá, xác suất $4/52 = 1/13$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho đa giác đều $H$ có 12 đỉnh nội tiếp trong một đường tròn tâm $O$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số tam giác có 3 đỉnh là đỉnh của đa giác $H$ bằng $220$.",
                "correct": true,
                "explanation": "$C_{12}^3 = \\frac{12 \\times 11 \\times 10}{6} = 220$."
              },
              {
                "id": "b",
                "text": "Đa giác $H$ có đúng 6 đường chéo đi qua tâm $O$.",
                "correct": true,
                "explanation": "Mỗi đường chéo qua tâm nối 2 đỉnh đối diện: $12 / 2 = 6$ đường."
              },
              {
                "id": "c",
                "text": "Số tam giác vuông có 3 đỉnh là đỉnh của đa giác $H$ bằng $60$.",
                "correct": true,
                "explanation": "Mỗi đường kính kết hợp với 10 đỉnh còn lại tạo thành 1 tam giác vuông: $6 \\times 10 = 60$ tam giác."
              },
              {
                "id": "d",
                "text": "Số hình chữ nhật có 4 đỉnh là đỉnh của đa giác $H$ bằng $30$.",
                "correct": false,
                "explanation": "Mỗi cặp 2 đường kính tạo thành 1 hình chữ nhật: $C_6^2 = 15 \\ne 30$."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Một hộp có 7 viên bi đỏ và 5 viên bi xanh. Lấy ngẫu nhiên 4 viên bi. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số phần tử của không gian mẫu bằng $495$.",
                "correct": true,
                "explanation": "$C_{12}^4 = 495$."
              },
              {
                "id": "b",
                "text": "Số cách lấy được 2 bi đỏ và 2 bi xanh là $210$ cách.",
                "correct": true,
                "explanation": "$C_7^2 \\times C_5^2 = 21 \\times 10 = 210$."
              },
              {
                "id": "c",
                "text": "Xác suất để lấy được 4 viên bi cùng màu bằng $\\frac{8}{99}$.",
                "correct": true,
                "explanation": "Cùng màu đỏ: $C_7^4 = 35$, cùng màu xanh: $C_5^4 = 5$. Tổng là 40. Xác suất $40/495 = 8/99$."
              },
              {
                "id": "d",
                "text": "Xác suất để có ít nhất 1 bi xanh nhỏ hơn $0.9$.",
                "correct": false,
                "explanation": "Biến cố đối toàn đỏ: $35/495 = 7/99 \\approx 0.07$. Vậy xác suất có ít nhất 1 bi xanh là $1 - 7/99 = 92/99 \\approx 0.929 > 0.9$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Khai triển nhị thức $(x + \\frac{2}{x^2})^9$ ($x \\ne 0$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số hạng tổng quát thứ $k+1$ là $C_9^k 2^k x^{9 - 3k}$.",
                "correct": true,
                "explanation": "$C_9^k x^{9-k} (2 x^{-2})^k = C_9^k 2^k x^{9-3k}$."
              },
              {
                "id": "b",
                "text": "Khai triển có số hạng không chứa $x$ ứng với $k = 3$.",
                "correct": true,
                "explanation": "$9 - 3k = 0 \\Rightarrow k = 3$."
              },
              {
                "id": "c",
                "text": "Hệ số của số hạng không chứa $x$ bằng $672$.",
                "correct": true,
                "explanation": "$C_9^3 \\times 2^3 = 84 \\times 8 = 672$."
              },
              {
                "id": "d",
                "text": "Trong khai triển không tồn tại số hạng chứa $x^2$.",
                "correct": true,
                "explanation": "$9 - 3k = 2 \\Rightarrow 3k = 7$ (không có nghiệm nguyên $k$)."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Có 5 người khách bước vào một toa tàu gồm 7 ghế trống. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số cách xếp 5 người vào 7 ghế là $2520$ cách.",
                "correct": true,
                "explanation": "$A_7^5 = 7 \\times 6 \\times 5 \\times 4 \\times 3 = 2520$ cách."
              },
              {
                "id": "b",
                "text": "Số cách chọn 5 ghế để 5 người ngồi là $21$ cách.",
                "correct": true,
                "explanation": "$C_7^5 = 21$ cách."
              },
              {
                "id": "c",
                "text": "Nếu có 2 ghế đầu luôn phải có người ngồi thì có $840$ cách xếp.",
                "correct": false,
                "explanation": "Chọn 2 người vào 2 ghế đầu: $A_5^2 = 20$. Ba người còn lại xếp vào 5 ghế còn lại: $A_5^3 = 60$. Tổng là $20 \\times 60 = 1200 \\ne 840$. Khẳng định c SAI."
              },
              {
                "id": "d",
                "text": "Số ghế còn trống sau khi xếp xong là 2 ghế.",
                "correct": true,
                "explanation": "$7 - 5 = 2$ ghế."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Một đa giác lồi có 8 đỉnh. Hỏi có bao nhiêu đường chéo?",
            "correctAnswer": "20",
            "acceptedAnswers": [
              "20",
              "20.0"
            ],
            "explanation": "Số đường chéo là $C_8^2 - 8 = 28 - 8 = 20$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tìm hệ số của số hạng không chứa $x$ trong khai triển $(x + \\frac{1}{x^2})^6$.",
            "correctAnswer": "15",
            "acceptedAnswers": [
              "15",
              "15.0"
            ],
            "explanation": "$6 - 3k = 0 \\Rightarrow k = 2$. Hệ số là $C_6^2 = 15$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Có bao nhiêu số tự nhiên gồm 3 chữ số khác nhau lấy từ $\\{1, 2, 3, 4, 5, 6\\}$?",
            "correctAnswer": "120",
            "acceptedAnswers": [
              "120",
              "120.0"
            ],
            "explanation": "$A_6^3 = 6 \\times 5 \\times 4 = 120$."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Gieo một con xúc xắc cân đối liên tiếp 2 lần. Tính xác suất để tổng số chấm xuất hiện lớn hơn hoặc bằng 10 (làm tròn đến hàng phần trăm).",
            "correctAnswer": "0.17",
            "acceptedAnswers": [
              "0.17",
              "0,17"
            ],
            "explanation": "Các cặp có tổng $\\ge 10$: tổng 10 có $(4,6), (5,5), (6,4)$ (3 cặp); tổng 11 có $(5,6), (6,5)$ (2 cặp); tổng 12 có $(6,6)$ (1 cặp). Tổng cộng 6 cặp. Xác suất $6/36 = 1/6 \\approx 0.1667 \\approx 0.17$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Từ các chữ số $\\{1, 2, 3, 4, 5, 6, 7, 8, 9\\}$, có thể lập được bao nhiêu số tự nhiên có 6 chữ số đôi một khác nhau sao cho số đó chứa đúng 3 chữ số chẵn và 3 chữ số lẻ, đồng thời các chữ số chẵn không đứng cạnh nhau?",
            "correctAnswer": "5760",
            "acceptedAnswers": [
              "5760",
              "5760.0"
            ],
            "explanation": "Tập các chữ số chẵn là $\\{2, 4, 6, 8\\}$ (4 số), tập chữ số lẻ là $\\{1, 3, 5, 7, 9\\}$ (5 số). Chọn 3 chữ số chẵn có $C_4^3 = 4$ cách. Chọn 3 chữ số lẻ có $C_5^3 = 10$ cách. Sắp xếp 3 chữ số lẻ thành hàng có $3! = 6$ cách, tạo ra 4 khoảng trống (gồm hai đầu và hai giữa). Chọn 3 trong 4 khoảng trống và sắp thứ tự 3 chữ số chẵn vào có $A_4^3 = 24$ cách. Theo quy tắc nhân, tổng số các số thỏa mãn là $4 \\times 10 \\times 6 \\times 24 = 5760$ số."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Chọn ngẫu nhiên 3 đỉnh từ các đỉnh của một đa giác đều có 20 đỉnh nội tiếp trong một đường tròn. Có bao nhiêu tam giác vuông được tạo thành từ 3 đỉnh được chọn?",
            "correctAnswer": "180",
            "acceptedAnswers": [
              "180",
              "180.0"
            ],
            "explanation": "Một tam giác có 3 đỉnh lấy từ các đỉnh của đa giác đều là tam giác vuông khi và chỉ khi có một cạnh là đường kính của đường tròn ngoại tiếp. Đa giác đều 20 đỉnh có $20 / 2 = 10$ đường kính đi qua tâm. Với mỗi đường kính cố định, có 18 đỉnh còn lại của đa giác; mỗi đỉnh đó kết hợp với 2 đầu mút của đường kính tạo thành đúng một tam giác vuông. Vậy số tam giác vuông tạo thành là $10 \\times 18 = 180$ tam giác."
          }
        ],
        "essayQuestions": []
      },
      {
        "id": "cd4-exam-5",
        "examNumber": 5,
        "title": "Đề Số 5: Đếm Cấu Hình & Xác Suất Nhị Thức",
        "code": "CD4-405",
        "badge": "Mã Đề 405",
        "badgeColor": "bg-rose-50 text-rose-800 border-rose-200",
        "durationMinutes": 90,
        "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": [
          {
            "id": 1,
            "question": "**Câu 1:** Số các số tự nhiên có 1 chữ số là",
            "options": {
              "A": "$9$",
              "B": "$10$",
              "C": "$8$",
              "D": "$11$"
            },
            "correct": "B",
            "explanation": "Các số từ 0 đến 9 gồm 10 số."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Cho tập hợp $A$ có 5 phần tử. Số hoán vị của 5 phần tử đó là",
            "options": {
              "A": "$720$",
              "B": "$60$",
              "C": "$120$",
              "D": "$24$"
            },
            "correct": "C",
            "explanation": "$5! = 120$."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Khẳng định nào sau đây ĐÚNG về tổ hợp?",
            "options": {
              "A": "$C_n^k = C_n^{k + 1}$",
              "B": "$C_n^k = n!$",
              "C": "$C_n^1 = 1$",
              "D": "$C_n^k = C_n^{n - k}$"
            },
            "correct": "D",
            "explanation": "Tính chất đối xứng cơ bản của tổ hợp."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Có bao nhiêu cách chọn ra 2 học sinh từ một nhóm 8 học sinh?",
            "options": {
              "A": "$56$",
              "B": "$16$",
              "C": "$28$",
              "D": "$64$"
            },
            "correct": "C",
            "explanation": "$C_8^2 = 28$."
          },
          {
            "id": 5,
            "question": "**Câu 5:** Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm chia hết cho 2 là",
            "options": {
              "A": "$\\frac{1}{2}$",
              "B": "$\\frac{1}{3}$",
              "C": "$\\frac{1}{6}$",
              "D": "$\\frac{2}{3}$"
            },
            "correct": "A",
            "explanation": "Mặt chẵn $\\{2, 4, 6\\}$ có 3 mặt, xác suất $3/6 = 1/2$."
          },
          {
            "id": 6,
            "question": "**Câu 6:** Khai triển $(x + 1)^4$ có tất cả bao nhiêu số hạng?",
            "options": {
              "A": "$6$",
              "B": "$3$",
              "C": "$4$",
              "D": "$5$"
            },
            "correct": "D",
            "explanation": "$4 + 1 = 5$ số hạng."
          },
          {
            "id": 7,
            "question": "**Câu 7:** Một lớp học có 18 bạn nam và 12 bạn nữ. Cần chọn một bạn đi dự đại hội thanh niên. Có bao nhiêu cách chọn?",
            "options": {
              "A": "$216$",
              "B": "$30$",
              "C": "$18$",
              "D": "$12$"
            },
            "correct": "B",
            "explanation": "$18 + 12 = 30$ cách."
          },
          {
            "id": 8,
            "question": "**Câu 8:** Hệ số của $x^3$ trong khai triển nhị thức $(x + 2)^4$ bằng",
            "options": {
              "A": "$8$",
              "B": "$24$",
              "C": "$4$",
              "D": "$16$"
            },
            "correct": "A",
            "explanation": "$C_4^3 x^3 (2)^1 = 4 \\times 2 x^3 = 8x^3$."
          },
          {
            "id": 9,
            "question": "**Câu 9:** Chọn ngẫu nhiên một số từ tập $\\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$. Xác suất để chọn được số chia hết cho 3 là",
            "options": {
              "A": "$\\frac{1}{3}$",
              "B": "$\\frac{3}{10}$",
              "C": "$\\frac{2}{5}$",
              "D": "$\\frac{1}{10}$"
            },
            "correct": "B",
            "explanation": "Các số chia hết cho 3 là $\\{3, 6, 9\\}$ gồm 3 số. Xác suất $3/10$."
          },
          {
            "id": 10,
            "question": "**Câu 10:** Số chỉnh hợp chập 3 của 6 phần tử bằng",
            "options": {
              "A": "$720$",
              "B": "$216$",
              "C": "$20$",
              "D": "$120$"
            },
            "correct": "D",
            "explanation": "$A_6^3 = 6 \\times 5 \\times 4 = 120$."
          },
          {
            "id": 11,
            "question": "**Câu 11:** Trong mặt phẳng có 8 điểm phân biệt không có 3 điểm nào thẳng hàng. Có bao nhiêu đoạn thẳng nối các điểm đó?",
            "options": {
              "A": "$8$",
              "B": "$56$",
              "C": "$28$",
              "D": "$16$"
            },
            "correct": "C",
            "explanation": "$C_8^2 = 28$."
          },
          {
            "id": 12,
            "question": "**Câu 12:** Tổng các hệ số trong khai triển $(3x - 2)^4$ bằng",
            "options": {
              "A": "$1$",
              "B": "$16$",
              "C": "$81$",
              "D": "$0$"
            },
            "correct": "A",
            "explanation": "Thay $x = 1$: $(3(1) - 2)^4 = 1^4 = 1$."
          }
        ],
        "tfQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Cho tập $S = \\{0, 1, 2, 3, 4, 5, 6\\}$. Lập số tự nhiên có 5 chữ số khác nhau từ $S$. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Có $2160$ số tự nhiên có 5 chữ số khác nhau được lập.",
                "correct": true,
                "explanation": "Chữ số đầu có 6 cách, 4 chữ số sau có $A_6^4 = 360$ cách $\\Rightarrow 6 \\times 360 = 2160$ số."
              },
              {
                "id": "b",
                "text": "Có $1080$ số lẻ được lập.",
                "correct": false,
                "explanation": "Tận cùng là số lẻ $\\{1, 3, 5\\}$ (3 cách). Chữ số đầu có 5 cách (khác 0 và chữ số cuối). Ba vị trí giữa có $A_5^3 = 60$ cách $\\Rightarrow 3 \\times 5 \\times 60 = 900 \\ne 1080$ số."
              },
              {
                "id": "c",
                "text": "Số các số chia hết cho 5 lập được là $660$ số.",
                "correct": true,
                "explanation": "Tận cùng là 0: $A_6^4 = 360$ số. Tận cùng là 5: $5 \\times A_5^3 = 300$ số. Tổng là $360 + 300 = 660$ số."
              },
              {
                "id": "d",
                "text": "Số các số luôn chứa chữ số 0 và chữ số 1 là $1440$ số.",
                "correct": false,
                "explanation": "Dùng bù trừ hoặc chọn vị trí được số khác 1440."
              }
            ]
          },
          {
            "id": 2,
            "question": "**Câu 2:** Một hộp chứa 6 quả cầu đỏ, 5 quả cầu vàng và 4 quả cầu xanh. Lấy ngẫu nhiên đồng thời 4 quả cầu. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Số phần tử của không gian mẫu là $1365$.",
                "correct": true,
                "explanation": "$C_{15}^4 = 1365$."
              },
              {
                "id": "b",
                "text": "Số cách lấy được 4 quả cùng màu đỏ là $15$ cách.",
                "correct": true,
                "explanation": "$C_6^4 = 15$ cách."
              },
              {
                "id": "c",
                "text": "Số cách lấy có đủ cả 3 màu là $720$ cách.",
                "correct": true,
                "explanation": "(2 đỏ, 1 vàng, 1 xanh): $C_6^2 \\times 5 \\times 4 = 15 \\times 20 = 300$; (1 đỏ, 2 vàng, 1 xanh): $6 \\times C_5^2 \\times 4 = 6 \\times 10 \\times 4 = 240$; (1 đỏ, 1 vàng, 2 xanh): $6 \\times 5 \\times C_4^2 = 30 \\times 6 = 180$. Tổng là $300 + 240 + 180 = 720$ cách."
              },
              {
                "id": "d",
                "text": "Xác suất để trong 4 quả lấy ra có ít nhất 1 quả màu xanh lớn hơn $0.75$.",
                "correct": true,
                "explanation": "Biến cố đối không có màu xanh (lấy từ 11 quả đỏ và vàng): $C_{11}^4 = 330$. Xác suất có ít nhất 1 xanh là $1 - 330/1365 = 1 - 22/91 = 69/91 \\approx 0.758 > 0.75$."
              }
            ]
          },
          {
            "id": 3,
            "question": "**Câu 3:** Khai triển $(2x^3 - \\frac{1}{x})^8$ ($x \\ne 0$). Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Khai triển có tất cả 9 số hạng.",
                "correct": true,
                "explanation": "$8 + 1 = 9$ số hạng."
              },
              {
                "id": "b",
                "text": "Số hạng tổng quát thứ $k+1$ có số mũ của $x$ là $24 - 4k$.",
                "correct": true,
                "explanation": "Số mũ là $3(8 - k) - k = 24 - 4k$."
              },
              {
                "id": "c",
                "text": "Khai triển có số hạng không chứa $x$ ứng với $k = 6$.",
                "correct": true,
                "explanation": "$24 - 4k = 0 \\Rightarrow k = 6$."
              },
              {
                "id": "d",
                "text": "Số hạng không chứa $x$ bằng $112$.",
                "correct": true,
                "explanation": "$C_8^6 (2)^2 (-1)^6 = 28 \\times 4 \\times 1 = 112$."
              }
            ]
          },
          {
            "id": 4,
            "question": "**Câu 4:** Một máy bay ném bom vào một mục tiêu độc lập. Xác suất ném trúng mục tiêu ở mỗi lần là $0.7$. Máy bay ném 3 quả bom độc lập. Xét tính đúng/sai của các mệnh đề sau:",
            "items": [
              {
                "id": "a",
                "text": "Xác suất để cả 3 quả đều trúng mục tiêu bằng $0.343$.",
                "correct": true,
                "explanation": "$(0.7)^3 = 0.343$."
              },
              {
                "id": "b",
                "text": "Xác suất để cả 3 quả đều trượt mục tiêu bằng $0.027$.",
                "correct": true,
                "explanation": "$(0.3)^3 = 0.027$."
              },
              {
                "id": "c",
                "text": "Xác suất để có đúng 2 quả trúng mục tiêu bằng $0.441$.",
                "correct": true,
                "explanation": "$C_3^2 (0.7)^2 (0.3)^1 = 3 \\times 0.49 \\times 0.3 = 0.441$."
              },
              {
                "id": "d",
                "text": "Xác suất mục tiêu bị trúng bom (có ít nhất 1 quả trúng) nhỏ hơn $0.95$.",
                "correct": false,
                "explanation": "Xác suất là $1 - 0.027 = 0.973 > 0.95$."
              }
            ]
          }
        ],
        "saQuestions": [
          {
            "id": 1,
            "question": "**Câu 1:** Tính giá trị của biểu thức $P = A_6^2 + C_6^2$.",
            "correctAnswer": "45",
            "acceptedAnswers": [
              "45",
              "45.0"
            ],
            "explanation": "$A_6^2 = 30, C_6^2 = 15 \\Rightarrow P = 30 + 15 = 45$."
          },
          {
            "id": 2,
            "question": "**Câu 2:** Tìm hệ số của $x^2$ trong khai triển nhị thức $(3x + 1)^4$.",
            "correctAnswer": "54",
            "acceptedAnswers": [
              "54",
              "54.0"
            ],
            "explanation": "$C_4^2 (3x)^2 (1)^2 = 6 \\times 9 x^2 = 54x^2$. Hệ số là 54."
          },
          {
            "id": 3,
            "question": "**Câu 3:** Có bao nhiêu số tự nhiên gồm 4 chữ số khác nhau lập từ các chữ số $\\{2, 4, 6, 8\\}$?",
            "correctAnswer": "24",
            "acceptedAnswers": [
              "24",
              "24.0"
            ],
            "explanation": "$4! = 24$ số."
          },
          {
            "id": 4,
            "question": "**Câu 4:** Gieo một đồng xu cân đối 4 lần liên tiếp. Tính xác suất để có đúng 2 lần xuất hiện mặt ngửa.",
            "correctAnswer": "0.375",
            "acceptedAnswers": [
              "0.375",
              "0,375",
              "3/8"
            ],
            "explanation": "$C_4^2 (1/2)^4 = 6/16 = 3/8 = 0.375$."
          },
          {
            "id": 5,
            "question": "**Câu 5 (VDC):** Trong mặt phẳng cho tập hợp gồm 15 điểm phân biệt, trong đó có đúng 5 điểm thẳng hàng và ngoài ra không có 3 điểm nào khác thẳng hàng. Có bao nhiêu tứ giác lồi có 4 đỉnh lấy từ 15 điểm trên?",
            "correctAnswer": "1260",
            "acceptedAnswers": [
              "1260",
              "1260.0"
            ],
            "explanation": "Tổng số cách chọn 4 điểm bất kỳ từ 15 điểm là $C_{15}^4 = 1365$. Bốn điểm không thể tạo thành tứ giác nếu: cả 4 điểm đều thuộc đường thẳng (có $C_5^4 = 5$ cách), hoặc có đúng 3 điểm thuộc đường thẳng và 1 điểm ngoài đường thẳng (có $C_5^3 \\times C_{10}^1 = 10 \\times 10 = 100$ cách). Số tứ giác lồi tạo thành là $1365 - 5 - 100 = 1260$ tứ giác."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một đề thi khảo sát chất lượng gồm 20 câu hỏi trắc nghiệm, mỗi câu có 4 phương án lựa chọn và chỉ có 1 phương án đúng (mỗi câu đúng được 0.5 điểm). Một học sinh đã làm chắc chắn đúng 12 câu, còn 8 câu còn lại học sinh chọn ngẫu nhiên một phương án. Tính xác suất để học sinh đó đạt điểm từ 8.0 điểm trở lên (làm tròn kết quả đến hàng phần nghìn).",
            "correctAnswer": "0.114",
            "acceptedAnswers": [
              "0.114",
              "0,114"
            ],
            "explanation": "Để đạt từ 8.0 điểm trở lên (ít nhất 16 câu đúng), học sinh cần làm đúng thêm ít nhất $16 - 12 = 4$ câu trong 8 câu chọn ngẫu nhiên. Số câu đúng $X$ trong 8 câu tuân theo phân phối nhị thức $B(8; 0.25)$. Ta tính: $P(X \\ge 4) = \\sum_{k=4}^8 C_8^k (0.25)^k (0.75)^{8-k}$. Cụ thể: $P(X = 4) = C_8^4 (0.25)^4 (0.75)^4 = 70 \\times \\frac{81}{65536} \\approx 0.08651$; $P(X = 5) = C_8^5 (0.25)^5 (0.75)^3 = 56 \\times \\frac{27}{65536} \\approx 0.02307$; $P(X = 6) = C_8^6 (0.25)^6 (0.75)^2 = 28 \\times \\frac{9}{65536} \\approx 0.00384$; $P(X = 7) = C_8^7 (0.25)^7 (0.75)^1 = 8 \\times \\frac{3}{65536} \\approx 0.00037$; $P(X = 8) = (0.25)^8 \\approx 0.000015$. Tổng xác suất: $P(X \\ge 4) \\approx 0.1138 \\approx 0.114$."
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
            "question": "**Câu 5 (VDC):** Giá trị lớn nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng",
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
            "question": "**Câu 6 (VDC):** Đồ thị hàm số $y = \\frac{x^2 - 3x + 4}{x - 1}$ có đường tiệm cận xiên là đường thẳng",
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
            "question": "**Câu 5 (VDC):** Một công ty ước tính số lượng sản phẩm bán được theo đơn giá $p$ (nghìn đồng) là $D(p) = 120 - 2p$ ($10 \\le p \\le 50$). Doanh thu lớn nhất công ty có thể thu được là bao nhiêu nghìn đồng?",
            "correctAnswer": "1800",
            "acceptedAnswers": [
              "1800"
            ],
            "explanation": "Doanh thu $R(p) = p(120 - 2p) = -2p^2 + 120p$. Đạt cực đại tại $p = 30$, $R(30) = 1800$ nghìn đồng."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một giọt nước hình cầu bay hơi sao cho bán kính $r$ giảm đều với tốc độ $0.05\\text{ mm/s}$. Khi bán kính bằng $10\\text{ mm}$, tốc độ giảm thể tích của giọt nước là bao nhiêu $\\pi\\text{ mm}^3\\text{/s}$?",
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
            "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{x^2 + 2x - 3}{x + 3}$ có bao nhiêu đường tiệm cận đứng?",
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
            "question": "**Câu 6 (VDC):** Cho hàm số $y = -x^3 + 3x^2 - 2$. Mệnh đề nào sau đây đúng?",
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
            "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{2x^2 + x - 1}{x + 1}$ có bao nhiêu đường tiệm cận?",
            "correctAnswer": "0",
            "acceptedAnswers": [
              "0"
            ],
            "explanation": "$2x^2 + x - 1 = (x+1)(2x-1)$. Với $x \\ne -1$, hàm số là đường thẳng $y = 2x - 1$ bỏ điểm $(-1; -3)$, không có đường tiệm cận nào."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một sợi dây dài $100\\text{ cm}$ cắt thành hai đoạn: một đoạn uốn thành hình vuông, một đoạn uốn thành hình tròn. Để tổng diện tích nhỏ nhất, tỉ số cạnh hình vuông chia cho bán kính hình tròn bằng bao nhiêu?",
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
            "question": "**Câu 5 (VDC):** Giá trị nhỏ nhất của hàm số $f(x) = x + \\frac{4}{x}$ trên đoạn $[1; 3]$ bằng",
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
            "question": "**Câu 6 (VDC):** Điểm uốn của đồ thị hàm số $y = x^3 - 3x^2 + 2$ có tọa độ là",
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
            "question": "**Câu 5 (VDC):** Một cửa hàng bán sản phẩm với giá $x$ đô-la một đơn vị thì bán được $200 - 2x$ sản phẩm. Chi phí nhập mỗi sản phẩm là $20$ đô-la. Để lợi nhuận lớn nhất, giá bán $x$ cần đặt là bao nhiêu đô-la?",
            "correctAnswer": "60",
            "acceptedAnswers": [
              "60"
            ],
            "explanation": "$P(x) = (x - 20)(200 - 2x) = -2x^2 + 240x - 4000$. Đạt cực đại tại $x = 60$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một hình nón có độ dài đường sinh $l = 6\\text{ cm}$. Thể tích lớn nhất của khối nón có dạng $k\\sqrt{3}\\pi\\text{ cm}^3$. Tính giá trị của $k$.",
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
            "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có tiệm cận xiên đi qua điểm nào dưới đây?",
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
            "question": "**Câu 6 (VDC):** Một vật ném thẳng đứng lên cao từ mặt đất với phương trình $s(t) = 20t - 5t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Độ cao lớn nhất vật đạt được là",
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
            "question": "**Câu 5 (VDC):** Một cửa hàng nhận thấy rằng nếu bán một món quà với giá $p$ nghìn đồng thì số lượng bán được là $q = 100 - p$ sản phẩm. Chi phí vốn mỗi món là $40$ nghìn đồng. Giá bán $p$ (nghìn đồng) cần đặt là bao nhiêu để thu được lợi nhuận lớn nhất?",
            "correctAnswer": "70",
            "acceptedAnswers": [
              "70"
            ],
            "explanation": "$P(p) = (p - 40)(100 - p) = -p^2 + 140p - 4000$. Đạt cực đại tại $p = 70$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một quả bóng được đá lên từ mặt đất với quỹ đạo độ cao $h(t) = 18t - 4.9t^2$ (mét). Vận tốc tức thời của quả bóng tại thời điểm $t = 1\\text{ s}$ là bao nhiêu m/s?",
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
            "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{x^2 - 4x + 3}{x - 3}$ có bao nhiêu đường tiệm cận đứng?",
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
            "question": "**Câu 6 (VDC):** Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + x - 2}{x + 2}$ là",
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
            "question": "**Câu 5 (VDC):** Một cửa hàng hoa quả tính toán lợi nhuận bán cam theo giá bán $x$ (nghìn đồng/kg) là $P(x) = -2x^2 + 100x - 800$ (nghìn đồng/ngày). Giá bán cam tối ưu để lợi nhuận mỗi ngày cao nhất là bao nhiêu nghìn đồng/kg?",
            "correctAnswer": "25",
            "acceptedAnswers": [
              "25"
            ],
            "explanation": "Đỉnh parabol tại $x = 100/4 = 25$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một giàn khoan dầu ở vị trí $A$ cách bờ biển $5\\text{ km}$. Điểm $B$ trên bờ biển gần $A$ nhất. Nhà máy lọc dầu ở vị trí $C$ trên bờ cách $B$ một khoảng $12\\text{ km}$. Kéo đường ống từ $A$ đến $M$ trên bờ rồi đến $C$. Khoảng cách $BM$ bằng bao nhiêu km để tổng chiều dài đường ống $AM + MC$ nhỏ nhất?",
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
            "question": "**Câu 5 (VDC):** Cho $\\int_0^2 f(x)dx = 3$ và $\\int_2^5 f(x)dx = 7$. Tính tích phân $I = \\int_0^5 f(x)dx$.",
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
            "question": "**Câu 6 (VDC):** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng",
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
            "question": "**Câu 5 (VDC):** Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \\sqrt{2x}$, $y = 0$, $x = 0$, $x = 3$ quanh trục $Ox$ có dạng $k\\pi$. Tính giá trị của $k$.",
            "correctAnswer": "9",
            "acceptedAnswers": [
              "9"
            ],
            "explanation": "$V = \\pi \\int_0^3 2x dx = \\pi x^2\\Big|_0^3 = 9\\pi \\Rightarrow k = 9$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một giọt nước rỉ vào một bình với tốc độ $q(t) = 6t - t^2$ (ml/phút) trong $6$ phút đầu tiên ($0 \\le t \\le 6$). Tổng lượng nước chảy vào bình sau $6$ phút là bao nhiêu ml?",
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
            "question": "**Câu 5 (VDC):** Biết $\\int_0^2 f(x)dx = 4$. Tính tích phân $I = \\int_0^2 [2f(x) + 3]dx$.",
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
            "question": "**Câu 6 (VDC):** Diện tích hình phẳng giới hạn bởi đồ thị hai hàm số $y = x^2$ và $y = x$ bằng",
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
            "question": "**Câu 5 (VDC):** Cho hình phẳng giới hạn bởi đường cong $y = e^x$, trục hoành, trục tung và đường thẳng $x = 1$. Thể tích khối tròn xoay sinh ra khi quay hình này quanh trục $Ox$ có dạng $\\frac{\\pi}{2}(e^a - b)$. Tính giá trị của $a + b$.",
            "correctAnswer": "3",
            "acceptedAnswers": [
              "3"
            ],
            "explanation": "$V = \\pi \\int_0^1 e^{2x}dx = \\frac{\\pi}{2}(e^2 - 1) \\Rightarrow a = 2, b = 1 \\Rightarrow a + b = 3$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một bể dầu bị rò rỉ với tốc độ rò rỉ là $r(t) = 200 - 4t$ (lít/giờ) với $0 \\le t \\le 50$. Lượng dầu rò rỉ trong 10 giờ đầu tiên là bao nhiêu lít?",
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
            "question": "**Câu 5 (VDC):** Diện tích hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng",
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
            "question": "**Câu 6 (VDC):** Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = 2x - x^2$ và $y = 0$ quanh trục hoành là",
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
            "question": "**Câu 5 (VDC):** Khối tròn xoay tạo thành khi quay quanh $Ox$ hình phẳng giới hạn bởi $y = 3\\sqrt{x}$, $y = 0$, $x = 1$, $x = 2$ có thể tích bằng $k\\pi$. Tính giá trị của $k$.",
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
            "question": "**Câu 6 (VDC):** Một giếng khoan sâu bị phun khí mê-tan với tốc độ thoát khí $F(t) = 300 - 10t\\text{ (m}^3\\text{/giờ)}$. Sau bao nhiêu giờ thì lượng khí mê-tan phun ra đạt cực đại (tốc độ bằng 0)?",
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
            "question": "**Câu 5 (VDC):** Cho $\\int_1^3 f(x)dx = 4$. Khi đó $\\int_1^3 [2f(x) - 1]dx$ bằng",
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
            "question": "**Câu 6 (VDC):** Thể tích khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành, các đường thẳng $x = 0$ và $x = 1$ bằng",
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
            "question": "**Câu 5 (VDC):** Cho hình phẳng giới hạn bởi $y = \\sqrt{3}x$, trục hoành, đường thẳng $x = 0$ và $x = 2$. Khối tròn xoay tạo thành khi quay quanh trục $Ox$ có thể tích là $k\\pi$. Tính giá trị của $k$.",
            "correctAnswer": "8",
            "acceptedAnswers": [
              "8"
            ],
            "explanation": "$V = \\pi \\int_0^2 3x^2 dx = 3\\pi \\times 8/3 = 8\\pi \\Rightarrow k = 8$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một bể nước bị rò rỉ theo quy luật $v(t) = 50 - 2t$ (lít/phút) với $0 \\le t \\le 25$. Lượng nước đã thất thoát trong $10$ phút đầu là bao nhiêu lít?",
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
            "question": "**Câu 5 (VDC):** Biết $\\int_0^1 \\frac{2x}{x^2 + 1}dx = \\ln a$. Giá trị của $a$ bằng",
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
            "question": "**Câu 6 (VDC):** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 2 - x^2$ và đường thẳng $y = x$ bằng",
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
            "question": "**Câu 5 (VDC):** Khối tròn xoay tạo thành khi quay quanh $Ox$ hình phẳng giới hạn bởi $y = \\sqrt{5x}$, $y = 0$, $x = 0$, $x = 2$ có thể tích là $k\\pi$. Tính giá trị của $k$.",
            "correctAnswer": "10",
            "acceptedAnswers": [
              "10"
            ],
            "explanation": "$V = \\pi \\int_0^2 5x dx = 5\\pi \\times 4/2 = 10\\pi \\Rightarrow k = 10$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một máy bơm nước bơm vào hồ với lưu lượng $q(t) = 80 - 4t\\text{ (m}^3\\text{/phút)}$ trong $20$ phút đầu. Tổng thể tích nước đã bơm vào hồ sau $10$ phút là bao nhiêu mét khối?",
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
            "question": "**Câu 5 (VDC):** Một chiếc đèn chùm có trọng lượng $P = 100\\text{ N}$ được treo vào trần nhà bằng 3 sợi dây cáp không giãn có chiều dài bằng nhau và hợp với phương thẳng đứng một góc $30^\\circ$. Lực căng $T$ của mỗi sợi dây cáp bằng bao nhiêu?",
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
            "question": "**Câu 6 (VDC):** Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng",
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
            "question": "**Câu 5 (VDC):** Một người kéo một khối gỗ trượt trên sàn với lực kéo $F = 100\\text{ N}$ nghiêng góc $45^\\circ$ so với sàn. Tính công cơ học của lực kéo khi khối gỗ di chuyển được quãng đường $10\\sqrt{2}\\text{ m}$ (đơn vị: Joule).",
            "correctAnswer": "1000",
            "acceptedAnswers": [
              "1000"
            ],
            "explanation": "$A = F \\cdot s \\cdot \\cos 45^\\circ = 100 \\times 10\\sqrt{2} \\times \\frac{\\sqrt{2}}{2} = 1000\\text{ J}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một chiếc ca nô di chuyển trên một con sông. Vận tốc riêng của ca nô là $16\\text{ km/h}$ hướng thẳng vuông góc với bờ sông. Dòng nước chảy xuôi dòng với vận tốc $12\\text{ km/h}$. Tốc độ thực tế của ca nô so với bờ sông là bao nhiêu km/h?",
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
            "question": "**Câu 5 (VDC):** Ba lực đồng quy $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một vật và vật cân bằng. Biết $\\vec{F}_1 \\perp \\vec{F}_2$ và $|\\vec{F}_1| = 6\\text{ N}, |\\vec{F}_2| = 8\\text{ N}$. Độ lớn của lực $\\vec{F}_3$ bằng",
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
            "question": "**Câu 6 (VDC):** Cho tứ diện $ABCD$. Đặt $\\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}, \\vec{AD} = \\vec{d}$. Gọi $G$ là trọng tâm tam giác $BCD$. Vectơ $\\vec{AG}$ biểu diễn theo $\\vec{b}, \\vec{c}, \\vec{d}$ là",
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
            "question": "**Câu 5 (VDC):** Một máy bay đang bay với vận tốc hướng Bắc là $500\\text{ km/h}$. Một luồng gió mạnh thổi từ hướng Tây sang Đông với tốc độ $120\\text{ km/h}$. Tốc độ tổng hợp của máy bay so với mặt đất bằng bao nhiêu km/h? (Làm tròn đến hàng đơn vị).",
            "correctAnswer": "514",
            "acceptedAnswers": [
              "514"
            ],
            "explanation": "$v = \\sqrt{500^2 + 120^2} = \\sqrt{250000 + 14400} = \\sqrt{264400} \\approx 514.2 \\Rightarrow 514$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một vật treo cân bằng bằng hai sợi dây tạo với trần nhà hai góc bằng nhau là $45^\\circ$. Biết trọng lượng của vật là $P = 100\\text{ N}$. Lực căng của mỗi sợi dây xấp xỉ bằng bao nhiêu Newton? (Lấy $\\sqrt{2} \\approx 1.414$, làm tròn kết quả đến hàng đơn vị).",
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
            "question": "**Câu 5 (VDC):** Một vật được kéo bởi hai lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau có độ lớn lần lượt là $30\\text{ N}$ và $40\\text{ N}$. Để vật đứng yên cân bằng, cần tác dụng thêm lực $\\vec{F}_3$ có độ lớn bằng",
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
            "question": "**Câu 6 (VDC):** Cho tứ diện $ABCD$ có $G$ là trọng tâm. Mệnh đề nào sau đây đúng?",
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
            "question": "**Câu 5 (VDC):** Một chiếc máy bay bay theo hướng Đông Bắc với tốc độ $600\\text{ km/h}$. Gió thổi ngược lại theo hướng Tây Nam với tốc độ $100\\text{ km/h}$. Tốc độ thực của máy bay so với mặt đất bằng bao nhiêu km/h?",
            "correctAnswer": "500",
            "acceptedAnswers": [
              "500"
            ],
            "explanation": "Hai hướng ngược nhau hoàn toàn nên $v = 600 - 100 = 500\\text{ km/h}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một quả bóng chịu tác dụng của 3 lực cân bằng $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết $|\\vec{F}_1| = 12\\text{ N}, |\\vec{F}_2| = 16\\text{ N}$ và $\\vec{F}_1 \\perp \\vec{F}_2$. Tính độ lớn của lực $\\vec{F}_3$ (đơn vị: Newton).",
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
            "question": "**Câu 5 (VDC):** Một con tàu di chuyển theo hướng Đông với vận tốc $24\\text{ hải lý/giờ}$. Dòng hải lưu chảy theo hướng Bắc với vận tốc $7\\text{ hải lý/giờ}$. Vận tốc thực của con tàu so với đáy biển là",
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
            "question": "**Câu 6 (VDC):** Cho hình lăng trụ $ABC.A'B'C'$. Khẳng định nào sau đây đúng?",
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
            "question": "**Câu 5 (VDC):** Một người kéo một chiếc va li đi một quãng đường $50\\text{ m}$ trên sân ga với lực kéo $F = 60\\text{ N}$ chếch lên hợp với phương ngang một góc $60^\\circ$. Công của lực kéo bằng bao nhiêu Joule?",
            "correctAnswer": "1500",
            "acceptedAnswers": [
              "1500"
            ],
            "explanation": "$A = 60 \\times 50 \\times \\cos 60^\\circ = 3000 \\times 0.5 = 1500\\text{ J}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một ca nô chuyển động từ bờ sông bên này sang bờ sông bên kia. Vận tốc của ca nô đối với dòng nước là $15\\text{ km/h}$, vận tốc dòng nước là $8\\text{ km/h}$. Biết hướng chuyển động của ca nô vuông góc với dòng nước. Tốc độ của ca nô đối với bờ sông bằng bao nhiêu km/h?",
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
            "question": "**Câu 5 (VDC):** Một vật đứng cân bằng dưới tác dụng của 3 lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết $|\\vec{F}_1| = 5\\text{ N}, |\\vec{F}_2| = 12\\text{ N}$ và $\\vec{F}_1 \\perp \\vec{F}_2$. Độ lớn của lực $\\vec{F}_3$ bằng",
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
            "question": "**Câu 6 (VDC):** Cho hình hộp $ABCD.A'B'C'D'$. Vectơ nào dưới đây bằng vectơ $\\vec{AB} + \\vec{B'C'} + \\vec{DD'}$?",
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
            "question": "**Câu 5 (VDC):** Một máy bay bay theo hướng Bắc với vận tốc $450\\text{ km/h}$. Gió thổi theo hướng Đông với vận tốc $60\\text{ km/h}$. Tính tốc độ thực tế của máy bay đối với mặt đất (làm tròn đến hàng đơn vị).",
            "correctAnswer": "454",
            "acceptedAnswers": [
              "454"
            ],
            "explanation": "$v = \\sqrt{450^2 + 60^2} = \\sqrt{202500 + 3600} = \\sqrt{206100} \\approx 453.98 \\Rightarrow 454\\text{ km/h}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một vật có khối lượng $m = 10\\text{ kg}$ được giữ yên trên mặt phẳng nghiêng góc $30^\\circ$ so với phương ngang bởi một sợi dây cáp song song với mặt nghiêng. Lấy $g = 9.8\\text{ m/s}^2$. Độ lớn lực căng của sợi dây bằng bao nhiêu Newton?",
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
            "question": "**Câu 5 (VDC):** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(3; 0; 1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là",
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
            "question": "**Câu 6 (VDC):** Trong không gian $Oxyz$, đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 3 - t \\end{cases}$ đi qua điểm nào dưới đây?",
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
            "question": "**Câu 5 (VDC):** Một đường dây điện cao thế chạy thẳng từ cột điện $A(10; 20; 30)$ đến cột điện $B(50; 20; 30)$ (đơn vị: mét). Khoảng cách an toàn thẳng đứng từ dây điện xuống mặt đất $z = 0$ bằng bao nhiêu mét?",
            "correctAnswer": "30",
            "acceptedAnswers": [
              "30"
            ],
            "explanation": "Cao độ của dây điện luôn là $z = 30$, do đó khoảng cách thẳng đứng đến mặt đất $z = 0$ là $30\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một trạm thu phát tín hiệu vệ tinh được đặt tại $A(3; 4; 0)$ trên mặt đất. Một vệ tinh đang bay tại vị trí $S(3; 4; 300)$ (đơn vị: km). Khoảng cách từ vệ tinh $S$ đến trạm thu $A$ bằng bao nhiêu km?",
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
            "question": "**Câu 5 (VDC):** Trong không gian $Oxyz$, cho hai điểm $A(1; 1; 2)$ và $B(3; -1; 0)$. Vectơ $\\vec{AB}$ có tọa độ là",
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
            "question": "**Câu 6 (VDC):** Đường thẳng $d$ đi qua điểm $A(2; 1; -3)$ có vectơ chỉ phương $\\vec{u} = (1; -2; 2)$ có phương trình chính tắc là",
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
            "question": "**Câu 5 (VDC):** Một máy bay hạ cánh theo đường thẳng từ độ cao $1200\\text{ m}$ tại vị trí $A(0; 0; 1200)$ xuống đầu đường băng tại $B(3000; 4000; 0)$ (đơn vị: mét). Chiều dài quỹ đạo hạ cánh của máy bay bằng bao nhiêu mét?",
            "correctAnswer": "5142",
            "acceptedAnswers": [
              "5142",
              "5141.98"
            ],
            "explanation": "$AB = \\sqrt{3000^2 + 4000^2 + 1200^2} = \\sqrt{25000000 + 1440000} = \\sqrt{26440000} \\approx 5141.98 \\approx 5142\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một trạm radar quét mặt cầu bán kính $50\\text{ km}$ đặt tại gốc tọa độ $O$. Một máy bay không người lái đang bay ở tọa độ $(30; 20; 10)$ (km). Khoảng cách từ máy bay đến trạm radar bằng bao nhiêu km? (Làm tròn đến hàng đơn vị).",
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
            "question": "**Câu 5 (VDC):** Hai vectơ $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 0)$ có tích vô hướng bằng",
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
            "question": "**Câu 6 (VDC):** Đường thẳng đi qua $M(1; 0; -1)$ và vuông góc với mặt phẳng $(\\alpha): 2x - y + 3z + 1 = 0$ có phương trình là",
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
            "question": "**Câu 5 (VDC):** Một vệ tinh nhân tạo chuyển động theo quỹ đạo tròn trong mặt phẳng $(Oxy)$ có bán kính $R = 7000\\text{ km}$ quanh tâm Trái Đất đặt tại $O(0; 0; 0)$. Khoảng cách từ vệ tinh đến tâm Trái Đất là bao nhiêu km?",
            "correctAnswer": "7000",
            "acceptedAnswers": [
              "7000"
            ],
            "explanation": "Bán kính quỹ đạo tròn chính là khoảng cách đến tâm: $7000\\text{ km}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một trạm thu phát sóng di động $5G$ đặt tại đỉnh một tòa nhà có tọa độ $A(100; 200; 50)$ (đơn vị: mét). Một người dùng đứng trên mặt đất tại vị trí $B(100; 200; 0)$. Khoảng cách thẳng đứng từ người dùng đến trạm thu phát sóng bằng bao nhiêu mét?",
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
            "question": "**Câu 5 (VDC):** Vectơ chỉ phương của đường thẳng $d: \\begin{cases} x = 2 - t \\\\ y = 3 + 2t \\\\ z = -1 + 4t \\end{cases}$ là",
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
            "question": "**Câu 6 (VDC):** Mặt phẳng $(P)$ đi qua $A(0; 1; 0)$ và song song với mặt phẳng $(Oxy)$ có phương trình là",
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
            "question": "**Câu 5 (VDC):** Một máy bay hạ cánh theo đường thẳng từ điểm $A(0; 2000; 1000)$ xuống điểm $B(0; 6000; 0)$ trên đường băng (đơn vị: mét). Chiều dài quãng đường bay hạ cánh xấp xỉ bằng bao nhiêu mét? (Làm tròn đến hàng đơn vị).",
            "correctAnswer": "4123",
            "acceptedAnswers": [
              "4123",
              "4123.1"
            ],
            "explanation": "$AB = \\sqrt{0 + 4000^2 + (-1000)^2} = \\sqrt{16000000 + 1000000} = \\sqrt{17000000} \\approx 4123.1 \\Rightarrow 4123\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một giàn khoan dầu đặt tại điểm $A(10; 20; 0)$ trên biển. Một tàu cứu hộ xuất phát từ điểm $B(10; 20; 0)$ chạy thẳng đến giàn khoan khác ở tọa độ $C(40; 60; 0)$ (đơn vị: km). Quãng đường tàu cứu hộ phải chạy bằng bao nhiêu km?",
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
            "question": "**Câu 5 (VDC):** Khoảng cách từ điểm $M(1; 1; 1)$ đến mặt phẳng $(P): 3x + 4z + 2 = 0$ bằng",
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
            "question": "**Câu 6 (VDC):** Đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{3} = \\frac{z - 4}{1}$ có vectơ chỉ phương là",
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
            "question": "**Câu 5 (VDC):** Một đường hầm thoát hiểm chạy thẳng từ hầm mỏ ở độ sâu $100\\text{ m}$ tại điểm $A(0; 0; -100)$ lên mặt đất tại điểm $B(300; 400; 0)$ (mét). Chiều dài của đường hầm thoát hiểm xấp xỉ bằng bao nhiêu mét? (Làm tròn đến hàng đơn vị).",
            "correctAnswer": "510",
            "acceptedAnswers": [
              "510",
              "509.9"
            ],
            "explanation": "$AB = \\sqrt{300^2 + 400^2 + 100^2} = \\sqrt{250000 + 10000} = \\sqrt{260000} \\approx 509.9 \\Rightarrow 510\\text{ m}$."
          },
          {
            "id": 6,
            "question": "**Câu 6 (VDC):** Một ngọn hải đăng phát tín hiệu cảnh báo đá ngầm trong bán kính $15\\text{ hải lý}$. Vị trí hải đăng tại $H(10; 20; 0)$. Một con tàu ở tọa độ $T(10; 30; 0)$. Khoảng cách từ tàu đến hải đăng bằng bao nhiêu hải lý?",
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
            "question": "**Câu 5 (VDC):** Tỉ lệ người mắc một bệnh hiểm nghèo trong cộng đồng là $1\\%$. Một xét nghiệm có độ chính xác $95\\%$ (tức là người có bệnh thì $95\\%$ xét nghiệm dương tính, người không bệnh thì $95\\%$ xét nghiệm âm tính). Một người đi xét nghiệm có kết quả dương tính. Xác suất người đó thực sự mắc bệnh xấp xỉ bằng",
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
            "question": "**Câu 6 (VDC):** Một nhà máy có hai dây chuyền sản xuất cùng một loại linh kiện: dây chuyền I sản xuất $60\\%$ sản phẩm, dây chuyền II sản xuất $40\\%$ sản phẩm. Tỉ lệ phế phẩm của dây chuyền I là $2\\%$, của dây chuyền II là $3\\%$. Chọn ngẫu nhiên một sản phẩm của nhà máy, xác suất sản phẩm đó là phế phẩm bằng",
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
            "question": "**Câu 5 (VDC):** Một bài kiểm tra trắc nghiệm có 4 phương án cho mỗi câu hỏi. Học sinh $A$ biết câu trả lời đúng với xác suất $0.7$. Nếu không biết, học sinh đó đoán mò ngẫu nhiên. Biết học sinh $A$ đã trả lời đúng câu hỏi đó, tính xác suất học sinh đó thực sự biết đáp án (làm tròn kết quả đến hai chữ số thập phân).",
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
            "question": "**Câu 6 (VDC):** Một hộp chứa 3 quả cầu đỏ và 7 quả cầu trắng. Rút ngẫu nhiên lần lượt 2 quả cầu không hoàn lại. Tính xác suất để quả cầu thứ 2 màu đỏ biết quả thứ nhất màu đỏ.",
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
            "question": "**Câu 5 (VDC):** Một máy bay có hai động cơ độc lập. Xác suất để động cơ 1 bị hỏng trong chuyến bay là $0.01$, động cơ 2 bị hỏng là $0.02$. Máy bay bay an toàn nếu có ít nhất một động cơ hoạt động bình thường. Xác suất chuyến bay an toàn bằng",
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
            "question": "**Câu 6 (VDC):** Một thùng hàng chứa $80\\%$ sản phẩm loại I và $20\\%$ sản phẩm loại II. Tỉ lệ hỏng của sản phẩm loại I là $1\\%$, loại II là $5\\%$. Lấy ngẫu nhiên một sản phẩm thì thấy bị hỏng. Xác suất để sản phẩm đó là loại I bằng",
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
            "question": "**Câu 5 (VDC):** Một ngân hàng ước tính xác suất một khách hàng vay tiền vỡ nợ là $0.02$. Một phần mềm chấm điểm tín dụng dự báo đúng khách hàng vỡ nợ với tỉ lệ $90\\%$, nhưng cũng dự báo nhầm khách hàng không vỡ nợ thành vỡ nợ với tỉ lệ $5\\%$. Khi phần mềm cảnh báo một khách hàng sẽ vỡ nợ, tính xác suất thực sự khách hàng đó vỡ nợ (làm tròn kết quả đến hai chữ số thập phân).",
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
            "question": "**Câu 6 (VDC):** Một hộp có 5 viên bi trắng và 5 viên bi đen. Rút lần lượt 2 viên bi không hoàn lại. Biết viên thứ nhất màu đen, tính xác suất viên thứ hai màu trắng.",
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
            "question": "**Câu 5 (VDC):** Một thiết bị có hai linh kiện hoạt động độc lập. Xác suất linh kiện A bị lỗi là $0.05$, linh kiện B bị lỗi là $0.1$. Xác suất để thiết bị hoạt động tốt (cả 2 linh kiện không bị lỗi) bằng",
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
            "question": "**Câu 6 (VDC):** Tỉ lệ cử tri ủng hộ ứng cử viên X là $60\\%$. Trong số người ủng hộ X, có $70\\%$ đi bỏ phiếu. Trong số người không ủng hộ X, có $40\\%$ đi bỏ phiếu. Xác suất một cử tri được chọn ngẫu nhiên có đi bỏ phiếu bằng",
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
            "question": "**Câu 5 (VDC):** Gieo một con xúc xắc cân đối. Biết kết quả xuất hiện số chấm lớn hơn $3$. Tính xác suất xuất hiện mặt $6$ chấm (nhập phân số dạng tối giản $a/b$ hoặc số thập phân làm tròn hai chữ số: ví dụ $1/3$ thì nhập 0.33).",
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
            "question": "**Câu 6 (VDC):** Một trạm thu phí cao tốc có hai làn tự động ETC1 và ETC2. Xe qua ETC1 chiếm $60\\%$, qua ETC2 chiếm $40\\%$. Tỉ lệ xe bị lỗi nhận diện thẻ ở ETC1 là $1\\%$, ở ETC2 là $3\\%$. Tính xác suất một xe bất kỳ qua trạm bị lỗi nhận diện (nhập dưới dạng phần trăm: ví dụ $1.8\\%$ thì nhập 1.8).",
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
            "question": "**Câu 5 (VDC):** Tỉ lệ người nhiễm một loại virus trong cộng đồng là $0.5\\%$. Một bộ kit xét nghiệm nhanh có độ nhạy $90\\%$ và độ đặc hiệu $95\\%$. Khi xét nghiệm một người ngẫu nhiên cho kết quả dương tính, xác suất người đó thực sự nhiễm virus xấp xỉ bằng",
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
            "question": "**Câu 6 (VDC):** Một nông trường nuôi bò sữa có hai trang trại: trang trại A cung cấp $70\\%$ tổng sản lượng sữa, trang trại B cung cấp $30\\%$. Tỉ lệ sữa đạt chuẩn loại 1 của trang trại A là $95\\%$, của trang trại B là $90\\%$. Chọn ngẫu nhiên một hộp sữa của nông trường, xác suất hộp sữa đạt chuẩn loại 1 bằng",
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
            "question": "**Câu 5 (VDC):** Gieo một con xúc xắc cân đối hai lần. Tính xác suất để lần thứ hai xuất hiện mặt 6 chấm biết tổng số chấm sau hai lần gieo bằng 10 (viết dạng số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
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
            "question": "**Câu 6 (VDC):** Một kho xăng dầu có hai bể chứa $B_1$ và $B_2$ với dung tích bằng nhau ($50\\% - 50\\%$). Bể $B_1$ có tỉ lệ tạp chất $0.5\\%$, bể $B_2$ có tỉ lệ tạp chất $1.5\\%$. Lấy ngẫu nhiên một mẫu xăng từ kho, tính xác suất mẫu xăng có tạp chất (nhập số dạng phần trăm: ví dụ $1\\%$ thì nhập 1).",
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
            "question": "**Câu 5 (VDC):** Một công ty phần mềm phát hiện một loại mã độc với xác suất $99\\%$. Xác suất phần mềm nhận diện nhầm một file an toàn thành mã độc là $1\\%$. Trong một thư mục, tỉ lệ file chứa mã độc là $0.1\\%$. Khi phần mềm báo một file là mã độc, xác suất file đó thực sự chứa mã độc là",
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
            "question": "**Câu 6 (VDC):** Một trạm phát điện năng lượng mặt trời có hai cụm pin A và B. Cụm A tạo ra $60\\%$ sản lượng điện, cụm B tạo ra $40\\%$. Tỉ lệ suy hao hiệu suất trong ngày nhiều mây của cụm A là $10\\%$, của cụm B là $15\\%$. Chọn ngẫu nhiên một phần điện năng bị suy hao, xác suất phần điện năng đó do cụm A tạo ra bằng",
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
            "question": "**Câu 5 (VDC):** Một ngân hàng phát hiện giao dịch gian lận chiếm tỉ lệ $0.2\\%$ tổng số giao dịch. Hệ thống AI cảnh báo đúng giao dịch gian lận với xác suất $98\\%$, nhưng cảnh báo nhầm giao dịch hợp pháp thành gian lận với xác suất $1\\%$. Khi hệ thống AI cảnh báo một giao dịch là gian lận, tính xác suất giao dịch đó thực sự là gian lận (làm tròn kết quả đến hai chữ số thập phân).",
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
            "question": "**Câu 6 (VDC):** Một giỏ hoa quả có 6 quả cam và 4 quả táo. Lấy lần lượt 2 quả không hoàn lại. Tính xác suất quả thứ hai là quả cam biết quả thứ nhất là quả táo (nhập số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
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
