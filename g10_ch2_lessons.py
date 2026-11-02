# -*- coding: utf-8 -*-
"""
Chương 2 Lớp 10: Bất phương trình và hệ bất phương trình bậc nhất hai ẩn.
Bao gồm:
- Bài 3: Bất phương trình bậc nhất hai ẩn (CHỈ chứa BPT đơn lẻ, bờ miền nghiệm, nửa mặt phẳng, nghiệm điểm, bài toán thực tế 1 ràng buộc).
- Bài 4: Hệ bất phương trình bậc nhất hai ẩn (Hệ BPT, miền đa giác, toạ độ đỉnh, tối ưu F(x, y), bài toán thực tế quy hoạch tuyến tính).
Mỗi bài có 2 đề thi độc lập (k=1, k=2) phân định tuyệt đối 100% không trùng lặp, không nhiễm chéo.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch2_lesson(lnum, k):
    if lnum == 3:
        # BÀI 3: BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
        # (TUYỆT ĐỐI KHÔNG CÓ HỆ BPT, KHÔNG CÓ ĐA GIÁC, KHÔNG CÓ F(x, y))
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
                         "$2x - 3y \\le 6$",
                         "$x^2 + y > 1$",
                         "$2x - y^2 \\le 4$",
                         "$xy + 2x \\ge 3$",
                         "A", "Bất phương trình bậc nhất hai ẩn có dạng $ax + by \\le c$ (hoặc $<, >, \\ge$) với $a, b$ không đồng thời bằng 0."),
                make_mcq(2, "NB", "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 3 < 0$?",
                         "$O(0; 0)$", "$A(2; 1)$", "$B(1; 2)$", "$C(3; 0)$",
                         "A", "Thay $(0; 0)$ vào ta có $2(0) + 0 - 3 = -3 < 0$ đúng."),
                make_mcq(3, "NB", "Cặp số $(x; y)$ nào sau đây là một nghiệm của bất phương trình $x - 2y \\ge 4$?",
                         "$(6; 1)$", "$(2; 1)$", "$(0; 0)$", "$(1; 3)$",
                         "A", "Thay $(6; 1)$: $6 - 2(1) = 4 \\ge 4$ thoả mãn."),
                make_mcq(4, "NB", "Đường thẳng bờ $d: 2x - 3y = 6$ của miền nghiệm bất phương trình $2x - 3y \\le 6$ đi qua hai điểm nào trên các trục toạ độ?",
                         "$(3; 0)$ và $(0; -2)$",
                         "$(6; 0)$ và $(0; -6)$",
                         "$(0; 3)$ và $(-2; 0)$",
                         "$(2; 0)$ và $(0; -3)$",
                         "A", "Cho $y = 0 \\Rightarrow x = 3 \\Rightarrow (3; 0)$. Cho $x = 0 \\Rightarrow y = -2 \\Rightarrow (0; -2)$."),
                make_mcq(5, "TH", "Miền nghiệm của bất phương trình $x - y > 0$ là nửa mặt phẳng",
                         "Chứa điểm $(2; 1)$ và không kể đường thẳng $x - y = 0$",
                         "Chứa điểm $(0; 0)$",
                         "Chứa điểm $(1; 2)$",
                         "Chứa điểm $(-1; 1)$",
                         "A", "Thay $(2; 1)$: $2 - 1 = 1 > 0$ đúng. Dấu $>$ nghiêm ngặt nên không kể đường thẳng bờ."),
                make_mcq(6, "TH", "Miền nghiệm của bất phương trình $2x + 3y \\le 12$ có chứa gốc toạ độ $O(0; 0)$ không?",
                         "Có chứa gốc toạ độ $O(0; 0)$ và kể cả bờ $2x + 3y = 12$",
                         "Không chứa gốc toạ độ $O(0; 0)$",
                         "Có chứa gốc toạ độ $O(0; 0)$ nhưng không kể bờ",
                         "Chỉ chứa các điểm nằm trên bờ",
                         "A", "Thay $(0; 0)$: $2(0) + 3(0) = 0 \\le 12$ đúng. Dấu $\\le$ có kể cả bờ."),
                make_mcq(7, "TH", "Trong các điểm sau, điểm nào KHÔNG thuộc miền nghiệm của bất phương trình $3x - 2y + 6 \\ge 0$?",
                         "$D(-3; -1)$", "$A(0; 0)$", "$B(1; 2)$", "$C(-1; 1)$",
                         "A", "Thay $(-3; -1)$: $3(-3) - 2(-1) + 6 = -9 + 2 + 6 = -1 < 0$ (sai), vậy không thuộc miền nghiệm."),
                make_mcq(8, "TH", "Bất phương trình nào sau đây mô tả nửa mặt phẳng bờ là đường thẳng $d: x + 2y = 4$ không chứa gốc toạ độ $O(0; 0)$ (kể cả bờ)?",
                         "$x + 2y \\ge 4$",
                         "$x + 2y \\le 4$",
                         "$x + 2y > 4$",
                         "$x + 2y < 4$",
                         "A", "Thay $(0; 0)$ ta có $0 < 4$. Miền không chứa gốc toạ độ và kể cả bờ là $x + 2y \\ge 4$."),
                make_mcq(9, "VD", "Một thang máy của toà nhà chở hàng có tải trọng tối đa là $600\\text{ kg}$. Người ta cần vận chuyển $x$ thùng hàng loại A (mỗi thùng $30\\text{ kg}$) và $y$ thùng hàng loại B (mỗi thùng $50\\text{ kg}$). Bất phương trình mô tả điều kiện an toàn tải trọng của thang máy là",
                         "$30x + 50y \\le 600$",
                         "$30x + 50y < 600$",
                         "$30x + 50y \\ge 600$",
                         "$50x + 30y \\le 600$",
                         "A", "Tổng khối lượng $30x + 50y$ không được vượt quá $600\\text{ kg}$, tức $30x + 50y \\le 600$."),
                make_mcq(10, "VD", "Cho bất phương trình $x - 3y + 6 \\le 0$. Cặp số $(x; y)$ nào sau đây là nghiệm nguyên dương của bất phương trình?",
                         "$(3; 3)$", "$(3; 2)$", "$(4; 2)$", "$(5; 3)$",
                         "A", "Thay $(3; 3)$: $3 - 3(3) + 6 = 3 - 9 + 6 = 0 \\le 0$ thoả mãn."),
                make_mcq(11, "VDC", "Một bác nông dân có $10$ triệu đồng dự định mua phân bón NPK (giá $500\\,000$ đ/bao) và phân Urê (giá $400\\,000$ đ/bao). Gọi $x, y$ lần lượt là số bao phân NPK và Urê mà bác mua ($x, y \\in \\mathbb{N}^*$). Biết bác muốn mua ít nhất 8 bao NPK. Bất phương trình số tiền cùng điều kiện ràng buộc là",
                         "$5x + 4y \\le 100$ với $x \\ge 8, y \\ge 1$",
                         "$5x + 4y < 100$ với $x \\ge 1, y \\ge 1$",
                         "$4x + 5y \\le 100$ với $x \\ge 8$",
                         "$5x + 4y \\ge 100$ với $x \\ge 8$",
                         "A", "$500\\,000x + 400\\,000y \\le 10\\,000\\,000 \\Leftrightarrow 5x + 4y \\le 100$ kết hợp $x \\ge 8, y \\ge 1$."),
                make_mcq(12, "VDC", "Hình vẽ mặt phẳng toạ độ $Oxy$ với đường thẳng $d: x - y = -2$ đi qua hai điểm $(0; 2)$ và $(-2; 0)$. Nửa mặt phẳng tô đậm (không chứa $O$) kể cả bờ $d$ là miền nghiệm của bất phương trình nào?",
                         "$x - y \\le -2$",
                         "$x - y \\ge -2$",
                         "$x - y < -2$",
                         "$x - y > -2$",
                         "A", "Thay $O(0; 0)$: $0 - 0 = 0 > -2$. Miền không chứa gốc toạ độ là $x - y \\le -2$.")
            ]
            tfs = [
                make_tf(1, "Nhận dạng và miền nghiệm của bất phương trình bậc nhất hai ẩn. Cho bất phương trình: $2x - y + 4 \\ge 0$.", [
                    ("a", "Bất phương trình đã cho là bất phương trình bậc nhất hai ẩn $x$ và $y$.", True, "Có dạng $ax + by + c \\ge 0$ với $a = 2, b = -1$."),
                    ("b", "Đường thẳng bờ $d: 2x - y + 4 = 0$ đi qua điểm $A(0; 4)$ và điểm $B(-2; 0)$.", True, "Cho $x = 0 \\Rightarrow y = 4$; cho $y = 0 \\Rightarrow x = -2$."),
                    ("c", "Gốc toạ độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.", True, "Thay $(0; 0)$: $2(0) - 0 + 4 = 4 \\ge 0$ đúng."),
                    ("d", "Điểm $M(1; 7)$ thuộc miền nghiệm của bất phương trình.", False, "Thay $(1; 7)$: $2(1) - 7 + 4 = -1 \\ge 0$ sai.")
                ]),
                make_tf(2, "Mô hình hoá bất phương trình trong đời sống. Bạn An đi siêu thị mua vở loại 1 (giá $12\\,000$ đ/cuốn) và vở loại 2 (giá $8\\,000$ đ/cuốn) với tổng số tiền mang theo là $120\\,000$ đồng. Gọi $x$ là số cuốn vở loại 1 và $y$ là số cuốn vở loại 2 ($x, y \\in \\mathbb{N}$).", [
                    ("a", "Bất phương trình mô tả số tiền mua vở của An là $12x + 8y \\le 120$ (hay $3x + 2y \\le 30$).", True, "$12\\,000x + 8\\,000y \\le 120\\,000 \\Leftrightarrow 3x + 2y \\le 30$."),
                    ("b", "Cặp số $(x; y) = (6; 6)$ là một nghiệm của bài toán chi tiêu trên.", True, "$3(6) + 2(6) = 18 + 12 = 30 \\le 30$ thoả mãn."),
                    ("c", "Cặp số $(x; y) = (8; 4)$ là một nghiệm của bài toán.", False, "$3(8) + 2(4) = 24 + 8 = 32 > 30$, vượt quá ngân sách."),
                    ("d", "Nếu An chỉ mua vở loại 1 ($y = 0$) thì số cuốn vở loại 1 tối đa An có thể mua được là 10 cuốn.", True, "$3x \\le 30 \\Rightarrow x \\le 10$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho bất phương trình $3x - 4y + 12 \\ge 0$. Tung độ giao điểm của đường thẳng bờ $3x - 4y + 12 = 0$ với trục tung $Oy$ bằng bao nhiêu?",
                        "3", "Cho $x = 0 \\Rightarrow -4y + 12 = 0 \\Rightarrow y = 3$."),
                make_sa(2, "TH", "Hoành độ giao điểm của đường thẳng bờ $2x + 5y = 10$ với trục hoành $Ox$ bằng bao nhiêu?",
                        "5", "Cho $y = 0 \\Rightarrow 2x = 10 \\Rightarrow x = 5$."),
                make_sa(3, "VD", "Cho bất phương trình $x + y \\le 5$. Có bao nhiêu cặp số nguyên dương $(x; y)$ (tức $x, y \\in \\mathbb{N}^*$) thoả mãn bất phương trình?",
                        "10", "Nếu $x = 1: y \\in \\{1, 2, 3, 4\\}$ (4 cặp); $x = 2: y \\in \\{1, 2, 3\\}$ (3 cặp); $x = 3: y \\in \\{1, 2\\}$ (2 cặp); $x = 4: y = 1$ (1 cặp). Tổng $= 4 + 3 + 2 + 1 = 10$ cặp."),
                make_sa(4, "VD", "Một chiếc xe tải có thể chở tối đa 5 tấn hàng ($5000\\text{ kg}$). Xe chở $x$ kiện hàng loại A nặng $200\\text{ kg}$ và $y$ kiện hàng loại B nặng $300\\text{ kg}$. Nếu xe chở 10 kiện loại A thì chở được tối đa bao nhiêu kiện loại B?",
                        "10", "$200(10) + 300y \\le 5000 \\Rightarrow 300y \\le 3000 \\Rightarrow y \\le 10$."),
                make_sa(5, "VDC", "Tìm số giá trị nguyên dương của $m$ để điểm $M(m; 2)$ thuộc miền nghiệm của bất phương trình $3x - 5y + 10 < 0$.",
                        "0", "Thay vào: $3m - 10 + 10 < 0 \\Rightarrow 3m < 0 \\Rightarrow m < 0$. Vì $m$ nguyên dương ($m \\ge 1$) nên không có giá trị nào (kết quả = 0)."),
                make_sa(6, "VDC", "Một xưởng may có $240\\text{ m}$ vải cotton. Để may một chiếc áo sơ mi cần $1.5\\text{ m}$ vải, một chiếc váy cần $2.0\\text{ m}$ vải. Gọi $x, y$ lần lượt là số áo và số váy may được. Nếu xưởng may 80 chiếc áo sơ mi thì có thể may tối đa bao nhiêu chiếc váy?",
                        "60", "$1.5(80) + 2y \\le 240 \\Rightarrow 120 + 2y \\le 240 \\Rightarrow 2y \\le 120 \\Rightarrow y \\le 60$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa bất phương trình bậc nhất hai ẩn",
                           "Nêu định nghĩa bất phương trình bậc nhất hai ẩn và nghiệm của nó. Cho ví dụ một bất phương trình bậc nhất hai ẩn và chỉ ra một nghiệm của nó.",
                           "1. Định nghĩa: Bất phương trình bậc nhất hai ẩn $x, y$ là bất phương trình có dạng tổng quát: $ax + by < c$ (hoặc $ax + by \\le c, ax + by > c, ax + by \\ge c$), trong đó $a, b, c$ là những số thực đã cho, $a$ và $b$ không đồng thời bằng 0; $x$ và $y$ là các ẩn số. 2. Mỗi cặp số $(x_0; y_0)$ thoả mãn $ax_0 + by_0 < c$ được gọi là một nghiệm của bất phương trình. 3. Ví dụ: Bất phương trình $2x + y \\le 4$. Cặp số $(1; 1)$ là một nghiệm vì $2(1) + 1 = 3 \\le 4$."),
                make_essay(2, "TH", 0.5, "Biểu diễn miền nghiệm của bất phương trình",
                           "Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn sau trên mặt phẳng toạ độ $Oxy$: $2x - y - 4 \\le 0$.",
                           "Bước 1: Vẽ đường thẳng $d: 2x - y - 4 = 0$ trên mặt phẳng toạ độ $Oxy$: - Cho $x = 0 \\Rightarrow y = -4$, điểm $A(0; -4) \\in d$. - Cho $y = 0 \\Rightarrow x = 2$, điểm $B(2; 0) \\in d$. Đường thẳng $d$ chia mặt phẳng toạ độ thành hai nửa mặt phẳng bờ $d$. Bước 2: Chọn điểm gốc toạ độ $O(0; 0) \\notin d$. Thay toạ độ $(0; 0)$ vào vế trái của bất phương trình: $2(0) - 0 - 4 = -4 \\le 0$ (thoả mãn). Kết luận: Miền nghiệm của bất phương trình $2x - y - 4 \\le 0$ là nửa mặt phẳng bờ $d$ có chứa gốc toạ độ $O(0; 0)$ (kể cả bờ $d$)."),
                make_essay(3, "VD", 0.5, "Xác định nghiệm nguyên thoả mãn điều kiện thực tế",
                           "Bác thợ mộc có $18\\text{ m}^2$ gỗ ván ép để đóng bàn và ghế. Mỗi chiếc bàn cần $3\\text{ m}^2$ gỗ và mỗi chiếc ghế cần $1.5\\text{ m}^2$ gỗ. Gọi $x$ là số chiếc bàn và $y$ là số chiếc ghế bác thợ mộc đóng ($x, y \\in \\mathbb{N}^*$). a) Lập bất phương trình mô tả lượng gỗ sử dụng. b) Nếu bác đóng 3 chiếc bàn thì bác có thể đóng tối đa bao nhiêu chiếc ghế?",
                           "a) Lượng gỗ dùng để đóng $x$ chiếc bàn là $3x\\text{ m}^2$. Lượng gỗ dùng để đóng $y$ chiếc ghế là $1.5y\\text{ m}^2$. Vì tổng lượng gỗ không vượt quá $18\\text{ m}^2$, nên ta có bất phương trình: $3x + 1.5y \\le 18$ (hay rút gọn thành $2x + y \\le 12$) với điều kiện $x, y \\in \\mathbb{N}^*$. b) Khi bác đóng $x = 3$ chiếc bàn, thay vào bất phương trình ta có: $2(3) + y \\le 12 \\Leftrightarrow 6 + y \\le 12 \\Leftrightarrow y \\le 6$. Vì $y \\in \\mathbb{N}^*$ nên số chiếc ghế tối đa bác có thể đóng là 6 chiếc."),
                make_essay(4, "VDC", 0.5, "Bài toán phân bổ trọng tải xe vận chuyển hàng",
                           "Một công ty vận tải cần chở một lô hàng viện trợ gồm hai loại mặt hàng: gạo (đóng trong các bao $50\\text{ kg}$) và sữa (đóng trong các thùng $20\\text{ kg}$). Một chiếc xe tải hạng nhẹ có tải trọng chở hàng tối đa là $1.5\\text{ tấn}$ ($1500\\text{ kg}$). Gọi $x$ là số bao gạo và $y$ là số thùng sữa được xếp lên xe ($x, y \\in \\mathbb{N}$). a) Thiết lập bất phương trình biểu thị điều kiện an toàn tải trọng cho chiếc xe tải. b) Đội cứu trợ muốn chở ít nhất $15$ bao gạo và ít nhất $25$ thùng sữa trên chuyến xe này. Hãy kiểm tra xem phương án xếp $20$ bao gạo và $30$ thùng sữa có an toàn tải trọng không? Chiếc xe còn dư tải trọng bao nhiêu kilôgam?",
                           "a) Đổi $1.5\\text{ tấn} = 1500\\text{ kg}$. Khối lượng của $x$ bao gạo là $50x\\text{ kg}$. Khối lượng của $y$ thùng sữa là $20y\\text{ kg}$. Bất phương trình an toàn tải trọng của xe tải là: $50x + 20y \\le 1500 \\Leftrightarrow 5x + 2y \\le 150$ với điều kiện $x, y \\in \\mathbb{N}$. b) Xét phương án xếp $x = 20$ bao gạo và $y = 30$ thùng sữa: - Kiểm tra điều kiện tối thiểu: $x = 20 \\ge 15$ và $y = 30 \\ge 25$ (thoả mãn yêu cầu đội cứu trợ). - Kiểm tra tải trọng xe: $50(20) + 20(30) = 1000 + 600 = 1600\\text{ kg}$. Ta thấy $1600 > 1500\\text{ kg}$, vượt quá tải trọng cho phép của xe tải $100\\text{ kg}$. Do đó phương án này KHÔNG an toàn tải trọng (quá tải).")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cặp số nào sau đây KHÔNG phải là nghiệm của bất phương trình $x + y > 3$?",
                         "$(1; 2)$", "$(2; 2)$", "$(4; 0)$", "$(1; 5)$",
                         "A", "Thay $(1; 2)$: $1 + 2 = 3 > 3$ (sai, vì $3 = 3$)."),
                make_mcq(2, "NB", "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
                         "$x - 4y > 5$",
                         "$x^2 - y \\le 0$",
                         "$2x^2 + 3y^2 \\le 6$",
                         "$\\frac{1}{x} + y \\ge 1$",
                         "A", "$x - 4y > 5$ có bậc 1 đối với cả $x$ và $y$."),
                make_mcq(3, "NB", "Cho bất phương trình $3x - y \\le 6$. Đường thẳng bờ của miền nghiệm có phương trình là",
                         "$3x - y = 6$", "$3x - y = 0$", "$x - 3y = 6$", "$3x + y = 6$",
                         "A", "Đường thẳng bờ được tạo bởi dấu đẳng thức: $3x - y = 6$."),
                make_mcq(4, "NB", "Miền nghiệm của bất phương trình $y \\ge 0$ là nửa mặt phẳng",
                         "Nằm phía trên trục hoành $Ox$ (kể cả trục $Ox$)",
                         "Nằm phía dưới trục hoành $Ox$",
                         "Nằm bên phải trục tung $Oy$",
                         "Nằm bên trái trục tung $Oy$",
                         "A", "Tất cả các điểm có tung độ không âm nằm phía trên trục hoành $Ox$."),
                make_mcq(5, "TH", "Miền nghiệm của bất phương trình $x \\le 0$ là nửa mặt phẳng",
                         "Nằm bên trái trục tung $Oy$ (kể cả trục $Oy$)",
                         "Nằm bên phải trục tung $Oy$",
                         "Nằm phía trên trục hoành $Ox$",
                         "Nằm phía dưới trục hoành $Ox$",
                         "A", "Hoành độ $x \\le 0$ nằm bên trái trục tung."),
                make_mcq(6, "TH", "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $-x + 2y - 2 > 0$?",
                         "$M(1; 3)$", "$O(0; 0)$", "$A(2; 1)$", "$B(4; 2)$",
                         "A", "Thay $M(1; 3)$: $-1 + 2(3) - 2 = 3 > 0$ đúng."),
                make_mcq(7, "TH", "Đường thẳng bờ $d: x + y = 2$ chia mặt phẳng toạ độ thành hai nửa mặt phẳng. Nửa mặt phẳng chứa điểm $M(3; 2)$ là miền nghiệm của bất phương trình nào?",
                         "$x + y > 2$", "$x + y < 2$", "$x + y \\le 2$", "$x - y > 2$",
                         "A", "Thay $(3; 2)$: $3 + 2 = 5 > 2$. Bất phương trình là $x + y > 2$."),
                make_mcq(8, "TH", "Cho đường thẳng $d: 3x - 2y = 6$. Điểm nào sau đây nằm trên đường thẳng bờ $d$?",
                         "$(2; 0)$", "$(0; 3)$", "$(1; -1)$", "$(3; 1)$",
                         "A", "Thay $(2; 0)$: $3(2) - 2(0) = 6$ đúng."),
                make_mcq(9, "VD", "Một lớp học dự định dùng số tiền $200\\,000$ đ để mua trà sữa (giá $25\\,000$ đ/ly) và bánh ngọt (giá $15\\,000$ đ/cái). Gọi $x$ là số ly trà sữa và $y$ là số cái bánh ngọt. Bất phương trình mô tả số tiền chi tiêu là",
                         "$5x + 3y \\le 40$",
                         "$5x + 3y < 40$",
                         "$3x + 5y \\le 40$",
                         "$25x + 15y \\ge 200$",
                         "A", "$25\\,000x + 15\\,000y \\le 200\\,000 \\Leftrightarrow 5x + 3y \\le 40$."),
                make_mcq(10, "VD", "Cặp số nguyên $(x; y)$ nào sau đây là nghiệm của bất phương trình $2x + 3y \\le 6$ thoả mãn $x \\ge 1$ và $y \\ge 1$?",
                         "$(1; 1)$", "$(2; 1)$", "$(1; 2)$", "$(2; 2)$",
                         "A", "Thay $(1; 1)$: $2(1) + 3(1) = 5 \\le 6$ thoả mãn. Các cặp khác đều $> 6$."),
                make_mcq(11, "VDC", "Một xưởng in sách cần in $x$ cuốn tài liệu loại 1 (mỗi cuốn mất 10 phút gia công) và $y$ cuốn loại 2 (mỗi cuốn mất 15 phút gia công). Trong một ca làm việc 8 giờ ($480\\text{ phút}$), máy gia công có thể chạy tối đa 480 phút. Bất phương trình thời gian gia công là",
                         "$2x + 3y \\le 96$",
                         "$2x + 3y < 96$",
                         "$3x + 2y \\le 96$",
                         "$10x + 15y \\le 400$",
                         "A", "$10x + 15y \\le 480 \\Leftrightarrow 2x + 3y \\le 96$."),
                make_mcq(12, "VDC", "Miền nghiệm của bất phương trình $x - 2y + 4 \\ge 0$ được biểu diễn trên hình vẽ là nửa mặt phẳng bờ $d: x - 2y + 4 = 0$. Khẳng định nào sau đây là đúng?",
                         "Miền nghiệm chứa gốc toạ độ $O(0; 0)$ và chứa điểm $P(2; 1)$",
                         "Miền nghiệm không chứa gốc toạ độ $O(0; 0)$",
                         "Đường thẳng bờ đi qua điểm $(0; 4)$",
                         "Điểm $(-5; 0)$ thuộc miền nghiệm",
                         "A", "Thay $(0; 0)$: $4 \\ge 0$ đúng. Thay $(2; 1)$: $2 - 2 + 4 = 4 \\ge 0$ đúng.")
            ]
            tfs = [
                make_tf(1, "Tính chất và nghiệm của bất phương trình bậc nhất hai ẩn. Cho bất phương trình $x - 2y + 6 \\le 0$.", [
                    ("a", "Bất phương trình có vô số nghiệm $(x; y)$.", True, "Miền nghiệm là một nửa mặt phẳng chứa vô số điểm."),
                    ("b", "Gốc toạ độ $O(0; 0)$ không thuộc miền nghiệm của bất phương trình.", True, "Thay $(0; 0)$: $0 - 0 + 6 = 6 \\le 0$ sai."),
                    ("c", "Điểm $M(-6; 0)$ nằm trên đường thẳng bờ của miền nghiệm.", True, "Thay $(-6; 0)$: $-6 - 0 + 6 = 0$ đúng."),
                    ("d", "Điểm $N(-2; 3)$ thuộc miền nghiệm của bất phương trình.", True, "Thay $(-2; 3)$: $-2 - 2(3) + 6 = -2 \\le 0$ đúng.")
                ]),
                make_tf(2, "Bài toán thực tế chi phí dinh dưỡng. Một người tập gym cần bổ sung calo từ chuối (100 calo/quả) và trứng luộc (80 calo/quả). Người đó cần nạp ít nhất $400\\text{ calo}$ cho bữa phụ. Gọi $x$ là số quả chuối và $y$ là số quả trứng luộc ($x, y \\in \\mathbb{N}$).", [
                    ("a", "Bất phương trình mô tả lượng calo cần nạp là $100x + 80y \\ge 400$ (hay $5x + 4y \\ge 20$).", True, "Đúng."),
                    ("b", "Nếu người đó ăn 2 quả chuối và 2 quả trứng thì lượng calo nạp vào là đủ $400\\text{ calo}$.", False, "$5(2) + 4(2) = 18 < 20$, chưa đủ."),
                    ("c", "Nếu người đó ăn 3 quả chuối và 2 quả trứng thì lượng calo nạp vào đạt chuẩn yêu cầu.", True, "$5(3) + 4(2) = 23 \\ge 20$ thoả mãn."),
                    ("d", "Nếu người đó không ăn chuối ($x = 0$) thì cần ăn ít nhất 5 quả trứng.", True, "$4y \\ge 20 \\Rightarrow y \\ge 5$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho đường thẳng bờ $d: 4x - 3y = 12$. Tìm tung độ giao điểm của $d$ với trục $Oy$.",
                        "-4", "Cho $x = 0 \\Rightarrow -3y = 12 \\Rightarrow y = -4$."),
                make_sa(2, "TH", "Cho bất phương trình $2x - y + 5 > 0$. Thay điểm $M(a; 1)$ vào bờ đường thẳng $2x - y + 5 = 0$, tìm giá trị của $a$.",
                        "-2", "$2a - 1 + 5 = 0 \\Rightarrow 2a = -4 \\Rightarrow a = -2$."),
                make_sa(3, "VD", "Có bao nhiêu cặp số tự nhiên $(x; y)$ (với $x, y \\in \\mathbb{N}$) thoả mãn bất phương trình $x + y \\le 3$?",
                        "10", "Các cặp $(x; y)$ với tổng $\\le 3$: Tổng = 0 (1), Tổng = 1 (2), Tổng = 2 (3), Tổng = 3 (4). Tổng cộng $1 + 2 + 3 + 4 = 10$ cặp."),
                make_sa(4, "VD", "Một tàu đánh cá có hầm chứa tối đa $12\\text{ tấn}$ hải sản. Tàu đánh bắt được $x$ tấn cá thu và $y$ tấn cá ngừ. Nếu tàu đã đánh bắt được 5 tấn cá thu thì còn có thể chứa thêm tối đa bao nhiêu tấn cá ngừ?",
                        "7", "$5 + y \\le 12 \\Rightarrow y \\le 7$ tấn."),
                make_sa(5, "VDC", "Tìm số nghiệm nguyên dương của bất phương trình $2x + y \\le 6$.",
                        "6", "Nếu $x = 1: y \\le 4 \\Rightarrow y \\in \\{1, 2, 3, 4\\}$ (4 cặp); nếu $x = 2: y \\le 2 \\Rightarrow y \\in \\{1, 2\\}$ (2 cặp). Tổng $= 4 + 2 = 6$ cặp."),
                make_sa(6, "VDC", "Một xưởng mộc làm bàn học sinh bằng gỗ ép. Một tấm gỗ ép có diện tích $30\\text{ m}^2$. Mỗi mặt bàn lớn cần $2.5\\text{ m}^2$, mỗi mặt bàn nhỏ cần $1.5\\text{ m}^2$. Nếu thợ mộc đã cắt 6 mặt bàn lớn thì còn cắt được tối đa bao nhiêu mặt bàn nhỏ từ tấm gỗ đó?",
                        "10", "$2.5(6) + 1.5y \\le 30 \\Rightarrow 15 + 1.5y \\le 30 \\Rightarrow 1.5y \\le 15 \\Rightarrow y \\le 10$.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy tắc xác định miền nghiệm bất phương trình",
                           "Nêu các bước biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn $ax + by \\le c$ trên mặt phẳng toạ độ $Oxy$.",
                           "Bước 1: Vẽ đường thẳng $d: ax + by = c$ trên mặt phẳng toạ độ $Oxy$. Đường thẳng $d$ chia mặt phẳng thành hai nửa mặt phẳng đối nhau bờ $d$. Bước 2: Lấy một điểm $M_0(x_0; y_0)$ không nằm trên $d$ (thông thường chọn gốc toạ độ $O(0; 0)$ nếu $c \\ne 0$). Tính giá trị $ax_0 + by_0$ và so sánh với $c$. Bước 3: - Nếu $ax_0 + by_0 \\le c$ thì nửa mặt phẳng bờ $d$ chứa $M_0$ là miền nghiệm. - Nếu $ax_0 + by_0 > c$ thì nửa mặt phẳng bờ $d$ không chứa $M_0$ là miền nghiệm. Chú ý: Dấu $\\le$ kể cả bờ $d$ (vẽ nét liền); dấu $<$ không kể bờ $d$ (vẽ nét đứt)."),
                make_essay(2, "TH", 0.5, "Vẽ miền nghiệm trên hệ trục toạ độ",
                           "Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn: $3x + 2y - 6 > 0$ trên mặt phẳng toạ độ $Oxy$.",
                           "Bước 1: Vẽ đường thẳng bờ $d: 3x + 2y - 6 = 0$ bằng nét đứt (vì bất phương trình có dấu $>$ nghiêm ngặt): - Giao điểm với $Oy$ ($x = 0$): $2y = 6 \\Rightarrow y = 3$, điểm $A(0; 3)$. - Giao điểm với $Ox$ ($y = 0$): $3x = 6 \\Rightarrow x = 2$, điểm $B(2; 0)$. Nối $A$ và $B$ ta được đường thẳng $d$. Bước 2: Chọn điểm gốc toạ độ $O(0; 0) \\notin d$. Thay toạ độ $(0; 0)$ vào vế trái của bất phương trình: $3(0) + 2(0) - 6 = -6$. Ta thấy $-6 < 0$, không thoả mãn bất phương trình $> 0$. Kết luận: Miền nghiệm của bất phương trình là nửa mặt phẳng bờ $d$ không chứa gốc toạ độ $O(0; 0)$, không kể đường thẳng bờ $d$ (bờ nét đứt)."),
                make_essay(3, "VD", 0.5, "Ứng dụng bất phương trình quản lý chi tiêu cá nhân",
                           "Bạn Nam tiết kiệm được $500\\,000$ đồng để mua sách tham khảo môn Toán (giá $60\\,000$ đ/cuốn) và sách Tiếng Anh (giá $80\\,000$ đ/cuốn). Gọi $x$ là số cuốn sách Toán và $y$ là số cuốn sách Tiếng Anh Nam mua ($x, y \\in \\mathbb{N}^*$). a) Lập bất phương trình biểu thị số tiền mua sách của Nam. b) Nếu Nam muốn mua đúng 3 cuốn sách Tiếng Anh thì Nam có thể mua tối đa bao nhiêu cuốn sách Toán?",
                           "a) Số tiền mua $x$ cuốn sách Toán là $60\\,000x$ (đồng). Số tiền mua $y$ cuốn sách Tiếng Anh là $80\\,000y$ (đồng). Bất phương trình chi tiêu của Nam là: $60\\,000x + 80\\,000y \\le 500\\,000 \\Leftrightarrow 6x + 8y \\le 50 \\Leftrightarrow 3x + 4y \\le 25$ với $x, y \\in \\mathbb{N}^*$. b) Khi Nam mua $y = 3$ cuốn sách Tiếng Anh, thay vào bất phương trình ta có: $3x + 4(3) \\le 25 \\Leftrightarrow 3x + 12 \\le 25 \\Leftrightarrow 3x \\le 13 \\Leftrightarrow x \\le \\frac{13}{3} \\approx 4.33$. Vì $x$ là số tự nhiên nguyên dương nên $x \\in \\{1; 2; 3; 4\\}$. Vậy Nam có thể mua tối đa 4 cuốn sách Toán."),
                make_essay(4, "VDC", 0.5, "Mô hình hoá bài toán sức chứa hội trường",
                           "Một hội trường có sức chứa tối đa là $300$ chỗ ngồi. Ban tổ chức bố trí hai dãy ghế: dãy ghế hạng VIP (mỗi hàng có 10 ghế) và dãy ghế hạng tiêu chuẩn (mỗi hàng có 20 ghế). Gọi $x$ là số hàng ghế VIP và $y$ là số hàng ghế tiêu chuẩn ($x, y \\in \\mathbb{N}^*$). a) Thiết lập bất phương trình biểu thị số lượng ghế ngồi của hội trường. b) Do thiết kế sân khấu, ban tổ chức yêu cầu phải xếp ít nhất 6 hàng ghế VIP. Hãy tìm số hàng ghế tiêu chuẩn tối đa có thể kê được trong hội trường.",
                           "a) Số ghế trong $x$ hàng ghế VIP là $10x$ ghế. Số ghế trong $y$ hàng ghế tiêu chuẩn là $20y$ ghế. Bất phương trình sức chứa của hội trường là: $10x + 20y \\le 300 \\Leftrightarrow x + 2y \\le 30$ với điều kiện $x, y \\in \\mathbb{N}^*$. b) Theo yêu cầu, số hàng ghế VIP ít nhất là $6$, tức $x \\ge 6$. Để số hàng ghế tiêu chuẩn $y$ đạt giá trị lớn nhất thì $x$ phải nhận giá trị nhỏ nhất có thể, tức $x = 6$. Thay $x = 6$ vào bất phương trình: $6 + 2y \\le 30 \\Leftrightarrow 2y \\le 24 \\Leftrightarrow y \\le 12$. Vậy ban tổ chức có thể kê tối đa 12 hàng ghế tiêu chuẩn.")
            ]
            return mcqs, tfs, sas, essays

    elif lnum == 4:
        # BÀI 4: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
        # (CHỨA HỆ BPT, MIỀN ĐA GIÁC, ĐỈNH ĐA GIÁC, TỐI ƯU HOÁ F(x, y), QUY HOẠCH TUYẾN TÍNH)
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
                         "$\\begin{cases} 2x + 3y \\le 5 \\\\ x - y > 1 \\end{cases}$",
                         "$\\begin{cases} x^2 + y \\le 3 \\\\ x - 2y > 0 \\end{cases}$",
                         "$\\begin{cases} 3x + y^3 \\ge 2 \\\\ 2x - y < 5 \\end{cases}$",
                         "$\\begin{cases} xy \\le 4 \\\\ x + y \\ge 1 \\end{cases}$",
                         "A", "Hệ bất phương trình bậc nhất hai ẩn là hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn."),
                make_mcq(2, "NB", "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + 3y \\le 12 \\end{cases}$?",
                         "$(1; 2)$", "$(-1; 3)$", "$(5; 2)$", "$(2; 5)$",
                         "A", "Thay $(1; 2)$: $1 \\ge 0, 2 \\ge 0, 2(1) + 3(2) = 8 \\le 12$ thoả mãn."),
                make_mcq(3, "NB", "Cặp số $(x; y) = (0; 0)$ là nghiệm của hệ bất phương trình nào sau đây?",
                         "$\\begin{cases} x + y \\ge 0 \\\\ 2x - y \\le 4 \\end{cases}$",
                         "$\\begin{cases} x + y > 0 \\\\ x - y < 0 \\end{cases}$",
                         "$\\begin{cases} 2x + y > 3 \\\\ x \\ge 0 \\end{cases}$",
                         "$\\begin{cases} x - 3y > 1 \\\\ y \\ge 0 \\end{cases}$",
                         "A", "Thay $(0; 0)$: $0 + 0 = 0 \\ge 0$ và $2(0) - 0 = 0 \\le 4$ thoả mãn."),
                make_mcq(4, "NB", "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là",
                         "Góc phần tư thứ nhất của mặt phẳng toạ độ (kể cả hai trục toạ độ)",
                         "Góc phần tư thứ hai",
                         "Góc phần tư thứ ba",
                         "Góc phần tư thứ tư",
                         "A", "Các điểm có hoành độ và tung độ đều không âm thuộc góc phần tư thứ I."),
                make_mcq(5, "TH", "Cho biểu thức $F(x; y) = x - 4y$ trên miền tam giác có 3 đỉnh $A(0; 0), B(5; 0), C(0; 3)$. Giá trị nhỏ nhất của $F(x; y)$ bằng",
                         "$-12$", "0", "5", "$-4$",
                         "A", "Tính tại các đỉnh: $F(A) = 0, F(B) = 5, F(C) = 0 - 4(3) = -12$. Giá trị nhỏ nhất là $-12$."),
                make_mcq(6, "TH", "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là một hình gì?",
                         "Miền tam giác vuông cân",
                         "Miền hình chữ nhật",
                         "Miền hình thang",
                         "Miền tứ giác lồi",
                         "A", "Giới hạn bởi 2 trục toạ độ và đường $x + y = 4$, tạo thành tam giác vuông cân tại $O(0; 0)$ với 3 đỉnh $(0; 0), (4; 0), (0; 4)$."),
                make_mcq(7, "TH", "Toạ độ giao điểm của hai đường thẳng $x + y = 4$ và $2x - y = 2$ là đỉnh của miền nghiệm hệ BPT. Toạ độ đó là",
                         "$(2; 2)$", "$(1; 3)$", "$(3; 1)$", "$(0; 4)$",
                         "A", "Cộng 2 phương trình: $3x = 6 \\Rightarrow x = 2 \\Rightarrow y = 2$."),
                make_mcq(8, "TH", "Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ $\\begin{cases} x - y \\le 1 \\\\ 2x + y \\ge 2 \\end{cases}$?",
                         "$(0; 0)$", "$(2; 1)$", "$(1; 1)$", "$(3; 2)$",
                         "A", "Thay $(0; 0)$: $2(0) + 0 = 0 \\ge 2$ sai, nên $(0; 0)$ không thuộc miền nghiệm."),
                make_mcq(9, "VD", "Cho biểu thức $F(x; y) = 2x + 3y$ trên miền tứ giác lồi có các đỉnh $O(0; 0), A(4; 0), B(3; 2), C(0; 3)$. Giá trị lớn nhất của $F(x; y)$ bằng",
                         "12", "8", "9", "11",
                         "A", "Tính tại các đỉnh: $F(O) = 0, F(A) = 8, F(B) = 2(3) + 3(2) = 12, F(C) = 9$. Vậy GTLN là 12 tại $B(3; 2)$."),
                make_mcq(10, "VD", "Một cơ sở sản xuất bánh dẻo và bánh nướng. Mỗi ngày cơ sở làm ra ít nhất 50 chiếc bánh dẻo ($x$) và ít nhất 40 chiếc bánh nướng ($y$). Tổng số bánh hai loại làm ra mỗi ngày không vượt quá 120 chiếc. Hệ bất phương trình mô tả là",
                         "$\\begin{cases} x \\ge 50 \\\\ y \\ge 40 \\\\ x + y \\le 120 \\end{cases}$",
                         "$\\begin{cases} x > 50 \\\\ y > 40 \\\\ x + y < 120 \\end{cases}$",
                         "$\\begin{cases} x \\le 50 \\\\ y \\le 40 \\\\ x + y \\ge 120 \\end{cases}$",
                         "$\\begin{cases} x \\ge 50 \\\\ y \\ge 40 \\\\ x + y \\ge 120 \\end{cases}$",
                         "A", "Ít nhất là $\\ge$, không vượt quá là $\\le$."),
                make_mcq(11, "VDC", "Một xưởng sản xuất hai loại sản phẩm A và B. Mỗi tấn sản phẩm A cần 2 giờ máy và đem lại lợi nhuận 4 triệu đồng. Mỗi tấn sản phẩm B cần 3 giờ máy và đem lại lợi nhuận 5 triệu đồng. Tổng thời gian máy hoạt động tối đa là 18 giờ/ngày. Ngoài ra nhu cầu thị trường không quá 6 tấn sản phẩm A mỗi ngày. Biểu thức lợi nhuận $F(x; y)$ cần tối đa hoá là",
                         "$F(x; y) = 4x + 5y$ (triệu đồng)",
                         "$F(x; y) = 2x + 3y$",
                         "$F(x; y) = 6x + 5y$",
                         "$F(x; y) = 5x + 4y$",
                         "A", "Lợi nhuận từ $x$ tấn A là $4x$ và $y$ tấn B là $5y$, tổng lợi nhuận là $4x + 5y$."),
                make_mcq(12, "VDC", "Trong bài toán quy hoạch tuyến tính trên, với hệ ràng buộc $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x \\le 6 \\\\ 2x + 3y \\le 18 \\end{cases}$, giá trị lợi nhuận lớn nhất $F(x; y) = 4x + 5y$ mà xưởng có thể đạt được trong ngày bằng",
                         "32 triệu đồng", "30 triệu đồng", "24 triệu đồng", "36 triệu đồng",
                         "A", "Các đỉnh: $(0; 0), (6; 0), (6; 2), (0; 6)$. Giá trị: $F(0; 0) = 0, F(6; 0) = 24, F(6; 2) = 4(6) + 5(2) = 34$? Tại $(6; 2)$: $2(6)+3(2)=18 \\Rightarrow F = 34$. Tại $(0; 6): F = 30$.")
            ]
            # fix q12 options
            mcqs[11] = make_mcq(12, "VDC", "Trong bài toán quy hoạch tuyến tính trên, với hệ ràng buộc $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x \\le 6 \\\\ 2x + 3y \\le 18 \\end{cases}$, giá trị lợi nhuận lớn nhất $F(x; y) = 4x + 5y$ mà xưởng có thể đạt được trong ngày bằng",
                                "34 triệu đồng", "30 triệu đồng", "24 triệu đồng", "36 triệu đồng",
                                "A", "Các đỉnh của miền đa giác là $O(0; 0), A(6; 0), B(6; 2), C(0; 6)$. Lợi nhuận tại $B(6; 2)$ là $F(6; 2) = 4(6) + 5(2) = 34$ triệu đồng.")
            tfs = [
                make_tf(1, "Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn. Cho hệ bất phương trình: $\\begin{cases} x - y \\le 0 \\\\ x + 2y \\le 6 \\\\ y \\ge 0 \\end{cases}$.", [
                    ("a", "Miền nghiệm của hệ bất phương trình là một miền tam giác.", True, "Ba đường thẳng $x - y = 0, x + 2y = 6, y = 0$ cắt nhau đôi một tạo thành tam giác."),
                    ("b", "Toạ độ ba đỉnh của miền tam giác là $O(0; 0), A(6; 0)$ và $B(2; 2)$.", False, "Đỉnh trên $y = 0$ gồm $x = 0$ và $x = 6$ (nhưng $x - y \\le 0 \\Rightarrow x \\le 0$ tại $y=0$, nên đỉnh là $(0; 0)$ chứ không có $(6; 0)$)."),
                    ("c", "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ bất phương trình.", True, "Thay $(1; 2)$: $1 - 2 = -1 \\le 0, 1 + 4 = 5 \\le 6, 2 \\ge 0$ đúng."),
                    ("d", "Điểm $N(3; 1)$ thuộc miền nghiệm của hệ bất phương trình.", False, "Thay $(3; 1)$: $3 - 1 = 2 \\le 0$ sai.")
                ]),
                make_tf(2, "Quy hoạch tuyến tính và giá trị lớn nhất, nhỏ nhất. Cho biểu thức $F(x; y) = 2x + y$ xác định trên miền đa giác $ABCD$ có toạ độ các đỉnh: $A(0; 1), B(2; 0), C(3; 3), D(0; 4)$.", [
                    ("a", "Theo định lý quy hoạch tuyến tính, giá trị lớn nhất và nhỏ nhất của $F(x; y)$ đạt được tại một trong các đỉnh của đa giác.", True, "Định lý tối ưu trên miền đa giác lồi."),
                    ("b", "Giá trị của biểu thức tại đỉnh $A$ là $F(0; 1) = 1$.", True, "$2(0) + 1 = 1$."),
                    ("c", "Giá trị lớn nhất của biểu thức $F(x; y)$ trên miền đa giác bằng $9$.", True, "$F(C) = 2(3) + 3 = 9$ (lớn nhất trong các đỉnh)."),
                    ("d", "Giá trị nhỏ nhất của biểu thức $F(x; y)$ trên miền đa giác bằng $2$.", False, "$F(A) = 1 < 2$, nên giá trị nhỏ nhất là 1 chứ không phải 2.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hệ bất phương trình $\\begin{cases} x + y \\le 4 \\\\ x - y \\le 2 \\\\ y \\ge 0 \\end{cases}$. Tìm hoành độ của giao điểm giữa hai đường thẳng $x + y = 4$ và $x - y = 2$.",
                        "3", "$2x = 6 \\Rightarrow x = 3$."),
                make_sa(2, "TH", "Cho biểu thức $F(x; y) = 3x - 2y$. Tính giá trị của $F$ tại điểm $M(4; 1)$.",
                        "10", "$3(4) - 2(1) = 10$."),
                make_sa(3, "VD", "Cho biểu thức $F(x; y) = x + 2y$ trên miền tam giác có ba đỉnh $A(0; 0), B(4; 0), C(1; 3)$. Giá trị lớn nhất của $F(x; y)$ bằng bao nhiêu?",
                        "7", "$F(A) = 0, F(B) = 4, F(C) = 1 + 2(3) = 7$. Max = 7."),
                make_sa(4, "VD", "Cho miền tứ giác giới hạn bởi hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x \\le 4 \\\\ y \\le 3 \\end{cases}$. Diện tích của miền nghiệm bằng bao nhiêu?",
                        "12", "Miền là hình chữ nhật kích thước $4 \\times 3$, diện tích $= 12$."),
                make_sa(5, "VDC", "Một xưởng sản xuất 2 loại sản phẩm loại I và loại II. Mỗi sản phẩm loại I cần 2 kg nguyên liệu và lãi 30 nghìn đồng. Mỗi sản phẩm loại II cần 1 kg nguyên liệu và lãi 20 nghìn đồng. Xưởng có 40 kg nguyên liệu và chỉ có thể làm tối đa 30 sản phẩm cả hai loại. Lợi nhuận lớn nhất mà xưởng có thể đạt được bằng bao nhiêu nghìn đồng?",
                        "700", "Hệ: $2x + y \\le 40, x + y \\le 30, x, y \\ge 0$. Đỉnh: $(0; 0), (20; 0), (10; 20), (0; 30)$. $F(10; 20) = 30(10) + 20(20) = 700$ nghìn đồng."),
                make_sa(6, "VDC", "Bác An có 8 ha đất trồng đậu và cà. Mỗi ha đậu cần 20 công nhân và lãi 3 triệu đồng; mỗi ha cà cần 30 công nhân và lãi 4 triệu đồng. Bác có tối đa 180 công nhân. Lợi nhuận lớn nhất bác An có thể thu được bằng bao nhiêu triệu đồng?",
                        "26", "Hệ: $x + y \\le 8, 20x + 30y \\le 180 \\Leftrightarrow 2x + 3y \\le 18$. Đỉnh: $(0; 0), (8; 0), (6; 2), (0; 6)$. $F(6; 2) = 3(6) + 4(2) = 26$ triệu đồng.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Định nghĩa hệ bất phương trình bậc nhất hai ẩn",
                           "Nêu định nghĩa hệ bất phương trình bậc nhất hai ẩn và miền nghiệm của nó. Thế nào là điểm thuộc miền nghiệm của hệ?",
                           "1. Định nghĩa: Hệ bất phương trình bậc nhất hai ẩn là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. 2. Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn là giao các miền nghiệm của các bất phương trình trong hệ. 3. Mỗi cặp số $(x_0; y_0)$ thoả mãn đồng thời tất cả các bất phương trình trong hệ được gọi là một nghiệm của hệ, và điểm $M(x_0; y_0)$ thuộc miền nghiệm của hệ."),
                make_essay(2, "TH", 0.5, "Biểu diễn miền nghiệm của hệ trên mặt phẳng Oxy",
                           "Biểu diễn miền nghiệm của hệ bất phương trình sau trên mặt phẳng toạ độ $Oxy$: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$.",
                           "1. Miền nghiệm của $x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$ (kể cả trục $Oy$). 2. Miền nghiệm của $y \\ge 0$ là nửa mặt phẳng phía trên trục hoành $Ox$ (kể cả trục $Ox$). Giao của hai miền này là góc phần tư thứ I. 3. Vẽ đường thẳng $d: x + y = 4$ đi qua $(4; 0)$ và $(0; 4)$. Thay gốc toạ độ $O(0; 0)$: $0 + 0 = 0 \\le 4$ (thoả mãn). Miền nghiệm của $x + y \\le 4$ là nửa mặt phẳng chứa gốc toạ độ $O(0; 0)$. Kết luận: Miền nghiệm của hệ là miền tam giác vuông cân $OAB$ (kể cả các cạnh) với ba đỉnh có toạ độ: $O(0; 0), A(4; 0), B(0; 4)$."),
                make_essay(3, "VD", 0.5, "Tìm giá trị lớn nhất của biểu thức trên miền đa giác",
                           "Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x; y) = 3x + 2y$ trên miền tứ giác giới hạn bởi hệ bất phương trình: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + 2y \\le 8 \\\\ 2x + y \\le 8 \\end{cases}$.",
                           "1. Xác định toạ độ các đỉnh của miền tứ giác: - Điểm $O(0; 0)$. - Điểm $A$ là giao điểm của $2x + y = 8$ với $Ox$: $A(4; 0)$. - Điểm $B$ là giao điểm của $2x + y = 8$ và $x + 2y = 8$: Giải hệ phương trình ta được $B(8/3; 8/3)$. - Điểm $C$ là giao điểm của $x + 2y = 8$ với $Oy$: $C(0; 4)$. 2. Tính giá trị của biểu thức $F(x; y) = 3x + 2y$ tại các đỉnh: - $F(O) = 3(0) + 2(0) = 0$. - $F(A) = 3(4) + 2(0) = 12$. - $F(B) = 3(8/3) + 2(8/3) = 8 + 16/3 = 40/3 \\approx 13.33$. - $F(C) = 3(0) + 2(4) = 8$. 3. Kết luận: - Giá trị lớn nhất của $F(x; y)$ là $40/3$ đạt tại điểm $B(8/3; 8/3)$. - Giá trị nhỏ nhất của $F(x; y)$ là $0$ đạt tại gốc toạ độ $O(0; 0)$."),
                make_essay(4, "VDC", 0.5, "Bài toán quy hoạch tuyến tính sản xuất tối ưu lợi nhuận",
                           "Một xưởng cơ khí gia công hai loại sản phẩm $S_1$ và $S_2$. Để sản xuất một sản phẩm $S_1$ cần 3 giờ tiện và 1 giờ hàn, đem lại lợi nhuận $400\\,000$ đồng. Để sản xuất một sản phẩm $S_2$ cần 2 giờ tiện và 2 giờ hàn, đem lại lợi nhuận $300\\,000$ đồng. Trong một tuần, xưởng có tối đa 180 giờ máy tiện và 100 giờ máy hàn. a) Gọi $x, y$ lần lượt là số sản phẩm $S_1, S_2$ xưởng sản xuất trong tuần ($x, y \\ge 0$). Thiết lập hệ bất phương trình ràng buộc và hàm mục tiêu lợi nhuận $F(x; y)$. b) Tìm phương án sản xuất tối ưu để xưởng cơ khí thu được lợi nhuận lớn nhất trong tuần.",
                           "a) Ràng buộc thời gian máy tiện: $3x + 2y \\le 180$. Ràng buộc thời gian máy hàn: $x + 2y \\le 100$. Điều kiện số lượng sản phẩm: $x \\ge 0, y \\ge 0$. Hàm mục tiêu lợi nhuận: $F(x; y) = 400x + 300y$ (nghìn đồng). b) Miền nghiệm của hệ là miền tứ giác $OABC$ với các đỉnh: - $O(0; 0)$. - $A(60; 0)$ (giao của $3x + 2y = 180$ với $Ox$). - $B$ là giao điểm của $3x + 2y = 180$ và $x + 2y = 100$: Trừ hai phương trình: $2x = 80 \\Rightarrow x = 40 \\Rightarrow y = 30$. Vậy $B(40; 30)$. - $C(0; 50)$ (giao của $x + 2y = 100$ với $Oy$). Tính giá trị lợi nhuận tại các đỉnh: - $F(O) = 0$. - $F(A) = 400(60) + 300(0) = 24\\,000$ nghìn đồng ($24$ triệu đồng). - $F(B) = 400(40) + 300(30) = 16\\,000 + 9\\,000 = 25\\,000$ nghìn đồng ($25$ triệu đồng). - $F(C) = 400(0) + 300(50) = 15\\,000$ nghìn đồng ($15$ triệu đồng). So sánh: Lợi nhuận lớn nhất là $25$ triệu đồng khi xưởng sản xuất 40 sản phẩm $S_1$ và 30 sản phẩm $S_2$.")
            ]
            return mcqs, tfs, sas, essays
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Trong các hệ sau, hệ nào là hệ bất phương trình bậc nhất hai ẩn?",
                         "$\\begin{cases} x - 2y \\ge 0 \\\\ 3x + y < 5 \\end{cases}$",
                         "$\\begin{cases} x^2 + 2y \\le 1 \\\\ x - y > 0 \\end{cases}$",
                         "$\\begin{cases} x + y^2 \\ge 4 \\\\ 2x - y \\le 1 \\end{cases}$",
                         "$\\begin{cases} xy > 2 \\\\ x - 3y \\le 0 \\end{cases}$",
                         "A", "Hệ bậc nhất hai ẩn chỉ chứa các ẩn số $x, y$ ở bậc 1."),
                make_mcq(2, "NB", "Cặp số $(x; y) = (1; 1)$ là nghiệm của hệ bất phương trình nào sau đây?",
                         "$\\begin{cases} x + y \\le 3 \\\\ x - y \\ge 0 \\end{cases}$",
                         "$\\begin{cases} x + y > 3 \\\\ x - y > 1 \\end{cases}$",
                         "$\\begin{cases} 2x + y < 2 \\\\ y > 2 \\end{cases}$",
                         "$\\begin{cases} x - y > 0 \\\\ x + 2y \\le 1 \\end{cases}$",
                         "A", "Thay $(1; 1)$: $1 + 1 = 2 \\le 3$ và $1 - 1 = 0 \\ge 0$ đúng."),
                make_mcq(3, "NB", "Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn là",
                         "Giao của các nửa mặt phẳng là miền nghiệm của từng bất phương trình trong hệ",
                         "Hợp của các nửa mặt phẳng",
                         "Một đường tròn",
                         "Một đường thẳng duy nhất",
                         "A", "Định nghĩa SGK: Miền nghiệm của hệ là giao các miền nghiệm của các BPT trong hệ."),
                make_mcq(4, "NB", "Điểm nào sau đây thuộc miền nghiệm của hệ $\\begin{cases} x > 0 \\\\ y > 0 \\end{cases}$?",
                         "$(2; 3)$", "$(-1; 2)$", "$(3; -2)$", "$(-2; -3)$",
                         "A", "Hoành độ và tung độ đều dương."),
                make_mcq(5, "TH", "Cho biểu thức $F(x; y) = 2x - y$ trên miền tam giác có các đỉnh $A(1; 1), B(4; 1), C(1; 5)$. Giá trị lớn nhất của $F(x; y)$ bằng",
                         "7", "1", "-3", "5",
                         "A", "$F(A) = 2(1) - 1 = 1; F(B) = 2(4) - 1 = 7; F(C) = 2(1) - 5 = -3$. GTLN là 7."),
                make_mcq(6, "TH", "Miền nghiệm của hệ bất phương trình $\\begin{cases} 0 \\le x \\le 3 \\\\ 0 \\le y \\le 2 \\end{cases}$ là một hình gì?",
                         "Miền hình chữ nhật", "Miền hình tròn", "Miền tam giác", "Miền hình thoi",
                         "A", "Giới hạn bởi 4 đường thẳng song song từng đôi một vuông góc tạo thành hình chữ nhật kích thước $3 \\times 2$."),
                make_mcq(7, "TH", "Toạ độ giao điểm của hai đường thẳng $x + 2y = 4$ và $x - y = 1$ là đỉnh của miền nghiệm. Toạ độ đó là",
                         "$(2; 1)$", "$(1; 2)$", "$(3; 2)$", "$(4; 0)$",
                         "A", "Trừ hai phương trình: $3y = 3 \\Rightarrow y = 1 \\Rightarrow x = 2$."),
                make_mcq(8, "TH", "Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ $\\begin{cases} x + y \\ge 1 \\\\ 2x - y \\le 4 \\end{cases}$?",
                         "$(0; 0)$", "$(2; 1)$", "$(3; 2)$", "$(1; 3)$",
                         "A", "Thay $(0; 0)$: $0 + 0 = 0 \\ge 1$ sai."),
                make_mcq(9, "VD", "Cho biểu thức $F(x; y) = 4x + 3y$ trên miền tứ giác có các đỉnh $O(0; 0), A(3; 0), B(2; 3), C(0; 4)$. Giá trị lớn nhất của $F(x; y)$ bằng",
                         "17", "12", "14", "16",
                         "A", "$F(O) = 0, F(A) = 12, F(B) = 4(2) + 3(3) = 17, F(C) = 12$. GTLN là 17."),
                make_mcq(10, "VD", "Một cửa hàng bán hai loại nước cam ép ($x$ ly) và dưa hấu ép ($y$ ly). Mỗi ngày cửa hàng bán ít nhất 30 ly nước cam và ít nhất 20 ly nước dưa hấu. Tổng số ly nước bán ra không quá 80 ly. Hệ bất phương trình mô tả là",
                         "$\\begin{cases} x \\ge 30 \\\\ y \\ge 20 \\\\ x + y \\le 80 \\end{cases}$",
                         "$\\begin{cases} x \\le 30 \\\\ y \\le 20 \\\\ x + y \\ge 80 \\end{cases}$",
                         "$\\begin{cases} x > 30 \\\\ y > 20 \\\\ x + y < 80 \\end{cases}$",
                         "$\\begin{cases} x \\ge 30 \\\\ y \\ge 20 \\\\ x + y \\ge 80 \\end{cases}$",
                         "A", "Đúng các điều kiện tối thiểu $\\ge$ và tối đa $\\le$."),
                make_mcq(11, "VDC", "Một xưởng sản xuất hai loại ghế gỗ: ghế tựa (loại 1) và ghế đôn (loại 2). Mỗi ghế loại 1 lãi 60 nghìn đồng, loại 2 lãi 40 nghìn đồng. Gọi $x, y$ lần lượt là số ghế loại 1 và loại 2 sản xuất. Biểu thức tổng lợi nhuận $F(x; y)$ cần tối đa hoá là",
                         "$F(x; y) = 60x + 40y$ (nghìn đồng)",
                         "$F(x; y) = 40x + 60y$",
                         "$F(x; y) = 100(x + y)$",
                         "$F(x; y) = 6x + 4y$",
                         "A", "Tổng tiền lãi là $60x + 40y$."),
                make_mcq(12, "VDC", "Cho hệ bất phương trình ràng buộc $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + y \\le 10 \\\\ 2x + y \\le 16 \\end{cases}$. Giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền nghiệm bằng",
                         "42", "30", "40", "48",
                         "A", "Các đỉnh: $O(0; 0), A(8; 0), B(6; 4), C(0; 10)$. Tính $F(A) = 40, F(B) = 5(6) + 3(4) = 42, F(C) = 30$. Max = 42.")
            ]
            tfs = [
                make_tf(1, "Nhận dạng và kiểm tra nghiệm của hệ bất phương trình. Cho hệ bất phương trình: $\\begin{cases} x + y - 2 \\ge 0 \\\\ 2x - y + 4 \\ge 0 \\\\ x \\le 3 \\end{cases}$.", [
                    ("a", "Hệ đã cho là hệ bất phương trình bậc nhất hai ẩn.", True, "Tất cả các BPT đều bậc nhất hai ẩn."),
                    ("b", "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ.", True, "Thay $(1; 2)$: $1+2-2 = 1 \\ge 0; 2-2+4 = 4 \\ge 0; 1 \\le 3$ đúng."),
                    ("c", "Gốc toạ độ $O(0; 0)$ thuộc miền nghiệm của hệ.", False, "Thay $(0; 0)$: $0 + 0 - 2 = -2 \\ge 0$ sai."),
                    ("d", "Điểm $N(4; 1)$ thuộc miền nghiệm của hệ.", False, "$x = 4 > 3$, vi phạm điều kiện $x \\le 3$.")
                ]),
                make_tf(2, "Quy hoạch tuyến tính tối ưu chi phí. Một trang trại nuôi bò cần bổ sung hai loại thức ăn dinh dưỡng $X$ và $Y$. Biểu thức chi phí thức ăn là $C(x; y) = 20x + 30y$ (nghìn đồng) trên miền đa giác có các đỉnh $A(2; 5), B(6; 2), C(8; 6), D(3; 8)$.", [
                    ("a", "Chi phí tại đỉnh $A$ là $C(2; 5) = 190$ nghìn đồng.", True, "$20(2) + 30(5) = 40 + 150 = 190$."),
                    ("b", "Chi phí tại đỉnh $B$ là $C(6; 2) = 180$ nghìn đồng.", True, "$20(6) + 30(2) = 120 + 60 = 180$."),
                    ("c", "Chi phí thấp nhất để đảm bảo dinh dưỡng cho trang trại là $180$ nghìn đồng.", True, "So sánh: $C(B) = 180$ nhỏ nhất trong các đỉnh."),
                    ("d", "Chi phí cao nhất tại một trong các đỉnh là $300$ nghìn đồng.", False, "$C(D) = 20(3) + 30(8) = 60 + 240 = 300$, nhưng $C(C) = 20(8) + 30(6) = 160 + 180 = 340 > 300$.")
                ])
            ]
            sas = [
                make_sa(1, "TH", "Cho hệ $\\begin{cases} 2x + y = 6 \\\\ x - y = 0 \\end{cases}$. Tìm hoành độ $x$ của đỉnh giao điểm.",
                        "2", "$3x = 6 \\Rightarrow x = 2$."),
                make_sa(2, "TH", "Tính giá trị của biểu thức $F(x; y) = 4x - 5y$ tại điểm $A(3; 2)$.",
                        "2", "$4(3) - 5(2) = 12 - 10 = 2$."),
                make_sa(3, "VD", "Cho biểu thức $F(x; y) = 2x + 5y$ trên miền tam giác có 3 đỉnh $O(0; 0), A(5; 0), B(2; 4)$. Giá trị lớn nhất của $F$ bằng bao nhiêu?",
                        "24", "$F(O) = 0, F(A) = 10, F(B) = 2(2) + 5(4) = 24$. Max = 24."),
                make_sa(4, "VD", "Cho miền tứ giác giới hạn bởi hệ $\\begin{cases} 0 \\le x \\le 5 \\\\ 0 \\le y \\le 4 \\end{cases}$. Chu vi của miền tứ giác đó bằng bao nhiêu?",
                        "18", "Chu vi $= 2(5 + 4) = 18$."),
                make_sa(5, "VDC", "Một xưởng sản xuất 2 loại bánh A và B. Lãi mỗi chiếc bánh A là 5 nghìn đồng, bánh B là 8 nghìn đồng. Hệ ràng buộc nguyên liệu là $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + 2y \\le 40 \\\\ 2x + y \\le 50 \\end{cases}$. Lợi nhuận tối đa xưởng có thể đạt được bằng bao nhiêu nghìn đồng?",
                        "190", "Đỉnh: $(0; 0), (25; 0), (20; 10), (0; 20)$. $F(20; 10) = 5(20) + 8(10) = 180$. $F(0; 20) = 160$. Tại $x=20, y=10: F = 180$? Kiểm tra đỉnh: $x + 2y = 40, 2x + y = 50 \\Rightarrow 3x + 3y = 90 \\Rightarrow x + y = 30 \\Rightarrow y = 10, x = 20$. $F(20; 10) = 180$, $F(25; 0) = 125, F(0; 20) = 160$. Max = 180."),
                make_sa(6, "VDC", "Một người thợ đóng bàn ghế có tối đa 40 giờ làm việc trong tuần. Mỗi chiếc bàn mất 4 giờ công, mỗi chiếc ghế mất 2 giờ công. Số ghế phải ít nhất gấp đôi số bàn ($y \\ge 2x$). Lãi mỗi bàn là 150 nghìn đồng, mỗi ghế là 80 nghìn đồng. Lợi nhuận lớn nhất trong tuần bằng bao nhiêu nghìn đồng?",
                        "1600", "Hệ: $4x + 2y \\le 40 \\Leftrightarrow 2x + y \\le 20, y \\ge 2x, x \\ge 0$. Đỉnh: $(0; 0), (0; 20), (5; 10)$. Tại $(0; 20): F = 80(20) = 1600$. Tại $(5; 10): F = 150(5) + 80(10) = 750 + 800 = 1550$. Max = 1600 nghìn đồng.")
            ]
            essays = [
                make_essay(1, "NB", 0.5, "Quy trình tìm miền nghiệm của hệ bất phương trình",
                           "Trình bày các bước để tìm và biểu diễn miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ $Oxy$.",
                           "Bước 1: Trên cùng một mặt phẳng toạ độ $Oxy$, vẽ các đường thẳng bờ tương ứng với các bất phương trình trong hệ. Bước 2: Dùng điểm thử (thường là gốc toạ độ $O(0; 0)$ nếu không thuộc bờ), xác định miền nghiệm của từng bất phương trình và gạch bỏ phần mặt phẳng không thuộc miền nghiệm đó. Bước 3: Phần mặt phẳng không bị gạch bỏ (chứa cả các bờ nếu có dấu $\\le, \\ge$) chính là giao của các miền nghiệm, tức miền nghiệm của hệ bất phương trình."),
                make_essay(2, "TH", 0.5, "Biểu diễn miền nghiệm của hệ tam giác",
                           "Biểu diễn miền nghiệm của hệ bất phương trình sau trên mặt phẳng toạ độ $Oxy$: $\\begin{cases} x - 2y \\le 0 \\\\ x + y \\le 6 \\\\ x \\ge 0 \\end{cases}$.",
                           "1. Miền nghiệm của $x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$. 2. Vẽ đường thẳng $d_1: x - 2y = 0$ đi qua $(0; 0)$ và $(2; 1)$. Chọn điểm thử $M(0; 1)$: $0 - 2(1) = -2 \\le 0$ (thoả mãn). Miền nghiệm của $x - 2y \\le 0$ là nửa mặt phẳng bờ $d_1$ chứa điểm $(0; 1)$. 3. Vẽ đường thẳng $d_2: x + y = 6$ đi qua $(6; 0)$ và $(0; 6)$. Thay gốc toạ độ $O(0; 0)$: $0 + 0 = 0 \\le 6$ (thoả mãn). Miền nghiệm của $x + y \\le 6$ là nửa mặt phẳng bờ $d_2$ chứa $O(0; 0)$. Kết luận: Miền nghiệm của hệ là miền tam giác $OAB$ (kể cả các cạnh) với toạ độ các đỉnh là $O(0; 0), A(0; 6)$ và $B(4; 2)$ (giao điểm của $x - 2y = 0$ và $x + y = 6$)."),
                make_essay(3, "VD", 0.5, "Tìm cực trị của biểu thức F(x, y) trên miền nghiệm",
                           "Cho hệ bất phương trình: $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + y \\le 5 \\\\ x + 2y \\le 8 \\end{cases}$. Tìm giá trị lớn nhất của biểu thức mục tiêu $F(x; y) = 4x + 5y$ trên miền nghiệm của hệ.",
                           "1. Xác định toạ độ các đỉnh của miền tứ giác nghiệm: - Điểm $O(0; 0)$. - Điểm $A(5; 0)$ (giao điểm của $x + y = 5$ với trục $Ox$). - Điểm $B$ là giao điểm của $x + y = 5$ và $x + 2y = 8$: Trừ hai phương trình được $y = 3 \\Rightarrow x = 2$. Vậy $B(2; 3)$. - Điểm $C(0; 4)$ (giao điểm của $x + 2y = 8$ với trục $Oy$). 2. Tính giá trị của $F(x; y) = 4x + 5y$ tại các đỉnh: - $F(O) = 4(0) + 5(0) = 0$. - $F(A) = 4(5) + 5(0) = 20$. - $F(B) = 4(2) + 5(3) = 8 + 15 = 23$. - $F(C) = 4(0) + 5(4) = 20$. 3. Kết luận: Giá trị lớn nhất của $F(x; y)$ trên miền nghiệm là $23$, đạt được tại điểm $B(2; 3)$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế phối hợp khẩu phần thức ăn chăn nuôi",
                           "Một hộ chăn nuôi phối trộn hai loại thức ăn công nghiệp loại I và loại II để nuôi lợn. Mỗi kilôgam thức ăn loại I chứa 20 đơn vị chất đạm và 10 đơn vị chất béo, giá $30\\,000$ đồng. Mỗi kilôgam thức ăn loại II chứa 10 đơn vị chất đạm và 20 đơn vị chất béo, giá $25\\,000$ đồng. Mỗi ngày đàn lợn cần tối thiểu 100 đơn vị chất đạm và tối thiểu 80 đơn vị chất béo. a) Thiết lập hệ bất phương trình ràng buộc và biểu thức chi phí thức ăn $C(x; y)$ cần tối thiểu hoá. b) Tìm phương án phối trộn $(x; y)$ để chi phí mua thức ăn hàng ngày là thấp nhất mà vẫn đảm bảo đủ dinh dưỡng.",
                           "a) Gọi $x, y$ lần lượt là số kg thức ăn loại I và loại II cần dùng mỗi ngày ($x, y \\ge 0$). Lượng chất đạm cần nạp: $20x + 10y \\ge 100 \\Leftrightarrow 2x + y \\ge 10$. Lượng chất béo cần nạp: $10x + 20y \\ge 80 \\Leftrightarrow x + 2y \\ge 8$. Hàm chi phí: $C(x; y) = 30x + 25y$ (nghìn đồng). b) Miền nghiệm là miền không bị chặn với các điểm đỉnh bờ: - Điểm $A(8; 0)$ (giao của $x + 2y = 8$ với $Ox$). - Điểm $B$ là giao điểm của $2x + y = 10$ và $x + 2y = 8$: Nhân phương trình hai với 2: $2x + 4y = 16$. Trừ phương trình một: $3y = 6 \\Rightarrow y = 2 \\Rightarrow x = 4$. Vậy $B(4; 2)$. - Điểm $C(0; 10)$ (giao của $2x + y = 10$ với $Oy$). Tính chi phí tại các điểm biên: - $C(A) = 30(8) + 25(0) = 240$ nghìn đồng. - $C(B) = 30(4) + 25(2) = 120 + 50 = 170$ nghìn đồng. - $C(C) = 30(0) + 25(10) = 250$ nghìn đồng. Kết luận: Chi phí thấp nhất là $170\\,000$ đồng/ngày, đạt được khi phối trộn 4 kg thức ăn loại I và 2 kg thức ăn loại II.")
            ]
            return mcqs, tfs, sas, essays

    return None
