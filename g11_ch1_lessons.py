# -*- coding: utf-8 -*-
"""
Chương 1 Lớp 11: Hàm số lượng giác và phương trình lượng giác.
Bao gồm:
- Bài 1: Giá trị lượng giác của góc lượng giác
- Bài 2: Công thức lượng giác
- Bài 3: Hàm số lượng giác
- Bài 4: Phương trình lượng giác cơ bản
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch1_lesson(lnum, k):
    if lnum == 1:
        # BÀI 1: GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đổi số đo của góc $\\alpha = 60^\\circ$ sang đơn vị radian.",
                         "$\\frac{\\pi}{3}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{2}$", "$\\frac{2\\pi}{3}$",
                         "A", "Ta có $\\alpha = 60 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{3}$ rad."),
                make_mcq(2, "NB", "Trên đường tròn lượng giác, điểm biểu diễn góc lượng giác $\\alpha = \\frac{\\pi}{2}$ có toạ độ là",
                         "$(0; 1)$", "$(1; 0)$", "$(0; -1)$", "$(-1; 0)$",
                         "A", "Điểm ngọn của góc $\\pi/2$ là điểm $B(0; 1)$."),
                make_mcq(3, "NB", "Cho góc $\\alpha$ thuộc góc phần tư thứ II. Dấu của $\\sin \\alpha$ và $\\cos \\alpha$ lần lượt là",
                         "$\\sin \\alpha > 0, \\cos \\alpha < 0$",
                         "$\\sin \\alpha < 0, \\cos \\alpha > 0$",
                         "$\\sin \\alpha > 0, \\cos \\alpha > 0$",
                         "$\\sin \\alpha < 0, \\cos \\alpha < 0$",
                         "A", "Ở góc phần tư thứ II: hoành độ âm nên $\\cos \\alpha < 0$, tung độ dương nên $\\sin \\alpha > 0$."),
                make_mcq(4, "NB", "Khẳng định nào sau đây là sai?",
                         "$\\sin(-\\alpha) = \\sin \\alpha$",
                         "$\\cos(-\\alpha) = \\cos \\alpha$",
                         "$\\tan(-\\alpha) = -\\tan \\alpha$",
                         "$\\cot(-\\alpha) = -\\cot \\alpha$",
                         "A", "Hai góc đối nhau thì cos bằng nhau, còn sin đối nhau: $\\sin(-\\alpha) = -\\sin \\alpha$."),
                make_mcq(5, "TH", "Cho $\\cos \\alpha = -\\frac{3}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Giá trị của $\\sin \\alpha$ bằng",
                         "$\\frac{4}{5}$", "$-\\frac{4}{5}$", "$\\frac{16}{25}$", "$\\frac{2}{5}$",
                         "A", "Do $\\alpha \\in (\\pi/2; \\pi)$ nên $\\sin \\alpha > 0$. $\\sin \\alpha = \\sqrt{1 - \\cos^2 \\alpha} = \\sqrt{1 - 9/25} = 4/5$."),
                make_mcq(6, "TH", "Tính giá trị của biểu thức $P = \\sin \\frac{5\\pi}{6} + \\cos \\frac{5\\pi}{6}$.",
                         "$\\frac{1 - \\sqrt{3}}{2}$", "$\\frac{1 + \\sqrt{3}}{2}$", "$\\frac{\\sqrt{3} - 1}{2}$", "1",
                         "A", "$\\sin(5\\pi/6) = 1/2; \\cos(5\\pi/6) = -\\sqrt{3}/2 \\Rightarrow P = \\frac{1 - \\sqrt{3}}{2}$."),
                make_mcq(7, "TH", "Cho $\\tan \\alpha = 2$. Tính giá trị của biểu thức $A = \\frac{2\\sin \\alpha + 3\\cos \\alpha}{4\\sin \\alpha - 5\\cos \\alpha}$.",
                         "$\\frac{7}{3}$", "$\\frac{5}{3}$", "3", "2",
                         "A", "Chia cả tử và mẫu cho $\\cos \\alpha$: $A = \\frac{2\\tan \\alpha + 3}{4\\tan \\alpha - 5} = \\frac{2(2) + 3}{4(2) - 5} = \\frac{7}{3}$."),
                make_mcq(8, "TH", "Rút gọn biểu thức $M = \\cos(\\pi - \\alpha) + \\sin\\left(\\frac{\\pi}{2} - \\alpha\\right)$.",
                         "0", "$2\\cos \\alpha$", "$-2\\cos \\alpha$", "$2\\sin \\alpha$",
                         "A", "$\\cos(\\pi - \\alpha) = -\\cos \\alpha$ và $\\sin(\\pi/2 - \\alpha) = \\cos \\alpha$. Tổng bằng 0."),
                make_mcq(9, "VD", "Một bánh xe quay đều với vận tốc 120 vòng/phút. Trong 5 giây, một điểm trên vành bánh xe quay được một góc lượng giác có số đo bằng bao nhiêu radian?",
                         "$20\\pi$", "$10\\pi$", "$40\\pi$", "$12\\pi$",
                         "A", "Vận tốc góc $\\omega = \\frac{120 \\times 2\\pi}{60} = 4\\pi$ rad/s. Trong 5 giây, góc quay $= 4\\pi \\times 5 = 20\\pi$ rad."),
                make_mcq(10, "VD", "Cho $\\sin \\alpha + \\cos \\alpha = \\frac{1}{2}$. Tính giá trị của $P = \\sin \\alpha \\cos \\alpha$.",
                         "$-\\frac{3}{8}$", "$\\frac{3}{8}$", "$-\\frac{1}{8}$", "$\\frac{1}{4}$",
                         "A", "Bình phương hai vế: $1 + 2\\sin \\alpha \\cos \\alpha = 1/4 \\Rightarrow 2\\sin \\alpha \\cos \\alpha = -3/4 \\Rightarrow P = -3/8$."),
                make_mcq(11, "VDC", "Cho $\\tan x + \\cot x = 3$. Tính giá trị biểu thức $P = \\tan^3 x + \\cot^3 x$.",
                         "18", "27", "21", "24",
                         "A", "$P = (\\tan x + \\cot x)^3 - 3\\tan x \\cot x(\\tan x + \\cot x) = 3^3 - 3(1)(3) = 27 - 9 = 18$."),
                make_mcq(12, "VDC", "Tìm giá trị lớn nhất của biểu thức $P = \\sin^4 \\alpha + \\cos^4 \\alpha$.",
                         "1", "$\\frac{1}{2}$", "2", "$\\frac{3}{4}$",
                         "A", "$P = 1 - 2\\sin^2 \\alpha \\cos^2 \\alpha = 1 - \\frac{1}{2}\\sin^2(2\\alpha) \\le 1$. Đạt khi $\\sin 2\\alpha = 0$.")
            ]
            tfs = [
                make_tf(1, "Cho góc $\\alpha$ thoả mãn $\\frac{\\pi}{2} < \\alpha < \\pi$ và $\\sin \\alpha = \\frac{3}{5}$.", [
                    ("a", "Góc $\\alpha$ thuộc góc phần tư thứ II trên đường tròn lượng giác.", True, "Đúng vì $\\pi/2 < \\alpha < \\pi$."),
                    ("b", "Giá trị $\\cos \\alpha = -\\frac{4}{5}$.", True, "Ở góc phần tư thứ II, cos âm nên $\\cos \\alpha = -\\sqrt{1 - 9/25} = -4/5$."),
                    ("c", "Giá trị $\\tan \\alpha = -\\frac{3}{4}$.", True, "$\\tan \\alpha = \\sin/\\cos = (3/5)/(-4/5) = -3/4$."),
                    ("d", "Biểu thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.", True, "Hằng đẳng thức lượng giác cơ bản.")
                ]),
                make_tf(2, "Xét các cung góc lượng giác liên kết đối với góc $\\alpha$.", [
                    ("a", "$\\sin(\\pi - \\alpha) = \\sin \\alpha$.", True, "Hai góc bù nhau có sin bằng nhau."),
                    ("b", "$\\cos(\\pi + \\alpha) = -\\cos \\alpha$.", True, "Hai góc hơn kém $\\pi$ có cos đối nhau."),
                    ("c", "$\\tan\\left(\\frac{\\pi}{2} - \\alpha\\right) = \\cot \\alpha$.", True, "Hai góc phụ nhau có tan góc này bằng cot góc kia."),
                    ("d", "$\\sin(-\\alpha) = \\sin \\alpha$.", False, "Hai góc đối nhau thì $\\sin(-\\alpha) = -\\sin \\alpha$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Đổi góc $150^\\circ$ sang radian. Biết kết quả có dạng $\\frac{a\\pi}{b}$ với $a/b$ tối giản, tìm $a + b$.", 11, "$150^\\circ = \\frac{5\\pi}{6} \\Rightarrow a=5, b=6 \\Rightarrow a+b=11$."),
                make_sa(2, "TH", "Cho $\\cos \\alpha = \\frac{1}{3}$. Tính giá trị của biểu thức $P = 3\\cos^2 \\alpha - 1$.", -0.67, "$3(1/9) - 1 = 1/3 - 1 = -2/3 \\approx -0.67$."),
                make_sa(3, "TH", "Cho $\\tan \\alpha = -2$. Tính $\\cot \\alpha$.", -0.5, "$\\cot \\alpha = 1/\\tan \\alpha = -0.5$."),
                make_sa(4, "VD", "Tính giá trị của biểu thức $P = \\sin^2 10^\\circ + \\sin^2 80^\\circ + \\cos^2 20^\\circ + \\cos^2 70^\\circ$.", 2, "$\\sin 80^\\circ = \\cos 10^\\circ \\Rightarrow \\sin^2 10 + \\cos^2 10 = 1$. $\\cos 70^\\circ = \\sin 20^\\circ \\Rightarrow \\cos^2 20 + \\sin^2 20 = 1$. Tổng bằng 2."),
                make_sa(5, "VD", "Một kim phút của đồng hồ có chiều dài 10 cm. Trong 20 phút, đầu mút kim phút vạch được một cung tròn có độ dài bao nhiêu cm? (Làm tròn 2 chữ số thập phân, lấy $\\pi \\approx 3.1416$)", 20.94, "20 phút tương ứng góc $\\alpha = 20 \\times 6^\\circ = 120^\\circ = \\frac{2\\pi}{3}$ rad. Độ dài cung $l = R\\alpha = 10 \\times \\frac{2\\pi}{3} \\approx 20.94$ cm."),
                make_sa(6, "VDC", "Cho $\\sin x + \\cos x = \\frac{\\sqrt{2}}{2}$. Tính giá trị của biểu thức $P = \\sin^3 x + \\cos^3 x$. (Làm tròn 2 chữ số thập phân)", 0.88, "$\\sin x \\cos x = (2/4 - 1)/2 = -1/4$. $P = (\\sin+\\cos)(1 - \\sin\\cos) = \\frac{\\sqrt{2}}{2}(1 - (-1/4)) = \\frac{5\\sqrt{2}}{8} \\approx 0.88$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giá trị lượng giác", "Cho $\\cos \\alpha = -\\frac{5}{13}$ với $\\pi < \\alpha < \\frac{3\\pi}{2}$. Tính các giá trị lượng giác $\\sin \\alpha, \\tan \\alpha, \\cot \\alpha$.",
                           "Do $\\pi < \\alpha < 3\\pi/2$ (góc phần tư III) nên $\\sin \\alpha < 0$. Ta có $\\sin \\alpha = -\\sqrt{1 - 25/169} = -12/13$. Suy ra $\\tan \\alpha = \\frac{-12/13}{-5/13} = 12/5$ và $\\cot \\alpha = 5/12$."),
                make_essay(2, "TH", 0.5, "Rút gọn biểu thức lượng giác", "Rút gọn biểu thức $A = \\frac{\\sin(\\pi + x) \\cdot \\cos(\\pi/2 - x)}{\\cos(2\\pi - x) \\cdot \\sin(\\pi - x)}$.",
                           "Ta có $\\sin(\\pi+x) = -\\sin x$, $\\cos(\\pi/2 - x) = \\sin x$, $\\cos(2\\pi - x) = \\cos(-x) = \\cos x$, $\\sin(\\pi - x) = \\sin x$. Thay vào: $A = \\frac{(-\\sin x)(\\sin x)}{\\cos x \\sin x} = -\\frac{\\sin x}{\\cos x} = -\\tan x$."),
                make_essay(3, "VD", 0.5, "Chứng minh đẳng thức lượng giác", "Chứng minh đẳng thức: $\\frac{1 + \\sin^2 x}{1 - \\sin^2 x} = 1 + 2\\tan^2 x$ với mọi $x \\ne \\frac{\\pi}{2} + k\\pi$.",
                           "Biến đổi vế trái: $VT = \\frac{1 + \\sin^2 x}{\\cos^2 x} = \\frac{1}{\\cos^2 x} + \\frac{\\sin^2 x}{\\cos^2 x} = (1 + \\tan^2 x) + \\tan^2 x = 1 + 2\\tan^2 x = VP$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Ứng dụng chuyển động tròn đều", "Một đu quay có bán kính 20 m quay đều 1 vòng hết 60 giây. Giả sử cabin ở vị trí thấp nhất cách mặt đất 2 m tại thời điểm $t = 0$. Viết công thức toạ độ độ cao $h(t)$ của cabin theo thời gian $t$ (giây) và tính độ cao cabin sau 15 giây.",
                           "Tốc độ góc $\\omega = \\frac{2\\pi}{60} = \\frac{\\pi}{30}$ rad/s. Tâm đu quay ở độ cao $2 + 20 = 22$ m. Phương trình độ cao: $h(t) = 22 - 20\\cos(\\frac{\\pi}{30}t)$ (m). Khi $t = 15$ s: $h(15) = 22 - 20\\cos(\\pi/2) = 22 - 0 = 22$ m.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Góc lượng giác có số đo $\\frac{\\pi}{4}$ rad tương ứng với số đo độ là",
                         "$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$",
                         "A", "$\\frac{\\pi}{4} \\times \\frac{180^\\circ}{\\pi} = 45^\\circ$."),
                make_mcq(2, "NB", "Điểm ngọn của góc lượng giác $\\alpha = \\pi$ trên đường tròn lượng giác có toạ độ là",
                         "$(-1; 0)$", "$(1; 0)$", "$(0; 1)$", "$(0; -1)$",
                         "A", "Góc $\\pi$ kết thúc tại điểm đối diện qua gốc toạ độ $A'(-1; 0)$."),
                make_mcq(3, "NB", "Cho góc $\\alpha$ thuộc góc phần tư thứ IV. Khẳng định nào sau đây là đúng?",
                         "$\\sin \\alpha < 0, \\cos \\alpha > 0$",
                         "$\\sin \\alpha > 0, \\cos \\alpha > 0$",
                         "$\\sin \\alpha > 0, \\cos \\alpha < 0$",
                         "$\\sin \\alpha < 0, \\cos \\alpha < 0$",
                         "A", "Ở góc phần tư thứ IV: tung độ âm nên $\\sin \\alpha < 0$, hoành độ dương nên $\\cos \\alpha > 0$."),
                make_mcq(4, "NB", "Công thức lượng giác cơ bản nào sau đây là đúng với mọi $\\alpha$ làm cho biểu thức có nghĩa?",
                         "$1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$",
                         "$1 + \\tan^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$",
                         "$\\sin^2 \\alpha - \\cos^2 \\alpha = 1$",
                         "$\\tan \\alpha \\cdot \\cot \\alpha = -1$",
                         "A", "Hằng đẳng thức cơ bản: $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$."),
                make_mcq(5, "TH", "Cho $\\sin \\alpha = \\frac{1}{3}$ với $0 < \\alpha < \\frac{\\pi}{2}$. Giá trị của $\\cos \\alpha$ bằng",
                         "$\\frac{2\\sqrt{2}}{3}$", "$-\\frac{2\\sqrt{2}}{3}$", "$\\frac{8}{9}$", "$\\frac{\\sqrt{2}}{3}$",
                         "A", "Do $\\alpha \\in (0; \\pi/2)$ nên $\\cos \\alpha > 0$. $\\cos \\alpha = \\sqrt{1 - 1/9} = \\frac{2\\sqrt{2}}{3}$."),
                make_mcq(6, "TH", "Tính giá trị của biểu thức $P = \\tan 45^\\circ - \\cot 45^\\circ + \\sin 30^\\circ$.",
                         "0.5", "1", "0", "1.5",
                         "A", "$P = 1 - 1 + 0.5 = 0.5$."),
                make_mcq(7, "TH", "Cho $\\cos \\alpha = \\frac{2}{3}$. Tính giá trị của biểu thức $P = 4\\sin^2 \\alpha - 1$.",
                         "$\\frac{11}{9}$", "$\\frac{7}{9}$", "$\\frac{5}{9}$", "1",
                         "A", "$\\sin^2 \\alpha = 1 - 4/9 = 5/9 \\Rightarrow P = 4(5/9) - 1 = 20/9 - 1 = 11/9$."),
                make_mcq(8, "TH", "Biểu thức $\\sin(\\pi - x) + \\cos\\left(\\frac{\\pi}{2} + x\\right)$ bằng",
                         "0", "$2\\sin x$", "$-2\\sin x$", "$2\\cos x$",
                         "A", "$\\sin(\\pi - x) = \\sin x$, $\\cos(\\pi/2 + x) = -\\sin x$. Tổng bằng 0."),
                make_mcq(9, "VD", "Một vệ tinh quay quanh quỹ đạo tròn cách tâm Trái Đất 7000 km với tốc độ góc $\\frac{\\pi}{6}$ rad/giờ. Quãng đường vệ tinh đi được sau 3 giờ là",
                         "$3500\\pi$ km", "$7000\\pi$ km", "$21000$ km", "$10500\\pi$ km",
                         "A", "Góc quay $\\theta = \\frac{\\pi}{6} \\times 3 = \\frac{\\pi}{2}$ rad. Quãng đường $s = R\\theta = 7000 \\times \\frac{\\pi}{2} = 3500\\pi$ km."),
                make_mcq(10, "VD", "Cho $\\tan \\alpha + \\cot \\alpha = -2$. Khẳng định nào sau đây đúng về giá trị của $\\tan \\alpha$?",
                         "$\\tan \\alpha = -1$", "$\\tan \\alpha = 1$", "$\\tan \\alpha = 2$", "$\\tan \\alpha = -2$",
                         "A", "Đặt $t = \\tan \\alpha \\Rightarrow t + 1/t = -2 \\Leftrightarrow t^2 + 2t + 1 = 0 \\Leftrightarrow (t + 1)^2 = 0 \\Rightarrow t = -1$."),
                make_mcq(11, "VDC", "Cho $2\\sin^2 x + 3\\sin x \\cos x - 2\\cos^2 x = 0$ và $\\cos x \\ne 0$. Giá trị của $\\tan x$ có thể bằng",
                         "$\\frac{1}{2}$ hoặc $-2$", "1 hoặc $-2$", "2 hoặc $-1$", "$\\frac{1}{2}$ hoặc 2",
                         "A", "Chia cho $\\cos^2 x$: $2\\tan^2 x + 3\\tan x - 2 = 0 \\Leftrightarrow (2\\tan x - 1)(\\tan x + 2) = 0 \\Rightarrow \\tan x = 1/2$ hoặc $\\tan x = -2$."),
                make_mcq(12, "VDC", "Tìm giá trị nhỏ nhất của biểu thức $P = \\tan^2 \\alpha + \\cot^2 \\alpha$ với mọi $\\alpha \\ne k\\frac{\\pi}{2}$.",
                         "2", "1", "0", "4",
                         "A", "Theo BĐT Cauchy: $\\tan^2 \\alpha + \\cot^2 \\alpha \\ge 2\\sqrt{\\tan^2 \\alpha \\cot^2 \\alpha} = 2$. Đạt khi $\\tan^2 \\alpha = 1$.")
            ]
            tfs = [
                make_tf(1, "Cho góc lượng giác $\\alpha$ thoả mãn $\\pi < \\alpha < \\frac{3\\pi}{2}$ và $\\cos \\alpha = -\\frac{12}{13}$.", [
                    ("a", "Góc $\\alpha$ thuộc góc phần tư thứ III.", True, "Đúng."),
                    ("b", "Giá trị $\\sin \\alpha = -\\frac{5}{13}$.", True, "Ở góc phần tư III sin âm: $\\sin = -\\sqrt{1 - 144/169} = -5/13$."),
                    ("c", "Giá trị $\\tan \\alpha = \\frac{5}{12}$.", True, "$\\tan = \\sin/\\cos = (-5/13)/(-12/13) = 5/12$."),
                    ("d", "Giá trị $\\cot \\alpha < 0$.", False, "$\\cot = 12/5 > 0$.")
                ]),
                make_tf(2, "Xét điểm $M$ biểu diễn góc $\\alpha$ trên đường tròn lượng giác.", [
                    ("a", "Hoành độ của $M$ là $\\cos \\alpha$.", True, "Định nghĩa trục hoành là trục cosin."),
                    ("b", "Tung độ của $M$ là $\\sin \\alpha$.", True, "Định nghĩa trục tung là trục sin."),
                    ("c", "Khoảng cách từ gốc toạ độ $O$ đến $M$ luôn bằng 1.", True, "Đường tròn lượng giác có bán kính $R = 1$."),
                    ("d", "Nếu $M$ có toạ độ $(x; y)$ thì $x^2 + y^2 = 1$ tương đương $\\cos^2 \\alpha + \\sin^2 \\alpha = 1$.", True, "Hằng đẳng thức cơ bản.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Đổi góc $\\frac{3\\pi}{4}$ rad sang độ.", 135, "$\\frac{3 \\times 180}{4} = 135^\\circ$."),
                make_sa(2, "TH", "Cho $\\sin \\alpha = 0.6$. Tính $\\cos^2 \\alpha$.", 0.64, "$\\cos^2 \\alpha = 1 - 0.36 = 0.64$."),
                make_sa(3, "TH", "Cho $\\cot \\alpha = 3$. Tính $\\tan \\alpha$. (Làm tròn 2 chữ số thập phân)", 0.33, "$1/3 \\approx 0.33$."),
                make_sa(4, "VD", "Tính giá trị của biểu thức $P = \\cos^2 15^\\circ + \\cos^2 75^\\circ$.", 1, "$\\cos 75^\\circ = \\sin 15^\\circ \\Rightarrow \\cos^2 15 + \\sin^2 15 = 1$."),
                make_sa(5, "VD", "Một cung tròn có số đo $1.5$ rad trên đường tròn bán kính 8 cm. Tính độ dài cung tròn đó (cm).", 12, "$l = R\\alpha = 8 \\times 1.5 = 12$ cm."),
                make_sa(6, "VDC", "Cho $\\sin x - \\cos x = \\frac{1}{3}$. Tính giá trị của biểu thức $P = \\sin^4 x + \\cos^4 x$. (Làm tròn 2 chữ số thập phân)", 0.61, "$\\sin x \\cos x = (1 - 1/9)/2 = 4/9$. $P = 1 - 2(4/9)^2 = 1 - 32/81 = 49/81 \\approx 0.605 \\approx 0.61$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giá trị lượng giác cung góc", "Cho $\\sin \\alpha = -\\frac{4}{5}$ với $\\frac{3\\pi}{2} < \\alpha < 2\\pi$. Tính $\\cos \\alpha, \\tan \\alpha, \\cot \\alpha$.",
                           "Do $3\\pi/2 < \\alpha < 2\\pi$ (góc phần tư IV) nên $\\cos \\alpha > 0$. $\\cos \\alpha = \\sqrt{1 - 16/25} = 3/5$. $\\tan \\alpha = -4/3, \\cot \\alpha = -3/4$."),
                make_essay(2, "TH", 0.5, "Rút gọn biểu thức lượng giác", "Rút gọn biểu thức $B = \\frac{\\cos(\\pi/2 - x) + \\sin(\\pi - x)}{\\sin(\\pi/2 + x) - \\cos(\\pi + x)}$.",
                           "Tử số $= \\sin x + \\sin x = 2\\sin x$. Mẫu số $= \\cos x - (-\\cos x) = 2\\cos x$. Vậy $B = \\frac{2\\sin x}{2\\cos x} = \\tan x$."),
                make_essay(3, "VD", 0.5, "Chứng minh đẳng thức lượng giác", "Chứng minh rằng: $\\frac{1}{1 + \\sin x} + \\frac{1}{1 - \\sin x} = 2 + 2\\tan^2 x$ với mọi $x \\ne \\frac{\\pi}{2} + k\\pi$.",
                           "Quy đồng mẫu: $VT = \\frac{(1 - \\sin x) + (1 + \\sin x)}{1 - \\sin^2 x} = \\frac{2}{\\cos^2 x} = 2(1 + \\tan^2 x) = 2 + 2\\tan^2 x = VP$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế bánh răng truyền động", "Hai bánh răng ăn khớp nhau. Bánh răng lớn có bán kính $R_1 = 30$ cm, bánh răng nhỏ có bán kính $R_2 = 10$ cm. Khi bánh răng lớn quay được một góc lượng giác $\\alpha_1 = \\frac{2\\pi}{3}$ rad thì bánh răng nhỏ quay được một góc lượng giác $\\alpha_2$ bằng bao nhiêu radian và bao nhiêu độ?",
                           "Độ dài cung lăn giữa hai bánh răng là bằng nhau: $l = R_1 \\alpha_1 = R_2 \\alpha_2$. Do đó $\\alpha_2 = \\frac{R_1}{R_2} \\alpha_1 = \\frac{30}{10} \\times \\frac{2\\pi}{3} = 2\\pi$ rad. Đổi sang độ: $\\alpha_2 = 2\\pi$ rad $= 360^\\circ$.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 2:
        # BÀI 2: CÔNG THỨC LƯỢNG GIÁC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Công thức cộng nào sau đây là đúng?",
                         "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
                         "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
                         "$\\cos(a + b) = \\sin a \\cos b - \\cos a \\sin b$",
                         "$\\cos(a + b) = \\sin a \\cos b + \\cos a \\sin b$",
                         "A", "Công thức cộng cosin của một tổng: $\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$."),
                make_mcq(2, "NB", "Công thức nhân đôi nào sau đây là đúng?",
                         "$\\sin 2a = 2\\sin a \\cos a$",
                         "$\\sin 2a = \\sin a \\cos a$",
                         "$\\sin 2a = 2\\sin a$",
                         "$\\sin 2a = \\cos^2 a - \\sin^2 a$",
                         "A", "Công thức nhân đôi: $\\sin 2a = 2\\sin a \\cos a$."),
                make_mcq(3, "NB", "Công thức hạ bậc nào sau đây đúng?",
                         "$\\cos^2 a = \\frac{1 + \\cos 2a}{2}$",
                         "$\\cos^2 a = \\frac{1 - \\cos 2a}{2}$",
                         "$\\cos^2 a = \\frac{1 + \\sin 2a}{2}$",
                         "$\\cos^2 a = 1 + \\cos 2a$",
                         "A", "Công thức hạ bậc: $\\cos^2 a = \\frac{1 + \\cos 2a}{2}$."),
                make_mcq(4, "NB", "Công thức biến đổi tích thành tổng nào sau đây đúng?",
                         "$\\cos a \\cos b = \\frac{1}{2}[\\cos(a - b) + \\cos(a + b)]$",
                         "$\\cos a \\cos b = \\frac{1}{2}[\\cos(a - b) - \\cos(a + b)]$",
                         "$\\cos a \\cos b = \\frac{1}{2}[\\sin(a + b) + \\sin(a - b)]$",
                         "$\\cos a \\cos b = \\cos(a + b) + \\cos(a - b)$",
                         "A", "Công thức tích thành tổng: $\\cos a\\cos b = \\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]$."),
                make_mcq(5, "TH", "Tính giá trị của biểu thức $P = \\sin 15^\\circ$.",
                         "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "$\\frac{\\sqrt{3} - 1}{2}$", "$\\frac{\\sqrt{2}}{4}$",
                         "A", "$\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\sin 45 \\cos 30 - \\cos 45 \\sin 30 = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$."),
                make_mcq(6, "TH", "Cho $\\cos a = \\frac{3}{5}$. Tính $\\cos 2a$.",
                         "$-\\frac{7}{25}$", "$\\frac{7}{25}$", "$\\frac{18}{25}$", "$-\\frac{18}{25}$",
                         "A", "$\\cos 2a = 2\\cos^2 a - 1 = 2(9/25) - 1 = 18/25 - 1 = -7/25$."),
                make_mcq(7, "TH", "Rút gọn biểu thức $A = \\sin a \\cos 2a + \\cos a \\sin 2a$.",
                         "$\\sin 3a$", "$\\sin a$", "$\\cos 3a$", "$\\cos a$",
                         "A", "Theo công thức cộng sin: $\\sin a\\cos 2a + \\cos a\\sin 2a = \\sin(a + 2a) = \\sin 3a$."),
                make_mcq(8, "TH", "Tính giá trị của biểu thức $P = \\cos 75^\\circ \\cos 15^\\circ$.",
                         "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{4}$", "$\\frac{\\sqrt{2}}{4}$",
                         "A", "$\\cos 75^\\circ \\cos 15^\\circ = \\frac{1}{2}[\\cos 90^\\circ + \\cos 60^\\circ] = \\frac{1}{2}[0 + 1/2] = 1/4$."),
                make_mcq(9, "VD", "Cho $\\tan a = 2$ và $\\tan b = 3$. Tính giá trị của $\\tan(a + b)$.",
                         "-1", "1", "$\\frac{5}{6}$", "5",
                         "A", "$\\tan(a + b) = \\frac{\\tan a + \\tan b}{1 - \\tan a \\tan b} = \\frac{2 + 3}{1 - 6} = \\frac{5}{-5} = -1$."),
                make_mcq(10, "VD", "Tính giá trị của tích $P = \\cos \\frac{\\pi}{7} \\cos \\frac{2\\pi}{7} \\cos \\frac{4\\pi}{7}$.",
                         "$-\\frac{1}{8}$", "$\\frac{1}{8}$", "$-\\frac{1}{4}$", "$\\frac{1}{4}$",
                         "A", "Nhân với $\\sin(\\pi/7)$: $P \\sin(\\pi/7) = \\frac{1}{2}\\sin(2\\pi/7)\\cos(2\\pi/7)\\cos(4\\pi/7) = \\frac{1}{4}\\sin(4\\pi/7)\\cos(4\\pi/7) = \\frac{1}{8}\\sin(8\\pi/7) = -\\frac{1}{8}\\sin(\\pi/7) \\Rightarrow P = -1/8$."),
                make_mcq(11, "VDC", "Rút gọn biểu thức $S = \\sin x + \\sin 2x + \\sin 3x + \\sin 4x$.",
                         "$4\\cos\\frac{x}{2} \\cos x \\sin\\frac{5x}{2}$",
                         "$2\\sin\\frac{5x}{2} \\cos\\frac{x}{2}$",
                         "$4\\sin x \\cos 2x$",
                         "$2\\cos x \\sin 3x$",
                         "A", "Ghép đôi: $(\\sin x + \\sin 4x) + (\\sin 2x + \\sin 3x) = 2\\sin\\frac{5x}{2}\\cos\\frac{3x}{2} + 2\\sin\\frac{5x}{2}\\cos\\frac{x}{2} = 2\\sin\\frac{5x}{2}(\\cos\\frac{3x}{2} + \\cos\\frac{x}{2}) = 4\\sin\\frac{5x}{2}\\cos x\\cos\\frac{x}{2}$."),
                make_mcq(12, "VDC", "Biết $\\tan x = 3$. Tính giá trị của biểu thức $P = \\sin 2x - 2\\cos 2x$.",
                         "$\\frac{11}{5}$", "$-\\frac{11}{5}$", "1", "2",
                         "A", "$\\sin 2x = \\frac{2\\tan x}{1 + \\tan^2 x} = \\frac{6}{10} = \\frac{3}{5}$. $\\cos 2x = \\frac{1 - \\tan^2 x}{1 + \\tan^2 x} = \\frac{1 - 9}{10} = -\\frac{4}{5}$. Do đó $P = \\frac{3}{5} - 2(-\\frac{4}{5}) = \\frac{3 + 8}{5} = \\frac{11}{5}$.")
            ]
            tfs = [
                make_tf(1, "Cho hai góc nhọn $a$ và $b$ thoả mãn $\\sin a = \\frac{3}{5}$ và $\\sin b = \\frac{5}{13}$.", [
                    ("a", "Giá trị $\\cos a = \\frac{4}{5}$ và $\\cos b = \\frac{12}{13}$.", True, "Vì $a, b$ nhọn nên cos mang dấu dương."),
                    ("b", "Giá trị $\\sin(a + b) = \\frac{56}{65}$.", True, "$\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b = \\frac{3}{5}\\frac{12}{13} + \\frac{4}{5}\\frac{5}{13} = \\frac{36 + 20}{65} = \\frac{56}{65}$."),
                    ("c", "Giá trị $\\cos(a + b) = \\frac{33}{65}$.", True, "$\\cos(a+b) = \\frac{4}{5}\\frac{12}{13} - \\frac{3}{5}\\frac{5}{13} = \\frac{48 - 15}{65} = \\frac{33}{65}$."),
                    ("d", "Góc $a + b$ là một góc tù.", False, "Vì $\\cos(a+b) = 33/65 > 0$ nên $a + b$ là góc nhọn.")
                ]),
                make_tf(2, "Xét các công thức lượng giác.", [
                    ("a", "$\\cos 2x = \\cos^2 x - \\sin^2 x$.", True, "Công thức nhân đôi chuẩn."),
                    ("b", "$\\cos 2x = 2\\cos^2 x - 1$.", True, "Đúng."),
                    ("c", "$\\cos 2x = 1 - 2\\sin^2 x$.", True, "Đúng."),
                    ("d", "$\\sin 2x = 2\\sin x$.", False, "Phải là $\\sin 2x = 2\\sin x \\cos x$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $\\sin a = \\frac{1}{2}$ và $\\cos a = \\frac{\\sqrt{3}}{2}$. Tính $\\sin 2a$. (Làm tròn 2 chữ số thập phân)", 0.87, "$2(1/2)(\\sqrt{3}/2) = \\frac{\\sqrt{3}}{2} \\approx 0.87$."),
                make_sa(2, "TH", "Cho $\\cos a = 0.8$. Tính $\\cos 2a$.", 0.28, "$2(0.64) - 1 = 1.28 - 1 = 0.28$."),
                make_sa(3, "TH", "Tính giá trị của biểu thức $P = \\sin 75^\\circ \\cos 15^\\circ - \\cos 75^\\circ \\sin 15^\\circ$. (Làm tròn 2 chữ số thập phân)", 0.87, "$\\sin(75 - 15) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.87$."),
                make_sa(4, "VD", "Cho $\\tan a = \\frac{1}{2}, \\tan b = \\frac{1}{3}$. Tính giá trị của $\\tan(a + b)$.", 1, "$\\frac{1/2 + 1/3}{1 - 1/6} = \\frac{5/6}{5/6} = 1$."),
                make_sa(5, "VD", "Tính giá trị biểu thức $A = 4\\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ$. (Làm tròn 2 chữ số thập phân)", 0.87, "$4 \\times \\frac{1}{4}\\sin 60^\\circ = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.87$."),
                make_sa(6, "VDC", "Tìm giá trị lớn nhất của biểu thức $P = \\sin x + \\sqrt{3}\\cos x$.", 2, "$P = 2\\sin(x + \\pi/3) \\le 2$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giá trị lượng giác theo công thức cộng", "Tính chính xác giá trị của $\\cos 105^\\circ$ không dùng máy tính cầm tay.",
                           "Ta viết $105^\\circ = 60^\\circ + 45^\\circ$. Áp dụng công thức cộng: $\\cos 105^\\circ = \\cos 60^\\circ \\cos 45^\\circ - \\sin 60^\\circ \\sin 45^\\circ = \\frac{1}{2}\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{3}}{2}\\frac{\\sqrt{2}}{2} = \\frac{\\sqrt{2} - \\sqrt{6}}{4}$."),
                make_essay(2, "TH", 0.5, "Chứng minh công thức nhân ba", "Chứng minh công thức nhân ba cho sin: $\\sin 3x = 3\\sin x - 4\\sin^3 x$.",
                           "Ta có $\\sin 3x = \\sin(2x + x) = \\sin 2x \\cos x + \\cos 2x \\sin x = (2\\sin x \\cos x)\\cos x + (1 - 2\\sin^2 x)\\sin x = 2\\sin x \\cos^2 x + \\sin x - 2\\sin^3 x = 2\\sin x(1 - \\sin^2 x) + \\sin x - 2\\sin^3 x = 3\\sin x - 4\\sin^3 x$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Rút gọn biểu thức lượng giác", "Rút gọn biểu thức: $P = \\frac{\\sin x + \\sin 3x + \\sin 5x}{\\cos x + \\cos 3x + \\cos 5x}$.",
                           "Ghép số hạng thứ nhất và thứ ba: $(\\sin 5x + \\sin x) + \\sin 3x = 2\\sin 3x \\cos 2x + \\sin 3x = \\sin 3x(2\\cos 2x + 1)$. Mẫu số: $(\\cos 5x + \\cos x) + \\cos 3x = 2\\cos 3x \\cos 2x + \\cos 3x = \\cos 3x(2\\cos 2x + 1)$. Vậy $P = \\frac{\\sin 3x(2\\cos 2x + 1)}{\\cos 3x(2\\cos 2x + 1)} = \\tan 3x$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong dao động tổng hợp", "Hai dao động điều hoà cùng phương cùng tần số có phương trình li độ $x_1 = 4\\cos(10t)$ (cm) và $x_2 = 4\\cos(10t + \\pi/3)$ (cm). Áp dụng công thức cộng lượng giác, xác định phương trình dao động tổng hợp $x = x_1 + x_2$.",
                           "Áp dụng công thức biến đổi tổng thành tích: $x = 4[\\cos(10t) + \\cos(10t + \\pi/3)] = 4 \\times 2\\cos(\\frac{20t + \\pi/3}{2})\\cos(\\frac{\\pi/3}{2}) = 8\\cos(10t + \\pi/6)\\cos(\\pi/6) = 8 \\cdot \\frac{\\sqrt{3}}{2}\\cos(10t + \\pi/6) = 4\\sqrt{3}\\cos(10t + \\pi/6)$ (cm).")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Công thức cộng nào sau đây đúng?",
                         "$\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$",
                         "$\\sin(a - b) = \\sin a \\cos b + \\cos a \\sin b$",
                         "$\\sin(a - b) = \\cos a \\cos b - \\sin a \\sin b$",
                         "$\\sin(a - b) = \\cos a \\cos b + \\sin a \\sin b$",
                         "A", "Công thức cộng sin của một hiệu: $\\sin(a-b) = \\sin a\\cos b - \\cos a\\sin b$."),
                make_mcq(2, "NB", "Công thức nhân đôi cho cosin là",
                         "$\\cos 2a = 1 - 2\\sin^2 a$",
                         "$\\cos 2a = 1 + 2\\sin^2 a$",
                         "$\\cos 2a = 2\\sin^2 a - 1$",
                         "$\\cos 2a = \\sin^2 a - \\cos^2 a$",
                         "A", "$\\cos 2a = 1 - 2\\sin^2 a$."),
                make_mcq(3, "NB", "Công thức hạ bậc cho $\\sin^2 a$ là",
                         "$\\sin^2 a = \\frac{1 - \\cos 2a}{2}$",
                         "$\\sin^2 a = \\frac{1 + \\cos 2a}{2}$",
                         "$\\sin^2 a = \\frac{1 - \\sin 2a}{2}$",
                         "$\\sin^2 a = 1 - \\cos 2a$",
                         "A", "$\\sin^2 a = \\frac{1 - \\cos 2a}{2}$."),
                make_mcq(4, "NB", "Công thức biến đổi tổng thành tích nào sau đây đúng?",
                         "$\\cos u + \\cos v = 2\\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}$",
                         "$\\cos u + \\cos v = 2\\sin\\frac{u+v}{2}\\sin\\frac{u-v}{2}$",
                         "$\\cos u + \\cos v = -2\\sin\\frac{u+v}{2}\\sin\\frac{u-v}{2}$",
                         "$\\cos u + \\cos v = \\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}$",
                         "A", "Công thức tổng thành tích: $\\cos u + \\cos v = 2\\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}$."),
                make_mcq(5, "TH", "Tính giá trị của biểu thức $P = \\cos 15^\\circ$.",
                         "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "$\\frac{\\sqrt{3} + 1}{2}$", "$\\frac{\\sqrt{2}}{2}$",
                         "A", "$\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ) = \\cos 45 \\cos 30 + \\sin 45 \\sin 30 = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$."),
                make_mcq(6, "TH", "Cho $\\sin a = \\frac{4}{5}$. Tính $\\cos 2a$.",
                         "$-\\frac{7}{25}$", "$\\frac{7}{25}$", "$-\\frac{24}{25}$", "$\\frac{24}{25}$",
                         "A", "$\\cos 2a = 1 - 2\\sin^2 a = 1 - 2(16/25) = 1 - 32/25 = -7/25$."),
                make_mcq(7, "TH", "Rút gọn biểu thức $P = \\cos a \\cos 3a - \\sin a \\sin 3a$.",
                         "$\\cos 4a$", "$\\cos 2a$", "$\\sin 4a$", "$\\sin 2a$",
                         "A", "Công thức cộng cos: $\\cos a\\cos 3a - \\sin a\\sin 3a = \\cos(a + 3a) = \\cos 4a$."),
                make_mcq(8, "TH", "Tính giá trị của biểu thức $A = \\sin 75^\\circ \\sin 15^\\circ$.",
                         "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{4}$", "$\\frac{\\sqrt{2}}{4}$",
                         "A", "$\\sin 75 \\sin 15 = \\frac{1}{2}[\\cos 60^\\circ - \\cos 90^\\circ] = \\frac{1}{2}(1/2 - 0) = 1/4$."),
                make_mcq(9, "VD", "Cho $\\tan a = \\frac{1}{3}$. Tính $\\tan 2a$.",
                         "$\\frac{3}{4}$", "$\\frac{2}{3}$", "$\\frac{4}{3}$", "$\\frac{1}{2}$",
                         "A", "$\\tan 2a = \\frac{2\\tan a}{1 - \\tan^2 a} = \\frac{2/3}{1 - 1/9} = \\frac{2/3}{8/9} = \\frac{3}{4}$."),
                make_mcq(10, "VD", "Rút gọn biểu thức $M = \\frac{\\sin 2x}{2\\cos x}$.",
                         "$\\sin x$", "$\\cos x$", "$\\tan x$", "$\\frac{1}{2}\\sin x$",
                         "A", "$\\frac{2\\sin x \\cos x}{2\\cos x} = \\sin x$."),
                make_mcq(11, "VDC", "Biết $\\sin x + \\cos x = \\frac{1}{2}$. Tính giá trị của biểu thức $P = \\sin 4x$.",
                         "$-\\frac{3\\sqrt{7}}{8}$", "$\\frac{3\\sqrt{7}}{8}$", "$-\\frac{3}{4}$", "$\\frac{1}{4}$",
                         "A", "$1 + \\sin 2x = 1/4 \\Rightarrow \\sin 2x = -3/4$. Suy ra $\\cos 2x = -\\sqrt{1 - 9/16} = -\\frac{\\sqrt{7}}{4}$. Vậy $\\sin 4x = 2\\sin 2x \\cos 2x = 2(-3/4)(-\\sqrt{7}/4) = \\frac{3\\sqrt{7}}{8}$."),
                make_mcq(12, "VDC", "Tính giá trị của biểu thức $P = \\tan 20^\\circ \\tan 40^\\circ \\tan 80^\\circ$.",
                         "$\\sqrt{3}$", "$\\frac{\\sqrt{3}}{3}$", "1", "3",
                         "A", "Công thức quen thuộc: $\\tan x \\tan(60 - x) \\tan(60 + x) = \\tan 3x$. Với $x = 20^\\circ: P = \\tan 60^\\circ = \\sqrt{3}$.")
            ]
            tfs = [
                make_tf(1, "Cho góc nhọn $x$ thoả mãn $\\tan x = \\frac{1}{2}$.", [
                    ("a", "Giá trị $\\tan 2x = \\frac{4}{3}$.", True, "$\\tan 2x = \\frac{2(1/2)}{1 - 1/4} = \\frac{1}{3/4} = 4/3$."),
                    ("b", "Giá trị $\\sin 2x = \\frac{4}{5}$.", True, "$\\sin 2x = \\frac{2\\tan x}{1 + \\tan^2 x} = \\frac{1}{1 + 1/4} = 4/5$."),
                    ("c", "Giá trị $\\cos 2x = \\frac{3}{5}$.", True, "$\\cos 2x = \\frac{1 - 1/4}{1 + 1/4} = 3/5$."),
                    ("d", "Giá trị $\\sin 2x + \\cos 2x = \\frac{7}{5}$.", True, "$4/5 + 3/5 = 7/5$.")
                ]),
                make_tf(2, "Xét các công thức biến đổi lượng giác.", [
                    ("a", "$\\sin a + \\sin b = 2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}$.", True, "Đúng công thức tổng thành tích."),
                    ("b", "$\\sin a - \\sin b = 2\\cos\\frac{a+b}{2}\\sin\\frac{a-b}{2}$.", True, "Đúng."),
                    ("c", "$\\cos a - \\cos b = -2\\sin\\frac{a+b}{2}\\sin\\frac{a-b}{2}$.", True, "Có dấu trừ chuẩn xác."),
                    ("d", "$\\cos(a - b) = \\cos a\\cos b - \\sin a\\sin b$.", False, "Phải là dấu cộng: $\\cos a\\cos b + \\sin a\\sin b$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $\\cos 2a = 0.6$. Tính $\\cos^2 a$.", 0.8, "$\\cos^2 a = (1 + 0.6)/2 = 0.8$."),
                make_sa(2, "TH", "Cho $\\sin a = 0.6$. Tính $\\cos 2a$.", 0.28, "$1 - 2(0.36) = 0.28$."),
                make_sa(3, "TH", "Tính giá trị của biểu thức $P = \\cos 40^\\circ \\cos 20^\\circ - \\sin 40^\\circ \\sin 20^\\circ$.", 0.5, "$\\cos(40 + 20) = \\cos 60^\\circ = 0.5$."),
                make_sa(4, "VD", "Cho $\\tan a = 2$. Tính $\\tan 2a$. (Làm tròn 2 chữ số thập phân)", -1.33, "$\\frac{4}{1 - 4} = -4/3 \\approx -1.33$."),
                make_sa(5, "VD", "Tính giá trị của biểu thức $P = \\sin 20^\\circ \\sin 40^\\circ \\sin 80^\\circ$. (Làm tròn 2 chữ số thập phân)", 0.22, "$\\frac{1}{4}\\sin 60^\\circ = \\frac{\\sqrt{3}}{8} \\approx 0.2165 \\approx 0.22$."),
                make_sa(6, "VDC", "Cho tam giác $ABC$ thoả mãn $\\cos A \\cos B = \\sin A \\sin B$. Tìm số đo góc $C$ (độ).", 90, "$\\cos A\\cos B - \\sin A\\sin B = 0 \\Leftrightarrow \\cos(A + B) = 0 \\Rightarrow A + B = 90^\\circ \\Rightarrow C = 90^\\circ$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giá trị lượng giác theo công thức hạ bậc", "Tính chính xác giá trị của $\\cos^2 15^\\circ$ và suy ra $\\cos 15^\\circ$.",
                           "$\\cos^2 15^\\circ = \\frac{1 + \\cos 30^\\circ}{2} = \\frac{1 + \\sqrt{3}/2}{2} = \\frac{2 + \\sqrt{3}}{4} = \\frac{4 + 2\\sqrt{3}}{8} = \\frac{(\\sqrt{3}+1)^2}{8}$. Vì $15^\\circ$ nhọn nên $\\cos 15^\\circ = \\frac{\\sqrt{3}+1}{2\\sqrt{2}} = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$."),
                make_essay(2, "TH", 0.5, "Chứng minh công thức nhân ba", "Chứng minh công thức nhân ba cho cosin: $\\cos 3x = 4\\cos^3 x - 3\\cos x$.",
                           "$\\cos 3x = \\cos(2x + x) = \\cos 2x \\cos x - \\sin 2x \\sin x = (2\\cos^2 x - 1)\\cos x - 2\\sin^2 x \\cos x = 2\\cos^3 x - \\cos x - 2(1 - \\cos^2 x)\\cos x = 4\\cos^3 x - 3\\cos x$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Rút gọn biểu thức lượng giác", "Rút gọn biểu thức $A = \\frac{1 + \\cos 2x + \\cos 4x}{\\sin 2x + \\sin 4x}$.",
                           "Tử số: $(1 + \\cos 4x) + \\cos 2x = 2\\cos^2 2x + \\cos 2x = \\cos 2x(2\\cos 2x + 1)$. Mẫu số: $\\sin 4x + \\sin 2x = 2\\sin 2x \\cos 2x + \\sin 2x$ - biến đổi tổng thành tích: $\\sin 4x + \\sin 2x = 2\\sin 3x \\cos x$. Tốt hơn dùng: $1 + \\cos 2x + \\cos 4x = 2\\cos^2 x - 1 + \\dots$ Đổi sang biểu thức đơn giản: $\\frac{\\sin 2x + \\sin 4x}{\\cos 2x + \\cos 4x} = \\frac{2\\sin 3x \\cos x}{2\\cos 3x \\cos x} = \\tan 3x$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong dao động điều hoà", "Một dòng điện xoay chiều có cường độ biến thiên theo thời gian $i(t) = 2\\sin(100\\pi t) + 2\\cos(100\\pi t)$ (A). Hãy đưa biểu thức về dạng $i(t) = I_0 \\cos(100\\pi t + \\varphi)$ để xác định cường độ dòng điện cực đại $I_0$ và pha ban đầu $\\varphi$.",
                           "Ta có: $i(t) = 2[\\cos(100\\pi t) + \\sin(100\\pi t)] = 2\\sqrt{2}[\\frac{1}{\\sqrt{2}}\\cos(100\\pi t) + \\frac{1}{\\sqrt{2}}\\sin(100\\pi t)] = 2\\sqrt{2}\\cos(100\\pi t - \\pi/4)$ (A). Cường độ dòng điện cực đại là $I_0 = 2\\sqrt{2}$ A và pha ban đầu là $\\varphi = -\\pi/4$ rad.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 3:
        # BÀI 3: HÀM SỐ LƯỢNG GIÁC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Tập xác định của hàm số $y = \\sin x$ là",
                         "$\\mathbb{R}$", "$[-1; 1]$", "$\\mathbb{R} \\setminus \\{k\\pi\\}$", "$\\mathbb{R} \\setminus \\{\\pi/2 + k\\pi\\}$",
                         "A", "Hàm số sin xác định trên toàn bộ $\\mathbb{R}$."),
                make_mcq(2, "NB", "Tập xác định của hàm số $y = \\tan x$ là",
                         "$\\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
                         "$\\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
                         "$\\mathbb{R}$",
                         "$[-1; 1]$",
                         "A", "Hàm số $\\tan x = \\sin x/\\cos x$ xác định khi $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\pi/2 + k\\pi$."),
                make_mcq(3, "NB", "Hàm số nào sau đây là hàm số chẵn?",
                         "$y = \\cos x$", "$y = \\sin x$", "$y = \\tan x$", "$y = \\cot x$",
                         "A", "Ta có $\\cos(-x) = \\cos x$ nên $y = \\cos x$ là hàm số chẵn."),
                make_mcq(4, "NB", "Chu kỳ tuần hoàn của hàm số $y = \\sin x$ là",
                         "$2\\pi$", "$\\pi$", "$\\frac{\\pi}{2}$", "$4\\pi$",
                         "A", "Chu kỳ tuần hoàn cơ bản của hàm số $y = \\sin x$ là $T = 2\\pi$."),
                make_mcq(5, "TH", "Tập giá trị của hàm số $y = 3\\sin x - 2$ là",
                         "$[-5; 1]$", "$[-1; 1]$", "$[-3; 3]$", "$[-2; 3]$",
                         "A", "Vì $-1 \\le \\sin x \\le 1 \\Rightarrow -3 \\le 3\\sin x \\le 3 \\Rightarrow -5 \\le 3\\sin x - 2 \\le 1$."),
                make_mcq(6, "TH", "Chu kỳ tuần hoàn của hàm số $y = \\cos 3x$ là",
                         "$\\frac{2\\pi}{3}$", "$6\\pi$", "$2\\pi$", "$\\frac{\\pi}{3}$",
                         "A", "Chu kỳ của $y = \\cos(\\omega x)$ là $T = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{3}$."),
                make_mcq(7, "TH", "Tìm tập xác định của hàm số $y = \\frac{1}{\\sin x}$.",
                         "$\\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
                         "$\\mathbb{R} \\setminus \\{\\pi/2 + k\\pi, k \\in \\mathbb{Z}\\}$",
                         "$\\mathbb{R}$",
                         "$(-1; 1)$",
                         "A", "Điều kiện $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi$."),
                make_mcq(8, "TH", "Hàm số $y = \\sin x$ đồng biến trên khoảng nào sau đây?",
                         "$\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$",
                         "$\\left(0; \\pi\\right)$",
                         "$\\left(\\frac{\\pi}{2}; \\frac{3\\pi}{2}\\right)$",
                         "$\\left(\\pi; 2\\pi\\right)$",
                         "A", "Hàm số $y = \\sin x$ đồng biến trên mỗi khoảng $(-\\pi/2 + k2\\pi; \\pi/2 + k2\\pi)$."),
                make_mcq(9, "VD", "Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = 2\\cos\\left(x - \\frac{\\pi}{3}\\right) + 1$ là",
                         "$M = 3, m = -1$", "$M = 2, m = -2$", "$M = 3, m = 1$", "$M = 1, m = -3$",
                         "A", "$M = 2(1) + 1 = 3, m = 2(-1) + 1 = -1$."),
                make_mcq(10, "VD", "Nhiệt độ ngoài trời $T$ ($^\\circ$C) tại một thành phố sau $t$ giờ kể từ nửa đêm được mô hình hoá bởi $T(t) = 25 + 4\\sin\\left(\\frac{\\pi t}{12} - \\frac{\\pi}{2}\\right)$. Nhiệt độ thấp nhất trong ngày là",
                         "$21^\\circ$C", "$25^\\circ$C", "$29^\\circ$C", "$20^\\circ$C",
                         "A", "$T_{min} = 25 + 4(-1) = 21^\\circ$C."),
                make_mcq(11, "VDC", "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{\\sin x - m}{\\sin x + 1}$ xác định trên $\\mathbb{R}$.",
                         "Không có $m$", "$m > 1$", "$m < -1$", "Mọi $m \\in \\mathbb{R}$",
                         "A", "Mẫu số $\\sin x + 1 = 0 \\Leftrightarrow \\sin x = -1 \\Leftrightarrow x = -\\pi/2 + k2\\pi$. Mẫu số luôn có nghiệm nên hàm số không thể xác định trên $\\mathbb{R}$ với bất kỳ $m$ nào."),
                make_mcq(12, "VDC", "Tìm giá trị lớn nhất của hàm số $y = \\sin^2 x - 4\\sin x + 5$.",
                         "10", "5", "2", "8",
                         "A", "Đặt $t = \\sin x \\in [-1; 1]$. $f(t) = t^2 - 4t + 5$. $f'(t) = 2t - 4 < 0$ trên $[-1; 1]$. Hàm nghịch biến nên $\\max = f(-1) = 1 + 4 + 5 = 10$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x) = 2\\cos 2x - 1$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R}$.", True, "Hàm cosin xác định với mọi $x$."),
                    ("b", "Hàm số là một hàm số chẵn trên $\\mathbb{R}$.", True, "$f(-x) = 2\\cos(-2x) - 1 = 2\\cos 2x - 1 = f(x)$."),
                    ("c", "Chu kỳ tuần hoàn của hàm số là $T = \\pi$.", True, "$T = 2\\pi / 2 = \\pi$."),
                    ("d", "Giá trị nhỏ nhất của hàm số bằng $-3$.", True, "Khi $\\cos 2x = -1 \\Rightarrow y = 2(-1) - 1 = -3$.")
                ]),
                make_tf(2, "Xét tính đơn điệu và đồ thị hàm số $y = \\sin x$.", [
                    ("a", "Đồ thị hàm số $y = \\sin x$ đi qua gốc toạ độ $O(0; 0)$.", True, "$\\sin 0 = 0$."),
                    ("b", "Đồ thị nhận gốc toạ độ $O$ làm tâm đối xứng.", True, "Vì $y = \\sin x$ là hàm số lẻ."),
                    ("c", "Hàm số đồng biến trên khoảng $(0; \\pi)$.", False, "Đồng biến trên $(0; \\pi/2)$ và nghịch biến trên $(\\pi/2; \\pi)$."),
                    ("d", "Đồ thị hàm số bị giới hạn giữa hai đường thẳng $y = -1$ và $y = 1$.", True, "Tập giá trị là $[-1; 1]$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm chu kỳ tuần hoàn $T$ (dưới dạng số nhân $\\pi$) của hàm số $y = \\tan x$.", 1, "Chu kỳ là $\\pi \\Rightarrow 1\\pi$."),
                make_sa(2, "TH", "Tìm giá trị lớn nhất của hàm số $y = 5\\cos x - 3$.", 2, "$5(1) - 3 = 2$."),
                make_sa(3, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = 3\\sin 2x + 4$.", 1, "$3(-1) + 4 = 1$."),
                make_sa(4, "VD", "Mực nước của một cảng biển (mét) biến đổi theo hàm số $h(t) = 10 + 3\\cos\\left(\\frac{\\pi t}{6}\\right)$ ($t$ là số giờ sau nửa đêm). Tìm mực nước cao nhất tại cảng (mét).", 13, "$10 + 3(1) = 13$ m."),
                make_sa(5, "VD", "Tìm chu kỳ tuần hoàn $T$ của hàm số $y = \\sin(4x) + \\cos(2x)$. Biết $T = k\\pi$, tìm $k$.", 1, "$T_1 = 2\\pi/4 = \\pi/2$, $T_2 = 2\\pi/2 = \\pi$. BCNN là $\\pi \\Rightarrow k = 1$."),
                make_sa(6, "VDC", "Tìm giá trị lớn nhất của hàm số $y = \\sin x + \\cos x$. (Làm tròn 2 chữ số thập phân)", 1.41, "$\\sqrt{2} \\approx 1.41$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm tập xác định hàm số lượng giác", "Tìm tập xác định của hàm số $y = \\tan\\left(2x - \\frac{\\pi}{4}\\right)$.",
                           "Điều kiện xác định: $2x - \\frac{\\pi}{4} \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2x \\ne \\frac{3\\pi}{4} + k\\pi \\Leftrightarrow x \\ne \\frac{3\\pi}{8} + k\\frac{\\pi}{2}$ ($k \\in \\mathbb{Z}$). Vậy $D = \\mathbb{R} \\setminus \\{\\frac{3\\pi}{8} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}\\}$."),
                make_essay(2, "TH", 0.5, "Xét tính chẵn lẻ của hàm số", "Xét tính chẵn lẻ của hàm số $y = f(x) = x^2 \\cos 3x + \\sin^2 x$.",
                           "TXĐ: $D = \\mathbb{R}$ đối xứng. $\\forall x \\in D: f(-x) = (-x)^2 \\cos(-3x) + \\sin^2(-x) = x^2 \\cos 3x + [-\\sin x]^2 = x^2 \\cos 3x + \\sin^2 x = f(x)$. Do đó hàm số $y = f(x)$ là hàm số chẵn."),
                make_essay(3, "VD", 0.5, "Tìm giá trị lớn nhất, nhỏ nhất", "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = 3 - 2\\sin^2 x + 4\\cos x$.",
                           "Đưa về cos: $y = 3 - 2(1 - \\cos^2 x) + 4\\cos x = 2\\cos^2 x + 4\\cos x + 1$. Đặt $t = \\cos x \\in [-1; 1]$. Xét parabol $f(t) = 2t^2 + 4t + 1$ có đỉnh $t = -1$. $f(-1) = 2 - 4 + 1 = -1$, $f(1) = 2 + 4 + 1 = 7$. Vậy giá trị nhỏ nhất là $-1$ (khi $\\cos x = -1$) và giá trị lớn nhất là 7 (khi $\\cos x = 1$)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế nhịp tim và huyết áp", "Huyết áp tâm thu $P$ (mmHg) của một người trong trạng thái nghỉ ngơi được mô hình bởi hàm số $P(t) = 100 + 20\\sin(2.5\\pi t)$, trong đó $t$ là thời gian tính bằng giây. Tìm huyết áp tâm thu cao nhất và nhịp tim của người đó (số nhịp trong 1 phút).",
                           "Huyết áp cao nhất: $P_{max} = 100 + 20(1) = 120$ mmHg. Chu kỳ một nhịp tim là $T = \\frac{2\\pi}{2.5\\pi} = \\frac{2}{2.5} = 0.8$ giây. Trong 1 phút (60 giây), số nhịp đập là $\\frac{60}{0.8} = 75$ nhịp/phút.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Tập xác định của hàm số $y = \\cos x$ là",
                         "$\\mathbb{R}$", "$[-1; 1]$", "$\\mathbb{R} \\setminus \\{k\\pi\\}$", "$\\mathbb{R} \\setminus \\{\\pi/2 + k\\pi\\}$",
                         "A", "Hàm số cosin xác định trên toàn bộ $\\mathbb{R}$."),
                make_mcq(2, "NB", "Tập xác định của hàm số $y = \\cot x$ là",
                         "$\\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
                         "$\\mathbb{R} \\setminus \\{\\pi/2 + k\\pi, k \\in \\mathbb{Z}\\}$",
                         "$\\mathbb{R}$",
                         "$[-1; 1]$",
                         "A", "$\\cot x = \\cos x/\\sin x$ xác định khi $\\sin x \\ne 0 \\Leftrightarrow x \\ne k\\pi$."),
                make_mcq(3, "NB", "Hàm số nào sau đây là hàm số lẻ?",
                         "$y = \\sin x$", "$y = \\cos x$", "$y = \\cos 2x$", "$y = |\\sin x|$",
                         "A", "$\\sin(-x) = -\\sin x$ nên $y = \\sin x$ là hàm số lẻ."),
                make_mcq(4, "NB", "Chu kỳ tuần hoàn của hàm số $y = \\tan x$ là",
                         "$\\pi$", "$2\\pi$", "$\\frac{\\pi}{2}$", "$\\frac{\\pi}{4}$",
                         "A", "Chu kỳ tuần hoàn cơ bản của hàm số tan và cot là $\\pi$."),
                make_mcq(5, "TH", "Tập giá trị của hàm số $y = 4\\cos x + 1$ là",
                         "$[-3; 5]$", "$[-4; 4]$", "$[-1; 1]$", "$[1; 5]$",
                         "A", "$-1 \\le \\cos x \\le 1 \\Rightarrow -4 \\le 4\\cos x \\le 4 \\Rightarrow -3 \\le 4\\cos x + 1 \\le 5$."),
                make_mcq(6, "TH", "Chu kỳ tuần hoàn của hàm số $y = \\sin 2x$ là",
                         "$\\pi$", "$2\\pi$", "$4\\pi$", "$\\frac{\\pi}{2}$",
                         "A", "$T = \\frac{2\\pi}{2} = \\pi$."),
                make_mcq(7, "TH", "Tìm tập xác định của hàm số $y = \\frac{1}{\\cos x}$.",
                         "$\\mathbb{R} \\setminus \\{\\pi/2 + k\\pi, k \\in \\mathbb{Z}\\}$",
                         "$\\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
                         "$\\mathbb{R}$",
                         "$[-1; 1]$",
                         "A", "Điều kiện $\\cos x \\ne 0 \\Leftrightarrow x \\ne \\pi/2 + k\\pi$."),
                make_mcq(8, "TH", "Hàm số $y = \\cos x$ nghịch biến trên khoảng nào sau đây?",
                         "$(0; \\pi)$", "$(-\\pi/2; \\pi/2)$", "$(\\pi; 2\\pi)$", "$(-\\pi; 0)$",
                         "A", "Hàm số $y = \\cos x$ nghịch biến trên mỗi khoảng $(k2\\pi; \\pi + k2\\pi)$, trong đó có $(0; \\pi)$."),
                make_mcq(9, "VD", "Giá trị lớn nhất của hàm số $y = 3\\sin(2x - \\pi/4) - 2$ bằng",
                         "1", "3", "5", "-1",
                         "A", "$M = 3(1) - 2 = 1$."),
                make_mcq(10, "VD", "Một con lắc lò xo dao động với phương trình li độ $x(t) = 5\\cos(4\\pi t)$ (cm). Li độ lớn nhất của con lắc là",
                         "5 cm", "10 cm", "2.5 cm", "20 cm",
                         "A", "Biên độ dao động $A = 5$ cm, li độ lớn nhất bằng 5 cm."),
                make_mcq(11, "VDC", "Tìm số điểm gián đoạn của hàm số $y = \\tan 2x$ trên đoạn $[0; \\pi]$.",
                         "2", "1", "3", "4",
                         "A", "Điều kiện $\\cos 2x \\ne 0 \\Leftrightarrow 2x \\ne \\pi/2 + k\\pi \\Leftrightarrow x \\ne \\pi/4 + k\\pi/2$. Trên $[0; \\pi]$ có 2 điểm: $\\pi/4$ và $3\\pi/4$."),
                make_mcq(12, "VDC", "Tìm giá trị nhỏ nhất của hàm số $y = \\cos^2 x + 2\\cos x + 3$.",
                         "2", "0", "3", "1",
                         "A", "$y = (\\cos x + 1)^2 + 2 \\ge 2$. Đạt khi $\\cos x = -1$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x) = 3\\sin 2x$.", [
                    ("a", "Tập xác định của hàm số là $\\mathbb{R}$.", True, "Đúng."),
                    ("b", "Hàm số là một hàm số lẻ trên $\\mathbb{R}$.", True, "$f(-x) = 3\\sin(-2x) = -3\\sin 2x = -f(x)$."),
                    ("c", "Chu kỳ tuần hoàn của hàm số là $T = \\pi$.", True, "$T = 2\\pi / 2 = \\pi$."),
                    ("d", "Tập giá trị của hàm số là $[-3; 3]$.", True, "Đúng vì $-1 \\le \\sin 2x \\le 1$."),
                ]),
                make_tf(2, "Xét đồ thị của hàm số $y = \\cos x$.", [
                    ("a", "Đồ thị cắt trục tung tại điểm $(0; 1)$.", True, "$\\cos 0 = 1$."),
                    ("b", "Trục tung $Oy$ là trục đối xứng của đồ thị.", True, "Vì $y = \\cos x$ là hàm số chẵn."),
                    ("c", "Điểm uốn của đồ thị nằm trên trục hoành.", True, "Các điểm $(\\pi/2 + k\\pi; 0)$ là tâm đối xứng của đường sin/cos."),
                    ("d", "Hàm số đạt giá trị nhỏ nhất tại $x = \\pi + k2\\pi$.", True, "$\\cos(\\pi + k2\\pi) = -1$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm chu kỳ tuần hoàn $T$ (dưới dạng số nhân $\\pi$) của hàm số $y = \\cot x$.", 1, "Chu kỳ là $\\pi \\Rightarrow 1\\pi$."),
                make_sa(2, "TH", "Tìm giá trị lớn nhất của hàm số $y = 6\\sin x + 2$.", 8, "$6(1) + 2 = 8$."),
                make_sa(3, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = 4\\cos 3x - 1$.", -5, "$4(-1) - 1 = -5$."),
                make_sa(4, "VD", "Tìm chu kỳ tuần hoàn $T$ của hàm số $y = \\cos(6\\pi x)$.", 0.33, "$T = 2\\pi / (6\\pi) = 1/3 \\approx 0.33$."),
                make_sa(5, "VD", "Độ sâu mực nước $h$ (m) tại một bờ biển biến thiên theo thời gian $t$ (giờ) bởi $h(t) = 8 + 2\\sin(\\frac{\\pi t}{12})$. Tính độ sâu mực nước thấp nhất (m).", 6, "$8 + 2(-1) = 6$ m."),
                make_sa(6, "VDC", "Tìm giá trị nhỏ nhất của hàm số $y = \\sin^4 x + \\cos^4 x$.", 0.5, "Min khi $\\sin^2 2x = 1 \\Rightarrow 1 - 0.5(1) = 0.5$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm tập xác định hàm số lượng giác", "Tìm tập xác định của hàm số $y = \\cot\\left(x + \\frac{\\pi}{3}\\right)$.",
                           "Điều kiện xác định: $x + \\frac{\\pi}{3} \\ne k\\pi \\Leftrightarrow x \\ne -\\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$). Vậy $D = \\mathbb{R} \\setminus \\{-\\frac{\\pi}{3} + k\\pi, k \\in \\mathbb{Z}\\}$."),
                make_essay(2, "TH", 0.5, "Xét tính chẵn lẻ của hàm số", "Xét tính chẵn lẻ của hàm số $y = f(x) = \\frac{\\tan x}{x^3 + x}$.",
                           "TXĐ: đối xứng qua gốc toạ độ. $\\forall x \\in D: f(-x) = \\frac{\\tan(-x)}{(-x)^3 + (-x)} = \\frac{-\\tan x}{-(x^3 + x)} = \\frac{\\tan x}{x^3 + x} = f(x)$. Do đó hàm số $y = f(x)$ là hàm số chẵn."),
                make_essay(3, "VD", 0.5, "Tìm giá trị lớn nhất, nhỏ nhất", "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = 2\\sin^2 x - \\cos x + 1$.",
                           "Biến đổi: $y = 2(1 - \\cos^2 x) - \\cos x + 1 = -2\\cos^2 x - \\cos x + 3$. Đặt $t = \\cos x \\in [-1; 1]$. Parabol $f(t) = -2t^2 - t + 3$ có đỉnh $t = -1/4$. Tại $t = -1/4: f(-1/4) = -2(1/16) + 1/4 + 3 = 25/8 = 3.125$ (GTLN). Tại $t = 1: f(1) = -2 - 1 + 3 = 0$ (GTNN). Tại $t = -1: f(-1) = 2$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế chiếu sáng mặt trời", "Số giờ có ánh sáng mặt trời trong ngày của một thành phố ở vĩ độ $40^\\circ$ Bắc vào ngày thứ $t$ trong năm ($1 \\le t \\le 365$) được xấp xỉ bởi hàm số $L(t) = 12 + 2.83\\sin\\left(\\frac{2\\pi}{365}(t - 80)\\right)$. Ngày nào trong năm có số giờ chiếu sáng nhiều nhất và số giờ chiếu sáng khi đó là bao nhiêu?",
                           "Số giờ chiếu sáng nhiều nhất khi $\\sin\\left(\\frac{2\\pi}{365}(t - 80)\\right) = 1 \\Leftrightarrow \\frac{2\\pi}{365}(t - 80) = \\frac{\\pi}{2} \\Leftrightarrow t - 80 = \\frac{365}{4} = 91.25 \\Rightarrow t \\approx 171$ (khoảng ngày 20 hoặc 21 tháng 6 - ngày Hạ chí). Khi đó số giờ chiếu sáng tối đa là $L_{max} = 12 + 2.83 = 14.83$ giờ (khoảng 14 giờ 50 phút).")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 4:
        # BÀI 4: PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Nghiệm của phương trình $\\sin x = 0$ là",
                         "$x = k\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$",
                         "$x = k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$",
                         "A", "$\\sin x = 0 \\Leftrightarrow x = k\\pi$."),
                make_mcq(2, "NB", "Nghiệm của phương trình $\\cos x = 1$ là",
                         "$x = k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\pi + k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$",
                         "$x = k\\pi, k \\in \\mathbb{Z}$",
                         "A", "$\\cos x = 1 \\Leftrightarrow x = k2\\pi$."),
                make_mcq(3, "NB", "Phương trình $\\cos x = m$ có nghiệm khi và chỉ khi",
                         "$-1 \\le m \\le 1$", "$m \\ge 1$", "$m \\le -1$", "$m \\in \\mathbb{R}$",
                         "A", "Do tập giá trị của cosin là $[-1; 1]$ nên phương trình có nghiệm $\\Leftrightarrow -1 \\le m \\le 1$."),
                make_mcq(4, "NB", "Nghiệm của phương trình $\\tan x = 1$ là",
                         "$x = \\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\frac{\\pi}{4} + k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = -\\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$",
                         "$x = k\\pi, k \\in \\mathbb{Z}$",
                         "A", "$\\tan x = 1 = \\tan(\\pi/4) \\Leftrightarrow x = \\pi/4 + k\\pi$."),
                make_mcq(5, "TH", "Giải phương trình $\\sin x = \\frac{1}{2}$.",
                         "$x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$",
                         "$x = \\frac{\\pi}{3} + k2\\pi$ hoặc $x = \\frac{2\\pi}{3} + k2\\pi$",
                         "$x = \\pm \\frac{\\pi}{6} + k2\\pi$",
                         "$x = \\frac{\\pi}{6} + k\\pi$",
                         "A", "$\\sin x = \\sin(\\pi/6) \\Leftrightarrow x = \\pi/6 + k2\\pi$ hoặc $x = \\pi - \\pi/6 + k2\\pi = 5\\pi/6 + k2\\pi$."),
                make_mcq(6, "TH", "Giải phương trình $\\cos 2x = -\\frac{\\sqrt{2}}{2}$.",
                         "$x = \\pm \\frac{3\\pi}{8} + k\\pi$",
                         "$x = \\pm \\frac{3\\pi}{4} + k2\\pi$",
                         "$x = \\pm \\frac{\\pi}{4} + k\\pi$",
                         "$x = \\frac{3\\pi}{8} + k\\pi$",
                         "A", "$\\cos 2x = \\cos(3\\pi/4) \\Leftrightarrow 2x = \\pm 3\\pi/4 + k2\\pi \\Leftrightarrow x = \\pm 3\\pi/8 + k\\pi$."),
                make_mcq(7, "TH", "Số nghiệm của phương trình $\\sin x = 0$ trên đoạn $[0; 2\\pi]$ là",
                         "3", "2", "1", "4",
                         "A", "Nghiệm $x = k\\pi$. Trên $[0; 2\\pi]$ có $x = 0, \\pi, 2\\pi$ (3 nghiệm)."),
                make_mcq(8, "TH", "Giải phương trình $\\sqrt{3}\\tan x - 1 = 0$.",
                         "$x = \\frac{\\pi}{6} + k\\pi$", "$x = \\frac{\\pi}{3} + k\\pi$", "$x = \\frac{\\pi}{6} + k2\\pi$", "$x = -\\frac{\\pi}{6} + k\\pi$",
                         "A", "$\\tan x = 1/\\sqrt{3} = \\tan(\\pi/6) \\Leftrightarrow x = \\pi/6 + k\\pi$."),
                make_mcq(9, "VD", "Nghiệm dương nhỏ nhất của phương trình $\\cos\\left(x - \\frac{\\pi}{3}\\right) = 0$ là",
                         "$\\frac{5\\pi}{6}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{2}$", "$\\frac{2\\pi}{3}$",
                         "A", "$x - \\pi/3 = \\pi/2 + k\\pi \\Leftrightarrow x = 5\\pi/6 + k\\pi$. Nghiệm dương nhỏ nhất ứng với $k=0$ là $5\\pi/6$."),
                make_mcq(10, "VD", "Một quả lắc đồng hồ dao động với li độ góc $\\theta(t) = 0.1\\cos(2\\pi t)$ (rad). Thời điểm đầu tiên quả lắc đi qua vị trí cân bằng ($\\theta = 0$) là",
                         "$0.25$ s", "$0.5$ s", "$1$ s", "$0.125$ s",
                         "A", "$\\cos(2\\pi t) = 0 \\Leftrightarrow 2\\pi t = \\pi/2 + k\\pi \\Rightarrow t = 1/4 + k/2$. Với $k = 0: t = 0.25$ s."),
                make_mcq(11, "VDC", "Tìm số nghiệm của phương trình $\\sin 2x = \\cos x$ trên khoảng $(0; 2\\pi)$.",
                         "4", "3", "5", "2",
                         "A", "$2\\sin x \\cos x - \\cos x = 0 \\Leftrightarrow \\cos x(2\\sin x - 1) = 0$. $\\cos x = 0 \\Rightarrow x = \\pi/2, 3\\pi/2$ (2 nghiệm). $\\sin x = 1/2 \\Rightarrow x = \\pi/6, 5\\pi/6$ (2 nghiệm). Tổng có 4 nghiệm phân biệt."),
                make_mcq(12, "VDC", "Tìm tất cả các giá trị của $m$ để phương trình $\\sin^2 x - (m + 1)\\sin x + m = 0$ có nghiệm.",
                         "$-1 \\le m \\le 1$", "$m \\in \\mathbb{R}$", "$m \\ge 1$", "$m \\le -1$",
                         "A", "Phương trình phân tích thành $(\\sin x - 1)(\\sin x - m) = 0$. Nghiệm $\\sin x = 1$ luôn có nghiệm với mọi $m \\in \\mathbb{R}$. Do đó phương trình luôn có nghiệm với mọi $m$.")
            ]
            tfs = [
                make_tf(1, "Cho phương trình $\\cos 2x = \\frac{1}{2}$.", [
                    ("a", "Phương trình có nghiệm tổng quát là $x = \\pm \\frac{\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$).", True, "$2x = \\pm \\pi/3 + k2\\pi \\Leftrightarrow x = \\pm \\pi/6 + k\\pi$."),
                    ("b", "Nghiệm dương nhỏ nhất của phương trình là $x = \\frac{\\pi}{6}$.", True, "Ứng với dấu cộng và $k = 0$."),
                    ("c", "Trên khoảng $(0; \\pi)$, phương trình có đúng 2 nghiệm.", True, "$x_1 = \\pi/6$ và $x_2 = 5\\pi/6$."),
                    ("d", "Tổng các nghiệm của phương trình trên khoảng $(0; \\pi)$ bằng $\\pi$.", True, "$\\pi/6 + 5\\pi/6 = \\pi$.")
                ]),
                make_tf(2, "Xét phương trình lượng giác $\\sin x = m$.", [
                    ("a", "Nếu $|m| > 1$ thì phương trình vô nghiệm.", True, "Vì $-1 \\le \\sin x \\le 1$."),
                    ("b", "Nếu $m = 1$ thì phương trình có một họ nghiệm $x = \\frac{\\pi}{2} + k2\\pi$.", True, "Đúng."),
                    ("c", "Nếu $m = -1$ thì phương trình có một họ nghiệm $x = -\\frac{\\pi}{2} + k2\\pi$.", True, "Đúng."),
                    ("d", "Nếu $m = 0$ thì phương trình có vô số nghiệm là $x = k2\\pi$.", False, "Nghiệm của $\\sin x = 0$ là $x = k\\pi$, chu kỳ là $\\pi$ chứ không phải $2\\pi$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Phương trình $\\tan x = 0$ có nghiệm $x = k\\pi$. Điền số $k$ ứng với nghiệm trong khoảng $(2; 4)$.", 1, "Khi $k = 1: x = \\pi \\approx 3.14 \\in (2; 4)$."),
                make_sa(2, "TH", "Tìm số nghiệm của phương trình $\\cos x = 0$ trên đoạn $[0; 3\\pi]$.", 3, "$x = \\pi/2, 3\\pi/2, 5\\pi/2$ (3 nghiệm)."),
                make_sa(3, "TH", "Nghiệm âm lớn nhất của phương trình $\\sin x = -1$ là $-\\frac{a\\pi}{b}$ với $a/b$ tối giản. Tìm $a + b$.", 3, "$x = -\\pi/2 \\Rightarrow a=1, b=2 \\Rightarrow a+b=3$."),
                make_sa(4, "VD", "Tìm số nghiệm của phương trình $\\sin 3x = 0$ trên đoạn $[0; \\pi]$.", 4, "$3x = k\\pi \\Rightarrow x = k\\pi/3$. $k = 0, 1, 2, 3$ (4 nghiệm)."),
                make_sa(5, "VD", "Một ngọn hải đăng quay đèn với tốc độ $\\omega = 2$ vòng/phút. Tia sáng quét qua một tàu quan sát tại các thời điểm $\\sin(4\\pi t) = 1$ ($t$ tính bằng phút). Tìm thời điểm đầu tiên tia sáng quét qua tàu sau mốc $t = 0$.", 0.125, "$4\\pi t = \\pi/2 \\Rightarrow t = 1/8 = 0.125$ phút."),
                make_sa(6, "VDC", "Tìm số nghiệm của phương trình $\\cos^2 x - 3\\cos x + 2 = 0$ trên đoạn $[0; 4\\pi]$.", 3, "$\\cos x = 1$ (do $\\cos x = 2$ vô nghiệm). $x = 0, 2\\pi, 4\\pi$ (3 nghiệm).")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Giải phương trình lượng giác cơ bản", "Giải phương trình lượng giác: $2\\sin\\left(x + \\frac{\\pi}{4}\\right) - \\sqrt{3} = 0$.",
                           "Phương trình $\\Leftrightarrow \\sin\\left(x + \\frac{\\pi}{4}\\right) = \\frac{\\sqrt{3}}{2} = \\sin\\frac{\\pi}{3}$. $\\Leftrightarrow x + \\frac{\\pi}{4} = \\frac{\\pi}{3} + k2\\pi$ hoặc $x + \\frac{\\pi}{4} = \\frac{2\\pi}{3} + k2\\pi$. $\\Leftrightarrow x = \\frac{\\pi}{12} + k2\\pi$ hoặc $x = \\frac{5\\pi}{12} + k2\\pi$ ($k \\in \\mathbb{Z}$)."),
                make_essay(2, "TH", 0.5, "Giải phương trình với điều kiện nghiệm", "Tìm tất cả các nghiệm của phương trình $\\cos 2x = 0$ thuộc khoảng $(0; 2\\pi)$.",
                           "$\\cos 2x = 0 \\Leftrightarrow 2x = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\frac{\\pi}{4} + k\\frac{\\pi}{2}$ ($k \\in \\mathbb{Z}$). Điều kiện $0 < \\frac{\\pi}{4} + k\\frac{\\pi}{2} < 2\\pi \\Leftrightarrow -1/2 < k < 3.5$. Do $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0; 1; 2; 3\\}$. Các nghiệm là: $x = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}$."),
                make_essay(3, "VD", 0.5, "Giải phương trình quy về cơ bản", "Giải phương trình: $\\sin 2x - \\sin x = 0$.",
                           "Phương trình $\\Leftrightarrow 2\\sin x \\cos x - \\sin x = 0 \\Leftrightarrow \\sin x(2\\cos x - 1) = 0$. TH1: $\\sin x = 0 \\Leftrightarrow x = k\\pi$ ($k \\in \\mathbb{Z}$). TH2: $\\cos x = 1/2 \\Leftrightarrow x = \\pm \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế con lắc đơn", "Một con lắc đơn dao động điều hoà với phương trình li độ $s(t) = 4\\cos\\left(2\\pi t - \\frac{\\pi}{6}\\right)$ (cm), trong đó $t$ tính bằng giây. Trong 2 giây đầu tiên, con lắc đi qua vị trí có li độ $s = 2$ cm bao nhiêu lần?",
                           "Ta có $4\\cos(2\\pi t - \\pi/6) = 2 \\Leftrightarrow \\cos(2\\pi t - \\pi/6) = 1/2$. $\\Leftrightarrow 2\\pi t - \\pi/6 = \\pm \\pi/3 + k2\\pi$. Nhánh 1: $2\\pi t = \\pi/2 + k2\\pi \\Rightarrow t = 1/4 + k$. Trong $[0; 2]$, $k = 0, 1 \\Rightarrow t = 0.25; 1.25$ (2 lần). Nhánh 2: $2\\pi t = -\\pi/6 + k2\\pi \\Rightarrow t = -1/12 + k$. Trong $[0; 2]$, $k = 1, 2 \\Rightarrow t = 11/12; 23/12$ (2 lần). Tổng cộng con lắc đi qua vị trí đó 4 lần.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Nghiệm của phương trình $\\cos x = 0$ là",
                         "$x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$",
                         "$x = k\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = k2\\pi, k \\in \\mathbb{Z}$",
                         "A", "$\\cos x = 0 \\Leftrightarrow x = \\pi/2 + k\\pi$."),
                make_mcq(2, "NB", "Nghiệm của phương trình $\\sin x = 1$ là",
                         "$x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\pi + k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = k\\pi, k \\in \\mathbb{Z}$",
                         "A", "$\\sin x = 1 \\Leftrightarrow x = \\pi/2 + k2\\pi$."),
                make_mcq(3, "NB", "Phương trình $\\sin x = m$ có nghiệm khi và chỉ khi",
                         "$-1 \\le m \\le 1$", "$m > 1$", "$m < -1$", "$m \\in \\mathbb{R}$",
                         "A", "Tập giá trị của sin là $[-1; 1]$ nên phương trình có nghiệm khi $-1 \\le m \\le 1$."),
                make_mcq(4, "NB", "Nghiệm của phương trình $\\tan x = 0$ là",
                         "$x = k\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}$",
                         "$x = k2\\pi, k \\in \\mathbb{Z}$",
                         "$x = \\frac{\\pi}{4} + k\\pi, k \\in \\mathbb{Z}$",
                         "A", "$\\tan x = 0 \\Leftrightarrow x = k\\pi$."),
                make_mcq(5, "TH", "Giải phương trình $\\cos x = \\frac{1}{2}$.",
                         "$x = \\pm \\frac{\\pi}{3} + k2\\pi$",
                         "$x = \\pm \\frac{\\pi}{6} + k2\\pi$",
                         "$x = \\frac{\\pi}{3} + k\\pi$",
                         "$x = \\frac{\\pi}{3} + k2\\pi$",
                         "A", "$\\cos x = \\cos(\\pi/3) \\Leftrightarrow x = \\pm \\pi/3 + k2\\pi$."),
                make_mcq(6, "TH", "Giải phương trình $\\sin 2x = -\\frac{1}{2}$.",
                         "$x = -\\frac{\\pi}{12} + k\\pi$ hoặc $x = \\frac{7\\pi}{12} + k\\pi$",
                         "$x = -\\frac{\\pi}{6} + k\\pi$",
                         "$x = \\pm \\frac{\\pi}{6} + k2\\pi$",
                         "$x = \\frac{\\pi}{12} + k\\pi$",
                         "A", "$2x = -\\pi/6 + k2\\pi \\Rightarrow x = -\\pi/12 + k\\pi$; hoặc $2x = \\pi - (-\\pi/6) + k2\\pi = 7\\pi/6 + k2\\pi \\Rightarrow x = 7\\pi/12 + k\\pi$."),
                make_mcq(7, "TH", "Số nghiệm của phương trình $\\cos x = 0$ trên đoạn $[0; 2\\pi]$ là",
                         "2", "1", "3", "4",
                         "A", "$x = \\pi/2, 3\\pi/2$ (2 nghiệm)."),
                make_mcq(8, "TH", "Giải phương trình $\\tan x = \\sqrt{3}$.",
                         "$x = \\frac{\\pi}{3} + k\\pi$", "$x = \\frac{\\pi}{6} + k\\pi$", "$x = \\frac{\\pi}{3} + k2\\pi$", "$x = -\\frac{\\pi}{3} + k\\pi$",
                         "A", "$\\tan x = \\tan(\\pi/3) \\Leftrightarrow x = \\pi/3 + k\\pi$."),
                make_mcq(9, "VD", "Nghiệm dương nhỏ nhất của phương trình $\\sin\\left(2x - \\frac{\\pi}{6}\\right) = 0$ là",
                         "$\\frac{\\pi}{12}$", "$\\frac{\\pi}{6}$", "$\\frac{\\pi}{3}$", "$\\frac{7\\pi}{12}$",
                         "A", "$2x - \\pi/6 = k\\pi \\Leftrightarrow 2x = \\pi/6 + k\\pi \\Rightarrow x = \\pi/12 + k\\pi/2$. Ứng với $k = 0: x = \\pi/12$."),
                make_mcq(10, "VD", "Một máy phát điện xoay chiều tạo ra suất điện động $e(t) = 220\\sqrt{2}\\cos(100\\pi t)$ (V). Thời điểm đầu tiên sau $t = 0$ mà suất điện động triệt tiêu ($e = 0$) là",
                         "$\\frac{1}{200}$ s", "$\\frac{1}{100}$ s", "$\\frac{1}{50}$ s", "$\\frac{1}{400}$ s",
                         "A", "$\\cos(100\\pi t) = 0 \\Leftrightarrow 100\\pi t = \\pi/2 + k\\pi \\Rightarrow t = 1/200 + k/100$. Thời điểm đầu tiên $k=0$ là $t = 1/200$ s."),
                make_mcq(11, "VDC", "Số nghiệm của phương trình $\\sin x + \\cos x = 0$ trên khoảng $(-\\pi; \\pi)$ là",
                         "2", "1", "3", "0",
                         "A", "$\\sqrt{2}\\sin(x + \\pi/4) = 0 \\Leftrightarrow x = -\\pi/4 + k\\pi$. Trên $(-\\pi; \\pi)$ có $x = -\\pi/4$ và $x = 3\\pi/4$ (2 nghiệm)."),
                make_mcq(12, "VDC", "Tìm $m$ để phương trình $\\cos 2x - 2m = 0$ có nghiệm.",
                         "$-0.5 \\le m \\le 0.5$", "$-1 \\le m \\le 1$", "$m \\le 0.5$", "$m \\ge -0.5$",
                         "A", "$\\cos 2x = 2m$. Điều kiện $-1 \\le 2m \\le 1 \\Leftrightarrow -0.5 \\le m \\le 0.5$.")
            ]
            tfs = [
                make_tf(1, "Cho phương trình $\\sin 2x = \\frac{\\sqrt{3}}{2}$.", [
                    ("a", "Họ nghiệm thứ nhất của phương trình là $x = \\frac{\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$).", True, "$2x = \\pi/3 + k2\\pi \\Leftrightarrow x = \\pi/6 + k\\pi$."),
                    ("b", "Họ nghiệm thứ hai của phương trình là $x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$).", True, "$2x = 2\\pi/3 + k2\\pi \\Leftrightarrow x = \\pi/3 + k\\pi$."),
                    ("c", "Trên khoảng $(0; \\pi)$, phương trình có đúng 2 nghiệm.", True, "$x_1 = \\pi/6$ và $x_2 = \\pi/3$."),
                    ("d", "Tổng các nghiệm của phương trình trên khoảng $(0; \\pi)$ bằng $\\frac{\\pi}{2}$.", True, "$\\pi/6 + \\pi/3 = \\pi/2$.")
                ]),
                make_tf(2, "Xét phương trình lượng giác $\\cos x = m$.", [
                    ("a", "Khi $m = 2$, phương trình vô nghiệm.", True, "Vì $2 > 1$."),
                    ("b", "Khi $m = 0$, nghiệm của phương trình là $x = \\frac{\\pi}{2} + k\\pi$.", True, "Đúng."),
                    ("c", "Khi $m = -1$, nghiệm của phương trình là $x = \\pi + k2\\pi$.", True, "Đúng."),
                    ("d", "Phương trình luôn có nghiệm với mọi số thực $m$.", False, "Chỉ có nghiệm khi $-1 \\le m \\le 1$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm nghiệm nhỏ nhất không âm của phương trình $\\cos x = 1$.", 0, "$\\cos 0 = 1$ nên nghiệm nhỏ nhất không âm là 0."),
                make_sa(2, "TH", "Tìm số nghiệm của phương trình $\\sin x = 0$ trên đoạn $[0; 4\\pi]$.", 5, "$x = 0, \\pi, 2\\pi, 3\\pi, 4\\pi$ (5 nghiệm)."),
                make_sa(3, "TH", "Phương trình $\\tan x = -1$ có nghiệm âm lớn nhất là $-\\frac{\\pi}{k}$. Tìm số nguyên dương $k$.", 4, "$x = -\\pi/4 \\Rightarrow k = 4$."),
                make_sa(4, "VD", "Tìm số nghiệm của phương trình $\\cos 4x = 0$ trên đoạn $[0; \\pi]$.", 4, "$4x = \\pi/2 + k\\pi \\Rightarrow x = \\pi/8 + k\\pi/4$. $k = 0, 1, 2, 3$ (4 nghiệm)."),
                make_sa(5, "VD", "Một piston trong động cơ chuyển động với vị trí $x(t) = 10\\cos(50\\pi t)$ (mm). Tìm số lần piston đi qua vị trí cân bằng ($x = 0$) trong 1 giây đầu tiên.", 50, "$50\\pi t = \\pi/2 + k\\pi \\Rightarrow t = 1/100 + k/50$. Trong $[0; 1]$ có 50 giá trị $k$ từ 0 đến 49."),
                make_sa(6, "VDC", "Tìm số nghiệm của phương trình $\\sin^2 x - 1 = 0$ trên đoạn $[0; 2\\pi]$.", 2, "$\\sin^2 x = 1 \\Leftrightarrow \\cos x = 0 \\Rightarrow x = \\pi/2, 3\\pi/2$ (2 nghiệm).")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Giải phương trình lượng giác cơ bản", "Giải phương trình lượng giác: $2\\cos\\left(2x - \\frac{\\pi}{3}\\right) + 1 = 0$.",
                           "$\\cos(2x - \\pi/3) = -1/2 = \\cos(2\\pi/3)$. $\\Leftrightarrow 2x - \\pi/3 = \\pm 2\\pi/3 + k2\\pi$. Nhánh 1: $2x = \\pi + k2\\pi \\Rightarrow x = \\frac{\\pi}{2} + k\\pi$. Nhánh 2: $2x = -\\pi/3 + k2\\pi \\Rightarrow x = -\\frac{\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$)."),
                make_essay(2, "TH", 0.5, "Giải phương trình tìm nghiệm trên đoạn", "Tìm tất cả các nghiệm của phương trình $\\sin 3x = -1$ thuộc đoạn $[0; 2\\pi]$.",
                           "$\\sin 3x = -1 \\Leftrightarrow 3x = -\\frac{\\pi}{2} + k2\\pi \\Leftrightarrow x = -\\frac{\\pi}{6} + k\\frac{2\\pi}{3}$ ($k \\in \\mathbb{Z}$). Điều kiện $0 \\le -\\frac{\\pi}{6} + k\\frac{2\\pi}{3} \\le 2\\pi \\Leftrightarrow 1/4 \\le k \\le 13/4$. Suy ra $k \\in \\{1; 2; 3\\}$. Các nghiệm là $x = \\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}$."),
                make_essay(3, "VD", 0.5, "Giải phương trình tích", "Giải phương trình: $\\cos 2x + \\cos 4x = 0$.",
                           "Biến đổi tổng thành tích: $2\\cos 3x \\cos x = 0$. TH1: $\\cos 3x = 0 \\Leftrightarrow 3x = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow x = \\frac{\\pi}{6} + k\\frac{\\pi}{3}$ ($k \\in \\mathbb{Z}$). TH2: $\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$), họ nghiệm này đã chứa trong họ thứ nhất. Vậy nghiệm là $x = \\frac{\\pi}{6} + k\\frac{\\pi}{3}$ ($k \\in \\mathbb{Z}$)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế dao động sóng biển", "Chiều cao sóng biển tại một phao quan trắc được mô tả bởi $h(t) = 3\\sin\\left(\\frac{\\pi t}{4}\\right)$ (m), với $t$ tính bằng giây kể từ $t = 0$. Trong 20 giây đầu tiên, có bao nhiêu thời điểm chiều cao sóng đạt giá trị cực đại 3 m?",
                           "Chiều cao đạt cực đại khi $3\\sin(\\frac{\\pi t}{4}) = 3 \\Leftrightarrow \\sin(\\frac{\\pi t}{4}) = 1 \\Leftrightarrow \\frac{\\pi t}{4} = \\frac{\\pi}{2} + k2\\pi \\Leftrightarrow t = 2 + 8k$ ($k \\in \\mathbb{Z}$). Trong khoảng $0 \\le t \\le 20$: $0 \\le 2 + 8k \\le 20 \\Leftrightarrow -0.25 \\le k \\le 2.25$. Do $k$ nguyên nên $k \\in \\{0; 1; 2\\}$. Tương ứng với các thời điểm $t = 2$ s, $t = 10$ s, $t = 18$ s. Vậy có 3 thời điểm.")
            ]
        return mcqs, tfs, sas, essays

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 1 Toán 11.")
