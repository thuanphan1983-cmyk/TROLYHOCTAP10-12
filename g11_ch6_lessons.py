# -*- coding: utf-8 -*-
"""
Chương 6 Lớp 11: Hàm số mũ và hàm số lôgarit.
Bao gồm:
- Bài 18: Luỹ thừa với số mũ thực
- Bài 19: Lôgarit
- Bài 20: Hàm số mũ và hàm số lôgarit
- Bài 21: Phương trình, bất phương trình mũ và lôgarit
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch6_lesson(lnum, k):
    if lnum == 18:
        # BÀI 18: LUỸ THỪA VỚI SỐ MŨ THỰC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Với $a > 0$ và $m, n \\in \\mathbb{R}$, công thức nào sau đây đúng?",
                         "$a^m \\cdot a^n = a^{m+n}$",
                         "$a^m \\cdot a^n = a^{mn}$",
                         "$\\frac{a^m}{a^n} = a^{m/n}$",
                         "$(a^m)^n = a^{m+n}$",
                         "A", "Quy tắc nhân hai luỹ thừa cùng cơ số: $a^m a^n = a^{m+n}$."),
                make_mcq(2, "NB", "Với $a > 0$, biểu thức $\\sqrt[3]{a^2}$ viết dưới dạng luỹ thừa với số mũ hữu tỉ là",
                         "$a^{\\frac{2}{3}}$", "$a^{\\frac{3}{2}}$", "$a^6$", "$a^{\\frac{1}{3}}$",
                         "A", "$\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$, do đó $\\sqrt[3]{a^2} = a^{2/3}$."),
                make_mcq(3, "NB", "Giá trị của biểu thức $P = 4^{\\frac{3}{2}}$ bằng",
                         "8", "6", "16", "2",
                         "A", "$4^{3/2} = (2^2)^{3/2} = 2^3 = 8$."),
                make_mcq(4, "NB", "Khẳng định nào sau đây là sai với $a > 0, b > 0$?",
                         "$(a + b)^2 = a^2 + b^2$",
                         "$(ab)^x = a^x b^x$",
                         "$\\left(\\frac{a}{b}\\right)^x = \\frac{a^x}{b^x}$",
                         "$(a^x)^y = a^{xy}$",
                         "A", "Luỹ thừa của một tổng không bằng tổng các luỹ thừa: $(a+b)^2 = a^2 + 2ab + b^2$."),
                make_mcq(5, "TH", "Rút gọn biểu thức $P = a^{\\frac{1}{3}} \\cdot \\sqrt{a}$ với $a > 0$.",
                         "$a^{\\frac{5}{6}}$", "$a^{\\frac{1}{6}}$", "$a^{\\frac{2}{3}}$", "$a^{\\frac{1}{2}}$",
                         "A", "$P = a^{1/3} \\cdot a^{1/2} = a^{1/3 + 1/2} = a^{5/6}$."),
                make_mcq(6, "TH", "Tính giá trị của biểu thức $P = \\frac{2^3 \\cdot 2^{-1} + 5^{-3} \\cdot 5^4}{10^0}$.",
                         "9", "7", "4", "5",
                         "A", "$P = 2^{3-1} + 5^{-3+4} = 2^2 + 5^1 = 4 + 5 = 9$."),
                make_mcq(7, "TH", "So sánh $a = (0.5)^{\\sqrt{2}}$ và $b = (0.5)^{\\sqrt{3}}$.",
                         "$a > b$", "$a < b$", "$a = b$", "$a \\le b$",
                         "A", "Vì cơ số $0 < 0.5 < 1$ và $\\sqrt{2} < \\sqrt{3}$ nên $(0.5)^{\\sqrt{2}} > (0.5)^{\\sqrt{3}}$."),
                make_mcq(8, "TH", "Rút gọn biểu thức $K = \\frac{x^{\\frac{5}{4}} y + x y^{\\frac{5}{4}}}{\\sqrt[4]{x} + \\sqrt[4]{y}}$ với $x > 0, y > 0$.",
                         "$xy$", "$x + y$", "$x^2 y^2$", "$\\sqrt{xy}$",
                         "A", "Tử số $= x y(x^{1/4} + y^{1/4})$. Chia cho mẫu số được $xy$."),
                make_mcq(9, "VD", "Một khoản tiền 50 triệu đồng gửi tiết kiệm theo hình thức lãi kép kỳ hạn 1 năm với lãi suất $7\\%$/năm. Sau $n$ năm số tiền cả gốc lẫn lãi tính theo công thức $A = 50 \\cdot (1.07)^n$ (triệu đồng). Sau 5 năm, số tiền nhận được xấp xỉ là",
                         "70.13 triệu đồng", "65.50 triệu đồng", "68.20 triệu đồng", "72.40 triệu đồng",
                         "A", "$A = 50 \\times (1.07)^5 = 50 \\times 1.40255 \\approx 70.13$ triệu đồng."),
                make_mcq(10, "VD", "Cho $a > 0, b > 0$ thoả mãn $a^{\\frac{1}{2}} + b^{\\frac{1}{2}} = 4$ và $ab = 9$. Giá trị của $a + b$ bằng",
                         "10", "16", "7", "12",
                         "A", "Bình phương hai vế: $(a^{1/2} + b^{1/2})^2 = a + b + 2\\sqrt{ab} = 16 \\Rightarrow a + b + 2(3) = 16 \\Rightarrow a + b = 10$."),
                make_mcq(11, "VDC", "Rút gọn biểu thức $P = \\left(\\frac{a^{\\sqrt{3}+1} \\cdot a^{2-\\sqrt{3}}}{(a^{\\sqrt{2}-2})^{\\sqrt{2}+2}}\\right)$ với $a > 0$.",
                         "$a^5$", "$a^3$", "$a$", "$a^7$",
                         "A", "Tử số: $a^{(\\sqrt{3}+1) + (2-\\sqrt{3})} = a^3$. Mẫu số: $a^{(\\sqrt{2}-2)(\\sqrt{2}+2)} = a^{2-4} = a^{-2}$. $P = \\frac{a^3}{a^{-2}} = a^{3 - (-2)} = a^5$."),
                make_mcq(12, "VDC", "Biết $4^x + 4^{-x} = 7$. Tính giá trị của biểu thức $P = 2^x + 2^{-x}$.",
                         "3", "9", "5", "$\\sqrt{7}$",
                         "A", "Đặt $t = 2^x + 2^{-x} > 0$. Ta có $t^2 = 4^x + 4^{-x} + 2 = 7 + 2 = 9 \\Rightarrow t = 3$.")
            ]
            tfs = [
                make_tf(1, "Cho số thực dương $a > 0$ và biểu thức $P = a^{\\frac{4}{3}} : \\sqrt[3]{a}$.", [
                    ("a", "Biểu thức $\\sqrt[3]{a}$ có thể viết là $a^{\\frac{1}{3}}$.", True, "Đúng."),
                    ("b", "Số mũ của luỹ thừa thương là $\\frac{4}{3} - \\frac{1}{3} = 1$.", True, "Quy tắc chia hai luỹ thừa cùng cơ số."),
                    ("c", "Kết quả rút gọn của biểu thức là $P = a$.", True, "$a^1 = a$."),
                    ("d", "Nếu $a = 8$ thì giá trị của $P$ bằng 2.", False, "Vì $P = a$ nên $P = 8$.")
                ]),
                make_tf(2, "Xét các mệnh đề về luỹ thừa.", [
                    ("a", "Với mọi $a \\ne 0$, ta có $a^0 = 1$.", True, "Quy ước luỹ thừa mũ 0."),
                    ("b", "Với $a > 1$, nếu $m > n$ thì $a^m > a^n$.", True, "Tính đồng biến khi cơ số lớn hơn 1."),
                    ("c", "Với $0 < a < 1$, nếu $m > n$ thì $a^m < a^n$.", True, "Tính nghịch biến khi cơ số trong khoảng $(0; 1)$."),
                    ("d", "$(-2)^4$ không có nghĩa trong tập số thực.", False, "$(-2)^4 = 16$ hoàn toàn có nghĩa với số mũ nguyên dương.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giá trị của $27^{\\frac{1}{3}}$.", 3, "$3^3 = 27$."),
                make_sa(2, "TH", "Tính giá trị của $16^{0.75}$.", 8, "$16^{3/4} = 2^3 = 8$."),
                make_sa(3, "TH", "Cho $a > 0$. Viết $\\sqrt{a \\sqrt{a}}$ dưới dạng $a^k$. Tìm $k$.", 0.75, "$\\sqrt{a \\cdot a^{1/2}} = a^{3/4} = 0.75$."),
                make_sa(4, "VD", "Cho $2^x = 5$. Tính giá trị của $2^{x+2}$.", 20, "$2^x \\cdot 4 = 20$."),
                make_sa(5, "VD", "Tính giá trị của biểu thức $P = (\\sqrt{2}-1)^{2026} (\\sqrt{2}+1)^{2026}$.", 1, "$((\\sqrt{2}-1)(\\sqrt{2}+1))^{2026} = 1^{2026} = 1$."),
                make_sa(6, "VDC", "Cho $9^x + 9^{-x} = 14$. Tính giá trị của $3^x + 3^{-x}$.", 4, "$(3^x + 3^{-x})^2 = 14 + 2 = 16 \\Rightarrow 4$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Rút gọn biểu thức luỹ thừa", "Rút gọn biểu thức: $A = \\frac{a^{\\frac{1}{3}} b^{-\\frac{1}{3}} - a^{-\\frac{1}{3}} b^{\\frac{1}{3}}}{\\sqrt[3]{a^2} - \\sqrt[3]{b^2}}$ với $a > 0, b > 0, a \\ne b$.",
                           "Quy đồng tử số: tử $= \\frac{a^{2/3} - b^{2/3}}{a^{1/3} b^{1/3}} = \\frac{\\sqrt[3]{a^2} - \\sqrt[3]{b^2}}{\\sqrt[3]{ab}}$. Chia cho mẫu số: $A = \\frac{1}{\\sqrt[3]{ab}} = (ab)^{-1/3}$."),
                make_essay(2, "TH", 0.5, "So sánh các luỹ thừa", "So sánh hai số: $A = 3^{600}$ và $B = 4^{450}$.",
                           "Ta đưa về cùng số mũ là ước chung lớn nhất của 600 và 450 là 150: $A = 3^{600} = (3^4)^{150} = 81^{150}$. $B = 4^{450} = (4^3)^{150} = 64^{150}$. Vì $81 > 64 > 0$ và số mũ $150 > 0$, suy ra $81^{150} > 64^{150}$, hay $A > B$."),
                make_essay(3, "VD", 0.5, "Tính giá trị biểu thức đối xứng", "Cho $a > 0$ thoả mãn $a^x + a^{-x} = 3$. Tính giá trị của biểu thức $P = \\frac{a^{3x} + a^{-3x} + 2}{a^{2x} + a^{-2x} + 1}$.",
                           "Ta có: $a^{2x} + a^{-2x} = (a^x + a^{-x})^2 - 2 = 3^2 - 2 = 7$. $a^{3x} + a^{-3x} = (a^x + a^{-x})^3 - 3(a^x + a^{-x}) = 3^3 - 3(3) = 18$. Thay vào biểu thức: $P = \\frac{18 + 2}{7 + 1} = \\frac{20}{8} = 2.5$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tăng trưởng vi sinh", "Số lượng vi khuẩn $N(t)$ trong một mẻ cấy men sinh học sau $t$ giờ phát triển theo hàm số mũ luỹ thừa: $N(t) = 1000 \\cdot 2^{0.5t}$. Ban đầu mẻ cấy có 1000 con vi khuẩn. Sau bao nhiêu giờ thì số lượng vi khuẩn đạt 32.000 con?",
                           "Ta có phương trình: $1000 \\cdot 2^{0.5t} = 32000 \\Leftrightarrow 2^{0.5t} = 32 = 2^5$. Cùng cơ số 2: $0.5t = 5 \\Rightarrow t = 10$ giờ. Vậy sau 10 giờ thì số lượng vi khuẩn đạt 32.000 con.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Với $a > 0$ và $\\alpha, \\beta \\in \\mathbb{R}$, công thức nào sau đây đúng?",
                         "$\\frac{a^\\alpha}{a^\\beta} = a^{\\alpha - \\beta}$",
                         "$\\frac{a^\\alpha}{a^\\beta} = a^{\\alpha / \\beta}$",
                         "$(a^\\alpha)^\\beta = a^{\\alpha + \\beta}$",
                         "$a^\\alpha \\cdot a^\\beta = a^{\\alpha \\beta}$",
                         "A", "Thương hai luỹ thừa cùng cơ số: $\\frac{a^\\alpha}{a^\\beta} = a^{\\alpha - \\beta}$."),
                make_mcq(2, "NB", "Biểu thức $\\sqrt{x^3}$ ($x > 0$) viết dưới dạng luỹ thừa với số mũ hữu tỉ là",
                         "$x^{\\frac{3}{2}}$", "$x^{\\frac{2}{3}}$", "$x^6$", "$x^3$",
                         "A", "$\\sqrt{x^3} = x^{3/2}$."),
                make_mcq(3, "NB", "Giá trị của biểu thức $8^{\\frac{2}{3}}$ bằng",
                         "4", "2", "16", "8",
                         "A", "$8^{2/3} = (2^3)^{2/3} = 2^2 = 4$."),
                make_mcq(4, "NB", "Với $a > 0$, luỹ thừa $a^{-n}$ bằng",
                         "$\\frac{1}{a^n}$", "$-a^n$", "$a^n$", "$\\frac{-1}{a^n}$",
                         "A", "Định nghĩa số mũ nguyên âm: $a^{-n} = \\frac{1}{a^n}$."),
                make_mcq(5, "TH", "Rút gọn biểu thức $P = \\frac{a^{\\frac{3}{2}}}{\\sqrt{a}}$ với $a > 0$.",
                         "$a$", "$a^2$", "$a^{\\frac{1}{2}}$", "$1$",
                         "A", "$\\frac{a^{3/2}}{a^{1/2}} = a^{3/2 - 1/2} = a^1 = a$."),
                make_mcq(6, "TH", "Tính giá trị của biểu thức $P = 9^{\\frac{1}{2}} + 27^{\\frac{1}{3}} - 16^{\\frac{1}{4}}$.",
                         "4", "3", "5", "2",
                         "A", "$P = 3 + 3 - 2 = 4$."),
                make_mcq(7, "TH", "Cho $0 < a < 1$. Khẳng định nào sau đây là đúng?",
                         "$a^3 < a^2$", "$a^3 > a^2$", "$a^{-1} < 1$", "$a^2 > 1$",
                         "A", "Vì cơ số $0 < a < 1$ và $3 > 2$ nên $a^3 < a^2$."),
                make_mcq(8, "TH", "Rút gọn biểu thức $M = (x^{\\sqrt{2}})^{\\sqrt{2}}$ với $x > 0$.",
                         "$x^2$", "$x^{\\sqrt{2}}$", "$x^4$", "$x$",
                         "A", "$(x^{\\sqrt{2}})^{\\sqrt{2}} = x^{\\sqrt{2} \\cdot \\sqrt{2}} = x^2$."),
                make_mcq(9, "VD", "Một lượng chất phóng xạ ban đầu có khối lượng $m_0 = 100$ g, sau $t$ ngày khối lượng còn lại là $m(t) = 100 \\cdot 2^{-0.1t}$ (g). Sau 30 ngày, khối lượng chất phóng xạ còn lại là",
                         "12.5 g", "25 g", "50 g", "6.25 g",
                         "A", "$m(30) = 100 \\times 2^{-3} = 100 / 8 = 12.5$ g."),
                make_mcq(10, "VD", "Cho $x > 0, y > 0$ thoả mãn $x^{\\frac{1}{3}} y^{\\frac{1}{3}} = 2$ và $x + y = 9$. Giá trị của $xy$ bằng",
                         "8", "6", "4", "2",
                         "A", "$x^{1/3} y^{1/3} = (xy)^{1/3} = 2 \\Rightarrow xy = 2^3 = 8$."),
                make_mcq(11, "VDC", "Biết $x + x^{-1} = 4$. Tính giá trị của biểu thức $P = x^2 + x^{-2}$.",
                         "14", "16", "18", "12",
                         "A", "$P = (x + x^{-1})^2 - 2 = 16 - 2 = 14$."),
                make_mcq(12, "VDC", "So sánh $A = 2^{300}$ và $B = 3^{200}$.",
                         "$A < B$", "$A > B$", "$A = B$", "$A \\ge B$",
                         "A", "$A = (2^3)^{100} = 8^{100}$; $B = (3^2)^{100} = 9^{100}$. Vì $8 < 9$ nên $A < B$.")
            ]
            tfs = [
                make_tf(1, "Cho số thực $x > 0$ và biểu thức $P = x^{\\frac{5}{2}} \\cdot \\sqrt{x}$.", [
                    ("a", "Biểu thức $\\sqrt{x} = x^{\\frac{1}{2}}$.", True, "Đúng."),
                    ("b", "Khi nhân hai luỹ thừa cùng cơ số $x$, ta cộng các số mũ: $\\frac{5}{2} + \\frac{1}{2} = 3$.", True, "Đúng quy tắc."),
                    ("c", "Kết quả rút gọn là $P = x^3$.", True, "$x^3$."),
                    ("d", "Nếu $x = 2$ thì $P = 6$.", False, "$P = 2^3 = 8$ chứ không phải 6.")
                ]),
                make_tf(2, "Xét tính đúng sai của các đẳng thức luỹ thừa ($a, b > 0$).", [
                    ("a", "$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$ ($m \\in \\mathbb{Z}, n \\in \\mathbb{N}, n \\ge 2$).", True, "Định nghĩa chuẩn."),
                    ("b", "$a^0 = 1$ với mọi $a > 0$.", True, "Đúng."),
                    ("c", "$\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$.", True, "Tính chất đảo nghịch đảo."),
                    ("d", "$a^m \\cdot b^m = (ab)^{2m}$.", False, "$a^m b^m = (ab)^m$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giá trị của $32^{\\frac{1}{5}}$.", 2, "$2^5 = 32$."),
                make_sa(2, "TH", "Tính giá trị của $25^{1.5}$.", 125, "$25^{3/2} = 5^3 = 125$."),
                make_sa(3, "TH", "Cho $a > 0$. Viết $\\sqrt[3]{a \\sqrt{a}}$ dưới dạng $a^k$. Tìm $k$.", 0.5, "$\\sqrt[3]{a^{3/2}} = a^{1/2} = 0.5$."),
                make_sa(4, "VD", "Cho $3^x = 4$. Tính giá trị của $3^{x+1}$.", 12, "$3^x \\cdot 3 = 12$."),
                make_sa(5, "VD", "Tính giá trị biểu thức $P = 2^{\\sqrt{3}+1} \\cdot 2^{1-\\sqrt{3}}$.", 4, "$2^{(\\sqrt{3}+1)+(1-\\sqrt{3})} = 2^2 = 4$."),
                make_sa(6, "VDC", "Cho $x^2 + x^{-2} = 23$. Tính giá trị của $x + x^{-1}$ (với $x > 0$).", 5, "$(x + x^{-1})^2 = 23 + 2 = 25 \\Rightarrow 5$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Rút gọn biểu thức luỹ thừa", "Rút gọn biểu thức: $B = \\frac{x^{\\frac{1}{2}} - y^{\\frac{1}{2}}}{x^{\\frac{1}{4}} - y^{\\frac{1}{4}}}$ với $x > 0, y > 0, x \\ne y$.",
                           "Nhận thấy $x^{1/2} - y^{1/2} = (x^{1/4})^2 - (y^{1/4})^2 = (x^{1/4} - y^{1/4})(x^{1/4} + y^{1/4})$. Chia cho mẫu số: $B = x^{1/4} + y^{1/4} = \\sqrt[4]{x} + \\sqrt[4]{y}$."),
                make_essay(2, "TH", 0.5, "So sánh các luỹ thừa", "So sánh hai số: $A = 5^{300}$ và $B = 3^{500}$.",
                           "Đưa về cùng số mũ 100: $A = (5^3)^{100} = 125^{100}$. $B = (3^5)^{100} = 243^{100}$. Vì $125 < 243$ nên $125^{100} < 243^{100}$, suy ra $A < B$."),
                make_essay(3, "VD", 0.5, "Tính giá trị biểu thức", "Cho biểu thức $P = \\frac{a^{\\frac{1}{3}} \\sqrt{b} + b^{\\frac{1}{3}} \\sqrt{a}}{\\sqrt[6]{a} + \\sqrt[6]{b}}$ với $a, b > 0$. Rút gọn $P$ và tính giá trị của $P$ khi $a = 8, b = 27$.",
                           "Đổi về luỹ thừa cơ số mũ hữu tỉ: $a^{1/3} b^{1/2} + b^{1/3} a^{1/2} = a^{2/6} b^{3/6} + b^{2/6} a^{3/6} = a^{2/6} b^{2/6}(b^{1/6} + a^{1/6}) = \\sqrt[3]{ab}(\\sqrt[6]{a} + \\sqrt[6]{b})$. Do đó $P = \\sqrt[3]{ab}$. Khi $a = 8, b = 27$: $P = \\sqrt[3]{8 \\times 27} = 2 \\times 3 = 6$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế áp suất khí quyển", "Áp suất khí quyển $P$ (mmHg) tại độ cao $h$ (km) so với mực nước biển được tính xấp xỉ bởi công thức $P(h) = 760 \\cdot e^{-0.125h}$. Hãy tính áp suất khí quyển tại đỉnh Fansipan (độ cao $h \\approx 3.143$ km) và đỉnh Everest (độ cao $h \\approx 8.848$ km).",
                           "Tại đỉnh Fansipan ($h = 3.143$ km): $P(3.143) = 760 \\cdot e^{-0.125 \\times 3.143} = 760 \\cdot e^{-0.3929} \\approx 760 \\times 0.6751 \\approx 513$ mmHg. Tại đỉnh Everest ($h = 8.848$ km): $P(8.848) = 760 \\cdot e^{-0.125 \\times 8.848} = 760 \\cdot e^{-1.106} \\approx 760 \\times 0.3309 \\approx 251.5$ mmHg. Nhận xét: Càng lên cao áp suất khí quyển giảm nhanh theo hàm mũ, tại đỉnh Everest áp suất chỉ còn khoảng 1/3 so với mặt nước biển, giải thích vì sao người leo núi cần bình oxy hỗ trợ.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 19:
        # BÀI 19: LÔGARIT
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho $a > 0, a \\ne 1$ và $b > 0$. Đẳng thức nào sau đây đúng theo định nghĩa lôgarit?",
                         "$\\log_a b = c \\Leftrightarrow a^c = b$",
                         "$\\log_a b = c \\Leftrightarrow c^a = b$",
                         "$\\log_a b = c \\Leftrightarrow b^c = a$",
                         "$\\log_a b = c \\Leftrightarrow a^b = c$",
                         "A", "Theo định nghĩa lôgarit: $\\log_a b = c \\Leftrightarrow a^c = b$."),
                make_mcq(2, "NB", "Giá trị của $\\log_2 8$ bằng",
                         "3", "4", "2", "8",
                         "A", "Vì $2^3 = 8$ nên $\\log_2 8 = 3$."),
                make_mcq(3, "NB", "Với $a > 0, a \\ne 1$ và $x, y > 0$, công thức logarit của một tích là",
                         "$\\log_a(xy) = \\log_a x + \\log_a y$",
                         "$\\log_a(xy) = \\log_a x \\cdot \\log_a y$",
                         "$\\log_a(xy) = \\log_a x - \\log_a y$",
                         "$\\log_a(xy) = \\frac{\\log_a x}{\\log_a y}$",
                         "A", "Logarit của một tích bằng tổng các logarit."),
                make_mcq(4, "NB", "Công thức đổi cơ số logarit nào sau đây đúng?",
                         "$\\log_a b = \\frac{\\log_c b}{\\log_c a}$",
                         "$\\log_a b = \\frac{\\log_c a}{\\log_c b}$",
                         "$\\log_a b = \\log_c a \\cdot \\log_c b$",
                         "$\\log_a b = \\log_c(b - a)$",
                         "A", "Công thức đổi cơ số chuẩn: $\\log_a b = \\frac{\\log_c b}{\\log_c a}$."),
                make_mcq(5, "TH", "Tính giá trị của biểu thức $P = \\log_3 54 - \\log_3 2$.",
                         "3", "27", "2", "4",
                         "A", "$P = \\log_3(54 / 2) = \\log_3 27 = 3$."),
                make_mcq(6, "TH", "Cho $\\log_2 3 = a$. Biểu diễn $\\log_2 18$ theo $a$.",
                         "$2a + 1$", "$a + 2$", "$a^2 + 1$", "$2a$",
                         "A", "$\\log_2 18 = \\log_2(2 \\cdot 3^2) = \\log_2 2 + 2\\log_2 3 = 1 + 2a$."),
                make_mcq(7, "TH", "Rút gọn biểu thức $A = a^{\\log_a 5}$ với $a > 0, a \\ne 1$.",
                         "5", "$a^5$", "1", "$\\log_a 5$",
                         "A", "Theo tính chất cơ bản: $a^{\\log_a b} = b$."),
                make_mcq(8, "TH", "Tính giá trị của biểu thức $P = \\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 8$.",
                         "3", "4", "2", "8",
                         "A", "$P = \\log_2 8 = 3$."),
                make_mcq(9, "VD", "Độ pH của dung dịch được tính theo công thức $\\text{pH} = -\\log[H^+]$. Một mẫu nước chanh có nồng độ $[H^+] = 10^{-3}$ mol/l thì độ pH bằng",
                         "3", "4", "2", "7",
                         "A", "$\\text{pH} = -\\log(10^{-3}) = -(-3) = 3$."),
                make_mcq(10, "VD", "Cho $\\log_a b = 2$ và $\\log_a c = 3$. Tính $P = \\log_a(a^2 b^3 c^4)$.",
                         "20", "18", "24", "15",
                         "A", "$P = \\log_a a^2 + 3\\log_a b + 4\\log_a c = 2 + 3(2) + 4(3) = 2 + 6 + 12 = 20$."),
                make_mcq(11, "VDC", "Cho $\\log_{12} 27 = a$. Biểu diễn $\\log_6 16$ theo $a$.",
                         "$\\frac{4(3 - a)}{a + 3}$",
                         "$\\frac{3 - a}{a + 3}$",
                         "$\\frac{2(3 - a)}{a + 1}$",
                         "$\\frac{4a}{3 + a}$",
                         "A", "$a = \\log_{12} 3^3 = \\frac{3\\log_2 3}{2 + \\log_2 3} \\Rightarrow 2a + a\\log_2 3 = 3\\log_2 3 \\Rightarrow \\log_2 3 = \\frac{2a}{3-a}$. $\\log_6 16 = \\frac{4}{1 + \\log_2 3} = \\frac{4}{1 + \\frac{2a}{3-a}} = \\frac{4(3-a)}{3+a}$."),
                make_mcq(12, "VDC", "Tìm số nguyên $n$ nhỏ nhất thoả mãn $2^n > 10^6$.",
                         "20", "19", "21", "18",
                         "A", "$n > \\log_2(10^6) = 6\\log_2 10 \\approx 6 \\times 3.3219 = 19.93 \\Rightarrow n = 20$.")
            ]
            tfs = [
                make_tf(1, "Cho các số thực dương $a, b$ thoả mãn $a \\ne 1$ và biểu thức $P = \\log_a(a^3 b^2)$.", [
                    ("a", "Biểu thức có nghĩa khi $a > 0, a \\ne 1, b > 0$.", True, "Điều kiện xác định logarit."),
                    ("b", "Ta có thể phân tích $P = \\log_a a^3 + \\log_a b^2$.", True, "Logarit của một tích."),
                    ("c", "Giá trị của $\\log_a a^3$ bằng 3.", True, "Đúng."),
                    ("d", "Biểu thức rút gọn là $P = 3 + 2\\log_a b$.", True, "Đúng công thức mũ của logarit.")
                ]),
                make_tf(2, "Xét các tính chất của hàm logarit tự nhiên $\\ln x$ và logarit thập phân $\\log x$.", [
                    ("a", "$\\ln x$ là logarit cơ số $e$ với $e \\approx 2.71828$.", True, "Định nghĩa ln."),
                    ("b", "$\\log x$ là logarit cơ số 10.", True, "Định nghĩa log."),
                    ("c", "$\\ln e = 1$ và $\\log 10 = 1$.", True, "Đúng."),
                    ("d", "$\\ln(a + b) = \\ln a + \\ln b$ với mọi $a, b > 0$.", False, "Chỉ có $\\ln(ab) = \\ln a + \\ln b$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giá trị của $\\log_3 9$.", 2, "$3^2 = 9$."),
                make_sa(2, "TH", "Tính $\\log_2 40 - \\log_2 5$.", 3, "$\\log_2(40/5) = \\log_2 8 = 3$."),
                make_sa(3, "TH", "Cho $\\log_3 x = 4$. Tìm $x$.", 81, "$3^4 = 81$."),
                make_sa(4, "VD", "Tính giá trị của biểu thức $P = 3^{\\log_3 7} + 2^{\\log_2 3}$.", 10, "$7 + 3 = 10$."),
                make_sa(5, "VD", "Nồng độ ion $[H^+]$ của một mẫu nước bưởi là $10^{-4}$ mol/l. Tính độ pH.", 4, "$-\\log(10^{-4}) = 4$."),
                make_sa(6, "VDC", "Cho $\\log_2 3 = a$. Tính $\\log_4 9$ theo $a$.", 1, "$\\log_4 9 = \\log_{2^2} 3^2 = \\log_2 3 = a \\Rightarrow$ điền hệ số của $a$ là 1.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giá trị biểu thức logarit", "Tính giá trị của biểu thức: $A = \\log_2 12 - \\log_2 3 + 3^{\\log_3 5}$.",
                           "Áp dụng tính chất hiệu hai logarit cùng cơ số: $\\log_2 12 - \\log_2 3 = \\log_2\\left(\\frac{12}{3}\\right) = \\log_2 4 = 2$. Áp dụng tính chất cơ bản: $3^{\\log_3 5} = 5$. Vậy $A = 2 + 5 = 7$."),
                make_essay(2, "TH", 0.5, "Biểu diễn logarit theo biến số", "Cho $\\log_2 5 = a$. Hãy biểu diễn $\\log_2 50$ và $\\log_4 125$ theo $a$.",
                           "Ta có: $\\log_2 50 = \\log_2(2 \\cdot 5^2) = \\log_2 2 + \\log_2 5^2 = 1 + 2\\log_2 5 = 1 + 2a$. Tiếp theo: $\\log_4 125 = \\log_{2^2} 5^3 = \\frac{3}{2}\\log_2 5 = \\frac{3}{2}a$."),
                make_essay(3, "VD", 0.5, "Chứng minh đẳng thức logarit", "Cho $a, b > 0$ thoả mãn $a^2 + b^2 = 7ab$. Chứng minh rằng: $\\log\\left(\\frac{a + b}{3}\\right) = \\frac{1}{2}(\\log a + \\log b)$.",
                           "Ta có: $a^2 + b^2 = 7ab \\Leftrightarrow a^2 + 2ab + b^2 = 9ab \\Leftrightarrow (a + b)^2 = 9ab \\Leftrightarrow \\left(\\frac{a + b}{3}\\right)^2 = ab$. Lấy logarit thập phân hai vế: $\\log\\left(\\frac{a + b}{3}\\right)^2 = \\log(ab) \\Leftrightarrow 2\\log\\left(\\frac{a + b}{3}\\right) = \\log a + \\log b \\Leftrightarrow \\log\\left(\\frac{a + b}{3}\\right) = \\frac{1}{2}(\\log a + \\log b)$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế cường độ âm thanh", "Mức cường độ âm $L$ (đơn vị: decibel, kí hiệu dB) được xác định bởi công thức $L = 10\\log\\left(\\frac{I}{I_0}\\right)$, trong đó $I$ là cường độ âm thanh và $I_0 = 10^{-12}$ W/m$^2$ là cường độ âm chuẩn ở ngưỡng nghe. Tiếng thì thầm có mức cường độ âm $L_1 = 30$ dB, tiếng động cơ máy bay phản lực cất cánh có mức $L_2 = 130$ dB. Hỏi cường độ âm của động cơ máy bay gấp bao nhiêu lần cường độ âm của tiếng thì thầm?",
                           "Từ công thức: $L = 10\\log(I/I_0) \\Rightarrow \\log(I/I_0) = L/10 \\Rightarrow I = I_0 \\cdot 10^{L/10}$. Cường độ âm tiếng thì thầm: $I_1 = I_0 \\cdot 10^{30/10} = I_0 \\cdot 10^3$. Cường độ âm tiếng máy bay phản lực: $I_2 = I_0 \\cdot 10^{130/10} = I_0 \\cdot 10^{13}$. Tỷ số cường độ âm: $\\frac{I_2}{I_1} = \\frac{I_0 \\cdot 10^{13}}{I_0 \\cdot 10^3} = 10^{10} = 10.000.000.000$ (10 tỷ lần). Vậy cường độ âm của động cơ máy bay gấp mười tỷ lần tiếng thì thầm.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Với $a > 0, a \\ne 1$ thì $\\log_a 1$ bằng",
                         "0", "1", "$a$", "Không xác định",
                         "A", "Vì $a^0 = 1$ nên $\\log_a 1 = 0$."),
                make_mcq(2, "NB", "Giá trị của $\\log_3 81$ bằng",
                         "4", "3", "27", "9",
                         "A", "$3^4 = 81 \\Rightarrow \\log_3 81 = 4$."),
                make_mcq(3, "NB", "Với $a > 0, a \\ne 1$ và $x, y > 0$, công thức logarit của một thương là",
                         "$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$",
                         "$\\log_a\\left(\\frac{x}{y}\\right) = \\frac{\\log_a x}{\\log_a y}$",
                         "$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x + \\log_a y$",
                         "$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a(x - y)$",
                         "A", "Logarit của một thương bằng hiệu các logarit."),
                make_mcq(4, "NB", "Logarit tự nhiên là logarit có cơ số bằng",
                         "Số $e \\approx 2.718$", "Số 10", "Số 2", "Số $\\pi$",
                         "A", "Logarit tự nhiên $\\ln x$ có cơ số là số $e$."),
                make_mcq(5, "TH", "Tính giá trị của biểu thức $P = \\log_5 100 - \\log_5 4$.",
                         "2", "25", "5", "4",
                         "A", "$P = \\log_5(100/4) = \\log_5 25 = 2$."),
                make_mcq(6, "TH", "Cho $\\log_3 2 = a$. Biểu diễn $\\log_3 12$ theo $a$.",
                         "$2a + 1$", "$a + 1$", "$2a + 2$", "$a + 2$",
                         "A", "$\\log_3 12 = \\log_3(4 \\times 3) = \\log_3 2^2 + \\log_3 3 = 2a + 1$."),
                make_mcq(7, "TH", "Tính giá trị của biểu thức $A = 2^{\\log_2 9}$.",
                         "9", "2", "3", "18",
                         "A", "$2^{\\log_2 9} = 9$."),
                make_mcq(8, "TH", "Rút gọn biểu thức $P = \\log_a(a^4 \\sqrt{a})$ với $a > 0, a \\ne 1$.",
                         "$\\frac{9}{2}$", "4", "2", "$\\frac{7}{2}$",
                         "A", "$a^4 \\sqrt{a} = a^{4 + 1/2} = a^{9/2} \\Rightarrow \\log_a a^{9/2} = 9/2$."),
                make_mcq(9, "VD", "Năng lượng giải toả $E$ (Joule) của một trận động đất có độ Richter $M$ được tính theo công thức $\\log E = 4.4 + 1.5M$. Trận động đất $M = 6$ giải toả năng lượng bằng",
                         "$10^{13.4}$ J", "$10^{10.4}$ J", "$10^{15}$ J", "$10^{6}$ J",
                         "A", "$\\log E = 4.4 + 1.5(6) = 4.4 + 9.0 = 13.4 \\Rightarrow E = 10^{13.4}$ J."),
                make_mcq(10, "VD", "Cho $\\log_2 3 = a$ và $\\log_2 5 = b$. Tính $\\log_2 30$ theo $a$ và $b$.",
                         "$a + b + 1$", "$a + b$", "$ab + 1$", "$a + b + 2$",
                         "A", "$\\log_2 30 = \\log_2(2 \\times 3 \\times 5) = 1 + a + b$."),
                make_mcq(11, "VDC", "Cho $\\log_3 5 = a$. Tính $\\log_{15} 75$ theo $a$.",
                         "$\\frac{2a + 1}{a + 1}$",
                         "$\\frac{a + 2}{a + 1}$",
                         "$\\frac{2a}{a + 1}$",
                         "$\\frac{a + 1}{2a + 1}$",
                         "A", "Đổi về cơ số 3: $\\log_{15} 75 = \\frac{\\log_3(3 \\times 5^2)}{\\log_3(3 \\times 5)} = \\frac{1 + 2\\log_3 5}{1 + \\log_3 5} = \\frac{2a + 1}{a + 1}$."),
                make_mcq(12, "VDC", "Tìm số chữ số của số $2^{100}$ trong hệ thập phân (biết $\\log 2 \\approx 0.30103$).",
                         "31 chữ số", "30 chữ số", "32 chữ số", "29 chữ số",
                         "A", "Số chữ số $= [100 \\log 2] + 1 = [30.103] + 1 = 30 + 1 = 31$ chữ số.")
            ]
            tfs = [
                make_tf(1, "Cho $a, b > 0$ và $a \\ne 1$.", [
                    ("a", "$\\log_a a = 1$.", True, "Đúng."),
                    ("b", "$\\log_a 1 = 0$.", True, "Đúng."),
                    ("c", "$\\log_a b^k = k\\log_a b$ với mọi số thực $k$.", True, "Tính chất luỹ thừa."),
                    ("d", "$\\log_a(b + c) = \\log_a b + \\log_a c$.", False, "Chỉ có $\\log_a(bc) = \\log_a b + \\log_a c$.")
                ]),
                make_tf(2, "Xét các công thức đổi cơ số logarit.", [
                    ("a", "$\\log_a b = \\frac{1}{\\log_b a}$ với $a, b > 0; a, b \\ne 1$.", True, "Đúng."),
                    ("b", "$\\log_a b \\cdot \\log_b c = \\log_a c$.", True, "Công thức nối cơ số."),
                    ("c", "$\\log_{a^k} b = \\frac{1}{k}\\log_a b$ ($k \\ne 0$).", True, "Đúng."),
                    ("d", "$\\log_a b$ luôn nhận giá trị dương.", False, "Ví dụ $\\log_2(0.5) = -1 < 0$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giá trị của $\\log_5 25$.", 2, "$5^2 = 25$."),
                make_sa(2, "TH", "Tính $\\log_3 54 - \\log_3 6$.", 2, "$\\log_3(54/6) = \\log_3 9 = 2$."),
                make_sa(3, "TH", "Cho $\\log_5 x = 3$. Tìm $x$.", 125, "$5^3 = 125$."),
                make_sa(4, "VD", "Tính giá trị của biểu thức $P = 4^{\\log_2 5}$.", 25, "$(2^{\\log_2 5})^2 = 5^2 = 25$."),
                make_sa(5, "VD", "Dung dịch có $[H^+] = 10^{-7}$ mol/l (nước tinh khiết). Tìm độ pH.", 7, "$-\\log(10^{-7}) = 7$."),
                make_sa(6, "VDC", "Cho $\\log_2 3 = a$. Tính $\\log_8 27$ theo $a$.", 1, "$\\log_{2^3} 3^3 = \\log_2 3 = a \\Rightarrow$ hệ số là 1.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giá trị logarit", "Tính giá trị của biểu thức: $B = \\log_3 18 - \\log_3 2 + 5^{\\log_5 4}$.",
                           "Ta có: $\\log_3 18 - \\log_3 2 = \\log_3\\left(\\frac{18}{2}\\right) = \\log_3 9 = 2$. Mặt khác: $5^{\\log_5 4} = 4$. Do đó $B = 2 + 4 = 6$."),
                make_essay(2, "TH", 0.5, "Biểu diễn logarit", "Cho $\\log_3 2 = a$. Hãy biểu diễn $\\log_3 36$ và $\\log_9 8$ theo $a$.",
                           "$\\log_3 36 = \\log_3(4 \\times 9) = \\log_3 2^2 + \\log_3 3^2 = 2\\log_3 2 + 2 = 2a + 2$. $\\log_9 8 = \\log_{3^2} 2^3 = \\frac{3}{2}\\log_3 2 = \\frac{3}{2}a$."),
                make_essay(3, "VD", 0.5, "Chứng minh đẳng thức", "Cho $x, y > 0$ thoả mãn $x^2 + 4y^2 = 12xy$. Chứng minh rằng: $\\log(x + 2y) - 2\\log 2 = \\frac{1}{2}(\\log x + \\log y)$.",
                           "Ta có: $x^2 + 4y^2 = 12xy \\Leftrightarrow (x + 2y)^2 = 16xy = 4^2 xy$. Lấy logarit thập phân hai vế: $2\\log(x + 2y) = \\log(16xy) = \\log(4^2) + \\log x + \\log y = 2\\log 4 + \\log x + \\log y = 4\\log 2 + \\log x + \\log y$. Chia cả hai vế cho 2: $\\log(x + 2y) = 2\\log 2 + \\frac{1}{2}(\\log x + \\log y) \\Leftrightarrow \\log(x + 2y) - 2\\log 2 = \\frac{1}{2}(\\log x + \\log y)$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế động đất độ Richter", "Thang đo độ chấn động Richter $M$ của một trận động đất được tính theo công thức $M = \\log\\left(\\frac{A}{A_0}\\right)$, trong đó $A$ là biên độ dao động cực đại đo bởi máy địa chấn và $A_0$ là biên độ chuẩn. Trận động đất thứ nhất có độ Richter $M_1 = 7.0$ và trận động đất thứ hai có độ Richter $M_2 = 5.0$. Hỏi biên độ rung chấn của trận động đất thứ nhất gấp bao nhiêu lần biên độ của trận động đất thứ hai?",
                           "Từ công thức: $M = \\log(A/A_0) \\Rightarrow \\frac{A}{A_0} = 10^M \\Rightarrow A = A_0 \\cdot 10^M$. Biên độ trận động đất thứ nhất: $A_1 = A_0 \\cdot 10^{7.0}$. Biên độ trận động đất thứ hai: $A_2 = A_0 \\cdot 10^{5.0}$. Tỷ số biên độ rung chấn giữa hai trận động đất: $\\frac{A_1}{A_2} = \\frac{A_0 \\cdot 10^7}{A_0 \\cdot 10^5} = 10^{7 - 5} = 10^2 = 100$. Vậy biên độ rung chấn của trận động đất 7 độ Richter gấp đúng 100 lần so với trận động đất 5 độ Richter.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 20:
        # BÀI 20: HÀM SỐ MŨ VÀ HÀM SỐ LÔGARIT
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Tập xác định của hàm số mũ $y = 2^x$ là",
                         "$\\mathbb{R}$", "$(0; +\\infty)$", "$[0; +\\infty)$", "$\\mathbb{R} \\setminus \\{0\\}$",
                         "A", "Hàm số mũ xác định trên toàn bộ $\\mathbb{R}$."),
                make_mcq(2, "NB", "Tập xác định của hàm số lôgarit $y = \\log_2 x$ là",
                         "$(0; +\\infty)$", "$\\mathbb{R}$", "$[0; +\\infty)$", "$\\mathbb{R} \\setminus \\{0\\}$",
                         "A", "Biểu thức dưới dấu logarit phải dương: $x > 0$."),
                make_mcq(3, "NB", "Hàm số nào sau đây đồng biến trên $\\mathbb{R}$?",
                         "$y = 3^x$", "$y = (0.5)^x$", "$y = \\left(\\frac{1}{3}\\right)^x$", "$y = \\left(\\frac{\\sqrt{2}}{2}\\right)^x$",
                         "A", "Hàm số mũ $y = a^x$ đồng biến khi cơ số $a > 1$, ở đây $a = 3 > 1$."),
                make_mcq(4, "NB", "Đồ thị hàm số $y = \\log_a x$ ($a > 0, a \\ne 1$) luôn đi qua điểm nào?",
                         "$(1; 0)$", "$(0; 1)$", "$(0; 0)$", "$(1; 1)$",
                         "A", "Vì $\\log_a 1 = 0$ nên đồ thị luôn đi qua điểm $(1; 0)$."),
                make_mcq(5, "TH", "Tìm tập xác định của hàm số $y = \\log_3(2x - 4)$.",
                         "$(2; +\\infty)$", "$[2; +\\infty)$", "$(-\\infty; 2)$", "$\\mathbb{R}$",
                         "A", "Điều kiện $2x - 4 > 0 \\Leftrightarrow x > 2$."),
                make_mcq(6, "TH", "Hàm số $y = \\log_{0.5} x$ nghịch biến trên khoảng nào?",
                         "$(0; +\\infty)$", "$\\mathbb{R}$", "$(-\\infty; 0)$", "$[0; +\\infty)$",
                         "A", "Vì cơ số $0 < 0.5 < 1$ nên hàm số nghịch biến trên tập xác định $(0; +\\infty)$."),
                make_mcq(7, "TH", "Đường tiệm cận ngang của đồ thị hàm số $y = 2^x$ là",
                         "$y = 0$ (trục $Ox$)", "$x = 0$ (trục $Oy$)", "$y = 1$", "$x = 1$",
                         "A", "Vì $\\lim_{x \\to -\\infty} 2^x = 0$ nên tiệm cận ngang là trục hoành $y = 0$."),
                make_mcq(8, "TH", "Đường tiệm cận đứng của đồ thị hàm số $y = \\ln x$ là",
                         "$x = 0$ (trục $Oy$)", "$y = 0$ (trục $Ox$)", "$x = 1$", "$y = 1$",
                         "A", "Vì $\\lim_{x \\to 0^+} \\ln x = -\\infty$ nên trục tung $x = 0$ là tiệm cận đứng."),
                make_mcq(9, "VD", "Tìm tập xác định của hàm số $y = \\sqrt{\\log_2(x - 1)}$.",
                         "$[2; +\\infty)$", "$(1; +\\infty)$", "$[1; +\\infty)$", "$(2; +\\infty)$",
                         "A", "Điều kiện: $x - 1 > 0$ và $\\log_2(x - 1) \\ge 0 \\Leftrightarrow x - 1 \\ge 1 \\Leftrightarrow x \\ge 2$."),
                make_mcq(10, "VD", "Dân số một quốc gia được ước tính theo hàm $P(t) = 100 \\cdot e^{0.012t}$ (triệu người), với $t$ là số năm sau năm 2020. Dân số quốc gia này năm 2030 ($t = 10$) xấp xỉ bằng",
                         "112.75 triệu người", "110 triệu người", "115 triệu người", "120 triệu người",
                         "A", "$P(10) = 100 \\cdot e^{0.12} \\approx 100 \\times 1.127497 \\approx 112.75$ triệu người."),
                make_mcq(11, "VDC", "Tìm giá trị nhỏ nhất của hàm số $y = e^{x^2 - 2x + 3}$.",
                         "$e^2$", "$e^3$", "$e$", "1",
                         "A", "Tam thức $x^2 - 2x + 3 = (x - 1)^2 + 2 \\ge 2$. Do cơ số $e > 1$ nên giá trị nhỏ nhất là $e^2$ tại $x = 1$."),
                make_mcq(12, "VDC", "Tìm tất cả các giá trị của $m$ để hàm số $y = \\log_2(x^2 - 2x + m)$ xác định trên $\\mathbb{R}$.",
                         "$m > 1$", "$m \\ge 1$", "$m < 1$", "$m > 0$",
                         "A", "Hàm số xác định trên $\\mathbb{R} \\Leftrightarrow x^2 - 2x + m > 0, \\forall x \\Leftrightarrow \\Delta' = 1 - m < 0 \\Leftrightarrow m > 1$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x) = 2^x$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R}$.", True, "Đúng."),
                    ("b", "Tập giá trị của hàm số là $(0; +\\infty)$.", True, "Vì $2^x > 0$ với mọi $x$."),
                    ("c", "Hàm số đồng biến trên $\\mathbb{R}$.", True, "Vì cơ số $2 > 1$."),
                    ("d", "Đồ thị hàm số cắt trục tung tại điểm $(0; 0)$.", False, "Cắt tại điểm $(0; 1)$ vì $2^0 = 1$.")
                ]),
                make_tf(2, "Cho hàm số $y = g(x) = \\log_3 x$.", [
                    ("a", "Tập xác định của hàm số là $(0; +\\infty)$.", True, "Đúng."),
                    ("b", "Đồ thị hàm số nhận trục tung $Oy$ làm tiệm cận đứng.", True, "Đúng."),
                    ("c", "Đồ thị cắt trục hoành tại điểm $(1; 0)$.", True, "$\\log_3 1 = 0$."),
                    ("d", "Hàm số nghịch biến trên khoảng $(0; +\\infty)$.", False, "Cơ số $3 > 1$ nên hàm số đồng biến.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hoành độ giao điểm của đồ thị $y = \\log_2 x$ với trục hoành.", 1, "Điểm $(1; 0)$ nên hoành độ là 1."),
                make_sa(2, "TH", "Tìm tung độ giao điểm của đồ thị $y = 3^x$ với trục tung.", 1, "$3^0 = 1$."),
                make_sa(3, "TH", "Tìm đầu mút trái của tập xác định hàm số $y = \\log_5(x - 3)$.", 3, "Điều kiện $x > 3$."),
                make_sa(4, "VD", "Tìm giá trị nhỏ nhất của hàm số $y = 2^{|x|} + 1$.", 2, "Min khi $|x| = 0 \\Rightarrow 2^0 + 1 = 2$."),
                make_sa(5, "VD", "Tìm điểm cố định $(x_0; y_0)$ mà đồ thị $y = a^{x-2} + 3$ luôn đi qua. Tính $x_0 + y_0$.", 6, "$x = 2 \\Rightarrow y = a^0 + 3 = 4$. $x_0 + y_0 = 2 + 4 = 6$."),
                make_sa(6, "VDC", "Tìm $m$ để hàm số $y = \\ln(x^2 + 4x + m)$ xác định trên $\\mathbb{R}$. Tìm số nguyên $m$ nhỏ nhất.", 5, "$\\Delta' = 4 - m < 0 \\Rightarrow m > 4 \\Rightarrow m = 5$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm tập xác định hàm số", "Tìm tập xác định của các hàm số sau: (a) $y = \\log_2(x^2 - 4)$; (b) $y = 3^{\\frac{1}{x - 1}}$.",
                           "(a) Điều kiện: $x^2 - 4 > 0 \\Leftrightarrow x < -2$ hoặc $x > 2$. Vậy $D = (-\\infty; -2) \\cup (2; +\\infty)$. (b) Điều kiện: mẫu số khác không $\\Leftrightarrow x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$. Vậy $D = \\mathbb{R} \\setminus \\{1\\}$."),
                make_essay(2, "TH", 0.5, "Khảo sát và vẽ dạng đồ thị", "Nêu các tính chất chính (tập xác định, tập giá trị, chiều biến thiên, tiệm cận, điểm đặc biệt) của hàm số $y = \\log_2 x$.",
                           "Các tính chất chính của $y = \\log_2 x$: 1. Tập xác định: $D = (0; +\\infty)$. 2. Tập giá trị: $T = \\mathbb{R}$. 3. Chiều biến thiên: Vì cơ số $a = 2 > 1$ nên hàm số đồng biến trên $(0; +\\infty)$. 4. Tiệm cận: Trục tung $x = 0$ là tiệm cận đứng (vì $\\lim_{x \\to 0^+} \\log_2 x = -\\infty$). 5. Điểm đặc biệt: Đồ thị đi qua điểm $(1; 0)$ và $(2; 1)$."),
                make_essay(3, "VD", 0.5, "Tìm giá trị lớn nhất, nhỏ nhất", "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = 2^{-x^2 + 2x + 1}$ trên đoạn $[0; 2]$.",
                           "Đặt $u(x) = -x^2 + 2x + 1$ trên $[0; 2]$. Đỉnh parabol tại $x = 1 \\in [0; 2]$. Ta có: $u(0) = 1, u(1) = 2, u(2) = 1$. Do đó $1 \\le u(x) \\le 2$ với mọi $x \\in [0; 2]$. Vì cơ số $a = 2 > 1$ nên hàm số $y = 2^u$ đồng biến theo $u$. Suy ra: Giá trị lớn nhất $y_{max} = 2^2 = 4$ (tại $x = 1$). Giá trị nhỏ nhất $y_{min} = 2^1 = 2$ (tại $x = 0$ hoặc $x = 2$)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế định luật làm nguội Newton", "Theo Định luật làm nguội của Newton, nhiệt độ $T$ ($^\\circ$C) của một tách cà phê đặt trong phòng có nhiệt độ ổn định $20^\\circ$C sau $t$ phút biến thiên theo hàm số: $T(t) = 20 + 70 \\cdot e^{-0.05t}$. Tính nhiệt độ ban đầu của tách cà phê khi vừa pha ($t = 0$) và sau bao lâu thì nhiệt độ tách cà phê giảm xuống còn $40^\\circ$C (làm tròn đến phút)?",
                           "Nhiệt độ ban đầu khi vừa pha ($t = 0$): $T(0) = 20 + 70 \\cdot e^0 = 20 + 70 = 90^\\circ$C. Để nhiệt độ giảm xuống còn $40^\\circ$C, ta giải phương trình: $20 + 70 \\cdot e^{-0.05t} = 40 \\Leftrightarrow 70 \\cdot e^{-0.05t} = 20 \\Leftrightarrow e^{-0.05t} = \\frac{2}{7} \\Leftrightarrow -0.05t = \\ln\\left(\\frac{2}{7}\\right) = -\\ln(3.5)$. Suy ra $t = \\frac{\\ln(3.5)}{0.05} \\approx \\frac{1.25276}{0.05} \\approx 25.06$ phút. Vậy sau khoảng 25 phút thì nhiệt độ tách cà phê giảm xuống còn $40^\\circ$C.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Tập giá trị của hàm số mũ $y = a^x$ ($a > 0, a \\ne 1$) là",
                         "$(0; +\\infty)$", "$\\mathbb{R}$", "$[0; +\\infty)$", "$(-\\infty; 0)$",
                         "A", "Luỹ thừa của số dương luôn dương nên tập giá trị là $(0; +\\infty)$."),
                make_mcq(2, "NB", "Tập giá trị của hàm số lôgarit $y = \\log_a x$ là",
                         "$\\mathbb{R}$", "$(0; +\\infty)$", "$[0; +\\infty)$", "$\\mathbb{R} \\setminus \\{0\\}$",
                         "A", "Logarit nhận mọi giá trị từ $-\\infty$ đến $+\\infty$."),
                make_mcq(3, "NB", "Hàm số nào sau đây nghịch biến trên $\\mathbb{R}$?",
                         "$y = (0.2)^x$", "$y = 4^x$", "$y = e^x$", "$y = 2^x$",
                         "A", "Hàm số mũ nghịch biến khi cơ số $0 < 0.2 < 1$."),
                make_mcq(4, "NB", "Đồ thị hàm số $y = a^x$ luôn đi qua điểm nào?",
                         "$(0; 1)$", "$(1; 0)$", "$(0; 0)$", "$(1; 1)$",
                         "A", "$a^0 = 1$ nên đồ thị luôn qua $(0; 1)$."),
                make_mcq(5, "TH", "Tập xác định của hàm số $y = \\log_2(6 - 2x)$ là",
                         "$(-\\infty; 3)$", "$(3; +\\infty)$", "$(-\\infty; 3]$", "$[3; +\\infty)$",
                         "A", "$6 - 2x > 0 \\Leftrightarrow 2x < 6 \\Leftrightarrow x < 3$."),
                make_mcq(6, "TH", "Hàm số $y = \\ln x$ đồng biến trên khoảng nào?",
                         "$(0; +\\infty)$", "$\\mathbb{R}$", "$(-\\infty; 0)$", "$[1; +\\infty)$",
                         "A", "Cơ số $e \\approx 2.718 > 1$ nên đồng biến trên tập xác định $(0; +\\infty)$."),
                make_mcq(7, "TH", "Tiệm cận đứng của đồ thị hàm số $y = \\log_3(x - 2)$ là",
                         "$x = 2$", "$x = 0$", "$y = 2$", "$y = 0$",
                         "A", "Biểu thức dưới logarit bằng 0 khi $x = 2$, đây là tiệm cận đứng."),
                make_mcq(8, "TH", "Tiệm cận ngang của đồ thị hàm số $y = 3^{-x} + 2$ là",
                         "$y = 2$", "$y = 0$", "$x = 2$", "$x = 0$",
                         "A", "Khi $x \\to +\\infty$, $3^{-x} \\to 0$ nên $y \\to 2$."),
                make_mcq(9, "VD", "Tìm tập xác định của hàm số $y = \\sqrt{2^x - 8}$.",
                         "$[3; +\\infty)$", "$(3; +\\infty)$", "$(-\\infty; 3]$", "$\\mathbb{R}$",
                         "A", "Điều kiện $2^x - 8 \\ge 0 \\Leftrightarrow 2^x \\ge 2^3 \\Leftrightarrow x \\ge 3$."),
                make_mcq(10, "VD", "Số lượng tế bào nấm men sinh sôi theo hàm $N(t) = N_0 \\cdot e^{0.2t}$ ($t$ tính bằng giờ). Để số lượng nấm men tăng gấp đôi thì thời gian cần thiết xấp xỉ là (biết $\\ln 2 \\approx 0.693$)",
                         "$3.47$ giờ", "2 giờ", "5 giờ", "4 giờ",
                         "A", "$e^{0.2t} = 2 \\Leftrightarrow 0.2t = \\ln 2 \\approx 0.693 \\Rightarrow t \\approx 3.465 \\approx 3.47$ giờ."),
                make_mcq(11, "VDC", "Tìm giá trị lớn nhất của hàm số $y = (0.5)^{x^2 - 4x + 3}$.",
                         "2", "4", "1", "0.5",
                         "A", "$x^2 - 4x + 3 = (x - 2)^2 - 1 \\ge -1$. Do cơ số $0 < 0.5 < 1$ nên nghịch biến, GTLN là $(0.5)^{-1} = 2$ tại $x = 2$."),
                make_mcq(12, "VDC", "Tìm $m$ để hàm số $y = \\log_3(x^2 - 4x + m)$ xác định trên $\\mathbb{R}$.",
                         "$m > 4$", "$m \\ge 4$", "$m < 4$", "$m > 0$",
                         "A", "$\\Delta' = 4 - m < 0 \\Leftrightarrow m > 4$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x) = (0.5)^x$.", [
                    ("a", "Tập xác định của hàm số là $\\mathbb{R}$.", True, "Đúng."),
                    ("b", "Hàm số nghịch biến trên $\\mathbb{R}$.", True, "Vì cơ số $0 < 0.5 < 1$."),
                    ("c", "Đồ thị hàm số nhận trục hoành làm tiệm cận ngang.", True, "$\\lim_{x \\to +\\infty} (0.5)^x = 0$."),
                    ("d", "Hàm số nhận giá trị âm khi $x > 0$.", False, "$(0.5)^x > 0$ với mọi $x$.")
                ]),
                make_tf(2, "Cho hàm số $y = g(x) = \\log_{0.5} x$.", [
                    ("a", "Tập xác định của hàm số là $(0; +\\infty)$.", True, "Đúng."),
                    ("b", "Hàm số nghịch biến trên $(0; +\\infty)$.", True, "Cơ số $0.5 < 1$."),
                    ("c", "Đồ thị cắt trục hoành tại điểm $(1; 0)$.", True, "Đúng."),
                    ("d", "Khi $x > 1$ thì giá trị $g(x) > 0$.", False, "Khi $x > 1$ thì $\\log_{0.5} x < 0$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm hoành độ giao điểm của đồ thị $y = \\ln x$ với trục hoành.", 1, "Điểm $(1; 0)$ nên hoành độ là 1."),
                make_sa(2, "TH", "Tìm tung độ giao điểm của đồ thị $y = 5^x$ với trục tung.", 1, "$5^0 = 1$."),
                make_sa(3, "TH", "Tìm đầu mút phải của tập xác định hàm số $y = \\log_2(8 - x)$.", 8, "Điều kiện $x < 8$."),
                make_sa(4, "VD", "Tìm giá trị lớn nhất của hàm số $y = 3^{-x^2}$.", 1, "Max khi $-x^2 = 0 \\Rightarrow 3^0 = 1$."),
                make_sa(5, "VD", "Đồ thị hàm số $y = \\log_a(x - 3) + 2$ luôn đi qua điểm cố định $(x_0; y_0)$. Tính $x_0 + y_0$.", 6, "$x - 3 = 1 \\Rightarrow x_0 = 4, y_0 = 2$. Tổng là 6."),
                make_sa(6, "VDC", "Tìm số nguyên dương $m$ nhỏ nhất để hàm số $y = \\ln(x^2 - 6x + m)$ xác định trên $\\mathbb{R}$.", 10, "$\\Delta' = 9 - m < 0 \\Rightarrow m > 9 \\Rightarrow m = 10$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm tập xác định hàm số mũ và logarit", "Tìm tập xác định của các hàm số sau: (a) $y = \\log_5(9 - x^2)$; (b) $y = \\sqrt{2^x - 4}$.",
                           "(a) Điều kiện: $9 - x^2 > 0 \\Leftrightarrow -3 < x < 3$. Vậy $D = (-3; 3)$. (b) Điều kiện: $2^x - 4 \\ge 0 \\Leftrightarrow 2^x \\ge 2^2 \\Leftrightarrow x \\ge 2$. Vậy $D = [2; +\\infty)$."),
                make_essay(2, "TH", 0.5, "Khảo sát tính đơn điệu", "So sánh sự biến thiên và hình dạng đồ thị giữa hai hàm số $y = 2^x$ và $y = \\log_2 x$.",
                           "So sánh: 1. Tập xác định: $y = 2^x$ có $D = \\mathbb{R}$; $y = \\log_2 x$ có $D = (0; +\\infty)$. 2. Tập giá trị: $y = 2^x$ có $T = (0; +\\infty)$; $y = \\log_2 x$ có $T = \\mathbb{R}$. 3. Chiều biến thiên: Cả hai hàm số đều đồng biến trên tập xác định vì cơ số $a = 2 > 1$. 4. Tiệm cận: $y = 2^x$ có tiệm cận ngang $y = 0$ (trục hoành); $y = \\log_2 x$ có tiệm cận đứng $x = 0$ (trục tung). 5. Tính đối xứng: Đồ thị của hai hàm số đối xứng nhau qua đường phân giác của góc phần tư thứ nhất $y = x$."),
                make_essay(3, "VD", 0.5, "Tìm giá trị lớn nhất, nhỏ nhất", "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = \\log_2(x^2 - 4x + 12)$ trên đoạn $[1; 4]$.",
                           "Đặt $u(x) = x^2 - 4x + 12$ trên $[1; 4]$. Đỉnh parabol tại $x = 2 \\in [1; 4]$. Ta có: $u(1) = 1 - 4 + 12 = 9$. $u(2) = 4 - 8 + 12 = 8$. $u(4) = 16 - 16 + 12 = 12$. Do đó $\\min u = 8$ và $\\max u = 12$. Vì hàm số $y = \\log_2 u$ đồng biến theo $u$ (cơ số $2 > 1$): Giá trị nhỏ nhất là $y_{min} = \\log_2 8 = 3$ (tại $x = 2$). Giá trị lớn nhất là $y_{max} = \\log_2 12 = \\log_2(4 \\times 3) = 2 + \\log_2 3$ (tại $x = 4$)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế áp suất lốp xe", "Áp suất khí $P$ (psi) trong lốp ô tô để ngoài trời nắng tăng dần theo nhiệt độ $T$ ($^\\circ$C) theo hàm mũ $P(T) = 30 \\cdot e^{0.005(T - 20)}$ ($T \\ge 20$). Khi nhiệt độ tăng từ $20^\\circ$C lên $50^\\circ$C, hãy tính áp suất khí trong lốp xe ở $50^\\circ$C và cho biết áp suất tăng lên bao nhiêu phần trăm.",
                           "Tại nhiệt độ $T_1 = 20^\\circ$C: $P(20) = 30 \\cdot e^0 = 30$ psi. Tại nhiệt độ $T_2 = 50^\\circ$C: $P(50) = 30 \\cdot e^{0.005(50 - 20)} = 30 \\cdot e^{0.15} \\approx 30 \\times 1.161834 \\approx 34.855$ psi. Tỷ lệ phần trăm áp suất tăng: $\\frac{P(50) - P(20)}{P(20)} \\times 100\\% = (e^{0.15} - 1) \\times 100\\% \\approx 16.18\\%$. Vậy ở $50^\\circ$C áp suất lốp xe đạt khoảng $34.86$ psi, tăng thêm khoảng $16.18\\%$ so với ban đầu.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 21:
        # BÀI 21: PHƯƠNG TRÌNH, BẤT PHƯƠNG TRÌNH MŨ VÀ LÔGARIT
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Nghiệm của phương trình $2^x = 8$ là",
                         "$x = 3$", "$x = 4$", "$x = 2$", "$x = 1$",
                         "A", "$2^x = 2^3 \\Leftrightarrow x = 3$."),
                make_mcq(2, "NB", "Nghiệm của phương trình $\\log_3 x = 2$ là",
                         "$x = 9$", "$x = 6$", "$x = 8$", "$x = 5$",
                         "A", "$x = 3^2 = 9$."),
                make_mcq(3, "NB", "Tập nghiệm của bất phương trình $2^x > 4$ là",
                         "$(2; +\\infty)$", "$[2; +\\infty)$", "$(-\\infty; 2)$", "$\\mathbb{R}$",
                         "A", "$2^x > 2^2 \\Leftrightarrow x > 2$."),
                make_mcq(4, "NB", "Điều kiện xác định của phương trình $\\log_2(x - 3) = 1$ là",
                         "$x > 3$", "$x \\ge 3$", "$x < 3$", "$x \\ne 3$",
                         "A", "Điều kiện $x - 3 > 0 \\Leftrightarrow x > 3$."),
                make_mcq(5, "TH", "Giải phương trình $3^{2x - 1} = 27$.",
                         "$x = 2$", "$x = 1$", "$x = 3$", "$x = 4$",
                         "A", "$3^{2x - 1} = 3^3 \\Leftrightarrow 2x - 1 = 3 \\Leftrightarrow 2x = 4 \\Rightarrow x = 2$."),
                make_mcq(6, "TH", "Giải phương trình $\\log_2(x + 1) + \\log_2(x - 1) = 3$.",
                         "$x = 3$", "$x = \\pm 3$", "$x = 4$", "$x = 2$",
                         "A", "ĐK $x > 1$. $\\log_2(x^2 - 1) = 3 \\Leftrightarrow x^2 - 1 = 8 \\Leftrightarrow x^2 = 9 \\Rightarrow x = 3$ (do $x > 1$)."),
                make_mcq(7, "TH", "Tập nghiệm của bất phương trình $(0.5)^x < 4$ là",
                         "$(-2; +\\infty)$", "$(-\\infty; -2)$", "$(2; +\\infty)$", "$(-\\infty; 2)$",
                         "A", "$(0.5)^x < (0.5)^{-2} \\Leftrightarrow x > -2$ (đảo chiều do cơ số $0.5 < 1$)."),
                make_mcq(8, "TH", "Tập nghiệm của bất phương trình $\\log_3(x - 1) \\le 2$ là",
                         "$(1; 10]$", "$(-\\infty; 10]$", "$[1; 10]$", "$(1; 9]$",
                         "A", "ĐK $x > 1$. $x - 1 \\le 3^2 = 9 \\Leftrightarrow x \\le 10$. Kết hợp: $1 < x \\le 10$."),
                make_mcq(9, "VD", "Giải phương trình $4^x - 5 \\cdot 2^x + 4 = 0$.",
                         "$x = 0$ hoặc $x = 2$", "$x = 1$ hoặc $x = 4$", "$x = 1$ hoặc $x = 2$", "$x = 0$ hoặc $x = 4$",
                         "A", "Đặt $t = 2^x > 0$: $t^2 - 5t + 4 = 0 \\Rightarrow t = 1$ hoặc $t = 4$. $2^x = 1 \\Rightarrow x = 0$; $2^x = 4 \\Rightarrow x = 2$."),
                make_mcq(10, "VD", "Một người gửi 100 triệu đồng vào ngân hàng với lãi suất 6%/năm theo thể thức lãi kép. Sau ít nhất bao nhiêu năm người đó có số tiền cả gốc lẫn lãi vượt quá 150 triệu đồng?",
                         "7 năm", "6 năm", "8 năm", "5 năm",
                         "A", "$100(1.06)^n > 150 \\Leftrightarrow 1.06^n > 1.5 \\Rightarrow n > \\frac{\\ln 1.5}{\\ln 1.06} \\approx \\frac{0.4055}{0.05827} \\approx 6.96$. Vì $n$ nguyên nên sau ít nhất 7 năm."),
                make_mcq(11, "VDC", "Tìm số nghiệm nguyên của bất phương trình $\\log_{\\frac{1}{2}}(x - 1) \\ge -2$.",
                         "4", "3", "5", "Vô số",
                         "A", "ĐK $x > 1$. $x - 1 \\le (1/2)^{-2} = 4 \\Leftrightarrow x \\le 5$. Kết hợp: $1 < x \\le 5$. Nghiệm nguyên: $x \\in \\{2; 3; 4; 5\\}$ (4 nghiệm)."),
                make_mcq(12, "VDC", "Tìm tất cả các giá trị của $m$ để phương trình $4^x - 2^{x+1} + m = 0$ có hai nghiệm phân biệt.",
                         "$0 < m < 1$", "$m < 1$", "$m > 0$", "$m \\le 1$",
                         "A", "Đặt $t = 2^x > 0$: $t^2 - 2t + m = 0$. Có 2 nghiệm $t > 0 \\Leftrightarrow \\Delta' = 1 - m > 0$ và $S = 2 > 0$ và $P = m > 0 \\Leftrightarrow 0 < m < 1$.")
            ]
            tfs = [
                make_tf(1, "Cho phương trình $2^{2x} - 6 \\cdot 2^x + 8 = 0$.", [
                    ("a", "Đặt $t = 2^x$, điều kiện là $t > 0$.", True, "Luỹ thừa luôn dương."),
                    ("b", "Phương trình trở thành $t^2 - 6t + 8 = 0$.", True, "Đúng."),
                    ("c", "Phương trình bậc hai có hai nghiệm $t_1 = 2$ và $t_2 = 4$.", True, "Đúng."),
                    ("d", "Các nghiệm của phương trình ban đầu là $x = 1$ và $x = 2$.", True, "$2^x = 2 \\Rightarrow x = 1; 2^x = 4 \\Rightarrow x = 2$.")
                ]),
                make_tf(2, "Cho bất phương trình $\\log_2(2x - 4) < 3$.", [
                    ("a", "Điều kiện xác định của bất phương trình là $x > 2$.", True, "$2x - 4 > 0 \\Leftrightarrow x > 2$."),
                    ("b", "Do cơ số $2 > 1$ nên chiều bất phương trình không đổi: $2x - 4 < 2^3$.", True, "Đúng."),
                    ("c", "Biến đổi tương đương $2x < 12 \\Leftrightarrow x < 6$.", True, "$2x - 4 < 8 \\Leftrightarrow 2x < 12$."),
                    ("d", "Tập nghiệm của bất phương trình là $(-\\infty; 6)$.", False, "Phải kết hợp điều kiện $x > 2$, tập nghiệm là $(2; 6)$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Giải phương trình $5^x = 125$.", 3, "$5^3 = 125$."),
                make_sa(2, "TH", "Giải phương trình $\\log_2 x = 5$.", 32, "$2^5 = 32$."),
                make_sa(3, "TH", "Tìm nghiệm của phương trình $2^{x-1} = 16$.", 5, "$x - 1 = 4 \\Rightarrow x = 5$."),
                make_sa(4, "VD", "Tìm tổng các nghiệm của phương trình $3^{2x} - 4 \\cdot 3^x + 3 = 0$.", 1, "$3^x = 1 \\Rightarrow x = 0; 3^x = 3 \\Rightarrow x = 1$. Tổng $0 + 1 = 1$."),
                make_sa(5, "VD", "Tìm số nghiệm nguyên dương của bất phương trình $3^x \\le 81$.", 4, "$x \\le 4$, nguyên dương có $1, 2, 3, 4$ (4 nghiệm)."),
                make_sa(6, "VDC", "Tìm số nghiệm của phương trình $\\log_2(x^2 - 3) = \\log_2(2x)$.", 1, "$x^2 - 2x - 3 = 0 \\Rightarrow x = 3$ (nghiệm $x = -1$ loại do $x > 0$).")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Giải phương trình mũ", "Giải phương trình: $9^x - 4 \\cdot 3^x + 3 = 0$.",
                           "Đặt $t = 3^x$ với điều kiện $t > 0$. Phương trình trở thành: $t^2 - 4t + 3 = 0 \\Leftrightarrow (t - 1)(t - 3) = 0 \\Leftrightarrow t = 1$ hoặc $t = 3$ (thoả mãn $t > 0$). Với $t = 1 \\Rightarrow 3^x = 1 = 3^0 \\Leftrightarrow x = 0$. Với $t = 3 \\Rightarrow 3^x = 3 = 3^1 \\Leftrightarrow x = 1$. Vậy tập nghiệm của phương trình là $S = \\{0; 1\\}$."),
                make_essay(2, "TH", 0.5, "Giải bất phương trình logarit", "Giải bất phương trình: $\\log_2(x + 3) + \\log_2(x - 1) \\le 5$.",
                           "Điều kiện: $\\begin{cases} x + 3 > 0 \\\\ x - 1 > 0 \\end{cases} \\Leftrightarrow x > 1$. Bất phương trình $\\Leftrightarrow \\log_2[(x + 3)(x - 1)] \\le 5 \\Leftrightarrow (x + 3)(x - 1) \\le 2^5 = 32 \\Leftrightarrow x^2 + 2x - 35 \\le 0 \\Leftrightarrow -7 \\le x \\le 5$. Kết hợp điều kiện $x > 1$, ta được tập nghiệm là $S = (1; 5]$."),
                make_essay(3, "VD", 0.5, "Giải phương trình bằng phương pháp logarit hoá", "Giải phương trình: $2^x \\cdot 3^{x-1} = 6$.",
                           "Lấy logarit cơ số 2 hai vế: $\\log_2(2^x \\cdot 3^{x-1}) = \\log_2 6 \\Leftrightarrow \\log_2 2^x + \\log_2 3^{x-1} = \\log_2(2 \\cdot 3) \\Leftrightarrow x + (x - 1)\\log_2 3 = 1 + \\log_2 3 \\Leftrightarrow x(1 + \\log_2 3) = 1 + 2\\log_2 3 \\Leftrightarrow x = \\frac{1 + 2\\log_2 3}{1 + \\log_2 3} = \\frac{\\log_2 18}{\\log_2 6} = \\log_6 18$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tăng trưởng vốn đầu tư", "Một người gửi số tiền 200 triệu đồng vào ngân hàng với lãi suất kép $6.5\\%$/năm. Sau bao nhiêu năm thì tổng số tiền người đó nhận được vượt quá 400 triệu đồng (gấp đôi số vốn ban đầu)?",
                           "Số tiền sau $n$ năm gửi tiết kiệm là: $A_n = 200(1 + 0.065)^n = 200(1.065)^n$ (triệu đồng). Để số tiền vượt quá 400 triệu đồng, ta có bất phương trình: $200(1.065)^n > 400 \\Leftrightarrow (1.065)^n > 2$. Lấy logarit tự nhiên hai vế: $\\ln(1.065)^n > \\ln 2 \\Leftrightarrow n \\ln(1.065) > \\ln 2 \\Rightarrow n > \\frac{\\ln 2}{\\ln 1.065} \\approx \\frac{0.693147}{0.062975} \\approx 11.006$. Vì $n$ là số nguyên năm nên $n = 12$. Vậy sau ít nhất 12 năm thì số tiền nhận được vượt quá 400 triệu đồng.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Nghiệm của phương trình $3^x = 9$ là",
                         "$x = 2$", "$x = 3$", "$x = 1$", "$x = 6$",
                         "A", "$3^x = 3^2 \\Leftrightarrow x = 2$."),
                make_mcq(2, "NB", "Nghiệm của phương trình $\\log_2 x = 3$ là",
                         "$x = 8$", "$x = 6$", "$x = 9$", "$x = 5$",
                         "A", "$x = 2^3 = 8$."),
                make_mcq(3, "NB", "Tập nghiệm của bất phương trình $3^x > 9$ là",
                         "$(2; +\\infty)$", "$[2; +\\infty)$", "$(-\\infty; 2)$", "$\\mathbb{R}$",
                         "A", "$3^x > 3^2 \\Leftrightarrow x > 2$."),
                make_mcq(4, "NB", "Điều kiện xác định của phương trình $\\log_3(2 - x) = 2$ là",
                         "$x < 2$", "$x > 2$", "$x \\le 2$", "$x \\ne 2$",
                         "A", "$2 - x > 0 \\Leftrightarrow x < 2$."),
                make_mcq(5, "TH", "Giải phương trình $2^{3x - 1} = 32$.",
                         "$x = 2$", "$x = 3$", "$x = 1$", "$x = 4$",
                         "A", "$2^{3x - 1} = 2^5 \\Leftrightarrow 3x - 1 = 5 \\Leftrightarrow 3x = 6 \\Rightarrow x = 2$."),
                make_mcq(6, "TH", "Giải phương trình $\\log_3(x + 2) + \\log_3(x - 2) = 1$.",
                         "$x = \\sqrt{7}$", "$x = \\pm \\sqrt{7}$", "$x = 7$", "$x = 3$",
                         "A", "ĐK $x > 2$. $\\log_3(x^2 - 4) = 1 \\Leftrightarrow x^2 - 4 = 3 \\Leftrightarrow x^2 = 7 \\Rightarrow x = \\sqrt{7}$ (do $x > 2$)."),
                make_mcq(7, "TH", "Tập nghiệm của bất phương trình $(0.2)^x \\ge 25$ là",
                         "$(-\\infty; -2]$", "$[-2; +\\infty)$", "$(-\\infty; 2]$", "$[2; +\\infty)$",
                         "A", "$(0.2)^x \\ge (0.2)^{-2} \\Leftrightarrow x \\le -2$ (đảo chiều do cơ số $0.2 < 1$)."),
                make_mcq(8, "TH", "Tập nghiệm của bất phương trình $\\log_2(x - 2) < 3$ là",
                         "$(2; 10)$", "$(-\\infty; 10)$", "$[2; 10)$", "$(2; 8)$",
                         "A", "ĐK $x > 2$. $x - 2 < 2^3 = 8 \\Leftrightarrow x < 10$. Tập nghiệm $(2; 10)$."),
                make_mcq(9, "VD", "Giải phương trình $9^x - 10 \\cdot 3^x + 9 = 0$.",
                         "$x = 0$ hoặc $x = 2$", "$x = 1$ hoặc $x = 2$", "$x = 1$ hoặc $x = 9$", "$x = 0$ hoặc $x = 9$",
                         "A", "Đặt $t = 3^x > 0$: $t^2 - 10t + 9 = 0 \\Rightarrow t = 1$ hoặc $t = 9$. $3^x = 1 \\Rightarrow x = 0; 3^x = 9 \\Rightarrow x = 2$."),
                make_mcq(10, "VD", "Áp suất không khí $P(h) = 760 \\cdot e^{-0.125h}$ (mmHg). Tại độ cao nào thì áp suất không khí giảm còn 380 mmHg (một nửa)?",
                         "$h \\approx 5.55$ km", "$h \\approx 8.85$ km", "$h \\approx 3.14$ km", "$h \\approx 4.0$ km",
                         "A", "$e^{-0.125h} = 0.5 \\Rightarrow -0.125h = -\\ln 2 \\approx -0.6931 \\Rightarrow h = 0.6931 / 0.125 \\approx 5.545$ km."),
                make_mcq(11, "VDC", "Tìm số nghiệm nguyên của bất phương trình $\\log_{\\frac{1}{3}}(x + 1) \\ge -2$.",
                         "8", "9", "7", "10",
                         "A", "ĐK $x > -1$. $x + 1 \\le (1/3)^{-2} = 9 \\Leftrightarrow x \\le 8$. Kết hợp: $-1 < x \\le 8$. Nghiệm nguyên: $0, 1, 2, 3, 4, 5, 6, 7, 8$ (9 nghiệm)."),
                make_mcq(12, "VDC", "Tìm $m$ để phương trình $9^x - 2 \\cdot 3^x + m = 0$ có nghiệm.",
                         "$m \\le 1$", "$m < 1$", "$0 < m \\le 1$", "$m > 0$",
                         "A", "$t = 3^x > 0$: $t^2 - 2t + m = 0$. Phương trình có nghiệm dương khi $\\Delta' = 1 - m \\ge 0 \\Leftrightarrow m \\le 1$ và có ít nhất 1 nghiệm $t > 0$. Vì $t_1 + t_2 = 2 > 0$ nên luôn có nghiệm dương khi $m \\le 1$.")
            ]
            tfs = [
                make_tf(1, "Cho phương trình $3^{2x} - 12 \\cdot 3^x + 27 = 0$.", [
                    ("a", "Đặt $t = 3^x$, điều kiện $t > 0$.", True, "Đúng."),
                    ("b", "Phương trình trở thành $t^2 - 12t + 27 = 0$.", True, "Đúng."),
                    ("c", "Hai nghiệm của phương trình ẩn $t$ là $t_1 = 3, t_2 = 9$.", True, "Đúng."),
                    ("d", "Các nghiệm của phương trình ban đầu là $x = 1$ và $x = 2$.", True, "$3^x = 3 \\Rightarrow x = 1; 3^x = 9 \\Rightarrow x = 2$.")
                ]),
                make_tf(2, "Cho bất phương trình $\\log_{0.5}(x - 1) > -2$.", [
                    ("a", "Điều kiện xác định là $x > 1$.", True, "Đúng."),
                    ("b", "Do cơ số $0.5 < 1$ nên bất phương trình đổi chiều: $x - 1 < (0.5)^{-2}$.", True, "Đổi chiều chuẩn xác."),
                    ("c", "Ta có $(0.5)^{-2} = 4$, suy ra $x - 1 < 4 \\Leftrightarrow x < 5$.", True, "Đúng."),
                    ("d", "Tập nghiệm của bất phương trình là khoảng $(1; 5)$.", True, "Kết hợp $x > 1$ và $x < 5$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Giải phương trình $2^x = 64$.", 6, "$2^6 = 64$."),
                make_sa(2, "TH", "Giải phương trình $\\log_3 x = 3$.", 27, "$3^3 = 27$."),
                make_sa(3, "TH", "Giải phương trình $4^{x+1} = 64$.", 2, "$x + 1 = 3 \\Rightarrow x = 2$."),
                make_sa(4, "VD", "Tính tổng các nghiệm của phương trình $2^{2x} - 5 \\cdot 2^x + 4 = 0$.", 2, "$x = 0, x = 2 \\Rightarrow 0 + 2 = 2$."),
                make_sa(5, "VD", "Tìm số nghiệm nguyên của bất phương trình $2^x \\le 16$. (Nghiệm nguyên dương)", 4, "$x \\le 4$, nguyên dương là $1, 2, 3, 4$."),
                make_sa(6, "VDC", "Tìm số nghiệm của phương trình $\\log_3(x^2 - 4) = \\log_3(3x)$.", 1, "$x^2 - 3x - 4 = 0 \\Rightarrow x = 4$ (loại nghiệm âm).")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Giải phương trình mũ đặt ẩn phụ", "Giải phương trình: $4^x - 6 \\cdot 2^x + 8 = 0$.",
                           "Đặt $t = 2^x$ ($t > 0$). Phương trình trở thành: $t^2 - 6t + 8 = 0 \\Leftrightarrow (t - 2)(t - 4) = 0 \\Leftrightarrow t = 2$ hoặc $t = 4$ (thoả mãn $t > 0$). Với $t = 2 \\Rightarrow 2^x = 2 \\Leftrightarrow x = 1$. Với $t = 4 \\Rightarrow 2^x = 4 = 2^2 \\Leftrightarrow x = 2$. Vậy nghiệm của phương trình là $x = 1, x = 2$."),
                make_essay(2, "TH", 0.5, "Giải bất phương trình logarit", "Giải bất phương trình: $\\log_{\\frac{1}{2}}(2x - 2) \\ge -3$.",
                           "Điều kiện xác định: $2x - 2 > 0 \\Leftrightarrow x > 1$. Vì cơ số $a = \\frac{1}{2} < 1$ nên khi bỏ logarit bất phương trình đổi chiều: $2x - 2 \\le \\left(\\frac{1}{2}\\right)^{-3} = 2^3 = 8 \\Leftrightarrow 2x \\le 10 \\Leftrightarrow x \\le 5$. Kết hợp điều kiện $x > 1$, ta được tập nghiệm là $S = (1; 5]$."),
                make_essay(3, "VD", 0.5, "Phương trình logarit cùng cơ số", "Giải phương trình: $\\log_2(x - 2) + \\log_2(x + 1) = 2$.",
                           "Điều kiện: $\\begin{cases} x - 2 > 0 \\\\ x + 1 > 0 \\end{cases} \\Leftrightarrow x > 2$. Phương trình $\\Leftrightarrow \\log_2[(x - 2)(x + 1)] = 2 \\Leftrightarrow x^2 - x - 2 = 2^2 = 4 \\Leftrightarrow x^2 - x - 6 = 0 \\Leftrightarrow (x - 3)(x + 2) = 0 \\Rightarrow x = 3$ (thoả mãn $x > 2$) hoặc $x = -2$ (loại). Vậy phương trình có nghiệm duy nhất $x = 3$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế khử khuẩn nước", "Trong công nghệ xử lý nước sinh hoạt bằng tia cực tím (UV), số lượng vi khuẩn $B(t)$ sau $t$ giây chiếu xạ tuân theo quy luật $B(t) = B_0 \\cdot e^{-0.4t}$. Cần chiếu xạ tối thiểu bao nhiêu giây để tiêu diệt $99.9\\%$ số vi khuẩn trong nước (làm tròn đến hàng đơn vị giây)?",
                           "Tiêu diệt $99.9\\%$ vi khuẩn nghĩa là số vi khuẩn còn lại bằng $100\\% - 99.9\\% = 0.1\\% = 0.001 B_0$. Ta có phương trình: $B_0 \\cdot e^{-0.4t} = 0.001 B_0 \\Leftrightarrow e^{-0.4t} = 10^{-3}$. Lấy logarit tự nhiên hai vế: $-0.4t = \\ln(10^{-3}) = -3\\ln 10 \\approx -3(2.302585) = -6.907755$. Suy ra $t = \\frac{6.907755}{0.4} \\approx 17.27$ giây. Làm tròn lên để đảm bảo diệt hết: cần chiếu xạ tối thiểu 18 giây.")
            ]
        return mcqs, tfs, sas, essays

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 6 Toán 11.")
