# -*- coding: utf-8 -*-
"""
Chương 8 Lớp 11: Các quy tắc tính xác suất.
Bao gồm:
- Bài 28: Biến cố hợp và biến cố giao. Biến cố độc lập
- Bài 29: Công thức cộng xác suất
- Bài 30: Công thức nhân xác suất cho hai biến cố độc lập
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch8_lesson(lnum, k):
    if lnum == 28:
        # BÀI 28: BIẾN CỐ HỢP VÀ BIẾN CỐ GIAO. BIẾN CỐ ĐỘC LẬP
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hai biến cố $A$ và $B$. Biến cố \"$A$ hoặc $B$ xảy ra\" được gọi là",
                         "Biến cố hợp của $A$ và $B$, kí hiệu $A \\cup B$",
                         "Biến cố giao của $A$ và $B$, kí hiệu $A \\cap B$",
                         "Biến cố đối của $A$",
                         "Biến cố độc lập",
                         "A", "Định nghĩa SGK: Biến cố hợp của $A$ và $B$ là biến cố \"$A$ hoặc $B$ xảy ra\", kí hiệu $A \\cup B$."),
                make_mcq(2, "NB", "Biến cố \"Cả $A$ và $B$ cùng xảy ra\" được gọi là",
                         "Biến cố giao của $A$ và $B$, kí hiệu $AB$ hoặc $A \\cap B$",
                         "Biến cố hợp của $A$ và $B$",
                         "Biến cố không thể",
                         "Biến cố chắc chắn",
                         "A", "Định nghĩa SGK: Biến cố giao là \"Cả $A$ và $B$ cùng xảy ra\", kí hiệu $A \\cap B$ hay $AB$."),
                make_mcq(3, "NB", "Hai biến cố $A$ và $B$ được gọi là độc lập nếu",
                         "Việc xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng tới xác suất xảy ra của biến cố kia",
                         "$A$ và $B$ không cùng xảy ra",
                         "$A$ xảy ra kéo theo $B$ xảy ra",
                         "Tổng xác suất của chúng bằng 1",
                         "A", "Định nghĩa SGK về hai biến cố độc lập."),
                make_mcq(4, "NB", "Hai biến cố $A$ và $B$ xung khắc khi và chỉ khi",
                         "$A \\cap B = \\emptyset$", "$A \\cup B = \\Omega$", "$P(A) + P(B) = 1$", "$A = B$",
                         "A", "Hai biến cố xung khắc không thể cùng xảy ra trong một phép thử, tức $A \\cap B = \\emptyset$."),
                make_mcq(5, "TH", "Gieo một con xúc xắc cân đối. Gọi $A$ là biến cố \"Xuất hiện mặt chẵn\", $B$ là biến cố \"Xuất hiện mặt chia hết cho 3\". Biến cố giao $A \\cap B$ là tập hợp nào?",
                         "$\\{6\\}$", "$\\{2; 4; 6\\}$", "$\\{3; 6\\}$", "$\\{2; 3; 4; 6\\}$",
                         "A", "$A = \\{2, 4, 6\\}$, $B = \\{3, 6\\} \\Rightarrow A \\cap B = \\{6\\}$."),
                make_mcq(6, "TH", "Gieo hai đồng xu phân biệt cân đối. Gọi $A$: \"Đồng xu 1 xuất hiện mặt ngửa\", $B$: \"Đồng xu 2 xuất hiện mặt sấp\". Hai biến cố $A$ và $B$ là",
                         "Hai biến cố độc lập", "Hai biến cố xung khắc", "Hai biến cố đối nhau", "Biến cố không thể",
                         "A", "Kết quả của đồng xu thứ nhất không ảnh hưởng đến đồng xu thứ hai nên $A$ và $B$ độc lập."),
                make_mcq(7, "TH", "Cho $A$ là biến cố trong phép thử $T$. Biến cố đối $\\overline{A}$ của biến cố $A$ là tập hợp",
                         "$\\Omega \\setminus A$", "$A \\setminus \\Omega$", "$\\emptyset$", "$\\Omega$",
                         "A", "Biến cố đối của $A$ là $\\overline{A} = \\Omega \\setminus A$."),
                make_mcq(8, "TH", "Gieo một con xúc xắc. Gọi $A$: \"Số chấm lẻ\", $B$: \"Số chấm lớn hơn 4\". Biến cố hợp $A \\cup B$ gồm các kết quả thuận lợi nào?",
                         "$\\{1; 3; 5; 6\\}$", "$\\{5\\}$", "$\\{1; 3; 5\\}$", "$\\{5; 6\\}$",
                         "A", "$A = \\{1, 3, 5\\}, B = \\{5, 6\\} \\Rightarrow A \\cup B = \\{1, 3, 5, 6\\}$."),
                make_mcq(9, "VD", "Một hộp có 10 viên bi (4 xanh, 6 đỏ). Rút ngẫu nhiên lần lượt 2 viên bi CÓ HOÀN LẠI. Gọi $A$: \"Lần 1 rút được bi đỏ\", $B$: \"Lần 2 rút được bi xanh\". Khẳng định nào đúng?",
                         "$A$ và $B$ là hai biến cố độc lập",
                         "$A$ và $B$ là hai biến cố xung khắc",
                         "$A$ và $B$ là hai biến cố đối nhau",
                         "$A$ và $B$ phụ thuộc lẫn nhau",
                         "A", "Vì rút CÓ HOÀN LẠI nên số bi trong hộp ở lần 2 không đổi, kết quả lần 1 không ảnh hưởng xác suất lần 2. Do đó $A$ và $B$ độc lập."),
                make_mcq(10, "VD", "Cũng bài toán trên nhưng rút KHÔNG HOÀN LẠI. Khi đó hai biến cố $A$ và $B$ là",
                         "Hai biến cố không độc lập",
                         "Hai biến cố độc lập",
                         "Hai biến cố xung khắc",
                         "Hai biến cố đối nhau",
                         "A", "Khi rút KHÔNG HOÀN LẠI, kết quả lần 1 làm thay đổi thành phần số bi trong hộp ở lần 2, nên hai biến cố không độc lập."),
                make_mcq(11, "VDC", "Hai xạ thủ độc lập cùng bắn vào bia. Gọi $A_1$: \"Xạ thủ 1 bắn trúng\", $A_2$: \"Xạ thủ 2 bắn trúng\". Biến cố $B$: \"Có ít nhất một xạ thủ bắn trúng\" biểu diễn qua $A_1, A_2$ là",
                         "$A_1 \\cup A_2$", "$A_1 \\cap A_2$", "$\\overline{A_1} \\cap \\overline{A_2}$", "$A_1 \\overline{A_2}$",
                         "A", "\"Có ít nhất một xạ thủ trúng\" nghĩa là xạ thủ 1 trúng hoặc xạ thủ 2 trúng, tức $A_1 \\cup A_2$."),
                make_mcq(12, "VDC", "Một hệ thống mạch điện gồm hai bóng đèn $Đ_1$ và $Đ_2$ mắc song song. Mạch bị ngắt (không có dòng điện chạy qua) khi và chỉ khi",
                         "Cả hai bóng đèn cùng bị hỏng",
                         "Ít nhất một bóng đèn bị hỏng",
                         "Đúng một bóng đèn bị hỏng",
                         "Cả hai bóng đèn đều hoạt động bình thường",
                         "A", "Mạch mắc song song chỉ mất điện khi toàn bộ các nhánh rẽ bị đứt, tức cả hai bóng cùng hỏng.")
            ]
            tfs = [
                make_tf(1, "Quan hệ giữa các biến cố trong phép thử gieo xúc xắc. Gieo một con xúc xắc 6 mặt cân đối đồng chất. Gọi $A$ là biến cố: \"Xuất hiện mặt có số chấm chia hết cho 2\"; $B$ là biến cố: \"Xuất hiện mặt có số chấm chia hết cho 3\".", [
                    ("a", "Biến cố $A = \\{2; 4; 6\\}$ có 3 kết quả thuận lợi.", True, "Các mặt chẵn là 2, 4, 6."),
                    ("b", "Biến cố $B = \\{3; 6\\}$ có 2 kết quả thuận lợi.", True, "Các mặt chia hết cho 3 là 3, 6."),
                    ("c", "Biến cố giao $A \\cap B = \\{6\\}$.", True, "Chỉ có mặt 6 vừa chia hết cho 2 vừa chia hết cho 3."),
                    ("d", "Hai biến cố $A$ và $B$ là hai biến cố xung khắc.", False, "Vì $A \\cap B = \\{6\\} \\ne \\emptyset$ nên $A$ và $B$ không xung khắc.")
                ]),
                make_tf(2, "Khái niệm biến cố độc lập trong đời sống. Hai bạn Nam và An tham gia một cuộc thi chạy 100m độc lập tại hai trường khác nhau.", [
                    ("a", "Biến cố \"Nam đạt huy chương\" và biến cố \"An đạt huy chương\" là hai biến cố độc lập.", True, "Hai người thi ở hai địa điểm khác nhau, không tác động đến thành tích của nhau."),
                    ("b", "Biến cố đối của \"Nam đạt huy chương\" là \"Nam không đạt huy chương\".", True, "Định nghĩa biến cố đối."),
                    ("c", "Biến cố \"Có ít nhất một bạn đạt huy chương\" là biến cố hợp của hai biến cố trên.", True, "Khái niệm biến cố hợp."),
                    ("d", "Biến cố \"Cả hai bạn đều đạt huy chương\" là biến cố hợp của hai biến cố trên.", False, "\"Cả hai cùng đạt\" là biến cố GIAO (tích), không phải biến cố hợp.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Gieo một đồng xu 2 lần. Số phần tử của không gian mẫu $\\Omega$ bằng bao nhiêu?",
                        "4", "$2 \\times 2 = 4$."),
                make_sa(2, "TH", "Gieo một con xúc xắc. Biến cố $A$: \"Số chấm là số nguyên tố\". Số kết quả thuận lợi của $A$ bằng bao nhiêu?",
                        "3", "Các số nguyên tố trên xúc xắc là $\\{2; 3; 5\\}$ (3 kết quả)."),
                make_sa(3, "VD", "Cho hai biến cố xung khắc $A$ và $B$. Biết $n(A) = 5, n(B) = 7$. Số kết quả thuận lợi của biến cố hợp $A \\cup B$ bằng bao nhiêu?",
                        "12", "Do xung khắc nên $n(A \\cup B) = n(A) + n(B) = 5 + 7 = 12$."),
                make_sa(4, "VD", "Một lớp có 40 học sinh, trong đó có 25 em thích bóng đá (biến cố $A$) và 20 em thích bóng rổ (biến cố $B$). Có 10 em thích cả hai môn. Số học sinh thích ít nhất một môn bóng đá hoặc bóng rổ bằng bao nhiêu?",
                        "35", "$n(A \\cup B) = 25 + 20 - 10 = 35$."),
                make_sa(5, "VDC", "Có 3 xạ thủ cùng bắn độc lập vào một mục tiêu, mỗi người bắn 1 viên. Kí hiệu $A_i$ là biến cố người thứ $i$ bắn trúng ($i = 1, 2, 3$). Biến cố \"Chỉ có đúng một người bắn trúng\" bao gồm bao nhiêu trường hợp kết hợp giao giữa các biến cố trúng và trượt?",
                        "3", "$A_1 \\overline{A_2} \\overline{A_3} + \\overline{A_1} A_2 \\overline{A_3} + \\overline{A_1} \\overline{A_2} A_3$ (3 trường hợp)."),
                make_sa(6, "VDC", "Một thiết bị có 2 linh kiện hoạt động độc lập. Xác suất linh kiện 1 hỏng là 0.1, linh kiện 2 hỏng là 0.2. Xác suất để cả 2 linh kiện đều không bị hỏng bằng bao nhiêu (viết dưới dạng số thập phân)?",
                        "0.72", "$(1 - 0.1)(1 - 0.2) = 0.9 \\times 0.8 = 0.72$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu định nghĩa biến cố hợp và giao",
                           "Nêu định nghĩa biến cố hợp và biến cố giao của hai biến cố $A$ và $B$. Cho ví dụ minh hoạ từ phép thử tung đồng xu.",
                           "1. Biến cố hợp: Cho hai biến cố $A$ và $B$. Biến cố \"$A$ hoặc $B$ xảy ra\" gọi là biến cố hợp của $A$ và $B$, kí hiệu $A \\cup B$. 2. Biến cố giao: Biến cố \"Cả $A$ và $B$ cùng xảy ra\" gọi là biến cố giao của $A$ và $B$, kí hiệu $A \\cap B$ hoặc $AB$. Ví dụ tung 2 đồng xu: $A$: \"Đồng 1 ngửa\", $B$: \"Đồng 2 ngửa\". Hợp $A \\cup B$ là \"Có ít nhất một đồng ngửa\", giao $A \\cap B$ là \"Cả 2 đồng cùng ngửa\"."),
                make_essay(2, "TH", 0.5, "Mô tả biến cố qua tập hợp",
                           "Gieo một con xúc xắc cân đối đồng chất hai lần liên tiếp. Gọi $A$ là biến cố: \"Tổng số chấm ở hai lần gieo bằng 7\"; $B$ là biến cố: \"Lần gieo thứ nhất xuất hiện mặt 3 chấm\". Liệt kê các kết quả thuận lợi cho các biến cố $A, B$ và biến cố giao $A \\cap B$.",
                           "Không gian mẫu gồm $6 \\times 6 = 36$ cặp $(x; y)$. - Biến cố $A = \\{(1; 6), (2; 5), (3; 4), (4; 3), (5; 2), (6; 1)\\}$ (gồm 6 kết quả). - Biến cố $B = \\{(3; 1), (3; 2), (3; 3), (3; 4), (3; 5), (3; 6)\\}$ (gồm 6 kết quả). - Biến cố giao $A \\cap B = \\{(3; 4)\\}$ (gồm đúng 1 kết quả thuận lợi)."),
                make_essay(3, "VD", 0.5, "Kiểm tra tính độc lập của hai biến cố",
                           "Thế nào là hai biến cố độc lập? Giải thích tại sao khi gieo liên tiếp hai con xúc xắc thì biến cố \"Con xúc xắc thứ nhất ra mặt 6\" và biến cố \"Con xúc xắc thứ hai ra mặt 6\" lại là hai biến cố độc lập.",
                           "Hai biến cố $A$ và $B$ được gọi là độc lập nếu sự xảy ra hay không xảy ra của biến cố này không ảnh hưởng tới xác suất xảy ra của biến cố kia. Khi gieo hai con xúc xắc, kết quả số chấm ở con xúc xắc thứ nhất hoàn toàn ngẫu nhiên và cơ học riêng biệt, không có bất kỳ lực vật lý hay mối liên hệ nào tác động đến kết quả của con xúc xắc thứ hai. Dù con xúc xắc thứ nhất ra mặt 6 hay mặt nào khác thì xác suất để con xúc xắc thứ hai ra mặt 6 vẫn luôn cố định bằng $\\frac{1}{6}$. Do đó hai biến cố này độc lập với nhau."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá hệ thống an ninh độc lập",
                           "Một kho hàng quý giá được bảo vệ bởi hai hệ thống chuông báo động điện tử độc lập $H_1$ và $H_2$. Khi có kẻ trộm đột nhập, hệ thống $H_1$ phát chuông cảnh báo với xác suất $0.92$, hệ thống $H_2$ phát chuông cảnh báo với xác suất $0.95$. a) Gọi $A_1$ là biến cố \"Hệ thống $H_1$ phát chuông\", $A_2$ là biến cố \"Hệ thống $H_2$ phát chuông\". Biểu diễn biến cố $B$: \"Có chuông cảnh báo vang lên khi có trộm đột nhập\" theo $A_1$ và $A_2$. b) Tính xác suất để vụ trộm bị phát hiện bởi ít nhất một trong hai hệ thống chuông báo động.",
                           "a) Biến cố \"Có chuông cảnh báo vang lên\" nghĩa là hệ thống 1 kêu hoặc hệ thống 2 kêu (hoặc cả hai cùng kêu). Biểu diễn theo biến cố hợp: $B = A_1 \\cup A_2$. Xét biến cố đối $\\overline{B}$: \"Cả hai hệ thống đều không phát chuông\": $\\overline{B} = \\overline{A_1} \\cap \\overline{A_2}$. b) Do hai hệ thống hoạt động độc lập nên $\\overline{A_1}$ và $\\overline{A_2}$ độc lập. Xác suất hệ thống 1 không kêu: $P(\\overline{A_1}) = 1 - 0.92 = 0.08$. Xác suất hệ thống 2 không kêu: $P(\\overline{A_2}) = 1 - 0.95 = 0.05$. Xác suất cả hai cùng tịt chuông: $P(\\overline{B}) = P(\\overline{A_1}) \\cdot P(\\overline{A_2}) = 0.08 \\times 0.05 = 0.004$. Vậy xác suất vụ trộm bị phát hiện (ít nhất một chuông kêu) là: $P(B) = 1 - P(\\overline{B}) = 1 - 0.004 = 0.996$ (đạt $99.6\\%$).")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho $A$ và $B$ là hai biến cố. Biến cố đối của $A \\cup B$ theo quy tắc De Morgan là",
                         "$\\overline{A} \\cap \\overline{B}$", "$\\overline{A} \\cup \\overline{B}$", "$A \\cap B$", "$\\overline{A \\cap B}$",
                         "A", "Công thức De Morgan: $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$."),
                make_mcq(2, "NB", "Biến cố đối của $A \\cap B$ là",
                         "$\\overline{A} \\cup \\overline{B}$", "$\\overline{A} \\cap \\overline{B}$", "$A \\cup B$", "$\\Omega$",
                         "A", "Công thức De Morgan: $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$."),
                make_mcq(3, "NB", "Nếu $A$ và $B$ là hai biến cố xung khắc thì",
                         "$P(A \\cap B) = 0$", "$P(A \\cap B) = 1$", "$P(A \\cup B) = 0$", "$P(A) = P(B)$",
                         "A", "Vì $A \\cap B = \\emptyset$ nên xác suất $P(A \\cap B) = 0$."),
                make_mcq(4, "NB", "Nếu $A$ và $B$ là hai biến cố độc lập thì khẳng định nào sau đây đúng?",
                         "$\\overline{A}$ và $B$ cũng độc lập",
                         "$A$ và $B$ xung khắc",
                         "$A \\cup B = \\Omega$",
                         "$P(A) + P(B) = 1$",
                         "A", "Tính chất SGK: Nếu $A$ và $B$ độc lập thì các cặp $(A, \\overline{B}), (\\overline{A}, B), (\\overline{A}, \\overline{B})$ cũng độc lập."),
                make_mcq(5, "TH", "Gieo đồng thời hai con xúc xắc. Gọi $A$: \"Tổng số chấm bằng 8\", $B$: \"Hai con xúc xắc cùng xuất hiện mặt lẻ\". Cặp kết quả nào sau đây thuộc $A \\cap B$?",
                         "$(3; 5)$", "$(2; 6)$", "$(4; 4)$", "$(1; 6)$",
                         "A", "Tổng bằng 8 và cả hai cùng lẻ chỉ có $(3; 5)$ và $(5; 3)$."),
                make_mcq(6, "TH", "Một người bắn 2 phát súng độc lập vào bia. Gọi $A_1$: \"Phát 1 trúng\", $A_2$: \"Phát 2 trúng\". Biến cố \"Cả hai phát đều trượt\" là",
                         "$\\overline{A_1} \\cap \\overline{A_2}$", "$A_1 \\cup A_2$", "$\\overline{A_1} \\cup \\overline{A_2}$", "$A_1 \\cap A_2$",
                         "A", "Cả hai đều trượt là phát 1 trượt VÀ phát 2 trượt: $\\overline{A_1} \\cap \\overline{A_2}$."),
                make_mcq(7, "TH", "Hai biến cố đối nhau $A$ và $\\overline{A}$ luôn thoả mãn",
                         "$A \\cap \\overline{A} = \\emptyset$ và $A \\cup \\overline{A} = \\Omega$",
                         "$A \\cap \\overline{A} = \\Omega$",
                         "$A = \\overline{A}$",
                         "$A \\cup \\overline{A} = \\emptyset$",
                         "A", "Theo định nghĩa biến cố đối."),
                make_mcq(8, "TH", "Một hộp đựng 5 quả cầu trắng và 5 quả cầu đen. Lấy ngẫu nhiên đồng thời 2 quả cầu. Biến cố đối của biến cố \"Lấy được 2 quả cầu cùng màu\" là",
                         "Lấy được 2 quả cầu khác màu",
                         "Lấy được 2 quả cầu màu trắng",
                         "Lấy được 2 quả cầu màu đen",
                         "Lấy được ít nhất 1 quả cầu đen",
                         "A", "Biến cố đối của \"cùng màu\" là \"khác màu\" (1 trắng và 1 đen)."),
                make_mcq(9, "VD", "Hai vận động viên thi đấu cờ vua độc lập. Biến cố nào sau đây là biến cố độc lập?",
                         "Vận động viên 1 thắng trận 1 và vận động viên 2 thắng ở một giải đấu khác",
                         "Vận động viên 1 thắng và vận động viên 1 thua trong cùng 1 ván cờ",
                         "Hai người cùng thắng trong 1 ván cờ đấu trực tiếp đối kháng",
                         "Vận động viên 1 đi trước và vận động viên 1 đi sau",
                         "A", "Hai trận đấu ở hai giải đấu hoàn toàn tách biệt là hai biến cố độc lập."),
                make_mcq(10, "VD", "Cho hai biến cố $A$ và $B$ độc lập có $P(A) = 0.4$ và $P(B) = 0.5$. Xác suất của biến cố giao $AB$ bằng",
                         "0.2", "0.9", "0.1", "0.8",
                         "A", "$P(AB) = P(A)P(B) = 0.4 \\times 0.5 = 0.2$."),
                make_mcq(11, "VDC", "Một mạch điện gồm 3 công tắc $K_1, K_2, K_3$ hoạt động độc lập mắc nối tiếp. Dòng điện chạy qua mạch khi và chỉ khi",
                         "Cả 3 công tắc cùng đóng",
                         "Ít nhất một công tắc đóng",
                         "Công tắc $K_1$ đóng",
                         "Đúng 2 công tắc đóng",
                         "A", "Mạch mắc nối tiếp yêu cầu tất cả các khóa trên đường truyền đều phải đóng."),
                make_mcq(12, "VDC", "Có 3 bài kiểm tra độc lập. Xác suất để một học sinh đạt điểm giỏi ở từng bài lần lượt là $0.8; 0.7; 0.9$. Xác suất để học sinh đó không đạt điểm giỏi ở bài nào bằng",
                         "0.006", "0.06", "0.504", "0.1",
                         "A", "$(1 - 0.8)(1 - 0.7)(1 - 0.9) = 0.2 \\times 0.3 \\times 0.1 = 0.006$.")
            ]
            tfs = [
                make_tf(1, "Tính chất biến cố đối và biến cố xung khắc. Cho không gian mẫu $\\Omega$ và hai biến cố $A, B$.", [
                    ("a", "Nếu $A$ và $B$ là hai biến cố đối nhau thì $A$ và $B$ xung khắc.", True, "Vì $A \\cap \\overline{A} = \\emptyset$ nên chúng xung khắc."),
                    ("b", "Nếu $A$ và $B$ xung khắc thì $A$ và $B$ bắt buộc phải là hai biến cố đối nhau.", False, "Ví dụ gieo xúc xắc: $A = \\{1\\}, B = \\{2\\}$ xung khắc nhưng hợp không bằng $\\Omega$ nên không đối."),
                    ("c", "Xác suất của biến cố đối thoả mãn $P(\\overline{A}) = 1 - P(A)$.", True, "Công thức chuẩn."),
                    ("d", "Nếu $A$ và $B$ xung khắc thì $P(A \\cup B) = P(A) + P(B)$.", True, "Quy tắc cộng xác suất cho biến cố xung khắc.")
                ]),
                make_tf(2, "Mô hình xác suất trong kiểm tra chất lượng sản phẩm. Một dây chuyền sản xuất đồ điện tử có hai công đoạn kiểm định $K_1$ và $K_2$ độc lập.", [
                    ("a", "Biến cố sản phẩm bị lỗi ở công đoạn $K_1$ và biến cố sản phẩm bị lỗi ở $K_2$ là hai biến cố độc lập.", True, "Do hai công đoạn kiểm định độc lập."),
                    ("b", "Biến cố \"Sản phẩm đạt chuẩn cả hai công đoạn\" là biến cố giao của hai biến cố đạt chuẩn.", True, "Cả hai cùng đạt chuẩn là biến cố giao."),
                    ("c", "Biến cố \"Sản phẩm bị loại bỏ do không đạt chuẩn ở ít nhất một công đoạn\" là biến cố hợp của hai biến cố bị lỗi.", True, "Định nghĩa biến cố hợp."),
                    ("d", "Nếu sản phẩm bị lỗi ở $K_1$ thì chắc chắn không bị lỗi ở $K_2$.", False, "Sản phẩm hoàn toàn có thể lỗi ở cả hai công đoạn vì hai biến cố độc lập, không xung khắc.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Gieo 3 đồng xu phân biệt. Số kết quả có thể xảy ra của phép thử bằng bao nhiêu?",
                        "8", "$2^3 = 8$."),
                make_sa(2, "TH", "Gieo một con xúc xắc. Gọi $A$ là biến cố \"Số chấm xuất hiện không vượt quá 2\". Số phần tử của biến cố đối $\\overline{A}$ bằng bao nhiêu?",
                        "4", "Các mặt $\\{3; 4; 5; 6\\}$ (4 phần tử)."),
                make_sa(3, "VD", "Cho hai biến cố $A$ và $B$ độc lập có $P(A) = 0.6, P(B) = 0.5$. Tính xác suất biến cố giao $AB$.",
                        "0.3", "$P(AB) = 0.6 \\times 0.5 = 0.3$."),
                make_sa(4, "VD", "Cho $P(A) = 0.7$. Tính xác suất của biến cố đối $\\overline{A}$.",
                        "0.3", "$1 - 0.7 = 0.3$."),
                make_sa(5, "VDC", "Hai xạ thủ bắn độc lập vào bia, xác suất trúng của xạ thủ 1 là 0.8, của xạ thủ 2 là 0.7. Tính xác suất để cả hai xạ thủ cùng bắn trúng bia.",
                        "0.56", "$0.8 \\times 0.7 = 0.56$."),
                make_sa(6, "VDC", "Một bóng đèn led có xác suất bị hỏng sau 1000 giờ thắp sáng là 0.05. Lắp 2 bóng đèn led độc lập thắp sáng cùng lúc. Tính xác suất để sau 1000 giờ cả hai bóng vẫn sáng bình thường.",
                        "0.9025", "$(1 - 0.05)^2 = 0.95^2 = 0.9025$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phân biệt biến cố xung khắc và biến cố độc lập",
                           "Phân biệt sự khác nhau cơ bản giữa khái niệm \"Hai biến cố xung khắc\" và \"Hai biến cố độc lập\".",
                           "1. Hai biến cố xung khắc: Là hai biến cố không thể cùng xảy ra trong cùng một phép thử ($A \\cap B = \\emptyset$). Khi $A$ xảy ra thì $B$ chắc chắn không xảy ra (ảnh hưởng tuyệt đối lẫn nhau). 2. Hai biến cố độc lập: Là hai biến cố mà việc xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia. Chúng hoàn toàn có thể cùng xảy ra ($A \\cap B \\ne \\emptyset$)."),
                make_essay(2, "TH", 0.5, "Biểu diễn biến cố bằng sơ đồ Ven",
                           "Một lớp học có 45 học sinh, trong đó có 28 bạn thích môn Toán (biến cố $A$), 20 bạn thích môn Văn (biến cố $B$), và có 8 bạn thích cả hai môn Toán và Văn. Hãy mô tả các biến cố $A \\cap B$ và $A \\cup B$, đồng thời tính số học sinh không thích môn nào trong hai môn này.",
                           "- Biến cố giao $A \\cap B$: \"Học sinh thích cả hai môn Toán và Văn\", số lượng là $n(A \\cap B) = 8$. - Biến cố hợp $A \\cup B$: \"Học sinh thích ít nhất một trong hai môn Toán hoặc Văn\". Số học sinh thích ít nhất một môn: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 28 + 20 - 8 = 40$ học sinh. - Số học sinh không thích môn nào trong hai môn là phần bù: $45 - 40 = 5$ học sinh."),
                make_essay(3, "VD", 0.5, "Bài toán thực tế kiểm định hạt giống độc lập",
                           "Gieo hai hạt giống của một loại ngô biến đổi gen một cách độc lập vào hai chậu đất khác nhau. Xác suất nảy mầm của mỗi hạt giống là $0.85$. Gọi $A$ là biến cố \"Hạt thứ nhất nảy mầm\", $B$ là biến cố \"Hạt thứ hai nảy mầm\". a) Giải thích vì sao $A$ và $B$ là hai biến cố độc lập. b) Viết biểu thức và tính xác suất để có ít nhất một hạt nảy mầm.",
                           "a) Hai hạt được gieo ở hai chậu đất riêng biệt, điều kiện sinh trưởng và sức nảy mầm của mỗi hạt hoàn toàn tự nhiên độc lập, không tác động qua lại lẫn nhau. Do đó $A$ và $B$ là hai biến cố độc lập. b) Biến cố \"Có ít nhất một hạt nảy mầm\" là $E = A \\cup B$. Biến cố đối $\\overline{E}$: \"Cả hai hạt đều không nảy mầm\": $\\overline{E} = \\overline{A} \\cap \\overline{B}$. Vì $A, B$ độc lập nên $\\overline{A}, \\overline{B}$ độc lập. Ta có $P(\\overline{A}) = 1 - 0.85 = 0.15$ và $P(\\overline{B}) = 1 - 0.85 = 0.15$. Xác suất cả hai hạt không nảy mầm: $P(\\overline{E}) = P(\\overline{A}) \\cdot P(\\overline{B}) = 0.15 \\times 0.15 = 0.0225$. Vậy xác suất có ít nhất một hạt nảy mầm là: $P(E) = 1 - P(\\overline{E}) = 1 - 0.0225 = 0.9775$ ($97.75\\%$)."),
                make_essay(4, "VDC", 0.5, "Mô hình độ tin cậy của động cơ máy bay",
                           "Một chiếc máy bay phản lực thương mại có hai động cơ độc lập ở hai cánh. Chuyến bay được duy trì an toàn nếu có ít nhất một động cơ hoạt động bình thường. Xác suất để một động cơ gặp sự cố trong một chuyến bay đường dài là $0.0001$. Giả sử sự cố của hai động cơ xảy ra hoàn toàn độc lập với nhau. a) Hãy tính xác suất chuyến bay gặp nguy hiểm (cả hai động cơ cùng gặp sự cố). b) Tính độ tin cậy an toàn của chuyến bay (xác suất chuyến bay hoàn thành an toàn).",
                           "a) Gọi $A_1$ là biến cố động cơ 1 gặp sự cố, $A_2$ là biến cố động cơ 2 gặp sự cố. Ta có $P(A_1) = P(A_2) = 0.0001 = 10^{-4}$. Chuyến bay gặp nguy hiểm khi cả hai động cơ cùng gặp sự cố, tức biến cố $C = A_1 \\cap A_2$. Vì hai động cơ hoạt động độc lập nên: $P(C) = P(A_1) \\cdot P(A_2) = 10^{-4} \\times 10^{-4} = 10^{-8} = 0.00000001$. b) Chuyến bay duy trì an toàn khi có ít nhất một động cơ hoạt động, tức biến cố đối $\\overline{C}$. Độ an toàn của chuyến bay là: $P(\\overline{C}) = 1 - P(C) = 1 - 10^{-8} = 0.99999999$ ($99.999999\\%$, mức độ an toàn gần như tuyệt đối).")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 29:
        # BÀI 29: CÔNG THỨC CỘNG XÁC SUẤT
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho hai biến cố xung khắc $A$ và $B$. Công thức cộng xác suất là",
                         "$P(A \\cup B) = P(A) + P(B)$",
                         "$P(A \\cup B) = P(A) \\cdot P(B)$",
                         "$P(A \\cup B) = P(A) + P(B) - P(AB)$",
                         "$P(A \\cup B) = P(A) - P(B)$",
                         "A", "Định lý: Nếu $A$ và $B$ xung khắc thì $P(A \\cup B) = P(A) + P(B)$."),
                make_mcq(2, "NB", "Với hai biến cố bất kì $A$ và $B$, công thức cộng xác suất tổng quát là",
                         "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$",
                         "$P(A \\cup B) = P(A) + P(B)$",
                         "$P(A \\cup B) = P(A) \\cdot P(B)$",
                         "$P(A \\cup B) = 1 - P(A)P(B)$",
                         "A", "Công thức cộng xác suất cho hai biến cố bất kì: $P(A \\cup B) = P(A) + P(B) - P(AB)$."),
                make_mcq(3, "NB", "Với mọi biến cố $A$, xác suất của biến cố đối $\\overline{A}$ thoả mãn",
                         "$P(\\overline{A}) = 1 - P(A)$",
                         "$P(\\overline{A}) = P(A)$",
                         "$P(\\overline{A}) = \\frac{1}{P(A)}$",
                         "$P(\\overline{A}) = 1 + P(A)$",
                         "A", "Công thức xác suất biến cố đối: $P(\\overline{A}) = 1 - P(A)$."),
                make_mcq(4, "NB", "Nếu $A$ và $B$ là hai biến cố xung khắc và $P(A) = 0.3, P(B) = 0.4$ thì $P(A \\cup B)$ bằng",
                         "0.7", "0.12", "0.1", "0.58",
                         "A", "Do xung khắc nên $P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$."),
                make_mcq(5, "TH", "Một hộp có 3 bi đỏ, 4 bi xanh và 5 bi vàng. Lấy ngẫu nhiên 1 viên bi. Xác suất để lấy được bi đỏ hoặc bi vàng bằng",
                         "$\\frac{2}{3}$", "$\\frac{1}{4}$", "$\\frac{5}{12}$", "$\\frac{1}{2}$",
                         "A", "Tổng có 12 bi. Bi đỏ và vàng có $3 + 5 = 8$ viên. Xác suất $= \\frac{8}{12} = \\frac{2}{3}$."),
                make_mcq(6, "TH", "Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.4$ và $P(AB) = 0.2$. Xác suất $P(A \\cup B)$ bằng",
                         "0.7", "0.9", "0.8", "0.2",
                         "A", "$P(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.7$."),
                make_mcq(7, "TH", "Một xạ thủ bắn vào bia với xác suất bắn trúng là 0.85. Xác suất để xạ thủ đó bắn trượt bằng",
                         "0.15", "0.85", "0.25", "0.05",
                         "A", "$P(\\overline{A}) = 1 - 0.85 = 0.15$."),
                make_mcq(8, "TH", "Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá. Xác suất rút được lá Át (A) hoặc lá K (King) bằng",
                         "$\\frac{2}{13}$", "$\\frac{1}{13}$", "$\\frac{4}{13}$", "$\\frac{1}{26}$",
                         "A", "Có 4 lá Át và 4 lá K (hai biến cố xung khắc). Xác suất $= \\frac{4 + 4}{52} = \\frac{8}{52} = \\frac{2}{13}$."),
                make_mcq(9, "VD", "Một lớp học có 40 học sinh, trong đó có 24 bạn thích bơi lội, 18 bạn thích bóng đá và 10 bạn thích cả hai môn. Chọn ngẫu nhiên một học sinh. Xác suất để học sinh đó thích ít nhất một môn bơi lội hoặc bóng đá bằng",
                         "0.8", "0.6", "0.75", "0.85",
                         "A", "$P(A \\cup B) = \\frac{24 + 18 - 10}{40} = \\frac{32}{40} = 0.8$."),
                make_mcq(10, "VD", "Cho $P(A) = 0.6, P(B) = 0.5$. Biết $A$ và $B$ độc lập. Xác suất $P(A \\cup B)$ bằng",
                         "0.8", "1.1", "0.3", "0.7",
                         "A", "Vì $A, B$ độc lập nên $P(AB) = 0.6 \\times 0.5 = 0.3$. $P(A \\cup B) = 0.6 + 0.5 - 0.3 = 0.8$."),
                make_mcq(11, "VDC", "Một đợt khám sức khoẻ cho thấy tỉ lệ người bị bệnh mắt là $15\\%$, bệnh huyết áp là $20\\%$, và có $5\\%$ số người mắc cả hai bệnh trên. Chọn ngẫu nhiên một người khám. Xác suất để người đó hoàn toàn không mắc bệnh nào trong hai bệnh trên bằng",
                         "$70\\%$", "$30\\%$", "$65\\%$", "$75\\%$",
                         "A", "Tỉ lệ mắc ít nhất 1 bệnh là $15\\% + 20\\% - 5\\% = 30\\%$. Tỉ lệ không mắc bệnh nào là $100\\% - 30\\% = 70\\%$."),
                make_mcq(12, "VDC", "Một công ty dự thầu hai dự án A và B độc lập. Xác suất trúng thầu dự án A là 0.7, trúng thầu dự án B là 0.6. Xác suất để công ty trúng thầu ít nhất một dự án bằng",
                         "0.88", "0.42", "0.9", "0.76",
                         "A", "$P = 1 - (1 - 0.7)(1 - 0.6) = 1 - 0.3 \\times 0.4 = 1 - 0.12 = 0.88$.")
            ]
            tfs = [
                make_tf(1, "Áp dụng công thức cộng xác suất trong rút thẻ. Một hộp có 20 chiếc thẻ cùng loại được đánh số từ 1 đến 20. Rút ngẫu nhiên một chiếc thẻ. Gọi $A$ là biến cố: \"Số trên thẻ chia hết cho 3\"; $B$ là biến cố: \"Số trên thẻ chia hết cho 5\".", [
                    ("a", "Biến cố $A$ có 6 kết quả thuận lợi, xác suất $P(A) = \\frac{3}{10}$.", True, "Các số chia hết cho 3 là $\\{3; 6; 9; 12; 15; 18\\}$ (6 số), $P(A) = 6/20 = 3/10$."),
                    ("b", "Biến cố $B$ có 4 kết quả thuận lợi, xác suất $P(B) = \\frac{1}{5}$.", True, "Các số chia hết cho 5 là $\\{5; 10; 15; 20\\}$ (4 số), $P(B) = 4/20 = 1/5$."),
                    ("c", "Biến cố giao $A \\cap B$ chỉ gồm 1 kết quả là số 15, xác suất $P(AB) = \\frac{1}{20}$.", True, "Số chia hết cho cả 3 và 5 từ 1 đến 20 chỉ có 15."),
                    ("d", "Xác suất để rút được thẻ chia hết cho 3 hoặc chia hết cho 5 bằng $\\frac{1}{2}$.", False, "$P(A \\cup B) = P(A) + P(B) - P(AB) = \\frac{6}{20} + \\frac{4}{20} - \\frac{1}{20} = \\frac{9}{20} = 0.45 \\ne 0.5$.")
                ]),
                make_tf(2, "Quy tắc xác suất biến cố đối. Trong một trận đấu bóng rổ, vận động viên ném phạt với xác suất thành công mỗi quả là 0.75.", [
                    ("a", "Xác suất ném phạt không thành công (trượt) là 0.25.", True, "$1 - 0.75 = 0.25$."),
                    ("b", "Tổng xác suất của biến cố ném trúng và ném trượt luôn bằng 1.", True, "$P(A) + P(\\overline{A}) = 1$."),
                    ("c", "Hai biến cố \"Ném trúng\" và \"Ném trượt\" là hai biến cố xung khắc.", True, "Không thể vừa trúng vừa trượt trong một lần ném."),
                    ("d", "Nếu ném 2 quả độc lập thì xác suất cả 2 quả cùng trúng là $0.75 + 0.75 = 1.5$.", False, "Xác suất phải dùng quy tắc nhân $0.75 \\times 0.75 = 0.5625$, xác suất không thể lớn hơn 1.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hai biến cố xung khắc $A$ và $B$ có $P(A) = 0.35$ và $P(B) = 0.45$. Tính $P(A \\cup B)$.",
                        "0.8", "$0.35 + 0.45 = 0.8$."),
                make_sa(2, "TH", "Biết $P(A) = 0.68$. Tính xác suất của biến cố đối $\\overline{A}$.",
                        "0.32", "$1 - 0.68 = 0.32$."),
                make_sa(3, "VD", "Cho $P(A) = 0.6, P(B) = 0.7, P(AB) = 0.4$. Tính giá trị của $P(A \\cup B)$.",
                        "0.9", "$0.6 + 0.7 - 0.4 = 0.9$."),
                make_sa(4, "VD", "Một lớp có 30 học sinh gồm 18 nam và 12 nữ. Chọn ngẫu nhiên một ban cán sự gồm 1 bạn. Xác suất để chọn được một bạn nam hoặc một bạn có tên vần T (biết có 4 bạn tên vần T gồm 2 nam và 2 nữ) bằng bao nhiêu?",
                        "0.67", "$n = 18 + 4 - 2 = 20$. $P = \\frac{20}{30} = \\frac{2}{3} \\approx 0.67$."),
                make_sa(5, "VDC", "Một trung tâm ngoại ngữ có $60\\%$ học viên học tiếng Anh, $40\\%$ học tiếng Trung, và $25\\%$ học cả hai thứ tiếng. Chọn ngẫu nhiên 1 học viên. Tính xác suất để học viên đó không học tiếng Anh cũng không học tiếng Trung.",
                        "0.25", "$P(A \\cup B) = 0.6 + 0.4 - 0.25 = 0.75$. Không học môn nào: $1 - 0.75 = 0.25$."),
                make_sa(6, "VDC", "Một cửa hàng điện máy bán máy lạnh có xác suất gặp lỗi mạch điện là $0.03$, lỗi rò ga là $0.02$, lỗi cả hai là $0.005$. Tính xác suất máy lạnh hoạt động bình thường không bị lỗi nào trong hai lỗi trên.",
                        "0.955", "$P(L) = 0.03 + 0.02 - 0.005 = 0.045$. Bình thường: $1 - 0.045 = 0.955$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu công thức cộng xác suất",
                           "Phát biểu công thức cộng xác suất cho hai biến cố xung khắc và công thức cộng xác suất cho hai biến cố bất kì.",
                           "1. Với hai biến cố xung khắc $A$ và $B$ ($A \\cap B = \\emptyset$): $P(A \\cup B) = P(A) + P(B)$. 2. Với hai biến cố bất kì $A$ và $B$: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."),
                make_essay(2, "TH", 0.5, "Tính xác suất chọn bi trong hộp",
                           "Một hộp đựng 8 viên bi màu đỏ, 7 viên bi màu xanh và 5 viên bi màu vàng. Lấy ngẫu nhiên ra 1 viên bi. Tính xác suất để: a) Lấy được viên bi màu đỏ hoặc màu vàng. b) Viên bi lấy ra không phải là màu xanh.",
                           "Tổng số bi trong hộp: $n(\\Omega) = 8 + 7 + 5 = 20$ viên. a) Biến cố $A$: \"Lấy được bi đỏ\", $P(A) = \\frac{8}{20}$. Biến cố $B$: \"Lấy được bi vàng\", $P(B) = \\frac{5}{20}$. Vì một viên bi không thể vừa đỏ vừa vàng nên $A$ và $B$ xung khắc. Xác suất lấy được bi đỏ hoặc vàng là: $P(A \\cup B) = P(A) + P(B) = \\frac{8}{20} + \\frac{5}{20} = \\frac{13}{20} = 0.65$. b) Biến cố $C$: \"Lấy được bi xanh\", $P(C) = \\frac{7}{20}$. Biến cố \"Không phải màu xanh\" chính là biến cố đối $\\overline{C}$. Ta có: $P(\\overline{C}) = 1 - P(C) = 1 - \\frac{7}{20} = \\frac{13}{20} = 0.65$."),
                make_essay(3, "VD", 0.5, "Khảo sát sở thích học sinh",
                           "Khảo sát một khối gồm 100 học sinh lớp 11 về việc tham gia câu lạc bộ, kết quả có 55 em tham gia CLB Thể thao (biến cố $A$), 45 em tham gia CLB Nghệ thuật (biến cố $B$), và có 25 em tham gia cả hai câu lạc bộ. Chọn ngẫu nhiên một học sinh. a) Tính xác suất để học sinh đó tham gia ít nhất một trong hai CLB. b) Tính xác suất để học sinh đó không tham gia bất kỳ câu lạc bộ nào.",
                           "Số học sinh là $n(\\Omega) = 100$. Xác suất từng biến cố: $P(A) = \\frac{55}{100} = 0.55$; $P(B) = \\frac{45}{100} = 0.45$; $P(A \\cap B) = \\frac{25}{100} = 0.25$. a) Xác suất học sinh tham gia ít nhất một trong hai CLB: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.55 + 0.45 - 0.25 = 0.75$. b) Biến cố học sinh không tham gia CLB nào là biến cố đối của $A \\cup B$: $P(\\overline{A \\cup B}) = 1 - P(A \\cup B) = 1 - 0.75 = 0.25$."),
                make_essay(4, "VDC", 0.5, "Bài toán kiểm soát chất lượng nông sản",
                           "Tại một nông trường xuất khẩu sầu riêng, một quả sầu riêng đủ tiêu chuẩn xuất khẩu nếu quả không bị sâu bệnh và đạt trọng lượng chuẩn trên $2.5\\text{ kg}$. Thống kê thực tế cho thấy: $12\\%$ số quả bị sâu bệnh (biến cố $A$), $15\\%$ số quả không đạt trọng lượng (biến cố $B$), và có $4\\%$ số quả vừa bị sâu bệnh vừa không đạt trọng lượng. a) Tính tỉ lệ phần trăm số quả sầu riêng bị loại (không đủ tiêu chuẩn xuất khẩu). b) Tính xác suất để một quả sầu riêng chọn ngẫu nhiên từ nông trường đạt chuẩn xuất khẩu.",
                           "a) Biến cố quả sầu riêng bị loại xảy ra khi quả bị sâu bệnh hoặc không đạt trọng lượng (hoặc cả hai), tức biến cố $E = A \\cup B$. Ta có: $P(A) = 0.12, P(B) = 0.15, P(A \\cap B) = 0.04$. Theo công thức cộng xác suất: $P(E) = P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.12 + 0.15 - 0.04 = 0.23 = 23\\%$. Vậy có $23\\%$ số quả sầu riêng bị loại. b) Quả sầu riêng đủ tiêu chuẩn xuất khẩu khi nó không bị loại, tức là biến cố đối $\\overline{E}$. Xác suất đạt chuẩn xuất khẩu là: $P(\\overline{E}) = 1 - P(E) = 1 - 0.23 = 0.77 = 77\\%$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho $A$ và $B$ là hai biến cố bất kì. Đẳng thức nào sau đây đúng?",
                         "$P(A \\cup B) = P(A) + P(B) - P(AB)$",
                         "$P(A \\cup B) = P(A) + P(B) + P(AB)$",
                         "$P(A \\cup B) = P(A) - P(B) + P(AB)$",
                         "$P(A \\cup B) = P(A)P(B)$",
                         "A", "Công thức cộng xác suất tổng quát."),
                make_mcq(2, "NB", "Khi hai biến cố $A$ và $B$ xung khắc thì $P(AB)$ bằng bao nhiêu?",
                         "0", "1", "0.5", "$P(A)P(B)$",
                         "A", "Hai biến cố xung khắc không thể cùng xảy ra nên $P(AB) = 0$."),
                make_mcq(3, "NB", "Nếu $P(A) = 0.4$ thì $P(\\overline{A})$ bằng",
                         "0.6", "0.4", "1.4", "-0.4",
                         "A", "$P(\\overline{A}) = 1 - 0.4 = 0.6$."),
                make_mcq(4, "NB", "Khẳng định nào sau đây là sai với mọi biến cố $A$?",
                         "$P(A) + P(\\overline{A}) = 0$",
                         "$P(A) + P(\\overline{A}) = 1$",
                         "$0 \\le P(A) \\le 1$",
                         "$P(\\Omega) = 1$",
                         "A", "Tổng xác suất của biến cố và biến cố đối luôn bằng 1, do đó bằng 0 là Sai."),
                make_mcq(5, "TH", "Gieo một con xúc xắc cân đối. Xác suất xuất hiện mặt có số chấm chia hết cho 2 hoặc chia hết cho 3 bằng",
                         "$\\frac{2}{3}$", "$\\frac{5}{6}$", "$\\frac{1}{2}$", "$\\frac{1}{3}$",
                         "A", "Các mặt thuận lợi là $\\{2; 3; 4; 6\\}$ (4 mặt). Xác suất $= \\frac{4}{6} = \\frac{2}{3}$."),
                make_mcq(6, "TH", "Cho hai biến cố xung khắc $A, B$ có $P(A) = \\frac{1}{4}, P(B) = \\frac{1}{3}$. Xác suất $P(A \\cup B)$ bằng",
                         "$\\frac{7}{12}$", "$\\frac{1}{12}$", "$\\frac{2}{7}$", "$\\frac{5}{12}$",
                         "A", "$P(A \\cup B) = \\frac{1}{4} + \\frac{1}{3} = \\frac{7}{12}$."),
                make_mcq(7, "TH", "Một hộp đựng 10 tấm thẻ từ 1 đến 10. Chọn ngẫu nhiên 1 thẻ. Xác suất để chọn được thẻ mang số nguyên tố hoặc số chia hết cho 4 bằng",
                         "0.6", "0.4", "0.5", "0.7",
                         "A", "Số nguyên tố: $\\{2; 3; 5; 7\\}$ (4 số). Chia hết cho 4: $\\{4; 8\\}$ (2 số). Hai tập này rời nhau nên có $4+2=6$ số. Xác suất $= 6/10 = 0.6$."),
                make_mcq(8, "TH", "Cho $P(A) = 0.45, P(B) = 0.35$ và $P(A \\cup B) = 0.65$. Xác suất $P(AB)$ bằng",
                         "0.15", "0.80", "0.20", "0.10",
                         "A", "$P(AB) = P(A) + P(B) - P(A \\cup B) = 0.45 + 0.35 - 0.65 = 0.15$."),
                make_mcq(9, "VD", "Một lớp học có 60% học sinh thích bóng chuyền, 50% thích cầu lông và 30% thích cả hai môn. Chọn ngẫu nhiên 1 bạn. Xác suất để bạn đó thích ít nhất một trong hai môn bằng",
                         "0.8", "0.7", "0.9", "0.85",
                         "A", "$P = 0.6 + 0.5 - 0.3 = 0.8$."),
                make_mcq(10, "VD", "Một máy bay ném bom một cây cầu. Xác suất để quả bom thứ nhất trúng cầu là 0.7, quả thứ hai là 0.8, cả hai cùng trúng là 0.56. Xác suất để cây cầu bị trúng ít nhất một quả bom bằng",
                         "0.94", "0.90", "0.85", "0.98",
                         "A", "$P = 0.7 + 0.8 - 0.56 = 0.94$."),
                make_mcq(11, "VDC", "Trong một cuộc thi tốt nghiệp, tỉ lệ học sinh trượt môn Toán là $8\\%$, trượt môn Văn là $6\\%$, và trượt cả hai môn là $3\\%$. Chọn ngẫu nhiên 1 thí sinh. Xác suất để thí sinh đó đỗ cả hai môn Toán và Văn bằng",
                         "$89\\%$", "$91\\%$", "$86\\%$", "$94\\%$",
                         "A", "Tỉ lệ trượt ít nhất 1 môn là $8\\% + 6\\% - 3\\% = 11\\%$. Tỉ lệ đỗ cả hai môn là $100\\% - 11\\% = 89\\%$."),
                make_mcq(12, "VDC", "Một nhà đầu tư dự định rót vốn vào cổ phiếu ngành Dược (xác suất sinh lời 0.6) và ngành Năng lượng (xác suất sinh lời 0.5). Hai ngành độc lập nhau. Xác suất để có ít nhất một ngành mang lại lợi nhuận cho nhà đầu tư bằng",
                         "0.80", "0.30", "0.90", "0.70",
                         "A", "$P = 1 - (1 - 0.6)(1 - 0.5) = 1 - 0.4 \\times 0.5 = 1 - 0.2 = 0.8$.")
            ]
            tfs = [
                make_tf(1, "Quy tắc cộng xác suất trong bài toán rút bi. Một hộp có 15 viên bi gồm 6 bi đỏ, 5 bi xanh và 4 bi trắng. Lấy ngẫu nhiên 1 viên bi.", [
                    ("a", "Xác suất lấy được bi đỏ là $\\frac{6}{15} = 0.4$.", True, "Đúng."),
                    ("b", "Xác suất lấy được bi xanh là $\\frac{5}{15} = \\frac{1}{3}$.", True, "Đúng."),
                    ("c", "Biến cố lấy được bi đỏ và biến cố lấy được bi xanh là hai biến cố xung khắc.", True, "Một viên bi không thể đồng thời vừa đỏ vừa xanh."),
                    ("d", "Xác suất lấy được bi đỏ hoặc bi xanh bằng $\\frac{6}{15} \\times \\frac{5}{15} = \\frac{2}{15}$.", False, "Xung khắc thì phải CỘNG xác suất: $\\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$, nhân là Sai.")
                ]),
                make_tf(2, "Xác suất điều kiện kinh doanh thực tế. Một cửa hàng hoa quả nhập cam và táo từ nông trại an toàn.", [
                    ("a", "Xác suất lô cam đạt chuẩn loại 1 là $0.85$, thì xác suất không đạt chuẩn loại 1 là $0.15$.", True, "$1 - 0.85 = 0.15$."),
                    ("b", "Biến cố \"Cam đạt loại 1\" và \"Cam không đạt loại 1\" là hai biến cố đối nhau.", True, "Định nghĩa."),
                    ("c", "Nếu xác suất táo đạt chuẩn loại 1 là $0.80$ và việc kiểm tra táo, cam là độc lập thì xác suất cả hai cùng đạt loại 1 là $0.85 + 0.80 = 1.65$.", False, "Biến cố độc lập phải tính tích: $0.85 \\times 0.80 = 0.68$, cộng là Sai."),
                    ("d", "Xác suất có ít nhất một loại quả đạt chuẩn loại 1 bằng $1 - (1 - 0.85)(1 - 0.80) = 0.97$.", True, "$1 - 0.15 \\times 0.20 = 1 - 0.03 = 0.97$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hai biến cố xung khắc $A, B$ có $P(A) = 0.25, P(B) = 0.55$. Tính $P(A \\cup B)$.",
                        "0.8", "$0.25 + 0.55 = 0.8$."),
                make_sa(2, "TH", "Một túi kẹo có xác suất lấy được kẹo dâu là 0.4, kẹo cam là 0.35. Xác suất lấy được kẹo dâu hoặc kẹo cam bằng bao nhiêu?",
                        "0.75", "$0.4 + 0.35 = 0.75$."),
                make_sa(3, "VD", "Cho $P(A) = 0.5, P(B) = 0.6, P(AB) = 0.3$. Tính $P(A \\cup B)$.",
                        "0.8", "$0.5 + 0.6 - 0.3 = 0.8$."),
                make_sa(4, "VD", "Biết $P(A \\cup B) = 0.85, P(A) = 0.6, P(B) = 0.5$. Tính xác suất của biến cố giao $AB$.",
                        "0.25", "$P(AB) = 0.6 + 0.5 - 0.85 = 0.25$."),
                make_sa(5, "VDC", "Một trường có 70% học sinh chơi thể thao, 50% chơi nhạc cụ, 30% chơi cả hai. Tính xác suất chọn ngẫu nhiên một bạn không chơi thể thao cũng không chơi nhạc cụ.",
                        "0.1", "$P(A \\cup B) = 0.7 + 0.5 - 0.3 = 0.9$. Xác suất không chơi gì: $1 - 0.9 = 0.1$."),
                make_sa(6, "VDC", "Một hệ thống phòng thủ bắn 2 phát tên lửa độc lập để đánh chặn mục tiêu, xác suất trúng của mỗi quả là 0.8. Tính xác suất để mục tiêu bị tiêu diệt (ít nhất một quả trúng).",
                        "0.96", "$1 - (1 - 0.8)^2 = 1 - 0.04 = 0.96$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc tính xác suất của biến cố đối",
                           "Nêu công thức tính xác suất của biến cố đối $\\overline{A}$ theo xác suất của biến cố $A$. Giải thích vì sao tổng của chúng luôn bằng 1.",
                           "Công thức: $P(\\overline{A}) = 1 - P(A)$. Giải thích: Biến cố $A$ và biến cố đối $\\overline{A}$ là hai biến cố xung khắc ($A \\cap \\overline{A} = \\emptyset$) và hợp của chúng chính là toàn bộ không gian mẫu ($A \\cup \\overline{A} = \\Omega$). Áp dụng công thức cộng xác suất cho hai biến cố xung khắc: $P(A \\cup \\overline{A}) = P(A) + P(\\overline{A})$. Mặt khác $P(\\Omega) = 1$. Do đó $P(A) + P(\\overline{A}) = 1 \\Rightarrow P(\\overline{A}) = 1 - P(A)$."),
                make_essay(2, "TH", 0.5, "Tính xác suất chọn quả cầu khác màu",
                           "Trong một bình thuỷ tinh có 10 quả bóng bàn màu trắng, 8 quả màu cam và 6 quả màu xanh cùng kích thước. Lấy ngẫu nhiên ra 1 quả. Tính xác suất để quả lấy ra: a) Có màu trắng hoặc màu xanh. b) Không phải màu cam.",
                           "Tổng số quả bóng bàn trong bình: $n(\\Omega) = 10 + 8 + 6 = 24$ quả. a) Gọi $A$: \"Lấy được bóng trắng\", $P(A) = \\frac{10}{24}$. Gọi $B$: \"Lấy được bóng xanh\", $P(B) = \\frac{6}{24}$. Do bóng không thể vừa trắng vừa xanh nên $A$ và $B$ xung khắc. Xác suất lấy được bóng trắng hoặc xanh là: $P(A \\cup B) = P(A) + P(B) = \\frac{10}{24} + \\frac{6}{24} = \\frac{16}{24} = \\frac{2}{3} \\approx 0.67$. b) Biến cố \"Quả lấy ra không phải màu cam\" chính là biến cố lấy được bóng trắng hoặc bóng xanh đã tính ở câu a, hoặc là biến cố đối của biến cố \"Lấy được bóng cam\" ($P(C) = \\frac{8}{24} = \\frac{1}{3}$). Ta có: $P(\\overline{C}) = 1 - P(C) = 1 - \\frac{1}{3} = \\frac{2}{3}$."),
                make_essay(3, "VD", 0.5, "Bài toán hai sự kiện không xung khắc",
                           "Một lớp có 45 học sinh. Trong đợt thi học kỳ, có 30 học sinh đạt điểm giỏi môn Toán, 25 học sinh đạt điểm giỏi môn Hoá, và có 15 học sinh đạt điểm giỏi cả hai môn Toán và Hoá. Chọn ngẫu nhiên một học sinh trong lớp. a) Tính xác suất để học sinh đó đạt điểm giỏi ít nhất một môn Toán hoặc Hoá. b) Tính xác suất để học sinh đó không đạt điểm giỏi môn nào trong hai môn trên.",
                           "Tổng số học sinh là $n(\\Omega) = 45$. Gọi $A$: \"Học sinh giỏi Toán\", $B$: \"Học sinh giỏi Hoá\". Ta có: $P(A) = \\frac{30}{45} = \\frac{2}{3}$; $P(B) = \\frac{25}{45} = \\frac{5}{9}$; $P(AB) = \\frac{15}{45} = \\frac{1}{3}$. a) Xác suất học sinh đạt điểm giỏi ít nhất một môn là: $P(A \\cup B) = P(A) + P(B) - P(AB) = \\frac{30}{45} + \\frac{25}{45} - \\frac{15}{45} = \\frac{40}{45} = \\frac{8}{9} \\approx 0.89$. b) Biến cố không giỏi môn nào là biến cố đối $\\overline{A \\cup B}$. Xác suất là: $P(\\overline{A \\cup B}) = 1 - P(A \\cup B) = 1 - \\frac{8}{9} = \\frac{1}{9} \\approx 0.11$."),
                make_essay(4, "VDC", 0.5, "Đánh giá xác suất rủi ro trong giao dịch ngân hàng",
                           "Một ngân hàng thương mại nhận thấy trong các giao dịch chuyển tiền trực tuyến: tỉ lệ giao dịch bị lỗi đường truyền mạng là $1.2\\%$ (biến cố $A$), tỉ lệ bị lỗi xác thực người dùng (OTP/sinh trắc học) là $0.8\\%$ (biến cố $B$), và tỉ lệ giao dịch gặp đồng thời cả hai lỗi trên là $0.1\\%$. a) Tính tỉ lệ giao dịch chuyển tiền trực tuyến gặp trục trặc (bị lỗi ít nhất một trong hai nguyên nhân trên). b) Mỗi ngày ngân hàng xử lý trung bình $500\\,000$ lượt giao dịch trực tuyến. Ước tính có bao nhiêu giao dịch diễn ra hoàn toàn suôn sẻ, không gặp bất kỳ lỗi nào trong hai lỗi trên?",
                           "a) Biến cố giao dịch gặp trục trặc là $E = A \\cup B$. Ta có $P(A) = 0.012, P(B) = 0.008, P(A \\cap B) = 0.001$. Áp dụng công thức cộng xác suất: $P(E) = P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.012 + 0.008 - 0.001 = 0.019 = 1.9\\%$. b) Xác suất một giao dịch diễn ra hoàn toàn suôn sẻ (không lỗi nào) là: $P(\\overline{E}) = 1 - P(E) = 1 - 0.019 = 0.981 = 98.1\\%$. Với $500\\,000$ giao dịch mỗi ngày, số giao dịch ước tính diễn ra hoàn toàn suôn sẻ là: $N = 500\\,000 \\times 0.981 = 490\\,500$ giao dịch.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 30:
        # BÀI 30: CÔNG THỨC NHÂN XÁC SUẤT CHO HAI BIẾN CỐ ĐỘC LẬP
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Nếu $A$ và $B$ là hai biến cố độc lập thì công thức nhân xác suất là",
                         "$P(AB) = P(A) \\cdot P(B)$",
                         "$P(AB) = P(A) + P(B)$",
                         "$P(AB) = P(A) + P(B) - P(A \\cup B)$",
                         "$P(AB) = \\frac{P(A)}{P(B)}$",
                         "A", "Định lý: Nếu $A$ và $B$ độc lập thì $P(AB) = P(A) \\cdot P(B)$."),
                make_mcq(2, "NB", "Cho hai biến cố $A$ và $B$ độc lập có $P(A) = 0.5$ và $P(B) = 0.4$. Giá trị của $P(AB)$ bằng",
                         "0.20", "0.90", "0.10", "0.70",
                         "A", "$P(AB) = 0.5 \\times 0.4 = 0.20$."),
                make_mcq(3, "NB", "Nếu $A, B$ là hai biến cố độc lập thì cặp biến cố nào sau đây cũng độc lập?",
                         "$\\overline{A}$ và $\\overline{B}$", "$A$ và $A$", "$B$ và $B$", "$A$ và $A \\cup B$",
                         "A", "Tính chất: Nếu $A, B$ độc lập thì $\\overline{A}$ và $\\overline{B}$ cũng độc lập."),
                make_mcq(4, "NB", "Gieo đồng thời hai đồng xu cân đối. Xác suất để cả hai đồng xu cùng xuất hiện mặt ngửa bằng",
                         "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{1}{8}$",
                         "A", "$P = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$."),
                make_mcq(5, "TH", "Gieo đồng thời hai con xúc xắc cân đối. Xác suất để cả hai con xúc xắc cùng xuất hiện mặt 6 chấm bằng",
                         "$\\frac{1}{36}$", "$\\frac{1}{6}$", "$\\frac{1}{12}$", "$\\frac{1}{18}$",
                         "A", "$P = \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36}$."),
                make_mcq(6, "TH", "Hai xạ thủ bắn độc lập vào bia. Xác suất bắn trúng của xạ thủ 1 là 0.8, xạ thủ 2 là 0.7. Xác suất để cả hai xạ thủ cùng bắn trúng bằng",
                         "0.56", "1.50", "0.26", "0.94",
                         "A", "$P = 0.8 \\times 0.7 = 0.56$."),
                make_mcq(7, "TH", "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.3, P(B) = 0.6$. Xác suất để $A$ xảy ra nhưng $B$ không xảy ra ($P(A\\overline{B})$) bằng",
                         "0.12", "0.18", "0.42", "0.28",
                         "A", "$P(A\\overline{B}) = P(A)P(\\overline{B}) = 0.3 \\times (1 - 0.6) = 0.3 \\times 0.4 = 0.12$."),
                make_mcq(8, "TH", "Hai bạn An và Bình độc lập tham gia thi lấy chứng chỉ ngoại ngữ. Xác suất đỗ của An là 0.9, của Bình là 0.8. Xác suất để cả hai bạn đều trượt bằng",
                         "0.02", "0.72", "0.18", "0.08",
                         "A", "$P = (1 - 0.9)(1 - 0.8) = 0.1 \\times 0.2 = 0.02$."),
                make_mcq(9, "VD", "Hai xạ thủ bắn độc lập vào bia, xác suất trúng bia của xạ thủ 1 là 0.8, của xạ thủ 2 là 0.7. Xác suất để có đúng một xạ thủ bắn trúng bằng",
                         "0.38", "0.56", "0.44", "0.26",
                         "A", "$P = 0.8 \\times 0.3 + 0.2 \\times 0.7 = 0.24 + 0.14 = 0.38$."),
                make_mcq(10, "VD", "Một bài trắc nghiệm có 5 câu hỏi độc lập, mỗi câu có 4 phương án trả lời và chỉ có 1 phương án đúng. Một học sinh chọn ngẫu nhiên cả 5 câu. Xác suất để học sinh đó trả lời đúng cả 5 câu bằng",
                         "$\\frac{1}{1024}$", "$\\frac{5}{1024}$", "$\\frac{1}{625}$", "$\\frac{1}{20}$",
                         "A", "$P = \\left(\\frac{1}{4}\\right)^5 = \\frac{1}{1024}$."),
                make_mcq(11, "VDC", "Một hệ thống phòng không có 3 khẩu pháo bắn độc lập vào một máy bay xâm nhập. Xác suất bắn trúng của các khẩu pháo lần lượt là $0.6; 0.7; 0.8$. Xác suất để máy bay bị bắn trúng (có ít nhất một khẩu bắn trúng) bằng",
                         "0.976", "0.336", "0.024", "0.850",
                         "A", "$P = 1 - (1 - 0.6)(1 - 0.7)(1 - 0.8) = 1 - 0.4 \\times 0.3 \\times 0.2 = 1 - 0.024 = 0.976$."),
                make_mcq(12, "VDC", "Một hệ thống cấp nước gồm hai trạm bơm $B_1$ và $B_2$ hoạt động độc lập song song. Xác suất trạm $B_1$ gặp sự cố trong ngày là $0.05$, trạm $B_2$ là $0.04$. Thành phố chỉ mất nước nếu cả hai trạm cùng gặp sự cố. Xác suất thành phố được cấp nước liên tục trong ngày bằng",
                         "0.998", "0.002", "0.910", "0.950",
                         "A", "$P = 1 - 0.05 \\times 0.04 = 1 - 0.002 = 0.998$.")
            ]
            tfs = [
                make_tf(1, "Quy tắc nhân xác suất cho hai biến cố độc lập. Hai học sinh Nam và Lan độc lập giải một bài toán hóc búa. Xác suất Nam giải được là $0.8$, xác suất Lan giải được là $0.7$.", [
                    ("a", "Xác suất để cả hai bạn cùng giải được bài toán là $0.56$.", True, "$0.8 \\times 0.7 = 0.56$."),
                    ("b", "Xác suất để cả hai bạn đều không giải được là $0.06$.", True, "$(1 - 0.8) \\times (1 - 0.7) = 0.2 \\times 0.3 = 0.06$."),
                    ("c", "Xác suất để có ít nhất một bạn giải được bài toán là $0.94$.", True, "$1 - 0.06 = 0.94$."),
                    ("d", "Xác suất để chỉ có đúng một bạn giải được bài toán là $0.50$.", False, "$0.8 \\times 0.3 + 0.2 \\times 0.7 = 0.24 + 0.14 = 0.38 \\ne 0.50$.")
                ]),
                make_tf(2, "Độc lập của dãy phép thử Bernoulli. Tung một đồng xu cân đối đồng chất 3 lần liên tiếp.", [
                    ("a", "Kết quả của 3 lần tung là các biến cố độc lập với nhau.", True, "Các lần tung độc lập."),
                    ("b", "Xác suất cả 3 lần đều xuất hiện mặt sấp là $\\frac{1}{8}$.", True, "$(1/2)^3 = 1/8$."),
                    ("c", "Xác suất có ít nhất một lần xuất hiện mặt ngửa là $\\frac{7}{8}$.", True, "$1 - 1/8 = 7/8$."),
                    ("d", "Xác suất lần thứ nhất ngửa, lần thứ hai sấp, lần thứ ba ngửa là $\\frac{3}{8}$.", False, "Xác suất một kết quả cụ thể (N-S-N) là $(1/2) \\times (1/2) \\times (1/2) = \\frac{1}{8} \\ne \\frac{3}{8}$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho $A, B$ là hai biến cố độc lập có $P(A) = 0.4$ và $P(B) = 0.6$. Tính $P(AB)$.",
                        "0.24", "$0.4 \\times 0.6 = 0.24$."),
                make_sa(2, "TH", "Gieo 2 con xúc xắc. Xác suất để cả 2 con cùng ra mặt 1 chấm bằng bao nhiêu (viết dưới dạng phân số tối giản a/b)?",
                        "1/36", "$(1/6)^2 = 1/36$."),
                make_sa(3, "VD", "Hai cầu thủ sút phạt đền độc lập, xác suất thành công của mỗi người là 0.8. Tính xác suất để cả hai đều sút thành công.",
                        "0.64", "$0.8 \\times 0.8 = 0.64$."),
                make_sa(4, "VD", "Một bài thi trắc nghiệm gồm 4 câu hỏi độc lập, mỗi câu có 2 đáp án Đúng/Sai. Một học sinh đoán mò ngẫu nhiên. Tính xác suất để học sinh đó trả lời đúng cả 4 câu (dưới dạng phân số).",
                        "1/16", "$(1/2)^4 = 1/16$."),
                make_sa(5, "VDC", "Hai xạ thủ bắn độc lập, xác suất bắn trúng lần lượt là 0.9 và 0.8. Tính xác suất để chỉ có đúng một xạ thủ bắn trúng mục tiêu.",
                        "0.26", "$0.9 \\times 0.2 + 0.1 \\times 0.8 = 0.18 + 0.08 = 0.26$."),
                make_sa(6, "VDC", "Có 3 công tắc độc lập mắc nối tiếp trong một mạch điện, xác suất mỗi công tắc đóng thông mạch là 0.9. Tính xác suất để toàn mạch có dòng điện chạy qua.",
                        "0.729", "$0.9^3 = 0.729$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phát biểu công thức nhân xác suất",
                           "Nêu định lý công thức nhân xác suất cho hai biến cố độc lập và mở rộng cho ba biến cố độc lập.",
                           "1. Cho hai biến cố độc lập $A$ và $B$. Khi đó: $P(AB) = P(A) \\cdot P(B)$. 2. Mở rộng cho ba biến cố độc lập $A, B, C$: $P(ABC) = P(A) \\cdot P(B) \\cdot P(C)$."),
                make_essay(2, "TH", 0.5, "Tính xác suất bắn bia độc lập",
                           "Hai xạ thủ độc lập cùng bắn vào bia, mỗi người bắn 1 phát. Xác suất bắn trúng của xạ thủ thứ nhất là $0.7$, của xạ thủ thứ hai là $0.8$. Tính xác suất để: a) Cả hai xạ thủ cùng bắn trúng. b) Cả hai xạ thủ cùng bắn trượt.",
                           "Gọi $A$ là biến cố xạ thủ 1 bắn trúng, $P(A) = 0.7$. Gọi $B$ là biến cố xạ thủ 2 bắn trúng, $P(B) = 0.8$. Do hai xạ thủ bắn độc lập nên: a) Xác suất cả hai cùng bắn trúng: $P(AB) = P(A) \\cdot P(B) = 0.7 \\times 0.8 = 0.56$. b) Biến cố cả hai cùng trượt là $\\overline{A} \\cap \\overline{B}$. Ta có $P(\\overline{A}) = 1 - 0.7 = 0.3$, $P(\\overline{B}) = 1 - 0.8 = 0.2$. Vì $\\overline{A}$ và $\\overline{B}$ độc lập nên: $P(\\overline{A} \\cap \\overline{B}) = P(\\overline{A}) \\cdot P(\\overline{B}) = 0.3 \\times 0.2 = 0.06$."),
                make_essay(3, "VD", 0.5, "Tính xác suất có ít nhất một sự kiện thành công",
                           "Một bác sĩ kê đơn thuốc cho một bệnh nhân gồm hai loại thuốc kháng sinh độc lập $T_1$ và $T_2$ để điều trị vi khuẩn. Xác suất loại thuốc $T_1$ tiêu diệt hoàn toàn vi khuẩn là $0.85$, của loại thuốc $T_2$ là $0.90$. Bệnh nhân khỏi bệnh nếu có ít nhất một loại thuốc tiêu diệt được vi khuẩn. a) Tính xác suất để cả hai loại thuốc đều thất bại. b) Tính xác suất để bệnh nhân được chữa khỏi bệnh.",
                           "Gọi $A_1$ là biến cố thuốc $T_1$ thành công, $P(A_1) = 0.85$. Gọi $A_2$ là biến cố thuốc $T_2$ thành công, $P(A_2) = 0.90$. Vì hai thuốc hoạt động theo cơ chế độc lập: a) Xác suất thuốc $T_1$ thất bại: $P(\\overline{A_1}) = 1 - 0.85 = 0.15$. Xác suất thuốc $T_2$ thất bại: $P(\\overline{A_2}) = 1 - 0.90 = 0.10$. Xác suất cả hai thuốc cùng thất bại: $P(\\overline{A_1} \\cap \\overline{A_2}) = 0.15 \\times 0.10 = 0.015$ ($1.5\\%$). b) Bệnh nhân khỏi bệnh khi có ít nhất một thuốc thành công. Xác suất khỏi bệnh là: $P = 1 - 0.015 = 0.985$ ($98.5\\%$)."),
                make_essay(4, "VDC", 0.5, "Độ an toàn của hệ thống truyền động tàu vũ trụ",
                           "Một hệ thống tách tầng tên lửa vũ trụ được kích hoạt bởi 4 ngòi nổ điện tử độc lập. Để tách tầng thành công, chỉ cần có ít nhất một ngòi nổ phát hỏa. Xác suất kích nổ thành công của mỗi ngòi nổ đơn lẻ là $0.98$. a) Tính xác suất hệ thống tách tầng bị thất bại hoàn toàn. b) Tính độ an toàn tách tầng thành công của tên lửa vũ trụ. c) Để xác suất tách tầng an toàn đạt trên $99.999\\%$, cần bố trí tối thiểu bao nhiêu ngòi nổ độc lập?",
                           "a) Gọi $A_i$ là biến cố ngòi nổ thứ $i$ thành công ($i = 1, 2, 3, 4$), $P(A_i) = 0.98$. Xác suất ngòi nổ thứ $i$ bị xịt: $P(\\overline{A_i}) = 1 - 0.98 = 0.02$. Hệ thống thất bại hoàn toàn khi cả 4 ngòi cùng xịt: $P_{that\\_bai} = (0.02)^4 = 1.6 \\times 10^{-7} = 0.00000016$. b) Độ an toàn tách tầng thành công: $P_{thanh\\_cong} = 1 - 1.6 \\times 10^{-7} = 0.99999984$ ($99.999984\\%$). c) Giả sử dùng $n$ ngòi nổ. Xác suất thành công là $1 - (0.02)^n$. Ta cần: $1 - (0.02)^n > 0.99999 \\Leftrightarrow (0.02)^n < 0.00001 = 10^{-5} \\Leftrightarrow n \\ln(0.02) < \\ln(10^{-5}) \\Leftrightarrow n > \\frac{\\ln(10^{-5})}{\\ln(0.02)} = \\frac{-11.513}{-3.912} \\approx 2.94$. Vì $n$ nguyên dương nên tối thiểu cần $n = 3$ ngòi nổ.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho hai biến cố $A$ và $B$. Công thức $P(AB) = P(A) \\cdot P(B)$ xảy ra khi và chỉ khi",
                         "$A$ và $B$ là hai biến cố độc lập",
                         "$A$ và $B$ là hai biến cố xung khắc",
                         "$A$ và $B$ là hai biến cố đối nhau",
                         "$A$ và $B$ cùng xảy ra",
                         "A", "Định nghĩa và điều kiện hai biến cố độc lập."),
                make_mcq(2, "NB", "Nếu $P(A) = 0.2, P(B) = 0.3$ và $A, B$ độc lập thì $P(AB)$ bằng",
                         "0.06", "0.50", "0.10", "0.60",
                         "A", "$P(AB) = 0.2 \\times 0.3 = 0.06$."),
                make_mcq(3, "NB", "Gieo đồng thời một con xúc xắc và một đồng xu. Xác suất để xúc xắc ra mặt 6 và đồng xu ra mặt ngửa bằng",
                         "$\\frac{1}{12}$", "$\\frac{1}{6}$", "$\\frac{1}{2}$", "$\\frac{1}{8}$",
                         "A", "$P = \\frac{1}{6} \\times \\frac{1}{2} = \\frac{1}{12}$."),
                make_mcq(4, "NB", "Nếu $P(A) = 0.8$ và $P(B) = 0.5$ với $A, B$ độc lập thì xác suất $P(\\overline{A}B)$ bằng",
                         "0.1", "0.4", "0.3", "0.2",
                         "A", "$P(\\overline{A}B) = (1 - 0.8) \\times 0.5 = 0.2 \\times 0.5 = 0.1$."),
                make_mcq(5, "TH", "Hai người cùng độc lập câu cá ở một hồ. Xác suất người thứ nhất câu được cá là 0.6, người thứ hai là 0.5. Xác suất để cả hai người cùng câu được cá bằng",
                         "0.3", "1.1", "0.1", "0.55",
                         "A", "$0.6 \\times 0.5 = 0.3$."),
                make_mcq(6, "TH", "Một người thi bằng lái xe máy gồm 2 phần độc lập: lý thuyết và thực hành. Xác suất đỗ lý thuyết là 0.9, đỗ thực hành là 0.8. Xác suất để người đó thi đậu cả 2 phần (được cấp bằng) bằng",
                         "0.72", "0.85", "0.98", "0.17",
                         "A", "$0.9 \\times 0.8 = 0.72$."),
                make_mcq(7, "TH", "Gieo một đồng xu cân đối 4 lần liên tiếp. Xác suất để cả 4 lần đều ngửa bằng",
                         "$\\frac{1}{16}$", "$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{32}$",
                         "A", "$(1/2)^4 = 1/16$."),
                make_mcq(8, "TH", "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.7, P(B) = 0.6$. Xác suất để có ít nhất một biến cố không xảy ra bằng",
                         "0.58", "0.42", "0.88", "0.12",
                         "A", "$P(AB) = 0.7 \\times 0.6 = 0.42$. Ít nhất một biến cố không xảy ra là biến cố đối: $1 - 0.42 = 0.58$."),
                make_mcq(9, "VD", "Hai xạ thủ bắn độc lập vào bia. Xác suất bắn trúng lần lượt là 0.7 và 0.6. Xác suất để mục tiêu bị trúng đạn (có ít nhất một người bắn trúng) bằng",
                         "0.88", "0.42", "0.12", "0.76",
                         "A", "$P = 1 - (1 - 0.7)(1 - 0.6) = 1 - 0.3 \\times 0.4 = 1 - 0.12 = 0.88$."),
                make_mcq(10, "VD", "Một bài thi gồm 3 câu hỏi Đúng/Sai độc lập. Thí sinh chọn ngẫu nhiên các câu trả lời. Xác suất để thí sinh trả lời đúng ít nhất 1 câu bằng",
                         "$\\frac{7}{8}$", "$\\frac{1}{8}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$",
                         "A", "$1 - (1/2)^3 = 1 - 1/8 = 7/8$."),
                make_mcq(11, "VDC", "Có 3 trạm khí tượng thuỷ văn độc lập cùng dự báo bão. Xác suất dự báo chính xác của từng trạm lần lượt là $0.8; 0.85; 0.9$. Xác suất để cả 3 trạm cùng đưa ra dự báo chính xác bằng",
                         "0.612", "0.850", "0.003", "0.997",
                         "A", "$0.8 \\times 0.85 \\times 0.9 = 0.612$."),
                make_mcq(12, "VDC", "Một mạch điện có 2 linh kiện $L_1, L_2$ mắc song song độc lập. Xác suất linh kiện $L_1$ hỏng là 0.05, $L_2$ hỏng là 0.06. Mạch chỉ mất điện khi cả hai cùng hỏng. Xác suất mạch hoạt động thông suốt bằng",
                         "0.997", "0.003", "0.890", "0.940",
                         "A", "$1 - 0.05 \\times 0.06 = 1 - 0.003 = 0.997$.")
            ]
            tfs = [
                make_tf(1, "Công thức nhân xác suất trong bài toán bắn súng. Hai cung thủ độc lập cùng bắn vào tâm bia. Xác suất bắn trúng hồng tâm của cung thủ 1 là 0.6, của cung thủ 2 là 0.8.", [
                    ("a", "Xác suất cả hai cung thủ cùng bắn trúng hồng tâm là $0.48$.", True, "$0.6 \\times 0.8 = 0.48$."),
                    ("b", "Xác suất cả hai cung thủ cùng bắn trượt hồng tâm là $0.08$.", True, "$(1 - 0.6) \\times (1 - 0.8) = 0.4 \\times 0.2 = 0.08$."),
                    ("c", "Xác suất có đúng một cung thủ bắn trúng hồng tâm là $0.44$.", True, "$0.6 \\times 0.2 + 0.4 \\times 0.8 = 0.12 + 0.32 = 0.44$."),
                    ("d", "Xác suất có ít nhất một cung thủ bắn trúng hồng tâm là $0.90$.", False, "$1 - 0.08 = 0.92 \\ne 0.90$.")
                ]),
                make_tf(2, "Xác suất kiểm tra an toàn hệ thống phanh xe. Xe ô tô hiện đại trang bị hai hệ thống phanh độc lập: phanh cơ khí và phanh điện tử ABS.", [
                    ("a", "Xác suất phanh cơ khí gặp sự cố là $0.01$, phanh điện tử gặp sự cố là $0.02$. Xác suất cả hai phanh cùng gặp sự cố là $0.0002$.", True, "$0.01 \\times 0.02 = 0.0002$."),
                    ("b", "Xe chỉ mất phanh khi cả hai hệ thống phanh cùng gặp sự cố đồng thời.", True, "Do hai hệ thống hỗ trợ dự phòng lẫn nhau."),
                    ("c", "Xác suất hệ thống phanh của xe hoạt động an toàn là $0.9998$.", True, "$1 - 0.0002 = 0.9998$."),
                    ("d", "Nếu bỏ phanh điện tử ABS thì độ an toàn của xe không thay đổi.", False, "Nếu chỉ có 1 phanh thì xác suất rủi ro là $0.01$, lớn hơn gấp 50 lần so với $0.0002$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.5, P(B) = 0.7$. Tính $P(AB)$.",
                        "0.35", "$0.5 \\times 0.7 = 0.35$."),
                make_sa(2, "TH", "Gieo đồng thời 2 con xúc xắc. Xác suất để cả 2 con cùng ra mặt chẵn bằng bao nhiêu?",
                        "0.25", "$(1/2)^2 = 0.25$."),
                make_sa(3, "VD", "Hai xạ thủ bắn độc lập, xác suất trúng bia lần lượt là 0.8 và 0.9. Tính xác suất để cả hai cùng bắn trúng.",
                        "0.72", "$0.8 \\times 0.9 = 0.72$."),
                make_sa(4, "VD", "Một học sinh thi trắc nghiệm 3 câu độc lập, mỗi câu có xác suất chọn đúng là 0.5. Tính xác suất học sinh đó làm đúng cả 3 câu.",
                        "0.125", "$0.5^3 = 0.125$."),
                make_sa(5, "VDC", "Hai bạn A và B độc lập cùng giải một đề toán, xác suất giải đúng của A là 0.8, của B là 0.75. Tính xác suất để có đúng 1 bạn giải đúng.",
                        "0.35", "$0.8 \\times 0.25 + 0.2 \\times 0.75 = 0.20 + 0.15 = 0.35$."),
                make_sa(6, "VDC", "Một dây chuyền kiểm định có 3 khâu rà soát độc lập, xác suất phát hiện lỗi của mỗi khâu là 0.9. Tính xác suất một sản phẩm lỗi bị lọt qua cả 3 khâu mà không bị phát hiện.",
                        "0.001", "$(1 - 0.9)^3 = 0.1^3 = 0.001$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc nhân xác suất",
                           "Nêu định nghĩa và điều kiện áp dụng công thức nhân xác suất $P(AB) = P(A)P(B)$. Nêu một ví dụ thực tế.",
                           "Điều kiện áp dụng: Hai biến cố $A$ và $B$ bắt buộc phải là hai biến cố độc lập (sự xảy ra hay không xảy ra của biến cố này không ảnh hưởng đến xác suất xảy ra của biến cố kia). Khi đó: $P(AB) = P(A) \\cdot P(B)$. Ví dụ thực tế: Hai người thi bằng lái xe ở hai trung tâm sát hạch khác nhau."),
                make_essay(2, "TH", 0.5, "Tính xác suất bắn bia của hai vận động viên",
                           "Hai vận động viên bắn cung $A$ và $B$ cùng bắn độc lập vào một bia. Xác suất bắn trúng tâm của $A$ là $0.8$, của $B$ là $0.75$. Tính xác suất để: a) Cả hai cùng bắn trúng tâm. b) Vận động viên $A$ bắn trúng tâm nhưng vận động viên $B$ bắn trượt.",
                           "Gọi $A$ là biến cố vận động viên $A$ bắn trúng tâm ($P(A) = 0.8$), $B$ là biến cố vận động viên $B$ bắn trúng tâm ($P(B) = 0.75$). Vì hai người thi đấu độc lập: a) Xác suất cả hai cùng trúng tâm: $P(AB) = P(A) \\cdot P(B) = 0.8 \\times 0.75 = 0.60$. b) Xác suất $A$ trúng tâm và $B$ trượt là biến cố $A \\cap \\overline{B}$. Ta có $P(\\overline{B}) = 1 - 0.75 = 0.25$. Do $A$ và $\\overline{B}$ độc lập nên: $P(A \\cap \\overline{B}) = P(A) \\cdot P(\\overline{B}) = 0.8 \\times 0.25 = 0.20$."),
                make_essay(3, "VD", 0.5, "Tính xác suất có đúng một người đạt mục tiêu",
                           "Hai bạn Minh và Hùng độc lập tham dự kỳ thi tuyển sinh đại học. Xác suất thi đỗ của Minh là $0.85$, xác suất thi đỗ của Hùng là $0.80$. Tính xác suất để: a) Cả hai bạn cùng thi đỗ. b) Có đúng một bạn thi đỗ.",
                           "Gọi $M$ là biến cố Minh đỗ ($P(M) = 0.85$), $H$ là biến cố Hùng đỗ ($P(H) = 0.80$). Do thi cử độc lập: a) Xác suất cả hai cùng đỗ: $P(MH) = P(M) \\cdot P(H) = 0.85 \\times 0.80 = 0.68$. b) Biến cố \"Có đúng một bạn đỗ\" gồm 2 trường hợp xung khắc: Minh đỗ - Hùng trượt ($M\\overline{H}$) HOẶC Minh trượt - Hùng đỗ ($\\overline{M}H$). Ta có: $P(M\\overline{H}) = P(M) \\cdot P(\\overline{H}) = 0.85 \\times (1 - 0.80) = 0.85 \\times 0.20 = 0.17$. $P(\\overline{M}H) = P(\\overline{M}) \\cdot P(H) = (1 - 0.85) \\times 0.80 = 0.15 \\times 0.80 = 0.12$. Vậy xác suất có đúng một bạn đỗ là: $P = 0.17 + 0.12 = 0.29$ ($29\\%$)."),
                make_essay(4, "VDC", 0.5, "Đánh giá an toàn đường truyền cáp quang biển",
                           "Một tuyến cáp viễn thông quốc tế được dự phòng bởi 3 tuyến cáp quang biển độc lập $C_1, C_2, C_3$. Xác suất đứt cáp hoặc mất kết nối trong năm của từng tuyến lần lượt là: $P_1 = 0.05; P_2 = 0.04; P_3 = 0.02$. Kết nối Internet quốc tế của quốc gia chỉ bị gián đoạn hoàn toàn nếu cả 3 tuyến cáp cùng bị đứt đồng thời. a) Tính xác suất để kết nối Internet quốc tế bị gián đoạn hoàn toàn trong năm. b) Tính xác suất để kết nối Internet quốc tế được thông suốt trong cả năm. c) Nếu các sự cố cáp xảy ra độc lập, việc lắp đặt thêm tuyến cáp thứ 3 ($C_3$) đã làm giảm xác suất gián đoạn Internet đi bao nhiêu lần so với khi chỉ có 2 tuyến $C_1$ và $C_2$?",
                           "a) Biến cố cả 3 tuyến cáp cùng đứt là biến cố giao của 3 sự cố độc lập: $P_{gian\\_doan} = P_1 \\cdot P_2 \\cdot P_3 = 0.05 \\times 0.04 \\times 0.02 = 0.00004 = 0.004\\%$. b) Xác suất Internet thông suốt trong cả năm: $P_{thong\\_suot} = 1 - P_{gian\\_doan} = 1 - 0.00004 = 0.99996 = 99.996\\%$. c) Khi chỉ có 2 tuyến $C_1, C_2$, xác suất gián đoạn là: $P_{2\\_tuyen} = P_1 \\cdot P_2 = 0.05 \\times 0.04 = 0.002$. Khi có thêm tuyến $C_3$, xác suất gián đoạn giảm xuống: $\\frac{P_{2\\_tuyen}}{P_{gian\\_doan}} = \\frac{0.002}{0.00004} = 50$ lần. Vậy việc bổ sung tuyến cáp thứ 3 giúp giảm rủi ro gián đoạn mạng tới 50 lần.")
            ]
            return mcqs, tfs, sas, essays

    return None
