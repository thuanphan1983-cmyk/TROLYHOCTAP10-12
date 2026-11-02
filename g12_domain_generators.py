# -*- coding: utf-8 -*-
import sys, math
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa

def rep(s, k):
    if not isinstance(s, str):
        return s
    return (s.replace("{k}", str(k))
             .replace("{k+1}", str(k + 1))
             .replace("{k+2}", str(k + 2))
             .replace("{1+k}", str(1 + k))
             .replace("{2+k}", str(2 + k))
             .replace("{4+k}", str(4 + k))
             .replace("{2*k}", str(2 * k))
             .replace("{3*k}", str(3 * k))
             .replace("{4*k}", str(4 * k))
             .replace("{1-k}", str(1 - k))
             .replace("{3-k}", str(3 - k))
             .replace("{2*k - 1}", str(2 * k - 1))
             .replace("{2*k - 5}", str(2 * k - 5))
             .replace("{2 - 2*k}", str(2 - 2 * k))
             .replace("{2*k + 2}", str(2 * k + 2))
             .replace("{8 - 4*k}", str(8 - 4 * k)))

def q_mcq(q_id, level, text, a, b, c, d, correct, explain, k):
    return make_mcq(q_id, level, rep(text, k), rep(a, k), rep(b, k), rep(c, k), rep(d, k), correct, rep(explain, k))

def q_tf(q_id, context, items, k):
    c_items = []
    for it in items:
        c_items.append((it[0], rep(it[1], k), it[2], rep(it[3], k)))
    return make_tf(q_id, rep(context, k), c_items)

def q_sa(q_id, level, text, ans, explain, k):
    return make_sa(q_id, level, rep(text, k), rep(str(ans), k), rep(explain, k))

def build_domain_questions(lnum, title, domain, keywords, exam_idx):
    k = exam_idx
    mcqs = []
    tfs = []
    sas = []

    if domain == "Hàm số": # Bài 3, 4, 5
        if lnum == 3: # Tiệm cận
            mcqs = [
                q_mcq(1, "NB", "Tiệm cận đứng của đồ thị hàm số $y = \\frac{2x + 1}{x - {1+k}}$ là đường thẳng:", "$x = {1+k}$", "$y = 2$", "$x = -{1+k}$", "$y = {1+k}$", "A", "Nghiệm mẫu số là $x = {1+k}$.", k),
                q_mcq(2, "NB", "Tiệm cận ngang của đồ thị hàm số $y = \\frac{{2+k}x - 1}{x + 3}$ là đường thẳng:", "$y = {2+k}$", "$x = -3$", "$y = 1$", "$x = {2+k}$", "A", "$\\lim_{x \\to \\pm\\infty} y = {2+k}$.", k),
                q_mcq(3, "NB", "Đồ thị hàm số $y = \\frac{x^2 + 2x - 3}{x - 1}$ có bao nhiêu đường tiệm cận đứng?", "0", "1", "2", "3", "A", "$y = \\frac{(x-1)(x+3)}{x-1} = x + 3$ với $x \\ne 1$. Khử được mẫu số nên không có tiệm cận đứng.", k),
                q_mcq(4, "NB", "Tiệm cận xiên của đồ thị hàm số $y = x + {k} + \\frac{1}{x - 1}$ là đường thẳng:", "$y = x + {k}$", "$y = x - {k}$", "$x = 1$", "$y = 1$", "A", "Vì $\\lim_{x \\to \\pm\\infty} [y - (x + k)] = 0$.", k),
                q_mcq(5, "TH", "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{{k}x + 1}{\\sqrt{x^2 - 4}}$ là:", "3", "2", "4", "1", "A", "Hai TCĐ $x = 2, x = -2$ và hai TCN $y = k, y = -k$.", k),
                q_mcq(6, "TH", "Giao điểm hai đường tiệm cận của đồ thị hàm số $y = \\frac{{2+k}x - 3}{x - 1}$ có tọa độ là:", "$(1; {2+k})$", "$(-1; {2+k})$", "$(1; -3)$", "$({2+k}; 1)$", "A", "TCĐ $x = 1$, TCN $y = {2+k}$.", k),
                q_mcq(7, "TH", "Tìm $m$ để đồ thị hàm số $y = \\frac{x - 1}{x^2 - 2x + m}$ có đúng 2 đường tiệm cận đứng.", "$m < 1$", "$m > 1$", "$m \\le 1$", "$m \\ne 1$", "A", "Mẫu số có 2 nghiệm phân biệt khác 1 $\\iff \\Delta' = 1 - m > 0 \\iff m < 1$.", k),
                q_mcq(8, "TH", "Đồ thị hàm số $y = \\frac{x^2 - {k}x + 1}{x + 1}$ có tiệm cận xiên đi qua điểm nào?", "$(0; -{k+1})$", "$(1; 0)$", "$(0; 0)$", "$(2; 1)$", "A", "$y = x - (k+1) + \\frac{k+2}{x+1}$. TCX $y = x - k - 1$ qua $(0; -k-1)$.", k),
                q_mcq(9, "VD", "Biết đồ thị hàm số $y = \\frac{ax + 1}{bx - 2}$ có tiệm cận đứng $x = 2$ và tiệm cận ngang $y = 3$. Tính $a + b$.", "7", "5", "4", "8", "A", "$bx - 2 = 0 \\Rightarrow x = 2/b = 2 \\Rightarrow b = 1$. $a/b = 3 \\Rightarrow a = 3$. $a+b = 4$.", k),
                q_mcq(10, "VD", "Có bao nhiêu giá trị nguyên của $m \\in [-5; 5]$ để đồ thị hàm số $y = \\frac{x+1}{x^2 - 2mx + 4}$ có đúng 1 tiệm cận đứng?", "2", "3", "1", "4", "A", "Mẫu có nghiệm kép hoặc có nghiệm bằng -1.", k),
                q_mcq(11, "VDC", "Nồng độ một loại thuốc trong máu sau $t$ giờ được mô tả bởi $C(t) = \\frac{{4*k}t}{t^2 + 4}$ (mg/L). Khi $t \\to +\\infty$, nồng độ thuốc tiến dần về bao nhiêu mg/L?", "0", "2", "1", "4", "A", "$\\lim_{t \\to +\\infty} C(t) = 0$.", k),
                q_mcq(12, "VDC", "Tìm diện tích hình chữ nhật tạo bởi hai trục tọa độ và hai đường tiệm cận của đồ thị hàm số $y = \\frac{3x - 2}{x - 2}$.", "6", "4", "3", "2", "A", "TCĐ $x = 2$, TCN $y = 3$. Diện tích $S = |2 \\times 3| = 6$.", k)
            ]
            tfs = [
                q_tf(1, "Cho hàm số $y = \\frac{2x - {k}}{x + 1}$.", [
                    ("a", "Đồ thị hàm số có tiệm cận đứng là $x = -1$.", True, "Nghiệm của mẫu số là $x = -1$."),
                    ("b", "Đồ thị hàm số có tiệm cận ngang là $y = 2$.", True, "$\\lim_{x \\to \\pm\\infty} y = 2$."),
                    ("c", "Giao điểm của hai đường tiệm cận là $I(-1; 2)$.", True, "Tọa độ tâm đối xứng $I(-1; 2)$."),
                    ("d", "Khoảng cách từ gốc tọa độ $O$ đến tiệm cận ngang bằng 1.", False, "Khoảng cách từ $O(0; 0)$ đến $y - 2 = 0$ bằng $|0 - 2| = 2$.")
                ], k),
                q_tf(2, "Cho hàm số $y = \\frac{x^2 - {k}x + 2}{x - 1}$.", [
                    ("a", "Phép chia đa thức cho kết quả $y = x + {1-k} + \\frac{{3-k}}{x - 1}$.", True, "Chia tử cho mẫu."),
                    ("b", "Tiệm cận xiên của đồ thị là đường thẳng $y = x + {1-k}$.", True, "Phần thương bậc nhất là tiệm cận xiên."),
                    ("c", "Đồ thị có tiệm cận đứng là $x = 1$.", True, "Nghiệm mẫu số."),
                    ("d", "Hai đường tiệm cận cắt nhau tại điểm có hoành độ bằng 0.", False, "Giao điểm tại $x = 1$.")
                ], k),
                q_tf(3, "Xét đồ thị hàm số $y = f(x)$ có $\\lim_{x \\to 2^+} f(x) = +\\infty$ và $\\lim_{x \\to -\\infty} f(x) = 1$.", [
                    ("a", "Đường thẳng $x = 2$ là tiệm cận đứng của đồ thị.", True, "Theo định nghĩa tiệm cận đứng."),
                    ("b", "Đường thẳng $y = 1$ là tiệm cận ngang của đồ thị khi $x \\to -\\infty$.", True, "Theo định nghĩa tiệm cận ngang."),
                    ("c", "Đồ thị hàm số chắc chắn không cắt đường thẳng $y = 1$.", False, "Đồ thị vẫn có thể cắt tiệm cận ngang tại hữu hạn điểm."),
                    ("d", "Tập xác định của hàm số bắt buộc không chứa điểm $x = 2$.", False, "Hàm số có thể không xác định tại 2.")
                ], k),
                q_tf(4, "Một cơ sở sản xuất có hàm chi phí trung bình $\\overline{C}(x) = 50 + \\frac{2000}{x}$ (nghìn đồng/sản phẩm) với $x > 0$.", [
                    ("a", "Tiệm cận đứng của đồ thị $\\overline{C}(x)$ là đường thẳng $x = 0$.", True, "Khi $x \\to 0^+$ thì $\\overline{C} \\to +\\infty$."),
                    ("b", "Tiệm cận ngang của đồ thị là đường thẳng $\\overline{C} = 50$.", True, "Khi $x \\to +\\infty$ thì $\\overline{C} \\to 50$."),
                    ("c", "Khi quy mô sản xuất càng lớn ($x$ rất lớn), chi phí sản xuất mỗi sản phẩm sẽ tiến dần về 50 nghìn đồng.", True, "Ý nghĩa thực tiễn của tiệm cận ngang."),
                    ("d", "Chi phí trung bình có thể giảm xuống dưới 45 nghìn đồng nếu sản xuất trên 10000 sản phẩm.", False, "Chi phí luôn lớn hơn 50 nghìn đồng với mọi $x > 0$.")
                ], k)
            ]
            sas = [
                q_sa(1, "NB", "Tìm tiệm cận đứng của đồ thị hàm số $y = \\frac{3x - 1}{x - {4+k}}$.", str(4 + k), "Tiệm cận đứng $x = {4+k}$.", k),
                q_sa(2, "TH", "Tìm hoành độ giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\frac{2x + 5}{x - {k}}$.", str(k), "Tiệm cận đứng là $x = {k}$.", k),
                q_sa(3, "TH", "Tìm hệ số góc của đường tiệm cận xiên của đồ thị $y = \\frac{2x^2 - 3x + 1}{x - 1}$.", "2", "Chia tử cho mẫu thương bậc nhất là $2x - 1$, hệ số góc là 2.", k),
                q_sa(4, "VD", "Có bao nhiêu đường tiệm cận (đứng, ngang, xiên) của đồ thị hàm số $y = \\frac{x - 2}{\\sqrt{x^2 - 4}}$?", "3", "x = 2 không là TCĐ vì triệt tiêu, x = -2 là TCĐ, y = 1 và y = -1 là 2 TCN. Tổng là 3 đường.", k),
                q_sa(5, "VDC", "Số lượng cá hồi trong một hồ nuôi sau $t$ tháng kể từ khi thả giống ước tính theo công thức $P(t) = \\frac{1000t + 500}{t + 2}$ (con). Khi thời gian $t$ đủ lớn thì số cá hồi trong hồ tiến gần đến bao nhiêu con?", "1000", "$\\lim_{t \\to +\\infty} P(t) = 1000$ con.", k),
                q_sa(6, "VDC", "Tìm diện tích tam giác tạo bởi hai đường tiệm cận của đồ thị hàm số $y = \\frac{x^2 - 2x + 3}{x - 1}$ và trục tung $Oy$.", "1", "Tiệm cận xiên $y = x - 1$, tiệm cận đứng $x = 1$. Giao điểm là $I(1; 0)$. Giao của TCX với $Oy$ là $(0; -1)$. Diện tích tam giác bằng 1.", k)
            ]
        else: # Bài 4, 5
            mcqs = [
                q_mcq(1, "NB", "Tâm đối xứng của đồ thị hàm số bậc ba $y = x^3 - 3x + 1$ là điểm uốn $I$ có tọa độ:", "$(0; 1)$", "$(1; -1)$", "$(0; 0)$", "$(-1; 3)$", "A", "$y'' = 6x = 0 \\iff x = 0 \\Rightarrow y(0) = 1$.", k),
                q_mcq(2, "NB", "Đồ thị hàm số $y = \\frac{ax + b}{cx + d}$ luôn nhận giao điểm hai đường tiệm cận làm:", "Tâm đối xứng", "Trục đối xứng", "Điểm cực trị", "Gốc tọa độ", "A", "Giao điểm 2 tiệm cận là tâm đối xứng.", k),
                q_mcq(3, "NB", "Một doanh nghiệp có hàm doanh thu $R(x) = 200x - x^2$. Doanh thu biên tại mức sản lượng $x = 50$ là:", "100", "150", "200", "50", "A", "$R'(x) = 200 - 2x \\Rightarrow R'(50) = 100$.", k),
                q_mcq(4, "NB", "Hàm số nào sau đây có đồ thị dạng chữ W?", "$y = x^4 - 2x^2 + 1$", "$y = -x^4 + 2x^2$", "$y = x^3 - 3x$", "$y = -x^3 + 3x$", "A", "Hàm bậc 4 trùng phương với $a > 0, b < 0$.", k),
                q_mcq(5, "TH", "Một vật phóng thẳng đứng lên từ mặt đất với phương trình $h(t) = 20t - 5t^2$ (mét). Chiều cao lớn nhất vật đạt được bằng:", "20m", "25m", "15m", "10m", "A", "$h'(t) = 20 - 10t = 0 \\iff t = 2 \\Rightarrow h(2) = 20\\text{ m}$.", k),
                q_mcq(6, "TH", "Điểm uốn của đồ thị hàm số $y = -x^3 + 6x^2 - 9x + 2$ có hoành độ là:", "$x = 2$", "$x = 1$", "$x = 3$", "$x = 0$", "A", "$y'' = -6x + 12 = 0 \\iff x = 2$.", k),
                q_mcq(7, "TH", "Hàm số chi phí sản xuất $C(x) = 0.5x^2 + 20x + 500$. Chi phí biên nhỏ nhất khi:", "$x = 0$", "$x = 10$", "$x = 20$", "$x = 50$", "A", "$C'(x) = x + 20$.", k),
                q_mcq(8, "TH", "Cho hàm số $y = x^3 - 3x^2 + 2$. Tiếp tuyến tại điểm uốn có hệ số góc bằng:", "-3", "3", "0", "-6", "A", "Điểm uốn tại $x = 1$. $y'(1) = 3 - 6 = -3$.", k),
                q_mcq(9, "VD", "Một mảnh đất hình chữ nhật diện tích $600\\text{ m}^2$ được chia làm 3 lô bằng 2 hàng rào song song với chiều rộng. Chiều dài hàng rào tối thiểu để bao quanh và chia lô bằng bao nhiêu mét?", "120", "100", "140", "80", "A", "Tối ưu hóa hàng rào.", k),
                q_mcq(10, "VD", "Một bồn chứa nước hình trụ có thể tích $V = 16\\pi\\text{ m}^3$ được gia công bằng tôn không nắp. Để tiết kiệm chi phí tôn nhất thì chiều cao của bồn phải bằng bao nhiêu mét?", "2", "4", "3", "1", "A", "$h = r = 2\\text{ m}$ cho bồn không nắp.", k),
                q_mcq(11, "VDC", "Một doanh nghiệp bán độc quyền một sản phẩm với hàm cầu $p = 100 - 0.02x$ và chi phí $C(x) = 20x + 10000$. Mức sản lượng tối đa hóa lợi nhuận là:", "2000", "2500", "1500", "1000", "A", "$L'(x) = 0 \\iff x = 2000$.", k),
                q_mcq(12, "VDC", "Một tấm nhôm hình vuông cạnh 60cm được cắt ở 4 góc 4 hình vuông cạnh $x$ rồi gập lại thành hộp không nắp. Thể tích hộp lớn nhất khi $x$ bằng bao nhiêu cm?", "10", "12", "15", "8", "A", "$V = x(60 - 2x)^2$. Đạt GTLN tại $x = 10\\text{ cm}$.", k)
            ]
            tfs = [
                q_tf(1, "Cho hàm số $y = f(x) = x^3 - 3x^2 + 2$.", [
                    ("a", "Đồ thị có tâm đối xứng là điểm $I(1; 0)$.", True, "$y'' = 6x - 6 = 0 \\iff x = 1 \\Rightarrow y(1) = 0$."),
                    ("b", "Đồ thị cắt trục hoành tại 3 điểm phân biệt.", True, "$y(0) = 2 > 0$ và $y(2) = -2 < 0$."),
                    ("c", "Tiếp tuyến tại tâm đối xứng có hệ số góc bằng $-3$.", True, "$y'(1) = 3(1)^2 - 6(1) = -3$."),
                    ("d", "Phương trình tiếp tuyến tại tâm đối xứng là $y = -3x + 3$.", True, "$y = -3(x - 1) + 0 = -3x + 3$.")
                ], k),
                q_tf(2, "Một quả bóng được đá lên từ độ cao 1m với phương trình độ cao $h(t) = 1 + 18t - 5t^2$ (mét), $t$ tính bằng giây.", [
                    ("a", "Vận tốc của quả bóng tại thời điểm $t$ là $v(t) = 18 - 10t$ (m/s).", True, "$v(t) = h'(t) = 18 - 10t$."),
                    ("b", "Quả bóng đạt độ cao cực đại sau $1.8$ giây.", True, "$v(t) = 0 \\iff t = 1.8$ giây."),
                    ("c", "Độ cao cực đại của quả bóng bằng $17.2$ mét.", True, "$h(1.8) = 1 + 18(1.8) - 5(1.8)^2 = 17.2\\text{ m}$."),
                    ("d", "Quả bóng chạm đất sau đúng 3 giây.", False, "$h(t) = 0$ có nghiệm $t \\approx 3.65$ giây.")
                ], k),
                q_tf(3, "Xét hàm số phân thức $y = \\frac{x - 1}{x + 1}$.", [
                    ("a", "Đồ thị hàm số có tâm đối xứng là $I(-1; 1)$.", True, "Giao điểm của TCĐ $x = -1$ và TCN $y = 1$."),
                    ("b", "Đồ thị hàm số không có trục đối xứng.", False, "Đồ thị hypebol có hai trục đối xứng."),
                    ("c", "Đồ thị luôn đi qua gốc tọa độ $O(0; 0)$.", False, "Tại $x = 0 \\Rightarrow y = -1$."),
                    ("d", "Hàm số luôn đồng biến trên các khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.", True, "$y' = \\frac{2}{(x+1)^2} > 0$.")
                ], k),
                q_tf(4, "Một công ty dự định đóng một thùng carton dạng hình hộp chữ nhật có thể tích $V = 4\\text{ m}^3$ với đáy là hình vuông cạnh $x$ (mét).", [
                    ("a", "Chiều cao của thùng là $h = \\frac{4}{x^2}$ mét.", True, "$V = x^2 h = 4$."),
                    ("b", "Diện tích bìa carton toàn phần là $S(x) = 2x^2 + \\frac{16}{x}$ $(\\text{m}^2)$.", True, "$S = 2x^2 + 4xh = 2x^2 + \\frac{16}{x}$."),
                    ("c", "Diện tích carton nhỏ nhất khi đáy là hình vuông cạnh $x = 2$ mét.", False, "$S'(x) = 4x - \\frac{16}{x^2} = 0 \\iff x = \\sqrt[3]{4}$ mét."),
                    ("d", "Khi diện tích toàn phần nhỏ nhất thì thùng có dạng hình lập phương.", True, "Khi $x = \\sqrt[3]{4}$ thì $h = x$.")
                ], k)
            ]
            sas = [
                q_sa(1, "NB", "Tìm hoành độ tâm đối xứng của đồ thị hàm số $y = 2x^3 - 6x^2 + 1$.", "1", "$y'' = 12x - 12 = 0 \\iff x = 1$.", k),
                q_sa(2, "TH", "Tìm hệ số góc của tiếp tuyến tại điểm uốn của đồ thị hàm số $y = -x^3 + 3x^2 + 1$.", "3", "Điểm uốn tại $x = 1$. $y'(1) = 3$.", k),
                q_sa(3, "TH", "Một người ném một viên sỏi theo quỹ đạo parabol $y = -0.05x^2 + x$ (mét). Tầm xa của viên sỏi khi chạm đất bằng bao nhiêu mét?", "20", "$-0.05x^2 + x = 0 \\iff x = 20\\text{ m}$.", k),
                q_sa(4, "VD", "Một doanh nghiệp sản xuất $x$ sản phẩm với chi phí $C(x) = 2x^2 + 40x + 800$. Tìm $x$ để chi phí trung bình nhỏ nhất.", "20", "$x = 20$.", k),
                q_sa(5, "VDC", "Một xưởng in muốn in một tấm áp phích hình chữ nhật có diện tích phần in là $1800\\text{ cm}^2$. Lề trên dưới $4\\text{ cm}$, lề trái phải $2\\text{ cm}$. Diện tích toàn bộ tấm áp phích nhỏ nhất bằng bao nhiêu $\\text{cm}^2$?", "2450", "Diện tích tối thiểu 2450 $\\text{cm}^2$.", k),
                q_sa(6, "VDC", "Một người thợ cần làm một chiếc máng dẫn nước bằng tôn có mặt cắt ngang là hình thang cân với đáy bé và hai cạnh bên đều bằng $20\\text{ cm}$. Để diện tích mặt cắt ngang lớn nhất thì góc nghiêng $\\alpha$ của cạnh bên bằng bao nhiêu độ?", "60", "Góc tối ưu $\\alpha = 60^\\circ$.", k)
            ]

    elif domain == "Oxyz" or domain == "Vectơ 3D": # Bài 6, 7, 8
        mcqs = [
            q_mcq(1, "NB", "Trong không gian $Oxyz$, cho điểm $M({1+k}; -2; 3)$. Hình chiếu vuông góc của $M$ lên trục $Ox$ là:", "$({1+k}; 0; 0)$", "$(0; -2; 0)$", "$(0; 0; 3)$", "$({1+k}; -2; 0)$", "A", "Chiếu lên $Ox$ giữ nguyên hoành độ, tung độ và cao độ bằng 0.", k),
            q_mcq(2, "NB", "Cho vectơ $\\vec{a} = ({k}; -1; 2)$ và $\\vec{b} = (2; 3; -1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:", "{2*k - 5}", "5", "0", "-1", "A", "$\\vec{a} \\cdot \\vec{b} = 2k - 5$.", k),
            q_mcq(3, "NB", "Độ dài của vectơ $\\vec{u} = (2; -1; 2)$ bằng:", "3", "9", "$\\sqrt{5}$", "5", "A", "$|\\vec{u}| = \\sqrt{4 + 1 + 4} = 3$.", k),
            q_mcq(4, "NB", "Cho hai điểm $A(1; 2; 3)$ và $B(3; 0; 1)$. Tọa độ trung điểm $I$ của đoạn thẳng $AB$ là:", "$(2; 1; 2)$", "$(4; 2; 4)$", "$(1; -1; -1)$", "$(2; -1; 2)$", "A", "Tọa độ trung điểm bằng trung bình cộng tọa độ.", k),
            q_mcq(5, "TH", "Tìm $m$ để hai vectơ $\\vec{u} = (1; m; -2)$ và $\\vec{v} = (2; -1; {k})$ vuông góc với nhau.", "{2 - 2*k}", "0", "1", "-2", "A", "$\\vec{u} \\cdot \\vec{v} = 2 - m - 2k = 0 \\iff m = 2 - 2k$.", k),
            q_mcq(6, "TH", "Trong không gian $Oxyz$, khoảng cách giữa hai điểm $A(1; 0; 2)$ và $B(-1; 2; 3)$ bằng:", "3", "9", "$\\sqrt{5}$", "$\\sqrt{6}$", "A", "$AB = \\sqrt{(-2)^2 + 2^2 + 1^2} = \\sqrt{9} = 3$.", k),
            q_mcq(7, "TH", "Cho ba điểm $A(1; 1; 1), B(2; 3; 4), C(3; 5; 7)$. Khẳng định nào sau đây đúng?", "Ba điểm $A, B, C$ thẳng hàng", "Tam giác $ABC$ vuông", "Tam giác $ABC$ đều", "Ba điểm tạo thành tam giác", "A", "$\\vec{AB} = (1; 2; 3), \\vec{AC} = 2\\vec{AB}$.", k),
            q_mcq(8, "TH", "Tọa độ trọng tâm $G$ của tam giác $ABC$ với $A(1; 2; 0), B(3; 0; 2), C(2; 4; 1)$ là:", "$(2; 2; 1)$", "$(6; 6; 3)$", "$(1; 1; 1)$", "$(3; 2; 1)$", "A", "$G = (2; 2; 1)$.", k),
            q_mcq(9, "VD", "Góc giữa hai vectơ $\\vec{a} = (1; 0; 1)$ và $\\vec{b} = (0; 1; 1)$ bằng:", "$60^\\circ$", "$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "A", "$\\cos(\\vec{a}, \\vec{b}) = \\frac{1}{2} \\Rightarrow 60^\\circ$.", k),
            q_mcq(10, "VD", "Tìm tọa độ điểm $D$ để tứ giác $ABCD$ là hình bình hành, biết $A(1; 2; 3), B(2; 1; 2), C(0; 3; 1)$.", "$(-1; 4; 2)$", "$(1; 4; 2)$", "$(-1; 2; 0)$", "$(3; 0; 4)$", "A", "$\\vec{AB} = \\vec{DC} \\Rightarrow D(-1; 4; 2)$.", k),
            q_mcq(11, "VDC", "Một chiếc máy bay không người lái đang bay với vận tốc $\\vec{v} = (120; 90; 80)$ (km/h). Tốc độ bay thực tế của máy bay là bao nhiêu km/h?", "170", "150", "200", "180", "A", "$|\\vec{v}| = \\sqrt{120^2 + 90^2 + 80^2} = 170\\text{ km/h}$.", k),
            q_mcq(12, "VDC", "Một chiếc đèn chùm nặng 120N được treo bởi 3 sợi dây cáp gắn vào trần nhà. Góc giữa mỗi sợi dây cáp và phương thẳng đứng là $30^\\circ$. Lực căng trên mỗi sợi dây cáp bằng bao nhiêu Newton?", "46.2", "40.0", "50.0", "60.0", "A", "$3T\\cos 30^\\circ = P \\Rightarrow T \\approx 46.19\\text{ N}$.", k)
        ]
        tfs = [
            q_tf(1, "Trong không gian $Oxyz$, cho các điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; {3*k})$.", [
                ("a", "Điểm $A$ thuộc trục $Ox$, điểm $B$ thuộc trục $Oy$, điểm $C$ thuộc trục $Oz$.", True, "Tọa độ các điểm nằm trên các trục."),
                ("b", "Độ dài đoạn thẳng $AB$ bằng $\\sqrt{5}$.", True, "$AB = \\sqrt{1^2 + 2^2} = \\sqrt{5}$."),
                ("c", "Tam giác $OAB$ vuông tại gốc tọa độ $O$.", True, "Vì $Ox \\perp Oy$."),
                ("d", "Thể tích khối tứ diện $OABC$ bằng {k}.", True, "$V = \\frac{1}{6} (1)(2)({3*k}) = {k}$.")
            ], k),
            q_tf(2, "Cho hai vectơ $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 0)$.", [
                ("a", "Độ dài vectơ $\\vec{u}$ bằng 3.", True, "$|\\vec{u}| = \\sqrt{1 + 4 + 4} = 3$."),
                ("b", "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.", True, "$1(2) + 2(-1) + (-2)(0) = 0$."),
                ("c", "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.", True, "Vì tích vô hướng bằng 0."),
                ("d", "Vectơ cùng hướng với $\\vec{u}$ có độ dài bằng 1 là $(\\frac{1}{3}; \\frac{2}{3}; -\\frac{2}{3})$.", True, "Chia cho độ dài 3.")
            ], k),
            q_tf(3, "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $A(0; 0; 0), B(3; 0; 0), D(0; 4; 0), A'(0; 0; 5)$.", [
                ("a", "Tọa độ đỉnh $C$ là $(3; 4; 0)$.", True, "$C = B + D - A$."),
                ("b", "Tọa độ đỉnh $C'$ là $(3; 4; 5)$.", True, "Đỉnh đối diện qua đường chéo không gian."),
                ("c", "Độ dài đường chéo $AC'$ bằng $5\\sqrt{2}$.", True, "$AC' = \\sqrt{3^2 + 4^2 + 5^2} = 5\\sqrt{2}$."),
                ("d", "Thể tích hình hộp chữ nhật bằng 60.", True, "$V = 3 \\times 4 \\times 5 = 60$.")
            ], k),
            q_tf(4, "Một trạm radar đặt tại gốc tọa độ $O(0; 0; 0)$ phát hiện một máy bay tại vị trí $M(30; 40; 12)$ (đơn vị: km).", [
                ("a", "Độ cao của máy bay so với mặt đất (mặt phẳng $Oxy$) là 12 km.", True, "Cao độ $z = 12$."),
                ("b", "Khoảng cách từ trạm radar $O$ đến máy bay là khoảng 51.4 km.", True, "$OM = \\sqrt{30^2 + 40^2 + 12^2} \\approx 51.42\\text{ km}$."),
                ("c", "Hình chiếu vị trí máy bay xuống mặt đất cách trạm radar 50 km.", True, "Khoảng cách trên mặt đất là $50\\text{ km}$."),
                ("d", "Góc nâng của máy bay so với mặt đất xấp xỉ $13.5^\\circ$.", True, "$\\tan\\alpha = 12/50 = 0.24 \\Rightarrow \\alpha \\approx 13.5^\\circ$.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tính độ dài của vectơ $\\vec{a} = (1; 2; 2)$.", "3", "$\\sqrt{1 + 4 + 4} = 3$.", k),
            q_sa(2, "TH", "Cho $A(1; 2; 3)$ và $B(3; 4; 2)$. Tìm tọa độ điểm đối xứng của $A$ qua $B$. Tích hoành độ và tung độ điểm đó bằng:", "30", "$x = 5, y = 6 \\Rightarrow 5 \\times 6 = 30$.", k),
            q_sa(3, "TH", "Cho $\\vec{u} = (2; -1; 1)$ và $\\vec{v} = (m; 3; -1)$. Tìm $m$ để $\\vec{u} \\perp \\vec{v}$.", "2", "$2m - 3 - 1 = 0 \\iff m = 2$.", k),
            q_sa(4, "VD", "Tính cosin góc giữa hai vectơ $\\vec{a} = (1; 1; 0)$ và $\\vec{b} = (0; 1; 1)$ (làm tròn đến hàng phần mười).", "0.5", "$\\cos = 1/2 = 0.5$.", k),
            q_sa(5, "VDC", "Ba lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một chất điểm ở trạng thái cân bằng. Biết $\\vec{F}_1 = (10; 20; -15)$ và $\\vec{F}_2 = (-15; 10; 25)$ (đơn vị: N). Độ lớn của lực $\\vec{F}_3$ bằng bao nhiêu N (làm tròn đến hàng phần mười)?", "32.0", "$|\\vec{F}_3| \\approx 32.02\\text{ N}$.", k),
            q_sa(6, "VDC", "Một cần cẩu xây dựng đang nâng một kiện hàng nặng 5000N bằng 4 sợi cáp đối xứng có cùng độ dài. Góc giữa mỗi sợi cáp và phương thẳng đứng là $45^\\circ$. Lực căng trên mỗi sợi cáp bằng bao nhiêu Newton (làm tròn đến hàng đơn vị)?", "1768", "$T \\approx 1768\\text{ N}$.", k)
        ]

    elif domain == "Thống kê": # Bài 9, 10
        mcqs = [
            q_mcq(1, "NB", "Khoảng biến thiên của mẫu số liệu ghép nhóm $[a_1; a_{k+1})$ là:", "$R = a_{k+1} - a_1$", "$R = a_k - a_1$", "$R = a_{k+1} + a_1$", "$R = \\frac{a_{k+1} - a_1}{2}$", "A", "Hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu.", k),
            q_mcq(2, "NB", "Khoảng tứ phân vị của mẫu số liệu ghép nhóm được tính theo công thức:", "$\\Delta_Q = Q_3 - Q_1$", "$\\Delta_Q = Q_3 + Q_1$", "$\\Delta_Q = Q_2 - Q_1$", "$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$", "A", "Theo định nghĩa $\\Delta_Q = Q_3 - Q_1$.", k),
            q_mcq(3, "NB", "Độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm có phương sai $s^2 = 16$ bằng:", "4", "256", "8", "2", "A", "$s = \\sqrt{s^2} = \\sqrt{16} = 4$.", k),
            q_mcq(4, "NB", "Giá trị đại diện của nhóm $[20; 30)$ là:", "25", "20", "30", "10", "A", "Giá trị đại diện $c = \\frac{20 + 30}{2} = 25$.", k),
            q_mcq(5, "TH", "Cho mẫu số liệu ghép nhóm về điểm thi của 40 học sinh. Biết $Q_1 = 6.2$ và $Q_3 = 8.6$. Khoảng tứ phân vị bằng:", "2.4", "14.8", "1.2", "7.4", "A", "$\\Delta_Q = 8.6 - 6.2 = 2.4$.", k),
            q_mcq(6, "TH", "Đại lượng nào sau đây đo mức độ phân tán của mẫu số liệu không bị ảnh hưởng bởi các giá trị bất thường?", "Khoảng tứ phân vị", "Khoảng biến thiên", "Phương sai", "Độ lệch chuẩn", "A", "Khoảng tứ phân vị ít bị ảnh hưởng bởi ngoại lai.", k),
            q_mcq(7, "TH", "Nếu tất cả các số liệu trong mẫu đều tăng thêm 5 đơn vị thì phương sai của mẫu số liệu thay đổi thế nào?", "Không đổi", "Tăng 5", "Tăng 25", "Giảm 5", "A", "Cộng hằng số không đổi phương sai.", k),
            q_mcq(8, "TH", "Nếu tất cả các số liệu trong mẫu đều nhân với 2 thì độ lệch chuẩn của mẫu số liệu thay đổi thế nào?", "Tăng gấp 2 lần", "Tăng gấp 4 lần", "Không đổi", "Tăng thêm 2 đơn vị", "A", "$s_{\\text{mới}} = 2s$.", k),
            q_mcq(9, "VD", "Thời gian hoàn thành một bài kiểm tra của hai nhóm học sinh A và B có cùng điểm trung bình là 30 phút, nhưng độ lệch chuẩn của nhóm A là $s_A = 2.5$ phút và nhóm B là $s_B = 5.2$ phút. Khẳng định nào sau đây đúng?", "Thời gian làm bài của nhóm A đồng đều hơn nhóm B", "Thời gian làm bài của nhóm B đồng đều hơn nhóm A", "Hai nhóm làm bài đồng đều như nhau", "Không thể so sánh", "A", "Độ lệch chuẩn càng nhỏ thì số liệu càng đồng đều.", k),
            q_mcq(10, "VD", "Cho mẫu số liệu gồm 5 nhóm với kích thước mẫu $n = 100$. Biết phương sai tính được là $s^2 = 9$. Độ lệch chuẩn bằng:", "3", "81", "9", "4.5", "A", "$\\sqrt{9} = 3$.", k),
            q_mcq(11, "VDC", "Một nhà đầu tư theo dõi lợi suất hàng tháng của hai cổ phiếu X và Y. Cổ phiếu X có lợi suất trung bình 12%/năm với độ lệch chuẩn 3%/năm; Cổ phiếu Y có lợi suất trung bình 15%/năm với độ lệch chuẩn 8%/năm. Nhà đầu tư ngại rủi ro nên chọn cổ phiếu nào?", "Cổ phiếu X vì có độ rủi ro thấp hơn đáng kể", "Cổ phiếu Y vì có lợi suất cao hơn", "Cả hai như nhau", "Không có cơ sở", "A", "$s_X = 3\\% < s_Y = 8\\%$.", k),
            q_mcq(12, "VDC", "Hệ số biến thiên $CV = \\frac{s}{\\overline{x}}$ của đường kính chi tiết máy sản xuất tại xưởng là $CV = 0.02$. Biết đường kính trung bình là 50mm. Độ lệch chuẩn bằng:", "1.0mm", "0.5mm", "2.0mm", "0.1mm", "A", "$s = 0.02 \\times 50 = 1.0\\text{ mm}$.", k)
        ]
        tfs = [
            q_tf(1, "Khảo sát thời gian tự học mỗi ngày (phút) của 50 học sinh thu được bảng phân bố ghép nhóm gồm 5 nhóm: $[30; 60), [60; 90), [90; 120), [120; 150), [150; 180)$.", [
                ("a", "Khoảng biến thiên của mẫu số liệu là $R = 180 - 30 = 150$ phút.", True, "Lấy đầu mút phải cuối trừ đầu mút trái đầu."),
                ("b", "Độ dài mỗi nhóm đều bằng 30 phút.", True, "Các khoảng đều có độ rộng 30 phút."),
                ("c", "Giá trị đại diện của nhóm thứ ba $[90; 120)$ là 105 phút.", True, "$\\frac{90+120}{2} = 105$."),
                ("d", "Nếu học sinh có thời gian tự học 90 phút thì được xếp vào nhóm $[60; 90)$.", False, "90 thuộc nhóm $[90; 120)$.")
            ], k),
            q_tf(2, "Bảng theo dõi cân nặng của trẻ sơ sinh tại một bệnh viện có các số đặc trưng: số trung bình $\\overline{x} = 3.2\\text{ kg}$, phương sai $s^2 = 0.16\\text{ kg}^2$.", [
                ("a", "Độ lệch chuẩn về cân nặng của trẻ là $s = 0.4\\text{ kg}$.", True, "$\\sqrt{0.16} = 0.4$."),
                ("b", "Đơn vị đo của phương sai là $\\text{kg}^2$.", True, "Bình phương đơn vị gốc."),
                ("c", "Đơn vị đo của độ lệch chuẩn là $\\text{kg}$.", True, "Cùng đơn vị với số liệu gốc."),
                ("d", "Khoảng phân bố $2s$ quanh trung bình là $[2.4; 4.0]\\text{ kg}$.", True, "$3.2 \\pm 0.8$.")
            ], k),
            q_tf(3, "Xét hai máy đóng gói đường tự động A và B. Khối lượng trung bình gói đường của cả hai máy đều là 1000g. Độ lệch chuẩn của máy A là 2g, máy B là 5g.", [
                ("a", "Máy A hoạt động với độ chính xác và ổn định cao hơn máy B.", True, "Độ lệch chuẩn nhỏ hơn."),
                ("b", "Khối lượng các gói đường đóng bởi máy B phân tán nhiều hơn máy A.", True, "$s_B = 5 > s_A = 2$."),
                ("c", "Xác suất gói đường máy A bị lệch quá 4g khỏi mức chuẩn nhỏ hơn máy B.", True, "Do phân tán hẹp hơn."),
                ("d", "Để đóng gói đồng đều thì doanh nghiệp nên ưu tiên sử dụng máy B.", False, "Nên ưu tiên máy A.")
            ], k),
            q_tf(4, "Một lớp học có 40 học sinh làm bài kiểm tra Toán thu được $Q_1 = 6.5, Q_2 = 7.5, Q_3 = 8.5$.", [
                ("a", "Trung vị của điểm kiểm tra lớp là $7.5$.", True, "$Q_2$ là trung vị."),
                ("b", "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q = 2.0$.", True, "$8.5 - 6.5 = 2.0$."),
                ("c", "Khoảng $50\\%$ số học sinh có điểm thi nằm trong đoạn $[6.5; 8.5]$.", True, "50% số liệu ở giữa."),
                ("d", "Điểm 2.0 được xem là giá trị ngoại lai nếu nhỏ hơn $Q_1 - 1.5\\Delta_Q = 3.5$.", True, "Tiêu chuẩn giá trị bất thường.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tìm khoảng biến thiên của mẫu số liệu có các nhóm từ $[10; 20)$ đến $[50; 60)$.", "50", "$60 - 10 = 50$.", k),
            q_sa(2, "TH", "Cho mẫu số liệu ghép nhóm có $Q_1 = 15.2$ và $Q_3 = 23.8$. Tính khoảng tứ phân vị $\\Delta_Q$.", "8.6", "$23.8 - 15.2 = 8.6$.", k),
            q_sa(3, "TH", "Cho mẫu số liệu ghép nhóm có phương sai $s^2 = 25$. Tìm độ lệch chuẩn $s$.", "5", "$\\sqrt{25} = 5$.", k),
            q_sa(4, "VD", "Tính giá trị đại diện của nhóm $[45; 65)$.", "55", "$\\frac{45 + 65}{2} = 55$.", k),
            q_sa(5, "VDC", "Kiểm tra chất lượng bóng đèn: tuổi thọ trung bình 1500 giờ với độ lệch chuẩn 50 giờ. Hệ số biến thiên (làm tròn đến hàng phần nghìn) bằng:", "0.033", "$50 / 1500 \\approx 0.033$.", k),
            q_sa(6, "VDC", "Một mẫu số liệu ghép nhóm có $Q_1 = 38, Q_3 = 54$. Giá trị ngưỡng dưới để xác định ngoại lai ($Q_1 - 1.5\\Delta_Q$) bằng:", "14", "$\\Delta_Q = 16 \\Rightarrow 38 - 24 = 14$.", k)
        ]

    elif domain == "Tích phân": # Bài 11, 12, 13
        mcqs = [
            q_mcq(1, "NB", "Họ nguyên hàm của hàm số $f(x) = {2+k}x$ là:", "${2+k}x^2 / 2 + C$", "${2+k} + C$", "${2+k}x^2 + C$", "${2+k}x^3 / 3 + C$", "A", "$\\int {(2+k)}x dx = \\frac{{2+k}}{2}x^2 + C$.", k),
            q_mcq(2, "NB", "Nguyên hàm của hàm số $f(x) = e^x$ là:", "$e^x + C$", "$e^{2x} + C$", "$\\frac{e^x}{2} + C$", "$x e^x + C$", "A", "$\\int e^x dx = e^x + C$.", k),
            q_mcq(3, "NB", "Cho $\\int_1^2 f(x) dx = 3$ và $\\int_2^5 f(x) dx = 7$. Tích phân $\\int_1^5 f(x) dx$ bằng:", "10", "4", "-4", "21", "A", "$3 + 7 = 10$.", k),
            q_mcq(4, "NB", "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$, trục hoành và hai đường thẳng $x = a, x = b$ được tính bởi:", "$S = \\int_a^b |f(x)| dx$", "$S = \\int_a^b f(x) dx$", "$S = \\pi \\int_a^b f^2(x) dx$", "$S = |\\int_a^b f(x) dx|$", "A", "Công thức diện tích hình phẳng.", k),
            q_mcq(5, "TH", "Tính tích phân $I = \\int_0^1 (2x + {k}) dx$.", "{1+k}", "{k}", "{2+k}", "1.5", "A", "$[x^2 + kx]_0^1 = 1 + k$.", k),
            q_mcq(6, "TH", "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, trục hoành và $x = 4$ quanh $Ox$ là:", "$8\\pi$", "$4\\pi$", "$16\\pi$", "$2\\pi$", "A", "$V = \\pi \\int_0^4 x dx = 8\\pi$.", k),
            q_mcq(7, "TH", "Biết $\\int_0^2 f(x) dx = 4$. Tính $I = \\int_0^2 [3f(x) - 2] dx$.", "8", "10", "12", "6", "A", "$3(4) - 2(2) = 12 - 4 = 8$.", k),
            q_mcq(8, "TH", "Nguyên hàm $\\int \\frac{1}{2x + 1} dx$ bằng:", "$\\frac{1}{2}\\ln|2x + 1| + C$", "$\\ln|2x + 1| + C$", "$2\\ln|2x + 1| + C$", "$-\\frac{1}{(2x+1)^2} + C$", "A", "Công thức $\\frac{1}{a}\\ln|ax+b| + C$.", k),
            q_mcq(9, "VD", "Diện tích hình phẳng giới hạn bởi hai parabol $y = x^2$ và $y = 2x - x^2$ bằng:", "$\\frac{1}{3}$", "$\\frac{2}{3}$", "$1$", "$\\frac{4}{3}$", "A", "Giao điểm $x = 0, x = 1$. $S = 1/3$.", k),
            q_mcq(10, "VD", "Biết $\\int_1^e x \\ln x dx = \\frac{e^2 + 1}{4}$. Giá trị tích phân là:", "$\\frac{e^2 + 1}{4}$", "$e^2$", "$1$", "$e$", "A", "Tích phân từng phần.", k),
            q_mcq(11, "VDC", "Một vật chuyển động thẳng với vận tốc $v(t) = 3t^2 + 2t$ (m/s). Quãng đường vật đi được trong 4 giây đầu tiên là:", "80m", "64m", "72m", "96m", "A", "$s = [t^3 + t^2]_0^4 = 64 + 16 = 80\\text{ m}$.", k),
            q_mcq(12, "VDC", "Một bồn chứa xăng dầu có mặt cắt dọc là elip trục lớn $6\\text{m}$, trục bé $4\\text{m}$, dài $8\\text{m}$. Dung tích bồn xấp xỉ bằng bao nhiêu mét khối?", "150.8", "120.5", "180.2", "200.0", "A", "$V = \\pi(3)(2)(8) = 48\\pi \\approx 150.8\\text{ m}^3$.", k)
        ]
        tfs = [
            q_tf(1, "Cho hàm số $f(x) = 3x^2 - {2*k}x$.", [
                ("a", "Một nguyên hàm của hàm số là $F(x) = x^3 - {k}x^2$.", True, "Đạo hàm $F'(x) = f(x)$."),
                ("b", "Tích phân $\\int_0^2 f(x) dx = 8 - {4*k}$.", True, "$[x^3 - kx^2]_0^2 = 8 - 4k$."),
                ("c", "Nguyên hàm của $f(x)$ thỏa mãn $F(1) = 0$ là $F(x) = x^3 - {k}x^2 + {k} - 1$.", True, "Thay $x = 1$."),
                ("d", "Nếu $k = 2$ thì tích phân trên bằng 0.", True, "$8 - 4(2) = 0$.")
            ], k),
            q_tf(2, "Xét hình phẳng giới hạn bởi đường cong $y = x^2$ và đường thẳng $y = 4$.", [
                ("a", "Hoành độ giao điểm của parabol và đường thẳng là $x = -2$ và $x = 2$.", True, "$x^2 = 4 \\iff x = \\pm 2$."),
                ("b", "Diện tích hình phẳng là $S = \\int_{-2}^2 (4 - x^2) dx$.", True, "Đường thẳng nằm phía trên parabol."),
                ("c", "Giá trị diện tích hình phẳng bằng $\\frac{32}{3}$.", True, "$S = 32/3$."),
                ("d", "Thể tích khối tròn xoay khi quay hình phẳng quanh trục $Ox$ bằng $\\frac{256\\pi}{5}$.", True, "Công thức thể tích tròn xoay.")
            ], k),
            q_tf(3, "Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái đạp phanh chuyển động chậm dần với gia tốc $a(t) = -4\\text{ m/s}^2$.", [
                ("a", "Vận tốc của ô tô sau khi đạp phanh là $v(t) = 20 - 4t$ (m/s).", True, "$v(t) = 20 - 4t$."),
                ("b", "Sau 5 giây kể từ lúc đạp phanh thì ô tô dừng hẳn.", True, "$v(t) = 0 \\iff t = 5$ giây."),
                ("c", "Quãng đường ô tô đi được đến khi dừng hẳn là $s = \\int_0^5 (20 - 4t) dt$.", True, "Tích phân của vận tốc."),
                ("d", "Quãng đường dừng xe là 50 mét.", True, "$100 - 50 = 50\\text{ m}$.")
            ], k),
            q_tf(4, "Một cổng chào có dạng parabol cao $8\\text{m}$, rộng $6\\text{m}$.", [
                ("a", "Phương trình parabol với gốc tại trung điểm chân cổng là $y = 8 - \\frac{8}{9}x^2$.", True, "Đỉnh $(0; 8)$."),
                ("b", "Diện tích mặt tiền của cổng bằng $\\int_{-3}^3 (8 - \\frac{8}{9}x^2) dx$.", True, "Tích phân giới hạn bởi parabol và $Ox$."),
                ("c", "Diện tích cổng chào bằng $32\\text{ m}^2$.", True, "$S = 32\\text{ m}^2$."),
                ("d", "Chi phí sơn phủ bề mặt với đơn giá 100 nghìn đồng/$\\text{m}^2$ là 3.2 triệu đồng.", True, "$32 \\times 100000 = 3.200.000$ đồng.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tính tích phân $\\int_0^2 ({k}x + 1) dx$.", str(2*k + 2), "Tích phân cơ bản.", k),
            q_sa(2, "TH", "Cho $\\int_0^3 f(x) dx = 5$. Tính $\\int_0^3 4f(x) dx$.", "20", "$4 \\times 5 = 20$.", k),
            q_sa(3, "TH", "Tìm diện tích hình phẳng giới hạn bởi $y = 3x^2$, $y = 0$, $x = 0, x = 2$.", "8", "$[x^3]_0^2 = 8$.", k),
            q_sa(4, "VD", "Tính thể tích khối tròn xoay khi quay $y = x, y = 0, x = 3$ quanh $Ox$ chia cho $\\pi$.", "9", "$\\int_0^3 x^2 dx = 9$.", k),
            q_sa(5, "VDC", "Một tàu hỏa hãm phanh với vận tốc $v(t) = 20 - 2t$. Tính quãng đường tàu chạy đến khi dừng hẳn (mét).", "100", "Dừng tại $t = 10 \\Rightarrow [20t - t^2]_0^{10} = 100\\text{ m}$.", k),
            q_sa(6, "VDC", "Một cánh đồng cỏ hình elip có trục lớn $80\\text{m}$, trục bé $60\\text{m}$. Diện tích cánh đồng cỏ bằng bao nhiêu mét vuông (lấy $\\pi \\approx 3.1416$, làm tròn đến hàng đơn vị)?", "3770", "$S = \\pi(40)(30) \\approx 3770\\text{ m}^2$.", k)
        ]

    elif domain == "Hình Oxyz": # Bài 14, 15, 16, 17
        mcqs = [
            q_mcq(1, "NB", "Trong không gian $Oxyz$, một vectơ pháp tuyến của mặt phẳng $(P): {k}x - 2y + 3z - 5 = 0$ là:", "$\\vec{n} = ({k}; -2; 3)$", "$\\vec{n} = ({k}; 2; 3)$", "$\\vec{n} = (1; -2; 3)$", "$\\vec{n} = ({k}; -2; -5)$", "A", "Hệ số trước $x, y, z$.", k),
            q_mcq(2, "NB", "Vectơ chỉ phương của đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-3} = \\frac{z}{4}$ là:", "$\\vec{u} = (2; -3; 4)$", "$\\vec{u} = (1; -2; 0)$", "$\\vec{u} = (-1; 2; 0)$", "$\\vec{u} = (2; 3; 4)$", "A", "Các số ở mẫu số.", k),
            q_mcq(3, "NB", "Tâm và bán kính của mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ là:", "$I(1; -2; 3), R = 4$", "$I(-1; 2; -3), R = 4$", "$I(1; -2; 3), R = 16$", "$I(-1; 2; -3), R = 16$", "A", "$I(1; -2; 3), R = 4$.", k),
            q_mcq(4, "NB", "Khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(Oxy)$ bằng:", "3", "1", "2", "$\\sqrt{14}$", "A", "$|z_M| = 3$.", k),
            q_mcq(5, "TH", "Phương trình mặt phẳng đi qua điểm $M(1; -1; 2)$ và có VTPT $\\vec{n} = (2; 1; -{k})$ là:", "$2x + y - {k}z + {2*k - 1} = 0$", "$2x + y - z = 0$", "$x - y + 2z = 0$", "$2x - y + z = 0$", "A", "Công thức phương trình mặt phẳng.", k),
            q_mcq(6, "TH", "Phương trình tham số của đường thẳng qua $A(1; 0; -2)$ có VTCP $\\vec{u} = (2; -1; 3)$ là:", "x = 1 + 2t, y = -t, z = -2 + 3t", "x = 2 + t, y = -1, z = 3 - 2t", "x = 1 - 2t, y = t, z = -2 + 3t", "x = 1 + t, y = 0, z = -2 + t", "A", "Phương trình tham số.", k),
            q_mcq(7, "TH", "Khoảng cách từ điểm $A(2; 1; -1)$ đến mặt phẳng $(P): 2x - 2y + z + 5 = 0$ bằng:", "2", "3", "1", "4", "A", "$d = 6/3 = 2$.", k),
            q_mcq(8, "TH", "Mặt cầu tâm $I(1; 2; -3)$ tiếp xúc với mặt phẳng $(Oxy)$ có bán kính bằng:", "3", "1", "2", "$\\sqrt{14}$", "A", "$R = |-3| = 3$.", k),
            q_mcq(9, "VD", "Tìm góc giữa đường thẳng $d: \\frac{x}{1} = \\frac{y}{\\sqrt{2}} = \\frac{z}{1}$ và mặt phẳng $(P): x + z - 4 = 0$.", "$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$", "A", "$\\sin\\alpha = \\frac{\\sqrt{2}}{2} \\Rightarrow 45^\\circ$.", k),
            q_mcq(10, "VD", "Phương trình mặt cầu có đường kính $AB$ với $A(1; 2; 0)$ và $B(3; 0; 2)$ là:", "$(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 3$", "$(x - 2)^2 + (y - 1)^2 + (z - 1)^2 = 12$", "$(x - 1)^2 + (y - 2)^2 + z^2 = 3$", "$(x + 2)^2 + (y + 1)^2 + (z + 1)^2 = 3$", "A", "$I(2; 1; 1), R^2 = 3$.", k),
            q_mcq(11, "VDC", "Một ngọn hải đăng tại $A(20; 30; 0.05)$ (km). Vùng phủ sáng quét trên biển là hình tròn bán kính 10 km. Phương trình mặt cầu bao quanh ngọn hải đăng bán kính 10 km là:", "$(x - 20)^2 + (y - 30)^2 + (z - 0.05)^2 = 100$", "$(x + 20)^2 + (y + 30)^2 = 100$", "$(x - 20)^2 + (y - 30)^2 + z^2 = 100$", "$(x - 20)^2 + (y - 30)^2 = 25$", "A", "Mặt cầu tâm $A$.", k),
            q_mcq(12, "VDC", "Một đường hầm nối $A(1; 2; 0.5)$ và $B(5; 6; 0.8)$ (km). Một trạm phát sóng tại đỉnh núi $S(3; 4; 2.5)$. Khoảng cách ngắn nhất từ trạm đến đường hầm bằng bao nhiêu mét?", "1700", "1500", "2000", "1800", "A", "Khoảng cách từ điểm đến đường thẳng ra 1700m.", k)
        ]
        tfs = [
            q_tf(1, "Trong không gian $Oxyz$, cho mặt phẳng $(P): 2x - y + 2z - 6 = 0$.", [
                ("a", "Một vectơ pháp tuyến của mặt phẳng $(P)$ là $\\vec{n} = (2; -1; 2)$.", True, "Hệ số trước $x, y, z$."),
                ("b", "Điểm $M(1; 2; 3)$ thuộc mặt phẳng $(P)$.", True, "$2(1) - 2 + 2(3) - 6 = 0$."),
                ("c", "Khoảng cách từ gốc tọa độ $O$ đến mặt phẳng $(P)$ bằng 2.", True, "$d(O, P) = 6/3 = 2$."),
                ("d", "Mặt phẳng $(Q): 4x - 2y + 4z + 1 = 0$ song song với mặt phẳng $(P)$.", True, "Hệ số tỉ lệ.")
            ], k),
            q_tf(2, "Cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z - 2}{-2}$ và điểm $A(2; 1; 0)$.", [
                ("a", "Đường thẳng $d$ đi qua điểm $M(1; -1; 2)$ và có VTCP $\\vec{u} = (2; 1; -2)$.", True, "Định nghĩa chính tắc."),
                ("b", "Độ dài vectơ chỉ phương $|\\vec{u}| = 3$.", True, "$\\sqrt{4 + 1 + 4} = 3$."),
                ("c", "Điểm $A(2; 1; 0)$ thuộc đường thẳng $d$.", False, "Thay $A$ vào không thỏa mãn."),
                ("d", "Mặt phẳng qua $A$ vuông góc với $d$ có phương trình $2x + y - 2z - 5 = 0$.", True, "$2(x-2) + 1(y-1) - 2(z-0) = 0$.")
            ], k),
            q_tf(3, "Cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$.", [
                ("a", "Tâm của mặt cầu là $I(1; -2; 3)$.", True, "Chia cho $-2$."),
                ("b", "Bán kính của mặt cầu là $R = 4$.", True, "$\\sqrt{1 + 4 + 9 + 2} = 4$."),
                ("c", "Điểm $O(0; 0; 0)$ nằm trong khối cầu $(S)$.", True, "$-2 < 0$."),
                ("d", "Mặt phẳng $(Oxy)$ cắt mặt cầu $(S)$ theo thiết diện là đường tròn bán kính $\\sqrt{7}$.", True, "$r = \\sqrt{16 - 9} = \\sqrt{7}$.")
            ], k),
            q_tf(4, "Một vệ tinh địa tĩnh tại $V(0; 0; 36000)$ (km). Trạm mặt đất tại $T(3000; 4000; 0)$ (km).", [
                ("a", "Khoảng cách từ trạm mặt đất đến tâm Trái Đất là 5000 km.", True, "$\\sqrt{3000^2 + 4000^2} = 5000$."),
                ("b", "Vectơ vị trí từ trạm $T$ đến vệ tinh $V$ là $\\vec{TV} = (-3000; -4000; 36000)$.", True, "Hiệu tọa độ."),
                ("c", "Khoảng cách đường truyền tín hiệu lớn hơn 36000 km.", True, "Cạnh huyền lớn hơn 36000 km."),
                ("d", "Góc nghiêng của ăng-ten chảo hướng lên vệ tinh xấp xỉ $82^\\circ$.", True, "$\\alpha \\approx 82.1^\\circ$.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tìm bán kính $R$ của mặt cầu $(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 25$.", "5", "$\\sqrt{25} = 5$.", k),
            q_sa(2, "TH", "Tính khoảng cách từ điểm $M(1; 0; 2)$ đến mặt phẳng $(P): 2x - y + 2z + 3 = 0$.", "3", "$d = 9/3 = 3$.", k),
            q_sa(3, "TH", "Cho mặt cầu $(S)$ có $R = 5$. Mặt phẳng $(P)$ cách tâm một khoảng bằng 3. Bán kính giao tuyến bằng:", "4", "$\\sqrt{25 - 9} = 4$.", k),
            q_sa(4, "VD", "Tìm góc giữa hai mặt phẳng $(P): x - y = 0$ và $(Q): y - z = 0$ (đơn vị độ).", "60", "Góc $60^\\circ$.", k),
            q_sa(5, "VDC", "Một ngọn hải đăng cao 50m. Bán kính quét trên biển 120m. Khoảng cách xa nhất từ đèn đến mép vùng sáng bằng bao nhiêu mét?", "130", "$\\sqrt{50^2 + 120^2} = 130\\text{ m}$.", k),
            q_sa(6, "VDC", "Khoảng cách ngắn nhất từ trạm biến áp $C(0; 8; 5)$ đến đường thẳng nối $A(0; 0; 0)$ và $B(6; 8; 0)$ (km) xấp xỉ bằng bao nhiêu km?", "6.4", "Khoảng cách ra 6.4 km.", k)
        ]

    else: # Xác suất (Bài 18, 19)
        mcqs = [
            q_mcq(1, "NB", "Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Công thức xác suất của $A$ với điều kiện $B$ là:", "$P(A|B) = \\frac{P(AB)}{P(B)}$", "$P(A|B) = \\frac{P(AB)}{P(A)}$", "$P(A|B) = P(A)P(B)$", "$P(A|B) = \\frac{P(B)}{P(A)}$", "A", "Định nghĩa xác suất có điều kiện.", k),
            q_mcq(2, "NB", "Nếu hai biến cố $A$ và $B$ độc lập thì $P(A|B)$ bằng:", "$P(A)$", "$P(B)$", "$1$", "$0$", "A", "Tính chất độc lập.", k),
            q_mcq(3, "NB", "Công thức nhân xác suất tổng quát cho hai biến cố $A, B$ là:", "$P(AB) = P(A) \\cdot P(B|A)$", "$P(AB) = P(A) + P(B)$", "$P(AB) = P(A|B) + P(B|A)$", "$P(AB) = \\frac{P(A)}{P(B)}$", "A", "Công thức nhân xác suất.", k),
            q_mcq(4, "NB", "Cho hệ biến cố đầy đủ $\\{B_1, B_2\\}$. Công thức xác suất toàn phần cho biến cố $A$ là:", "$P(A) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2)$", "$P(A) = P(A|B_1) + P(A|B_2)$", "$P(A) = P(B_1) + P(B_2)$", "$P(A) = P(B_1)P(A|B_2)$", "A", "Công thức xác suất toàn phần.", k),
            q_mcq(5, "TH", "Cho $P(A) = 0.4, P(B) = 0.5$ và $P(AB) = 0.2$. Tính $P(A|B)$.", "0.40", "0.50", "0.20", "0.80", "A", "$P(A|B) = 0.2 / 0.5 = 0.4$.", k),
            q_mcq(6, "TH", "Một hộp có 5 bi xanh và 3 bi đỏ. Lấy 2 bi không hoàn lại. Xác suất viên thứ hai đỏ biết viên thứ nhất xanh là:", "3/7", "3/8", "5/7", "2/7", "A", "Còn 4 xanh và 3 đỏ, xác suất là 3/7.", k),
            q_mcq(7, "TH", "Tỉ lệ mắc bệnh là 2%. Độ nhạy xét nghiệm 95%. Xác suất một người vừa mắc bệnh vừa dương tính là:", "0.019", "0.02", "0.05", "0.095", "A", "$0.02 \\times 0.95 = 0.019$.", k),
            q_mcq(8, "TH", "Công thức Bayes dùng để làm gì?", "Tính xác suất hậu nghiệm của các giả thuyết", "Tính trung bình cộng", "Tính phương sai", "Tính số hoán vị", "A", "Định nghĩa công thức Bayes.", k),
            q_mcq(9, "VD", "Có hai hộp bi: Hộp I có 4 đỏ, 6 trắng; Hộp II có 7 đỏ, 3 trắng. Chọn ngẫu nhiên 1 hộp rồi lấy 1 viên. Xác suất lấy được viên bi màu đỏ là:", "0.55", "0.50", "0.60", "0.45", "A", "$0.5(0.4) + 0.5(0.7) = 0.55$.", k),
            q_mcq(10, "VD", "Phân xưởng 1 sản xuất 60% với lỗi 2%; Phân xưởng 2 sản xuất 40% với lỗi 3%. Lấy 1 sản phẩm thấy lỗi. Xác suất do PX 1 sản xuất là:", "0.50", "0.60", "0.40", "0.55", "A", "Theo Bayes ra 0.50.", k),
            q_mcq(11, "VDC", "Hệ thống kiểm tra an ninh phát hiện đúng 99%, báo nhầm 1%. Tỉ lệ mang vật cấm là 0.1%. Khi chuông reo, xác suất thực sự mang vật cấm xấp xỉ bằng:", "9%", "99%", "50%", "1%", "A", "Theo Bayes ra xấp xỉ 9%.", k),
            q_mcq(12, "VDC", "Ba xạ thủ bắn độc lập với xác suất trúng 0.7; 0.8; 0.9. Biết mục tiêu trúng đúng 2 viên. Xác suất xạ thủ 1 bắn trượt xấp xỉ bằng:", "0.24", "0.30", "0.18", "0.40", "A", "Tính theo xác suất có điều kiện.", k)
        ]
        tfs = [
            q_tf(1, "Một hộp đựng 10 chiếc thẻ đánh số từ 1 đến 10. Rút ngẫu nhiên một thẻ. $A$: \"Số chẵn\", $B$: \"Số chia hết cho 3\".", [
                ("a", "Biến cố $A = \\{2, 4, 6, 8, 10\\}$ có xác suất $P(A) = 0.5$.", True, "Có 5 số chẵn."),
                ("b", "Biến cố $B = \\{3, 6, 9\\}$ có xác suất $P(B) = 0.3$.", True, "Có 3 số chia hết cho 3."),
                ("c", "Biến cố giao $AB = \\{6\\}$ có xác suất $P(AB) = 0.1$.", True, "Chỉ có số 6 thỏa mãn."),
                ("d", "Xác suất $P(B|A) = 0.2$.", True, "$0.1 / 0.5 = 0.2$.")
            ], k),
            q_tf(2, "Lớp học có 60% thích Toán, 40% thích Văn, 30% thích cả hai môn.", [
                ("a", "Biết học sinh thích Toán, xác suất thích Văn là 0.5.", True, "$0.3 / 0.6 = 0.5$."),
                ("b", "Biết học sinh thích Văn, xác suất thích Toán là 0.75.", True, "$0.3 / 0.4 = 0.75$."),
                ("c", "Hai sở thích Toán và Văn là độc lập.", False, "$0.6 \\times 0.4 = 0.24 \\ne 0.3$."),
                ("d", "Xác suất không thích môn nào là 0.3.", True, "$1 - 0.7 = 0.3$.")
            ], k),
            q_tf(3, "Công ty A cung cấp 70% linh kiện (lỗi 1%); Công ty B cung cấp 30% linh kiện (lỗi 2%). Lấy ngẫu nhiên một linh kiện.", [
                ("a", "Xác suất linh kiện lấy ra bị lỗi là 0.013.", True, "$0.7(0.01) + 0.3(0.02) = 0.013$."),
                ("b", "Nếu linh kiện lỗi thì xác suất do công ty A cung cấp là $\\frac{7}{13}$.", True, "Theo Bayes ra 7/13."),
                ("c", "Nếu linh kiện lỗi thì xác suất do công ty B cung cấp là $\\frac{6}{13}$.", True, "Theo Bayes ra 6/13."),
                ("d", "Khả năng lỗi đến từ công ty B cao hơn.", False, "$7/13 > 6/13$.")
            ], k),
            q_tf(4, "Thiết bị cảnh báo cháy: khi cháy chuông reo 98%; khi không cháy báo giả 1%. Xác suất cháy trong ngày là 0.001.", [
                ("a", "Xác suất chuông reo trong ngày là khoảng 0.011.", True, "$P \\approx 0.01097$."),
                ("b", "Khi chuông reo, xác suất thực sự cháy là khoảng 8.9%.", True, "Theo Bayes ra 8.93%."),
                ("c", "Hơn 90% lần chuông reo là báo giả.", True, "Hơn 91% là báo giả."),
                ("d", "Hệ thống cảnh báo cháy hoàn toàn vô dụng.", False, "Xác suất nguy hiểm tăng 90 lần.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Cho $P(A) = 0.5, P(B) = 0.4, P(AB) = 0.2$. Tính $P(A|B)$.", "0.5", "$0.2 / 0.4 = 0.5$.", k),
            q_sa(2, "TH", "Cho hai biến cố độc lập có $P(A) = 0.6, P(B) = 0.5$. Tính $P(AB)$.", "0.3", "$0.6 \\times 0.5 = 0.3$.", k),
            q_sa(3, "TH", "Gieo xúc xắc. Biết ra số lẻ, tính xác suất số đó là số nguyên tố (làm tròn 2 chữ số).", "0.67", "2/3 ra 0.67.", k),
            q_sa(4, "VD", "Có 2 chuồng thỏ: Chuồng I có 3 trắng, 2 đen; Chuồng II có 4 trắng, 1 đen. Xác suất bắt được thỏ trắng bằng:", "0.7", "$0.5(3/5) + 0.5(4/5) = 0.7$.", k),
            q_sa(5, "VDC", "Xét nghiệm phát hiện bệnh đúng 96%, nhận nhầm 2%. Tỉ lệ bệnh là 1%. Kết quả dương tính thì xác suất thực sự mắc bệnh là bao nhiêu phần trăm (làm tròn đơn vị)?", "33", "Theo Bayes ra 33%.", k),
            q_sa(6, "VDC", "Khách hàng rủi ro cao chiếm 20% (tai nạn 10%); rủi ro thấp chiếm 80% (tai nạn 1%). Khách hàng bị tai nạn thì xác suất thuộc nhóm rủi ro cao là bao nhiêu phần trăm (làm tròn đơn vị)?", "71", "Theo Bayes ra 71%.", k)
        ]

    return mcqs, tfs, sas
