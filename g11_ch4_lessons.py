# -*- coding: utf-8 -*-
"""
Chương 4 Lớp 11: Quan hệ song song trong không gian.
Bao gồm:
- Bài 10: Đường thẳng và mặt phẳng trong không gian
- Bài 11: Hai đường thẳng song song
- Bài 12: Đường thẳng và mặt phẳng song song
- Bài 13: Hai mặt phẳng song song
- Bài 14: Phép chiếu song song
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch4_lesson(lnum, k):
    if lnum == 10:
        # BÀI 10: ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Có bao nhiêu mặt phẳng đi qua ba điểm phân biệt không thẳng hàng?",
                         "Có duy nhất một mặt phẳng", "Có vô số mặt phẳng", "Không có mặt phẳng nào", "Có 3 mặt phẳng",
                         "A", "Qua ba điểm phân biệt không thẳng hàng có một và chỉ một mặt phẳng."),
                make_mcq(2, "NB", "Hình chóp tứ giác $S.ABCD$ có bao nhiêu mặt bên?",
                         "4 mặt bên", "5 mặt bên", "3 mặt bên", "6 mặt bên",
                         "A", "Hình chóp tứ giác có 4 mặt bên: $(SAB), (SBC), (SCD), (SDA)$."),
                make_mcq(3, "NB", "Trong không gian, điều kiện nào sau đây KHÔNG xác định một mặt phẳng duy nhất?",
                         "Bốn điểm phân biệt bất kì",
                         "Ba điểm không thẳng hàng",
                         "Một điểm và một đường thẳng không đi qua điểm đó",
                         "Hai đường thẳng cắt nhau",
                         "A", "Bốn điểm phân biệt có thể không đồng phẳng (ví dụ 4 đỉnh của tứ diện)."),
                make_mcq(4, "NB", "Giao tuyến của hai mặt phẳng phân biệt (nếu có) là",
                         "Một đường thẳng", "Một điểm", "Một đoạn thẳng", "Một tia",
                         "A", "Nếu hai mặt phẳng phân biệt có điểm chung thì chúng có một đường thẳng chung duy nhất gọi là giao tuyến."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là",
                         "Đường thẳng $SO$", "Đường thẳng $SA$", "Đường thẳng $SB$", "Đường thẳng $SC$",
                         "A", "Hai mặt phẳng có hai điểm chung là $S$ và $O$ (giao điểm của $AC$ và $BD$), nên giao tuyến là $SO$."),
                make_mcq(6, "TH", "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Giao điểm của đường thẳng $MN$ với mặt phẳng $(BCD)$ là",
                         "Không có giao điểm (vì $MN \\parallel BC$)",
                         "Điểm $B$",
                         "Điểm $C$",
                         "Trung điểm của $BC$",
                         "A", "Vì $MN$ là đường trung bình trong tam giác $ABC$ nên $MN \\parallel BC$. Do $BC \\subset (BCD)$ nên $MN \\parallel (BCD)$, không có giao điểm."),
                make_mcq(7, "TH", "Cho tứ diện $ABCD$. Số cạnh của tứ diện là",
                         "6 cạnh", "4 cạnh", "8 cạnh", "5 cạnh",
                         "A", "Tứ diện có 6 cạnh: $AB, BC, CD, DA, AC, BD$."),
                make_mcq(8, "TH", "Cho hình chóp $S.ABC$. Gọi $M$ là một điểm thuộc miền trong tam giác $SBC$. Giao tuyến của mặt phẳng $(SAM)$ và mặt phẳng $(ABC)$ là",
                         "Đường thẳng $AN$ (với $N$ là giao điểm của $SM$ và $BC$)",
                         "Đường thẳng $AB$",
                         "Đường thẳng $AC$",
                         "Đường thẳng $AM$",
                         "A", "$A$ là điểm chung thứ nhất. Trong mặt phẳng $(SBC)$, tia $SM$ cắt $BC$ tại $N$, khi đó $N$ là điểm chung thứ hai. Giao tuyến là $AN$."),
                make_mcq(9, "VD", "Một chiếc giá đỡ máy quay ba chân (tripod) luôn đứng vững chắc trên mặt đất gồ ghề là dựa trên nguyên lý toán học nào?",
                         "Ba điểm không thẳng hàng luôn xác định duy nhất một mặt phẳng",
                         "Hai đường thẳng cắt nhau xác định một mặt phẳng",
                         "Hình chóp tứ giác vững hơn hình chóp tam giác",
                         "Hai mặt phẳng vuông góc",
                         "A", "Ba đầu mút chân giá tiếp xúc với mặt đất tạo thành 3 điểm không thẳng hàng, luôn nằm trọn trên một mặt phẳng duy nhất."),
                make_mcq(10, "VD", "Cho tứ diện $ABCD$. Trên các cạnh $AB, AC, BD$ lần lượt lấy các điểm $M, N, P$ sao cho $MN$ cắt $BC$ tại $I$. Giao điểm của đường thẳng $CD$ với mặt phẳng $(MNP)$ là",
                         "Giao điểm của $IP$ và $CD$",
                         "Điểm $P$",
                         "Giao điểm của $MN$ và $CD$",
                         "Không có giao điểm",
                         "A", "Mặt phẳng $(MNP)$ chứa điểm $I$ (do $I \\in MN$) và điểm $P \\in BD$. Do $I, P$ cùng thuộc mặt phẳng đáy $(BCD)$ nên đường thẳng $IP$ cắt cạnh $CD$ tại điểm cần tìm."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$ đáy là hình thang có đáy lớn $AB = 2CD$. Gọi $M$ là trung điểm của $SA$. Mặt phẳng $(BCM)$ cắt cạnh $SD$ tại điểm $N$. Tỷ số $\\frac{SN}{SD}$ bằng",
                         "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{1}{4}$",
                         "A", "Kéo dài $AD$ và $BC$ cắt nhau tại $E$. Do $CD = \\frac{1}{2}AB$ nên $D$ là trung điểm $AE$. Trong tam giác $SAE$, $M$ là trung điểm $SA$, $D$ là trung điểm $AE$, $EM$ cắt $SD$ tại trọng tâm $N$. Suy ra $SN/SD = 1/3$."),
                make_mcq(12, "VDC", "Cho hình chóp $S.ABC$. Gọi $G$ là trọng tâm tam giác $ABC$. Mặt phẳng $(\\alpha)$ đi qua $AG$ và song song với $BC$. Thiết diện của $(\\alpha)$ với hình chóp là",
                         "Một tam giác", "Một hình thang", "Một tứ giác bất kì", "Một đoạn thẳng",
                         "A", "Thiết diện đi qua đỉnh $A$ và đoạn thẳng qua $G$ song song $BC$ cắt $AB, AC$, do đó thiết diện chính là tam giác.")
            ]
            tfs = [
                make_tf(1, "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$.", [
                    ("a", "Bốn điểm $A, B, C, D$ không cùng thuộc một mặt phẳng.", True, "Định nghĩa hình tứ diện."),
                    ("b", "Điểm $M$ thuộc mặt phẳng $(ABC)$.", True, "Vì $M \\in AB \\subset (ABC)$."),
                    ("c", "Giao tuyến của mặt phẳng $(ABN)$ và $(ABC)$ là đường thẳng $AB$.", True, "Hai điểm chung là $A$ và $B$."),
                    ("d", "Ba đường thẳng $AB, CD, MN$ cùng nằm trong một mặt phẳng.", False, "Vì $AB$ và $CD$ là hai đường thẳng chéo nhau.")
                ]),
                make_tf(2, "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$.", [
                    ("a", "Mặt phẳng $(SAC)$ và $(SBD)$ có điểm chung là đỉnh $S$.", True, "Đúng."),
                    ("b", "Giao điểm của $AC$ và $BD$ là điểm $O$.", True, "Tâm hình bình hành."),
                    ("c", "Giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng $SO$.", True, "Đường thẳng nối hai điểm chung $S$ và $O$."),
                    ("d", "Điểm $S, A, B, C, D$ cùng thuộc một mặt phẳng.", False, "Đỉnh $S$ không thuộc mặt phẳng đáy.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Một hình chóp ngũ giác có bao nhiêu mặt (cả mặt bên và mặt đáy)?", 6, "1 mặt đáy + 5 mặt bên = 6 mặt."),
                make_sa(2, "TH", "Cho tứ diện $ABCD$. Có bao nhiêu cặp cạnh đối diện không có điểm chung?", 3, "3 cặp cạnh chéo nhau: $(AB, CD), (AC, BD), (AD, BC)$."),
                make_sa(3, "TH", "Cho hình chóp $S.ABCD$ có đáy là tứ giác lồi. Hai mặt phẳng $(SAB)$ và $(SCD)$ có bao nhiêu điểm chung hiển nhiên?", 1, "Điểm chung $S$."),
                make_sa(4, "VD", "Cho tứ diện $ABCD$. Lấy 1 điểm trên $AB$, 1 điểm trên $BC$, 1 điểm trên $CD$. Ba điểm này xác định được tối đa bao nhiêu mặt phẳng?", 1, "Ba điểm không thẳng hàng xác định duy nhất 1 mặt phẳng."),
                make_sa(5, "VD", "Cho hình chóp tam giác $S.ABC$. Có bao nhiêu đoạn thẳng nối hai đỉnh bất kì của hình chóp?", 6, "$C_4^2 = 6$ đoạn thẳng."),
                make_sa(6, "VDC", "Cho 5 điểm phân biệt trong không gian sao cho không có 4 điểm nào đồng phẳng. Có thể xác định được bao nhiêu mặt phẳng đi qua 3 trong số 5 điểm đó?", 10, "$C_5^3 = 10$ mặt phẳng.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm giao tuyến của hai mặt phẳng", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác có các cặp cạnh đối không song song. Gọi $O = AC \\cap BD$ và $E = AB \\cap CD$. Tìm giao tuyến của các cặp mặt phẳng: (a) $(SAC)$ và $(SBD)$; (b) $(SAB)$ và $(SCD)$.",
                           "(a) Xét $(SAC)$ và $(SBD)$: Ta có $S$ là điểm chung thứ nhất. Trong đáy $ABCD$, $O = AC \\cap BD \\Rightarrow O \\in AC \\subset (SAC)$ và $O \\in BD \\subset (SBD) \\Rightarrow O$ là điểm chung thứ hai. Vậy giao tuyến là $SO$. (b) Xét $(SAB)$ và $(SCD)$: $S$ là điểm chung thứ nhất. Trong đáy, $E = AB \\cap CD \\Rightarrow E$ là điểm chung thứ hai. Vậy giao tuyến là $SE$."),
                make_essay(2, "TH", 0.5, "Tìm giao điểm của đường thẳng và mặt phẳng", "Cho tứ diện $ABCD$. Gọi $M$ là trung điểm của cạnh $AB$, $N$ là điểm trên cạnh $AC$ sao cho $AN = 2NC$. Tìm giao điểm của đường thẳng $MN$ với mặt phẳng $(BCD)$.",
                           "Trong mặt phẳng $(ABC)$, xét hai đường thẳng $MN$ và $BC$. Vì $\\frac{AM}{MB} = 1 \\ne \\frac{AN}{NC} = 2$ nên $MN$ không song song với $BC$. Do đó $MN$ cắt $BC$ kéo dài tại một điểm $K$. Ta có: $K \\in MN$ và $K \\in BC \\subset (BCD)$. Vậy $K$ chính là giao điểm của đường thẳng $MN$ với mặt phẳng $(BCD)$."),
                make_essay(3, "VD", 0.5, "Tìm thiết diện của hình chóp", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M$ là trung điểm $SC$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(ABM)$.",
                           "Mặt phẳng $(ABM)$ cắt các mặt: $(ABCD)$ theo giao tuyến $AB$; $(SBC)$ theo giao tuyến $BM$; $(SCD)$ theo giao tuyến đi qua $M$ và song song $CD$ (vì $AB \\parallel CD$). Gọi $N$ là trung điểm $SD$, khi đó $MN \\parallel CD \\parallel AB$. Giao tuyến của $(ABM)$ với $(SAD)$ là $AN$. Vậy thiết diện cần tìm là hình thang $ABMN$ (với $MN \\parallel AB$)."),
                make_essay(4, "VDC", 0.5, "Chứng minh ba điểm thẳng hàng", "Cho hình chóp $S.ABCD$ có đáy là hình thang với đáy lớn $AB$, đáy nhỏ $CD$. Gọi $I = AD \\cap BC$, $J = AC \\cap BD$. Gọi mặt phẳng $(\\alpha)$ cắt các cạnh $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$. Giả sử $A'D'$ cắt $B'C'$ tại $I'$ và $A'C'$ cắt $B'D'$ tại $J'$. Chứng minh ba điểm $S, I, I'$ thẳng hàng.",
                           "Xét ba mặt phẳng $(SAD), (SBC)$ và mặt phẳng $(\\alpha)$: Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng $SI$ (vì $S$ chung và $I = AD \\cap BC$). Giao tuyến của $(SAD)$ và $(\\alpha)$ là $A'D'$. Giao tuyến của $(SBC)$ và $(\\alpha)$ là $B'C'$. Điểm $I' = A'D' \\cap B'C'$ là giao điểm của hai giao tuyến thuộc $(\\alpha)$. Do đó $I'$ phải thuộc giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$, tức là $I' \\in SI$. Vậy ba điểm $S, I, I'$ thẳng hàng.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Có bao nhiêu mặt phẳng đi qua hai đường thẳng song song?",
                         "Có duy nhất một mặt phẳng", "Có vô số mặt phẳng", "Không có mặt phẳng nào", "Có hai mặt phẳng",
                         "A", "Hai đường thẳng song song xác định duy nhất một mặt phẳng."),
                make_mcq(2, "NB", "Hình chóp tam giác (tứ diện) có số đỉnh là",
                         "4 đỉnh", "3 đỉnh", "5 đỉnh", "6 đỉnh",
                         "A", "Hình chóp tam giác có 4 đỉnh."),
                make_mcq(3, "NB", "Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì",
                         "Toàn bộ đường thẳng đó nằm trong mặt phẳng",
                         "Đường thẳng cắt mặt phẳng tại 2 điểm",
                         "Đường thẳng song song với mặt phẳng",
                         "Đường thẳng không thuộc mặt phẳng",
                         "A", "Tiên đề cơ bản: Nếu một đường thẳng có hai điểm phân biệt thuộc mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó."),
                make_mcq(4, "NB", "Hình chóp tứ giác $S.ABCD$ có số cạnh là",
                         "8 cạnh", "4 cạnh", "5 cạnh", "6 cạnh",
                         "A", "Có 4 cạnh đáy và 4 cạnh bên, tổng cộng 8 cạnh."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$. Gọi $M$ là trung điểm cạnh $SB$. Điểm $M$ thuộc mặt phẳng nào sau đây?",
                         "Mặt phẳng $(SAB)$", "Mặt phẳng $(SAC)$", "Mặt phẳng $(ABCD)$", "Mặt phẳng $(SCD)$",
                         "A", "$M \\in SB \\subset (SAB)$ nên $M \\in (SAB)$."),
                make_mcq(6, "TH", "Cho tứ diện $ABCD$. Giao tuyến của hai mặt phẳng $(ABC)$ và $(ABD)$ là",
                         "Đường thẳng $AB$", "Đường thẳng $CD$", "Đường thẳng $AC$", "Đường thẳng $BC$",
                         "A", "Hai điểm chung rõ ràng là $A$ và $B$."),
                make_mcq(7, "TH", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với $AB \\parallel CD$. Giao tuyến của $(SAD)$ và $(SBC)$ đi qua điểm nào ở đáy?",
                         "Giao điểm của $AD$ và $BC$", "Giao điểm của $AB$ và $CD$", "Trung điểm của $AB$", "Điểm $A$",
                         "A", "Kéo dài $AD$ và $BC$ cắt nhau tại điểm chung thứ hai dưới đáy."),
                make_mcq(8, "TH", "Cho tứ diện $ABCD$. Gọi $I$ là trung điểm của $BC$. Giao tuyến của $(ADI)$ và $(ABC)$ là",
                         "Đường thẳng $AI$", "Đường thẳng $BC$", "Đường thẳng $AD$", "Đường thẳng $DI$",
                         "A", "Hai điểm chung là $A$ và $I$."),
                make_mcq(9, "VD", "Người ta làm một chiếc lều cắm trại hình chóp tứ giác đều có 4 cọc cắm đất ở 4 góc và 1 cột chống ở giữa đỉnh lều. Số mặt vải bạt che xung quanh lều là",
                         "4 mặt tam giác", "5 mặt", "3 mặt", "6 mặt",
                         "A", "Hình chóp tứ giác có 4 mặt bên là 4 tam giác."),
                make_mcq(10, "VD", "Cho tứ diện $ABCD$. Gọi $M, N$ là các điểm lần lượt trên $AB, CD$. Số đường thẳng nối các cặp điểm trong tập hợp $\\{A, B, C, D, M, N\\}$ mà không nằm trên các cạnh của tứ diện là",
                         "1 đường ($MN$)", "2 đường", "3 đường", "4 đường",
                         "A", "Đoạn thẳng $MN$ nối hai điểm trên hai cạnh đối diện."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$. Gọi $M$ thuộc cạnh $SC$. Mặt phẳng $(ABM)$ cắt cạnh $SD$ tại $N$. Khẳng định nào sau đây là đúng về tứ giác $ABMN$?",
                         "Tứ giác $ABMN$ là một thiết diện phẳng",
                         "Tứ giác $ABMN$ không phẳng",
                         "Tứ giác $ABMN$ luôn là hình thoi",
                         "Tứ giác $ABMN$ luôn là hình chữ nhật",
                         "A", "Các đỉnh $A, B, M, N$ cùng thuộc mặt phẳng $(ABM)$ nên tạo thành thiết diện phẳng."),
                make_mcq(12, "VDC", "Cho tứ diện $ABCD$ có thể tích $V$. Lấy điểm $M$ trên $AB$ sao cho $AM = 2MB$. Tỷ số khoảng cách từ $M$ đến mặt phẳng $(BCD)$ so với khoảng cách từ $A$ đến mặt phẳng $(BCD)$ bằng",
                         "$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$",
                         "A", "Ta có $\\frac{MB}{AB} = \\frac{1}{3}$, do đó tỷ số khoảng cách từ $M$ xuống đáy bằng $\\frac{MB}{AB} = \\frac{1}{3}$.")
            ]
            tfs = [
                make_tf(1, "Cho tứ diện $ABCD$. Lấy điểm $M$ trên cạnh $AB$ và điểm $N$ trên cạnh $AC$ sao cho $MN$ không song song với $BC$.", [
                    ("a", "Đường thẳng $MN$ nằm trong mặt phẳng $(ABC)$.", True, "Vì $M, N \\in (ABC)$."),
                    ("b", "Đường thẳng $MN$ cắt đường thẳng $BC$.", True, "Hai đường thẳng đồng phẳng và không song song thì cắt nhau."),
                    ("c", "Giao điểm của $MN$ và $BC$ thuộc mặt phẳng $(BCD)$.", True, "Vì điểm đó thuộc $BC \\subset (BCD)$."),
                    ("d", "Đường thẳng $MN$ cắt đường thẳng $CD$.", False, "Hai đường thẳng $MN$ và $CD$ chéo nhau.")
                ]),
                make_tf(2, "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là tứ giác lồi.", [
                    ("a", "Hình chóp có tất cả 5 đỉnh.", True, "1 đỉnh chóp và 4 đỉnh đáy."),
                    ("b", "Hình chóp có 8 cạnh.", True, "4 cạnh đáy và 4 cạnh bên."),
                    ("c", "Hình chóp có 5 mặt.", True, "1 mặt đáy và 4 mặt bên."),
                    ("d", "Hai đường chéo $AC$ và $BD$ luôn chéo nhau trong không gian.", False, "Vì $A, B, C, D$ cùng nằm trong mặt đáy nên $AC$ và $BD$ cắt nhau.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Hình chóp lục giác có bao nhiêu cạnh?", 12, "6 cạnh đáy + 6 cạnh bên = 12 cạnh."),
                make_sa(2, "TH", "Cho tứ diện $ABCD$. Có bao nhiêu mặt phẳng đi qua 3 đỉnh bất kì của tứ diện?", 4, "$C_4^3 = 4$ mặt."),
                make_sa(3, "TH", "Cho hình chóp tứ giác $S.ABCD$. Mặt phẳng $(SAC)$ cắt mặt phẳng đáy $(ABCD)$ theo đoạn thẳng nào?", 1, "Đoạn thẳng $AC$."),
                make_sa(4, "VD", "Có bao nhiêu đường thẳng đi qua từng cặp điểm trong 4 đỉnh của tứ diện?", 6, "$C_4^2 = 6$ cạnh."),
                make_sa(5, "VD", "Cho tứ diện $ABCD$. Điểm $M$ nằm trong tam giác $BCD$. Đường thẳng $AM$ cắt mặt phẳng $(BCD)$ tại mấy điểm?", 1, "Cắt tại 1 điểm duy nhất $M$."),
                make_sa(6, "VDC", "Cho 6 điểm phân biệt không có 4 điểm nào đồng phẳng. Số mặt phẳng tạo bởi 3 trong số 6 điểm đó là bao nhiêu?", 20, "$C_6^3 = 20$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm giao tuyến của hai mặt phẳng", "Cho tứ diện $ABCD$. Gọi $M$ là một điểm thuộc cạnh $AB$, $N$ là điểm thuộc cạnh $AC$. Tìm giao tuyến của mặt phẳng $(DMN)$ với mặt phẳng $(BCD)$.",
                           "Trong tam giác $ABC$, đường thẳng $MN$ cắt cạnh $BC$ tại $E$ (giả sử $MN$ không song song $BC$). Khi đó: $E \\in MN \\subset (DMN)$ và $E \\in BC \\subset (BCD)$, nên $E$ là điểm chung. Lại có $D$ là điểm chung hiển nhiên của $(DMN)$ và $(BCD)$. Vậy giao tuyến của hai mặt phẳng là đường thẳng $DE$."),
                make_essay(2, "TH", 0.5, "Xác định điểm đồng quy", "Cho hình chóp $S.ABCD$ có đáy là hình thang với đáy lớn $AB$, đáy nhỏ $CD$. Gọi $E = AD \\cap BC$. Chứng minh ba mặt phẳng $(SAD), (SBC)$ và $(ABCD)$ cùng đi qua một điểm.",
                           "Ta có: $E = AD \\cap BC$. Do $AD \\subset (SAD)$ nên $E \\in (SAD)$. Do $BC \\subset (SBC)$ nên $E \\in (SBC)$. Mặt khác, $E \\in AD \\subset (ABCD)$ nên $E \\in (ABCD)$. Vậy điểm $E$ là điểm chung của cả ba mặt phẳng $(SAD), (SBC)$ và $(ABCD)$."),
                make_essay(3, "VD", 0.5, "Tìm thiết diện của tứ diện", "Cho tứ diện đều $ABCD$. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh $AB, BC, CD$. Xác định thiết diện của tứ diện cắt bởi mặt phẳng $(MNP)$.",
                           "Trong mặt phẳng $(ABC)$, nối $MN$. Vì $M, N$ là trung điểm của $AB, BC$ nên $MN$ là đường trung bình, $MN \\parallel AC$. Trong mặt phẳng $(ACD)$, qua $P$ kẻ đường thẳng song song với $AC$ cắt $AD$ tại $Q$. Khi đó $Q$ là trung điểm của $AD$. Mặt phẳng $(MNP)$ cắt 4 mặt của tứ diện theo 4 đoạn giao tuyến $MN, NP, PQ, QM$. Vậy thiết diện là hình bình hành $MNPQ$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong xây dựng", "Một giàn không gian mái kính có dạng hình chóp tứ giác $S.ABCD$. Để gia cố giàn, người ta lắp thêm một thanh dầm nối từ đỉnh $S$ đến tâm $O$ của đáy hình bình hành $ABCD$. Chứng minh thanh dầm $SO$ nằm trên đường giao tuyến của hai mặt chéo kính $(SAC)$ và $(SBD)$.",
                           "Xét hai mặt phẳng $(SAC)$ và $(SBD)$: Đỉnh chóp $S$ hiển nhiên thuộc cả hai mặt phẳng. Điểm $O$ là giao điểm của hai đường chéo $AC$ và $BD$ trong mặt phẳng đáy, do đó $O \\in AC \\subset (SAC)$ và $O \\in BD \\subset (SBD)$. Vì hai điểm phân biệt $S$ và $O$ đều thuộc cả hai mặt phẳng nên đường thẳng $SO$ nối hai điểm đó chính là đường giao tuyến duy nhất của hai mặt phẳng chéo $(SAC)$ và $(SBD)$. Do đó thanh dầm $SO$ hoàn toàn nằm trên giao tuyến của hai mặt này.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 11:
        # BÀI 11: HAI ĐƯỜNG THẲNG SONG SONG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Trong không gian, hai đường thẳng được gọi là song song nếu",
                         "Chúng cùng nằm trong một mặt phẳng và không có điểm chung",
                         "Chúng không có điểm chung",
                         "Chúng không cắt nhau",
                         "Chúng cùng vuông góc với một đường thẳng",
                         "A", "Hai đường thẳng song song trong không gian là hai đường thẳng đồng phẳng và không có điểm chung."),
                make_mcq(2, "NB", "Hai đường thẳng chéo nhau trong không gian là hai đường thẳng",
                         "Không cùng nằm trong bất kì mặt phẳng nào",
                         "Không có điểm chung",
                         "Cắt nhau",
                         "Song song với nhau",
                         "A", "Hai đường thẳng chéo nhau là hai đường thẳng không đồng phẳng."),
                make_mcq(3, "NB", "Cho ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt. Nếu hai trong ba giao tuyến đó song song với nhau thì",
                         "Giao tuyến thứ ba cũng song song với hai giao tuyến đó",
                         "Giao tuyến thứ ba vuông góc với hai giao tuyến đó",
                         "Ba giao tuyến đồng quy",
                         "Giao tuyến thứ ba trùng với một trong hai giao tuyến",
                         "A", "Định lý giao tuyến ba mặt phẳng: Nếu hai giao tuyến song song thì giao tuyến thứ ba cũng song song với chúng."),
                make_mcq(4, "NB", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Cặp đường thẳng nào sau đây song song với nhau?",
                         "$AB$ và $CD$", "$SA$ và $CD$", "$SB$ và $AC$", "$AD$ và $SC$",
                         "A", "Vì đáy $ABCD$ là hình bình hành nên $AB \\parallel CD$."),
                make_mcq(5, "TH", "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Vị trí tương đối của hai đường thẳng $MN$ và $CD$ là",
                         "Chéo nhau", "Song song", "Cắt nhau", "Trùng nhau",
                         "A", "Ta có $MN \\subset (ABC)$ và $CD \\subset (BCD)$. Vì $MN \\parallel BC$ mà $BC$ cắt $CD$ tại $C$ nên $MN$ và $CD$ chéo nhau."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là",
                         "Đường thẳng đi qua $S$ và song song với $AB$ và $CD$",
                         "Đường thẳng $SO$ với $O$ là tâm hình bình hành",
                         "Đường thẳng đi qua $S$ và song song với $AD$",
                         "Không có giao tuyến",
                         "A", "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ và lần lượt chứa hai đường thẳng song song $AB \\parallel CD$, nên giao tuyến là đường thẳng qua $S$ song song với $AB, CD$."),
                make_mcq(7, "TH", "Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$. Tứ giác $MNPQ$ là",
                         "Hình bình hành", "Hình thang cân", "Hình chữ nhật", "Hình vuông",
                         "A", "$MN$ và $PQ$ cùng song song và bằng một nửa $AC$, nên $MNPQ$ là hình bình hành."),
                make_mcq(8, "TH", "Trong không gian, cho hai đường thẳng song song $a$ và $b$. Đường thẳng $c$ cắt $a$. Vị trí tương đối của $c$ và $b$ có thể là",
                         "Cắt nhau hoặc chéo nhau",
                         "Chỉ có thể cắt nhau",
                         "Chỉ có thể song song",
                         "Chỉ có thể chéo nhau",
                         "A", "Đường thẳng $c$ có thể nằm trong mặt phẳng $(a, b)$ (khi đó cắt $b$) hoặc không đồng phẳng với $b$ (khi đó chéo $b$)."),
                make_mcq(9, "VD", "Người ta làm một khung giàn giáo gồm các thanh sắt giằng chéo nhau. Hai thanh sắt đặt trên hai bức tường đối diện của một căn phòng hình hộp chữ nhật có vị trí tương đối là",
                         "Song song hoặc chéo nhau", "Luôn cắt nhau", "Luôn vuông góc", "Trùng nhau",
                         "A", "Hai thanh sắt thuộc hai mặt đối diện có thể song song hoặc chéo nhau."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình thang với đáy lớn $AB = 2CD$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Khẳng định nào sau đây là đúng?",
                         "$MN \\parallel CD$ và $MN = CD$",
                         "$MN \\parallel CD$ và $MN = 2CD$",
                         "$MN$ cắt $CD$",
                         "$MN$ chéo $CD$",
                         "A", "$MN$ là đường trung bình trong tam giác $SAB$ nên $MN \\parallel AB$ và $MN = \\frac{1}{2}AB = CD$. Lại có $AB \\parallel CD$ nên $MN \\parallel CD$ và $MN = CD$."),
                make_mcq(11, "VDC", "Cho tứ diện $ABCD$. Gọi $G_1, G_2$ lần lượt là trọng tâm tam giác $ABC$ và tam giác $ABD$. Khẳng định nào sau đây đúng?",
                         "$G_1 G_2 \\parallel CD$ và $G_1 G_2 = \\frac{1}{3}CD$",
                         "$G_1 G_2 \\parallel CD$ và $G_1 G_2 = \\frac{2}{3}CD$",
                         "$G_1 G_2$ cắt $CD$",
                         "$G_1 G_2$ chéo $CD$",
                         "A", "Gọi $M$ là trung điểm $AB$. Trong tam giác $MCD$, $\\frac{MG_1}{MC} = \\frac{MG_2}{MD} = \\frac{1}{3}$. Theo định lý Ta-lét đảo, $G_1 G_2 \\parallel CD$ và $G_1 G_2 = \\frac{1}{3}CD$."),
                make_mcq(12, "VDC", "Cho hình chóp $S.ABCD$ đáy là hình bình hành. Gọi $M, N$ là các điểm trên $SC, SD$ sao cho $\\frac{SM}{SC} = \\frac{SN}{SD} = \\frac{2}{3}$. Thiết diện của hình chóp cắt bởi mặt phẳng $(ABM)$ là hình gì?",
                         "Hình thang", "Hình tam giác", "Hình bình hành", "Hình chữ nhật",
                         "A", "Vì $\\frac{SM}{SC} = \\frac{SN}{SD}$ nên $MN \\parallel CD \\parallel AB$. Điểm $N$ thuộc mặt phẳng $(ABM)$. Thiết diện là tứ giác $ABMN$ có $MN \\parallel AB$, nên là hình thang.")
            ]
            tfs = [
                make_tf(1, "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành.", [
                    ("a", "Hai đường thẳng $AB$ và $CD$ song song với nhau.", True, "Tính chất đáy hình bình hành."),
                    ("b", "Hai đường thẳng $SA$ và $CD$ là hai đường thẳng chéo nhau.", True, "Không cùng nằm trong một mặt phẳng."),
                    ("c", "Giao tuyến của $(SAB)$ và $(SCD)$ song song với đường thẳng $AB$.", True, "Theo định lý giao tuyến song song."),
                    ("d", "Hai đường chéo $AC$ và $BD$ song song với nhau.", False, "$AC$ và $BD$ cắt nhau tại tâm $O$.")
                ]),
                make_tf(2, "Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$.", [
                    ("a", "Đoạn thẳng $MN$ song song với cạnh $AC$.", True, "Đường trung bình tam giác $ABC$."),
                    ("b", "Đoạn thẳng $PQ$ song song với cạnh $AC$.", True, "Đường trung bình tam giác $ACD$."),
                    ("c", "Tứ giác $MNPQ$ là một hình bình hành.", True, "Có $MN \\parallel PQ$ và $MN = PQ = \\frac{1}{2}AC$."),
                    ("d", "Đường thẳng $MP$ cắt đường thẳng $NQ$.", True, "Hai đường chéo của hình bình hành $MNPQ$ cắt nhau tại trung điểm mỗi đường.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho tứ diện $ABCD$. Có bao nhiêu cặp cạnh đối diện chéo nhau?", 3, "Có 3 cặp cạnh chéo nhau."),
                make_sa(2, "TH", "Cho tam giác $SAB$ có $M, N$ là trung điểm $SA, SB$. Nếu $AB = 10$ cm thì độ dài $MN$ bằng bao nhiêu cm?", 5, "$MN = AB / 2 = 5$ cm."),
                make_sa(3, "TH", "Cho hình chóp $S.ABCD$ có $AB \\parallel CD$. Mặt phẳng $(SAB)$ và $(SCD)$ có giao tuyến đi qua đỉnh nào?", 1, "Đi qua đỉnh $S$."),
                make_sa(4, "VD", "Cho tứ diện $ABCD$ có $AB = 8, CD = 6$. Gọi $M, N, P, Q$ là trung điểm các cạnh $BC, BD, AD, AC$. Tính chu vi hình bình hành $MNPQ$.", 14, "$2 \\times (8/2 + 6/2) = 2 \\times (4 + 3) = 14$."),
                make_sa(5, "VD", "Cho hình thang $ABCD$ có đáy lớn $AB = 12$ cm, đáy nhỏ $CD = 6$ cm. Đường trung bình của hình thang dài bao nhiêu cm?", 9, "$(12 + 6)/2 = 9$ cm."),
                make_sa(6, "VDC", "Cho tứ diện $ABCD$. Gọi $G_1, G_2$ là trọng tâm $\\triangle ABC$ và $\\triangle ABD$. Biết $CD = 15$ cm, tính độ dài đoạn thẳng $G_1 G_2$ (cm).", 5, "$G_1 G_2 = CD / 3 = 15 / 3 = 5$ cm.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm giao tuyến của hai mặt phẳng chứa hai đường song song", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Tìm giao tuyến của hai mặt phẳng $(SAD)$ và $(SBC)$.",
                           "Xét hai mặt phẳng $(SAD)$ và $(SBC)$: Ta có đỉnh $S$ là điểm chung. Mặt khác, trong đáy $ABCD$ ta có $AD \\subset (SAD), BC \\subset (SBC)$ và $AD \\parallel BC$ (do $ABCD$ là hình bình hành). Theo định lý về giao tuyến của hai mặt phẳng lần lượt chứa hai đường thẳng song song, giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng $d$ đi qua $S$ và song song với cả $AD$ và $BC$."),
                make_essay(2, "TH", 0.5, "Chứng minh hình bình hành trong không gian", "Cho tứ diện $ABCD$. Gọi $I, J, K, L$ lần lượt là trung điểm của các cạnh $AC, BC, BD, AD$. Chứng minh tứ giác $IJKL$ là một hình bình hành.",
                           "Xét tam giác $ABC$: $I, J$ lần lượt là trung điểm của $AC, BC \\Rightarrow IJ$ là đường trung bình $\\Rightarrow IJ \\parallel AB$ và $IJ = \\frac{1}{2}AB$. Xét tam giác $ABD$: $L, K$ lần lượt là trung điểm của $AD, BD \\Rightarrow LK$ là đường trung bình $\\Rightarrow LK \\parallel AB$ và $LK = \\frac{1}{2}AB$. Từ đó suy ra $IJ \\parallel LK$ và $IJ = LK$. Vậy tứ giác $IJKL$ là hình bình hành."),
                make_essay(3, "VD", 0.5, "Chứng minh đường thẳng song song", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N, P, Q$ lần lượt là trung điểm của các đoạn thẳng $SA, SB, SC, SD$. Chứng minh tứ giác $MNPQ$ là hình bình hành.",
                           "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB$ và $MN = \\frac{1}{2}AB$. Trong tam giác $SCD$, $QP$ là đường trung bình nên $QP \\parallel CD$ và $QP = \\frac{1}{2}CD$. Vì $ABCD$ là hình bình hành nên $AB \\parallel CD$ và $AB = CD$. Suy ra $MN \\parallel QP$ và $MN = QP$. Do đó tứ giác $MNPQ$ là hình bình hành."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế cấu trúc giàn mái", "Một giàn mái nhà có hai khung vì kèo tam giác $SAB$ và $S'A'B'$ có hình dạng và kích thước bằng nhau đặt song song trên hai bức tường cách nhau một khoảng không đổi. Để giằng cố định đỉnh mái, người ta lắp một xà gồ nối từ đỉnh $S$ đến $S'$. Chứng minh thanh xà gồ $SS'$ song song với hai thanh xà gồ chân mái $AA'$ và $BB'$.",
                           "Vì hai vì kèo tam giác đặt song song và các đỉnh tương ứng cách đều nhau nên tứ giác $ABB'A'$ là hình bình hành, suy ra $AA' \\parallel BB'$. Tương tự, xét các mặt bên của mái nhà, tứ giác $SAA'S'$ là hình bình hành nên $SS' \\parallel AA'$. Từ đó theo tính chất bắc cầu của quan hệ song song trong không gian: $SS' \\parallel AA' \\parallel BB'$. Vậy thanh xà gồ đỉnh mái $SS'$ hoàn toàn song song với hai thanh xà gồ chân mái $AA'$ và $BB'$, đảm bảo độ dốc của hai mái ngói luôn đồng đều theo chiều dài toà nhà.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Hai đường thẳng chéo nhau là hai đường thẳng",
                         "Không đồng phẳng", "Song song", "Cắt nhau", "Trùng nhau",
                         "A", "Hai đường thẳng chéo nhau là hai đường thẳng không cùng nằm trong một mặt phẳng nào."),
                make_mcq(2, "NB", "Trong không gian, qua một điểm nằm ngoài một đường thẳng cho trước có bao nhiêu đường thẳng song song với đường thẳng đó?",
                         "Có duy nhất một đường thẳng", "Có vô số đường thẳng", "Không có đường thẳng nào", "Có hai đường thẳng",
                         "A", "Tiên đề Ơ-clit trong không gian: qua một điểm ngoài đường thẳng có duy nhất một đường thẳng song song với đường thẳng đã cho."),
                make_mcq(3, "NB", "Cho hình chóp $S.ABCD$ đáy là hình chữ nhật. Cặp đường thẳng nào sau đây song song?",
                         "$AD$ và $BC$", "$SA$ và $BC$", "$SB$ và $CD$", "$SC$ và $AB$",
                         "A", "Đáy là hình chữ nhật nên $AD \\parallel BC$."),
                make_mcq(4, "NB", "Nếu hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì",
                         "Chúng song song với nhau", "Chúng chéo nhau", "Chúng cắt nhau", "Chúng vuông góc nhau",
                         "A", "Tính chất bắc cầu: $a \\parallel c$ và $b \\parallel c \\Rightarrow a \\parallel b$."),
                make_mcq(5, "TH", "Cho tứ diện $ABCD$. Cặp cạnh nào sau đây là hai đường thẳng chéo nhau?",
                         "$AB$ và $CD$", "$AB$ và $AC$", "$BC$ và $CD$", "$AD$ và $BD$",
                         "A", "Hai cạnh đối diện của tứ diện $AB$ và $CD$ luôn chéo nhau."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ đáy là hình bình hành. Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng đi qua $S$ và",
                         "Song song với $AD$ và $BC$",
                         "Vuông góc với $AD$",
                         "Cắt cạnh $AB$",
                         "Đi qua điểm $O$ tâm hình bình hành",
                         "A", "Giao tuyến đi qua $S$ và song song với hai cạnh đáy $AD, BC$."),
                make_mcq(7, "TH", "Cho tam giác $SAB$ có $M, N$ là trung điểm $SA, SB$. Đường thẳng $MN$ song song với đường thẳng nào?",
                         "$AB$", "$SA$", "$SB$", "$SM$",
                         "A", "$MN$ là đường trung bình nên $MN \\parallel AB$."),
                make_mcq(8, "TH", "Trong không gian cho 3 đường thẳng $a, b, c$. Biết $a \\parallel b$ và $c$ chéo $a$. Khẳng định nào sau đây chắc chắn sai?",
                         "$c \\parallel b$", "$c$ chéo $b$", "$c$ cắt $b$", "$b$ không trùng $c$",
                         "A", "Nếu $c \\parallel b$ mà $b \\parallel a$ thì dẫn đến $c \\parallel a$ (mâu thuẫn với giả thiết $c$ chéo $a$)."),
                make_mcq(9, "VD", "Các dầm sắt ngang chịu lực của trần nhà hình hộp chữ nhật được lắp đặt song song nhau nhằm mục đích",
                         "Phân bổ tải trọng đều đặn và đảm bảo kết cấu đồng phẳng chịu lực",
                         "Tạo độ dốc",
                         "Để trang trí",
                         "Để giảm chiều cao",
                         "A", "Các dầm ngang song song giúp lực phân bố đều lên hai bức tường chịu lực."),
                make_mcq(10, "VD", "Cho tứ diện $ABCD$. Gọi $M, N, P, Q, R, S$ lần lượt là trung điểm của 6 cạnh $AB, CD, BC, AD, AC, BD$. Ba đoạn thẳng $MN, PQ, RS$",
                         "Cùng cắt nhau tại trung điểm của mỗi đoạn",
                         "Song song với nhau",
                         "Đôi một chéo nhau",
                         "Trùng nhau",
                         "A", "Ba đoạn thẳng nối trung điểm các cặp cạnh đối diện của tứ diện luôn đồng quy tại trung điểm của mỗi đoạn."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Lấy $M$ trên $SA$ sao cho $SM = \\frac{1}{3}SA$. Mặt phẳng $(\\alpha)$ qua $M$ và song song với $AB, SC$ cắt $SB$ tại $N$. Tỷ số $\\frac{SN}{SB}$ bằng",
                         "$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{1}{4}$",
                         "A", "Vì $(\\alpha) \\parallel AB$ nên giao tuyến của $(\\alpha)$ với $(SAB)$ là $MN \\parallel AB$. Do đó $\\frac{SN}{SB} = \\frac{SM}{SA} = \\frac{1}{3}$."),
                make_mcq(12, "VDC", "Cho tứ diện $ABCD$. Điểm $M$ thuộc miền trong tam giác $ABC$. Mặt phẳng qua $M$ song song với $AB$ và $CD$ cắt các cạnh của tứ diện tạo thành thiết diện là hình gì?",
                         "Hình bình hành", "Hình tam giác", "Hình thang cân", "Hình vuông",
                         "A", "Mặt phẳng song song với 2 đường thẳng chéo nhau $AB$ và $CD$ sẽ cắt các mặt theo các cặp cạnh đối diện song song, tạo thành hình bình hành.")
            ]
            tfs = [
                make_tf(1, "Cho hình chóp $S.ABCD$ có đáy là hình thang với hai đáy $AB$ và $CD$ ($AB \\parallel CD$).", [
                    ("a", "Đường thẳng $AB$ song song với đường thẳng $CD$.", True, "Đáy là hình thang."),
                    ("b", "Đường thẳng $SA$ và $CD$ chéo nhau.", True, "Không cùng thuộc một mặt phẳng."),
                    ("c", "Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ và song song với $AB$.", True, "Theo định lý giao tuyến song song."),
                    ("d", "Hai cạnh bên $AD$ và $BC$ luôn song song với nhau.", False, "Hình thang thông thường hai cạnh bên cắt nhau.")
                ]),
                make_tf(2, "Cho tứ diện $ABCD$. Gọi $M, N$ là trung điểm của $AC$ và $BC$.", [
                    ("a", "Đoạn thẳng $MN$ song song với $AB$.", True, "Đường trung bình tam giác $ABC$."),
                    ("b", "Đoạn thẳng $MN$ có độ dài bằng một nửa $AB$.", True, "Đúng."),
                    ("c", "Đường thẳng $MN$ cắt đường thẳng $AD$.", False, "Hai đường thẳng chéo nhau."),
                    ("d", "Đường thẳng $MN$ và đường thẳng $CD$ chéo nhau.", True, "Không đồng phẳng.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Có bao nhiêu đường thẳng song song với một đường thẳng cho trước đi qua một điểm nằm ngoài đường thẳng đó?", 1, "Duy nhất 1 đường thẳng."),
                make_sa(2, "TH", "Cho tam giác $SAB$ có $AB = 14$ cm. Gọi $M, N$ là trung điểm $SA, SB$. Tính độ dài $MN$ (cm).", 7, "$14 / 2 = 7$ cm."),
                make_sa(3, "TH", "Cho hình bình hành $ABCD$. Có bao nhiêu cặp cạnh đối diện song song?", 2, "2 cặp: $(AB, CD)$ và $(AD, BC)$."),
                make_sa(4, "VD", "Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ là trung điểm $AB, BC, CD, DA$. Biết $AC = 10$ cm và $BD = 12$ cm. Tính nửa chu vi hình bình hành $MNPQ$ (cm).", 11, "$10/2 + 12/2 = 5 + 6 = 11$ cm."),
                make_sa(5, "VD", "Một hình thang có đáy lớn 16 cm, đáy nhỏ 8 cm. Chiều dài đường trung bình là bao nhiêu cm?", 12, "$(16 + 8)/2 = 12$ cm."),
                make_sa(6, "VDC", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Mặt phẳng $(\\alpha)$ qua trung điểm $SA$ và song song với đáy cắt $SC$ tại $P$. Tính tỷ số $\\frac{SP}{SC}$.", 0.5, "Do song song nên $\\frac{SP}{SC} = \\frac{SM}{SA} = 0.5$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm giao tuyến của hai mặt phẳng", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SC$. Tìm giao tuyến của mặt phẳng $(ABM)$ và mặt phẳng $(SCD)$.",
                           "Xét hai mặt phẳng $(ABM)$ và $(SCD)$: Điểm $M$ thuộc cả hai mặt phẳng. Mặt khác, trong $(ABM)$ có chứa đường thẳng $AB$, trong $(SCD)$ có chứa đường thẳng $CD$ mà $AB \\parallel CD$. Do đó, giao tuyến của $(ABM)$ và $(SCD)$ là đường thẳng đi qua $M$ và song song với $CD$ (cũng như $AB$). Giao tuyến này cắt cạnh $SD$ tại trung điểm $N$ của $SD$."),
                make_essay(2, "TH", 0.5, "Chứng minh đường thẳng song song", "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trọng tâm của tam giác $ABC$ và tam giác $ACD$. Chứng minh $MN \\parallel BD$.",
                           "Gọi $I$ là trung điểm của cạnh chung $AC$. Khi đó $M$ nằm trên trung tuyến $BI$ và thoả mãn $\\frac{IM}{IB} = \\frac{1}{3}$. Điểm $N$ nằm trên trung tuyến $DI$ và thoả mãn $\\frac{IN}{ID} = \\frac{1}{3}$. Xét tam giác $IBD$: ta có $\\frac{IM}{IB} = \\frac{IN}{ID} = \\frac{1}{3}$. Theo định lý Ta-lét đảo, suy ra $MN \\parallel BD$ (đpcm)."),
                make_essay(3, "VD", 0.5, "Tìm thiết diện song song với đường thẳng", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là điểm thuộc cạnh $SC$ ($M$ khác $S$ và $C$). Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với hai đường thẳng $AB$ và $SA$. Tìm thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$.",
                           "Mặt phẳng $(\\alpha) \\parallel SA$ nên cắt $(SAC)$ theo giao tuyến $MN \\parallel SA$ ($N \\in AC$). $(\\alpha) \\parallel AB$ nên qua $N$ kẻ đường thẳng song song $AB$ cắt $AD$ tại $P$ và $BC$ tại $Q$. Qua $M$ kẻ đường thẳng song song $AB$ (hoặc $CD$) cắt $SD$ tại $R$. Nối $R$ với $P$. Khi đó thiết diện cắt hình chóp là hình thang $PQRM$."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong kỹ thuật ray đường sắt", "Đường ray tàu hỏa gồm hai thanh thép ray $r_1$ và $r_2$ luôn được giữ song song với nhau trên các thanh tà vẹt. Khi tuyến đường ray đi qua một đoạn cầu vượt dốc nghiêng trong không gian, giải thích tại sao hai thanh ray vẫn đảm bảo khoảng cách khổ đường không đổi và phương tiện di chuyển êm thuận.",
                           "Trong không gian, hai thanh ray $r_1, r_2$ luôn đồng phẳng và song song ($r_1 \\parallel r_2$). Các thanh tà vẹt đóng vai trò là các đoạn thẳng vuông góc chung nối giữa hai thanh ray, duy trì khoảng cách không đổi $d(r_1, r_2) = 1435$ mm (khổ tiêu chuẩn quốc tế). Khi đường ray vượt dốc, toàn bộ mặt phẳng chứa hai thanh ray nghiêng đều theo phương dốc nhưng tính chất song song và khoảng cách giữa hai đường ray được bảo toàn tuyệt đối tại mọi mặt cắt ngang. Điều này đảm bảo bánh xe tàu lửa luôn tiếp xúc đồng đều ở cả hai bên ray mà không bị trật bánh hay rung giật.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 12:
        # BÀI 12: ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Đường thẳng $d$ song song với mặt phẳng $(\\alpha)$ nếu",
                         "$d$ và $(\\alpha)$ không có điểm chung",
                         "$d$ cắt $(\\alpha)$ tại 1 điểm",
                         "$d$ nằm trong $(\\alpha)$",
                         "$d$ vuông góc với $(\\alpha)$",
                         "A", "Theo định nghĩa, đường thẳng song song với mặt phẳng khi chúng không có điểm chung."),
                make_mcq(2, "NB", "Điều kiện để đường thẳng $d$ không nằm trong mặt phẳng $(\\alpha)$ song song với $(\\alpha)$ là",
                         "$d$ song song với một đường thẳng $a$ nằm trong $(\\alpha)$",
                         "$d$ cắt một đường thẳng $a$ nằm trong $(\\alpha)$",
                         "$d$ vuông góc với một đường thẳng $a$ nằm trong $(\\alpha)$",
                         "$d$ có hai điểm chung với $(\\alpha)$",
                         "A", "Định lý: Nếu đường thẳng $d$ không nằm trong $(\\alpha)$ và song song với đường thẳng $a \\subset (\\alpha)$ thì $d \\parallel (\\alpha)$."),
                make_mcq(3, "NB", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Đường thẳng $AB$ song song với mặt phẳng nào sau đây?",
                         "Mặt phẳng $(SCD)$", "Mặt phẳng $(SAD)$", "Mặt phẳng $(SBC)$", "Mặt phẳng $(SAC)$",
                         "A", "Vì $AB \\parallel CD$ và $CD \\subset (SCD)$ nên $AB \\parallel (SCD)$."),
                make_mcq(4, "NB", "Nếu đường thẳng $d \\parallel (\\alpha)$ thì qua $d$ có bao nhiêu mặt phẳng song song với $(\\alpha)$?",
                         "Không có mặt phẳng nào", "Có 1 mặt phẳng duy nhất", "Có vô số mặt phẳng", "Có 2 mặt phẳng",
                         "A", "Mọi mặt phẳng đi qua $d$ đều có thể cắt $(\\alpha)$ hoặc song song, chỉ có 1 mặt phẳng chứa $d$ song song với $(\\alpha)$."),
                make_mcq(5, "TH", "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Khẳng định nào sau đây đúng?",
                         "$MN \\parallel (BCD)$", "$MN \\subset (BCD)$", "$MN$ cắt $(BCD)$", "$MN \\perp (BCD)$",
                         "A", "Vì $MN \\parallel BC$ và $BC \\subset (BCD)$ nên $MN \\parallel (BCD)$."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm $SC$. Đường thẳng $OM$ song song với mặt phẳng nào?",
                         "Mặt phẳng $(SAD)$", "Mặt phẳng $(SAB)$", "Mặt phẳng $(ABCD)$", "Mặt phẳng $(SBC)$",
                         "A", "Trong tam giác $SAC$, $OM$ là đường trung bình nên $OM \\parallel SA$. Do $SA \\subset (SAD)$ nên $OM \\parallel (SAD)$."),
                make_mcq(7, "TH", "Cho đường thẳng $a \\parallel (\\alpha)$. Mặt phẳng $(\\beta)$ chứa $a$ cắt $(\\alpha)$ theo giao tuyến $b$. Khi đó",
                         "$a \\parallel b$", "$a$ cắt $b$", "$a \\perp b$", "$a \\equiv b$",
                         "A", "Định lý: Giao tuyến $b$ của mặt phẳng chứa $a$ với $(\\alpha)$ luôn song song với $a$."),
                make_mcq(8, "TH", "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa $a$ và song song với $b$?",
                         "Có duy nhất một mặt phẳng", "Có vô số mặt phẳng", "Không có mặt phẳng nào", "Có hai mặt phẳng",
                         "A", "Qua $a$ chỉ dựng được duy nhất một mặt phẳng song song với đường thẳng $b$ chéo với nó."),
                make_mcq(9, "VD", "Một thanh xà ngang của mái nhà song song với mặt sàn nằm ngang. Mặt sàn chứa mép tường đối diện. Khi đó khoảng cách từ mọi điểm trên thanh xà ngang xuống mặt sàn",
                         "Đều bằng nhau", "Thay đổi liên tục", "Bằng 0", "Không xác định",
                         "A", "Đường thẳng song song mặt phẳng thì khoảng cách từ mọi điểm trên đường thẳng tới mặt phẳng là như nhau."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $G$ là trọng tâm tam giác $SAB$. Đường thẳng đi qua $G$ và song song với $AB$ sẽ song song với mặt phẳng nào sau đây?",
                         "Mặt phẳng $(SCD)$", "Mặt phẳng $(SBC)$", "Mặt phẳng $(SAD)$", "Mặt phẳng $(SAC)$",
                         "A", "Đường thẳng qua $G$ song song $AB$ thì cũng song song với $CD \\subset (SCD)$ nên song song với $(SCD)$."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$ đáy là hình bình hành. Gọi $M$ là trung điểm của $SB$. Mặt phẳng $(\\alpha)$ chứa $AM$ và song song với $BD$ cắt $SC$ tại $N$. Tỷ số $\\frac{SN}{SC}$ bằng",
                         "$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{1}{3}$", "$\\frac{3}{4}$",
                         "A", "Gọi $O = AC \\cap BD$. Trong $(SBD)$, $SO$ cắt $BM$ tại trọng tâm $I$ của tam giác $SBD$, $\\frac{SI}{SO} = \\frac{2}{3}$. Trong $(SAC)$, đường thẳng $AI$ cắt $SC$ tại $N$. Áp dụng định lý Menelaus ta được $SN/SC = 2/3$."),
                make_mcq(12, "VDC", "Cho tứ diện $ABCD$. Mặt phẳng $(\\alpha)$ song song với cả $AB$ và $CD$ cắt tứ diện theo một thiết diện là hình gì?",
                         "Hình bình hành", "Hình tam giác", "Hình ngũ giác", "Hình thang cân",
                         "A", "Mặt phẳng song song với 2 cạnh đối của tứ diện cắt 4 mặt theo 4 đoạn thẳng đôi một song song, tạo thành hình bình hành.")
            ]
            tfs = [
                make_tf(1, "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$.", [
                    ("a", "Đường thẳng $MN$ song song với đường thẳng $AB$.", True, "Đường trung bình tam giác $SAB$."),
                    ("b", "Đường thẳng $MN$ song song với mặt phẳng $(ABCD)$.", True, "Vì $MN \\parallel AB$ và $AB \\subset (ABCD)$."),
                    ("c", "Đường thẳng $MN$ song song với mặt phẳng $(SCD)$.", True, "Vì $MN \\parallel CD$ và $CD \\subset (SCD)$."),
                    ("d", "Đường thẳng $MN$ cắt mặt phẳng $(SBC)$.", False, "Điểm $N \\in MN$ thuộc mặt phẳng $(SBC)$ nên $MN$ cắt $(SBC)$ tại $N$. (Mệnh đề đúng: $MN$ cắt $(SBC)$ tại $N$).", True, "$MN \\cap (SBC) = N$.")
                ]),
                make_tf(2, "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tam giác $ABD$ và $M$ là điểm trên cạnh $BC$ sao cho $BM = 2MC$.", [
                    ("a", "Gọi $I$ là trung điểm $AD$, ta có $\\frac{BG}{BI} = \\frac{2}{3}$.", True, "Tính chất trọng tâm."),
                    ("b", "Đoạn thẳng $GM$ song song với mặt phẳng $(ACD)$.", True, "Trong tam giác $IBC$, $\\frac{BG}{BI} = \\frac{BM}{BC} = \\frac{2}{3} \\Rightarrow GM \\parallel IC \\subset (ACD)$."),
                    ("c", "Đường thẳng $GM$ cắt đường thẳng $CD$.", False, "Vì $GM \\parallel (ACD)$ nên không thể cắt $CD \\subset (ACD)$."),
                    ("d", "Đường thẳng $GM$ nằm trong mặt phẳng $(BCD)$.", True, "Điểm $G$ không thuộc $(BCD)$ vì $G \\in (ABD)$, do đó mệnh đề sai.", False, "$G \\notin (BCD)$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho đường thẳng $d \\parallel (\\alpha)$. Có bao nhiêu điểm chung giữa $d$ và $(\\alpha)$?", 0, "Không có điểm chung."),
                make_sa(2, "TH", "Cho tứ diện $ABCD$ có $M, N$ là trung điểm $AB, AC$. Đường thẳng $MN$ song song với mặt phẳng đáy nào?", 1, "Song song mặt phẳng $(BCD)$."),
                make_sa(3, "TH", "Cho hình chóp $S.ABCD$ có $ABCD$ là hình bình hành. Đường thẳng $CD$ song song với mấy mặt bên của hình chóp?", 1, "Song song với 1 mặt bên là $(SAB)$."),
                make_sa(4, "VD", "Cho tứ diện $ABCD$. Mặt phẳng $(\\alpha)$ song song với $AB$ cắt 4 mặt của tứ diện tạo thành thiết diện có tối đa bao nhiêu cạnh?", 4, "Tối đa 4 cạnh (tứ giác)."),
                make_sa(5, "VD", "Cho tam giác $SAB$ có $M$ là trung điểm $SA$. Qua $M$ kẻ đường thẳng song song $AB$ cắt $SB$ tại $N$. Tính tỉ số $\\frac{SN}{SB}$.", 0.5, "Bằng 0.5."),
                make_sa(6, "VDC", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Mặt phẳng $(\\alpha)$ đi qua $AB$ cắt cạnh $SC$ tại $M$ với $SM = 2MC$. Tỷ số diện tích tam giác $SAB$ và thiết diện $ABNM$ bằng bao nhiêu?", 0.6, "Thiết diện là hình thang.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Chứng minh đường thẳng song song mặt phẳng", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của các cạnh $SC$ và $SD$. Chứng minh rằng đường thẳng $MN$ song song với mặt phẳng $(SAB)$ và mặt phẳng $(ABCD)$.",
                           "Trong tam giác $SCD$: $M, N$ là trung điểm của $SC, SD \\Rightarrow MN$ là đường trung bình $\\Rightarrow MN \\parallel CD$. Mặt khác, đáy $ABCD$ là hình bình hành nên $CD \\parallel AB$. Do đó $MN \\parallel AB$. Ta có: (1) $MN \\not\\subset (SAB)$ và $MN \\parallel AB \\subset (SAB) \\Rightarrow MN \\parallel (SAB)$. (2) $MN \\not\\subset (ABCD)$ và $MN \\parallel CD \\subset (ABCD) \\Rightarrow MN \\parallel (ABCD)$ (đpcm)."),
                make_essay(2, "TH", 0.5, "Tìm thiết diện song song đường thẳng", "Cho hình chóp $S.ABC$. Gọi $M$ là một điểm thuộc miền trong tam giác $ABC$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với các đường thẳng $SA$ và $BC$. Xác định thiết diện của hình chóp cắt bởi mặt phẳng $(\\alpha)$.",
                           "Qua $M$, vì $(\\alpha) \\parallel BC$ nên kẻ đường thẳng song song với $BC$ cắt $AB$ tại $P$ và $AC$ tại $Q$. Vì $(\\alpha) \\parallel SA$ nên từ $P$ kẻ đường thẳng song song với $SA$ cắt $SB$ tại $E$; từ $Q$ kẻ đường thẳng song song với $SA$ cắt $SC$ tại $F$. Nối $E$ với $F$, ta có $EF \\parallel BC \\parallel PQ$. Vậy thiết diện là hình thang $PQFE$ (có $EF \\parallel PQ$)."),
                make_essay(3, "VD", 0.5, "Chứng minh đường thẳng song song qua định lý Ta-lét", "Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm của tam giác $BCD$. Lấy điểm $M$ trên cạnh $AB$ sao cho $AM = 2MB$. Chứng minh rằng đường thẳng $MG$ song song với mặt phẳng $(ACD)$.",
                           "Gọi $I$ là trung điểm của cạnh $CD$. Trong tam giác $BCD$, $G$ là trọng tâm nên $G \\in BI$ và $\\frac{BG}{BI} = \\frac{2}{3} \\Rightarrow \\frac{IG}{IB} = \\frac{1}{3}$. Trên cạnh $AB$, $AM = 2MB \\Rightarrow \\frac{BM}{BA} = \\frac{1}{3}$. Xét tam giác $ABI$: Ta có $\\frac{BM}{BA} = \\frac{BG}{BI} = \\frac{2}{3}$. Theo định lý Ta-lét đảo, suy ra $MG \\parallel AI$. Mà $AI \\subset (ACD)$ và $MG \\not\\subset (ACD)$, nên $MG \\parallel (ACD)$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong kiến trúc", "Trong thiết kế một giếng trời kính thông tầng của ngôi nhà, tấm kính cường lực mái được gắn cố định trên mặt phẳng nghiêng $(\\alpha)$. Một thanh đèn LED trang trí $d$ được treo phía dưới mái kính sao cho hai đầu thanh đèn cách đều bề mặt kính một khoảng $h = 30$ cm. Hãy chứng minh thanh đèn LED song song với mặt phẳng tấm kính mái và giải thích ý nghĩa thẩm mỹ của việc lắp đặt này.",
                           "Gọi hai đầu mút của thanh đèn LED là $A$ và $B$. Do khoảng cách từ $A$ và $B$ đến mặt phẳng kính $(\\alpha)$ bằng nhau ($d(A, \\alpha) = d(B, \\alpha) = h = 30$ cm) và hai điểm nằm cùng một phía so với mặt phẳng kính, suy ra đoạn thẳng $AB$ song song với hình chiếu vuông góc $A'B'$ của nó trên mặt kính $(\\alpha)$. Vì $A'B' \\subset (\\alpha)$ nên thanh đèn $d = AB \\parallel (\\alpha)$. Ý nghĩa thẩm mỹ và kỹ thuật: Việc thanh đèn song song với mặt kính tạo nên sự hài hoà về mặt hình học, ánh sáng hắt đều lên toàn bộ bề mặt kính, không gây loá cục bộ và đảm bảo khe thoáng tản nhiệt đồng đều dọc theo thân đèn.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Nếu đường thẳng $d$ song song với mặt phẳng $(\\alpha)$ thì",
                         "Số điểm chung giữa $d$ và $(\\alpha)$ bằng 0",
                         "Số điểm chung bằng 1",
                         "Số điểm chung bằng 2",
                         "Có vô số điểm chung",
                         "A", "Đường thẳng song song với mặt phẳng không có điểm chung nào."),
                make_mcq(2, "NB", "Cho đường thẳng $a \\subset (\\alpha)$ và $b \\not\\subset (\\alpha)$. Nếu $b \\parallel a$ thì",
                         "$b \\parallel (\\alpha)$", "$b$ cắt $(\\alpha)$", "$b \\subset (\\alpha)$", "$b \\perp (\\alpha)$",
                         "A", "Dấu hiệu nhận biết: đường thẳng song song với một đường trong mặt phẳng thì song song với mặt phẳng đó."),
                make_mcq(3, "NB", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Đường thẳng $AD$ song song với mặt phẳng nào sau đây?",
                         "Mặt phẳng $(SBC)$", "Mặt phẳng $(SAB)$", "Mặt phẳng $(SCD)$", "Mặt phẳng $(SAC)$",
                         "A", "Vì $AD \\parallel BC$ mà $BC \\subset (SBC)$ nên $AD \\parallel (SBC)$."),
                make_mcq(4, "NB", "Cho đường thẳng $a \\parallel (\\alpha)$. Khẳng định nào sau đây là sai?",
                         "$a$ song song với mọi đường thẳng nằm trong $(\\alpha)$",
                         "$a$ và $(\\alpha)$ không có điểm chung",
                         "Trong $(\\alpha)$ có ít nhất một đường thẳng song song với $a$",
                         "Nếu $(\\beta)$ chứa $a$ và cắt $(\\alpha)$ theo giao tuyến $b$ thì $a \\parallel b$",
                         "A", "Đường thẳng $a$ có thể chéo với các đường thẳng khác trong $(\\alpha)$, không thể song song với mọi đường."),
                make_mcq(5, "TH", "Cho tứ diện $ABCD$. Gọi $I, J$ lần lượt là trung điểm của $BC, BD$. Đường thẳng $IJ$ song song với mặt phẳng nào?",
                         "Mặt phẳng $(ACD)$", "Mặt phẳng $(ABC)$", "Mặt phẳng $(ABD)$", "Mặt phẳng $(BCD)$",
                         "A", "$IJ \\parallel CD$ mà $CD \\subset (ACD)$ nên $IJ \\parallel (ACD)$."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $N$ là trung điểm của $SD$. Đường thẳng $ON$ song song với mặt phẳng nào?",
                         "Mặt phẳng $(SAB)$", "Mặt phẳng $(SBC)$", "Mặt phẳng $(SCD)$", "Mặt phẳng $(ABCD)$",
                         "A", "Trong tam giác $SBD$, $ON$ là đường trung bình nên $ON \\parallel SB \\subset (SAB)$."),
                make_mcq(7, "TH", "Cho đường thẳng $d \\parallel (\\alpha)$. Có bao nhiêu đường thẳng nằm trong $(\\alpha)$ song song với $d$?",
                         "Có vô số đường thẳng", "Có 1 đường thẳng duy nhất", "Không có đường thẳng nào", "Có 2 đường thẳng",
                         "A", "Trong $(\\alpha)$ có vô số đường thẳng song song với $d$ (các đường thẳng song song với hình chiếu của $d$)."),
                make_mcq(8, "TH", "Cho hai đường thẳng chéo nhau $a$ và $b$. Khẳng định nào sau đây là đúng?",
                         "Luôn tồn tại mặt phẳng chứa $a$ và song song với $b$",
                         "Không thể dựng được mặt phẳng nào chứa $a$ và song song với $b$",
                         "Mọi mặt phẳng chứa $a$ đều cắt $b$",
                         "Tồn tại vô số mặt phẳng chứa $a$ và song song với $b$",
                         "A", "Định lý: Qua $a$ có duy nhất một mặt phẳng song song với $b$."),
                make_mcq(9, "VD", "Một thanh nẹp trang trí song song với mép trần nhà. Khi đó thanh nẹp trang trí sẽ",
                         "Song song với mặt sàn nhà", "Cắt mặt sàn nhà", "Vuông góc mặt sàn nhà", "Nằm trên mặt sàn nhà",
                         "A", "Vì mép trần song song với mặt sàn nên thanh nẹp song song mép trần cũng song song với mặt sàn."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình thang với đáy lớn $AB = 3CD$. Gọi $M$ trên $SA$ sao cho $SM = \\frac{1}{3}SA$. Đường thẳng qua $M$ song song $AB$ sẽ song song với mặt phẳng",
                         "$(SCD)$ và $(ABCD)$", "$(SBC)$", "$(SAD)$", "Không song song mặt nào",
                         "A", "Đường thẳng này song song $AB$ và $CD$ nên song song với cả $(SCD)$ và $(ABCD)$."),
                make_mcq(11, "VDC", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $M$ là trung điểm $SC$. Mặt phẳng $(\\alpha)$ qua $AM$ song song với $BD$ chia khối chóp thành hai phần. Thiết diện của $(\\alpha)$ với hình chóp là hình gì?",
                         "Tứ giác có hai đường chéo vuông góc",
                         "Hình bình hành",
                         "Hình thang",
                         "Hình tam giác",
                         "A", "Thiết diện cắt qua $A, C_1, M, C_2$ tạo thành tứ giác có trục đối xứng."),
                make_mcq(12, "VDC", "Cho tứ diện $ABCD$. Lấy điểm $M$ trên cạnh $AB$. Mặt phẳng $(\\alpha)$ qua $M$ và song song với $BC, AD$ cắt tứ diện theo một thiết diện có chu vi không đổi khi",
                         "$BC = AD$", "$AB = CD$", "$AC = BD$", "Mọi trường hợp",
                         "A", "Thiết diện là hình bình hành có các cạnh tỉ lệ với $BC$ và $AD$. Khi $BC = AD$ thì chu vi thiết diện là hằng số không phụ thuộc vị trí $M$.")
            ]
            tfs = [
                make_tf(1, "Cho hình chóp $S.ABCD$ đáy là hình bình hành. Gọi $I, K$ lần lượt là trung điểm của $SA$ và $SC$.", [
                    ("a", "Đoạn thẳng $IK$ song song với đường chéo $AC$.", True, "Đường trung bình tam giác $SAC$."),
                    ("b", "Đoạn thẳng $IK$ song song với mặt phẳng đáy $(ABCD)$.", True, "Vì $IK \\parallel AC \\subset (ABCD)$."),
                    ("c", "Đoạn thẳng $IK$ cắt mặt phẳng $(SBD)$.", True, "Cắt tại trung điểm $SO$."),
                    ("d", "Đoạn thẳng $IK$ song song với mặt phẳng $(SCD)$.", False, "Điểm $K \\in IK$ thuộc $(SCD)$ nên $IK$ cắt $(SCD)$ tại $K$.")
                ]),
                make_tf(2, "Cho đường thẳng $a$ song song với mặt phẳng $(P)$.", [
                    ("a", "Đường thẳng $a$ và mặt phẳng $(P)$ không có điểm chung.", True, "Định nghĩa."),
                    ("b", "Nếu mặt phẳng $(Q)$ chứa $a$ cắt $(P)$ theo giao tuyến $b$ thì $a \\parallel b$.", True, "Định lý giao tuyến."),
                    ("c", "Mọi đường thẳng nằm trong $(P)$ đều song song với $a$.", False, "Chỉ có các đường thẳng cùng phương mới song song, các đường khác chéo nhau."),
                    ("d", "Khoảng cách từ mọi điểm trên $a$ đến $(P)$ là như nhau.", True, "Đúng tính chất song song.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Đường thẳng $d$ song song với $(\\alpha)$. Hỏi $d$ và $(\\alpha)$ có bao nhiêu điểm chung?", 0, "0 điểm chung."),
                make_sa(2, "TH", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Đường thẳng $AB$ song song với mặt bên nào?", 1, "Mặt bên $(SCD)$."),
                make_sa(3, "TH", "Cho tứ diện $ABCD$. Gọi $M, N$ là trung điểm $AC, AD$. Đường thẳng $MN$ song song với mặt phẳng nào?", 1, "Mặt phẳng $(BCD)$."),
                make_sa(4, "VD", "Cho tam giác $SAB$ có $AB = 16$ cm. Đường trung bình $MN$ song song với mặt đáy cách mặt đáy một khoảng cố định. Tính độ dài $MN$ (cm).", 8, "$16 / 2 = 8$ cm."),
                make_sa(5, "VD", "Có bao nhiêu mặt phẳng đi qua một điểm cho trước và song song với hai đường thẳng chéo nhau?", 1, "Có duy nhất 1 mặt phẳng."),
                make_sa(6, "VDC", "Cho hình chóp $S.ABCD$ đáy hình bình hành. Lấy điểm $M$ trên $SA$ sao cho $SM = \\frac{1}{2}MA$. Mặt phẳng qua $M$ song song đáy cắt $SB$ tại $N$. Tính tỉ số $\\frac{SN}{SB}$. (Dưới dạng số thập phân)", 0.33, "$1/3 \\approx 0.33$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Chứng minh đường thẳng song song mặt phẳng", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm của cạnh $SB$. Chứng minh rằng đường thẳng $OM$ song song với mặt phẳng $(SAD)$.",
                           "Trong tam giác $SBD$: $O$ là trung điểm của $BD$ (tâm hình bình hành) và $M$ là trung điểm của $SB$. Do đó $OM$ là đường trung bình của tam giác $SBD$, suy ra $OM \\parallel SD$. Ta có: $OM \\not\\subset (SAD)$ và $OM \\parallel SD \\subset (SAD)$. Theo dấu hiệu nhận biết, suy ra $OM \\parallel (SAD)$ (đpcm)."),
                make_essay(2, "TH", 0.5, "Tìm thiết diện của hình chóp", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M$ là trung điểm của cạnh $AB$. Mặt phẳng $(\\alpha)$ đi qua $M$ và song song với hai đường thẳng $BC$ và $SA$. Xác định thiết diện của hình chóp cắt bởi $(\\alpha)$.",
                           "Vì $(\\alpha) \\parallel BC$ nên từ $M$ kẻ đường thẳng song song với $BC$ cắt $CD$ tại $N$. Vì $(\\alpha) \\parallel SA$ nên từ $M$ kẻ đường thẳng song song $SA$ cắt $SB$ tại $P$. Từ $N$ kẻ đường thẳng song song $SA$ (hoặc từ $P$ kẻ đường thẳng song song $BC$) cắt $SC$ tại $Q$. Nối $P$ với $Q$, ta có $PQ \\parallel BC \\parallel MN$. Vậy thiết diện cắt bởi $(\\alpha)$ là hình bình hành $MNQP$."),
                make_essay(3, "VD", 0.5, "Ứng dụng định lý ba đường giao tuyến", "Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Gọi $O_1, O_2$ lần lượt là tâm của $ABCD$ và $ABEF$. Chứng minh rằng đường thẳng $O_1 O_2$ song song với hai mặt phẳng $(ADF)$ và $(BCE)$.",
                           "Trong tam giác $ACE$: $O_1$ là trung điểm $AC$, $O_2$ là trung điểm $AE$ (vì $O_1, O_2$ là tâm các hình bình hành). Do đó $O_1 O_2$ là đường trung bình của tam giác $ACE$, suy ra $O_1 O_2 \\parallel CE$. Mà $CE \\subset (BCE)$, nên $O_1 O_2 \\parallel (BCE)$. Chứng minh tương tự trong tam giác $BDF$: $O_1 O_2$ là đường trung bình nên $O_1 O_2 \\parallel DF$. Mà $DF \\subset (ADF)$, nên $O_1 O_2 \\parallel (ADF)$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế khung cẩu trục", "Một cẩu trục tháp trong công trường xây dựng có cần cẩu nằm ngang $AB$ song song với mặt sàn bê tông của tầng đang thi công. Trên cần cẩu có một xe con mang dây cáp tải di chuyển qua lại dọc theo thanh cần $AB$. Chứng minh rằng quỹ đạo di chuyển của xe con luôn song song với mặt sàn tầng nhà và giải thích ý nghĩa an toàn của việc này.",
                           "Quỹ đạo di chuyển của xe con chính là đoạn thẳng thuộc thanh cần cẩu $AB$. Vì thanh cần cẩu $AB$ được thiết kế cân bằng nằm ngang, song song với mặt sàn tầng nhà $(P)$, nên mọi điểm trên thanh cần $AB$ đều duy trì khoảng cách thẳng đứng cố định xuống mặt sàn: $d(M, P) = H$ (với $H$ là chiều cao thông thuỷ của cần cẩu). Do đó, quỹ đạo di chuyển của xe con luôn song song với mặt phẳng sàn tầng nhà. Ý nghĩa an toàn: Khoảng cách song song cố định giúp tầm với nâng hạ hàng hoá không bị thay đổi độ cao đột ngột khi xe con di chuyển, tránh va quệt vào các cột dầm bê tông cốt thép xung quanh, đảm bảo an toàn tuyệt đối cho công nhân bên dưới.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 13:
        # BÀI 13: HAI MẶT PHẲNG SONG SONG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Hai mặt phẳng được gọi là song song với nhau nếu",
                         "Chúng không có điểm chung",
                         "Chúng có 1 điểm chung",
                         "Chúng có 1 đường thẳng chung",
                         "Chúng cắt nhau",
                         "A", "Hai mặt phẳng song song là hai mặt phẳng không có điểm chung."),
                make_mcq(2, "NB", "Điều kiện để mặt phẳng $(\\alpha)$ song song với mặt phẳng $(\\beta)$ là",
                         "$(\\alpha)$ chứa hai đường thẳng cắt nhau cùng song song với $(\\beta)$",
                         "$(\\alpha)$ chứa một đường thẳng song song với $(\\beta)$",
                         "$(\\alpha)$ chứa hai đường thẳng song song với $(\\beta)$",
                         "$(\\alpha)$ và $(\\beta)$ cùng vuông góc với một mặt phẳng",
                         "A", "Định lý: Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau và cùng song song với $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$."),
                make_mcq(3, "NB", "Hình lăng trụ tam giác $ABC.A'B'C'$ có bao nhiêu mặt bên?",
                         "3 mặt bên", "2 mặt bên", "4 mặt bên", "5 mặt bên",
                         "A", "Hình lăng trụ tam giác có 3 mặt bên là các hình bình hành: $(ABB'A'), (BCC'B'), (CAA'C')$."),
                make_mcq(4, "NB", "Hình hộp có tất cả bao nhiêu mặt?",
                         "6 mặt", "8 mặt", "4 mặt", "12 mặt",
                         "A", "Hình hộp có 6 mặt, tất cả đều là các hình bình hành."),
                make_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$. Mặt phẳng $(MNPQ)$ song song với mặt phẳng nào?",
                         "Mặt phẳng $(ABCD)$", "Mặt phẳng $(SAB)$", "Mặt phẳng $(SBC)$", "Mặt phẳng $(SAD)$",
                         "A", "Vì $MN \\parallel AB$ và $NP \\parallel BC$, mà $AB, BC$ cắt nhau trong $(ABCD)$ nên $(MNPQ) \\parallel (ABCD)$."),
                make_mcq(6, "TH", "Cho hai mặt phẳng song song $(\\alpha) \\parallel (\\beta)$. Nếu mặt phẳng $(\\gamma)$ cắt $(\\alpha)$ theo giao tuyến $a$ và cắt $(\\beta)$ theo giao tuyến $b$ thì",
                         "$a \\parallel b$", "$a$ cắt $b$", "$a \\perp b$", "$a \\equiv b$",
                         "A", "Tính chất: Hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba thì hai giao tuyến song song."),
                make_mcq(7, "TH", "Cho hình lăng trụ $ABC.A'B'C'$. Cặp mặt phẳng nào sau đây song song với nhau?",
                         "$(ABC)$ và $(A'B'C')$", "$(ABB'A')$ và $(ACC'A')$", "$(ABC)$ và $(BCC'B')$", "$(A'B'C')$ và $(ABB'A')$",
                         "A", "Hai mặt đáy $(ABC)$ và $(A'B'C')$ của hình lăng trụ luôn song song với nhau."),
                make_mcq(8, "TH", "Khoảng cách giữa hai mặt phẳng song song là",
                         "Khoảng cách từ một điểm bất kì trên mặt phẳng này đến mặt phẳng kia",
                         "Khoảng cách giữa hai điểm bất kì",
                         "Độ dài đường chéo",
                         "Bằng 0",
                         "A", "Định nghĩa khoảng cách giữa hai mặt phẳng song song."),
                make_mcq(9, "VD", "Các bậc của một chiếc cầu thang thẳng đứng trong toà nhà được thiết kế nằm trên các mặt phẳng song song nhau. Khoảng cách giữa các mặt bậc cầu thang liên tiếp bằng nhau là để",
                         "Bước chân người đi đều đặn, thoải mái và an toàn",
                         "Tiết kiệm vật liệu",
                         "Tăng chiều cao",
                         "Làm đẹp",
                         "A", "Khoảng cách giữa các mặt phẳng bậc thang song song đều nhau đảm bảo nhịp bước chân sinh học an toàn."),
                make_mcq(10, "VD", "Cho hình chóp $S.ABCD$ có đáy là hình bình hành diện tích $S_0$. Cắt hình chóp bởi mặt phẳng $(\\alpha)$ song song với đáy và đi qua trung điểm của $SA$. Diện tích của thiết diện tạo thành bằng",
                         "$\\frac{1}{4}S_0$", "$\\frac{1}{2}S_0$", "$\\frac{1}{3}S_0$", "$\\frac{3}{4}S_0$",
                         "A", "Thiết diện là hình bình hành đồng dạng với đáy theo tỷ số $k = 1/2$. Tỷ số diện tích bằng $k^2 = 1/4$."),
                make_mcq(11, "VDC", "Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(BA'C')$ song song với mặt phẳng nào sau đây?",
                         "Mặt phẳng $(ACD')$", "Mặt phẳng $(A'B'C'D')$", "Mặt phẳng $(BDD'B')$", "Mặt phẳng $(ABCD)$",
                         "A", "Xét $(BA'C')$ và $(ACD')$: $A'C' \\parallel AC$ và $A'B \\parallel D'C$. Hai đường thẳng cắt nhau trong $(BA'C')$ lần lượt song song với hai đường thẳng trong $(ACD')$, nên hai mặt phẳng song song."),
                make_mcq(12, "VDC", "Cho hình chóp cụt tứ giác đều có đáy lớn cạnh 6 cm, đáy nhỏ cạnh 3 cm. Tỷ số diện tích giữa đáy nhỏ và đáy lớn bằng",
                         "$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{1}{9}$", "$\\frac{1}{3}$",
                         "A", "Tỷ số diện tích $= (3/6)^2 = (1/2)^2 = 1/4$.")
            ]
            tfs = [
                make_tf(1, "Cho hình lăng trụ tam giác $ABC.A'B'C'$.", [
                    ("a", "Hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ song song với nhau.", True, "Định nghĩa lăng trụ."),
                    ("b", "Các cạnh bên $AA', BB', CC'$ đôi một song song và bằng nhau.", True, "Tính chất lăng trụ."),
                    ("c", "Các mặt bên của hình lăng trụ là các hình bình hành.", True, "Đúng."),
                    ("d", "Mặt phẳng $(ABB'A')$ song song với mặt phẳng $(ACC'A')$.", False, "Hai mặt bên này cắt nhau theo giao tuyến $AA'$.")
                ]),
                make_tf(2, "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $(\\alpha)$ là mặt phẳng đi qua trung điểm $M$ của $SA$ và song song với đáy $(ABCD)$.", [
                    ("a", "Mặt phẳng $(\\alpha)$ cắt các cạnh $SB, SC, SD$ lần lượt tại trung điểm $N, P, Q$.", True, "Định lý Ta-lét trong không gian."),
                    ("b", "Thiết diện tạo bởi $(\\alpha)$ với hình chóp là một hình bình hành.", True, "Đồng dạng với đáy."),
                    ("c", "Mặt phẳng $(\\alpha)$ song song với mặt phẳng đáy $(ABCD)$.", True, "Giả thiết."),
                    ("d", "Chu vi của thiết diện bằng chu vi của đáy $ABCD$.", False, "Chu vi thiết diện chỉ bằng một nửa chu vi đáy.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Hình hộp có bao nhiêu cặp mặt đối diện song song?", 3, "3 cặp mặt đối diện."),
                make_sa(2, "TH", "Hình chóp cụt tứ giác có bao nhiêu mặt bên?", 4, "4 mặt bên là các hình thang."),
                make_sa(3, "TH", "Cho hình lăng trụ tam giác có cạnh bên dài 8 cm. Độ dài cạnh bên khác bằng bao nhiêu cm?", 8, "Các cạnh bên bằng nhau và bằng 8 cm."),
                make_sa(4, "VD", "Cho hình chóp có diện tích đáy $S = 40$ cm$^2$. Mặt phẳng song song đáy cắt qua trung điểm chiều cao tạo thiết diện có diện tích bao nhiêu cm$^2$?", 10, "$40 \\times (1/2)^2 = 10$ cm$^2$."),
                make_sa(5, "VD", "Cho lăng trụ $ABC.A'B'C'$. Có bao nhiêu đường thẳng đi qua 2 đỉnh bất kì song song với cạnh bên $AA'$?", 2, "$BB'$ và $CC'$."),
                make_sa(6, "VDC", "Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng qua $A$ và song song $(BDD'B')$ cắt cạnh $B'C'$ tại điểm cách $B'$ một đoạn bằng bao nhiêu phần $B'C'$?", 1, "Cắt tại đỉnh đối diện.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Chứng minh hai mặt phẳng song song", "Cho hai hình bình hành $ABCD$ và $ABEF$ không cùng nằm trong một mặt phẳng. Chứng minh rằng mặt phẳng $(ADF)$ song song với mặt phẳng $(BCE)$.",
                           "Xét hai mặt phẳng $(ADF)$ và $(BCE)$: Ta có $ABCD$ là hình bình hành nên $AD \\parallel BC$. Mà $BC \\subset (BCE)$ nên $AD \\parallel (BCE)$. Lại có $ABEF$ là hình bình hành nên $AF \\parallel BE$. Mà $BE \\subset (BCE)$ nên $AF \\parallel (BCE)$. Trong mặt phẳng $(ADF)$, hai đường thẳng $AD$ và $AF$ cắt nhau tại $A$ và cùng song song với mặt phẳng $(BCE)$. Do đó $(ADF) \\parallel (BCE)$ (đpcm)."),
                make_essay(2, "TH", 0.5, "Tính chất hình lăng trụ", "Cho hình lăng trụ $ABC.A'B'C'$. Gọi $M, M'$ lần lượt là trung điểm của $BC$ và $B'C'$. Chứng minh tứ giác $AMM'A'$ là hình bình hành.",
                           "Vì $BCC'B'$ là hình bình hành nên $BB' \\parallel CC'$ và $BB' = CC'$. Lại có $M, M'$ lần lượt là trung điểm của $BC, B'C'$ nên $MM'$ là đường trung bình của hình bình hành $BCC'B'$, suy ra $MM' \\parallel BB'$ và $MM' = BB'$. Mặt khác, trong lăng trụ ta có $AA' \\parallel BB'$ và $AA' = BB'$. Theo tính chất bắc cầu: $MM' \\parallel AA'$ và $MM' = AA'$. Vậy tứ giác $AMM'A'$ có một cặp cạnh đối diện song song và bằng nhau nên là hình bình hành."),
                make_essay(3, "VD", 0.5, "Định lý Ta-lét trong không gian", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Mặt phẳng $(\\alpha)$ song song với mặt phẳng đáy cắt các cạnh bên $SA, SB, SC, SD$ lần lượt tại $A', B', C', D'$. Biết $\\frac{SA'}{SA} = \\frac{2}{3}$, hãy tính tỷ số diện tích $\\frac{S_{A'B'C'D'}}{S_{ABCD}}$.",
                           "Vì $(\\alpha) \\parallel (ABCD)$ nên theo định lý Ta-lét trong không gian: $\\frac{SA'}{SA} = \\frac{SB'}{SB} = \\frac{SC'}{SC} = \\frac{SD'}{SD} = \\frac{2}{3}$. Khi đó thiết diện $A'B'C'D'$ là hình bình hành đồng dạng với hình bình hành đáy $ABCD$ theo tỷ số đồng dạng $k = \\frac{2}{3}$. Tỷ số diện tích của hai hình đồng dạng bằng bình phương tỷ số đồng dạng: $\\frac{S_{A'B'C'D'}}{S_{ABCD}} = k^2 = \\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế toà nhà nhiều tầng", "Một toà nhà chung cư cao tầng có các sàn tầng được thi công nằm trên các mặt phẳng song song với nhau. Khoảng cách giữa hai sàn tầng liên tiếp (chiều cao tầng) là $3.3$ m. Một giếng thang máy thẳng đứng cắt qua tất cả các mặt sàn tầng. Hãy chứng minh độ dài các đoạn thanh ray thang máy giữa hai tầng liên tiếp luôn bằng nhau và giải thích ý nghĩa kỹ thuật của tính chất này.",
                           "Giả sử hai sàn tầng liên tiếp là hai mặt phẳng song song $(\\alpha) \\parallel (\\beta)$. Trục thanh ray thang máy là đường thẳng $d$ cắt $(\\alpha)$ tại $A$ và cắt $(\\beta)$ tại $B$. Vì ray thang máy thẳng đứng vuông góc với các mặt sàn nằm ngang, khoảng cách $AB$ giữa hai sàn tầng chính là khoảng cách giữa hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$, có giá trị không đổi $AB = h = 3.3$ m tại mọi tầng. Ý nghĩa kỹ thuật: Tính chất hai mặt phẳng song song đảm bảo mỗi tầng có độ cao chuẩn hoá tuyệt đối, hệ thống cơ khí cáp kéo và các điểm hãm dừng tầng của cabin thang máy được lập trình với bước dịch chuyển đều đặn, giúp thang máy dừng tầng chính xác ngang bằng với mặt sàn, đảm bảo an toàn tuyệt đối cho người sử dụng.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Qua một điểm nằm ngoài một mặt phẳng cho trước có bao nhiêu mặt phẳng song song với mặt phẳng đó?",
                         "Có duy nhất một mặt phẳng", "Có vô số mặt phẳng", "Không có mặt phẳng nào", "Có hai mặt phẳng",
                         "A", "Tiên đề Ơ-clit cho mặt phẳng: Qua một điểm ngoài mặt phẳng có một và chỉ một mặt phẳng song song với mặt phẳng đã cho."),
                make_mcq(2, "NB", "Hình chóp cụt là phần hình chóp nằm giữa mặt phẳng đáy và",
                         "Một mặt phẳng song song với đáy cắt tất cả các cạnh bên",
                         "Một mặt phẳng vuông góc với đáy",
                         "Một mặt phẳng bất kì",
                         "Mặt phẳng đi qua đỉnh chóp",
                         "A", "Định nghĩa hình chóp cụt tạo bởi mặt phẳng song song với đáy."),
                make_mcq(3, "NB", "Các mặt bên của hình lăng trụ là các hình gì?",
                         "Hình bình hành", "Hình tam giác", "Hình thang", "Hình chữ nhật",
                         "A", "Theo định nghĩa hình lăng trụ, các mặt bên luôn là các hình bình hành."),
                make_mcq(4, "NB", "Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì",
                         "Song song với nhau", "Cắt nhau", "Trùng nhau", "Vuông góc nhau",
                         "A", "Tính chất bắc cầu của quan hệ song song giữa các mặt phẳng."),
                make_mcq(5, "TH", "Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(ABCD)$ song song với mặt phẳng nào?",
                         "Mặt phẳng $(A'B'C'D')$", "Mặt phẳng $(ABB'A')$", "Mặt phẳng $(BCC'B')$", "Mặt phẳng $(CDD'C')$",
                         "A", "Hai mặt đáy đối diện của hình hộp song song nhau."),
                make_mcq(6, "TH", "Cho hình chóp $S.ABC$. Lấy $M$ là trung điểm $SA$. Mặt phẳng qua $M$ song song với đáy $(ABC)$ cắt $SB, SC$ lần lượt tại $N, P$. Tứ giác hay tam giác $MNP$ là",
                         "Tam giác đồng dạng với tam giác $ABC$",
                         "Tam giác vuông",
                         "Tam giác đều",
                         "Tứ giác",
                         "A", "Thiết diện cắt qua 3 cạnh bên tạo thành tam giác $MNP$ đồng dạng với $\\triangle ABC$."),
                make_mcq(7, "TH", "Đáy của hình chóp cụt là",
                         "Hai đa giác đồng dạng nằm trên hai mặt phẳng song song",
                         "Hai đa giác bằng nhau",
                         "Hai tam giác vuông",
                         "Hai hình chữ nhật",
                         "A", "Hai đáy của hình chóp cụt là hai đa giác đồng dạng nằm trên hai mặt phẳng song song."),
                make_mcq(8, "TH", "Nếu mặt phẳng $(\\alpha) \\parallel (\\beta)$ và đường thẳng $a \\subset (\\alpha)$ thì",
                         "$a \\parallel (\\beta)$", "$a$ cắt $(\\beta)$", "$a \\subset (\\beta)$", "$a \\perp (\\beta)$",
                         "A", "Nếu đường thẳng nằm trong một mặt phẳng thì nó song song với mặt phẳng song song với mặt phẳng đó."),
                make_mcq(9, "VD", "Người ta làm khuôn đúc chậu hoa bằng xi măng dạng hình chóp cụt tứ giác đều. Hai đáy của chậu hoa có dạng",
                         "Hai hình vuông đồng dạng nằm trên hai mặt phẳng song song",
                         "Hai hình thoi",
                         "Hai hình chữ nhật bất kì",
                         "Hai tam giác đều",
                         "A", "Chậu hoa hình chóp cụt tứ giác đều có 2 đáy là hai hình vuông song song."),
                make_mcq(10, "VD", "Cho hình lăng trụ đứng $ABC.A'B'C'$. Gọi $G, G'$ lần lượt là trọng tâm của tam giác $ABC$ và tam giác $A'B'C'$. Đoạn thẳng $GG'$ song song với",
                         "Cạnh bên $AA'$", "Cạnh đáy $AB$", "Cạnh đáy $BC$", "Đường chéo $AC'$",
                         "A", "$GG'$ nối hai trọng tâm của hai đáy song song nên $GG' \\parallel AA'$."),
                make_mcq(11, "VDC", "Cho hình hộp $ABCD.A'B'C'D'$. Mặt phẳng $(A'BD)$ và mặt phẳng $(B'CD')$",
                         "Song song với nhau", "Cắt nhau", "Trùng nhau", "Vuông góc nhau",
                         "A", "Hai mặt phẳng này chứa các cặp đường thẳng song song: $BD \\parallel B'D'$ và $A'D \\parallel B'C$ nên $(A'BD) \\parallel (B'CD')$."),
                make_mcq(12, "VDC", "Một hình chóp tứ giác đều có chiều cao 12 cm, đáy cạnh 10 cm. Cắt hình chóp bởi mặt phẳng song song đáy cách đỉnh 6 cm. Diện tích của thiết diện bằng",
                         "25 cm$^2$", "50 cm$^2$", "20 cm$^2$", "100 cm$^2$",
                         "A", "Tỷ số đồng dạng $k = 6/12 = 1/2$. Cạnh thiết diện $= 10 \\times 1/2 = 5$ cm. Diện tích $= 5^2 = 25$ cm$^2$.")
            ]
            tfs = [
                make_tf(1, "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$.", [
                    ("a", "Mặt phẳng $(ABCD)$ song song với mặt phẳng $(A'B'C'D')$.", True, "Hai mặt đáy đối diện."),
                    ("b", "Mặt phẳng $(ABB'A')$ song song với mặt phẳng $(CDD'C')$.", True, "Hai mặt bên đối diện."),
                    ("c", "Khoảng cách giữa hai mặt phẳng đáy là độ dài cạnh bên $AA'$.", True, "Vì $AA' \\perp (ABCD)$."),
                    ("d", "Đường chéo $AC'$ cắt mặt phẳng $(BDD'B')$.", True, "Cắt tại tâm đối xứng của hình hộp.")
                ]),
                make_tf(2, "Cho hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$. Đường thẳng $a \\subset (\\alpha)$ và $b \\subset (\\beta)$.", [
                    ("a", "Đường thẳng $a$ song song với mặt phẳng $(\\beta)$.", True, "Đúng."),
                    ("b", "Đường thẳng $b$ song song với mặt phẳng $(\\alpha)$.", True, "Đúng."),
                    ("c", "Hai đường thẳng $a$ và $b$ không bao giờ cắt nhau.", True, "Vì nằm trên hai mặt phẳng song song không có điểm chung."),
                    ("d", "Hai đường thẳng $a$ và $b$ luôn luôn song song với nhau.", False, "Chúng có thể chéo nhau nếu không cùng phương.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Có bao nhiêu mặt phẳng đi qua một điểm nằm ngoài mặt phẳng và song song với mặt phẳng đó?", 1, "Duy nhất 1 mặt phẳng."),
                make_sa(2, "TH", "Hình chóp cụt tam giác có bao nhiêu cạnh bên?", 3, "Có 3 cạnh bên."),
                make_sa(3, "TH", "Cho lăng trụ có diện tích đáy $S = 25$ cm$^2$. Diện tích đáy còn lại bằng bao nhiêu cm$^2$?", 25, "Hai đáy bằng nhau nên diện tích bằng 25 cm$^2$."),
                make_sa(4, "VD", "Một hình chóp cụt có diện tích đáy lớn 36 cm$^2$, đáy nhỏ 9 cm$^2$. Tỷ số đồng dạng giữa đáy nhỏ và đáy lớn là bao nhiêu? (Dưới dạng số thập phân)", 0.5, "$\\sqrt{9/36} = 3/6 = 0.5$."),
                make_sa(5, "VD", "Hình hộp có bao nhiêu đỉnh?", 8, "4 đỉnh đáy dưới + 4 đỉnh đáy trên = 8 đỉnh."),
                make_sa(6, "VDC", "Cho hình chóp có thể tích $V = 80$ cm$^3$. Một mặt phẳng song song với đáy chia đôi chiều cao hình chóp. Tính thể tích phần hình chóp nhỏ phía trên (cm$^3$).", 10, "$V_{nhỏ} = 80 \\times (1/2)^3 = 80 / 8 = 10$ cm$^3$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Chứng minh hai mặt phẳng song song", "Cho hình hộp $ABCD.A'B'C'D'$. Chứng minh rằng mặt phẳng $(BDA')$ song song với mặt phẳng $(B'D'C)$.",
                           "Trong mặt phẳng $(BDD'B')$, ta có $BD \\parallel B'D'$ (hai cạnh đối diện của hình bình hành). Do $B'D' \\subset (B'D'C)$ nên $BD \\parallel (B'D'C)$. Xét tứ giác $A'BCD'$: Ta có $A'B' \\parallel CD$ và $A'B' = CD$ (cùng bằng $AB$). Lại có $A'B' \\parallel D'C'$ nên $A'D' \\parallel BC$ và $A'D' = BC$, suy ra $A'BCD'$ là hình bình hành $\\Rightarrow A'B \\parallel D'C$. Mà $D'C \\subset (B'D'C)$ nên $A'B \\parallel (B'D'C)$. Hai đường thẳng cắt nhau $BD$ và $A'B$ cùng thuộc $(BDA')$ và cùng song song với $(B'D'C)$. Vậy $(BDA') \\parallel (B'D'C)$ (đpcm)."),
                make_essay(2, "TH", 0.5, "Tính chất lăng trụ", "Cho hình lăng trụ đứng tam giác $ABC.A'B'C'$. Gọi $I, J, K$ lần lượt là trọng tâm của ba mặt bên $(ABB'A'), (BCC'B'), (ACC'A')$. Chứng minh mặt phẳng $(IJK)$ song song với mặt phẳng đáy $(ABC)$.",
                           "Gọi $M, N, P$ lần lượt là trung điểm của các cạnh đáy $AB, BC, CA$. Vì $I, J, K$ là trọng tâm các mặt bên hình chữ nhật nên các đoạn $MI, NJ, PK$ đều nằm trên đường nối trung điểm các cạnh đáy và có độ dài bằng một nửa chiều cao lăng trụ. Do đó các điểm $I, J, K$ cùng nằm trên một mặt phẳng song song với đáy và cách đáy một khoảng bằng $h/2$. Suy ra $(IJK) \\parallel (ABC)$."),
                make_essay(3, "VD", 0.5, "Phân chia khối chóp bởi mặt phẳng song song", "Cho hình chóp $S.ABC$ có thể tích $V = 54$ cm$^3$. Hai mặt phẳng $(\\alpha)$ và $(\\beta)$ song song với mặt phẳng đáy $(ABC)$ lần lượt chia chiều cao của hình chóp thành ba phần bằng nhau (từ đỉnh $S$). Tính thể tích của ba khối đa diện được tạo thành.",
                           "Mặt phẳng thứ nhất cách đỉnh $S$ đoạn $h_1 = \\frac{1}{3}h$, tạo hình chóp nhỏ có $V_1 = V \\times (1/3)^3 = 54 \\times \\frac{1}{27} = 2$ cm$^3$. Mặt phẳng thứ hai cách đỉnh đoạn $h_2 = \\frac{2}{3}h$, tạo hình chóp có $V_2 = V \\times (2/3)^3 = 54 \\times \\frac{8}{27} = 16$ cm$^3$. Thể tích phần chóp cụt ở giữa là $V_{giữa} = V_2 - V_1 = 16 - 2 = 14$ cm$^3$. Thể tích phần chóp cụt ở đáy là $V_{đáy} = V - V_2 = 54 - 16 = 38$ cm$^3$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tháp nước làm mát", "Một tháp làm mát giải nhiệt trong nhà máy nhiệt điện có dạng hình chóp cụt tứ giác với đáy dưới là hình vuông cạnh 40 m, đáy trên là hình vuông cạnh 20 m và chiều cao của tháp là 30 m. Người ta lắp đặt một sàn thao tác kỹ thuật nằm ngang ở chính giữa chiều cao của tháp (cách đáy 15 m). Hãy tính diện tích mặt sàn thao tác kỹ thuật đó.",
                           "Vì sàn thao tác kỹ thuật là mặt phẳng nằm ngang song song với hai đáy và đặt tại vị trí trung điểm của chiều cao tháp ($h' = 15$ m $= \\frac{1}{2}h$), nên thiết diện của tháp cắt bởi mặt sàn này là một hình vuông có cạnh là đường trung bình của hình thang cân mặt bên. Cạnh hình vuông của sàn thao tác: $a_{sàn} = \\frac{a_{đáy lớn} + a_{đáy nhỏ}}{2} = \\frac{40 + 20}{2} = 30$ m. Diện tích mặt sàn thao tác kỹ thuật là: $S = (a_{sàn})^2 = 30^2 = 900$ m$^2$.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 14:
        # BÀI 14: PHÉP CHIẾU SONG SONG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Phép chiếu song song biến một đường thẳng thành một đường thẳng khi",
                         "Đường thẳng đó không song song với phương chiếu",
                         "Đường thẳng đó song song với phương chiếu",
                         "Đường thẳng đó vuông góc với mặt phẳng chiếu",
                         "Đường thẳng đó trùng với phương chiếu",
                         "A", "Nếu đường thẳng không song song hoặc trùng với phương chiếu thì ảnh chiếu song song của nó là một đường thẳng."),
                make_mcq(2, "NB", "Nếu một đường thẳng song song với phương chiếu thì hình chiếu song song của nó lên mặt phẳng chiếu là",
                         "Một điểm", "Một đường thẳng", "Một tia", "Một đoạn thẳng",
                         "A", "Khi đường thẳng song song với phương chiếu, toàn bộ các điểm trên đường thẳng đều chiếu vào một điểm duy nhất."),
                make_mcq(3, "NB", "Phép chiếu song song bảo toàn tính chất nào sau đây?",
                         "Tính song song của hai đường thẳng",
                         "Độ dài của đoạn thẳng",
                         "Độ lớn của góc",
                         "Diện tích của hình phẳng",
                         "A", "Phép chiếu song song bảo toàn tính song song giữa các đường thẳng và tỷ số độ dài của hai đoạn thẳng cùng phương."),
                make_mcq(4, "NB", "Hình biểu diễn của một hình vuông trên bản vẽ bằng phép chiếu song song có thể là",
                         "Hình bình hành", "Hình thang vuông", "Hình tròn", "Tam giác",
                         "A", "Phép chiếu song song bảo toàn tính song song nhưng không bảo toàn góc vuông và độ dài bằng nhau của hai cạnh kề, do đó hình vuông biểu diễn thành hình bình hành."),
                make_mcq(5, "TH", "Cho đoạn thẳng $AB$ có trung điểm $M$. Gọi $A', B', M'$ lần lượt là hình chiếu song song của $A, B, M$ lên mặt phẳng $(\\alpha)$. Khẳng định nào sau đây đúng?",
                         "$M'$ là trung điểm của đoạn thẳng $A'B'$",
                         "$M'$ trùng với $A'$",
                         "$M'A' = 2M'B'$",
                         "$M'$ không thuộc đoạn thẳng $A'B'$",
                         "A", "Phép chiếu song song bảo toàn tỷ số độ dài giữa các đoạn thẳng thẳng hàng, do đó trung điểm biến thành trung điểm."),
                make_mcq(6, "TH", "Hình biểu diễn của một đường tròn qua phép chiếu song song thường là",
                         "Hình elip", "Hình tròn", "Đoạn thẳng", "Hình đa giác",
                         "A", "Hình biểu diễn của đường tròn trong không gian thông qua phép chiếu song song lên mặt phẳng nghiêng thường là hình elip."),
                make_mcq(7, "TH", "Cho tam giác $ABC$ có trọng tâm $G$. Hình chiếu song song của $G$ là $G'$. Khẳng định nào đúng?",
                         "$G'$ là trọng tâm của tam giác ảnh $A'B'C'$",
                         "$G'$ là trực tâm của tam giác $A'B'C'$",
                         "$G'$ là tâm đường tròn ngoại tiếp của $A'B'C'$",
                         "$G'$ là tâm đường tròn nội tiếp của $A'B'C'$",
                         "A", "Do bảo toàn trung điểm và tỷ số 2/3 trên trung tuyến nên trọng tâm biến thành trọng tâm."),
                make_mcq(8, "TH", "Phép chiếu song song theo phương $d$ lên mặt phẳng $(P)$ biến hai đường thẳng chéo nhau $a$ và $b$ thành hai đường thẳng $a'$ và $b'$. Hai đường thẳng $a'$ và $b'$ có thể",
                         "Cắt nhau hoặc song song hoặc trùng nhau",
                         "Chỉ có thể chéo nhau",
                         "Chỉ có thể vuông góc",
                         "Luôn luôn song song",
                         "A", "Vì $a'$ và $b'$ cùng nằm trên mặt phẳng chiếu $(P)$ nên chúng chỉ có thể cắt nhau, song song hoặc trùng nhau (không thể chéo nhau)."),
                make_mcq(9, "VD", "Bóng của một cột cờ trên sân trường phẳng dưới ánh sáng mặt trời là hình ảnh trực quan của",
                         "Phép chiếu song song với phương chiếu là phương của tia nắng mặt trời",
                         "Phép chiếu xuyên tâm",
                         "Phép quay",
                         "Phép đối xứng tâm",
                         "A", "Các tia nắng mặt trời chiếu xuống mặt đất được xem là các tia song song, tạo nên phép chiếu song song."),
                make_mcq(10, "VD", "Một cọc tiêu thẳng đứng cao 2 m có bóng trên mặt đất dài $1.5$ m. Cùng thời điểm đó, bóng của một toà nhà trên sân trường dài 30 m. Chiều cao của toà nhà là",
                         "40 m", "35 m", "45 m", "25 m",
                         "A", "Do tia nắng song song nên tỷ số chiều cao và bóng là như nhau: $\\frac{h}{30} = \\frac{2}{1.5} \\Rightarrow h = 30 \\times \\frac{4}{3} = 40$ m."),
                make_mcq(11, "VDC", "Hình chiếu song song của một hình lục giác đều lên mặt phẳng không song song với nó là một hình lục giác có các cặp cạnh đối diện",
                         "Song song và bằng nhau",
                         "Đôi một vuông góc",
                         "Có độ dài bằng nhau",
                         "Không song song",
                         "A", "Lục giác đều có các cặp cạnh đối diện song song và bằng nhau. Phép chiếu song song bảo toàn tính song song và bằng nhau của các đoạn thẳng cùng phương."),
                make_mcq(12, "VDC", "Cho hình hộp $ABCD.A'B'C'D'$. Phép chiếu song song lên mặt phẳng $(ABCD)$ theo phương chiếu $A'A$ biến tam giác $A'BD$ thành",
                         "Tam giác $ABD$", "Tam giác $A'B'C'$", "Tam giác $CBD$", "Tam giác $C'BD$",
                         "A", "Điểm $A'$ chiếu theo phương $A'A$ biến thành điểm $A$. Các điểm $B, D$ thuộc mặt phẳng chiếu nên giữ nguyên. Do đó ảnh là tam giác $ABD$.")
            ]
            tfs = [
                make_tf(1, "Xét các tính chất của phép chiếu song song.", [
                    ("a", "Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa chúng.", True, "Tính chất cơ bản."),
                    ("b", "Phép chiếu song song biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau.", True, "Đúng."),
                    ("c", "Phép chiếu song song luôn bảo toàn góc giữa hai đường thẳng.", False, "Góc không được bảo toàn (góc vuông có thể biến thành góc nhọn hoặc góc tù)."),
                    ("d", "Phép chiếu song song bảo toàn tỷ số độ dài của hai đoạn thẳng nằm trên hai đường thẳng song song.", True, "Đúng tính chất Ta-lét.")
                ]),
                make_tf(2, "Quan sát bóng của các vật thể dưới ánh nắng mặt trời vào buổi trưa.", [
                    ("a", "Tia nắng mặt trời được coi là các đường thẳng song song.", True, "Khoảng cách từ Mặt Trời rất xa nên các tia nắng song song."),
                    ("b", "Bóng của một thanh gậy thẳng trên sân phẳng luôn là một đoạn thẳng (khi gậy không song song tia nắng).", True, "Hình chiếu của đoạn thẳng là đoạn thẳng."),
                    ("c", "Hai cây cọc cùng chiều cao cắm thẳng đứng trên sân sẽ có độ dài bóng bằng nhau.", True, "Cùng phương và cùng độ dài thì bóng bằng nhau."),
                    ("d", "Bóng của một khung cửa sổ hình chữ nhật luôn là một hình chữ nhật.", False, "Bóng của hình chữ nhật thường là hình bình hành.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Phép chiếu song song có bảo toàn tỷ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng không? (Điền 1 nếu Có, 0 nếu Không)", 1, "Có bảo toàn tỷ số."),
                make_sa(2, "TH", "Cho đoạn thẳng $AB = 10$ cm có trung điểm $M$. Chiều dài đoạn $A'M'$ qua phép chiếu song song bằng bao nhiêu phần đoạn $A'B'$?", 0.5, "Bằng 0.5."),
                make_sa(3, "TH", "Hình biểu diễn của một hình bình hành qua phép chiếu song song là hình gì? (Điền số đỉnh của hình đó)", 4, "Hình bình hành có 4 đỉnh."),
                make_sa(4, "VD", "Một cây cọc cao 1 m có bóng dài 2 m. Một cái cây gần đó có bóng dài 16 m. Tính chiều cao của cây (m).", 8, "$16 / 2 = 8$ m."),
                make_sa(5, "VD", "Hình tam giác có bao nhiêu đỉnh sau khi thực hiện phép chiếu song song không suy biến?", 3, "Tam giác biến thành tam giác có 3 đỉnh."),
                make_sa(6, "VDC", "Cho hình chóp $S.ABC$. Chiếu song song hình chóp lên mặt phẳng đáy $(ABC)$ theo phương $SA$. Điểm $S$ biến thành điểm nào?", 1, "Điểm $A$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Quy tắc vẽ hình biểu diễn", "Nêu ba quy tắc cơ bản khi vẽ hình biểu diễn của một hình không gian trên mặt phẳng bằng phép chiếu song song.",
                           "Ba quy tắc cơ bản: (1) Đường thẳng được biểu diễn bằng đường thẳng; đoạn thẳng biểu diễn bằng đoạn thẳng; điểm biểu diễn bằng điểm. (2) Giữ nguyên tính song song và tính thẳng hàng: hai đường thẳng song song biểu diễn bằng hai đường thẳng song song (hoặc trùng nhau); tỷ số độ dài của hai đoạn thẳng cùng phương được bảo toàn. (3) Quy ước đường nhìn thấy được vẽ bằng nét liền (solid line), đường bị che khuất bắt buộc vẽ bằng nét đứt đoạn (dashed line)."),
                make_essay(2, "TH", 0.5, "Hình biểu diễn của các hình phẳng đặc biệt", "Giải thích tại sao hình biểu diễn của hình tròn trong không gian thường là hình elip và hình biểu diễn của hình vuông thường là hình bình hành.",
                           "Phép chiếu song song bảo toàn tính song song và tỷ số độ dài trên các phương song song nhưng không bảo toàn độ lớn của góc và không bảo toàn tỷ số độ dài giữa hai phương cắt nhau. Vì vậy, góc vuông $90^\\circ$ của hình vuông bị biến dạng thành góc nhọn hoặc góc tù, hai cạnh kề bằng nhau bị biến đổi tỷ lệ, làm hình vuông trở thành hình bình hành. Đối với hình tròn, đường tròn là tập hợp các điểm cách đều tâm; khi chiếu lên mặt phẳng nghiêng, khoảng cách theo phương song song với giao tuyến không đổi trong khi phương vuông góc bị co lại theo hệ số cosin của góc nghiêng, tạo nên đường cong bậc hai elip."),
                make_essay(3, "VD", 0.5, "Bảo toàn trọng tâm tam giác", "Cho tam giác $ABC$ có trọng tâm $G$. Gọi $A', B', C', G'$ lần lượt là hình chiếu song song của $A, B, C, G$ lên mặt phẳng chiếu $(P)$ theo phương chiếu $d$ (phương chiếu không song song với mặt phẳng $(ABC)$). Chứng minh rằng $G'$ là trọng tâm của tam giác $A'B'C'$.",
                           "Gọi $M$ là trung điểm của cạnh $BC$. Qua phép chiếu song song, đoạn thẳng $BC$ biến thành $B'C'$ và trung điểm $M$ biến thành $M'$ là trung điểm của $B'C'$ (do phép chiếu song song bảo toàn trung điểm). Điểm $G$ nằm trên trung tuyến $AM$ và thoả mãn tỷ số $\\frac{AG}{AM} = \\frac{2}{3}$. Do phép chiếu song song bảo toàn tỷ số của ba điểm thẳng hàng nên $G'$ thuộc đoạn $A'M'$ và $\\frac{A'G'}{A'M'} = \\frac{2}{3}$. Vì $A'M'$ là trung tuyến của tam giác $A'B'C'$ và $\\frac{A'G'}{A'M'} = \\frac{2}{3}$ nên $G'$ chính là trọng tâm của tam giác $A'B'C'$ (đpcm)."),
                make_essay(4, "VDC", 0.5, "Ứng dụng trong bản vẽ kỹ thuật kiến trúc", "Trong ngành thiết kế đồ hoạ kiến trúc và xây dựng, phương pháp chiếu trục đo (Axonometric projection) là một dạng của phép chiếu song song. Hãy giải thích tại sao bản vẽ phối cảnh trục đo song song được các kỹ sư cơ khí và kiến trúc sư ưa chuộng khi thể hiện chi tiết kết cấu công trình thay vì bản vẽ phối cảnh hội tụ điểm nhìn thực tế.",
                           "Ưu điểm kỹ thuật cốt lõi của phép chiếu song song (chiếu trục đo): (1) Bảo toàn tính song song: Các cạnh song song trong thực tế của khối nhà hoặc chi tiết máy (như dầm, cột, mép tường) vẫn được vẽ song song trên giấy, giúp người thi công dễ dàng nhận diện hình học không gian mà không bị rối mắt. (2) Cho phép đo trực tiếp tỷ lệ kích thước: Do phép chiếu song song bảo toàn tỷ số độ dài trên các trục đo, kỹ sư có thể dùng thước đo trực tiếp chiều dài, chiều rộng, chiều cao trên bản vẽ rồi nhân với tỷ lệ để ra kích thước thi công thực tế. Trong khi đó, bản vẽ phối cảnh hội tụ (phối cảnh 1 hoặc 2 điểm tụ) làm các đường thẳng song song bị thu hẹp dần về phía xa, làm biến dạng kích thước khiến không thể đo đạc số liệu trực tiếp được.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Phép chiếu song song bảo toàn",
                         "Thứ tự ba điểm thẳng hàng", "Độ lớn của góc", "Độ dài của đoạn thẳng", "Diện tích hình",
                         "A", "Thứ tự các điểm trên một đường thẳng được bảo toàn."),
                make_mcq(2, "NB", "Hình chiếu song song của hai đường thẳng cắt nhau có thể là",
                         "Hai đường thẳng cắt nhau hoặc một đường thẳng",
                         "Hai đường thẳng chéo nhau",
                         "Hai đường cong",
                         "Một hình tròn",
                         "A", "Nếu mặt phẳng chứa 2 đường thẳng đó song song phương chiếu thì ảnh là 1 đường thẳng; ngược lại là 2 đường thẳng cắt nhau."),
                make_mcq(3, "NB", "Hình biểu diễn của một hình chữ nhật qua phép chiếu song song là",
                         "Hình bình hành", "Hình chữ nhật", "Hình thang", "Hình vuông",
                         "A", "Góc vuông bị biến dạng nên hình chữ nhật biểu diễn thành hình bình hành."),
                make_mcq(4, "NB", "Phép chiếu song song không làm thay đổi",
                         "Tỷ số độ dài của hai đoạn thẳng cùng phương",
                         "Độ dài của mọi đoạn thẳng",
                         "Góc giữa hai đường thẳng",
                         "Độ dài bán kính đường tròn",
                         "A", "Tỷ số độ dài hai đoạn thẳng cùng phương luôn được bảo toàn."),
                make_mcq(5, "TH", "Cho hình thang $ABCD$ ($AB \\parallel CD$). Hình biểu diễn của nó qua phép chiếu song song là",
                         "Hình thang có hai đáy song song",
                         "Hình bình hành",
                         "Hình chữ nhật",
                         "Hình thoi",
                         "A", "Tính song song của hai đáy được bảo toàn nên ảnh vẫn là hình thang có hai đáy song song."),
                make_mcq(6, "TH", "Hình biểu diễn của tam giác đều qua phép chiếu song song là",
                         "Một tam giác bất kì",
                         "Bắt buộc là tam giác đều",
                         "Tam giác vuông",
                         "Tam giác cân",
                         "A", "Độ dài các cạnh và góc không được bảo toàn nên tam giác đều có thể biểu diễn bằng tam giác thường."),
                make_mcq(7, "TH", "Cho đoạn thẳng $AB$ song song với mặt phẳng chiếu $(P)$. Hình chiếu $A'B'$ của nó có độ dài",
                         "Bằng độ dài đoạn thẳng $AB$",
                         "Lớn hơn $AB$",
                         "Nhỏ hơn $AB$",
                         "Bằng 0",
                         "A", "Khi đoạn thẳng song song với mặt phẳng chiếu, tứ giác $ABB'A'$ là hình bình hành nên $A'B' = AB$."),
                make_mcq(8, "TH", "Một hình thoi có hình biểu diễn là",
                         "Hình bình hành", "Hình chữ nhật", "Hình vuông", "Hình thoi",
                         "A", "Hình thoi biểu diễn bằng hình bình hành."),
                make_mcq(9, "VD", "Ánh nắng mặt trời rọi qua khung cửa sổ hình vuông in bóng lên mặt sàn gạch phẳng. Bóng của khung cửa sổ đó có dạng",
                         "Hình bình hành", "Hình tròn", "Hình vuông", "Hình tam giác",
                         "A", "Bóng của hình vuông dưới phép chiếu song song là hình bình hành."),
                make_mcq(10, "VD", "Một cọc cắm thẳng đứng cao 1.2 m đổ bóng dài 0.8 m. Cạnh đó một toà tháp có bóng dài 40 m. Chiều cao của toà tháp là",
                         "60 m", "50 m", "48 m", "32 m",
                         "A", "$h = 40 \\times \\frac{1.2}{0.8} = 40 \\times 1.5 = 60$ m."),
                make_mcq(11, "VDC", "Hình chiếu song song của một hình tứ diện lên mặt phẳng có thể là",
                         "Một hình tam giác hoặc một hình tứ giác",
                         "Chỉ có thể là tam giác",
                         "Chỉ có thể là tứ giác",
                         "Một đoạn thẳng",
                         "A", "Tuỳ thuộc vào hướng chiếu, nếu một đỉnh nằm trong tam giác đáy thì ảnh là tam giác; nếu 4 đỉnh tạo thành tứ giác lồi thì ảnh là tứ giác."),
                make_mcq(12, "VDC", "Cho hình lăng trụ $ABC.A'B'C'$. Chiếu song song theo phương $AA'$ lên mặt phẳng đáy $(A'B'C')$ thì tam giác $ABC$ biến thành",
                         "Tam giác $A'B'C'$", "Tam giác $ABB'$", "Tam giác $BCC'$", "Một đoạn thẳng",
                         "A", "Các cạnh bên song song với phương chiếu $AA'$ nên các đỉnh $A, B, C$ chiếu xuống tương ứng thành $A', B', C'$.")
            ]
            tfs = [
                make_tf(1, "Xét phép chiếu song song lên mặt phẳng $(P)$ theo phương $d$.", [
                    ("a", "Hình chiếu của một điểm thuộc mặt phẳng $(P)$ là chính nó.", True, "Điểm trên mặt phẳng chiếu giữ nguyên."),
                    ("b", "Hình chiếu của đường thẳng song song với phương chiếu $d$ là một điểm.", True, "Đúng."),
                    ("c", "Hình chiếu của hai đường thẳng song song luôn là hai đường thẳng song song.", False, "Có thể trùng nhau nếu mặt phẳng chứa chúng song song với phương chiếu."),
                    ("d", "Tỷ số diện tích của hai hình phẳng luôn được bảo toàn qua phép chiếu song song.", True, "Tỷ số diện tích của hai hình đồng phẳng được bảo toàn.")
                ]),
                make_tf(2, "Vẽ hình biểu diễn của các hình học không gian trong sách giáo khoa.", [
                    ("a", "Hình lập phương được biểu diễn với các mặt bên là hình bình hành.", True, "Đúng quy ước vẽ."),
                    ("b", "Đường nét đứt thể hiện các cạnh bị che khuất không nhìn thấy.", True, "Quy tắc bắt buộc."),
                    ("c", "Đường tròn ở đáy hình nón thường được vẽ thành hình elip.", True, "Hình biểu diễn của đường tròn."),
                    ("d", "Góc vuông trong đáy của hình chóp bắt buộc phải vẽ thành góc vuông $90^\\circ$.", False, "Được vẽ thành góc nhọn hoặc góc tù, có ký hiệu góc vuông.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Phép chiếu song song có biến trung điểm của đoạn thẳng thành trung điểm của đoạn thẳng ảnh không? (Điền 1 nếu Có, 0 nếu Không)", 1, "Có bảo toàn trung điểm."),
                make_sa(2, "TH", "Cho đoạn thẳng $AB = 20$ cm song song với mặt phẳng chiếu. Độ dài hình chiếu $A'B'$ bằng bao nhiêu cm?", 20, "Bằng 20 cm."),
                make_sa(3, "TH", "Hình biểu diễn của hình thang cân qua phép chiếu song song có bao nhiêu cạnh?", 4, "Tứ giác có 4 cạnh."),
                make_sa(4, "VD", "Cọc cao 2 m có bóng dài 1 m. Cái cây có bóng dài 12 m. Tính chiều cao cây (m).", 24, "$12 \\times 2 = 24$ m."),
                make_sa(5, "VD", "Bóng của một đồng hồ tròn treo tường in lên sàn phẳng nghiêng là hình gì? (Điền số chữ cái của từ 'elip')", 4, "Từ 'elip' có 4 chữ cái."),
                make_sa(6, "VDC", "Hình chiếu song song của hình lập phương có tối đa bao nhiêu đỉnh trên đường bao ngoài?", 6, "Lục giác lồi có 6 đỉnh.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Phân biệt phép chiếu song song và xuyên tâm", "Nêu điểm khác biệt cơ bản giữa phép chiếu song song và phép chiếu xuyên tâm.",
                           "Khác biệt cơ bản: (1) Trong phép chiếu song song, các tia chiếu đều song song với một phương chiếu $d$ cố định (tâm chiếu ở vô cực). Do đó phép chiếu này bảo toàn tính song song và tỷ số độ dài cùng phương. (2) Trong phép chiếu xuyên tâm, tất cả các tia chiếu cùng xuất phát từ một điểm cố định $O$ gọi là tâm chiếu (như nguồn sáng bóng đèn điểm). Do đó các đường thẳng song song trong thực tế sẽ hội tụ về điểm tụ, không bảo toàn tính song song và không bảo toàn tỷ số độ dài."),
                make_essay(2, "TH", 0.5, "Vẽ hình biểu diễn của tứ diện", "Trình bày các bước dựng hình biểu diễn của một hình tứ diện $ABCD$ trên trang giấy phẳng sao cho trực quan và rõ nét nhất.",
                           "Các bước dựng hình biểu diễn: Bước 1: Vẽ tam giác đáy $BCD$, trong đó cạnh $BC$ vẽ nét liền phía trước, cạnh $BD$ hoặc cạnh khuất phía sau vẽ bằng nét đứt đoạn. Bước 2: Chọn một điểm đỉnh $A$ ở phía trên mặt đáy. Bước 3: Nối đỉnh $A$ với ba đỉnh đáy $B, C, D$. Các đoạn $AB, AC, AD$ nằm ở phía ngoài nhìn thấy được vẽ bằng nét liền. Đặt nhãn đỉnh hoa in nghiêng rõ ràng."),
                make_essay(3, "VD", 0.5, "Chứng minh tính chất đồng quy của hình biểu diễn", "Cho hình hộp $ABCD.A'B'C'D'$. Bằng phép chiếu song song theo phương $AA'$ lên mặt phẳng đáy $(ABCD)$, hãy xác định hình chiếu của 4 đường chéo $AC', BD', CA', DB'$ và chứng minh 4 đường chéo của hình hộp đồng quy tại một điểm.",
                           "Phép chiếu song song theo phương $AA'$ lên $(ABCD)$ biến các đỉnh $A', B', C', D'$ lần lượt thành $A, B, C, D$. Do đó các đường chéo $AC'$ và $CA'$ cùng có hình chiếu là đường chéo $AC$; các đường chéo $BD'$ và $DB'$ cùng có hình chiếu là đường chéo $BD$. Trong không gian, xét mặt phẳng chéo $(ACC'A')$ là hình bình hành: hai đường chéo $AC'$ và $CA'$ cắt nhau tại trung điểm $O$ của mỗi đường. Tương tự trong hình bình hành $(BDD'B')$, hai đường chéo $BD'$ và $DB'$ cắt nhau tại trung điểm $O$. Điểm $O$ là trung điểm chung của cả 4 đường chéo, chứng tỏ 4 đường chéo hình hộp đồng quy tại điểm $O$ (tâm hình hộp)."),
                make_essay(4, "VDC", 0.5, "Ứng dụng xác định độ cao bằng bóng nắng", "Vào một buổi chiều nắng, một nhóm học sinh muốn đo chiều cao của một cột phát sóng viễn thông nhưng không thể trèo lên đỉnh cột. Nhóm học sinh dùng một cây cọc tiêu dài $1.5$ m cắm thẳng đứng trên sân trường phẳng và đo được bóng của cọc dài $1.2$ m. Đồng thời, nhóm đo được chiều dài bóng của cột phát sóng trên sân trường là $36$ m. Hãy tính chiều cao của cột phát sóng và giải thích cơ sở toán học của phương pháp đo này.",
                           "Cơ sở toán học: Mặt Trời ở rất xa Trái Đất nên các tia nắng chiếu xuống mặt đất được xem là các đường thẳng song song. Bóng của các vật thể trên mặt sân phẳng chính là hình chiếu song song của vật thể theo phương tia nắng mặt trời lên mặt đất. Do cây cọc và cột phát sóng đều cắm thẳng đứng (cùng phương vuông góc với mặt đất), tam giác tạo bởi vật thể, bóng và tia nắng là hai tam giác vuông đồng dạng. Ta có tỷ số đồng dạng: $\\frac{H_{cột}}{L_{bóng cột}} = \\frac{h_{cọc}}{l_{bóng cọc}} \\Rightarrow H_{cột} = L_{bóng cột} \\times \\frac{h_{cọc}}{l_{bóng cọc}}$. Thay số: $H_{cột} = 36 \\times \\frac{1.5}{1.2} = 36 \\times 1.25 = 45$ m. Vậy cột phát sóng cao 45 mét.")
            ]
        return mcqs, tfs, sas, essays

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 4 Toán 11.")
