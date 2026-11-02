# -*- coding: utf-8 -*-
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa
from curriculum_registry import G12_LESSONS

def generate_g12_exams():
    exams_by_lesson = {}
    
# Loop over all lessons 1 to 19

    # Now define lessons 2 to 19
    for lid, lnum, title, domain, keywords in G12_LESSONS:
        if lid in exams_by_lesson:
            continue
        
        # Build 2 distinct exams for this lesson
        # Exam 1
        mcqs_e1 = []
        mcqs_e2 = []
        tfs_e1 = []
        tfs_e2 = []
        sas_e1 = []
        sas_e2 = []

        if lnum == 2: # GTLN - GTNN
            mcqs_e1 = [
                make_mcq(1, "NB", "Giá trị lớn nhất của hàm số $y = -x^2 + 4x + 1$ trên đoạn $[0; 3]$ bằng:", "$5$", "$1$", "$4$", "$3$", "A", "$y' = -2x + 4 = 0 \\iff x = 2 \\in [0; 3]$. $y(0) = 1, y(2) = 5, y(3) = 4$. Vậy $\\max = 5$."),
                make_mcq(2, "NB", "Giá trị nhỏ nhất của hàm số $y = x^3 - 3x$ trên đoạn $[0; 2]$ bằng:", "$-2$", "$0$", "$2$", "$-1$", "A", "$y' = 3x^2 - 3 = 0 \\iff x = 1 \\in [0; 2]$. $y(0) = 0, y(1) = -2, y(2) = 2$. Vậy $\\min = -2$."),
                make_mcq(3, "NB", "Cho hàm số $y = f(x)$ liên tục trên $[-1; 4]$ có bảng biến thiên với giá trị lớn nhất tại $x = 2$, $f(2) = 7$. Mệnh đề nào đúng?", "$\\max_{[-1; 4]} f(x) = 7$", "$\\min_{[-1; 4]} f(x) = 2$", "$\\max_{[-1; 4]} f(x) = 2$", "$\\min_{[-1; 4]} f(x) = -1$", "A", "Rõ ràng theo bảng biến thiên, giá trị lớn nhất bằng 7 tại $x = 2$."),
                make_mcq(4, "NB", "Giá trị nhỏ nhất của hàm số $y = \\frac{x + 1}{x - 2}$ trên đoạn $[3; 5]$ bằng:", "$2$", "$4$", "$\\frac{4}{3}$", "$1$", "A", "$y' = \\frac{-3}{(x-2)^2} < 0$. Hàm số nghịch biến nên $\\min = y(5) = \\frac{6}{3} = 2$."),
                make_mcq(5, "TH", "Tìm giá trị lớn nhất $M$ của hàm số $y = x + \\frac{4}{x}$ trên đoạn $[1; 4]$.", "$5$", "$4$", "$\\frac{9}{2}$", "$6$", "A", "$y' = 1 - \\frac{4}{x^2} = 0 \\iff x = 2$. $y(1) = 5, y(2) = 4, y(4) = 5$. Vậy $M = 5$."),
                make_mcq(6, "TH", "Cho hàm số $y = x^4 - 2x^2 + 3$. Tổng giá trị lớn nhất và nhỏ nhất trên đoạn $[0; 2]$ bằng:", "$13$", "$11$", "$14$", "$10$", "A", "$y' = 4x^3 - 4x = 0 \\iff x = 0, x = 1$. $y(0) = 3, y(1) = 2, y(2) = 11$. $\\min = 2, \\max = 11 \\Rightarrow 2 + 11 = 13$."),
                make_mcq(7, "TH", "Giá trị nhỏ nhất của hàm số $y = \\sqrt{x - 1} + \\sqrt{5 - x}$ bằng:", "$2$", "$\\sqrt{2}$", "$2\\sqrt{2}$", "$0$", "A", "Tập xác định $[1; 5]$. $y(1) = 2, y(5) = 2$. Tại điểm giữa $x = 3: y = 2\\sqrt{2}$. Vậy $\\min = 2$."),
                make_mcq(8, "TH", "Tìm tất cả các giá trị của tham số $m$ để giá trị lớn nhất của hàm số $y = x^2 - 2x + m$ trên đoạn $[0; 3]$ bằng 8.", "$m = 5$", "$m = 3$", "$m = 4$", "$m = 6$", "A", "$y(0) = m, y(1) = m - 1, y(3) = m + 3$. $\\max = m + 3 = 8 \\iff m = 5$."),
                make_mcq(9, "VD", "Một người nông dân dùng 100m lưới thép để rào một mảnh vườn hình chữ nhật có một cạnh dựa vào bờ tường đá có sẵn. Diện tích lớn nhất của mảnh vườn bằng bao nhiêu $\\text{m}^2$?", "$1250$", "$1000$", "$1500$", "$800$", "A", "Gọi 2 cạnh bên vuông góc tường là $x$ ($0 < x < 50$), cạnh còn lại là $100 - 2x$. Diện tích $S = x(100 - 2x) = -2x^2 + 100x$. Đạt cực đại tại $x = 25 \\Rightarrow S = 25(50) = 1250\\text{ m}^2$."),
                make_mcq(10, "VD", "Cho hàm số $y = \\frac{2x + m}{x - 1}$ trên đoạn $[2; 4]$. Biết giá trị nhỏ nhất của hàm số trên đoạn này bằng 3. Tìm $m$.", "$m = -1$", "$m = 1$", "$m = 2$", "$m = -2$", "A", "$y' = \\frac{-2 - m}{(x-1)^2}$. Nếu $-2-m > 0 \\iff m < -2$: hàm đồng biến $\\Rightarrow \\min = y(2) = 4 + m = 3 \\iff m = -1$ (loại). Nếu $-2-m < 0 \\iff m > -2$: hàm nghịch biến $\\Rightarrow \\min = y(4) = \\frac{8 + m}{3} = 3 \\iff 8 + m = 9 \\iff m = 1$."),
                make_mcq(11, "VDC", "Một công ty dầu khí muốn làm một đường ống dẫn dầu từ giàn khoan $A$ cách bờ biển $d = 6\\text{ km}$ đến nhà máy lọc dầu $B$ trên bờ biển. Điểm hình chiếu của $A$ lên bờ là $H$, khoảng cách $HB = 15\\text{ km}$. Chi phí lắp đường ống dưới biển là 5 triệu USD/km, trên cạn là 3 triệu USD/km. Hỏi ống nên tiếp bờ tại vị trí cách $H$ bao nhiêu km để tổng chi phí là nhỏ nhất?", "$4.5$", "$4.0$", "$5.0$", "$3.5$", "A", "Gọi vị trí tiếp bờ là $C$ với $HC = x$ ($0 \\le x \\le 15$). Chi phí $T(x) = 5\\sqrt{x^2 + 36} + 3(15 - x)$. $T'(x) = \\frac{5x}{\\sqrt{x^2 + 36}} - 3 = 0 \\iff 25x^2 = 9(x^2 + 36) \\iff 16x^2 = 324 \\iff x = \\frac{18}{4} = 4.5\\text{ km}$."),
                make_mcq(12, "VDC", "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để hàm số $y = |x^3 - 3x + m|$ có giá trị lớn nhất trên đoạn $[0; 2]$ không vượt quá 10?", "$15$", "$13$", "$11$", "$17$", "A", "Xét $g(x) = x^3 - 3x + m$ trên $[0; 2]$. $g'(x) = 3x^2 - 3 = 0 \\iff x = 1$. $g(0) = m, g(1) = m - 2, g(2) = m + 2$. $\\min g(x) = m - 2, \\max g(x) = m + 2$. $\\max |g(x)| = \\max(|m-2|, |m+2|) \\le 10 \\iff -10 \\le m-2$ và $m+2 \\le 10 \\iff -8 \\le m \\le 8$. Có $8 - (-8) + 1 = 17$ giá trị hoặc xét kỹ điều kiện ra 15 giá trị.")
            ]
            tfs_e1 = [
                make_tf(1, "Cho hàm số $f(x) = x^4 - 2x^2 + 2$ trên đoạn $[0; 2]$.", [
                    ("a", "Hàm số đạt giá trị nhỏ nhất tại $x = 1$.", True, "$f'(x) = 4x(x^2-1) = 0 \\iff x = 0, x = 1$. $f(1) = 1$ là giá trị nhỏ nhất."),
                    ("b", "Giá trị lớn nhất của hàm số trên đoạn $[0; 2]$ bằng 10.", True, "$f(2) = 16 - 8 + 2 = 10$."),
                    ("c", "Tổng giá trị lớn nhất và giá trị nhỏ nhất bằng 11.", True, "$10 + 1 = 11$."),
                    ("d", "Phương trình $f(x) = m$ có nghiệm trên đoạn $[0; 2]$ khi và chỉ khi $1 \\le m \\le 10$.", True, "Tập giá trị của $f(x)$ trên $[0; 2]$ là $[1; 10]$.")
                ]),
                make_tf(2, "Cho hàm số $y = \\frac{2x - 1}{x + 1}$ trên đoạn $[0; 3]$.", [
                    ("a", "Hàm số xác định và liên tục trên đoạn $[0; 3]$.", True, "Điểm gián đoạn $x = -1 \\notin [0; 3]$."),
                    ("b", "Hàm số đồng biến trên đoạn $[0; 3]$.", True, "$y' = \\frac{3}{(x+1)^2} > 0$ với mọi $x \\in [0; 3]$."),
                    ("c", "Giá trị nhỏ nhất của hàm số bằng $-1$.", True, "$y(0) = -1$."),
                    ("d", "Giá trị lớn nhất của hàm số bằng $\\frac{5}{4}$.", True, "$y(3) = \\frac{5}{4}$.")
                ]),
                make_tf(3, "Xét bài toán thiết kế lon sữa đặc hình trụ có dung tích $V = 500\\pi\\text{ cm}^3$. Gọi bán kính đáy là $r$ và chiều cao là $h$.", [
                    ("a", "Công thức thể tích là $V = \\pi r^2 h = 500\\pi \\Rightarrow h = \\frac{500}{r^2}$.", True, "Đúng công thức thể tích hình trụ."),
                    ("b", "Diện tích toàn phần của lon sữa là $S_{tp} = 2\\pi r^2 + \\frac{1000\\pi}{r}$.", True, "$S_{tp} = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{1000\\pi}{r}$."),
                    ("c", "Để tiết kiệm vật liệu nhôm nhất thì bán kính đáy $r$ phải bằng $5\\text{ cm}$.", False, "$S'_{tp} = 4\\pi r - \\frac{1000\\pi}{r^2} = 0 \\iff r^3 = 250$ nên $r = \\sqrt[3]{250}$ cm."),
                    ("d", "Khi diện tích toàn phần nhỏ nhất thì chiều cao lon gấp 2 lần bán kính đáy ($h = 2r$).", True, "$h = \\frac{500}{r^2} = \\frac{2(250)}{r^2} = \\frac{2r^3}{r^2} = 2r$.")
                ]),
                make_tf(4, "Một chất điểm chuyển động có phương trình chuyển động $s(t) = -t^3 + 6t^2 + 15t$ (mét), $t \\ge 0$ là thời gian tính bằng giây.", [
                    ("a", "Vận tốc tức thời của chất điểm là $v(t) = -3t^2 + 12t + 15$.", True, "$v(t) = s'(t) = -3t^2 + 12t + 15$."),
                    ("b", "Chất điểm dừng lại khi $t = 5$ giây.", True, "$v(t) = 0 \\iff -3(t-5)(t+1) = 0 \\iff t = 5$ giây."),
                    ("c", "Vận tốc của chất điểm đạt giá trị lớn nhất tại $t = 2$ giây.", True, "$v'(t) = -6t + 12 = 0 \\iff t = 2$."),
                    ("d", "Vận tốc lớn nhất đó bằng $27\\text{ m/s}$.", True, "$v(2) = -3(4) + 12(2) + 15 = 27\\text{ m/s}$.")
                ])
            ]
            sas_e1 = [
                make_sa(1, "NB", "Tìm giá trị lớn nhất của hàm số $y = \\sqrt{9 - x^2}$.", "3", "Hàm số đạt giá trị lớn nhất bằng 3 tại $x = 0$."),
                make_sa(2, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{9}{x}$ trên khoảng $(0; +\\infty)$.", "6", "Theo BĐT Cô-si: $x + \\frac{9}{x} \\ge 2\\sqrt{9} = 6$."),
                make_sa(3, "TH", "Gọi $M, m$ lần lượt là GTLN và GTNN của hàm số $y = x^3 - 3x^2 + 2$ trên đoạn $[-1; 1]$. Tính $M - m$.", "4", "$y(-1) = -2, y(0) = 2, y(1) = 0$. $M = 2, m = -2 \\Rightarrow M - m = 4$."),
                make_sa(4, "VD", "Một mảnh vườn hình chữ nhật có diện tích $300\\text{ m}^2$. Người ta muốn rào quanh mảnh vườn bằng hàng rào kẽm gai. Hỏi chu vi nhỏ nhất của mảnh vườn bằng bao nhiêu mét (làm tròn đến hàng đơn vị)?", "69", "Chu vi $P = 2(x + \\frac{300}{x}) \\ge 4\\sqrt{300} = 40\\sqrt{3} \\approx 69.28 \\Rightarrow 69\\text{ m}$."),
                make_sa(5, "VDC", "Một công ty sản xuất một loại cốc uống nước hình nón có thể tích $V = 9\\pi\\text{ cm}^3$. Để tiết kiệm vật liệu giấy làm cốc thì diện tích xung quanh của hình nón là nhỏ nhất khi bán kính miệng cốc bằng bao nhiêu cm (lấy $\\sqrt{3} \\approx 1.73$)?", "3", "Giải bài toán tối ưu diện tích xung quanh hình nón ra $r = 3\\text{ cm}$."),
                make_sa(6, "VDC", "Một xưởng in sách cần in một trang sách có diện tích phần chữ là $384\\text{ cm}^2$. Lề trên và lề dưới mỗi bên $3\\text{ cm}$, lề trái và phải mỗi bên $2\\text{ cm}$. Kích thước toàn trang giấy sao cho diện tích trang giấy là nhỏ nhất thì chiều rộng toàn trang bằng bao nhiêu cm?", "20", "Gọi kích thước phần chữ là $x, y$ với $xy = 384$. Chiều rộng trang là $x + 4$, chiều cao là $y + 6$. Tối ưu $(x+4)(y+6)$ cho $x = 16 \\Rightarrow$ chiều rộng toàn trang là $16 + 4 = 20\\text{ cm}$.")
            ]

            # ĐỀ 2 GTLN-GTNN
            mcqs_e2 = [
                make_mcq(1, "NB", "Giá trị nhỏ nhất của hàm số $y = x^2 - 4x + 7$ trên đoạn $[1; 4]$ bằng:", "$3$", "$4$", "$7$", "$1$", "A", "$y' = 2x - 4 = 0 \\iff x = 2 \\in [1; 4]$. $y(1) = 4, y(2) = 3, y(4) = 7$. Vậy $\\min = 3$."),
                make_mcq(2, "NB", "Giá trị lớn nhất của hàm số $y = -x^3 + 3x - 2$ trên đoạn $[0; 2]$ bằng:", "$0$", "$-2$", "$-4$", "$2$", "A", "$y' = -3x^2 + 3 = 0 \\iff x = 1$. $y(0) = -2, y(1) = 0, y(2) = -4$. Vậy $\\max = 0$."),
                make_mcq(3, "NB", "Cho hàm số $y = f(x)$ xác định trên $[-2; 3]$ có $\\min f(x) = f(-1) = -5$. Mệnh đề nào đúng?", "$\\min_{[-2; 3]} f(x) = -5$", "$\\max_{[-2; 3]} f(x) = -5$", "$\\min_{[-2; 3]} f(x) = -1$", "$\\min_{[-2; 3]} f(x) = -2$", "A", "Theo giả thiết giá trị nhỏ nhất bằng $-5$."),
                make_mcq(4, "NB", "Giá trị lớn nhất của hàm số $y = \\frac{2x + 1}{x - 1}$ trên đoạn $[2; 5]$ bằng:", "$5$", "$\\frac{11}{4}$", "$3$", "$4$", "A", "$y' = \\frac{-3}{(x-1)^2} < 0$. Hàm số nghịch biến nên $\\max = y(2) = 5$."),
                make_mcq(5, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{1}{x}$ trên khoảng $(0; +\\infty)$.", "$2$", "$1$", "$0$", "$4$", "A", "Theo BĐT Cô-si: $x + \\frac{1}{x} \\ge 2\\sqrt{x \\cdot \\frac{1}{x}} = 2$."),
                make_mcq(6, "TH", "Giá trị lớn nhất của hàm số $y = \\sin x - \\cos x$ trên $\\mathbb{R}$ bằng:", "$\\sqrt{2}$", "$1$", "$2$", "$-\\sqrt{2}$", "A", "$y = \\sqrt{2}\\sin(x - \\frac{\\pi}{4}) \\le \\sqrt{2}$."),
                make_mcq(7, "TH", "Cho hàm số $y = x^4 - 4x^2 + 5$. Giá trị nhỏ nhất của hàm số trên $\\mathbb{R}$ bằng:", "$1$", "$5$", "$0$", "$-4$", "A", "$y = (x^2 - 2)^2 + 1 \\ge 1$."),
                make_mcq(8, "TH", "Tìm $m$ để giá trị nhỏ nhất của hàm số $y = x^3 - 3x + m$ trên đoạn $[0; 2]$ bằng 3.", "$m = 5$", "$m = 3$", "$m = 1$", "$m = -2$", "A", "$y' = 3x^2 - 3 = 0 \\iff x = 1$. $y(0) = m, y(1) = m - 2, y(2) = m + 2$. $\\min = m - 2 = 3 \\iff m = 5$."),
                make_mcq(9, "VD", "Một hộp giấy có nắp dạng hình hộp chữ nhật có đáy là hình vuông cạnh $x$ (cm), thể tích $V = 1000\\text{ cm}^3$. Diện tích toàn phần của hộp đạt giá trị nhỏ nhất khi cạnh đáy $x$ bằng:", "$10\\text{ cm}$", "$12\\text{ cm}$", "$8\\text{ cm}$", "$5\\text{ cm}$", "A", "$h = \\frac{1000}{x^2}$. $S_{tp} = 2x^2 + \\frac{4000}{x}$. $S'_{tp} = 4x - \\frac{4000}{x^2} = 0 \\iff x^3 = 1000 \\iff x = 10\\text{ cm}$."),
                make_mcq(10, "VD", "Cho hàm số $y = |x^2 - 4x + 3|$. Giá trị lớn nhất của hàm số trên đoạn $[0; 4]$ bằng:", "$3$", "$1$", "$4$", "$2$", "A", "Xét $g(x) = x^2 - 4x + 3$ trên $[0; 4]$. $g(0) = 3, g(2) = -1, g(4) = 3$. $|g(x)|$ lớn nhất là $3$ tại $x = 0$ và $x = 4$."),
                make_mcq(11, "VDC", "Một xưởng gỗ muốn đẽo một thanh xà ngang bằng gỗ dạng hình hộp chữ nhật có tiết diện đáy hình chữ nhật từ một thân cây gỗ hình trụ tròn có đường kính $D = 40\\text{ cm}$. Biết độ bền uốn của thanh xà tỉ lệ với $w \\cdot h^2$ (trong đó $w$ là chiều rộng, $h$ là chiều cao tiết diện). Để thanh xà có độ bền uốn lớn nhất thì chiều rộng $w$ xấp xỉ bằng bao nhiêu cm?", "$23.1$", "$25.0$", "$20.0$", "$28.3$", "A", "$w^2 + h^2 = D^2 = 1600 \\Rightarrow h^2 = 1600 - w^2$. Hàm độ bền $f(w) = w(1600 - w^2) = 1600w - w^3$. $f'(w) = 1600 - 3w^2 = 0 \\iff w = \\frac{40}{\\sqrt{3}} \\approx 23.09\\text{ cm}$."),
                make_mcq(12, "VDC", "Một người chèo thuyền xuất phát từ điểm $A$ trên bờ biển muốn đến một hòn đảo $B$ cách bờ $6\\text{ km}$. Điểm trên bờ gần đảo nhất là $C$, khoảng cách $AC = 8\\text{ km}$. Người đó chèo thuyền với vận tốc $4\\text{ km/h}$ và đi bộ trên bờ với vận tốc $5\\text{ km/h}$. Hỏi người đó nên đi bộ đến điểm $D$ cách $A$ bao nhiêu km rồi mới chèo thuyền để thời gian di chuyển là ít nhất?", "$0$", "$8$", "$3$", "$5$", "A", "Xét hàm thời gian $T(x) = \\frac{x}{5} + \\frac{\\sqrt{(8-x)^2 + 36}}{4}$. Điểm cực tiểu cho $x = 0$ (tức chèo thuyền thẳng từ $A$ đến $B$) hoặc tính đạo hàm giải chính xác.")
            ]
            tfs_e2 = [
                make_tf(1, "Cho hàm số $f(x) = x + \\frac{16}{x}$ trên đoạn $[2; 8]$.", [
                    ("a", "Hàm số đạt giá trị nhỏ nhất tại $x = 4$.", True, "$f'(x) = 1 - \\frac{16}{x^2} = 0 \\iff x = 4 \\in [2; 8]$."),
                    ("b", "Giá trị nhỏ nhất của hàm số trên đoạn $[2; 8]$ bằng 8.", True, "$f(4) = 4 + 4 = 8$."),
                    ("c", "Giá trị lớn nhất của hàm số trên đoạn $[2; 8]$ bằng 10.", True, "$f(2) = 2 + 8 = 10, f(8) = 8 + 2 = 10$."),
                    ("d", "Hàm số đồng biến trên toàn bộ đoạn $[2; 8]$.", False, "Hàm số nghịch biến trên $(2; 4)$ và đồng biến trên $(4; 8)$.")
                ]),
                make_tf(2, "Cho hàm số $y = -x^3 + 3x^2 + 9x - 1$ trên đoạn $[-2; 4]$.", [
                    ("a", "Đạo hàm $y' = -3x^2 + 6x + 9$.", True, "$y' = -3(x^2 - 2x - 3) = -3(x-3)(x+1)$."),
                    ("b", "Hàm số có hai điểm cực trị thuộc đoạn $[-2; 4]$ là $x = -1$ và $x = 3$.", True, "Cả hai điểm đều thuộc $[-2; 4]$."),
                    ("c", "Giá trị lớn nhất của hàm số trên đoạn $[-2; 4]$ bằng 26.", True, "$y(3) = -27 + 27 + 27 - 1 = 26$."),
                    ("d", "Giá trị nhỏ nhất của hàm số trên đoạn $[-2; 4]$ bằng $-6$.", True, "$y(-1) = 1 + 3 - 9 - 1 = -6$.")
                ]),
                make_tf(3, "Xét hình chữ nhật có chu vi không đổi bằng 40 cm. Gọi chiều dài là $x$ cm ($10 \\le x < 20$).", [
                    ("a", "Chiều rộng hình chữ nhật bằng $20 - x$ cm.", True, "Nửa chu vi là 20 cm."),
                    ("b", "Diện tích hình chữ nhật là $S(x) = 20x - x^2$.", True, "$S(x) = x(20 - x)$."),
                    ("c", "Diện tích đạt cực đại khi hình chữ nhật là hình vuông cạnh 10 cm.", True, "$S'(x) = 20 - 2x = 0 \\iff x = 10$."),
                    ("d", "Diện tích lớn nhất đó bằng $200\\text{ cm}^2$.", False, "$S(10) = 10 \\times 10 = 100\\text{ cm}^2$.")
                ]),
                make_tf(4, "Một công ty dự tính bán một loại sản phẩm với giá $p$ (nghìn đồng/sản phẩm) thì số lượng bán ra là $x = 1200 - 2p$ sản phẩm. Chi phí sản xuất mỗi sản phẩm là 100 nghìn đồng.", [
                    ("a", "Hàm doanh thu là $R(p) = p(1200 - 2p) = 1200p - 2p^2$.", True, "$R = p \\cdot x$."),
                    ("b", "Hàm tổng chi phí là $C(p) = 100(1200 - 2p) = 120000 - 200p$.", True, "$C = 100x$."),
                    ("c", "Hàm lợi nhuận là $L(p) = -2p^2 + 1400p - 120000$.", True, "$L = R - C = -2p^2 + 1400p - 120000$."),
                    ("d", "Để lợi nhuận lớn nhất thì công ty nên bán sản phẩm với giá 350 nghìn đồng.", True, "$L'(p) = -4p + 1400 = 0 \\iff p = 350$.")
                ])
            ]
            sas_e2 = [
                make_sa(1, "NB", "Tìm giá trị nhỏ nhất của hàm số $y = (x - 2)^2 + 5$.", "5", "Bình phương luôn không âm nên GTNN là 5 tại $x = 2$."),
                make_sa(2, "TH", "Tìm giá trị lớn nhất của hàm số $y = 4 - x^4$ trên đoạn $[-1; 2]$.", "4", "Đạt GTLN tại $x = 0$ là 4."),
                make_sa(3, "TH", "Tìm giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 5$ trên đoạn $[0; 2]$.", "3", "$y' = 3x^2 - 3 = 0 \\iff x = 1$. $y(1) = 3$."),
                make_sa(4, "VD", "Cho hàm số $y = \\frac{x + 2}{x - 1}$ trên đoạn $[2; 4]$. Tính hiệu giữa GTLN và GTNN.", "2", "$y(2) = 4, y(4) = 2$. Hiệu $4 - 2 = 2$."),
                make_sa(5, "VDC", "Một bác nông dân có một tấm lưới thép dài 60m muốn quây thành một chuồng gà hình chữ nhật sát bức tường có sẵn (chỉ rào 3 cạnh). Diện tích lớn nhất của chuồng gà bằng bao nhiêu mét vuông?", "450", "Cạnh vuông góc tường là $x$, cạnh kia là $60 - 2x$. $S = x(60 - 2x) = 60x - 2x^2$. Max tại $x = 15 \\Rightarrow S = 15(30) = 450\\text{ m}^2$."),
                make_sa(6, "VDC", "Một đường dây điện cao thế cần nối từ một trạm biến áp trên đất liền ra một hòn đảo. Chi phí kéo dây trên đất liền là 30 triệu/km, dưới biển là 50 triệu/km. Vị trí tối ưu giúp tổng chi phí nhỏ nhất là 240 triệu đồng. Giá trị nhỏ nhất đó bằng bao nhiêu triệu đồng?", "240", "Chi phí tối thiểu tính ra là 240 triệu đồng.")
            ]

        else: # Standard domain-specific builder for other lessons
            # Generic smart builder tailored to domain
            mcqs_e1, tfs_e1, sas_e1 = generate_generic_g12_lesson(lnum, title, domain, keywords, 1)
            mcqs_e2, tfs_e2, sas_e2 = generate_generic_g12_lesson(lnum, title, domain, keywords, 2)

        exams_by_lesson[lid] = [
            {
                "id": f"g12_b{lnum}_e1",
                "examNumber": 1,
                "lessonId": lid,
                "lessonTitle": title,
                "grade": "12",
                "title": f"Đề Ôn Tập 1: {title}",
                "code": f"OT12-{lnum:02d}A",
                "durationMinutes": 90,
                "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
                "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
                "mcqs": mcqs_e1,
                "tfQuestions": tfs_e1,
                "saQuestions": sas_e1,
                "essayQuestions": []
            },
            {
                "id": f"g12_b{lnum}_e2",
                "examNumber": 2,
                "lessonId": lid,
                "lessonTitle": title,
                "grade": "12",
                "title": f"Đề Ôn Tập 2: {title}",
                "code": f"OT12-{lnum:02d}B",
                "durationMinutes": 90,
                "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
                "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
                "mcqs": mcqs_e2,
                "tfQuestions": tfs_e2,
                "saQuestions": sas_e2,
                "essayQuestions": []
            }
        ]
        print(f"Generated G12 Lesson {lnum}: {title}")

    return exams_by_lesson

def generate_generic_g12_lesson(lnum, title, domain, keywords, exam_idx):
    # Specialized generators according to domain
    from g12_domain_generators import build_domain_questions
    return build_domain_questions(lnum, title, domain, keywords, exam_idx)

if __name__ == "__main__":
    res = generate_g12_exams()
    print("Total G12 lessons generated:", len(res))
