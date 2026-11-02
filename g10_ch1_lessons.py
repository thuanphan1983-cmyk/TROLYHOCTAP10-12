# -*- coding: utf-8 -*-
"""
Chương 1 Lớp 10: Mệnh đề và tập hợp.
Bao gồm:
- Bài 1: Mệnh đề
- Bài 2: Tập hợp và các phép toán trên tập hợp
Mỗi bài có 2 đề thi độc lập (k=1, k=2) tập trung 100% vào kiến thức bài học đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch1_lesson(lnum, k):
    if lnum == 1:
        # BÀI 1: MỆNH ĐỀ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Câu nào sau đây là một mệnh đề toán học?",
                         "Số 17 là số nguyên tố.",
                         "Hôm nay trời đẹp quá!",
                         "Bạn có thích học Toán không?",
                         "$x + 2 > 5$.",
                         "A", "Câu khẳng định có tính đúng hoặc sai rõ ràng là mệnh đề toán học."),
                make_mcq(2, "NB", "Mệnh đề phủ định của mệnh đề $P$: \"Tam giác $ABC$ là tam giác đều\" là",
                         "$\\overline{P}$: \"Tam giác $ABC$ không phải là tam giác đều.\"",
                         "$\\overline{P}$: \"Tam giác $ABC$ là tam giác vuông.\"",
                         "$\\overline{P}$: \"Tam giác $ABC$ là tam giác cân.\"",
                         "$\\overline{P}$: \"Tam giác $ABC$ là tam giác tù.\"",
                         "A", "Phủ định của \"là tam giác đều\" là \"không phải là tam giác đều\"."),
                make_mcq(3, "NB", "Kí hiệu $\\forall$ trong toán học được đọc là",
                         "Với mọi", "Tồn tại", "Thuộc", "Tập hợp rỗng",
                         "A", "Kí hiệu $\\forall$ mang ý nghĩa \"với mọi\" (for all)."),
                make_mcq(4, "NB", "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 1 = 0$\". Mệnh đề nào sau đây đúng?",
                         "$P(1)$", "$P(0)$", "$P(2)$", "$P(3)$",
                         "A", "Thay $x = 1$ vào ta có $1^2 - 1 = 0$ đúng."),
                make_mcq(5, "TH", "Mệnh đề phủ định của mệnh đề $Q$: \"$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$\" là",
                         "$\\overline{Q}: \\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0$",
                         "$\\overline{Q}: \\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0$",
                         "$\\overline{Q}: \\exists x \\in \\mathbb{R}, x^2 + 1 < 0$",
                         "$\\overline{Q}: \\forall x \\in \\mathbb{R}, x^2 + 1 < 0$",
                         "A", "Phủ định của $\\forall$ là $\\exists$, phủ định của $>$ là $\\le$."),
                make_mcq(6, "TH", "Trong các mệnh đề sau, mệnh đề nào là mệnh đề kéo theo $P \\Rightarrow Q$ đúng?",
                         "Nếu tứ giác $ABCD$ là hình vuông thì tứ giác $ABCD$ là hình thoi.",
                         "Nếu $a > b$ thì $a^2 > b^2$.",
                         "Nếu số tự nhiên $n$ chia hết cho 2 thì $n$ chia hết cho 4.",
                         "Nếu tam giác $ABC$ có một góc vuông thì tam giác $ABC$ đều.",
                         "A", "Hình vuông luôn là một hình thoi (có 4 cạnh bằng nhau)."),
                make_mcq(7, "TH", "Cho hai mệnh đề $P$ và $Q$. Mệnh đề tương đương $P \\Leftrightarrow Q$ đúng khi nào?",
                         "Cả $P$ và $Q$ cùng đúng hoặc cùng sai",
                         "$P$ đúng và $Q$ sai",
                         "$P$ sai và $Q$ đúng",
                         "$P$ đúng, bất chấp tính đúng sai của $Q$",
                         "A", "Mệnh đề tương đương $P \\Leftrightarrow Q$ đúng khi $P$ và $Q$ có cùng giá trị chân lý."),
                make_mcq(8, "TH", "Mệnh đề nào sau đây là mệnh đề sai?",
                         "$\\exists x \\in \\mathbb{R}, x^2 < 0$",
                         "$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$",
                         "$\\exists x \\in \\mathbb{N}, x^2 = 25$",
                         "$\\forall x \\in \\mathbb{N}, x + 1 > 0$",
                         "A", "Bình phương của một số thực luôn không âm, nên không tồn tại $x$ để $x^2 < 0$."),
                make_mcq(9, "VD", "Cho định lý: \"Nếu tam giác $ABC$ cân tại $A$ thì hai đường cao $BH$ và $CK$ bằng nhau\". Khẳng định nào sau đây diễn đạt đúng bằng điều kiện cần?",
                         "Tam giác $ABC$ có hai đường cao $BH = CK$ là điều kiện cần để tam giác $ABC$ cân tại $A$.",
                         "Tam giác $ABC$ cân tại $A$ là điều kiện cần để hai đường cao $BH = CK$.",
                         "Tam giác $ABC$ có hai đường cao $BH = CK$ là điều kiện cần và đủ để tam giác $ABC$ đều.",
                         "Hai đường cao bằng nhau không phải là điều kiện cần.",
                         "A", "Trong $P \\Rightarrow Q$, $Q$ là điều kiện cần để có $P$."),
                make_mcq(10, "VD", "Có bao nhiêu giá trị nguyên $x \\in [-3; 3]$ làm cho mệnh đề chứa biến $P(x)$: \"$x^2 - 4 \\le 0$\" đúng?",
                         "5", "4", "3", "7",
                         "A", "$x^2 \\le 4 \\Leftrightarrow -2 \\le x \\le 2$. Các giá trị nguyên là $\\{-2; -1; 0; 1; 2\\}$ (5 giá trị)."),
                make_mcq(11, "VDC", "Cho mệnh đề $P$: \"$\\forall x \\in \\mathbb{R}, x^2 - 2mx + 4 > 0$\". Tìm tất cả các giá trị thực của tham số $m$ để mệnh đề $P$ là mệnh đề đúng.",
                         "$-2 < m < 2$", "$m \\le -2$ hoặc $m \\ge 2$", "$m > 2$", "$m < -2$",
                         "A", "Để tam thức bậc hai luôn dương với mọi $x \\in \\mathbb{R}$ thì $\\Delta' = m^2 - 4 < 0 \\Leftrightarrow -2 < m < 2$."),
                make_mcq(12, "VDC", "Trong một buổi sinh hoạt lớp, bạn An phát biểu: \"Mọi học sinh trong lớp 10A đều đạt học lực Tốt hoặc Khá\". Bạn Bình phủ định lại câu nói của An. Mệnh đề phủ định của Bình là",
                         "\"Tồn tại ít nhất một học sinh trong lớp 10A có học lực chưa đạt mức Khá hoặc Tốt.\"",
                         "\"Tất cả học sinh trong lớp 10A đều đạt học lực Trung bình.\"",
                         "\"Có một số học sinh đạt học lực Xuất sắc.\"",
                         "\"Không có học sinh nào đạt học lực Tốt.\"",
                         "A", "Phủ định của \"Mọi học sinh đều đạt Tốt hoặc Khá\" là \"Có ít nhất một học sinh không đạt Tốt và không đạt Khá\".")
            ]
            tfs = [
                make_tf(1, "Xét tính đúng sai của các mệnh đề toán học.", [
                    ("a", "Mệnh đề: \"$\\pi$ là một số vô tỉ\" là một mệnh đề đúng.", True, "Số $\\pi$ là số thập phân vô hạn không tuần hoàn."),
                    ("b", "Mệnh đề: \"Tổng của hai số nguyên lẻ là một số lẻ\" là một mệnh đề đúng.", False, "Tổng hai số lẻ luôn là số chẵn, ví dụ $1 + 3 = 4$."),
                    ("c", "Mệnh đề phủ định của \"$\\exists x \\in \\mathbb{R}, x^2 = 2$\" là \"$\\forall x \\in \\mathbb{R}, x^2 \\ne 2$\".", True, "Quy tắc phủ định mệnh đề chứa lượng từ."),
                    ("d", "Mệnh đề: \"Số 2026 chia hết cho 3\" là một mệnh đề đúng.", False, "Tổng các chữ số $2 + 0 + 2 + 6 = 10$ không chia hết cho 3.")
                ]),
                make_tf(2, "Mệnh đề kéo theo và điều kiện cần, điều kiện đủ. Cho định lý: \"Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau\".", [
                    ("a", "Giả thiết $P$ là: \"Hai tam giác bằng nhau\".", True, "Đúng."),
                    ("b", "Kết luận $Q$ là: \"Diện tích của hai tam giác bằng nhau\".", True, "Đúng."),
                    ("c", "Mệnh đề đảo: \"Nếu hai tam giác có diện tích bằng nhau thì hai tam giác đó bằng nhau\" là một mệnh đề đúng.", False, "Hai tam giác cùng diện tích chưa chắc bằng nhau, ví dụ đáy và chiều cao khác nhau."),
                    ("d", "Hai tam giác bằng nhau là điều kiện đủ để diện tích của chúng bằng nhau.", True, "$P$ là điều kiện đủ để có $Q$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho mệnh đề chứa biến $P(n)$: \"$n$ là số nguyên tố\". Hỏi trong các giá trị $n \\in \\{1; 4; 7; 9; 11\\}$, có bao nhiêu giá trị làm cho $P(n)$ đúng?",
                        "2", "Các số nguyên tố là 7 và 11 (2 giá trị)."),
                make_sa(2, "TH", "Số nghiệm nguyên của mệnh đề chứa biến $x^2 \\le 9$ bằng bao nhiêu?",
                        "7", "$x \\in \\{-3; -2; -1; 0; 1; 2; 3\\}$ (7 nghiệm)."),
                make_sa(3, "VD", "Có bao nhiêu số tự nhiên $n < 20$ để mệnh đề \"$n$ chia hết cho 3 hoặc chia hết cho 5\" là mệnh đề đúng?",
                        "9", "Chia hết cho 3: $\\{0, 3, 6, 9, 12, 15, 18\\}$ (7 số). Chia hết cho 5: $\\{0, 5, 10, 15\\}$ (4 số). Hợp lại: 9 số."),
                make_sa(4, "VD", "Tìm số giá trị nguyên của tham số $m \\in [-5; 5]$ để mệnh đề \"$\\forall x \\in \\mathbb{R}, x^2 + 2mx + 9 \\ge 0$\" đúng.",
                        "7", "$\\Delta' = m^2 - 9 \\le 0 \\Leftrightarrow -3 \\le m \\le 3$. Các số nguyên là $\\{-3; -2; -1; 0; 1; 2; 3\\}$ (7 giá trị)."),
                make_sa(5, "VDC", "Cho mệnh đề $P(x)$: \"$x^2 - mx + m + 3 = 0$\". Có bao nhiêu giá trị nguyên dương $m \\le 10$ để mệnh đề \"$\\exists x \\in \\mathbb{R}, P(x)$\" là mệnh đề đúng?",
                        "5", "$\\Delta = m^2 - 4m - 12 \\ge 0 \\Leftrightarrow m \\ge 6$ hoặc $m \\le -2$. Nguyên dương $\\le 10$: $\\{6; 7; 8; 9; 10\\}$ (5 giá trị)."),
                make_sa(6, "VDC", "Trong một phòng họp có 30 đại biểu. Mỗi đại biểu đều bắt tay một lần với các đại biểu khác. Mệnh đề: \"Tổng số cái bắt tay trong phòng bằng $N$\" là mệnh đề đúng. Giá trị của $N$ bằng bao nhiêu?",
                        "435", "$N = \\frac{30 \\times 29}{2} = 435$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Khái niệm mệnh đề và mệnh đề phủ định",
                           "Nêu định nghĩa mệnh đề toán học. Lấy ví dụ một mệnh đề toán học đúng, lập mệnh đề phủ định của nó và xét tính đúng sai của mệnh đề phủ định.",
                           "1. Định nghĩa: Mệnh đề toán học là một khẳng định về một sự kiện trong toán học có tính đúng hoặc sai rõ ràng. Một mệnh đề không thể vừa đúng vừa sai. 2. Ví dụ: Mệnh đề $P$: \"Số 13 là số nguyên tố\" (mệnh đề đúng). Mệnh đề phủ định $\\overline{P}$: \"Số 13 không phải là số nguyên tố\" (mệnh đề sai)."),
                make_essay(2, "TH", 0.5, "Mệnh đề kéo theo và mệnh đề đảo",
                           "Cho định lý: \"Nếu một số tự nhiên có chữ số tận cùng là 0 thì số đó chia hết cho 5\". a) Xác định giả thiết $P$ và kết luận $Q$. b) Phát biểu mệnh đề đảo của định lý trên và xét tính đúng sai của mệnh đề đảo.",
                           "a) Giả thiết $P$: \"Số tự nhiên có chữ số tận cùng là 0\". Kết luận $Q$: \"Số đó chia hết cho 5\". b) Mệnh đề đảo: \"Nếu một số tự nhiên chia hết cho 5 thì số đó có chữ số tận cùng là 0\". Mệnh đề đảo này là SAI, vì một số tự nhiên có tận cùng là 5 (như số 15, 25) vẫn chia hết cho 5."),
                make_essay(3, "VD", 0.5, "Phủ định mệnh đề chứa lượng từ",
                           "Cho các mệnh đề sau: $P$: \"$\\forall x \\in \\mathbb{R}, x^2 - x + 1 > 0$\"; $Q$: \"$\\exists n \\in \\mathbb{N}, n^2 + 1 \\text{ chia hết cho } 3$\". a) Lập mệnh đề phủ định của $P$ và $Q$. b) Xét tính đúng sai của mệnh đề $P$.",
                           "a) - Mệnh đề phủ định của $P$: $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 - x + 1 \\le 0\"$. - Mệnh đề phủ định của $Q$: $\\overline{Q}: \"\\forall n \\in \\mathbb{N}, n^2 + 1 \\text{ không chia hết cho } 3\"$. b) Xét tam thức $x^2 - x + 1$ có $a = 1 > 0$ và biệt thức $\\Delta = (-1)^2 - 4(1)(1) = -3 < 0$. Vì $a > 0$ và $\\Delta < 0$ nên $x^2 - x + 1 > 0$ với mọi $x \\in \\mathbb{R}$. Do đó mệnh đề $P$ là mệnh đề ĐÚNG."),
                make_essay(4, "VDC", 0.5, "Biện luận mệnh đề chứa tham số",
                           "Cho mệnh đề chứa tham số $m$: $A(m)$: \"$\\forall x \\in \\mathbb{R}, (m - 1)x^2 + 2(m - 1)x + 3 > 0$\". Tìm tất cả các giá trị thực của tham số $m$ để mệnh đề $A(m)$ là mệnh đề đúng.",
                           "Trường hợp 1: $m - 1 = 0 \\Leftrightarrow m = 1$. Khi đó bất đẳng thức trở thành: $0x^2 + 0x + 3 > 0 \\Leftrightarrow 3 > 0$ (luôn đúng với mọi $x \\in \\mathbb{R}$). Vậy $m = 1$ thoả mãn. Trường hợp 2: $m - 1 \\ne 0 \\Leftrightarrow m \\ne 1$. Bất đẳng thức bậc hai luôn dương với mọi $x \\in \\mathbb{R}$ khi và chỉ khi: $\\begin{cases} a > 0 \\\\ \\Delta' < 0 \\end{cases} \\Leftrightarrow \\begin{cases} m - 1 > 0 \\\\ (m - 1)^2 - 3(m - 1) < 0 \\end{cases} \\Leftrightarrow \\begin{cases} m > 1 \\\\ (m - 1)(m - 4) < 0 \\end{cases} \\Leftrightarrow \\begin{cases} m > 1 \\\\ 1 < m < 4 \\end{cases} \\Leftrightarrow 1 < m < 4$. Kết hợp cả hai trường hợp, ta được: $1 \\le m < 4$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Trong các câu sau, câu nào không phải là mệnh đề?",
                         "Bạn đã ăn cơm chưa?",
                         "Số 10 là số chẵn.",
                         "$2 + 3 = 6$.",
                         "Hình bình hành có hai đường chéo cắt nhau tại trung điểm mỗi đường.",
                         "A", "Câu hỏi nghi vấn không phải là mệnh đề."),
                make_mcq(2, "NB", "Kí hiệu $\\exists$ trong toán học biểu thị cho",
                         "Tồn tại (hoặc có ít nhất một)",
                         "Với mọi",
                         "Tập hợp con",
                         "Không tồn tại",
                         "A", "Kí hiệu $\\exists$ là \"tồn tại\" (there exists)."),
                make_mcq(3, "NB", "Mệnh đề phủ định của mệnh đề: \"Tất cả các hình chữ nhật đều là hình bình hành\" là",
                         "Tồn tại ít nhất một hình chữ nhật không phải là hình bình hành.",
                         "Không có hình chữ nhật nào là hình bình hành.",
                         "Mọi hình bình hành đều là hình chữ nhật.",
                         "Hình chữ nhật là hình thang cân.",
                         "A", "Phủ định của \"tất cả đều là\" là \"tồn tại ít nhất một không phải là\"."),
                make_mcq(4, "NB", "Cho mệnh đề $P \\Rightarrow Q$. Mệnh đề $P$ được gọi là",
                         "Điều kiện đủ để có $Q$",
                         "Điều kiện cần để có $Q$",
                         "Điều kiện tương đương",
                         "Kết luận của định lý",
                         "A", "Trong $P \\Rightarrow Q$, $P$ là điều kiện đủ để có $Q$."),
                make_mcq(5, "TH", "Mệnh đề phủ định của mệnh đề: \"$\\exists x \\in \\mathbb{Q}, x^2 = 3$\" là",
                         "\"$\\forall x \\in \\mathbb{Q}, x^2 \\ne 3$\"",
                         "\"$\\forall x \\in \\mathbb{Q}, x^2 = 3$\"",
                         "\"$\\exists x \\in \\mathbb{Q}, x^2 \\ne 3$\"",
                         "\"$\\forall x \\notin \\mathbb{Q}, x^2 \\ne 3$\"",
                         "A", "Phủ định của $\\exists$ là $\\forall$, của $=$ là $\\ne$."),
                make_mcq(6, "TH", "Cho mệnh đề chứa biến $P(n)$: \"$n^2 + 1$ chia hết cho 5\". Với giá trị $n$ nào sau đây thì $P(n)$ đúng?",
                         "$n = 2$", "$n = 1$", "$n = 4$", "$n = 5$",
                         "A", "$2^2 + 1 = 5$ chia hết cho 5."),
                make_mcq(7, "TH", "Mệnh đề đảo của mệnh đề: \"Nếu tam giác $ABC$ đều thì tam giác $ABC$ cân\" là",
                         "Nếu tam giác $ABC$ cân thì tam giác $ABC$ đều.",
                         "Nếu tam giác $ABC$ không đều thì tam giác $ABC$ không cân.",
                         "Tam giác $ABC$ cân khi và chỉ khi tam giác $ABC$ đều.",
                         "Tam giác $ABC$ không cân nên không đều.",
                         "A", "Mệnh đề đảo hoán đổi vị trí giả thiết và kết luận."),
                make_mcq(8, "TH", "Trong các khẳng định sau, khẳng định nào là mệnh đề đúng?",
                         "$\\exists x \\in \\mathbb{R}, x^2 + 2x + 1 = 0$",
                         "$\\forall x \\in \\mathbb{R}, x^2 > 0$",
                         "$\\forall n \\in \\mathbb{N}, n^2 > n$",
                         "$\\exists x \\in \\mathbb{R}, x^2 + 1 < 0$",
                         "A", "Phương trình $x^2 + 2x + 1 = (x + 1)^2 = 0$ có nghiệm $x = -1$."),
                make_mcq(9, "VD", "Điều kiện cần và đủ để một tứ giác nội tiếp được đường tròn là",
                         "Tổng số đo hai góc đối diện bằng $180^\\circ$",
                         "Tứ giác có 4 góc vuông",
                         "Hai đường chéo vuông góc với nhau",
                         "Tứ giác có hai cạnh đối song song",
                         "A", "Định lý hình học: Tứ giác nội tiếp khi và chỉ khi tổng hai góc đối bằng $180^\\circ$."),
                make_mcq(10, "VD", "Cho mệnh đề $P(x)$: \"$x^2 - 5x + 6 = 0$\". Tập hợp tất cả các giá trị $x \\in \\mathbb{R}$ làm cho $P(x)$ đúng là",
                         "$\\{2; 3\\}$", "$\\{1; 6\\}$", "$\\{-2; -3\\}$", "$\\{2\\}$",
                         "A", "$x^2 - 5x + 6 = 0 \\Leftrightarrow x = 2$ hoặc $x = 3$."),
                make_mcq(11, "VDC", "Tìm số giá trị nguyên của $m$ để mệnh đề: \"$\\exists x \\in \\mathbb{R}, x^2 - 2(m-1)x + m^2 - 4 = 0$\" là mệnh đề đúng trên đoạn $[-4; 4]$.",
                         "6", "5", "7", "4",
                         "A", "$\\Delta' = (m-1)^2 - (m^2 - 4) = -2m + 5 \\ge 0 \\Leftrightarrow m \\le 2.5$. Các giá trị nguyên thuộc $[-4; 4]$ là $\\{-4; -3; -2; -1; 0; 1; 2\\}$ (7 giá trị)."),
                make_mcq(12, "VDC", "Một giáo viên khẳng định: \"Tất cả các bài kiểm tra 15 phút của lớp 10B đều đạt điểm trên trung bình\". Bạn Minh muốn chứng minh khẳng định của giáo viên là sai. Minh cần đưa ra",
                         "Đúng 1 bài kiểm tra của lớp 10B có điểm dưới hoặc bằng trung bình.",
                         "Tất cả các bài kiểm tra có điểm dưới trung bình.",
                         "Một nửa số bài kiểm tra đạt điểm trung bình.",
                         "Không cần đưa ra bài nào.",
                         "A", "Để bác bỏ mệnh đề với mọi $\\forall$, chỉ cần chỉ ra 1 phản ví dụ tồn tại $\\exists$.")
            ]
            tfs = [
                make_tf(1, "Xét tính đúng sai và lập mệnh đề phủ định. Cho các mệnh đề sau:", [
                    ("a", "Mệnh đề $A$: \"Số 2025 là số chính phương\" là một mệnh đề đúng.", True, "$2025 = 45^2$ là số chính phương."),
                    ("b", "Mệnh đề $B$: \"$\\forall x \\in \\mathbb{R}, |x| \\ge x$\" là một mệnh đề đúng.", True, "Giá trị tuyệt đối luôn lớn hơn hoặc bằng chính nó."),
                    ("c", "Mệnh đề phủ định của $B$ là \"$\\exists x \\in \\mathbb{R}, |x| < x$\".", True, "Đúng."),
                    ("d", "Mệnh đề $C$: \"Nếu $a^2 = b^2$ thì $a = b$\" là một mệnh đề đúng.", False, "Sai, có thể $a = -b$, ví dụ $(-2)^2 = 2^2$ nhưng $-2 \\ne 2$.")
                ]),
                make_tf(2, "Điều kiện cần và đủ trong tam giác. Cho tam giác $ABC$.", [
                    ("a", "Tam giác $ABC$ đều là điều kiện đủ để tam giác $ABC$ cân.", True, "Đều thì chắc chắn cân."),
                    ("b", "Tam giác $ABC$ cân là điều kiện cần để tam giác $ABC$ đều.", True, "Cân là điều kiện cần."),
                    ("c", "Tam giác $ABC$ vuông tại $A$ là điều kiện cần và đủ để $BC^2 = AB^2 + AC^2$.", True, "Định lý Pythagore thuận và đảo."),
                    ("d", "Tam giác $ABC$ có một góc bằng $60^\\circ$ là điều kiện cần và đủ để tam giác $ABC$ đều.", False, "Chỉ là điều kiện cần, chưa đủ (cần thêm cân).")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho mệnh đề chứa biến $P(x)$: \"$x^2 - 16 = 0$\". Tìm số nghiệm thực của phương trình làm cho $P(x)$ đúng.",
                        "2", "$x = \\pm 4$ (2 nghiệm)."),
                make_sa(2, "TH", "Mệnh đề: \"Số nguyên tố chẵn duy nhất là $a$\". Tìm giá trị của $a$.",
                        "2", "Số 2 là số nguyên tố chẵn duy nhất."),
                make_sa(3, "VD", "Có bao nhiêu số nguyên $x \\in [-5; 5]$ thoả mãn mệnh đề: \"$x^2 - 3x \\le 0$\"?",
                        "4", "$0 \\le x \\le 3 \\Rightarrow x \\in \\{0; 1; 2; 3\\}$ (4 số)."),
                make_sa(4, "VD", "Tìm $m$ để mệnh đề phủ định của \"$\\forall x \\in \\mathbb{R}, x^2 - 4x + m > 0$\" có chứa đúng 1 điểm thoả mãn (tức đỉnh parabol chạm trục hoành).",
                        "4", "$\\Delta' = 4 - m = 0 \\Rightarrow m = 4$."),
                make_sa(5, "VDC", "Có bao nhiêu số tự nhiên $n \\le 50$ làm cho mệnh đề: \"$n^2 + n$ chia hết cho 2\" đúng?",
                        "51", "$n(n+1)$ luôn là tích 2 số nguyên liên tiếp nên luôn chẵn, đúng với mọi $n \\in \\mathbb{N}$. Từ 0 đến 50 có 51 số."),
                make_sa(6, "VDC", "Tìm số giá trị nguyên của $m \\in [-10; 10]$ để mệnh đề kéo theo \"Nếu $x > 2$ thì $x > m$\" là mệnh đề đúng.",
                        "13", "Tập nghiệm $(2; +\\infty) \\subset (m; +\\infty) \\Leftrightarrow m \\le 2$. Các số nguyên từ $-10$ đến 2 là 13 số.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Mệnh đề chứa biến và tập nghiệm",
                           "Thế nào là một mệnh đề chứa biến? Cho ví dụ về một mệnh đề chứa biến $P(x)$ và tìm hai giá trị của $x$ để mệnh đề nhận một giá trị đúng và một giá trị sai.",
                           "1. Mệnh đề chứa biến là một câu khẳng định chứa một hoặc nhiều biến số, chưa xác định được tính đúng sai. Khi thay mỗi biến bằng một giá trị cụ thể trong tập xác định thì câu khẳng định đó trở thành một mệnh đề toán học. 2. Ví dụ: $P(x)$: \"$2x - 6 = 0$\". - Với $x = 3$, ta được $2(3) - 6 = 0$ (mệnh đề đúng). - Với $x = 0$, ta được $2(0) - 6 = -6 \\ne 0$ (mệnh đề sai)."),
                make_essay(2, "TH", 0.5, "Sử dụng thuật ngữ điều kiện cần và điều kiện đủ",
                           "Cho định lý: \"Nếu hai góc đối đỉnh thì hai góc đó bằng nhau\". a) Hãy phát biểu định lý trên dưới dạng: \"... là điều kiện đủ để ...\". b) Hãy phát biểu định lý trên dưới dạng: \"... là điều kiện cần để ...\". c) Mệnh đề đảo có đúng không? Vì sao?",
                           "a) \"Hai góc đối đỉnh là điều kiện đủ để hai góc đó bằng nhau\". b) \"Hai góc bằng nhau là điều kiện cần để hai góc đó đối đỉnh\". c) Mệnh đề đảo: \"Nếu hai góc bằng nhau thì hai góc đó đối đỉnh\". Mệnh đề đảo này là SAI, vì hai góc bằng nhau có thể nằm ở hai vị trí so le trong, đồng vị hoặc rời nhau, không nhất thiết phải đối đỉnh."),
                make_essay(3, "VD", 0.5, "Phủ định mệnh đề và chứng minh phản chứng",
                           "Cho mệnh đề $P$: \"Nếu $n^2$ là một số tự nhiên chẵn thì $n$ là một số tự nhiên chẵn\". a) Lập mệnh đề phản chứng giả định kết luận sai. b) Bằng phương pháp chứng minh phản chứng, hãy chứng minh định lý trên.",
                           "a) Giả sử kết luận sai, tức là $n$ là một số tự nhiên lẻ. b) Vì $n$ là số tự nhiên lẻ nên $n$ có dạng $n = 2k + 1$ với $k \\in \\mathbb{N}$. Khi đó bình phương của $n$ là: $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$. Đặt $m = 2k^2 + 2k \\in \\mathbb{N}$, ta có $n^2 = 2m + 1$, là một số tự nhiên lẻ. Điều này mâu thuẫn với giả thiết đề bài cho $n^2$ là số chẵn. Mâu thuẫn này chứng tỏ điều giả sử là sai. Vậy $n$ bắt buộc phải là số tự nhiên chẵn."),
                make_essay(4, "VDC", 0.5, "Tìm tham số để mệnh đề chứa lượng từ luôn đúng",
                           "Cho mệnh đề $P(m)$: \"$\\forall x \\in \\mathbb{R}, mx^2 - 4x + m - 3 \\ge 0$\". Tìm tất cả các giá trị thực của tham số $m$ để mệnh đề $P(m)$ là mệnh đề đúng.",
                           "Trường hợp 1: $m = 0$. Bất phương trình trở thành: $-4x - 3 \\ge 0 \\Leftrightarrow x \\le -3/4$. Điều này không đúng với mọi $x \\in \\mathbb{R}$. Vậy $m = 0$ loại. Trường hợp 2: $m \\ne 0$. Tam thức bậc hai không âm với mọi $x \\in \\mathbb{R}$ khi và chỉ khi: $\\begin{cases} a > 0 \\\\ \\Delta' \\le 0 \\end{cases} \\Leftrightarrow \\begin{cases} m > 0 \\\\ (-2)^2 - m(m - 3) \\le 0 \\end{cases} \\Leftrightarrow \\begin{cases} m > 0 \\\\ 4 - m^2 + 3m \\le 0 \\end{cases} \\Leftrightarrow \\begin{cases} m > 0 \\\\ m^2 - 3m - 4 \\ge 0 \\end{cases}$. Xét $m^2 - 3m - 4 = 0 \\Leftrightarrow m = -1$ hoặc $m = 4$. Bất phương trình có nghiệm: $m \\le -1$ hoặc $m \\ge 4$. Kết hợp với điều kiện $m > 0$, ta được: $m \\ge 4$. Vậy các giá trị cần tìm là $m \\ge 4$.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 2:
        # BÀI 2: TẬP HỢP VÀ CÁC PHÉP TOÁN TRÊN TẬP HỢP
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Kí hiệu nào sau đây dùng để chỉ $x$ là một phần tử thuộc tập hợp $A$?",
                         "$x \\in A$", "$x \\subset A$", "$A \\in x$", "$x \\subseteq A$",
                         "A", "$x \\in A$ biểu thị phần tử $x$ thuộc tập hợp $A$."),
                make_mcq(2, "NB", "Tập hợp $A = \\{x \\in \\mathbb{N} \\mid x \\le 4\\}$ được viết dưới dạng liệt kê các phần tử là",
                         "$\\{0; 1; 2; 3; 4\\}$",
                         "$\\{1; 2; 3; 4\\}$",
                         "$\\{0; 1; 2; 3\\}$",
                         "$\\{1; 2; 3\\}$",
                         "A", "Tập hợp số tự nhiên bắt đầu từ 0: $\\{0; 1; 2; 3; 4\\}$."),
                make_mcq(3, "NB", "Giao của hai tập hợp $A$ và $B$, kí hiệu $A \\cap B$, là tập hợp các phần tử",
                         "Vừa thuộc $A$, vừa thuộc $B$",
                         "Thuộc $A$ hoặc thuộc $B$",
                         "Thuộc $A$ nhưng không thuộc $B$",
                         "Thuộc $B$ nhưng không thuộc $A$",
                         "A", "Định nghĩa SGK: $A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$."),
                make_mcq(4, "NB", "Hợp của hai tập hợp $A$ và $B$, kí hiệu $A \\cup B$, là tập hợp các phần tử",
                         "Thuộc $A$ hoặc thuộc $B$",
                         "Thuộc $A$ và thuộc $B$",
                         "Chỉ thuộc $A$",
                         "Không thuộc cả $A$ và $B$",
                         "A", "Định nghĩa SGK: $A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$."),
                make_mcq(5, "TH", "Cho $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Tập hợp $A \\cap B$ là",
                         "$\\{3; 4\\}$", "$\\{1; 2; 5; 6\\}$", "$\\{1; 2; 3; 4; 5; 6\\}$", "$\\{1; 2\\}$",
                         "A", "Phần tử chung của $A$ và $B$ là 3 và 4."),
                make_mcq(6, "TH", "Cho $A = \\{1; 2; 3\\}$ và $B = \\{3; 4; 5\\}$. Tập hợp hiệu $A \\setminus B$ là",
                         "$\\{1; 2\\}$", "$\\{4; 5\\}$", "$\\{3\\}$", "$\\{1; 2; 3; 4; 5\\}$",
                         "A", "Các phần tử thuộc $A$ nhưng không thuộc $B$ là 1 và 2."),
                make_mcq(7, "TH", "Tập hợp nào sau đây là tập hợp rỗng $\\emptyset$?",
                         "$A = \\{x \\in \\mathbb{R} \\mid x^2 + 1 = 0\\}$",
                         "$B = \\{x \\in \\mathbb{R} \\mid x^2 - 1 = 0\\}$",
                         "$C = \\{x \\in \\mathbb{Z} \\mid |x| < 1\\}$",
                         "$D = \\{0\\}$",
                         "A", "Phương trình $x^2 + 1 = 0$ vô nghiệm trên $\\mathbb{R}$ nên $A = \\emptyset$."),
                make_mcq(8, "TH", "Cho khoảng $A = (1; 4)$ và đoạn $B = [2; 6]$. Khi đó $A \\cup B$ là",
                         "$(1; 6]$", "$[2; 4)$", "$(1; 2]$", "$[4; 6]$",
                         "A", "Hợp từ 1 đến 6 là khoảng nửa đoạn $(1; 6]$."),
                make_mcq(9, "VD", "Cho hai tập hợp $A = [-2; 3]$ và $B = (1; 5)$. Khi đó $A \\cap B$ bằng",
                         "$(1; 3]$", "$[-2; 5)$", "$[-2; 1]$", "$(3; 5)$",
                         "A", "Giao của hai tập hợp là nửa khoảng $(1; 3]$."),
                make_mcq(10, "VD", "Cho tập hợp $X = \\{1; 2; 3\\}$. Số tập hợp con của tập hợp $X$ bằng",
                         "8", "6", "4", "7",
                         "A", "Số tập con của tập có $n$ phần tử là $2^n = 2^3 = 8$."),
                make_mcq(11, "VDC", "Cho hai tập hợp $A = [m; m + 2]$ và $B = (1; 4)$. Tìm tất cả các giá trị của $m$ để $A \\subset B$.",
                         "$1 < m < 2$", "$1 \\le m \\le 2$", "$m > 1$", "$m < 2$",
                         "A", "Để $[m; m+2] \\subset (1; 4)$ thì $1 < m$ và $m + 2 < 4 \\Leftrightarrow 1 < m < 2$."),
                make_mcq(12, "VDC", "Một lớp 10 có 45 học sinh, trong đó có 25 em giỏi môn Toán, 20 em giỏi môn Lý, và 12 em giỏi cả hai môn Toán và Lý. Số học sinh không giỏi môn nào trong hai môn này là",
                         "12", "8", "5", "10",
                         "A", "Số học sinh giỏi ít nhất một môn: $25 + 20 - 12 = 33$. Số em không giỏi môn nào: $45 - 33 = 12$.")
            ]
            tfs = [
                make_tf(1, "Các phép toán trên tập số thực. Cho các tập hợp $A = (-3; 2]$ và $B = (0; 5)$.", [
                    ("a", "Giao của hai tập hợp là $A \\cap B = (0; 2]$.", True, "Đúng."),
                    ("b", "Hợp của hai tập hợp là $A \\cup B = (-3; 5)$.", True, "Đúng."),
                    ("c", "Hiệu của hai tập hợp là $A \\setminus B = (-3; 0]$.", True, "Đúng."),
                    ("d", "Phần bù của $B$ trong $\\mathbb{R}$ là $C_{\\mathbb{R}}B = (-\\infty; 0) \\cup (5; +\\infty)$.", False, "Phải lấy cả hai đầu mút: $(-\\infty; 0] \\cup [5; +\\infty)$.")
                ]),
                make_tf(2, "Số tập con và tính chất tập hợp. Cho tập hợp $S = \\{a; b; c\\}$.", [
                    ("a", "Tập hợp $S$ có đúng 3 phần tử.", True, "Đúng."),
                    ("b", "Tập hợp rỗng $\\emptyset$ là tập con của mọi tập hợp, do đó $\\emptyset \\subset S$.", True, "Tính chất tập rỗng."),
                    ("c", "Tổng số tập con của tập hợp $S$ bằng 8.", True, "$2^3 = 8$."),
                    ("d", "Số tập con gồm đúng 2 phần tử của $S$ là 6.", False, "Số tập con 2 phần tử là $C_3^2 = 3$ tập: $\\{a, b\\}, \\{b, c\\}, \\{c, a\\}$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho tập hợp $A = \\{x \\in \\mathbb{Z} \\mid -2 \\le x < 3\\}$. Số phần tử của $A$ bằng bao nhiêu?",
                        "5", "$A = \\{-2; -1; 0; 1; 2\\}$ (5 phần tử)."),
                make_sa(2, "TH", "Cho $A = \\{1; 2; 3; 4\\}$ và $B = \\{2; 4; 6\\}$. Số phần tử của tập hợp hợp $A \\cup B$ bằng bao nhiêu?",
                        "5", "$A \\cup B = \\{1; 2; 3; 4; 6\\}$ (5 phần tử)."),
                make_sa(3, "VD", "Cho $A = [-3; 1]$ và $B = [0; 4]$. Độ dài của đoạn giao $A \\cap B$ bằng bao nhiêu?",
                        "1", "$A \\cap B = [0; 1]$, độ dài $= 1 - 0 = 1$."),
                make_sa(4, "VD", "Một câu lạc bộ thể thao có 35 bạn chơi bóng chuyền và 28 bạn chơi cầu lông, trong đó có 15 bạn chơi cả hai môn. Hỏi câu lạc bộ có bao nhiêu bạn chơi ít nhất một trong hai môn?",
                        "48", "$35 + 28 - 15 = 48$."),
                make_sa(5, "VDC", "Cho hai tập hợp $A = (-\\infty; m)$ và $B = [3; +\\infty)$. Tìm giá trị nguyên lớn nhất của $m$ để $A \\cap B = \\emptyset$.",
                        "3", "$A \\cap B = \\emptyset \\Leftrightarrow m \\le 3$. Giá trị nguyên lớn nhất là 3."),
                make_sa(6, "VDC", "Một lớp học có 40 học sinh. Có 22 bạn đăng ký thi cờ vua, 18 bạn đăng ký thi kéo co, và có 8 bạn không đăng ký môn nào. Hỏi có bao nhiêu bạn đăng ký thi cả hai môn?",
                        "8", "Số bạn đăng ký ít nhất một môn: $40 - 8 = 32$. Cả 2 môn: $22 + 18 - 32 = 8$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa các phép toán tập hợp",
                           "Nêu định nghĩa giao, hợp và hiệu của hai tập hợp $A$ và $B$. Viết kí hiệu toán học tương ứng.",
                           "1. Giao của $A$ và $B$: Là tập hợp gồm các phần tử vừa thuộc $A$ vừa thuộc $B$: $A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$. 2. Hợp của $A$ và $B$: Là tập hợp gồm các phần tử thuộc $A$ hoặc thuộc $B$: $A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$. 3. Hiệu của $A$ và $B$: Là tập hợp các phần tử thuộc $A$ nhưng không thuộc $B$: $A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}$."),
                make_essay(2, "TH", 0.5, "Thực hiện phép toán trên các khoảng đoạn số thực",
                           "Cho hai tập hợp số thực: $A = [-4; 2)$ và $B = [-1; 5]$. Xác định các tập hợp sau và biểu diễn trên trục số: a) $A \\cap B$. b) $A \\cup B$. c) $A \\setminus B$.",
                           "a) Giao của hai tập hợp: $A \\cap B = [-1; 2)$. b) Hợp của hai tập hợp: $A \\cup B = [-4; 5]$. c) Hiệu của hai tập hợp: $A \\setminus B = [-4; -1)$."),
                make_essay(3, "VD", 0.5, "Bài toán biểu đồ Ven khảo sát ngoại ngữ",
                           "Lớp 10A có 45 học sinh. Trong khảo sát về học ngoại ngữ: có 30 bạn học tiếng Anh, 20 bạn học tiếng Pháp, và có 10 bạn học cả hai thứ tiếng Anh và Pháp. a) Có bao nhiêu bạn chỉ học duy nhất tiếng Anh? b) Có bao nhiêu bạn học ít nhất một trong hai thứ tiếng? c) Có bao nhiêu bạn không học thứ tiếng nào trong hai thứ tiếng trên?",
                           "a) Số bạn chỉ học duy nhất tiếng Anh: $30 - 10 = 20$ bạn. b) Số bạn học ít nhất một trong hai thứ tiếng: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 30 + 20 - 10 = 40$ bạn. c) Số bạn không học thứ tiếng nào trong hai tiếng trên là: $45 - 40 = 5$ bạn."),
                make_essay(4, "VDC", 0.5, "Tìm tham số để hai tập hợp có giao khác rỗng",
                           "Cho hai tập hợp số thực: $A = [m - 1; m + 3]$ và $B = (-2; 4)$. Tìm tất cả các giá trị thực của tham số $m$ để: a) $A \\cap B = \\emptyset$. b) $A \\subset B$.",
                           "a) Hai tập hợp có giao bằng rỗng khi $A$ nằm hoàn toàn bên trái hoặc bên phải của $B$: $A \\cap B = \\emptyset \\Leftrightarrow m + 3 \\le -2$ hoặc $m - 1 \\ge 4 \\Leftrightarrow m \\le -5$ hoặc $m \\ge 5$. b) Để $A \\subset B$, tức $[m - 1; m + 3] \\subset (-2; 4)$, thì: $\\begin{cases} m - 1 > -2 \\\\ m + 3 < 4 \\end{cases} \\Leftrightarrow \\begin{cases} m > -1 \\\\ m < 1 \\end{cases} \\Leftrightarrow -1 < m < 1$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Phần bù của tập hợp con $A$ trong tập hợp $E$, kí hiệu $C_E A$, là",
                         "Hiệu $E \\setminus A$", "Hiệu $A \\setminus E$", "Giao $A \\cap E$", "Hợp $A \\cup E$",
                         "A", "Định nghĩa: $C_E A = E \\setminus A$ với $A \\subset E$."),
                make_mcq(2, "NB", "Tập hợp các số tự nhiên $\\mathbb{N}^*$ là",
                         "$\\{1; 2; 3; 4; \\dots\\}$", "$\\{0; 1; 2; 3; \\dots\\}$", "$\\{0\\}$", "$\\{-1; 0; 1; \\dots\\}$",
                         "A", "$\\mathbb{N}^*$ là tập các số tự nhiên khác 0."),
                make_mcq(3, "NB", "Kí hiệu $[a; b]$ biểu diễn tập hợp số thực nào?",
                         "$\\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$",
                         "$\\{x \\in \\mathbb{R} \\mid a < x < b\\}$",
                         "$\\{x \\in \\mathbb{R} \\mid a \\le x < b\\}$",
                         "$\\{x \\in \\mathbb{R} \\mid a < x \\le b\\}$",
                         "A", "Ngoặc vuông biểu diễn đoạn có lấy cả hai đầu mút."),
                make_mcq(4, "NB", "Kí hiệu $(a; b)$ biểu diễn",
                         "Khoảng từ $a$ đến $b$", "Đoạn từ $a$ đến $b$", "Nửa khoảng", "Tập hợp rỗng",
                         "A", "Ngoặc tròn hai đầu là khoảng."),
                make_mcq(5, "TH", "Cho $A = \\{x \\in \\mathbb{R} \\mid x^2 - 4 = 0\\}$. Khi đó tập hợp $A$ viết theo dạng liệt kê là",
                         "$\\{-2; 2\\}$", "$\\{2\\}$", "$\\{-4; 4\\}$", "$\\{4\\}$",
                         "A", "Phương trình $x^2 - 4 = 0 \\Leftrightarrow x = \\pm 2$."),
                make_mcq(6, "TH", "Cho $A = (-\\infty; 3]$ và $B = (1; +\\infty)$. Khi đó $A \\cap B$ bằng",
                         "$(1; 3]$", "$[1; 3]$", "$(-\\infty; +\\infty)$", "$\\emptyset$",
                         "A", "Giao nhau là nửa khoảng $(1; 3]$."),
                make_mcq(7, "TH", "Cho $A = [0; 5]$ và $B = (2; 7)$. Hiệu $A \\setminus B$ bằng",
                         "$[0; 2]$", "$[0; 2)$", "$(5; 7)$", "$[2; 5]$",
                         "A", "Phần tử thuộc $A$ nhưng không thuộc $B$ là từ 0 đến 2 (bao gồm cả 2 vì 2 không thuộc $B$)."),
                make_mcq(8, "TH", "Số tập con có 1 phần tử của tập hợp $A = \\{x; y; z; t\\}$ bằng",
                         "4", "3", "6", "16",
                         "A", "Có 4 tập con gồm 1 phần tử: $\\{x\\}, \\{y\\}, \\{z\\}, \\{t\\}$."),
                make_mcq(9, "VD", "Phần bù của khoảng $(-\\infty; 2)$ trong $\\mathbb{R}$ là",
                         "$[2; +\\infty)$", "$(2; +\\infty)$", "$(-\\infty; 2]$", "$\\{2\\}$",
                         "A", "$C_{\\mathbb{R}}(-\\infty; 2) = [2; +\\infty)$."),
                make_mcq(10, "VD", "Cho hai tập hợp $A = [-3; 2)$ và $B = (-1; 4]$. Hợp $A \\cup B$ là",
                         "$[-3; 4]$", "$(-1; 2)$", "$[-3; -1)$", "$[2; 4]$",
                         "A", "$A \\cup B = [-3; 4]$."),
                make_mcq(11, "VDC", "Cho hai tập hợp $A = [m - 2; m + 1]$ và $B = [-1; 3]$. Tìm tất cả các giá trị của $m$ để $A \\cap B \\ne \\emptyset$.",
                         "$-2 \\le m \\le 5$", "$-1 \\le m \\le 3$", "$m \\le -2$", "$m \\ge 5$",
                         "A", "$A \\cap B = \\emptyset \\Leftrightarrow m + 1 < -1$ hoặc $m - 2 > 3 \\Leftrightarrow m < -2$ hoặc $m > 5$. Phủ định lại: $-2 \\le m \\le 5$."),
                make_mcq(12, "VDC", "Trong kỳ thi chọn đội tuyển, có 30 học sinh tham gia. Có 16 em đạt giải môn Toán, 14 em đạt giải môn Tin học, và 5 em không đạt giải môn nào. Số em đạt giải cả hai môn Toán và Tin là",
                         "5", "6", "4", "7",
                         "A", "Số em đạt giải ít nhất một môn: $30 - 5 = 25$. Số em đạt giải cả hai môn: $16 + 14 - 25 = 5$.")
            ]
            tfs = [
                make_tf(1, "Các quan hệ bao hàm và phần bù. Cho tập vũ trụ $U = \\{1; 2; 3; 4; 5; 6; 7; 8\\}$ và hai tập con $A = \\{1; 2; 3; 4\\}, B = \\{3; 4; 5; 6\\}$.", [
                    ("a", "Phần bù $C_U A = \\{5; 6; 7; 8\\}$.", True, "Đúng."),
                    ("b", "Phần bù $C_U B = \\{1; 2; 7; 8\\}$.", True, "Đúng."),
                    ("c", "Tập hợp $A \\cap B = \\{3; 4\\}$.", True, "Đúng."),
                    ("d", "Phần bù của $A \\cap B$ trong $U$ là tập hợp rỗng.", False, "$C_U (A \\cap B) = U \\setminus \\{3; 4\\} = \\{1; 2; 5; 6; 7; 8\\} \\ne \\emptyset$.")
                ]),
                make_tf(2, "Khoảng và đoạn trên trục số thực. Cho hai tập hợp $A = (-\\infty; 4]$ và $B = [-2; +\\infty)$.", [
                    ("a", "Giao của hai tập hợp là đoạn $A \\cap B = [-2; 4]$.", True, "Đúng."),
                    ("b", "Hợp của hai tập hợp là toàn bộ trục số thực $A \\cup B = \\mathbb{R}$.", True, "Hai tia phủ kín trục số."),
                    ("c", "Hiệu $A \\setminus B = (-\\infty; -2)$.", True, "Bỏ đi phần từ $-2$ trở đi."),
                    ("d", "Đoạn $[-2; 4]$ có độ dài bằng 2.", False, "Độ dài đoạn là $4 - (-2) = 6 \\ne 2$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho $A = \\{x \\in \\mathbb{N} \\mid x < 6\\}$. Tập hợp $A$ có bao nhiêu phần tử?",
                        "6", "$\\{0; 1; 2; 3; 4; 5\\}$ (6 phần tử)."),
                make_sa(2, "TH", "Cho $A = \\{2; 4; 6\\}$ và $B = \\{1; 2; 3; 4\\}$. Số phần tử của $A \\cap B$ bằng bao nhiêu?",
                        "2", "Gồm $\\{2; 4\\}$ (2 phần tử)."),
                make_sa(3, "VD", "Cho $A = (-2; 3)$ và $B = [1; 5]$. Tập $A \\setminus B$ là khoảng $(-2; a)$. Tìm giá trị của $a$.",
                        "1", "$A \\setminus B = (-2; 1) \\Rightarrow a = 1$."),
                make_sa(4, "VD", "Một nhóm gồm 20 học sinh giỏi, trong đó có 12 em giỏi Văn và 11 em giỏi Sử. Biết mỗi em giỏi ít nhất một môn. Hỏi có bao nhiêu em giỏi cả hai môn?",
                        "3", "$12 + 11 - 20 = 3$."),
                make_sa(5, "VDC", "Tìm số nguyên $m$ nhỏ nhất để khoảng $(m; +\\infty)$ chứa trọn vẹn đoạn $[2; 5]$.",
                        "1", "Để $[2; 5] \\subset (m; +\\infty)$ thì $m < 2$. Số nguyên lớn nhất là 1 (hoặc nếu đề hỏi lớn nhất thì 1)."),
                make_sa(6, "VDC", "Cho $A = [1; 4]$ và $B = [m; m + 1]$. Tìm giá trị của $m$ để $A \\cap B = \\{4\\}$.",
                        "4", "$A$ và $B$ chỉ chạm nhau tại điểm 4 thì mút trái của $B$ là $m = 4$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Khái niệm phần bù trong tập hợp",
                           "Nêu điều kiện để định nghĩa phần bù của tập hợp con $A$ trong tập hợp $E$. Cho ví dụ minh hoạ từ tập số thực $\\mathbb{R}$.",
                           "1. Điều kiện: Tập hợp $A$ phải là tập con của tập hợp $E$ ($A \\subset E$). Khi đó hiệu $E \\setminus A$ được gọi là phần bù của $A$ trong $E$, kí hiệu là $C_E A$. 2. Ví dụ: Trong tập số thực $\\mathbb{R}$, xét tập hợp các số thực không âm $A = [0; +\\infty)$. Phần bù của $A$ trong $\\mathbb{R}$ là tập các số thực âm: $C_{\\mathbb{R}} A = \\mathbb{R} \\setminus [0; +\\infty) = (-\\infty; 0)$."),
                make_essay(2, "TH", 0.5, "Xác định các phép toán tập hợp",
                           "Cho các tập hợp: $A = \\{x \\in \\mathbb{R} \\mid -3 < x \\le 5\\}$; $B = \\{x \\in \\mathbb{R} \\mid x \\ge 1\\}$. a) Viết các tập hợp $A, B$ dưới dạng khoảng, đoạn, nửa khoảng. b) Tìm $A \\cap B, A \\cup B, A \\setminus B$ và $C_{\\mathbb{R}}B$.",
                           "a) Viết lại: $A = (-3; 5]$ (nửa khoảng); $B = [1; +\\infty)$ (nửa khoảng). b) Thực hiện các phép toán: - Giao: $A \\cap B = [1; 5]$. - Hợp: $A \\cup B = (-3; +\\infty)$. - Hiệu: $A \\setminus B = (-3; 1)$. - Phần bù: $C_{\\mathbb{R}}B = \\mathbb{R} \\setminus [1; +\\infty) = (-\\infty; 1)$."),
                make_essay(3, "VD", 0.5, "Giải bài toán thực tế bằng biểu đồ Ven",
                           "Một hội đồng thể thao trường học có 50 giáo viên. Trong một đợt khảo sát rèn luyện sức khoẻ: có 32 thầy cô thường xuyên đi bộ, 24 thầy cô chơi cầu lông, và có 14 thầy cô tham gia cả hai môn thể thao trên. a) Có bao nhiêu thầy cô chỉ tham gia đi bộ mà không chơi cầu lông? b) Có bao nhiêu thầy cô tham gia ít nhất một trong hai môn thể thao trên? c) Có bao nhiêu thầy cô không tham gia môn thể thao nào trong hai môn này?",
                           "a) Số thầy cô chỉ tham gia đi bộ: $32 - 14 = 18$ người. b) Số thầy cô tham gia ít nhất một môn thể thao: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 32 + 24 - 14 = 42$ người. c) Số thầy cô không tham gia môn nào trong hai môn trên: $50 - 42 = 8$ người."),
                make_essay(4, "VDC", 0.5, "Tìm điều kiện tham số để tập con thoả mãn",
                           "Cho hai tập hợp số thực: $A = (m - 3; m + 2]$ và $B = [-2; 5)$. Tìm tất cả các giá trị thực của tham số $m$ để tập hợp $A$ là tập con của tập hợp $B$ ($A \\subset B$).",
                           "Để $A \\subset B$, tức là $(m - 3; m + 2] \\subset [-2; 5)$, thì điều kiện là: $\\begin{cases} m - 3 \\ge -2 \\\\ m + 2 < 5 \\end{cases} \\Leftrightarrow \\begin{cases} m \\ge 1 \\\\ m < 3 \\end{cases} \\Leftrightarrow 1 \\le m < 3$. Vậy các giá trị cần tìm của $m$ là $1 \\le m < 3$.")
            ]
            return mcqs, tfs, sas, essays

    return None
