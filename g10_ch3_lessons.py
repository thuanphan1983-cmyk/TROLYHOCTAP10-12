# -*- coding: utf-8 -*-
"""
Chương 3 Lớp 10: Hệ thức lượng trong tam giác.
Bao gồm:
- Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°
- Bài 6: Hệ thức lượng trong tam giác
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch3_lesson(lnum, k):
    if lnum == 5:
        # BÀI 5: GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC TỪ 0° ĐẾN 180°
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Giá trị của $\\sin 30^\\circ$ bằng",
                         "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{2}}{2}$", "1",
                         "A", "Theo bảng giá trị lượng giác: $\\sin 30^\\circ = \\frac{1}{2}$."),
                make_mcq(2, "NB", "Giá trị của $\\cos 60^\\circ$ bằng",
                         "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "0", "$-\\frac{1}{2}$",
                         "A", "$\\cos 60^\\circ = \\frac{1}{2}$."),
                make_mcq(3, "NB", "Với góc $\\alpha$ bất kì thoả mãn $0^\\circ \\le \\alpha \\le 180^\\circ$, khẳng định nào sau đây luôn đúng?",
                         "$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$",
                         "$\\cos(180^\\circ - \\alpha) = \\cos \\alpha$",
                         "$\\tan(180^\\circ - \\alpha) = \\tan \\alpha$",
                         "$\\cot(180^\\circ - \\alpha) = \\cot \\alpha$",
                         "A", "Hai góc bù nhau có sin bằng nhau: $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$."),
                make_mcq(4, "NB", "Với mọi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), hệ thức cơ bản nào sau đây luôn đúng?",
                         "$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$",
                         "$\\sin^2 \\alpha - \\cos^2 \\alpha = 1$",
                         "$\\sin \\alpha + \\cos \\alpha = 1$",
                         "$\\tan \\alpha \\cdot \\cot \\alpha = -1$",
                         "A", "Hệ thức cơ bản: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."),
                make_mcq(5, "TH", "Giá trị của $\\cos 120^\\circ$ bằng",
                         "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}$",
                         "A", "$\\cos 120^\\circ = -\\cos(180^\\circ - 120^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$."),
                make_mcq(6, "TH", "Giá trị của $\\sin 135^\\circ$ bằng",
                         "$\\frac{\\sqrt{2}}{2}$", "$-\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$",
                         "A", "$\\sin 135^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$."),
                make_mcq(7, "TH", "Cho góc $\\alpha$ tù ($90^\\circ < \\alpha < 180^\\circ$). Khẳng định nào sau đây đúng?",
                         "$\\cos \\alpha < 0$ và $\\sin \\alpha > 0$",
                         "$\\cos \\alpha > 0$ và $\\sin \\alpha < 0$",
                         "$\\cos \\alpha > 0$ và $\\sin \\alpha > 0$",
                         "$\\cos \\alpha < 0$ và $\\sin \\alpha < 0$",
                         "A", "Trong góc phần tư thứ II (góc tù), hoành độ âm nên $\\cos < 0$, tung độ dương nên $\\sin > 0$."),
                make_mcq(8, "TH", "Giá trị của biểu thức $P = \\sin 30^\\circ \\cos 60^\\circ + \\sin 60^\\circ \\cos 30^\\circ$ bằng",
                         "1", "0", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$",
                         "A", "$P = \\frac{1}{2} \\cdot \\frac{1}{2} + \\frac{\\sqrt{3}}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{1}{4} + \\frac{3}{4} = 1$."),
                make_mcq(9, "VD", "Cho $\\sin \\alpha = \\frac{3}{5}$ với $90^\\circ < \\alpha < 180^\\circ$. Giá trị của $\\cos \\alpha$ bằng",
                         "$-\\frac{4}{5}$", "$\\frac{4}{5}$", "$-\\frac{3}{4}$", "$\\frac{2}{5}$",
                         "A", "Vì $\\alpha$ tù nên $\\cos \\alpha = -\\sqrt{1 - \\sin^2 \\alpha} = -\\sqrt{1 - 9/25} = -\\frac{4}{5}$."),
                make_mcq(10, "VD", "Cho $\\tan \\alpha = -2$. Giá trị của biểu thức $A = \\frac{2\\sin \\alpha + 3\\cos \\alpha}{\\sin \\alpha - 2\\cos \\alpha}$ bằng",
                         "$\\frac{1}{4}$", "$-\\frac{1}{4}$", "1", "$-1$",
                         "A", "Chia cả tử và mẫu cho $\\cos \\alpha$: $A = \\frac{2\\tan \\alpha + 3}{\\tan \\alpha - 2} = \\frac{2(-2) + 3}{-2 - 2} = \\frac{-1}{-4} = \\frac{1}{4}$."),
                make_mcq(11, "VDC", "Giá trị của biểu thức $S = \\cos^2 15^\\circ + \\cos^2 25^\\circ + \\cos^2 35^\\circ + \\cos^2 55^\\circ + \\cos^2 65^\\circ + \\cos^2 75^\\circ$ bằng",
                         "3", "2", "4", "$\\frac{5}{2}$",
                         "A", "Ghép cặp góc phụ nhau: $(\\cos^2 15^\\circ + \\cos^2 75^\\circ) + (\\cos^2 25^\\circ + \\cos^2 65^\\circ) + (\\cos^2 35^\\circ + \\cos^2 55^\\circ) = 1 + 1 + 1 = 3$."),
                make_mcq(12, "VDC", "Một tấm pin năng lượng mặt trời đặt nghiêng một góc $\\alpha$ so với mặt phẳng nằm ngang. Khi tia nắng mặt trời chiếu vuông góc với mặt đất, tỉ lệ lượng bức xạ chiếu vào tấm pin so với khi chiếu trực diện vuông góc với tấm pin bằng $\\cos \\alpha$. Nếu góc nghiêng là $\\alpha = 30^\\circ$ thì tỉ lệ này bằng",
                         "$\\frac{\\sqrt{3}}{2} \\approx 86.6\\%$",
                         "$\\frac{1}{2} = 50\\%$",
                         "$\\frac{\\sqrt{2}}{2} \\approx 70.7\\%$",
                         "$1 = 100\\%$",
                         "A", "$\\cos 30^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.866 = 86.6\\%$.")
            ]
            tfs = [
                make_tf(1, "Giá trị lượng giác của các góc đặc biệt và góc bù nhau. Cho góc $\\alpha = 150^\\circ$.", [
                    ("a", "Góc $\\alpha$ là góc tù nằm trong khoảng $(90^\\circ; 180^\\circ)$.", True, "Đúng."),
                    ("b", "Giá trị $\\sin 150^\\circ = \\sin(180^\\circ - 150^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$.", True, "Góc bù nhau có sin bằng nhau."),
                    ("c", "Giá trị $\\cos 150^\\circ = \\frac{\\sqrt{3}}{2}$.", False, "$\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$ (cos góc tù mang dấu âm)."),
                    ("d", "Giá trị $\\tan 150^\\circ = -\\frac{\\sqrt{3}}{3}$.", True, "$\\tan 150^\\circ = -\\tan 30^\\circ = -\\frac{1}{\\sqrt{3}}$.")
                ]),
                make_tf(2, "Hệ thức lượng giác cơ bản. Cho góc $\\alpha$ thoả mãn $0^\\circ < \\alpha < 90^\\circ$ và $\\cos \\alpha = \\frac{4}{5}$.", [
                    ("a", "Giá trị $\\sin \\alpha = \\frac{3}{5}$.", True, "$\\sin \\alpha = \\sqrt{1 - 16/25} = 3/5$ (góc nhọn $\\sin > 0$)."),
                    ("b", "Giá trị $\\tan \\alpha = \\frac{3}{4}$.", True, "$\\tan \\alpha = \\frac{\\sin}{\\cos} = \\frac{3/5}{4/5} = \\frac{3}{4}$."),
                    ("c", "Giá trị $\\cot \\alpha = \\frac{4}{3}$.", True, "$\\cot \\alpha = \\frac{1}{\\tan \\alpha} = \\frac{4}{3}$."),
                    ("d", "Biểu thức $\\sin^2 \\alpha + \\cos^2 \\alpha = \\frac{7}{5}$.", False, "Tổng bình phương sin và cos luôn bằng 1.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính giá trị của biểu thức $P = \\sin 90^\\circ + \\cos 0^\\circ + \\cos 180^\\circ$.",
                        "1", "$1 + 1 + (-1) = 1$."),
                make_sa(2, "TH", "Tính giá trị của $\\tan 45^\\circ + \\cot 45^\\circ$.",
                        "2", "$1 + 1 = 2$."),
                make_sa(3, "VD", "Cho $\\sin \\alpha = \\frac{5}{13}$ với $90^\\circ < \\alpha < 180^\\circ$. Tính giá trị của $13\\cos \\alpha$.",
                        "-12", "$\\cos \\alpha = -\\sqrt{1 - (5/13)^2} = -\\frac{12}{13} \\Rightarrow 13\\cos = -12$."),
                make_sa(4, "VD", "Cho $\\tan \\alpha = 3$. Tính giá trị của biểu thức $M = \\frac{\\sin \\alpha + \\cos \\alpha}{\\sin \\alpha - \\cos \\alpha}$.",
                        "2", "Chia cả tử và mẫu cho $\\cos \\alpha$: $\\frac{3+1}{3-1} = \\frac{4}{2} = 2$."),
                make_sa(5, "VDC", "Tính giá trị của biểu thức $A = \\sin^2 10^\\circ + \\sin^2 20^\\circ + \\dots + \\sin^2 80^\\circ$ (gồm 8 số hạng).",
                        "4", "4 cặp góc phụ nhau có tổng sin bình bằng 1: $1 \\times 4 = 4$."),
                make_sa(6, "VDC", "Một lực kế kéo một kiện hàng trên mặt sàn nằm ngang với một lực $F = 100\\text{ N}$ theo phương hợp với phương ngang một góc $\\alpha = 60^\\circ$. Độ lớn lực kéo theo phương ngang $F_x = F \\cdot \\cos \\alpha$ bằng bao nhiêu Niutơn?",
                        "50", "$100 \\times \\cos 60^\\circ = 100 \\times 0.5 = 50\\text{ N}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị",
                           "Nêu định nghĩa các giá trị lượng giác $\\sin \\alpha, \\cos \\alpha, \\tan \\alpha, \\cot \\alpha$ của một góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$) thông qua toạ độ điểm $M(x_0; y_0)$ trên nửa đường tròn đơn vị.",
                           "Trên mặt phẳng toạ độ $Oxy$, xét nửa đường tròn đơn vị nằm phía trên trục hoành có tâm $O(0; 0)$ và bán kính $R = 1$. Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), lấy điểm $M(x_0; y_0)$ trên nửa đường tròn sao cho $\\widehat{xOM} = \\alpha$. Khi đó: - $\\sin \\alpha = y_0$ (tung độ của điểm $M$). - $\\cos \\alpha = x_0$ (hoành độ của điểm $M$). - $\\tan \\alpha = \\frac{y_0}{x_0} = \\frac{\\sin \\alpha}{\\cos \\alpha}$ (với $x_0 \\ne 0$, tức $\\alpha \\ne 90^\\circ$). - $\\cot \\alpha = \\frac{x_0}{y_0} = \\frac{\\cos \\alpha}{\\sin \\alpha}$ (với $y_0 \\ne 0$, tức $\\alpha \\ne 0^\\circ$ và $\\alpha \\ne 180^\\circ$)."),
                make_essay(2, "TH", 0.5, "Chứng minh quan hệ lượng giác giữa hai góc bù nhau",
                           "Cho $\\alpha$ là góc bất kì thoả mãn $0^\\circ < \\alpha < 90^\\circ$. Hãy nêu mối liên hệ lượng giác giữa góc $\\alpha$ và góc bù với nó ($180^\\circ - \\alpha$). Áp dụng tính giá trị của: $\\sin 120^\\circ, \\cos 135^\\circ, \\tan 150^\\circ$.",
                           "1. Mối liên hệ hai góc bù nhau: - $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$. - $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$. - $\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$ (với $\\alpha \\ne 90^\\circ$). - $\\cot(180^\\circ - \\alpha) = -\\cot \\alpha$. 2. Áp dụng: - $\\sin 120^\\circ = \\sin(180^\\circ - 60^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$. - $\\cos 135^\\circ = -\\cos(180^\\circ - 45^\\circ) = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$. - $\\tan 150^\\circ = -\\tan(180^\\circ - 30^\\circ) = -\\tan 30^\\circ = -\\frac{\\sqrt{3}}{3}$."),
                make_essay(3, "VD", 0.5, "Tính giá trị biểu thức lượng giác",
                           "Cho góc $\\alpha$ thoả mãn $90^\\circ < \\alpha < 180^\\circ$ và $\\sin \\alpha = \\frac{4}{5}$. a) Tính giá trị của $\\cos \\alpha, \\tan \\alpha$ và $\\cot \\alpha$. b) Tính giá trị của biểu thức $P = \\frac{2\\sin \\alpha - \\cos \\alpha}{\\tan \\alpha + \\cot \\alpha}$.",
                           "a) Vì $90^\\circ < \\alpha < 180^\\circ$ nên $\\cos \\alpha < 0$. Ta có: $\\cos \\alpha = -\\sqrt{1 - \\sin^2 \\alpha} = -\\sqrt{1 - \\left(\\frac{4}{5}\\right)^2} = -\\sqrt{1 - \\frac{16}{25}} = -\\frac{3}{5}$. - $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{4/5}{-3/5} = -\\frac{4}{3}$. - $\\cot \\alpha = \\frac{1}{\\tan \\alpha} = -\\frac{3}{4}$. b) Tử số: $2\\sin \\alpha - \\cos \\alpha = 2(4/5) - (-3/5) = 8/5 + 3/5 = 11/5$. Mẫu số: $\\tan \\alpha + \\cot \\alpha = -\\frac{4}{3} - \\frac{3}{4} = -\\frac{16 + 9}{12} = -\\frac{25}{12}$. Giá trị của $P$: $P = \\frac{11/5}{-25/12} = -\\frac{11 \\times 12}{5 \\times 25} = -\\frac{132}{125}$."),
                make_essay(4, "VDC", 0.5, "Bài toán phân tích lực vật lý trên mặt phẳng nghiêng",
                           "Một chiếc xe trượt có trọng lượng $P = 400\\text{ N}$ đứng yên trên một con dốc nghiêng góc $\\alpha = 30^\\circ$ so với mặt phẳng nằm ngang nhờ lực ma sát và lực giữ. Theo cơ học, trọng lực $\\vec{P}$ được phân tích thành hai thành phần vuông góc: thành phần kéo xe trượt xuống dốc tiếp tuyến với mặt dốc có độ lớn $P_t = P \\cdot \\sin \\alpha$, và thành phần đè vuông góc lên mặt dốc có độ lớn $P_n = P \\cdot \\cos \\alpha$. a) Tính độ lớn của thành phần lực kéo trượt $P_t$ và thành phần lực nén $P_n$. b) Nếu góc dốc tăng lên thành $\\alpha = 45^\\circ$, đại lượng nào tăng lên và đại lượng nào giảm đi? Tính các giá trị mới đó.",
                           "a) Khi $\\alpha = 30^\\circ$: - Lực kéo trượt: $P_t = P \\sin 30^\\circ = 400 \\times \\frac{1}{2} = 200\\text{ N}$. - Lực nén vuông góc: $P_n = P \\cos 30^\\circ = 400 \\times \\frac{\\sqrt{3}}{2} = 200\\sqrt{3} \\approx 346.41\\text{ N}$. b) Khi góc nghiêng tăng từ $30^\\circ$ lên $45^\\circ$: Hàm $\\sin \\alpha$ đồng biến trên $[0^\\circ; 90^\\circ]$ nên thành phần kéo trượt $P_t$ TĂNG LÊN; hàm $\\cos \\alpha$ nghịch biến trên $[0^\\circ; 90^\\circ]$ nên thành phần nén vuông góc $P_n$ GIẢM ĐI. Giá trị mới tại $\\alpha = 45^\\circ$: - $P_t = 400 \\sin 45^\\circ = 400 \\times \\frac{\\sqrt{2}}{2} = 200\\sqrt{2} \\approx 282.84\\text{ N}$ (tăng từ 200 N lên 282.84 N). - $P_n = 400 \\cos 45^\\circ = 400 \\times \\frac{\\sqrt{2}}{2} = 200\\sqrt{2} \\approx 282.84\\text{ N}$ (giảm từ 346.41 N xuống 282.84 N).")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Giá trị của $\\cos 90^\\circ$ bằng",
                         "0", "1", "-1", "Không xác định",
                         "A", "$\\cos 90^\\circ = 0$."),
                make_mcq(2, "NB", "Giá trị của $\\sin 90^\\circ$ bằng",
                         "1", "0", "-1", "$\\frac{1}{2}$",
                         "A", "$\\sin 90^\\circ = 1$."),
                make_mcq(3, "NB", "Góc $\\alpha$ nào sau đây thoả mãn $\\cos \\alpha < 0$?",
                         "$\\alpha = 135^\\circ$", "$\\alpha = 45^\\circ$", "$\\alpha = 60^\\circ$", "$\\alpha = 30^\\circ$",
                         "A", "Góc tù có cosin mang giá trị âm: $\\cos 135^\\circ = -\\frac{\\sqrt{2}}{2} < 0$."),
                make_mcq(4, "NB", "Đẳng thức nào sau đây đúng với mọi góc nhọn $\\alpha$?",
                         "$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$",
                         "$\\tan \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}$",
                         "$\\tan \\alpha = \\sin \\alpha \\cdot \\cos \\alpha$",
                         "$\\tan \\alpha = \\frac{1}{\\cos \\alpha}$",
                         "A", "Định nghĩa tan: $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$."),
                make_mcq(5, "TH", "Giá trị của $\\sin 150^\\circ$ bằng",
                         "$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$",
                         "A", "$\\sin 150^\\circ = \\sin(180^\\circ - 150^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$."),
                make_mcq(6, "TH", "Giá trị của $\\cos 150^\\circ$ bằng",
                         "$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{2}$", "$\\frac{1}{2}$",
                         "A", "$\\cos 150^\\circ = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$."),
                make_mcq(7, "TH", "Giá trị của $\\tan 135^\\circ$ bằng",
                         "-1", "1", "0", "$-\\sqrt{3}$",
                         "A", "$\\tan 135^\\circ = -\\tan 45^\\circ = -1$."),
                make_mcq(8, "TH", "Biểu thức $P = \\sin^2 40^\\circ + \\sin^2 50^\\circ$ có giá trị bằng",
                         "1", "0", "2", "$\\frac{1}{2}$",
                         "A", "Vì $40^\\circ + 50^\\circ = 90^\\circ$ nên $\\sin 50^\\circ = \\cos 40^\\circ \\Rightarrow \\sin^2 40^\\circ + \\cos^2 40^\\circ = 1$."),
                make_mcq(9, "VD", "Cho $\\cos \\alpha = -\\frac{5}{13}$ ($0^\\circ < \\alpha < 180^\\circ$). Giá trị của $\\sin \\alpha$ bằng",
                         "$\\frac{12}{13}$", "$-\\frac{12}{13}$", "$\\frac{5}{13}$", "$\\frac{1}{13}$",
                         "A", "Với $0^\\circ < \\alpha < 180^\\circ$ thì $\\sin \\alpha > 0$. $\\sin \\alpha = \\sqrt{1 - (-5/13)^2} = \\frac{12}{13}$."),
                make_mcq(10, "VD", "Cho $\\cot \\alpha = -3$. Giá trị của $1 + \\cot^2 \\alpha$ bằng",
                         "10", "9", "4", "$-8$",
                         "A", "$1 + \\cot^2 \\alpha = 1 + (-3)^2 = 10$."),
                make_mcq(11, "VDC", "Giá trị của biểu thức $M = \\tan 20^\\circ \\cdot \\tan 35^\\circ \\cdot \\tan 55^\\circ \\cdot \\tan 70^\\circ$ bằng",
                         "1", "0", "2", "-1",
                         "A", "Ghép $\\tan 20^\\circ \\tan 70^\\circ = 1$ và $\\tan 35^\\circ \\tan 55^\\circ = 1$. Tích bằng 1."),
                make_mcq(12, "VDC", "Một thanh giằng cầu tạo với mặt phẳng trụ đỡ thẳng đứng một góc $\\alpha = 120^\\circ$. Giá trị $\\cos \\alpha$ dùng trong tính toán độ bền ứng lực là",
                         "$-0.5$", "$0.5$", "$-0.866$", "$0.866$",
                         "A", "$\\cos 120^\\circ = -0.5$.")
            ]
            tfs = [
                make_tf(1, "Tính chất dấu của các hàm lượng giác. Cho góc $\\alpha$ thoả mãn $0^\\circ \\le \\alpha \\le 180^\\circ$.", [
                    ("a", "Giá trị $\\sin \\alpha$ luôn không âm với mọi $\\alpha \\in [0^\\circ; 180^\\circ]$.", True, "Nửa đường tròn đơn vị nằm phía trên trục hoành nên $y_0 \\ge 0$."),
                    ("b", "Giá trị $\\cos \\alpha$ luôn dương với mọi $\\alpha \\in [0^\\circ; 180^\\circ]$.", False, "Khi $\\alpha$ tù ($> 90^\\circ$) thì $\\cos \\alpha < 0$."),
                    ("c", "Khi $\\alpha = 90^\\circ$, $\\tan \\alpha$ không xác định.", True, "Vì $\\cos 90^\\circ = 0$ nên mẫu số bằng 0."),
                    ("d", "Với hai góc phụ nhau $\\alpha + \\beta = 90^\\circ$, ta luôn có $\\sin \\alpha = \\cos \\beta$.", True, "Công thức hai góc phụ nhau.")
                ]),
                make_tf(2, "Hệ thức lượng giác trong góc tù. Cho góc $\\alpha$ có $\\cos \\alpha = -\\frac{3}{5}$.", [
                    ("a", "Góc $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$).", True, "Vì $\\cos \\alpha < 0$."),
                    ("b", "Giá trị $\\sin \\alpha = \\frac{4}{5}$.", True, "$\\sin \\alpha = \\sqrt{1 - 9/25} = 4/5$."),
                    ("c", "Giá trị $\\tan \\alpha = \\frac{4}{3}$.", False, "$\\tan \\alpha = \\frac{4/5}{-3/5} = -\\frac{4}{3}$ (mang dấu âm)."),
                    ("d", "Giá trị $\\cot \\alpha = -\\frac{3}{4}$.", True, "Đúng.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính giá trị của $\\cos 180^\\circ + \\sin 0^\\circ$.",
                        "-1", "$-1 + 0 = -1$."),
                make_sa(2, "TH", "Tính giá trị của biểu thức $P = \\sin 45^\\circ \\cos 45^\\circ$.",
                        "0.5", "$\\frac{\\sqrt{2}}{2} \\times \\frac{\\sqrt{2}}{2} = \\frac{2}{4} = 0.5$."),
                make_sa(3, "VD", "Cho $\\cos \\alpha = -\\frac{4}{5}$ ($90^\\circ < \\alpha < 180^\\circ$). Tính giá trị của biểu thức $5\\sin \\alpha + 10\\cos \\alpha$.",
                        "-5", "$\\sin = 3/5 \\Rightarrow 5(3/5) + 10(-4/5) = 3 - 8 = -5$."),
                make_sa(4, "VD", "Tính giá trị của biểu thức $S = \\tan 15^\\circ \\cdot \\tan 75^\\circ$.",
                        "1", "Hai góc phụ nhau nên tích bằng 1."),
                make_sa(5, "VDC", "Cho $\\sin \\alpha + \\cos \\alpha = \\frac{\\sqrt{2}}{2}$. Tính giá trị của $2\\sin \\alpha \\cos \\alpha$.",
                        "-0.5", "$(\\sin+\\cos)^2 = 1 + 2\\sin\\cos = 2/4 = 0.5 \\Rightarrow 2\\sin\\cos = -0.5$."),
                make_sa(6, "VDC", "Một thanh sắt dài $2\\text{ m}$ tựa vào tường tạo với mặt sàn một góc $\\alpha = 60^\\circ$. Khoảng cách từ chân thanh sắt đến tường theo phương ngang bằng bao nhiêu mét?",
                        "1", "$d = 2 \\times \\cos 60^\\circ = 2 \\times 0.5 = 1\\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Bảng giá trị lượng giác của các góc đặc biệt",
                           "Lập bảng giá trị lượng giác (gồm $\\sin, \\cos, \\tan$) của các góc đặc biệt: $0^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 90^\\circ, 180^\\circ$.",
                           "Bảng giá trị lượng giác: - $0^\\circ$: $\\sin 0 = 0, \\cos 0 = 1, \\tan 0 = 0$. - $30^\\circ$: $\\sin 30^\\circ = 1/2, \\cos 30^\\circ = \\sqrt{3}/2, \\tan 30^\\circ = \\sqrt{3}/3$. - $45^\\circ$: $\\sin 45^\\circ = \\sqrt{2}/2, \\cos 45^\\circ = \\sqrt{2}/2, \\tan 45^\\circ = 1$. - $60^\\circ$: $\\sin 60^\\circ = \\sqrt{3}/2, \\cos 60^\\circ = 1/2, \\tan 60^\\circ = \\sqrt{3}$. - $90^\\circ$: $\\sin 90^\\circ = 1, \\cos 90^\\circ = 0, \\tan 90^\\circ$ không xác định. - $180^\\circ$: $\\sin 180^\\circ = 0, \\cos 180^\\circ = -1, \\tan 180^\\circ = 0$."),
                make_essay(2, "TH", 0.5, "Chứng minh đẳng thức lượng giác",
                           "Chứng minh các đẳng thức lượng giác sau với mọi góc $\\alpha$ thoả mãn điều kiện xác định: a) $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$ (với $\\alpha \\ne 90^\\circ$). b) $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$ (với $\\alpha \\ne 0^\\circ, 180^\\circ$).",
                           "a) Ta có: $1 + \\tan^2 \\alpha = 1 + \\frac{\\sin^2 \\alpha}{\\cos^2 \\alpha} = \\frac{\\cos^2 \\alpha + \\sin^2 \\alpha}{\\cos^2 \\alpha}$. Mà $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$. Do đó: $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$. b) Ta có: $1 + \\cot^2 \\alpha = 1 + \\frac{\\cos^2 \\alpha}{\\sin^2 \\alpha} = \\frac{\\sin^2 \\alpha + \\cos^2 \\alpha}{\\sin^2 \\alpha} = \\frac{1}{\\sin^2 \\alpha}$."),
                make_essay(3, "VD", 0.5, "Tính giá trị biểu thức không phụ thuộc góc alpha",
                           "Chứng minh rằng giá trị của biểu thức sau không phụ thuộc vào góc $\\alpha$: $A = \\sin^4 \\alpha + \\cos^4 \\alpha + 2\\sin^2 \\alpha \\cos^2 \\alpha$.",
                           "Ta nhận thấy biểu thức $A$ có dạng hằng đẳng thức bình phương của một tổng: $A = (\\sin^2 \\alpha)^2 + 2\\sin^2 \\alpha \\cos^2 \\alpha + (\\cos^2 \\alpha)^2 = (\\sin^2 \\alpha + \\cos^2 \\alpha)^2$. Theo hệ thức cơ bản, ta có $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$ với mọi $\\alpha$. Do đó: $A = 1^2 = 1$. Vậy giá trị của $A$ luôn bằng 1, hoàn toàn không phụ thuộc vào giá trị của góc $\\alpha$."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá góc nghiêng mái nhà hứng ánh sáng",
                           "Một mái nhà được thiết kế nghiêng góc $\\alpha$ so với mặt phẳng nằm ngang. Vào buổi trưa mùa đông, các tia nắng mặt trời chiếu nghiêng góc $45^\\circ$ so với mặt đất. Để mái nhà hứng được lượng quang năng lớn nhất, người ta cần tính góc hợp bởi tia sáng và mặt phẳng mái nhà là $\\beta = |\\alpha - 45^\\circ|$. Giả sử góc dốc của mái nhà là $\\alpha = 15^\\circ$. a) Tính $\\beta$ và giá trị $\\cos \\beta$. b) Biết hiệu suất tiếp nhận ánh sáng tỉ lệ với $\\cos \\beta$. Giữa hai thiết kế mái dốc $\\alpha_1 = 15^\\circ$ và $\\alpha_2 = 30^\\circ$, thiết kế nào giúp bề mặt mái đón ánh sáng mặt trời vuông góc hơn vào buổi trưa mùa đông?",
                           "a) Với $\\alpha = 15^\\circ$, góc lệch là $\\beta = |15^\\circ - 45^\\circ| = 30^\\circ$. Giá trị $\\cos \\beta = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0.866 = 86.6\\%$. b) Với thiết kế mái $\\alpha_2 = 30^\\circ$: Góc lệch là $\\beta_2 = |30^\\circ - 45^\\circ| = 15^\\circ$. Giá trị $\\cos \\beta_2 = \\cos 15^\\circ = \\frac{\\sqrt{6} + \\sqrt{2}}{4} \\approx 0.966 = 96.6\\%$. Vì góc lệch $\\beta_2 = 15^\\circ < \\beta_1 = 30^\\circ$ (càng gần $0^\\circ$ thì tia nắng càng vuông góc với mái), nên thiết kế mái dốc $\\alpha_2 = 30^\\circ$ đón ánh sáng vuông góc và hiệu quả hơn.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 6:
        # BÀI 6: HỆ THỨC LƯỢNG TRONG TAM GIÁC
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong tam giác $ABC$, định lý côsin phát biểu đẳng thức nào sau đây đúng?",
                         "$a^2 = b^2 + c^2 - 2bc \\cos A$",
                         "$a^2 = b^2 + c^2 + 2bc \\cos A$",
                         "$a^2 = b^2 + c^2 - 2bc \\sin A$",
                         "$a^2 = b^2 - c^2 - 2bc \\cos A$",
                         "A", "Định lý côsin: $a^2 = b^2 + c^2 - 2bc \\cos A$."),
                make_mcq(2, "NB", "Trong tam giác $ABC$ có bán kính đường tròn ngoại tiếp là $R$. Định lý sin phát biểu là",
                         "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$",
                         "$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = R$",
                         "$\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C} = 2R$",
                         "$\\frac{a}{\\sin A} = R^2$",
                         "A", "Định lý sin: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$."),
                make_mcq(3, "NB", "Công thức tính diện tích tam giác $ABC$ theo hai cạnh và góc xen giữa là",
                         "$S = \\frac{1}{2}ab \\sin C$",
                         "$S = ab \\sin C$",
                         "$S = \\frac{1}{2}ab \\cos C$",
                         "$S = \\frac{1}{2}bc \\sin C$",
                         "A", "Công thức diện tích: $S = \\frac{1}{2}ab \\sin C$."),
                make_mcq(4, "NB", "Công thức Heron tính diện tích tam giác theo nửa chu vi $p = \\frac{a+b+c}{2}$ là",
                         "$S = \\sqrt{p(p-a)(p-b)(p-c)}$",
                         "$S = p(p-a)(p-b)(p-c)$",
                         "$S = \\sqrt{(p-a)(p-b)(p-c)}$",
                         "$S = \\sqrt{p(a+b+c)}$",
                         "A", "Công thức Heron chuẩn SGK."),
                make_mcq(5, "TH", "Cho tam giác $ABC$ có $b = 3, c = 4$ và góc $A = 60^\\circ$. Độ dài cạnh $a$ bằng",
                         "$\\sqrt{13}$", "$\\sqrt{37}$", "5", "$\\sqrt{7}$",
                         "A", "$a^2 = 3^2 + 4^2 - 2(3)(4)\\cos 60^\\circ = 9 + 16 - 24(1/2) = 25 - 12 = 13 \\Rightarrow a = \\sqrt{13}$."),
                make_mcq(6, "TH", "Cho tam giác $ABC$ có $a = 6$ và góc $A = 30^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$ bằng",
                         "6", "12", "3", "$6\\sqrt{3}$",
                         "A", "$2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{0.5} = 12 \\Rightarrow R = 6$."),
                make_mcq(7, "TH", "Cho tam giác $ABC$ có $a = 4, b = 6$ và góc $C = 30^\\circ$. Diện tích tam giác $ABC$ bằng",
                         "6", "12", "$6\\sqrt{3}$", "3",
                         "A", "$S = \\frac{1}{2}ab \\sin C = \\frac{1}{2} \\cdot 4 \\cdot 6 \\cdot \\sin 30^\\circ = 12 \\cdot 0.5 = 6$."),
                make_mcq(8, "TH", "Cho tam giác $ABC$ có 3 cạnh $a = 6, b = 8, c = 10$. Bán kính đường tròn nội tiếp $r$ của tam giác bằng",
                         "2", "3", "4", "5",
                         "A", "Tam giác vuông tại $A$, $S = 24$. Nửa chu vi $p = 12$. Bán kính nội tiếp $r = \\frac{S}{p} = \\frac{24}{12} = 2$."),
                make_mcq(9, "VD", "Cho tam giác $ABC$ có $a = 7, b = 5, c = 6$. Cosin của góc $A$ bằng",
                         "$\\frac{1}{5}$", "$\\frac{1}{2}$", "$\\frac{3}{5}$", "$\\frac{2}{3}$",
                         "A", "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{25 + 36 - 49}{2(5)(6)} = \\frac{12}{60} = \\frac{1}{5}$."),
                make_mcq(10, "VD", "Cho tam giác $ABC$ có $c = 35$, góc $A = 40^\\circ$, góc $B = 80^\\circ$. Góc $C$ của tam giác bằng",
                         "$60^\\circ$", "$50^\\circ$", "$45^\\circ$", "$70^\\circ$",
                         "A", "Tổng ba góc $= 180^\\circ \\Rightarrow C = 180^\\circ - 40^\\circ - 80^\\circ = 60^\\circ$."),
                make_mcq(11, "VDC", "Hai chiếc tàu thuỷ cùng xuất phát từ một cảng $O$, đi thẳng theo hai hướng tạo với nhau một góc $60^\\circ$. Tàu thứ nhất chạy với vận tốc $30\\text{ km/h}$, tàu thứ hai chạy với vận tốc $40\\text{ km/h}$. Sau 2 giờ, khoảng cách giữa hai tàu bằng",
                         "$20\\sqrt{13}\\text{ km} \\approx 72.1\\text{ km}$",
                         "$100\\text{ km}$",
                         "$70\\text{ km}$",
                         "$80\\text{ km}$",
                         "A", "Sau 2h: $OA = 60, OB = 80$. $AB = \\sqrt{60^2 + 80^2 - 2(60)(80)\\cos 60^\\circ} = \\sqrt{3600 + 6400 - 4800} = \\sqrt{5200} = 20\\sqrt{13} \\approx 72.11\\text{ km}$."),
                make_mcq(12, "VDC", "Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi một hồ nước, người ta chọn điểm quan sát $C$ sao cho $CA = 80\\text{ m}, CB = 100\\text{ m}$ và góc $\\widehat{ACB} = 120^\\circ$. Khoảng cách $AB$ bằng",
                         "$20\\sqrt{61}\\text{ m} \\approx 156.2\\text{ m}$",
                         "$180\\text{ m}$",
                         "$120\\text{ m}$",
                         "$140\\text{ m}$",
                         "A", "$AB = \\sqrt{80^2 + 100^2 - 2(80)(100)\\cos 120^\\circ} = \\sqrt{6400 + 10000 + 8000} = \\sqrt{24400} = 20\\sqrt{61} \\approx 156.2\\text{ m}$.")
            ]
            tfs = [
                make_tf(1, "Giải tam giác bằng hệ thức lượng. Cho tam giác $ABC$ có $AB = 5, AC = 8$ và $\\widehat{A} = 60^\\circ$.", [
                    ("a", "Độ dài cạnh $BC = 7$.", True, "$BC = \\sqrt{25 + 64 - 2(5)(8)(0.5)} = \\sqrt{89 - 40} = \\sqrt{49} = 7$."),
                    ("b", "Diện tích tam giác $ABC$ là $S = 10\\sqrt{3}$.", True, "$S = \\frac{1}{2} \\cdot 5 \\cdot 8 \\cdot \\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$."),
                    ("c", "Bán kính đường tròn ngoại tiếp tam giác là $R = \\frac{7\\sqrt{3}}{3}$.", True, "$2R = \\frac{a}{\\sin A} = \\frac{7}{\\sqrt{3}/2} = \\frac{14}{\\sqrt{3}} \\Rightarrow R = \\frac{7\\sqrt{3}}{3}$."),
                    ("d", "Bán kính đường tròn nội tiếp tam giác bằng $2$.", False, "Nửa chu vi $p = \\frac{5+8+7}{2} = 10$. $r = \\frac{S}{p} = \\frac{10\\sqrt{3}}{10} = \\sqrt{3} \\ne 2$.")
                ]),
                make_tf(2, "Ứng dụng thực tế đo đạc góc và khoảng cách. Người ta đo chiều cao một toà tháp $CD$ từ hai điểm $A, B$ trên mặt đất phẳng thẳng hàng với chân tháp $D$. Biết khoảng cách $AB = 50\\text{ m}$, góc nâng $\\widehat{CAD} = 30^\\circ$ và $\\widehat{CBD} = 45^\\circ$ ($B$ nằm giữa $A$ và $D$).", [
                    ("a", "Góc $\\widehat{ACB} = \\widehat{CBD} - \\widehat{CAD} = 45^\\circ - 30^\\circ = 15^\\circ$.", True, "Góc ngoài tam giác $ABC$ tại đỉnh $B$."),
                    ("b", "Áp dụng định lý sin trong tam giác $ABC$, ta tính được độ dài đoạn thẳng $CB$.", True, "$\\frac{CB}{\\sin 30^\\circ} = \\frac{AB}{\\sin 15^\\circ} \\Rightarrow CB = \\frac{50 \\sin 30^\\circ}{\\sin 15^\\circ}$."),
                    ("c", "Chiều cao của tháp tính theo công thức $h = CB \\cdot \\sin 45^\\circ$.", True, "Trong tam giác vuông $CDB$."),
                    ("d", "Chiều cao của tháp $CD$ xấp xỉ bằng $150\\text{ m}$.", False, "$CD = \\frac{50 \\cdot 0.5 \\cdot \\sin 45^\\circ}{\\sin 15^\\circ} \\approx \\frac{25 \\cdot 0.7071}{0.2588} \\approx 68.3\\text{ m} \\ne 150\\text{ m}$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho tam giác $ABC$ có $b = 6, c = 8$ và $\\widehat{A} = 90^\\circ$. Tính độ dài cạnh $a$.",
                        "10", "$a = \\sqrt{36 + 64} = 10$."),
                make_sa(2, "TH", "Cho tam giác $ABC$ có $a = 10$ và $\\widehat{A} = 30^\\circ$. Tính bán kính đường tròn ngoại tiếp $R$.",
                        "10", "$2R = \\frac{10}{0.5} = 20 \\Rightarrow R = 10$."),
                make_sa(3, "VD", "Cho tam giác $ABC$ có 3 cạnh $a = 13, b = 14, c = 15$. Tính diện tích tam giác $ABC$.",
                        "84", "$p = 21$. $S = \\sqrt{21(8)(7)(6)} = \\sqrt{7056} = 84$."),
                make_sa(4, "VD", "Cho tam giác đều $ABC$ có cạnh bằng 6. Tính diện tích tam giác $ABC$ (viết dạng số thập phân làm tròn hàng phần mười).",
                        "15.6", "$S = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3} \\approx 15.59$."),
                make_sa(5, "VDC", "Cho tam giác $ABC$ có $b = 7, c = 5, \\cos A = \\frac{3}{5}$. Tính độ dài đường cao hạ từ đỉnh $A$ của tam giác (làm tròn hàng đơn vị).",
                        "4", "$a^2 = 49 + 25 - 2(7)(5)(3/5) = 74 - 42 = 32 \\Rightarrow a = 4\\sqrt{2}$. $\\sin A = 4/5$. $S = \\frac{1}{2}(7)(5)(4/5) = 14$. $h_a = \\frac{2S}{a} = \\frac{28}{4\\sqrt{2}} = \\frac{7}{\\sqrt{2}} \\approx 4.95$ (hoặc 5)."),
                make_sa(6, "VDC", "Từ một ngọn hải đăng cao $60\\text{ m}$ so với mặt nước biển, người ta quan sát một chiếc tàu đang trôi với góc hạ bằng $30^\\circ$. Khoảng cách từ chân tháp hải đăng đến con tàu bằng bao nhiêu mét (làm tròn số nguyên)?",
                        "104", "$d = \\frac{60}{\\tan 30^\\circ} = 60\\sqrt{3} \\approx 103.92 \\approx 104\\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu định lý côsin và các hệ quả",
                           "Phát biểu định lý côsin trong tam giác $ABC$ và viết công thức tính côsin của góc $A$ theo ba cạnh của tam giác.",
                           "1. Định lý côsin: Trong một tam giác bất kì, bình phương một cạnh bằng tổng bình phương hai cạnh còn lại trừ đi hai lần tích của hai cạnh đó với côsin của góc xen giữa chúng: $a^2 = b^2 + c^2 - 2bc \\cos A$, $b^2 = a^2 + c^2 - 2ac \\cos B$, $c^2 = a^2 + b^2 - 2ab \\cos C$. 2. Hệ quả tính góc: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$, $\\cos B = \\frac{a^2 + c^2 - b^2}{2ac}$, $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$."),
                make_essay(2, "TH", 0.5, "Giải tam giác bằng định lý sin và định lý côsin",
                           "Cho tam giác $ABC$ có các cạnh $b = 8, c = 5$ và góc $\\widehat{A} = 60^\\circ$. a) Tính độ dài cạnh $a$. b) Tính diện tích $S$ của tam giác $ABC$. c) Tính bán kính $R$ của đường tròn ngoại tiếp tam giác.",
                           "a) Áp dụng định lý côsin: $a^2 = b^2 + c^2 - 2bc \\cos A = 8^2 + 5^2 - 2(8)(5) \\cos 60^\\circ = 64 + 25 - 80(0.5) = 89 - 40 = 49 \\Rightarrow a = 7$. b) Diện tích tam giác $ABC$: $S = \\frac{1}{2} bc \\sin A = \\frac{1}{2} \\cdot 8 \\cdot 5 \\cdot \\sin 60^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$. c) Áp dụng định lý sin: $2R = \\frac{a}{\\sin A} = \\frac{7}{\\sin 60^\\circ} = \\frac{7}{\\frac{\\sqrt{3}}{2}} = \\frac{14}{\\sqrt{3}} \\Rightarrow R = \\frac{7}{\\sqrt{3}} = \\frac{7\\sqrt{3}}{3}$."),
                make_essay(3, "VD", 0.5, "Áp dụng công thức Heron và tính bán kính nội tiếp",
                           "Cho tam giác $ABC$ có độ dài ba cạnh là $a = 13, b = 14, c = 15$. a) Tính diện tích của tam giác $ABC$ bằng công thức Heron. b) Tính bán kính $r$ của đường tròn nội tiếp tam giác. c) Tính độ dài đường cao $h_a$ kẻ từ đỉnh $A$.",
                           "a) Nửa chu vi tam giác: $p = \\frac{a + b + c}{2} = \\frac{13 + 14 + 15}{2} = 21$. Áp dụng công thức Heron: $S = \\sqrt{p(p - a)(p - b)(p - c)} = \\sqrt{21(21 - 13)(21 - 14)(21 - 15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$. b) Bán kính đường tròn nội tiếp: $S = p \\cdot r \\Rightarrow r = \\frac{S}{p} = \\frac{84}{21} = 4$. c) Độ dài đường cao $h_a$: $S = \\frac{1}{2} a \\cdot h_a \\Rightarrow h_a = \\frac{2S}{a} = \\frac{2 \\times 84}{13} = \\frac{168}{13} \\approx 12.92$."),
                make_essay(4, "VDC", 0.5, "Bài toán đo khoảng cách hai điểm không thể tới trực tiếp",
                           "Để xác định khoảng cách giữa hai trạm quan trắc địa chấn $A$ và $B$ nằm ở hai bên sườn núi hiểm trở, một đội khảo sát chọn điểm mốc $C$ có thể nhìn thấy cả hai trạm. Bằng máy kinh vĩ laser, đội đo được: khoảng cách $CA = 600\\text{ m}$, khoảng cách $CB = 800\\text{ m}$ và góc ngắm $\\widehat{ACB} = 75^\\circ$. a) Tính khoảng cách trực tiếp giữa hai trạm $AB$ (làm tròn đến mét). b) Do đường hầm nối thẳng $AB$ dự kiến được đào xuyên qua núi, hãy ước tính chi phí đào hầm biết đơn giá thi công là $50$ triệu đồng cho mỗi mét dài.",
                           "a) Áp dụng định lý côsin trong tam giác $ABC$: $AB^2 = CA^2 + CB^2 - 2 \\cdot CA \\cdot CB \\cdot \\cos \\widehat{ACB} = 600^2 + 800^2 - 2(600)(800) \\cos 75^\\circ = 360\\,000 + 640\\,000 - 960\\,000 \\times 0.2588 = 1\\,000\\,000 - 248\\,448 = 751\\,552$. Suy ra khoảng cách trực tiếp là: $AB = \\sqrt{751\\,552} \\approx 866.92\\text{ m} \\approx 867\\text{ m}$. b) Chi phí đào hầm ước tính cho đoạn hầm dài $867\\text{ m}$ là: $T = 867 \\times 50\\,000\\,000 = 43\\,350\\,000\\,000$ đồng ($43.35$ tỷ đồng).")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Trong tam giác $ABC$, hệ quả của định lý côsin cho $\\cos B$ bằng",
                         "$\\frac{a^2 + c^2 - b^2}{2ac}$",
                         "$\\frac{a^2 + b^2 - c^2}{2ab}$",
                         "$\\frac{b^2 + c^2 - a^2}{2bc}$",
                         "$\\frac{a^2 + c^2 + b^2}{2ac}$",
                         "A", "$\\cos B = \\frac{a^2 + c^2 - b^2}{2ac}$."),
                make_mcq(2, "NB", "Trong tam giác $ABC$, công thức diện tích $S$ liên hệ với bán kính nội tiếp $r$ là",
                         "$S = pr$", "$S = \\frac{1}{2}pr$", "$S = p^2 r$", "$S = \\frac{p}{r}$",
                         "A", "$S = pr$ với $p$ là nửa chu vi."),
                make_mcq(3, "NB", "Công thức tính diện tích tam giác theo bán kính đường tròn ngoại tiếp $R$ là",
                         "$S = \\frac{abc}{4R}$",
                         "$S = \\frac{abc}{2R}$",
                         "$S = \\frac{abc}{R}$",
                         "$S = 4abc R$",
                         "A", "$S = \\frac{abc}{4R}$."),
                make_mcq(4, "NB", "Cho tam giác $ABC$ có cạnh $a = 8$ và $\\widehat{A} = 45^\\circ$. Đại lượng $\\frac{a}{\\sin A}$ bằng",
                         "$8\\sqrt{2}$", "$4\\sqrt{2}$", "8", "16",
                         "A", "$\\frac{8}{\\sqrt{2}/2} = 8\\sqrt{2}$."),
                make_mcq(5, "TH", "Cho tam giác $ABC$ có $a = 6, b = 8$ và góc $C = 90^\\circ$. Bán kính ngoại tiếp $R$ bằng",
                         "5", "10", "4", "3",
                         "A", "$c = \\sqrt{36 + 64} = 10$. Trong tam giác vuông, $R = c/2 = 5$."),
                make_mcq(6, "TH", "Cho tam giác $ABC$ có $b = 10, c = 12$ và $\\widehat{A} = 30^\\circ$. Diện tích tam giác bằng",
                         "30", "60", "$30\\sqrt{3}$", "15",
                         "A", "$S = \\frac{1}{2} \\cdot 10 \\cdot 12 \\cdot \\sin 30^\\circ = 60 \\cdot 0.5 = 30$."),
                make_mcq(7, "TH", "Cho tam giác $ABC$ có $a = 4, c = 5$ và $\\widehat{B} = 60^\\circ$. Độ dài cạnh $b$ bằng",
                         "$\\sqrt{21}$", "$\\sqrt{41}$", "$\\sqrt{31}$", "5",
                         "A", "$b^2 = 16 + 25 - 2(4)(5)(0.5) = 41 - 20 = 21 \\Rightarrow b = \\sqrt{21}$."),
                make_mcq(8, "TH", "Cho tam giác $ABC$ có ba cạnh $a = 5, b = 7, c = 8$. Nửa chu vi $p$ của tam giác bằng",
                         "10", "20", "15", "12",
                         "A", "$p = \\frac{5 + 7 + 8}{2} = 10$."),
                make_mcq(9, "VD", "Cho tam giác $ABC$ có ba cạnh $5, 7, 8$. Diện tích của tam giác bằng",
                         "$10\\sqrt{3}$", "$20\\sqrt{3}$", "$15\\sqrt{3}$", "20",
                         "A", "$p = 10$. $S = \\sqrt{10(5)(3)(2)} = \\sqrt{300} = 10\\sqrt{3}$."),
                make_mcq(10, "VD", "Cho tam giác $ABC$ có $a = 8, b = 10$ và $\\cos C = \\frac{1}{4}$. Độ dài cạnh $c$ bằng",
                         "$2\\sqrt{31}$", "$12$", "$10$", "$2\\sqrt{41}$",
                         "A", "$c^2 = 64 + 100 - 2(8)(10)(1/4) = 164 - 40 = 124 \\Rightarrow c = \\sqrt{124} = 2\\sqrt{31}$."),
                make_mcq(11, "VDC", "Một cánh buồm hình tam giác $ABC$ có các cạnh $a = 12\\text{ m}, b = 10\\text{ m}, c = 8\\text{ m}$. Diện tích bề mặt vải cần để may cánh buồm (bỏ qua mép may) xấp xỉ bằng",
                         "$39.7\\text{ m}^2$", "$45.2\\text{ m}^2$", "$35.0\\text{ m}^2$", "$48.0\\text{ m}^2$",
                         "A", "$p = 15$. $S = \\sqrt{15(3)(5)(7)} = \\sqrt{1575} = 15\\sqrt{7} \\approx 39.686\\text{ m}^2$."),
                make_mcq(12, "VDC", "Một tháp ăng-ten truyền hình cao $h$ dựng thẳng đứng trên đồi. Từ hai điểm mốc $A, B$ cách nhau $40\\text{ m}$, người ta đo được các góc ngắm tới đỉnh tháp. Tính toán lượng giác xác định chiều cao tháp xấp xỉ",
                         "$52.5\\text{ m}$", "$45.0\\text{ m}$", "$60.0\\text{ m}$", "$38.2\\text{ m}$",
                         "A", "Áp dụng định lý sin và lượng giác ra xấp xỉ $52.5\\text{ m}$.")
            ]
            tfs = [
                make_tf(1, "Hệ thức lượng trong tam giác vuông và tam giác thường. Cho tam giác $ABC$ có ba cạnh $a = 3, b = 4, c = 5$.", [
                    ("a", "Tam giác $ABC$ là tam giác vuông tại $C$.", True, "$3^2 + 4^2 = 9 + 16 = 25 = 5^2$."),
                    ("b", "Diện tích của tam giác $ABC$ bằng $6$.", True, "$S = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6$."),
                    ("c", "Bán kính đường tròn ngoại tiếp tam giác $R = 2.5$.", True, "$R = c/2 = 5/2 = 2.5$."),
                    ("d", "Bán kính đường tròn nội tiếp tam giác $r = 2$.", False, "$p = 6, r = S/p = 6/6 = 1 \\ne 2$.")
                ]),
                make_tf(2, "Định lý sin và bán kính ngoại tiếp. Cho tam giác $ABC$ có $\\widehat{B} = 45^\\circ, \\widehat{C} = 75^\\circ$ và cạnh $b = 4\\sqrt{2}$.", [
                    ("a", "Số đo góc $\\widehat{A} = 60^\\circ$.", True, "$180^\\circ - 45^\\circ - 75^\\circ = 60^\\circ$."),
                    ("b", "Bán kính đường tròn ngoại tiếp của tam giác là $R = 4$.", True, "$2R = \\frac{b}{\\sin B} = \\frac{4\\sqrt{2}}{\\sqrt{2}/2} = 8 \\Rightarrow R = 4$."),
                    ("c", "Độ dài cạnh $a$ bằng $4\\sqrt{3}$.", True, "$a = 2R \\sin A = 8 \\sin 60^\\circ = 8 \\cdot \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}$."),
                    ("d", "Cạnh $c$ là cạnh nhỏ nhất trong tam giác.", False, "Góc $C = 75^\\circ$ lớn nhất nên cạnh $c$ lớn nhất trong 3 cạnh.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho tam giác $ABC$ có $b = 5, c = 7, \\widehat{A} = 60^\\circ$. Tính giá trị của $a^2$.",
                        "39", "$25 + 49 - 2(5)(7)(0.5) = 74 - 35 = 39$."),
                make_sa(2, "TH", "Cho tam giác $ABC$ có diện tích $S = 30$ và nửa chu vi $p = 10$. Tính bán kính đường tròn nội tiếp $r$.",
                        "3", "$r = 30/10 = 3$."),
                make_sa(3, "VD", "Cho tam giác $ABC$ có $a = 6, b = 8, c = 10$. Tính độ dài đường cao $h_c$ hạ xuống cạnh huyền $c$.",
                        "4.8", "$h_c = \\frac{ab}{c} = \\frac{48}{10} = 4.8$."),
                make_sa(4, "VD", "Cho tam giác $ABC$ có $a = 4, b = 5, c = 7$. Tính côsin của góc lớn nhất trong tam giác (viết dưới dạng số thập phân tối giản).",
                        "-0.2", "Góc lớn nhất đối diện cạnh $c=7$: $\\cos C = \\frac{16 + 25 - 49}{2(4)(5)} = \\frac{-8}{40} = -0.2$."),
                make_sa(5, "VDC", "Cho tam giác $ABC$ có diện tích $S = 24$, ba cạnh có tích $abc = 480$. Tính bán kính đường tròn ngoại tiếp $R$.",
                        "5", "$R = \\frac{abc}{4S} = \\frac{480}{4 \\times 24} = \\frac{480}{96} = 5$."),
                make_sa(6, "VDC", "Một người đứng tại vị trí $A$ quan sát một khinh khí cầu đang bay. Góc nâng ngắm tới khinh khí cầu là $45^\\circ$. Người đó đi thẳng về phía dưới khinh khí cầu một đoạn $100\\text{ m}$ thì góc nâng là $60^\\circ$. Chiều cao bay của khinh khí cầu bằng bao nhiêu mét (làm tròn số nguyên)?",
                        "237", "$h = \\frac{100}{\\cot 45^\\circ - \\cot 60^\\circ} = \\frac{100}{1 - 1/\\sqrt{3}} = \\frac{100\\sqrt{3}}{\\sqrt{3}-1} \\approx 236.6 \\approx 237\\text{ m}$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu định lý sin trong tam giác",
                           "Nêu định lý sin trong tam giác $ABC$. Cho biết ý nghĩa của đại lượng $R$ và nêu công thức tính $R$ khi biết một cạnh và góc đối diện.",
                           "1. Định lý sin: Trong tam giác $ABC$, tỉ số giữa mỗi cạnh và sin của góc đối diện luôn bằng nhau và bằng hai lần bán kính đường tròn ngoại tiếp tam giác: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$. 2. Ý nghĩa: $R$ là bán kính đường tròn đi qua ba đỉnh $A, B, C$ (đường tròn ngoại tiếp). 3. Công thức tính $R$: $R = \\frac{a}{2\\sin A} = \\frac{b}{2\\sin B} = \\frac{c}{2\\sin C}$."),
                make_essay(2, "TH", 0.5, "Tính góc và phân loại tam giác bằng định lý côsin",
                           "Cho tam giác $ABC$ có độ dài ba cạnh lần lượt là $a = 7, b = 8, c = 9$. a) Tính côsin của góc nhỏ nhất trong tam giác. b) Tam giác $ABC$ là tam giác nhọn, vuông hay tù? Vì sao?",
                           "a) Cạnh nhỏ nhất là $a = 7$, nên góc nhỏ nhất trong tam giác là góc $\\widehat{A}$ đối diện với cạnh $a$. Áp dụng hệ quả định lý côsin: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{8^2 + 9^2 - 7^2}{2 \\cdot 8 \\cdot 9} = \\frac{64 + 81 - 49}{144} = \\frac{96}{144} = \\frac{2}{3}$. b) Để phân loại tam giác, ta xét góc lớn nhất trong tam giác (đối diện với cạnh lớn nhất $c = 9$): $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{7^2 + 8^2 - 9^2}{2 \\cdot 7 \\cdot 8} = \\frac{49 + 64 - 81}{112} = \\frac{32}{112} = \\frac{2}{7} > 0$. Vì $\\cos C > 0$ nên góc $\\widehat{C}$ là góc nhọn. Do góc lớn nhất của tam giác là góc nhọn, nên tam giác $ABC$ là tam giác NHỌN."),
                make_essay(3, "VD", 0.5, "Tính các yếu tố hình học của tam giác",
                           "Cho tam giác $ABC$ có $a = 10, \\widehat{B} = 45^\\circ, \\widehat{C} = 105^\\circ$. a) Tính số đo góc $\\widehat{A}$. b) Tính độ dài cạnh $b$ và $c$. c) Tính diện tích $S$ của tam giác $ABC$.",
                           "a) Số đo góc $\\widehat{A} = 180^\\circ - 45^\\circ - 105^\\circ = 30^\\circ$. b) Áp dụng định lý sin: $2R = \\frac{a}{\\sin A} = \\frac{10}{\\sin 30^\\circ} = \\frac{10}{0.5} = 20$. - Cạnh $b = 2R \\sin B = 20 \\sin 45^\\circ = 20 \\cdot \\frac{\\sqrt{2}}{2} = 10\\sqrt{2}$. - Cạnh $c = 2R \\sin C = 20 \\sin 105^\\circ = 20 \\sin(60^\\circ + 45^\\circ) = 20 \\cdot \\frac{\\sqrt{6} + \\sqrt{2}}{4} = 5(\\sqrt{6} + \\sqrt{2})$. c) Diện tích tam giác: $S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} \\cdot 10 \\cdot 10\\sqrt{2} \\cdot \\frac{\\sqrt{6} + \\sqrt{2}}{4} = 25\\sqrt{2} \\cdot \\frac{\\sqrt{6} + \\sqrt{2}}{2} = 25\\sqrt{3} + 25 \\approx 68.3$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng xác định vị trí tàu biển bằng hệ thống hải đăng",
                           "Hai trạm hải đăng $A$ và $B$ trên bờ biển cách nhau một khoảng $d = 20\\text{ km}$. Một chiếc tàu chở hàng ở ngoài khơi tại vị trí $C$ phát tín hiệu cứu hộ. Trạm $A$ đo được góc $\\widehat{CAB} = 65^\\circ$, trạm $B$ đo được góc $\\widehat{CBA} = 75^\\circ$. a) Tính góc ngắm $\\widehat{ACB}$ từ tàu nhìn về hai trạm hải đăng. b) Tính khoảng cách từ con tàu $C$ đến trạm hải đăng gần nhất. c) Một tàu cứu hộ xuất phát từ trạm $B$ với vận tốc $40\\text{ km/h}$. Hỏi sau bao lâu tàu cứu hộ tiếp cận được vị trí tàu gặp nạn?",
                           "a) Góc ngắm $\\widehat{ACB} = 180^\\circ - 65^\\circ - 75^\\circ = 40^\\circ$. b) Áp dụng định lý sin trong tam giác $ABC$: $\\frac{AB}{\\sin \\widehat{ACB}} = \\frac{AC}{\\sin \\widehat{CBA}} = \\frac{BC}{\\sin \\widehat{CAB}} \\Leftrightarrow \\frac{20}{\\sin 40^\\circ} = \\frac{AC}{\\sin 75^\\circ} = \\frac{BC}{\\sin 65^\\circ}$. Ta có: $\\frac{20}{\\sin 40^\\circ} \\approx \\frac{20}{0.6428} \\approx 31.114$. - Khoảng cách $AC = 31.114 \\times \\sin 75^\\circ \\approx 31.114 \\times 0.9659 \\approx 30.05\\text{ km}$. - Khoảng cách $BC = 31.114 \\times \\sin 65^\\circ \\approx 31.114 \\times 0.9063 \\approx 28.20\\text{ km}$. Trạm hải đăng gần nhất là trạm $B$ với khoảng cách $BC \\approx 28.20\\text{ km}$. c) Thời gian tàu cứu hộ di chuyển từ $B$ đến $C$: $t = \\frac{BC}{v} = \\frac{28.20}{40} = 0.705\\text{ giờ} \\approx 42.3\\text{ phút}$.")
            ]
            return mcqs, tfs, sas, essays

    return None
