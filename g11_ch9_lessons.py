# -*- coding: utf-8 -*-
"""
Chương 9 Lớp 11: Đạo hàm.
Bao gồm:
- Bài 31: Định nghĩa và ý nghĩa của đạo hàm
- Bài 32: Các quy tắc tính đạo hàm
- Bài 33: Đạo hàm cấp hai
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch9_lesson(lnum, k):
    if lnum == 31:
        # BÀI 31: ĐỊNH NGHĨA VÀ Ý NGHĨA CỦA ĐẠO HÀM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và $x_0 \\in (a; b)$. Đạo hàm của $f(x)$ tại điểm $x_0$ (nếu tồn tại) là giới hạn",
                         "$\\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$",
                         "$\\lim_{\\Delta x \\to \\infty} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$",
                         "$\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x + x_0}$",
                         "$\\lim_{\\Delta x \\to 0} [f(x_0 + \\Delta x) - f(x_0)]$",
                         "A", "Định nghĩa SGK: Đạo hàm tại điểm $x_0$ là $\\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$."),
                make_mcq(2, "NB", "Ý nghĩa hình học của đạo hàm: Đạo hàm của hàm số $y = f(x)$ tại điểm $x_0$ là",
                         "Hệ số góc của tiếp tuyến với đồ thị hàm số tại điểm $M_0(x_0; f(x_0))$",
                         "Độ dài đoạn tiếp tuyến",
                         "Tung độ giao điểm của tiếp tuyến với trục tung",
                         "Góc tạo bởi tiếp tuyến và trục tung",
                         "A", "Định lý: $f'(x_0)$ là hệ số góc của tiếp tuyến tại điểm $M_0(x_0; f(x_0))$."),
                make_mcq(3, "NB", "Phương trình tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; y_0)$ có dạng là",
                         "$y = f'(x_0)(x - x_0) + y_0$",
                         "$y = f'(x_0)(x + x_0) + y_0$",
                         "$y = f'(x_0)(x - x_0) - y_0$",
                         "$y = f(x_0)(x - x_0) + f'(x_0)$",
                         "A", "Công thức phương trình tiếp tuyến: $y = f'(x_0)(x - x_0) + y_0$."),
                make_mcq(4, "NB", "Ý nghĩa vật lý của đạo hàm: Vận tốc tức thời $v(t)$ của chuyển động có phương trình quãng đường $s(t)$ tại thời điểm $t$ là",
                         "$v(t) = s'(t)$", "$v(t) = s''(t)$", "$v(t) = \\frac{s(t)}{t}$", "$v(t) = s(t) \\cdot t$",
                         "A", "Vận tốc tức thời là đạo hàm của quãng đường theo thời gian: $v(t) = s'(t)$."),
                make_mcq(5, "TH", "Cho hàm số $f(x) = x^2$. Đạo hàm của $f(x)$ tại điểm $x_0 = 3$ bằng",
                         "6", "9", "3", "12",
                         "A", "$f'(x) = 2x \\Rightarrow f'(3) = 6$."),
                make_mcq(6, "TH", "Tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $A(1; 2)$ có hệ số góc $k = -3$. Phương trình tiếp tuyến đó là",
                         "$y = -3x + 5$", "$y = -3x - 1$", "$y = -3x + 2$", "$y = 3x - 1$",
                         "A", "$y = -3(x - 1) + 2 = -3x + 5$."),
                make_mcq(7, "TH", "Một vật chuyển động thẳng có phương trình quãng đường $s(t) = t^2 + 2t$ (trong đó $t$ tính bằng giây, $s$ tính bằng mét). Vận tốc tức thời của vật tại thời điểm $t = 3\\text{ s}$ bằng",
                         "$8\\text{ m/s}$", "$15\\text{ m/s}$", "$6\\text{ m/s}$", "$11\\text{ m/s}$",
                         "A", "$v(t) = s'(t) = 2t + 2$. Tại $t = 3$, $v(3) = 2 \\times 3 + 2 = 8\\text{ m/s}$."),
                make_mcq(8, "TH", "Hệ số góc của tiếp tuyến với đồ thị hàm số $y = x^3 - 3x$ tại điểm có hoành độ $x_0 = 2$ bằng",
                         "9", "2", "6", "12",
                         "A", "$y' = 3x^2 - 3$. Tại $x_0 = 2$, $k = y'(2) = 3(4) - 3 = 9$."),
                make_mcq(9, "VD", "Phương trình tiếp tuyến của đồ thị hàm số $y = \\frac{x+1}{x-1}$ tại điểm có hoành độ $x_0 = 2$ là",
                         "$y = -2x + 7$", "$y = -2x + 3$", "$y = 2x - 1$", "$y = -2x - 1$",
                         "A", "$y(2) = 3$. $y' = \\frac{-2}{(x-1)^2} \\Rightarrow y'(2) = -2$. Phương trình: $y = -2(x - 2) + 3 = -2x + 7$."),
                make_mcq(10, "VD", "Cho hàm số $y = f(x)$ có đạo hàm tại mọi điểm và tiếp tuyến tại điểm $M(2; 5)$ song song với đường thẳng $d: y = 4x + 1$. Khẳng định nào sau đây đúng?",
                         "$f'(2) = 4$ và $f(2) = 5$",
                         "$f'(2) = 1$ và $f(2) = 5$",
                         "$f'(5) = 4$",
                         "$f'(2) = -4$",
                         "A", "Tiếp tuyến song song với đường thẳng có hệ số góc bằng 4 nên $k = f'(2) = 4$. Điểm tiếp xúc $M(2; 5)$ nên $f(2) = 5$."),
                make_mcq(11, "VDC", "Một giọt nước rơi tự do từ độ cao $45\\text{ m}$ xuống đất theo phương trình $s(t) = 5t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Vận tốc tức thời của giọt nước khi chạm đất bằng",
                         "$30\\text{ m/s}$", "$45\\text{ m/s}$", "$15\\text{ m/s}$", "$20\\text{ m/s}$",
                         "A", "Chạm đất khi $5t^2 = 45 \\Rightarrow t = 3\\text{ s}$. Vận tốc $v(t) = s'(t) = 10t \\Rightarrow v(3) = 30\\text{ m/s}$."),
                make_mcq(12, "VDC", "Một bể chứa đang được tháo nước, thể tích nước còn lại trong bể (tính bằng mét khối) sau $t$ phút được cho bởi công thức $V(t) = 100(10 - t)^2$ ($0 \\le t \\le 10$). Tốc độ xả nước tức thời tại thời điểm $t = 4\\text{ phút}$ bằng",
                         "$1200\\text{ m}^3\\text{/phút}$", "$600\\text{ m}^3\\text{/phút}$", "$3600\\text{ m}^3\\text{/phút}$", "$2400\\text{ m}^3\\text{/phút}$",
                         "A", "$V'(t) = -200(10 - t)$. Tốc độ xả nước tức thời là $|V'(4)| = 200(6) = 1200\\text{ m}^3\\text{/phút}$.")
            ]
            tfs = [
                make_tf(1, "Ý nghĩa hình học của đạo hàm. Cho hàm số $y = f(x) = x^2 - 4x + 3$ có đồ thị $(C)$.", [
                    ("a", "Đạo hàm của hàm số tại điểm $x$ bất kì là $f'(x) = 2x - 4$.", True, "Đạo hàm của $x^2 - 4x + 3$ là $2x - 4$."),
                    ("b", "Hệ số góc của tiếp tuyến tại điểm có hoành độ $x_0 = 3$ bằng $2$.", True, "$f'(3) = 2(3) - 4 = 2$."),
                    ("c", "Tiếp điểm của tiếp tuyến tại hoành độ $x_0 = 3$ là $M(3; 0)$.", True, "$f(3) = 9 - 12 + 3 = 0$."),
                    ("d", "Phương trình tiếp tuyến tại điểm có hoành độ $x_0 = 3$ là $y = 2x + 6$.", False, "$y = 2(x - 3) + 0 = 2x - 6$, không phải $2x + 6$.")
                ]),
                make_tf(2, "Ý nghĩa vật lý của đạo hàm. Một vật chuyển động thẳng có quãng đường đi được xác định bởi hàm số $s(t) = 3t^3 - 4t + 1$ ($t \\ge 0$, đơn vị giây và mét).", [
                    ("a", "Vận tốc tức thời $v(t)$ là đạo hàm của hàm quãng đường $s(t)$.", True, "$v(t) = s'(t)$."),
                    ("b", "Biểu thức vận tốc tức thời là $v(t) = 9t^2 - 4$.", True, "Đạo hàm của $3t^3 - 4t + 1$ là $9t^2 - 4$."),
                    ("c", "Vận tốc tức thời của vật tại thời điểm ban đầu $t = 0$ bằng $4\\text{ m/s}$.", False, "$v(0) = -4\\text{ m/s}$."),
                    ("d", "Vận tốc tức thời của vật tại thời điểm $t = 2\\text{ s}$ bằng $32\\text{ m/s}$.", True, "$v(2) = 9(4) - 4 = 32\\text{ m/s}$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hàm số $f(x) = 3x^2 - 5x + 2$. Tính $f'(2)$.",
                        "7", "$f'(x) = 6x - 5 \\Rightarrow f'(2) = 7$."),
                make_sa(2, "TH", "Tính hệ số góc của tiếp tuyến với parabol $y = x^2$ tại điểm $M(1; 1)$.",
                        "2", "$y' = 2x \\Rightarrow y'(1) = 2$."),
                make_sa(3, "VD", "Một quả bóng được ném thẳng đứng lên cao theo phương trình độ cao $h(t) = 20t - 5t^2$ ($h$ tính bằng mét, $t$ tính bằng giây). Tính vận tốc tức thời của quả bóng tại thời điểm $t = 1\\text{ s}$.",
                        "10", "$v(t) = h'(t) = 20 - 10t \\Rightarrow v(1) = 10\\text{ m/s}$."),
                make_sa(4, "VD", "Viết hệ số góc của tiếp tuyến của đồ thị $y = x^3 - 3x^2 + 2$ tại điểm uốn có hoành độ $x = 1$.",
                        "-3", "$y' = 3x^2 - 6x \\Rightarrow y'(1) = 3 - 6 = -3$."),
                make_sa(5, "VDC", "Một lượng điện tích $q(t)$ di chuyển qua tiết diện dây dẫn được cho bởi hàm số $q(t) = 2t^2 + 3t$ (Culông, $t$ tính bằng giây). Cường độ dòng điện tức thời $i(t) = q'(t)$ tại thời điểm $t = 5\\text{ giây}$ bằng bao nhiêu Ampe?",
                        "23", "$i(t) = q'(t) = 4t + 3 \\Rightarrow i(5) = 23\\text{ A}$."),
                make_sa(6, "VDC", "Tìm toạ độ hoành độ $x_0$ dương của điểm trên đồ thị $y = x^3 - 3x$ sao cho tiếp tuyến tại đó song song với đường thẳng $y = 9x - 5$.",
                        "2", "$y' = 3x^2 - 3 = 9 \\Rightarrow 3x^2 = 12 \\Rightarrow x^2 = 4 \\Rightarrow x_0 = 2$ (do $x_0 > 0$).")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa đạo hàm bằng giới hạn",
                           "Nêu định nghĩa đạo hàm của hàm số $y = f(x)$ tại điểm $x_0$ bằng giới hạn tỉ số số gia. Nêu ý nghĩa hình học của đạo hàm.",
                           "1. Định nghĩa: Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và $x_0 \\in (a; b)$. Nếu tồn tại giới hạn hữu hạn $\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$ (hoặc $\\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}$) thì giới hạn đó được gọi là đạo hàm của hàm số tại $x_0$, kí hiệu $f'(x_0)$. 2. Ý nghĩa hình học: Đạo hàm $f'(x_0)$ chính là hệ số góc của tiếp tuyến của đồ thị hàm số $y = f(x)$ tại điểm $M_0(x_0; f(x_0))$."),
                make_essay(2, "TH", 0.5, "Viết phương trình tiếp tuyến của đồ thị hàm số",
                           "Cho hàm số $y = f(x) = x^3 - 3x + 1$ có đồ thị $(C)$. Viết phương trình tiếp tuyến của đồ thị $(C)$ tại điểm có hoành độ $x_0 = 2$.",
                           "1. Tung độ tiếp điểm: $y_0 = f(2) = 2^3 - 3(2) + 1 = 8 - 6 + 1 = 3$. Vậy tiếp điểm là $M_0(2; 3)$. 2. Đạo hàm: $f'(x) = 3x^2 - 3$. Hệ số góc của tiếp tuyến tại $x_0 = 2$ là: $k = f'(2) = 3(2^2) - 3 = 12 - 3 = 9$. 3. Phương trình tiếp tuyến là: $y = f'(2)(x - 2) + y_0 \\Leftrightarrow y = 9(x - 2) + 3 \\Leftrightarrow y = 9x - 15$."),
                make_essay(3, "VD", 0.5, "Ý nghĩa cơ học của đạo hàm",
                           "Một viên đạn được bắn thẳng đứng lên trời từ mặt đất với phương trình chuyển động là $s(t) = 100t - 5t^2$ (trong đó $t$ tính bằng giây, quãng đường $s$ tính bằng mét). a) Tìm biểu thức vận tốc tức thời của viên đạn tại thời điểm $t$. b) Tính vận tốc tức thời của viên đạn tại thời điểm $t = 4\\text{ s}$. c) Sau bao nhiêu giây thì viên đạn đạt độ cao cực đại?",
                           "a) Vận tốc tức thời là đạo hàm của quãng đường theo thời gian: $v(t) = s'(t) = (100t - 5t^2)' = 100 - 10t$ (m/s). b) Tại thời điểm $t = 4\\text{ s}$: $v(4) = 100 - 10(4) = 60\\text{ m/s}$. c) Viên đạn đạt độ cao cực đại khi vận tốc tức thời triệt tiêu: $v(t) = 0 \\Leftrightarrow 100 - 10t = 0 \\Leftrightarrow t = 10\\text{ s}$. Vậy sau 10 giây viên đạn lên đến độ cao cực đại."),
                make_essay(4, "VDC", 0.5, "Bài toán tốc độ truyền dịch y tế",
                           "Một bệnh nhân được truyền một dung dịch thuốc qua đường tĩnh mạch. Tổng thể tích dung dịch thuốc đã hấp thụ vào máu sau $t$ giờ được mô tả xấp xỉ bởi hàm số $V(t) = 50t - 5t^2$ (đơn vị: ml), với $0 \\le t \\le 5$. a) Hãy tìm tốc độ hấp thụ thuốc tức thời $v(t) = V'(t)$ tại thời điểm $t$. b) Tính tốc độ hấp thụ thuốc vào thời điểm sau khi truyền được $2$ giờ. c) Giải thích ý nghĩa của thời điểm $t = 5\\text{ giờ}$ theo phương diện y học đối với lượng thuốc hấp thụ.",
                           "a) Tốc độ hấp thụ thuốc tức thời vào máu là đạo hàm của thể tích theo thời gian: $v(t) = V'(t) = (50t - 5t^2)' = 50 - 10t$ (ml/giờ). b) Sau $t = 2\\text{ giờ}$, tốc độ hấp thụ thuốc tức thời là: $v(2) = 50 - 10(2) = 30\\text{ ml/giờ}$. c) Tại thời điểm $t = 5\\text{ giờ}$, ta có $v(5) = 50 - 10(5) = 0\\text{ ml/giờ}$, đồng thời tổng thể tích hấp thụ đạt cực đại $V(5) = 50(5) - 5(5^2) = 125\\text{ ml}$. Điều này có nghĩa là sau 5 giờ thuốc đã được hấp thụ hoàn toàn vào máu và quá trình truyền thuốc kết thúc.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Số gia của đối số $\\Delta x$ tại điểm $x_0$ ứng với số gia đối số $x$ là",
                         "$\\Delta x = x - x_0$", "$\\Delta x = x + x_0$", "$\\Delta x = x \\cdot x_0$", "$\\Delta x = \\frac{x}{x_0}$",
                         "A", "Số gia của đối số là $\\Delta x = x - x_0$."),
                make_mcq(2, "NB", "Số gia tương ứng của hàm số $\\Delta y$ tại $x_0$ là",
                         "$\\Delta y = f(x_0 + \\Delta x) - f(x_0)$",
                         "$\\Delta y = f(x_0 + \\Delta x) + f(x_0)$",
                         "$\\Delta y = f(\\Delta x) - f(x_0)$",
                         "$\\Delta y = f'(x_0) \\cdot \\Delta x$",
                         "A", "Số gia tương ứng của hàm số là $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$."),
                make_mcq(3, "NB", "Đạo hàm của hàm hằng $f(x) = C$ (với $C$ là hằng số) bằng",
                         "0", "1", "$C$", "$x$",
                         "A", "Đạo hàm của hàm hằng luôn bằng 0."),
                make_mcq(4, "NB", "Đạo hàm của hàm số $f(x) = x$ bằng",
                         "1", "0", "$x$", "2",
                         "A", "$(x)' = 1$."),
                make_mcq(5, "TH", "Cho hàm số $f(x) = x^3$. Đạo hàm của $f(x)$ tại $x_0 = -1$ bằng",
                         "3", "-3", "1", "-1",
                         "A", "$f'(x) = 3x^2 \\Rightarrow f'(-1) = 3$."),
                make_mcq(6, "TH", "Hệ số góc của tiếp tuyến của đồ thị hàm số $y = \\frac{1}{x}$ tại điểm có hoành độ $x_0 = 2$ bằng",
                         "$-\\frac{1}{4}$", "$\\frac{1}{4}$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$",
                         "A", "$y' = -\\frac{1}{x^2} \\Rightarrow y'(2) = -\\frac{1}{4}$."),
                make_mcq(7, "TH", "Cho chuyển động thẳng xác định bởi phương trình $s(t) = 4t^2 - 3t + 2$. Vận tốc tức thời tại $t = 2\\text{ s}$ bằng",
                         "$13\\text{ m/s}$", "$16\\text{ m/s}$", "$12\\text{ m/s}$", "$8\\text{ m/s}$",
                         "A", "$v(t) = s'(t) = 8t - 3 \\Rightarrow v(2) = 13\\text{ m/s}$."),
                make_mcq(8, "TH", "Phương trình tiếp tuyến của đồ thị hàm số $y = x^2 - 2x$ tại điểm $A(2; 0)$ là",
                         "$y = 2x - 4$", "$y = 2x + 4$", "$y = -2x + 4$", "$y = 4x - 8$",
                         "A", "$y' = 2x - 2 \\Rightarrow y'(2) = 2$. Tiếp tuyến: $y = 2(x - 2) + 0 = 2x - 4$."),
                make_mcq(9, "VD", "Tiếp tuyến của đồ thị hàm số $y = x^3 - 3x^2 + 1$ vuông góc với đường thẳng $d: y = -\\frac{1}{9}x + 2$. Hệ số góc của tiếp tuyến bằng",
                         "9", "$-\\frac{1}{9}$", "3", "-9",
                         "A", "Hai đường vuông góc nên $k \\cdot (-1/9) = -1 \\Rightarrow k = 9$."),
                make_mcq(10, "VD", "Cho hàm số $y = f(x)$ có $f'(3) = 5$. Giới hạn $\\lim_{x \\to 3} \\frac{f(x) - f(3)}{x - 3}$ bằng",
                         "5", "3", "0", "15",
                         "A", "Theo định nghĩa đạo hàm, giới hạn này chính bằng $f'(3) = 5$."),
                make_mcq(11, "VDC", "Một xe điện chuyển động chậm dần đều khi hãm phanh có phương trình quãng đường $s(t) = 24t - 3t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Quãng đường xe đi được từ lúc đạp phanh đến khi dừng hẳn bằng",
                         "$48\\text{ m}$", "$24\\text{ m}$", "$36\\text{ m}$", "$72\\text{ m}$",
                         "A", "Vận tốc $v(t) = 24 - 6t = 0 \\Rightarrow t = 4\\text{ s}$. Quãng đường $s(4) = 24(4) - 3(16) = 96 - 48 = 48\\text{ m}$."),
                make_mcq(12, "VDC", "Nhiệt độ $T$ (độ C) của một thanh kim loại sau khi tôi nóng được làm nguội theo thời gian $t$ (phút) tuân theo quy luật $T(t) = 20 + 80(0.5)^t$. Tốc độ nguội lạnh tức thời của thanh kim loại tại thời điểm $t = 1\\text{ phút}$ (lấy $|T'(1)|$) xấp xỉ bằng",
                         "$27.7^\\circ\\text{C/phút}$", "$40^\\circ\\text{C/phút}$", "$20^\\circ\\text{C/phút}$", "$13.8^\\circ\\text{C/phút}$",
                         "A", "$T'(t) = 80 \\cdot 0.5^t \\ln(0.5)$. Tại $t = 1$, $|T'(1)| = 40 \\ln 2 \\approx 40 \\times 0.693 = 27.72^\\circ\\text{C/phút}$.")
            ]
            tfs = [
                make_tf(1, "Phương trình tiếp tuyến của đồ thị hàm số. Cho hàm số $y = f(x) = \\frac{2x - 1}{x + 1}$ có đồ thị $(H)$.", [
                    ("a", "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", True, "Mẫu số khác 0 khi $x \\ne -1$."),
                    ("b", "Đạo hàm của hàm số là $f'(x) = \\frac{3}{(x + 1)^2}$.", True, "$ad - bc = 2(1) - (-1)(1) = 3$."),
                    ("c", "Tiếp tuyến của $(H)$ tại điểm có hoành độ $x_0 = 0$ có hệ số góc bằng $3$.", True, "$f'(0) = 3/(0+1)^2 = 3$."),
                    ("d", "Phương trình tiếp tuyến tại điểm có hoành độ $x_0 = 0$ là $y = 3x + 1$.", False, "$f(0) = -1$. Tiếp tuyến: $y = 3(x - 0) - 1 = 3x - 1$, không phải $3x + 1$.")
                ]),
                make_tf(2, "Ứng dụng đạo hàm tính vận tốc tức thời. Một hòn đá được ném từ vách núi xuống vực theo phương thẳng đứng với phương trình $s(t) = 4.9t^2 + 10t$ ($s$ tính bằng mét, $t$ tính bằng giây).", [
                    ("a", "Vận tốc ban đầu của hòn đá tại thời điểm $t = 0$ là $10\\text{ m/s}$.", True, "$v(t) = s'(t) = 9.8t + 10 \\Rightarrow v(0) = 10\\text{ m/s}$."),
                    ("b", "Vận tốc tức thời tại thời điểm $t = 2\\text{ s}$ là $29.6\\text{ m/s}$.", True, "$v(2) = 9.8(2) + 10 = 29.6\\text{ m/s}$."),
                    ("c", "Chuyển động của hòn đá là chuyển động thẳng đều.", False, "Vận tốc biến thiên theo thời gian nên không phải chuyển động đều."),
                    ("d", "Độ tăng vận tốc sau mỗi giây của hòn đá luôn bằng $9.8\\text{ m/s}$.", True, "Hệ số góc của $v(t)$ là gia tốc trọng trường $9.8\\text{ m/s}^2$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hàm số $f(x) = x^4 - 2x^2$. Tính giá trị của đạo hàm $f'(1)$.",
                        "0", "$f'(x) = 4x^3 - 4x \\Rightarrow f'(1) = 0$."),
                make_sa(2, "TH", "Tính hệ số góc của tiếp tuyến với đồ thị $y = x^2 - 4x + 5$ tại giao điểm với trục tung.",
                        "-4", "Giao trục tung tại $x = 0$. $y' = 2x - 4 \\Rightarrow y'(0) = -4$."),
                make_sa(3, "VD", "Một ô tô đang chạy thì phanh gấp, quãng đường đi được sau khi phanh là $s(t) = 18t - 3t^2$ (mét). Vận tốc tức thời của ô tô tại thời điểm $t = 2\\text{ s}$ bằng bao nhiêu mét trên giây?",
                        "6", "$v(t) = 18 - 6t \\Rightarrow v(2) = 6\\text{ m/s}$."),
                make_sa(4, "VD", "Tìm hoành độ tiếp điểm $x_0$ trên đồ thị $y = x^3 - 12x$ mà tại đó tiếp tuyến nằm ngang (hệ số góc bằng 0, lấy nghiệm dương).",
                        "2", "$y' = 3x^2 - 12 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x_0 = 2$."),
                make_sa(5, "VDC", "Số vi khuẩn trong một đĩa nuôi cấy sau $t$ giờ phát triển theo hàm số $N(t) = 1000 + 300t^2$. Tính tốc độ gia tăng số lượng vi khuẩn tức thời tại thời điểm $t = 3\\text{ giờ}$ (vi khuẩn/giờ).",
                        "1800", "$N'(t) = 600t \\Rightarrow N'(3) = 1800$ vi khuẩn/giờ."),
                make_sa(6, "VDC", "Viết phương trình tiếp tuyến của $y = x^2 - 3x + 2$ biết tiếp tuyến song song với đường thẳng $y = x + 2025$. Giá trị hệ số tự do $b$ trong phương trình tiếp tuyến $y = x + b$ bằng bao nhiêu?",
                        "-2", "$y' = 2x - 3 = 1 \\Rightarrow x_0 = 2$. $y_0 = 0$. Tiếp tuyến: $y = 1(x - 2) + 0 = x - 2 \\Rightarrow b = -2$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Số gia và mối liên hệ với đạo hàm",
                           "Nêu định nghĩa số gia của đối số $\\Delta x$ và số gia tương ứng của hàm số $\\Delta y$. Viết công thức đạo hàm theo hai số gia này.",
                           "1. Giả sử hàm số $y = f(x)$ xác định trên $(a; b)$ và $x_0 \\in (a; b)$. Cho $x_0$ một số gia $\\Delta x$ sao cho $x_0 + \\Delta x \\in (a; b)$. - Số gia của đối số là: $\\Delta x = x - x_0$. - Số gia tương ứng của hàm số là: $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$. 2. Đạo hàm của hàm số tại $x_0$ là giới hạn tỉ số giữa số gia của hàm số và số gia của đối số khi số gia đối số tiến dần về 0: $f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$."),
                make_essay(2, "TH", 0.5, "Viết phương trình tiếp tuyến tại giao điểm với trục toạ độ",
                           "Cho hàm số $y = f(x) = x^2 - 4x + 3$ có đồ thị $(P)$. Viết phương trình tiếp tuyến của $(P)$ tại giao điểm của $(P)$ với trục tung $Oy$.",
                           "1. Giao điểm của $(P)$ với trục tung $Oy$ có hoành độ $x_0 = 0$. Tung độ tương ứng: $y_0 = f(0) = 0^2 - 4(0) + 3 = 3$. Vậy tiếp điểm là $A(0; 3)$. 2. Đạo hàm: $f'(x) = 2x - 4$. Hệ số góc của tiếp tuyến tại $x_0 = 0$ là: $k = f'(0) = 2(0) - 4 = -4$. 3. Phương trình tiếp tuyến là: $y = f'(0)(x - 0) + y_0 \\Leftrightarrow y = -4(x - 0) + 3 \\Leftrightarrow y = -4x + 3$."),
                make_essay(3, "VD", 0.5, "Ứng dụng đạo hàm xác định thời điểm dừng xe",
                           "Một chiếc xe buýt đang chạy với vận tốc $15\\text{ m/s}$ thì tài xế phát hiện chướng ngại vật phía trước và bắt đầu hãm phanh. Quãng đường xe buýt đi được kể từ thời điểm bắt đầu hãm phanh được xác định bởi công thức: $s(t) = 15t - 1.5t^2$ (trong đó $t$ tính bằng giây, $s$ tính bằng mét). a) Tính vận tốc tức thời của xe sau khi hãm phanh được $2\\text{ giây}$. b) Sau bao lâu kể từ lúc bắt đầu hãm phanh thì xe buýt dừng hẳn? c) Tính quãng đường hãm phanh an toàn mà xe buýt đã di chuyển cho tới khi dừng hẳn.",
                           "a) Vận tốc tức thời của xe buýt là đạo hàm của quãng đường: $v(t) = s'(t) = 15 - 3t$ (m/s). Sau 2 giây, vận tốc tức thời là: $v(2) = 15 - 3(2) = 9\\text{ m/s}$. b) Xe buýt dừng hẳn khi vận tốc tức thời bằng 0: $v(t) = 0 \\Leftrightarrow 15 - 3t = 0 \\Leftrightarrow t = 5\\text{ s}$. Vậy sau 5 giây xe dừng hẳn. c) Quãng đường hãm phanh xe đã di chuyển là: $s(5) = 15(5) - 1.5(5^2) = 75 - 1.5(25) = 75 - 37.5 = 37.5\\text{ m}$."),
                make_essay(4, "VDC", 0.5, "Tốc độ phản ứng hoá học tức thời",
                           "Trong một phản ứng hoá học phân huỷ chất phóng xạ, khối lượng chất còn lại (tính bằng gam) sau $t$ ngày được cho bởi hàm số $m(t) = 100 - 10t + 0.25t^2$ ($0 \\le t \\le 20$). a) Tốc độ phân huỷ tức thời của chất tại thời điểm $t$ là đạo hàm $v(t) = |m'(t)|$. Hãy tìm biểu thức $v(t)$. b) Tính tốc độ phân huỷ tại thời điểm ngày thứ 4. c) Tại ngày thứ mấy thì tốc độ phân huỷ của chất giảm về 0?",
                           "a) Ta có đạo hàm biểu thị tốc độ biến thiên khối lượng: $m'(t) = -10 + 0.5t$. Vì khối lượng giảm dần nên tốc độ phân huỷ tức thời là: $v(t) = -m'(t) = 10 - 0.5t$ (gam/ngày). b) Tại thời điểm $t = 4\\text{ ngày}$: $v(4) = 10 - 0.5(4) = 10 - 2 = 8\\text{ gam/ngày}$. c) Tốc độ phân huỷ giảm về 0 khi: $v(t) = 0 \\Leftrightarrow 10 - 0.5t = 0 \\Leftrightarrow 0.5t = 10 \\Leftrightarrow t = 20\\text{ ngày}$. Vậy tại ngày thứ 20 thì tốc độ phân huỷ giảm về 0.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 32:
        # BÀI 32: CÁC QUY TẮC TÍNH ĐẠO HÀM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đạo hàm của hàm số $y = x^n$ ($n \\in \\mathbb{N}^*$) là",
                         "$y' = n x^{n-1}$", "$y' = x^{n-1}$", "$y' = (n-1) x^n$", "$y' = n x^n$",
                         "A", "Công thức đạo hàm luỹ thừa: $(x^n)' = n x^{n-1}$."),
                make_mcq(2, "NB", "Đạo hàm của hàm số $y = \\sqrt{x}$ (với $x > 0$) là",
                         "$y' = \\frac{1}{2\\sqrt{x}}$", "$y' = \\frac{1}{\\sqrt{x}}$", "$y' = 2\\sqrt{x}$", "$y' = \\frac{2}{\\sqrt{x}}$",
                         "A", "Công thức SGK: $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$."),
                make_mcq(3, "NB", "Đạo hàm của hàm số lượng giác $y = \\sin x$ là",
                         "$y' = \\cos x$", "$y' = -\\cos x$", "$y' = \\sin x$", "$y' = -\\sin x$",
                         "A", "Công thức SGK: $(\\sin x)' = \\cos x$."),
                make_mcq(4, "NB", "Đạo hàm của hàm số lượng giác $y = \\cos x$ là",
                         "$y' = -\\sin x$", "$y' = \\sin x$", "$y' = -\\cos x$", "$y' = \\frac{1}{\\cos^2 x}$",
                         "A", "Công thức SGK: $(\\cos x)' = -\\sin x$."),
                make_mcq(5, "TH", "Đạo hàm của hàm số $y = 3x^4 - 2x^2 + 5$ là",
                         "$y' = 12x^3 - 4x$", "$y' = 12x^3 - 4x + 5$", "$y' = 7x^3 - 4x$", "$y' = 12x^4 - 4x^2$",
                         "A", "$y' = 3(4x^3) - 2(2x) + 0 = 12x^3 - 4x$."),
                make_mcq(6, "TH", "Đạo hàm của tích hai hàm số $(u \\cdot v)'$ bằng",
                         "$u'v + uv'$", "$u'v'$", "$u'v - uv'$", "$uv' - u'v$",
                         "A", "Quy tắc đạo hàm của tích: $(uv)' = u'v + uv'$."),
                make_mcq(7, "TH", "Đạo hàm của hàm số $y = \\tan x$ (với $x \\ne \\frac{\\pi}{2} + k\\pi$) bằng",
                         "$\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$",
                         "$-\\frac{1}{\\cos^2 x}$",
                         "$\\frac{1}{\\sin^2 x}$",
                         "$1 - \\tan^2 x$",
                         "A", "Công thức SGK: $(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$."),
                make_mcq(8, "TH", "Đạo hàm của hàm số $y = \\frac{1}{x}$ (với $x \\ne 0$) là",
                         "$-\\frac{1}{x^2}$", "$\\frac{1}{x^2}$", "$-\\frac{1}{x}$", "$\\ln |x|$",
                         "A", "Công thức SGK: $(1/x)' = -1/x^2$."),
                make_mcq(9, "VD", "Đạo hàm của hàm số $y = (2x + 1)^5$ là",
                         "$y' = 10(2x + 1)^4$", "$y' = 5(2x + 1)^4$", "$y' = 2(2x + 1)^4$", "$y' = 10(2x + 1)^5$",
                         "A", "Đạo hàm hàm hợp: $y' = 5(2x + 1)^4 \\cdot (2x + 1)' = 10(2x + 1)^4$."),
                make_mcq(10, "VD", "Đạo hàm của hàm số $y = \\frac{2x - 3}{x + 1}$ là",
                         "$y' = \\frac{5}{(x + 1)^2}$", "$y' = \\frac{-1}{(x + 1)^2}$", "$y' = \\frac{1}{(x + 1)^2}$", "$y' = \\frac{5}{x + 1}$",
                         "A", "$y' = \\frac{2(1) - (-3)(1)}{(x+1)^2} = \\frac{5}{(x+1)^2}$."),
                make_mcq(11, "VDC", "Đạo hàm của hàm số $y = \\sqrt{x^2 + 1}$ tại điểm $x = 1$ bằng",
                         "$\\frac{\\sqrt{2}}{2}$", "$\\sqrt{2}$", "$\\frac{1}{2}$", "1",
                         "A", "$y' = \\frac{2x}{2\\sqrt{x^2+1}} = \\frac{x}{\\sqrt{x^2+1}} \\Rightarrow y'(1) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."),
                make_mcq(12, "VDC", "Đạo hàm của hàm số $y = x \\sin x$ tại điểm $x = \\pi$ bằng",
                         "$-1$", "1", "0", "$-\\pi$",
                         "A", "$y' = \\sin x + x \\cos x \\Rightarrow y'(\\pi) = \\sin \\pi + \\pi \\cos \\pi = 0 + \\pi(-1) = -\\pi$! (Đáp án chính xác là $-\\pi$, phương án A là $-\\pi$).")
            ]
            # fix q12 correct
            mcqs[11] = make_mcq(12, "VDC", "Đạo hàm của hàm số $y = x \\sin x$ tại điểm $x = \\pi$ bằng",
                                "$-\\pi$", "$\\pi$", "0", "$-1$",
                                "A", "$y' = \\sin x + x \\cos x \\Rightarrow y'(\\pi) = \\sin \\pi + \\pi \\cos \\pi = 0 + \\pi(-1) = -\\pi$.")
            tfs = [
                make_tf(1, "Quy tắc đạo hàm của tổng, hiệu, tích, thương. Cho hai hàm số $u(x)$ và $v(x)$ có đạo hàm tại điểm $x$.", [
                    ("a", "$(u + v)' = u' + v'$.", True, "Quy tắc đạo hàm của tổng."),
                    ("b", "$(k \\cdot u)' = k \\cdot u'$ với $k$ là hằng số.", True, "Nhân với hằng số đưa ra ngoài đạo hàm."),
                    ("c", "$\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ với $v(x) \\ne 0$.", True, "Quy tắc đạo hàm của thương."),
                    ("d", "$(u \\cdot v)' = u' \\cdot v'$.", False, "Đạo hàm của tích là $u'v + uv'$, không phải $u'v'$.")
                ]),
                make_tf(2, "Đạo hàm của hàm số lượng giác và hàm hợp. Cho hàm số $y = \\cos(2x)$.", [
                    ("a", "Hàm số đã cho là một hàm hợp với $u = 2x$.", True, "Đúng."),
                    ("b", "Đạo hàm của hàm số là $y' = -\\sin(2x)$.", False, "Phải nhân với $u' = 2$, nên $y' = -2\\sin(2x)$."),
                    ("c", "Giá trị của đạo hàm tại $x = 0$ bằng $0$.", True, "$y'(0) = -2\\sin(0) = 0$."),
                    ("d", "Giá trị của đạo hàm tại $x = \\frac{\\pi}{4}$ bằng $-2$.", True, "$y'(\\pi/4) = -2\\sin(\\pi/2) = -2$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính đạo hàm của hàm số $y = x^5 - 4x^3 + 2$ tại $x = 1$.",
                        "-7", "$y' = 5x^4 - 12x^2 \\Rightarrow y'(1) = 5 - 12 = -7$."),
                make_sa(2, "TH", "Tính đạo hàm của hàm số $y = \\sin(3x)$ tại $x = 0$.",
                        "3", "$y' = 3\\cos(3x) \\Rightarrow y'(0) = 3$."),
                make_sa(3, "VD", "Tính đạo hàm của hàm số $y = \\frac{3x - 1}{x + 2}$ tại $x = 0$.",
                        "1.75", "$y' = \\frac{3(2) - (-1)(1)}{(x+2)^2} = \\frac{7}{(x+2)^2} \\Rightarrow y'(0) = \\frac{7}{4} = 1.75$."),
                make_sa(4, "VD", "Tính đạo hàm của hàm số $y = (3x - 2)^4$ tại $x = 1$.",
                        "12", "$y' = 4(3x - 2)^3 \\cdot 3 = 12(3x - 2)^3 \\Rightarrow y'(1) = 12(1) = 12$."),
                make_sa(5, "VDC", "Cho hàm số $y = \\sqrt{2x + 7}$. Tính giá trị của $y'(1)$ (viết dưới dạng số thập phân làm tròn 2 chữ số).",
                        "0.33", "$y' = \\frac{2}{2\\sqrt{2x+7}} = \\frac{1}{\\sqrt{2x+7}} \\Rightarrow y'(1) = \\frac{1}{\\sqrt{9}} = \\frac{1}{3} \\approx 0.33$."),
                make_sa(6, "VDC", "Tính đạo hàm của $f(x) = x^2 \\cos x$ tại $x = \\pi$ (làm tròn số nguyên).",
                        "-6", "$f'(x) = 2x\\cos x - x^2\\sin x \\Rightarrow f'(\\pi) = 2\\pi(-1) - 0 = -2\\pi \\approx -6.28$ (hoặc $-2\\pi$).")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Bảng công thức đạo hàm cơ bản",
                           "Viết công thức tính đạo hàm của các hàm số sau: a) $y = x^n$ ($n \\in \\mathbb{N}^*$). b) $y = \\sqrt{x}$ ($x > 0$). c) $y = \\sin x$. d) $y = \\cos x$.",
                           "a) $(x^n)' = n x^{n-1}$. b) $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$. c) $(\\sin x)' = \\cos x$. d) $(\\cos x)' = -\\sin x$."),
                make_essay(2, "TH", 0.5, "Tính đạo hàm của hàm phân thức hữu tỉ",
                           "Tính đạo hàm của các hàm số sau: a) $y = 2x^4 - 3x^2 + 7x - 1$. b) $y = \\frac{3x - 2}{x + 1}$.",
                           "a) $y' = (2x^4)' - (3x^2)' + (7x)' - (1)' = 8x^3 - 6x + 7$. b) Áp dụng quy tắc đạo hàm của thương $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$: $y' = \\frac{(3x - 2)'(x + 1) - (3x - 2)(x + 1)'}{(x + 1)^2} = \\frac{3(x + 1) - 1(3x - 2)}{(x + 1)^2} = \\frac{3x + 3 - 3x + 2}{(x + 1)^2} = \\frac{5}{(x + 1)^2}$."),
                make_essay(3, "VD", 0.5, "Quy tắc đạo hàm hàm hợp",
                           "Nêu quy tắc tính đạo hàm của hàm hợp $y = f(u)$ với $u = u(x)$. Áp dụng tính đạo hàm của hàm số: $y = (x^2 - 3x + 2)^5$.",
                           "1. Quy tắc: Nếu hàm số $u = u(x)$ có đạo hàm tại $x$ và hàm số $y = f(u)$ có đạo hàm tại $u$ thì hàm hợp $y = f(u(x))$ có đạo hàm tại $x$ và: $y'_x = y'_u \\cdot u'_x$. 2. Áp dụng: Đặt $u = x^2 - 3x + 2 \\Rightarrow u' = 2x - 3$. Hàm số trở thành $y = u^5 \\Rightarrow y'_u = 5u^4$. Khi đó: $y' = 5u^4 \\cdot u' = 5(x^2 - 3x + 2)^4 \\cdot (2x - 3) = 5(2x - 3)(x^2 - 3x + 2)^4$."),
                make_essay(4, "VDC", 0.5, "Tối ưu hoá chi phí sản xuất bằng đạo hàm",
                           "Một xưởng thủ công mỹ nghệ ước tính tổng chi phí (tính bằng triệu đồng) để sản xuất $x$ sản phẩm trong một ngày được mô tả bởi hàm chi phí: $C(x) = 0.02x^2 + 10x + 500$ ($x \\ge 1$). Khái niệm chi phí cận biên $C'(x)$ trong kinh tế học là đạo hàm của hàm chi phí, biểu thị chi phí phát sinh ước tính để sản xuất thêm 1 đơn vị sản phẩm tiếp theo. a) Tìm hàm chi phí cận biên $C'(x)$. b) Tính chi phí cận biên khi sản xuất mức $x = 100$ sản phẩm và nêu ý nghĩa kinh tế.",
                           "a) Chi phí cận biên là đạo hàm của hàm tổng chi phí: $C'(x) = (0.02x^2 + 10x + 500)' = 0.04x + 10$ (triệu đồng/sản phẩm). b) Khi sản xuất ở mức $x = 100$ sản phẩm: $C'(100) = 0.04(100) + 10 = 4 + 10 = 14$ triệu đồng. Ý nghĩa kinh tế: Khi xưởng đang sản xuất 100 sản phẩm/ngày, nếu muốn sản xuất thêm sản phẩm thứ 101 thì chi phí tăng thêm ước tính khoảng 14 triệu đồng. Chỉ số này giúp nhà quản lý quyết định có nên mở rộng quy mô sản xuất hay không.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Đạo hàm của hàm số $y = C \\cdot f(x)$ ($C$ là hằng số) bằng",
                         "$C \\cdot f'(x)$", "$f'(x)$", "$0$", "$C + f'(x)$",
                         "A", "Hằng số nhân đưa ra ngoài dấu đạo hàm."),
                make_mcq(2, "NB", "Đạo hàm của hàm số $y = \\cot x$ (với $x \\ne k\\pi$) là",
                         "$-\\frac{1}{\\sin^2 x}$", "$\\frac{1}{\\sin^2 x}$", "$-\\frac{1}{\\cos^2 x}$", "$1 + \\cot^2 x$",
                         "A", "Công thức SGK: $(\\cot x)' = -\\frac{1}{\\sin^2 x} = -(1 + \\cot^2 x)$."),
                make_mcq(3, "NB", "Nếu $y = f(u)$ và $u = u(x)$ thì công thức đạo hàm hàm hợp là",
                         "$y'_x = y'_u \\cdot u'_x$", "$y'_x = y'_u + u'_x$", "$y'_x = \\frac{y'_u}{u'_x}$", "$y'_x = y'_u$",
                         "A", "Công thức đạo hàm hàm hợp chuẩn: $y'_x = y'_u \\cdot u'_x$."),
                make_mcq(4, "NB", "Đạo hàm của hàm số $y = x^7$ bằng",
                         "$7x^6$", "$6x^7$", "$7x^7$", "$x^6$",
                         "A", "$(x^7)' = 7x^6$."),
                make_mcq(5, "TH", "Đạo hàm của hàm số $y = 5x^3 - 6x + 4$ là",
                         "$15x^2 - 6$", "$15x^2 - 6x$", "$5x^2 - 6$", "$15x^3 - 6$",
                         "A", "$y' = 15x^2 - 6$."),
                make_mcq(6, "TH", "Đạo hàm của hàm số $y = \\cos(3x)$ là",
                         "$-3\\sin(3x)$", "$3\\sin(3x)$", "$-\\sin(3x)$", "$-3\\cos(3x)$",
                         "A", "$y' = -\\sin(3x) \\cdot (3x)' = -3\\sin(3x)$."),
                make_mcq(7, "TH", "Đạo hàm của hàm số $y = \\sin(2x)$ là",
                         "$2\\cos(2x)$", "$-2\\cos(2x)$", "$\\cos(2x)$", "$2\\sin(2x)$",
                         "A", "$y' = \\cos(2x) \\cdot 2 = 2\\cos(2x)$."),
                make_mcq(8, "TH", "Đạo hàm của hàm số $y = \\frac{1}{2x + 1}$ là",
                         "$-\\frac{2}{(2x + 1)^2}$", "$\\frac{2}{(2x + 1)^2}$", "$-\\frac{1}{(2x + 1)^2}$", "$\\frac{1}{2x + 1}$",
                         "A", "$\\left(\\frac{1}{u}\\right)' = -\\frac{u'}{u^2} = -\\frac{2}{(2x+1)^2}$."),
                make_mcq(9, "VD", "Đạo hàm của hàm số $y = \\sqrt{3x - 2}$ là",
                         "$\\frac{3}{2\\sqrt{3x - 2}}$", "$\\frac{1}{2\\sqrt{3x - 2}}$", "$\\frac{3}{\\sqrt{3x - 2}}$", "$\\frac{1}{\\sqrt{3x - 2}}$",
                         "A", "$(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}} = \\frac{3}{2\\sqrt{3x - 2}}$."),
                make_mcq(10, "VD", "Đạo hàm của hàm số $y = \\frac{x^2 - 1}{x}$ tại $x = 1$ bằng",
                         "2", "0", "1", "-1",
                         "A", "$y = x - \\frac{1}{x} \\Rightarrow y' = 1 + \\frac{1}{x^2} \\Rightarrow y'(1) = 1 + 1 = 2$."),
                make_mcq(11, "VDC", "Cho hàm số $y = x^2 \\cos(2x)$. Giá trị của $y'(0)$ bằng",
                         "0", "1", "2", "-2",
                         "A", "$y' = 2x \\cos(2x) - 2x^2 \\sin(2x) \\Rightarrow y'(0) = 0$."),
                make_mcq(12, "VDC", "Đạo hàm của hàm số $y = \\sin^3 x$ là",
                         "$3\\sin^2 x \\cos x$", "$3\\sin^2 x$", "$\\cos^3 x$", "$-3\\sin^2 x \\cos x$",
                         "A", "$y' = 3\\sin^2 x \\cdot (\\sin x)' = 3\\sin^2 x \\cos x$.")
            ]
            tfs = [
                make_tf(1, "Quy tắc tính đạo hàm hàm căn thức và hàm phân thức. Cho hàm số $y = f(x) = \\sqrt{4x + 1}$.", [
                    ("a", "Tập xác định của hàm số là $D = [-\\frac{1}{4}; +\\infty)$.", True, "$4x + 1 \\ge 0 \\Leftrightarrow x \\ge -1/4$."),
                    ("b", "Hàm số có đạo hàm trên khoảng $(-\\frac{1}{4}; +\\infty)$.", True, "Tại mút thì không có đạo hàm hai phía."),
                    ("c", "Đạo hàm của hàm số là $f'(x) = \\frac{2}{\\sqrt{4x + 1}}$.", True, "$f'(x) = \\frac{4}{2\\sqrt{4x+1}} = \\frac{2}{\\sqrt{4x+1}}$."),
                    ("d", "Giá trị của đạo hàm tại $x = 2$ bằng $\\frac{2}{3}$.", True, "$f'(2) = \\frac{2}{\\sqrt{9}} = \\frac{2}{3}$.")
                ]),
                make_tf(2, "Quy tắc đạo hàm của tích. Cho hàm số $y = f(x) = (x + 1)\\sin x$.", [
                    ("a", "Áp dụng quy tắc đạo hàm của tích $(uv)' = u'v + uv'$.", True, "Đúng."),
                    ("b", "Đạo hàm của hàm số là $f'(x) = \\sin x + (x + 1)\\cos x$.", True, "$(x+1)'\\sin x + (x+1)(\\sin x)' = \\sin x + (x+1)\\cos x$."),
                    ("c", "Giá trị của đạo hàm tại $x = 0$ bằng $1$.", True, "$f'(0) = \\sin 0 + (0+1)\\cos 0 = 0 + 1(1) = 1$."),
                    ("d", "Giá trị của đạo hàm tại $x = \\frac{\\pi}{2}$ bằng $0$.", False, "$f'(\\pi/2) = \\sin(\\pi/2) + (\\pi/2 + 1)\\cos(\\pi/2) = 1 + 0 = 1 \\ne 0$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính đạo hàm của hàm số $y = 2x^3 - 9x^2 + 12x - 4$ tại $x = 1$.",
                        "0", "$y' = 6x^2 - 18x + 12 \\Rightarrow y'(1) = 6 - 18 + 12 = 0$."),
                make_sa(2, "TH", "Tính đạo hàm của $y = \\cos(4x)$ tại $x = 0$.",
                        "0", "$y' = -4\\sin(4x) \\Rightarrow y'(0) = 0$."),
                make_sa(3, "VD", "Tính đạo hàm của $y = (2x - 1)^3$ tại $x = 1$.",
                        "6", "$y' = 3(2x - 1)^2 \\cdot 2 = 6(2x - 1)^2 \\Rightarrow y'(1) = 6$."),
                make_sa(4, "VD", "Tính đạo hàm của hàm số $y = \\frac{x+2}{2x-1}$ tại $x = 1$.",
                        "-5", "$y' = \\frac{1(-1) - 2(2)}{(2x-1)^2} = \\frac{-5}{(2x-1)^2} \\Rightarrow y'(1) = -5$."),
                make_sa(5, "VDC", "Cho hàm số $y = \\sqrt{x^2 + 9}$. Tính giá trị đạo hàm tại $x = 4$.",
                        "0.8", "$y' = \\frac{x}{\\sqrt{x^2+9}} \\Rightarrow y'(4) = \\frac{4}{\\sqrt{25}} = \\frac{4}{5} = 0.8$."),
                make_sa(6, "VDC", "Tính đạo hàm của $y = \\tan(2x)$ tại $x = 0$.",
                        "2", "$y' = \\frac{2}{\\cos^2(2x)} \\Rightarrow y'(0) = 2$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc tính đạo hàm hàm thương",
                           "Viết công thức tính đạo hàm của thương hai hàm số $\\left(\\frac{u}{v}\\right)'$. Nêu rõ điều kiện áp dụng.",
                           "Công thức: $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$. Điều kiện: Các hàm số $u(x)$ và $v(x)$ đều có đạo hàm tại điểm $x$, và mẫu số $v(x) \\ne 0$."),
                make_essay(2, "TH", 0.5, "Tính đạo hàm của tích và thương",
                           "Tính đạo hàm của các hàm số sau: a) $y = x^2 \\cos x$. b) $y = \\frac{2x + 1}{x - 3}$.",
                           "a) Áp dụng quy tắc đạo hàm của tích $(uv)' = u'v + uv'$: $y' = (x^2)' \\cos x + x^2 (\\cos x)' = 2x \\cos x - x^2 \\sin x$. b) Áp dụng quy tắc đạo hàm của thương $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$: $y' = \\frac{(2x + 1)'(x - 3) - (2x + 1)(x - 3)'}{(x - 3)^2} = \\frac{2(x - 3) - 1(2x + 1)}{(x - 3)^2} = \\frac{2x - 6 - 2x - 1}{(x - 3)^2} = \\frac{-7}{(x - 3)^2}$."),
                make_essay(3, "VD", 0.5, "Tính đạo hàm của hàm hợp lượng giác",
                           "Cho hàm số $y = \\sin(3x^2 - 1)$. Hãy áp dụng quy tắc đạo hàm hàm hợp để tính $y'$ và tính giá trị của $y'$ tại $x = 0$.",
                           "Đặt $u = 3x^2 - 1 \\Rightarrow u' = 6x$. Hàm số có dạng $y = \\sin u$. Đạo hàm hàm hợp: $y' = (\\sin u)'_u \\cdot u'_x = \\cos u \\cdot u' = \\cos(3x^2 - 1) \\cdot (6x) = 6x \\cos(3x^2 - 1)$. Tại $x = 0$: $y'(0) = 6(0) \\cos(0 - 1) = 0$."),
                make_essay(4, "VDC", 0.5, "Bài toán chi phí vận hành tàu thủy tối ưu",
                           "Chi phí nhiên liệu của một chiếc tàu thủy khi chạy với vận tốc $v$ (hải lý/giờ) trong một hải trình dài $100$ hải lý được cho bởi hàm số: $C(v) = 2v + \\frac{5000}{v}$ (nghìn đồng, $v > 0$). a) Tính đạo hàm $C'(v)$. b) Tìm vận tốc $v$ để chi phí nhiên liệu của chuyến đi đạt mức thấp nhất (tại điểm đạo hàm triệt tiêu $C'(v) = 0$).",
                           "a) Đạo hàm của hàm chi phí theo vận tốc $v$: $C'(v) = \\left(2v + \\frac{5000}{v}\\right)' = 2 - \\frac{5000}{v^2}$. b) Chi phí đạt giá trị cực tiểu khi $C'(v) = 0$: $2 - \\frac{5000}{v^2} = 0 \\Leftrightarrow \\frac{5000}{v^2} = 2 \\Leftrightarrow 2v^2 = 5000 \\Leftrightarrow v^2 = 2500 \\Leftrightarrow v = 50$ (do vận tốc $v > 0$). Vậy tàu thủy nên duy trì vận tốc 50 hải lý/giờ để chi phí nhiên liệu tiết kiệm nhất.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 33:
        # BÀI 33: ĐẠO HÀM CẤP HAI
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đạo hàm cấp hai của hàm số $y = f(x)$ là",
                         "Đạo hàm của đạo hàm cấp một: $f''(x) = (f'(x))'$",
                         "Bình phương đạo hàm cấp một: $(f'(x))^2$",
                         "Đạo hàm của hàm số $y = f(2x)$",
                         "Đạo hàm hai lần tích $2f'(x)$",
                         "A", "Định nghĩa SGK: Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một, kí hiệu $f''(x) = (f'(x))'$."),
                make_mcq(2, "NB", "Ý nghĩa cơ học của đạo hàm cấp hai: Gia tốc tức thời $a(t)$ của chuyển động thẳng có phương trình $s(t)$ là",
                         "$a(t) = v'(t) = s''(t)$",
                         "$a(t) = s'(t)$",
                         "$a(t) = [s'(t)]^2$",
                         "$a(t) = \\frac{s(t)}{t^2}$",
                         "A", "Định lý: Gia tốc tức thời là đạo hàm cấp hai của phương trình chuyển động: $a(t) = s''(t)$."),
                make_mcq(3, "NB", "Kí hiệu của đạo hàm cấp hai của hàm số $y = f(x)$ là",
                         "$y''$ hoặc $f''(x)$", "$y'$", "$y^{(3)}$", "$f^2(x)$",
                         "A", "Kí hiệu đạo hàm cấp hai là $y''$ hoặc $f''(x)$."),
                make_mcq(4, "NB", "Đạo hàm cấp hai của hàm số bậc hai $y = ax^2 + bx + c$ ($a \\ne 0$) bằng",
                         "$2a$", "$2ax + b$", "$a$", "0",
                         "A", "$y' = 2ax + b \\Rightarrow y'' = 2a$."),
                make_mcq(5, "TH", "Cho hàm số $y = x^4 - 2x^3 + 5x$. Đạo hàm cấp hai $y''$ là",
                         "$y'' = 12x^2 - 12x$", "$y'' = 4x^3 - 6x^2 + 5$", "$y'' = 12x^2 - 6x$", "$y'' = 24x - 12$",
                         "A", "$y' = 4x^3 - 6x^2 + 5 \\Rightarrow y'' = 12x^2 - 12x$."),
                make_mcq(6, "TH", "Đạo hàm cấp hai của hàm số $y = \\sin x$ là",
                         "$y'' = -\\sin x$", "$y'' = \\sin x$", "$y'' = -\\cos x$", "$y'' = \\cos x$",
                         "A", "$y' = \\cos x \\Rightarrow y'' = -\\sin x$."),
                make_mcq(7, "TH", "Đạo hàm cấp hai của hàm số $y = \\cos x$ là",
                         "$y'' = -\\cos x$", "$y'' = \\cos x$", "$y'' = -\\sin x$", "$y'' = \\sin x$",
                         "A", "$y' = -\\sin x \\Rightarrow y'' = -\\cos x$."),
                make_mcq(8, "TH", "Một vật chuyển động thẳng có phương trình $s(t) = 2t^3 - 3t^2 + t$. Gia tốc tức thời của vật tại thời điểm $t = 2\\text{ s}$ bằng",
                         "$18\\text{ m/s}^2$", "$12\\text{ m/s}^2$", "$24\\text{ m/s}^2$", "$6\\text{ m/s}^2$",
                         "A", "$v(t) = 6t^2 - 6t + 1 \\Rightarrow a(t) = 12t - 6$. Tại $t = 2$: $a(2) = 12(2) - 6 = 18\\text{ m/s}^2$."),
                make_mcq(9, "VD", "Cho hàm số $y = \\frac{1}{x}$. Đạo hàm cấp hai của hàm số là",
                         "$y'' = \\frac{2}{x^3}$", "$y'' = -\\frac{2}{x^3}$", "$y'' = \\frac{1}{x^3}$", "$y'' = -\\frac{1}{x^2}$",
                         "A", "$y' = -\\frac{1}{x^2} = -x^{-2} \\Rightarrow y'' = -(-2)x^{-3} = \\frac{2}{x^3}$."),
                make_mcq(10, "VD", "Cho hàm số $f(x) = x^3 - 6x^2 + 9x$. Điểm uốn của đồ thị hàm số có hoành độ là nghiệm của phương trình $f''(x) = 0$. Hoành độ đó bằng",
                         "2", "3", "1", "0",
                         "A", "$f'(x) = 3x^2 - 12x + 9 \\Rightarrow f''(x) = 6x - 12 = 0 \\Rightarrow x = 2$."),
                make_mcq(11, "VDC", "Một vật dao động điều hoà có phương trình li độ $x(t) = 4\\cos(2t + \\frac{\\pi}{3})$ (cm). Gia tốc của vật tại thời điểm $t$ có biểu thức là",
                         "$a(t) = -16\\cos(2t + \\frac{\\pi}{3})$",
                         "$a(t) = -8\\sin(2t + \\frac{\\pi}{3})$",
                         "$a(t) = 16\\cos(2t + \\frac{\\pi}{3})$",
                         "$a(t) = -4\\cos(2t + \\frac{\\pi}{3})$",
                         "A", "$v(t) = x'(t) = -8\\sin(2t + \\pi/3) \\Rightarrow a(t) = v'(t) = -16\\cos(2t + \\pi/3)$."),
                make_mcq(12, "VDC", "Một chất điểm chuyển động thẳng với gia tốc không đổi $a = 4\\text{ m/s}^2$. Vận tốc ban đầu $v_0 = 3\\text{ m/s}$. Phương trình quãng đường $s(t)$ (với $s(0) = 0$) có dạng",
                         "$s(t) = 2t^2 + 3t$", "$s(t) = 4t^2 + 3t$", "$s(t) = 2t^2$", "$s(t) = t^2 + 3t$",
                         "A", "$s''(t) = a = 4 \\Rightarrow s'(t) = 4t + v_0 = 4t + 3 \\Rightarrow s(t) = 2t^2 + 3t$.")
            ]
            tfs = [
                make_tf(1, "Tính chất đạo hàm cấp hai. Cho hàm số $f(x) = x^4 - 6x^2 + 5$.", [
                    ("a", "Đạo hàm cấp một là $f'(x) = 4x^3 - 12x$.", True, "Đúng."),
                    ("b", "Đạo hàm cấp hai là $f''(x) = 12x^2 - 12$.", True, "Đúng."),
                    ("c", "Phương trình $f''(x) = 0$ có 2 nghiệm phân biệt là $x = \\pm 1$.", True, "$12x^2 - 12 = 0 \\Leftrightarrow x^2 = 1 \\Leftrightarrow x = \\pm 1$."),
                    ("d", "Giá trị của $f''(0)$ bằng $12$.", False, "$f''(0) = 12(0) - 12 = -12 \\ne 12$.")
                ]),
                make_tf(2, "Ý nghĩa cơ học của đạo hàm cấp hai. Một ô tô chuyển động nhanh dần đều với phương trình quãng đường $s(t) = t^3 + 2t^2$ ($s$ tính bằng mét, $t$ tính bằng giây).", [
                    ("a", "Vận tốc tức thời của ô tô là $v(t) = s'(t) = 3t^2 + 4t$.", True, "Đúng."),
                    ("b", "Gia tốc tức thời của ô tô là $a(t) = s''(t) = 6t + 4$.", True, "Đạo hàm cấp hai của quãng đường."),
                    ("c", "Gia tốc của xe tại thời điểm bắt đầu chuyển động ($t = 0$) bằng $4\\text{ m/s}^2$.", True, "$a(0) = 6(0) + 4 = 4\\text{ m/s}^2$."),
                    ("d", "Tại thời điểm $t = 3\\text{ s}$, gia tốc của xe là $18\\text{ m/s}^2$.", False, "$a(3) = 6(3) + 4 = 22\\text{ m/s}^2 \\ne 18$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hàm số $y = 2x^3 - 5x^2 + 7$. Tính giá trị của đạo hàm cấp hai $y''(1)$.",
                        "2", "$y' = 6x^2 - 10x \\Rightarrow y'' = 12x - 10 \\Rightarrow y''(1) = 2$."),
                make_sa(2, "TH", "Tính đạo hàm cấp hai của hàm số $y = \\cos(2x)$ tại $x = 0$.",
                        "-4", "$y' = -2\\sin(2x) \\Rightarrow y'' = -4\\cos(2x) \\Rightarrow y''(0) = -4$."),
                make_sa(3, "VD", "Một hạt chuyển động có phương trình $s(t) = t^3 - 6t^2 + 9t$. Tính gia tốc của hạt tại thời điểm vận tốc triệt tiêu lần thứ nhất (tức tại điểm cực trị đầu tiên).",
                        "-6", "$v(t) = 3t^2 - 12t + 9 = 0 \\Rightarrow t = 1, t = 3$. Tại $t = 1$: $a(t) = 6t - 12 \\Rightarrow a(1) = -6\\text{ m/s}^2$."),
                make_sa(4, "VD", "Cho hàm số $f(x) = x^4 - 4x^3$. Tìm nghiệm dương của phương trình $f''(x) = 0$.",
                        "2", "$f'(x) = 4x^3 - 12x^2 \\Rightarrow f''(x) = 12x^2 - 24x = 12x(x - 2) = 0 \\Rightarrow x = 2$."),
                make_sa(5, "VDC", "Một con lắc lò xo dao động với phương trình $x(t) = 5\\cos(10t)$ (cm). Tính độ lớn gia tốc cực đại của con lắc (m/s$^2$).",
                        "5", "$a(t) = x''(t) = -500\\cos(10t)\\text{ cm/s}^2 = -5\\cos(10t)\\text{ m/s}^2 \\Rightarrow a_{max} = 5\\text{ m/s}^2$."),
                make_sa(6, "VDC", "Một đoàn tàu đang chạy chậm dần đều vào ga có gia tốc $a(t) = -0.5\\text{ m/s}^2$ không đổi. Nếu vận tốc ban đầu là $10\\text{ m/s}$, sau bao nhiêu giây thì tàu dừng hẳn?",
                        "20", "$v(t) = 10 - 0.5t = 0 \\Rightarrow t = 20\\text{ s}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa đạo hàm cấp hai",
                           "Nêu định nghĩa đạo hàm cấp hai của hàm số $y = f(x)$. Nêu ý nghĩa vật lý của đạo hàm cấp hai.",
                           "1. Định nghĩa: Giả sử hàm số $y = f(x)$ có đạo hàm $f'(x)$ trên khoảng $(a; b)$. Nếu hàm số $f'(x)$ lại có đạo hàm trên $(a; b)$ thì đạo hàm của $f'(x)$ được gọi là đạo hàm cấp hai của $f(x)$, kí hiệu là $f''(x)$ hoặc $y''$: $f''(x) = (f'(x))'$. 2. Ý nghĩa vật lý: Trong chuyển động thẳng có phương trình quãng đường $s = s(t)$, đạo hàm cấp hai của quãng đường theo thời gian biểu thị gia tốc tức thời của chuyển động: $a(t) = s''(t)$."),
                make_essay(2, "TH", 0.5, "Tính đạo hàm cấp hai của hàm đa thức và lượng giác",
                           "Tính đạo hàm cấp hai của các hàm số sau: a) $y = x^5 - 3x^3 + 2x - 7$. b) $y = \\cos(3x)$.",
                           "a) Đạo hàm cấp một: $y' = (x^5 - 3x^3 + 2x - 7)' = 5x^4 - 9x^2 + 2$. Đạo hàm cấp hai: $y'' = (5x^4 - 9x^2 + 2)' = 20x^3 - 18x$. b) Đạo hàm cấp một: $y' = (\\cos(3x))' = -\\sin(3x) \\cdot (3x)' = -3\\sin(3x)$. Đạo hàm cấp hai: $y'' = (-3\\sin(3x))' = -3\\cos(3x) \\cdot (3x)' = -9\\cos(3x)$."),
                make_essay(3, "VD", 0.5, "Tính gia tốc tức thời trong chuyển động thẳng",
                           "Một vật chuyển động thẳng có phương trình quãng đường được xác định bởi: $s(t) = t^3 - 3t^2 + 5t + 2$ (trong đó $t$ tính bằng giây, quãng đường $s$ tính bằng mét). a) Tìm biểu thức vận tốc tức thời $v(t)$ và gia tốc tức thời $a(t)$ của vật tại thời điểm $t$. b) Tính vận tốc và gia tốc tức thời của vật tại thời điểm $t = 3\\text{ giây}$. c) Tìm thời điểm mà tại đó gia tốc của vật triệt tiêu ($a(t) = 0$).",
                           "a) Biểu thức vận tốc tức thời: $v(t) = s'(t) = 3t^2 - 6t + 5$ (m/s). Biểu thức gia tốc tức thời: $a(t) = s''(t) = v'(t) = (3t^2 - 6t + 5)' = 6t - 6$ (m/s$^2$). b) Tại $t = 3\\text{ giây}$: - Vận tốc tức thời: $v(3) = 3(3^2) - 6(3) + 5 = 27 - 18 + 5 = 14\\text{ m/s}$. - Gia tốc tức thời: $a(3) = 6(3) - 6 = 12\\text{ m/s}^2$. c) Gia tốc của vật triệt tiêu khi: $a(t) = 0 \\Leftrightarrow 6t - 6 = 0 \\Leftrightarrow t = 1\\text{ giây}$. Vậy tại thời điểm 1 giây, gia tốc của vật bằng 0."),
                make_essay(4, "VDC", 0.5, "Phân tích chuyển động phóng tên lửa",
                           "Trong giai đoạn đầu của quá trình phóng một tên lửa nghiên cứu khí quyển, độ cao của tên lửa sau $t$ giây kể từ lúc rời bệ phóng được cho bởi hàm số: $h(t) = t^3 + 10t^2$ (độ cao $h$ tính bằng mét, thời gian $t$ tính bằng giây, $0 \\le t \\le 20$). a) Hãy xác định hàm gia tốc tức thời $a(t) = h''(t)$ của tên lửa. b) Sau bao lâu kể từ lúc phóng thì tên lửa đạt gia tốc $100\\text{ m/s}^2$? c) Tính độ cao của tên lửa tại thời điểm tên lửa đạt gia tốc $100\\text{ m/s}^2$.",
                           "a) Vận tốc tức thời của tên lửa: $v(t) = h'(t) = (t^3 + 10t^2)' = 3t^2 + 20t$ (m/s). Gia tốc tức thời của tên lửa: $a(t) = h''(t) = (3t^2 + 20t)' = 6t + 20$ (m/s$^2$). b) Tên lửa đạt gia tốc $100\\text{ m/s}^2$ khi: $a(t) = 100 \\Leftrightarrow 6t + 20 = 100 \\Leftrightarrow 6t = 80 \\Leftrightarrow t = \\frac{40}{3} \\approx 13.33\\text{ giây}$. c) Độ cao của tên lửa tại thời điểm $t = \\frac{40}{3}\\text{ s}$ là: $h\\left(\\frac{40}{3}\\right) = \\left(\\frac{40}{3}\\right)^3 + 10\\left(\\frac{40}{3}\\right)^2 = \\frac{64000}{27} + \\frac{16000}{9} = \\frac{64000 + 48000}{27} = \\frac{112000}{27} \\approx 4148.15\\text{ m}$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Đạo hàm cấp hai của hàm số $y = x^3$ là",
                         "$6x$", "$3x^2$", "$6$", "$x$",
                         "A", "$y' = 3x^2 \\Rightarrow y'' = 6x$."),
                make_mcq(2, "NB", "Đạo hàm cấp hai của hàm hằng $y = 10$ bằng",
                         "0", "10", "1", "Không tồn tại",
                         "A", "$y' = 0 \\Rightarrow y'' = 0$."),
                make_mcq(3, "NB", "Nếu phương trình chuyển động thẳng là $s(t) = v_0 t + \\frac{1}{2}at^2$ ($a, v_0$ là hằng số) thì gia tốc $s''(t)$ bằng",
                         "$a$", "$at$", "$v_0$", "$at + v_0$",
                         "A", "$s'(t) = v_0 + at \\Rightarrow s''(t) = a$."),
                make_mcq(4, "NB", "Đạo hàm cấp hai của hàm số bậc nhất $y = ax + b$ bằng",
                         "0", "$a$", "$b$", "1",
                         "A", "$y' = a \\Rightarrow y'' = 0$."),
                make_mcq(5, "TH", "Cho hàm số $y = 3x^4 - 5x^2$. Đạo hàm cấp hai của hàm số là",
                         "$36x^2 - 10$", "$12x^3 - 10x$", "$36x^3 - 10$", "$12x^2 - 10$",
                         "A", "$y' = 12x^3 - 10x \\Rightarrow y'' = 36x^2 - 10$."),
                make_mcq(6, "TH", "Đạo hàm cấp hai của hàm số $y = \\sin(2x)$ là",
                         "$-4\\sin(2x)$", "$4\\sin(2x)$", "$-2\\sin(2x)$", "$4\\cos(2x)$",
                         "A", "$y' = 2\\cos(2x) \\Rightarrow y'' = -4\\sin(2x)$."),
                make_mcq(7, "TH", "Đạo hàm cấp hai của hàm số $y = \\cos(2x)$ là",
                         "$-4\\cos(2x)$", "$4\\cos(2x)$", "$-2\\cos(2x)$", "$4\\sin(2x)$",
                         "A", "$y' = -2\\sin(2x) \\Rightarrow y'' = -4\\cos(2x)$."),
                make_mcq(8, "TH", "Một vật chuyển động có phương trình $s(t) = 3t^3 - 4t^2$. Gia tốc tại $t = 1\\text{ s}$ bằng",
                         "$10\\text{ m/s}^2$", "$9\\text{ m/s}^2$", "$18\\text{ m/s}^2$", "$8\\text{ m/s}^2$",
                         "A", "$v(t) = 9t^2 - 8t \\Rightarrow a(t) = 18t - 8 \\Rightarrow a(1) = 10\\text{ m/s}^2$."),
                make_mcq(9, "VD", "Cho hàm số $y = \\sqrt{x}$. Đạo hàm cấp hai của hàm số là",
                         "$-\\frac{1}{4x\\sqrt{x}}$", "$\\frac{1}{4x\\sqrt{x}}$", "$-\\frac{1}{2\\sqrt{x}}$", "$\\frac{1}{2\\sqrt{x}}$",
                         "A", "$y' = \\frac{1}{2} x^{-1/2} \\Rightarrow y'' = -\\frac{1}{4} x^{-3/2} = -\\frac{1}{4x\\sqrt{x}}$."),
                make_mcq(10, "VD", "Cho hàm số $f(x) = x^4 - 2x^2$. Giá trị của $f''(2)$ bằng",
                         "44", "48", "24", "12",
                         "A", "$f'(x) = 4x^3 - 4x \\Rightarrow f''(x) = 12x^2 - 4 \\Rightarrow f''(2) = 12(4) - 4 = 44$."),
                make_mcq(11, "VDC", "Một con lắc dao động theo phương trình $s(t) = 2\\sin(5t)$. Khi li độ $s = 2\\text{ cm}$, gia tốc $a(t) = s''(t)$ có giá trị bằng",
                         "$-50\\text{ cm/s}^2$", "$50\\text{ cm/s}^2$", "$-25\\text{ cm/s}^2$", "$-10\\text{ cm/s}^2$",
                         "A", "$s''(t) = -50\\sin(5t) = -25s(t)$. Khi $s = 2$, $a = -25 \\times 2 = -50\\text{ cm/s}^2$."),
                make_mcq(12, "VDC", "Một đoàn tàu chở hàng hãm phanh có gia tốc hãm phụ thuộc thời gian $a(t) = -0.2t$ ($\text{m/s}^2$). Biết vận tốc ban đầu $v_0 = 10\\text{ m/s}$. Sau 10 giây hãm phanh, vận tốc của đoàn tàu bằng",
                         "$0\\text{ m/s}$", "$2\\text{ m/s}$", "$5\\text{ m/s}$", "$8\\text{ m/s}$",
                         "A", "$v(t) = 10 - 0.1t^2 \\Rightarrow v(10) = 10 - 0.1(100) = 0\\text{ m/s}$ (tàu dừng lại đúng lúc).")
            ]
            tfs = [
                make_tf(1, "Khảo sát đạo hàm cấp hai của hàm số lượng giác. Cho hàm số $f(x) = \\sin(3x)$.", [
                    ("a", "Đạo hàm cấp một của hàm số là $f'(x) = 3\\cos(3x)$.", True, "Đúng."),
                    ("b", "Đạo hàm cấp hai của hàm số là $f''(x) = -9\\sin(3x)$.", True, "Đúng."),
                    ("c", "Đẳng thức $f''(x) + 9f(x) = 0$ đúng với mọi $x \\in \\mathbb{R}$.", True, "$-9\\sin(3x) + 9\\sin(3x) = 0$."),
                    ("d", "Giá trị của $f''(\\frac{\\pi}{6})$ bằng $9$.", False, "$f''(\\pi/6) = -9\\sin(\\pi/2) = -9 \\ne 9$.")
                ]),
                make_tf(2, "Gia tốc trong chuyển động thẳng biến đổi đều. Phương trình chuyển động của một vật là $s(t) = 5t^2 + 2t + 1$ ($t \\ge 0$, đơn vị giây và mét).", [
                    ("a", "Vận tốc tức thời của vật là hàm bậc nhất theo thời gian $v(t) = 10t + 2$.", True, "Đúng."),
                    ("b", "Gia tốc của vật là một hằng số $a(t) = 10\\text{ m/s}^2$.", True, "$s''(t) = 10$."),
                    ("c", "Chuyển động của vật là chuyển động thẳng nhanh dần đều.", True, "Gia tốc dương và cùng dấu vận tốc."),
                    ("d", "Tại thời điểm $t = 5\\text{ s}$, gia tốc của vật tăng lên $50\\text{ m/s}^2$.", False, "Gia tốc không đổi bằng $10\\text{ m/s}^2$ ở mọi thời điểm.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho $y = x^5$. Tính đạo hàm cấp hai $y''(1)$.",
                        "20", "$y' = 5x^4 \\Rightarrow y'' = 20x^3 \\Rightarrow y''(1) = 20$."),
                make_sa(2, "TH", "Cho $y = \\cos(4x)$. Tính $y''(0)$.",
                        "-16", "$y' = -4\\sin(4x) \\Rightarrow y'' = -16\\cos(4x) \\Rightarrow y''(0) = -16$."),
                make_sa(3, "VD", "Một ô tô có phương trình chuyển động $s(t) = 2t^3 - 9t^2 + 12t$. Tính gia tốc tại thời điểm $t = 3\\text{ s}$.",
                        "18", "$v(t) = 6t^2 - 18t + 12 \\Rightarrow a(t) = 12t - 18 \\Rightarrow a(3) = 18\\text{ m/s}^2$."),
                make_sa(4, "VD", "Cho hàm số $f(x) = x^4 - 6x^2$. Tính nghiệm dương của phương trình $f''(x) = 0$.",
                        "1", "$f'(x) = 4x^3 - 12x \\Rightarrow f''(x) = 12x^2 - 12 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = 1$."),
                make_sa(5, "VDC", "Một con lắc dao động có phương trình $x(t) = 4\\sin(5t)$. Tìm độ lớn gia tốc cực đại của con lắc (m/s$^2$).",
                        "1", "$a(t) = -100\\sin(5t)\\text{ cm/s}^2 = -1\\sin(5t)\\text{ m/s}^2 \\Rightarrow a_{max} = 1\\text{ m/s}^2$."),
                make_sa(6, "VDC", "Một quả tên lửa đồ chơi bay lên với phương trình $h(t) = 30t - 5t^2$. Tính gia tốc của quả tên lửa tại thời điểm nó đạt độ cao cực đại.",
                        "-10", "$h''(t) = -10\\text{ m/s}^2$ không đổi suốt quá trình bay.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu ý nghĩa vật lý của đạo hàm cấp một và cấp hai",
                           "Nêu rõ mối liên hệ giữa hàm quãng đường $s(t)$, hàm vận tốc tức thời $v(t)$ và hàm gia tốc tức thời $a(t)$ trong chuyển động thẳng của một chất điểm.",
                           "Trong chuyển động thẳng có phương trình quãng đường $s(t)$: 1. Vận tốc tức thời tại thời điểm $t$ là đạo hàm cấp một của quãng đường theo thời gian: $v(t) = s'(t)$. 2. Gia tốc tức thời tại thời điểm $t$ là đạo hàm cấp một của vận tốc, đồng thời là đạo hàm cấp hai của quãng đường theo thời gian: $a(t) = v'(t) = s''(t)$."),
                make_essay(2, "TH", 0.5, "Tính đạo hàm cấp hai của hàm lượng giác và đa thức",
                           "Tính đạo hàm cấp hai của các hàm số sau: a) $y = 3x^4 - 5x^3 + x^2 - 1$. b) $y = \\sin(4x)$.",
                           "a) $y' = (3x^4 - 5x^3 + x^2 - 1)' = 12x^3 - 15x^2 + 2x$. $y'' = (12x^3 - 15x^2 + 2x)' = 36x^2 - 30x + 2$. b) $y' = (\\sin(4x))' = 4\\cos(4x)$. $y'' = (4\\cos(4x))' = 4 \\cdot (-4\\sin(4x)) = -16\\sin(4x)$."),
                make_essay(3, "VD", 0.5, "Khảo sát gia tốc và vận tốc chuyển động của hạt",
                           "Một hạt mang điện tích chuyển động trong điện trường theo đường thẳng với phương trình toạ độ: $s(t) = 2t^3 - 6t^2 + 10$ ($s$ tính bằng cm, $t$ tính bằng giây). a) Tìm biểu thức vận tốc $v(t)$ và gia tốc $a(t)$ của hạt. b) Tìm thời điểm hạt dừng lại tức thời (vận tốc bằng 0). c) Tính gia tốc của hạt tại thời điểm hạt dừng lại tức thời (nghiệm $t > 0$).",
                           "a) Vận tốc tức thời: $v(t) = s'(t) = 6t^2 - 12t$ (cm/s). Gia tốc tức thời: $a(t) = s''(t) = 12t - 12$ (cm/s$^2$). b) Hạt dừng lại tức thời khi $v(t) = 0 \\Leftrightarrow 6t^2 - 12t = 0 \\Leftrightarrow 6t(t - 2) = 0 \\Leftrightarrow t = 0$ hoặc $t = 2$ giây. c) Tại thời điểm dừng lại tức thời $t = 2\\text{ giây}$, gia tốc của hạt là: $a(2) = 12(2) - 12 = 12\\text{ cm/s}^2$."),
                make_essay(4, "VDC", 0.5, "Phân tích an toàn khi tàu điện cao tốc dừng khẩn cấp",
                           "Một đoàn tàu điện cao tốc đang chạy đều thì nhận tín hiệu dừng khẩn cấp. Quãng đường tàu chạy được kể từ lúc hãm phanh khẩn cấp là: $s(t) = 60t - 1.5t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). a) Xác định gia tốc hãm phanh $a(t) = s''(t)$ của tàu điện. Nhận xét về tính chất gia tốc hãm. b) Sau bao lâu thì đoàn tàu dừng hẳn? c) Để đảm bảo hành khách không bị chấn thương do quán tính giật cục, quy chuẩn an toàn yêu cầu độ lớn gia tốc hãm không được vượt quá $4\\text{ m/s}^2$. Hệ thống phanh khẩn cấp này có đảm bảo tiêu chuẩn an toàn cho hành khách không?",
                           "a) Vận tốc của đoàn tàu là: $v(t) = s'(t) = 60 - 3t$ (m/s). Gia tốc hãm phanh là: $a(t) = s''(t) = (60 - 3t)' = -3\\text{ m/s}^2$. Nhận xét: Gia tốc hãm là một hằng số âm ($a = -3\\text{ m/s}^2$), chứng tỏ tàu chuyển động chậm dần đều với gia tốc hãm không đổi. b) Tàu dừng hẳn khi $v(t) = 0 \\Leftrightarrow 60 - 3t = 0 \\Leftrightarrow t = 20\\text{ giây}$. Vậy sau 20 giây đoàn tàu dừng hẳn. c) Độ lớn của gia tốc hãm thực tế là $|a| = |-3| = 3\\text{ m/s}^2$. Vì $3\\text{ m/s}^2 < 4\\text{ m/s}^2$ nên hệ thống phanh khẩn cấp này hoàn toàn thoả mãn tiêu chuẩn an toàn cho hành khách.")
            ]
            return mcqs, tfs, sas, essays

    return None
