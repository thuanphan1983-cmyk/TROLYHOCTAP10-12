# -*- coding: utf-8 -*-
"""
Chuyên đề 7: VECTƠ TRONG KHÔNG GIAN
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc Đề thi TN THPT 2025-2026.
Tập trung vào quy tắc hình hộp, tích vô hướng, góc giữa hai vectơ, cân bằng lực và bài toán thực tế vật lý.
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd7():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Các Quy Tắc Vectơ Cơ Bản -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-arrows-to-dot text-blue-600"></i>
      1. Khái Niệm & Các Quy Tắc Phép Toán Vectơ
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Quy tắc 3 điểm & Hình bình hành:</p>
        <p>&bull; $\\vec{AB} + \\vec{BC} = \\vec{AC}$; $\\vec{AB} - \\vec{AC} = \\vec{CB}$.</p>
        <p>&bull; Với hình bình hành $ABCD$: $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</p>
        <p>&bull; Điểm $M$ là trung điểm $AB$: $\\vec{OA} + \\vec{OB} = 2\\vec{OM}$.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Quy tắc hình hộp & Trọng tâm tứ diện:</p>
        <p>&bull; Hình hộp $ABCD.A'B'C'D'$: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$.</p>
        <p>&bull; Trọng tâm $G$ của tứ diện $ABCD$ thỏa mãn:</p>
        <p>$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$, hay $\\vec{OG} = \\frac{1}{4}(\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD})$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Tích Vô Hướng & Góc Giữa Hai Vectơ -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-compass text-emerald-600"></i>
      2. Tích Vô Hướng & Góc Giữa Hai Vectơ
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-emerald-200">
        <p><strong>Định nghĩa tích vô hướng:</strong> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.</p>
        <p><strong>Điều kiện vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.</p>
        <p><strong>Góc giữa hai vectơ:</strong> $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|}$ với $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 3: Ứng Dụng Vật Lý Chuyển Động & Cân Bằng Lực -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-weight-hanging text-purple-600"></i>
      3. Bài Toán Cân Bằng Lực & Tổng Hợp Vectơ Thực Tế
    </h4>
    <div class="bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt] space-y-1.5">
      <p>&bull; <strong>Cân bằng tĩnh học:</strong> Khi một vật chịu tác dụng của các lực $\\vec{F}_1, \\vec{F}_2, \\dots, \\vec{F}_n$ và đứng yên cân bằng thì:</p>
      <p class="font-semibold text-purple-900">$\\vec{F}_1 + \\vec{F}_2 + \\dots + \\vec{F}_n = \\vec{0}$.</p>
      <p>&bull; <strong>Treo vật bằng 3 dây cân bằng:</strong> Tổng hợp lực căng của 3 sợi dây cân bằng với trọng lực $\\vec{P}$: $\\vec{T}_1 + \\vec{T}_2 + \\vec{T}_3 + \\vec{P} = \\vec{0}$.</p>
      <p>&bull; <strong>Công cơ học của lực:</strong> $A = \\vec{F} \\cdot \\vec{d} = |\\vec{F}| \\cdot |\\vec{d}| \\cdot \\cos\\alpha$ (Joule).</p>
      <p>&bull; <strong>Vận tốc tổng hợp:</strong> $\\vec{v}_{thực} = \\vec{v}_{phương\\ tiện} + \\vec{v}_{gió/dòng\\ nước}$.</p>
    </div>
  </div>
</div>
"""

    exams = []
    for exam_idx in range(1, 6):
        seed = 7000 + exam_idx * 31

        if exam_idx == 1:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hình hộp $ABCD.A'B'C'D'$. Vectơ tổng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng",
                    "options": {"A": "$\\vec{AC'}$", "B": "$\\vec{CA'}$", "C": "$\\vec{BD'}$", "D": "$\\vec{DB'}$"},
                    "correct": "A",
                    "explanation": "Theo quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Khẳng định nào sau đây đúng?",
                    "options": {"A": "$\\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$", "B": "$\\vec{MN} = \\vec{AC} + \\vec{BD}$", "C": "$\\vec{MN} = \\frac{1}{2}(\\vec{AD} - \\vec{BC})$", "D": "$\\vec{MN} = 2(\\vec{AC} + \\vec{BD})$"},
                    "correct": "A",
                    "explanation": "Ta có $\\vec{MN} = \\vec{MA} + \\vec{AC} + \\vec{CN}$ và $\\vec{MN} = \\vec{MB} + \\vec{BD} + \\vec{DN}$. Cộng lại ta được $2\\vec{MN} = \\vec{AC} + \\vec{BD} \\Rightarrow \\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ đều khác $\\vec{0}$ thỏa mãn $\\vec{a} \\cdot \\vec{b} = -|\\vec{a}| |\\vec{b}|$. Khi đó góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ bằng",
                    "options": {"A": "$0^\\circ$", "B": "$90^\\circ$", "C": "$180^\\circ$", "D": "$45^\\circ$"},
                    "correct": "C",
                    "explanation": "$\\cos(\\vec{a}, \\vec{b}) = -1 \\Leftrightarrow (\\vec{a}, \\vec{b}) = 180^\\circ$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{B'C'}$ bằng",
                    "options": {"A": "$0^\\circ$", "B": "$90^\\circ$", "C": "$45^\\circ$", "D": "$60^\\circ$"},
                    "correct": "B",
                    "explanation": "Vì $\\vec{B'C'} = \\vec{BC}$ và $ABCD$ là hình vuông nên $AB \\perp BC$, do đó góc bằng $90^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một chiếc đèn chùm có trọng lượng $P = 100\\text{ N}$ được treo vào trần nhà bằng 3 sợi dây cáp không giãn có chiều dài bằng nhau và hợp với phương thẳng đứng một góc $30^\\circ$. Lực căng $T$ của mỗi sợi dây cáp bằng bao nhiêu?",
                    "options": {"A": "$\\frac{100}{3\\sqrt{3}}\\text{ N}$", "B": "$\\frac{200}{3\\sqrt{3}}\\text{ N}$", "C": "$\\frac{100\\sqrt{3}}{3}\\text{ N}$", "D": "$50\\text{ N}$"},
                    "correct": "B",
                    "explanation": "Tổng hình chiếu các lực căng lên phương thẳng đứng cân bằng với trọng lượng: $3T \\cos 30^\\circ = P \\Leftrightarrow 3T \\frac{\\sqrt{3}}{2} = 100 \\Rightarrow T = \\frac{200}{3\\sqrt{3}}\\text{ N}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng",
                    "options": {"A": "$\\frac{a^2}{2}$", "B": "$-\\frac{a^2}{2}$", "C": "$\\frac{a^2\\sqrt{3}}{2}$", "D": "$a^2$"},
                    "correct": "A",
                    "explanation": "Tam giác $ABC$ đều cạnh $a$ nên góc $(\\vec{AB}, \\vec{AC}) = 60^\\circ$. Do đó $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một lực $\\vec{F}$ có độ lớn $50\\text{ N}$ tác dụng làm dịch chuyển một vật một quãng đường $10\\text{ m}$ theo hướng hợp với hướng tác dụng của lực một góc $60^\\circ$. Công cơ học thực hiện bởi lực $\\vec{F}$ bằng",
                    "options": {"A": "$500\\text{ J}$", "B": "$250\\text{ J}$", "C": "$250\\sqrt{3}\\text{ J}$", "D": "$100\\text{ J}$"},
                    "correct": "B",
                    "explanation": "$A = |\\vec{F}| |\\vec{d}| \\cos 60^\\circ = 50 \\times 10 \\times 0.5 = 250\\text{ J}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hình lăng trụ tam giác $ABC.A'B'C'$. Đặt $\\vec{a} = \\vec{AA'}, \\vec{b} = \\vec{AB}, \\vec{c} = \\vec{AC}$. Vectơ $\\vec{B'C}$ biểu diễn theo $\\vec{a}, \\vec{b}, \\vec{c}$ là",
                    "options": {"A": "$-\\vec{a} - \\vec{b} + \\vec{c}$", "B": "$\\vec{a} - \\vec{b} + \\vec{c}$", "C": "$-\\vec{a} + \\vec{b} - \\vec{c}$", "D": "$\\vec{a} + \\vec{b} + \\vec{c}$"},
                    "correct": "A",
                    "explanation": "$\\vec{B'C} = \\vec{B'B} + \\vec{BC} = -\\vec{AA'} + (\\vec{AC} - \\vec{AB}) = -\\vec{a} + \\vec{c} - \\vec{b} = -\\vec{a} - \\vec{b} + \\vec{c}$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và đáy $ABC$ là tam giác vuông tại $B$. Khẳng định nào sau đây đúng?",
                    "options": {"A": "$\\vec{SC} \\cdot \\vec{AB} = 0$", "B": "$\\vec{SB} \\cdot \\vec{AC} = 0$", "C": "$\\vec{BC} \\cdot \\vec{SB} = 0$", "D": "$\\vec{BC} \\cdot \\vec{SA} = 0$"},
                    "correct": "D",
                    "explanation": "Vì $SA \\perp (ABC)$ nên $SA \\perp BC \\Rightarrow \\vec{BC} \\cdot \\vec{SA} = 0$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Một chiếc máy bay bay theo hướng Đông với vận tốc riêng là $400\\text{ km/h}$. Gió thổi theo hướng Nam với vận tốc $30\\text{ km/h}$. Vận tốc thực tế (tốc độ so với mặt đất) của máy bay xấp xỉ bằng",
                    "options": {"A": "$430\\text{ km/h}$", "B": "$370\\text{ km/h}$", "C": "$401.1\\text{ km/h}$", "D": "$450\\text{ km/h}$"},
                    "correct": "C",
                    "explanation": "Hướng Đông vuông góc với hướng Nam nên vận tốc thực tế $v = \\sqrt{400^2 + 30^2} = \\sqrt{160900} \\approx 401.1\\text{ km/h}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Cho tứ diện $ABCD$. Điểm $G$ là trọng tâm của tứ diện $ABCD$. Mệnh đề nào sau đây là sai?",
                    "options": {"A": "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$", "B": "$\\vec{OG} = \\frac{1}{4}(\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD})$ với mọi điểm $O$", "C": "$\\vec{AG} = \\frac{3}{4}\\vec{AA'}$ với $A'$ là trọng tâm tam giác $BCD$", "D": "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$"},
                    "correct": "D",
                    "explanation": "Ta có $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0} \\Rightarrow \\vec{GA} + \\vec{GB} = -(\\vec{GC} + \\vec{GD})$, không thể bằng nhau trừ khi bằng $\\vec{0}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tích vô hướng $\\vec{AC} \\cdot \\vec{AD'}$ bằng",
                    "options": {"A": "$0$", "B": "$a^2$", "C": "$a^2\\sqrt{2}$", "D": "$2a^2$"},
                    "correct": "B",
                    "explanation": "Ta có $\\vec{AC} = \\vec{AB} + \\vec{AD}$, $\\vec{AD'} = \\vec{AD} + \\vec{AA'}$. Do các cạnh đôi một vuông góc nên $\\vec{AC} \\cdot \\vec{AD'} = (\\vec{AB} + \\vec{AD}) \\cdot (\\vec{AD} + \\vec{AA'}) = \\vec{AD}^2 = a^2$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho tứ diện $OABC$ có 3 cạnh $OA, OB, OC$ đôi một vuông góc và $OA = OB = OC = a$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tích vô hướng $\\vec{OA} \\cdot \\vec{OB} = 0$.", "correct": True, "explanation": "Đúng, vì $OA \\perp OB$."},
                        {"label": "b", "subLabel": "b)", "content": "Độ dài vectơ $\\vec{AB}$ bằng $a\\sqrt{2}$.", "correct": True, "explanation": "Đúng, $AB = \\sqrt{OA^2 + OB^2} = a\\sqrt{2}$."},
                        {"label": "c", "subLabel": "c)", "content": "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = a^2$.", "correct": True, "explanation": "Đúng, $\\vec{AB} \\cdot \\vec{AC} = (\\vec{OB} - \\vec{OA}) \\cdot (\\vec{OC} - \\vec{OA}) = \\vec{OA}^2 = a^2$."},
                        {"label": "d", "subLabel": "d)", "content": "Tam giác $ABC$ là tam giác vuông cân.", "correct": False, "explanation": "Sai, $AB = BC = CA = a\\sqrt{2}$ nên $ABC$ là tam giác đều."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vectơ $\\vec{SA}$ vuông góc với mọi vectơ nằm trong mặt phẳng đáy $(ABCD)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Góc giữa hai vectơ $\\vec{SB}$ và $\\vec{AB}$ bằng $45^\\circ$.", "correct": True, "explanation": "Đúng, tam giác $SAB$ vuông cân tại $A$ nên góc $SBA = 45^\\circ$."},
                        {"label": "c", "subLabel": "c)", "content": "Tích vô hướng $\\vec{SC} \\cdot \\vec{BD} = 0$.", "correct": True, "explanation": "Đúng, $BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC) \\Rightarrow BD \\perp SC$."},
                        {"label": "d", "subLabel": "d)", "content": "Vectơ tổng $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD} = \\vec{0}$.", "correct": False, "explanation": "Sai, các vectơ đều hướng từ trên xuống hoặc có thành phần cùng hướng."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một quả cầu đồng chất có trọng lượng $P = 40\\text{ N}$ được giữ cân bằng trên mặt phẳng nghiêng góc $30^\\circ$ không ma sát bởi một sợi dây buộc vào tâm quả cầu và song song với mặt nghiêng.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Quả cầu chịu tác dụng của 3 lực: trọng lực $\\vec{P}$, phản lực vuông góc $\\vec{N}$, và lực căng dây $\\vec{T}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Điều kiện cân bằng của quả cầu là $\\vec{P} + \\vec{N} + \\vec{T} = \\vec{0}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Độ lớn lực căng dây là $T = 20\\text{ N}$.", "correct": True, "explanation": "Đúng, chiếu lên phương mặt nghiêng: $T = P \\sin 30^\\circ = 40 \\times 0.5 = 20\\text{ N}$."},
                        {"label": "d", "subLabel": "d)", "content": "Độ lớn của phản lực $\\vec{N}$ bằng $20\\text{ N}$.", "correct": False, "explanation": "Sai, $N = P \\cos 30^\\circ = 40 \\frac{\\sqrt{3}}{2} = 20\\sqrt{3}\\text{ N} \\approx 34.64\\text{ N}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vectơ $\\vec{AC'}$ bằng tổng ba vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$.", "correct": True, "explanation": "Đúng, quy tắc hình hộp."},
                        {"label": "b", "subLabel": "b)", "content": "Đường chéo $AC'$ vuông góc với mặt phẳng $(A'BD)$.", "correct": True, "explanation": "Đúng, $\\vec{AC'} \\cdot \\vec{BD} = 0$ và $\\vec{AC'} \\cdot \\vec{BA'} = 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Ba vectơ $\\vec{AB}, \\vec{A'C'}, \\vec{DD'}$ đồng phẳng.", "correct": False, "explanation": "Sai, $\\vec{DD'}$ cùng phương $\\vec{AA'}$, chúng tạo thành 3 phương độc lập của không gian."},
                        {"label": "d", "subLabel": "d)", "content": "Góc giữa hai đường chéo $\\vec{AC}$ và $\\vec{BD}$ bằng $90^\\circ$.", "correct": True, "explanation": "Đúng, đáy là hình vuông nên 2 đường chéo vuông góc."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện $ABCD$ có $AB \\perp CD$ và $AB = 6, CD = 8$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$.",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "Vì $AB \\perp CD$ nên tích vô hướng bằng 0."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2$. Tính độ dài vectơ tổng $\\vec{u} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ (làm tròn kết quả đến hai chữ số thập phân nếu là số vô tỉ, hoặc ghi $2\\sqrt{3} \\approx 3.46$). Độ dài đường chéo bằng bao nhiêu?",
                    "correctAnswer": "3.46",
                    "acceptedAnswers": ["3.46", "3,46", "2*sqrt(3)"],
                    "explanation": "$|\\vec{AC'}| = \\sqrt{2^2 + 2^2 + 2^2} = 2\\sqrt{3} \\approx 3.46$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Ba lực có độ lớn lần lượt là $10\\text{ N}, 10\\text{ N}, 10\\text{ N}$ cùng tác dụng vào một điểm và đôi một tạo với nhau một góc $120^\\circ$. Độ lớn hợp lực của ba lực này bằng bao nhiêu Newton?",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "Ba vectơ cùng độ lớn đối xứng trong mặt phẳng tạo góc $120^\\circ$ có tổng bằng $\\vec{0}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho tam giác $ABC$ đều cạnh $4$. Trên đường thẳng vuông góc với mặt phẳng $(ABC)$ tại $A$, lấy điểm $S$ sao cho $SA = 3$. Tính độ dài của vectơ $\\vec{SA} + \\vec{AB}$.",
                    "correctAnswer": "5",
                    "acceptedAnswers": ["5"],
                    "explanation": "$\\vec{SA} + \\vec{AB} = \\vec{SB}$. Tam giác $SAB$ vuông tại $A$, có $SA = 3, AB = 4 \\Rightarrow SB = \\sqrt{3^2 + 4^2} = 5$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một người kéo một khối gỗ trượt trên sàn với lực kéo $F = 100\\text{ N}$ nghiêng góc $45^\\circ$ so với sàn. Tính công cơ học của lực kéo khi khối gỗ di chuyển được quãng đường $10\\sqrt{2}\\text{ m}$ (đơn vị: Joule).",
                    "correctAnswer": "1000",
                    "acceptedAnswers": ["1000"],
                    "explanation": "$A = F \\cdot s \\cdot \\cos 45^\\circ = 100 \\times 10\\sqrt{2} \\times \\frac{\\sqrt{2}}{2} = 1000\\text{ J}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một chiếc ca nô di chuyển trên một con sông. Vận tốc riêng của ca nô là $16\\text{ km/h}$ hướng thẳng vuông góc với bờ sông. Dòng nước chảy xuôi dòng với vận tốc $12\\text{ km/h}$. Tốc độ thực tế của ca nô so với bờ sông là bao nhiêu km/h?",
                    "correctAnswer": "20",
                    "acceptedAnswers": ["20"],
                    "explanation": "$v = \\sqrt{16^2 + 12^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20\\text{ km/h}$."
                }
            ]

        elif exam_idx == 2:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện $ABCD$. Mệnh đề nào sau đây đúng?",
                    "options": {"A": "$\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$", "B": "$\\vec{AB} + \\vec{BC} = \\vec{CA}$", "C": "$\\vec{AB} - \\vec{AC} = \\vec{BC}$", "D": "$\\vec{AB} + \\vec{CD} = \\vec{AC}$"},
                    "correct": "A",
                    "explanation": "Theo quy tắc 3 điểm liên tiếp: $\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AC} + \\vec{CD} = \\vec{AD}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Khẳng định nào sau đây là đúng?",
                    "options": {"A": "$\\vec{SA} + \\vec{SC} = 2\\vec{SO}$", "B": "$\\vec{SA} + \\vec{SB} = 2\\vec{SO}$", "C": "$\\vec{SA} + \\vec{SC} = \\vec{SO}$", "D": "$\\vec{SA} + \\vec{SD} = 2\\vec{SO}$"},
                    "correct": "A",
                    "explanation": "Vì $O$ là trung điểm $AC$ nên $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ thỏa mãn $|\\vec{u}| = 3, |\\vec{v}| = 4$ và góc $(\\vec{u}, \\vec{v}) = 60^\\circ$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng",
                    "options": {"A": "$6$", "B": "$12$", "C": "$6\\sqrt{3}$", "D": "$3$"},
                    "correct": "A",
                    "explanation": "$\\vec{u} \\cdot \\vec{v} = 3 \\times 4 \\times \\cos 60^\\circ = 12 \\times 0.5 = 6$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AC}$ và $\\vec{A'C'}$ bằng",
                    "options": {"A": "$0^\\circ$", "B": "$90^\\circ$", "C": "$180^\\circ$", "D": "$45^\\circ$"},
                    "correct": "A",
                    "explanation": "Vì $\\vec{AC} = \\vec{A'C'}$ nên hai vectơ cùng hướng, góc giữa chúng bằng $0^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Ba lực đồng quy $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một vật và vật cân bằng. Biết $\\vec{F}_1 \\perp \\vec{F}_2$ và $|\\vec{F}_1| = 6\\text{ N}, |\\vec{F}_2| = 8\\text{ N}$. Độ lớn của lực $\\vec{F}_3$ bằng",
                    "options": {"A": "$10\\text{ N}$", "B": "$14\\text{ N}$", "C": "$2\\text{ N}$", "D": "$48\\text{ N}$"},
                    "correct": "A",
                    "explanation": "Vì $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0} \\Rightarrow \\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2)$. Do $\\vec{F}_1 \\perp \\vec{F}_2$ nên $|\\vec{F}_3| = \\sqrt{6^2 + 8^2} = 10\\text{ N}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Cho tứ diện $ABCD$. Đặt $\\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}, \\vec{AD} = \\vec{d}$. Gọi $G$ là trọng tâm tam giác $BCD$. Vectơ $\\vec{AG}$ biểu diễn theo $\\vec{b}, \\vec{c}, \\vec{d}$ là",
                    "options": {"A": "$\\frac{1}{3}(\\vec{b} + \\vec{c} + \\vec{d})$", "B": "$\\vec{b} + \\vec{c} + \\vec{d}$", "C": "$\\frac{1}{2}(\\vec{b} + \\vec{c} + \\vec{d})$", "D": "$\\frac{1}{4}(\\vec{b} + \\vec{c} + \\vec{d})$"},
                    "correct": "A",
                    "explanation": "Theo tính chất trọng tâm tam giác: $\\vec{AG} = \\frac{1}{3}(\\vec{AB} + \\vec{AC} + \\vec{AD}) = \\frac{1}{3}(\\vec{b} + \\vec{c} + \\vec{d})$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một vật có khối lượng $m = 2\\text{ kg}$ được kéo trượt thẳng đều trên sàn nằm ngang bởi một lực kéo $\\vec{F}$ hợp với phương ngang một góc $30^\\circ$. Hệ số ma sát giữa vật và sàn là $\\mu = 0.2$. Lấy $g = 9.8\\text{ m/s}^2$. Góc hợp bởi lực ma sát và hướng dịch chuyển là",
                    "options": {"A": "$180^\\circ$", "B": "$90^\\circ$", "C": "$0^\\circ$", "D": "$30^\\circ$"},
                    "correct": "A",
                    "explanation": "Lực ma sát luôn ngược chiều chuyển động nên góc hợp với hướng dịch chuyển là $180^\\circ$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hình lăng trụ tam giác $ABC.A'B'C'$. Vectơ tổng $\\vec{AB} + \\vec{B'C'} + \\vec{C'A}$ bằng",
                    "options": {"A": "$\\vec{0}$", "B": "$\\vec{AA'}$", "C": "$\\vec{BB'}$", "D": "$\\vec{CC'}$"},
                    "correct": "A",
                    "explanation": "Vì $\\vec{B'C'} = \\vec{BC}$ nên tổng là $\\vec{AB} + \\vec{BC} + \\vec{C'A}$... nhưng $\\vec{C'A} = \\vec{CA} - \\vec{CC'}$, hay nếu xét $\\vec{AB} + \\vec{BC} + \\vec{CA} = \\vec{0}$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hình chóp tứ giác đều $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$. Khẳng định nào sau đây sai?",
                    "options": {"A": "$\\vec{SO} \\cdot \\vec{AC} = 0$", "B": "$\\vec{SO} \\cdot \\vec{BD} = 0$", "C": "$\\vec{AC} \\cdot \\vec{BD} = 0$", "D": "$\\vec{SA} \\cdot \\vec{SC} = 0$"},
                    "correct": "D",
                    "explanation": "Đoạn $SO \\perp (ABCD)$ nên $\\vec{SO}$ vuông góc $\\vec{AC}, \\vec{BD}$. Hai đường chéo hình vuông vuông góc nhau. Góc $\\widehat{ASC}$ không nhất thiết phải bằng $90^\\circ$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Hai người cùng kéo một chiếc thuyền theo hai hướng tạo với nhau một góc $60^\\circ$ với các lực kéo có cùng độ lớn $200\\text{ N}$. Hợp lực tác dụng lên chiếc thuyền có độ lớn bằng",
                    "options": {"A": "$200\\sqrt{3}\\text{ N}$", "B": "$400\\text{ N}$", "C": "$200\\text{ N}$", "D": "$300\\text{ N}$"},
                    "correct": "A",
                    "explanation": "$F = 2 \\times 200 \\times \\cos 30^\\circ = 400 \\times \\frac{\\sqrt{3}}{2} = 200\\sqrt{3}\\text{ N}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Cho tứ diện $ABCD$. Điểm $M$ thuộc đoạn thẳng $AB$ sao cho $AM = 2MB$. Biểu diễn $\\vec{CM}$ qua $\\vec{CA}$ và $\\vec{CB}$ là",
                    "options": {"A": "$\\vec{CM} = \\frac{1}{3}\\vec{CA} + \\frac{2}{3}\\vec{CB}$", "B": "$\\vec{CM} = \\frac{2}{3}\\vec{CA} + \\frac{1}{3}\\vec{CB}$", "C": "$\\vec{CM} = \\frac{1}{2}(\\vec{CA} + \\vec{CB})$", "D": "$\\vec{CM} = 2\\vec{CA} - \\vec{CB}$"},
                    "correct": "A",
                    "explanation": "Ta có $\\vec{MA} = -2\\vec{MB} \\Rightarrow \\vec{CM} = \\frac{\\vec{CA} + 2\\vec{CB}}{1 + 2} = \\frac{1}{3}\\vec{CA} + \\frac{2}{3}\\vec{CB}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Côsin của góc giữa hai vectơ $\\vec{AC}$ và $\\vec{A'D}$ bằng",
                    "options": {"A": "$\\frac{1}{2}$", "B": "$-\\frac{1}{2}$", "C": "$\\frac{\\sqrt{2}}{2}$", "D": "$0$"},
                    "correct": "A",
                    "explanation": "$\\vec{AC} = \\vec{AB} + \\vec{AD}$, $\\vec{A'D} = \\vec{AD} - \\vec{AA'}$. Tích vô hướng $\\vec{AC} \\cdot \\vec{A'D} = a^2$. Độ dài $AC = a\\sqrt{2}, A'D = a\\sqrt{2}$. $\\cos = \\frac{a^2}{2a^2} = \\frac{1}{2}$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $B$ với $BA = BC = a$, chiều cao $AA' = a\\sqrt{2}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tích vô hướng $\\vec{BA} \\cdot \\vec{BC} = 0$.", "correct": True, "explanation": "Đúng, vì tam giác vuông tại $B$."},
                        {"label": "b", "subLabel": "b)", "content": "Độ dài đoạn thẳng $AC$ bằng $a\\sqrt{2}$.", "correct": True, "explanation": "Đúng, $AC = \\sqrt{a^2 + a^2} = a\\sqrt{2}$."},
                        {"label": "c", "subLabel": "c)", "content": "Tích vô hướng $\\vec{AA'} \\cdot \\vec{AC} = 0$.", "correct": True, "explanation": "Đúng, lăng trụ đứng nên $AA' \\perp (ABC) \\Rightarrow AA' \\perp AC$."},
                        {"label": "d", "subLabel": "d)", "content": "Góc giữa hai vectơ $\\vec{A'B}$ và $\\vec{B'C}$ bằng $90^\\circ$.", "correct": False, "explanation": "Sai, tính tích vô hướng thấy khác 0."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $AC$ và $BD$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vectơ $\\vec{IA} + \\vec{IC} = \\vec{0}$.", "correct": True, "explanation": "Đúng, $I$ là trung điểm $AC$."},
                        {"label": "b", "subLabel": "b)", "content": "Vectơ $\\vec{IJ} = \\frac{1}{2}(\\vec{AB} + \\vec{CD})$.", "correct": True, "explanation": "Đúng, đẳng thức vectơ quen thuộc."},
                        {"label": "c", "subLabel": "c)", "content": "Vectơ $\\vec{IJ} = \\frac{1}{2}(\\vec{AD} + \\vec{CB})$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Nếu $AB = CD$ thì $IJ \\perp AB$.", "correct": False, "explanation": "Sai, chỉ vuông góc khi tứ diện trực tâm hoặc điều kiện đặc biệt."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một khinh khí cầu đang bay lên thẳng đứng với vận tốc $v_k = 5\\text{ m/s}$ trong điều kiện có gió ngang thổi theo phương ngang với vận tốc $v_g = 12\\text{ m/s}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Vectơ vận tốc tổng hợp của khinh khí cầu là $\\vec{v} = \\vec{v}_k + \\vec{v}_g$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Hai vectơ $\\vec{v}_k$ và $\\vec{v}_g$ vuông góc với nhau.", "correct": True, "explanation": "Đúng, phương thẳng đứng vuông góc phương ngang."},
                        {"label": "c", "subLabel": "c)", "content": "Tốc độ di chuyển thực tế của khinh khí cầu là $13\\text{ m/s}$.", "correct": True, "explanation": "Đúng, $\\sqrt{5^2 + 12^2} = 13\\text{ m/s}$."},
                        {"label": "d", "subLabel": "d)", "content": "Sau $10\\text{ giây}$, khinh khí cầu di chuyển được quãng đường $120\\text{ m}$.", "correct": False, "explanation": "Sai, quãng đường thực tế là $13 \\times 10 = 130\\text{ m}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = a, AD = b, AA' = c$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Ba vectơ $\\vec{AB}, \\vec{AD}, \\vec{AA'}$ đôi một vuông góc.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Độ dài đường chéo $AC' = \\sqrt{a^2 + b^2 + c^2}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC'} = a^2$.", "correct": True, "explanation": "Đúng, $\\vec{AB} \\cdot (\\vec{AB} + \\vec{AD} + \\vec{AA'}) = a^2$."},
                        {"label": "d", "subLabel": "d)", "content": "Hình chiếu của đường chéo $AC'$ lên mặt phẳng $(ABCD)$ là đoạn thẳng $BD$.", "correct": False, "explanation": "Sai, hình chiếu của $AC'$ là đoạn thẳng $AC$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện đều $ABCD$ có cạnh bằng $6$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$.",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc nhau, do đó tích vô hướng bằng 0."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có $|\\vec{a}| = 2, |\\vec{b}| = 5$ và $\\vec{a} \\cdot \\vec{b} = -5$. Tính số đo góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$ (đơn vị: độ).",
                    "correctAnswer": "120",
                    "acceptedAnswers": ["120"],
                    "explanation": "$\\cos(\\vec{a}, \\vec{b}) = \\frac{-5}{2 \\times 5} = -0.5 \\Rightarrow \\theta = 120^\\circ$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một chiếc ô tô kéo một chiếc xe khác bằng một sợi cáp với lực kéo không đổi $F = 500\\text{ N}$ theo phương nằm ngang. Tính công cơ học thực hiện khi kéo xe đi được đoạn đường dài $200\\text{ m}$ (đơn vị: kJ).",
                    "correctAnswer": "100",
                    "acceptedAnswers": ["100"],
                    "explanation": "$A = 500 \\times 200 = 100000\\text{ J} = 100\\text{ kJ}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Gọi $\\alpha$ là góc giữa hai đường thẳng $AC$ và $DA'$. Tính số đo góc $\\alpha$ (đơn vị: độ).",
                    "correctAnswer": "60",
                    "acceptedAnswers": ["60"],
                    "explanation": "Nối $AC, CD', D'A$ tạo thành tam giác đều $ACD'$ có 3 cạnh bằng $a\\sqrt{2}$, góc giữa chúng bằng $60^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một máy bay đang bay với vận tốc hướng Bắc là $500\\text{ km/h}$. Một luồng gió mạnh thổi từ hướng Tây sang Đông với tốc độ $120\\text{ km/h}$. Tốc độ tổng hợp của máy bay so với mặt đất bằng bao nhiêu km/h? (Làm tròn đến hàng đơn vị).",
                    "correctAnswer": "514",
                    "acceptedAnswers": ["514"],
                    "explanation": "$v = \\sqrt{500^2 + 120^2} = \\sqrt{250000 + 14400} = \\sqrt{264400} \\approx 514.2 \\Rightarrow 514$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một vật treo cân bằng bằng hai sợi dây tạo với trần nhà hai góc bằng nhau là $45^\\circ$. Biết trọng lượng của vật là $P = 100\\text{ N}$. Lực căng của mỗi sợi dây xấp xỉ bằng bao nhiêu Newton? (Lấy $\\sqrt{2} \\approx 1.414$, làm tròn kết quả đến hàng đơn vị).",
                    "correctAnswer": "71",
                    "acceptedAnswers": ["71", "70.7", "70,7"],
                    "explanation": "$2T \\sin 45^\\circ = P \\Rightarrow 2T \\frac{\\sqrt{2}}{2} = 100 \\Rightarrow T = \\frac{100}{\\sqrt{2}} = 50\\sqrt{2} \\approx 70.71 \\approx 71\\text{ N}$."
                }
            ]

        elif exam_idx == 3:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho ba điểm $A, B, C$ phân biệt. Đẳng thức nào sau đây luôn đúng?",
                    "options": {"A": "$\\vec{AB} + \\vec{CA} = \\vec{CB}$", "B": "$\\vec{AB} - \\vec{AC} = \\vec{BC}$", "C": "$\\vec{BA} + \\vec{AC} = \\vec{CB}$", "D": "$\\vec{AB} + \\vec{BC} = \\vec{BA}$"},
                    "correct": "A",
                    "explanation": "$\\vec{CA} + \\vec{AB} = \\vec{CB}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hình chóp $S.ABCD$. Gọi $O$ là giao điểm của $AC$ và $BD$. Nếu $ABCD$ là hình bình hành thì $\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD}$ bằng",
                    "options": {"A": "$4\\vec{SO}$", "B": "$2\\vec{SO}$", "C": "$\\vec{SO}$", "D": "$\\vec{0}$"},
                    "correct": "A",
                    "explanation": "$(\\vec{SA} + \\vec{SC}) + (\\vec{SB} + \\vec{SD}) = 2\\vec{SO} + 2\\vec{SO} = 4\\vec{SO}$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hai vectơ $\\vec{u}, \\vec{v}$ có độ dài lần lượt là $2$ và $3$. Biết $\\vec{u} \\cdot \\vec{v} = 3\\sqrt{3}$. Góc giữa $\\vec{u}$ và $\\vec{v}$ bằng",
                    "options": {"A": "$30^\\circ$", "B": "$60^\\circ$", "C": "$45^\\circ$", "D": "$90^\\circ$"},
                    "correct": "A",
                    "explanation": "$\\cos(\\vec{u}, \\vec{v}) = \\frac{3\\sqrt{3}}{2 \\times 3} = \\frac{\\sqrt{3}}{2} \\Rightarrow \\theta = 30^\\circ$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $CC'$ bằng",
                    "options": {"A": "$90^\\circ$", "B": "$0^\\circ$", "C": "$45^\\circ$", "D": "$60^\\circ$"},
                    "correct": "A",
                    "explanation": "Vì $CC' \\parallel AA'$ và $AB \\perp AA'$ nên góc giữa $AB$ và $CC'$ bằng $90^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một vật được kéo bởi hai lực $\\vec{F}_1$ và $\\vec{F}_2$ vuông góc với nhau có độ lớn lần lượt là $30\\text{ N}$ và $40\\text{ N}$. Để vật đứng yên cân bằng, cần tác dụng thêm lực $\\vec{F}_3$ có độ lớn bằng",
                    "options": {"A": "$50\\text{ N}$", "B": "$70\\text{ N}$", "C": "$10\\text{ N}$", "D": "$35\\text{ N}$"},
                    "correct": "A",
                    "explanation": "Hợp lực của $\\vec{F}_1$ và $\\vec{F}_2$ là $\\sqrt{30^2 + 40^2} = 50\\text{ N}$. Để cân bằng, $|\\vec{F}_3| = 50\\text{ N}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Cho tứ diện $ABCD$ có $G$ là trọng tâm. Mệnh đề nào sau đây đúng?",
                    "options": {"A": "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$", "B": "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{GD}$", "C": "$\\vec{AB} + \\vec{AC} + \\vec{AD} = \\vec{0}$", "D": "$\\vec{DA} + \\vec{DB} + \\vec{DC} = \\vec{0}$"},
                    "correct": "A",
                    "explanation": "Đặc trưng của trọng tâm tứ diện là tổng vectơ từ trọng tâm đến 4 đỉnh bằng $\\vec{0}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một lực $\\vec{F}$ có độ lớn $100\\text{ N}$ kéo một vật chuyển động thẳng đều theo hướng tạo với phương ngang góc $45^\\circ$. Khi vật dịch chuyển được quãng đường $20\\text{ m}$ trên mặt sàn nằm ngang, công cơ học thực hiện xấp xỉ bằng",
                    "options": {"A": "$1414\\text{ J}$", "B": "$2000\\text{ J}$", "C": "$1000\\text{ J}$", "D": "$1732\\text{ J}$"},
                    "correct": "A",
                    "explanation": "$A = 100 \\times 20 \\times \\cos 45^\\circ = 2000 \\times \\frac{\\sqrt{2}}{2} = 1000\\sqrt{2} \\approx 1414.2\\text{ J}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hình lăng trụ $ABC.A'B'C'$. Đặt $\\vec{u} = \\vec{AA'}, \\vec{v} = \\vec{AB}, \\vec{w} = \\vec{AC}$. Vectơ $\\vec{BC'}$ biểu diễn qua $\\vec{u}, \\vec{v}, \\vec{w}$ là",
                    "options": {"A": "$\\vec{u} - \\vec{v} + \\vec{w}$", "B": "$\\vec{u} + \\vec{v} - \\vec{w}$", "C": "$-\\vec{u} - \\vec{v} + \\vec{w}$", "D": "$\\vec{u} + \\vec{v} + \\vec{w}$"},
                    "correct": "A",
                    "explanation": "$\\vec{BC'} = \\vec{BC} + \\vec{CC'} = (\\vec{AC} - \\vec{AB}) + \\vec{AA'} = \\vec{w} - \\vec{v} + \\vec{u}$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hình lập phương $ABCD.A'B'C'D'$. Mệnh đề nào sau đây đúng?",
                    "options": {"A": "$\\vec{AB} \\cdot \\vec{CC'} = 0$", "B": "$\\vec{AB} \\cdot \\vec{AD} = a^2$", "C": "$\\vec{AA'} \\cdot \\vec{B'C'} = a^2$", "D": "$\\vec{AC} \\cdot \\vec{BD} = a^2$"},
                    "correct": "A",
                    "explanation": "Vì $AB \\perp AA'$ và $AA' \\parallel CC'$ nên $AB \\perp CC'$, tích vô hướng bằng 0."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Một người chèo thuyền qua một con sông rộng $100\\text{ m}$. Vận tốc của thuyền đối với dòng nước là $4\\text{ m/s}$ theo hướng vuông góc bờ sông. Vận tốc dòng nước chảy là $3\\text{ m/s}$. Thời gian để thuyền sang đến bờ bên kia là",
                    "options": {"A": "$25\\text{ s}$", "B": "$20\\text{ s}$", "C": "$33.3\\text{ s}$", "D": "$50\\text{ s}$"},
                    "correct": "A",
                    "explanation": "Thành phần vận tốc theo phương vuông góc bờ sông chỉ phụ thuộc vận tốc thuyền là $4\\text{ m/s}$, thời gian $t = 100 / 4 = 25\\text{ s}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Cho tam giác $ABC$. Gọi $M$ là trung điểm cạnh $BC$. Mệnh đề nào sau đây đúng?",
                    "options": {"A": "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$", "B": "$\\vec{AB} + \\vec{AC} = \\vec{AM}$", "C": "$\\vec{MA} + \\vec{MB} = \\vec{MC}$", "D": "$\\vec{AB} - \\vec{AC} = 2\\vec{AM}$"},
                    "correct": "A",
                    "explanation": "Định lý trung điểm: $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$ và $SA = SB = SC = a$. Góc giữa hai vectơ $\\vec{SA}$ và $\\vec{BC}$ bằng",
                    "options": {"A": "$90^\\circ$", "B": "$60^\\circ$", "C": "$45^\\circ$", "D": "$120^\\circ$"},
                    "correct": "A",
                    "explanation": "$\\vec{SA} \\cdot \\vec{BC} = \\vec{SA} \\cdot (\\vec{SC} - \\vec{SB}) = \\vec{SA} \\cdot \\vec{SC} - \\vec{SA} \\cdot \\vec{SB} = a^2 \\cos 60^\\circ - a^2 \\cos 60^\\circ = 0 \\Rightarrow 90^\\circ$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho tứ diện $ABCD$ có $AB, AC, AD$ đôi một vuông góc và $AB = AC = AD = 2$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.", "correct": True, "explanation": "Đúng, vì $AB \\perp AC$."},
                        {"label": "b", "subLabel": "b)", "content": "Tam giác $BCD$ là tam giác đều cạnh $2\\sqrt{2}$.", "correct": True, "explanation": "Đúng, các cạnh đáy đều bằng $\\sqrt{2^2 + 2^2} = 2\\sqrt{2}$."},
                        {"label": "c", "subLabel": "c)", "content": "Vectơ $\\vec{BC} = \\vec{AC} - \\vec{AB}$.", "correct": True, "explanation": "Đúng, $\\vec{AC} - \\vec{AB} = \\vec{BC}$."},
                        {"label": "d", "subLabel": "d)", "content": "Tích vô hướng $\\vec{BC} \\cdot \\vec{BD} = 0$.", "correct": False, "explanation": "Sai, tam giác $BCD$ đều nên góc giữa chúng bằng $60^\\circ$, tích vô hướng bằng $4$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $1$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Độ dài vectơ $\\vec{AB} + \\vec{BC}$ bằng $\\sqrt{2}$.", "correct": True, "explanation": "Đúng, $|\\vec{AC}| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$."},
                        {"label": "b", "subLabel": "b)", "content": "Độ dài vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng $\\sqrt{3}$.", "correct": True, "explanation": "Đúng, $|\\vec{AC'}| = \\sqrt{1 + 1 + 1} = \\sqrt{3}$."},
                        {"label": "c", "subLabel": "c)", "content": "Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{A'D'}$ bằng $90^\\circ$.", "correct": True, "explanation": "Đúng, vì $\\vec{A'D'} = \\vec{AD}$ và $AB \\perp AD$."},
                        {"label": "d", "subLabel": "d)", "content": "Tích vô hướng $\\vec{AC} \\cdot \\vec{BD} = 1$.", "correct": False, "explanation": "Sai, hai đường chéo hình vuông vuông góc nên tích vô hướng bằng $0$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một đèn giao thông có trọng lượng $P = 120\\text{ N}$ được treo giữa ngã tư nhờ hai sợi dây cáp cố định vào hai cột thẳng đứng đối diện sao cho hai dây cáp cùng nghiêng với phương ngang một góc $15^\\circ$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Lực căng của hai dây cáp có độ lớn bằng nhau do tính đối xứng.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Phương trình cân bằng lực theo phương thẳng đứng là $2T \\sin 15^\\circ = P$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Lực căng của mỗi sợi cáp lớn hơn trọng lượng của đèn giao thông.", "correct": True, "explanation": "Đúng, $T = \\frac{120}{2\\sin 15^\\circ} \\approx \\frac{60}{0.2588} \\approx 231.8\\text{ N} > 120\\text{ N}$."},
                        {"label": "d", "subLabel": "d)", "content": "Nếu góc nghiêng tăng lên thì lực căng dây cáp sẽ tăng lên.", "correct": False, "explanation": "Sai, góc nghiêng tăng thì $\\sin$ tăng, lực căng dây giảm."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hình chóp $S.ABC$. Gọi $M$ là trung điểm $BC$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\vec{SB} + \\vec{SC} = 2\\vec{SM}$.", "correct": True, "explanation": "Đúng, $M$ là trung điểm $BC$."},
                        {"label": "b", "subLabel": "b)", "content": "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$ với $G$ là trọng tâm tam giác $ABC$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Nếu $SB = SC$ thì $SM \\perp (ABC)$.", "correct": False, "explanation": "Sai, $SM$ chỉ vuông góc với $BC$, không nhất thiết vuông góc với cả mặt phẳng."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện $ABCD$ có các cạnh $AB, AC, AD$ đôi một vuông góc. Biết $AB = 3, AC = 4, AD = 5$. Tính độ dài vectơ $\\vec{u} = \\vec{AB} + \\vec{AC} + \\vec{AD}$.",
                    "correctAnswer": "7.07",
                    "acceptedAnswers": ["7.07", "5*sqrt(2)", "7,07"],
                    "explanation": "$|\\vec{u}| = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2} \\approx 7.07$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ có $|\\vec{u}| = 4, |\\vec{v}| = 6$ và $(\\vec{u}, \\vec{v}) = 120^\\circ$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
                    "correctAnswer": "-12",
                    "acceptedAnswers": ["-12"],
                    "explanation": "$\\vec{u} \\cdot \\vec{v} = 4 \\times 6 \\times \\cos 120^\\circ = 24 \\times (-0.5) = -12$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một xe tải kéo một xe con bị sa lầy bằng một lực không đổi $F = 2000\\text{ N}$ theo phương hợp với hướng chuyển động góc $30^\\circ$. Khi xe con dịch chuyển được $50\\text{ m}$, công cơ học thực hiện là bao nhiêu kilôJun (kJ)? (Lấy $\\sqrt{3} \\approx 1.732$, làm tròn kết quả đến hàng đơn vị).",
                    "correctAnswer": "87",
                    "acceptedAnswers": ["87", "86.6", "86,6"],
                    "explanation": "$A = 2000 \\times 50 \\times \\cos 30^\\circ = 100000 \\times \\frac{\\sqrt{3}}{2} = 50000\\sqrt{3} \\approx 86603\\text{ J} \\approx 87\\text{ kJ}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Tính góc giữa hai vectơ $\\vec{BA}$ và $\\vec{B'D'}$ (đơn vị: độ).",
                    "correctAnswer": "45",
                    "acceptedAnswers": ["45"],
                    "explanation": "$\\vec{B'D'} = \\vec{BD}$. Góc giữa $\\vec{BA}$ và $\\vec{BD}$ trong hình vuông là $45^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một chiếc máy bay bay theo hướng Đông Bắc với tốc độ $600\\text{ km/h}$. Gió thổi ngược lại theo hướng Tây Nam với tốc độ $100\\text{ km/h}$. Tốc độ thực của máy bay so với mặt đất bằng bao nhiêu km/h?",
                    "correctAnswer": "500",
                    "acceptedAnswers": ["500"],
                    "explanation": "Hai hướng ngược nhau hoàn toàn nên $v = 600 - 100 = 500\\text{ km/h}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một quả bóng chịu tác dụng của 3 lực cân bằng $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết $|\\vec{F}_1| = 12\\text{ N}, |\\vec{F}_2| = 16\\text{ N}$ và $\\vec{F}_1 \\perp \\vec{F}_2$. Tính độ lớn của lực $\\vec{F}_3$ (đơn vị: Newton).",
                    "correctAnswer": "20",
                    "acceptedAnswers": ["20"],
                    "explanation": "$|\\vec{F}_3| = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20\\text{ N}$."
                }
            ]

        elif exam_idx == 4:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện $ABCD$. Tổng vectơ $\\vec{AC} + \\vec{CB} + \\vec{BA}$ bằng",
                    "options": {"A": "$\\vec{0}$", "B": "$\\vec{AB}$", "C": "$\\vec{AC}$", "D": "$\\vec{BC}$"},
                    "correct": "A",
                    "explanation": "Chu trình kín: $\\vec{AC} + \\vec{CB} + \\vec{BA} = \\vec{AA} = \\vec{0}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $G$ là trọng tâm tam giác $ABC$. Đẳng thức nào sau đây đúng?",
                    "options": {"A": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$", "B": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = \\vec{SG}$", "C": "$\\vec{SA} + \\vec{SB} = 2\\vec{SG}$", "D": "$\\vec{SA} + \\vec{SC} = 2\\vec{SG}$"},
                    "correct": "A",
                    "explanation": "Định lý trọng tâm: $\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hai vectơ $\\vec{a}, \\vec{b}$ cùng hướng và đều khác $\\vec{0}$. Khẳng định nào sau đây đúng?",
                    "options": {"A": "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}|$", "B": "$\\vec{a} \\cdot \\vec{b} = -|\\vec{a}| |\\vec{b}|$", "C": "$\\vec{a} \\cdot \\vec{b} = 0$", "D": "$\\vec{a} \\cdot \\vec{b} = 1$"},
                    "correct": "A",
                    "explanation": "Hai vectơ cùng hướng có góc bằng $0^\\circ$, $\\cos 0^\\circ = 1$ nên $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}|$"
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'C'$ và $BD$ bằng",
                    "options": {"A": "$90^\\circ$", "B": "$45^\\circ$", "C": "$60^\\circ$", "D": "$0^\\circ$"},
                    "correct": "A",
                    "explanation": "Vì $A'C' \\parallel AC$ và $AC \\perp BD$ nên góc bằng $90^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một con tàu di chuyển theo hướng Đông với vận tốc $24\\text{ hải lý/giờ}$. Dòng hải lưu chảy theo hướng Bắc với vận tốc $7\\text{ hải lý/giờ}$. Vận tốc thực của con tàu so với đáy biển là",
                    "options": {"A": "$25\\text{ hải lý/giờ}$", "B": "$31\\text{ hải lý/giờ}$", "C": "$17\\text{ hải lý/giờ}$", "D": "$28\\text{ hải lý/giờ}$"},
                    "correct": "A",
                    "explanation": "$v = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25\\text{ hải lý/giờ}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Cho hình lăng trụ $ABC.A'B'C'$. Khẳng định nào sau đây đúng?",
                    "options": {"A": "$\\vec{AA'} = \\vec{BB'} = \\vec{CC'}$", "B": "$\\vec{AA'} + \\vec{BB'} = \\vec{CC'}$", "C": "$\\vec{AA'} = -\\vec{BB'}$", "D": "$\\vec{AB} = \\vec{A'C'}$"},
                    "correct": "A",
                    "explanation": "Các cạnh bên của hình lăng trụ song song và bằng nhau, cùng hướng từ đáy dưới lên đáy trên nên các vectơ bằng nhau."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một lực kéo $F = 40\\text{ N}$ làm vật di chuyển một đoạn $5\\text{ m}$ cùng hướng với lực kéo. Công cơ học thực hiện bằng",
                    "options": {"A": "$200\\text{ J}$", "B": "$100\\text{ J}$", "C": "$0\\text{ J}$", "D": "$400\\text{ J}$"},
                    "correct": "A",
                    "explanation": "$A = F \\cdot s \\cdot \\cos 0^\\circ = 40 \\times 5 = 200\\text{ J}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $A$, cạnh $SA \\perp (ABC)$. Khẳng định nào sau đây đúng?",
                    "options": {"A": "$\\vec{AB} \\cdot \\vec{AC} = 0$", "B": "$\\vec{SB} \\cdot \\vec{SC} = 0$", "C": "$\\vec{SA} \\cdot \\vec{BC} = a^2$", "D": "$\\vec{AB} \\cdot \\vec{SC} = a^2$"},
                    "correct": "A",
                    "explanation": "Vì tam giác $ABC$ vuông tại $A$ nên $AB \\perp AC \\Rightarrow \\vec{AB} \\cdot \\vec{AC} = 0$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hình lập phương $ABCD.A'B'C'D'$. Khẳng định nào sau đây là sai?",
                    "options": {"A": "$\\vec{AB} + \\vec{AD} = \\vec{AC}$", "B": "$\\vec{AA'} + \\vec{AC} = \\vec{AC'}$", "C": "$\\vec{AB} + \\vec{B'C'} + \\vec{DD'} = \\vec{AC'}$", "D": "$\\vec{AC} = \\vec{BD}$"},
                    "correct": "D",
                    "explanation": "Hai đường chéo $AC$ và $BD$ có phương cắt nhau vuông góc, không thể bằng nhau."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Hai lực đồng quy $\\vec{F}_1$ và $\\vec{F}_2$ có độ lớn $10\\text{ N}$ và $10\\text{ N}$ tạo với nhau góc $90^\\circ$. Độ lớn hợp lực của chúng bằng",
                    "options": {"A": "$10\\sqrt{2}\\text{ N}$", "B": "$20\\text{ N}$", "C": "$10\\text{ N}$", "D": "$10\\sqrt{3}\\text{ N}$"},
                    "correct": "A",
                    "explanation": "$F = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ N}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Cho tứ diện $ABCD$. Gọi $M$ là trung điểm $AB$, $N$ là trung điểm $CD$. Vectơ $\\vec{MN}$ bằng",
                    "options": {"A": "$\\frac{1}{2}(\\vec{AD} + \\vec{BC})$", "B": "$\\frac{1}{2}(\\vec{AD} - \\vec{BC})$", "C": "$\\vec{AD} + \\vec{BC}$", "D": "$\\frac{1}{2}(\\vec{AB} + \\vec{CD})$"},
                    "correct": "A",
                    "explanation": "$\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi. Tích vô hướng $\\vec{AC} \\cdot \\vec{BD}$ bằng",
                    "options": {"A": "$0$", "B": "$a^2$", "C": "$2a^2$", "D": "$-a^2$"},
                    "correct": "A",
                    "explanation": "Hai đường chéo của hình thoi vuông góc nhau nên tích vô hướng bằng $0$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tứ diện.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Với mọi điểm $M$, ta luôn có $\\vec{MA} + \\vec{MB} + \\vec{MC} + \\vec{MD} = 4\\vec{MG}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Điểm $G$ là trung điểm của đoạn thẳng nối trung điểm hai cạnh đối diện bất kì.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Độ dài $GA = GB = GC = GD$ với mọi tứ diện $ABCD$.", "correct": False, "explanation": "Sai, chỉ đúng khi tứ diện đều."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình lăng trụ tam giác $ABC.A'B'C'$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Mặt bên $ABB'A'$ là một hình bình hành.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "$\\vec{AA'} + \\vec{AB} = \\vec{AB'}$.", "correct": True, "explanation": "Đúng, quy tắc hình bình hành."},
                        {"label": "c", "subLabel": "c)", "content": "$\\vec{A'B'} = \\vec{AB}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Ba vectơ $\\vec{AA'}, \\vec{AB}, \\vec{AC}$ đồng phẳng.", "correct": False, "explanation": "Sai, chúng tạo thành 3 cạnh xuất phát từ một đỉnh của lăng trụ nên không đồng phẳng."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một xà lan được kéo trên kênh bởi hai con ngựa đi ở hai bờ đối diện. Mỗi con ngựa tác dụng một lực $F_1 = F_2 = 1500\\text{ N}$ theo hướng hợp với phương dọc kênh một góc $30^\\circ$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Các thành phần lực vuông góc với phương dọc kênh triệt tiêu lẫn nhau.", "correct": True, "explanation": "Đúng, do tính đối xứng $1500\\sin 30^\\circ - 1500\\sin 30^\\circ = 0$."},
                        {"label": "b", "subLabel": "b)", "content": "Hợp lực tác dụng làm xà lan chuyển động thẳng dọc theo kênh.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Độ lớn hợp lực kéo dọc kênh là $1500\\sqrt{3}\\text{ N}$.", "correct": True, "explanation": "Đúng, $2 \\times 1500 \\times \\cos 30^\\circ = 1500\\sqrt{3}\\text{ N}$."},
                        {"label": "d", "subLabel": "d)", "content": "Hợp lực kéo dọc kênh có độ lớn bằng $3000\\text{ N}$.", "correct": False, "explanation": "Sai, chỉ bằng $1500\\sqrt{3} \\approx 2598\\text{ N}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\vec{SA} \\cdot \\vec{AB} = 0$.", "correct": True, "explanation": "Đúng, vì $SA \\perp AB$."},
                        {"label": "b", "subLabel": "b)", "content": "$\\vec{SA} \\cdot \\vec{BC} = 0$.", "correct": True, "explanation": "Đúng, vì $SA \\perp (ABC) \\Rightarrow SA \\perp BC$."},
                        {"label": "c", "subLabel": "c)", "content": "$\\vec{AB} \\cdot \\vec{BC} = 0$.", "correct": True, "explanation": "Đúng, tam giác vuông tại $B$."},
                        {"label": "d", "subLabel": "d)", "content": "$\\vec{SB} \\cdot \\vec{BC} \\ne 0$.", "correct": False, "explanation": "Sai, theo định lý 3 đường vuông góc, $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB \\Rightarrow \\vec{SB} \\cdot \\vec{BC} = 0$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện $ABCD$. Tìm số thực $k$ thỏa mãn đẳng thức $\\vec{AC} + \\vec{BD} = k\\vec{MN}$, trong đó $M, N$ lần lượt là trung điểm của $AB$ và $CD$.",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "Ta có $\\vec{AC} + \\vec{BD} = 2\\vec{MN} \\Rightarrow k = 2$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai vectơ $\\vec{u}, \\vec{v}$ thỏa mãn $|\\vec{u}| = 3, |\\vec{v}| = 4$ và $|\\vec{u} + \\vec{v}| = 5$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
                    "correctAnswer": "0",
                    "acceptedAnswers": ["0"],
                    "explanation": "$|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2 + 2\\vec{u}\\cdot\\vec{v} \\Leftrightarrow 25 = 9 + 16 + 2\\vec{u}\\cdot\\vec{v} \\Rightarrow \\vec{u}\\cdot\\vec{v} = 0$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một cần cẩu nâng một khối bê tông nặng $500\\text{ kg}$ lên cao theo phương thẳng đứng với gia tốc $a = 0.2\\text{ m/s}^2$. Lấy $g = 9.8\\text{ m/s}^2$. Lực căng của dây cáp cần cẩu bằng bao nhiêu Newton?",
                    "correctAnswer": "5000",
                    "acceptedAnswers": ["5000"],
                    "explanation": "$T = m(g + a) = 500(9.8 + 0.2) = 500 \\times 10 = 5000\\text{ N}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông cạnh $2$. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$.",
                    "correctAnswer": "-4",
                    "acceptedAnswers": ["-4"],
                    "explanation": "Vì $\\vec{CD} = -\\vec{AB}$ nên $\\vec{AB} \\cdot \\vec{CD} = -|\\vec{AB}|^2 = -4$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một người kéo một chiếc va li đi một quãng đường $50\\text{ m}$ trên sân ga với lực kéo $F = 60\\text{ N}$ chếch lên hợp với phương ngang một góc $60^\\circ$. Công của lực kéo bằng bao nhiêu Joule?",
                    "correctAnswer": "1500",
                    "acceptedAnswers": ["1500"],
                    "explanation": "$A = 60 \\times 50 \\times \\cos 60^\\circ = 3000 \\times 0.5 = 1500\\text{ J}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một ca nô chuyển động từ bờ sông bên này sang bờ sông bên kia. Vận tốc của ca nô đối với dòng nước là $15\\text{ km/h}$, vận tốc dòng nước là $8\\text{ km/h}$. Biết hướng chuyển động của ca nô vuông góc với dòng nước. Tốc độ của ca nô đối với bờ sông bằng bao nhiêu km/h?",
                    "correctAnswer": "17",
                    "acceptedAnswers": ["17"],
                    "explanation": "$v = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17\\text{ km/h}$."
                }
            ]

        else:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện $ABCD$. Vectơ $\\vec{AB} - \\vec{DB}$ bằng",
                    "options": {"A": "$\\vec{AD}$", "B": "$\\vec{DA}$", "C": "$\\vec{BD}$", "D": "$\\vec{0}$"},
                    "correct": "A",
                    "explanation": "$\\vec{AB} - \\vec{DB} = \\vec{AB} + \\vec{BD} = \\vec{AD}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hình chóp $S.ABC$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Khẳng định nào sau đây đúng?",
                    "options": {"A": "$\\vec{MN} = \\frac{1}{2}\\vec{AB}$", "B": "$\\vec{MN} = 2\\vec{AB}$", "C": "$\\vec{MN} = -\\frac{1}{2}\\vec{AB}$", "D": "$\\vec{MN} = \\vec{AB}$"},
                    "correct": "A",
                    "explanation": "$M, N$ là trung điểm nên $MN$ là đường trung bình tam giác $SAB$, do đó $\\vec{MN} = \\frac{1}{2}\\vec{AB}$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có $|\\vec{a}| = 1, |\\vec{b}| = 2$ và góc $(\\vec{a}, \\vec{b}) = 120^\\circ$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng",
                    "options": {"A": "$-1$", "B": "$1$", "C": "$-\\sqrt{3}$", "D": "$\\sqrt{3}$"},
                    "correct": "A",
                    "explanation": "$\\vec{a} \\cdot \\vec{b} = 1 \\times 2 \\times \\cos 120^\\circ = 2 \\times (-0.5) = -1$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'B$ và $B'C$ bằng",
                    "options": {"A": "$60^\\circ$", "B": "$90^\\circ$", "C": "$45^\\circ$", "D": "$120^\\circ$"},
                    "correct": "A",
                    "explanation": "Vì $A'B \\parallel D'C$, xét tam giác $B'CD'$ đều (3 cạnh là 3 đường chéo các mặt hình vuông), do đó góc bằng $60^\\circ$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một vật đứng cân bằng dưới tác dụng của 3 lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$. Biết $|\\vec{F}_1| = 5\\text{ N}, |\\vec{F}_2| = 12\\text{ N}$ và $\\vec{F}_1 \\perp \\vec{F}_2$. Độ lớn của lực $\\vec{F}_3$ bằng",
                    "options": {"A": "$13\\text{ N}$", "B": "$17\\text{ N}$", "C": "$7\\text{ N}$", "D": "$60\\text{ N}$"},
                    "correct": "A",
                    "explanation": "$\\sqrt{5^2 + 12^2} = 13\\text{ N}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Cho hình hộp $ABCD.A'B'C'D'$. Vectơ nào dưới đây bằng vectơ $\\vec{AB} + \\vec{B'C'} + \\vec{DD'}$?",
                    "options": {"A": "$\\vec{AC'}$", "B": "$\\vec{CA'}$", "C": "$\\vec{BD'}$", "D": "$\\vec{A'C}$"},
                    "correct": "A",
                    "explanation": "Vì $\\vec{B'C'} = \\vec{AD}$ và $\\vec{DD'} = \\vec{AA'}$ nên $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một lực $\\vec{F}$ kéo một chiếc xe trượt tuyết một đoạn đường $15\\text{ m}$ sinh công $300\\text{ J}$. Biết lực kéo có độ lớn $40\\text{ N}$. Góc hợp bởi lực kéo và hướng dịch chuyển là",
                    "options": {"A": "$60^\\circ$", "B": "$30^\\circ$", "C": "$45^\\circ$", "D": "$0^\\circ$"},
                    "correct": "A",
                    "explanation": "$\\cos\\theta = \\frac{A}{F \\cdot s} = \\frac{300}{40 \\times 15} = \\frac{300}{600} = 0.5 \\Rightarrow \\theta = 60^\\circ$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Vectơ tổng $\\vec{SA} + \\vec{SC} - \\vec{SB}$ bằng",
                    "options": {"A": "$\\vec{SD}$", "B": "$\\vec{DS}$", "C": "$\\vec{0}$", "D": "$2\\vec{SO}$"},
                    "correct": "A",
                    "explanation": "Vì $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD} \\Rightarrow \\vec{SA} + \\vec{SC} - \\vec{SB} = \\vec{SD}$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AC}$ và $\\vec{BD'}$ bằng",
                    "options": {"A": "$90^\\circ$", "B": "$45^\\circ$", "C": "$60^\\circ$", "D": "$0^\\circ$"},
                    "correct": "A",
                    "explanation": "$\\vec{AC} \\cdot \\vec{BD'} = \\vec{AC} \\cdot (\\vec{BD} + \\vec{DD'}) = \\vec{AC} \\cdot \\vec{BD} + \\vec{AC} \\cdot \\vec{DD'} = 0 + 0 = 0 \\Rightarrow 90^\\circ$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Một con thuyền vượt sông với vận tốc riêng $8\\text{ km/h}$ hướng vuông góc dòng nước. Vận tốc dòng nước là $6\\text{ km/h}$. Tốc độ thực tế của con thuyền bằng",
                    "options": {"A": "$10\\text{ km/h}$", "B": "$14\\text{ km/h}$", "C": "$2\\text{ km/h}$", "D": "$12\\text{ km/h}$"},
                    "correct": "A",
                    "explanation": "$v = \\sqrt{8^2 + 6^2} = 10\\text{ km/h}$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Cho tứ diện $ABCD$. Điểm $M$ thuộc đoạn thẳng $BC$ sao cho $BM = MC$. Khẳng định nào sau đây đúng?",
                    "options": {"A": "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$", "B": "$\\vec{AB} + \\vec{AC} = \\vec{AM}$", "C": "$\\vec{DB} + \\vec{DC} = \\vec{DM}$", "D": "$\\vec{MB} + \\vec{MC} = \\vec{BC}$"},
                    "correct": "A",
                    "explanation": "$M$ là trung điểm $BC$ nên $\\vec{AB} + \\vec{AC} = 2\\vec{AM}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông tại $C$. Khẳng định nào sau đây sai?",
                    "options": {"A": "$\\vec{SC} \\cdot \\vec{AB} = 0$", "B": "$\\vec{SA} \\cdot \\vec{BC} = 0$", "C": "$\\vec{AC} \\cdot \\vec{BC} = 0$", "D": "$\\vec{SC} \\cdot \\vec{BC} = 0$"},
                    "correct": "A",
                    "explanation": "Theo định lý 3 đường vuông góc: $BC \\perp AC$ và $BC \\perp SA \\Rightarrow BC \\perp (SAC) \\Rightarrow BC \\perp SC$. $SA \\perp (ABC) \\Rightarrow SA \\perp BC$. Còn $SC$ không vuông góc với $AB$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\vec{OA} \\cdot \\vec{OB} = 0$.", "correct": True, "explanation": "Đúng, vì $OA \\perp OB$."},
                        {"label": "b", "subLabel": "b)", "content": "$\\vec{OB} \\cdot \\vec{OC} = 0$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "$\\vec{OA} \\cdot \\vec{OC} = 0$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "$\\vec{AB} \\cdot \\vec{AC} = 0$.", "correct": False, "explanation": "Sai, $\\vec{AB} \\cdot \\vec{AC} = (\\vec{OB} - \\vec{OA}) \\cdot (\\vec{OC} - \\vec{OA}) = OA^2 > 0$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hình hộp $ABCD.A'B'C'D'$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.", "correct": True, "explanation": "Đúng, quy tắc hình hộp."},
                        {"label": "b", "subLabel": "b)", "content": "$\\vec{BA} + \\vec{BC} + \\vec{BB'} = \\vec{BD'}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "$\\vec{AC'} + \\vec{CA'} = \\vec{0}$.", "correct": True, "explanation": "Đúng, $\\vec{CA'} = -\\vec{A'C}$ và hai đường chéo đối xứng nhau."},
                        {"label": "d", "subLabel": "d)", "content": "$\\vec{AC'} = \\vec{BD'}$.", "correct": False, "explanation": "Sai, hai đường chéo hình hộp cắt nhau tại tâm nhưng không cùng phương."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một dây cáp kéo một chiếc ô tô lên dốc có độ nghiêng $30^\\circ$ so với phương ngang với lực căng $T = 4000\\text{ N}$ song song với mặt dốc. Đoạn dốc dài $100\\text{ m}$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Lực kéo của dây cáp cùng hướng với hướng chuyển động của ô tô.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Góc giữa lực kéo và hướng dịch chuyển là $0^\\circ$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Công thực hiện bởi lực kéo của dây cáp bằng $400\\text{ kJ}$.", "correct": True, "explanation": "Đúng, $A = 4000 \\times 100 = 400000\\text{ J} = 400\\text{ kJ}$."},
                        {"label": "d", "subLabel": "d)", "content": "Trọng lực thực hiện công dương trong quá trình ô tô lên dốc.", "correct": False, "explanation": "Sai, trọng lực hướng xuống dưới ngược chiều nâng độ cao nên sinh công âm (công cản)."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho tam giác $ABC$ có trọng tâm $G$. Điểm $S$ không thuộc mặt phẳng $(ABC)$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", "correct": True, "explanation": "Đúng, định nghĩa trọng tâm."},
                        {"label": "b", "subLabel": "b)", "content": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = 3\\vec{SG}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $S$ trùng $G$ thì $\\vec{SA} + \\vec{SB} + \\vec{SC} = \\vec{0}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "$\\vec{SA} + \\vec{SB} + \\vec{SC} = \\vec{0}$ với mọi điểm $S$.", "correct": False, "explanation": "Sai, chỉ đúng khi $S$ trùng $G$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho tứ diện $ABCD$. Biết $\\vec{AB} \\cdot \\vec{CD} = 0$. Góc giữa hai đường thẳng $AB$ và $CD$ bằng bao nhiêu độ?",
                    "correctAnswer": "90",
                    "acceptedAnswers": ["90"],
                    "explanation": "Tích vô hướng bằng 0 nên hai đường thẳng vuông góc, góc bằng $90^\\circ$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai vectơ $\\vec{u}, \\vec{v}$ có $|\\vec{u}| = 5, |\\vec{v}| = 8$ và $(\\vec{u}, \\vec{v}) = 60^\\circ$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.",
                    "correctAnswer": "20",
                    "acceptedAnswers": ["20"],
                    "explanation": "$\\vec{u} \\cdot \\vec{v} = 5 \\times 8 \\times \\cos 60^\\circ = 40 \\times 0.5 = 20$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một người đẩy một cỗ máy một đoạn đường $20\\text{ m}$ với lực đẩy $F = 150\\text{ N}$ theo phương nằm ngang. Tính công cơ học người đó đã thực hiện (đơn vị: Joule).",
                    "correctAnswer": "3000",
                    "acceptedAnswers": ["3000"],
                    "explanation": "$A = F \\cdot s = 150 \\times 20 = 3000\\text{ J}$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $1$. Tính tích vô hướng $\\vec{AC} \\cdot \\vec{A'C'}$.",
                    "correctAnswer": "2",
                    "acceptedAnswers": ["2"],
                    "explanation": "Vì $\\vec{A'C'} = \\vec{AC}$ nên $\\vec{AC} \\cdot \\vec{A'C'} = |\\vec{AC}|^2 = (\\sqrt{2})^2 = 2$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5:** Một máy bay bay theo hướng Bắc với vận tốc $450\\text{ km/h}$. Gió thổi theo hướng Đông với vận tốc $60\\text{ km/h}$. Tính tốc độ thực tế của máy bay đối với mặt đất (làm tròn đến hàng đơn vị).",
                    "correctAnswer": "454",
                    "acceptedAnswers": ["454"],
                    "explanation": "$v = \\sqrt{450^2 + 60^2} = \\sqrt{202500 + 3600} = \\sqrt{206100} \\approx 453.98 \\Rightarrow 454\\text{ km/h}$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6:** Một vật có khối lượng $m = 10\\text{ kg}$ được giữ yên trên mặt phẳng nghiêng góc $30^\\circ$ so với phương ngang bởi một sợi dây cáp song song với mặt nghiêng. Lấy $g = 9.8\\text{ m/s}^2$. Độ lớn lực căng của sợi dây bằng bao nhiêu Newton?",
                    "correctAnswer": "49",
                    "acceptedAnswers": ["49"],
                    "explanation": "$T = m g \\sin 30^\\circ = 10 \\times 9.8 \\times 0.5 = 49\\text{ N}$."
                }
            ]

        exam_obj = {
            "id": f"cd7-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Vectơ Trong Không Gian",
            "code": f"CD7-10{exam_idx}",
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
        "id": "cd7",
        "code": "CĐ 7",
        "title": "VECTO TRONG KHÔNG GIAN",
        "icon": "fa-solid fa-arrows-to-dot",
        "badge": "Lớp 12 • Hình học vectơ",
        "badgeColor": "bg-blue-100 text-blue-800 border-blue-200",
        "description": "Khái niệm vectơ trong không gian, quy tắc hình hộp, tích vô hướng, góc giữa hai vectơ và ứng dụng cân bằng lực, vận tốc, công cơ học.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd7()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
