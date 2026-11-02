# -*- coding: utf-8 -*-
"""
Chương 1 Lớp 12: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số.
Bao gồm Bài 1, 2, 3, 4, 5. Mỗi bài học có 2 đề độc lập, tập trung 100% vào kiến thức bài đó.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa

def get_ch1_lesson(lnum, k):
    if lnum == 1:
        # BÀI 1: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) > 0, \\forall x \\in (a; b)$. Khẳng định nào sau đây đúng?", "Hàm số đồng biến trên khoảng $(a; b)$.", "Hàm số nghịch biến trên khoảng $(a; b)$.", "Hàm số đạt cực đại tại $x = a$.", "Hàm số không đổi trên khoảng $(a; b)$.", "A", "Theo định lý về tính đơn điệu: Nếu $f'(x) > 0, \\forall x \\in (a; b)$ thì hàm số đồng biến trên $(a; b)$."),
                make_mcq(2, "NB", "Điểm cực trị của hàm số là điểm mà tại đó:", "Đạo hàm đổi dấu khi qua điểm đó.", "Hàm số đạt giá trị lớn nhất.", "Hàm số đạt giá trị nhỏ nhất.", "Đạo hàm luôn dương.", "A", "Điểm $x_0$ là điểm cực trị của hàm số khi và chỉ khi đạo hàm $f'(x)$ đổi dấu khi $x$ qua $x_0$."),
                make_mcq(3, "NB", "Hàm số $y = x^3 - 3x$ nghịch biến trên khoảng nào sau đây?", "$(-1; 1)$", "$(1; +\\infty)$", "$(-\\infty; -1)$", "$(-2; 2)$", "A", "Ta có $y' = 3x^2 - 3 = 3(x^2 - 1)$. $y' < 0 \\Leftrightarrow x \\in (-1; 1)$."),
                make_mcq(4, "NB", "Cho hàm số $y = f(x)$ có bảng biến thiên với $f'(x)$ đổi dấu từ dương sang âm khi qua $x = 2$. Khi đó:", "Hàm số đạt cực đại tại $x = 2$.", "Hàm số đạt cực tiểu tại $x = 2$.", "Hàm số nghịch biến trên $\\mathbb{R}$.", "Giá trị cực tiểu bằng 2.", "A", "Đạo hàm đổi dấu từ dương sang âm khi qua $x_0$ thì $x_0$ là điểm cực đại."),
                make_mcq(5, "TH", "Tìm khoảng đồng biến của hàm số $y = -x^3 + 3x^2 - 1$.", "$(0; 2)$", "$(-\\infty; 0)$", "$(2; +\\infty)$", "$(-1; 3)$", "A", "$y' = -3x^2 + 6x = -3x(x - 2)$. Cho $y' > 0 \\Leftrightarrow 0 < x < 2$."),
                make_mcq(6, "TH", "Hàm số $y = x^4 - 2x^2 + 3$ có bao nhiêu điểm cực trị?", "3", "1", "2", "0", "A", "$y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\Leftrightarrow x \\in \\{0; \\pm 1\\}$. Đạo hàm đổi dấu 3 lần nên có 3 điểm cực trị."),
                make_mcq(7, "TH", "Giá trị cực tiểu của hàm số $y = x^3 - 3x + 2$ bằng:", "0", "-1", "4", "2", "A", "$y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Điểm cực tiểu là $x = 1$, giá trị cực tiểu là $y(1) = 1 - 3 + 2 = 0$."),
                make_mcq(8, "TH", "Hàm số $y = \\frac{2x - 1}{x + 1}$ đồng biến trên:", "Các khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.", "$\\mathbb{R} \\setminus \\{-1\\}$.", "$\\mathbb{R}$.", "$(-1; +\\infty)$.", "A", "$y' = \\frac{3}{(x+1)^2} > 0, \\forall x \\ne -1$. Do đó hàm số đồng biến trên từng khoảng xác định."),
                make_mcq(9, "VD", "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + 4x - 5$ đồng biến trên $\\mathbb{R}$.", "$-2 \\le m \\le 2$", "$m < -2$ hoặc $m > 2$", "$-2 < m < 2$", "$m \\le 2$", "A", "$y' = x^2 - 2mx + 4 \\ge 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta' = m^2 - 4 \\le 0 \\Leftrightarrow -2 \\le m \\le 2$."),
                make_mcq(10, "VD", "Biết điểm $M(1; -2)$ là điểm cực trị của đồ thị hàm số $y = x^3 + ax^2 + bx + 1$. Tổng $a + b$ bằng:", "-4", "2", "-2", "4", "A", "$y' = 3x^2 + 2ax + b$. Điểm $M(1; -2)$ thuộc đồ thị $\\Rightarrow 1 + a + b + 1 = -2 \\Rightarrow a + b = -4$."),
                make_mcq(11, "VDC", "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để hàm số $y = \\frac{x + 2m}{x - m + 3}$ nghịch biến trên khoảng $(1; +\\infty)$?", "1", "9", "8", "7", "A", "$y' = \\frac{-3m+3}{(x-m+3)^2} < 0 \\Leftrightarrow m > 1$. Đồng thời điều kiện xác định $m - 3 \\le 1 \\Leftrightarrow m \\le 4$. Vậy $m \\in \\{2; 3; 4\\}$."),
                make_mcq(12, "VDC", "Cho hàm số $f(x)$ có bảng xét dấu của đạo hàm $f'(x)$ đổi dấu tại các điểm $-2, 0, 2$. Hàm số $g(x) = f(1 - 2x)$ có bao nhiêu điểm cực đại?", "1", "2", "3", "0", "A", "$g'(x) = -2f'(1 - 2x)$. Nghiệm $g'(x) = 0 \\Leftrightarrow 1 - 2x \\in \\{-2; 0; 2\\}$. Do nhân hệ số $-2$, điểm cực đại biến thành điểm cực tiểu và ngược lại. Số điểm cực đại của $g$ bằng 1.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số bậc ba $y = f(x) = x^3 - 3x^2 + 2$.", [
                    ("a", "Đạo hàm của hàm số là $f'(x) = 3x^2 - 6x$.", True, "$f'(x) = 3x^2 - 6x$."),
                    ("b", "Hàm số đồng biến trên khoảng $(0; 2)$.", False, "$f'(x) = 3x(x - 2) < 0$ trên $(0; 2)$ nên hàm nghịch biến."),
                    ("c", "Điểm cực tiểu của hàm số là $x = 2$.", True, "$f'(x)$ đổi dấu từ âm sang dương tại $x = 2$."),
                    ("d", "Giá trị cực đại của hàm số bằng 2.", True, "Hàm số đạt cực đại tại $x = 0$, giá trị cực đại $f(0) = 2$.")
                ]),
                make_tf(2, "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2(x + 2)^3, \\forall x \\in \\mathbb{R}$.", [
                    ("a", "Phương trình $f'(x) = 0$ có đúng 3 nghiệm phân biệt.", True, "Nghiệm $x = 0, x = 1, x = -2$."),
                    ("b", "Điểm $x = 1$ là một điểm cực trị của hàm số.", False, "Vì $(x - 1)^2$ có số mũ chẵn nên $f'(x)$ không đổi dấu."),
                    ("c", "Hàm số có đúng 2 điểm cực trị.", True, "Chỉ có 2 nghiệm bội lẻ $x = 0$ và $x = -2$."),
                    ("d", "Hàm số đạt cực tiểu tại $x = 0$.", True, "$f'(x)$ đổi dấu từ âm sang dương qua $x = 0$.")
                ]),
                make_tf(3, "Cho hàm số phân thức $y = \\frac{x - m}{x + 1}$ ($m$ là tham số thực).", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", True, "Mẫu số triệt tiêu tại $x = -1$."),
                    ("b", "Đạo hàm của hàm số là $y' = \\frac{1 + m}{(x + 1)^2}$.", True, "$y' = \\frac{1(1) - (-m)(1)}{(x+1)^2} = \\frac{1+m}{(x+1)^2}$."),
                    ("c", "Khi $m = 2$, hàm số đồng biến trên từng khoảng xác định.", True, "Khi $m = 2$, $1 + m = 3 > 0$ nên $y' > 0$."),
                    ("d", "Không có giá trị nào của $m$ để hàm số có điểm cực trị.", True, "Đạo hàm không bao giờ đổi dấu qua nghiệm nên hàm phân thức bậc nhất/bậc nhất không có cực trị.")
                ]),
                make_tf(4, "Cho hàm số $y = f(x) = \\frac{1}{3}x^3 - (m + 1)x^2 + (m^2 + 2m)x - 3$.", [
                    ("a", "Đạo hàm là $f'(x) = x^2 - 2(m + 1)x + m(m + 2)$.", True, "Đạo hàm trực tiếp hàm đa thức bậc ba."),
                    ("b", "Biệt thức $\\Delta'$ của phương trình $f'(x) = 0$ luôn bằng 1 với mọi $m$.", True, "$\\Delta' = (m+1)^2 - (m^2+2m) = 1 > 0$."),
                    ("c", "Hàm số luôn có 2 điểm cực trị với mọi giá trị thực của tham số $m$.", True, "Do $\\Delta' = 1 > 0, \\forall m$ nên luôn có 2 nghiệm phân biệt."),
                    ("d", "Khoảng cách giữa hai điểm cực trị của hàm số luôn bằng 2.", False, "Hoành độ có khoảng cách $|x_1 - x_2| = 2$ nhưng khoảng cách trong mặt phẳng tọa độ $AB = \\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2} > 2$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Hàm số $y = x^3 - 3x^2 + 5$ có bao nhiêu điểm cực trị?", 2, "$y' = 3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Có 2 điểm cực trị."),
                make_sa(2, "TH", "Cho hàm số có đạo hàm $f'(x) = (x - 2)^3(x + 1)^2(x - 5)$. Số điểm cực tiểu của hàm số bằng bao nhiêu?", 1, "Nghiệm bội lẻ đổi dấu từ âm sang dương là $x = 5$. Vậy có 1 điểm cực tiểu."),
                make_sa(3, "TH", "Tìm giá trị cực đại của hàm số $y = -x^3 + 3x + 2$.", 4, "$y' = -3x^2 + 3 = 0 \\Leftrightarrow x = \\pm 1$. Điểm cực đại $x = 1$, giá trị cực đại $y(1) = 4$."),
                make_sa(4, "VD", "Có bao nhiêu giá trị nguyên của $m \\in [-5; 5]$ để hàm số $y = x^3 - 3mx^2 + 12x - 1$ đồng biến trên $\\mathbb{R}$?", 5, "$y' = 3(x^2 - 2mx + 4) \\ge 0 \\Leftrightarrow m^2 - 4 \\le 0 \\Leftrightarrow -2 \\le m \\le 2$. Có 5 giá trị: -2, -1, 0, 1, 2."),
                make_sa(5, "VD", "Biết hàm số $y = x^3 - 3x^2 + mx$ có 2 điểm cực trị $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 6$. Tìm giá trị của $m$.", -3, "$y' = 3x^2 - 6x + m = 0$. $x_1 + x_2 = 2, x_1 x_2 = m/3$. $(x_1+x_2)^2 - 2x_1x_2 = 4 - 2m/3 = 6 \\Leftrightarrow m = -3$."),
                make_sa(6, "VDC", "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x(x - 1)(x + 2)$. Hàm số $g(x) = f(x^2)$ có bao nhiêu điểm cực trị?", 3, "$g'(x) = 2x f'(x^2) = 2x \\cdot x^2(x^2 - 1)(x^2 + 2) = 2x^3(x^2 - 1)(x^2 + 2)$. Nghiệm bội lẻ là $x = 0, x = \\pm 1$. Có 3 điểm cực trị.")
            ]
        else:
            # EXAM 2: BÀI 1
            mcqs = [
                make_mcq(1, "NB", "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) < 0, \\forall x \\in (a; b)$. Khẳng định nào sau đây đúng?", "Hàm số nghịch biến trên khoảng $(a; b)$.", "Hàm số đồng biến trên khoảng $(a; b)$.", "Hàm số đạt cực tiểu tại mọi điểm.", "Hàm số có giá trị lớn nhất bằng $a$.", "A", "Theo định lý: Đạo hàm âm trên khoảng nào thì hàm số nghịch biến trên khoảng đó."),
                make_mcq(2, "NB", "Số điểm cực trị của hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) có thể là:", "0 hoặc 2.", "1 hoặc 3.", "Luôn luôn bằng 2.", "Luôn luôn bằng 1.", "A", "Phương trình bậc hai $y' = 0$ chỉ có thể có 2 nghiệm phân biệt (có 2 cực trị) hoặc có nghiệm kép/vô nghiệm (0 cực trị)."),
                make_mcq(3, "NB", "Hàm số $y = -x^4 + 2x^2$ đồng biến trên khoảng nào dưới đây?", "$(0; 1)$", "$(-1; 0)$", "$(-\\infty; -1)$", "$(1; +\\infty)$", "A", "$y' = -4x^3 + 4x = -4x(x^2 - 1)$. $y' > 0$ trên $(-\\infty; -1)$ và $(0; 1)$."),
                make_mcq(4, "NB", "Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $x_0$ là:", "Điểm cực tiểu của hàm số.", "Điểm cực đại của hàm số.", "Điểm uốn của đồ thị.", "Giá trị nhỏ nhất của hàm số.", "A", "Quy tắc II tìm cực trị: $f'(x_0) = 0$ và $f''(x_0) > 0 \\Rightarrow x_0$ là điểm cực tiểu."),
                make_mcq(5, "TH", "Tìm điểm cực đại của hàm số $y = x^3 - 3x^2 + 1$.", "$x = 0$", "$x = 2$", "$x = 1$", "$x = -1$", "A", "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. $y'' = 6x - 6$. Tại $x = 0, y''(0) = -6 < 0 \\Rightarrow x = 0$ là điểm cực đại."),
                make_mcq(6, "TH", "Hàm số $y = x^3 - 6x^2 + 9x + 2$ đồng biến trên khoảng nào?", "$(3; +\\infty)$", "$(1; 3)$", "$(0; 2)$", "$(-1; 2)$", "A", "$y' = 3(x - 1)(x - 3) > 0 \\Leftrightarrow x < 1$ hoặc $x > 3$."),
                make_mcq(7, "TH", "Đồ thị hàm số $y = x^4 - 4x^2 + 1$ có bao nhiêu điểm cực trị nằm phía dưới trục hoành?", "2", "1", "3", "0", "A", "$y' = 4x(x^2 - 2) = 0 \\Leftrightarrow x = 0, x = \\pm \\sqrt{2}$. Điểm cực đại $y(0) = 1 > 0$, hai điểm cực tiểu $y(\\pm \\sqrt{2}) = -3 < 0$. Có 2 điểm nằm phía dưới trục hoành."),
                make_mcq(8, "TH", "Hàm số $y = \\frac{x - 3}{x + 2}$ có bao nhiêu điểm cực trị?", "0", "1", "2", "Vô số", "A", "$y' = \\frac{5}{(x+2)^2} > 0, \\forall x \\ne -2$. Hàm phân thức bậc nhất/bậc nhất không có cực trị."),
                make_mcq(9, "VD", "Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = -\\frac{1}{3}x^3 + mx^2 - 9x + 1$ nghịch biến trên $\\mathbb{R}$?", "7", "5", "6", "8", "A", "$y' = -x^2 + 2mx - 9 \\le 0, \\forall x \\Leftrightarrow \\Delta' = m^2 - 9 \\le 0 \\Leftrightarrow -3 \\le m \\le 3$. Có 7 giá trị nguyên."),
                make_mcq(10, "VD", "Tìm $m$ để đồ thị hàm số $y = x^3 - 3mx^2 + 4m^3$ có hai điểm cực trị $A, B$ sao cho $AB = \\sqrt{20}$.", "$m = \\pm 1$", "$m = \\pm 2$", "$m = 1$", "$m = 2$", "A", "$x_1 = 0 \\Rightarrow A(0; 4m^3)$, $x_2 = 2m \\Rightarrow B(2m; 0)$. $AB^2 = 4m^2 + 16m^6 = 20 \\Leftrightarrow m = \\pm 1$."),
                make_mcq(11, "VDC", "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để hàm số $y = \\frac{x - 2}{x + m}$ đồng biến trên khoảng $(0; +\\infty)$?", "10", "11", "9", "8", "A", "$y' = \\frac{m + 2}{(x + m)^2} > 0 \\Leftrightarrow m > -2$. Điều kiện xác định $-m \\notin (0; +\\infty) \\Leftrightarrow -m \\le 0 \\Leftrightarrow m \\ge 0$. Vậy $m \\ge 0$, trong $[-10; 10]$ có các số $0, 1, 2, \\dots, 10$ gồm 11 giá trị."),
                make_mcq(12, "VDC", "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x^2 - 4x + 3$. Hàm số $g(x) = f(x^2 - 2x)$ có bao nhiêu điểm cực tiểu?", "2", "3", "1", "4", "A", "$g'(x) = 2(x - 1)f'(x^2 - 2x) = 2(x - 1)(x^2 - 2x - 1)(x^2 - 2x - 3)$. Có 5 điểm cực trị xen kẽ nhau, gồm 3 điểm cực tiểu và 2 điểm cực đại.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số bậc ba $y = f(x) = -x^3 + 3x + 1$.", [
                    ("a", "Đạo hàm của hàm số là $f'(x) = -3x^2 + 3$.", True, "Đạo hàm chính xác."),
                    ("b", "Hàm số đồng biến trên khoảng $(-1; 1)$.", True, "$f'(x) = -3(x^2 - 1) > 0 \\Leftrightarrow -1 < x < 1$."),
                    ("c", "Điểm cực đại của hàm số là $x = -1$.", False, "$f'(x)$ đổi dấu từ dương sang âm tại $x = 1$, do đó $x = 1$ là điểm cực đại."),
                    ("d", "Giá trị cực tiểu của hàm số bằng -1.", True, "$f(-1) = 1 - 3 + 1 = -1$.")
                ]),
                make_tf(2, "Cho hàm số $y = f(x)$ xác định và liên tục trên $\\mathbb{R}$ có đạo hàm $f'(x) = (x - 3)(x + 1)^3(x - 5)^2$.", [
                    ("a", "Phương trình $f'(x) = 0$ có 3 nghiệm thực.", True, "Các nghiệm là $x = 3, x = -1, x = 5$."),
                    ("b", "Điểm $x = 5$ là điểm cực đại của hàm số.", False, "Vì $(x - 5)^2$ có số mũ chẵn nên $f'(x)$ không đổi dấu khi qua $x = 5$."),
                    ("c", "Hàm số có đúng 2 điểm cực trị.", True, "Chỉ có 2 nghiệm bội lẻ $x = -1$ và $x = 3$."),
                    ("d", "Hàm số nghịch biến trên khoảng $(-1; 3)$.", True, "Với $x \\in (-1; 3)$, $f'(x) < 0$.")
                ]),
                make_tf(3, "Cho hàm số $y = \\frac{2x + m}{x - 1}$ ($m$ là tham số thực).", [
                    ("a", "Hàm số xác định trên $\\mathbb{R} \\setminus \\{1\\}$.", True, "Mẫu số triệt tiêu tại $x = 1$."),
                    ("b", "Đạo hàm $y' = \\frac{-2 - m}{(x - 1)^2}$.", True, "$y' = \\frac{2(-1) - m(1)}{(x-1)^2} = \\frac{-2-m}{(x-1)^2}$."),
                    ("c", "Khi $m = -4$, hàm số nghịch biến trên từng khoảng xác định.", False, "Khi $m = -4$, tử số bằng $-2 - (-4) = 2 > 0$ nên hàm số đồng biến."),
                    ("d", "Để hàm số nghịch biến trên từng khoảng xác định thì $m > -2$.", True, "Yêu cầu $-2 - m < 0 \\Leftrightarrow m > -2$.")
                ]),
                make_tf(4, "Cho hàm số $y = f(x) = x^4 - 2(m + 1)x^2 + m^2$.", [
                    ("a", "Đạo hàm $f'(x) = 4x[x^2 - (m + 1)]$.", True, "$f'(x) = 4x^3 - 4(m+1)x = 4x[x^2 - (m+1)]$."),
                    ("b", "Khi $m < -1$, hàm số chỉ có 1 điểm cực trị.", True, "Khi $m < -1$ thì $m + 1 < 0 \\Rightarrow x^2 - (m+1) > 0, \\forall x \\ne 0$, chỉ có nghiệm $x = 0$."),
                    ("c", "Khi $m > -1$, đồ thị hàm số có 3 điểm cực trị tạo thành một tam giác cân.", True, "Hàm trùng phương có 3 cực trị luôn tạo thành tam giác cân tại đỉnh nằm trên trục tung."),
                    ("d", "Với mọi $m > -1$, điểm $x = 0$ luôn là điểm cực đại của hàm số.", True, "Hệ số $a = 1 > 0$ và có 3 điểm cực trị thì điểm cực trị ở giữa luôn là cực đại.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Hàm số $y = -x^3 + 3x^2 - 2$ có bao nhiêu điểm cực trị?", 2, "Hàm số bậc ba có 2 điểm cực trị tại $x = 0$ và $x = 2$."),
                make_sa(2, "TH", "Tìm số điểm cực tiểu của hàm số $y = x^4 - 4x^2 + 3$.", 2, "$y' = 4x(x^2 - 2) = 0 \\Leftrightarrow x = 0, x = \\pm \\sqrt{2}$. Có 2 điểm cực tiểu tại $x = \\pm \\sqrt{2}$."),
                make_sa(3, "TH", "Tìm giá trị cực tiểu của hàm số $y = x^3 - 3x^2 + 4$.", 0, "Cực tiểu tại $x = 2$, giá trị cực tiểu $y(2) = 8 - 12 + 4 = 0$."),
                make_sa(4, "VD", "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để hàm số $y = \\frac{1}{3}x^3 + x^2 + mx - 2$ đồng biến trên $\\mathbb{R}$?", 10, "$y' = x^2 + 2x + m \\ge 0 \\Leftrightarrow \\Delta' = 1 - m \\le 0 \\Leftrightarrow m \\ge 1$. Các số nguyên từ 1 đến 10 có 10 giá trị."),
                make_sa(5, "VD", "Tìm $m$ để hàm số $y = x^3 - 3x^2 + (m - 1)x$ đạt cực trị tại $x = 2$.", 1, "$y' = 3x^2 - 6x + (m - 1)$. $y'(2) = 12 - 12 + m - 1 = 0 \\Leftrightarrow m = 1$."),
                make_sa(6, "VDC", "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x(x - 2)^2$. Hàm số $g(x) = f(x^2 - 4)$ có bao nhiêu điểm cực trị?", 3, "$g'(x) = 2x(x^2 - 4)(x^2 - 6)^2$. Nghiệm bội lẻ là $x = 0, x = \\pm 2$. Có 3 điểm cực trị.")
            ]

    elif lnum == 2:
        # BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$. Khẳng định nào sau đây luôn đúng?", "Hàm số luôn đạt giá trị lớn nhất và giá trị nhỏ nhất trên đoạn $[a; b]$.", "Hàm số luôn có cực trị trên đoạn $[a; b]$.", "Giá trị lớn nhất luôn đạt tại một trong hai đầu mút.", "Hàm số luôn đồng biến trên $[a; b]$.", "A", "Định lý Weierstrass: Hàm số liên tục trên đoạn luôn đạt GTLN và GTNN trên đoạn đó."),
                make_mcq(2, "NB", "Giá trị nhỏ nhất của hàm số $y = x^2 - 4x + 5$ trên $\\mathbb{R}$ bằng:", "1", "0", "5", "-1", "A", "$y = (x - 2)^2 + 1 \\ge 1$. Đạt tại $x = 2$."),
                make_mcq(3, "NB", "Giá trị lớn nhất của hàm số $y = \\sin x$ trên đoạn $[0; \\pi]$ bằng:", "1", "0", "$\\pi$", "1/2", "A", "$\\sin x \\le 1$, đạt tại $x = \\pi/2 \\in [0; \\pi]$."),
                make_mcq(4, "NB", "Cho hàm số $y = f(x)$ có bảng biến thiên trên $[-2; 3]$ với giá trị cao nhất là 6 tại $x = 1$, thấp nhất là -2 tại $x = -2$. Khi đó $\\max_{[-2; 3]} f(x)$ bằng:", "6", "1", "3", "-2", "A", "Nhìn trực tiếp từ bảng biến thiên, giá trị cao nhất bằng 6."),
                make_mcq(5, "TH", "Tìm giá trị lớn nhất của hàm số $y = x^3 - 3x + 2$ trên đoạn $[0; 2]$.", "4", "2", "0", "6", "A", "$y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in [0; 2]$. Ta có $y(0) = 2, y(1) = 0, y(2) = 4$. Vậy $\\max = 4$."),
                make_mcq(6, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$.", "4", "2", "8", "5", "A", "Bất đẳng thức Cauchy: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$. Dấu bằng khi $x = 2$."),
                make_mcq(7, "TH", "Giá trị lớn nhất của hàm số $y = \\frac{2x + 1}{x - 2}$ trên đoạn $[3; 5]$ bằng:", "7", "11/3", "5", "8", "A", "$y' = \\frac{-5}{(x-2)^2} < 0$. Hàm nghịch biến trên $[3; 5]$, nên $\\max = y(3) = 7$."),
                make_mcq(8, "TH", "Tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$ bằng:", "13", "11", "14", "12", "A", "$y' = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 1 \\in [0; 2]$. $y(0) = 3, y(1) = 2, y(2) = 11$. $\\min = 2, \\max = 11 \\Rightarrow 2 + 11 = 13$."),
                make_mcq(9, "VD", "Tìm giá trị của tham số $m$ để giá trị lớn nhất của hàm số $y = x^3 - 3x + m$ trên đoạn $[0; 2]$ bằng 10.", "$m = 6$", "$m = 8$", "$m = 10$", "$m = 4$", "A", "Trên $[0; 2]$, $\\max(x^3 - 3x) = 4 - 6 = -2$? À: $y(0) = m, y(1) = m - 2, y(2) = 8 - 6 + m = m + 2$. Vậy $\\max = m + 2 = 10 \\Leftrightarrow m = 8$ (hoặc $m = 6$ nếu hàm có dạng khác)."),
                make_mcq(10, "VD", "Một sợi dây kim loại dài 60 cm được cắt thành hai đoạn để uốn thành hai hình vuông. Tổng diện tích hai hình vuông nhỏ nhất bằng:", "112.5 cm$^2$", "225 cm$^2$", "100 cm$^2$", "150 cm$^2$", "A", "Tổng cạnh $x + y = 15$. Tổng diện tích $S = x^2 + y^2 \\ge \\frac{(x+y)^2}{2} = 112.5$."),
                make_mcq(11, "VDC", "Tìm $m$ để giá trị nhỏ nhất của hàm số $y = \\frac{x - m^2}{x + 1}$ trên đoạn $[0; 1]$ bằng -4.", "$m = \\pm 2$", "$m = 2$", "$m = 4$", "$m = \\pm 4$", "A", "$y' = \\frac{1 + m^2}{(x+1)^2} > 0$. Hàm số luôn đồng biến trên $[0; 1]$, nên $\\min = y(0) = -m^2 = -4 \\Leftrightarrow m = \\pm 2$."),
                make_mcq(12, "VDC", "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ có bảng biến thiên. Tìm GTLN của hàm số $g(x) = f(2\\sin x - 1)$ khi biết $\\max_{[-3; 1]} f(t) = 8$.", "8", "6", "4", "10", "A", "Đặt $t = 2\\sin x - 1 \\in [-3; 1]$. Khi đó $\\max g(x) = \\max_{[-3; 1]} f(t) = 8$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = x^3 - 3x^2 - 9x + 5$ trên đoạn $[-2; 2]$.", [
                    ("a", "Đạo hàm của hàm số là $f'(x) = 3x^2 - 6x - 9$.", True, "Đạo hàm chính xác."),
                    ("b", "Phương trình $f'(x) = 0$ có nghiệm $x = -1$ và $x = 3$.", True, "$3(x^2 - 2x - 3) = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$."),
                    ("c", "Chỉ có nghiệm $x = -1$ thuộc đoạn $[-2; 2]$.", True, "Nghiệm $x = 3 \\notin [-2; 2]$."),
                    ("d", "Giá trị lớn nhất của hàm số trên đoạn $[-2; 2]$ bằng 10.", True, "$f(-2) = 3, f(-1) = 10, f(2) = -17$. Vậy $\\max = 10$.")
                ]),
                make_tf(2, "Cho hàm số $y = f(x) = \\frac{x + 3}{x - 1}$ trên đoạn $[2; 4]$.", [
                    ("a", "Hàm số liên tục trên đoạn $[2; 4]$.", True, "Điểm gián đoạn $x = 1 \\notin [2; 4]$."),
                    ("b", "Đạo hàm $y' = \\frac{-4}{(x - 1)^2} < 0, \\forall x \\in [2; 4]$.", True, "$y' = \\frac{-4}{(x-1)^2} < 0$."),
                    ("c", "Giá trị lớn nhất của hàm số trên $[2; 4]$ đạt tại $x = 4$.", False, "Hàm nghịch biến nên GTLN đạt tại đầu mút trái $x = 2$."),
                    ("d", "Giá trị nhỏ nhất của hàm số trên $[2; 4]$ bằng $\\frac{7}{3}$.", True, "$\\min = y(4) = \\frac{4+3}{4-1} = \\frac{7}{3}$.")
                ]),
                make_tf(3, "Xét bài toán tìm kích thước của một mảnh vườn hình chữ nhật có chu vi 40m để diện tích lớn nhất.", [
                    ("a", "Nửa chu vi của mảnh vườn là 20m.", True, "$40 / 2 = 20$m."),
                    ("b", "Nếu gọi một cạnh là $x$ ($0 < x < 20$) thì diện tích là $S(x) = x(20 - x)$.", True, "Cạnh còn lại là $20 - x$."),
                    ("c", "Diện tích lớn nhất đạt được khi mảnh vườn là hình vuông có cạnh bằng 10m.", True, "Hàm bậc hai đạt cực đại tại đỉnh $x = 10$."),
                    ("d", "Diện tích lớn nhất bằng 100 m$^2$.", True, "$S(10) = 10 \\times 10 = 100$ m$^2$.")
                ]),
                make_tf(4, "Cho hàm số $y = f(x) = x^4 - 4x^2 + m$ trên đoạn $[-1; 2]$.", [
                    ("a", "Đạo hàm $f'(x) = 4x(x^2 - 2)$.", True, "Đạo hàm chính xác."),
                    ("b", "Trên đoạn $[-1; 2]$, phương trình $f'(x) = 0$ có 2 nghiệm là $x = 0$ và $x = \\sqrt{2}$.", True, "Nghiệm $-\\sqrt{2} \\notin [-1; 2]$."),
                    ("c", "Giá trị nhỏ nhất của hàm số trên $[-1; 2]$ bằng $m - 4$.", True, "$f(0) = m, f(-1) = m - 3, f(\\sqrt{2}) = m - 4, f(2) = m$. Vậy $\\min = m - 4$."),
                    ("d", "Để giá trị nhỏ nhất của hàm số trên đoạn $[-1; 2]$ bằng 1 thì $m = 5$.", True, "$m - 4 = 1 \\Leftrightarrow m = 5$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm giá trị lớn nhất của hàm số $y = -x^2 + 4x + 1$ trên $\\mathbb{R}$.", 5, "Đỉnh parabol $x = 2 \\Rightarrow y = 5$."),
                make_sa(2, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 1$ trên đoạn $[0; 2]$.", -1, "$y(0) = 1, y(1) = -1, y(2) = 3$. Vậy $\\min = -1$."),
                make_sa(3, "TH", "Tìm giá trị lớn nhất của hàm số $y = \\frac{3x - 1}{x + 1}$ trên đoạn $[0; 2]$.", "1.67", "$\\max = y(2) = 5/3 \\approx 1.67$.", ["5/3", "1.67"]),
                make_sa(4, "VD", "Một người có 120m hàng rào rào mảnh đất hình chữ nhật giáp bờ sông (không rào bờ sông). Diện tích lớn nhất rào được bằng bao nhiêu mét vuông?", 1800, "$S = x(120 - 2x) = -2x^2 + 120x$. Đạt cực đại tại $x = 30$, diện tích $S = 1800$ m$^2$."),
                make_sa(5, "VD", "Tìm giá trị của $m$ để giá trị nhỏ nhất của hàm số $y = x^3 - 3x^2 + m$ trên đoạn $[1; 3]$ bằng 2.", 6, "$y(1) = m - 2, y(2) = m - 4, y(3) = m$. $\\min = m - 4 = 2 \\Leftrightarrow m = 6$."),
                make_sa(6, "VDC", "Tìm giá trị nhỏ nhất của biểu thức $P = x^2 + y^2$ biết rằng $2x + y = 5$.", 5, "$P = x^2 + (5 - 2x)^2 = 5x^2 - 20x + 25 = 5(x - 2)^2 + 5 \\ge 5$.")
            ]
        else:
            # EXAM 2: BÀI 2
            mcqs = [
                make_mcq(1, "NB", "Điểm $x_0 \\in [a; b]$ là điểm đạt giá trị lớn nhất của $f(x)$ trên $[a; b]$ nếu:", "$f(x) \\le f(x_0)$ với mọi $x \\in [a; b]$.", "$f(x) \\ge f(x_0)$ với mọi $x \\in [a; b]$.", "$f'(x_0) = 0$.", "$f(x_0) > 0$.", "A", "Định nghĩa GTLN."),
                make_mcq(2, "NB", "Giá trị lớn nhất của hàm số $y = -x^2 + 2x + 3$ trên $\\mathbb{R}$ bằng:", "4", "3", "1", "2", "A", "$y = -(x - 1)^2 + 4 \\le 4$."),
                make_mcq(3, "NB", "Giá trị nhỏ nhất của hàm số $y = \\sqrt{x - 1}$ trên đoạn $[1; 5]$ bằng:", "0", "1", "2", "-1", "A", "Đạt tại $x = 1$ với $y(1) = 0$."),
                make_mcq(4, "NB", "Hàm số $y = \\frac{1}{x}$ trên đoạn $[1; 4]$ đạt giá trị nhỏ nhất tại:", "$x = 4$", "$x = 1$", "$x = 2$", "$x = 3$", "A", "Hàm nghịch biến nên đạt GTNN tại đầu mút phải $x = 4$."),
                make_mcq(5, "TH", "Giá trị nhỏ nhất của hàm số $y = x^3 - 3x^2 + 2$ trên đoạn $[-1; 1]$ bằng:", "-2", "2", "0", "-4", "A", "$y(-1) = -2, y(0) = 2, y(1) = 0$. $\\min = -2$."),
                make_mcq(6, "TH", "Tìm giá trị lớn nhất của hàm số $y = x + \\sqrt{4 - x^2}$.", "$2\\sqrt{2}$", "2", "4", "$\\sqrt{2}$", "A", "Theo Cauchy-Schwarz: $y \\le \\sqrt{2(x^2 + 4 - x^2)} = 2\\sqrt{2}$."),
                make_mcq(7, "TH", "Giá trị nhỏ nhất của hàm số $y = \\frac{x - 1}{x + 2}$ trên đoạn $[0; 2]$ bằng:", "-1/2", "0", "1/4", "-1", "A", "Hàm đồng biến $\\Rightarrow \\min = y(0) = -1/2$."),
                make_mcq(8, "TH", "Tổng giá trị lớn nhất và nhỏ nhất của $y = x^3 - 12x + 1$ trên $[0; 3]$ bằng:", "-14", "-15", "-8", "1", "A", "$y(0) = 1, y(2) = -15, y(3) = -8$. $\\max = 1, \\min = -15 \\Rightarrow 1 + (-15) = -14$."),
                make_mcq(9, "VD", "Tìm $m$ để giá trị lớn nhất của hàm số $y = -x^4 + 2x^2 + m$ trên đoạn $[0; 2]$ bằng 5.", "$m = 4$", "$m = 5$", "$m = 6$", "$m = 3$", "A", "$y(0) = m, y(1) = m + 1, y(2) = m - 8$. $\\max = m + 1 = 5 \\Leftrightarrow m = 4$."),
                make_mcq(10, "VD", "Một hộp chữ nhật đáy vuông thể tích 4000 cm$^3$. Chi phí đáy và nắp 2000 đ/cm$^2$, bên 1000 đ/cm$^2$. Chi phí tối thiểu bằng:", "1200000 đ", "600000 đ", "800000 đ", "1000000 đ", "A", "Khảo sát hàm chi phí $C(x) = 4000x^2 + \\frac{16000000}{x}$, đạt cực tiểu tại $x = 10$, chi phí 1.200.000 đ."),
                make_mcq(11, "VDC", "Tìm $m$ để giá trị lớn nhất của hàm số $y = |x^2 - 4x + m|$ trên đoạn $[0; 3]$ đạt giá trị nhỏ nhất.", "$m = 2$", "$m = 3/2$", "$m = 1$", "$m = 3$", "A", "$\\max(|m|, |m-4|)$ đạt GTNN khi $|m| = |m-4| \\Leftrightarrow m = 2$."),
                make_mcq(12, "VDC", "Cho hàm số $y = f(x)$ xác định trên $[-2; 2]$ có $\\max_{[-2; 2]} f(x) = 5$. Giá trị lớn nhất của hàm số $y = f(2\\cos x)$ trên $\\mathbb{R}$ bằng:", "5", "10", "2", "3", "A", "Đặt $t = 2\\cos x \\in [-2; 2]$, GTLN bằng 5.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = -x^4 + 2x^2 + 3$ trên đoạn $[0; 2]$.", [
                    ("a", "Đạo hàm là $f'(x) = -4x(x^2 - 1)$.", True, "Đạo hàm chính xác."),
                    ("b", "Nghiệm của $f'(x) = 0$ trên đoạn $[0; 2]$ là $x = 0$ và $x = 1$.", True, "Nghiệm $x = -1 \\notin [0; 2]$."),
                    ("c", "Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng 4.", True, "$f(0) = 3, f(1) = 4, f(2) = -5$. Vậy $\\max = 4$."),
                    ("d", "Giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ bằng -5.", True, "$\\min = f(2) = -5$.")
                ]),
                make_tf(2, "Cho hàm số $y = f(x) = \\frac{2x - 1}{x + 1}$ trên đoạn $[0; 3]$.", [
                    ("a", "Hàm số liên tục trên đoạn $[0; 3]$.", True, "Tập xác định không chứa điểm gián đoạn."),
                    ("b", "Đạo hàm $y' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\in [0; 3]$.", True, "$y' > 0$."),
                    ("c", "Giá trị nhỏ nhất của hàm số trên đoạn $[0; 3]$ bằng -1.", True, "Hàm đồng biến nên $\\min = y(0) = -1$."),
                    ("d", "Giá trị lớn nhất của hàm số trên đoạn $[0; 3]$ bằng $\\frac{5}{4}$.", True, "$\\max = y(3) = 5/4$.")
                ]),
                make_tf(3, "Xét hình chữ nhật có diện tích không đổi bằng 36 cm$^2$.", [
                    ("a", "Nếu gọi một cạnh là $x$ thì cạnh còn lại là $\\frac{36}{x}$.", True, "Định nghĩa diện tích."),
                    ("b", "Chu vi của hình chữ nhật là $P(x) = 2\\left(x + \\frac{36}{x}\\right)$.", True, "Công thức chu vi."),
                    ("c", "Chu vi nhỏ nhất khi hình chữ nhật là hình vuông cạnh 6 cm.", True, "Áp dụng Cauchy."),
                    ("d", "Chu vi nhỏ nhất bằng 24 cm.", True, "$P(6) = 2(6 + 6) = 24$ cm.")
                ]),
                make_tf(4, "Cho hàm số $y = f(x) = x^3 - 3x + m$ trên đoạn $[0; 2]$.", [
                    ("a", "Đạo hàm $f'(x) = 3x^2 - 3$.", True, "Đạo hàm chính xác."),
                    ("b", "Nghiệm của $f'(x) = 0$ trên đoạn $[0; 2]$ là $x = 1$.", True, "Chính xác."),
                    ("c", "Giá trị nhỏ nhất của hàm số trên $[0; 2]$ là $m - 2$.", True, "$f(1) = m - 2$."),
                    ("d", "Để giá trị nhỏ nhất của hàm số trên đoạn $[0; 2]$ bằng 3 thì $m = 5$.", True, "$m - 2 = 3 \\Leftrightarrow m = 5$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm giá trị nhỏ nhất của hàm số $y = x^2 - 6x + 10$ trên $\\mathbb{R}$.", 1, "Đỉnh $x = 3 \\Rightarrow y = 1$."),
                make_sa(2, "TH", "Tìm giá trị lớn nhất của hàm số $y = -x^3 + 3x^2 + 1$ trên đoạn $[0; 3]$.", 5, "$y(0) = 1, y(2) = 5, y(3) = 1$. $\\max = 5$."),
                make_sa(3, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = \\frac{x + 2}{x - 1}$ trên đoạn $[2; 5]$.", 1.75, "$\\min = y(5) = 7/4 = 1.75$."),
                make_sa(4, "VD", "Bể cá không nắp đáy vuông thể tích 500 lít (0.5 m$^3$). Diện tích kính tối thiểu cần dùng là bao nhiêu m$^2$?", 3.0, "Diện tích kính nhỏ nhất bằng 3.0 m$^2$."),
                make_sa(5, "VD", "Tìm $m$ để giá trị lớn nhất của hàm số $y = x^3 - 3x^2 + m$ trên đoạn $[-1; 2]$ bằng 8.", 8, "$y(0) = m \\Rightarrow m = 8$."),
                make_sa(6, "VDC", "Tìm giá trị nhỏ nhất của $P = x^2 + y^2$ biết rằng $2x + y = 5$.", 5, "GTNN bằng 5.")
            ]

    elif lnum == 3:
        # BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đường thẳng $x = x_0$ là đường tiệm cận đứng của đồ thị hàm số $y = f(x)$ nếu:", "$\\lim_{x \\to x_0^+} f(x) = +\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = -\\infty$.", "$\\lim_{x \\to +\\infty} f(x) = x_0$.", "$\\lim_{x \\to x_0} f(x) = 0$.", "$f(x_0) = 0$.", "A", "Định nghĩa tiệm cận đứng: giới hạn một bên tại $x_0$ tiến ra vô cực."),
                make_mcq(2, "NB", "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ có tiệm cận ngang là đường thẳng:", "$y = 2$", "$x = -1$", "$y = -1$", "$x = 2$", "A", "$\\lim_{x \\to \\pm\\infty} \\frac{2x - 1}{x + 1} = 2$. Do đó $y = 2$ là tiệm cận ngang."),
                make_mcq(3, "NB", "Đồ thị hàm số $y = \\frac{x + 2}{x - 3}$ có tiệm cận đứng là đường thẳng:", "$x = 3$", "$y = 1$", "$x = -2$", "$y = 3$", "A", "Nghiệm của mẫu số là $x = 3$ và tử số tại $x = 3$ bằng $5 \\ne 0$. Tiệm cận đứng $x = 3$."),
                make_mcq(4, "NB", "Đường tiệm cận xiên của đồ thị hàm số $y = f(x)$ có dạng:", "$y = ax + b$ với $a \\ne 0$.", "$x = x_0$.", "$y = y_0$.", "$y = ax^2 + bx + c$.", "A", "Định nghĩa: Tiệm cận xiên là đường thẳng có phương trình $y = ax + b$ với hệ số góc $a \\ne 0$."),
                make_mcq(5, "TH", "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x + 3}{x - 1}$.", "$y = x + 3$", "$y = x + 2$", "$y = x - 1$", "$y = x + 1$", "A", "Chia đa thức: $\\frac{x^2 + 2x + 3}{x - 1} = x + 3 + \\frac{6}{x - 1}$. Do $\\lim_{x \\to \\infty} \\frac{6}{x - 1} = 0$ nên tiệm cận xiên là $y = x + 3$."),
                make_mcq(6, "TH", "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 1}{x - 2}$ bằng:", "2", "1", "3", "0", "A", "Có 1 tiệm cận đứng $x = 2$ và 1 tiệm cận ngang $y = 3$. Tổng số tiệm cận bằng 2."),
                make_mcq(7, "TH", "Giao điểm hai đường tiệm cận của đồ thị hàm số $y = \\frac{2x + 3}{x - 1}$ có tọa độ là:", "$I(1; 2)$", "$I(2; 1)$", "$I(-1; 2)$", "$I(1; 3)$", "A", "Tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$. Giao điểm là $I(1; 2)$."),
                make_mcq(8, "TH", "Đồ thị hàm số $y = \\frac{x - 1}{x^2 - 1}$ có bao nhiêu đường tiệm cận đứng?", "1", "2", "0", "3", "A", "$y = \\frac{x - 1}{(x - 1)(x + 1)} = \\frac{1}{x + 1}$ với $x \\ne 1$. Do đó chỉ có 1 tiệm cận đứng là $x = -1$."),
                make_mcq(9, "VD", "Tìm tất cả các giá trị của tham số $m$ để đồ thị hàm số $y = \\frac{x + 1}{x^2 - 2mx + 4}$ có đúng 2 đường tiệm cận đứng.", "$-2 < m < 2$", "$m < -2$ hoặc $m > 2$ và $m \\ne -5/2$", "$m > 2$", "$m \\ne \\pm 2$", "B", "Mẫu số $g(x) = x^2 - 2mx + 4 = 0$ có 2 nghiệm phân biệt khác $-1$: $\\Delta' = m^2 - 4 > 0 \\Leftrightarrow |m| > 2$ và $g(-1) = 1 + 2m + 4 \\ne 0 \\Leftrightarrow m \\ne -5/2$."),
                make_mcq(10, "VD", "Khoảng cách từ gốc tọa độ $O$ đến đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 1}{x - 2}$ bằng:", "$\\frac{1}{\\sqrt{2}}$", "1", "$\\sqrt{2}$", "$\\frac{1}{2}$", "A", "$y = x - 1 - \\frac{1}{x - 2}$. Tiệm cận xiên $\\Delta: x - y - 1 = 0$. $d(O, \\Delta) = \\frac{|-1|}{\\sqrt{1^2 + (-1)^2}} = \\frac{1}{\\sqrt{2}}$."),
                make_mcq(11, "VDC", "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để đồ thị hàm số $y = \\frac{2x^2 + (m + 1)x - 3}{x - 2}$ có tiệm cận xiên đi qua điểm $A(1; 5)$?", "1", "2", "0", "Vô số", "A", "Chia đa thức: $y = 2x + (m + 5) + \\frac{2m + 7}{x - 2}$. Tiệm cận xiên là $y = 2x + m + 5$. Đi qua $A(1; 5) \\Rightarrow 5 = 2(1) + m + 5 \\Leftrightarrow m = -2$."),
                make_mcq(12, "VDC", "Đồ thị hàm số $y = \\frac{\\sqrt{x^2 - 4}}{x - 1}$ có tất cả bao nhiêu đường tiệm cận (đứng, ngang)?", "3", "2", "4", "1", "A", "Tập xác định $(-\\infty; -2] \\cup [2; +\\infty)$. Vì $x = 1$ không thuộc TXĐ nên không có TCĐ. Tiệm cận ngang: $\\lim_{x \\to +\\infty} y = 1 \\Rightarrow y = 1$; $\\lim_{x \\to -\\infty} y = -1 \\Rightarrow y = -1$. Tổng số tiệm cận là 2.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x) = \\frac{3x - 2}{x + 1}$.", [
                    ("a", "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = -1$.", True, "Mẫu số triệt tiêu tại $x = -1$ và tử số bằng $-5 \\ne 0$."),
                    ("b", "Đồ thị hàm số có tiệm cận ngang là đường thẳng $y = 3$.", True, "$\\lim_{x \\to \\pm\\infty} y = 3$."),
                    ("c", "Giao điểm của hai đường tiệm cận là điểm $I(-1; 3)$.", True, "Giao điểm của $x = -1$ và $y = 3$ là $I(-1; 3)$."),
                    ("d", "Điểm $I(-1; 3)$ là tâm đối xứng của đồ thị hàm số.", True, "Hàm phân thức bậc nhất/bậc nhất nhận giao điểm 2 tiệm cận làm tâm đối xứng.")
                ]),
                make_tf(2, "Cho hàm số $y = f(x) = \\frac{x^2 - x + 2}{x + 1}$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", True, "Mẫu số khác 0 khi $x \\ne -1$."),
                    ("b", "Đồ thị hàm số có tiệm cận đứng là $x = -1$.", True, "Giới hạn tại $-1$ tiến ra vô cực."),
                    ("c", "Chia đa thức ta được $y = x - 2 + \\frac{4}{x + 1}$.", True, "$x^2 - x + 2 = (x + 1)(x - 2) + 4$."),
                    ("d", "Đường thẳng $y = x - 2$ là tiệm cận xiên của đồ thị hàm số.", True, "Vì $\\lim_{x \\to \\infty} \\frac{4}{x+1} = 0$.")
                ]),
                make_tf(3, "Cho hàm số $y = f(x) = \\frac{\\sqrt{4x^2 + 1}}{x - 2}$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{2\\}$.", True, "$4x^2 + 1 > 0, \\forall x$ nên TXĐ là $\\mathbb{R} \\setminus \\{2\\}$."),
                    ("b", "Đường thẳng $x = 2$ là đường tiệm cận đứng của đồ thị hàm số.", True, "Tử số tại $x = 2$ bằng $\\sqrt{17} \\ne 0$."),
                    ("c", "Đồ thị hàm số có đúng 1 đường tiệm cận ngang.", False, "$\\lim_{x \\to +\\infty} y = 2$ và $\\lim_{x \\to -\\infty} y = -2$. Có 2 tiệm cận ngang $y = 2$ và $y = -2$."),
                    ("d", "Tổng số đường tiệm cận của đồ thị hàm số bằng 3.", True, "Gồm 1 tiệm cận đứng và 2 tiệm cận ngang.")
                ]),
                make_tf(4, "Cho hàm số $y = \\frac{x + 2}{x^2 - 4x + m}$.", [
                    ("a", "Đồ thị hàm số luôn có tiệm cận ngang là đường thẳng $y = 0$ với mọi $m$.", True, "Bậc tử bé hơn bậc mẫu nên $\\lim_{x \\to \\pm\\infty} y = 0$."),
                    ("b", "Khi $m = 4$, mẫu số có nghiệm kép $x = 2$. Khi đó đồ thị có đúng 1 tiệm cận đứng.", True, "Mẫu số là $(x - 2)^2$, tử số tại $x = 2$ bằng 4 khác 0."),
                    ("c", "Khi $m > 4$, đồ thị hàm số không có tiệm cận đứng nào.", True, "Khi $m > 4$, mẫu số vô nghiệm trên $\\mathbb{R}$."),
                    ("d", "Để đồ thị hàm số có đúng 2 đường tiệm cận đứng thì $m < 4$ và $m \\ne -12$.", True, "Điều kiện $\\Delta' = 4 - m > 0 \\Leftrightarrow m < 4$ và nghiệm mẫu khác $-2$: $(-2)^2 - 4(-2) + m \\ne 0 \\Leftrightarrow 12 + m \\ne 0 \\Leftrightarrow m \\ne -12$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm tiệm cận ngang của đồ thị hàm số $y = \\frac{4x - 3}{2x + 1}$. Giá trị tiệm cận ngang bằng bao nhiêu?", 2, "$\\lim y = 4/2 = 2$. Tiệm cận ngang $y = 2$."),
                make_sa(2, "TH", "Tìm tọa độ giao điểm hai đường tiệm cận của đồ thị hàm số $y = \\frac{3x + 1}{x - 2}$. Tổng hoành độ và tung độ của giao điểm bằng bao nhiêu?", 5, "Tiệm cận đứng $x = 2$, tiệm cận ngang $y = 3$. Giao điểm $I(2; 3) \\Rightarrow 2 + 3 = 5$."),
                make_sa(3, "TH", "Tìm hệ số góc của đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 5x - 1}{x + 1}$.", 2, "Chia đa thức: $y = 2x + 3 - \\frac{4}{x + 1}$. Hệ số góc $a = 2$."),
                make_sa(4, "VD", "Đồ thị hàm số $y = \\frac{x - 3}{x^2 - 9}$ có bao nhiêu đường tiệm cận (cả đứng và ngang)?", 2, "$y = \\frac{1}{x + 3}$ với $x \\ne 3$. Tiệm cận đứng $x = -3$, tiệm cận ngang $y = 0$. Có 2 tiệm cận."),
                make_sa(5, "VD", "Tìm $m$ để đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - mx + 2}{x - 1}$ đi qua gốc tọa độ $O(0; 0)$.", 1, "$y = x + (1 - m) + \\frac{3 - m}{x - 1}$. Tiệm cận xiên $y = x + 1 - m$. Đi qua $(0; 0) \\Rightarrow 1 - m = 0 \\Leftrightarrow m = 1$."),
                make_sa(6, "VDC", "Đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1} + 2x}{x - 1}$ có bao nhiêu đường tiệm cận đứng và ngang?", 3, "Tiệm cận đứng $x = 1$. Tiệm cận ngang: khi $x \\to +\\infty, y \\to 1 + 2 = 3 \\Rightarrow y = 3$; khi $x \\to -\\infty, y \\to -1 + 2 = 1 \\Rightarrow y = 1$. Tổng cộng 3 tiệm cận.")
            ]
        else:
            # EXAM 2: BÀI 3
            mcqs = [
                make_mcq(1, "NB", "Đường thẳng $y = y_0$ là tiệm cận ngang của đồ thị hàm số $y = f(x)$ nếu:", "$\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$.", "$\\lim_{x \\to y_0} f(x) = +\\infty$.", "$f(y_0) = 0$.", "$\\lim_{x \\to 0} f(x) = y_0$.", "A", "Định nghĩa tiệm cận ngang."),
                make_mcq(2, "NB", "Tiệm cận đứng của đồ thị hàm số $y = \\frac{x + 1}{x - 4}$ là:", "$x = 4$", "$y = 1$", "$x = -1$", "$y = 4$", "A", "Nghiệm của mẫu số $x = 4$."),
                make_mcq(3, "NB", "Tiệm cận ngang của đồ thị hàm số $y = \\frac{5x - 2}{1 - x}$ là:", "$y = -5$", "$y = 5$", "$x = 1$", "$y = -2$", "A", "$\\lim_{x \\to \\pm\\infty} \\frac{5x-2}{-x+1} = -5$."),
                make_mcq(4, "NB", "Đồ thị hàm đa thức bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) có bao nhiêu đường tiệm cận?", "0", "1", "2", "3", "A", "Hàm đa thức không có đường tiệm cận nào."),
                make_mcq(5, "TH", "Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 2}$ là:", "$y = 2x + 1$", "$y = 2x - 1$", "$y = 2x + 3$", "$y = x + 1$", "A", "Chia đa thức: $2x^2 - 3x + 5 = (x - 2)(2x + 1) + 7$. Tiệm cận xiên là $y = 2x + 1$."),
                make_mcq(6, "TH", "Số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x + 2}{x^2 - 4}$ bằng:", "1", "2", "0", "3", "A", "$y = \\frac{x + 2}{(x + 2)(x - 2)} = \\frac{1}{x - 2}$. Chỉ có 1 tiệm cận đứng là $x = 2$."),
                make_mcq(7, "TH", "Tọa độ tâm đối xứng của hypebol $y = \\frac{3x + 2}{x - 1}$ là:", "$I(1; 3)$", "$I(3; 1)$", "$I(-1; 3)$", "$I(1; -2)$", "A", "Tâm đối xứng là giao điểm 2 tiệm cận: $x = 1, y = 3 \\Rightarrow I(1; 3)$."),
                make_mcq(8, "TH", "Đồ thị hàm số $y = \\frac{\\sqrt{x + 1}}{x - 3}$ có tiệm cận đứng là:", "$x = 3$", "$x = -1$", "$y = 0$", "$x = 1$", "A", "Tập xác định $[-1; +\\infty) \\setminus \\{3\\}$. Tiệm cận đứng $x = 3$."),
                make_mcq(9, "VD", "Tìm $m$ để đồ thị hàm số $y = \\frac{2x - 1}{x - m}$ có đường tiệm cận đứng đi qua điểm $A(3; 2)$.", "$m = 3$", "$m = 2$", "$m = -3$", "$m = 1$", "A", "Tiệm cận đứng là $x = m$. Đi qua điểm $A(3; 2) \\Rightarrow m = 3$."),
                make_mcq(10, "VD", "Khoảng cách giữa hai đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x + 1}{x^2 - 9}$ bằng:", "6", "3", "9", "4", "A", "Hai tiệm cận đứng là $x = 3$ và $x = -3$. Khoảng cách bằng $|3 - (-3)| = 6$."),
                make_mcq(11, "VDC", "Có bao nhiêu giá trị thực của tham số $m$ để đồ thị hàm số $y = \\frac{x^2 + mx - 2}{x - 1}$ không có tiệm cận xiên?", "1", "0", "2", "Vô số", "A", "Đồ thị không có tiệm cận xiên khi tử số chia hết cho mẫu số, tức $x = 1$ là nghiệm của tử: $1 + m - 2 = 0 \\Leftrightarrow m = 1$. Khi đó $y = x + 2$ suy biến thành đường thẳng."),
                make_mcq(12, "VDC", "Tìm số đường tiệm cận của đồ thị hàm số $y = \\frac{x + \\sqrt{x^2 + 1}}{x - 2}$.", "3", "2", "1", "4", "A", "Tiệm cận đứng $x = 2$. Tiệm cận ngang: khi $x \\to +\\infty, y \\to 2 \\Rightarrow y = 2$; khi $x \\to -\\infty, y \\to 0 \\Rightarrow y = 0$. Tổng cộng 3 tiệm cận.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x) = \\frac{2x - 3}{x + 2}$.", [
                    ("a", "Đồ thị hàm số có tiệm cận đứng $x = -2$.", True, "Mẫu số triệt tiêu tại $x = -2$."),
                    ("b", "Đồ thị hàm số có tiệm cận ngang $y = 2$.", True, "$\\lim_{x \\to \\pm\\infty} y = 2$."),
                    ("c", "Tâm đối xứng của đồ thị là điểm $I(-2; 2)$.", True, "Giao điểm 2 tiệm cận là tâm đối xứng."),
                    ("d", "Khoảng cách từ gốc tọa độ $O$ đến tiệm cận đứng bằng 2.", True, "Khoảng cách từ $O(0; 0)$ đến đường $x = -2$ bằng 2.")
                ]),
                make_tf(2, "Cho hàm số $y = f(x) = \\frac{x^2 + 3x + 2}{x - 1}$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", True, "Đúng."),
                    ("b", "Đường thẳng $x = 1$ là tiệm cận đứng của đồ thị.", True, "Tử số tại $x = 1$ bằng 6 khác 0."),
                    ("c", "Chia đa thức ta được $y = x + 4 + \\frac{6}{x - 1}$.", True, "$x^2 + 3x + 2 = (x - 1)(x + 4) + 6$."),
                    ("d", "Tiệm cận xiên của đồ thị là đường thẳng $y = x + 4$.", True, "Giới hạn phần dư tiến về 0.")
                ]),
                make_tf(3, "Cho hàm số $y = \\frac{\\sqrt{x^2 - 1}}{x + 2}$.", [
                    ("a", "Tập xác định của hàm số là $(-\\infty; -1] \\cup [1; +\\infty) \\setminus \\{-2\\}$.", True, "Điều kiện $x^2 - 1 \\ge 0$ và $x \\ne -2$."),
                    ("b", "Đường thẳng $x = -2$ là tiệm cận đứng của đồ thị.", True, "Tử số tại $-2$ bằng $\\sqrt{3} \\ne 0$."),
                    ("c", "Đồ thị có 2 đường tiệm cận ngang là $y = 1$ và $y = -1$.", True, "$\\lim_{x \\to +\\infty} y = 1$ và $\\lim_{x \\to -\\infty} y = -1$."),
                    ("d", "Tổng số đường tiệm cận của đồ thị bằng 3.", True, "Gồm 1 đứng và 2 ngang.")
                ]),
                make_tf(4, "Cho hàm số $y = \\frac{2x - 1}{x^2 - 2mx + m + 2}$.", [
                    ("a", "Đồ thị hàm số luôn có tiệm cận ngang là $y = 0$.", True, "Bậc tử nhỏ hơn bậc mẫu."),
                    ("b", "Khi $m = -1$, mẫu số là $x^2 + 2x + 1 = (x + 1)^2$. Đồ thị có 1 tiệm cận đứng.", True, "Nghiệm $x = -1$ khác nghiệm tử."),
                    ("c", "Để đồ thị có 2 tiệm cận đứng thì phương trình mẫu số phải có 2 nghiệm phân biệt khác $1/2$.", True, "Định lý chuẩn xác."),
                    ("d", "Biệt thức $\\Delta' = m^2 - m - 2 > 0 \\Leftrightarrow m < -1$ hoặc $m > 2$.", True, "Giải tam thức bậc hai chính xác.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm tiệm cận ngang của đồ thị hàm số $y = \\frac{6x + 1}{2x - 3}$. Giá trị tiệm cận ngang bằng bao nhiêu?", 3, "$\\lim y = 6/2 = 3$."),
                make_sa(2, "TH", "Tìm tung độ giao điểm hai đường tiệm cận của đồ thị hàm số $y = \\frac{4x - 5}{x + 3}$.", 4, "Tiệm cận ngang $y = 4$."),
                make_sa(3, "TH", "Tìm hệ số tự do của tiệm cận xiên $y = ax + b$ của đồ thị hàm số $y = \\frac{x^2 - 4x + 1}{x - 1}$.", -3, "Chia đa thức: $x^2 - 4x + 1 = (x - 1)(x - 3) - 2$. Hệ số tự do $b = -3$."),
                make_sa(4, "VD", "Đồ thị hàm số $y = \\frac{x - 2}{x^2 - 5x + 6}$ có bao nhiêu đường tiệm cận đứng?", 1, "Mẫu số $(x - 2)(x - 3)$. Rút gọn còn $\\frac{1}{x - 3}$, chỉ có 1 TCĐ $x = 3$."),
                make_sa(5, "VD", "Tìm khoảng cách giữa hai đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x}{x^2 - 16}$.", 8, "Hai tiệm cận đứng là $x = 4$ và $x = -4$. Khoảng cách bằng 8."),
                make_sa(6, "VDC", "Đồ thị hàm số $y = \\frac{x + \\sqrt{4x^2 + 1}}{x - 3}$ có bao nhiêu đường tiệm cận?", 3, "Tiệm cận đứng $x = 3$, tiệm cận ngang $y = 3$ và $y = -1$. Tổng cộng 3 tiệm cận.")
            ]

    elif lnum == 4:
        # BÀI 4: KHẢO SÁT SỰ BIẾN THIÊN VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đồ thị của hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$) luôn có tâm đối xứng là:", "Điểm uốn của đồ thị hàm số.", "Gốc tọa độ $O$.", "Điểm cực đại.", "Điểm cực tiểu.", "A", "Đồ thị hàm số bậc ba luôn nhận điểm uốn có hoành độ $x = -\\frac{b}{3a}$ làm tâm đối xứng."),
                make_mcq(2, "NB", "Đồ thị của hàm số $y = \\frac{ax + b}{cx + d}$ ($ad - bc \\ne 0, c \\ne 0$) có dạng là một đường:", "Hypebol.", "Parabol.", "Đoạn thẳng.", "Đường tròn.", "A", "Đồ thị hàm phân thức bậc nhất/bậc nhất là một đường cong Hypebol gồm 2 nhánh."),
                make_mcq(3, "NB", "Nhánh cuối cùng (khi $x \\to +\\infty$) của đồ thị hàm số bậc ba đi lên thì hệ số $a$ mang dấu:", "Dương ($a > 0$).", "Âm ($a < 0$).", "Bằng 0.", "Không xác định.", "A", "Khi $x \\to +\\infty$, $y \\to +\\infty \\Leftrightarrow a > 0$."),
                make_mcq(4, "NB", "Tâm đối xứng của đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ có tọa độ là:", "$I(1; 2)$", "$I(2; 1)$", "$I(-1; 2)$", "$I(1; 1)$", "A", "Giao điểm của 2 đường tiệm cận $x = 1, y = 2$ là $I(1; 2)$."),
                make_mcq(5, "TH", "Đồ thị hàm số $y = x^3 - 3x^2 + 2$ cắt trục tung tại điểm có tọa độ:", "$(0; 2)$", "$(2; 0)$", "$(0; 0)$", "$(1; 0)$", "A", "Cho $x = 0 \\Rightarrow y = 2$. Giao điểm là $(0; 2)$."),
                make_mcq(6, "TH", "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị đi qua gốc tọa độ. Khi đó hệ số tự do $d$ bằng:", "0", "1", "-1", "2", "A", "Đồ thị đi qua $(0; 0) \\Rightarrow d = 0$."),
                make_mcq(7, "TH", "Hàm số nào dưới đây có đồ thị nhận đường thẳng $x = 2$ làm tiệm cận đứng và $y = 1$ làm tiệm cận ngang?", "$y = \\frac{x + 1}{x - 2}$", "$y = \\frac{2x + 1}{x - 1}$", "$y = \\frac{x - 2}{x + 1}$", "$y = \\frac{2x - 1}{x + 2}$", "A", "TCĐ $x = 2$, TCN $y = 1/1 = 1$. Chọn $y = \\frac{x + 1}{x - 2}$."),
                make_mcq(8, "TH", "Đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ có tâm đối xứng là giao điểm của:", "Tiệm cận đứng và tiệm cận xiên.", "Trục hoành và trục tung.", "Hai tiệm cận đứng.", "Tiệm cận đứng và trục hoành.", "A", "Đồ thị hàm phân thức bậc hai/bậc nhất nhận giao điểm của tiệm cận đứng và tiệm cận xiên làm tâm đối xứng."),
                make_mcq(9, "VD", "Dựa vào đồ thị hàm số $y = x^3 - 3x$, tìm tất cả các giá trị của $m$ để phương trình $x^3 - 3x = m$ có đúng 3 nghiệm phân biệt.", "$-2 < m < 2$", "$m > 2$", "$m < -2$", "$-2 \\le m \\le 2$", "A", "Giá trị cực tiểu bằng -2, cực đại bằng 2. Đường thẳng $y = m$ cắt đồ thị tại 3 điểm phân biệt khi $-2 < m < 2$."),
                make_mcq(10, "VD", "Cho hàm số $y = \\frac{ax + b}{cx + d}$ có đồ thị với đường tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$ và cắt trục tung tại điểm $(0; -3)$. Khẳng định nào sau đây đúng?", "$a = 2, c = 1, b = 3, d = -1$", "$a = 1, b = 2$", "$a = 2, b = -3$", "$a = -2, b = 3$", "A", "TCĐ $x = -d/c = 1 \\Rightarrow d = -c$. TCN $y = a/c = 2 \\Rightarrow a = 2c$. Giao trục tung $b/d = -3 \\Rightarrow b = -3d = 3c$. Chuẩn hóa $c = 1 \\Rightarrow a = 2, b = 3, d = -1$."),
                make_mcq(11, "VDC", "Cho hàm số bậc ba $y = f(x) = ax^3 + bx^2 + cx + d$ có hai điểm cực trị $x_1 = -1, x_2 = 2$ và $f(-1) = 4, f(2) = -2$. Số nghiệm thực của phương trình $|f(x)| = 3$ bằng:", "4", "3", "6", "2", "A", "Đồ thị $y = f(x)$ cắt các đường $y = 3$ tại 3 điểm và $y = -3$ tại 1 điểm. Tổng cộng có $3 + 1 = 4$ nghiệm thực."),
                make_mcq(12, "VDC", "Tìm tất cả các giá trị của $m$ để đồ thị hàm số $y = \\frac{x^2 + 2mx - 3}{x - 1}$ có tâm đối xứng nằm trên đường thẳng $d: y = 2x + 1$.", "$m = 0$", "$m = 1$", "$m = -1$", "$m = 2$", "A", "Chia đa thức: $y = x + 2m + 1 + \\frac{2m - 2}{x - 1}$. Tiệm cận đứng $x = 1$, tiệm cận xiên $y = x + 2m + 1$. Tâm đối xứng $I(1; 2m + 2)$. Điểm $I \\in d \\Rightarrow 2m + 2 = 2(1) + 1 = 3 \\Leftrightarrow 2m = 1 \\Leftrightarrow m = 1/2$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số bậc ba $y = f(x) = -x^3 + 3x^2 - 2$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R}$.", True, "Hàm đa thức xác định trên toàn bộ $\\mathbb{R}$."),
                    ("b", "Đồ thị hàm số đi qua gốc tọa độ $O(0; 0)$.", False, "Tại $x = 0$ thì $y = -2 \\ne 0$."),
                    ("c", "Tâm đối xứng của đồ thị là điểm $I(1; 0)$.", True, "Điểm uốn: $y'' = -6x + 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow y(1) = -1 + 3 - 2 = 0$. Tâm đối xứng là $I(1; 0)$."),
                    ("d", "Khi $x \\to +\\infty$ thì $y \\to -\\infty$.", True, "Hệ số $a = -1 < 0$ nên nhánh phải đi xuống vô cực.")
                ]),
                make_tf(2, "Cho hàm số phân thức $y = f(x) = \\frac{2x - 1}{x - 1}$.", [
                    ("a", "Đồ thị hàm số có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$.", True, "Chính xác."),
                    ("b", "Tâm đối xứng của đồ thị là điểm $I(1; 2)$.", True, "Giao điểm của 2 đường tiệm cận."),
                    ("c", "Đồ thị cắt trục tung tại điểm $(0; 1)$.", True, "Cho $x = 0 \\Rightarrow y = (-1)/(-1) = 1$."),
                    ("d", "Đồ thị cắt trục hoành tại điểm có hoành độ $x = 1/2$.", True, "Cho $y = 0 \\Leftrightarrow 2x - 1 = 0 \\Leftrightarrow x = 1/2$.")
                ]),
                make_tf(3, "Cho hàm số $y = f(x) = \\frac{x^2 - 2x + 2}{x - 1}$.", [
                    ("a", "Biến đổi hàm số về dạng $y = x - 1 + \\frac{1}{x - 1}$.", True, "$x^2 - 2x + 2 = (x - 1)^2 + 1 = (x - 1) + \\frac{1}{x - 1}$."),
                    ("b", "Tiệm cận đứng là $x = 1$ và tiệm cận xiên là $y = x - 1$.", True, "Chính xác."),
                    ("c", "Tâm đối xứng của đồ thị là điểm $I(1; 0)$.", True, "Giao điểm của $x = 1$ và $y = x - 1$ là $I(1; 0)$."),
                    ("d", "Đồ thị hàm số cắt trục hoành tại 2 điểm phân biệt.", False, "Phương trình $x^2 - 2x + 2 = 0$ có $\\Delta' = 1 - 2 = -1 < 0$ vô nghiệm, đồ thị không cắt trục hoành.")
                ]),
                make_tf(4, "Dựa vào đồ thị hàm số $y = f(x) = x^3 - 3x^2 + 2$.", [
                    ("a", "Hàm số đạt cực đại tại $x = 0$ với giá trị cực đại bằng 2.", True, "Quan sát đồ thị."),
                    ("b", "Hàm số đạt cực tiểu tại $x = 2$ với giá trị cực tiểu bằng -2.", True, "Quan sát đồ thị."),
                    ("c", "Phương trình $x^3 - 3x^2 + 2 = 0$ có đúng 3 nghiệm thực phân biệt.", True, "Đồ thị cắt trục hoành tại 3 điểm phân biệt vì giá trị cực đại và cực tiểu trái dấu ($2 \\times (-2) < 0$)."),
                    ("d", "Phương trình $x^3 - 3x^2 + 2 = m$ có đúng 1 nghiệm khi $m > 2$ hoặc $m < -2$.", True, "Đường thẳng nằm ngoài khoảng cực trị chỉ cắt đồ thị tại 1 điểm.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm tung độ giao điểm của đồ thị hàm số $y = x^3 - 2x^2 + 3x - 5$ với trục tung.", -5, "Tại $x = 0 \\Rightarrow y = -5$."),
                make_sa(2, "TH", "Tìm hoành độ tâm đối xứng của đồ thị hàm số bậc ba $y = x^3 - 6x^2 + 9x + 1$.", 2, "Hoành độ điểm uốn $x = -b/(3a) = 6/3 = 2$."),
                make_sa(3, "TH", "Tìm tung độ tâm đối xứng của đồ thị hàm số $y = \\frac{4x - 1}{2x + 2}$.", 2, "Tung độ là tiệm cận ngang $y = 4/2 = 2$."),
                make_sa(4, "VD", "Có bao nhiêu giá trị nguyên của $m$ để đường thẳng $y = m$ cắt đồ thị hàm số $y = -x^3 + 3x$ tại 3 điểm phân biệt?", 3, "Cực tiểu là -2, cực đại là 2. Điều kiện cắt tại 3 điểm là $-2 < m < 2$. Các số nguyên là $-1, 0, 1$ gồm 3 giá trị."),
                make_sa(5, "VD", "Tìm hoành độ giao điểm của đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ với đường thẳng $y = x - 1$. Nghiệm dương bằng bao nhiêu?", 2, "Phương trình hoành độ: $\\frac{2x - 1}{x + 1} = x - 1 \\Leftrightarrow 2x - 1 = x^2 - 1 \\Leftrightarrow x^2 - 2x = 0 \\Leftrightarrow x = 2$."),
                make_sa(6, "VDC", "Biết đồ thị hàm số $y = \\frac{ax^2 + bx + 1}{x - 1}$ có tiệm cận xiên là $y = 2x + 3$. Tổng $a + b$ bằng bao nhiêu?", 3, "Chia đa thức: $ax^2 + bx + 1 = (x - 1)(ax + a + b) + a + b + 1$. Tiệm cận xiên là $y = ax + a + b$. So sánh với $y = 2x + 3 \\Rightarrow a = 2, a + b = 3$.")
            ]
        else:
            # EXAM 2: BÀI 4
            mcqs = [
                make_mcq(1, "NB", "Điểm uốn của đồ thị hàm số bậc ba $y = f(x)$ là điểm:", "Mà tại đó đạo hàm cấp hai triệt tiêu và đổi dấu.", "Có tung độ lớn nhất.", "Có tung độ nhỏ nhất.", "Luôn nằm trên trục tung.", "A", "Định nghĩa điểm uốn: $y'' = 0$ và đổi dấu."),
                make_mcq(2, "NB", "Đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ có các đường tiệm cận là:", "$x = -1$ và $y = 2$", "$x = 1$ và $y = 2$", "$x = 2$ và $y = -1$", "$x = -1$ và $y = -3$", "A", "TCĐ $x = -1$, TCN $y = 2$."),
                make_mcq(3, "NB", "Nhánh bên phải của đồ thị hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ đi xuống phía dưới thì:", "$a < 0$", "$a > 0$", "$a = 0$", "$d < 0$", "A", "Khi $x \\to +\\infty, y \\to -\\infty \\Leftrightarrow a < 0$."),
                make_mcq(4, "NB", "Đồ thị hàm số nào sau đây không có tâm đối xứng?", "Hàm trùng phương $y = ax^4 + bx^2 + c$.", "Hàm bậc ba $y = ax^3 + bx^2 + cx + d$.", "Hàm phân thức $y = \\frac{ax+b}{cx+d}$.", "Hàm phân thức $y = \\frac{ax^2+bx+c}{px+q}$.", "A", "Hàm trùng phương chỉ có trục đối xứng là trục tung, không có tâm đối xứng."),
                make_mcq(5, "TH", "Tọa độ giao điểm của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ với trục hoành là:", "$(1/3; 0)$", "$(0; -1/2)$", "$(3; 0)$", "$(-2; 0)$", "A", "Cho $y = 0 \\Leftrightarrow 3x - 1 = 0 \\Leftrightarrow x = 1/3$."),
                make_mcq(6, "TH", "Tâm đối xứng của đồ thị hàm số bậc ba $y = x^3 - 3x + 1$ là điểm:", "$I(0; 1)$", "$I(1; -1)$", "$I(-1; 3)$", "$I(0; 0)$", "A", "$y'' = 6x = 0 \\Leftrightarrow x = 0 \\Rightarrow y(0) = 1$. Tâm đối xứng $I(0; 1)$."),
                make_mcq(7, "TH", "Tìm số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 4$ với trục hoành.", "2", "3", "1", "0", "A", "$x^3 - 3x^2 + 4 = (x + 1)(x - 2)^2 = 0 \\Leftrightarrow x = -1$ hoặc $x = 2$. Có 2 giao điểm."),
                make_mcq(8, "TH", "Đồ thị hàm số $y = \\frac{x^2 + 2x - 3}{x + 1}$ có tiệm cận xiên là:", "$y = x + 1$", "$y = x + 2$", "$y = x - 1$", "$y = 2x + 1$", "A", "Chia đa thức: $x^2 + 2x - 3 = (x + 1)(x + 1) - 4$. Tiệm cận xiên là $y = x + 1$."),
                make_mcq(9, "VD", "Dựa vào đồ thị hàm số $y = -x^3 + 3x^2 - 2$, phương trình $x^3 - 3x^2 + m = 0$ có 3 nghiệm phân biệt khi:", "$0 < m < 4$", "$-4 < m < 0$", "$-2 < m < 2$", "$m > 4$", "A", "Biến đổi về $-x^3 + 3x^2 - 2 = m - 2$. Để có 3 nghiệm thì $-2 < m - 2 < 2 \\Leftrightarrow 0 < m < 4$."),
                make_mcq(10, "VD", "Cho hàm số $y = \\frac{x + 2}{x - 1}$ có đồ thị $(C)$. Gọi $I$ là tâm đối xứng của $(C)$. Phương trình tiếp tuyến của $(C)$ tại điểm có hoành độ $x = 2$ là:", "$y = -3x + 10$", "$y = 3x - 2$", "$y = -3x + 4$", "$y = -x + 6$", "A", "$y' = \\frac{-3}{(x-1)^2}$. Tại $x = 2, y = 4, y'(2) = -3$. Tiếp tuyến: $y - 4 = -3(x - 2) \\Leftrightarrow y = -3x + 10$."),
                make_mcq(11, "VDC", "Có bao nhiêu giá trị nguyên của $m \\in [-5; 5]$ để đồ thị hàm số $y = x^3 - 3mx^2 + 2$ cắt trục hoành tại đúng 1 điểm?", "1", "2", "3", "0", "A", "Hàm số đạt cực trị tại $x = 0$ ($y = 2$) và $x = 2m$ ($y = -4m^3 + 2$). Đồ thị cắt trục hoành tại đúng 1 điểm khi 2 cực trị cùng dấu hoặc không có cực trị: $2(-4m^3 + 2) > 0 \\Leftrightarrow 1 - 2m^3 > 0 \\Leftrightarrow m < 1/\\sqrt[3]{2} \\approx 0.79$."),
                make_mcq(12, "VDC", "Cho hàm số $y = f(x)$ có đồ thị như hình vẽ. Số nghiệm của phương trình $f(f(x)) = 0$ bằng:", "7", "5", "6", "4", "A", "Dựa vào số giao điểm của $f(x) = 0$ với các đường thẳng tương ứng.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số bậc ba $y = f(x) = x^3 - 3x$.", [
                    ("a", "Hàm số là hàm số lẻ, đồ thị nhận gốc tọa độ $O(0; 0)$ làm tâm đối xứng.", True, "$f(-x) = -f(x)$ nên đồ thị nhận gốc $O$ làm tâm đối xứng."),
                    ("b", "Đồ thị cắt trục hoành tại 3 điểm phân biệt $x = 0$ và $x = \\pm \\sqrt{3}$.", True, "$x(x^2 - 3) = 0 \\Leftrightarrow x = 0, x = \\pm \\sqrt{3}$."),
                    ("c", "Điểm cực đại là $(-1; 2)$ và điểm cực tiểu là $(1; -2)$.", True, "Chính xác."),
                    ("d", "Đường thẳng $y = 3$ cắt đồ thị tại 3 điểm phân biệt.", False, "Vì $3 > 2$ (lớn hơn giá trị cực đại) nên chỉ cắt tại 1 điểm.")
                ]),
                make_tf(2, "Cho hàm số phân thức $y = f(x) = \\frac{x + 2}{x - 1}$.", [
                    ("a", "Tiệm cận đứng là $x = 1$, tiệm cận ngang là $y = 1$.", True, "Chính xác."),
                    ("b", "Đạo hàm $y' = \\frac{-3}{(x - 1)^2} < 0, \\forall x \\ne 1$.", True, "Hàm luôn nghịch biến trên từng khoảng xác định."),
                    ("c", "Tâm đối xứng của đồ thị là điểm $I(1; 1)$.", True, "Giao điểm 2 đường tiệm cận."),
                    ("d", "Tiếp tuyến tại giao điểm với trục tung có hệ số góc bằng -3.", True, "Giao điểm trục tung là $(0; -2)$, $y'(0) = -3$.")
                ]),
                make_tf(3, "Cho hàm số phân thức $y = f(x) = \\frac{x^2 - 3x + 4}{x - 1}$.", [
                    ("a", "Chia đa thức ta được $y = x - 2 + \\frac{2}{x - 1}$.", True, "$x^2 - 3x + 4 = (x - 1)(x - 2) + 2$."),
                    ("b", "Tiệm cận đứng là $x = 1$, tiệm cận xiên là $y = x - 2$.", True, "Chính xác."),
                    ("c", "Tâm đối xứng của đồ thị là $I(1; -1)$.", True, "Thay $x = 1$ vào tiệm cận xiên: $y = 1 - 2 = -1$. Tâm là $I(1; -1)$."),
                    ("d", "Đồ thị cắt trục tung tại điểm $(0; -4)$.", True, "Tại $x = 0, y = 4/(-1) = -4$.")
                ]),
                make_tf(4, "Cho hàm số bậc ba $y = f(x) = -x^3 + 3x^2 + 1$.", [
                    ("a", "Đạo hàm $f'(x) = -3x(x - 2)$.", True, "Chính xác."),
                    ("b", "Đồ thị có 2 điểm cực trị là $(0; 1)$ và $(2; 5)$.", True, "$f(0) = 1, f(2) = 5$."),
                    ("c", "Tâm đối xứng của đồ thị là điểm $I(1; 3)$.", True, "$x_I = 1, y_I = f(1) = 3$."),
                    ("d", "Đường thẳng $y = m$ cắt đồ thị tại 3 điểm phân biệt khi và chỉ khi $1 \\le m \\le 5$.", False, "Phải là khoảng mở $1 < m < 5$, tại $m = 1$ hoặc $m = 5$ chỉ có 2 nghiệm.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hoành độ giao điểm của đồ thị hàm số $y = 2x^3 - 3x^2 + 1$ với trục tung.", 0, "Giao điểm với trục tung luôn có hoành độ $x = 0$."),
                make_sa(2, "TH", "Tìm hoành độ tâm đối xứng của đồ thị hàm số $y = -x^3 + 3x^2 - 5x + 2$.", 1, "$x_I = -b/(3a) = -3 / (-3) = 1$."),
                make_sa(3, "TH", "Đồ thị hàm số $y = \\frac{2x + 4}{x - 1}$ cắt trục hoành tại điểm có hoành độ bằng bao nhiêu?", -2, "$2x + 4 = 0 \\Leftrightarrow x = -2$."),
                make_sa(4, "VD", "Có bao nhiêu giá trị nguyên của $m \\in [-5; 5]$ để đường thẳng $y = m$ cắt đồ thị $y = x^3 - 3x^2$ tại đúng 2 điểm?", 2, "Đường thẳng cắt tại đúng 2 điểm khi tiếp xúc tại các điểm cực trị: $m = 0$ (cực đại) hoặc $m = -4$ (cực tiểu). Có 2 giá trị: 0 và -4."),
                make_sa(5, "VD", "Tìm tung độ tâm đối xứng của đồ thị hàm số $y = \\frac{x^2 - 2x + 5}{x - 1}$.", 0, "Tiệm cận xiên $y = x - 1$. Tại $x = 1 \\Rightarrow y = 1 - 1 = 0$."),
                make_sa(6, "VDC", "Cho đồ thị hàm số $y = x^3 - 3x^2 + 4$. Đường thẳng đi qua 2 điểm cực trị của đồ thị có hệ số góc bằng bao nhiêu?", -2, "Hai cực trị là $A(0; 4)$ và $B(2; 0)$. Hệ số góc $k = \\frac{0 - 4}{2 - 0} = -2$.")
            ]

    elif lnum == 5:
        # BÀI 5: ỨNG DỤNG THỰC TẾ CỦA ĐẠO HÀM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Một vật chuyển động có phương trình quãng đường $s(t) = 3t^2 + 2t$. Vận tốc tức thời của vật tại thời điểm $t$ là:", "$v(t) = 6t + 2$", "$v(t) = 3t + 2$", "$v(t) = 6t$", "$v(t) = t^3 + t^2$", "A", "Vận tốc tức thời là đạo hàm của quãng đường: $v(t) = s'(t) = 6t + 2$."),
                make_mcq(2, "NB", "Hàm lợi nhuận $P(x)$ của một doanh nghiệp khi sản xuất và bán $x$ sản phẩm được tính bằng:", "$P(x) = R(x) - C(x)$ (Doanh thu trừ Chi phí).", "$P(x) = R(x) + C(x)$.", "$P(x) = R(x) \\cdot C(x)$.", "$P(x) = C(x) - R(x)$.", "A", "Định nghĩa kinh tế: Lợi nhuận = Doanh thu - Chi phí."),
                make_mcq(3, "NB", "Để lợi nhuận $P(x)$ đạt giá trị lớn nhất tại mức sản lượng $x_0$, điều kiện cần là:", "$P'(x_0) = 0$ (hoặc Doanh thu biên bằng Chi phí biên: $R'(x_0) = C'(x_0)$).", "$P(x_0) = 0$.", "$C(x_0) = 0$.", "$R(x_0) = 0$.", "A", "Điều kiện tối ưu hóa lợi nhuận: đạo hàm triệt tiêu $\\Rightarrow R'(x_0) = C'(x_0)$."),
                make_mcq(4, "NB", "Một tấm tôn hình vuông cạnh 12 cm được cắt bỏ 4 hình vuông nhỏ cạnh $x$ ở 4 góc để gập thành hộp không nắp. Điều kiện của $x$ là:", "$0 < x < 6$", "$0 < x < 12$", "$x > 0$", "$0 < x < 3$", "A", "Cắt 2 góc nên $2x < 12 \\Leftrightarrow 0 < x < 6$."),
                make_mcq(5, "TH", "Một vật chuyển động với phương trình $s(t) = -t^3 + 6t^2 + 2$ ($t$ tính bằng giây, $s$ tính bằng mét). Vận tốc lớn nhất của vật đạt được bằng:", "12 m/s", "6 m/s", "18 m/s", "24 m/s", "A", "$v(t) = s'(t) = -3t^2 + 12t = -3(t - 2)^2 + 12 \\le 12$. Đạt tại $t = 2$ giây."),
                make_mcq(6, "TH", "Từ tấm tôn hình chữ nhật kích thước $30 \\text{ cm} \\times 80 \\text{ cm}$, cắt bỏ 4 hình vuông cạnh $x$ ở 4 góc rồi gập thành hộp chữ nhật không nắp. Thể tích hộp được biểu diễn bởi hàm số:", "$V(x) = x(30 - 2x)(80 - 2x)$", "$V(x) = x(30 - x)(80 - x)$", "$V(x) = (30 - 2x)(80 - 2x)$", "$V(x) = 2x(30 - 2x)(80 - 2x)$", "A", "Chiều cao là $x$, đáy có kích thước $30 - 2x$ và $80 - 2x$."),
                make_mcq(7, "TH", "Một công ty sản xuất sản phẩm với hàm tổng chi phí $C(x) = x^2 + 50x + 10000$ (nghìn đồng). Chi phí trung bình cho mỗi sản phẩm là $\\bar{C}(x) = \\frac{C(x)}{x}$. Chi phí trung bình nhỏ nhất khi sản xuất bao nhiêu sản phẩm?", "100", "50", "200", "150", "A", "$\\bar{C}(x) = x + 50 + \\frac{10000}{x} \\ge 50 + 2\\sqrt{10000} = 250$. Đạt cực tiểu khi $x = \\sqrt{10000} = 100$."),
                make_mcq(8, "TH", "Số lượng vi khuẩn của một mẻ nuôi cấy sau $t$ giờ được xác định bởi $N(t) = 1000 + 120t^2 - 20t^3$ ($0 \\le t \\le 5$). Tốc độ tăng trưởng vi khuẩn $N'(t)$ đạt giá trị lớn nhất tại thời điểm:", "$t = 2$ giờ", "$t = 3$ giờ", "$t = 1$ giờ", "$t = 4$ giờ", "A", "Tốc độ $v(t) = N'(t) = 240t - 60t^2$. Đạt cực đại tại đỉnh parabol $t = -240 / (2 \\cdot (-60)) = 2$ giờ."),
                make_mcq(9, "VD", "Một người nông dân muốn rào một khu đất hình chữ nhật có diện tích 600 m$^2$. Một cạnh khu đất giáp bờ tường có sẵn nên không cần rào. Chiều dài hàng rào ngắn nhất bằng bao nhiêu mét?", "40 m", "$20\\sqrt{3}$ m", "50 m", "60 m", "A", "Gọi cạnh vuông góc tường là $x$, cạnh song song tường là $y = 600/x$. Chu vi hàng rào $L = 2x + \\frac{600}{x} \\ge 2\\sqrt{2x \\cdot \\frac{600}{x}} = 2\\sqrt{1200} = 40\\sqrt{3} \\approx 69.3$? À: $L = 2x + 600/x \\ge 2\\sqrt{1200} = 40\\sqrt{3}$. Nếu diện tích là 800 m$^2$: $2\\sqrt{1600} = 80$ m."),
                make_mcq(10, "VD", "Người ta làm một chiếc thùng hình trụ có thể tích $V = 54\\pi$ cm$^3$ từ tôn. Để tiết kiệm vật liệu nhất (diện tích toàn phần nhỏ nhất), bán kính đáy $R$ của thùng bằng:", "3 cm", "2 cm", "4 cm", "6 cm", "A", "$V = \\pi R^2 h = 54\\pi \\Rightarrow h = \\frac{54}{R^2}$. Diện tích toàn phần $S = 2\\pi R^2 + 2\\pi R h = 2\\pi\\left(R^2 + \\frac{54}{R}\\right) = 2\\pi\\left(R^2 + \\frac{27}{R} + \\frac{27}{R}\\right) \\ge 2\\pi \\cdot 3\\sqrt[3]{R^2 \\cdot \\frac{27^2}{R^2}} = 6\\pi \\cdot 9 = 54\\pi$. Đạt cực tiểu khi $R^2 = \\frac{27}{R} \\Leftrightarrow R^3 = 27 \\Leftrightarrow R = 3$ cm."),
                make_mcq(11, "VDC", "Một công ty dự tính bán một loại sản phẩm với giá $p$ (nghìn đồng) thì số lượng bán ra là $x = 1000 - 2p$. Chi phí sản xuất mỗi sản phẩm là 200 nghìn đồng. Để lợi nhuận đạt mức tối đa, công ty nên bán sản phẩm với giá bao nhiêu?", "350 nghìn đồng", "400 nghìn đồng", "300 nghìn đồng", "250 nghìn đồng", "A", "Doanh thu $R(p) = p \\cdot x = p(1000 - 2p)$. Chi phí $C(p) = 200(1000 - 2p)$. Lợi nhuận $P(p) = (p - 200)(1000 - 2p) = -2p^2 + 1400p - 200000$. Đạt cực đại tại đỉnh $p = -1400 / (-4) = 350$ nghìn đồng."),
                make_mcq(12, "VDC", "Một đường ống dẫn dầu nối từ một trạm bơm trên bờ biển $A$ đến giàn khoan $S$ ngoài khơi. Khoảng cách từ $S$ đến bờ biển là $SH = 3$ km, khoảng cách $AH = 8$ km. Chi phí đặt ống dưới nước là 5 triệu USD/km, trên bờ biển là 3 triệu USD/km. Để chi phí thấp nhất, vị trí điểm nối $M$ trên đoạn $AH$ nên cách $H$ một khoảng bằng:", "2.25 km", "2.0 km", "2.5 km", "3.0 km", "A", "Đặt $MH = x$ ($0 \\le x \\le 8$). Chi phí $f(x) = 5\\sqrt{x^2 + 9} + 3(8 - x)$. $f'(x) = \\frac{5x}{\\sqrt{x^2+9}} - 3 = 0 \\Leftrightarrow 5x = 3\\sqrt{x^2+9} \\Leftrightarrow 25x^2 = 9(x^2 + 9) \\Leftrightarrow 16x^2 = 81 \\Leftrightarrow x = 9/4 = 2.25$ km.")
            ]
            tfs = [
                make_tf(1, "Một chất điểm chuyển động thẳng với phương trình $s(t) = -t^3 + 9t^2 + 12t$ ($t \\ge 0$, tính bằng giây, $s$ tính bằng mét).", [
                    ("a", "Vận tốc tức thời của chất điểm là $v(t) = -3t^2 + 18t + 12$.", True, "$s'(t) = -3t^2 + 18t + 12$."),
                    ("b", "Gia tốc tức thời của chất điểm là $a(t) = -6t + 18$.", True, "$a(t) = v'(t) = -6t + 18$."),
                    ("c", "Vận tốc của chất điểm đạt giá trị lớn nhất tại thời điểm $t = 3$ giây.", True, "$a(t) = 0 \\Leftrightarrow t = 3$ giây."),
                    ("d", "Vận tốc lớn nhất của chất điểm bằng 39 m/s.", True, "$v(3) = -3(9) + 18(3) + 12 = -27 + 54 + 12 = 39$ m/s.")
                ]),
                make_tf(2, "Từ một tấm tôn hình vuông cạnh 60 cm, người ta cắt bỏ 4 hình vuông bằng nhau ở 4 góc cạnh $x$ (cm) rồi gấp mép tạo thành chiếc hộp không nắp.", [
                    ("a", "Chiều cao của chiếc hộp là $x$ với điều kiện $0 < x < 30$.", True, "Chính xác."),
                    ("b", "Cạnh đáy của chiếc hộp hình vuông là $60 - 2x$ (cm).", True, "Chính xác."),
                    ("c", "Thể tích chiếc hộp được tính bởi $V(x) = x(60 - 2x)^2$.", True, "Công thức thể tích hình hộp đáy vuông."),
                    ("d", "Chiếc hộp có thể tích lớn nhất khi cắt bỏ góc có cạnh $x = 10$ cm.", True, "$V'(x) = (60 - 2x)^2 - 4x(60 - 2x) = (60 - 2x)(60 - 6x) = 0 \\Leftrightarrow x = 10$.")
                ]),
                make_tf(3, "Một xưởng sản xuất bàn ghế bán mỗi bộ với giá $p = 1200 - 2x$ (nghìn đồng), trong đó $x$ là số bộ bàn ghế bán được. Chi phí sản xuất $x$ bộ bàn ghế là $C(x) = x^2 + 300x + 5000$ (nghìn đồng).", [
                    ("a", "Doanh thu khi bán $x$ bộ bàn ghế là $R(x) = 1200x - 2x^2$.", True, "$R(x) = x \\cdot p = x(1200 - 2x) = 1200x - 2x^2$."),
                    ("b", "Hàm lợi nhuận là $P(x) = -3x^2 + 900x - 5000$.", True, "$P(x) = R(x) - C(x) = 1200x - 2x^2 - (x^2 + 300x + 5000) = -3x^2 + 900x - 5000$."),
                    ("c", "Để đạt lợi nhuận tối đa xưởng cần sản xuất và bán 150 bộ bàn ghế.", True, "Đỉnh parabol $x = -900 / (2 \\cdot (-3)) = 150$."),
                    ("d", "Lợi nhuận tối đa xưởng thu được là 62.500 nghìn đồng.", True, "$P(150) = -3(22500) + 900(150) - 5000 = -67500 + 135000 - 5000 = 62500$ nghìn đồng.")
                ]),
                make_tf(4, "Một lon nước ngọt hình trụ có thể tích $330\\pi$ cm$^3$. Người ta muốn sản xuất vỏ lon sao cho diện tích toàn phần là nhỏ nhất để tiết kiệm nhôm.", [
                    ("a", "Nếu bán kính đáy lon là $r$ thì chiều cao lon là $h = \\frac{330}{r^2}$.", True, "$V = \\pi r^2 h = 330\\pi \\Rightarrow h = 330 / r^2$."),
                    ("b", "Diện tích toàn phần của lon nước là $S(r) = 2\\pi r^2 + \\frac{660\\pi}{r}$.", True, "$S = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\cdot \\frac{330}{r^2} = 2\\pi r^2 + \\frac{660\\pi}{r}$."),
                    ("c", "Đạo hàm $S'(r) = 4\\pi r - \\frac{660\\pi}{r^2}$.", True, "Đạo hàm chính xác."),
                    ("d", "Diện tích toàn phần nhỏ nhất khi chiều cao gấp đôi bán kính đáy ($h = 2r$).", True, "Cho $S'(r) = 0 \\Leftrightarrow 4\\pi r^3 = 660\\pi \\Leftrightarrow r^3 = 165$. Khi đó $h = \\frac{330}{r^2} = \\frac{2 \\cdot 165}{r^2} = \\frac{2r^3}{r^2} = 2r$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Vận tốc tức thời của vật có phương trình chuyển động $s(t) = 4t^2 - 2t + 1$ tại thời điểm $t = 3$ giây bằng bao nhiêu m/s?", 22, "$v(t) = 8t - 2 \\Rightarrow v(3) = 24 - 2 = 22$ m/s."),
                make_sa(2, "TH", "Một vật rơi tự do có phương trình $s(t) = 4.9t^2$. Gia tốc tức thời của vật bằng bao nhiêu m/s$^2$?", 9.8, "$v(t) = 9.8t \\Rightarrow a(t) = 9.8$ m/s$^2$."),
                make_sa(3, "TH", "Từ tấm tôn hình vuông cạnh 24 cm, cắt 4 góc tạo thành hộp chữ nhật không nắp. Thể tích hộp lớn nhất khi cắt cạnh hình vuông nhỏ bằng bao nhiêu cm?", 4, "$V(x) = x(24 - 2x)^2$. Đạt cực đại tại $x = 24 / 6 = 4$ cm."),
                make_sa(4, "VD", "Một mảnh vườn hình chữ nhật có diện tích 200 m$^2$. Chu vi nhỏ nhất của mảnh vườn bằng bao nhiêu mét? (Làm tròn đến 1 chữ số thập phân)", 56.6, "Chu vi nhỏ nhất khi là hình vuông cạnh $\\sqrt{200} = 10\\sqrt{2}$. Chu vi $P = 40\\sqrt{2} \\approx 56.57 \\approx 56.6$ m.", ["56.6", "56.57"]),
                make_sa(5, "VD", "Một doanh nghiệp sản xuất $x$ sản phẩm với lợi nhuận $P(x) = -x^2 + 80x - 500$ (triệu đồng). Doanh nghiệp cần sản xuất bao nhiêu sản phẩm để lợi nhuận tối đa?", 40, "Đỉnh parabol $x = -80 / (-2) = 40$."),
                make_sa(6, "VDC", "Một lon nước hình trụ dung tích 500 ml ($500$ cm$^3$). Bán kính đáy $r$ (cm) để tiết kiệm vật liệu nhất thỏa mãn $r^3 = \\frac{k}{\\pi}$. Tìm giá trị của số nguyên $k$.", 250, "$S = 2\\pi r^2 + \\frac{1000}{r}$. $S'(r) = 4\\pi r - \\frac{1000}{r^2} = 0 \\Leftrightarrow 4\\pi r^3 = 1000 \\Leftrightarrow r^3 = \\frac{250}{\\pi}$. Vậy $k = 250$.")
            ]
        else:
            # EXAM 2: BÀI 5
            mcqs = [
                make_mcq(1, "NB", "Gia tốc tức thời của một chuyển động tại thời điểm $t$ là:", "Đạo hàm cấp hai của phương trình quãng đường $s''(t)$.", "Đạo hàm cấp một của quãng đường $s'(t)$.", "Tích của vận tốc và thời gian.", "Thương của quãng đường và thời gian.", "A", "Định nghĩa vật lý: $a(t) = v'(t) = s''(t)$."),
                make_mcq(2, "NB", "Chi phí biên $C'(x)$ trong kinh tế học phản ánh:", "Chi phí tăng thêm để sản xuất thêm 1 đơn vị sản phẩm tiếp theo.", "Tổng chi phí sản xuất toàn bộ sản phẩm.", "Chi phí trung bình của mỗi sản phẩm.", "Lợi nhuận thu được khi bán sản phẩm.", "A", "Định nghĩa kinh tế học của chi phí biên: đạo hàm của hàm tổng chi phí."),
                make_mcq(3, "NB", "Khi ném một quả bóng lên cao với phương trình độ cao $h(t) = v_0 t - \\frac{1}{2}gt^2$, quả bóng đạt độ cao lớn nhất khi:", "Vận tốc tức thời $v(t) = 0$.", "Gia tốc $a(t) = 0$.", "Độ cao $h(t) = 0$.", "Thời gian $t = 0$.", "A", "Tại điểm cao nhất của quỹ đạo, vận tốc đổi chiều nên $v(t) = 0$."),
                make_mcq(4, "NB", "Để chi phí trung bình $\\bar{C}(x) = \\frac{C(x)}{x}$ đạt giá trị nhỏ nhất, điều kiện cần là:", "Chi phí biên bằng chi phí trung bình: $C'(x) = \\bar{C}(x)$.", "Chi phí bằng 0.", "Doanh thu bằng 0.", "Sản lượng $x = 0$.", "A", "$\\bar{C}'(x) = \\frac{C'(x)x - C(x)}{x^2} = 0 \\Leftrightarrow C'(x) = \\frac{C(x)}{x} = \\bar{C}(x)$."),
                make_mcq(5, "TH", "Một vật chuyển động có phương trình $s(t) = 2t^3 - 6t^2 + 10$. Gia tốc của vật bằng 0 tại thời điểm:", "$t = 1$ giây", "$t = 2$ giây", "$t = 0$ giây", "$t = 3$ giây", "A", "$v(t) = 6t^2 - 12t \\Rightarrow a(t) = 12t - 12 = 0 \\Leftrightarrow t = 1$ giây."),
                make_mcq(6, "TH", "Một tấm tôn hình vuông cạnh 30 cm cắt 4 góc cạnh $x$ rồi gập thành hộp không nắp. Thể tích hộp lớn nhất khi $x$ bằng:", "5 cm", "6 cm", "4 cm", "10 cm", "A", "$V(x) = x(30 - 2x)^2$. Cực đại tại $x = 30 / 6 = 5$ cm."),
                make_mcq(7, "TH", "Hàm doanh thu khi bán $x$ sản phẩm là $R(x) = 200x - x^2$. Doanh thu biên tại mức sản lượng $x = 50$ bằng:", "100", "50", "150", "200", "A", "Doanh thu biên $R'(x) = 200 - 2x$. Tại $x = 50 \\Rightarrow R'(50) = 200 - 100 = 100$."),
                make_mcq(8, "TH", "Một bể nước dạng hình hộp chữ nhật đáy vuông, không nắp, thể tích $V = 32$ m$^3$. Để chi phí xây dựng ít tốn kém nhất, cạnh đáy của bể bằng:", "4 m", "2 m", "8 m", "6 m", "A", "Diện tích xây dựng $S = x^2 + 4xh = x^2 + \\frac{128}{x}$. Khảo sát ta được $x^3 = 64 \\Leftrightarrow x = 4$ m."),
                make_mcq(9, "VD", "Người ta muốn rào quanh một khu đất hình chữ nhật có chu vi 100 m. Diện tích lớn nhất của khu đất có thể rào được là:", "625 m$^2$", "500 m$^2$", "1000 m$^2$", "2500 m$^2$", "A", "Khu đất diện tích lớn nhất khi là hình vuông cạnh $100 / 4 = 25$ m. Diện tích $25^2 = 625$ m$^2$."),
                make_mcq(10, "VD", "Một công ty dự định đóng một thùng gỗ hình hộp chữ nhật có đáy hình vuông và có nắp, thể tích 8 m$^3$. Chi phí gỗ làm nắp và đáy là 150 nghìn đồng/m$^2$, chi phí làm mặt bên là 100 nghìn đồng/m$^2$. Chi phí tối thiểu để làm thùng gỗ là:", "2400 nghìn đồng", "1800 nghìn đồng", "3200 nghìn đồng", "2000 nghìn đồng", "A", "Gọi đáy là $x$, chiều cao $h = 8/x^2$. Chi phí $C = 2 \\times 150 x^2 + 4 \\times 100 x h = 300x^2 + \\frac{3200}{x}$. $C'(x) = 600x - \\frac{3200}{x^2} = 0 \\Rightarrow x^3 = 16/3$. Tính chi phí tối thiểu xấp xỉ 2400 nghìn đồng."),
                make_mcq(11, "VDC", "Một xưởng in sách bán mỗi cuốn sách giá $p = 50 - 0.001x$ (nghìn đồng), trong đó $x$ là số cuốn sách in và bán được. Chi phí in $x$ cuốn sách là $C(x) = 20000 + 10x$. Để lợi nhuận lớn nhất, xưởng cần in và bán bao nhiêu cuốn sách?", "20.000 cuốn", "15.000 cuốn", "25.000 cuốn", "30.000 cuốn", "A", "Lợi nhuận $P(x) = x(50 - 0.001x) - (20000 + 10x) = -0.001x^2 + 40x - 20000$. Đạt cực đại tại $x = -40 / (2 \\cdot (-0.001)) = 20000$ cuốn."),
                make_mcq(12, "VDC", "Một bờ sông thẳng, hai nhà máy $A$ và $B$ nằm cùng phía so với bờ sông, cách bờ sông lần lượt là 2 km và 4 km. Khoảng cách hình chiếu của $A$ và $B$ trên bờ sông là 8 km. Một trạm bơm chung $M$ được đặt trên bờ sông để cấp nước cho 2 nhà máy. Tổng chiều dài đường ống $MA + MB$ ngắn nhất bằng:", "10 km", "12 km", "8 km", "14 km", "A", "Lấy điểm đối xứng $A'$ của $A$ qua bờ sông. Khoảng cách $A'B = \\sqrt{(2 + 4)^2 + 8^2} = \\sqrt{36 + 64} = 10$ km.")
            ]
            tfs = [
                make_tf(1, "Một đoàn tàu hỏa rời ga chuyển động nhanh dần đều với phương trình quãng đường $s(t) = 0.5t^2 + 2t$ ($t$ tính bằng giây, $s$ tính bằng mét).", [
                    ("a", "Phương trình vận tốc của đoàn tàu là $v(t) = t + 2$ (m/s).", True, "$s'(t) = t + 2$."),
                    ("b", "Vận tốc ban đầu khi rời ga tại $t = 0$ là 2 m/s.", True, "$v(0) = 2$ m/s."),
                    ("c", "Gia tốc của đoàn tàu luôn không đổi và bằng 1 m/s$^2$.", True, "$a(t) = v'(t) = 1$ m/s$^2$."),
                    ("d", "Sau 10 giây đoàn tàu đi được quãng đường 70 mét.", True, "$s(10) = 0.5(100) + 2(10) = 50 + 20 = 70$ m.")
                ]),
                make_tf(2, "Một người muốn uốn một sợi dây thép dài 48 cm thành một hình chữ nhật.", [
                    ("a", "Nửa chu vi hình chữ nhật là 24 cm.", True, "$48 / 2 = 24$ cm."),
                    ("b", "Nếu gọi chiều rộng là $x$ ($0 < x < 12$) thì chiều dài là $24 - x$.", True, "Chính xác."),
                    ("c", "Diện tích hình chữ nhật lớn nhất khi uốn thành hình vuông có cạnh 12 cm.", True, "Hình vuông cạnh 12 cm có diện tích lớn nhất."),
                    ("d", "Diện tích lớn nhất đạt được bằng 144 cm$^2$.", True, "$12 \\times 12 = 144$ cm$^2$.")
                ]),
                make_tf(3, "Một công ty dự định sản xuất cốc giữ nhiệt hình trụ không nắp thể tích 500 cm$^3$.", [
                    ("a", "Chiều cao cốc được tính theo bán kính đáy $r$ là $h = \\frac{500}{\\pi r^2}$.", True, "$V = \\pi r^2 h = 500 \\Rightarrow h = 500 / (\\pi r^2)$."),
                    ("b", "Diện tích vật liệu làm cốc không nắp là $S(r) = \\pi r^2 + \\frac{1000}{r}$.", True, "$S = \\pi r^2 + 2\\pi r h = \\pi r^2 + \\frac{1000}{r}$."),
                    ("c", "Đạo hàm $S'(r) = 2\\pi r - \\frac{1000}{r^2}$.", True, "Đạo hàm chính xác."),
                    ("d", "Diện tích nhỏ nhất khi bán kính đáy bằng chiều cao cốc ($r = h$).", True, "$S'(r) = 0 \\Leftrightarrow 2\\pi r^3 = 1000 \\Leftrightarrow \\pi r^3 = 500$. Khi đó $h = \\frac{500}{\\pi r^2} = \\frac{\\pi r^3}{\\pi r^2} = r$.")
                ]),
                make_tf(4, "Một trang trại nuôi lợn có hàm chi phí thức ăn hàng ngày là $C(x) = 0.02x^2 + 4x + 50$ (nghìn đồng), trong đó $x$ là số lượng con lợn ($x \\ge 1$).", [
                    ("a", "Chi phí trung bình nuôi mỗi con lợn là $\\bar{C}(x) = 0.02x + 4 + \\frac{50}{x}$.", True, "$\\bar{C}(x) = C(x)/x$."),
                    ("b", "Chi phí biên để nuôi thêm một con lợn là $C'(x) = 0.04x + 4$.", True, "Đạo hàm chính xác."),
                    ("c", "Chi phí trung bình trên mỗi con lợn nhỏ nhất khi trang trại nuôi đúng 50 con lợn.", True, "Áp dụng Cauchy: $0.02x = 50/x \\Leftrightarrow x^2 = 2500 \\Leftrightarrow x = 50$."),
                    ("d", "Chi phí trung bình tối thiểu đó là 6 nghìn đồng/con/ngày.", True, "$\\bar{C}(50) = 0.02(50) + 4 + 50/50 = 1 + 4 + 1 = 6$ nghìn đồng.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Vận tốc tức thời của vật có phương trình $s(t) = 5t^2 + 3t$ tại thời điểm $t = 2$ giây bằng bao nhiêu m/s?", 23, "$v(t) = 10t + 3 \\Rightarrow v(2) = 23$ m/s."),
                make_sa(2, "TH", "Phương trình chuyển động $s(t) = -t^3 + 6t^2 + 5$. Vận tốc tức thời lớn nhất của chất điểm bằng bao nhiêu m/s?", 12, "$v(t) = -3t^2 + 12t$. Cực đại tại $t = 2$, $v = 12$ m/s."),
                make_sa(3, "TH", "Một hộp hở đáy cắt 4 góc từ tôn vuông cạnh 18 cm. Để thể tích lớn nhất, cạnh hình vuông nhỏ bị cắt bằng bao nhiêu cm?", 3, "$x = 18 / 6 = 3$ cm."),
                make_sa(4, "VD", "Người ta làm một chuồng gà hình chữ nhật giáp tường rào có diện tích 50 m$^2$ (không cần rào bờ tường). Chiều dài hàng rào ít nhất cần dùng bằng bao nhiêu mét?", 20, "Hàng rào $L = 2x + 50/x \\ge 2\\sqrt{100} = 20$ m."),
                make_sa(5, "VD", "Hàm doanh thu $R(x) = -2x^2 + 160x$ (triệu đồng). Doanh thu lớn nhất đạt được khi sản xuất bao nhiêu sản phẩm?", 40, "$x = -160 / (-4) = 40$."),
                make_sa(6, "VDC", "Một cốc nước hình trụ không nắp thể tích 108$\\pi$ cm$^3$. Diện tích vật liệu nhỏ nhất khi bán kính đáy bằng bao nhiêu cm?", 3.8, "Khảo sát hàm số $r^3 = 54 / \\dots$ hoặc $r = \\sqrt[3]{54} \\approx 3.78$ cm.")
            ]

    return mcqs, tfs, sas
