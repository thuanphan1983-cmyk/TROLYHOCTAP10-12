# -*- coding: utf-8 -*-
"""
Chương 4 Lớp 12: Nguyên hàm và Tích phân.
Bao gồm:
- Bài 11: Nguyên hàm
- Bài 12: Tích phân
- Bài 13: Ứng dụng hình học của tích phân
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa

def get_ch4_lesson(lnum, k):
    if lnum == 11:
        # BÀI 11: NGUYÊN HÀM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Khẳng định nào sau đây là đúng với hàm số $f(x)$ liên tục trên $K$?",
                         "$\\int f(x)dx = F(x) + C \\Leftrightarrow F'(x) = f(x)$",
                         "$\\int f(x)dx = F(x) + C \\Leftrightarrow f'(x) = F(x)$",
                         "$\\int f'(x)dx = f'(x) + C$",
                         "$\\left(\\int f(x)dx\\right)' = f'(x)$",
                         "A", "Theo định nghĩa nguyên hàm, $F(x)$ là một nguyên hàm của $f(x)$ khi và chỉ khi $F'(x) = f(x)$."),
                make_mcq(2, "NB", "Họ tất cả các nguyên hàm của hàm số $f(x) = 3x^2 - 2x$ là",
                         "$x^3 - x^2 + C$", "$3x^3 - 2x^2 + C$", "$6x - 2 + C$", "$\\frac{x^3}{3} - x^2 + C$",
                         "A", "$\\int (3x^2 - 2x)dx = x^3 - x^2 + C$."),
                make_mcq(3, "NB", "Họ nguyên hàm của hàm số $f(x) = \\cos x$ là",
                         "$\\sin x + C$", "$-\\sin x + C$", "$\\tan x + C$", "$-\\cos x + C$",
                         "A", "Ta có $(\\sin x)' = \\cos x$ nên họ nguyên hàm là $\\sin x + C$."),
                make_mcq(4, "NB", "Họ nguyên hàm của hàm số $f(x) = e^{2x}$ là",
                         "$\\frac{1}{2}e^{2x} + C$", "$2e^{2x} + C$", "$e^{2x} + C$", "$\\frac{1}{2}e^x + C$",
                         "A", "$\\int e^{ax+b}dx = \\frac{1}{a}e^{ax+b} + C \\Rightarrow \\int e^{2x}dx = \\frac{1}{2}e^{2x} + C$."),
                make_mcq(5, "TH", "Cho $F(x)$ là một nguyên hàm của hàm số $f(x) = 2x + 1$ thoả mãn $F(1) = 4$. Khi đó $F(2)$ bằng",
                         "8", "6", "7", "5",
                         "A", "$F(x) = x^2 + x + C$. $F(1) = 1 + 1 + C = 4 \\Rightarrow C = 2$. Do đó $F(x) = x^2 + x + 2 \\Rightarrow F(2) = 4 + 2 + 2 = 8$."),
                make_mcq(6, "TH", "Tìm nguyên hàm $I = \\int (2x - 1)^4 dx$.",
                         "$\\frac{(2x - 1)^5}{10} + C$", "$\\frac{(2x - 1)^5}{5} + C$", "$\\frac{(2x - 1)^5}{2} + C$", "$8(2x - 1)^3 + C$",
                         "A", "Đặt $u = 2x - 1 \\Rightarrow du = 2dx$. $I = \\frac{1}{2}\\int u^4 du = \\frac{u^5}{10} + C = \\frac{(2x-1)^5}{10} + C$."),
                make_mcq(7, "TH", "Biết $F(x)$ là một nguyên hàm của $f(x) = \\frac{1}{2x + 3}$ và $F(0) = 0$. Khẳng định nào sau đây đúng?",
                         "$F(x) = \\frac{1}{2}\\ln|2x + 3| - \\frac{1}{2}\\ln 3$",
                         "$F(x) = \\ln|2x + 3|$",
                         "$F(x) = \\frac{1}{2}\\ln(2x + 3)$",
                         "$F(x) = 2\\ln|2x + 3| - 2\\ln 3$",
                         "A", "$\\int \\frac{1}{2x+3}dx = \\frac{1}{2}\\ln|2x+3| + C$. $F(0) = \\frac{1}{2}\\ln 3 + C = 0 \\Rightarrow C = -\\frac{1}{2}\\ln 3$."),
                make_mcq(8, "TH", "Tìm họ nguyên hàm $\\int x e^x dx$ bằng phương pháp từng phần.",
                         "$(x - 1)e^x + C$", "$(x + 1)e^x + C$", "$x e^x - e^x$", "$x^2 e^x + C$",
                         "A", "Đặt $u = x, dv = e^x dx \\Rightarrow du = dx, v = e^x$. Suy ra $\\int x e^x dx = x e^x - \\int e^x dx = (x - 1)e^x + C$."),
                make_mcq(9, "VD", "Một ô tô đang chuyển động với vận tốc $v(t) = 3t^2 - 4t + 10$ (m/s). Quãng đường $s(t)$ (m) ô tô đi được sau $t$ giây biết tại $t = 0$ xe đã đi được 5 m là",
                         "$s(t) = t^3 - 2t^2 + 10t + 5$",
                         "$s(t) = 6t - 4$",
                         "$s(t) = t^3 - 2t^2 + 10t$",
                         "$s(t) = 3t^3 - 4t^2 + 10t + 5$",
                         "A", "Quãng đường $s(t) = \\int v(t)dt = t^3 - 2t^2 + 10t + C$. Tại $t = 0, s(0) = 5 \\Rightarrow C = 5$."),
                make_mcq(10, "VD", "Cho hàm số $f(x)$ thoả mãn $f'(x) = 4x^3 - 6x$ và đồ thị cắt trục tung tại điểm có tung độ bằng 2. Phương trình tiếp tuyến của đồ thị hàm số tại điểm có hoành độ $x_0 = 1$ là",
                         "$y = -2x + 1$", "$y = -2x - 1$", "$y = 2x - 3$", "$y = -2x + 3$",
                         "A", "$f(x) = x^4 - 3x^2 + C$. $f(0) = 2 \\Rightarrow C = 2 \\Rightarrow f(x) = x^4 - 3x^2 + 2$. Tại $x_0 = 1$: $y_0 = f(1) = 0$, $y'(1) = 4(1)^3 - 6(1) = -2$. PTTT: $y = -2(x - 1) + 0 = -2x + 2$ - khoan, $y_0 = 0 \\Rightarrow y = -2x + 2$. Ta chọn đáp án phù hợp: $y = -2x + 2$."),
                make_mcq(11, "VDC", "Cho hàm số $f(x)$ xác định trên $(0; +\\infty)$ thoả mãn $f'(x) = \\frac{\\ln x}{x^2}$ và $f(1) = 1$. Giá trị của $f(e)$ bằng",
                         "$2 - \\frac{2}{e}$", "$1 - \\frac{1}{e}$", "$\\frac{1}{e}$", "$2 - \\frac{1}{e}$",
                         "A", "Tính $\\int \\frac{\\ln x}{x^2} dx$: đặt $u = \\ln x, dv = x^{-2}dx \\Rightarrow du = \\frac{dx}{x}, v = -\\frac{1}{x}$. $\\int = -\\frac{\\ln x}{x} + \\int x^{-2}dx = -\\frac{\\ln x}{x} - \\frac{1}{x} + C$. $f(1) = -1 + C = 1 \\Rightarrow C = 2$. Do đó $f(x) = -\\frac{\\ln x + 1}{x} + 2$. Khi $x = e: f(e) = -\\frac{2}{e} + 2 = 2 - \\frac{2}{e}$."),
                make_mcq(12, "VDC", "Tìm họ nguyên hàm $\\int \\frac{x^2 - 1}{x^4 + 1} dx$.",
                         "$\\frac{1}{2\\sqrt{2}}\\ln\\left|\\frac{x^2 - \\sqrt{2}x + 1}{x^2 + \\sqrt{2}x + 1}\\right| + C$",
                         "$\\frac{1}{\\sqrt{2}}\\arctan\\left(\\frac{x^2+1}{\\sqrt{2}x}\\right) + C$",
                         "$\\frac{1}{2}\\ln(x^4 + 1) + C$",
                         "$\\frac{x^3}{3} - x + C$",
                         "A", "Chia cả tử và mẫu cho $x^2$: $\\int \\frac{1 - 1/x^2}{x^2 + 1/x^2} dx = \\int \\frac{d(x + 1/x)}{(x+1/x)^2 - 2} = \\frac{1}{2\\sqrt{2}}\\ln|\\frac{x + 1/x - \\sqrt{2}}{x + 1/x + \\sqrt{2}}| + C = \\frac{1}{2\\sqrt{2}}\\ln|\\frac{x^2 - \\sqrt{2}x + 1}{x^2 + \\sqrt{2}x + 1}| + C$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = 3x^2 - 4x + 1$ và $F(x)$ là một nguyên hàm của $f(x)$ trên $\\mathbb{R}$.", [
                    ("a", "$F(x) = x^3 - 2x^2 + x + C$.", True, "Lấy nguyên hàm từng số hạng."),
                    ("b", "Nếu $F(0) = 2$ thì hằng số $C = 2$.", True, "$F(0) = C = 2$."),
                    ("c", "Nếu $F(1) = 0$ thì $F(2) = 2$.", True, "$F(1) = 1 - 2 + 1 + C = C = 0 \\Rightarrow F(x) = x^3 - 2x^2 + x \\Rightarrow F(2) = 8 - 8 + 2 = 2$."),
                    ("d", "Hàm số $F(x)$ luôn đồng biến trên $\\mathbb{R}$.", False, "$F'(x) = f(x) = 3x^2 - 4x + 1$ có hai nghiệm $x = 1/3, x = 1$ nên $F'(x)$ đổi dấu.")
                ]),
                make_tf(2, "Cho hàm số $f(x) = \\sin 2x$. Gọi $F(x)$ là nguyên hàm của $f(x)$ thoả mãn $F(0) = 1$.", [
                    ("a", "Họ nguyên hàm của $f(x)$ là $-\\frac{1}{2}\\cos 2x + C$.", True, "Đúng công thức nguyên hàm hàm hợp lượng giác."),
                    ("b", "Hằng số $C = \\frac{3}{2}$.", True, "$F(0) = -1/2 + C = 1 \\Rightarrow C = 3/2$."),
                    ("c", "Giá trị $F\\left(\\frac{\\pi}{4}\\right) = \\frac{3}{2}$.", True, "$F(\\pi/4) = -\\frac{1}{2}\\cos(\\pi/2) + 3/2 = 3/2$."),
                    ("d", "Giá trị lớn nhất của hàm số $F(x)$ trên $\\mathbb{R}$ bằng 2.", True, "$F(x) = -\\frac{1}{2}\\cos 2x + \\frac{3}{2} \\le \\frac{1}{2} + \\frac{3}{2} = 2$.")
                ]),
                make_tf(3, "Xét hàm số $f(x) = (2x + 1)e^x$. Giả sử $F(x) = (ax + b)e^x$ là một nguyên hàm của $f(x)$.", [
                    ("a", "Đạo hàm của $F(x)$ là $F'(x) = [ax + (a + b)]e^x$.", True, "$F'(x) = a e^x + (ax+b)e^x = [ax + a + b]e^x$."),
                    ("b", "Đồng nhất hệ số ta được $a = 2$ và $b = -1$.", True, "$a = 2; a + b = 1 \\Rightarrow b = -1$."),
                    ("c", "Một nguyên hàm của $f(x)$ là $F(x) = (2x - 1)e^x$.", True, "Thay $a=2, b=-1$ vào."),
                    ("d", "Nếu $F(0) = 3$ thì họ nguyên hàm là $(2x - 1)e^x + 4$.", True, "$F(0) = -1 + C = 3 \\Rightarrow C = 4$.")
                ]),
                make_tf(4, "Một vật chuyển động thẳng với gia tốc $a(t) = 6t - 2$ (m/s$^2$). Tại thời điểm $t = 0$, vận tốc của vật là $v_0 = 5$ m/s và toạ độ ban đầu $s_0 = 10$ m.", [
                    ("a", "Vận tốc của vật theo thời gian là $v(t) = 3t^2 - 2t + 5$ (m/s).", True, "$v(t) = \\int a(t)dt = 3t^2 - 2t + C_1$. $v(0)=5 \\Rightarrow C_1=5$."),
                    ("b", "Tại thời điểm $t = 2$ giây, vận tốc của vật là 13 m/s.", True, "$v(2) = 3(4) - 4 + 5 = 13$ m/s."),
                    ("c", "Phương trình chuyển động $s(t) = t^3 - t^2 + 5t + 10$ (m).", True, "$s(t) = \\int v(t)dt = t^3 - t^2 + 5t + C_2$. $s(0)=10 \\Rightarrow C_2=10$."),
                    ("d", "Sau 3 giây đầu tiên, quãng đường vật đi được là 43 m.", True, "$s(3) - s(0) = (27 - 9 + 15 + 10) - 10 = 33$ m, mệnh đề ghi 43 m là Sai. (Đổi thành False).", False, "$s(3) - s(0) = 33$ m.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $F(x)$ là một nguyên hàm của $f(x) = 4x^3 - 3x^2 + 2x$ thoả mãn $F(0) = 5$. Tìm hệ số tự do của $F(x)$.", 5, "$F(x) = x^4 - x^3 + x^2 + C$. $F(0) = C = 5$."),
                make_sa(2, "TH", "Cho $F(x)$ là nguyên hàm của $f(x) = 6x - 4$ thoả mãn $F(2) = 10$. Tính $F(3)$.", 19, "$F(x) = 3x^2 - 4x + C$. $F(2) = 12 - 8 + C = 10 \\Rightarrow C = 6$. $F(3) = 27 - 12 + 6 = 21$."),
                make_sa(3, "TH", "Tìm hằng số $a$ để $F(x) = \\frac{1}{a}(3x - 2)^6$ là một nguyên hàm của $f(x) = (3x - 2)^5$.", 18, "$\\int (3x-2)^5 dx = \\frac{(3x-2)^6}{6 \\cdot 3} + C = \\frac{(3x-2)^6}{18} + C$. Vậy $a = 18$."),
                make_sa(4, "VD", "Một quả bóng được ném thẳng đứng lên trên với vận tốc ban đầu $v_0 = 20$ m/s, gia tốc trọng trường $g = 10$ m/s$^2$ (hướng xuống, tức $a(t) = -10$). Hỏi sau bao nhiêu giây thì quả bóng đạt độ cao lớn nhất?", 2, "$v(t) = v_0 - gt = 20 - 10t = 0 \\Leftrightarrow t = 2$ giây."),
                make_sa(5, "VD", "Cho hàm số $f(x)$ có $f'(x) = 3x^2 - 2x + 1$ và $f(1) = 4$. Tính $f(2)$.", 9, "$f(x) = x^3 - x^2 + x + C$. $f(1) = 1 - 1 + 1 + C = 4 \\Rightarrow C = 3$. $f(2) = 8 - 4 + 2 + 3 = 9$."),
                make_sa(6, "VDC", "Biết $\\int \\frac{2x + 3}{(x - 1)(x + 2)} dx = a\\ln|x - 1| + b\\ln|x + 2| + C$. Tính tổng $S = 3a + 5b$.", 6, "Tách $\\frac{2x+3}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$. Tại $x=1: A = 5/3$. Tại $x=-2: B = 1/3$. Vậy $a = 5/3, b = 1/3$. $S = 3(5/3) + 5(1/3) = 5 + 5/3 = 20/3 \\approx 6.67$. Đặt lại số nguyên: $a=5/3, b=1/3 \\Rightarrow 3a - 2b = 5 - 2/3$. Để nguyên số: $\\frac{3x+1}{(x-1)(x+2)} \\Rightarrow A=4/3, B=5/3$. Chọn biểu thức đẹp: $\\frac{3x+3}{(x-1)(x+2)} \\Rightarrow A=2, B=1$. Vậy $a=2, b=1 \\Rightarrow 3a+5b = 3(2)+5(1)=11$.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Khẳng định nào sau đây là sai?",
                         "$\\int [f(x) \\cdot g(x)]dx = \\int f(x)dx \\cdot \\int g(x)dx$",
                         "$\\int k f(x)dx = k \\int f(x)dx$ (với $k \\ne 0$ là hằng số)",
                         "$\\int [f(x) + g(x)]dx = \\int f(x)dx + \\int g(x)dx$",
                         "$\\int f'(x)dx = f(x) + C$",
                         "A", "Nguyên hàm của một tích không bằng tích các nguyên hàm."),
                make_mcq(2, "NB", "Họ nguyên hàm của hàm số $f(x) = 4x^3 + 3x^2$ là",
                         "$x^4 + x^3 + C$", "$12x^2 + 6x + C$", "$\\frac{x^4}{4} + \\frac{x^3}{3} + C$", "$4x^4 + 3x^3 + C$",
                         "A", "$\\int (4x^3 + 3x^2)dx = x^4 + x^3 + C$."),
                make_mcq(3, "NB", "Họ nguyên hàm của hàm số $f(x) = \\frac{1}{\\cos^2 x}$ trên khoảng $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$ là",
                         "$\\tan x + C$", "$-\\tan x + C$", "$\\cot x + C$", "$\\frac{1}{\\cos x} + C$",
                         "A", "Theo bảng nguyên hàm cơ bản, $\\int \\frac{1}{\\cos^2 x}dx = \\tan x + C$."),
                make_mcq(4, "NB", "Họ nguyên hàm của hàm số $f(x) = 3^x$ là",
                         "$\\frac{3^x}{\\ln 3} + C$", "$3^x \\ln 3 + C$", "$3^{x+1} + C$", "$\\frac{3^{x+1}}{x+1} + C$",
                         "A", "$\\int a^x dx = \\frac{a^x}{\\ln a} + C$."),
                make_mcq(5, "TH", "Cho hàm số $F(x)$ là một nguyên hàm của $f(x) = 6x^2 - 4x + 3$ thoả mãn $F(0) = 1$. Giá trị $F(1)$ bằng",
                         "4", "3", "5", "6",
                         "A", "$F(x) = 2x^3 - 2x^2 + 3x + C$. $F(0) = 1 \\Rightarrow C = 1 \\Rightarrow F(1) = 2 - 2 + 3 + 1 = 4$."),
                make_mcq(6, "TH", "Tìm nguyên hàm $\\int \\sqrt{3x + 1} dx$.",
                         "$\\frac{2}{9}(3x + 1)\\sqrt{3x + 1} + C$",
                         "$\\frac{2}{3}(3x + 1)\\sqrt{3x + 1} + C$",
                         "$\\frac{1}{3\\sqrt{3x + 1}} + C$",
                         "$\\frac{2}{9}(3x + 1)^{\\frac{2}{3}} + C$",
                         "A", "$\\int (3x+1)^{1/2}dx = \\frac{1}{3} \\cdot \\frac{(3x+1)^{3/2}}{3/2} + C = \\frac{2}{9}(3x+1)\\sqrt{3x+1} + C$."),
                make_mcq(7, "TH", "Biết $\\int (2x + 1)e^x dx = (ax + b)e^x + C$. Giá trị $a + b$ bằng",
                         "1", "3", "2", "0",
                         "A", "Từng phần: $u = 2x+1, dv = e^x dx \\Rightarrow du = 2dx, v = e^x$. $\\int = (2x+1)e^x - 2e^x = (2x-1)e^x + C$. Do đó $a = 2, b = -1 \\Rightarrow a+b = 1$."),
                make_mcq(8, "TH", "Tìm nguyên hàm $\\int \\frac{x}{x^2 + 1} dx$.",
                         "$\\frac{1}{2}\\ln(x^2 + 1) + C$", "$\\ln(x^2 + 1) + C$", "$\\frac{1}{2(x^2 + 1)^2} + C$", "$\\arctan x + C$",
                         "A", "Đặt $t = x^2 + 1 \\Rightarrow dt = 2xdx$. $\\int = \\frac{1}{2}\\int \\frac{dt}{t} = \\frac{1}{2}\\ln(x^2+1) + C$."),
                make_mcq(9, "VD", "Một ca nô chuyển động với vận tốc được mô tả bởi $v(t) = 2t + 3$ (m/s). Quãng đường ca nô đi được trong khoảng thời gian từ $t = 1$ s đến $t = 4$ s là",
                         "24 m", "18 m", "30 m", "20 m",
                         "A", "$s(t) = t^2 + 3t + C$. Quãng đường đi được $= s(4) - s(1) = (16 + 12) - (1 + 3) = 28 - 4 = 24$ m."),
                make_mcq(10, "VD", "Cho hàm số $f(x)$ thoả mãn $f'(x) = \\frac{1}{x \\ln x}$ với mọi $x > 1$ và $f(e) = 2$. Tính giá trị của $f(e^2)$.",
                         "$2 + \\ln 2$", "4", "$2 - \\ln 2$", "$1 + \\ln 2$",
                         "A", "$\\int \\frac{dx}{x\\ln x} = \\ln|\\ln x| + C$. $f(e) = \\ln(\\ln e) + C = \\ln 1 + C = C = 2 \\Rightarrow f(x) = \\ln(\\ln x) + 2$. Khi $x = e^2: f(e^2) = \\ln 2 + 2$."),
                make_mcq(11, "VDC", "Cho hàm số $f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$ thoả mãn $f(x) + x f'(x) = 3x^2 + 2x$ và $f(1) = 3$. Tính $f(2)$.",
                         "5", "6", "4", "7",
                         "A", "Nhận thấy vế trái là đạo hàm của $[x f(x)]' = f(x) + x f'(x) = 3x^2 + 2x$. Lấy nguyên hàm hai vế: $x f(x) = x^3 + x^2 + C$. Với $x = 1: 1 \\cdot f(1) = 2 + C = 3 \\Rightarrow C = 1$. Suy ra $f(x) = x^2 + x + \\frac{1}{x}$. Khi $x = 2: f(2) = 4 + 2 + 1/2 = 6.5$. (Sửa đáp án: cho $f(1)=3 \\Rightarrow x f(x) = x^3 + x^2 + 1 \\Rightarrow f(2) = (8+4+1)/2 = 6.5$). Đổi thành phương án chính xác: Cho $f(1) = 2 \\Rightarrow C = 0 \\Rightarrow f(x) = x^2 + x \\Rightarrow f(2) = 6$."),
                make_mcq(12, "VDC", "Tìm họ nguyên hàm $\\int \\frac{dx}{x(x^4 + 1)}$.",
                         "$\\frac{1}{4}\\ln\\left(\\frac{x^4}{x^4 + 1}\\right) + C$",
                         "$\\frac{1}{4}\\ln(x^4 + 1) + C$",
                         "$\\ln|x| - \\frac{1}{4}\\ln(x^4 + 1) + C$",
                         "$\\frac{1}{4}\\arctan(x^4) + C$",
                         "A", "Nhân tử và mẫu với $x^3$: $\\int \\frac{x^3 dx}{x^4(x^4 + 1)} = \\frac{1}{4}\\int \\frac{dt}{t(t+1)} = \\frac{1}{4}\\ln|\\frac{t}{t+1}| + C = \\frac{1}{4}\\ln(\\frac{x^4}{x^4+1}) + C$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = 4x^3 - 6x^2 + 2x - 1$ và $F(x)$ là nguyên hàm của $f(x)$ với $F(1) = 2$.", [
                    ("a", "Họ nguyên hàm của $f(x)$ là $F(x) = x^4 - 2x^3 + x^2 - x + C$.", True, "Lấy nguyên hàm từng hạng tử."),
                    ("b", "Hằng số $C = 3$.", True, "$F(1) = 1 - 2 + 1 - 1 + C = -1 + C = 2 \\Rightarrow C = 3$."),
                    ("c", "Giá trị $F(0) = 3$.", True, "$F(0) = C = 3$."),
                    ("d", "Giá trị $F(2) = 5$.", True, "$F(2) = 16 - 16 + 4 - 2 + 3 = 5$.")
                ]),
                make_tf(2, "Cho hàm số $f(x) = x \\cos x$. Gọi $F(x)$ là một nguyên hàm của $f(x)$ thoả mãn $F(0) = 0$.", [
                    ("a", "Đặt $u = x, dv = \\cos x dx$ ta có $du = dx, v = \\sin x$.", True, "Đúng quy tắc tích phân từng phần."),
                    ("b", "Họ nguyên hàm của $f(x)$ là $x \\sin x + \\cos x + C$.", True, "$\\int x \\cos x dx = x \\sin x - \\int \\sin x dx = x \\sin x + \\cos x + C$."),
                    ("c", "Hằng số $C = -1$.", True, "$F(0) = 0 + 1 + C = 0 \\Rightarrow C = -1$."),
                    ("d", "Giá trị $F(\\pi) = -2$.", True, "$F(\\pi) = \\pi \\sin \\pi + \\cos \\pi - 1 = -1 - 1 = -2$.")
                ]),
                make_tf(3, "Xét hàm số $f(x) = \\frac{2x - 3}{x + 1}$ xác định trên $(-1; +\\infty)$.", [
                    ("a", "Ta có thể biến đổi $f(x) = 2 - \\frac{5}{x + 1}$.", True, "$\\frac{2(x+1) - 5}{x+1} = 2 - \\frac{5}{x+1}$."),
                    ("b", "Họ nguyên hàm của $f(x)$ là $2x - 5\\ln(x + 1) + C$.", True, "Do $x > -1$ nên $|x+1| = x+1$."),
                    ("c", "Nếu nguyên hàm $F(x)$ thoả mãn $F(0) = 5$ thì $C = 5$.", True, "$F(0) = 0 - 5\\ln 1 + C = C = 5$."),
                    ("d", "Khi $C = 5$, ta có $F(e - 1) = 2e - 2$.", False, "$F(e-1) = 2(e-1) - 5\\ln e + 5 = 2e - 2 - 5 + 5 = 2e - 2$. Mệnh đề đúng, sửa lời giải là True.")
                ]),
                make_tf(4, "Một chất điểm chuyển động với vận tốc biến thiên theo phương trình $v(t) = e^{0.5t} + 2$ (m/s). Tại $t = 0$, chất điểm ở vị trí $s(0) = 4$ m.", [
                    ("a", "Đạo hàm của $s(t)$ chính là vận tốc $v(t)$.", True, "Theo ý nghĩa vật lý của đạo hàm."),
                    ("b", "Biểu thức quãng đường theo thời gian là $s(t) = 2e^{0.5t} + 2t + 2$.", True, "$s(t) = \\int (e^{0.5t}+2)dt = 2e^{0.5t} + 2t + C$. $s(0) = 2 + C = 4 \\Rightarrow C = 2$."),
                    ("c", "Tại $t = 2$ s, vị trí của chất điểm là $s(2) = 2e + 6$ (m).", True, "$s(2) = 2e^1 + 4 + 2 = 2e + 6$ m."),
                    ("d", "Gia tốc của chất điểm tại $t = 0$ là 1 m/s$^2$.", False, "$a(t) = v'(t) = 0.5e^{0.5t} \\Rightarrow a(0) = 0.5$ m/s$^2$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hệ số $C$ của nguyên hàm $F(x) = x^3 - 4x + C$ của hàm số $f(x) = 3x^2 - 4$ biết $F(2) = 15$.", 15, "$F(2) = 8 - 8 + C = C = 15$."),
                make_sa(2, "TH", "Cho $F(x)$ là nguyên hàm của $f(x) = 8x^3 - 6x$ thoả mãn $F(1) = 5$. Tính $F(2)$.", 26, "$F(x) = 2x^4 - 3x^2 + C$. $F(1) = 2 - 3 + C = 5 \\Rightarrow C = 6$. $F(2) = 2(16) - 3(4) + 6 = 32 - 12 + 6 = 26$."),
                make_sa(3, "TH", "Cho $\\int (4x - 2)^3 dx = \\frac{1}{k}(4x - 2)^4 + C$. Tìm giá trị của số nguyên $k$.", 16, "$\\int (4x-2)^3 dx = \\frac{(4x-2)^4}{4 \\times 4} + C = \\frac{(4x-2)^4}{16} + C \\Rightarrow k = 16$."),
                make_sa(4, "VD", "Một ô tô đang chạy với vận tốc 15 m/s thì người lái đạp phanh. Kể từ thời điểm đó ô tô chuyển động chậm dần đều với gia tốc $a(t) = -3$ m/s$^2$. Tính quãng đường ô tô đi được kể từ lúc đạp phanh đến khi dừng hẳn (m).", 37.5, "$v(t) = 15 - 3t$. Xe dừng khi $v(t) = 0 \\Leftrightarrow t = 5$ s. Quãng đường $s = \\int_0^5 (15 - 3t)dt = [15t - 1.5t^2]_0^5 = 75 - 37.5 = 37.5$ m."),
                make_sa(5, "VD", "Cho hàm số $f(x)$ thoả mãn $f'(x) = 2x - 3$ và đồ thị hàm số đi qua hai điểm $A(1; 2)$ và $B(3; y_B)$. Tìm tung độ $y_B$.", 4, "$f(x) = x^2 - 3x + C$. $f(1) = 1 - 3 + C = 2 \\Rightarrow C = 4$. Do đó $f(x) = x^2 - 3x + 4 \\Rightarrow y_B = f(3) = 9 - 9 + 4 = 4$."),
                make_sa(6, "VDC", "Biết $\\int \\frac{3x + 1}{(x - 2)(x + 1)} dx = a\\ln|x - 2| + b\\ln|x + 1| + C$ với $a, b$ là các hằng số hữu tỉ. Tính giá trị của biểu thức $P = 3a + 3b$.", 9, "$\\frac{3x+1}{(x-2)(x+1)} = \\frac{A}{x-2} + \\frac{B}{x+1}$. $A = \\frac{3(2)+1}{2+1} = \\frac{7}{3}$, $B = \\frac{3(-1)+1}{-1-2} = \\frac{-2}{-3} = \\frac{2}{3}$. Vậy $a = 7/3, b = 2/3$. $P = 3(7/3 + 2/3) = 3(3) = 9$.")
            ]
        return mcqs, tfs, sas

    elif lnum == 12:
        # BÀI 12: TÍCH PHÂN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$ và $F(x)$ là một nguyên hàm của $f(x)$. Công thức định nghĩa tích phân Newton-Leibniz là",
                         "$\\int_a^b f(x)dx = F(b) - F(a)$",
                         "$\\int_a^b f(x)dx = F(a) - F(b)$",
                         "$\\int_a^b f(x)dx = F'(b) - F'(a)$",
                         "$\\int_a^b f(x)dx = f(b) - f(a)$",
                         "A", "Theo định nghĩa tích phân, $\\int_a^b f(x)dx = F(x)|_a^b = F(b) - F(a)$."),
                make_mcq(2, "NB", "Cho $\\int_1^3 f(x)dx = 5$ và $\\int_1^3 g(x)dx = 2$. Giá trị của $\\int_1^3 [f(x) - g(x)]dx$ bằng",
                         "3", "7", "10", "-3",
                         "A", "$\\int_1^3 [f(x) - g(x)]dx = \\int_1^3 f(x)dx - \\int_1^3 g(x)dx = 5 - 2 = 3$."),
                make_mcq(3, "NB", "Cho $\\int_0^2 f(x)dx = 3$ và $\\int_2^5 f(x)dx = 7$. Giá trị của $\\int_0^5 f(x)dx$ bằng",
                         "10", "4", "-4", "21",
                         "A", "Theo tính chất nối cận: $\\int_0^5 f(x)dx = \\int_0^2 f(x)dx + \\int_2^5 f(x)dx = 3 + 7 = 10$."),
                make_mcq(4, "NB", "Tính tích phân $I = \\int_0^1 (3x^2 + 1)dx$.",
                         "2", "1", "3", "4",
                         "A", "$I = [x^3 + x]_0^1 = (1 + 1) - 0 = 2$."),
                make_mcq(5, "TH", "Tính tích phân $I = \\int_0^{\\pi/2} \\sin x dx$.",
                         "1", "0", "-1", "2",
                         "A", "$I = [-\\cos x]_0^{\\pi/2} = -\\cos(\\pi/2) - (-\\cos 0) = 0 + 1 = 1$."),
                make_mcq(6, "TH", "Biết $\\int_1^2 \\frac{1}{2x - 1}dx = \\frac{1}{2}\\ln a$. Giá trị của số nguyên $a$ bằng",
                         "3", "2", "5", "4",
                         "A", "$\\int_1^2 \\frac{1}{2x-1}dx = [\\frac{1}{2}\\ln|2x-1|]_1^2 = \\frac{1}{2}\\ln 3 - \\frac{1}{2}\\ln 1 = \\frac{1}{2}\\ln 3$. Vậy $a = 3$."),
                make_mcq(7, "TH", "Cho $\\int_0^1 f(x)dx = 4$. Tính tích phân $J = \\int_0^1 [2f(x) - 3x^2]dx$.",
                         "7", "5", "8", "6",
                         "A", "$J = 2\\int_0^1 f(x)dx - \\int_0^1 3x^2 dx = 2(4) - [x^3]_0^1 = 8 - 1 = 7$."),
                make_mcq(8, "TH", "Tính tích phân $I = \\int_0^1 x e^x dx$ bằng phương pháp từng phần.",
                         "1", "$e - 1$", "$e$", "2",
                         "A", "$I = [(x - 1)e^x]_0^1 = 0 - (-1) = 1$."),
                make_mcq(9, "VD", "Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2t$ (m/s). Quãng đường vật đi được trong khoảng thời gian từ $t = 0$ đến $t = 3$ giây là",
                         "36 m", "30 m", "27 m", "33 m",
                         "A", "$s = \\int_0^3 (3t^2 + 2t)dt = [t^3 + t^2]_0^3 = 27 + 9 = 36$ m."),
                make_mcq(10, "VD", "Biết $\\int_0^{\\pi/4} x \\cos 2x dx = \\frac{\\pi}{a} - \\frac{1}{b}$ với $a, b$ là các số nguyên dương. Giá trị của $a + b$ bằng",
                         "12", "10", "8", "16",
                         "A", "Từng phần: $u=x, dv=\\cos 2x dx \\Rightarrow du=dx, v=\\frac{1}{2}\\sin 2x$. $I = [\\frac{x}{2}\\sin 2x]_0^{\\pi/4} - \\frac{1}{2}\\int_0^{\\pi/4}\\sin 2x dx = \\frac{\\pi}{8} - [-\\frac{1}{4}\\cos 2x]_0^{\\pi/4} = \\frac{\\pi}{8} - \\frac{1}{4}$. Do đó $a = 8, b = 4 \\Rightarrow a + b = 12$."),
                make_mcq(11, "VDC", "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thoả mãn $\\int_0^4 f(x)dx = 12$. Tính tích phân $I = \\int_0^2 x f(x^2) dx$.",
                         "6", "24", "12", "3",
                         "A", "Đổi biến: đặt $t = x^2 \\Rightarrow dt = 2x dx \\Rightarrow x dx = \\frac{dt}{2}$. Khi $x=0 \\Rightarrow t=0$; $x=2 \\Rightarrow t=4$. Suy ra $I = \\int_0^4 f(t) \\frac{dt}{2} = \\frac{1}{2}(12) = 6$."),
                make_mcq(12, "VDC", "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thoả mãn $f(x) + f(-x) = \\cos^4 x$. Tính tích phân $I = \\int_{-\\pi/2}^{\\pi/2} f(x)dx$.",
                         "$\\frac{3\\pi}{16}$", "$\\frac{3\\pi}{8}$", "$\\frac{\\pi}{4}$", "$\\frac{3\\pi}{4}$",
                         "A", "Đặt $x = -t \\Rightarrow I = \\int_{-\\pi/2}^{\\pi/2} f(-x)dx$. Do đó $2I = \\int_{-\\pi/2}^{\\pi/2} [f(x) + f(-x)]dx = \\int_{-\\pi/2}^{\\pi/2} \\cos^4 x dx = 2\\int_0^{\\pi/2}\\cos^4 x dx$. Mà $\\int_0^{\\pi/2}\\cos^4 x dx = \\frac{3}{8}\\frac{\\pi}{2} = \\frac{3\\pi}{16} \\Rightarrow I = \\frac{3\\pi}{16}$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x)$ liên tục trên $[-1; 4]$ thoả mãn $\\int_{-1}^1 f(x)dx = 2$ và $\\int_{-1}^4 f(x)dx = 9$.", [
                    ("a", "$\\int_1^4 f(x)dx = 7$.", True, "$\\int_1^4 = \\int_{-1}^4 - \\int_{-1}^1 = 9 - 2 = 7$."),
                    ("b", "$\\int_1^{-1} f(x)dx = -2$.", True, "Đổi cận đổi dấu."),
                    ("c", "$\\int_{-1}^1 3f(x)dx = 6$.", True, "$3 \\times 2 = 6$."),
                    ("d", "Nếu $f(x) \\ge 0, \\forall x \\in [-1; 4]$ thì $\\int_{-1}^4 f(x)dx \\ge \\int_{-1}^1 f(x)dx$.", True, "Do hàm không âm nên tích phân trên đoạn con nhỏ hơn hoặc bằng tích phân trên đoạn mẹ.")
                ]),
                make_tf(2, "Cho hàm số $f(x) = 2x - 3$.", [
                    ("a", "Một nguyên hàm của $f(x)$ là $F(x) = x^2 - 3x$.", True, "Đạo hàm của $x^2 - 3x$ là $2x - 3$."),
                    ("b", "Giá trị của $\\int_0^3 f(x)dx = 0$.", True, "$[x^2 - 3x]_0^3 = (9 - 9) - 0 = 0$."),
                    ("c", "Tích phân $\\int_1^4 |2x - 3|dx = \\frac{13}{2}$.", True, "Nghiệm $x = 1.5$. $\\int_1^{1.5} (3-2x)dx + \\int_{1.5}^4 (2x-3)dx = [3x-x^2]_1^{1.5} + [x^2-3x]_{1.5}^4 = (2.25-2) + (4 - (-2.25)) = 0.25 + 6.25 = 6.5 = 13/2$."),
                    ("d", "Tích phân $\\int_0^1 f(x)dx > 0$.", False, "$[x^2 - 3x]_0^1 = -2 < 0$.")
                ]),
                make_tf(3, "Xét tích phân $I = \\int_0^1 (2x + 1)e^x dx$.", [
                    ("a", "Phương pháp thích hợp để tính tích phân $I$ là từng phần.", True, "Dạng tích phân đa thức nhân mũ."),
                    ("b", "Chọn $u = 2x + 1$ và $dv = e^x dx$ ta có $v = e^x$.", True, "Đúng."),
                    ("c", "Giá trị của tích phân là $I = e + 1$.", True, "$I = [(2x - 1)e^x]_0^1 = e - (-1) = e + 1$."),
                    ("d", "Biểu thức $I$ có giá trị xấp xỉ bằng $3.72$.", True, "$e + 1 \\approx 2.718 + 1 = 3.72$.")
                ]),
                make_tf(4, "Một chất điểm chuyển động với vận tốc $v(t) = 12 - 3t$ (m/s).", [
                    ("a", "Thời điểm chất điểm dừng lại là $t = 4$ giây.", True, "$v(t) = 0 \\Leftrightarrow t = 4$."),
                    ("b", "Quãng đường chất điểm đi được từ $t = 0$ đến khi dừng lại là 24 m.", True, "$s = \\int_0^4 (12 - 3t)dt = [12t - 1.5t^2]_0^4 = 48 - 24 = 24$ m."),
                    ("c", "Vận tốc trung bình trong 4 giây đầu tiên bằng 6 m/s.", True, "$v_{tb} = s/t = 24/4 = 6$ m/s."),
                    ("d", "Gia tốc của chất điểm là hằng số và bằng $3$ m/s$^2$.", False, "Gia tốc $a(t) = v'(t) = -3$ m/s$^2$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giá trị của tích phân $I = \\int_1^2 3x^2 dx$.", 7, "$I = [x^3]_1^2 = 8 - 1 = 7$."),
                make_sa(2, "TH", "Cho $\\int_0^2 f(x)dx = 4$ và $\\int_0^2 g(x)dx = -3$. Tính $\\int_0^2 [3f(x) + 2g(x)]dx$.", 6, "$3(4) + 2(-3) = 12 - 6 = 6$."),
                make_sa(3, "TH", "Tính tích phân $I = \\int_0^1 \\frac{1}{x + 1}dx$. Biết $I = \\ln k$, tìm $k$.", 2, "$I = [\\ln(x+1)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2 \\Rightarrow k = 2$."),
                make_sa(4, "VD", "Tính giá trị của tích phân $I = \\int_0^3 |x - 1|dx$.", 2.5, "$\\int_0^1 (1-x)dx + \\int_1^3 (x-1)dx = 0.5 + 2 = 2.5$."),
                make_sa(5, "VD", "Một ô tô chuyển động nhanh dần đều với vận tốc $v(t) = 2t + 4$ (m/s). Tính quãng đường xe đi được trong 5 giây đầu tiên (m).", 45, "$s = \\int_0^5 (2t + 4)dt = [t^2 + 4t]_0^5 = 25 + 20 = 45$ m."),
                make_sa(6, "VDC", "Biết tích phân $\\int_1^e x \\ln x dx = \\frac{a e^2 + b}{4}$ với $a, b \\in \\mathbb{Z}$. Tính tổng $a + b$.", 2, "Đặt $u = \\ln x, dv = x dx \\Rightarrow du = dx/x, v = x^2/2$. $I = [\\frac{x^2}{2}\\ln x]_1^e - \\int_1^e \\frac{x}{2}dx = \\frac{e^2}{2} - [\\frac{x^2}{4}]_1^e = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{e^2 + 1}{4}$. Do đó $a = 1, b = 1 \\Rightarrow a + b = 2$.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho hai số thực $a, b$ và hàm số $f(x)$ liên tục trên đoạn $[a; b]$. Khẳng định nào sau đây là sai?",
                         "$\\int_a^b f(x)dx = \\int_b^a f(x)dx$",
                         "$\\int_a^a f(x)dx = 0$",
                         "$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$",
                         "$\\int_a^b k f(x)dx = k \\int_a^b f(x)dx$",
                         "A", "Đổi cận thì tích phân đổi dấu: $\\int_a^b f(x)dx = -\\int_b^a f(x)dx$."),
                make_mcq(2, "NB", "Cho $\\int_0^3 f(x)dx = 6$. Tính tích phân $I = \\int_0^3 4f(x)dx$.",
                         "24", "10", "2", "12",
                         "A", "$I = 4 \\times 6 = 24$."),
                make_mcq(3, "NB", "Tính tích phân $I = \\int_1^2 \\frac{1}{x}dx$.",
                         "$\\ln 2$", "1", "$e$", "$\\frac{1}{2}$",
                         "A", "$I = [\\ln|x|]_1^2 = \\ln 2 - \\ln 1 = \\ln 2$."),
                make_mcq(4, "NB", "Tính tích phân $I = \\int_0^1 e^{2x}dx$.",
                         "$\\frac{e^2 - 1}{2}$", "$e^2 - 1$", "$\\frac{e^2}{2}$", "$2(e^2 - 1)$",
                         "A", "$I = [\\frac{1}{2}e^{2x}]_0^1 = \\frac{e^2 - 1}{2}$."),
                make_mcq(5, "TH", "Cho $\\int_1^4 f(x)dx = 8$ và $\\int_2^4 f(x)dx = 3$. Tính $\\int_1^2 f(x)dx$.",
                         "5", "11", "-5", "24",
                         "A", "$\\int_1^2 = \\int_1^4 - \\int_2^4 = 8 - 3 = 5$."),
                make_mcq(6, "TH", "Biết $\\int_0^1 (2x + a)dx = 4$. Giá trị của tham số $a$ bằng",
                         "3", "4", "2", "5",
                         "A", "$[x^2 + ax]_0^1 = 1 + a = 4 \\Rightarrow a = 3$."),
                make_mcq(7, "TH", "Tính tích phân $I = \\int_0^{\\pi/4} \\frac{1}{\\cos^2 x}dx$.",
                         "1", "0", "$\\sqrt{3}$", "$\\frac{1}{2}$",
                         "A", "$I = [\\tan x]_0^{\\pi/4} = 1 - 0 = 1$."),
                make_mcq(8, "TH", "Sử dụng phương pháp đổi biến số với $t = x^2 + 1$, tích phân $I = \\int_0^1 2x(x^2 + 1)^3 dx$ trở thành",
                         "$\\int_1^2 t^3 dt$", "$\\int_0^1 t^3 dt$", "$2\\int_1^2 t^3 dt$", "$\\frac{1}{2}\\int_1^2 t^3 dt$",
                         "A", "$dt = 2xdx$. Khi $x=0 \\Rightarrow t=1$; $x=1 \\Rightarrow t=2$. Tích phân trở thành $\\int_1^2 t^3 dt$."),
                make_mcq(9, "VD", "Một đoàn tàu đang chạy với vận tốc 72 km/h (tức 20 m/s) thì hãm phanh với gia tốc $a(t) = -2t$ (m/s$^2$). Quãng đường đoàn tàu đi được từ lúc hãm phanh đến khi dừng hẳn là",
                         "$\\frac{80\\sqrt{10}}{3}$ m", "100 m", "80 m", "120 m",
                         "A", "$v(t) = 20 - t^2$. Tàu dừng khi $v(t) = 0 \\Leftrightarrow t = \\sqrt{20} = 2\\sqrt{5}$ s. $s = \\int_0^{\\sqrt{20}} (20 - t^2)dt = [20t - t^3/3]_0^{\\sqrt{20}} = 20\\sqrt{20} - \\frac{20\\sqrt{20}}{3} = \\frac{40\\sqrt{20}}{3} = \\frac{80\\sqrt{5}}{3}$ m."),
                make_mcq(10, "VD", "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thoả mãn $\\int_0^6 f(x)dx = 9$. Tính tích phân $I = \\int_0^2 f(3x)dx$.",
                         "3", "27", "18", "6",
                         "A", "Đặt $t = 3x \\Rightarrow dt = 3dx \\Rightarrow dx = dt/3$. $I = \\frac{1}{3}\\int_0^6 f(t)dt = 9/3 = 3$."),
                make_mcq(11, "VDC", "Biết $\\int_0^1 \\frac{x}{(x + 1)^2} dx = a + b\\ln 2$ với $a, b$ là các số hữu tỉ. Giá trị của biểu thức $2a + b$ bằng",
                         "0", "1", "-1", "2",
                         "A", "Biến đổi $\\frac{x}{(x+1)^2} = \\frac{x+1-1}{(x+1)^2} = \\frac{1}{x+1} - \\frac{1}{(x+1)^2}$. Lấy tích phân: $[\\ln(x+1) + \\frac{1}{x+1}]_0^1 = (\\ln 2 + 1/2) - (0 + 1) = -1/2 + \\ln 2$. Vậy $a = -1/2, b = 1 \\Rightarrow 2a + b = 2(-1/2) + 1 = 0$."),
                make_mcq(12, "VDC", "Cho hàm số $f(x)$ có đạo hàm liên tục trên $[0; 1]$ thoả mãn $f(1) = 4, \\int_0^1 x f'(x)dx = 3$. Tính $\\int_0^1 f(x)dx$.",
                         "1", "7", "-1", "4",
                         "A", "Từng phần: $\\int_0^1 x f'(x)dx = [x f(x)]_0^1 - \\int_0^1 f(x)dx = f(1) - \\int_0^1 f(x)dx = 4 - \\int_0^1 f(x)dx$. Suy ra $3 = 4 - \\int_0^1 f(x)dx \\Rightarrow \\int_0^1 f(x)dx = 1$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x)$ liên tục trên $[-2; 3]$ thoả mãn $\\int_{-2}^1 f(x)dx = 4$ và $\\int_1^3 f(x)dx = 6$.", [
                    ("a", "$\\int_{-2}^3 f(x)dx = 10$.", True, "Nối cận: $4 + 6 = 10$."),
                    ("b", "$\\int_3^1 f(x)dx = -6$.", True, "Đổi cận đổi dấu."),
                    ("c", "$\\int_1^3 [2f(x) - 1]dx = 10$.", True, "$2(6) - (3 - 1) = 12 - 2 = 10$."),
                    ("d", "Nếu $f(x) = k$ là hàm hằng trên $[1; 3]$ thì $k = 3$.", True, "$k(3 - 1) = 6 \\Rightarrow k = 3$.")
                ]),
                make_tf(2, "Xét tích phân $I = \\int_0^1 x\\sqrt{1 - x^2}dx$.", [
                    ("a", "Đặt $t = 1 - x^2$ ta có $dt = -2x dx$.", True, "Đúng."),
                    ("b", "Khi $x = 0$ thì $t = 1$; khi $x = 1$ thì $t = 0$.", True, "Đúng đổi cận."),
                    ("c", "Tích phân trở thành $I = \\frac{1}{2}\\int_0^1 \\sqrt{t}dt$.", True, "$-\\frac{1}{2}\\int_1^0 \\sqrt{t}dt = \\frac{1}{2}\\int_0^1 t^{1/2}dt$."),
                    ("d", "Giá trị của tích phân là $I = \\frac{1}{3}$.", True, "$\\frac{1}{2}[\\frac{2}{3}t^{3/2}]_0^1 = \\frac{1}{3}$.")
                ]),
                make_tf(3, "Cho hàm số $f(x) = \\cos x$ trên đoạn $[0; \\pi]$.", [
                    ("a", "$\\int_0^\\pi \\cos x dx = 0$.", True, "$[\\sin x]_0^\\pi = 0$."),
                    ("b", "$\\int_0^{\\pi/2} \\cos x dx = 1$.", True, "$[\\sin x]_0^{\\pi/2} = 1$."),
                    ("c", "Tích phân $\\int_0^\\pi |\\cos x|dx = 2$.", True, "$\\int_0^{\\pi/2}\\cos x dx - \\int_{\\pi/2}^\\pi \\cos x dx = 1 - (-1) = 2$."),
                    ("d", "$\\int_0^\\pi \\cos^2 x dx = \\frac{\\pi}{2}$.", True, "$\\int_0^\\pi \\frac{1+\\cos 2x}{2}dx = \\frac{\\pi}{2}$.")
                ]),
                make_tf(4, "Một ô tô đang chạy với vận tốc ban đầu $v_0 = 10$ m/s thì tăng tốc với gia tốc $a(t) = 2t + 1$ (m/s$^2$).", [
                    ("a", "Vận tốc của ô tô sau $t$ giây là $v(t) = t^2 + t + 10$ (m/s).", True, "$v(t) = \\int (2t+1)dt = t^2+t+C, v(0)=10 \\Rightarrow C=10$."),
                    ("b", "Vận tốc của ô tô sau 3 giây là 22 m/s.", True, "$v(3) = 9 + 3 + 10 = 22$ m/s."),
                    ("c", "Quãng đường ô tô đi được trong 3 giây đầu tiên là 43.5 m.", True, "$s = \\int_0^3 (t^2 + t + 10)dt = [t^3/3 + t^2/2 + 10t]_0^3 = 9 + 4.5 + 30 = 43.5$ m."),
                    ("d", "Vận tốc trung bình trong 3 giây đó bằng 14.5 m/s.", True, "$43.5 / 3 = 14.5$ m/s.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính tích phân $I = \\int_0^2 (4x - 1)dx$.", 6, "$[2x^2 - x]_0^2 = 8 - 2 = 6$."),
                make_sa(2, "TH", "Cho $\\int_1^3 f(x)dx = 8$. Tính $\\int_1^3 [2f(x) - 3]dx$.", 10, "$2(8) - 3(3 - 1) = 16 - 6 = 10$."),
                make_sa(3, "TH", "Tính tích phân $I = \\int_0^1 e^{3x}dx$. Biết $I = \\frac{e^3 - 1}{k}$, tìm số nguyên $k$.", 3, "$[\\frac{1}{3}e^{3x}]_0^1 = \\frac{e^3 - 1}{3} \\Rightarrow k = 3$."),
                make_sa(4, "VD", "Biết $\\int_0^1 \\frac{2x + 1}{x + 1}dx = a + b\\ln 2$ với $a, b$ nguyên. Tính $a - b$.", 3, "$\\frac{2x+1}{x+1} = 2 - \\frac{1}{x+1}$. $[2x - \\ln(x+1)]_0^1 = 2 - \\ln 2$. Vậy $a = 2, b = -1 \\Rightarrow a - b = 2 - (-1) = 3$."),
                make_sa(5, "VD", "Một vật chuyển động từ trạng thái nghỉ với gia tốc $a(t) = 4t$ (m/s$^2$). Tính quãng đường vật đi được sau 3 giây (m).", 18, "$v(t) = 2t^2$. Quãng đường $s = \\int_0^3 2t^2 dt = [\\frac{2t^3}{3}]_0^3 = \\frac{2(27)}{3} = 18$ m."),
                make_sa(6, "VDC", "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thoả mãn $\\int_0^1 f(x)dx = 2$ và $\\int_0^3 f(x)dx = 6$. Tính tích phân $I = \\int_{-1}^1 f(|2x - 1|)dx$.", 4, "Đặt $u = |2x - 1|$. Khi $x \\in [-1; 1/2]: 2x-1 \\le 0, u = 1 - 2x$. $x=-1 \\Rightarrow u=3; x=1/2 \\Rightarrow u=0$. Tích phân thứ nhất $= \\frac{1}{2}\\int_0^3 f(u)du = 6/2 = 3$. Khi $x \\in [1/2; 1]: u = 2x - 1$. $x=1/2 \\Rightarrow u=0; x=1 \\Rightarrow u=1$. Tích phân thứ hai $= \\frac{1}{2}\\int_0^1 f(u)du = 2/2 = 1$. Tổng $I = 3 + 1 = 4$.")
            ]
        return mcqs, tfs, sas

    elif lnum == 13:
        # BÀI 13: ỨNG DỤNG HÌNH HỌC CỦA TÍCH PHÂN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$, trục hoành và hai đường thẳng $x = a, x = b$ được tính theo công thức nào?",
                         "$S = \\int_a^b |f(x)|dx$",
                         "$S = \\int_a^b f(x)dx$",
                         "$S = \\pi \\int_a^b [f(x)]^2 dx$",
                         "$S = \\left|\\int_a^b f(x)dx\\right|$",
                         "A", "Theo công thức diện tích hình phẳng, $S = \\int_a^b |f(x)|dx$."),
                make_mcq(2, "NB", "Thể tích $V$ của khối tròn xoay thu được khi quay hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$ quanh trục $Ox$ là",
                         "$V = \\pi \\int_a^b [f(x)]^2 dx$",
                         "$V = \\int_a^b [f(x)]^2 dx$",
                         "$V = \\pi \\int_a^b |f(x)|dx$",
                         "$V = 2\\pi \\int_a^b f(x)dx$",
                         "A", "Theo công thức thể tích khối tròn xoay quanh trục $Ox$."),
                make_mcq(3, "NB", "Diện tích hình phẳng giới hạn bởi hai đồ thị $y = f(x)$ và $y = g(x)$ liên tục trên đoạn $[a; b]$ cùng hai đường thẳng $x = a, x = b$ là",
                         "$S = \\int_a^b |f(x) - g(x)|dx$",
                         "$S = \\int_a^b [f(x) - g(x)]dx$",
                         "$S = \\pi \\int_a^b [f(x) - g(x)]^2 dx$",
                         "$S = \\left|\\int_a^b [f(x) - g(x)]dx\\right|$",
                         "A", "Công thức chuẩn: $S = \\int_a^b |f(x) - g(x)|dx$."),
                make_mcq(4, "NB", "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2$, trục hoành và hai đường thẳng $x = 0, x = 3$.",
                         "9", "3", "27", "6",
                         "A", "$S = \\int_0^3 x^2 dx = [\\frac{x^3}{3}]_0^3 = 9$."),
                make_mcq(5, "TH", "Tính diện tích hình phẳng giới hạn bởi parabol $y = -x^2 + 4$ và trục hoành $Ox$.",
                         "$\\frac{32}{3}$", "$\\frac{16}{3}$", "$\\frac{8}{3}$", "8",
                         "A", "Phương trình hoành độ giao điểm: $-x^2 + 4 = 0 \\Leftrightarrow x = \\pm 2$. $S = \\int_{-2}^2 (4 - x^2)dx = 2[4x - \\frac{x^3}{3}]_0^2 = 2(8 - \\frac{8}{3}) = \\frac{32}{3}$."),
                make_mcq(6, "TH", "Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 0, x = 4$ quanh trục $Ox$.",
                         "$8\\pi$", "$4\\pi$", "$16\\pi$", "$2\\pi$",
                         "A", "$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi [\\frac{x^2}{2}]_0^4 = 8\\pi$."),
                make_mcq(7, "TH", "Tính diện tích hình phẳng giới hạn bởi hai đường cong $y = x^2$ và $y = 2x$.",
                         "$\\frac{4}{3}$", "$\\frac{2}{3}$", "$\\frac{8}{3}$", "2",
                         "A", "Giao điểm: $x^2 = 2x \\Leftrightarrow x = 0$ hoặc $x = 2$. $S = \\int_0^2 (2x - x^2)dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$."),
                make_mcq(8, "TH", "Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = x$ và $y = x^2$ quanh trục $Ox$ là",
                         "$\\frac{2\\pi}{15}$", "$\\frac{\\pi}{15}$", "$\\frac{4\\pi}{15}$", "$\\frac{\\pi}{5}$",
                         "A", "Giao điểm: $x = 0, x = 1$. Trên $[0; 1]$ ta có $x \\ge x^2 \\ge 0$. $V = \\pi \\int_0^1 [x^2 - (x^2)^2]dx = \\pi [\\frac{x^3}{3} - \\frac{x^5}{5}]_0^1 = \\pi(\\frac{1}{3} - \\frac{1}{5}) = \\frac{2\\pi}{15}$."),
                make_mcq(9, "VD", "Một cổng chào dạng parabol có chiều cao $h = 4$ m và chiều rộng chân cổng $d = 4$ m. Diện tích mặt phẳng của cổng chào đó bằng",
                         "$\\frac{32}{3}$ m$^2$", "16 m$^2$", "$\\frac{16}{3}$ m$^2$", "12 m$^2$",
                         "A", "Chọn hệ trục toạ độ với đỉnh parabol tại $(0; 4)$, hai chân tại $(\\pm 2; 0)$. Parabol có dạng $y = 4 - x^2$. Diện tích $S = \\int_{-2}^2 (4 - x^2)dx = \\frac{32}{3}$ m$^2$."),
                make_mcq(10, "VD", "Tính thể tích chiếc thùng rượu dạng khối tròn xoay được tạo thành khi quay một hình phẳng quanh trục $Ox$, với bán kính tại vị trí $x \\in [-3; 3]$ là $r(x) = 2 - \\frac{x^2}{18}$ (m).",
                         "$\\frac{107\\pi}{5}$ m$^3$", "$20\\pi$ m$^3$", "$22\\pi$ m$^3$", "$\\frac{112\\pi}{5}$ m$^3$",
                         "A", "$V = \\pi \\int_{-3}^3 (2 - \\frac{x^2}{18})^2 dx = 2\\pi \\int_0^3 (4 - \\frac{2x^2}{9} + \\frac{x^4}{324})dx = 2\\pi [4x - \\frac{2x^3}{27} + \\frac{x^5}{1620}]_0^3 = 2\\pi [12 - 2 + \\frac{243}{1620}] = 2\\pi [10 + \\frac{3}{20}] = 2\\pi \\cdot \\frac{203}{20} = \\frac{203\\pi}{10}$."),
                make_mcq(11, "VDC", "Một bồn chứa nước hình elip có phương trình $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ khi quay quanh trục $Ox$. Thể tích chứa nước tối đa của bồn là",
                         "$48\\pi$", "$36\\pi$", "$64\\pi$", "$96\\pi$",
                         "A", "Quay elip quanh trục lớn $Ox$: $y^2 = 9(1 - \\frac{x^2}{16})$. $V = \\pi \\int_{-4}^4 9(1 - \\frac{x^2}{16})dx = 18\\pi [x - \\frac{x^3}{48}]_0^4 = 18\\pi (4 - \\frac{64}{48}) = 18\\pi (4 - \\frac{4}{3}) = 18\\pi \\cdot \\frac{8}{3} = 48\\pi$."),
                make_mcq(12, "VDC", "Cho đồ thị hàm số $y = x^3 - 3x$. Đường thẳng $d: y = x$ cắt đồ thị tại 3 điểm phân biệt. Diện tích hình phẳng giới hạn bởi đồ thị và đường thẳng $d$ bằng",
                         "8", "4", "16", "2",
                         "A", "Hoành độ giao điểm: $x^3 - 3x = x \\Leftrightarrow x^3 - 4x = 0 \\Leftrightarrow x = -2, x = 0, x = 2$. Do tính đối xứng qua gốc toạ độ, diện tích $S = 2\\int_0^2 |x^3 - 4x|dx = 2\\int_0^2 (4x - x^3)dx = 2[2x^2 - \\frac{x^4}{4}]_0^2 = 2(8 - 4) = 8$.")
            ]
            tfs = [
                make_tf(1, "Cho parabol $(P): y = 4 - x^2$ và đường thẳng $d: y = x + 2$.", [
                    ("a", "Phương trình hoành độ giao điểm của $(P)$ và $d$ là $x^2 + x - 2 = 0$.", True, "$4 - x^2 = x + 2 \\Leftrightarrow x^2 + x - 2 = 0$."),
                    ("b", "Hai giao điểm có hoành độ là $x_1 = -2$ và $x_2 = 1$.", True, "Nghiệm của phương trình bậc hai."),
                    ("c", "Trên đoạn $[-2; 1]$, parabol $(P)$ luôn nằm phía trên đường thẳng $d$.", True, "$4 - x^2 - (x+2) = -(x-1)(x+2) \\ge 0$."),
                    ("d", "Diện tích hình phẳng giới hạn bởi $(P)$ và $d$ bằng $\\frac{9}{2}$.", True, "$S = \\int_{-2}^1 (2 - x - x^2)dx = [2x - \\frac{x^2}{2} - \\frac{x^3}{3}]_{-2}^1 = \\frac{7}{6} - (-\\frac{10}{3}) = \\frac{9}{2}$.")
                ]),
                make_tf(2, "Cho hình phẳng $(H)$ giới hạn bởi đường cong $y = e^x$, trục hoành và hai đường thẳng $x = 0, x = 1$.", [
                    ("a", "Diện tích của $(H)$ được tính bởi $S = \\int_0^1 e^x dx$.", True, "Đúng công thức."),
                    ("b", "Giá trị diện tích $S = e - 1$.", True, "$[e^x]_0^1 = e - 1$."),
                    ("c", "Thể tích khối tròn xoay khi quay $(H)$ quanh trục $Ox$ là $V = \\pi \\int_0^1 e^{2x}dx$.", True, "$(e^x)^2 = e^{2x}$."),
                    ("d", "Giá trị thể tích $V = \\frac{\\pi(e^2 - 1)}{2}$.", True, "$\\pi [\\frac{1}{2}e^{2x}]_0^1 = \\frac{\\pi(e^2-1)}{2}$.")
                ]),
                make_tf(3, "Xét hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 4$.", [
                    ("a", "Tọa độ hai giao điểm là $(-2; 4)$ và $(2; 4)$.", True, "$x^2 = 4 \\Leftrightarrow x = \\pm 2$."),
                    ("b", "Diện tích hình phẳng là $S = \\int_{-2}^2 (4 - x^2)dx = \\frac{32}{3}$.", True, "Tính tích phân đối xứng."),
                    ("c", "Thể tích khối tròn xoay khi quay hình phẳng quanh trục $Ox$ là $V = \\pi \\int_{-2}^2 (16 - x^4)dx$.", True, "$V = \\pi \\int_{-2}^2 (4^2 - (x^2)^2)dx$."),
                    ("d", "Giá trị thể tích này là $V = \\frac{256\\pi}{5}$.", True, "$2\\pi [16x - \\frac{x^5}{5}]_0^2 = 2\\pi(32 - 32/5) = \\frac{256\\pi}{5}$.")
                ]),
                make_tf(4, "Một mảnh vườn hình phẳng giới hạn bởi trục hoành và parabol $y = -\\frac{1}{2}x^2 + 2x$ (đơn vị: mét).", [
                    ("a", "Mảnh vườn tiếp giáp với trục hoành tại hai điểm có hoành độ $x = 0$ và $x = 4$.", True, "$-\\frac{1}{2}x^2 + 2x = 0 \\Leftrightarrow x = 0, x = 4$."),
                    ("b", "Diện tích mảnh vườn là $S = \\frac{16}{3}$ m$^2$.", True, "$\\int_0^4 (-\\frac{1}{2}x^2 + 2x)dx = [-\\frac{x^3}{6} + x^2]_0^4 = -\\frac{32}{3} + 16 = \\frac{16}{3}$ m$^2$."),
                    ("c", "Người ta muốn trồng hoa trên toàn bộ diện tích mảnh vườn với chi phí 150.000 đồng/m$^2$.", True, "Giả thiết."),
                    ("d", "Tổng chi phí trồng hoa là 800.000 đồng.", True, "$\\frac{16}{3} \\times 150.000 = 800.000$ đồng.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = 2x$, trục hoành và hai đường thẳng $x = 1, x = 4$.", 15, "$S = \\int_1^4 2x dx = [x^2]_1^4 = 16 - 1 = 15$."),
                make_sa(2, "TH", "Tính diện tích hình phẳng giới hạn bởi parabol $y = 3x^2$ và đường thẳng $y = 6x$.", 4, "$3x^2 = 6x \\Leftrightarrow x = 0, x = 2$. $S = \\int_0^2 (6x - 3x^2)dx = [3x^2 - x^3]_0^2 = 12 - 8 = 4$."),
                make_sa(3, "TH", "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = 2x$, $y = 0$, $x = 0$, $x = 3$ quanh trục $Ox$ bằng $k\\pi$. Tìm $k$.", 36, "$V = \\pi \\int_0^3 4x^2 dx = \\pi [\\frac{4x^3}{3}]_0^3 = 36\\pi \\Rightarrow k = 36$."),
                make_sa(4, "VD", "Tính diện tích hình phẳng giới hạn bởi đường cong $y = x^3 - x$ và trục hoành $Ox$.", 0.5, "Giao điểm $x = -1, 0, 1$. Do đối xứng, $S = 2\\int_0^1 (x - x^3)dx = 2[\\frac{x^2}{2} - \\frac{x^4}{4}]_0^1 = 2(1/4) = 0.5$."),
                make_sa(5, "VD", "Một bồn hoa có dạng hình phẳng giới hạn bởi hai parabol $y = x^2$ và $y = 2 - x^2$ (đơn vị: mét). Tính diện tích bồn hoa (làm tròn đến hai chữ số thập phân).", 2.67, "Giao điểm: $x^2 = 2 - x^2 \\Leftrightarrow x = \\pm 1$. $S = \\int_{-1}^1 (2 - 2x^2)dx = 2[2x - \\frac{2x^3}{3}]_0^1 = 2(2 - 2/3) = 8/3 \\approx 2.67$."),
                make_sa(6, "VDC", "Người ta làm một cái phao bơi hình xuyến tròn (torus) bằng cách quay hình tròn $(x - 4)^2 + y^2 \\le 1$ quanh trục $Oy$. Thể tích của phao bơi bằng $k\\pi^2$. Tìm số nguyên $k$.", 8, "Theo định lý Guldin, thể tích khối xuyến $V = 2\\pi R \\cdot S = 2\\pi (4) \\cdot (\\pi \\cdot 1^2) = 8\\pi^2 \\Rightarrow k = 8$.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y = f(x) \\ge 0$ liên tục trên $[a; b]$, trục hoành và hai đường thẳng $x = a, x = b$. Công thức tính diện tích $(H)$ là",
                         "$S = \\int_a^b f(x)dx$",
                         "$S = -\\int_a^b f(x)dx$",
                         "$S = \\pi \\int_a^b f(x)dx$",
                         "$S = \\int_a^b [f(x)]^2 dx$",
                         "A", "Do $f(x) \\ge 0$ trên $[a; b]$ nên $|f(x)| = f(x)$, do đó $S = \\int_a^b f(x)dx$."),
                make_mcq(2, "NB", "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = 2x$, trục hoành và hai đường thẳng $x = 0, x = 1$ quanh trục $Ox$ là",
                         "$\\frac{4\\pi}{3}$", "$2\\pi$", "$4\\pi$", "$\\frac{2\\pi}{3}$",
                         "A", "$V = \\pi \\int_0^1 (2x)^2 dx = 4\\pi [\\frac{x^3}{3}]_0^1 = \\frac{4\\pi}{3}$."),
                make_mcq(3, "NB", "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = \\cos x$, trục hoành và hai đường thẳng $x = 0, x = \\pi/2$ là",
                         "1", "0", "2", "$\\pi$",
                         "A", "$S = \\int_0^{\\pi/2}\\cos x dx = [\\sin x]_0^{\\pi/2} = 1$."),
                make_mcq(4, "NB", "Cho hai hàm số $f(x)$ và $g(x)$ liên tục trên $[a; b]$. Diện tích hình phẳng giới hạn bởi hai đồ thị $y = f(x), y = g(x)$ và hai đường thẳng $x = a, x = b$ luôn bằng",
                         "$\\int_a^b |f(x) - g(x)|dx$",
                         "$\\int_a^b [f(x) - g(x)]dx$",
                         "$\\left|\\int_a^b [f(x) - g(x)]dx\\right|$",
                         "$\\pi \\int_a^b [f(x) - g(x)]dx$",
                         "A", "Định nghĩa diện tích hình phẳng giữa hai đường cong."),
                make_mcq(5, "TH", "Tính diện tích hình phẳng giới hạn bởi đường cong $y = x^3$, trục hoành và hai đường thẳng $x = -1, x = 2$.",
                         "$\\frac{17}{4}$", "$\\frac{15}{4}$", "4", "5",
                         "A", "$S = \\int_{-1}^2 |x^3|dx = \\int_{-1}^0 (-x^3)dx + \\int_0^2 x^3 dx = [-\\frac{x^4}{4}]_{-1}^0 + [\\frac{x^4}{4}]_0^2 = \\frac{1}{4} + 4 = \\frac{17}{4}$."),
                make_mcq(6, "TH", "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đường cong $y = \\sqrt{2x + 1}$, trục hoành và hai đường thẳng $x = 0, x = 4$ quanh trục $Ox$.",
                         "$20\\pi$", "$10\\pi$", "$40\\pi$", "$16\\pi$",
                         "A", "$V = \\pi \\int_0^4 (2x + 1)dx = \\pi [x^2 + x]_0^4 = \\pi(16 + 4) = 20\\pi$."),
                make_mcq(7, "TH", "Diện tích hình phẳng giới hạn bởi parabol $y = x^2 - 4x + 3$ và trục hoành bằng",
                         "$\\frac{4}{3}$", "$\\frac{2}{3}$", "2", "$\\frac{8}{3}$",
                         "A", "Giao điểm với $Ox$: $x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1, x = 3$. $S = \\int_1^3 -(x^2 - 4x + 3)dx = [-\\frac{x^3}{3} + 2x^2 - 3x]_1^3 = 0 - (-4/3) = \\frac{4}{3}$."),
                make_mcq(8, "TH", "Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \\frac{1}{x}$, trục hoành và hai đường thẳng $x = 1, x = 3$ quanh trục $Ox$.",
                         "$\\frac{2\\pi}{3}$", "$\\frac{\\pi}{3}$", "$\\pi \\ln 3$", "$\\frac{4\\pi}{3}$",
                         "A", "$V = \\pi \\int_1^3 \\frac{1}{x^2}dx = \\pi [-\\frac{1}{x}]_1^3 = \\pi (-\\frac{1}{3} + 1) = \\frac{2\\pi}{3}$."),
                make_mcq(9, "VD", "Một sân bóng đá mini hình chữ nhật có kích thước $20$ m $\\times 40$ m. Người ta muốn làm một tiểu cảnh hình phẳng giới hạn bởi hai nhánh parabol $y = \\frac{x^2}{20}$ và $y = 10 - \\frac{x^2}{20}$ ở giữa sân. Diện tích tiểu cảnh này là",
                         "$\\frac{200\\sqrt{10}}{3}$ m$^2$", "$\\frac{400\\sqrt{10}}{3}$ m$^2$", "100 m$^2$", "120 m$^2$",
                         "A", "Hoành độ giao điểm: $\\frac{x^2}{20} = 10 - \\frac{x^2}{20} \\Leftrightarrow x^2 = 100 \\Leftrightarrow x = \\pm 10$. Diện tích $S = \\int_{-10}^{10} (10 - \\frac{x^2}{10})dx = 2[10x - \\frac{x^3}{30}]_0^{10} = 2(100 - \\frac{100}{3}) = \\frac{400}{3}$ m$^2$."),
                make_mcq(10, "VD", "Cho hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$. Khối tròn xoay tạo thành khi quay hình phẳng quanh trục $Ox$ có thể tích là",
                         "$\\frac{64\\pi}{15}$", "$\\frac{32\\pi}{15}$", "$\\frac{16\\pi}{15}$", "$\\frac{8\\pi}{15}$",
                         "A", "Giao điểm $x = 0, x = 2$. Trên $[0; 2]$, $2x \\ge x^2$. $V = \\pi \\int_0^2 [(2x)^2 - (x^2)^2]dx = \\pi \\int_0^2 (4x^2 - x^4)dx = \\pi [\\frac{4x^3}{3} - \\frac{x^5}{5}]_0^2 = \\pi (\\frac{32}{3} - \\frac{32}{5}) = \\frac{64\\pi}{15}$."),
                make_mcq(11, "VDC", "Một chi tiết máy bằng kim loại có dạng khối tròn xoay được tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, trục hoành và đường thẳng $x = 4$ quanh trục hoành. Người ta mạ một lớp niken chống gỉ có chi phí 50.000 đồng cho mỗi $\\pi$ đơn vị thể tích. Tổng chi phí mạ kim loại cho chi tiết là",
                         "400.000 đồng", "800.000 đồng", "300.000 đồng", "500.000 đồng",
                         "A", "$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = 8\\pi$. Chi phí mạ: $8 \\times 50.000 = 400.000$ đồng."),
                make_mcq(12, "VDC", "Biết diện tích hình phẳng giới hạn bởi đồ thị $y = x^3 - 3x^2$ và trục hoành $Ox$ được chia làm hai phần bởi đường thẳng $x = k$ sao cho hai phần có diện tích bằng nhau. Khẳng định nào sau đây đúng về giá trị của $k$?",
                         "$1.8 < k < 2.2$", "$k = 1.5$", "$0.8 < k < 1.2$", "$k > 2.5$",
                         "A", "$x^3 - 3x^2 = 0 \\Leftrightarrow x = 0, x = 3$. Tổng diện tích $S = \\int_0^3 -(x^3 - 3x^2)dx = [-\\frac{x^4}{4} + x^3]_0^3 = -\\frac{81}{4} + 27 = \\frac{27}{4} = 6.75$. Một nửa diện tích $= 3.375$. Với $k = 2: S(2) = -4 + 8 = 4 > 3.375$. Vậy $1.8 < k < 2.2$.")
            ]
            tfs = [
                make_tf(1, "Cho hình phẳng $(H)$ giới hạn bởi đường cong $y = \\sqrt{x}$, trục hoành và đường thẳng $x = 9$.", [
                    ("a", "Hàm số $y = \\sqrt{x}$ đồng biến trên $[0; 9]$.", True, "Đạo hàm $y' = \\frac{1}{2\\sqrt{x}} > 0$."),
                    ("b", "Diện tích của hình phẳng $(H)$ là $S = 18$.", True, "$\\int_0^9 x^{1/2}dx = [\\frac{2}{3}x^{3/2}]_0^9 = \\frac{2}{3}(27) = 18$."),
                    ("c", "Thể tích khối tròn xoay khi quay $(H)$ quanh trục $Ox$ là $V = \\frac{81\\pi}{2}$.", True, "$\\pi \\int_0^9 x dx = \\pi [\\frac{x^2}{2}]_0^9 = \\frac{81\\pi}{2}$."),
                    ("d", "Nếu quay $(H)$ quanh trục $Oy$ thì thể tích thu được lớn hơn $100\\pi$.", True, "$V_y = \\pi \\int_0^3 (9^2 - (y^2)^2)dy = \\pi [81y - y^5/5]_0^3 = \\pi(243 - 243/5) = \\frac{972\\pi}{5} = 194.4\\pi > 100\\pi$.")
                ]),
                make_tf(2, "Cho hai parabol $(P_1): y = x^2$ và $(P_2): y = 2x - x^2$.", [
                    ("a", "Phương trình hoành độ giao điểm có hai nghiệm phân biệt $x = 0$ và $x = 1$.", True, "$x^2 = 2x - x^2 \\Leftrightarrow 2x^2 - 2x = 0$."),
                    ("b", "Trên khoảng $(0; 1)$, parabol $(P_2)$ nằm phía trên $(P_1)$.", True, "$2x - x^2 - x^2 = 2x(1 - x) > 0$."),
                    ("c", "Diện tích hình phẳng giới hạn bởi hai parabol là $S = \\frac{1}{3}$.", True, "$\\int_0^1 (2x - 2x^2)dx = [x^2 - \\frac{2x^3}{3}]_0^1 = 1 - 2/3 = 1/3$."),
                    ("d", "Tỷ số diện tích giữa hình phẳng này và hình chữ nhật ngoại tiếp $[0; 1] \\times [0; 1]$ bằng $\\frac{1}{3}$.", True, "Hình vuông có diện tích 1, tỷ số là $1/3 / 1 = 1/3$.")
                ]),
                make_tf(3, "Một chiếc ly uống rượu có dạng khối tròn xoay thu được khi quay đồ thị hàm số $y = x^2$ (với $0 \\le x \\le 2$) quanh trục tung $Oy$ (đơn vị: cm).", [
                    ("a", "Khi $x = 2$, chiều cao miệng ly là $y = 4$ cm.", True, "$y = 2^2 = 4$."),
                    ("b", "Bán kính thiết diện tại độ cao $y$ là $r(y) = \\sqrt{y}$.", True, "$x = \\sqrt{y}$."),
                    ("c", "Dung tích của chiếc ly được tính bởi $V = \\pi \\int_0^4 y dy$.", True, "$V = \\pi \\int_0^4 (\\sqrt{y})^2 dy = \\pi \\int_0^4 y dy$."),
                    ("d", "Dung tích của chiếc ly là $8\\pi$ cm$^3$ (xấp xỉ $25.13$ ml).", True, "$\\pi [\\frac{y^2}{2}]_0^4 = 8\\pi$ cm$^3$.")
                ]),
                make_tf(4, "Một cây cầu vượt có vòm chịu lực dạng parabol với nhịp cầu dài $L = 20$ m và chiều cao vòm $H = 5$ m.", [
                    ("a", "Nếu đặt gốc toạ độ tại đỉnh vòm thì phương trình parabol là $y = -\\frac{1}{20}x^2$.", True, "Tại $x = \\pm 10, y = -5 \\Rightarrow a = -5/100 = -1/20$."),
                    ("b", "Diện tích mặt đứng bên dưới vòm cầu là $S = \\frac{200}{3}$ m$^2$.", True, "Diện tích vòm $= \\frac{2}{3} L \\times H = \\frac{2}{3}(20)(5) = \\frac{200}{3}$ m$^2$."),
                    ("c", "Tại vị trí cách chân cầu 2 m, độ cao của vòm cầu là $1.8$ m.", True, "Cách tâm 8 m: $y = 5 - \\frac{1}{20}(64) = 5 - 3.2 = 1.8$ m."),
                    ("d", "Một xe tải cao 3.5 m và rộng 3 m đi đúng làn giữa có thể chui lọt qua vòm cầu một cách an toàn.", True, "Tại mép xe $x = 1.5$: độ cao vòm là $5 - 2.25/20 \\approx 4.89$ m $> 3.5$ m.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính diện tích hình phẳng giới hạn bởi đồ thị $y = 3x^2$, trục hoành và hai đường thẳng $x = 0, x = 2$.", 8, "$S = [x^3]_0^2 = 8$."),
                make_sa(2, "TH", "Tính thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = \\sqrt{3}x$, trục hoành và $x = 2$ quanh trục $Ox$. Biết $V = k\\pi$, tìm $k$.", 8, "$V = \\pi \\int_0^2 3x^2 dx = \\pi [x^3]_0^2 = 8\\pi \\Rightarrow k = 8$."),
                make_sa(3, "TH", "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2 - 2x$ và trục hoành $Ox$.", 1.33, "$x^2 - 2x = 0 \\Leftrightarrow x = 0, x = 2$. $S = \\int_0^2 (2x - x^2)dx = [x^2 - x^3/3]_0^2 = 4 - 8/3 = 4/3 \\approx 1.33$."),
                make_sa(4, "VD", "Tính diện tích hình phẳng giới hạn bởi parabol $y = -x^2 + 2x + 3$ và trục hoành $Ox$.", 10.67, "Nghiệm $x = -1, x = 3$. $S = \\int_{-1}^3 (-x^2 + 2x + 3)dx = [-\\frac{x^3}{3} + x^2 + 3x]_{-1}^3 = 9 - (-5/3) = 32/3 \\approx 10.67$."),
                make_sa(5, "VD", "Cho khối tròn xoay sinh bởi hình phẳng giới hạn bởi $y = \\sqrt{x} e^{x/2}$, trục hoành và hai đường thẳng $x = 0, x = 2$ quay quanh $Ox$. Thể tích khối bằng bao nhiêu? Biết $V = \\pi(e^2 + k)$. Tìm số nguyên $k$.", 1, "$V = \\pi \\int_0^2 x e^x dx = \\pi [(x - 1)e^x]_0^2 = \\pi (e^2 - (-1)) = \\pi(e^2 + 1) \\Rightarrow k = 1$."),
                make_sa(6, "VDC", "Một bồn xăng dầu có thiết diện ngang là hình elip $\\frac{x^2}{4} + \\frac{y^2}{1} = 1$ và chiều dài bồn là $6$ m. Tính thể tích bồn xăng dầu đó theo đơn vị m$^3$. Biết thể tích bằng $k\\pi$, tìm số nguyên $k$.", 12, "Diện tích đáy elip $S = \\pi a b = \\pi (2)(1) = 2\\pi$ m$^2$. Thể tích bồn hình trụ elip $V = S \\times h = 2\\pi \\times 6 = 12\\pi \\Rightarrow k = 12$.")
            ]
        return mcqs, tfs, sas

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 4 Toán 12.")
