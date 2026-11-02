# -*- coding: utf-8 -*-
"""
Chương 8 Lớp 10: Đại số tổ hợp.
Bao gồm:
- Bài 23: Quy tắc đếm
- Bài 24: Hoán vị, chỉnh hợp và tổ hợp
- Bài 25: Nhị thức Newton
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch8_lesson(lnum, k):
    if lnum == 23:
        # BÀI 23: QUY TẮC ĐẾM
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Giả sử một công việc có thể thực hiện theo một trong hai phương án độc lập $A$ hoặc $B$. Phương án $A$ có $m$ cách thực hiện, phương án $B$ có $n$ cách thực hiện (hai phương án không trùng nhau cách nào). Khi đó số cách hoàn thành công việc là",
                         "$m + n$", "$m \\cdot n$", "$m^n$", "$n^m$",
                         "A", "Quy tắc cộng SGK."),
                make_mcq(2, "NB", "Giả sử một công việc phải trải qua hai công đoạn liên tiếp 1 và 2. Công đoạn 1 có $m$ cách thực hiện, với mỗi cách của công đoạn 1 có $n$ cách thực hiện công đoạn 2. Số cách hoàn thành công việc là",
                         "$m \\cdot n$", "$m + n$", "$m^n$", "$n!$",
                         "A", "Quy tắc nhân SGK."),
                make_mcq(3, "NB", "Một bạn học sinh có 4 chiếc áo sơ mi khác nhau và 3 chiếc quần âu khác nhau. Số cách chọn một bộ quần áo (gồm 1 áo và 1 quần) là",
                         "12", "7", "24", "1",
                         "A", "Áp dụng quy tắc nhân: $4 \\times 3 = 12$ cách."),
                make_mcq(4, "NB", "Trên bàn có 5 quyển sách Toán khác nhau và 6 quyển sách Ngữ văn khác nhau. Số cách chọn 1 quyển sách bất kì để đọc là",
                         "11", "30", "5", "6",
                         "A", "Áp dụng quy tắc cộng: $5 + 6 = 11$ cách."),
                make_mcq(5, "TH", "Từ các chữ số $1, 2, 3, 4, 5$, có thể lập được bao nhiêu số tự nhiên có 3 chữ số (các chữ số có thể giống nhau)?",
                         "125", "60", "15", "243",
                         "A", "Mỗi vị trí có 5 cách chọn: $5 \\times 5 \\times 5 = 125$ số."),
                make_mcq(6, "TH", "Có bao nhiêu cách đi từ thành phố $A$ đến thành phố $C$ qua thành phố trung gian $B$, biết có 3 con đường từ $A$ đến $B$ và 4 con đường từ $B$ đến $C$?",
                         "12", "7", "24", "64",
                         "A", "Áp dụng quy tắc nhân: $3 \\times 4 = 12$ cách."),
                make_mcq(7, "TH", "Một quán ăn có thực đơn gồm 4 món khai vị, 5 món chính và 3 món tráng miệng. Một bữa ăn đầy đủ gồm 1 món khai vị, 1 món chính và 1 món tráng miệng. Có bao nhiêu sự lựa chọn bữa ăn khác nhau?",
                         "60", "12", "20", "120",
                         "A", "Quy tắc nhân: $4 \\times 5 \\times 3 = 60$ cách."),
                make_mcq(8, "TH", "Từ các chữ số $0, 1, 2, 3, 4, 5$, có thể lập được bao nhiêu số tự nhiên chẵn có 1 chữ số?",
                         "3", "6", "2", "4",
                         "A", "Các số chẵn 1 chữ số là 0, 2, 4 (3 số)."),
                make_mcq(9, "VD", "Từ các chữ số $1, 2, 3, 4, 5, 6$, có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
                         "120", "216", "20", "720",
                         "A", "Chữ số hàng trăm có 6 cách, chục có 5 cách, đơn vị có 4 cách: $6 \\times 5 \\times 4 = 120$ số."),
                make_mcq(10, "VD", "Biển đăng ký xe máy của một tỉnh gồm 2 chữ cái lấy từ 26 chữ cái tiếng Anh (từ A đến Z) theo sau bởi 4 chữ số (mỗi chữ số từ 0 đến 9). Có bao nhiêu biển số xe máy khác nhau có thể tạo thành?",
                         "$26^2 \\times 10^4$",
                         "$26 \\times 25 \\times 10^4$",
                         "$26^2 \\times 9 \\times 10^3$",
                         "$26 \\times 10^4$",
                         "A", "Mỗi vị trí chữ cái có 26 cách, mỗi chữ số có 10 cách: $26 \\times 26 \\times 10 \\times 10 \\times 10 \\times 10 = 26^2 \\times 10^4$."),
                make_mcq(11, "VDC", "Có bao nhiêu số tự nhiên có 4 chữ số đôi một khác nhau được lập từ các chữ số $0, 1, 2, 3, 4, 5$ sao cho số đó chia hết cho 5?",
                         "108", "120", "60", "96",
                         "A", "TH1: Tận cùng là 0. Có $5 \\times 4 \\times 3 = 60$ số. TH2: Tận cùng là 5. Chữ số đầu tiên có 4 cách (khác 0 và 5), 2 vị trí tiếp có $4 \\times 3 = 12$ cách. Số cách là $4 \\times 4 \\times 3 = 48$ số. Tổng cộng: $60 + 48 = 108$ số."),
                make_mcq(12, "VDC", "Một mật khẩu điện thoại gồm 6 kí tự: 2 kí tự đầu là các chữ cái in hoa phân biệt lấy từ 5 chữ cái $\\{A, B, C, D, E\\}$, 4 kí tự tiếp theo là các chữ số bất kì từ $0$ đến $9$. Có bao nhiêu mật khẩu hợp lệ?",
                         "$200\\,000$", "$100\\,000$", "$300\\,000$", "$250\\,000$",
                         "A", "Chọn 2 chữ cái phân biệt: $5 \\times 4 = 20$ cách. Chọn 4 chữ số bất kì: $10^4 = 10\\,000$ cách. Tổng số mật khẩu: $20 \\times 10\\,000 = 200\\,000$ mật khẩu.")
            ]
            tfs = [
                make_tf(1, "Từ các chữ số $1, 2, 3, 4, 5$, người ta muốn lập các số tự nhiên có 3 chữ số. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số các số tự nhiên có 3 chữ số bất kì (các chữ số có thể giống nhau) là $5^3 = 125$ số.", True, "$5 \\times 5 \\times 5 = 125$."),
                    ("b", "Số các số tự nhiên có 3 chữ số đôi một khác nhau là $60$ số.", True, "$5 \\times 4 \\times 3 = 60$ số."),
                    ("c", "Số các số tự nhiên chẵn có 3 chữ số đôi một khác nhau là $24$ số.", True, "Hàng đơn vị có 2 cách chọn (2 hoặc 4). Hàng trăm có 4 cách, hàng chục có 3 cách: $2 \\times 4 \\times 3 = 24$ số."),
                    ("d", "Số các số tự nhiên lẻ có 3 chữ số đôi một khác nhau là $40$ số.", False, "Tổng số có 60 số, số chẵn có 24 số nên số lẻ có $60 - 24 = 36$ số, không phải 40.")
                ]),
                make_tf(2, "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số cách chọn 1 học sinh bất kì làm trực nhật là $35$ cách.", True, "$20 + 15 = 35$ (Quy tắc cộng)."),
                    ("b", "Số cách chọn một đôi bạn gồm 1 nam và 1 nữ tham gia thi đấu cầu lông đôi nam nữ là $300$ cách.", True, "$20 \\times 15 = 300$ (Quy tắc nhân)."),
                    ("c", "Nếu chọn 2 học sinh cùng giới tính (cùng nam hoặc cùng nữ), có tất cả $35$ cách.", False, "Số cách chọn 2 học sinh cùng giới là $C_{20}^2 + C_{15}^2 = 190 + 105 = 295$ cách."),
                    ("d", "Số cách chọn 1 bạn nam làm lớp trưởng và sau đó chọn 1 bạn nữ làm lớp phó học tập là $300$ cách.", True, "$20 \\times 15 = 300$ cách.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Một hộp bút có 6 bút bi xanh, 4 bút bi đỏ và 3 bút bi đen (các bút đôi một khác nhau). Có bao nhiêu cách chọn 1 cây bút bất kì?",
                        "13", "$6 + 4 + 3 = 13$ cách."),
                make_sa(2, "TH", "Để đi từ thành phố $A$ đến $B$ có 4 chuyến xe khách và 2 chuyến tàu hoả. Có bao nhiêu cách đi từ $A$ đến $B$?",
                        "6", "$4 + 2 = 6$ cách."),
                make_sa(3, "VD", "Có bao nhiêu số tự nhiên có 2 chữ số khác nhau lập từ các chữ số $\\{1, 2, 3, 4, 5, 6\\}$?",
                        "30", "$6 \\times 5 = 30$ số."),
                make_sa(4, "VD", "Một bài kiểm tra trắc nghiệm gồm 4 câu hỏi, mỗi câu hỏi có 4 phương án trả lời. Hỏi có bao nhiêu cách khoanh đáp án cho cả 4 câu?",
                        "256", "$4^4 = 256$ cách."),
                make_sa(5, "VDC", "Có bao nhiêu số tự nhiên chẵn có 3 chữ số đôi một khác nhau lập từ các chữ số $\\{0, 1, 2, 3, 4, 5\\}$?",
                        "52", "TH1: Tận cùng 0: $5 \\times 4 = 20$. TH2: Tận cùng 2 hoặc 4 (2 cách): hàng trăm có 4 cách, hàng chục có 4 cách: $2 \\times 4 \\times 4 = 32$. Tổng $= 20 + 32 = 52$ số."),
                make_sa(6, "VDC", "Một tủ khoá an toàn có mã số gồm 3 vòng quay, mỗi vòng có 10 chữ số từ 0 đến 9. Để thử mở khoá, người ta thử lần lượt từng mã. Nếu mỗi lần thử mất 3 giây thì cần tối đa bao nhiêu giây để mở được khoá?",
                        "3000", "Có $10^3 = 1000$ mã. Thời gian tối đa: $1000 \\times 3 = 3000\\text{ giây}$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc cộng và quy tắc nhân",
                           "Phát biểu quy tắc cộng và quy tắc nhân trong đại số tổ hợp. Nêu rõ dấu hiệu phân biệt khi nào dùng quy tắc cộng, khi nào dùng quy tắc nhân.",
                           "1. Quy tắc cộng: Nếu một công việc có thể hoàn thành theo một trong hai phương án $A$ hoặc $B$ độc lập (phương án $A$ có $m$ cách thực hiện, phương án $B$ có $n$ cách thực hiện và không có cách nào trùng nhau) thì công việc đó có $m + n$ cách hoàn thành.\\n2. Quy tắc nhân: Nếu một công việc phải trải qua hai công đoạn liên tiếp 1 và 2 (công đoạn 1 có $m$ cách thực hiện, sau khi hoàn thành công đoạn 1 thì ứng với mỗi cách đó có $n$ cách thực hiện công đoạn 2) thì công việc đó có $m \\cdot n$ cách hoàn thành.\\n3. Dấu hiệu phân biệt:\\n- Dùng quy tắc cộng khi: Các phương án độc lập nhau, chỉ cần chọn một trong các phương án là công việc đã hoàn tất ('HOẶC').\\n- Dùng quy tắc nhân khi: Công việc đòi hỏi phải trải qua nhiều bước/công đoạn liên tiếp, thiếu một bước thì công việc chưa hoàn thành ('VÀ / LIÊN TIẾP')."),
                make_essay(2, "TH", 0.5, "Ứng dụng sơ đồ cây minh hoạ quy tắc đếm",
                           "Một bạn học sinh dự định chọn trang phục cho ngày bế giảng gồm: 1 trong 2 chiếc áo (Áo trắng hoặc Áo xanh), 1 trong 3 chiếc quần (Quần đen, Quần xám hoặc Quần be) và 1 trong 2 đôi giày (Giày thể thao hoặc Giày da).\\na) Vẽ sơ đồ cây biểu diễn tất cả các cách chọn trang phục.\\nb) Sử dụng quy tắc nhân để tính tổng số bộ trang phục khác nhau.",
                           "a) Mô tả sơ đồ cây:\\n- Gốc: Bắt đầu chọn trang phục.\\n- Nhánh cấp 1 (Áo): Tách thành 2 nhánh: [Áo trắng] và [Áo xanh].\\n- Nhánh cấp 2 (Quần): Từ mỗi nhánh áo, tách tiếp thành 3 nhánh quần: [Quần đen], [Quần xám], [Quần be] (tổng cộng $2 \\times 3 = 6$ nhánh).\\n- Nhánh cấp 3 (Giày): Từ mỗi nhánh quần, tách thành 2 nhánh giày: [Giày thể thao] và [Giày da] (tổng cộng $6 \\times 2 = 12$ ngọn lá).\\nb) Áp dụng quy tắc nhân: Công việc chọn trang phục gồm 3 công đoạn liên tiếp:\\n- Công đoạn 1 (chọn áo): có 2 cách chọn.\\n- Công đoạn 2 (chọn quần): có 3 cách chọn.\\n- Công đoạn 3 (chọn giày): có 2 cách chọn.\\nTheo quy tắc nhân, tổng số cách chọn trang phục là: $N = 2 \\times 3 \\times 2 = 12$ cách kết hợp khác nhau."),
                make_essay(3, "VD", 0.5, "Bài toán đếm số tự nhiên thoả mãn điều kiện",
                           "Từ tập hợp các chữ số $X = \\{0, 1, 2, 3, 4, 5, 6\\}$, có thể lập được bao nhiêu số tự nhiên:\\na) Có 4 chữ số tuỳ ý?\\nb) Có 4 chữ số đôi một khác nhau và là số lẻ?",
                           "Gọi số cần tìm có dạng $\\overline{abcd}$ với $a, b, c, d \\in X$ và $a \\ne 0$.\\na) Số có 4 chữ số tuỳ ý:\\n- Chữ số hàng nghìn $a \\ne 0$ nên có 6 cách chọn (từ 1 đến 6).\\n- Mỗi chữ số $b, c, d$ có 7 cách chọn (từ 0 đến 6).\\nSố các số lập được là: $6 \\times 7 \\times 7 \\times 7 = 6 \\times 343 = 2058$ số.\\nb) Số có 4 chữ số đôi một khác nhau và là số lẻ:\\n- Chữ số hàng đơn vị $d$ phải là chữ số lẻ: $d \\in \\{1, 3, 5\\} \\Rightarrow$ có 3 cách chọn.\\n- Chữ số hàng nghìn $a \\ne 0$ và $a \\ne d$: Tập $X$ có 7 chữ số, bỏ đi số 0 và số đã chọn cho $d$ nên $a$ có $7 - 2 = 5$ cách chọn.\\n- Chữ số hàng trăm $b \\ne a, b \\ne d$: có $7 - 2 = 5$ cách chọn (kể cả số 0).\\n- Chữ số hàng chục $c \\ne a, b, d$: có $7 - 3 = 4$ cách chọn.\\nTheo quy tắc nhân, số các số lẻ thoả mãn yêu cầu là: $3 \\times 5 \\times 5 \\times 4 = 300$ số."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế thiết kế hệ thống mã vạch sản phẩm",
                           "Một siêu thị mini áp dụng hệ thống mã vạch nội bộ gồm 8 chữ số để quản lý sản phẩm. Hai chữ số đầu tiên là mã ngành hàng (lấy từ các số từ 10 đến 99, tức chữ số đầu khác 0). Ba chữ số tiếp theo là mã nhà sản xuất (chữ số bất kì từ 0 đến 9). Ba chữ số cuối cùng là mã định danh sản phẩm, trong đó chữ số cuối cùng là chữ số kiểm tra $C$ được tính theo thuật toán kiểm lỗi.\\na) Có bao nhiêu mã ngành hàng khác nhau?\\nb) Ứng với mỗi mã ngành hàng, có bao nhiêu mã nhà sản xuất khác nhau?\\nc) Nếu không kể chữ số kiểm tra (tức mã định danh gồm 2 chữ số tự do), hãy tính tổng số lượng mặt hàng tối đa mà siêu thị có thể gắn mã phân biệt.",
                           "a) Mã ngành hàng gồm 2 chữ số $\\overline{a_1 a_2}$ với $a_1 \\in \\{1, 2, ..., 9\\}$ (9 cách) và $a_2 \\in \\{0, 1, ..., 9\\}$ (10 cách).\\nSố mã ngành hàng là: $9 \\times 10 = 90$ mã (tương ứng các số từ 10 đến 99).\\nb) Mã nhà sản xuất gồm 3 chữ số $\\overline{b_1 b_2 b_3}$, mỗi vị trí đều có 10 cách chọn (từ 0 đến 9).\\nSố mã nhà sản xuất có thể tạo ra là: $10 \\times 10 \\times 10 = 1000$ mã (từ 000 đến 999).\\nc) Mã định danh sản phẩm tự do gồm 2 chữ số $\\overline{c_1 c_2}$ (chữ số thứ 3 được xác định duy nhất từ thuật toán kiểm tra lỗi). Số cách chọn 2 chữ số này là: $10 \\times 10 = 100$ mã.\\nTổng số lượng mặt hàng tối đa mà hệ thống có thể quản lý và gắn mã phân biệt là tích của các công đoạn chọn mã:\\n$N = 90 \\times 1000 \\times 100 = 9\\,000\\,000$ mặt hàng.\\nNhư vậy hệ thống mã vạch này đáp ứng được quy mô quản lý tới $9$ triệu sản phẩm phân biệt.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Số cách chọn một đồ vật từ hai nhóm đồ vật khác nhau, nhóm 1 có $a$ đồ vật và nhóm 2 có $b$ đồ vật (không có đồ vật nào chung) là",
                         "$a + b$", "$a \\cdot b$", "$a^b$", "$a! + b!$",
                         "A", "Quy tắc cộng."),
                make_mcq(2, "NB", "Công việc gồm 3 công đoạn liên tiếp, công đoạn 1 có $n_1$ cách, công đoạn 2 có $n_2$ cách, công đoạn 3 có $n_3$ cách. Số cách thực hiện là",
                         "$n_1 \\cdot n_2 \\cdot n_3$",
                         "$n_1 + n_2 + n_3$",
                         "$(n_1 \\cdot n_2) + n_3$",
                         "$n_1^{n_2 \\cdot n_3}$",
                         "A", "Quy tắc nhân cho 3 công đoạn."),
                make_mcq(3, "NB", "Có 3 loại nước hoa quả và 4 loại bánh ngọt. Số cách chọn 1 phần ăn nhẹ gồm 1 loại nước và 1 loại bánh là",
                         "12", "7", "1", "64",
                         "A", "$3 \\times 4 = 12$ cách."),
                make_mcq(4, "NB", "Trong một hộp có 7 viên bi đỏ và 8 viên bi xanh. Có bao nhiêu cách chọn ra 1 viên bi?",
                         "15", "56", "7", "8",
                         "A", "Quy tắc cộng: $7 + 8 = 15$ cách."),
                make_mcq(5, "TH", "Có bao nhiêu số tự nhiên có hai chữ số?",
                         "90", "99", "89", "100",
                         "A", "Hàng chục có 9 cách, hàng đơn vị có 10 cách: $9 \\times 10 = 90$ số."),
                make_mcq(6, "TH", "Từ các số $1, 3, 5, 7, 9$, có thể lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau?",
                         "60", "125", "15", "20",
                         "A", "$5 \\times 4 \\times 3 = 60$ số."),
                make_mcq(7, "TH", "Một rạp chiếu phim có 4 cửa ra vào. Hỏi một khán giả có bao nhiêu cách vào rạp bằng một cửa và ra khỏi rạp bằng một cửa khác?",
                         "12", "16", "8", "7",
                         "A", "Vào có 4 cách, ra cửa khác có 3 cách: $4 \\times 3 = 12$ cách."),
                make_mcq(8, "TH", "Có bao nhiêu số tự nhiên lẻ có hai chữ số?",
                         "45", "50", "90", "40",
                         "A", "Hàng chục có 9 cách, hàng đơn vị có 5 cách lẻ: $9 \\times 5 = 45$ số."),
                make_mcq(9, "VD", "Có bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau được lập từ các chữ số $\\{0, 1, 2, 3, 4\\}$?",
                         "48", "60", "64", "100",
                         "A", "Hàng trăm có 4 cách (khác 0), hàng chục có 4 cách, hàng đơn vị có 3 cách: $4 \\times 4 \\times 3 = 48$ số."),
                make_mcq(10, "VD", "Một đề thi trắc nghiệm gồm 5 câu hỏi, mỗi câu có 4 phương án trả lời và chỉ có 1 phương án đúng. Có bao nhiêu cách chọn đáp án sao cho có đúng 1 câu trả lời đúng?",
                         "405", "15", "256", "1024",
                         "A", "Chọn câu đúng có 5 cách (chọn đúng có 1 cách). 4 câu còn lại trả lời sai: mỗi câu có 3 cách chọn sai. Số cách: $5 \\times 1 \\times 3^4 = 5 \\times 81 = 405$ cách."),
                make_mcq(11, "VDC", "Có bao nhiêu số tự nhiên gồm 4 chữ số khác nhau chia hết cho 2 được lập từ các chữ số $\\{0, 1, 2, 3, 4, 5\\}$?",
                         "156", "120", "180", "144",
                         "A", "TH1: Tận cùng 0: $5 \\times 4 \\times 3 = 60$ số. TH2: Tận cùng 2 hoặc 4 (2 cách): hàng nghìn có 4 cách (khác 0), hàng trăm có 4 cách, hàng chục có 3 cách: $2 \\times 4 \\times 4 \\times 3 = 96$ số. Tổng: $60 + 96 = 156$ số."),
                make_mcq(12, "VDC", "Một giải cờ vua có 8 kỳ thủ tham gia thi đấu vòng tròn 1 lượt (mỗi kỳ thủ thi đấu đúng 1 ván với từng kỳ thủ khác). Tổng số ván cờ được diễn ra trong giải đấu là",
                         "28", "56", "64", "16",
                         "A", "Số ván cờ là số cặp kỳ thủ: $\\frac{8 \\times 7}{2} = 28$ ván."),
            ]
            tfs = [
                make_tf(1, "Cho tập chữ số $A = \\{0, 2, 4, 6, 8\\}$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số các số tự nhiên có 3 chữ số bất kì lập từ tập $A$ là $4 \\times 5 \\times 5 = 100$ số.", True, "Hàng trăm có 4 cách (khác 0), 2 hàng sau có 5 cách."),
                    ("b", "Số các số tự nhiên có 3 chữ số đôi một khác nhau lập từ $A$ là $48$ số.", True, "$4 \\times 4 \\times 3 = 48$ số."),
                    ("c", "Tất cả các số lập được từ tập $A$ đều là số chẵn.", True, "Tất cả các chữ số trong $A$ đều là số chẵn nên số tạo thành luôn chẵn."),
                    ("d", "Số các số tự nhiên có 3 chữ số khác nhau nhỏ hơn 500 là 36 số.", False, "Hàng trăm chỉ có thể là 2 hoặc 4 (2 cách). Hai hàng sau có $4 \\times 3 = 12$ cách. Số các số là $2 \\times 12 = 24$ số, không phải 36.")
                ]),
                make_tf(2, "Một lớp học có 18 học sinh giỏi Toán và 12 học sinh giỏi Văn. Không có học sinh nào vừa giỏi Toán vừa giỏi Văn. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Có tất cả 30 học sinh giỏi môn học (Toán hoặc Văn).", True, "$18 + 12 = 30$ học sinh."),
                    ("b", "Số cách chọn 1 học sinh đi thi học sinh giỏi cấp trường là $30$ cách.", True, "$18 + 12 = 30$ cách."),
                    ("c", "Số cách chọn 1 học sinh giỏi Toán và 1 học sinh giỏi Văn là $216$ cách.", True, "$18 \\times 12 = 216$ cách."),
                    ("d", "Số cách chọn một nhóm gồm 3 học sinh giỏi Toán và 1 học sinh giỏi Văn là $216$ cách.", False, "$C_{18}^3 \\times 12 = 816 \\times 12 = 9792$ cách.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Có bao nhiêu số tự nhiên có 3 chữ số?",
                        "900", "$9 \\times 10 \\times 10 = 900$ số."),
                make_sa(2, "TH", "Một cửa hàng kem có 5 hương vị kem khác nhau và 3 loại ốc quế khác nhau. Có bao nhiêu cách chọn 1 que kem gồm 1 ốc quế và 1 viên kem?",
                        "15", "$5 \\times 3 = 15$ cách."),
                make_sa(3, "VD", "Có bao nhiêu số tự nhiên chẵn có 2 chữ số đôi một khác nhau?",
                        "41", "Tận cùng 0 có 9 số. Tận cùng 2, 4, 6, 8 (4 cách): hàng chục có 8 cách: $4 \\times 8 = 32$. Tổng $= 9 + 32 = 41$ số."),
                make_sa(4, "VD", "Từ các chữ số $1, 2, 3, 4, 5, 6, 7$, có bao nhiêu số tự nhiên có 3 chữ số khác nhau bắt đầu bằng chữ số 1?",
                        "30", "$1 \\times 6 \\times 5 = 30$ số."),
                make_sa(5, "VDC", "Có bao nhiêu số tự nhiên có 4 chữ số chia hết cho 5?",
                        "1800", "Hàng nghìn có 9 cách, trăm có 10, chục có 10, đơn vị có 2 cách (0 hoặc 5): $9 \\times 10 \\times 10 \\times 2 = 1800$ số."),
                make_sa(6, "VDC", "Có bao nhiêu cách xếp 3 bạn học sinh nam và 2 bạn học sinh nữ ngồi vào một dãy ghế có 5 chỗ ngồi?",
                        "120", "Xếp 5 người vào 5 chỗ: $5! = 120$ cách."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc đếm và bài toán phân loại phương án",
                           "Trình bày phương pháp giải bài toán đếm bằng cách chia trường hợp (phân loại phương án). Nêu các yêu cầu cần đảm bảo khi phân loại trường hợp.",
                           "1. Phương pháp: Khi công việc cần đếm có nhiều tình huống phức tạp, ta chia công việc đó thành các trường hợp (phương án) nhỏ hơn để đếm riêng từng trường hợp, sau đó áp dụng quy tắc cộng để tính tổng số cách.\\n2. Các yêu cầu bắt buộc khi phân chia trường hợp:\\n- Không bỏ sót trường hợp: Tập hợp tất cả các trường hợp phải bao quát toàn bộ không gian biến cố cần đếm.\\n- Không trùng lặp: Các trường hợp phải đôi một rời nhau (không có phần tử nào xuất hiện ở hai trường hợp khác nhau).\\n- Đơn giản hoá: Việc phân chia phải giúp cho mỗi trường hợp nhỏ trở nên dễ dàng tính toán hơn bài toán gốc ban đầu."),
                make_essay(2, "TH", 0.5, "Đếm số cách đi qua các điểm trên mạng lưới đường",
                           "Một người đi du lịch muốn đi từ thành phố $A$ đến thành phố $D$. Biết rằng:\\n- Từ $A$ đến $D$ có một tuyến đường sắt đi thẳng (chỉ có 1 chuyến tàu).\\n- Từ $A$ có thể đi ô tô qua thành phố trung gian $B$ (có 3 con đường từ $A$ đến $B$ và 2 con đường từ $B$ đến $D$).\\n- Từ $A$ cũng có thể đi đường thuỷ qua bến cảng $C$ (có 2 tuyến tàu thuỷ từ $A$ đến $C$ và 3 tuyến từ $C$ đến $D$).\\nTính tổng số cách khác nhau để người đó đi từ thành phố $A$ đến $D$.",
                           "Để đi từ $A$ đến $D$, người du lịch có 3 phương án độc lập:\\n- Phương án 1: Đi thẳng bằng đường sắt: có 1 cách.\\n- Phương án 2: Đi qua thành phố trung gian $B$: Theo quy tắc nhân, số cách đi là $3 \\times 2 = 6$ cách.\\n- Phương án 3: Đi qua bến cảng trung gian $C$: Theo quy tắc nhân, số cách đi là $2 \\times 3 = 6$ cách.\\nVì ba phương án trên là hoàn toàn độc lập và không trùng nhau, theo quy tắc cộng, tổng số cách đi từ $A$ đến $D$ là:\\n$N = 1 + 6 + 6 = 13$ cách."),
                make_essay(3, "VD", 0.5, "Bài toán đếm số chia hết cho 5",
                           "Từ các chữ số của tập hợp $S = \\{0, 1, 2, 3, 4, 5, 6, 7\\}$, có thể lập được bao nhiêu số tự nhiên gồm 4 chữ số đôi một khác nhau sao cho số đó chia hết cho 5?",
                           "Gọi số cần tìm có dạng $\\overline{abcd}$ với $a, b, c, d \\in S, a \\ne 0$, các chữ số đôi một khác nhau. Số chia hết cho 5 nên chữ số tận cùng $d \\in \\{0, 5\\}$. Ta chia làm hai trường hợp:\\n- Trường hợp 1: Chữ số tận cùng $d = 0$ (có 1 cách chọn).\\nKhi đó chữ số $a \\ne 0$ hiển nhiên được thoả mãn. Chọn $a$ từ tập $\\{1, 2, ..., 7\\}$ có 7 cách chọn. Chọn $b$ từ 6 chữ số còn lại có 6 cách chọn. Chọn $c$ từ 5 chữ số còn lại có 5 cách chọn.\\nSố cách lập ở TH1 là: $1 \\times 7 \\times 6 \\times 5 = 210$ số.\\n- Trường hợp 2: Chữ số tận cùng $d = 5$ (có 1 cách chọn).\\nChữ số $a$ phải khác 0 và khác 5, nên $a$ có $8 - 2 = 6$ cách chọn. Chữ số $b$ khác $a$ và khác 5 (được phép bằng 0) nên $b$ có $8 - 2 = 6$ cách chọn. Chữ số $c$ khác $a, b, 5$ nên có $8 - 3 = 5$ cách chọn.\\nSố cách lập ở TH2 là: $1 \\times 6 \\times 6 \\times 5 = 180$ số.\\nTheo quy tắc cộng, tổng số các số thoả mãn là: $N = 210 + 180 = 390$ số."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá bảo mật mật mã đăng nhập máy tính",
                           "Một trường đại học quy định mật khẩu tài khoản học điện tử của sinh viên phải gồm đúng 8 kí tự được tạo lập theo cấu trúc sau:\\n- 3 kí tự đầu tiên là 3 chữ cái in hoa phân biệt lấy từ tập 26 chữ cái tiếng Anh (từ A đến Z).\\n- 4 kí tự tiếp theo là 4 chữ số lấy từ tập các số $\\{0, 1, 2, ..., 9\\}$ (các chữ số có thể trùng nhau).\\n- Kí tự cuối cùng là một kí tự đặc biệt lấy từ tập 4 kí tự $\\{@, \\#, \\$, \\%\\}$.\\na) Có tất cả bao nhiêu mật khẩu hợp lệ có thể được tạo ra?\\nb) Một thuật toán tấn công vét cạn (brute-force) có thể thử được $100\\,000$ mật khẩu mỗi giây. Hỏi trong trường hợp xấu nhất, thuật toán này cần bao nhiêu giây để bẻ khoá được tài khoản của sinh viên?",
                           "a) Công việc lập mật khẩu gồm 3 công đoạn liên tiếp:\\n- Công đoạn 1: Chọn 3 chữ cái in hoa đôi một khác nhau từ 26 chữ cái:\\nKí tự thứ nhất có 26 cách, thứ hai có 25 cách, thứ ba có 24 cách. Số cách chọn là: $26 \\times 25 \\times 24 = 15\\,600$ cách.\\n- Công đoạn 2: Chọn 4 chữ số tuỳ ý từ 10 chữ số:\\nMỗi vị trí có 10 cách, số cách chọn là: $10 \\times 10 \\times 10 \\times 10 = 10^4 = 10\\,000$ cách.\\n- Công đoạn 3: Chọn 1 kí tự đặc biệt từ 4 kí tự:\\nCó 4 cách chọn.\\nTheo quy tắc nhân, tổng số mật khẩu hợp lệ là:\\n$N = 15\\,600 \\times 10\\,000 \\times 4 = 624\\,000\\,000$ mật khẩu.\\nb) Trong trường hợp xấu nhất, kẻ tấn công phải thử toàn bộ $624\\,000\\,000$ mật khẩu.\\nVới tốc độ xử lý $100\\,000$ mật khẩu/giây, thời gian tối đa để thử hết là:\\n$T = \\frac{624\\,000\\,000}{100\\,000} = 6240\\text{ giây} = 104\\text{ phút} = 1\\text{ giờ } 44\\text{ phút}$.\\nKết luận: Không gian mẫu mật mã tương đối lớn, đảm bảo tính bảo mật cơ bản trước các cuộc tấn công tự động thông thường.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 24:
        # BÀI 24: HOÁN VỊ, CHỈNH HỢP VÀ TỔ HỢP
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Số các hoán vị của một tập hợp gồm $n$ phần tử ($n \\ge 1$) được kí hiệu và tính bằng",
                         "$P_n = n!$", "$P_n = n^2$", "$P_n = 2n$", "$P_n = n(n - 1)$",
                         "A", "Công thức số hoán vị $P_n = n!$."),
                make_mcq(2, "NB", "Số các chỉnh hợp chập $k$ của $n$ phần tử ($1 \\le k \\le n$) được tính bằng công thức",
                         "$A_n^k = \\frac{n!}{(n - k)!}$",
                         "$A_n^k = \\frac{n!}{k!(n - k)!}$",
                         "$A_n^k = \\frac{n!}{k!}$",
                         "$A_n^k = n! \\cdot k!$",
                         "A", "Công thức chỉnh hợp."),
                make_mcq(3, "NB", "Số các tổ hợp chập $k$ của $n$ phần tử ($0 \\le k \\le n$) được tính bằng công thức",
                         "$C_n^k = \\frac{n!}{k!(n - k)!}$",
                         "$C_n^k = \\frac{n!}{(n - k)!}$",
                         "$C_n^k = \\frac{k!}{n!}$",
                         "$C_n^k = n! - k!$",
                         "A", "Công thức tổ hợp."),
                make_mcq(4, "NB", "Khẳng định nào sau đây đúng về mối quan hệ giữa chỉnh hợp và tổ hợp?",
                         "$A_n^k = k! \\cdot C_n^k$",
                         "$C_n^k = k! \\cdot A_n^k$",
                         "$A_n^k = C_n^k$",
                         "$A_n^k + C_n^k = n!$",
                         "A", "Mối quan hệ: $A_n^k = k! C_n^k$."),
                make_mcq(5, "TH", "Giá trị của biểu thức $P_4$ bằng",
                         "24", "12", "16", "4",
                         "A", "$P_4 = 4! = 4 \\times 3 \\times 2 \\times 1 = 24$."),
                make_mcq(6, "TH", "Giá trị của chỉnh hợp $A_5^2$ bằng",
                         "20", "10", "25", "60",
                         "A", "$A_5^2 = 5 \\times 4 = 20$."),
                make_mcq(7, "TH", "Giá trị của tổ hợp $C_6^2$ bằng",
                         "15", "30", "12", "36",
                         "A", "$C_6^2 = \\frac{6 \\times 5}{2} = 15$."),
                make_mcq(8, "TH", "Có bao nhiêu cách xếp 5 bạn học sinh thành một hàng dọc?",
                         "120", "24", "25", "60",
                         "A", "Xếp 5 học sinh vào 5 vị trí: $5! = 120$ cách."),
                make_mcq(9, "VD", "Một lớp học có 30 học sinh. Có bao nhiêu cách chọn ra một ban cán sự gồm 1 lớp trưởng, 1 lớp phó và 1 bí thư?",
                         "$24\\,360$", "$4\\,060$", "$27\\,000$", "$90$",
                         "A", "Chọn có phân công chức vụ là chỉnh hợp: $A_{30}^3 = 30 \\times 29 \\times 28 = 24\\,360$ cách."),
                make_mcq(10, "VD", "Có bao nhiêu cách chọn ra một nhóm gồm 4 học sinh từ một tổ gồm 10 học sinh để đi lao động vệ sinh?",
                         "210", "5040", "40", "120",
                         "A", "Chọn không phân công thứ tự là tổ hợp: $C_{10}^4 = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$ cách."),
                make_mcq(11, "VDC", "Có bao nhiêu cách xếp 4 bạn nam và 4 bạn nữ ngồi vào một bàn dài 8 ghế sao cho nam và nữ ngồi xen kẽ nhau?",
                         "1152", "576", "40320", "288",
                         "A", "TH1: Nam ở vị trí lẻ (1,3,5,7), Nữ ở vị trí chẵn (2,4,6,8): có $4! \\times 4! = 24 \\times 24 = 576$ cách. TH2: Nữ ở vị trí lẻ, Nam ở vị trí chẵn: có $4! \\times 4! = 576$ cách. Tổng cộng: $576 + 576 = 1152$ cách."),
                make_mcq(12, "VDC", "Trong một mặt phẳng cho 10 điểm phân biệt, trong đó không có 3 điểm nào thẳng hàng. Số tam giác có 3 đỉnh là 3 trong số 10 điểm đã cho là",
                         "120", "720", "30", "1000",
                         "A", "Mỗi tam giác được tạo bởi 3 điểm bất kì: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ tam giác.")
            ]
            tfs = [
                make_tf(1, "Một hộp chứa 5 quả cầu đỏ và 7 quả cầu xanh (các quả cầu đôi một khác nhau). Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số cách chọn ngẫu nhiên 3 quả cầu bất kì từ hộp là $C_{12}^3 = 220$ cách.", True, "$C_{12}^3 = 220$."),
                    ("b", "Số cách chọn 3 quả cầu cùng màu đỏ là $C_5^3 = 10$ cách.", True, "$C_5^3 = 10$."),
                    ("c", "Số cách chọn 3 quả cầu cùng màu xanh là $C_7^3 = 35$ cách.", True, "$C_7^3 = 35$."),
                    ("d", "Số cách chọn 3 quả cầu có cả hai màu (gồm cả đỏ và xanh) là $175$ cách.", True, "Tổng trừ đi các cách cùng màu: $220 - (10 + 35) = 220 - 45 = 175$ cách.")
                ]),
                make_tf(2, "Cho biểu thức $P = C_n^2$ với $n$ là số nguyên dương ($n \\ge 2$). Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Công thức của $C_n^2$ là $\\frac{n(n - 1)}{2}$.", True, "Khai triển tổ hợp chập 2."),
                    ("b", "Phương trình $C_n^2 = 15$ có nghiệm nguyên là $n = 6$.", True, "$n(n - 1)/2 = 15 \\Leftrightarrow n^2 - n - 30 = 0 \\Rightarrow n = 6$."),
                    ("c", "Giá trị của $C_5^2$ bằng $20$.", False, "$C_5^2 = \\frac{5 \\times 4}{2} = 10$, không phải 20."),
                    ("d", "Đẳng thức $C_n^k = C_n^{n - k}$ luôn đúng với mọi $0 \\le k \\le n$.", True, "Tính chất đối xứng của tổ hợp.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính giá trị của $P_5$.",
                        "120", "$5! = 120$."),
                make_sa(2, "TH", "Tính giá trị của chỉnh hợp $A_6^3$.",
                        "120", "$6 \\times 5 \\times 4 = 120$."),
                make_sa(3, "VD", "Tính giá trị của tổ hợp $C_8^3$.",
                        "56", "$C_8^3 = \\frac{8 \\times 7 \\times 6}{6} = 56$."),
                make_sa(4, "VD", "Tìm số nguyên dương $n$ thoả mãn $A_n^2 = 30$.",
                        "6", "$n(n - 1) = 30 \\Rightarrow n = 6$."),
                make_sa(5, "VDC", "Một đa giác đều có 12 đỉnh. Có bao nhiêu đường chéo được tạo thành từ các đỉnh của đa giác đó?",
                        "54", "Số đoạn thẳng nối 2 đỉnh: $C_{12}^2 = 66$. Số đường chéo: $66 - 12 = 54$."),
                make_sa(6, "VDC", "Có bao nhiêu cách chia 6 học sinh thành 3 nhóm, mỗi nhóm có đúng 2 học sinh?",
                        "15", "Chia thành 3 nhóm không phân biệt: $\\frac{C_6^2 \\times C_4^2 \\times C_2^2}{3!} = \\frac{15 \\times 6 \\times 1}{6} = 15$ cách."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Phân biệt chỉnh hợp và tổ hợp",
                           "Nêu định nghĩa chỉnh hợp chập $k$ và tổ hợp chập $k$ của $n$ phần tử. Điểm khác biệt mấu chốt giữa bài toán sử dụng chỉnh hợp và bài toán sử dụng tổ hợp là gì?",
                           "1. Định nghĩa:\\n- Chỉnh hợp: Cho tập hợp $A$ gồm $n$ phần tử ($n \\ge 1$). Mỗi kết quả của việc lấy ra $k$ phần tử ($1 \\le k \\le n$) từ $A$ và sắp xếp chúng theo một thứ tự nhất định được gọi là một chỉnh hợp chập $k$ của $n$ phần tử.\\n- Tổ hợp: Mỗi tập con gồm $k$ phần tử ($0 \\le k \\le n$) lấy từ tập hợp $A$ được gọi là một tổ hợp chập $k$ của $n$ phần tử.\\n2. Điểm khác biệt mấu chốt:\\n- Có phân biệt thứ tự (vị trí, chức vụ, thứ tự đứng trước sau) $\\Rightarrow$ Dùng CHỈNH HỢP $A_n^k$.\\n- Không phân biệt thứ tự (chỉ quan tâm đến nhóm, tập hợp các phần tử được chọn) $\\Rightarrow$ Dùng TỔ HỢP $C_n^k$."),
                make_essay(2, "TH", 0.5, "Chứng minh hai tính chất cơ bản của tổ hợp",
                           "Chứng minh hai tính chất cơ bản của các số tổ hợp:\\na) $C_n^k = C_n^{n - k}$ (với $0 \\le k \\le n$).\\nb) $C_n^{k - 1} + C_n^k = C_{n + 1}^k$ (với $1 \\le k \\le n$).",
                           "a) Áp dụng công thức định nghĩa:\\n$C_n^k = \\frac{n!}{k!(n - k)!}$.\\n$C_n^{n - k} = \\frac{n!}{(n - k)!(n - (n - k))!} = \\frac{n!}{(n - k)!k!} = \\frac{n!}{k!(n - k)!}$.\\nDo đó $C_n^k = C_n^{n - k}$ (đpcm). Ý nghĩa: Chọn ra $k$ phần tử để lấy cũng tương đương với việc chọn ra $n - k$ phần tử để giữ lại.\\nb) Biến đổi vế trái:\\n$C_n^{k - 1} + C_n^k = \\frac{n!}{(k - 1)!(n - k + 1)!} + \\frac{n!}{k!(n - k)!}$.\\nQuy đồng mẫu số chung là $k!(n - k + 1)!$:\\n$= \\frac{n! \\cdot k}{k!(n - k + 1)!} + \\frac{n! \\cdot (n - k + 1)}{k!(n - k + 1)!} = \\frac{n!(k + n - k + 1)}{k!(n - k + 1)!} = \\frac{n!(n + 1)}{k!(n + 1 - k)!} = \\frac{(n + 1)!}{k!(n + 1 - k)!} = C_{n + 1}^k$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Bài toán chọn đội tuyển thi học sinh giỏi",
                           "Một câu lạc bộ Toán học có 12 thành viên gồm 7 nam và 5 nữ. Người ta cần chọn ra một đội gồm 5 thành viên để tham gia cuộc thi giao lưu cấp cụm trường. Có bao nhiêu cách chọn nếu:\\na) Chọn tuỳ ý 5 thành viên?\\nb) Đội bắt buộc phải có đúng 3 nam và 2 nữ?\\nc) Đội phải có ít nhất 1 bạn nữ?",
                           "a) Chọn tuỳ ý 5 thành viên từ 12 thành viên:\\nSố cách chọn là: $C_{12}^5 = \\frac{12!}{5!7!} = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{120} = 792$ cách.\\nb) Chọn đúng 3 nam và 2 nữ:\\n- Chọn 3 nam từ 7 nam: có $C_7^3 = \\frac{7 \\times 6 \\times 5}{6} = 35$ cách.\\n- Chọn 2 nữ từ 5 nữ: có $C_5^2 = \\frac{5 \\times 4}{2} = 10$ cách.\\nTheo quy tắc nhân, số cách chọn là: $35 \\times 10 = 350$ cách.\\nc) Đội có ít nhất 1 bạn nữ:\\nSử dụng phương pháp phần bù: Lấy tổng số cách chọn tuỳ ý trừ đi số cách chọn đội toàn nam (không có bạn nữ nào).\\n- Số cách chọn đội 5 thành viên toàn nam từ 7 nam: $C_7^5 = C_7^2 = \\frac{7 \\times 6}{2} = 21$ cách.\\nSố cách chọn đội có ít nhất 1 bạn nữ là:\\n$N = C_{12}^5 - C_7^5 = 792 - 21 = 771$ cách."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế xếp lịch trực ca bệnh viện",
                           "Một khoa Cấp cứu của bệnh viện đa khoa có 8 bác sĩ và 12 điều dưỡng. Mỗi ca trực đêm cần một kíp trực gồm 2 bác sĩ và 3 điều dưỡng, trong đó có 1 bác sĩ giữ vai trò Trưởng ca trực.\\na) Có bao nhiêu cách lập một kíp trực đêm theo đúng yêu cầu trên?\\nb) Biết rằng Bác sĩ Tuấn và Điều dưỡng Lan là hai vợ chồng, theo quy chế bệnh viện không được phân công cùng một ca trực. Hỏi có bao nhiêu cách lập kíp trực sao cho Bác sĩ Tuấn và Điều dưỡng Lan không trực cùng ca?",
                           "a) Công việc lập kíp trực gồm các bước sau:\\n- Bước 1: Chọn 1 bác sĩ làm Trưởng ca từ 8 bác sĩ: có 8 cách chọn.\\n- Bước 2: Chọn 1 bác sĩ còn lại tham gia kíp trực từ 7 bác sĩ còn lại: có 7 cách chọn. (Hoặc chọn 2 bác sĩ có phân công trưởng ca: $A_8^2 = 8 \\times 7 = 56$ cách).\\n- Bước 3: Chọn 3 điều dưỡng từ 12 điều dưỡng: có $C_{12}^3 = \\frac{12 \\times 11 \\times 10}{6} = 220$ cách.\\nTheo quy tắc nhân, tổng số cách lập kíp trực là:\\n$N = 56 \\times 220 = 12\\,320$ cách.\\nb) Sử dụng phương pháp biến cố bù: Lấy tổng số cách lập kíp trực trừ đi số cách mà cả Bác sĩ Tuấn và Điều dưỡng Lan cùng tham gia một kíp trực.\\n- Xét các kíp trực có cả BS Tuấn và ĐD Lan:\\n+ Bác sĩ Tuấn là 1 trong 2 bác sĩ: BS Tuấn có thể làm Trưởng ca hoặc bác sĩ thành viên (có 2 khả năng). Chọn bác sĩ thứ hai từ 7 bác sĩ còn lại: có 7 cách. Số cách chọn 2 bác sĩ có BS Tuấn là: $2 \\times 7 = 14$ cách.\\n+ Điều dưỡng Lan là 1 trong 3 điều dưỡng: Chọn thêm 2 điều dưỡng từ 11 điều dưỡng còn lại: có $C_{11}^2 = \\frac{11 \\times 10}{2} = 55$ cách.\\nSố kíp trực có mặt cả hai vợ chồng là: $14 \\times 55 = 770$ cách.\\nSố cách lập kíp trực hợp lệ (hai người không trực cùng nhau) là:\\n$N' = 12\\,320 - 770 = 11\\,550$ cách.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Giá trị của $0!$ được quy ước bằng",
                         "1", "0", "Không xác định", "-1",
                         "A", "Quy ước toán học: $0! = 1$."),
                make_mcq(2, "NB", "Số cách chọn $k$ phần tử từ $n$ phần tử không phân biệt thứ tự là",
                         "$C_n^k$", "$A_n^k$", "$P_n$", "$n^k$",
                         "A", "Không phân biệt thứ tự là tổ hợp $C_n^k$."),
                make_mcq(3, "NB", "Với mọi $n \\ge 1$, ta luôn có $C_n^0$ và $C_n^n$ bằng",
                         "1", "0", "$n$", "$n!$",
                         "A", "$C_n^0 = C_n^n = 1$."),
                make_mcq(4, "NB", "Đẳng thức nào sau đây SAI?",
                         "$C_n^k = C_n^{k + 1}$",
                         "$C_n^k = C_n^{n - k}$",
                         "$C_n^1 = n$",
                         "$C_n^0 = 1$",
                         "A", "$C_n^k$ không bằng $C_n^{k+1}$."),
                make_mcq(5, "TH", "Giá trị của $A_4^2$ bằng",
                         "12", "6", "8", "24",
                         "A", "$A_4^2 = 4 \\times 3 = 12$."),
                make_mcq(6, "TH", "Giá trị của $C_5^3$ bằng",
                         "10", "20", "60", "15",
                         "A", "$C_5^3 = C_5^2 = 10$."),
                make_mcq(7, "TH", "Có bao nhiêu cách chọn 3 bạn học sinh từ 8 bạn để cử đi dự đại hội Đoàn trường?",
                         "56", "336", "24", "120",
                         "A", "$C_8^3 = 56$."),
                make_mcq(8, "TH", "Có bao nhiêu cách xếp 4 cuốn sách khác nhau vào một ngăn kệ sách?",
                         "24", "16", "12", "64",
                         "A", "$4! = 24$ cách."),
                make_mcq(9, "VD", "Từ 10 người, có bao nhiêu cách chọn ra một chủ tịch và một phó chủ tịch?",
                         "90", "45", "100", "20",
                         "A", "Có phân chức vụ: $A_{10}^2 = 10 \\times 9 = 90$ cách."),
                make_mcq(10, "VD", "Có bao nhiêu số tự nhiên gồm 5 chữ số khác nhau lập từ các chữ số $\\{1, 2, 3, 4, 5\\}$?",
                         "120", "24", "720", "25",
                         "A", "$5! = 120$ số."),
                make_mcq(11, "VDC", "Có bao nhiêu cách xếp 6 bạn học sinh ngồi quanh một bàn tròn có 6 ghế (hai cách xếp được coi là như nhau nếu cách này nhận được từ cách kia bằng một phép quay quanh bàn)?",
                         "120", "720", "60", "24",
                         "A", "Hoán vị vòng tròn: $(n - 1)! = (6 - 1)! = 5! = 120$ cách."),
                make_mcq(12, "VDC", "Một hộp có 6 bi đỏ và 4 bi xanh. Có bao nhiêu cách lấy ra 4 viên bi sao cho có ít nhất 1 viên bi đỏ?",
                         "209", "210", "180", "195",
                         "A", "Tổng số cách lấy 4 viên: $C_{10}^4 = 210$. Số cách lấy 4 viên toàn xanh: $C_4^4 = 1$. Số cách có ít nhất 1 đỏ: $210 - 1 = 209$ cách.")
            ]
            tfs = [
                make_tf(1, "Một đoàn đại biểu gồm 6 nam và 4 nữ. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số cách chọn một nhóm gồm 3 đại biểu bất kì là $C_{10}^3 = 120$ cách.", True, "$C_{10}^3 = 120$."),
                    ("b", "Số cách chọn một ban chấp hành gồm 1 trưởng đoàn, 1 phó đoàn và 1 thư kí là $A_{10}^3 = 720$ cách.", True, "$A_{10}^3 = 720$."),
                    ("c", "Số cách chọn 3 đại biểu toàn nữ là $C_4^3 = 4$ cách.", True, "$C_4^3 = 4$."),
                    ("d", "Số cách chọn 3 đại biểu trong đó có đúng 2 nam và 1 nữ là $60$ cách.", True, "$C_6^2 \\times C_4^1 = 15 \\times 4 = 60$ cách.")
                ]),
                make_tf(2, "Cho phương trình chứa tổ hợp và chỉnh hợp: $A_n^2 - C_n^2 = 10$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Điều kiện xác định của phương trình là $n \\ge 2$ với $n \\in \\mathbb{N}^*$.", True, "Chỉnh hợp và tổ hợp chập 2."),
                    ("b", "Ta có hệ thức liên hệ $A_n^2 = 2 C_n^2$.", True, "$A_n^2 = 2! C_n^2 = 2 C_n^2$."),
                    ("c", "Phương trình tương đương với $C_n^2 = 10$.", True, "$2 C_n^2 - C_n^2 = C_n^2 = 10$."),
                    ("d", "Nghiệm của phương trình là $n = 6$.", False, "$C_n^2 = 10 \\Leftrightarrow n(n - 1) = 20 \\Rightarrow n = 5$, không phải 6.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tính giá trị của $P_6$.",
                        "720", "$6! = 720$."),
                make_sa(2, "TH", "Tính giá trị của chỉnh hợp $A_7^2$.",
                        "42", "$7 \\times 6 = 42$."),
                make_sa(3, "VD", "Tính giá trị của tổ hợp $C_9^2$.",
                        "36", "$C_9^2 = \\frac{9 \\times 8}{2} = 36$."),
                make_sa(4, "VD", "Có bao nhiêu đoạn thẳng được tạo thành từ 8 điểm phân biệt trong đó không có 3 điểm nào thẳng hàng?",
                        "28", "$C_8^2 = 28$."),
                make_sa(5, "VDC", "Tìm số nguyên dương $n$ thoả mãn $C_{n+1}^2 - C_n^2 = 7$.",
                        "7", "$C_{n+1}^2 - C_n^2 = n = 7$."),
                make_sa(6, "VDC", "Có bao nhiêu cách xếp 5 người vào một hàng ngang sao cho hai người $A$ và $B$ luôn đứng cạnh nhau?",
                        "48", "Buộc $A$ và $B$ thành 1 khối (2 cách). Xếp 4 khối: $4! = 24$. Tổng $= 24 \\times 2 = 48$ cách."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Ý nghĩa của giai thừa và hoán vị",
                           "Nêu định nghĩa giai thừa $n!$ và hoán vị của $n$ phần tử. Tại sao số hoán vị của $n$ phần tử lại bằng tích từ 1 đến $n$?",
                           "1. Định nghĩa:\\n- Giai thừa: Với số nguyên dương $n$, tích của $n$ số nguyên dương đầu tiên được gọi là $n$ giai thừa, kí hiệu là $n! = 1 \\times 2 \\times 3 \\times ... \\times n$. Quy ước $0! = 1$.\\n- Hoán vị: Cho tập hợp $A$ gồm $n$ phần tử. Mỗi cách sắp xếp có thứ tự $n$ phần tử này được gọi là một hoán vị của $n$ phần tử.\\n2. Giải thích: Xếp $n$ phần tử vào $n$ vị trí:\\n- Vị trí thứ nhất có $n$ cách chọn.\\n- Vị trí thứ hai có $n - 1$ cách chọn.\\n- ... Vị trí cuối cùng có 1 cách chọn.\\nTheo quy tắc nhân, tổng số cách sắp xếp là $P_n = n(n - 1)...2 \\times 1 = n!$."),
                make_essay(2, "TH", 0.5, "Giải phương trình đại số tổ hợp",
                           "Tìm số nguyên dương $n$ thoả mãn phương trình:\\n$A_n^3 = 24 C_n^2$.",
                           "1. Điều kiện: $\\begin{cases} n \\ge 3 \\\\ n \\ge 2 \\\\ n \\in \\mathbb{N} \\end{cases} \\Leftrightarrow n \\ge 3, n \\in \\mathbb{N}$.\\n2. Biến đổi phương trình:\\nTa có $A_n^3 = n(n - 1)(n - 2)$ và $C_n^2 = \\frac{n(n - 1)}{2}$.\\nPhương trình trở thành:\\n$n(n - 1)(n - 2) = 24 \\times \\frac{n(n - 1)}{2} \\Leftrightarrow n(n - 1)(n - 2) = 12 n(n - 1)$.\\nVì $n \\ge 3$ nên $n(n - 1) \\ne 0$. Chia cả hai vế cho $n(n - 1)$ ta được:\\n$n - 2 = 12 \\Leftrightarrow n = 14$.\\nĐối chiếu điều kiện $n = 14$ thoả mãn.\\nVậy nghiệm của phương trình là $n = 14$."),
                make_essay(3, "VD", 0.5, "Bài toán đếm số tam giác và đường chéo hình học",
                           "Cho một đa giác lồi có $n$ cạnh ($n \\ge 4$).\\na) Có bao nhiêu tam giác có 3 đỉnh là 3 đỉnh của đa giác đó?\\nb) Có bao nhiêu đường chéo trong đa giác đó? Áp dụng tính số đường chéo khi $n = 10$.",
                           "a) Đa giác có $n$ cạnh thì có đúng $n$ đỉnh, và trong đa giác lồi không có 3 đỉnh nào thẳng hàng.\\nMột tam giác được tạo thành bằng cách chọn ngẫu nhiên 3 đỉnh bất kì từ $n$ đỉnh.\\nSố tam giác tạo thành là: $N_{\\text{tam giác}} = C_n^3 = \\frac{n(n - 1)(n - 2)}{6}$.\\nb) Đường chéo:\\n- Số đoạn thẳng nối 2 đỉnh bất kì là: $C_n^2 = \\frac{n(n - 1)}{2}$.\\n- Trong số các đoạn thẳng này, có đúng $n$ đoạn thẳng là cạnh của đa giác. Các đoạn thẳng còn lại là đường chéo.\\nSố đường chéo của đa giác $n$ cạnh là:\\n$N_{\\text{đường chéo}} = C_n^2 - n = \\frac{n(n - 1)}{2} - n = \\frac{n(n - 3)}{2}$.\\nÁp dụng với $n = 10$:\\n$N = \\frac{10(10 - 3)}{2} = \\frac{10 \\times 7}{2} = 35$ đường chéo."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế xếp chỗ ngồi hội nghị ngoại giao",
                           "Một hội nghị bàn tròn có 6 đại biểu gồm 3 đại biểu đoàn Việt Nam và 3 đại biểu đoàn Quốc tế ngồi quanh một bàn tròn gồm 6 ghế.\\na) Có bao nhiêu cách xếp chỗ ngồi tuỳ ý cho 6 đại biểu?\\nb) Có bao nhiêu cách xếp chỗ ngồi sao cho các đại biểu đoàn Việt Nam luôn ngồi cạnh nhau?",
                           "a) Xếp 6 người vào một bàn tròn:\\nTheo công thức hoán vị tròn, số cách xếp $n$ người quanh bàn tròn là $(n - 1)!$.\\nVới $n = 6$, số cách xếp tuỳ ý là:\\n$P_{\\text{tròn}} = (6 - 1)! = 5! = 120$ cách.\\nb) Xếp sao cho 3 đại biểu đoàn Việt Nam luôn ngồi cạnh nhau:\\n- Bước 1: Buộc 3 đại biểu Việt Nam thành 1 khối thống nhất $V$. Khi đó coi khối $V$ và 3 đại biểu Quốc tế là 4 phần tử cần xếp quanh bàn tròn.\\nSố cách xếp 4 phần tử quanh bàn tròn là: $(4 - 1)! = 3! = 6$ cách.\\n- Bước 2: Trong khối $V$, 3 đại biểu Việt Nam có thể hoán đổi vị trí cho nhau theo hàng dọc:\\nSố cách hoán vị nội bộ là: $3! = 6$ cách.\\nTheo quy tắc nhân, tổng số cách xếp thoả mãn là:\\n$N = 6 \\times 6 = 36$ cách.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 25:
        # BÀI 25: NHỊ THỨC NEWTON
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Số hạng trong khai triển nhị thức Newton của $(a + b)^4$ có tất cả bao nhiêu số hạng?",
                         "5", "4", "3", "6",
                         "A", "Khai triển $(a + b)^n$ có $n + 1$ số hạng, với $n = 4$ có $4 + 1 = 5$ số hạng."),
                make_mcq(2, "NB", "Số hạng trong khai triển $(a + b)^5$ có tất cả bao nhiêu số hạng?",
                         "6", "5", "4", "7",
                         "A", "$5 + 1 = 6$ số hạng."),
                make_mcq(3, "NB", "Khai triển của nhị thức $(a + b)^4$ là",
                         "$a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$",
                         "$a^4 + b^4$",
                         "$a^4 + 4a^3 b + 4ab^3 + b^4$",
                         "$a^4 + 6a^2 b^2 + b^4$",
                         "A", "Khai triển nhị thức Newton bậc 4 với hệ số $1, 4, 6, 4, 1$."),
                make_mcq(4, "NB", "Hệ số của số hạng chính giữa trong khai triển $(a + b)^4$ là",
                         "6", "4", "1", "12",
                         "A", "Số hạng chính giữa ứng với $C_4^2 = 6$."),
                make_mcq(5, "TH", "Hệ số của $x^3$ trong khai triển $(x + 1)^4$ bằng",
                         "4", "6", "1", "12",
                         "A", "Hệ số là $C_4^1 = 4$."),
                make_mcq(6, "TH", "Khai triển của biểu thức $(x - 1)^4$ là",
                         "$x^4 - 4x^3 + 6x^2 - 4x + 1$",
                         "$x^4 + 4x^3 + 6x^2 + 4x + 1$",
                         "$x^4 - 1$",
                         "$x^4 - 4x^3 - 6x^2 - 4x - 1$",
                         "A", "Dấu đan xen: $x^4 - 4x^3 + 6x^2 - 4x + 1$."),
                make_mcq(7, "TH", "Hệ số của $x^4$ trong khai triển $(x + 2)^5$ bằng",
                         "10", "5", "20", "32",
                         "A", "Số hạng chứa $x^4$ là $C_5^1 x^4 (2)^1 = 5 \\times 2 x^4 = 10 x^4$."),
                make_mcq(8, "TH", "Tổng các hệ số trong khai triển $(1 + x)^4$ bằng",
                         "16", "8", "32", "4",
                         "A", "Thay $x = 1$ ta được $(1 + 1)^4 = 2^4 = 16$."),
                make_mcq(9, "VD", "Hệ số của $x^2$ trong khai triển $(2x + 1)^4$ bằng",
                         "24", "6", "12", "16",
                         "A", "Số hạng chứa $x^2$ là $C_4^2 (2x)^2 (1)^2 = 6 \\times 4x^2 = 24x^2$."),
                make_mcq(10, "VD", "Hệ số của $x^3$ trong khai triển $(3x - 2)^4$ bằng",
                         "$-216$", "216", "108", "$-108$",
                         "A", "Số hạng chứa $x^3$ là $C_4^1 (3x)^3 (-2)^1 = 4 \\times 27x^3 \\times (-2) = -216 x^3$."),
                make_mcq(11, "VDC", "Số hạng không chứa $x$ trong khai triển $\\left(x + \\frac{2}{x}\\right)^4$ (với $x \\ne 0$) bằng",
                         "24", "6", "16", "8",
                         "A", "Số hạng tổng quát $C_4^k x^{4-k} (2/x)^k = C_4^k 2^k x^{4 - 2k}$. Không chứa $x \\Leftrightarrow 4 - 2k = 0 \\Rightarrow k = 2$. Hệ số: $C_4^2 \\times 2^2 = 6 \\times 4 = 24$."),
                make_mcq(12, "VDC", "Một ngân hàng áp dụng công thức tính lãi kép: Số tiền thu được sau 4 năm với vốn gốc $A$ và lãi suất $r$ hàng năm là $S = A(1 + r)^4$. Sử dụng nhị thức Newton khai triển biểu thức $(1 + r)^4$ xấp xỉ khi $r$ rất nhỏ ($r^2, r^3, r^4 \\approx 0$), ta được",
                         "$1 + 4r$", "$1 + 4r + 6r^2$", "$1 + r^4$", "$4 + 4r$",
                         "A", "Khai triển $(1 + r)^4 = 1 + 4r + 6r^2 + 4r^3 + r^4$. Khi $r$ rất nhỏ, bỏ qua các bậc từ 2 trở lên ta được xấp xỉ $1 + 4r$.")
            ]
            tfs = [
                make_tf(1, "Xét khai triển nhị thức Newton $(x + 2)^4$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Khai triển có tất cả 5 số hạng.", True, "$n = 4 \\Rightarrow n + 1 = 5$."),
                    ("b", "Hệ số của số hạng chứa $x^4$ là 1.", True, "$x^4$ có hệ số 1."),
                    ("c", "Hệ số của số hạng chứa $x^3$ là 8.", True, "$C_4^1 x^3 (2) = 4 \\times 2 x^3 = 8x^3$."),
                    ("d", "Số hạng tự do (không chứa $x$) bằng 8.", False, "Số hạng tự do là $2^4 = 16$, không phải 8.")
                ]),
                make_tf(2, "Xét khai triển $(2x - 1)^5$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Khai triển có tất cả 6 số hạng.", True, "$5 + 1 = 6$."),
                    ("b", "Hệ số của số hạng đầu tiên chứa $x^5$ là 32.", True, "$(2x)^5 = 32x^5$."),
                    ("c", "Dấu của các số hạng trong khai triển đan xen nhau (dương, âm, dương...).", True, "Do $(-1)^k$ tạo ra dấu đan xen."),
                    ("d", "Tổng tất cả các hệ số trong khai triển bằng 1.", True, "Thay $x = 1$ ta được $(2(1) - 1)^5 = 1^5 = 1$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Khai triển $(a + b)^5$ có tất cả bao nhiêu số hạng?",
                        "6", "$5 + 1 = 6$."),
                make_sa(2, "TH", "Tìm hệ số của $x^4$ trong khai triển $(x + 1)^5$.",
                        "5", "$C_5^1 = 5$."),
                make_sa(3, "VD", "Tìm hệ số của $x^3$ trong khai triển $(x + 2)^4$.",
                        "8", "$C_4^1 \\times 2 = 8$."),
                make_sa(4, "VD", "Tìm hệ số của $x^2$ trong khai triển $(3x - 1)^4$.",
                        "54", "$C_4^2 (3)^2 (-1)^2 = 6 \\times 9 = 54$."),
                make_sa(5, "VDC", "Tìm số hạng không chứa $x$ trong khai triển $\\left(x + \\frac{1}{x}\\right)^4$ với $x \\ne 0$.",
                        "6", "$C_4^2 = 6$."),
                make_sa(6, "VDC", "Tính tổng các hệ số trong khai triển của nhị thức $(3x - 2)^5$.",
                        "1", "Thay $x = 1 \\Rightarrow (3 - 2)^5 = 1^5 = 1$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Công thức nhị thức Newton bậc 4 và bậc 5",
                           "Viết công thức khai triển nhị thức Newton của $(a + b)^4$ và $(a + b)^5$. Nêu quy luật thay đổi số mũ của $a$ và $b$ trong các khai triển đó.",
                           "1. Khai triển bậc 4:\\n$(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$.\\n2. Khai triển bậc 5:\\n$(a + b)^5 = a^5 + 5a^4 b + 10a^3 b^2 + 10a^2 b^3 + 5ab^4 + b^5$.\\n3. Quy luật:\\n- Số các số hạng luôn bằng số mũ cộng 1 ($n + 1$).\\n- Số mũ của $a$ giảm dần từ $n$ về 0, số mũ của $b$ tăng dần từ 0 lên $n$. Tổng các số mũ của $a$ và $b$ trong mỗi số hạng luôn bằng $n$.\\n- Các hệ số đối xứng nhau qua số hạng chính giữa."),
                make_essay(2, "TH", 0.5, "Khai triển nhị thức có chứa dấu trừ",
                           "Khai triển biểu thức $(2x - 3)^4$ bằng công thức nhị thức Newton và rút gọn kết quả.",
                           "Áp dụng công thức khai triển bậc 4 với $a = 2x$ và $b = -3$:\\n$(2x - 3)^4 = (2x)^4 + 4(2x)^3(-3) + 6(2x)^2(-3)^2 + 4(2x)(-3)^3 + (-3)^4$\\n$= 16x^4 + 4(8x^3)(-3) + 6(4x^2)(9) + 4(2x)(-27) + 81$\\n$= 16x^4 - 96x^3 + 216x^2 - 216x + 81$."),
                make_essay(3, "VD", 0.5, "Tìm hệ số của số hạng trong khai triển nhị thức",
                           "Trong khai triển nhị thức $(3x - 2)^5$, hãy:\\na) Tìm số hạng chứa $x^3$.\\nb) Tìm hệ số của số hạng chứa $x^2$.\\nc) Tính tổng tất cả các hệ số trong khai triển.",
                           "Số hạng tổng quát trong khai triển $(3x - 2)^5$ có dạng:\\n$T_{k+1} = C_5^k (3x)^{5-k} (-2)^k = C_5^k 3^{5-k} (-2)^k x^{5-k}$ (với $k \\in \\{0, 1, 2, 3, 4, 5\\}$).\\na) Số hạng chứa $x^3$ tương ứng với $5 - k = 3 \\Rightarrow k = 2$:\\n$T_3 = C_5^2 3^3 (-2)^2 x^3 = 10 \\times 27 \\times 4 x^3 = 1080 x^3$.\\nb) Số hạng chứa $x^2$ tương ứng với $5 - k = 2 \\Rightarrow k = 3$:\\nHệ số là: $C_5^3 3^2 (-2)^3 = 10 \\times 9 \\times (-8) = -720$.\\nc) Tổng tất cả các hệ số nhận được bằng cách thay $x = 1$ vào nhị thức:\\n$S = (3(1) - 2)^5 = (3 - 2)^5 = 1^5 = 1$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng nhị thức Newton tính lãi kép xấp xỉ trong tài chính",
                           "Một nhà đầu tư gửi $100$ triệu đồng vào quỹ tích luỹ với lãi suất $6\\%$/năm theo hình thức lãi kép hàng năm trong 4 năm liên tiếp. Số tiền thu được sau 4 năm được tính bởi công thức: $S = 100(1 + 0.06)^4$ (triệu đồng).\\na) Dùng nhị thức Newton khai triển chính xác $(1 + 0.06)^4$. Tính số tiền nhà đầu tư nhận được sau 4 năm (làm tròn đến nghìn đồng).\\nb) So sánh kết quả trên với công thức tính lãi đơn $S' = 100(1 + 4 \\times 0.06)$. Giải thích sự chênh lệch.",
                           "a) Đặt $r = 0.06$. Áp dụng nhị thức Newton bậc 4:\\n$(1 + r)^4 = 1 + 4r + 6r^2 + 4r^3 + r^4$\\n$= 1 + 4(0.06) + 6(0.06^2) + 4(0.06^3) + 0.06^4$\\n$= 1 + 0.24 + 6(0.0036) + 4(0.000216) + 0.00001296$\\n$= 1 + 0.24 + 0.0216 + 0.000864 + 0.00001296 = 1.26247696$.\\nSố tiền nhận được sau 4 năm:\\n$S = 100 \\times 1.26247696 = 126.247696\\text{ triệu đồng} \\approx 126\\,248\\,000\\text{ đồng}$.\\nb) Theo công thức lãi đơn:\\n$S' = 100(1 + 4 \\times 0.06) = 100(1 + 0.24) = 124\\text{ triệu đồng} = 124\\,000\\,000\\text{ đồng}$.\\nChênh lệch tiền lãi thu được giữa lãi kép và lãi đơn:\\n$\\Delta S = S - S' = 126.248 - 124 = 2.248\\text{ triệu đồng} = 2\\,248\\,000\\text{ đồng}$.\\nGiải thích: Trong lãi kép, phần tiền lãi của các năm trước được gộp vào gốc để tiếp tục sinh lời cho các năm tiếp theo ('lãi mẹ đẻ lãi con'). Khoản dôi dư $2.248$ triệu đồng chính là giá trị của các số hạng bậc cao trong nhị thức Newton: $100(6r^2 + 4r^3 + r^4)$.")
            ]
            return mcqs, tfs, sas, essays

        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Khai triển $(a + b)^5$ có các hệ số lần lượt là",
                         "$1, 5, 10, 10, 5, 1$",
                         "$1, 4, 6, 4, 1$",
                         "$1, 5, 15, 15, 5, 1$",
                         "$1, 5, 10, 5, 1$",
                         "A", "Hệ số nhị thức bậc 5 là $1, 5, 10, 10, 5, 1$."),
                make_mcq(2, "NB", "Số hạng thứ 3 trong khai triển $(a + b)^4$ là",
                         "$6a^2 b^2$", "$4a^3 b$", "$4ab^3$", "$a^4$",
                         "A", "Số hạng thứ 3 ứng với $k = 2$: $C_4^2 a^2 b^2 = 6a^2 b^2$."),
                make_mcq(3, "NB", "Hệ số của $x^5$ trong khai triển $(x + 1)^5$ bằng",
                         "1", "5", "10", "0",
                         "A", "Hệ số của $x^5$ là 1."),
                make_mcq(4, "NB", "Tổng các hệ số trong khai triển $(a + b)^5$ bằng",
                         "32", "16", "64", "10",
                         "A", "Thay $a = b = 1 \\Rightarrow 2^5 = 32$."),
                make_mcq(5, "TH", "Hệ số của $x^3$ trong khai triển $(x - 2)^4$ bằng",
                         "$-8$", "8", "24", "$-24$",
                         "A", "$C_4^1 x^3 (-2) = -8x^3$."),
                make_mcq(6, "TH", "Hệ số của $x^2$ trong khai triển $(x + 3)^4$ bằng",
                         "54", "27", "12", "81",
                         "A", "$C_4^2 x^2 (3^2) = 6 \\times 9 x^2 = 54x^2$."),
                make_mcq(7, "TH", "Số hạng tự do trong khai triển $(x - 1)^5$ là",
                         "$-1$", "1", "$-5$", "5",
                         "A", "$(-1)^5 = -1$."),
                make_mcq(8, "TH", "Khai triển của $(x + 2)^4$ có số hạng tự do bằng",
                         "16", "8", "4", "32",
                         "A", "$2^4 = 16$."),
                make_mcq(9, "VD", "Hệ số của $x^3$ trong khai triển $(2x + 1)^5$ bằng",
                         "80", "40", "10", "160",
                         "A", "$C_5^2 (2x)^3 (1)^2 = 10 \\times 8x^3 = 80x^3$."),
                make_mcq(10, "VD", "Hệ số của $x^4$ trong khai triển $(3x - 1)^5$ bằng",
                         "$-405$", "405", "$-135$", "135",
                         "A", "$C_5^1 (3x)^4 (-1)^1 = 5 \\times 81x^4 \\times (-1) = -405 x^4$."),
                make_mcq(11, "VDC", "Số hạng không chứa $x$ trong khai triển $\\left(2x - \\frac{1}{x}\\right)^4$ (với $x \\ne 0$) bằng",
                         "24", "-24", "6", "16",
                         "A", "Số hạng không chứa $x$ là $C_4^2 (2x)^2 (-1/x)^2 = 6 \\times 4 = 24$."),
                make_mcq(12, "VDC", "Một quần thể vi khuẩn tăng trưởng theo cấp số nhân. Sau 4 chu kì phân chia, số lượng vi khuẩn tăng gấp $(1 + g)^4$ lần. Biết $g = 0.1$, sử dụng khai triển nhị thức Newton tính mức tăng trưởng chính xác.",
                         "1.4641", "1.4", "1.46", "1.5",
                         "A", "$(1 + 0.1)^4 = 1.1^4 = 1.4641$."),
            ]
            tfs = [
                make_tf(1, "Xét khai triển nhị thức $(3 - x)^4$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Số hạng đầu tiên của khai triển là $3^4 = 81$.", True, "$3^4 = 81$."),
                    ("b", "Hệ số của $x^4$ trong khai triển bằng 1.", True, "$(-x)^4 = x^4$, hệ số là 1."),
                    ("c", "Hệ số của $x$ trong khai triển là $-108$.", True, "$C_4^3 (3)^1 (-x)^3 = 4(3)(-x^3) ...$ số hạng chứa $x$ là $C_4^1 (3^3)(-x) = 4(27)(-x) = -108x$."),
                    ("d", "Tổng các hệ số của khai triển bằng 16.", True, "Thay $x = 1 \\Rightarrow (3 - 1)^4 = 2^4 = 16$.")
                ]),
                make_tf(2, "Cho khai triển $\\left(x + \\frac{2}{x}\\right)^4$ với $x \\ne 0$. Xét tính đúng/sai của các mệnh đề sau:", [
                    ("a", "Khai triển có tất cả 5 số hạng.", True, "$n = 4 \\Rightarrow 5$ số hạng."),
                    ("b", "Số hạng đầu tiên là $x^4$.", True, "Đúng."),
                    ("c", "Số hạng chính giữa không chứa biến $x$.", True, "Số hạng thứ 3 ứng với $x^2 \\cdot (1/x^2) = 1$, không chứa $x$."),
                    ("d", "Giá trị của số hạng không chứa $x$ bằng 6.", False, "$C_4^2 (2^2) = 6 \\times 4 = 24$, không phải 6.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Tìm hệ số của $x^3$ trong khai triển $(x + 1)^4$.",
                        "4", "$C_4^1 = 4$."),
                make_sa(2, "TH", "Tìm hệ số của $x^4$ trong khai triển $(x - 1)^5$.",
                        "-5", "$C_5^1 (-1)^1 = -5$."),
                make_sa(3, "VD", "Tìm hệ số của $x^3$ trong khai triển $(2x + 1)^4$.",
                        "32", "$C_4^1 (2^3) = 4 \\times 8 = 32$."),
                make_sa(4, "VD", "Tìm số hạng tự do trong khai triển $(x - 2)^5$.",
                        "-32", "$(-2)^5 = -32$."),
                make_sa(5, "VDC", "Tìm hệ số của $x^2$ trong khai triển $(2x - 3)^4$.",
                        "216", "$C_4^2 (2x)^2 (-3)^2 = 6 \\times 4 \\times 9 = 216$."),
                make_sa(6, "VDC", "Tính tổng các hệ số trong khai triển $(2x - 1)^4$.",
                        "1", "Thay $x = 1 \\Rightarrow (2 - 1)^4 = 1$."),
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy luật Tam giác Pascal",
                           "Nêu mối liên hệ giữa các hệ số trong khai triển nhị thức Newton $(a + b)^n$ và các hàng của tam giác Pascal (viết các hàng từ $n = 0$ đến $n = 5$).",
                           "Tam giác Pascal là bảng số tam giác trong đó mỗi số ở hàng dưới bằng tổng của hai số ở ngay phía trên nó:\\n- Hàng 0 ($n = 0$): 1\\n- Hàng 1 ($n = 1$): 1   1\\n- Hàng 2 ($n = 2$): 1   2   1\\n- Hàng 3 ($n = 3$): 1   3   3   1\\n- Hàng 4 ($n = 4$): 1   4   6   4   1\\n- Hàng 5 ($n = 5$): 1   5   10  10  5   1\\nMối liên hệ: Các số trên hàng thứ $n$ của tam giác Pascal chính là các hệ số nhị thức $C_n^0, C_n^1, ..., C_n^n$ trong khai triển nhị thức Newton $(a + b)^n$."),
                make_essay(2, "TH", 0.5, "Khai triển biểu thức bậc 5",
                           "Khai triển và rút gọn biểu thức: $(x + 2)^5$.",
                           "Áp dụng công thức nhị thức Newton bậc 5 với $a = x$ và $b = 2$:\\n$(x + 2)^5 = x^5 + 5x^4(2) + 10x^3(2^2) + 10x^2(2^3) + 5x(2^4) + 2^5$\\n$= x^5 + 10x^4 + 10x^3(4) + 10x^2(8) + 5x(16) + 32$\\n$= x^5 + 10x^4 + 40x^3 + 80x^2 + 80x + 32$."),
                make_essay(3, "VD", 0.5, "Tìm số hạng không phụ thuộc vào x",
                           "Tìm số hạng không chứa $x$ trong khai triển biểu thức:\\n$\\left(2x^2 - \\frac{1}{x}\\right)^3$ hoặc $\\left(x + \\frac{2}{x}\\right)^4$ (với $x \\ne 0$).",
                           "Xét khai triển $\\left(x + \\frac{2}{x}\\right)^4$ với $x \\ne 0$:\\nSố hạng tổng quát trong khai triển là:\\n$T_{k+1} = C_4^k x^{4 - k} \\left(\\frac{2}{x}\\right)^k = C_4^k \\cdot 2^k \\cdot x^{4 - k} \\cdot x^{-k} = C_4^k \\cdot 2^k \\cdot x^{4 - 2k}$ (với $k \\in \\{0, 1, 2, 3, 4\\}$).\\nSố hạng không chứa biến $x$ ứng với số mũ của $x$ bằng 0:\\n$4 - 2k = 0 \\Leftrightarrow 2k = 4 \\Leftrightarrow k = 2$.\\nThay $k = 2$ vào biểu thức số hạng tổng quát ta được:\\n$T_3 = C_4^2 \\cdot 2^2 \\cdot x^0 = 6 \\times 4 \\times 1 = 24$.\\nVậy số hạng không chứa $x$ trong khai triển bằng $24$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng tính giá trị xấp xỉ trong đo lường vật lý",
                           "Khi nhiệt độ tăng thêm $\\Delta t = 2^\\circ\\text{C}$, chiều dài của một thanh kim loại tăng theo công thức dãn nở nhiệt: $L = L_0 (1 + \\alpha \\Delta t)$, trong đó $\\alpha = 10^{-5}\\text{ K}^{-1}$ là hệ số dãn nở dài. Một khối lập phương bằng kim loại có cạnh ban đầu $L_0 = 10\\text{ cm}$. Thể tích khối kim loại sau khi nhiệt độ tăng được tính bởi $V = L^3 = L_0^3 (1 + \\alpha \\Delta t)^3$.\\na) Khai triển $(1 + x)^3$ với $x = \\alpha \\Delta t$.\\nb) Chứng minh rằng khi $x$ rất nhỏ, thể tích dãn nở xấp xỉ bằng $V \\approx L_0^3 (1 + 3\\alpha \\Delta t)$ và tính thể tích tăng thêm của khối kim loại.",
                           "a) Khai triển nhị thức bậc 3:\\n$(1 + x)^3 = 1 + 3x + 3x^2 + x^3$.\\nb) Với $\\alpha = 10^{-5}$ và $\\Delta t = 2^\\circ\\text{C}$, ta có $x = 10^{-5} \\times 2 = 2 \\times 10^{-5} = 0.00002$.\\nVì $x$ cực kì nhỏ nên các số hạng bậc cao $x^2 = 4 \\times 10^{-10}$ và $x^3 = 8 \\times 10^{-15}$ là vô cùng bé, hoàn toàn có thể bỏ qua.\\nDo đó ta có công thức xấp xỉ:\\n$(1 + x)^3 \\approx 1 + 3x = 1 + 3\\alpha \\Delta t$ (đpcm).\\nThể tích ban đầu: $V_0 = L_0^3 = 10^3 = 1000\\text{ cm}^3$.\\nThể tích tăng thêm của khối kim loại là:\\n$\\Delta V = V - V_0 \\approx V_0(3\\alpha \\Delta t) = 1000 \\times (3 \\times 2 \\times 10^{-5}) = 1000 \\times (6 \\times 10^{-5}) = 0.06\\text{ cm}^3$.")
            ]
            return mcqs, tfs, sas, essays

    return None
