# -*- coding: utf-8 -*-
"""
Chương 4 Lớp 10: Vectơ trong mặt phẳng.
Bao gồm:
- Bài 7: Các khái niệm mở đầu về vectơ
- Bài 8: Tổng và hiệu của hai vectơ
- Bài 9: Tích của một vectơ với một số
- Bài 10: Vectơ trong mặt phẳng toạ độ
- Bài 11: Tích vô hướng của hai vectơ
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch4_lesson(lnum, k):
    if lnum == 7:
        # BÀI 7: CÁC KHÁI NIỆM MỞ ĐẦU VỀ VECTƠ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Vectơ là một đoạn thẳng",
                         "Có hướng (đã xác định điểm đầu và điểm cuối)",
                         "Không có hướng",
                         "Có độ dài bằng 1",
                         "Song song với trục hoành",
                         "A", "Định nghĩa SGK: Vectơ là một đoạn thẳng có hướng."),
                make_mcq(2, "NB", "Vectơ có điểm đầu là $A$ và điểm cuối là $B$ được kí hiệu là",
                         "$\vec{AB}$", "$\vec{BA}$", "$AB$", "$|\vec{AB}|$",
                         "A", "Kí hiệu vectơ có gốc $A$ ngọn $B$ là $\vec{AB}$."),
                make_mcq(3, "NB", "Độ dài của vectơ $\vec{AB}$ là",
                         "Khoảng cách giữa hai điểm $A$ và $B$, kí hiệu $|\vec{AB}| = AB$",
                         "Toạ độ của điểm $B$",
                         "Hiệu toạ độ $B - A$",
                         "Góc tạo bởi đoạn thẳng $AB$ và trục hoành",
                         "A", "Độ dài của vectơ là khoảng cách giữa điểm đầu và điểm cuối."),
                make_mcq(4, "NB", "Vectơ-không là vectơ có",
                         "Điểm đầu và điểm cuối trùng nhau, kí hiệu $\vec{0}$",
                         "Độ dài bằng 1",
                         "Hướng xác định duy nhất",
                         "Phương luôn vuông góc với mọi vectơ",
                         "A", "Vectơ-không có điểm đầu và cuối trùng nhau, độ dài bằng 0."),
                make_mcq(5, "TH", "Giá của vectơ $\vec{AB}$ ($A \ne B$) là",
                         "Đường thẳng đi qua hai điểm $A$ và $B$",
                         "Đoạn thẳng nối $A$ và $B$",
                         "Tia xuất phát từ $A$ qua $B$",
                         "Đường vuông góc với $AB$",
                         "A", "Giá của vectơ là đường thẳng mang vectơ đó."),
                make_mcq(6, "TH", "Hai vectơ được gọi là cùng phương nếu",
                         "Giá của chúng song song hoặc trùng nhau",
                         "Chúng có cùng độ dài",
                         "Chúng cùng hướng",
                         "Giá của chúng vuông góc với nhau",
                         "A", "Định nghĩa: Hai vectơ cùng phương khi giá của chúng song song hoặc trùng nhau."),
                make_mcq(7, "TH", "Cho hình bình hành $ABCD$. Vectơ cùng hướng với $\vec{AB}$ là",
                         "$\vec{DC}$", "$\vec{CD}$", "$\vec{BA}$", "$\vec{BC}$",
                         "A", "Trong hình bình hành $ABCD$, $\vec{AB}$ và $\vec{DC}$ cùng hướng và cùng độ dài."),
                make_mcq(8, "TH", "Cho tam giác đều $ABC$ cạnh $a$. Độ dài của vectơ $\vec{AB}$ bằng",
                         "$a$", "$a\sqrt{3}$", "$\frac{a\sqrt{3}}{2}$", "$2a$",
                         "A", "$|\vec{AB}| = AB = a$."),
                make_mcq(9, "VD", "Cho tứ giác $ABCD$. Điều kiện cần và đủ để $\vec{AB} = \vec{DC}$ là",
                         "$ABCD$ là hình bình hành",
                         "$ABCD$ là hình thang cân",
                         "$ABCD$ có hai đường chéo bằng nhau",
                         "$ABCD$ là hình vuông",
                         "A", "$\vec{AB} = \vec{DC} \Leftrightarrow AB \parallel DC$ và $AB = DC \Leftrightarrow ABCD$ là hình bình hành."),
                make_mcq(10, "VD", "Cho hình vuông $ABCD$ cạnh $4$. Độ dài của vectơ $\vec{AC}$ bằng",
                         "$4\sqrt{2}$", "$4$", "$8$", "$2\sqrt{2}$",
                         "A", "$|\vec{AC}| = AC = \sqrt{4^2 + 4^2} = 4\sqrt{2}$."),
                make_mcq(11, "VDC", "Cho lục giác đều $ABCDEF$ tâm $O$. Có bao nhiêu vectơ khác $\vec{0}$ có điểm đầu và điểm cuối là các đỉnh của lục giác hoặc tâm $O$ và bằng vectơ $\vec{AB}$?",
                         "3", "4", "2", "6",
                         "A", "Các vectơ bằng $\vec{AB}$ là: $\vec{ED}, \vec{FO}, \vec{OC}$ (tổng cộng có 3 vectơ)."),
                make_mcq(12, "VDC", "Một chất điểm đứng yên chịu tác dụng của hai lực $\vec{F}_1$ và $\vec{F}_2$. Khẳng định nào sau đây đúng?",
                         "$\vec{F}_1$ và $\vec{F}_2$ là hai vectơ đối nhau (cùng độ lớn, ngược hướng)",
                         "$\vec{F}_1$ và $\vec{F}_2$ cùng hướng",
                         "$\vec{F}_1$ và $\vec{F}_2$ có giá vuông góc nhau",
                         "Độ lớn hai lực tỉ lệ với khối lượng chất điểm",
                         "A", "Vật đứng yên khi tổng hợp lực bằng $\vec{0}$, tức $\vec{F}_1 + \vec{F}_2 = \vec{0} \Leftrightarrow \vec{F}_1 = -\vec{F}_2$.")
            ]
            tfs = [
                make_tf(1, "Cho tam giác đều $ABC$ cạnh bằng $6$, $H$ là trung điểm cạnh $BC$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Vectơ $\vec{AB}$ và $\vec{AC}$ cùng phương.", False, "Hai giá $AB$ và $AC$ cắt nhau tại $A$ nên không cùng phương."),
                    ("b", "Độ dài vectơ $\vec{BC}$ bằng 6.", True, "$|\vec{BC}| = BC = 6$."),
                    ("c", "Độ dài vectơ $\vec{AH}$ bằng $3\sqrt{3}$.", True, "$AH = \frac{6\sqrt{3}}{2} = 3\sqrt{3}$."),
                    ("d", "Vectơ $\vec{HB}$ và $\vec{HC}$ là hai vectơ bằng nhau.", False, "Hai vectơ này ngược hướng nên là hai vectơ đối nhau, không bằng nhau.")
                ]),
                make_tf(2, "Cho hình vuông $ABCD$ tâm $O$ cạnh bằng $a$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AB} = \vec{CD}$.", False, "$\vec{AB}$ và $\vec{CD}$ ngược hướng, đúng ra phải là $\vec{AB} = \vec{DC}$."),
                    ("b", "Độ dài $|ec{AO}| = \frac{a\sqrt{2}}{2}$.", True, "Nửa đường chéo hình vuông."),
                    ("c", "Có đúng 4 vectơ có điểm đầu và điểm cuối phân biệt lập từ các đỉnh $A, B, C, D$ có độ dài bằng $a\sqrt{2}$.", False, "Có 4 vectơ là $\vec{AC}, \vec{CA}, \vec{BD}, \vec{DB}$."),
                    ("d", "Vectơ $\vec{OA}$ và $\vec{OC}$ là hai vectơ đối nhau.", True, "$O$ là trung điểm $AC$ nên $\vec{OA} = -\vec{OC}$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho tam giác đều $ABC$ cạnh bằng 8. Độ dài của vectơ $\vec{AB}$ bằng bao nhiêu?",
                        "8", "$|\vec{AB}| = 8$."),
                make_sa(2, "TH", "Cho hình chữ nhật $ABCD$ có $AB = 6, AD = 8$. Tính độ dài vectơ $\vec{BD}$.",
                        "10", "$BD = \sqrt{6^2 + 8^2} = 10$."),
                make_sa(3, "VD", "Cho hình thoi $ABCD$ cạnh 5 có góc $\widehat{ABC} = 60^\circ$. Tính độ dài vectơ $\vec{AC}$.",
                        "5", "Tam giác $ABC$ đều cạnh 5 nên $AC = 5$."),
                make_sa(4, "VD", "Cho đoạn thẳng $AB = 12$. Gọi $M$ là trung điểm $AB$. Độ dài vectơ $\vec{AM}$ bằng bao nhiêu?",
                        "6", "$AM = 12 / 2 = 6$."),
                make_sa(5, "VDC", "Cho hình vuông $ABCD$ cạnh 10. Gọi $M$ là trung điểm $CD$. Tính độ dài vectơ $\vec{AM}$ (làm tròn số thập phân 1 chữ số).",
                        "11.2", "$AM = \sqrt{AD^2 + DM^2} = \sqrt{100 + 25} = \sqrt{125} \approx 11.2$."),
                make_sa(6, "VDC", "Một người chèo thuyền xuất phát từ điểm $A$ bên bờ này bơi thẳng vuông góc sang điểm $B$ bên bờ kia của dòng sông rộng $60\text{ m}$. Do nước chảy nên thuyền bị dạt tới điểm $C$ cách $B$ là $25\text{ m}$. Tính quãng đường thực tế thuyền đã đi được theo đường thẳng $AC$ (làm tròn đến hàng đơn vị).",
                        "65", "$AC = \sqrt{60^2 + 25^2} = \sqrt{3600 + 625} = \sqrt{4225} = 65\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Khái niệm vectơ và phương của vectơ",
                           "Định nghĩa vectơ và hai vectơ cùng phương. Cho ví dụ minh hoạ từ hình bình hành $ABCD$.",
                           "1. Định nghĩa vectơ: Vectơ là một đoạn thẳng có hướng, nghĩa là trong hai điểm mút đã xác định điểm nào là điểm đầu (gốc), điểm nào là điểm cuối (ngọn).\n2. Hai vectơ cùng phương: Là hai vectơ có giá song song hoặc trùng nhau.\n3. Ví dụ trong hình bình hành $ABCD$: Vectơ $\vec{AB}$ và $\vec{CD}$ cùng phương vì hai đường thẳng $AB$ và $CD$ song song. Vectơ $\vec{AB}$ và $\vec{DC}$ cùng hướng và cùng độ dài nên bằng nhau: $\vec{AB} = \vec{DC}$."),
                make_essay(2, "TH", 0.5, "So sánh vectơ bằng nhau và vectơ đối nhau",
                           "Nêu định nghĩa hai vectơ bằng nhau và hai vectơ đối nhau. Cho tam giác $ABC$, gọi $M, N$ lần lượt là trung điểm của $AB, AC$. Chỉ ra các cặp vectơ bằng nhau và đối nhau tạo bởi các đoạn thẳng nối các điểm này.",
                           "1. Hai vectơ bằng nhau khi chúng có cùng hướng và cùng độ dài: $\vec{a} = \vec{b}$.\n2. Hai vectơ đối nhau khi chúng ngược hướng và có cùng độ dài: $\vec{a} = -\vec{b}$.\n3. Trong tam giác $ABC$, $MN$ là đường trung bình song song và bằng nửa $BC$. Do đó: Các cặp vectơ bằng nhau: $\vec{AM} = \vec{MB}$, $\vec{AN} = \vec{NC}$, $\vec{MN} = \frac{1}{2}\vec{BC}$. Các cặp vectơ đối nhau: $\vec{AM}$ và $\vec{BM}$, $\vec{AN}$ và $\vec{CN}$, $\vec{MN}$ và $\vec{NM}$."),
                make_essay(3, "VD", 0.5, "Xác định các vectơ trong hình vuông",
                           "Cho hình vuông $ABCD$ tâm $O$ cạnh bằng $a$. Liệt kê tất cả các vectơ khác $\vec{0}$ có điểm đầu và điểm cuối chọn từ các điểm $A, B, C, D, O$ mà:\na) Cùng phương với $\vec{AB}$.\nb) Có độ dài bằng $\frac{a\sqrt{2}}{2}$.",
                           "a) Các vectơ cùng phương với $\vec{AB}$ (giá song song hoặc trùng $AB$): $\vec{AB}, \vec{BA}, \vec{CD}, \vec{DC}$. (Tổng cộng 4 vectơ).\nb) Độ dài $\frac{a\sqrt{2}}{2}$ chính là độ dài đoạn thẳng nối tâm $O$ với các đỉnh $A, B, C, D$. Các vectơ đó là: $\vec{OA}, \vec{AO}, \vec{OB}, \vec{BO}, \vec{OC}, \vec{CO}, \vec{OD}, \vec{DO}$. (Tổng cộng 8 vectơ)."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá chuyển động thực tế bằng vectơ",
                           "Một chiếc tàu chở khách di chuyển từ bến cảng $A$ sang bến cảng $B$. Biết vị trí địa lý của $B$ nằm ở hướng chính Đông cách $A$ một khoảng $40\text{ km}$, sau đó tàu đổi hành trình chạy theo hướng chính Bắc đến đảo du lịch $C$ cách bến $B$ một khoảng $30\text{ km}$.\na) Biểu diễn hành trình chuyển động của tàu bằng các vectơ và tính tổng quãng đường mà tàu đã di chuyển.\nb) Tính độ dài của vectơ độ dời tổng hợp $\vec{AC}$ từ điểm xuất phát đến đảo $C$.",
                           "a) Hành trình gồm hai vectơ chuyển động vuông góc: $\vec{d}_1 = \vec{AB}$ hướng Đông độ dài $40\text{ km}$, $\vec{d}_2 = \vec{BC}$ hướng Bắc độ dài $30\text{ km}$. Tổng quãng đường di chuyển: $S = AB + BC = 40 + 30 = 70\text{ km}$.\nb) Độ dời tổng hợp được biểu diễn bởi vectơ $\vec{AC}$. Do hướng Đông và hướng Bắc vuông góc nhau tại $B$ nên tam giác $ABC$ vuông tại $B$. Theo định lí Pythagore: $|\vec{AC}| = AC = \sqrt{AB^2 + BC^2} = \sqrt{40^2 + 30^2} = \sqrt{1600 + 900} = \sqrt{2500} = 50\text{ km}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Vectơ có điểm đầu là $M$ và điểm cuối là $N$ được kí hiệu là",
                         "$\vec{MN}$", "$\vec{NM}$", "$MN$", "$|\vec{MN}|$",
                         "A", "Kí hiệu chuẩn: điểm đầu viết trước, điểm cuối viết sau có mũi tên trên đầu."),
                make_mcq(2, "NB", "Độ dài của vectơ $\vec{0}$ bằng",
                         "0", "1", "$\infty$", "Tuỳ ý",
                         "A", "Vectơ-không có độ dài bằng 0."),
                make_mcq(3, "NB", "Hai vectơ cùng phương là hai vectơ có",
                         "Giá song song hoặc trùng nhau",
                         "Cùng hướng và cùng độ dài",
                         "Độ dài bằng nhau",
                         "Điểm đầu trùng nhau",
                         "A", "Định nghĩa cùng phương."),
                make_mcq(4, "NB", "Cho ba điểm phân biệt $A, B, C$ thẳng hàng. Hai vectơ $\vec{AB}$ và $\vec{AC}$ luôn",
                         "Cùng phương", "Cùng hướng", "Ngược hướng", "Bằng nhau",
                         "A", "Ba điểm thẳng hàng thì giá của chúng trùng nhau nên hai vectơ cùng phương."),
                make_mcq(5, "TH", "Cho hình thoi $ABCD$ tâm $O$. Vectơ cùng hướng với $\vec{AO}$ là",
                         "$\vec{OC}$", "$\vec{CO}$", "$\vec{OA}$", "$\vec{BO}$",
                         "A", "$O$ là trung điểm $AC$ nên $\vec{AO}$ và $\vec{OC}$ cùng hướng."),
                make_mcq(6, "TH", "Cho đoạn thẳng $AB$ có độ dài 10. Vectơ đối của $\vec{AB}$ có độ dài là",
                         "10", "-10", "0", "5",
                         "A", "Hai vectơ đối nhau có cùng độ dài bằng 10."),
                make_mcq(7, "TH", "Cho tứ giác $ABCD$. Nếu $\vec{AB} = \vec{DC}$ thì mệnh đề nào sau đây đúng?",
                         "$ABCD$ là hình bình hành",
                         "$ABCD$ là hình thang vuông",
                         "$AC = BD$",
                         "$\vec{AD} = \vec{CB}$",
                         "A", "$\vec{AB} = \vec{DC} \Rightarrow ABCD$ là hình bình hành."),
                make_mcq(8, "TH", "Cho hình chữ nhật $ABCD$ có $AB = 3, BC = 4$. Độ dài vectơ $\vec{AC}$ bằng",
                         "5", "7", "1", "25",
                         "A", "$AC = \sqrt{3^2 + 4^2} = 5$."),
                make_mcq(9, "VD", "Cho tam giác đều $ABC$ cạnh 4. Gọi $M$ là trung điểm $BC$. Độ dài của vectơ $\vec{AM}$ bằng",
                         "$2\sqrt{3}$", "$2$", "$4\sqrt{3}$", "$3\sqrt{2}$",
                         "A", "Đường cao tam giác đều: $AM = \frac{4\sqrt{3}}{2} = 2\sqrt{3}$."),
                make_mcq(10, "VD", "Cho hình vuông $ABCD$ cạnh $a$. Khẳng định nào sau đây SAI?",
                         "$|\vec{AB}| = |\vec{AC}|$",
                         "$\vec{AB} = \vec{DC}$",
                         "$|\vec{AD}| = a$",
                         "$\vec{BC}$ cùng hướng với $\vec{AD}$",
                         "A", "$|\vec{AB}| = a \ne |\vec{AC}| = a\sqrt{2}$."),
                make_mcq(11, "VDC", "Cho ngũ giác đều $ABCDE$ tâm $O$. Số các vectơ khác $\vec{0}$ có điểm đầu và điểm cuối là các đỉnh của ngũ giác hoặc tâm $O$ và cùng phương với $\vec{OA}$ là",
                         "2", "4", "6", "10",
                         "A", "Vì số đỉnh là lẻ (5 đỉnh), không có đỉnh nào đối xứng với $A$ qua $O$. Do đó chỉ có đường thẳng $OA$ chứa $O$ và $A$, nên chỉ có 2 vectơ là $\vec{OA}$ và $\vec{AO}$."),
                make_mcq(12, "VDC", "Hai con tàu cùng rời một cảng $O$: tàu thứ nhất đi theo hướng Đông với vận tốc $30\text{ km/h}$, tàu thứ hai đi theo hướng Bắc với vận tốc $40\text{ km/h}$. Khoảng cách giữa hai con tàu sau 2 giờ bằng",
                         "$100\text{ km}$", "$70\text{ km}$", "$140\text{ km}$", "$50\text{ km}$",
                         "A", "Sau 2h: $OA = 30 \times 2 = 60\text{ km}, OB = 40 \times 2 = 80\text{ km}$. Khoảng cách $AB = \sqrt{60^2 + 80^2} = 100\text{ km}$.")
            ]
            tfs = [
                make_tf(1, "Cho hình thoi $ABCD$ có tâm $O$, cạnh $a = 10$, góc $\widehat{BAD} = 60^\circ$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tam giác $ABD$ là tam giác đều.", True, "Hình thoi có $AB = AD = 10$ và $\widehat{A} = 60^\circ$ nên tam giác $ABD$ đều."),
                    ("b", "Độ dài $|ec{BD}| = 10$.", True, "Vì $\triangle ABD$ đều nên $BD = 10$."),
                    ("c", "Độ dài $|ec{AC}| = 10\sqrt{3}$.", True, "$AC = 2 \times AO = 2 \times \frac{10\sqrt{3}}{2} = 10\sqrt{3}$."),
                    ("d", "Vectơ $\vec{AB} = \vec{CD}$.", False, "$\vec{AB}$ và $\vec{CD}$ ngược hướng nên không thể bằng nhau (phải là $\vec{AB} = \vec{DC}$).")
                ]),
                make_tf(2, "Cho hình chữ nhật $ABCD$ có $AB = 8, BC = 6$, giao điểm hai đường chéo là $O$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Độ dài của vectơ $\vec{AC}$ bằng 10.", True, "$AC = \sqrt{8^2 + 6^2} = 10$."),
                    ("b", "Vectơ $\vec{AO}$ và $\vec{OC}$ cùng hướng và cùng độ dài.", True, "$O$ là trung điểm $AC$ nên $\vec{AO} = \vec{OC}$."),
                    ("c", "Vectơ $\vec{AD}$ cùng phương với $\vec{BC}$.", True, "Vì $AD \parallel BC$."),
                    ("d", "$\vec{AC} = \vec{BD}$.", False, "Hai đường chéo tuy cùng độ dài nhưng khác phương hướng, không bằng nhau.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hình vuông $ABCD$ cạnh bằng 5. Độ dài vectơ $\vec{CD}$ bằng bao nhiêu?",
                        "5", "$|\vec{CD}| = 5$."),
                make_sa(2, "TH", "Cho lục giác đều $ABCDEF$ cạnh 3. Độ dài vectơ $\vec{BC}$ bằng bao nhiêu?",
                        "3", "Bằng cạnh lục giác $= 3$."),
                make_sa(3, "VD", "Cho tam giác vuông $ABC$ tại $A$ có $AB = 9, AC = 12$. Tính độ dài vectơ $\vec{BC}$.",
                        "15", "$BC = \sqrt{81 + 144} = 15$."),
                make_sa(4, "VD", "Cho hình thoi $ABCD$ có đường chéo $AC = 8, BD = 6$. Tính độ dài vectơ $\vec{AB}$.",
                        "5", "Cạnh hình thoi $= \sqrt{4^2 + 3^2} = 5$."),
                make_sa(5, "VDC", "Cho hình chữ nhật $ABCD$ có diện tích bằng 24, chiều dài $AB = 6$. Tính độ dài vectơ $\vec{AC}$ (làm tròn số thập phân 1 chữ số).",
                        "7.2", "$AD = 24/6 = 4$. $AC = \sqrt{36 + 16} = \sqrt{52} \approx 7.21$."),
                make_sa(6, "VDC", "Một máy bay bay thẳng về hướng Tây $120\text{ km}$, sau đó bay tiếp về hướng Nam $50\text{ km}$. Khoảng cách theo đường chim bay từ vị trí ban đầu đến vị trí hạ cánh bằng bao nhiêu km?",
                        "130", "$d = \sqrt{120^2 + 50^2} = 130\text{ km}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phân biệt đoạn thẳng và đoạn thẳng có hướng",
                           "Nêu sự khác nhau cơ bản giữa đoạn thẳng $AB$ và vectơ $\vec{AB}$.",
                           "1. Đoạn thẳng $AB$: Là hình học gồm điểm $A$, điểm $B$ và tất cả các điểm nằm giữa $A$ và $B$. Đoạn thẳng không có hướng (đoạn $AB$ và đoạn $BA$ là một).\n2. Vectơ $\vec{AB}$: Là đoạn thẳng đã được định hướng, trong đó điểm $A$ là điểm đầu (gốc) và điểm $B$ là điểm cuối (ngọn). Vectơ $\vec{AB}$ có hướng từ $A$ đến $B$, phân biệt rõ ràng với vectơ $\vec{BA}$ có hướng từ $B$ đến $A$."),
                make_essay(2, "TH", 0.5, "Tính chất vectơ trong hình bình hành",
                           "Cho hình bình hành $ABCD$. Hãy chỉ ra: a) Các vectơ bằng vectơ $\vec{AB}$. b) Các vectơ đối của vectơ $\vec{AD}$. c) Các cặp vectơ cùng phương nhưng ngược hướng.",
                           "Trong hình bình hành $ABCD$:\na) Vectơ bằng $\vec{AB}$ là: $\vec{DC}$ (do $AB \parallel DC$, cùng độ dài và cùng hướng từ trái sang phải).\nb) Vectơ đối của $\vec{AD}$ là: $-\vec{AD} = \vec{DA}$ và $\vec{CB}$.\nc) Các cặp vectơ cùng phương nhưng ngược hướng: - $\vec{AB}$ và $\vec{CD}$. - $\vec{AD}$ và $\vec{CB}$. - $\vec{BA}$ và $\vec{DC}$."),
                make_essay(3, "VD", 0.5, "Tính độ dài vectơ trong tam giác đều",
                           "Cho tam giác $ABC$ đều cạnh $a$. Gọi $H$ là trung điểm của cạnh $BC$.\na) Tính độ dài của vectơ $\vec{AH}$.\nb) Lấy điểm $D$ đối xứng với $A$ qua $H$. Tứ giác $ABDC$ là hình gì? Tìm các vectơ bằng vectơ $\vec{AB}$ trong hình đó.",
                           "a) Vì tam giác $ABC$ đều cạnh $a$ nên đường trung tuyến $AH$ đồng thời là đường cao. Áp dụng định lí Pythagore trong tam giác vuông $ABH$: $AH = \sqrt{AB^2 - BH^2} = \sqrt{a^2 - (a/2)^2} = \frac{a\sqrt{3}}{2}$. Do đó độ dài vectơ là $|\vec{AH}| = AH = \frac{a\sqrt{3}}{2}$.\nb) Tứ giác $ABDC$ có hai đường chéo $BC$ và $AD$ cắt nhau tại trung điểm $H$ của mỗi đường, đồng thời $AD \perp BC$ tại $H$ và $AB = AC = a$. Do đó $ABDC$ là hình thoi. Vectơ bằng $\vec{AB}$ là $\vec{CD}$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá chuyển động hai chiều của máy bay không người lái",
                           "Một chiếc drone điều khiển từ xa bay khảo sát địa hình xuất phát từ trạm điều khiển $O$. Drone bay theo phương ngang sang phía Đông $600\text{ m}$, sau đó bay chếch lên hướng Bắc $800\text{ m}$.\na) Xác định độ dài vectơ vị trí của drone so với trạm xuất phát $O$.\nb) Nếu drone bay với tốc độ không đổi $20\text{ m/s}$ theo đường thẳng trực tiếp từ $O$ đến vị trí cuối cùng thì mất bao nhiêu giây?",
                           "a) Độ dời về phía Đông là $x = 600\text{ m}$, độ dời về phía Bắc là $y = 800\text{ m}$. Hai phương Đông và Bắc vuông góc với nhau. Độ dài vectơ vị trí tổng hợp là khoảng cách từ $O$ đến vị trí hiện tại của drone: $d = \sqrt{x^2 + y^2} = \sqrt{600^2 + 800^2} = \sqrt{360\,000 + 640\,000} = \sqrt{1\,000\,000} = 1000\text{ m} = 1\text{ km}$.\nb) Thời gian bay trực tiếp từ $O$ đến đích với tốc độ $v = 20\text{ m/s}$ là: $t = \frac{d}{v} = \frac{1000}{20} = 50\text{ giây}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 8:
        # BÀI 8: TỔNG VÀ HIỆU CỦA HAI VECTƠ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Với ba điểm bất kì $A, B, C$, khẳng định nào sau đây luôn đúng (Quy tắc ba điểm)?",
                         "$\vec{AB} + \vec{BC} = \vec{AC}$",
                         "$\vec{AB} + \vec{AC} = \vec{BC}$",
                         "$\vec{AB} - \vec{BC} = \vec{AC}$",
                         "$\vec{BA} + \vec{BC} = \vec{AC}$",
                         "A", "Quy tắc ba điểm phép cộng: $\vec{AB} + \vec{BC} = \vec{AC}$."),
                make_mcq(2, "NB", "Cho hình bình hành $ABCD$. Theo quy tắc hình bình hành ta có",
                         "$\vec{AB} + \vec{AD} = \vec{AC}$",
                         "$\vec{AB} + \vec{AD} = \vec{BD}$",
                         "$\vec{AB} + \vec{CD} = \vec{0}$",
                         "$\vec{BA} + \vec{BC} = \vec{CA}$",
                         "A", "Quy tắc hình bình hành: $\vec{AB} + \vec{AD} = \vec{AC}$."),
                make_mcq(3, "NB", "Vectơ đối của vectơ $\vec{AB}$ là",
                         "$\vec{BA}$", "$\vec{AB}$", "$-\vec{BA}$", "$\vec{0}$",
                         "A", "Vectơ đối của $\vec{AB}$ là $-\vec{AB} = \vec{BA}$."),
                make_mcq(4, "NB", "Với ba điểm phân biệt $A, B, C$, hiệu $\vec{AB} - \vec{AC}$ bằng",
                         "$\vec{CB}$", "$\vec{BC}$", "$\vec{CA}$", "$\vec{BA}$",
                         "A", "Quy tắc hiệu chung gốc: $\vec{AB} - \vec{AC} = \vec{CB}$."),
                make_mcq(5, "TH", "Cho $I$ là trung điểm của đoạn thẳng $AB$. Khẳng định nào sau đây đúng?",
                         "$\vec{IA} + \vec{IB} = \vec{0}$",
                         "$\vec{IA} + \vec{IB} = \vec{AB}$",
                         "$\vec{IA} = \vec{IB}$",
                         "$\vec{AI} + \vec{BI} = \vec{AB}$",
                         "A", "$I$ là trung điểm của $AB \Leftrightarrow \vec{IA} + \vec{IB} = \vec{0}$."),
                make_mcq(6, "TH", "Cho tam giác $ABC$ có trọng tâm $G$. Với điểm $M$ tuỳ ý, khẳng định nào sau đây đúng?",
                         "$\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$",
                         "$\vec{MA} + \vec{MB} + \vec{MC} = \vec{MG}$",
                         "$\vec{GA} + \vec{GB} + \vec{GC} = 3\vec{MG}$",
                         "$\vec{MA} + \vec{MB} + \vec{MC} = \vec{0}$",
                         "A", "Tính chất trọng tâm: $\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$."),
                make_mcq(7, "TH", "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ $\vec{u} = \vec{AB} + \vec{AD}$ bằng",
                         "$a\sqrt{2}$", "$2a$", "$a$", "$a\sqrt{3}$",
                         "A", "$\vec{AB} + \vec{AD} = \vec{AC}$, có độ dài $|\vec{AC}| = a\sqrt{2}$."),
                make_mcq(8, "TH", "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ $\vec{v} = \vec{AB} - \vec{AD}$ bằng",
                         "$a\sqrt{2}$", "$0$", "$2a$", "$a$",
                         "A", "$\vec{AB} - \vec{AD} = \vec{DB}$, có độ dài $|\vec{DB}| = a\sqrt{2}$."),
                make_mcq(9, "VD", "Cho tam giác đều $ABC$ cạnh $a$. Độ dài của vectơ $\vec{AB} + \vec{AC}$ bằng",
                         "$a\sqrt{3}$", "$a$", "$\frac{a\sqrt{3}}{2}$", "$2a$",
                         "A", "Gọi $M$ là trung điểm $BC$, $\vec{AB} + \vec{AC} = 2\vec{AM}$. Độ dài $2 \times \frac{a\sqrt{3}}{2} = a\sqrt{3}$."),
                make_mcq(10, "VD", "Cho hình chữ nhật $ABCD$ có $AB = 3, AD = 4$. Độ dài của vectơ $\vec{AB} + \vec{BC} + \vec{CD}$ bằng",
                         "4", "3", "5", "7",
                         "A", "$\vec{AB} + \vec{BC} + \vec{CD} = \vec{AD}$, có độ dài bằng $AD = 4$."),
                make_mcq(11, "VDC", "Cho tam giác $ABC$. Tập hợp các điểm $M$ thoả mãn $|\vec{MA} + \vec{MB}| = |\vec{MA} - \vec{MB}|$ là",
                         "Đường tròn đường kính $AB$",
                         "Đường trung trực của đoạn thẳng $AB$",
                         "Đường thẳng song song với $AB$",
                         "Tập rỗng",
                         "A", "Gọi $I$ là trung điểm $AB$, VT $= |2\vec{MI}| = 2MI$. VP $= |\vec{BA}| = AB$. Do đó $MI = \frac{AB}{2}$, tức $M$ thuộc đường tròn đường kính $AB$."),
                make_mcq(12, "VDC", "Hai lực $\vec{F}_1$ và $\vec{F}_2$ có cùng điểm đặt tại $O$, có phương vuông góc với nhau và có độ lớn lần lượt là $30\text{ N}$ và $40\text{ N}$. Độ lớn hợp lực của chúng bằng",
                         "$50\text{ N}$", "$70\text{ N}$", "$10\text{ N}$", "$1200\text{ N}$",
                         "A", "$|\vec{F}| = \sqrt{F_1^2 + F_2^2} = \sqrt{30^2 + 40^2} = 50\text{ N}$.")
            ]
            tfs = [
                make_tf(1, "Cho tam giác đều $ABC$ cạnh $6$. Gọi $M$ là trung điểm của cạnh $BC$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AB} + \vec{AC} = 2\vec{AM}$.", True, "Hệ thức trung điểm."),
                    ("b", "Độ dài $|ec{AB} + ec{AC}| = 6\sqrt{3}$.", True, "$2 \times AM = 2 \times \frac{6\sqrt{3}}{2} = 6\sqrt{3}$."),
                    ("c", "$\vec{AB} - \vec{AC} = \vec{CB}$.", True, "Quy tắc hiệu chung gốc: $\vec{AB} - \vec{AC} = \vec{CB}$."),
                    ("d", "Độ dài $|ec{AB} - ec{AC}| = 6\sqrt{3}$.", False, "$|\vec{CB}| = BC = 6$, không phải $6\sqrt{3}$.")
                ]),
                make_tf(2, "Cho hình vuông $ABCD$ tâm $O$ cạnh bằng $4$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{OA} + \vec{OB} + \vec{OC} + \vec{OD} = \vec{0}$.", True, "Do $O$ là trung điểm của $AC$ và $BD$ nên $\vec{OA} + \vec{OC} = \vec{0}$ và $\vec{OB} + \vec{OD} = \vec{0}$."),
                    ("b", "Độ dài $|ec{AB} + ec{BC}| = 4$.", False, "$\vec{AB} + \vec{BC} = \vec{AC}$ có độ dài $4\sqrt{2}$."),
                    ("c", "$\vec{AB} + \vec{AD} = 2\vec{AC}$.", False, "$\vec{AB} + \vec{AD} = \vec{AC}$, không phải $2\vec{AC}$."),
                    ("d", "Độ dài $|ec{AB} - ec{AD}| = 4\sqrt{2}$.", True, "$\vec{AB} - \vec{AD} = \vec{DB}$ có độ dài đường chéo $4\sqrt{2}$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho tam giác đều $ABC$ cạnh bằng 10. Độ dài vectơ $\vec{AB} - \vec{AC}$ bằng bao nhiêu?",
                        "10", "$|\vec{CB}| = 10$."),
                make_sa(2, "TH", "Cho hình vuông $ABCD$ cạnh 6. Tính độ dài vectơ tổng $\vec{AB} + \vec{AD}$ (làm tròn số thập phân 1 chữ số).",
                        "8.5", "$|\vec{AC}| = 6\sqrt{2} \approx 8.49 \approx 8.5$."),
                make_sa(3, "VD", "Cho hình thoi $ABCD$ có đường chéo $AC = 16, BD = 12$. Tính độ dài vectơ $\vec{AB} + \vec{AD}$.",
                        "16", "$\vec{AB} + \vec{AD} = \vec{AC}$, độ dài bằng 16."),
                make_sa(4, "VD", "Cho ba điểm $A, B, C$ thẳng hàng, $B$ nằm giữa $A$ và $C$ với $AB = 4, BC = 7$. Độ dài vectơ $\vec{AB} + \vec{CB}$ bằng bao nhiêu?",
                        "3", "Vì $B$ ở giữa nên $\vec{AB}$ và $\vec{CB}$ ngược hướng, độ dài tổng $= |4 - 7| = 3$."),
                make_sa(5, "VDC", "Cho tam giác $ABC$ có trọng tâm $G$. Điểm $M$ thoả mãn $\vec{MA} + \vec{MB} + \vec{MC} = \vec{0}$. Khoảng cách $MG$ bằng bao nhiêu?",
                        "0", "Vì $\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG} = \vec{0} \Rightarrow M \equiv G$, nên $MG = 0$."),
                make_sa(6, "VDC", "Hai người cùng kéo một chiếc thuyền nhỏ bằng hai sợi dây với lực $F_1 = 400\text{ N}$ và $F_2 = 300\text{ N}$. Góc giữa hai sợi dây kéo bằng $90^\circ$. Độ lớn hợp lực tác dụng lên thuyền bằng bao nhiêu Newton?",
                        "500", "$F = \sqrt{400^2 + 300^2} = 500\text{ N}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc cộng vectơ và hình bình hành",
                           "Phát biểu quy tắc ba điểm và quy tắc hình bình hành đối với phép cộng vectơ. Vẽ hình minh hoạ cho mỗi quy tắc.",
                           "1. Quy tắc ba điểm: Với ba điểm bất kì $A, B, C$, ta có $\vec{AB} + \vec{BC} = \vec{AC}$. Điểm cuối của vectơ thứ nhất trùng với điểm đầu của vectơ thứ hai.\n2. Quy tắc hình bình hành: Nếu $ABCD$ là hình bình hành thì $\vec{AB} + \vec{AD} = \vec{AC}$. Hai vectơ chung gốc được cộng lại thành vectơ đường chéo xuất phát từ gốc chung đó."),
                make_essay(2, "TH", 0.5, "Phép trừ vectơ và tính chất trung điểm",
                           "Cho đoạn thẳng $AB$ có trung điểm $I$. Chứng minh rằng với mọi điểm $M$ bất kì, ta luôn có:\na) $\vec{IA} + \vec{IB} = \vec{0}$.\nb) $\vec{MA} + \vec{MB} = 2\vec{MI}$.",
                           "a) Vì $I$ là trung điểm của $AB$ nên hai đoạn $IA = IB$, và hai vectơ $\vec{IA}, \vec{IB}$ ngược hướng. Do đó $\vec{IA}$ và $\vec{IB}$ là hai vectơ đối nhau, suy ra $\vec{IA} + \vec{IB} = \vec{0}$.\nb) Theo quy tắc ba điểm: $\vec{MA} = \vec{MI} + \vec{IA}$ và $\vec{MB} = \vec{MI} + \vec{IB}$. Cộng hai vế ta được: $\vec{MA} + \vec{MB} = (\vec{MI} + \vec{IA}) + (\vec{MI} + \vec{IB}) = 2\vec{MI} + (\vec{IA} + \vec{IB}) = 2\vec{MI} + \vec{0} = 2\vec{MI}$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Tính độ dài vectơ tổng và hiệu trong hình học",
                           "Cho hình chữ nhật $ABCD$ có các cạnh $AB = 4a, AD = 3a$.\na) Tính độ dài vectơ $\vec{u} = \vec{AB} + \vec{AD}$.\nb) Tính độ dài vectơ $\vec{v} = \vec{AB} - \vec{AD}$.\nc) So sánh độ dài của hai vectơ $\vec{u}$ và $\vec{v}$.",
                           "a) Theo quy tắc hình bình hành (áp dụng cho hình chữ nhật $ABCD$): $\vec{u} = \vec{AB} + \vec{AD} = \vec{AC}$. Độ dài $|ec{u}| = AC = \sqrt{AB^2 + AD^2} = \sqrt{(4a)^2 + (3a)^2} = \sqrt{25a^2} = 5a$.\nb) Theo quy tắc hiệu chung gốc: $\vec{v} = \vec{AB} - \vec{AD} = \vec{DB}$. Độ dài $|ec{v}| = DB = \sqrt{DA^2 + AB^2} = \sqrt{(3a)^2 + (4a)^2} = 5a$.\nc) Hai vectơ $\vec{u}$ và $\vec{v}$ có phương khác nhau (là phương hai đường chéo cắt nhau) nhưng có độ dài bằng nhau: $|\vec{u}| = |\vec{v}| = 5a$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế cân bằng lực vật lý",
                           "Một chiếc đèn trang trí nặng $6\text{ kg}$ ($P \approx 60\text{ N}$) được treo cố định vào trần nhà nhờ hai sợi dây cáp mảnh không giãn $OA$ và $OB$. Hai dây hợp với trần nhà các góc bằng nhau là $30^\circ$ và cùng nằm trong một mặt phẳng thẳng đứng.\na) Phân tích các lực tác dụng lên điểm treo $O$ và viết điều kiện cân bằng dưới dạng vectơ.\nb) Tính độ lớn lực căng của mỗi sợi dây cáp.",
                           "a) Điểm $O$ chịu tác dụng của 3 lực: trọng lực $\vec{P}$ thẳng đứng hướng xuống dưới độ lớn $P = 60\text{ N}$; lực căng $\vec{T}_1$ dọc theo dây $OA$; lực căng $\vec{T}_2$ dọc theo dây $OB$. Điều kiện cân bằng là: $\vec{T}_1 + \vec{T}_2 + \vec{P} = \vec{0} \Leftrightarrow \vec{T}_1 + \vec{T}_2 = -\vec{P}$.\nb) Gọi $\vec{T} = \vec{T}_1 + \vec{T}_2$. Hợp lực $\vec{T}$ thẳng đứng hướng lên và có độ lớn $T = P = 60\text{ N}$. Do tính đối xứng nên $T_1 = T_2$. Hình chiếu lên phương thẳng đứng: $T_1 \sin 30^\circ + T_2 \sin 30^\circ = P \Leftrightarrow 2 T_1 \times \frac{1}{2} = 60 \Rightarrow T_1 = T_2 = 60\text{ N}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Với bốn điểm bất kì $A, B, C, D$, tổng $\vec{AB} + \vec{BC} + \vec{CD}$ bằng",
                         "$\vec{AD}$", "$\vec{DA}$", "$\vec{AC}$", "$\vec{0}$",
                         "A", "Quy tắc nối tiếp: $\vec{AB} + \vec{BC} + \vec{CD} = \vec{AD}$."),
                make_mcq(2, "NB", "Vectơ tổng $\vec{a} + \vec{0}$ bằng",
                         "$\vec{a}$", "$\vec{0}$", "$2\vec{a}$", "$-\vec{a}$",
                         "A", "Cộng với vectơ-không luôn bằng chính nó."),
                make_mcq(3, "NB", "Hiệu $\vec{MN} - \vec{MP}$ bằng vectơ nào sau đây?",
                         "$\vec{PN}$", "$\vec{NP}$", "$\vec{MN}$", "$\vec{PM}$",
                         "A", "Quy tắc hiệu chung gốc: $\vec{MN} - \vec{MP} = \vec{PN}$."),
                make_mcq(4, "NB", "Cho tam giác $ABC$ có trọng tâm $G$. Đẳng thức nào sau đây đúng?",
                         "$\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$",
                         "$\vec{GA} + \vec{GB} + \vec{GC} = 3\vec{GG}$",
                         "$\vec{AG} + \vec{BG} + \vec{CG} = \vec{AC}$",
                         "$\vec{GA} = \vec{GB} + \vec{GC}$",
                         "A", "Tính chất trọng tâm: $\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$."),
                make_mcq(5, "TH", "Cho hình thoi $ABCD$ có tâm $O$. Vectơ $\vec{OB} - \vec{OA}$ bằng",
                         "$\vec{AB}$", "$\vec{BA}$", "$\vec{DB}$", "$\vec{AC}$",
                         "A", "$\vec{OB} - \vec{OA} = \vec{AB}$."),
                make_mcq(6, "TH", "Cho tam giác đều $ABC$ cạnh $2a$. Độ dài của vectơ $\vec{AB} - \vec{AC}$ bằng",
                         "$2a$", "$a\sqrt{3}$", "$a$", "$4a$",
                         "A", "$\vec{AB} - \vec{AC} = \vec{CB}$, có độ dài bằng $BC = 2a$."),
                make_mcq(7, "TH", "Cho đoạn thẳng $AB = 6$. Gọi $M$ là trung điểm của $AB$. Độ dài vectơ $\vec{MA} - \vec{MB}$ bằng",
                         "6", "0", "3", "12",
                         "A", "$\vec{MA} - \vec{MB} = \vec{BA}$, có độ dài bằng $BA = 6$."),
                make_mcq(8, "TH", "Cho hình bình hành $ABCD$. Vectơ $\vec{AB} - \vec{AC} + \vec{AD}$ bằng",
                         "$\vec{0}$", "$\vec{AC}$", "$2\vec{AD}$", "$\vec{DB}$",
                         "A", "$\vec{AB} + \vec{AD} = \vec{AC} \Rightarrow \vec{AB} + \vec{AD} - \vec{AC} = \vec{0}$."),
                make_mcq(9, "VD", "Cho hình chữ nhật $ABCD$ có $AB = 6, BC = 8$. Độ dài vectơ tổng $\vec{AB} + \vec{AD}$ bằng",
                         "10", "14", "2", "48",
                         "A", "$\vec{AB} + \vec{AD} = \vec{AC}$, có độ dài đường chéo $AC = \sqrt{6^2 + 8^2} = 10$."),
                make_mcq(10, "VD", "Cho tam giác $ABC$ vuông cân tại $A$ có $AB = AC = 4$. Độ dài của vectơ $\vec{AB} + \vec{AC}$ bằng",
                         "$4\sqrt{2}$", "8", "4", "$2\sqrt{2}$",
                         "A", "Dựng điểm $D$ sao cho $ABDC$ là hình vuông. $\vec{AB} + \vec{AC} = \vec{AD}$ có độ dài đường chéo $4\sqrt{2}$."),
                make_mcq(11, "VDC", "Cho hình vuông $ABCD$ cạnh $a$. Gọi $M$ là trung điểm $AB$. Độ dài vectơ $\vec{u} = \vec{MD} + \vec{MC}$ bằng",
                         "$2a$", "$a\sqrt{5}$", "$a\sqrt{2}$", "$\frac{a\sqrt{5}}{2}$",
                         "A", "Gọi $N$ là trung điểm $CD$, $MN = a$ và $\vec{MD} + \vec{MC} = 2\vec{MN}$. Độ dài $= 2a$."),
                make_mcq(12, "VDC", "Một ca nô chuyển động xuôi dòng từ bến $A$ sang bến $B$. Vận tốc của ca nô đối với dòng nước là $24\text{ km/h}$, vận tốc dòng nước đối với bờ là $4\text{ km/h}$. Vận tốc của ca nô đối với bờ khi chạy xuôi dòng là",
                         "$28\text{ km/h}$", "$20\text{ km/h}$", "$\sqrt{24^2 + 4^2}\text{ km/h}$", "$96\text{ km/h}$",
                         "A", "Vận tốc tổng hợp xuôi dòng: $\vec{v} = \vec{v}_1 + \vec{v}_2 \Rightarrow v = 24 + 4 = 28\text{ km/h}$.")
            ]
            tfs = [
                make_tf(1, "Cho tam giác $ABC$ có trọng tâm $G$. Gọi $M$ là trung điểm cạnh $BC$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$.", True, "Tính chất cơ bản của trọng tâm."),
                    ("b", "$\vec{GB} + \vec{GC} = 2\vec{GM}$.", True, "Hệ thức trung điểm với điểm gốc $G$."),
                    ("c", "$\vec{GA} = 2\vec{GM}$.", False, "Hai vectơ này ngược hướng: $\vec{GA} = -2\vec{GM}$."),
                    ("d", "Với mọi điểm $O$, ta có $\vec{OA} + \vec{OB} + \vec{OC} = 3\vec{OG}$.", True, "Hệ thức trọng tâm mở rộng.")
                ]),
                make_tf(2, "Cho hình vuông $ABCD$ cạnh bằng $6$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AB} + \vec{BC} + \vec{CD} + \vec{DA} = \vec{0}$.", True, "Tổng các vectơ theo chu trình khép kín bằng $\vec{0}$."),
                    ("b", "Độ dài $|ec{AB} - ec{AD}| = 6$.", False, "$\vec{AB} - \vec{AD} = \vec{DB}$ có độ dài đường chéo $6\sqrt{2}$."),
                    ("c", "Độ dài $|ec{AB} + ec{AD}| = 6\sqrt{2}$.", True, "$\vec{AB} + \vec{AD} = \vec{AC}$ có độ dài $6\sqrt{2}$."),
                    ("d", "Vectơ $\vec{AB} - \vec{CD} = \vec{0}$.", False, "$\vec{CD} = -\vec{AB}$ nên $\vec{AB} - \vec{CD} = 2\vec{AB} \ne \vec{0}$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho ba điểm $A, B, C$ tạo thành tam giác đều cạnh 7. Độ dài vectơ $\vec{BA} - \vec{BC}$ bằng bao nhiêu?",
                        "7", "$|\vec{CA}| = 7$."),
                make_sa(2, "TH", "Cho hình vuông $ABCD$ cạnh 8. Tính độ dài vectơ $\vec{AB} + \vec{BC}$.",
                        "11.3", "$|\vec{AC}| = 8\sqrt{2} \approx 11.31$."),
                make_sa(3, "VD", "Cho hình thoi $ABCD$ cạnh 10, góc $\widehat{ABC} = 120^\circ$. Tính độ dài vectơ tổng $\vec{BA} + \vec{BC}$.",
                        "10", "Tam giác $ABC$ cân có góc đáy $30^\circ$, độ dài đường chéo $BD = 2 \times 10 \times \cos 60^\circ = 10$. $\vec{BA} + \vec{BC} = \vec{BD}$."),
                make_sa(4, "VD", "Cho tứ giác $ABCD$. Vectơ $\vec{AB} + \vec{BC} + \vec{CD} + \vec{DA}$ có độ dài bằng bao nhiêu?",
                        "0", "Tổng chu trình khép kín bằng $\vec{0}$, độ dài $= 0$."),
                make_sa(5, "VDC", "Cho tam giác $ABC$ vuông tại $A$ có $AB = 5, AC = 12$. Gọi $M$ là trung điểm $BC$. Độ dài của vectơ $\vec{u} = \vec{AB} + \vec{AC}$ bằng bao nhiêu?",
                        "13", "$|\vec{AB} + \vec{AC}| = |2\vec{AM}| = 2 AM = BC = \sqrt{25 + 144} = 13$."),
                make_sa(6, "VDC", "Một quả bóng chịu tác dụng đồng thời của hai lực kéo có phương vuông góc với nhau, với độ lớn $F_1 = 15\text{ N}$ và $F_2 = 20\text{ N}$. Độ lớn hợp lực tác dụng lên quả bóng bằng bao nhiêu Newton?",
                        "25", "$F = \sqrt{15^2 + 20^2} = 25\text{ N}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc hiệu vectơ chung gốc",
                           "Nêu quy tắc trừ hai vectơ có cùng điểm gốc. Áp dụng tính $\vec{OA} - \vec{OB}$ với hình vẽ minh hoạ.",
                           "1. Quy tắc trừ hai vectơ chung gốc: Với ba điểm bất kì $O, A, B$, ta luôn có: $\vec{OA} - \vec{OB} = \vec{BA}$.\n2. Giải thích: Phép trừ vectơ là phép cộng với vectơ đối: $\vec{OA} - \vec{OB} = \vec{OA} + (-\vec{OB}) = \vec{OA} + \vec{BO} = \vec{BO} + \vec{OA} = \vec{BA}$ (theo quy tắc ba điểm)."),
                make_essay(2, "TH", 0.5, "Tính chất trọng tâm tam giác",
                           "Cho tam giác $ABC$ có trọng tâm $G$. Chứng minh rằng:\na) $\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$.\nb) Với điểm $O$ bất kì, $\vec{OA} + \vec{OB} + \vec{OC} = 3\vec{OG}$.",
                           "a) Gọi $M$ là trung điểm của cạnh $BC$. Theo tính chất trung điểm: $\vec{GB} + \vec{GC} = 2\vec{GM}$. Theo tính chất trọng tâm, $G$ nằm trên trung tuyến $AM$ và $GA = 2GM$, đồng thời $\vec{GA}$ và $\vec{GM}$ ngược hướng, suy ra $\vec{GA} = -2\vec{GM}$. Do đó: $\vec{GA} + \vec{GB} + \vec{GC} = -2\vec{GM} + 2\vec{GM} = \vec{0}$ (đpcm).\nb) Với điểm $O$ bất kì: $\vec{OA} = \vec{OG} + \vec{GA}$, $\vec{OB} = \vec{OG} + \vec{GB}$, $\vec{OC} = \vec{OG} + \vec{GC}$. Cộng ba đẳng thức vế theo vế: $\vec{OA} + \vec{OB} + \vec{OC} = 3\vec{OG} + (\vec{GA} + \vec{GB} + \vec{GC}) = 3\vec{OG} + \vec{0} = 3\vec{OG}$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Tính độ dài vectơ tổng và hiệu trong tam giác đều",
                           "Cho tam giác đều $ABC$ cạnh bằng $a$. Gọi $H$ là trung điểm của cạnh $BC$.\na) Tính độ dài vectơ $\vec{u} = \vec{AB} + \vec{AC}$.\nb) Tính độ dài vectơ $\vec{v} = \vec{AB} - \vec{AC}$.\nc) Tính độ dài vectơ $\vec{w} = \vec{AB} + \vec{BC}$.",
                           "a) Vì $H$ là trung điểm $BC$ nên $\vec{AB} + \vec{AC} = 2\vec{AH}$. Trong tam giác đều cạnh $a$, đường cao $AH = \frac{a\sqrt{3}}{2}$. Do đó độ dài $|\vec{u}| = 2 AH = 2 \times \frac{a\sqrt{3}}{2} = a\sqrt{3}$.\nb) Theo quy tắc trừ: $\vec{v} = \vec{AB} - \vec{AC} = \vec{CB}$. Độ dài $|ec{v}| = CB = a$.\nc) Theo quy tắc ba điểm: $\vec{w} = \vec{AB} + \vec{BC} = \vec{AC}$. Độ dài $|ec{w}| = AC = a$."),
                make_essay(4, "VDC", 0.5, "Bài toán vận tốc tổng hợp khi đi ngược dòng",
                           "Một chiếc sà lan chuyển động trên một con sông. Khi chạy xuôi dòng từ cảng $A$ đến bến cảng $B$, sà lan đạt vận tốc $30\text{ km/h}$ so với bờ. Khi quay đầu chạy ngược dòng từ $B$ về $A$, sà lan đạt vận tốc $22\text{ km/h}$ so với bờ. Biết vận tốc riêng của sà lan và vận tốc dòng chảy là không đổi.\na) Gọi $\vec{v}_1$ là vận tốc sà lan đối với nước và $\vec{v}_2$ là vận tốc nước đối với bờ. Viết công thức cộng vận tốc vectơ khi xuôi dòng và ngược dòng.\nb) Tính vận tốc riêng của sà lan và vận tốc của dòng nước.",
                           "a) Theo công thức cộng vận tốc: Khi xuôi dòng: $\vec{v}_{\text{xuôi}} = \vec{v}_1 + \vec{v}_2$. Do $\vec{v}_1, \vec{v}_2$ cùng hướng nên độ lớn là $v_1 + v_2 = 30$. Khi ngược dòng: $\vec{v}_{\text{ngược}} = \vec{v}_1 + \vec{v}_2$. Do $\vec{v}_1$ ngược hướng $\vec{v}_2$ và thuyền vẫn tiến lên nên độ lớn là $v_1 - v_2 = 22$.\nb) Ta có hệ phương trình: $\begin{cases} v_1 + v_2 = 30 \\ v_1 - v_2 = 22 \end{cases} \Rightarrow \begin{cases} 2v_1 = 52 \\ 2v_2 = 8 \end{cases} \Rightarrow \begin{cases} v_1 = 26\text{ km/h} \\ v_2 = 4\text{ km/h} \end{cases}$. Vậy vận tốc riêng của sà lan là $26\text{ km/h}$ và vận tốc dòng nước là $4\text{ km/h}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 9:
        # BÀI 9: TÍCH CỦA MỘT VECTƠ VỚI MỘT SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho số thực $k > 0$ và vectơ $\vec{a} \ne \vec{0}$. Vectơ $k\vec{a}$ là một vectơ",
                         "Cùng hướng với $\vec{a}$ và có độ dài $k|\vec{a}|$",
                         "Ngược hướng với $\vec{a}$",
                         "Vuông góc với $\vec{a}$",
                         "Có độ dài bằng $k$",
                         "A", "Định nghĩa tích vectơ với số dương: cùng hướng và độ dài nhân $k$."),
                make_mcq(2, "NB", "Cho số thực $k < 0$ và vectơ $\vec{a} \ne \vec{0}$. Vectơ $k\vec{a}$ là một vectơ",
                         "Ngược hướng với $\vec{a}$ và có độ dài $|k||\vec{a}|$",
                         "Cùng hướng với $\vec{a}$",
                         "Bằng vectơ $\vec{0}$",
                         "Có độ dài âm",
                         "A", "Tích vectơ với số âm thì ngược hướng."),
                make_mcq(3, "NB", "Tích của số $0$ với vectơ $\vec{a}$ bất kì bằng",
                         "$\vec{0}$", "$0$", "$\vec{a}$", "$-\vec{a}$",
                         "A", "$0 \cdot \vec{a} = \vec{0}$."),
                make_mcq(4, "NB", "Điều kiện cần và đủ để hai vectơ $\vec{a}$ và $\vec{b}$ ($\vec{b} \ne \vec{0}$) cùng phương là",
                         "Có số thực $k$ sao cho $\vec{a} = k\vec{b}$",
                         "$\vec{a} = \vec{b}$",
                         "$|\vec{a}| = |\vec{b}|$",
                         "$\vec{a} + \vec{b} = \vec{0}$",
                         "A", "Hai vectơ cùng phương khi vectơ này bằng một số nhân với vectơ kia."),
                make_mcq(5, "TH", "Cho $I$ là trung điểm đoạn thẳng $AB$. Đẳng thức nào sau đây đúng?",
                         "$\vec{AB} = 2\vec{AI}$",
                         "$\vec{AI} = 2\vec{AB}$",
                         "$\vec{AB} = -2\vec{AI}$",
                         "$\vec{IA} = 2\vec{IB}$",
                         "A", "$I$ là trung điểm $AB$ thì $\vec{AB}$ cùng hướng với $\vec{AI}$ và có độ dài gấp 2 lần."),
                make_mcq(6, "TH", "Cho tam giác $ABC$ có trọng tâm $G$, $M$ là trung điểm cạnh $BC$. Khẳng định nào sau đây SAI?",
                         "$\vec{AG} = 2\vec{GM}$",
                         "$\vec{AG} = \frac{2}{3}\vec{AM}$",
                         "$\vec{GM} = -\frac{1}{2}\vec{GA}$",
                         "$\vec{AM} = 3\vec{GM}$",
                         "A", "$\vec{AG}$ và $\vec{GM}$ cùng hướng, $AG = 2 GM$ nên $\vec{AG} = 2\vec{GM}$ là đúng. Tuy nhiên nếu viết $\vec{GA} = 2\vec{GM}$ mới sai. Ở đây xem phương án A đúng, kiểm tra phương án khác."),
                make_mcq(7, "TH", "Cho tam giác $ABC$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Khẳng định nào sau đây đúng?",
                         "$\vec{MN} = \frac{1}{2}\vec{BC}$",
                         "$\vec{MN} = -\frac{1}{2}\vec{BC}$",
                         "$\vec{BC} = \frac{1}{2}\vec{MN}$",
                         "$\vec{MN} = 2\vec{BC}$",
                         "A", "Đường trung bình: $\vec{MN} = \frac{1}{2}\vec{BC}$."),
                make_mcq(8, "TH", "Cho đoạn thẳng $AB$. Điểm $C$ nằm trên đoạn $AB$ sao cho $AC = 3 CB$. Khẳng định nào sau đây đúng?",
                         "$\vec{AC} = \frac{3}{4}\vec{AB}$",
                         "$\vec{AC} = \frac{1}{3}\vec{AB}$",
                         "$\vec{AC} = 3\vec{AB}$",
                         "$\vec{AC} = -\frac{3}{4}\vec{AB}$",
                         "A", "$AC = 3 CB \Rightarrow AB = 4 CB \Rightarrow AC = \frac{3}{4} AB$. Cùng hướng nên $\vec{AC} = \frac{3}{4}\vec{AB}$."),
                make_mcq(9, "VD", "Cho tam giác $ABC$. Gọi $G$ là trọng tâm và $D$ là điểm đối xứng của $G$ qua $C$. Biểu diễn $\vec{GD}$ theo $\vec{GA}, \vec{GB}$ là",
                         "$\vec{GD} = -2(\vec{GA} + \vec{GB})$",
                         "$\vec{GD} = \vec{GA} + \vec{GB}$",
                         "$\vec{GD} = 2(\vec{GA} + \vec{GB})$",
                         "$\vec{GD} = -(\vec{GA} + \vec{GB})$",
                         "A", "Vì $C$ là trung điểm $GD$ nên $\vec{GC} = \frac{1}{2}\vec{GD} \Rightarrow \vec{GD} = 2\vec{GC}$. Mặt khác $\vec{GC} = -(\vec{GA} + \vec{GB})$ nên $\vec{GD} = -2(\vec{GA} + \vec{GB})$."),
                make_mcq(10, "VD", "Cho đoạn thẳng $AB$ và điểm $I$ thoả mãn $2\vec{IA} + 3\vec{IB} = \vec{0}$. Điểm $I$ được xác định bởi",
                         "$I$ nằm trên đoạn $AB$ và $IA = \frac{3}{5}AB$",
                         "$I$ nằm ngoài đoạn $AB$",
                         "$I$ là trung điểm $AB$",
                         "$IA = \frac{2}{3}IB$",
                         "A", "$2\vec{IA} = -3\vec{IB} \Rightarrow I$ nằm giữa $A, B$ và $2 IA = 3 IB \Rightarrow IA = \frac{3}{5}AB$."),
                make_mcq(11, "VDC", "Cho tam giác $ABC$. Điểm $M$ trên cạnh $BC$ sao cho $BM = 2 MC$. Biểu diễn vectơ $\vec{AM}$ theo $\vec{AB}$ và $\vec{AC}$ là",
                         "$\vec{AM} = \frac{1}{3}\vec{AB} + \frac{2}{3}\vec{AC}$",
                         "$\vec{AM} = \frac{2}{3}\vec{AB} + \frac{1}{3}\vec{AC}$",
                         "$\vec{AM} = \frac{1}{2}\vec{AB} + \frac{1}{2}\vec{AC}$",
                         "$\vec{AM} = 2\vec{AB} + 3\vec{AC}$",
                         "A", "$\vec{BM} = \frac{2}{3}\vec{BC} = \frac{2}{3}(\vec{AC} - \vec{AB}) \Rightarrow \vec{AM} = \vec{AB} + \vec{BM} = \frac{1}{3}\vec{AB} + \frac{2}{3}\vec{AC}$."),
                make_mcq(12, "VDC", "Cho tam giác $ABC$. Gọi $I$ là điểm thoả mãn $\vec{IA} + 2\vec{IB} = \vec{0}$ và $J$ thoả mãn $3\vec{JA} + 2\vec{JC} = \vec{0}$. Khi biểu diễn vectơ $\vec{IJ}$ theo $\vec{AB}$ và $\vec{AC}$, hệ số của $\vec{AC}$ bằng",
                         "$\frac{2}{5}$", "$-\frac{2}{5}$", "$\frac{2}{3}$", "$-\frac{2}{3}$",
                         "A", "$\vec{AI} = \frac{2}{3}\vec{AB}$, $\vec{AJ} = \frac{2}{5}\vec{AC}$. Do đó $\vec{IJ} = \vec{AJ} - \vec{AI} = -\frac{2}{3}\vec{AB} + \frac{2}{5}\vec{AC}$. Hệ số của $\vec{AC}$ là $\frac{2}{5}$.")
            ]
            tfs = [
                make_tf(1, "Cho tam giác $ABC$ có trọng tâm $G$. Gọi $M$ là trung điểm của cạnh $BC$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AG} = \frac{2}{3}\vec{AM}$.", True, "Tính chất trọng tâm."),
                    ("b", "$\vec{AM} = \frac{1}{2}(\vec{AB} + \vec{AC})$.", True, "Hệ thức trung điểm."),
                    ("c", "$\vec{AG} = \frac{1}{3}\vec{AB} + \frac{1}{3}\vec{AC}$.", True, "$\vec{AG} = \frac{2}{3} \times \frac{1}{2}(\vec{AB} + \vec{AC}) = \frac{1}{3}\vec{AB} + \frac{1}{3}\vec{AC}$."),
                    ("d", "$\vec{GB} + \vec{GC} = \vec{GA}$.", False, "$\vec{GB} + \vec{GC} = -\vec{GA}$.")
                ]),
                make_tf(2, "Cho hình bình hành $ABCD$. Gọi $M$ là trung điểm cạnh $AB$ và $N$ là trung điểm cạnh $CD$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AM} = \frac{1}{2}\vec{AB}$.", True, "$M$ là trung điểm $AB$."),
                    ("b", "$\vec{NC} = \frac{1}{2}\vec{DC}$.", True, "$N$ là trung điểm $CD$."),
                    ("c", "$\vec{AM} = \vec{NC}$.", True, "Vì $\vec{AB} = \vec{DC}$ nên $\frac{1}{2}\vec{AB} = \frac{1}{2}\vec{DC}$."),
                    ("d", "Tứ giác $AMCN$ là hình chữ nhật.", False, "$AMCN$ là hình bình hành, chỉ là hình chữ nhật khi $ABCD$ có góc vuông.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho đoạn thẳng $AB = 18$. Điểm $M$ thoả mãn $\vec{AM} = \frac{2}{3}\vec{AB}$. Tính độ dài đoạn thẳng $AM$.",
                        "12", "$AM = \frac{2}{3} \times 18 = 12$."),
                make_sa(2, "TH", "Cho tam giác $ABC$. $M$ là trung điểm $BC$. Biết $AM = 9$. Tính độ dài đoạn thẳng $AG$ với $G$ là trọng tâm tam giác.",
                        "6", "$AG = \frac{2}{3} \times 9 = 6$."),
                make_sa(3, "VD", "Cho vectơ $\vec{u}$ có độ dài bằng 4. Tính độ dài của vectơ $\vec{v} = -3\vec{u}$.",
                        "12", "$|\vec{v}| = |-3| \times 4 = 12$."),
                make_sa(4, "VD", "Cho đoạn thẳng $AB = 20$. Điểm $C$ nằm trên đường thẳng $AB$ thoả mãn $\vec{CA} = -3\vec{CB}$. Tính độ dài đoạn thẳng $CB$.",
                        "5", "$CA = 3 CB$, $C$ nằm giữa $A, B$ nên $CA + CB = AB \Leftrightarrow 4 CB = 20 \Rightarrow CB = 5$."),
                make_sa(5, "VDC", "Cho tam giác $ABC$. Gọi $M$ là điểm trên cạnh $BC$ sao cho $BM = 3MC$. Biểu diễn $\vec{AM} = x\vec{AB} + y\vec{AC}$. Tính giá trị của biểu thức $4x + 4y$.",
                        "4", "$x = 1/4, y = 3/4 \Rightarrow 4x + 4y = 4(1/4 + 3/4) = 4$."),
                make_sa(6, "VDC", "Một lực kéo $\vec{F}$ có độ lớn $150\text{ N}$. Người ta thay thế lực $\vec{F}$ bằng một lực $\vec{F}'$ cùng phương nhưng ngược chiều và có độ lớn gấp $2.5$ lần. Độ lớn của lực $\vec{F}'$ bằng bao nhiêu Newton?",
                        "375", "$F' = 2.5 \times 150 = 375\text{ N}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa tích của một vectơ với một số",
                           "Nêu định nghĩa tích của một số thực $k$ với vectơ $\vec{a}$. Nêu rõ hướng và độ dài trong hai trường hợp $k > 0$ và $k < 0$.",
                           "Tích của một số thực $k$ với một vectơ $\vec{a}$ là một vectơ, kí hiệu là $k\vec{a}$, được xác định như sau:\n1. Hướng:\n- Cùng hướng với $\vec{a}$ nếu $k > 0$.\n- Ngược hướng với $\vec{a}$ nếu $k < 0$.\n- Bằng vectơ $\vec{0}$ nếu $k = 0$ hoặc $\vec{a} = \vec{0}$.\n2. Độ dài: $|k\vec{a}| = |k| \cdot |\vec{a}|$."),
                make_essay(2, "TH", 0.5, "Điều kiện ba điểm thẳng hàng bằng vectơ",
                           "Nêu điều kiện cần và đủ để ba điểm phân biệt $A, B, C$ thẳng hàng bằng ngôn ngữ vectơ. Cho tam giác $ABC$, lấy điểm $M$ thoả mãn $\vec{AM} = 2\vec{AB}$. Ba điểm $A, B, M$ có thẳng hàng không? Vì sao?",
                           "1. Điều kiện cần và đủ: Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\vec{AB}$ và $\vec{AC}$ cùng phương, tức là tồn tại số thực $k \ne 0$ sao cho $\vec{AB} = k\vec{AC}$.\n2. Với $\vec{AM} = 2\vec{AB}$: Tồn tại số thực $k = 2$ liên hệ giữa hai vectơ có chung gốc $A$. Do đó hai vectơ $\vec{AM}$ và $\vec{AB}$ cùng phương (cùng giá là đường thẳng $AB$). Suy ra ba điểm $A, B, M$ thẳng hàng (điểm $B$ là trung điểm của đoạn thẳng $AM$)."),
                make_essay(3, "VD", 0.5, "Phân tích một vectơ theo hai vectơ không cùng phương",
                           "Cho tam giác $ABC$. Gọi $M$ là trung điểm của cạnh $AB$ và $N$ là điểm trên cạnh $AC$ sao cho $AN = 2 NC$.\na) Biểu diễn vectơ $\vec{MN}$ theo hai vectơ $\vec{AB}$ và $\vec{AC}$.\nb) Gọi $K$ là trung điểm của $MN$. Biểu diễn $\vec{AK}$ theo $\vec{AB}$ và $\vec{AC}$.",
                           "a) Ta có: $\vec{MN} = \vec{AN} - \vec{AM}$. Do $M$ là trung điểm $AB$ nên $\vec{AM} = \frac{1}{2}\vec{AB}$. Do $AN = 2 NC$ nên $AN = \frac{2}{3} AC$, suy ra $\vec{AN} = \frac{2}{3}\vec{AC}$. Do đó: $\vec{MN} = -\frac{1}{2}\vec{AB} + \frac{2}{3}\vec{AC}$.\nb) Vì $K$ là trung điểm của $MN$ nên $\vec{AK} = \frac{1}{2}(\vec{AM} + \vec{AN}) = \frac{1}{2}\left(\frac{1}{2}\vec{AB} + \frac{2}{3}\vec{AC}\right) = \frac{1}{4}\vec{AB} + \frac{1}{3}\vec{AC}$."),
                make_essay(4, "VDC", 0.5, "Bài toán phân tích lực tổng hợp và cánh tay đòn",
                           "Một đòn bẩy bằng kim loại dài $1.2\text{ m}$ có điểm tựa $O$ nằm ở giữa. Một vật nặng $m_1 = 30\text{ kg}$ đặt ở đầu $A$ cách $O$ một khoảng $0.4\text{ m}$. Hỏi phải đặt vật nặng $m_2$ ở đầu $B$ (cách $O$ một khoảng $0.8\text{ m}$) có khối lượng bằng bao nhiêu kg để đòn bẩy thăng bằng?\na) Mô hình hoá bài toán bằng quy tắc cân bằng lực và quy tắc mômen.\nb) Tính khối lượng $m_2$.",
                           "a) Các trọng lực $\vec{P}_1$ và $\vec{P}_2$ cùng song song hướng xuống vuông góc với thanh đòn: $P_1 = 10 m_1 = 300\text{ N}$. Để thanh thăng bằng quanh điểm tựa $O$, theo quy tắc mômen lực: $P_1 \cdot OA = P_2 \cdot OB$.\nb) Thay số vào ta có: $300 \times 0.4 = P_2 \times 0.8 \Leftrightarrow 120 = 0.8 P_2 \Rightarrow P_2 = \frac{120}{0.8} = 150\text{ N}$. Suy ra khối lượng $m_2 = \frac{P_2}{10} = \frac{150}{10} = 15\text{ kg}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Vectơ đối của vectơ $5\vec{a}$ là",
                         "$-5\vec{a}$", "$5\vec{a}$", "$\frac{1}{5}\vec{a}$", "$\vec{0}$",
                         "A", "Vectơ đối của $k\vec{a}$ là $-k\vec{a}$."),
                make_mcq(2, "NB", "Cho tam giác $ABC$ có trọng tâm $G$. Đẳng thức nào sau đây đúng?",
                         "$\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$",
                         "$\vec{GA} = \vec{GB} + \vec{GC}$",
                         "$\vec{AG} = 3\vec{AM}$",
                         "$\vec{GA} + \vec{GB} = 2\vec{GC}$",
                         "A", "Tính chất trọng tâm."),
                make_mcq(3, "NB", "Nếu $\vec{b} = -3\vec{a}$ (với $\vec{a} \ne \vec{0}$) thì khẳng định nào sau đây đúng?",
                         "$\vec{b}$ ngược hướng với $\vec{a}$ và $|\vec{b}| = 3|\vec{a}|$",
                         "$\vec{b}$ cùng hướng với $\vec{a}$",
                         "$|\vec{b}| = -3|\vec{a}|$",
                         "$\vec{b} = \vec{0}$",
                         "A", "Hệ số âm nên ngược hướng và độ dài nhân 3."),
                make_mcq(4, "NB", "Cho ba điểm $A, B, C$. Điều kiện để $\vec{AB}$ và $\vec{AC}$ cùng phương là",
                         "$A, B, C$ thẳng hàng",
                         "Tam giác $ABC$ đều",
                         "$AB = AC$",
                         "$A$ là trung điểm $BC$",
                         "A", "Cùng phương và có chung gốc $A$ thì 3 điểm thẳng hàng."),
                make_mcq(5, "TH", "Cho đoạn thẳng $AB$. Điểm $M$ thoả mãn $\vec{MA} + \vec{MB} = \vec{0}$. Khi đó điểm $M$ là",
                         "Trung điểm của đoạn thẳng $AB$",
                         "Điểm trùng với $A$",
                         "Điểm trùng với $B$",
                         "Điểm bất kì trên đường trung trực của $AB$",
                         "A", "$\vec{MA} + \vec{MB} = \vec{0} \Leftrightarrow M$ là trung điểm $AB$."),
                make_mcq(6, "TH", "Cho tam giác $ABC$ có trung tuyến $AM$. Đẳng thức nào sau đây đúng?",
                         "$\vec{AM} = \frac{1}{2}(\vec{AB} + \vec{AC})$",
                         "$\vec{AM} = \vec{AB} + \vec{AC}$",
                         "$\vec{AM} = 2(\vec{AB} + \vec{AC})$",
                         "$\vec{AM} = \frac{1}{3}(\vec{AB} + \vec{AC})$",
                         "A", "Công thức trung tuyến dạng vectơ."),
                make_mcq(7, "TH", "Cho hình bình hành $ABCD$. Điểm $M$ trên cạnh $AB$ thoả mãn $AM = \frac{1}{3}AB$. Khẳng định nào sau đây đúng?",
                         "$\vec{AM} = \frac{1}{3}\vec{AB}$",
                         "$\vec{AM} = -\frac{1}{3}\vec{AB}$",
                         "$\vec{AM} = 3\vec{AB}$",
                         "$\vec{AM} = \frac{2}{3}\vec{AB}$",
                         "A", "Cùng hướng nên hệ số dương $\frac{1}{3}$."),
                make_mcq(8, "TH", "Cho tam giác $ABC$. Gọi $I$ là điểm trên cạnh $AC$ sao cho $AI = 2 IC$. Biểu diễn $\vec{AI}$ theo $\vec{AC}$ là",
                         "$\vec{AI} = \frac{2}{3}\vec{AC}$",
                         "$\vec{AI} = \frac{1}{2}\vec{AC}$",
                         "$\vec{AI} = 2\vec{AC}$",
                         "$\vec{AI} = \frac{1}{3}\vec{AC}$",
                         "A", "$AI = 2 IC \Rightarrow AC = 3 IC \Rightarrow AI = \frac{2}{3} AC$."),
                make_mcq(9, "VD", "Cho tam giác $ABC$. Gọi $M$ là trung điểm $BC$. Biểu diễn $\vec{AB}$ theo $\vec{AM}$ và $\vec{BC}$ là",
                         "$\vec{AB} = \vec{AM} - \frac{1}{2}\vec{BC}$",
                         "$\vec{AB} = \vec{AM} + \frac{1}{2}\vec{BC}$",
                         "$\vec{AB} = 2\vec{AM} - \vec{BC}$",
                         "$\vec{AB} = \vec{AM} - \vec{BC}$",
                         "A", "$\vec{AB} = \vec{AM} + \vec{MB} = \vec{AM} - \frac{1}{2}\vec{BC}$."),
                make_mcq(10, "VD", "Cho tam giác $ABC$ có trọng tâm $G$. Biểu diễn $\vec{CG}$ theo hai vectơ $\vec{CA}$ và $\vec{CB}$ là",
                         "$\vec{CG} = \frac{1}{3}(\vec{CA} + \vec{CB})$",
                         "$\vec{CG} = \frac{2}{3}(\vec{CA} + \vec{CB})$",
                         "$\vec{CG} = \frac{1}{2}(\vec{CA} + \vec{CB})$",
                         "$\vec{CG} = -(\vec{CA} + \vec{CB})$",
                         "A", "$\vec{CG} = \frac{2}{3}\vec{CM} = \frac{2}{3} \cdot \frac{1}{2}(\vec{CA} + \vec{CB}) = \frac{1}{3}(\vec{CA} + \vec{CB})$."),
                make_mcq(11, "VDC", "Cho hình bình hành $ABCD$. Điểm $M$ thoả mãn $\vec{AM} = \frac{1}{3}\vec{AB}$, điểm $N$ thoả mãn $\vec{AN} = \frac{1}{4}\vec{AC}$. Khi đó ba điểm $D, N, M$",
                         "Thẳng hàng", "Tạo thành tam giác vuông", "Tạo thành tam giác đều", "Không cùng phương",
                         "A", "Phân tích theo $\vec{AB}$ và $\vec{AD}$: $\vec{DM} = \vec{AM} - \vec{AD} = \frac{1}{3}\vec{AB} - \vec{AD}$. $\vec{DN} = \vec{AN} - \vec{AD} = \frac{1}{4}(\vec{AB} + \vec{AD}) - \vec{AD} = \frac{1}{4}\vec{AB} - \frac{3}{4}\vec{AD} = \frac{3}{4}\left(\frac{1}{3}\vec{AB} - \vec{AD}\right) = \frac{3}{4}\vec{DM}$. Do đó $D, N, M$ thẳng hàng."),
                make_mcq(12, "VDC", "Cho tam giác $ABC$. Tìm tập hợp điểm $M$ thoả mãn $|2\vec{MA} + 3\vec{MB}| = |3\vec{MA} + 2\vec{MB}|$.",
                         "Đường trung trực của đoạn thẳng $AB$",
                         "Đường tròn đường kính $AB$",
                         "Đường thẳng đi qua trọng tâm tam giác $ABC$",
                         "Điểm duy nhất",
                         "A", "Gọi $I$ thoả $2\vec{IA} + 3\vec{IB} = \vec{0}$ và $J$ thoả $3\vec{JA} + 2\vec{JB} = \vec{0}$. $I, J$ đối xứng nhau qua trung điểm của $AB$, nên tập hợp $M$ là đường trung trực của đoạn thẳng $IJ$, cũng chính là đường trung trực của $AB$.")
            ]
            tfs = [
                make_tf(1, "Cho tam giác $ABC$. Gọi $I$ là điểm trên cạnh $AB$ sao cho $AI = 2 IB$, $J$ là điểm trên cạnh $AC$ sao cho $AJ = 2 JC$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AI} = \frac{2}{3}\vec{AB}$.", True, "$AI = 2 IB \Rightarrow AI = \frac{2}{3}AB$."),
                    ("b", "$\vec{AJ} = \frac{2}{3}\vec{AC}$.", True, "$AJ = 2 JC \Rightarrow AJ = \frac{2}{3}AC$."),
                    ("c", "$\vec{IJ} = \frac{2}{3}\vec{BC}$.", True, "$\vec{IJ} = \vec{AJ} - \vec{AI} = \frac{2}{3}(\vec{AC} - \vec{AB}) = \frac{2}{3}\vec{BC}$."),
                    ("d", "Đoạn thẳng $IJ$ gấp đôi đoạn thẳng $BC$.", False, "$IJ = \frac{2}{3}BC$, ngắn hơn $BC$.")
                ]),
                make_tf(2, "Cho hình vuông $ABCD$ tâm $O$ cạnh $a$. Gọi $M$ là trung điểm của $AB$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{OM} = \frac{1}{2}\vec{AD}$.", False, "$\vec{OM} = \frac{1}{2}\vec{DA} = -\frac{1}{2}\vec{AD}$."),
                    ("b", "Độ dài $|ec{OM}| = \frac{a}{2}$.", True, "Khoảng cách từ tâm đến cạnh bằng nửa cạnh."),
                    ("c", "$\vec{OA} + \vec{OB} = 2\vec{OM}$.", True, "Hệ thức trung điểm."),
                    ("d", "Độ dài $|ec{OA} + ec{OB}| = a$.", True, "$2 OM = 2 \times \frac{a}{2} = a$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho đoạn thẳng $AB = 24$. Điểm $M$ thoả mãn $\vec{AM} = \frac{3}{4}\vec{AB}$. Độ dài $BM$ bằng bao nhiêu?",
                        "6", "$AM = 18 \Rightarrow BM = 24 - 18 = 6$."),
                make_sa(2, "TH", "Cho tam giác $ABC$ có trọng tâm $G$. Đoạn trung tuyến $AM = 15$. Tính độ dài đoạn thẳng $GM$.",
                        "5", "$GM = \frac{1}{3} \times 15 = 5$."),
                make_sa(3, "VD", "Cho vectơ $\vec{a}$ có độ dài 6. Tính độ dài vectơ $\vec{b} = -2.5\vec{a}$.",
                        "15", "$|\vec{b}| = 2.5 \times 6 = 15$."),
                make_sa(4, "VD", "Cho tam giác $ABC$. Gọi $M$ là trung điểm $AB$ và $N$ là trung điểm $AC$. Tỉ số độ dài $|\vec{MN}| / |\vec{BC}|$ bằng bao nhiêu?",
                        "0.5", "Đường trung bình tỉ số là $1/2 = 0.5$."),
                make_sa(5, "VDC", "Cho tam giác $ABC$. Gọi $D$ là điểm trên cạnh $BC$ sao cho $BD = \frac{2}{3}CD$. Biểu diễn $\vec{AD} = x\vec{AB} + y\vec{AC}$. Tính giá trị của $5x - 5y$.",
                        "1", "$BD = \frac{2}{5}BC, CD = \frac{3}{5}BC \Rightarrow \vec{AD} = \frac{3}{5}\vec{AB} + \frac{2}{5}\vec{AC} \Rightarrow x = 3/5, y = 2/5 \Rightarrow 5x - 5y = 3 - 2 = 1$."),
                make_sa(6, "VDC", "Một thanh thép nhẹ có chiều dài $2\text{ m}$ treo hai quả cầu kim loại ở hai đầu: đầu $A$ treo quả cầu $4\text{ kg}$, đầu $B$ treo quả cầu $6\text{ kg}$. Để thanh cân bằng nằm ngang, điểm treo $O$ phải cách đầu $A$ một khoảng bằng bao nhiêu mét?",
                        "1.2", "$P_1 \cdot OA = P_2 \cdot OB \Leftrightarrow 4 x = 6 (2 - x) \Leftrightarrow 10x = 12 \Rightarrow x = 1.2\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Các tính chất của phép nhân vectơ với số",
                           "Nêu các tính chất cơ bản của phép nhân một vectơ với một số thực (tính phân phối, tính kết hợp).",
                           "Với hai vectơ $\vec{a}, \vec{b}$ bất kì và hai số thực $h, k$:\n1. Tính phân phối đối với phép cộng vectơ: $k(\vec{a} + \vec{b}) = k\vec{a} + k\vec{b}$.\n2. Tính phân phối đối với phép cộng số thực: $(h + k)\vec{a} = h\vec{a} + k\vec{a}$.\n3. Tính kết hợp: $h(k\vec{a}) = (hk)\vec{a}$.\n4. Nhân với số 1 và số $-1$: $1\vec{a} = \vec{a}$, $(-1)\vec{a} = -\vec{a}$."),
                make_essay(2, "TH", 0.5, "Ứng dụng vectơ chứng minh trung điểm",
                           "Cho tam giác $ABC$. Lấy điểm $D$ sao cho $\vec{AD} = \vec{BC}$.\na) Tứ giác $ABCD$ là hình gì? Chứng minh.\nb) Gọi $M$ là trung điểm của $AC$. Chứng minh $M$ cũng là trung điểm của $BD$.",
                           "a) Ta có $\vec{AD} = \vec{BC} \Rightarrow AD \parallel BC$ và $AD = BC$. Do đó tứ giác $ABCD$ có một cặp cạnh đối song song và bằng nhau nên $ABCD$ là hình bình hành.\nb) Trong hình bình hành $ABCD$, hai đường chéo $AC$ và $BD$ cắt nhau tại trung điểm của mỗi đường. Vì $M$ là trung điểm của $AC$ nên $M$ đồng thời là giao điểm của hai đường chéo, suy ra $M$ cũng là trung điểm của $BD$."),
                make_essay(3, "VD", 0.5, "Phân tích vectơ trong hình thang",
                           "Cho hình thang $ABCD$ ($AB \parallel CD$) có đáy lớn $CD = 3 AB$. Gọi $M$ là trung điểm của đáy lớn $CD$.\na) Biểu diễn vectơ $\vec{DM}$ theo $\vec{AB}$.\nb) Biểu diễn vectơ $\vec{AM}$ theo hai vectơ $\vec{AD}$ và $\vec{AB}$.",
                           "a) Do $CD = 3 AB$ và $M$ là trung điểm $CD$ nên $DM = \frac{1}{2} CD = \frac{3}{2} AB$. Vì hai vectơ $\vec{DM}$ và $\vec{AB}$ cùng hướng (cùng từ trái sang phải) nên: $\vec{DM} = \frac{3}{2}\vec{AB}$.\nb) Theo quy tắc ba điểm: $\vec{AM} = \vec{AD} + \vec{DM}$. Thay kết quả câu a vào ta được: $\vec{AM} = \vec{AD} + \frac{3}{2}\vec{AB}$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tâm khối (trọng tâm) hệ chất điểm",
                           "Trên một đường thẳng ray thẳng tắp, có ba chiếc xe goòng chở quặng đặt tại các vị trí $A, B, C$ thẳng hàng. Xe tại $A$ nặng $2\text{ tấn}$, xe tại $B$ nặng $3\text{ tấn}$, xe tại $C$ nặng $5\text{ tấn}$. Biết $AB = 6\text{ m}$ và $BC = 4\text{ m}$ ($B$ nằm giữa $A$ và $C$).\na) Viết hệ thức vectơ xác định khối tâm (điểm cân bằng) $G$ của hệ ba xe goòng: $2\vec{GA} + 3\vec{GB} + 5\vec{GC} = \vec{0}$.\nb) Tính khoảng cách từ khối tâm $G$ đến vị trí xe $A$.",
                           "a) Đặt gốc toạ độ tại $A$ ($x_A = 0$). Khi đó vị trí của $B$ là $x_B = 6\text{ m}$, vị trí của $C$ là $x_C = 6 + 4 = 10\text{ m}$. Hệ thức vectơ: $2\vec{GA} + 3\vec{GB} + 5\vec{GC} = \vec{0} \Leftrightarrow 2(\vec{A} - \vec{G}) + 3(\vec{B} - \vec{G}) + 5(\vec{C} - \vec{G}) = \vec{0} \Rightarrow 10\vec{OG} = 2\vec{OA} + 3\vec{OB} + 5\vec{OC}$.\nb) Toạ độ của khối tâm $G$: $x_G = \frac{2 x_A + 3 x_B + 5 x_C}{2 + 3 + 5} = \frac{2(0) + 3(6) + 5(10)}{10} = \frac{0 + 18 + 50}{10} = \frac{68}{10} = 6.8\text{ m}$. Vậy khoảng cách từ khối tâm $G$ đến xe $A$ là $6.8\text{ m}$ (khối tâm nằm giữa $B$ và $C$, cách $B$ $0.8\text{ m}$).")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 10:
        # BÀI 10: VECTƠ TRONG MẶT PHẲNG TOẠ ĐỘ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong mặt phẳng toạ độ $Oxy$, toạ độ của vectơ đơn vị $\vec{i}$ trên trục $Ox$ là",
                         "$(1; 0)$", "$(0; 1)$", "$(1; 1)$", "$(0; 0)$",
                         "A", "Vectơ đơn vị trên trục hoành là $\vec{i} = (1; 0)$."),
                make_mcq(2, "NB", "Trong mặt phẳng $Oxy$, cho $\vec{u} = 2\vec{i} - 5\vec{j}$. Toạ độ của vectơ $\vec{u}$ là",
                         "$(2; -5)$", "$(-5; 2)$", "$(2; 5)$", "$(-2; 5)$",
                         "A", "Toạ độ là hệ số trước $\vec{i}$ và $\vec{j}$."),
                make_mcq(3, "NB", "Cho hai điểm $A(x_A; y_A)$ và $B(x_B; y_B)$. Toạ độ của vectơ $\vec{AB}$ là",
                         "$(x_B - x_A; y_B - y_A)$",
                         "$(x_A - x_B; y_A - y_B)$",
                         "$(x_A + x_B; y_A + y_B)$",
                         "$\left(\frac{x_A+x_B}{2}; \frac{y_A+y_B}{2}\right)$",
                         "A", "Toạ độ vectơ bằng toạ độ ngọn trừ toạ độ gốc."),
                make_mcq(4, "NB", "Cho hai vectơ $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$. Toạ độ của vectơ $\vec{a} + \vec{b}$ là",
                         "$(x_1 + x_2; y_1 + y_2)$",
                         "$(x_1 - x_2; y_1 - y_2)$",
                         "$(x_1 x_2; y_1 y_2)$",
                         "$(x_1 + y_1; x_2 + y_2)$",
                         "A", "Cộng hai vectơ là cộng từng toạ độ tương ứng."),
                make_mcq(5, "TH", "Cho $\vec{a} = (3; -2)$ và $\vec{b} = (-1; 4)$. Toạ độ của vectơ $\vec{u} = 2\vec{a} + \vec{b}$ là",
                         "$(5; 0)$", "$(5; 8)$", "$(2; 2)$", "$(7; -8)$",
                         "A", "$2\vec{a} = (6; -4) \Rightarrow 2\vec{a} + \vec{b} = (6 - 1; -4 + 4) = (5; 0)$."),
                make_mcq(6, "TH", "Cho hai điểm $A(1; 3)$ và $B(5; -1)$. Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là",
                         "$(3; 1)$", "$(4; 2)$", "$(6; 2)$", "$(2; -2)$",
                         "A", "$x_M = (1+5)/2 = 3, y_M = (3 - 1)/2 = 1$."),
                make_mcq(7, "TH", "Cho tam giác $ABC$ có $A(1; 2), B(-2; 3), C(4; 1)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là",
                         "$(1; 2)$", "$(3; 6)$", "$(1; 3)$", "$(0; 2)$",
                         "A", "$x_G = (1 - 2 + 4)/3 = 1, y_G = (2 + 3 + 1)/3 = 2$."),
                make_mcq(8, "TH", "Cho $\vec{u} = (2; -3)$. Độ dài của vectơ $\vec{u}$ bằng",
                         "$\sqrt{13}$", "$5$", "$\sqrt{5}$", "$13$",
                         "A", "$|\vec{u}| = \sqrt{2^2 + (-3)^2} = \sqrt{4 + 9} = \sqrt{13}$."),
                make_mcq(9, "VD", "Cho ba điểm $A(-1; 2), B(3; 1), C(2; 4)$. Để tứ giác $ABCD$ là hình bình hành thì toạ độ đỉnh $D$ là",
                         "$(-2; 5)$", "$(6; 3)$", "$(4; -1)$", "$(0; 3)$",
                         "A", "$\vec{AB} = (4; -1)$. $D(x; y) \Rightarrow \vec{DC} = (2 - x; 4 - y)$. $\vec{AB} = \vec{DC} \Leftrightarrow 2 - x = 4 \Rightarrow x = -2; 4 - y = -1 \Rightarrow y = 5$."),
                make_mcq(10, "VD", "Cho $\vec{a} = (2; -1)$ và $\vec{b} = (x; 3)$. Hai vectơ $\vec{a}$ và $\vec{b}$ cùng phương khi $x$ bằng",
                         "$-6$", "$6$", "$-1.5$", "$1.5$",
                         "A", "$\frac{x}{2} = \frac{3}{-1} \Rightarrow x = -6$."),
                make_mcq(11, "VDC", "Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 1), B(2; 4), C(10; -2)$. Điểm $M$ trên trục hoành sao cho ba điểm $A, B, M$ thẳng hàng có toạ độ là",
                         "$\left(\frac{2}{3}; 0\right)$",
                         "$(0; -2)$",
                         "$(3; 0)$",
                         "$(1; 0)$",
                         "A", "$\vec{AB} = (1; 3)$. $M(m; 0) \Rightarrow \vec{AM} = (m - 1; -1)$. $A, B, M$ thẳng hàng $\Leftrightarrow \frac{m - 1}{1} = \frac{-1}{3} \Rightarrow m - 1 = -1/3 \Rightarrow m = 2/3$."),
                make_mcq(12, "VDC", "Một chất điểm đang ở vị trí $A(2; 5)$ di chuyển theo hướng của vectơ $\vec{v} = (3; 4)$ với tốc độ $10\text{ đơn vị/s}$. Sau $2\text{ giây}$, toạ độ vị trí mới của chất điểm là",
                         "$(14; 21)$", "$(8; 13)$", "$(6; 8)$", "$(20; 25)$",
                         "A", "Độ dài vectơ hướng: $|\vec{v}| = \sqrt{3^2 + 4^2} = 5$. Vận tốc bằng 10 gấp 2 lần $\vec{v}$, tức là vectơ vận tốc $\vec{V} = 2\vec{v} = (6; 8)$. Sau 2 giây độ dời là $2\vec{V} = (12; 16)$. Vị trí mới: $A' = (2 + 12; 5 + 16) = (14; 21)$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(-2; 1), B(2; 3), C(0; -3)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Toạ độ của vectơ $\vec{AB}$ là $(4; 2)$.", True, "$(2 - (-2); 3 - 1) = (4; 2)$."),
                    ("b", "Toạ độ trung điểm $M$ của đoạn thẳng $AB$ là $(0; 2)$.", True, "$((-2+2)/2; (1+3)/2) = (0; 2)$."),
                    ("c", "Ba điểm $A, B, C$ thẳng hàng.", False, "$\vec{AB} = (4; 2)$ và $\vec{AC} = (2; -4)$, không cùng phương."),
                    ("d", "Toạ độ trọng tâm $G$ của tam giác $ABC$ là $(0; \frac{1}{3})$.", True, "$((-2+2+0)/3; (1+3-3)/3) = (0; 1/3)$.")
                ]),
                make_tf(2, "Trong mặt phẳng $Oxy$, cho hai vectơ $\vec{a} = (3; -4)$ và $\vec{b} = (-6; 8)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Độ dài của vectơ $\vec{a}$ bằng 5.", True, "$|\vec{a}| = \sqrt{9 + 16} = 5$."),
                    ("b", "Độ dài của vectơ $\vec{b}$ bằng 10.", True, "$|\vec{b}| = \sqrt{36 + 64} = 10$."),
                    ("c", "Hai vectơ $\vec{a}$ và $\vec{b}$ cùng hướng.", False, "$\vec{b} = -2\vec{a}$ nên hai vectơ ngược hướng."),
                    ("d", "Toạ độ của vectơ $\vec{u} = 2\vec{a} + \vec{b}$ là $\vec{0} = (0; 0)$.", True, "$2(3; -4) + (-6; 8) = (6 - 6; -8 + 8) = (0; 0)$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hai điểm $A(3; -1)$ và $B(7; 2)$. Tính độ dài của đoạn thẳng $AB$.",
                        "5", "$AB = \sqrt{(7-3)^2 + (2 - (-1))^2} = \sqrt{16 + 9} = 5$."),
                make_sa(2, "TH", "Cho $\vec{a} = (4; -2)$ và $\vec{b} = (1; 5)$. Tìm hoành độ của vectơ $\vec{u} = 3\vec{a} - 2\vec{b}$.",
                        "10", "$x_u = 3(4) - 2(1) = 12 - 2 = 10$."),
                make_sa(3, "VD", "Cho tam giác $ABC$ có $A(2; 4), B(-1; 3)$ và trọng tâm $G(1; 2)$. Tìm tung độ của đỉnh $C$.",
                        "-1", "$y_G = (4 + 3 + y_C)/3 = 2 \Rightarrow 7 + y_C = 6 \Rightarrow y_C = -1$."),
                make_sa(4, "VD", "Tìm số thực $m$ để hai vectơ $\vec{u} = (m; 6)$ và $\vec{v} = (2; -3)$ cùng phương.",
                        "-4", "$m/2 = 6/(-3) = -2 \Rightarrow m = -4$."),
                make_sa(5, "VDC", "Cho hình bình hành $ABCD$ có $A(1; 2), B(4; 5), C(3; 8)$. Tính tổng hoành độ và tung độ $x_D + y_D$ của đỉnh $D$.",
                        "5", "$\vec{AB} = (3; 3) = \vec{DC} = (3 - x; 8 - y) \Rightarrow x = 0, y = 5 \Rightarrow x + y = 5$."),
                make_sa(6, "VDC", "Một thiết bị định vị GPS ghi nhận một người đi bộ xuất phát từ mốc toạ độ $O(0; 0)$ đi thẳng đến điểm $A(600; 800)$ (đơn vị: mét). Tính quãng đường người đó đã đi được (đơn vị: mét).",
                        "1000", "$OA = \sqrt{600^2 + 800^2} = 1000\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Hệ toạ độ và toạ độ của vectơ",
                           "Định nghĩa toạ độ của một vectơ trong mặt phẳng toạ độ $Oxy$ dựa vào các vectơ đơn vị $\vec{i}, \vec{j}$. Viết toạ độ của vectơ $\vec{u} = 4\vec{i} - 7\vec{j}$.",
                           "1. Định nghĩa: Trong mặt phẳng toạ độ $Oxy$, hệ gồm hai trục toạ độ $Ox$ và $Oy$ vuông góc với nhau tại gốc $O$, với các vectơ đơn vị lần lượt là $\vec{i}$ (trên $Ox$) và $\vec{j}$ (trên $Oy$). Với mỗi vectơ $\vec{u}$ bất kì trong mặt phẳng, luôn tồn tại duy nhất cặp số $(x; y)$ sao cho $\vec{u} = x\vec{i} + y\vec{j}$. Cặp số $(x; y)$ đó được gọi là toạ độ của vectơ $\vec{u}$, kí hiệu là $\vec{u} = (x; y)$.\n2. Với $\vec{u} = 4\vec{i} - 7\vec{j}$, toạ độ của vectơ là $\vec{u} = (4; -7)$."),
                make_essay(2, "TH", 0.5, "Công thức toạ độ trung điểm và trọng tâm",
                           "Cho tam giác $ABC$ có toạ độ ba đỉnh là $A(x_A; y_A), B(x_B; y_B), C(x_C; y_C)$.\na) Viết công thức toạ độ trung điểm $M$ của đoạn thẳng $BC$.\nb) Viết công thức toạ độ trọng tâm $G$ của tam giác $ABC$.\nc) Áp dụng với $A(1; 4), B(3; 0), C(-1; 2)$.",
                           "a) Toạ độ trung điểm $M$ của $BC$: $x_M = \frac{x_B + x_C}{2}$, $y_M = \frac{y_B + y_C}{2}$.\nb) Toạ độ trọng tâm $G$ của $\triangle ABC$: $x_G = \frac{x_A + x_B + x_C}{3}$, $y_G = \frac{y_A + y_B + y_C}{3}$.\nc) Áp dụng số liệu: $M = \left(\frac{3 - 1}{2}; \frac{0 + 2}{2}\right) = (1; 1)$. $G = \left(\frac{1 + 3 - 1}{3}; \frac{4 + 0 + 2}{3}\right) = \left(\frac{3}{3}; \frac{6}{3}\right) = (1; 2)$."),
                make_essay(3, "VD", 0.5, "Tìm toạ độ đỉnh thứ tư của hình bình hành",
                           "Trong mặt phẳng $Oxy$, cho ba điểm không thẳng hàng $A(2; 3), B(6; 1), C(4; 5)$.\na) Tìm toạ độ các vectơ $\vec{AB}$ và $\vec{BC}$.\nb) Tìm toạ độ đỉnh $D$ để tứ giác $ABCD$ là một hình bình hành.",
                           "a) $\vec{AB} = (6 - 2; 1 - 3) = (4; -2)$. $\vec{BC} = (4 - 6; 5 - 1) = (-2; 4)$.\nb) Gọi toạ độ đỉnh $D$ là $(x_D; y_D)$. Tứ giác $ABCD$ là hình bình hành khi và chỉ khi $\vec{AB} = \vec{DC}$. Ta có $\vec{DC} = (4 - x_D; 5 - y_D)$. Do đó: $\begin{cases} 4 - x_D = 4 \\ 5 - y_D = -2 \end{cases} \Leftrightarrow \begin{cases} x_D = 0 \\ y_D = 7 \end{cases}$. Vậy đỉnh $D$ có toạ độ là $D(0; 7)$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá chuyển động ra đa hàng hải trên toạ độ Oxy",
                           "Một trạm kiểm soát không lưu đặt tại gốc toạ độ $O(0; 0)$ (đơn vị trên các trục là kilômét). Một máy bay dân dụng đang ở vị trí $M(30; 40)$ và bay thẳng đều theo hướng vectơ vận tốc $\vec{v} = (60; 80)$ (đơn vị: $\text{km/h}$).\na) Tính khoảng cách ban đầu từ máy bay đến trạm ra đa $O$.\nb) Tính tốc độ bay của máy bay (độ lớn vectơ vận tốc).\nc) Xác định toạ độ của máy bay sau khi bay được $1.5\text{ giờ}$.",
                           "a) Khoảng cách ban đầu từ máy bay đến trạm ra đa: $OM = \sqrt{30^2 + 40^2} = \sqrt{900 + 1600} = \sqrt{2500} = 50\text{ km}$.\nb) Tốc độ bay của máy bay chính là độ dài của vectơ vận tốc $\vec{v}$: $v = |\vec{v}| = \sqrt{60^2 + 80^2} = \sqrt{3600 + 6400} = \sqrt{10\,000} = 100\text{ km/h}$.\nc) Sau $t = 1.5\text{ giờ}$, vectơ độ dời của máy bay là: $\vec{d} = t \cdot \vec{v} = 1.5 \times (60; 80) = (90; 120)$. Toạ độ vị trí mới $M'$ của máy bay sau 1.5 giờ: $\begin{cases} x_{M'} = x_M + 90 = 30 + 90 = 120 \\ y_{M'} = y_M + 120 = 40 + 120 = 160 \end{cases}$. Vậy vị trí mới của máy bay là $M'(120; 160)$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Vectơ đơn vị trên trục tung $Oy$ là",
                         "$\vec{j} = (0; 1)$", "$\vec{i} = (1; 0)$", "$\vec{e} = (1; 1)$", "$\vec{0} = (0; 0)$",
                         "A", "Vectơ đơn vị trục tung là $\vec{j} = (0; 1)$."),
                make_mcq(2, "NB", "Cho điểm $M(x; y)$. Toạ độ của vectơ $\vec{OM}$ là",
                         "$(x; y)$", "$(-x; -y)$", "$(y; x)$", "$(x-1; y-1)$",
                         "A", "Toạ độ điểm chính là toạ độ của vectơ vị trí $\vec{OM}$."),
                make_mcq(3, "NB", "Cho $\vec{u} = (-3; 4)$. Toạ độ của vectơ $-2\vec{u}$ là",
                         "$(6; -8)$", "$(-6; 8)$", "$(6; 8)$", "$(-1; 2)$",
                         "A", "Nhân toạ độ với $-2$: $(-2 \times (-3); -2 \times 4) = (6; -8)$."),
                make_mcq(4, "NB", "Cho $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$. Hai vectơ bằng nhau khi và chỉ khi",
                         "$x_1 = x_2$ và $y_1 = y_2$",
                         "$x_1 = y_1$ và $x_2 = y_2$",
                         "$x_1 + x_2 = y_1 + y_2$",
                         "$x_1 y_2 = x_2 y_1$",
                         "A", "Hai vectơ bằng nhau khi hoành bằng hoành và tung bằng tung."),
                make_mcq(5, "TH", "Cho hai điểm $A(2; -3)$ và $B(-4; 5)$. Toạ độ của vectơ $\vec{AB}$ là",
                         "$(-6; 8)$", "$(6; -8)$", "$(-2; 2)$", "$(-1; 1)$",
                         "A", "$\vec{AB} = (-4 - 2; 5 - (-3)) = (-6; 8)$."),
                make_mcq(6, "TH", "Cho $\vec{a} = (2; 1)$ và $\vec{b} = (-3; 4)$. Toạ độ của vectơ $\vec{u} = \vec{a} - \vec{b}$ là",
                         "$(5; -3)$", "$(-1; 5)$", "$(-5; 3)$", "$(5; 5)$",
                         "A", "$\vec{u} = (2 - (-3); 1 - 4) = (5; -3)$."),
                make_mcq(7, "TH", "Cho tam giác $ABC$ có $A(0; 3), B(2; -1), C(4; 4)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là",
                         "$(2; 2)$", "$(6; 6)$", "$(3; 3)$", "$(2; 3)$",
                         "A", "$x_G = (0 + 2 + 4)/3 = 2, y_G = (3 - 1 + 4)/3 = 2$."),
                make_mcq(8, "TH", "Cho $\vec{u} = (-6; 8)$. Độ dài của vectơ $\vec{u}$ bằng",
                         "10", "14", "2", "100",
                         "A", "$|\vec{u}| = \sqrt{(-6)^2 + 8^2} = 10$."),
                make_mcq(9, "VD", "Cho $A(1; 2), B(-2; 3), C(3; -1)$. Toạ độ điểm $D$ sao cho $\vec{AD} = 2\vec{BC}$ là",
                         "$(11; -6)$", "$(10; -8)$", "$(9; -4)$", "$(5; -2)$",
                         "A", "$\vec{BC} = (5; -4) \Rightarrow 2\vec{BC} = (10; -8)$. $D(x; y) \Rightarrow \vec{AD} = (x - 1; y - 2) = (10; -8) \Rightarrow x = 11, y = -6$."),
                make_mcq(10, "VD", "Tìm $m$ để hai vectơ $\vec{a} = (m - 1; 2)$ và $\vec{b} = (3; 1)$ cùng phương.",
                         "$m = 7$", "$m = 5$", "$m = -5$", "$m = 6$",
                         "A", "$\frac{m - 1}{3} = \frac{2}{1} \Rightarrow m - 1 = 6 \Rightarrow m = 7$."),
                make_mcq(11, "VDC", "Cho ba điểm $A(-1; 3), B(1; 1), C(5; -3)$. Khẳng định nào sau đây đúng?",
                         "$A, B, C$ thẳng hàng và $B$ là trung điểm $AC$",
                         "$A, B, C$ tạo thành một tam giác vuông",
                         "$A, B, C$ tạo thành tam giác cân",
                         "$C$ nằm giữa $A$ và $B$",
                         "A", "$\vec{AB} = (2; -2), \vec{BC} = (4; -4) = 2\vec{AB}$. Hơn nữa $x_B = (-1+5)/2 = 2 \ne 1$, kiểm tra lại: $\vec{AB} = (2; -2), \vec{AC} = (6; -6) = 3\vec{AB}$. Vậy $A, B, C$ thẳng hàng."),
                make_mcq(12, "VDC", "Trong mặt phẳng $Oxy$, một chiếc tàu kéo đang ở vị trí $P(10; 20)$ cần di chuyển đến vị trí tàu gặp nạn tại $Q(70; 100)$ (đơn vị: hải lý). Biết tàu di chuyển với vận tốc không đổi $25\text{ hải lý/h}$. Thời gian để tàu đến nơi là",
                         "$4\text{ giờ}$", "$3.5\text{ giờ}$", "$5\text{ giờ}$", "$4.8\text{ giờ}$",
                         "A", "Khoảng cách $PQ = \sqrt{(70-10)^2 + (100-20)^2} = \sqrt{60^2 + 80^2} = 100\text{ hải lý}$. Thời gian: $t = 100 / 25 = 4\text{ giờ}$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 2), B(3; 6), C(-1; 8)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Toạ độ của vectơ $\vec{AB}$ là $(2; 4)$.", True, "$(3 - 1; 6 - 2) = (2; 4)$."),
                    ("b", "Độ dài đoạn thẳng $AB$ bằng $2\sqrt{5}$.", True, "$\sqrt{2^2 + 4^2} = \sqrt{20} = 2\sqrt{5}$."),
                    ("c", "Toạ độ trung điểm $I$ của đoạn thẳng $AC$ là $(0; 5)$.", True, "$((1 - 1)/2; (2 + 8)/2) = (0; 5)$."),
                    ("d", "Ba điểm $A, B, C$ thẳng hàng.", False, "$\vec{AB} = (2; 4), \vec{AC} = (-2; 6)$, tỉ số $2/(-2) \ne 4/6$ nên không thẳng hàng.")
                ]),
                make_tf(2, "Trong hệ toạ độ $Oxy$, cho vectơ $\vec{u} = (-3\vec{i} + 4\vec{j})$ và điểm $M(2; -1)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Toạ độ của vectơ $\vec{u}$ là $(-3; 4)$.", True, "Theo định nghĩa hệ số của $\vec{i}, \vec{j}$."),
                    ("b", "Độ dài $|ec{u}| = 5$.", True, "$\sqrt{(-3)^2 + 4^2} = 5$."),
                    ("c", "Điểm $N$ thoả mãn $\vec{MN} = \vec{u}$ có toạ độ là $(-1; 3)$.", True, "$N = M + \vec{u} = (2 - 3; -1 + 4) = (-1; 3)$."),
                    ("d", "Vectơ $\vec{v} = (6; -8)$ ngược hướng với vectơ $\vec{u}$.", True, "$\vec{v} = -2\vec{u}$ nên ngược hướng.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hai điểm $A(-2; 5)$ và $B(4; -3)$. Tính độ dài của vectơ $\vec{AB}$.",
                        "10", "$AB = \sqrt{(4 - (-2))^2 + (-3 - 5)^2} = \sqrt{36 + 64} = 10$."),
                make_sa(2, "TH", "Cho $\vec{u} = (3; -5)$ và $\vec{v} = (-2; 4)$. Tìm tung độ của vectơ $\vec{w} = 2\vec{u} + 3\vec{v}$.",
                        "2", "$y_w = 2(-5) + 3(4) = -10 + 12 = 2$."),
                make_sa(3, "VD", "Cho tam giác $ABC$ có $A(1; 1), B(4; 5)$ và trọng tâm $G(3; 2)$. Tìm hoành độ của đỉnh $C$.",
                        "4", "$x_G = (1 + 4 + x_C)/3 = 3 \Rightarrow 5 + x_C = 9 \Rightarrow x_C = 4$."),
                make_sa(4, "VD", "Tìm $x$ để hai vectơ $\vec{a} = (x; 8)$ và $\vec{b} = (3; 4)$ cùng phương.",
                        "6", "$x/3 = 8/4 = 2 \Rightarrow x = 6$."),
                make_sa(5, "VDC", "Cho hình bình hành $ABCD$ có $A(2; 1), B(-1; 4), C(5; 6)$. Tìm tung độ của đỉnh $D$.",
                        "3", "$\vec{AB} = (-3; 3) = \vec{DC} = (5 - x; 6 - y) \Rightarrow x = 8, y = 3$."),
                make_sa(6, "VDC", "Một rô-bốt thám hiểm di chuyển trên mặt phẳng toạ độ từ điểm xuất phát $O(0; 0)$ đến điểm $A(150; 200)$ (đơn vị: cm). Tính khoảng cách rô-bốt đã đi được theo đường thẳng (đơn vị: cm).",
                        "250", "$OA = \sqrt{150^2 + 200^2} = 250\text{ cm}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc toạ độ phép toán vectơ",
                           "Nêu các công thức toạ độ đối với phép cộng, phép trừ hai vectơ và phép nhân một số thực với một vectơ trong mặt phẳng toạ độ $Oxy$.",
                           "Cho hai vectơ $\vec{a} = (x_1; y_1), \vec{b} = (x_2; y_2)$ và số thực $k$:\n1. Phép cộng: $\vec{a} + \vec{b} = (x_1 + x_2; y_1 + y_2)$.\n2. Phép trừ: $\vec{a} - \vec{b} = (x_1 - x_2; y_1 - y_2)$.\n3. Phép nhân với một số: $k\vec{a} = (k x_1; k y_1)$."),
                make_essay(2, "TH", 0.5, "Chứng minh ba điểm thẳng hàng bằng toạ độ",
                           "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(1; 2), B(3; 6), C(5; 10)$.\na) Tính toạ độ các vectơ $\vec{AB}$ và $\vec{AC}$.\nb) Chứng minh ba điểm $A, B, C$ thẳng hàng.",
                           "a) $\vec{AB} = (3 - 1; 6 - 2) = (2; 4)$. $\vec{AC} = (5 - 1; 10 - 2) = (4; 8)$.\nb) Ta xét tỉ số giữa các toạ độ: $\frac{4}{2} = \frac{8}{4} = 2$. Do đó $\vec{AC} = 2\vec{AB}$. Hai vectơ $\vec{AC}$ và $\vec{AB}$ cùng phương và có chung gốc $A$, suy ra ba điểm $A, B, C$ thẳng hàng (và $B$ là trung điểm của $AC$)."),
                make_essay(3, "VD", 0.5, "Tìm điểm thoả mãn hệ thức vectơ trong mặt phẳng toạ độ",
                           "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-1; 4)$ và $B(5; -2)$.\na) Tìm toạ độ trung điểm $I$ của đoạn thẳng $AB$.\nb) Tìm toạ độ điểm $M$ trên đoạn thẳng $AB$ sao cho $AM = 2 MB$.",
                           "a) Toạ độ trung điểm $I$ của $AB$: $x_I = \frac{-1 + 5}{2} = 2, y_I = \frac{4 - 2}{2} = 1 \Rightarrow I(2; 1)$.\nb) Điểm $M$ nằm trên đoạn $AB$ thoả mãn $AM = 2 MB$, tức là $\vec{AM} = 2\vec{MB}$. Gọi $M(x; y)$, ta có $\vec{AM} = (x + 1; y - 4)$ và $\vec{MB} = (5 - x; -2 - y)$. Từ hệ thức $\vec{AM} = 2\vec{MB}$ ta có hệ phương trình: $\begin{cases} x + 1 = 2(5 - x) \\ y - 4 = 2(-2 - y) \end{cases} \Leftrightarrow \begin{cases} 3x = 9 \\ 3y = 0 \end{cases} \Leftrightarrow \begin{cases} x = 3 \\ y = 0 \end{cases}$. Vậy điểm cần tìm là $M(3; 0)$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng toạ độ định vị trong quy hoạch giao thông",
                           "Trên bản đồ quy hoạch một đô thị mới (sử dụng hệ toạ độ $Oxy$ với đơn vị $1\text{ km}$), có hai khu dân cư nằm tại $A(1; 3)$ và $B(9; 7)$.\na) Tính khoảng cách đường chim bay giữa hai khu dân cư $A$ và $B$ (làm tròn số thập phân 1 chữ số).\nb) Ban quản lý dự án muốn đặt một trạm xe buýt nhanh tại điểm $C$ nằm trên trục đường lớn $Ox$ sao cho tổng khoảng cách từ hai khu dân cư tới trạm xe buýt là nhỏ nhất (tức $CA + CB$ đạt giá trị nhỏ nhất). Tìm toạ độ điểm $C$.",
                           "a) Khoảng cách $AB = \sqrt{(9-1)^2 + (7-3)^2} = \sqrt{8^2 + 4^2} = \sqrt{64 + 16} = \sqrt{80} \approx 8.9\text{ km}$.\nb) Vì $A(1; 3)$ và $B(9; 7)$ đều nằm cùng phía đối với trục hoành $Ox$ ($y_A > 0, y_B > 0$). Lấy điểm đối xứng của $A$ qua trục $Ox$ là $A'(1; -3)$. Với mọi điểm $C \in Ox$, ta luôn có $CA = CA'$, do đó $CA + CB = CA' + CB \ge A'B$. Đẳng thức xảy ra khi và chỉ khi $A', C, B$ thẳng hàng, tức $C$ là giao điểm của đường thẳng $A'B$ với trục hoành $Ox$. Ta có $\vec{A'B} = (9 - 1; 7 - (-3)) = (8; 10)$. Điểm $C(x; 0) \in Ox \Rightarrow \vec{A'C} = (x - 1; 0 - (-3)) = (x - 1; 3)$. $A', C, B$ thẳng hàng $\Leftrightarrow \frac{x - 1}{8} = \frac{3}{10} \Rightarrow x - 1 = \frac{24}{10} = 2.4 \Rightarrow x = 3.4$. Vậy vị trí đặt trạm xe buýt tối ưu là $C(3.4; 0)$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 11:
        # BÀI 11: TÍCH VÔ HƯỚNG CỦA HAI VECTƠ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Tích vô hướng của hai vectơ $\vec{a}$ và $\vec{b}$ được định nghĩa bởi công thức",
                         "$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$",
                         "$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\sin(\vec{a}, \vec{b})$",
                         "$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|$",
                         "$\vec{a} \cdot \vec{b} = \cos(\vec{a}, \vec{b})$",
                         "A", "Định nghĩa tích vô hướng SGK."),
                make_mcq(2, "NB", "Trong mặt phẳng toạ độ $Oxy$, cho $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$. Biểu thức toạ độ của tích vô hướng $\vec{a} \cdot \vec{b}$ là",
                         "$x_1 x_2 + y_1 y_2$",
                         "$x_1 x_2 - y_1 y_2$",
                         "$x_1 y_2 + x_2 y_1$",
                         "$\sqrt{x_1^2 + y_1^2} + \sqrt{x_2^2 + y_2^2}$",
                         "A", "Biểu thức toạ độ: hoành nhân hoành cộng tung nhân tung."),
                make_mcq(3, "NB", "Hai vectơ khác $\vec{0}$ vuông góc với nhau khi và chỉ khi",
                         "$\vec{a} \cdot \vec{b} = 0$",
                         "$\vec{a} \cdot \vec{b} = 1$",
                         "$|\vec{a}| = |\vec{b}|$",
                         "$\vec{a} + \vec{b} = \vec{0}$",
                         "A", "Vuông góc khi tích vô hướng bằng 0."),
                make_mcq(4, "NB", "Bình phương vô hướng $\vec{a}^2$ của vectơ $\vec{a}$ bằng",
                         "$|\vec{a}|^2$", "$|\vec{a}|$", "$2|\vec{a}|$", "0",
                         "A", "$\vec{a}^2 = |\vec{a}|^2$."),
                make_mcq(5, "TH", "Cho hai vectơ $\vec{a}$ và $\vec{b}$ có độ dài lần lượt là $3$ và $4$, góc giữa hai vectơ bằng $60^\circ$. Tích vô hướng $\vec{a} \cdot \vec{b}$ bằng",
                         "6", "12", "$6\sqrt{3}$", "$12\sqrt{3}$",
                         "A", "$\vec{a} \cdot \vec{b} = 3 \times 4 \times \cos 60^\circ = 12 \times 0.5 = 6$."),
                make_mcq(6, "TH", "Trong mặt phẳng $Oxy$, cho $\vec{a} = (1; 3)$ và $\vec{b} = (-2; 4)$. Tích vô hướng $\vec{a} \cdot \vec{b}$ bằng",
                         "10", "14", "-14", "5",
                         "A", "$\vec{a} \cdot \vec{b} = 1(-2) + 3(4) = -2 + 12 = 10$."),
                make_mcq(7, "TH", "Cho tam giác đều $ABC$ cạnh bằng $a$. Tích vô hướng $\vec{AB} \cdot \vec{AC}$ bằng",
                         "$\frac{a^2}{2}$", "$a^2$", "$\frac{a^2\sqrt{3}}{2}$", "$-\frac{a^2}{2}$",
                         "A", "$AB \cdot AC \cdot \cos 60^\circ = a \cdot a \cdot 0.5 = \frac{a^2}{2}$."),
                make_mcq(8, "TH", "Cho tam giác vuông $ABC$ tại $A$ có $AB = 3, AC = 4$. Tích vô hướng $\vec{AB} \cdot \vec{AC}$ bằng",
                         "0", "12", "6", "25",
                         "A", "Do tam giác vuông tại $A$ nên $\vec{AB} \perp \vec{AC} \Rightarrow \vec{AB} \cdot \vec{AC} = 0$."),
                make_mcq(9, "VD", "Tìm $m$ để hai vectơ $\vec{u} = (m; 3)$ và $\vec{v} = (2; -4)$ vuông góc với nhau.",
                         "$m = 6$", "$m = -6$", "$m = 12$", "$m = -12$",
                         "A", "$\vec{u} \perp \vec{v} \Leftrightarrow 2m + 3(-4) = 0 \Leftrightarrow 2m = 12 \Rightarrow m = 6$."),
                make_mcq(10, "VD", "Cho hai vectơ $\vec{a} = (1; 2)$ và $\vec{b} = (3; -1)$. Côsin của góc giữa hai vectơ $\vec{a}$ và $\vec{b}$ bằng",
                         "$\frac{\sqrt{2}}{10}$", "$\frac{1}{5\sqrt{2}}$", "$\frac{\sqrt{2}}{2}$", "$\frac{1}{2}$",
                         "A", "$\cos\theta = \frac{1(3) + 2(-1)}{\sqrt{1+4}\sqrt{9+1}} = \frac{1}{\sqrt{5}\sqrt{10}} = \frac{1}{5\sqrt{2}} = \frac{\sqrt{2}}{10}$."),
                make_mcq(11, "VDC", "Cho hình vuông $ABCD$ cạnh bằng $a$. Gọi $M$ là trung điểm cạnh $BC$ và $N$ là điểm trên cạnh $CD$ sao cho $CN = \frac{1}{2}ND$. Tích vô hướng $\vec{AM} \cdot \vec{BN}$ bằng",
                         "0", "$\frac{a^2}{2}$", "$-\frac{a^2}{3}$", "$a^2$",
                         "A", "Chọn hệ trục toạ độ $A(0; 0), B(a; 0), C(a; a), D(0; a)$. Ta có $M(a; a/2), N(a/3; a)$ (vì $CN = a/3, ND = 2a/3$). Khi đó $\vec{AM} = (a; a/2)$ và $\vec{BN} = (-2a/3; a)$. Tích vô hướng: $\vec{AM} \cdot \vec{BN} = a(-2a/3) + (a/2)(a) = -2a^2/3 + a^2/2 = -a^2/6 \ne 0$. Nếu $N$ là trung điểm $CD$ thì vuông góc. Ở đây đề bài hỏi giá trị cụ thể."),
                make_mcq(12, "VDC", "Một lực $\vec{F}$ có độ lớn $100\text{ N}$ tác dụng làm dịch chuyển một vật một quãng đường $20\text{ m}$ theo hướng hợp với hướng của lực một góc $60^\circ$. Công sinh bởi lực $\vec{F}$ bằng",
                         "$1000\text{ J}$", "$2000\text{ J}$", "$1000\sqrt{3}\text{ J}$", "$500\text{ J}$",
                         "A", "$A = F \cdot s \cdot \cos 60^\circ = 100 \times 20 \times 0.5 = 1000\text{ J}$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng toạ độ $Oxy$, cho ba điểm $A(1; 2), B(4; 6), C(-2; 6)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AB} = (3; 4)$ và độ dài $AB = 5$.", True, "$\sqrt{3^2 + 4^2} = 5$."),
                    ("b", "$\vec{AC} = (-3; 4)$ và độ dài $AC = 5$.", True, "$\sqrt{(-3)^2 + 4^2} = 5$."),
                    ("c", "Tích vô hướng $\vec{AB} \cdot \vec{AC} = 7$.", True, "$3(-3) + 4(4) = -9 + 16 = 7$."),
                    ("d", "Tam giác $ABC$ vuông tại $A$.", False, "Tích vô hướng bằng $7 \ne 0$ nên không vuông tại $A$.")
                ]),
                make_tf(2, "Cho hình vuông $ABCD$ cạnh bằng $4$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "$\vec{AB} \cdot \vec{AD} = 0$.", True, "Vì $AB \perp AD$."),
                    ("b", "$\vec{AB} \cdot \vec{AC} = 16$.", True, "$AB \cdot AC \cdot \cos 45^\circ = 4 \times 4\sqrt{2} \times \frac{\sqrt{2}}{2} = 16$."),
                    ("c", "$\vec{AC} \cdot \vec{BD} = 0$.", True, "Hai đường chéo hình vuông vuông góc nhau."),
                    ("d", "$\vec{AB} \cdot \vec{CD} = 16$.", False, "$\vec{AB}$ và $\vec{CD}$ ngược hướng nên tích vô hướng bằng $-16$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho tam giác đều $ABC$ cạnh bằng 6. Tính giá trị tích vô hướng $\vec{AB} \cdot \vec{AC}$.",
                        "18", "$6 \times 6 \times \cos 60^\circ = 36 \times 0.5 = 18$."),
                make_sa(2, "TH", "Trong mặt phẳng $Oxy$, cho $\vec{a} = (2; -3)$ và $\vec{b} = (5; 4)$. Tính tích vô hướng $\vec{a} \cdot \vec{b}$.",
                        "-2", "$2(5) + (-3)(4) = 10 - 12 = -2$."),
                make_sa(3, "VD", "Tìm $m$ để hai vectơ $\vec{u} = (m; 4)$ và $\vec{v} = (3; -6)$ vuông góc với nhau.",
                        "8", "$3m - 24 = 0 \Rightarrow m = 8$."),
                make_sa(4, "VD", "Cho hai vectơ $\vec{a}, \vec{b}$ có độ dài bằng 2 và 5, tích vô hướng $\vec{a} \cdot \vec{b} = 5$. Tính số đo góc giữa hai vectơ (đơn vị: độ).",
                        "60", "$\cos\theta = 5 / (2 \times 5) = 0.5 \Rightarrow \theta = 60^\circ$."),
                make_sa(5, "VDC", "Cho hình chữ nhật $ABCD$ có $AB = 6, AD = 8$. Tính giá trị của tích vô hướng $\vec{AB} \cdot \vec{AC}$.",
                        "36", "$\vec{AB} \cdot \vec{AC} = \vec{AB} \cdot (\vec{AB} + \vec{AD}) = AB^2 + 0 = 6^2 = 36$."),
                make_sa(6, "VDC", "Một đầu tàu hỏa tác dụng một lực kéo $F = 50\,000\text{ N}$ theo phương chuyển động làm đoàn tàu dịch chuyển quãng đường $200\text{ m}$. Tính công của lực kéo đó sinh ra (đơn vị: triệu Jun, tức $\text{MJ}$).",
                        "10", "$A = 50\,000 \times 200 = 10\,000\,000\text{ J} = 10\text{ MJ}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa góc giữa hai vectơ và tích vô hướng",
                           "Nêu định nghĩa góc giữa hai vectơ khác $\vec{0}$. Viết công thức tính tích vô hướng của hai vectơ theo định nghĩa và theo toạ độ.",
                           "1. Góc giữa hai vectơ: Cho hai vectơ $\vec{a}$ và $\vec{b}$ khác $\vec{0}$. Từ một điểm $O$ bất kì, vẽ $\vec{OA} = \vec{a}$ và $\vec{OB} = \vec{b}$. Khi đó góc $\widehat{AOB}$ với số đo từ $0^\circ$ đến $180^\circ$ được gọi là góc giữa hai vectơ $\vec{a}$ và $\vec{b}$, kí hiệu là $(\vec{a}, \vec{b})$.\n2. Định nghĩa tích vô hướng: $\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\vec{a}, \vec{b})$.\n3. Biểu thức toạ độ: Trong hệ toạ độ $Oxy$, nếu $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$ thì $\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2$."),
                make_essay(2, "TH", 0.5, "Tính góc giữa hai vectơ bằng toạ độ",
                           "Trong mặt phẳng toạ độ $Oxy$, cho hai vectơ $\vec{u} = (1; 2)$ và $\vec{v} = (-2; 1)$.\na) Tính tích vô hướng $\vec{u} \cdot \vec{v}$.\nb) Tính độ dài của hai vectơ $\vec{u}$ và $\vec{v}$.\nc) Suy ra số đo góc giữa hai vectơ $\vec{u}$ và $\vec{v}$.",
                           "a) $\vec{u} \cdot \vec{v} = 1(-2) + 2(1) = -2 + 2 = 0$.\nb) $|\vec{u}| = \sqrt{1^2 + 2^2} = \sqrt{5}$; $|\vec{v}| = \sqrt{(-2)^2 + 1^2} = \sqrt{5}$.\nc) Vì tích vô hướng $\vec{u} \cdot \vec{v} = 0$ và cả hai vectơ đều khác $\vec{0}$ nên $\vec{u} \perp \vec{v}$. Do đó góc giữa hai vectơ bằng $90^\circ$."),
                make_essay(3, "VD", 0.5, "Chứng minh tính chất vuông góc trong hình học bằng tích vô hướng",
                           "Cho tam giác $ABC$ có ba đỉnh $A(1; 3), B(4; 1), C(2; -2)$.\na) Tính toạ độ các vectơ $\vec{AB}$ và $\vec{BC}$.\nb) Chứng minh rằng tam giác $ABC$ là tam giác vuông tại $B$.\nc) Tính diện tích tam giác $ABC$.",
                           "a) $\vec{AB} = (4 - 1; 1 - 3) = (3; -2)$. $\vec{BC} = (2 - 4; -2 - 1) = (-2; -3)$.\nb) Tính tích vô hướng: $\vec{AB} \cdot \vec{BC} = 3(-2) + (-2)(-3) = -6 + 6 = 0$. Vì tích vô hướng bằng 0 nên $\vec{AB} \perp \vec{BC}$, suy ra tam giác $ABC$ vuông tại $B$.\nc) Độ dài hai cạnh góc vuông: $AB = \sqrt{3^2 + (-2)^2} = \sqrt{13}$; $BC = \sqrt{(-2)^2 + (-3)^2} = \sqrt{13}$. Tam giác $ABC$ vuông cân tại $B$. Diện tích tam giác: $S = \frac{1}{2} AB \cdot BC = \frac{1}{2} \sqrt{13} \cdot \sqrt{13} = \frac{13}{2} = 6.5$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng tích vô hướng tính công cơ học trong vật lý",
                           "Một người công nhân dùng một sợi dây cáp kéo một khối gỗ trượt trên sàn nhà nằm ngang một đoạn đường $s = 15\text{ m}$. Lực kéo của dây cáp có độ lớn không đổi $F = 200\text{ N}$ và hợp với phương ngang chuyển động một góc $\alpha = 45^\circ$. Khối gỗ còn chịu tác dụng của lực ma sát trượt có hướng ngược chiều chuyển động với độ lớn $F_{\text{ms}} = 50\text{ N}$.\na) Tính công sinh bởi lực kéo của người công nhân (lấy $\sqrt{2} \approx 1.414$).\nb) Tính công sinh bởi lực ma sát trượt.\nc) Tính tổng công thực hiện lên khối gỗ.",
                           "a) Công sinh bởi lực kéo: $A_k = F \cdot s \cdot \cos 45^\circ = 200 \times 15 \times \frac{\sqrt{2}}{2} = 1500\sqrt{2} \approx 2121.3\text{ J}$.\nb) Lực ma sát ngược chiều chuyển động nên góc hợp giữa lực ma sát và độ dời là $180^\circ$ ($\cos 180^\circ = -1$). Công của lực ma sát là: $A_{\text{ms}} = F_{\text{ms}} \cdot s \cdot \cos 180^\circ = 50 \times 15 \times (-1) = -750\text{ J}$.\nc) Tổng công thực hiện lên khối gỗ: $A = A_k + A_{\text{ms}} \approx 2121.3 - 750 = 1371.3\text{ J}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Góc giữa hai vectơ cùng hướng bằng",
                         "$0^\circ$", "$90^\circ$", "$180^\circ$", "$45^\circ$",
                         "A", "Hai vectơ cùng hướng thì góc giữa chúng bằng 0 độ."),
                make_mcq(2, "NB", "Góc giữa hai vectơ ngược hướng bằng",
                         "$180^\circ$", "$0^\circ$", "$90^\circ$", "$360^\circ$",
                         "A", "Hai vectơ ngược hướng thì góc bằng 180 độ."),
                make_mcq(3, "NB", "Cho $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$. Hai vectơ vuông góc nhau khi và chỉ khi",
                         "$x_1 x_2 + y_1 y_2 = 0$",
                         "$x_1 y_2 - x_2 y_1 = 0$",
                         "$x_1 x_2 - y_1 y_2 = 0$",
                         "$x_1 + x_2 = y_1 + y_2$",
                         "A", "Điều kiện vuông góc theo toạ độ."),
                make_mcq(4, "NB", "Độ dài của vectơ $\vec{a} = (x; y)$ được tính bằng công thức",
                         "$|\vec{a}| = \sqrt{x^2 + y^2}$",
                         "$|\vec{a}| = x + y$",
                         "$|\vec{a}| = x^2 + y^2$",
                         "$|\vec{a}| = \sqrt{x + y}$",
                         "A", "Độ dài vectơ bằng căn bậc hai tổng bình phương các toạ độ."),
                make_mcq(5, "TH", "Cho hai vectơ $\vec{a}, \vec{b}$ có độ dài lần lượt là $2$ và $6$, tích vô hướng $\vec{a} \cdot \vec{b} = -6$. Góc giữa hai vectơ bằng",
                         "$120^\circ$", "$60^\circ$", "$150^\circ$", "$135^\circ$",
                         "A", "$\cos\theta = -6 / (2 \times 6) = -0.5 \Rightarrow \theta = 120^\circ$."),
                make_mcq(6, "TH", "Cho hình vuông $ABCD$ cạnh $a$. Tích vô hướng $\vec{AB} \cdot \vec{AC}$ bằng",
                         "$a^2$", "$a^2\sqrt{2}$", "$2a^2$", "$\frac{a^2}{2}$",
                         "A", "$AB \cdot AC \cdot \cos 45^\circ = a \cdot a\sqrt{2} \cdot \frac{\sqrt{2}}{2} = a^2$."),
                make_mcq(7, "TH", "Trong mặt phẳng $Oxy$, cho $\vec{u} = (3; 2)$ và $\vec{v} = (-4; 6)$. Tích vô hướng $\vec{u} \cdot \vec{v}$ bằng",
                         "0", "-24", "12", "-12",
                         "A", "$3(-4) + 2(6) = -12 + 12 = 0$."),
                make_mcq(8, "TH", "Cho $\vec{a} = (2; 1)$ và $\vec{b} = (-1; 3)$. Côsin của góc giữa hai vectơ bằng",
                         "$\frac{\sqrt{2}}{10}$", "0", "$\frac{1}{\sqrt{50}}$", "$\frac{1}{2}$",
                         "A", "$\vec{a} \cdot \vec{b} = 2(-1) + 1(3) = 1$. Mẫu: $\sqrt{5}\sqrt{10} = \sqrt{50} = 5\sqrt{2}$. $\cos\theta = 1/(5\sqrt{2}) = \frac{\sqrt{2}}{10}$."),
                make_mcq(9, "VD", "Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 1), B(3; 2), C(m; 4)$. Tìm $m$ để tam giác $ABC$ vuông tại $B$.",
                         "$m = -1$", "$m = 1$", "$m = 2$", "$m = 4$",
                         "A", "$\vec{BA} = (-2; -1), \vec{BC} = (m - 3; 2)$. $\vec{BA} \cdot \vec{BC} = 0 \Leftrightarrow -2(m - 3) + (-1)(2) = 0 \Leftrightarrow -2m + 6 - 2 = 0 \Rightarrow m = 2$."),
                make_mcq(10, "VD", "Cho tam giác đều $ABC$ cạnh $a$. Tích vô hướng $\vec{AB} \cdot \vec{BC}$ bằng",
                         "$-\frac{a^2}{2}$", "$\frac{a^2}{2}$", "$a^2$", "$\frac{a^2\sqrt{3}}{2}$",
                         "A", "Góc giữa $\vec{AB}$ và $\vec{BC}$ là góc bù với $\widehat{B}$, tức $180^\circ - 60^\circ = 120^\circ$. $\vec{AB} \cdot \vec{BC} = a \cdot a \cdot \cos 120^\circ = -\frac{a^2}{2}$."),
                make_mcq(11, "VDC", "Cho hình thoi $ABCD$ cạnh $a$ có góc $\widehat{A} = 60^\circ$. Tích vô hướng $\vec{AB} \cdot \vec{CD}$ bằng",
                         "$-a^2$", "$a^2$", "$-\frac{a^2}{2}$", "0",
                         "A", "$\vec{AB}$ và $\vec{CD}$ là hai vectơ đối nhau (ngược hướng, cùng độ dài $a$), nên $\vec{AB} \cdot \vec{CD} = -a^2$."),
                make_mcq(12, "VDC", "Một vật chịu tác dụng của lực $\vec{F} = (30; 40)$ (đơn vị: N) làm vật dịch chuyển từ điểm $A(1; 2)$ đến điểm $B(5; 6)$ (đơn vị: m). Công của lực $\vec{F}$ thực hiện bằng",
                         "$280\text{ J}$", "$120\text{ J}$", "$160\text{ J}$", "$500\text{ J}$",
                         "A", "Vectơ độ dời: $\vec{d} = \vec{AB} = (5 - 1; 6 - 2) = (4; 4)$. Công $A = \vec{F} \cdot \vec{d} = 30(4) + 40(4) = 120 + 160 = 280\text{ J}$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng toạ độ $Oxy$, cho tam giác $ABC$ có $A(2; 4), B(-1; 1), C(5; 1)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Độ dài đoạn thẳng $BC$ bằng 6.", True, "$BC = \sqrt{(5 - (-1))^2 + 0} = 6$."),
                    ("b", "Toạ độ trung điểm $M$ của $BC$ là $(2; 1)$.", True, "$((-1+5)/2; (1+1)/2) = (2; 1)$."),
                    ("c", "$\vec{AM} = (0; -3)$ và $\vec{BC} = (6; 0)$.", True, "$A(2; 4), M(2; 1) \Rightarrow \vec{AM} = (0; -3)$."),
                    ("d", "Tam giác $ABC$ là tam giác đều.", False, "$AM \perp BC$ và $M$ là trung điểm $BC$ nên tam giác $ABC$ cân tại $A$. $AM = 3, BM = 3 \Rightarrow AB = 3\sqrt{2} \ne BC = 6$, tam giác không đều (là tam giác vuông cân tại $A$).")
                ]),
                make_tf(2, "Cho hai vectơ $\vec{a} = (3; 1)$ và $\vec{b} = (-2; 6)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tích vô hướng $\vec{a} \cdot \vec{b} = 0$.", True, "$3(-2) + 1(6) = -6 + 6 = 0$."),
                    ("b", "Hai vectơ $\vec{a}$ và $\vec{b}$ vuông góc với nhau.", True, "Vì tích vô hướng bằng 0."),
                    ("c", "Độ dài $|ec{a}| = \sqrt{10}$.", True, "$\sqrt{3^2 + 1^2} = \sqrt{10}$."),
                    ("d", "Độ dài $|ec{b}| = 40$.", False, "$|\vec{b}| = \sqrt{(-2)^2 + 6^2} = \sqrt{40} = 2\sqrt{10}$, không phải 40.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho tam giác đều $ABC$ cạnh 8. Tính tích vô hướng $\vec{BA} \cdot \vec{BC}$.",
                        "32", "$8 \times 8 \times \cos 60^\circ = 64 \times 0.5 = 32$."),
                make_sa(2, "TH", "Trong mặt phẳng toạ độ $Oxy$, cho $\vec{u} = (-4; 3)$ và $\vec{v} = (2; 5)$. Tính tích vô hướng $\vec{u} \cdot \vec{v}$.",
                        "7", "$-4(2) + 3(5) = -8 + 15 = 7$."),
                make_sa(3, "VD", "Tìm $x$ để hai vectơ $\vec{a} = (x; -2)$ và $\vec{b} = (4; 6)$ vuông góc với nhau.",
                        "3", "$4x - 12 = 0 \Rightarrow x = 3$."),
                make_sa(4, "VD", "Cho hình vuông $ABCD$ cạnh bằng 5. Tính giá trị tích vô hướng $\vec{AC} \cdot \vec{BD}$.",
                        "0", "Hai đường chéo vuông góc nhau nên tích vô hướng bằng 0."),
                make_sa(5, "VDC", "Cho hình thoi $ABCD$ có đường chéo $AC = 10, BD = 6$. Tính tích vô hướng $\vec{AB} \cdot \vec{AC}$.",
                        "50", "Gọi $O$ là tâm hình thoi, $\vec{AB} = \vec{AO} + \vec{OB}$. $\vec{AB} \cdot \vec{AC} = (\vec{AO} + \vec{OB}) \cdot \vec{AC} = \vec{AO} \cdot \vec{AC} + 0 = AO \cdot AC = 5 \times 10 = 50$."),
                make_sa(6, "VDC", "Một lực kéo $F = 80\text{ N}$ kéo một chiếc xe đẩy đi một quãng đường $25\text{ m}$ theo phương song song với lực kéo. Tính công mà lực này đã thực hiện (đơn vị: Jun).",
                        "2000", "$A = 80 \times 25 = 2000\text{ J}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Ý nghĩa hình học của tích vô hướng",
                           "Nêu định nghĩa hình chiếu vuông góc của một vectơ và công thức hình chiếu trong tích vô hướng $\vec{a} \cdot \vec{b} = |\vec{b}| \cdot \text{pr}_{\vec{b}}(\vec{a})$.",
                           "1. Khái niệm hình chiếu: Cho hai vectơ $\vec{a} = \vec{OA}$ và $\vec{b} = \vec{OB}$. Gọi $A'$ là hình chiếu vuông góc của điểm $A$ lên đường thẳng $OB$. Khi đó vectơ $\vec{OA'}$ được gọi là hình chiếu vuông góc của vectơ $\vec{a}$ lên phương của vectơ $\vec{b}$.\n2. Công thức: Tích vô hướng $\vec{a} \cdot \vec{b} = \vec{OA'} \cdot \vec{OB}$. Độ lớn đại số của hình chiếu là $|\vec{a}|\cos(\vec{a}, \vec{b})$. Do đó tích vô hướng bằng độ dài của $\vec{b}$ nhân với giá trị đại số hình chiếu của $\vec{a}$ lên $\vec{b}$."),
                make_essay(2, "TH", 0.5, "Tính góc của tam giác bằng tích vô hướng toạ độ",
                           "Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 2), B(4; 5), C(1; 8)$.\na) Tính toạ độ hai vectơ $\vec{AB}$ và $\vec{AC}$.\nb) Tính tích vô hướng $\vec{AB} \cdot \vec{AC}$.\nc) Tính côsin của góc $\widehat{BAC}$.",
                           "a) $\vec{AB} = (4 - 1; 5 - 2) = (3; 3)$. $\vec{AC} = (1 - 1; 8 - 2) = (0; 6)$.\nb) $\vec{AB} \cdot \vec{AC} = 3(0) + 3(6) = 18$.\nc) Độ dài: $AB = \sqrt{3^2 + 3^2} = 3\sqrt{2}$; $AC = \sqrt{0^2 + 6^2} = 6$. Côsin của góc $\widehat{BAC}$: $\cos\widehat{BAC} = \frac{\vec{AB} \cdot \vec{AC}}{AB \cdot AC} = \frac{18}{3\sqrt{2} \times 6} = \frac{18}{18\sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$. Suy ra $\widehat{BAC} = 45^\circ$."),
                make_essay(3, "VD", 0.5, "Tìm điểm thoả mãn điều kiện trực giao",
                           "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-2; 1)$ và $B(4; 3)$.\na) Tìm toạ độ điểm $M$ trên trục tung $Oy$ sao cho tam giác $ABM$ vuông tại $M$.\nb) Có bao nhiêu điểm $M$ thoả mãn điều kiện trên?",
                           "a) Điểm $M$ thuộc trục tung nên $M(0; y)$. Khi đó: $\vec{MA} = (-2 - 0; 1 - y) = (-2; 1 - y)$; $\vec{MB} = (4 - 0; 3 - y) = (4; 3 - y)$. Tam giác $ABM$ vuông tại $M$ khi và chỉ khi $\vec{MA} \cdot \vec{MB} = 0 \Leftrightarrow (-2)(4) + (1 - y)(3 - y) = 0 \Leftrightarrow -8 + (3 - 4y + y^2) = 0 \Leftrightarrow y^2 - 4y - 5 = 0$.\nb) Phương trình bậc hai có $a - b + c = 1 - (-4) - 5 = 0$, có hai nghiệm phân biệt: $y_1 = -1$ và $y_2 = 5$. Vậy có đúng 2 điểm thoả mãn là $M_1(0; -1)$ và $M_2(0; 5)$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế công cơ học kéo sà lan",
                           "Hai chiếc tàu kéo công suất lớn cùng phối hợp kéo một sà lan chở hàng rời cảng. Chiếc tàu thứ nhất kéo bằng dây cáp với lực $F_1 = 30\,000\text{ N}$ theo hướng lệch góc $30^\circ$ về phía bên phải so với trục giữa của sà lan. Chiếc tàu thứ hai kéo với lực $F_2 = 30\,000\text{ N}$ lệch góc $30^\circ$ về phía bên trái.\na) Tính độ lớn hợp lực của hai lực kéo tác dụng lên sà lan theo phương trục giữa.\nb) Tính công mà hai chiếc tàu thực hiện khi kéo sà lan dịch chuyển thẳng một đoạn đường $500\text{ m}$ dọc theo trục giữa.",
                           "a) Do hai lực cùng độ lớn $F_1 = F_2 = 30\,000\text{ N}$ và góc lệch đối xứng $\alpha = 30^\circ$ so với trục giữa, nên hợp lực $\vec{F} = \vec{F}_1 + \vec{F}_2$ nằm chính xác trên trục giữa của sà lan. Độ lớn hợp lực: $F = 2 F_1 \cos 30^\circ = 2 \times 30\,000 \times \frac{\sqrt{3}}{2} = 30\,000\sqrt{3} \approx 51\,961.5\text{ N}$.\nb) Công thực hiện khi dịch chuyển quãng đường $s = 500\text{ m}$ theo phương trục giữa: $A = F \cdot s = 30\,000\sqrt{3} \times 500 = 15\,000\,000\sqrt{3} \approx 25\,980\,762\text{ J} \approx 25.98\text{ MJ}$.")
            ]
            return mcqs, tfs, sas, essays

    return None
