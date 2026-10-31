# -*- coding: utf-8 -*-
"""
Chuyên đề 3: GÓC KHOẢNG CÁCH LỚP 11
Gồm Tóm tắt kiến thức + 5 đề luyện tập độc lập chuẩn cấu trúc 2025-2026
Mỗi đề có 2 câu trả lời ngắn VDC (Vận dụng cao - rất khó).
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
    <p class="text-[11.5pt] mb-2">Hình học không gian được ứng dụng trực tiếp trong kỹ thuật xây dựng nhà cao tầng, thiết kế giàn giáo chịu lực, xác định góc đón nắng tối ưu của pin mặt trời, và tính khoảng cách an toàn tĩnh không của đường dây tải điện.</p>
  </div>
</div>
"""

    exams = []

    # ==========================================
    # ĐỀ 1 (MÃ 301): Kiến trúc mái dốc & giàn không gian
    # ==========================================
    raw_mcqs_1 = [
        {"id": 1, "question": "**Câu 1:** Góc giữa hai đường thẳng song song trong không gian bằng bao nhiêu độ?",
         "options": {"A": "$0^\\circ$", "B": "$90^\\circ$", "C": "$180^\\circ$", "D": "$45^\\circ$"},
         "correct": "A", "explanation": "Theo quy ước, góc giữa hai đường thẳng song song hoặc trùng nhau bằng $0^\\circ$."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu vuông góc của đường thẳng $SC$ lên mặt phẳng $(ABC)$ là",
         "options": {"A": "Đường thẳng $AC$", "B": "Đường thẳng $AB$", "C": "Đường thẳng $BC$", "D": "Đường thẳng $SA$"},
         "correct": "A", "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, hình chiếu của $C$ là chính nó. Do đó hình chiếu của $SC$ là $AC$."},
        {"id": 3, "question": "**Câu 3:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng",
         "options": {"A": "$90^\\circ$", "B": "$45^\\circ$", "C": "$60^\\circ$", "D": "$30^\\circ$"},
         "correct": "A", "explanation": "Vì $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ là góc giữa $AB$ và $BC$, bằng $90^\\circ$."},
        {"id": 4, "question": "**Câu 4:** Cho hình chóp tứ giác đều $S.ABCD$ có tâm đáy là $O$. Đoạn thẳng nào sau đây biểu diễn khoảng cách từ đỉnh $S$ đến mặt phẳng đáy $(ABCD)$?",
         "options": {"A": "$SO$", "B": "$SA$", "C": "$SC$", "D": "$SB$"},
         "correct": "A", "explanation": "Trong chóp tứ giác đều, $SO \\perp (ABCD)$, do đó $d(S, (ABCD)) = SO$."},
        {"id": 5, "question": "**Câu 5:** Hai mặt phẳng phân biệt cùng vuông góc với một mặt phẳng thứ ba thì giao tuyến của chúng (nếu có) sẽ",
         "options": {"A": "Vuông góc với mặt phẳng thứ ba đó", "B": "Song song với mặt phẳng thứ ba đó", "C": "Nằm trong mặt phẳng thứ ba đó", "D": "Tạo với mặt phẳng thứ ba một góc $45^\\circ$"},
         "correct": "A", "explanation": "Định lý: Nếu hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba."},
        {"id": 6, "question": "**Câu 6:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai mặt phẳng song song $(ABCD)$ và $(A'B'C'D')$ bằng",
         "options": {"A": "$a$", "B": "$a\\sqrt{2}$", "C": "$a\\sqrt{3}$", "D": "$\\frac{a}{2}$"},
         "correct": "A", "explanation": "Khoảng cách giữa hai đáy của hình lập phương cạnh $a$ bằng đúng chiều cao $AA' = a$."},
        {"id": 7, "question": "**Câu 7:** Cho tứ diện đều $ABCD$. Góc giữa hai đường thẳng chéo nhau $AB$ và $CD$ bằng",
         "options": {"A": "$90^\\circ$", "B": "$60^\\circ$", "C": "$45^\\circ$", "D": "$30^\\circ$"},
         "correct": "A", "explanation": "Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc với nhau từng đôi một."},
        {"id": 8, "question": "**Câu 8:** Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$ và $SA \\perp (ABC)$. Mặt phẳng nào sau đây vuông góc với mặt phẳng $(SAB)$?",
         "options": {"A": "$(SBC)$", "B": "$(SAC)$", "C": "$(ABC)$", "D": "Cả $(SBC)$ và $(ABC)$"},
         "correct": "A", "explanation": "Vì $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow (SBC) \\perp (SAB)$."},
        {"id": 9, "question": "**Câu 9:** Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$, $SA \\perp (ABC)$ và $SA = a$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ bằng",
         "options": {"A": "$45^\\circ$", "B": "$30^\\circ$", "C": "$60^\\circ$", "D": "$90^\\circ$"},
         "correct": "A", "explanation": "Góc là $\\widehat{SBA}$. Tam giác $SAB$ vuông tại $A$ có $SA = AB = a$ nên tam giác vuông cân $\\Rightarrow \\widehat{SBA} = 45^\\circ$."},
        {"id": 10, "question": "**Câu 10:** Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Khoảng cách giữa $a$ và $(P)$ được tính bằng",
         "options": {"A": "Khoảng cách từ một điểm bất kỳ trên $a$ đến $(P)$", "B": "Độ dài đoạn vuông góc nối từ một điểm trên $(P)$ đến một điểm trên $a$", "C": "Khoảng cách từ gốc tọa độ đến $a$", "D": "Khoảng cách từ tâm của $(P)$ đến $a$"},
         "correct": "A", "explanation": "Theo định nghĩa, khoảng cách giữa đường thẳng song song với mặt phẳng bằng khoảng cách từ điểm bất kỳ trên đường thẳng đến mặt phẳng."},
        {"id": 11, "question": "**Câu 11:** Một cột cờ cao $8\\text{ m}$ vuông góc với mặt sân nằm ngang. Một sợi dây nối từ đỉnh cột cờ đến một cọc neo trên mặt đất cách chân cột $6\\text{ m}$. Chiều dài sợi dây cáp là",
         "options": {"A": "$10\\text{ m}$", "B": "$12\\text{ m}$", "C": "$14\\text{ m}$", "D": "$9\\text{ m}$"},
         "correct": "A", "explanation": "Theo định lý Pytago: $l = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10\\text{ m}$."},
        {"id": 12, "question": "**Câu 12:** Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$. Khoảng cách từ điểm $D$ đến mặt phẳng $(SAB)$ bằng",
         "options": {"A": "$a$", "B": "$a\\sqrt{2}$", "C": "$\\frac{a}{2}$", "D": "$2a$"},
         "correct": "A", "explanation": "Vì $DA \\perp AB$ và $DA \\perp SA$ nên $DA \\perp (SAB)$, do đó khoảng cách bằng $DA = a$."}
    ]

    raw_tfs_1 = [
        {"id": 1, "question": "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh bằng $4$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 4\\sqrt{3}$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAB)$.", "correct": True, "explanation": "Vì $BC \\perp AB$ và $BC \\perp SA$."},
             {"id": "b", "text": "Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.", "correct": False, "explanation": "$AC = 4\\sqrt{2}$. $\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{4\\sqrt{3}}{4\\sqrt{2}} = \\sqrt{1.5} \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."},
             {"id": "c", "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$ bằng $\\frac{4\\sqrt{6}}{3}$.", "correct": False, "explanation": "Hạ $AH \\perp SO$ với $O$ là tâm hình vuông. $OA = 2\\sqrt{2}$. $\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{OA^2} = \\frac{1}{48} + \\frac{1}{8} = \\frac{7}{48} \\Rightarrow AH = \\frac{4\\sqrt{3}}{\\sqrt{7}} \\ne \\frac{4\\sqrt{6}}{3}$."},
             {"id": "d", "text": "Mặt phẳng $(SAC)$ là mặt phẳng trung trực của đoạn thẳng $BD$.", "correct": True, "explanation": "$BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC)$ tại trung điểm $O$ của $BD$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 4, AD = 3, AA' = 12$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Độ dài đường chéo $AC'$ của hình hộp bằng 13.", "correct": True, "explanation": "$AC' = \\sqrt{4^2 + 3^2 + 12^2} = \\sqrt{16 + 9 + 144} = \\sqrt{169} = 13$."},
             {"id": "b", "text": "Khoảng cách giữa hai đường thẳng $AB$ và $C'D'$ bằng 12.", "correct": False, "explanation": "$AB \\parallel C'D'$. Khoảng cách bằng độ dài $BC' = \\sqrt{3^2 + 12^2} = \\sqrt{153} \\ne 12$."},
             {"id": "c", "text": "Sin của góc giữa đường chéo $AC'$ và mặt phẳng đáy $(ABCD)$ bằng $\\frac{12}{13}$.", "correct": True, "explanation": "Hình chiếu của $AC'$ lên $(ABCD)$ là $AC$. $\\sin \\widehat{C'AC} = \\frac{CC'}{AC'} = \\frac{12}{13}$."},
             {"id": "d", "text": "Khoảng cách giữa hai mặt phẳng song song $(ADD'A')$ và $(BCC'B')$ bằng 4.", "correct": True, "explanation": "Khoảng cách giữa hai mặt phẳng đối diện bằng $AB = 4$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một mái nhà của một trung tâm hội nghị có dạng hình chóp tứ giác đều $S.ABCD$ với đáy là hình vuông cạnh $20\\text{ m}$, chiều cao $SO = 10\\text{ m}$. Kỹ sư dự định lắp đặt các tấm pin mặt trời trên 4 mặt mái phẳng $(SAB), (SBC), (SCD), (SDA)$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hình chiếu vuông góc của đỉnh $S$ lên mặt phẳng trần nhà $(ABCD)$ là tâm $O$ của hình vuông đáy.", "correct": True, "explanation": "Theo tính chất hình chóp đều."},
             {"id": "b", "text": "Độ dài trung đoạn của chóp (đoạn nối $S$ với trung điểm cạnh đáy) bằng $10\\sqrt{2}\\text{ m}$.", "correct": True, "explanation": "Gọi $M$ là trung điểm $AB$, $OM = 10\\text{ m}$. $SM = \\sqrt{SO^2 + OM^2} = \\sqrt{10^2 + 10^2} = 10\\sqrt{2}\\text{ m}$."},
             {"id": "c", "text": "Góc nghiêng của mặt phẳng mái che $(SAB)$ so với trần nhà nằm ngang bằng $45^\\circ$.", "correct": True, "explanation": "Góc giữa $(SAB)$ và đáy là $\\widehat{SMO}$. $\\tan \\widehat{SMO} = \\frac{SO}{OM} = \\frac{10}{10} = 1 \\Rightarrow \\widehat{SMO} = 45^\\circ$."},
             {"id": "d", "text": "Tổng diện tích của 4 mặt mái che bằng $400\\sqrt{3}\\text{ m}^2$.", "correct": False, "explanation": "Diện tích mỗi mặt tam giác cân: $S_1 = \\frac{1}{2} \\cdot 20 \\cdot 10\\sqrt{2} = 100\\sqrt{2}$. Tổng 4 mặt là $400\\sqrt{2}\\text{ m}^2 \\ne 400\\sqrt{3}$."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$, với $OA = a, OB = b, OC = c$. Gọi $H$ là hình chiếu vuông góc của $O$ lên mặt phẳng $(ABC)$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "$H$ là trực tâm của tam giác $ABC$.", "correct": True, "explanation": "Tính chất kinh điển của tứ diện vuông: hình chiếu của $O$ lên mặt đối diện là trực tâm."},
             {"id": "b", "text": "Công thức tính độ dài đường cao $OH$ là $\\frac{1}{OH^2} = \\frac{1}{a^2} + \\frac{1}{b^2} + \\frac{1}{c^2}$.", "correct": True, "explanation": "Hệ thức lượng mở rộng trong không gian cho tứ diện vuông."},
             {"id": "c", "text": "Góc giữa đường thẳng $OA$ và mặt phẳng $(ABC)$ là góc $\\widehat{OAH}$.", "correct": True, "explanation": "Hình chiếu của $OA$ lên $(ABC)$ là $AH$, nên góc là $\\widehat{OAH}$."},
             {"id": "d", "text": "Nếu $a = b = c$ thì góc giữa các mặt phẳng bên và mặt phẳng $(ABC)$ đều bằng $60^\\circ$.", "correct": False, "explanation": "$\\cos \\varphi = \\frac{S_{OAB}}{S_{ABC}} = \\frac{a^2/2}{a^2\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} \\ne \\frac{1}{2}$ nên không bằng $60^\\circ$."}
         ]}
    ]

    raw_sa_1 = [
        {"id": 1, "question": "**Câu 1:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và $SA = 4$. Khoảng cách từ đỉnh $S$ đến mặt phẳng đáy $(ABC)$ bằng bao nhiêu?",
         "correctAnswer": "4", "acceptedAnswers": ["4", "4.0"],
         "explanation": "Vì $SA \\perp (ABC)$ nên khoảng cách từ $S$ đến $(ABC)$ chính bằng $SA = 4$."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ với $AB = 3, BC = 4$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
         "correctAnswer": "2.4", "acceptedAnswers": ["2.4", "2,4"],
         "explanation": "Kẻ $AH \\perp SB$. Vì $BC \\perp (SAB) \\Rightarrow BC \\perp AH \\Rightarrow AH \\perp (SBC)$. $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{4 \\times 3}{\\sqrt{16 + 9}} = \\frac{12}{5} = 2.4$."},
        {"id": 3, "question": "**Câu 3:** Cho hình chóp tứ giác đều $S.ABCD$ có đáy là hình vuông cạnh 4, chiều cao $SO = 2\\sqrt{2}$. Tính số đo góc (đơn vị: độ) giữa cạnh bên $SA$ và mặt phẳng đáy $(ABCD)$.",
         "correctAnswer": "45", "acceptedAnswers": ["45", "45.0"],
         "explanation": "Đường chéo $AC = 4\\sqrt{2} \\Rightarrow OA = 2\\sqrt{2}$. Vì $SO = OA = 2\\sqrt{2}$ nên tam giác $SOA$ vuông cân tại $O \\Rightarrow \\widehat{SAO} = 45^\\circ$."},
        {"id": 4, "question": "**Câu 4:** Một cột ăng-ten cao $24\\text{ m}$ dựng vuông góc với mặt sân nằm ngang. Người ta dùng 4 sợi dây cáp thép nối từ đỉnh cột xuống 4 cọc neo trên mặt đất cách đều chân cột $7\\text{ m}$. Tính tổng chiều dài 4 sợi dây cáp thép đó (đơn vị: mét).",
         "correctAnswer": "100", "acceptedAnswers": ["100", "100.0"],
         "explanation": "Chiều dài mỗi sợi dây: $l = \\sqrt{24^2 + 7^2} = \\sqrt{576 + 49} = \\sqrt{625} = 25\\text{ m}$. Tổng 4 sợi là $4 \\times 25 = 100\\text{ m}$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 6$, cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 8$. Gọi $M$ là trung điểm của cạnh $CD$. Tính khoảng cách giữa hai đường thẳng chéo nhau $BM$ và $SC$ (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "1.9", "acceptedAnswers": ["1.9", "1,9"],
         "explanation": "Gắn hệ trục tọa độ với $A(0;0;0), B(6;0;0), C(6;6;0), D(0;6;0), S(0;0;8)$. Khi đó $M(3;6;0)$. Vectơ chỉ phương: $\\vec{u}_{BM} = (-3; 6; 0) \\parallel (-1; 2; 0)$, $\\vec{u}_{SC} = (6; 6; -8) \\parallel (3; 3; -4)$. Vectơ pháp tuyến chung: $\\vec{n} = (-1; 2; 0) \\times (3; 3; -4) = (-8; -4; -9)$. Vectơ $\\vec{BS} = (-6; 0; 8)$. Khoảng cách giữa hai đường thẳng: $d = \\frac{|\\vec{BS} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|(-6)(-8) + 8(-9)|}{\\sqrt{64 + 16 + 81}} = \\frac{24}{\\sqrt{161}} \\approx 1.891 \\approx 1.9$."},
        {"id": 6, "question": "**Câu 6 (VDC):** Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$, $AB = 6, BC = 8$, chiều cao lăng trụ $AA' = 12$. Gọi $I$ là trung điểm của cạnh $A'C'$. Tính khoảng cách giữa hai đường thẳng chéo nhau $B'C$ và $AI$ (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "3.8", "acceptedAnswers": ["3.8", "3,8"],
         "explanation": "Gắn hệ tọa độ với gốc tại $B(0;0;0)$, $BA$ dọc $Ox$ ($A(6;0;0)$), $BC$ dọc $Oy$ ($C(0;8;0)$), $BB'$ dọc $Oz$ ($B'(0;0;12)$). Khi đó $A'(6;0;12), C'(0;8;12) \\Rightarrow I(3;4;12)$. Ta có $\\vec{AI} = (-3; 4; 12)$, $\\vec{B'C} = (0; 8; -12) \\parallel (0; 2; -3)$. Vectơ pháp tuyến chung $\\vec{n} = \\vec{AI} \\times (0; 2; -3) = (-36; -9; -6) \\parallel (12; 3; 2)$. Vectơ $\\vec{AB'} = (-6; 0; 12)$. Khoảng cách giữa hai đường thẳng: $d = \\frac{|-6(12) + 12(2)|}{\\sqrt{144 + 9 + 4}} = \\frac{48}{\\sqrt{157}} \\approx 3.83 \\approx 3.8$."}
    ]

    exam1 = {
        "id": "cd3-exam-1", "examNumber": 1, "title": "Đề Số 1: Kiến Trúc Mái Dốc & Giàn Không Gian",
        "code": "CD3-301", "badge": "Mã Đề 301", "badgeColor": "bg-blue-50 text-blue-800 border-blue-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_1, 301), "tfQuestions": raw_tfs_1, "saQuestions": raw_sa_1, "essayQuestions": []
    }
    validate_exam(exam1)
    exams.append(exam1)

    # ==========================================
    # ĐỀ 2 (MÃ 302): Tháp viễn thông, cáp giằng & góc nâng
    # ==========================================
    raw_mcqs_2 = [
        {"id": 1, "question": "**Câu 1:** Cho đường thẳng $a \\perp (P)$. Mọi đường thẳng $b$ nằm trong mặt phẳng $(P)$ đều có tính chất gì đối với $a$?",
         "options": {"A": "$a \\perp b$", "B": "$a \\parallel b$", "C": "$a$ cắt $b$", "D": "$a$ chéo $b$"},
         "correct": "A", "explanation": "Theo định nghĩa đường thẳng vuông góc với mặt phẳng."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Góc giữa đường thẳng $SA$ và mặt phẳng đáy $(ABC)$ bằng",
         "options": {"A": "$90^\\circ$", "B": "$0^\\circ$", "C": "$45^\\circ$", "D": "$60^\\circ$"},
         "correct": "A", "explanation": "Vì $SA \\perp (ABC)$ nên góc giữa nó và mặt phẳng bằng $90^\\circ$."},
        {"id": 3, "question": "**Câu 3:** Trong không gian, cho hai đường thẳng phân biệt $a$ và $b$ cùng vuông góc với một mặt phẳng $(P)$. Mối quan hệ giữa $a$ và $b$ là",
         "options": {"A": "$a \\parallel b$", "B": "$a \\perp b$", "C": "$a$ chéo $b$", "D": "$a$ cắt $b$"},
         "correct": "A", "explanation": "Hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì song song với nhau."},
        {"id": 4, "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Khoảng cách từ điểm $A$ đến mặt phẳng $(CDD'C')$ bằng độ dài đoạn thẳng nào?",
         "options": {"A": "$AD$", "B": "$AC$", "C": "$AB'$", "D": "$AA'$"},
         "correct": "A", "explanation": "Vì $AD \\perp (CDD'C')$ nên $d(A, (CDD'C')) = AD$."},
        {"id": 5, "question": "**Câu 5:** Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Góc giữa mặt phẳng $(SBC)$ và mặt phẳng đáy $(ABCD)$ là góc nào?",
         "options": {"A": "$\\widehat{SBA}$", "B": "$\\widehat{SCA}$", "C": "$\\widehat{SDA}$", "D": "$\\widehat{SOA}$"},
         "correct": "A", "explanation": "$BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$. Do đó góc là $\\widehat{SBA}$."},
        {"id": 6, "question": "**Câu 6:** Cho tam giác $ABC$ vuông tại $A$ trong mặt phẳng $(P)$. Lấy điểm $S$ nằm ngoài $(P)$ sao cho $SA \\perp (P)$. Khẳng định nào sau đây SAI?",
         "options": {"A": "$SC \\perp BC$", "B": "$AB \\perp (SAC)$", "C": "$AC \\perp (SAB)$", "D": "$BC \\perp (SAB)$"},
         "correct": "A", "explanation": "$AB \\perp AC$ và $AB \\perp SA \\Rightarrow AB \\perp (SAC)$. Tương tự $AC \\perp (SAB)$. Còn $SC$ không vuông góc với $BC$."},
        {"id": 7, "question": "**Câu 7:** Một máy bay đang cất cánh từ đường băng theo góc nâng $30^\\circ$. Sau khi bay được quãng đường $4000\\text{ m}$, máy bay đạt độ cao bằng bao nhiêu?",
         "options": {"A": "$2000\\text{ m}$", "B": "$2000\\sqrt{3}\\text{ m}$", "C": "$4000\\text{ m}$", "D": "$1000\\text{ m}$"},
         "correct": "A", "explanation": "$h = 4000 \\times \\sin 30^\\circ = 4000 \\times 0.5 = 2000\\text{ m}$."},
        {"id": 8, "question": "**Câu 8:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Đường thẳng nào sau đây chéo nhau với đường thẳng $AA'$?",
         "options": {"A": "$BC$", "B": "$BB'$", "C": "$CC'$", "D": "$DD'$"},
         "correct": "A", "explanation": "$AA'$ và $BC$ không cùng thuộc mặt phẳng nào và không cắt nhau nên chéo nhau."},
        {"id": 9, "question": "**Câu 9:** Khoảng cách giữa hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ là",
         "options": {"A": "Khoảng cách từ một điểm bất kỳ trên $(\\alpha)$ đến $(\\beta)$", "B": "Khoảng cách giữa hai gốc tọa độ", "C": "Độ dài đoạn thẳng nối hai tâm", "D": "Nửa khoảng cách từ gốc $O$"},
         "correct": "A", "explanation": "Đúng theo định nghĩa khoảng cách giữa hai mặt phẳng song song."},
        {"id": 10, "question": "**Câu 10:** Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, cạnh bên bằng $a$. Góc giữa mặt phẳng $(SAB)$ và mặt phẳng $(SCD)$ có cosin bằng",
         "options": {"A": "$\\frac{1}{3}$", "B": "$\\frac{1}{2}$", "C": "$\\frac{\\sqrt{3}}{2}$", "D": "$\\frac{\\sqrt{2}}{2}$"},
         "correct": "A", "explanation": "Góc giữa hai mặt phẳng đối diện của hình chóp đều có cạnh bên bằng cạnh đáy có $\\cos \\varphi = 1/3$."},
        {"id": 11, "question": "**Câu 11:** Cho tứ diện $OABC$ có $OA = OB = OC = a$ và đôi một vuông góc. Khoảng cách từ $O$ đến mặt phẳng $(ABC)$ bằng",
         "options": {"A": "$\\frac{a\\sqrt{3}}{3}$", "B": "$a\\sqrt{3}$", "C": "$\\frac{a\\sqrt{2}}{2}$", "D": "$\\frac{a}{3}$"},
         "correct": "A", "explanation": "$\\frac{1}{h^2} = \\frac{3}{a^2} \\Rightarrow h = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$."},
        {"id": 12, "question": "**Câu 12:** Cho đường thẳng $d$ không vuông góc với mặt phẳng $(P)$. Số đường thẳng nằm trong $(P)$ vuông góc với $d$ là",
         "options": {"A": "Vô số", "B": "Đúng 1", "C": "Đúng 2", "D": "Không có đường nào"},
         "correct": "A", "explanation": "Mọi đường thẳng trong $(P)$ vuông góc với hình chiếu $d'$ của $d$ đều vuông góc với $d$ (định lý 3 đường vuông góc), do đó có vô số."}
    ]

    raw_tfs_2 = [
        {"id": 1, "question": "**Câu 1:** Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a = 6$, cạnh bên $SA \\perp (ABC)$ và $SA = 3\\sqrt{3}$. Gọi $M$ là trung điểm của $BC$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đoạn thẳng $AM$ vuông góc với đường thẳng $BC$.", "correct": True, "explanation": "Trong tam giác đều, trung tuyến đồng thời là đường cao."},
             {"id": "b", "text": "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAM)$.", "correct": True, "explanation": "Vì $BC \\perp AM$ và $BC \\perp SA$."},
             {"id": "c", "text": "Góc giữa mặt phẳng $(SBC)$ và mặt phẳng đáy $(ABC)$ bằng $45^\\circ$.", "correct": True, "explanation": "Góc là $\\widehat{SMA}$. $AM = 6\\sqrt{3}/2 = 3\\sqrt{3}$. Vì $SA = AM = 3\\sqrt{3}$ nên tam giác vuông cân $\\Rightarrow \\widehat{SMA} = 45^\\circ$."},
             {"id": "d", "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$ bằng $3\\sqrt{6}$.", "correct": False, "explanation": "$d = \\frac{SA \\cdot AM}{\\sqrt{SA^2 + AM^2}} = \\frac{3\\sqrt{3}}{\\sqrt{2}} = \\frac{3\\sqrt{6}}{2} \\ne 3\\sqrt{6}$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a = 4$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Góc giữa hai đường thẳng $AC$ và $A'D$ bằng $60^\\circ$.", "correct": True, "explanation": "Nối $B'C \\parallel A'D$. Tam giác $ACB'$ là tam giác đều (ba cạnh là ba đường chéo bằng nhau $4\\sqrt{2}$), nên góc bằng $60^\\circ$."},
             {"id": "b", "text": "Đường thẳng $AC'$ vuông góc với mặt phẳng $(A'BD)$.", "correct": True, "explanation": "Tính chất đặc trưng của hình lập phương."},
             {"id": "c", "text": "Khoảng cách giữa hai mặt phẳng song song $(A'BD)$ và $(CB'D')$ bằng $\\frac{4\\sqrt{3}}{3}$.", "correct": True, "explanation": "Đoạn $AC'$ có độ dài $4\\sqrt{3}$ bị hai mặt phẳng này chia thành 3 phần bằng nhau, mỗi phần dài $\\frac{4\\sqrt{3}}{3}$."},
             {"id": "d", "text": "Khoảng cách giữa hai đường thẳng chéo nhau $AA'$ và $CD$ bằng $4\\sqrt{2}$.", "correct": False, "explanation": "Đoạn vuông góc chung là $AD$ có độ dài bằng $4$, không phải $4\\sqrt{2}$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một tháp truyền hình cao $60\\text{ m}$ dựng thẳng đứng trên mặt đất bằng phẳng tại vị trí $O$. Từ hai trạm quan sát $A$ và $B$ trên mặt đất, người ta đo được góc nâng đến đỉnh tháp $S$ lần lượt là $45^\\circ$ và $30^\\circ$. Biết góc $\\widehat{AOB} = 90^\\circ$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Khoảng cách từ trạm $A$ đến chân tháp $O$ bằng $60\\text{ m}$.", "correct": True, "explanation": "Tam giác $SOA$ vuông tại $O$ có góc $45^\\circ$ nên $OA = SO = 60\\text{ m}$."},
             {"id": "b", "text": "Khoảng cách từ trạm $B$ đến chân tháp $O$ bằng $60\\sqrt{3}\\text{ m}$.", "correct": True, "explanation": "$OB = \\frac{SO}{\\tan 30^\\circ} = 60\\sqrt{3}\\text{ m}$."},
             {"id": "c", "text": "Khoảng cách giữa hai trạm quan sát $A$ và $B$ bằng $120\\text{ m}$.", "correct": True, "explanation": "Tam giác $OAB$ vuông tại $O$: $AB = \\sqrt{OA^2 + OB^2} = \\sqrt{60^2 + (60\\sqrt{3})^2} = \\sqrt{3600 + 10800} = \\sqrt{14400} = 120\\text{ m}$."},
             {"id": "d", "text": "Khoảng cách từ đỉnh tháp $S$ đến đoạn thẳng $AB$ bằng $30\\sqrt{7}\\text{ m}$.", "correct": False, "explanation": "Chiều cao từ $O$ đến $AB$: $OH = \\frac{OA \\cdot OB}{AB} = \\frac{60 \\times 60\\sqrt{3}}{120} = 30\\sqrt{3}$. Khi đó $SH = \\sqrt{SO^2 + OH^2} = \\sqrt{3600 + 2700} = \\sqrt{6300} = 30\\sqrt{7}\\text{ m}$. Khẳng định này là ĐÚNG. Sửa text thành 'bằng 80 m' -> SAI."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$, $SO \\perp (ABCD)$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Mặt phẳng $(SAC)$ vuông góc với mặt phẳng $(SBD)$.", "correct": True, "explanation": "Vì $AC \\perp BD$ và $SO \\perp AC \\Rightarrow AC \\perp (SBD) \\Rightarrow (SAC) \\perp (SBD)$."},
             {"id": "b", "text": "Hình chiếu của tam giác $SAB$ lên mặt phẳng đáy là tam giác $OAB$.", "correct": True, "explanation": "Vì hình chiếu của $S$ là $O$, $A$ và $B$ nằm trên đáy."},
             {"id": "c", "text": "Khoảng cách từ $S$ đến các cạnh đáy của hình thoi luôn bằng nhau.", "correct": True, "explanation": "Vì $O$ cách đều 4 cạnh hình thoi và $SO \\perp đáy$."},
             {"id": "d", "text": "Góc giữa cạnh bên $SA$ và mặt phẳng đáy bằng góc giữa cạnh bên $SB$ và mặt phẳng đáy.", "correct": False, "explanation": "Vì $OA \\ne OB$ (hình thoi không phải hình vuông) nên $\\tan \\widehat{SAO} \\ne \\tan \\widehat{SBO}$."}
         ]}
    ]
    raw_tfs_2[2]["items"][3]["text"] = "Khoảng cách từ đỉnh tháp $S$ đến đoạn thẳng $AB$ bằng $80\text{ m}$."
    raw_tfs_2[2]["items"][3]["correct"] = False

    raw_sa_2 = [
        {"id": 1, "question": "**Câu 1:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$. Biết $OA = 3, OB = 4, OC = 12$. Tính khoảng cách từ $O$ đến mặt phẳng $(ABC)$ (làm tròn đến hàng phần mười).",
         "correctAnswer": "2.4", "acceptedAnswers": ["2.4", "2,4"],
         "explanation": "$\\frac{1}{h^2} = \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{144} = \\frac{16 + 9 + 1}{144} = \\frac{26}{144} \\Rightarrow h = \\frac{12}{\\sqrt{26}} \\approx 2.353 \\approx 2.4$."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh bằng 6, $SA \\perp (ABC)$ và $SA = 3$. Tính khoảng cách từ điểm $S$ đến đường thẳng $BC$.",
         "correctAnswer": "6", "acceptedAnswers": ["6", "6.0"],
         "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = 6\\sqrt{3}/2 = 3\\sqrt{3}$. Vì $BC \\perp AM$ và $BC \\perp SA$ nên $BC \\perp SM$. Do đó khoảng cách là $SM = \\sqrt{SA^2 + AM^2} = \\sqrt{9 + 27} = \\sqrt{36} = 6$."},
        {"id": 3, "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Tính khoảng cách giữa hai đường thẳng song song $AB$ và $C'D'$.",
         "correctAnswer": "6.4", "acceptedAnswers": ["6.4", "6,4"],
         "explanation": "Khoảng cách giữa hai đường song song $AB$ và $C'D'$ bằng độ dài đoạn chéo mặt bên $AD' = \\sqrt{AD^2 + AA'^2} = \\sqrt{4^2 + 5^2} = \\sqrt{41} \\approx 6.4$."},
        {"id": 4, "question": "**Câu 4:** Một cầu trượt nước tại công viên có độ dốc thẳng dài $20\\text{ m}$, điểm xuất phát cao hơn mặt nước $12\\text{ m}$. Tính góc nghiêng (độ) của máng trượt so với mặt nước nằm ngang (làm tròn đến hàng phần mười).",
         "correctAnswer": "36.9", "acceptedAnswers": ["36.9", "36,9"],
         "explanation": "$\\sin \\alpha = \\frac{12}{20} = 0.6 \\Rightarrow \\alpha = \\arcsin(0.6) \\approx 36.87^\\circ \\approx 36.9^\\circ$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật có $AB = 4, AD = 3$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = 12$. Tính khoảng cách giữa hai đường thẳng chéo nhau $AC$ và $SB$ (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "2.4", "acceptedAnswers": ["2.4", "2,4"],
         "explanation": "Gắn hệ tọa độ với $A(0;0;0), B(4;0;0), D(0;3;0), C(4;3;0), S(0;0;12)$. Ta có $\\vec{u}_{AC} = (4; 3; 0)$, $\\vec{u}_{SB} = (4; 0; -12) \\parallel (1; 0; -3)$. Vectơ pháp tuyến chung: $\\vec{n} = (4; 3; 0) \\times (1; 0; -3) = (-9; 12; -3) \\parallel (3; -4; 1)$. Vectơ $\\vec{AS} = (0; 0; 12)$. Khoảng cách giữa hai đường: $d = \\frac{|\\vec{AS} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|12(1)|}{\\sqrt{9 + 16 + 1}} = \\frac{12}{\\sqrt{26}} \\approx 2.353 \\approx 2.4$."},
        {"id": 6, "question": "**Câu 6 (VDC):** Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $6$, cạnh bên bằng $2\\sqrt{7}$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BC$ (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "3.9", "acceptedAnswers": ["3.9", "3,9"],
         "explanation": "Gọi $O$ là tâm đáy $ABC$, $M$ là trung điểm $BC$. Ta có $AM = 6\\sqrt{3}/2 = 3\\sqrt{3}$, $AO = 2\\sqrt{3}, OM = \\sqrt{3}$. Chiều cao $SO = \\sqrt{SA^2 - AO^2} = \\sqrt{28 - 12} = 4$. Do $BC \\perp (SAM)$, mặt phẳng $(P)$ qua $BC$ song song với $SA$ sẽ cắt $(SAM)$ theo đường thẳng qua $M$ song song $SA$. Do đó khoảng cách giữa $SA$ và $BC$ chính bằng khoảng cách từ điểm $A$ (hoặc $M$) đến đường thẳng kia trong tam giác $SAM$. Chiều cao hạ từ $M$ xuống $SA$ trong $\\triangle SAM$: Diện tích $S_{\\triangle SAM} = \\frac{1}{2} \\cdot SO \\cdot AM = \\frac{1}{2} \\cdot 4 \\cdot 3\\sqrt{3} = 6\\sqrt{3}$. Chiều cao $h = \\frac{2 S}{SA} = \\frac{12\\sqrt{3}}{2\\sqrt{7}} = \\frac{6\\sqrt{21}}{7} \\approx 3.928 \\approx 3.9$."}
    ]

    exam2 = {
        "id": "cd3-exam-2", "examNumber": 2, "title": "Đề Số 2: Tháp Viễn Thông, Cáp Giằng & Góc Nâng",
        "code": "CD3-302", "badge": "Mã Đề 302", "badgeColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_2, 302), "tfQuestions": raw_tfs_2, "saQuestions": raw_sa_2, "essayQuestions": []
    }
    validate_exam(exam2)
    exams.append(exam2)

    # ==========================================
    # ĐỀ 3 (MÃ 303): Cầu dây văng & giàn không gian
    # ==========================================
    raw_mcqs_3 = [
        {"id": 1, "question": "**Câu 1:** Trong không gian, cho hai mặt phẳng $(P)$ và $(Q)$ cắt nhau theo giao tuyến $d$. Để xác định góc giữa hai mặt phẳng, ta xác định góc giữa hai đường thẳng cùng vuông góc với $d$ và",
         "options": {"A": "Lần lượt nằm trong $(P)$ và $(Q)$", "B": "Cùng nằm trong $(P)$", "C": "Cùng song song với $(P)$", "D": "Cùng chéo nhau với $d$"},
         "correct": "A", "explanation": "Đúng theo định nghĩa góc giữa hai mặt phẳng cắt nhau."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu vuông góc của điểm $S$ lên mặt phẳng đáy $(ABC)$ là",
         "options": {"A": "Điểm $A$", "B": "Điểm $B$", "C": "Điểm $C$", "D": "Trọng tâm tam giác $ABC$"},
         "correct": "A", "explanation": "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ là $A$."},
        {"id": 3, "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Đường thẳng nào vuông góc với mặt phẳng $(ABCD)$?",
         "options": {"A": "$AA'$", "B": "$AB$", "C": "$AD$", "D": "$AC$"},
         "correct": "A", "explanation": "Các cạnh bên của hình hộp chữ nhật vuông góc với hai đáy."},
        {"id": 4, "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'B'$ và $CD$ bằng",
         "options": {"A": "$0^\\circ$", "B": "$90^\\circ$", "C": "$45^\\circ$", "D": "$180^\\circ$"},
         "correct": "A", "explanation": "$A'B' \\parallel AB \\parallel CD$ nên góc giữa chúng bằng $0^\\circ$."},
        {"id": 5, "question": "**Câu 5:** Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$ bằng độ dài đoạn thẳng nào?",
         "options": {"A": "Đoạn vuông góc chung của $a$ và $b$", "B": "Đoạn thẳng nối điểm bất kỳ trên $a$ với điểm bất kỳ trên $b$", "C": "Đoạn thẳng ngắn nhất nối hai trung điểm", "D": "Đoạn nối hai hình chiếu lên mặt phẳng nằm ngang"},
         "correct": "A", "explanation": "Theo định nghĩa đoạn vuông góc chung."},
        {"id": 6, "question": "**Câu 6:** Cho hình chóp $S.ABC$ có đáy $ABC$ vuông cân tại $A$, $SA \\perp (ABC)$. Mặt phẳng $(SAB)$ và $(SAC)$",
         "options": {"A": "Vuông góc với nhau", "B": "Song song với nhau", "C": "Trùng nhau", "D": "Tạo với nhau góc $60^\\circ$"},
         "correct": "A", "explanation": "$AB \\perp AC$, $AB \\perp SA \\Rightarrow AB \\perp (SAC) \\Rightarrow (SAB) \\perp (SAC)$."},
        {"id": 7, "question": "**Câu 7:** Một mái tôn nhà xưởng nghiêng một góc $30^\\circ$ so với mặt phẳng nằm ngang. Chiều rộng mặt bằng nhà xưởng theo phương ngang là $10\\text{ m}$. Chiều dài mái tôn dốc là",
         "options": {"A": "$\\frac{20\\sqrt{3}}{3}\\text{ m}$", "B": "$5\\text{ m}$", "C": "$20\\text{ m}$", "D": "$10\\sqrt{3}\\text{ m}$"},
         "correct": "A", "explanation": "$L = \\frac{10}{\\cos 30^\\circ} = \\frac{10}{\\sqrt{3}/2} = \\frac{20\\sqrt{3}}{3}\\text{ m}$."},
        {"id": 8, "question": "**Câu 8:** Cho hình chóp tứ giác đều $S.ABCD$. Đường thẳng nào sau đây vuông góc với mặt phẳng $(SAC)$?",
         "options": {"A": "$BD$", "B": "$AB$", "C": "$CD$", "D": "$SO$"},
         "correct": "A", "explanation": "Vì đáy là hình vuông nên $BD \\perp AC$. Lại có $BD \\perp SO \\Rightarrow BD \\perp (SAC)$."},
        {"id": 9, "question": "**Câu 9:** Cho hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau. Một đường thẳng $d$ nằm trong $(P)$ và vuông góc với giao tuyến của hai mặt phẳng thì",
         "options": {"A": "$d \\perp (Q)$", "B": "$d \\parallel (Q)$", "C": "$d$ nằm trong $(Q)$", "D": "$d$ tạo với $(Q)$ góc $45^\\circ$"},
         "correct": "A", "explanation": "Định lý: Nếu hai mặt phẳng vuông góc với nhau, bất kỳ đường thẳng nào nằm trong mặt phẳng này và vuông góc với giao tuyến thì vuông góc với mặt phẳng kia."},
        {"id": 10, "question": "**Câu 10:** Cho tứ diện đều $ABCD$ cạnh $a$. Khoảng cách từ đỉnh $A$ đến mặt phẳng đối diện $(BCD)$ bằng",
         "options": {"A": "$\\frac{a\\sqrt{6}}{3}$", "B": "$\\frac{a\\sqrt{3}}{2}$", "C": "$\\frac{a\\sqrt{2}}{2}$", "D": "$\\frac{a\\sqrt{3}}{3}$"},
         "correct": "A", "explanation": "Chiều cao tứ diện đều cạnh $a$ bằng $\\frac{a\\sqrt{6}}{3}$."},
        {"id": 11, "question": "**Câu 11:** Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ có thể nhận giá trị nào sau đây?",
         "options": {"A": "$45^\\circ$", "B": "$120^\\circ$", "C": "$-30^\\circ$", "D": "$180^\\circ$"},
         "correct": "A", "explanation": "Góc giữa đường thẳng và mặt phẳng luôn nằm trong khoảng $[0^\\circ; 90^\\circ]$."},
        {"id": 12, "question": "**Câu 12:** Cho hình lập phương $ABCD.A'B'C'D'$. Khoảng cách giữa hai đường thẳng $AA'$ và $CC'$ bằng",
         "options": {"A": "Độ dài đoạn thẳng $AC$", "B": "Độ dài đoạn thẳng $AB$", "C": "Độ dài đoạn thẳng $AD'$", "D": "Độ dài đoạn thẳng $AC'$"},
         "correct": "A", "explanation": "Khoảng cách giữa hai cạnh đối diện bằng độ dài đường chéo đáy $AC$."}
    ]

    raw_tfs_3 = [
        {"id": 1, "question": "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 6$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Tam giác $SCD$ là tam giác vuông tại $D$.", "correct": True, "explanation": "$CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD) \\Rightarrow CD \\perp SD$."},
             {"id": "b", "text": "Góc giữa đường thẳng $SD$ và mặt phẳng $(ABCD)$ bằng $45^\\circ$.", "correct": True, "explanation": "Tam giác $SAD$ vuông cân tại $A$ ($SA = AD = 6$) nên góc bằng $45^\\circ$."},
             {"id": "c", "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(SCD)$ bằng $3\\sqrt{2}$.", "correct": True, "explanation": "Hạ $AH \\perp SD$. Vì $SA = AD = 6$ nên $AH = 6/\\sqrt{2} = 3\\sqrt{2}$."},
             {"id": "d", "text": "Khoảng cách giữa hai đường thẳng $AB$ và $SC$ bằng $3\\sqrt{2}$.", "correct": True, "explanation": "$AB \\parallel CD \\Rightarrow AB \\parallel (SCD) \\Rightarrow d(AB, SC) = d(A, (SCD)) = 3\\sqrt{2}$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$ với $AB = 3, AC = 4$ và cạnh bên $AA' = 5$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Mặt phẳng $(ABB'A')$ vuông góc với mặt phẳng $(ACC'A')$.", "correct": True, "explanation": "Vì $AB \\perp AC$ và $AA'$ vuông góc với đáy."},
             {"id": "b", "text": "Độ dài cạnh $BC$ của tam giác đáy bằng 5.", "correct": True, "explanation": "$BC = \\sqrt{3^2 + 4^2} = 5$."},
             {"id": "c", "text": "Khoảng cách từ điểm $A$ đến mặt phẳng $(BCC'B')$ bằng $2.4$.", "correct": True, "explanation": "Hạ $AH \\perp BC \\Rightarrow AH = \\frac{AB \\cdot AC}{BC} = \\frac{12}{5} = 2.4$."},
             {"id": "d", "text": "Góc giữa đường thẳng $A'B$ và mặt phẳng $(ACC'A')$ bằng $45^\\circ$.", "correct": False, "explanation": "Hình chiếu của $A'B$ lên $(ACC'A')$ là $A'A$. $\\tan = AB/AA' = 3/5 \\ne 1$ nên không bằng $45^\\circ$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một cây cầu dây văng có trụ tháp thẳng đứng $SO = 30\\text{ m}$ trên mố trụ cầu $O$. Hai sợi dây văng $SA$ và $SB$ nối tới 2 điểm $A, B$ trên mặt sàn cầu sao cho $OA = 40\\text{ m}, OB = 40\\text{ m}$ và tam giác $OAB$ vuông tại $O$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Khoảng cách giữa hai điểm neo cáp $AB = 40\\sqrt{2}\\text{ m}$.", "correct": True, "explanation": "Tam giác vuông cân cạnh 40 nên huyền là $40\\sqrt{2}$."},
             {"id": "b", "text": "Chiều dài mỗi sợi dây văng $SA = SB = 50\\text{ m}$.", "correct": True, "explanation": "$SA = \\sqrt{30^2 + 40^2} = 50\\text{ m}$."},
             {"id": "c", "text": "Hình chiếu vuông góc của đỉnh tháp $S$ lên mặt sàn cầu là tâm $O$.", "correct": True, "explanation": "Vì trụ tháp thẳng đứng vuông góc với mặt sàn."},
             {"id": "d", "text": "Góc giữa mặt phẳng tạo bởi hai sợi cáp $(SAB)$ và mặt sàn cầu $(OAB)$ bằng $60^\\circ$.", "correct": False, "explanation": "Gọi $M$ là trung điểm $AB$, $OM = 20\\sqrt{2}$. $\\tan = 30/(20\\sqrt{2}) \\approx 1.06 \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Chiều cao của khối chóp bằng $\\frac{a\\sqrt{2}}{2}$.", "correct": True, "explanation": "$SO = \\sqrt{a^2 - (a\\sqrt{2}/2)^2} = \\frac{a\\sqrt{2}}{2}$."},
             {"id": "b", "text": "Góc giữa cạnh bên và mặt phẳng đáy bằng $45^\\circ$.", "correct": True, "explanation": "Tam giác $SOA$ có $SO = OA = \\frac{a\\sqrt{2}}{2}$ nên vuông cân tại $O$."},
             {"id": "c", "text": "Góc giữa mặt phẳng bên và mặt đáy có tang bằng $\\sqrt{2}$.", "correct": True, "explanation": "$\\tan \\varphi = \\frac{SO}{OM} = \\frac{a\\sqrt{2}/2}{a/2} = \\sqrt{2}$."},
             {"id": "d", "text": "Hai đường thẳng $SA$ và $CD$ song song với nhau.", "correct": False, "explanation": "$SA$ và $CD$ là hai đường thẳng chéo nhau."}
         ]}
    ]

    raw_sa_3 = [
        {"id": 1, "question": "**Câu 1:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $5\\text{ cm}$. Tính khoảng cách giữa hai mặt phẳng đối diện $(ABCD)$ và $(A'B'C'D')$.",
         "correctAnswer": "5", "acceptedAnswers": ["5", "5.0"],
         "explanation": "Khoảng cách giữa hai mặt đối diện bằng đúng cạnh hình lập phương là $5\\text{ cm}$."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ là tam giác đều cạnh bằng 4 và $SA = 2\\sqrt{3}$. Tính số đo góc (độ) giữa đường thẳng $SA$ và mặt phẳng $(SBC)$.",
         "correctAnswer": "30", "acceptedAnswers": ["30", "30.0"],
         "explanation": "Gọi $M$ là trung điểm $BC \\Rightarrow AM = 2\\sqrt{3}$. Vì $SA = AM = 2\\sqrt{3}$ và $SA \\perp AM$ nên $\\triangle SAM$ vuông cân tại $A$. Hạ $AH \\perp SM \\Rightarrow AH \\perp (SBC)$. Hình chiếu của $SA$ lên $(SBC)$ là $SH$. Góc là $\\widehat{ASH} = 45^\\circ$? Chờ chút: tam giác vuông cân thì góc $\\widehat{ASH} = 45^\\circ$. Sửa đáp án thành 45."},
        {"id": 3, "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 6, AD = 8, AA' = 10$. Tính độ dài đường chéo $AC'$ (làm tròn đến hàng phần mười).",
         "correctAnswer": "14.1", "acceptedAnswers": ["14.1", "14,1"],
         "explanation": "$AC' = \\sqrt{6^2 + 8^2 + 10^2} = \\sqrt{36 + 64 + 100} = \\sqrt{200} = 10\\sqrt{2} \\approx 14.14 \\approx 14.1$."},
        {"id": 4, "question": "**Câu 4:** Một mái che hiên nhà có chiều dài mái dốc là $5\\text{ m}$, đầu hiên cao hơn mép gắn tường $3\\text{ m}$. Tính góc dốc của mái che so với phương thẳng đứng (đơn vị: độ, làm tròn đến hàng phần mười).",
         "correctAnswer": "53.1", "acceptedAnswers": ["53.1", "53,1"],
         "explanation": "$\\cos \\beta = 3/5 = 0.6 \\Rightarrow \\beta = \\arccos(0.6) \\approx 53.1^\\circ$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $6$. Tính khoảng cách giữa hai đường thẳng chéo nhau $BD$ và $A'C$ (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "2.4", "acceptedAnswers": ["2.4", "2,4"],
         "explanation": "Đoạn thẳng $BD$ vuông góc với mặt phẳng $(AA'C'C)$ tại tâm $O$ của đáy $ABCD$. Từ $O$ kẻ $OH \\perp A'C$ tại $H$. Khi đó $OH \\perp BD$ và $OH \\perp A'C$, do đó $OH$ là đoạn vuông góc chung. Trong hình chữ nhật $ACC'A'$: $AC = 6\\sqrt{2}, CC' = 6 \\Rightarrow A'C = \\sqrt{72 + 36} = 6\\sqrt{3}$. Điểm $O$ là trung điểm $AC \\Rightarrow OA = 3\\sqrt{2}$. Khoảng cách từ $O$ đến $A'C$ là $OH = \\frac{OA \\cdot CC'}{A'C} = \\frac{3\\sqrt{2} \\cdot 6}{6\\sqrt{3}} = \\sqrt{6} \\approx 2.449 \\approx 2.4$."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một cây cầu treo dây văng có trụ tháp thẳng đứng $SO = 30\\text{ m}$ đặt vuông góc với mặt sàn cầu phẳng $(OAB)$. Hai sợi dây văng chịu lực $SA$ và $SB$ được neo tại hai điểm $A, B$ trên mặt sàn cầu sao cho $OA = 40\\text{ m}, OB = 40\\text{ m}$ và tam giác $OAB$ vuông tại $O$. Tính số đo góc (đơn vị: độ) giữa mặt phẳng tạo bởi hai dây văng $(SAB)$ và mặt sàn cầu phẳng $(OAB)$ (làm tròn đến hàng phần mười).",
         "correctAnswer": "46.7", "acceptedAnswers": ["46.7", "46,7"],
         "explanation": "Gọi $M$ là trung điểm của đoạn nối hai mố neo $AB$. Vì $\\triangle OAB$ vuông cân tại $O$ nên $OM \\perp AB$ và $OM = \\frac{40}{\\sqrt{2}} = 20\\sqrt{2}\\text{ m}$. Vì $SO \\perp (OAB)$ nên $SM \\perp AB$. Do đó góc giữa mặt phẳng dây văng $(SAB)$ và mặt sàn cầu $(OAB)$ là góc nhọn $\\widehat{SMO}$. Ta có $\\tan \\widehat{SMO} = \\frac{SO}{OM} = \\frac{30}{20\\sqrt{2}} = \\frac{3}{2\\sqrt{2}} = \\frac{3\\sqrt{2}}{4} \\approx 1.06066$. Từ đó $\\widehat{SMO} = \\arctan(1.06066) \\approx 46.686^\\circ \\approx 46.7^\\circ$."}
    ]
    raw_sa_3[1]["correctAnswer"] = "45"
    raw_sa_3[1]["acceptedAnswers"] = ["45", "45.0"]

    exam3 = {
        "id": "cd3-exam-3", "examNumber": 3, "title": "Đề Số 3: Cầu Dây Văng & Giàn Không Gian",
        "code": "CD3-303", "badge": "Mã Đề 303", "badgeColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_3, 303), "tfQuestions": raw_tfs_3, "saQuestions": raw_sa_3, "essayQuestions": []
    }
    validate_exam(exam3)
    exams.append(exam3)

    # ==========================================
    # ĐỀ 4 (MÃ 304): Công trình ngầm, hầm dốc & giàn giáo
    # ==========================================
    raw_mcqs_4 = [
        {"id": 1, "question": "**Câu 1:** Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
         "options": {"A": "Đúng 1", "B": "Vô số", "C": "2", "D": "Không có mặt phẳng nào"},
         "correct": "A", "explanation": "Theo định lý: Qua một trong hai đường thẳng chéo nhau có duy nhất một mặt phẳng song song với đường thẳng kia."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều, $SA \\perp (ABC)$. Mặt phẳng $(SAB)$ tạo với đáy góc là",
         "options": {"A": "$90^\\circ$", "B": "$60^\\circ$", "C": "$45^\\circ$", "D": "$30^\\circ$"},
         "correct": "A", "explanation": "Vì $SA \\perp (ABC)$ và $SA \\subset (SAB)$ nên $(SAB) \\perp (ABC)$."},
        {"id": 3, "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Khoảng cách giữa hai đường thẳng $AB$ và $CD$ bằng",
         "options": {"A": "Độ dài đoạn $AD$", "B": "Độ dài đoạn $AA'$", "C": "Độ dài đoạn $AC$", "D": "Độ dài đoạn $AC'$"},
         "correct": "A", "explanation": "$AB$ và $CD$ là hai cạnh đối diện của đáy hình chữ nhật nên khoảng cách bằng $AD$."},
        {"id": 4, "question": "**Câu 4:** Trong không gian, cho ba mặt phẳng $(P), (Q), (R)$ phân biệt. Nếu $(P) \\parallel (Q)$ và $(R) \\perp (P)$ thì",
         "options": {"A": "$(R) \\perp (Q)$", "B": "$(R) \\parallel (Q)$", "C": "$(P) \\perp (Q)$", "D": "$(R) \\equiv (Q)$"},
         "correct": "A", "explanation": "Mặt phẳng vuông góc với một trong hai mặt phẳng song song thì vuông góc với mặt phẳng còn lại."},
        {"id": 5, "question": "**Câu 5:** Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Đường thẳng $BD$ vuông góc với mặt phẳng nào sau đây?",
         "options": {"A": "$(SAC)$", "B": "$(SAB)$", "C": "$(SAD)$", "D": "$(SCD)$"},
         "correct": "A", "explanation": "$BD \\perp AC$ (hai đường chéo hình vuông) và $BD \\perp SA \\Rightarrow BD \\perp (SAC)$."},
        {"id": 6, "question": "**Câu 6:** Cho tứ diện $ABCD$ có $AB, AC, AD$ đôi một vuông góc. Hình chiếu của $A$ lên mặt phẳng $(BCD)$ là",
         "options": {"A": "Trực tâm của tam giác $BCD$", "B": "Trọng tâm của tam giác $BCD$", "C": "Tâm đường tròn ngoại tiếp $\\triangle BCD$", "D": "Trung điểm cạnh $BC$"},
         "correct": "A", "explanation": "Tính chất kinh điển: hình chiếu đỉnh vuông lên mặt tam giác đối diện là trực tâm."},
        {"id": 7, "question": "**Câu 7:** Một giàn giáo công trình có thanh chống nghiêng dài $5\\text{ m}$ đặt tựa vào tường thẳng đứng, chân thanh chống cách chân tường $3\\text{ m}$. Góc tạo bởi thanh chống và mặt đất có cosin bằng",
         "options": {"A": "$0.6$", "B": "$0.8$", "C": "$0.75$", "D": "$0.5$"},
         "correct": "A", "explanation": "$\\cos \\alpha = 3/5 = 0.6$."},
        {"id": 8, "question": "**Câu 8:** Cho hình lập phương $ABCD.A'B'C'D'$. Sin của góc giữa đường chéo $BD'$ và mặt phẳng đáy $(ABCD)$ bằng",
         "options": {"A": "$\\frac{1}{\\sqrt{3}}$", "B": "$\\frac{\\sqrt{2}}{\\sqrt{3}}$", "C": "$\\frac{1}{\\sqrt{2}}$", "D": "$\\frac{1}{2}$"},
         "correct": "A", "explanation": "$\\sin = \\frac{DD'}{BD'} = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$."},
        {"id": 9, "question": "**Câu 9:** Cho hình chóp tứ giác đều $S.ABCD$ có $O$ là tâm đáy. Đoạn vuông góc chung của $SO$ và $AB$ có độ dài bằng",
         "options": {"A": "Nửa cạnh đáy", "B": "Cạnh đáy", "C": "Chiều cao $SO$", "D": "Cạnh bên"},
         "correct": "A", "explanation": "Đoạn vuông góc chung nối $O$ với trung điểm $AB$, có độ dài bằng nửa cạnh đáy."},
        {"id": 10, "question": "**Câu 10:** Cho đường thẳng $a$ song song với đường thẳng $b$, đường thẳng $b$ vuông góc với mặt phẳng $(P)$. Khẳng định nào sau đây ĐÚNG?",
         "options": {"A": "$a \\perp (P)$", "B": "$a \\parallel (P)$", "C": "$a \\subset (P)$", "D": "Góc giữa $a$ và $(P)$ bằng $45^\\circ$"},
         "correct": "A", "explanation": "Đường thẳng song song với một đường thẳng vuông góc với mặt phẳng thì vuông góc với mặt phẳng đó."},
        {"id": 11, "question": "**Câu 11:** Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai mặt phẳng $(ABCD)$ và $(A'B'C'D')$ bằng",
         "options": {"A": "$0^\\circ$", "B": "$90^\\circ$", "C": "$180^\\circ$", "D": "$45^\\circ$"},
         "correct": "A", "explanation": "Hai mặt phẳng song song có góc bằng $0^\\circ$."},
        {"id": 12, "question": "**Câu 12:** Cho khối chóp $S.ABC$ có thể tích $V = 20$, diện tích đáy $S_{\\triangle ABC} = 15$. Khoảng cách từ đỉnh $S$ đến mặt phẳng đáy bằng",
         "options": {"A": "$4$", "B": "$2$", "C": "$6$", "D": "$3$"},
         "correct": "A", "explanation": "$V = \\frac{1}{3} S \\cdot h \\Rightarrow h = \\frac{3V}{S} = \\frac{60}{15} = 4$."}
    ]

    raw_tfs_4 = [
        {"id": 1, "question": "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a = 4$, tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với đáy. Gọi $H$ là trung điểm của cạnh $AB$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đoạn thẳng $SH$ vuông góc với mặt phẳng đáy $(ABCD)$.", "correct": True, "explanation": "Vì tam giác $SAB$ đều và $(SAB) \\perp (ABCD)$."},
             {"id": "b", "text": "Độ dài đường cao $SH = 2\\sqrt{3}$.", "correct": True, "explanation": "$SH = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$."},
             {"id": "c", "text": "Khoảng cách từ điểm $H$ đến mặt phẳng $(SCD)$ bằng $\\frac{4\\sqrt{21}}{7}$.", "correct": True, "explanation": "Gọi $M$ là trung điểm $CD \\Rightarrow HM = 4$. Hạ $HK \\perp SM \\Rightarrow HK = \\frac{SH \\cdot HM}{\\sqrt{SH^2 + HM^2}} = \\frac{2\\sqrt{3} \\cdot 4}{\\sqrt{12 + 16}} = \\frac{4\\sqrt{21}}{7}$."},
             {"id": "d", "text": "Góc giữa mặt phẳng $(SCD)$ và mặt đáy bằng $60^\\circ$.", "correct": False, "explanation": "$\\tan = \\frac{SH}{HM} = \\frac{2\\sqrt{3}}{4} = \\frac{\\sqrt{3}}{2} \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a = 6$, chiều cao $SO = 2\\sqrt{3}$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hình chiếu vuông góc của $S$ lên mặt đáy trùng với tâm đường tròn ngoại tiếp tam giác đáy.", "correct": True, "explanation": "Đúng theo định nghĩa hình chóp tam giác đều."},
             {"id": "b", "text": "Bán kính đường tròn ngoại tiếp tam giác đáy $R = 2\\sqrt{3}$.", "correct": True, "explanation": "$R = \\frac{a}{\\sqrt{3}} = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$."},
             {"id": "c", "text": "Góc giữa cạnh bên $SA$ và mặt đáy bằng $45^\\circ$.", "correct": True, "explanation": "Vì $SO = R = 2\\sqrt{3}$ nên $\\triangle SOA$ vuông cân tại $O$."},
             {"id": "d", "text": "Độ dài cạnh bên $SA = 4\\sqrt{3}$.", "correct": False, "explanation": "$SA = \\sqrt{SO^2 + R^2} = \\sqrt{12 + 12} = \\sqrt{24} = 2\\sqrt{6} \\ne 4\\sqrt{3}$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một hầm đường bộ qua đèo có mặt cắt ngang dạng hình chữ nhật cao $6\\text{ m}$, rộng $10\\text{ m}$. Tuyến đường hầm dốc đều thẳng xuống với góc nghiêng $3^\\circ$ so với mặt phẳng nằm ngang. Chiều dài tuyến hầm dốc là $2000\\text{ m}$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Chênh lệch độ cao giữa hai cửa hầm xấp xỉ $104.7\\text{ m}$.", "correct": True, "explanation": "$\\Delta h = 2000 \\times \\sin(3^\\circ) \\approx 2000 \\times 0.052336 = 104.7\\text{ m}$."},
             {"id": "b", "text": "Chiều dài hình chiếu của hầm lên mặt đất nằm ngang dài hơn $1995\\text{ m}$.", "correct": True, "explanation": "$L_{chiếu} = 2000 \\times \\cos(3^\\circ) \\approx 1997.3\\text{ m} > 1995\\text{ m}$."},
             {"id": "c", "text": "Mặt đường hầm vuông góc với vách tường hầm.", "correct": True, "explanation": "Theo kết cấu hình hộp chữ nhật."},
             {"id": "d", "text": "Góc tạo bởi hướng dốc của hầm với phương thẳng đứng bằng $93^\\circ$.", "correct": False, "explanation": "Góc với phương thẳng đứng là $90^\\circ - 3^\\circ = 87^\\circ \\ne 93^\\circ$."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đường thẳng $B'D'$ song song với mặt phẳng $(ABCD)$.", "correct": True, "explanation": "Vì $B'D' \\parallel BD$ và $BD \\subset (ABCD)$."},
             {"id": "b", "text": "Khoảng cách giữa $B'D'$ và $(ABCD)$ bằng cạnh hình lập phương.", "correct": True, "explanation": "Bằng độ dài đoạn thẳng đứng $BB'$."},
             {"id": "c", "text": "Góc giữa hai đường thẳng $AC$ và $B'D'$ bằng $90^\\circ$.", "correct": True, "explanation": "Vì $B'D' \\parallel BD$ và $AC \\perp BD$ (hai đường chéo hình vuông)."},
             {"id": "d", "text": "Mặt phẳng $(ACC'A')$ chia hình lập phương thành 3 khối lăng trụ bằng nhau.", "correct": False, "explanation": "Chia thành 2 khối lăng trụ tam giác đều bằng nhau, không phải 3."}
         ]}
    ]

    raw_sa_4 = [
        {"id": 1, "question": "**Câu 1:** Cho tứ diện đều $ABCD$ có cạnh bằng $a = 6$. Tính khoảng cách giữa hai đường thẳng chéo nhau $AB$ và $CD$ (làm tròn đến hàng phần mười).",
         "correctAnswer": "4.2", "acceptedAnswers": ["4.2", "4,2"],
         "explanation": "Đoạn vuông góc chung nối trung điểm hai cạnh đối diện: $d = \\frac{a\\sqrt{2}}{2} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2} \\approx 4.24 \\approx 4.2$."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$ với $AB = 4, BC = 3$. Cạnh bên $SA = 4$. Tính cosin của góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$ (làm tròn đến hàng phần mười).",
         "correctAnswer": "0.9", "acceptedAnswers": ["0.9", "0,9"],
         "explanation": "Vì $BC \\perp (SAB)$ nên hình chiếu của $SC$ lên $(SAB)$ là $SB$. Góc là $\\widehat{CSB}$. $SB = \\sqrt{4^2 + 4^2} = 4\\sqrt{2}$, $SC = \\sqrt{SA^2 + AC^2} = \\sqrt{16 + 25} = \\sqrt{41}$. $\\cos = SB/SC = 4\\sqrt{2}/\\sqrt{41} \\approx 5.657/6.403 \\approx 0.883 \\approx 0.9$."},
        {"id": 3, "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 12$. Tính khoảng cách từ điểm $A'$ đến mặt phẳng $(ABCD)$.",
         "correctAnswer": "12", "acceptedAnswers": ["12", "12.0"],
         "explanation": "Vì $A'A \\perp (ABCD)$ nên khoảng cách chính bằng $AA' = 12$."},
        {"id": 4, "question": "**Câu 4:** Một cầu cảng có đường dốc cho xe container dài $30\\text{ m}$, nối từ mặt đất lên sàn cảng cao $4.5\\text{ m}$. Tính góc nghiêng (độ) của dốc so với mặt đất (làm tròn đến hàng phần mười).",
         "correctAnswer": "8.6", "acceptedAnswers": ["8.6", "8,6"],
         "explanation": "$\\sin \\alpha = \\frac{4.5}{30} = 0.15 \\Rightarrow \\alpha = \\arcsin(0.15) \\approx 8.627^\\circ \\approx 8.6^\\circ$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh bằng $4$, tam giác $SAB$ đều và nằm trong mặt phẳng vuông góc với đáy. Gọi $G$ là trọng tâm tam giác $SAB$. Tính khoảng cách từ điểm $G$ đến mặt phẳng $(SCD)$ (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "0.9", "acceptedAnswers": ["0.9", "0,9"],
         "explanation": "Gọi $H$ là trung điểm $AB \\Rightarrow SH \\perp (ABCD)$, $SH = \\frac{4\\sqrt{3}}{2} = 2\\sqrt{3}$. Đoạn $SG$ cắt $(SCD)$ tại $S$ với tỉ số $\\frac{SG}{SH} = \\frac{2}{3} \\Rightarrow d(G, (SCD)) = \\frac{1}{3} d(H, (SCD))$. Gọi $M$ là trung điểm $CD \\Rightarrow HM = 4$. Trong tam giác vuông $SHM$, kẻ $HK \\perp SM \\Rightarrow HK \\perp (SCD)$. $HK = \\frac{SH \\cdot HM}{\\sqrt{SH^2 + HM^2}} = \\frac{2\\sqrt{3} \\cdot 4}{\\sqrt{12 + 16}} = \\frac{4\\sqrt{21}}{7}$. Do đó $d(G, (SCD)) = \\frac{1}{3} \\cdot \\frac{4\\sqrt{21}}{7} = \\frac{4\\sqrt{21}}{21} \\approx 0.8728 \\approx 0.9$."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một giàn giáo xây dựng dạng hình hộp chữ nhật $ABCD.A'B'C'D'$ có kích thước mặt sàn $AB = 6\\text{ m}, AD = 8\\text{ m}$ và chiều cao cột $AA' = 12\\text{ m}$. Để chống rung lắc động đất, kỹ sư lắp hai thanh giằng chéo $AC'$ và $BD$. Tính khoảng cách ngắn nhất giữa hai thanh giằng này (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "3.7", "acceptedAnswers": ["3.7", "3,7"],
         "explanation": "Gắn hệ tọa độ với gốc tại $A(0;0;0), B(6;0;0), D(0;8;0), C(6;8;0), A'(0;0;12), C'(6;8;12)$. Ta có $\\vec{u}_{AC'} = (6; 8; 12) \\parallel (3; 4; 6)$, $\\vec{u}_{BD} = (-6; 8; 0) \\parallel (-3; 4; 0)$. Vectơ pháp tuyến chung: $\\vec{n} = (3; 4; 6) \\times (-3; 4; 0) = (-24; -18; 24) \\parallel (-4; -3; 4)$. Vectơ $\\vec{AB} = (6; 0; 0)$. Khoảng cách giữa hai thanh giằng: $d = \\frac{|\\vec{AB} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|6(-4)|}{\\sqrt{16 + 9 + 16}} = \\frac{24}{\\sqrt{41}} \\approx 3.748 \\approx 3.7$."}
    ]

    exam4 = {
        "id": "cd3-exam-4", "examNumber": 4, "title": "Đề Số 4: Công Trình Ngầm, Hầm Dốc & Giàn Giáo",
        "code": "CD3-304", "badge": "Mã Đề 304", "badgeColor": "bg-purple-50 text-purple-800 border-purple-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_4, 304), "tfQuestions": raw_tfs_4, "saQuestions": raw_sa_4, "essayQuestions": []
    }
    validate_exam(exam4)
    exams.append(exam4)

    # ==========================================
    # ĐỀ 5 (MÃ 305): Thiết kế mái che sân khấu & không gian đa diện
    # ==========================================
    raw_mcqs_5 = [
        {"id": 1, "question": "**Câu 1:** Trong không gian, hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì",
         "options": {"A": "Song song với nhau", "B": "Vuông góc với nhau", "C": "Trùng nhau", "D": "Cắt nhau"},
         "correct": "A", "explanation": "Hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABC)$ là góc nào?",
         "options": {"A": "$\\widehat{SBA}$", "B": "$\\widehat{SAB}$", "C": "$\\widehat{ASB}$", "D": "$\\widehat{SBC}$"},
         "correct": "A", "explanation": "Hình chiếu của $SB$ lên đáy là $AB$, nên góc là $\\widehat{SBA}$."},
        {"id": 3, "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Khoảng cách giữa hai mặt đáy $(ABCD)$ và $(A'B'C'D')$ bằng độ dài đoạn nào?",
         "options": {"A": "$BB'$", "B": "$BD$", "C": "$AC$", "D": "$BC$"},
         "correct": "A", "explanation": "Bằng chiều cao đứng $BB'$."},
        {"id": 4, "question": "**Câu 4:** Cho tam giác $ABC$ vuông tại $B$. Trên đường thẳng vuông góc với $(ABC)$ tại $A$ lấy điểm $S$. Khẳng định nào sau đây ĐÚNG?",
         "options": {"A": "$BC \\perp (SAB)$", "B": "$BC \\perp (SAC)$", "C": "$AC \\perp (SAB)$", "D": "$AB \\perp (SBC)$"},
         "correct": "A", "explanation": "$BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$."},
        {"id": 5, "question": "**Câu 5:** Góc giữa hai mặt phẳng vuông góc với nhau bằng",
         "options": {"A": "$90^\\circ$", "B": "$0^\\circ$", "C": "$180^\\circ$", "D": "$45^\\circ$"},
         "correct": "A", "explanation": "Theo định nghĩa góc giữa hai mặt phẳng."},
        {"id": 6, "question": "**Câu 6:** Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách từ điểm $A'$ đến đường thẳng $BC$ bằng",
         "options": {"A": "$a\\sqrt{2}$", "B": "$a$", "C": "$a\\sqrt{3}$", "D": "$\\frac{a\\sqrt{2}}{2}$"},
         "correct": "A", "explanation": "Vì $BC \\perp (ABB'A')$ nên khoảng cách là $A'B = \\sqrt{a^2 + a^2} = a\\sqrt{2}$."},
        {"id": 7, "question": "**Câu 7:** Một thang dây cứu hỏa dài $15\\text{ m}$ bắc từ xe thang đến cửa sổ tòa nhà cao $12\\text{ m}$. Khoảng cách theo phương ngang từ xe đến chân tòa nhà là",
         "options": {"A": "$9\\text{ m}$", "B": "$10\\text{ m}$", "C": "$8\\text{ m}$", "D": "$11\\text{ m}$"},
         "correct": "A", "explanation": "$d = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9\\text{ m}$."},
        {"id": 8, "question": "**Câu 8:** Cho hình chóp tứ giác đều $S.ABCD$. Mặt phẳng nào sau đây là mặt phẳng đối xứng của khối chóp?",
         "options": {"A": "$(SAC)$", "B": "$(SAB)$", "C": "$(SBC)$", "D": "$(SCD)$"},
         "correct": "A", "explanation": "$(SAC)$ và $(SBD)$ là hai mặt phẳng đối xứng đi qua đỉnh và đường chéo đáy."},
        {"id": 9, "question": "**Câu 9:** Cho hình lăng trụ tam giác đều $ABC.A'B'C'$. Góc giữa mặt phẳng bên $(ABB'A')$ và mặt đáy $(ABC)$ bằng",
         "options": {"A": "$90^\\circ$", "B": "$60^\\circ$", "C": "$45^\\circ$", "D": "$30^\\circ$"},
         "correct": "A", "explanation": "Trong lăng trụ đứng, các mặt bên luôn vuông góc với hai đáy."},
        {"id": 10, "question": "**Câu 10:** Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B$, $SA \\perp (ABC)$. Đoạn vuông góc chung của $SA$ và $BC$ là",
         "options": {"A": "Đoạn $AB$", "B": "Đoạn $AC$", "C": "Đoạn $BC$", "D": "Đoạn $SB$"},
         "correct": "A", "explanation": "$AB \\perp SA$ (tại $A$) và $AB \\perp BC$ (tại $B$). Vậy $AB$ là đoạn vuông góc chung."},
        {"id": 11, "question": "**Câu 11:** Trong không gian, tập hợp các điểm cách đều hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ là",
         "options": {"A": "Mặt phẳng song song và cách đều cả hai mặt phẳng đó", "B": "Một đường thẳng", "C": "Một điểm", "D": "Hai đường thẳng song song"},
         "correct": "A", "explanation": "Đúng theo tính chất mặt phẳng cách đều."},
        {"id": 12, "question": "**Câu 12:** Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$, đáy là hình vuông. Đường thẳng $SC$ tạo với mặt phẳng $(SAB)$ một góc có đỉnh là",
         "options": {"A": "Đỉnh $S$", "B": "Đỉnh $C$", "C": "Đỉnh $A$", "D": "Đỉnh $B$"},
         "correct": "A", "explanation": "Hình chiếu của $SC$ lên $(SAB)$ là $SB$, nên góc là $\\widehat{CSB}$ (đỉnh $S$)."}
    ]

    raw_tfs_5 = [
        {"id": 1, "question": "**Câu 1:** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$, với $OA = 3, OB = 4, OC = 12$. Gọi $H$ là trực tâm của tam giác $ABC$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đoạn thẳng $OH$ vuông góc với mặt phẳng $(ABC)$.", "correct": True, "explanation": "Tính chất trực tâm tứ diện vuông."},
             {"id": "b", "text": "Độ dài đoạn $OH = \\frac{12}{\\sqrt{26}}$.", "correct": True, "explanation": "$\\frac{1}{OH^2} = \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{144} = \\frac{26}{144} \\Rightarrow OH = \\frac{12}{\\sqrt{26}}$."},
             {"id": "c", "text": "Tam giác $ABC$ là tam giác vuông.", "correct": False, "explanation": "Cả ba góc của tam giác $ABC$ trong tứ diện vuông đều là góc nhọn."},
             {"id": "d", "text": "Cosin của góc giữa mặt phẳng $(OAB)$ và mặt phẳng $(ABC)$ bằng $\\frac{1}{\\sqrt{26}}$.", "correct": True, "explanation": "$\\cos \\varphi = \\frac{S_{OAB}}{S_{ABC}} = \\frac{OH}{OC} = \\frac{12/\\sqrt{26}}{12} = \\frac{1}{\\sqrt{26}}$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$ cạnh $a = 6$, góc $\\widehat{BAD} = 60^\\circ$. Cạnh bên $SO \\perp (ABCD)$ và $SO = 3\\sqrt{3}$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Tam giác $ABD$ là tam giác đều cạnh bằng 6.", "correct": True, "explanation": "Hình thoi có góc $60^\\circ$ tạo bởi hai tam giác đều ghép lại."},
             {"id": "b", "text": "Độ dài đoạn $BD = 6$ và $AC = 6\\sqrt{3}$.", "correct": True, "explanation": "Đúng tính chất hình thoi có góc $60^\\circ$."},
             {"id": "c", "text": "Góc giữa đường thẳng $SA$ và mặt đáy bằng $45^\\circ$.", "correct": True, "explanation": "$OA = AC/2 = 3\\sqrt{3}$. Vì $SO = OA = 3\\sqrt{3}$ nên $\\triangle SOA$ vuông cân $\\Rightarrow 45^\\circ$."},
             {"id": "d", "text": "Khoảng cách từ điểm $O$ đến mặt phẳng $(SCD)$ bằng $4.5$.", "correct": False, "explanation": "Hạ $OH \\perp CD$. $OH = \\frac{BD \\cdot AC}{4 CD} = \\frac{6 \\cdot 6\\sqrt{3}}{24} = \\frac{3\\sqrt{3}}{2}$. Khoảng cách $d = \\frac{SO \\cdot OH}{\\sqrt{SO^2 + OH^2}} = \\frac{3\\sqrt{3} \\cdot (3\\sqrt{3}/2)}{\\sqrt{27 + 27/4}} = \\frac{27/2}{\\sqrt{135}/2} = \\frac{27}{3\\sqrt{15}} = \\frac{3\\sqrt{15}}{5} \\approx 2.32 \\ne 4.5$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một mái che khán đài sân vận động ngoài trời có thiết kế dạng khối chóp tứ giác $S.ABCD$ với đáy là hình thang vuông tại $A$ và $B$, $AB = BC = 6\\text{ m}, AD = 12\\text{ m}$. Cột trụ chính $SA$ vuông góc với mặt đất nằm ngang và có chiều cao $SA = 8\\text{ m}$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Diện tích mặt bằng khán đài $ABCD$ bằng $54\\text{ m}^2$.", "correct": True, "explanation": "$S = \\frac{(BC + AD) \\cdot AB}{2} = \\frac{(6 + 12) \\cdot 6}{2} = 54\\text{ m}^2$."},
             {"id": "b", "text": "Đoạn thẳng $CD$ vuông góc với đoạn thẳng $AC$.", "correct": True, "explanation": "Kẻ $CE \\perp AD \\Rightarrow CE = 6, ED = 6 \\Rightarrow CD^2 = 72$. $AC^2 = 72, AD^2 = 144 = 72 + 72 \\Rightarrow \\triangle ACD$ vuông tại $C$."},
             {"id": "c", "text": "Đường thẳng $CD$ vuông góc với mặt phẳng $(SAC)$.", "correct": True, "explanation": "Vì $CD \\perp AC$ và $CD \\perp SA \\Rightarrow CD \\perp (SAC)$."},
             {"id": "d", "text": "Góc giữa mặt phẳng mái $(SCD)$ và mặt phẳng đáy bằng $60^\\circ$.", "correct": False, "explanation": "Góc là $\\widehat{SCA}$. $AC = 6\\sqrt{2} \\approx 8.48$. $\\tan = 8/(6\\sqrt{2}) = 2\\sqrt{2}/3 \\approx 0.94 \\ne \\sqrt{3}$ nên không bằng $60^\\circ$."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đường chéo $AC'$ vuông góc với đường chéo đáy $BD$.", "correct": True, "explanation": "$BD \\perp AC$ và $BD \\perp AA' \\Rightarrow BD \\perp (ACC'A') \\Rightarrow BD \\perp AC'$."},
             {"id": "b", "text": "Đường chéo $AC'$ vuông góc với đường chéo mặt bên $BC'$.", "correct": False, "explanation": "Tam giác $ABC'$ không vuông tại đỉnh nào liên quan $AC'$ vuông góc $BC'$."},
             {"id": "c", "text": "Góc giữa hai đường thẳng $A'B$ và $B'C$ bằng $60^\\circ$.", "correct": True, "explanation": "Tịnh tiến $A'B$ thành $D'C$. Tam giác $B'CD'$ đều nên góc bằng $60^\\circ$."},
             {"id": "d", "text": "Khoảng cách giữa hai đường thẳng $AB$ và $CC'$ bằng độ dài cạnh hình lập phương.", "correct": True, "explanation": "Đoạn vuông góc chung là $BC$ có độ dài bằng cạnh hình lập phương."}
         ]}
    ]

    raw_sa_5 = [
        {"id": 1, "question": "**Câu 1:** Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = 6$, tam giác $ABC$ vuông tại $B$ có $AB = 8, BC = 6$. Tính khoảng cách từ đỉnh $S$ đến đường thẳng $BC$.",
         "correctAnswer": "10", "acceptedAnswers": ["10", "10.0"],
         "explanation": "Vì $BC \\perp AB$ và $BC \\perp SA$ nên $BC \\perp SB$. Khoảng cách là độ dài $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{6^2 + 8^2} = 10$."},
        {"id": 2, "question": "**Câu 2:** Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $4$, cạnh bên bằng $2\\sqrt{6}$. Tính chiều cao $SO$ của khối chóp.",
         "correctAnswer": "4", "acceptedAnswers": ["4", "4.0"],
         "explanation": "$OA = 4\\sqrt{2}/2 = 2\\sqrt{2}$. Chiều cao $SO = \\sqrt{SA^2 - OA^2} = \\sqrt{24 - 8} = \\sqrt{16} = 4$."},
        {"id": 3, "question": "**Câu 3:** Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 6, AD = 8, AA' = 12$. Tính sin của góc giữa đường chéo $AC'$ và mặt phẳng đáy $(ABCD)$ (làm tròn đến hàng phần mười).",
         "correctAnswer": "0.8", "acceptedAnswers": ["0.8", "0,8"],
         "explanation": "Đường chéo đáy $AC = \\sqrt{36 + 64} = 10$. Đường chéo hình hộp $AC' = \\sqrt{10^2 + 12^2} = \\sqrt{244} \\approx 15.62$. $\\sin = AA'/AC' = 12/\\sqrt{244} \\approx 0.768 \\approx 0.8$."},
        {"id": 4, "question": "**Câu 4:** Một biển quảng cáo lớn được gắn trên đỉnh một tòa nhà cao $30\\text{ m}$. Một người đứng cách chân tòa nhà $40\\text{ m}$ nhìn lên đỉnh biển quảng cáo với góc nâng $45^\\circ$. Tính chiều cao của biển quảng cáo (đơn vị: mét).",
         "correctAnswer": "10", "acceptedAnswers": ["10", "10.0"],
         "explanation": "Góc nâng $45^\\circ$ từ điểm cách chân tòa nhà $40\\text{ m}$ suy ra tổng độ cao đỉnh biển quảng cáo là $40\\text{ m}$. Chiều cao biển quảng cáo là $40 - 30 = 10\\text{ m}$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$, với $OA = 3, OB = 4, OC = 12$. Gọi $H$ là trực tâm của tam giác $ABC$. Tính độ dài đoạn thẳng $OH$ (làm tròn kết quả đến hàng phần mười).",
         "correctAnswer": "2.4", "acceptedAnswers": ["2.4", "2,4"],
         "explanation": "Theo hệ thức lượng trong tứ diện vuông: $\\frac{1}{OH^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2} = \\frac{1}{9} + \\frac{1}{16} + \\frac{1}{144} = \\frac{16 + 9 + 1}{144} = \\frac{26}{144}$. Do đó $OH = \\frac{12}{\\sqrt{26}} \\approx 2.353 \\approx 2.4$."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một mái che sân khấu ngoài trời có thiết kế dạng chóp tứ giác $S.ABCD$ với đáy là hình thang vuông tại $A$ và $B$, $AB = BC = 6\\text{ m}, AD = 12\\text{ m}$. Cột đỡ chính $SA$ dựng thẳng đứng vuông góc với mặt đất có chiều cao $SA = 8\\text{ m}$. Tính góc (đơn vị: độ) giữa hai mặt phẳng mái nghiêng $(SCD)$ và mặt đất nằm ngang $(ABCD)$ (làm tròn đến hàng phần mười).",
         "correctAnswer": "43.3", "acceptedAnswers": ["43.3", "43,3"],
         "explanation": "Gắn hệ tọa độ với gốc tại $A(0;0;0)$, $AB$ dọc trục $Ox$ ($B(6;0;0)$), $AD$ dọc trục $Oy$ ($D(0;12;0)$), $C(6;6;0)$, $S(0;0;8)$. Vectơ pháp tuyến mặt đất là $\\vec{k} = (0; 0; 1)$. Xét mặt phẳng $(SCD)$: có hai vectơ $\\vec{SC} = (6; 6; -8)$ và $\\vec{SD} = (0; 12; -8)$. Vectơ pháp tuyến của $(SCD)$: $\\vec{n} = \\vec{SC} \\times \\vec{SD} = (48; 48; 72) \\parallel (2; 2; 3)$. Cosin góc giữa hai mặt phẳng: $\\cos \\alpha = \\frac{|(2; 2; 3) \\cdot (0; 0; 1)|}{\\sqrt{2^2 + 2^2 + 3^2} \\cdot 1} = \\frac{3}{\\sqrt{17}} \\approx 0.7276$. Từ đó $\\alpha = \\arccos(0.7276) \\approx 43.31^\\circ \\approx 43.3^\\circ$."}
    ]

    exam5 = {
        "id": "cd3-exam-5", "examNumber": 5, "title": "Đề Số 5: Thiết Kế Mái Che Sân Khấu & Không Gian Đa Diện",
        "code": "CD3-305", "badge": "Mã Đề 305", "badgeColor": "bg-rose-50 text-rose-800 border-rose-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_5, 305), "tfQuestions": raw_tfs_5, "saQuestions": raw_sa_5, "essayQuestions": []
    }
    validate_exam(exam5)
    exams.append(exam5)

    return {
        "id": "cd3",
        "code": "CĐ 3",
        "title": "GÓC KHOẢNG CÁCH LỚP 11",
        "subtitle": "Quan hệ vuông góc, góc phẳng, góc nhị diện, khoảng cách chéo nhau & mô hình 3D thực tiễn",
        "grade": 11,
        "icon": "fa-compass-drafting",
        "accentColor": "from-indigo-600 to-purple-700",
        "theorySummaryHtml": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    t = get_topic_cd3()
    print(f"CD 3 co {len(t['exams'])} de thi:")
    for ex in t['exams']:
        print(f"- {ex['code']}: {ex['title']} | MCQs: {len(ex['mcqs'])} | T/F: {len(ex['tfQuestions'])} | SA: {len(ex['saQuestions'])}")
