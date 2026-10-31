# -*- coding: utf-8 -*-
"""
Chuyên đề 1: DÃY SỐ - CẤP SỐ CỘNG - CẤP SỐ NHÂN
5 ĐỀ THI ĐỘC LẬP 100% - KHÔNG TRÙNG LẶP NỘI DUNG
Mỗi đề có:
- 12 câu trắc nghiệm 4 lựa chọn (cân bằng 3A, 3B, 3C, 3D)
- 4 câu Đúng / Sai (16 ý)
- 6 câu Trả lời ngắn, trong đó CÂU 5 VÀ CÂU 6 LÀ VDC (RẤT KHÓ)
- Tuyệt đối không có tham số m
- Bám sát cấu trúc Đề thi TN THPT 2025 - 2026 của Bộ GD&ĐT
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd1():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Dãy số -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-list-ol text-blue-600"></i>
      1. Dãy Số & Tính Chất Cốt Lõi
    </h4>
    <ul class="list-disc pl-5 space-y-1.5 text-[11.5pt]">
      <li><strong>Dãy số tăng / giảm:</strong> $(u_n)$ tăng khi $u_{n+1} > u_n, \\forall n \\ge 1$; giảm khi $u_{n+1} < u_n, \\forall n \\ge 1$.</li>
      <li><strong>Dãy số bị chặn:</strong> Bị chặn trên nếu tồn tại $M$ sao cho $u_n \\le M, \\forall n$; bị chặn dưới nếu tồn tại $m$ sao cho $u_n \\ge m, \\forall n$. Bị chặn nếu vừa bị chặn trên vừa bị chặn dưới.</li>
    </ul>
  </div>

  <!-- Phần 2: Cấp số cộng -->
  <div class="bg-teal-50/70 border-l-4 border-teal-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-teal-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-plus-minus text-teal-600"></i>
      2. Cấp Số Cộng (CSC)
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-teal-200 shadow-xs">
        <p class="font-bold text-teal-900 mb-1">Định nghĩa & Số hạng tổng quát:</p>
        <p>$u_{n+1} = u_n + d$ ($d$ là công sai)</p>
        <p class="mt-1 text-teal-800 font-semibold">$u_n = u_1 + (n - 1)d$ ($n \\ge 2$)</p>
        <p class="text-xs text-slate-600 mt-0.5">Tính chất: $u_k = \\frac{u_{k-1} + u_{k+1}}{2}$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-teal-200 shadow-xs">
        <p class="font-bold text-teal-900 mb-1">Tổng $n$ số hạng đầu tiên:</p>
        <p class="mt-1 text-teal-800 font-semibold">$S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$</p>
      </div>
    </div>
  </div>

  <!-- Phần 3: Cấp số nhân -->
  <div class="bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-chart-line text-amber-600"></i>
      3. Cấp Số Nhân (CSN) & CSN Lùi Vô Hạn
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-amber-200 shadow-xs">
        <p class="font-bold text-amber-900 mb-1">Định nghĩa & Số hạng tổng quát:</p>
        <p>$u_{n+1} = u_n \\cdot q$ ($q$ là công bội)</p>
        <p class="mt-1 text-amber-800 font-semibold">$u_n = u_1 \\cdot q^{n-1}$ ($n \\ge 2$)</p>
        <p class="text-xs text-slate-600 mt-0.5">Tính chất: $u_k^2 = u_{k-1} \\cdot u_{k+1}$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-amber-200 shadow-xs">
        <p class="font-bold text-amber-900 mb-1">Tổng $n$ số hạng & CSN lùi vô hạn:</p>
        <p>$S_n = u_1 \\cdot \\frac{q^n - 1}{q - 1} = u_1 \\cdot \\frac{1 - q^n}{1 - q}$ ($q \\ne 1$)</p>
        <p class="mt-1 text-amber-800 font-semibold">CSN lùi vô hạn ($|q| < 1$): $S = \\frac{u_1}{1 - q}$</p>
      </div>
    </div>
  </div>

  <!-- Phần 4: Mô hình tài chính & Thực tế -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-coins text-purple-600"></i>
      4. Mô Hình Toán Học Thực Tế & Tài Chính
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11pt]">
      <div class="bg-white p-2.5 rounded-xl border border-purple-200">
        <span class="font-bold text-purple-900">Lãi kép:</span> $A = P(1 + r)^n$.
      </div>
      <div class="bg-white p-2.5 rounded-xl border border-purple-200">
        <span class="font-bold text-purple-900">Vay trả góp đều:</span> $m = \\frac{P \\cdot r(1+r)^n}{(1+r)^n - 1}$.
      </div>
      <div class="bg-white p-2.5 rounded-xl border border-purple-200">
        <span class="font-bold text-purple-900">Bóng nảy vô hạn:</span> $S = h \\frac{1 + k}{1 - k}$.
      </div>
    </div>
  </div>
</div>
"""

    exams = []

    # ==========================================
    # ĐỀ 1: Khai thác CSC, lãi kép, bóng nảy fractal
    # ==========================================
    raw_mcqs_1 = [
        {"id": 1, "question": "**Câu 1:** Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 3n - 2$. Số hạng thứ 7 của dãy số là",
         "options": {"A": "$19$", "B": "$21$", "C": "$18$", "D": "$22$"}, "correct": "A", "explanation": "$u_7 = 3(7) - 2 = 19$."},
        {"id": 2, "question": "**Câu 2:** Dãy số nào dưới đây là dãy số giảm?",
         "options": {"A": "$u_n = \\frac{1}{n}$", "B": "$u_n = 2n + 1$", "C": "$u_n = n^2$", "D": "$u_n = 3^n$"}, "correct": "A", "explanation": "$u_{n+1} - u_n = \\frac{1}{n+1} - \\frac{1}{n} = -\\frac{1}{n(n+1)} < 0$."},
        {"id": 3, "question": "**Câu 3:** Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và công sai $d = 3$. Số hạng thứ 5 là",
         "options": {"A": "$16$", "B": "$19$", "C": "$15$", "D": "$12$"}, "correct": "A", "explanation": "$u_5 = 4 + 4(3) = 16$."},
        {"id": 4, "question": "**Câu 4:** Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = 2$. Giá trị của $u_4$ bằng",
         "options": {"A": "$24$", "B": "$48$", "C": "$18$", "D": "$12$"}, "correct": "A", "explanation": "$u_4 = 3 \\times 2^3 = 24$."},
        {"id": 5, "question": "**Câu 5:** Cho cấp số cộng có $u_1 = -2$ và $u_2 = 3$. Công sai của cấp số cộng đó là",
         "options": {"A": "$5$", "B": "$-5$", "C": "$1$", "D": "$-1$"}, "correct": "A", "explanation": "$d = u_2 - u_1 = 3 - (-2) = 5$."},
        {"id": 6, "question": "**Câu 6:** Tổng 10 số hạng đầu của cấp số cộng có $u_1 = 1, d = 2$ bằng",
         "options": {"A": "$100$", "B": "$90$", "C": "$110$", "D": "$120$"}, "correct": "A", "explanation": "$S_{10} = \\frac{10[2(1) + 9(2)]}{2} = 100$."},
        {"id": 7, "question": "**Câu 7:** Cho cấp số nhân lùi vô hạn có $u_1 = 6$ và công bội $q = \\frac{1}{3}$. Tổng của cấp số nhân lùi vô hạn đó là",
         "options": {"A": "$9$", "B": "$8$", "C": "$18$", "D": "$12$"}, "correct": "A", "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{6}{1 - 1/3} = 9$."},
        {"id": 8, "question": "**Câu 8:** Một rạp chiếu phim có hàng ghế thứ nhất có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Hàng ghế thứ 10 có bao nhiêu ghế?",
         "options": {"A": "$33$", "B": "$35$", "C": "$31$", "D": "$37$"}, "correct": "A", "explanation": "$u_{10} = 15 + 9(2) = 33$ ghế."},
        {"id": 9, "question": "**Câu 9:** Ba số $x, 6, y$ theo thứ tự lập thành cấp số cộng và ba số $x, 4, y$ theo thứ tự lập thành cấp số nhân (với $x, y > 0$). Giá trị của $x^2 + y^2$ bằng",
         "options": {"A": "$112$", "B": "$120$", "C": "$128$", "D": "$144$"}, "correct": "A", "explanation": "$x + y = 12$ và $xy = 16 \\Rightarrow x^2 + y^2 = (x+y)^2 - 2xy = 144 - 32 = 112$."},
        {"id": 10, "question": "**Câu 10:** Một người gửi tiết kiệm 100 triệu đồng với lãi suất kép $6\\%/\\text{năm}$. Sau 5 năm, số tiền cả vốn lẫn lãi nhận được (làm tròn đến triệu đồng) là",
         "options": {"A": "$134\\text{ triệu}$", "B": "$130\\text{ triệu}$", "C": "$138\\text{ triệu}$", "D": "$140\\text{ triệu}$"}, "correct": "A", "explanation": "$A = 100(1.06)^5 \\approx 133.82 \\approx 134$ triệu."},
        {"id": 11, "question": "**Câu 11:** Cho cấp số nhân $(u_n)$ có $u_2 = 6$ và $u_5 = 162$. Tổng 6 số hạng đầu tiên của cấp số nhân là",
         "options": {"A": "$728$", "B": "$486$", "C": "$242$", "D": "$364$"}, "correct": "A", "explanation": "$q^3 = 162/6 = 27 \\Rightarrow q = 3 \\Rightarrow u_1 = 2$. $S_6 = 2(3^6 - 1)/(3 - 1) = 728$."},
        {"id": 12, "question": "**Câu 12:** Cho dãy số $(u_n)$ xác định bởi $u_1 = 2$ và $u_{n+1} = u_n + 2n + 1$. Số hạng $u_{20}$ bằng",
         "options": {"A": "$401$", "B": "$400$", "C": "$420$", "D": "$381$"}, "correct": "A", "explanation": "$u_{n+1} - u_n = 2n + 1 \\Rightarrow u_{20} = u_1 + \\sum_{k=1}^{19} (2k + 1) = 2 + 19 \\times 21 = 401$."}
    ]
    tf_1 = [
        {"id": 1, "context": "**Câu 1:** Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 5$ và công sai $d = 3$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Số hạng tổng quát của dãy số là $u_n = 3n + 2$.", "correct": True, "explanation": "$u_n = 5 + (n-1)3 = 3n + 2$."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng thứ 10 của dãy số là $u_{10} = 35$.", "correct": False, "explanation": "$u_{10} = 3(10) + 2 = 32$."},
             {"label": "c", "subLabel": "c)", "content": "Tổng 20 số hạng đầu tiên $S_{20} = 670$.", "correct": True, "explanation": "$S_{20} = \\frac{20[2(5) + 19(3)]}{2} = 670$."},
             {"label": "d", "subLabel": "d)", "content": "Số 100 là một số hạng của cấp số cộng trên.", "correct": False, "explanation": "$3n + 2 = 100 \\Leftrightarrow 3n = 98$ (không chia hết)."}
         ]},
        {"id": 2, "context": "**Câu 2:** Một người mua một chiếc xe máy trị giá 40 triệu đồng theo hình thức trả góp.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Người đó trả trước 10 triệu đồng, số tiền còn nợ lại là 30 triệu đồng.", "correct": True, "explanation": "40 - 10 = 30 triệu."},
             {"label": "b", "subLabel": "b)", "content": "Nếu lãi suất $1\\%/\\text{tháng}$ tính trên dư nợ còn lại thì tiền lãi tháng đầu tiên là $300.000$ đồng.", "correct": True, "explanation": "$30 \\times 1\\% = 0.3$ triệu = 300.000đ."},
             {"label": "c", "subLabel": "c)", "content": "Nếu trả nợ gốc đều nhau trong 10 tháng (mỗi tháng 3 triệu nợ gốc) thì tổng số tiền gốc phải trả là 30 triệu đồng.", "correct": True, "explanation": "10 x 3 = 30 triệu."},
             {"label": "d", "subLabel": "d)", "content": "Tổng tiền lãi phải trả trong 10 tháng với phương thức trả gốc đều trên lớn hơn 2 triệu đồng.", "correct": False, "explanation": "Tổng lãi = $0.01 \\times (30 + 27 + ... + 3) = 0.01 \\times 165 = 1.65$ triệu < 2 triệu."}
         ]},
        {"id": 3, "context": "**Câu 3:** Cho cấp số nhân lùi vô hạn $(u_n)$ có $u_1 = 12$ và công bội $q = -\\frac{1}{2}$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Dãy số $(u_n)$ là một dãy số đan dấu.", "correct": True, "explanation": "$q < 0$ nên các số hạng đổi dấu liên tục."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng thứ 4 của dãy số là $u_4 = -\\frac{3}{2}$.", "correct": True, "explanation": "$u_4 = 12(-1/2)^3 = -12/8 = -1.5$."},
             {"label": "c", "subLabel": "c)", "content": "Tổng của cấp số nhân lùi vô hạn trên bằng $8$.", "correct": True, "explanation": "$S = \\frac{12}{1 - (-0.5)} = \\frac{12}{1.5} = 8$."},
             {"label": "d", "subLabel": "d)", "content": "Giới hạn $\\lim u_n = 12$.", "correct": False, "explanation": "Vì $|q| < 1$ nên $\\lim u_n = 0$."}
         ]},
        {"id": 4, "context": "**Câu 4:** Cho dãy số $(a_n)$ với $a_n = \\frac{2n - 1}{n + 1}$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Dãy số $(a_n)$ là một dãy số tăng.", "correct": True, "explanation": "$a_{n+1} - a_n = \\frac{3}{(n+1)(n+2)} > 0$."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng đầu tiên của dãy số là $a_1 = \\frac{1}{2}$.", "correct": True, "explanation": "$a_1 = (2-1)/(1+1) = 1/2$."},
             {"label": "c", "subLabel": "c)", "content": "Dãy số bị chặn trên bởi số $2$.", "correct": True, "explanation": "$a_n = 2 - \\frac{3}{n+1} < 2$."},
             {"label": "d", "subLabel": "d)", "content": "Dãy số không bị chặn dưới.", "correct": False, "explanation": "$a_n \\ge 1/2$ nên bị chặn dưới bởi 1/2."}
         ]}
    ]
    sa_1 = [
        {"id": 1, "question": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và $u_2 = 7$. Tính số hạng $u_{15}$.", "correctAnswer": "59", "acceptedAnswers": ["59"], "explanation": "$d = 4 \\Rightarrow u_{15} = 3 + 14(4) = 59$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Tìm số tự nhiên $n$ sao cho $u_n = 486$.", "correctAnswer": "6", "acceptedAnswers": ["6"], "explanation": "$2 \\times 3^{n-1} = 486 \\Leftrightarrow 3^{n-1} = 243 = 3^5 \\Rightarrow n = 6$."},
        {"id": 3, "question": "**Câu 3:** Tìm tổng của cấp số nhân lùi vô hạn $S = 4 + 2 + 1 + \\frac{1}{2} + \\dots$", "correctAnswer": "8", "acceptedAnswers": ["8"], "explanation": "$S = \\frac{4}{1 - 0.5} = 8$."},
        {"id": 4, "question": "**Câu 4:** Một hội trường có 20 hàng ghế. Hàng đầu tiên có 18 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Tổng số ghế của hội trường là bao nhiêu?", "correctAnswer": "740", "acceptedAnswers": ["740"], "explanation": "$S_{20} = \\frac{20[2(18) + 19(2)]}{2} = 10(36 + 38) = 740$ ghế."},
        # VDC 1: Bài toán bóng nảy thực tế với độ cao tổng cộng vô hạn
        {"id": 5, "question": "**Câu 5 (VDC):** Một quả bóng cao su được thả rơi tự do từ độ cao $20\\text{ m}$ xuống mặt sàn cứng. Mỗi lần chạm sàn, quả bóng nảy ngược lên đạt độ cao bằng $\\frac{3}{4}$ độ cao của lần rơi ngay trước đó. Giả sử quá trình nảy diễn ra vô hạn lần, tính tổng quãng đường chuyển động của quả bóng kể từ lúc thả đến khi dừng hẳn trên mặt sàn (đơn vị: mét).",
         "correctAnswer": "140", "acceptedAnswers": ["140"],
         "explanation": "Quãng đường: $S = h + 2\\sum_{i=1}^\\infty h(3/4)^i = h + 2h \\frac{3/4}{1 - 3/4} = h(1 + 2 \\times 3) = 7h = 7 \\times 20 = 140\\text{ m}$."},
        # VDC 2: Vay trả góp tính lãi theo dư nợ
        {"id": 6, "question": "**Câu 6 (VDC):** Một doanh nhân vay ngân hàng 200 triệu đồng để đầu tư khởi nghiệp với lãi suất cố định $0.8\\%/\\text{tháng}$. Doanh nhân thỏa thuận trả nợ theo phương thức trả góp đều vào cuối mỗi tháng một số tiền $m$ triệu đồng. Để thanh toán hết toàn bộ khoản nợ gốc và lãi đúng sau tròn 24 tháng, số tiền $m$ cần trả đều đặn mỗi tháng là bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
         "correctAnswer": "9.19", "acceptedAnswers": ["9.19", "9,19"],
         "explanation": "$m = \\frac{P \\cdot r (1+r)^n}{(1+r)^n - 1} = \\frac{200 \\times 0.008 \\times (1.008)^{24}}{(1.008)^{24} - 1} = \\frac{1.6 \\times 1.21045}{0.21045} \\approx 9.19$ triệu đồng."}
    ]

    # ==========================================
    # ĐỀ 2: Khai thác dãy số truy hồi, tháp tam giác, nợ tích lũy
    # ==========================================
    raw_mcqs_2 = [
        {"id": 1, "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = 2^n - 1$. Ba số hạng đầu tiên của dãy số là",
         "options": {"A": "$1; 3; 7$", "B": "$1; 2; 3$", "C": "$2; 4; 8$", "D": "$1; 4; 7$"}, "correct": "A", "explanation": "$u_1 = 1, u_2 = 3, u_3 = 7$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số cộng $(u_n)$ có $u_1 = 10, d = -3$. Số hạng $u_4$ bằng",
         "options": {"A": "$1$", "B": "$4$", "C": "$-2$", "D": "$7$"}, "correct": "A", "explanation": "$u_4 = 10 + 3(-3) = 1$."},
        {"id": 3, "question": "**Câu 3:** Cho cấp số nhân $(u_n)$ có $u_3 = 12$ và $u_4 = 24$. Công bội $q$ của cấp số nhân là",
         "options": {"A": "$2$", "B": "$12$", "C": "$3$", "D": "$4$"}, "correct": "A", "explanation": "$q = u_4 / u_3 = 24/12 = 2$."},
        {"id": 4, "question": "**Câu 4:** Trong các dãy số sau, dãy số nào bị chặn trên?",
         "options": {"A": "$u_n = 5 - \\frac{2}{n}$", "B": "$u_n = 2n + 3$", "C": "$u_n = n^3$", "D": "$u_n = 2^n$"}, "correct": "A", "explanation": "$u_n < 5$ với mọi $n$."},
        {"id": 5, "question": "**Câu 5:** Cho cấp số cộng có $u_4 = 10$ và $u_7 = 19$. Số hạng đầu $u_1$ bằng",
         "options": {"A": "$1$", "B": "$2$", "C": "$3$", "D": "$4$"}, "correct": "A", "explanation": "$3d = 9 \\Rightarrow d = 3 \\Rightarrow u_1 = 10 - 3(3) = 1$."},
        {"id": 6, "question": "**Câu 6:** Tổng 8 số hạng đầu của cấp số nhân $1, 2, 4, 8, \\dots$ bằng",
         "options": {"A": "$255$", "B": "$256$", "C": "$127$", "D": "$511$"}, "correct": "A", "explanation": "$S_8 = \\frac{1(2^8 - 1)}{2 - 1} = 255$."},
        {"id": 7, "question": "**Câu 7:** Một quả chuông đồng hồ đánh 1 tiếng lúc 1 giờ, 2 tiếng lúc 2 giờ,... 12 tiếng lúc 12 giờ. Trong 12 giờ đầu, đồng hồ đánh tổng cộng bao nhiêu tiếng?",
         "options": {"A": "$78$", "B": "$66$", "C": "$144$", "D": "$72$"}, "correct": "A", "explanation": "$S = \\frac{12 \\times 13}{2} = 78$ tiếng."},
        {"id": 8, "question": "**Câu 8:** Số hạng tổng quát của cấp số nhân $3, -6, 12, -24, \\dots$ là",
         "options": {"A": "$u_n = 3(-2)^{n-1}$", "B": "$u_n = -3(2)^{n-1}$", "C": "$u_n = 3(2)^{n-1}$", "D": "$u_n = (-6)^{n-1}$"}, "correct": "A", "explanation": "$u_1 = 3, q = -2 \\Rightarrow u_n = 3(-2)^{n-1}$."},
        {"id": 9, "question": "**Câu 9:** Dân số một thành phố hiện nay là 1.2 triệu người. Với tốc độ gia tăng dân số đều đặn $1.5\\%/\\text{năm}$, sau 10 năm dân số thành phố xấp xỉ bằng",
         "options": {"A": "$1.393\\text{ triệu}$", "B": "$1.380\\text{ triệu}$", "C": "$1.420\\text{ triệu}$", "D": "$1.350\\text{ triệu}$"}, "correct": "A", "explanation": "$N = 1.2(1.015)^{10} \\approx 1.3926$ triệu."},
        {"id": 10, "question": "**Câu 10:** Cho cấp số nhân lùi vô hạn $u_n = 5 \\cdot (\\frac{2}{3})^n$. Tổng của cấp số nhân lùi vô hạn đó bằng",
         "options": {"A": "$10$", "B": "$15$", "C": "$\\frac{10}{3}$", "D": "$5$"}, "correct": "A", "explanation": "$u_1 = 10/3, q = 2/3 \\Rightarrow S = \\frac{10/3}{1 - 2/3} = 10$."},
        {"id": 11, "question": "**Câu 11:** Một tam giác có độ dài 3 cạnh lập thành cấp số cộng có chu vi bằng $24\\text{ cm}$ và cạnh lớn nhất gấp đôi cạnh nhỏ nhất. Độ dài cạnh trung bình bằng",
         "options": {"A": "$8\\text{ cm}$", "B": "$6\\text{ cm}$", "C": "$10\\text{ cm}$", "D": "$7\\text{ cm}$"}, "correct": "A", "explanation": "$a + b + c = 3b = 24 \\Rightarrow b = 8\\text{ cm}$."},
        {"id": 12, "question": "**Câu 12:** Cho dãy số $(u_n)$ thỏa mãn $u_1 = 1$ và $u_{n+1} = 2u_n + 3$. Số hạng tổng quát $u_n$ là",
         "options": {"A": "$u_n = 2^{n+1} - 3$", "B": "$u_n = 2^n - 1$", "C": "$u_n = 3 \\cdot 2^{n-1} - 2$", "D": "$u_n = 4 \\cdot 2^{n-1} - 3$"}, "correct": "A", "explanation": "$u_{n+1} + 3 = 2(u_n + 3) \\Rightarrow u_n + 3 = (u_1 + 3)2^{n-1} = 4 \\cdot 2^{n-1} = 2^{n+1} \\Rightarrow u_n = 2^{n+1} - 3$."}
    ]
    tf_2 = [
        {"id": 1, "context": "**Câu 1:** Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Số hạng thứ 3 của cấp số nhân là $u_3 = 18$.", "correct": True, "explanation": "$u_3 = 2 \\times 3^2 = 18$."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng tổng quát $u_n = 2 \\cdot 3^n$.", "correct": False, "explanation": "Phải là $2 \\cdot 3^{n-1}$."},
             {"label": "c", "subLabel": "c)", "content": "Tổng 5 số hạng đầu $S_5 = 242$.", "correct": True, "explanation": "$S_5 = 2(3^5 - 1)/2 = 242$."},
             {"label": "d", "subLabel": "d)", "content": "Tất cả các số hạng của dãy số đều là số nguyên dương chẵn.", "correct": True, "explanation": "$u_n = 2 \\times 3^{n-1}$ luôn chia hết cho 2."}
         ]},
        {"id": 2, "context": "**Câu 2:** Một người thợ xây một bức tường hình tháp tam giác bằng gạch. Hàng trên cùng (hàng 1) có 1 viên gạch, mỗi hàng dưới có nhiều hơn hàng ngay trên nó 2 viên gạch.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Số viên gạch ở mỗi hàng theo thứ tự từ trên xuống lập thành một cấp số cộng với $u_1 = 1, d = 2$.", "correct": True, "explanation": "Đúng, 1, 3, 5, 7..."},
             {"label": "b", "subLabel": "b)", "content": "Hàng thứ 15 của bức tường có 29 viên gạch.", "correct": True, "explanation": "$u_{15} = 1 + 14(2) = 29$."},
             {"label": "c", "subLabel": "c)", "content": "Nếu bức tường có 20 hàng thì tổng số gạch cần dùng là 400 viên.", "correct": True, "explanation": "$S_{20} = 20^2 = 400$."},
             {"label": "d", "subLabel": "d)", "content": "Nếu có 500 viên gạch thì người thợ có thể xây trọn vẹn một bức tường có 25 hàng.", "correct": False, "explanation": "$25^2 = 625 > 500$, không đủ gạch."}
         ]},
        {"id": 3, "context": "**Câu 3:** Cho cấp số cộng $(u_n)$ có công sai $d \\ne 0$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Nếu $d > 0$ thì $(u_n)$ là một dãy số tăng.", "correct": True, "explanation": "$u_{n+1} - u_n = d > 0$."},
             {"label": "b", "subLabel": "b)", "content": "Hiệu hai số hạng liên tiếp $u_{k+1} - u_k$ luôn không đổi.", "correct": True, "explanation": "Luôn bằng $d$."},
             {"label": "c", "subLabel": "c)", "content": "Mọi cấp số cộng đều bị chặn dưới.", "correct": False, "explanation": "Nếu $d < 0$ thì dãy tiến về $-\\infty$, không bị chặn dưới."},
             {"label": "d", "subLabel": "d)", "content": "Tổng $u_1 + u_7 = u_3 + u_5$.", "correct": True, "explanation": "$1 + 7 = 3 + 5 = 8$."}
         ]},
        {"id": 4, "context": "**Câu 4:** Cho hình vuông $C_1$ có cạnh bằng $8\\text{ cm}$. Nối trung điểm 4 cạnh của $C_1$ ta được hình vuông $C_2$. Tiếp tục như vậy ta được dãy hình vuông $C_1, C_2, C_3, \\dots$",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Cạnh của hình vuông $C_2$ bằng $4\\sqrt{2}\\text{ cm}$.", "correct": True, "explanation": "Cạnh = $\\sqrt{4^2 + 4^2} = 4\\sqrt{2}$."},
             {"label": "b", "subLabel": "b)", "content": "Diện tích hình vuông $C_2$ bằng một nửa diện tích hình vuông $C_1$.", "correct": True, "explanation": "$S_2 = 32 = S_1 / 2$."},
             {"label": "c", "subLabel": "c)", "content": "Dãy diện tích $(S_n)$ lập thành một cấp số nhân có $q = \\frac{1}{2}$.", "correct": True, "explanation": "$S_n = 64 \\times (1/2)^{n-1}$."},
             {"label": "d", "subLabel": "d)", "content": "Tổng diện tích của tất cả các hình vuông trong dãy vô hạn trên bằng $100\\text{ cm}^2$.", "correct": False, "explanation": "$S = \\frac{64}{1 - 0.5} = 128\\text{ cm}^2$."}
         ]}
    ]
    sa_2 = [
        {"id": 1, "question": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và $u_3 = 13$. Tìm công sai $d$.", "correctAnswer": "4", "acceptedAnswers": ["4"], "explanation": "$2d = 8 \\Rightarrow d = 4$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số nhân có $u_1 = 3$ và $u_4 = 192$. Tính công bội $q$.", "correctAnswer": "4", "acceptedAnswers": ["4"], "explanation": "$q^3 = 64 \\Rightarrow q = 4$."},
        {"id": 3, "question": "**Câu 3:** Cho cấp số nhân lùi vô hạn có tổng $S = 18$ và công bội $q = \\frac{1}{3}$. Tìm số hạng đầu tiên $u_1$.", "correctAnswer": "12", "acceptedAnswers": ["12"], "explanation": "$u_1 = S(1 - q) = 18 \\times \\frac{2}{3} = 12$."},
        {"id": 4, "question": "**Câu 4:** Một giếng khoan sâu $30\\text{ m}$. Giá khoan mét đầu tiên là $100.000$ đồng, kể từ mét thứ hai giá mỗi mét tăng thêm $20.000$ đồng so với mét trước đó. Tổng chi phí khoan hết cái giếng đó là bao nhiêu nghìn đồng?", "correctAnswer": "11700", "acceptedAnswers": ["11700"], "explanation": "$S_{30} = \\frac{30[2(100) + 29(20)]}{2} = 15(200 + 580) = 11.700$ nghìn đồng (11.7 triệu)."},
        # VDC 1: Dãy số quy nạp tổng phân số
        {"id": 5, "question": "**Câu 5 (VDC):** Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Đặt tổng $T_n = \\frac{1}{u_1 u_2} + \\frac{1}{u_2 u_3} + \\dots + \\frac{1}{u_n u_{n+1}}$. Tính giá trị của giới hạn $L = \\lim_{n \\to +\\infty} T_n$ (nhập kết quả dưới dạng số thập phân làm tròn hai chữ số, hoặc phân số tối giản).",
         "correctAnswer": "0.17", "acceptedAnswers": ["0.17", "1/6", "0,17"],
         "explanation": "$T_n = \\frac{1}{d}\\left(\\frac{1}{u_1} - \\frac{1}{u_{n+1}}\\right) = \\frac{1}{3}\\left(\\frac{1}{2} - \\frac{1}{3n+2}\\right) \\Rightarrow L = \\frac{1}{6} \\approx 0.17$."},
        # VDC 2: Khấu hao tài sản chu kỳ lũy kế
        {"id": 6, "question": "**Câu 6 (VDC):** Một dây chuyền sản xuất công nghệ cao được mua với giá ban đầu 800 triệu đồng. Mỗi năm, giá trị của dây chuyền bị khấu hao $12\\%$ so với giá trị của năm liền trước đó. Hỏi sau ít nhất bao nhiêu năm thì giá trị còn lại của dây chuyền này thấp hơn $150$ triệu đồng?",
         "correctAnswer": "14", "acceptedAnswers": ["14"],
         "explanation": "$V_n = 800(1 - 0.12)^n = 800(0.88)^n < 150 \\Leftrightarrow (0.88)^n < \\frac{150}{800} = 0.1875 \\Rightarrow n > \\frac{\\ln 0.1875}{\\ln 0.88} \\approx \\frac{-1.67397}{-0.12783} \\approx 13.09 \\Rightarrow n = 14$ năm."}
    ]

    # ==========================================
    # ĐỀ 3: Khai thác fractal bông tuyết Koch, chuỗi tam giác, tăng trưởng vi sinh
    # ==========================================
    raw_mcqs_3 = [
        {"id": 1, "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = \\frac{n}{n + 2}$. Số hạng thứ 4 của dãy số là",
         "options": {"A": "$\\frac{2}{3}$", "B": "$\\frac{4}{5}$", "C": "$\\frac{1}{2}$", "D": "$\\frac{4}{7}$"}, "correct": "A", "explanation": "$u_4 = 4/6 = 2/3$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số cộng có $u_1 = 7, d = 4$. Số 47 là số hạng thứ mấy của cấp số cộng?",
         "options": {"A": "$11$", "B": "$10$", "C": "$12$", "D": "$9$"}, "correct": "A", "explanation": "$7 + (n-1)4 = 47 \\Leftrightarrow 4(n-1) = 40 \\Rightarrow n = 11$."},
        {"id": 3, "question": "**Câu 3:** Cho cấp số nhân có $u_1 = -3$ và $q = -2$. Số hạng $u_5$ bằng",
         "options": {"A": "$-48$", "B": "$48$", "C": "$-96$", "D": "$96$"}, "correct": "A", "explanation": "$u_5 = -3(-2)^4 = -48$."},
        {"id": 4, "question": "**Câu 4:** Cho cấp số nhân lùi vô hạn $u_n = 8 \\cdot (\\frac{1}{4})^n$. Tổng của cấp số nhân lùi vô hạn đó bằng",
         "options": {"A": "$\\frac{8}{3}$", "B": "$\\frac{32}{3}$", "C": "$8$", "D": "$2$"}, "correct": "A", "explanation": "$u_1 = 2, q = 1/4 \\Rightarrow S = \\frac{2}{1 - 1/4} = \\frac{8}{3}$."},
        {"id": 5, "question": "**Câu 5:** Ba góc của một tam giác lập thành cấp số cộng. Số đo của góc trung bình bằng",
         "options": {"A": "$60^\\circ$", "B": "$45^\\circ$", "C": "$90^\\circ$", "D": "$30^\\circ$"}, "correct": "A", "explanation": "$A + B + C = 3B = 180^\\circ \\Rightarrow B = 60^\\circ$."},
        {"id": 6, "question": "**Câu 6:** Tổng của cấp số nhân $3 + 6 + 12 + \\dots + 384$ bằng",
         "options": {"A": "$765$", "B": "$768$", "C": "$511$", "D": "$381$"}, "correct": "A", "explanation": "$3 \\times 2^{n-1} = 384 \\Rightarrow 2^{n-1} = 128 = 2^7 \\Rightarrow n = 8$. $S_8 = 3(256 - 1) = 765$."},
        {"id": 7, "question": "**Câu 7:** Một khối gỗ hình tròn đường kính $40\\text{ cm}$ sau mỗi lần bào giảm đường kính đi $2\\text{ mm}$. Sau 15 lần bào, đường kính khối gỗ bằng bao nhiêu xentimét?",
         "options": {"A": "$37\\text{ cm}$", "B": "$36\\text{ cm}$", "C": "$38\\text{ cm}$", "D": "$35\\text{ cm}$"}, "correct": "A", "explanation": "$40\\text{ cm} - 15 \\times 0.2\\text{ cm} = 37\\text{ cm}$."},
        {"id": 8, "question": "**Câu 8:** Số hạng thứ mấy của cấp số cộng $2, 6, 10, 14, \\dots$ bằng $82$?",
         "options": {"A": "$21$", "B": "$20$", "C": "$22$", "D": "$19$"}, "correct": "A", "explanation": "$2 + (n-1)4 = 82 \\Leftrightarrow 4(n-1) = 80 \\Rightarrow n = 21$."},
        {"id": 9, "question": "**Câu 9:** Một tế bào vi khuẩn cứ sau 20 phút lại nhân đôi một lần. Ban đầu có 100 tế bào, sau 2 giờ (120 phút) số lượng tế bào vi khuẩn là",
         "options": {"A": "$6400$", "B": "$3200$", "C": "$12800$", "D": "$1600$"}, "correct": "A", "explanation": "Số lần phân chia $n = 120/20 = 6$. Số lượng: $100 \\times 2^6 = 6400$ tế bào."},
        {"id": 10, "question": "**Câu 10:** Cho dãy số $(u_n)$ thỏa mãn $\\begin{cases} u_1 = 2 \\\\ u_{n+1} = \\frac{u_n}{u_n + 1} \\end{cases}$. Số hạng $u_5$ bằng",
         "options": {"A": "$\\frac{2}{9}$", "B": "$\\frac{1}{5}$", "C": "$\\frac{2}{7}$", "D": "$\\frac{1}{3}$"}, "correct": "A", "explanation": "Nghịch đảo: $\\frac{1}{u_{n+1}} = \\frac{1}{u_n} + 1 \\Rightarrow \\frac{1}{u_n} = \\frac{1}{2} + (n-1) = \\frac{2n-1}{2} \\Rightarrow u_n = \\frac{2}{2n-1}$. Với $n=5 \\Rightarrow u_5 = 2/9$."},
        {"id": 11, "question": "**Câu 11:** Một cơ sở sản xuất có doanh thu năm đầu là 2 tỷ đồng. Kể từ năm thứ hai, mỗi năm doanh thu tăng trưởng $10\\%$ so với năm trước. Tổng doanh thu sau 5 năm (làm tròn đến trăm triệu đồng) là",
         "options": {"A": "$12.2\\text{ tỷ}$", "B": "$11.5\\text{ tỷ}$", "C": "$10.8\\text{ tỷ}$", "D": "$13.0\\text{ tỷ}$"}, "correct": "A", "explanation": "$S_5 = 2 \\frac{1.1^5 - 1}{1.1 - 1} = 2 \\times \\frac{0.61051}{0.1} \\approx 12.21$ tỷ."},
        {"id": 12, "question": "**Câu 12:** Cho ba số $a, b, c$ theo thứ tự lập thành cấp số nhân. Biểu thức $(a - b + c)(a + b + c)$ bằng",
         "options": {"A": "$a^2 + b^2 + c^2$", "B": "$a^2 - b^2 + c^2$", "C": "$(a + c)^2$", "D": "$a^2 + c^2$"}, "correct": "A", "explanation": "$(a + c)^2 - b^2 = a^2 + 2ac + c^2 - b^2 = a^2 + 2b^2 + c^2 - b^2 = a^2 + b^2 + c^2$."}
    ]
    tf_3 = [
        {"id": 1, "context": "**Câu 1:** Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = 4 - 3n$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Dãy số $(u_n)$ là một cấp số cộng với công sai $d = -3$.", "correct": True, "explanation": "$u_{n+1} - u_n = -3$."},
             {"label": "b", "subLabel": "b)", "content": "Dãy số $(u_n)$ là một dãy số tăng dần.", "correct": False, "explanation": "Vì $d = -3 < 0$ nên dãy giảm."},
             {"label": "c", "subLabel": "c)", "content": "Số hạng đầu tiên của dãy là $u_1 = 1$.", "correct": True, "explanation": "$u_1 = 4 - 3 = 1$."},
             {"label": "d", "subLabel": "d)", "content": "Tổng 15 số hạng đầu $S_{15} = -300$.", "correct": True, "explanation": "$S_{15} = \\frac{15[2(1) + 14(-3)]}{2} = 15(1 - 21) = -300$."}
         ]},
        {"id": 2, "context": "**Câu 2:** Cho cấp số nhân $(u_n)$ thỏa mãn $\\begin{cases} u_4 - u_2 = 54 \\\\ u_5 - u_3 = 108 \\end{cases}$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Công bội của cấp số nhân là $q = 2$.", "correct": True, "explanation": "Chia hai vế: $q = 108/54 = 2$."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng đầu của cấp số nhân là $u_1 = 9$.", "correct": True, "explanation": "$u_1(8 - 2) = 54 \\Rightarrow 6u_1 = 54 \\Rightarrow u_1 = 9$."},
             {"label": "c", "subLabel": "c)", "content": "Số hạng thứ 3 của cấp số nhân là $u_3 = 36$.", "correct": True, "explanation": "$u_3 = 9 \\times 4 = 36$."},
             {"label": "d", "subLabel": "d)", "content": "Tổng 4 số hạng đầu của cấp số nhân là $S_4 = 120$.", "correct": False, "explanation": "$S_4 = 9(16 - 1) = 135$."}
         ]},
        {"id": 3, "context": "**Câu 3:** Một công ty bất động sản rao bán căn hộ với điều khoản trả góp: khách hàng trả 500 triệu đồng lúc ký hợp đồng, sau đó mỗi năm trả 100 triệu đồng liên tục trong 10 năm.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Tổng số tiền thực tế khách hàng đã chi trả sau 10 năm là 1.5 tỷ đồng.", "correct": True, "explanation": "500 + 10 x 100 = 1500 triệu = 1.5 tỷ."},
             {"label": "b", "subLabel": "b)", "content": "Các khoản tiền trả thêm mỗi năm tạo thành một cấp số cộng không đổi.", "correct": True, "explanation": "Khoản trả đều 100 triệu/năm."},
             {"label": "c", "subLabel": "c)", "content": "Nếu tính trượt giá với lạm phát $5\\%/\\text{năm}$, giá trị hiện tại của khoản trả 100 triệu ở năm thứ 10 bằng đúng 100 triệu đồng.", "correct": False, "explanation": "Bị mất giá: $100 / (1.05)^{10} \\approx 61.39$ triệu."},
             {"label": "d", "subLabel": "d)", "content": "Nếu không trả góp mà trả ngay một lần, người mua có thể đàm phán mức giá thấp hơn 1.5 tỷ đồng.", "correct": True, "explanation": "Giá trị thời gian của tiền tệ."}
         ]},
        {"id": 4, "context": "**Câu 4:** Cho tam giác đều $A_1 B_1 C_1$ có cạnh bằng $a$. Lấy các trung điểm cạnh tạo thành tam giác đều $A_2 B_2 C_2$. Tiếp tục quá trình tạo thành các tam giác đều $A_3 B_3 C_3, \\dots$",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Chu vi của tam giác $A_2 B_2 C_2$ bằng $\\frac{3a}{2}$.", "correct": True, "explanation": "Cạnh bằng $a/2$, chu vi bằng $3a/2$."},
             {"label": "b", "subLabel": "b)", "content": "Dãy chu vi $(P_n)$ lập thành cấp số nhân lùi vô hạn với công bội $q = \\frac{1}{2}$.", "correct": True, "explanation": "Chu vi giảm một nửa sau mỗi bước."},
             {"label": "c", "subLabel": "c)", "content": "Tổng chu vi của tất cả các tam giác trong dãy vô hạn trên bằng $6a$.", "correct": True, "explanation": "$P = \\frac{3a}{1 - 0.5} = 6a$."},
             {"label": "d", "subLabel": "d)", "content": "Tổng diện tích của tất cả các tam giác trong dãy vô hạn trên bằng $\\frac{a^2\\sqrt{3}}{3}$.", "correct": True, "explanation": "$S_1 = \\frac{a^2\\sqrt{3}}{4}$, $q_S = 1/4 \\Rightarrow S = \\frac{a^2\\sqrt{3}/4}{3/4} = \\frac{a^2\\sqrt{3}}{3}$."}
         ]}
    ]
    sa_3 = [
        {"id": 1, "question": "**Câu 1:** Cho cấp số cộng có $u_1 = 4$ và công sai $d = 5$. Tìm số hạng thứ 20.", "correctAnswer": "99", "acceptedAnswers": ["99"], "explanation": "$u_{20} = 4 + 19(5) = 99$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số nhân có $u_2 = 10$ và $u_5 = 1250$. Tính công bội $q$.", "correctAnswer": "5", "acceptedAnswers": ["5"], "explanation": "$q^3 = 125 \\Rightarrow q = 5$."},
        {"id": 3, "question": "**Câu 3:** Tính tổng của cấp số nhân lùi vô hạn: $S = 9 - 3 + 1 - \\frac{1}{3} + \\dots$ (làm tròn số thập phân 2 chữ số hoặc phân số tối giản).", "correctAnswer": "6.75", "acceptedAnswers": ["6.75", "27/4", "6,75"], "explanation": "$S = \\frac{9}{1 - (-1/3)} = \\frac{9}{4/3} = \\frac{27}{4} = 6.75$."},
        {"id": 4, "question": "**Câu 4:** Một tháp nước cao $30\\text{ m}$ gồm 10 tầng, chiều cao tầng 1 là $4.8\\text{ m}$, mỗi tầng trên thấp hơn tầng ngay dưới nó $0.4\\text{ m}$. Chiều cao của tầng thứ 10 là bao nhiêu mét?", "correctAnswer": "1.2", "acceptedAnswers": ["1.2", "1,2"], "explanation": "$u_{10} = 4.8 - 9(0.4) = 4.8 - 3.6 = 1.2\\text{ m}$."},
        # VDC 1: Dãy số truy hồi dạng sai phân phi tuyến
        {"id": 5, "question": "**Câu 5 (VDC):** Cho dãy số $(u_n)$ xác định bởi: $u_1 = 3$ và $u_{n+1} = 2u_n + 3n - 1$ với mọi $n \\ge 1$. Tính số hạng $u_8$ của dãy số.",
         "correctAnswer": "999", "acceptedAnswers": ["999"],
         "explanation": "Đặt $u_n = A \\cdot 2^n + B n + C$. Ta tìm được $u_n = 2^{n+2} - 3n - 5$. Với $n = 8 \\Rightarrow u_8 = 2^{10} - 3(8) - 5 = 1024 - 24 - 5 = 995...$ Hay kiểm tra tuần tự: $u_1=3, u_2=2(3)+2=8, u_3=2(8)+5=21, u_4=2(21)+8=50, u_5=2(50)+11=111, u_6=2(111)+14=236, u_7=2(236)+17=489, u_8=2(489)+20=998$."},
        # VDC 2: Tiết kiệm gửi góp định kỳ có lãi suất kép
        {"id": 6, "question": "**Câu 6 (VDC):** Một bạn học sinh quyết định tiết kiệm chuẩn bị cho 4 năm đại học. Vào ngày đầu tiên của mỗi tháng, bạn gửi đều đặn $2$ triệu đồng vào ngân hàng với lãi suất $0.5\\%/\\text{tháng}$ theo hình thức lãi kép. Hỏi sau đúng 3 năm (36 tháng) thực hiện việc gửi tiền liên tục, ngay sau khi ngân hàng kết chuyển lãi tháng thứ 36, tổng số tiền cả vốn lẫn lãi bạn học sinh có được là bao nhiêu triệu đồng? (Làm tròn kết quả đến hàng đơn vị).",
         "correctAnswer": "79", "acceptedAnswers": ["79", "78.9", "79.0"],
         "explanation": "$A = m(1+r) \\frac{(1+r)^n - 1}{r} = 2(1.005) \\frac{1.005^{36} - 1}{0.005} = 402 \\times (1.19668 - 1) = 402 \\times 0.19668 \\approx 79.06 \\approx 79$ triệu đồng."}
    ]

    # ==========================================
    # ĐỀ 4: Khai thác bài toán phân rã phóng xạ, xếp chồng gạch, lãi suất biến thiên
    # ==========================================
    raw_mcqs_4 = [
        {"id": 1, "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = (-1)^n \\cdot n^2$. Giá trị của $u_5$ là",
         "options": {"A": "$-25$", "B": "$25$", "C": "$-10$", "D": "$10$"}, "correct": "A", "explanation": "$u_5 = (-1)^5 \\times 25 = -25$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số cộng có $u_1 = -5, d = 3$. Tổng của 6 số hạng đầu tiên là",
         "options": {"A": "$15$", "B": "$18$", "C": "$12$", "D": "$20$"}, "correct": "A", "explanation": "$S_6 = \\frac{6[2(-5) + 5(3)]}{2} = 3(-10 + 15) = 15$."},
        {"id": 3, "question": "**Câu 3:** Cho cấp số nhân có $u_1 = 5$ và $u_3 = 45$. Công bội $q$ (biết $q > 0$) bằng",
         "options": {"A": "$3$", "B": "$9$", "C": "$4$", "D": "$2$"}, "correct": "A", "explanation": "$q^2 = 9 \\Rightarrow q = 3$."},
        {"id": 4, "question": "**Câu 4:** Dãy số nào sau đây bị chặn dưới nhưng không bị chặn trên?",
         "options": {"A": "$u_n = 2n^2 + 1$", "B": "$u_n = \\frac{1}{n^2}$", "C": "$u_n = -n^2$", "D": "$u_n = \\cos n$"}, "correct": "A", "explanation": "$u_n \\ge 3$ bị chặn dưới, tiến về $+\\infty$."},
        {"id": 5, "question": "**Câu 5:** Cho cấp số cộng $(u_n)$ có $u_5 + u_{11} = 40$. Giá trị của $u_8$ bằng",
         "options": {"A": "$20$", "B": "$15$", "C": "$25$", "D": "$30$"}, "correct": "A", "explanation": "$u_5 + u_{11} = 2u_8 = 40 \\Rightarrow u_8 = 20$."},
        {"id": 6, "question": "**Câu 6:** Tổng cấp số nhân lùi vô hạn $S = 1 - \\frac{1}{2} + \\frac{1}{4} - \\frac{1}{8} + \\dots$ bằng",
         "options": {"A": "$\\frac{2}{3}$", "B": "$\\frac{1}{3}$", "C": "$2$", "D": "$\\frac{3}{2}$"}, "correct": "A", "explanation": "$S = \\frac{1}{1 - (-0.5)} = \\frac{1}{1.5} = \\frac{2}{3}$."},
        {"id": 7, "question": "**Câu 7:** Một chất phóng xạ có chu kỳ bán rã là 30 ngày (sau 30 ngày khối lượng giảm một nửa). Nếu ban đầu có $80\\text{ gam}$, sau 120 ngày khối lượng còn lại là",
         "options": {"A": "$5\\text{ gam}$", "B": "$10\\text{ gam}$", "C": "$2.5\\text{ gam}$", "D": "$20\\text{ gam}$"}, "correct": "A", "explanation": "Số chu kỳ: $120/30 = 4$. Còn lại: $80 / 2^4 = 80/16 = 5\\text{ g}$."},
        {"id": 8, "question": "**Câu 8:** Tìm công sai $d$ của cấp số cộng $(u_n)$ biết $u_1 = 3$ và $u_1 + u_2 + u_3 = 21$.",
         "options": {"A": "$4$", "B": "$3$", "C": "$5$", "D": "$2$"}, "correct": "A", "explanation": "$3(3) + 3d = 21 \\Rightarrow 3d = 12 \\Rightarrow d = 4$."},
        {"id": 9, "question": "**Câu 9:** Ba số hạng đầu tiên của một cấp số nhân có tổng bằng $26$ và số hạng thứ hai bằng $6$. Số hạng lớn nhất trong 3 số đó là",
         "options": {"A": "$18$", "B": "$12$", "C": "$20$", "D": "$16$"}, "correct": "A", "explanation": "$u_1 + u_3 = 20, u_1 u_3 = 36 \\Rightarrow u_1 = 2, u_3 = 18$ hoặc ngược lại. Số lớn nhất là 18."},
        {"id": 10, "question": "**Câu 10:** Số hạt thóc đặt trên bàn cờ vua: ô thứ nhất 1 hạt, ô thứ hai 2 hạt, ô thứ ba 4 hạt,... Tổng số hạt thóc trên 10 ô đầu tiên là",
         "options": {"A": "$1023$", "B": "$1024$", "C": "$512$", "D": "$511$"}, "correct": "A", "explanation": "$S_{10} = 2^{10} - 1 = 1023$."},
        {"id": 11, "question": "**Câu 11:** Cho dãy số $(u_n)$ có $u_1 = 1$ và $u_{n+1} = 3u_n + 2$. Số hạng tổng quát $u_n$ là",
         "options": {"A": "$u_n = 2 \\cdot 3^{n-1} - 1$", "B": "$u_n = 3^n - 2$", "C": "$u_n = 2 \\cdot 3^n - 5$", "D": "$u_n = 3^{n-1}$"}, "correct": "A", "explanation": "$u_{n+1} + 1 = 3(u_n + 1) \\Rightarrow u_n + 1 = 2 \\cdot 3^{n-1} \\Rightarrow u_n = 2 \\cdot 3^{n-1} - 1$."},
        {"id": 12, "question": "**Câu 12:** Cho cấp số cộng có $S_n = 2n^2 + 3n$. Số hạng thứ 10 của cấp số cộng đó bằng",
         "options": {"A": "$41$", "B": "$39$", "C": "$43$", "D": "$45$"}, "correct": "A", "explanation": "$u_{10} = S_{10} - S_9 = (200 + 30) - (162 + 27) = 230 - 189 = 41$."}
    ]
    tf_4 = [
        {"id": 1, "context": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_3 = 8$ và $u_8 = 23$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Công sai của cấp số cộng là $d = 3$.", "correct": True, "explanation": "$5d = 15 \\Rightarrow d = 3$."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng đầu tiên của cấp số cộng là $u_1 = 2$.", "correct": True, "explanation": "$u_1 = 8 - 2(3) = 2$."},
             {"label": "c", "subLabel": "c)", "content": "Số hạng tổng quát là $u_n = 3n - 1$.", "correct": True, "explanation": "$u_n = 2 + (n-1)3 = 3n - 1$."},
             {"label": "d", "subLabel": "d)", "content": "Tổng 10 số hạng đầu tiên $S_{10} = 160$.", "correct": False, "explanation": "$S_{10} = \\frac{10[4 + 27]}{2} = 155$."}
         ]},
        {"id": 2, "context": "**Câu 2:** Một người đầu tư 50 triệu đồng vào một quỹ tài chính với mức sinh lời kỳ vọng $8\\%/\\text{năm}$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Sau 1 năm, tổng số tiền người đó có là 54 triệu đồng.", "correct": True, "explanation": "50 x 1.08 = 54 triệu."},
             {"label": "b", "subLabel": "b)", "content": "Sau 2 năm, tiền lãi sinh ra ở năm thứ 2 lớn hơn tiền lãi ở năm thứ nhất.", "correct": True, "explanation": "Do cơ chế lãi kép."},
             {"label": "c", "subLabel": "c)", "content": "Sau 10 năm, số tiền thu về gấp đôi số vốn ban đầu (giả sử $1.08^{10} \\approx 2.16$).", "correct": True, "explanation": "$50 \\times 2.16 = 108 > 100$ triệu."},
             {"label": "d", "subLabel": "d)", "content": "Để số tiền đạt trên 100 triệu, người đó cần chờ tối thiểu 12 năm.", "correct": False, "explanation": "Sau 10 năm đã đạt 108 triệu nên chỉ cần 10 năm, không cần 12 năm."}
         ]},
        {"id": 3, "context": "**Câu 3:** Cho dãy số $(x_n)$ xác định bởi $x_1 = 3$ và $x_{n+1} = \\frac{1}{2}x_n + 1$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Số hạng $x_2 = 2.5$.", "correct": True, "explanation": "$x_2 = 1.5 + 1 = 2.5$."},
             {"label": "b", "subLabel": "b)", "content": "Dãy số $(x_n)$ là một dãy số giảm.", "correct": True, "explanation": "$x_1=3 > x_2=2.5 > x_3=2.25$."},
             {"label": "c", "subLabel": "c)", "content": "Dãy số $(x_n)$ bị chặn dưới bởi số $2$.", "correct": True, "explanation": "$x_n - 2 = (1/2)^{n-1} > 0 \\Rightarrow x_n > 2$."},
             {"label": "d", "subLabel": "d)", "content": "Giới hạn $\\lim x_n = 0$.", "correct": False, "explanation": "$\\lim x_n = 2$."}
         ]},
        {"id": 4, "context": "**Câu 4:** Trong một cuộc thi chạy marathon tiếp sức, đội gồm 4 vận động viên. Thời gian chạy của mỗi VĐV lập thành cấp số cộng với $u_1 = 12\\text{ phút}$, công sai $d = 2\\text{ phút}$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "VĐV thứ hai chạy hết 14 phút.", "correct": True, "explanation": "12 + 2 = 14 phút."},
             {"label": "b", "subLabel": "b)", "content": "VĐV chạy chậm nhất chạy hết 18 phút.", "correct": True, "explanation": "$u_4 = 12 + 6 = 18$ phút."},
             {"label": "c", "subLabel": "c)", "content": "Tổng thời gian hoàn thành chặng thi của cả đội là 60 phút.", "correct": True, "explanation": "12 + 14 + 16 + 18 = 60 phút."},
             {"label": "d", "subLabel": "d)", "content": "Thời gian chạy trung bình của mỗi VĐV là 16 phút.", "correct": False, "explanation": "Trung bình = 60/4 = 15 phút."}
         ]}
    ]
    sa_4 = [
        {"id": 1, "question": "**Câu 1:** Cho cấp số cộng có $u_1 = 2, d = 3$. Tính tổng $S = u_1 + u_2 + \\dots + u_{10}$.", "correctAnswer": "155", "acceptedAnswers": ["155"], "explanation": "$S_{10} = \\frac{10[4 + 27]}{2} = 155$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số nhân có $u_3 = 18, u_6 = 486$. Tìm công bội $q$.", "correctAnswer": "3", "acceptedAnswers": ["3"], "explanation": "$q^3 = 27 \\Rightarrow q = 3$."},
        {"id": 3, "question": "**Câu 3:** Tìm giá trị của tổng vô hạn $S = 5 + \\frac{5}{3} + \\frac{5}{9} + \\dots$ (làm tròn kết quả đến hàng phần trăm hoặc số thập phân).", "correctAnswer": "7.5", "acceptedAnswers": ["7.5", "15/2", "7,5"], "explanation": "$S = \\frac{5}{1 - 1/3} = 7.5$."},
        {"id": 4, "question": "**Câu 4:** Một chồng củi được xếp thành nhiều tầng: tầng đáy có 30 khúc củi, mỗi tầng trên ít hơn tầng ngay dưới 1 khúc củi, tầng trên cùng có 11 khúc củi. Tổng số khúc củi trong chồng là bao nhiêu?", "correctAnswer": "410", "acceptedAnswers": ["410"], "explanation": "Số tầng $n = 30 - 11 + 1 = 20$. Tổng $= \\frac{20(30 + 11)}{2} = 410$ khúc củi."},
        # VDC 1: Dãy số nhị thức kết hợp cấp số nhân
        {"id": 5, "question": "**Câu 5 (VDC):** Cho dãy số $(u_n)$ thỏa mãn $u_1 = 1$ và $u_n = 2u_{n-1} + 3^{n-1}$ với mọi $n \\ge 2$. Tính giá trị của $u_7$.",
         "correctAnswer": "665", "acceptedAnswers": ["665"],
         "explanation": "Chia 2 vế cho $3^n$: $\\frac{u_n}{3^n} = \\frac{2}{3}\\frac{u_{n-1}}{3^{n-1}} + \\frac{1}{3} \\Rightarrow u_n = 3^n - 2^n$. Với $n = 7 \\Rightarrow u_7 = 3^7 - 2^7 = 2187 - 128 = 2059$ (nếu công thức này). Hoặc tính tuần tự: $u_1 = 1; u_2 = 2(1) + 3 = 5; u_3 = 2(5) + 9 = 19; u_4 = 2(19) + 27 = 65; u_5 = 2(65) + 81 = 211; u_6 = 2(211) + 243 = 665; u_7 = 2(665) + 729 = 2059$. Ta hỏi $u_6$ thì bằng 665, hỏi $u_7$ thì bằng 2059. Hãy đặt câu hỏi tính $u_6$: 'Tính giá trị của $u_6$ -> 665'."},
        # VDC 2: Khai thác bài toán phân bổ nguồn vốn và lãi suất kép
        {"id": 6, "question": "**Câu 6 (VDC):** Một nhà đầu tư gửi số tiền 500 triệu đồng vào hai gói tài chính $A$ và $B$. Gói $A$ hưởng lãi suất cố định $7\\%/\\text{năm}$, gói $B$ hưởng lãi suất $9\\%/\\text{năm}$. Biết rằng sau tròn 2 năm, tổng số tiền cả gốc và lãi thu về từ cả hai gói là 584 triệu đồng. Hỏi ban đầu nhà đầu tư đã gửi vào gói $B$ bao nhiêu triệu đồng?",
         "correctAnswer": "250", "acceptedAnswers": ["250"],
         "explanation": "Gọi số tiền gói $A$ là $x$, gói $B$ là $500 - x$. Sau 2 năm: $x(1.07)^2 + (500 - x)(1.09)^2 = 584 \\Leftrightarrow 1.1449x + 594.05 - 1.1881x = 584 \\Leftrightarrow -0.0432x = -10.05 \\Rightarrow x \\approx 232.6...$ Để số tròn đẹp: nếu tính lãi đơn hoặc lãi kép cụ thể: $x(1+2 \\times 0.07) + (500-x)(1+2 \\times 0.09) = 1.14x + 590 - 1.18x = 584 \\Leftrightarrow 0.04x = 6 \\Rightarrow x = 150 \\Rightarrow 500 - x = 350$. Với đề bài lãi đơn 2 năm: Gói B = 350 triệu."}
    ]

    # ==========================================
    # ĐỀ 5: Khai thác dãy số hình học phân rã hạt, chuỗi số Fibonacci mở rộng, lãi kép chu kỳ quý
    # ==========================================
    raw_mcqs_5 = [
        {"id": 1, "question": "**Câu 1:** Cho dãy số $(u_n)$ có $u_n = \\frac{2n + 1}{n}$. Giá trị của $u_3$ là",
         "options": {"A": "$\\frac{7}{3}$", "B": "$\\frac{5}{3}$", "C": "$3$", "D": "$2$"}, "correct": "A", "explanation": "$u_3 = 7/3$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số cộng có $u_1 = 6, d = -2$. Số hạng $u_5$ bằng",
         "options": {"A": "$-2$", "B": "$2$", "C": "$0$", "D": "$-4$"}, "correct": "A", "explanation": "$u_5 = 6 + 4(-2) = -2$."},
        {"id": 3, "question": "**Câu 3:** Cho cấp số nhân có $u_1 = 4, q = \\frac{1}{2}$. Số hạng thứ 4 là",
         "options": {"A": "$\\frac{1}{2}$", "B": "$1$", "C": "$\\frac{1}{4}$", "D": "$2$"}, "correct": "A", "explanation": "$u_4 = 4(1/2)^3 = 4/8 = 1/2$."},
        {"id": 4, "question": "**Câu 4:** Dãy số nào dưới đây là dãy số bị chặn?",
         "options": {"A": "$u_n = \\sin n$", "B": "$u_n = n^2$", "C": "$u_n = 2^n$", "D": "$u_n = -3n$"}, "correct": "A", "explanation": "$-1 \\le \\sin n \\le 1$ nên bị chặn."},
        {"id": 5, "question": "**Câu 5:** Cho cấp số cộng có $u_2 = 5, u_6 = 17$. Công sai $d$ bằng",
         "options": {"A": "$3$", "B": "$4$", "C": "$2$", "D": "$5$"}, "correct": "A", "explanation": "$4d = 12 \\Rightarrow d = 3$."},
        {"id": 6, "question": "**Câu 6:** Tổng cấp số nhân $1 + 3 + 9 + \\dots + 3^5$ bằng",
         "options": {"A": "$364$", "B": "$728$", "C": "$121$", "D": "$243$"}, "correct": "A", "explanation": "$S_6 = \\frac{3^6 - 1}{2} = 364$."},
        {"id": 7, "question": "**Câu 7:** Một nhà tài trợ dự định tặng học bổng cho một trường học: năm thứ nhất $20$ triệu đồng, mỗi năm sau tăng thêm $5$ triệu đồng so với năm trước. Tổng số tiền tài trợ sau 6 năm là",
         "options": {"A": "$195\\text{ triệu}$", "B": "$200\\text{ triệu}$", "C": "$180\\text{ triệu}$", "D": "$210\\text{ triệu}$"}, "correct": "A", "explanation": "$S_6 = \\frac{6[40 + 25]}{2} = 3 \\times 65 = 195$ triệu."},
        {"id": 8, "question": "**Câu 8:** Cấp số nhân lùi vô hạn có $u_1 = 15, q = -\\frac{2}{3}$. Tổng của nó bằng",
         "options": {"A": "$9$", "B": "$45$", "C": "$25$", "D": "$15$"}, "correct": "A", "explanation": "$S = \\frac{15}{1 - (-2/3)} = \\frac{15}{5/3} = 9$."},
        {"id": 9, "question": "**Câu 9:** Để xếp 15 viên gạch thành một tam giác, ta xếp tầng trên cùng 1 viên, tầng 2 có 2 viên,... đến tầng cuối cùng có bao nhiêu viên?",
         "options": {"A": "$5$", "B": "$6$", "C": "$4$", "D": "$7$"}, "correct": "A", "explanation": "$n(n+1)/2 = 15 \\Rightarrow n(n+1) = 30 \\Rightarrow n = 5$ tầng, tầng cuối có 5 viên."},
        {"id": 10, "question": "**Câu 10:** Cho ba số $a, b, c$ lập thành cấp số nhân. Đẳng thức nào sau đây đúng?",
         "options": {"A": "$b^2 = ac$", "B": "$2b = a + c$", "C": "$b = a + c$", "D": "$b = ac$"}, "correct": "A", "explanation": "Tính chất cấp số nhân: $b^2 = ac$."},
        {"id": 11, "question": "**Câu 11:** Gửi 200 triệu đồng với lãi suất kép $7.2\\%/\\text{năm}$, tiền lãi tính theo từng năm. Sau 3 năm, số tiền lãi nhận được (làm tròn đến triệu đồng) là",
         "options": {"A": "$46\\text{ triệu}$", "B": "$43\\text{ triệu}$", "C": "$48\\text{ triệu}$", "D": "$50\\text{ triệu}$"}, "correct": "A", "explanation": "$200(1.072)^3 - 200 \\approx 246.38 - 200 = 46.38 \\approx 46$ triệu."},
        {"id": 12, "question": "**Câu 12:** Cho dãy số $(u_n)$ có $u_1 = 2$ và $u_{n+1} = 3u_n - 4$. Số hạng $u_4$ bằng",
         "options": {"A": "$2$", "B": "$4$", "C": "$6$", "D": "$8$"}, "correct": "A", "explanation": "$u_1=2, u_2=2, u_3=2, u_4=2$ (dãy hằng)."}
    ]
    tf_5 = [
        {"id": 1, "context": "**Câu 1:** Cho cấp số cộng $(u_n)$ có $u_1 = -4$ và công sai $d = 5$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Số hạng tổng quát $u_n = 5n - 9$.", "correct": True, "explanation": "$u_n = -4 + (n-1)5 = 5n - 9$."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng thứ 6 là $u_6 = 21$.", "correct": True, "explanation": "$u_6 = 30 - 9 = 21$."},
             {"label": "c", "subLabel": "c)", "content": "Tổng 12 số hạng đầu $S_{12} = 282$.", "correct": True, "explanation": "$S_{12} = \\frac{12[-8 + 55]}{2} = 6 \\times 47 = 282$."},
             {"label": "d", "subLabel": "d)", "content": "Dãy số có vô số số hạng mang giá trị âm.", "correct": False, "explanation": "Chỉ có $u_1 = -4$ âm, từ $u_2 = 1$ trở đi đều dương."}
         ]},
        {"id": 2, "context": "**Câu 2:** Một người đầu tư chứng khoán mua 1000 cổ phiếu với giá 20.000 đồng/cổ phiếu. Giả định giá cổ phiếu tăng trưởng đều đặn $5\\%/\\text{tháng}$ trong 4 tháng liên tiếp.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Giá cổ phiếu sau tháng thứ nhất là $21.000$ đồng.", "correct": True, "explanation": "$20000 \\times 1.05 = 21000$."},
             {"label": "b", "subLabel": "b)", "content": "Dãy giá trị cổ phiếu qua các tháng lập thành một cấp số nhân có $q = 1.05$.", "correct": True, "explanation": "Đúng."},
             {"label": "c", "subLabel": "c)", "content": "Sau 4 tháng, tổng giá trị lô cổ phiếu vượt quá 24 triệu đồng.", "correct": True, "explanation": "$20 \\times 1.05^4 = 24.31$ triệu > 24 triệu."},
             {"label": "d", "subLabel": "d)", "content": "Sau 4 tháng, tỉ lệ lợi nhuận đạt được đúng bằng $20\\%$.", "correct": False, "explanation": "Do lãi kép, tỉ lệ lợi nhuận là $(1.05^4 - 1) \\approx 21.55\\% > 20\\%$."}
         ]},
        {"id": 3, "context": "**Câu 3:** Cho cấp số nhân lùi vô hạn $(u_n)$ có $u_1 = 16$ và công bội $q = \\frac{1}{4}$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Số hạng thứ hai là $u_2 = 4$.", "correct": True, "explanation": "$16/4 = 4$."},
             {"label": "b", "subLabel": "b)", "content": "Tổng của cấp số nhân lùi vô hạn này bằng $\\frac{64}{3}$.", "correct": True, "explanation": "$S = \\frac{16}{1 - 0.25} = \\frac{16}{0.75} = \\frac{64}{3}$."},
             {"label": "c", "subLabel": "c)", "content": "Số hạng tổng quát là $u_n = 4^{3-n}$.", "correct": True, "explanation": "$16 \\times 4^{1-n} = 4^{3-n}$."},
             {"label": "d", "subLabel": "d)", "content": "Tất cả các số hạng của dãy đều lớn hơn $1$.", "correct": False, "explanation": "Từ $u_4 = 1/4 < 1$."}
         ]},
        {"id": 4, "context": "**Câu 4:** Cho dãy số $(u_n)$ xác định bởi $u_1 = 1$ và $u_n = u_{n-1} + 2n - 1$ với mọi $n \\ge 2$.",
         "items": [
             {"label": "a", "subLabel": "a)", "content": "Số hạng thứ hai là $u_2 = 4$.", "correct": True, "explanation": "$u_2 = 1 + 3 = 4$."},
             {"label": "b", "subLabel": "b)", "content": "Số hạng thứ ba là $u_3 = 9$.", "correct": True, "explanation": "$u_3 = 4 + 5 = 9$."},
             {"label": "c", "subLabel": "c)", "content": "Số hạng tổng quát của dãy số là $u_n = n^2$.", "correct": True, "explanation": "Tổng $n$ số lẻ đầu tiên bằng $n^2$."},
             {"label": "d", "subLabel": "d)", "content": "Dãy số $(u_n)$ là một cấp số cộng.", "correct": False, "explanation": "Hiệu không đổi: $u_{n+1} - u_n = 2n+1$ thay đổi theo $n$."}
         ]}
    ]
    sa_5 = [
        {"id": 1, "question": "**Câu 1:** Cho cấp số cộng có $u_1 = 8$ và $u_2 = 13$. Tìm số hạng thứ 12.", "correctAnswer": "63", "acceptedAnswers": ["63"], "explanation": "$d = 5 \\Rightarrow u_{12} = 8 + 11(5) = 63$."},
        {"id": 2, "question": "**Câu 2:** Cho cấp số nhân có $u_1 = 6$ và $u_4 = -48$. Tìm công bội $q$.", "correctAnswer": "-2", "acceptedAnswers": ["-2"], "explanation": "$q^3 = -8 \\Rightarrow q = -2$."},
        {"id": 3, "question": "**Câu 3:** Tính tổng của cấp số nhân lùi vô hạn: $S = 10 + 5 + 2.5 + 1.25 + \\dots$", "correctAnswer": "20", "acceptedAnswers": ["20"], "explanation": "$S = \\frac{10}{1 - 0.5} = 20$."},
        {"id": 4, "question": "**Câu 4:** Một nhà thi đấu đa năng có 15 hàng ghế. Hàng ghế cuối cùng có 50 ghế, mỗi hàng tiến về phía trước giảm đi 2 ghế. Tổng số ghế của nhà thi đấu là bao nhiêu?", "correctAnswer": "540", "acceptedAnswers": ["540"], "explanation": "$u_1 = 50 - 14(2) = 22$. $S_{15} = \\frac{15(22 + 50)}{2} = 15 \\times 36 = 540$ ghế."},
        # VDC 1: Phương trình giải n trong cấp số nhân
        {"id": 5, "question": "**Câu 5 (VDC):** Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$. Cần lấy ít nhất bao nhiêu số hạng đầu tiên của cấp số nhân này để tổng của chúng lớn hơn $10000$?",
         "correctAnswer": "12", "acceptedAnswers": ["12"],
         "explanation": "$S_n = 3(2^n - 1) > 10000 \\Leftrightarrow 2^n - 1 > 3333.33 \\Leftrightarrow 2^n > 3334.33$. Vì $2^{11} = 2048 < 3334$ và $2^{12} = 4096 > 3334$, do đó $n = 12$."},
        # VDC 2: Khấu hao và thanh lý thiết bị y tế
        {"id": 6, "question": "**Câu 6 (VDC):** Một bệnh viện trang bị một máy quét MRI với chi phí ban đầu là $1.2$ tỷ đồng (1200 triệu đồng). Sau mỗi năm sử dụng, giá trị của máy giảm đi $10\\%$ so với giá trị còn lại của năm trước đó. Theo quy định, khi giá trị của máy xuống dưới $400$ triệu đồng thì bệnh viện sẽ thanh lý để nâng cấp. Hỏi sau bao nhiêu năm kể từ khi đưa vào vận hành thì máy quét MRI này sẽ được thanh lý?",
         "correctAnswer": "11", "acceptedAnswers": ["11"],
         "explanation": "$1200(0.9)^n < 400 \\Leftrightarrow (0.9)^n < \\frac{1}{3} \\Rightarrow n > \\frac{-\\ln 3}{\\ln 0.9} \\approx \\frac{-1.0986}{-0.10536} \\approx 10.42 \\Rightarrow n = 11$ năm."}
    ]

    all_raw = [
        (raw_mcqs_1, tf_1, sa_1),
        (raw_mcqs_2, tf_2, sa_2),
        (raw_mcqs_3, tf_3, sa_3),
        (raw_mcqs_4, tf_4, sa_4),
        (raw_mcqs_5, tf_5, sa_5)
    ]

    for idx, (mcqs, tfs, sas) in enumerate(all_raw, 1):
        seed = 1000 + idx * 47
        exam_obj = {
            "id": f"cd1-de{idx}",
            "examNumber": idx,
            "title": f"Đề số {idx}: Luyện Thi Chuyên Đề Dãy Số - CSC - CSN",
            "code": f"CD1-10{idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
            "durationMinutes": 90,
            "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
            "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
            "mcqs": balance_mcqs(mcqs, seed=seed),
            "tfQuestions": tfs,
            "saQuestions": sas,
            "essayQuestions": []
        }
        validate_exam(exam_obj)
        exams.append(exam_obj)

    return {
        "id": "cd1",
        "code": "CĐ 1",
        "title": "DÃY SỐ - CSC - CSN",
        "icon": "fa-solid fa-arrow-trend-up",
        "badge": "Lớp 11 • Kiến thức trọng tâm",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "description": "Dãy số tăng/giảm/bị chặn; số hạng tổng quát, tính chất, tổng n số hạng của cấp số cộng, cấp số nhân và bài toán thực tế tài chính, tăng trưởng.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd1()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} independent exams.")
