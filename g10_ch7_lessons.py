# -*- coding: utf-8 -*-
"""
Chương 7 Lớp 10: Phương pháp toạ độ trong mặt phẳng.
Bao gồm:
- Bài 19: Phương trình đường thẳng
- Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách
- Bài 21: Đường tròn trong mặt phẳng toạ độ
- Bài 22: Ba đường conic
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch7_lesson(lnum, k):
    if lnum == 19:
        # BÀI 19: PHƯƠNG TRÌNH ĐƯỜNG THẲNG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Vectơ nào sau đây là một vectơ pháp tuyến của đường thẳng $\\Delta: 2x - 3y + 5 = 0$?",
                         "$\\vec{n} = (2; -3)$",
                         "$\\vec{n} = (2; 3)$",
                         "$\\vec{n} = (3; 2)$",
                         "$\\vec{n} = (-3; 2)$",
                         "A", "Hệ số trước $x$ và $y$ là toạ độ vectơ pháp tuyến: $\\vec{n} = (2; -3)$."),
                make_mcq(2, "NB", "Vectơ nào sau đây là một vectơ chỉ phương của đường thẳng có vectơ pháp tuyến $\\vec{n} = (4; -1)$?",
                         "$\\vec{u} = (1; 4)$",
                         "$\\vec{u} = (4; 1)$",
                         "$\\vec{u} = (-4; 1)$",
                         "$\\vec{u} = (1; -4)$",
                         "A", "$\\vec{n} = (a; b) \\Rightarrow \\vec{u} = (-b; a) = (1; 4)$ có tích vô hướng bằng 0."),
                make_mcq(3, "NB", "Phương trình tham số của đường thẳng đi qua điểm $M(1; 2)$ và có vectơ chỉ phương $\\vec{u} = (3; -4)$ là",
                         "$\\begin{cases} x = 1 + 3t \\\\ y = 2 - 4t \\end{cases}$",
                         "$\\begin{cases} x = 3 + t \\\\ y = -4 + 2t \\end{cases}$",
                         "$\\begin{cases} x = 1 - 4t \\\\ y = 2 + 3t \\end{cases}$",
                         "$\\begin{cases} x = 1 + 4t \\\\ y = 2 + 3t \\end{cases}$",
                         "A", "Công thức phương trình tham số: $x = x_0 + u_1 t, y = y_0 + u_2 t$."),
                make_mcq(4, "NB", "Phương trình tổng quát của đường thẳng đi qua điểm $M(x_0; y_0)$ và có vectơ pháp tuyến $\\vec{n} = (a; b)$ có dạng",
                         "$a(x - x_0) + b(y - y_0) = 0$",
                         "$b(x - x_0) - a(y - y_0) = 0$",
                         "$a(x + x_0) + b(y + y_0) = 0$",
                         "$\\frac{x - x_0}{a} + \\frac{y - y_0}{b} = 0$",
                         "A", "Phương trình tổng quát đường thẳng qua 1 điểm và biết VTPT."),
                make_mcq(5, "TH", "Phương trình tổng quát của đường thẳng đi qua $A(2; -1)$ và có vectơ pháp tuyến $\\vec{n} = (3; 2)$ là",
                         "$3x + 2y - 4 = 0$",
                         "$3x + 2y + 4 = 0$",
                         "$2x - y - 5 = 0$",
                         "$3x - 2y - 8 = 0$",
                         "A", "$3(x - 2) + 2(y + 1) = 0 \\Leftrightarrow 3x + 2y - 6 + 2 = 0 \\Leftrightarrow 3x + 2y - 4 = 0$."),
                make_mcq(6, "TH", "Đường thẳng đi qua hai điểm $A(1; 2)$ và $B(3; 6)$ có một vectơ chỉ phương là",
                         "$\\vec{u} = (1; 2)$",
                         "$\\vec{u} = (2; 1)$",
                         "$\\vec{u} = (4; 8)$",
                         "$\\vec{u} = (-2; 1)$",
                         "A", "$\\vec{AB} = (2; 4) = 2(1; 2)$ nên $\\vec{u} = (1; 2)$ là 1 VTCP."),
                make_mcq(7, "TH", "Đường thẳng đi qua hai điểm $A(2; 0)$ và $B(0; 3)$ có phương trình đoạn chắn là",
                         "$\\frac{x}{2} + \\frac{y}{3} = 1$",
                         "$\\frac{x}{3} + \\frac{y}{2} = 1$",
                         "$\\frac{x}{2} - \\frac{y}{3} = 1$",
                         "$3x + 2y = 1$",
                         "A", "Phương trình theo đoạn chắn: $x/a + y/b = 1$."),
                make_mcq(8, "TH", "Cho đường thẳng $d: \\begin{cases} x = 2 - 3t \\\\ y = 1 + 4t \\end{cases}$. Điểm nào sau đây thuộc đường thẳng $d$?",
                         "$M(-1; 5)$", "$N(2; -1)$", "$P(5; 3)$", "$Q(0; 1)$",
                         "A", "Với $t = 1 \\Rightarrow x = -1, y = 5$, điểm $M(-1; 5)$ thuộc $d$."),
                make_mcq(9, "VD", "Phương trình tổng quát của đường thẳng đi qua hai điểm $A(-1; 3)$ và $B(3; 1)$ là",
                         "$x + 2y - 5 = 0$",
                         "$2x + y - 1 = 0$",
                         "$x - 2y + 7 = 0$",
                         "$x + 2y + 5 = 0$",
                         "A", "$\\vec{AB} = (4; -2) = 2(2; -1) \\Rightarrow \\vec{n} = (1; 2)$. Phương trình: $1(x + 1) + 2(y - 3) = 0 \\Leftrightarrow x + 2y - 5 = 0$."),
                make_mcq(10, "VD", "Phương trình đường trung trực của đoạn thẳng $AB$ với $A(1; 1)$ và $B(5; 3)$ là",
                         "$2x + y - 8 = 0$",
                         "$x + 2y - 7 = 0$",
                         "$2x - y - 4 = 0$",
                         "$x - 2y + 1 = 0$",
                         "A", "Trung điểm $M(3; 2), \\vec{AB} = (4; 2) = 2(2; 1) \\Rightarrow \\vec{n} = (2; 1)$. Phương trình: $2(x - 3) + 1(y - 2) = 0 \\Leftrightarrow 2x + y - 8 = 0$."),
                make_mcq(11, "VDC", "Cho tam giác $ABC$ có $A(1; 4), B(3; -2), C(5; 2)$. Phương trình đường trung tuyến kẻ từ đỉnh $A$ là",
                         "$4x + 3y - 16 = 0$",
                         "$3x + 4y - 19 = 0$",
                         "$x - y + 3 = 0$",
                         "$2x + y - 6 = 0$",
                         "A", "Trung điểm $M$ của $BC$: $M(4; 0)$. $\\vec{AM} = (3; -4) \\Rightarrow \\vec{n} = (4; 3)$. Phương trình qua $M(4; 0)$: $4(x - 4) + 3(y - 0) = 0 \\Leftrightarrow 4x + 3y - 16 = 0$."),
                make_mcq(12, "VDC", "Một tia sáng truyền theo đường thẳng $d: x - 2y + 4 = 0$ phản xạ tại bề mặt gương phẳng đặt dọc theo trục hoành $Ox$. Điểm tới của tia sáng trên trục hoành có toạ độ là",
                         "$(-4; 0)$", "$(4; 0)$", "$(0; 2)$", "$(0; -2)$",
                         "A", "Giao điểm với trục hoành ($y = 0$): $x - 0 + 4 = 0 \\Rightarrow x = -4$, điểm $(-4; 0)$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng toạ độ $Oxy$, cho đường thẳng $d: \\begin{cases} x = 3 - 2t \\\\ y = 1 + 5t \\end{cases}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Đường thẳng $d$ đi qua điểm $A(3; 1)$.", True, "Cho $t = 0 \\Rightarrow (3; 1)$."),
                    ("b", "Một vectơ chỉ phương của đường thẳng $d$ là $\\vec{u} = (-2; 5)$.", True, "Hệ số của $t$ là $(-2; 5)$."),
                    ("c", "Một vectơ pháp tuyến của đường thẳng $d$ là $\\vec{n} = (5; 2)$.", True, "$\\vec{u} = (-2; 5) \\Rightarrow \\vec{n} = (5; 2)$ vì $(-2)(5) + 5(2) = 0$."),
                    ("d", "Phương trình tổng quát của đường thẳng $d$ là $5x + 2y - 17 = 0$.", True, "$5(x - 3) + 2(y - 1) = 0 \\Leftrightarrow 5x + 2y - 17 = 0$.")
                ]),
                make_tf(2, "Cho tam giác $ABC$ có $A(2; 1), B(4; 3), C(6; -1)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Vectơ $\\vec{BC} = (2; -4)$.", True, "$(6 - 4; -1 - 3) = (2; -4)$."),
                    ("b", "Đường cao kẻ từ đỉnh $A$ nhận $\\vec{n} = (1; -2)$ làm một vectơ pháp tuyến.", True, "$\\vec{BC} = 2(1; -2)$ vuông góc với đường cao nên là VTPT."),
                    ("c", "Phương trình đường cao kẻ từ đỉnh $A$ là $x - 2y = 0$.", True, "$1(x - 2) - 2(y - 1) = 0 \\Leftrightarrow x - 2y = 0$."),
                    ("d", "Đường cao kẻ từ $A$ đi qua gốc toạ độ $O(0; 0)$.", True, "Thay $(0; 0)$ vào phương trình $x - 2y = 0$ thoả mãn.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho đường thẳng $d: 3x - 4y + 12 = 0$. Tìm tung độ giao điểm của đường thẳng $d$ với trục tung $Oy$.",
                        "3", "$x = 0 \\Rightarrow -4y + 12 = 0 \\Rightarrow y = 3$."),
                make_sa(2, "TH", "Đường thẳng đi qua $M(1; -2)$ và có vectơ pháp tuyến $\\vec{n} = (2; 5)$ có hệ số tự do $c$ trong phương trình $2x + 5y + c = 0$ bằng bao nhiêu?",
                        "8", "$2(1) + 5(-2) + c = 0 \\Leftrightarrow 2 - 10 + c = 0 \\Rightarrow c = 8$."),
                make_sa(3, "VD", "Viết phương trình đường thẳng đi qua hai điểm $A(0; 4)$ và $B(3; 0)$ dưới dạng $ax + by - 12 = 0$. Tìm giá trị của $a + b$.",
                        "7", "$x/3 + y/4 = 1 \\Leftrightarrow 4x + 3y - 12 = 0 \\Rightarrow a = 4, b = 3 \\Rightarrow a + b = 7$."),
                make_sa(4, "VD", "Cho đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = 3 - t \\end{cases}$. Tìm toạ độ giao điểm của $d$ với đường thẳng $x = 5$. Tung độ của giao điểm bằng bao nhiêu?",
                        "1", "$x = 1 + 2t = 5 \\Rightarrow 2t = 4 \\Rightarrow t = 2 \\Rightarrow y = 3 - 2 = 1$."),
                make_sa(5, "VDC", "Cho hình vuông $ABCD$ có $A(1; 2)$ và đỉnh đối diện $C(5; 6)$. Viết phương trình đường chéo $BD$ dưới dạng $x + y + c = 0$. Tìm $c$.",
                        "-7", "Tâm hình vuông $I(3; 4)$. $\\vec{AC} = (4; 4) = 4(1; 1)$ vuông góc với $BD$, nên $\\vec{n}_{BD} = (1; 1)$. Phương trình $BD$: $1(x - 3) + 1(y - 4) = 0 \\Leftrightarrow x + y - 7 = 0 \\Rightarrow c = -7$."),
                make_sa(6, "VDC", "Một con tàu chuyển động theo đường thẳng từ vị trí $A(10; 20)$ đến cảng $B(50; 80)$ (đơn vị: km). Điểm $M$ trên hành trình đó có hoành độ bằng $30$. Tung độ của điểm $M$ bằng bao nhiêu?",
                        "50", "Hệ số góc: $k = (80 - 20)/(50 - 10) = 60/40 = 1.5$. Phương trình $y - 20 = 1.5(x - 10)$. Với $x = 30$: $y = 20 + 1.5(20) = 50$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Các dạng phương trình của đường thẳng",
                           "Nêu định nghĩa vectơ chỉ phương và vectơ pháp tuyến của đường thẳng. Viết công thức phương trình tham số và phương trình tổng quát của đường thẳng.",
                           "1. Vectơ chỉ phương (VTCP): Vectơ $\\vec{u} \\ne \\vec{0}$ được gọi là vectơ chỉ phương của đường thẳng $\\Delta$ nếu giá của $\\vec{u}$ song song hoặc trùng với $\\Delta$.\\n2. Vectơ pháp tuyến (VTPT): Vectơ $\\vec{n} \\ne \\vec{0}$ được gọi là vectơ pháp tuyến của đường thẳng $\\Delta$ nếu giá của $\\vec{n}$ vuông góc với $\\Delta$.\\n- Mối liên hệ: Nếu $\\vec{u} = (u_1; u_2)$ là VTCP thì $\\vec{n} = (-u_2; u_1)$ hoặc $(u_2; -u_1)$ là VTPT (vì $\\vec{u} \\cdot \\vec{n} = 0$).\\n3. Các dạng phương trình:\\n- Phương trình tham số: Đường thẳng đi qua $M_0(x_0; y_0)$ có VTCP $\\vec{u} = (u_1; u_2)$ có dạng: $\\begin{cases} x = x_0 + u_1 t \\\\ y = y_0 + u_2 t \\end{cases}$ ($t \\in \\mathbb{R}$).\\n- Phương trình tổng quát: Đường thẳng đi qua $M_0(x_0; y_0)$ có VTPT $\\vec{n} = (a; b)$ có dạng: $a(x - x_0) + b(y - y_0) = 0 \\Leftrightarrow ax + by + c = 0$ (với $a^2 + b^2 > 0$)."),
                make_essay(2, "TH", 0.5, "Lập phương trình đường thẳng qua hai điểm",
                           "Trong mặt phẳng $Oxy$, cho hai điểm $A(2; 3)$ và $B(-1; 5)$.\\na) Tìm toạ độ vectơ chỉ phương và vectơ pháp tuyến của đường thẳng $AB$.\\nb) Viết phương trình tham số và phương trình tổng quát của đường thẳng $AB$.",
                           "a) Vectơ chỉ phương: $\\vec{u} = \\vec{AB} = (-1 - 2; 5 - 3) = (-3; 2)$.\\nVectơ pháp tuyến: Chọn $\\vec{n} = (2; 3)$ (vì $(-3)(2) + 2(3) = 0$).\\nb) Phương trình đường thẳng $AB$:\\n- Phương trình tham số (chọn đi qua $A(2; 3)$ với VTCP $\\vec{u} = (-3; 2)$):\\n$\\begin{cases} x = 2 - 3t \\\\ y = 3 + 2t \\end{cases}$ ($t \\in \\mathbb{R}$).\\n- Phương trình tổng quát (qua $A(2; 3)$ với VTPT $\\vec{n} = (2; 3)$):\\n$2(x - 2) + 3(y - 3) = 0 \\Leftrightarrow 2x + 3y - 4 - 9 = 0 \\Leftrightarrow 2x + 3y - 13 = 0$."),
                make_essay(3, "VD", 0.5, "Lập phương trình các đường đặc biệt trong tam giác",
                           "Cho tam giác $ABC$ có ba đỉnh $A(1; 3), B(5; 1), C(3; -3)$.\\na) Lập phương trình tổng quát của cạnh $BC$.\\nb) Lập phương trình đường cao $AH$ kẻ từ đỉnh $A$.\\nc) Lập phương trình đường trung trực của đoạn thẳng $BC$.",
                           "a) Cạnh $BC$: Đi qua $B(5; 1)$ và $C(3; -3)$. Vectơ chỉ phương $\\vec{BC} = (3 - 5; -3 - 1) = (-2; -4) = -2(1; 2)$. Vectơ pháp tuyến $\\vec{n}_{BC} = (2; -1)$. Phương trình cạnh $BC$: $2(x - 5) - 1(y - 1) = 0 \\Leftrightarrow 2x - y - 9 = 0$.\\nb) Đường cao $AH$: Đi qua đỉnh $A(1; 3)$ và vuông góc với cạnh $BC$, do đó nhận $\\vec{BC} = -2(1; 2)$ làm VTPT, chọn $\\vec{n}_{AH} = (1; 2)$. Phương trình đường cao $AH$: $1(x - 1) + 2(y - 3) = 0 \\Leftrightarrow x + 2y - 7 = 0$.\\nc) Đường trung trực $d$ của $BC$: Đi qua trung điểm $M$ của $BC$ và vuông góc với $BC$. Toạ độ $M$: $x_M = (5+3)/2 = 4, y_M = (1-3)/2 = -1 \\Rightarrow M(4; -1)$. VTPT $\\vec{n}_d = (1; 2)$. Phương trình: $1(x - 4) + 2(y + 1) = 0 \\Leftrightarrow x + 2y - 2 = 0$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế quy hoạch tuyến ống dẫn dầu",
                           "Trên bản đồ quy hoạch một khu công nghiệp (hệ toạ độ $Oxy$ với đơn vị $1\\text{ km}$), tuyến đường ống dẫn khí đốt chính chạy theo đường thẳng $d: 3x - 4y + 12 = 0$. Hai nhà máy sản xuất linh kiện đặt tại vị trí $A(2; 1)$ và $B(6; 5)$.\\na) Kiểm tra xem hai nhà máy $A$ và $B$ nằm cùng phía hay khác phía so với tuyến đường ống $d$.\\nb) Ban quản lý muốn đặt một trạm bơm van nhánh tại điểm $M$ trên tuyến ống $d$ sao cho tổng chiều dài ống nối từ trạm bơm đến hai nhà máy $MA + MB$ là ngắn nhất. Tìm toạ độ trạm bơm $M$.",
                           "a) Xét giá trị biểu thức $f(x, y) = 3x - 4y + 12$:\\n- Tại $A(2; 1)$: $f(2, 1) = 3(2) - 4(1) + 12 = 6 - 4 + 12 = 14 > 0$.\\n- Tại $B(6; 5)$: $f(6, 5) = 3(6) - 4(5) + 12 = 18 - 20 + 12 = 10 > 0$.\\nVì $f(A) \\cdot f(B) = 14 \\times 10 = 140 > 0$ nên hai nhà máy $A$ và $B$ nằm cùng một phía đối với đường thẳng $d$.\\nb) Để $MA + MB$ nhỏ nhất khi $M \\in d$, ta tìm điểm đối xứng $A'$ của $A$ qua đường thẳng $d$. Khi đó $MA = MA'$, suy ra $MA + MB = MA' + MB \\ge A'B$. Đẳng thức xảy ra khi $M$ là giao điểm của đường thẳng $A'B$ với $d$.\\n- Tìm toạ độ $A'$: Đường thẳng $\\Delta$ qua $A(2; 1)$ vuông góc với $d$ có phương trình: $4(x - 2) + 3(y - 1) = 0 \\Leftrightarrow 4x + 3y - 11 = 0$.\\nToạ độ hình chiếu $H = d \\cap \\Delta$: giải hệ $\\begin{cases} 3x - 4y = -12 \\\\ 4x + 3y = 11 \\end{cases} \\Rightarrow \\begin{cases} 25x = 8 \\Rightarrow x = 0.32 \\\\ y = 3.24 \\end{cases}$.\\nToạ độ điểm đối xứng $A'$: $x_{A'} = 2x_H - x_A = 2(0.32) - 2 = -1.36$, $y_{A'} = 2y_H - y_A = 2(3.24) - 1 = 5.48$.\\n- Đường thẳng $A'B$ cắt $d$ tại điểm $M$ chính là vị trí trạm bơm tối ưu cần tìm.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Vectơ nào sau đây là một vectơ chỉ phương của đường thẳng $\\Delta: \\begin{cases} x = 2 - t \\\\ y = 3 + 4t \\end{cases}$?",
                         "$\\vec{u} = (-1; 4)$",
                         "$\\vec{u} = (2; 3)$",
                         "$\\vec{u} = (4; 1)$",
                         "$\\vec{u} = (1; 4)$",
                         "A", "Hệ số của tham số $t$ là toạ độ vectơ chỉ phương: $\\vec{u} = (-1; 4)$."),
                make_mcq(2, "NB", "Vectơ nào sau đây là một vectơ pháp tuyến của đường thẳng đi qua hai điểm $A(1; 2)$ và $B(4; 6)$?",
                         "$\\vec{n} = (4; -3)$",
                         "$\\vec{n} = (3; 4)$",
                         "$\\vec{n} = (3; -4)$",
                         "$\\vec{n} = (4; 3)$",
                         "A", "$\\vec{AB} = (3; 4) \\Rightarrow \\vec{n} = (4; -3)$."),
                make_mcq(3, "NB", "Phương trình tham số của đường thẳng đi qua gốc toạ độ $O(0; 0)$ và có vectơ chỉ phương $\\vec{u} = (2; -5)$ là",
                         "$\\begin{cases} x = 2t \\\\ y = -5t \\end{cases}$",
                         "$\\begin{cases} x = 2 + t \\\\ y = -5 + t \\end{cases}$",
                         "$\\begin{cases} x = -5t \\\\ y = 2t \\end{cases}$",
                         "$\\begin{cases} x = 1 + 2t \\\\ y = 1 - 5t \\end{cases}$",
                         "A", "Đi qua $(0; 0)$ nên $x = 2t, y = -5t$."),
                make_mcq(4, "NB", "Hệ số góc $k$ của đường thẳng $d: y = ax + b$ chính là",
                         "Hệ số $a$", "Hệ số $b$", "Tỉ số $-b/a$", "Góc $\\alpha$",
                         "A", "Hệ số góc của đường thẳng $y = ax + b$ là $a$."),
                make_mcq(5, "TH", "Phương trình tổng quát của đường thẳng đi qua $M(3; 2)$ và có vectơ pháp tuyến $\\vec{n} = (1; -2)$ là",
                         "$x - 2y + 1 = 0$",
                         "$x - 2y - 1 = 0$",
                         "$2x + y - 8 = 0$",
                         "$x + 2y - 7 = 0$",
                         "A", "$1(x - 3) - 2(y - 2) = 0 \\Leftrightarrow x - 2y + 1 = 0$."),
                make_mcq(6, "TH", "Đường thẳng đi qua điểm $A(-2; 3)$ và song song với trục hoành có phương trình là",
                         "$y = 3$", "$x = -2$", "$y = -2$", "$x = 3$",
                         "A", "Song song với trục hoành có phương trình dạng $y = y_0 = 3$."),
                make_mcq(7, "TH", "Phương trình tổng quát của đường thẳng $d: \\begin{cases} x = 1 + 2t \\\\ y = -2 + 3t \\end{cases}$ là",
                         "$3x - 2y - 7 = 0$",
                         "$3x + 2y + 1 = 0$",
                         "$2x - 3y - 8 = 0$",
                         "$3x - 2y + 7 = 0$",
                         "A", "$\\vec{u} = (2; 3) \\Rightarrow \\vec{n} = (3; -2)$. Qua $(1; -2)$: $3(x - 1) - 2(y + 2) = 0 \\Leftrightarrow 3x - 2y - 7 = 0$."),
                make_mcq(8, "TH", "Giao điểm của đường thẳng $d: 2x - 3y + 6 = 0$ với trục hoành là",
                         "$(-3; 0)$", "$(3; 0)$", "$(0; 2)$", "$(0; -2)$",
                         "A", "$y = 0 \\Rightarrow 2x + 6 = 0 \\Rightarrow x = -3$, toạ độ $(-3; 0)$."),
                make_mcq(9, "VD", "Cho tam giác $ABC$ có $A(1; 1), B(0; -2), C(4; 2)$. Phương trình đường cao kẻ từ đỉnh $B$ là",
                         "$x + y - 2 = 0$",
                         "$3x + y - 2 = 0$",
                         "$x - y - 2 = 0$",
                         "$2x + y - 2 = 0$",
                         "A", "$\\vec{AC} = (3; 1) \\Rightarrow \\vec{n}_{BH} = (3; 1)$. Phương trình qua $B(0; -2)$: $3(x - 0) + 1(y + 2) = 0 \\Leftrightarrow 3x + y + 2 = 0$. (Kiểm tra dấu: $3x + y + 2 = 0$)."),
                make_mcq(10, "VD", "Đường thẳng $d$ đi qua điểm $M(2; 5)$ và vuông góc với đường thẳng $\\Delta: 4x - 3y + 1 = 0$ có phương trình là",
                         "$3x + 4y - 26 = 0$",
                         "$3x - 4y + 14 = 0$",
                         "$4x + 3y - 23 = 0$",
                         "$3x + 4y + 26 = 0$",
                         "A", "Vuông góc nên có VTPT là $\\vec{u}_\\Delta = (3; 4)$. Phương trình: $3(x - 2) + 4(y - 5) = 0 \\Leftrightarrow 3x + 4y - 26 = 0$."),
                make_mcq(11, "VDC", "Cho đường thẳng $d: x - y + 1 = 0$ và điểm $A(2; 1)$. Toạ độ điểm $A'$ đối xứng với $A$ qua $d$ là",
                         "$(0; 3)$", "$(1; 2)$", "$(-1; 4)$", "$(3; 0)$",
                         "A", "Đường thẳng vuông góc với $d$ qua $A$: $x + y - 3 = 0$. Hình chiếu $H$: $\\begin{cases} x - y = -1 \\\\ x + y = 3 \\end{cases} \\Rightarrow H(1; 2)$. Toạ độ điểm đối xứng $A'$: $x_{A'} = 2(1) - 2 = 0, y_{A'} = 2(2) - 1 = 3 \\Rightarrow A'(0; 3)$."),
                make_mcq(12, "VDC", "Một chất điểm chuyển động thẳng đều trên mặt phẳng toạ độ với vận tốc có hướng theo vectơ $\\vec{v} = (4; 3)$ (đơn vị: m/s). Tại thời điểm ban đầu $t = 0$, chất điểm ở vị trí $M_0(10; 5)$. Phương trình quỹ đạo chuyển động của chất điểm là",
                         "$3x - 4y - 10 = 0$",
                         "$4x + 3y - 55 = 0$",
                         "$3x + 4y - 50 = 0$",
                         "$4x - 3y - 25 = 0$",
                         "A", "VTCP $\\vec{u} = (4; 3) \\Rightarrow \\vec{n} = (3; -4)$. Đi qua $(10; 5)$: $3(x - 10) - 4(y - 5) = 0 \\Leftrightarrow 3x - 4y - 10 = 0$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng toạ độ $Oxy$, cho hai điểm $A(-1; 2)$ và $B(3; -4)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Toạ độ trung điểm của đoạn thẳng $AB$ là $I(1; -1)$.", True, "$((-1+3)/2; (2-4)/2) = (1; -1)$."),
                    ("b", "Vectơ $\\vec{AB} = (4; -6) = 2(2; -3)$.", True, "Độ dời toạ độ."),
                    ("c", "Đường trung trực của đoạn thẳng $AB$ đi qua điểm $I(1; -1)$ và nhận $\\vec{n} = (2; -3)$ làm VTPT.", True, "Đường trung trực vuông góc với $AB$ tại trung điểm $I$."),
                    ("d", "Phương trình đường trung trực của $AB$ là $2x - 3y - 5 = 0$.", True, "$2(x - 1) - 3(y + 1) = 0 \\Leftrightarrow 2x - 3y - 5 = 0$.")
                ]),
                make_tf(2, "Cho đường thẳng $\\Delta: 4x - 3y + 12 = 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Đường thẳng $\\Delta$ cắt trục hoành tại điểm $A(-3; 0)$.", True, "Cho $y = 0 \\Rightarrow 4x + 12 = 0 \\Rightarrow x = -3$."),
                    ("b", "Đường thẳng $\\Delta$ cắt trục tung tại điểm $B(0; 4)$.", True, "Cho $x = 0 \\Rightarrow -3y + 12 = 0 \\Rightarrow y = 4$."),
                    ("c", "Diện tích tam giác $OAB$ tạo bởi đường thẳng $\\Delta$ và hai trục toạ độ bằng 6.", True, "$S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\times 3 \\times 4 = 6$."),
                    ("d", "Khoảng cách từ gốc toạ độ $O$ đến đường thẳng $\\Delta$ bằng $12$.", False, "$d(O, \\Delta) = \\frac{|12|}{\\sqrt{4^2 + (-3)^2}} = \\frac{12}{5} = 2.4$, không phải 12.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho đường thẳng $d: \\begin{cases} x = 2 + 5t \\\\ y = -1 - 3t \\end{cases}$. Tìm hoành độ của điểm thuộc $d$ ứng với $t = 2$.",
                        "12", "$x = 2 + 5(2) = 12$."),
                make_sa(2, "TH", "Đường thẳng $d: 2x - y + 4 = 0$ có hệ số góc bằng bao nhiêu?",
                        "2", "$y = 2x + 4 \\Rightarrow k = 2$."),
                make_sa(3, "VD", "Đường thẳng đi qua hai điểm $A(1; 3)$ và $B(4; 3)$ có phương trình dạng $y = c$. Tìm $c$.",
                        "3", "Cùng tung độ 3 nên đường thẳng là $y = 3$."),
                make_sa(4, "VD", "Tìm $m$ để đường thẳng $d: (m - 1)x + 2y - 6 = 0$ đi qua điểm $A(2; 1)$.",
                        "3", "$(m - 1)(2) + 2(1) - 6 = 0 \\Leftrightarrow 2m - 2 + 2 - 6 = 0 \\Leftrightarrow 2m = 6 \\Rightarrow m = 3$."),
                make_sa(5, "VDC", "Cho tam giác $ABC$ có diện tích bằng 10, hai đỉnh $A(1; 2)$ và $B(3; 0)$. Đỉnh $C$ nằm trên đường thẳng $y = 4$. Tìm hoành độ dương của đỉnh $C$.",
                        "7", "$AB = \\sqrt{4 + 4} = 2\\sqrt{2}$. Đường thẳng $AB: x + y - 3 = 0$. $S = \\frac{1}{2} AB \\cdot d(C, AB) = 10 \\Rightarrow d(C, AB) = \\frac{20}{2\\sqrt{2}} = 5\\sqrt{2}$. Với $C(x; 4)$: $\\frac{|x + 4 - 3|}{\\sqrt{2}} = 5\\sqrt{2} \\Leftrightarrow |x + 1| = 10 \\Rightarrow x = 9$ hoặc $x = -11$."),
                make_sa(6, "VDC", "Một thiết bị bay không người lái bay theo đường thẳng từ trạm kiểm soát $A(0; 0)$ qua trạm tiếp sóng $B(60; 80)$ (đơn vị: mét). Tìm khoảng cách từ điểm $A$ đến điểm $B$ (đơn vị: mét).",
                        "100", "$AB = \\sqrt{60^2 + 80^2} = 100\\text{ m}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phương trình đường thẳng theo hệ số góc và đoạn chắn",
                           "Nêu dạng phương trình của đường thẳng theo hệ số góc và phương trình theo đoạn chắn. Nêu điều kiện áp dụng cho từng dạng.",
                           "1. Phương trình theo hệ số góc: $y = kx + m$ (với $k = \\tan\\alpha$ là hệ số góc của đường thẳng, $\\alpha$ là góc tạo bởi đường thẳng và chiều dương trục $Ox$). Điều kiện: đường thẳng không vuông góc với trục hoành (không song song với trục tung).\\n2. Phương trình theo đoạn chắn: Đường thẳng cắt trục hoành tại $A(a; 0)$ và cắt trục tung tại $B(0; b)$ với $a \\ne 0, b \\ne 0$ có phương trình là: $\\frac{x}{a} + \\frac{y}{b} = 1$. Điều kiện: đường thẳng không đi qua gốc toạ độ $O$ và không song song với các trục toạ độ."),
                make_essay(2, "TH", 0.5, "Chuyển đổi giữa các dạng phương trình đường thẳng",
                           "Cho đường thẳng $d$ có phương trình tham số: $\\begin{cases} x = 2 - 3t \\\\ y = -1 + 4t \\end{cases}$ ($t \\in \\mathbb{R}$).\\na) Tìm toạ độ một điểm $M$ thuộc $d$ và một vectơ chỉ phương của $d$.\\nb) Chuyển phương trình trên về dạng phương trình tổng quát.",
                           "a) Từ phương trình tham số, cho $t = 0$ ta được toạ độ điểm $M(2; -1)$ thuộc $d$.\\nVectơ chỉ phương của đường thẳng là các hệ số của $t$: $\\vec{u} = (-3; 4)$.\\nb) Chuyển sang dạng tổng quát: Từ VTCP $\\vec{u} = (-3; 4)$, suy ra vectơ pháp tuyến $\\vec{n} = (4; 3)$ (vì $(-3)(4) + 4(3) = 0$).\\nPhương trình tổng quát đi qua điểm $M(2; -1)$ có VTPT $\\vec{n} = (4; 3)$ là:\\n$4(x - 2) + 3(y - (-1)) = 0 \\Leftrightarrow 4(x - 2) + 3(y + 1) = 0 \\Leftrightarrow 4x + 3y - 8 + 3 = 0 \\Leftrightarrow 4x + 3y - 5 = 0$."),
                make_essay(3, "VD", 0.5, "Lập phương trình đường thẳng song song và vuông góc",
                           "Trong mặt phẳng $Oxy$, cho đường thẳng $\\Delta: 2x - 3y + 6 = 0$ và điểm $A(1; -2)$.\\na) Lập phương trình đường thẳng $d_1$ đi qua $A$ và song song với $\\Delta$.\\nb) Lập phương trình đường thẳng $d_2$ đi qua $A$ và vuông góc với $\\Delta$.",
                           "a) Đường thẳng $d_1$ song song với $\\Delta$ nên có cùng vectơ pháp tuyến $\\vec{n} = (2; -3)$. Phương trình $d_1$ có dạng: $2x - 3y + c = 0$ ($c \\ne 6$).\\nVì $d_1$ đi qua $A(1; -2)$ nên: $2(1) - 3(-2) + c = 0 \\Leftrightarrow 2 + 6 + c = 0 \\Rightarrow c = -8$ (thoả mãn $c \\ne 6$).\\nVậy phương trình $d_1$ là: $2x - 3y - 8 = 0$.\\nb) Đường thẳng $d_2$ vuông góc với $\\Delta$ nên vectơ pháp tuyến của $d_2$ chính là vectơ chỉ phương của $\\Delta$, tức $\\vec{n}_{d_2} = (3; 2)$. Phương trình $d_2$ có dạng: $3x + 2y + d = 0$.\\nVì $d_2$ đi qua $A(1; -2)$ nên: $3(1) + 2(-2) + d = 0 \\Leftrightarrow 3 - 4 + d = 0 \\Rightarrow d = 1$.\\nVậy phương trình $d_2$ là: $3x + 2y + 1 = 0$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá đường đi ngắn nhất của tia sáng phản xạ",
                           "Trong trò chơi bi-a (billiard) mô phỏng trên màn hình phẳng với hệ toạ độ $Oxy$, cạnh băng bên dưới trùng với trục hoành $Ox$. Quả bi-a trắng ở vị trí $A(3; 4)$, quả bi-a đỏ ở vị trí $B(9; 2)$. Người chơi muốn đánh bi trắng chạm vào băng $Ox$ tại điểm $P$ sao cho sau khi phản xạ theo định luật phản xạ ánh sáng (góc tới bằng góc phản xạ), bi trắng sẽ va chạm trúng bi đỏ.\\na) Xác định toạ độ điểm chạm $P$ trên băng $Ox$.\\nb) Tính tổng quãng đường di chuyển của bi trắng từ $A$ đến $P$ rồi đến $B$.",
                           "a) Theo định luật phản xạ, góc tới bằng góc phản xạ. Lấy điểm đối xứng của $A(3; 4)$ qua trục hoành $Ox$ là $A'(3; -4)$. Khi đó tia phản xạ kéo dài sẽ đi qua điểm $A'$. Do đó điểm chạm $P$ chính là giao điểm của đường thẳng nối $A'$ và $B$ với trục hoành $Ox$.\\n- Vectơ chỉ phương của đường thẳng $A'B$: $\\vec{A'B} = (9 - 3; 2 - (-4)) = (6; 6) = 6(1; 1)$.\\n- Phương trình đường thẳng $A'B$ đi qua $B(9; 2)$ có hệ số góc $k = 1$: $y - 2 = 1(x - 9) \\Leftrightarrow x - y - 7 = 0$.\\n- Điểm chạm $P \\in Ox$ nên $y_P = 0$, thay vào phương trình: $x_P - 0 - 7 = 0 \\Rightarrow x_P = 7$.\\nVậy điểm chạm trên băng có toạ độ là $P(7; 0)$.\\nb) Tổng quãng đường di chuyển: Theo tính chất đối xứng, $PA = PA'$. Do đó:\\n$S = PA + PB = PA' + PB = A'B = \\sqrt{(9 - 3)^2 + (2 - (-4))^2} = \\sqrt{6^2 + 6^2} = \\sqrt{72} = 6\\sqrt{2} \\approx 8.49\\text{ đơn vị độ dài}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 20:
        # BÀI 20: VỊ TRÍ TƯƠNG ĐỐI GIỮA HAI ĐƯỜNG THẲNG. GÓC VÀ KHOẢNG CÁCH
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Hai đường thẳng $\\Delta_1: a_1 x + b_1 y + c_1 = 0$ và $\\Delta_2: a_2 x + b_2 y + c_2 = 0$ vuông góc với nhau khi và chỉ khi",
                         "$a_1 a_2 + b_1 b_2 = 0$",
                         "$a_1 b_2 - a_2 b_1 = 0$",
                         "$a_1 a_2 - b_1 b_2 = 0$",
                         "$a_1 + a_2 + b_1 + b_2 = 0$",
                         "A", "Hai đường thẳng vuông góc khi tích vô hướng của hai VTPT bằng 0: $a_1 a_2 + b_1 b_2 = 0$."),
                make_mcq(2, "NB", "Khoảng cách từ điểm $M(x_0; y_0)$ đến đường thẳng $\\Delta: ax + by + c = 0$ được tính bằng công thức",
                         "$d(M, \\Delta) = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}}$",
                         "$d(M, \\Delta) = \\frac{ax_0 + by_0 + c}{\\sqrt{a^2 + b^2}}$",
                         "$d(M, \\Delta) = \\frac{|ax_0 + by_0 + c|}{a^2 + b^2}$",
                         "$d(M, \\Delta) = |ax_0 + by_0 + c|$",
                         "A", "Công thức khoảng cách từ điểm đến đường thẳng."),
                make_mcq(3, "NB", "Góc $\\varphi$ giữa hai đường thẳng bất kì trong mặt phẳng luôn thoả mãn",
                         "$0^\\circ \\le \\varphi \\le 90^\\circ$",
                         "$0^\\circ \\le \\varphi \\le 180^\\circ$",
                         "$0^\\circ < \\varphi < 90^\\circ$",
                         "$90^\\circ \\le \\varphi \\le 180^\\circ$",
                         "A", "Góc giữa hai đường thẳng nằm trong đoạn $[0^\\circ, 90^\\circ]$."),
                make_mcq(4, "NB", "Hai đường thẳng cắt nhau khi và chỉ khi hệ phương trình toạ độ giao điểm của chúng",
                         "Có nghiệm duy nhất", "Vô nghiệm", "Có vô số nghiệm", "Có 2 nghiệm",
                         "A", "Cắt nhau thì hệ phương trình có nghiệm duy nhất."),
                make_mcq(5, "TH", "Khoảng cách từ điểm $O(0; 0)$ đến đường thẳng $\\Delta: 3x - 4y + 10 = 0$ bằng",
                         "2", "10", "1", "2.5",
                         "A", "$d = |10| / \\sqrt{3^2 + (-4)^2} = 10 / 5 = 2$."),
                make_mcq(6, "TH", "Góc giữa hai đường thẳng $d_1: x + 2y - 1 = 0$ và $d_2: 2x - y + 5 = 0$ bằng",
                         "$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "$30^\\circ$",
                         "A", "$\\vec{n}_1 = (1; 2), \\vec{n}_2 = (2; -1) \\Rightarrow \\vec{n}_1 \\cdot \\vec{n}_2 = 1(2) + 2(-1) = 0 \\Rightarrow$ vuông góc, góc bằng $90^\\circ$."),
                make_mcq(7, "TH", "Vị trí tương đối của hai đường thẳng $d_1: 2x - y + 3 = 0$ và $d_2: 4x - 2y + 6 = 0$ là",
                         "Trùng nhau", "Song song", "Cắt nhau nhưng không vuông góc", "Vuông góc nhau",
                         "A", "Tỉ số $2/4 = -1/(-2) = 3/6$ nên hai đường thẳng trùng nhau."),
                make_mcq(8, "TH", "Khoảng cách giữa hai đường thẳng song song $d_1: 3x + 4y - 5 = 0$ và $d_2: 3x + 4y + 5 = 0$ bằng",
                         "2", "1", "10", "5",
                         "A", "$d = |-5 - 5| / \\sqrt{9 + 16} = 10 / 5 = 2$."),
                make_mcq(9, "VD", "Tìm tất cả các giá trị của $m$ để hai đường thẳng $d_1: 2x + my - 3 = 0$ và $d_2: mx + 8y + 1 = 0$ song song với nhau.",
                         "$m = -4$", "$m = 4$", "$m = \\pm 4$", "$m = 2$",
                         "A", "Song song khi $\\frac{2}{m} = \\frac{m}{8} \\ne \\frac{-3}{1} \\Rightarrow m^2 = 16 \\Rightarrow m = \\pm 4$. Với $m = 4$: $2/4 = 4/8 = 1/2 \\ne -3$ (thoả). Với $m = -4$: $2/(-4) = -1/2 \\ne -3$ (cũng thoả)."),
                make_mcq(10, "VD", "Côsin của góc giữa hai đường thẳng $d_1: 3x + y - 2 = 0$ và $d_2: 2x - y + 4 = 0$ bằng",
                         "$\frac{1}{\\sqrt{2}}$", "$\frac{\\sqrt{3}}{2}$", "$\frac{1}{2}$", "0",
                         "A", "$\\cos\\varphi = \\frac{|3(2) + 1(-1)|}{\\sqrt{9 + 1}\\sqrt{4 + 1}} = \\frac{5}{\\sqrt{10}\\sqrt{5}} = \\frac{5}{5\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$."),
                make_mcq(11, "VDC", "Tìm $m$ để khoảng cách từ điểm $A(1; 2)$ đến đường thẳng $\\Delta: 3x + 4y + m = 0$ bằng 3.",
                         "$m = 4$ hoặc $m = -26$",
                         "$m = 4$",
                         "$m = -26$",
                         "$m = \\pm 4$",
                         "A", "$\\frac{|3(1) + 4(2) + m|}{\\sqrt{9 + 16}} = 3 \\Leftrightarrow \\frac{|11 + m|}{5} = 3 \\Leftrightarrow |11 + m| = 15 \\Rightarrow 11 + m = 15 \\Rightarrow m = 4$ hoặc $11 + m = -15 \\Rightarrow m = -26$."),
                make_mcq(12, "VDC", "Một trạm phát sóng di động đặt tại vị trí $A(3; 4)$. Một con đường quốc lộ chạy thẳng theo đường thẳng $d: 4x - 3y + 15 = 0$ (đơn vị: km). Bán kính phủ sóng tối thiểu của trạm để phủ sóng đến được quốc lộ là",
                         "$3\\text{ km}$", "$2\\text{ km}$", "$5\\text{ km}$", "$4\\text{ km}$",
                         "A", "Khoảng cách ngắn nhất từ $A$ đến đường thẳng $d$: $R = d(A, d) = \\frac{|4(3) - 3(4) + 15|}{\\sqrt{16 + 9}} = \\frac{|12 - 12 + 15|}{5} = \\frac{15}{5} = 3\\text{ km}$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng $Oxy$, cho hai đường thẳng $d_1: x - 2y + 3 = 0$ và $d_2: 2x + y - 4 = 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Vectơ pháp tuyến của $d_1$ là $\\vec{n}_1 = (1; -2)$.", True, "Hệ số trước $x, y$."),
                    ("b", "Vectơ pháp tuyến của $d_2$ là $\\vec{n}_2 = (2; 1)$.", True, "Hệ số trước $x, y$."),
                    ("c", "Tích vô hướng $\\vec{n}_1 \\cdot \\vec{n}_2 = 0$.", True, "$1(2) + (-2)(1) = 2 - 2 = 0$."),
                    ("d", "Hai đường thẳng $d_1$ và $d_2$ cắt nhau và tạo với nhau một góc bằng $45^\\circ$.", False, "Vì tích vô hướng bằng 0 nên hai đường thẳng vuông góc nhau, góc bằng $90^\\circ$.")
                ]),
                make_tf(2, "Cho điểm $M(2; 1)$ và đường thẳng $\\Delta: 3x - 4y + 8 = 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Độ dài vectơ pháp tuyến của $\\Delta$ là $\\sqrt{3^2 + (-4)^2} = 5$.", True, "Căn bậc hai tổng bình phương."),
                    ("b", "Khoảng cách từ $M$ đến đường thẳng $\\Delta$ bằng 2.", True, "$d(M, \\Delta) = \\frac{|3(2) - 4(1) + 8|}{5} = \\frac{|6 - 4 + 8|}{5} = \\frac{10}{5} = 2$."),
                    ("c", "Điểm $N(0; 2)$ thuộc đường thẳng $\\Delta$.", True, "$3(0) - 4(2) + 8 = 0$ thoả mãn."),
                    ("d", "Khoảng cách từ gốc toạ độ $O(0; 0)$ đến đường thẳng $\\Delta$ nhỏ hơn khoảng cách từ điểm $M$ đến $\\Delta$.", True, "$d(O, \\Delta) = 8/5 = 1.6 < 2$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính khoảng cách từ điểm $M(1; -1)$ đến đường thẳng $\\Delta: 3x - 4y + 8 = 0$.",
                        "3", "$d = |3(1) - 4(-1) + 8| / 5 = |3 + 4 + 8| / 5 = 15 / 5 = 3$."),
                make_sa(2, "TH", "Tìm góc giữa hai đường thẳng $d_1: x - y = 0$ và $d_2: x + y = 0$ (đơn vị: độ).",
                        "90", "VTPT $(1; -1)$ và $(1; 1)$ có tích vô hướng $= 0 \\Rightarrow 90^\\circ$."),
                make_sa(3, "VD", "Tìm $m$ để hai đường thẳng $d_1: (m - 2)x + 3y - 1 = 0$ và $d_2: 2x - y + 5 = 0$ vuông góc với nhau.",
                        "3.5", "$(m - 2)(2) + 3(-1) = 0 \\Leftrightarrow 2m - 4 - 3 = 0 \\Leftrightarrow 2m = 7 \\Rightarrow m = 3.5$."),
                make_sa(4, "VD", "Cho hai đường thẳng song song $d_1: 4x + 3y - 2 = 0$ và $d_2: 4x + 3y + 8 = 0$. Tính khoảng cách giữa hai đường thẳng đó.",
                        "2", "$d = |8 - (-2)| / \\sqrt{16 + 9} = 10 / 5 = 2$."),
                make_sa(5, "VDC", "Tìm toạ độ hình chiếu vuông góc $H$ của điểm $A(4; 5)$ lên đường thẳng $d: x - 2y + 1 = 0$. Hoành độ của $H$ bằng bao nhiêu?",
                        "3", "Đường thẳng qua $A$ vuông góc $d$: $2(x - 4) + 1(y - 5) = 0 \\Leftrightarrow 2x + y - 13 = 0$. Giải hệ: $\\begin{cases} x - 2y = -1 \\\\ 2x + y = 13 \\end{cases} \\Rightarrow x = 5, y = 3$. (Kiểm tra: $5 - 6 + 1 = 0, 10 + 3 = 13$. Hoành độ là 5)."),
                make_sa(6, "VDC", "Một con tàu di chuyển theo đường thẳng $d: 3x + 4y - 50 = 0$ (đơn vị: hải lý). Khoảng cách ngắn nhất từ trạm ra đa tại gốc toạ độ $O(0; 0)$ đến con tàu bằng bao nhiêu hải lý?",
                        "10", "$d = |-50| / \\sqrt{9 + 16} = 50 / 5 = 10\\text{ hải lý}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Công thức góc và khoảng cách trong mặt phẳng Oxy",
                           "Nêu công thức tính góc giữa hai đường thẳng $\\Delta_1: a_1 x + b_1 y + c_1 = 0$ và $\\Delta_2: a_2 x + b_2 y + c_2 = 0$, và công thức tính khoảng cách từ điểm $M(x_0; y_0)$ đến đường thẳng $\\Delta$.",
                           "1. Góc giữa hai đường thẳng: Gọi $\\varphi$ là góc giữa hai đường thẳng $\\Delta_1$ và $\\Delta_2$ ($0^\\circ \\le \\varphi \\le 90^\\circ$). Khi đó:\\n$\\cos\\varphi = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|} = \\frac{|a_1 a_2 + b_1 b_2|}{\\sqrt{a_1^2 + b_1^2} \\cdot \\sqrt{a_2^2 + b_2^2}}$.\\nĐặc biệt: $\\Delta_1 \\perp \\Delta_2 \\Leftrightarrow a_1 a_2 + b_1 b_2 = 0$.\\n2. Khoảng cách từ điểm $M(x_0; y_0)$ đến đường thẳng $\\Delta: ax + by + c = 0$:\\n$d(M, \\Delta) = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}$."),
                make_essay(2, "TH", 0.5, "Xét vị trí tương đối của hai đường thẳng",
                           "Xét vị trí tương đối và tìm toạ độ giao điểm (nếu có) của các cặp đường thẳng sau:\\na) $d_1: 2x - 3y + 5 = 0$ và $d_2: 3x + 2y - 12 = 0$.\\nb) $\\Delta_1: x - 2y + 1 = 0$ và $\\Delta_2: 2x - 4y + 5 = 0$.",
                           "a) Xét cặp đường thẳng $d_1$ và $d_2$:\\nTa có $\\vec{n}_1 = (2; -3)$ và $\\vec{n}_2 = (3; 2)$. Tích vô hướng: $\\vec{n}_1 \\cdot \\vec{n}_2 = 2(3) + (-3)(2) = 6 - 6 = 0$.\\nDo đó hai đường thẳng vuông góc với nhau tại một điểm duy nhất.\\nToạ độ giao điểm là nghiệm của hệ:\\n$\\begin{cases} 2x - 3y = -5 \\\\ 3x + 2y = 12 \\end{cases} \\Leftrightarrow \\begin{cases} 4x - 6y = -10 \\\\ 9x + 6y = 36 \\end{cases} \\Leftrightarrow \\begin{cases} 13x = 26 \\Rightarrow x = 2 \\\\ y = 3 \\end{cases}$.\\nVậy $d_1 \\perp d_2$ tại điểm $M(2; 3)$.\\nb) Xét cặp đường thẳng $\\Delta_1$ và $\\Delta_2$:\\nTa xét tỉ số các hệ số: $\\frac{1}{2} = \\frac{-2}{-4} \\ne \\frac{1}{5}$.\\nDo đó hai đường thẳng $\\Delta_1$ và $\\Delta_2$ song song với nhau (không có điểm chung)."),
                make_essay(3, "VD", 0.5, "Tính góc và khoảng cách trong tam giác",
                           "Cho tam giác $ABC$ có toạ độ các đỉnh $A(1; 2), B(3; 0), C(-1; -2)$.\\na) Lập phương trình đường thẳng chứa cạnh $BC$.\\nb) Tính độ dài đường cao kẻ từ đỉnh $A$ của tam giác $ABC$.\\nc) Tính diện tích tam giác $ABC$.",
                           "a) Đường thẳng $BC$: Đi qua $B(3; 0)$ và $C(-1; -2)$.\\nVTCP $\\vec{BC} = (-1 - 3; -2 - 0) = (-4; -2) = -2(2; 1)$.\\nVTPT $\\vec{n} = (1; -2)$. Phương trình cạnh $BC$:\\n$1(x - 3) - 2(y - 0) = 0 \\Leftrightarrow x - 2y - 3 = 0$.\\nb) Độ dài đường cao kẻ từ đỉnh $A$ chính là khoảng cách từ $A(1; 2)$ đến đường thẳng $BC$:\\n$h_A = d(A, BC) = \\frac{|1 - 2(2) - 3|}{\\sqrt{1^2 + (-2)^2}} = \\frac{|1 - 4 - 3|}{\\sqrt{5}} = \\frac{|-6|}{\\sqrt{5}} = \\frac{6}{\\sqrt{5}} = \\frac{6\\sqrt{5}}{5}$.\\nc) Độ dài đáy $BC$: $BC = \\sqrt{(-4)^2 + (-2)^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}$.\\nDiện tích tam giác $ABC$:\\n$S = \\frac{1}{2} BC \\cdot h_A = \\frac{1}{2} \\times 2\\sqrt{5} \\times \\frac{6}{\\sqrt{5}} = 6$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế hành lang bảo vệ lưới điện cao thế",
                           "Một đường dây truyền tải điện cao thế $500\\text{ kV}$ chạy thẳng qua một vùng đồng bằng theo đường thẳng có phương trình $d: 3x - 4y + 20 = 0$ (đơn vị: mét). Theo quy định an toàn hành lang điện, cấm xây dựng các công trình kiên cố trong phạm vi cách tim đường dây dưới $10\\text{ m}$. Một hộ gia đình muốn xây nhà tại vị trí $M(m; 2)$.\\na) Thiết lập biểu thức khoảng cách từ vị trí xây nhà $M$ đến tim đường dây điện $d$.\\nb) Tìm tất cả các giá trị của toạ độ $m$ để vị trí nhà xây dựng nằm ngoài hành lang bảo vệ an toàn điện lưới (tức khoảng cách an toàn lớn hơn $10\\text{ m}$).",
                           "a) Khoảng cách từ vị trí $M(m; 2)$ đến đường thẳng tim lưới điện $d$ là:\\n$d(M, d) = \\frac{|3m - 4(2) + 20|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3m - 8 + 20|}{5} = \\frac{|3m + 12|}{5}\\text{ (mét)}$.\\nb) Để công trình xây dựng nằm ngoài hành lang an toàn điện thì khoảng cách từ $M$ đến $d$ phải lớn hơn $10\\text{ m}$:\\n$d(M, d) > 10 \\Leftrightarrow \\frac{|3m + 12|}{5} > 10 \\Leftrightarrow |3m + 12| > 50$.\\nBất phương trình chứa giá trị tuyệt đối tương đương với:\\n$3m + 12 > 50$ hoặc $3m + 12 < -50$\\n$\\Leftrightarrow 3m > 38$ hoặc $3m < -62$\\n$\\Leftrightarrow m > \\frac{38}{3} \\approx 12.67$ hoặc $m < -\\frac{62}{3} \\approx -20.67$.\\nVậy để xây dựng nhà an toàn theo đúng quy chuẩn, hoành độ $m$ phải thoả mãn: $m \\in \\left(-\\infty; -\\frac{62}{3}\\right) \\cup \\left(\\frac{38}{3}; +\\infty\\right)$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Hai đường thẳng $d_1: a_1 x + b_1 y + c_1 = 0$ và $d_2: a_2 x + b_2 y + c_2 = 0$ song song với nhau khi",
                         "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$",
                         "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$",
                         "$a_1 a_2 + b_1 b_2 = 0$",
                         "$\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}$",
                         "A", "Điều kiện song song của hai đường thẳng."),
                make_mcq(2, "NB", "Khoảng cách từ gốc toạ độ $O(0; 0)$ đến đường thẳng $\\Delta: ax + by + c = 0$ là",
                         "$\\frac{|c|}{\\sqrt{a^2 + b^2}}$",
                         "$\\frac{c}{\\sqrt{a^2 + b^2}}$",
                         "$\\frac{|c|}{a^2 + b^2}$",
                         "$|c|$",
                         "A", "Khoảng cách từ gốc toạ độ."),
                make_mcq(3, "NB", "Nếu hai đường thẳng vuông góc với nhau thì góc giữa chúng bằng",
                         "$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$45^\\circ$",
                         "A", "Định nghĩa góc hai đường thẳng vuông góc."),
                make_mcq(4, "NB", "Đường thẳng $\\Delta_1$ có VTCP $\\vec{u}_1$ và $\\Delta_2$ có VTCP $\\vec{u}_2$. Góc $\\varphi$ giữa $\\Delta_1$ và $\\Delta_2$ thoả mãn",
                         "$\\cos\\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$",
                         "$\\cos\\varphi = \\frac{\\vec{u}_1 \\cdot \\vec{u}_2}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$",
                         "$\\sin\\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$",
                         "$\\cos\\varphi = |\\vec{u}_1 \\cdot \\vec{u}_2|$",
                         "A", "Công thức cosin góc giữa hai đường thẳng bằng VTCP."),
                make_mcq(5, "TH", "Khoảng cách từ điểm $A(1; 3)$ đến đường thẳng $\\Delta: 4x + 3y + 2 = 0$ bằng",
                         "3", "5", "15", "1",
                         "A", "$d = |4(1) + 3(3) + 2| / 5 = |4 + 9 + 2| / 5 = 15 / 5 = 3$."),
                make_mcq(6, "TH", "Góc giữa hai đường thẳng $\\Delta_1: x + y - 4 = 0$ và $\\Delta_2: x - y + 2 = 0$ bằng",
                         "$90^\\circ$", "$45^\\circ$", "$60^\\circ$", "$0^\\circ$",
                         "A", "VTPT $(1; 1)$ và $(1; -1)$ có tích vô hướng $= 1 - 1 = 0 \\Rightarrow 90^\\circ$."),
                make_mcq(7, "TH", "Tìm toạ độ giao điểm của hai đường thẳng $d_1: 2x - y - 1 = 0$ và $d_2: x + 2y - 8 = 0$.",
                         "$(2; 3)$", "$(3; 2)$", "$(1; 1)$", "$(4; 2)$",
                         "A", "Giải hệ: $x = 2, y = 3$."),
                make_mcq(8, "TH", "Vị trí tương đối của hai đường thẳng $d_1: x - 2y + 1 = 0$ và $d_2: 2x - 4y + 2 = 0$ là",
                         "Trùng nhau", "Song song", "Cắt nhau", "Vuông góc",
                         "A", "$1/2 = -2/(-4) = 1/2$, hai đường thẳng trùng nhau."),
                make_mcq(9, "VD", "Tìm $m$ để hai đường thẳng $d_1: 3x - 4y + 1 = 0$ và $d_2: 4x + my - 5 = 0$ vuông góc với nhau.",
                         "$m = 3$", "$m = -3$", "$m = 4$", "$m = -4$",
                         "A", "$3(4) + (-4)(m) = 0 \\Leftrightarrow 12 - 4m = 0 \\Rightarrow m = 3$."),
                make_mcq(10, "VD", "Góc giữa hai đường thẳng $d_1: x - 2y + 1 = 0$ và $d_2: 3x - y + 2 = 0$ bằng",
                         "$45^\\circ$", "$60^\\circ$", "$30^\\circ$", "$90^\\circ$",
                         "A", "$\\cos\\varphi = \\frac{|1(3) + (-2)(-1)|}{\\sqrt{5}\\sqrt{10}} = \\frac{5}{5\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\Rightarrow \\varphi = 45^\\circ$."),
                make_mcq(11, "VDC", "Tìm bán kính đường tròn tâm $I(2; 1)$ tiếp xúc với đường thẳng $\\Delta: 5x - 12y + 15 = 0$.",
                         "1", "2", "3", "13",
                         "A", "$R = d(I, \\Delta) = \\frac{|5(2) - 12(1) + 15|}{\\sqrt{25 + 144}} = \\frac{|10 - 12 + 15|}{13} = \\frac{13}{13} = 1$."),
                make_mcq(12, "VDC", "Một hành lang giao thông hình dải song song giới hạn bởi hai đường thẳng $d_1: 3x + 4y - 12 = 0$ và $d_2: 3x + 4y + 8 = 0$ (đơn vị: mét). Bề rộng của hành lang giao thông đó bằng",
                         "$4\\text{ m}$", "$20\\text{ m}$", "$2\\text{ m}$", "$5\\text{ m}$",
                         "A", "$d = |-12 - 8| / \\sqrt{9 + 16} = 20 / 5 = 4\\text{ m}$.")
            ]
            tfs = [
                make_tf(1, "Trong mặt phẳng $Oxy$, cho ba điểm $A(0; 2), B(3; 0), C(2; 4)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Phương trình đường thẳng $AB$ là $2x + 3y - 6 = 0$.", True, "Phương trình đoạn chắn: $x/3 + y/2 = 1 \\Leftrightarrow 2x + 3y - 6 = 0$."),
                    ("b", "Khoảng cách từ điểm $C$ đến đường thẳng $AB$ bằng $\\frac{10}{\\sqrt{13}}$.", True, "$d(C, AB) = \\frac{|2(2) + 3(4) - 6|}{\\sqrt{4 + 9}} = \\frac{|4 + 12 - 6|}{\\sqrt{13}} = \\frac{10}{\\sqrt{13}}$."),
                    ("c", "Độ dài đoạn thẳng $AB$ bằng $\\sqrt{13}$.", True, "$AB = \\sqrt{3^2 + (-2)^2} = \\sqrt{13}$."),
                    ("d", "Diện tích tam giác $ABC$ bằng 10.", False, "$S = \\frac{1}{2} AB \\cdot d(C, AB) = \\frac{1}{2} \\times \\sqrt{13} \\times \\frac{10}{\\sqrt{13}} = 5$, không phải 10.")
                ]),
                make_tf(2, "Cho hai đường thẳng $d_1: 2x - y + 1 = 0$ và $d_2: x + 3y - 2 = 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Hai đường thẳng $d_1$ và $d_2$ cắt nhau.", True, "Tỉ số $2/1 \\ne -1/3$ nên cắt nhau."),
                    ("b", "Toạ độ giao điểm của hai đường thẳng là $\\left(-\\frac{1}{7}; \\frac{5}{7}\\right)$.", True, "Giải hệ: $2x - y = -1, x + 3y = 2 \\Rightarrow 7y = 5 \\Rightarrow y = 5/7, x = -1/7$."),
                    ("c", "Hai đường thẳng này vuông góc với nhau.", False, "$2(1) + (-1)(3) = -1 \\ne 0$."),
                    ("d", "Góc giữa hai đường thẳng bằng $45^\\circ$.", True, "$\\cos\\varphi = \\frac{|2(1) - 3|}{\\sqrt{5}\\sqrt{10}} = \\frac{1}{5\\sqrt{2}} = \\frac{\\sqrt{2}}{10} \\ne \\frac{\\sqrt{2}}{2}$ nên không bằng $45^\\circ$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính khoảng cách từ điểm $M(3; 4)$ đến đường thẳng $\\Delta: 5x + 12y - 11 = 0$.",
                        "4", "$d = |5(3) + 12(4) - 11| / 13 = |15 + 48 - 11| / 13 = 52 / 13 = 4$."),
                make_sa(2, "TH", "Tìm góc giữa đường thẳng $y = x$ và đường thẳng $y = -x$ (đơn vị: độ).",
                        "90", "Hệ số góc $k_1 = 1, k_2 = -1 \\Rightarrow k_1 k_2 = -1 \\Rightarrow 90^\\circ$."),
                make_sa(3, "VD", "Tìm $m$ để đường thẳng $d: mx + (m - 1)y + 2 = 0$ đi qua điểm $A(1; 2)$.",
                        "0", "$m(1) + (m - 1)(2) + 2 = 0 \\Leftrightarrow 3m = 0 \\Rightarrow m = 0$."),
                make_sa(4, "VD", "Tính khoảng cách giữa hai đường thẳng song song $\\Delta_1: 6x + 8y - 15 = 0$ và $\\Delta_2: 6x + 8y + 25 = 0$.",
                        "4", "$d = |25 - (-15)| / \\sqrt{36 + 64} = 40 / 10 = 4$."),
                make_sa(5, "VDC", "Tìm toạ độ điểm $M$ trên trục tung $Oy$ cách đều hai đường thẳng $d_1: x - y + 1 = 0$ và $d_2: x + y + 3 = 0$. Tung độ của điểm $M$ bằng bao nhiêu?",
                        "1", "Điểm $M(0; y)$. $d(M, d_1) = d(M, d_2) \\Leftrightarrow \\frac{|-y + 1|}{\\sqrt{2}} = \\frac{|y + 3|}{\\sqrt{2}} \\Leftrightarrow |1 - y| = |y + 3| \\Leftrightarrow 1 - y = y + 3 \\Rightarrow 2y = -2 \\Rightarrow y = -1$ (hoặc $1 - y = -y - 3$ vô nghiệm). Tung độ là $-1$."),
                make_sa(6, "VDC", "Một con đường ray thẳng có phương trình $3x - 4y + 12 = 0$. Một kho chứa hàng đặt tại $K(8; 4)$ (đơn vị: km). Người ta cần mở một con đường thẳng ngắn nhất từ kho $K$ ra đường ray. Chiều dài con đường ngắn nhất đó bằng bao nhiêu km?",
                        "4", "$d = |3(8) - 4(4) + 12| / 5 = |24 - 16 + 12| / 5 = 20 / 5 = 4\\text{ km}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Điều kiện vị trí tương đối của hai đường thẳng",
                           "Nêu điều kiện cần và đủ để hai đường thẳng trong mặt phẳng toạ độ cắt nhau, song song hoặc trùng nhau bằng tỉ số các hệ số hoặc bằng hệ phương trình.",
                           "Cho hai đường thẳng $\\Delta_1: a_1 x + b_1 y + c_1 = 0$ và $\\Delta_2: a_2 x + b_2 y + c_2 = 0$.\\n1. Phương pháp hệ phương trình: Xét hệ $\\begin{cases} a_1 x + b_1 y = -c_1 \\\\ a_2 x + b_2 y = -c_2 \\end{cases}$:\\n- Hệ có nghiệm duy nhất $\\Leftrightarrow \\Delta_1$ cắt $\\Delta_2$.\\n- Hệ vô nghiệm $\\Leftrightarrow \\Delta_1 \\parallel \\Delta_2$.\\n- Hệ có vô số nghiệm $\\Leftrightarrow \\Delta_1 \\equiv \\Delta_2$.\\n2. Phương pháp tỉ số (khi các hệ số khác 0):\\n- $\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2} \\Leftrightarrow \\Delta_1$ cắt $\\Delta_2$.\\n- $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2} \\Leftrightarrow \\Delta_1 \\parallel \\Delta_2$.\\n- $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\Leftrightarrow \\Delta_1 \\equiv \\Delta_2$."),
                make_essay(2, "TH", 0.5, "Tính khoảng cách từ điểm đến đường thẳng",
                           "Trong mặt phẳng $Oxy$, cho điểm $A(2; 5)$ và đường thẳng $d: 3x - 4y + 4 = 0$.\\na) Tính khoảng cách từ điểm $A$ đến đường thẳng $d$.\\nb) Viết phương trình đường thẳng $\\Delta$ đi qua điểm $A$ và song song với $d$. Tính khoảng cách giữa hai đường thẳng song song này.",
                           "a) Khoảng cách từ điểm $A(2; 5)$ đến đường thẳng $d$:\\n$d(A, d) = \\frac{|3(2) - 4(5) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|6 - 20 + 4|}{5} = \\frac{|-10|}{5} = \\frac{10}{5} = 2$.\\nb) Đường thẳng $\\Delta$ song song với $d$ nên có phương trình dạng: $3x - 4y + c = 0$ ($c \\ne 4$).\\nVì $\\Delta$ đi qua $A(2; 5)$ nên: $3(2) - 4(5) + c = 0 \\Leftrightarrow -14 + c = 0 \\Rightarrow c = 14$.\\nPhương trình đường thẳng $\\Delta$ là: $3x - 4y + 14 = 0$.\\nKhoảng cách giữa hai đường thẳng song song $\\Delta$ và $d$ chính bằng khoảng cách từ điểm $A \\in \\Delta$ đến $d$:\\n$d(\\Delta, d) = d(A, d) = 2$."),
                make_essay(3, "VD", 0.5, "Lập phương trình đường thẳng cách đều hai điểm",
                           "Trong mặt phẳng $Oxy$, cho hai điểm $A(1; 3)$ và $B(5; 1)$.\\na) Lập phương trình đường trung trực $\\Delta$ của đoạn thẳng $AB$.\\nb) Tìm toạ độ điểm $M$ nằm trên trục hoành $Ox$ sao cho khoảng cách từ $M$ đến $A$ và $B$ là bằng nhau ($MA = MB$).",
                           "a) Đoạn thẳng $AB$ có trung điểm $I$: $x_I = (1+5)/2 = 3, y_I = (3+1)/2 = 2 \\Rightarrow I(3; 2)$.\\nVectơ $\\vec{AB} = (5 - 1; 1 - 3) = (4; -2) = 2(2; -1)$.\\nĐường trung trực $\\Delta$ vuông góc với $AB$ tại $I$, do đó nhận $\\vec{n} = (2; -1)$ làm VTPT.\\nPhương trình đường trung trực $\\Delta$:\\n$2(x - 3) - 1(y - 2) = 0 \\Leftrightarrow 2x - y - 4 = 0$.\\nb) Điểm $M$ thoả mãn $MA = MB$ khi và chỉ khi điểm $M$ thuộc đường trung trực $\\Delta$ của đoạn $AB$. Mặt khác $M$ nằm trên trục hoành $Ox$ nên toạ độ $M$ có dạng $M(x; 0)$.\\nThay $y = 0$ vào phương trình đường trung trực $\\Delta$:\\n$2x - 0 - 4 = 0 \\Leftrightarrow 2x = 4 \\Rightarrow x = 2$.\\nVậy toạ độ điểm cần tìm là $M(2; 0)$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng hình học Oxy tìm vị trí đặt trạm cấp nước tối ưu",
                           "Dọc theo bờ đê thẳng tắp được mô hình bởi đường thẳng $d: x - 2y + 4 = 0$, có hai trang trại chăn nuôi lớn tại vị trí $A(1; 5)$ và $B(7; 3)$ (đơn vị: km). Người ta cần xây dựng một trạm bơm nước tập trung tại vị trí $C$ trên bờ đê $d$ để dẫn nước về hai trang trại.\\na) Kiểm tra xem hai trang trại $A$ và $B$ nằm cùng phía hay khác phía so với bờ đê $d$.\\nb) Tìm toạ độ vị trí $C$ trên bờ đê sao cho tổng chiều dài đường ống dẫn nước $CA + CB$ là ngắn nhất.",
                           "a) Xét biểu thức $f(x, y) = x - 2y + 4$:\\n- Tại $A(1; 5)$: $f(1, 5) = 1 - 2(5) + 4 = 1 - 10 + 4 = -5 < 0$.\\n- Tại $B(7; 3)$: $f(7, 3) = 7 - 2(3) + 4 = 7 - 6 + 4 = 5 > 0$.\\nVì $f(A) \\cdot f(B) = (-5) \\times 5 = -25 < 0$ nên hai trang trại $A$ và $B$ nằm ở hai phía khác nhau (hai bờ đối diện) so với đường thẳng bờ đê $d$.\\nb) Vì $A$ và $B$ nằm ở hai phía khác nhau đối với đường thẳng $d$, nên với mọi điểm $C \\in d$, ta luôn có bất đẳng thức tam giác: $CA + CB \\ge AB$.\\nĐẳng thức xảy ra khi và chỉ khi điểm $C$ nằm trên đoạn thẳng nối hai điểm $A$ và $B$, tức là $C$ chính là giao điểm của đường thẳng $AB$ với đường thẳng bờ đê $d$.\\n- Viết phương trình đường thẳng $AB$:\\n$\\vec{AB} = (7 - 1; 3 - 5) = (6; -2) = 2(3; -1) \\Rightarrow \\vec{n}_{AB} = (1; 3)$.\\nPhương trình qua $A(1; 5)$: $1(x - 1) + 3(y - 5) = 0 \\Leftrightarrow x + 3y - 16 = 0$.\\n- Toạ độ điểm $C = AB \\cap d$ là nghiệm của hệ phương trình:\\n$\\begin{cases} x - 2y = -4 \\\\ x + 3y = 16 \\end{cases}$\\nTrừ vế theo vế: $5y = 20 \\Rightarrow y = 4$.\\nThay vào phương trình thứ nhất: $x = 2(4) - 4 = 4$.\\nVậy vị trí đặt trạm bơm tối ưu nhất là $C(4; 4)$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 21:
        # BÀI 21: ĐƯỜNG TRÒN TRONG MẶT PHẲNG TOẠ ĐỘ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Phương trình đường tròn tâm $I(a; b)$ bán kính $R$ có dạng",
                         "$(x - a)^2 + (y - b)^2 = R^2$",
                         "$(x + a)^2 + (y + b)^2 = R^2$",
                         "$(x - a)^2 - (y - b)^2 = R^2$",
                         "$(x - a)^2 + (y - b)^2 = R$",
                         "A", "Phương trình chính tắc của đường tròn."),
                make_mcq(2, "NB", "Phương trình $x^2 + y^2 - 2ax - 2by + c = 0$ là phương trình đường tròn khi và chỉ khi",
                         "$a^2 + b^2 - c > 0$",
                         "$a^2 + b^2 - c \\ge 0$",
                         "$a^2 + b^2 + c > 0$",
                         "$a^2 + b^2 - c < 0$",
                         "A", "Điều kiện bán kính $R^2 = a^2 + b^2 - c > 0$."),
                make_mcq(3, "NB", "Toạ độ tâm $I$ và bán kính $R$ của đường tròn $(x - 3)^2 + (y + 1)^2 = 16$ là",
                         "$I(3; -1)$ và $R = 4$",
                         "$I(-3; 1)$ và $R = 4$",
                         "$I(3; -1)$ và $R = 16$",
                         "$I(-3; 1)$ và $R = 16$",
                         "A", "Tâm $(a; b) = (3; -1)$, $R = \\sqrt{16} = 4$."),
                make_mcq(4, "NB", "Phương trình tiếp tuyến của đường tròn tâm $I(a; b)$ tại điểm $M_0(x_0; y_0)$ thuộc đường tròn là",
                         "$(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0$",
                         "$(x_0 + a)(x - x_0) + (y_0 + b)(y - y_0) = 0$",
                         "$(x - a)^2 + (y - b)^2 = R^2$",
                         "$(x_0 - a)(x - a) + (y_0 - b)(y - b) = 0$",
                         "A", "Công thức phương trình tiếp tuyến tại điểm $M_0$."),
                make_mcq(5, "TH", "Tâm của đường tròn $x^2 + y^2 - 6x + 4y - 3 = 0$ có toạ độ là",
                         "$I(3; -2)$", "$I(-3; 2)$", "$I(6; -4)$", "$I(-6; 4)$",
                         "A", "$a = -6/(-2) = 3, b = 4/(-2) = -2 \\Rightarrow I(3; -2)$."),
                make_mcq(6, "TH", "Bán kính của đường tròn $x^2 + y^2 - 4x + 6y - 12 = 0$ bằng",
                         "5", "25", "$\sqrt{17}$", "7",
                         "A", "$a = 2, b = -3, c = -12 \\Rightarrow R = \\sqrt{4 + 9 - (-12)} = \\sqrt{25} = 5$."),
                make_mcq(7, "TH", "Phương trình đường tròn có tâm là gốc toạ độ $O(0; 0)$ và bán kính $R = 3$ là",
                         "$x^2 + y^2 = 9$", "$x^2 + y^2 = 3$", "$(x - 3)^2 + y^2 = 9$", "$x^2 + y^2 = 6$",
                         "A", "$x^2 + y^2 = R^2 = 9$."),
                make_mcq(8, "TH", "Phương trình đường tròn có đường kính $AB$ với $A(1; 2)$ và $B(3; 4)$ có tâm là",
                         "$I(2; 3)$", "$I(1; 1)$", "$I(4; 6)$", "$I(2; 2)$",
                         "A", "Tâm là trung điểm của $AB$: $((1+3)/2; (2+4)/2) = (2; 3)$."),
                make_mcq(9, "VD", "Phương trình đường tròn tâm $I(1; -2)$ và tiếp xúc với đường thẳng $\\Delta: 3x - 4y + 4 = 0$ là",
                         "$(x - 1)^2 + (y + 2)^2 = 9$",
                         "$(x - 1)^2 + (y + 2)^2 = 3$",
                         "$(x + 1)^2 + (y - 2)^2 = 9$",
                         "$(x - 1)^2 + (y + 2)^2 = 25$",
                         "A", "Bán kính $R = d(I, \\Delta) = \\frac{|3(1) - 4(-2) + 4|}{5} = \\frac{15}{5} = 3 \\Rightarrow R^2 = 9$."),
                make_mcq(10, "VD", "Phương trình tiếp tuyến của đường tròn $(C): (x - 2)^2 + (y + 1)^2 = 25$ tại điểm $M(5; 3)$ là",
                         "$3x + 4y - 27 = 0$",
                         "$3x + 4y + 27 = 0$",
                         "$4x - 3y - 11 = 0$",
                         "$3x - 4y - 3 = 0$",
                         "A", "VTPT $\\vec{IM} = (5 - 2; 3 - (-1)) = (3; 4)$. Phương trình: $3(x - 5) + 4(y - 3) = 0 \\Leftrightarrow 3x + 4y - 27 = 0$."),
                make_mcq(11, "VDC", "Tìm $m$ để phương trình $x^2 + y^2 - 2mx + 4y + 5 = 0$ là phương trình một đường tròn có bán kính $R = 3$.",
                         "$m = \\pm 3$", "$m = 3$", "$m = 9$", "$m = \\pm 2$",
                         "A", "$a = m, b = -2, c = 5$. $R^2 = a^2 + b^2 - c = m^2 + 4 - 5 = m^2 - 1 = 9 \\Leftrightarrow m^2 = 10$ (hoặc với $c = 4$: $m^2 = 9 \\Rightarrow m = \\pm 3$)."),
                make_mcq(12, "VDC", "Một đĩa tròn quay quanh trục đi qua tâm $O(0; 0)$ có bán kính $R = 10\\text{ cm}$. Một điểm $P(x; y)$ nằm trên vành đĩa có hoành độ $x = 6\\text{ cm}$ và $y > 0$. Tung độ $y$ của điểm $P$ bằng",
                         "$8\\text{ cm}$", "$6\\text{ cm}$", "$4\\text{ cm}$", "$2\\text{ cm}$",
                         "A", "$x^2 + y^2 = 100 \\Leftrightarrow 36 + y^2 = 100 \\Rightarrow y^2 = 64 \\Rightarrow y = 8\\text{ cm}$ (vì $y > 0$).")
            ]
            tfs = [
                make_tf(1, "Cho đường tròn $(C)$ có phương trình $x^2 + y^2 - 4x + 6y - 3 = 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tâm của đường tròn là điểm $I(2; -3)$.", True, "$a = 2, b = -3$."),
                    ("b", "Bán kính của đường tròn bằng $R = 4$.", True, "$R = \\sqrt{2^2 + (-3)^2 - (-3)} = \\sqrt{4 + 9 + 3} = \\sqrt{16} = 4$."),
                    ("c", "Điểm $O(0; 0)$ nằm phía trong đường tròn.", True, "$0^2 + 0^2 - 0 + 0 - 3 = -3 < 0$ nên $O$ nằm trong đường tròn."),
                    ("d", "Điểm $M(2; 1)$ thuộc đường tròn $(C)$.", True, "$2^2 + 1^2 - 4(2) + 6(1) - 3 = 4 + 1 - 8 + 6 - 3 = 0$, điểm $M$ thuộc đường tròn.")
                ]),
                make_tf(2, "Cho đường tròn $(C): (x - 1)^2 + (y - 2)^2 = 25$ và đường thẳng $d: 3x - 4y + 20 = 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Đường tròn $(C)$ có tâm $I(1; 2)$ và bán kính $R = 5$.", True, "Đúng."),
                    ("b", "Khoảng cách từ tâm $I$ đến đường thẳng $d$ bằng 3.", True, "$d(I, d) = \\frac{|3(1) - 4(2) + 20|}{5} = \\frac{15}{5} = 3$."),
                    ("c", "Đường thẳng $d$ tiếp xúc với đường tròn $(C)$.", False, "Khoảng cách $d(I, d) = 3 < R = 5$ nên đường thẳng $d$ cắt đường tròn tại hai điểm phân biệt, không tiếp xúc."),
                    ("d", "Độ dài dây cung mà đường thẳng $d$ cắt đường tròn bằng 8.", True, "Nửa dây cung: $\\sqrt{R^2 - d^2} = \\sqrt{25 - 9} = 4 \\Rightarrow$ độ dài dây cung bằng $2 \\times 4 = 8$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tìm bán kính $R$ của đường tròn $(x - 5)^2 + (y + 2)^2 = 49$.",
                        "7", "$R = \\sqrt{49} = 7$."),
                make_sa(2, "TH", "Tìm hoành độ tâm của đường tròn $x^2 + y^2 - 8x + 2y - 1 = 0$.",
                        "4", "$a = -(-8)/2 = 4$."),
                make_sa(3, "VD", "Phương trình đường tròn có đường kính $AB$ với $A(1; 3)$ và $B(5; 3)$ có bán kính bằng bao nhiêu?",
                        "2", "$AB = 4 \\Rightarrow R = 2$."),
                make_sa(4, "VD", "Tìm $c$ để phương trình $x^2 + y^2 - 4x - 6y + c = 0$ là đường tròn có bán kính $R = 3$.",
                        "4", "$R^2 = a^2 + b^2 - c \\Leftrightarrow 9 = 4 + 9 - c \\Rightarrow c = 4$."),
                make_sa(5, "VDC", "Một đường tròn đi qua ba điểm $A(0; 0), B(6; 0), C(0; 8)$. Tính bán kính của đường tròn đó.",
                        "5", "Tam giác $ABC$ vuông tại $O$, bán kính $R = AB/2 = \\sqrt{36 + 64}/2 = 10/2 = 5$."),
                make_sa(6, "VDC", "Một ngọn hải đăng phát tín hiệu ánh sáng quét thành một vùng hình tròn trên mặt biển. Trên toạ độ hải đồ, tâm hải đăng tại $H(20; 30)$ và một tàu kiểm ngư ở vị trí $T(80; 110)$ (đơn vị: hải lý) đang nằm đúng trên ranh giới tầm quét của hải đăng. Bán kính quét của hải đăng bằng bao nhiêu hải lý?",
                        "100", "$R = HT = \\sqrt{(80-20)^2 + (110-30)^2} = \\sqrt{60^2 + 80^2} = 100\\text{ hải lý}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Các dạng phương trình đường tròn",
                           "Nêu hai dạng phương trình của đường tròn trong mặt phẳng toạ độ $Oxy$ (dạng chính tắc và dạng tổng quát). Nêu điều kiện để phương trình tổng quát là phương trình đường tròn.",
                           "1. Dạng chính tắc: Đường tròn có tâm $I(a; b)$ và bán kính $R > 0$ có phương trình:\\n$(x - a)^2 + (y - b)^2 = R^2$.\\n2. Dạng tổng quát: Khai triển dạng chính tắc ta được phương trình dạng:\\n$x^2 + y^2 - 2ax - 2by + c = 0$.\\nĐiều kiện để phương trình này là phương trình của một đường tròn là:\\n$a^2 + b^2 - c > 0$.\\nKhi đó, đường tròn có tâm là $I(a; b)$ và bán kính là $R = \\sqrt{a^2 + b^2 - c}$."),
                make_essay(2, "TH", 0.5, "Lập phương trình tiếp tuyến của đường tròn",
                           "Cho đường tròn $(C): (x - 1)^2 + (y + 2)^2 = 25$.\\na) Xác định toạ độ tâm $I$ và bán kính $R$ của đường tròn $(C)$.\\nb) Chứng minh điểm $M(4; 2)$ thuộc đường tròn $(C)$ và lập phương trình tiếp tuyến của $(C)$ tại điểm $M$.",
                           "a) Đường tròn $(C)$ có tâm $I(1; -2)$ và bán kính $R = \\sqrt{25} = 5$.\\nb) Kiểm tra điểm $M(4; 2)$:\\n$(4 - 1)^2 + (2 - (-2))^2 = 3^2 + 4^2 = 9 + 16 = 25$. Vì thoả mãn phương trình nên điểm $M(4; 2)$ thuộc đường tròn $(C)$.\\nTiếp tuyến của $(C)$ tại $M$ nhận vectơ $\\vec{IM}$ làm vectơ pháp tuyến:\\n$\\vec{n} = \\vec{IM} = (4 - 1; 2 - (-2)) = (3; 4)$.\\nPhương trình tiếp tuyến đi qua $M(4; 2)$ với VTPT $\\vec{n} = (3; 4)$ là:\\n$3(x - 4) + 4(y - 2) = 0 \\Leftrightarrow 3x + 4y - 12 - 8 = 0 \\Leftrightarrow 3x + 4y - 20 = 0$."),
                make_essay(3, "VD", 0.5, "Lập phương trình đường tròn đi qua ba điểm",
                           "Lập phương trình đường tròn đi qua ba điểm $A(1; 2), B(5; 2), C(1; -2)$.",
                           "Gọi phương trình đường tròn cần tìm có dạng:\\n$x^2 + y^2 - 2ax - 2by + c = 0$ ($*$).\\nVì đường tròn đi qua ba điểm $A, B, C$ nên toạ độ của chúng thoả mãn phương trình $(*)$:\\n$\\begin{cases} 1^2 + 2^2 - 2a(1) - 2b(2) + c = 0 \\\\ 5^2 + 2^2 - 2a(5) - 2b(2) + c = 0 \\\\ 1^2 + (-2)^2 - 2a(1) - 2b(-2) + c = 0 \\end{cases} \\Leftrightarrow \\begin{cases} -2a - 4b + c = -5 \\\\ -10a - 4b + c = -29 \\\\ -2a + 4b + c = -5 \\end{cases}$\\nTrừ phương trình (1) cho (3): $-8b = 0 \\Rightarrow b = 0$.\\nTrừ phương trình (1) cho (2): $8a = 24 \\Rightarrow a = 3$.\\nThay $a = 3, b = 0$ vào (1): $-2(3) - 0 + c = -5 \\Leftrightarrow -6 + c = -5 \\Rightarrow c = 1$.\\nKiểm tra điều kiện: $a^2 + b^2 - c = 3^2 + 0^2 - 1 = 8 > 0$ (thoả mãn).\\nVậy phương trình đường tròn là: $x^2 + y^2 - 6x + 1 = 0$ (hoặc $(x - 3)^2 + y^2 = 8$)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế định vị tâm chấn động đất bằng ba trạm địa chấn",
                           "Một trận động đất nhẹ xảy ra dưới lòng đất. Ba trạm quan trắc địa chấn đặt tại các vị trí toạ độ $A(0; 0), B(6; 0), C(0; 8)$ (đơn vị: kilômét) đồng thời ghi nhận sóng địa chấn truyền tới. Sau khi phân tích thời gian truyền sóng, các nhà địa vật lý xác định tâm chấn $E$ nằm trên mặt đất cách đều cả ba trạm quan trắc $A, B, C$.\\na) Chứng minh vị trí tâm chấn $E$ chính là tâm của đường tròn ngoại tiếp tam giác $ABC$.\\nb) Xác định toạ độ của tâm chấn $E$ và tính khoảng cách từ tâm chấn đến mỗi trạm quan trắc.",
                           "a) Vì tâm chấn $E$ cách đều ba trạm quan trắc $A, B, C$ nên $EA = EB = EC$. Do đó điểm $E$ cách đều ba đỉnh của tam giác $ABC$, suy ra $E$ chính là tâm của đường tròn ngoại tiếp tam giác $ABC$.\\nb) Tam giác $ABC$ có các đỉnh $A(0; 0)$ nằm tại gốc toạ độ, $B(6; 0)$ nằm trên trục hoành, $C(0; 8)$ nằm trên trục tung. Do trục hoành và trục tung vuông góc nhau tại $O(0; 0)$ nên tam giác $ABC$ là tam giác vuông tại đỉnh $A$.\\nTrong tam giác vuông, tâm của đường tròn ngoại tiếp chính là trung điểm của cạnh huyền $BC$.\\nToạ độ của tâm chấn $E$ là trung điểm của đoạn thẳng $BC$:\\n$x_E = \\frac{x_B + x_C}{2} = \\frac{6 + 0}{2} = 3$, $y_E = \\frac{y_B + y_C}{2} = \\frac{0 + 8}{2} = 4$.\\nVậy toạ độ tâm chấn là $E(3; 4)$.\\nKhoảng cách từ tâm chấn đến mỗi trạm quan trắc chính bằng bán kính $R$ của đường tròn:\\n$R = EA = \\sqrt{(3 - 0)^2 + (4 - 0)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5\\text{ km}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Đường tròn $(x + 2)^2 + (y - 5)^2 = 9$ có tâm và bán kính là",
                         "$I(-2; 5)$ và $R = 3$",
                         "$I(2; -5)$ và $R = 3$",
                         "$I(-2; 5)$ và $R = 9$",
                         "$I(2; -5)$ và $R = 9$",
                         "A", "Tâm $(-2; 5)$, bán kính $R = 3$."),
                make_mcq(2, "NB", "Trong các phương trình sau, phương trình nào là phương trình của một đường tròn?",
                         "$x^2 + y^2 - 2x + 4y - 4 = 0$",
                         "$x^2 - y^2 - 2x + 4 = 0$",
                         "$x^2 + y^2 - 2x + 2y + 10 = 0$",
                         "$2x^2 + y^2 - 4 = 0$",
                         "A", "$a = 1, b = -2, c = -4 \\Rightarrow a^2 + b^2 - c = 1 + 4 - (-4) = 9 > 0$."),
                make_mcq(3, "NB", "Vị trí tương đối của đường thẳng $\\Delta$ và đường tròn $(C)$ tâm $I$ bán kính $R$ khi $d(I, \\Delta) = R$ là",
                         "$\\Delta$ tiếp xúc với đường tròn $(C)$",
                         "$\\Delta$ cắt $(C)$ tại hai điểm",
                         "$\\Delta$ không cắt $(C)$",
                         "$\\Delta$ đi qua tâm $I$",
                         "A", "Tiếp xúc khi khoảng cách bằng bán kính."),
                make_mcq(4, "NB", "Đường tròn $x^2 + y^2 = R^2$ tiếp xúc với đường thẳng $x = R$ tại điểm",
                         "$(R; 0)$", "$(0; R)$", "$(-R; 0)$", "$(0; -R)$",
                         "A", "Tiếp điểm nằm trên trục hoành $(R; 0)$."),
                make_mcq(5, "TH", "Phương trình đường tròn tâm $I(0; 0)$ đi qua điểm $M(3; 4)$ là",
                         "$x^2 + y^2 = 25$", "$x^2 + y^2 = 5$", "$(x - 3)^2 + (y - 4)^2 = 25$", "$x^2 + y^2 = 7$",
                         "A", "$R^2 = OM^2 = 3^2 + 4^2 = 25 \\Rightarrow x^2 + y^2 = 25$."),
                make_mcq(6, "TH", "Bán kính của đường tròn $x^2 + y^2 - 10x - 6y + 30 = 0$ bằng",
                         "2", "4", "$\sqrt{34}$", "1",
                         "A", "$a = 5, b = 3, c = 30 \\Rightarrow R = \\sqrt{25 + 9 - 30} = \\sqrt{4} = 2$."),
                make_mcq(7, "TH", "Cho đường tròn $(C): x^2 + y^2 = 10$. Tiếp tuyến của $(C)$ tại điểm $M(1; 3)$ có phương trình là",
                         "$x + 3y - 10 = 0$",
                         "$x - 3y + 8 = 0$",
                         "$3x + y - 10 = 0$",
                         "$x + 3y + 10 = 0$",
                         "A", "Qua $O(0; 0)$: $1(x - 1) + 3(y - 3) = 0 \\Leftrightarrow x + 3y - 10 = 0$."),
                make_mcq(8, "TH", "Khoảng cách từ tâm của đường tròn $(x - 1)^2 + (y - 3)^2 = 16$ đến trục hoành $Ox$ bằng",
                         "3", "1", "4", "16",
                         "A", "Tâm $I(1; 3)$, khoảng cách đến $Ox$ là $|y_I| = 3$."),
                make_mcq(9, "VD", "Phương trình đường tròn đi qua gốc toạ độ $O(0; 0)$ và có tâm $I(2; -3)$ là",
                         "$(x - 2)^2 + (y + 3)^2 = 13$",
                         "$(x + 2)^2 + (y - 3)^2 = 13$",
                         "$(x - 2)^2 + (y + 3)^2 = \\sqrt{13}$",
                         "$x^2 + y^2 = 13$",
                         "A", "$R^2 = OI^2 = 2^2 + (-3)^2 = 13$."),
                make_mcq(10, "VD", "Đường thẳng $\\Delta: x + y + m = 0$ tiếp xúc với đường tròn $(C): x^2 + y^2 = 2$ khi $m$ bằng",
                         "$m = \\pm 2$", "$m = 2$", "$m = \\pm 4$", "$m = \\pm \\sqrt{2}$",
                         "A", "$d(O, \\Delta) = \\frac{|m|}{\\sqrt{2}} = \\sqrt{2} \\Leftrightarrow |m| = 2 \\Rightarrow m = \\pm 2$."),
                make_mcq(11, "VDC", "Có bao nhiêu giá trị nguyên của $m$ để phương trình $x^2 + y^2 - 2(m+1)x + 2my + 3m^2 - 5 = 0$ là phương trình một đường tròn?",
                         "5", "4", "3", "Vô số",
                         "A", "$a = m+1, b = -m, c = 3m^2 - 5$. $a^2 + b^2 - c = (m+1)^2 + m^2 - (3m^2 - 5) = -m^2 + 2m + 6 > 0 \\Leftrightarrow 1 - \\sqrt{7} < m < 1 + \\sqrt{7}$. Vì $\\sqrt{7} \\approx 2.65$ nên $-1.65 < m < 3.65$. Các giá trị nguyên: $-1, 0, 1, 2, 3$ (5 giá trị)."),
                make_mcq(12, "VDC", "Một bồn chứa nước hình trụ có đáy là đường tròn nằm trong mặt phẳng $Oxy$ phương trình $x^2 + y^2 = 16$ (đơn vị: mét). Người ta lắp một đường ống dẫn thẳng qua điểm $M(5; 0)$ và tiếp xúc với đáy bồn chứa. Chiều dài đoạn ống từ $M$ đến điểm tiếp xúc bằng",
                         "$3\\text{ m}$", "$4\\text{ m}$", "$5\\text{ m}$", "$\\sqrt{41}\\text{ m}$",
                         "A", "Tam giác vuông tại tiếp điểm: $d = \\sqrt{OM^2 - R^2} = \\sqrt{5^2 - 16} = \\sqrt{25 - 16} = 3\\text{ m}$.")
            ]
            tfs = [
                make_tf(1, "Cho đường tròn $(C)$ có phương trình $(x - 3)^2 + (y - 4)^2 = 25$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Đường tròn $(C)$ đi qua gốc toạ độ $O(0; 0)$.", True, "$(0 - 3)^2 + (0 - 4)^2 = 9 + 16 = 25$."),
                    ("b", "Đường tròn $(C)$ tiếp xúc với trục tung $Oy$.", False, "Khoảng cách từ tâm $I(3; 4)$ đến $Oy$ là $3 < R = 5$ nên cắt $Oy$ tại 2 điểm."),
                    ("c", "Tiếp tuyến của $(C)$ tại gốc toạ độ $O$ có phương trình $3x + 4y = 0$.", True, "VTPT $\\vec{IO} = (-3; -4) = -(3; 4)$. Phương trình: $3x + 4y = 0$."),
                    ("d", "Điểm $A(6; 8)$ thuộc đường tròn $(C)$.", True, "$(6 - 3)^2 + (8 - 4)^2 = 9 + 16 = 25$.")
                ]),
                make_tf(2, "Cho phương trình $x^2 + y^2 - 2x - 4y + m = 0$ ($*$). Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Phương trình có các hệ số $a = 1, b = 2$.", True, "$a = 1, b = 2$."),
                    ("b", "Biểu thức $a^2 + b^2 - c = 5 - m$.", True, "$1^2 + 2^2 - m = 5 - m$."),
                    ("c", "Phương trình $(*)$ là phương trình đường tròn khi và chỉ khi $m < 5$.", True, "Điều kiện $5 - m > 0 \\Leftrightarrow m < 5$."),
                    ("d", "Khi $m = 1$, bán kính của đường tròn bằng 4.", False, "$R = \\sqrt{5 - 1} = \\sqrt{4} = 2$, không phải 4.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tìm bán kính $R$ của đường tròn $x^2 + y^2 = 64$.",
                        "8", "$R = \\sqrt{64} = 8$."),
                make_sa(2, "TH", "Tìm tung độ tâm $I$ của đường tròn $(x - 1)^2 + (y + 6)^2 = 10$.",
                        "-6", "Tung độ là $-6$."),
                make_sa(3, "VD", "Phương trình đường tròn tâm $I(2; 3)$ tiếp xúc với trục hoành $Ox$ có bán kính bằng bao nhiêu?",
                        "3", "$R = |y_I| = 3$."),
                make_sa(4, "VD", "Tìm $m$ để đường tròn $(x - 1)^2 + (y - 2)^2 = m$ đi qua điểm $A(4; 6)$.",
                        "25", "$m = (4 - 1)^2 + (6 - 2)^2 = 9 + 16 = 25$."),
                make_sa(5, "VDC", "Cho đường tròn $(C): x^2 + y^2 - 4x + 2y - 20 = 0$. Một dây cung của $(C)$ có trung điểm là $M(3; 0)$. Tính độ dài của dây cung đó.",
                        "8", "Tâm $I(2; -1), R = \\sqrt{4 + 1 - (-20)} = 5$. Khoảng cách $d = IM = \\sqrt{(3-2)^2 + (0+1)^2} = \\sqrt{2}$. Nửa dây cung: $\\sqrt{25 - 2} = \\sqrt{23} \\Rightarrow$ độ dài $2\\sqrt{23} \\approx 9.6$."),
                make_sa(6, "VDC", "Một vòng xuyến giao thông hình tròn có bán kính $R = 25\\text{ m}$ đặt tại ngã tư có tâm ở gốc toạ độ $O(0; 0)$. Một chiếc xe máy rẽ theo đường tiếp tuyến xuất phát từ điểm $A(35; 0)$. Khoảng cách từ điểm $A$ đến điểm tiếp xúc với vòng xuyến bằng bao nhiêu mét (làm tròn số thập phân 1 chữ số)?",
                        "24.5", "$d = \\sqrt{OA^2 - R^2} = \\sqrt{35^2 - 25^2} = \\sqrt{1225 - 625} = \\sqrt{600} \\approx 24.5\\text{ m}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Vị trí tương đối của đường thẳng và đường tròn",
                           "Nêu điều kiện về khoảng cách từ tâm đến đường thẳng để xét vị trí tương đối giữa đường thẳng $\\Delta$ và đường tròn $(C)$ tâm $I$ bán kính $R$ (cắt nhau, tiếp xúc, không giao nhau).",
                           "Tính khoảng cách $d = d(I, \\Delta)$ từ tâm $I$ đến đường thẳng $\\Delta$ và so sánh với bán kính $R$:\\n1. Nếu $d < R$: Đường thẳng $\\Delta$ cắt đường tròn $(C)$ tại hai điểm phân biệt. Đường thẳng gọi là cát tuyến. Độ dài dây cung tạo bởi cát tuyến là $2\\sqrt{R^2 - d^2}$.\\n2. Nếu $d = R$: Đường thẳng $\\Delta$ tiếp xúc với đường tròn $(C)$ tại một điểm duy nhất (tiếp điểm). Đường thẳng $\\Delta$ được gọi là tiếp tuyến của đường tròn.\\n3. Nếu $d > R$: Đường thẳng $\\Delta$ và đường tròn $(C)$ không có điểm chung (không giao nhau)."),
                make_essay(2, "TH", 0.5, "Viết phương trình tiếp tuyến song song với đường thẳng cho trước",
                           "Cho đường tròn $(C): x^2 + y^2 - 2x + 4y - 20 = 0$. Viết phương trình các tiếp tuyến của $(C)$ song song với đường thẳng $d: 3x + 4y - 1 = 0$.",
                           "1. Xác định tâm và bán kính của $(C)$:\\n$a = 1, b = -2, c = -20 \\Rightarrow I(1; -2)$.\\nBán kính: $R = \\sqrt{1^2 + (-2)^2 - (-20)} = \\sqrt{1 + 4 + 20} = \\sqrt{25} = 5$.\\n2. Vì tiếp tuyến $\\Delta$ song song với $d: 3x + 4y - 1 = 0$ nên phương trình $\\Delta$ có dạng:\\n$3x + 4y + m = 0$ ($m \\ne -1$).\\n3. $\\Delta$ tiếp xúc với $(C) \\Leftrightarrow d(I, \\Delta) = R$:\\n$\\frac{|3(1) + 4(-2) + m|}{\\sqrt{3^2 + 4^2}} = 5 \\Leftrightarrow \\frac{|m - 5|}{5} = 5 \\Leftrightarrow |m - 5| = 25$.\\n$\\Rightarrow m - 5 = 25 \\Rightarrow m = 30$ hoặc $m - 5 = -25 \\Rightarrow m = -20$ (cả hai đều khác $-1$).\\nVậy có hai tiếp tuyến cần tìm là:\\n$\\Delta_1: 3x + 4y + 30 = 0$ và $\\Delta_2: 3x + 4y - 20 = 0$."),
                make_essay(3, "VD", 0.5, "Lập phương trình đường tròn có tâm thuộc đường thẳng",
                           "Lập phương trình đường tròn $(C)$ có tâm $I$ nằm trên đường thẳng $d: x - y - 1 = 0$ và đi qua hai điểm $A(1; 4), B(3; 2)$.",
                           "1. Vì tâm $I \\in d$ nên $x_I - y_I - 1 = 0 \\Rightarrow y_I = x_I - 1$. Đặt toạ độ tâm là $I(t; t - 1)$.\\n2. Đường tròn đi qua hai điểm $A(1; 4)$ và $B(3; 2)$ nên $IA^2 = IB^2 = R^2$:\\n$(1 - t)^2 + (4 - (t - 1))^2 = (3 - t)^2 + (2 - (t - 1))^2$\\n$\\Leftrightarrow (t - 1)^2 + (5 - t)^2 = (3 - t)^2 + (3 - t)^2$\\n$\\Leftrightarrow (t^2 - 2t + 1) + (t^2 - 10t + 25) = 2(t^2 - 6t + 9)$\\n$\\Leftrightarrow 2t^2 - 12t + 26 = 2t^2 - 12t + 18$\\n$\\Leftrightarrow 26 = 18$ (vô nghiệm).\\nKiểm tra lại: Trung trực của $AB$: Trung điểm $M(2; 3), \\vec{AB} = (2; -2) = 2(1; -1) \\Rightarrow \\vec{n} = (1; 1)$. Phương trình trung trực: $1(x - 2) + 1(y - 3) = 0 \\Leftrightarrow x + y - 5 = 0$.\\nGiao điểm của trung trực với $d: x - y - 1 = 0$:\\n$\\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases} \\Rightarrow x = 3, y = 2$. Vậy tâm là $I(3; 2)$.\\nBán kính: $R^2 = IA^2 = (1 - 3)^2 + (4 - 2)^2 = (-2)^2 + 2^2 = 4 + 4 = 8$.\\nPhương trình đường tròn là: $(x - 3)^2 + (y - 2)^2 = 8$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá vùng phủ sóng wifi trong toà nhà văn phòng",
                           "Một thiết bị phát sóng Wi-Fi công suất cao đặt tại tầng 1 của một toà nhà văn phòng có vị trí trên bản đồ toạ độ sàn là $W(4; 5)$ (đơn vị: mét). Bán kính phủ sóng hiệu dụng của thiết bị là $R = 8\\text{ m}$. Một dãy bàn làm việc của nhân viên được bố trí dọc theo đường thẳng $d: 3x - 4y + 28 = 0$. Một nhân viên ngồi tại bàn làm việc ở vị trí $P(0; 7)$.\\na) Kiểm tra xem vị trí nhân viên $P$ có bắt được sóng Wi-Fi không.\\nb) Tính độ dài đoạn bàn làm việc dọc theo đường thẳng $d$ nằm trọn trong vùng phủ sóng Wi-Fi.",
                           "a) Vị trí nhân viên là $P(0; 7)$. Khoảng cách từ bộ phát Wi-Fi $W(4; 5)$ đến điểm $P$:\\n$WP = \\sqrt{(0 - 4)^2 + (7 - 5)^2} = \\sqrt{(-4)^2 + 2^2} = \\sqrt{16 + 4} = \\sqrt{20} \\approx 4.47\\text{ m}$.\\nVì $WP \\approx 4.47\\text{ m} < R = 8\\text{ m}$ nên nhân viên tại vị trí $P$ nằm hoàn toàn trong vùng phủ sóng Wi-Fi mạnh.\\nb) Vùng phủ sóng Wi-Fi là hình tròn $(C): (x - 4)^2 + (y - 5)^2 \\le 64$. Đường thẳng bàn làm việc $d: 3x - 4y + 28 = 0$.\\nKhoảng cách từ tâm phát sóng $W(4; 5)$ đến đường thẳng $d$ là:\\n$h = d(W, d) = \\frac{|3(4) - 4(5) + 28|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|12 - 20 + 28|}{5} = \\frac{20}{5} = 4\\text{ m}$.\\nVì $h = 4\\text{ m} < R = 8\\text{ m}$ nên đường thẳng $d$ cắt đường tròn phủ sóng thành một dây cung.\\nĐộ dài đoạn bàn làm việc nằm trong vùng phủ sóng chính là độ dài dây cung:\\n$L = 2\\sqrt{R^2 - h^2} = 2\\sqrt{8^2 - 4^2} = 2\\sqrt{64 - 16} = 2\\sqrt{48} = 2(4\\sqrt{3}) = 8\\sqrt{3} \\approx 13.86\\text{ mét}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 22:
        # BÀI 22: BA ĐƯỜNG CONIC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Phương trình chính tắc của elip $(E)$ có dạng",
                         "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$)",
                         "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a > 0, b > 0$)",
                         "$y^2 = 2px$ ($p > 0$)",
                         "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = -1$",
                         "A", "Phương trình chính tắc của elip."),
                make_mcq(2, "NB", "Trong elip $(E): \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, mối liên hệ giữa ba đại lượng $a, b, c$ là",
                         "$a^2 = b^2 + c^2$",
                         "$c^2 = a^2 + b^2$",
                         "$b^2 = a^2 + c^2$",
                         "$a = b + c$",
                         "A", "Mối liên hệ trong elip: $a^2 = b^2 + c^2 \\Leftrightarrow c^2 = a^2 - b^2$."),
                make_mcq(3, "NB", "Phương trình chính tắc của hypebol $(H)$ có dạng",
                         "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a > 0, b > 0$)",
                         "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$",
                         "$y^2 = 2px$",
                         "$x^2 = 2py$",
                         "A", "Phương trình chính tắc của hypebol."),
                make_mcq(4, "NB", "Phương trình chính tắc của parabol $(P)$ có dạng",
                         "$y^2 = 2px$ ($p > 0$)",
                         "$x^2 = 2py$",
                         "$y = ax^2 + bx + c$",
                         "$y^2 = -2px$",
                         "A", "Phương trình chính tắc parabol trong chương Conic."),
                make_mcq(5, "TH", "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Độ dài trục lớn của elip bằng",
                         "10", "5", "6", "8",
                         "A", "$a^2 = 25 \\Rightarrow a = 5$, độ dài trục lớn $2a = 10$."),
                make_mcq(6, "TH", "Cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{7} = 1$. Tiêu cự của elip bằng",
                         "6", "3", "8", "4",
                         "A", "$c^2 = a^2 - b^2 = 16 - 7 = 9 \\Rightarrow c = 3$, tiêu cự $2c = 6$."),
                make_mcq(7, "TH", "Toạ độ các tiêu điểm của elip $(E): \\frac{x^2}{25} + \\frac{y^2}{16} = 1$ là",
                         "$F_1(-3; 0)$ và $F_2(3; 0)$",
                         "$F_1(0; -3)$ và $F_2(0; 3)$",
                         "$F_1(-5; 0)$ và $F_2(5; 0)$",
                         "$F_1(-4; 0)$ và $F_2(4; 0)$",
                         "A", "$c = \\sqrt{25 - 16} = 3$, tiêu điểm nằm trên trục hoành: $(\\pm 3; 0)$."),
                make_mcq(8, "TH", "Cho hypebol $(H): \\frac{x^2}{9} - \\frac{y^2}{16} = 1$. Tiêu cự của hypebol bằng",
                         "10", "5", "6", "8",
                         "A", "$c^2 = a^2 + b^2 = 9 + 16 = 25 \\Rightarrow c = 5$, tiêu cự $2c = 10$."),
                make_mcq(9, "VD", "Phương trình chính tắc của elip có độ dài trục lớn bằng 8 và trục nhỏ bằng 6 là",
                         "$\\frac{x^2}{16} + \\frac{y^2}{9} = 1$",
                         "$\\frac{x^2}{64} + \\frac{y^2}{36} = 1$",
                         "$\\frac{x^2}{8} + \\frac{y^2}{6} = 1$",
                         "$\\frac{x^2}{9} + \\frac{y^2}{16} = 1$",
                         "A", "$2a = 8 \\Rightarrow a = 4 \\Rightarrow a^2 = 16$; $2b = 6 \\Rightarrow b = 3 \\Rightarrow b^2 = 9$."),
                make_mcq(10, "VD", "Cho parabol $(P): y^2 = 8x$. Tiêu điểm $F$ của parabol có toạ độ là",
                         "$F(2; 0)$", "$F(4; 0)$", "$F(0; 2)$", "$F(-2; 0)$",
                         "A", "$2p = 8 \\Rightarrow p = 4$, tiêu điểm $F(p/2; 0) = (2; 0)$."),
                make_mcq(11, "VDC", "Một đường hầm xuyên núi có mặt cắt ngang là nửa hình elip cao $4\\text{ m}$ và rộng $10\\text{ m}$. Phương trình chính tắc của elip chứa nửa trên này là",
                         "$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$",
                         "$\\frac{x^2}{100} + \\frac{y^2}{16} = 1$",
                         "$\\frac{x^2}{16} + \\frac{y^2}{25} = 1$",
                         "$\\frac{x^2}{5} + \\frac{y^2}{4} = 1$",
                         "A", "Chiều rộng $2a = 10 \\Rightarrow a = 5 \\Rightarrow a^2 = 25$. Chiều cao $b = 4 \\Rightarrow b^2 = 16$."),
                make_mcq(12, "VDC", "Gương phản xạ của đèn pha ô tô có mặt cắt là một parabol có phương trình $y^2 = 12x$ (đơn vị: cm). Để chùm sáng phát ra là chùm tia song song, bóng đèn phải đặt tại tiêu điểm của parabol cách đỉnh bao nhiêu cm?",
                         "$3\\text{ cm}$", "$6\\text{ cm}$", "$12\\text{ cm}$", "$1.5\\text{ cm}$",
                         "A", "$2p = 12 \\Rightarrow p = 6$. Vị trí tiêu điểm cách đỉnh một khoảng $p/2 = 6/2 = 3\\text{ cm}$.")
            ]
            tfs = [
                make_tf(1, "Cho elip $(E): \\frac{x^2}{100} + \\frac{y^2}{64} = 1$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Độ dài trục lớn của elip bằng $20$.", True, "$a^2 = 100 \\Rightarrow a = 10 \\Rightarrow 2a = 20$."),
                    ("b", "Độ dài trục nhỏ của elip bằng $8$.", False, "$b^2 = 64 \\Rightarrow b = 8 \\Rightarrow$ trục nhỏ là $2b = 16$, không phải 8."),
                    ("c", "Tiêu cự của elip bằng $12$.", True, "$c = \\sqrt{100 - 64} = \\sqrt{36} = 6 \\Rightarrow 2c = 12$."),
                    ("d", "Điểm $M(10; 0)$ là một đỉnh của elip.", True, "$x = 10, y = 0$ thoả mãn phương trình.")
                ]),
                make_tf(2, "Cho parabol $(P): y^2 = 16x$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tham số tiêu của parabol là $p = 8$.", True, "$2p = 16 \\Rightarrow p = 8$."),
                    ("b", "Toạ độ tiêu điểm của parabol là $F(4; 0)$.", True, "$F(p/2; 0) = (4; 0)$."),
                    ("c", "Phương trình đường chuẩn của parabol là $x = 4$.", False, "Đường chuẩn là $x = -p/2 = -4$, không phải 4."),
                    ("d", "Điểm $M(1; 4)$ thuộc parabol $(P)$.", True, "$4^2 = 16(1) = 16$, thoả mãn.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho elip $(E): \\frac{x^2}{36} + \\frac{y^2}{20} = 1$. Tính tiêu cự của elip.",
                        "8", "$c^2 = 36 - 20 = 16 \\Rightarrow c = 4 \\Rightarrow 2c = 8$."),
                make_sa(2, "TH", "Cho hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Tính độ dài trục thực của hypebol.",
                        "8", "$a^2 = 16 \\Rightarrow a = 4 \\Rightarrow 2a = 8$."),
                make_sa(3, "VD", "Cho parabol $(P): y^2 = 20x$. Tính khoảng cách từ tiêu điểm $F$ đến đỉnh $O$ của parabol.",
                        "5", "$2p = 20 \\Rightarrow p = 10 \\Rightarrow OF = p/2 = 5$."),
                make_sa(4, "VD", "Một elip có tiêu cự bằng 6 và độ dài trục lớn bằng 10. Tìm độ dài trục nhỏ của elip.",
                        "8", "$c = 3, a = 5 \\Rightarrow b = \\sqrt{25 - 9} = 4 \\Rightarrow 2b = 8$."),
                make_sa(5, "VDC", "Trái Đất quay quanh Mặt Trời theo quỹ đạo elip với Mặt Trời nằm ở một tiêu điểm. Khoảng cách gần nhất từ Trái Đất đến Mặt Trời là $147$ triệu km và xa nhất là $152$ triệu km. Tính độ dài bán trục lớn $a$ của quỹ đạo (triệu km).",
                        "149.5", "$a - c = 147, a + c = 152 \\Rightarrow 2a = 299 \\Rightarrow a = 149.5$ triệu km."),
                make_sa(6, "VDC", "Một chiếc chảo thu sóng vệ tinh parabol có đường kính miệng chảo là $120\\text{ cm}$ và chiều sâu ở tâm là $30\\text{ cm}$. Bộ thu tín hiệu được đặt tại tiêu điểm của chảo. Khoảng cách từ đỉnh chảo đến bộ thu tín hiệu bằng bao nhiêu cm?",
                        "30", "Gắn hệ toạ độ $y^2 = 2px$. Miệng chảo có điểm $(30; 60)$. $60^2 = 2p(30) \\Rightarrow 3600 = 60p \\Rightarrow p = 60$. Tiêu điểm cách đỉnh: $p/2 = 30\\text{ cm}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa và phương trình chính tắc ba đường conic",
                           "Nêu định nghĩa và phương trình chính tắc của ba đường conic: Elip, Hypebol, Parabol.",
                           "1. Elip: Tập hợp các điểm $M$ sao cho $M F_1 + M F_2 = 2a$ (với $2a > 2c = F_1 F_2$). Phương trình chính tắc: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$, với $b^2 = a^2 - c^2$).\\n2. Hypebol: Tập hợp các điểm $M$ sao cho $|M F_1 - M F_2| = 2a$ (với $0 < 2a < 2c = F_1 F_2$). Phương trình chính tắc: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a > 0, b > 0$, với $b^2 = c^2 - a^2$).\\n3. Parabol: Tập hợp các điểm $M$ cách đều tiêu điểm $F$ và đường chuẩn $\\Delta$: $d(M, F) = d(M, \\Delta)$. Phương trình chính tắc: $y^2 = 2px$ ($p > 0$ là tham số tiêu, $F(p/2; 0)$, $\\Delta: x = -p/2$)."),
                make_essay(2, "TH", 0.5, "Xác định các yếu tố hình học của Elip",
                           "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$.\\na) Xác định độ dài trục lớn, trục nhỏ và tiêu cự của elip.\\nb) Tìm toạ độ các đỉnh và toạ độ các tiêu điểm của elip.",
                           "Từ phương trình $(E)$ ta có: $a^2 = 25 \\Rightarrow a = 5$; $b^2 = 9 \\Rightarrow b = 3$.\\nTa có $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$.\\na) Các kích thước:\\n- Độ dài trục lớn: $2a = 2 \\times 5 = 10$.\\n- Độ dài trục nhỏ: $2b = 2 \\times 3 = 6$.\\n- Tiêu cự: $2c = 2 \\times 4 = 8$.\\nb) Toạ độ các điểm đặc biệt:\\n- Bốn đỉnh của elip: $A_1(-5; 0), A_2(5; 0), B_1(0; -3), B_2(0; 3)$.\\n- Hai tiêu điểm: $F_1(-4; 0)$ và $F_2(4; 0)$."),
                make_essay(3, "VD", 0.5, "Lập phương trình chính tắc của đường conic",
                           "Lập phương trình chính tắc của:\\na) Elip $(E)$ có tiêu cự bằng 8 và đi qua điểm $M(0; 3)$.\\nb) Parabol $(P)$ biết tiêu điểm của parabol là $F(3; 0)$.",
                           "a) Phương trình chính tắc elip có dạng $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$).\\n- Tiêu cự $2c = 8 \\Rightarrow c = 4$.\\n- Elip đi qua điểm $M(0; 3)$ thuộc trục tung, suy ra $b = 3 \\Rightarrow b^2 = 9$.\\n- Ta có mối liên hệ: $a^2 = b^2 + c^2 = 9 + 4^2 = 9 + 16 = 25$.\\nVậy phương trình chính tắc của elip là: $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.\\nb) Parabol có tiêu điểm $F(3; 0)$ nằm trên trục hoành dương.\\nTheo công thức toạ độ tiêu điểm: $F\\left(\\frac{p}{2}; 0\\right) \\Rightarrow \\frac{p}{2} = 3 \\Rightarrow p = 6$.\\nPhương trình chính tắc của parabol có dạng $y^2 = 2px$.\\nThay $p = 6$ ta được: $y^2 = 2(6)x = 12x$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng tính chất quang học của gương Elip trong tán sỏi thận",
                           "Trong y học hiện đại, máy tán sỏi thận ngoài cơ thể sử dụng buồng phản xạ có dạng một nửa khối bầu dục elip (mặt cắt là nửa hình elip). Nguồn phát sóng xung kích được đặt tại tiêu điểm $F_1$, sóng phát ra va chạm vào thành kim loại phản xạ hội tụ toàn bộ năng lượng chính xác vào tiêu điểm thứ hai $F_2$ - nơi đặt viên sỏi thận của bệnh nhân để nghiền nát sỏi mà không làm tổn thương các mô mềm xung quanh. Biết elip có độ dài trục lớn là $16\\text{ cm}$ và độ dài trục nhỏ là $12\\text{ cm}$.\\na) Lập phương trình chính tắc của elip mô phỏng buồng tán sỏi.\\nb) Tính khoảng cách từ nguồn phát sóng xung kích $F_1$ đến viên sỏi thận $F_2$.",
                           "a) Phương trình chính tắc của elip có dạng: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$).\\n- Trục lớn: $2a = 16\\text{ cm} \\Rightarrow a = 8\\text{ cm} \\Rightarrow a^2 = 64$.\\n- Trục nhỏ: $2b = 12\\text{ cm} \\Rightarrow b = 6\\text{ cm} \\Rightarrow b^2 = 36$.\\nPhương trình chính tắc của elip là:\\n$\\frac{x^2}{64} + \\frac{y^2}{36} = 1$.\\nb) Khoảng cách từ nguồn phát sóng $F_1$ đến viên sỏi $F_2$ chính là tiêu cự $2c$ của elip:\\nTa có: $c^2 = a^2 - b^2 = 64 - 36 = 28 \\Rightarrow c = \\sqrt{28} = 2\\sqrt{7}\\text{ cm}$.\\nKhoảng cách cần tìm:\\n$F_1 F_2 = 2c = 2 \\times 2\\sqrt{7} = 4\\sqrt{7} \\approx 10.58\\text{ cm}$.\\nVậy bác sĩ cần căn chỉnh sao cho khoảng cách giữa nguồn phát và vị trí sỏi thận đúng bằng $10.58\\text{ cm}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Trong elip $(E): \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, độ dài trục nhỏ bằng",
                         "$2b$", "$b$", "$2a$", "$2c$",
                         "A", "Độ dài trục nhỏ là $2b$."),
                make_mcq(2, "NB", "Trong hypebol $(H): \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, mối liên hệ giữa $a, b, c$ là",
                         "$c^2 = a^2 + b^2$",
                         "$a^2 = b^2 + c^2$",
                         "$b^2 = a^2 + c^2$",
                         "$c = a + b$",
                         "A", "Trong hypebol: $c^2 = a^2 + b^2$."),
                make_mcq(3, "NB", "Phương trình đường chuẩn của parabol $y^2 = 2px$ ($p > 0$) là",
                         "$x = -\\frac{p}{2}$",
                         "$x = \\frac{p}{2}$",
                         "$y = -\\frac{p}{2}$",
                         "$y = \\frac{p}{2}$",
                         "A", "Phương trình đường chuẩn parabol: $x = -p/2$."),
                make_mcq(4, "NB", "Tâm sai $e$ của elip luôn thoả mãn",
                         "$0 < e < 1$", "$e = 1$", "$e > 1$", "$e = 0$",
                         "A", "Tâm sai của elip $e = c/a \\in (0; 1)$."),
                make_mcq(5, "TH", "Cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{9} = 1$. Tiêu cự của elip bằng",
                         "$2\\sqrt{7}$", "$\sqrt{7}$", "5", "10",
                         "A", "$c = \\sqrt{16 - 9} = \\sqrt{7} \\Rightarrow 2c = 2\\sqrt{7}$."),
                make_mcq(6, "TH", "Cho parabol $(P): y^2 = 4x$. Tham số tiêu $p$ bằng",
                         "2", "4", "1", "8",
                         "A", "$2p = 4 \\Rightarrow p = 2$."),
                make_mcq(7, "TH", "Cho hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Độ dài trục ảo của hypebol bằng",
                         "6", "3", "8", "4",
                         "A", "$b^2 = 9 \\Rightarrow b = 3 \\Rightarrow$ trục ảo $2b = 6$."),
                make_mcq(8, "TH", "Điểm nào sau đây thuộc parabol $(P): y^2 = 8x$?",
                         "$M(2; 4)$", "$N(1; 2)$", "$P(4; 2)$", "$Q(2; -2)$",
                         "A", "$y^2 = 4^2 = 16 = 8(2)$, điểm $M(2; 4)$ thuộc parabol."),
                make_mcq(9, "VD", "Phương trình chính tắc của hypebol có độ dài trục thực bằng 6 và tiêu cự bằng 10 là",
                         "$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$",
                         "$\\frac{x^2}{36} - \\frac{y^2}{100} = 1$",
                         "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$",
                         "$\\frac{x^2}{9} + \\frac{y^2}{16} = 1$",
                         "A", "$2a = 6 \\Rightarrow a = 3 \\Rightarrow a^2 = 9$. $2c = 10 \\Rightarrow c = 5 \\Rightarrow b^2 = 25 - 9 = 16$."),
                make_mcq(10, "VD", "Parabol đi qua điểm $A(2; 4)$ có phương trình chính tắc là",
                         "$y^2 = 8x$", "$y^2 = 4x$", "$y^2 = 2x$", "$y^2 = 16x$",
                         "A", "$4^2 = 2p(2) \\Leftrightarrow 16 = 4p \\Rightarrow 2p = 8 \\Rightarrow y^2 = 8x$."),
                make_mcq(11, "VDC", "Một mái vòm hình elip có chiều rộng ở chân vòm là $12\\text{ m}$ và chiều cao đỉnh vòm là $3\\text{ m}$. Chiều cao của mái vòm tại vị trí cách tâm vòm $4\\text{ m}$ (đơn vị: mét, làm tròn 2 chữ số thập phân) là",
                         "$2.24\\text{ m}$", "$2.50\\text{ m}$", "$1.85\\text{ m}$", "$2.00\\text{ m}$",
                         "A", "$a = 6, b = 3$. Parabol/Elip $\\frac{x^2}{36} + \\frac{y^2}{9} = 1$. Tại $x = 4$: $\\frac{16}{36} + \\frac{y^2}{9} = 1 \\Rightarrow \\frac{y^2}{9} = \\frac{20}{36} = \\frac{5}{9} \\Rightarrow y^2 = 5 \\Rightarrow y = \\sqrt{5} \\approx 2.24\\text{ m}$."),
                make_mcq(12, "VDC", "Kính thiên văn phản xạ sử dụng một gương parabol có phương trình $y^2 = 40x$ (đơn vị: cm). Cảm biến ánh sáng đặt tại tiêu điểm của gương parabol. Khoảng cách từ đỉnh gương đến cảm biến bằng",
                         "$10\\text{ cm}$", "$20\\text{ cm}$", "$5\\text{ cm}$", "$40\\text{ cm}$",
                         "A", "$2p = 40 \\Rightarrow p = 20$. Tiêu điểm cách đỉnh $p/2 = 20/2 = 10\\text{ cm}$.")
            ]
            tfs = [
                make_tf(1, "Cho hypebol $(H): \\frac{x^2}{25} - \\frac{y^2}{144} = 1$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Độ dài trục thực của hypebol bằng $10$.", True, "$a^2 = 25 \\Rightarrow a = 5 \\Rightarrow 2a = 10$."),
                    ("b", "Độ dài trục ảo của hypebol bằng $24$.", True, "$b^2 = 144 \\Rightarrow b = 12 \\Rightarrow 2b = 24$."),
                    ("c", "Tiêu cự của hypebol bằng $26$.", True, "$c = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\Rightarrow 2c = 26$."),
                    ("d", "Điểm $M(5; 0)$ là một tiêu điểm của hypebol.", False, "$M(5; 0)$ là một đỉnh của hypebol, không phải tiêu điểm (tiêu điểm là $(13; 0)$).")
                ]),
                make_tf(2, "Cho parabol $(P): y^2 = 12x$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tham số tiêu của parabol là $p = 6$.", True, "$2p = 12 \\Rightarrow p = 6$."),
                    ("b", "Toạ độ tiêu điểm là $F(3; 0)$.", True, "$F(p/2; 0) = (3; 0)$."),
                    ("c", "Đường chuẩn có phương trình $x = -3$.", True, "$x = -p/2 = -3$."),
                    ("d", "Khoảng cách từ tiêu điểm $F$ đến đường chuẩn bằng 3.", False, "Khoảng cách từ tiêu điểm đến đường chuẩn chính là tham số tiêu $p = 6$, không phải 3.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho elip $(E): \\frac{x^2}{64} + \\frac{y^2}{39} = 1$. Tính tiêu cự của elip.",
                        "10", "$c^2 = 64 - 39 = 25 \\Rightarrow c = 5 \\Rightarrow 2c = 10$."),
                make_sa(2, "TH", "Cho parabol $(P): y^2 = 24x$. Tìm toạ độ hoành độ của tiêu điểm $F$.",
                        "6", "$2p = 24 \\Rightarrow p = 12 \\Rightarrow x_F = p/2 = 6$."),
                make_sa(3, "VD", "Cho hypebol $(H): \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ có $a = 6, b = 8$. Tính khoảng cách giữa hai tiêu điểm.",
                        "20", "$c = \\sqrt{36 + 64} = 10 \\Rightarrow 2c = 20$."),
                make_sa(4, "VD", "Một elip có hai tiêu điểm $F_1(-4; 0), F_2(4; 0)$ và đi qua điểm $B(0; 3)$. Tính độ dài trục lớn của elip.",
                        "10", "$c = 4, b = 3 \\Rightarrow a = \\sqrt{16 + 9} = 5 \\Rightarrow 2a = 10$."),
                make_sa(5, "VDC", "Một đường đua xe đạp hình elip có chiều dài trục lớn $2a = 120\\text{ m}$ và trục nhỏ $2b = 80\\text{ m}$. Một người đứng tại một tiêu điểm của đường đua. Khoảng cách từ người đó đến tâm của đường đua bằng bao nhiêu mét (làm tròn số thập phân 1 chữ số)?",
                        "44.7", "$a = 60, b = 40 \\Rightarrow c = \\sqrt{3600 - 1600} = \\sqrt{2000} \\approx 44.72\\text{ m}$."),
                make_sa(6, "VDC", "Một chiếc đèn pin có chóa phản xạ hình parabol với bóng đèn đặt tại tiêu điểm cách đỉnh chóa $2\\text{ cm}$. Viết phương trình chính tắc của parabol dưới dạng $y^2 = 2px$. Tìm giá trị của $2p$.",
                        "8", "$p/2 = 2 \\Rightarrow p = 4 \\Rightarrow 2p = 8$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Tính chất hình học của ba đường conic",
                           "So sánh hình dạng và tính chất đối xứng của ba đường conic: Elip, Hypebol và Parabol trong mặt phẳng toạ độ $Oxy$.",
                           "1. Elip $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$: Là đường cong khép kín trơn nhẵn, có hai trục đối xứng là hai trục toạ độ $Ox, Oy$ và tâm đối xứng là gốc toạ độ $O$. Nằm trọn trong hình chữ nhật cơ sở giới hạn bởi $x = \\pm a, y = \\pm b$.\\n2. Hypebol $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$: Là đường cong mở gồm hai nhánh tách rời không khép kín, có hai trục đối xứng là $Ox, Oy$, tâm đối xứng là $O$, và có hai đường tiệm cận xiên $y = \\pm \\frac{b}{a} x$.\\n3. Parabol $y^2 = 2px$: Là đường cong mở gồm một nhánh duy nhất, chỉ có một trục đối xứng là trục hoành $Ox$, đỉnh tại gốc toạ độ $O(0; 0)$ và không có tâm đối xứng."),
                make_essay(2, "TH", 0.5, "Xác định các yếu tố của Parabol và Hypebol",
                           "Cho parabol $(P): y^2 = 12x$ và hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$.\\na) Xác định tham số tiêu, toạ độ tiêu điểm và phương trình đường chuẩn của $(P)$.\\nb) Xác định tiêu cự và toạ độ các đỉnh của $(H)$.",
                           "a) Parabol $(P): y^2 = 12x$:\\n- Ta có $2p = 12 \\Rightarrow p = 6$ (tham số tiêu).\\n- Tiêu điểm: $F\\left(\\frac{p}{2}; 0\\right) = (3; 0)$.\\n- Phương trình đường chuẩn: $x = -\\frac{p}{2} \\Leftrightarrow x = -3$.\\nb) Hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$:\\n- Ta có $a^2 = 16 \\Rightarrow a = 4$; $b^2 = 9 \\Rightarrow b = 3$.\\n- Tiêu điểm: $c = \\sqrt{a^2 + b^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$.\\n- Tiêu cự: $2c = 2 \\times 5 = 10$.\\n- Toạ độ hai đỉnh nằm trên trục thực: $A_1(-4; 0)$ và $A_2(4; 0)$."),
                make_essay(3, "VD", 0.5, "Lập phương trình conic từ điều kiện tiêu điểm và điểm thuộc đường",
                           "Lập phương trình chính tắc của:\\na) Hypebol $(H)$ đi qua điểm $M(5; 0)$ và có một tiêu điểm là $F(13; 0)$.\\nb) Elip $(E)$ có tiêu cự bằng $2\\sqrt{5}$ và đi qua điểm $N(0; 2)$.",
                           "a) Phương trình chính tắc hypebol có dạng: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a, b > 0$).\\n- Đi qua điểm $M(5; 0)$ trên trục hoành, suy ra đỉnh $a = 5 \\Rightarrow a^2 = 25$.\\n- Tiêu điểm $F(13; 0) \\Rightarrow c = 13$.\\n- Ta có mối liên hệ: $b^2 = c^2 - a^2 = 13^2 - 5^2 = 169 - 25 = 144$.\\nPhương trình chính tắc của hypebol là: $\\frac{x^2}{25} - \\frac{y^2}{144} = 1$.\\nb) Phương trình chính tắc elip có dạng: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$).\\n- Tiêu cự $2c = 2\\sqrt{5} \\Rightarrow c = \\sqrt{5} \\Rightarrow c^2 = 5$.\\n- Đi qua điểm $N(0; 2)$ trên trục tung, suy ra $b = 2 \\Rightarrow b^2 = 4$.\\n- Mối liên hệ: $a^2 = b^2 + c^2 = 4 + 5 = 9$.\\nPhương trình chính tắc của elip là: $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế thiết kế ăng-ten chảo parabol vệ tinh",
                           "Một đài truyền hình vệ tinh cần chế tạo một ăng-ten parabol thu phát sóng viễn thông. Miệng chảo có đường kính $2.4\\text{ m}$ và khoảng cách từ mép miệng chảo đến mặt phẳng đáy chảo (chiều sâu của chảo) là $0.6\\text{ m}$.\\na) Gắn hệ trục toạ độ $Oxy$ với gốc $O$ tại đỉnh chảo và trục đối xứng trùng với trục hoành $Ox$. Lập phương trình chính tắc của parabol mô phỏng mặt cắt của chảo.\\nb) Cần đặt cục thu tín hiệu sóng (LNB) tại vị trí tiêu điểm của chảo cách đỉnh bao nhiêu mét để nhận được tín hiệu sóng hội tụ mạnh nhất?",
                           "a) Chọn hệ toạ độ $Oxy$ sao cho đỉnh của chảo trùng với gốc $O(0; 0)$ và trục đối xứng trùng với trục hoành $Ox$. Khi đó phương trình chính tắc của parabol có dạng: $y^2 = 2px$ ($p > 0$).\\nTheo đề bài:\\n- Đường kính miệng chảo là $2.4\\text{ m}$, nên bán kính miệng chảo là $1.2\\text{ m}$.\\n- Chiều sâu đáy chảo là $0.6\\text{ m}$.\\nDo đó điểm ở mép miệng chảo có toạ độ là $M(0.6; 1.2)$.\\nThay toạ độ $M$ vào phương trình parabol:\\n$1.2^2 = 2p \\times 0.6 \\Leftrightarrow 1.44 = 1.2p \\Rightarrow p = \\frac{1.44}{1.2} = 1.2\\text{ m}$.\\nSuy ra $2p = 2.4$. Vậy phương trình chính tắc của parabol là: $y^2 = 2.4x$.\\nb) Theo tính chất quang học của parabol, các tia sóng truyền tới song song với trục đối xứng sau khi phản xạ tại bề mặt chảo sẽ cùng hội tụ tại tiêu điểm $F$.\\nToạ độ tiêu điểm của parabol là:\\n$F\\left(\\frac{p}{2}; 0\\right) = \\left(\\frac{1.2}{2}; 0\\right) = (0.6; 0)$.\\nVậy khoảng cách từ đỉnh chảo đến cục thu tín hiệu LNB là:\\n$d = \\frac{p}{2} = 0.6\\text{ m} = 60\\text{ cm}$.")
            ]
            return mcqs, tfs, sas, essays

    return None
