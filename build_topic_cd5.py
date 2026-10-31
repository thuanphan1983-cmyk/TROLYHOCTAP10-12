# -*- coding: utf-8 -*-
"""
Chuyên đề 5: ỨNG DỤNG ĐẠO HÀM
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc Đề thi TN THPT 2025-2026.
Tuyệt đối KHÔNG chứa tham số m. Tăng cường bài toán tối ưu hóa thực tế.
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd5():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Tính Đơn Điệu và Cực Trị -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-chart-line text-blue-600"></i>
      1. Tính Đơn Điệu và Cực Trị Của Hàm Số
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Tính đơn điệu:</p>
        <p>&bull; $f'(x) \\ge 0, \\forall x \\in K \\Rightarrow f(x)$ đồng biến trên $K$.</p>
        <p>&bull; $f'(x) \\le 0, \\forall x \\in K \\Rightarrow f(x)$ nghịch biến trên $K$.</p>
        <p class="text-xs text-slate-600 mt-1">(Dấu "=" chỉ xảy ra tại hữu hạn điểm).</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Cực trị hàm số:</p>
        <p>&bull; $f'(x)$ đổi dấu từ $(+)$ sang $(-)$ qua $x_0$: Cực đại $x_{CĐ}$.</p>
        <p>&bull; $f'(x)$ đổi dấu từ $(-)$ sang $(+)$ qua $x_0$: Cực tiểu $x_{CT}$.</p>
        <p class="text-xs text-slate-600 mt-1">Dấu hiệu 2: $f'(x_0)=0$, $f''(x_0)<0 \\Rightarrow$ CĐ; $f''(x_0)>0 \\Rightarrow$ CT.</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Giá Trị Lớn Nhất & Nhỏ Nhất -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-arrows-up-down text-emerald-600"></i>
      2. Giá Trị Lớn Nhất (GTLN) & Nhỏ Nhất (GTNN)
    </h4>
    <div class="text-[11.5pt] space-y-2">
      <p><strong>Tìm GTLN, GTNN trên đoạn $[a; b]$:</strong></p>
      <div class="bg-white p-3 rounded-xl border border-emerald-200">
        <p>1. Tìm các nghiệm $x_i \\in (a; b)$ của phương trình $f'(x) = 0$ và các điểm không có đạo hàm.</p>
        <p>2. Tính các giá trị $f(a), f(b), f(x_i)$.</p>
        <p>3. Kết luận: $\\max_{[a; b]} f(x)$ là số lớn nhất, $\\min_{[a; b]} f(x)$ là số bé nhất trong các giá trị trên.</p>
      </div>
    </div>
  </div>

  <!-- Phần 3: Đường Tiệm Cận -->
  <div class="bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-arrows-split-up-and-left text-amber-600"></i>
      3. Đường Tiệm Cận Của Đồ Thị Hàm Số
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11pt]">
      <div class="bg-white p-2.5 rounded-xl border border-amber-200">
        <p class="font-bold text-amber-900 mb-1">Tiệm cận đứng (TCĐ):</p>
        <p>Đường $x = x_0$ nếu:</p>
        <p>$\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$.</p>
      </div>
      <div class="bg-white p-2.5 rounded-xl border border-amber-200">
        <p class="font-bold text-amber-900 mb-1">Tiệm cận ngang (TCN):</p>
        <p>Đường $y = y_0$ nếu:</p>
        <p>$\\lim_{x \\to \\pm\\infty} f(x) = y_0$.</p>
      </div>
      <div class="bg-white p-2.5 rounded-xl border border-amber-200">
        <p class="font-bold text-amber-900 mb-1">Tiệm cận xiên (TCX):</p>
        <p>Đường $y = ax + b$ ($a \\ne 0$):</p>
        <p>$\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 4: Ứng Dụng Tối Ưu Hóa Thực Tế -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-lightbulb text-purple-600"></i>
      4. Bài Toán Mô Hình Hóa & Tối Ưu Thực Tế
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-purple-200">
        <p><strong>Quy trình giải bài toán cực trị thực tế:</strong></p>
        <p>1. Xác định hàm mục tiêu $F$ (diện tích, thể tích, chi phí, lợi nhuận, thời gian...).</p>
        <p>2. Chọn biến thích hợp $x$ và xác định tập xác định thực tế của $x$.</p>
        <p>3. Thiết lập biểu thức $F(x)$ và tìm GTLN hoặc GTNN của $F(x)$ trên miền xác định bằng khảo sát đạo hàm $F'(x) = 0$ hoặc đánh giá BĐT Cauchy.</p>
      </div>
    </div>
  </div>
</div>
"""

    exams = []
    for exam_idx in range(1, 6):
        seed = 5000 + exam_idx * 23

        if exam_idx == 1:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hàm số $y = x^3 - 3x^2 + 2$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
                    "options": {"A": "$(0; 2)$", "B": "$(-\\infty; 2)$", "C": "$(2; +\\infty)$", "D": "$(0; +\\infty)$"},
                    "correct": "C",
                    "explanation": "$y' = 3x^2 - 6x = 3x(x - 2) > 0 \\Leftrightarrow x < 0$ hoặc $x > 2$. Do đó hàm số đồng biến trên $(2; +\\infty)$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hàm số $y = f(x)$ có bảng biến thiên: đạo hàm $f'(x)$ đổi dấu từ âm sang dương khi qua $x = 1$. Điểm cực tiểu của đồ thị hàm số có hoành độ là",
                    "options": {"A": "$x = 1$", "B": "$x = -1$", "C": "$x = 0$", "D": "$x = 2$"},
                    "correct": "A",
                    "explanation": "Đạo hàm đổi dấu từ âm sang dương khi qua $x = 1$, do đó $x = 1$ là điểm cực tiểu của hàm số."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Đồ thị hàm số $y = \\frac{2x + 1}{x - 3}$ có tiệm cận đứng là đường thẳng",
                    "options": {"A": "$x = 2$", "B": "$x = 3$", "C": "$y = 2$", "D": "$y = 3$"},
                    "correct": "B",
                    "explanation": "Mẫu số triệt tiêu tại $x = 3$ và tử số tại $x=3$ là $7 \\ne 0$, nên đường tiệm cận đứng là $x = 3$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ có tiệm cận ngang là",
                    "options": {"A": "$y = -2$", "B": "$y = -1$", "C": "$y = 1$", "D": "$y = 3$"},
                    "correct": "D",
                    "explanation": "$\\lim_{x \\to \\pm\\infty} \\frac{3x - 1}{x + 2} = 3$, do đó đường tiệm cận ngang là $y = 3$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Giá trị lớn nhất của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng",
                    "options": {"A": "$11$", "B": "$3$", "C": "$2$", "D": "$19$"},
                    "correct": "A",
                    "explanation": "$f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0, x = 1$ trên $[0; 2]$. Ta có: $f(0) = 3$, $f(1) = 2$, $f(2) = 11$. Vậy $\\max = 11$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Đồ thị hàm số $y = \\frac{x^2 - 3x + 4}{x - 1}$ có đường tiệm cận xiên là đường thẳng",
                    "options": {"A": "$y = x + 2$", "B": "$y = x - 1$", "C": "$y = x - 2$", "D": "$y = 2x - 3$"},
                    "correct": "C",
                    "explanation": "$y = x - 2 + \\frac{2}{x-1}$. Khi $x \\to \\pm\\infty$, $\\frac{2}{x-1} \\to 0$, nên tiệm cận xiên là $y = x - 2$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Hàm số $y = -x^4 + 4x^2 + 5$ có bao nhiêu điểm cực trị?",
                    "options": {"A": "$1$", "B": "$2$", "C": "$0$", "D": "$3$"},
                    "correct": "D",
                    "explanation": "$y' = -4x^3 + 8x = -4x(x^2 - 2) = 0 \\Leftrightarrow x = 0, x = \\pm\\sqrt{2}$. Phương trình có 3 nghiệm đơn nên hàm số có 3 điểm cực trị."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Một vật chuyển động thẳng với phương trình $s(t) = -t^3 + 6t^2 + 9t$ ($t$ tính bằng giây, $s$ tính bằng mét). Vận tốc tức thời của vật đạt giá trị lớn nhất tại thời điểm nào?",
                    "options": {"A": "$t = 1\\text{ s}$", "B": "$t = 2\\text{ s}$", "C": "$t = 3\\text{ s}$", "D": "$t = 4\\text{ s}$"},
                    "correct": "B",
                    "explanation": "$v(t) = s'(t) = -3t^2 + 12t + 9 = -3(t - 2)^2 + 21 \\le 21$. Đạt cực đại khi $t = 2\\text{ s}$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Chi phí để sản xuất $x$ sản phẩm của một xưởng là $C(x) = 2x^2 + 50x + 800$ (nghìn đồng). Chi phí trung bình trên một sản phẩm $\\bar{C}(x) = \\frac{C(x)}{x}$ nhỏ nhất khi sản xuất bao nhiêu sản phẩm?",
                    "options": {"A": "$20$", "B": "$25$", "C": "$15$", "D": "$30$"},
                    "correct": "A",
                    "explanation": "$\\bar{C}(x) = 2x + 50 + \\frac{800}{x} \\ge 50 + 2\\sqrt{1600} = 130$. Dấu bằng xảy ra khi $2x = \\frac{800}{x} \\Leftrightarrow x^2 = 400 \\Leftrightarrow x = 20$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho hàm số $y = \\frac{1}{3}x^3 - x^2 - 3x + 1$ có hai điểm cực trị là $A$ và $B$. Độ dài đoạn thẳng $AB$ bằng",
                    "options": {"A": "$4\\sqrt{5}$", "B": "$2\\sqrt{13}$", "C": "$\\frac{4\\sqrt{73}}{3}$", "D": "$6\\sqrt{2}$"},
                    "correct": "C",
                    "explanation": "$y' = x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1 \\Rightarrow y = \\frac{8}{3}$ hoặc $x = 3 \\Rightarrow y = -8$. $AB = \\sqrt{(4)^2 + (-8 - 8/3)^2} = \\frac{4\\sqrt{73}}{3}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một tấm bìa hình vuông cạnh $60\\text{ cm}$. Người ta cắt bỏ 4 hình vuông bằng nhau ở 4 góc rồi gấp thành một cái hộp không nắp. Để thể tích cái hộp lớn nhất, cạnh của hình vuông cắt bỏ phải bằng",
                    "options": {"A": "$15\\text{ cm}$", "B": "$10\\text{ cm}$", "C": "$8\\text{ cm}$", "D": "$12\\text{ cm}$"},
                    "correct": "B",
                    "explanation": "$V(x) = x(60 - 2x)^2 = 4x(30 - x)^2$. $V'(x) = 4(30 - x)(30 - 3x) = 0 \\Leftrightarrow x = 10\\text{ cm}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $y = \\sqrt{2x + 1}$ ($x \\ge -\\frac{1}{2}$). Điểm $M$ thuộc đồ thị có khoảng cách đến điểm $A(2; 0)$ ngắn nhất bằng",
                    "options": {"A": "$\\sqrt{2}$", "B": "$\\sqrt{3}$", "C": "$\\sqrt{5}$", "D": "$2$"},
                    "correct": "D",
                    "explanation": "$M(x; \\sqrt{2x+1})$. $AM^2 = (x - 2)^2 + (2x + 1) = x^2 - 2x + 5 = (x - 1)^2 + 4 \\ge 4$. Vậy $AM_{\\min} = 2$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $f(x) = \\frac{x^2 - x + 1}{x - 1}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", "correct": True, "explanation": "Đúng, mẫu số $x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$."},
                        {"label": "b", "subLabel": "b)", "content": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = 1$.", "correct": True, "explanation": "Đúng, $\\lim_{x \\to 1^+} f(x) = +\\infty$."},
                        {"label": "c", "subLabel": "c)", "content": "Đường tiệm cận xiên của đồ thị hàm số là $y = x$.", "correct": True, "explanation": "Đúng, $f(x) = x + \\frac{1}{x - 1}$, nên khi $x \\to \\infty$, tiệm cận xiên là $y = x$."},
                        {"label": "d", "subLabel": "d)", "content": "Giao điểm của hai đường tiệm cận là điểm $I(1; 2)$.", "correct": False, "explanation": "Sai, giao điểm của $x = 1$ và $y = x$ là $I(1; 1)$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hàm số $y = f(x) = x^3 - 3x^2 + 4$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Hàm số đạt cực đại tại $x = 0$ và đạt cực tiểu tại $x = 2$.", "correct": True, "explanation": "Đúng, $y' = 3x(x - 2)$ đổi dấu tương ứng."},
                        {"label": "b", "subLabel": "b)", "content": "Giá trị cực tiểu của hàm số bằng $0$.", "correct": True, "explanation": "Đúng, $f(2) = 8 - 12 + 4 = 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Hàm số đồng biến trên toàn bộ khoảng $(-\\infty; 2)$.", "correct": False, "explanation": "Sai, trên $(0; 2)$ hàm số nghịch biến."},
                        {"label": "d", "subLabel": "d)", "content": "Tâm đối xứng của đồ thị hàm số là điểm $U(1; 2)$.", "correct": True, "explanation": "Đúng, $y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y = 2$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Khảo sát một khu đất hình chữ nhật có chu vi $120\\text{ m}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Nếu chiều rộng của khu đất là $x\\text{ m}$ thì chiều dài là $60 - x\\text{ m}$ với $0 < x < 30$.", "correct": True, "explanation": "Đúng, nửa chu vi bằng $60\\text{ m}$."},
                        {"label": "b", "subLabel": "b)", "content": "Diện tích khu đất theo $x$ là hàm số $S(x) = 60x - x^2$.", "correct": True, "explanation": "Đúng, $S(x) = x(60 - x) = 60x - x^2$."},
                        {"label": "c", "subLabel": "c)", "content": "Diện tích khu đất đạt cực đại khi khu đất trở thành hình vuông cạnh $30\\text{ m}$.", "correct": True, "explanation": "Đúng, $S'(x) = 60 - 2x = 0 \\Leftrightarrow x = 30$."},
                        {"label": "d", "subLabel": "d)", "content": "Diện tích lớn nhất mà khu đất có thể đạt được là $800\\text{ m}^2$.", "correct": False, "explanation": "Sai, diện tích lớn nhất là $30 \\times 30 = 900\\text{ m}^2$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $g(x) = \\frac{2x - 3}{x + 1}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đạo hàm $g'(x) = \\frac{5}{(x+1)^2} > 0$ với mọi $x \\ne -1$.", "correct": True, "explanation": "Đúng, tử số là $2(1) - (-3)(1) = 5 > 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Hàm số đồng biến trên $\\mathbb{R} \\setminus \\{-1\\}$.", "correct": False, "explanation": "Sai, phải kết luận đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$."},
                        {"label": "c", "subLabel": "c)", "content": "Đồ thị hàm số cắt trục hoành tại điểm $(\\frac{3}{2}; 0)$.", "correct": True, "explanation": "Đúng, $2x - 3 = 0 \\Leftrightarrow x = 1.5$."},
                        {"label": "d", "subLabel": "d)", "content": "Đồ thị có tâm đối xứng là $I(-1; 2)$.", "correct": True, "explanation": "Đúng, giao hai tiệm cận $x = -1$ và $y = 2$ là $I(-1; 2)$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Tìm giá trị nhỏ nhất của hàm số $f(x) = x + \\frac{9}{x}$ trên khoảng $(0; +\\infty)$.",
                    "correctAnswer": "6",
                    "acceptedAnswers": ["6"],
                    "explanation": "Theo BĐT Cauchy: $x + \\frac{9}{x} \\ge 2\\sqrt{x \\cdot \\frac{9}{x}} = 6$. Dấu bằng tại $x = 3$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Một người nông dân muốn rào một khu vườn hình chữ nhật áp sát một bức tường thẳng (chỉ cần rào 3 cạnh). Bác có tổng cộng $40\\text{ m}$ lưới rào. Diện tích lớn nhất của khu vườn rào được là bao nhiêu mét vuông?",
                    "correctAnswer": "200",
                    "acceptedAnswers": ["200"],
                    "explanation": "$S(x) = x(40 - 2x) = -2x^2 + 40x$. Đạt cực đại tại $x = 10$, $S_{\\max} = 200\\text{ m}^2$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hàm số $y = x^3 - 3x + 1$. Gọi $M$ và $m$ lần lượt là giá trị lớn nhất và nhỏ nhất trên đoạn $[0; 2]$. Tính giá trị biểu thức $P = M + 2m$.",
                    "correctAnswer": "1",
                    "acceptedAnswers": ["1"],
                    "explanation": "$y(0) = 1, y(1) = -1, y(2) = 3 \\Rightarrow M = 3, m = -1$. $P = 3 + 2(-1) = 1$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 2}$ có tiệm cận xiên $y = ax + b$. Tính giá trị của $a + b$.",
                    "correctAnswer": "3",
                    "acceptedAnswers": ["3"],
                    "explanation": "Tiệm cận xiên là $y = 2x + 1$. Do đó $a = 2, b = 1 \\Rightarrow a + b = 3$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một công ty ước tính số lượng sản phẩm bán được theo đơn giá $p$ (nghìn đồng) là $D(p) = 120 - 2p$ ($10 \\le p \\le 50$). Doanh thu lớn nhất công ty có thể thu được là bao nhiêu nghìn đồng?",
                    "correctAnswer": "1800",
                    "acceptedAnswers": ["1800"],
                    "explanation": "Doanh thu $R(p) = p(120 - 2p) = -2p^2 + 120p$. Đạt cực đại tại $p = 30$, $R(30) = 1800$ nghìn đồng."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một giọt nước hình cầu bay hơi sao cho bán kính $r$ giảm đều với tốc độ $0.05\\text{ mm/s}$. Khi bán kính bằng $10\\text{ mm}$, tốc độ giảm thể tích của giọt nước là bao nhiêu $\\pi\\text{ mm}^3\\text{/s}$?",
                    "correctAnswer": "20",
                    "acceptedAnswers": ["20"],
                    "explanation": "$V'(t) = 4\\pi r^2 |r'(t)| = 4\\pi (10)^2 \\times 0.05 = 20\\pi\\text{ mm}^3\\text{/s}$. Số cần điền là 20."
                }
            ]

        elif exam_idx == 2:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Đồ thị của hàm số nào dưới đây có dạng như đường cong bậc 3 có hệ số $a > 0$ và đi qua gốc tọa độ?",
                    "options": {"A": "$y = x^3 - 3x$", "B": "$y = -x^3 + 3x$", "C": "$y = x^4 - 2x^2$", "D": "$y = \\frac{x-1}{x+1}$"},
                    "correct": "A",
                    "explanation": "Hàm bậc ba với hệ số $a = 1 > 0$, đi qua gốc tọa độ $O(0; 0)$ là $y = x^3 - 3x$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2 (x + 2)^3$. Số điểm cực trị của hàm số là",
                    "options": {"A": "$1$", "B": "$3$", "C": "$2$", "D": "$0$"},
                    "correct": "C",
                    "explanation": "Chỉ có nghiệm bậc lẻ $x = 0$ và $x = -2$ làm đổi dấu đạo hàm. Nghiệm bội chẵn $x = 1$ không làm đổi dấu. Vậy hàm có 2 điểm cực trị."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Tiệm cận ngang của đồ thị hàm số $y = \\frac{4x - 5}{2x + 1}$ là",
                    "options": {"A": "$y = 4$", "B": "$y = 2$", "C": "$x = -\\frac{1}{2}$", "D": "$y = -5$"},
                    "correct": "B",
                    "explanation": "$\\lim_{x \\to \\pm\\infty} \\frac{4x - 5}{2x + 1} = \\frac{4}{2} = 2$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hàm số $y = f(x)$ liên tục trên $[-1; 3]$ có bảng biến thiên với các giá trị: $f(-1) = 2, f(0) = 5, f(2) = 1, f(3) = 4$. Giá trị nhỏ nhất của hàm số trên $[-1; 3]$ là",
                    "options": {"A": "$2$", "B": "$5$", "C": "$4$", "D": "$1$"},
                    "correct": "D",
                    "explanation": "Giá trị nhỏ nhất là $1$ tại $x = 2$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{x^2 + 2x - 3}{x + 3}$ có bao nhiêu đường tiệm cận đứng?",
                    "options": {"A": "$0$", "B": "$1$", "C": "$2$", "D": "$3$"},
                    "correct": "A",
                    "explanation": "Tử số là $(x + 3)(x - 1)$. Với $x \\ne -3$, $y = x - 1$. Giới hạn $\\lim_{x \\to -3} y = -4$ hữu hạn, do đó không có tiệm cận đứng nào."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Cho hàm số $y = -x^3 + 3x^2 - 2$. Mệnh đề nào sau đây đúng?",
                    "options": {"A": "Hàm số đồng biến trên $(-\\infty; 0)$", "B": "Hàm số đồng biến trên $(0; 2)$", "C": "Hàm số nghịch biến trên $(0; 2)$", "D": "Hàm số đồng biến trên $(2; +\\infty)$"},
                    "correct": "B",
                    "explanation": "$y' = -3x^2 + 6x = -3x(x - 2) > 0 \\Leftrightarrow 0 < x < 2$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một vật rơi tự do với phương trình chuyển động $s(t) = \\frac{1}{2}gt^2$ ($g = 9.8\\text{ m/s}^2$). Vận tốc tức thời của vật tại thời điểm $t = 5\\text{ s}$ là",
                    "options": {"A": "$24.5\\text{ m/s}$", "B": "$98\\text{ m/s}$", "C": "$49\\text{ m/s}$", "D": "$122.5\\text{ m/s}$"},
                    "correct": "C",
                    "explanation": "$v(t) = s'(t) = gt = 9.8 \\times 5 = 49\\text{ m/s}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Điểm cực đại của đồ thị hàm số $y = x^4 - 4x^2 + 3$ là",
                    "options": {"A": "$(-\\sqrt{2}; -1)$", "B": "$(\\sqrt{2}; -1)$", "C": "$(0; -1)$", "D": "$(0; 3)$"},
                    "correct": "D",
                    "explanation": "$y' = 4x(x^2 - 2) = 0 \\Leftrightarrow x = 0, \\pm\\sqrt{2}$. Điểm cực đại là $(0; 3)$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Độ giảm huyết áp của một bệnh nhân được cho bởi $G(x) = 0.025x^2(30 - x)$ ($0 < x < 30\\text{ mg}$). Để huyết áp giảm nhiều nhất, liều lượng thuốc cần tiêm là",
                    "options": {"A": "$15\\text{ mg}$", "B": "$20\\text{ mg}$", "C": "$10\\text{ mg}$", "D": "$25\\text{ mg}$"},
                    "correct": "B",
                    "explanation": "$G'(x) = 0.025(60x - 3x^2) = 0.075x(20 - x) = 0 \\Leftrightarrow x = 20\\text{ mg}$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{3x^2 - 5x + 2}{x - 1}$ cắt trục tung tại điểm có tung độ là",
                    "options": {"A": "$-2$", "B": "$3$", "C": "$1$", "D": "$-5$"},
                    "correct": "A",
                    "explanation": "$3x^2 - 5x + 2 = (x - 1)(3x - 2)$. Đồ thị là đường thẳng $y = 3x - 2$ bỏ điểm $(1; 1)$. Tiệm cận xiên chính là $y = 3x - 2$, cắt trục tung tại $(0; -2)$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một lon nước ngọt hình trụ có thể tích $V = 54\\pi\\text{ cm}^3$. Để lượng kim loại dùng làm lon là ít nhất (diện tích toàn phần nhỏ nhất), bán kính đáy của lon phải bằng",
                    "options": {"A": "$2\\text{ cm}$", "B": "$4\\text{ cm}$", "C": "$3\\text{ cm}$", "D": "$5\\text{ cm}$"},
                    "correct": "C",
                    "explanation": "$S_{tp} = 2\\pi r^2 + \\frac{108\\pi}{r} \\ge 3\\sqrt[3]{2\\pi r^2 \\cdot \\frac{54\\pi}{r} \\cdot \\frac{54\\pi}{r}}$. Đạt nhỏ nhất khi $2\\pi r^2 = \\frac{54\\pi}{r} \\Leftrightarrow r^3 = 27 \\Leftrightarrow r = 3\\text{ cm}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Tìm giá trị nhỏ nhất của biểu thức $P = x^2 + y^2$ biết $2x + 4y = 5$.",
                    "options": {"A": "$1$", "B": "$\\frac{5}{2}$", "C": "$\\frac{25}{16}$", "D": "$\\frac{5}{4}$"},
                    "correct": "D",
                    "explanation": "Theo BĐT Bunhiacopxki: $25 = (2x + 4y)^2 \\le (4 + 16)(x^2 + y^2) = 20(x^2 + y^2) \\Rightarrow P \\ge 25/20 = 5/4$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $y = f(x) = \\frac{2x - 1}{x + 1}$ có đồ thị $(C)$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", "correct": True, "explanation": "Đúng, mẫu $x + 1 \\ne 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Hàm số nghịch biến trên từng khoảng xác định.", "correct": False, "explanation": "Sai, $y' = \\frac{3}{(x+1)^2} > 0$ nên đồng biến."},
                        {"label": "c", "subLabel": "c)", "content": "Đường thẳng $y = 2$ là tiệm cận ngang của $(C)$.", "correct": True, "explanation": "Đúng, $\\lim_{x \\to \\pm\\infty} \\frac{2x - 1}{x + 1} = 2$."},
                        {"label": "d", "subLabel": "d)", "content": "Khoảng cách từ gốc tọa độ $O$ đến tiệm cận đứng của $(C)$ bằng $1$.", "correct": True, "explanation": "Đúng, tiệm cận đứng $x = -1$, khoảng cách từ $O(0;0)$ đến đường này là $|-1| = 1$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Một hộp sữa tươi bằng giấy có dạng hình hộp chữ nhật với đáy là hình vuông cạnh $x\\text{ cm}$, chiều cao $h\\text{ cm}$, thể tích cố định $500\\text{ cm}^3$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Chiều cao $h$ được tính theo $x$ bởi công thức $h = \\frac{500}{x^2}$.", "correct": True, "explanation": "Đúng, $V = x^2 h = 500$."},
                        {"label": "b", "subLabel": "b)", "content": "Diện tích toàn phần của hộp là $S(x) = 2x^2 + \\frac{2000}{x}$.", "correct": True, "explanation": "Đúng, $S = 2x^2 + 4xh = 2x^2 + \\frac{2000}{x}$."},
                        {"label": "c", "subLabel": "c)", "content": "Đạo hàm $S'(x) = 4x - \\frac{2000}{x^2}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Diện tích toàn phần nhỏ nhất khi cạnh đáy $x = 10\\text{ cm}$.", "correct": False, "explanation": "Sai, $S'(x) = 0 \\Leftrightarrow x^3 = 500 \\ne 1000$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Cho hàm số $f(x) = x^3 - 3x^2 - 9x + 5$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đạo hàm $f'(x) = 3(x + 1)(x - 3)$.", "correct": True, "explanation": "Đúng, $3x^2 - 6x - 9 = 3(x+1)(x-3)$."},
                        {"label": "b", "subLabel": "b)", "content": "Hàm số đạt cực tiểu tại điểm $x = 3$.", "correct": True, "explanation": "Đúng, $f'(x)$ đổi dấu từ âm sang dương qua 3."},
                        {"label": "c", "subLabel": "c)", "content": "Giá trị cực đại của hàm số là $y_{CĐ} = 10$.", "correct": True, "explanation": "Đúng, $f(-1) = -1 - 3 + 9 + 5 = 10$."},
                        {"label": "d", "subLabel": "d)", "content": "Phương trình $f(x) = 0$ có đúng 1 nghiệm thực.", "correct": False, "explanation": "Sai, vì $y_{CĐ} \\cdot y_{CT} = 10 \\times (-22) < 0$ nên đồ thị cắt trục hoành tại 3 điểm phân biệt."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $y = \\frac{x^2 - 4x + 5}{x - 2}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Hàm số có thể viết dưới dạng $y = x - 2 + \\frac{1}{x - 2}$.", "correct": True, "explanation": "Đúng, $x^2 - 4x + 5 = (x-2)^2 + 1$."},
                        {"label": "b", "subLabel": "b)", "content": "Đồ thị hàm số có tiệm cận xiên là $y = x - 2$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Hàm số có hai điểm cực trị.", "correct": True, "explanation": "Đúng, $y' = 1 - 1/(x-2)^2 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$."},
                        {"label": "d", "subLabel": "d)", "content": "Tích các giá trị cực trị của hàm số bằng $4$.", "correct": False, "explanation": "Sai, $y(1) = -2, y(3) = 2$, tích bằng $-4$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Một chất điểm chuyển động theo quy luật $s(t) = 6t^2 - t^3$ ($t$ tính bằng giây, $s$ tính bằng mét). Tính thời điểm $t$ (giây) tại đó vận tốc của vật bị triệt tiêu ($v = 0$, loại $t = 0$).",
                    "correctAnswer": "4",
                    "acceptedAnswers": ["4"],
                    "explanation": "$v(t) = s'(t) = 12t - 3t^2 = 3t(4 - t) = 0 \\Leftrightarrow t = 4\\text{ s}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hàm số $y = \\frac{x+3}{x-1}$. Điểm $M$ trên đồ thị có hoành độ bằng $2$. Hệ số góc của tiếp tuyến của đồ thị tại điểm $M$ bằng bao nhiêu?",
                    "correctAnswer": "-4",
                    "acceptedAnswers": ["-4"],
                    "explanation": "$y' = \\frac{-4}{(x-1)^2}$. Tại $x_0 = 2$, $k = y'(2) = -4$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Tìm giá trị lớn nhất của hàm số $f(x) = \\sqrt{4 - x^2}$.",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "Ta có $4 - x^2 \\le 4 \\Rightarrow \\sqrt{4 - x^2} \\le 2$. Đạt tại $x = 0$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Một doanh nghiệp sản xuất một loại sản phẩm với hàm tổng chi phí $C(x) = x^2 + 40x + 900$ (triệu đồng). Chi phí trung bình trên mỗi sản phẩm $\\frac{C(x)}{x}$ đạt giá trị nhỏ nhất khi quy mô sản xuất là bao nhiêu sản phẩm?",
                    "correctAnswer": "30",
                    "acceptedAnswers": ["30"],
                    "explanation": "$\\bar{C}(x) = x + 40 + \\frac{900}{x} \\ge 40 + 2\\sqrt{900} = 100$. Cực tiểu tại $x = \\sqrt{900} = 30$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{2x^2 + x - 1}{x + 1}$ có bao nhiêu đường tiệm cận?",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "$2x^2 + x - 1 = (x+1)(2x-1)$. Với $x \\ne -1$, hàm số là đường thẳng $y = 2x - 1$ bỏ điểm $(-1; -3)$, không có đường tiệm cận nào."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một sợi dây dài $100\\text{ cm}$ cắt thành hai đoạn: một đoạn uốn thành hình vuông, một đoạn uốn thành hình tròn. Để tổng diện tích nhỏ nhất, tỉ số cạnh hình vuông chia cho bán kính hình tròn bằng bao nhiêu?",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "Cực tiểu diện tích khi $a = 2r \\Rightarrow a/r = 2$."
                }
            ]

        elif exam_idx == 3:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Đồ thị hàm số $y = \\frac{1 - 3x}{x + 2}$ có tiệm cận đứng là đường thẳng",
                    "options": {"A": "$x = 2$", "B": "$y = -3$", "C": "$x = -2$", "D": "$y = 1$"},
                    "correct": "C",
                    "explanation": "Mẫu số triệt tiêu tại $x = -2$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hàm số $y = x^3 - 3x^2 + 5$. Giá trị cực đại của hàm số là",
                    "options": {"A": "$5$", "B": "$1$", "C": "$0$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "$y' = 3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Giá trị cực đại là $y(0) = 5$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Khoảng nghịch biến của hàm số $y = -x^3 + 3x$ là",
                    "options": {"A": "$(-1; 1)$", "B": "$(-1; +\\infty)$", "C": "$(-\\infty; 1)$", "D": "$(1; +\\infty)$"},
                    "correct": "D",
                    "explanation": "$y' = -3x^2 + 3 < 0 \\Leftrightarrow x^2 > 1 \\Leftrightarrow x > 1$ hoặc $x < -1$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Hàm số $y = \\frac{x+1}{x-1}$ nghịch biến trên khoảng nào dưới đây?",
                    "options": {"A": "$\\mathbb{R}$", "B": "$(1; +\\infty)$", "C": "$(-\\infty; 1) \\cup (1; +\\infty)$", "D": "$(-1; 1)$"},
                    "correct": "B",
                    "explanation": "$y' = \\frac{-2}{(x-1)^2} < 0$ trên $(1; +\\infty)$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Giá trị nhỏ nhất của hàm số $f(x) = x + \\frac{4}{x}$ trên đoạn $[1; 3]$ bằng",
                    "options": {"A": "$5$", "B": "$\\frac{13}{3}$", "C": "$4$", "D": "$\\frac{9}{2}$"},
                    "correct": "C",
                    "explanation": "$f'(x) = 1 - 4/x^2 = 0 \\Leftrightarrow x = 2 \\in [1; 3]$. $f(1) = 5, f(2) = 4, f(3) = 13/3$. Vậy $\\min = 4$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Điểm uốn của đồ thị hàm số $y = x^3 - 3x^2 + 2$ có tọa độ là",
                    "options": {"A": "$(1; 0)$", "B": "$(1; 2)$", "C": "$(0; 2)$", "D": "$(2; -2)$"},
                    "correct": "A",
                    "explanation": "$y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y(1) = 0$. Tọa độ điểm uốn là $(1; 0)$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x - 1}{x + 1}$ là",
                    "options": {"A": "$y = 2x - 1$", "B": "$y = 2x + 1$", "C": "$y = 2x + 3$", "D": "$y = x + 1$"},
                    "correct": "B",
                    "explanation": "$2x^2 + 3x - 1 = (2x + 1)(x + 1) - 2$. Tiệm cận xiên là $y = 2x + 1$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Một hồ bơi hình hộp chữ nhật không nắp có thể tích $V = 32\\text{ m}^3$, đáy có chiều dài gấp đôi chiều rộng. Chiều sâu hồ bơi bằng bao nhiêu để diện tích lát gạch nhỏ nhất?",
                    "options": {"A": "$4\\text{ m}$", "B": "$1\\text{ m}$", "C": "$3\\text{ m}$", "D": "$2\\text{ m}$"},
                    "correct": "D",
                    "explanation": "$2x^2 h = 32 \\Rightarrow h = 16/x^2$. Diện tích lát $S = 2x^2 + 6xh = 2x^2 + 96/x$. $S' = 4x - 96/x^2 = 0 \\Leftrightarrow x^3 = 24 \\Rightarrow h = 2\\text{ m}$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hàm số $y = \\frac{x^2 - 2x + 2}{x - 1}$. Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng",
                    "options": {"A": "$2$", "B": "$4$", "C": "$2\\sqrt{5}$", "D": "$2\\sqrt{2}$"},
                    "correct": "C",
                    "explanation": "Hai điểm cực trị là $(0; -2)$ và $(2; 2)$. Khoảng cách là $\\sqrt{2^2 + 4^2} = 2\\sqrt{5}$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Số lượng vi khuẩn trong một mẻ cấy biến thiên theo $N(t) = 1000 + 120t^2 - 20t^3$ ($0 \\le t \\le 5\\text{ giờ}$). Tốc độ tăng trưởng vi khuẩn $N'(t)$ lớn nhất tại thời điểm nào?",
                    "options": {"A": "$t = 2\\text{ giờ}$", "B": "$t = 3\\text{ giờ}$", "C": "$t = 1\\text{ giờ}$", "D": "$t = 4\\text{ giờ}$"},
                    "correct": "A",
                    "explanation": "$v(t) = N'(t) = 240t - 60t^2$. $v'(t) = 240 - 120t = 0 \\Leftrightarrow t = 2\\text{ giờ}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một máng dẫn nước bằng tôn có mặt cắt ngang là hình thang cân với đáy nhỏ và 2 cạnh bên đều bằng $20\\text{ cm}$. Góc nghiêng $\\alpha$ của cạnh bên để diện tích mặt cắt lớn nhất là",
                    "options": {"A": "$30^\\circ$", "B": "$45^\\circ$", "C": "$75^\\circ$", "D": "$60^\\circ$"},
                    "correct": "D",
                    "explanation": "$S(\\alpha) = 400\\sin\\alpha(1 + \\cos\\alpha)$. Đạt cực đại khi $\\cos\\alpha = 1/2 \\Leftrightarrow \\alpha = 60^\\circ$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x) = \\frac{1}{3}x^3 - 2x^2 + 3x + 1$. Tiếp tuyến của đồ thị có hệ số góc nhỏ nhất có phương trình là",
                    "options": {"A": "$y = -x + 3$", "B": "$y = -x + \\frac{11}{3}$", "C": "$y = -x + 1$", "D": "$y = -x - 1$"},
                    "correct": "B",
                    "explanation": "$k(x) = f'(x) = (x - 2)^2 - 1 \\ge -1$. Đạt nhỏ nhất tại $x = 2 \\Rightarrow y(2) = 5/3$. Tiếp tuyến $y = -1(x - 2) + 5/3 = -x + 11/3$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $y = \\frac{3x - 2}{x - 2}$ có đồ thị $(H)$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tập xác định của hàm số là $\\mathbb{R} \\setminus \\{2\\}$.", "correct": True, "explanation": "Đúng, mẫu $x - 2 \\ne 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Đạo hàm của hàm số luôn âm trên từng khoảng xác định.", "correct": True, "explanation": "Đúng, $y' = \\frac{-4}{(x-2)^2} < 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Đồ thị $(H)$ có tiệm cận đứng $x = 2$ và tiệm cận ngang $y = 3$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Gốc tọa độ $O(0;0)$ nằm trên đồ thị $(H)$.", "correct": False, "explanation": "Sai, với $x = 0$ thì $y = 1 \\ne 0$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hàm số $y = x^4 - 2x^2 - 3$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đồ thị hàm số nhận trục tung làm trục đối xứng.", "correct": True, "explanation": "Đúng, đây là hàm chẵn."},
                        {"label": "b", "subLabel": "b)", "content": "Hàm số có 3 điểm cực trị.", "correct": True, "explanation": "Đúng, $y' = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0, \\pm 1$."},
                        {"label": "c", "subLabel": "c)", "content": "Đồ thị hàm số cắt trục hoành tại 4 điểm phân biệt.", "correct": False, "explanation": "Sai, chỉ cắt tại $\\pm\\sqrt{3}$ (2 điểm)."},
                        {"label": "d", "subLabel": "d)", "content": "Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng $-4$.", "correct": True, "explanation": "Đúng, tại $x = \\pm 1$, $y = -4$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một công ty sản xuất bóng đèn có doanh thu $R(x) = 150x - 0.5x^2$ và chi phí $C(x) = 20x + 1000$ (triệu đồng), với $x$ là số nghìn bóng đèn ($0 < x < 200$).",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Hàm lợi nhuận là $P(x) = -0.5x^2 + 130x - 1000$.", "correct": True, "explanation": "Đúng, $P(x) = R(x) - C(x)$."},
                        {"label": "b", "subLabel": "b)", "content": "Lợi nhuận biên $P'(x) = -x + 130$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Để tối đa hóa lợi nhuận, công ty cần sản xuất $130$ nghìn bóng đèn.", "correct": True, "explanation": "Đúng, $P'(x) = 0 \\Leftrightarrow x = 130$."},
                        {"label": "d", "subLabel": "d)", "content": "Lợi nhuận tối đa thu được là $8450$ triệu đồng.", "correct": False, "explanation": "Sai, lợi nhuận tối đa là $7450$ triệu đồng."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $y = \\frac{x^2 + 3}{x - 1}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = 1$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Đường tiệm cận xiên của đồ thị là $y = x + 1$.", "correct": True, "explanation": "Đúng, $y = x + 1 + 4/(x-1)$."},
                        {"label": "c", "subLabel": "c)", "content": "Hàm số đồng biến trên toàn bộ tập xác định $\\mathbb{R} \\setminus \\{1\\}$.", "correct": False, "explanation": "Sai, có khoảng nghịch biến."},
                        {"label": "d", "subLabel": "d)", "content": "Giao điểm của hai đường tiệm cận là $I(1; 2)$.", "correct": True, "explanation": "Đúng, $x = 1 \\Rightarrow y = 2$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hàm số $y = x^3 - 3x^2 + 2$. Điểm cực tiểu của đồ thị hàm số có tung độ bằng bao nhiêu?",
                    "correctAnswer": "-2",
                    "acceptedAnswers": ["-2"],
                    "explanation": "Cực tiểu tại $x = 2 \\Rightarrow y(2) = 8 - 12 + 2 = -2$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Độ giảm huyết áp sau khi tiêm thuốc được mô hình hóa bởi $f(x) = x^2(9 - x)$ với $x \\in [0; 9]$. Liều lượng $x$ bằng bao nhiêu để hiệu quả giảm huyết áp là lớn nhất?",
                    "correctAnswer": "6",
                    "acceptedAnswers": ["6"],
                    "explanation": "$f'(x) = 18x - 3x^2 = 3x(6 - x) = 0 \\Leftrightarrow x = 6$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Tìm khoảng cách giữa hai đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{4x^2 + 1}}{x - 1}$.",
                    "correctAnswer": "4",
                    "acceptedAnswers": ["4"],
                    "explanation": "Hai tiệm cận ngang là $y = 2$ và $y = -2$. Khoảng cách là $2 - (-2) = 4$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tìm giá trị lớn nhất của hàm số $y = 2x^3 - 3x^2 - 12x + 10$ trên đoạn $[-2; 0]$.",
                    "correctAnswer": "17",
                    "acceptedAnswers": ["17"],
                    "explanation": "$y(-2) = 6, y(-1) = 17, y(0) = 10 \\Rightarrow \\max = 17$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một cửa hàng bán sản phẩm với giá $x$ đô-la một đơn vị thì bán được $200 - 2x$ sản phẩm. Chi phí nhập mỗi sản phẩm là $20$ đô-la. Để lợi nhuận lớn nhất, giá bán $x$ cần đặt là bao nhiêu đô-la?",
                    "correctAnswer": "60",
                    "acceptedAnswers": ["60"],
                    "explanation": "$P(x) = (x - 20)(200 - 2x) = -2x^2 + 240x - 4000$. Đạt cực đại tại $x = 60$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một hình nón có độ dài đường sinh $l = 6\\text{ cm}$. Thể tích lớn nhất của khối nón có dạng $k\\sqrt{3}\\pi\\text{ cm}^3$. Tính giá trị của $k$.",
                    "correctAnswer": "16",
                    "acceptedAnswers": ["16"],
                    "explanation": "$V = \\frac{1}{3}\\pi (36 - h^2)h \\Rightarrow h = 2\\sqrt{3} \\Rightarrow V = 16\\sqrt{3}\\pi \\Rightarrow k = 16$."
                }
            ]

        elif exam_idx == 4:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ có tâm đối xứng là điểm",
                    "options": {"A": "$(1; 2)$", "B": "$(2; -1)$", "C": "$(-1; -3)$", "D": "$(-1; 2)$"},
                    "correct": "D",
                    "explanation": "Tâm đối xứng là giao điểm của hai đường tiệm cận $x = -1$ và $y = 2$, tức là $(-1; 2)$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hàm số $y = f(x)$ có bảng biến thiên: $f'(x) > 0$ trên $(-\\infty; -1)$ và $(2; +\\infty)$, $f'(x) < 0$ trên $(-1; 2)$. Điểm cực đại của hàm số là",
                    "options": {"A": "$x = 2$", "B": "$x = -1$", "C": "$x = 0$", "D": "$y = -1$"},
                    "correct": "B",
                    "explanation": "Đạo hàm đổi dấu từ dương sang âm tại $x = -1$, do đó $x = -1$ là điểm cực đại."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hàm số $y = x^3 - 3x^2 + 2$. Số điểm cực trị của hàm số là",
                    "options": {"A": "$2$", "B": "$0$", "C": "$1$", "D": "$3$"},
                    "correct": "A",
                    "explanation": "$y' = 3x^2 - 6x = 0$ có 2 nghiệm phân biệt nên có 2 điểm cực trị."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Giá trị nhỏ nhất của hàm số $y = x^4 - 4x^2 + 1$ trên đoạn $[0; 3]$ là",
                    "options": {"A": "$1$", "B": "$46$", "C": "$-3$", "D": "$-4$"},
                    "correct": "C",
                    "explanation": "$y(0) = 1, y(\\sqrt{2}) = -3, y(3) = 46$. Vậy $\\min = -3$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có tiệm cận xiên đi qua điểm nào dưới đây?",
                    "options": {"A": "$O(0; 0)$", "B": "$A(1; 2)$", "C": "$B(0; 1)$", "D": "$C(2; 1)$"},
                    "correct": "A",
                    "explanation": "$y = x + 1/(x-1)$, tiệm cận xiên là $y = x$, đi qua gốc tọa độ $O(0; 0)$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một vật ném thẳng đứng lên cao từ mặt đất với phương trình $s(t) = 20t - 5t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Độ cao lớn nhất vật đạt được là",
                    "options": {"A": "$15\\text{ m}$", "B": "$30\\text{ m}$", "C": "$20\\text{ m}$", "D": "$25\\text{ m}$"},
                    "correct": "C",
                    "explanation": "$v(t) = 20 - 10t = 0 \\Leftrightarrow t = 2\\text{ s}$. Độ cao $s(2) = 20\\text{ m}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Hàm số $y = -\\frac{1}{3}x^3 + x^2 + 3x - 1$ đồng biến trên khoảng nào dưới đây?",
                    "options": {"A": "$(-\\infty; -1)$", "B": "$(-1; 3)$", "C": "$(3; +\\infty)$", "D": "$(-3; 1)$"},
                    "correct": "B",
                    "explanation": "$y' = -x^2 + 2x + 3 > 0 \\Leftrightarrow -1 < x < 3$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Tìm số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x - 2}{\\sqrt{x^2 - 4}}$.",
                    "options": {"A": "$1$", "B": "$2$", "C": "$4$", "D": "$3$"},
                    "correct": "D",
                    "explanation": "Có 2 TCN ($y = 1, y = -1$) và 1 TCĐ ($x = -2$). Tổng cộng có 3 tiệm cận."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một người nông dân rào một mảnh vườn hình chữ nhật có diện tích $600\\text{ m}^2$ áp sát một bức tường thẳng (chỉ rào 3 cạnh). Chiều dài hàng rào ngắn nhất có thể làm là",
                    "options": {"A": "$60\\sqrt{2}\\text{ m}$", "B": "$40\\sqrt{3}\\text{ m}$", "C": "$80\\text{ m}$", "D": "$70\\text{ m}$"},
                    "correct": "B",
                    "explanation": "$L = 2x + 600/x \\ge 2\\sqrt{1200} = 40\\sqrt{3}\\text{ m}$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho hàm số $y = \\frac{x^2 + 3x + 3}{x + 2}$. Tọa độ giao điểm của hai đường tiệm cận của đồ thị là",
                    "options": {"A": "$(-2; -1)$", "B": "$(-2; 1)$", "C": "$(2; 1)$", "D": "$(-2; 0)$"},
                    "correct": "A",
                    "explanation": "TCĐ: $x = -2$. TCX: $y = x + 1$. Giao điểm là $(-2; -1)$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một công ty muốn xây dựng đường ống dẫn dầu từ giàn khoan $S$ cách bờ biển $6\\text{ km}$ đến nhà máy lọc dầu $B$ trên bờ biển cách điểm chiếu $A$ một khoảng $8\\text{ km}$. Chi phí đặt ống dưới nước 5 tỷ đồng/km, trên đất liền 3 tỷ đồng/km. Chi phí đặt ống nhỏ nhất xấp xỉ bằng",
                    "options": {"A": "$42\\text{ tỷ}$", "B": "$38\\text{ tỷ}$", "C": "$48\\text{ tỷ}$", "D": "$50\\text{ tỷ}$"},
                    "correct": "C",
                    "explanation": "$C(x) = 5\\sqrt{x^2 + 36} + 3(8 - x)$ đạt cực tiểu tại $x = 4.5\\text{ km}$, tổng chi phí là 48 tỷ đồng."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x) = x^3 - 3x + 2$. Tiếp tuyến của đồ thị hàm số tại điểm có hoành độ $x_0 = 2$ có phương trình là",
                    "options": {"A": "$y = 9x - 10$", "B": "$y = 3x - 2$", "C": "$y = 6x - 8$", "D": "$y = 9x - 14$"},
                    "correct": "D",
                    "explanation": "$f'(2) = 9, f(2) = 4 \\Rightarrow y = 9(x - 2) + 4 = 9x - 14$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $y = f(x) = \\frac{x+2}{x-1}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", "correct": True, "explanation": "Đúng, mẫu khác 0."},
                        {"label": "b", "subLabel": "b)", "content": "Hàm số đồng biến trên khoảng $(1; +\\infty)$.", "correct": False, "explanation": "Sai, $y' = -3/(x-1)^2 < 0$ nên nghịch biến."},
                        {"label": "c", "subLabel": "c)", "content": "Tiệm cận đứng của đồ thị hàm số là đường thẳng $x = 1$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Tiệm cận ngang của đồ thị hàm số là đường thẳng $y = 1$.", "correct": True, "explanation": "Đúng, $\\lim_{x \\to \\pm\\infty} \\frac{x+2}{x-1} = 1$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hàm số $y = f(x) = x^3 - 6x^2 + 9x - 2$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đạo hàm của hàm số là $f'(x) = 3(x - 1)(x - 3)$.", "correct": True, "explanation": "Đúng, $3x^2 - 12x + 9 = 3(x-1)(x-3)$."},
                        {"label": "b", "subLabel": "b)", "content": "Hàm số đạt cực đại tại $x = 1$ và giá trị cực đại bằng $2$.", "correct": True, "explanation": "Đúng, $f(1) = 2$."},
                        {"label": "c", "subLabel": "c)", "content": "Hàm số đạt cực tiểu tại $x = 3$ và giá trị cực tiểu bằng $-2$.", "correct": True, "explanation": "Đúng, $f(3) = -2$."},
                        {"label": "d", "subLabel": "d)", "content": "Hàm số đồng biến trên toàn bộ khoảng $(1; 3)$.", "correct": False, "explanation": "Sai, trên $(1; 3)$ hàm số nghịch biến."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Khảo sát chi phí vận hành một chiếc tàu thủy khi chạy với vận tốc $v\\text{ km/h}$ được cho bởi công thức $C(v) = 20v + \\frac{2000}{v}$ (nghìn đồng/giờ) với $10 \\le v \\le 50$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vận tốc càng tăng thì chi phí vận hành luôn tăng.", "correct": False, "explanation": "Sai, hàm $C(v)$ có cực trị."},
                        {"label": "b", "subLabel": "b)", "content": "Đạo hàm $C'(v) = 20 - \\frac{2000}{v^2}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Chi phí vận hành mỗi giờ nhỏ nhất khi tàu chạy với vận tốc $v = 10\\text{ km/h}$.", "correct": True, "explanation": "Đúng, $C'(v) = 0 \\Leftrightarrow v = 10\\text{ km/h}$."},
                        {"label": "d", "subLabel": "d)", "content": "Chi phí vận hành nhỏ nhất là $400$ nghìn đồng/giờ.", "correct": True, "explanation": "Đúng, $C(10) = 400$ nghìn đồng."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $y = \\frac{2x^2 - x + 1}{x - 1}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đồ thị hàm số có tiệm cận đứng là $x = 1$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Đường tiệm cận xiên của đồ thị là $y = 2x + 1$.", "correct": True, "explanation": "Đúng, $2x^2 - x + 1 = (2x + 1)(x - 1) + 2$."},
                        {"label": "c", "subLabel": "c)", "content": "Giao điểm của hai đường tiệm cận là $I(1; 3)$.", "correct": True, "explanation": "Đúng, $x = 1 \\Rightarrow y = 3$."},
                        {"label": "d", "subLabel": "d)", "content": "Đồ thị hàm số đi qua gốc tọa độ $O(0;0)$.", "correct": False, "explanation": "Sai, với $x = 0$ thì $y = -1$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hàm số $y = x^3 - 3x^2 + 4$. Tính tổng hoành độ và tung độ của điểm uốn của đồ thị hàm số.",
                    "correctAnswer": "3",
                    "acceptedAnswers": ["3"],
                    "explanation": "$y'' = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y = 2$. Tổng tọa độ là $1 + 2 = 3$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Một người muốn làm một bể chứa nước bằng tôn có dạng hình hộp chữ nhật không nắp, đáy hình vuông, thể tích bằng $4\\text{ m}^3$. Chiều cao của bể bằng bao nhiêu mét để tốn ít tôn nhất?",
                    "correctAnswer": "1",
                    "acceptedAnswers": ["1"],
                    "explanation": "$V = x^2 h = 4 \\Rightarrow h = 4/x^2$. $S = x^2 + 16/x$. Cực tiểu tại $x = 2\\text{ m} \\Rightarrow h = 1\\text{ m}$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hàm số $f(x) = \\frac{x^2 + 2x - 2}{x - 1}$. Tính giá trị bình phương khoảng cách $d^2$ từ gốc tọa độ $O$ đến đường tiệm cận xiên của đồ thị hàm số.",
                    "correctAnswer": "4.5",
                    "acceptedAnswers": ["4.5", "4,5"],
                    "explanation": "Tiệm cận xiên là $x - y + 3 = 0$. $d = 3/\\sqrt{2} \\Rightarrow d^2 = 4.5$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tìm giá trị lớn nhất của hàm số $y = x^4 - 2x^2 + 5$ trên đoạn $[0; 2]$.",
                    "correctAnswer": "13",
                    "acceptedAnswers": ["13"],
                    "explanation": "$y(0) = 5, y(1) = 4, y(2) = 13 \\Rightarrow \\max = 13$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một cửa hàng nhận thấy rằng nếu bán một món quà với giá $p$ nghìn đồng thì số lượng bán được là $q = 100 - p$ sản phẩm. Chi phí vốn mỗi món là $40$ nghìn đồng. Giá bán $p$ (nghìn đồng) cần đặt là bao nhiêu để thu được lợi nhuận lớn nhất?",
                    "correctAnswer": "70",
                    "acceptedAnswers": ["70"],
                    "explanation": "$P(p) = (p - 40)(100 - p) = -p^2 + 140p - 4000$. Đạt cực đại tại $p = 70$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một quả bóng được đá lên từ mặt đất với quỹ đạo độ cao $h(t) = 18t - 4.9t^2$ (mét). Vận tốc tức thời của quả bóng tại thời điểm $t = 1\\text{ s}$ là bao nhiêu m/s?",
                    "correctAnswer": "8.2",
                    "acceptedAnswers": ["8.2", "8,2"],
                    "explanation": "$v(1) = h'(1) = 18 - 9.8 = 8.2\\text{ m/s}$."
                }
            ]

        else:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Đồ thị hàm số $y = \\frac{x-3}{2x+4}$ có đường tiệm cận ngang là",
                    "options": {"A": "$y = -2$", "B": "$y = \\frac{1}{2}$", "C": "$x = -2$", "D": "$y = -3$"},
                    "correct": "B",
                    "explanation": "$\\lim_{x \\to \\pm\\infty} \\frac{x-3}{2x+4} = \\frac{1}{2}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Hàm số $y = -x^3 + 3x^2 - 4$ nghịch biến trên khoảng nào?",
                    "options": {"A": "$(0; 2)$", "B": "$(-2; 0)$", "C": "$(2; +\\infty)$", "D": "$(-\\infty; 2)$"},
                    "correct": "C",
                    "explanation": "$y' = -3x^2 + 6x = -3x(x - 2) < 0 \\Leftrightarrow x < 0$ hoặc $x > 2$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hàm số $y = f(x)$ có bảng biến thiên: $f(x)$ đạt cực đại tại $x = -2$ với giá trị $3$, đạt cực tiểu tại $x = 1$ với giá trị $-1$. Giá trị cực tiểu của hàm số là",
                    "options": {"A": "$-1$", "B": "$3$", "C": "$1$", "D": "$-2$"},
                    "correct": "A",
                    "explanation": "Giá trị cực tiểu là $y_{CT} = -1$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Giá trị lớn nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[0; 2]$ bằng",
                    "options": {"A": "$1$", "B": "$-1$", "C": "$2$", "D": "$3$"},
                    "correct": "D",
                    "explanation": "$y(0) = 1, y(1) = -1, y(2) = 3 \\Rightarrow \\max = 3$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Đồ thị hàm số $y = \\frac{x^2 - 4x + 3}{x - 3}$ có bao nhiêu đường tiệm cận đứng?",
                    "options": {"A": "$1$", "B": "$0$", "C": "$2$", "D": "$3$"},
                    "correct": "B",
                    "explanation": "Tử số là $(x - 1)(x - 3)$. Tại $x \\to 3$, $y \\to 2$, không có tiệm cận đứng (0 đường)."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + x - 2}{x + 2}$ là",
                    "options": {"A": "$y = x - 1$", "B": "$y = x + 1$", "C": "$y = x$", "D": "$y = x + 2$"},
                    "correct": "A",
                    "explanation": "$x^2 + x - 2 = (x + 2)(x - 1)$. Đồ thị là đường thẳng $y = x - 1$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Cho hàm số $y = f(x)$ có $f'(x) = (x - 2)^3 (x + 1)^2$. Mệnh đề nào sau đây đúng?",
                    "options": {"A": "Hàm số có 2 điểm cực trị", "B": "Hàm số đạt cực tiểu tại $x = -1$", "C": "Hàm số đạt cực tiểu tại $x = 2$", "D": "Hàm số đạt cực đại tại $x = 2$"},
                    "correct": "C",
                    "explanation": "$f'(x)$ đổi dấu từ âm sang dương qua $x = 2$, nên hàm số đạt cực tiểu tại $x = 2$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Một chuyển động có phương trình $s(t) = t^3 - 6t^2 + 18t$ ($s$ tính bằng mét, $t$ tính bằng giây). Gia tốc của chuyển động tại thời điểm vận tốc đạt giá trị nhỏ nhất bằng",
                    "options": {"A": "$6\\text{ m/s}^2$", "B": "$-6\\text{ m/s}^2$", "C": "$12\\text{ m/s}^2$", "D": "$0\\text{ m/s}^2$"},
                    "correct": "D",
                    "explanation": "$v(t) = 3(t - 2)^2 + 6$ nhỏ nhất tại $t = 2\\text{ s}$. Gia tốc $a(2) = 6(2) - 12 = 0\\text{ m/s}^2$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một xưởng cơ khí cần làm một thùng chứa hình trụ có thể tích $16\\pi\\text{ m}^3$ không nắp. Để diện tích tôn làm thùng nhỏ nhất, bán kính đáy thùng phải bằng",
                    "options": {"A": "$4\\text{ m}$", "B": "$1\\text{ m}$", "C": "$2\\sqrt[3]{2}\\text{ m}$", "D": "$2\\text{ m}$"},
                    "correct": "D",
                    "explanation": "Với thùng không nắp, $S = \\pi r^2 + 32\\pi/r$ đạt cực tiểu khi $\\pi r^2 = 16\\pi/r \\Leftrightarrow r^3 = 16$. Hoặc nếu $V = 16\\pi$: $r = 2\\sqrt[3]{2}$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho hàm số $y = \\frac{2x - 1}{x + 2}$. Gọi $M, m$ lần lượt là giá trị lớn nhất và nhỏ nhất trên đoạn $[0; 2]$. Tích $M \\cdot m$ bằng",
                    "options": {"A": "$-\\frac{3}{8}$", "B": "$\\frac{3}{8}$", "C": "$-1$", "D": "$1$"},
                    "correct": "A",
                    "explanation": "$m = y(0) = -1/2, M = y(2) = 3/4 \\Rightarrow M \\cdot m = -3/8$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một bức tranh cao $2\\text{ m}$ treo trên tường có mép dưới cách tầm mắt người xem $1\\text{ m}$. Để góc nhìn bức tranh lớn nhất, người đó nên đứng cách tường một khoảng bằng",
                    "options": {"A": "$\\sqrt{2}\\text{ m}$", "B": "$\\sqrt{3}\\text{ m}$", "C": "$2\\text{ m}$", "D": "$1.5\\text{ m}$"},
                    "correct": "B",
                    "explanation": "$\\tan\\theta = \\frac{2}{x + 3/x}$ lớn nhất khi $x = \\sqrt{3}\\text{ m}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x) = x^3 - 3x^2 + 1$. Số nghiệm thực của phương trình $f(x) = 0$ là",
                    "options": {"A": "$0$", "B": "$1$", "C": "$2$", "D": "$3$"},
                    "correct": "D",
                    "explanation": "$y_{CĐ} = 1 > 0$ và $y_{CT} = -3 < 0$. Do $y_{CĐ} \\cdot y_{CT} < 0$ nên phương trình có 3 nghiệm phân biệt."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $y = \\frac{x-1}{2x+2}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", "correct": True, "explanation": "Đúng, mẫu khác 0 khi $x \\ne -1$."},
                        {"label": "b", "subLabel": "b)", "content": "Đường tiệm cận đứng là $x = -1$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Đường tiệm cận ngang là $y = \\frac{1}{2}$.", "correct": True, "explanation": "Đúng, tỉ số hệ số bậc cao nhất là $1/2$."},
                        {"label": "d", "subLabel": "d)", "content": "Hàm số nghịch biến trên từng khoảng xác định.", "correct": False, "explanation": "Sai, $y' = 4/(2x+2)^2 > 0$ nên đồng biến."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hàm số $y = x^3 - 3x$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Hàm số đã cho là hàm số lẻ, đồ thị nhận gốc tọa độ $O$ làm tâm đối xứng.", "correct": True, "explanation": "Đúng, $f(-x) = -f(x)$."},
                        {"label": "b", "subLabel": "b)", "content": "Hàm số đồng biến trên $(-1; 1)$.", "correct": False, "explanation": "Sai, $y' = 3(x^2 - 1) < 0$ trên $(-1; 1)$ nên nghịch biến."},
                        {"label": "c", "subLabel": "c)", "content": "Hàm số đạt cực đại tại điểm $x = -1$ với giá trị cực đại $y_{CĐ} = 2$.", "correct": True, "explanation": "Đúng, $y(-1) = 2$."},
                        {"label": "d", "subLabel": "d)", "content": "Đồ thị hàm số cắt trục hoành tại đúng 3 điểm phân biệt.", "correct": True, "explanation": "Đúng, $x(x^2 - 3) = 0 \\Leftrightarrow x = 0, \\pm\\sqrt{3}$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một khu rừng sinh thái có số lượng cá thể chim quý hiếm được bảo tồn theo thời gian $t$ (năm, $0 \\le t \\le 10$) mô tả bởi $P(t) = -t^3 + 12t^2 + 500$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tại thời điểm ban đầu $t = 0$, số cá thể chim là $500$ con.", "correct": True, "explanation": "Đúng, $P(0) = 500$."},
                        {"label": "b", "subLabel": "b)", "content": "Đạo hàm tốc độ thay đổi số lượng chim là $P'(t) = -3t^2 + 24t$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Số lượng chim đạt mức cao nhất vào năm thứ 8 ($t = 8$).", "correct": True, "explanation": "Đúng, $P'(t) = 0 \\Leftrightarrow t = 8$."},
                        {"label": "d", "subLabel": "d)", "content": "Số lượng chim cao nhất từng ghi nhận là $750$ con.", "correct": False, "explanation": "Sai, $P(8) = 756$ con."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đồ thị hàm số có tiệm cận xiên là $y = x - 2$.", "correct": True, "explanation": "Đúng, $y = x - 2 + 4/(x-1)$."},
                        {"label": "b", "subLabel": "b)", "content": "Đồ thị hàm số có tiệm cận đứng là $x = 1$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Tọa độ tâm đối xứng của đồ thị là $I(1; -1)$.", "correct": True, "explanation": "Đúng, giao của $x = 1$ và $y = x - 2$ là $(1; -1)$."},
                        {"label": "d", "subLabel": "d)", "content": "Hàm số không có điểm cực trị nào.", "correct": False, "explanation": "Sai, có 2 điểm cực trị tại $x = -1$ và $x = 3$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hàm số $y = \\frac{2x + 1}{x - 1}$. Tính khoảng cách từ điểm $M(3; 0)$ đến đường tiệm cận đứng của đồ thị hàm số.",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "Tiệm cận đứng là $x = 1$. Khoảng cách là $|3 - 1| = 2$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Một hộp quà có dạng hình hộp chữ nhật có đáy là hình vuông, tổng diện tích tất cả các mặt bằng $150\\text{ cm}^2$. Thể tích lớn nhất của hộp quà bằng bao nhiêu $\\text{cm}^3$?",
                    "correctAnswer": "125",
                    "acceptedAnswers": ["125"],
                    "explanation": "$V(x) = \\frac{1}{2}(75x - x^3)$. Đạt cực đại tại $x = 5\\text{ cm}$, $V = 125\\text{ cm}^3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Tìm giá trị nhỏ nhất của hàm số $f(x) = x^2 + \\frac{16}{x}$ trên khoảng $(0; +\\infty)$.",
                    "correctAnswer": "12",
                    "acceptedAnswers": ["12"],
                    "explanation": "$f(x) = x^2 + 8/x + 8/x \\ge 3\\sqrt[3]{64} = 12$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hàm số $y = \\frac{1}{3}x^3 - 2x^2 + 3x - 1$. Tiếp tuyến của đồ thị hàm số tại điểm có hoành độ $x_0 = 1$ có hệ số góc bằng bao nhiêu?",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "$k = y'(1) = 1 - 4 + 3 = 0$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một cửa hàng hoa quả tính toán lợi nhuận bán cam theo giá bán $x$ (nghìn đồng/kg) là $P(x) = -2x^2 + 100x - 800$ (nghìn đồng/ngày). Giá bán cam tối ưu để lợi nhuận mỗi ngày cao nhất là bao nhiêu nghìn đồng/kg?",
                    "correctAnswer": "25",
                    "acceptedAnswers": ["25"],
                    "explanation": "Đỉnh parabol tại $x = 100/4 = 25$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một giàn khoan dầu ở vị trí $A$ cách bờ biển $5\\text{ km}$. Điểm $B$ trên bờ biển gần $A$ nhất. Nhà máy lọc dầu ở vị trí $C$ trên bờ cách $B$ một khoảng $12\\text{ km}$. Kéo đường ống từ $A$ đến $M$ trên bờ rồi đến $C$. Khoảng cách $BM$ bằng bao nhiêu km để tổng chiều dài đường ống $AM + MC$ nhỏ nhất?",
                    "correctAnswer": "12",
                    "acceptedAnswers": ["12"],
                    "explanation": "Đoạn thẳng nối $A$ và $C$ trực tiếp là ngắn nhất, suy ra $M$ trùng $C$, tức $BM = 12\\text{ km}$."
                }
            ]

        exam_obj = {
            "id": f"cd5-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Ứng Dụng Đạo Hàm",
            "code": f"CD5-10{exam_idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
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
        "id": "cd5",
        "code": "CĐ 5",
        "title": "ỨNG DỤNG ĐẠO HÀM",
        "icon": "fa-solid fa-chart-line",
        "badge": "Lớp 12 • Trọng tâm khảo sát",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "description": "Tính đơn điệu, cực trị, GTLN-GTNN, đường tiệm cận của đồ thị hàm số và các bài toán tối ưu hóa thực tế trong kinh tế, kỹ thuật, đời sống.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd5()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
