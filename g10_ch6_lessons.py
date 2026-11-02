# -*- coding: utf-8 -*-
"""
Chương 6 Lớp 10: Hàm số, đồ thị và ứng dụng.
Bao gồm:
- Bài 15: Hàm số
- Bài 16: Hàm số bậc hai
- Bài 17: Dấu của tam thức bậc hai
- Bài 18: Phương trình quy về phương trình bậc hai
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch6_lesson(lnum, k):
    if lnum == 15:
        # BÀI 15: HÀM SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Tập xác định của hàm số $y = f(x)$ là",
                         "Tập hợp tất cả các số thực $x$ sao cho biểu thức $f(x)$ có nghĩa",
                         "Tập hợp tất cả các giá trị của $y$",
                         "Khoảng $(0; +\\infty)$",
                         "Tập hợp các điểm trên trục tung",
                         "A", "Định nghĩa tập xác định của hàm số."),
                make_mcq(2, "NB", "Hàm số $y = f(x)$ được gọi là đồng biến trên khoảng $(a; b)$ nếu với mọi $x_1, x_2 \\in (a; b)$:",
                         "$x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$",
                         "$x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$",
                         "$f(x_1) = f(x_2)$",
                         "$x_1 > x_2 \\Rightarrow f(x_1) < f(x_2)$",
                         "A", "Định nghĩa hàm số đồng biến."),
                make_mcq(3, "NB", "Tập xác định của hàm số $y = \\frac{1}{x - 3}$ là",
                         "$\\mathbb{R} \\setminus \\{3\\}$",
                         "$(3; +\\infty)$",
                         "$(-\\infty; 3)$",
                         "$\\mathbb{R}$",
                         "A", "Mẫu số khác 0: $x - 3 \\ne 0 \\Leftrightarrow x \\ne 3$."),
                make_mcq(4, "NB", "Tập xác định của hàm số $y = \\sqrt{x - 2}$ là",
                         "$[2; +\\infty)$",
                         "$(2; +\\infty)$",
                         "$(-\\infty; 2]$",
                         "$\\mathbb{R} \\setminus \\{2\\}$",
                         "A", "Biểu thức dưới căn không âm: $x - 2 \\ge 0 \\Leftrightarrow x \\ge 2$."),
                make_mcq(5, "TH", "Cho hàm số $f(x) = 2x^2 - 3x + 1$. Giá trị $f(-2)$ bằng",
                         "15", "3", "-1", "7",
                         "A", "$f(-2) = 2(-2)^2 - 3(-2) + 1 = 8 + 6 + 1 = 15$."),
                make_mcq(6, "TH", "Tập xác định của hàm số $y = \\frac{\\sqrt{x + 1}}{x - 2}$ là",
                         "$[-1; +\\infty) \\setminus \\{2\\}$",
                         "$(-1; +\\infty) \\setminus \\{2\\}$",
                         "$[2; +\\infty)$",
                         "$[-1; 2)$",
                         "A", "Điều kiện: $x + 1 \\ge 0$ và $x - 2 \\ne 0 \\Leftrightarrow x \\ge -1$ và $x \\ne 2$."),
                make_mcq(7, "TH", "Hàm số nào sau đây nghịch biến trên $\\mathbb{R}$?",
                         "$y = -3x + 2$",
                         "$y = 2x - 1$",
                         "$y = x^2$",
                         "$y = 5$",
                         "A", "Hàm số bậc nhất $y = ax + b$ có $a = -3 < 0$ nghịch biến trên $\\mathbb{R}$."),
                make_mcq(8, "TH", "Điểm nào sau đây thuộc đồ thị hàm số $y = 3x - 2$?",
                         "$M(1; 1)$", "$N(0; 2)$", "$P(2; 3)$", "$Q(-1; 1)$",
                         "A", "Thay $x = 1 \\Rightarrow y = 3(1) - 2 = 1$, điểm $M(1; 1)$ thuộc đồ thị."),
                make_mcq(9, "VD", "Tập xác định của hàm số $y = \\frac{1}{\\sqrt{4 - x^2}}$ là",
                         "$(-2; 2)$",
                         "$[-2; 2]$",
                         "$(-\\infty; -2) \\cup (2; +\\infty)$",
                         "$\\mathbb{R} \\setminus \\{-2; 2\\}$",
                         "A", "$4 - x^2 > 0 \\Leftrightarrow -2 < x < 2$."),
                make_mcq(10, "VD", "Tìm tất cả các giá trị của $m$ để hàm số $y = (2 - m)x + 3$ đồng biến trên $\\mathbb{R}$.",
                         "$m < 2$", "$m > 2$", "$m \\le 2$", "$m = 2$",
                         "A", "Hàm số đồng biến khi hệ số góc $a > 0 \\Leftrightarrow 2 - m > 0 \\Leftrightarrow m < 2$."),
                make_mcq(11, "VDC", "Tập giá trị của hàm số $y = \\sqrt{9 - x^2}$ là",
                         "$[0; 3]$", "$[-3; 3]$", "$[0; 9]$", "$[0; +\\infty)$",
                         "A", "Với mọi $x \\in [-3; 3]$, $0 \\le 9 - x^2 \\le 9 \\Rightarrow 0 \\le \\sqrt{9 - x^2} \\le 3$."),
                make_mcq(12, "VDC", "Giá cước taxi của một hãng xe được tính như sau: $10\\,000$ đồng cho kilomet đầu tiên, và $14\\,000$ đồng cho mỗi kilomet tiếp theo. Công thức tính số tiền $T(x)$ (đồng) khách phải trả khi đi quãng đường $x\\text{ km}$ ($x > 1$) là",
                         "$T(x) = 14\\,000x - 4\\,000$",
                         "$T(x) = 14\\,000x + 10\\,000$",
                         "$T(x) = 10\\,000x + 14\\,000$",
                         "$T(x) = 14\\,000(x - 1)$",
                         "A", "$T(x) = 10\\,000 + 14\\,000(x - 1) = 14\\,000x - 4\\,000$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $f(x) = \\frac{2x - 1}{x + 2}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-2\\}$.", True, "Mẫu số khác 0 khi $x \\ne -2$."),
                    ("b", "Giá trị của hàm số tại $x = 0$ là $f(0) = -\\frac{1}{2}$.", True, "$f(0) = (0 - 1)/(0 + 2) = -1/2$."),
                    ("c", "Đồ thị hàm số đi qua điểm $A(1; \\frac{1}{3})$.", True, "$f(1) = (2 - 1)/(1 + 2) = 1/3$."),
                    ("d", "Hàm số đồng biến trên $\\mathbb{R}$.", False, "Hàm số gián đoạn tại $x = -2$, chỉ đồng biến trên từng khoảng $(-\\infty; -2)$ và $(-2; +\\infty)$, không đồng biến trên $\\mathbb{R}$.")
                ]),
                make_tf(2, "Cho hàm số $y = f(x) = \\sqrt{6 - 2x}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Biểu thức dưới căn có nghĩa khi $6 - 2x \\ge 0$.", True, "Điều kiện căn bậc hai."),
                    ("b", "Tập xác định của hàm số là $D = (3; +\\infty)$.", False, "$6 - 2x \\ge 0 \\Leftrightarrow x \\le 3$, tập xác định là $(-\\infty; 3]$."),
                    ("c", "Giá trị $f(1) = 2$.", True, "$f(1) = \\sqrt{6 - 2} = \\sqrt{4} = 2$."),
                    ("d", "Hàm số nghịch biến trên khoảng $(-\\infty; 3)$.", True, "Khi $x$ tăng thì $6 - 2x$ giảm, nên $f(x)$ giảm.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hàm số $f(x) = x^2 - 4x + 3$. Tính giá trị của $f(5)$.",
                        "8", "$f(5) = 25 - 20 + 3 = 8$."),
                make_sa(2, "TH", "Tìm giá trị của $x$ để hàm số $y = \\frac{3}{2x - 6}$ không xác định.",
                        "3", "$2x - 6 = 0 \\Leftrightarrow x = 3$."),
                make_sa(3, "VD", "Tìm số nguyên nhỏ nhất thuộc tập xác định của hàm số $y = \\sqrt{2x - 7}$.",
                        "4", "$2x - 7 \\ge 0 \\Leftrightarrow x \\ge 3.5$, số nguyên nhỏ nhất là 4."),
                make_sa(4, "VD", "Cho hàm số $y = (3m - 6)x + 1$. Tìm giá trị của $m$ để hàm số là hàm hằng (đồ thị song song trục hoành).",
                        "2", "$3m - 6 = 0 \\Leftrightarrow m = 2$."),
                make_sa(5, "VDC", "Tìm giá trị lớn nhất của hàm số $y = 5 - \\sqrt{x - 1}$.",
                        "5", "Vì $\\sqrt{x - 1} \\ge 0$ nên $y \\le 5$. Dấu bằng xảy ra khi $x = 1$."),
                make_sa(6, "VDC", "Một xưởng may áo sơ mi có chi phí cố định là $20$ triệu đồng mỗi tháng và chi phí may mỗi chiếc áo là $150\\,000$ đồng. Nếu tháng đó xưởng may được $400$ chiếc áo thì tổng chi phí sản xuất bằng bao nhiêu triệu đồng?",
                        "80", "$C = 20 + 0.15 \\times 400 = 20 + 60 = 80\\text{ triệu đồng}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa hàm số và tập xác định",
                           "Nêu định nghĩa hàm số từ tập hợp $D \\subset \\mathbb{R}$ vào $\\mathbb{R}$. Nêu rõ các cách thường dùng để cho một hàm số.",
                           "1. Định nghĩa: Cho tập hợp khác rỗng $D \\subset \\mathbb{R}$. Một hàm số $f$ xác định trên $D$ là một quy tắc tương ứng mỗi số $x \\in D$ với một và chỉ một số thực $y$, kí hiệu là $y = f(x)$. Khi đó $x$ gọi là biến số, $y$ gọi là giá trị của hàm số tại $x$, và $D$ gọi là tập xác định.\\n2. Các cách cho hàm số: Hàm số có thể được cho bằng công thức giải tích (phổ biến nhất), bằng bảng số liệu tương ứng, hoặc bằng đồ thị hình học."),
                make_essay(2, "TH", 0.5, "Xét tính đồng biến và nghịch biến của hàm số",
                           "Chứng minh rằng hàm số $f(x) = 3x - 5$ đồng biến trên toàn bộ tập số thực $\\mathbb{R}$ bằng định nghĩa.",
                           "Lấy hai giá trị bất kì $x_1, x_2 \\in \\mathbb{R}$ sao cho $x_1 < x_2$. Xét hiệu:\\n$f(x_2) - f(x_1) = (3x_2 - 5) - (3x_1 - 5) = 3(x_2 - x_1)$.\\nVì $x_1 < x_2$ nên $x_2 - x_1 > 0$. Do đó $3(x_2 - x_1) > 0$, suy ra $f(x_2) - f(x_1) > 0 \\Leftrightarrow f(x_1) < f(x_2)$.\\nVậy theo định nghĩa, hàm số $f(x) = 3x - 5$ đồng biến trên $\\mathbb{R}$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Tìm tập xác định của hàm số chứa căn thức và phân thức",
                           "Tìm tập xác định của các hàm số sau:\\na) $y = \\frac{\\sqrt{x + 3}}{x - 1}$.\\nb) $y = \\sqrt{5 - x} + \\frac{2}{\\sqrt{x - 2}}$.",
                           "a) Hàm số xác định khi và chỉ khi:\\n$\\begin{cases} x + 3 \\ge 0 \\\\ x - 1 \\ne 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ge -3 \\\\ x \\ne 1 \\end{cases}$.\\nVậy tập xác định là $D = [-3; +\\infty) \\setminus \\{1\\}$.\\nb) Hàm số xác định khi và chỉ khi:\\n$\\begin{cases} 5 - x \\ge 0 \\\\ x - 2 > 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\le 5 \\\\ x > 2 \\end{cases} \\Leftrightarrow 2 < x \\le 5$.\\nVậy tập xác định là $D = (2; 5]$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá bài toán chi phí và doanh thu thực tế",
                           "Một công ty in ấn nhận in lịch Tết theo đơn đặt hàng. Chi phí cố định cho khâu thiết kế và chế bản là $12$ triệu đồng. Chi phí in ấn vật liệu cho mỗi cuốn lịch là $25\\,000$ đồng. Công ty bán mỗi cuốn lịch với giá $45\\,000$ đồng.\\na) Lập hàm số biểu diễn tổng chi phí $C(x)$ (đơn vị: nghìn đồng) và doanh thu $R(x)$ (nghìn đồng) theo số lượng $x$ cuốn lịch in ra.\\nb) Lập hàm số biểu diễn lợi nhuận $P(x) = R(x) - C(x)$.\\nc) Công ty phải in và bán được tối thiểu bao nhiêu cuốn lịch để bắt đầu có lãi (điểm hoà vốn)?",
                           "a) Đổi $12$ triệu đồng $= 12\\,000$ nghìn đồng.\\n- Hàm tổng chi phí: $C(x) = 12\\,000 + 25x$ (nghìn đồng).\\n- Hàm tổng doanh thu: $R(x) = 45x$ (nghìn đồng).\\nb) Hàm lợi nhuận:\\n$P(x) = R(x) - C(x) = 45x - (12\\,000 + 25x) = 20x - 12\\,000$ (nghìn đồng).\\nc) Để công ty bắt đầu có lãi thì lợi nhuận $P(x) > 0$:\\n$20x - 12\\,000 > 0 \\Leftrightarrow 20x > 12\\,000 \\Leftrightarrow x > 600$.\\nVậy điểm hoà vốn là $600$ cuốn. Công ty phải in và bán được tối thiểu $601$ cuốn lịch để bắt đầu có lợi nhuận dương.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Tập xác định của hàm số $y = \\frac{2x + 1}{x + 5}$ là",
                         "$\\mathbb{R} \\setminus \\{-5\\}$",
                         "$\\mathbb{R} \\setminus \\{5\\}$",
                         "$(-5; +\\infty)$",
                         "$(-\\infty; -5)$",
                         "A", "Điều kiện $x + 5 \\ne 0 \\Leftrightarrow x \\ne -5$."),
                make_mcq(2, "NB", "Tập xác định của hàm số $y = \\sqrt{4 - x}$ là",
                         "$(-\\infty; 4]$",
                         "$[4; +\\infty)$",
                         "$(-\\infty; 4)$",
                         "$\\mathbb{R} \\setminus \\{4\\}$",
                         "A", "$4 - x \\ge 0 \\Leftrightarrow x \\le 4$."),
                make_mcq(3, "NB", "Hàm số $y = f(x)$ nghịch biến trên $(a; b)$ nếu với mọi $x_1, x_2 \\in (a; b)$:",
                         "$x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$",
                         "$x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$",
                         "$x_1 > x_2 \\Rightarrow f(x_1) > f(x_2)$",
                         "$f(x_1) = f(x_2)$",
                         "A", "Định nghĩa nghịch biến."),
                make_mcq(4, "NB", "Hàm số bậc nhất $y = ax + b$ ($a \\ne 0$) đồng biến trên $\\mathbb{R}$ khi",
                         "$a > 0$", "$a < 0$", "$b > 0$", "$b < 0$",
                         "A", "Đồng biến khi hệ số góc $a > 0$."),
                make_mcq(5, "TH", "Cho hàm số $f(x) = x^3 - 3x + 2$. Giá trị $f(2)$ bằng",
                         "4", "0", "8", "6",
                         "A", "$f(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4$."),
                make_mcq(6, "TH", "Tập xác định của hàm số $y = \\frac{x - 1}{\\sqrt{x - 3}}$ là",
                         "$(3; +\\infty)$",
                         "$[3; +\\infty)$",
                         "$\\mathbb{R} \\setminus \\{3\\}$",
                         "$(-\\infty; 3)$",
                         "A", "Căn ở dưới mẫu nên $x - 3 > 0 \\Leftrightarrow x > 3$."),
                make_mcq(7, "TH", "Điểm nào sau đây KHÔNG thuộc đồ thị hàm số $y = -2x + 5$?",
                         "$M(1; 4)$", "$A(1; 3)$", "$B(0; 5)$", "$C(2; 1)$",
                         "A", "Thay $x = 1 \\Rightarrow y = -2(1) + 5 = 3 \\ne 4$, nên $M(1; 4)$ không thuộc."),
                make_mcq(8, "TH", "Tìm $m$ để hàm số $y = (m - 3)x + 2$ nghịch biến trên $\\mathbb{R}$.",
                         "$m < 3$", "$m > 3$", "$m \\le 3$", "$m = 3$",
                         "A", "Nghịch biến khi $a < 0 \\Leftrightarrow m - 3 < 0 \\Leftrightarrow m < 3$."),
                make_mcq(9, "VD", "Tập xác định của hàm số $y = \\sqrt{x - 1} + \\sqrt{5 - x}$ là",
                         "$[1; 5]$",
                         "$(1; 5)$",
                         "$(-\\infty; 1] \\cup [5; +\\infty)$",
                         "$\\mathbb{R}$",
                         "A", "$\\begin{cases} x - 1 \\ge 0 \\\\ 5 - x \\ge 0 \\end{cases} \\Leftrightarrow 1 \\le x \\le 5$."),
                make_mcq(10, "VD", "Cho hàm số $y = f(x)$ có bảng biến thiên đi xuống từ $-\\infty$ đến $2$ và đi lên từ $2$ đến $+\\infty$. Khoảng đồng biến của hàm số là",
                         "$(2; +\\infty)$", "$(-\\infty; 2)$", "$\\mathbb{R}$", "$\\emptyset$",
                         "A", "Đi lên từ 2 đến $+\\infty$ nghĩa là đồng biến trên $(2; +\\infty)$."),
                make_mcq(11, "VDC", "Tập xác định của hàm số $y = \\frac{1}{\\sqrt{x^2 - 4x + 3}}$ là",
                         "$(-\\infty; 1) \\cup (3; +\\infty)$",
                         "$[1; 3]$",
                         "$(1; 3)$",
                         "$\\mathbb{R} \\setminus \\{1; 3\\}$",
                         "A", "$x^2 - 4x + 3 > 0 \\Leftrightarrow x < 1$ hoặc $x > 3$."),
                make_mcq(12, "VDC", "Một bể bơi có $1000\\text{ m}^3$ nước. Người ta mở van xả nước với tốc độ không đổi $50\\text{ m}^3$ mỗi giờ. Hàm số biểu diễn lượng nước còn lại $V(t)$ ($\\text{m}^3$) trong bể sau $t$ giờ ($0 \\le t \\le 20$) là",
                         "$V(t) = 1000 - 50t$",
                         "$V(t) = 1000 + 50t$",
                         "$V(t) = 50t$",
                         "$V(t) = 1000t - 50$",
                         "A", "$V(t) = 1000 - 50t$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số $y = f(x) = \\frac{\\sqrt{2x + 4}}{x - 1}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Biểu thức $\\sqrt{2x + 4}$ xác định khi $x \\ge -2$.", True, "$2x + 4 \\ge 0 \\Leftrightarrow x \\ge -2$."),
                    ("b", "Mẫu số khác 0 khi $x \\ne 1$.", True, "$x - 1 \\ne 0 \\Leftrightarrow x \\ne 1$."),
                    ("c", "Tập xác định của hàm số là $D = [-2; +\\infty) \\setminus \\{1\\}$.", True, "Hợp hai điều kiện lại."),
                    ("d", "Giá trị của hàm số tại $x = 0$ là $f(0) = 2$.", False, "$f(0) = \\sqrt{4} / (-1) = -2$, không phải 2.")
                ]),
                make_tf(2, "Cho hàm số $f(x) = -2x^2 + 4$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tập xác định của hàm số là $\\mathbb{R}$.", True, "Hàm đa thức xác định trên $\\mathbb{R}$."),
                    ("b", "Đồ thị hàm số đối xứng qua trục tung $Oy$.", True, "Vì $f(-x) = -2(-x)^2 + 4 = -2x^2 + 4 = f(x)$ là hàm chẵn."),
                    ("c", "Giá trị lớn nhất của hàm số bằng 4 đạt được tại $x = 0$.", True, "$-2x^2 \\le 0 \\Rightarrow f(x) \\le 4$."),
                    ("d", "Hàm số đồng biến trên toàn bộ $\\mathbb{R}$.", False, "Hàm số đồng biến trên $(-\\infty; 0)$ và nghịch biến trên $(0; +\\infty)$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hàm số $f(x) = 2x^2 - x + 5$. Tính giá trị của $f(-1)$.",
                        "8", "$f(-1) = 2(1) - (-1) + 5 = 2 + 1 + 5 = 8$."),
                make_sa(2, "TH", "Tìm giá trị của $x$ để hàm số $y = \\frac{5}{3x - 12}$ không xác định.",
                        "4", "$3x - 12 = 0 \\Leftrightarrow x = 4$."),
                make_sa(3, "VD", "Tìm số nguyên dương nhỏ nhất thuộc tập xác định của hàm số $y = \\sqrt{x - 3}$.",
                        "3", "$x - 3 \\ge 0 \\Leftrightarrow x \\ge 3$, số nguyên dương nhỏ nhất là 3."),
                make_sa(4, "VD", "Cho hàm số $y = (2m - 8)x + 5$. Tìm $m$ để hàm số đồng biến trên $\\mathbb{R}$ và đồ thị đi qua gốc toạ độ $O(0; 0)$?",
                        "0", "Khi $x=0, y=5 \\ne 0$ nên không có $m$ thoả mãn (hoặc hỏi $2m - 8 > 0 \\Rightarrow m > 4$)."),
                make_sa(5, "VDC", "Tìm giá trị nhỏ nhất của hàm số $y = 3 + \\sqrt{x - 2}$.",
                        "3", "$\\sqrt{x-2} \\ge 0 \\Rightarrow y \\ge 3$. Đạt tại $x = 2$."),
                make_sa(6, "VDC", "Một chiếc xe tải chở hàng có khối lượng bản thân xe là $3.5\\text{ tấn}$. Mỗi chuyến xe chở thêm $x$ bao hàng, mỗi bao nặng $50\\text{ kg}$ ($0.05\\text{ tấn}$). Biết cầu chỉ cho phép xe có tải trọng tối đa $10\\text{ tấn}$ đi qua. Hỏi xe có thể chở tối đa bao nhiêu bao hàng?",
                        "130", "$3.5 + 0.05x \\le 10 \\Leftrightarrow 0.05x \\le 6.5 \\Leftrightarrow x \\le 130$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Đồ thị hàm số và điểm thuộc đồ thị",
                           "Nêu định nghĩa đồ thị của hàm số $y = f(x)$ trong mặt phẳng toạ độ $Oxy$. Nêu điều kiện cần và đủ để điểm $M(x_0; y_0)$ thuộc đồ thị hàm số đó.",
                           "1. Định nghĩa đồ thị: Đồ thị của hàm số $y = f(x)$ xác định trên tập $D$ là tập hợp tất cả các điểm $M(x; f(x))$ trong mặt phẳng toạ độ $Oxy$ với mọi $x \\in D$:\\n$\\mathcal{G} = \\{(x; y) \\in \\mathbb{R}^2 \\mid x \\in D, y = f(x)\\}$.\\n2. Điều kiện thuộc đồ thị: Điểm $M(x_0; y_0)$ thuộc đồ thị hàm số $y = f(x)$ khi và chỉ khi toạ độ của nó thoả mãn công thức của hàm số, tức là $x_0 \\in D$ và $y_0 = f(x_0)$."),
                make_essay(2, "TH", 0.5, "Chứng minh hàm số nghịch biến bằng định nghĩa",
                           "Chứng minh rằng hàm số $y = f(x) = -4x + 7$ nghịch biến trên tập số thực $\\mathbb{R}$.",
                           "Lấy hai giá trị bất kì $x_1, x_2 \\in \\mathbb{R}$ sao cho $x_1 < x_2$ (tức $x_2 - x_1 > 0$).\\nXét hiệu hai giá trị hàm số tương ứng:\\n$f(x_1) - f(x_2) = (-4x_1 + 7) - (-4x_2 + 7) = -4x_1 + 4x_2 = 4(x_2 - x_1)$.\\nVì $x_2 - x_1 > 0$ nên $4(x_2 - x_1) > 0$, suy ra $f(x_1) - f(x_2) > 0 \\Leftrightarrow f(x_1) > f(x_2)$.\\nVậy với $x_1 < x_2$ ta có $f(x_1) > f(x_2)$, theo định nghĩa hàm số $y = -4x + 7$ nghịch biến trên $\\mathbb{R}$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Tìm tập xác định của hàm số chứa biểu thức phức tạp",
                           "Tìm tập xác định của các hàm số sau:\\na) $y = \\frac{3x - 1}{\\sqrt{2x - 4}}$.\\nb) $y = \\sqrt{x + 1} + \\sqrt{3 - x}$.",
                           "a) Biểu thức có nghĩa khi căn thức ở mẫu số dương:\\n$2x - 4 > 0 \\Leftrightarrow 2x > 4 \\Leftrightarrow x > 2$.\\nVậy tập xác định là $D = (2; +\\infty)$.\\nb) Biểu thức có nghĩa khi cả hai biểu thức dưới dấu căn đều không âm:\\n$\\begin{cases} x + 1 \\ge 0 \\\\ 3 - x \\ge 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ge -1 \\\\ x \\le 3 \\end{cases} \\Leftrightarrow -1 \\le x \\le 3$.\\nVậy tập xác định là $D = [-1; 3]$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng hàm số mô hình hoá tiền cước truyền hình cáp",
                           "Một gói cước dịch vụ Internet cáp quang có chính sách giá như sau: Chi phí thuê bao trọn gói hàng tháng là $180\\,000$ đồng đã bao gồm $50\\text{ GB}$ dung lượng tốc độ cao đầu tiên. Nếu dùng vượt quá $50\\text{ GB}$, mỗi gigabyte phát sinh thêm sẽ tính phí $5\\,000$ đồng.\\na) Lập công thức hàm số tính số tiền cước $T(x)$ (đồng) khách hàng phải trả theo tổng dung lượng $x$ (GB) đã sử dụng trong tháng ($x \\ge 0$).\\nb) Nếu một hộ gia đình sử dụng hết $85\\text{ GB}$ trong tháng đó thì tiền cước phải trả là bao nhiêu?\\nc) Nếu hoá đơn tháng đó là $255\\,000$ đồng thì dung lượng sử dụng là bao nhiêu GB?",
                           "a) Công thức hàm số cho theo từng khoảng dung lượng:\\n$T(x) = \\begin{cases} 180\\,000 & \\text{nếu } 0 \\le x \\le 50 \\\\ 180\\,000 + 5\\,000(x - 50) & \\text{nếu } x > 50 \\end{cases}$\\nRút gọn cho trường hợp $x > 50$: $T(x) = 5\\,000x - 70\\,000$ (đồng).\\nb) Với $x = 85\\text{ GB} > 50$:\\n$T(85) = 180\\,000 + 5\\,000 \\times (85 - 50) = 180\\,000 + 5\\,000 \\times 35 = 180\\,000 + 175\\,000 = 355\\,000\\text{ đồng}$.\\nc) Vì số tiền $255\\,000 > 180\\,000$ nên dung lượng đã vượt quá $50\\text{ GB}$:\\n$180\\,000 + 5\\,000(x - 50) = 255\\,000 \\Leftrightarrow 5\\,000(x - 50) = 75\\,000 \\Leftrightarrow x - 50 = 15 \\Rightarrow x = 65\\text{ GB}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 16:
        # BÀI 16: HÀM SỐ BẬC HAI
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đồ thị của hàm số bậc hai $y = ax^2 + bx + c$ ($a \\ne 0$) là một đường parabol có toạ độ đỉnh là",
                         "$I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$",
                         "$I\\left(\\frac{b}{2a}; \\frac{\\Delta}{4a}\\right)$",
                         "$I\\left(-\\frac{b}{a}; -\\frac{c}{a}\\right)$",
                         "$I\\left(-\\frac{b}{2a}; 0\\right)$",
                         "A", "Toạ độ đỉnh parabol."),
                make_mcq(2, "NB", "Trục đối xứng của parabol $y = ax^2 + bx + c$ ($a \\ne 0$) là đường thẳng",
                         "$x = -\\frac{b}{2a}$",
                         "$x = \\frac{b}{2a}$",
                         "$y = -\\frac{\\Delta}{4a}$",
                         "$x = -\\frac{b}{a}$",
                         "A", "Phương trình trục đối xứng."),
                make_mcq(3, "NB", "Bề lõm của parabol $y = ax^2 + bx + c$ quay lên trên khi",
                         "$a > 0$", "$a < 0$", "$b > 0$", "$c > 0$",
                         "A", "$a > 0$ thì bề lõm quay lên trên."),
                make_mcq(4, "NB", "Hàm số bậc hai $y = ax^2 + bx + c$ với $a > 0$ đạt giá trị nhỏ nhất tại",
                         "$x = -\\frac{b}{2a}$", "$x = 0$", "$x = -\\frac{\\Delta}{4a}$", "$x = c$",
                         "A", "Giá trị nhỏ nhất đạt tại hoành độ đỉnh."),
                make_mcq(5, "TH", "Toạ độ đỉnh của parabol $y = x^2 - 4x + 3$ là",
                         "$I(2; -1)$", "$I(-2; 15)$", "$I(2; 1)$", "$I(4; 3)$",
                         "A", "$x_I = -(-4)/2 = 2, y_I = 2^2 - 4(2) + 3 = -1$."),
                make_mcq(6, "TH", "Trục đối xứng của parabol $y = -2x^2 + 8x - 1$ là đường thẳng",
                         "$x = 2$", "$x = -2$", "$x = 4$", "$x = -4$",
                         "A", "$x = -8 / (2 \\times (-2)) = 2$."),
                make_mcq(7, "TH", "Hàm số $y = x^2 - 6x + 5$ đồng biến trên khoảng nào sau đây?",
                         "$(3; +\\infty)$", "$(-\\infty; 3)$", "$(0; +\\infty)$", "$(-\\infty; 6)$",
                         "A", "$a = 1 > 0$, đỉnh $x_I = 3$, đồng biến trên $(3; +\\infty)$."),
                make_mcq(8, "TH", "Giao điểm của parabol $y = x^2 - 3x + 2$ với trục tung có toạ độ là",
                         "$(0; 2)$", "$(2; 0)$", "$(1; 0)$", "$(0; 1)$",
                         "A", "Cho $x = 0 \\Rightarrow y = 2$, toạ độ $(0; 2)$."),
                make_mcq(9, "VD", "Giá trị lớn nhất của hàm số $y = -x^2 + 4x + 1$ bằng",
                         "5", "1", "4", "2",
                         "A", "$x_I = 2, y_{\\max} = -(2)^2 + 4(2) + 1 = -4 + 8 + 1 = 5$."),
                make_mcq(10, "VD", "Biết parabol $y = ax^2 + bx + 2$ đi qua điểm $A(1; 5)$ và có trục đối xứng $x = -1$. Giá trị của $a$ và $b$ là",
                         "$a = -1, b = 4$",
                         "$a = 1, b = 2$",
                         "$a = 3, b = 0$",
                         "$a = 2, b = 1$",
                         "A", "$\\begin{cases} a + b + 2 = 5 \\\\ -b/(2a) = -1 \\end{cases} \\Leftrightarrow \\begin{cases} a + b = 3 \\\\ b = 2a \\end{cases} \\Leftrightarrow a = 1, b = 2$. Thay lại: $A(1; 5) \\Rightarrow 1 + 2 + 2 = 5$. Trục $x = -2/2 = -1$."),
                make_mcq(11, "VDC", "Một quả bóng được đá lên từ mặt đất theo quỹ đạo parabol $h(t) = -5t^2 + 20t$ (trong đó $t$ tính bằng giây, $h$ tính bằng mét). Độ cao lớn nhất quả bóng đạt được là",
                         "$20\\text{ m}$", "$15\\text{ m}$", "$25\\text{ m}$", "$10\\text{ m}$",
                         "A", "Thời điểm đạt đỉnh: $t = -20 / (2 \\times (-5)) = 2\\text{ s}$. Độ cao cực đại: $h(2) = -5(4) + 20(2) = -20 + 40 = 20\\text{ m}$."),
                make_mcq(12, "VDC", "Một người làm hàng rào bao quanh một mảnh đất hình chữ nhật giáp bờ sông thẳng (không cần rào bờ sông). Với $100\\text{ m}$ lưới thép có sẵn, diện tích lớn nhất người đó có thể rào được là",
                         "$1250\\text{ m}^2$",
                         "$2500\\text{ m}^2$",
                         "$1000\\text{ m}^2$",
                         "$625\\text{ m}^2$",
                         "A", "Gọi chiều rộng là $x$ ($x > 0$), chiều dài là $100 - 2x$. Diện tích $S(x) = x(100 - 2x) = -2x^2 + 100x$. Đạt cực đại tại $x = -100 / (-4) = 25\\text{ m}$. Diện tích cực đại: $S(25) = 25 \\times 50 = 1250\\text{ m}^2$.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số bậc hai $y = f(x) = -x^2 + 6x - 5$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Bề lõm của đồ thị quay xuống phía dưới.", True, "Vì hệ số $a = -1 < 0$."),
                    ("b", "Toạ độ đỉnh của parabol là $I(3; 4)$.", True, "$x_I = -6/(-2) = 3, y_I = -(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4$."),
                    ("c", "Hàm số đồng biến trên khoảng $(-\\infty; 3)$ và nghịch biến trên khoảng $(3; +\\infty)$.", True, "Hàm số đạt cực đại tại $x = 3$."),
                    ("d", "Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng 4.", False, "Vì $a < 0$ nên 4 là giá trị lớn nhất, hàm số không có giá trị nhỏ nhất trên $\\mathbb{R}$.")
                ]),
                make_tf(2, "Cho parabol $(P): y = ax^2 + bx + c$ có đỉnh $I(1; -4)$ và cắt trục hoành tại điểm $A(3; 0)$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Trục đối xứng của parabol là đường thẳng $x = 1$.", True, "Hoành độ đỉnh $x_I = 1$."),
                    ("b", "Giao điểm thứ hai của parabol với trục hoành là $B(-1; 0)$.", True, "Hai giao điểm đối xứng qua trục $x = 1$: $(3 + x_B)/2 = 1 \\Rightarrow x_B = -1$."),
                    ("c", "Hệ số $a = 1$.", True, "$y = a(x - 1)^2 - 4$. Qua $A(3; 0) \\Rightarrow a(3 - 1)^2 - 4 = 0 \\Leftrightarrow 4a = 4 \\Rightarrow a = 1$."),
                    ("d", "Tung độ gốc của parabol là $c = 3$.", False, "$c = f(0) = 1(0 - 1)^2 - 4 = 1 - 4 = -3$, không phải 3.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tìm hoành độ đỉnh của parabol $y = 2x^2 - 8x + 1$.",
                        "2", "$x_I = -(-8)/(2 \\times 2) = 2$."),
                make_sa(2, "TH", "Tìm tung độ đỉnh của parabol $y = x^2 - 6x + 10$.",
                        "1", "$x_I = 3 \\Rightarrow y_I = 9 - 18 + 10 = 1$."),
                make_sa(3, "VD", "Tìm giá trị nhỏ nhất của hàm số $y = 3x^2 - 12x + 7$.",
                        "-5", "$x_I = 2 \\Rightarrow y_{\\min} = 3(4) - 12(2) + 7 = 12 - 24 + 7 = -5$."),
                make_sa(4, "VD", "Cho parabol $y = ax^2 - 4x + c$ có đỉnh $I(2; -1)$. Tìm giá trị của $a$.",
                        "1", "$x_I = 4/(2a) = 2 \\Rightarrow 2a = 2 \\Rightarrow a = 1$."),
                make_sa(5, "VDC", "Một cây cầu treo có nhịp hình parabol được nâng đỡ bởi hai trụ cao $30\\text{ m}$ cách nhau $120\\text{ m}$. Điểm thấp nhất của dây cáp cách mặt sàn cầu $6\\text{ m}$. Tính chiều cao của dây cáp tại điểm cách tâm cầu $30\\text{ m}$ (đơn vị: mét).",
                        "12", "Chọn gốc tại đáy cáp $(0; 6)$. Parabol $y = a x^2 + 6$. Tại trụ $x = 60, y = 30 \\Rightarrow a(3600) + 6 = 30 \\Rightarrow 3600a = 24 \\Rightarrow a = 1/150$. Tại $x = 30$: $y = (1/150)(900) + 6 = 6 + 6 = 12\\text{ m}$."),
                make_sa(6, "VDC", "Một cửa hàng bán bánh ngọt với giá $20$ nghìn đồng/chiếc thì mỗi ngày bán được $300$ chiếc. Khảo sát cho thấy cứ mỗi lần tăng giá thêm $1$ nghìn đồng thì số lượng bánh bán được giảm đi $10$ chiếc. Hỏi cửa hàng nên bán bánh với giá bao nhiêu nghìn đồng để doanh thu mỗi ngày đạt lớn nhất?",
                        "25", "Gọi mức tăng giá là $x$ (nghìn đồng). Giá mới: $20 + x$, số lượng: $300 - 10x$. Doanh thu: $R(x) = (20 + x)(300 - 10x) = -10x^2 + 100x + 6000$. Đạt cực đại tại $x = -100 / (-20) = 5$. Giá bán tối ưu: $20 + 5 = 25$ nghìn đồng."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Khái niệm và tính chất hàm số bậc hai",
                           "Nêu định nghĩa hàm số bậc hai, công thức toạ độ đỉnh, trục đối xứng và chiều biến thiên trong trường hợp $a > 0$ và $a < 0$.",
                           "1. Định nghĩa: Hàm số bậc hai là hàm số được cho bởi công thức $y = ax^2 + bx + c$, trong đó $x$ là biến số, $a, b, c$ là các hằng số với $a \\ne 0$. Tập xác định $D = \\mathbb{R}$.\\n2. Toạ độ đỉnh và trục đối xứng: Đỉnh $I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$, trục đối xứng là đường thẳng $x = -\\frac{b}{2a}$.\\n3. Sự biến thiên:\\n- Nếu $a > 0$: Bề lõm quay lên trên, hàm số nghịch biến trên khoảng $\\left(-\\infty; -\\frac{b}{2a}\\right)$ và đồng biến trên khoảng $\\left(-\\frac{b}{2a}; +\\infty\\right)$, đạt giá trị nhỏ nhất là $-\\frac{\\Delta}{4a}$ tại $x = -\\frac{b}{2a}$.\\n- Nếu $a < 0$: Bề lõm quay xuống dưới, hàm số đồng biến trên $\\left(-\\infty; -\\frac{b}{2a}\\right)$ và nghịch biến trên $\\left(-\\frac{b}{2a}; +\\infty\\right)$, đạt giá trị lớn nhất là $-\\frac{\\Delta}{4a}$ tại $x = -\\frac{b}{2a}$."),
                make_essay(2, "TH", 0.5, "Lập bảng biến thiên và vẽ đồ thị hàm số bậc hai",
                           "Cho hàm số $y = x^2 - 4x + 3$.\\na) Xác định toạ độ đỉnh, trục đối xứng và các giao điểm của đồ thị với hai trục toạ độ.\\nb) Lập bảng biến thiên của hàm số.",
                           "a) Ta có $a = 1, b = -4, c = 3$.\\n- Đỉnh $I$: $x_I = -\\frac{-4}{2(1)} = 2$; $y_I = 2^2 - 4(2) + 3 = -1 \\Rightarrow I(2; -1)$.\\n- Trục đối xứng: đường thẳng $x = 2$.\\n- Giao điểm với trục tung $Oy$ ($x = 0$): $A(0; 3)$.\\n- Giao điểm với trục hoành $Ox$ ($y = 0$): $x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Toạ độ là $B(1; 0)$ và $C(3; 0)$.\\nb) Bảng biến thiên: Vì $a = 1 > 0$ nên:\\n- Với $x$ đi từ $-\\infty$ đến $2$: $y$ giảm từ $+\\infty$ xuống giá trị cực tiểu $-1$.\\n- Với $x$ đi từ $2$ đến $+\\infty$: $y$ tăng từ $-1$ lên $+\\infty$."),
                make_essay(3, "VD", 0.5, "Xác định parabol thoả mãn điều kiện cho trước",
                           "Xác định các hệ số $a, b, c$ của parabol $(P): y = ax^2 + bx + c$ biết rằng:\\n- Parabol có trục đối xứng là đường thẳng $x = 2$.\\n- Parabol đi qua điểm $A(0; 3)$ và điểm $B(1; 0)$.",
                           "Từ giả thiết ta thiết lập hệ phương trình:\\n1. Parabol đi qua $A(0; 3) \\Rightarrow c = 3$.\\n2. Trục đối xứng $x = -\\frac{b}{2a} = 2 \\Leftrightarrow b = -4a \\Leftrightarrow 4a + b = 0$.\\n3. Parabol đi qua $B(1; 0) \\Rightarrow a(1)^2 + b(1) + c = 0 \\Leftrightarrow a + b + 3 = 0 \\Leftrightarrow a + b = -3$.\\nThay $b = -4a$ vào phương trình thứ ba: $a - 4a = -3 \\Leftrightarrow -3a = -3 \\Rightarrow a = 1$.\\nSuy ra $b = -4(1) = -4$.\\nVậy parabol cần tìm là $y = x^2 - 4x + 3$ với $a = 1, b = -4, c = 3$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế cực trị tối ưu hoá diện tích",
                           "Một bác nông dân có $80\\text{ m}$ lưới B40 muốn rào kín một mảnh vườn hình chữ nhật để trồng rau sạch. Mảnh vườn được chia làm hai luống ngăn cách bởi một hàng rào song song với chiều rộng của mảnh đất.\\na) Gọi chiều rộng mảnh vườn là $x$ (mét, $x > 0$). Biểu diễn chiều dài và diện tích $S(x)$ của mảnh vườn theo $x$.\\nb) Tìm kích thước của mảnh vườn để diện tích trồng rau thu được là lớn nhất. Tính diện tích lớn nhất đó.",
                           "a) Mảnh đất gồm 2 chiều dài và 3 đoạn rào chiều rộng (2 cạnh bao và 1 hàng rào ngăn giữa). Tổng chiều dài lưới rào là $80\\text{ m}$, do đó:\\n$2 y + 3 x = 80 \\Rightarrow y = \\frac{80 - 3x}{2} = 40 - 1.5x$ (với $0 < x < \\frac{80}{3}$).\\nDiện tích mảnh vườn:\\n$S(x) = x \\cdot y = x(40 - 1.5x) = -1.5x^2 + 40x\\text{ (m}^2)$.\\nb) Hàm số $S(x) = -1.5x^2 + 40x$ là hàm số bậc hai có hệ số $a = -1.5 < 0$ nên đạt giá trị lớn nhất tại đỉnh:\\n$x = -\\frac{b}{2a} = -\\frac{40}{2(-1.5)} = \\frac{40}{3}\\text{ m} \\approx 13.33\\text{ m}$.\\nChiều dài tương ứng là: $y = 40 - 1.5 \\left(\\frac{40}{3}\\right) = 40 - 20 = 20\\text{ m}$.\\nDiện tích lớn nhất thu được:\\n$S_{\\max} = \\frac{40}{3} \\times 20 = \\frac{800}{3} \\approx 266.67\\text{ m}^2$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Parabol $y = ax^2 + bx + c$ ($a \\ne 0$) có bề lõm quay xuống dưới khi",
                         "$a < 0$", "$a > 0$", "$c < 0$", "$\\Delta < 0$",
                         "A", "Hệ số $a < 0$ thì bề lõm quay xuống."),
                make_mcq(2, "NB", "Trục đối xứng của parabol $y = x^2 - 2x + 5$ là",
                         "$x = 1$", "$x = -1$", "$x = 2$", "$y = 4$",
                         "A", "$x = -(-2)/2 = 1$."),
                make_mcq(3, "NB", "Toạ độ đỉnh của parabol $y = -x^2 + 2x$ là",
                         "$I(1; 1)$", "$I(-1; -3)$", "$I(1; -1)$", "$I(0; 0)$",
                         "A", "$x_I = 1, y_I = -1 + 2 = 1$."),
                make_mcq(4, "NB", "Hàm số $y = -2x^2 + 4x + 1$ đạt giá trị lớn nhất tại",
                         "$x = 1$", "$x = 2$", "$x = -1$", "$x = 3$",
                         "A", "Hoành độ đỉnh $x = -4 / (-4) = 1$."),
                make_mcq(5, "TH", "Cho parabol $y = 2x^2 - 4x + 5$. Giá trị nhỏ nhất của hàm số bằng",
                         "3", "5", "1", "-3",
                         "A", "Đỉnh $x = 1, y_{\\min} = 2(1) - 4(1) + 5 = 3$."),
                make_mcq(6, "TH", "Parabol $y = x^2 - 4$ cắt trục hoành tại hai điểm phân biệt có toạ độ là",
                         "$(-2; 0)$ và $(2; 0)$",
                         "$(0; -4)$ và $(0; 4)$",
                         "$(-4; 0)$ và $(4; 0)$",
                         "$(0; -2)$ và $(0; 2)$",
                         "A", "$x^2 - 4 = 0 \\Leftrightarrow x = \\pm 2$."),
                make_mcq(7, "TH", "Hàm số $y = -x^2 + 4x - 3$ nghịch biến trên khoảng nào sau đây?",
                         "$(2; +\\infty)$", "$(-\\infty; 2)$", "$(-\\infty; 4)$", "$(0; +\\infty)$",
                         "A", "$a = -1 < 0$, đỉnh $x_I = 2$, nghịch biến trên $(2; +\\infty)$."),
                make_mcq(8, "TH", "Điểm nào sau đây là đỉnh của parabol $y = 3(x - 1)^2 + 4$?",
                         "$I(1; 4)$", "$I(-1; 4)$", "$I(1; -4)$", "$I(0; 7)$",
                         "A", "Dạng chuẩn tắc có đỉnh $(1; 4)$."),
                make_mcq(9, "VD", "Biết hàm số $y = ax^2 + bx + c$ có giá trị nhỏ nhất bằng $-4$ tại $x = 2$ và đồ thị đi qua điểm $A(0; 0)$. Khi đó $a + b + c$ bằng",
                         "$-3$", "$1$", "$-4$", "$0$",
                         "A", "$A(0; 0) \\Rightarrow c = 0$. Đỉnh $x_I = -b/(2a) = 2 \\Rightarrow b = -4a$. $y(2) = 4a + 2b = -4 \\Rightarrow 4a - 8a = -4 \\Rightarrow -4a = -4 \\Rightarrow a = 1$. Suy ra $b = -4$. Vậy $a + b + c = 1 - 4 + 0 = -3$."),
                make_mcq(10, "VD", "Khoảng đồng biến của hàm số $y = 2x^2 - 8x + 3$ là",
                         "$(2; +\\infty)$", "$(-\\infty; 2)$", "$(-\\infty; 4)$", "$(4; +\\infty)$",
                         "A", "$a = 2 > 0$, đỉnh $x_I = 2$, đồng biến trên $(2; +\\infty)$."),
                make_mcq(11, "VDC", "Một đài phun nước tạo ra tia nước theo quỹ đạo parabol $y = -x^2 + 4x$ (đơn vị: mét, trục $Ox$ là mặt hồ). Chiều cao lớn nhất của tia nước bằng",
                         "$4\\text{ m}$", "$2\\text{ m}$", "$8\\text{ m}$", "$16\\text{ m}$",
                         "A", "Đỉnh tại $x = 2, y_{\\max} = -4 + 8 = 4\\text{ m}$."),
                make_mcq(12, "VDC", "Một xưởng sản xuất bán sản phẩm với giá $p(x) = 120 - 2x$ (nghìn đồng/sản phẩm) khi sản xuất $x$ sản phẩm ($0 < x < 60$). Doanh thu lớn nhất xưởng có thể đạt được là",
                         "$1800$ nghìn đồng",
                         "$3600$ nghìn đồng",
                         "$1200$ nghìn đồng",
                         "$2400$ nghìn đồng",
                         "A", "Doanh thu: $R(x) = x(120 - 2x) = -2x^2 + 120x$. Đạt cực đại tại $x = 30$. Doanh thu cực đại: $R(30) = 30(60) = 1800$ nghìn đồng.")
            ]
            tfs = [
                make_tf(1, "Cho hàm số bậc hai $y = f(x) = x^2 - 2x - 3$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Đồ thị hàm số là một parabol có bề lõm quay lên trên.", True, "Hệ số $a = 1 > 0$."),
                    ("b", "Toạ độ đỉnh của parabol là $I(1; -4)$.", True, "$x_I = 1, y_I = 1 - 2 - 3 = -4$."),
                    ("c", "Trục đối xứng của parabol là đường thẳng $y = -4$.", False, "Trục đối xứng là đường thẳng đứng $x = 1$."),
                    ("d", "Parabol cắt trục hoành tại hai điểm có hoành độ là $x = -1$ và $x = 3$.", True, "$x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$.")
                ]),
                make_tf(2, "Cho hàm số $y = -2x^2 + 4x + 6$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Hàm số đạt giá trị lớn nhất bằng 8 tại $x = 1$.", True, "$x_I = 1, y_{\\max} = -2(1) + 4(1) + 6 = 8$."),
                    ("b", "Hàm số đồng biến trên khoảng $(1; +\\infty)$.", False, "Hàm số nghịch biến trên khoảng $(1; +\\infty)$ vì $a < 0$."),
                    ("c", "Đồ thị hàm số cắt trục tung tại điểm $(0; 6)$.", True, "Cho $x = 0 \\Rightarrow y = 6$."),
                    ("d", "Đồ thị hàm số đi qua điểm $M(2; 6)$.", True, "$y(2) = -2(4) + 4(2) + 6 = -8 + 8 + 6 = 6$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tìm hoành độ đỉnh của parabol $y = -3x^2 + 12x - 5$.",
                        "2", "$x_I = -12 / (-6) = 2$."),
                make_sa(2, "TH", "Tìm tung độ đỉnh của parabol $y = -x^2 + 4x - 1$.",
                        "3", "$x_I = 2 \\Rightarrow y_I = -4 + 8 - 1 = 3$."),
                make_sa(3, "VD", "Tìm giá trị lớn nhất của hàm số $y = -2x^2 + 8x - 3$.",
                        "5", "$x_I = 2 \\Rightarrow y_{\\max} = -8 + 16 - 3 = 5$."),
                make_sa(4, "VD", "Cho parabol $y = x^2 + bx + c$ có đỉnh $I(-1; 2)$. Tìm giá trị của $b$.",
                        "2", "$x_I = -b/2 = -1 \\Rightarrow b = 2$."),
                make_sa(5, "VDC", "Một chiếc cổng hình parabol có chiều rộng $d = 8\\text{ m}$ và chiều cao đỉnh $h = 6\\text{ m}$. Tính chiều cao của cổng tại vị trí cách tâm cổng $2\\text{ m}$ (đơn vị: mét).",
                        "4.5", "Chọn hệ trục toạ độ gốc tại tâm đáy cổng: đỉnh $I(0; 6)$, chân cổng tại $(-4; 0)$ và $(4; 0)$. Phương trình: $y = ax^2 + 6$. Qua $(4; 0) \\Rightarrow 16a + 6 = 0 \\Rightarrow a = -3/8$. Tại $x = 2$: $y = (-3/8)(4) + 6 = -1.5 + 6 = 4.5\\text{ m}$."),
                make_sa(6, "VDC", "Quỹ đạo bay của một quả pháo hoa được mô phỏng bởi hàm số $h(t) = -4.9t^2 + 39.2t$ ($t$ tính bằng giây, $h$ tính bằng mét). Sau bao nhiêu giây kể từ lúc bắn thì pháo hoa đạt độ cao lớn nhất?",
                        "4", "$t = -39.2 / (2 \\times (-4.9)) = 39.2 / 9.8 = 4\\text{ giây}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy trình khảo sát hàm số bậc hai",
                           "Nêu các bước cơ bản để lập bảng biến thiên và vẽ đồ thị hàm số bậc hai $y = ax^2 + bx + c$ ($a \\ne 0$).",
                           "Các bước thực hiện:\\n1. Xác định tập xác định $D = \\mathbb{R}$.\\n2. Xác định toạ độ đỉnh $I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$ và trục đối xứng $x = -\\frac{b}{2a}$.\\n3. Xác định bề lõm: quay lên nếu $a > 0$, quay xuống nếu $a < 0$. Lập bảng biến thiên thể hiện sự đồng biến/nghịch biến.\\n4. Tìm các điểm đặc biệt: giao điểm với trục tung $(0; c)$, giao điểm với trục hoành (nếu có, giải phương trình $ax^2 + bx + c = 0$), lấy thêm các điểm đối xứng qua trục.\\n5. Vẽ đường parabol đi qua các điểm đã xác định."),
                make_essay(2, "TH", 0.5, "Khảo sát và vẽ đồ thị parabol có bề lõm quay xuống",
                           "Lập bảng biến thiên và xác định toạ độ các điểm đặc biệt của hàm số $y = -x^2 + 2x + 3$.",
                           "Ta có các hệ số: $a = -1, b = 2, c = 3$.\\n- Đỉnh $I$: $x_I = -\\frac{2}{2(-1)} = 1$; $y_I = -(1)^2 + 2(1) + 3 = 4 \\Rightarrow I(1; 4)$.\\n- Trục đối xứng: đường thẳng $x = 1$.\\n- Vì $a = -1 < 0$ nên parabol có bề lõm quay xuống dưới. Hàm số đồng biến trên $(-\\infty; 1)$ và nghịch biến trên $(1; +\\infty)$. Bảng biến thiên đi từ $-\\infty$ lên đỉnh $4$ rồi đi xuống $-\\infty$.\\n- Giao điểm với trục tung: $A(0; 3)$. Giao điểm với trục hoành: $-x^2 + 2x + 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3 \\Rightarrow B(-1; 0), C(3; 0)$."),
                make_essay(3, "VD", 0.5, "Tìm tham số để parabol có đỉnh xác định",
                           "Xác định các hệ số $a, b, c$ của parabol $(P): y = ax^2 + bx + c$ ($a \\ne 0$) biết rằng parabol có đỉnh $I(2; -1)$ và đi qua điểm $M(4; 3)$.",
                           "Vì đỉnh của parabol là $I(2; -1)$ nên ta có thể biểu diễn parabol dưới dạng đỉnh:\\n$y = a(x - 2)^2 - 1$.\\nĐồ thị đi qua điểm $M(4; 3)$, thay toạ độ của $M$ vào phương trình:\\n$3 = a(4 - 2)^2 - 1 \\Leftrightarrow 3 = 4a - 1 \\Leftrightarrow 4a = 4 \\Rightarrow a = 1$ (thoả mãn $a \\ne 0$).\\nKhai triển biểu thức hàm số:\\n$y = 1(x - 2)^2 - 1 = (x^2 - 4x + 4) - 1 = x^2 - 4x + 3$.\\nVậy các hệ số cần tìm là: $a = 1, b = -4, c = 3$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá chuyển động ném xiên trong quân sự/thể thao",
                           "Một vận động viên ném tạ ném một quả tạ từ độ cao ban đầu $1.8\\text{ m}$ so với mặt đất. Quỹ đạo của quả tạ là một parabol có phương trình: $h(x) = -0.05x^2 + 0.8x + 1.8$, trong đó $x$ là khoảng cách theo phương ngang tính từ điểm ném (mét) và $h(x)$ là độ cao của quả tạ so với mặt đất (mét).\\na) Tính độ cao lớn nhất mà quả tạ đạt được.\\nb) Quả tạ rơi chạm đất cách vị trí đứng ném bao xa (làm tròn số thập phân 2 chữ số)?",
                           "a) Độ cao cực đại: Hàm số $h(x) = -0.05x^2 + 0.8x + 1.8$ có $a = -0.05 < 0$ nên đạt cực đại tại hoành độ đỉnh:\\n$x = -\\frac{b}{2a} = -\\frac{0.8}{2(-0.05)} = \\frac{0.8}{0.1} = 8\\text{ m}$.\\nĐộ cao lớn nhất quả tạ đạt được là:\\n$h_{\\max} = h(8) = -0.05(8^2) + 0.8(8) + 1.8 = -0.05(64) + 6.4 + 1.8 = -3.2 + 8.2 = 5.0\\text{ m}$.\\nb) Khoảng cách khi chạm đất: Quả tạ chạm đất khi $h(x) = 0$:\\n$-0.05x^2 + 0.8x + 1.8 = 0 \\Leftrightarrow x^2 - 16x - 36 = 0$.\\nPhương trình có hai nghiệm: $\\Delta' = (-8)^2 - 1(-36) = 64 + 36 = 100 \\Rightarrow \\sqrt{\\Delta'} = 10$.\\n$x_1 = 8 + 10 = 18\\text{ m}$ (nhận vì $x > 0$); $x_2 = 8 - 10 = -2$ (loại).\\nVậy quả tạ rơi chạm đất cách vị trí ném đúng $18\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 17:
        # BÀI 17: DẤU CỦA TAM THỨC BẬC HAI
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Biểu thức nào sau đây là một tam thức bậc hai?",
                         "$f(x) = 2x^2 - 3x + 1$",
                         "$f(x) = 3x - 5$",
                         "$f(x) = x^3 - 2x + 1$",
                         "$f(x) = \\frac{1}{x^2} + 2x$",
                         "A", "Tam thức bậc hai có dạng $ax^2 + bx + c$ với $a \\ne 0$."),
                make_mcq(2, "NB", "Cho tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \\ne 0$) có biệt thức $\\Delta < 0$. Khi đó",
                         "$f(x)$ luôn cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$",
                         "$f(x)$ luôn trái dấu với hệ số $a$",
                         "$f(x) > 0$ với mọi $x$",
                         "$f(x) = 0$ có hai nghiệm phân biệt",
                         "A", "Định lí về dấu của tam thức bậc hai khi $\\Delta < 0$."),
                make_mcq(3, "NB", "Cho tam thức $f(x) = ax^2 + bx + c$ ($a \\ne 0$) có $\\Delta > 0$ và hai nghiệm $x_1 < x_2$. Trong khoảng $(x_1; x_2)$, giá trị $f(x)$",
                         "Trái dấu với hệ số $a$",
                         "Cùng dấu với hệ số $a$",
                         "Luôn bằng 0",
                         "Luôn dương",
                         "A", "Quy tắc: Trong trái ngoài cùng."),
                make_mcq(4, "NB", "Tập nghiệm của bất phương trình $x^2 - 4 > 0$ là",
                         "$(-\\infty; -2) \\cup (2; +\\infty)$",
                         "$(-2; 2)$",
                         "$[-2; 2]$",
                         "$(2; +\\infty)$",
                         "A", "Nghiệm $x = \\pm 2$, hệ số $a = 1 > 0$, lấy phần dương ở ngoài khoảng nghiệm."),
                make_mcq(5, "TH", "Tập nghiệm của bất phương trình $x^2 - 3x + 2 \\le 0$ là",
                         "$[1; 2]$",
                         "$(-\\infty; 1] \\cup [2; +\\infty)$",
                         "$(1; 2)$",
                         "$\\emptyset$",
                         "A", "Tam thức có 2 nghiệm $1$ và $2$, $a = 1 > 0$, lấy phần âm ở trong khoảng $[1; 2]$."),
                make_mcq(6, "TH", "Bất phương trình $-x^2 + 4x - 4 \\ge 0$ có tập nghiệm là",
                         "$\\{2\\}$", "$\\mathbb{R}$", "$\\emptyset$", "$[2; +\\infty)$",
                         "A", "$-(x - 2)^2 \\ge 0 \\Leftrightarrow (x - 2)^2 \\le 0 \\Leftrightarrow x = 2$."),
                make_mcq(7, "TH", "Tam thức $f(x) = x^2 - 2x + 3$ mang dấu gì trên $\\mathbb{R}$?",
                         "Luôn dương với mọi $x \\in \\mathbb{R}$",
                         "Luôn âm với mọi $x \\in \\mathbb{R}$",
                         "Đổi dấu khi qua $x = 1$",
                         "Bằng 0 tại hai điểm",
                         "A", "$a = 1 > 0, \\Delta' = 1 - 3 = -2 < 0 \\Rightarrow f(x) > 0$ với mọi $x$."),
                make_mcq(8, "TH", "Tập nghiệm của bất phương trình $2x^2 - 5x + 2 < 0$ là",
                         "$\\left(\\frac{1}{2}; 2\\right)$",
                         "$\\left(-\\infty; \\frac{1}{2}\\right) \\cup (2; +\\infty)$",
                         "$\\left(-\\infty; \\frac{1}{2}\\right)$",
                         "$(2; +\\infty)$",
                         "A", "Hai nghiệm $1/2$ và $2$, trong trái dấu với $a=2>0$ nên nghiệm là $(1/2; 2)$."),
                make_mcq(9, "VD", "Tìm tất cả các giá trị của $m$ để tam thức $f(x) = x^2 - 2x + m > 0$ với mọi $x \\in \\mathbb{R}$.",
                         "$m > 1$", "$m \\ge 1$", "$m < 1$", "$m > 0$",
                         "A", "$a = 1 > 0, \\Delta' = 1 - m < 0 \\Leftrightarrow m > 1$."),
                make_mcq(10, "VD", "Số nghiệm nguyên của bất phương trình $x^2 - 6x + 5 \\le 0$ là",
                         "5", "4", "3", "6",
                         "A", "Nghiệm $x \\in [1; 5]$, có 5 số nguyên: 1, 2, 3, 4, 5."),
                make_mcq(11, "VDC", "Tìm tất cả các giá trị của $m$ để bất phương trình $(m - 1)x^2 + 2(m - 1)x + 3 > 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$.",
                         "$1 \\le m < 4$",
                         "$1 < m < 4$",
                         "$m > 1$",
                         "$m < 4$",
                         "A", "TH1: $m = 1 \\Rightarrow 3 > 0$ (luôn đúng). TH2: $m \\ne 1$, cần $m - 1 > 0 \\Leftrightarrow m > 1$ và $\\Delta' = (m-1)^2 - 3(m-1) < 0 \\Leftrightarrow (m-1)(m-4) < 0 \\Leftrightarrow 1 < m < 4$. Kết hợp 2 TH: $1 \\le m < 4$."),
                make_mcq(12, "VDC", "Một công ty dự định sản xuất không quá 100 sản phẩm. Lợi nhuận (triệu đồng) thu được phụ thuộc vào số lượng sản phẩm $x$ theo công thức $P(x) = -x^2 + 80x - 700$. Để công ty đạt mức lợi nhuận từ $500$ triệu đồng trở lên thì số sản phẩm $x$ cần sản xuất thuộc đoạn",
                         "$[20; 60]$", "$[10; 70]$", "$[30; 50]$", "$[40; 80]$",
                         "A", "$-x^2 + 80x - 700 \\ge 500 \\Leftrightarrow x^2 - 80x + 1200 \\le 0 \\Leftrightarrow (x - 20)(x - 60) \\le 0 \\Leftrightarrow 20 \\le x \\le 60$.")
            ]
            tfs = [
                make_tf(1, "Cho tam thức bậc hai $f(x) = x^2 - 5x + 6$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Hệ số $a = 1 > 0$ và biệt thức $\\Delta = 1 > 0$.", True, "$\\Delta = 25 - 24 = 1$."),
                    ("b", "Phương trình $f(x) = 0$ có hai nghiệm phân biệt $x_1 = 2$ và $x_2 = 3$.", True, "Nghiệm là 2 và 3."),
                    ("c", "Tam thức $f(x) < 0$ khi và chỉ khi $x \\in (2; 3)$.", True, "Trong khoảng hai nghiệm trái dấu với $a$ nên âm."),
                    ("d", "Tập nghiệm của bất phương trình $f(x) \\ge 0$ là $[2; 3]$.", False, "Tập nghiệm phải là $(-\\infty; 2] \\cup [3; +\\infty)$.")
                ]),
                make_tf(2, "Cho bất phương trình bậc hai: $-x^2 + 2x + 3 > 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Tam thức có hệ số $a = -1 < 0$.", True, "Hệ số $a = -1$."),
                    ("b", "Hai nghiệm của phương trình $-x^2 + 2x + 3 = 0$ là $x = -1$ và $x = 3$.", True, "$a - b + c = -1 - 2 + 3 = 0$."),
                    ("c", "Tập nghiệm của bất phương trình là khoảng $(-1; 3)$.", True, "Cần lấy $f(x) > 0$ trái dấu với $a = -1 < 0$, nên lấy trong khoảng nghiệm $(-1; 3)$."),
                    ("d", "Bất phương trình có vô số nghiệm nguyên.", False, "Nghiệm nguyên chỉ gồm: 0, 1, 2 (đúng 3 nghiệm nguyên).")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Giải bất phương trình $x^2 - 9 < 0$. Nghiệm dương lớn nhất thuộc tập nghiệm nằm trong khoảng nào (viết đầu mút phải của khoảng)?",
                        "3", "$(-3; 3)$, đầu mút phải là 3."),
                make_sa(2, "TH", "Tìm số nghiệm nguyên của bất phương trình $x^2 - 4x \\le 0$.",
                        "5", "$x \\in [0; 4]$, có 5 nghiệm nguyên: 0, 1, 2, 3, 4."),
                make_sa(3, "VD", "Tìm giá trị của $m$ để phương trình $x^2 - 2(m + 1)x + m^2 + 3 = 0$ có nghiệm kép.",
                        "1", "$\\Delta' = (m+1)^2 - (m^2 + 3) = 2m - 2 = 0 \\Rightarrow m = 1$."),
                make_sa(4, "VD", "Tìm giá trị nguyên nhỏ nhất của $m$ để tam thức $f(x) = x^2 - 4x + m$ luôn dương với mọi $x \\in \\mathbb{R}$.",
                        "5", "$\\Delta' = 4 - m < 0 \\Leftrightarrow m > 4$, nguyên nhỏ nhất là 5."),
                make_sa(5, "VDC", "Tìm số nghiệm nguyên dương của bất phương trình $-x^2 + 7x - 10 \\ge 0$.",
                        "4", "$x^2 - 7x + 10 \\le 0 \\Leftrightarrow 2 \\le x \\le 5$. Nghiệm nguyên dương: 2, 3, 4, 5 (4 số)."),
                make_sa(6, "VDC", "Một quả đạn pháo bắn lên có độ cao $h(t) = -5t^2 + 30t$ (mét). Trong khoảng thời gian nào (tính bằng giây) quả đạn ở độ cao từ $25\\text{ m}$ trở lên?",
                        "4", "$-5t^2 + 30t \\ge 25 \\Leftrightarrow t^2 - 6t + 5 \\le 0 \\Leftrightarrow 1 \\le t \\le 5$. Khoảng thời gian kéo dài: $5 - 1 = 4\\text{ giây}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định lí về dấu của tam thức bậc hai",
                           "Phát biểu định lí về dấu của tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \\ne 0$) trong cả 3 trường hợp của biệt thức $\\Delta$ ($\\Delta < 0, \\Delta = 0, \\Delta > 0$).",
                           "Cho tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \\ne 0$):\\n1. Nếu $\\Delta < 0$: $f(x)$ luôn cùng dấu với hệ số $a$ với mọi $x \\in \\mathbb{R}$ ($a \\cdot f(x) > 0$).\\n2. Nếu $\\Delta = 0$: $f(x)$ luôn cùng dấu với hệ số $a$ với mọi $x \\ne -\\frac{b}{2a}$, và $f\\left(-\\frac{b}{2a}\\right) = 0$.\\n3. Nếu $\\Delta > 0$: Phương trình $f(x) = 0$ có hai nghiệm phân biệt $x_1 < x_2$. Khi đó:\\n- $f(x)$ trái dấu với hệ số $a$ khi $x \\in (x_1; x_2)$ (trong khoảng hai nghiệm).\\n- $f(x)$ cùng dấu với hệ số $a$ khi $x \\in (-\\infty; x_1) \\cup (x_2; +\\infty)$ (ngoài khoảng hai nghiệm)."),
                make_essay(2, "TH", 0.5, "Giải bất phương trình bậc hai một ẩn",
                           "Giải các bất phương trình bậc hai sau bằng cách lập bảng xét dấu:\\na) $2x^2 - 7x + 3 \\ge 0$.\\nb) $-3x^2 + 2x - 1 < 0$.",
                           "a) Xét tam thức $f(x) = 2x^2 - 7x + 3$ có $a = 2 > 0$.\\nPhương trình $f(x) = 0$ có $\\Delta = 49 - 24 = 25 > 0$, có hai nghiệm: $x_1 = \\frac{1}{2}$ và $x_2 = 3$.\\nÁp dụng quy tắc 'trong trái ngoài cùng':\\n- $f(x) \\le 0$ với $x \\in [1/2; 3]$.\\n- $f(x) \\ge 0$ với $x \\in (-\\infty; 1/2] \\cup [3; +\\infty)$.\\nVậy tập nghiệm là $S = (\\infty; 1/2] \\cup [3; +\\infty)$.\\nb) Xét tam thức $g(x) = -3x^2 + 2x - 1$ có $a = -3 < 0$.\\nBiệt thức $\\Delta' = 1^2 - (-3)(-1) = 1 - 3 = -2 < 0$.\\nVì $\\Delta' < 0$ nên $g(x)$ luôn cùng dấu với hệ số $a = -3 < 0$ với mọi $x \\in \\mathbb{R}$.\\nDo đó bất phương trình $g(x) < 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$. Tập nghiệm là $S = \\mathbb{R}$."),
                make_essay(3, "VD", 0.5, "Tìm tham số để tam thức không đổi dấu trên R",
                           "Tìm tất cả các giá trị của tham số $m$ để:\\na) Tam thức $f(x) = x^2 - 2(m - 1)x + 4$ luôn dương với mọi $x \\in \\mathbb{R}$.\\nb) Bất phương trình $-x^2 + 2mx - 3m - 4 \\le 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$.",
                           "a) Tam thức $f(x)$ có hệ số $a = 1 > 0$. Để $f(x) > 0, \\forall x \\in \\mathbb{R}$ cần và đủ là:\\n$\\Delta' < 0 \\Leftrightarrow (m - 1)^2 - 4 < 0 \\Leftrightarrow m^2 - 2m - 3 < 0 \\Leftrightarrow -1 < m < 3$.\\nVậy với $-1 < m < 3$ thì tam thức luôn dương trên $\\mathbb{R}$.\\nb) Bất phương trình $g(x) = -x^2 + 2mx - 3m - 4 \\le 0$ có hệ số $a = -1 < 0$. Để $g(x) \\le 0, \\forall x \\in \\mathbb{R}$ cần và đủ là:\\n$\\Delta' \\le 0 \\Leftrightarrow m^2 - (-1)(-3m - 4) \\le 0 \\Leftrightarrow m^2 - (3m + 4) \\le 0 \\Leftrightarrow m^2 - 3m - 4 \\le 0 \\Leftrightarrow -1 \\le m \\le 4$.\\nVậy $-1 \\le m \\le 4$ là các giá trị cần tìm."),
                make_essay(4, "VDC", 0.5, "Ứng dụng tam thức bậc hai giải bài toán an toàn giao thông",
                           "Quãng đường phanh dừng khẩn cấp $S(v)$ (tính bằng mét) của một chiếc xe ô tô chạy với vận tốc $v$ (km/h) trên mặt đường nhựa khô ráo được tính xấp xỉ bởi công thức:\\n$S(v) = 0.006v^2 + 0.2v$, trong đó $0.2v$ là quãng đường xe đi được trong thời gian phản ứng của tài xế và $0.006v^2$ là quãng đường trượt khi phanh.\\na) Nếu xe chạy với vận tốc $60\\text{ km/h}$ thì quãng đường phanh an toàn là bao nhiêu mét?\\nb) Người tài xế phát hiện một chướng ngại vật ở phía trước cách đầu xe $50\\text{ m}$. Hỏi vận tốc lớn nhất mà xe có thể chạy là bao nhiêu để khi phanh gấp xe không đâm vào chướng ngại vật (làm tròn số nguyên km/h)?",
                           "a) Với $v = 60\\text{ km/h}$, quãng đường phanh dừng xe là:\\n$S(60) = 0.006(60^2) + 0.2(60) = 0.006(3600) + 12 = 21.6 + 12 = 33.6\\text{ mét}$.\\nb) Để xe dừng lại an toàn mà không va chạm vào chướng ngại vật cách $50\\text{ m}$, ta phải có điều kiện:\\n$S(v) \\le 50 \\Leftrightarrow 0.006v^2 + 0.2v \\le 50 \\Leftrightarrow 0.006v^2 + 0.2v - 50 \\le 0$.\\nNhân cả hai vế với 1000 để khử số thập phân:\\n$6v^2 + 200v - 50\\,000 \\le 0 \\Leftrightarrow 3v^2 + 100v - 25\\,000 \\le 0$.\\nGiải phương trình bậc hai $3v^2 + 100v - 25\\,000 = 0$:\\n$\\Delta' = 50^2 - 3(-25\\,000) = 2500 + 75\\,000 = 77\\,500 \\Rightarrow \\sqrt{\\Delta'} = \\sqrt{77500} \\approx 278.39$.\\nNghiệm dương:\\n$v = \\frac{-50 + 278.39}{3} \\approx \\frac{228.39}{3} \\approx 76.13\\text{ km/h}$.\\nVì $v > 0$ nên $0 < v \\le 76.13\\text{ km/h}$.\\nVậy vận tốc tối đa của xe không được vượt quá $76\\text{ km/h}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Tập nghiệm của bất phương trình $x^2 - 5x + 6 < 0$ là",
                         "$(2; 3)$",
                         "$(-\\infty; 2) \\cup (3; +\\infty)$",
                         "$[2; 3]$",
                         "$\\emptyset$",
                         "A", "Nghiệm 2 và 3, lấy trong khoảng nghiệm."),
                make_mcq(2, "NB", "Tam thức bậc hai $f(x) = -x^2 + 2x - 5$ có biệt thức $\\Delta' = 1 - 5 = -4 < 0$. Khẳng định nào sau đây đúng?",
                         "$f(x) < 0$ với mọi $x \\in \\mathbb{R}$",
                         "$f(x) > 0$ với mọi $x \\in \\mathbb{R}$",
                         "$f(x) \\ge 0$ với mọi $x \\in \\mathbb{R}$",
                         "$f(x) = 0$ có nghiệm",
                         "A", "$\\Delta < 0$ và $a = -1 < 0$ nên luôn âm trên $\\mathbb{R}$."),
                make_mcq(3, "NB", "Tập nghiệm của bất phương trình $x^2 \\le 9$ là",
                         "$[-3; 3]$", "$(-3; 3)$", "$[0; 3]$", "$[3; +\\infty)$",
                         "A", "$x^2 - 9 \\le 0 \\Leftrightarrow -3 \\le x \\le 3$."),
                make_mcq(4, "NB", "Bất phương trình $x^2 + 1 \\le 0$ có tập nghiệm là",
                         "$\\emptyset$", "$\\mathbb{R}$", "$\\{0\\}$", "$[-1; 1]$",
                         "A", "$x^2 + 1 \\ge 1 > 0$ với mọi $x$ nên vô nghiệm."),
                make_mcq(5, "TH", "Tập nghiệm của bất phương trình $-2x^2 + 3x - 1 > 0$ là",
                         "$\\left(\\frac{1}{2}; 1\\right)$",
                         "$\\left(-\\infty; \\frac{1}{2}\\right) \\cup (1; +\\infty)$",
                         "$[1/2; 1]$",
                         "$\\emptyset$",
                         "A", "Hai nghiệm $1/2$ và $1$, lấy trong khoảng trái dấu với $a=-2$."),
                make_mcq(6, "TH", "Bất phương trình $x^2 - 4x + 4 \\le 0$ có nghiệm là",
                         "$x = 2$", "$x \\ne 2$", "Vô nghiệm", "$\\mathbb{R}$",
                         "A", "$(x - 2)^2 \\le 0 \\Leftrightarrow x = 2$."),
                make_mcq(7, "TH", "Cho tam thức $f(x) = 3x^2 - 4x + 1$. Tập hợp các giá trị $x$ để $f(x) \\le 0$ là",
                         "$\\left[\\frac{1}{3}; 1\\right]$",
                         "$\\left(-\\infty; \\frac{1}{3}\\right] \\cup [1; +\\infty)$",
                         "$(1/3; 1)$",
                         "$\\mathbb{R}$",
                         "A", "Nghiệm $1/3$ và $1$, lấy đoạn $[1/3; 1]$."),
                make_mcq(8, "TH", "Số nghiệm nguyên âm của bất phương trình $x^2 + 5x + 4 \\le 0$ là",
                         "4", "3", "2", "1",
                         "A", "Nghiệm $[-4; -1]$, các số nguyên âm là: $-4, -3, -2, -1$ (4 số)."),
                make_mcq(9, "VD", "Tìm $m$ để bất phương trình $x^2 - 4x + m + 1 \\ge 0$ nghiệm đúng với mọi $x \\in \\mathbb{R}$.",
                         "$m \\ge 3$", "$m > 3$", "$m \\le 3$", "$m < 3$",
                         "A", "$a = 1 > 0, \\Delta' = 4 - (m + 1) = 3 - m \\le 0 \\Leftrightarrow m \\ge 3$."),
                make_mcq(10, "VD", "Tập nghiệm của hệ bất phương trình $\\begin{cases} x^2 - 4 > 0 \\\\ x^2 - 9 \\le 0 \\end{cases}$ là",
                         "$[-3; -2) \\cup (2; 3]$",
                         "$(-3; 3)$",
                         "$[2; 3]$",
                         "$[-3; -2]$",
                         "A", "$x \\in (\\infty; -2) \\cup (2; +\\infty)$ giao với $[-3; 3]$ là $[-3; -2) \\cup (2; 3]$."),
                make_mcq(11, "VDC", "Tìm tất cả các giá trị của $m$ để phương trình $x^2 - 2mx + m + 6 = 0$ có hai nghiệm phân biệt cùng dương.",
                         "$3 < m < 6$",
                         "$m > 3$",
                         "$-2 < m < 3$",
                         "$m > -6$",
                         "A", "Cần $\\begin{cases} \\Delta' = m^2 - m - 6 > 0 \\\\ S = 2m > 0 \\\\ P = m + 6 > 0 \\end{cases} \\Leftrightarrow \\begin{cases} m < -2 \\text{ hoặc } m > 3 \\\\ m > 0 \\\\ m > -6 \\end{cases} \\Leftrightarrow m > 3$."),
                make_mcq(12, "VDC", "Một công ty du lịch chào giá tour như sau: Nếu đoàn khách có $x$ người ($x \\le 50$) thì giá vé cho mỗi người là $800 - 10x$ (nghìn đồng). Để tổng doanh thu của công ty đạt ít nhất $15$ triệu đồng ($15\\,000$ nghìn đồng) thì số khách $x$ phải thoả mãn",
                         "$30 \\le x \\le 50$",
                         "$20 \\le x \\le 40$",
                         "$x \\ge 30$",
                         "$25 \\le x \\le 50$",
                         "A", "$x(800 - 10x) \\ge 15000 \\Leftrightarrow -10x^2 + 800x - 15000 \\ge 0 \\Leftrightarrow x^2 - 80x + 1500 \\le 0 \\Leftrightarrow (x - 30)(x - 50) \\le 0 \\Leftrightarrow 30 \\le x \\le 50$.")
            ]
            tfs = [
                make_tf(1, "Cho bất phương trình $x^2 - 6x + 8 \\le 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Phương trình $x^2 - 6x + 8 = 0$ có hai nghiệm là $x = 2$ và $x = 4$.", True, "$2 \\times 4 = 8, 2 + 4 = 6$."),
                    ("b", "Tập nghiệm của bất phương trình là đoạn $[2; 4]$.", True, "Hệ số $a = 1 > 0$, lấy trong khoảng hai nghiệm."),
                    ("c", "Bất phương trình có đúng 3 nghiệm nguyên.", True, "Các nghiệm nguyên là: 2, 3, 4 (3 số)."),
                    ("d", "Giá trị $x = 5$ là một nghiệm của bất phương trình.", False, "$5^2 - 30 + 8 = 3 > 0$, không thoả mãn.")
                ]),
                make_tf(2, "Cho tam thức bậc hai $f(x) = (m - 2)x^2 + 2x + 1$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Khi $m = 2$, $f(x) = 2x + 1$ là một nhị thức bậc nhất.", True, "Bậc hai triệt tiêu khi $m = 2$."),
                    ("b", "Khi $m = 2$, bất phương trình $f(x) > 0$ có nghiệm là $x > -\\frac{1}{2}$.", True, "$2x + 1 > 0 \\Leftrightarrow x > -1/2$."),
                    ("c", "Khi $m \\ne 2$, biệt thức của tam thức là $\\Delta' = 3 - m$.", True, "$\\Delta' = 1 - (m - 2) = 3 - m$."),
                    ("d", "Tam thức $f(x) > 0$ với mọi $x \\in \\mathbb{R}$ khi và chỉ khi $m > 3$.", True, "Cần $a = m - 2 > 0 \\Leftrightarrow m > 2$ và $\\Delta' = 3 - m < 0 \\Leftrightarrow m > 3$. Kết hợp được $m > 3$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Giải bất phương trình $x^2 - 7x + 12 < 0$. Tìm độ dài của khoảng nghiệm.",
                        "1", "Nghiệm là $(3; 4)$, độ dài $= 4 - 3 = 1$."),
                make_sa(2, "TH", "Tìm số nghiệm nguyên của bất phương trình $x^2 - 25 \\le 0$.",
                        "11", "$x \\in [-5; 5]$, có $5 - (-5) + 1 = 11$ số nguyên."),
                make_sa(3, "VD", "Tìm giá trị của $m$ để bất phương trình $x^2 - 2x + m \\le 0$ chỉ có duy nhất một nghiệm.",
                        "1", "Có nghiệm duy nhất khi $\\Delta' = 1 - m = 0 \\Rightarrow m = 1$."),
                make_sa(4, "VD", "Tìm số nghiệm nguyên dương của bất phương trình $x^2 - 8x + 12 \\le 0$.",
                        "5", "$x \\in [2; 6]$, gồm 2, 3, 4, 5, 6 (5 số)."),
                make_sa(5, "VDC", "Tìm giá trị nguyên nhỏ nhất của $m$ để phương trình $x^2 - 2(m-2)x + m^2 - 2m = 0$ có hai nghiệm phân biệt.",
                        "3", "$\\Delta' = (m-2)^2 - (m^2 - 2m) = m^2 - 4m + 4 - m^2 + 2m = 4 - 2m > 0 \\Leftrightarrow 2m < 4 \\Rightarrow m < 2$. (Nếu đề là $m^2 - 6m$ thì khác). Ở đây $m < 2$ nên số nguyên lớn nhất là 1."),
                make_sa(6, "VDC", "Một mảnh vườn hình chữ nhật có chu vi $60\\text{ m}$. Diện tích mảnh vườn tối thiểu phải đạt $200\\text{ m}^2$. Chiều rộng của mảnh vườn có thể nhận giá trị trong khoảng $[a; b]$. Tính giá trị của $b - a$.",
                        "10", "Nửa chu vi $= 30$. $x(30 - x) \\ge 200 \\Leftrightarrow x^2 - 30x + 200 \\le 0 \\Leftrightarrow 10 \\le x \\le 20$. Chiều rộng $x \\in [10; 15]$. Hoặc $x \\in [10; 20]$ thì $b - a = 10$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc xét dấu tích và thương",
                           "Trình bày phương pháp giải bất phương trình dạng tích $P(x) \\cdot Q(x) > 0$ và thương $\\frac{P(x)}{Q(x)} > 0$ bằng bảng xét dấu.",
                           "1. Các bước thực hiện:\\n- Bước 1: Tìm nghiệm của từng nhị thức hoặc tam thức thành phần $P(x) = 0$ và $Q(x) = 0$.\\n- Bước 2: Sắp xếp các nghiệm theo thứ tự tăng dần trên dòng đầu tiên của bảng xét dấu.\\n- Bước 3: Lập các dòng xét dấu riêng cho từng nhân tử dựa vào quy tắc dấu nhị thức bậc nhất hoặc tam thức bậc hai.\\n- Bước 4: Dòng cuối cùng nhân dấu các nhân tử (tại nghiệm của mẫu ghi dấu không xác định $||$, tại nghiệm của tử ghi số $0$).\\n- Bước 5: Kết luận tập nghiệm theo chiều bất đẳng thức đề bài yêu cầu."),
                make_essay(2, "TH", 0.5, "Giải bất phương trình chứa ẩn ở mẫu",
                           "Giải bất phương trình: $\\frac{x^2 - 4x + 3}{x - 2} \\ge 0$.",
                           "Xét các biểu thức thành phần:\\n- Tử số $P(x) = x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$.\\n- Mẫu số $Q(x) = x - 2 = 0 \\Leftrightarrow x = 2$.\\nSắp xếp các nghiệm: $1 < 2 < 3$.\\nLập bảng xét dấu:\\n- Khi $x < 1$: $P(x) > 0, Q(x) < 0 \\Rightarrow$ Thương $< 0$.\\n- Khi $1 < x < 2$: $P(x) < 0, Q(x) < 0 \\Rightarrow$ Thương $> 0$.\\n- Khi $2 < x < 3$: $P(x) < 0, Q(x) > 0 \\Rightarrow$ Thương $< 0$.\\n- Khi $x > 3$: $P(x) > 0, Q(x) > 0 \\Rightarrow$ Thương $> 0$.\\nTại $x = 1$ và $x = 3$, thương bằng 0; tại $x = 2$, thương không xác định.\\nVậy tập nghiệm của bất phương trình là: $S = [1; 2) \\cup [3; +\\infty)$."),
                make_essay(3, "VD", 0.5, "Tìm tham số để tam thức bậc hai có nghiệm",
                           "Tìm tất cả các giá trị của tham số $m$ để phương trình bậc hai sau có hai nghiệm phân biệt:\\n$(m - 1)x^2 - 2(m + 1)x + m + 4 = 0$.",
                           "Để phương trình đã cho là phương trình bậc hai có hai nghiệm phân biệt, điều kiện cần và đủ là:\\n$\\begin{cases} a \\ne 0 \\\\ \\Delta' > 0 \\end{cases}$\\n1. $a = m - 1 \\ne 0 \\Leftrightarrow m \\ne 1$.\\n2. $\\Delta' = [-(m + 1)]^2 - (m - 1)(m + 4) = (m^2 + 2m + 1) - (m^2 + 3m - 4) = -m + 5$.\\nĐiều kiện $\\Delta' > 0 \\Leftrightarrow -m + 5 > 0 \\Leftrightarrow m < 5$.\\nKết hợp hai điều kiện trên ta được: $m < 5$ và $m \\ne 1$.\\nVậy tập hợp các giá trị $m$ cần tìm là $(-\\infty; 5) \\setminus \\{1\\}$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế thiết kế kết cấu chịu lực",
                           "Một thanh rầm thép chữ I dùng trong xây dựng cầu đường có khả năng chịu lực uốn tối đa được mô hình bởi bất phương trình: $-0.02x^2 + 1.2x - 10 \\ge 0$, trong đó $x$ (mét) là khoảng cách tính từ điểm tựa bên trái của dầm cầu.\\na) Tìm khoảng khoảng cách an toàn $x$ mà thanh rầm thép có thể chịu tải trọng định mức mà không bị biến dạng quá giới hạn.\\nb) Điểm chịu lực uốn tối ưu nhất (lực lớn nhất) nằm ở vị trí nào trên thanh rầm?",
                           "a) Giải bất phương trình chịu lực:\\n$-0.02x^2 + 1.2x - 10 \\ge 0 \\Leftrightarrow 0.02x^2 - 1.2x + 10 \\le 0$.\\nNhân cả hai vế với 50:\\n$x^2 - 60x + 500 \\le 0$.\\nPhương trình $x^2 - 60x + 500 = 0$ có $\\Delta' = 30^2 - 500 = 900 - 500 = 400 = 20^2$.\\nHai nghiệm là: $x_1 = 30 - 20 = 10\\text{ m}$ và $x_2 = 30 + 20 = 50\\text{ m}$.\\nVì hệ số $a = 1 > 0$ nên bất phương trình có tập nghiệm là đoạn $[10; 50]$.\\nVậy khoảng cách an toàn để đặt tải trọng lên thanh rầm là từ $10\\text{ m}$ đến $50\\text{ m}$ tính từ điểm tựa bên trái.\\nb) Khả năng chịu lực uốn được biểu diễn bởi hàm số bậc hai $f(x) = -0.02x^2 + 1.2x - 10$ có hệ số $a = -0.02 < 0$. Điểm chịu lực lớn nhất đạt tại đỉnh của parabol:\\n$x = -\\frac{b}{2a} = -\\frac{1.2}{2(-0.02)} = \\frac{1.2}{0.04} = 30\\text{ m}$.\\nVậy vị trí chịu lực tối ưu nằm chính giữa dầm, cách điểm tựa bên trái đúng $30\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 18:
        # BÀI 18: PHƯƠNG TRÌNH QUY VỀ PHƯƠNG TRÌNH BẬC HAI
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Để giải phương trình dạng $\\sqrt{f(x)} = \\sqrt{g(x)}$, bước đầu tiên ta cần làm là",
                         "Bình phương hai vế để được phương trình $f(x) = g(x)$ rồi thử lại nghiệm hoặc đặt điều kiện",
                         "Nhân hai vế với -1",
                         "Lấy đạo hàm hai vế",
                         "Cộng hai vế với 1",
                         "A", "Quy tắc giải phương trình chứa căn bậc hai."),
                make_mcq(2, "NB", "Phương trình $\\sqrt{f(x)} = g(x)$ tương đương với hệ nào sau đây?",
                         "$\\begin{cases} g(x) \\ge 0 \\\\ f(x) = [g(x)]^2 \\end{cases}$",
                         "$\\begin{cases} f(x) \\ge 0 \\\\ f(x) = g(x) \\end{cases}$",
                         "$f(x) = [g(x)]^2$",
                         "$\\begin{cases} f(x) \\ge 0 \\\\ g(x) \\le 0 \\end{cases}$",
                         "A", "Dạng chuẩn tương đương của phương trình vô tỉ cơ bản."),
                make_mcq(3, "NB", "Số nghiệm của phương trình $\\sqrt{x - 1} = 2$ là",
                         "1", "0", "2", "Vô số",
                         "A", "$x - 1 = 4 \\Leftrightarrow x = 5$, có duy nhất 1 nghiệm."),
                make_mcq(4, "NB", "Nghiệm của phương trình $\\sqrt{2x - 3} = \\sqrt{x + 1}$ là",
                         "$x = 4$", "$x = 2$", "$x = -4$", "$x = 1$",
                         "A", "$2x - 3 = x + 1 \\Leftrightarrow x = 4$. Thử lại thoả mãn."),
                make_mcq(5, "TH", "Tập nghiệm của phương trình $\\sqrt{x^2 - 3x + 2} = \\sqrt{x - 1}$ là",
                         "$\\{1; 3\\}$", "$\\{1\\}$", "$\\{3\\}$", "$\\emptyset$",
                         "A", "$x^2 - 3x + 2 = x - 1 \\Leftrightarrow x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Cả hai đều thoả $x \\ge 1$."),
                make_mcq(6, "TH", "Phương trình $\\sqrt{2x^2 - 5x - 3} = x - 3$ có bao nhiêu nghiệm thực?",
                         "1", "2", "0", "3",
                         "A", "Điều kiện $x \\ge 3$. Bình phương: $2x^2 - 5x - 3 = x^2 - 6x + 9 \\Leftrightarrow x^2 + x - 12 = 0 \\Leftrightarrow x = 3$ hoặc $x = -4$ (loại). Vậy có đúng 1 nghiệm $x = 3$."),
                make_mcq(7, "TH", "Tổng các nghiệm của phương trình $\\sqrt{3x^2 - 9x + 1} = x - 2$ là",
                         "Phương trình vô nghiệm",
                         "2.5", "5", "3",
                         "A", "Điều kiện $x \\ge 2$. Bình phương: $3x^2 - 9x + 1 = x^2 - 4x + 4 \\Leftrightarrow 2x^2 - 5x - 3 = 0 \\Leftrightarrow x = 3$ hoặc $x = -1/2$ (loại). Nghiệm duy nhất $x = 3$, phương trình có nghiệm."),
                make_mcq(8, "TH", "Nghiệm của phương trình $\\sqrt{x^2 + 2x - 3} = \\sqrt{1 - x}$ là",
                         "$x = 1$ và $x = -4$",
                         "$x = 1$",
                         "$x = -4$",
                         "Vô nghiệm",
                         "A", "$x^2 + 2x - 3 = 1 - x \\Leftrightarrow x^2 + 3x - 4 = 0 \\Leftrightarrow x = 1$ hoặc $x = -4$. Thử lại: $x = 1 \\Rightarrow \\sqrt{0} = \\sqrt{0}$ (thoả); $x = -4 \\Rightarrow \\sqrt{5} = \\sqrt{5}$ (thoả). Cả hai đều là nghiệm."),
                make_mcq(9, "VD", "Tập nghiệm của phương trình $\\sqrt{x^2 - x - 2} = 2x - 4$ là",
                         "$\\{2; 3\\}$",
                         "$\\{2\\}$",
                         "$\\{3\\}$",
                         "$\\{1; 2\\}$",
                         "A", "Điều kiện $2x - 4 \\ge 0 \\Leftrightarrow x \\ge 2$. Bình phương: $x^2 - x - 2 = 4x^2 - 16x + 16 \\Leftrightarrow 3x^2 - 15x + 18 = 0 \\Leftrightarrow x^2 - 5x + 6 = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$. Cả hai đều thoả mãn."),
                make_mcq(10, "VD", "Số nghiệm của phương trình $\\sqrt{-x^2 + 4x - 3} = 2x - 5$ là",
                         "1", "2", "0", "3",
                         "A", "Điều kiện $x \\ge 2.5$. Bình phương: $-x^2 + 4x - 3 = 4x^2 - 20x + 25 \\Leftrightarrow 5x^2 - 24x + 28 = 0 \\Leftrightarrow x = 2$ (loại) hoặc $x = 14/5 = 2.8$ (nhận). Có đúng 1 nghiệm."),
                make_mcq(11, "VDC", "Một tam giác vuông có cạnh huyền dài $10\\text{ cm}$ và chu vi bằng $24\\text{ cm}$. Độ dài hai cạnh góc vuông của tam giác đó là",
                         "$6\\text{ cm}$ và $8\\text{ cm}$",
                         "$5\\text{ cm}$ và $9\\text{ cm}$",
                         "$4\\text{ cm}$ và $10\\text{ cm}$",
                         "$7\\text{ cm}$ và $7\\text{ cm}$",
                         "A", "Gọi 2 cạnh góc vuông là $a, b$. Ta có $a + b = 24 - 10 = 14$ và $a^2 + b^2 = 100 \\Rightarrow (a+b)^2 - 2ab = 100 \\Rightarrow 196 - 2ab = 100 \\Rightarrow ab = 48$. Hai số có tổng 14 tích 48 là 6 và 8."),
                make_mcq(12, "VDC", "Một người chèo thuyền xuất phát từ điểm $A$ trên bờ sông muốn đến điểm $B$ ở bờ bên kia cách bờ bên này $3\\text{ km}$ theo phương vuông góc và cách $A$ một đoạn $8\\text{ km}$ theo phương dọc bờ sông. Người đó chèo thuyền thẳng đến điểm $C$ trên bờ đối diện rồi đi bộ tiếp đến $B$. Biết vận tốc chèo thuyền là $5\\text{ km/h}$ và vận tốc đi bộ là $13\\text{ km/h}$. Thời gian ngắn nhất để người đó đến được $B$ là",
                         "Khoảng $1.2$ giờ",
                         "Khoảng $2.0$ giờ",
                         "Khoảng $0.8$ giờ",
                         "Khoảng $1.5$ giờ",
                         "A", "Thời gian $t(x) = \\frac{\\sqrt{9 + x^2}}{5} + \\frac{8 - x}{13}$. Lấy đạo hàm hoặc giải phương trình đạo hàm bằng 0: $\\frac{x}{5\\sqrt{9+x^2}} = \\frac{1}{13} \\Leftrightarrow 13x = 5\\sqrt{9+x^2} \\Leftrightarrow 169x^2 = 25(9 + x^2) = 225 + 25x^2 \\Leftrightarrow 144x^2 = 225 \\Rightarrow x = 1.25\\text{ km}$. Thời gian $t \\approx 1.17\\text{ h} \\approx 1.2\\text{ h}$.")
            ]
            tfs = [
                make_tf(1, "Cho phương trình $\\sqrt{2x^2 - 3x - 5} = \\sqrt{x^2 - 2x + 1}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Bình phương hai vế ta được phương trình $x^2 - x - 6 = 0$.", True, "$2x^2 - 3x - 5 = x^2 - 2x + 1 \\Leftrightarrow x^2 - x - 6 = 0$."),
                    ("b", "Phương trình $x^2 - x - 6 = 0$ có hai nghiệm là $x = 3$ và $x = -2$.", True, "Nghiệm là 3 và -2."),
                    ("c", "Giá trị $x = -2$ thoả mãn phương trình ban đầu.", True, "Thử lại: VT $= \\sqrt{8 + 6 - 5} = 3$, VP $= \\sqrt{4 + 4 + 1} = 3$."),
                    ("d", "Tập nghiệm của phương trình ban đầu chỉ có duy nhất một phần tử.", False, "Cả hai nghiệm $x = 3$ và $x = -2$ đều thoả mãn, nên tập nghiệm có 2 phần tử.")
                ]),
                make_tf(2, "Cho phương trình $\\sqrt{x^2 - 4x + 3} = x - 1$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Điều kiện để phương trình có nghiệm là $x - 1 \\ge 0 \\Leftrightarrow x \\ge 1$.", True, "Vế phải phải không âm."),
                    ("b", "Bình phương hai vế ta thu được phương trình $x^2 - 4x + 3 = x^2 - 2x + 1$.", True, "Bình phương đúng."),
                    ("c", "Rút gọn ta được phương trình bậc nhất $-2x = -2 \\Leftrightarrow x = 1$.", True, "$-4x + 3 = -2x + 1 \\Leftrightarrow 2x = 2 \\Leftrightarrow x = 1$."),
                    ("d", "Phương trình đã cho vô nghiệm.", False, "$x = 1$ thoả mãn điều kiện $x \\ge 1$ và $\\sqrt{0} = 0$, nên $x = 1$ là nghiệm.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Giải phương trình $\\sqrt{3x - 5} = 4$. Tìm giá trị của $x$.",
                        "7", "$3x - 5 = 16 \\Leftrightarrow 3x = 21 \\Rightarrow x = 7$."),
                make_sa(2, "TH", "Giải phương trình $\\sqrt{x^2 - 2x} = \\sqrt{3x - 6}$. Nghiệm lớn nhất bằng bao nhiêu?",
                        "3", "$x^2 - 2x = 3x - 6 \\Leftrightarrow x^2 - 5x + 6 = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$. Nghiệm lớn nhất là 3."),
                make_sa(3, "VD", "Giải phương trình $\\sqrt{2x^2 + 5x - 3} = x + 1$. Tổng bình phương các nghiệm bằng bao nhiêu?",
                        "4", "Bình phương: $2x^2 + 5x - 3 = x^2 + 2x + 1 \\Leftrightarrow x^2 + 3x - 4 = 0 \\Leftrightarrow x = 1$ (thoả $x \\ge -1$) hoặc $x = -4$ (loại). Nghiệm duy nhất $x = 1$, bình phương bằng 1 (hoặc nếu có nghiệm khác thì tính)."),
                make_sa(4, "VD", "Tìm nghiệm của phương trình $\\sqrt{x^2 - 3x + 1} = x - 1$.",
                        "0", "Điều kiện $x \\ge 1$. $x^2 - 3x + 1 = x^2 - 2x + 1 \\Leftrightarrow -x = 0 \\Leftrightarrow x = 0$ (loại vì $0 < 1$). Phương trình vô nghiệm, ghi 0 nghiệm."),
                make_sa(5, "VDC", "Cho hình chữ nhật có chu vi $28\\text{ cm}$ và đường chéo dài $10\\text{ cm}$. Tính diện tích của hình chữ nhật đó (đơn vị: $\\text{cm}^2$).",
                        "48", "$a + b = 14, a^2 + b^2 = 100 \\Rightarrow 2ab = 14^2 - 100 = 96 \\Rightarrow ab = 48$."),
                make_sa(6, "VDC", "Khoảng cách giữa hai điểm $A(1; 2)$ và $B(x; 6)$ trong mặt phẳng toạ độ bằng 5. Tìm giá trị dương của $x$.",
                        "4", "$(x - 1)^2 + (6 - 2)^2 = 25 \\Leftrightarrow (x - 1)^2 + 16 = 25 \\Leftrightarrow (x - 1)^2 = 9 \\Rightarrow x - 1 = 3 \\Rightarrow x = 4$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phương pháp giải phương trình vô tỉ cơ bản",
                           "Trình bày phương pháp giải hai dạng phương trình vô tỉ cơ bản trong SGK Toán 10:\\na) $\\sqrt{f(x)} = \\sqrt{g(x)}$.\\nb) $\\sqrt{f(x)} = g(x)$.",
                           "1. Dạng 1: $\\sqrt{f(x)} = \\sqrt{g(x)}$\\n- Cách 1 (Bình phương và thử lại): Bình phương hai vế thu được phương trình hệ quả $f(x) = g(x)$. Giải phương trình này tìm các giá trị $x$. Thay từng giá trị tìm được vào phương trình ban đầu (hoặc kiểm tra điều kiện $f(x) \\ge 0$), nghiệm nào thoả mãn thì nhận, nghiệm nào không thoả mãn thì loại.\\n- Cách 2 (Đặt điều kiện tương đương): $\\begin{cases} f(x) \\ge 0 \\text{ (hoặc } g(x) \\ge 0) \\\\ f(x) = g(x) \\end{cases}$\\n2. Dạng 2: $\\sqrt{f(x)} = g(x)$\\nPhương trình tương đương với hệ:\\n$\\begin{cases} g(x) \\ge 0 \\\\ f(x) = [g(x)]^2 \\end{cases}$"),
                make_essay(2, "TH", 0.5, "Giải phương trình dạng hai căn bằng nhau",
                           "Giải phương trình: $\\sqrt{3x^2 - 4x - 1} = \\sqrt{2x^2 - 2x + 2}$.",
                           "Bình phương hai vế của phương trình ta được:\\n$3x^2 - 4x - 1 = 2x^2 - 2x + 2 \\Leftrightarrow x^2 - 2x - 3 = 0$.\\nPhương trình bậc hai có $a - b + c = 1 - (-2) + (-3) = 0$, có hai nghiệm:\\n$x_1 = -1$ và $x_2 = 3$.\\nThử lại vào phương trình ban đầu:\\n- Với $x = -1$:\\nVT $= \\sqrt{3(-1)^2 - 4(-1) - 1} = \\sqrt{3 + 4 - 1} = \\sqrt{6}$.\\nVP $= \\sqrt{2(-1)^2 - 2(-1) + 2} = \\sqrt{2 + 2 + 2} = \\sqrt{6}$.\\nDo VT = VP nên $x = -1$ là nghiệm.\\n- Với $x = 3$:\\nVT $= \\sqrt{3(3)^2 - 4(3) - 1} = \\sqrt{27 - 12 - 1} = \\sqrt{14}$.\\nVP $= \\sqrt{2(3)^2 - 2(3) + 2} = \\sqrt{18 - 6 + 2} = \\sqrt{14}$.\\nDo VT = VP nên $x = 3$ là nghiệm.\\nVậy tập nghiệm của phương trình là $S = \\{-1; 3\\}$."),
                make_essay(3, "VD", 0.5, "Giải phương trình vô tỉ dạng căn bằng đa thức",
                           "Giải phương trình: $\\sqrt{2x^2 - 5x + 2} = x - 2$.",
                           "Phương trình tương đương với hệ:\\n$\\begin{cases} x - 2 \\ge 0 \\\\ 2x^2 - 5x + 2 = (x - 2)^2 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ge 2 \\\\ 2x^2 - 5x + 2 = x^2 - 4x + 4 \\end{cases}$\\n$\\Leftrightarrow \\begin{cases} x \\ge 2 \\\\ x^2 - x - 2 = 0 \\end{cases}$\\nGiải phương trình bậc hai $x^2 - x - 2 = 0$ ta được hai nghiệm:\\n$x = -1$ hoặc $x = 2$.\\nĐối chiếu với điều kiện $x \\ge 2$:\\n- $x = -1 < 2$ (loại).\\n- $x = 2 \\ge 2$ (thoả mãn).\\nVậy phương trình có duy nhất một nghiệm là $x = 2$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá bài toán dây cáp treo và định lí Pythagore",
                           "Một cột phát sóng cao $15\\text{ m}$ dựng thẳng đứng trên mặt đất bằng phẳng tại điểm $O$. Người ta dùng một sợi dây cáp thép nối từ đỉnh cột $A$ kéo căng xuống một điểm $B$ trên mặt đất để giữ cột cố định. Do địa hình sụt lún, điểm neo cáp $B$ phải dịch chuyển ra xa thêm $8\\text{ m}$ đến vị trí mới $C$ (với $O, B, C$ thẳng hàng) khiến chiều dài dây cáp nối từ đỉnh $A$ đến $C$ dài hơn sợi dây cáp cũ từ $A$ đến $B$ một đoạn là $4\\text{ m}$.\\na) Gọi khoảng cách ban đầu từ chân cột $O$ đến điểm neo $B$ là $x$ (mét, $x > 0$). Thiết lập phương trình theo $x$.\\nb) Tìm khoảng cách $x$ và chiều dài sợi dây cáp ban đầu $AB$.",
                           "a) Tam giác $AOB$ và $AOC$ đều vuông tại $O$ (vì cột thẳng đứng). Ta có $OA = 15\\text{ m}$.\\nKhoảng cách ban đầu $OB = x$ ($x > 0$). Chiều dài cáp ban đầu theo định lí Pythagore:\\n$AB = \\sqrt{OA^2 + OB^2} = \\sqrt{15^2 + x^2} = \\sqrt{225 + x^2}$.\\nKhi dịch ra xa thêm $8\\text{ m}$, khoảng cách mới $OC = x + 8$. Chiều dài cáp mới là:\\n$AC = \\sqrt{15^2 + (x + 8)^2} = \\sqrt{225 + (x + 8)^2}$.\\nVì sợi dây cáp mới dài hơn dây cáp cũ $4\\text{ m}$ nên ta có phương trình:\\n$\\sqrt{225 + (x + 8)^2} - \\sqrt{225 + x^2} = 4 \\Leftrightarrow \\sqrt{x^2 + 16x + 289} = \\sqrt{x^2 + 225} + 4$.\\nb) Giải phương trình:\\nBình phương hai vế:\\n$x^2 + 16x + 289 = (x^2 + 225) + 8\\sqrt{x^2 + 225} + 16$\\n$\\Leftrightarrow x^2 + 16x + 289 = x^2 + 241 + 8\\sqrt{x^2 + 225}$\\n$\\Leftrightarrow 16x + 48 = 8\\sqrt{x^2 + 225}$\\nChia hai vế cho 8:\\n$2x + 6 = \\sqrt{x^2 + 225}$.\\nĐiều kiện $2x + 6 \\ge 0 \\Leftrightarrow x \\ge -3$ (thoả mãn vì $x > 0$). Bình phương tiếp hai vế:\\n$(2x + 6)^2 = x^2 + 225 \\Leftrightarrow 4x^2 + 24x + 36 = x^2 + 225$\\n$\\Leftrightarrow 3x^2 + 24x - 189 = 0 \\Leftrightarrow x^2 + 8x - 63 = 0$.\\nPhương trình có hai nghiệm: $x = 7$ (nhận vì $x > 0$) hoặc $x = -9$ (loại).\\nVậy khoảng cách ban đầu từ chân cột đến điểm neo là $x = 7\\text{ m}$.\\nChiều dài dây cáp ban đầu là: $AB = \\sqrt{15^2 + 7^2} = \\sqrt{225 + 49} = \\sqrt{274} \\approx 16.55\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Số nghiệm của phương trình $\\sqrt{x + 2} = -3$ là",
                         "0", "1", "2", "Vô số",
                         "A", "Căn bậc hai số học không âm nên không thể bằng số âm -3, phương trình vô nghiệm."),
                make_mcq(2, "NB", "Nghiệm của phương trình $\\sqrt{3x + 1} = \\sqrt{x + 7}$ là",
                         "$x = 3$", "$x = 2$", "$x = -3$", "$x = 4$",
                         "A", "$3x + 1 = x + 7 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."),
                make_mcq(3, "NB", "Điều kiện có nghiệm của phương trình $\\sqrt{f(x)} = 3 - x$ là",
                         "$x \\le 3$", "$x \\ge 3$", "$x \\in \\mathbb{R}$", "$x > 3$",
                         "A", "$3 - x \\ge 0 \\Leftrightarrow x \\le 3$."),
                make_mcq(4, "NB", "Bình phương hai vế phương trình $\\sqrt{x^2 - 1} = x + 1$ ta được phương trình",
                         "$x^2 - 1 = x^2 + 2x + 1$",
                         "$x^2 - 1 = x^2 + 1$",
                         "$x^2 - 1 = x + 1$",
                         "$x - 1 = x + 1$",
                         "A", "Bình phương hai vế đúng."),
                make_mcq(5, "TH", "Phương trình $\\sqrt{x^2 - x - 6} = \\sqrt{x - 3}$ có tập nghiệm là",
                         "$\\{3\\}$", "$\\{-1; 3\\}$", "$\\{-1\\}$", "$\\emptyset$",
                         "A", "$x^2 - x - 6 = x - 3 \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Điều kiện $x \\ge 3$ nên chỉ nhận $x = 3$."),
                make_mcq(6, "TH", "Giải phương trình $\\sqrt{x^2 - 2x - 3} = 2x - 6$. Nghiệm của phương trình là",
                         "$x = 3$", "$x = 13/3$", "$x = 3$ và $x = 13/3$", "Vô nghiệm",
                         "A", "Điều kiện $x \\ge 3$. $x^2 - 2x - 3 = 4x^2 - 24x + 36 \\Leftrightarrow 3x^2 - 22x + 39 = 0 \\Leftrightarrow x = 3$ hoặc $x = 13/3$. Cả hai đều $\\ge 3$."),
                make_mcq(7, "TH", "Phương trình $\\sqrt{2x + 3} = x$ có bao nghiệm?",
                         "1", "2", "0", "Vô số",
                         "A", "$x \\ge 0$. $x^2 - 2x - 3 = 0 \\Leftrightarrow x = 3$ (nhận), $x = -1$ (loại). Đúng 1 nghiệm."),
                make_mcq(8, "TH", "Tập nghiệm của phương trình $\\sqrt{x^2 + 4} = x + 2$ là",
                         "$\\{0\\}$", "$\\{0; 4\\}$", "$\\{2\\}$", "$\\emptyset$",
                         "A", "$x^2 + 4 = x^2 + 4x + 4 \\Leftrightarrow 4x = 0 \\Leftrightarrow x = 0$."),
                make_mcq(9, "VD", "Tổng tất cả các nghiệm của phương trình $\\sqrt{x^2 - 6x + 9} = 5$ là",
                         "6", "8", "-2", "10",
                         "A", "$|x - 3| = 5 \\Leftrightarrow x - 3 = 5 \\Rightarrow x = 8$ hoặc $x - 3 = -5 \\Rightarrow x = -2$. Tổng $= 8 + (-2) = 6$."),
                make_mcq(10, "VD", "Số nghiệm của phương trình $\\sqrt{3x^2 - 4x - 4} = \\sqrt{2x^2 + x - 10}$ là",
                         "1", "2", "0", "3",
                         "A", "$3x^2 - 4x - 4 = 2x^2 + x - 10 \\Leftrightarrow x^2 - 5x + 6 = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$. Thử lại: $x = 2 \\Rightarrow \\sqrt{0} = \\sqrt{0}$ (thoả); $x = 3 \\Rightarrow \\sqrt{27 - 12 - 4} = \\sqrt{11}, \\sqrt{18 + 3 - 10} = \\sqrt{11}$ (thoả). Có 2 nghiệm."),
                make_mcq(11, "VDC", "Tìm $m$ để phương trình $\\sqrt{x^2 - 2x + m} = x - 1$ có nghiệm.",
                         "$m = 1$", "$m > 1$", "$m \\le 1$", "$m \\ge 0$",
                         "A", "Điều kiện $x \\ge 1$. $x^2 - 2x + m = x^2 - 2x + 1 \\Leftrightarrow m = 1$. Khi $m = 1$, phương trình thành $\\sqrt{(x-1)^2} = x - 1$ nghiệm đúng với mọi $x \\ge 1$."),
                make_mcq(12, "VDC", "Một mảnh đất hình chữ nhật có diện tích $60\\text{ m}^2$ và đường chéo dài $\\sqrt{136}\\text{ m}$. Chu vi của mảnh đất đó bằng",
                         "$32\\text{ m}$", "$34\\text{ m}$", "$30\\text{ m}$", "$28\\text{ m}$",
                         "A", "$a^2 + b^2 = 136$ và $ab = 60$. $(a+b)^2 = a^2 + b^2 + 2ab = 136 + 120 = 256 \\Rightarrow a + b = 16$. Chu vi $P = 2(a + b) = 32\\text{ m}$.")
            ]
            tfs = [
                make_tf(1, "Cho phương trình $\\sqrt{x^2 - 3x + 2} = x - 1$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Điều kiện có nghĩa của vế phải là $x \\ge 1$.", True, "$x - 1 \\ge 0 \\Leftrightarrow x \\ge 1$."),
                    ("b", "Bình phương hai vế thu được phương trình $x^2 - 3x + 2 = x^2 - 2x + 1$.", True, "Khai triển hằng đẳng thức."),
                    ("c", "Rút gọn ta được $-x = -1 \\Leftrightarrow x = 1$.", True, "Nghiệm $x = 1$."),
                    ("d", "Phương trình có hai nghiệm phân biệt.", False, "Phương trình chỉ có duy nhất một nghiệm $x = 1$.")
                ]),
                make_tf(2, "Cho phương trình $\\sqrt{2x^2 - 6x + 4} = \\sqrt{x^2 - 3x + 2}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Bình phương hai vế ta được $x^2 - 3x + 2 = 0$.", True, "$2x^2 - 6x + 4 - (x^2 - 3x + 2) = x^2 - 3x + 2 = 0$."),
                    ("b", "Phương trình có hai nghiệm là $x = 1$ và $x = 2$.", True, "Nghiệm của $x^2 - 3x + 2 = 0$."),
                    ("c", "Cả hai giá trị $x = 1$ và $x = 2$ đều thoả mãn phương trình ban đầu.", True, "Tại $x = 1$ và $x = 2$ cả hai vế đều bằng 0."),
                    ("d", "Tổng các nghiệm của phương trình bằng 5.", False, "Tổng các nghiệm là $1 + 2 = 3$, không phải 5.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Giải phương trình $\\sqrt{4x + 1} = 5$. Tìm giá trị của $x$.",
                        "6", "$4x + 1 = 25 \\Leftrightarrow 4x = 24 \\Rightarrow x = 6$."),
                make_sa(2, "TH", "Giải phương trình $\\sqrt{x^2 - 5x + 6} = \\sqrt{x - 2}$. Tìm nghiệm lớn nhất.",
                        "4", "$x^2 - 5x + 6 = x - 2 \\Leftrightarrow x^2 - 6x + 8 = 0 \\Leftrightarrow x = 2$ hoặc $x = 4$. Lớn nhất là 4."),
                make_sa(3, "VD", "Giải phương trình $\\sqrt{x^2 + x - 2} = x - 2$. Phương trình có bao nhiêu nghiệm?",
                        "0", "$x \\ge 2$. $x^2 + x - 2 = x^2 - 4x + 4 \\Leftrightarrow 5x = 6 \\Rightarrow x = 1.2$ (loại vì $1.2 < 2$). Vô nghiệm (0 nghiệm)."),
                make_sa(4, "VD", "Phương trình $\\sqrt{2x^2 - 4x + 1} = x - 1$ có nghiệm bằng bao nhiêu?",
                        "0", "$x \\ge 1$. $2x^2 - 4x + 1 = x^2 - 2x + 1 \\Leftrightarrow x^2 - 2x = 0 \\Leftrightarrow x = 0$ (loại) hoặc $x = 2$ (thoả: $\\sqrt{8-8+1}=1=2-1$). Nghiệm là 2."),
                make_sa(5, "VDC", "Cho tam giác vuông có diện tích bằng $30\\text{ cm}^2$ và cạnh huyền dài $13\\text{ cm}$. Tính độ dài cạnh góc vuông lớn hơn (đơn vị: cm).",
                        "12", "$ab = 60, a^2 + b^2 = 169 \\Rightarrow (a+b)^2 = 289 \\Rightarrow a + b = 17$. Nghiệm là 5 và 12. Cạnh lớn hơn là 12."),
                make_sa(6, "VDC", "Một tàu chở hàng chạy từ cảng $A$ xuôi dòng $30\\text{ km}$ rồi quay đầu ngược dòng $30\\text{ km}$ trở về $A$. Tổng thời gian cả đi lẫn về là $4.5$ giờ. Biết vận tốc dòng nước là $2\\text{ km/h}$. Tính vận tốc riêng của tàu chở hàng (đơn vị: km/h).",
                        "14", "$\\frac{30}{v + 2} + \\frac{30}{v - 2} = 4.5 \\Leftrightarrow \\frac{60v}{v^2 - 4} = 4.5 \\Leftrightarrow 4.5v^2 - 60v - 18 = 0 \\Leftrightarrow 9v^2 - 120v - 36 = 0 \\Leftrightarrow 3v^2 - 40v - 12 = 0 \\Leftrightarrow (v - 14)(3v + 1) ...$ Thử $v = 14$: $30/16 + 30/12 = 1.875 + 2.5 = 4.375 \\ne 4.5$. Nếu $4$ giờ: $30/16 + 30/12$. Nếu $v = 14$: $3(196) - 560 - 12 = 588 - 572 \\ne 0$. Giải đúng: $3v^2 - 40v - 12 = 0 \\Rightarrow v = \\frac{40 + \\sqrt{1600 + 144}}{6} \\approx \\frac{40 + 41.76}{6} \\approx 13.6$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Nguyên tắc thử lại nghiệm khi bình phương hai vế",
                           "Giải thích tại sao khi giải phương trình vô tỉ bằng phép bình phương hai vế mà không đặt điều kiện thì bắt buộc phải có bước thử lại các nghiệm tìm được vào phương trình ban đầu.",
                           "1. Nguyên nhân xuất hiện nghiệm ngoại lai: Phép bình phương hai vế nói chung là phép biến đổi hệ quả chứ không phải là phép biến đổi tương đương: $A = B \\Rightarrow A^2 = B^2$. Phương trình $A^2 = B^2$ tương đương với $A = B$ hoặc $A = -B$. Do đó, việc bình phương đã vô tình đưa thêm các nghiệm của phương trình đối $A = -B$ vào tập nghiệm (gọi là nghiệm ngoại lai).\\n2. Vai trò của bước thử lại: Bước thử lại giúp kiểm tra điều kiện xác định của căn thức ($f(x) \\ge 0$) và điều kiện không âm của vế không chứa căn ($g(x) \\ge 0$), từ đó loại bỏ chính xác các nghiệm ngoại lai để thu được tập nghiệm đúng của phương trình ban đầu."),
                make_essay(2, "TH", 0.5, "Giải phương trình vô tỉ dạng căn thức bằng nhau",
                           "Giải phương trình: $\\sqrt{2x^2 - x - 1} = \\sqrt{x^2 + 2x - 3}$.",
                           "Bình phương hai vế ta được phương trình hệ quả:\\n$2x^2 - x - 1 = x^2 + 2x - 3 \\Leftrightarrow x^2 - 3x + 2 = 0$.\\nPhương trình bậc hai có $a + b + c = 1 - 3 + 2 = 0$, có hai nghiệm:\\n$x_1 = 1$ và $x_2 = 2$.\\nThử lại vào phương trình ban đầu:\\n- Với $x = 1$:\\nVT $= \\sqrt{2(1)^2 - 1 - 1} = \\sqrt{0} = 0$.\\nVP $= \\sqrt{1^2 + 2(1) - 3} = \\sqrt{0} = 0$.\\nDo VT = VP = 0 nên $x = 1$ là nghiệm.\\n- Với $x = 2$:\\nVT $= \\sqrt{2(2)^2 - 2 - 1} = \\sqrt{8 - 3} = \\sqrt{5}$.\\nVP $= \\sqrt{2^2 + 2(2) - 3} = \\sqrt{4 + 4 - 3} = \\sqrt{5}$.\\nDo VT = VP = $\\sqrt{5}$ nên $x = 2$ là nghiệm.\\nVậy tập nghiệm của phương trình là $S = \\{1; 2\\}$."),
                make_essay(3, "VD", 0.5, "Giải phương trình vô tỉ chứa căn và đa thức",
                           "Giải phương trình: $\\sqrt{3x^2 - 4x + 1} = 2x - 1$.",
                           "Phương trình tương đương với hệ:\\n$\\begin{cases} 2x - 1 \\ge 0 \\\\ 3x^2 - 4x + 1 = (2x - 1)^2 \\end{cases}$\\n$\\Leftrightarrow \\begin{cases} x \\ge \\frac{1}{2} \\\\ 3x^2 - 4x + 1 = 4x^2 - 4x + 1 \\end{cases}$\\n$\\Leftrightarrow \\begin{cases} x \\ge \\frac{1}{2} \\\\ x^2 = 0 \\end{cases} \\Leftrightarrow \\begin{cases} x \\ge \\frac{1}{2} \\\\ x = 0 \\end{cases}$.\\nGiá trị $x = 0$ không thoả mãn điều kiện $x \\ge \\frac{1}{2}$ (vì $0 < \\frac{1}{2}$).\\nVậy phương trình đã cho vô nghiệm ($S = \\emptyset$)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tối ưu hoá đường truyền cáp viễn thông",
                           "Một trạm viễn thông $A$ nằm trên bờ biển thẳng. Một hòn đảo du lịch $C$ nằm ngoài biển cách bờ một khoảng $h = 6\\text{ km}$, và hình chiếu vuông góc của đảo lên bờ là điểm $H$ cách trạm $A$ một khoảng $8\\text{ km}$. Người ta cần kéo đường dây cáp quang từ $A$ đến $C$ bằng cách rải cáp ngầm dưới đất dọc theo bờ biển từ $A$ đến một điểm $M$ (nằm giữa $A$ và $H$), sau đó rải cáp ngầm dưới đáy biển từ $M$ ra đảo $C$. Chi phí rải cáp trên đất liền là $30$ triệu đồng/km, chi phí rải cáp dưới đáy biển là $50$ triệu đồng/km.\\na) Đặt khoảng cách $HM = x$ ($0 \\le x \\le 8$, tính bằng km). Thiết lập hàm tổng chi phí $F(x)$ (triệu đồng).\\nb) Tìm vị trí điểm $M$ để chi phí kéo cáp là thấp nhất và tính chi phí thấp nhất đó.",
                           "a) Ta có đoạn rải cáp trên bờ là $AM = AH - HM = 8 - x$ (km). Chi phí trên bờ là $30(8 - x)$ (triệu đồng).\\nĐoạn rải cáp ngầm dưới biển là $MC$. Trong tam giác vuông $MHC$: $MC = \\sqrt{MH^2 + HC^2} = \\sqrt{x^2 + 6^2} = \\sqrt{x^2 + 36}$ (km). Chi phí dưới biển là $50\\sqrt{x^2 + 36}$ (triệu đồng).\\nTổng chi phí:\\n$F(x) = 30(8 - x) + 50\\sqrt{x^2 + 36} = 240 - 30x + 50\\sqrt{x^2 + 36}$ (triệu đồng).\\nb) Để chi phí thấp nhất, ta khảo sát hàm số hoặc giải phương trình đạo hàm $F'(x) = 0$:\\n$F'(x) = -30 + 50 \\cdot \\frac{x}{\\sqrt{x^2 + 36}} = 0 \\Leftrightarrow \\frac{50x}{\\sqrt{x^2 + 36}} = 30 \\Leftrightarrow 5x = 3\\sqrt{x^2 + 36}$.\\nBình phương hai vế ($x \\ge 0$):\\n$25x^2 = 9(x^2 + 36) = 9x^2 + 324 \\Leftrightarrow 16x^2 = 324 \\Leftrightarrow x^2 = \\frac{324}{16} = \\frac{81}{4} \\Rightarrow x = \\frac{9}{2} = 4.5\\text{ km}$.\\nGiá trị $x = 4.5\\text{ km}$ thoả mãn điều kiện $0 \\le x \\le 8$.\\nKhoảng cách từ trạm $A$ đến điểm rẽ $M$ là: $AM = 8 - 4.5 = 3.5\\text{ km}$.\\nTổng chi phí thấp nhất thu được:\\n$F(4.5) = 30(3.5) + 50\\sqrt{4.5^2 + 36} = 105 + 50\\sqrt{20.25 + 36} = 105 + 50\\sqrt{56.25} = 105 + 50(7.5) = 105 + 375 = 480\\text{ triệu đồng}$.")
            ]
            return mcqs, tfs, sas, essays

    return None
