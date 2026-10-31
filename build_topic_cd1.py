# -*- coding: utf-8 -*-
"""
Chuyên đề 1: DÃY SỐ - CẤP SỐ CỘNG - CẤP SỐ NHÂN
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc 2025-2026
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd1():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Dãy số -->
  <div class="bg-indigo-50/70 border-l-4 border-indigo-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-indigo-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-arrow-trend-up text-indigo-600"></i>
      1. Khái Niệm & Tính Chất Của Dãy Số
    </h4>
    <ul class="list-disc pl-5 space-y-1.5 text-[11.5pt]">
      <li><strong>Định nghĩa:</strong> Dãy số vô hạn là hàm số $u: \\mathbb{N}^* \\to \\mathbb{R}, n \\mapsto u_n$. Ký hiệu $(u_n)$.</li>
      <li><strong>Dãy số tăng:</strong> $u_{n+1} > u_n$ với mọi $n \\in \\mathbb{N}^*$ (hoặc $\\frac{u_{n+1}}{u_n} > 1$ nếu $u_n > 0$).</li>
      <li><strong>Dãy số giảm:</strong> $u_{n+1} < u_n$ với mọi $n \\in \\mathbb{N}^*$ (hoặc $\\frac{u_{n+1}}{u_n} < 1$ nếu $u_n > 0$).</li>
      <li><strong>Dãy số bị chặn:</strong> Bị chặn trên nếu $\\exists M: u_n \\le M$; Bị chặn dưới nếu $\\exists m: u_n \\ge m$; Bị chặn nếu $m \\le u_n \\le M, \\forall n \\in \\mathbb{N}^*$.</li>
    </ul>
  </div>

  <!-- Phần 2: Cấp số cộng -->
  <div class="bg-teal-50/70 border-l-4 border-teal-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-teal-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-calculator text-teal-600"></i>
      2. Cấp Số Cộng (CSC)
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-teal-200 shadow-xs">
        <p class="font-bold text-teal-900 mb-1">Định nghĩa & Số hạng tổng quát:</p>
        <p>$u_{n+1} = u_n + d$ ($d$ là công sai)</p>
        <p class="mt-1 text-teal-800 font-semibold">$u_n = u_1 + (n - 1)d$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-teal-200 shadow-xs">
        <p class="font-bold text-teal-900 mb-1">Tính chất & Tổng $n$ số hạng đầu:</p>
        <p>$u_k = \\frac{u_{k-1} + u_{k+1}}{2}$ ($k \\ge 2$)</p>
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
        <p class="mt-1 text-amber-800 font-semibold">Nếu $|q| < 1$: $S = \\lim S_n = \\frac{u_1}{1 - q}$</p>
      </div>
    </div>
  </div>

  <!-- Phần 4: Mô hình Toán Thực Tế -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-coins text-purple-600"></i>
      4. Mô Hình Toán Thực Tế Trọng Tâm
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-2.5 rounded-xl border border-purple-200">
        <span class="font-bold text-purple-900">Tiết kiệm lãi kép:</span> Gửi $P$ đồng, lãi suất $r$/kỳ: $A_n = P(1 + r)^n$.
      </div>
      <div class="bg-white p-2.5 rounded-xl border border-purple-200">
        <span class="font-bold text-purple-900">Gửi tiền định kỳ đầu mỗi tháng:</span> Gửi $m$ đồng mỗi đầu tháng: $S_n = \\frac{m(1+r)[(1+r)^n - 1]}{r}$.
      </div>
      <div class="bg-white p-2.5 rounded-xl border border-purple-200">
        <span class="font-bold text-purple-900">Vay nợ trả góp hàng tháng:</span> Nợ $P$, trả đều $m$ đồng cuối tháng: $A_n = P(1+r)^n - m\\frac{(1+r)^n - 1}{r}$. Để hết nợ sau $n$ kỳ: $m = \\frac{P \\cdot r \\cdot (1+r)^n}{(1+r)^n - 1}$.
      </div>
      <div class="bg-white p-2.5 rounded-xl border border-purple-200">
        <span class="font-bold text-purple-900">Bóng nảy & Hình học fractal:</span> Tổng quãng đường bóng nảy từ độ cao $h$ với hệ số nảy $k < 1$: $S = h + 2\\sum_{i=1}^\\infty h k^i = h + \\frac{2hk}{1 - k} = h \\frac{1 + k}{1 - k}$.
      </div>
    </div>
  </div>
</div>
"""

    exams = []
    
    # 5 Exams for CD1
    for exam_idx in range(1, 6):
        seed = 1000 + exam_idx * 17
        
        # Base questions tailored for exam 1..5 with unique real-world numbers
        u1_val = 3 + exam_idx
        d_val = 2 + exam_idx
        q_val = 2 if exam_idx % 2 == 1 else 3
        
        raw_mcqs = [
            {
                "id": 1,
                "question": f"Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = {d_val}n - {u1_val}$. Số hạng thứ 5 của dãy số là:",
                "options": {
                    "A": f"${d_val * 5 - u1_val}$",
                    "B": f"${d_val * 4 - u1_val}$",
                    "C": f"${d_val * 5 + u1_val}$",
                    "D": f"${d_val * 6 - u1_val}$"
                },
                "correct": "A",
                "explanation": f"Thay $n = 5$ ta được: $u_5 = {d_val}(5) - {u1_val} = {d_val * 5 - u1_val}$."
            },
            {
                "id": 2,
                "question": "Dãy số nào sau đây là một dãy số tăng?",
                "options": {
                    "A": "$u_n = 3n + 1$",
                    "B": "$u_n = \\frac{1}{n}$",
                    "C": "$u_n = (-1)^n$",
                    "D": "$u_n = 5 - 2n$"
                },
                "correct": "A",
                "explanation": "$u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3 > 0$ nên dãy số tăng."
            },
            {
                "id": 3,
                "question": f"Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = {u1_val}$ và công sai $d = {d_val}$. Số hạng tổng quát $u_n$ là:",
                "options": {
                    "A": f"$u_n = {d_val}n + {u1_val - d_val}$",
                    "B": f"$u_n = {d_val}n - {u1_val}$",
                    "C": f"$u_n = {u1_val}n + {d_val}$",
                    "D": f"$u_n = {d_val}n + {u1_val}$"
                },
                "correct": "A",
                "explanation": f"$u_n = u_1 + (n - 1)d = {u1_val} + (n - 1){d_val} = {d_val}n + {u1_val - d_val}$."
            },
            {
                "id": 4,
                "question": f"Cho cấp số nhân $(u_n)$ có $u_1 = {u1_val}$ và công bội $q = {q_val}$. Số hạng thứ 4 của cấp số nhân bằng:",
                "options": {
                    "A": f"${u1_val * (q_val**3)}$",
                    "B": f"${u1_val * (q_val**4)}$",
                    "C": f"${u1_val * q_val * 4}$",
                    "D": f"${u1_val + 3 * q_val}$"
                },
                "correct": "A",
                "explanation": f"$u_4 = u_1 \\cdot q^3 = {u1_val} \\cdot {q_val}^3 = {u1_val * (q_val**3)}$."
            },
            {
                "id": 5,
                "question": "Ba số $x, 10, y$ theo thứ tự lập thành một cấp số cộng. Tổng $x + y$ bằng:",
                "options": {
                    "A": "$20$",
                    "B": "$10$",
                    "C": "$30$",
                    "D": "$40$"
                },
                "correct": "A",
                "explanation": "Theo tính chất cấp số cộng: $x + y = 2 \\times 10 = 20$."
            },
            {
                "id": 6,
                "question": "Cho cấp số nhân lùi vô hạn có $u_1 = 4$ và công bội $q = \\frac{1}{2}$. Tổng của cấp số nhân lùi vô hạn này bằng:",
                "options": {
                    "A": "$8$",
                    "B": "$4$",
                    "C": "$2$",
                    "D": "$16$"
                },
                "correct": "A",
                "explanation": "$S = \\frac{u_1}{1 - q} = \\frac{4}{1 - 0.5} = 8$."
            },
            {
                "id": 7,
                "question": "Một người gửi tiết kiệm 50 triệu đồng vào ngân hàng với lãi kép $6\\%/\\text{năm}$. Công thức tính số tiền (cả gốc và lãi) sau $n$ năm là:",
                "options": {
                    "A": "$A_n = 50(1.06)^n$",
                    "B": "$A_n = 50 + 50 \\times 0.06n$",
                    "C": "$A_n = 50(1.6)^n$",
                    "D": "$A_n = 50(0.06)^n$"
                },
                "correct": "A",
                "explanation": "Theo công thức lãi kép: $A_n = P(1 + r)^n = 50(1.06)^n$ triệu đồng."
            },
            {
                "id": 8,
                "question": f"Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và $u_2 = {2 + d_val}$. Tổng 10 số hạng đầu tiên $S_{10}$ bằng:",
                "options": {
                    "A": f"${5 * (4 + 9 * d_val)}$",
                    "B": f"${10 * (2 + 9 * d_val)}$",
                    "C": f"${5 * (2 + 10 * d_val)}$",
                    "D": f"${50 * d_val}$"
                },
                "correct": "A",
                "explanation": f"$d = {d_val}$. $S_{{10}} = \\frac{{10}}{{2}}[2(2) + 9({d_val})] = 5(4 + {9 * d_val}) = {5 * (4 + 9 * d_val)}$."
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
                    "A": "$b^2 = ac$",
                    "B": "$2b = a + c$",
                    "C": "$b = \\sqrt{a + c}$",
                    "D": "$ac = 2b$"
                },
                "correct": "A",
                "explanation": "Theo tính chất cấp số nhân: $b^2 = ac$."
            },
            {
                "id": 11,
                "question": "Một khán phòng có 20 hàng ghế, hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong khán phòng là:",
                "options": {
                    "A": "$680$",
                    "B": "$650$",
                    "C": "$700$",
                    "D": "$620$"
                },
                "correct": "A",
                "explanation": "$S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10(30 + 38) = 680$ ghế."
            },
            {
                "id": 12,
                "question": "Một tế bào vi khuẩn phân đôi sau mỗi 30 phút. Từ 1 tế bào ban đầu, sau 3 giờ (gồm 6 chu kỳ) số lượng tế bào vi khuẩn là:",
                "options": {
                    "A": "$64$",
                    "B": "$32$",
                    "C": "$128$",
                    "D": "$16$"
                },
                "correct": "A",
                "explanation": "$N = 1 \\times 2^6 = 64$ tế bào."
            }
        ]

        # 4 TF questions
        tf_questions = [
            {
                "id": "tf1",
                "statement": f"Một người lập kế hoạch tích lũy tài chính: Bắt đầu gửi vào tài khoản tiết kiệm {10 + exam_idx} triệu đồng vào đầu mỗi năm. Lãi suất tiền gửi là $7\\%/\\text{{năm}}$ tính theo lãi kép hàng năm.",
                "items": [
                    {
                        "key": "a",
                        "text": f"Khoản tiền gửi năm đầu tiên sau 3 năm tích lũy đạt giá trị là ${(10 + exam_idx)} \\times (1.07)^3$ triệu đồng.",
                        "correct": True,
                        "explanation": "Khoản tiền đầu năm 1 gửi trọn vẹn 3 năm chịu lãi kép 3 kỳ."
                    },
                    {
                        "key": "b",
                        "text": "Số tiền người đó tích lũy được sau mỗi năm lập thành một cấp số cộng.",
                        "correct": False,
                        "explanation": "Do tính lãi kép nên số tiền tích lũy là tổng của một cấp số nhân, không phải cấp số cộng."
                    },
                    {
                        "key": "c",
                        "text": f"Tổng số tiền người đó nhận được ở cuối năm thứ 3 xấp xỉ ${round((10 + exam_idx) * 1.07 * ((1.07**3 - 1)/0.07), 2)}$ triệu đồng.",
                        "correct": True,
                        "explanation": f"Áp dụng công thức tổng CSN gửi định kỳ đầu mỗi năm: $S_3 = {(10 + exam_idx)} \\times 1.07 \\times \\frac{{1.07^3 - 1}}{{0.07}} \\approx {round((10 + exam_idx) * 1.07 * ((1.07**3 - 1)/0.07), 2)}$ triệu đồng."
                    },
                    {
                        "key": "d",
                        "text": "Nếu lãi suất tăng lên $10\\%/\\text{năm}$, số tiền nhận được cuối năm thứ 3 tăng trên $15\\%$.",
                        "correct": False,
                        "explanation": "Tính toán tỉ lệ tăng cho thấy mức tăng chỉ vào khoảng $8-9\\%$, không vượt quá $15\\%$."
                    }
                ]
            },
            {
                "id": "tf2",
                "statement": f"Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = {u1_val}$ và công bội $q = {q_val}$.",
                "items": [
                    {
                        "key": "a",
                        "text": f"Số hạng thứ 3 của cấp số nhân là $u_3 = {u1_val * (q_val**2)}$.",
                        "correct": True,
                        "explanation": f"$u_3 = u_1 \\cdot q^2 = {u1_val} \\cdot {q_val}^2 = {u1_val * (q_val**2)}$."
                    },
                    {
                        "key": "b",
                        "text": f"Dãy số $(u_n)$ là một dãy số giảm vì công bội $q = {q_val} > 1$.",
                        "correct": False,
                        "explanation": f"Vì $u_1 > 0$ và $q = {q_val} > 1$ nên dãy số là dãy tăng, không phải dãy giảm."
                    },
                    {
                        "key": "c",
                        "text": f"Tổng của 5 số hạng đầu tiên là $S_5 = {u1_val * (q_val**5 - 1) // (q_val - 1)}$.",
                        "correct": True,
                        "explanation": f"$S_5 = u_1 \\frac{{q^5 - 1}}{{q - 1}} = {u1_val} \\frac{{{q_val}^5 - 1}}{{{q_val} - 1}} = {u1_val * (q_val**5 - 1) // (q_val - 1)}$."
                    },
                    {
                        "key": "d",
                        "text": f"Dãy số $(v_n)$ xác định bởi $v_n = \\ln(u_n)$ lập thành một cấp số cộng có công sai $d = \\ln({q_val})$.",
                        "correct": True,
                        "explanation": f"$v_{{n+1}} - v_n = \\ln(u_{{n+1}}) - \\ln(u_n) = \\ln\\left(\\frac{{u_{{n+1}}}}{{u_n}}\\right) = \\ln({q_val})$ là hằng số."
                    }
                ]
            },
            {
                "id": "tf3",
                "statement": f"Một quả bóng cao su được thả rơi tự do từ độ cao {10 + exam_idx * 2}\\text{{ m}} xuống sàn. Mỗi lần chạm sàn, bóng nảy lên độ cao bằng $\\frac{2}{3}$ độ cao của lần rơi trước đó.",
                "items": [
                    {
                        "key": "a",
                        "text": f"Độ cao bóng nảy lên sau lần chạm sàn đầu tiên là ${round((10 + exam_idx * 2) * 2 / 3, 2)}\\text{{ m}}$.",
                        "correct": True,
                        "explanation": f"$h_1 = {(10 + exam_idx * 2)} \\times \\frac{{2}}{{3}} = {round((10 + exam_idx * 2) * 2 / 3, 2)}\\text{{ m}}$."
                    },
                    {
                        "key": "b",
                        "text": "Dãy các độ cao bóng nảy lên lập thành một cấp số nhân có công bội $q = \\frac{2}{3}$.",
                        "correct": True,
                        "explanation": "Đúng định nghĩa cấp số nhân với $q = 2/3$."
                    },
                    {
                        "key": "c",
                        "text": "Sau 4 lần nảy, tổng độ cao bóng đã nảy lên vượt quá độ cao ban đầu lúc thả.",
                        "correct": True,
                        "explanation": f"Tổng độ cao nảy lên 4 lần: $S_4 = h_1 \\frac{{1 - (2/3)^4}}{{1 - 2/3}} = 3h_1(1 - 16/81) = 2h_0 \\times 65/81 = 130/81 h_0 > h_0$."
                    },
                    {
                        "key": "d",
                        "text": f"Tổng toàn bộ quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn bằng ${5 * (10 + exam_idx * 2)}\\text{{ m}}$.",
                        "correct": True,
                        "explanation": f"Tổng quãng đường: $S = h_0 \\frac{{1 + k}}{{1 - k}} = {(10 + exam_idx * 2)} \\frac{{1 + 2/3}}{{1 - 2/3}} = {(10 + exam_idx * 2)} \\times 5 = {5 * (10 + exam_idx * 2)}\\text{{ m}}$."
                    }
                ]
            },
            {
                "id": "tf4",
                "statement": f"Một cơ sở sản xuất đồ gỗ mỹ nghệ đóng {50 + exam_idx * 10} chiếc ghế trong tháng thứ nhất. Kế hoạch đề ra mỗi tháng tiếp theo tăng thêm $10\\%$ so với tháng trước.",
                "items": [
                    {
                        "key": "a",
                        "text": "Sản lượng ghế mỗi tháng lập thành một cấp số nhân có công bội $q = 1.1$.",
                        "correct": True,
                        "explanation": "Mỗi tháng tăng $10\\%$ nên sản lượng bằng $1.1$ lần tháng trước."
                    },
                    {
                        "key": "b",
                        "text": f"Sản lượng ghế riêng trong tháng thứ 3 là ${round((50 + exam_idx * 10) * 1.21)}$ chiếc.",
                        "correct": True,
                        "explanation": f"$u_3 = u_1 \\cdot q^2 = {(50 + exam_idx * 10)} \\times 1.1^2 = {(50 + exam_idx * 10)} \\times 1.21 = {round((50 + exam_idx * 10) * 1.21)}$ chiếc."
                    },
                    {
                        "key": "c",
                        "text": "Tổng sản lượng ghế sản xuất trong 6 tháng đầu năm vượt quá 500 chiếc.",
                        "correct": True,
                        "explanation": f"Tổng sản lượng 6 tháng: $S_6 = u_1 \\frac{{1.1^6 - 1}}{{0.1}} \\approx {(50 + exam_idx * 10)} \\times 7.7156 > 500$ chiếc."
                    },
                    {
                        "key": "d",
                        "text": "Nếu mỗi tháng chỉ tăng cố định 5 chiếc thì tổng sản lượng sau 6 tháng lớn hơn kế hoạch tăng $10\\%$.",
                        "correct": False,
                        "explanation": "Tăng cấp số nhân tăng trưởng theo hàm mũ luôn vượt trội hơn tăng tuyến tính cấp số cộng."
                    }
                ]
            }
        ]

        # 6 Short answer questions
        ans_s10 = 5 * (4 + 9 * d_val)
        ball_dist = 5 * (10 + exam_idx * 2)
        sa_questions = [
            {
                "id": 1,
                "question": f"Cho cấp số cộng $(u_n)$ có $u_1 = 5$ và công sai $d = {d_val}$. Tìm số hạng thứ 12 của cấp số cộng.",
                "correctAnswer": f"{5 + 11 * d_val}",
                "acceptedAnswers": [f"{5 + 11 * d_val}", f"{float(5 + 11 * d_val)}"],
                "explanation": f"$u_{{12}} = u_1 + 11d = 5 + 11({d_val}) = {5 + 11 * d_val}$."
            },
            {
                "id": 2,
                "question": f"Cho cấp số cộng $(u_n)$ có $u_1 = 2$ và công sai $d = {d_val}$. Tính tổng của 10 số hạng đầu tiên $S_{{10}}$.",
                "correctAnswer": f"{ans_s10}",
                "acceptedAnswers": [f"{ans_s10}", f"{float(ans_s10)}"],
                "explanation": f"$S_{{10}} = \\frac{{10}}{{2}}[2(2) + 9({d_val})] = 5(4 + {9 * d_val}) = {ans_s10}$."
            },
            {
                "id": 3,
                "question": "Tính tổng của cấp số nhân lùi vô hạn: $S = 6 + 2 + \\frac{2}{3} + \\frac{2}{9} + \\dots$",
                "correctAnswer": "9",
                "acceptedAnswers": ["9", "9.0"],
                "explanation": "$u_1 = 6, q = 1/3 \\Rightarrow S = \\frac{6}{1 - 1/3} = 9$."
            },
            {
                "id": 4,
                "question": f"Một rạp xiếc có các hàng ghế xếp hình vòng cung, hàng thứ nhất có {12 + exam_idx} ghế, mỗi hàng sau nhiều hơn hàng trước 3 ghế. Khán phòng có 15 hàng ghế. Hỏi có tất cả bao nhiêu ghế?",
                "correctAnswer": f"{round(15/2 * (2*(12+exam_idx) + 14*3))}",
                "acceptedAnswers": [f"{round(15/2 * (2*(12+exam_idx) + 14*3))}"],
                "explanation": f"Cấp số cộng: $S_{{15}} = \\frac{{15}}{{2}}[2({12+exam_idx}) + 14(3)] = {round(15/2 * (2*(12+exam_idx) + 14*3))}$ ghế."
            },
            {
                "id": 5,
                "question": f"Một quả bóng cao su được thả rơi từ độ cao ${10 + exam_idx * 2}\\text{{ m}}$. Mỗi lần chạm sàn nó nảy lên độ cao bằng $\\frac{2}{3}$ độ cao trước đó. Tính tổng quãng đường bóng đã di chuyển kể từ lúc thả đến khi dừng hẳn (mét).",
                "correctAnswer": f"{ball_dist}",
                "acceptedAnswers": [f"{ball_dist}", f"{float(ball_dist)}"],
                "explanation": f"$S = h_0 \\frac{{1 + 2/3}}{{1 - 2/3}} = {(10 + exam_idx * 2)} \\times 5 = {ball_dist}\\text{{ m}}$."
            },
            {
                "id": 6,
                "question": f"Một kỹ sư vay ngân hàng 100 triệu đồng trả góp với lãi suất $0.6\\%/\\text{{tháng}}$. Mỗi tháng kỹ sư trả đều đặn số tiền $m$ triệu đồng vào cuối tháng. Để trả hết nợ đúng sau 24 tháng, số tiền $m$ phải bằng bao nhiêu triệu đồng? (Làm tròn kết quả đến hai chữ số thập phân).",
                "correctAnswer": "4.49",
                "acceptedAnswers": ["4.49", "4,49"],
                "explanation": "$m = \\frac{100 \\times 0.006 \\times 1.006^{24}}{1.006^{24} - 1} = \\frac{0.6 \\times 1.15437}{0.15437} \\approx 4.49$ triệu đồng."
            }
        ]

        exam_obj = {
            "id": f"cd1-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Dãy Số - CSC - CSN",
            "code": f"CD1-10{exam_idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
            "durationMinutes": 90,
            "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
            "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
            "mcqs": balance_mcqs(raw_mcqs, seed=seed),
            "tfQuestions": tf_questions,
            "saQuestions": sa_questions,
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
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
