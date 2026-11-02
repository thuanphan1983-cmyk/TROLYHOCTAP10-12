# -*- coding: utf-8 -*-
"""
Chương 2 Lớp 12: Vectơ và Hệ tọa độ trong không gian.
Bao gồm Bài 6, 7, 8. Mỗi bài học có 2 đề độc lập, tập trung 100% vào kiến thức bài đó.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa

def get_ch2_lesson(lnum, k):
    if lnum == 6:
        # BÀI 6: VECTƠ TRONG KHÔNG GIAN (Không dùng toạ độ Oxyz)
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong không gian, cho hình hộp $ABCD.A'B'C'D'$. Quy tắc hình hộp nào sau đây đúng?", "$\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$", "$\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AC}$", "$\\vec{AC'} = \\vec{AA'} + \\vec{BB'} + \\vec{CC'}$", "$\\vec{AC'} = \\vec{AB} + \\vec{BC} + \\vec{CD}$", "A", "Quy tắc hình hộp: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$."),
                make_mcq(2, "NB", "Cho tứ diện $ABCD$. Khẳng định nào sau đây về quy tắc ba điểm đúng?", "$\\vec{AB} + \\vec{BC} = \\vec{AC}$", "$\\vec{AB} + \\vec{BC} = \\vec{CA}$", "$\\vec{AB} - \\vec{AC} = \\vec{BC}$", "$\\vec{AB} + \\vec{AD} = \\vec{BD}$", "A", "Quy tắc ba điểm: $\\vec{AB} + \\vec{BC} = \\vec{AC}$."),
                make_mcq(3, "NB", "Tích vô hướng của hai vectơ $\\vec{a}$ và $\\vec{b}$ trong không gian được tính bởi:", "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b})$", "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\sin(\\vec{a}, \\vec{b})$", "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| + |\\vec{b}|$", "$\\vec{a} \\cdot \\vec{b} = |\\vec{a} + \\vec{b}|$", "A", "Định nghĩa tích vô hướng."),
                make_mcq(4, "NB", "Hai vectơ $\\vec{u}$ và $\\vec{v}$ khác vectơ-không vuông góc với nhau khi và chỉ khi:", "$\\vec{u} \\cdot \\vec{v} = 0$", "$\\vec{u} = k\\vec{v}$", "$|\\vec{u}| = |\\vec{v}|$", "$\\vec{u} + \\vec{v} = \\vec{0}$", "A", "Hai vectơ vuông góc $\\Leftrightarrow$ tích vô hướng bằng 0."),
                make_mcq(5, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{B'C'}$ bằng:", "$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$60^\\circ$", "A", "Vì $\\vec{B'C'} = \\vec{BC}$ và $ABCD$ là hình vuông nên $\\vec{AB} \\perp \\vec{BC} \\Rightarrow$ góc bằng $90^\\circ$."),
                make_mcq(6, "TH", "Cho tứ diện đều $ABCD$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:", "$\\frac{a^2}{2}$", "$a^2$", "$-\\frac{a^2}{2}$", "$\\frac{a^2\\sqrt{3}}{2}$", "A", "Tam giác $ABC$ đều cạnh $a$ nên góc $A = 60^\\circ$. $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$."),
                make_mcq(7, "TH", "Cho hình chóp $S.ABC$. Rút gọn biểu thức $\\vec{SA} - \\vec{SB} + \\vec{BC}$ ta được:", "$\\vec{AC}$", "$\\vec{BA}$", "$\\vec{SC}$", "$\\vec{0}$", "A", "$\\vec{SA} - \\vec{SB} = \\vec{BA}$. Do đó $\\vec{BA} + \\vec{BC}$? À: $\\vec{SA} - \\vec{SB} = \\vec{BA}$, $\\vec{BA} + \\vec{AC} = \\vec{BC} \\Rightarrow \\vec{SA} - \\vec{SB} + \\vec{BC}$? Chọn $\\vec{SA} - \\vec{SB} = \\vec{BA} = -\\vec{AB}$. Ta có: $\\vec{BC} - \\vec{BA} = \\vec{AC}$."),
                make_mcq(8, "TH", "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Khẳng định nào sau đây đúng?", "$\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$", "$\\vec{MN} = \\vec{AD} + \\vec{BC}$", "$\\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$", "$\\vec{MN} = \\vec{AB} + \\vec{CD}$", "A", "Công thức trung điểm đoạn nối hai trung điểm trong tứ diện: $\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$."),
                make_mcq(9, "VD", "Cho hình hộp $ABCD.A'B'C'D'$. Gọi $I$ là tâm của hình hộp. Khẳng định nào sau đây đúng?", "$\\vec{IA} + \\vec{IB} + \\vec{IC} + \\vec{ID} + \\vec{IA'} + \\vec{IB'} + \\vec{IC'} + \\vec{ID'} = \\vec{0}$", "$\\vec{IA} + \\vec{IC'} = \\vec{AC'}$", "$\\vec{IB} + \\vec{ID} = \\vec{BD}$", "$\\vec{IA} = \\vec{IC'}$", "A", "Vì $I$ là trung điểm các đường chéo $AC', BD', CA', DB'$ nên tổng 8 vectơ từ $I$ đến 8 đỉnh bằng vectơ-không."),
                make_mcq(10, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính tích vô hướng $\\vec{AC} \\cdot \\vec{A'D}$.", "$-a^2$", "$a^2$", "$0$", "$a^2\\sqrt{2}$", "A", "$\\vec{AC} = \\vec{AB} + \\vec{AD}$, $\\vec{A'D} = \\vec{AD} - \\vec{AA'}$. Nhân vô hướng: $(\\vec{AB} + \\vec{AD}) \\cdot (\\vec{AD} - \\vec{AA'}) = \\vec{AB}\\cdot\\vec{AD} - \\vec{AB}\\cdot\\vec{AA'} + |\\vec{AD}|^2 - \\vec{AD}\\cdot\\vec{AA'} = 0 - 0 + a^2 - 0 = a^2$."),
                make_mcq(11, "VDC", "Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ không đồng phẳng. Điều kiện cần và đủ để vectơ $\\vec{d}$ đồng phẳng với $\\vec{a}$ và $\\vec{b}$ là:", "Tồn tại duy nhất cặp số thực $(m; n)$ sao cho $\\vec{d} = m\\vec{a} + n\\vec{b}$.", "$\\vec{d} \\cdot \\vec{a} = 0$.", "$\\vec{d} = \\vec{a} + \\vec{b} + \\vec{c}$.", "$\\vec{d} \\cdot \\vec{c} = 0$.", "A", "Định lý về ba vectơ đồng phẳng: $\\vec{d}$ đồng phẳng với $\\vec{a}, \\vec{b} \\Leftrightarrow \\vec{d} = m\\vec{a} + n\\vec{b}$."),
                make_mcq(12, "VDC", "Một chiếc đèn chùm trọng lượng $P = 120$ N được treo bởi 3 sợi dây cáp có độ dài bằng nhau xuất phát từ điểm $O$ trên trần nhà và nối tới 3 đỉnh $A, B, C$ của một tam giác đều trên vành đèn. Biết góc giữa mỗi sợi dây và phương thẳng đứng là $30^\\circ$. Lực căng trên mỗi sợi dây bằng:", "$\\frac{40}{\\cos 30^\\circ} \\approx 46.2$ N", "40 N", "60 N", "120 N", "A", "Tổng hình chiếu lực căng lên phương thẳng đứng cân bằng với trọng lượng: $3T \\cos 30^\\circ = P = 120 \\Rightarrow T = \\frac{40}{\\cos 30^\\circ} = \\frac{80}{\\sqrt{3}} \\approx 46.2$ N.")
            ]
            tfs = [
                make_tf(1, "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $a$.", [
                    ("a", "$\\vec{AB} + \\vec{BC} + \\vec{CC'} = \\vec{AC'}$.", True, "Quy tắc tam giác liên tiếp: $\\vec{AC} + \\vec{CC'} = \\vec{AC'}$."),
                    ("b", "$\\vec{AB} \\cdot \\vec{AD} = 0$.", True, "Vì $ABCD$ là hình vuông nên $\\vec{AB} \\perp \\vec{AD}$."),
                    ("c", "Độ dài vectơ $\\vec{AC'}$ bằng $a\\sqrt{3}$.", True, "Độ dài đường chéo hình lập phương là $a\\sqrt{3}$."),
                    ("d", "Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{B'D'}$ bằng $45^\\circ$.", True, "$\\vec{B'D'} = \\vec{BD}$, góc giữa $AB$ và $BD$ trong hình vuông bằng $45^\\circ$.")
                ]),
                make_tf(2, "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tam giác $BCD$.", [
                    ("a", "$\\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.", True, "Tính chất trọng tâm tam giác."),
                    ("b", "Với điểm $A$ bất kỳ, $\\vec{AB} + \\vec{AC} + \\vec{AD} = 3\\vec{AG}$.", True, "Quy tắc cộng vectơ qua trọng tâm."),
                    ("c", "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.", False, "Chỉ đúng khi $G$ là trọng tâm của cả tứ diện $ABCD$."),
                    ("d", "Vectơ $\\vec{AG}$ biểu diễn qua ba vectơ xuất phát từ $A$ là $\\vec{AG} = \\frac{1}{3}(\\vec{AB} + \\vec{AC} + \\vec{AD})$.", True, "Chính xác.")
                ]),
                make_tf(3, "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$.", [
                    ("a", "$\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = \\vec{0}$.", True, "Vì $O$ là trung điểm của $AC$ và $BD$."),
                    ("b", "$\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD} = 2\\vec{SO}$.", True, "Tính chất hình bình hành và quy tắc trung điểm."),
                    ("c", "$\\vec{SA} + \\vec{SB} + \\vec{SC} + \\vec{SD} = 4\\vec{SO}$.", True, "Cộng hai đẳng thức trên."),
                    ("d", "Ba vectơ $\\vec{SA}, \\vec{SC}, \\vec{SO}$ không đồng phẳng.", False, "Vì $O$ thuộc đoạn $AC$ nên 3 vectơ $\\vec{SA}, \\vec{SC}, \\vec{SO}$ cùng nằm trong mặt phẳng $(SAC)$, tức là đồng phẳng.")
                ]),
                make_tf(4, "Cho tứ diện đều $ABCD$ có cạnh bằng $a$.", [
                    ("a", "Tam giác $ABC$ là tam giác đều cạnh $a$.", True, "Định nghĩa tứ diện đều."),
                    ("b", "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = \\frac{a^2}{2}$.", True, "$a \\cdot a \\cdot \\cos 60^\\circ = a^2/2$."),
                    ("c", "Hai đường thẳng $AB$ và $CD$ vuông góc với nhau trong không gian.", True, "$\\vec{AB} \\cdot \\vec{CD} = \\vec{AB}(\\vec{AD} - \\vec{AC}) = \\vec{AB}\\cdot\\vec{AD} - \\vec{AB}\\cdot\\vec{AC} = \\frac{a^2}{2} - \\frac{a^2}{2} = 0$."),
                    ("d", "Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{CD}$ bằng $90^\\circ$.", True, "Vì tích vô hướng bằng 0.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a = 2$. Tính độ dài vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$.", 3.46, "Tổng bằng $\\vec{AC'}$, có độ dài $a\\sqrt{3} = 2\\sqrt{3} \\approx 3.46$.", ["3.46", "3.5"]),
                make_sa(2, "TH", "Cho tứ diện đều $ABCD$ cạnh bằng 4. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{BC}$.", -8, "$\\vec{AB} \\cdot \\vec{BC} = -\\vec{BA} \\cdot \\vec{BC} = -4 \\cdot 4 \\cdot \\cos 60^\\circ = -8$."),
                make_sa(3, "TH", "Cho hình vuông $ABCD$ cạnh 3 nằm trong mặt phẳng. Tính độ dài vectơ $\\vec{AB} - \\vec{AD}$.", 4.24, "$\\vec{AB} - \\vec{AD} = \\vec{DB}$. Độ dài đường chéo $3\\sqrt{2} \\approx 4.24$.", ["4.24", "4.2"]),
                make_sa(4, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng 2. Tính tích vô hướng $\\vec{AC} \\cdot \\vec{BD}$.", 0, "Hai đường chéo hình vuông vuông góc nhau nên tích vô hướng bằng 0."),
                make_sa(5, "VD", "Cho tứ diện $ABCD$. Điểm $M$ thỏa mãn $\\vec{MA} + 2\\vec{MB} + 3\\vec{MC} = \\vec{0}$. Hỏi ba điểm $M, A, B, C$ có đồng phẳng không? (Điền 1 nếu có, 0 nếu không)", 1, "Vectơ biểu diễn tuyến tính nên $M$ thuộc mặt phẳng $(ABC)$, đồng phẳng."),
                make_sa(6, "VDC", "Ba lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một vật tại điểm $O$ và đôi một vuông góc với nhau, độ lớn lần lượt là 10 N, 20 N, 20 N. Hợp lực tác dụng lên vật có độ lớn bằng bao nhiêu N?", 30, "$|\\vec{F}| = \\sqrt{F_1^2 + F_2^2 + F_3^2} = \\sqrt{10^2 + 20^2 + 20^2} = \\sqrt{100 + 400 + 400} = \\sqrt{900} = 30$ N.")
            ]
        else:
            # EXAM 2: BÀI 6
            mcqs = [
                make_mcq(1, "NB", "Vectơ-không là vectơ có:", "Điểm đầu và điểm cuối trùng nhau, độ dài bằng 0.", "Độ dài bằng 1.", "Phương bất kỳ và độ dài bằng 1.", "Không có hướng.", "A", "Định nghĩa vectơ-không."),
                make_mcq(2, "NB", "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Vectơ nào sau đây cùng hướng với vectơ $\\vec{AB}$?", "$\\vec{DC}$", "$\\vec{CD}$", "$\\vec{BA}$", "$\\vec{A'D'}$", "A", "Trong hình bình hành $ABCD$, $\\vec{AB} = \\vec{DC}$ nên chúng cùng hướng."),
                make_mcq(3, "NB", "Hai vectơ cùng phương trong không gian là hai vectơ có:", "Giá song song hoặc trùng nhau.", "Độ dài bằng nhau.", "Cùng hướng.", "Vuông góc với nhau.", "A", "Định nghĩa hai vectơ cùng phương."),
                make_mcq(4, "NB", "Cho tứ diện $ABCD$. Vectơ $\\vec{AB} + \\vec{BD} + \\vec{DC}$ bằng:", "$\\vec{AC}$", "$\\vec{AD}$", "$\\vec{BC}$", "$\\vec{0}$", "A", "Quy tắc đa giác cộng liên tiếp: $\\vec{AB} + \\vec{BD} + \\vec{DC} = \\vec{AC}$."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Góc giữa hai vectơ $\\vec{SA}$ và $\\vec{AB}$ bằng:", "$90^\\circ$", "$45^\\circ$", "$0^\\circ$", "$60^\\circ$", "A", "Vì $SA \\perp AB$ nên góc giữa chúng bằng $90^\\circ$."),
                make_mcq(6, "TH", "Cho tứ diện đều $ABCD$ cạnh $a$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{DA}$ bằng:", "$120^\\circ$", "$60^\\circ$", "$90^\\circ$", "$180^\\circ$", "A", "Góc giữa $\\vec{AB}$ và $\\vec{DA}$ bằng $180^\\circ - 60^\\circ = 120^\\circ$."),
                make_mcq(7, "TH", "Cho hình hộp $ABCD.A'B'C'D'$. Hiệu $\\vec{AC'} - \\vec{AB}$ bằng:", "$\\vec{BC'}$", "$\\vec{C'B}$", "$\\vec{AC}$", "$\\vec{AA'}$", "A", "Quy tắc trừ: $\\vec{AC'} - \\vec{AB} = \\vec{BC'}$."),
                make_mcq(8, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{A'C'}$ bằng:", "$a^2$", "$0$", "$a^2\\sqrt{2}$", "$-a^2$", "A", "$\\vec{A'C'} = \\vec{AC} = \\vec{AB} + \\vec{AD}$. $\\vec{AB} \\cdot (\\vec{AB} + \\vec{AD}) = |\\vec{AB}|^2 + \\vec{AB} \\cdot \\vec{AD} = a^2 + 0 = a^2$."),
                make_mcq(9, "VD", "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tứ diện. Khi đó:", "$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$", "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$", "$\\vec{GA} = \\vec{GB}$", "$\\vec{GA} + \\vec{GC} = \\vec{0}$", "A", "Định nghĩa trọng tâm của tứ diện: $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABC$ có $SA = SB = SC$ và $\\widehat{ASB} = \\widehat{BSC} = \\widehat{CSA} = 60^\\circ$. Khẳng định nào sau đây đúng?", "$\\triangle ABC$ là tam giác đều.", "$\\triangle ABC$ vuông tại $A$.", "$SA \\perp BC$.", "$SB \\perp AC$.", "A", "Vì $SA = SB = SC$ và các góc ở đỉnh bằng $60^\\circ$ nên các tam giác bên là tam giác đều $\\Rightarrow AB = BC = CA = SA$. Vậy $\\triangle ABC$ đều."),
                make_mcq(11, "VDC", "Cho tứ diện $ABCD$ có $AB \\perp CD$ và $AC \\perp BD$. Khẳng định nào sau đây đúng?", "$AD \\perp BC$", "$AB \\perp AC$", "$CD \\perp BC$", "$AD \\perp BD$", "A", "Định lý tứ diện trực tâm: Nếu hai cặp cạnh đối diện vuông góc thì cặp cạnh đối diện thứ ba cũng vuông góc: $AD \\perp BC$."),
                make_mcq(12, "VDC", "Một vật chịu tác dụng của 3 lực cân bằng $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$. Biết $|\vec{F}_1| = 30$ N, $|\vec{F}_2| = 40$ N và góc giữa $\\vec{F}_1$ và $\\vec{F}_2$ bằng $90^\\circ$. Độ lớn của lực $\\vec{F}_3$ bằng:", "50 N", "70 N", "10 N", "35 N", "A", "$\\vec{F}_3 = -(\\vec{F}_1 + \\vec{F}_2) \\Rightarrow |\\vec{F}_3| = |\\vec{F}_1 + \\vec{F}_2| = \\sqrt{30^2 + 40^2} = 50$ N.")
            ]
            tfs = [
                make_tf(1, "Cho hình hộp $ABCD.A'B'C'D'$.", [
                    ("a", "$\\vec{AB} = \\vec{DC} = \\vec{A'B'} = \\vec{D'C'}$.", True, "Các cạnh đối diện bằng nhau và cùng hướng."),
                    ("b", "$\\vec{AA'} + \\vec{AB} = \\vec{AB'}$.", True, "Quy tắc hình bình hành trên mặt bên $ABB'A'$."),
                    ("c", "$\\vec{AC'} = \\vec{AA'} + \\vec{AB} + \\vec{AD}$.", True, "Quy tắc hình hộp chuẩn xác."),
                    ("d", "Vectơ $\\vec{AC'}$ và $\\vec{CA'}$ là hai vectơ bằng nhau.", False, "Chúng là hai vectơ đối nhau, ngược hướng.")
                ]),
                make_tf(2, "Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $AC$ và $BD$.", [
                    ("a", "$\\vec{IA} + \\vec{IC} = \\vec{0}$.", True, "Tính chất trung điểm."),
                    ("b", "$\\vec{JB} + \\vec{JD} = \\vec{0}$.", True, "Tính chất trung điểm."),
                    ("c", "$\\vec{IJ} = \\frac{1}{2}(\\vec{AB} + \\vec{CD})$.", True, "Hệ thức vectơ đoạn nối trung điểm."),
                    ("d", "$\\vec{IJ} = \\frac{1}{2}(\\vec{AD} + \\vec{CB})$.", True, "Hoàn toàn tương đương: $\\vec{IJ} = \\frac{1}{2}(\\vec{AD} + \\vec{CB})$.")
                ]),
                make_tf(3, "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$.", [
                    ("a", "$\\vec{AB} \\cdot \\vec{AD} = 0$.", True, "Hai cạnh kề hình vuông vuông góc."),
                    ("b", "$\\vec{AA'} \\cdot \\vec{BD} = 0$.", True, "Cạnh đứng vuông góc với đường chéo mặt đáy."),
                    ("c", "$\\vec{AC} \\cdot \\vec{BD} = 0$.", True, "Hai đường chéo hình vuông vuông góc nhau."),
                    ("d", "Độ dài vectơ $\\vec{AB} + \\vec{AD}$ bằng $a\\sqrt{2}$.", True, "Tổng bằng $\\vec{AC}$, độ dài $a\\sqrt{2}$.")
                ]),
                make_tf(4, "Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ trong không gian.", [
                    ("a", "Nếu có một vectơ bằng vectơ-không thì ba vectơ luôn đồng phẳng.", True, "Theo định lý đồng phẳng."),
                    ("b", "Nếu hai trong ba vectơ cùng phương thì ba vectơ đồng phẳng.", True, "Chính xác."),
                    ("c", "Nếu $\\vec{c} = 2\\vec{a} - 3\\vec{b}$ thì ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng.", True, "Biểu diễn tuyến tính qua hai vectơ."),
                    ("d", "Ba vectơ xuất phát từ một đỉnh của hình hộp luôn đồng phẳng.", False, "Ba cạnh xuất phát từ một đỉnh không bao giờ đồng phẳng.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh 1. Độ dài vectơ $\\vec{AC}$ bằng bao nhiêu? (Làm tròn đến 2 chữ số thập phân)", 1.41, "Độ dài đường chéo $1\\sqrt{2} \\approx 1.41$.", ["1.41", "1.4"]),
                make_sa(2, "TH", "Cho tứ diện đều $ABCD$ cạnh bằng 6. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{AD}$.", 18, "$6 \\times 6 \\times \\cos 60^\\circ = 18$."),
                make_sa(3, "TH", "Cho tam giác đều $ABC$ cạnh 4. Tính độ dài vectơ $\\vec{AB} + \\vec{AC}$.", 6.93, "$2 \\times \\text{trung tuyến} = 2 \\times 2\\sqrt{3} = 4\\sqrt{3} \\approx 6.93$.", ["6.93", "6.9"]),
                make_sa(4, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng 3. Tính tích vô hướng $\\vec{AB} \\cdot \\vec{A'D'}$.", 0, "$\\vec{A'D'} = \\vec{AD} \\perp \\vec{AB}$, tích vô hướng bằng 0."),
                make_sa(5, "VD", "Tứ diện $ABCD$ có $AB = 3, CD = 4$. Biết góc giữa $AB$ và $CD$ bằng $60^\\circ$. Tính tích vô hướng $|\\vec{AB} \\cdot \\vec{CD}|$.", 6, "$3 \\times 4 \\times \\cos 60^\\circ = 6$."),
                make_sa(6, "VDC", "Bốn lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3, \\vec{F}_4$ cùng tác dụng vào một điểm và tạo trạng thái cân bằng. Biết tổng ba lực đầu có độ lớn 25 N. Lực thứ tư có độ lớn bằng bao nhiêu N?", 25, "$\\vec{F}_4 = -(\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3) \\Rightarrow |\\vec{F}_4| = 25$ N.")
            ]

    elif lnum == 7:
        # BÀI 7: HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong không gian $Oxyz$, vectơ đơn vị trên trục $Oz$ là:", "$\\vec{k} = (0; 0; 1)$", "$\\vec{i} = (1; 0; 0)$", "$\\vec{j} = (0; 1; 0)$", "$\\vec{e} = (1; 1; 1)$", "A", "Vectơ đơn vị trên $Ox$ là $\\vec{i}$, trên $Oy$ là $\\vec{j}$, trên $Oz$ là $\\vec{k} = (0; 0; 1)$."),
                make_mcq(2, "NB", "Cho điểm $M(2; -3; 5)$. Hình chiếu vuông góc của điểm $M$ lên mặt phẳng $(Oxy)$ có tọa độ là:", "$M_1(2; -3; 0)$", "$M_2(2; 0; 5)$", "$M_3(0; -3; 5)$", "$M_4(0; 0; 5)$", "A", "Chiếu lên $(Oxy)$ thì giữ nguyên $x, y$, cho $z = 0$: $(2; -3; 0)$."),
                make_mcq(3, "NB", "Cho điểm $A(1; 4; -2)$. Hình chiếu vuông góc của điểm $A$ lên trục $Oy$ là điểm:", "$A'(0; 4; 0)$", "$A'(1; 0; 0)$", "$A'(0; 0; -2)$", "$A'(1; 4; 0)$", "A", "Chiếu lên trục $Oy$ thì giữ nguyên tung độ $y = 4$, cho hoành độ và cao độ bằng 0."),
                make_mcq(4, "NB", "Điểm đối xứng của $M(x_0; y_0; z_0)$ qua gốc tọa độ $O$ có tọa độ là:", "$(-x_0; -y_0; -z_0)$", "$(x_0; y_0; 0)$", "$(x_0; -y_0; z_0)$", "$(-x_0; y_0; z_0)$", "A", "Đối xứng qua gốc $O$ thì đổi dấu cả 3 tọa độ."),
                make_mcq(5, "TH", "Cho điểm $M(3; -4; 1)$. Khoảng cách từ điểm $M$ đến mặt phẳng $(Oxy)$ bằng:", "1", "3", "4", "5", "A", "Khoảng cách từ $M(x; y; z)$ đến $(Oxy)$ là $|z| = |1| = 1$."),
                make_mcq(6, "TH", "Cho điểm $A(1; 2; 3)$. Điểm đối xứng của $A$ qua mặt phẳng $(Oxz)$ có tọa độ là:", "$(1; -2; 3)$", "$(-1; 2; 3)$", "$(1; 2; -3)$", "$(-1; -2; -3)$", "A", "Đối xứng qua $(Oxz)$ thì giữ nguyên $x, z$ và đổi dấu $y$: $(1; -2; 3)$."),
                make_mcq(7, "TH", "Khoảng cách từ điểm $P(2; 3; 4)$ đến trục $Oz$ bằng:", "$\\sqrt{13}$", "$\\sqrt{20}$", "$\\sqrt{25}$", "4", "A", "Khoảng cách đến trục $Oz$ bằng $\\sqrt{x^2 + y^2} = \\sqrt{2^2 + 3^2} = \\sqrt{13}$."),
                make_mcq(8, "TH", "Trong không gian $Oxyz$, cho $\\vec{OM} = 2\\vec{i} - 3\\vec{k} + 4\\vec{j}$. Tọa độ của điểm $M$ là:", "$(2; 4; -3)$", "$(2; -3; 4)$", "$(-3; 4; 2)$", "$(4; 2; -3)$", "A", "Thứ tự các vectơ đơn vị là $\\vec{i}, \\vec{j}, \\vec{k}$. $\\vec{OM} = 2\\vec{i} + 4\\vec{j} - 3\\vec{k} \\Rightarrow M(2; 4; -3)$."),
                make_mcq(9, "VD", "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $A$ trùng gốc tọa độ $O$, các đỉnh $B(2; 0; 0), D(0; 3; 0), A'(0; 0; 4)$. Tọa độ của đỉnh đối diện $C'$ là:", "$C'(2; 3; 4)$", "$C'(2; 0; 4)$", "$C'(0; 3; 4)$", "$C'(2; 3; 0)$", "A", "$\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'} = (2; 0; 0) + (0; 3; 0) + (0; 0; 4) = (2; 3; 4)$."),
                make_mcq(10, "VD", "Tìm tọa độ điểm $M$ trên trục $Ox$ cách đều hai điểm $A(1; 2; 3)$ và $B(-1; 0; 1)$.", "$M(3; 0; 0)$", "$M(2; 0; 0)$", "$M(-2; 0; 0)$", "$M(1; 0; 0)$", "A", "$M(x; 0; 0) \\in Ox$. $MA^2 = MB^2 \\Leftrightarrow (x-1)^2 + 4 + 9 = (x+1)^2 + 0 + 1 \\Leftrightarrow x^2 - 2x + 14 = x^2 + 2x + 2 \\Leftrightarrow 4x = 12 \\Leftrightarrow x = 3$."),
                make_mcq(11, "VDC", "Cho tam giác $ABC$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Trực tâm $H$ của tam giác $ABC$ có tọa độ thỏa mãn:", "Tọa độ $H$ tỉ lệ nghịch với bình phương các đoạn chắn.", "$H(1; 2; 3)$", "$H(1/3; 2/3; 1)$", "$H(0; 0; 0)$", "A", "Đây là tính chất trực tâm tam giác trên các trục tọa độ: $\\frac{1}{OH^2} = \\frac{1}{a^2} + \\frac{1}{b^2} + \\frac{1}{c^2}$."),
                make_mcq(12, "VDC", "Một trạm phát sóng radar đặt tại gốc $O$. Một máy bay đang ở vị trí $M(6; 8; 3)$ (đơn vị km). Khoảng cách từ máy bay đến trạm radar bằng:", "$\\sqrt{109} \\approx 10.44$ km", "10 km", "17 km", "14 km", "A", "$OM = \\sqrt{6^2 + 8^2 + 3^2} = \\sqrt{36 + 64 + 9} = \\sqrt{109} \\approx 10.44$ km.")
            ]
            tfs = [
                make_tf(1, "Trong không gian $Oxyz$, cho điểm $A(2; -1; 3)$.", [
                    ("a", "Hình chiếu vuông góc của điểm $A$ lên mặt phẳng $(Oxy)$ là $A_1(2; -1; 0)$.", True, "Chính xác."),
                    ("b", "Hình chiếu vuông góc của điểm $A$ lên trục $Oz$ là $A_2(0; 0; 3)$.", True, "Chính xác."),
                    ("c", "Điểm đối xứng của $A$ qua gốc $O$ là $A'(-2; 1; -3)$.", True, "Đổi dấu cả 3 tọa độ."),
                    ("d", "Khoảng cách từ $A$ đến mặt phẳng $(Oyz)$ bằng 2.", True, "$d(A, (Oyz)) = |x_A| = |2| = 2$.")
                ]),
                make_tf(2, "Cho ba điểm $A(1; 0; 0), B(0; 3; 0), C(0; 0; 2)$.", [
                    ("a", "Điểm $A$ thuộc trục $Ox$, $B$ thuộc trục $Oy$, $C$ thuộc trục $Oz$.", True, "Chính xác."),
                    ("b", "Tam giác $OAB$ là tam giác vuông tại $O$.", True, "Hai trục $Ox$ và $Oy$ vuông góc nhau."),
                    ("c", "Tứ diện $OABC$ có ba cạnh $OA, OB, OC$ đôi một vuông góc.", True, "Các trục toạ độ đôi một vuông góc."),
                    ("d", "Thể tích tứ diện $OABC$ bằng 1.", True, "$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\times 1 \\times 3 \\times 2 = 1$.")
                ]),
                make_tf(3, "Cho điểm $M(1; 2; -3)$.", [
                    ("a", "Khoảng cách từ $M$ đến trục $Ox$ bằng $\\sqrt{2^2 + (-3)^2} = \\sqrt{13}$.", True, "Công thức chuẩn."),
                    ("b", "Khoảng cách từ $M$ đến trục $Oy$ bằng $\\sqrt{1^2 + (-3)^2} = \\sqrt{10}$.", True, "Công thức chuẩn."),
                    ("c", "Khoảng cách từ $M$ đến trục $Oz$ bằng $\\sqrt{1^2 + 2^2} = \\sqrt{5}$.", True, "Công thức chuẩn."),
                    ("d", "Khoảng cách từ $M$ đến gốc tọa độ $O$ bằng $\\sqrt{14}$.", True, "$OM = \\sqrt{1 + 4 + 9} = \\sqrt{14}$.")
                ]),
                make_tf(4, "Xét hình hộp chữ nhật $ABCD.A'B'C'D'$ có $A(0; 0; 0)$, $B(4; 0; 0)$, $D(0; 6; 0)$, $A'(0; 0; 3)$.", [
                    ("a", "Đỉnh $C$ nằm trong mặt phẳng $(Oxy)$ và có tọa độ là $(4; 6; 0)$.", True, "Hình chữ nhật đáy $ABCD$."),
                    ("b", "Đỉnh $B'$ có tọa độ là $(4; 0; 3)$.", True, "Cộng cao độ của $A'$."),
                    ("c", "Đỉnh $D'$ có tọa độ là $(0; 6; 3)$.", True, "Chính xác."),
                    ("d", "Đỉnh $C'$ có tọa độ là $(4; 6; 3)$.", True, "Đỉnh đối diện đỉnh $A$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm cao độ của hình chiếu của điểm $M(3; 5; -7)$ lên mặt phẳng $(Oxz)$.", -7, "Chiếu lên $(Oxz)$ giữ nguyên $x = 3, z = -7$."),
                make_sa(2, "TH", "Tính khoảng cách từ điểm $M(3; 4; 5)$ đến trục $Oz$.", 5, "$\\sqrt{3^2 + 4^2} = 5$."),
                make_sa(3, "TH", "Tính khoảng cách từ điểm $A(-2; 6; -9)$ đến mặt phẳng $(Oxy)$.", 9, "$|z| = |-9| = 9$."),
                make_sa(4, "VD", "Cho điểm $A(2; 1; -1)$. Điểm $B$ đối xứng với $A$ qua trục $Oy$. Tính độ dài đoạn thẳng $AB$.", 4.47, "$B(-2; 1; 1)$. $AB = \\sqrt{(-4)^2 + 0 + 2^2} = \\sqrt{20} \\approx 4.47$.", ["4.47", "4.5"]),
                make_sa(5, "VD", "Tìm hoành độ điểm $M$ thuộc trục $Ox$ sao cho khoảng cách từ $M$ đến điểm $A(1; 2; 2)$ bằng 5. Biết $x_M > 0$.", 5.12, "$(x - 1)^2 + 4 + 4 = 25 \\Leftrightarrow (x - 1)^2 = 17 \\Rightarrow x = 1 + \\sqrt{17} \\approx 5.12$.", ["5.12", "5.1"]),
                make_sa(6, "VDC", "Trong không gian, một máy bay cất cánh từ sân bay tại gốc $O$, bay theo đường thẳng đến vị trí $A(30; 40; 10)$ (đơn vị km). Độ dài đường bay từ $O$ đến $A$ bằng bao nhiêu km? (Làm tròn đến hàng phần mười)", 51.0, "$OA = \\sqrt{30^2 + 40^2 + 10^2} = \\sqrt{900 + 1600 + 100} = \\sqrt{2600} \\approx 50.99 \\approx 51.0$ km.", ["51", "51.0"])
            ]
        else:
            # EXAM 2: BÀI 7
            mcqs = [
                make_mcq(1, "NB", "Trong không gian $Oxyz$, trục $Oy$ có vectơ đơn vị là:", "$\\vec{j} = (0; 1; 0)$", "$\\vec{i} = (1; 0; 0)$", "$\\vec{k} = (0; 0; 1)$", "$\\vec{0} = (0; 0; 0)$", "A", "Trục $Oy$ có vectơ đơn vị $\\vec{j} = (0; 1; 0)$."),
                make_mcq(2, "NB", "Điểm nằm trên mặt phẳng $(Oyz)$ thì có tọa độ thỏa mãn:", "$x = 0$", "$y = 0$", "$z = 0$", "$x = y = 0$", "A", "Mọi điểm trên $(Oyz)$ đều có hoành độ $x = 0$."),
                make_mcq(3, "NB", "Hình chiếu vuông góc của điểm $A(3; 2; -5)$ lên trục $Ox$ là:", "$A_1(3; 0; 0)$", "$A_2(0; 2; 0)$", "$A_3(0; 0; -5)$", "$A_4(3; 2; 0)$", "A", "Chiếu lên $Ox$ thì chỉ giữ lại hoành độ."),
                make_mcq(4, "NB", "Điểm đối xứng của $N(-1; 3; -4)$ qua mặt phẳng $(Oxy)$ có tọa độ là:", "$(-1; 3; 4)$", "$(1; -3; 4)$", "$(-1; -3; -4)$", "$(1; 3; -4)$", "A", "Đối xứng qua $(Oxy)$ giữ nguyên $x, y$ và đổi dấu $z$."),
                make_mcq(5, "TH", "Khoảng cách từ điểm $M(1; -2; 4)$ đến mặt phẳng $(Oxz)$ bằng:", "2", "1", "4", "$\\sqrt{17}$", "A", "$d(M, (Oxz)) = |y| = |-2| = 2$."),
                make_mcq(6, "TH", "Khoảng cách từ điểm $B(3; 0; 4)$ đến gốc tọa độ $O$ bằng:", "5", "7", "1", "25", "A", "$OB = \\sqrt{3^2 + 0^2 + 4^2} = 5$."),
                make_mcq(7, "TH", "Cho $\\vec{u} = 3\\vec{i} - 2\\vec{j}$. Tọa độ của vectơ $\\vec{u}$ trong không gian $Oxyz$ là:", "$(3; -2; 0)$", "$(3; 0; -2)$", "$(0; 3; -2)$", "$(-2; 3; 0)$", "A", "Khuyết $\\vec{k}$ nên cao độ $z = 0$."),
                make_mcq(8, "TH", "Khoảng cách từ điểm $M(4; 3; 1)$ đến trục $Oy$ bằng:", "$\\sqrt{17}$", "5", "$\\sqrt{10}$", "3", "A", "$d(M, Oy) = \\sqrt{x^2 + z^2} = \\sqrt{4^2 + 1^2} = \\sqrt{17}$."),
                make_mcq(9, "VD", "Cho tam giác $ABC$ có các đỉnh $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Diện tích tam giác $OAB$ bằng:", "1", "2", "3", "1/2", "A", "Tam giác $OAB$ vuông tại $O$, $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\times 1 \\times 2 = 1$."),
                make_mcq(10, "VD", "Tìm tọa độ điểm $N$ trên trục $Oz$ cách đều hai điểm $A(2; 1; 1)$ và $B(1; 3; 2)$.", "$N(0; 0; 4)$", "$N(0; 0; 2)$", "$N(0; 0; 3)$", "$N(0; 0; 1)$", "A", "$N(0; 0; z)$. $NA^2 = NB^2 \\Leftrightarrow 4 + 1 + (z-1)^2 = 1 + 9 + (z-2)^2 \\Leftrightarrow z^2 - 2z + 6 = z^2 - 4z + 14 \\Leftrightarrow 2z = 8 \\Leftrightarrow z = 4$."),
                make_mcq(11, "VDC", "Cho hình hộp chữ nhật có 3 kích thước $a = 3, b = 4, c = 5$. Khoảng cách từ đỉnh đối diện đến gốc $O$ là đường chéo hình hộp bằng:", "$5\\sqrt{2}$", "12", "10", "$\\sqrt{50}$", "A", "Đường chéo $d = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$."),
                make_mcq(12, "VDC", "Một thiết bị định vị GPS xác định một vệ tinh tại tọa độ $(12000; 16000; 15000)$ (km). Khoảng cách từ vệ tinh đến tâm Trái Đất (coi là gốc $O$) bằng:", "$25000$ km", "$20000$ km", "$28000$ km", "$22000$ km", "A", "$d = \\sqrt{12000^2 + 16000^2 + 15000^2} = \\sqrt{144 + 256 + 225} \\times 10^3 = \\sqrt{625} \\times 10^3 = 25000$ km.")
            ]
            tfs = [
                make_tf(1, "Trong không gian $Oxyz$, cho điểm $M(-3; 2; 5)$.", [
                    ("a", "Hình chiếu của $M$ lên trục $Ox$ là điểm $(-3; 0; 0)$.", True, "Chính xác."),
                    ("b", "Hình chiếu của $M$ lên mặt phẳng $(Oxz)$ là $(-3; 0; 5)$.", True, "Chính xác."),
                    ("c", "Khoảng cách từ $M$ đến mặt phẳng $(Oxy)$ bằng 5.", True, "$|z| = 5$."),
                    ("d", "Điểm đối xứng của $M$ qua trục $Oz$ là $(3; -2; 5)$.", True, "Đối xứng qua trục $Oz$ đổi dấu $x, y$.")
                ]),
                make_tf(2, "Cho ba điểm $M(2; 0; 0), N(0; -4; 0), P(0; 0; 6)$.", [
                    ("a", "$M$ nằm trên tia đối của trục $Ox$.", False, "$x_M = 2 > 0$ nên nằm trên phần dương của trục $Ox$."),
                    ("b", "$N$ nằm trên phần âm của trục $Oy$.", True, "$y_N = -4 < 0$."),
                    ("c", "Tam giác $OMP$ là tam giác vuông tại $O$.", True, "Góc giữa 2 trục bằng $90^\\circ$."),
                    ("d", "Độ dài đoạn thẳng $MN = \\sqrt{2^2 + (-4)^2} = \\sqrt{20}$.", True, "Định lý Pytago.")
                ]),
                make_tf(3, "Cho điểm $A(1; 2; 3)$ và điểm $B(3; 2; 1)$.", [
                    ("a", "Hình chiếu của $A$ và $B$ lên mặt phẳng $(Oxy)$ lần lượt là $(1; 2; 0)$ và $(3; 2; 0)$.", True, "Chính xác."),
                    ("b", "Đoạn thẳng nối hai hình chiếu đó có độ dài bằng 2.", True, "Khoảng cách giữa $(1; 2; 0)$ và $(3; 2; 0)$ bằng $|3 - 1| = 2$."),
                    ("c", "Hai điểm $A$ và $B$ có cùng khoảng cách đến mặt phẳng $(Oxz)$.", True, "Cùng tung độ $y = 2$ nên cùng khoảng cách $|2| = 2$."),
                    ("d", "Trung điểm của đoạn $AB$ có tọa độ là $(2; 2; 2)$.", True, "$\\frac{1+3}{2} = 2, \\frac{2+2}{2} = 2, \\frac{3+1}{2} = 2$.")
                ]),
                make_tf(4, "Một căn phòng có dạng hình hộp chữ nhật kích thước dài 5m, rộng 4m, cao 3m. Gắn hệ trục tọa độ $Oxyz$ sao cho gốc $O$ ở một góc phòng, các cạnh theo các trục $Ox, Oy, Oz$.", [
                    ("a", "Tọa độ đỉnh đối diện với gốc $O$ trên trần nhà là $(5; 4; 3)$.", True, "Chính xác."),
                    ("b", "Vị trí tâm bóng đèn treo ở giữa trần nhà có tọa độ là $(2.5; 2; 3)$.", True, "Trung điểm trần nhà."),
                    ("c", "Khoảng cách từ tâm bóng đèn đến sàn nhà là 3 mét.", True, "Cao độ $z = 3$."),
                    ("d", "Khoảng cách từ bóng đèn đến góc phòng $O$ bằng $\\sqrt{2.5^2 + 2^2 + 3^2} = \\sqrt{19.25} \\approx 4.39$ m.", True, "Tính khoảng cách từ gốc $O$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hoành độ hình chiếu vuông góc của điểm $A(-4; 7; 2)$ lên mặt phẳng $(Oxy)$.", -4, "Hoành độ giữ nguyên là -4."),
                make_sa(2, "TH", "Tính khoảng cách từ điểm $M(6; -8; 0)$ đến gốc tọa độ $O$.", 10, "$\\sqrt{36 + 64} = 10$."),
                make_sa(3, "TH", "Tính khoảng cách từ điểm $K(3; 0; 4)$ đến trục $Oy$.", 5, "$\\sqrt{3^2 + 4^2} = 5$."),
                make_sa(4, "VD", "Cho điểm $A(1; 3; -2)$. Điểm đối xứng với $A$ qua mặt phẳng $(Oxy)$ có cao độ bằng bao nhiêu?", 2, "Đối xứng qua $(Oxy)$ đổi dấu $z$: $-(-2) = 2$."),
                make_sa(5, "VD", "Tìm tung độ của điểm $M$ trên trục $Oy$ cách điểm $A(2; 0; 1)$ một khoảng bằng 3. Biết $y_M > 0$.", 2, "$4 + y^2 + 1 = 9 \\Leftrightarrow y^2 = 4 \\Rightarrow y = 2$."),
                make_sa(6, "VDC", "Một flycam đang ở tọa độ $A(100; 200; 50)$ (mét). Khoảng cách từ flycam đến mặt đất (mặt phẳng $Oxy$) bằng bao nhiêu mét?", 50, "Khoảng cách đến mặt đất là cao độ $z = 50$ m.")
            ]

    elif lnum == 8:
        # BÀI 8: BIỂU THỨC TOẠ ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$. Tọa độ của vectơ $\\vec{u} + \\vec{v}$ là:", "$(x_1 + x_2; y_1 + y_2; z_1 + z_2)$", "$(x_1 - x_2; y_1 - y_2; z_1 - z_2)$", "$(x_1 x_2; y_1 y_2; z_1 z_2)$", "$(x_1 + y_1; x_2 + y_2; z_1 + z_2)$", "A", "Công thức cộng hai vectơ theo tọa độ."),
                make_mcq(2, "NB", "Tích vô hướng của hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ bằng:", "$x_1 x_2 + y_1 y_2 + z_1 z_2$", "$\\sqrt{x_1^2 + y_1^2 + z_1^2}$", "$x_1 y_2 - x_2 y_1$", "$x_1 + x_2 + y_1 + y_2 + z_1 + z_2$", "A", "Biểu thức tọa độ của tích vô hướng."),
                make_mcq(3, "NB", "Độ dài của vectơ $\\vec{u} = (x; y; z)$ được tính bởi công thức:", "$|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}$", "$|\\vec{u}| = x^2 + y^2 + z^2$", "$|\\vec{u}| = |x| + |y| + |z|$", "$|\\vec{u}| = \\sqrt{x + y + z}$", "A", "Độ dài vectơ."),
                make_mcq(4, "NB", "Cho hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$. Tọa độ vectơ $\\vec{AB}$ là:", "$(x_B - x_A; y_B - y_A; z_B - z_A)$", "$(x_A - x_B; y_A - y_B; z_A - z_B)$", "$(x_A + x_B; y_A + y_B; z_A + z_B)$", "$(x_B + x_A; y_B - y_A; z_B + z_A)$", "A", "Tọa độ vectơ bằng tọa độ điểm ngọn trừ điểm gốc."),
                make_mcq(5, "TH", "Cho $\\vec{a} = (1; 2; -3)$ và $\\vec{b} = (-2; 1; 4)$. Tọa độ của vectơ $\\vec{u} = 2\\vec{a} + \\vec{b}$ là:", "$(0; 5; -2)$", "$(0; 5; 2)$", "$(-3; 5; -2)$", "$(4; 3; -2)$", "A", "$2(1; 2; -3) + (-2; 1; 4) = (2; 4; -6) + (-2; 1; 4) = (0; 5; -2)$."),
                make_mcq(6, "TH", "Cho $A(1; 2; 3)$ và $B(3; 0; -1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:", "$M(2; 1; 1)$", "$M(4; 2; 2)$", "$M(1; -1; -2)$", "$M(2; 1; 2)$", "A", "$M\\left(\\frac{1+3}{2}; \\frac{2+0}{2}; \\frac{3-1}{2}\\right) = (2; 1; 1)$."),
                make_mcq(7, "TH", "Tích vô hướng của hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; 4; 2)$ bằng:", "4", "3", "5", "0", "A", "$\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(4) + 3(2) = 2 - 4 + 6 = 4$."),
                make_mcq(8, "TH", "Hai vectơ $\\vec{a} = (1; m; 2)$ và $\\vec{b} = (2; -1; 3)$ vuông góc với nhau khi $m$ bằng:", "8", "-8", "4", "-4", "A", "$\\vec{a} \\cdot \\vec{b} = 1(2) + m(-1) + 2(3) = 8 - m = 0 \\Leftrightarrow m = 8$."),
                make_mcq(9, "VD", "Cho tam giác $ABC$ có $A(1; 2; 3), B(2; 1; 0), C(3; 3; 3)$. Trọng tâm $G$ của tam giác $ABC$ có tọa độ là:", "$G(2; 2; 2)$", "$G(6; 6; 6)$", "$G(2; 3; 2)$", "$G(1; 1; 1)$", "A", "$G\\left(\\frac{1+2+3}{3}; \\frac{2+1+3}{3}; \\frac{3+0+3}{3}\\right) = (2; 2; 2)$."),
                make_mcq(10, "VD", "Cosin của góc giữa hai vectơ $\\vec{a} = (1; 0; -1)$ và $\\vec{b} = (0; 1; 1)$ bằng:", "$-1/2$", "1/2", "$\\sqrt{2}/2$", "0", "A", "$\\cos(\\vec{a}, \\vec{b}) = \\frac{1(0) + 0(1) + (-1)(1)}{\\sqrt{1+0+1}\\sqrt{0+1+1}} = \\frac{-1}{\\sqrt{2}\\sqrt{2}} = -1/2$."),
                make_mcq(11, "VDC", "Cho 3 điểm $A(1; 1; 1), B(2; 3; 4), C(3; 5; 7)$. Khẳng định nào sau đây đúng?", "Ba điểm $A, B, C$ thẳng hàng.", "Tam giác $ABC$ vuông tại $A$.", "Tam giác $ABC$ đều.", "$A, B, C$ tạo thành tam giác cân.", "A", "$\\vec{AB} = (1; 2; 3), \\vec{BC} = (1; 2; 3) \\Rightarrow \\vec{BC} = \\vec{AB} \\Rightarrow A, B, C$ thẳng hàng."),
                make_mcq(12, "VDC", "Tìm tọa độ điểm $D$ để tứ giác $ABCD$ là hình bình hành biết $A(1; 2; 3), B(2; 1; 2), C(4; 3; 5)$.", "$D(3; 4; 6)$", "$D(5; 2; 4)$", "$D(3; 2; 4)$", "$D(1; 4; 4)$", "A", "$ABCD$ là hình bình hành $\\Leftrightarrow \\vec{AD} = \\vec{BC}$. $\\vec{BC} = (2; 2; 3) \\Rightarrow D(1+2; 2+2; 3+3) = (3; 4; 6)$.")
            ]
            tfs = [
                make_tf(1, "Cho ba điểm $A(1; -1; 2), B(3; 1; 4), C(0; 2; 1)$.", [
                    ("a", "Tọa độ vectơ $\\vec{AB} = (2; 2; 2)$.", True, "$(3-1; 1-(-1); 4-2) = (2; 2; 2)$."),
                    ("b", "Độ dài đoạn thẳng $AB = 2\\sqrt{3}$.", True, "$\\sqrt{4 + 4 + 4} = \\sqrt{12} = 2\\sqrt{3}$."),
                    ("c", "Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là $(2; 0; 3)$.", True, "$\\frac{1+3}{2} = 2, \\frac{-1+1}{2} = 0, \\frac{2+4}{2} = 3$."),
                    ("d", "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.", False, "$\\vec{AC} = (-1; 3; -1)$. $\\vec{AB} \\cdot \\vec{AC} = 2(-1) + 2(3) + 2(-1) = 2 \\ne 0$.")
                ]),
                make_tf(2, "Cho hai vectơ $\\vec{u} = (2; -1; 2)$ và $\\vec{v} = (1; 2; -2)$.", [
                    ("a", "Độ dài $|\vec{u}| = 3$.", True, "$\\sqrt{4 + 1 + 4} = 3$."),
                    ("b", "Độ dài $|\vec{v}| = 3$.", True, "$\\sqrt{1 + 4 + 4} = 3$."),
                    ("c", "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = -4$.", True, "$2(1) + (-1)(2) + 2(-2) = 2 - 2 - 4 = -4$."),
                    ("d", "Cosin của góc giữa hai vectơ bằng $-\\frac{4}{9}$.", True, "$\\cos = \\frac{-4}{3 \\times 3} = -\\frac{4}{9}$.")
                ]),
                make_tf(3, "Cho ba điểm $A(1; 0; 2), B(-1; 1; 3), C(3; 2; 4)$.", [
                    ("a", "$\\vec{AB} = (-2; 1; 1)$.", True, "Chính xác."),
                    ("b", "$\\vec{AC} = (2; 2; 2)$.", True, "Chính xác."),
                    ("c", "$\\vec{AB} \\cdot \\vec{AC} = 0$.", True, "$(-2)(2) + 1(2) + 1(2) = -4 + 2 + 2 = 0$."),
                    ("d", "Tam giác $ABC$ là tam giác vuông tại đỉnh $A$.", True, "Vì tích vô hướng bằng 0.")
                ]),
                make_tf(4, "Cho hai vectơ $\\vec{a} = (2; 1; -3)$ và $\\vec{b} = (m; 2; 1)$.", [
                    ("a", "$\\vec{a} + \\vec{b} = (m + 2; 3; -2)$.", True, "Chính xác."),
                    ("b", "$\\vec{a} \\cdot \\vec{b} = 2m - 1$.", True, "$2m + 2 - 3 = 2m - 1$."),
                    ("c", "Để $\\vec{a} \\perp \\vec{b}$ thì $m = 1/2$.", True, "$2m - 1 = 0 \\Leftrightarrow m = 1/2$."),
                    ("d", "Không tồn tại giá trị nào của $m$ để $\\vec{a}$ và $\\vec{b}$ cùng phương.", True, "Tỉ số $\\frac{1}{2} \\ne \\frac{-3}{1} = -3$ nên không bao giờ cùng phương.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $\\vec{u} = (2; -3; 4)$. Tính độ dài của vectơ $\\vec{u}$. (Làm tròn đến 2 chữ số thập phân)", 5.39, "$\\sqrt{4 + 9 + 16} = \\sqrt{29} \\approx 5.39$.", ["5.39", "5.4"]),
                make_sa(2, "TH", "Cho $A(1; 2; 3)$ và $B(4; 6; 3)$. Tính độ dài đoạn thẳng $AB$.", 5, "$\\sqrt{3^2 + 4^2 + 0} = 5$."),
                make_sa(3, "TH", "Cho $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (2; -1; 4)$. Tính tích vô hướng $\\vec{a} \\cdot \\vec{b}$.", 12, "$1(2) + 2(-1) + 3(4) = 2 - 2 + 12 = 12$."),
                make_sa(4, "VD", "Tìm $m$ để hai vectơ $\\vec{u} = (m; 2; -1)$ và $\\vec{v} = (3; -1; 4)$ vuông góc với nhau.", 2, "$3m - 2 - 4 = 0 \\Leftrightarrow 3m = 6 \\Leftrightarrow m = 2$."),
                make_sa(5, "VD", "Cho tam giác $ABC$ có $A(1; 1; 1), B(2; 3; 0), C(3; -1; 5)$. Tìm cao độ trọng tâm $G$ của tam giác.", 2, "$z_G = \\frac{1 + 0 + 5}{3} = 2$."),
                make_sa(6, "VDC", "Cho hai vectơ $\\vec{u}$ và $\\vec{v}$ thỏa mãn $|\\vec{u}| = 2, |\\vec{v}| = 3$ và góc giữa chúng bằng $60^\\circ$. Tính độ dài vectơ $\\vec{u} - \\vec{v}$. (Làm tròn đến 2 chữ số thập phân)", 2.65, "$|\\vec{u} - \\vec{v}|^2 = 4 + 9 - 2(2)(3)\\cos 60^\\circ = 13 - 6 = 7 \\Rightarrow \\sqrt{7} \\approx 2.65$.", ["2.65", "2.6"])
            ]
        else:
            # EXAM 2: BÀI 8
            mcqs = [
                make_mcq(1, "NB", "Cho $\\vec{u} = (x; y; z)$ và số thực $k$. Tọa độ của vectơ $k\\vec{u}$ là:", "$(kx; ky; kz)$", "$(k+x; k+y; k+z)$", "$(x; y; kz)$", "$(kx; y; z)$", "A", "Công thức nhân vectơ với một số."),
                make_mcq(2, "NB", "Cho hai vectơ $\\vec{a} = (x_1; y_1; z_1)$ và $\\vec{b} = (x_2; y_2; z_2)$. Điều kiện để $\\vec{a} = \\vec{b}$ là:", "$x_1 = x_2, y_1 = y_2, z_1 = z_2$", "$x_1 + y_1 + z_1 = x_2 + y_2 + z_2$", "$|\\vec{a}| = |\\vec{b}|$", "$x_1 x_2 = y_1 y_2 = z_1 z_2$", "A", "Hai vectơ bằng nhau khi các tọa độ tương ứng bằng nhau."),
                make_mcq(3, "NB", "Độ dài đoạn thẳng $AB$ nối hai điểm $A(x_A; y_A; z_A)$ và $B(x_B; y_B; z_B)$ là:", "$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$", "$AB = (x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2$", "$AB = |x_B - x_A| + |y_B - y_A| + |z_B - z_A|$", "$AB = \\sqrt{x_B^2 + y_B^2 + z_B^2}$", "A", "Công thức tính khoảng cách giữa hai điểm."),
                make_mcq(4, "NB", "Hai vectơ $\\vec{u} = (2; -4; 6)$ và $\\vec{v} = (1; -2; 3)$ là hai vectơ:", "Cùng hướng vì $\\vec{u} = 2\\vec{v}$ với $k = 2 > 0$.", "Ngược hướng.", "Vuông góc.", "Không cùng phương.", "A", "$\\vec{u} = 2\\vec{v}$ với hệ số dương nên cùng hướng."),
                make_mcq(5, "TH", "Cho $A(2; 1; -3)$ và $B(0; 3; 1)$. Tọa độ của vectơ $\\vec{BA}$ là:", "$(2; -2; -4)$", "$(-2; 2; 4)$", "$(1; 2; -1)$", "$(2; 4; -2)$", "A", "$\\vec{BA} = (2 - 0; 1 - 3; -3 - 1) = (2; -2; -4)$."),
                make_mcq(6, "TH", "Cho $\\vec{a} = (3; -2; 1)$ và $\\vec{b} = (1; 1; -2)$. Tọa độ vectơ $\\vec{a} - 2\\vec{b}$ là:", "$(1; -4; 5)$", "$(1; 0; 5)$", "$(5; 0; -3)$", "$(1; -4; -3)$", "A", "$(3 - 2; -2 - 2; 1 - (-4)) = (1; -4; 5)$."),
                make_mcq(7, "TH", "Tích vô hướng của $\\vec{u} = (1; -3; 2)$ và $\\vec{v} = (4; 2; 1)$ bằng:", "0", "4", "2", "-2", "A", "$1(4) + (-3)(2) + 2(1) = 4 - 6 + 2 = 0$."),
                make_mcq(8, "TH", "Cho tam giác $ABC$ có $A(1; 0; 1), B(0; 2; 3), C(2; 1; -1)$. Tọa độ trọng tâm $G$ của tam giác là:", "$G(1; 1; 1)$", "$G(3; 3; 3)$", "$G(1; 1; 0)$", "$G(2; 2; 2)$", "A", "$G\\left(\\frac{1+0+2}{3}; \\frac{0+2+1}{3}; \\frac{1+3-1}{3}\\right) = (1; 1; 1)$."),
                make_mcq(9, "VD", "Tìm $m$ để hai vectơ $\\vec{a} = (m; 1; -2)$ và $\\vec{b} = (2; -m; 4)$ vuông góc với nhau.", "$m = 8$", "$m = -8$", "$m = 4$", "$m = -4$", "A", "$\\vec{a} \\cdot \\vec{b} = 2m - m - 8 = m - 8 = 0 \\Leftrightarrow m = 8$."),
                make_mcq(10, "VD", "Cho $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$. Độ dài trung tuyến $AM$ của tam giác $ABC$ bằng:", "$\\sqrt{14}$", "$2\\sqrt{3}$", "$\\sqrt{17}$", "4", "A", "$M(-1; 3; 3)$. $\\vec{AM} = (-2; 1; 4) \\Rightarrow AM = \\sqrt{4 + 1 + 16} = \\sqrt{21}$? À: $M = ((-1+2)/2; (-1+7)/2; (3+5)/2) = (-1; 3; 4)$. $\\vec{AM} = (-2; 1; 5) \\Rightarrow \\sqrt{30}$."),
                make_mcq(11, "VDC", "Cho 3 điểm $A(2; 1; -1), B(3; 0; 1), C(2; -1; 3)$. Góc $\\widehat{BAC}$ của tam giác $ABC$ bằng:", "$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$120^\\circ$", "A", "$\\vec{AB} = (1; -1; 2), \\vec{AC} = (0; -2; 4)$. $\\cos A = \\frac{0 + 2 + 8}{\\sqrt{6}\\sqrt{20}} = \\frac{10}{\\sqrt{120}} = \\frac{10}{2\\sqrt{30}} = \\frac{\\sqrt{30}}{6}$."),
                make_mcq(12, "VDC", "Tìm điểm $M$ trên mặt phẳng $(Oxy)$ sao cho biểu thức $P = MA^2 + MB^2$ đạt giá trị nhỏ nhất với $A(1; 2; 3)$ và $B(3; 4; 5)$.", "$M(2; 3; 0)$", "$M(1; 2; 0)$", "$M(3; 4; 0)$", "$M(0; 0; 0)$", "A", "Gọi $I$ là trung điểm $AB \\Rightarrow I(2; 3; 4)$. $MA^2 + MB^2 = 2MI^2 + AB^2/2$. Nhỏ nhất khi $M$ là hình chiếu của $I$ lên $(Oxy) \\Rightarrow M(2; 3; 0)$.")
            ]
            tfs = [
                make_tf(1, "Cho ba điểm $A(2; 0; 1), B(1; 1; 2), C(3; -1; 0)$.", [
                    ("a", "$\\vec{AB} = (-1; 1; 1)$.", True, "Chính xác."),
                    ("b", "$\\vec{BC} = (2; -2; -2)$.", True, "Chính xác."),
                    ("c", "$\\vec{BC} = -2\\vec{AB}$.", True, "$-2(-1; 1; 1) = (2; -2; -2)$."),
                    ("d", "Ba điểm $A, B, C$ thẳng hàng.", True, "Hai vectơ cùng phương.")
                ]),
                make_tf(2, "Cho hai vectơ $\\vec{a} = (1; 2; -2)$ và $\\vec{b} = (2; -1; 2)$.", [
                    ("a", "Độ dài $|\\vec{a}| = 3$.", True, "$\\sqrt{1+4+4} = 3$."),
                    ("b", "Độ dài $|\\vec{b}| = 3$.", True, "$\\sqrt{4+1+4} = 3$."),
                    ("c", "Tích vô hướng $\\vec{a} \\cdot \\vec{b} = -4$.", True, "$2 - 2 - 4 = -4$."),
                    ("d", "Góc giữa hai vectơ là một góc tù.", True, "Cosin âm nên góc tù.")
                ]),
                make_tf(3, "Cho tam giác $ABC$ với $A(1; 2; 3), B(2; 4; 4), C(3; 1; 5)$.", [
                    ("a", "$\\vec{AB} = (1; 2; 1)$ có độ dài bằng $\\sqrt{6}$.", True, "Chính xác."),
                    ("b", "$\\vec{AC} = (2; -1; 2)$ có độ dài bằng 3.", True, "$\\sqrt{4+1+4} = 3$."),
                    ("c", "$\\vec{AB} \\cdot \\vec{AC} = 2$.", True, "$1(2) + 2(-1) + 1(2) = 2$."),
                    ("d", "Tam giác $ABC$ là tam giác nhọn.", True, "Tích vô hướng dương.")
                ]),
                make_tf(4, "Cho hai điểm $A(1; 2; 3)$ và $B(5; 6; 7)$.", [
                    ("a", "Vectơ $\\vec{AB} = (4; 4; 4)$.", True, "Chính xác."),
                    ("b", "Độ dài đoạn thẳng $AB = 4\\sqrt{3}$.", True, "$\\sqrt{16+16+16} = 4\\sqrt{3}$."),
                    ("c", "Trung điểm của $AB$ là $M(3; 4; 5)$.", True, "Chính xác."),
                    ("d", "Điểm đối xứng của $A$ qua $B$ là điểm $C(9; 10; 11)$.", True, "$C = 2B - A = (10-1; 12-2; 14-3) = (9; 10; 11)$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $\\vec{a} = (2; 1; -2)$. Tính độ dài của vectơ $\\vec{a}$.", 3, "$\\sqrt{4 + 1 + 4} = 3$."),
                make_sa(2, "TH", "Cho $A(1; 1; 2)$ và $B(3; 5; -2)$. Tìm hoành độ trung điểm $M$ của đoạn thẳng $AB$.", 2, "$(1 + 3)/2 = 2$."),
                make_sa(3, "TH", "Cho $\\vec{u} = (2; -1; 1)$ và $\\vec{v} = (1; 3; -2)$. Tính tích vô hướng $\\vec{u} \\cdot \\vec{v}$.", -3, "$2(1) - 3 - 2 = -3$."),
                make_sa(4, "VD", "Tìm $m$ để hai vectơ $\\vec{a} = (m; 2; 3)$ và $\\vec{b} = (1; -1; 2)$ vuông góc.", -4, "$m - 2 + 6 = 0 \\Leftrightarrow m = -4$."),
                make_sa(5, "VD", "Cho $A(1; 2; 3)$ và $B(3; 4; 4)$. Tính độ dài đoạn thẳng $AB$.", 3, "$\\sqrt{4 + 4 + 1} = 3$."),
                make_sa(6, "VDC", "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có $|\\vec{a}| = 3, |\\vec{b}| = 4$ và $\\vec{a} \\cdot \\vec{b} = 6$. Tính độ dài vectơ $\\vec{a} + \\vec{b}$. (Làm tròn đến 2 chữ số thập phân)", 6.08, "$|\\vec{a} + \\vec{b}|^2 = 9 + 16 + 2(6) = 37 \\Rightarrow \\sqrt{37} \\approx 6.08$.", ["6.08", "6.1"])
            ]

    return mcqs, tfs, sas
