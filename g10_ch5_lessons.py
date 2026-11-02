# -*- coding: utf-8 -*-
"""
Chương 5 Lớp 10: Các số đặc trưng của mẫu số liệu không ghép nhóm (Thống kê).
Bao gồm:
- Bài 12: Số gần đúng và sai số
- Bài 13: Các số đặc trưng đo xu thế trung tâm
- Bài 14: Các số đặc trưng đo mức độ phân tán
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch5_lesson(lnum, k):
    if lnum == 12:
        # BÀI 12: SỐ GẦN ĐÚNG VÀ SAI SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Sai số tuyệt đối của số gần đúng $a$ so với số đúng $\\overline{a}$ là",
                         "$\\Delta_a = |\\overline{a} - a|$",
                         "$\\Delta_a = \\overline{a} - a$",
                         "$\\Delta_a = \\frac{|\\overline{a} - a|}{|a|}$",
                         "$\\Delta_a = |\\overline{a} + a|$",
                         "A", "Định nghĩa sai số tuyệt đối: $\\Delta_a = |\\overline{a} - a|$."),
                make_mcq(2, "NB", "Nếu số đúng $\\overline{a}$ thoả mãn $a - d \\le \\overline{a} \\le a + d$ thì số $d$ được gọi là",
                         "Độ chính xác của số gần đúng $a$",
                         "Sai số tương đối của số $a$",
                         "Số quy tròn của số $a$",
                         "Chữ số đáng tin của số $a$",
                         "A", "Định nghĩa độ chính xác của số gần đúng."),
                make_mcq(3, "NB", "Sai số tương đối của số gần đúng $a$ kí hiệu $\\delta_a$ được tính bằng",
                         "$\\delta_a = \\frac{\\Delta_a}{|a|}$",
                         "$\\delta_a = \\Delta_a \\cdot |a|$",
                         "$\\delta_a = |\\overline{a} - a|$",
                         "$\\delta_a = \\frac{|a|}{\\Delta_a}$",
                         "A", "Công thức sai số tương đối: $\\delta_a = \\Delta_a / |a|$."),
                make_mcq(4, "NB", "Quy tắc làm tròn: Khi quy tròn đến hàng chục, nếu chữ số ngay sau hàng quy tròn nhỏ hơn 5 thì",
                         "Giữ nguyên chữ số ở hàng chục và thay chữ số hàng đơn vị bằng số 0",
                         "Cộng thêm 1 vào chữ số ở hàng chục",
                         "Bỏ hẳn chữ số hàng đơn vị",
                         "Lấy chữ số hàng chục trừ đi 1",
                         "A", "Quy tắc làm tròn số."),
                make_mcq(5, "TH", "Quy tròn số $a = 15.3426$ đến hàng phần trăm ta được",
                         "$15.34$", "$15.35$", "$15.3$", "$15.343$",
                         "A", "Chữ số hàng phần trăm là 4, chữ số kế sau là 2 < 5 nên giữ nguyên thành 15.34."),
                make_mcq(6, "TH", "Quy tròn số $b = 34567$ đến hàng trăm ta được",
                         "$34600$", "$34500$", "$35000$", "$34570$",
                         "A", "Hàng trăm là 5, hàng chục là 6 >= 5 nên tăng thêm 1 thành 34600."),
                make_mcq(7, "TH", "Cho số gần đúng $a = 3.1415$ với độ chính xác $d = 0.001$. Số đúng $\\overline{a}$ nằm trong đoạn",
                         "$[3.1405; 3.1425]$", "$[3.140; 3.142]$", "$[3.141; 3.143]$", "$[3.13; 3.15]$",
                         "A", "$[a - d; a + d] = [3.1415 - 0.001; 3.1415 + 0.001] = [3.1405; 3.1425]$."),
                make_mcq(8, "TH", "Quy tròn số gần đúng $a = 2851275$ với độ chính xác $d = 300$ ta được",
                         "$2851000$", "$2851300$", "$2850000$", "$2852000$",
                         "A", "Hàng của độ chính xác là hàng trăm ($300$). Hàng quy tròn là hàng nghìn. Chữ số hàng nghìn là 1, chữ số hàng trăm là 2 < 5 nên giữ nguyên 2851000."),
                make_mcq(9, "VD", "Đường kính một chi tiết máy là $d = 12.5\\text{ cm} \\pm 0.1\\text{ cm}$. Sai số tương đối lớn nhất của phép đo trên không vượt quá",
                         "$0.8\\%$", "$1.2\\%$", "$0.5\\%$", "$2.5\\%$",
                         "A", "$\\delta \\le \\frac{0.1}{12.5} = 0.008 = 0.8\\%$."),
                make_mcq(10, "VD", "Một mảnh vườn hình chữ nhật có chiều dài $a = 15\\text{ m} \\pm 0.1\\text{ m}$ và chiều rộng $b = 8\\text{ m} \\pm 0.1\\text{ m}$. Sai số tuyệt đối của chu vi mảnh vườn không vượt quá",
                         "$0.4\\text{ m}$", "$0.2\\text{ m}$", "$0.8\\text{ m}$", "$0.1\\text{ m}$",
                         "A", "$P = 2(a + b) \\Rightarrow \\Delta_P = 2(\\Delta_a + \\Delta_b) \\le 2(0.1 + 0.1) = 0.4\\text{ m}$."),
                make_mcq(11, "VDC", "Một hình lập phương có cạnh đo được là $a = 10.0\\text{ cm} \\pm 0.05\\text{ cm}$. Thể tích khối lập phương được viết dưới dạng $V \\pm \\Delta_V$ là",
                         "$1000\\text{ cm}^3 \\pm 15\\text{ cm}^3$",
                         "$1000\\text{ cm}^3 \\pm 0.15\\text{ cm}^3$",
                         "$1000\\text{ cm}^3 \\pm 5\\text{ cm}^3$",
                         "$1000\\text{ cm}^3 \\pm 50\\text{ cm}^3$",
                         "A", "$V = a^3 = 1000$. Sai số tương đối $\\delta_V \\approx 3\\delta_a = 3 \\times (0.05 / 10) = 0.015$. Sai số tuyệt đối $\\Delta_V = V \\cdot \\delta_V = 1000 \\times 0.015 = 15\\text{ cm}^3$."),
                make_mcq(12, "VDC", "Hai bạn An và Bình đo chiều cao của một cột cờ. An đo được kết quả $h_1 = 8.5\\text{ m} \\pm 0.1\\text{ m}$, Bình đo được $h_2 = 8.52\\text{ m} \\pm 0.05\\text{ m}$. Đánh giá nào sau đây đúng?",
                         "Phép đo của Bình chính xác hơn vì có sai số tương đối nhỏ hơn",
                         "Phép đo của An chính xác hơn",
                         "Hai phép đo có độ chính xác như nhau",
                         "Không thể so sánh độ chính xác của hai bạn",
                         "A", "Sai số tương đối của Bình $\\approx 0.05 / 8.52 \\approx 0.59\\%$, của An $\\approx 0.1 / 8.5 \\approx 1.18\\%$. Sai số tương đối càng nhỏ thì phép đo càng chính xác.")
            ]
            tfs = [
                make_tf(1, "Cho số gần đúng $a = 654298$ với độ chính xác $d = 400$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Hàng lớn nhất của độ chính xác $d$ là hàng trăm.", True, "$d = 400$ có chữ số khác không đầu tiên ở hàng trăm."),
                    ("b", "Hàng quy tròn của số gần đúng $a$ là hàng nghìn.", True, "Quy tắc: Hàng quy tròn là hàng liền trên hàng lớn nhất của độ chính xác (hàng nghìn)."),
                    ("c", "Chữ số ở hàng quy tròn là 4 và chữ số sau nó là 2.", True, "Chữ số hàng nghìn là 4, sau nó là 2."),
                    ("d", "Số quy tròn của $a$ là $655000$.", False, "Vì chữ số sau hàng quy tròn là $2 < 5$ nên giữ nguyên chữ số 4, số quy tròn phải là $654000$.")
                ]),
                make_tf(2, "Một tấm kim loại hình chữ nhật có kích thước thực tế $\\overline{a} = 20\\text{ cm}$ và $\\overline{b} = 15\\text{ cm}$. Khi đo, người ta ghi nhận kết quả $a = 19.8\\text{ cm}$ và $b = 15.2\\text{ cm}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Sai số tuyệt đối của chiều dài $a$ là $\\Delta_a = 0.2\\text{ cm}$.", True, "$|20 - 19.8| = 0.2$."),
                    ("b", "Sai số tuyệt đối của chiều rộng $b$ là $\\Delta_b = 0.2\\text{ cm}$.", True, "$|15 - 15.2| = 0.2$."),
                    ("c", "Sai số tương đối của phép đo chiều dài là $1\\%$.", True, "$0.2 / 20 = 0.01 = 1\\%$."),
                    ("d", "Phép đo chiều rộng có sai số tương đối nhỏ hơn phép đo chiều dài.", False, "$\\delta_b = 0.2 / 15 \\approx 1.33\\% > 1\\%$, nên chiều rộng có sai số tương đối lớn hơn.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Quy tròn số $3.14159$ đến hàng phần nghìn ta được số nào?",
                        "3.142", "Chữ số sau phần nghìn là 5 nên tăng thêm 1: 3.142."),
                make_sa(2, "TH", "Quy tròn số $284600$ với độ chính xác $d = 3000$. Viết số quy tròn thu được.",
                        "280000", "Hàng quy tròn là hàng chục nghìn (sau hàng nghìn). Hàng chục nghìn là 8, sau nó là 4 < 5 nên giữ nguyên 280000."),
                make_sa(3, "VD", "Biết số đúng $\\overline{a} = \\sqrt{5} \\approx 2.2360679...$ Lấy giá trị gần đúng là $a = 2.24$. Tính sai số tuyệt đối $\\Delta_a$ (làm tròn số thập phân 4 chữ số).",
                        "0.0039", "$|2.2360679 - 2.24| = 0.003932... \\approx 0.0039$."),
                make_sa(4, "VD", "Một gói mì tôm có khối lượng ghi trên bao bì là $75\\text{ g} \\pm 2\\text{ g}$. Tính sai số tương đối lớn nhất của khối lượng (tính theo phần trăm, làm tròn số thập phân 1 chữ số).",
                        "2.7", "$\\delta = 2 / 75 \\approx 0.02667 = 2.7\\%$."),
                make_sa(5, "VDC", "Chu vi một hình vuông đo được là $P = 40.0\\text{ cm} \\pm 0.2\\text{ cm}$. Sai số tuyệt đối lớn nhất của cạnh hình vuông đó bằng bao nhiêu cm?",
                        "0.05", "$a = P/4 \\Rightarrow \\Delta_a = \\Delta_P / 4 = 0.2 / 4 = 0.05\\text{ cm}$."),
                make_sa(6, "VDC", "Khoảng cách từ Trái Đất đến Mặt Trăng xấp xỉ $384\\,400\\text{ km}$ với sai số không quá $500\\text{ km}$. Tính sai số tương đối của phép đo này (tính theo phần trăm, làm tròn 2 chữ số thập phân).",
                        "0.13", "$\\delta = 500 / 384400 \\approx 0.00130 = 0.13\\%$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Khái niệm số gần đúng và độ chính xác",
                           "Trình bày định nghĩa số gần đúng, sai số tuyệt đối và độ chính xác của số gần đúng. Cho ví dụ minh hoạ.",
                           "1. Số gần đúng: Trong thực tế tính toán hoặc đo đạc, ta thường không thể biết chính xác giá trị đúng $\\overline{a}$ mà chỉ tìm được một giá trị xấp xỉ $a$. Số $a$ được gọi là số gần đúng của $\\overline{a}$.\\n2. Sai số tuyệt đối: Đại lượng $\\Delta_a = |\\overline{a} - a|$ phản ánh độ chênh lệch giữa số đúng và số gần đúng, gọi là sai số tuyệt đối của $a$.\\n3. Độ chính xác: Nếu ta biết số thực $d > 0$ sao cho $\\Delta_a \\le d$, tức $a - d \\le \\overline{a} \\le a + d$, thì $d$ được gọi là độ chính xác của số gần đúng $a$, và ta viết $\\overline{a} = a \\pm d$. Ví dụ: Chiều dài cái bàn là $a = 1.2\\text{ m} \\pm 0.01\\text{ m}$ thì độ chính xác là $d = 0.01\\text{ m}$."),
                make_essay(2, "TH", 0.5, "Quy tắc quy tròn số gần đúng theo độ chính xác",
                           "Nêu quy tắc xác định hàng quy tròn của một số gần đúng $a$ khi biết độ chính xác $d$. Áp dụng quy tròn số $a = 374529$ với $d = 200$.",
                           "1. Quy tắc:\\n- Bước 1: Tìm hàng của chữ số khác không đầu tiên bên trái của độ chính xác $d$. Giả sử đó là hàng $10^n$.\\n- Bước 2: Hàng quy tròn của số gần đúng $a$ là hàng $10^{n+1}$ (ngay trên hàng của $d$).\\n- Bước 3: Áp dụng quy tắc làm tròn thông thường cho số $a$ tại hàng quy tròn đó.\\n2. Áp dụng cho $a = 374529$ với $d = 200$:\\n- Chữ số khác 0 đầu tiên của $d$ là chữ số 2 ở hàng trăm.\\n- Hàng quy tròn của $a$ là hàng liền kề bên trái: hàng nghìn.\\n- Chữ số hàng nghìn của $a$ là 4, chữ số ngay sau nó là 5 (ở hàng trăm). Vì $5 \\ge 5$ nên ta tăng chữ số hàng nghìn thêm 1 đơn vị và thay các hàng sau bằng 0. Vậy số quy tròn là $375000$."),
                make_essay(3, "VD", 0.5, "Đánh giá sai số của diện tích hình chữ nhật",
                           "Một mảnh đất hình chữ nhật có chiều dài đo được là $x = 24.5\\text{ m} \\pm 0.1\\text{ m}$ và chiều rộng đo được là $y = 12.0\\text{ m} \\pm 0.1\\text{ m}$.\\na) Tính diện tích xấp xỉ $S$ của mảnh đất.\\nb) Ước lượng sai số tuyệt đối lớn nhất của diện tích và viết kết quả dưới dạng $S \\pm \\Delta_S$.",
                           "a) Diện tích xấp xỉ của mảnh đất là: $S = x \\cdot y = 24.5 \\times 12.0 = 294.0\\text{ m}^2$.\\nb) Ta có: $\\overline{S} = \\overline{x} \\cdot \\overline{y}$ với $24.4 \\le \\overline{x} \\le 24.6$ và $11.9 \\le \\overline{y} \\le 12.1$.\\nDiện tích lớn nhất: $S_{\\max} = 24.6 \\times 12.1 = 297.66\\text{ m}^2$.\\nDiện tích nhỏ nhất: $S_{\\min} = 24.4 \\times 11.9 = 290.36\\text{ m}^2$.\\nSai số tuyệt đối: $\\Delta_S \\approx |S_{\\max} - S| = |297.66 - 294| = 3.66\\text{ m}^2$ (hoặc dùng công thức vi phân: $\\Delta_S \\approx y \\Delta_x + x \\Delta_y = 12.0(0.1) + 24.5(0.1) = 1.2 + 2.45 = 3.65\\text{ m}^2$).\\nVậy diện tích được viết là: $S = 294.0\\text{ m}^2 \\pm 3.7\\text{ m}^2$ (quy tròn đến $0.1$)."),
                make_essay(4, "VDC", 0.5, "Ứng dụng sai số trong đo đạc thực tế địa chất",
                           "Một đội khảo sát đo thể tích của một bồn chứa xăng hình trụ có bán kính đáy $R = 2.0\\text{ m} \\pm 0.02\\text{ m}$ và chiều cao $h = 5.0\\text{ m} \\pm 0.05\\text{ m}$. Lấy $\\pi \\approx 3.1416$.\\na) Tính sai số tương đối của bán kính $R$ và chiều cao $h$.\\nb) Chứng minh rằng sai số tương đối của thể tích bồn chứa xấp xỉ bằng $\\delta_V \\approx 2\\delta_R + \\delta_h$ và tính giá trị của nó theo tỉ lệ phần trăm.\\nc) Tính thể tích bồn chứa xăng và ước lượng sai số tuyệt đối của thể tích.",
                           "a) Sai số tương đối của bán kính: $\\delta_R = \\frac{0.02}{2.0} = 0.01 = 1.0\\%$. Sai số tương đối của chiều cao: $\\delta_h = \\frac{0.05}{5.0} = 0.01 = 1.0\\%$.\\nb) Thể tích hình trụ: $V = \\pi R^2 h$. Lấy logarit tự nhiên hai vế: $\\ln V = \\ln \\pi + 2\\ln R + \\ln h$. Lấy vi phân: $\\frac{\\Delta_V}{V} \\approx 2\\frac{\\Delta_R}{R} + \\frac{\\Delta_h}{h} \\Leftrightarrow \\delta_V \\approx 2\\delta_R + \\delta_h$. Thay số: $\\delta_V \\approx 2(1.0\\%) + 1.0\\% = 3.0\\%$.\\nc) Thể tích bồn chứa: $V = \\pi R^2 h = 3.1416 \\times 2.0^2 \\times 5.0 = 62.832\\text{ m}^3$. Sai số tuyệt đối của thể tích: $\\Delta_V = V \\cdot \\delta_V \\approx 62.832 \\times 0.03 \\approx 1.88\\text{ m}^3$. Do đó thể tích bồn xăng là $V = 62.8\\text{ m}^3 \\pm 1.9\\text{ m}^3$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Số đúng $\\overline{a}$ và số gần đúng $a$ sai khác nhau một lượng $\\Delta_a = |\\overline{a} - a|$, lượng này được gọi là",
                         "Sai số tuyệt đối của số gần đúng $a$",
                         "Sai số tương đối của số gần đúng $a$",
                         "Độ chính xác $d$",
                         "Khoảng sai số",
                         "A", "Định nghĩa sai số tuyệt đối."),
                make_mcq(2, "NB", "Để so sánh độ chính xác của hai phép đo có độ dài khác nhau, người ta dùng",
                         "Sai số tương đối", "Sai số tuyệt đối", "Độ chính xác", "Số quy tròn",
                         "A", "Sai số tương đối phản ánh chất lượng phép đo không phụ thuộc quy mô."),
                make_mcq(3, "NB", "Khi quy tròn số $x$ đến hàng phần mười, nếu chữ số ngay sau hàng phần mười lớn hơn hoặc bằng 5 thì",
                         "Cộng thêm 1 vào chữ số hàng phần mười và bỏ các chữ số phía sau",
                         "Giữ nguyên chữ số hàng phần mười",
                         "Lấy số đối",
                         "Cộng thêm 0.5",
                         "A", "Quy tắc làm tròn số thập phân."),
                make_mcq(4, "NB", "Kí hiệu $\\overline{a} = a \\pm d$ có nghĩa là",
                         "$a - d \\le \\overline{a} \\le a + d$",
                         "$\\overline{a} = a + d$",
                         "$\\overline{a} = a - d$",
                         "$|a - d| \\le \\overline{a}$",
                         "A", "Quy ước viết số gần đúng với độ chính xác $d$."),
                make_mcq(5, "TH", "Quy tròn số $a = 127.465$ đến hàng phần mười ta được",
                         "$127.5$", "$127.4$", "$127.47$", "$128.0$",
                         "A", "Chữ số sau phần mười là 6 >= 5 nên làm tròn lên 127.5."),
                make_mcq(6, "TH", "Quy tròn số $a = 48512$ đến hàng nghìn ta được",
                         "$49000$", "$48000$", "$48500$", "$50000$",
                         "A", "Hàng nghìn là 8, chữ số hàng trăm là 5 >= 5 nên làm tròn lên 49000."),
                make_mcq(7, "TH", "Một bao xi măng có khối lượng ghi là $50\\text{ kg} \\pm 0.5\\text{ kg}$. Sai số tương đối lớn nhất bằng",
                         "$1\\%$", "$0.5\\%$", "$2\\%$", "$0.1\\%$",
                         "A", "$\\delta = 0.5 / 50 = 0.01 = 1\\%$."),
                make_mcq(8, "TH", "Số quy tròn của $a = 3.7548$ với độ chính xác $d = 0.02$ là",
                         "$3.8$", "$3.75$", "$3.7$", "$3.755$",
                         "A", "Độ chính xác ở hàng phần trăm ($0.02$) nên quy tròn ở hàng phần mười (trên hàng phần trăm). Hàng phần mười là 7, sau nó là 5 >= 5 nên quy tròn thành 3.8."),
                make_mcq(9, "VD", "Chiều dài một cây cầu đo được là $L = 250\\text{ m} \\pm 0.2\\text{ m}$. Sai số tương đối của phép đo bằng",
                         "$0.08\\%$", "$0.8\\%$", "$0.02\\%$", "$0.5\\%$",
                         "A", "$\\delta = 0.2 / 250 = 0.0008 = 0.08\\%$."),
                make_mcq(10, "VD", "Một hình vuông có cạnh đo được là $x = 5.0\\text{ cm} \\pm 0.02\\text{ cm}$. Chu vi hình vuông kèm theo sai số là",
                         "$20.0\\text{ cm} \\pm 0.08\\text{ cm}$",
                         "$20.0\\text{ cm} \\pm 0.02\\text{ cm}$",
                         "$20.0\\text{ cm} \\pm 0.04\\text{ cm}$",
                         "$10.0\\text{ cm} \\pm 0.08\\text{ cm}$",
                         "A", "$P = 4x = 20.0$, sai số tuyệt đối $\\Delta_P = 4 \\times 0.02 = 0.08\\text{ cm}$."),
                make_mcq(11, "VDC", "Hình tròn có bán kính đo được là $R = 10.0\\text{ cm} \\pm 0.1\\text{ cm}$. Lấy $\\pi \\approx 3.14$. Diện tích hình tròn viết dưới dạng chuẩn sai số là",
                         "$314\\text{ cm}^2 \\pm 6.3\\text{ cm}^2$",
                         "$314\\text{ cm}^2 \\pm 0.63\\text{ cm}^2$",
                         "$314\\text{ cm}^2 \\pm 3.14\\text{ cm}^2$",
                         "$314\\text{ cm}^2 \\pm 63\\text{ cm}^2$",
                         "A", "$S = \\pi R^2 = 3.14 \\times 100 = 314$. $\\delta_S \\approx 2\\delta_R = 2 \\times (0.1/10) = 0.02$. $\\Delta_S = 314 \\times 0.02 = 6.28 \\approx 6.3\\text{ cm}^2$."),
                make_mcq(12, "VDC", "Một xe chở hàng cân lần lượt đầu xe và rơ-moóc với kết quả: đầu xe $m_1 = 4.25\\text{ tấn} \\pm 0.05\\text{ tấn}$, rơ-moóc $m_2 = 8.65\\text{ tấn} \\pm 0.05\\text{ tấn}$. Tổng khối lượng của cả xe được viết là",
                         "$12.9\\text{ tấn} \\pm 0.1\\text{ tấn}$",
                         "$12.9\\text{ tấn} \\pm 0.05\\text{ tấn}$",
                         "$12.90\\text{ tấn} \\pm 0.05\\text{ tấn}$",
                         "$13.0\\text{ tấn} \\pm 0.1\\text{ tấn}$",
                         "A", "$M = 4.25 + 8.65 = 12.90\\text{ tấn}$. Sai số tuyệt đối lớn nhất: $\\Delta_M = 0.05 + 0.05 = 0.10\\text{ tấn}$. Viết kết quả: $12.9 \\pm 0.1\\text{ tấn}$.")
            ]
            tfs = [
                make_tf(1, "Một khu đất hình chữ nhật có kích thước công bố là chiều dài $a = 50\\text{ m} \\pm 0.2\\text{ m}$ và chiều rộng $b = 30\\text{ m} \\pm 0.1\\text{ m}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Độ chính xác của phép đo chiều dài là $0.2\\text{ m}$.", True, "Theo số liệu đề bài."),
                    ("b", "Sai số tuyệt đối của phép đo chiều rộng không vượt quá $0.1\\text{ m}$.", True, "Theo số liệu đề bài."),
                    ("c", "Chu vi khu đất có sai số tuyệt đối lớn nhất là $0.3\\text{ m}$.", False, "$\\Delta_P = 2(\\Delta_a + \\Delta_b) = 2(0.2 + 0.1) = 0.6\\text{ m}$."),
                    ("d", "Phép đo chiều dài có sai số tương đối nhỏ hơn phép đo chiều rộng.", False, "$\\delta_a = 0.2 / 50 = 0.4\\%$, $\\delta_b = 0.1 / 30 \\approx 0.33\\%$. Chiều dài lớn hơn chiều rộng.")
                ]),
                make_tf(2, "Cho số gần đúng $x = 184562$ với độ chính xác $d = 30$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Chữ số khác 0 đầu tiên của $d$ là số 3 nằm ở hàng chục.", True, "Hàng chục."),
                    ("b", "Hàng quy tròn của số $x$ là hàng trăm.", True, "Hàng ngay trên hàng chục là hàng trăm."),
                    ("c", "Chữ số hàng quy tròn là số 5.", True, "Hàng trăm của 184562 là 5."),
                    ("d", "Số quy tròn của $x$ là $184600$.", True, "Vì chữ số ngay sau hàng trăm là 6 >= 5 nên làm tròn tăng lên thành 184600.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Quy tròn số $a = 75.642$ đến hàng đơn vị ta được số nào?",
                        "76", "Chữ số sau hàng đơn vị là 6 >= 5 nên làm tròn lên 76."),
                make_sa(2, "TH", "Quy tròn số $a = 58214$ với độ chính xác $d = 200$.",
                        "58000", "Độ chính xác hàng trăm, quy tròn hàng nghìn: hàng nghìn là 8, sau nó là 2 < 5 nên giữ nguyên 58000."),
                make_sa(3, "VD", "Một bình chứa chất lỏng có thể tích $V = 2.50\\text{ lít} \\pm 0.05\\text{ lít}$. Tính sai số tương đối (theo phần trăm).",
                        "2", "$\\delta = 0.05 / 2.5 = 0.02 = 2\\%$."),
                make_sa(4, "VD", "Biết số đúng $\\pi \\approx 3.14159265...$ Quy tròn số $\\pi$ đến hàng phần vạn ta được số nào?",
                        "3.1416", "Hàng phần vạn là chữ số 5, ngay sau là 9 >= 5 nên thành 3.1416."),
                make_sa(5, "VDC", "Một đoàn tàu hỏa chạy với vận tốc đo được là $v = 72\\text{ km/h} \\pm 1.8\\text{ km/h}$. Tính sai số tương đối của phép đo vận tốc (tính theo phần trăm).",
                        "2.5", "$\\delta = 1.8 / 72 = 0.025 = 2.5\\%$."),
                make_sa(6, "VDC", "Khối lượng một viên kim cương là $m = 1.250\\text{ g} \\pm 0.005\\text{ g}$. Sai số tương đối của khối lượng viên kim cương bằng bao nhiêu phần trăm?",
                        "0.4", "$\\delta = 0.005 / 1.250 = 0.004 = 0.4\\%$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Ý nghĩa của sai số tương đối",
                           "Định nghĩa sai số tương đối. Tại sao khi đánh giá độ chính xác của phép đo người ta thường dùng sai số tương đối thay vì sai số tuyệt đối?",
                           "1. Định nghĩa: Sai số tương đối của số gần đúng $a$, kí hiệu là $\\delta_a$, là tỉ số giữa sai số tuyệt đối $\\Delta_a$ và giá trị tuyệt đối của số gần đúng đó: $\\delta_a = \\frac{\\Delta_a}{|a|}$. Thường được biểu diễn dưới dạng tỉ lệ phần trăm.\\n2. Ý nghĩa: Sai số tuyệt đối chỉ cho biết mức độ chênh lệch về mặt độ lớn tuyệt đối nhưng không phản ánh được quy mô của đại lượng cần đo. Ví dụ: Đo chiều dài một cây bút dài $10\\text{ cm}$ mà sai lệch $1\\text{ cm}$ là rất kém chính xác ($\\delta = 10\\%$); nhưng đo quãng đường Hà Nội - Hải Phòng dài $100\\text{ km}$ mà sai lệch $1\\text{ m}$ là cực kì chính xác ($\\delta = 0.001\\%$). Do đó, sai số tương đối cho phép so sánh khách quan chất lượng của các phép đo khác nhau."),
                make_essay(2, "TH", 0.5, "Quy tròn số gần đúng trong khoa học",
                           "Giải thích quy tắc làm tròn số tự nhiên và số thập phân. Quy tròn số $x = 42875$ đến hàng nghìn và giải thích các bước thực hiện.",
                           "1. Quy tắc làm tròn số:\\n- Nếu chữ số đầu tiên bị bỏ đi nhỏ hơn 5 thì ta giữ nguyên chữ số của hàng quy tròn.\\n- Nếu chữ số đầu tiên bị bỏ đi lớn hơn hoặc bằng 5 thì ta cộng thêm 1 đơn vị vào chữ số của hàng quy tròn.\\n- Các chữ số ở phần nguyên sau hàng quy tròn được thay thế bằng các số 0; các chữ số ở phần thập phân sau hàng quy tròn bị bỏ đi.\\n2. Áp dụng với số $x = 42875$ làm tròn đến hàng nghìn:\\n- Chữ số hàng nghìn là 2.\\n- Chữ số ngay sau hàng nghìn là chữ số hàng trăm: số 8.\\n- Vì $8 \\ge 5$, ta tăng chữ số hàng nghìn thêm 1 đơn vị ($2 + 1 = 3$) và thay các chữ số hàng trăm, chục, đơn vị bằng số 0.\\n- Kết quả quy tròn là: $43000$."),
                make_essay(3, "VD", 0.5, "Sai số của chu vi và diện tích hình vuông",
                           "Một chiếc gạch men hình vuông có cạnh đo được là $a = 60.0\\text{ cm} \\pm 0.2\\text{ cm}$.\\na) Tính chu vi hình vuông và ước lượng sai số tuyệt đối của chu vi.\\nb) Tính diện tích của viên gạch men và ước lượng sai số tuyệt đối của diện tích.",
                           "a) Chu vi viên gạch: $P = 4a = 4 \\times 60.0 = 240.0\\text{ cm}$. Sai số tuyệt đối của chu vi: $\\Delta_P = 4 \\cdot \\Delta_a = 4 \\times 0.2 = 0.8\\text{ cm}$. Viết kết quả: $P = 240.0\\text{ cm} \\pm 0.8\\text{ cm}$.\\nb) Diện tích viên gạch: $S = a^2 = 60.0^2 = 3600\\text{ cm}^2$.\\nSai số tương đối của cạnh: $\\delta_a = \\frac{0.2}{60} \\approx 0.00333 = 0.33\\%$.\\nSai số tương đối của diện tích: $\\delta_S \\approx 2\\delta_a = 2 \\times 0.00333 \\approx 0.00667 = 0.67\\%$.\\nSai số tuyệt đối của diện tích: $\\Delta_S = S \\cdot \\delta_S = 3600 \\times 0.00667 = 24.0\\text{ cm}^2$.\\nViết kết quả: $S = 3600\\text{ cm}^2 \\pm 24\\text{ cm}^2$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế kiểm soát chất lượng linh kiện điện tử",
                           "Một nhà máy sản xuất điện trở chính xác cung cấp lô sản phẩm có giá trị danh định $R = 1000\\ \\Omega$ với sai số cho phép không vượt quá $1\\%$. Một kỹ sư kiểm tra ngẫu nhiên 3 chiếc điện trở thu được các giá trị thực tế sau:\\n$R_1 = 1008\\ \\Omega$, $R_2 = 989\\ \\Omega$, $R_3 = 995\\ \\Omega$.\\na) Xác định khoảng giá trị điện trở đạt tiêu chuẩn xuất xưởng của nhà máy.\\nb) Điện trở nào trong 3 chiếc trên không đạt tiêu chuẩn? Giải thích.\\nc) Tính sai số tương đối của điện trở $R_1$.",
                           "a) Giá trị danh định $R = 1000\\ \\Omega$ với sai số tương đối tối đa $\\delta_{\\max} = 1\\% = 0.01$. Sai số tuyệt đối tối đa là: $\\Delta R_{\\max} = R \\cdot \\delta_{\\max} = 1000 \\times 0.01 = 10\\ \\Omega$. Do đó khoảng giá trị đạt chuẩn là $[1000 - 10; 1000 + 10] = [990\\ \\Omega; 1010\\ \\Omega]$.\\nb) So sánh các giá trị thực tế:\\n- Chiếc 1: $R_1 = 1008\\ \\Omega \\in [990; 1010]$ (Đạt).\\n- Chiếc 2: $R_2 = 989\\ \\Omega < 990\\ \\Omega$ (Không đạt tiêu chuẩn).\\n- Chiếc 3: $R_3 = 995\\ \\Omega \\in [990; 1010]$ (Đạt).\\nVậy chỉ có chiếc điện trở thứ hai ($R_2$) không đạt tiêu chuẩn vì giá trị của nó thấp hơn giới hạn cho phép tối thiểu $990\\ \\Omega$.\\nc) Sai số tuyệt đối của $R_1$: $\\Delta_{R_1} = |1008 - 1000| = 8\\ \\Omega$. Sai số tương đối của $R_1$: $\\delta_{R_1} = \\frac{8}{1000} = 0.008 = 0.8\\%$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 13:
        # BÀI 13: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Số trung bình cộng $\\overline{x}$ của mẫu số liệu $x_1, x_2, ..., x_n$ được tính bằng công thức",
                         "$\\overline{x} = \\frac{x_1 + x_2 + ... + x_n}{n}$",
                         "$\\overline{x} = \\frac{x_1 + x_n}{2}$",
                         "$\\overline{x} = x_1 + x_2 + ... + x_n$",
                         "$\\overline{x} = \\frac{x_1 + x_2 + ... + x_n}{n - 1}$",
                         "A", "Công thức số trung bình mẫu số liệu."),
                make_mcq(2, "NB", "Trung vị $M_e$ của mẫu số liệu xếp theo thứ tự không giảm là",
                         "Giá trị chia mẫu số liệu thành hai phần có số phần tử bằng nhau",
                         "Giá trị xuất hiện nhiều nhất trong mẫu số liệu",
                         "Trung bình cộng của giá trị lớn nhất và nhỏ nhất",
                         "Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất",
                         "A", "Định nghĩa trung vị."),
                make_mcq(3, "NB", "Tứ phân vị thứ hai $Q_2$ của mẫu số liệu luôn bằng",
                         "Trung vị $M_e$", "Số trung bình $\\overline{x}$", "Mốt $M_o$", "Tứ phân vị thứ nhất $Q_1$",
                         "A", "$Q_2$ chính là trung vị của toàn bộ mẫu số liệu."),
                make_mcq(4, "NB", "Mốt của mẫu số liệu là",
                         "Giá trị có tần số xuất hiện lớn nhất",
                         "Giá trị đứng chính giữa mẫu",
                         "Giá trị lớn nhất trong mẫu số liệu",
                         "Giá trị nhỏ nhất trong mẫu số liệu",
                         "A", "Định nghĩa mốt."),
                make_mcq(5, "TH", "Cho mẫu số liệu điểm kiểm tra: $6, 7, 8, 8, 9, 10$. Số trung bình $\\overline{x}$ bằng",
                         "$8.0$", "$7.8$", "$8.2$", "$8.5$",
                         "A", "$\\overline{x} = (6 + 7 + 8 + 8 + 9 + 10) / 6 = 48 / 6 = 8.0$."),
                make_mcq(6, "TH", "Cho mẫu số liệu đã sắp xếp: $2, 4, 5, 7, 8, 10, 12$. Trung vị $M_e$ bằng",
                         "$7$", "$5$", "$8$", "$6.5$",
                         "A", "Mẫu có $n = 7$ (lẻ), trung vị là phần tử thứ 4: $M_e = 7$."),
                make_mcq(7, "TH", "Cho mẫu số liệu đã sắp xếp: $1, 3, 4, 6, 8, 9$. Trung vị $M_e$ bằng",
                         "$5$", "$4$", "$6$", "$5.5$",
                         "A", "Mẫu có $n = 6$ (chẵn), trung vị là trung bình cộng hai số ở giữa: $(4 + 6)/2 = 5$."),
                make_mcq(8, "TH", "Cho mẫu số liệu số con của 10 gia đình: $1, 2, 2, 2, 3, 2, 1, 4, 2, 3$. Mốt của mẫu số liệu là",
                         "$2$", "$1$", "$3$", "$4$",
                         "A", "Số 2 xuất hiện 5 lần, nhiều nhất."),
                make_mcq(9, "VD", "Cho mẫu số liệu: $3, 5, 7, 8, 12, 15, 18, 20$. Tứ phân vị thứ nhất $Q_1$ bằng",
                         "$6$", "$5$", "$7$", "$8$",
                         "A", "$n = 8$, nửa dưới là $3, 5, 7, 8$. $Q_1 = (5 + 7)/2 = 6$."),
                make_mcq(10, "VD", "Cho mẫu số liệu: $3, 5, 7, 8, 12, 15, 18, 20$. Tứ phân vị thứ ba $Q_3$ bằng",
                         "$16.5$", "$15$", "$18$", "$16$",
                         "A", "Nửa trên là $12, 15, 18, 20$. $Q_3 = (15 + 18)/2 = 16.5$."),
                make_mcq(11, "VDC", "Một lớp học có 40 học sinh làm bài thi. Điểm trung bình của 25 bạn nữ là $8.2$ và điểm trung bình của 15 bạn nam là $7.4$. Điểm trung bình của cả lớp bằng",
                         "$7.9$", "$7.8$", "$8.0$", "$7.85$",
                         "A", "$\\overline{x} = (25 \\times 8.2 + 15 \\times 7.4) / 40 = (205 + 111) / 40 = 316 / 40 = 7.9$."),
                make_mcq(12, "VDC", "Mẫu số liệu thời gian chờ xe buýt (phút) của 7 người: $3, 5, 6, 7, 9, 10, 45$. Đại lượng nào sau đây đại diện tốt nhất cho thời gian chờ xe buýt?",
                         "Trung vị $M_e = 7$",
                         "Số trung bình $\\overline{x} \\approx 12.1$",
                         "Mốt",
                         "Giá trị lớn nhất 45",
                         "A", "Mẫu số liệu có giá trị ngoại lai $45$ rất lớn, làm sai lệch số trung bình. Trung vị là số đặc trưng đại diện phù hợp nhất khi có ngoại lai.")
            ]
            tfs = [
                make_tf(1, "Cho mẫu số liệu về điểm kiểm tra của một nhóm học sinh: $4, 6, 7, 7, 8, 8, 8, 9, 10$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Kích thước mẫu là $n = 9$.", True, "Có 9 giá trị."),
                    ("b", "Số trung bình cộng của mẫu số liệu bằng $\\overline{x} \\approx 7.44$.", True, "Tổng = 67, $67 / 9 \\approx 7.44$."),
                    ("c", "Trung vị của mẫu số liệu là $M_e = 8$.", True, "Số thứ 5 là 8."),
                    ("d", "Mốt của mẫu số liệu là $M_o = 7$.", False, "Mốt là 8 (xuất hiện 3 lần, 7 chỉ xuất hiện 2 lần).")
                ]),
                make_tf(2, "Cho mẫu số liệu đã xếp theo thứ tự không giảm: $10, 12, 14, 16, 18, 20, 22, 24$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Trung vị $Q_2 = 17$.", True, "Trung vị là $(16 + 18)/2 = 17$."),
                    ("b", "Nửa dữ liệu dưới gồm 4 số: $10, 12, 14, 16$.", True, "Đúng."),
                    ("c", "Tứ phân vị thứ nhất $Q_1 = 13$.", True, "$Q_1 = (12 + 14)/2 = 13$."),
                    ("d", "Tứ phân vị thứ ba $Q_3 = 22$.", False, "Nửa trên là $18, 20, 22, 24$. $Q_3 = (20 + 22)/2 = 21$, không phải 22.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho mẫu số liệu: $5, 7, 8, 9, 11$. Tìm số trung bình cộng của mẫu.",
                        "8", "$(5+7+8+9+11)/5 = 40/5 = 8$."),
                make_sa(2, "TH", "Cho mẫu số liệu điểm số: $3, 5, 6, 8, 9, 10$. Tìm trung vị $M_e$.",
                        "7", "$(6+8)/2 = 7$."),
                make_sa(3, "VD", "Cho mẫu số liệu: $2, 4, 6, 8, 10, 12, 14$. Tìm tứ phân vị thứ nhất $Q_1$.",
                        "4", "Trung vị là 8. Nửa dưới: 2, 4, 6. $Q_1 = 4$."),
                make_sa(4, "VD", "Cho mẫu số liệu: $2, 4, 6, 8, 10, 12, 14$. Tìm tứ phân vị thứ ba $Q_3$.",
                        "12", "Nửa trên: 10, 12, 14. $Q_3 = 12$."),
                make_sa(5, "VDC", "Một công ty có 9 nhân viên lương 10 triệu/tháng và 1 giám đốc lương 110 triệu/tháng. Tìm trung vị của mức lương (đơn vị: triệu đồng).",
                        "10", "Dãy lương gồm 9 số 10 và 1 số 110. Sắp xếp: $10, 10, ..., 10, 110$. Trung vị $M_e = (10 + 10)/2 = 10$."),
                make_sa(6, "VDC", "Cho mẫu số liệu gồm 5 số tự nhiên: $2, 5, x, 8, 9$ đã xếp theo thứ tự không giảm. Biết số trung bình bằng 6. Tìm giá trị của $x$.",
                        "6", "$(2 + 5 + x + 8 + 9)/5 = 6 \\Leftrightarrow 24 + x = 30 \\Rightarrow x = 6$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Ý nghĩa của số trung bình và trung vị",
                           "Nêu định nghĩa và ý nghĩa thực tế của số trung bình và trung vị. Khi nào trung vị phản ánh trung thực hơn số trung bình?",
                           "1. Số trung bình ($\\overline{x}$): Là đại lượng đo xu thế trung tâm phổ biến nhất, đại diện cho mức độ trung bình của toàn bộ các quan sát trong mẫu số liệu.\\n2. Trung vị ($M_e$): Là giá trị đứng ở chính giữa mẫu số liệu đã được sắp xếp theo thứ tự không giảm, chia dữ liệu làm hai phần bằng nhau.\\n3. So sánh: Số trung bình rất nhạy cảm với các giá trị bất thường (giá trị ngoại lai quá lớn hoặc quá nhỏ). Khi mẫu số liệu có chứa các giá trị ngoại lai (chẳng hạn như mức lương trong doanh nghiệp có giám đốc nhận lương gấp hàng chục lần nhân viên), trung vị không bị ảnh hưởng bởi các giá trị cực đoan này nên phản ánh trung thực và khách quan hơn mức độ tập trung của tập dữ liệu."),
                make_essay(2, "TH", 0.5, "Quy trình tìm các tứ phân vị",
                           "Nêu các bước xác định các tứ phân vị $Q_1, Q_2, Q_3$ của một mẫu số liệu có kích thước $n$. Áp dụng với mẫu: $1, 3, 5, 7, 9, 11, 13$.",
                           "1. Quy trình tìm các tứ phân vị:\\n- Bước 1: Sắp xếp mẫu số liệu theo thứ tự không giảm.\\n- Bước 2: Tìm tứ phân vị thứ hai $Q_2$ (chính là trung vị của toàn bộ mẫu số liệu).\\n- Bước 3: Tìm $Q_1$ là trung vị của nửa số liệu bên trái $Q_2$ (không bao gồm $Q_2$ nếu $n$ lẻ).\\n- Bước 4: Tìm $Q_3$ là trung vị của nửa số liệu bên phải $Q_2$ (không bao gồm $Q_2$ nếu $n$ lẻ).\\n2. Áp dụng với $1, 3, 5, 7, 9, 11, 13$ ($n = 7$ lẻ):\\n- Dãy đã sắp xếp. Trung vị ở vị trí thứ 4: $Q_2 = 7$.\\n- Nửa số liệu dưới: $1, 3, 5$. Trung vị là $Q_1 = 3$.\\n- Nửa số liệu trên: $9, 11, 13$. Trung vị là $Q_3 = 11$."),
                make_essay(3, "VD", 0.5, "Tính toán số đặc trưng đo xu thế trung tâm",
                           "Một cửa hàng điện máy ghi nhận số lượng quạt điều hoà bán được mỗi ngày trong 10 ngày nắng nóng liên tiếp:\\n$12, 15, 18, 15, 20, 25, 15, 18, 22, 30$.\\na) Tính số lượng quạt bán được trung bình mỗi ngày.\\nb) Tìm trung vị và mốt của mẫu số liệu trên.",
                           "a) Sắp xếp mẫu số liệu theo thứ tự không giảm:\\n$12, 15, 15, 15, 18, 18, 20, 22, 25, 30$.\\nSố quạt bán trung bình mỗi ngày:\\n$\\overline{x} = \\frac{12 + 15 + 15 + 15 + 18 + 18 + 20 + 22 + 25 + 30}{10} = \\frac{190}{10} = 19.0\\text{ (chiếc/ngày)}$.\\nb) Trung vị $M_e$ ($n = 10$ chẵn):\\n$M_e = \\frac{x_5 + x_6}{2} = \\frac{18 + 18}{2} = 18\\text{ (chiếc)}$.\\nMốt $M_o$:\\nGiá trị $15$ xuất hiện $3$ lần (nhiều hơn các giá trị khác), do đó mốt là $M_o = 15\\text{ (chiếc)}$."),
                make_essay(4, "VDC", 0.5, "Phân tích số liệu và bài toán giá trị ngoại lai",
                           "Bảng số liệu ghi lại thu nhập hàng tháng (đơn vị: triệu đồng) của 8 hộ gia đình trong một xóm nhỏ:\\n$8, 9, 9, 10, 11, 12, 13, 88$.\\na) Tính số thu nhập trung bình $\\overline{x}$ và trung vị $M_e$ của xóm đó.\\nb) Giá trị nào trong hai giá trị trên đại diện tốt hơn cho mức thu nhập của người dân trong xóm? Giải thích.\\nc) Tìm các tứ phân vị $Q_1, Q_2, Q_3$.",
                           "a) Dãy đã sắp xếp: $8, 9, 9, 10, 11, 12, 13, 88$.\\nSố thu nhập trung bình: $\\overline{x} = \\frac{8 + 9 + 9 + 10 + 11 + 12 + 13 + 88}{8} = \\frac{160}{8} = 20\\text{ triệu đồng}$.\\nTrung vị ($n = 8$): $M_e = \\frac{10 + 11}{2} = 10.5\\text{ triệu đồng}$.\\nb) Giá trị trung vị $M_e = 10.5\\text{ triệu đồng}$ đại diện tốt hơn. Lý do: Giá trị $88$ là giá trị bất thường (ngoại lai), cao vượt trội so với các hộ còn lại (hộ giàu đột biến), kéo số trung bình lên thành $20$ triệu đồng, trong khi thực tế có đến 7/8 hộ gia đình chỉ có thu nhập từ 8 đến 13 triệu đồng.\\nc) Tứ phân vị:\\n- $Q_2 = M_e = 10.5$.\\n- Nửa dưới: $8, 9, 9, 10 \\Rightarrow Q_1 = \\frac{9 + 9}{2} = 9$.\\n- Nửa trên: $11, 12, 13, 88 \\Rightarrow Q_3 = \\frac{12 + 13}{2} = 12.5$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Để tính số trung bình cộng của bảng phân bố tần số, ta lấy",
                         "Tổng các tích giữa giá trị và tần số tương ứng, rồi chia cho kích thước mẫu $n$",
                         "Tổng các giá trị chia cho số các giá trị khác nhau",
                         "Trung bình cộng của giá trị nhỏ nhất và lớn nhất",
                         "Tổng tần số chia cho kích thước mẫu",
                         "A", "Công thức số trung bình có tần số."),
                make_mcq(2, "NB", "Nếu một mẫu số liệu gồm các giá trị bằng nhau thì",
                         "Số trung bình, trung vị và mốt đều bằng giá trị đó",
                         "Trung vị bằng 0",
                         "Không có mốt",
                         "Số trung bình lớn hơn trung vị",
                         "A", "Tất cả các số bằng nhau thì các số đặc trưng trùng nhau."),
                make_mcq(3, "NB", "Tứ phân vị thứ nhất $Q_1$ chia mẫu số liệu đã sắp xếp thành hai phần sao cho",
                         "Có khoảng $25\\%$ số liệu nhỏ hơn hoặc bằng $Q_1$",
                         "Có khoảng $50\\%$ số liệu nhỏ hơn hoặc bằng $Q_1$",
                         "Có khoảng $75\\%$ số liệu nhỏ hơn hoặc bằng $Q_1$",
                         "Không có số liệu nào nhỏ hơn $Q_1$",
                         "A", "$Q_1$ là mốc $25\\%$ của dữ liệu."),
                make_mcq(4, "NB", "Trong một mẫu số liệu, mốt",
                         "Có thể có nhiều hơn một giá trị hoặc không có mốt",
                         "Luôn là duy nhất",
                         "Bắt buộc phải bằng trung vị",
                         "Luôn là số nguyên",
                         "A", "Mẫu số liệu có thể có 1 mốt, nhiều mốt hoặc không có mốt."),
                make_mcq(5, "TH", "Cho mẫu số liệu: $10, 15, 20, 25, 30$. Số trung bình $\\overline{x}$ bằng",
                         "$20$", "$25$", "$15$", "$18$",
                         "A", "$\\overline{x} = (10+15+20+25+30)/5 = 100/5 = 20$."),
                make_mcq(6, "TH", "Cho mẫu số liệu đã sắp xếp: $4, 7, 9, 11, 15, 18$. Trung vị $M_e$ bằng",
                         "$10$", "$9$", "$11$", "$9.5$",
                         "A", "$M_e = (9 + 11)/2 = 10$."),
                make_mcq(7, "TH", "Cho mẫu số liệu: $2, 3, 3, 5, 5, 5, 7, 8$. Mốt của mẫu số liệu là",
                         "$5$", "$3$", "$2$", "$7$",
                         "A", "Số 5 xuất hiện 3 lần, nhiều nhất."),
                make_mcq(8, "TH", "Cho mẫu số liệu: $3, 6, 9, 12, 15, 18, 21$. Tứ phân vị thứ hai $Q_2$ bằng",
                         "$12$", "$9$", "$15$", "$6$",
                         "A", "Trung vị là số thứ 4: $Q_2 = 12$."),
                make_mcq(9, "VD", "Cho mẫu số liệu: $1, 4, 5, 8, 10, 12, 14, 18$. Tứ phân vị thứ nhất $Q_1$ bằng",
                         "$4.5$", "$4$", "$5$", "$5.5$",
                         "A", "Nửa dưới: $1, 4, 5, 8 \\Rightarrow Q_1 = (4 + 5)/2 = 4.5$."),
                make_mcq(10, "VD", "Cho mẫu số liệu: $1, 4, 5, 8, 10, 12, 14, 18$. Tứ phân vị thứ ba $Q_3$ bằng",
                         "$13$", "$12$", "$14$", "$11$",
                         "A", "Nửa trên: $10, 12, 14, 18 \\Rightarrow Q_3 = (12 + 14)/2 = 13$."),
                make_mcq(11, "VDC", "Một giáo viên ghi nhận điểm trung bình của tổ 1 (gồm 12 học sinh) là $7.5$ và tổ 2 (gồm 8 học sinh) là $8.5$. Điểm trung bình của cả hai tổ bằng",
                         "$7.9$", "$8.0$", "$7.8$", "$8.1$",
                         "A", "$\\overline{x} = (12 \\times 7.5 + 8 \\times 8.5) / 20 = (90 + 68) / 20 = 158 / 20 = 7.9$."),
                make_mcq(12, "VDC", "Biết rằng mẫu số liệu gồm $n$ số nguyên dương có trung vị là $14$. Nếu nhân tất cả các giá trị của mẫu số liệu với $3$ và cộng thêm $5$ thì trung vị mới bằng",
                         "$47$", "$42$", "$19$", "$14$",
                         "A", "Trung vị biến đổi theo phép biến đổi tuyến tính: $M_e' = 3 M_e + 5 = 3(14) + 5 = 42 + 5 = 47$.")
            ]
            tfs = [
                make_tf(1, "Một cửa hàng giày thống kê size giày bán được trong ngày: $37, 38, 38, 39, 39, 39, 40, 40, 41, 42$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Kích thước mẫu là $n = 10$.", True, "Có 10 đôi giày bán được."),
                    ("b", "Mốt của mẫu số liệu là $39$.", True, "Size 39 bán được 3 đôi, nhiều nhất."),
                    ("c", "Trung vị của mẫu số liệu là $39$.", True, "$M_e = (39 + 39)/2 = 39$."),
                    ("d", "Số trung bình bằng $40$.", False, "Tổng = 393, trung bình là $393 / 10 = 39.3$, không phải 40.")
                ]),
                make_tf(2, "Cho mẫu số liệu đã sắp xếp: $5, 8, 11, 14, 17, 20, 23$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số trung bình $\\overline{x} = 14$.", True, "Tổng = 98, $98/7 = 14$."),
                    ("b", "Trung vị $Q_2 = 14$.", True, "Phần tử ở giữa là 14."),
                    ("c", "Tứ phân vị thứ nhất $Q_1 = 8$.", True, "Nửa dưới: 5, 8, 11 $\\Rightarrow Q_1 = 8$."),
                    ("d", "Tứ phân vị thứ ba $Q_3 = 23$.", False, "Nửa trên: 17, 20, 23 $\\Rightarrow Q_3 = 20$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho mẫu số liệu: $12, 14, 16, 18, 20$. Tìm số trung bình cộng.",
                        "16", "$(12+14+16+18+20)/5 = 80/5 = 16$."),
                make_sa(2, "TH", "Cho mẫu số liệu: $15, 18, 21, 24, 27, 30$. Tìm trung vị $M_e$.",
                        "22.5", "$(21 + 24)/2 = 22.5$."),
                make_sa(3, "VD", "Cho mẫu số liệu: $4, 6, 8, 12, 16, 20$. Tìm tứ phân vị thứ nhất $Q_1$.",
                        "6", "Nửa dưới: 4, 6, 8. $Q_1 = 6$."),
                make_sa(4, "VD", "Cho mẫu số liệu: $4, 6, 8, 12, 16, 20$. Tìm tứ phân vị thứ ba $Q_3$.",
                        "16", "Nửa trên: 12, 16, 20. $Q_3 = 16$."),
                make_sa(5, "VDC", "Một mẫu gồm 4 số có trung bình bằng 10. Khi thêm một số 25 vào mẫu thì số trung bình mới của 5 số bằng bao nhiêu?",
                        "13", "Tổng cũ $= 4 \\times 10 = 40$. Tổng mới $= 40 + 25 = 65$. Trung bình mới $= 65 / 5 = 13$."),
                make_sa(6, "VDC", "Cho dãy số: $1, 3, 5, x, 11$ (đã sắp xếp tăng dần). Biết trung vị bằng trung bình cộng. Tìm giá trị của $x$.",
                        "7", "Trung vị là $x$. Trung bình $= (20 + x)/5 = x \\Leftrightarrow 20 + x = 5x \\Leftrightarrow 4x = 20 \\Rightarrow x = 5$. Kiểm tra: $x = 5$ thì dãy là 1, 3, 5, 5, 11; tổng 25/5 = 5 = trung vị. (Nếu $x = 7$ thì trung bình $(20+7)/5 = 5.4 \\ne 7$). Vậy $x = 5$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa và ý nghĩa của Mốt",
                           "Nêu định nghĩa mốt của mẫu số liệu. Trong kinh doanh bán lẻ hàng hoá (ví dụ giày dép, áo quần), mốt có vai trò thực tiễn quan trọng như thế nào?",
                           "1. Định nghĩa: Mốt của một mẫu số liệu, kí hiệu là $M_o$, là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu đó.\\n2. Vai trò trong kinh doanh: Trong kinh doanh thời trang (quần áo, giày dép, mũ nón), mốt chỉ ra kích cỡ (size), màu sắc hay kiểu dáng được người tiêu dùng lựa chọn nhiều nhất. Chủ cửa hàng dựa vào giá trị mốt để lập kế hoạch nhập hàng với số lượng lớn cho các size phổ biến (size mốt), tránh nhập quá nhiều các size ít người mua (size ngoại cỡ), từ đó tối ưu hoá vốn lưu động và tăng doanh thu bán hàng."),
                make_essay(2, "TH", 0.5, "So sánh số trung bình và tứ phân vị",
                           "Cho biết mối quan hệ giữa tứ phân vị $Q_2$ và trung vị $M_e$. Nêu lợi thế của việc sử dụng bộ ba tứ phân vị $(Q_1, Q_2, Q_3)$ so với chỉ dùng một số trung bình duy nhất.",
                           "1. Mối quan hệ: Tứ phân vị thứ hai $Q_2$ luôn trùng với trung vị $M_e$ của toàn bộ mẫu số liệu: $Q_2 = M_e$.\\n2. Lợi thế của bộ ba tứ phân vị:\\n- Số trung bình chỉ cho một con số duy nhất và dễ bị bóp méo bởi các giá trị bất thường.\\n- Bộ ba tứ phân vị $(Q_1, Q_2, Q_3)$ chia toàn bộ dữ liệu thành 4 phần bằng nhau (mỗi phần chứa xấp xỉ $25\\%$ số quan sát). Nó cho cái nhìn toàn diện về cấu trúc phân bố: $50\\%$ dữ liệu ở giữa nằm trong khoảng $[Q_1; Q_3]$, vị trí trung tâm nằm tại $Q_2$, từ đó đánh giá được độ lệch và độ phân tán của dữ liệu một cách rất trực quan."),
                make_essay(3, "VD", 0.5, "Xác định các số đặc trưng đo xu thế trung tâm",
                           "Khảo sát thời gian tự học ở nhà mỗi ngày (tính theo giờ) của một nhóm 12 học sinh thu được kết quả sau:\\n$2.0; 2.5; 3.0; 1.5; 2.0; 3.5; 2.5; 2.0; 4.0; 1.0; 2.5; 3.0$.\\na) Sắp xếp mẫu số liệu theo thứ tự không giảm.\\nb) Tính số giờ tự học trung bình của nhóm.\\nc) Tìm trung vị và các tứ phân vị $Q_1, Q_3$.",
                           "a) Sắp xếp dãy số liệu ($n = 12$):\\n$1.0; 1.5; 2.0; 2.0; 2.0; 2.5; 2.5; 2.5; 3.0; 3.0; 3.5; 4.0$.\\nb) Số giờ tự học trung bình:\\nTổng $= 1.0 + 1.5 + 3(2.0) + 3(2.5) + 2(3.0) + 3.5 + 4.0 = 29.5\\text{ giờ}$.\\n$\\overline{x} = \\frac{29.5}{12} \\approx 2.46\\text{ giờ/ngày}$.\\nc) Trung vị $Q_2$ ($n = 12$):\\n$Q_2 = \\frac{x_6 + x_7}{2} = \\frac{2.5 + 2.5}{2} = 2.5\\text{ giờ}$.\\nNửa dưới gồm 6 giá trị: $1.0, 1.5, 2.0, 2.0, 2.0, 2.5 \\Rightarrow Q_1 = \\frac{2.0 + 2.0}{2} = 2.0\\text{ giờ}$.\\nNửa trên gồm 6 giá trị: $2.5, 2.5, 3.0, 3.0, 3.5, 4.0 \\Rightarrow Q_3 = \\frac{3.0 + 3.0}{2} = 3.0\\text{ giờ}$."),
                make_essay(4, "VDC", 0.5, "Phân tích hiệu quả kinh doanh của hai chi nhánh",
                           "Doanh thu theo ngày (đơn vị: triệu đồng) của hai chi nhánh siêu thị mini A và B trong 7 ngày mở bán được ghi nhận như sau:\\nChi nhánh A: $15, 18, 19, 20, 21, 22, 25$.\\nChi nhánh B: $10, 12, 14, 20, 22, 24, 38$.\\na) Tính doanh thu trung bình mỗi ngày của từng chi nhánh.\\nb) Tìm trung vị doanh thu của hai chi nhánh.\\nc) Nhận xét về sự ổn định doanh thu giữa hai chi nhánh A và B.",
                           "a) Doanh thu trung bình:\\n- Chi nhánh A: $\\overline{x}_A = \\frac{15 + 18 + 19 + 20 + 21 + 22 + 25}{7} = \\frac{140}{7} = 20\\text{ triệu đồng}$.\\n- Chi nhánh B: $\\overline{x}_B = \\frac{10 + 12 + 14 + 20 + 22 + 24 + 38}{7} = \\frac{140}{7} = 20\\text{ triệu đồng}$.\\nb) Trung vị doanh thu ($n = 7$ lẻ, số ở vị trí thứ 4):\\n- Chi nhánh A: $M_{e(A)} = 20\\text{ triệu đồng}$.\\n- Chi nhánh B: $M_{e(B)} = 20\\text{ triệu đồng}$.\\nc) Nhận xét: Cả hai chi nhánh đều có cùng mức doanh thu trung bình ($20$ triệu đồng) và cùng mức trung vị ($20$ triệu đồng). Tuy nhiên, doanh thu của chi nhánh A phân bố rất đồng đều quanh mốc 20 triệu (từ 15 đến 25 triệu), hoạt động kinh doanh diễn ra đều đặn và ổn định. Trong khi đó chi nhánh B biến động mạnh (từ 10 triệu đến 38 triệu), có ngày doanh thu rất thấp và có ngày đột biến rất cao, tính rủi ro kinh doanh lớn hơn.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 14:
        # BÀI 14: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Khoảng biến thiên $R$ của mẫu số liệu là",
                         "Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất: $R = x_{\\max} - x_{\\min}$",
                         "Tổng giữa giá trị lớn nhất và giá trị nhỏ nhất",
                         "Hiệu giữa tứ phân vị thứ ba và thứ nhất",
                         "Trung bình cộng của giá trị lớn nhất và nhỏ nhất",
                         "A", "Định nghĩa khoảng biến thiên: $R = x_{\\max} - x_{\\min}$."),
                make_mcq(2, "NB", "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu được tính bằng công thức",
                         "$\\Delta_Q = Q_3 - Q_1$",
                         "$\\Delta_Q = Q_3 + Q_1$",
                         "$\\Delta_Q = Q_2 - Q_1$",
                         "$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$",
                         "A", "Công thức khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$."),
                make_mcq(3, "NB", "Phương sai $s^2$ của mẫu số liệu là",
                         "Trung bình cộng của các bình phương độ lệch giữa mỗi giá trị và số trung bình",
                         "Căn bậc hai của độ lệch chuẩn",
                         "Hiệu giữa giá trị lớn nhất và số trung bình",
                         "Trung bình cộng của các độ lệch",
                         "A", "Định nghĩa phương sai mẫu."),
                make_mcq(4, "NB", "Độ lệch chuẩn $s$ của mẫu số liệu được tính từ phương sai $s^2$ theo công thức",
                         "$s = \\sqrt{s^2}$",
                         "$s = (s^2)^2$",
                         "$s = 2s^2$",
                         "$s = \\frac{s^2}{n}$",
                         "A", "Độ lệch chuẩn là căn bậc hai của phương sai."),
                make_mcq(5, "TH", "Cho mẫu số liệu: $3, 7, 8, 12, 15, 20$. Khoảng biến thiên $R$ bằng",
                         "17", "12", "15", "23",
                         "A", "$R = 20 - 3 = 17$."),
                make_mcq(6, "TH", "Cho mẫu số liệu có $Q_1 = 14$ và $Q_3 = 26$. Khoảng tứ phân vị $\\Delta_Q$ bằng",
                         "12", "40", "6", "20",
                         "A", "$\\Delta_Q = 26 - 14 = 12$."),
                make_mcq(7, "TH", "Cho mẫu số liệu có phương sai $s^2 = 16$. Độ lệch chuẩn $s$ bằng",
                         "4", "256", "8", "2",
                         "A", "$s = \\sqrt{16} = 4$."),
                make_mcq(8, "TH", "Cho mẫu số liệu: $5, 5, 5, 5, 5$. Phương sai của mẫu số liệu này bằng",
                         "0", "5", "25", "1",
                         "A", "Các số bằng nhau thì không có sự biến thiên, phương sai bằng 0."),
                make_mcq(9, "VD", "Cho mẫu số liệu: $2, 4, 6, 8, 10$. Số trung bình $\\overline{x} = 6$. Phương sai $s^2$ của mẫu số liệu bằng",
                         "8", "4", "10", "2",
                         "A", "Độ lệch: $-4, -2, 0, 2, 4$. Bình phương: $16, 4, 0, 4, 16$. Tổng $= 40$. $s^2 = 40 / 5 = 8$."),
                make_mcq(10, "VD", "Cho mẫu số liệu: $2, 4, 6, 8, 10$. Độ lệch chuẩn $s$ của mẫu số liệu bằng",
                         "$2\\sqrt{2}$", "8", "$4$", "2",
                         "A", "$s = \\sqrt{8} = 2\\sqrt{2}$."),
                make_mcq(11, "VDC", "Một giá trị $x$ trong mẫu số liệu được coi là giá trị ngoại lai nếu",
                         "$x > Q_3 + 1.5\\Delta_Q$ hoặc $x < Q_1 - 1.5\\Delta_Q$",
                         "$x > Q_3 + \\Delta_Q$ hoặc $x < Q_1 - \\Delta_Q$",
                         "$x > 2 Q_3$ hoặc $x < 0.5 Q_1$",
                         "$x = x_{\\max}$ hoặc $x = x_{\\min}$",
                         "A", "Tiêu chuẩn xác định giá trị ngoại lai theo quy tắc $1.5\\Delta_Q$."),
                make_mcq(12, "VDC", "Hai xạ thủ bắn cùng số bia. Điểm trung bình của hai xạ thủ đều bằng 9. Độ lệch chuẩn điểm bắn của xạ thủ A là $0.5$ và xạ thủ B là $1.2$. Nhận định nào sau đây đúng?",
                         "Xạ thủ A bắn ổn định hơn xạ thủ B",
                         "Xạ thủ B bắn ổn định hơn xạ thủ A",
                         "Hai xạ thủ bắn ổn định như nhau",
                         "Xạ thủ B có thành tích tốt hơn",
                         "A", "Độ lệch chuẩn càng nhỏ thì độ phân tán càng thấp, tức phong độ càng ổn định.")
            ]
            tfs = [
                make_tf(1, "Cho mẫu số liệu điểm số của một học sinh: $6, 7, 7, 8, 8, 9, 9$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Khoảng biến thiên của mẫu số liệu là $R = 3$.", True, "$9 - 6 = 3$."),
                    ("b", "Số trung bình của mẫu số liệu bằng $\\overline{x} = 7.71$.", True, "Tổng = 54, $54/7 \\approx 7.71$."),
                    ("c", "Trung vị của mẫu số liệu là $Q_2 = 8$.", True, "Số thứ 4 là 8."),
                    ("d", "Khoảng tứ phân vị là $\\Delta_Q = 9 - 6 = 3$.", False, "$Q_1 = 7, Q_3 = 9 \\Rightarrow \\Delta_Q = 9 - 7 = 2$, không phải 3.")
                ]),
                make_tf(2, "Cho mẫu số liệu gồm 4 số: $1, 3, 5, 7$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số trung bình $\\overline{x} = 4$.", True, "$(1+3+5+7)/4 = 16/4 = 4$."),
                    ("b", "Tổng bình phương các độ lệch bằng 20.", True, "$(1-4)^2 + (3-4)^2 + (5-4)^2 + (7-4)^2 = 9 + 1 + 1 + 9 = 20$."),
                    ("c", "Phương sai của mẫu số liệu là $s^2 = 5$.", True, "$s^2 = 20 / 4 = 5$."),
                    ("d", "Độ lệch chuẩn của mẫu số liệu bằng 25.", False, "$s = \\sqrt{5} \\approx 2.24$, không phải 25.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho mẫu số liệu: $10, 15, 22, 35, 48$. Tính khoảng biến thiên $R$.",
                        "38", "$48 - 10 = 38$."),
                make_sa(2, "TH", "Cho mẫu số liệu có $Q_1 = 20, Q_3 = 35$. Tính khoảng tứ phân vị $\\Delta_Q$.",
                        "15", "$35 - 20 = 15$."),
                make_sa(3, "VD", "Cho mẫu số liệu có phương sai $s^2 = 64$. Tính độ lệch chuẩn $s$.",
                        "8", "$\\sqrt{64} = 8$."),
                make_sa(4, "VD", "Cho mẫu số liệu gồm 3 số: $2, 4, 6$. Tính phương sai $s^2$.",
                        "2.67", "Trung bình = 4. $(4 + 0 + 4)/3 = 8/3 \\approx 2.67$."),
                make_sa(5, "VDC", "Cho mẫu số liệu có $Q_1 = 15$ và $Q_3 = 25$. Ngưỡng trên để xác định giá trị ngoại lai $Q_3 + 1.5\\Delta_Q$ bằng bao nhiêu?",
                        "40", "$\\Delta_Q = 10 \\Rightarrow Q_3 + 1.5(10) = 25 + 15 = 40$."),
                make_sa(6, "VDC", "Nhiệt độ đo trong 5 ngày liên tiếp là: $28, 30, 31, 32, 34$. Tính phương sai của mẫu số liệu nhiệt độ.",
                        "4", "Trung bình $= 155/5 = 31$. Độ lệch: $-3, -1, 0, 1, 3$. Tổng bình phương: $9 + 1 + 0 + 1 + 9 = 20$. Phương sai $= 20/5 = 4$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Ý nghĩa của khoảng tứ phân vị và phương sai",
                           "Nêu định nghĩa và ý nghĩa của khoảng biến thiên $R$, khoảng tứ phân vị $\\Delta_Q$ và độ lệch chuẩn $s$ trong việc đo lường mức độ rủi ro/ổn định của mẫu số liệu.",
                           "1. Khoảng biến thiên $R = x_{\\max} - x_{\\min}$: Đo độ dãn của toàn bộ dữ liệu, nhưng rất dễ bị chi phối bởi các giá trị bất thường.\\n2. Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$: Đo độ phân tán của $50\\%$ số liệu nằm ở trung tâm, không bị ảnh hưởng bởi giá trị ngoại lai.\\n3. Phương sai $s^2$ và Độ lệch chuẩn $s = \\sqrt{s^2}$: Đo mức độ phân tán trung bình của từng giá trị quan sát quanh số trung bình. Trong kinh tế và tài chính, độ lệch chuẩn càng nhỏ thể hiện mức độ rủi ro càng thấp, phong độ và sự ổn định của hệ thống càng cao."),
                make_essay(2, "TH", 0.5, "Quy tắc xác định giá trị ngoại lai",
                           "Nêu quy tắc sử dụng khoảng tứ phân vị để phát hiện các giá trị ngoại lai (giá trị bất thường) trong mẫu số liệu. Cho ví dụ minh hoạ.",
                           "1. Tiêu chuẩn xác định giá trị ngoại lai: Giá trị $x$ trong mẫu số liệu được gọi là giá trị ngoại lai nếu thoả mãn một trong hai điều kiện sau:\\n- $x < Q_1 - 1.5\\Delta_Q$ (ngoại lai phía dưới).\\n- $x > Q_3 + 1.5\\Delta_Q$ (ngoại lai phía trên).\\n2. Ví dụ: Xét mẫu số liệu có $Q_1 = 10, Q_3 = 20 \\Rightarrow \\Delta_Q = 10$. Ranh giới ngoại lai phía dưới: $10 - 1.5(10) = -5$. Ranh giới ngoại lai phía trên: $20 + 1.5(10) = 35$. Bất kì quan sát nào nhỏ hơn $-5$ hoặc lớn hơn $35$ đều được xem là giá trị ngoại lai."),
                make_essay(3, "VD", 0.5, "Tính phương sai và độ lệch chuẩn",
                           "Điểm kiểm tra môn Toán của 5 học sinh trong một nhóm học tập như sau: $5, 6, 7, 8, 9$.\\na) Tính số trung bình cộng.\\nb) Lập bảng tính các độ lệch và bình phương độ lệch.\\nc) Tính phương sai và độ lệch chuẩn của mẫu số liệu trên.",
                           "a) Số trung bình cộng:\\n$\\overline{x} = \\frac{5 + 6 + 7 + 8 + 9}{5} = \\frac{35}{5} = 7.0$.\\nb) Bảng độ lệch và bình phương độ lệch:\\n- $x_1 = 5 \\Rightarrow x_1 - \\overline{x} = -2 \\Rightarrow (x_1 - \\overline{x})^2 = 4$\\n- $x_2 = 6 \\Rightarrow x_2 - \\overline{x} = -1 \\Rightarrow (x_2 - \\overline{x})^2 = 1$\\n- $x_3 = 7 \\Rightarrow x_3 - \\overline{x} = 0 \\Rightarrow (x_3 - \\overline{x})^2 = 0$\\n- $x_4 = 8 \\Rightarrow x_4 - \\overline{x} = 1 \\Rightarrow (x_4 - \\overline{x})^2 = 1$\\n- $x_5 = 9 \\Rightarrow x_5 - \\overline{x} = 2 \\Rightarrow (x_5 - \\overline{x})^2 = 4$\\nTổng các bình phương độ lệch: $4 + 1 + 0 + 1 + 4 = 10$.\\nc) Phương sai:\\n$s^2 = \\frac{10}{5} = 2.0$.\\nĐộ lệch chuẩn:\\n$s = \\sqrt{s^2} = \\sqrt{2} \\approx 1.41$."),
                make_essay(4, "VDC", 0.5, "So sánh chất lượng sản xuất giữa hai dây chuyền",
                           "Khối lượng sản phẩm (đơn vị: gram) được lấy mẫu kiểm tra từ hai máy đóng gói tự động A và B như sau:\\nMáy A: $98, 99, 100, 101, 102$ (trung bình $\\overline{x}_A = 100$).\\nMáy B: $92, 96, 100, 104, 108$ (trung bình $\\overline{x}_B = 100$).\\na) Tính phương sai và độ lệch chuẩn của từng máy.\\nb) Dây chuyền của máy nào đóng gói sản phẩm đồng đều và chất lượng ổn định hơn? Giải thích.",
                           "a) Tính toán:\\n- Máy A: Các độ lệch so với $100$ là: $-2, -1, 0, 1, 2$. Bình phương: $4, 1, 0, 1, 4$. Tổng $= 10$.\\nPhương sai máy A: $s_A^2 = \\frac{10}{5} = 2.0 \\Rightarrow s_A = \\sqrt{2} \\approx 1.41\\text{ g}$.\\n- Máy B: Các độ lệch so với $100$ là: $-8, -4, 0, 4, 8$. Bình phương: $64, 16, 0, 16, 64$. Tổng $= 160$.\\nPhương sai máy B: $s_B^2 = \\frac{160}{5} = 32.0 \\Rightarrow s_B = \\sqrt{32} \\approx 5.66\\text{ g}$.\\nb) Kết luận: Mặc dù cả hai máy đều có khối lượng trung bình bằng nhau ($100\\text{ g}$), nhưng máy A có phương sai và độ lệch chuẩn nhỏ hơn rất nhiều so với máy B ($s_A \\approx 1.41\\text{ g} < s_B \\approx 5.66\\text{ g}$). Điều này chứng minh máy A đóng gói đồng đều hơn, độ lệch khối lượng giữa các gói hàng rất nhỏ, kiểm soát chất lượng đạt tiêu chuẩn vượt trội so với máy B.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Để so sánh độ phân tán của hai mẫu số liệu có cùng đơn vị đo và số trung bình xấp xỉ nhau, người ta dùng",
                         "Độ lệch chuẩn", "Số trung bình", "Trung vị", "Mốt",
                         "A", "Độ lệch chuẩn đo mức độ phân tán."),
                make_mcq(2, "NB", "Nếu tất cả các giá trị trong mẫu số liệu đều được cộng thêm một hằng số $c$ thì",
                         "Phương sai và độ lệch chuẩn không đổi",
                         "Phương sai tăng thêm $c$",
                         "Độ lệch chuẩn tăng thêm $c$",
                         "Phương sai tăng thêm $c^2$",
                         "A", "Cộng hằng số làm tịnh tiến toàn bộ dữ liệu, khoảng cách giữa các số không đổi nên phương sai giữ nguyên."),
                make_mcq(3, "NB", "Nếu tất cả các giá trị trong mẫu số liệu được nhân với số thực $k > 0$ thì độ lệch chuẩn mới bằng",
                         "$k \\cdot s$", "$k^2 \\cdot s$", "$s$", "$s / k$",
                         "A", "Nhân với $k$ thì độ lệch chuẩn nhân với $k$."),
                make_mcq(4, "NB", "Khoảng tứ phân vị $\\Delta_Q$ không bị ảnh hưởng bởi",
                         "Các giá trị bất thường (ngoại lai)",
                         "Trung vị",
                         "Số lượng phần tử",
                         "Đơn vị đo",
                         "A", "Khoảng tứ phân vị đo 50% ở giữa nên không bị ảnh hưởng bởi ngoại lai."),
                make_mcq(5, "TH", "Cho mẫu số liệu: $12, 14, 18, 22, 30$. Khoảng biến thiên $R$ bằng",
                         "18", "16", "20", "30",
                         "A", "$R = 30 - 12 = 18$."),
                make_mcq(6, "TH", "Cho mẫu số liệu có $Q_1 = 18, Q_3 = 28$. Khoảng tứ phân vị $\\Delta_Q$ bằng",
                         "10", "46", "5", "14",
                         "A", "$\\Delta_Q = 28 - 18 = 10$."),
                make_mcq(7, "TH", "Cho mẫu số liệu có độ lệch chuẩn $s = 5$. Phương sai $s^2$ bằng",
                         "25", "10", "2.23", "50",
                         "A", "$s^2 = 5^2 = 25$."),
                make_mcq(8, "TH", "Cho mẫu số liệu: $10, 10, 10, 10$. Độ lệch chuẩn của mẫu số liệu bằng",
                         "0", "10", "1", "100",
                         "A", "Các số bằng nhau thì độ lệch chuẩn bằng 0."),
                make_mcq(9, "VD", "Cho mẫu số liệu: $1, 3, 5, 7, 9$. Số trung bình $\\overline{x} = 5$. Phương sai $s^2$ bằng",
                         "8", "4", "2", "10",
                         "A", "Độ lệch bình phương: $16 + 4 + 0 + 4 + 16 = 40$. Phương sai $= 40 / 5 = 8$."),
                make_mcq(10, "VD", "Cho mẫu số liệu: $1, 3, 5, 7, 9$. Độ lệch chuẩn $s$ bằng",
                         "$2\\sqrt{2}$", "8", "4", "2",
                         "A", "$s = \\sqrt{8} = 2\\sqrt{2}$."),
                make_mcq(11, "VDC", "Cho mẫu số liệu có $Q_1 = 20, Q_3 = 30$. Giá trị nào sau đây là giá trị ngoại lai?",
                         "48", "32", "18", "25",
                         "A", "$\\Delta_Q = 10$. Ngưỡng trên: $30 + 1.5(10) = 45$. Số $48 > 45$ nên là giá trị ngoại lai."),
                make_mcq(12, "VDC", "Hai lớp 10A và 10B kiểm tra cùng một đề. Điểm trung bình của hai lớp đều bằng $7.5$. Phương sai điểm của lớp 10A là $1.2$ và lớp 10B là $2.5$. Khẳng định nào sau đây đúng?",
                         "Học sinh lớp 10A có học lực đồng đều hơn học sinh lớp 10B",
                         "Học sinh lớp 10B có học lực đồng đều hơn",
                         "Lớp 10B có kết quả tốt hơn",
                         "Không thể so sánh độ đồng đều giữa hai lớp",
                         "A", "Phương sai nhỏ hơn đồng nghĩa với độ phân tán nhỏ hơn, tức học lực đồng đều hơn.")
            ]
            tfs = [
                make_tf(1, "Một người theo dõi giá cổ phiếu trong 5 phiên giao dịch liên tiếp: $24, 25, 26, 27, 28$ (nghìn đồng). Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Giá cổ phiếu trung bình trong 5 phiên là 26 nghìn đồng.", True, "$(24+25+26+27+28)/5 = 26$."),
                    ("b", "Khoảng biến thiên của giá cổ phiếu là $R = 4$ nghìn đồng.", True, "$28 - 24 = 4$."),
                    ("c", "Tổng các bình phương độ lệch so với số trung bình bằng 10.", True, "$4 + 1 + 0 + 1 + 4 = 10$."),
                    ("d", "Phương sai của mẫu số liệu là $s^2 = 2$.", True, "$s^2 = 10 / 5 = 2$.")
                ]),
                make_tf(2, "Cho mẫu số liệu có tứ phân vị thứ nhất $Q_1 = 30$ và tứ phân vị thứ ba $Q_3 = 42$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Khoảng tứ phân vị của mẫu số liệu là $\\Delta_Q = 12$.", True, "$42 - 30 = 12$."),
                    ("b", "Ngưỡng dưới để xác định giá trị ngoại lai là $12$.", True, "$Q_1 - 1.5\\Delta_Q = 30 - 1.5(12) = 30 - 18 = 12$."),
                    ("c", "Ngưỡng trên để xác định giá trị ngoại lai là $60$.", True, "$Q_3 + 1.5\\Delta_Q = 42 + 1.5(12) = 42 + 18 = 60$."),
                    ("d", "Giá trị $62$ không phải là giá trị ngoại lai.", False, "Vì $62 > 60$ nên nó là giá trị ngoại lai.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho mẫu số liệu: $5, 12, 18, 25, 33$. Tính khoảng biến thiên $R$.",
                        "28", "$33 - 5 = 28$."),
                make_sa(2, "TH", "Cho mẫu số liệu có $Q_1 = 12, Q_3 = 24$. Tính khoảng tứ phân vị $\\Delta_Q$.",
                        "12", "$24 - 12 = 12$."),
                make_sa(3, "VD", "Cho mẫu số liệu có phương sai $s^2 = 49$. Tính độ lệch chuẩn $s$.",
                        "7", "$\\sqrt{49} = 7$."),
                make_sa(4, "VD", "Cho mẫu số liệu gồm 5 số: $10, 10, 10, 10, 10$. Phương sai của mẫu bằng bao nhiêu?",
                        "0", "Tất cả các số bằng nhau thì phương sai bằng 0."),
                make_sa(5, "VDC", "Cho mẫu số liệu có $Q_1 = 40, Q_3 = 60$. Tính ngưỡng dưới $Q_1 - 1.5\\Delta_Q$ để tìm giá trị ngoại lai.",
                        "10", "$\\Delta_Q = 20 \\Rightarrow 40 - 1.5(20) = 40 - 30 = 10$."),
                make_sa(6, "VDC", "Cho 3 số: $3, 6, 9$. Tính độ lệch chuẩn của mẫu số liệu (làm tròn số thập phân 2 chữ số).",
                        "2.45", "Trung bình = 6. Bình phương: $9 + 0 + 9 = 18$. Phương sai $= 18/3 = 6$. Độ lệch chuẩn $= \\sqrt{6} \\approx 2.45$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Công thức tính phương sai và độ lệch chuẩn",
                           "Viết công thức định nghĩa tính phương sai $s^2$ và độ lệch chuẩn $s$ của mẫu số liệu gồm $n$ quan sát $x_1, x_2, ..., x_n$ có số trung bình $\\overline{x}$.",
                           "1. Công thức phương sai:\\n$s^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\overline{x})^2 = \\frac{(x_1 - \\overline{x})^2 + (x_2 - \\overline{x})^2 + ... + (x_n - \\overline{x})^2}{n}$.\\n2. Công thức độ lệch chuẩn:\\n$s = \\sqrt{s^2} = \\sqrt{\\frac{1}{n} \\sum_{i=1}^n (x_i - \\overline{x})^2}$.\\nĐộ lệch chuẩn có cùng đơn vị đo với đại lượng đang xét nên rất thuận tiện cho việc đánh giá thực tiễn."),
                make_essay(2, "TH", 0.5, "Tính chất tịnh tiến và tỉ lệ của phương sai",
                           "Cho mẫu số liệu $X = \\{x_1, x_2, ..., x_n\\}$ có phương sai $s_X^2$.\\na) Nếu tạo mẫu mới $Y = \\{x_i + c\\}$ (cộng hằng số $c$), chứng minh phương sai $s_Y^2 = s_X^2$.\\nb) Nếu tạo mẫu mới $Z = \\{k x_i\\}$ (nhân hằng số $k$), chứng minh phương sai $s_Z^2 = k^2 s_X^2$.",
                           "a) Ta có số trung bình của $Y$ là $\\overline{y} = \\overline{x} + c$. Độ lệch của từng giá trị: $y_i - \\overline{y} = (x_i + c) - (\\overline{x} + c) = x_i - \\overline{x}$. Do đó tổng các bình phương độ lệch không đổi, suy ra $s_Y^2 = s_X^2$ (đpcm).\\nb) Số trung bình của $Z$ là $\\overline{z} = k \\overline{x}$. Độ lệch của từng giá trị: $z_i - \\overline{z} = k x_i - k \\overline{x} = k(x_i - \\overline{x})$. Bình phương độ lệch: $(z_i - \\overline{z})^2 = k^2 (x_i - \\overline{x})^2$. Do đó phương sai mới: $s_Z^2 = \\frac{1}{n} \\sum k^2 (x_i - \\overline{x})^2 = k^2 s_X^2$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Tìm khoảng tứ phân vị và phát hiện ngoại lai",
                           "Thời gian chạy $100\\text{ m}$ (tính theo giây) của 8 vận động viên được ghi lại như sau:\\n$11.2; 11.4; 11.5; 11.6; 11.8; 12.0; 12.2; 15.6$.\\na) Tìm các tứ phân vị $Q_1, Q_2, Q_3$ và khoảng tứ phân vị $\\Delta_Q$.\\nb) Kiểm tra xem thời gian $15.6\\text{ giây}$ có phải là giá trị ngoại lai không?",
                           "a) Dãy đã sắp xếp ($n = 8$):\\n- Trung vị $Q_2 = \\frac{11.6 + 11.8}{2} = 11.7\\text{ s}$.\\n- Nửa dưới: $11.2, 11.4, 11.5, 11.6 \\Rightarrow Q_1 = \\frac{11.4 + 11.5}{2} = 11.45\\text{ s}$.\\n- Nửa trên: $11.8, 12.0, 12.2, 15.6 \\Rightarrow Q_3 = \\frac{12.0 + 12.2}{2} = 12.1\\text{ s}$.\\n- Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 12.1 - 11.45 = 0.65\\text{ s}$.\\nb) Kiểm tra giá trị ngoại lai:\\nNgưỡng trên: $Q_3 + 1.5\\Delta_Q = 12.1 + 1.5 \\times 0.65 = 12.1 + 0.975 = 13.075\\text{ s}$.\\nVì giá trị quan sát $15.6\\text{ s} > 13.075\\text{ s}$ nên $15.6\\text{ giây}$ chính là một giá trị ngoại lai (có thể do vận động viên bị vấp ngã hoặc thiết bị bấm giờ gặp sự cố)."),
                make_essay(4, "VDC", 0.5, "Đánh giá mức độ ổn định năng suất cây trồng",
                           "Năng suất thu hoạch lúa (tấn/ha) trong 5 năm liên tiếp tại hai cánh đồng thực nghiệm X và Y như sau:\\nCánh đồng X: $6.0; 6.2; 6.4; 6.6; 6.8$ (trung bình $\\overline{x}_X = 6.4$).\\nCánh đồng Y: $5.4; 5.9; 6.4; 6.9; 7.4$ (trung bình $\\overline{x}_Y = 6.4$).\\na) Tính khoảng biến thiên và phương sai của năng suất ở mỗi cánh đồng.\\nb) Người nông dân muốn chọn cánh đồng có năng suất ổn định, ít phụ thuộc vào rủi ro thời tiết thì nên chọn canh tác theo mô hình cánh đồng nào? Vì sao?",
                           "a) Tính toán năng suất:\\n- Cánh đồng X:\\nKhoảng biến thiên: $R_X = 6.8 - 6.0 = 0.8\\text{ tấn/ha}$.\\nĐộ lệch so với $6.4$: $-0.4, -0.2, 0, 0.2, 0.4$. Bình phương: $0.16, 0.04, 0, 0.04, 0.16$. Tổng $= 0.40$.\\nPhương sai: $s_X^2 = \\frac{0.40}{5} = 0.08\\text{ (tấn/ha)}^2 \\Rightarrow s_X = \\sqrt{0.08} \\approx 0.28\\text{ tấn/ha}$.\\n- Cánh đồng Y:\\nKhoảng biến thiên: $R_Y = 7.4 - 5.4 = 2.0\\text{ tấn/ha}$.\\nĐộ lệch so với $6.4$: $-1.0, -0.5, 0, 0.5, 1.0$. Bình phương: $1.00, 0.25, 0, 0.25, 1.00$. Tổng $= 2.50$.\\nPhương sai: $s_Y^2 = \\frac{2.50}{5} = 0.50\\text{ (tấn/ha)}^2 \\Rightarrow s_Y = \\sqrt{0.50} \\approx 0.71\\text{ tấn/ha}$.\\nb) Lời khuyên cho nông dân: Nên lựa chọn mô hình canh tác ở cánh đồng X. Lý do: Cả hai cánh đồng cho năng suất bình quân hàng năm như nhau ($6.4$ tấn/ha), nhưng cánh đồng X có phương sai và độ lệch chuẩn nhỏ hơn rất nhiều ($s_X \\approx 0.28 < s_Y \\approx 0.71$). Điều đó chứng minh năng suất ở cánh đồng X luôn giữ được sự ổn định cao qua các năm, ít chịu rủi ro bấp bênh do biến động của hạn hán, sâu bệnh hay thời tiết khắc nghiệt.")
            ]
            return mcqs, tfs, sas, essays

    return None
