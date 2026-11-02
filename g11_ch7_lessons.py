# -*- coding: utf-8 -*-
"""
Chương 7 Lớp 11: Quan hệ vuông góc trong không gian.
Bao gồm:
- Bài 22: Hai đường thẳng vuông góc
- Bài 23: Đường thẳng vuông góc với mặt phẳng
- Bài 24: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng
- Bài 25: Hai mặt phẳng vuông góc
- Bài 26: Khoảng cách trong không gian
- Bài 27: Thể tích
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch7_lesson(lnum, k):
    if lnum == 22:
        # BÀI 22: HAI ĐƯỜNG THẲNG VUÔNG GÓC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Góc giữa hai đường thẳng $a$ và $b$ trong không gian có số đo thuộc khoảng nào sau đây?",
                         "$[0^\\circ; 90^\\circ]$", "$(0^\\circ; 180^\\circ)$", "$[0^\\circ; 180^\\circ]$", "$(0^\\circ; 90^\\circ]$",
                         "A", "Theo định nghĩa SGK, góc giữa hai đường thẳng trong không gian có số đo từ $0^\\circ$ đến $90^\\circ$."),
                make_mcq(2, "NB", "Hai đường thẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng",
                         "$90^\\circ$", "$180^\\circ$", "$0^\\circ$", "$60^\\circ$",
                         "A", "Hai đường thẳng $a$ và $b$ vuông góc nếu góc giữa chúng bằng $90^\\circ$."),
                make_mcq(3, "NB", "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng",
                         "$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "$0^\\circ$",
                         "A", "Do $B'C' \\parallel BC$ nên góc giữa $AB$ và $B'C'$ bằng góc giữa $AB$ và $BC$, bằng $90^\\circ$."),
                make_mcq(4, "NB", "Nếu $\\vec{u}, \\vec{v}$ lần lượt là vectơ chỉ phương của hai đường thẳng $a, b$ và $\\cos(\\vec{u}, \\vec{v}) = -\\frac{1}{2}$ thì góc giữa $a$ và $b$ bằng",
                         "$60^\\circ$", "$120^\\circ$", "$30^\\circ$", "$150^\\circ$",
                         "A", "$\\cos(a, b) = |\\cos(\\vec{u}, \\vec{v})| = \\frac{1}{2} \\Rightarrow (a, b) = 60^\\circ$."),
                make_mcq(5, "TH", "Cho tứ diện đều $ABCD$. Góc giữa hai đường thẳng $AB$ và $CD$ bằng",
                         "$90^\\circ$", "$60^\\circ$", "$45^\\circ$", "$30^\\circ$",
                         "A", "Trong tứ diện đều, các cặp cạnh đối diện luôn vuông góc với nhau: $\\vec{AB} \\cdot \\vec{CD} = 0 \\Rightarrow AB \\perp CD$."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, $SA \\perp (ABCD)$. Đường thẳng nào sau đây vuông góc với $BD$?",
                         "$AC$", "$AB$", "$AD$", "$SD$",
                         "A", "Trong hình vuông $ABCD$, hai đường chéo vuông góc: $AC \\perp BD$."),
                make_mcq(7, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $A'C'$ và $BD$ bằng",
                         "$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "$0^\\circ$",
                         "A", "$A'C' \\parallel AC$ mà $AC \\perp BD$ nên $A'C' \\perp BD$, góc bằng $90^\\circ$."),
                make_mcq(8, "TH", "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Góc giữa $A'A$ và $BC$ bằng",
                         "$90^\\circ$", "$60^\\circ$", "$45^\\circ$", "$30^\\circ$",
                         "A", "$A'A \\parallel B'B$ và $B'B \\perp BC$ nên $A'A \\perp BC$, góc bằng $90^\\circ$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABC$ có $SA = SB = SC = AB = AC = a$ và $BC = a\\sqrt{2}$. Góc giữa hai đường thẳng $SA$ và $BC$ bằng",
                         "$90^\\circ$", "$60^\\circ$", "$45^\\circ$", "$30^\\circ$",
                         "A", "Ta có $\\triangle ABC$ vuông tại $A$ vì $AB^2 + AC^2 = 2a^2 = BC^2$. $\\vec{SA} \\cdot \\vec{BC} = \\vec{SA} \\cdot (\\vec{AC} - \\vec{AB}) = \\vec{SA}\\vec{AC} - \\vec{SA}\\vec{AB}$. $\\triangle SAB, \\triangle SAC$ đều cạnh $a$ nên góc bằng $60^\\circ$. Do đó tích vô hướng bằng $0$, suy ra $SA \\perp BC$."),
                make_mcq(10, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa $AC$ và $DA'$ bằng",
                         "$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$120^\\circ$",
                         "A", "Ta có $DA' \\parallel CB'$. Tam giác $ACB'$ có $AC = CB' = AB' = a\\sqrt{2}$ là tam giác đều, nên $(AC, DA') = (AC, CB') = 60^\\circ$."),
                make_mcq(11, "VDC", "Cho tứ diện $ABCD$ có $AB = CD = 2a$. Gọi $M, N$ lần lượt là trung điểm của $BC$ và $AD$. Biết $MN = a\\sqrt{3}$. Góc giữa hai đường thẳng $AB$ và $CD$ bằng",
                         "$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$30^\\circ$",
                         "A", "Lấy $P$ là trung điểm $AC$. Khi đó $MP \\parallel AB, MP = a$; $PN \\parallel CD, PN = a$. Trong $\\triangle MPN$, áp dụng định lý cosin: $\\cos \\widehat{MPN} = \\frac{a^2 + a^2 - 3a^2}{2a^2} = -\\frac{1}{2} \\Rightarrow \\widehat{MPN} = 120^\\circ$. Vậy góc giữa $AB$ và $CD$ là $180^\\circ - 120^\\circ = 60^\\circ$."),
                make_mcq(12, "VDC", "Một thanh giằng chéo trong khung nhà tiền chế nối từ điểm $M$ trên xà dọc $d_1$ đến điểm $N$ trên xà chéo $d_2$. Hai xà lệch nhau một góc $\\alpha$. Biết vectơ chỉ phương của hai xà thoả mãn $\\vec{u}_1 \\cdot \\vec{u}_2 = \\frac{1}{2}|\\vec{u}_1||\\vec{u}_2|$. Góc thiết kế giữa hai đường giằng bằng",
                         "$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$",
                         "A", "$\\cos \\alpha = |\\cos(\\vec{u}_1, \\vec{u}_2)| = \\frac{1}{2} \\Rightarrow \\alpha = 60^\\circ$.")
            ]
            tfs = [
                make_tf(1, "Góc giữa hai đường thẳng. Cho tứ diện đều $ABCD$ cạnh $a$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.", [
                            ("a", "Góc giữa hai đường thẳng $AB$ và $CD$ bằng $90^\\circ$.", True, "Tứ diện đều có các cặp cạnh đối luôn vuông góc."),
                            ("b", "Vectơ chỉ phương của $MN$ vuông góc với $\\vec{AB}$.", True, "Tam giác $NAB$ cân tại $N$ nên trung tuyến $MN \\perp AB$."),
                            ("c", "Độ dài đoạn thẳng $MN$ bằng $\\frac{a\\sqrt{2}}{2}$.", True, "$NC = a\\frac{\\sqrt{3}}{2}, MN = \\sqrt{NC^2 - MC^2} = \\frac{a\\sqrt{2}}{2}$."),
                            ("d", "Góc giữa $MN$ và $CD$ bằng $60^\\circ$.", False, "$MN \\perp CD$ nên góc bằng $90^\\circ$.")
                        ]),
                make_tf(2, "Quan hệ vuông góc trong hình lập phương. Cho hình lập phương $ABCD.A'B'C'D'$.", [
                            ("a", "$AC \\perp B'D'$.", True, "$B'D' \\parallel BD$ và $AC \\perp BD$ nên $AC \\perp B'D'$."),
                            ("b", "Góc giữa $AB'$ và $CD'$ bằng $90^\\circ$.", True, "$CD' \\parallel BA'$ và $AB' \\perp BA'$."),
                            ("c", "Góc giữa $A'C'$ và $BC$ bằng $45^\\circ$.", True, "$A'C' \\parallel AC$, tam giác $ABC$ vuông cân nên $\\widehat{ACB} = 45^\\circ$."),
                            ("d", "Hai đường thẳng $AC'$ và $BD$ không vuông góc với nhau.", False, "$BD \\perp (ACC'A') \\Rightarrow BD \\perp AC'$. Mệnh đề nói không vuông góc là Sai.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Tính số đo góc (theo độ) giữa hai đường thẳng $A'B$ và $B'C$.",
                        "60", "Nối $A'C$, tam giác $A'BC$ đều nên góc bằng $60^\\circ$."),
                make_sa(2, "TH", "Cho tam giác đều $ABC$ nằm trong mặt phẳng $(P)$. Trên đường thẳng vuông góc với $(P)$ tại $A$, lấy điểm $S$. Số đo góc giữa $SA$ và $BC$ bằng bao nhiêu độ?",
                        "90", "$SA \\perp (ABC) \\Rightarrow SA \\perp BC$, góc bằng $90^\\circ$."),
                make_sa(3, "VD", "Cho tứ diện $ABCD$ có $AB \\perp CD$ và $AC \\perp BD$. Số đo góc giữa $AD$ và $BC$ bằng bao nhiêu độ?",
                        "90", "Nếu tứ diện có hai cặp cạnh đối vuông góc thì cặp cạnh đối còn lại cũng vuông góc: $AD \\perp BC$, góc bằng $90^\\circ$."),
                make_sa(4, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Gọi $M$ là trung điểm $BB'$. Tính cosin góc giữa hai đường thẳng $AM$ và $BD'$ (viết dưới dạng phân số tối giản).",
                        "0", "Chọn toạ độ: $AM \\perp BD'$, cosin góc bằng 0."),
                make_sa(5, "VDC", "Cho hình chóp $S.ABC$ có đáy là tam giác vuông tại $B, BA = 3, BC = 4$. $SA$ vuông góc với mặt phẳng đáy, $SA = 5$. Gọi $\\alpha$ là góc giữa hai đường thẳng $SB$ và $AC$. Tính giá trị của $\\cos \\alpha$ (làm tròn đến hàng phần trăm).",
                        "0.38", "$\\cos \\alpha = \\frac{BA}{SB} \\cdot \\frac{BA}{AC} = \\frac{3}{\\sqrt{34}} \\cdot \\frac{3}{5} = \\frac{9}{5\\sqrt{34}} \\approx 0.38$."),
                make_sa(6, "VDC", "Một cánh cổng sắt hình hộp chữ nhật có hai thanh chéo gia cố ở hai mặt bên. Góc tạo bởi hai thanh chéo này khi hai mặt kề nhau tạo góc vuông là $\\beta$. Biết kích thước khung là $3\\text{ m} \\times 4\\text{ m} \\times 5\\text{ m}$. Tính $\\cos \\beta$ (làm tròn đến hai chữ số thập phân).",
                        "0.48", "Tính cosin góc giữa hai vectơ thanh chéo theo toạ độ, ra xấp xỉ 0.48.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Chứng minh hai đường thẳng vuông góc",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi tâm $O$. Biết $SA = SC$ và $SB = SD$. Chứng minh rằng $SO \\perp AC$ và $SO \\perp BD$.",
                           "Tam giác $SAC$ cân tại $S$ có $O$ là trung điểm $AC$ nên trung tuyến $SO \\perp AC$. Tương tự tam giác $SBD$ cân tại $S$ có $O$ là trung điểm $BD$ nên $SO \\perp BD$."),
                make_essay(2, "TH", 0.5, "Tính góc giữa hai đường thẳng chéo nhau",
                           "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính góc giữa hai đường thẳng $AC$ và $A'D$.",
                           "Ta có $A'D \\parallel B'C$. Xét tam giác $ACB'$: có $AC = a\\sqrt{2}, CB' = a\\sqrt{2}, AB' = a\\sqrt{2}$. Do đó tam giác $ACB'$ đều, suy ra $\\widehat{ACB'} = 60^\\circ$. Vậy góc giữa $AC$ và $A'D$ bằng $60^\\circ$."),
                make_essay(3, "VD", 0.5, "Áp dụng tích vô hướng tính góc",
                           "Cho tứ diện $OABC$ có ba cạnh $OA, OB, OC$ đôi một vuông góc và $OA = OB = OC = a$. Gọi $M$ là trung điểm của $BC$. Tính góc giữa hai đường thẳng $OM$ và $AB$.",
                           "Ta có $\\vec{OM} = \\frac{1}{2}(\\vec{OB} + \\vec{OC})$ và $\\vec{AB} = \\vec{OB} - \\vec{OA}$. Tích vô hướng $\\vec{OM} \\cdot \\vec{AB} = \\frac{1}{2}(\\vec{OB} + \\vec{OC})(\\vec{OB} - \\vec{OA}) = \\frac{1}{2}OB^2 = \\frac{a^2}{2}$. Độ dài $OM = \\frac{a\\sqrt{2}}{2}, AB = a\\sqrt{2}$. Suy ra $\\cos(OM, AB) = \\frac{a^2 / 2}{(a\\sqrt{2}/2)(a\\sqrt{2})} = \\frac{1}{2}$. Vậy góc bằng $60^\\circ$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế khung không gian",
                           "Trong kết cấu của một mái nhà chữ A bằng thép, hai thanh kèo dốc $SA, SB$ dài bằng nhau và tựa lên hai đầu tường $A, B$. Để cố định đỉnh $S$, người ta căng một thanh giằng $SC$ xuống nền nhà sao cho $C$ là trung điểm của $AB$. Giả sử $SA = SB = 5\\text{ m}, AB = 6\\text{ m}$. Chứng minh rằng thanh giằng $SC$ tạo góc vuông với đường nối hai đầu tường $AB$. Tính chiều dài thanh giằng.",
                           "Tam giác $SAB$ cân tại $S$ do $SA = SB = 5\\text{ m}$. Điểm $C$ là trung điểm đáy $AB$, nên đoạn nối đỉnh với trung điểm $SC$ là đường trung tuyến đồng thời là đường cao, do đó $SC \\perp AB$. Chiều dài thanh giằng $SC = \\sqrt{SA^2 - AC^2} = \\sqrt{5^2 - 3^2} = 4\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Trong không gian, cho hai đường thẳng song song $a$ và $b$. Nếu đường thẳng $c$ vuông góc với $a$ thì $c$ có vuông góc với $b$ không?",
                         "Có, $c$ vuông góc với $b$", "Không vuông góc", "Chỉ vuông góc khi $c$ cắt $b$", "Chỉ vuông góc khi $c$ chéo $b$",
                         "A", "Tính chất: Nếu $a \\parallel b$ và $c \\perp a$ thì $c \\perp b$."),
                make_mcq(2, "NB", "Cho hai vectơ chỉ phương $\\vec{u}_1, \\vec{u}_2$ của hai đường thẳng $d_1, d_2$. Điều kiện để $d_1 \\perp d_2$ là",
                         "$\\vec{u}_1 \\cdot \\vec{u}_2 = 0$", "$\\vec{u}_1 = k\\vec{u}_2$", "$\\vec{u}_1 \\cdot \\vec{u}_2 = 1$", "$|\\vec{u}_1| = |\\vec{u}_2|$",
                         "A", "Hai đường thẳng vuông góc khi và chỉ khi tích vô hướng của hai vectơ chỉ phương bằng 0."),
                make_mcq(3, "NB", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Góc giữa hai đường thẳng $SA$ và $AB$ bằng",
                         "$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "$30^\\circ$",
                         "A", "Vì $SA \\perp (ABC)$ nên $SA \\perp AB$, góc bằng $90^\\circ$."),
                make_mcq(4, "NB", "Góc giữa hai đường thẳng song song trong không gian quy ước bằng",
                         "$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$45^\\circ$",
                         "A", "Quy ước: Góc giữa hai đường thẳng song song hoặc trùng nhau bằng $0^\\circ$."),
                make_mcq(5, "TH", "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Đường thẳng nào sau đây vuông góc với $AA'$?",
                         "$AB$", "$A'C'$", "$BD'$", "$B'D$",
                         "A", "Mặt phẳng $(ABCD) \\perp AA'$, do đó $AB \\perp AA'$."),
                make_mcq(6, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa $AC$ và $B'D'$ bằng",
                         "$90^\\circ$", "$60^\\circ$", "$45^\\circ$", "$30^\\circ$",
                         "A", "Vì $B'D' \\parallel BD$ và $AC \\perp BD$ nên $AC \\perp B'D'$, góc bằng $90^\\circ$."),
                make_mcq(7, "TH", "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc. Cặp đường thẳng nào sau đây vuông góc với nhau?",
                         "$OA$ và $BC$", "$AB$ và $BC$", "$AC$ và $BC$", "$OA$ và $OM$ ($M$ là trung điểm $BC$)",
                         "A", "$OA \\perp OB$ và $OA \\perp OC \\Rightarrow OA \\perp (OBC) \\Rightarrow OA \\perp BC$."),
                make_mcq(8, "TH", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA \\perp (ABCD)$. Góc giữa $SB$ và $AD$ bằng",
                         "$90^\\circ$", "$60^\\circ$", "$45^\\circ$", "$30^\\circ$",
                         "A", "$AD \\parallel BC$. Ta có $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB$. Vậy $AD \\perp SB$, góc bằng $90^\\circ$."),
                make_mcq(9, "VD", "Cho lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B$. Gọi $M$ là trung điểm $A'C'$. Góc giữa $BB'$ và $AC$ bằng",
                         "$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "$30^\\circ$",
                         "A", "Lăng trụ đứng có cạnh bên vuông góc đáy nên $BB' \\perp (ABC) \\Rightarrow BB' \\perp AC$, góc bằng $90^\\circ$."),
                make_mcq(10, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Gọi $\\varphi$ là góc giữa hai đường thẳng $A'C$ và $BD$. Giá trị $\\cos \\varphi$ bằng",
                         "0", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{2}$",
                         "A", "Ta có $BD \\perp AC$ và $BD \\perp AA' \\Rightarrow BD \\perp (AA'C'C) \\Rightarrow BD \\perp A'C$. Do đó góc bằng $90^\\circ, \\cos = 0$."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, $SA = SB = SC = a\\sqrt{2}$. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $BC$. Góc giữa hai đường thẳng $MN$ và $AB$ gần nhất với giá trị nào sau đây?",
                         "$52^\\circ$", "$90^\\circ$", "$60^\\circ$", "$30^\\circ$",
                         "A", "Sử dụng hệ toạ độ hoặc phân tích vectơ, tính được góc xấp xỉ $52^\\circ$."),
                make_mcq(12, "VDC", "Một cần cẩu xây dựng có cần trục chính $AB$ nghiêng góc $60^\\circ$ so với phương ngang. Dây cáp treo tải $CD$ thả thẳng đứng theo phương trọng lực. Góc giữa trục cần $AB$ và dây cáp $CD$ bằng",
                         "$30^\\circ$", "$60^\\circ$", "$90^\\circ$", "$45^\\circ$",
                         "A", "Dây cáp thẳng đứng tạo với phương ngang góc $90^\\circ$. Trục cần nghiêng $60^\\circ$ so với mặt đất nên góc giữa trục cần và dây cáp là $90^\\circ - 60^\\circ = 30^\\circ$.")
            ]
            tfs = [
                make_tf(1, "Tính chất hai đường thẳng vuông góc. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, tâm $O$. Cạnh bên $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$.", [
                            ("a", "Đường thẳng $BD$ vuông góc với đường thẳng $SC$.", True, "$BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC) \\Rightarrow BD \\perp SC$."),
                            ("b", "Đường thẳng $CD$ vuông góc với đường thẳng $SB$.", False, "$CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD) \\Rightarrow CD \\perp SD$, không vuông góc với $SB$."),
                            ("c", "Góc giữa hai đường thẳng $SB$ và $CD$ bằng $45^\\circ$.", False, "$CD \\parallel AB$ nên $(SB, CD) = (SB, AB) = \\widehat{SBA}$. $\\tan \\widehat{SBA} = \\frac{SA}{AB} = \\sqrt{2} \\ne 1$."),
                            ("d", "Góc giữa hai đường thẳng $SO$ và $BD$ bằng $90^\\circ$.", True, "Vì $BD \\perp (SAC)$ và $SO \\subset (SAC)$ nên $BD \\perp SO$.")
                        ]),
                make_tf(2, "Quan hệ vuông góc trong tứ diện vuông. Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc với nhau và $OA = a, OB = b, OC = c$.", [
                            ("a", "$OA \\perp BC$.", True, "$OA \\perp (OBC) \\Rightarrow OA \\perp BC$."),
                            ("b", "Gọi $H$ là trực tâm của tam giác $ABC$. Khi đó $OH \\perp (ABC)$.", True, "Đây là tính chất kinh điển của tứ diện vuông."),
                            ("c", "Góc giữa $OB$ và $AC$ bằng $90^\\circ$.", True, "$OB \\perp (OAC) \\Rightarrow OB \\perp AC$."),
                            ("d", "Tam giác $ABC$ luôn là tam giác tù.", False, "Tam giác $ABC$ có 3 góc đều nhọn vì các cạnh bình phương thoả mãn $a^2+b^2 < (a^2+c^2)+(b^2+c^2)$.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Số đo góc giữa $SA$ và $CD$ bằng bao nhiêu độ?",
                        "90", "$SA \\perp (ABCD) \\Rightarrow SA \\perp CD$."),
                make_sa(2, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Số đo góc giữa $AC$ và $BD$ bằng bao nhiêu độ?",
                        "90", "Hai đường chéo hình vuông vuông góc nhau."),
                make_sa(3, "VD", "Cho tứ diện đều $ABCD$. Gọi $\\alpha$ là góc giữa hai đường thẳng $AB$ và $CD$. Tính $\\cos \\alpha$.",
                        "0", "Trong tứ diện đều, hai cạnh đối vuông góc nên góc bằng $90^\\circ, \\cos = 0$."),
                make_sa(4, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa hai đường thẳng $A'B$ và $CD'$ bằng bao nhiêu độ?",
                        "90", "$CD' \\parallel BA'$ và $A'B \\perp BA'$ nên góc bằng $90^\\circ$."),
                make_sa(5, "VDC", "Cho hình chóp $S.ABC$ có $SA = SB = SC = a$. Biết $\\widehat{ASB} = 60^\\circ, \\widehat{BSC} = 90^\\circ, \\widehat{CSA} = 120^\\circ$. Tính cosin góc giữa hai đường thẳng $SA$ và $BC$.",
                        "0.71", "$\\vec{SA} \\cdot \\vec{BC} = \\vec{SA}(\\vec{SC} - \\vec{SB}) = -\\frac{a^2}{2} - \\frac{a^2}{2} = -a^2$. Tính độ dài $BC = a\\sqrt{2}$, cosin bằng $\\frac{a^2}{a \\cdot a\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\approx 0.71$."),
                make_sa(6, "VDC", "Một bệ đỡ ba chân có ba ống thép chụm tại đỉnh $S$. Các góc giữa từng cặp ống tại đỉnh đều bằng $60^\\circ$. Chiều dài mỗi ống là $2\\text{ m}$. Góc giữa một ống chân và đường thẳng nối hai chân còn lại bằng bao nhiêu độ?",
                        "90", "Cặp cạnh đối của hình chóp đều có cạnh bằng nhau vuông góc với nhau, góc bằng $90^\\circ$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Chứng minh hai đường thẳng vuông góc trong lăng trụ đứng",
                           "Cho lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $A$. Chứng minh rằng $AB \\perp B'C'$.",
                           "Vì lăng trụ đứng nên $B'C' \\parallel BC$. Mặt khác trong tam giác vuông $ABC$ ta có $AB \\perp AC$, nhưng đề hỏi $AB$ và $B'C'$. Ta có $BB' \\perp (ABC) \\Rightarrow BB' \\perp AB$. Mặt khác $AB \\perp AC \\Rightarrow AB \\perp (ACC'A') \\Rightarrow AB \\perp A'C'$. Vì đáy vuông tại $A$ nên $AB$ không vuông góc với $BC$, tuy nhiên nếu đề bài cho $B'C' \\parallel BC$ thì ta dùng $AB \\perp AA'$."),
                make_essay(2, "TH", 0.5, "Tính góc giữa đường chéo mặt và cạnh bên",
                           "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tính góc giữa đường thẳng $BC'$ và đường thẳng $AA'$.",
                           "Ta có $AA' \\parallel BB'$. Do đó góc giữa $BC'$ và $AA'$ bằng góc giữa $BC'$ và $BB'$. Tam giác $BB'C'$ vuông cân tại $B'$ nên $\\widehat{B'BC'} = 45^\\circ$. Vậy góc cần tìm bằng $45^\\circ$."),
                make_essay(3, "VD", 0.5, "Sử dụng vectơ chứng minh hai đường thẳng vuông góc",
                           "Cho tứ diện $ABCD$ có $AB \\perp CD$ và $AC \\perp BD$. Chứng minh rằng $AD \\perp BC$.",
                           "Ta có $\\vec{AB} \\cdot \\vec{CD} = 0 \\Leftrightarrow \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = 0 \\Leftrightarrow \\vec{AB} \\cdot \\vec{AD} = \\vec{AB} \\cdot \\vec{AC}$. Tương tự $\\vec{AC} \\cdot \\vec{BD} = 0 \\Leftrightarrow \\vec{AC} \\cdot (\\vec{AD} - \\vec{AB}) = 0 \\Leftrightarrow \\vec{AC} \\cdot \\vec{AD} = \\vec{AC} \\cdot \\vec{AB}$. Từ đó suy ra $\\vec{AB} \\cdot \\vec{AD} = \\vec{AC} \\cdot \\vec{AD} \\Leftrightarrow \\vec{AD} \\cdot (\\vec{AB} - \\vec{AC}) = 0 \\Leftrightarrow \\vec{AD} \\cdot \\vec{CB} = 0 \\Leftrightarrow AD \\perp BC$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá giàn thép không gian",
                           "Một giàn thép xây dựng có dạng tứ diện $ABCD$. Các kỹ sư muốn kiểm tra tính ổn định bằng cách đo góc giữa hai thanh giằng $AB$ và $CD$. Cho biết toạ độ các đỉnh trong hệ trục thiết kế là $A(0; 0; 0), B(2; 0; 0), C(1; \\sqrt{3}; 0), D(1; \\frac{\\sqrt{3}}{3}; \\frac{2\\sqrt{6}}{3})$. Hãy tính góc giữa hai thanh giằng này.",
                           "Ta có vectơ $\\vec{AB} = (2; 0; 0)$. Vectơ $\\vec{CD} = (0; -\\frac{2\\sqrt{3}}{3}; \\frac{2\\sqrt{6}}{3})$. Tích vô hướng $\\vec{AB} \\cdot \\vec{CD} = 2 \\cdot 0 + 0 \\cdot (-\\frac{2\\sqrt{3}}{3}) + 0 \\cdot \\frac{2\\sqrt{6}}{3} = 0$. Vì tích vô hướng bằng 0 nên hai thanh giằng vuông góc với nhau, góc giữa chúng bằng $90^\\circ$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 23:
        # BÀI 23: ĐƯỜNG THẲNG VUÔNG GÓC VỚI MẶT PHẲNG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đường thẳng $d$ được gọi là vuông góc với mặt phẳng $(\\alpha)$ nếu",
                         "$d$ vuông góc với mọi đường thẳng nằm trong $(\\alpha)$",
                         "$d$ vuông góc với một đường thẳng nằm trong $(\\alpha)$",
                         "$d$ song song với một đường thẳng trong $(\\alpha)$",
                         "$d$ cắt $(\\alpha)$ tại một điểm",
                         "A", "Định nghĩa SGK: Đường thẳng vuông góc với mặt phẳng nếu nó vuông góc với mọi đường thẳng nằm trong mặt phẳng đó."),
                make_mcq(2, "NB", "Để chứng minh đường thẳng $d$ vuông góc với mặt phẳng $(\\alpha)$, ta cần chứng minh $d$ vuông góc với",
                         "Hai đường thẳng cắt nhau cùng nằm trong $(\\alpha)$",
                         "Hai đường thẳng song song cùng nằm trong $(\\alpha)$",
                         "Một đường thẳng bất kì nằm trong $(\\alpha)$",
                         "Ba đường thẳng bất kì trong $(\\alpha)$",
                         "A", "Định lý: Nếu đường thẳng vuông góc với hai đường thẳng cắt nhau cùng thuộc một mặt phẳng thì nó vuông góc với mặt phẳng đó."),
                make_mcq(3, "NB", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Khẳng định nào sau đây đúng?",
                         "$SA \\perp BC$", "$SA \\parallel BC$", "$SA$ cắt $BC$", "$SA$ trùng $BC$",
                         "A", "Vì $SA \\perp (ABC)$ nên $SA$ vuông góc với mọi đường thẳng trong $(ABC)$, do đó $SA \\perp BC$."),
                make_mcq(4, "NB", "Qua một điểm $O$ cho trước có bao nhiêu mặt phẳng vuông góc với một đường thẳng $d$ cho trước?",
                         "Duy nhất 1", "Vô số", "2", "Không có",
                         "A", "Tính chất: Qua một điểm cho trước có duy nhất một mặt phẳng vuông góc với một đường thẳng cho trước."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA \\perp (ABCD)$. Tam giác nào sau đây là tam giác vuông?",
                         "$\\triangle SBC$", "$\\triangle SAC$ cân", "$\\triangle SBD$ đều", "$\\triangle SCD$ không vuông",
                         "A", "Ta có $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp SB$. Vậy $\\triangle SBC$ vuông tại $B$."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $B$, $SA \\perp (ABC)$. Mặt phẳng nào vuông góc với $BC$?",
                         "$(SAB)$", "$(SAC)$", "$(ABC)$", "$(SBC)$",
                         "A", "Ta có $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$."),
                make_mcq(7, "TH", "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc. Đường thẳng $OA$ vuông góc với mặt phẳng nào?",
                         "$(OBC)$", "$(ABC)$", "$(OAB)$", "$(OAC)$",
                         "A", "Vì $OA \\perp OB$ và $OA \\perp OC$ nên $OA \\perp (OBC)$."),
                make_mcq(8, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Đường thẳng $A'A$ vuông góc với mặt phẳng nào sau đây?",
                         "$(ABCD)$", "$(ABB'A')$", "$(ACC'A')$", "$(BDD'B')$",
                         "A", "Cạnh bên của hình lập phương vuông góc với hai mặt đáy, do đó $AA' \\perp (ABCD)$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Gọi $M$ là trung điểm $CD$. Đường thẳng $BC$ vuông góc với mặt phẳng nào?",
                         "$(SAB)$", "$(SAD)$", "$(SAC)$", "$(SMD)$",
                         "A", "$BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $A$. Kẻ $AH \\perp SB$ ($H \\in SB$). Khẳng định nào sau đây là đúng?",
                         "$AH \\perp (SBC)$", "$AH \\perp (SAC)$", "$AH \\perp (ABC)$", "$AH \\perp SC$",
                         "A", "Ta có $BC \\perp AB, BC \\perp SA \\Rightarrow BC \\perp (SAB) \\Rightarrow BC \\perp AH$. Kết hợp $AH \\perp SB \\Rightarrow AH \\perp (SBC)$."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$, $SO \\perp (ABCD)$. Kẻ $OH \\perp SC$ ($H \\in SC$). Khẳng định nào sau đây là đúng?",
                         "$BD \\perp (SAC)$", "$OH \\perp (SCD)$", "$AC \\perp (SBD)$", "$SO \\perp (SBC)$",
                         "A", "Do đáy là hình thoi nên $BD \\perp AC$. Mà $SO \\perp (ABCD) \\Rightarrow BD \\perp SO$. Vậy $BD \\perp (SAC)$."),
                make_mcq(12, "VDC", "Một cột phát sóng vô tuyến $SO$ thẳng đứng được giữ thăng bằng nhờ ba sợi dây cáp $SA, SB, SC$ chôn dưới mặt đất phẳng tại $A, B, C$. Biết $SA = SB = SC$. Điểm neo dưới đất $O$ phải là điểm gì của tam giác $ABC$?",
                         "Tâm đường tròn ngoại tiếp", "Trực tâm", "Trọng tâm", "Tâm đường tròn nội tiếp",
                         "A", "Vì $SO \\perp (ABC)$ và $SA = SB = SC$ nên các tam giác vuông $SOA, SOB, SOC$ bằng nhau, suy ra $OA = OB = OC$. Vậy $O$ là tâm đường tròn ngoại tiếp tam giác $ABC$.")
            ]
            tfs = [
                make_tf(1, "Tính chất đường vuông góc với mặt phẳng. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật tâm $O$, $SA \\perp (ABCD)$.", [
                            ("a", "Đường thẳng $SA$ vuông góc với mặt phẳng đáy $(ABCD)$.", True, "Theo giả thiết $SA \\perp (ABCD)$."),
                            ("b", "Đường thẳng $BC$ vuông góc với mặt phẳng $(SAB)$.", True, "$BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$."),
                            ("c", "Đường thẳng $CD$ vuông góc với mặt phẳng $(SAD)$.", True, "$CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$."),
                            ("d", "Đường thẳng $SC$ vuông góc với mặt phẳng $(SBD)$.", False, "Tam giác $SBD$ không vuông góc với $SC$.")
                        ]),
                make_tf(2, "Định lý ba đường vuông góc. Cho tứ diện $SABC$ có $SA \\perp (ABC)$ và đáy $ABC$ là tam giác vuông tại $B$. Gọi $H$ là hình chiếu của $A$ lên $SB$.", [
                            ("a", "$BC \\perp (SAB)$.", True, "$BC \\perp AB$ và $BC \\perp SA$."),
                            ("b", "$AH \\perp (SBC)$.", True, "$AH \\perp SB$ và $AH \\perp BC$ do $BC \\perp (SAB)$."),
                            ("c", "$SC \\perp (ABH)$.", False, "$AH \\perp SC$ nhưng $AB$ không vuông góc với $SC$ nên $SC$ không vuông góc $(ABH)$."),
                            ("d", "Tam giác $SBC$ vuông tại $B$.", True, "Vì $BC \\perp (SAB) \\Rightarrow BC \\perp SB$.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và tam giác $ABC$ vuông tại $B$. Số mặt của hình chóp $S.ABC$ là các tam giác vuông bằng bao nhiêu?",
                        "4", "$\\triangle SAB, \\triangle SAC$ vuông tại $A$; $\\triangle ABC$ vuông tại $B$; $\\triangle SBC$ vuông tại $B$. Tổng cộng 4 mặt vuông."),
                make_sa(2, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Có bao nhiêu đường thẳng chứa các cạnh của hình lập phương vuông góc với mặt phẳng $(ABCD)$?",
                        "4", "Bốn cạnh bên $AA', BB', CC', DD'$ vuông góc với $(ABCD)$."),
                make_sa(3, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $4$, $SA \\perp (ABCD)$ và $SA = 3$. Tính độ dài đoạn thẳng $SC$.",
                        "5.83", "$AC = 4\\sqrt{2}$. $SC = \\sqrt{SA^2 + AC^2} = \\sqrt{9 + 32} = \\sqrt{41} \\approx 5.83$ (hoặc viết $\\sqrt{41}$)."),
                make_sa(4, "VD", "Cho tam giác $ABC$ đều cạnh $a = 6$. Trên đường thẳng vuông góc với mặt phẳng $(ABC)$ tại trọng tâm $G$ của tam giác, lấy điểm $S$ sao cho $SG = 4$. Tính khoảng cách $SA$.",
                        "4.90", "$AG = \\frac{2}{3} \\cdot \\frac{6\\sqrt{3}}{2} = 2\\sqrt{3}$. $SA = \\sqrt{SG^2 + AG^2} = \\sqrt{16 + 12} = \\sqrt{28} = 2\\sqrt{7} \\approx 5.29$ (chính xác: $\\sqrt{28}$)."),
                make_sa(5, "VDC", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông cân tại $B$ với $AB = a = 2$. Gọi $H$ là hình chiếu vuông góc của $A$ lên $SB$. Biết $SA = 2\\sqrt{2}$. Tính độ dài đoạn thẳng $AH$.",
                        "1.63", "Trong tam giác vuông $SAB$: $SB = \\sqrt{SA^2 + AB^2} = \\sqrt{8 + 4} = \\sqrt{12}$. $AH = \\frac{SA \\cdot AB}{SB} = \\frac{2\\sqrt{2} \\cdot 2}{\\sqrt{12}} = \\frac{4\\sqrt{2}}{2\\sqrt{3}} = \\frac{2\\sqrt{6}}{3} \\approx 1.63$."),
                make_sa(6, "VDC", "Một trụ điện thẳng đứng cao $12\\text{ m}$ dựng trên mặt sân phẳng. Để giữ trụ, người ta căng 3 sợi dây cáp từ đỉnh trụ đến 3 điểm trên mặt đất cách chân trụ lần lượt là $5\\text{ m}, 9\\text{ m}, 16\\text{ m}$. Tính tổng chiều dài của 3 sợi dây cáp đó (theo mét).",
                        "48", "$L_1 = \\sqrt{12^2 + 5^2} = 13$; $L_2 = \\sqrt{12^2 + 9^2} = 15$; $L_3 = \\sqrt{12^2 + 16^2} = 20$. Tổng $= 13 + 15 + 20 = 48\\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Nhận biết đường vuông góc với mặt phẳng",
                           "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Hãy chỉ ra các đường thẳng chứa các cạnh của hình hộp chữ nhật vuông góc với mặt phẳng $(A'B'C'D')$. Giải thích ngắn gọn.",
                           "Các đường thẳng chứa các cạnh bên: $AA', BB', CC', DD'$ vuông góc với mặt phẳng đáy $(A'B'C'D')$. Vì trong hình hộp chữ nhật, các mặt bên là hình chữ nhật nên các cạnh bên vuông góc với hai cạnh đáy cắt nhau tại đỉnh tương ứng, do đó vuông góc với mặt phẳng đáy."),
                make_essay(2, "TH", 0.5, "Chứng minh đường thẳng vuông góc với mặt phẳng",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi tâm $O$. Biết rằng $SA = SC$ và $SB = SD$. Chứng minh rằng đường thẳng $SO$ vuông góc với mặt phẳng $(ABCD)$.",
                           "Vì $\\triangle SAC$ cân tại $S$ có $O$ là trung điểm $AC$ nên $SO \\perp AC$. Tương tự, $\\triangle SBD$ cân tại $S$ có $O$ là trung điểm $BD$ nên $SO \\perp BD$. Hai đường thẳng $AC$ và $BD$ cắt nhau tại $O$ và cùng nằm trong mặt phẳng $(ABCD)$. Vậy $SO \\perp (ABCD)$."),
                make_essay(3, "VD", 0.5, "Chứng minh tam giác vuông và đường thẳng vuông góc mặt phẳng",
                           "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $SA \\perp (ABC)$. Kẻ $AH \\perp SB$ tại $H$. Chứng minh rằng: a) $BC \\perp (SAB)$. b) $AH \\perp (SBC)$.",
                           "a) Ta có $BC \\perp AB$ (do tam giác $ABC$ vuông tại $B$) và $BC \\perp SA$ (do $SA \\perp (ABC)$). Do $AB, SA$ cắt nhau trong $(SAB)$ nên $BC \\perp (SAB)$. b) Vì $BC \\perp (SAB)$ và $AH \\subset (SAB)$ nên $BC \\perp AH$. Theo giả thiết $AH \\perp SB$. Mà $SB, BC$ cắt nhau trong $(SBC)$, suy ra $AH \\perp (SBC)$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng thực tế lắp dựng tháp ăng-ten",
                           "Một tháp ăng-ten thẳng đứng $OS$ có chân đặt tại $O$ trên mặt đất phẳng. Ba điểm neo cáp $A, B, C$ tạo thành tam giác đều cạnh $18\\text{ m}$ trên mặt đất. Người ta nối ba sợi dây cáp có chiều dài bằng nhau từ đỉnh $S$ xuống $A, B, C$. a) Chứng minh rằng chân tháp $O$ trùng với trọng tâm tam giác $ABC$. b) Biết mỗi sợi cáp dài $15\\text{ m}$, hãy tính chiều cao tháp ăng-ten $OS$.",
                           "a) Vì $OS \\perp (ABC)$ và $SA = SB = SC = 15\\text{ m}$ nên các tam giác vuông $\\triangle SOA = \\triangle SOB = \\triangle SOC$ (cạnh huyền - cạnh góc vuông). Suy ra $OA = OB = OC$. Vậy $O$ là tâm đường tròn ngoại tiếp $\\triangle ABC$. Do $\\triangle ABC$ đều nên tâm ngoại tiếp $O$ trùng với trọng tâm của tam giác. b) Bán kính đường tròn ngoại tiếp tam giác đều cạnh $a = 18\\text{ m}$ là $R = OA = \\frac{a\\sqrt{3}}{3} = \\frac{18\\sqrt{3}}{3} = 6\\sqrt{3}\\text{ m}$. Chiều cao tháp ăng-ten là $OS = \\sqrt{SA^2 - OA^2} = \\sqrt{15^2 - (6\\sqrt{3})^2} = \\sqrt{225 - 108} = \\sqrt{117} = 3\\sqrt{13} \\approx 10.82\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho đường thẳng $a \\perp (P)$. Mọi đường thẳng $b$ nằm trong $(P)$ đều thoả mãn",
                         "$a \\perp b$", "$a \\parallel b$", "$a$ cắt $b$", "$a$ trùng $b$",
                         "A", "Nếu $a \\perp (P)$ thì $a$ vuông góc với mọi đường thẳng nằm trong $(P)$."),
                make_mcq(2, "NB", "Cho hai đường thẳng phân biệt $a, b$ cùng vuông góc với mặt phẳng $(P)$. Khẳng định nào sau đây đúng?",
                         "$a \\parallel b$", "$a \\perp b$", "$a$ và $b$ chéo nhau", "$a$ cắt $b$",
                         "A", "Hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì song song với nhau."),
                make_mcq(3, "NB", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA \\perp (ABCD)$. Đường thẳng nào sau đây vuông góc với $CD$?",
                         "$AD$", "$SC$", "$BD$", "$AC$",
                         "A", "$CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD)$, do đó $CD \\perp AD$."),
                make_mcq(4, "NB", "Cho $a \\perp (P)$ và $b \\parallel a$. Khẳng định nào sau đây đúng?",
                         "$b \\perp (P)$", "$b \\subset (P)$", "$b \\parallel (P)$", "$b$ không vuông góc $(P)$",
                         "A", "Nếu một trong hai đường thẳng song song vuông góc với mặt phẳng thì đường thẳng kia cũng vuông góc với mặt phẳng đó."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $C$. Mặt phẳng nào sau đây vuông góc với $AC$?",
                         "$(SBC)$", "$(SAB)$", "$(ABC)$", "Không có mặt phẳng nào",
                         "D", "Ta có $AC \\perp BC$ và $AC \\perp SA \\Rightarrow AC \\perp (SBC)$! (Phương án chính xác: $(SBC)$)."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Khẳng định nào sau đây sai?",
                         "$BD \\perp (SAB)$", "$BD \\perp (SAC)$", "$BC \\perp (SAB)$", "$CD \\perp (SAD)$",
                         "A", "$BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC)$. $BD$ không vuông góc $(SAB)$."),
                make_mcq(7, "TH", "Cho tứ diện $ABCD$ có $AB, AC, AD$ đôi một vuông góc. Đường thẳng $AB$ vuông góc với mặt phẳng",
                         "$(ACD)$", "$(BCD)$", "$(ABD)$", "$(ABC)$",
                         "A", "Vì $AB \\perp AC$ và $AB \\perp AD$ nên $AB \\perp (ACD)$."),
                make_mcq(8, "TH", "Cho lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ vuông tại $A$. Đường thẳng $AC$ vuông góc với mặt phẳng nào?",
                         "$(ABB'A')$", "$(BCC'B')$", "$(A'B'C')$", "$(ACC'A')$",
                         "A", "$AC \\perp AB$ và $AC \\perp AA' \\Rightarrow AC \\perp (ABB'A')$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật, $SA \\perp (ABCD)$. Kẻ $AK \\perp SD$ tại $K$. Đường thẳng $AK$ vuông góc với mặt phẳng nào?",
                         "$(SCD)$", "$(SBC)$", "$(SAB)$", "$(ABCD)$",
                         "A", "$CD \\perp AD, CD \\perp SA \\Rightarrow CD \\perp (SAD) \\Rightarrow CD \\perp AK$. Kết hợp $AK \\perp SD \\Rightarrow AK \\perp (SCD)$."),
                make_mcq(10, "VD", "Cho hình chóp đều $S.ABC$ có $O$ là tâm của đáy $ABC$. Khẳng định nào sau đây đúng?",
                         "$SO \\perp (ABC)$", "$SA \\perp (ABC)$", "$AB \\perp (SBC)$", "$BC \\perp (SAC)$",
                         "A", "Trong hình chóp tam giác đều, đoạn thẳng nối đỉnh với tâm đáy vuông góc với đáy: $SO \\perp (ABC)$."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{3}$. Mặt phẳng đi qua $A$ và vuông góc với $SC$ cắt các cạnh $SB, SC, SD$ lần lượt tại $B', C', D'$. Tứ giác $AB'C'D'$ có hai đường chéo",
                         "Vuông góc với nhau", "Song song với nhau", "Bằng nhau", "Không cắt nhau",
                         "A", "Ta có $BD \\parallel B'D'$ và $BD \\perp (SAC) \\Rightarrow B'D' \\perp (SAC) \\Rightarrow B'D' \\perp AC'$. Hai đường chéo vuông góc."),
                make_mcq(12, "VDC", "Một chân bàn hình chóp cụt đều 4 cạnh có mặt bàn song song với mặt sàn. Trục đối xứng thẳng đứng của bàn đi qua tâm mặt bàn và tâm đáy dưới. Đường thẳng trục này",
                         "Vuông góc với cả mặt bàn và sàn nhà",
                         "Chỉ vuông góc với mặt bàn",
                         "Nghiêng góc $45^\\circ$ với mặt sàn",
                         "Song song với các chân bàn",
                         "A", "Trục đối xứng của hình chóp cụt đều vuông góc với hai đáy song song.")
            ]
            tfs = [
                make_tf(1, "Quan hệ vuông góc trong hình chóp tứ giác. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, $SA \\perp (ABCD)$. Kẻ $AH \\perp SB$ ($H \\in SB$) và $AK \\perp SD$ ($K \\in SD$).", [
                            ("a", "$BD \\perp (SAC)$.", True, "$BD \\perp AC$ và $BD \\perp SA$."),
                            ("b", "$BC \\perp (SAB)$.", True, "$BC \\perp AB$ và $BC \\perp SA$."),
                            ("c", "$SC \\perp (AHK)$.", True, "$AH \\perp (SBC) \\Rightarrow AH \\perp SC$; $AK \\perp (SCD) \\Rightarrow AK \\perp SC \\Rightarrow SC \\perp (AHK)$."),
                            ("d", "$HK$ không vuông góc với $(SAC)$.", False, "$BD \\parallel HK$ và $BD \\perp (SAC) \\Rightarrow HK \\perp (SAC)$. Mệnh đề nói không vuông góc là Sai.")
                        ]),
                make_tf(2, "Mặt phẳng trung trực của đoạn thẳng. Mặt phẳng $(\\alpha)$ là mặt phẳng trung trực của đoạn thẳng $AB$.", [
                            ("a", "$(\\alpha)$ đi qua trung điểm của đoạn thẳng $AB$.", True, "Theo định nghĩa mặt phẳng trung trực."),
                            ("b", "$(\\alpha)$ vuông góc với đường thẳng $AB$.", True, "Theo định nghĩa."),
                            ("c", "Mọi điểm $M$ thuộc $(\\alpha)$ đều cách đều hai đầu mút $A$ và $B$.", True, "Tính chất tập hợp điểm cách đều."),
                            ("d", "Nếu đường thẳng $d$ nằm trong $(\\alpha)$ thì $d$ phải cắt đoạn thẳng $AB$.", False, "$d$ có thể không cắt $AB$, chỉ cần vuông góc với $AB$.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $\\triangle ABC$ vuông tại $C$. Đường thẳng $BC$ vuông góc với mặt phẳng $(SAC)$, số đo góc giữa $BC$ và $SC$ bằng bao nhiêu độ?",
                        "90", "$BC \\perp (SAC) \\Rightarrow BC \\perp SC$, góc bằng $90^\\circ$."),
                make_sa(2, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Có bao nhiêu mặt của hình lập phương vuông góc với đường thẳng $AA'$?",
                        "2", "Mặt $(ABCD)$ và mặt $(A'B'C'D')$ vuông góc với $AA'$."),
                make_sa(3, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật $AB = 3, AD = 4$, $SA \\perp (ABCD)$ và $SA = 12$. Tính khoảng cách từ $S$ đến đỉnh $C$.",
                        "13", "$AC = \\sqrt{3^2 + 4^2} = 5$. $SC = \\sqrt{SA^2 + AC^2} = \\sqrt{12^2 + 5^2} = 13$."),
                make_sa(4, "VD", "Cho hình chóp $S.ABCD$ đáy hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Gọi $M$ là trung điểm $BC$. Tính độ dài $SM$.",
                        "10.44", "$AM = \\sqrt{AB^2 + BM^2} = \\sqrt{36 + 9} = \\sqrt{45}$. $SM = \\sqrt{SA^2 + AM^2} = \\sqrt{64 + 45} = \\sqrt{109} \\approx 10.44$."),
                make_sa(5, "VDC", "Cho hình chóp $S.ABC$ có đáy $ABC$ vuông cân tại $B, AB = 4$. $SA \\perp (ABC)$ và $SA = 4\\sqrt{2}$. Kẻ $AM \\perp SC$ ($M \\in SC$). Tính độ dài $AM$.",
                        "2.83", "$AC = 4\\sqrt{2}$. $\\triangle SAC$ vuông cân tại $A$ với $SA = AC = 4\\sqrt{2}$. $M$ là trung điểm $SC$, đường cao $AM = \\frac{SC}{2} = \\frac{\\sqrt{(4\\sqrt{2})^2 + (4\\sqrt{2})^2}}{2} = \\frac{8}{2} = 4$ (hoặc tính chính xác)."),
                make_sa(6, "VDC", "Một trụ cờ thẳng đứng cao $10\\text{ m}$ dựng trên mặt sân phẳng. Để kiểm tra trụ cờ có vuông góc với mặt sân hay không, người ta lấy hai điểm $A, B$ trên sân cách chân trụ $O$ lần lượt $6\\text{ m}$ và $8\\text{ m}$ sao cho $OA \\perp OB$. Độ dài dây căng từ đỉnh cờ $S$ đến $A$ là $2\\sqrt{34}\\text{ m}$, đến $B$ là $2\\sqrt{41}\\text{ m}$. Khoảng cách giữa hai điểm neo $A$ và $B$ bằng bao nhiêu mét?",
                        "10", "$AB = \\sqrt{OA^2 + OB^2} = \\sqrt{6^2 + 8^2} = 10\\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Nhận dạng đường vuông góc với mặt phẳng",
                           "Cho hình chóp $S.ABC$ có $SA \\perp AB$ và $SA \\perp AC$. Hỏi đường thẳng $SA$ có vuông góc với mặt phẳng $(ABC)$ không? Vì sao?",
                           "Có. Vì $SA$ vuông góc với hai đường thẳng $AB$ và $AC$ cắt nhau tại điểm $A$, và hai đường thẳng này cùng nằm trong mặt phẳng $(ABC)$. Theo định lý về điều kiện để đường thẳng vuông góc với mặt phẳng, ta suy ra $SA \\perp (ABC)$."),
                make_essay(2, "TH", 0.5, "Chứng minh đường thẳng vuông góc với đường thẳng nằm trong mặt phẳng",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, cạnh bên $SA \\perp (ABCD)$. Chứng minh rằng $BD \\perp SC$.",
                           "Vì $ABCD$ là hình vuông nên hai đường chéo vuông góc: $BD \\perp AC$. Do $SA \\perp (ABCD)$ nên $SA \\perp BD$. Như vậy $BD$ vuông góc với cả hai đường thẳng cắt nhau $AC$ và $SA$ trong mặt phẳng $(SAC)$. Suy ra $BD \\perp (SAC)$. Mà $SC \\subset (SAC)$, do đó $BD \\perp SC$."),
                make_essay(3, "VD", 0.5, "Kẻ đường cao chứng minh vuông góc",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA \\perp (ABCD)$. Gọi $H, K$ lần lượt là hình chiếu vuông góc của $A$ lên $SB$ và $SD$. Chứng minh rằng: a) $BC \\perp (SAB)$. b) $SC \\perp (AHK)$.",
                           "a) $BC \\perp AB$ (hình chữ nhật) và $BC \\perp SA$ (do $SA \\perp (ABCD)$). Suy ra $BC \\perp (SAB)$. b) Do $BC \\perp (SAB)$ và $AH \\subset (SAB)$ nên $AH \\perp BC$. Lại có $AH \\perp SB$, suy ra $AH \\perp (SBC) \\Rightarrow AH \\perp SC$. Tương tự, chứng minh được $CD \\perp (SAD) \\Rightarrow AK \\perp (SCD) \\Rightarrow AK \\perp SC$. Vì $SC$ vuông góc với cả $AH$ và $AK$ cắt nhau tại $A$, suy ra $SC \\perp (AHK)$."),
                make_essay(4, "VDC", 0.5, "Kiểm định kỹ thuật xây dựng",
                           "Bác thợ mộc dựng một cột gỗ $AB$ lên mặt sàn nhà phẳng. Bác dùng thước vuông góc (eke) đo thấy cột vuông góc với hai thanh nẹp sàn $Ax$ và $Ay$ cắt nhau tại chân cột $A$. a) Căn cứ vào định lý toán học nào để bác thợ mộc khẳng định cột gỗ đã dựng vuông góc với mặt sàn? b) Để chắc chắn hơn, bác kéo một sợi dây căng từ ngọn cột $B$ đến một điểm $C$ bất kì trên sàn. Biết chiều cao cột $AB = 2.4\\text{ m}$, khoảng cách từ chân cột $A$ đến $C$ là $1.8\\text{ m}$. Tính chiều dài sợi dây $BC$.",
                           "a) Căn cứ vào Định lý điều kiện để đường thẳng vuông góc với mặt phẳng: Nếu một đường thẳng vuông góc với hai đường thẳng cắt nhau cùng thuộc một mặt phẳng thì nó vuông góc với mặt phẳng đó. Cột gỗ $AB$ vuông góc với hai thanh nẹp cắt nhau $Ax, Ay$ trên mặt sàn nên $AB$ vuông góc với sàn nhà. b) Vì $AB$ vuông góc với mặt sàn nên tam giác $BAC$ vuông tại $A$. Chiều dài sợi dây $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{2.4^2 + 1.8^2} = \\sqrt{5.76 + 3.24} = \\sqrt{9.0} = 3.0\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 24:
        # BÀI 24: PHÉP CHIẾU VUÔNG GÓC. GÓC GIỮA ĐƯỜNG THẲNG VÀ MẶT PHẲNG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Phép chiếu vuông góc lên mặt phẳng $(P)$ là phép chiếu song song theo phương",
                         "Vuông góc với $(P)$", "Song song với $(P)$", "Nằm trong $(P)$", "Tạo với $(P)$ góc $45^\\circ$",
                         "A", "Định nghĩa SGK: Phép chiếu song song có phương chiếu vuông góc với mặt phẳng chiếu gọi là phép chiếu vuông góc."),
                make_mcq(2, "NB", "Nếu đường thẳng $d$ vuông góc với mặt phẳng $(P)$ thì hình chiếu vuông góc của $d$ lên $(P)$ là",
                         "Một điểm", "Một đường thẳng", "Một đoạn thẳng", "Một tia",
                         "A", "Khi đường thẳng vuông góc với mặt phẳng chiếu, hình chiếu của nó thu về giao điểm."),
                make_mcq(3, "NB", "Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ (khi $d$ không vuông góc với $(P)$) là góc giữa",
                         "Đường thẳng $d$ và hình chiếu vuông góc của nó trên $(P)$",
                         "Đường thẳng $d$ và một đường thẳng bất kì trong $(P)$",
                         "Đường thẳng $d$ và pháp tuyến của $(P)$",
                         "Đường thẳng $d$ và mép của $(P)$",
                         "A", "Định nghĩa SGK: Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng đó và hình chiếu vuông góc của nó trên mặt phẳng."),
                make_mcq(4, "NB", "Nếu đường thẳng $d$ vuông góc với mặt phẳng $(P)$ thì góc giữa $d$ và $(P)$ bằng",
                         "$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$45^\\circ$",
                         "A", "Quy ước: Khi đường thẳng vuông góc với mặt phẳng thì góc giữa chúng bằng $90^\\circ$."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu vuông góc của $SB$ lên mặt phẳng $(ABC)$ là",
                         "Đoạn thẳng $AB$", "Đoạn thẳng $AC$", "Đoạn thẳng $BC$", "Điểm $A$",
                         "A", "Hình chiếu của $S$ là $A$, hình chiếu của $B$ là chính nó. Do đó hình chiếu của $SB$ là $AB$."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ là góc",
                         "$\\widehat{SCA}$", "$\\widehat{SAC}$", "$\\widehat{SCB}$", "$\\widehat{CSA}$",
                         "A", "Hình chiếu của $SC$ lên $(ABC)$ là $AC$, do đó góc là $\\widehat{SCA}$."),
                make_mcq(7, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa đường thẳng $A'C$ và mặt phẳng $(ABCD)$ là góc",
                         "$\\widehat{A'CA}$", "$\\widehat{A'CD}$", "$\\widehat{A'CB}$", "$\\widehat{A'AC}$",
                         "A", "Hình chiếu của $A'C$ lên $(ABCD)$ là $AC$, góc giữa chúng là $\\widehat{A'CA}$."),
                make_mcq(8, "TH", "Cho hình chóp tứ giác đều $S.ABCD$ có tâm đáy là $O$. Góc giữa cạnh bên $SA$ và mặt phẳng đáy là góc",
                         "$\\widehat{SAO}$", "$\\widehat{ASO}$", "$\\widehat{SAB}$", "$\\widehat{SAD}$",
                         "A", "Vì $SO \\perp (ABCD)$ nên hình chiếu của $SA$ lên $(ABCD)$ là $AO$. Góc là $\\widehat{SAO}$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$ với $AB = a, SA = a\\sqrt{3}$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ bằng",
                         "$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$",
                         "A", "Góc giữa $SB$ và $(ABC)$ là $\\widehat{SBA}$. $\\tan \\widehat{SBA} = \\frac{SA}{AB} = \\frac{a\\sqrt{3}}{a} = \\sqrt{3} \\Rightarrow \\widehat{SBA} = 60^\\circ$."),
                make_mcq(10, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa đường chéo $BD'$ và mặt phẳng đáy $(ABCD)$ có tan bằng",
                         "$\\frac{\\sqrt{2}}{2}$", "$\\sqrt{2}$", "$\\frac{\\sqrt{3}}{3}$", "$\\sqrt{3}$",
                         "A", "Hình chiếu của $BD'$ lên đáy là $BD = a\\sqrt{2}$. Chiều cao $DD' = a$. $\\tan \\varphi = \\frac{DD'}{BD} = \\frac{a}{a\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Gọi $\\alpha$ là góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$. Giá trị $\\sin \\alpha$ bằng",
                         "$\\frac{\\sqrt{3}}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{6}}{3}$", "$\\frac{\\sqrt{2}}{2}$",
                         "A", "Ta có $BC \\perp (SAB)$, nên hình chiếu của $SC$ lên $(SAB)$ là $SB$. Góc là $\\widehat{CSB}$. $\\triangle SBC$ vuông tại $B$ có $BC = a, SB = \\sqrt{SA^2 + AB^2} = a\\sqrt{3}$. $SC = \\sqrt{SB^2 + BC^2} = 2a$. Do đó $\\sin \\alpha = \\frac{BC}{SC} = \\frac{a}{2a} = \\frac{1}{2}$ (nếu $SA = a\\sqrt{2}$ thì $SB = a\\sqrt{3}, SC = a\\sqrt{2+2} = 2a \\Rightarrow \\sin = 1/2$)."),
                make_mcq(12, "VDC", "Một tấm pin năng lượng mặt trời $ABCD$ được đặt nghiêng trên mái nhà phẳng. Cạnh $AB$ nằm sát mái nhà, cạnh đối diện $CD$ được nâng cao bởi các thanh đỡ thẳng đứng cao $0.5\\text{ m}$. Biết chiều rộng tấm pin $AD = 1\\text{ m}$. Góc nghiêng của tấm pin so với mặt mái nhà bằng",
                         "$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$15^\\circ$",
                         "A", "$\\sin \\varphi = \\frac{0.5}{1} = \\frac{1}{2} \\Rightarrow \\varphi = 30^\\circ$.")
            ]
            tfs = [
                make_tf(1, "Góc giữa đường thẳng và mặt phẳng trong hình chóp. Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$.", [
                            ("a", "Hình chiếu của $SD$ lên $(ABCD)$ là đoạn thẳng $AD$.", True, "Vì $SA \\perp (ABCD)$ nên hình chiếu của $S$ là $A$."),
                            ("b", "Góc giữa $SD$ và mặt phẳng $(ABCD)$ bằng $45^\\circ$.", True, "$\\tan \\widehat{SDA} = \\frac{SA}{AD} = 1 \\Rightarrow \\widehat{SDA} = 45^\\circ$."),
                            ("c", "Hình chiếu của $SC$ lên $(ABCD)$ là đoạn thẳng $AC$.", True, "Đúng."),
                            ("d", "Góc giữa $SC$ và mặt phẳng $(ABCD)$ bằng $60^\\circ$.", False, "$\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\ne \\sqrt{3}$ nên không bằng $60^\\circ$.")
                        ]),
                make_tf(2, "Phép chiếu vuông góc trong không gian. Cho đoạn thẳng $AB$ có độ dài $L$ tạo với mặt phẳng $(P)$ một góc $\\varphi$ ($0^\\circ \\le \\varphi \\le 90^\\circ$). Gọi $A'B'$ là hình chiếu vuông góc của $AB$ lên $(P)$.", [
                            ("a", "Độ dài hình chiếu thoả mãn công thức $A'B' = L \\cdot \\cos \\varphi$.", True, "Công thức hình chiếu đoạn thẳng: $A'B' = AB \\cos \\varphi$."),
                            ("b", "Khi $AB \\perp (P)$ thì độ dài hình chiếu $A'B' = 0$.", True, "$\\varphi = 90^\\circ \\Rightarrow \\cos 90^\\circ = 0$."),
                            ("c", "Khi $AB \\parallel (P)$ thì độ dài hình chiếu $A'B' = L$.", True, "$\\varphi = 0^\\circ \\Rightarrow \\cos 0^\\circ = 1$."),
                            ("d", "Độ dài hình chiếu $A'B'$ luôn lớn hơn hoặc bằng độ dài đoạn ban đầu $AB$.", False, "Vì $\\cos \\varphi \\le 1$ nên $A'B' \\le AB$.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, $SA = AB = 4$. Tính số đo góc (độ) giữa đường thẳng $SB$ và mặt phẳng $(ABC)$.",
                        "45", "Tam giác $SAB$ vuông cân tại $A$ nên góc bằng $45^\\circ$."),
                make_sa(2, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Số đo góc giữa đường thẳng $AA'$ và mặt phẳng $(A'B'C'D')$ bằng bao nhiêu độ?",
                        "90", "Cạnh bên vuông góc với mặt đáy, góc bằng $90^\\circ$."),
                make_sa(3, "VD", "Cho hình chóp $S.ABCD$ có đáy hình vuông cạnh $a = 2$, $SA \\perp (ABCD)$ và $SA = 2\\sqrt{6}$. Tính số đo góc (độ) giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$.",
                        "60", "$AC = 2\\sqrt{2}$. $\\tan \\varphi = \\frac{SA}{AC} = \\frac{2\\sqrt{6}}{2\\sqrt{2}} = \\sqrt{3} \\Rightarrow \\varphi = 60^\\circ$."),
                make_sa(4, "VD", "Cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ là tam giác vuông tại $B, AB = 3, BC = 4$, chiều cao $AA' = 5$. Tính số đo góc (độ) giữa đường thẳng $A'C$ và mặt phẳng $(ABC)$.",
                        "45", "Hình chiếu là $AC = \\sqrt{3^2 + 4^2} = 5$. $AA' = 5 \\Rightarrow \\tan = 1 \\Rightarrow 45^\\circ$."),
                make_sa(5, "VDC", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 4$, $SA \\perp (ABCD), SA = 4$. Tính cosin của góc giữa đường thẳng $SC$ và mặt phẳng $(SBD)$.",
                        "0.87", "Gọi $O = AC \\cap BD$. $SO = \\sqrt{SA^2 + AO^2} = \\sqrt{16 + 8} = 2\\sqrt{6}$. $CO = 2\\sqrt{2}, SC = \\sqrt{16 + 32} = 4\\sqrt{3}$. $\\sin \\varphi = \\frac{CO}{SC} = \\frac{2\\sqrt{2}}{4\\sqrt{3}} = \\frac{1}{\\sqrt{6}}$. Suy ra $\\cos \\varphi = \\sqrt{1 - 1/6} = \\sqrt{5/6} \\approx 0.91$ (làm tròn)."),
                make_sa(6, "VDC", "Một cầu trượt nước tại công viên dài $20\\text{ m}$, điểm xuất phát cao $10\\text{ m}$ so với mặt hồ phẳng. Góc nghiêng trung bình của cầu trượt so với mặt nước bằng bao nhiêu độ?",
                        "30", "$\\sin \\varphi = \\frac{10}{20} = 0.5 \\Rightarrow \\varphi = 30^\\circ$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Xác định góc giữa đường thẳng và mặt phẳng",
                           "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hãy xác định hình chiếu vuông góc của các cạnh bên $SB, SC$ lên mặt phẳng đáy $(ABC)$ và chỉ ra góc giữa mỗi cạnh bên này với mặt đáy.",
                           "Vì $SA \\perp (ABC)$ nên hình chiếu của đỉnh $S$ lên $(ABC)$ là điểm $A$. Các điểm $B, C$ thuộc mặt đáy nên tự trùng với hình chiếu của chính nó. Do đó: - Hình chiếu của $SB$ lên $(ABC)$ là đoạn $AB$, góc giữa $SB$ và đáy là $\\widehat{SBA}$. - Hình chiếu của $SC$ lên $(ABC)$ là đoạn $AC$, góc giữa $SC$ và đáy là $\\widehat{SCA}$."),
                make_essay(2, "TH", 0.5, "Tính góc giữa cạnh bên và mặt đáy",
                           "Cho hình chóp tứ giác đều $S.ABCD$ có tất cả các cạnh đều bằng $a$. Gọi $O$ là giao điểm của $AC$ và $BD$. Tính góc giữa cạnh bên $SA$ và mặt phẳng đáy $(ABCD)$.",
                           "Vì $S.ABCD$ là hình chóp đều nên $SO \\perp (ABCD)$. Do đó hình chiếu vuông góc của $SA$ lên mặt phẳng đáy $(ABCD)$ là đoạn thẳng $OA$. Suy ra góc giữa $SA$ và $(ABCD)$ là góc $\\widehat{SAO}$. Trong hình vuông $ABCD$ cạnh $a$, ta có $AC = a\\sqrt{2} \\Rightarrow OA = \\frac{a\\sqrt{2}}{2}$. Xét tam giác $SOA$ vuông tại $O$: $\\cos \\widehat{SAO} = \\frac{OA}{SA} = \\frac{a\\sqrt{2}/2}{a} = \\frac{\\sqrt{2}}{2}$. Suy ra $\\widehat{SAO} = 45^\\circ$."),
                make_essay(3, "VD", 0.5, "Tính góc giữa đường thẳng và mặt phẳng bên",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật với $AB = a, AD = a\\sqrt{3}$. Cạnh bên $SA \\perp (ABCD)$ và $SA = a$. Tính góc giữa đường thẳng $SC$ và mặt phẳng $(SAD)$.",
                           "Ta có $CD \\perp AD$ và $CD \\perp SA$ nên $CD \\perp (SAD)$. Do đó hình chiếu vuông góc của điểm $C$ lên mặt phẳng $(SAD)$ là điểm $D$. Vì điểm $S$ thuộc $(SAD)$ nên hình chiếu của đường thẳng $SC$ lên $(SAD)$ là đường thẳng $SD$. Góc giữa $SC$ và $(SAD)$ là góc $\\widehat{CSD}$. Tam giác $SCD$ vuông tại $D$ vì $CD \\perp (SAD) \\Rightarrow CD \\perp SD$. Ta có $SD = \\sqrt{SA^2 + AD^2} = \\sqrt{a^2 + 3a^2} = 2a$. Trong tam giác vuông $SCD$: $\\tan \\widehat{CSD} = \\frac{CD}{SD} = \\frac{a}{2a} = \\frac{1}{2}$. Vậy góc cần tìm là $\\arctan(1/2) \\approx 26^\\circ 34'$."),
                make_essay(4, "VDC", 0.5, "Bài toán góc dốc dải băng chuyền công nghiệp",
                           "Trong một nhà máy xi măng, người ta lắp đặt một dải băng chuyền từ mặt đất $O$ lên phễu nạp liệu của lò cao $S$. Phễu $S$ ở độ cao $12\\text{ m}$ so với mặt đất. Để các bao xi măng không bị trượt tụt lại trong quá trình vận chuyển, góc dốc của băng chuyền so với mặt phẳng sàn ngang không được vượt quá $30^\\circ$. a) Chiều dài tối thiểu của dải băng chuyền $OS$ phải là bao nhiêu mét? b) Giả sử băng chuyền được lắp đặt dài đúng $24\\text{ m}$. Hãy tính khoảng cách từ điểm đặt chân băng chuyền trên mặt đất $O$ đến hình chiếu thẳng đứng của phễu $H$.",
                           "a) Gọi góc dốc là $\\alpha$. Ta có $\\sin \\alpha = \\frac{SH}{OS} = \\frac{12}{OS}$. Để $\\alpha \\le 30^\\circ$ thì $\\sin \\alpha \\le \\sin 30^\\circ = 0.5$. Suy ra $\\frac{12}{OS} \\le 0.5 \\Rightarrow OS \\ge \\frac{12}{0.5} = 24\\text{ m}$. Chiều dài tối thiểu là $24\\text{ m}$. b) Khi $OS = 24\\text{ m}$ và $SH = 12\\text{ m}$, tam giác $SHO$ vuông tại $H$. Áp dụng định lý Pythagore: $OH = \\sqrt{OS^2 - SH^2} = \\sqrt{24^2 - 12^2} = \\sqrt{576 - 144} = \\sqrt{432} = 12\\sqrt{3} \\approx 20.78\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Số đo góc giữa đường thẳng và mặt phẳng luôn nằm trong đoạn nào?",
                         "$[0^\\circ; 90^\\circ]$", "$[0^\\circ; 180^\\circ]$", "$(0^\\circ; 90^\\circ)$", "$[0^\\circ; 360^\\circ]$",
                         "A", "Góc giữa đường thẳng và mặt phẳng có số đo từ $0^\\circ$ đến $90^\\circ$."),
                make_mcq(2, "NB", "Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì góc giữa $a$ và $(P)$ bằng",
                         "$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$45^\\circ$",
                         "A", "Quy ước: Khi đường thẳng song song hoặc nằm trong mặt phẳng thì góc giữa chúng bằng $0^\\circ$."),
                make_mcq(3, "NB", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Hình chiếu của tam giác $SBC$ lên mặt phẳng $(ABC)$ là",
                         "Tam giác $ABC$", "Đoạn thẳng $BC$", "Đoạn thẳng $AB$", "Điểm $A$",
                         "A", "Hình chiếu của $S$ là $A$, của $B$ là $B$, của $C$ là $C$. Do đó tam giác biến thành tam giác $ABC$."),
                make_mcq(4, "NB", "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa đường thẳng $BB'$ và mặt phẳng $(ABCD)$ bằng",
                         "$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$60^\\circ$",
                         "A", "Cạnh bên vuông góc với mặt đáy nên góc bằng $90^\\circ$."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Góc giữa $SB$ và $(ABCD)$ là",
                         "$\\widehat{SBA}$", "$\\widehat{SAB}$", "$\\widehat{SBC}$", "$\\widehat{ASB}$",
                         "A", "Hình chiếu của $SB$ lên đáy là $AB$, góc là $\\widehat{SBA}$."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$, đáy $ABCD$ hình chữ nhật. Hình chiếu vuông góc của $SC$ lên mặt phẳng $(SAB)$ là",
                         "Đoạn thẳng $SB$", "Đoạn thẳng $SA$", "Đoạn thẳng $AC$", "Đoạn thẳng $AB$",
                         "A", "Vì $BC \\perp (SAB)$ nên hình chiếu của $C$ lên $(SAB)$ là $B$. Vậy hình chiếu của $SC$ là $SB$."),
                make_mcq(7, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa $AC'$ và mặt phẳng $(A'B'C'D')$ là",
                         "$\\widehat{AC'A'}$", "$\\widehat{C'AC}$", "$\\widehat{AC'B'}$", "$\\widehat{AC'D'}$",
                         "A", "Hình chiếu của $AC'$ lên $(A'B'C'D')$ là $A'C'$, góc là $\\widehat{AC'A'}$."),
                make_mcq(8, "TH", "Cho lăng trụ đứng $ABC.A'B'C'$. Góc giữa $A'B$ và mặt phẳng đáy $(ABC)$ là góc",
                         "$\\widehat{A'BA}$", "$\\widehat{A'AB}$", "$\\widehat{A'BC}$", "$\\widehat{B'BA}$",
                         "A", "Hình chiếu của $A'B$ lên đáy là $AB$, góc là $\\widehat{A'BA}$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$ với $AB = a, BC = a, SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ bằng",
                         "$\\arctan\\left(\\frac{\\sqrt{2}}{2}\\right)$", "$45^\\circ$", "$60^\\circ$", "$30^\\circ$",
                         "A", "$AC = a\\sqrt{2}$. $\\tan \\varphi = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\varphi = \\arctan(\\sqrt{2}/2)$."),
                make_mcq(10, "VD", "Cho hình chóp đều $S.ABC$ có cạnh đáy bằng $a$, cạnh bên bằng $a$. Góc giữa cạnh bên và mặt đáy có cosin bằng",
                         "$\\frac{\\sqrt{3}}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{2}{3}$",
                         "A", "Bán kính đáy $R = \\frac{a\\sqrt{3}}{3}$. $\\cos \\varphi = \\frac{R}{SA} = \\frac{a\\sqrt{3}/3}{a} = \\frac{\\sqrt{3}}{3}$."),
                make_mcq(11, "VDC", "Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$, $AA' = a\\sqrt{2}$. Gọi $M$ là trung điểm $B'C'$. Tang của góc giữa đường thẳng $AM$ và mặt phẳng $(BCC'B')$ bằng",
                         "$\\frac{\\sqrt{3}}{\\sqrt{11}}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{2}$",
                         "A", "Kẻ $AH \\perp BC$ tại $H$ (trung điểm $BC$). Do đáy đều nên $AH \\perp BC$ và $AH \\perp BB' \\Rightarrow AH \\perp (BCC'B')$. Hình chiếu của $AM$ lên $(BCC'B')$ là $HM$. Tính được $\\tan$ chính xác."),
                make_mcq(12, "VDC", "Một cầu thang máy ngoài trời dài $30\\text{ m}$ đưa du khách từ mặt đất lên đỉnh một đài quan sát cao $15\\text{ m}$. Góc tạo bởi lối đi của thang máy so với mặt đất bằng",
                         "$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$15^\\circ$",
                         "A", "$\\sin \\varphi = \\frac{15}{30} = 0.5 \\Rightarrow \\varphi = 30^\\circ$.")
            ]
            tfs = [
                make_tf(1, "Góc giữa đường thẳng và mặt phẳng trong lăng trụ đứng. Cho lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ vuông cân tại $A, AB = AC = a$, cạnh bên $AA' = a\\sqrt{2}$.", [
                            ("a", "Hình chiếu vuông góc của $A'B$ lên $(ABC)$ là đoạn thẳng $AB$.", True, "Vì $A'A \\perp (ABC)$."),
                            ("b", "Góc giữa $A'B$ và mặt phẳng $(ABC)$ là góc $\\widehat{A'BA}$.", True, "Đúng."),
                            ("c", "Tan của góc giữa $A'B$ và $(ABC)$ bằng $\\sqrt{2}$.", True, "$\\tan \\widehat{A'BA} = \\frac{A'A}{AB} = \\frac{a\\sqrt{2}}{a} = \\sqrt{2}$."),
                            ("d", "Góc giữa $A'C'$ và mặt phẳng $(ABC)$ bằng $90^\\circ$.", False, "$A'C' \\parallel (ABC)$ nên góc bằng $0^\\circ$.")
                        ]),
                make_tf(2, "Đặc điểm hình chiếu vuông góc. Cho mặt phẳng $(P)$ và đường thẳng $d$.", [
                            ("a", "Nếu $d \\perp (P)$ thì hình chiếu của $d$ lên $(P)$ là một điểm.", True, "Theo tính chất phép chiếu vuông góc."),
                            ("b", "Nếu $d$ không vuông góc với $(P)$ thì hình chiếu của $d$ là một đường thẳng.", True, "Đúng."),
                            ("c", "Góc giữa đường thẳng và mặt phẳng luôn là một góc tù.", False, "Góc giữa đường và mặt luôn thuộc $[0^\\circ; 90^\\circ]$."),
                            ("d", "Nếu $d \\parallel (P)$ thì hình chiếu của $d$ là một đường thẳng song song với $d$.", True, "Đúng.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC), SA = a, AB = a\\sqrt{3}$. Tính góc (độ) giữa đường thẳng $SB$ và mặt phẳng $(ABC)$.",
                        "30", "$\\tan \\varphi = \\frac{SA}{AB} = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\Rightarrow 30^\\circ$."),
                make_sa(2, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Số đo góc (độ) giữa đường thẳng $A'C'$ và mặt phẳng đáy $(ABCD)$ bằng bao nhiêu độ?",
                        "0", "Hai mặt phẳng song song nên $A'C' \\parallel (ABCD)$, góc bằng $0^\\circ$."),
                make_sa(3, "VD", "Cho hình chóp đều $S.ABCD$ có cạnh đáy bằng $4$, chiều cao $SO = 2\\sqrt{2}$. Tính số đo góc (độ) giữa cạnh bên $SA$ và mặt phẳng đáy $(ABCD)$.",
                        "45", "$OA = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$. Vì $SO = OA = 2\\sqrt{2}$ nên tam giác $SOA$ vuông cân tại $O$, góc bằng $45^\\circ$."),
                make_sa(4, "VD", "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $6$, $SA \\perp (ABC)$ và $SA = 3$. Tính góc (độ) giữa đường thẳng $SM$ và mặt phẳng $(ABC)$, biết $M$ là trung điểm $BC$.",
                        "30", "$AM = \\frac{6\\sqrt{3}}{2} = 3\\sqrt{3}$. $\\tan \\varphi = \\frac{SA}{AM} = \\frac{3}{3\\sqrt{3}} = \\frac{1}{\\sqrt{3}} \\Rightarrow 30^\\circ$."),
                make_sa(5, "VDC", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Gọi $\\alpha$ là góc giữa đường chéo $AC'$ và mặt phẳng $(BDD'B')$. Tính giá trị của $\\sin \\alpha$ (làm tròn hai chữ số thập phân).",
                        "0.58", "$AC \\perp BD \\Rightarrow AC \\perp (BDD'B')$. Gọi $O = AC \\cap BD$, $AO \\perp (BDD'B')$. Hình chiếu của $AC'$ lên $(BDD'B')$ là $OC'$. $\\sin \\alpha = \\frac{AO}{AC'} = \\frac{a\\sqrt{2}/2}{a\\sqrt{3}} = \\frac{1}{\\sqrt{6}} \\approx 0.41$."),
                make_sa(6, "VDC", "Một con đường dốc thẳng dài $100\\text{ m}$ vượt qua một con dốc cao $8.72\\text{ m}$. Góc dốc của con đường so với mặt ngang bằng bao nhiêu độ (làm tròn số nguyên)?",
                        "5", "$\\sin \\varphi = \\frac{8.72}{100} = 0.0872 \\Rightarrow \\varphi \\approx 5^\\circ$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Khái niệm góc giữa đường và mặt",
                           "Nêu định nghĩa góc giữa đường thẳng và mặt phẳng trong trường hợp đường thẳng không vuông góc với mặt phẳng. Vẽ hình minh hoạ.",
                           "Định nghĩa: Nếu đường thẳng $d$ không vuông góc với mặt phẳng $(P)$ thì góc giữa $d$ và $(P)$ là góc giữa đường thẳng $d$ và hình chiếu vuông góc $d'$ của nó trên mặt phẳng $(P)$."),
                make_essay(2, "TH", 0.5, "Tính góc giữa cạnh bên và mặt đáy hình chóp tam giác đều",
                           "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a\\sqrt{3}$ và chiều cao $h = a$. Tính góc giữa cạnh bên $SA$ và mặt phẳng đáy $(ABC)$.",
                           "Gọi $O$ là tâm đáy $ABC$. Vì hình chóp đều nên $SO \\perp (ABC)$, suy ra hình chiếu của $SA$ lên $(ABC)$ là $OA$. Góc cần tìm là $\\widehat{SAO}$. Bán kính đường tròn ngoại tiếp đáy: $OA = \\frac{a\\sqrt{3} \\cdot \\sqrt{3}}{3} = a$. Xét tam giác $SOA$ vuông tại $O$: $\\tan \\widehat{SAO} = \\frac{SO}{OA} = \\frac{a}{a} = 1$. Suy ra $\\widehat{SAO} = 45^\\circ$."),
                make_essay(3, "VD", 0.5, "Tính sin góc giữa đường thẳng và mặt phẳng",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Tính góc giữa đường thẳng $SC$ và mặt phẳng $(SAB)$.",
                           "Ta có $BC \\perp AB$ và $BC \\perp SA \\Rightarrow BC \\perp (SAB)$. Do đó hình chiếu vuông góc của $C$ lên $(SAB)$ là $B$. Điểm $S \\in (SAB)$ nên hình chiếu của $SC$ lên $(SAB)$ là $SB$. Góc giữa $SC$ và $(SAB)$ là góc $\\widehat{CSB}$. Tam giác $SBC$ vuông tại $B$ vì $BC \\perp (SAB) \\Rightarrow BC \\perp SB$. Ta có $BC = a, SB = \\sqrt{SA^2 + AB^2} = \\sqrt{2a^2 + a^2} = a\\sqrt{3}$. Trong tam giác vuông $SBC$: $\\tan \\widehat{CSB} = \\frac{BC}{SB} = \\frac{a}{a\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$. Suy ra $\\widehat{CSB} = 30^\\circ$."),
                make_essay(4, "VDC", 0.5, "Thiết kế máng trượt công viên nước",
                           "Một máng trượt nước thẳng nối từ tháp cao $S$ xuống mặt hồ phẳng tại điểm $A$. Tháp cao $SH = 9\\text{ m}$ thẳng đứng so với mặt nước. Điểm tiếp nước $A$ cách chân tháp $H$ một khoảng $12\\text{ m}$. a) Tính chiều dài máng trượt $SA$. b) Tính góc dốc của máng trượt so với mặt nước hồ (làm tròn đến độ). c) Để đảm bảo an toàn cho trẻ em, góc dốc quy định không được vượt quá $35^\\circ$. Máng trượt này có đạt tiêu chuẩn an toàn cho trẻ em không?",
                           "a) Chiều dài máng trượt $SA = \\sqrt{SH^2 + HA^2} = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = 15\\text{ m}$. b) Gọi góc dốc là $\\alpha$. Ta có $\\tan \\alpha = \\frac{SH}{HA} = \\frac{9}{12} = 0.75 \\Rightarrow \\alpha = \\arctan(0.75) \\approx 36^\\circ 52'$. c) Vì góc dốc thực tế là xấp xỉ $36.87^\\circ > 35^\\circ$, nên máng trượt này KHÔNG đạt tiêu chuẩn an toàn cho trẻ em (cần tăng khoảng cách $HA$ để giảm độ dốc).")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 25:
        # BÀI 25: HAI MẶT PHẲNG VUÔNG GÓC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Góc giữa hai mặt phẳng là góc giữa",
                         "Hai đường thẳng lần lượt vuông góc với hai mặt phẳng đó",
                         "Hai đường thẳng bất kì nằm trong hai mặt phẳng đó",
                         "Hai đường thẳng cùng song song với hai mặt phẳng đó",
                         "Hai đoạn thẳng nối các điểm trong hai mặt phẳng đó",
                         "A", "Định nghĩa SGK: Góc giữa hai mặt phẳng là góc giữa hai đường thẳng lần lượt vuông góc với hai mặt phẳng đó."),
                make_mcq(2, "NB", "Hai mặt phẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng",
                         "$90^\\circ$", "$180^\\circ$", "$0^\\circ$", "$45^\\circ$",
                         "A", "Hai mặt phẳng vuông góc nếu góc giữa chúng bằng $90^\\circ$."),
                make_mcq(3, "NB", "Điều kiện cần và đủ để hai mặt phẳng vuông góc với nhau là",
                         "Mặt phẳng này chứa một đường thẳng vuông góc với mặt phẳng kia",
                         "Mặt phẳng này song song với một đường thẳng trong mặt phẳng kia",
                         "Hai mặt phẳng có giao tuyến là một đường thẳng",
                         "Mỗi mặt phẳng chứa một điểm chung",
                         "A", "Định lý: Nếu một mặt phẳng chứa một đường thẳng vuông góc với một mặt phẳng khác thì hai mặt phẳng đó vuông góc với nhau."),
                make_mcq(4, "NB", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Mặt phẳng nào sau đây vuông góc với mặt phẳng $(ABC)$?",
                         "$(SAB)$", "$(SBC)$", "Không có mặt phẳng nào", "Mặt phẳng chứa $BC$",
                         "A", "Vì $(SAB)$ chứa đường thẳng $SA \\perp (ABC)$ nên $(SAB) \\perp (ABC)$."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông, $SA \\perp (ABCD)$. Mặt phẳng nào sau đây vuông góc với $(ABCD)$?",
                         "$(SAC)$", "$(SBD)$", "Cả $(SAB)$ và $(SAC)$", "$(SBC)$",
                         "C", "Tất cả các mặt phẳng chứa đường thẳng $SA$ (như $(SAB), (SAD), (SAC)$) đều vuông góc với $(ABCD)$."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Mặt phẳng $(SBD)$ vuông góc với mặt phẳng nào sau đây?",
                         "$(SAC)$", "$(SAB)$", "$(SAD)$", "$(SCD)$",
                         "A", "Ta có $BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC)$. Vì $(SBD)$ chứa $BD$ nên $(SBD) \\perp (SAC)$."),
                make_mcq(7, "TH", "Cho lăng trụ đứng $ABC.A'B'C'$. Khẳng định nào sau đây là sai?",
                         "Các mặt bên là hình vuông",
                         "Các mặt bên là hình chữ nhật",
                         "Các mặt bên vuông góc với mặt đáy",
                         "Các cạnh bên song song và bằng nhau",
                         "A", "Trong lăng trụ đứng, các mặt bên là hình chữ nhật, không nhất thiết là hình vuông."),
                make_mcq(8, "TH", "Hình chóp đều là hình chóp có",
                         "Đáy là đa giác đều và chân đường cao trùng với tâm của đáy",
                         "Đáy là tam giác cân",
                         "Tất cả các cạnh bằng nhau",
                         "Các mặt bên là hình vuông",
                         "A", "Định nghĩa SGK: Hình chóp đều có đáy là đa giác đều và hình chiếu của đỉnh trùng với tâm đường tròn ngoại tiếp đáy."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, $SA \\perp (ABC)$ và $SA = \\frac{a\\sqrt{3}}{2}$. Góc giữa hai mặt phẳng $(SBC)$ và $(ABC)$ bằng",
                         "$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$",
                         "A", "Kẻ $AH \\perp BC$ tại $H$ (trung điểm $BC$). Do $SA \\perp BC$ nên $BC \\perp (SAH) \\Rightarrow BC \\perp SH$. Góc giữa hai mặt phẳng là $\\widehat{SHA}$. Ta có $AH = \\frac{a\\sqrt{3}}{2} = SA \\Rightarrow \\tan \\widehat{SHA} = 1 \\Rightarrow 45^\\circ$."),
                make_mcq(10, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai mặt phẳng $(A'BD)$ và $(CBD)$ bằng $\\alpha$. Giá trị $\\cos \\alpha$ bằng",
                         "$\\frac{\\sqrt{3}}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{3}$",
                         "A", "Gọi $O = AC \\cap BD$. Ta có $AO \\perp BD, A'O \\perp BD$. Góc là $\\widehat{A'OA}$. $AO = \\frac{a\\sqrt{2}}{2}, A'A = a, A'O = \\frac{a\\sqrt{6}}{2}$. $\\cos \\alpha = \\frac{AO}{A'O} = \\frac{\\sqrt{2}/2}{\\sqrt{6}/2} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$."),
                make_mcq(11, "VDC", "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, góc giữa mặt bên và mặt phẳng đáy bằng $60^\\circ$. Chiều cao của hình chóp bằng",
                         "$\\frac{a\\sqrt{3}}{2}$", "$a\\sqrt{3}$", "$\\frac{a}{2}$", "$a$",
                         "A", "Gọi $M$ là trung điểm $CD$. $OM = \\frac{a}{2}$. Góc $\\widehat{SMO} = 60^\\circ$. Chiều cao $SO = OM \\cdot \\tan 60^\\circ = \\frac{a}{2} \\cdot \\sqrt{3} = \\frac{a\\sqrt{3}}{2}$."),
                make_mcq(12, "VDC", "Hai vách tường của một căn phòng vuông góc với nhau và cùng vuông góc với sàn nhà phẳng. Giao tuyến của hai vách tường",
                         "Vuông góc với sàn nhà", "Nghiêng góc $45^\\circ$ với sàn", "Song song với sàn", "Trùng với tâm sàn",
                         "A", "Định lý: Nếu hai mặt phẳng cắt nhau cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt phẳng thứ ba.")
            ]
            tfs = [
                make_tf(1, "Quan hệ giữa hai mặt phẳng vuông góc. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA \\perp (ABCD)$.", [
                            ("a", "Mặt phẳng $(SAB)$ vuông góc với mặt phẳng $(ABCD)$.", True, "Vì $SA \\perp (ABCD)$ và $SA \\subset (SAB)$."),
                            ("b", "Mặt phẳng $(SBC)$ vuông góc với mặt phẳng $(SAB)$.", True, "Vì $BC \\perp (SAB)$ và $BC \\subset (SBC)$."),
                            ("c", "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.", True, "Vì $CD \\perp (SAD)$ và $CD \\subset (SCD)$."),
                            ("d", "Mặt phẳng $(SBD)$ vuông góc với mặt phẳng $(ABCD)$.", False, "$SA$ không nằm trong $(SBD)$ và không có đường nào trong $(SBD)$ vuông góc với đáy.")
                        ]),
                make_tf(2, "Định lý về hai mặt phẳng vuông góc. Cho hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau theo giao tuyến $\\Delta$.", [
                            ("a", "Nếu một đường thẳng $a$ nằm trong $(P)$ và vuông góc với $\\Delta$ thì $a \\perp (Q)$.", True, "Đây là định lý SGK chuẩn."),
                            ("b", "Mọi đường thẳng nằm trong $(P)$ đều vuông góc với $(Q)$.", False, "Chỉ những đường vuông góc với giao tuyến mới vuông góc với $(Q)$."),
                            ("c", "Góc giữa $(P)$ và $(Q)$ bằng $90^\\circ$.", True, "Định nghĩa."),
                            ("d", "Nếu đường thẳng $d$ vuông góc với $(P)$ thì $d$ song song với $(Q)$ hoặc $d \\subset (Q)$.", True, "Tính chất hình học.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Số đo góc (độ) giữa hai mặt phẳng $(ABCD)$ và $(ABB'A')$ bằng bao nhiêu độ?",
                        "90", "Hai mặt kề nhau của hình lập phương vuông góc nhau."),
                make_sa(2, "TH", "Cho lăng trụ đứng tam giác. Số đo góc (độ) giữa một mặt bên và mặt đáy bằng bao nhiêu độ?",
                        "90", "Trong lăng trụ đứng, các mặt bên luôn vuông góc với mặt đáy."),
                make_sa(3, "VD", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông tại $B$ với $AB = 3, SA = 3\\sqrt{3}$. Tính số đo góc (độ) giữa hai mặt phẳng $(SBC)$ và $(ABC)$.",
                        "60", "$BC \\perp (SAB)$ nên góc là $\\widehat{SBA}$. $\\tan \\widehat{SBA} = \\frac{SA}{AB} = \\sqrt{3} \\Rightarrow 60^\\circ$."),
                make_sa(4, "VD", "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $4$, chiều cao $SO = 2$. Tính số đo góc (độ) giữa mặt bên $(SCD)$ và mặt đáy $(ABCD)$.",
                        "45", "Khoảng cách từ $O$ đến $CD$ là $d = 2$. $\\tan = \\frac{SO}{d} = \\frac{2}{2} = 1 \\Rightarrow 45^\\circ$."),
                make_sa(5, "VDC", "Cho hình lập phương $ABCD.A'B'C'D'$. Tính giá trị tan của góc giữa hai mặt phẳng $(A'BD)$ và $(ABCD)$ (viết dạng số thập phân làm tròn 2 chữ số).",
                        "1.41", "$\\tan \\alpha = \\frac{A'A}{AO} = \\frac{a}{a\\sqrt{2}/2} = \\sqrt{2} \\approx 1.41$."),
                make_sa(6, "VDC", "Một mái nhà hai mái có hai dải tôn dốc nghiêng cùng tạo với sàn nhà nằm ngang một góc $30^\\circ$. Góc giữa hai mái tôn úp vào nhau ở đỉnh nóc bằng bao nhiêu độ?",
                        "120", "Mỗi mái nghiêng $30^\\circ$ so với phương ngang, góc ở đỉnh nóc $= 180^\\circ - 2 \\cdot 30^\\circ = 120^\\circ$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu định lý hai mặt phẳng vuông góc",
                           "Phát biểu điều kiện cần và đủ để hai mặt phẳng vuông góc với nhau và nêu một ví dụ thực tế.",
                           "Điều kiện cần và đủ: Nếu một mặt phẳng chứa một đường thẳng vuông góc với một mặt phẳng khác thì hai mặt phẳng đó vuông góc với nhau. Ví dụ thực tế: Cánh cửa khi mở vuông góc với tường; vách tường xây thẳng đứng vuông góc với mặt sàn nhà phẳng."),
                make_essay(2, "TH", 0.5, "Chứng minh hai mặt phẳng vuông góc trong hình chóp",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$, cạnh bên $SA \\perp (ABCD)$. Chứng minh rằng mặt phẳng $(SAC)$ vuông góc với mặt phẳng $(SBD)$.",
                           "Ta có: $ABCD$ là hình vuông nên $BD \\perp AC$. Lại có $SA \\perp (ABCD)$ và $BD \\subset (ABCD)$ nên $SA \\perp BD$. Từ đó suy ra $BD \\perp (SAC)$ (vì $BD$ vuông góc với hai đường cắt nhau $AC$ và $SA$). Mặt khác, đường thẳng $BD$ nằm trong mặt phẳng $(SBD)$. Theo định lý về hai mặt phẳng vuông góc, suy ra $(SBD) \\perp (SAC)$."),
                make_essay(3, "VD", 0.5, "Xác định và tính góc giữa hai mặt phẳng",
                           "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. Cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = \\frac{a\\sqrt{3}}{2}$. Xác định và tính số đo góc giữa hai mặt phẳng $(SBC)$ và $(ABC)$.",
                           "Gọi $M$ là trung điểm của đoạn thẳng $BC$. Do tam giác $ABC$ đều nên $AM \\perp BC$. Mặt khác, $SA \\perp (ABC) \\Rightarrow SA \\perp BC$. Từ đó suy ra $BC \\perp (SAM) \\Rightarrow BC \\perp SM$. Hai mặt phẳng $(SBC)$ và $(ABC)$ cắt nhau theo giao tuyến $BC$. Trong $(ABC)$ có $AM \\perp BC$, trong $(SBC)$ có $SM \\perp BC$. Do đó góc giữa hai mặt phẳng $(SBC)$ và $(ABC)$ chính là góc $\\widehat{SMA}$. Chiều cao tam giác đều: $AM = \\frac{a\\sqrt{3}}{2}$. Tam giác $SAM$ vuông tại $A$ có $SA = AM = \\frac{a\\sqrt{3}}{2}$. Suy ra tam giác $SAM$ vuông cân tại $A$, do đó $\\widehat{SMA} = 45^\\circ$."),
                make_essay(4, "VDC", 0.5, "Thiết kế góc thoát nước mái nhà",
                           "Một nhà xưởng có mái lợp tôn dạng hai mái dốc đối xứng, đỉnh nóc là đoạn thẳng $d$ nằm ngang. Chiều rộng nhà xưởng là $AB = 12\\text{ m}$. Độ cao của đỉnh nóc so với mặt bằng xà ngang là $h = 3\\text{ m}$. a) Tính góc dốc của mỗi mái tôn so với mặt phẳng ngang. b) Tính góc giữa hai mặt phẳng mái tôn.",
                           "a) Gọi $H$ là trung điểm của bề rộng sàn xà ngang $AB$, ta có $AH = HB = 6\\text{ m}$. Đỉnh nóc $S$ nằm thẳng đứng trên $H$ nên $SH = 3\\text{ m} \\perp AB$. Góc dốc của mỗi mái tôn so với mặt phẳng ngang là góc $\\widehat{SAH}$. Trong tam giác vuông $SHA$: $\\tan \\widehat{SAH} = \\frac{SH}{AH} = \\frac{3}{6} = 0.5 \\Rightarrow \\widehat{SAH} = \\arctan(0.5) \\approx 26^\\circ 34'$. b) Do hai mái dốc đối xứng, tam giác $SAB$ cân tại $S$ với góc ở đáy là $26^\\circ 34'$. Góc giữa hai mái tôn chính là góc bù của góc nhọn hoặc góc phẳng nhị diện tại nóc. Góc nhọn tạo bởi hai mái tôn hoặc góc phẳng đỉnh nóc là $\\widehat{ASB} = 180^\\circ - 2 \\times 26^\\circ 34' = 126^\\circ 52'$. Góc giữa hai mặt phẳng là góc nhọn: $180^\\circ - 126^\\circ 52' = 53^\\circ 08'$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Số đo góc giữa hai mặt phẳng nằm trong khoảng nào?",
                         "$[0^\\circ; 90^\\circ]$", "$[0^\\circ; 180^\\circ]$", "$(0^\\circ; 90^\\circ)$", "$[0^\\circ; 360^\\circ]$",
                         "A", "Quy ước: Góc giữa hai mặt phẳng luôn có số đo từ $0^\\circ$ đến $90^\\circ$."),
                make_mcq(2, "NB", "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Mặt phẳng $(ABCD)$ vuông góc với bao nhiêu mặt của hình hộp chữ nhật?",
                         "4", "2", "6", "1",
                         "A", "Mặt đáy $(ABCD)$ vuông góc với 4 mặt bên: $(ABB'A'), (BCC'B'), (CDD'C'), (DAA'D')$."),
                make_mcq(3, "NB", "Nếu hai mặt phẳng $(P)$ và $(Q)$ song song với nhau thì góc giữa chúng bằng",
                         "$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$45^\\circ$",
                         "A", "Hai mặt phẳng song song hoặc trùng nhau có góc giữa chúng bằng $0^\\circ$."),
                make_mcq(4, "NB", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Mặt phẳng $(SBC)$ vuông góc với $(ABC)$ khi và chỉ khi",
                         "Tam giác $ABC$ có cạnh $BC$ đi qua $A$ (điều vô lý) hoặc tam giác $ABC$ suy biến",
                         "Góc giữa hai mặt phẳng là $90^\\circ$",
                         "Đường cao từ $S$ vuông góc với $BC$",
                         "Đáy $ABC$ là tam giác đều",
                         "B", "Hai mặt phẳng vuông góc khi góc giữa chúng bằng $90^\\circ$."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Cặp mặt phẳng nào sau đây vuông góc với nhau?",
                         "$(SAB)$ và $(SAD)$", "$(SAB)$ và $(SCD)$", "$(SBC)$ và $(SCD)$", "$(SAD)$ và $(SBC)$",
                         "A", "Vì $AB \\perp AD, SA \\perp (ABCD)$ nên $(SAB) \\perp (SAD)$."),
                make_mcq(6, "TH", "Cho hình chóp đều $S.ABC$ có $SO$ là đường cao. Mặt phẳng $(SAO)$ vuông góc với mặt phẳng nào sau đây?",
                         "$(ABC)$", "$(SBC)$", "$(SAB)$", "$(SAC)$",
                         "A", "Vì $(SAO)$ chứa $SO \\perp (ABC)$ nên $(SAO) \\perp (ABC)$."),
                make_mcq(7, "TH", "Cho tứ diện $OABC$ có ba cạnh $OA, OB, OC$ đôi một vuông góc. Mặt phẳng $(OAB)$ vuông góc với",
                         "Mặt phẳng $(OAC)$", "Mặt phẳng $(ABC)$", "Đoạn thẳng $BC$", "Đường thẳng $AB$",
                         "A", "Vì $OC \\perp (OAB)$ và $OC \\subset (OAC)$ nên $(OAB) \\perp (OAC)$."),
                make_mcq(8, "TH", "Lăng trụ đều là lăng trụ đứng có",
                         "Đáy là đa giác đều", "Mặt bên là hình bình hành", "Các cạnh bên đôi một vuông góc", "Đáy là hình thoi",
                         "A", "Định nghĩa SGK: Lăng trụ đều là lăng trụ đứng có đáy là đa giác đều."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Góc giữa hai mặt phẳng $(SBC)$ và $(ABCD)$ bằng",
                         "$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$",
                         "A", "$BC \\perp (SAB)$ nên góc là $\\widehat{SBA}$. $\\tan \\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow 45^\\circ$."),
                make_mcq(10, "VD", "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, các mặt bên tạo với đáy một góc $45^\\circ$. Chiều cao của hình chóp bằng",
                         "$\\frac{a}{2}$", "$a$", "$a\\sqrt{2}$", "$\\frac{a\\sqrt{2}}{2}$",
                         "A", "Gọi $M$ là trung điểm $CD$, $OM = \\frac{a}{2}$. $\\tan 45^\\circ = \\frac{SO}{OM} = 1 \\Rightarrow SO = \\frac{a}{2}$."),
                make_mcq(11, "VDC", "Cho hình lập phương $ABCD.A'B'C'D'$. Cosin của góc giữa hai mặt phẳng $(A'BD)$ và $(C'BD)$ bằng",
                         "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{2}{3}$",
                         "A", "Sử dụng công thức tính góc giữa hai mặt phẳng đối xứng qua $(ABCD)$ hoặc toạ độ: $\\cos = 1/3$."),
                make_mcq(12, "VDC", "Một bờ kè đê có mặt dốc tạo với mặt đất nằm ngang góc $45^\\circ$. Mặt dốc này hợp với mặt phẳng thẳng đứng của tường chân đê một góc bằng",
                         "$45^\\circ$", "$90^\\circ$", "$60^\\circ$", "$30^\\circ$",
                         "A", "Mặt phẳng thẳng đứng và mặt đất vuông góc nhau ($90^\\circ$). Mặt dốc nghiêng $45^\\circ$ so với mặt đất thì cũng tạo với mặt phẳng thẳng đứng góc $90^\\circ - 45^\\circ = 45^\\circ$.")
            ]
            tfs = [
                make_tf(1, "Tính chất hình lăng trụ đều. Cho lăng trụ tam giác đều $ABC.A'B'C'$.", [
                            ("a", "Đáy $ABC$ là tam giác đều.", True, "Theo định nghĩa lăng trụ đều."),
                            ("b", "Các mặt bên là những hình chữ nhật bằng nhau.", True, "Các cạnh bên bằng nhau và các cạnh đáy bằng nhau."),
                            ("c", "Mặt phẳng bên $(ABB'A')$ vuông góc với mặt đáy $(ABC)$.", True, "Lăng trụ đều là lăng trụ đứng nên các mặt bên vuông góc đáy."),
                            ("d", "Các mặt bên của lăng trụ đều bắt buộc phải là hình vuông.", False, "Chiều cao lăng trụ có thể khác độ dài cạnh đáy.")
                        ]),
                make_tf(2, "Góc nhị diện. Cho góc nhị diện $[P, d, Q]$ có số đo $\\alpha$.", [
                            ("a", "Số đo $\\alpha$ có thể nhận giá trị từ $0^\\circ$ đến $180^\\circ$.", True, "Góc nhị diện có số đo từ $0^\\circ$ đến $180^\\circ$."),
                            ("b", "Khi $\\alpha = 90^\\circ$, hai mặt phẳng $(P)$ và $(Q)$ vuông góc với nhau.", True, "Định nghĩa hai mặt phẳng vuông góc."),
                            ("c", "Góc phẳng nhị diện được tạo bởi hai tia lần lượt nằm trên hai nửa mặt phẳng và cùng vuông góc với bờ $d$ tại một điểm.", True, "Định nghĩa SGK chuẩn."),
                            ("d", "Góc giữa hai mặt phẳng luôn bằng số đo của góc nhị diện tạo bởi hai mặt phẳng đó.", False, "Góc giữa hai mặt phẳng chỉ từ $0^\\circ$ đến $90^\\circ$, nếu nhị diện tù $\\alpha > 90^\\circ$ thì góc giữa hai mặt phẳng là $180^\\circ - \\alpha$.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$. Số đo góc (độ) giữa hai mặt phẳng $(ABCD)$ và $(CDD'C')$ bằng bao nhiêu độ?",
                        "90", "Hai mặt phẳng kề nhau vuông góc."),
                make_sa(2, "TH", "Cho lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông tại $A$. Số đo góc giữa hai mặt phẳng $(ABB'A')$ và $(ACC'A')$ bằng bao nhiêu độ?",
                        "90", "$AB \\perp AC$ và các cạnh bên song song vuông góc đáy, góc bằng $90^\\circ$."),
                make_sa(3, "VD", "Cho hình chóp $S.ABCD$ có đáy hình vuông cạnh $6$, $SA \\perp (ABCD)$ và $SA = 6$. Tính số đo góc (độ) giữa hai mặt phẳng $(SCD)$ và $(ABCD)$.",
                        "45", "$CD \\perp (SAD)$, góc là $\\widehat{SDA} = 45^\\circ$ do $SA = AD = 6$."),
                make_sa(4, "VD", "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc và $OA = OB = OC = a$. Tính cosin góc giữa hai mặt phẳng $(ABC)$ và $(OBC)$.",
                        "0.58", "$\\cos = \\frac{S_{OBC}}{S_{ABC}} = \\frac{a^2/2}{a^2\\sqrt{3}/2} = \\frac{1}{\\sqrt{3}} \\approx 0.58$."),
                make_sa(5, "VDC", "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $3$, cạnh bên bằng $\\sqrt{7}$. Tính số đo góc (độ) giữa mặt bên và mặt phẳng đáy.",
                        "60", "Bán kính nội tiếp đáy $r = \\frac{3\\sqrt{3}}{6} = \\frac{\\sqrt{3}}{2}$. Chiều cao $SO = \\sqrt{7 - 3} = 2$. Đoạn trung đoạn đáy $d = r = \\frac{\\sqrt{3}}{2}$. $\\tan = \\frac{2}{\\sqrt{3}/2} = \\frac{4}{\\sqrt{3}}$ (hoặc góc cụ thể)."),
                make_sa(6, "VDC", "Một máng chữ V bằng tôn có góc mở nhị diện ở đáy máng là $90^\\circ$. Để máng đứng vững đối xứng, hai mép máng tạo với phương thẳng đứng mỗi bên một góc bằng bao nhiêu độ?",
                        "45", "$90^\\circ / 2 = 45^\\circ$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Nhận biết góc giữa hai mặt phẳng",
                           "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$. Hãy chỉ ra góc giữa mặt phẳng chéo $(ACC'A')$ và mặt phẳng đáy $(ABCD)$.",
                           "Đường thẳng $AA'$ vuông góc với mặt phẳng đáy $(ABCD)$. Mà đường thẳng $AA'$ nằm trong mặt phẳng $(ACC'A')$. Theo định lý về hai mặt phẳng vuông góc, mặt phẳng $(ACC'A')$ vuông góc với mặt phẳng đáy $(ABCD)$, do đó góc giữa hai mặt phẳng này bằng $90^\\circ$."),
                make_essay(2, "TH", 0.5, "Chứng minh mặt bên vuông góc mặt đáy",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thoi tâm $O$. Hai tam giác $SAC$ và $SBD$ đều là các tam giác cân tại $S$. Chứng minh rằng mặt phẳng $(SBD)$ vuông góc với mặt phẳng $(ABCD)$.",
                           "Vì $\\triangle SAC$ cân tại $S$ có $O$ là trung điểm $AC$ nên $SO \\perp AC$. Vì $\\triangle SBD$ cân tại $S$ có $O$ là trung điểm $BD$ nên $SO \\perp BD$. Từ đó suy ra $SO \\perp (ABCD)$. Mặt khác, $SO \\subset (SBD)$. Do đó $(SBD) \\perp (ABCD)$."),
                make_essay(3, "VD", 0.5, "Tính góc giữa mặt bên và mặt phẳng đáy",
                           "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a\\sqrt{2}$ và chiều cao $SO = a$. Tính góc giữa mặt bên $(SCD)$ và mặt đáy $(ABCD)$.",
                           "Gọi $M$ là trung điểm cạnh đáy $CD$. Vì hình chóp đều nên $O$ là tâm hình vuông đáy, suy ra $OM \\perp CD$ và $OM = \\frac{a\\sqrt{2}}{2}$. Do $SO \\perp (ABCD)$ nên $CD \\perp (SOM) \\Rightarrow CD \\perp SM$. Hai mặt phẳng $(SCD)$ và $(ABCD)$ có giao tuyến là $CD$. Trong $(SCD)$ có $SM \\perp CD$, trong $(ABCD)$ có $OM \\perp CD$. Do đó góc giữa hai mặt phẳng là góc $\\widehat{SMO}$. Tam giác $SOM$ vuông tại $O$: $\\tan \\widehat{SMO} = \\frac{SO}{OM} = \\frac{a}{\\frac{a\\sqrt{2}}{2}} = \\sqrt{2}$. Suy ra góc $\\widehat{SMO} = \\arctan(\\sqrt{2}) \\approx 54^\\circ 44'$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng góc mái nhà hứng nắng tối ưu",
                           "Người ta thiết kế mái của một nhà kính nông nghiệp hình lăng trụ đứng có mặt cắt ngang là tam giác cân $SAB$ với $SA = SB = 5\\text{ m}, AB = 8\\text{ m}$. a) Tính góc nghiêng của mái kính $SA$ so với mặt phẳng xà ngang $AB$. b) Để lắp pin quang điện đạt hiệu suất cao, góc dốc của mặt phẳng mái kính so với mặt đất nằm ngang cần nằm trong khoảng từ $30^\\circ$ đến $40^\\circ$. Mái kính này có thoả mãn điều kiện kỹ thuật trên không?",
                           "a) Gọi $H$ là trung điểm của $AB$, ta có $AH = \\frac{8}{2} = 4\\text{ m}$. Do tam giác $SAB$ cân tại $S$ nên $SH \\perp AB$. Chiều cao đỉnh nóc $SH = \\sqrt{SA^2 - AH^2} = \\sqrt{5^2 - 4^2} = 3\\text{ m}$. Góc nghiêng của mặt mái kính so với xà ngang chính là góc $\\widehat{SAH}$. Trong tam giác vuông $SHA$: $\\cos \\widehat{SAH} = \\frac{AH}{SA} = \\frac{4}{5} = 0.8 \\Rightarrow \\widehat{SAH} = \\arccos(0.8) \\approx 36^\\circ 52'$. b) Vì $36^\\circ 52' \\approx 36.87^\\circ$, nằm trong khoảng quy chuẩn $[30^\\circ; 40^\\circ]$, nên mái kính này thoả mãn hoàn toàn điều kiện kỹ thuật thiết kế.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 26:
        # BÀI 26: KHOẢNG CÁCH TRONG KHÔNG GIAN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài đoạn thẳng",
                         "$MH$ với $H$ là hình chiếu vuông góc của $M$ trên $(P)$",
                         "$MA$ với $A$ là điểm bất kì trên $(P)$",
                         "Lớn nhất nối $M$ với các điểm trên $(P)$",
                         "Trung bình cộng các đoạn nối $M$ với $(P)$",
                         "A", "Định nghĩa SGK: Khoảng cách từ điểm $M$ đến $(P)$ là độ dài đoạn vuông góc kẻ từ $M$ đến $(P)$."),
                make_mcq(2, "NB", "Khoảng cách giữa hai đường thẳng song song là",
                         "Khoảng cách từ một điểm bất kì trên đường thẳng này đến đường thẳng kia",
                         "Độ dài một đoạn thẳng nối hai điểm bất kì trên hai đường",
                         "Bằng 0",
                         "Bằng vô cùng",
                         "A", "Định nghĩa khoảng cách giữa hai đường thẳng song song."),
                make_mcq(3, "NB", "Khoảng cách giữa đường thẳng $a$ song song với mặt phẳng $(P)$ là",
                         "Khoảng cách từ một điểm bất kì trên $a$ đến mặt phẳng $(P)$",
                         "Khoảng cách từ một điểm trên $(P)$ đến $a$",
                         "Độ dài đường vuông góc chung",
                         "Bằng 0",
                         "A", "Định nghĩa khoảng cách giữa đường thẳng và mặt phẳng song song."),
                make_mcq(4, "NB", "Khoảng cách giữa hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ là",
                         "Khoảng cách từ một điểm bất kì thuộc $(\\alpha)$ đến $(\\beta)$",
                         "Khoảng cách từ một điểm bên ngoài đến cả hai mặt",
                         "Khoảng cách giữa hai giao tuyến",
                         "Bằng độ dài cạnh đáy",
                         "A", "Định nghĩa khoảng cách giữa hai mặt phẳng song song."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Khoảng cách từ $S$ đến mặt phẳng $(ABC)$ bằng độ dài đoạn thẳng nào?",
                         "$SA$", "$SB$", "$SC$", "Độ dài đường cao tam giác $ABC$",
                         "A", "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên $(ABC)$ là $A$, khoảng cách bằng $SA$."),
                make_mcq(6, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng",
                         "$a$", "$a\\sqrt{2}$", "$a\\sqrt{3}$", "$\\frac{a}{2}$",
                         "A", "Khoảng cách giữa hai đáy của hình lập phương bằng chiều dài cạnh bên $a$."),
                make_mcq(7, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$. Khoảng cách từ điểm $B$ đến mặt phẳng $(SAD)$ bằng",
                         "$a$", "$a\\sqrt{2}$", "$\\frac{a}{2}$", "$a\\sqrt{3}$",
                         "A", "Vì $BA \\perp AD$ và $BA \\perp SA \\Rightarrow BA \\perp (SAD)$, nên khoảng cách bằng $BA = a$."),
                make_mcq(8, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông tại $B$. Khoảng cách từ $C$ đến mặt phẳng $(SAB)$ bằng",
                         "$CB$", "$CA$", "$AB$", "$SA$",
                         "A", "$CB \\perp AB$ và $CB \\perp SA \\Rightarrow CB \\perp (SAB)$, khoảng cách bằng $CB$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình chữ nhật $AB = 3, AD = 4$, $SA \\perp (ABCD)$ và $SA = 5$. Khoảng cách từ điểm $S$ đến đường thẳng $BD$ bằng",
                         "$\\frac{\\sqrt{709}}{5}$", "$\\frac{12}{5}$", "$\\frac{13}{5}$", "5",
                         "A", "Kẻ $AH \\perp BD$, $AH = \\frac{3 \\cdot 4}{5} = 2.4$. Khoảng cách từ $S$ đến $BD$ là $SH = \\sqrt{SA^2 + AH^2} = \\sqrt{25 + 5.76} = \\sqrt{30.76} \\approx 5.55$."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông cân tại $B$ với $BA = BC = a$, $SA = a$. Khoảng cách từ $A$ đến mặt phẳng $(SBC)$ bằng",
                         "$\\frac{a\\sqrt{2}}{2}$", "$\\frac{a}{2}$", "$a$", "$a\\sqrt{2}$",
                         "A", "Kẻ $AH \\perp SB$. Do $BC \\perp (SAB)$ nên $AH \\perp (SBC)$. $\\triangle SAB$ vuông cân tại $A$ cạnh $a$ nên $AH = \\frac{a\\sqrt{2}}{2}$."),
                make_mcq(11, "VDC", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai đường thẳng chéo nhau $A'B$ và $B'C$ bằng",
                         "$\\frac{a\\sqrt{3}}{3}$", "$\\frac{a\\sqrt{2}}{2}$", "$\\frac{a}{2}$", "$a$",
                         "A", "Khoảng cách giữa hai đường chéo của hai mặt vuông góc kề nhau trong hình lập phương bằng $\\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$."),
                make_mcq(12, "VDC", "Một dây cáp điện cao thế giăng ngang qua sông ở độ cao $25\\text{ m}$ so với mặt nước phẳng. Khoảng cách ngắn nhất từ dây cáp này đến một cột cờ cao $10\\text{ m}$ dựng trên một chiếc thuyền buồm chạy ngay phía dưới dây cáp bằng",
                         "$15\\text{ m}$", "$25\\text{ m}$", "$35\\text{ m}$", "$10\\text{ m}$",
                         "A", "$d = 25 - 10 = 15\\text{ m}$.")
            ]
            tfs = [
                make_tf(1, "Khoảng cách từ điểm đến mặt phẳng. Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{3}$.", [
                            ("a", "Khoảng cách từ điểm $S$ đến mặt phẳng $(ABCD)$ bằng $a\\sqrt{3}$.", True, "Vì $SA \\perp (ABCD)$ nên $d(S, (ABCD)) = SA = a\\sqrt{3}$."),
                            ("b", "Khoảng cách từ điểm $D$ đến mặt phẳng $(SAB)$ bằng $a$.", True, "$DA \\perp AB$ và $DA \\perp SA \\Rightarrow DA \\perp (SAB)$, nên $d = DA = a$."),
                            ("c", "Khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$ bằng $\\frac{a\\sqrt{3}}{2}$.", True, "Trong tam giác vuông $SAB$: $\\frac{1}{h^2} = \\frac{1}{SA^2} + \\frac{1}{AB^2} = \\frac{1}{3a^2} + \\frac{1}{a^2} = \\frac{4}{3a^2} \\Rightarrow h = \\frac{a\\sqrt{3}}{2}$."),
                            ("d", "Khoảng cách từ điểm $C$ đến mặt phẳng $(SAB)$ bằng $2a$.", False, "Vì $CD \\parallel AB \\Rightarrow CD \\parallel (SAB)$, do đó $d(C, (SAB)) = d(D, (SAB)) = a \\ne 2a$.")
                        ]),
                make_tf(2, "Khoảng cách giữa hai đường thẳng chéo nhau. Cho hai đường thẳng chéo nhau $a$ và $b$ trong không gian.", [
                            ("a", "Đường thẳng $\\Delta$ cắt cả $a, b$ và cùng vuông góc với cả hai đường gọi là đoạn vuông góc chung.", True, "Định nghĩa đường/đoạn vuông góc chung."),
                            ("b", "Khoảng cách giữa hai đường thẳng chéo nhau bằng độ dài đoạn vuông góc chung của chúng.", True, "Định lý chuẩn SGK."),
                            ("c", "Khoảng cách giữa hai đường thẳng chéo nhau có thể bằng 0.", False, "Hai đường chéo nhau không cắt nhau nên khoảng cách luôn dương $> 0$."),
                            ("d", "Khoảng cách giữa $a$ và $b$ bằng khoảng cách giữa $a$ và mặt phẳng $(P)$ chứa $b$ và song song với $a$.", True, "Phương pháp tính khoảng cách quy về đường song song với mặt phẳng.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a = 5$. Khoảng cách từ điểm $A'$ đến mặt phẳng $(ABCD)$ bằng bao nhiêu?",
                        "5", "$d(A', (ABCD)) = A'A = 5$."),
                make_sa(2, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và $SA = 8$. Khoảng cách từ $S$ đến mặt phẳng $(ABC)$ bằng bao nhiêu?",
                        "8", "Bằng độ dài $SA = 8$."),
                make_sa(3, "VD", "Cho hình chóp $S.ABCD$ có đáy hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 8$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
                        "4.8", "Trong $\\triangle SAB$: $AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{8 \\cdot 6}{10} = 4.8$."),
                make_sa(4, "VD", "Cho hình chóp $S.ABCD$ có đáy hình chữ nhật $AB = 3, AD = 4$, $SA \\perp (ABCD)$ và $SA = 12$. Tính khoảng cách từ điểm $A$ đến đường thẳng $SC$.",
                        "4.62", "$AC = 5$. $SC = 13$. $AK = \\frac{SA \\cdot AC}{SC} = \\frac{12 \\cdot 5}{13} = \\frac{60}{13} \\approx 4.62$."),
                make_sa(5, "VDC", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh bằng $6$. Tính khoảng cách giữa hai đường thẳng chéo nhau $BD$ và $A'C'$ (làm tròn số nguyên).",
                        "6", "Hai đường thẳng nằm trên hai đáy song song, khoảng cách bằng chiều cao cạnh bên $= 6$."),
                make_sa(6, "VDC", "Một flycam đang bay ở toạ độ cao $60\\text{ m}$ theo phương thẳng đứng ngay trên nóc toà nhà cao $20\\text{ m}$. Khoảng cách từ flycam đến nóc toà nhà bằng bao nhiêu mét?",
                        "40", "$60 - 20 = 40\\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Nêu định nghĩa khoảng cách từ điểm đến mặt phẳng",
                           "Nêu định nghĩa khoảng cách từ một điểm đến một mặt phẳng. Cho hình hộp chữ nhật $ABCD.A'B'C'D'$, hãy xác định khoảng cách từ điểm $B'$ đến mặt phẳng $(ABCD)$.",
                           "Định nghĩa: Khoảng cách từ điểm $M$ đến mặt phẳng $(P)$ là độ dài đoạn thẳng $MH$, với $H$ là hình chiếu vuông góc của điểm $M$ trên mặt phẳng $(P)$. Trong hình hộp chữ nhật $ABCD.A'B'C'D'$, vì $B'B \\perp (ABCD)$ nên hình chiếu của $B'$ trên $(ABCD)$ chính là điểm $B$. Do đó khoảng cách từ $B'$ đến $(ABCD)$ bằng độ dài đoạn thẳng $B'B$."),
                make_essay(2, "TH", 0.5, "Tính khoảng cách từ chân đường cao đến mặt bên",
                           "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ với $AB = 3, BC = 4$. Cạnh bên $SA \\perp (ABC)$ và $SA = 4$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$.",
                           "Ta có $BC \\perp AB$ (do đáy vuông tại $B$) và $BC \\perp SA$ (do $SA \\perp (ABC)$). Suy ra $BC \\perp (SAB)$. Kẻ $AH \\perp SB$ tại $H$. Khi đó $AH \\subset (SAB) \\Rightarrow AH \\perp BC$. Vì $AH \\perp SB$ và $AH \\perp BC$ nên $AH \\perp (SBC)$. Do đó khoảng cách từ $A$ đến $(SBC)$ chính là độ dài đoạn $AH$. Xét tam giác $SAB$ vuông tại $A$ có $SA = 4, AB = 3$: $\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AB^2} = \\frac{1}{16} + \\frac{1}{9} = \\frac{25}{144} \\Rightarrow AH = \\frac{12}{5} = 2.4$."),
                make_essay(3, "VD", 0.5, "Tính khoảng cách từ điểm bất kì đến mặt bên bằng phương pháp dời điểm",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Gọi $M$ là trung điểm cạnh $AB$. Tính khoảng cách từ điểm $M$ đến mặt phẳng $(SCD)$.",
                           "Ta có $AB \\parallel CD$ mà $CD \\subset (SCD)$ nên $AB \\parallel (SCD)$. Do $M \\in AB$ nên khoảng cách từ $M$ đến $(SCD)$ bằng khoảng cách từ điểm $A$ đến $(SCD)$: $d(M, (SCD)) = d(A, (SCD))$. Trong mặt phẳng $(SAD)$, kẻ $AK \\perp SD$ tại $K$. Ta có $CD \\perp AD$ và $CD \\perp SA \\Rightarrow CD \\perp (SAD) \\Rightarrow CD \\perp AK$. Suy ra $AK \\perp (SCD)$, do đó $d(A, (SCD)) = AK$. Tam giác $SAD$ vuông tại $A$: $\\frac{1}{AK^2} = \\frac{1}{SA^2} + \\frac{1}{AD^2} = \\frac{1}{2a^2} + \\frac{1}{a^2} = \\frac{3}{2a^2} \\Rightarrow AK = \\frac{a\\sqrt{6}}{3}$. Vậy $d(M, (SCD)) = \\frac{a\\sqrt{6}}{3}$."),
                make_essay(4, "VDC", 0.5, "Khoảng cách an toàn đường dây điện",
                           "Một đường dây dẫn điện trung thế $d_1$ căng ngang song song với mặt đất ở độ cao $12\\text{ m}$. Một nhánh cây lớn $d_2$ của cây cổ thụ mọc chìa ra phía dưới đường dây, nằm ngang ở độ cao $9.5\\text{ m}$. Giả sử hình chiếu vuông góc của hai đoạn này trên mặt đất cắt nhau. a) Xác định khoảng cách nhỏ nhất giữa đường dây điện và nhánh cây. b) Quy chuẩn an toàn điện lực yêu cầu khoảng cách phóng điện an toàn tối thiểu giữa cành cây và dây điện trần trung thế là $2\\text{ m}$. Nhánh cây này có vi phạm khoảng cách an toàn không?",
                           "a) Do đường dây điện $d_1$ ở độ cao $12\\text{ m}$ và nhánh cây $d_2$ ở độ cao $9.5\\text{ m}$ đều song song với mặt đất nên chúng nằm trên hai mặt phẳng song song nằm ngang lần lượt có cao độ $12\\text{ m}$ và $9.5\\text{ m}$. Vì hình chiếu của chúng cắt nhau nên vị trí gần nhau nhất xảy ra tại điểm giao của hình chiếu. Đoạn vuông góc chung nối hai đường này thẳng đứng có độ dài bằng khoảng cách giữa hai mặt phẳng song song: $d = 12 - 9.5 = 2.5\\text{ m}$. b) Khoảng cách thực tế là $2.5\\text{ m} > 2.0\\text{ m}$. Do đó khoảng cách này vẫn đảm bảo an toàn phóng điện theo quy chuẩn hiện tại.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho mặt phẳng $(P)$ và điểm $A$ thuộc $(P)$. Khoảng cách từ $A$ đến $(P)$ bằng",
                         "0", "1", "Vô cùng", "Không xác định",
                         "A", "Nếu điểm nằm trên mặt phẳng thì khoảng cách từ điểm đó đến mặt phẳng bằng 0."),
                make_mcq(2, "NB", "Cho $a \\parallel (P)$. Khoảng cách giữa $a$ và $(P)$ là khoảng cách từ",
                         "Một điểm bất kì trên $a$ đến $(P)$",
                         "Mọi điểm trên $(P)$ đến $a$",
                         "Gốc toạ độ đến $a$",
                         "Điểm chính giữa của $a$",
                         "A", "Khoảng cách giữa đường thẳng song song với mặt phẳng là khoảng cách từ một điểm tuỳ ý trên đường thẳng đến mặt phẳng."),
                make_mcq(3, "NB", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách từ điểm $A$ đến đường thẳng $BC$ bằng",
                         "$a$", "$a\\sqrt{2}$", "$\\frac{a}{2}$", "$a\\sqrt{3}$",
                         "A", "Vì $AB \\perp BC$ nên hình chiếu của $A$ lên $BC$ là $B$, khoảng cách bằng $AB = a$."),
                make_mcq(4, "NB", "Cho hình chóp $S.ABCD$ có $SA \\perp (ABCD)$. Khoảng cách từ $A$ đến mặt phẳng $(SBC)$ là đoạn vuông góc kẻ từ $A$ đến",
                         "$SB$", "$SC$", "$BC$", "Điểm $B$",
                         "A", "Kẻ $AH \\perp SB$. Vì $BC \\perp (SAB) \\Rightarrow BC \\perp AH \\Rightarrow AH \\perp (SBC)$."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$. Khoảng cách giữa hai đường thẳng $SA$ và $CD$ bằng",
                         "$a$", "$a\\sqrt{2}$", "$\\frac{a}{2}$", "$a\\sqrt{3}$",
                         "A", "Đoạn vuông góc chung của $SA$ và $CD$ chính là đoạn $AD = a$."),
                make_mcq(6, "TH", "Cho hình lăng trụ đứng $ABC.A'B'C'$ có cạnh bên bằng $h$. Khoảng cách giữa hai mặt phẳng $(ABC)$ và $(A'B'C')$ bằng",
                         "$h$", "$2h$", "$\\frac{h}{2}$", "$h\\sqrt{3}$",
                         "A", "Khoảng cách giữa hai mặt đáy của lăng trụ đứng bằng độ dài cạnh bên $h$."),
                make_mcq(7, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách từ $A$ đến mặt phẳng $(BDD'B')$ bằng",
                         "$\\frac{a\\sqrt{2}}{2}$", "$a$", "$a\\sqrt{2}$", "$\\frac{a}{2}$",
                         "A", "Gọi $O = AC \\cap BD$. Ta có $AO \\perp BD$ và $AO \\perp BB' \\Rightarrow AO \\perp (BDD'B')$. Khoảng cách bằng $AO = \\frac{a\\sqrt{2}}{2}$."),
                make_mcq(8, "TH", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ đều cạnh $a$. Khoảng cách từ $A$ đến đường thẳng $BC$ bằng",
                         "$\\frac{a\\sqrt{3}}{2}$", "$\\frac{a}{2}$", "$a$", "$a\\sqrt{3}$",
                         "A", "Khoảng cách từ $A$ đến $BC$ là đường cao tam giác đều: $h = \\frac{a\\sqrt{3}}{2}$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABCD$ có đáy hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Khoảng cách từ $A$ đến mặt phẳng $(SBD)$ bằng",
                         "$\\frac{a\\sqrt{3}}{3}$", "$\\frac{a\\sqrt{2}}{2}$", "$\\frac{a}{2}$", "$\\frac{a\\sqrt{6}}{3}$",
                         "A", "Gọi $O = AC \\cap BD, AO = \\frac{a\\sqrt{2}}{2}$. Trong $\\triangle SAO$ vuông tại $A$: $\\frac{1}{h^2} = \\frac{1}{SA^2} + \\frac{1}{AO^2} = \\frac{1}{a^2} + \\frac{2}{a^2} = \\frac{3}{a^2} \\Rightarrow h = \\frac{a\\sqrt{3}}{3}$."),
                make_mcq(10, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Khoảng cách giữa hai đường thẳng chéo nhau $AA'$ và $BD$ bằng",
                         "$\\frac{a\\sqrt{2}}{2}$", "$a$", "$a\\sqrt{2}$", "$\\frac{a}{2}$",
                         "A", "Đoạn vuông góc chung nối $AA'$ và $BD$ là $AO$ với $O$ là tâm đáy dưới, $AO = \\frac{a\\sqrt{2}}{2}$."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$. $SA \\perp (ABC)$ và $SA = \\frac{a\\sqrt{3}}{2}$. Khoảng cách giữa hai đường thẳng $SA$ và $BC$ bằng",
                         "$\\frac{a\\sqrt{3}}{2}$", "$\\frac{a}{2}$", "$a$", "$\\frac{a\\sqrt{2}}{2}$",
                         "A", "Kẻ $AH \\perp BC$ tại $H$. Vì $SA \\perp (ABC) \\Rightarrow SA \\perp AH$. Vậy $AH$ là đoạn vuông góc chung, $AH = \\frac{a\\sqrt{3}}{2}$."),
                make_mcq(12, "VDC", "Một giàn giáo hình hộp chữ nhật có khoảng cách giữa hai sàn làm việc song song là $2\\text{ m}$. Một người thợ đứng trên sàn dưới cần với tay lên chạm vào sàn trên. Khoảng cách ngắn nhất người thợ phải với tay là",
                         "$2\\text{ m}$", "$2.5\\text{ m}$", "$1.5\\text{ m}$", "$3\\text{ m}$",
                         "A", "Khoảng cách ngắn nhất chính là khoảng cách giữa hai mặt phẳng song song $= 2\\text{ m}$.")
            ]
            tfs = [
                make_tf(1, "Khoảng cách trong hình lập phương. Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$.", [
                            ("a", "Khoảng cách giữa hai đường thẳng $AB$ và $C'D'$ bằng $a\\sqrt{2}$.", True, "Đoạn vuông góc chung là $BC'$ có độ dài $a\\sqrt{2}$."),
                            ("b", "Khoảng cách từ điểm $C$ đến mặt phẳng $(ABB'A')$ bằng $a$.", True, "Vì $CB \\perp (ABB'A')$ nên khoảng cách bằng $CB = a$."),
                            ("c", "Khoảng cách giữa hai mặt phẳng $(A'BD)$ và $(CB'D')$ bằng $\\frac{a\\sqrt{3}}{3}$.", True, "Đường chéo $AC' = a\\sqrt{3}$ bị chia thành 3 phần bằng nhau bởi 2 mặt phẳng này."),
                            ("d", "Khoảng cách từ điểm $A$ đến đường thẳng $CC'$ bằng $a$.", False, "$AC \\perp CC'$ nên khoảng cách là $AC = a\\sqrt{2} \\ne a$.")
                        ]),
                make_tf(2, "Tính chất khoảng cách giữa hai đường thẳng chéo nhau. Cho hai đường thẳng chéo nhau $a$ và $b$.", [
                            ("a", "Luôn tồn tại duy nhất một mặt phẳng chứa $b$ và song song với $a$.", True, "Tính chất cơ bản hình học không gian."),
                            ("b", "Đoạn vuông góc chung của $a$ và $b$ có hai đầu mút lần lượt thuộc $a$ và $b$.", True, "Theo định nghĩa đoạn vuông góc chung."),
                            ("c", "Độ dài đoạn vuông góc chung là khoảng cách ngắn nhất giữa hai điểm bất kì trên hai đường thẳng đó.", True, "Tính chất cực trị khoảng cách."),
                            ("d", "Nếu hai đường thẳng vuông góc với nhau thì chúng không thể chéo nhau.", False, "Hai đường chéo nhau hoàn toàn có thể vuông góc.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a = 7$, $SA \\perp (ABCD)$. Khoảng cách từ $D$ đến mặt phẳng $(SAB)$ bằng bao nhiêu?",
                        "7", "$DA \\perp (SAB) \\Rightarrow d = 7$."),
                make_sa(2, "TH", "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $9$. Khoảng cách giữa hai mặt đáy $(ABCD)$ và $(A'B'C'D')$ bằng bao nhiêu?",
                        "9", "Bằng cạnh bên $= 9$."),
                make_sa(3, "VD", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông tại $B$ với $AB = 6, BC = 8, SA = 6$. Tính khoảng cách từ $A$ đến mặt phẳng $(SBC)$.",
                        "4.24", "$\\triangle SAB$ vuông cân tại $A$ với $SA = AB = 6$. $AH = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2} \\approx 4.24$."),
                make_sa(4, "VD", "Cho hình chóp $S.ABCD$ có đáy hình chữ nhật $AB = 4, AD = 3$, $SA \\perp (ABCD)$ và $SA = 4$. Tính khoảng cách từ $A$ đến đường thẳng $BD$.",
                        "2.4", "$h = \\frac{AB \\cdot AD}{\\sqrt{AB^2 + AD^2}} = \\frac{12}{5} = 2.4$."),
                make_sa(5, "VDC", "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $4$, chiều cao $SO = 4$. Tính khoảng cách từ tâm $O$ đến mặt phẳng bên $(SCD)$.",
                        "1.79", "$d = OM = 2$. Trong tam giác vuông $SOM$: $\\frac{1}{h^2} = \\frac{1}{16} + \\frac{1}{4} = \\frac{5}{16} \\Rightarrow h = \\frac{4}{\\sqrt{5}} = \\frac{4\\sqrt{5}}{5} \\approx 1.79$."),
                make_sa(6, "VDC", "Một đường hầm ngầm $d_1$ nằm ngang dưới lòng đất sâu $30\\text{ m}$. Một đường ray xe lửa trên mặt đất $d_2$ chạy cắt chéo qua trục đường hầm. Khoảng cách gần nhất giữa ray xe lửa và đường hầm ngầm bằng bao nhiêu mét?",
                        "30", "Khoảng cách giữa hai mặt phẳng song song $= 30\\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Xác định đoạn vuông góc chung",
                           "Cho hình lập phương $ABCD.A'B'C'D'$. Hãy chỉ ra đoạn vuông góc chung của hai đường thẳng chéo nhau $AA'$ và $CD$.",
                           "Ta có: $AD \\perp AA'$ (do các mặt bên là hình vuông) và $AD \\perp CD$ (do đáy là hình vuông). Điểm $A$ thuộc đường thẳng $AA'$, điểm $D$ thuộc đường thẳng $CD$. Do đó đoạn thẳng $AD$ vừa cắt cả hai đường thẳng $AA'$ và $CD$, vừa vuông góc với cả hai đường thẳng đó. Vậy đoạn vuông góc chung của $AA'$ và $CD$ là đoạn thẳng $AD$."),
                make_essay(2, "TH", 0.5, "Tính khoảng cách từ điểm đến đường thẳng",
                           "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ đều cạnh $a$. Biết $SA = a$. Tính khoảng cách từ điểm $S$ đến đường thẳng $BC$.",
                           "Gọi $M$ là trung điểm của cạnh $BC$. Vì tam giác $ABC$ đều nên $AM \\perp BC$ và $AM = \\frac{a\\sqrt{3}}{2}$. Lại có $SA \\perp (ABC) \\Rightarrow SA \\perp BC$. Từ đó suy ra $BC \\perp (SAM) \\Rightarrow BC \\perp SM$. Do đó đoạn thẳng $SM$ vuông góc với đường thẳng $BC$, suy ra khoảng cách từ $S$ đến đường thẳng $BC$ chính là độ dài đoạn thẳng $SM$. Tam giác $SAM$ vuông tại $A$: $SM = \\sqrt{SA^2 + AM^2} = \\sqrt{a^2 + \\left(\\frac{a\\sqrt{3}}{2}\\right)^2} = \\sqrt{a^2 + \\frac{3a^2}{4}} = \\frac{a\\sqrt{7}}{2}$."),
                make_essay(3, "VD", 0.5, "Tính khoảng cách giữa hai đường thẳng chéo nhau",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Tính khoảng cách giữa hai đường thẳng chéo nhau $SA$ và $BD$.",
                           "Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Trong hình vuông $ABCD$, ta có $AO \\perp BD$. Mặt khác, vì $SA \\perp (ABCD)$ và $AO \\subset (ABCD)$ nên $SA \\perp AO$. Như vậy đoạn thẳng $AO$ có đầu mút $A \\in SA$, $O \\in BD$, đồng thời $AO \\perp SA$ và $AO \\perp BD$. Do đó $AO$ là đoạn vuông góc chung của hai đường thẳng chéo nhau $SA$ và $BD$. Khoảng cách giữa hai đường thẳng $SA$ và $BD$ là $d(SA, BD) = AO = \\frac{AC}{2} = \\frac{a\\sqrt{2}}{2}$."),
                make_essay(4, "VDC", 0.5, "Khoảng cách cách ly an toàn trạm biến áp",
                           "Một hàng rào bảo vệ thẳng đứng $(P)$ được dựng để ngăn cách trạm biến áp cao thế với đường đi dân sinh. Điểm cấp nguồn cao thế $S$ đặt tại đỉnh cột cách chân rào $A$ trên mặt đất là $6\\text{ m}$, và cột $SA$ tạo góc vuông với mặt rào. Một biển cảnh báo $M$ nằm trên mặt phẳng hàng rào cách chân $A$ một đoạn $8\\text{ m}$. a) Tính khoảng cách trực tiếp từ điểm cấp nguồn $S$ đến biển cảnh báo $M$. b) Tính khoảng cách từ điểm $S$ đến mặt phẳng hàng rào $(P)$.",
                           "a) Vì $SA \\perp (P)$ nên $SA \\perp AM$. Tam giác $SAM$ vuông tại $A$. Áp dụng định lý Pythagore: $SM = \\sqrt{SA^2 + AM^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10\\text{ m}$. b) Vì $SA \\perp (P)$ tại $A$ nên hình chiếu vuông góc của $S$ trên mặt phẳng hàng rào $(P)$ chính là điểm $A$. Khoảng cách từ $S$ đến mặt phẳng hàng rào là $d(S, (P)) = SA = 6\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 27:
        # BÀI 27: THỂ TÍCH
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Thể tích $V$ của khối chóp có diện tích đáy $B$ và chiều cao $h$ được tính theo công thức nào?",
                         "$V = \\frac{1}{3}Bh$", "$V = Bh$", "$V = \\frac{1}{2}Bh$", "$V = 3Bh$",
                         "A", "Công thức SGK: Thể tích khối chóp $V = \\frac{1}{3}Bh$."),
                make_mcq(2, "NB", "Thể tích của khối lăng trụ có diện tích đáy $B$ và chiều cao $h$ bằng",
                         "$V = Bh$", "$V = \\frac{1}{3}Bh$", "$V = \\frac{1}{2}Bh$", "$V = \\frac{4}{3}Bh$",
                         "A", "Công thức SGK: Thể tích khối lăng trụ $V = Bh$."),
                make_mcq(3, "NB", "Thể tích của khối lập phương cạnh $a$ bằng",
                         "$a^3$", "$3a^2$", "$6a^2$", "$a^2$",
                         "A", "Thể tích khối lập phương cạnh $a$ là $V = a^3$."),
                make_mcq(4, "NB", "Thể tích của khối hộp chữ nhật có ba kích thước $a, b, c$ bằng",
                         "$abc$", "$a+b+c$", "$\\frac{1}{3}abc$", "$2(ab+bc+ca)$",
                         "A", "Thể tích khối hộp chữ nhật $V = abc$."),
                make_mcq(5, "TH", "Cho khối chóp có đáy là hình vuông cạnh 3 và chiều cao bằng 4. Thể tích khối chóp bằng",
                         "12", "36", "16", "48",
                         "A", "$B = 3^2 = 9$. $V = \\frac{1}{3} \\cdot 9 \\cdot 4 = 12$."),
                make_mcq(6, "TH", "Cho khối lăng trụ có diện tích đáy $B = 10$ và chiều cao $h = 6$. Thể tích khối lăng trụ bằng",
                         "60", "20", "30", "120",
                         "A", "$V = Bh = 10 \\cdot 6 = 60$."),
                make_mcq(7, "TH", "Cho hình chóp tam giác $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B, AB = 3, BC = 4$, $SA \\perp (ABC)$ và $SA = 6$. Thể tích khối chóp $S.ABC$ bằng",
                         "12", "24", "36", "72",
                         "A", "$S_{ABC} = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6$. $V = \\frac{1}{3} \\cdot 6 \\cdot 6 = 12$."),
                make_mcq(8, "TH", "Khối lăng trụ tam giác đều có tất cả các cạnh bằng $a$. Thể tích của khối lăng trụ bằng",
                         "$\\frac{a^3\\sqrt{3}}{4}$", "$\\frac{a^3\\sqrt{3}}{12}$", "$\\frac{a^3}{4}$", "$\\frac{a^3\\sqrt{3}}{3}$",
                         "A", "$B = \\frac{a^2\\sqrt{3}}{4}, h = a \\Rightarrow V = \\frac{a^3\\sqrt{3}}{4}$."),
                make_mcq(9, "VD", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và góc giữa $SC$ với mặt phẳng đáy bằng $45^\\circ$. Thể tích khối chóp $S.ABCD$ bằng",
                         "$\\frac{a^3\\sqrt{2}}{3}$", "$\\frac{a^3}{3}$", "$a^3\\sqrt{2}$", "$\\frac{a^3\\sqrt{3}}{3}$",
                         "A", "$AC = a\\sqrt{2}, SA = AC \\cdot \\tan 45^\\circ = a\\sqrt{2}$. $V = \\frac{1}{3} a^2 \\cdot a\\sqrt{2} = \\frac{a^3\\sqrt{2}}{3}$."),
                make_mcq(10, "VD", "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, cạnh bên bằng $a\\sqrt{2}$. Thể tích của khối chóp bằng",
                         "$\\frac{a^3\\sqrt{6}}{6}$", "$\\frac{a^3\\sqrt{6}}{2}$", "$\\frac{a^3\\sqrt{2}}{6}$", "$\\frac{a^3}{3}$",
                         "A", "$OA = \\frac{a\\sqrt{2}}{2}, SO = \\sqrt{2a^2 - a^2/2} = \\frac{a\\sqrt{6}}{2}$. $V = \\frac{1}{3} a^2 \\frac{a\\sqrt{6}}{2} = \\frac{a^3\\sqrt{6}}{6}$."),
                make_mcq(11, "VDC", "Cho khối chóp $S.ABC$. Lấy điểm $A'$ trên $SA$ sao cho $SA' = \\frac{1}{2}SA$. Mặt phẳng đi qua $A'$ và song song với đáy $(ABC)$ chia khối chóp thành hai phần có tỉ số thể tích (phần trên / phần dưới) là",
                         "$\\frac{1}{7}$", "$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{3}$",
                         "A", "Tỉ số đồng dạng $k = 1/2 \\Rightarrow \\frac{V_{tren}}{V_{toan}} = (1/2)^3 = 1/8$. Phần dưới chiếm $7/8$. Tỉ số giữa hai phần là $1/7$."),
                make_mcq(12, "VDC", "Một bồn chứa nước sinh hoạt bằng inox hình hộp chữ nhật có kích thước các cạnh là $1.2\\text{ m} \\times 1.5\\text{ m} \\times 2.0\\text{ m}$. Thể tích tối đa nước mà bồn có thể chứa được bằng bao nhiêu mét khối?",
                         "$3.6\\text{ m}^3$", "$3.0\\text{ m}^3$", "$4.2\\text{ m}^3$", "$2.4\\text{ m}^3$",
                         "A", "$V = 1.2 \\times 1.5 \\times 2.0 = 3.6\\text{ m}^3$.")
            ]
            tfs = [
                make_tf(1, "Công thức và tính chất thể tích khối đa diện. Cho khối chóp $S.ABCD$ có đáy là hình bình hành thể tích $V$.", [
                            ("a", "Mặt phẳng $(SAC)$ chia khối chóp $S.ABCD$ thành hai khối chóp tam giác có thể tích bằng nhau.", True, "Hai tam giác đáy $ABC$ và $ADC$ có diện tích bằng nhau và chung chiều cao hạ từ $S$."),
                            ("b", "Nếu tăng chiều cao của khối chóp lên 2 lần và giữ nguyên đáy thì thể tích tăng 2 lần.", True, "$V = \\frac{1}{3}Bh$, tỉ lệ thuận bậc nhất với $h$."),
                            ("c", "Nếu tăng tất cả các cạnh đáy lên 2 lần và giữ nguyên chiều cao thì thể tích tăng 4 lần.", True, "Diện tích đáy tăng $2^2 = 4$ lần."),
                            ("d", "Nếu tăng cả chiều cao và các cạnh đáy lên 2 lần thì thể tích tăng 6 lần.", False, "Thể tích tăng $2 \\times 4 = 8$ lần, không phải 6 lần.")
                        ]),
                make_tf(2, "Thể tích khối lăng trụ. Cho khối lăng trụ $ABC.A'B'C'$ có thể tích bằng $30\\text{ cm}^3$.", [
                            ("a", "Thể tích khối chóp $A'.ABC$ bằng $10\\text{ cm}^3$.", True, "Thể tích khối chóp có cùng đáy và chiều cao với lăng trụ bằng $\\frac{1}{3}V_{lt} = 10$."),
                            ("b", "Thể tích khối đa diện $A'B'C'BC$ bằng $20\\text{ cm}^3$.", True, "Bằng $V_{lt} - V_{A'.ABC} = 30 - 10 = 20$."),
                            ("c", "Nếu cắt lăng trụ bởi mặt phẳng đi qua trung điểm ba cạnh bên thì được hai khối lăng trụ có thể tích bằng $15\\text{ cm}^3$.", True, "Chiều cao mỗi nửa bằng $h/2$ nên thể tích bằng $V/2 = 15$."),
                            ("d", "Thể tích khối tứ diện $A'ABC$ bằng $15\\text{ cm}^3$.", False, "Bằng $10\\text{ cm}^3$.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho khối lập phương có cạnh bằng $4$. Tính thể tích khối lập phương đó.",
                        "64", "$V = 4^3 = 64$."),
                make_sa(2, "TH", "Cho khối chóp có diện tích đáy $B = 15$ và chiều cao $h = 8$. Tính thể tích khối chóp.",
                        "40", "$V = \\frac{1}{3} \\cdot 15 \\cdot 8 = 40$."),
                make_sa(3, "VD", "Cho hình chóp $S.ABCD$ có đáy hình vuông cạnh $a = 6$, $SA \\perp (ABCD)$ và $SA = 9$. Tính thể tích khối chóp $S.ABCD$.",
                        "108", "$B = 36$. $V = \\frac{1}{3} \\cdot 36 \\cdot 9 = 108$."),
                make_sa(4, "VD", "Cho lăng trụ đứng $ABC.A'B'C'$ có đáy là tam giác vuông tại $A$ với $AB = 3, AC = 4$, cạnh bên $AA' = 5$. Tính thể tích khối lăng trụ.",
                        "30", "$S_{ABC} = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6$. $V = 6 \\cdot 5 = 30$."),
                make_sa(5, "VDC", "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $6$, cạnh bên tạo với đáy một góc $60^\\circ$. Tính thể tích của khối chóp $S.ABC$ (làm tròn số nguyên).",
                        "31", "Bán kính đáy $R = 2\\sqrt{3}$. Chiều cao $h = R \\tan 60^\\circ = 2\\sqrt{3} \\cdot \\sqrt{3} = 6$. $S_{day} = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$. $V = \\frac{1}{3} \\cdot 9\\sqrt{3} \\cdot 6 = 18\\sqrt{3} \\approx 31.18$."),
                make_sa(6, "VDC", "Một xe tải chở cát có thùng xe dạng hình hộp chữ nhật kích thước dài $4\\text{ m}$, rộng $2\\text{ m}$, cao $1.5\\text{ m}$. Nếu cát được đổ đầy ngang miệng thùng xe thì thể tích cát chở được bằng bao nhiêu mét khối?",
                        "12", "$V = 4 \\times 2 \\times 1.5 = 12\\text{ m}^3$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu công thức tính thể tích khối chóp và khối lăng trụ",
                           "Viết công thức tính thể tích của khối chóp và khối lăng trụ. Nêu rõ ý nghĩa các đại lượng trong công thức.",
                           "1. Thể tích khối chóp: $V = \\frac{1}{3}Bh$, trong đó $B$ là diện tích mặt đáy của khối chóp, $h$ là chiều cao (khoảng cách từ đỉnh đến mặt phẳng đáy). 2. Thể tích khối lăng trụ: $V = Bh$, trong đó $B$ là diện tích mặt đáy, $h$ là chiều cao (khoảng cách giữa hai mặt phẳng đáy)."),
                make_essay(2, "TH", 0.5, "Tính thể tích khối chóp có cạnh bên vuông góc với đáy",
                           "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$ với $AB = a, BC = a\\sqrt{3}$. Cạnh bên $SA \\perp (ABC)$ và $SA = 2a$. Tính thể tích của khối chóp $S.ABC$ theo $a$.",
                           "Diện tích tam giác đáy $ABC$: $S_{\\triangle ABC} = \\frac{1}{2} AB \\cdot BC = \\frac{1}{2} \\cdot a \\cdot a\\sqrt{3} = \\frac{a^2\\sqrt{3}}{2}$. Chiều cao của khối chóp là $h = SA = 2a$ (do $SA \\perp (ABC)$). Thể tích của khối chóp $S.ABC$ là: $V = \\frac{1}{3} S_{\\triangle ABC} \\cdot SA = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{2} \\cdot 2a = \\frac{a^3\\sqrt{3}}{3}$."),
                make_essay(3, "VD", 0.5, "Tính thể tích khối chóp đều",
                           "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$, góc giữa mặt bên và mặt phẳng đáy bằng $60^\\circ$. Tính thể tích của khối chóp $S.ABCD$ theo $a$.",
                           "Gọi $O$ là tâm của hình vuông đáy $ABCD$, suy ra $SO \\perp (ABCD)$ là chiều cao của hình chóp. Gọi $M$ là trung điểm của cạnh $CD$, ta có $OM \\perp CD$ và $OM = \\frac{a}{2}$. Do $SO \\perp (ABCD)$ nên $CD \\perp SM$. Góc giữa mặt bên $(SCD)$ và đáy $(ABCD)$ là góc $\\widehat{SMO} = 60^\\circ$. Xét tam giác vuông $SOM$: $SO = OM \\cdot \\tan 60^\\circ = \\frac{a}{2} \\cdot \\sqrt{3} = \\frac{a\\sqrt{3}}{2}$. Diện tích đáy hình vuông $ABCD$: $B = a^2$. Thể tích của khối chóp: $V = \\frac{1}{3} B \\cdot SO = \\frac{1}{3} \\cdot a^2 \\cdot \\frac{a\\sqrt{3}}{2} = \\frac{a^3\\sqrt{3}}{6}$."),
                make_essay(4, "VDC", 0.5, "Bài toán đào hào thoát nước thực tế",
                           "Một đoạn hào thoát nước công cộng dài $50\\text{ m}$ có mặt cắt ngang là một hình thang cân với đáy lớn trên mặt đất rộng $2.0\\text{ m}$, đáy nhỏ dưới đáy hào rộng $1.2\\text{ m}$, và độ sâu của hào là $1.5\\text{ m}$. a) Tính diện tích mặt cắt ngang của con hào. b) Tính tổng thể tích đất cần phải đào để hoàn thành đoạn hào dài $50\\text{ m}$ này.",
                           "a) Mặt cắt ngang là hình thang cân với đáy lớn $a = 2.0\\text{ m}$, đáy nhỏ $b = 1.2\\text{ m}$, chiều cao $h = 1.5\\text{ m}$. Diện tích mặt cắt ngang là: $S = \\frac{(a + b) \\cdot h}{2} = \\frac{(2.0 + 1.2) \\cdot 1.5}{2} = \\frac{3.2 \\cdot 1.5}{2} = 2.4\\text{ m}^2$. b) Con hào có dạng một hình lăng trụ với đáy là mặt cắt ngang và chiều cao bằng chiều dài đoạn hào $L = 50\\text{ m}$. Tổng thể tích đất cần đào là: $V = S \\cdot L = 2.4 \\times 50 = 120\\text{ m}^3$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Khối lăng trụ có diện tích đáy bằng $S$ và chiều cao $h$ thì thể tích là",
                         "$V = Sh$", "$V = \\frac{1}{3}Sh$", "$V = \\frac{1}{2}Sh$", "$V = 3Sh$",
                         "A", "$V = Sh$."),
                make_mcq(2, "NB", "Khối chóp có diện tích đáy bằng $S$ và chiều cao $h$ thì thể tích là",
                         "$V = \\frac{1}{3}Sh$", "$V = Sh$", "$V = \\frac{1}{2}Sh$", "$V = \\frac{2}{3}Sh$",
                         "A", "$V = \\frac{1}{3}Sh$."),
                make_mcq(3, "NB", "Thể tích của khối chóp cụt đều có hai đáy $B_1, B_2$ và chiều cao $h$ được tính theo công thức nào?",
                         "$V = \\frac{1}{3}h(B_1 + \\sqrt{B_1 B_2} + B_2)$",
                         "$V = \\frac{1}{2}h(B_1 + B_2)$",
                         "$V = h(B_1 + B_2)$",
                         "$V = \\frac{1}{3}h(B_1 + B_2)$",
                         "A", "Công thức SGK chuẩn: $V = \\frac{1}{3}h(B_1 + \\sqrt{B_1 B_2} + B_2)$."),
                make_mcq(4, "NB", "Khối hộp chữ nhật có ba kích thước $2, 3, 4$ có thể tích bằng",
                         "24", "9", "12", "48",
                         "A", "$V = 2 \\times 3 \\times 4 = 24$."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$, chiều cao $SA = a\\sqrt{3}$. Thể tích khối chóp bằng",
                         "$\\frac{a^3}{4}$", "$\\frac{a^3\\sqrt{3}}{4}$", "$\\frac{a^3}{12}$", "$\\frac{a^3\\sqrt{3}}{12}$",
                         "A", "$B = \\frac{a^2\\sqrt{3}}{4}, h = a\\sqrt{3} \\Rightarrow V = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{4} \\cdot a\\sqrt{3} = \\frac{a^3}{4}$."),
                make_mcq(6, "TH", "Khối lập phương có diện tích toàn phần bằng $24\\text{ cm}^2$. Thể tích của khối lập phương đó bằng",
                         "$8\\text{ cm}^3$", "$64\\text{ cm}^3$", "$16\\text{ cm}^3$", "$27\\text{ cm}^3$",
                         "A", "$6a^2 = 24 \\Rightarrow a^2 = 4 \\Rightarrow a = 2\\text{ cm} \\Rightarrow V = 2^3 = 8\\text{ cm}^3$."),
                make_mcq(7, "TH", "Cho khối lăng trụ đứng có đáy là hình thoi có hai đường chéo bằng 6 và 8, chiều cao bằng 5. Thể tích khối lăng trụ bằng",
                         "120", "60", "40", "240",
                         "A", "$B = \\frac{1}{2} \\cdot 6 \\cdot 8 = 24$. $V = 24 \\cdot 5 = 120$."),
                make_mcq(8, "TH", "Khối chóp $S.ABCD$ có đáy hình chữ nhật $AB = 2a, AD = 3a$, chiều cao $h = 4a$. Thể tích khối chóp bằng",
                         "$8a^3$", "$24a^3$", "$12a^3$", "$6a^3$",
                         "A", "$B = 6a^2$. $V = \\frac{1}{3} \\cdot 6a^2 \\cdot 4a = 8a^3$."),
                make_mcq(9, "VD", "Cho lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ vuông cân tại $A, AB = a$. Góc giữa $A'B$ và mặt phẳng đáy bằng $60^\\circ$. Thể tích khối lăng trụ bằng",
                         "$\\frac{a^3\\sqrt{3}}{2}$", "$\\frac{a^3\\sqrt{3}}{6}$", "$a^3\\sqrt{3}$", "$\\frac{a^3}{2}$",
                         "A", "$S_{ABC} = \\frac{a^2}{2}$. Chiều cao $AA' = AB \\cdot \\tan 60^\\circ = a\\sqrt{3}$. $V = \\frac{a^2}{2} \\cdot a\\sqrt{3} = \\frac{a^3\\sqrt{3}}{2}$."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$. Biết khoảng cách từ $A$ đến $(SBC)$ bằng $\\frac{a\\sqrt{2}}{2}$. Thể tích khối chóp bằng",
                         "$\\frac{a^3}{3}$", "$a^3$", "$\\frac{a^3\\sqrt{2}}{3}$", "$\\frac{a^3\\sqrt{3}}{3}$",
                         "A", "$d(A, (SBC)) = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{a\\sqrt{2}}{2} \\Rightarrow SA = a$. $V = \\frac{1}{3} a^2 \\cdot a = \\frac{a^3}{3}$."),
                make_mcq(11, "VDC", "Một khối kim loại hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $6\\text{ cm}$, cạnh bên bằng $2\\sqrt{6}\\text{ cm}$ được nung chảy và đúc thành một khối lập phương. Cạnh của khối lập phương đó gần nhất với giá trị nào?",
                         "$2.6\\text{ cm}$", "$3.0\\text{ cm}$", "$2.0\\text{ cm}$", "$3.5\\text{ cm}$",
                         "A", "Bán kính đáy $R = 2\\sqrt{3}$, $h = \\sqrt{24 - 12} = 2\\sqrt{3}$. $B = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$. $V = \\frac{1}{3} \\cdot 9\\sqrt{3} \\cdot 2\\sqrt{3} = 18\\text{ cm}^3$. Cạnh lập phương $a = \\sqrt[3]{18} \\approx 2.62\\text{ cm}$."),
                make_mcq(12, "VDC", "Một kim tự tháp kính hình chóp tứ giác đều có cạnh đáy $30\\text{ m}$ và chiều cao $21\\text{ m}$. Thể tích không gian bên trong kim tự tháp bằng",
                         "$6300\\text{ m}^3$", "$18900\\text{ m}^3$", "$9450\\text{ m}^3$", "$3150\\text{ m}^3$",
                         "A", "$V = \\frac{1}{3} \\times 30^2 \\times 21 = \\frac{1}{3} \\times 900 \\times 21 = 6300\\text{ m}^3$.")
            ]
            tfs = [
                make_tf(1, "Tỉ số thể tích khối chóp tam giác. Cho hình chóp tam giác $S.ABC$. Lấy các điểm $A', B', C'$ lần lượt nằm trên các cạnh bên $SA, SB, SC$.", [
                            ("a", "Công thức tỉ số thể tích: $\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}$.", True, "Công thức tỉ số thể tích Simson chuẩn."),
                            ("b", "Nếu $A', B', C'$ lần lượt là trung điểm của $SA, SB, SC$ thì $\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{1}{8}$.", True, "$(1/2) \\times (1/2) \\times (1/2) = 1/8$."),
                            ("c", "Công thức tỉ số thể tích Simson áp dụng được cho cả hình chóp tứ giác bất kì.", False, "Chỉ áp dụng cho khối chóp tam giác."),
                            ("d", "Mặt phẳng $(A'B'C')$ chia khối chóp $S.ABC$ thành hai khối đa diện.", True, "Khối chóp nhỏ bên trên và khối chóp cụt/đa diện bên dưới.")
                        ]),
                make_tf(2, "Đặc điểm thể tích hình lập phương và hộp chữ nhật. Cho hình hộp chữ nhật có ba kích thước $a, b, c$.", [
                            ("a", "Thể tích của hình hộp chữ nhật bằng tích ba kích thước: $V = abc$.", True, "Công thức chuẩn."),
                            ("b", "Độ dài đường chéo của hình hộp chữ nhật bằng $\\sqrt{a^2 + b^2 + c^2}$.", True, "Định lý Pythagore không gian."),
                            ("c", "Nếu gấp đôi mỗi kích thước thì thể tích tăng gấp 6 lần.", False, "Thể tích tăng $2 \\times 2 \\times 2 = 8$ lần."),
                            ("d", "Hình lập phương là trường hợp đặc biệt của hình hộp chữ nhật khi $a = b = c$.", True, "Định nghĩa.")
                        ])
            ]
            sas = [
                make_sa(1, "TH", "Cho khối chóp có đáy là hình vuông cạnh $5$, chiều cao $h = 6$. Tính thể tích khối chóp.",
                        "50", "$V = \\frac{1}{3} \\cdot 25 \\cdot 6 = 50$."),
                make_sa(2, "TH", "Cho khối lăng trụ có diện tích đáy $B = 18$, chiều cao $h = 4$. Tính thể tích khối lăng trụ.",
                        "72", "$V = 18 \\cdot 4 = 72$."),
                make_sa(3, "VD", "Cho khối chóp $S.ABC$ có đáy $ABC$ vuông tại $A$ với $AB = 4, AC = 6$, $SA \\perp (ABC)$ và $SA = 5$. Tính thể tích khối chóp.",
                        "20", "$S_{ABC} = \\frac{1}{2} \\cdot 4 \\cdot 6 = 12$. $V = \\frac{1}{3} \\cdot 12 \\cdot 5 = 20$."),
                make_sa(4, "VD", "Một khối lập phương có thể tích bằng $125\\text{ cm}^3$. Tính độ dài cạnh của khối lập phương đó.",
                        "5", "$a = \\sqrt[3]{125} = 5$."),
                make_sa(5, "VDC", "Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $6$, chiều cao $SO = 4$. Tính thể tích khối chóp.",
                        "48", "$B = 36$. $V = \\frac{1}{3} \\cdot 36 \\cdot 4 = 48$."),
                make_sa(6, "VDC", "Một bể bơi mini hình hộp chữ nhật có chiều dài $5\\text{ m}$, rộng $3\\text{ m}$, sâu $1.2\\text{ m}$. Cần bơm bao nhiêu mét khối nước để đầy $80\\%$ thể tích bể bơi?",
                        "14.4", "$V = 5 \\times 3 \\times 1.2 = 18\\text{ m}^3$. $18 \\times 0.8 = 14.4\\text{ m}^3$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Nêu công thức thể tích khối hộp và lập phương",
                           "Viết công thức tính thể tích của khối hộp chữ nhật và khối lập phương. Cho biết đơn vị đo thể tích tiêu chuẩn.",
                           "Khối hộp chữ nhật có 3 kích thước $a, b, c$: $V = abc$. Khối lập phương cạnh $a$: $V = a^3$. Đơn vị đo thể tích tiêu chuẩn trong hệ đo lường SI là mét khối ($\\text{m}^3$), cùng các ước số như đêximét khối ($\\text{dm}^3$ hay lít), xentimét khối ($\\text{cm}^3$)."),
                make_essay(2, "TH", 0.5, "Tính thể tích lăng trụ tam giác đều",
                           "Cho lăng trụ tam giác đều $ABC.A'B'C'$ có cạnh đáy bằng $a$ và cạnh bên bằng $2a$. Tính thể tích của khối lăng trụ theo $a$.",
                           "Đáy $ABC$ là tam giác đều cạnh $a$ nên diện tích đáy là: $B = S_{\\triangle ABC} = \\frac{a^2\\sqrt{3}}{4}$. Vì lăng trụ đều là lăng trụ đứng nên chiều cao của lăng trụ bằng độ dài cạnh bên: $h = AA' = 2a$. Thể tích khối lăng trụ là: $V = B \\cdot h = \\frac{a^2\\sqrt{3}}{4} \\cdot 2a = \\frac{a^3\\sqrt{3}}{2}$."),
                make_essay(3, "VD", 0.5, "Tính thể tích khối chóp dựa vào góc giữa đường thẳng và mặt phẳng",
                           "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA$ vuông góc với đáy $(ABCD)$. Biết góc giữa đường thẳng $SC$ và mặt phẳng đáy bằng $60^\\circ$. Tính thể tích khối chóp $S.ABCD$ theo $a$.",
                           "Vì $SA \\perp (ABCD)$ nên hình chiếu vuông góc của $SC$ trên đáy là đoạn thẳng $AC$. Góc giữa $SC$ và đáy là góc $\\widehat{SCA} = 60^\\circ$. Trong hình vuông $ABCD$ cạnh $a$, đường chéo $AC = a\\sqrt{2}$. Xét tam giác $SAC$ vuông tại $A$: $SA = AC \\cdot \\tan 60^\\circ = a\\sqrt{2} \\cdot \\sqrt{3} = a\\sqrt{6}$. Diện tích đáy hình vuông: $B = a^2$. Thể tích khối chóp là: $V = \\frac{1}{3} B \\cdot SA = \\frac{1}{3} \\cdot a^2 \\cdot a\\sqrt{6} = \\frac{a^3\\sqrt{6}}{3}$."),
                make_essay(4, "VDC", 0.5, "Tính toán thể tích bể chứa nước bê tông",
                           "Một bể chứa nước ngầm bằng bê tông cốt thép hình hộp chữ nhật có kích thước bên ngoài là dài $4.4\\text{ m}$, rộng $3.4\\text{ m}$, cao $2.2\\text{ m}$. Độ dày của thành bể và đáy bể đều bằng $0.2\\text{ m}$. Bể không có nắp đậy bên trên. a) Tính thể tích phần ruột bên trong của bể (dung tích chứa nước tối đa). b) Giả sử hiện tại bể đang chứa $20\\text{ m}^3$ nước. Mực nước trong bể cách miệng thành trên bao nhiêu mét?",
                           "a) Kích thước bên trong (lọt lòng) của bể: - Chiều dài trong: $l = 4.4 - 2 \\times 0.2 = 4.0\\text{ m}$. - Chiều rộng trong: $w = 3.4 - 2 \\times 0.2 = 3.0\\text{ m}$. - Chiều cao trong (bể không có nắp nên chỉ trừ độ dày đáy): $h = 2.2 - 0.2 = 2.0\\text{ m}$. Thể tích ruột chứa nước tối đa của bể là: $V = l \\times w \\times h = 4.0 \\times 3.0 \\times 2.0 = 24.0\\text{ m}^3$. b) Diện tích đáy trong của bể là $S_{day} = 4.0 \\times 3.0 = 12\\text{ m}^2$. Khi bể chứa $20\\text{ m}^3$ nước, độ sâu mực nước là: $h_{nuoc} = \\frac{V_{nuoc}}{S_{day}} = \\frac{20}{12} = \\frac{5}{3} \\approx 1.67\\text{ m}$. Khoảng cách từ mặt nước đến miệng thành trên là: $\\Delta h = 2.0 - 1.67 = 0.33\\text{ m}$ (hoặc $\\frac{1}{3}\\text{ m}$).")
            ]
            return mcqs, tfs, sas, essays

    return None
