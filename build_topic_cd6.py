# -*- coding: utf-8 -*-
"""
Chuyên đề 6: NGUYÊN HÀM - TÍCH PHÂN VÀ ỨNG DỤNG
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc Đề thi TN THPT 2025-2026.
Tuyệt đối KHÔNG chứa tham số m. Tăng cường bài toán diện tích, thể tích, vật lý thực tế.
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd6():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Nguyên Hàm & Bảng Nguyên Hàm Cơ Bản -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-calculator text-blue-600"></i>
      1. Khái Niệm Nguyên Hàm & Bảng Nguyên Hàm Cơ Bản
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Định nghĩa & Tính chất:</p>
        <p>&bull; $F(x)$ là nguyên hàm của $f(x)$ trên $K \\Leftrightarrow F'(x) = f(x)$.</p>
        <p>&bull; $\\int [f(x) \\pm g(x)]dx = \\int f(x)dx \\pm \\int g(x)dx$.</p>
        <p>&bull; $\\int k \\cdot f(x)dx = k \\int f(x)dx$ ($k \\ne 0$).</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Bảng nguyên hàm thông dụng:</p>
        <p>&bull; $\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C$ ($\\alpha \\ne -1$); $\\int \\frac{1}{x}dx = \\ln|x| + C$.</p>
        <p>&bull; $\\int e^x dx = e^x + C$; $\\int a^x dx = \\frac{a^x}{\\ln a} + C$.</p>
        <p>&bull; $\\int \\cos x dx = \\sin x + C$; $\\int \\sin x dx = -\\cos x + C$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Định Nghĩa Tích Phân & Phương Pháp Tính -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-shapes text-emerald-600"></i>
      2. Tích Phân & Hai Phương Pháp Tính
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs">
        <p class="font-bold text-emerald-900 mb-1">Công thức Newton - Leibniz:</p>
        <p>$\\int_a^b f(x)dx = F(b) - F(a) = F(x)\\Big|_a^b$.</p>
        <p class="mt-1 text-slate-700">Tính chất: $\\int_a^b = \\int_a^c + \\int_c^b$; $\\int_a^b = -\\int_b^a$; $\\int_a^a = 0$.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs">
        <p class="font-bold text-emerald-900 mb-1">Tích phân từng phần & đổi biến:</p>
        <p>&bull; Đổi biến: $\\int_a^b f(u(x))u'(x)dx = \\int_{u(a)}^{u(b)} f(u)du$.</p>
        <p>&bull; Từng phần: $\\int_a^b u dv = uv\\Big|_a^b - \\int_a^b v du$.</p>
        <p class="text-xs text-slate-600 mt-0.5">Thứ tự ưu tiên đặt $u$: "Nhất lô, nhì đa, tam lượng, tứ mũ".</p>
      </div>
    </div>
  </div>

  <!-- Phần 3: Ứng Dụng Hình Học (Diện Tích & Thể Tích) -->
  <div class="bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-cubes text-amber-600"></i>
      3. Ứng Dụng Tính Diện Tích Hình Phẳng & Thể Tích Khối Tròn Xoay
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-amber-200">
        <p><strong>Diện tích hình phẳng:</strong> $S = \\int_a^b |f(x) - g(x)|dx$.</p>
        <p class="text-slate-600 text-sm mt-0.5">Nếu đồ thị cắt nhau tại nghiệm $c \\in (a; b)$, tách tích phân thành các đoạn mang dấu xác định.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-amber-200">
        <p><strong>Thể tích khối tròn xoay (xoay quanh trục $Ox$):</strong> $V = \\pi \\int_a^b [f(x)]^2 dx$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 4: Ứng Dụng Vật Lý Chuyển Động Thực Tế -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-person-running text-purple-600"></i>
      4. Ứng Dụng Vật Lý Trong Đề Thi Mới
    </h4>
    <div class="bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt]">
      <p>&bull; Vận tốc $v(t) = s'(t) \\Rightarrow$ Quãng đường đi được từ $t_1$ đến $t_2$: $s = \\int_{t_1}^{t_2} v(t)dt$.</p>
      <p>&bull; Gia tốc $a(t) = v'(t) \\Rightarrow$ Vận tốc tại thời điểm $t$: $v(t) = v(0) + \\int_0^t a(u)du$.</p>
      <p>&bull; Lưu lượng chất lỏng chảy qua ống với tốc độ $q(t)$: Tổng thể tích $V = \\int_{t_1}^{t_2} q(t)dt$.</p>
    </div>
  </div>
</div>
"""

    exams = []
    for exam_idx in range(1, 6):
        seed = 6000 + exam_idx * 29

        if exam_idx == 1:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Họ nguyên hàm của hàm số $f(x) = 3x^2 - 2x + 1$ là",
                    "options": {"A": "$x^3 - x^2 + x + C$", "B": "$6x - 2 + C$", "C": "$3x^3 - 2x^2 + x + C$", "D": "$x^3 - 2x^2 + x + C$"},
                    "correct": "A",
                    "explanation": "$\\int (3x^2 - 2x + 1)dx = x^3 - x^2 + x + C$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Họ nguyên hàm của hàm số $f(x) = e^{2x}$ là",
                    "options": {"A": "$2e^{2x} + C$", "B": "$\\frac{1}{2}e^{2x} + C$", "C": "$e^{2x} + C$", "D": "$\\frac{1}{2}e^x + C$"},
                    "correct": "B",
                    "explanation": "$\\int e^{2x}dx = \\frac{1}{2}e^{2x} + C$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho $\\int_1^3 f(x)dx = 4$ và $\\int_1^3 g(x)dx = -2$. Khi đó $\\int_1^3 [f(x) - 2g(x)]dx$ bằng",
                    "options": {"A": "$8$", "B": "$2$", "C": "$0$", "D": "$6$"},
                    "correct": "A",
                    "explanation": "$\\int_1^3 [f(x) - 2g(x)]dx = 4 - 2(-2) = 8$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tích phân $I = \\int_0^1 (2x + 1)dx$ có giá trị bằng",
                    "options": {"A": "$1$", "B": "$3$", "C": "$2$", "D": "$4$"},
                    "correct": "C",
                    "explanation": "$I = (x^2 + x)\\Big|_0^1 = 1 + 1 = 2$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Cho $\\int_0^2 f(x)dx = 3$ và $\\int_2^5 f(x)dx = 7$. Tính tích phân $I = \\int_0^5 f(x)dx$.",
                    "options": {"A": "$4$", "B": "$10$", "C": "$-4$", "D": "$21$"},
                    "correct": "B",
                    "explanation": "$\\int_0^5 f(x)dx = \\int_0^2 f(x)dx + \\int_2^5 f(x)dx = 3 + 7 = 10$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng",
                    "options": {"A": "$\\frac{16}{3}$", "B": "$4$", "C": "$-\\frac{16}{3}$", "D": "$\\frac{8}{3}$"},
                    "correct": "A",
                    "explanation": "Trên $[0; 2]$, $x^2 - 4 \\le 0$, diện tích $S = \\int_0^2 (4 - x^2)dx = (4x - x^3/3)\\Big|_0^2 = 8 - 8/3 = 16/3$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái đạp phanh. Kể từ thời điểm đó, ô tô chuyển động chậm dần đều với vận tốc $v(t) = 20 - 4t$ ($t$ tính bằng giây). Quãng đường ô tô di chuyển được từ lúc đạp phanh đến khi dừng hẳn là",
                    "options": {"A": "$100\\text{ m}$", "B": "$40\\text{ m}$", "C": "$60\\text{ m}$", "D": "$50\\text{ m}$"},
                    "correct": "D",
                    "explanation": "Ô tô dừng khi $v(t) = 0 \\Leftrightarrow t = 5\\text{ s}$. Quãng đường $s = \\int_0^5 (20 - 4t)dt = (20t - 2t^2)\\Big|_0^5 = 100 - 50 = 50\\text{ m}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Biết $\\int_0^1 \\frac{1}{2x + 1}dx = \\frac{1}{2}\\ln a$. Giá trị của $a$ bằng",
                    "options": {"A": "$2$", "B": "$3$", "C": "$4$", "D": "$1$"},
                    "correct": "B",
                    "explanation": "$\\int_0^1 \\frac{1}{2x + 1}dx = \\frac{1}{2}\\ln(2x+1)\\Big|_0^1 = \\frac{1}{2}\\ln 3 \\Rightarrow a = 3$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 0, x = 4$ quanh trục $Ox$ bằng",
                    "options": {"A": "$8\\pi$", "B": "$16\\pi$", "C": "$\\frac{16\\pi}{3}$", "D": "$4\\pi$"},
                    "correct": "A",
                    "explanation": "$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\frac{x^2}{2}\\Big|_0^4 = 8\\pi$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho $I = \\int_0^1 x e^x dx$. Kết quả của $I$ bằng",
                    "options": {"A": "$e$", "B": "$e - 1$", "C": "$1$", "D": "$2$"},
                    "correct": "C",
                    "explanation": "Từng phần: $u = x, dv = e^x dx \\Rightarrow du = dx, v = e^x$. $I = x e^x\\Big|_0^1 - \\int_0^1 e^x dx = e - (e - 1) = 1$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một bồn chứa nước hình phễu parabol xoay có mặt cắt qua trục là parabol $y = x^2$ ($0 \\le y \\le 4$, đơn vị mét). Thể tích của bồn chứa bằng bao nhiêu mét khối?",
                    "options": {"A": "$4\\pi$", "B": "$8\\pi$", "C": "$\\frac{16\\pi}{3}$", "D": "$16\\pi$"},
                    "correct": "B",
                    "explanation": "Xoay quanh trục tung $Oy$: $V = \\pi \\int_0^4 x^2 dy = \\pi \\int_0^4 y dy = \\pi \\frac{y^2}{2}\\Big|_0^4 = 8\\pi\\text{ m}^3$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^4 f(x)dx = 8$. Tính tích phân $J = \\int_0^2 f(2x)dx$.",
                    "options": {"A": "$16$", "B": "$8$", "C": "$2$", "D": "$4$"},
                    "correct": "D",
                    "explanation": "Đổi biến $u = 2x \\Rightarrow dx = du/2$. $J = \\frac{1}{2}\\int_0^4 f(u)du = \\frac{1}{2} \\times 8 = 4$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $f(x) = 2x - 3$ và gọi $F(x)$ là một nguyên hàm của $f(x)$ thỏa mãn $F(1) = 2$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Họ nguyên hàm của $f(x)$ là $\\int (2x - 3)dx = x^2 - 3x + C$.", "correct": True, "explanation": "Đúng, $(x^2 - 3x)' = 2x - 3$."},
                        {"label": "b", "subLabel": "b)", "content": "Hằng số $C$ tương ứng với $F(x)$ là $C = 4$.", "correct": True, "explanation": "Đúng, $F(1) = 1 - 3 + C = 2 \\Rightarrow C = 4$."},
                        {"label": "c", "subLabel": "c)", "content": "Giá trị của $F(2)$ bằng $2$.", "correct": True, "explanation": "Đúng, $F(2) = 4 - 6 + 4 = 2$."},
                        {"label": "d", "subLabel": "d)", "content": "Phương trình $F(x) = 0$ có 2 nghiệm thực phân biệt.", "correct": False, "explanation": "Sai, $x^2 - 3x + 4 = 0$ có $\\Delta = 9 - 16 = -7 < 0$, vô nghiệm."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình phẳng $(H)$ giới hạn bởi đường cong $y = x^2$ và đường thẳng $y = 2x$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Phương trình hoành độ giao điểm của hai đường là $x^2 - 2x = 0$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Hai đường cắt nhau tại hai điểm có hoành độ lần lượt là $x = 0$ và $x = 2$.", "correct": True, "explanation": "Đúng, $x(x - 2) = 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Trên đoạn $[0; 2]$, ta có $x^2 \\ge 2x$.", "correct": False, "explanation": "Sai, trên $(0; 2)$ thì parabol nằm phía dưới đường thẳng: $2x \\ge x^2$."},
                        {"label": "d", "subLabel": "d)", "content": "Diện tích của hình phẳng $(H)$ bằng $\\frac{4}{3}$ (đơn vị diện tích).", "correct": True, "explanation": "Đúng, $S = \\int_0^2 (2x - x^2)dx = (x^2 - x^3/3)\\Big|_0^2 = 4 - 8/3 = 4/3$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một tên lửa nghiên cứu khí tượng được phóng thẳng đứng từ mặt đất với gia tốc $a(t) = 12 - 2t$ ($\\text{m/s}^2$) trong $6$ giây đầu tiên ($0 \\le t \\le 6$). Vận tốc ban đầu $v(0) = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Biểu thức vận tốc của tên lửa theo thời gian là $v(t) = 12t - t^2$ ($\\text{m/s}$).", "correct": True, "explanation": "Đúng, $v(t) = \\int (12 - 2t)dt = 12t - t^2$ với $v(0) = 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Vận tốc của tên lửa đạt giá trị lớn nhất tại thời điểm $t = 6\\text{ s}$.", "correct": True, "explanation": "Đúng, $v'(t) = a(t) = 12 - 2t = 0 \\Leftrightarrow t = 6\\text{ s}$."},
                        {"label": "c", "subLabel": "c)", "content": "Vận tốc lớn nhất mà tên lửa đạt được trong giai đoạn này là $36\\text{ m/s}$.", "correct": True, "explanation": "Đúng, $v(6) = 12(6) - 36 = 36\\text{ m/s}$."},
                        {"label": "d", "subLabel": "d)", "content": "Độ cao của tên lửa tại thời điểm $t = 6\\text{ s}$ là $150\\text{ m}$.", "correct": False, "explanation": "Sai, độ cao $h(6) = \\int_0^6 (12t - t^2)dt = (6t^2 - t^3/3)\\Big|_0^6 = 216 - 72 = 144\\text{ m}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho tích phân $I = \\int_0^{\\pi/2} x \\cos x dx$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Nếu đặt $u = x$ và $dv = \\cos x dx$ thì $du = dx$ và $v = \\sin x$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Công thức từng phần là $I = (x \\sin x)\\Big|_0^{\\pi/2} - \\int_0^{\\pi/2} \\sin x dx$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Giá trị của $\\int_0^{\\pi/2} \\sin x dx$ bằng $1$.", "correct": True, "explanation": "Đúng, $-\\cos x\\Big|_0^{\\pi/2} = 0 - (-1) = 1$."},
                        {"label": "d", "subLabel": "d)", "content": "Giá trị của tích phân $I$ bằng $\\frac{\\pi}{2} + 1$.", "correct": False, "explanation": "Sai, $I = \\frac{\\pi}{2}(1) - 1 = \\frac{\\pi}{2} - 1$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Biết $\\int_1^2 (3x^2 + 2x)dx = a$. Giá trị của $a$ bằng bao nhiêu?",
                    "correctAnswer": "10",
                    "acceptedAnswers": ["10"],
                    "explanation": "$(x^3 + x^2)\\Big|_1^2 = (8 + 4) - (1 + 1) = 10$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2\\text{ (m/s)}$. Tính quãng đường vật đi được trong khoảng thời gian từ $t = 1\\text{ s}$ đến $t = 3\\text{ s}$ (đơn vị: mét).",
                    "correctAnswer": "30",
                    "acceptedAnswers": ["30"],
                    "explanation": "$s = \\int_1^3 (3t^2 + 2)dt = (t^3 + 2t)\\Big|_1^3 = (27 + 6) - (1 + 2) = 30\\text{ m}$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho $\\int_0^3 f(x)dx = 5$ và $\\int_0^3 g(x)dx = 2$. Tính tích phân $I = \\int_0^3 [2f(x) - 3g(x)]dx$.",
                    "correctAnswer": "4",
                    "acceptedAnswers": ["4"],
                    "explanation": "$I = 2(5) - 3(2) = 10 - 6 = 4$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 3x^2$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$.",
                    "correctAnswer": "8",
                    "acceptedAnswers": ["8"],
                    "explanation": "$S = \\int_0^2 3x^2 dx = x^3\\Big|_0^2 = 8$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \\sqrt{2x}$, $y = 0$, $x = 0$, $x = 3$ quanh trục $Ox$ có dạng $k\\pi$. Tính giá trị của $k$.",
                    "correctAnswer": "9",
                    "acceptedAnswers": ["9"],
                    "explanation": "$V = \\pi \\int_0^3 2x dx = \\pi x^2\\Big|_0^3 = 9\\pi \\Rightarrow k = 9$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một giọt nước rỉ vào một bình với tốc độ $q(t) = 6t - t^2$ (ml/phút) trong $6$ phút đầu tiên ($0 \\le t \\le 6$). Tổng lượng nước chảy vào bình sau $6$ phút là bao nhiêu ml?",
                    "correctAnswer": "36",
                    "acceptedAnswers": ["36"],
                    "explanation": "$V = \\int_0^6 (6t - t^2)dt = (3t^2 - t^3/3)\\Big|_0^6 = 108 - 72 = 36\\text{ ml}$."
                }
            ]

        elif exam_idx == 2:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Khẳng định nào sau đây là sai?",
                    "options": {"A": "$\\int \\sin x dx = -\\cos x + C$", "B": "$\\int \\cos x dx = \\sin x + C$", "C": "$\\int e^x dx = e^x + C$", "D": "$\\int \\frac{1}{x}dx = -\\frac{1}{x^2} + C$"},
                    "correct": "D",
                    "explanation": "$\\int \\frac{1}{x}dx = \\ln|x| + C$, không phải $-1/x^2 + C$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho $\\int_0^1 f(x)dx = 2$ và $\\int_0^1 g(x)dx = 5$. Tính $\\int_0^1 [3f(x) - g(x)]dx$.",
                    "options": {"A": "$1$", "B": "$11$", "C": "$-1$", "D": "$6$"},
                    "correct": "A",
                    "explanation": "$3(2) - 5 = 1$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Tích phân $\\int_1^e \\frac{1}{x}dx$ bằng",
                    "options": {"A": "$0$", "B": "$1$", "C": "$e$", "D": "$e - 1$"},
                    "correct": "B",
                    "explanation": "$\\ln|x|\\Big|_1^e = \\ln e - \\ln 1 = 1 - 0 = 1$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = x^2$, trục hoành, đường thẳng $x = 0$ và $x = 1$ quanh trục $Ox$ bằng",
                    "options": {"A": "$\\frac{\\pi}{3}$", "B": "$\\frac{\\pi}{5}$", "C": "$\\frac{\\pi}{4}$", "D": "$\\pi$"},
                    "correct": "B",
                    "explanation": "$V = \\pi \\int_0^1 (x^2)^2 dx = \\pi \\int_0^1 x^4 dx = \\frac{\\pi}{5}$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Biết $\\int_0^2 f(x)dx = 4$. Tính tích phân $I = \\int_0^2 [2f(x) + 3]dx$.",
                    "options": {"A": "$11$", "B": "$14$", "C": "$10$", "D": "$8$"},
                    "correct": "B",
                    "explanation": "$I = 2(4) + 3(2 - 0) = 8 + 6 = 14$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Diện tích hình phẳng giới hạn bởi đồ thị hai hàm số $y = x^2$ và $y = x$ bằng",
                    "options": {"A": "$\\frac{1}{6}$", "B": "$\\frac{1}{3}$", "C": "$\\frac{1}{2}$", "D": "$\\frac{5}{6}$"},
                    "correct": "A",
                    "explanation": "$x^2 - x = 0 \\Leftrightarrow x = 0, x = 1$. $S = \\int_0^1 (x - x^2)dx = 1/2 - 1/3 = 1/6$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một đoàn tàu đang chạy đều với vận tốc $15\\text{ m/s}$ thì người lái hãm phanh chuyển động chậm dần đều với gia tốc $a(t) = -3\\text{ m/s}^2$. Quãng đường tàu đi được từ lúc hãm phanh đến khi dừng hẳn là",
                    "options": {"A": "$45\\text{ m}$", "B": "$37.5\\text{ m}$", "C": "$30\\text{ m}$", "D": "$75\\text{ m}$"},
                    "correct": "B",
                    "explanation": "$v(t) = 15 - 3t = 0 \\Leftrightarrow t = 5\\text{ s}$. $s = \\int_0^5 (15 - 3t)dt = 15(5) - 1.5(25) = 75 - 37.5 = 37.5\\text{ m}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho $\\int_0^1 (x + 1)e^x dx = a \\cdot e + b$ với $a, b \\in \\mathbb{Z}$. Tính $a + b$.",
                    "options": {"A": "$1$", "B": "$2$", "C": "$0$", "D": "$-1$"},
                    "correct": "A",
                    "explanation": "Từng phần: $u = x + 1, dv = e^x dx \\Rightarrow (x+1)e^x\\Big|_0^1 - \\int_0^1 e^x dx = 2e - 1 - (e - 1) = e$. Vậy $a = 1, b = 0 \\Rightarrow a + b = 1$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và $\\int_0^6 f(x)dx = 12$. Tính $I = \\int_0^2 f(3x)dx$.",
                    "options": {"A": "$36$", "B": "$6$", "C": "$4$", "D": "$2$"},
                    "correct": "C",
                    "explanation": "$u = 3x \\Rightarrow I = \\frac{1}{3}\\int_0^6 f(u)du = 12/3 = 4$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho $F(x)$ là một nguyên hàm của hàm số $f(x) = \\frac{1}{x - 1}$ thỏa mãn $F(2) = 1$. Khi đó $F(e + 1)$ bằng",
                    "options": {"A": "$1$", "B": "$2$", "C": "$e$", "D": "$e + 1$"},
                    "correct": "B",
                    "explanation": "$F(x) = \\ln|x - 1| + C$. $F(2) = \\ln 1 + C = 1 \\Rightarrow C = 1$. $F(e + 1) = \\ln e + 1 = 1 + 1 = 2$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một mặt bàn có dạng hình elip với phương trình $\\frac{x^2}{4} + \\frac{y^2}{1} = 1$ (đơn vị: mét). Diện tích của mặt bàn đó bằng bao nhiêu mét vuông?",
                    "options": {"A": "$2\\pi$", "B": "$4\\pi$", "C": "$\\pi$", "D": "$8\\pi$"},
                    "correct": "A",
                    "explanation": "Diện tích elip $S = \\pi a b = \\pi (2)(1) = 2\\pi\\text{ m}^2$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x)$ liên tục trên $[0; 1]$ thỏa mãn $\\int_0^1 x f'(x)dx = 5$ và $f(1) = 8$. Tính $I = \\int_0^1 f(x)dx$.",
                    "options": {"A": "$13$", "B": "$3$", "C": "$-3$", "D": "$40$"},
                    "correct": "B",
                    "explanation": "Từng phần: $\\int_0^1 x f'(x)dx = x f(x)\\Big|_0^1 - \\int_0^1 f(x)dx \\Rightarrow 5 = f(1) - I = 8 - I \\Rightarrow I = 3$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $f(x) = 3x^2 - 4x + 1$ và $F(x)$ là nguyên hàm của $f(x)$ với $F(0) = 5$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Nguyên hàm tổng quát của $f(x)$ là $F(x) = x^3 - 2x^2 + x + C$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Hằng số $C = 5$.", "correct": True, "explanation": "Đúng, $F(0) = C = 5$."},
                        {"label": "c", "subLabel": "c)", "content": "Giá trị của $F(1)$ bằng $5$.", "correct": True, "explanation": "Đúng, $F(1) = 1 - 2 + 1 + 5 = 5$."},
                        {"label": "d", "subLabel": "d)", "content": "Điểm cực đại của hàm số $y = F(x)$ có hoành độ $x = 1$.", "correct": False, "explanation": "Sai, $F'(x) = f(x) = 0 \\Leftrightarrow x = 1$ hoặc $x = 1/3$. Tại $x = 1$, $F''(1) = f'(1) = 6 - 4 = 2 > 0$ nên là điểm cực tiểu."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình phẳng $(D)$ giới hạn bởi đường cong $y = \\sqrt{x}$, trục hoành và đường thẳng $x = 4$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Diện tích hình phẳng $(D)$ được tính bởi công thức $S = \\int_0^4 \\sqrt{x}dx$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Diện tích của hình phẳng $(D)$ bằng $\\frac{16}{3}$.", "correct": True, "explanation": "Đúng, $\\frac{2}{3}x^{3/2}\\Big|_0^4 = \\frac{2}{3} \\times 8 = \\frac{16}{3}$."},
                        {"label": "c", "subLabel": "c)", "content": "Khi quay $(D)$ quanh trục $Ox$, thể tích khối tròn xoay tạo thành là $V = \\pi \\int_0^4 x dx$.", "correct": True, "explanation": "Đúng, $(\\sqrt{x})^2 = x$."},
                        {"label": "d", "subLabel": "d)", "content": "Thể tích khối tròn xoay này bằng $16\\pi$.", "correct": False, "explanation": "Sai, $V = \\pi \\frac{x^2}{2}\\Big|_0^4 = 8\\pi$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một bình chứa nước hình nón lộn ngược có bán kính miệng $R = 2\\text{ m}$, chiều cao $H = 4\\text{ m}$. Nước được bơm vào bình với lưu lượng không đổi $Q = 0.5\\text{ m}^3\\text{/phút}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tổng thể tích bình chứa nước là $\\frac{16\\pi}{3}\\text{ m}^3$.", "correct": True, "explanation": "Đúng, $V = \\frac{1}{3}\\pi R^2 H = \\frac{16\\pi}{3}$."},
                        {"label": "b", "subLabel": "b)", "content": "Sau $t$ phút, thể tích nước bơm vào là $V(t) = 0.5t\\text{ m}^3$.", "correct": True, "explanation": "Đúng, $V(t) = \\int_0^t 0.5 dt = 0.5t$."},
                        {"label": "c", "subLabel": "c)", "content": "Sau 10 phút, lượng nước bơm vào là $5\\text{ m}^3$.", "correct": True, "explanation": "Đúng, $0.5 \\times 10 = 5$."},
                        {"label": "d", "subLabel": "d)", "content": "Thời gian để nước đầy bình là ít hơn 30 phút (lấy $\\pi \\approx 3.14$).", "correct": False, "explanation": "Sai, $V \\approx 16.755\\text{ m}^3 \\Rightarrow t = 16.755 / 0.5 \\approx 33.5\\text{ phút} > 30$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $f(x)$ liên tục trên đoạn $[0; 2]$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Nếu $f(x) \\ge 0, \\forall x \\in [0; 2]$ thì $\\int_0^2 f(x)dx \\ge 0$.", "correct": True, "explanation": "Đúng, tính chất của tích phân."},
                        {"label": "b", "subLabel": "b)", "content": "$\\int_0^2 [f(x)]^2 dx = [\\int_0^2 f(x)dx]^2$.", "correct": False, "explanation": "Sai, tích phân của bình phương không bằng bình phương của tích phân."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $\\int_0^2 f(x)dx = 6$ thì $\\int_0^1 f(2x)dx = 3$.", "correct": True, "explanation": "Đúng, đổi biến $u = 2x \\Rightarrow \\frac{1}{2} \\times 6 = 3$."},
                        {"label": "d", "subLabel": "d)", "content": "$\\int_0^2 f(x)dx + \\int_2^0 f(x)dx = 0$.", "correct": True, "explanation": "Đúng, $\\int_2^0 f(x)dx = -\\int_0^2 f(x)dx$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_0^2 (4x^3 - 6x)dx$.",
                    "correctAnswer": "4",
                    "acceptedAnswers": ["4"],
                    "explanation": "$(x^4 - 3x^2)\\Big|_0^2 = 16 - 12 = 4$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho $\\int_1^4 f(x)dx = 9$. Tính tích phân $J = \\int_1^2 x f(x^2)dx$.",
                    "correctAnswer": "4.5",
                    "acceptedAnswers": ["4.5", "4,5"],
                    "explanation": "$u = x^2 \\Rightarrow du = 2x dx$. $J = \\frac{1}{2}\\int_1^4 f(u)du = 4.5$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một vật chuyển động thẳng với gia tốc $a(t) = 6t\\text{ (m/s}^2\\text{)}$. Biết tại thời điểm $t = 0$, vận tốc của vật bằng $2\\text{ m/s}$. Tính vận tốc của vật tại thời điểm $t = 3\\text{ s}$ (m/s).",
                    "correctAnswer": "29",
                    "acceptedAnswers": ["29"],
                    "explanation": "$v(t) = 3t^2 + 2 \\Rightarrow v(3) = 3(9) + 2 = 29\\text{ m/s}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tính diện tích hình phẳng giới hạn bởi parabol $y = 4 - x^2$ và trục hoành $Ox$.",
                    "correctAnswer": "10.67",
                    "acceptedAnswers": ["10.67", "32/3", "10,67"],
                    "explanation": "Nghiệm $x = \\pm 2$. $S = \\int_{-2}^2 (4 - x^2)dx = 2(8 - 8/3) = 32/3 \\approx 10.67$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Cho hình phẳng giới hạn bởi đường cong $y = e^x$, trục hoành, trục tung và đường thẳng $x = 1$. Thể tích khối tròn xoay sinh ra khi quay hình này quanh trục $Ox$ có dạng $\\frac{\\pi}{2}(e^a - b)$. Tính giá trị của $a + b$.",
                    "correctAnswer": "3",
                    "acceptedAnswers": ["3"],
                    "explanation": "$V = \\pi \\int_0^1 e^{2x}dx = \\frac{\\pi}{2}(e^2 - 1) \\Rightarrow a = 2, b = 1 \\Rightarrow a + b = 3$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một bể dầu bị rò rỉ với tốc độ rò rỉ là $r(t) = 200 - 4t$ (lít/giờ) với $0 \\le t \\le 50$. Lượng dầu rò rỉ trong 10 giờ đầu tiên là bao nhiêu lít?",
                    "correctAnswer": "1800",
                    "acceptedAnswers": ["1800"],
                    "explanation": "$V = \\int_0^{10} (200 - 4t)dt = 200(10) - 2(100) = 2000 - 200 = 1800$ lít."
                }
            ]

        elif exam_idx == 3:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Nguyên hàm của hàm số $f(x) = \\cos 2x$ là",
                    "options": {"A": "$\\frac{1}{2}\\sin 2x + C$", "B": "$-\\frac{1}{2}\\sin 2x + C$", "C": "$2\\sin 2x + C$", "D": "$\\sin 2x + C$"},
                    "correct": "A",
                    "explanation": "$\\int \\cos 2x dx = \\frac{1}{2}\\sin 2x + C$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho $\\int_0^3 f(x)dx = 6$. Tính tích phân $I = \\int_0^3 \\frac{1}{2}f(x)dx$.",
                    "options": {"A": "$12$", "B": "$3$", "C": "$6$", "D": "$1.5$"},
                    "correct": "B",
                    "explanation": "$\\frac{1}{2} \\times 6 = 3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Biết $\\int_1^2 f(x)dx = 3$ và $\\int_1^2 g(x)dx = -1$. Khi đó $\\int_1^2 [f(x) + g(x)]dx$ bằng",
                    "options": {"A": "$4$", "B": "$-4$", "C": "$2$", "D": "$-3$"},
                    "correct": "C",
                    "explanation": "$3 + (-1) = 2$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tích phân $\\int_0^1 e^{3x}dx$ bằng",
                    "options": {"A": "$\\frac{e^3 - 1}{3}$", "B": "$e^3 - 1$", "C": "$\\frac{e^3}{3}$", "D": "$3(e^3 - 1)$"},
                    "correct": "A",
                    "explanation": "$\\frac{1}{3}e^{3x}\\Big|_0^1 = \\frac{e^3 - 1}{3}$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Diện tích hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành và hai đường thẳng $x = 0, x = 2$ bằng",
                    "options": {"A": "$2$", "B": "$8$", "C": "$4$", "D": "$16$"},
                    "correct": "C",
                    "explanation": "$S = \\int_0^2 x^3 dx = \\frac{x^4}{4}\\Big|_0^2 = 4$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = 2x - x^2$ và $y = 0$ quanh trục hoành là",
                    "options": {"A": "$\\frac{16\\pi}{15}$", "B": "$\\frac{4\\pi}{3}$", "C": "$\\frac{8\\pi}{15}$", "D": "$\\frac{2\\pi}{3}$"},
                    "correct": "A",
                    "explanation": "$V = \\pi \\int_0^2 (2x - x^2)^2 dx = \\pi \\int_0^2 (4x^2 - 4x^3 + x^4)dx = \\pi (32/3 - 16 + 32/5) = \\frac{16\\pi}{15}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một viên đạn được bắn thẳng đứng từ mặt đất với vận tốc ban đầu $v_0 = 196\\text{ m/s}$. Bỏ qua sức cản không khí, gia tốc trọng trường $g = 9.8\\text{ m/s}^2$. Thời gian viên đạn bay đến độ cao lớn nhất là",
                    "options": {"A": "$10\\text{ s}$", "B": "$20\\text{ s}$", "C": "$15\\text{ s}$", "D": "$25\\text{ s}$"},
                    "correct": "B",
                    "explanation": "$v(t) = 196 - 9.8t = 0 \\Leftrightarrow t = 20\\text{ s}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Biết $\\int_0^1 x(x^2 + 1)^3 dx = \\frac{a}{b}$ với $\\frac{a}{b}$ là phân số tối giản. Tổng $a + b$ bằng",
                    "options": {"A": "$23$", "B": "$15$", "C": "$19$", "D": "$31$"},
                    "correct": "A",
                    "explanation": "$u = x^2 + 1 \\Rightarrow \\frac{1}{2}\\int_1^2 u^3 du = \\frac{1}{8}(16 - 1) = \\frac{15}{8} \\Rightarrow a = 15, b = 8 \\Rightarrow a + b = 23$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hình phẳng giới hạn bởi đồ thị hàm số $y = \\frac{1}{x}$, trục hoành và hai đường thẳng $x = 1, x = 3$. Diện tích hình phẳng đó bằng",
                    "options": {"A": "$\\ln 3$", "B": "$\\ln 2$", "C": "$3$", "D": "$\\frac{2}{3}$"},
                    "correct": "A",
                    "explanation": "$S = \\int_1^3 \\frac{1}{x}dx = \\ln 3$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho tích phân từng phần $I = \\int_1^e x \\ln x dx$. Kết quả của $I$ bằng",
                    "options": {"A": "$\\frac{e^2 + 1}{4}$", "B": "$\\frac{e^2 - 1}{4}$", "C": "$\\frac{e^2}{2}$", "D": "$\\frac{e^2 + 3}{4}$"},
                    "correct": "A",
                    "explanation": "$u = \\ln x, dv = x dx \\Rightarrow \\frac{x^2}{2}\\ln x\\Big|_1^e - \\int_1^e \\frac{x}{2}dx = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{e^2 + 1}{4}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một vòm cửa của một công trình kiến trúc có dạng parabol với chiều rộng ở chân vòm $w = 4\\text{ m}$ và chiều cao đỉnh vòm $h = 3\\text{ m}$. Diện tích cửa sổ vòm parabol đó bằng",
                    "options": {"A": "$8\\text{ m}^2$", "B": "$12\\text{ m}^2$", "C": "$6\\text{ m}^2$", "D": "$9\\text{ m}^2$"},
                    "correct": "A",
                    "explanation": "Diện tích vòm parabol Archimedes: $S = \\frac{2}{3} w h = \\frac{2}{3} \\times 4 \\times 3 = 8\\text{ m}^2$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x)$ có đạo hàm liên tục trên $[0; 1]$ thỏa mãn $f(0) = 1, f(1) = 4$. Tính $I = \\int_0^1 f'(x)dx$.",
                    "options": {"A": "$5$", "B": "$3$", "C": "$-3$", "D": "$4$"},
                    "correct": "B",
                    "explanation": "$I = f(1) - f(0) = 4 - 1 = 3$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $f(x) = \\sin x + \\cos x$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Một nguyên hàm của $f(x)$ là $F(x) = -\\cos x + \\sin x$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Tích phân $\\int_0^{\\pi/2} f(x)dx = 2$.", "correct": True, "explanation": "Đúng, $(-\\cos x + \\sin x)\\Big|_0^{\\pi/2} = (0 + 1) - (-1 + 0) = 2$."},
                        {"label": "c", "subLabel": "c)", "content": "Tích phân $\\int_0^\\pi f(x)dx = 0$.", "correct": False, "explanation": "Sai, $(-\\cos x + \\sin x)\\Big|_0^\\pi = (1 + 0) - (-1 + 0) = 2$."},
                        {"label": "d", "subLabel": "d)", "content": "Giá trị trung bình của $f(x)$ trên $[0; \\pi/2]$ bằng $\\frac{4}{\\pi}$.", "correct": True, "explanation": "Đúng, $\\frac{1}{\\pi/2 - 0} \\times 2 = \\frac{4}{\\pi}$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho parabol $(P): y = -x^2 + 4$ và trục hoành $Ox$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Parabol cắt trục hoành tại hai điểm có hoành độ $x = -2$ và $x = 2$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Diện tích hình phẳng giới hạn bởi $(P)$ và $Ox$ là $S = \\int_{-2}^2 (4 - x^2)dx$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Diện tích hình phẳng này bằng $\\frac{32}{3}$.", "correct": True, "explanation": "Đúng, $2(8 - 8/3) = 32/3$."},
                        {"label": "d", "subLabel": "d)", "content": "Đường thẳng $y = 3$ chia hình phẳng thành hai phần có diện tích bằng nhau.", "correct": False, "explanation": "Sai, diện tích phần trên đỉnh chỉ là một phần nhỏ."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một bình ắc quy cung cấp dòng điện với cường độ giảm dần theo thời gian $I(t) = 5 e^{-0.1t}$ (Ampe) với $t$ tính bằng giây ($0 \\le t \\le 20$).",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tại thời điểm ban đầu $t = 0$, cường độ dòng điện là $5\\text{ A}$.", "correct": True, "explanation": "Đúng, $I(0) = 5$."},
                        {"label": "b", "subLabel": "b)", "content": "Điện lượng chạy qua mạch trong thời gian từ $0$ đến $t$ là $q(t) = \\int_0^t I(u)du$.", "correct": True, "explanation": "Đúng theo định nghĩa vật lý."},
                        {"label": "c", "subLabel": "c)", "content": "Biểu thức điện lượng là $q(t) = 50(1 - e^{-0.1t})$ (Cu-lông).", "correct": True, "explanation": "Đúng, $\\int_0^t 5e^{-0.1u}du = 5 \\times (-10)(e^{-0.1t} - 1) = 50(1 - e^{-0.1t})$."},
                        {"label": "d", "subLabel": "d)", "content": "Sau $20$ giây, điện lượng chuyển qua mạch vượt quá $50\\text{ C}$.", "correct": False, "explanation": "Sai, $q(20) = 50(1 - e^{-2}) < 50\\text{ C}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $y = f(x)$ liên tục trên $[-1; 1]$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Nếu $f(x)$ là hàm số lẻ thì $\\int_{-1}^1 f(x)dx = 0$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Nếu $f(x)$ là hàm số chẵn thì $\\int_{-1}^1 f(x)dx = 2\\int_0^1 f(x)dx$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Tích phân $\\int_{-1}^1 x^5 dx = 0$.", "correct": True, "explanation": "Đúng vì $x^5$ là hàm số lẻ."},
                        {"label": "d", "subLabel": "d)", "content": "Tích phân $\\int_{-1}^1 x^4 dx = 0$.", "correct": False, "explanation": "Sai, $x^4$ là hàm chẵn, tích phân bằng $2/5$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_0^1 (6x^2 + 4x - 1)dx$.",
                    "correctAnswer": "3",
                    "acceptedAnswers": ["3"],
                    "explanation": "$(2x^3 + 2x^2 - x)\\Big|_0^1 = 2 + 2 - 1 = 3$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho $\\int_0^2 f(x)dx = 5$. Tính tích phân $K = \\int_0^2 [3f(x) - 2x]dx$.",
                    "correctAnswer": "11",
                    "acceptedAnswers": ["11"],
                    "explanation": "$3(5) - x^2\\Big|_0^2 = 15 - 4 = 11$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một xe máy đang chạy với vận tốc $12\\text{ m/s}$ thì tăng tốc với gia tốc $a(t) = 2t + 1\\text{ (m/s}^2\\text{)}$. Tính vận tốc của xe máy sau $3$ giây kể từ khi bắt đầu tăng tốc (m/s).",
                    "correctAnswer": "24",
                    "acceptedAnswers": ["24"],
                    "explanation": "$v(t) = 12 + t^2 + t \\Rightarrow v(3) = 12 + 9 + 3 = 24\\text{ m/s}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tính diện tích hình phẳng giới hạn bởi đồ thị $y = x^2 - 2x$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 2$.",
                    "correctAnswer": "1.33",
                    "acceptedAnswers": ["1.33", "4/3", "1,33"],
                    "explanation": "$S = \\int_0^2 (2x - x^2)dx = 4 - 8/3 = 4/3 \\approx 1.33$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Khối tròn xoay tạo thành khi quay quanh $Ox$ hình phẳng giới hạn bởi $y = 3\\sqrt{x}$, $y = 0$, $x = 1$, $x = 2$ có thể tích bằng $k\\pi$. Tính giá trị của $k$.",
                    "correctAnswer": "13.5",
                    "acceptedAnswers": ["13.5", "27/2", "13,5"],
                    "explanation": "$V = \\pi \\int_1^2 9x dx = 9\\pi \\frac{4 - 1}{2} = 13.5\\pi \\Rightarrow k = 13.5$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một giếng khoan sâu bị phun khí mê-tan với tốc độ thoát khí $F(t) = 300 - 10t\\text{ (m}^3\\text{/giờ)}$. Sau bao nhiêu giờ thì lượng khí mê-tan phun ra đạt cực đại (tốc độ bằng 0)?",
                    "correctAnswer": "30",
                    "acceptedAnswers": ["30"],
                    "explanation": "$F(t) = 0 \\Leftrightarrow t = 30\\text{ giờ}$."
                }
            ]

        elif exam_idx == 4:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Họ nguyên hàm của hàm số $f(x) = \\frac{1}{x + 2}$ trên khoảng $(-2; +\\infty)$ là",
                    "options": {"A": "$\\ln(x + 2) + C$", "B": "$-\\frac{1}{(x+2)^2} + C$", "C": "$\\frac{1}{(x+2)^2} + C$", "D": "$\\ln|x| + 2 + C$"},
                    "correct": "A",
                    "explanation": "$\\int \\frac{1}{x+2}dx = \\ln(x+2) + C$ vì $x > -2$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Tích phân $\\int_0^2 2x dx$ bằng",
                    "options": {"A": "$4$", "B": "$2$", "C": "$8$", "D": "$1$"},
                    "correct": "A",
                    "explanation": "$x^2\\Big|_0^2 = 4$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho $\\int_0^1 f(x)dx = 3$ và $\\int_1^4 f(x)dx = 5$. Tính $\\int_0^4 f(x)dx$.",
                    "options": {"A": "$2$", "B": "$8$", "C": "$-2$", "D": "$15$"},
                    "correct": "B",
                    "explanation": "$3 + 5 = 8$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Diện tích hình phẳng giới hạn bởi đồ thị $y = e^x$, trục hoành và hai đường thẳng $x = 0, x = 1$ bằng",
                    "options": {"A": "$e$", "B": "$e - 1$", "C": "$e + 1$", "D": "$1$"},
                    "correct": "B",
                    "explanation": "$S = \\int_0^1 e^x dx = e - 1$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Cho $\\int_1^3 f(x)dx = 4$. Khi đó $\\int_1^3 [2f(x) - 1]dx$ bằng",
                    "options": {"A": "$6$", "B": "$7$", "C": "$8$", "D": "$5$"},
                    "correct": "A",
                    "explanation": "$2(4) - (3 - 1) = 8 - 2 = 6$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Thể tích khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi đồ thị $y = x^3$, trục hoành, các đường thẳng $x = 0$ và $x = 1$ bằng",
                    "options": {"A": "$\\frac{\\pi}{7}$", "B": "$\\frac{\\pi}{6}$", "C": "$\\frac{\\pi}{4}$", "D": "$\\frac{\\pi}{5}$"},
                    "correct": "A",
                    "explanation": "$V = \\pi \\int_0^1 (x^3)^2 dx = \\pi \\int_0^1 x^6 dx = \\frac{\\pi}{7}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một xe ô tô tăng tốc với quy luật vận tốc $v(t) = 10 + 2t\\text{ (m/s)}$. Quãng đường xe chạy được từ giây thứ 1 đến giây thứ 4 là",
                    "options": {"A": "$45\\text{ m}$", "B": "$30\\text{ m}$", "C": "$60\\text{ m}$", "D": "$48\\text{ m}$"},
                    "correct": "A",
                    "explanation": "$s = \\int_1^4 (10 + 2t)dt = (10t + t^2)\\Big|_1^4 = (40 + 16) - (10 + 1) = 56 - 11 = 45\\text{ m}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Biết $\\int_0^{\\pi/4} \\tan^2 x dx = 1 - \\frac{\\pi}{a}$. Giá trị của $a$ bằng",
                    "options": {"A": "$2$", "B": "$4$", "C": "$3$", "D": "$6$"},
                    "correct": "B",
                    "explanation": "$\\tan^2 x = \\frac{1}{\\cos^2 x} - 1 \\Rightarrow (\\tan x - x)\\Big|_0^{\\pi/4} = 1 - \\frac{\\pi}{4} \\Rightarrow a = 4$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có $\\int_0^9 f(x)dx = 9$. Tính $I = \\int_0^3 x f(x^2)dx$.",
                    "options": {"A": "$18$", "B": "$4.5$", "C": "$9$", "D": "$3$"},
                    "correct": "B",
                    "explanation": "$u = x^2 \\Rightarrow I = \\frac{1}{2}\\int_0^9 f(u)du = 4.5$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho hình phẳng giới hạn bởi parabol $y = x^2 - 1$ và trục hoành $Ox$. Diện tích của hình phẳng đó bằng",
                    "options": {"A": "$\\frac{4}{3}$", "B": "$\\frac{2}{3}$", "C": "$2$", "D": "$\\frac{5}{3}$"},
                    "correct": "A",
                    "explanation": "$S = \\int_{-1}^1 (1 - x^2)dx = 2(1 - 1/3) = 4/3$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một hồ chứa nước nhân tạo có mặt đáy phẳng, thể tích nước xả ra theo cửa đập sau thời gian $t$ (giờ) có lưu lượng $Q(t) = 120t - 3t^2\\text{ (m}^3\\text{/giờ)}$. Sau 10 giờ, tổng lượng nước đã xả bằng",
                    "options": {"A": "$5000\\text{ m}^3$", "B": "$6000\\text{ m}^3$", "C": "$4000\\text{ m}^3$", "D": "$7000\\text{ m}^3$"},
                    "correct": "A",
                    "explanation": "$V = \\int_0^{10} (120t - 3t^2)dt = (60t^2 - t^3)\\Big|_0^{10} = 6000 - 1000 = 5000\\text{ m}^3$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x)$ thỏa mãn $f'(x) = 2x + 3$ và $f(0) = 1$. Giá trị của $f(2)$ bằng",
                    "options": {"A": "$11$", "B": "$10$", "C": "$12$", "D": "$9$"},
                    "correct": "A",
                    "explanation": "$f(x) = x^2 + 3x + 1 \\Rightarrow f(2) = 4 + 6 + 1 = 11$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $f(x) = e^x - 1$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Họ nguyên hàm của $f(x)$ là $F(x) = e^x - x + C$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Đồ thị hàm số $y = f(x)$ đi qua gốc tọa độ $O(0; 0)$.", "correct": True, "explanation": "Đúng, $f(0) = 1 - 1 = 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Diện tích hình phẳng giới hạn bởi đồ thị $f(x)$, trục hoành và đường thẳng $x = 1$ bằng $e - 2$.", "correct": True, "explanation": "Đúng, $\\int_0^1 (e^x - 1)dx = (e - 1) - 1 = e - 2$."},
                        {"label": "d", "subLabel": "d)", "content": "Hàm số $f(x)$ nghịch biến trên khoảng $(0; +\\infty)$.", "correct": False, "explanation": "Sai, $f'(x) = e^x > 0$ nên luôn đồng biến."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình phẳng $(H)$ giới hạn bởi đường parabol $y = 3x^2$ và đường thẳng $y = 3x$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Hoành độ các giao điểm của hai đường là $x = 0$ và $x = 1$.", "correct": True, "explanation": "Đúng, $3x^2 - 3x = 0 \\Leftrightarrow x = 0, 1$."},
                        {"label": "b", "subLabel": "b)", "content": "Trên đoạn $[0; 1]$, đường thẳng $y = 3x$ nằm phía trên parabol $y = 3x^2$.", "correct": True, "explanation": "Đúng, $3x \\ge 3x^2$ trên $[0; 1]$."},
                        {"label": "c", "subLabel": "c)", "content": "Diện tích hình phẳng $(H)$ bằng $\\frac{1}{2}$.", "correct": True, "explanation": "Đúng, $\\int_0^1 (3x - 3x^2)dx = 3/2 - 1 = 1/2$."},
                        {"label": "d", "subLabel": "d)", "content": "Thể tích khối tròn xoay khi quay $(H)$ quanh trục $Ox$ bằng $\\pi$.", "correct": False, "explanation": "Sai, $V = \\pi \\int_0^1 (9x^2 - 9x^4)dx = 9\\pi(1/3 - 1/5) = 1.2\\pi \\ne \\pi$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một máy bay hạ cánh xuống đường băng với vận tốc ban đầu $v_0 = 80\\text{ m/s}$ và phanh chậm dần đều với gia tốc $a(t) = -4\\text{ m/s}^2$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Biểu thức vận tốc của máy bay sau khi hạ cánh là $v(t) = 80 - 4t$ (m/s).", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Sau $20$ giây kể từ lúc hạ cánh, máy bay sẽ dừng hẳn.", "correct": True, "explanation": "Đúng, $v(t) = 0 \\Leftrightarrow t = 20\\text{ s}$."},
                        {"label": "c", "subLabel": "c)", "content": "Chiều dài quãng đường lăn của máy bay đến khi dừng hẳn là $800\\text{ m}$.", "correct": True, "explanation": "Đúng, $s = \\int_0^{20} (80 - 4t)dt = 80(20) - 2(400) = 800\\text{ m}$."},
                        {"label": "d", "subLabel": "d)", "content": "Sau $10$ giây đầu tiên, máy bay đã đi được hơn một nửa quãng đường dừng.", "correct": True, "explanation": "Đúng, $s(10) = 800 - 200 = 600\\text{ m} > 400\\text{ m}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $f(x)$ liên tục trên đoạn $[0; 4]$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\int_0^4 f(x)dx = \\int_0^2 f(x)dx + \\int_2^4 f(x)dx$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Nếu $\\int_0^4 f(x)dx = 8$ thì $\\int_0^4 [f(x) + 2]dx = 16$.", "correct": True, "explanation": "Đúng, $8 + 2(4) = 16$."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $\\int_0^4 f(x)dx = 8$ thì $\\int_0^2 f(2x)dx = 16$.", "correct": False, "explanation": "Sai, $\\int_0^2 f(2x)dx = 8/2 = 4$."},
                        {"label": "d", "subLabel": "d)", "content": "Nếu $f(x) \\ge 1, \\forall x \\in [0; 4]$ thì $\\int_0^4 f(x)dx \\ge 4$.", "correct": True, "explanation": "Đúng, $\\int_0^4 f(x)dx \\ge 1(4 - 0) = 4$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_1^3 (3x^2 - 4x + 2)dx$.",
                    "correctAnswer": "14",
                    "acceptedAnswers": ["14"],
                    "explanation": "$(x^3 - 2x^2 + 2x)\\Big|_1^3 = (27 - 18 + 6) - (1 - 2 + 2) = 15 - 1 = 14$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho $\\int_0^1 f(x)dx = 2$ và $\\int_0^3 f(x)dx = 7$. Tính tích phân $K = \\int_1^3 f(x)dx$.",
                    "correctAnswer": "5",
                    "acceptedAnswers": ["5"],
                    "explanation": "$7 - 2 = 5$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một hòn đá rơi tự do từ độ cao không vận tốc ban đầu với gia tốc $g = 9.8\\text{ m/s}^2$. Quãng đường hòn đá rơi được trong $4$ giây đầu tiên là bao nhiêu mét?",
                    "correctAnswer": "78.4",
                    "acceptedAnswers": ["78.4", "78,4"],
                    "explanation": "$s = \\frac{1}{2}gt^2 = 0.5 \\times 9.8 \\times 16 = 78.4\\text{ m}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 6x - 3x^2$ và trục hoành $Ox$ bằng bao nhiêu?",
                    "correctAnswer": "4",
                    "acceptedAnswers": ["4"],
                    "explanation": "$3x(2 - x) = 0 \\Rightarrow S = \\int_0^2 (6x - 3x^2)dx = (3x^2 - x^3)\\Big|_0^2 = 12 - 8 = 4$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Cho hình phẳng giới hạn bởi $y = \\sqrt{3}x$, trục hoành, đường thẳng $x = 0$ và $x = 2$. Khối tròn xoay tạo thành khi quay quanh trục $Ox$ có thể tích là $k\\pi$. Tính giá trị của $k$.",
                    "correctAnswer": "8",
                    "acceptedAnswers": ["8"],
                    "explanation": "$V = \\pi \\int_0^2 3x^2 dx = 3\\pi \\times 8/3 = 8\\pi \\Rightarrow k = 8$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một bể nước bị rò rỉ theo quy luật $v(t) = 50 - 2t$ (lít/phút) với $0 \\le t \\le 25$. Lượng nước đã thất thoát trong $10$ phút đầu là bao nhiêu lít?",
                    "correctAnswer": "400",
                    "acceptedAnswers": ["400"],
                    "explanation": "$V = \\int_0^{10} (50 - 2t)dt = 50(10) - 100 = 400$ lít."
                }
            ]

        else:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Họ nguyên hàm của hàm số $f(x) = 4x^3 + 2x$ là",
                    "options": {"A": "$x^4 + x^2 + C$", "B": "$12x^2 + 2 + C$", "C": "$4x^4 + 2x^2 + C$", "D": "$x^4 + 2x^2 + C$"},
                    "correct": "A",
                    "explanation": "$\\int (4x^3 + 2x)dx = x^4 + x^2 + C$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Tích phân $\\int_0^1 (3x^2 + 1)dx$ có giá trị bằng",
                    "options": {"A": "$1$", "B": "$2$", "C": "$3$", "D": "$4$"},
                    "correct": "B",
                    "explanation": "$(x^3 + x)\\Big|_0^1 = 1 + 1 = 2$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho $\\int_2^5 f(x)dx = 8$. Giá trị của $\\int_5^2 f(x)dx$ là",
                    "options": {"A": "$8$", "B": "$-8$", "C": "$4$", "D": "$-4$"},
                    "correct": "B",
                    "explanation": "Đảo cận thì đổi dấu: $\\int_5^2 f(x)dx = -8$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = x$, $y = 0$, $x = 0$, $x = 3$ quanh trục hoành là",
                    "options": {"A": "$9\\pi$", "B": "$27\\pi$", "C": "$3\\pi$", "D": "$18\\pi$"},
                    "correct": "A",
                    "explanation": "$V = \\pi \\int_0^3 x^2 dx = \\pi \\frac{27}{3} = 9\\pi$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Biết $\\int_0^1 \\frac{2x}{x^2 + 1}dx = \\ln a$. Giá trị của $a$ bằng",
                    "options": {"A": "$1$", "B": "$3$", "C": "$2$", "D": "$4$"},
                    "correct": "C",
                    "explanation": "$\\ln(x^2 + 1)\\Big|_0^1 = \\ln 2 \\Rightarrow a = 2$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 2 - x^2$ và đường thẳng $y = x$ bằng",
                    "options": {"A": "$\\frac{9}{2}$", "B": "$\\frac{7}{2}$", "C": "$\\frac{9}{4}$", "D": "$\\frac{5}{2}$"},
                    "correct": "A",
                    "explanation": "$2 - x^2 = x \\Leftrightarrow x^2 + x - 2 = 0 \\Leftrightarrow x = -2, x = 1$. $S = \\int_{-2}^1 (2 - x - x^2)dx = 9/2$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một chất điểm chuyển động với vận tốc $v(t) = 4t^3 - 2t\\text{ (m/s)}$. Quãng đường chất điểm đi được trong khoảng thời gian từ $t = 1\\text{ s}$ đến $t = 2\\text{ s}$ là",
                    "options": {"A": "$12\\text{ m}$", "B": "$15\\text{ m}$", "C": "$16\\text{ m}$", "D": "$10\\text{ m}$"},
                    "correct": "A",
                    "explanation": "$s = \\int_1^2 (4t^3 - 2t)dt = (t^4 - t^2)\\Big|_1^2 = (16 - 4) - (1 - 1) = 12\\text{ m}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Biết $\\int_0^{\\pi/2} x \\sin x dx = a \\cdot \\pi + b$ với $a, b \\in \\mathbb{Q}$. Tính $a + b$.",
                    "options": {"A": "$1$", "B": "$0$", "C": "$-1$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "Từng phần: $u = x, dv = \\sin x dx \\Rightarrow -x \\cos x\\Big|_0^{\\pi/2} + \\int_0^{\\pi/2} \\cos x dx = 0 + 1 = 1$. Vậy $a = 0, b = 1 \\Rightarrow a + b = 1$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho $\\int_0^2 f(x)dx = 3$. Tính tích phân $I = \\int_0^2 [4f(x) - 3x^2]dx$.",
                    "options": {"A": "$4$", "B": "$12$", "C": "$6$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "$4(3) - x^3\\Big|_0^2 = 12 - 8 = 4$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho hình phẳng giới hạn bởi $y = \\sqrt{4 - x^2}$ và trục hoành $Ox$. Diện tích của hình phẳng này bằng",
                    "options": {"A": "$2\\pi$", "B": "$4\\pi$", "C": "$\\pi$", "D": "$8\\pi$"},
                    "correct": "A",
                    "explanation": "Đây là nửa hình tròn bán kính $R = 2$, diện tích $S = \\frac{1}{2}\\pi R^2 = 2\\pi$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một đập thủy điện có một cửa xả nước. Sau khi mở cửa đập, lưu lượng nước chảy qua đập trong 4 giờ đầu được đo bởi hàm số $f(t) = 100 + 30t - 3t^2\\text{ (m}^3\\text{/phút)}$. Tổng lượng nước đã xả trong 4 phút đầu là",
                    "options": {"A": "$576\\text{ m}^3$", "B": "$640\\text{ m}^3$", "C": "$520\\text{ m}^3$", "D": "$600\\text{ m}^3$"},
                    "correct": "A",
                    "explanation": "$V = \\int_0^4 (100 + 30t - 3t^2)dt = (100t + 15t^2 - t^3)\\Big|_0^4 = 400 + 240 - 64 = 576\\text{ m}^3$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và thỏa mãn $\\int_0^4 f(x)dx = 10$. Tính $J = \\int_0^1 f(4x)dx$.",
                    "options": {"A": "$2.5$", "B": "$40$", "C": "$5$", "D": "$10$"},
                    "correct": "A",
                    "explanation": "$u = 4x \\Rightarrow J = \\frac{1}{4}\\int_0^4 f(u)du = 10/4 = 2.5$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hàm số $f(x) = 2\\cos x - 1$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Một nguyên hàm của $f(x)$ là $F(x) = 2\\sin x - x + C$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Tích phân $\\int_0^{\\pi/2} f(x)dx = 2 - \\frac{\\pi}{2}$.", "correct": True, "explanation": "Đúng, $(2\\sin x - x)\\Big|_0^{\\pi/2} = 2 - \\pi/2$."},
                        {"label": "c", "subLabel": "c)", "content": "Phương trình $f(x) = 0$ có nghiệm $x = \\frac{\\pi}{3}$ trên $[0; \\pi/2]$.", "correct": True, "explanation": "Đúng, $2\\cos x = 1 \\Leftrightarrow \\cos x = 1/2 \\Leftrightarrow x = \\pi/3$."},
                        {"label": "d", "subLabel": "d)", "content": "Hàm số $f(x)$ luôn dương trên đoạn $[0; \\pi/2]$.", "correct": False, "explanation": "Sai, tại $x = \\pi/2$, $f(\\pi/2) = -1 < 0$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình phẳng $(S)$ giới hạn bởi đường cong $y = x^2 - 2x$ và trục hoành $Ox$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Parabol cắt trục hoành tại hai điểm $O(0; 0)$ và $A(2; 0)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Trên đoạn $[0; 2]$, parabol nằm hoàn toàn phía dưới trục hoành.", "correct": True, "explanation": "Đúng, $x(x - 2) \\le 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Diện tích của hình phẳng $(S)$ bằng $\\frac{4}{3}$.", "correct": True, "explanation": "Đúng, $\\int_0^2 (2x - x^2)dx = 4 - 8/3 = 4/3$."},
                        {"label": "d", "subLabel": "d)", "content": "Thể tích khối tròn xoay khi quay $(S)$ quanh trục $Ox$ bằng $\\frac{16\\pi}{15}$.", "correct": True, "explanation": "Đúng, $\\pi \\int_0^2 (x^2 - 2x)^2 dx = \\frac{16\\pi}{15}$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một bình hình trụ chứa nước có diện tích đáy $S = 2\\text{ m}^2$. Nước rò rỉ ra ngoài đáy bình theo quy luật vận tốc dòng chảy $v(t) = \\sqrt{4 - 0.2t}\\text{ (m/s)}$ với $0 \\le t \\le 20$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vận tốc dòng chảy giảm dần theo thời gian.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Tại thời điểm $t = 20\\text{ s}$, vận tốc dòng chảy bằng $0$.", "correct": True, "explanation": "Đúng, $4 - 4 = 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Tại thời điểm ban đầu $t = 0$, vận tốc dòng chảy là $2\\text{ m/s}$.", "correct": True, "explanation": "Đúng, $\\sqrt{4} = 2$."},
                        {"label": "d", "subLabel": "d)", "content": "Vận tốc trung bình của dòng chảy trong $20\\text{ giây}$ đầu là $1.5\\text{ m/s}$.", "correct": False, "explanation": "Sai, $\\frac{1}{20}\\int_0^{20} (4 - 0.2t)^{1/2}dt = \\frac{1}{20} \\times \\frac{80}{3} = \\frac{4}{3} \\approx 1.33\\text{ m/s} \\ne 1.5$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và $F(x)$ là một nguyên hàm của $f(x)$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\int_a^b f(x)dx = F(b) - F(a)$.", "correct": True, "explanation": "Đúng (Công thức Newton-Leibniz)."},
                        {"label": "b", "subLabel": "b)", "content": "$\\int_a^b f(t)dt = \\int_a^b f(x)dx$.", "correct": True, "explanation": "Đúng, tích phân không phụ thuộc vào ký hiệu biến lấy tích phân."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $F(x)$ là nguyên hàm của $f(x)$ thì $F(x) + 5$ cũng là một nguyên hàm của $f(x)$.", "correct": True, "explanation": "Đúng, đạo hàm của hằng số bằng 0."},
                        {"label": "d", "subLabel": "d)", "content": "$\\int_0^1 f(x)dx \\cdot \\int_1^2 f(x)dx = \\int_0^2 f(x)dx$.", "correct": False, "explanation": "Sai, chỉ có tính chất cộng: $\\int_0^1 + \\int_1^2 = \\int_0^2$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Tính giá trị của tích phân $I = \\int_0^1 (5x^4 + 3x^2)dx$.",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "$(x^5 + x^3)\\Big|_0^1 = 1 + 1 = 2$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho $\\int_1^5 f(x)dx = 12$. Tính tích phân $J = \\int_1^5 [\\frac{1}{3}f(x) + 2]dx$.",
                    "correctAnswer": "12",
                    "acceptedAnswers": ["12"],
                    "explanation": "$\\frac{1}{3}(12) + 2(5 - 1) = 4 + 8 = 12$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một vật rơi tự do với vận tốc $v(t) = 9.8t\\text{ (m/s)}$. Quãng đường vật rơi được trong giây thứ 3 (từ $t = 2\\text{ s}$ đến $t = 3\\text{ s}$) là bao nhiêu mét?",
                    "correctAnswer": "24.5",
                    "acceptedAnswers": ["24.5", "24,5"],
                    "explanation": "$s = 4.9(3^2 - 2^2) = 4.9 \\times 5 = 24.5\\text{ m}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Diện tích hình phẳng giới hạn bởi hai đường cong $y = x^2$ và $y = 2 - x^2$ bằng bao nhiêu? (Nhập phân số dạng thập phân làm tròn 2 chữ số hoặc dạng số thập phân: nếu bằng $8/3$, nhập $2.67$).",
                    "correctAnswer": "2.67",
                    "acceptedAnswers": ["2.67", "8/3", "2,67"],
                    "explanation": "$2x^2 = 2 \\Leftrightarrow x = \\pm 1$. $S = \\int_{-1}^1 (2 - 2x^2)dx = 2(2 - 2/3) = 8/3 \\approx 2.67$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Khối tròn xoay tạo thành khi quay quanh $Ox$ hình phẳng giới hạn bởi $y = \\sqrt{5x}$, $y = 0$, $x = 0$, $x = 2$ có thể tích là $k\\pi$. Tính giá trị của $k$.",
                    "correctAnswer": "10",
                    "acceptedAnswers": ["10"],
                    "explanation": "$V = \\pi \\int_0^2 5x dx = 5\\pi \\times 4/2 = 10\\pi \\Rightarrow k = 10$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một máy bơm nước bơm vào hồ với lưu lượng $q(t) = 80 - 4t\\text{ (m}^3\\text{/phút)}$ trong $20$ phút đầu. Tổng thể tích nước đã bơm vào hồ sau $10$ phút là bao nhiêu mét khối?",
                    "correctAnswer": "600",
                    "acceptedAnswers": ["600"],
                    "explanation": "$V = \\int_0^{10} (80 - 4t)dt = 800 - 200 = 600\\text{ m}^3$."
                }
            ]

        exam_obj = {
            "id": f"cd6-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Nguyên Hàm - Tích Phân",
            "code": f"CD6-10{exam_idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
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
        "id": "cd6",
        "code": "CĐ 6",
        "title": "NGUYÊN HÀM TÍCH PHÂN",
        "icon": "fa-solid fa-shapes",
        "badge": "Lớp 12 • Giải tích tích phân",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "description": "Nguyên hàm, tích phân, phương pháp đổi biến, từng phần và ứng dụng tính diện tích, thể tích khối tròn xoay, bài toán vật lý thực tế.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd6()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
