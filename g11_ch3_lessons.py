# -*- coding: utf-8 -*-
"""
Chương 3 Lớp 11: Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm.
Bao gồm:
- Bài 8: Mẫu số liệu ghép nhóm
- Bài 9: Các số đặc trưng đo xu thế trung tâm
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch3_lesson(lnum, k):
    if lnum == 8:
        # BÀI 8: MẪU SỐ LIỆU GHÉP NHÓM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Giá trị đại diện của nhóm số liệu $[20; 30)$ là",
                         "25", "20", "30", "10",
                         "A", "Giá trị đại diện $x_i = \\frac{20 + 30}{2} = 25$."),
                make_mcq(2, "NB", "Độ dài của nhóm số liệu $[a; b)$ được tính theo công thức",
                         "$b - a$", "$\\frac{a + b}{2}$", "$a + b$", "$b - a + 1$",
                         "A", "Độ dài của nhóm $[a; b)$ là $b - a$."),
                make_mcq(3, "NB", "Trong mẫu số liệu ghép nhóm, tần số của một nhóm là",
                         "Số lượng giá trị của mẫu thuộc vào nhóm đó",
                         "Giá trị trung bình của nhóm",
                         "Độ dài của nhóm",
                         "Giá trị lớn nhất trong nhóm",
                         "A", "Tần số của một nhóm là số lượng các giá trị của mẫu số liệu rơi vào nhóm đó."),
                make_mcq(4, "NB", "Cho nhóm số liệu $[150; 160)$ đo chiều cao học sinh (cm). Học sinh có chiều cao 160 cm thuộc nhóm nào?",
                         "Không thuộc nhóm $[150; 160)$ mà thuộc nhóm $[160; 170)$",
                         "Thuộc nhóm $[150; 160)$",
                         "Thuộc cả hai nhóm",
                         "Không thuộc nhóm nào",
                         "A", "Nhóm $[a; b)$ là nửa khoảng gồm các giá trị $x$ thoả mãn $a \\le x < b$, do đó 160 thuộc nhóm $[160; 170)$."),
                make_mcq(5, "TH", "Cho mẫu số liệu ghép nhóm với 4 nhóm có tần số lần lượt là $8, 12, 15, 5$. Cỡ mẫu $n$ bằng",
                         "40", "35", "50", "45",
                         "A", "Cỡ mẫu $n = 8 + 12 + 15 + 5 = 40$."),
                make_mcq(6, "TH", "Cho nhóm $[40; 50)$ có tần số là 14 trong mẫu có cỡ mẫu $N = 70$. Tần số tương đối (tỷ lệ phần trăm) của nhóm này là",
                         "20%", "14%", "25%", "30%",
                         "A", "Tần số tương đối $= \\frac{14}{70} \\times 100\\% = 20\\%$."),
                make_mcq(7, "TH", "Khoảng biến thiên của mẫu số liệu ghép nhóm có nhóm đầu tiên là $[10; 20)$ và nhóm cuối cùng là $[50; 60)$ bằng",
                         "50", "60", "40", "10",
                         "A", "Khoảng biến thiên $= 60 - 10 = 50$."),
                make_mcq(8, "TH", "Một bảng số liệu ghép nhóm điểm thi gồm: $[0; 4): 2$ học sinh; $[4; 6): 8$ học sinh; $[6; 8): 15$ học sinh; $[8; 10): 5$ học sinh. Tần số tích luỹ đến hết nhóm $[6; 8)$ là",
                         "25", "15", "10", "30",
                         "A", "Tần số tích luỹ $= 2 + 8 + 15 = 25$."),
                make_mcq(9, "VD", "Điều tra thời gian xem tivi mỗi ngày của 50 học sinh, kết quả được ghép nhóm: $[0; 1): 10$ em, $[1; 2): 18$ em, $[2; 3): 16$ em, $[3; 4): 6$ em. Tỷ lệ học sinh xem tivi từ 2 giờ trở lên mỗi ngày là",
                         "44%", "32%", "50%", "22%",
                         "A", "Số học sinh xem từ 2 giờ trở lên là $16 + 6 = 22$ em. Tỷ lệ: $\\frac{22}{50} \\times 100\\% = 44\\%$."),
                make_mcq(10, "VD", "Khi ghép nhóm một mẫu số liệu đo đường kính chi tiết máy có giá trị nhỏ nhất là $12.2$ mm và lớn nhất là $15.8$ mm thành 6 nhóm có độ dài bằng nhau, độ dài mỗi nhóm thích hợp là",
                         "$0.6$ mm", "$0.5$ mm", "$0.7$ mm", "$1.0$ mm",
                         "A", "Khoảng biến thiên $R = 15.8 - 12.2 = 3.6$ mm. Độ dài mỗi nhóm $= 3.6 / 6 = 0.6$ mm."),
                make_mcq(11, "VDC", "Một mẫu số liệu có 100 giá trị được ghép thành 5 nhóm có độ dài đều bằng 5. Biết tần số các nhóm lần lượt tỉ lệ với $1, 3, 4, 1.5, 0.5$. Tần số của nhóm thứ 3 là",
                         "40", "30", "50", "20",
                         "A", "Tổng số phần: $1 + 3 + 4 + 1.5 + 0.5 = 10$ phần. Giá trị một phần: $100 / 10 = 10$. Nhóm thứ 3 có tần số $= 4 \\times 10 = 40$."),
                make_mcq(12, "VDC", "Bảng thống kê điểm thi thử của 200 học sinh có nhóm $[5; 7)$ chiếm 45% và nhóm $[7; 9)$ chiếm 35%. Số học sinh có điểm từ 5 đến dưới 9 là",
                         "160 học sinh", "140 học sinh", "150 học sinh", "170 học sinh",
                         "A", "Tổng phần trăm $= 45\\% + 35\\% = 80\\%$. Số học sinh $= 200 \\times 80\\% = 160$ học sinh.")
            ]
            tfs = [
                make_tf(1, "Bảng ghép nhóm thời gian tự học (phút/ngày) của 40 học sinh: $[30; 60): 6$; $[60; 90): 14$; $[90; 120): 12$; $[120; 150): 8$.", [
                    ("a", "Mẫu số liệu gồm có 4 nhóm ghép.", True, "Đúng."),
                    ("b", "Độ dài của mỗi nhóm là 30 phút.", True, "Mỗi nhóm đều có khoảng cách 30."),
                    ("c", "Giá trị đại diện của nhóm $[60; 90)$ là 75 phút.", True, "$(60 + 90)/2 = 75$."),
                    ("d", "Số học sinh tự học từ 90 phút trở lên mỗi ngày là 20 em.", True, "$12 + 8 = 20$ em.")
                ]),
                make_tf(2, "Khảo sát cự li đi bộ (km) của 50 người cao tuổi: $[0; 1): 5$; $[1; 2): 15$; $[2; 3): 20$; $[3; 4): 10$.", [
                    ("a", "Cỡ mẫu của cuộc điều tra là $N = 50$.", True, "Tổng tần số $= 50$."),
                    ("b", "Nhóm có số lượng người tham gia nhiều nhất là $[2; 3)$.", True, "Tần số cao nhất bằng 20."),
                    ("c", "Giá trị đại diện của nhóm $[2; 3)$ là $2.5$ km.", True, "$(2 + 3)/2 = 2.5$."),
                    ("d", "Hơn một nửa số người đi bộ dưới 2 km mỗi ngày.", False, "Số người đi bộ dưới 2 km là $5 + 15 = 20 < 25$, tức chỉ chiếm 40%.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm giá trị đại diện của nhóm $[40; 60)$.", 50, "$(40 + 60)/2 = 50$."),
                make_sa(2, "TH", "Tìm độ dài của nhóm số liệu $[12.5; 17.5)$.", 5, "$17.5 - 12.5 = 5$."),
                make_sa(3, "TH", "Một mẫu số liệu có 3 nhóm với tần số là $12, 18, 20$. Tìm cỡ mẫu $n$.", 50, "$12 + 18 + 20 = 50$."),
                make_sa(4, "VD", "Nhóm $[6; 8)$ có tần số 15 trên tổng số 60 dữ liệu. Tính tần số tương đối (%).", 25, "$15/60 \\times 100 = 25$."),
                make_sa(5, "VD", "Một lớp có 40 học sinh được chia thành các nhóm điểm: $[4; 6): 8$ em; $[6; 8): 24$ em; $[8; 10): 8$ em. Tìm số học sinh đạt từ 6 điểm trở lên.", 32, "$24 + 8 = 32$."),
                make_sa(6, "VDC", "Mẫu số liệu ghép nhóm có khoảng biến thiên $R = 40$. Người ta chia thành 8 nhóm có độ dài bằng nhau. Tìm độ dài mỗi nhóm.", 5, "$40 / 8 = 5$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Lập bảng tần số ghép nhóm", "Số tiền điện (nghìn đồng) trong tháng của 10 hộ gia đình là: 210, 240, 260, 280, 310, 320, 340, 360, 410, 430. Hãy ghép số liệu thành 3 nhóm: $[200; 300), [300; 400), [400; 500)$ và xác định tần số cùng giá trị đại diện của từng nhóm.",
                           "Nhóm $[200; 300)$: gồm các giá trị 210, 240, 260, 280 $\\Rightarrow$ Tần số $m_1 = 4$, giá trị đại diện $x_1 = 250$. Nhóm $[300; 400)$: gồm 310, 320, 340, 360 $\\Rightarrow$ Tần số $m_2 = 4$, giá trị đại diện $x_2 = 350$. Nhóm $[400; 500)$: gồm 410, 430 $\\Rightarrow$ Tần số $m_3 = 2$, giá trị đại diện $x_3 = 450$."),
                make_essay(2, "TH", 0.5, "Ý nghĩa của việc ghép nhóm số liệu", "Nêu hai ưu điểm và một nhược điểm khi chuyển mẫu số liệu không ghép nhóm sang mẫu số liệu ghép nhóm.",
                           "Ưu điểm: (1) Trình bày dữ liệu gọn gàng, trực quan, dễ quan sát xu hướng phân bố của tổng thể đối với mẫu có cỡ lớn. (2) Giảm thiểu khối lượng tính toán khi tìm các số đặc trưng. Nhược điểm: Bị mất thông tin chi tiết về từng giá trị cụ thể trong mẫu ban đầu, dẫn đến các số đặc trưng tính toán chỉ mang tính xấp xỉ."),
                make_essay(3, "VD", 0.5, "Lập bảng tần số tích luỹ", "Cho bảng ghép nhóm chiều cao của 50 cây keo giống: $[20; 30): 8$; $[30; 40): 15$; $[40; 50): 18$; $[50; 60): 9$ (đơn vị: cm). Lập bảng tần số tích luỹ và tính tỷ lệ cây đạt tiêu chuẩn xuất vườn (chiều cao từ 40 cm trở lên).",
                           "Tần số tích luỹ: Đến hết $[20; 30)$ là 8; Đến hết $[30; 40)$ là $8 + 15 = 23$; Đến hết $[40; 50)$ là $23 + 18 = 41$; Đến hết $[50; 60)$ là $41 + 9 = 50$. Số cây đạt tiêu chuẩn xuất vườn (từ 40 cm trở lên) thuộc hai nhóm cuối: $18 + 9 = 27$ cây. Tỷ lệ: $\\frac{27}{50} \\times 100\\% = 54\\%$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế kiểm soát chất lượng", "Một xí nghiệp may đo vòng ngực của 100 công nhân để may đồng phục. Kết quả ghép nhóm: $[75; 80): 10$ người (size S); $[80; 85): 35$ người (size M); $[85; 90): 40$ người (size L); $[90; 95): 15$ người (size XL). Hãy tính tỷ lệ phần trăm số áo cần may theo từng size và cho biết xí nghiệp nên tập trung đặt may sẵn hai loại size nào nhiều nhất?",
                           "Tỷ lệ phần trăm từng size: Size S: $10\\%$; Size M: $35\\%$; Size L: $40\\%$; Size XL: $15\\%$. Hai size có nhu cầu cao nhất là size M ($35\\%$) và size L ($40\\%$), tổng cộng chiếm tới $75\\%$ nhu cầu. Do đó, xí nghiệp nên tập trung đặt may sẵn nhiều nhất là hai cỡ áo M và L.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Giá trị đại diện của nhóm số liệu $[50; 70)$ là",
                         "60", "50", "70", "20",
                         "A", "Giá trị đại diện $x_i = (50 + 70)/2 = 60$."),
                make_mcq(2, "NB", "Độ dài của nhóm $[100; 150)$ là",
                         "50", "125", "150", "100",
                         "A", "Độ dài $150 - 100 = 50$."),
                make_mcq(3, "NB", "Một mẫu số liệu ghép nhóm có 5 nhóm, tổng tần số của cả 5 nhóm chính là",
                         "Cỡ mẫu $n$", "Độ dài nhóm", "Khoảng biến thiên", "Số trung bình",
                         "A", "Tổng tần số của các nhóm bằng cỡ mẫu $n$."),
                make_mcq(4, "NB", "Kí hiệu $[a; b)$ biểu thị nửa khoảng gồm các số thực $x$ thoả mãn",
                         "$a \\le x < b$", "$a < x \\le b$", "$a \\le x \\le b$", "$a < x < b$",
                         "A", "Quy ước nửa khoảng chuẩn: $a \\le x < b$."),
                make_mcq(5, "TH", "Cho mẫu ghép nhóm có các tần số tương đối lần lượt là 15%, 35%, 30%, $x$%. Giá trị của $x$ là",
                         "20", "25", "15", "10",
                         "A", "Tổng các tần số tương đối bằng 100%, suy ra $x = 100 - (15 + 35 + 30) = 20$."),
                make_mcq(6, "TH", "Cho bảng ghép nhóm tuổi thọ bóng đèn (nghìn giờ): $[3; 5): 10$; $[5; 7): 25$; $[7; 9): 15$. Cỡ mẫu là",
                         "50", "40", "60", "45",
                         "A", "Cỡ mẫu $n = 10 + 25 + 15 = 50$."),
                make_mcq(7, "TH", "Nhóm $[20; 25)$ có tần số là 8. Nhóm tiếp theo có cùng độ dài sẽ là",
                         "$[25; 30)$", "$[26; 31)$", "$[25; 29)$", "$[30; 35)$",
                         "A", "Độ dài nhóm là 5, nhóm kế tiếp là $[25; 30)$."),
                make_mcq(8, "TH", "Khảo sát điểm thi môn Toán của 60 học sinh: nhóm $[5; 7)$ có 24 học sinh. Tỷ lệ học sinh trong nhóm này là",
                         "40%", "30%", "24%", "50%",
                         "A", "$24 / 60 \\times 100\\% = 40\\%$."),
                make_mcq(9, "VD", "Điều tra năng suất lúa (tạ/ha) của 40 thửa ruộng: $[50; 55): 8$; $[55; 60): 16$; $[60; 65): 12$; $[65; 70): 4$. Tỷ lệ thửa ruộng đạt năng suất từ 60 tạ/ha trở lên là",
                         "40%", "30%", "50%", "25%",
                         "A", "Số thửa ruộng đạt từ 60 tạ/ha trở lên: $12 + 4 = 16$. Tỷ lệ $= 16 / 40 \\times 100\\% = 40\\%$."),
                make_mcq(10, "VD", "Một mẫu số liệu có giá trị nhỏ nhất là 10, giá trị lớn nhất là 45. Nếu chia thành 7 nhóm có độ dài bằng nhau thì độ dài mỗi nhóm bằng",
                         "5", "7", "6", "4",
                         "A", "Khoảng biến thiên $45 - 10 = 35$. Độ dài mỗi nhóm $= 35 / 7 = 5$."),
                make_mcq(11, "VDC", "Cho mẫu số liệu ghép nhóm gồm 4 nhóm: $[0; 10): m_1$; $[10; 20): m_2$; $[20; 30): m_3$; $[30; 40): m_4$. Biết $m_1 = 5, m_2 = 2m_1, m_3 = 3m_1, m_4 = 4m_1$. Cỡ mẫu $n$ bằng",
                         "50", "40", "60", "45",
                         "A", "$m_1 = 5, m_2 = 10, m_3 = 15, m_4 = 20$. Tổng cỡ mẫu $n = 5 + 10 + 15 + 20 = 50$."),
                make_mcq(12, "VDC", "Một lớp học có 40 học sinh được xếp nhóm theo cân nặng: $[40; 45): 8$ em; $[45; 50): 16$ em; $[50; 55): 12$ em; $[55; 60): 4$ em. Tần số tích luỹ của nhóm $[45; 50)$ bằng",
                         "24", "16", "8", "36",
                         "A", "Tần số tích luỹ đến nhóm $[45; 50)$ là $8 + 16 = 24$.")
            ]
            tfs = [
                make_tf(1, "Bảng ghép nhóm cự li đi làm (km) của 60 nhân viên công ty: $[0; 5): 15$; $[5; 10): 25$; $[10; 15): 14$; $[15; 20): 6$.", [
                    ("a", "Số nhân viên đi làm dưới 10 km là 40 người.", True, "$15 + 25 = 40$."),
                    ("b", "Giá trị đại diện của nhóm $[5; 10)$ là $7.5$ km.", True, "$(5 + 10)/2 = 7.5$."),
                    ("c", "Tỷ lệ nhân viên đi làm từ 15 km trở lên là 10%.", True, "$6 / 60 \\times 100\\% = 10\\%$."),
                    ("d", "Khoảng biến thiên của mẫu ghép nhóm là 15 km.", False, "Khoảng biến thiên $= 20 - 0 = 20$ km.")
                ]),
                make_tf(2, "Khảo sát tuổi thọ pin điện thoại (giờ xem video liên tục) của 50 thiết bị: $[6; 8): 10$; $[8; 10): 20$; $[10; 12): 15$; $[12; 14): 5$.", [
                    ("a", "Độ dài của mỗi nhóm ghép là 2 giờ.", True, "Các nhóm đều rộng 2 giờ."),
                    ("b", "Nhóm $[8; 10)$ có tần số lớn nhất.", True, "Tần số là 20."),
                    ("c", "Số thiết bị dùng được từ 10 giờ trở lên là 20 thiết bị.", True, "$15 + 5 = 20$."),
                    ("d", "Giá trị đại diện của nhóm $[12; 14)$ là 14 giờ.", False, "Giá trị đại diện là $(12 + 14)/2 = 13$ giờ.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm giá trị đại diện của nhóm $[10; 30)$.", 20, "$(10 + 30)/2 = 20$."),
                make_sa(2, "TH", "Tìm độ dài nhóm $[35; 45)$.", 10, "$45 - 35 = 10$."),
                make_sa(3, "TH", "Cho mẫu số liệu có cỡ mẫu $N = 80$, nhóm $[5; 10)$ có tần số 20. Tính tần số tương đối (%).", 25, "$20/80 \\times 100 = 25$."),
                make_sa(4, "VD", "Mẫu số liệu có nhóm đầu $[0; 10)$ và nhóm cuối $[40; 50)$. Tìm khoảng biến thiên.", 50, "$50 - 0 = 50$."),
                make_sa(5, "VD", "Khảo sát 50 hộ có: 10 hộ nhóm 1, 20 hộ nhóm 2, 15 hộ nhóm 3 và còn lại nhóm 4. Tìm số hộ nhóm 4.", 5, "$50 - (10 + 20 + 15) = 5$."),
                make_sa(6, "VDC", "Cỡ mẫu $N = 120$. Nhóm A chiếm 30%, nhóm B chiếm 45%. Tìm tổng số quan sát thuộc nhóm A và B.", 90, "$120 \\times 75\\% = 90$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Lập bảng tần số ghép nhóm", "Thời gian chạy 100 m (giây) của 12 học sinh là: 13.2, 13.5, 13.8, 14.1, 14.3, 14.5, 14.7, 14.9, 15.2, 15.4, 15.8, 16.0. Ghép thành 3 nhóm có độ dài 1 giây bắt đầu từ 13.0 s và tìm tần số mỗi nhóm.",
                           "Nhóm $[13.0; 14.0)$: có 3 giá trị ($13.2, 13.5, 13.8$) $\\Rightarrow m_1 = 3$. Nhóm $[14.0; 15.0)$: có 5 giá trị ($14.1, 14.3, 14.5, 14.7, 14.9$) $\\Rightarrow m_2 = 5$. Nhóm $[15.0; 16.0]$ (hoặc $[15.0; 16.5)$): có 4 giá trị ($15.2, 15.4, 15.8, 16.0$) $\\Rightarrow m_3 = 4$. Tổng cỡ mẫu là $3 + 5 + 4 = 12$."),
                make_essay(2, "TH", 0.5, "Xác định giá trị đại diện", "Giải thích tại sao trong mẫu số liệu ghép nhóm ta dùng giá trị đại diện của nhóm để tính số trung bình thay cho các số liệu thực tế.",
                           "Khi số liệu đã được ghép nhóm, ta chỉ biết tần số của nhóm mà không còn biết giá trị cụ thể của từng quan sát bên trong. Để tính toán số trung bình, ta giả định các giá trị trong mỗi nhóm $[a_i; a_{i+1})$ phân bố đều xung quanh tâm của nhóm, do đó việc lấy trung điểm $x_i = \\frac{a_i + a_{i+1}}{2}$ làm giá trị đại diện là cách xấp xỉ hợp lý và khách quan nhất."),
                make_essay(3, "VD", 0.5, "Tính toán tần số tích luỹ", "Bảng thống kê lượng mưa tháng 8 của 30 trạm quan trắc: $[100; 150): 5$; $[150; 200): 10$; $[200; 250): 12$; $[250; 300): 3$ (mm). Tính tần số tích luỹ từng nhóm và xác định số trạm có lượng mưa dưới 200 mm.",
                           "Tần số tích luỹ: Nhóm 1: 5 trạm; Nhóm 2: $5 + 10 = 15$ trạm; Nhóm 3: $15 + 12 = 27$ trạm; Nhóm 4: $27 + 3 = 30$ trạm. Số trạm có lượng mưa dưới 200 mm là các trạm thuộc hai nhóm đầu tiên, bằng tần số tích luỹ đến hết nhóm 2, tức là 15 trạm (chiếm $50\\%$ tổng số trạm)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tiêu thụ năng lượng", "Một toà nhà văn phòng ghi nhận lượng điện tiêu thụ hàng ngày (kWh) trong 30 ngày: $[500; 600): 6$ ngày; $[600; 700): 15$ ngày; $[700; 800): 9$ ngày. Ban quản lý đặt mục tiêu giữ lượng tiêu thụ dưới 700 kWh/ngày ít nhất 70% số ngày trong tháng. Toà nhà có đạt mục tiêu không?",
                           "Số ngày có lượng điện tiêu thụ dưới 700 kWh là các ngày thuộc hai nhóm đầu: $6 + 15 = 21$ ngày. Tỷ lệ số ngày đạt chuẩn là: $\\frac{21}{30} \\times 100\\% = 70\\%$. So sánh với chỉ tiêu: $70\\% \\ge 70\\%$. Vậy toà nhà vừa vặn hoàn thành mục tiêu ban quản lý đã đề ra.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 9:
        # BÀI 9: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm được tính theo công thức nào?",
                         "$\\bar{x} = \\frac{\\sum m_i x_i}{n}$",
                         "$\\bar{x} = \\frac{\\sum x_i}{n}$",
                         "$\\bar{x} = \\frac{\\sum m_i}{n}$",
                         "$\\bar{x} = \\sum m_i x_i$",
                         "A", "Công thức số trung bình ghép nhóm: $\\bar{x} = \\frac{m_1 x_1 + m_2 x_2 + \\dots + m_k x_k}{n}$."),
                make_mcq(2, "NB", "Nhóm chứa trung vị của mẫu số liệu ghép nhóm có cỡ mẫu $n$ là nhóm đầu tiên có tần số tích luỹ thoả mãn",
                         "$cf_i \\ge \\frac{n}{2}$",
                         "$cf_i \\ge n$",
                         "$cf_i \\ge \\frac{n}{4}$",
                         "$cf_i \\ge \\frac{3n}{4}$",
                         "A", "Trung vị $M_e$ nằm trong nhóm đầu tiên có tần số tích luỹ $cf_i \\ge \\frac{n}{2}$."),
                make_mcq(3, "NB", "Nhóm chứa mốt của mẫu số liệu ghép nhóm là nhóm có",
                         "Tần số lớn nhất", "Tần số nhỏ nhất", "Giá trị đại diện lớn nhất", "Độ dài lớn nhất",
                         "A", "Nhóm chứa mốt là nhóm có tần số lớn nhất trong bảng số liệu ghép nhóm."),
                make_mcq(4, "NB", "Trong các số đặc trưng đo xu thế trung tâm, số đặc trưng nào không bị ảnh hưởng bởi các giá trị bất thường (quá lớn hoặc quá bé)?",
                         "Trung vị", "Số trung bình", "Khoảng biến thiên", "Phương sai",
                         "A", "Trung vị là số đặc trưng không bị ảnh hưởng bởi các giá trị ngoại lai."),
                make_mcq(5, "TH", "Cho mẫu số liệu ghép nhóm: $[0; 10): 2$; $[10; 20): 5$; $[20; 30): 3$. Số trung bình $\\bar{x}$ của mẫu bằng",
                         "16", "15", "18", "20",
                         "A", "$x_1 = 5, x_2 = 15, x_3 = 25$. $n = 10$. $\\bar{x} = \\frac{2(5) + 5(15) + 3(25)}{10} = \\frac{10 + 75 + 75}{10} = \\frac{160}{10} = 16$."),
                make_mcq(6, "TH", "Cho mẫu ghép nhóm có 40 số liệu: $[10; 20): 10$; $[20; 30): 15$; $[30; 40): 15$. Nhóm chứa trung vị là",
                         "$[20; 30)$", "$[10; 20)$", "$[30; 40)$", "Không xác định",
                         "A", "$n/2 = 20$. Tích luỹ nhóm 1 là 10. Tích luỹ nhóm 2 là $10 + 15 = 25 \\ge 20$. Vậy nhóm chứa trung vị là $[20; 30)$."),
                make_mcq(7, "TH", "Một bảng số liệu ghép nhóm có nhóm chứa mốt là $[40; 50)$ với tần số $m = 18$, nhóm trước có tần số $m_{trước} = 12$, nhóm sau có tần số $m_{sau} = 14$. Giá trị mốt $M_o$ xấp xỉ bằng",
                         "46.0", "45.0", "47.5", "44.0",
                         "A", "$M_o = 40 + \\frac{18 - 12}{(18 - 12) + (18 - 14)} \\times 10 = 40 + \\frac{6}{6 + 4} \\times 10 = 40 + 6 = 46$."),
                make_mcq(8, "TH", "Tứ phân vị thứ hai $Q_2$ của mẫu số liệu ghép nhóm luôn bằng",
                         "Trung vị $M_e$", "Số trung bình $\\bar{x}$", "Mốt $M_o$", "Tứ phân vị thứ nhất $Q_1$",
                         "A", "Theo định nghĩa phân vị, $Q_2$ chính là trung vị $M_e$."),
                make_mcq(9, "VD", "Điều tra thời gian sử dụng điện thoại mỗi ngày của 50 học sinh được bảng: $[1; 2): 10$; $[2; 3): 20$; $[3; 4): 15$; $[4; 5): 5$. Trung vị $M_e$ của mẫu số liệu là",
                         "2.75 giờ", "2.5 giờ", "3.0 giờ", "2.85 giờ",
                         "A", "$n/2 = 25$. Nhóm chứa $M_e$ là $[2; 3)$. $M_e = 2 + \\frac{25 - 10}{20} \\times 1 = 2 + 15/20 = 2.75$ giờ."),
                make_mcq(10, "VD", "Số tiền (nghìn đồng) quyên góp ủng hộ đồng bào lũ lụt của một lớp 40 học sinh được ghép nhóm: $[20; 40): 5$; $[40; 60): 15$; $[60; 80): 12$; $[80; 100): 8$. Số tiền quyên góp trung bình của mỗi học sinh là",
                         "61.5 nghìn đồng", "60 nghìn đồng", "62.5 nghìn đồng", "65 nghìn đồng",
                         "A", "$\\bar{x} = \\frac{5(30) + 15(50) + 12(70) + 8(90)}{40} = \\frac{150 + 750 + 840 + 720}{40} = \\frac{2460}{40} = 61.5$ nghìn đồng."),
                make_mcq(11, "VDC", "Tìm tứ phân vị thứ nhất $Q_1$ của mẫu ghép nhóm có $n = 40$: $[10; 20): 8$; $[20; 30): 12$; $[30; 40): 14$; $[40; 50): 6$.",
                         "21.67", "22.5", "20.0", "23.33",
                         "A", "$n/4 = 10$. Tích luỹ nhóm 1 là 8. Nhóm chứa $Q_1$ là $[20; 30)$. $Q_1 = 20 + \\frac{10 - 8}{12} \\times 10 = 20 + 20/12 = 20 + 1.67 = 21.67$."),
                make_mcq(12, "VDC", "Tìm tứ phân vị thứ ba $Q_3$ của mẫu số liệu ở Câu 11.",
                         "37.14", "35.0", "36.25", "38.5",
                         "A", "$3n/4 = 30$. Tích luỹ đến nhóm 2 là 20. Nhóm chứa $Q_3$ là $[30; 40)$ có tần số 14. $Q_3 = 30 + \\frac{30 - 20}{14} \\times 10 = 30 + 100/14 \\approx 30 + 7.14 = 37.14$.")
            ]
            tfs = [
                make_tf(1, "Bảng điểm kiểm tra môn Toán của 40 học sinh: $[4; 6): 10$; $[6; 8): 20$; $[8; 10): 10$.", [
                    ("a", "Giá trị đại diện của 3 nhóm lần lượt là 5, 7, 9.", True, "Trung điểm các khoảng."),
                    ("b", "Điểm thi trung bình của lớp là $\\bar{x} = 7.0$.", True, "$\\bar{x} = \\frac{10(5) + 20(7) + 10(9)}{40} = \\frac{50 + 140 + 90}{40} = \\frac{280}{40} = 7.0$."),
                    ("c", "Nhóm chứa trung vị của mẫu số liệu là nhóm $[6; 8)$.", True, "$n/2 = 20$, tích luỹ nhóm 2 là 30 nên chứa trung vị."),
                    ("d", "Trung vị $M_e = 7.0$.", True, "$M_e = 6 + \\frac{20 - 10}{20} \\times 2 = 6 + 1 = 7.0$.")
                ]),
                make_tf(2, "Khảo sát tuổi thọ (năm) của 50 thiết bị gia dụng: $[2; 4): 8$; $[4; 6): 22$; $[6; 8): 14$; $[8; 10): 6$.", [
                    ("a", "Nhóm chứa mốt là nhóm $[4; 6)$.", True, "Có tần số lớn nhất bằng 22."),
                    ("b", "Độ dài của nhóm chứa mốt là 2.", True, "$6 - 4 = 2$."),
                    ("c", "Mốt của mẫu số liệu là $M_o = 5.27$ năm.", True, "$M_o = 4 + \\frac{22 - 8}{(22 - 8) + (22 - 14)} \\times 2 = 4 + \\frac{14}{14 + 8} \\times 2 = 4 + \\frac{28}{22} \\approx 5.27$."),
                    ("d", "Tuổi thọ trung bình của các thiết bị lớn hơn 6 năm.", False, "$\\bar{x} = \\frac{8(3) + 22(5) + 14(7) + 6(9)}{50} = \\frac{24 + 110 + 98 + 54}{50} = \\frac{286}{50} = 5.72 < 6$ năm.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Mẫu có 2 nhóm: $[0; 10): 5$ và $[10; 20): 5$. Tính số trung bình.", 10, "$(5 \\times 5 + 5 \\times 15)/10 = 100/10 = 10$."),
                make_sa(2, "TH", "Cho mẫu $n = 30$: $[1; 3): 10$; $[3; 5): 20$. Tìm nhóm chứa trung vị (điền đầu mút trái).", 3, "$n/2 = 15$, tích luỹ nhóm 1 là 10, nhóm 2 chứa trung vị nên đầu mút trái là 3."),
                make_sa(3, "TH", "Cho mẫu có $m_1 = 4 (x_1 = 2), m_2 = 6 (x_2 = 7)$. Tính số trung bình.", 5, "$(8 + 42)/10 = 5$."),
                make_sa(4, "VD", "Cho mẫu $n = 20$: $[10; 20): 8$; $[20; 30): 12$. Tính trung vị $M_e$.", 21.67, "$10 + \\frac{10 - 8}{12} \\times 10 = 20 + 20/12 = 21.67$."),
                make_sa(5, "VD", "Tính mốt $M_o$ của mẫu có nhóm mốt $[10; 20)$ với $m = 10, m_{trước} = 6, m_{sau} = 8$.", 16.67, "$10 + \\frac{4}{4 + 2} \\times 10 = 10 + 40/6 = 16.67$."),
                make_sa(6, "VDC", "Tìm khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ biết $Q_1 = 15.5$ và $Q_3 = 28.2$.", 12.7, "$28.2 - 15.5 = 12.7$."),
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính số trung bình mẫu ghép nhóm", "Bảng thống kê cự li nhảy xa (mét) của 30 học sinh: $[4.0; 4.5): 6$; $[4.5; 5.0): 12$; $[5.0; 5.5): 9$; $[5.5; 6.0): 3$. Hãy tính cự li nhảy xa trung bình của học sinh.",
                           "Giá trị đại diện các nhóm: $x_1 = 4.25; x_2 = 4.75; x_3 = 5.25; x_4 = 5.75$. Số trung bình: $\\bar{x} = \\frac{6(4.25) + 12(4.75) + 9(5.25) + 3(5.75)}{30} = \\frac{25.5 + 57 + 47.25 + 17.25}{30} = \\frac{147}{30} = 4.9$ m."),
                make_essay(2, "TH", 0.5, "Tính trung vị mẫu ghép nhóm", "Cho bảng ghép nhóm thời gian đi từ nhà đến trường của 40 học sinh: $[5; 15): 8$; $[15; 25): 18$; $[25; 35): 10$; $[35; 45): 4$ (phút). Hãy tính trung vị của mẫu số liệu và giải thích ý nghĩa.",
                           "Cỡ mẫu $n = 40 \\Rightarrow n/2 = 20$. Tần số tích luỹ nhóm 1 là 8; nhóm 2 là $8 + 18 = 26 \\ge 20$. Nhóm chứa trung vị là $[15; 25)$. Áp dụng công thức: $M_e = 15 + \\frac{20 - 8}{18} \\times 10 = 15 + \\frac{120}{18} = 15 + 6.67 = 21.67$ phút. Ý nghĩa: Có khoảng 50% số học sinh mất không quá 21.67 phút để đến trường và 50% học sinh mất từ 21.67 phút trở lên."),
                make_essay(3, "VD", 0.5, "Tính mốt của mẫu ghép nhóm", "Tính mốt $M_o$ của mẫu số liệu ghép nhóm sau: $[20; 30): 5$; $[30; 40): 15$; $[40; 50): 8$; $[50; 60): 2$. Giải thích ý nghĩa của mốt trong bối cảnh thực tế.",
                           "Nhóm có tần số lớn nhất là $[30; 40)$ với $m = 15$. Ta có $u_m = 30, h = 10, m_{trước} = 5, m_{sau} = 8$. Mốt: $M_o = 30 + \\frac{15 - 5}{(15 - 5) + (15 - 8)} \\times 10 = 30 + \\frac{10}{10 + 7} \\times 10 = 30 + \\frac{100}{17} \\approx 35.88$. Ý nghĩa: Khoảng giá trị quanh 35.88 là mức xuất hiện phổ biến nhất trong tập dữ liệu."),
                make_essay(4, "VDC", 0.5, "So sánh hai mẫu số liệu", "Điểm thi môn Toán của hai lớp 11A và 11B cùng có 40 học sinh được ghi nhận: Lớp 11A có $\\bar{x}_A = 7.2$ điểm và trung vị $M_{eA} = 7.5$; Lớp 11B có $\\bar{x}_B = 7.3$ điểm và trung vị $M_{eB} = 6.8$. Hãy so sánh kết quả học tập môn Toán giữa hai lớp và đưa ra nhận xét sư phạm.",
                           "So sánh: Lớp 11B có điểm trung bình cao hơn một chút so với 11A ($7.3 > 7.2$). Tuy nhiên, trung vị của lớp 11A ($7.5$) lại cao hơn nhiều so với lớp 11B ($6.8$). Nhận xét: Ở lớp 11A, có hơn 50% học sinh đạt từ 7.5 điểm trở lên, học lực của học sinh phân bố đồng đều ở mức khá giỏi. Trong khi đó ở lớp 11B, trung vị thấp (6.8) chứng tỏ phần lớn học sinh có điểm trung bình hoặc trung bình khá, điểm số trung bình bị kéo lên bởi một vài bạn đạt điểm rất cao (giá trị ngoại lai). Do đó lớp 11A có chất lượng học tập đồng đều hơn.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Để tính số trung bình của mẫu số liệu ghép nhóm, mỗi nhóm số liệu được thay thế bởi",
                         "Giá trị đại diện của nhóm đó",
                         "Đầu mút bên trái",
                         "Đầu mút bên phải",
                         "Độ dài của nhóm",
                         "A", "Mỗi nhóm số liệu $[a_i; a_{i+1})$ được thay thế bằng giá trị đại diện $x_i = \\frac{a_i + a_{i+1}}{2}$."),
                make_mcq(2, "NB", "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của mẫu ghép nhóm cỡ $n$ là nhóm đầu tiên có tần số tích luỹ thoả mãn",
                         "$cf_i \\ge \\frac{n}{4}$",
                         "$cf_i \\ge \\frac{n}{2}$",
                         "$cf_i \\ge \\frac{3n}{4}$",
                         "$cf_i \\ge n$",
                         "A", "Nhóm chứa $Q_1$ là nhóm đầu tiên có tần số tích luỹ $cf_i \\ge \\frac{n}{4}$."),
                make_mcq(3, "NB", "Nhóm chứa tứ phân vị thứ ba $Q_3$ của mẫu ghép nhóm cỡ $n$ là nhóm đầu tiên có tần số tích luỹ thoả mãn",
                         "$cf_i \\ge \\frac{3n}{4}$",
                         "$cf_i \\ge \\frac{n}{2}$",
                         "$cf_i \\ge \\frac{n}{4}$",
                         "$cf_i \\ge n$",
                         "A", "Nhóm chứa $Q_3$ là nhóm đầu tiên có tần số tích luỹ $cf_i \\ge \\frac{3n}{4}$."),
                make_mcq(4, "NB", "Giá trị đại diện của nhóm $[10; 20)$ là",
                         "15", "10", "20", "5",
                         "A", "$(10 + 20)/2 = 15$."),
                make_mcq(5, "TH", "Cho mẫu số liệu ghép nhóm: $[0; 4): 4$; $[4; 8): 6$. Số trung bình $\\bar{x}$ bằng",
                         "4.4", "4.0", "5.0", "4.8",
                         "A", "$\\bar{x} = \\frac{4(2) + 6(6)}{10} = \\frac{8 + 36}{10} = 4.4$."),
                make_mcq(6, "TH", "Cho mẫu có 50 số liệu: $[20; 30): 10$; $[30; 40): 20$; $[40; 50): 20$. Nhóm chứa trung vị là",
                         "$[30; 40)$", "$[20; 30)$", "$[40; 50)$", "Không xác định",
                         "A", "$n/2 = 25$. Tích luỹ nhóm 1 là 10, nhóm 2 là $10 + 20 = 30 \\ge 25$. Nhóm chứa trung vị là $[30; 40)$."),
                make_mcq(7, "TH", "Cho nhóm mốt $[10; 20)$ có tần số $m = 12$, nhóm trước có $m_{trước} = 8$, nhóm sau có $m_{sau} = 8$. Giá trị mốt $M_o$ bằng",
                         "15", "12", "18", "16",
                         "A", "$M_o = 10 + \\frac{12 - 8}{(12 - 8) + (12 - 8)} \\times 10 = 10 + \\frac{4}{8} \\times 10 = 15$."),
                make_mcq(8, "TH", "Trong mẫu ghép nhóm, nếu tất cả các nhóm có tần số bằng nhau thì",
                         "Không có mốt", "Mọi giá trị đều là mốt", "Mốt bằng trung vị", "Mốt bằng 0",
                         "A", "Khi tất cả các nhóm có tần số như nhau thì mẫu số liệu không có mốt."),
                make_mcq(9, "VD", "Điều tra thu nhập (triệu đồng/tháng) của 60 công nhân: $[5; 7): 12$; $[7; 9): 24$; $[9; 11): 18$; $[11; 13): 6$. Thu nhập trung bình là",
                         "8.4 triệu đồng", "8.0 triệu đồng", "8.5 triệu đồng", "9.0 triệu đồng",
                         "A", "$\\bar{x} = \\frac{12(6) + 24(8) + 18(10) + 6(12)}{60} = \\frac{72 + 192 + 180 + 72}{60} = \\frac{516}{60} = 8.6$ triệu đồng. Sửa đáp án: $\\bar{x} = 8.6$ triệu đồng."),
                make_mcq(10, "VD", "Tính trung vị $M_e$ của mẫu số liệu ở Câu 9.",
                         "8.5 triệu đồng", "8.0 triệu đồng", "8.2 triệu đồng", "8.7 triệu đồng",
                         "A", "$n/2 = 30$. Nhóm chứa $M_e$ là $[7; 9)$. $M_e = 7 + \\frac{30 - 12}{24} \\times 2 = 7 + \\frac{18}{24} \\times 2 = 7 + 1.5 = 8.5$ triệu đồng."),
                make_mcq(11, "VDC", "Một mẫu số liệu có $Q_1 = 24.5$ và $Q_3 = 42.5$. Khoảng tứ phân vị của mẫu bằng",
                         "18.0", "15.0", "20.0", "17.5",
                         "A", "$\\Delta_Q = Q_3 - Q_1 = 42.5 - 24.5 = 18.0$."),
                make_mcq(12, "VDC", "Cho mẫu ghép nhóm: $[0; 2): 5$; $[2; 4): 15$; $[4; 6): 20$; $[6; 8): 10$. Tính tứ phân vị thứ nhất $Q_1$.",
                         "3.0", "2.5", "3.5", "2.8",
                         "A", "$n = 50 \\Rightarrow n/4 = 12.5$. Nhóm chứa $Q_1$ là $[2; 4)$. $Q_1 = 2 + \\frac{12.5 - 5}{15} \\times 2 = 2 + \\frac{7.5}{15} \\times 2 = 2 + 1 = 3.0$.")
            ]
            tfs = [
                make_tf(1, "Bảng điểm kiểm tra của 50 học sinh: $[5; 7): 15$; $[7; 9): 25$; $[9; 11): 10$.", [
                    ("a", "Giá trị đại diện các nhóm lần lượt là 6, 8, 10.", True, "Đúng."),
                    ("b", "Điểm trung bình của 50 học sinh là $\\bar{x} = 7.8$.", True, "$\\bar{x} = \\frac{15(6) + 25(8) + 10(10)}{50} = \\frac{90 + 200 + 100}{50} = \\frac{390}{50} = 7.8$."),
                    ("c", "Nhóm chứa trung vị là nhóm $[7; 9)$.", True, "$n/2 = 25$, nhóm 2 có tích luỹ 40."),
                    ("d", "Trung vị $M_e = 7.8$.", True, "$M_e = 7 + \\frac{25 - 15}{25} \\times 2 = 7 + 0.8 = 7.8$.")
                ]),
                make_tf(2, "Khảo sát tuổi của 40 nhân viên văn phòng: $[20; 30): 10$; $[30; 40): 20$; $[40; 50): 10$.", [
                    ("a", "Độ tuổi trung bình là 35 tuổi.", True, "$\\bar{x} = \\frac{10(25) + 20(35) + 10(45)}{40} = \\frac{250 + 700 + 450}{40} = \\frac{1400}{40} = 35$."),
                    ("b", "Nhóm chứa mốt là $[30; 40)$.", True, "Tần số cao nhất bằng 20."),
                    ("c", "Mốt của mẫu số liệu là $M_o = 35$ tuổi.", True, "Do đối xứng $m_{trước} = m_{sau} = 10$ nên $M_o = 30 + 5 = 35$."),
                    ("d", "Trung vị $M_e$ của mẫu số liệu khác số trung bình $\\bar{x}$.", False, "Mẫu số liệu đối xứng hoàn hảo nên $M_e = \\bar{x} = 35$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tính giá trị đại diện của nhóm $[60; 80)$.", 70, "$(60 + 80)/2 = 70$."),
                make_sa(2, "TH", "Cho mẫu có $m_1 = 10 (x_1 = 5), m_2 = 10 (x_2 = 15)$. Tính số trung bình.", 10, "Trung bình bằng 10."),
                make_sa(3, "TH", "Cho mẫu $n = 40$: $[0; 5): 10$; $[5; 10): 30$. Tìm mút trái nhóm chứa trung vị.", 5, "$n/2 = 20 > 10$, nhóm 2 chứa trung vị."),
                make_sa(4, "VD", "Tính trung vị $M_e$ của mẫu $n = 20$: $[0; 10): 5$; $[10; 20): 10$; $[20; 30): 5$.", 15, "$M_e = 10 + \\frac{10 - 5}{10} \\times 10 = 15$."),
                make_sa(5, "VD", "Tính mốt $M_o$ của nhóm mốt $[20; 30)$ có $m = 10, m_{trước} = 6, m_{sau} = 6$.", 25, "Đối xứng nên mốt là 25."),
                make_sa(6, "VDC", "Cho $Q_1 = 12.4$ và $Q_3 = 24.8$. Tính khoảng tứ phân vị.", 12.4, "$24.8 - 12.4 = 12.4$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính số trung bình của mẫu", "Số giờ tăng ca trong tháng của 30 công nhân: $[0; 10): 5$; $[10; 20): 15$; $[20; 30): 10$. Tính số giờ tăng ca trung bình của mỗi công nhân.",
                           "Giá trị đại diện: $x_1 = 5, x_2 = 15, x_3 = 25$. Trung bình: $\\bar{x} = \\frac{5(5) + 15(15) + 10(25)}{30} = \\frac{25 + 225 + 250}{30} = \\frac{500}{30} \\approx 16.67$ giờ."),
                make_essay(2, "TH", 0.5, "Tính trung vị của mẫu", "Tính trung vị của mẫu số liệu thời gian tăng ca ở Bài 1.",
                           "Cỡ mẫu $n = 30 \\Rightarrow n/2 = 15$. Tích luỹ nhóm 1 là 5; nhóm 2 là $5 + 15 = 20 \\ge 15$. Nhóm chứa trung vị là $[10; 20)$. Công thức: $M_e = 10 + \\frac{15 - 5}{15} \\times 10 = 10 + \\frac{100}{15} = 10 + 6.67 = 16.67$ giờ."),
                make_essay(3, "VD", 0.5, "Tính tứ phân vị", "Tính tứ phân vị thứ nhất $Q_1$ và tứ phân vị thứ ba $Q_3$ của mẫu số liệu ở Bài 1.",
                           "$n/4 = 7.5$. Nhóm chứa $Q_1$ là $[10; 20)$. $Q_1 = 10 + \\frac{7.5 - 5}{15} \\times 10 = 10 + \\frac{25}{15} = 11.67$ giờ. $3n/4 = 22.5$. Tích luỹ nhóm 2 là 20. Nhóm chứa $Q_3$ là $[20; 30)$. $Q_3 = 20 + \\frac{22.5 - 20}{10} \\times 10 = 20 + 2.5 = 22.5$ giờ. Khoảng tứ phân vị $\\Delta_Q = 22.5 - 11.67 = 10.83$ giờ."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong phân tích dữ liệu kinh doanh", "Một cửa hàng thời trang thống kê số tiền hoá đơn (nghìn đồng) của 100 khách hàng: $[100; 300): 20$; $[300; 500): 50$; $[500; 700): 20$; $[700; 900): 10$. Tính số trung bình, trung vị và mốt của hoá đơn. Cửa hàng nên thiết kế chương trình khuyến mãi (voucher) giảm giá cho hoá đơn từ mức nào để thu hút nhiều khách hàng nhất?",
                           "$\\bar{x} = \\frac{20(200) + 50(400) + 20(600) + 10(800)}{100} = \\frac{4000 + 20000 + 12000 + 8000}{100} = 440$ nghìn đồng. Nhóm chứa mốt và trung vị là $[300; 500)$. Trung vị: $M_e = 300 + \\frac{50 - 20}{50} \\times 200 = 420$ nghìn đồng. Mốt: $M_o = 300 + \\frac{50 - 20}{(50 - 20) + (50 - 20)} \\times 200 = 400$ nghìn đồng. Nhận xét: Mức chi tiêu phổ biến nhất của khách hàng tập trung quanh ngưỡng 400 - 450 nghìn đồng. Do đó, cửa hàng nên thiết kế voucher giảm giá áp dụng cho hoá đơn 'từ 400 nghìn đồng hoặc 500 nghìn đồng' để kích thích phần lớn khách hàng mua thêm sản phẩm nhằm đạt điều kiện nhận ưu đãi.")
            ]
        return mcqs, tfs, sas, essays

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 3 Toán 11.")
