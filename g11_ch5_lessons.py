# -*- coding: utf-8 -*-
"""
Chương 5 Lớp 11: Giới hạn. Hàm số liên tục.
Bao gồm:
- Bài 15: Giới hạn của dãy số
- Bài 16: Giới hạn của hàm số
- Bài 17: Hàm số liên tục
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch5_lesson(lnum, k):
    if lnum == 15:
        # BÀI 15: GIỚI HẠN CỦA DÃY SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Giá trị của $\\lim \\frac{1}{n}$ bằng",
                         "0", "1", "$+\\infty$", "$-\\infty$",
                         "A", "Giới hạn cơ bản: $\\lim \\frac{1}{n^k} = 0$ với mọi $k > 0$."),
                make_mcq(2, "NB", "Cho $|q| < 1$, giới hạn $\\lim q^n$ bằng",
                         "0", "1", "$+\\infty$", "Không tồn tại",
                         "A", "Giới hạn cơ bản: $\\lim q^n = 0$ khi $|q| < 1$."),
                make_mcq(3, "NB", "Nếu $\\lim u_n = a$ và $\\lim v_n = b$ thì $\\lim (u_n + v_n)$ bằng",
                         "$a + b$", "$a - b$", "$ab$", "$a / b$",
                         "A", "Định lý về giới hạn hữu hạn của tổng: $\\lim(u_n + v_n) = \\lim u_n + \\lim v_n = a + b$."),
                make_mcq(4, "NB", "Dãy số nào sau đây có giới hạn bằng 0?",
                         "$u_n = \\left(\\frac{1}{3}\\right)^n$", "$u_n = 2^n$", "$u_n = \\left(\\frac{4}{3}\\right)^n$", "$u_n = (-2)^n$",
                         "A", "Vì $|1/3| < 1$ nên $\\lim (1/3)^n = 0$."),
                make_mcq(5, "TH", "Tính giới hạn $L = \\lim \\frac{2n + 1}{n - 3}$.",
                         "2", "1", "-1/3", "0",
                         "A", "Chia cả tử và mẫu cho $n$: $L = \\lim \\frac{2 + 1/n}{1 - 3/n} = \\frac{2}{1} = 2$."),
                make_mcq(6, "TH", "Tính giới hạn $L = \\lim \\frac{3n^2 - 4n + 1}{2n^2 + 5}$.",
                         "$\\frac{3}{2}$", "$\\frac{1}{5}$", "0", "$+\\infty$",
                         "A", "Bậc của tử bằng bậc của mẫu, $L = 3/2$."),
                make_mcq(7, "TH", "Tính giới hạn $L = \\lim \\frac{2^n + 3 \\cdot 4^n}{4^n - 2}$.",
                         "3", "1", "2", "0",
                         "A", "Chia tử và mẫu cho $4^n$: $L = \\lim \\frac{(1/2)^n + 3}{1 - 2(1/4)^n} = \\frac{3}{1} = 3$."),
                make_mcq(8, "TH", "Tính tổng của cấp số nhân lùi vô hạn $S = 1 + \\frac{1}{4} + \\frac{1}{16} + \\dots + \\frac{1}{4^n} + \\dots$",
                         "$\\frac{4}{3}$", "$\\frac{3}{4}$", "2", "$\\frac{5}{4}$",
                         "A", "$S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 1/4} = \\frac{4}{3}$."),
                make_mcq(9, "VD", "Tính giới hạn $L = \\lim (\\sqrt{n^2 + 2n} - n)$.",
                         "1", "0", "2", "$+\\infty$",
                         "A", "Nhân lượng liên hợp: $L = \\lim \\frac{n^2 + 2n - n^2}{\\sqrt{n^2 + 2n} + n} = \\lim \\frac{2n}{n(\\sqrt{1 + 2/n} + 1)} = \\frac{2}{2} = 1$."),
                make_mcq(10, "VD", "Nồng độ một loại thuốc trong máu (mg/l) sau ngày thứ $n$ được xấp xỉ bởi $C(n) = \\frac{50n + 10}{2n + 5}$. Khi số ngày $n$ tăng lên rất lớn, nồng độ thuốc ổn định ở mức bao nhiêu mg/l?",
                         "25 mg/l", "50 mg/l", "10 mg/l", "2 mg/l",
                         "A", "Nồng độ ổn định là $\\lim_{n \\to \\infty} C(n) = \\lim \\frac{50n + 10}{2n + 5} = 50/2 = 25$ mg/l."),
                make_mcq(11, "VDC", "Tìm giá trị của tham số $a$ để $\\lim \\frac{an^2 + 2n - 1}{2n^2 + 3} = 4$.",
                         "8", "4", "2", "6",
                         "A", "$\\lim = a/2 = 4 \\Rightarrow a = 8$."),
                make_mcq(12, "VDC", "Tính giới hạn $L = \\lim \\left(\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{n(n+1)}\\right)$.",
                         "1", "$\\frac{1}{2}$", "2", "$+\\infty$",
                         "A", "Tổng $S_n = 1 - \\frac{1}{n+1}$. Giới hạn $\\lim S_n = 1 - 0 = 1$.")
            ]
            tfs = [
                make_tf(1, "Xét giới hạn của dãy số $u_n = \\frac{3n - 1}{n + 2}$.", [
                    ("a", "Số hạng $u_1 = \\frac{2}{3}$.", True, "$u_1 = (3 - 1)/(1 + 2) = 2/3$."),
                    ("b", "Bậc của tử số và mẫu số đều bằng 1.", True, "Cùng bậc nhất theo $n$."),
                    ("c", "Giới hạn $\\lim u_n = 3$.", True, "Hệ số cao nhất: $3/1 = 3$."),
                    ("d", "Dãy số $u_n$ là dãy số giảm.", False, "$u_{n+1} - u_n = \\frac{3n+2}{n+3} - \\frac{3n-1}{n+2} = \\frac{7}{(n+3)(n+2)} > 0$ nên là dãy tăng.")
                ]),
                make_tf(2, "Cho cấp số nhân lùi vô hạn có $u_1 = 3$ và công bội $q = \\frac{1}{2}$.", [
                    ("a", "Điều kiện $|q| < 1$ được thoả mãn.", True, "$|1/2| = 0.5 < 1$."),
                    ("b", "Giới hạn của số hạng thứ $n$ khi $n \\to \\infty$ bằng 0.", True, "$\\lim u_n = \\lim 3(1/2)^{n-1} = 0$."),
                    ("c", "Tổng của cấp số nhân lùi vô hạn là $S = 6$.", True, "$S = \\frac{3}{1 - 1/2} = 6$."),
                    ("d", "Tổng $n$ số hạng đầu $S_n$ luôn lớn hơn 6 với mọi $n$.", False, "$S_n = 6(1 - (1/2)^n) < 6$ với mọi $n$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giới hạn $\\lim \\frac{5}{n^2}$.", 0, "Mẫu tiến ra vô cực nên giới hạn bằng 0."),
                make_sa(2, "TH", "Tính giới hạn $\\lim \\frac{4n + 3}{2n - 1}$.", 2, "$4/2 = 2$."),
                make_sa(3, "TH", "Tính giới hạn $\\lim \\frac{6n^2 + 1}{3n^2 - 5}$.", 2, "$6/3 = 2$."),
                make_sa(4, "VD", "Tính giới hạn $\\lim (\\sqrt{n^2 + 4n} - n)$.", 2, "$\\frac{4n}{2n} = 2$."),
                make_sa(5, "VD", "Tính tổng cấp số nhân lùi vô hạn $2 + 1 + 0.5 + 0.25 + \\dots$", 4, "$\\frac{2}{1 - 0.5} = 4$."),
                make_sa(6, "VDC", "Tìm $a$ để $\\lim \\frac{2an + 5}{3n - 1} = 6$.", 9, "$2a/3 = 6 \\Rightarrow 2a = 18 \\Rightarrow a = 9$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giới hạn phân thức hữu tỉ", "Tính giới hạn: $L = \\lim \\frac{4n^3 - 3n + 2}{2n^3 + n^2 - 1}$.",
                           "Chia cả tử và mẫu cho luỹ thừa bậc cao nhất là $n^3$: $L = \\lim \\frac{4 - \\frac{3}{n^2} + \\frac{2}{n^3}}{2 + \\frac{1}{n} - \\frac{1}{n^3}}$. Vì $\\lim \\frac{1}{n} = \\lim \\frac{1}{n^2} = \\lim \\frac{1}{n^3} = 0$, ta có $L = \\frac{4 - 0 + 0}{2 + 0 - 0} = \\frac{4}{2} = 2$."),
                make_essay(2, "TH", 0.5, "Tính giới hạn hàm mũ", "Tính giới hạn: $L = \\lim \\frac{3 \\cdot 5^n - 2 \\cdot 3^n}{5^n + 4^n}$.",
                           "Chia cả tử và mẫu cho cơ số lớn nhất là $5^n$: $L = \\lim \\frac{3 - 2\\left(\\frac{3}{5}\\right)^n}{1 + \\left(\\frac{4}{5}\\right)^n}$. Vì $|3/5| < 1$ và $|4/5| < 1$ nên $\\lim (3/5)^n = 0$ và $\\lim (4/5)^n = 0$. Suy ra $L = \\frac{3 - 0}{1 + 0} = 3$."),
                make_essay(3, "VD", 0.5, "Tính giới hạn nhân lượng liên hợp", "Tính giới hạn: $L = \\lim \\left(\\sqrt{4n^2 + 3n - 1} - 2n\\right)$.",
                           "Nhân và chia với lượng liên hợp: $L = \\lim \\frac{(4n^2 + 3n - 1) - 4n^2}{\\sqrt{4n^2 + 3n - 1} + 2n} = \\lim \\frac{3n - 1}{\\sqrt{4n^2 + 3n - 1} + 2n}$. Chia cả tử và mẫu cho $n$: $L = \\lim \\frac{3 - \\frac{1}{n}}{\\sqrt{4 + \\frac{3}{n} - \\frac{1}{n^2}} + 2} = \\frac{3 - 0}{\\sqrt{4 + 0 - 0} + 2} = \\frac{3}{2 + 2} = \\frac{3}{4}$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế hồ nuôi thuỷ sản", "Một hồ nuôi tôm có thể tích ban đầu chứa 1000 m$^3$ nước sạch. Mỗi ngày người ta bơm thêm 100 m$^3$ nước chứa $0.2$ kg chất dinh dưỡng vào hồ, đồng thời tháo ra 100 m$^3$ nước đã qua xử lý lọc. Gọi $C_n$ là nồng độ chất dinh dưỡng trong hồ sau $n$ ngày. Chứng minh nồng độ chất dinh dưỡng $C_n$ hội tụ về một hằng số khi $n \\to \\infty$ và tìm nồng độ ổn định đó (kg/m$^3$).",
                           "Sau mỗi ngày, lượng nước trong hồ luôn được duy trì không đổi là 1000 m$^3$. Lượng chất dinh dưỡng bổ sung đều đặn $0.2$ kg mỗi ngày hoà tan vào 100 m$^3$ nước bơm vào hồ. Khi thời gian $n$ kéo dài vô hạn ($n \\to \\infty$), hệ thống đạt trạng thái cân bằng động (Steady state): lượng chất dinh dưỡng đi vào bằng lượng chất dinh dưỡng thải ra. Nồng độ ổn định $C_\\infty$ bằng đúng nồng độ chất dinh dưỡng của nguồn nước cấp vào: $C_\\infty = \\frac{0.2 \\text{ kg}}{100 \\text{ m}^3} = 0.002$ kg/m$^3$ ($2$ g/m$^3$).")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Giá trị của $\\lim \\frac{3}{n^3}$ bằng",
                         "0", "3", "$+\\infty$", "1",
                         "A", "Giới hạn cơ bản $\\lim \\frac{c}{n^k} = 0$ với mọi hằng số $c$ và $k > 0$."),
                make_mcq(2, "NB", "Dãy số nào sau đây có giới hạn bằng $+\\infty$?",
                         "$u_n = n^2 + 1$", "$u_n = \\frac{1}{n}$", "$u_n = \\left(\\frac{1}{2}\\right)^n$", "$u_n = \\frac{2n + 1}{n}$",
                         "A", "Dãy $u_n = n^2 + 1$ tiến tới $+\\infty$ khi $n \\to +\\infty$."),
                make_mcq(3, "NB", "Nếu $\\lim u_n = a$ thì $\\lim |u_n|$ bằng",
                         "$|a|$", "$a$", "$-a$", "0",
                         "A", "Tính chất: $\\lim |u_n| = |\\lim u_n| = |a|$."),
                make_mcq(4, "NB", "Cho cấp số nhân lùi vô hạn $(u_n)$ có công bội $q$. Điều kiện của $q$ để cấp số nhân lùi vô hạn có tổng là",
                         "$|q| < 1$", "$|q| > 1$", "$q > 1$", "$q = 1$",
                         "A", "Điều kiện cấp số nhân lùi vô hạn là $|q| < 1$."),
                make_mcq(5, "TH", "Tính giới hạn $L = \\lim \\frac{3n - 5}{2n + 7}$.",
                         "$\\frac{3}{2}$", "$-\\frac{5}{7}$", "0", "1",
                         "A", "Chia cả tử và mẫu cho $n$: $L = 3/2$."),
                make_mcq(6, "TH", "Tính giới hạn $L = \\lim \\frac{5n^3 + 2n}{n^3 - 4n^2}$.",
                         "5", "2", "-2", "0",
                         "A", "Bậc tử bằng bậc mẫu, $L = 5/1 = 5$."),
                make_mcq(7, "TH", "Tính giới hạn $L = \\lim \\frac{2 \\cdot 3^n + 1}{3^n + 2^n}$.",
                         "2", "1", "3", "0",
                         "A", "Chia tử và mẫu cho $3^n$: $L = \\frac{2 + (1/3)^n}{1 + (2/3)^n} = 2$."),
                make_mcq(8, "TH", "Tính tổng cấp số nhân lùi vô hạn $S = 2 - 1 + \\frac{1}{2} - \\frac{1}{4} + \\dots$",
                         "$\\frac{4}{3}$", "$\\frac{2}{3}$", "1", "2",
                         "A", "$u_1 = 2, q = -1/2$. $S = \\frac{2}{1 - (-1/2)} = \\frac{2}{3/2} = \\frac{4}{3}$."),
                make_mcq(9, "VD", "Tính giới hạn $L = \\lim (\\sqrt{n^2 + 6n} - n)$.",
                         "3", "6", "0", "1",
                         "A", "Liên hợp: $\\lim \\frac{6n}{\\sqrt{n^2 + 6n} + n} = \\frac{6}{2} = 3$."),
                make_mcq(10, "VD", "Hiệu suất làm việc của công nhân mới sau $n$ tuần làm việc được mô hình bởi $P(n) = \\frac{80n}{n + 2}$ (sản phẩm/giờ). Sau thời gian làm việc rất dài ($n \\to \\infty$), năng suất công nhân tiếp cận mức",
                         "80 sản phẩm/giờ", "40 sản phẩm/giờ", "100 sản phẩm/giờ", "60 sản phẩm/giờ",
                         "A", "$\\lim_{n \\to \\infty} P(n) = 80$ sản phẩm/giờ."),
                make_mcq(11, "VDC", "Tìm $m$ để $\\lim \\frac{mn^2 + 1}{3n^2 - 2n} = 5$.",
                         "15", "5", "3", "10",
                         "A", "$m/3 = 5 \\Rightarrow m = 15$."),
                make_mcq(12, "VDC", "Tính giới hạn $L = \\lim \\left(\\frac{1}{1 \\cdot 3} + \\frac{1}{3 \\cdot 5} + \\dots + \\frac{1}{(2n-1)(2n+1)}\\right)$.",
                         "$\\frac{1}{2}$", "1", "$\\frac{1}{4}$", "2",
                         "A", "$S_n = \\frac{1}{2}(1 - \\frac{1}{2n+1}) \\Rightarrow L = 1/2$.")
            ]
            tfs = [
                make_tf(1, "Cho dãy số $u_n = \\frac{4n^2 + 1}{2n^2 + 3n}$.", [
                    ("a", "Bậc của tử và mẫu đều bằng 2.", True, "Đúng."),
                    ("b", "Giới hạn của dãy số khi $n \\to \\infty$ là $L = 2$.", True, "$4/2 = 2$."),
                    ("c", "Dãy số có giới hạn hữu hạn.", True, "Bằng 2."),
                    ("d", "Số hạng $u_1 = 1$.", True, "$u_1 = (4 + 1)/(2 + 3) = 5/5 = 1$.")
                ]),
                make_tf(2, "Cho cấp số nhân lùi vô hạn có $u_1 = 4$ và công bội $q = \\frac{1}{3}$.", [
                    ("a", "Cấp số nhân này là lùi vô hạn vì $|q| = 1/3 < 1$.", True, "Đúng."),
                    ("b", "Số hạng $u_2 = \\frac{4}{3}$.", True, "$4 \\times 1/3 = 4/3$."),
                    ("c", "Tổng của cấp số nhân lùi vô hạn là $S = 6$.", True, "$S = \\frac{4}{1 - 1/3} = \\frac{4}{2/3} = 6$."),
                    ("d", "Giới hạn $\\lim_{n \\to \\infty} u_n = 4$.", False, "$\\lim u_n = 0$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giới hạn $\\lim \\frac{-7}{n^4}$.", 0, "Bằng 0."),
                make_sa(2, "TH", "Tính giới hạn $\\lim \\frac{8n - 2}{4n + 5}$.", 2, "$8/4 = 2$."),
                make_sa(3, "TH", "Tính giới hạn $\\lim \\frac{10n^2 + 3}{2n^2 - 1}$.", 5, "$10/2 = 5$."),
                make_sa(4, "VD", "Tính giới hạn $\\lim (\\sqrt{n^2 + 8n} - n)$.", 4, "$8/2 = 4$."),
                make_sa(5, "VD", "Tính tổng cấp số nhân lùi vô hạn $3 + 1 + 1/3 + \\dots$", 4.5, "$\\frac{3}{1 - 1/3} = 4.5$."),
                make_sa(6, "VDC", "Tìm $k$ để $\\lim \\frac{kn + 2}{5n - 3} = 4$.", 20, "$k/5 = 4 \\Rightarrow k = 20$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính giới hạn phân thức", "Tính giới hạn: $L = \\lim \\frac{5n^2 - 3n + 1}{n^2 + 2}$.",
                           "Chia tử và mẫu cho $n^2$: $L = \\lim \\frac{5 - 3/n + 1/n^2}{1 + 2/n^2} = \\frac{5 - 0 + 0}{1 + 0} = 5$."),
                make_essay(2, "TH", 0.5, "Tính giới hạn luỹ thừa", "Tính giới hạn: $L = \\lim \\frac{4^n + 2 \\cdot 3^n}{2 \\cdot 4^n - 3^n}$.",
                           "Chia cả tử và mẫu cho $4^n$: $L = \\lim \\frac{1 + 2(3/4)^n}{2 - (3/4)^n} = \\frac{1 + 0}{2 - 0} = \\frac{1}{2}$."),
                make_essay(3, "VD", 0.5, "Tính giới hạn chứa căn thức", "Tính giới hạn: $L = \\lim \\left(\\sqrt{n^2 + 10n} - n\\right)$.",
                           "Nhân lượng liên hợp: $L = \\lim \\frac{n^2 + 10n - n^2}{\\sqrt{n^2 + 10n} + n} = \\lim \\frac{10n}{n(\\sqrt{1 + 10/n} + 1)} = \\frac{10}{1 + 1} = 5$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế giảm xóc ô tô", "Một bộ giảm xóc xe hơi dao động sau mỗi chu kỳ rung lắc có biên độ giảm dần theo cấp số nhân: biên độ ban đầu $A_1 = 8$ cm, biên độ sau mỗi chu kỳ giảm bằng $60\\%$ biên độ chu kỳ liền trước ($q = 0.6$). Tính tổng quãng đường chuyển động của bộ giảm xóc từ khi bắt đầu kích hoạt cho đến khi tắt hẳn dao động.",
                           "Tổng quãng đường di chuyển trong toàn bộ quá trình tắt dần dao động được tính bằng tổng của cấp số nhân lùi vô hạn với $u_1 = 8$ cm và công bội $q = 0.6$ ($|q| < 1$). Tổng dao động: $S = \\frac{u_1}{1 - q} = \\frac{8}{1 - 0.6} = \\frac{8}{0.4} = 20$ cm. Vậy tổng quãng đường dịch chuyển của bộ giảm xóc đến khi tắt hẳn là 20 cm.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 16:
        # BÀI 16: GIỚI HẠN CỦA HÀM SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Tính giới hạn $\\lim_{x \\to 2} (3x - 1)$.",
                         "5", "6", "4", "7",
                         "A", "Thay $x = 2$: $3(2) - 1 = 5$."),
                make_mcq(2, "NB", "Tính giới hạn $\\lim_{x \\to 1} \\frac{x + 3}{x + 1}$.",
                         "2", "4", "1", "3",
                         "A", "Thay $x = 1$: $\\frac{1 + 3}{1 + 1} = \\frac{4}{2} = 2$."),
                make_mcq(3, "NB", "Giới hạn $\\lim_{x \\to +\\infty} \\frac{1}{x^2}$ bằng",
                         "0", "1", "$+\\infty$", "$-\\infty$",
                         "A", "Khi $x \\to +\\infty$ thì $\\frac{1}{x^k} = 0$."),
                make_mcq(4, "NB", "Khẳng định nào sau đây là đúng về giới hạn một bên?",
                         "$\\lim_{x \\to x_0} f(x) = L \\Leftrightarrow \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = L$",
                         "$\\lim_{x \\to x_0} f(x) = L \\Leftrightarrow \\lim_{x \\to x_0^+} f(x) = L$",
                         "$\\lim_{x \\to x_0} f(x) = L \\Leftrightarrow \\lim_{x \\to x_0^-} f(x) = L$",
                         "Giới hạn bên trái luôn bằng giới hạn bên phải",
                         "A", "Điều kiện cần và đủ để hàm số có giới hạn tại $x_0$ là giới hạn trái và giới hạn phải cùng tồn tại và bằng nhau."),
                make_mcq(5, "TH", "Tính giới hạn $L = \\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$.",
                         "2", "0", "1", "Không tồn tại",
                         "A", "Khử dạng $0/0$: $L = \\lim_{x \\to 1} \\frac{(x - 1)(x + 1)}{x - 1} = \\lim_{x \\to 1} (x + 1) = 2$."),
                make_mcq(6, "TH", "Tính giới hạn $L = \\lim_{x \\to 2} \\frac{x^2 - 4}{x^2 - 3x + 2}$.",
                         "4", "2", "1", "0",
                         "A", "$L = \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{(x - 2)(x - 1)} = \\lim_{x \\to 2} \\frac{x + 2}{x - 1} = \\frac{4}{1} = 4$."),
                make_mcq(7, "TH", "Tính giới hạn $L = \\lim_{x \\to +\\infty} \\frac{3x - 1}{2x + 5}$.",
                         "$\\frac{3}{2}$", "3", "0", "$+\\infty$",
                         "A", "Bậc tử bằng bậc mẫu: $L = 3/2$."),
                make_mcq(8, "TH", "Tính giới hạn một bên $\\lim_{x \\to 1^+} \\frac{2x - 1}{x - 1}$.",
                         "$+\\infty$", "$-\\infty$", "2", "0",
                         "A", "Tử số tiến về $2(1) - 1 = 1 > 0$. Mẫu số $x - 1 > 0$ khi $x \\to 1^+$. Do đó giới hạn bằng $+\\infty$."),
                make_mcq(9, "VD", "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x} - 1}{x}$.",
                         "1", "2", "$\\frac{1}{2}$", "0",
                         "A", "Nhân liên hợp: $L = \\lim_{x \\to 0} \\frac{1 + 2x - 1}{x(\\sqrt{1 + 2x} + 1)} = \\lim_{x \\to 0} \\frac{2}{\\sqrt{1 + 2x} + 1} = \\frac{2}{2} = 1$."),
                make_mcq(10, "VD", "Chi phí trung bình để sản xuất $x$ sản phẩm là $\\bar{C}(x) = 50 + \\frac{2000}{x}$ (nghìn đồng). Khi quy mô sản xuất tăng lên rất lớn ($x \\to +\\infty$), chi phí trung bình tiến về mức",
                         "50 nghìn đồng", "2000 nghìn đồng", "0 nghìn đồng", "100 nghìn đồng",
                         "A", "$\\lim_{x \\to +\\infty} (50 + 2000/x) = 50$ nghìn đồng."),
                make_mcq(11, "VDC", "Tìm $a$ để giới hạn $\\lim_{x \\to 2} \\frac{x^2 - ax + 4}{x - 2}$ tồn tại hữu hạn.",
                         "$a = 4$", "$a = 2$", "$a = -4$", "$a = 0$",
                         "A", "Để giới hạn hữu hạn thì $x = 2$ phải là nghiệm của tử số: $2^2 - 2a + 4 = 0 \\Leftrightarrow 8 - 2a = 0 \\Rightarrow a = 4$."),
                make_mcq(12, "VDC", "Tính giới hạn $L = \\lim_{x \\to -\\infty} (\\sqrt{x^2 + 4x} + x)$.",
                         "-2", "2", "0", "$-\\infty$",
                         "A", "Đặt $x = -t$ ($t \\to +\\infty$): $\\sqrt{t^2 - 4t} - t = \\frac{-4t}{\\sqrt{t^2 - 4t} + t} \\to -2$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = \\frac{x^2 - 9}{x - 3}$.", [
                    ("a", "Hàm số không xác định tại điểm $x = 3$.", True, "Mẫu số triệt tiêu."),
                    ("b", "Khi $x \\ne 3$, ta có $f(x) = x + 3$.", True, "Rút gọn phân thức."),
                    ("c", "Giới hạn $\\lim_{x \\to 3} f(x) = 6$.", True, "$3 + 3 = 6$."),
                    ("d", "Giới hạn tại vô cực $\\lim_{x \\to +\\infty} f(x) = 6$.", False, "Tiến tới $+\\infty$.")
                ]),
                make_tf(2, "Cho hàm số $f(x) = \\begin{cases} 2x + 1 & \\text{khi } x \\ge 1 \\\\ x^2 + 2 & \\text{khi } x < 1 \\end{cases}$.", [
                    ("a", "Giới hạn phải $\\lim_{x \\to 1^+} f(x) = 3$.", True, "$2(1) + 1 = 3$."),
                    ("b", "Giới hạn trái $\\lim_{x \\to 1^-} f(x) = 3$.", True, "$1^2 + 2 = 3$."),
                    ("c", "Tồn tại giới hạn $\\lim_{x \\to 1} f(x)$ và bằng 3.", True, "Vì giới hạn trái bằng giới hạn phải."),
                    ("d", "Giá trị hàm số tại $x = 1$ là $f(1) = 2$.", False, "$f(1) = 2(1) + 1 = 3$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giới hạn $\\lim_{x \\to 3} (2x - 1)$.", 5, "$2(3) - 1 = 5$."),
                make_sa(2, "TH", "Tính giới hạn $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.", 4, "$2 + 2 = 4$."),
                make_sa(3, "TH", "Tính giới hạn $\\lim_{x \\to +\\infty} \\frac{6x - 1}{3x + 2}$.", 2, "$6/3 = 2$."),
                make_sa(4, "VD", "Tính giới hạn $\\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x} - 1}{x}$.", 2, "$\\frac{4}{2} = 2$."),
                make_sa(5, "VD", "Tính $\\lim_{x \\to 2} \\frac{x^2 - 5x + 6}{x - 2}$.", -1, "$\\lim (x - 3) = -1$."),
                make_sa(6, "VDC", "Tìm $a$ để $\\lim_{x \\to 1} \\frac{x^2 + ax - 3}{x - 1}$ hữu hạn.", 2, "$1 + a - 3 = 0 \\Rightarrow a = 2$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Khử dạng vô định 0/0", "Tính giới hạn: $L = \\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}$.",
                           "Áp dụng hằng đẳng thức hiệu hai lập phương: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$. Ta có: $L = \\lim_{x \\to 2} \\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = \\lim_{x \\to 2} (x^2 + 2x + 4) = 2^2 + 2(2) + 4 = 12$."),
                make_essay(2, "TH", 0.5, "Giới hạn tại vô cực", "Tính giới hạn: $L = \\lim_{x \\to +\\infty} \\frac{3x^2 - 2x + 5}{x^2 + 4x - 1}$.",
                           "Chia cả tử và mẫu cho $x^2$: $L = \\lim_{x \\to +\\infty} \\frac{3 - \\frac{2}{x} + \\frac{5}{x^2}}{1 + \\frac{4}{x} - \\frac{1}{x^2}} = \\frac{3 - 0 + 0}{1 + 0 - 0} = 3$."),
                make_essay(3, "VD", 0.5, "Nhân lượng liên hợp", "Tính giới hạn: $L = \\lim_{x \\to 1} \\frac{\\sqrt{3x + 1} - 2}{x - 1}$.",
                           "Nhân lượng liên hợp cả tử và mẫu: $L = \\lim_{x \\to 1} \\frac{(3x + 1) - 4}{(x - 1)(\\sqrt{3x + 1} + 2)} = \\lim_{x \\to 1} \\frac{3(x - 1)}{(x - 1)(\\sqrt{3x + 1} + 2)} = \\lim_{x \\to 1} \\frac{3}{\\sqrt{3x + 1} + 2} = \\frac{3}{2 + 2} = \\frac{3}{4}$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế vận tốc tức thời", "Một vật rơi tự do từ độ cao 100 m có quãng đường rơi tính theo thời gian là $s(t) = 5t^2$ (mét, với $t$ tính bằng giây). Bằng định nghĩa giới hạn $\\lim_{\\Delta t \\to 0} \\frac{s(t_0 + \\Delta t) - s(t_0)}{\\Delta t}$, hãy tính vận tốc tức thời của vật tại thời điểm $t_0 = 3$ giây.",
                           "Xét tỷ số biến thiên vận tốc trung bình: $\\frac{\\Delta s}{\\Delta t} = \\frac{s(3 + \\Delta t) - s(3)}{\\Delta t} = \\frac{5(3 + \\Delta t)^2 - 5(3^2)}{\\Delta t} = \\frac{5(9 + 6\\Delta t + (\\Delta t)^2) - 45}{\\Delta t} = \\frac{30\\Delta t + 5(\\Delta t)^2}{\\Delta t} = 30 + 5\\Delta t$. Vận tốc tức thời tại $t_0 = 3$ s là giới hạn khi $\\Delta t \\to 0$: $v(3) = \\lim_{\\Delta t \\to 0} (30 + 5\\Delta t) = 30$ m/s.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Tính giới hạn $\\lim_{x \\to -1} (x^2 + 2x + 3)$.",
                         "2", "0", "4", "6",
                         "A", "Thay $x = -1$: $1 - 2 + 3 = 2$."),
                make_mcq(2, "NB", "Tính giới hạn $\\lim_{x \\to 0} \\frac{2x + 1}{x + 3}$.",
                         "$\\frac{1}{3}$", "0", "$\\frac{2}{3}$", "1",
                         "A", "Thay $x = 0$: $1/3$."),
                make_mcq(3, "NB", "Giới hạn $\\lim_{x \\to -\\infty} \\frac{1}{x^3}$ bằng",
                         "0", "1", "$-\\infty$", "$+\\infty$",
                         "A", "Khi $x \\to -\\infty$ thì $1/x^3 = 0$."),
                make_mcq(4, "NB", "Giới hạn bên phải của hàm số tại $x_0$ được kí hiệu là",
                         "$\\lim_{x \\to x_0^+} f(x)$", "$\\lim_{x \\to x_0^-} f(x)$", "$\\lim_{x \\to x_0} f(x)$", "$f(x_0)$",
                         "A", "Kí hiệu chuẩn: $\\lim_{x \\to x_0^+} f(x)$."),
                make_mcq(5, "TH", "Tính giới hạn $L = \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
                         "6", "3", "0", "Không tồn tại",
                         "A", "$L = \\lim_{x \\to 3} (x + 3) = 6$."),
                make_mcq(6, "TH", "Tính giới hạn $L = \\lim_{x \\to 1} \\frac{x^2 - 3x + 2}{x - 1}$.",
                         "-1", "1", "0", "2",
                         "A", "$L = \\lim_{x \\to 1} \\frac{(x - 1)(x - 2)}{x - 1} = 1 - 2 = -1$."),
                make_mcq(7, "TH", "Tính giới hạn $L = \\lim_{x \\to +\\infty} \\frac{4x^2 - 1}{2x^2 + 3}$.",
                         "2", "4", "0", "$+\\infty$",
                         "A", "Bậc tử bằng bậc mẫu: $4/2 = 2$."),
                make_mcq(8, "TH", "Tính giới hạn một bên $\\lim_{x \\to 2^-} \\frac{x + 1}{x - 2}$.",
                         "$-\\infty$", "$+\\infty$", "3", "0",
                         "A", "Tử số tiến về 3 dương, mẫu số $x - 2 < 0$ khi $x \\to 2^-$, do đó kết quả là $-\\infty$."),
                make_mcq(9, "VD", "Tính giới hạn $L = \\lim_{x \\to 0} \\frac{\\sqrt{4 + 3x} - 2}{x}$.",
                         "$\\frac{3}{4}$", "$\\frac{3}{2}$", "3", "0",
                         "A", "Liên hợp: $\\lim \\frac{3}{\\sqrt{4 + 3x} + 2} = \\frac{3}{4}$."),
                make_mcq(10, "VD", "Nhiệt độ $T(t)$ của một thanh kim loại nung nóng để nguội theo thời gian $t$ (phút) là $T(t) = 30 + \\frac{100}{t + 1}$ ($^\\circ$C). Sau thời gian rất dài, nhiệt độ thanh kim loại xấp xỉ bằng",
                         "$30^\\circ$C", "$100^\\circ$C", "$0^\\circ$C", "$130^\\circ$C",
                         "A", "$\\lim_{t \\to +\\infty} (30 + 100/(t+1)) = 30^\\circ$C."),
                make_mcq(11, "VDC", "Tìm $b$ để giới hạn $\\lim_{x \\to 1} \\frac{x^2 - 2x + b}{x - 1}$ tồn tại hữu hạn.",
                         "1", "-1", "2", "0",
                         "A", "Tử số phải triệt tiêu tại $x = 1$: $1 - 2 + b = 0 \\Rightarrow b = 1$."),
                make_mcq(12, "VDC", "Tính giới hạn $L = \\lim_{x \\to +\\infty} (\\sqrt{x^2 + 2x} - x)$.",
                         "1", "2", "0", "$+\\infty$",
                         "A", "Liên hợp: $\\lim \\frac{2x}{\\sqrt{x^2+2x}+x} = \\frac{2}{2} = 1$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = \\frac{x^2 - 4}{x - 2}$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{2\\}$.", True, "Đúng."),
                    ("b", "Khi $x \\ne 2$, biểu thức $f(x) = x + 2$.", True, "Đúng."),
                    ("c", "Giới hạn $\\lim_{x \\to 2} f(x) = 4$.", True, "$2 + 2 = 4$."),
                    ("d", "Hàm số có giá trị tại $x = 2$ bằng 4.", False, "Hàm số không xác định tại $x = 2$.")
                ]),
                make_tf(2, "Cho hàm số $f(x) = \\begin{cases} x + 2 & \\text{khi } x > 0 \\\\ 2 - x & \\text{khi } x \\le 0 \\end{cases}$.", [
                    ("a", "Giới hạn phải $\\lim_{x \\to 0^+} f(x) = 2$.", True, "$0 + 2 = 2$."),
                    ("b", "Giới hạn trái $\\lim_{x \\to 0^-} f(x) = 2$.", True, "$2 - 0 = 2$."),
                    ("c", "Giới hạn $\\lim_{x \\to 0} f(x)$ tồn tại và bằng 2.", True, "Giới hạn trái bằng giới hạn phải."),
                    ("d", "Giá trị hàm số tại $0$ là $f(0) = 2$.", True, "$2 - 0 = 2$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giới hạn $\\lim_{x \\to 1} (4x + 1)$.", 5, "$4(1) + 1 = 5$."),
                make_sa(2, "TH", "Tính giới hạn $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$.", 8, "$4 + 4 = 8$."),
                make_sa(3, "TH", "Tính giới hạn $\\lim_{x \\to +\\infty} \\frac{8x - 3}{2x + 1}$.", 4, "$8/2 = 4$."),
                make_sa(4, "VD", "Tính giới hạn $\\lim_{x \\to 0} \\frac{\\sqrt{9 + 6x} - 3}{x}$.", 1, "$\\frac{6}{2(3)} = 1$."),
                make_sa(5, "VD", "Tính $\\lim_{x \\to 3} \\frac{x^2 - 4x + 3}{x - 3}$.", 2, "$3 - 1 = 2$."),
                make_sa(6, "VDC", "Tìm $m$ để $\\lim_{x \\to 2} \\frac{x^2 - mx + 6}{x - 2}$ hữu hạn.", 5, "$4 - 2m + 6 = 0 \\Rightarrow m = 5$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Khử dạng vô định 0/0", "Tính giới hạn: $L = \\lim_{x \\to -3} \\frac{x^2 - 9}{x + 3}$.",
                           "Khử dạng $0/0$: $L = \\lim_{x \\to -3} \\frac{(x - 3)(x + 3)}{x + 3} = \\lim_{x \\to -3} (x - 3) = -3 - 3 = -6$."),
                make_essay(2, "TH", 0.5, "Giới hạn tại vô cực", "Tính giới hạn: $L = \\lim_{x \\to +\\infty} \\frac{6x^2 + 5x - 2}{2x^2 - 1}$.",
                           "Chia cả tử và mẫu cho $x^2$: $L = \\lim_{x \\to +\\infty} \\frac{6 + 5/x - 2/x^2}{2 - 1/x^2} = \\frac{6}{2} = 3$."),
                make_essay(3, "VD", 0.5, "Nhân lượng liên hợp", "Tính giới hạn: $L = \\lim_{x \\to 4} \\frac{\\sqrt{2x + 1} - 3}{x - 4}$.",
                           "Liên hợp: $L = \\lim_{x \\to 4} \\frac{2x + 1 - 9}{(x - 4)(\\sqrt{2x + 1} + 3)} = \\lim_{x \\to 4} \\frac{2(x - 4)}{(x - 4)(\\sqrt{2x + 1} + 3)} = \\frac{2}{3 + 3} = \\frac{1}{3}$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế cường độ dòng điện", "Điện lượng chuyển qua tiết diện thẳng của dây dẫn biến thiên theo thời gian $q(t) = 3t^2 + 2t$ (Coulomb). Dùng định nghĩa giới hạn $I(t_0) = \\lim_{\\Delta t \\to 0} \\frac{q(t_0 + \\Delta t) - q(t_0)}{\\Delta t}$, hãy tính cường độ dòng điện tức thời tại thời điểm $t_0 = 2$ giây.",
                           "Xét tỷ số: $\\frac{\\Delta q}{\\Delta t} = \\frac{q(2 + \\Delta t) - q(2)}{\\Delta t} = \\frac{3(2 + \\Delta t)^2 + 2(2 + \\Delta t) - (12 + 4)}{\\Delta t} = \\frac{3(4 + 4\\Delta t + \\Delta t^2) + 4 + 2\\Delta t - 16}{\\Delta t} = \\frac{14\\Delta t + 3(\\Delta t)^2}{\\Delta t} = 14 + 3\\Delta t$. Cường độ dòng điện tức thời là: $I(2) = \\lim_{\\Delta t \\to 0} (14 + 3\\Delta t) = 14$ Ampe.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 17:
        # BÀI 17: HÀM SỐ LIÊN TỤC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Hàm số $y = f(x)$ được gọi là liên tục tại điểm $x_0$ nếu",
                         "$\\lim_{x \\to x_0} f(x) = f(x_0)$",
                         "$\\lim_{x \\to x_0} f(x)$ tồn tại",
                         "$f(x_0)$ có nghĩa",
                         "$\\lim_{x \\to x_0} f(x) \\ne f(x_0)$",
                         "A", "Định nghĩa chuẩn: hàm số liên tục tại $x_0$ khi $\\lim_{x \\to x_0} f(x) = f(x_0)$."),
                make_mcq(2, "NB", "Hàm số đa thức $P(x) = a_n x^n + \\dots + a_0$",
                         "Liên tục trên toàn bộ $\\mathbb{R}$",
                         "Chỉ liên tục trên $(0; +\\infty)$",
                         "Chỉ liên tục tại $x = 0$",
                         "Không liên tục tại điểm nào",
                         "A", "Định lý: Hàm số đa thức liên tục trên toàn bộ tập số thực $\\mathbb{R}$."),
                make_mcq(3, "NB", "Hàm số $y = \\frac{1}{x - 2}$ gián đoạn tại điểm nào?",
                         "$x = 2$", "$x = 0$", "$x = -2$", "$x = 1$",
                         "A", "Hàm số không xác định tại $x = 2$ nên gián đoạn tại điểm $x = 2$."),
                make_mcq(4, "NB", "Nếu hàm số $f(x)$ liên tục trên $[a; b]$ và $f(a) \\cdot f(b) < 0$ thì",
                         "Phương trình $f(x) = 0$ có ít nhất một nghiệm trong khoảng $(a; b)$",
                         "Phương trình $f(x) = 0$ vô nghiệm",
                         "Phương trình $f(x) = 0$ có đúng 1 nghiệm",
                         "Hàm số đồng biến trên $[a; b]$",
                         "A", "Định lý giá trị trung gian: Nếu $f(x)$ liên tục trên $[a; b]$ và $f(a)f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất 1 nghiệm trong $(a; b)$."),
                make_mcq(5, "TH", "Cho hàm số $f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} & \\text{khi } x \\ne 2 \\\\ m & \\text{khi } x = 2 \\end{cases}$. Tìm $m$ để hàm số liên tục tại $x = 2$.",
                         "$m = 4$", "$m = 2$", "$m = 0$", "$m = -4$",
                         "A", "Ta có $\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x + 2) = 4$. Để liên tục tại $x = 2$ thì $f(2) = m = 4$."),
                make_mcq(6, "TH", "Hàm số $y = \\sqrt{x - 3}$ liên tục trên khoảng nào?",
                         "$(3; +\\infty)$", "$(-\\infty; 3)$", "$\\mathbb{R}$", "$(-3; 3)$",
                         "A", "Hàm số xác định và liên tục trên $[3; +\\infty)$, do đó liên tục trên $(3; +\\infty)$."),
                make_mcq(7, "TH", "Cho hàm số $f(x) = x^3 - 3x + 1$. Phương trình $f(x) = 0$ có ít nhất một nghiệm trong khoảng nào sau đây?",
                         "$(0; 1)$", "$(1; 2)$", "$(2; 3)$", "$(-2; -1)$",
                         "A", "Ta có $f(0) = 1 > 0$ và $f(1) = 1 - 3 + 1 = -1 < 0$. Vì $f(0)f(1) < 0$ nên phương trình có nghiệm trong $(0; 1)$."),
                make_mcq(8, "TH", "Hàm số $y = \\tan x$ liên tục trên",
                         "Mỗi khoảng $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$",
                         "Toàn bộ $\\mathbb{R}$",
                         "$[-1; 1]$",
                         "$(0; \\pi)$",
                         "A", "Hàm số lượng giác liên tục trên từng khoảng xác định của nó."),
                make_mcq(9, "VD", "Một cước phí taxi được tính theo bậc: 1 km đầu giá 15.000 đồng; từ trên 1 km đến 10 km giá 12.000 đồng/km. Hàm số biểu thị giá cước $T(x)$ theo quãng đường $x$ (km) là",
                         "Hàm số liên tục trên $(0; 10]$",
                         "Hàm số gián đoạn tại $x = 1$",
                         "Hàm số không xác định tại $x = 1$",
                         "Hàm hằng",
                         "A", "Giá cước taxi tính theo đồng hồ cước luỹ tiến liên tục theo quãng đường."),
                make_mcq(10, "VD", "Tìm $a$ để hàm số $f(x) = \\begin{cases} ax + 2 & \\text{khi } x \\ge 1 \\\\ 3x - 1 & \\text{khi } x < 1 \\end{cases}$ liên tục tại $x = 1$.",
                         "$a = 0$", "$a = 1$", "$a = 2$", "$a = -1$",
                         "A", "$\\lim_{x \\to 1^+} f(x) = f(1) = a + 2$. $\\lim_{x \\to 1^-} f(x) = 3(1) - 1 = 2$. Để liên tục: $a + 2 = 2 \\Rightarrow a = 0$."),
                make_mcq(11, "VDC", "Chứng minh phương trình $x^5 - 3x - 1 = 0$ có ít nhất bao nhiêu nghiệm thực trên khoảng $(-2; 2)$?",
                         "Ít nhất 3 nghiệm", "Đúng 1 nghiệm", "Vô nghiệm", "Ít nhất 5 nghiệm",
                         "A", "$f(-2) = -27 < 0; f(-1) = 1 > 0; f(0) = -1 < 0; f(2) = 25 > 0$. Có 3 lần đổi dấu trên các khoảng $(-2; -1), (-1; 0), (0; 2)$ nên có ít nhất 3 nghiệm."),
                make_mcq(12, "VDC", "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thoả mãn $f(x) + f(2x) = 0$ với mọi $x$. Giá trị của $f(0)$ bằng",
                         "0", "1", "2", "-1",
                         "A", "Cho $x = 0 \\Rightarrow f(0) + f(0) = 0 \\Leftrightarrow 2f(0) = 0 \\Rightarrow f(0) = 0$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = \\begin{cases} \\frac{x^2 - 1}{x - 1} & \\text{khi } x \\ne 1 \\\\ 2 & \\text{khi } x = 1 \\end{cases}$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R}$.", True, "Hàm số xác định với mọi $x$."),
                    ("b", "Giới hạn $\\lim_{x \\to 1} f(x) = 2$.", True, "$\\lim_{x \\to 1} (x + 1) = 2$."),
                    ("c", "Giá trị của hàm số tại điểm $x = 1$ là $f(1) = 2$.", True, "Theo định nghĩa hàm số."),
                    ("d", "Hàm số liên tục tại điểm $x = 1$.", True, "Vì $\\lim_{x \\to 1} f(x) = f(1) = 2$.")
                ]),
                make_tf(2, "Xét phương trình $x^3 + 2x - 5 = 0$.", [
                    ("a", "Hàm số $f(x) = x^3 + 2x - 5$ là hàm đa thức nên liên tục trên $\\mathbb{R}$.", True, "Định lý hàm đa thức."),
                    ("b", "Giá trị $f(1) = -2 < 0$.", True, "$1 + 2 - 5 = -2$."),
                    ("c", "Giá trị $f(2) = 7 > 0$.", True, "$8 + 4 - 5 = 7$."),
                    ("d", "Phương trình có ít nhất một nghiệm thuộc khoảng $(1; 2)$.", True, "Vì $f(1)f(2) < 0$ và hàm liên tục.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm điểm gián đoạn của hàm số $y = \\frac{x + 1}{x - 5}$.", 5, "Mẫu bằng 0 tại $x = 5$."),
                make_sa(2, "TH", "Cho $f(x) = 3x^2 - 2x + 1$. Tính $\\lim_{x \\to 2} f(x)$.", 9, "$3(4) - 4 + 1 = 9$."),
                make_sa(3, "TH", "Tìm $m$ để hàm số $f(x) = \\begin{cases} 2x + m & \\text{khi } x \\ge 2 \\\\ 3x - 1 & \\text{khi } x < 2 \\end{cases}$ liên tục tại $x = 2$.", 1, "$4 + m = 5 \\Rightarrow m = 1$."),
                make_sa(4, "VD", "Phương trình $x^3 - 3x + 1 = 0$ có nghiệm trong khoảng $(0; 1)$ không? (Điền 1 nếu Có, 0 nếu Không)", 1, "$f(0)=1, f(1)=-1 \\Rightarrow 1$."),
                make_sa(5, "VD", "Tìm số điểm gián đoạn của hàm số $y = \\frac{1}{x^2 - 4}$.", 2, "$x = \\pm 2$ (2 điểm)."),
                make_sa(6, "VDC", "Tìm $a$ để hàm số $f(x) = \\begin{cases} \\frac{x^2 - a^2}{x - a} & (x \\ne a) \\\\ 6 & (x = a) \\end{cases}$ liên tục tại $x = a$.", 3, "$2a = 6 \\Rightarrow a = 3$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Xét tính liên tục của hàm số", "Xét tính liên tục của hàm số $f(x) = \\begin{cases} \\frac{x^2 - 9}{x - 3} & \\text{khi } x \\ne 3 \\\\ 6 & \\text{khi } x = 3 \\end{cases}$ tại điểm $x_0 = 3$.",
                           "TXĐ: $D = \\mathbb{R}$. Ta có $f(3) = 6$. Tính giới hạn: $\\lim_{x \\to 3} f(x) = \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3} = \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$. Vì $\\lim_{x \\to 3} f(x) = f(3) = 6$ nên hàm số $f(x)$ liên tục tại điểm $x_0 = 3$."),
                make_essay(2, "TH", 0.5, "Tìm tham số để hàm số liên tục", "Tìm tham số $m$ để hàm số $f(x) = \\begin{cases} \\frac{x^2 - 3x + 2}{x - 1} & \\text{khi } x \\ne 1 \\\\ m - 2 & \\text{khi } x = 1 \\end{cases}$ liên tục tại $x_0 = 1$.",
                           "Ta có: $f(1) = m - 2$. Tính giới hạn: $\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} \\frac{(x - 1)(x - 2)}{x - 1} = \\lim_{x \\to 1} (x - 2) = 1 - 2 = -1$. Hàm số liên tục tại $x_0 = 1 \\Leftrightarrow \\lim_{x \\to 1} f(x) = f(1) \\Leftrightarrow -1 = m - 2 \\Rightarrow m = 1$."),
                make_essay(3, "VD", 0.5, "Chứng minh phương trình có nghiệm", "Chứng minh rằng phương trình $x^4 - 3x^2 + x - 1 = 0$ có ít nhất hai nghiệm thực phân biệt trong khoảng $(-2; 2)$.",
                           "Đặt $f(x) = x^4 - 3x^2 + x - 1$. Hàm số là đa thức nên liên tục trên $\\mathbb{R}$ và liên tục trên từng đoạn $[-2; 0]$ và $[0; 2]$. Ta có: $f(-2) = 16 - 12 - 2 - 1 = 1 > 0$. $f(0) = -1 < 0$. $f(2) = 16 - 12 + 2 - 1 = 5 > 0$. Vì $f(-2) \\cdot f(0) = 1(-1) = -1 < 0$ nên phương trình có ít nhất 1 nghiệm $c_1 \\in (-2; 0)$. Vì $f(0) \\cdot f(2) = (-1)(5) = -5 < 0$ nên phương trình có ít nhất 1 nghiệm $c_2 \\in (0; 2)$. Vì hai khoảng $(-2; 0)$ và $(0; 2)$ rời nhau nên phương trình có ít nhất hai nghiệm phân biệt trong khoảng $(-2; 2)$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế nhiệt độ phòng", "Nhiệt độ $T$ ($^\\circ$C) trong một phòng điều hoà tự động được cài đặt: khi nhiệt độ môi trường ngoài $x \\le 25^\\circ$C thì máy tắt và nhiệt độ phòng giữ nguyên $T(x) = x$; khi nhiệt độ ngoài $x > 25^\\circ$C thì hệ thống làm lạnh hoạt động và duy trì $T(x) = 25 - 0.1(x - 25)$. Kiểm tra xem hàm nhiệt độ phòng $T(x)$ có liên tục tại ngưỡng chuyển đổi $x = 25^\\circ$C không và giải thích ý nghĩa tiện nghi của người dùng.",
                           "Xét tính liên tục tại $x_0 = 25$: Ta có $T(25) = 25$. Giới hạn trái: $\\lim_{x \\to 25^-} T(x) = \\lim_{x \\to 25^-} x = 25$. Giới hạn phải: $\\lim_{x \\to 25^+} T(x) = \\lim_{x \\to 25^+} [25 - 0.1(x - 25)] = 25 - 0 = 25$. Vì $\\lim_{x \\to 25^-} T(x) = \\lim_{x \\to 25^+} T(x) = T(25) = 25$, suy ra hàm số $T(x)$ liên tục tại $x = 25^\\circ$C. Ý nghĩa tiện nghi: Tính liên tục của hàm số đảm bảo quá trình chuyển đổi giữa trạng thái làm lạnh và trạng thái nghỉ diễn ra êm dịu, nhiệt độ phòng không bị thay đổi đột ngột (không bị 'sốc nhiệt'), đem lại cảm giác thoải mái cho người sử dụng trong phòng.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho hàm số $y = f(x)$ xác định trên $(a; b)$ chứa điểm $x_0$. Hàm số gián đoạn tại $x_0$ nếu",
                         "$\\lim_{x \\to x_0} f(x) \\ne f(x_0)$ hoặc không tồn tại giới hạn",
                         "$\\lim_{x \\to x_0} f(x) = f(x_0)$",
                         "$f(x_0) > 0$",
                         "$f(x_0) < 0$",
                         "A", "Hàm số gián đoạn tại $x_0$ nếu không thoả mãn điều kiện liên tục."),
                make_mcq(2, "NB", "Hàm số phân thức hữu tỉ liên tục trên",
                         "Từng khoảng xác định của nó",
                         "Toàn bộ $\\mathbb{R}$",
                         "Đoạn $[0; 1]$",
                         "Chỉ tại gốc toạ độ",
                         "A", "Hàm phân thức liên tục trên từng khoảng xác định của nó."),
                make_mcq(3, "NB", "Hàm số $y = \\sqrt{2x - 4}$ có tập xác định là",
                         "$[2; +\\infty)$", "$(2; +\\infty)$", "$(-\\infty; 2]$", "$\\mathbb{R}$",
                         "A", "Điều kiện $2x - 4 \\ge 0 \\Leftrightarrow x \\ge 2$."),
                make_mcq(4, "NB", "Đồ thị của một hàm số liên tục trên một khoảng là",
                         "Một đường liền nét trên khoảng đó",
                         "Một tập hợp các điểm rời rạc",
                         "Một đường đứt khúc",
                         "Chỉ là một điểm",
                         "A", "Ý nghĩa hình học của hàm liên tục: đồ thị là một đường liền nét."),
                make_mcq(5, "TH", "Tìm $m$ để hàm số $f(x) = \\begin{cases} 3x - 2 & (x \\ge 1) \\\\ 2x + m & (x < 1) \\end{cases}$ liên tục tại $x = 1$.",
                         "$m = -1$", "$m = 1$", "$m = 0$", "$m = 2$",
                         "A", "$f(1) = 3(1) - 2 = 1$. $\\lim_{x \\to 1^-} f(x) = 2(1) + m = 2 + m$. Để liên tục: $2 + m = 1 \\Rightarrow m = -1$."),
                make_mcq(6, "TH", "Hàm số $y = \\frac{2x - 1}{x^2 - 1}$ gián đoạn tại các điểm nào?",
                         "$x = 1$ và $x = -1$", "$x = 1$", "$x = -1$", "$x = 0.5$",
                         "A", "Mẫu số $x^2 - 1 = 0 \\Leftrightarrow x = \\pm 1$."),
                make_mcq(7, "TH", "Phương trình $x^3 + x - 1 = 0$ có nghiệm trong khoảng nào sau đây?",
                         "$(0; 1)$", "$(1; 2)$", "$(-1; 0)$", "$(2; 3)$",
                         "A", "$f(0) = -1 < 0$ và $f(1) = 1 > 0$, tích âm nên có nghiệm trong $(0; 1)$."),
                make_mcq(8, "TH", "Hàm số $y = \\sin x$ liên tục trên",
                         "$\\mathbb{R}$", "$[-1; 1]$", "$(-\\pi; \\pi)$", "$[0; 2\\pi]$",
                         "A", "Hàm sin xác định và liên tục trên toàn bộ $\\mathbb{R}$."),
                make_mcq(9, "VD", "Một bồn nước đang được xả với lưu lượng nước còn lại trong bồn là $V(t) = 100 - 5t$ (lít, $0 \\le t \\le 20$). Hàm số $V(t)$",
                         "Liên tục trên đoạn $[0; 20]$",
                         "Gián đoạn tại $t = 10$",
                         "Không có giới hạn tại $t = 0$",
                         "Là hàm hằng",
                         "A", "Hàm bậc nhất liên tục trên toàn miền xác định $[0; 20]$."),
                make_mcq(10, "VD", "Tìm $a$ để hàm số $f(x) = \\begin{cases} \\frac{x^2 - 16}{x - 4} & (x \\ne 4) \\\\ a & (x = 4) \\end{cases}$ liên tục tại $x = 4$.",
                         "$a = 8$", "$a = 4$", "$a = 16$", "$a = 0$",
                         "A", "$\\lim_{x \\to 4} (x + 4) = 8 \\Rightarrow a = 8$."),
                make_mcq(11, "VDC", "Phương trình $2x^3 - 6x + 1 = 0$ có bao nhiêu nghiệm thực trên khoảng $(-2; 2)$?",
                         "3 nghiệm", "1 nghiệm", "2 nghiệm", "0 nghiệm",
                         "A", "$f(-2) = -3 < 0; f(0) = 1 > 0; f(1) = -3 < 0; f(2) = 5 > 0$. Đổi dấu 3 lần nên có 3 nghiệm phân biệt."),
                make_mcq(12, "VDC", "Cho hàm số $f(x)$ liên tục trên đoạn $[0; 1]$ thoả mãn $f(0) = 1$ và $f(1) = 0$. Khẳng định nào sau đây chắc chắn đúng?",
                         "Tồn tại $c \\in (0; 1)$ sao cho $f(c) = c$",
                         "Hàm số nghịch biến trên $[0; 1]$",
                         "$f(x) > 0$ với mọi $x$",
                         "Phương trình $f(x) = 0$ vô nghiệm",
                         "A", "Xét hàm $g(x) = f(x) - x$. $g(0) = 1 - 0 = 1 > 0; g(1) = 0 - 1 = -1 < 0$. $g(0)g(1) < 0$ nên tồn tại $c$ để $g(c) = 0 \\Leftrightarrow f(c) = c$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = \\begin{cases} \\frac{x^2 - 4}{x + 2} & \\text{khi } x \\ne -2 \\\\ -4 & \\text{khi } x = -2 \\end{cases}$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R}$.", True, "Đúng."),
                    ("b", "Giới hạn $\\lim_{x \\to -2} f(x) = -4$.", True, "$\\lim (x - 2) = -2 - 2 = -4$."),
                    ("c", "Giá trị hàm số tại $-2$ là $f(-2) = -4$.", True, "Đúng."),
                    ("d", "Hàm số liên tục tại điểm $x = -2$.", True, "Giới hạn bằng giá trị hàm số.")
                ]),
                make_tf(2, "Xét phương trình $x^5 + x - 1 = 0$.", [
                    ("a", "Hàm số $f(x) = x^5 + x - 1$ liên tục trên $\\mathbb{R}$.", True, "Hàm đa thức."),
                    ("b", "Ta có $f(0) = -1 < 0$.", True, "Đúng."),
                    ("c", "Ta có $f(1) = 1 > 0$.", True, "Đúng."),
                    ("d", "Phương trình có ít nhất một nghiệm trong khoảng $(0; 1)$.", True, "Vì $f(0)f(1) < 0$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm điểm gián đoạn của hàm số $y = \\frac{2x}{x + 3}$.", -3, "Mẫu triệt tiêu tại $x = -3$."),
                make_sa(2, "TH", "Cho $f(x) = 2x^2 + 3$. Tính $\\lim_{x \\to 1} f(x)$.", 5, "$2 + 3 = 5$."),
                make_sa(3, "TH", "Tìm $m$ để hàm số $f(x) = \\begin{cases} x + m & (x \\ge 3) \\\\ 2x - 1 & (x < 3) \\end{cases}$ liên tục tại $x = 3$.", 2, "$3 + m = 5 \\Rightarrow m = 2$."),
                make_sa(4, "VD", "Phương trình $x^3 + 2x - 4 = 0$ có nghiệm trong khoảng $(1; 2)$ không? (Điền 1 nếu Có, 0 nếu Không)", 1, "$f(1)=-1, f(2)=8 \\Rightarrow 1$."),
                make_sa(5, "VD", "Tìm $a$ để hàm số $f(x) = \\begin{cases} \\frac{x^2 - 25}{x - 5} & (x \\ne 5) \\\\ a & (x = 5) \\end{cases}$ liên tục tại $x = 5$.", 10, "$5 + 5 = 10$."),
                make_sa(6, "VDC", "Tìm số nghiệm thực của phương trình $x^3 - 3x = 0$ trên đoạn $[-2; 2]$.", 3, "$x = 0, \\pm\\sqrt{3}$ (3 nghiệm).")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Xét tính liên tục tại một điểm", "Xét tính liên tục của hàm số $f(x) = \\begin{cases} \\frac{x^2 - 4x + 3}{x - 1} & \\text{khi } x \\ne 1 \\\\ -2 & \\text{khi } x = 1 \\end{cases}$ tại điểm $x_0 = 1$.",
                           "TXĐ: $D = \\mathbb{R}$. Ta có $f(1) = -2$. Giới hạn: $\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} \\frac{(x - 1)(x - 3)}{x - 1} = \\lim_{x \\to 1} (x - 3) = 1 - 3 = -2$. Do $\\lim_{x \\to 1} f(x) = f(1) = -2$, hàm số liên tục tại điểm $x_0 = 1$."),
                make_essay(2, "TH", 0.5, "Tìm tham số để hàm số liên tục", "Tìm tham số $a$ để hàm số $f(x) = \\begin{cases} ax + 1 & \\text{khi } x > 2 \\\\ x^2 - a & \\text{khi } x \\le 2 \\end{cases}$ liên tục tại điểm $x_0 = 2$.",
                           "Ta có: $f(2) = 2^2 - a = 4 - a$. Giới hạn trái: $\\lim_{x \\to 2^-} f(x) = 4 - a$. Giới hạn phải: $\\lim_{x \\to 2^+} f(x) = 2a + 1$. Hàm số liên tục tại $x = 2 \\Leftrightarrow 2a + 1 = 4 - a \\Leftrightarrow 3a = 3 \\Rightarrow a = 1$."),
                make_essay(3, "VD", 0.5, "Chứng minh phương trình có nghiệm", "Chứng minh rằng phương trình $x^3 + 3x^2 - 1 = 0$ có ít nhất ba nghiệm thực phân biệt.",
                           "Đặt $f(x) = x^3 + 3x^2 - 1$ là hàm đa thức liên tục trên $\\mathbb{R}$. Ta tính các giá trị: $f(-3) = -27 + 27 - 1 = -1 < 0$. $f(-2) = -8 + 12 - 1 = 3 > 0$. $f(0) = -1 < 0$. $f(1) = 1 + 3 - 1 = 3 > 0$. Ta có: (1) $f(-3)f(-2) = -3 < 0 \\Rightarrow$ có nghiệm $x_1 \\in (-3; -2)$. (2) $f(-2)f(0) = -3 < 0 \\Rightarrow$ có nghiệm $x_2 \\in (-2; 0)$. (3) $f(0)f(1) = -3 < 0 \\Rightarrow$ có nghiệm $x_3 \\in (0; 1)$. Vì ba khoảng đôi một rời nhau nên phương trình có ít nhất 3 nghiệm thực phân biệt."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong vật lý cân bằng", "Một chiếc bàn 4 chân được đặt trên một mặt sàn mấp mô gồ ghề. Giả thiết rằng mặt sàn là một mặt cong liên tục và 4 chân bàn là các đỉnh của một hình vuông có cùng chiều dài chân. Áp dụng định lý giá trị trung gian của hàm số liên tục, chứng minh rằng ta luôn có thể xoay chiếc bàn quanh tâm của nó một góc thích hợp để cả 4 chân bàn đều tiếp xúc đồng thời với mặt sàn (bàn không bị bập bênh).",
                           "Đặt góc xoay của bàn là $\\theta \\in [0; \\pi/2]$. Do mặt sàn là bề mặt liên tục, khoảng cách từ 4 chân bàn $A, B, C, D$ xuống mặt sàn là các hàm số liên tục theo góc xoay $\\theta$. Giả sử chân $A$ và $C$ luôn chạm đất, ta xét hàm chênh lệch độ cao tiếp xúc của cặp chân đối diện còn lại: $f(\\theta) = h_B(\\theta) - h_D(\\theta)$. Hàm $f(\\theta)$ là hàm số liên tục trên $[0; \\pi/2]$. Khi xoay bàn một góc $\\pi/2$, vị trí chân $B$ đổi chỗ cho chân $D$, do đó $f(\\pi/2) = h_D(0) - h_B(0) = -f(0)$. Nếu $f(0) = 0$ thì bàn đã tiếp xúc 4 chân ngay từ đầu. Nếu $f(0) \\ne 0$ thì $f(0) \\cdot f(\\pi/2) = -[f(0)]^2 < 0$. Theo định lý giá trị trung gian, luôn tồn tại góc xoay $\\theta_0 \\in (0; \\pi/2)$ sao cho $f(\\theta_0) = 0$, tức là $h_B(\\theta_0) = h_D(\\theta_0) = 0$. Khi đó cả 4 chân bàn đều chạm đất, bàn hoàn toàn cân bằng và không bị bập bênh.")
            ]
        return mcqs, tfs, sas, essays

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 5 Toán 11.")
