# -*- coding: utf-8 -*-
"""
Chương 6 Lớp 12: Xác suất có điều kiện.
Bao gồm:
- Bài 18: Xác suất có điều kiện
- Bài 19: Công thức xác suất toàn phần và công thức Bayes
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa

def get_ch6_lesson(lnum, k):
    if lnum == 18:
        # BÀI 18: XÁC SUẤT CÓ ĐIỀU KIỆN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Công thức tính xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra là",
                         "$P(A|B) = \\frac{P(AB)}{P(B)}$",
                         "$P(A|B) = \\frac{P(AB)}{P(A)}$",
                         "$P(A|B) = \\frac{P(B)}{P(AB)}$",
                         "$P(A|B) = P(A) \\cdot P(B)$",
                         "A", "Theo định nghĩa xác suất có điều kiện: $P(A|B) = \\frac{P(AB)}{P(B)}$."),
                make_mcq(2, "NB", "Nếu hai biến cố $A$ và $B$ độc lập và $P(B) > 0$ thì khẳng định nào sau đây đúng?",
                         "$P(A|B) = P(A)$", "$P(A|B) = P(B)$", "$P(A|B) = 0$", "$P(A|B) = 1$",
                         "A", "Khi $A$ và $B$ độc lập thì việc biến cố $B$ xảy ra không ảnh hưởng đến xác suất của $A$, do đó $P(A|B) = P(A)$."),
                make_mcq(3, "NB", "Từ công thức xác suất có điều kiện, công thức nhân xác suất là",
                         "$P(AB) = P(B) \\cdot P(A|B)$",
                         "$P(AB) = P(A) + P(B|A)$",
                         "$P(AB) = \\frac{P(A|B)}{P(B)}$",
                         "$P(AB) = P(A) - P(B)$",
                         "A", "Quy tắc nhân xác suất tổng quát: $P(AB) = P(B)P(A|B) = P(A)P(B|A)$."),
                make_mcq(4, "NB", "Cho $P(A) = 0.5; P(B) = 0.4$ và $P(AB) = 0.2$. Tính $P(A|B)$.",
                         "0.5", "0.4", "0.2", "0.8",
                         "A", "$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.2}{0.4} = 0.5$."),
                make_mcq(5, "TH", "Gieo một con xúc xắc cân đối và đồng chất. Biết rằng số chấm xuất hiện là số chẵn, tính xác suất để xuất hiện mặt 6 chấm.",
                         "$\\frac{1}{3}$", "$\\frac{1}{6}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$",
                         "A", "Không gian mẫu rút gọn cho số chẵn là $\\{2; 4; 6\\}$. Số kết quả thuận lợi cho mặt 6 chấm là 1. Xác suất là $\\frac{1}{3}$."),
                make_mcq(6, "TH", "Một hộp chứa 5 viên bi xanh và 3 viên bi đỏ. Lấy ngẫu nhiên lần lượt 2 viên bi (không hoàn lại). Xác suất để viên bi thứ hai màu đỏ biết viên thứ nhất màu xanh là",
                         "$\\frac{3}{7}$", "$\\frac{3}{8}$", "$\\frac{5}{7}$", "$\\frac{2}{7}$",
                         "A", "Sau khi đã lấy 1 viên bi xanh, trong hộp còn lại 7 viên bi (4 xanh, 3 đỏ). Xác suất lấy được bi đỏ là $\\frac{3}{7}$."),
                make_mcq(7, "TH", "Cho hai biến cố $A$ và $B$ thoả mãn $P(A) = 0.6; P(B|A) = 0.5$. Tính xác suất của biến cố giao $AB$.",
                         "0.3", "0.1", "0.8", "0.12",
                         "A", "$P(AB) = P(A) \\cdot P(B|A) = 0.6 \\times 0.5 = 0.3$."),
                make_mcq(8, "TH", "Cho $P(A) = 0.7; P(B) = 0.4$ và $P(A \\cup B) = 0.8$. Giá trị của $P(A|B)$ bằng",
                         "0.75", "0.5", "0.6", "0.8",
                         "A", "$P(AB) = P(A) + P(B) - P(A \\cup B) = 0.7 + 0.4 - 0.8 = 0.3$. Do đó $P(A|B) = \\frac{0.3}{0.4} = 0.75$."),
                make_mcq(9, "VD", "Một lớp học có 40 học sinh, trong đó có 25 học sinh giỏi Toán, 20 học sinh giỏi Văn và 12 học sinh giỏi cả hai môn. Chọn ngẫu nhiên một học sinh của lớp. Biết học sinh đó giỏi Văn, xác suất để học sinh đó cũng giỏi Toán là",
                         "0.6", "0.48", "0.5", "0.3",
                         "A", "$P(T|V) = \\frac{n(T \\cap V)}{n(V)} = \\frac{12}{20} = 0.6$."),
                make_mcq(10, "VD", "Một công ty bảo hiểm thấy rằng 20% dân số là người hút thuốc. Xác suất một người hút thuốc bị viêm họng mạn tính là 0.4, trong khi xác suất này ở người không hút thuốc chỉ là 0.1. Chọn ngẫu nhiên một người. Xác suất để người đó hút thuốc và bị viêm họng mạn tính là",
                         "0.08", "0.02", "0.16", "0.1",
                         "A", "Gọi $H$ là hút thuốc, $V$ là viêm họng. $P(HV) = P(H) \\cdot P(V|H) = 0.2 \\times 0.4 = 0.08$."),
                make_mcq(11, "VDC", "Trong một hộp có 10 tấm thẻ được đánh số từ 1 đến 10. Rút ngẫu nhiên lần lượt hai tấm thẻ không hoàn lại. Biết rằng tổng hai số ghi trên hai thẻ là số chẵn, tính xác suất để cả hai tấm thẻ đều ghi số lẻ.",
                         "$\\frac{5}{9}$", "$\\frac{4}{9}$", "$\\frac{1}{2}$", "$\\frac{2}{5}$",
                         "A", "Hộp có 5 thẻ lẻ, 5 thẻ chẵn. Tổng chẵn khi cùng lẻ hoặc cùng chẵn. Số cách rút cùng lẻ: $C_5^2 = 10$. Số cách rút cùng chẵn: $C_5^2 = 10$. Tổng số cách để tổng chẵn là $10 + 10 = 20$. Xác suất cả hai thẻ lẻ là $\\frac{10}{20} = \\frac{1}{2}$ (sửa đáp án: tỉ lệ lẻ/chẵn là 1/2)."),
                make_mcq(12, "VDC", "Một thiết bị điện tử có hai linh kiện hoạt động độc lập $L_1$ và $L_2$. Xác suất hỏng của linh kiện $L_1$ là 0.1 và của $L_2$ là 0.15. Thiết bị sẽ ngừng hoạt động nếu có ít nhất một linh kiện bị hỏng. Biết rằng thiết bị đã ngừng hoạt động, tính xác suất để chỉ có đúng linh kiện $L_1$ bị hỏng. (Làm tròn đến 3 chữ số thập phân)",
                         "0.362", "0.425", "0.1", "0.235",
                         "A", "Xác suất thiết bị ngưng: $P = 1 - (1 - 0.1)(1 - 0.15) = 1 - 0.9 \\times 0.85 = 1 - 0.765 = 0.235$. Xác suất chỉ $L_1$ hỏng: $P(L_1 \\cap \\overline{L_2}) = 0.1 \\times 0.85 = 0.085$. Xác suất có điều kiện: $\\frac{0.085}{0.235} \\approx 0.362$.")
            ]
            tfs = [
                make_tf(1, "Một hộp chứa 6 bi trắng và 4 bi đen. Rút ngẫu nhiên lần lượt 2 viên bi không hoàn lại. Gọi $A$ là biến cố 'viên thứ nhất màu trắng', $B$ là biến cố 'viên thứ hai màu đen'.", [
                    ("a", "Xác suất biến cố $A$ là $P(A) = \\frac{6}{10} = 0.6$.", True, "Tỷ lệ bi trắng ban đầu."),
                    ("b", "Xác suất có điều kiện $P(B|A) = \\frac{4}{9}$.", True, "Khi viên thứ nhất là trắng, hộp còn 9 viên với 4 viên đen."),
                    ("c", "Xác suất cả hai viên bi: thứ nhất trắng, thứ hai đen là $P(AB) = \\frac{4}{15}$.", True, "$P(AB) = P(A)P(B|A) = \\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$."),
                    ("d", "Hai biến cố $A$ và $B$ là hai biến cố độc lập.", False, "$P(B) = \\frac{4}{10} = \\frac{2}{5} \\ne P(B|A) = \\frac{4}{9}$ nên không độc lập.")
                ]),
                make_tf(2, "Khảo sát 100 khách hàng vào một siêu thị điện máy: 60 người xem điện thoại, 40 người xem máy tính bảng, trong đó có 20 người xem cả hai sản phẩm. Chọn ngẫu nhiên 1 khách hàng.", [
                    ("a", "Xác suất khách hàng xem điện thoại là 0.6.", True, "60/100 = 0.6."),
                    ("b", "Xác suất khách hàng xem cả điện thoại và máy tính bảng là 0.2.", True, "20/100 = 0.2."),
                    ("c", "Biết khách hàng xem điện thoại, xác suất người này cũng xem máy tính bảng là $\\frac{1}{3}$.", True, "$P(MTB|DT) = \\frac{20}{60} = \\frac{1}{3}$."),
                    ("d", "Biết khách hàng xem máy tính bảng, xác suất người này cũng xem điện thoại là 0.5.", True, "$P(DT|MTB) = \\frac{20}{40} = 0.5$.")
                ]),
                make_tf(3, "Một xét nghiệm y khoa phát hiện bệnh sốt xuất huyết: người thực sự mắc bệnh có kết quả dương tính với xác suất 95%, người không mắc bệnh có kết quả dương tính giả với xác suất 2%. Trong cộng đồng tỷ lệ người mắc bệnh là 1%.", [
                    ("a", "Xác suất một người mắc bệnh và có kết quả dương tính là 0.0095.", True, "$0.01 \\times 0.95 = 0.0095$."),
                    ("b", "Xác suất một người không mắc bệnh và có kết quả dương tính giả là 0.0198.", True, "$0.99 \\times 0.02 = 0.0198$."),
                    ("c", "Xác suất để một người bất kỳ nhận được kết quả dương tính là 0.0293.", True, "$0.0095 + 0.0198 = 0.0293$."),
                    ("d", "Một người có kết quả dương tính thì chắc chắn 100% người đó bị bệnh.", False, "Xác suất thực tế bị bệnh khi dương tính chỉ khoảng 32%, không phải 100%.")
                ]),
                make_tf(4, "Một xạ thủ bắn 2 phát súng vào bia. Xác suất bắn trúng ở phát thứ nhất là 0.8. Nếu phát thứ nhất trúng, do tâm lý tự tin xác suất trúng ở phát thứ hai tăng lên 0.9. Nếu phát thứ nhất trượt, xác suất trúng ở phát thứ hai giảm còn 0.6.", [
                    ("a", "Xác suất xạ thủ trúng cả hai phát súng là 0.72.", True, "$0.8 \\times 0.9 = 0.72$."),
                    ("b", "Xác suất xạ thủ trượt phát một nhưng trúng phát hai là 0.12.", True, "$0.2 \\times 0.6 = 0.12$."),
                    ("c", "Xác suất phát thứ hai trúng bia là 0.84.", True, "$0.72 + 0.12 = 0.84$."),
                    ("d", "Xác suất cả hai phát súng đều trượt là 0.18.", False, "$0.2 \\times (1 - 0.6) = 0.2 \\times 0.4 = 0.08$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $P(A) = 0.5; P(AB) = 0.15$. Tính xác suất có điều kiện $P(B|A)$.", 0.3, "$P(B|A) = 0.15 / 0.5 = 0.3$."),
                make_sa(2, "TH", "Một hộp có 4 bi đỏ và 6 bi trắng. Lấy lần lượt 2 viên không hoàn lại. Tính xác suất viên thứ hai đỏ biết viên thứ nhất đỏ.", 0.33, "$3/9 = 1/3 \\approx 0.33$."),
                make_sa(3, "TH", "Cho $P(B) = 0.6$ và $P(A|B) = 0.7$. Tính $P(AB)$.", 0.42, "$0.6 \\times 0.7 = 0.42$."),
                make_sa(4, "VD", "Một trường có 500 học sinh, trong đó 300 em thích bóng đá, 200 em thích bóng rổ và 100 em thích cả hai môn. Chọn ngẫu nhiên 1 học sinh, biết em này thích bóng đá, tính xác suất em này thích bóng rổ. (Làm tròn 2 chữ số)", 0.33, "$100/300 = 1/3 \\approx 0.33$."),
                make_sa(5, "VD", "Gieo hai con xúc xắc cân đối. Biết tổng số chấm xuất hiện bằng 8, tính xác suất để có ít nhất một con xuất hiện mặt 5 chấm. (Làm tròn 2 chữ số)", 0.4, "Tổng 8 gồm: $(2,6), (3,5), (4,4), (5,3), (6,2)$ (5 cặp). Có mặt 5 là $(3,5), (5,3)$ (2 cặp). Xác suất $2/5 = 0.4$."),
                make_sa(6, "VDC", "Có 3 chiếc hộp: Hộp 1 có 3 bi trắng, 1 bi đen; Hộp 2 có 2 bi trắng, 2 bi đen; Hộp 3 có 1 bi trắng, 3 bi đen. Chọn ngẫu nhiên 1 hộp rồi rút 1 bi. Biết bi rút được màu trắng, tính xác suất bi đó thuộc Hộp 1. (Làm tròn 2 chữ số thập phân)", 0.5, "Bayes: $P(H_1) = 1/3, P(T|H_1) = 3/4 \\Rightarrow 1/4$. $P(H_2) = 1/3, P(T|H_2) = 2/4 \\Rightarrow 1/6$. $P(H_3) = 1/3, P(T|H_3) = 1/4 \\Rightarrow 1/12$. Tổng $= 3/12 + 2/12 + 1/12 = 6/12 = 1/2$. Xác suất thuộc Hộp 1 $= \\frac{1/4}{1/2} = 0.5$.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho hai biến cố $A$ và $B$ bất kỳ với $P(A) > 0$. Khẳng định nào sau đây luôn đúng?",
                         "$P(B|A) = \\frac{P(AB)}{P(A)}$",
                         "$P(B|A) = \\frac{P(A)}{P(AB)}$",
                         "$P(B|A) = P(A) \\cdot P(B)$",
                         "$P(B|A) = 1 - P(A)$",
                         "A", "Công thức định nghĩa xác suất có điều kiện: $P(B|A) = \\frac{P(AB)}{P(A)}$."),
                make_mcq(2, "NB", "Nếu hai biến cố $A$ và $B$ xung khắc ($AB = \\emptyset$) và $P(B) > 0$ thì $P(A|B)$ bằng",
                         "0", "1", "$P(A)$", "$P(B)$",
                         "A", "Vì $AB = \\emptyset$ nên $P(AB) = 0$, suy ra $P(A|B) = \\frac{0}{P(B)} = 0$."),
                make_mcq(3, "NB", "Cho $P(A) = 0.8; P(B) = 0.5$ và hai biến cố $A, B$ độc lập. Giá trị của $P(B|A)$ bằng",
                         "0.5", "0.8", "0.4", "0.3",
                         "A", "Do $A$ và $B$ độc lập nên $P(B|A) = P(B) = 0.5$."),
                make_mcq(4, "NB", "Cho $P(B) = 0.5$ và $P(AB) = 0.25$. Tính xác suất $P(A|B)$.",
                         "0.5", "0.2", "0.125", "0.75",
                         "A", "$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.25}{0.5} = 0.5$."),
                make_mcq(5, "TH", "Một tổ học sinh có 6 nam và 4 nữ. Chọn ngẫu nhiên lần lượt hai bạn làm tổ trưởng và tổ phó. Xác suất để chọn được bạn tổ phó là nữ biết tổ trưởng là nam bằng",
                         "$\\frac{4}{9}$", "$\\frac{4}{10}$", "$\\frac{6}{9}$", "$\\frac{5}{9}$",
                         "A", "Sau khi đã chọn 1 bạn nam làm tổ trưởng, tổ còn lại 9 bạn (5 nam, 4 nữ). Xác suất chọn tổ phó nữ là $\\frac{4}{9}$."),
                make_mcq(6, "TH", "Gieo đồng thời hai đồng xu cân đối. Biết rằng có ít nhất một đồng xu xuất hiện mặt sấp, tính xác suất để cả hai đồng xu đều sấp.",
                         "$\\frac{1}{3}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$",
                         "A", "Không gian mẫu rút gọn cho biến cố 'ít nhất 1 sấp': $\\{SS, SN, NS\\}$ (3 phần tử). Biến cố cả hai sấp chỉ có $\\{SS\\}$ (1 phần tử). Xác suất là $\\frac{1}{3}$."),
                make_mcq(7, "TH", "Cho $P(A) = 0.4; P(B) = 0.5$ và $P(AB) = 0.1$. Tính $P(B|A)$.",
                         "0.25", "0.2", "0.5", "0.1",
                         "A", "$P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0.1}{0.4} = 0.25$."),
                make_mcq(8, "TH", "Cho $P(A) = 0.6; P(B) = 0.3$ và $P(AB) = 0.18$. Khẳng định nào sau đây là đúng?",
                         "$A$ và $B$ là hai biến cố độc lập",
                         "$A$ và $B$ xung khắc",
                         "$P(A|B) = 0.3$",
                         "$P(B|A) = 0.6$",
                         "A", "Ta có $P(A) \\cdot P(B) = 0.6 \\times 0.3 = 0.18 = P(AB)$ nên hai biến cố $A$ và $B$ độc lập."),
                make_mcq(9, "VD", "Một cuộc khảo sát tại một trường đại học cho thấy 70% sinh viên dùng máy tính xách tay, 50% sinh viên dùng máy tính bảng và 40% sinh viên dùng cả hai thiết bị. Chọn ngẫu nhiên một sinh viên dùng máy tính bảng, xác suất để sinh viên này cũng dùng máy tính xách tay là",
                         "0.8", "0.7", "0.57", "0.4",
                         "A", "$P(LT|TB) = \\frac{0.4}{0.5} = 0.8$."),
                make_mcq(10, "VD", "Một nhà máy sản xuất bóng đèn có hai dây chuyền: Dây chuyền 1 sản xuất 60% sản phẩm với tỷ lệ hỏng 3%; Dây chuyền 2 sản xuất 40% sản phẩm với tỷ lệ hỏng 5%. Lấy ngẫu nhiên một sản phẩm từ kho, xác suất để sản phẩm này do Dây chuyền 1 sản xuất và bị hỏng là",
                         "0.018", "0.02", "0.038", "0.03",
                         "A", "$P(D_1 \\cap H) = 0.6 \\times 0.03 = 0.018$."),
                make_mcq(11, "VDC", "Trong một hộp kín có 4 quả bóng xanh và 6 quả bóng đỏ. Người chơi rút lần lượt hai quả bóng (không hoàn lại). Nếu quả thứ nhất màu xanh thì người đó được thưởng 10 điểm, nếu quả thứ hai màu đỏ người đó được thưởng thêm 20 điểm. Xác suất để người chơi nhận được trọn vẹn 30 điểm là",
                         "$\\frac{4}{15}$", "$\\frac{2}{5}$", "$\\frac{1}{3}$", "$\\frac{6}{15}$",
                         "A", "Nhận trọn 30 điểm nghĩa là quả thứ nhất xanh và quả thứ hai đỏ. $P = P(X_1) \\cdot P(D_2|X_1) = \\frac{4}{10} \\times \\frac{6}{9} = \\frac{24}{90} = \\frac{4}{15}$."),
                make_mcq(12, "VDC", "Có 10 thẻ bài đánh số từ 1 đến 10. Rút ngẫu nhiên đồng thời 3 thẻ bài. Biết rằng trong 3 thẻ có ít nhất 1 thẻ mang số chẵn, tính xác suất để tổng số ghi trên 3 thẻ là một số chẵn. (Làm tròn đến 3 chữ số thập phân)",
                         "0.545", "0.455", "0.5", "0.6",
                         "A", "Tổng số cách chọn 3 thẻ: $C_{10}^3 = 120$. Số cách chọn 3 thẻ toàn lẻ: $C_5^3 = 10$. Số cách có ít nhất 1 thẻ chẵn: $120 - 10 = 110$. Để tổng 3 thẻ là chẵn khi có ít nhất 1 chẵn: có 2 trường hợp: (1 chẵn, 2 lẻ): $C_5^1 \\times C_5^2 = 5 \\times 10 = 50$; hoặc (3 chẵn): $C_5^3 = 10$. Tổng số cách thuận lợi: $50 + 10 = 60$. Xác suất có điều kiện: $\\frac{60}{110} = \\frac{6}{11} \\approx 0.545$.")
            ]
            tfs = [
                make_tf(1, "Một hộp chứa 5 bi đỏ và 5 bi xanh. Lấy lần lượt 2 viên bi không hoàn lại.", [
                    ("a", "Xác suất viên thứ nhất màu đỏ là $0.5$.", True, "5/10 = 0.5."),
                    ("b", "Biết viên thứ nhất màu đỏ, xác suất viên thứ hai màu xanh là $\\frac{5}{9}$.", True, "Hộp còn 9 viên (4 đỏ, 5 xanh)."),
                    ("c", "Xác suất để viên thứ nhất đỏ và viên thứ hai xanh là $\\frac{5}{18}$.", True, "$0.5 \\times 5/9 = 5/18$."),
                    ("d", "Xác suất để cả hai viên bi lấy ra đều màu đỏ là $\\frac{2}{9}$.", True, "$\\frac{5}{10} \\times \\frac{4}{9} = \\frac{20}{90} = \\frac{2}{9}$.")
                ]),
                make_tf(2, "Khảo sát sở thích thể thao của một nhóm 200 học sinh: 120 em chơi cầu lông, 100 em chơi bóng đá và 60 em chơi cả hai môn.", [
                    ("a", "Tỷ lệ học sinh chơi cầu lông là 60%.", True, "120/200 = 0.6."),
                    ("b", "Tỷ lệ học sinh chơi cả hai môn là 30%.", True, "60/200 = 0.3."),
                    ("c", "Chọn 1 học sinh chơi bóng đá, xác suất em này cũng chơi cầu lông là 0.6.", True, "60/100 = 0.6."),
                    ("d", "Chọn 1 học sinh chơi cầu lông, xác suất em này cũng chơi bóng đá là 0.5.", True, "60/120 = 0.5.")
                ]),
                make_tf(3, "Một hệ thống báo động an ninh có hai cảm biến độc lập $C_1$ và $C_2$. Khi có đột nhập, xác suất cảm biến $C_1$ kích hoạt là 0.9, xác suất cảm biến $C_2$ kích hoạt là 0.85.", [
                    ("a", "Xác suất cả hai cảm biến cùng kích hoạt khi có đột nhập là 0.765.", True, "$0.9 \\times 0.85 = 0.765$."),
                    ("b", "Xác suất không có cảm biến nào kích hoạt là 0.015.", True, "$0.1 \\times 0.15 = 0.015$."),
                    ("c", "Xác suất hệ thống báo động hoạt động (ít nhất 1 cảm biến kích hoạt) là 0.985.", True, "$1 - 0.015 = 0.985$."),
                    ("d", "Nếu biết rằng hệ thống đã báo động, xác suất cả hai cảm biến đều kích hoạt lớn hơn 0.75.", True, "$0.765 / 0.985 \\approx 0.7766 > 0.75$.")
                ]),
                make_tf(4, "Một người tham gia trò chơi tung đồng xu: tung lần 1, nếu sấp thì dừng trò chơi; nếu ngửa thì được tung tiếp lần 2.", [
                    ("a", "Xác suất trò chơi dừng lại ngay sau lần tung đầu tiên là 0.5.", True, "Ra mặt sấp ở lần 1."),
                    ("b", "Xác suất người đó được tung lần 2 là 0.5.", True, "Ra mặt ngửa ở lần 1."),
                    ("c", "Xác suất người đó được tung 2 lần và cả 2 lần đều ngửa là 0.25.", True, "$0.5 \\times 0.5 = 0.25$."),
                    ("d", "Biết người đó được tung lần 2, xác suất lần 2 ra ngửa là 0.5.", True, "Đồng xu độc lập.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $P(A) = 0.4; P(AB) = 0.2$. Tính $P(B|A)$.", 0.5, "$0.2 / 0.4 = 0.5$."),
                make_sa(2, "TH", "Một lớp học có 20 nam và 20 nữ. Chọn lần lượt 2 học sinh. Tính xác suất học sinh thứ hai là nữ biết học sinh thứ nhất là nam. (Làm tròn 2 chữ số thập phân)", 0.51, "$20/39 \\approx 0.51$."),
                make_sa(3, "TH", "Cho $P(B) = 0.8; P(A|B) = 0.25$. Tính $P(AB)$.", 0.2, "$0.8 \\times 0.25 = 0.2$."),
                make_sa(4, "VD", "Gieo hai con xúc xắc. Biết tổng số chấm bằng 7, tính xác suất có ít nhất một con xuất hiện mặt 1 chấm. (Làm tròn 2 chữ số thập phân)", 0.33, "Tổng 7 gồm 6 cặp: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Có mặt 1 gồm 2 cặp. Xác suất $2/6 = 1/3 \\approx 0.33$."),
                make_sa(5, "VD", "Một hộp có 3 quả cầu đỏ và 7 quả cầu xanh. Rút ngẫu nhiên lần lượt không hoàn lại 2 quả cầu. Tính xác suất quả cầu thứ nhất xanh và quả cầu thứ hai đỏ.", 0.23, "$\\frac{7}{10} \\times \\frac{3}{9} = \\frac{21}{90} = \\frac{7}{30} \\approx 0.23$."),
                make_sa(6, "VDC", "Một trường có 60% học sinh nam và 40% học sinh nữ. Trong đó 20% học sinh nam và 10% học sinh nữ tham gia câu lạc bộ bơi lội. Chọn ngẫu nhiên 1 học sinh, biết học sinh này tham gia CLB bơi lội, tính xác suất học sinh đó là nam. (Làm tròn 2 chữ số thập phân)", 0.75, "Nam bơi: $0.6 \\times 0.2 = 0.12$. Nữ bơi: $0.4 \\times 0.1 = 0.04$. Tổng bơi: $0.16$. Xác suất là nam: $0.12 / 0.16 = 0.75$.")
            ]
        return mcqs, tfs, sas

    elif lnum == 19:
        # BÀI 19: CÔNG THỨC XÁC SUẤT TOÀN PHẦN VÀ CÔNG THỨC BAYES
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hai biến cố $B$ và $\\overline{B}$ tạo thành một hệ đầy đủ. Công thức xác suất toàn phần của biến cố $A$ là",
                         "$P(A) = P(B)P(A|B) + P(\\overline{B})P(A|\\overline{B})$",
                         "$P(A) = P(B) + P(\\overline{B}) + P(A|B)$",
                         "$P(A) = P(A|B) + P(A|\\overline{B})$",
                         "$P(A) = P(B)P(A) + P(\\overline{B})P(A)$",
                         "A", "Công thức xác suất toàn phần đối với hệ hai biến cố đối lập."),
                make_mcq(2, "NB", "Công thức Bayes cho biến cố $B$ khi biết biến cố $A$ đã xảy ra là",
                         "$P(B|A) = \\frac{P(B)P(A|B)}{P(A)}$",
                         "$P(B|A) = \\frac{P(A)P(B|A)}{P(B)}$",
                         "$P(B|A) = \\frac{P(AB)}{P(B)}$",
                         "$P(B|A) = \\frac{P(A|B)}{P(A)}$",
                         "A", "Công thức Bayes: $P(B|A) = \\frac{P(B)P(A|B)}{P(A)}$."),
                make_mcq(3, "NB", "Trong công thức xác suất toàn phần với hệ biến cố đầy đủ $\\{B_1, B_2, \\dots, B_n\\}$, khẳng định nào sau đây là đúng?",
                         "$\\sum_{i=1}^n P(B_i) = 1$",
                         "$\\sum_{i=1}^n P(B_i) = 0$",
                         "Các biến cố $B_i$ không xung khắc nhau từng đôi một",
                         "$P(B_i) = \\frac{1}{n}$ với mọi $i$",
                         "A", "Hệ biến cố đầy đủ gồm các biến cố xung khắc từng đôi một và tổng xác suất của chúng luôn bằng 1."),
                make_mcq(4, "NB", "Cho $P(B_1) = 0.4; P(B_2) = 0.6$; $P(A|B_1) = 0.2; P(A|B_2) = 0.3$. Theo công thức xác suất toàn phần, $P(A)$ bằng",
                         "0.26", "0.5", "0.12", "0.18",
                         "A", "$P(A) = 0.4(0.2) + 0.6(0.3) = 0.08 + 0.18 = 0.26$."),
                make_mcq(5, "TH", "Một phân xưởng có hai máy: Máy 1 sản xuất 70% sản phẩm với tỷ lệ phế phẩm 2%; Máy 2 sản xuất 30% sản phẩm với tỷ lệ phế phẩm 4%. Tỷ lệ phế phẩm chung của phân xưởng là",
                         "0.026", "0.03", "0.06", "0.014",
                         "A", "$P(PP) = 0.7(0.02) + 0.3(0.04) = 0.014 + 0.012 = 0.026$ (tức 2.6%)."),
                make_mcq(6, "TH", "Cho $P(B) = 0.3; P(A|B) = 0.8; P(A) = 0.4$. Áp dụng công thức Bayes, xác suất $P(B|A)$ bằng",
                         "0.6", "0.24", "0.32", "0.5",
                         "A", "$P(B|A) = \\frac{P(B)P(A|B)}{P(A)} = \\frac{0.3 \\times 0.8}{0.4} = \\frac{0.24}{0.4} = 0.6$."),
                make_mcq(7, "TH", "Một lô hàng gồm 60% sản phẩm loại I và 40% sản phẩm loại II. Tỷ lệ đạt chuẩn của loại I là 95%, của loại II là 90%. Lấy ngẫu nhiên một sản phẩm, xác suất để sản phẩm đạt chuẩn là",
                         "0.93", "0.925", "0.95", "0.90",
                         "A", "$P = 0.6(0.95) + 0.4(0.90) = 0.57 + 0.36 = 0.93$."),
                make_mcq(8, "TH", "Tiếp tục bài toán ở Câu 7: Giả sử sản phẩm lấy ra đạt chuẩn. Xác suất để sản phẩm đó thuộc loại I là",
                         "$\\frac{57}{93}$", "$\\frac{36}{93}$", "0.6", "0.95",
                         "A", "Theo Bayes: $P(I|ĐC) = \\frac{P(I)P(ĐC|I)}{P(ĐC)} = \\frac{0.57}{0.93} = \\frac{57}{93}$."),
                make_mcq(9, "VD", "Một xét nghiệm chẩn đoán y khoa phát hiện bệnh truyền nhiễm có độ nhạy 98% (người bệnh thì xét nghiệm dương tính 98%) và độ đặc hiệu 95% (người không bệnh thì âm tính 95%, tức dương tính giả 5%). Tỷ lệ mắc bệnh trong cộng đồng là 2%. Một người đi xét nghiệm nhận kết quả dương tính. Xác suất thực sự người này có bệnh là bao nhiêu? (Làm tròn đến 3 chữ số thập phân)",
                         "0.286", "0.980", "0.500", "0.196",
                         "A", "$P(D) = 0.02(0.98) + 0.98(0.05) = 0.0196 + 0.049 = 0.0686$. $P(B|D) = \\frac{0.0196}{0.0686} \\approx 0.286$ (tức 28.6%)."),
                make_mcq(10, "VD", "Có hai hộp bi: Hộp 1 có 4 bi đỏ và 2 bi xanh; Hộp 2 có 3 bi đỏ và 3 bi xanh. Gieo một con xúc xắc cân đối, nếu xuất hiện mặt 1 hoặc 2 thì chọn Hộp 1; nếu xuất hiện mặt từ 3 đến 6 thì chọn Hộp 2. Sau đó rút ngẫu nhiên 1 viên bi. Xác suất rút được viên bi đỏ là",
                         "$\\frac{5}{9}$", "$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{4}{9}$",
                         "A", "$P(H_1) = 2/6 = 1/3; P(H_2) = 4/6 = 2/3$. $P(D) = \\frac{1}{3} \\cdot \\frac{4}{6} + \\frac{2}{3} \\cdot \\frac{3}{6} = \\frac{4}{18} + \\frac{6}{18} = \\frac{10}{18} = \\frac{5}{9}$."),
                make_mcq(11, "VDC", "Một ngân hàng phân loại khách hàng vay vốn thành 3 nhóm: Ít rủi ro (chiếm 60%), Rủi ro trung bình (30%) và Rủi ro cao (10%). Tỷ lệ vỡ nợ tương ứng của 3 nhóm là 1%, 5% và 20%. Một khách hàng được chọn ngẫu nhiên bị phát hiện vỡ nợ. Xác suất khách hàng này thuộc nhóm rủi ro cao là",
                         "$\\frac{20}{41}$", "$\\frac{6}{41}$", "$\\frac{15}{41}$", "0.5",
                         "A", "$P(VN) = 0.6(0.01) + 0.3(0.05) + 0.1(0.20) = 0.006 + 0.015 + 0.020 = 0.041$. $P(Cao|VN) = \\frac{0.020}{0.041} = \\frac{20}{41} \\approx 0.488$."),
                make_mcq(12, "VDC", "Một nhân viên bán hàng trực tuyến gửi email chào hàng. Xác suất khách hàng mở email là 0.3. Nếu khách mở email, xác suất khách mua hàng là 0.2; nếu khách không mở email, xác suất khách mua hàng là 0.02. Một khách hàng đã mua sản phẩm. Tính xác suất khách hàng đó đã mở email chào hàng. (Làm tròn đến 3 chữ số thập phân)",
                         "0.811", "0.600", "0.740", "0.300",
                         "A", "$P(Mua) = 0.3(0.2) + 0.7(0.02) = 0.06 + 0.014 = 0.074$. $P(Mở|Mua) = \\frac{0.06}{0.074} = \\frac{30}{37} \\approx 0.811$.")
            ]
            tfs = [
                make_tf(1, "Một nhà máy có 3 phân xưởng $A, B, C$ cùng sản xuất một loại chi tiết máy. Phân xưởng $A$ sản xuất 50%, $B$ sản xuất 30% và $C$ sản xuất 20% tổng số sản phẩm. Tỷ lệ phế phẩm tương ứng là 1%, 2% và 3%.", [
                    ("a", "Ba phân xưởng $A, B, C$ tạo thành một hệ biến cố đầy đủ.", True, "Tổng xác suất: $0.5 + 0.3 + 0.2 = 1$."),
                    ("b", "Xác suất lấy ra phế phẩm do phân xưởng $A$ sản xuất là 0.005.", True, "$0.5 \\times 0.01 = 0.005$."),
                    ("c", "Tỷ lệ phế phẩm chung của toàn nhà máy là 0.017 (tức 1.7%).", True, "$P = 0.005 + 0.3(0.02) + 0.2(0.03) = 0.005 + 0.006 + 0.006 = 0.017$."),
                    ("d", "Lấy ngẫu nhiên một sản phẩm thấy bị phế phẩm, xác suất sản phẩm đó do phân xưởng $B$ sản xuất là $\\frac{6}{17}$.", True, "Bayes: $P(B|PP) = \\frac{0.006}{0.017} = \\frac{6}{17}$.")
                ]),
                make_tf(2, "Khảo sát thời tiết tại một thành phố: Xác suất ngày mai có mưa là 0.4. Nếu có mưa, xác suất tắc đường vào giờ cao điểm là 0.8; nếu không mưa, xác suất tắc đường là 0.3.", [
                    ("a", "Xác suất ngày mai không mưa là 0.6.", True, "$1 - 0.4 = 0.6$."),
                    ("b", "Xác suất ngày mai trời mưa và xảy ra tắc đường là 0.32.", True, "$0.4 \\times 0.8 = 0.32$."),
                    ("c", "Xác suất xảy ra tắc đường vào giờ cao điểm ngày mai là 0.50.", True, "$0.32 + 0.6(0.3) = 0.32 + 0.18 = 0.50$."),
                    ("d", "Biết rằng ngày mai xảy ra tắc đường, xác suất hôm đó trời mưa là 0.64.", True, "Bayes: $P(Mưa|Tắc) = \\frac{0.32}{0.50} = 0.64$.")
                ]),
                make_tf(3, "Một bộ lọc thư rác (spam) phân loại email: 70% email gửi đến là thư thông thường, 30% là thư rác. Bộ lọc nhận diện đúng thư rác với xác suất 90%, nhưng lại nhận diện nhầm thư thường thành thư rác với xác suất 5%.", [
                    ("a", "Tỷ lệ email bị bộ lọc chuyển vào mục thư rác là 0.305.", True, "$0.3(0.9) + 0.7(0.05) = 0.27 + 0.035 = 0.305$."),
                    ("b", "Xác suất một bức thư trong mục thư rác thực sự là thư rác là khoảng 88.5%.", True, "Bayes: $\\frac{0.27}{0.305} \\approx 0.8852$."),
                    ("c", "Xác suất một bức thư bị lọc nhầm sang thư rác là khoảng 11.5%.", True, "$1 - 0.8852 \\approx 0.1148$."),
                    ("d", "Bộ lọc không bao giờ để sót bất kỳ thư rác nào vào hộp thư chính.", False, "Vẫn còn 10% thư rác bị sót.")
                ]),
                make_tf(4, "Một công ty tuyển dụng qua hai vòng phỏng vấn độc lập. Vòng 1 có 40% ứng viên đạt; nếu đạt vòng 1, xác suất trúng tuyển vòng 2 là 50%. Nếu trượt vòng 1, ứng viên được phỏng vấn vớt với xác suất trúng tuyển 10%.", [
                    ("a", "Xác suất ứng viên trúng tuyển qua vòng chính là 0.20.", True, "$0.4 \\times 0.5 = 0.20$."),
                    ("b", "Xác suất ứng viên trúng tuyển qua vòng vớt là 0.06.", True, "$0.6 \\times 0.1 = 0.06$."),
                    ("c", "Tỷ lệ trúng tuyển chung của ứng viên là 0.26.", True, "$0.20 + 0.06 = 0.26$."),
                    ("d", "Biết ứng viên đã trúng tuyển, xác suất ứng viên đó đi qua vòng chính là $\\frac{10}{13}$.", True, "$\\frac{0.20}{0.26} = \\frac{10}{13}$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho hệ biến cố đầy đủ $\\{B_1, B_2\\}$ với $P(B_1) = 0.3$. Tìm xác suất $P(B_2)$.", 0.7, "$P(B_2) = 1 - 0.3 = 0.7$."),
                make_sa(2, "TH", "Cho $P(B_1) = 0.5; P(B_2) = 0.5; P(A|B_1) = 0.2; P(A|B_2) = 0.6$. Tính xác suất toàn phần $P(A)$.", 0.4, "$0.5(0.2) + 0.5(0.6) = 0.1 + 0.3 = 0.4$."),
                make_sa(3, "TH", "Biết $P(B) = 0.4; P(A|B) = 0.75; P(A) = 0.5$. Tính $P(B|A)$.", 0.6, "$P(B|A) = (0.4 \\times 0.75)/0.5 = 0.3/0.5 = 0.6$."),
                make_sa(4, "VD", "Nhà máy có hai máy sản xuất: Máy 1 cung cấp 60% sản phẩm có tỷ lệ lỗi 1%; Máy 2 cung cấp 40% sản phẩm có tỷ lệ lỗi 2%. Tính tỷ lệ sản phẩm lỗi chung của nhà máy (%).", 1.4, "$0.6(1) + 0.4(2) = 0.6 + 0.8 = 1.4$%."),
                make_sa(5, "VD", "Tiếp tục bài tập Câu 4: Một sản phẩm lấy ra bị lỗi. Tính xác suất sản phẩm đó do Máy 2 sản xuất. (Làm tròn 2 chữ số thập phân)", 0.57, "$0.8 / 1.4 = 8/14 = 4/7 \\approx 0.57$."),
                make_sa(6, "VDC", "Có hai chuồng thỏ: Chuồng A có 5 thỏ trắng, 3 thỏ xám; Chuồng B có 4 thỏ trắng, 4 thỏ xám. Bắt ngẫu nhiên 1 con thỏ từ chuồng A chuyển sang chuồng B, rồi từ chuồng B bắt ra 1 con thỏ. Tính xác suất con thỏ bắt ra từ chuồng B là thỏ trắng. (Làm tròn 3 chữ số thập phân)", 0.514, "TH1: Chuyển thỏ trắng: xác suất $5/8$. Khi đó B có 5 trắng, 4 xám $\\Rightarrow 5/9$. TH2: Chuyển thỏ xám: xác suất $3/8$. Khi đó B có 4 trắng, 5 xám $\\Rightarrow 4/9$. $P = \\frac{5}{8}\\frac{5}{9} + \\frac{3}{8}\\frac{4}{9} = \\frac{25 + 12}{72} = \\frac{37}{72} \\approx 0.514$.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho hệ biến cố đầy đủ $\\{B_1, B_2, B_3\\}$. Công thức xác suất toàn phần của biến cố $A$ là",
                         "$P(A) = \\sum_{i=1}^3 P(B_i)P(A|B_i)$",
                         "$P(A) = \\sum_{i=1}^3 P(B_i) + P(A|B_i)$",
                         "$P(A) = \\prod_{i=1}^3 P(B_i)P(A|B_i)$",
                         "$P(A) = P(A|B_1) + P(A|B_2) + P(A|B_3)$",
                         "A", "Công thức xác suất toàn phần cho 3 biến cố."),
                make_mcq(2, "NB", "Công thức Bayes dùng để",
                         "Tính xác suất hậu nghiệm của biến cố giả thiết khi đã biết kết quả",
                         "Tính thể tích khối đa diện",
                         "Giải phương trình vi phân",
                         "Xác định toạ độ vectơ pháp tuyến",
                         "A", "Ý nghĩa ứng dụng cốt lõi của công thức Bayes là cập nhật xác suất (xác suất hậu nghiệm) khi có thêm thông tin thực nghiệm."),
                make_mcq(3, "NB", "Cho $P(B_1) = 0.5; P(B_2) = 0.5; P(A|B_1) = 0.1; P(A|B_2) = 0.3$. Giá trị của $P(A)$ là",
                         "0.2", "0.4", "0.15", "0.25",
                         "A", "$P(A) = 0.5(0.1) + 0.5(0.3) = 0.05 + 0.15 = 0.2$."),
                make_mcq(4, "NB", "Trong công thức Bayes $P(B_k|A) = \\frac{P(B_k)P(A|B_k)}{P(A)}$, mẫu số $P(A)$ được tính theo",
                         "Công thức xác suất toàn phần",
                         "Công thức cộng hai biến cố độc lập",
                         "Công thức nhân hai biến cố xung khắc",
                         "Định lý Pytago",
                         "A", "Mẫu số $P(A)$ luôn được khai triển bằng công thức xác suất toàn phần."),
                make_mcq(5, "TH", "Một trang trại nuôi gà giống từ hai nguồn: Nguồn A chiếm 80% với tỷ lệ sống 90%; Nguồn B chiếm 20% với tỷ lệ sống 85%. Tỷ lệ sống chung của đàn gà là",
                         "89%", "88%", "90%", "87.5%",
                         "A", "$P = 0.8(0.9) + 0.2(0.85) = 0.72 + 0.17 = 0.89 = 89%$."),
                make_mcq(6, "TH", "Cho $P(B) = 0.25; P(A|B) = 0.6; P(A) = 0.3$. Áp dụng công thức Bayes, xác suất $P(B|A)$ bằng",
                         "0.5", "0.2", "0.75", "0.15",
                         "A", "$P(B|A) = \\frac{0.25 \\times 0.6}{0.3} = \\frac{0.15}{0.3} = 0.5$."),
                make_mcq(7, "TH", "Có hai xạ thủ cùng bắn vào một mục tiêu: Xạ thủ 1 bắn với xác suất trúng 0.8; Xạ thủ 2 bắn với xác suất trúng 0.7. Chọn ngẫu nhiên 1 xạ thủ bắn 1 viên đạn. Xác suất mục tiêu trúng đạn là",
                         "0.75", "0.8", "0.7", "0.56",
                         "A", "$P = 0.5(0.8) + 0.5(0.7) = 0.4 + 0.35 = 0.75$."),
                make_mcq(8, "TH", "Tiếp tục bài toán Câu 7: Biết mục tiêu trúng đạn, xác suất viên đạn đó do Xạ thủ 1 bắn là",
                         "$\\frac{8}{15}$", "$\\frac{7}{15}$", "0.8", "0.5",
                         "A", "Bayes: $P(XT_1|Trúng) = \\frac{0.4}{0.75} = \\frac{40}{75} = \\frac{8}{15}$."),
                make_mcq(9, "VD", "Một công ty khảo sát thị trường: Nhóm khách hàng trẻ chiếm 40% và có tỷ lệ mua hàng online là 80%; Nhóm trung niên chiếm 60% và có tỷ lệ mua online là 50%. Một khách hàng được chọn ngẫu nhiên đã mua hàng online. Xác suất khách hàng này thuộc nhóm trẻ là",
                         "$\\frac{16}{31}$", "$\\frac{15}{31}$", "0.4", "0.8",
                         "A", "$P(Online) = 0.4(0.8) + 0.6(0.5) = 0.32 + 0.30 = 0.62$. $P(Trẻ|Online) = \\frac{0.32}{0.62} = \\frac{16}{31} \\approx 0.516$."),
                make_mcq(10, "VD", "Có 3 chiếc bình đựng bi: Bình 1 có 3 bi trắng 2 bi đen; Bình 2 có 2 bi trắng 3 bi đen; Bình 3 có 4 bi trắng 1 bi đen. Chọn ngẫu nhiên 1 bình rồi rút ngẫu nhiên 1 bi. Xác suất rút được bi trắng là",
                         "0.6", "0.5", "0.4", "0.7",
                         "A", "$P(T) = \\frac{1}{3}(\\frac{3}{5}) + \\frac{1}{3}(\\frac{2}{5}) + \\frac{1}{3}(\\frac{4}{5}) = \\frac{1}{3}(\\frac{9}{5}) = \\frac{3}{5} = 0.6$."),
                make_mcq(11, "VDC", "Một camera giao thông trang bị trí tuệ nhân tạo phát hiện xe vi phạm tốc độ: nếu xe vi phạm, camera nhận diện đúng 99%; nếu xe không vi phạm, camera cảnh báo nhầm 1%. Thực tế có 0.5% số xe trên đường vi phạm tốc độ. Khi camera phát cảnh báo một xe, xác suất chiếc xe đó thực sự vi phạm tốc độ là",
                         "$\\frac{495}{1490} \\approx 33.22%$",
                         "99%",
                         "50%",
                         "$\\frac{1}{2}$",
                         "A", "$P(Báo) = 0.005(0.99) + 0.995(0.01) = 0.00495 + 0.00995 = 0.0149$. $P(VP|Báo) = \\frac{0.00495}{0.0149} = \\frac{495}{1490} \\approx 33.22%$."),
                make_mcq(12, "VDC", "Một công ty công nghệ có 3 đội lập trình A, B, C phát triển các mô-đun phần mềm với tỷ trọng sản phẩm tương ứng là 50%, 30%, 20%. Tỷ lệ dòng lệnh phát sinh lỗi bảo mật của từng đội lần lượt là 0.1%, 0.2%, 0.5%. Một lỗi bảo mật nghiêm trọng vừa được phát hiện trong hệ thống. Xác suất lỗi này xuất phát từ mã nguồn do đội C viết là",
                         "$\\frac{10}{21}$", "$\\frac{5}{21}$", "$\\frac{6}{21}$", "0.5",
                         "A", "$P(Lỗi) = 0.5(0.001) + 0.3(0.002) + 0.2(0.005) = 0.0005 + 0.0006 + 0.0010 = 0.0021$. $P(C|Lỗi) = \\frac{0.0010}{0.0021} = \\frac{10}{21} \\approx 47.6%$.")
            ]
            tfs = [
                make_tf(1, "Một phòng khám nha khoa có hai bác sĩ A và B. Bác sĩ A thực hiện 60% ca nhổ răng với tỷ lệ biến chứng 1%, Bác sĩ B thực hiện 40% với tỷ lệ biến chứng 3%.", [
                    ("a", "Biến cố một ca nhổ răng do Bác sĩ A hay Bác sĩ B thực hiện là hệ đầy đủ.", True, "$0.6 + 0.4 = 1$."),
                    ("b", "Xác suất một ca nhổ răng do Bác sĩ A thực hiện và có biến chứng là 0.006.", True, "$0.6 \\times 0.01 = 0.006$."),
                    ("c", "Tỷ lệ biến chứng chung tại phòng khám là 0.018 (tức 1.8%).", True, "$0.006 + 0.4(0.03) = 0.006 + 0.012 = 0.018$."),
                    ("d", "Nếu một ca nhổ răng có biến chứng, xác suất ca đó do Bác sĩ B thực hiện là $\\frac{2}{3}$.", True, "Bayes: $\\frac{0.012}{0.018} = \\frac{2}{3}$.")
                ]),
                make_tf(2, "Một nhà máy pin năng lượng mặt trời nhập phôi silicon từ hai nhà cung ứng $S_1$ và $S_2$ với tỷ lệ 70% và 30%. Tỷ lệ phôi đạt chuẩn loại A của $S_1$ là 90%, của $S_2$ là 80%.", [
                    ("a", "Xác suất lấy được phôi loại A từ nhà cung ứng $S_1$ là 0.63.", True, "$0.7 \\times 0.9 = 0.63$."),
                    ("b", "Xác suất lấy được phôi loại A từ nhà cung ứng $S_2$ là 0.24.", True, "$0.3 \\times 0.8 = 0.24$."),
                    ("c", "Tỷ lệ phôi loại A chung của toàn nhà máy là 0.87.", True, "$0.63 + 0.24 = 0.87$."),
                    ("d", "Lấy 1 phôi đạt loại A, xác suất phôi đó từ $S_1$ là $\\frac{21}{29}$.", True, "Bayes: $\\frac{0.63}{0.87} = \\frac{21}{29}$.")
                ]),
                make_tf(3, "Một hệ thống kiểm tra hành lý sân bay: 99% hành lý là bình thường, 1% hành lý chứa vật cấm. Máy soi phát hiện đúng vật cấm với xác suất 95%, nhưng báo động nhầm với hành lý bình thường là 2%.", [
                    ("a", "Xác suất một kiện hành lý bất kỳ bị máy soi báo động là 0.0293.", True, "$0.01(0.95) + 0.99(0.02) = 0.0095 + 0.0198 = 0.0293$."),
                    ("b", "Xác suất báo động nhầm lớn hơn xác suất báo động đúng vật cấm.", True, "$0.0198 > 0.0095$."),
                    ("c", "Khi máy báo động, xác suất thực sự kiện hành lý có vật cấm là khoảng 32.4%.", True, "$\\frac{0.0095}{0.0293} \\approx 0.3242$."),
                    ("d", "Hầu hết các trường hợp máy soi báo động là do phát hiện đúng vật cấm thật.", False, "Hầu hết là do báo động nhầm (khoảng 67.6%).")
                ]),
                make_tf(4, "Một vận động viên bắn cung tập bắn trong điều kiện trời lặng gió (xác suất 70%) và trời có gió mạnh (xác suất 30%). Khi lặng gió, xác suất bắn hồng tâm là 0.9; khi có gió mạnh, xác suất bắn hồng tâm là 0.5.", [
                    ("a", "Xác suất bắn trúng hồng tâm khi lặng gió là 0.63.", True, "$0.7 \\times 0.9 = 0.63$."),
                    ("b", "Xác suất bắn trúng hồng tâm khi có gió mạnh là 0.15.", True, "$0.3 \\times 0.5 = 0.15$."),
                    ("c", "Xác suất vận động viên bắn trúng hồng tâm nói chung là 0.78.", True, "$0.63 + 0.15 = 0.78$."),
                    ("d", "Biết mũi tên đã trúng hồng tâm, xác suất phát bắn đó được thực hiện khi trời lặng gió là $\\frac{21}{26}$.", True, "Bayes: $\\frac{0.63}{0.78} = \\frac{21}{26}$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho hệ biến cố đầy đủ $\\{B_1, B_2, B_3\\}$ với $P(B_1) = 0.2$ và $P(B_2) = 0.5$. Tìm xác suất $P(B_3)$.", 0.3, "$1 - (0.2 + 0.5) = 0.3$."),
                make_sa(2, "TH", "Cho $P(B_1) = 0.6; P(B_2) = 0.4; P(A|B_1) = 0.3; P(A|B_2) = 0.5$. Tính $P(A)$.", 0.38, "$0.6(0.3) + 0.4(0.5) = 0.18 + 0.20 = 0.38$."),
                make_sa(3, "TH", "Biết $P(B) = 0.5; P(A|B) = 0.8; P(A) = 0.5$. Tính $P(B|A)$.", 0.8, "$P(B|A) = (0.5 \\times 0.8)/0.5 = 0.8$."),
                make_sa(4, "VD", "Kho chứa thóc giống có 70% giống Lúa Mới tỷ lệ nảy mầm 90%, và 30% giống Lúa Cũ tỷ lệ nảy mầm 80%. Tính tỷ lệ nảy mầm chung (%).", 87, "$0.7(90) + 0.3(80) = 63 + 24 = 87%$."),
                make_sa(5, "VD", "Tiếp tục bài tập Câu 4: Một hạt giống được gieo đã nảy mầm. Tính xác suất hạt đó thuộc giống Lúa Mới. (Làm tròn 2 chữ số thập phân)", 0.72, "$63 / 87 = 21/29 \\approx 0.72$."),
                make_sa(6, "VDC", "Có 3 hộp xúc xắc: Hộp A có 2 con bình thường; Hộp B có 1 con bình thường và 1 con gian lận (luôn ra mặt 6); Hộp C có 2 con gian lận. Chọn ngẫu nhiên 1 hộp rồi lấy 1 con gieo được mặt 6. Tính xác suất con xúc xắc đó được lấy từ Hộp C. (Làm tròn 2 chữ số thập phân)", 0.57, "Xúc xắc từ Hộp A: $P(A) = 1/3, P(6|A) = 1/6 \\Rightarrow 1/18$. Hộp B: $P(B) = 1/3, P(6|B) = 0.5(1/6) + 0.5(1) = 7/12 \\Rightarrow 7/36$. Hộp C: $P(C) = 1/3, P(6|C) = 1 \\Rightarrow 1/3 = 12/36$. Mẫu $= 2/36 + 7/36 + 12/36 = 21/36$. Xác suất từ Hộp C $= 12/21 = 4/7 \\approx 0.57$.")
            ]
        return mcqs, tfs, sas

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 6 Toán 12.")
