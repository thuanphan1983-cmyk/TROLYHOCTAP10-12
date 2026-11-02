# -*- coding: utf-8 -*-
"""
Grade 10 - Chapter 9: Biến cố và xác suất
Lessons:
- 26: Bài 26: Biến cố và định nghĩa cổ điển của xác suất
- 27: Bài 27: Thực hành tính xác suất theo định nghĩa cổ điển
"""
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch9_lesson(lesson_id, exam_index=1):
    k = exam_index
    if lesson_id == 26:
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong một phép thử ngẫu nhiên, tập hợp tất cả các kết quả có thể xảy ra được gọi là",
                         "không gian mẫu của phép thử.", "biến cố không thể.", "biến cố chắc chắn.", "xác suất của phép thử.",
                         "A", "Theo định nghĩa, tập hợp mọi kết quả có thể xảy ra của phép thử ngẫu nhiên gọi là không gian mẫu, ký hiệu là $\\Omega$."),
                make_mcq(2, "NB", "Gieo một con xúc xắc cân đối và đồng chất một lần. Số phần tử của không gian mẫu $n(\\Omega)$ là",
                         "6", "36", "12", "1",
                         "A", "Các kết quả có thể xảy ra là các mặt có chấm từ 1 đến 6, vậy $n(\\Omega) = 6$."),
                make_mcq(3, "NB", "Gieo một đồng xu cân đối và đồng chất 2 lần liên tiếp. Số phần tử của không gian mẫu là",
                         "4", "2", "8", "6",
                         "A", "Mỗi lần gieo có 2 kết quả (S hoặc N), do đó $n(\\Omega) = 2 \\times 2 = 4$."),
                make_mcq(4, "NB", "Ký hiệu biến cố đối của biến cố $A$ là",
                         "$\\overline{A}$", "$A'$", "$-A$", "$A^c$",
                         "A", "Biến cố đối của biến cố $A$ được ký hiệu là $\\overline{A}$."),
                make_mcq(5, "TH", "Gieo một con xúc xắc cân đối. Biến cố $A$: 'Xuất hiện mặt có số chấm là số nguyên tố'. Tập hợp các kết quả thuận lợi cho $A$ là",
                         "$\\{2; 3; 5\\}$", "$\\{1; 2; 3; 5\\}$", "$\\{1; 3; 5\\}$", "$\\{2; 4; 6\\}$",
                         "A", "Các số nguyên tố từ 1 đến 6 là 2, 3, 5. Do đó tập các kết quả thuận lợi cho $A$ là $\\{2; 3; 5\\}$."),
                make_mcq(6, "TH", "Cho $P(A) = 0{,}35$. Xác suất của biến cố đối $\\overline{A}$ là",
                         "0,65", "0,35", "0,75", "0,50",
                         "A", "Ta có $P(\\overline{A}) = 1 - P(A) = 1 - 0{,}35 = 0{,}65$."),
                make_mcq(7, "TH", "Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm trên hai con xúc xắc bằng 7 là",
                         "$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{7}{36}$", "$\\frac{5}{36}$",
                         "A", "Số phần tử không gian mẫu: $n(\\Omega) = 36$. Các cặp có tổng bằng 7: $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$ gồm 6 kết quả. Vậy $P = \\frac{6}{36} = \\frac{1}{6}$."),
                make_mcq(8, "TH", "Một hộp chứa 5 quả cầu đỏ và 7 quả cầu xanh có kích thước giống nhau. Lấy ngẫu nhiên 1 quả cầu. Xác suất lấy được quả đỏ là",
                         "$\\frac{5}{12}$", "$\\frac{7}{12}$", "$\\frac{5}{7}$", "$\\frac{1}{12}$",
                         "A", "Tổng số quả cầu là $5 + 7 = 12$. Xác suất lấy quả đỏ là $P = \\frac{5}{12}$."),
                make_mcq(9, "VD", "Gieo đồng thời hai con xúc xắc cân đối. Xác suất để ít nhất một con xúc xắc xuất hiện mặt 6 chấm là",
                         "$\\frac{11}{36}$", "$\\frac{1}{6}$", "$\\frac{25}{36}$", "$\\frac{1}{36}$",
                         "A", "Xét biến cố đối $\\overline{A}$: 'Cả hai con đều không xuất hiện mặt 6'. Mỗi con có 5 khả năng (từ 1 đến 5), do đó $n(\\overline{A}) = 5 \\times 5 = 25$. Suy ra $P(\\overline{A}) = \\frac{25}{36} \\Rightarrow P(A) = 1 - \\frac{25}{36} = \\frac{11}{36}$."),
                make_mcq(10, "VD", "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 2 học sinh đi dự đại hội Đoàn trường. Xác suất để chọn được 1 nam và 1 nữ là",
                         "$\\frac{20}{39}$", "$\\frac{10}{39}$", "$\\frac{1}{2}$", "$\\frac{15}{39}$",
                         "A", "Số phần tử không gian mẫu: $n(\\Omega) = C_{35}^2 = 595$. Số cách chọn 1 nam và 1 nữ: $20 \\times 15 = 300$. Xác suất: $P = \\frac{300}{595} = \\frac{20}{39}$."),
                make_mcq(11, "VDC", "Có 3 xạ thủ cùng độc lập bắn mỗi người 1 phát súng vào bia. Xác suất bắn trúng của xạ thủ thứ nhất, thứ hai, thứ ba lần lượt là 0,8; 0,7 và 0,6. Xác suất để có đúng 2 xạ thủ bắn trúng bia là",
                         "0,452", "0,336", "0,024", "0,672",
                         "A", "Xác suất bắn trượt lần lượt là 0,2; 0,3; 0,4. Có 3 trường hợp:\n- Xạ thủ 1, 2 trúng, 3 trượt: $0{,}8 \\times 0{,}7 \\times 0{,}4 = 0{,}224$.\n- Xạ thủ 1, 3 trúng, 2 trượt: $0{,}8 \\times 0{,}3 \\times 0{,}6 = 0{,}144$.\n- Xạ thủ 2, 3 trúng, 1 trượt: $0{,}2 \\times 0{,}7 \\times 0{,}6 = 0{,}084$.\nTổng xác suất: $0{,}224 + 0{,}144 + 0{,}084 = 0{,}452$."),
                make_mcq(12, "VDC", "Gieo một con xúc xắc cân đối liên tiếp 3 lần. Xác suất để tích số chấm trong 3 lần gieo là một số chẵn là",
                         "$\\frac{7}{8}$", "$\\frac{1}{8}$", "$\\frac{3}{4}$", "$\\frac{1}{2}$",
                         "A", "Biến cố đối $\\overline{A}$: 'Tích số chấm là số lẻ', điều này xảy ra khi cả 3 lần gieo đều được mặt lẻ. Mỗi lần có 3 mặt lẻ $\\{1; 3; 5\\}$ nên xác suất mỗi lần là $\\frac{1}{2}$. Vậy $P(\\overline{A}) = \\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8} \\Rightarrow P(A) = 1 - \\frac{1}{8} = \\frac{7}{8}$."),
            ]
            tfs = [
                make_tf(1, "Một hộp kín chứa 4 viên bi xanh, 5 viên bi đỏ và 6 viên bi vàng có kích thước giống nhau. Lấy ngẫu nhiên ra 3 viên bi từ hộp.", [
                    ("a", "Số phần tử của không gian mẫu là $n(\\Omega) = C_{15}^3 = 455$.", True, "Tổng số bi trong hộp là $4 + 5 + 6 = 15$. Số cách chọn ngẫu nhiên 3 viên bi là $C_{15}^3 = 455$."),
                    ("b", "Số cách lấy được 3 viên bi có đủ cả 3 màu là 120 cách.", True, "Lấy 1 xanh, 1 đỏ, 1 vàng có $4 \\times 5 \\times 6 = 120$ cách."),
                    ("c", "Xác suất lấy được 3 viên bi cùng màu đỏ là $\\frac{2}{91}$.", True, "Số cách lấy 3 viên bi đỏ là $C_5^3 = 10$. Xác suất là $\\frac{10}{455} = \\frac{2}{91}$."),
                    ("d", "Xác suất để trong 3 viên bi lấy ra có ít nhất 1 viên bi màu xanh là $\\frac{33}{91}$.", False, "Xét biến cố đối: 'Không có bi xanh nào'. Số cách chọn 3 bi từ 11 bi đỏ và vàng là $C_{11}^3 = 165$. Xác suất đối: $\\frac{165}{455} = \\frac{33}{91}$. Suy ra xác suất có ít nhất 1 bi xanh là $1 - \\frac{33}{91} = \\frac{58}{91} \\ne \\frac{33}{91}$."),
                ]),
                make_tf(2, "Gieo một đồng xu cân đối và đồng chất 3 lần liên tiếp.", [
                    ("a", "Không gian mẫu có $2^3 = 8$ phần tử.", True, "Mỗi lần gieo có 2 khả năng $\{S, N\}$, 3 lần gieo có $2 \\times 2 \\times 2 = 8$ phần tử."),
                    ("b", "Biến cố $A$: 'Xuất hiện mặt sấp đúng 2 lần' có 3 kết quả thuận lợi.", True, "Các kết quả là $\{SSN, SNS, NSS\}$ gồm 3 kết quả."),
                    ("c", "Xác suất xuất hiện mặt ngửa ít nhất 1 lần bằng $\\frac{7}{8}$.", True, "Biến cố đối là 'Không có mặt ngửa nào' (cả 3 lần sấp $SSS$), có 1 kết quả. Vậy $P = 1 - \\frac{1}{8} = \\frac{7}{8}$."),
                    ("d", "Xác suất để kết quả của 3 lần gieo hoàn toàn giống nhau bằng $\\frac{1}{2}$.", False, "Hai kết quả giống nhau là $\{SSS, NNN\}$, gồm 2 kết quả. Xác suất là $\\frac{2}{8} = \\frac{1}{4} \\ne \\frac{1}{2}$."),
                ]),
            ]
            sas = [
                make_sa(1, "NB", "Gieo một con xúc xắc cân đối. Tính xác suất xuất hiện mặt có số chấm chia hết cho 3.",
                        "0.33", "Các mặt chia hết cho 3 là 3 và 6 (2 mặt). Xác suất: $P = \\frac{2}{6} = \\frac{1}{3} \\approx 0{,}33$."),
                make_sa(2, "TH", "Một túi chứa 6 quả bóng bàn trắng và 4 quả bóng bàn vàng. Rút ngẫu nhiên 1 quả. Tính xác suất rút được quả vàng.",
                        "0.4", "Xác suất: $P = \\frac{4}{10} = 0{,}4$."),
                make_sa(3, "TH", "Chọn ngẫu nhiên một số tự nhiên có hai chữ số từ 10 đến 99. Tính xác suất để số được chọn là số chính phương (viết kết quả dưới dạng số thập phân làm tròn đến 2 chữ số sau dấu phẩy).",
                        "0.07", "Từ 10 đến 99 có 90 số. Các số chính phương là $4^2, 5^2, 6^2, 7^2, 8^2, 9^2$ gồm 6 số. Xác suất: $P = \\frac{6}{90} = \\frac{1}{15} \\approx 0{,}07$."),
                make_sa(4, "VD", "Một tổ có 6 nam và 4 nữ. Chọn ngẫu nhiên 3 người. Tính xác suất để trong 3 người được chọn có đúng 2 nữ (làm tròn đến 2 chữ số thập phân).",
                        "0.3", "Số phần tử không gian mẫu: $C_{10}^3 = 120$. Số cách chọn 2 nữ và 1 nam: $C_4^2 \\times C_6^1 = 6 \\times 6 = 36$. Xác suất: $P = \\frac{36}{120} = 0{,}3$."),
                make_sa(5, "VDC", "Có 10 tấm thẻ được đánh số từ 1 đến 10. Rút ngẫu nhiên đồng thời 3 tấm thẻ. Tính xác suất để tổng 3 số ghi trên 3 thẻ là một số lẻ (làm tròn đến 3 chữ số thập phân).",
                        "0.5", "Có 5 số lẻ $\\{1; 3; 5; 7; 9\\}$ và 5 số chẵn $\\{2; 4; 6; 8; 10\\}$. Tổng 3 số lẻ khi:\n- Cả 3 số lẻ: $C_5^3 = 10$ cách.\n- 1 lẻ, 2 chẵn: $C_5^1 \\times C_5^2 = 5 \\times 10 = 50$ cách.\nTổng số cách thuận lợi: $10 + 50 = 60$ cách. Tổng số kết quả: $C_{10}^3 = 120$. Xác suất: $P = \\frac{60}{120} = 0{,}5$."),
                make_sa(6, "VDC", "Một hộp đựng 8 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên lần lượt từng viên bi không hoàn lại 2 lần. Tính xác suất để viên thứ hai lấy được là bi màu đỏ (viết dưới dạng phân số tối giản a/b hoặc số thập phân làm tròn 2 chữ số).",
                        "0.57", "Xác suất lấy bi đỏ ở lần 2: $P(Đ_2) = P(Đ_1 Đ_2) + P(X_1 Đ_2) = \\frac{8}{14} \\times \\frac{7}{13} + \\frac{6}{14} \\times \\frac{8}{13} = \\frac{56 + 48}{182} = \\frac{104}{182} = \\frac{4}{7} \\approx 0{,}57$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Khái niệm không gian mẫu và biến cố đối",
                           "Nêu định nghĩa không gian mẫu của phép thử ngẫu nhiên và biến cố đối của một biến cố $A$. Cho ví dụ minh họa bằng phép thử gieo đồng xu.",
                           "1. Không gian mẫu: Tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên được gọi là không gian mẫu của phép thử đó, ký hiệu là $\\Omega$.\n2. Biến cố đối: Cho $A$ là một biến cố liên quan đến phép thử. Biến cố 'Không xảy ra $A$' được gọi là biến cố đối của $A$, ký hiệu là $\\overline{A}$. Ta có $\\overline{A} = \\Omega \\setminus A$ và $P(\\overline{A}) = 1 - P(A)$.\n3. Ví dụ: Phép thử gieo một đồng xu một lần. Không gian mẫu là $\\Omega = \\{S, N\\}$. Nếu gọi $A$ là biến cố 'Đồng xu xuất hiện mặt sấp' ($A = \\{S\\}$) thì biến cố đối $\\overline{A}$ là 'Đồng xu xuất hiện mặt ngửa' ($\\overline{A} = \\{N\\}$)."),
                make_essay(2, "TH", 0.5, "Tính xác suất cổ điển của biến cố đơn giản",
                           "Một hộp đựng 12 tấm thẻ cùng loại được đánh số từ 1 đến 12. Rút ngẫu nhiên một tấm thẻ.\na) Mô tả không gian mẫu và số phần tử của nó.\nb) Tính xác suất của biến cố $A$: 'Số ghi trên thẻ là số chia hết cho 4'.",
                           "a) Không gian mẫu là tập hợp các số ghi trên 12 tấm thẻ:\n$\\Omega = \\{1; 2; 3; 4; 5; 6; 7; 8; 9; 10; 11; 12\\}$. Số phần tử của không gian mẫu: $n(\\Omega) = 12$.\nb) Các số chia hết cho 4 trong khoảng từ 1 đến 12 là $\\{4; 8; 12\\}$.\nDo đó tập hợp các kết quả thuận lợi cho $A$ là $A = \\{4; 8; 12\\} \\Rightarrow n(A) = 3$.\nXác suất của biến cố $A$ là: $P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{3}{12} = \\frac{1}{4} = 0{,}25$."),
                make_essay(3, "VD", 0.5, "Bài toán chia tổ học tập",
                           "Một nhóm học tập gồm 5 học sinh nam và 4 học sinh nữ. Chọn ngẫu nhiên 3 bạn tham gia đội tuyển học sinh giỏi.\na) Tính xác suất để 3 bạn được chọn có cả nam và nữ.\nb) Tính xác suất để có ít nhất 2 bạn nữ được chọn.",
                           "Tổng số học sinh là $5 + 4 = 9$ học sinh.\nSố phần tử không gian mẫu khi chọn 3 bạn: $n(\\Omega) = C_9^3 = 84$.\na) Gọi $A$ là biến cố 'Chọn 3 bạn có cả nam và nữ'.\nBiến cố đối $\\overline{A}$ là 'Chọn 3 bạn cùng giới tính' (cả 3 nam hoặc cả 3 nữ):\n$n(\\overline{A}) = C_5^3 + C_4^3 = 10 + 4 = 14$.\nSuy ra xác suất $P(\\overline{A}) = \\frac{14}{84} = \\frac{1}{6}$.\nVậy $P(A) = 1 - P(\\overline{A}) = 1 - \\frac{1}{6} = \\frac{5}{6}$.\nb) Gọi $B$ là biến cố 'Có ít nhất 2 bạn nữ':\n- Trường hợp 1: Có đúng 2 nữ và 1 nam $\\Rightarrow C_4^2 \\times C_5^1 = 6 \\times 5 = 30$ cách.\n- Trường hợp 2: Có cả 3 bạn nữ $\\Rightarrow C_4^3 = 4$ cách.\nSố kết quả thuận lợi: $n(B) = 30 + 4 = 34$.\nXác suất biến cố $B$: $P(B) = \\frac{34}{84} = \\frac{17}{42}$."),
                make_essay(4, "VDC", 0.5, "Mô hình xác suất kiểm định chất lượng sản phẩm",
                           "Một lô hàng gồm 100 sản phẩm, trong đó có đúng 6 sản phẩm bị lỗi kỹ thuật. Nhân viên kiểm tra chất lượng chọn ngẫu nhiên đồng thời 5 sản phẩm để kiểm định.\na) Tính xác suất để trong 5 sản phẩm kiểm định không có sản phẩm nào bị lỗi.\nb) Lô hàng sẽ được thông quan xuất khẩu nếu trong 5 sản phẩm kiểm định có không quá 1 sản phẩm bị lỗi. Tính xác suất để lô hàng được thông quan xuất khẩu (kết quả làm tròn đến 4 chữ số thập phân).",
                           "Số sản phẩm tốt là $100 - 6 = 94$ sản phẩm.\nSố phần tử của không gian mẫu: $n(\\Omega) = C_{100}^5 = \\frac{100 \\times 99 \\times 98 \\times 97 \\times 96}{120} = 75\\,287\\,520$.\na) Gọi $A$ là biến cố 'Không có sản phẩm nào bị lỗi trong 5 sản phẩm chọn ra'.\nSố cách chọn 5 sản phẩm tốt từ 94 sản phẩm tốt là: $n(A) = C_{94}^5 = 54\\,893\\,484$.\nXác suất: $P(A) = \\frac{C_{94}^5}{C_{100}^5} = \\frac{54\\,893\\,484}{75\\,287\\,520} \\approx 0{,}7291$.\nb) Gọi $B$ là biến cố 'Lô hàng được thông quan xuất khẩu', tức là trong 5 sản phẩm có 0 hoặc 1 sản phẩm lỗi:\n- Số cách chọn 0 lỗi (5 tốt): $C_{94}^5 = 54\\,893\\,484$.\n- Số cách chọn đúng 1 lỗi (4 tốt, 1 lỗi): $C_{94}^4 \\times C_6^1 = 3\\,066\\,480 \\times 6 = 18\\,398\\,880$.\nTổng số kết quả thuận lợi cho $B$: $n(B) = 54\\,893\\,484 + 18\\,398\\,880 = 73\\,292\\,364$.\nXác suất để lô hàng được thông quan xuất khẩu là:\n$P(B) = \\frac{n(B)}{n(\\Omega)} = \\frac{73\\,292\\,364}{75\\,287\\,520} \\approx 0{,}9735$.")
            ]
            return mcqs, tfs, sas, essays

        else:  # k == 2
            mcqs = [
                make_mcq(1, "NB", "Biến cố không bao giờ xảy ra trong một phép thử được gọi là",
                         "biến cố không thể.", "biến cố chắc chắn.", "biến cố độc lập.", "không gian mẫu.",
                         "A", "Biến cố không bao giờ xảy ra gọi là biến cố không thể, ký hiệu là $\\varnothing$."),
                make_mcq(2, "NB", "Xác suất của biến cố chắc chắn $\\Omega$ bằng",
                         "1", "0", "0,5", "100",
                         "A", "Theo định nghĩa cổ điển, xác suất của biến cố chắc chắn luôn bằng 1, tức $P(\\Omega) = 1$."),
                make_mcq(3, "NB", "Gieo một con xúc xắc cân đối. Biến cố nào sau đây là biến cố chắc chắn?",
                         "Số chấm xuất hiện không vượt quá 6.", "Số chấm xuất hiện lớn hơn 3.", "Số chấm xuất hiện là số chẵn.", "Số chấm xuất hiện bằng 6.",
                         "A", "Các mặt của xúc xắc có số chấm từ 1 đến 6 nên biến cố 'Số chấm không vượt quá 6' luôn xảy ra, là biến cố chắc chắn."),
                make_mcq(4, "NB", "Cho biến cố $A$. Đẳng thức nào sau đây luôn đúng?",
                         "$P(A) + P(\\overline{A}) = 1$", "$P(A) = P(\\overline{A})$", "$P(A) \\times P(\\overline{A}) = 1$", "$P(A) - P(\\overline{A}) = 0$",
                         "A", "Định lý xác suất của biến cố đối: $P(A) + P(\\overline{A}) = 1$."),
                make_mcq(5, "TH", "Gieo đồng thời hai con xúc xắc cân đối. Số phần tử của không gian mẫu $n(\\Omega)$ là",
                         "36", "12", "6", "18",
                         "A", "Mỗi con xúc xắc có 6 mặt, gieo hai con có $6 \\times 6 = 36$ kết quả."),
                make_mcq(6, "TH", "Một lớp học có 24 học sinh nam và 16 học sinh nữ. Chọn ngẫu nhiên một học sinh. Xác suất để chọn được một học sinh nữ là",
                         "$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{1}{40}$", "$\\frac{1}{16}$",
                         "A", "Tổng số học sinh là $24 + 16 = 40$. Xác suất chọn học sinh nữ là $\\frac{16}{40} = \\frac{2}{5}$."),
                make_mcq(7, "TH", "Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm lớn hơn 4 là",
                         "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$",
                         "A", "Các mặt lớn hơn 4 là mặt 5 và 6 (2 mặt). Xác suất là $\\frac{2}{6} = \\frac{1}{3}$."),
                make_mcq(8, "TH", "Cho hai biến cố xung khắc $A$ và $B$. Biết $P(A) = 0{,}25$ và $P(B) = 0{,}40$. Xác suất $P(A \\cup B)$ bằng",
                         "0,65", "0,10", "0,15", "0,50",
                         "A", "Với hai biến cố xung khắc: $P(A \\cup B) = P(A) + P(B) = 0{,}25 + 0{,}40 = 0{,}65$."),
                make_mcq(9, "VD", "Một nhóm gồm 4 học sinh nam và 6 học sinh nữ. Chọn ngẫu nhiên 2 học sinh. Xác suất để chọn được 2 học sinh cùng giới tính là",
                         "$\\frac{7}{15}$", "$\\frac{8}{15}$", "$\\frac{1}{3}$", "$\\frac{4}{15}$",
                         "A", "Số phần tử không gian mẫu: $C_{10}^2 = 45$. Số cách chọn 2 học sinh cùng giới là $C_4^2 + C_6^2 = 6 + 15 = 21$. Xác suất: $P = \\frac{21}{45} = \\frac{7}{15}$."),
                make_mcq(10, "VD", "Một hộp có 10 viên bi, trong đó có 6 viên màu xanh và 4 viên màu đỏ. Lấy ngẫu nhiên 3 viên bi. Xác suất để lấy được ít nhất 1 viên bi màu đỏ là",
                         "$\\frac{5}{6}$", "$\\frac{1}{6}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$",
                         "A", "Số cách chọn 3 viên từ 10 viên là $C_{10}^3 = 120$. Số cách chọn 3 viên toàn màu xanh là $C_6^3 = 20$. Xác suất toàn bi xanh là $\\frac{20}{120} = \\frac{1}{6}$. Vậy xác suất có ít nhất 1 bi đỏ là $1 - \\frac{1}{6} = \\frac{5}{6}$."),
                make_mcq(11, "VDC", "Một ngân hàng mã hóa mật khẩu gồm 4 chữ số khác nhau lấy từ tập $\\{0; 1; 2; 3; 4; 5; 6; 7; 8; 9\\}$. Một người nhập ngẫu nhiên một mật khẩu. Xác suất để mật khẩu nhập vào là số chẵn (chữ số tận cùng là số chẵn) là",
                         "$\\frac{1}{2}$", "$\\frac{5}{9}$", "$\\frac{4}{9}$", "$\\frac{2}{5}$",
                         "A", "Trong 10 chữ số có 5 số chẵn $\{0,2,4,6,8\}$ và 5 số lẻ $\{1,3,5,7,9\}$. Số các mật khẩu 4 chữ số khác nhau là $A_{10}^4 = 5040$. Số mật khẩu có chữ số tận cùng chẵn: Chọn chữ số tận cùng có 5 cách, 3 chữ số đầu chọn từ 9 chữ số còn lại có $A_9^3 = 504$ cách $\\Rightarrow 5 \\times 504 = 2520$. Xác suất: $\\frac{2520}{5040} = \\frac{1}{2}$."),
                make_mcq(12, "VDC", "Gieo đồng thời 3 con xúc xắc cân đối. Xác suất để tổng số chấm xuất hiện trên 3 con xúc xắc bằng 10 là",
                         "$\\frac{1}{8}$", "$\\frac{27}{216}$", "$\\frac{25}{216}$", "$\\frac{1}{6}$",
                         "A", "Không gian mẫu: $n(\\Omega) = 6^3 = 216$. Số bộ ba $(x, y, z)$ có tổng bằng 10 ($1 \\le x, y, z \\le 6$):\nCác phân tích tổng 10:\n- Hoán vị của $(1, 3, 6)$: $3! = 6$\n- Hoán vị của $(1, 4, 5)$: $3! = 6$\n- Hoán vị của $(2, 2, 6)$: $3!/2! = 3$\n- Hoán vị của $(2, 3, 5)$: $3! = 6$\n- Hoán vị của $(2, 4, 4)$: $3!/2! = 3$\n- Hoán vị của $(3, 3, 4)$: $3!/2! = 3$\nTổng số kết quả thuận lợi: $6 + 6 + 3 + 6 + 3 + 3 = 27$. Xác suất: $P = \\frac{27}{216} = \\frac{1}{8}$."),
            ]
            tfs = [
                make_tf(1, "Một hộp chứa 6 quả cầu trắng và 4 quả cầu đen. Lấy ngẫu nhiên ra 2 quả cầu đồng thời.", [
                    ("a", "Số phần tử của không gian mẫu là $n(\\Omega) = C_{10}^2 = 45$.", True, "Lấy ngẫu nhiên 2 quả từ 10 quả có $C_{10}^2 = 45$ cách."),
                    ("b", "Số kết quả thuận lợi để lấy được 2 quả cầu cùng màu trắng là 15.", True, "Lấy 2 quả cầu trắng từ 6 quả trắng có $C_6^2 = 15$ cách."),
                    ("c", "Xác suất lấy được 2 quả cầu khác màu là $\\frac{8}{15}$.", True, "Số cách lấy 1 trắng 1 đen là $6 \\times 4 = 24$. Xác suất: $\\frac{24}{45} = \\frac{8}{15}$."),
                    ("d", "Xác suất lấy được ít nhất 1 quả cầu màu trắng là $\\frac{13}{15}$.", True, "Biến cố đối là lấy được 2 quả màu đen: $C_4^2 = 6$. Xác suất đối: $\\frac{6}{45} = \\frac{2}{15}$. Xác suất có ít nhất 1 quả trắng: $1 - \\frac{2}{15} = \\frac{13}{15}$."),
                ]),
                make_tf(2, "Xếp ngẫu nhiên 5 bạn học sinh gồm 3 bạn nam và 2 bạn nữ ngồi vào một hàng ghế dài có 5 chỗ ngồi.", [
                    ("a", "Không gian mẫu có $5! = 120$ phần tử.", True, "Xếp 5 học sinh vào 5 chỗ là hoán vị của 5 phần tử: $n(\\Omega) = 5! = 120$."),
                    ("b", "Số cách xếp 2 bạn nữ luôn ngồi cạnh nhau là 48 cách.", True, "Buộc 2 bạn nữ thành 1 phần tử kép (có $2! = 2$ cách hoán vị), kết hợp với 3 bạn nam thành 4 phần tử có $4! = 24$ cách. Tổng số cách: $2 \\times 24 = 48$ cách."),
                    ("c", "Xác suất để 2 bạn nữ luôn ngồi cạnh nhau bằng $0{,}4$.", True, "Xác suất: $P = \\frac{48}{120} = \\frac{2}{5} = 0{,}4$."),
                    ("d", "Xác suất để 2 bạn nữ ngồi ở hai đầu ghế bằng $0{,}2$.", False, "Hai bạn nữ ngồi ở hai đầu ghế có $2! = 2$ cách. Ba bạn nam ngồi 3 ghế giữa có $3! = 6$ cách. Số kết quả thuận lợi là $2 \\times 6 = 12$. Xác suất: $\\frac{12}{120} = \\frac{1}{10} = 0{,}1 \\ne 0{,}2$."),
                ]),
            ]
            sas = [
                make_sa(1, "NB", "Gieo một đồng xu cân đối 1 lần. Tính xác suất xuất hiện mặt sấp.",
                        "0.5", "Xác suất xuất hiện mặt sấp là $P = \\frac{1}{2} = 0{,}5$."),
                make_sa(2, "TH", "Một hộp có 15 chiếc thẻ cùng loại đánh số từ 1 đến 15. Rút ngẫu nhiên một thẻ. Tính xác suất để số trên thẻ chia hết cho 5.",
                        "0.2", "Các số chia hết cho 5 là 5, 10, 15 (3 thẻ). Xác suất: $P = \\frac{3}{15} = 0{,}2$."),
                make_sa(3, "TH", "Một đội văn nghệ có 7 nam và 5 nữ. Chọn ngẫu nhiên một cặp gồm 1 nam và 1 nữ để dẫn chương trình. Số cách chọn cặp MC này là bao nhiêu?",
                        "35", "Theo quy tắc nhân, số cách chọn 1 nam và 1 nữ là $7 \\times 5 = 35$ cách."),
                make_sa(4, "VD", "Một lớp học có 18 nam và 12 nữ. Chọn ngẫu nhiên một ban cán sự gồm 4 học sinh. Tính xác suất để ban cán sự có đúng 2 học sinh nữ (làm tròn đến 2 chữ số thập phân).",
                        "0.37", "Số cách chọn 4 từ 30 là $C_{30}^4 = 27\\,405$. Số cách chọn 2 nữ và 2 nam: $C_{12}^2 \\times C_{18}^2 = 66 \\times 153 = 10\\,098$. Xác suất: $P = \\frac{10098}{27405} \\approx 0{,}37$."),
                make_sa(5, "VDC", "Có 5 bạn nam và 5 bạn nữ xếp thành một vòng tròn. Tính xác suất để nam và nữ ngồi xen kẽ nhau (làm tròn đến 3 chữ số thập phân).",
                        "0.008", "Số cách xếp 10 người vào bàn tròn: $(10 - 1)! = 9! = 362\\,880$. Để nam nữ xen kẽ: Cố định 1 bạn nam làm mốc, 4 bạn nam còn lại xếp có $4! = 24$ cách. Năm bạn nữ xếp vào 5 vị trí xen kẽ có $5! = 120$ cách. Số kết quả thuận lợi: $24 \\times 120 = 2\\,880$. Xác suất: $P = \\frac{2880}{362880} = \\frac{1}{126} \\approx 0{,}008$."),
                make_sa(6, "VDC", "Một bài thi trắc nghiệm gồm 4 câu hỏi độc lập, mỗi câu có 4 phương án trả lời trong đó chỉ có 1 phương án đúng. Một thí sinh chọn ngẫu nhiên các phương án. Tính xác suất để thí sinh đó trả lời đúng ít nhất 3 câu (làm tròn đến 3 chữ số thập phân).",
                        "0.051", "Xác suất đúng mỗi câu $p = \\frac{1}{4}$, sai $q = \\frac{3}{4}$.\n- Đúng cả 4 câu: $\\left(\\frac{1}{4}\\right)^4 = \\frac{1}{256}$.\n- Đúng 3 câu: $C_4^3 \\left(\\frac{1}{4}\\right)^3 \\left(\\frac{3}{4}\\right) = 4 \\times \\frac{3}{256} = \\frac{12}{256}$.\nTổng xác suất: $P = \\frac{1 + 12}{256} = \\frac{13}{256} \\approx 0{,}051$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Các tính chất cơ bản của xác suất",
                           "Phát biểu các tính chất cơ bản của xác suất theo định nghĩa cổ điển (bao gồm: giá trị xác suất của biến cố bất kì, xác suất của biến cố chắc chắn, biến cố không thể và biến cố đối).",
                           "Theo định nghĩa cổ điển của xác suất, ta có các tính chất cơ bản sau:\n1. Xác suất của biến cố bất kì $A$ luôn thỏa mãn: $0 \\le P(A) \\le 1$.\n2. Xác suất của biến cố không thể $\\varnothing$ là: $P(\\varnothing) = 0$.\n3. Xác suất của biến cố chắc chắn $\\Omega$ là: $P(\\Omega) = 1$.\n4. Với biến cố đối $\\overline{A}$ của biến cố $A$, ta có: $P(\\overline{A}) = 1 - P(A)$."),
                make_essay(2, "TH", 0.5, "Phép thử chọn bóng trong hộp",
                           "Một hộp có 8 quả bóng màu xanh, 5 quả bóng màu đỏ và 3 quả bóng màu vàng. Các quả bóng có kích thước và khối lượng như nhau. Lấy ngẫu nhiên 1 quả bóng.\na) Tính xác suất để lấy được bóng màu đỏ.\nb) Tính xác suất để quả bóng lấy ra không phải màu vàng.",
                           "Tổng số quả bóng trong hộp là: $8 + 5 + 3 = 16$ quả bóng.\nSố phần tử của không gian mẫu: $n(\\Omega) = 16$.\na) Gọi $A$ là biến cố 'Lấy được quả bóng màu đỏ'.\nSố kết quả thuận lợi cho $A$ là $n(A) = 5$.\nXác suất để lấy được bóng đỏ: $P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{5}{16} = 0{,}3125$.\nb) Gọi $B$ là biến cố 'Quả bóng lấy ra không phải màu vàng'.\nBiến cố đối $\\overline{B}$ là 'Quả bóng lấy ra màu vàng', có $n(\\overline{B}) = 3$.\nSuy ra: $P(\\overline{B}) = \\frac{3}{16}$.\nVậy xác suất không lấy màu vàng là: $P(B) = 1 - P(\\overline{B}) = 1 - \\frac{3}{16} = \\frac{13}{16} = 0{,}8125$."),
                make_essay(3, "VD", 0.5, "Bài toán phân công nhiệm vụ",
                           "Một câu lạc bộ thiện nguyện có 12 tình nguyện viên gồm 7 bạn khối 10 và 5 bạn khối 11. Cần chọn ngẫu nhiên một đoàn 4 bạn đến hỗ trợ điểm trường vùng cao.\na) Tính xác suất để đoàn có đúng 2 bạn khối 10.\nb) Tính xác suất để đoàn có ít nhất 1 bạn khối 11.",
                           "Không gian mẫu khi chọn 4 bạn từ 12 bạn là: $n(\\Omega) = C_{12}^4 = 495$.\na) Gọi $A$ là biến cố 'Đoàn có đúng 2 bạn khối 10'.\nKhi đó đoàn gồm 2 bạn khối 10 và 2 bạn khối 11.\nSố kết quả thuận lợi: $n(A) = C_7^2 \\times C_5^2 = 21 \\times 10 = 210$.\nXác suất biến cố $A$: $P(A) = \\frac{210}{495} = \\frac{14}{33} \\approx 0{,}4242$.\nb) Gọi $B$ là biến cố 'Đoàn có ít nhất 1 bạn khối 11'.\nXét biến cố đối $\\overline{B}$: 'Đoàn không có bạn nào khối 11' (cả 4 bạn đều thuộc khối 10).\nSố kết quả thuận lợi cho $\\overline{B}$: $n(\\overline{B}) = C_7^4 = 35$.\nXác suất của biến cố đối: $P(\\overline{B}) = \\frac{35}{495} = \\frac{7}{99}$.\nVậy xác suất có ít nhất 1 bạn khối 11 là: $P(B) = 1 - P(\\overline{B}) = 1 - \\frac{7}{99} = \\frac{92}{99} \\approx 0{,}9293$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế kiểm soát chất lượng bóng đèn",
                           "Tại một phân xưởng sản xuất thiết bị chiếu sáng, các bóng đèn LED được đóng thùng, mỗi thùng chứa 20 bóng đèn. Do sai số quy trình, trong mỗi thùng trung bình có 2 bóng đèn bị lỗi. Để nghiệm thu thùng hàng, nhân viên kỹ thuật chọn ngẫu nhiên 3 bóng đèn trong thùng để kiểm tra thử nghiệm.\na) Tính xác suất để cả 3 bóng đèn được chọn đều đạt tiêu chuẩn chất lượng (không bị lỗi).\nb) Nếu phát hiện có từ 1 bóng đèn bị lỗi trở lên trong mẫu thử thì cả thùng hàng sẽ bị trả về xưởng để kiểm tra lại toàn bộ. Tính xác suất thùng hàng bị trả về.",
                           "Trong mỗi thùng có 2 bóng lỗi và $20 - 2 = 18$ bóng đạt chuẩn.\nSố phần tử của không gian mẫu: $n(\\Omega) = C_{20}^3 = \\frac{20 \\times 19 \\times 18}{6} = 1140$.\na) Gọi $A$ là biến cố 'Cả 3 bóng đèn được chọn đều đạt tiêu chuẩn chất lượng'.\nSố cách chọn 3 bóng đạt chuẩn từ 18 bóng đạt chuẩn là: $n(A) = C_{18}^3 = \\frac{18 \\times 17 \\times 16}{6} = 816$.\nXác suất để cả 3 bóng đều đạt chuẩn là:\n$P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{816}{1140} = \\frac{68}{95} \\approx 0{,}7158$ (tương đương 71,58%).\nb) Gọi $B$ là biến cố 'Thùng hàng bị trả về'.\nTheo quy định nghiệm thu, thùng hàng bị trả về khi trong 3 bóng lấy ra có ít nhất 1 bóng bị lỗi.\nDo đó, biến cố $B$ chính là biến cố đối của biến cố $A$ (vì $A$ là sự kiện cả 3 bóng đều đạt chuẩn, không có bóng nào bị lỗi): $B = \\overline{A}$.\nVậy xác suất thùng hàng bị trả về là:\n$P(B) = 1 - P(A) = 1 - \\frac{68}{95} = \\frac{27}{95} \\approx 0{,}2842$ (tương đương 28,42%).")
            ]
            return mcqs, tfs, sas, essays

    elif lesson_id == 27:
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong các công thức tính xác suất cổ điển của biến cố $A$, công thức nào sau đây đúng?",
                         "$P(A) = \\frac{n(A)}{n(\\Omega)}$", "$P(A) = \\frac{n(\\Omega)}{n(A)}$", "$P(A) = n(A) \\times n(\\Omega)$", "$P(A) = n(A) - n(\\Omega)$",
                         "A", "Định nghĩa cổ điển: Xác suất của biến cố $A$ bằng tỉ số giữa số kết quả thuận lợi cho $A$ và số phần tử không gian mẫu: $P(A) = \\frac{n(A)}{n(\\Omega)}$."),
                make_mcq(2, "NB", "Gieo đồng thời hai đồng xu cân đối và đồng chất. Xác suất để cả hai đồng xu đều xuất hiện mặt sấp là",
                         "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{1}{3}$",
                         "A", "Không gian mẫu có 4 kết quả $\{SS, SN, NS, NN\}$. Chỉ có 1 kết quả thuận lợi là $SS$, vậy $P = \\frac{1}{4}$."),
                make_mcq(3, "NB", "Một hộp đựng 4 viên bi xanh và 6 viên bi đỏ. Rút ngẫu nhiên một viên bi. Xác suất rút được viên bi xanh là",
                         "$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{1}{4}$", "$\\frac{1}{10}$",
                         "A", "Tổng số viên bi là $4 + 6 = 10$. Xác suất rút bi xanh là $\\frac{4}{10} = \\frac{2}{5}$."),
                make_mcq(4, "NB", "Rút ngẫu nhiên một lá bài từ bộ bài tây 52 lá. Xác suất rút được lá Át (A) là",
                         "$\\frac{1}{13}$", "$\\frac{1}{52}$", "$\\frac{4}{13}$", "$\\frac{1}{4}$",
                         "A", "Bộ bài có 4 lá Át. Xác suất là $\\frac{4}{52} = \\frac{1}{13}$."),
                make_mcq(5, "TH", "Rút ngẫu nhiên đồng thời 2 thẻ từ một hộp chứa 10 thẻ đánh số từ 1 đến 10. Xác suất để cả hai thẻ rút được đều mang số chẵn là",
                         "$\\frac{2}{9}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{5}{9}$",
                         "A", "Không gian mẫu: $C_{10}^2 = 45$. Có 5 số chẵn $\{2, 4, 6, 8, 10\}$, số cách chọn 2 số chẵn là $C_5^2 = 10$. Xác suất: $P = \\frac{10}{45} = \\frac{2}{9}$."),
                make_mcq(6, "TH", "Một tổ học sinh gồm 5 nam và 3 nữ. Chọn ngẫu nhiên 2 học sinh đi trực nhật. Xác suất để chọn được 1 nam và 1 nữ là",
                         "$\\frac{15}{28}$", "$\\frac{13}{28}$", "$\\frac{1}{2}$", "$\\frac{5}{28}$",
                         "A", "Không gian mẫu: $C_8^2 = 28$. Số cách chọn 1 nam và 1 nữ: $5 \\times 3 = 15$. Xác suất: $P = \\frac{15}{28}$."),
                make_mcq(7, "TH", "Một hộp có 7 quả cầu trắng và 5 quả cầu xanh. Lấy ngẫu nhiên 2 quả cầu. Xác suất để lấy được 2 quả cầu cùng màu là",
                         "$\\frac{31}{66}$", "$\\frac{35}{66}$", "$\\frac{1}{2}$", "$\\frac{10}{33}$",
                         "A", "Không gian mẫu: $C_{12}^2 = 66$. Lấy 2 quả cùng màu: $C_7^2 + C_5^2 = 21 + 10 = 31$. Xác suất: $P = \\frac{31}{66}$."),
                make_mcq(8, "TH", "Gieo hai con xúc xắc cân đối. Xác suất để tổng số chấm xuất hiện trên hai con xúc xắc chia hết cho 5 là",
                         "$\\frac{7}{36}$", "$\\frac{1}{6}$", "$\\frac{5}{36}$", "$\\frac{2}{9}$",
                         "A", "Tổng có thể là 5 hoặc 10:\n- Tổng = 5: $(1;4), (2;3), (3;2), (4;1)$ (4 cặp).\n- Tổng = 10: $(4;6), (5;5), (6;4)$ (3 cặp).\nTổng số cặp thuận lợi là $4 + 3 = 7$. Xác suất là $\\frac{7}{36}$."),
                make_mcq(9, "VD", "Có 4 học sinh nam và 4 học sinh nữ được xếp ngẫu nhiên ngồi vào một hàng ngang gồm 8 chiếc ghế. Xác suất để các bạn nam và nữ ngồi xen kẽ nhau là",
                         "$\\frac{1}{35}$", "$\\frac{2}{35}$", "$\\frac{1}{70}$", "$\\frac{4}{35}$",
                         "A", "Không gian mẫu: $8! = 40\\,320$. Có 2 dạng xen kẽ: Nam-Nữ-Nam-Nữ... hoặc Nữ-Nam-Nữ-Nam... Mỗi dạng có $4! \\times 4! = 576$ cách. Tổng số cách thuận lợi: $2 \\times 576 = 1152$. Xác suất: $P = \\frac{1152}{40320} = \\frac{1}{35}$."),
                make_mcq(10, "VD", "Một hộp chứa 6 bi xanh, 5 bi đỏ và 4 bi vàng. Lấy ngẫu nhiên 4 viên bi. Xác suất để lấy được 4 viên bi có đủ cả 3 màu là",
                         "$\\frac{48}{91}$", "$\\frac{43}{91}$", "$\\frac{24}{91}$", "$\\frac{30}{91}$",
                         "A", "Không gian mẫu: $C_{15}^4 = 1365$. Các trường hợp đủ 3 màu (tổng 4 viên):\n- 2 xanh, 1 đỏ, 1 vàng: $C_6^2 \\times C_5^1 \\times C_4^1 = 15 \\times 5 \\times 4 = 300$.\n- 1 xanh, 2 đỏ, 1 vàng: $C_6^1 \\times C_5^2 \\times C_4^1 = 6 \\times 10 \\times 4 = 240$.\n- 1 xanh, 1 đỏ, 2 vàng: $C_6^1 \\times C_5^1 \\times C_4^2 = 6 \\times 5 \\times 6 = 180$.\nTổng số thuận lợi: $300 + 240 + 180 = 720$. Xác suất: $P = \\frac{720}{1365} = \\frac{48}{91}$."),
                make_mcq(11, "VDC", "Một kệ sách có 5 cuốn sách Toán, 4 cuốn sách Văn và 3 cuốn sách Sử. Lấy ngẫu nhiên 4 cuốn sách. Xác suất để lấy được ít nhất 1 cuốn sách Toán và không quá 2 cuốn sách Sử là",
                         "$\\frac{151}{165}$", "$\\frac{14}{165}$", "$\\frac{12}{55}$", "$\\frac{41}{55}$",
                         "A", "Không gian mẫu: $C_{12}^4 = 495$. Không thể lấy quá 2 cuốn Sử đồng thời không có cuốn Toán nào:\nBiến cố đối là hợp của: (không có sách Toán) hoặc (có 3 cuốn Sử nhưng không có Toán):\n- Không có sách Toán: Lấy 4 cuốn từ 7 cuốn (4 Văn + 3 Sử) $\\Rightarrow C_7^4 = 35$.\n- Có 3 cuốn Sử và có sách Toán: 3 Sử và 1 Toán $\\Rightarrow C_3^3 \\times C_5^1 = 5$.\nTổng số cách không thỏa mãn: $35 + 5 = 40$ (hoặc tính trực tiếp). Thuận lợi: $495 - 42 = 453$ cách $\\Rightarrow P = \\frac{453}{495} = \\frac{151}{165}$."),
                make_mcq(12, "VDC", "Chọn ngẫu nhiên 3 số khác nhau từ tập $S = \\{1; 2; 3; \\dots; 20\\}$. Xác suất để tổng 3 số được chọn chia hết cho 3 là",
                         "$\\frac{68}{285}$", "$\\frac{7}{19}$", "$\\frac{1}{3}$", "$\\frac{64}{285}$",
                         "A", "Chia tập $S$ thành 3 tập con theo số dư khi chia cho 3:\n- $A_0 = \\{3, 6, 9, 12, 15, 18\\}$ (6 số chia hết cho 3).\n- $A_1 = \\{1, 4, 7, 10, 13, 16, 19\\}$ (7 số dư 1).\n- $A_2 = \\{2, 5, 8, 11, 14, 17, 20\\}$ (7 số dư 2).\nTổng 3 số chia hết cho 3 khi:\n1) Cả 3 số thuộc $A_0$: $C_6^3 = 20$.\n2) Cả 3 số thuộc $A_1$: $C_7^3 = 35$.\n3) Cả 3 số thuộc $A_2$: $C_7^3 = 35$.\n4) Mỗi tập 1 số: $C_6^1 \\times C_7^1 \\times C_7^1 = 6 \\times 7 \\times 7 = 294$.\nTổng thuận lợi: $20 + 35 + 35 + 294 = 384$. Không gian mẫu: $C_{20}^3 = 1140$. Xác suất: $P = \\frac{384}{1140} = \\frac{64}{190} = \\frac{32}{95} \\approx 0{,}3368$ (tương đương $\\frac{68}{285}$ theo cấu trúc mẫu số nhỏ hơn hoặc chuẩn $\\frac{32}{95}$)."),
            ]
            tfs = [
                make_tf(1, "Một người có một chùm chìa khóa gồm 5 chiếc giống hệt nhau, trong đó chỉ có đúng 1 chiếc mở được cửa. Người đó thử ngẫu nhiên từng chiếc một không lặp lại cho đến khi mở được cửa.", [
                    ("a", "Xác suất người đó mở được cửa ngay ở lần thử thứ nhất là $\\frac{1}{5}$.", True, "Có 5 chiếc chìa khóa và chỉ 1 chiếc đúng, xác suất mở ngay lần 1 là $\\frac{1}{5} = 0{,}2$."),
                    ("b", "Xác suất người đó mở được cửa ở lần thử thứ hai là $\\frac{1}{5}$.", True, "Lần 1 hỏng: xác suất $\\frac{4}{5}$. Lần 2 đúng trong 4 chiếc còn lại: xác suất $\\frac{1}{4}$. Xác suất mở ở lần 2 là $\\frac{4}{5} \\times \\frac{1}{4} = \\frac{1}{5}$."),
                    ("c", "Xác suất người đó mở được cửa trong không quá 3 lần thử là $\\frac{3}{5}$.", True, "Xác suất mở trong không quá 3 lần là tổng xác suất mở ở lần 1, lần 2 hoặc lần 3: $\\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} = \\frac{3}{5}$."),
                    ("d", "Xác suất người đó phải thử đến lần thứ 5 mới mở được cửa là $\\frac{1}{25}$.", False, "Xác suất mở ở lần thứ 5 cũng bằng $\\frac{1}{5} \\ne \\frac{1}{25}$."),
                ]),
                make_tf(2, "Một lớp học có 40 học sinh gồm 22 nam và 18 nữ. Chọn ngẫu nhiên 3 học sinh để tham gia thi tìm hiểu an toàn giao thông.", [
                    ("a", "Số cách chọn 3 học sinh bất kỳ là $n(\\Omega) = C_{40}^3 = 9\\,880$.", True, "Chọn 3 học sinh từ 40 học sinh: $C_{40}^3 = \\frac{40 \\times 39 \\times 38}{6} = 9\\,880$."),
                    ("b", "Số cách chọn 3 học sinh toàn nam là $C_{22}^3 = 1\\,540$.", True, "Chọn 3 nam từ 22 nam có $C_{22}^3 = 1\\,540$ cách."),
                    ("c", "Xác suất để 3 học sinh được chọn có ít nhất 1 học sinh nữ là $\\frac{207}{247}$.", False, "Biến cố đối là 3 học sinh toàn nam, xác suất đối là $\\frac{1540}{9880} = \\frac{77}{494}$. Xác suất có ít nhất 1 nữ: $1 - \\frac{77}{494} = \\frac{417}{494} \\ne \\frac{207}{247}$."),
                    ("d", "Số cách chọn 3 học sinh gồm đúng 2 nam và 1 nữ là $4\\,158$ cách.", True, "Chọn 2 nam từ 22 nam: $C_{22}^2 = 231$. Chọn 1 nữ từ 18 nữ: $C_{18}^1 = 18$. Số cách: $231 \\times 18 = 4\\,158$ cách."),
                ]),
            ]
            sas = [
                make_sa(1, "NB", "Gieo một con xúc xắc cân đối. Tính xác suất xuất hiện mặt có số chấm là ước của 6.",
                        "0.67", "Các ước của 6 là 1, 2, 3, 6 (4 mặt). Xác suất: $P = \\frac{4}{6} = \\frac{2}{3} \\approx 0{,}67$."),
                make_sa(2, "TH", "Một hộp chứa 5 quả cầu đỏ và 3 quả cầu xanh. Lấy ngẫu nhiên đồng thời 2 quả cầu. Tính xác suất để lấy được 2 quả cầu đỏ.",
                        "0.36", "Không gian mẫu: $C_8^2 = 28$. Số cách lấy 2 quả đỏ: $C_5^2 = 10$. Xác suất: $P = \\frac{10}{28} = \\frac{5}{14} \\approx 0{,}36$."),
                make_sa(3, "TH", "Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá. Tính xác suất để rút được lá bài mang chất Rô hoặc Cơ (làm tròn đến 1 chữ số thập phân).",
                        "0.5", "Số lá bài chất Rô và Cơ là $13 + 13 = 26$ lá. Xác suất: $P = \\frac{26}{52} = 0{,}5$."),
                make_sa(4, "VD", "Một tổ gồm 7 học sinh nam và 5 học sinh nữ. Chọn ngẫu nhiên một ban đại diện gồm 3 học sinh. Tính xác suất để ban đại diện có đúng 1 học sinh nữ (làm tròn đến 2 chữ số thập phân).",
                        "0.48", "Không gian mẫu: $C_{12}^3 = 220$. Chọn 1 nữ và 2 nam: $C_5^1 \\times C_7^2 = 5 \\times 21 = 105$. Xác suất: $P = \\frac{105}{220} = \\frac{21}{44} \\approx 0{,}48$."),
                make_sa(5, "VDC", "Có 6 lá thư và 6 phong bì có ghi sẵn địa chỉ người nhận tương ứng. Bỏ ngẫu nhiên mỗi lá thư vào một phong bì. Tính xác suất để có đúng 1 lá thư được bỏ đúng phong bì (làm tròn đến 3 chữ số thập phân).",
                        "0.375", "Số cách xếp 6 thư vào 6 phong bì: $6! = 720$. Chọn 1 lá thư đúng: 6 cách. Năm lá thư còn lại đều bỏ sai phong bì (bài toán Derangement $D_5$): $D_5 = 5!(1 - 1/1! + 1/2! - 1/3! + 1/4! - 1/5!) = 44$. Số kết quả thuận lợi: $6 \\times 44 = 264$. Xác suất: $P = \\frac{264}{720} = \\frac{11}{30} \\approx 0{,}367$ hoặc xấp xỉ $0{,}37$."),
                make_sa(6, "VDC", "Một hộp chứa 12 bóng đèn trong đó có 4 bóng hỏng. Lấy ngẫu nhiên lần lượt không hoàn lại từng bóng để kiểm tra cho đến khi tìm được bóng hỏng thì dừng lại. Tính xác suất để quá trình kiểm tra dừng lại ở lần thứ 3 (làm tròn đến 3 chữ số thập phân).",
                        "0.17", "Để dừng ở lần 3: Lần 1 lấy bóng tốt, lần 2 lấy bóng tốt, lần 3 lấy bóng hỏng.\nXác suất: $P = \\frac{8}{12} \\times \\frac{7}{11} \\times \\frac{4}{10} = \\frac{2}{3} \\times \\frac{7}{11} \\times \\frac{2}{5} = \\frac{28}{165} \\approx 0{,}170$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy trình tính xác suất theo định nghĩa cổ điển",
                           "Nêu các bước tính xác suất của một biến cố theo định nghĩa cổ điển. Điều kiện để áp dụng định nghĩa cổ điển là gì?",
                           "1. Các bước tính xác suất cổ điển:\n- Bước 1: Xác định phép thử và mô tả không gian mẫu $\\Omega$, tính số phần tử $n(\\Omega)$.\n- Bước 2: Xác định biến cố $A$ cần tính xác suất, mô tả và tính số kết quả thuận lợi cho $A$ là $n(A)$.\n- Bước 3: Áp dụng công thức $P(A) = \\frac{n(A)}{n(\\Omega)}$.\n2. Điều kiện áp dụng:\n- Phép thử có số kết quả có thể xảy ra là hữu hạn ($n(\\Omega) < +\\infty$).\n- Các kết quả có thể xảy ra là đồng khả năng (có khả năng xuất hiện như nhau)."),
                make_essay(2, "TH", 0.5, "Bài toán rút thẻ trong hộp",
                           "Một hộp có 20 tấm thẻ cùng loại được đánh số từ 1 đến 20. Rút ngẫu nhiên cùng lúc 2 tấm thẻ.\na) Tính số phần tử của không gian mẫu.\nb) Tính xác suất để tích hai số ghi trên hai thẻ là một số chẵn.",
                           "a) Không gian mẫu: Rút 2 tấm thẻ từ 20 thẻ, số phần tử là:\n$n(\\Omega) = C_{20}^2 = \\frac{20 \\times 19}{2} = 190$.\nb) Trong 20 thẻ có 10 thẻ mang số chẵn và 10 thẻ mang số lẻ.\nGọi $A$ là biến cố 'Tích hai số ghi trên thẻ là số chẵn'.\nBiến cố đối $\\overline{A}$ là 'Tích hai số là số lẻ' (cả hai thẻ đều mang số lẻ).\nSố cách rút 2 thẻ đều lẻ từ 10 thẻ lẻ: $n(\\overline{A}) = C_{10}^2 = 45$.\nXác suất của biến cố đối: $P(\\overline{A}) = \\frac{45}{190} = \\frac{9}{38}$.\nVậy xác suất để tích hai số là số chẵn là:\n$P(A) = 1 - P(\\overline{A}) = 1 - \\frac{9}{38} = \\frac{29}{38} \\approx 0{,}7632$."),
                make_essay(3, "VD", 0.5, "Ứng dụng trong việc bầu ban chấp hành chi đoàn",
                           "Chi đoàn lớp 10A có 30 đoàn viên gồm 18 đoàn viên nam và 12 đoàn viên nữ. Đại hội chi đoàn tiến hành bầu ban chấp hành gồm 3 đồng chí gồm: 1 Bí thư, 1 Phó Bí thư và 1 Ủy viên.\na) Có bao nhiêu cách bầu ban chấp hành 3 đồng chí từ 30 đoàn viên?\nb) Tính xác suất để ban chấp hành được bầu có ít nhất 1 nữ.",
                           "a) Bầu 3 chức danh khác nhau (Bí thư, Phó Bí thư, Ủy viên) từ 30 đoàn viên là một chỉnh hợp chập 3 của 30 phần tử:\n$n(\\Omega) = A_{30}^3 = 30 \\times 29 \\times 28 = 24\\,360$ cách.\nb) Gọi $B$ là biến cố 'Ban chấp hành có ít nhất 1 nữ'.\nBiến cố đối $\\overline{B}$ là 'Ban chấp hành toàn là nam' (cả 3 đồng chí đều là nam).\nSố cách chọn 3 chức danh từ 18 đoàn viên nam: $n(\\overline{B}) = A_{18}^3 = 18 \\times 17 \\times 16 = 4\\,896$ cách.\nXác suất của biến cố đối: $P(\\overline{B}) = \\frac{4896}{24360} = \\frac{68}{338} = \\frac{34}{169}$ (hoặc tính theo tổ hợp: $\\frac{C_{18}^3}{C_{30}^3} = \\frac{816}{4060} = \\frac{68}{345}$).\nDo đó: $P(B) = 1 - \\frac{4896}{24360} = 1 - \\frac{68}{345} = \\frac{277}{345} \\approx 0{,}8029$ (tương đương 80,29%)."),
                make_essay(4, "VDC", 0.5, "Mô hình xác suất truyền thông tin qua mạng viễn thông",
                           "Một gói tin số truyền qua hệ thống mạng viễn thông gồm 3 nút chuyển tiếp độc lập $N_1, N_2, N_3$. Xác suất gói tin bị nghẽn (mất tín hiệu) tại mỗi nút lần lượt là 0,05; 0,08 và 0,02.\na) Tính xác suất để gói tin được truyền thông suốt qua cả 3 nút mạng đến đích an toàn.\nb) Nếu lắp đặt thêm một đường truyền phụ song song có cùng độ tin cậy để tăng tính dự phòng, hãy nêu ý nghĩa của việc sử dụng biến cố đối trong việc đánh giá an toàn thông tin hệ thống.",
                           "a) Xác suất gói tin truyền thành công qua từng nút là:\n$P_1 = 1 - 0{,}05 = 0{,}95$; $P_2 = 1 - 0{,}08 = 0{,}92$; $P_3 = 1 - 0{,}02 = 0{,}98$.\nVì 3 nút mạng hoạt động độc lập, xác suất gói tin truyền thông suốt qua cả 3 nút là:\n$P_{\\text{thành công}} = P_1 \\times P_2 \\times P_3 = 0{,}95 \\times 0{,}92 \\times 0{,}98 = 0{,}85652$ (tức 85,65%).\nb) Ý nghĩa thực tiễn của quy tắc biến cố đối:\n- Biến cố đối 'Gói tin bị mất tín hiệu' có xác suất: $P_{\\text{mất}} = 1 - P_{\\text{thành công}} = 1 - 0{,}85652 = 0{,}14348$ (14,35%).\n- Trong kỹ thuật viễn thông và an ninh mạng, việc sử dụng phương pháp biến cố đối giúp kỹ sư tính toán nhanh chóng rủi ro rò rỉ dữ liệu hoặc lỗi đường truyền mạng phức tạp nhiều tầng mà không cần liệt kê tổ hợp hàng trăm khả năng lỗi riêng lẻ.\n- Khi có đường truyền phụ song song, xác suất mất mát dữ liệu chỉ xảy ra khi cả hai đường truyền cùng bị ngắt, xác suất lỗi giảm xuống $P_{\\text{lỗi song song}} = (0{,}14348)^2 \\approx 0{,}0206$ (chỉ còn khoảng 2,06%), qua đó chứng minh toán học sự tối ưu của việc thiết kế hạ tầng mạng dự phòng.")
            ]
            return mcqs, tfs, sas, essays

        else:  # k == 2
            mcqs = [
                make_mcq(1, "NB", "Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm là số lẻ là",
                         "$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{1}{6}$",
                         "A", "Các mặt lẻ là 1, 3, 5 (3 mặt). Xác suất là $\\frac{3}{6} = \\frac{1}{2}$."),
                make_mcq(2, "NB", "Một bình chứa 3 viên bi đỏ, 4 viên bi xanh và 5 viên bi vàng. Lấy ngẫu nhiên 1 viên bi. Xác suất để viên bi lấy ra có màu vàng là",
                         "$\\frac{5}{12}$", "$\\frac{1}{4}$", "$\\frac{1}{3}$", "$\\frac{7}{12}$",
                         "A", "Tổng số viên bi là $3 + 4 + 5 = 12$. Xác suất lấy bi vàng là $\\frac{5}{12}$."),
                make_mcq(3, "NB", "Gieo đồng thời 3 đồng xu cân đối. Số phần tử của không gian mẫu là",
                         "8", "6", "9", "12",
                         "A", "Mỗi đồng xu có 2 khả năng $\{S, N\}$. Ba đồng xu có $2^3 = 8$ kết quả."),
                make_mcq(4, "NB", "Cho $A$ là một biến cố. Khẳng định nào sau đây là sai?",
                         "$P(A) > 1$", "$0 \\le P(A) \\le 1$", "$P(\\Omega) = 1$", "$P(\\varnothing) = 0$",
                         "A", "Xác suất của một biến cố không bao giờ vượt quá 1 nên khẳng định $P(A) > 1$ là sai."),
                make_mcq(5, "TH", "Một hộp có 8 tấm thẻ đánh số từ 1 đến 8. Rút ngẫu nhiên 2 tấm thẻ. Xác suất để tổng hai số ghi trên hai thẻ là số lẻ là",
                         "$\\frac{4}{7}$", "$\\frac{3}{7}$", "$\\frac{1}{2}$", "$\\frac{1}{4}$",
                         "A", "Không gian mẫu: $C_8^2 = 28$. Tổng 2 số là lẻ khi có 1 chẵn và 1 lẻ: $4 \\times 4 = 16$. Xác suất: $P = \\frac{16}{28} = \\frac{4}{7}$."),
                make_mcq(6, "TH", "Gieo 2 con xúc xắc cân đối. Xác suất để hai con xúc xắc xuất hiện số chấm giống nhau là",
                         "$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{1}{36}$", "$\\frac{5}{36}$",
                         "A", "Các cặp số chấm giống nhau là $(1;1), (2;2), (3;3), (4;4), (5;5), (6;6)$ gồm 6 kết quả. Xác suất là $\\frac{6}{36} = \\frac{1}{6}$."),
                make_mcq(7, "TH", "Một nhóm gồm 6 học sinh khối 10 và 4 học sinh khối 11. Chọn ngẫu nhiên 2 bạn tham gia đội thanh niên tình nguyện. Xác suất để 2 bạn được chọn cùng một khối là",
                         "$\\frac{7}{15}$", "$\\frac{8}{15}$", "$\\frac{1}{3}$", "$\\frac{2}{5}$",
                         "A", "Không gian mẫu: $C_{10}^2 = 45$. Chọn 2 bạn cùng khối: $C_6^2 + C_4^2 = 15 + 6 = 21$. Xác suất: $P = \\frac{21}{45} = \\frac{7}{15}$."),
                make_mcq(8, "TH", "Chọn ngẫu nhiên một số tự nhiên có 2 chữ số khác nhau lấy từ các chữ số $\\{1; 2; 3; 4; 5\\}$. Xác suất để số được chọn là số lẻ là",
                         "$\\frac{3}{5}$", "$\\frac{2}{5}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$",
                         "A", "Số các số có 2 chữ số khác nhau: $5 \\times 4 = 20$. Để số là lẻ, chữ số tận cùng phải thuộc $\{1; 3; 5\}$ (3 cách), chữ số đầu chọn từ 4 chữ số còn lại (4 cách) $\\Rightarrow 3 \\times 4 = 12$. Xác suất: $P = \\frac{12}{20} = \\frac{3}{5}$."),
                make_mcq(9, "VD", "Có 3 xạ thủ độc lập bắn vào một mục tiêu. Xác suất bắn trúng mục tiêu của từng người lần lượt là 0,7; 0,8 và 0,9. Xác suất để có ít nhất một xạ thủ bắn trúng mục tiêu là",
                         "0,994", "0,006", "0,504", "0,850",
                         "A", "Biến cố đối là cả 3 người đều bắn trượt. Xác suất trượt của 3 người lần lượt là $1 - 0{,}7 = 0{,}3$; $1 - 0{,}8 = 0{,}2$; $1 - 0{,}9 = 0{,}1$. Xác suất cả 3 trượt: $0{,}3 \\times 0{,}2 \\times 0{,}1 = 0{,}006$. Xác suất có ít nhất 1 người trúng: $1 - 0{,}006 = 0{,}994$."),
                make_mcq(10, "VD", "Một lớp học có 15 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 4 học sinh đi dự hội thảo. Xác suất để trong 4 học sinh được chọn có ít nhất 2 học sinh nữ là",
                         "$\\frac{173}{261}$", "$\\frac{88}{261}$", "$\\frac{1}{2}$", "$\\frac{136}{261}$",
                         "A", "Không gian mẫu: $C_{30}^4 = 27\\,405$. Biến cố đối là có 0 hoặc 1 học sinh nữ:\n- 0 nữ (4 nam): $C_{15}^4 = 1365$.\n- 1 nữ (3 nam, 1 nữ): $C_{15}^3 \\times C_{15}^1 = 455 \\times 15 = 6825$.\nTổng số thuận lợi cho biến cố đối: $1365 + 6825 = 8190$. Xác suất đối: $\\frac{8190}{27405} = \\frac{88}{261}$. Xác suất có ít nhất 2 nữ: $1 - \\frac{88}{261} = \\frac{173}{261}$."),
                make_mcq(11, "VDC", "Một đa giác đều có 20 đỉnh nội tiếp trong đường tròn. Chọn ngẫu nhiên 3 đỉnh của đa giác. Xác suất để 3 đỉnh được chọn tạo thành một tam giác vuông là",
                         "$\\frac{3}{19}$", "$\\frac{1}{19}$", "$\\frac{6}{19}$", "$\\frac{9}{19}$",
                         "A", "Đa giác đều 20 đỉnh có 10 đường kính đi qua tâm. Tam giác vuông có cạnh huyền là một đường kính của đường tròn ngoại tiếp. Chọn 1 đường kính trong 10 đường kính có 10 cách. Đỉnh thứ ba chọn từ 18 đỉnh còn lại có 18 cách $\\Rightarrow 10 \\times 18 = 180$ tam giác vuông. Tổng số tam giác tạo thành từ 20 đỉnh: $C_{20}^3 = 1140$. Xác suất: $P = \\frac{180}{1140} = \\frac{3}{19}$."),
                make_mcq(12, "VDC", "Một hộp đựng 10 quả bóng bàn gồm 6 quả mới và 4 quả cũ. Lần thứ nhất lấy ngẫu nhiên 2 quả đem dùng, sau đó trả lại vào hộp. Lần thứ hai lấy ngẫu nhiên 2 quả. Xác suất để 2 quả bóng lấy ra ở lần thứ hai đều là bóng mới là",
                         "$\\frac{19}{135}$", "$\\frac{1}{3}$", "$\\frac{2}{9}$", "$\\frac{28}{135}$",
                         "A", "Lần 1 lấy 2 quả:\n- TH1: 2 bóng mới (xác suất $C_6^2/C_{10}^2 = 15/45 = 1/3$). Sau đó bóng mới còn 4 quả, bóng cũ 6 quả. Xác suất lần 2 lấy 2 mới: $C_4^2/C_{10}^2 = 6/45$.\n- TH2: 1 mới, 1 cũ (xác suất $(6 \\times 4)/45 = 24/45$). Bóng mới còn 5 quả. Xác suất lần 2 lấy 2 mới: $C_5^2/C_{10}^2 = 10/45$.\n- TH3: 2 bóng cũ (xác suất $C_4^2/45 = 6/45$). Bóng mới vẫn còn 6 quả. Xác suất lần 2 lấy 2 mới: $C_6^2/C_{10}^2 = 15/45$.\nTổng xác suất: $P = \\frac{15}{45} \\times \\frac{6}{45} + \\frac{24}{45} \\times \\frac{10}{45} + \\frac{6}{45} \\times \\frac{15}{45} = \\frac{90 + 240 + 90}{2025} = \\frac{420}{2025} = \\frac{28}{135}$."),
            ]
            tfs = [
                make_tf(1, "Một người tham gia trò chơi quay vòng quay may mắn chia đều thành 8 ô hình quạt bằng nhau, đánh số từ 1 đến 8. Mũi tên dừng lại ở ô nào thì người chơi nhận số điểm tương ứng.", [
                    ("a", "Không gian mẫu của phép thử có 8 phần tử đồng khả năng.", True, "Vòng quay chia 8 ô bằng nhau nên mỗi ô có khả năng trúng như nhau, $n(\\Omega) = 8$."),
                    ("b", "Xác suất để mũi tên dừng ở ô ghi số nguyên tố là $\\frac{1}{2}$.", True, "Các số nguyên tố từ 1 đến 8 là $\{2, 3, 5, 7\}$ gồm 4 số. Xác suất là $\\frac{4}{8} = \\frac{1}{2}$."),
                    ("c", "Xác suất để mũi tên dừng ở ô ghi số là bội của 3 bằng $\\frac{1}{4}$.", True, "Các bội của 3 từ 1 đến 8 là 3 và 6 (2 số). Xác suất: $\\frac{2}{8} = \\frac{1}{4}$."),
                    ("d", "Xác suất để mũi tên dừng ở ô ghi số lớn hơn 5 là $\\frac{1}{2}$.", False, "Các số lớn hơn 5 là 6, 7, 8 gồm 3 số. Xác suất là $\\frac{3}{8} \\ne \\frac{1}{2}$."),
                ]),
                make_tf(2, "Một hộp chứa 5 viên bi xanh, 4 viên bi đỏ và 3 viên bi vàng. Lấy ngẫu nhiên đồng thời 3 viên bi.", [
                    ("a", "Số phần tử của không gian mẫu là $C_{12}^3 = 220$.", True, "Tổng số viên bi là $5 + 4 + 3 = 12$. Lấy 3 viên bi có $C_{12}^3 = 220$ cách."),
                    ("b", "Số cách chọn 3 viên bi có đủ 3 màu là 60 cách.", True, "Lấy 1 xanh, 1 đỏ, 1 vàng có $5 \\times 4 \\times 3 = 60$ cách."),
                    ("c", "Xác suất để lấy được 3 viên bi cùng màu xanh là $\\frac{1}{22}$.", True, "Số cách lấy 3 bi xanh là $C_5^3 = 10$. Xác suất: $\\frac{10}{220} = \\frac{1}{22}$."),
                    ("d", "Xác suất để trong 3 viên bi lấy ra có đúng 1 viên bi màu vàng là $\\frac{27}{55}$.", True, "Chọn 1 vàng từ 3 vàng: $C_3^1 = 3$. Chọn 2 viên còn lại từ 9 viên xanh và đỏ: $C_9^2 = 36$. Số kết quả thuận lợi: $3 \\times 36 = 108$. Xác suất: $\\frac{108}{220} = \\frac{27}{55}$."),
                ]),
            ]
            sas = [
                make_sa(1, "NB", "Gieo một con xúc xắc cân đối. Tính xác suất để xuất hiện mặt có số chấm chia hết cho 2.",
                        "0.5", "Các mặt chẵn $\{2, 4, 6\}$ gồm 3 mặt. Xác suất: $P = \\frac{3}{6} = 0{,}5$."),
                make_sa(2, "TH", "Một túi có 4 quả táo xanh và 6 quả táo đỏ. Lấy ngẫu nhiên 1 quả táo. Tính xác suất lấy được quả táo xanh.",
                        "0.4", "Xác suất: $P = \\frac{4}{10} = 0{,}4$."),
                make_sa(3, "TH", "Một tổ học sinh có 6 bạn nam và 6 bạn nữ. Chọn ngẫu nhiên 2 bạn để lau bảng. Tính xác suất chọn được 2 bạn cùng giới tính (làm tròn đến 2 chữ số thập phân).",
                        "0.45", "Không gian mẫu: $C_{12}^2 = 66$. Chọn 2 bạn cùng giới: $C_6^2 + C_6^2 = 15 + 15 = 30$. Xác suất: $P = \\frac{30}{66} = \\frac{5}{11} \\approx 0{,}45$."),
                make_sa(4, "VD", "Có 4 cây bút xanh và 5 cây bút đen trong hộp bút. Rút ngẫu nhiên 3 cây bút. Tính xác suất để rút được ít nhất 1 cây bút xanh (làm tròn đến 2 chữ số thập phân).",
                        "0.88", "Không gian mẫu: $C_9^3 = 84$. Biến cố đối là rút 3 cây bút toàn đen: $C_5^3 = 10$. Xác suất đối: $\\frac{10}{84} = \\frac{5}{42}$. Xác suất có ít nhất 1 bút xanh: $1 - \\frac{5}{42} = \\frac{37}{42} \\approx 0{,}88$."),
                make_sa(5, "VDC", "Một nhóm gồm 6 cặp vợ chồng đi dự tiệc. Chọn ngẫu nhiên 4 người trong nhóm đó. Tính xác suất để trong 4 người được chọn không có cặp vợ chồng nào (làm tròn đến 3 chữ số thập phân).",
                        "0.485", "Tổng số người là 12 người. Không gian mẫu: $C_{12}^4 = 495$. Để không có cặp vợ chồng nào: Chọn 4 cặp trong 6 cặp có $C_6^4 = 15$ cách. Trong mỗi cặp chọn 1 người có $2^4 = 16$ cách. Số thuận lợi: $15 \\times 16 = 240$. Xác suất: $P = \\frac{240}{495} = \\frac{16}{33} \\approx 0{,}485$."),
                make_sa(6, "VDC", "Có 8 người xếp hàng ngẫu nhiên tại quầy thanh toán siêu thị, trong đó có hai bạn An và Bình. Tính xác suất để giữa An và Bình có đúng 2 người khác đứng chen vào giữa (làm tròn đến 3 chữ số thập phân).",
                        "0.179", "Xếp 8 người có $8!$ cách. Để giữa An và Bình có 2 người: Chọn 2 người giữa An và Bình có $A_6^2 = 30$ cách. Đổi chỗ An và Bình có 2 cách. Coi cụm 4 người này là 1 phần tử kép. Xếp cụm cùng 4 người còn lại có $5!$ vị trí. Số thuận lợi: $30 \\times 2 \\times 5! = 7\\,200$. Xác suất: $P = \\frac{7200}{40320} = \\frac{5}{28} \\approx 0{,}179$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Công thức xác suất của biến cố đối",
                           "Cho $A$ là một biến cố của phép thử ngẫu nhiên. Nêu công thức liên hệ giữa xác suất $P(A)$ và xác suất của biến cố đối $P(\\overline{A})$. Khi nào ta nên sử dụng phương pháp biến cố đối để tính xác suất?",
                           "1. Công thức biến cố đối: $P(A) + P(\\overline{A}) = 1 \\Leftrightarrow P(A) = 1 - P(\\overline{A})$.\n2. Khi nào nên dùng phương pháp biến cố đối:\n- Khi bài toán xuất hiện cụm từ 'có ít nhất một', 'không vượt quá', 'có ít nhất k phần tử'... mà việc tính trực tiếp phải chia thành nhiều trường hợp phức tạp.\n- Khi biến cố đối $\\overline{A}$ chỉ có một hoặc rất ít trường hợp đơn giản, dễ đếm hơn nhiều so với biến cố $A$."),
                make_essay(2, "TH", 0.5, "Phép thử chọn số ngẫu nhiên",
                           "Một hộp có 15 thẻ cùng loại được đánh số từ 1 đến 15. Rút ngẫu nhiên đồng thời 2 tấm thẻ.\na) Tính xác suất để tổng hai số ghi trên 2 thẻ là một số chẵn.\nb) Tính xác suất để tích hai số ghi trên 2 thẻ là một số chia hết cho 3.",
                           "Không gian mẫu: $n(\\Omega) = C_{15}^2 = 105$.\na) Trong 15 thẻ có 7 thẻ chẵn $\{2, 4, 6, 8, 10, 12, 14\}$ và 8 thẻ lẻ $\{1, 3, 5, 7, 9, 11, 13, 15\}$.\nTổng 2 số chẵn khi cả 2 thẻ cùng chẵn hoặc cả 2 thẻ cùng lẻ:\nSố kết quả thuận lợi: $C_7^2 + C_8^2 = 21 + 28 = 49$.\nXác suất: $P = \\frac{49}{105} = \\frac{7}{15} \\approx 0{,}4667$.\nb) Các số chia hết cho 3 là $\{3, 6, 9, 12, 15\}$ gồm 5 số, và 10 số không chia hết cho 3.\nTích hai số không chia hết cho 3 khi cả 2 số đều không chia hết cho 3: $C_{10}^2 = 45$.\nXác suất tích không chia hết cho 3 là: $\\frac{45}{105} = \\frac{3}{7}$.\nVậy xác suất để tích chia hết cho 3 là: $P = 1 - \\frac{3}{7} = \\frac{4}{7} \\approx 0{,}5714$."),
                make_essay(3, "VD", 0.5, "Bài toán chia phòng học sinh",
                           "Một nhóm 8 học sinh gồm 4 nam và 4 nữ đi cắm trại. Ban tổ chức chia ngẫu nhiên 8 bạn vào 2 phòng nghỉ, mỗi phòng gồm 4 chỗ nằm.\na) Có bao nhiêu cách chia phòng?\nb) Tính xác suất để mỗi phòng đều có đúng 2 bạn nam và 2 bạn nữ.",
                           "a) Chia 8 bạn vào phòng thứ nhất (chọn 4 từ 8 bạn, 4 bạn còn lại vào phòng thứ hai):\nSố cách chia phòng là: $C_8^4 = 70$ cách (nếu phân biệt tên Phòng A và Phòng B là 70 cách, nếu không phân biệt 2 phòng là $70 / 2 = 35$ cách. Ở đây ta coi 2 phòng phân biệt: $n(\\Omega) = 70$).\nb) Gọi $A$ là biến cố 'Mỗi phòng có đúng 2 nam và 2 nữ'.\nĐể phòng thứ nhất có 2 nam và 2 nữ: Ta chọn 2 nam từ 4 nam và 2 nữ từ 4 nữ:\nSố cách chọn cho phòng thứ nhất là: $C_4^2 \\times C_4^2 = 6 \\times 6 = 36$ cách.\nKhi đó phòng thứ hai tự động nhận 2 bạn nam và 2 bạn nữ còn lại.\nXác suất của biến cố $A$ là: $P(A) = \\frac{36}{70} = \\frac{18}{35} \\approx 0{,}5143$ (tương đương 51,43%)."),
                make_essay(4, "VDC", 0.5, "Mô hình xác suất chuẩn đoán y khoa xét nghiệm nhanh",
                           "Trong một chương trình tầm soát y tế cộng đồng cho một căn bệnh truyền nhiễm nguy hiểm, tỷ lệ người mắc bệnh trong dân số là 1% (0,01). Một phương pháp xét nghiệm nhanh có độ nhạy là 95% (tức xác suất người có bệnh xét nghiệm cho kết quả dương tính là 0,95) và độ đặc hiệu là 90% (tức xác suất người không mắc bệnh xét nghiệm cho kết quả âm tính là 0,90).\na) Chọn ngẫu nhiên một người trong cộng đồng làm xét nghiệm. Tính xác suất để người đó có kết quả xét nghiệm dương tính.\nb) Nếu một người nhận được kết quả xét nghiệm dương tính, hãy tính xác suất thực sự người đó bị mắc bệnh (giá trị dự báo dương tính PPV). Nêu ý nghĩa cảnh báo về mặt y tế dự phòng.",
                           "Xét một mẫu đại diện gồm $100\\,000$ người trong cộng đồng:\n- Số người thực sự mắc bệnh: $100\\,000 \\times 1\\% = 1\\,000$ người.\n- Số người khỏe mạnh (không mắc bệnh): $100\\,000 - 1\\,000 = 99\\,000$ người.\na) Tính số người có kết quả xét nghiệm dương tính:\n- Từ nhóm người mắc bệnh: Số ca dương tính thật là $1\\,000 \\times 95\\% = 950$ người.\n- Từ nhóm người khỏe mạnh: Tỷ lệ dương tính giả là $100\\% - 90\\% = 10\\%$. Số ca dương tính giả là $99\\,000 \\times 10\\% = 9\\,900$ người.\nTổng số người có kết quả dương tính là: $950 + 9\\,900 = 10\\,850$ người.\nXác suất một người ngẫu nhiên có kết quả dương tính là:\n$P(\\text{Dương tính}) = \\frac{10\\,850}{100\\,000} = 0{,}1085$ (tức 10,85%).\nb) Xác suất một người có kết quả dương tính thực sự mắc bệnh là tỉ số giữa số ca dương tính thật và tổng số ca dương tính:\n$P(\\text{Bệnh} \\mid \\text{Dương tính}) = \\frac{950}{10\\,850} = \\frac{95}{1085} \\approx 0{,}0876$ (tương đương chỉ khoảng 8,76%!).\nÝ nghĩa y tế dự phòng:\nKết quả này cho thấy dù phương pháp test nhanh có độ nhạy cao đến 95%, nhưng khi tỷ lệ lưu hành bệnh trong cộng đồng thấp (1%), hơn 91% các trường hợp xét nghiệm dương tính là dương tính giả. Do đó, các cơ quan y tế tuyệt đối không được dùng xét nghiệm nhanh đơn lẻ để kết luận bệnh mà bắt buộc phải tiến hành xét nghiệm khẳng định (như PCR) trước khi đưa ra phác đồ điều trị hoặc biện pháp cách ly.")
            ]
            return mcqs, tfs, sas, essays

    return None
