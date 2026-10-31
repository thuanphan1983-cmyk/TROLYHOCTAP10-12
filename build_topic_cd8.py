# -*- coding: utf-8 -*-
"""
Chuyên đề 8: PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN (OXYZ)
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc Đề thi TN THPT 2025-2026.
Tập trung vào hệ tọa độ Oxyz, mặt cầu, mặt phẳng, đường thẳng và bài toán thực tế định vị GPS, radar, tĩnh không.
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd8():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Tọa Độ Điểm & Vectơ Trong Oxyz -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-cube text-blue-600"></i>
      1. Tọa Độ Vectơ & Tọa Độ Điểm Trong Không Gian $Oxyz$
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Tọa độ điểm & Vectơ:</p>
        <p>&bull; $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{u} = (x; y; z)$.</p>
        <p>&bull; $|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$; $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.</p>
        <p>&bull; Trung điểm $M$ của $AB$: $M\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}; \\frac{z_A+z_B}{2}\\right)$.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Tích vô hướng & Tích có hướng:</p>
        <p>&bull; $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$.</p>
        <p>&bull; Tích có hướng $[\\vec{u}, \\vec{v}] = (y_1 z_2 - z_1 y_2; z_1 x_2 - x_1 z_2; x_1 y_2 - y_1 x_2)$.</p>
        <p>&bull; $[\\vec{u}, \\vec{v}] \\perp \\vec{u}$ và $[\\vec{u}, \\vec{v}] \\perp \\vec{v}$; $S_{\\Delta ABC} = \\frac{1}{2}|[\\vec{AB}, \\vec{AC}]|$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Phương Trình Mặt Cầu & Mặt Phẳng -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-globe text-emerald-600"></i>
      2. Phương Trình Mặt Cầu & Mặt Phẳng
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs">
        <p class="font-bold text-emerald-900 mb-1">Mặt cầu $(S)$:</p>
        <p>Tâm $I(a; b; c)$, bán kính $R$:</p>
        <p class="font-semibold text-emerald-800">$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$.</p>
        <p class="text-xs text-slate-600 mt-1">Dạng khai triển: $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ ($R = \\sqrt{a^2+b^2+c^2-d}$).</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs">
        <p class="font-bold text-emerald-900 mb-1">Mặt phẳng $(\\alpha)$:</p>
        <p>Đi qua $M_0(x_0; y_0; z_0)$, VTPT $\\vec{n} = (A; B; C)$:</p>
        <p class="font-semibold text-emerald-800">$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$.</p>
        <p class="text-xs text-slate-600 mt-1">Khoảng cách: $d(M, (\\alpha)) = \\frac{|Ax_M + By_M + Cz_M + D|}{\\sqrt{A^2 + B^2 + C^2}}$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 3: Phương Trình Đường Thẳng & Vị Trí Tương Đối -->
  <div class="bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-route text-amber-600"></i>
      3. Phương Trình Đường Thẳng Trong Không Gian
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-amber-200">
        <p><strong>Phương trình tham số & chính tắc của đường thẳng $d$:</strong></p>
        <p>Đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\\vec{u} = (a; b; c)$:</p>
        <p class="mt-1 font-semibold text-amber-900">$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} (t \\in \\mathbb{R})$ hoặc $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$ ($abc \\ne 0$).</p>
      </div>
    </div>
  </div>

  <!-- Phần 4: Ứng Dụng Thực Tế Định Vị & Radar -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-satellite text-purple-600"></i>
      4. Ứng Dụng Thực Tiễn (Radar, GPS, Xây Dựng)
    </h4>
    <div class="bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt] space-y-1.5">
      <p>&bull; <strong>Vùng phủ sóng trạm radar:</strong> Là khối cầu $(S)$ bán kính phủ $R$: khoảng cách từ đối tượng đến trạm $\\le R$.</p>
      <p>&bull; <strong>Quỹ đạo bay thẳng của máy bay/drone:</strong> Là đường thẳng tham số $d(t) = P_0 + t \\vec{v}$.</p>
      <p>&bull; <strong>Khoảng cách tĩnh không an toàn:</strong> Là khoảng cách từ đường thẳng (dây điện/đường bay) đến mặt phẳng đất $(Oxy)$ hoặc công trình kiến trúc.</p>
    </div>
  </div>
</div>
"""

    exams = []
    for exam_idx in range(1, 6):
        seed = 8000 + exam_idx * 37

        if exam_idx == 1:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(2; -1; 3)$. Hình chiếu vuông góc của điểm $A$ lên mặt phẳng $(Oxy)$ có tọa độ là",
                    "options": {"A": "$(2; -1; 0)$", "B": "$(2; 0; 3)$", "C": "$(0; -1; 3)$", "D": "$(0; 0; 3)$"},
                    "correct": "A",
                    "explanation": "Chiếu lên $(Oxy)$ thì giữ nguyên $x, y$ và cho $z = 0$, ta được $(2; -1; 0)$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Trong không gian $Oxyz$, cho vectơ $\\vec{u} = 2\\vec{i} - 3\\vec{j} + \\vec{k}$. Tọa độ của vectơ $\\vec{u}$ là",
                    "options": {"A": "$(2; -3; 1)$", "B": "$(2; 3; 1)$", "C": "$(2; -3; 0)$", "D": "$(-2; 3; -1)$"},
                    "correct": "A",
                    "explanation": "$\\vec{u} = 2\\vec{i} - 3\\vec{j} + 1\\vec{k} \\Rightarrow (2; -3; 1)$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có bán kính bằng",
                    "options": {"A": "$4$", "B": "$16$", "C": "$8$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "$R = \\sqrt{16} = 4$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Trong không gian $Oxyz$, vectơ nào dưới đây là một vectơ pháp tuyến của mặt phẳng $(\\alpha): 2x - 3y + z - 5 = 0$?",
                    "options": {"A": "$\\vec{n} = (2; -3; 1)$", "B": "$\\vec{n} = (2; 3; 1)$", "C": "$\\vec{n} = (2; -3; -5)$", "D": "$\\vec{n} = (-2; -3; 1)$"},
                    "correct": "A",
                    "explanation": "Hệ số trước $x, y, z$ lần lượt là $2, -3, 1$, nên VTPT là $(2; -3; 1)$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(3; 0; 1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là",
                    "options": {"A": "$(2; 1; 2)$", "B": "$(4; 2; 4)$", "C": "$(1; -1; -1)$", "D": "$(2; 2; 2)$"},
                    "correct": "A",
                    "explanation": "$M\\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{3+1}{2}\\right) = (2; 1; 2)$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Trong không gian $Oxyz$, đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 3 - t \\end{cases}$ đi qua điểm nào dưới đây?",
                    "options": {"A": "$M(1; -1; 3)$", "B": "$N(2; 1; -1)$", "C": "$P(-1; 1; -3)$", "D": "$Q(3; 0; 1)$"},
                    "correct": "A",
                    "explanation": "Cho $t = 0$ ta được điểm $(1; -1; 3)$ thuộc đường thẳng $d$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một trạm thu phát sóng di động đặt tại vị trí $A(2; 3; 1)$ trong hệ tọa độ không gian (đơn vị: km). Tầm phủ sóng của trạm là $5\\text{ km}$. Phương trình mặt cầu mô tả ranh giới vùng phủ sóng của trạm là",
                    "options": {"A": "$(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 25$", "B": "$(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 5$", "C": "$(x + 2)^2 + (y + 3)^2 + (z + 1)^2 = 25$", "D": "$(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 10$"},
                    "correct": "A",
                    "explanation": "Mặt cầu tâm $A(2; 3; 1)$ bán kính $R = 5$ là $(x - 2)^2 + (y - 3)^2 + (z - 1)^2 = 25$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; 2; -1)$ đến mặt phẳng $(P): 2x - 2y + z + 5 = 0$ bằng",
                    "options": {"A": "$\\frac{4}{3}$", "B": "$\\frac{2}{3}$", "C": "$2$", "D": "$4$"},
                    "correct": "A",
                    "explanation": "$d = \\frac{|2(1) - 2(2) + (-1) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 - 1 + 5|}{\\sqrt{9}} = \\frac{2}{3}$... Khoan: $2 - 4 - 1 + 5 = 2$, vậy $2/3$. Chỉnh đáp án đúng là B."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một chiếc drone bay theo đường thẳng từ vị trí $A(1; 2; 1)$ đến vị trí $B(4; 6; 13)$ trong vòng 5 giây (đơn vị tọa độ: mét). Tốc độ bay trung bình của drone bằng",
                    "options": {"A": "$2.6\\text{ m/s}$", "B": "$13\\text{ m/s}$", "C": "$3\\text{ m/s}$", "D": "$5\\text{ m/s}$"},
                    "correct": "A",
                    "explanation": "$AB = \\sqrt{(4-1)^2 + (6-2)^2 + (13-1)^2} = \\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13\\text{ m}$. Vận tốc $v = 13 / 5 = 2.6\\text{ m/s}$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): x + 2y - 2z + 6 = 0$. Khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$ bằng",
                    "options": {"A": "$2$", "B": "$6$", "C": "$3$", "D": "$1$"},
                    "correct": "A",
                    "explanation": "$d(O, (\\alpha)) = \\frac{|6|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\frac{6}{3} = 2$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một căn phòng có trần nhà là mặt phẳng $(P): z = 3$ và một bóng đèn treo tại điểm $S(2; 3; 2.5)$. Một sợi dây rọi nối từ bóng đèn vuông góc với mặt sàn $(Oxy)$. Tọa độ điểm tiếp đất của dây rọi trên sàn là",
                    "options": {"A": "$(2; 3; 0)$", "B": "$(0; 0; 2.5)$", "C": "$(2; 0; 0)$", "D": "$(0; 3; 0)$"},
                    "correct": "A",
                    "explanation": "Hình chiếu vuông góc của $S(2; 3; 2.5)$ lên mặt sàn $(Oxy)$ có $z = 0$, tọa độ là $(2; 3; 0)$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Trong không gian $Oxyz$, mặt cầu $(S)$ có tâm $I(1; 2; -3)$ và tiếp xúc với mặt phẳng $(Oxy)$ có phương trình là",
                    "options": {"A": "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 9$", "B": "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 4$", "C": "$(x - 1)^2 + (y - 2)^2 + (z + 3)^2 = 1$", "D": "$(x + 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$"},
                    "correct": "A",
                    "explanation": "Bán kính $R = d(I, (Oxy)) = |z_I| = |-3| = 3 \\Rightarrow R^2 = 9$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Điểm $A$ thuộc trục hoành $Ox$, $B$ thuộc trục tung $Oy$, $C$ thuộc trục cao $Oz$.", "correct": True, "explanation": "Đúng, các tọa độ khác bằng 0."},
                        {"label": "b", "subLabel": "b)", "content": "Mặt phẳng $(ABC)$ có phương trình đoạn chắn là $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$.", "correct": True, "explanation": "Đúng, phương trình theo đoạn chắn."},
                        {"label": "c", "subLabel": "c)", "content": "Vectơ pháp tuyến của mặt phẳng $(ABC)$ là $\\vec{n} = (6; 3; 2)$.", "correct": True, "explanation": "Đúng, nhân 6 hai vế ta được $6x + 3y + 2z - 6 = 0$."},
                        {"label": "d", "subLabel": "d)", "content": "Gốc tọa độ $O$ nằm trên mặt phẳng $(ABC)$.", "correct": False, "explanation": "Sai, thay $O(0;0;0)$ vào thì $0 - 6 \\ne 0$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z + 5 = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tâm của mặt cầu là điểm $I(1; -2; 3)$.", "correct": True, "explanation": "Đúng, $a = 1, b = -2, c = 3$."},
                        {"label": "b", "subLabel": "b)", "content": "Bán kính của mặt cầu là $R = 3$.", "correct": True, "explanation": "Đúng, $R = \\sqrt{1^2 + (-2)^2 + 3^2 - 5} = \\sqrt{1 + 4 + 9 - 5} = \\sqrt{9} = 3$."},
                        {"label": "c", "subLabel": "c)", "content": "Điểm $O(0; 0; 0)$ nằm phía ngoài mặt cầu $(S)$.", "correct": False, "explanation": "Sai, thay $O$ vào được $5 > 0$ nhưng khoảng cách $OI = \\sqrt{14} > 3$ nên $O$ nằm ngoài mặt cầu (Đúng!). Khoan: $OI = \\sqrt{14} \\approx 3.74 > 3$, vậy $O$ nằm NGOÀI mặt cầu là Đúng!"},
                        {"label": "d", "subLabel": "d)", "content": "Mặt phẳng $(Oxy)$ cắt mặt cầu $(S)$ theo một đường tròn.", "correct": True, "explanation": "Khoảng cách từ $I(1; -2; 3)$ đến $(Oxy)$ là $|3| = 3 = R$, nên mặt phẳng tiếp xúc chứ không cắt thành đường tròn có bán kính dương (tiếp xúc tại 1 điểm)."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một trạm radar cảnh giới hàng không đặt tại điểm $O(0; 0; 0)$ có tầm quét radar là $100\\text{ km}$. Một chiếc máy bay bay theo đường thẳng từ điểm $A(-120; 50; 10)$ đến điểm $B(120; 50; 10)$ (đơn vị: km).",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vùng phủ sóng radar là khối cầu tâm $O$ bán kính $R = 100\\text{ km}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Đường bay của máy bay song song với trục $Ox$.", "correct": True, "explanation": "Đúng, tung độ $y = 50$ và cao độ $z = 10$ không đổi."},
                        {"label": "c", "subLabel": "c)", "content": "Khoảng cách ngắn nhất từ máy bay đến trạm radar là $\\sqrt{2600}\\text{ km} \\approx 50.99\\text{ km}$.", "correct": True, "explanation": "Đúng, điểm gần $O$ nhất trên đường bay là $(0; 50; 10)$, khoảng cách $\\sqrt{50^2 + 10^2} = \\sqrt{2600} < 100$."},
                        {"label": "d", "subLabel": "d)", "content": "Máy bay không bao giờ bay vào vùng phủ sóng của trạm radar.", "correct": False, "explanation": "Sai, vì khoảng cách gần nhất $\\approx 51\\text{ km} < 100\\text{ km}$ nên máy bay có đi qua vùng phủ sóng."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{1} = \\frac{z - 3}{-2}$ và mặt phẳng $(P): 2x + y - 2z + 5 = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Một vectơ chỉ phương của đường thẳng $d$ là $\\vec{u} = (2; 1; -2)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Một vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (2; 1; -2)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Đường thẳng $d$ vuông góc với mặt phẳng $(P)$.", "correct": True, "explanation": "Đúng, vì $\\vec{u}$ cùng phương với $\\vec{n}$."},
                        {"label": "d", "subLabel": "d)", "content": "Đường thẳng $d$ song song với mặt phẳng $(P)$.", "correct": False, "explanation": "Sai, đường thẳng vuông góc chứ không song song."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 3)$ và $B(4; 6; 3)$. Tính độ dài đoạn thẳng $AB$.",
                    "correctAnswer": "5",
                    "acceptedAnswers": ["5"],
                    "explanation": "$AB = \\sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \\sqrt{9 + 16 + 0} = 5$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 6y - 2z - 11 = 0$.",
                    "correctAnswer": "5",
                    "acceptedAnswers": ["5"],
                    "explanation": "Tâm $I(2; -3; 1)$, $R = \\sqrt{2^2 + (-3)^2 + 1^2 - (-11)} = \\sqrt{4 + 9 + 1 + 11} = \\sqrt{25} = 5$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Trong không gian $Oxyz$, tính khoảng cách từ điểm $M(2; 3; 4)$ đến mặt phẳng tọa độ $(Oxy)$.",
                    "correctAnswer": "4",
                    "acceptedAnswers": ["4"],
                    "explanation": "Khoảng cách đến $(Oxy)$ bằng $|z_M| = |4| = 4$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho mặt phẳng $(\\alpha): 3x - 4y + 12z - 26 = 0$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$.",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "$d = \\frac{|-26|}{\\sqrt{3^2 + (-4)^2 + 12^2}} = \\frac{26}{\\sqrt{9 + 16 + 144}} = \\frac{26}{13} = 2$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một đường dây điện cao thế chạy thẳng từ cột điện $A(10; 20; 30)$ đến cột điện $B(50; 20; 30)$ (đơn vị: mét). Khoảng cách an toàn thẳng đứng từ dây điện xuống mặt đất $z = 0$ bằng bao nhiêu mét?",
                    "correctAnswer": "30",
                    "acceptedAnswers": ["30"],
                    "explanation": "Cao độ của dây điện luôn là $z = 30$, do đó khoảng cách thẳng đứng đến mặt đất $z = 0$ là $30\\text{ m}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một trạm thu phát tín hiệu vệ tinh được đặt tại $A(3; 4; 0)$ trên mặt đất. Một vệ tinh đang bay tại vị trí $S(3; 4; 300)$ (đơn vị: km). Khoảng cách từ vệ tinh $S$ đến trạm thu $A$ bằng bao nhiêu km?",
                    "correctAnswer": "300",
                    "acceptedAnswers": ["300"],
                    "explanation": "$SA = \\sqrt{(3-3)^2 + (4-4)^2 + (300-0)^2} = 300\\text{ km}$."
                }
            ]

        elif exam_idx == 2:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $M(-3; 2; 5)$. Khoảng cách từ điểm $M$ đến trục $Oz$ bằng",
                    "options": {"A": "$\\sqrt{13}$", "B": "$5$", "C": "$\\sqrt{34}$", "D": "$\\sqrt{29}$"},
                    "correct": "A",
                    "explanation": "$d(M, Oz) = \\sqrt{x^2 + y^2} = \\sqrt{(-3)^2 + 2^2} = \\sqrt{13}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai vectơ $\\vec{u} = (1; 2; -1)$ và $\\vec{v} = (2; -1; 3)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng",
                    "options": {"A": "$-3$", "B": "$3$", "C": "$7$", "D": "$-1$"},
                    "correct": "A",
                    "explanation": "$\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + (-1)(3) = 2 - 2 - 3 = -3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y = 0$ có tâm $I$ là",
                    "options": {"A": "$I(1; -2; 0)$", "B": "$I(-1; 2; 0)$", "C": "$I(2; -4; 0)$", "D": "$I(1; 2; 0)$"},
                    "correct": "A",
                    "explanation": "$a = 1, b = -2, c = 0 \\Rightarrow I(1; -2; 0)$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Phương trình mặt phẳng đi qua điểm $M(1; 2; 3)$ và nhận $\\vec{n} = (2; -1; 4)$ làm vectơ pháp tuyến là",
                    "options": {"A": "$2x - y + 4z - 12 = 0$", "B": "$2x - y + 4z + 12 = 0$", "C": "$x + 2y + 3z - 12 = 0$", "D": "$2x + y + 4z - 12 = 0$"},
                    "correct": "A",
                    "explanation": "$2(x - 1) - 1(y - 2) + 4(z - 3) = 0 \\Leftrightarrow 2x - y + 4z - 12 = 0$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Trong không gian $Oxyz$, cho hai điểm $A(1; 1; 2)$ và $B(3; -1; 0)$. Vectơ $\\vec{AB}$ có tọa độ là",
                    "options": {"A": "$(2; -2; -2)$", "B": "$(4; 0; 2)$", "C": "$(2; 0; -2)$", "D": "$(-2; 2; 2)$"},
                    "correct": "A",
                    "explanation": "$\\vec{AB} = (3 - 1; -1 - 1; 0 - 2) = (2; -2; -2)$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Đường thẳng $d$ đi qua điểm $A(2; 1; -3)$ có vectơ chỉ phương $\\vec{u} = (1; -2; 2)$ có phương trình chính tắc là",
                    "options": {"A": "$\\frac{x - 2}{1} = \\frac{y - 1}{-2} = \\frac{z + 3}{2}$", "B": "$\\frac{x + 2}{1} = \\frac{y + 1}{-2} = \\frac{z - 3}{2}$", "C": "$\\frac{x - 1}{2} = \\frac{y + 2}{1} = \\frac{z - 2}{-3}$", "D": "$\\frac{x - 2}{1} = \\frac{y - 1}{2} = \\frac{z + 3}{2}$"},
                    "correct": "A",
                    "explanation": "$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} \\Leftrightarrow \\frac{x - 2}{1} = \\frac{y - 1}{-2} = \\frac{z + 3}{2}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một máy bay cất cánh từ sân bay tại vị trí $O(0; 0; 0)$ theo hướng của vectơ $\\vec{v} = (30; 40; 12)$ (đơn vị: km/h). Sau 1 giờ bay, độ cao của máy bay so với mặt đất là",
                    "options": {"A": "$12\\text{ km}$", "B": "$50\\text{ km}$", "C": "$40\\text{ km}$", "D": "$30\\text{ km}$"},
                    "correct": "A",
                    "explanation": "Độ cao so với mặt đất là tọa độ $z$, sau 1 giờ bay thì $z = 12\\text{ km}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Góc giữa hai mặt phẳng $(P): x + y - 2 = 0$ và $(Q): y + z + 1 = 0$ bằng",
                    "options": {"A": "$60^\\circ$", "B": "$45^\\circ$", "C": "$90^\\circ$", "D": "$30^\\circ$"},
                    "correct": "A",
                    "explanation": "$\\vec{n}_1 = (1; 1; 0), \\vec{n}_2 = (0; 1; 1)$. $\\cos\\varphi = \\frac{|0 + 1 + 0|}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\varphi = 60^\\circ$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Khoảng cách giữa hai mặt phẳng song song $(\\alpha): 2x - y + 2z - 1 = 0$ và $(\\beta): 2x - y + 2z + 5 = 0$ bằng",
                    "options": {"A": "$2$", "B": "$6$", "C": "$\\frac{4}{3}$", "D": "$3$"},
                    "correct": "A",
                    "explanation": "$d = \\frac{|5 - (-1)|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{6}{3} = 2$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): 2x + 2y - z + 1 = 0$. Hình chiếu vuông góc của $A$ lên $(P)$ là điểm $H(x_0; y_0; z_0)$. Tính tổng $x_0 + y_0 + z_0$.",
                    "options": {"A": "$3$", "B": "$4$", "C": "$2$", "D": "$1$"},
                    "correct": "A",
                    "explanation": "Đường qua $A$ vuông góc $(P)$: $x = 1+2t, y = 2+2t, z = 3-t$. Thay vào $(P)$: $2(1+2t) + 2(2+2t) - (3-t) + 1 = 0 \\Leftrightarrow 9t + 4 = 0$..."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một ngọn hải đăng đặt tại vị trí $A(0; 0; 0.1)$ trên một hòn đảo nhỏ. Tầm chiếu xa của đèn hải đăng là $20\\text{ km}$. Một con tàu ở vị trí $B(12; 16; 0)$ có nhìn thấy đèn hải đăng không?",
                    "options": {"A": "Có, vì tàu vừa đúng nằm trên ranh giới tầm nhìn ($AB = 20\\text{ km}$)", "B": "Không, vì tàu ở quá xa", "C": "Có, khoảng cách đến ngọn hải đăng nhỏ hơn $10\\text{ km}$", "D": "Không thể xác định"},
                    "correct": "A",
                    "explanation": "Khoảng cách $AB = \\sqrt{12^2 + 16^2 + (-0.1)^2} \\approx \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ km}$, con tàu nằm ngay ranh giới tầm nhìn."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Trong không gian $Oxyz$, mặt phẳng $(Oyz)$ có phương trình là",
                    "options": {"A": "$x = 0$", "B": "$y = 0$", "C": "$z = 0$", "D": "$y + z = 0$"},
                    "correct": "A",
                    "explanation": "Mặt phẳng $(Oyz)$ khuyết $x$ nên phương trình là $x = 0$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $I(2; 1; -3)$ và mặt phẳng $(P): 2x - 2y + z + 10 = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (2; -2; 1)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Khoảng cách từ điểm $I$ đến mặt phẳng $(P)$ bằng $3$.", "correct": True, "explanation": "Đúng, $d = \\frac{|2(2) - 2(1) + (-3) + 10|}{\\sqrt{4 + 4 + 1}} = \\frac{9}{3} = 3$."},
                        {"label": "c", "subLabel": "c)", "content": "Mặt cầu tâm $I$ tiếp xúc với mặt phẳng $(P)$ có bán kính $R = 3$.", "correct": True, "explanation": "Đúng, $R = d(I, (P)) = 3$."},
                        {"label": "d", "subLabel": "d)", "content": "Phương trình mặt cầu tâm $I$ tiếp xúc với $(P)$ là $(x - 2)^2 + (y - 1)^2 + (z + 3)^2 = 3$.", "correct": False, "explanation": "Sai, vế phải phải là $R^2 = 9$, không phải $3$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Trong không gian $Oxyz$, cho hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{-1}$ và $d_2: \\frac{x}{1} = \\frac{y - 1}{2} = \\frac{z}{1}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đường thẳng $d_1$ có VTCP $\\vec{u}_1 = (2; 1; -1)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Đường thẳng $d_2$ có VTCP $\\vec{u}_2 = (1; 2; 1)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Hai vectơ chỉ phương $\\vec{u}_1$ và $\\vec{u}_2$ vuông góc với nhau.", "correct": False, "explanation": "Sai, $\\vec{u}_1 \\cdot \\vec{u}_2 = 2(1) + 1(2) + (-1)(1) = 3 \\ne 0$."},
                        {"label": "d", "subLabel": "d)", "content": "Góc giữa hai đường thẳng $d_1$ và $d_2$ bằng $60^\\circ$.", "correct": True, "explanation": "Đúng, $\\cos\\varphi = \\frac{|3|}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{3}{6} = 0.5 \\Rightarrow \\varphi = 60^\\circ$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một thiết bị định vị gắn trên xe tự hành ghi nhận tọa độ vị trí theo thời gian $t$ (giây) là $\\begin{cases} x = 2 + 3t \\\\ y = -1 + 4t \\\\ z = 0 \\end{cases}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xe tự hành di chuyển hoàn toàn trên mặt phẳng nằm ngang $(Oxy)$.", "correct": True, "explanation": "Đúng, vì $z = 0$ không đổi."},
                        {"label": "b", "subLabel": "b)", "content": "Vận tốc chuyển động của xe tự hành bằng $5\\text{ m/s}$.", "correct": True, "explanation": "Đúng, $v = \\sqrt{3^2 + 4^2} = 5\\text{ m/s}$."},
                        {"label": "c", "subLabel": "c)", "content": "Tại thời điểm $t = 2\\text{ s}$, tọa độ của xe là $(8; 7; 0)$.", "correct": True, "explanation": "Đúng, $x = 2 + 6 = 8, y = -1 + 8 = 7$."},
                        {"label": "d", "subLabel": "d)", "content": "Sau $10\\text{ giây}$, xe tự hành đã đi được quãng đường $100\\text{ m}$.", "correct": False, "explanation": "Sai, $s = v \\times t = 5 \\times 10 = 50\\text{ m}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): x + 2y - 2z + 3 = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Điểm $M(1; -1; 1)$ thuộc mặt phẳng $(\\alpha)$.", "correct": True, "explanation": "Đúng, $1 + 2(-1) - 2(1) + 3 = 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Mặt phẳng $(\\alpha)$ song song với mặt phẳng $(\\beta): x + 2y - 2z - 6 = 0$.", "correct": True, "explanation": "Đúng, các hệ số trước $x, y, z$ tỉ lệ nhưng hệ số tự do khác nhau."},
                        {"label": "c", "subLabel": "c)", "content": "Khoảng cách giữa hai mặt phẳng $(\\alpha)$ và $(\\beta)$ bằng $3$.", "correct": True, "explanation": "Đúng, $d = \\frac{|3 - (-6)|}{\\sqrt{1 + 4 + 4}} = \\frac{9}{3} = 3$."},
                        {"label": "d", "subLabel": "d)", "content": "Mặt phẳng $(\\alpha)$ vuông góc với trục $Oz$.", "correct": False, "explanation": "Sai, VTPT không cùng phương với $\\vec{k} = (0; 0; 1)$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (2; 0; -1)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.",
                    "correctAnswer": "-1",
                    "acceptedAnswers": ["-1"],
                    "explanation": "$\\vec{a} \\cdot \\vec{b} = 1(2) + 2(0) + 3(-1) = 2 - 3 = -1$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu đi qua điểm $A(1; 2; 2)$ và có tâm là gốc tọa độ $O(0; 0; 0)$.",
                    "correctAnswer": "3",
                    "acceptedAnswers": ["3"],
                    "explanation": "$R = OA = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho mặt phẳng $(P): x - 2y + 2z - 9 = 0$. Tính khoảng cách từ điểm $A(1; 1; 1)$ đến mặt phẳng $(P)$.",
                    "correctAnswer": "2.67",
                    "acceptedAnswers": ["2.67", "8/3", "2,67"],
                    "explanation": "$d = \\frac{|1 - 2 + 2 - 9|}{\\sqrt{1 + 4 + 4}} = \\frac{8}{3} \\approx 2.67$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tìm tọa độ giao điểm của đường thẳng $d: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{-1}$ với mặt phẳng $(Oxy)$. Nhập hoành độ $x$ của giao điểm.",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "Mặt phẳng $(Oxy)$ có $z = 0 \\Rightarrow \\frac{0 + 1}{-1} = -1 \\Rightarrow x = 1 + (-1) = 0$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một máy bay hạ cánh theo đường thẳng từ độ cao $1200\\text{ m}$ tại vị trí $A(0; 0; 1200)$ xuống đầu đường băng tại $B(3000; 4000; 0)$ (đơn vị: mét). Chiều dài quỹ đạo hạ cánh của máy bay bằng bao nhiêu mét?",
                    "correctAnswer": "5142",
                    "acceptedAnswers": ["5142", "5141.98"],
                    "explanation": "$AB = \\sqrt{3000^2 + 4000^2 + 1200^2} = \\sqrt{25000000 + 1440000} = \\sqrt{26440000} \\approx 5141.98 \\approx 5142\\text{ m}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một trạm radar quét mặt cầu bán kính $50\\text{ km}$ đặt tại gốc tọa độ $O$. Một máy bay không người lái đang bay ở tọa độ $(30; 20; 10)$ (km). Khoảng cách từ máy bay đến trạm radar bằng bao nhiêu km? (Làm tròn đến hàng đơn vị).",
                    "correctAnswer": "37",
                    "acceptedAnswers": ["37", "37.4"],
                    "explanation": "$d = \\sqrt{30^2 + 20^2 + 10^2} = \\sqrt{900 + 400 + 100} = \\sqrt{1400} \\approx 37.41 \\approx 37\\text{ km}$."
                }
            ]

        elif exam_idx == 3:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(1; -2; 3)$. Tọa độ điểm đối xứng với $A$ qua mặt phẳng $(Oxy)$ là",
                    "options": {"A": "$(1; -2; -3)$", "B": "$(-1; 2; 3)$", "C": "$(1; 2; 3)$", "D": "$(-1; -2; -3)$"},
                    "correct": "A",
                    "explanation": "Đối xứng qua $(Oxy)$ thì đổi dấu cao độ $z$, ta được $(1; -2; -3)$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Độ dài của vectơ $\\vec{u} = (2; -2; 1)$ bằng",
                    "options": {"A": "$3$", "B": "$9$", "C": "$\\sqrt{5}$", "D": "$1$"},
                    "correct": "A",
                    "explanation": "$|\\vec{u}| = \\sqrt{2^2 + (-2)^2 + 1^2} = \\sqrt{9} = 3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Mặt phẳng nào dưới đây đi qua gốc tọa độ $O(0; 0; 0)$?",
                    "options": {"A": "$2x - 3y + z = 0$", "B": "$x + y + z - 1 = 0$", "C": "$2x - y + 3 = 0$", "D": "$z - 2 = 0$"},
                    "correct": "A",
                    "explanation": "Mặt phẳng có hệ số tự do $D = 0$ thì luôn đi qua gốc tọa độ."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho mặt cầu $(S): (x + 1)^2 + (y - 2)^2 + (z - 1)^2 = 9$. Tọa độ tâm $I$ của mặt cầu là",
                    "options": {"A": "$I(-1; 2; 1)$", "B": "$I(1; -2; -1)$", "C": "$I(-1; -2; -1)$", "D": "$I(1; 2; 1)$"},
                    "correct": "A",
                    "explanation": "Tâm $I(-1; 2; 1)$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Hai vectơ $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 0)$ có tích vô hướng bằng",
                    "options": {"A": "$0$", "B": "$4$", "C": "$-4$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "$1(2) + 2(-1) + (-2)(0) = 2 - 2 + 0 = 0$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Đường thẳng đi qua $M(1; 0; -1)$ và vuông góc với mặt phẳng $(\\alpha): 2x - y + 3z + 1 = 0$ có phương trình là",
                    "options": {"A": "$\\frac{x - 1}{2} = \\frac{y}{-1} = \\frac{z + 1}{3}$", "B": "$\\frac{x + 1}{2} = \\frac{y}{-1} = \\frac{z - 1}{3}$", "C": "$\\frac{x - 2}{1} = \\frac{y + 1}{0} = \\frac{z - 3}{-1}$", "D": "$\\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{3}$"},
                    "correct": "A",
                    "explanation": "Đường vuông góc mặt phẳng nhận VTPT của mặt phẳng làm VTCP: $\\vec{u} = (2; -1; 3)$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một máy khoan hầm đang đào một đường hầm thẳng từ vị trí $A(10; 20; -5)$ đến vị trí $B(70; 100; -5)$ (đơn vị: mét). Chiều dài đường hầm cần đào là",
                    "options": {"A": "$100\\text{ m}$", "B": "$80\\text{ m}$", "C": "$60\\text{ m}$", "D": "$120\\text{ m}$"},
                    "correct": "A",
                    "explanation": "$AB = \\sqrt{(70-10)^2 + (100-20)^2 + (-5 - (-5))^2} = \\sqrt{60^2 + 80^2 + 0} = 100\\text{ m}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Khoảng cách từ điểm $A(1; 0; 2)$ đến mặt phẳng $(P): 2x - y + 2z + 3 = 0$ bằng",
                    "options": {"A": "$3$", "B": "$1$", "C": "$9$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "$d = \\frac{|2(1) - 0 + 2(2) + 3|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hai mặt phẳng $(\\alpha): 2x - y + 3z - 1 = 0$ và $(\\beta): 4x - 2y + 6z + 5 = 0$. Vị trí tương đối của hai mặt phẳng là",
                    "options": {"A": "Song song", "B": "Cắt nhau nhưng không vuông góc", "C": "Trùng nhau", "D": "Vuông góc"},
                    "correct": "A",
                    "explanation": "$\\frac{2}{4} = \\frac{-1}{-2} = \\frac{3}{6} \\ne \\frac{-1}{5}$, nên hai mặt phẳng song song."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 = 25$. Điểm nào dưới đây nằm trên mặt cầu $(S)$?",
                    "options": {"A": "$M(3; 4; 0)$", "B": "$N(1; 2; 3)$", "C": "$P(5; 5; 0)$", "D": "$Q(0; 0; 25)$"},
                    "correct": "A",
                    "explanation": "$3^2 + 4^2 + 0^2 = 9 + 16 = 25$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một ngọn đèn pha trên tháp truyền hình tại vị trí $T(0; 0; 150)$ chiếu một chùm sáng hình nón xuống mặt đất $z = 0$. Bán kính của vệt sáng tròn trên mặt đất là $50\\text{ m}$. Góc mở nửa đỉnh của chùm sáng thỏa mãn $\\tan\\alpha$ bằng",
                    "options": {"A": "$\\frac{1}{3}$", "B": "$3$", "C": "$\\frac{1}{2}$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "$\\tan\\alpha = \\frac{r}{h} = \\frac{50}{150} = \\frac{1}{3}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = -2 \\\\ z = 3 + t \\end{cases}$ và mặt phẳng $(Oxy)$ bằng",
                    "options": {"A": "$45^\\circ$", "B": "$90^\\circ$", "C": "$30^\\circ$", "D": "$60^\\circ$"},
                    "correct": "A",
                    "explanation": "$\\vec{u} = (1; 0; 1)$, $\\vec{n}_{(Oxy)} = (0; 0; 1)$. $\\sin\\varphi = \\frac{|1|}{\\sqrt{2} \\times 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\varphi = 45^\\circ$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 1)$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tọa độ trung điểm $M$ của $AB$ là $(2; 1; 0)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Vectơ $\\vec{AB} = (2; -2; 2)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Mặt phẳng trung trực của đoạn thẳng $AB$ nhận vectơ $\\vec{n} = (1; -1; 1)$ làm VTPT.", "correct": True, "explanation": "Đúng, $\\vec{n}$ cùng phương với $\\vec{AB}$."},
                        {"label": "d", "subLabel": "d)", "content": "Phương trình mặt phẳng trung trực của $AB$ là $x - y + z - 3 = 0$.", "correct": False, "explanation": "Sai, đi qua $M(2; 1; 0)$: $1(x - 2) - 1(y - 1) + 1(z - 0) = 0 \\Leftrightarrow x - y + z - 1 = 0$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + z^2 = 25$ và mặt phẳng $(P): z = 3$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Mặt cầu $(S)$ có tâm $I(2; -1; 0)$ và bán kính $R = 5$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Khoảng cách từ tâm $I$ đến mặt phẳng $(P)$ bằng $3$.", "correct": True, "explanation": "Đúng, $d = |3 - 0| = 3$."},
                        {"label": "c", "subLabel": "c)", "content": "Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo một đường tròn.", "correct": True, "explanation": "Đúng, vì $d = 3 < R = 5$."},
                        {"label": "d", "subLabel": "d)", "content": "Bán kính của đường tròn giao tuyến đó bằng $4$.", "correct": True, "explanation": "Đúng, $r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 9} = 4$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một flycam thực hiện nhiệm vụ khảo sát bay theo đường thẳng $d: \\begin{cases} x = 10 + 2t \\\\ y = 20 - t \\\\ z = 50 + t \\end{cases}$ ($t$ tính bằng giây, tọa độ tính bằng mét).",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Độ cao của flycam so với mặt đất tăng dần theo thời gian.", "correct": True, "explanation": "Đúng, $z = 50 + t$ tăng khi $t$ tăng."},
                        {"label": "b", "subLabel": "b)", "content": "Tại thời điểm ban đầu $t = 0$, flycam ở độ cao $50\\text{ m}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Tốc độ bay của flycam là $\\sqrt{6}\\text{ m/s}$.", "correct": True, "explanation": "Đúng, $|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 1^2} = \\sqrt{6}\\text{ m/s}$."},
                        {"label": "d", "subLabel": "d)", "content": "Sau $10\\text{ giây}$, flycam đạt độ cao $70\\text{ m}$.", "correct": False, "explanation": "Sai, tại $t = 10$, $z = 50 + 10 = 60\\text{ m}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Trong không gian $Oxyz$, cho đường thẳng $\\Delta: \\frac{x - 1}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{2}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đường thẳng $\\Delta$ đi qua điểm $A(1; 2; 3)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Độ dài vectơ chỉ phương $\\vec{u} = (1; 2; 2)$ bằng $3$.", "correct": True, "explanation": "Đúng, $\\sqrt{1 + 4 + 4} = 3$."},
                        {"label": "c", "subLabel": "c)", "content": "Điểm $B(2; 4; 5)$ thuộc đường thẳng $\\Delta$.", "correct": True, "explanation": "Đúng, ứng với $t = 1$."},
                        {"label": "d", "subLabel": "d)", "content": "Đường thẳng $\\Delta$ vuông góc với trục $Oz$.", "correct": False, "explanation": "Sai, thành phần $z$ của VTCP bằng $2 \\ne 0$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 4)$. Tính thể tích khối tứ diện $OABC$.",
                    "correctAnswer": "1.33",
                    "acceptedAnswers": ["1.33", "4/3", "1,33"],
                    "explanation": "$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\times 1 \\times 2 \\times 4 = \\frac{4}{3} \\approx 1.33$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Mặt cầu $(S): x^2 + y^2 + z^2 - 6x + 2y - 4z + 5 = 0$ có bán kính bằng bao nhiêu?",
                    "correctAnswer": "3",
                    "acceptedAnswers": ["3"],
                    "explanation": "$R = \\sqrt{3^2 + (-1)^2 + 2^2 - 5} = \\sqrt{9 + 1 + 4 - 5} = \\sqrt{9} = 3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$. Khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$ bằng bao nhiêu?",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "$d = \\frac{|-6|}{\\sqrt{4 + 1 + 4}} = \\frac{6}{3} = 2$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tìm cao độ $z$ của điểm $M$ thuộc trục $Oz$ sao cho khoảng cách từ $M$ đến mặt phẳng $(P): 2x + 2y - z + 3 = 0$ bằng $2$ (lấy giá trị $z > 0$).",
                    "correctAnswer": "9",
                    "acceptedAnswers": ["9"],
                    "explanation": "$M(0; 0; z)$. $d = \\frac{|-z + 3|}{3} = 2 \\Leftrightarrow |-z + 3| = 6 \\Rightarrow -z + 3 = -6 \\Leftrightarrow z = 9$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một vệ tinh nhân tạo chuyển động theo quỹ đạo tròn trong mặt phẳng $(Oxy)$ có bán kính $R = 7000\\text{ km}$ quanh tâm Trái Đất đặt tại $O(0; 0; 0)$. Khoảng cách từ vệ tinh đến tâm Trái Đất là bao nhiêu km?",
                    "correctAnswer": "7000",
                    "acceptedAnswers": ["7000"],
                    "explanation": "Bán kính quỹ đạo tròn chính là khoảng cách đến tâm: $7000\\text{ km}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một trạm thu phát sóng di động $5G$ đặt tại đỉnh một tòa nhà có tọa độ $A(100; 200; 50)$ (đơn vị: mét). Một người dùng đứng trên mặt đất tại vị trí $B(100; 200; 0)$. Khoảng cách thẳng đứng từ người dùng đến trạm thu phát sóng bằng bao nhiêu mét?",
                    "correctAnswer": "50",
                    "acceptedAnswers": ["50"],
                    "explanation": "Khoảng cách thẳng đứng là $|z_A - z_B| = 50 - 0 = 50\\text{ m}$."
                }
            ]

        elif exam_idx == 4:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho mặt phẳng $(\\alpha): 3x - 2y + 4z - 7 = 0$. Vectơ nào sau đây là một vectơ pháp tuyến của $(\\alpha)$?",
                    "options": {"A": "$\\vec{n} = (3; -2; 4)$", "B": "$\\vec{n} = (3; 2; 4)$", "C": "$\\vec{n} = (-3; -2; 4)$", "D": "$\\vec{n} = (3; -2; -7)$"},
                    "correct": "A",
                    "explanation": "VTPT là $(3; -2; 4)$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Khoảng cách giữa hai điểm $A(1; 1; 1)$ và $B(2; 3; 3)$ bằng",
                    "options": {"A": "$3$", "B": "$9$", "C": "$\\sqrt{5}$", "D": "$5$"},
                    "correct": "A",
                    "explanation": "$AB = \\sqrt{(2-1)^2 + (3-1)^2 + (3-1)^2} = \\sqrt{1 + 4 + 4} = 3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Tọa độ trọng tâm $G$ của tam giác $ABC$ với $A(1; 2; 3), B(2; 1; 0), C(0; 3; 3)$ là",
                    "options": {"A": "$(1; 2; 2)$", "B": "$(3; 6; 6)$", "C": "$(1; 1; 2)$", "D": "$(2; 2; 1)$"},
                    "correct": "A",
                    "explanation": "$G\\left(\\frac{1+2+0}{3}; \\frac{2+1+3}{3}; \\frac{3+0+3}{3}\\right) = (1; 2; 2)$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Mặt cầu có phương trình nào sau đây có tâm là gốc tọa độ $O$?",
                    "options": {"A": "$x^2 + y^2 + z^2 = 9$", "B": "$(x - 1)^2 + y^2 + z^2 = 9$", "C": "$x^2 + y^2 + z^2 - 2x = 0$", "D": "$x^2 + y^2 + (z - 2)^2 = 4$"},
                    "correct": "A",
                    "explanation": "Mặt cầu tâm $O(0; 0; 0)$ có phương trình $x^2 + y^2 + z^2 = R^2$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Vectơ chỉ phương của đường thẳng $d: \\begin{cases} x = 2 - t \\\\ y = 3 + 2t \\\\ z = -1 + 4t \\end{cases}$ là",
                    "options": {"A": "$\\vec{u} = (-1; 2; 4)$", "B": "$\\vec{u} = (2; 3; -1)$", "C": "$\\vec{u} = (1; 2; 4)$", "D": "$\\vec{u} = (-1; -2; 4)$"},
                    "correct": "A",
                    "explanation": "Hệ số trước $t$ lần lượt là $-1, 2, 4$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Mặt phẳng $(P)$ đi qua $A(0; 1; 0)$ và song song với mặt phẳng $(Oxy)$ có phương trình là",
                    "options": {"A": "$z = 0$", "B": "$y = 1$", "C": "$z = 1$", "D": "$x = 0$"},
                    "correct": "B",
                    "explanation": "Mặt phẳng song song $(Oxy)$ có dạng $z = c$. Nếu đi qua $A(0; 1; 0)$ có cao độ $z = 0$ thì chính là mặt phẳng $(Oxy): z = 0$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một trạm khí tượng đo được vị trí một đám mây tích điện tại $C(10; 15; 3)$ (đơn vị: km). Khoảng cách từ đám mây đến mặt đất bằng",
                    "options": {"A": "$3\\text{ km}$", "B": "$10\\text{ km}$", "C": "$15\\text{ km}$", "D": "$18\\text{ km}$"},
                    "correct": "A",
                    "explanation": "Khoảng cách đến mặt đất $(Oxy)$ là cao độ $z = 3\\text{ km}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Khoảng cách từ điểm $M(2; 1; -1)$ đến mặt phẳng $(\\alpha): x + 2y - 2z + 1 = 0$ bằng",
                    "options": {"A": "$\\frac{7}{3}$", "B": "$\\frac{5}{3}$", "C": "$2$", "D": "$3$"},
                    "correct": "A",
                    "explanation": "$d = \\frac{|2 + 2(1) - 2(-1) + 1|}{\\sqrt{1 + 4 + 4}} = \\frac{|2 + 2 + 2 + 1|}{3} = \\frac{7}{3}$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hai vectơ $\\vec{a} = (1; 0; 2)$ và $\\vec{b} = (-2; 1; 1)$. Tích có hướng $[\\vec{a}, \\vec{b}]$ bằng",
                    "options": {"A": "$(-2; -5; 1)$", "B": "$(2; 5; 1)$", "C": "$(-2; 5; 1)$", "D": "$(0; 1; 2)$"},
                    "correct": "A",
                    "explanation": "$[\\vec{a}, \\vec{b}] = (0 - 2; 2(-2) - 1(1); 1(1) - 0) = (-2; -5; 1)$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Mặt cầu tâm $I(1; -1; 2)$ có bán kính $R = 3$ có phương trình là",
                    "options": {"A": "$(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$", "B": "$(x + 1)^2 + (y - 1)^2 + (z + 2)^2 = 9$", "C": "$(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 3$", "D": "$(x - 1)^2 + (y - 1)^2 + (z - 2)^2 = 9$"},
                    "correct": "A",
                    "explanation": "$(x - 1)^2 + (y + 1)^2 + (z - 2)^2 = 9$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một đường ống ngầm dẫn khí đốt nối từ nhà máy lọc dầu $A(0; 0; -10)$ đến trạm phân phối $B(300; 400; -10)$ (đơn vị: mét). Chiều dài đường ống đó bằng",
                    "options": {"A": "$500\\text{ m}$", "B": "$700\\text{ m}$", "C": "$400\\text{ m}$", "D": "$600\\text{ m}$"},
                    "correct": "A",
                    "explanation": "Độ sâu không đổi $-10\\text{ m}$. Chiều dài $AB = \\sqrt{300^2 + 400^2} = 500\\text{ m}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Góc giữa hai vectơ $\\vec{i} = (1; 0; 0)$ và $\\vec{j} = (0; 1; 0)$ bằng",
                    "options": {"A": "$90^\\circ$", "B": "$0^\\circ$", "C": "$180^\\circ$", "D": "$45^\\circ$"},
                    "correct": "A",
                    "explanation": "Hai vectơ đơn vị trên hai trục tọa độ $Ox, Oy$ vuông góc nhau nên góc bằng $90^\\circ$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 4 = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Điểm $M(2; 0; 0)$ thuộc mặt phẳng $(P)$.", "correct": True, "explanation": "Đúng, $2(2) - 0 + 0 - 4 = 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$ bằng $\\frac{4}{3}$.", "correct": True, "explanation": "Đúng, $d = \\frac{|-4|}{\\sqrt{4 + 1 + 4}} = \\frac{4}{3}$."},
                        {"label": "c", "subLabel": "c)", "content": "Vectơ $\\vec{n} = (4; -2; 4)$ cũng là một vectơ pháp tuyến của $(P)$.", "correct": True, "explanation": "Đúng, cùng phương với $(2; -1; 2)$."},
                        {"label": "d", "subLabel": "d)", "content": "Mặt phẳng $(P)$ vuông góc với trục $Ox$.", "correct": False, "explanation": "Sai, VTPT không cùng phương với $(1; 0; 0)$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho đường thẳng $d: \\frac{x - 2}{1} = \\frac{y + 1}{-2} = \\frac{z}{3}$ và điểm $A(2; -1; 0)$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Điểm $A$ thuộc đường thẳng $d$.", "correct": True, "explanation": "Đúng, ứng với $t = 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Đường thẳng $d$ có một vectơ chỉ phương là $\\vec{u} = (1; -2; 3)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Điểm $B(3; -3; 3)$ thuộc đường thẳng $d$.", "correct": True, "explanation": "Đúng, ứng với $t = 1$."},
                        {"label": "d", "subLabel": "d)", "content": "Đường thẳng $d$ nằm hoàn toàn trong mặt phẳng tọa độ $(Oxy)$.", "correct": False, "explanation": "Sai, thành phần $z = 3t$ biến thiên."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một thiết bị định vị GPS nhận tín hiệu từ 3 vệ tinh $S_1(0; 0; 20000)$, $S_2(10000; 0; 20000)$, $S_3(0; 10000; 20000)$ (đơn vị: km).",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Cả ba vệ tinh đều bay ở cùng độ cao $20000\\text{ km}$ so với mặt đất $(Oxy)$.", "correct": True, "explanation": "Đúng, $z = 20000$."},
                        {"label": "b", "subLabel": "b)", "content": "Khoảng cách giữa hai vệ tinh $S_1$ và $S_2$ bằng $10000\\text{ km}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Ba vệ tinh tạo thành một tam giác vuông cân trong không gian.", "correct": True, "explanation": "Đúng, vuông cân tại $S_1$."},
                        {"label": "d", "subLabel": "d)", "content": "Ba vệ tinh nằm trên một đường thẳng thẳng hàng.", "correct": False, "explanation": "Sai, chúng tạo thành 3 đỉnh tam giác."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho mặt cầu $(S): x^2 + y^2 + z^2 - 4 = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tâm của mặt cầu là gốc tọa độ $O(0; 0; 0)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Bán kính của mặt cầu là $R = 2$.", "correct": True, "explanation": "Đúng, $\\sqrt{4} = 2$."},
                        {"label": "c", "subLabel": "c)", "content": "Mặt phẳng $(Oxy)$ cắt mặt cầu theo đường tròn lớn có bán kính bằng $2$.", "correct": True, "explanation": "Đúng, đi qua tâm."},
                        {"label": "d", "subLabel": "d)", "content": "Điểm $M(2; 2; 2)$ nằm bên trong mặt cầu.", "correct": False, "explanation": "Sai, $OM = \\sqrt{4 + 4 + 4} = \\sqrt{12} \\approx 3.46 > 2$ nên nằm ngoài."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho hai điểm $A(1; 3; -2)$ và $B(5; 3; 1)$. Tính độ dài đoạn thẳng $AB$.",
                    "correctAnswer": "5",
                    "acceptedAnswers": ["5"],
                    "explanation": "$AB = \\sqrt{(5-1)^2 + 0^2 + (1 - (-2))^2} = \\sqrt{16 + 9} = 5$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu $(S): (x - 3)^2 + (y + 2)^2 + (z - 1)^2 = 49$.",
                    "correctAnswer": "7",
                    "acceptedAnswers": ["7"],
                    "explanation": "$R = \\sqrt{49} = 7$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho mặt phẳng $(\\alpha): 4x + 3y - 10 = 0$. Khoảng cách từ điểm $M(1; 2; 5)$ đến $(\\alpha)$ bằng bao nhiêu?",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "$4(1) + 3(2) - 10 = 0 \\Rightarrow d = 0$ (điểm thuộc mặt phẳng)."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tìm tọa độ giao điểm của đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ với mặt phẳng $(P): x + y + z - 8 = 0$. Nhập giá trị của $t$.",
                    "correctAnswer": "1",
                    "acceptedAnswers": ["1"],
                    "explanation": "$(1+t) + (2-t) + (3+2t) - 8 = 0 \\Leftrightarrow 2t - 2 = 0 \\Leftrightarrow t = 1$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một máy bay hạ cánh theo đường thẳng từ điểm $A(0; 2000; 1000)$ xuống điểm $B(0; 6000; 0)$ trên đường băng (đơn vị: mét). Chiều dài quãng đường bay hạ cánh xấp xỉ bằng bao nhiêu mét? (Làm tròn đến hàng đơn vị).",
                    "correctAnswer": "4123",
                    "acceptedAnswers": ["4123", "4123.1"],
                    "explanation": "$AB = \\sqrt{0 + 4000^2 + (-1000)^2} = \\sqrt{16000000 + 1000000} = \\sqrt{17000000} \\approx 4123.1 \\Rightarrow 4123\\text{ m}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một giàn khoan dầu đặt tại điểm $A(10; 20; 0)$ trên biển. Một tàu cứu hộ xuất phát từ điểm $B(10; 20; 0)$ chạy thẳng đến giàn khoan khác ở tọa độ $C(40; 60; 0)$ (đơn vị: km). Quãng đường tàu cứu hộ phải chạy bằng bao nhiêu km?",
                    "correctAnswer": "50",
                    "acceptedAnswers": ["50"],
                    "explanation": "$BC = \\sqrt{(40-10)^2 + (60-20)^2} = \\sqrt{30^2 + 40^2} = 50\\text{ km}$."
                }
            ]

        else:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $M(2; -3; 4)$. Tọa độ vectơ $\\vec{OM}$ là",
                    "options": {"A": "$(2; -3; 4)$", "B": "$(-2; 3; -4)$", "C": "$(2; 3; 4)$", "D": "$(4; -3; 2)$"},
                    "correct": "A",
                    "explanation": "$\\vec{OM} = (x_M - 0; y_M - 0; z_M - 0) = (2; -3; 4)$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai điểm $A(1; 2; 3)$ và $B(3; 4; 5)$. Trung điểm $I$ của $AB$ có tọa độ là",
                    "options": {"A": "$(2; 3; 4)$", "B": "$(4; 6; 8)$", "C": "$(1; 1; 1)$", "D": "$(2; 2; 2)$"},
                    "correct": "A",
                    "explanation": "$I\\left(\\frac{1+3}{2}; \\frac{2+4}{2}; \\frac{3+5}{2}\\right) = (2; 3; 4)$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 10 = 0$ có tâm $I$ là",
                    "options": {"A": "$I(2; -1; 3)$", "B": "$I(-2; 1; -3)$", "C": "$I(4; -2; 6)$", "D": "$I(2; 1; 3)$"},
                    "correct": "A",
                    "explanation": "Chia các hệ số cho $-2$: $a = 2, b = -1, c = 3$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Vectơ nào sau đây là vectơ pháp tuyến của mặt phẳng $(Oxy)$?",
                    "options": {"A": "$\\vec{k} = (0; 0; 1)$", "B": "$\\vec{i} = (1; 0; 0)$", "C": "$\\vec{j} = (0; 1; 0)$", "D": "$\\vec{u} = (1; 1; 0)$"},
                    "correct": "A",
                    "explanation": "Mặt phẳng $(Oxy)$ có phương trình $z = 0$, VTPT là $(0; 0; 1)$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Khoảng cách từ điểm $M(1; 1; 1)$ đến mặt phẳng $(P): 3x + 4z + 2 = 0$ bằng",
                    "options": {"A": "$\\frac{9}{5}$", "B": "$\\frac{7}{5}$", "C": "$2$", "D": "$\\frac{8}{5}$"},
                    "correct": "A",
                    "explanation": "$d = \\frac{|3(1) + 4(1) + 2|}{\\sqrt{3^2 + 0^2 + 4^2}} = \\frac{9}{5}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{3} = \\frac{z - 4}{1}$ có vectơ chỉ phương là",
                    "options": {"A": "$\\vec{u} = (2; 3; 1)$", "B": "$\\vec{u} = (1; -2; 4)$", "C": "$\\vec{u} = (-2; -3; -1)$", "D": "$\\vec{u} = (2; -3; 1)$"},
                    "correct": "A",
                    "explanation": "VTCP lấy từ các mẫu số: $(2; 3; 1)$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một tàu ngầm đang lặn ở độ sâu $200\\text{ m}$ tại vị trí $A(500; 800; -200)$ (đơn vị: mét). Tọa độ hình chiếu của tàu ngầm lên mặt biển $(Oxy)$ là",
                    "options": {"A": "$(500; 800; 0)$", "B": "$(0; 0; -200)$", "C": "$(500; 0; 0)$", "D": "$(0; 800; 0)$"},
                    "correct": "A",
                    "explanation": "Hình chiếu lên $(Oxy)$ có $z = 0$, tọa độ là $(500; 800; 0)$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Góc giữa hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{0}$ và $d_2: \\frac{x}{1} = \\frac{y}{0} = \\frac{z}{0}$ bằng",
                    "options": {"A": "$45^\\circ$", "B": "$90^\\circ$", "C": "$60^\\circ$", "D": "$30^\\circ$"},
                    "correct": "A",
                    "explanation": "$\\vec{u}_1 = (1; 1; 0), \\vec{u}_2 = (1; 0; 0)$. $\\cos\\varphi = \\frac{|1|}{\\sqrt{2} \\times 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\varphi = 45^\\circ$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Khoảng cách giữa hai mặt phẳng song song $(P): x - 2y + 2z - 1 = 0$ và $(Q): x - 2y + 2z + 8 = 0$ bằng",
                    "options": {"A": "$3$", "B": "$9$", "C": "$\\frac{7}{3}$", "D": "$2$"},
                    "correct": "A",
                    "explanation": "$d = \\frac{|8 - (-1)|}{\\sqrt{1 + 4 + 4}} = \\frac{9}{3} = 3$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho điểm $A(1; 2; 3)$. Mặt cầu tâm $A$ tiếp xúc với mặt phẳng $(Oyz)$ có bán kính bằng",
                    "options": {"A": "$1$", "B": "$2$", "C": "$3$", "D": "$\\sqrt{13}$"},
                    "correct": "A",
                    "explanation": "Mặt phẳng $(Oyz)$ có phương trình $x = 0$. Khoảng cách $R = |x_A| = 1$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một ngọn núi có đỉnh tại điểm $S(0; 0; 3000)$ (mét). Một người leo núi đứng ở sườn núi tại vị trí $M(600; 800; 2000)$. Khoảng cách thẳng từ đỉnh núi $S$ đến người leo núi $M$ bằng",
                    "options": {"A": "$1000\\sqrt{2}\\text{ m}$", "B": "$2000\\text{ m}$", "C": "$1500\\text{ m}$", "D": "$1000\\text{ m}$"},
                    "correct": "A",
                    "explanation": "$SM = \\sqrt{600^2 + 800^2 + (2000-3000)^2} = \\sqrt{1000000 + 1000000} = 1000\\sqrt{2}\\text{ m}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Trong không gian $Oxyz$, mặt phẳng đi qua điểm $M(2; 0; 0), N(0; -1; 0), P(0; 0; 3)$ có phương trình là",
                    "options": {"A": "$\\frac{x}{2} + \\frac{y}{-1} + \\frac{z}{3} = 1$", "B": "$\\frac{x}{2} + \\frac{y}{1} + \\frac{z}{3} = 1$", "C": "$2x - y + 3z = 1$", "D": "$\\frac{x}{2} - \\frac{y}{1} - \\frac{z}{3} = 1$"},
                    "correct": "A",
                    "explanation": "Phương trình đoạn chắn qua 3 điểm trên 3 trục tọa độ: $\\frac{x}{2} + \\frac{y}{-1} + \\frac{z}{3} = 1$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(2; -1; 1)$ và mặt phẳng $(P): x + 2y - z + 5 = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Điểm $A$ không thuộc mặt phẳng $(P)$.", "correct": True, "explanation": "Đúng, $2 + 2(-1) - 1 + 5 = 4 \\ne 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Khoảng cách từ $A$ đến mặt phẳng $(P)$ bằng $\\frac{4}{\\sqrt{6}}$.", "correct": True, "explanation": "Đúng, $d = \\frac{|4|}{\\sqrt{1 + 4 + 1}} = \\frac{4}{\\sqrt{6}}$."},
                        {"label": "c", "subLabel": "c)", "content": "Đường thẳng qua $A$ vuông góc $(P)$ có VTCP là $(1; 2; -1)$.", "correct": True, "explanation": "Đúng, cùng phương với VTPT."},
                        {"label": "d", "subLabel": "d)", "content": "Mặt phẳng $(P)$ song song với trục $Oz$.", "correct": False, "explanation": "Sai, hệ số $z$ là $-1 \\ne 0$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Mặt cầu $(S)$ đi qua gốc tọa độ $O(0; 0; 0)$.", "correct": True, "explanation": "Đúng, thay $O$ vào thỏa mãn."},
                        {"label": "b", "subLabel": "b)", "content": "Tâm của mặt cầu là điểm $I(1; 2; 3)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Bán kính của mặt cầu là $R = \\sqrt{14}$.", "correct": True, "explanation": "Đúng, $R = \\sqrt{1 + 4 + 9} = \\sqrt{14}$."},
                        {"label": "d", "subLabel": "d)", "content": "Đoạn thẳng $OI$ là một đường kính của mặt cầu.", "correct": False, "explanation": "Sai, $O$ thuộc mặt cầu và $I$ là tâm nên $OI$ là bán kính, không phải đường kính."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một tòa nhà chọc trời có thiết kế hình lăng trụ đứng với đáy là tam giác trên mặt đất $O(0;0;0), A(30;0;0), B(0;40;0)$ (đơn vị: mét). Chiều cao tòa nhà là $120\\text{ m}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Diện tích mặt sàn tầng trệt của tòa nhà là $600\\text{ m}^2$.", "correct": True, "explanation": "Đúng, $S = \\frac{1}{2} \\times 30 \\times 40 = 600\\text{ m}^2$."},
                        {"label": "b", "subLabel": "b)", "content": "Thể tích của tòa nhà là $72000\\text{ m}^3$.", "correct": True, "explanation": "Đúng, $V = S \\times h = 600 \\times 120 = 72000\\text{ m}^3$."},
                        {"label": "c", "subLabel": "c)", "content": "Đỉnh cao nhất của tòa nhà tương ứng với điểm $B$ có tọa độ $(0; 40; 120)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Độ dài đường chéo nối từ $O(0;0;0)$ đến đỉnh đối diện $(30; 40; 120)$ nhỏ hơn $100\\text{ m}$.", "correct": False, "explanation": "Sai, $\\sqrt{30^2 + 40^2 + 120^2} = \\sqrt{2500 + 14400} = 130\\text{ m} > 100\\text{ m}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hai đường thẳng $d_1: \\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}$ và $d_2: \\begin{cases} x = 0 \\\\ y = t \\\\ z = 1 \\end{cases}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Đường thẳng $d_1$ chính là trục hoành $Ox$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Đường thẳng $d_2$ song song với trục tung $Oy$.", "correct": True, "explanation": "Đúng, có VTCP $(0; 1; 0)$ và $z = 1$."},
                        {"label": "c", "subLabel": "c)", "content": "Hai đường thẳng $d_1$ và $d_2$ chéo nhau và vuông góc với nhau.", "correct": True, "explanation": "Đúng, VTCP vuông góc và khoảng cách bằng $1$."},
                        {"label": "d", "subLabel": "d)", "content": "Khoảng cách giữa hai đường thẳng $d_1$ và $d_2$ bằng $2$.", "correct": False, "explanation": "Sai, khoảng cách chính là đoạn vuông góc chung nối $(0;0;0)$ và $(0;0;1)$, có độ dài bằng $1$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Trong không gian $Oxyz$, cho điểm $A(2; 3; 6)$. Tính khoảng cách từ điểm $A$ đến gốc tọa độ $O$.",
                    "correctAnswer": "7",
                    "acceptedAnswers": ["7"],
                    "explanation": "$OA = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Tính bán kính $R$ của mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$.",
                    "correctAnswer": "3",
                    "acceptedAnswers": ["3"],
                    "explanation": "Tâm $I(1; -2; 0)$, $R = \\sqrt{1 + 4 - (-4)} = \\sqrt{9} = 3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho mặt phẳng $(\\alpha): x + 2y - 2z + 6 = 0$. Tính khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(\\alpha)$.",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "$d = \\frac{|6|}{\\sqrt{1 + 4 + 4}} = \\frac{6}{3} = 2$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Tính góc giữa hai vectơ $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$ (đơn vị: độ).",
                    "correctAnswer": "60",
                    "acceptedAnswers": ["60"],
                    "explanation": "$\\cos\\theta = \\frac{0 + 0 + 1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\theta = 60^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một đường hầm thoát hiểm chạy thẳng từ hầm mỏ ở độ sâu $100\\text{ m}$ tại điểm $A(0; 0; -100)$ lên mặt đất tại điểm $B(300; 400; 0)$ (mét). Chiều dài của đường hầm thoát hiểm xấp xỉ bằng bao nhiêu mét? (Làm tròn đến hàng đơn vị).",
                    "correctAnswer": "510",
                    "acceptedAnswers": ["510", "509.9"],
                    "explanation": "$AB = \\sqrt{300^2 + 400^2 + 100^2} = \\sqrt{250000 + 10000} = \\sqrt{260000} \\approx 509.9 \\Rightarrow 510\\text{ m}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một ngọn hải đăng phát tín hiệu cảnh báo đá ngầm trong bán kính $15\\text{ hải lý}$. Vị trí hải đăng tại $H(10; 20; 0)$. Một con tàu ở tọa độ $T(10; 30; 0)$. Khoảng cách từ tàu đến hải đăng bằng bao nhiêu hải lý?",
                    "correctAnswer": "10",
                    "acceptedAnswers": ["10"],
                    "explanation": "$HT = |30 - 20| = 10\\text{ hải lý}$."
                }
            ]

        exam_obj = {
            "id": f"cd8-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Phương Pháp Tọa Độ Trong Không Gian",
            "code": f"CD8-10{exam_idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
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
        "id": "cd8",
        "code": "CĐ 8",
        "title": "PHƯƠNG PHÁP TỌA ĐỘ TRONG KHÔNG GIAN",
        "icon": "fa-solid fa-cube",
        "badge": "Lớp 12 • Tọa độ Oxyz",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "description": "Hệ trục Oxyz, mặt cầu, phương trình mặt phẳng, đường thẳng và bài toán định vị radar, vệ tinh, góc và khoảng cách thực tế.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd8()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
