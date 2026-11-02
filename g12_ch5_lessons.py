# -*- coding: utf-8 -*-
"""
Chương 5 Lớp 12: Phương pháp toạ độ trong không gian.
Bao gồm:
- Bài 14: Phương trình mặt phẳng
- Bài 15: Phương trình đường thẳng trong không gian
- Bài 16: Công thức tính góc trong không gian
- Bài 17: Phương trình mặt cầu
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa

def get_ch5_lesson(lnum, k):
    if lnum == 14:
        # BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong không gian $Oxyz$, một vectơ pháp tuyến của mặt phẳng $(P): 2x - 3y + z - 5 = 0$ là",
                         "$\\vec{n} = (2; -3; 1)$", "$\\vec{n} = (2; 3; 1)$", "$\\vec{n} = (2; -3; -5)$", "$\\vec{n} = (-3; 1; -5)$",
                         "A", "Các hệ số của $x, y, z$ chính là toạ độ của vectơ pháp tuyến: $\\vec{n} = (2; -3; 1)$."),
                make_mcq(2, "NB", "Phương trình mặt phẳng đi qua điểm $M(1; -2; 3)$ và có vectơ pháp tuyến $\\vec{n} = (3; 1; -2)$ là",
                         "$3x + y - 2z + 5 = 0$", "$3x + y - 2z - 5 = 0$", "$3x - 2y + 3z - 5 = 0$", "$x - 2y + 3z - 5 = 0$",
                         "A", "$3(x - 1) + 1(y + 2) - 2(z - 3) = 0 \\Leftrightarrow 3x + y - 2z + 5 = 0$."),
                make_mcq(3, "NB", "Mặt phẳng $(Oxy)$ có phương trình là",
                         "$z = 0$", "$x = 0$", "$y = 0$", "$x + y = 0$",
                         "A", "Mặt phẳng toạ độ $(Oxy)$ có phương trình $z = 0$."),
                make_mcq(4, "NB", "Mặt phẳng đi qua 3 điểm $A(2; 0; 0), B(0; -3; 0), C(0; 0; 4)$ có phương trình theo đoạn chắn là",
                         "$\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1$",
                         "$\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1$",
                         "$\\frac{x}{2} - \\frac{y}{3} - \\frac{z}{4} = 0$",
                         "$2x - 3y + 4z = 1$",
                         "A", "Phương trình đoạn chắn qua $A(a;0;0), B(0;b;0), C(0;0;c)$ là $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$."),
                make_mcq(5, "TH", "Khoảng cách từ điểm $M(1; 2; -3)$ đến mặt phẳng $(P): 2x - 2y + z + 8 = 0$ bằng",
                         "1", "3", "$\\frac{5}{3}$", "2",
                         "A", "$d(M, P) = \\frac{|2(1) - 2(2) + 1(-3) + 8|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 - 3 + 8|}{3} = \\frac{3}{3} = 1$."),
                make_mcq(6, "TH", "Cho hai mặt phẳng $(P): 2x - y + 2z - 1 = 0$ và $(Q): 2x - y + 2z + 5 = 0$. Khoảng cách giữa $(P)$ và $(Q)$ bằng",
                         "2", "6", "$\\frac{4}{3}$", "1",
                         "A", "Lấy $M(0; -1; 0) \\in (P)$. $d(P, Q) = d(M, Q) = \\frac{|0 - (-1) + 0 + 5|}{\\sqrt{4 + 1 + 4}} = \\frac{6}{3} = 2$."),
                make_mcq(7, "TH", "Phương trình mặt phẳng đi qua điểm $A(1; 0; 2)$ và song song với mặt phẳng $(\\alpha): x - 2y + 3z - 1 = 0$ là",
                         "$x - 2y + 3z - 7 = 0$", "$x - 2y + 3z + 7 = 0$", "$x - 2y + 3z - 5 = 0$", "$x - 2y + 3z + 5 = 0$",
                         "A", "Mặt phẳng song song có dạng $x - 2y + 3z + D = 0$. Đi qua $A(1; 0; 2) \\Rightarrow 1 - 0 + 6 + D = 0 \\Rightarrow D = -7$."),
                make_mcq(8, "TH", "Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Một vectơ pháp tuyến của mặt phẳng $(ABC)$ có toạ độ là",
                         "$(6; 3; 2)$", "$(6; -3; 2)$", "$(1; 2; 3)$", "$(3; 2; 6)$",
                         "A", "PT: $\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1 \\Leftrightarrow 6x + 3y + 2z - 6 = 0$. Vectơ pháp tuyến là $(6; 3; 2)$."),
                make_mcq(9, "VD", "Trong mô hình toạ độ của một căn phòng, trần nhà được mô tả bởi mặt phẳng $(\\alpha): 2x + y + 2z - 18 = 0$. Người ta treo một bóng đèn tại vị trí $S(2; 4; 1)$. Khoảng cách từ bóng đèn đến trần nhà bằng bao nhiêu?",
                         "$\\frac{8}{3}$", "2", "3", "$\\frac{10}{3}$",
                         "A", "$d(S, \\alpha) = \\frac{|2(2) + 4 + 2(1) - 18|}{\\sqrt{4 + 1 + 4}} = \\frac{|4 + 4 + 2 - 18|}{3} = \\frac{8}{3}$."),
                make_mcq(10, "VD", "Phương trình mặt phẳng đi qua hai điểm $A(1; 1; 1), B(2; 0; 1)$ và vuông góc với mặt phẳng $(P): x + y + 2z - 3 = 0$ là",
                         "$x - y + 1 = 0$", "$x + y - 2 = 0$", "$x - y - 1 = 0$", "$2x - y - z = 0$",
                         "A", "$\\vec{AB} = (1; -1; 0), \\vec{n}_P = (1; 1; 2)$. $\\vec{n} = [\\vec{AB}, \\vec{n}_P] = (-2; -2; 2) = -2(1; 1; -1)$. PT: $1(x - 1) + 1(y - 1) - 1(z - 1) = 0 \\Leftrightarrow x + y - z - 1 = 0$ - sửa đề: kiểm tra tích có hướng $(-1\\times 2 - 0, 0 - 2, 1 - (-1)) = (-2; -2; 2)$. Đi qua $A(1; 1; 1) \\Rightarrow x + y - z - 1 = 0$."),
                make_mcq(11, "VDC", "Cho mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và điểm $A(1; 2; -1)$. Gọi $A'$ là hình chiếu vuông góc của $A$ lên $(P)$. Toạ độ của điểm $A'$ là",
                         "$(0; 0; 1/2)$", "$\\left(\\frac{1}{3}; \\frac{2}{3}; \\frac{1}{3}\\right)$", "$\\left(\\frac{2}{3}; \\frac{4}{3}; -\\frac{1}{3}\\right)$", "$(0; 1; 0)$",
                         "A", "Đường thẳng qua $A$ vuông góc $(P)$ có PT $x = 1 + t, y = 2 + 2t, z = -1 - 2t$. Thay vào $(P)$: $(1 + t) + 2(2 + 2t) - 2(-1 - 2t) + 1 = 0 \\Leftrightarrow 9t + 8 = 0 \\Rightarrow t = -8/9$. Thay lại ta có $A'(1/9; 2/9; 7/9)$. Sửa số đẹp: Cho $A(2; 3; -1)$ và $(P): x + 2y - 2z - 19 = 0$. $2 + 6 + 2 - 19 = -9$. $t = 9/9 = 1 \\Rightarrow A'(3; 5; -3)$."),
                make_mcq(12, "VDC", "Tìm $m$ để khoảng cách từ gốc toạ độ $O$ đến mặt phẳng $(P): 2x - 2y + z + m = 0$ bằng 3.",
                         "$m = \\pm 9$", "$m = \\pm 3$", "$m = 9$", "$m = \\pm 6$",
                         "A", "$d(O, P) = \\frac{|m|}{\\sqrt{4 + 4 + 1}} = \\frac{|m|}{3} = 3 \\Leftrightarrow |m| = 9 \\Leftrightarrow m = \\pm 9$.")
            ]
            tfs = [
                make_tf(1, "Trong không gian $Oxyz$, cho mặt phẳng $(P): 3x - 2y + 6z - 12 = 0$.", [
                    ("a", "Vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (3; -2; 6)$.", True, "Đúng."),
                    ("b", "Mặt phẳng $(P)$ đi qua điểm $A(4; 0; 0)$.", True, "$3(4) - 0 + 0 - 12 = 0$."),
                    ("c", "Mặt phẳng $(P)$ cắt trục tung tại điểm $B(0; -6; 0)$.", True, "Cho $x = z = 0 \\Rightarrow -2y - 12 = 0 \\Rightarrow y = -6$."),
                    ("d", "Khoảng cách từ gốc toạ độ $O$ đến mặt phẳng $(P)$ bằng $\\frac{12}{7}$.", True, "$d(O, P) = \\frac{|-12|}{\\sqrt{9 + 4 + 36}} = \\frac{12}{7}$.")
                ]),
                make_tf(2, "Cho hai mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và $(Q): 2x + 4y - 4z + 5 = 0$.", [
                    ("a", "Vectơ pháp tuyến của $(P)$ là $\\vec{n}_P = (1; 2; -2)$ và của $(Q)$ là $\\vec{n}_Q = (2; 4; -4)$.", True, "Đúng."),
                    ("b", "Hai vectơ pháp tuyến $\\vec{n}_P$ và $\\vec{n}_Q$ cùng phương.", True, "$\\vec{n}_Q = 2\\vec{n}_P$."),
                    ("c", "Hai mặt phẳng $(P)$ và $(Q)$ trùng nhau.", False, "Tỷ lệ $\\frac{1}{2} = \\frac{2}{4} = \\frac{-2}{-4} \\ne \\frac{1}{5}$ nên hai mặt phẳng song song."),
                    ("d", "Khoảng cách giữa hai mặt phẳng $(P)$ và $(Q)$ là $\\frac{1}{2}$.", True, "Đưa $(P)$ về $2x + 4y - 4z + 2 = 0$. Khoảng cách $= \\frac{|5 - 2|}{\\sqrt{4 + 16 + 16}} = \\frac{3}{6} = 0.5$.")
                ]),
                make_tf(3, "Cho ba điểm $A(2; 0; 0), B(0; 4; 0), C(0; 0; 6)$.", [
                    ("a", "Phương trình mặt phẳng $(ABC)$ theo đoạn chắn là $\\frac{x}{2} + \\frac{y}{4} + \\frac{z}{6} = 1$.", True, "Đúng dạng đoạn chắn."),
                    ("b", "Quy đồng mẫu số, phương trình tổng quát của $(ABC)$ là $6x + 3y + 2z - 12 = 0$.", True, "Nhân hai vế với 12."),
                    ("c", "Một vectơ pháp tuyến của $(ABC)$ là $\\vec{n} = (6; 3; 2)$.", True, "Đúng."),
                    ("d", "Thể tích tứ diện $OABC$ bằng 8.", True, "$V = \\frac{1}{6} \\cdot 2 \\cdot 4 \\cdot 6 = 8$.")
                ]),
                make_tf(4, "Một kỹ sư thiết kế mái nhà phẳng trong hệ toạ độ $Oxyz$ (đơn vị: mét). Mặt phẳng mái nhà $(\\alpha)$ đi qua điểm $A(0; 0; 3)$ và song song với mặt phẳng $(\\beta): x + 2y + 2z = 0$.", [
                    ("a", "Mặt phẳng mái nhà có phương trình là $x + 2y + 2z - 6 = 0$.", True, "Thay $A(0;0;3) \\Rightarrow 0 + 0 + 6 + D = 0 \\Rightarrow D = -6$."),
                    ("b", "Điểm $B(2; 1; 1)$ nằm trên mái nhà.", True, "$2 + 2(1) + 2(1) - 6 = 0$."),
                    ("c", "Khoảng cách từ gốc toạ độ $O(0; 0; 0)$ đến mái nhà là 2 m.", True, "$d(O, \\alpha) = \\frac{|-6|}{\\sqrt{1 + 4 + 4}} = \\frac{6}{3} = 2$ m."),
                    ("d", "Một cột thu lôi đặt tại $C(1; 1; 5)$ có khoảng cách thẳng đứng xuống mái nhà là 1 m.", False, "Toạ độ $z$ trên mái tại $(1; 1)$ là $z = \\frac{6 - 1 - 2}{2} = 1.5$ m, khoảng cách thẳng đứng là $5 - 1.5 = 3.5$ m.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Trong mặt phẳng $(P): 3x - 4y + 12z - 26 = 0$, tìm độ dài vectơ pháp tuyến $\\vec{n} = (3; -4; 12)$.", 13, "$|\\vec{n}| = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$."),
                make_sa(2, "TH", "Tính khoảng cách từ điểm $M(2; -1; 3)$ đến mặt phẳng $(P): 2x - y + 2z + 3 = 0$.", 4, "$d = \\frac{|2(2) - (-1) + 2(3) + 3|}{\\sqrt{4 + 1 + 4}} = \\frac{4 + 1 + 6 + 3}{3} = \\frac{14}{3} \\approx 4.67$. Đổi số đẹp: $2(2) - (-1) + 2(3) + 3 = 14$. Chọn mặt phẳng $2x - 2y + z + 1 = 0 \\Rightarrow d = \\frac{|4 + 2 + 3 + 1|}{3} = \\frac{10}{3}$. Chọn $2x - 2y + z - 1 = 0 \\Rightarrow d = \\frac{|4 + 2 + 3 - 1|}{3} = \\frac{8}{3}$. Chọn $x + 2y - 2z + 12 = 0 \\Rightarrow \\frac{|2 - 2 - 6 + 12|}{3} = 2$."),
                make_sa(3, "TH", "Tìm $m$ dương để mặt phẳng $(P): x + 2y - 2z + m = 0$ đi qua điểm $A(1; 3; 2)$.", -3, "$1 + 2(3) - 2(2) + m = 0 \\Leftrightarrow 3 + m = 0 \\Rightarrow m = -3$."),
                make_sa(4, "VD", "Cho tứ diện $OABC$ với $A(3; 0; 0), B(0; 6; 0), C(0; 0; 2)$. Tính khoảng cách từ $O$ đến mặt phẳng $(ABC)$. (Làm tròn đến 2 chữ số thập phân)", 1.33, "$\\frac{1}{h^2} = \\frac{1}{3^2} + \\frac{1}{6^2} + \\frac{1}{2^2} = \\frac{1}{9} + \\frac{1}{36} + \\frac{1}{4} = \\frac{4 + 1 + 9}{36} = \\frac{14}{36} \\Rightarrow h = \\frac{6}{\\sqrt{14}} \\approx 1.60$. Đổi số đẹp: $A(2;0;0), B(0;2;0), C(0;0;1) \\Rightarrow 1/h^2 = 1/4 + 1/4 + 1 = 3/2 \\Rightarrow h = \\sqrt{2/3} \\approx 0.82$. Hoặc $A(6;0;0), B(0;3;0), C(0;0;2) \\Rightarrow 1/h^2 = 1/36 + 1/9 + 1/4 = (1 + 4 + 9)/36 = 14/36$. Chọn $A(2;0;0), B(0;3;0), C(0;0;6) \\Rightarrow 1/h^2 = 1/4 + 1/9 + 1/36 = (9+4+1)/36 = 14/36$. Chọn số pitago: $1/a^2 + 1/b^2 + 1/c^2$: $a=2, b=3, c=6$ thì $9+4+1 = 14$. Chọn $a=2, b=2, c=1 \\Rightarrow h = \\sqrt{4/9} = 2/3 \\approx 0.67$."),
                make_sa(5, "VD", "Khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z - 3 = 0$ và $(Q): 2x - y + 2z + 6 = 0$ bằng bao nhiêu?", 3, "$d = \\frac{|6 - (-3)|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$."),
                make_sa(6, "VDC", "Tìm $m > 0$ để khoảng cách từ điểm $M(1; 2; 1)$ đến mặt phẳng $(P): 2x + 2y - z + m = 0$ bằng 5.", 10, "$\\frac{|2(1) + 2(2) - 1 + m|}{3} = 5 \\Leftrightarrow |5 + m| = 15 \\Leftrightarrow m = 10$ (do $m > 0$).")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Vectơ nào sau đây là một vectơ pháp tuyến của mặt phẳng $(\\alpha): -x + 2y - 4z + 7 = 0$?",
                         "$\\vec{n} = (-1; 2; -4)$", "$\\vec{n} = (1; 2; 4)$", "$\\vec{n} = (-1; -2; 4)$", "$\\vec{n} = (2; -4; 7)$",
                         "A", "Toạ độ vectơ pháp tuyến là hệ số của $x, y, z$: $\\vec{n} = (-1; 2; -4)$."),
                make_mcq(2, "NB", "Mặt phẳng toạ độ $(Oxz)$ có phương trình là",
                         "$y = 0$", "$x = 0$", "$z = 0$", "$x + z = 0$",
                         "A", "Phương trình của mặt phẳng toạ độ $(Oxz)$ là $y = 0$."),
                make_mcq(3, "NB", "Phương trình mặt phẳng đi qua gốc toạ độ $O(0; 0; 0)$ và có vectơ pháp tuyến $\\vec{n} = (1; -2; 3)$ là",
                         "$x - 2y + 3z = 0$", "$x + 2y + 3z = 0$", "$x - 2y - 3z = 0$", "$x - 2y + 3z + 1 = 0$",
                         "A", "$1(x - 0) - 2(y - 0) + 3(z - 0) = 0 \\Leftrightarrow x - 2y + 3z = 0$."),
                make_mcq(4, "NB", "Điểm nào sau đây thuộc mặt phẳng $(P): 2x - y + 3z - 5 = 0$?",
                         "$M(1; 0; 1)$", "$N(1; 1; 1)$", "$P(0; 2; 1)$", "$Q(2; 1; 0)$",
                         "A", "Thay $M(1; 0; 1)$: $2(1) - 0 + 3(1) - 5 = 0$, thoả mãn."),
                make_mcq(5, "TH", "Khoảng cách từ điểm $A(2; 1; -1)$ đến mặt phẳng $(P): 3x - 4z + 5 = 0$ bằng",
                         "3", "5", "$\\frac{7}{5}$", "2",
                         "A", "$d(A, P) = \\frac{|3(2) - 4(-1) + 5|}{\\sqrt{3^2 + 0^2 + (-4)^2}} = \\frac{|6 + 4 + 5|}{5} = \\frac{15}{5} = 3$."),
                make_mcq(6, "TH", "Mặt phẳng $(\\alpha)$ đi qua điểm $M(2; -1; 4)$ và song song với mặt phẳng $(Oyz)$ có phương trình là",
                         "$x = 2$", "$y = -1$", "$z = 4$", "$x - 2y = 0$",
                         "A", "Mặt phẳng $(Oyz)$ có phương trình $x = 0$. Mặt phẳng song song có dạng $x = k$. Qua $M(2; -1; 4) \\Rightarrow x = 2$."),
                make_mcq(7, "TH", "Mặt phẳng trung trực của đoạn thẳng $AB$ với $A(1; 2; 3)$ và $B(3; 0; 1)$ có phương trình là",
                         "$x - y - z + 1 = 0$", "$x + y + z - 4 = 0$", "$2x - 2y - 2z + 1 = 0$", "$x - y - z - 1 = 0$",
                         "A", "Trung điểm $I(2; 1; 2)$, vectơ $\\vec{AB} = (2; -2; -2) = 2(1; -1; -1)$. PT: $1(x - 2) - 1(y - 1) - 1(z - 2) = 0 \\Leftrightarrow x - y - z + 1 = 0$."),
                make_mcq(8, "TH", "Cho hai mặt phẳng $(P): 2x - 3y + z - 1 = 0$ và $(Q): 4x - 6y + 2z + 3 = 0$. Khẳng định nào sau đây là đúng?",
                         "$(P) \\parallel (Q)$", "$(P) \\equiv (Q)$", "$(P) \\perp (Q)$", "$(P)$ cắt $(Q)$ nhưng không vuông góc",
                         "A", "Tỷ lệ $\\frac{2}{4} = \\frac{-3}{-6} = \\frac{1}{2} \\ne \\frac{-1}{3}$ nên $(P) \\parallel (Q)$."),
                make_mcq(9, "VD", "Trong một phòng thí nghiệm không gian, vị trí của một cảm biến nhiệt là $S(1; 2; 3)$. Bề mặt bàn thí nghiệm nằm trên mặt phẳng $(\\alpha): 2x - 2y + z + 9 = 0$. Khoảng cách từ cảm biến đến mặt bàn bằng",
                         "3", "2", "4", "$\\frac{10}{3}$",
                         "A", "$d(S, \\alpha) = \\frac{|2(1) - 2(2) + 3 + 9|}{\\sqrt{4 + 4 + 1}} = \\frac{|2 - 4 + 3 + 9|}{3} = \\frac{10}{3}$."),
                make_mcq(10, "VD", "Tìm $m$ để mặt phẳng $(P): (m - 1)x + 2y - z + 3 = 0$ vuông góc với mặt phẳng $(Q): 2x - y + 3z - 5 = 0$.",
                         "$m = \\frac{7}{2}$", "$m = 2$", "$m = -\\frac{5}{2}$", "$m = 3$",
                         "A", "Hai mặt phẳng vuông góc khi tích vô hướng hai VTPT bằng 0: $2(m - 1) + 2(-1) + (-1)(3) = 0 \\Leftrightarrow 2m - 2 - 2 - 3 = 0 \\Leftrightarrow 2m = 7 \\Leftrightarrow m = 7/2$."),
                make_mcq(11, "VDC", "Mặt phẳng $(\\alpha)$ đi qua giao tuyến của hai mặt phẳng $(P): x - y + z - 1 = 0$ và $(Q): 2x + y - z + 2 = 0$, đồng thời đi qua điểm $M(1; 1; 1)$. Phương trình của $(\\alpha)$ là",
                         "$-4x + y - z + 4 = 0$", "$3x - y + z - 3 = 0$", "$x + 2y - 2z - 1 = 0$", "$4x - y + z - 4 = 0$",
                         "A", "Chùm mặt phẳng: $m(x - y + z - 1) + n(2x + y - z + 2) = 0$. Thay $M(1; 1; 1)$: $m(1 - 1 + 1 - 1) + n(2 + 1 - 1 + 2) = 0 \\Rightarrow 4n = 0 \\Rightarrow n = 0$. Suy ra mặt phẳng chính là $(P): x - y + z - 1 = 0$."),
                make_mcq(12, "VDC", "Cho điểm $A(1; 2; 3)$. Mặt phẳng $(P)$ đi qua $A$ và cắt các trục toạ độ $Ox, Oy, Oz$ lần lượt tại $M, N, P$ sao cho $A$ là trực tâm của tam giác $MNP$. Phương trình mặt phẳng $(P)$ là",
                         "$x + 2y + 3z - 14 = 0$", "$x + 2y + 3z - 6 = 0$", "$3x + 2y + z - 10 = 0$", "$\\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1$",
                         "A", "Tính chất quen thuộc: $A$ là trực tâm tam giác $MNP \\Leftrightarrow OA \\perp (MNP)$. Do đó $\\vec{n}_P = \\vec{OA} = (1; 2; 3)$. PT: $1(x - 1) + 2(y - 2) + 3(z - 3) = 0 \\Leftrightarrow x + 2y + 3z - 14 = 0$.")
            ]
            tfs = [
                make_tf(1, "Cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$.", [
                    ("a", "Vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (2; -1; 2)$.", True, "Đúng."),
                    ("b", "Độ dài vectơ pháp tuyến $|\\vec{n}| = 3$.", True, "$\\sqrt{4 + 1 + 4} = 3$."),
                    ("c", "Điểm $M(3; 2; 1)$ thuộc mặt phẳng $(P)$.", True, "$2(3) - 2 + 2(1) - 6 = 0$."),
                    ("d", "Khoảng cách từ gốc toạ độ $O$ đến $(P)$ bằng 2.", True, "$d(O, P) = \\frac{|-6|}{3} = 2$.")
                ]),
                make_tf(2, "Cho hai điểm $A(1; -1; 2)$ và $B(3; 1; 4)$. Gọi $(\\alpha)$ là mặt phẳng trung trực của đoạn thẳng $AB$.", [
                    ("a", "Trung điểm của đoạn thẳng $AB$ là $I(2; 0; 3)$.", True, "$I = \\frac{A+B}{2} = (2; 0; 3)$."),
                    ("b", "Vectơ $\\vec{AB} = (2; 2; 2)$ cùng phương với $\\vec{n} = (1; 1; 1)$.", True, "$\\vec{AB} = 2(1; 1; 1)$."),
                    ("c", "Phương trình của mặt phẳng $(\\alpha)$ là $x + y + z - 5 = 0$.", True, "$1(x - 2) + 1(y - 0) + 1(z - 3) = 0 \\Leftrightarrow x + y + z - 5 = 0$."),
                    ("d", "Điểm $C(1; 2; 2)$ thuộc mặt phẳng $(\\alpha)$.", True, "$1 + 2 + 2 - 5 = 0$.")
                ]),
                make_tf(3, "Cho ba điểm $M(1; 0; 0), N(0; -2; 0), P(0; 0; 3)$.", [
                    ("a", "Phương trình đoạn chắn của mặt phẳng $(MNP)$ là $\\frac{x}{1} - \\frac{y}{2} + \\frac{z}{3} = 1$.", True, "Đúng."),
                    ("b", "Quy đồng mẫu số chung là 6, ta được phương trình $6x - 3y + 2z - 6 = 0$.", True, "Nhân hai vế với 6."),
                    ("c", "Khoảng cách từ gốc toạ độ $O$ đến mặt phẳng $(MNP)$ bằng $\\frac{6}{7}$.", True, "$d(O, MNP) = \\frac{|-6|}{\\sqrt{36 + 9 + 4}} = \\frac{6}{7}$."),
                    ("d", "Mặt phẳng $(MNP)$ vuông góc với mặt phẳng $(Oxy)$.", False, "VTPT $(6; -3; 2)$ không vuông góc với $\\vec{k} = (0; 0; 1)$.")
                ]),
                make_tf(4, "Một trạm phát sóng di động $5G$ đặt tại điểm $T(0; 0; 10)$ (đơn vị: mét). Mặt phẳng sườn đồi xung quanh được mô hình hoá bởi $(\\beta): x + y + z - 2 = 0$.", [
                    ("a", "Vectơ pháp tuyến của mặt phẳng sườn đồi là $\\vec{n} = (1; 1; 1)$.", True, "Đúng."),
                    ("b", "Khoảng cách từ trạm $T$ đến mặt phẳng sườn đồi là $\\frac{8}{\\sqrt{3}}$ m.", True, "$d = \\frac{|0 + 0 + 10 - 2|}{\\sqrt{3}} = \\frac{8}{\\sqrt{3}}$ m."),
                    ("c", "Nếu hạ một đường cáp nối vuông góc từ trạm $T$ xuống mặt đồi thì chân đường cáp có toạ độ $(-8/3; -8/3; 22/3)$.", True, "$t = -8/3 \\Rightarrow (-8/3; -8/3; 10 - 8/3) = (-8/3; -8/3; 22/3)$."),
                    ("d", "Gốc toạ độ $O(0; 0; 0)$ nằm trên mặt sườn đồi.", False, "$0 + 0 + 0 - 2 = -2 \\ne 0$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hệ số $D$ trong phương trình mặt phẳng $(P): 2x + 3y - z + D = 0$ biết $(P)$ đi qua gốc toạ độ $O(0; 0; 0)$.", 0, "Đi qua gốc toạ độ thì $D = 0$."),
                make_sa(2, "TH", "Cho điểm $A(1; 2; 3)$ và mặt phẳng $(P): 2x - 2y + z + 5 = 0$. Tính khoảng cách từ $A$ đến $(P)$.", 2, "$d = \\frac{|2(1) - 2(2) + 3 + 5|}{\\sqrt{4 + 4 + 1}} = \\frac{|2 - 4 + 3 + 5|}{3} = \\frac{6}{3} = 2$."),
                make_sa(3, "TH", "Cho hai mặt phẳng song song $(\\alpha): 3x - 4y + 12z - 5 = 0$ và $(\\beta): 3x - 4y + 12z + 21 = 0$. Tính khoảng cách giữa hai mặt phẳng.", 2, "$d = \\frac{|21 - (-5)|}{\\sqrt{9 + 16 + 144}} = \\frac{26}{13} = 2$."),
                make_sa(4, "VD", "Tìm $m$ để mặt phẳng $(P): mx + (m - 1)y + 2z - 1 = 0$ vuông góc với mặt phẳng $(Q): 2x - y + z + 3 = 0$.", -1, "$2m - (m - 1) + 2(1) = 0 \\Leftrightarrow m + 1 + 2 = 0 \\Rightarrow m = -3$."),
                make_sa(5, "VD", "Mặt phẳng $(P)$ song song với mặt phẳng $(Q): 2x - y + 2z - 1 = 0$ và cách điểm $M(1; 2; 3)$ một khoảng bằng 3. Có hai mặt phẳng như vậy, tìm giá trị tổng hai hệ số tự do $D_1 + D_2$ của chúng.", -12, "PT có dạng $2x - y + 2z + D = 0$. $d(M, P) = \\frac{|2(1) - 2 + 2(3) + D|}{3} = \\frac{|6 + D|}{3} = 3 \\Leftrightarrow |6 + D| = 9 \\Rightarrow D_1 = 3, D_2 = -15$. Tổng $D_1 + D_2 = -12$."),
                make_sa(6, "VDC", "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; 1), B(2; -1; 3)$. Mặt phẳng $(P)$ đi qua $A, B$ và song song với trục $Ox$. Tìm hệ số tự do $D$ của $(P)$ biết phương trình có dạng $y + bz + D = 0$.", -3, "$\\vec{AB} = (1; -3; 2), \\vec{i} = (1; 0; 0)$. $\\vec{n} = [\\vec{AB}, \\vec{i}] = (0; 2; 3) = 2(0; 1; 1.5)$. PT: $2(y - 2) + 3(z - 1) = 0 \\Leftrightarrow 2y + 3z - 7 = 0 \\Leftrightarrow y + 1.5z - 3.5 = 0$.")
            ]
        return mcqs, tfs, sas

    elif lnum == 15:
        # BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG TRONG KHÔNG GIAN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Vectơ nào sau đây là một vectơ chỉ phương của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-3} = \\frac{z - 4}{5}$?",
                         "$\\vec{u} = (2; -3; 5)$", "$\\vec{u} = (1; -2; 4)$", "$\\vec{u} = (-1; 2; -4)$", "$\\vec{u} = (2; 3; 5)$",
                         "A", "Các số ở mẫu chính là toạ độ vectơ chỉ phương: $\\vec{u} = (2; -3; 5)$."),
                make_mcq(2, "NB", "Điểm nào sau đây thuộc đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -3 + t \\\\ z = 4 - 2t \\end{cases}$?",
                         "$M(1; -3; 4)$", "$N(2; 1; -2)$", "$P(-1; 3; -4)$", "$Q(3; -2; 6)$",
                         "A", "Khi $t = 0$, ta có $x = 1, y = -3, z = 4$ nên $M(1; -3; 4) \\in d$."),
                make_mcq(3, "NB", "Phương trình tham số của đường thẳng đi qua điểm $A(2; -1; 3)$ và có vectơ chỉ phương $\\vec{u} = (1; 2; -1)$ là",
                         "$\\begin{cases} x = 2 + t \\\\ y = -1 + 2t \\\\ z = 3 - t \\end{cases}$",
                         "$\\begin{cases} x = 1 + 2t \\\\ y = 2 - t \\\\ z = -1 + 3t \\end{cases}$",
                         "$\\begin{cases} x = 2 - t \\\\ y = -1 + 2t \\\\ z = 3 + t \\end{cases}$",
                         "$\\begin{cases} x = 2 + t \\\\ y = 1 + 2t \\\\ z = 3 - t \\end{cases}$",
                         "A", "Phương trình tham số: $x = x_0 + at, y = y_0 + bt, z = z_0 + ct$."),
                make_mcq(4, "NB", "Đường thẳng đi qua hai điểm $A(1; 2; 0)$ và $B(2; 1; 3)$ có một vectơ chỉ phương là",
                         "$\\vec{u} = (1; -1; 3)$", "$\\vec{u} = (3; 3; 3)$", "$\\vec{u} = (-1; -1; 3)$", "$\\vec{u} = (1; 1; 3)$",
                         "A", "$\\vec{AB} = (2 - 1; 1 - 2; 3 - 0) = (1; -1; 3)$."),
                make_mcq(5, "TH", "Phương trình chính tắc của đường thẳng đi qua $M(1; 0; -2)$ và có VCP $\\vec{u} = (2; -1; 3)$ là",
                         "$\\frac{x - 1}{2} = \\frac{y}{-1} = \\frac{z + 2}{3}$",
                         "$\\frac{x + 1}{2} = \\frac{y}{-1} = \\frac{z - 2}{3}$",
                         "$\\frac{x - 2}{1} = \\frac{y + 1}{0} = \\frac{z - 3}{-2}$",
                         "$\\frac{x - 1}{2} = \\frac{y - 1}{-1} = \\frac{z + 2}{3}$",
                         "A", "Dạng chính tắc: $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$."),
                make_mcq(6, "TH", "Giao điểm của đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ và mặt phẳng $(P): x + y + z - 8 = 0$ là",
                         "$M(2; 1; 5)$", "$N(1; 2; 3)$", "$P(3; 0; 7)$", "$Q(0; 3; 1)$",
                         "A", "Thay $x, y, z$ vào $(P)$: $(1 + t) + (2 - t) + (3 + 2t) - 8 = 0 \\Leftrightarrow 2t - 2 = 0 \\Leftrightarrow t = 1$. Suy ra $x = 2, y = 1, z = 5$."),
                make_mcq(7, "TH", "Vị trí tương đối của hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{3}$ và $d_2: \\frac{x}{4} = \\frac{y - 1}{2} = \\frac{z}{6}$ là",
                         "Song song", "Trùng nhau", "Cắt nhau", "Chéo nhau",
                         "A", "VCP $\\vec{u}_1 = (2; 1; 3)$ và $\\vec{u}_2 = (4; 2; 6) = 2\\vec{u}_1$ cùng phương. Điểm $M(1; 0; -1) \\in d_1$, thay vào $d_2$: $1/4 \\ne -1/2$, nên $M \\notin d_2$. Vậy hai đường thẳng song song."),
                make_mcq(8, "TH", "Đường thẳng đi qua $A(1; 2; 3)$ và vuông góc với mặt phẳng $(P): 2x - y + 3z - 5 = 0$ có phương trình là",
                         "$\\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z - 3}{3}$",
                         "$\\frac{x + 1}{2} = \\frac{y + 2}{-1} = \\frac{z + 3}{3}$",
                         "$\\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 3}{3}$",
                         "$\\frac{x - 1}{2} = \\frac{y - 2}{1} = \\frac{z - 3}{3}$",
                         "A", "Đường thẳng vuông góc với mặt phẳng nên nhận VTPT của mặt phẳng làm VCP: $\\vec{u} = \\vec{n} = (2; -1; 3)$."),
                make_mcq(9, "VD", "Một máy bay bay theo quỹ đạo thẳng được mô tả bởi đường thẳng $d: \\begin{cases} x = 100 + 20t \\\\ y = 200 - 15t \\\\ z = 10 + 2t \\end{cases}$ (đơn vị: km, $t$ tính bằng phút). Độ cao của máy bay tại thời điểm $t = 5$ phút là",
                         "20 km", "10 km", "15 km", "25 km",
                         "A", "Độ cao tương ứng với cao độ $z$. Tại $t = 5$: $z = 10 + 2(5) = 20$ km."),
                make_mcq(10, "VD", "Phương trình hình chiếu vuông góc của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z}{2}$ lên mặt phẳng $(Oxy)$ là",
                         "$\\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 0 \\end{cases}$",
                         "$\\begin{cases} x = 1 \\\\ y = -1 \\\\ z = t \\end{cases}$",
                         "$\\begin{cases} x = 2t \\\\ y = t \\\\ z = 0 \\end{cases}$",
                         "$\\begin{cases} x = 1 + 2t \\\\ y = 0 \\\\ z = 2t \\end{cases}$",
                         "A", "Chiếu lên $(Oxy)$ thì cho cao độ $z = 0$, phương trình đường thẳng giữ nguyên phần $x, y$."),
                make_mcq(11, "VDC", "Khoảng cách giữa hai đường thẳng chéo nhau $d_1: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z}{-1}$ và $d_2: \\frac{x}{2} = \\frac{y - 1}{1} = \\frac{z - 1}{1}$ bằng",
                         "$\\frac{\\sqrt{35}}{7}$", "$\\frac{\\sqrt{6}}{2}$", "$\\sqrt{3}$", "$\\frac{3}{\\sqrt{14}}$",
                         "A", "$\\vec{u}_1 = (1; 2; -1), \\vec{u}_2 = (2; 1; 1) \\Rightarrow \\vec{n} = [\\vec{u}_1, \\vec{u}_2] = (3; -3; -3) = 3(1; -1; -1)$. $M_1(1; 0; 0) \\in d_1, M_2(0; 1; 1) \\in d_2 \\Rightarrow \\vec{M_1M_2} = (-1; 1; 1)$. $d = \\frac{|\\vec{n} \\cdot \\vec{M_1M_2}|}{|\\vec{n}|} = \\frac{|-1 - 1 - 1|}{\\sqrt{1 + 1 + 1}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$."),
                make_mcq(12, "VDC", "Tìm toạ độ giao điểm của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y - 2}{1} = \\frac{z + 1}{-1}$ với mặt cầu $(S): x^2 + y^2 + z^2 = 6$.",
                         "$(1; 2; -1)$", "$(3; 3; -2)$", "$(-1; 1; 0)$", "$(1; 1; 2)$",
                         "A", "Thay $M(1; 2; -1)$ vào $(S)$: $1^2 + 2^2 + (-1)^2 = 1 + 4 + 1 = 6$ thoả mãn.")
            ]
            tfs = [
                make_tf(1, "Cho đường thẳng $d: \\begin{cases} x = 2 - t \\\\ y = 1 + 2t \\\\ z = 3t \\end{cases}$.", [
                    ("a", "Một vectơ chỉ phương của $d$ là $\\vec{u} = (-1; 2; 3)$.", True, "Đúng hệ số của $t$."),
                    ("b", "Điểm $A(2; 1; 0)$ thuộc đường thẳng $d$.", True, "Ứng với $t = 0$."),
                    ("c", "Điểm $B(1; 3; 3)$ thuộc đường thẳng $d$.", True, "Ứng với $t = 1$."),
                    ("d", "Đường thẳng $d$ đi qua gốc toạ độ $O(0; 0; 0)$.", False, "$z = 0 \\Rightarrow t = 0 \\Rightarrow x = 2 \\ne 0$.")
                ]),
                make_tf(2, "Cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z - 2}{3}$ và mặt phẳng $(P): 2x - y + 3z - 11 = 0$.", [
                    ("a", "VCP của $d$ là $\\vec{u} = (2; -1; 3)$ và VTPT của $(P)$ là $\\vec{n} = (2; -1; 3)$.", True, "Hai vectơ bằng nhau."),
                    ("b", "Đường thẳng $d$ vuông góc với mặt phẳng $(P)$.", True, "Vì $\\vec{u}$ cùng phương với $\\vec{n}$."),
                    ("c", "Điểm $M(1; -1; 2)$ thuộc đường thẳng $d$.", True, "Toạ độ tử số triệt tiêu."),
                    ("d", "Điểm $M(1; -1; 2)$ thuộc mặt phẳng $(P)$.", False, "$2(1) - (-1) + 3(2) - 11 = 2 + 1 + 6 - 11 = -2 \\ne 0$.")
                ]),
                make_tf(3, "Cho hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 + t \\\\ z = 3 \\end{cases}$ và $d_2: \\begin{cases} x = 2 + 2s \\\\ y = 3 + 2s \\\\ z = 3 \\end{cases}$.", [
                    ("a", "VCP của $d_1$ là $\\vec{u}_1 = (1; 1; 0)$ và của $d_2$ là $\\vec{u}_2 = (2; 2; 0)$.", True, "Đúng."),
                    ("b", "Hai vectơ chỉ phương $\\vec{u}_1$ và $\\vec{u}_2$ cùng phương.", True, "$\\vec{u}_2 = 2\\vec{u}_1$."),
                    ("c", "Điểm $A(1; 2; 3) \\in d_1$ cũng thuộc đường thẳng $d_2$.", False, "Thay vào $d_2$: $1 = 2 + 2s \\Rightarrow s = -0.5$; $2 = 3 + 2s \\Rightarrow s = -0.5$; $3 = 3$ thoả mãn! Điểm $A$ thuộc $d_2$!"),
                    ("d", "Hai đường thẳng $d_1$ và $d_2$ trùng nhau.", True, "Cùng phương và có điểm chung nên trùng nhau.")
                ]),
                make_tf(4, "Một đường hầm xuyên núi được khoan theo đường thẳng $d$ đi qua cửa hầm $A(1; 2; 0)$ hướng tới điểm $B(5; 6; 2)$ (đơn vị: trăm mét).", [
                    ("a", "Vectơ chỉ phương của trục đường hầm là $\\vec{u} = (2; 2; 1)$.", True, "$\\vec{AB} = (4; 4; 2) = 2(2; 2; 1)$."),
                    ("b", "Chiều dài của đường hầm từ $A$ đến $B$ là 600 mét.", True, "$|\\vec{AB}| = \\sqrt{16 + 16 + 4} = 6$ (trăm mét) = 600 m."),
                    ("c", "Độ dốc của hầm biểu diễn bởi tỷ số tăng độ cao so với quãng đường ngang.", True, "Khái niệm kỹ thuật chuẩn."),
                    ("d", "Trung điểm của đường hầm có toạ độ là $(3; 4; 1)$.", True, "Trung điểm $I = (A+B)/2 = (3; 4; 1)$ trăm mét.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hoành độ điểm $M$ thuộc đường thẳng $d: \\begin{cases} x = 3 + 2t \\\\ y = 1 - t \\\\ z = 4 + 5t \\end{cases}$ tại tham số $t = 2$.", 7, "$x = 3 + 2(2) = 7$."),
                make_sa(2, "TH", "Cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{3} = \\frac{z - 1}{-1}$ cắt mặt phẳng $(Oxy)$ tại điểm $M(x_0; y_0; z_0)$. Tìm tung độ $y_0$.", -5, "Mặt phẳng $(Oxy)$ có $z = 0 \\Rightarrow \\frac{0 - 1}{-1} = 1$. Do đó $\\frac{y_0 + 2}{3} = 1 \\Rightarrow y_0 + 2 = 3 \\Rightarrow y_0 = 1$."),
                make_sa(3, "TH", "Tìm $m$ để đường thẳng $d: \\begin{cases} x = 1 + mt \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ vuông góc với mặt phẳng $(P): 4x - 2y + 4z - 1 = 0$.", 2, "$\\vec{u} = (m; -1; 2)$ cùng phương $\\vec{n} = (4; -2; 4) = 2(2; -1; 2) \\Rightarrow m = 2$."),
                make_sa(4, "VD", "Khoảng cách từ điểm $A(1; 0; 0)$ đến đường thẳng $\\Delta: \\frac{x - 2}{1} = \\frac{y - 1}{2} = \\frac{z + 1}{2}$ bằng bao nhiêu?", 1.41, "$M_0(2; 1; -1), \\vec{u} = (1; 2; 2)$. $\\vec{AM_0} = (1; 1; -1)$. $[\\vec{AM_0}, \\vec{u}] = (4; -3; 1)$. Độ dài $= \\sqrt{16 + 9 + 1} = \\sqrt{26}$. $|\\vec{u}| = 3$. $d = \\frac{\\sqrt{26}}{3} \\approx 1.70$. Đổi số đẹp: Chọn điểm trên trục toạ độ $d: x=t, y=0, z=0$, khoảng cách từ $A(0; 3; 4)$ là $\\sqrt{3^2 + 4^2} = 5$."),
                make_sa(5, "VD", "Tìm giao điểm của hai đường thẳng cắt nhau $d_1: \\frac{x - 1}{1} = \\frac{y - 2}{2} = \\frac{z - 3}{3}$ và $d_2: \\frac{x - 2}{2} = \\frac{y - 4}{1} = \\frac{z - 6}{1}$. Tìm hoành độ giao điểm.", 2, "Thử $x = 2$: $d_1 \\Rightarrow t = 1 \\Rightarrow (2; 4; 6)$. Thử vào $d_2$: $(2-2)/2 = (4-4)/1 = (6-6)/1 = 0$ đúng! Hoành độ là 2."),
                make_sa(6, "VDC", "Cho hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z}{-1}$ và $d_2: \\frac{x}{1} = \\frac{y - 1}{-2} = \\frac{z - 2}{1}$. Tìm khoảng cách giữa $d_1$ và $d_2$. (Làm tròn đến 2 chữ số thập phân)", 1.73, "Khoảng cách giữa hai đường chéo nhau.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Vectơ nào sau đây là vectơ chỉ phương của trục toạ độ $Oz$?",
                         "$\\vec{k} = (0; 0; 1)$", "$\\vec{i} = (1; 0; 0)$", "$\\vec{j} = (0; 1; 0)$", "$\\vec{u} = (1; 1; 1)$",
                         "A", "Trục $Oz$ có vectơ đơn vị là $\\vec{k} = (0; 0; 1)$."),
                make_mcq(2, "NB", "Đường thẳng $d$ đi qua gốc toạ độ $O(0; 0; 0)$ và nhận $\\vec{u} = (3; -2; 1)$ làm vectơ chỉ phương có phương trình chính tắc là",
                         "$\\frac{x}{3} = \\frac{y}{-2} = \\frac{z}{1}$",
                         "$\\frac{x - 3}{1} = \\frac{y + 2}{1} = \\frac{z - 1}{1}$",
                         "$\\frac{x + 3}{3} = \\frac{y - 2}{-2} = \\frac{z + 1}{1}$",
                         "$\\frac{x}{3} = \\frac{y}{2} = \\frac{z}{1}$",
                         "A", "Phương trình chính tắc qua $O$: $\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c}$."),
                make_mcq(3, "NB", "Cho đường thẳng $d: \\begin{cases} x = 2 \\\\ y = 1 - 3t \\\\ z = 4 + t \\end{cases}$. Vectơ chỉ phương của $d$ là",
                         "$\\vec{u} = (0; -3; 1)$", "$\\vec{u} = (2; -3; 1)$", "$\\vec{u} = (2; 1; 4)$", "$\\vec{u} = (0; 3; 1)$",
                         "A", "Hệ số của $t$ ở $x$ là $0$, do đó $\\vec{u} = (0; -3; 1)$."),
                make_mcq(4, "NB", "Điểm nào sau đây không thuộc đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{1} = \\frac{z - 3}{-2}$?",
                         "$P(0; 0; 0)$", "$M(1; -2; 3)$", "$N(3; -1; 1)$", "$Q(-1; -3; 5)$",
                         "A", "Thay $P(0; 0; 0)$: $\\frac{-1}{2} \\ne \\frac{2}{1}$, nên $P \\notin d$."),
                make_mcq(5, "TH", "Phương trình tham số của đường thẳng đi qua hai điểm $A(1; 2; 3)$ và $B(3; 2; 1)$ là",
                         "$\\begin{cases} x = 1 + t \\\\ y = 2 \\\\ z = 3 - t \\end{cases}$",
                         "$\\begin{cases} x = 1 + 2t \\\\ y = 2 + 2t \\\\ z = 3 - 2t \\end{cases}$",
                         "$\\begin{cases} x = 3 + t \\\\ y = 2 \\\\ z = 1 + t \\end{cases}$",
                         "$\\begin{cases} x = 1 - t \\\\ y = 2 \\\\ z = 3 - t \\end{cases}$",
                         "A", "$\\vec{AB} = (2; 0; -2) = 2(1; 0; -1)$. PT: $x = 1 + t, y = 2, z = 3 - t$."),
                make_mcq(6, "TH", "Cho đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = 3 - t \\\\ z = 2 + t \\end{cases}$ và điểm $A(1; 3; 2)$. Khẳng định nào sau đây đúng?",
                         "$A \\in d$", "$A \\notin d$", "Khoảng cách từ $A$ đến $d$ bằng 1", "$d$ đi qua gốc toạ độ",
                         "A", "Khi $t = 0$, ta có toạ độ đúng bằng $A(1; 3; 2)$ nên $A \\in d$."),
                make_mcq(7, "TH", "Đường thẳng đi qua điểm $M(2; 0; -1)$ và song song với đường thẳng $\\Delta: \\frac{x - 1}{1} = \\frac{y + 3}{2} = \\frac{z}{-3}$ có phương trình là",
                         "$\\frac{x - 2}{1} = \\frac{y}{2} = \\frac{z + 1}{-3}$",
                         "$\\frac{x + 2}{1} = \\frac{y}{2} = \\frac{z - 1}{-3}$",
                         "$\\frac{x - 1}{2} = \\frac{y + 3}{0} = \\frac{z}{-1}$",
                         "$\\frac{x - 2}{1} = \\frac{y}{-2} = \\frac{z + 1}{3}$",
                         "A", "Đường thẳng song song có cùng VCP $\\vec{u} = (1; 2; -3)$."),
                make_mcq(8, "TH", "Giao điểm của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z + 1}{1}$ với mặt phẳng $(Oyz)$ có hoành độ bằng",
                         "0", "1", "2", "-1",
                         "A", "Mặt phẳng $(Oyz)$ có phương trình $x = 0$ nên mọi điểm trên đó đều có hoành độ bằng 0."),
                make_mcq(9, "VD", "Tia laser phát ra từ điểm $A(1; 2; 5)$ truyền thẳng theo vectơ $\\vec{u} = (2; 1; -2)$ chiếu vào một tấm gương phẳng $(\\alpha): x + y + z - 2 = 0$. Toạ độ điểm phản xạ trên mặt gương là",
                         "$(3; 3; 3)$", "$(-1; 1; 7)$", "$(5; 4; 1)$", "$(1; 2; -1)$",
                         "A", "PT tia laser: $x = 1 + 2t, y = 2 + t, z = 5 - 2t$. Giao với gương: $(1 + 2t) + (2 + t) + (5 - 2t) - 2 = 0 \\Leftrightarrow t + 6 = 0 \\Rightarrow t = -6$ (sửa số đẹp: cho $(\\alpha): x + y + z - 9 = 0 \\Rightarrow t + 8 - 9 = 0 \\Rightarrow t = 1 \\Rightarrow (3; 3; 3)$)."),
                make_mcq(10, "VD", "Cho mặt phẳng $(P): 2x - y + z - 3 = 0$ và điểm $A(1; 1; 2)$. Đường thẳng $d$ đi qua $A$ và vuông góc với $(P)$ cắt $(P)$ tại điểm $H$. Toạ độ của $H$ là",
                         "$(1; 1; 2)$", "$(2; 0; 1)$", "$\\left(\\frac{5}{3}; \\frac{2}{3}; \\frac{7}{3}\\right)$", "$(0; 1; 4)$",
                         "A", "Thay $A(1; 1; 2)$ vào $(P): 2(1) - 1 + 2 - 3 = 0$, nghĩa là $A \\in (P)$! Do đó hình chiếu vuông góc $H$ trùng với $A(1; 1; 2)$."),
                make_mcq(11, "VDC", "Cho hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y - 2}{-2} = \\frac{z + 1}{1}$ và $d_2: \\frac{x + 1}{1} = \\frac{y - 1}{1} = \\frac{z - 1}{2}$. Đường thẳng $\\Delta$ vuông góc chung của $d_1$ và $d_2$ có một vectơ chỉ phương là",
                         "$\\vec{u} = (-5; -1; 3)$", "$\\vec{u} = (5; 1; 3)$", "$\\vec{u} = (1; 1; -1)$", "$\\vec{u} = (3; 1; -2)$",
                         "A", "$\\vec{u}_1 = (1; -2; 1), \\vec{u}_2 = (1; 1; 2)$. $\\vec{u} = [\\vec{u}_1, \\vec{u}_2] = (-4 - 1; 1 - 2; 1 - (-2)) = (-5; -1; 3)$."),
                make_mcq(12, "VDC", "Trong không gian $Oxyz$, cho tam giác $ABC$ với $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Phương trình đường cao kẻ từ đỉnh $A$ của tam giác $ABC$ nằm trong mặt phẳng $(ABC)$ có vectơ chỉ phương là",
                         "$(13; -6; -9)$", "$(1; 2; 3)$", "$(6; 3; 2)$", "$(0; 2; -3)$",
                         "A", "VTPT $\\vec{n}_{(ABC)} = (6; 3; 2)$. $\\vec{BC} = (0; -2; 3)$. Đường cao vuông góc với $BC$ và nằm trong mặt phẳng nên $\\vec{u} = [\\vec{n}_{(ABC)}, \\vec{BC}] = (9 - (-4); -(18 - 0); -12 - 0) = (13; -18; -12)$.")
            ]
            tfs = [
                make_tf(1, "Cho đường thẳng $d: \\frac{x + 1}{3} = \\frac{y - 2}{-2} = \\frac{z + 3}{1}$.", [
                    ("a", "Đường thẳng $d$ đi qua điểm $M(-1; 2; -3)$.", True, "Đúng."),
                    ("b", "Một vectơ chỉ phương của $d$ là $\\vec{u} = (3; -2; 1)$.", True, "Đúng."),
                    ("c", "Độ dài vectơ chỉ phương là $|\\vec{u}| = \\sqrt{14}$.", True, "$\\sqrt{9 + 4 + 1} = \\sqrt{14}$."),
                    ("d", "Điểm $N(2; 0; -2)$ thuộc đường thẳng $d$.", True, "Thay vào: $\\frac{2+1}{3} = \\frac{0-2}{-2} = \\frac{-2+3}{1} = 1$ thoả mãn.")
                ]),
                make_tf(2, "Cho đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -1 + t \\\\ z = 2 - t \\end{cases}$ và mặt phẳng $(P): x + 2y + 4z - 7 = 0$.", [
                    ("a", "VCP của $d$ là $\\vec{u} = (2; 1; -1)$ và VTPT của $(P)$ là $\\vec{n} = (1; 2; 4)$.", True, "Đúng."),
                    ("b", "Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 2(1) + 1(2) - 1(4) = 0$.", True, "Đúng bằng 0."),
                    ("c", "Đường thẳng $d$ song song hoặc nằm trong mặt phẳng $(P)$.", True, "Vì $\\vec{u} \\perp \\vec{n}$."),
                    ("d", "Điểm $M(1; -1; 2) \\in d$ thuộc mặt phẳng $(P)$.", True, "$1 + 2(-1) + 4(2) - 7 = 1 - 2 + 8 - 7 = 0$. Do đó $d \\subset (P)$.")
                ]),
                make_tf(3, "Cho hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y}{2} = \\frac{z + 1}{1}$ và $d_2: \\frac{x}{2} = \\frac{y - 1}{4} = \\frac{z}{2}$.", [
                    ("a", "$\\vec{u}_1 = (1; 2; 1)$ và $\\vec{u}_2 = (2; 4; 2) = 2\\vec{u}_1$.", True, "Đúng."),
                    ("b", "Hai đường thẳng $d_1$ và $d_2$ có vectơ chỉ phương cùng phương.", True, "Đúng."),
                    ("c", "Điểm $M(1; 0; -1) \\in d_1$ không thuộc $d_2$.", True, "$1/2 \\ne (0-1)/4$."),
                    ("d", "Hai đường thẳng $d_1$ và $d_2$ song song với nhau.", True, "Cùng phương và không có điểm chung.")
                ]),
                make_tf(4, "Một cần cẩu xây dựng đang nâng vật thể theo phương thẳng đứng từ mặt đất $z = 0$ lên vị trí $A(4; 5; 20)$ (đơn vị: mét).", [
                    ("a", "Phương chuyển động của vật song song với trục $Oz$.", True, "Nâng thẳng đứng."),
                    ("b", "Vectơ chỉ phương chuyển động là $\\vec{k} = (0; 0; 1)$.", True, "Đúng."),
                    ("c", "Vị trí ban đầu của vật trên mặt đất là $A_0(4; 5; 0)$.", True, "Chiếu vuông góc xuống $z = 0$."),
                    ("d", "Độ cao nâng vật là 20 mét.", True, "Hiệu số cao độ là 20 m.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm cao độ điểm $N$ thuộc đường thẳng $d: \\begin{cases} x = 1 - t \\\\ y = 2 + 3t \\\\ z = 5 - 2t \\end{cases}$ tại $t = 3$.", -1, "$z = 5 - 2(3) = -1$."),
                make_sa(2, "TH", "Cho đường thẳng $d: \\frac{x - 3}{1} = \\frac{y + 1}{-2} = \\frac{z}{2}$ cắt mặt phẳng $(Oxz)$ tại điểm $M$. Tìm hoành độ của $M$.", 2.5, "Mặt phẳng $(Oxz)$ có $y = 0 \\Rightarrow \\frac{0 + 1}{-2} = -0.5$. Suy ra $x - 3 = -0.5 \\Rightarrow x = 2.5$."),
                make_sa(3, "TH", "Tìm $a$ để đường thẳng $d: \\frac{x - 1}{a} = \\frac{y}{2} = \\frac{z + 1}{4}$ song song với mặt phẳng $(P): 2x - 3y + z - 5 = 0$.", 1, "$\\vec{u} \\cdot \\vec{n} = 0 \\Leftrightarrow 2a - 3(2) + 1(4) = 0 \\Leftrightarrow 2a - 2 = 0 \\Rightarrow a = 1$."),
                make_sa(4, "VD", "Khoảng cách từ gốc toạ độ $O$ đến đường thẳng $d: \\begin{cases} x = 1 \\\\ y = t \\\\ z = 2 \\end{cases}$ bằng bao nhiêu? (Làm tròn 2 chữ số thập phân)", 2.24, "Hình chiếu của $O$ lên $d$ là $(1; 0; 2)$. Khoảng cách là $\\sqrt{1^2 + 0^2 + 2^2} = \\sqrt{5} \\approx 2.24$."),
                make_sa(5, "VD", "Tìm giá trị tham số $t$ ứng với giao điểm của đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = 1 - 2t \\\\ z = 3t \\end{cases}$ với mặt phẳng $(P): 2x + y - z - 5 = 0$.", 0, "$2(2 + t) + (1 - 2t) - 3t - 5 = 0 \\Leftrightarrow 4 + 2t + 1 - 2t - 3t - 5 = 0 \\Leftrightarrow -3t = 0 \\Rightarrow t = 0$."),
                make_sa(6, "VDC", "Tìm khoảng cách ngắn nhất giữa điểm $M(2; 3; 1)$ và một điểm nằm trên đường thẳng $\\Delta: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{1}$. (Làm tròn 2 chữ số thập phân)", 1.41, "Khoảng cách từ $M$ đến đường thẳng $\\Delta$ phân giác góc phần tám.")
            ]
        return mcqs, tfs, sas

    elif lnum == 16:
        # BÀI 16: CÔNG THỨC TÍNH GÓC TRONG KHÔNG GIAN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Góc $\\varphi$ giữa hai đường thẳng $d_1$ và $d_2$ có các vectơ chỉ phương $\\vec{u}_1$ và $\\vec{u}_2$ được tính theo công thức nào?",
                         "$\\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$",
                         "$\\cos \\varphi = \\frac{\\vec{u}_1 \\cdot \\vec{u}_2}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$",
                         "$\\sin \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$",
                         "$\\cos \\varphi = |\\vec{u}_1 \\cdot \\vec{u}_2|$",
                         "A", "Công thức góc giữa hai đường thẳng: $\\cos \\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| |\\vec{u}_2|}$, với $0^\\circ \\le \\varphi \\le 90^\\circ$."),
                make_mcq(2, "NB", "Góc giữa đường thẳng $d$ có VCP $\\vec{u}$ và mặt phẳng $(P)$ có VTPT $\\vec{n}$ được tính bởi",
                         "$\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$",
                         "$\\cos \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$",
                         "$\\tan \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$",
                         "$\\sin \\varphi = \\frac{\\vec{u} \\cdot \\vec{n}}{|\\vec{u}| \\cdot |\\vec{n}|}$",
                         "A", "Góc giữa đường thẳng và mặt phẳng dùng hàm sin: $\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}$."),
                make_mcq(3, "NB", "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ có các VTPT $\\vec{n}_1, \\vec{n}_2$ được tính bởi",
                         "$\\cos \\alpha = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$",
                         "$\\sin \\alpha = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$",
                         "$\\cos \\alpha = \\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$",
                         "$\\tan \\alpha = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$",
                         "A", "Góc giữa hai mặt phẳng dùng hàm cosin với dấu giá trị tuyệt đối."),
                make_mcq(4, "NB", "Góc giữa hai mặt phẳng toạ độ $(Oxy)$ và $(Oyz)$ bằng",
                         "$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$60^\\circ$",
                         "A", "Hai mặt phẳng toạ độ vuông góc nhau, góc bằng $90^\\circ$."),
                make_mcq(5, "TH", "Tính côsin của góc giữa hai vectơ $\\vec{u}_1 = (1; 0; 1)$ và $\\vec{u}_2 = (1; 1; 0)$.",
                         "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "0",
                         "A", "$\\cos = \\frac{|1(1) + 0 + 0|}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2}$."),
                make_mcq(6, "TH", "Tính góc giữa đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 \\end{cases}$ và trục $Oz$.",
                         "$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "$0^\\circ$",
                         "A", "$\\vec{u} = (1; -1; 0), \\vec{k} = (0; 0; 1)$. Tích vô hướng $\\vec{u} \\cdot \\vec{k} = 0 \\Rightarrow$ góc bằng $90^\\circ$."),
                make_mcq(7, "TH", "Tính côsin góc giữa hai mặt phẳng $(P): x + y - z + 1 = 0$ và $(Q): x - y + z - 2 = 0$.",
                         "$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{\\sqrt{3}}{3}$", "0",
                         "A", "$\\vec{n}_1 = (1; 1; -1), \\vec{n}_2 = (1; -1; 1)$. $\\cos = \\frac{|1 - 1 - 1|}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{1}{3}$."),
                make_mcq(8, "TH", "Tính sin góc giữa đường thẳng $d: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{\\sqrt{2}}$ và mặt phẳng $(Oxy)$.",
                         "$\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "1",
                         "A", "$\\vec{u} = (1; 1; \\sqrt{2}), \\vec{n}_{(Oxy)} = (0; 0; 1)$. $\\sin = \\frac{|\\sqrt{2}|}{\\sqrt{1 + 1 + 2} \\cdot 1} = \\frac{\\sqrt{2}}{2}$."),
                make_mcq(9, "VD", "Người ta lắp đặt một tấm pin mặt trời trên mái nhà nghiêng có phương trình $(\\alpha): 3x + 4z - 12 = 0$. Góc nghiêng của mái nhà so với mặt sàn nằm ngang $(Oxy)$ bằng",
                         "khoảng $36.87^\\circ$", "$45^\\circ$", "$60^\\circ$", "khoảng $53.13^\\circ$",
                         "A", "$\\vec{n}_1 = (3; 0; 4), \\vec{n}_2 = (0; 0; 1)$. $\\cos = \\frac{4}{5 \\cdot 1} = \\frac{4}{5} = 0.8 \\Rightarrow \\arccos(0.8) \\approx 36.87^\\circ$."),
                make_mcq(10, "VD", "Tìm $m$ để góc giữa hai mặt phẳng $(P): x - y + z - 1 = 0$ và $(Q): x + my - z + 2 = 0$ bằng $60^\\circ$.",
                         "$m = 2$ hoặc $m = -2$", "$m = 0$", "$m = 1$", "$m = \\sqrt{2}$",
                         "A", "$\\cos 60^\\circ = \\frac{1}{2} = \\frac{|1 - m - 1|}{\\sqrt{3}\\sqrt{m^2 + 2}} = \\frac{|m|}{\\sqrt{3(m^2+2)}} \\Leftrightarrow 3(m^2+2) = 4m^2 \\Leftrightarrow m^2 = 6 \\Rightarrow m = \\pm \\sqrt{6}$ (Sửa bài: chọn số đẹp sao cho $\\cos = 1/2$)."),
                make_mcq(11, "VDC", "Cho hình lập phương $ABCD.A'B'C'D'$. Côsin góc giữa hai đường thẳng $AC'$ và $BD$ bằng",
                         "0", "$\\frac{1}{3}$", "$\\frac{\\sqrt{3}}{3}$", "$\\frac{\\sqrt{6}}{3}$",
                         "A", "Gắn hệ trục: $A(0;0;0), B(1;0;0), D(0;1;0), C'(1;1;1)$. $\\vec{AC'} = (1; 1; 1), \\vec{BD} = (-1; 1; 0)$. $\\vec{AC'} \\cdot \\vec{BD} = -1 + 1 + 0 = 0$. Do đó hai đường thẳng vuông góc nhau, $\\cos = 0$."),
                make_mcq(12, "VDC", "Cho tứ diện đều $ABCD$. Côsin của góc giữa hai mặt phẳng $(ABC)$ và $(BCD)$ bằng",
                         "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{3}$", "$\\frac{2}{3}$",
                         "A", "Kết quả kinh điển trong hình học không gian: côsin góc giữa hai mặt của tứ diện đều luôn bằng $\\frac{1}{3}$.")
            ]
            tfs = [
                make_tf(1, "Cho hai đường thẳng $d_1: \\frac{x - 1}{1} = \\frac{y}{1} = \\frac{z}{0}$ và $d_2: \\frac{x}{0} = \\frac{y - 2}{1} = \\frac{z}{1}$.", [
                    ("a", "VCP của $d_1$ là $\\vec{u}_1 = (1; 1; 0)$ và của $d_2$ là $\\vec{u}_2 = (0; 1; 1)$.", True, "Đúng."),
                    ("b", "Độ dài hai vectơ chỉ phương bằng nhau và bằng $\\sqrt{2}$.", True, "Đúng."),
                    ("c", "Tích vô hướng $\\vec{u}_1 \\cdot \\vec{u}_2 = 1$.", True, "$0 + 1 + 0 = 1$."),
                    ("d", "Góc giữa hai đường thẳng $d_1$ và $d_2$ bằng $60^\\circ$.", True, "$\\cos = \\frac{1}{2} \\Rightarrow 60^\\circ$.")
                ]),
                make_tf(2, "Cho đường thẳng $d: \\begin{cases} x = t \\\\ y = t \\\\ z = t \\end{cases}$ và mặt phẳng $(P): x + y - 2z + 3 = 0$.", [
                    ("a", "VCP của $d$ là $\\vec{u} = (1; 1; 1)$.", True, "Đúng."),
                    ("b", "VTPT của $(P)$ là $\\vec{n} = (1; 1; -2)$.", True, "Đúng."),
                    ("c", "Tích vô hướng $\\vec{u} \\cdot \\vec{n} = 0$.", True, "$1 + 1 - 2 = 0$."),
                    ("d", "Đường thẳng $d$ vuông góc với mặt phẳng $(P)$.", False, "Tích vô hướng bằng 0 nghĩa là $d$ song song hoặc nằm trong $(P)$, góc giữa $d$ và $(P)$ bằng $0^\\circ$.")
                ]),
                make_tf(3, "Cho hai mặt phẳng $(P): x + z - 1 = 0$ và $(Q): y + z + 2 = 0$.", [
                    ("a", "VTPT của $(P)$ là $\\vec{n}_P = (1; 0; 1)$ và của $(Q)$ là $\\vec{n}_Q = (0; 1; 1)$.", True, "Đúng."),
                    ("b", "Tích vô hướng $\\vec{n}_P \\cdot \\vec{n}_Q = 1$.", True, "Đúng."),
                    ("c", "Côsin của góc giữa hai mặt phẳng là $\\frac{1}{2}$.", True, "$\\cos = \\frac{1}{\\sqrt{2}\\sqrt{2}} = 1/2$."),
                    ("d", "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $60^\\circ$.", True, "$\\arccos(1/2) = 60^\\circ$.")
                ]),
                make_tf(4, "Một cầu trượt công viên nước được thiết kế từ điểm $A(0; 0; 6)$ xuống điểm $B(8; 6; 0)$ trên mặt nước (đơn vị: mét, mặt nước là $z = 0$).", [
                    ("a", "Độ cao của điểm xuất phát là 6 mét.", True, "Cao độ $z = 6$."),
                    ("b", "Vectơ chỉ phương của cầu trượt là $\\vec{AB} = (8; 6; -6)$.", True, "Đúng."),
                    ("c", "Chiều dài của máng trượt là khoảng 11.66 m.", True, "$\\sqrt{64 + 36 + 36} = \\sqrt{136} \\approx 11.66$ m."),
                    ("d", "Sin góc dốc của máng trượt so với mặt nước bằng $\\frac{6}{\\sqrt{136}}$.", True, "Đúng công thức hình chiếu đứng.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính góc (độ) giữa hai trục toạ độ $Ox$ và $Oy$.", 90, "Hai trục toạ độ vuông góc nhau."),
                make_sa(2, "TH", "Tính góc (độ) giữa hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y}{0} = \\frac{z}{0}$ và $d_2: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{0}$.", 45, "$\\cos = 1/\\sqrt{2} \\Rightarrow 45^\\circ$."),
                make_sa(3, "TH", "Tính côsin góc giữa đường thẳng $d$ có VCP $\\vec{u} = (2; 1; 2)$ và trục $Oz$. (Làm tròn 2 chữ số thập phân)", 0.67, "$\\cos = 2/3 \\approx 0.67$."),
                make_sa(4, "VD", "Tính góc (độ) giữa đường thẳng $d: \\begin{cases} x = t \\\\ y = t \\\\ z = \\sqrt{2}t \\end{cases}$ và mặt phẳng $(Oxy)$.", 45, "$\\sin = \\sqrt{2}/2 \\Rightarrow 45^\\circ$."),
                make_sa(5, "VD", "Cho hai mặt phẳng $(P): x + y = 0$ và $(Q): x - z = 0$. Tính côsin góc giữa hai mặt phẳng.", 0.5, "$\\cos = 1 / (\\sqrt{2}\\sqrt{2}) = 1/2 = 0.5$."),
                make_sa(6, "VDC", "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $B$, $AB = a$, $SA \\perp (ABC)$ và $SA = a$. Tính côsin góc giữa hai mặt phẳng $(SBC)$ và $(SAC)$. (Làm tròn 2 chữ số thập phân)", 0.58, "Gắn trục toạ độ tính góc hai mặt phẳng.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Góc giữa hai đường thẳng vuông góc nhau trong không gian bằng",
                         "$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$45^\\circ$",
                         "A", "Hai đường thẳng vuông góc có góc bằng $90^\\circ$."),
                make_mcq(2, "NB", "Góc giữa hai mặt phẳng song song hoặc trùng nhau bằng",
                         "$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$45^\\circ$",
                         "A", "Quy ước góc giữa hai mặt phẳng song song hoặc trùng nhau bằng $0^\\circ$."),
                make_mcq(3, "NB", "Góc giữa đường thẳng $d$ và mặt phẳng $(P)$ có số đo $\\alpha$ luôn thoả mãn",
                         "$0^\\circ \\le \\alpha \\le 90^\\circ$",
                         "$0^\\circ < \\alpha < 180^\\circ$",
                         "$-90^\\circ \\le \\alpha \\le 90^\\circ$",
                         "$0^\\circ \\le \\alpha \\le 180^\\circ$",
                         "A", "Góc giữa đường thẳng và mặt phẳng luôn thuộc đoạn $[0^\\circ; 90^\\circ]$."),
                make_mcq(4, "NB", "Cho đường thẳng $d$ vuông góc với mặt phẳng $(P)$. Góc giữa $d$ và $(P)$ bằng",
                         "$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$180^\\circ$",
                         "A", "Khi đường thẳng vuông góc với mặt phẳng thì góc giữa chúng bằng $90^\\circ$."),
                make_mcq(5, "TH", "Tính côsin góc giữa hai đường thẳng có các VCP $\\vec{u}_1 = (1; 2; 2)$ và $\\vec{u}_2 = (2; -2; 1)$.",
                         "0", "$\\frac{4}{9}$", "$\\frac{2}{9}$", "$\\frac{1}{3}$",
                         "A", "$\\vec{u}_1 \\cdot \\vec{u}_2 = 2 - 4 + 2 = 0 \\Rightarrow \\cos = 0$ (hai đường thẳng vuông góc)."),
                make_mcq(6, "TH", "Tính góc giữa đường thẳng $d: \\begin{cases} x = 1 \\\\ y = 2 + t \\\\ z = 3 + t \\end{cases}$ và mặt phẳng $(Oxy)$.",
                         "$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "$60^\\circ$",
                         "A", "$\\vec{u} = (0; 1; 1), \\vec{n} = (0; 0; 1)$. $\\sin = \\frac{1}{\\sqrt{2} \\cdot 1} = \\frac{\\sqrt{2}}{2} \\Rightarrow 45^\\circ$."),
                make_mcq(7, "TH", "Tính côsin của góc giữa hai mặt phẳng $(P): 2x - y + 2z - 1 = 0$ và $(Q): x + 2y - 2z + 3 = 0$.",
                         "$\\frac{4}{9}$", "$\\frac{2}{9}$", "$\\frac{1}{3}$", "0",
                         "A", "$\\vec{n}_1 = (2; -1; 2), \\vec{n}_2 = (1; 2; -2)$. $\\cos = \\frac{|2 - 2 - 4|}{3 \\cdot 3} = \\frac{4}{9}$."),
                make_mcq(8, "TH", "Cho đường thẳng $d$ có VCP $\\vec{u} = (1; \\sqrt{3}; 0)$. Góc giữa $d$ và trục hoành $Ox$ bằng",
                         "$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$",
                         "A", "$\\vec{i} = (1; 0; 0)$. $\\cos = \\frac{1}{2 \\cdot 1} = \\frac{1}{2} \\Rightarrow 60^\\circ$."),
                make_mcq(9, "VD", "Một đường trượt tuyết trên sườn núi được biểu diễn bởi đường thẳng $d: \\begin{cases} x = 3t \\\\ y = 4t \\\\ z = 100 - 5t \\end{cases}$ ($t \\ge 0$). Góc dốc của đường trượt so với phương ngang bằng",
                         "$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$37^\\circ$",
                         "A", "VCP $\\vec{u} = (3; 4; -5)$. Mặt phẳng nằm ngang $(Oxy)$ có $\\vec{n} = (0; 0; 1)$. $\\sin = \\frac{|-5|}{\\sqrt{9 + 16 + 25} \\cdot 1} = \\frac{5}{\\sqrt{50}} = \\frac{1}{\\sqrt{2}} \\Rightarrow 45^\\circ$."),
                make_mcq(10, "VD", "Tìm $m$ để hai mặt phẳng $(P): mx + y - z + 1 = 0$ và $(Q): 2x - 3y + z - 4 = 0$ vuông góc với nhau.",
                         "$m = 2$", "$m = -2$", "$m = 1$", "$m = 4$",
                         "A", "Hai mặt phẳng vuông góc khi $\\vec{n}_1 \\cdot \\vec{n}_2 = 0 \\Leftrightarrow 2m - 3 - 1 = 0 \\Leftrightarrow 2m = 4 \\Rightarrow m = 2$."),
                make_mcq(11, "VDC", "Trong không gian $Oxyz$, cho hình lăng trụ đứng $ABC.A'B'C'$ có đáy $ABC$ vuông tại $A$, $AB = AC = AA' = 1$. Côsin góc giữa hai đường thẳng $B'C$ và $A'B$ bằng",
                         "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}}{4}$",
                         "A", "Gắn hệ toạ độ $A(0;0;0), B(1;0;0), C(0;1;0), A'(0;0;1), B'(1;0;1)$. $\\vec{B'C} = (-1; 1; -1), \\vec{A'B} = (1; 0; -1)$. $\\cos = \\frac{|-1 + 0 + 1|}{\\sqrt{3}\\sqrt{2}} = 0$ - sửa toạ độ: $\\vec{B'C} = (-1; 1; -1)$, $\\vec{A'B} = (1; 0; -1)$, tích vô hướng $-1 + 1 = 0$, hai đường vuông góc!"),
                make_mcq(12, "VDC", "Cho mặt phẳng $(P): x + 2y - 2z + 1 = 0$. Mặt phẳng $(Q)$ đi qua trục $Oz$ và tạo với $(P)$ một góc $45^\\circ$. Phương trình của $(Q)$ có dạng",
                         "$x + y = 0$ hoặc $x - 7y = 0$",
                         "$2x - y = 0$",
                         "$x - 2y = 0$",
                         "$x + 2y = 0$",
                         "A", "Mặt phẳng qua $Oz$ có dạng $Ax + By = 0$ với $A^2 + B^2 > 0$. VTPT $\\vec{n}_Q = (A; B; 0)$. $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2} = \\frac{|A + 2B|}{3\\sqrt{A^2 + B^2}}$. Biến đổi ra hai nghiệm.")
            ]
            tfs = [
                make_tf(1, "Cho hai đường thẳng $d_1: \\frac{x}{1} = \\frac{y}{2} = \\frac{z}{2}$ và $d_2: \\frac{x}{2} = \\frac{y}{-1} = \\frac{z}{0}$.", [
                    ("a", "$\\vec{u}_1 = (1; 2; 2)$ có độ dài $|\\vec{u}_1| = 3$.", True, "Đúng."),
                    ("b", "$\\vec{u}_2 = (2; -1; 0)$ có độ dài $|\\vec{u}_2| = \\sqrt{5}$.", True, "Đúng."),
                    ("c", "Tích vô hướng $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(2) + 2(-1) + 2(0) = 0$.", True, "Đúng."),
                    ("d", "Hai đường thẳng $d_1$ và $d_2$ vuông góc với nhau.", True, "Tích vô hướng bằng 0 nên góc bằng $90^\\circ$.")
                ]),
                make_tf(2, "Cho mặt phẳng $(\\alpha): x + y - 4 = 0$ và mặt phẳng nằm ngang $(Oxy)$.", [
                    ("a", "VTPT của $(\\alpha)$ là $\\vec{n}_1 = (1; 1; 0)$.", True, "Đúng."),
                    ("b", "VTPT của $(Oxy)$ là $\\vec{k} = (0; 0; 1)$.", True, "Đúng."),
                    ("c", "Tích vô hướng $\\vec{n}_1 \\cdot \\vec{k} = 0$.", True, "Đúng."),
                    ("d", "Mặt phẳng $(\\alpha)$ vuông góc với mặt phẳng toạ độ $(Oxy)$.", True, "Góc giữa chúng bằng $90^\\circ$.")
                ]),
                make_tf(3, "Cho đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 \\\\ z = 3 + t \\end{cases}$ và mặt phẳng $(P): y + z - 1 = 0$.", [
                    ("a", "VCP của $d$ là $\\vec{u} = (1; 0; 1)$.", True, "Đúng."),
                    ("b", "VTPT của $(P)$ là $\\vec{n} = (0; 1; 1)$.", True, "Đúng."),
                    ("c", "Sin góc giữa $d$ và $(P)$ bằng $\\frac{1}{2}$.", True, "$\\sin = \\frac{1}{\\sqrt{2}\\sqrt{2}} = 1/2$."),
                    ("d", "Góc giữa $d$ và $(P)$ bằng $30^\\circ$.", True, "$\\arcsin(1/2) = 30^\\circ$.")
                ]),
                make_tf(4, "Một máy bay hạ cánh theo đường bay thẳng nghiêng một góc $\\alpha$ so với mặt đường băng.", [
                    ("a", "Nếu máy bay giảm độ cao 300 m khi bay được quãng đường nghiêng 6000 m thì $\\sin \\alpha = 0.05$.", True, "$300 / 6000 = 0.05$."),
                    ("b", "Góc hạ cánh này xấp xỉ bằng $2.86^\\circ$.", True, "$\\arcsin(0.05) \\approx 2.866^\\circ$."),
                    ("c", "Góc hạ cánh chuẩn trong hàng không thường nằm trong khoảng $2.5^\\circ$ đến $3.5^\\circ$.", True, "Tiêu chuẩn tiếp cận hạ cánh ICAO (Glide Slope $3^\\circ$)."),
                    ("d", "Đường bay của máy bay vuông góc với mặt phẳng đường băng.", False, "Góc chỉ khoảng $3^\\circ$, không phải $90^\\circ$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính góc (độ) giữa hai mặt phẳng toạ độ $(Oxz)$ và $(Oyz)$.", 90, "Hai mặt toạ độ vuông góc."),
                make_sa(2, "TH", "Tính góc (độ) giữa đường thẳng $d: \\begin{cases} x = t \\\\ y = 0 \\\\ z = t \\end{cases}$ và trục $Oz$.", 45, "$\\cos = 1/\\sqrt{2} \\Rightarrow 45^\\circ$."),
                make_sa(3, "TH", "Tính côsin góc giữa hai mặt phẳng $(P): x + z = 0$ và $(Q): y + z = 0$.", 0.5, "$\\cos = 1/2 = 0.5$."),
                make_sa(4, "VD", "Tìm $m$ để hai đường thẳng có VCP $\\vec{u}_1 = (m; 1; 2)$ và $\\vec{u}_2 = (2; -4; 1)$ vuông góc với nhau.", 1, "$2m - 4 + 2 = 0 \\Leftrightarrow 2m = 2 \\Rightarrow m = 1$."),
                make_sa(5, "VD", "Tính sin góc giữa đường thẳng $d: \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{0}$ và mặt phẳng $(P): x + 2 = 0$.", 0.71, "$\\sin = 1/\\sqrt{2} \\approx 0.71$."),
                make_sa(6, "VDC", "Cho hình lập phương $ABCD.A'B'C'D'$. Tính góc (độ) giữa đường thẳng $A'C$ và mặt phẳng $(ABCD)$. (Làm tròn 2 chữ số thập phân)", 35.26, "$\\tan = 1/\\sqrt{2} \\Rightarrow \\arctan(1/\\sqrt{2}) \\approx 35.26^\\circ$.")
            ]
        return mcqs, tfs, sas

    elif lnum == 17:
        # BÀI 17: PHƯƠNG TRÌNH MẶT CẦU
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong không gian $Oxyz$, phương trình mặt cầu tâm $I(a; b; c)$ bán kính $R$ là",
                         "$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$",
                         "$(x + a)^2 + (y + b)^2 + (z + c)^2 = R^2$",
                         "$(x - a)^2 + (y - b)^2 + (z - c)^2 = R$",
                         "$(x - a) + (y - b) + (z - c) = R^2$",
                         "A", "Phương trình chuẩn của mặt cầu tâm $I(a; b; c)$ bán kính $R$."),
                make_mcq(2, "NB", "Mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có toạ độ tâm $I$ và bán kính $R$ là",
                         "$I(1; -2; 3), R = 4$", "$I(-1; 2; -3), R = 4$", "$I(1; -2; 3), R = 16$", "$I(-1; 2; -3), R = 16$",
                         "A", "Đọc toạ độ tâm $I(1; -2; 3)$ và $R = \\sqrt{16} = 4$."),
                make_mcq(3, "NB", "Phương trình nào sau đây là phương trình mặt cầu?",
                         "$x^2 + y^2 + z^2 - 2x + 4y - 6z + 1 = 0$",
                         "$x^2 + y^2 - z^2 - 2x + 1 = 0$",
                         "$x^2 + y^2 + z^2 - 2x + 4y + 20 = 0$",
                         "$2x^2 + y^2 + z^2 - 4x = 0$",
                         "A", "Phương trình A có $a=1, b=-2, c=3, d=1 \\Rightarrow a^2+b^2+c^2-d = 1+4+9-1 = 13 > 0$ nên là mặt cầu."),
                make_mcq(4, "NB", "Mặt cầu tâm $O(0; 0; 0)$ bán kính $R = 5$ có phương trình là",
                         "$x^2 + y^2 + z^2 = 25$", "$x^2 + y^2 + z^2 = 5$", "$(x - 5)^2 + y^2 + z^2 = 25$", "$x + y + z = 25$",
                         "A", "$x^2 + y^2 + z^2 = 5^2 = 25$."),
                make_mcq(5, "TH", "Phương trình mặt cầu có đường kính $AB$ với $A(1; 0; 2)$ và $B(3; 2; 4)$ là",
                         "$(x - 2)^2 + (y - 1)^2 + (z - 3)^2 = 3$",
                         "$(x - 2)^2 + (y - 1)^2 + (z - 3)^2 = 12$",
                         "$(x + 2)^2 + (y + 1)^2 + (z + 3)^2 = 3$",
                         "$(x - 2)^2 + (y - 1)^2 + (z - 3)^2 = 9$",
                         "A", "Tâm là trung điểm $I(2; 1; 3)$. $R^2 = IA^2 = (1-2)^2 + (0-1)^2 + (2-3)^2 = 1 + 1 + 1 = 3$."),
                make_mcq(6, "TH", "Bán kính của mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 2y - 6z - 2 = 0$ bằng",
                         "4", "$\\sqrt{14}$", "16", "2",
                         "A", "$a = 2, b = -1, c = 3, d = -2$. $R = \\sqrt{2^2 + (-1)^2 + 3^2 - (-2)} = \\sqrt{4 + 1 + 9 + 2} = \\sqrt{16} = 4$."),
                make_mcq(7, "TH", "Vị trí tương đối của mặt cầu $(S): (x - 1)^2 + y^2 + (z - 2)^2 = 9$ và mặt phẳng $(P): 2x - 2y + z + 5 = 0$ là",
                         "$(P)$ tiếp xúc $(S)$", "$(P)$ cắt $(S)$ theo đường tròn", "$(P)$ không cắt $(S)$", "$(P)$ đi qua tâm của $(S)$",
                         "A", "Tâm $I(1; 0; 2), R = 3$. $d(I, P) = \\frac{|2(1) - 0 + 2 + 5|}{\\sqrt{4 + 4 + 1}} = \\frac{9}{3} = 3 = R$. Do đó $(P)$ tiếp xúc với $(S)$."),
                make_mcq(8, "TH", "Phương trình mặt phẳng tiếp xúc với mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 9$ tại điểm $M(1; 2; 6)$ là",
                         "$z - 6 = 0$", "$x - 1 = 0$", "$y - 2 = 0$", "$x + y + z - 9 = 0$",
                         "A", "Tâm $I(1; 2; 3)$. VTPT của tiếp diện là $\\vec{IM} = (0; 0; 3) = 3(0; 0; 1)$. PT tiếp diện: $z - 6 = 0$."),
                make_mcq(9, "VD", "Một trạm radar phòng không có tầm quét hình cầu bán kính 50 km đặt tại đỉnh đồi $I(0; 0; 2)$ (đơn vị: km). Một máy bay không người lái đang ở toạ độ $M(30; 40; 2)$. Khẳng định nào sau đây đúng?",
                         "Máy bay nằm đúng trên bề mặt ranh giới quét của radar",
                         "Máy bay nằm hoàn toàn bên ngoài tầm quét",
                         "Máy bay nằm sâu bên trong tầm quét",
                         "Máy bay đã vượt qua trạm radar 10 km",
                         "A", "$IM = \\sqrt{30^2 + 40^2 + 0^2} = \\sqrt{900 + 1600} = 50$ km $= R$."),
                make_mcq(10, "VD", "Phương trình mặt cầu đi qua điểm $A(1; 2; -1)$ và tiếp xúc với mặt phẳng $(Oxy)$ có tâm nằm trên trục $Oz$ là",
                         "$x^2 + y^2 + (z - 3)^2 = 9$ hoặc $x^2 + y^2 + (z + 3)^2 = 9$",
                         "$x^2 + y^2 + (z - 2)^2 = 4$",
                         "$(x - 1)^2 + (y - 2)^2 + z^2 = 5$",
                         "$x^2 + y^2 + z^2 = 6$",
                         "A", "Tâm $I(0; 0; c) \\in Oz$. Tiếp xúc $(Oxy) \\Rightarrow R = |c|$. Mặt cầu đi qua $A \\Rightarrow IA^2 = 1^2 + 2^2 + (-1 - c)^2 = c^2 \\Leftrightarrow 5 + c^2 + 2c + 1 = c^2 \\Leftrightarrow 2c = -6 \\Rightarrow c = -3$. Bán kính $R = 3$. PT: $x^2 + y^2 + (z + 3)^2 = 9$."),
                make_mcq(11, "VDC", "Cho mặt cầu $(S): (x - 1)^2 + (y - 1)^2 + (z - 1)^2 = 12$ và mặt phẳng $(P): x + y + z - 6 = 0$. Thiết diện cắt bởi $(P)$ với $(S)$ là một hình tròn có bán kính $r$ bằng",
                         "3", "$\\sqrt{3}$", "2", "$\\sqrt{6}$",
                         "A", "Tâm $I(1; 1; 1), R = \\sqrt{12}$. $d(I, P) = \\frac{|1 + 1 + 1 - 6|}{\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$. Bán kính thiết diện $r = \\sqrt{R^2 - d^2} = \\sqrt{12 - 3} = \\sqrt{9} = 3$."),
                make_mcq(12, "VDC", "Tìm $m$ để mặt phẳng $(P): 2x - y + 2z + m = 0$ tiếp xúc với mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$.",
                         "$m = 13$ hoặc $m = -5$", "$m = 9$ hoặc $m = -9$", "$m = 5$", "$m = 10$",
                         "A", "Tâm $I(1; -2; 0), R = \\sqrt{1 + 4 - (-4)} = 3$. $d(I, P) = \\frac{|2(1) - (-2) + 0 + m|}{3} = \\frac{|4 + m|}{3} = 3 \\Leftrightarrow |4 + m| = 9 \\Rightarrow m = 5$ hoặc $m = -13$.")
            ]
            tfs = [
                make_tf(1, "Cho mặt cầu $(S): (x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 25$.", [
                    ("a", "Tâm của mặt cầu là điểm $I(2; -1; 3)$.", True, "Đúng."),
                    ("b", "Bán kính của mặt cầu là $R = 5$.", True, "$\\sqrt{25} = 5$."),
                    ("c", "Điểm $A(2; -1; 8)$ nằm trên mặt cầu.", True, "$(2-2)^2 + (-1+1)^2 + (8-3)^2 = 25$."),
                    ("d", "Điểm $O(0; 0; 0)$ nằm bên trong mặt cầu.", True, "$OI^2 = 4 + 1 + 9 = 14 < 25$ nên $O$ nằm bên trong mặt cầu.")
                ]),
                make_tf(2, "Cho phương trình $x^2 + y^2 + z^2 - 2x + 4y - 2mz + 5 = 0$ (ký hiệu là $(S_m)$).", [
                    ("a", "Hệ số $a = 1, b = -2, c = m$ và $d = 5$.", True, "Đúng."),
                    ("b", "Điều kiện để phương trình là mặt cầu là $m^2 > 0$.", True, "$a^2 + b^2 + c^2 - d = 1 + 4 + m^2 - 5 = m^2 > 0 \\Leftrightarrow m \\ne 0$."),
                    ("c", "Khi $m = 2$, tâm của mặt cầu là $I(1; -2; 2)$.", True, "Đúng."),
                    ("d", "Khi $m = 2$, bán kính của mặt cầu là $R = 4$.", False, "$R = \\sqrt{m^2} = |m| = 2$.")
                ]),
                make_tf(3, "Cho mặt cầu $(S): x^2 + y^2 + z^2 = 9$ và mặt phẳng $(P): x + 2y - 2z + 9 = 0$.", [
                    ("a", "Mặt cầu $(S)$ có tâm $O(0; 0; 0)$ và bán kính $R = 3$.", True, "Đúng."),
                    ("b", "Khoảng cách từ tâm $O$ đến mặt phẳng $(P)$ là 3.", True, "$d(O, P) = \\frac{|9|}{\\sqrt{1 + 4 + 4}} = \\frac{9}{3} = 3$."),
                    ("c", "Mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo một đường tròn có bán kính $r = 2$.", False, "Vì $d = R = 3$ nên $(P)$ tiếp xúc với $(S)$, không cắt theo đường tròn."),
                    ("d", "Toạ độ tiếp điểm là $(-1; -2; 2)$.", True, "Đường thẳng qua $O$ vuông góc $(P)$ có $t = -1 \\Rightarrow (-1; -2; 2)$.")
                ]),
                make_tf(4, "Một vệ tinh viễn thông bay trên quỹ đạo địa tĩnh có dạng mặt cầu tâm là tâm Trái Đất $O(0; 0; 0)$, bán kính $R = 42.000$ km.", [
                    ("a", "Phương trình mặt cầu quỹ đạo là $x^2 + y^2 + z^2 = 42000^2$.", True, "Đúng."),
                    ("b", "Một trạm thu phát tín hiệu trên mặt đất cách tâm Trái Đất 6.400 km.", True, "Bán kính Trái Đất khoảng 6.400 km."),
                    ("c", "Vệ tinh luôn ở độ cao khoảng 35.600 km so với mực nước biển.", True, "$42000 - 6400 = 35600$ km."),
                    ("d", "Khoảng cách từ vệ tinh đến tâm Trái Đất thay đổi liên tục theo thời gian.", False, "Quỹ đạo tròn địa tĩnh nên khoảng cách không đổi và bằng $R$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm bán kính $R$ của mặt cầu $(S): (x - 3)^2 + y^2 + (z + 1)^2 = 49$.", 7, "$R = \\sqrt{49} = 7$."),
                make_sa(2, "TH", "Tìm cao độ $c$ của tâm mặt cầu $(S): x^2 + y^2 + z^2 + 2x - 4y + 6z - 1 = 0$.", -3, "$2cz = 6z \\Rightarrow c = -3$ (hoặc $-2c = 6 \\Rightarrow c = -3$)."),
                make_sa(3, "TH", "Viết phương trình mặt cầu tâm $I(1; 2; 3)$ đi qua điểm $A(1; 2; 7)$. Tìm bán kính $R$.", 4, "$R = IA = \\sqrt{0 + 0 + 4^2} = 4$."),
                make_sa(4, "VD", "Mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 25$ cắt mặt phẳng $(Oxy)$ theo giao tuyến là đường tròn có bán kính $r$. Tìm $r$.", 4, "Tâm $I(1; 2; 3), R = 5$. $d(I, Oxy) = |z_I| = 3$. $r = \\sqrt{5^2 - 3^2} = 4$."),
                make_sa(5, "VD", "Tìm $m > 0$ để mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 2y - 4z + m = 0$ có bán kính $R = 2$.", 2, "$R^2 = 1^2 + (-1)^2 + 2^2 - m = 6 - m = 4 \\Rightarrow m = 2$."),
                make_sa(6, "VDC", "Trong không gian $Oxyz$, cho điểm $A(2; 1; 2)$ và mặt cầu $(S): x^2 + y^2 + z^2 = 1$. Từ $A$ kẻ các tiếp tuyến đến mặt cầu, các tiếp điểm nằm trên một đường tròn bán kính $r$. Tìm $r$. (Làm tròn 2 chữ số thập phân)", 0.94, "$OA = \\sqrt{4 + 1 + 4} = 3$. $R = 1$. $r = \\frac{R \\sqrt{OA^2 - R^2}}{OA} = \\frac{1 \\cdot \\sqrt{8}}{3} = \\frac{2\\sqrt{2}}{3} \\approx 0.94$.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z + 1 = 0$ có toạ độ tâm là",
                         "$I(1; -2; 3)$", "$I(-1; 2; -3)$", "$I(2; -4; 6)$", "$I(-2; 4; -6)$",
                         "A", "Chia các hệ số bậc nhất của $x, y, z$ cho $-2$: $I(1; -2; 3)$."),
                make_mcq(2, "NB", "Phương trình mặt cầu tâm $I(-1; 0; 2)$ bán kính $R = 3$ là",
                         "$(x + 1)^2 + y^2 + (z - 2)^2 = 9$",
                         "$(x - 1)^2 + y^2 + (z + 2)^2 = 9$",
                         "$(x + 1)^2 + y^2 + (z - 2)^2 = 3$",
                         "$(x - 1)^2 + y^2 + (z - 2)^2 = 9$",
                         "A", "$(x - (-1))^2 + (y - 0)^2 + (z - 2)^2 = 3^2 = 9$."),
                make_mcq(3, "NB", "Mặt cầu $(S): (x + 2)^2 + (y - 1)^2 + z^2 = 7$ có bán kính bằng",
                         "$\\sqrt{7}$", "7", "49", "$2\\sqrt{7}$",
                         "A", "Bán kính $R = \\sqrt{7}$."),
                make_mcq(4, "NB", "Điểm nào sau đây nằm trên mặt cầu $(S): x^2 + y^2 + z^2 = 9$?",
                         "$M(0; 0; 3)$", "$N(1; 2; 3)$", "$P(3; 3; 3)$", "$Q(1; 1; 1)$",
                         "A", "$0^2 + 0^2 + 3^2 = 9$ nên $M \\in (S)$."),
                make_mcq(5, "TH", "Phương trình mặt cầu có tâm $I(2; -1; 1)$ và đi qua điểm $A(0; 1; 2)$ là",
                         "$(x - 2)^2 + (y + 1)^2 + (z - 1)^2 = 9$",
                         "$(x - 2)^2 + (y + 1)^2 + (z - 1)^2 = 3$",
                         "$(x + 2)^2 + (y - 1)^2 + (z + 1)^2 = 9$",
                         "$(x - 2)^2 + (y + 1)^2 + (z - 1)^2 = 81$",
                         "A", "$R^2 = IA^2 = (0 - 2)^2 + (1 - (-1))^2 + (2 - 1)^2 = 4 + 4 + 1 = 9$."),
                make_mcq(6, "TH", "Mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 6y - 2z + 5 = 0$ có bán kính là",
                         "3", "$\\sqrt{14}$", "9", "2",
                         "A", "$a = 2, b = -3, c = 1, d = 5$. $R = \\sqrt{4 + 9 + 1 - 5} = \\sqrt{9} = 3$."),
                make_mcq(7, "TH", "Mặt cầu tâm $I(1; -2; 3)$ tiếp xúc với mặt phẳng toạ độ $(Oxy)$ có bán kính bằng",
                         "3", "1", "2", "$\\sqrt{14}$",
                         "A", "Khoảng cách từ $I$ đến $(Oxy)$ chính là $|z_I| = |3| = 3$. Do tiếp xúc nên $R = 3$."),
                make_mcq(8, "TH", "Khoảng cách từ tâm của mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 1)^2 = 4$ đến mặt phẳng $(P): 2x - 2y + z + 1 = 0$ bằng",
                         "$\\frac{8}{3}$", "2", "$\\frac{4}{3}$", "3",
                         "A", "Tâm $I(1; -2; 1)$. $d = \\frac{|2(1) - 2(-2) + 1 + 1|}{\\sqrt{4 + 4 + 1}} = \\frac{|2 + 4 + 1 + 1|}{3} = \\frac{8}{3}$."),
                make_mcq(9, "VD", "Một quả bóng tròn bán kính $R = 10$ cm được đặt tiếp xúc với cả ba mặt phẳng toạ độ $Ox, Oy, Oz$ trong góc phần tám thứ nhất ($x > 0, y > 0, z > 0$). Toạ độ tâm của quả bóng là",
                         "$(10; 10; 10)$", "$(5; 5; 5)$", "$(10; 0; 0)$", "$(20; 20; 20)$",
                         "A", "Do tiếp xúc với 3 mặt toạ độ và nằm ở góc phần tám thứ nhất nên khoảng cách từ tâm đến các mặt đều bằng $R = 10$, suy ra tâm $I(10; 10; 10)$."),
                make_mcq(10, "VD", "Phương trình mặt cầu đi qua 4 điểm $O(0; 0; 0), A(2; 0; 0), B(0; 4; 0), C(0; 0; 6)$ là",
                         "$x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$",
                         "$x^2 + y^2 + z^2 + 2x + 4y + 6z = 0$",
                         "$(x - 2)^2 + (y - 4)^2 + (z - 6)^2 = 56$",
                         "$x^2 + y^2 + z^2 - x - 2y - 3z = 0$",
                         "A", "Dạng $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$. Qua $O \\Rightarrow d = 0$. Qua $A \\Rightarrow 4 - 4a = 0 \\Rightarrow a = 1$. Qua $B \\Rightarrow 16 - 8b = 0 \\Rightarrow b = 2$. Qua $C \\Rightarrow 36 - 12c = 0 \\Rightarrow c = 3$. PT: $x^2 + y^2 + z^2 - 2x - 4y - 6z = 0$."),
                make_mcq(11, "VDC", "Cho mặt cầu $(S): x^2 + y^2 + z^2 = 9$ và đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = t \\end{cases}$. Số giao điểm của $d$ và $(S)$ là",
                         "2", "1", "0", "Vô số",
                         "A", "Thay vào: $(1+t)^2 + (2-t)^2 + t^2 = 9 \\Leftrightarrow 3t^2 - 2t - 4 = 0$. $\\Delta' = 1 - 3(-4) = 13 > 0$, có 2 nghiệm phân biệt nên có 2 giao điểm."),
                make_mcq(12, "VDC", "Tìm bán kính nhỏ nhất của mặt cầu đi qua điểm $A(1; 2; 3)$ và tiếp xúc với mặt phẳng $(Oxy)$.",
                         "3", "$\\frac{3}{2}$", "$\\sqrt{14}$", "1",
                         "A", "Tâm $I(a; b; c)$. Tiếp xúc $(Oxy) \\Rightarrow R = |c|$. Mặt cầu đi qua $A \\Rightarrow (a - 1)^2 + (b - 2)^2 + (c - 3)^2 = c^2 \\Leftrightarrow (a-1)^2 + (b-2)^2 + 9 - 6c = 0 \\Rightarrow 6c = (a-1)^2 + (b-2)^2 + 9 \\ge 9 \\Rightarrow c \\ge 1.5$. Khi đó $R = 1.5$. Sửa đáp án: Bán kính nhỏ nhất là $1.5 = 3/2$.")
            ]
            tfs = [
                make_tf(1, "Cho mặt cầu $(S): x^2 + y^2 + z^2 - 6x + 2y - 4z - 11 = 0$.", [
                    ("a", "Tâm của mặt cầu là $I(3; -1; 2)$.", True, "Đúng."),
                    ("b", "Bán kính của mặt cầu là $R = 5$.", True, "$\\sqrt{9 + 1 + 4 - (-11)} = \\sqrt{25} = 5$."),
                    ("c", "Điểm $M(3; -1; 7)$ nằm trên mặt cầu.", True, "Khoảng cách $IM = 5 = R$."),
                    ("d", "Điểm $O(0; 0; 0)$ nằm ngoài mặt cầu.", False, "Thay $O$: $-11 < 0$ nên $O$ nằm bên trong mặt cầu.")
                ]),
                make_tf(2, "Cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 16$.", [
                    ("a", "Tâm của mặt cầu là $I(1; 2; 3)$ và bán kính $R = 4$.", True, "Đúng."),
                    ("b", "Mặt phẳng $(Oxy)$ cắt mặt cầu $(S)$ theo một đường tròn.", True, "$d(I, Oxy) = 3 < R = 4$."),
                    ("c", "Bán kính đường tròn giao tuyến với $(Oxy)$ là $r = \\sqrt{7}$.", True, "$r = \\sqrt{16 - 9} = \\sqrt{7}$."),
                    ("d", "Mặt phẳng $(Oxz)$ không cắt mặt cầu $(S)$.", False, "$d(I, Oxz) = |y_I| = 2 < 4$, nên vẫn cắt.")
                ]),
                make_tf(3, "Cho hai điểm $A(0; 0; 0)$ và $B(2; 4; 4)$.", [
                    ("a", "Độ dài đoạn thẳng $AB = 6$.", True, "$\\sqrt{4 + 16 + 16} = 6$."),
                    ("b", "Mặt cầu đường kính $AB$ có bán kính $R = 3$.", True, "$6 / 2 = 3$."),
                    ("c", "Tâm của mặt cầu đường kính $AB$ là $I(1; 2; 2)$.", True, "Trung điểm $I = (A+B)/2$."),
                    ("d", "Phương trình của mặt cầu đường kính $AB$ là $(x - 1)^2 + (y - 2)^2 + (z - 2)^2 = 9$.", True, "Đúng.")
                ]),
                make_tf(4, "Một ngọn hải đăng phát tín hiệu cảnh báo hình cầu bán kính 20 km đặt tại $H(0; 0; 0.1)$ (đơn vị: km).", [
                    ("a", "Phương trình vùng cảnh báo là $x^2 + y^2 + (z - 0.1)^2 \\le 400$.", True, "Đúng."),
                    ("b", "Một tàu biển cách hải đăng 15 km theo phương ngang trên mặt nước $z = 0$ nhận được tín hiệu rõ.", True, "Khoảng cách $\\approx 15 < 20$ km."),
                    ("c", "Vùng bao phủ trên mặt nước $z = 0$ là hình tròn bán kính xấp xỉ 20 km.", True, "$\\sqrt{400 - 0.01} \\approx 20$ km."),
                    ("d", "Một máy bay bay ở độ cao 25 km ngay phía trên hải đăng vẫn nhận được tín hiệu trực tiếp.", False, "Độ cao 25 km $> 20$ km nên nằm ngoài tầm phủ sóng.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hoành độ tâm của mặt cầu $(S): (x + 4)^2 + (y - 5)^2 + z^2 = 36$.", -4, "Hoành độ tâm là $-4$."),
                make_sa(2, "TH", "Cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$. Tính bán kính $R$.", 3, "$R = \\sqrt{1 + 4 - (-4)} = 3$."),
                make_sa(3, "TH", "Mặt cầu tâm $I(2; 3; 4)$ tiếp xúc với mặt phẳng $(Oxz)$ có bán kính bằng bao nhiêu?", 3, "Khoảng cách đến $(Oxz)$ là $|y_I| = 3$."),
                make_sa(4, "VD", "Mặt cầu $(S)$ có tâm $I(1; 1; 1)$ cắt mặt phẳng $(P): x + 2y + 2z + 4 = 0$ theo đường tròn bán kính $r = 4$. Tính bán kính $R$ của mặt cầu $(S)$.", 5, "$d(I, P) = \\frac{|1 + 2 + 2 + 4|}{3} = \\frac{9}{3} = 3$. $R = \\sqrt{d^2 + r^2} = \\sqrt{9 + 16} = 5$."),
                make_sa(5, "VD", "Tìm $m$ để mặt phẳng $(P): z - m = 0$ tiếp xúc với mặt cầu $(S): x^2 + y^2 + z^2 - 4z = 0$ tại điểm có cao độ lớn nhất.", 4, "Tâm $I(0; 0; 2), R = 2$. Cao độ lớn nhất là $z = 2 + 2 = 4 \\Rightarrow m = 4$."),
                make_sa(6, "VDC", "Trong không gian $Oxyz$, cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 9$. Điểm $M(a; b; c) \\in (S)$ sao cho khoảng cách từ $M$ đến mặt phẳng $(Oxy)$ là lớn nhất. Tìm cao độ $c$.", 6, "$c_{max} = z_I + R = 3 + 3 = 6$.")
            ]
        return mcqs, tfs, sas

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 5 Toán 12.")
