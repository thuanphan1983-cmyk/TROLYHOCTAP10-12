# -*- coding: utf-8 -*-
"""
Chuyên đề 3: GÓC KHOẢNG CÁCH LỚP 11
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc 2025-2026
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd3():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Góc trong không gian -->
  <div class="bg-indigo-50/70 border-l-4 border-indigo-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-indigo-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-compass-drafting text-indigo-600"></i>
      1. Góc Trong Không Gian
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-indigo-200">
        <p class="font-bold text-indigo-950 mb-1">Góc giữa 2 đường thẳng:</p>
        <p>$0^\\circ \\le \\varphi \\le 90^\\circ$</p>
        <p class="mt-1 text-indigo-800 font-semibold">$\\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-indigo-200">
        <p class="font-bold text-indigo-950 mb-1">Góc giữa đường thẳng & mp:</p>
        <p>Góc giữa $d$ và hình chiếu $d'$ của nó lên $(P)$</p>
        <p class="mt-1 text-indigo-800 font-semibold">$\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-indigo-200">
        <p class="font-bold text-indigo-950 mb-1">Góc giữa hai mặt phẳng:</p>
        <p>Góc phẳng nhị diện hoặc góc giữa 2 vectơ pháp tuyến:</p>
        <p class="mt-1 text-indigo-800 font-semibold">$\\cos \\varphi = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Khoảng cách -->
  <div class="bg-teal-50/70 border-l-4 border-teal-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-teal-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-ruler-combined text-teal-600"></i>
      2. Khoảng Cách Trong Không Gian
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-teal-200">
        <p class="font-bold text-teal-900">Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$:</p>
        <p>Hạ $MH \\perp (P) \\Rightarrow d(M, (P)) = MH$.</p>
        <p class="text-xs text-slate-600 mt-0.5"><strong>Quy tắc dời điểm:</strong> Nếu $MA$ cắt $(P)$ tại $I$ thì $\\frac{d(M, (P))}{d(A, (P))} = \\frac{MI}{AI}$. Nếu $MA \\parallel (P)$ thì $d(M, (P)) = d(A, (P))$. Thường đưa về chân đường vuông góc của khối chóp.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-teal-200">
        <p class="font-bold text-teal-900">Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$:</p>
        <p>Dựng mặt phẳng $(P)$ chứa $b$ và song song với $a$:</p>
        <p class="mt-1 text-teal-800 font-semibold">$d(a, b) = d(a, (P)) = d(A, (P))$ (với $A$ là điểm bất kỳ thuộc $a$).</p>
      </div>
    </div>
  </div>

  <!-- Phần 3: Ứng dụng thực tế -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-building text-purple-600"></i>
      3. Ứng Dụng Thực Tiễn Hình Học Không Gian
    </h4>
    <ul class="list-disc pl-5 space-y-1.5 text-[11.5pt]">
      <li><strong>Kiến trúc & xây dựng:</strong> Tính góc nghiêng mái che dốc thoát nước mưa, góc tạo bởi cột trụ và sàn nhà.</li>
      <li><strong>Khoảng cách an toàn kỹ thuật:</strong> Khoảng cách từ dây cáp điện cao thế/cáp treo đến vách núi đá thẳng đứng hoặc tán cây rừng.</li>
      <li><strong>Trắc địa & định vị:</strong> Xác định khoảng cách từ đỉnh tháp quan sát đến ranh giới công trình.</li>
    </ul>
  </div>
</div>
"""

    exams = []
    for exam_idx in range(1, 6):
        seed = 3000 + exam_idx * 23
        a_val = 2 + exam_idx
        
        raw_mcqs = [
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
                    "A": "Đường thẳng $AB$",
                    "B": "Đường thẳng $BC$",
                    "C": "Đường thẳng $AC$",
                    "D": "Đường thẳng $SA$"
                },
                "correct": "A",
                "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $B$ là chính nó. Vậy hình chiếu của $SB$ là $AB$."
            },
            {
                "id": 3,
                "question": "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$ và $SA \\perp (ABCD)$ với $SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
                "options": {
                    "A": "$\\arctan\\frac{\\sqrt{2}}{2}$ (xấp xỉ $35.26^\\circ$)",
                    "B": "$45^\\circ$",
                    "C": "$60^\\circ$",
                    "D": "$30^\\circ$"
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
                    "A": "$a$",
                    "B": "$a\\sqrt{2}$",
                    "C": "$a\\sqrt{3}$",
                    "D": "$2a$"
                },
                "correct": "A",
                "explanation": "Đoạn vuông góc chung giữa hai mặt đáy là cạnh bên $AA' = a$."
            },
            {
                "id": 6,
                "question": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây là đúng?",
                "options": {
                    "A": "$BC \\perp (SAB)$",
                    "B": "$AB \\perp (SBC)$",
                    "C": "$AC \\perp (SAB)$",
                    "D": "$SA \\perp (SBC)$"
                },
                "correct": "A",
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
                    "A": "Duy nhất $1$",
                    "B": "$2$",
                    "C": "Vô số",
                    "D": "Không có"
                },
                "correct": "A",
                "explanation": "Theo định lý hình học không gian, có duy nhất một mặt phẳng chứa $a$ và song song với $b$."
            },
            {
                "id": 9,
                "question": "Cho hình chóp đều $S.ABCD$ có tất cả các cạnh bằng nhau. Góc giữa cạnh bên $SA$ và cạnh đáy $AB$ bằng:",
                "options": {
                    "A": "$60^\\circ$",
                    "B": "$45^\\circ$",
                    "C": "$90^\\circ$",
                    "D": "$30^\\circ$"
                },
                "correct": "A",
                "explanation": "Tam giác $SAB$ có ba cạnh bằng nhau nên là tam giác đều, do đó góc $\\widehat{SAB} = 60^\\circ$."
            },
            {
                "id": 10,
                "question": "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ có số đo $\\alpha$ luôn thỏa mãn:",
                "options": {
                    "A": "$0^\\circ \\le \\alpha \\le 90^\\circ$",
                    "B": "$0^\\circ < \\alpha < 180^\\circ$",
                    "C": "$0^\\circ \\le \\alpha \\le 180^\\circ$",
                    "D": "$45^\\circ \\le \\alpha \\le 90^\\circ$"
                },
                "correct": "A",
                "explanation": "Góc giữa hai mặt phẳng là góc không tù: $0^\\circ \\le \\alpha \\le 90^\\circ$."
            },
            {
                "id": 11,
                "question": "Một mái nhà lợp ngói dốc có chiều rộng mặt bằng là $4\\text{ m}$ và đỉnh nóc nhà nâng cao $1.5\\text{ m}$ so với xà ngang. Góc nghiêng $\\alpha$ của mái nhà so với mặt sàn nằm ngang thỏa mãn $\\tan\\alpha$ bằng:",
                "options": {
                    "A": "$\\frac{1.5}{2} = 0.75$",
                    "B": "$\\frac{1.5}{4} = 0.375$",
                    "C": "$\\frac{4}{1.5} \\approx 2.67$",
                    "D": "$1.5$"
                },
                "correct": "A",
                "explanation": "Nửa bề rộng mái là $4 / 2 = 2\\text{ m}$. Độ dốc mái: $\\tan\\alpha = \\frac{1.5}{2} = 0.75$."
            },
            {
                "id": 12,
                "question": f"Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = {a_val}$, tam giác $ABC$ đều cạnh 2. Khoảng cách từ $S$ đến đường thẳng $BC$ bằng:",
                "options": {
                    "A": f"$\\sqrt{{{a_val**2 + 3}}}$",
                    "B": f"$\\sqrt{{{a_val**2 + 4}}}$",
                    "C": f"${a_val} + \\sqrt{3}$",
                    "D": f"$\\sqrt{{{a_val**2 + 1}}}$"
                },
                "correct": "A",
                "explanation": f"Gọi $M$ là trung điểm $BC \\Rightarrow AM = \\sqrt{{3}}$. Do $BC \\perp AM$ và $BC \\perp SA \\Rightarrow BC \\perp SM$. $d(S, BC) = SM = \\sqrt{{SA^2 + AM^2}} = \\sqrt{{{a_val**2 + 3}}}$."
            }
        ]

        tf_questions = [
            {
                "id": "tf1",
                "statement": f"Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = {a_val}$, $SA \\perp (ABCD)$ và $SA = {a_val}\\sqrt{3}$.",
                "items": [
                    {
                        "key": "a",
                        "text": "Góc giữa đường thẳng $SD$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.",
                        "correct": True,
                        "explanation": f"Hình chiếu của $SD$ lên đáy là $AD$. $\\tan\\widehat{{SDA}} = \\frac{{SA}}{{AD}} = \\frac{{{a_val}\\sqrt{{3}}}}{{{a_val}}} = \\sqrt{{3}} \\Rightarrow \\widehat{{SDA}} = 60^\\circ$."
                    },
                    {
                        "key": "b",
                        "text": "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.",
                        "correct": True,
                        "explanation": "Ta có $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$, mà $CD \\subset (SCD)$ nên $(SCD) \\perp (SAD)$."
                    },
                    {
                        "key": "c",
                        "text": f"Khoảng cách từ chân đường cao $A$ đến mặt phẳng $(SCD)$ bằng $\\frac{{{a_val}\\sqrt{{3}}}}{{2}}$.",
                        "correct": True,
                        "explanation": f"Hạ $AH \\perp SD$. Vì $CD \\perp (SAD) \\Rightarrow CD \\perp AH \\Rightarrow AH \\perp (SCD)$. $AH = \\frac{{SA \\cdot AD}}{{\\sqrt{{SA^2 + AD^2}}}} = \\frac{{{a_val}\\sqrt{{3}} \\cdot {a_val}}}{{2{a_val}}} = \\frac{{{a_val}\\sqrt{{3}}}}{{2}}$."
                    },
                    {
                        "key": "d",
                        "text": "Góc giữa hai mặt phẳng $(SCD)$ và $(ABCD)$ có số đo bằng $45^\\circ$.",
                        "correct": False,
                        "explanation": "Giao tuyến là $CD$. $AD \\perp CD, SD \\perp CD$ nên góc giữa hai mặt phẳng là $\\widehat{SDA} = 60^\\circ$, không phải $45^\\circ$."
                    }
                ]
            },
            {
                "id": "tf2",
                "statement": f"Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông cân tại $A$, $AB = AC = {a_val}$, chiều cao lăng trụ $AA' = {a_val}\\sqrt{2}$.",
                "items": [
                    {
                        "key": "a",
                        "text": "Khoảng cách giữa hai mặt đáy $(ABC)$ và $(A'B'C')$ bằng ${a_val}\\sqrt{2}$.",
                        "correct": True,
                        "explanation": f"Lăng trụ đứng có khoảng cách giữa hai đáy bằng chiều cao cạnh bên $AA' = {a_val}\\sqrt{2}$."
                    },
                    {
                        "key": "b",
                        "text": "Đường thẳng $B'C'$ vuông góc với mặt phẳng $(ABB'A')$.",
                        "correct": False,
                        "explanation": "Đáy là tam giác vuông cân tại $A$ nên $BC$ không vuông góc với $AB$, do đó $B'C'$ không vuông góc với $(ABB'A')$."
                    },
                    {
                        "key": "c",
                        "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $\\frac{{{a_val}\\sqrt{2}}}{{2}}$.",
                        "correct": True,
                        "explanation": f"Hạ $AH \\perp BC$ trong tam giác vuông cân tại $A$: $AH = \\frac{{BC}}{{2}} = \\frac{{{a_val}\\sqrt{2}}}{{2}}$. Do $AH \\perp BB'$ nên $AH \\perp (BCC'B')$."
                    },
                    {
                        "key": "d",
                        "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.",
                        "correct": False,
                        "explanation": f"Hình chiếu của $A'B$ lên đáy là $AB$. $\\tan\\alpha = \\frac{{A'A}}{{AB}} = \\frac{{{a_val}\\sqrt{2}}}{{{a_val}}} = \\sqrt{2} \\ne 1$, góc xấp xỉ $54.7^\\circ$."
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
                        "correct": True,
                        "explanation": "Cột trụ thẳng đứng vuông góc với sàn, nên góc hợp với tấm pin là $90^\\circ - 30^\\circ = 60^\\circ$."
                    },
                    {
                        "key": "b",
                        "text": "Khoảng cách từ tâm $S$ của tấm pin đến mặt sàn bê tông bằng $2.4\\text{ m}$.",
                        "correct": True,
                        "explanation": "Cột trụ $SO$ thẳng đứng vuông góc với sàn nên khoảng cách chính bằng độ dài $SO = 2.4\\text{ m}$."
                    },
                    {
                        "key": "c",
                        "text": "Nếu mép thấp nhất của tấm pin cách tâm $S$ một khoảng $1\\text{ m}$ dọc theo mặt nghiêng thì mép này cách mặt sàn $1.9\\text{ m}$.",
                        "correct": True,
                        "explanation": "Hạ độ cao: $\\Delta h = 1 \\cdot \\sin 30^\\circ = 0.5\\text{ m}$. Độ cao mép sàn: $2.4 - 0.5 = 1.9\\text{ m}$."
                    },
                    {
                        "key": "d",
                        "text": "Để tăng góc hứng nắng lên $\\alpha = 45^\\circ$, khoảng cách từ mép thấp nhất đến mặt sàn sẽ tăng lên.",
                        "correct": False,
                        "explanation": "Góc nghiêng tăng thì $\\sin 45^\\circ > \\sin 30^\\circ$ nên độ tụt dốc lớn hơn, mép thấp sẽ gần mặt sàn hơn."
                    }
                ]
            },
            {
                "id": "tf4",
                "statement": f"Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = {a_val}$, $SA \\perp (ABCD)$ và $SA = {a_val}$. Gọi $M$ là trung điểm cạnh $CD$.",
                "items": [
                    {
                        "key": "a",
                        "text": f"Đoạn thẳng $AM = \\frac{{{a_val}\\sqrt{{5}}}}{{2}}$.",
                        "correct": True,
                        "explanation": f"$AM = \\sqrt{{AD^2 + DM^2}} = \\sqrt{{{a_val}^2 + ({a_val}/2)^2}} = \\frac{{{a_val}\\sqrt{{5}}}}{{2}}$."
                    },
                    {
                        "key": "b",
                        "text": "Đường thẳng $SM$ vuông góc với đường thẳng $CD$.",
                        "correct": False,
                        "explanation": "Tam giác $SCD$ vuông tại $D$, $M$ là trung điểm cạnh huyền $CD$ nên $SM$ không vuông góc với $CD$."
                    },
                    {
                        "key": "c",
                        "text": f"Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng ${a_val}$.",
                        "correct": True,
                        "explanation": f"$AD \\perp SA$ và $AD \\perp CD$ nên $AD$ là đoạn vuông góc chung $\\Rightarrow d(SA, CD) = AD = {a_val}$."
                    },
                    {
                        "key": "d",
                        "text": "Góc giữa đường thẳng $SC$ và đường thẳng $AB$ bằng $45^\\circ$.",
                        "correct": False,
                        "explanation": f"Do $AB \\parallel CD$ nên góc cần tìm là $\\widehat{{SCD}}$. $\\tan\\widehat{{SCD}} = \\frac{{SD}}{{CD}} = \\frac{{{a_val}\\sqrt{{2}}}}{{{a_val}}} = \\sqrt{{2}} \\ne 1$, góc xấp xỉ $54.7^\\circ$."
                    }
                ]
            }
        ]

        sa_questions = [
            {
                "id": 1,
                "question": "Cho hình lập phương $ABCD.A'B'C'D'$. Tính côsin của góc giữa hai đường thẳng $AC$ và $DA'$ (viết kết quả dạng phân số thập phân làm tròn đến 2 chữ số thập phân).",
                "correctAnswer": "0.5",
                "acceptedAnswers": ["0.5", "0,5", "1/2"],
                "explanation": "Vì $DA' \\parallel CB'$ nên góc giữa $AC$ và $DA'$ bằng góc $\\widehat{B'CA}$. Tam giác $AB'C$ là tam giác đều nên góc bằng $60^\\circ \\Rightarrow \\cos 60^\\circ = 0.5$."
            },
            {
                "id": 2,
                "question": f"Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh ${a_val}$, $SA \\perp (ABCD)$ và $SA = {a_val}$. Tính góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABCD)$ (đơn vị: độ).",
                "correctAnswer": "45",
                "acceptedAnswers": ["45", "45.0", "45°"],
                "explanation": "$\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$."
            },
            {
                "id": 3,
                "question": f"Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $AB = 3, BC = 4$, $SA \\perp (ABC)$ và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
                "correctAnswer": "2.4",
                "acceptedAnswers": ["2.4", "2,4"],
                "explanation": "Vì $BC \\perp (SAB)$ nên kẻ $AH \\perp SB \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."
            },
            {
                "id": 4,
                "question": f"Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$.",
                "correctAnswer": "6",
                "acceptedAnswers": ["6", "6.0"],
                "explanation": "Đoạn vuông góc chung giữa $SA$ và $BC$ là cạnh đáy $AB = 6$."
            },
            {
                "id": 5,
                "question": "Một tuyến cáp treo nối từ trạm chân núi $A$ lên đỉnh tháp $S$ trên đỉnh đồi thẳng đứng. Đỉnh tháp $S$ có độ cao $300\\text{ m}$ so với mặt đất chân núi, khoảng cách nằm ngang từ $A$ đến chân đồi $H$ là $400\\text{ m}$. Một cabin cáp treo ở chính giữa đoạn cáp $AS$ có khoảng cách thẳng đứng xuống mặt đất nằm ngang là bao nhiêu mét?",
                "correctAnswer": "150",
                "acceptedAnswers": ["150", "150.0"],
                "explanation": "Cabin ở trung điểm $M$ của $AS$. Theo định lý đường trung bình hình thang: độ cao của $M$ bằng $\\frac{0 + 300}{2} = 150\\text{ m}$."
            },
            {
                "id": 6,
                "question": "Một giàn giáo công trình dạng hình hộp chữ nhật có kích thước dài $4\\text{ m}$, rộng $3\\text{ m}$, cao $12\\text{ m}$. Kỹ sư gắn một thanh giằng thép chéo nối từ một đỉnh đáy dưới lên đỉnh đối diện trần trên. Tính độ dài thanh giằng thép đó (mét).",
                "correctAnswer": "13",
                "acceptedAnswers": ["13", "13.0"],
                "explanation": "Đường chéo hình hộp chữ nhật: $d = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13\\text{ m}$."
            }
        ]

        exam_obj = {
            "id": f"cd3-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Góc & Khoảng Cách",
            "code": f"CD3-30{exam_idx}",
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
        "id": "cd3",
        "code": "CĐ 3",
        "title": "GÓC KHOẢNG CÁCH LỚP 11",
        "icon": "fa-solid fa-compass-drafting",
        "badge": "Lớp 11 • Kiến thức trọng tâm",
        "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-200",
        "description": "Góc giữa 2 đường thẳng, góc giữa đường thẳng và mặt phẳng, góc nhị diện; khoảng cách từ điểm đến mp, khoảng cách 2 đường chéo nhau và ứng dụng kiến trúc công trình.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd3()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
