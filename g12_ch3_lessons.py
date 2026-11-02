# -*- coding: utf-8 -*-
"""
Chương 3 Lớp 12: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm.
Bao gồm Bài 9 và Bài 10. Mỗi bài có 2 đề độc lập, tập trung 100% vào kiến thức bài đó.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa

def get_ch3_lesson(lnum, k):
    if lnum == 9:
        # BÀI 9: KHOẢNG BIẾN THIÊN VÀ KHOẢNG TỨ PHÂN VỊ CỦA MẪU SỐ LIỆU GHÉP NHÓM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Khoảng biến thiên $R$ của một mẫu số liệu ghép nhóm được tính bằng:", "Hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên.", "Hiệu giữa giá trị lớn nhất và nhỏ nhất của tần số.", "Hiệu giữa hai tứ phân vị $Q_3 - Q_1$.", "Tích của độ dài nhóm và số nhóm.", "A", "Định nghĩa khoảng biến thiên: $R = a_{k+1} - a_1$."),
                make_mcq(2, "NB", "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm là:", "$\\Delta_Q = Q_3 - Q_1$", "$\\Delta_Q = Q_3 + Q_1$", "$\\Delta_Q = Q_2 - Q_1$", "$\\Delta_Q = Q_3 - Q_2$", "A", "Định nghĩa khoảng tứ phân vị."),
                make_mcq(3, "NB", "Ý nghĩa của khoảng tứ phân vị $\\Delta_Q$ là:", "Đo độ phân tán của 50% dữ liệu ở phần trung tâm của mẫu số liệu.", "Đo giá trị trung bình của toàn bộ mẫu số liệu.", "Đo độ lệch tuyệt đối của nhóm có tần số lớn nhất.", "Xác định mốt của mẫu số liệu.", "A", "Khoảng tứ phân vị đo độ phân tán của 50% số liệu chính giữa."),
                make_mcq(4, "NB", "Cho bảng số liệu ghép nhóm có các nhóm là $[10; 20), [20; 30), [30; 40), [40; 50)$. Khoảng biến thiên của mẫu bằng:", "40", "50", "30", "10", "A", "$R = 50 - 10 = 40$."),
                make_mcq(5, "TH", "Cho mẫu số liệu ghép nhóm có $n = 40$. Nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm chứa giá trị thứ:", "10", "20", "30", "15", "A", "Vị trí của $Q_1$ tương ứng với $\\frac{n}{4} = \\frac{40}{4} = 10$."),
                make_mcq(6, "TH", "Cho mẫu số liệu ghép nhóm có $n = 60$. Nhóm chứa tứ phân vị thứ ba $Q_3$ là nhóm chứa giá trị thứ:", "45", "30", "15", "50", "A", "Vị trí của $Q_3$ tương ứng với $\\frac{3n}{4} = \\frac{3 \\times 60}{4} = 45$."),
                make_mcq(7, "TH", "Biết $Q_1 = 24.5$ và $Q_3 = 38.2$. Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu bằng:", "13.7", "62.7", "14.2", "13.5", "A", "$\\Delta_Q = Q_3 - Q_1 = 38.2 - 24.5 = 13.7$."),
                make_mcq(8, "TH", "Một bảng phân bố thời gian tự học (phút) có nhóm đầu là $[30; 45)$ và nhóm cuối là $[90; 105)$. Khoảng biến thiên của thời gian tự học là:", "75 phút", "60 phút", "90 phút", "105 phút", "A", "$R = 105 - 30 = 75$ phút."),
                make_mcq(9, "VD", "Cho mẫu số liệu ghép nhóm về điểm thi với $Q_1 = 5.6$ và $\\Delta_Q = 2.8$. Tứ phân vị thứ ba $Q_3$ bằng:", "8.4", "7.8", "8.2", "8.0", "A", "$Q_3 = Q_1 + \\Delta_Q = 5.6 + 2.8 = 8.4$."),
                make_mcq(10, "VD", "So sánh độ phân tán của hai lớp: Lớp A có $\\Delta_Q = 1.5$, Lớp B có $\\Delta_Q = 2.8$. Khẳng định nào đúng?", "Lớp A có điểm số 50% trung tâm đồng đều hơn lớp B.", "Lớp B có điểm số đồng đều hơn lớp A.", "Hai lớp có điểm số phân tán như nhau.", "Lớp A có điểm trung bình cao hơn lớp B.", "A", "Khoảng tứ phân vị càng nhỏ thì 50% số liệu ở trung tâm càng ít phân tán (đồng đều hơn)."),
                make_mcq(11, "VDC", "Một mẫu số liệu có cỡ mẫu $n = 100$. Nhóm chứa $Q_1$ là $[20; 30)$ có tần số $m_2 = 25$ và tổng tần số các nhóm trước đó bằng 15. Giá trị của tứ phân vị thứ nhất $Q_1$ bằng:", "24.0", "23.5", "25.0", "24.5", "A", "$Q_1 = 20 + \\frac{25 - 15}{25} \\times (30 - 20) = 20 + \\frac{10}{25} \\times 10 = 20 + 4 = 24.0$."),
                make_mcq(12, "VDC", "Trong phân tích rủi ro tài chính, khoảng tứ phân vị của lợi suất cổ phiếu X là $2.5\\%$, cổ phiếu Y là $6.2\\%$. Nhận định nào sau đây đúng nhất?", "Cổ phiếu X có mức độ biến động lợi suất ở nửa trung tâm ổn định hơn cổ phiếu Y.", "Cổ phiếu Y sinh lời cao hơn cổ phiếu X.", "Cổ phiếu X có rủi ro cao hơn cổ phiếu Y.", "Hai cổ phiếu có cùng mức rủi ro.", "A", "Độ phân tán thấp hơn nghĩa là mức biến động ổn định hơn.")
            ]
            tfs = [
                make_tf(1, "Bảng sau ghi lại thời gian (phút) đi từ nhà đến trường của 40 học sinh: $[10; 15): 8; [15; 20): 14; [20; 25): 12; [25; 30): 6$.", [
                    ("a", "Cỡ mẫu của số liệu là $n = 40$.", True, "$8 + 14 + 12 + 6 = 40$."),
                    ("b", "Khoảng biến thiên của mẫu số liệu là $R = 30 - 10 = 20$ phút.", True, "Hiệu hai đầu mút ngoài cùng."),
                    ("c", "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm $[15; 20)$.", True, "$n/4 = 10$. Tần số tích lũy nhóm 1 là 8, nhóm 2 là 22 nên giá trị thứ 10 rơi vào nhóm 2."),
                    ("d", "Tứ phân vị thứ nhất tính được bằng 15.71 phút.", True, "$Q_1 = 15 + \\frac{10 - 8}{14} \\times 5 = 15 + \\frac{10}{14} \\approx 15.71$.")
                ]),
                make_tf(2, "Bảng thống kê cự ly nhảy xa (m) của 50 vận động viên: $[5.0; 5.5): 10; [5.5; 6.0): 15; [6.0; 6.5): 15; [6.5; 7.0): 10$.", [
                    ("a", "Khoảng biến thiên của cự ly nhảy là $R = 7.0 - 5.0 = 2.0$ mét.", True, "Chính xác."),
                    ("b", "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm $[5.0; 5.5)$.", False, "$n/4 = 12.5$. Nhóm 1 có 10, nhóm 2 tích lũy đến 25 nên $Q_1$ thuộc nhóm $[5.5; 6.0)$."),
                    ("c", "Nhóm chứa tứ phân vị thứ ba $Q_3$ là nhóm $[6.0; 6.5)$.", True, "$3n/4 = 37.5$. Nhóm 3 tích lũy đến 40 nên $Q_3$ thuộc nhóm $[6.0; 6.5)$."),
                    ("d", "Khoảng tứ phân vị $\\Delta_Q$ phản ánh độ phân tán của 50% vận động viên có cự ly ở mức giữa.", True, "Ý nghĩa thống kê.")
                ]),
                make_tf(3, "So sánh kết quả điểm thi môn Toán của hai lớp 12A và 12B có cùng điểm trung bình bằng 7.5.", [
                    ("a", "Nếu lớp 12A có khoảng biến thiên $R_A = 4.0$ và lớp 12B có $R_B = 6.0$ thì điểm số lớp 12B có khoảng cách giữa điểm cao nhất và thấp nhất rộng hơn.", True, "Ý nghĩa của khoảng biến thiên."),
                    ("b", "Nếu $\\Delta_{Q(A)} < \\Delta_{Q(B)}$ thì 50% số học sinh ở giữa của lớp 12A có điểm số đồng đều hơn lớp 12B.", True, "Định lý đo độ phân tán."),
                    ("c", "Khoảng biến thiên $R$ không bị ảnh hưởng bởi các giá trị bất thường (ngoại lệ).", False, "Khoảng biến thiên $R$ rất nhạy cảm và bị ảnh hưởng trực tiếp bởi giá trị ngoại lệ."),
                    ("d", "Khoảng tứ phân vị $\\Delta_Q$ khắc phục được nhược điểm bị ảnh hưởng bởi giá trị ngoại lệ của khoảng biến thiên.", True, "Ưu điểm chính của khoảng tứ phân vị.")
                ]),
                make_tf(4, "Một mẫu số liệu ghép nhóm có $n = 100$. Biết nhóm $[40; 50)$ chứa $Q_3$ có tần số $m_3 = 20$ và tần số tích lũy của các nhóm trước bằng 65.", [
                    ("a", "Vị trí của $Q_3$ ứng với giá trị $\\frac{3n}{4} = 75$.", True, "Chính xác."),
                    ("b", "Độ dài của nhóm $[40; 50)$ bằng 10.", True, "$50 - 40 = 10$."),
                    ("c", "Công thức tính $Q_3 = 40 + \\frac{75 - 65}{20} \\times 10$.", True, "Áp dụng chuẩn công thức nội suy tứ phân vị."),
                    ("d", "Giá trị của $Q_3$ bằng 45.", True, "$40 + \\frac{10}{20} \\times 10 = 40 + 5 = 45$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho mẫu số liệu ghép nhóm có các nhóm từ $[150; 155)$ đến $[175; 180)$. Tìm khoảng biến thiên $R$.", 30, "$180 - 150 = 30$."),
                make_sa(2, "TH", "Cho $Q_1 = 15.2$ và $Q_3 = 24.8$. Tính khoảng tứ phân vị $\\Delta_Q$.", 9.6, "$24.8 - 15.2 = 9.6$."),
                make_sa(3, "TH", "Mẫu số liệu có $n = 80$. Tứ phân vị thứ nhất $Q_1$ nằm ở nhóm chứa giá trị thứ bao nhiêu?", 20, "$80 / 4 = 20$."),
                make_sa(4, "VD", "Biết khoảng tứ phân vị $\\Delta_Q = 4.5$ và $Q_3 = 18.2$. Tìm giá trị của tứ phân vị thứ nhất $Q_1$.", 13.7, "$Q_1 = 18.2 - 4.5 = 13.7$."),
                make_sa(5, "VD", "Mẫu số liệu có $n = 40$. Nhóm $[10; 20)$ chứa $Q_1$ có tần số bằng 16 và tần số nhóm trước bằng 4. Tính $Q_1$.", 13.75, "$Q_1 = 10 + \\frac{10 - 4}{16} \\times 10 = 10 + 3.75 = 13.75$."),
                make_sa(6, "VDC", "Một mẫu số liệu có $Q_1 = 22.0$ và $Q_3 = 36.0$. Giá trị nào lớn hơn giá trị giới hạn ngoại lệ trên $Q_3 + 1.5\\Delta_Q$? Tính giá trị ngưỡng đó.", 57.0, "$\\Delta_Q = 36 - 22 = 14$. Ngưỡng trên: $36 + 1.5 \\times 14 = 36 + 21 = 57.0$.")
            ]
        else:
            # EXAM 2: BÀI 9
            mcqs = [
                make_mcq(1, "NB", "Để xác định khoảng biến thiên của một mẫu số liệu ghép nhóm, ta lấy:", "Đầu mút phải của nhóm cuối trừ đầu mút trái của nhóm đầu.", "Tần số lớn nhất trừ tần số nhỏ nhất.", "Trung vị trừ giá trị nhỏ nhất.", "Tứ phân vị $Q_3$ trừ $Q_1$.", "A", "Định nghĩa khoảng biến thiên."),
                make_mcq(2, "NB", "Số đặc trưng nào sau đây đo độ phân tán của mẫu số liệu?", "Khoảng tứ phân vị $\\Delta_Q$.", "Số trung bình $\\bar{x}$.", "Trung vị $M_e$.", "Mốt $M_o$.", "A", "Khoảng tứ phân vị là số đo độ phân tán."),
                make_mcq(3, "NB", "Tứ phân vị thứ hai $Q_2$ của mẫu số liệu ghép nhóm chính là:", "Số trung vị $M_e$.", "Số trung bình $\\bar{x}$.", "Mốt $M_o$.", "Khoảng biến thiên $R$.", "A", "Tứ phân vị thứ hai chính là trung vị."),
                make_mcq(4, "NB", "Cho các nhóm $[20; 30), [30; 40), [40; 50), [50; 60)$. Độ dài của mỗi nhóm bằng:", "10", "20", "40", "5", "A", "$30 - 20 = 10$."),
                make_mcq(5, "TH", "Cho mẫu số liệu ghép nhóm cỡ $n = 120$. Nhóm chứa tứ phân vị thứ nhất $Q_1$ tương ứng với vị trí giá trị thứ:", "30", "60", "90", "40", "A", "$120 / 4 = 30$."),
                make_mcq(6, "TH", "Cho mẫu số liệu ghép nhóm cỡ $n = 80$. Nhóm chứa tứ phân vị thứ ba $Q_3$ tương ứng với vị trí giá trị thứ:", "60", "40", "20", "50", "A", "$3 \\times 80 / 4 = 60$."),
                make_mcq(7, "TH", "Biết $Q_1 = 12.4$ và $Q_3 = 21.6$. Khoảng tứ phân vị $\\Delta_Q$ bằng:", "9.2", "34.0", "10.0", "8.2", "A", "$\\Delta_Q = 21.6 - 12.4 = 9.2$."),
                make_mcq(8, "TH", "Một bảng số liệu có nhóm đầu là $[0; 5)$ và nhóm cuối là $[25; 30)$. Khoảng biến thiên $R$ bằng:", "30", "25", "35", "20", "A", "$R = 30 - 0 = 30$."),
                make_mcq(9, "VD", "Biết khoảng biến thiên của mức lương nhân viên công ty A là 25 triệu đồng, công ty B là 15 triệu đồng. Kết luận nào sau đây đúng?", "Mức lương của nhân viên công ty A có độ chênh lệch giữa người cao nhất và thấp nhất lớn hơn công ty B.", "Nhân viên công ty A có lương trung bình cao hơn.", "Lương công ty B phân tán hơn.", "Lương công ty A đồng đều hơn.", "A", "Khoảng biến thiên đo độ chênh lệch cực đại."),
                make_mcq(10, "VD", "Cho biết $Q_3 = 45$ và $\\Delta_Q = 12$. Giá trị của $Q_1$ bằng:", "33", "57", "24", "30", "A", "$Q_1 = Q_3 - \\Delta_Q = 45 - 12 = 33$."),
                make_mcq(11, "VDC", "Mẫu số liệu có $n = 60$. Nhóm chứa $Q_3$ là $[60; 70)$ có tần số $m = 15$ và tần số tích lũy trước đó là 40. Tứ phân vị thứ ba $Q_3$ bằng:", "63.33", "65.0", "64.2", "66.5", "A", "$Q_3 = 60 + \\frac{45 - 40}{15} \\times 10 = 60 + \\frac{5}{15} \\times 10 = 60 + 3.33 = 63.33$."),
                make_mcq(12, "VDC", "Khi dữ liệu có chứa giá trị ngoại lệ rất lớn, số đo độ phân tán nào sau đây đáng tin cậy hơn?", "Khoảng tứ phân vị $\\Delta_Q$.", "Khoảng biến thiên $R$.", "Hiệu giá trị lớn nhất và nhỏ nhất.", "Phương sai chưa hiệu chỉnh.", "A", "Khoảng tứ phân vị loại bỏ 25% giá trị thấp nhất và 25% cao nhất nên không bị ảnh hưởng bởi giá trị ngoại lệ.")
            ]
            tfs = [
                make_tf(1, "Bảng thống kê khối lượng (gam) của 60 quả cam: $[100; 120): 10; [120; 140): 20; [140; 160): 20; [160; 180): 10$.", [
                    ("a", "Khoảng biến thiên của mẫu số liệu là $R = 80$ gam.", True, "$180 - 100 = 80$ gam."),
                    ("b", "Cỡ mẫu là $n = 60$.", True, "$10 + 20 + 20 + 10 = 60$."),
                    ("c", "Vị trí tứ phân vị thứ nhất $Q_1$ tương ứng với giá trị thứ 15.", True, "$60 / 4 = 15$."),
                    ("d", "Nhóm chứa $Q_1$ là nhóm $[120; 140)$.", True, "Nhóm 1 có 10, nhóm 2 tích lũy đến 30 nên chứa giá trị thứ 15.")
                ]),
                make_tf(2, "Cho mẫu số liệu ghép nhóm về điểm kiểm tra có $Q_1 = 6.2$ và $Q_3 = 8.6$.", [
                    ("a", "Khoảng tứ phân vị của điểm kiểm tra là $\\Delta_Q = 2.4$.", True, "$8.6 - 6.2 = 2.4$."),
                    ("b", "50% số học sinh có điểm thi ở mức giữa dao động trong khoảng từ 6.2 đến 8.6.", True, "Ý nghĩa của tứ phân vị."),
                    ("c", "Ngưỡng dưới để xác định giá trị ngoại lệ là $Q_1 - 1.5\\Delta_Q = 6.2 - 3.6 = 2.6$.", True, "Công thức Tukey xác định ngoại lệ."),
                    ("d", "Một học sinh được 2.0 điểm sẽ bị coi là một giá trị ngoại lệ.", True, "Vì $2.0 < 2.6$.")
                ]),
                make_tf(3, "So sánh thời gian hoàn thành một sản phẩm của 2 công nhân A và B trong 30 ngày.", [
                    ("a", "Nếu công nhân A có $R = 15$ phút và B có $R = 25$ phút thì thời gian làm việc của công nhân A ít biến động hơn.", True, "Độ biến thiên nhỏ hơn."),
                    ("b", "Khoảng biến thiên chỉ phụ thuộc vào 2 giá trị đầu mút của nhóm đầu và nhóm cuối.", True, "Chính xác."),
                    ("c", "Khoảng tứ phân vị có đơn vị đo trùng với đơn vị đo của dấu hiệu nghiên cứu.", True, "Đúng."),
                    ("d", "Nếu tất cả các giá trị của mẫu số liệu cùng nhân với 2 thì khoảng biến thiên không đổi.", False, "Khoảng biến thiên cũng sẽ nhân lên gấp 2 lần.")
                ]),
                make_tf(4, "Một mẫu số liệu có $n = 40$. Nhóm $[10; 20)$ chứa $Q_1$ có tần số $m_1 = 10$, tần số tích lũy nhóm trước bằng 5.", [
                    ("a", "Độ dài nhóm bằng 10.", True, "$20 - 10 = 10$."),
                    ("b", "Vị trí của $Q_1$ ứng với $n/4 = 10$.", True, "$40 / 4 = 10$."),
                    ("c", "Tứ phân vị thứ nhất là $Q_1 = 10 + \\frac{10 - 5}{10} \\times 10 = 15$.", True, "$10 + 5 = 15$."),
                    ("d", "Tứ phân vị $Q_1$ luôn luôn trùng với một giá trị có trong mẫu số liệu.", False, "Tứ phân vị của mẫu ghép nhóm là giá trị xấp xỉ theo công thức nội suy.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm khoảng biến thiên của mẫu số liệu ghép nhóm có các nhóm từ $[5; 10)$ đến $[30; 35)$.", 30, "$35 - 5 = 30$."),
                make_sa(2, "TH", "Cho $Q_1 = 18.5$ và $Q_3 = 29.5$. Tính khoảng tứ phân vị $\\Delta_Q$.", 11.0, "$29.5 - 18.5 = 11.0$."),
                make_sa(3, "TH", "Mẫu số liệu có cỡ mẫu $n = 100$. Nhóm chứa tứ phân vị thứ ba $Q_3$ ứng với giá trị thứ bao nhiêu?", 75, "$3 \\times 100 / 4 = 75$."),
                make_sa(4, "VD", "Biết $\\Delta_Q = 6.8$ và $Q_1 = 14.2$. Tính giá trị của $Q_3$.", 21.0, "$14.2 + 6.8 = 21.0$."),
                make_sa(5, "VD", "Mẫu số liệu có $n = 40$. Nhóm $[20; 30)$ chứa $Q_3$ có tần số bằng 10 và tần số tích lũy trước đó bằng 25. Tính $Q_3$.", 25.0, "$Q_3 = 20 + \\frac{30 - 25}{10} \\times 10 = 25.0$."),
                make_sa(6, "VDC", "Cho mẫu số liệu có $Q_1 = 10.0$ và $Q_3 = 20.0$. Tính ngưỡng dưới để xác định giá trị ngoại lệ ($Q_1 - 1.5\\Delta_Q$).", -5.0, "$\\Delta_Q = 10.0$. Ngưỡng dưới: $10.0 - 1.5(10.0) = -5.0$.")
            ]

    elif lnum == 10:
        # BÀI 10: PHƯƠNG SAI VÀ ĐỘ LỆCH CHUẨN CỦA MẪU SỐ LIỆU GHÉP NHÓM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Giá trị đại diện $c_i$ của nhóm số liệu $[a_i; a_{i+1})$ được tính bằng công thức:", "$c_i = \\frac{a_i + a_{i+1}}{2}$", "$c_i = a_{i+1} - a_i$", "$c_i = a_i \\times a_{i+1}$", "$c_i = \\sqrt{a_i a_{i+1}}$", "A", "Giá trị đại diện là trung bình cộng hai đầu mút của nhóm."),
                make_mcq(2, "NB", "Độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm là:", "Căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$.", "Bình phương của phương sai: $s = (s^2)^2$.", "Nghịch đảo của phương sai.", "Hiệu của giá trị lớn nhất và nhỏ nhất.", "A", "Định nghĩa độ lệch chuẩn."),
                make_mcq(3, "NB", "Số đặc trưng nào sau đây đo độ phân tán của mẫu số liệu quanh giá trị trung bình?", "Phương sai và độ lệch chuẩn.", "Số trung bình.", "Mốt.", "Trung vị.", "A", "Phương sai và độ lệch chuẩn đo độ phân tán quanh giá trị trung bình."),
                make_mcq(4, "NB", "Giá trị đại diện của nhóm $[20; 30)$ là:", "25", "10", "20", "30", "A", "$(20 + 30)/2 = 25$."),
                make_mcq(5, "TH", "Cho mẫu số liệu có phương sai $s^2 = 16$. Độ lệch chuẩn $s$ bằng:", "4", "256", "8", "2", "A", "$s = \\sqrt{16} = 4$."),
                make_mcq(6, "TH", "Cho mẫu số liệu có độ lệch chuẩn $s = 2.5$. Phương sai $s^2$ bằng:", "6.25", "5.0", "1.58", "10.0", "A", "$s^2 = (2.5)^2 = 6.25$."),
                make_mcq(7, "TH", "Mẫu số liệu ghép nhóm có các giá trị đại diện và tần số tương ứng. Công thức tính số trung bình $\\bar{x}$ là:", "$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i$", "$\\bar{x} = \\sum_{i=1}^k c_i$", "$\\bar{x} = \\frac{1}{k} \\sum_{i=1}^k c_i$", "$\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k m_i^2$", "A", "Công thức số trung bình mẫu ghép nhóm."),
                make_mcq(8, "TH", "Nếu tất cả các giá trị của một mẫu số liệu đều bằng nhau thì phương sai của mẫu số liệu đó bằng:", "0", "1", "Không xác định", "Bằng giá trị trung bình", "A", "Khi các giá trị đều bằng nhau, không có độ phân tán nên phương sai bằng 0."),
                make_mcq(9, "VD", "So sánh độ phân tán năng suất lúa của hai giống: Giống A có $s_A = 1.2$ tạ/ha, Giống B có $s_B = 2.5$ tạ/ha. Khẳng định nào sau đây đúng?", "Giống A có năng suất ổn định và đồng đều hơn giống B.", "Giống B có năng suất ổn định hơn giống A.", "Hai giống có độ ổn định như nhau.", "Giống B có năng suất trung bình cao hơn giống A.", "A", "Độ lệch chuẩn càng nhỏ thì dữ liệu càng tập trung, độ ổn định càng cao."),
                make_mcq(10, "VD", "Cho mẫu số liệu có $\\sum m_i c_i^2 = 2500$, cỡ mẫu $n = 50$, số trung bình $\\bar{x} = 6$. Phương sai $s^2$ của mẫu số liệu bằng:", "14", "50", "36", "16", "A", "$s^2 = \\frac{2500}{50} - 6^2 = 50 - 36 = 14$."),
                make_mcq(11, "VDC", "Một nhà đầu tư theo dõi lợi suất của hai quỹ tài chính trong 20 quý: Quỹ X có $\\bar{x} = 12\\%, s_X = 2\\%$; Quỹ Y có $\\bar{y} = 12\\%, s_Y = 5\\%$. Nhà đầu tư muốn mức lợi suất ổn định ít rủi ro hơn thì nên chọn:", "Quỹ X vì có cùng tỷ suất sinh lời nhưng độ lệch chuẩn thấp hơn (ít rủi ro hơn).", "Quỹ Y vì có độ lệch chuẩn cao hơn.", "Cả hai quỹ có mức độ rủi ro như nhau.", "Không đủ dữ kiện kết luận.", "A", "Trong tài chính, độ lệch chuẩn đo lường mức độ rủi ro; độ lệch chuẩn nhỏ hơn nghĩa là ít rủi ro hơn."),
                make_mcq(12, "VDC", "Nếu ta cộng thêm một hằng số $c = 5$ vào tất cả các giá trị của mẫu số liệu thì phương sai của mẫu số liệu mới sẽ:", "Không thay đổi.", "Tăng thêm 5.", "Tăng thêm 25.", "Tăng lên gấp 5 lần.", "A", "Tịnh tiến toàn bộ dữ liệu thêm một hằng số thì độ phân tán không đổi, phương sai không đổi.")
            ]
            tfs = [
                make_tf(1, "Xét bảng số liệu ghép nhóm về điểm kiểm tra: $[4; 6): 5; [6; 8): 10; [8; 10): 5$.", [
                    ("a", "Giá trị đại diện của các nhóm lần lượt là 5, 7, 9.", True, "Trung bình cộng các đầu mút."),
                    ("b", "Cỡ mẫu là $n = 5 + 10 + 5 = 20$.", True, "Chính xác."),
                    ("c", "Số trung bình của mẫu là $\\bar{x} = \\frac{5(5) + 10(7) + 5(9)}{20} = 7.0$.", True, "$\\frac{25 + 70 + 45}{20} = \\frac{140}{20} = 7.0$."),
                    ("d", "Phương sai của mẫu số liệu bằng 1.0.", True, "$s^2 = \\frac{5(5-7)^2 + 10(7-7)^2 + 5(9-7)^2}{20} = \\frac{5(4) + 0 + 5(4)}{20} = \\frac{40}{20} = 2.0$ (Mệnh đề sai).")
                ]),
                make_tf(2, "Cho mẫu số liệu có cỡ mẫu $n = 40$, số trung bình $\\bar{x} = 10$, $\\sum m_i c_i^2 = 4360$.", [
                    ("a", "Số trung bình $\\bar{x} = 10$.", True, "Giả thiết cho."),
                    ("b", "Giá trị $\\frac{1}{n}\\sum m_i c_i^2 = \\frac{4360}{40} = 109$.", True, "$4360 / 40 = 109$."),
                    ("c", "Phương sai của mẫu số liệu là $s^2 = 109 - 10^2 = 9$.", True, "$109 - 100 = 9$."),
                    ("d", "Độ lệch chuẩn của mẫu số liệu là $s = 3$.", True, "$s = \\sqrt{9} = 3$.")
                ]),
                make_tf(3, "So sánh độ phân tán về chiều cao của học sinh hai lớp 12C và 12D.", [
                    ("a", "Độ lệch chuẩn có cùng đơn vị đo với chiều cao (cm).", True, "Độ lệch chuẩn cùng đơn vị đo với dữ liệu ban đầu."),
                    ("b", "Phương sai có đơn vị đo là cm$^2$.", True, "Phương sai là bình phương độ lệch nên có đơn vị là cm$^2$."),
                    ("c", "Nếu lớp 12C có $s = 3.2$ cm và lớp 12D có $s = 5.1$ cm thì chiều cao của học sinh lớp 12C đồng đều hơn lớp 12D.", True, "Độ lệch chuẩn nhỏ hơn thể hiện sự đồng đều hơn."),
                    ("d", "Nếu ta đổi đơn vị đo chiều cao từ cm sang mét thì phương sai giảm đi 100 lần.", False, "Đổi từ cm sang m thì chia cho 100, phương sai chia cho $100^2 = 10000$ lần.")
                ]),
                make_tf(4, "Một quy trình sản xuất linh kiện điện tử kiểm tra đường kính trục (mm) trên 50 sản phẩm.", [
                    ("a", "Độ lệch chuẩn đo mức độ sai lệch của đường kính so với đường kính trung bình thiết kế.", True, "Ý nghĩa thực tiễn trong quản lý chất lượng."),
                    ("b", "Dây chuyền máy móc hoạt động càng ổn định thì độ lệch chuẩn của sản phẩm càng nhỏ.", True, "Đúng."),
                    ("c", "Phương sai có thể nhận giá trị âm nếu dữ liệu có nhiều số âm.", False, "Phương sai là trung bình của các bình phương độ lệch nên luôn không âm ($s^2 \\ge 0$)."),
                    ("d", "Độ lệch chuẩn luôn lớn hơn hoặc bằng 0.", True, "$s = \\sqrt{s^2} \\ge 0$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm giá trị đại diện của nhóm số liệu $[15; 25)$.", 20, "$(15 + 25) / 2 = 20$."),
                make_sa(2, "TH", "Cho mẫu số liệu có phương sai $s^2 = 2.25$. Tính độ lệch chuẩn $s$.", 1.5, "$\\sqrt{2.25} = 1.5$."),
                make_sa(3, "TH", "Cho mẫu số liệu có độ lệch chuẩn $s = 3.2$. Tính phương sai $s^2$.", 10.24, "$3.2^2 = 10.24$."),
                make_sa(4, "VD", "Mẫu số liệu có $n = 50$, $\\sum m_i c_i^2 = 5200$, số trung bình $\\bar{x} = 10$. Tính phương sai $s^2$.", 4.0, "$s^2 = 5200/50 - 100 = 104 - 100 = 4.0$."),
                make_sa(5, "VD", "Mẫu số liệu có $n = 100$, $\\sum m_i c_i^2 = 26500$, số trung bình $\\bar{x} = 16$. Tính độ lệch chuẩn $s$.", 3.0, "$s^2 = 265 - 256 = 9 \\Rightarrow s = 3.0$."),
                make_sa(6, "VDC", "Hai xạ thủ bắn bia: Xạ thủ 1 có $s_1 = 1.2$, Xạ thủ 2 có $s_2 = 0.8$. Tỉ số giữa phương sai của xạ thủ 1 và phương sai của xạ thủ 2 bằng bao nhiêu?", 2.25, "$s_1^2 / s_2^2 = (1.2 / 0.8)^2 = (1.5)^2 = 2.25$.")
            ]
        else:
            # EXAM 2: BÀI 10
            mcqs = [
                make_mcq(1, "NB", "Trong mẫu số liệu ghép nhóm, công thức tính phương sai $s^2$ là:", "$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i c_i^2 - (\\bar{x})^2$", "$s^2 = \\frac{1}{n}\\sum_{i=1}^k m_i c_i - \\bar{x}$", "$s^2 = \\sqrt{\\frac{1}{n}\\sum_{i=1}^k m_i c_i^2}$", "$s^2 = \\sum_{i=1}^k m_i (c_i - \\bar{x})$", "A", "Công thức phương sai mẫu ghép nhóm."),
                make_mcq(2, "NB", "Độ lệch chuẩn $s$ có đơn vị đo:", "Cùng đơn vị đo với mẫu số liệu ban đầu.", "Bằng bình phương đơn vị đo ban đầu.", "Không có đơn vị đo.", "Bằng căn bậc ba đơn vị đo ban đầu.", "A", "Độ lệch chuẩn cùng đơn vị đo với số liệu."),
                make_mcq(3, "NB", "Giá trị đại diện của nhóm $[a; b)$ là:", "$\\frac{a+b}{2}$", "$b - a$", "$a \\times b$", "$\\frac{b-a}{2}$", "A", "Trung bình cộng hai đầu mút."),
                make_mcq(4, "NB", "Phương sai $s^2$ luôn thỏa mãn điều kiện:", "$s^2 \\ge 0$", "$s^2 > 1$", "$s^2 \\le 0$", "$s^2 \\in [-1; 1]$", "A", "Phương sai luôn không âm."),
                make_mcq(5, "TH", "Phương sai của mẫu số liệu là $s^2 = 0.49$. Độ lệch chuẩn $s$ bằng:", "0.7", "0.07", "0.24", "0.49", "A", "$\\sqrt{0.49} = 0.7$."),
                make_mcq(6, "TH", "Độ lệch chuẩn của một lớp học là $s = 1.4$. Phương sai tương ứng là:", "1.96", "2.8", "0.7", "1.4", "A", "$1.4^2 = 1.96$."),
                make_mcq(7, "TH", "Giá trị đại diện của nhóm $[50; 60)$ bằng:", "55", "10", "50", "60", "A", "$(50 + 60)/2 = 55$."),
                make_mcq(8, "TH", "Đại lượng nào sau đây không phải là số đo độ phân tán?", "Số trung bình $\\bar{x}$.", "Phương sai $s^2$.", "Độ lệch chuẩn $s$.", "Khoảng biến thiên $R$.", "A", "Số trung bình là số đo xu thế trung tâm, không phải đo độ phân tán."),
                make_mcq(9, "VD", "Cho mẫu số liệu có cỡ mẫu $n = 40$, số trung bình $\\bar{x} = 5$, $\\sum m_i c_i^2 = 1060$. Phương sai của mẫu số liệu bằng:", "1.5", "2.5", "3.0", "4.0", "A", "$s^2 = \\frac{1060}{40} - 5^2 = 26.5 - 25 = 1.5$."),
                make_mcq(10, "VD", "Khi kiểm tra cân nặng của gà xuất chuồng ở hai trang trại: Trang trại A có $s_A = 0.15$ kg, trang trại B có $s_B = 0.35$ kg. Kết luận nào đúng?", "Gà ở trang trại A có độ đồng đều về cân nặng cao hơn trang trại B.", "Gà ở trang trại B đồng đều hơn.", "Cân nặng trung bình ở trang trại B lớn hơn.", "Cả hai trang trại có chất lượng gà như nhau.", "A", "Độ lệch chuẩn nhỏ hơn nghĩa là độ đồng đều cao hơn."),
                make_mcq(11, "VDC", "Nếu nhân tất cả các giá trị của một mẫu số liệu với số dương $k = 3$ thì độ lệch chuẩn của mẫu số liệu mới sẽ:", "Tăng lên gấp 3 lần.", "Tăng lên gấp 9 lần.", "Không đổi.", "Tăng lên 3 đơn vị.", "A", "Khi nhân dữ liệu với $k$, phương sai nhân với $k^2 = 9$, độ lệch chuẩn nhân với $k = 3$."),
                make_mcq(12, "VDC", "Trong sản xuất công nghiệp, tiêu chuẩn 6-Sigma yêu cầu khoảng dung sai cho phép phải rộng ít nhất gấp 6 lần độ lệch chuẩn ($6s$). Nếu dung sai là $\\pm 0.3$ mm (độ rộng 0.6 mm) thì độ lệch chuẩn tối đa cho phép của máy là:", "$s \\le 0.1$ mm", "$s \\le 0.05$ mm", "$s \\le 0.2$ mm", "$s \\le 0.3$ mm", "A", "$6s \\le 0.6 \\Rightarrow s \\le 0.1$ mm.")
            ]
            tfs = [
                make_tf(1, "Một mẫu số liệu ghép nhóm có bảng tần số: $[0; 4): 2; [4; 8): 6; [8; 12): 2$.", [
                    ("a", "Giá trị đại diện của 3 nhóm lần lượt là 2, 6, 10.", True, "Chính xác."),
                    ("b", "Cỡ mẫu là $n = 10$.", True, "$2 + 6 + 2 = 10$."),
                    ("c", "Số trung bình là $\\bar{x} = \\frac{2(2) + 6(6) + 2(10)}{10} = 6.0$.", True, "$\\frac{4 + 36 + 20}{10} = 6.0$."),
                    ("d", "Phương sai của mẫu số liệu là $s^2 = 3.2$.", True, "$s^2 = \\frac{2(2-6)^2 + 6(6-6)^2 + 2(10-6)^2}{10} = \\frac{2(16) + 0 + 2(16)}{10} = \\frac{64}{10} = 6.4$ (Mệnh đề sai).")
                ]),
                make_tf(2, "Cho mẫu số liệu có $n = 50$, số trung bình $\\bar{x} = 20$, phương sai $s^2 = 16$.", [
                    ("a", "Độ lệch chuẩn của mẫu số liệu là $s = 4$.", True, "$\\sqrt{16} = 4$."),
                    ("b", "Giá trị $\\frac{1}{n}\\sum m_i c_i^2 = s^2 + (\\bar{x})^2 = 16 + 400 = 416$.", True, "Biến đổi đại số."),
                    ("c", "Tổng $\\sum m_i c_i^2 = 416 \\times 50 = 20800$.", True, "Chính xác."),
                    ("d", "Nếu mỗi giá trị tăng thêm 2 đơn vị thì phương sai mới bằng 18.", False, "Cộng thêm hằng số thì phương sai không đổi, vẫn bằng 16.")
                ]),
                make_tf(3, "Xét hai người lái xe an toàn A và B trong 100 chuyến đi: Người A có tốc độ trung bình 50 km/h, $s_A = 4$ km/h; Người B có tốc độ trung bình 50 km/h, $s_B = 10$ km/h.", [
                    ("a", "Hai người lái xe có cùng tốc độ trung bình.", True, "Cùng bằng 50 km/h."),
                    ("b", "Người A duy trì tốc độ ổn định hơn người B.", True, "Độ lệch chuẩn $s_A = 4 < s_B = 10$."),
                    ("c", "Người B thường xuyên có những thời điểm chạy quá nhanh hoặc quá chậm hơn người A.", True, "Ý nghĩa của độ phân tán lớn."),
                    ("d", "Người B lái xe an toàn hơn người A.", False, "Người lái xe duy trì tốc độ ổn định (A) an toàn hơn.")
                ]),
                make_tf(4, "Về các tính chất toán học của phương sai và độ lệch chuẩn.", [
                    ("a", "Phương sai luôn không âm ($s^2 \\ge 0$).", True, "Đúng."),
                    ("b", "Phương sai bằng 0 khi và chỉ khi mọi số liệu trong mẫu đều bằng nhau.", True, "Chính xác."),
                    ("c", "Độ lệch chuẩn càng lớn thì các giá trị của mẫu số liệu càng phân tán xa giá trị trung bình.", True, "Ý nghĩa cơ bản."),
                    ("d", "Phương sai bị ảnh hưởng bởi giá trị ngoại lệ.", True, "Do có chứa bình phương độ lệch nên rất nhạy cảm với ngoại lệ.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Tìm giá trị đại diện của nhóm $[40; 60)$.", 50, "$(40 + 60) / 2 = 50$."),
                make_sa(2, "TH", "Cho mẫu số liệu có phương sai $s^2 = 64$. Tính độ lệch chuẩn $s$.", 8, "$\\sqrt{64} = 8$."),
                make_sa(3, "TH", "Cho mẫu số liệu có độ lệch chuẩn $s = 0.5$. Tính phương sai $s^2$.", 0.25, "$0.5^2 = 0.25$."),
                make_sa(4, "VD", "Mẫu số liệu có $n = 20$, $\\sum m_i c_i^2 = 740$, số trung bình $\\bar{x} = 6$. Tính phương sai $s^2$.", 1.0, "$740/20 - 36 = 37 - 36 = 1.0$."),
                make_sa(5, "VD", "Mẫu số liệu có $n = 50$, $\\sum m_i c_i^2 = 3280$, $\\bar{x} = 8$. Tính độ lệch chuẩn $s$. (Làm tròn đến 2 chữ số thập phân)", 1.26, "$s^2 = 3280/50 - 64 = 65.6 - 64 = 1.6 \\Rightarrow s = \\sqrt{1.6} \\approx 1.26$.", ["1.26", "1.3"]),
                make_sa(6, "VDC", "Biết độ lệch chuẩn của mẫu số liệu là $s = 4$. Nếu nhân tất cả giá trị với 2.5 thì độ lệch chuẩn mới bằng bao nhiêu?", 10.0, "$4 \\times 2.5 = 10.0$.")
            ]

    return mcqs, tfs, sas
