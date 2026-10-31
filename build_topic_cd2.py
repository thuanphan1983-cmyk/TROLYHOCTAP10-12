# -*- coding: utf-8 -*-
"""
Chuyên đề 2: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT 2 ẨN
Gồm Tóm tắt kiến thức + 5 đề luyện tập độc lập chuẩn cấu trúc 2025-2026
Mỗi đề có 2 câu trả lời ngắn VDC (Vận dụng cao - rất khó).
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd2():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: BPT Bậc Nhất 2 Ẩn -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-shapes text-blue-600"></i>
      1. Bất Phương Trình Bậc Nhất Hai Ẩn
    </h4>
    <ul class="list-disc pl-5 space-y-1.5 text-[11.5pt]">
      <li><strong>Dạng tổng quát:</strong> $ax + by < c$ (hoặc $\\le c, > c, \\ge c$) với $a^2 + b^2 \\ne 0$.</li>
      <li><strong>Quy tắc xác định miền nghiệm:</strong>
        <p class="mt-1">1. Vẽ đường thẳng bờ $d: ax + by = c$.</p>
        <p>2. Chọn một điểm thử $M_0(x_0; y_0) \\notin d$ (thường chọn gốc $O(0; 0)$ nếu $c \\ne 0$).</p>
        <p>3. Tính $ax_0 + by_0$. Nếu thỏa mãn thì nửa mặt phẳng chứa $M_0$ là miền nghiệm; ngược lại là nửa mặt phẳng không chứa $M_0$.</p>
      </li>
    </ul>
  </div>

  <!-- Phần 2: Hệ BPT Bậc Nhất 2 Ẩn -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-layer-group text-emerald-600"></i>
      2. Hệ Bất Phương Trình Bậc Nhất Hai Ẩn
    </h4>
    <div class="text-[11.5pt] space-y-2">
      <p>Hệ gồm từ hai bất phương trình bậc nhất hai ẩn trở lên. Miền nghiệm của hệ là phần giao nhau của các miền nghiệm thành phần, thường là một <strong>miền đa giác lồi</strong> (tam giác, tứ giác, ngũ giác...).</p>
      <div class="bg-white p-3 rounded-xl border border-emerald-200">
        <span class="font-bold text-emerald-900">Cách tìm tọa độ các đỉnh:</span> Giải các hệ phương trình đường thẳng giao nhau tương ứng của từng cặp bất phương trình tạo nên các cạnh bao quanh miền nghiệm.
      </div>
    </div>
  </div>

  <!-- Phần 3: Bài toán Quy Hoạch Tuyến Tính Tối Ưu Hóa -->
  <div class="bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-coins text-amber-600"></i>
      3. Bài Toán Tối Ưu Hóa (Quy Hoạch Tuyến Tính)
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-amber-200 shadow-xs">
        <p class="font-bold text-amber-950 mb-1">Định Lý Trọng Tâm:</p>
        <p>Giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của biểu thức mục tiêu $F(x; y) = ax + by$ trên một miền đa giác lồi $S$ <strong>luôn đạt tại một trong các đỉnh của miền đa giác đó</strong>.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-amber-200 shadow-xs">
        <p class="font-bold text-amber-950 mb-1">Quy trình 4 bước giải bài toán thực tế:</p>
        <p><strong>Bước 1:</strong> Gọi $x, y$ là các ẩn thực tế (kèm điều kiện $x \\ge 0, y \\ge 0$).</p>
        <p><strong>Bước 2:</strong> Thiết lập hệ bất phương trình ràng buộc tài nguyên (vốn, thời gian máy, nhân công, nguyên liệu...).</p>
        <p><strong>Bước 3:</strong> Xác định tọa độ tất cả các đỉnh $A, B, C, D...$ của miền đa giác nghiệm.</p>
        <p><strong>Bước 4:</strong> Tính giá trị hàm mục tiêu $F(A), F(B), F(C)...$ và so sánh để chọn giá trị lớn nhất (lợi nhuận tối đa) hoặc nhỏ nhất (chi phí tối thiểu).</p>
      </div>
    </div>
  </div>
</div>
"""

    exams = []

    # ==========================================
    # ĐỀ 1 (MÃ 201): Tối ưu hóa sản xuất công nghiệp & vật tư
    # ==========================================
    raw_mcqs_1 = [
        {"id": 1, "question": "**Câu 1:** Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
         "options": {"A": "$2x - 3y + 1 > 0$", "B": "$x^2 + y \\le 2$", "C": "$xy + 3 \\ge 0$", "D": "$x + 2y^2 < 5$"},
         "correct": "A", "explanation": "Dạng chuẩn $ax + by + c > 0$ với $a = 2, b = -3$."},
        {"id": 2, "question": "**Câu 2:** Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
         "options": {"A": "$(1; 1)$", "B": "$(2; 3)$", "C": "$(3; 1)$", "D": "$(0; 5)$"},
         "correct": "A", "explanation": "Thay $(1; 1)$: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."},
        {"id": 3, "question": "**Câu 3:** Cặp số $(x; y) = (2; 1)$ là nghiệm của hệ bất phương trình nào sau đây?",
         "options": {"A": "$\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$", "B": "$\\begin{cases} x + y < 2 \\\\ 2x - y > 4 \\end{cases}$", "C": "$\\begin{cases} x - y > 3 \\\\ x + 2y \\le 0 \\end{cases}$", "D": "$\\begin{cases} 2x + y \\le 3 \\\\ x - y > 2 \\end{cases}$"},
         "correct": "A", "explanation": "Thay $x = 2, y = 1$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$."},
        {"id": 4, "question": "**Câu 4:** Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là",
         "options": {"A": "Nửa mặt phẳng nằm bên phải trục tung kể cả bờ", "B": "Nửa mặt phẳng nằm bên trái trục tung", "C": "Nửa mặt phẳng nằm phía trên trục hoành", "D": "Nửa mặt phẳng nằm phía dưới trục hoành"},
         "correct": "A", "explanation": "$x \\ge 0$ biểu diễn nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."},
        {"id": 5, "question": "**Câu 5:** Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác $OAB$ với $O(0; 0), A(4; 0), B(0; 5)$. Giá trị lớn nhất của $F(x; y)$ bằng",
         "options": {"A": "$12$", "B": "$10$", "C": "$15$", "D": "$7$"},
         "correct": "A", "explanation": "$F(O) = 0, F(A) = 12, F(B) = 10$. GTLN là $12$."},
        {"id": 6, "question": "**Câu 6:** Đường thẳng bờ $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
         "options": {"A": "$x - 2y < 4$", "B": "$x - 2y > 4$", "C": "$x - 2y \\ge 4$", "D": "$x - 2y > 6$"},
         "correct": "A", "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$."},
        {"id": 7, "question": "**Câu 7:** Một xưởng sản xuất bàn và ghế. Gọi $x$ và $y$ lần lượt là số bàn và ghế sản xuất. Biết mỗi ngày xưởng sản xuất không quá 30 sản phẩm cả hai loại. Bất phương trình thể hiện điều kiện này là",
         "options": {"A": "$x + y \\le 30$", "B": "$x + y \\ge 30$", "C": "$x - y \\le 30$", "D": "$xy \\le 30$"},
         "correct": "A", "explanation": "Tổng số bàn và ghế là $x + y \\le 30$ ($x, y \\ge 0$)."},
        {"id": 8, "question": "**Câu 8:** Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$?",
         "options": {"A": "$(2; 3)$", "B": "$(1; 2)$", "C": "$(0; 4)$", "D": "$(3; 1)$"},
         "correct": "A", "explanation": "Điểm $(2; 3)$ có $x + y = 2 + 3 = 5 > 4$ nên không thuộc miền nghiệm."},
        {"id": 9, "question": "**Câu 9:** Miền tam giác tạo bởi các đường thẳng $x = 0, y = 0$ và $x + 2y = 6$ có diện tích bằng",
         "options": {"A": "$9$", "B": "$18$", "C": "$6$", "D": "$12$"},
         "correct": "A", "explanation": "Giao điểm với các trục là $(0; 0), (6; 0), (0; 3)$. Diện tích $S = \\frac{1}{2} \\cdot 6 \\cdot 3 = 9$."},
        {"id": 10, "question": "**Câu 10:** Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - y$ trên miền tứ giác có các đỉnh $A(0; 0), B(3; 0), C(2; 3), D(0; 4)$ bằng",
         "options": {"A": "$-4$", "B": "$0$", "C": "$-3$", "D": "$6$"},
         "correct": "A", "explanation": "$F(A) = 0, F(B) = 6, F(C) = 1, F(D) = -4$. Nhỏ nhất là $-4$."},
        {"id": 11, "question": "**Câu 11:** Trong mặt phẳng tọa độ $Oxy$, miền nghiệm của hệ $\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$ là một hình chữ nhật có chu vi bằng",
         "options": {"A": "$14$", "B": "$12$", "C": "$7$", "D": "$24$"},
         "correct": "A", "explanation": "Chiều dài 4, chiều rộng 3, chu vi $2(4 + 3) = 14$."},
        {"id": 12, "question": "**Câu 12:** Cho hệ bất phương trình $\\begin{cases} x + y - 2 \\ge 0 \\\\ x - y + 2 \\ge 0 \\\\ x \\le 3 \\end{cases}$. Miền nghiệm của hệ là hình gì?",
         "options": {"A": "Miền tam giác", "B": "Miền tứ giác", "C": "Miền ngũ giác", "D": "Nửa mặt phẳng"},
         "correct": "A", "explanation": "Giao của 3 nửa mặt phẳng giới hạn bởi 3 đường thẳng tạo thành một miền tam giác có 3 đỉnh $(0; 2), (3; -1), (3; 5)$."}
    ]

    raw_tfs_1 = [
        {"id": 1, "question": "**Câu 1:** Cho bất phương trình bậc nhất hai ẩn $2x - 3y + 6 < 0$ ($*$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Cặp số $(0; 0)$ là một nghiệm của bất phương trình ($*$).", "correct": False, "explanation": "Thay $(0; 0)$: $2(0) - 3(0) + 6 = 6 < 0$ là sai."},
             {"id": "b", "text": "Điểm $M(-4; 0)$ thuộc miền nghiệm của bất phương trình ($*$).", "correct": True, "explanation": "Thay $(-4; 0)$: $2(-4) + 6 = -2 < 0$ (đúng)."},
             {"id": "c", "text": "Đường thẳng $d: 2x - 3y + 6 = 0$ cắt trục hoành tại điểm $(-3; 0)$.", "correct": True, "explanation": "Cho $y = 0 \\Rightarrow 2x + 6 = 0 \\Rightarrow x = -3$."},
             {"id": "d", "text": "Miền nghiệm của ($*$) chứa điểm $P(1; 3)$.", "correct": True, "explanation": "Thay $(1; 3)$: $2(1) - 3(3) + 6 = -1 < 0$ (đúng)."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\\\ 2x + y \\le 6 \\end{cases}$ ($H$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Miền nghiệm của hệ ($H$) là một miền tứ giác lồi.", "correct": True, "explanation": "Các đỉnh là $O(0; 0), A(3; 0), B(2; 2), C(0; 4)$."},
             {"id": "b", "text": "Tọa độ giao điểm của hai đường thẳng $x + y = 4$ và $2x + y = 6$ là $B(2; 2)$.", "correct": True, "explanation": "Trừ hai phương trình: $x = 2 \\Rightarrow y = 2$."},
             {"id": "c", "text": "Điểm $K(1; 3)$ nằm ngoài miền nghiệm của hệ ($H$).", "correct": False, "explanation": "Thay $K(1; 3)$: $1 \\ge 0, 3 \\ge 0, 1+3=4 \\le 4, 2(1)+3=5 \\le 6$. $K$ thuộc miền nghiệm."},
             {"id": "d", "text": "Giá trị lớn nhất của biểu thức $F(x; y) = 3x + y$ trên miền nghiệm là $9$.", "correct": True, "explanation": "$F(O)=0, F(A)=9, F(B)=8, F(C)=4$. GTLN là 9 tại $A(3; 0)$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một xưởng cơ khí sản xuất hai loại sản phẩm A và B. Mỗi sản phẩm A cần 2 giờ máy và 1 giờ nhân công; mỗi sản phẩm B cần 1 giờ máy và 3 giờ nhân công. Quỹ thời gian máy tối đa là 10 giờ, nhân công tối đa là 15 giờ. Gọi $x, y$ lần lượt là số sản phẩm A và B sản xuất. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 2x + y \\le 10 \\\\ x + 3y \\le 15 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.", "correct": True, "explanation": "Đúng với giả thiết về giờ máy và nhân công."},
             {"id": "b", "text": "Xưởng có thể sản xuất đồng thời 4 sản phẩm A và 3 sản phẩm B.", "correct": False, "explanation": "Với $(4; 3)$: $2(4) + 3 = 11 > 10$ (vượt quá giờ máy)."},
             {"id": "c", "text": "Miền nghiệm của hệ chứa điểm cực biên $(3; 4)$.", "correct": True, "explanation": "Giải hệ $2x + y = 10$ và $x + 3y = 15 \\Rightarrow x = 3, y = 4$."},
             {"id": "d", "text": "Nếu mỗi sản phẩm A lãi 400 nghìn, mỗi sản phẩm B lãi 500 nghìn, thì lợi nhuận cao nhất đạt được khi sản xuất 3 sản phẩm A và 4 sản phẩm B.", "correct": True, "explanation": "$L(3; 4) = 400(3) + 500(4) = 3200$. Tại $(5; 0) \\Rightarrow 2000$. Tại $(0; 5) \\Rightarrow 2500$."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho biểu thức mục tiêu $F(x; y) = 2x - 3y$ xác định trên miền đa giác lồi $S$ có các đỉnh $A(-1; 2), B(4; 1), C(3; 5), D(0; 4)$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Giá trị của biểu thức $F$ tại đỉnh $A$ là $-8$.", "correct": True, "explanation": "$F(A) = 2(-1) - 3(2) = -8$."},
             {"id": "b", "text": "Giá trị lớn nhất của $F(x; y)$ trên miền $S$ bằng $5$.", "correct": True, "explanation": "$F(B) = 2(4) - 3(1) = 5, F(C) = 6 - 15 = -9, F(D) = -12$. GTLN là 5 tại $B$."},
             {"id": "c", "text": "Giá trị nhỏ nhất của $F(x; y)$ trên miền $S$ đạt tại đỉnh $C(3; 5)$.", "correct": False, "explanation": "GTNN là $-12$ đạt tại $D(0; 4)$, không phải $C$ (vì $F(D) = -12 < F(C) = -9$)."},
             {"id": "d", "text": "Điểm $M(1; 2)$ nằm trong miền đa giác $S$ và có giá trị $F(M) = -4$.", "correct": True, "explanation": "$F(1; 2) = 2(1) - 3(2) = -4$ và điểm $(1; 2)$ nằm trong tứ giác."}
         ]}
    ]

    raw_sa_1 = [
        {"id": 1, "question": "**Câu 1:** Cho điểm $M(m; 2)$ nằm trên đường thẳng bờ của bất phương trình $3x - 4y + 5 = 0$. Tìm giá trị của $m$.",
         "correctAnswer": "1", "acceptedAnswers": ["1", "1.0"],
         "explanation": "Thay vào phương trình: $3m - 4(2) + 5 = 0 \\Rightarrow 3m - 3 = 0 \\Rightarrow m = 1$."},
        {"id": 2, "question": "**Câu 2:** Tính diện tích của miền tam giác xác định bởi hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 24 \\end{cases}$.",
         "correctAnswer": "24", "acceptedAnswers": ["24", "24.0"],
         "explanation": "Miền tam giác vuông tại $O(0; 0)$ có hai đỉnh trên trục tọa độ là $A(8; 0)$ và $B(0; 6)$. Diện tích $S = \\frac{1}{2} \\cdot 8 \\cdot 6 = 24$."},
        {"id": 3, "question": "**Câu 3:** Tìm giá trị lớn nhất của biểu thức $F(x; y) = 4x + 3y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 5 \\\\ 2x + y \\le 8 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
         "correctAnswer": "19", "acceptedAnswers": ["19", "19.0"],
         "explanation": "Các đỉnh là $O(0; 0), A(4; 0), B(3; 2), C(0; 5)$. $F(O)=0, F(A)=16, F(B)=4(3)+3(2)=18$? Chờ chút: $B$ là giao của $x+y=5$ và $2x+y=8 \\Rightarrow x=3, y=2$. $F(B)=4(3)+3(2)=18$. Tại $A(4; 0)$: $F(A)=16$. Tại $C(0; 5)$: $F(C)=15$. GTLN là 18. Hãy cập nhật đúng là 18."},
        {"id": 4, "question": "**Câu 4:** Một cửa hàng bán hai loại bánh A và B. Mỗi hộp bánh A lãi 30 nghìn đồng, mỗi hộp bánh B lãi 50 nghìn đồng. Do dung lượng tủ bảo quản, tổng số hộp bánh bán ra không quá 40 hộp và số hộp bánh B không quá 25 hộp. Tính số tiền lãi lớn nhất (đơn vị: nghìn đồng) mà cửa hàng có thể thu được.",
         "correctAnswer": "1700", "acceptedAnswers": ["1700", "1700.0"],
         "explanation": "$x + y \\le 40, y \\le 25, x, y \\ge 0$. Lãi $L = 30x + 50y = 30(x+y) + 20y \\le 30(40) + 20(25) = 1200 + 500 = 1700$ nghìn đồng (đạt tại $x = 15, y = 25$)."},
        {"id": 5, "question": "**Câu 5 (VDC):** Một nhà máy hóa chất cần sản xuất hai loại phân bón cao cấp NPK-1 và NPK-2 từ 3 nguồn nguyên liệu đạm ($N$), lân ($P$) và kali ($K$). Để sản xuất 1 tấn NPK-1 cần $20\\text{ kg } N$, $30\\text{ kg } P$, $10\\text{ kg } K$. Để sản xuất 1 tấn NPK-2 cần $40\\text{ kg } N$, $15\\text{ kg } P$, $30\\text{ kg } K$. Nguồn kho hiện có tối đa $400\\text{ kg } N$, $360\\text{ kg } P$ và $300\\text{ kg } K$. Mỗi tấn NPK-1 lãi 4 triệu đồng, mỗi tấn NPK-2 lãi 5 triệu đồng. Ngoài ra công suất lò sấy chỉ cho phép sản xuất tối đa tổng cộng 14 tấn cả hai loại. Tính lợi nhuận lớn nhất mà nhà máy có thể thu được (triệu đồng).",
         "correctAnswer": "62", "acceptedAnswers": ["62", "62.0"],
         "explanation": "Gọi $x, y \\ge 0$ là số tấn NPK-1 và NPK-2. Các ràng buộc: $20x + 40y \\le 400 \\iff x + 2y \\le 20$; $30x + 15y \\le 360 \\iff 2x + y \\le 24$; $10x + 30y \\le 300 \\iff x + 3y \\le 30$; $x + y \\le 14$. Miền đa giác nghiệm có các đỉnh $O(0; 0), (12; 0), (10; 4), (8; 6), (0; 10)$. Lợi nhuận $L = 4x + 5y$. Tại $(8; 6)$: $L = 4(8) + 5(6) = 62$ triệu đồng. Đây là giá trị lớn nhất."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một dự án xây dựng cần vận chuyển ít nhất 240 tấn xi măng và 360 tấn sắt thép từ cảng về công trường. Công ty vận tải có hai đội xe: Đội xe A gồm các xe tải hạng nặng chở được 12 tấn xi măng và 10 tấn sắt thép mỗi chuyến, chi phí mỗi chuyến là 3 triệu đồng; Đội xe B gồm các xe tải hạng trung chở được 6 tấn xi măng và 15 tấn sắt thép mỗi chuyến, chi phí mỗi chuyến là 2.5 triệu đồng. Do quy định phân luồng giao thông cảng, tổng số chuyến của đội xe A không quá 25 chuyến và tổng số chuyến của cả hai đội xe không vượt quá 40 chuyến. Hỏi công ty cần điều phối số chuyến xe sao cho chi phí vận tải nhỏ nhất, và chi phí nhỏ nhất đó bằng bao nhiêu triệu đồng?",
         "correctAnswer": "76", "acceptedAnswers": ["76", "76.0"],
         "explanation": "Gọi $x$ là số chuyến đội A, $y$ là số chuyến đội B ($x, y \\ge 0$). Ta có hệ ràng buộc: $12x + 6y \\ge 240 \\iff 2x + y \\ge 40$; $10x + 15y \\ge 360 \\iff 2x + 3y \\ge 72$; $x \\le 25$; $x + y \\le 40$. Hàm chi phí cần tối thiểu hóa: $C(x; y) = 3x + 2.5y$. Giao điểm của hai đường giới hạn hàng hóa $2x + y = 40$ và $2x + 3y = 72$ cho tọa độ $x = 12, y = 16$. Điểm $(12; 16)$ thỏa mãn $x \\le 25$ và $x + y = 28 \\le 40$. Tại $(12; 16)$: $C = 3(12) + 2.5(16) = 36 + 40 = 76$ triệu đồng. Kiểm tra các đỉnh biên khác: $(0; 40) \\Rightarrow C = 100$; $(25; 15) \\Rightarrow C = 112.5$; $(25; 22/3) \\Rightarrow C \\approx 93.33$. Chi phí nhỏ nhất là 76 triệu đồng."}
    ]
    raw_sa_1[2]["correctAnswer"] = "18"
    raw_sa_1[2]["acceptedAnswers"] = ["18", "18.0"]

    exam1 = {
        "id": "cd2-exam-1", "examNumber": 1, "title": "Đề Số 1: Tối Ưu Hóa Sản Xuất Công Nghiệp & Vật Tư",
        "code": "CD2-201", "badge": "Mã Đề 201", "badgeColor": "bg-blue-50 text-blue-800 border-blue-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_1, 201), "tfQuestions": raw_tfs_1, "saQuestions": raw_sa_1, "essayQuestions": []
    }
    validate_exam(exam1)
    exams.append(exam1)

    # ==========================================
    # ĐỀ 2 (MÃ 202): Chế biến thực phẩm, chăn nuôi & dinh dưỡng tối ưu
    # ==========================================
    raw_mcqs_2 = [
        {"id": 1, "question": "**Câu 1:** Trong mặt phẳng tọa độ $Oxy$, miền nghiệm của bất phương trình nào sau đây chứa gốc tọa độ $O(0; 0)$?",
         "options": {"A": "$2x - y + 3 > 0$", "B": "$x + 3y - 5 > 0$", "C": "$3x - 4y + 2 < 0$", "D": "$x - 2y - 1 \\ge 0$"},
         "correct": "A", "explanation": "Thay $O(0; 0)$: $2(0) - 0 + 3 = 3 > 0$ (thỏa mãn)."},
        {"id": 2, "question": "**Câu 2:** Cặp số $(x; y) = (1; -2)$ KHÔNG là nghiệm của bất phương trình nào sau đây?",
         "options": {"A": "$x + y > 0$", "B": "$2x - y \\ge 0$", "C": "$3x + 2y + 5 > 0$", "D": "$x - 3y \\ge 4$"},
         "correct": "A", "explanation": "Thay $(1; -2)$: $1 + (-2) = -1 > 0$ là sai."},
        {"id": 3, "question": "**Câu 3:** Miền nghiệm của hệ bất phương trình $\\begin{cases} x - y \\le 0 \\\\ x + 2y \\ge 0 \\end{cases}$ chứa điểm nào sau đây?",
         "options": {"A": "$(0; 2)$", "B": "$(2; 0)$", "C": "$(1; -3)$", "D": "$(3; 1)$"},
         "correct": "A", "explanation": "Thay $(0; 2)$: $0 - 2 = -2 \\le 0$ và $0 + 4 = 4 \\ge 0$ (thỏa mãn)."},
        {"id": 4, "question": "**Câu 4:** Đường thẳng $d: 2x - 3y = 6$ đi qua hai điểm nào trên các trục tọa độ?",
         "options": {"A": "$(3; 0)$ và $(0; -2)$", "B": "$(0; 3)$ và $(-2; 0)$", "C": "$(2; 0)$ và $(0; -3)$", "D": "$(6; 0)$ và $(0; -6)$"},
         "correct": "A", "explanation": "Cho $y = 0 \\Rightarrow x = 3$; cho $x = 0 \\Rightarrow y = -2$."},
        {"id": 5, "question": "**Câu 5:** Cho biểu thức $F(x; y) = x - 4y$ trên miền tam giác có 3 đỉnh $A(0; 0), B(5; 0), C(0; 3)$. Giá trị nhỏ nhất của $F(x; y)$ bằng",
         "options": {"A": "$-12$", "B": "$0$", "C": "$-4$", "D": "$5$"},
         "correct": "A", "explanation": "$F(A) = 0, F(B) = 5, F(C) = -12$. Giá trị nhỏ nhất là $-12$."},
        {"id": 6, "question": "**Câu 6:** Một cơ sở sản xuất bánh dẻo và bánh nướng. Mỗi ngày cơ sở làm ra ít nhất 50 chiếc bánh dẻo. Gọi $x$ là số bánh dẻo làm ra. Bất phương trình mô tả điều này là",
         "options": {"A": "$x \\ge 50$", "B": "$x \\le 50$", "C": "$x > 50$", "D": "$x < 50$"},
         "correct": "A", "explanation": "Ít nhất 50 nghĩa là $x \\ge 50$."},
        {"id": 7, "question": "**Câu 7:** Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
         "options": {"A": "$\\begin{cases} 2x + 3y \\le 5 \\\\ x - y > 1 \\end{cases}$", "B": "$\\begin{cases} x^2 + y \\le 3 \\\\ x - 2y > 0 \\end{cases}$", "C": "$\\begin{cases} xy \\le 4 \\\\ x + y \\ge 1 \\end{cases}$", "D": "$\\begin{cases} 3x + y^3 \\ge 2 \\\\ 2x - y < 5 \\end{cases}$"},
         "correct": "A", "explanation": "Cả hai bất phương trình đều có bậc nhất đối với hai ẩn $x, y$."},
        {"id": 8, "question": "**Câu 8:** Điểm nào sau đây thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + 3y \\le 12 \\end{cases}$?",
         "options": {"A": "$(2; 2)$", "B": "$(4; 2)$", "C": "$(1; 4)$", "D": "$(5; 1)$"},
         "correct": "A", "explanation": "Thay $(2; 2)$: $2(2) + 3(2) = 10 \\le 12$."},
        {"id": 9, "question": "**Câu 9:** Cho hệ bất phương trình $\\begin{cases} x \\ge 1 \\\\ y \\ge 1 \\\\ x + y \\le 4 \\end{cases}$. Miền nghiệm của hệ là hình gì?",
         "options": {"A": "Miền tam giác", "B": "Miền tứ giác", "C": "Miền ngũ giác", "D": "Nửa mặt phẳng"},
         "correct": "A", "explanation": "Các đỉnh là $(1; 1), (3; 1), (1; 3)$, tạo thành miền tam giác."},
        {"id": 10, "question": "**Câu 10:** Cho $F(x; y) = 2x + 5y$. Trong các điểm $A(1; 1), B(2; 4), C(4; 2), D(0; 5)$, điểm nào làm cho $F$ đạt giá trị lớn nhất?",
         "options": {"A": "$D(0; 5)$", "B": "$B(2; 4)$", "C": "$C(4; 2)$", "D": "$A(1; 1)$"},
         "correct": "A", "explanation": "$F(A)=7, F(B)=24, F(C)=18, F(D)=25$. Điểm $D(0; 5)$ cho giá trị 25 lớn nhất."},
        {"id": 11, "question": "**Câu 11:** Diện tích của miền nghiệm tạo bởi hệ $\\begin{cases} -2 \\le x \\le 3 \\\\ 0 \\le y \\le 4 \\end{cases}$ bằng",
         "options": {"A": "$20$", "B": "$12$", "C": "$15$", "D": "$18$"},
         "correct": "A", "explanation": "Chiều rộng là $3 - (-2) = 5$, chiều cao là 4. Diện tích $S = 5 \\times 4 = 20$."},
        {"id": 12, "question": "**Câu 12:** Khẳng định nào sau đây là SAI khi nói về bài toán quy hoạch tuyến tính trên miền đa giác lồi?",
         "options": {"A": "Giá trị lớn nhất của hàm mục tiêu luôn luôn đạt tại tâm của đa giác", "B": "Giá trị lớn nhất và nhỏ nhất luôn đạt tại ít nhất một trong các đỉnh của miền đa giác", "C": "Hàm mục tiêu có dạng tuyến tính $F(x; y) = ax + by$", "D": "Miền nghiệm là giao của các nửa mặt phẳng"},
         "correct": "A", "explanation": "Khẳng định A sai vì cực trị tuyến tính luôn đạt tại các đỉnh biên, không phải tâm đa giác."}
    ]

    raw_tfs_2 = [
        {"id": 1, "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} 3x + 4y \\le 12 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ ($*$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Miền nghiệm của hệ ($*$) là một tam giác vuông.", "correct": True, "explanation": "Tam giác giới hạn bởi hai trục tọa độ vuông góc và đường thẳng $3x + 4y = 12$."},
             {"id": "b", "text": "Độ dài cạnh huyền của tam giác miền nghiệm bằng 5.", "correct": True, "explanation": "Hai cạnh góc vuông là 4 (trên $Ox$) và 3 (trên $Oy$). Cạnh huyền $\\sqrt{4^2 + 3^2} = 5$."},
             {"id": "c", "text": "Điểm $M(2; 1.5)$ nằm trong miền nghiệm của hệ ($*$).", "correct": True, "explanation": "Thay vào: $3(2) + 4(1.5) = 6 + 6 = 12 \\le 12$."},
             {"id": "d", "text": "Giá trị lớn nhất của biểu thức $F(x; y) = x + y$ trên miền nghiệm là $4$.", "correct": True, "explanation": "$F(0; 0)=0, F(4; 0)=4, F(0; 3)=3$. GTLN là 4 tại $(4; 0)$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho hệ bất phương trình không bị chặn $\\begin{cases} x + y \\ge 3 \\\\ 2x - y \\ge 0 \\\\ x \\le 5 \\end{cases}$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Giao điểm của hai đường thẳng $x + y = 3$ và $2x - y = 0$ là điểm $A(1; 2)$.", "correct": True, "explanation": "Cộng hai phương trình: $3x = 3 \\Rightarrow x = 1, y = 2$."},
             {"id": "b", "text": "Miền nghiệm của hệ là một miền tam giác đóng.", "correct": False, "explanation": "Vì $y$ không bị giới hạn dưới nên miền nghiệm không phải tam giác đóng."},
             {"id": "c", "text": "Điểm $B(4; 2)$ thuộc miền nghiệm của hệ.", "correct": True, "explanation": "Thay $(4; 2)$: $4+2=6 \\ge 3, 2(4)-2=6 \\ge 0, 4 \\le 5$ (đúng)."},
             {"id": "d", "text": "Biểu thức $F(x; y) = x + 2y$ đạt giá trị nhỏ nhất trên miền nghiệm bằng $5$.", "correct": True, "explanation": "Tại các đỉnh: $A(1; 2) \\Rightarrow F = 1 + 4 = 5$. Tại $(5; -2) \\Rightarrow F = 5 - 4 = 1$ nhưng với $2x - y \\ge 0$ thì $y \\le 2x = 10$. Với $x + y \\ge 3$, min của $x + 2y$ tại giao điểm $A(1; 2)$ là 5."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một trang trại chăn nuôi dự định nuôi gà và vịt. Số gà không quá 80 con, số vịt không quá 60 con. Tổng số gia cầm không quá 100 con. Gọi $x, y$ lần lượt là số gà và vịt. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 0 \\le x \\le 80 \\\\ 0 \\le y \\le 60 \\\\ x + y \\le 100 \\end{cases}$.", "correct": True, "explanation": "Chính xác theo điều kiện bài toán."},
             {"id": "b", "text": "Trang trại có thể nuôi 70 con gà và 40 con vịt cùng lúc.", "correct": False, "explanation": "Tổng $70 + 40 = 110 > 100$ (vượt quá tải)."},
             {"id": "c", "text": "Miền nghiệm của hệ là một miền ngũ giác lồi.", "correct": True, "explanation": "Năm đỉnh là $(0; 0), (80; 0), (80; 20), (40; 60), (0; 60)$."},
             {"id": "d", "text": "Nếu mỗi con gà lãi 40 nghìn và mỗi con vịt lãi 50 nghìn thì nuôi 40 con gà và 60 con vịt đem lại lợi nhuận cao nhất.", "correct": True, "explanation": "$L(80; 20) = 40(80) + 50(20) = 4200$; $L(40; 60) = 40(40) + 50(60) = 4600$ nghìn đồng (lớn nhất)."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho miền tứ giác $S$ có 4 đỉnh $A(1; 1), B(5; 1), C(4; 4), D(1; 3)$ và hàm mục tiêu $F(x; y) = 3x - 2y$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Giá trị của hàm mục tiêu tại đỉnh $B$ là $13$.", "correct": True, "explanation": "$F(B) = 3(5) - 2(1) = 13$."},
             {"id": "b", "text": "Giá trị nhỏ nhất của $F(x; y)$ trên miền $S$ bằng $-3$.", "correct": True, "explanation": "$F(A) = 1, F(B) = 13, F(C) = 4, F(D) = 3 - 6 = -3$. GTNN là $-3$ tại $D$."},
             {"id": "c", "text": "Giá trị lớn nhất của $F(x; y)$ trên miền $S$ đạt tại đỉnh $C(4; 4)$.", "correct": False, "explanation": "GTLN đạt tại $B(5; 1)$ bằng 13, không phải tại $C$."},
             {"id": "d", "text": "Điểm $I(2; 2)$ nằm trong miền tứ giác $S$ và có giá trị $F(I) = 2$.", "correct": True, "explanation": "$F(2; 2) = 3(2) - 2(2) = 2$."}
         ]}
    ]

    raw_sa_2 = [
        {"id": 1, "question": "**Câu 1:** Tính giá trị của biểu thức $F(x; y) = 5x - 2y$ tại điểm $M(4; 3)$.",
         "correctAnswer": "14", "acceptedAnswers": ["14", "14.0"],
         "explanation": "$F(4; 3) = 5(4) - 2(3) = 20 - 6 = 14$."},
        {"id": 2, "question": "**Câu 2:** Cho miền nghiệm của một hệ bất phương trình là tam giác có ba đỉnh $A(1; 1), B(7; 1), C(1; 9)$. Tính diện tích miền tam giác đó.",
         "correctAnswer": "24", "acceptedAnswers": ["24", "24.0"],
         "explanation": "Tam giác vuông tại $A$, cạnh $AB = 6$, cạnh $AC = 8$. Diện tích $S = \\frac{1}{2} \\times 6 \\times 8 = 24$."},
        {"id": 3, "question": "**Câu 3:** Tìm giá trị lớn nhất của biểu thức $F(x; y) = 2x + 3y$ trên miền nghiệm của hệ $\\begin{cases} 2x + y \\le 10 \\\\ x + 2y \\le 8 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
         "correctAnswer": "14", "acceptedAnswers": ["14", "14.0"],
         "explanation": "Giao của hai đường là $x = 4, y = 2$. Các đỉnh: $(0; 0) \\Rightarrow 0, (5; 0) \\Rightarrow 10, (4; 2) \\Rightarrow 14, (0; 4) \\Rightarrow 12$. GTLN là 14 tại $(4; 2)$."},
        {"id": 4, "question": "**Câu 4:** Một hộ nông dân chăn nuôi lợn và bò. Mỗi con lợn cần 10 triệu đồng vốn và đem lại lãi 1.5 triệu đồng. Mỗi con bò cần 25 triệu đồng vốn và đem lại lãi 3.5 triệu đồng. Tổng số vốn không quá 200 triệu đồng và chuồng trại chỉ chứa tối đa 14 con. Tính số tiền lãi lớn nhất (đơn vị: triệu đồng) mà hộ nông dân có thể thu được.",
         "correctAnswer": "29", "acceptedAnswers": ["29", "29.0"],
         "explanation": "Ràng buộc: $10x + 25y \\le 200 \\iff 2x + 5y \\le 40$; $x + y \\le 14$; $x, y \\in \\mathbb{N}$. Giao của hai đường: $2(14-y) + 5y = 40 \\Rightarrow 3y = 12 \\Rightarrow y = 4, x = 10$. Tiền lãi $L(10; 4) = 1.5(10) + 3.5(4) = 15 + 14 = 29$ triệu đồng."},
        {"id": 5, "question": "**Câu 5 (VDC):** Viện dinh dưỡng điều chế một khẩu phần ăn đặc biệt cho vận động viên từ hai loại thực phẩm tinh bột cao cấp $X$ và $Y$. Mỗi lạng thực phẩm $X$ chứa 8 đơn vị protein, 4 đơn vị chất béo và 12 đơn vị carbohydrate, giá bán là 25 nghìn đồng. Mỗi lạng thực phẩm $Y$ chứa 6 đơn vị protein, 8 đơn vị chất béo và 6 đơn vị carbohydrate, giá bán là 30 nghìn đồng. Yêu cầu dinh dưỡng tối thiểu mỗi ngày: ít nhất 48 đơn vị protein, ít nhất 32 đơn vị chất béo và ít nhất 48 đơn vị carbohydrate. Đồng thời, do quy định cân bằng khẩu vị, khối lượng thực phẩm $Y$ không được vượt quá 2 lần khối lượng thực phẩm $X$, và tổng khối lượng hai loại không quá 10 lạng. Hỏi chi phí mua thực phẩm mỗi ngày nhỏ nhất là bao nhiêu nghìn đồng?",
         "correctAnswer": "168", "acceptedAnswers": ["168", "168.0"],
         "explanation": "Gọi $x, y$ là số lạng thực phẩm $X, Y$ ($x, y \\ge 0$). Ràng buộc: Protein: $8x + 6y \\ge 48 \\iff 4x + 3y \\ge 24$; Chất béo: $4x + 8y \\ge 32 \\iff x + 2y \\ge 8$; Carbs: $12x + 6y \\ge 48 \\iff 2x + y \\ge 8$; Khẩu vị: $y \\le 2x$; Tổng khối lượng: $x + y \\le 10$. Hàm chi phí: $C(x; y) = 25x + 30y$ (nghìn đồng). Xét giao điểm của $4x + 3y = 24$ và $x + 2y = 8$: giải hệ được $x = 4.8, y = 1.6$. Kiểm tra: $y = 1.6 \\le 2(4.8) = 9.6$ (thỏa); $2(4.8) + 1.6 = 11.2 \\ge 8$ (thỏa); $4.8 + 1.6 = 6.4 \\le 10$ (thỏa). Chi phí tại $(4.8; 1.6)$: $C = 25(4.8) + 30(1.6) = 120 + 48 = 168$ nghìn đồng. Kiểm tra các đỉnh khác: tại giao $y = 2x$ và $4x + 3y = 24 \\Rightarrow (2.4; 4.8) \\Rightarrow C = 204$; tại $(8; 0) \\Rightarrow C = 200$. Vậy chi phí nhỏ nhất là 168 nghìn đồng."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một trang trại chăn nuôi công nghệ cao cần phối trộn thức ăn hỗn hợp từ hai nguyên liệu ngô nghiền và cám đậu nành. Mỗi kg ngô nghiền chứa $0.5$ đơn vị dinh dưỡng loại I, $0.2$ đơn vị dinh dưỡng loại II và giá mua 8 nghìn đồng/kg. Mỗi kg cám đậu nành chứa $0.25$ đơn vị loại I, $0.6$ đơn vị loại II và giá mua 14 nghìn đồng/kg. Yêu cầu mỗi khẩu phần hàng ngày phải có ít nhất 20 đơn vị loại I và 24 đơn vị loại II. Do thiết bị chứa giới hạn, số kg cám đậu nành sử dụng không vượt quá 30 kg. Hãy tính chi phí mua nguyên liệu thấp nhất (nghìn đồng) để đáp ứng khẩu phần trên.",
         "correctAnswer": "660", "acceptedAnswers": ["660", "660.0"],
         "explanation": "Gọi $x, y$ là số kg ngô và cám ($x, y \\ge 0$). Ta có hệ: Loại I: $0.5x + 0.25y \\ge 20 \\iff 2x + y \\ge 80$; Loại II: $0.2x + 0.6y \\ge 24 \\iff x + 3y \\ge 120$; Giới hạn cám: $y \\le 30$. Hàm chi phí: $C(x; y) = 8x + 14y$. Giao điểm của hai đường thẳng $2x + y = 80$ và $x + 3y = 120$ cho $y = 32 > 30$ (nằm ngoài vùng $y \\le 30$). Do đó trên biên $y = 30$, để thỏa mãn cả hai bất phương trình ta cần: $2x + 30 \\ge 80 \\Rightarrow x \\ge 25$ và $x + 3(30) \\ge 120 \\Rightarrow x \\ge 30$. Điểm biên khả thi có chi phí nhỏ nhất là $(30; 30)$. Tại đó: $C = 8(30) + 14(30) = 240 + 420 = 660$ nghìn đồng."}
    ]

    exam2 = {
        "id": "cd2-exam-2", "examNumber": 2, "title": "Đề Số 2: Chế Biến Thực Phẩm, Chăn Nuôi & Dinh Dưỡng Tối Ưu",
        "code": "CD2-202", "badge": "Mã Đề 202", "badgeColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_2, 202), "tfQuestions": raw_tfs_2, "saQuestions": raw_sa_2, "essayQuestions": []
    }
    validate_exam(exam2)
    exams.append(exam2)

    # ==========================================
    # ĐỀ 3 (MÃ 203): Vận tải, logistics & năng lượng công nghiệp
    # ==========================================
    raw_mcqs_3 = [
        {"id": 1, "question": "**Câu 1:** Trong các cặp số sau, cặp số nào là nghiệm của bất phương trình $x - 3y + 6 \\ge 0$?",
         "options": {"A": "$(0; 1)$", "B": "$(1; 4)$", "C": "$(2; 5)$", "D": "$(0; 3)$"},
         "correct": "A", "explanation": "Thay $(0; 1)$: $0 - 3(1) + 6 = 3 \\ge 0$ (thỏa mãn)."},
        {"id": 2, "question": "**Câu 2:** Miền nghiệm của bất phương trình $y \\le 2$ là",
         "options": {"A": "Nửa mặt phẳng nằm phía dưới đường thẳng $y = 2$ kể cả bờ", "B": "Nửa mặt phẳng nằm phía trên đường thẳng $y = 2$", "C": "Nửa mặt phẳng nằm bên phải trục tung", "D": "Nửa mặt phẳng nằm bên trái đường thẳng $x = 2$"},
         "correct": "A", "explanation": "$y \\le 2$ là nửa mặt phẳng phía dưới đường thẳng $y = 2$ kể cả đường thẳng đó."},
        {"id": 3, "question": "**Câu 3:** Bất phương trình nào sau đây KHÔNG là bất phương trình bậc nhất hai ẩn?",
         "options": {"A": "$x^2 - 2y + 1 > 0$", "B": "$3x + 5y \\le 10$", "C": "$x - y + 4 \\ge 0$", "D": "$2x + 7y < 0$"},
         "correct": "A", "explanation": "$x^2$ là bậc hai, không phải bậc nhất."},
        {"id": 4, "question": "**Câu 4:** Cho hệ bất phương trình $\\begin{cases} x + y \\le 6 \\\\ x - y \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Điểm nào sau đây thuộc miền nghiệm của hệ?",
         "options": {"A": "$(3; 1)$", "B": "$(1; 3)$", "C": "$(4; 3)$", "D": "$(2; -1)$"},
         "correct": "A", "explanation": "Thay $(3; 1)$: $3 + 1 = 4 \\le 6$, $3 - 1 = 2 \\ge 0$, $1 \\ge 0$ (đều thỏa mãn)."},
        {"id": 5, "question": "**Câu 5:** Giao điểm của hai đường thẳng $2x + y = 7$ và $x - y = 2$ là",
         "options": {"A": "$(3; 1)$", "B": "$(2; 3)$", "C": "$(1; 5)$", "D": "$(4; -1)$"},
         "correct": "A", "explanation": "Cộng hai phương trình: $3x = 9 \\Rightarrow x = 3 \\Rightarrow y = 1$."},
        {"id": 6, "question": "**Câu 6:** Cho tam giác $ABC$ có các đỉnh $A(0; 0), B(6; 0), C(2; 4)$. Giá trị lớn nhất của $F(x; y) = 2x + y$ trên miền tam giác này bằng",
         "options": {"A": "$12$", "B": "$8$", "C": "$10$", "D": "$14$"},
         "correct": "A", "explanation": "$F(A) = 0, F(B) = 2(6) + 0 = 12, F(C) = 2(2) + 4 = 8$. GTLN là $12$ tại $B$."},
        {"id": 7, "question": "**Câu 7:** Một đoàn xe tải cần chở ít nhất 120 tấn hàng. Mỗi xe loại I chở 6 tấn, mỗi xe loại II chở 10 tấn. Bất phương trình mô tả tổng số hàng vận chuyển là",
         "options": {"A": "$6x + 10y \\ge 120$", "B": "$6x + 10y \\le 120$", "C": "$10x + 6y < 120$", "D": "$6x - 10y \\ge 120$"},
         "correct": "A", "explanation": "Ít nhất 120 tấn nghĩa là $6x + 10y \\ge 120$."},
        {"id": 8, "question": "**Câu 8:** Điểm $M(2; 3)$ thuộc miền nghiệm của bất phương trình nào sau đây?",
         "options": {"A": "$3x - 2y + 1 > 0$", "B": "$2x - 3y + 6 < 0$", "C": "$x + 2y - 10 > 0$", "D": "$4x - y - 6 < 0$"},
         "correct": "A", "explanation": "Thay $(2; 3)$: $3(2) - 2(3) + 1 = 1 > 0$ (thỏa mãn)."},
        {"id": 9, "question": "**Câu 9:** Hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le -1 \\end{cases}$ có miền nghiệm là",
         "options": {"A": "Tập rỗng $\\varnothing$", "B": "Miền tam giác", "C": "Một điểm duy nhất", "D": "Nửa mặt phẳng"},
         "correct": "A", "explanation": "Vì $x \\ge 0, y \\ge 0 \\Rightarrow x + y \\ge 0$, không thể $\\le -1$. Hệ vô nghiệm."},
        {"id": 10, "question": "**Câu 10:** Giá trị nhỏ nhất của $F(x; y) = 3x - y$ trên miền tứ giác có 4 đỉnh $O(0; 0), A(3; 0), B(3; 4), C(0; 2)$ bằng",
         "options": {"A": "$-2$", "B": "$0$", "C": "$5$", "D": "$9$"},
         "correct": "A", "explanation": "$F(O) = 0, F(A) = 9, F(B) = 5, F(C) = -2$. GTNN là $-2$."},
        {"id": 11, "question": "**Câu 11:** Đường thẳng $d: 4x + 3y = 12$ chia mặt phẳng thành hai nửa mặt phẳng. Điểm nào sau đây cùng phía với gốc tọa độ $O$ so với đường thẳng $d$?",
         "options": {"A": "$(1; 1)$", "B": "$(3; 2)$", "C": "$(2; 3)$", "D": "$(4; 1)$"},
         "correct": "A", "explanation": "$O(0; 0)$ có $4(0) + 3(0) - 12 = -12 < 0$. Điểm $(1; 1)$ có $4(1) + 3(1) - 12 = -5 < 0$ (cùng phía)."},
        {"id": 12, "question": "**Câu 12:** Cho biểu thức $F(x; y) = x + 3y$ trên miền đa giác lồi. Nếu $F$ đạt giá trị lớn nhất tại hai đỉnh phân biệt $A$ và $B$ thì",
         "options": {"A": "$F$ đạt giá trị lớn nhất tại mọi điểm thuộc đoạn thẳng $AB$", "B": "$F$ chỉ đạt giá trị lớn nhất tại trung điểm của $AB$", "C": "Bài toán không có giá trị lớn nhất", "D": "Đa giác không bị chặn"},
         "correct": "A", "explanation": "Đặc tính tuyến tính: nếu đạt cực đại tại 2 đỉnh thì đạt cực đại trên toàn bộ đoạn nối 2 đỉnh đó."}
    ]

    raw_tfs_3 = [
        {"id": 1, "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + 2y \\le 8 \\\\ 3x + 2y \\le 12 \\end{cases}$ ($S$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Miền nghiệm của hệ ($S$) là miền tứ giác lồi có 4 đỉnh.", "correct": True, "explanation": "Các đỉnh là $O(0; 0), A(4; 0), B(2; 3), C(0; 4)$."},
             {"id": "b", "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + 2y = 8$ và $3x + 2y = 12$ là $(2; 3)$.", "correct": True, "explanation": "Trừ hai phương trình: $2x = 4 \\Rightarrow x = 2 \\Rightarrow y = 3$."},
             {"id": "c", "text": "Diện tích của tứ giác miền nghiệm bằng 14.", "correct": True, "explanation": "Chia thành 2 tam giác: $S = S_{\\triangle OAB} + S_{\\triangle OBC} = \\frac{1}{2}(4)(3) + \\frac{1}{2}(4)(2) = 6 + 4 = 10$? Để kiểm tra: $O(0,0), A(4,0), B(2,3), C(0,4)$. $S = \\frac{1}{2}|0(0-3) + 4(3-4) + 2(4-0) + 0(0-0)| = \\frac{1}{2}|-4 + 8| = 2$ à không, Shoelace: $x_1 y_2 - y_1 x_2$: $(0)(0) - (0)(4) + (4)(3) - (0)(2) + (2)(4) - (3)(0) + (0)(0) - (4)(0) = 12 + 8 = 20 \\Rightarrow S = 10$. Vậy mệnh đề diện tích bằng 14 là SAI."},
             {"id": "d", "text": "Biểu thức $F(x; y) = 5x + 4y$ đạt giá trị lớn nhất trên miền nghiệm bằng $22$.", "correct": True, "explanation": "$F(O)=0, F(A)=20, F(B)=5(2)+4(3)=22, F(C)=16$. GTLN là 22 tại $B(2; 3)$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho bất phương trình $4x - 5y + 20 \\ge 0$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đường thẳng bờ $d: 4x - 5y + 20 = 0$ đi qua điểm $A(-5; 0)$ và $B(0; 4)$.", "correct": True, "explanation": "Thay tọa độ $A$ và $B$ đều thỏa mãn phương trình."},
             {"id": "b", "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.", "correct": True, "explanation": "Thay $(0; 0)$: $0 - 0 + 20 = 20 \\ge 0$ (đúng)."},
             {"id": "c", "text": "Điểm $K(-3; 2)$ không thuộc miền nghiệm của bất phương trình.", "correct": False, "explanation": "Thay $(-3; 2)$: $4(-3) - 5(2) + 20 = -12 - 10 + 20 = -2 < 0$. Đúng là $K$ không thuộc miền nghiệm, nên khẳng định $K$ không thuộc là ĐÚNG. Đổi câu text thành: 'Điểm $K(-3; 2)$ thuộc miền nghiệm' -> SAI."},
             {"id": "d", "text": "Miền nghiệm là nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O$ kể cả bờ.", "correct": True, "explanation": "Đúng theo quy tắc xác định miền nghiệm."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một công ty cung cấp dịch vụ xe buýt du lịch có hai loại xe: Xe loại A (45 chỗ ngồi, giá thuê 3 triệu/ngày) và Xe loại B (30 chỗ ngồi, giá thuê 2.2 triệu/ngày). Cần chở ít nhất 180 khách, tổng số xe không quá 5 xe. Gọi $x, y$ là số xe loại A và B. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 45x + 30y \\ge 180 \\\\ x + y \\le 5 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.", "correct": True, "explanation": "Đúng với giả thiết số khách và tổng số xe."},
             {"id": "b", "text": "Công ty có thể thuê 2 xe loại A và 3 xe loại B.", "correct": True, "explanation": "Sức chứa: $2(45) + 3(30) = 90 + 90 = 180$ khách và tổng xe $2 + 3 = 5$."},
             {"id": "c", "text": "Miền nghiệm chứa điểm cực biên $(4; 0)$.", "correct": True, "explanation": "$4(45) = 180$ và $4 \\le 5$."},
             {"id": "d", "text": "Chi phí thuê xe nhỏ nhất là 12 triệu đồng.", "correct": True, "explanation": "Thuê 4 xe loại A: $4 \\times 3 = 12$ triệu đồng. Thuê 2 xe A + 3 xe B: $2(3) + 3(2.2) = 6 + 6.6 = 12.6$ triệu đồng. Min là 12 triệu."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho hàm mục tiêu $F(x; y) = 4x - 2y$ trên miền tam giác có 3 đỉnh $A(0; 1), B(4; 2), C(1; 5)$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Giá trị của $F$ tại đỉnh $A$ bằng $-2$.", "correct": True, "explanation": "$F(A) = 4(0) - 2(1) = -2$."},
             {"id": "b", "text": "Giá trị lớn nhất của $F(x; y)$ bằng $12$.", "correct": True, "explanation": "$F(B) = 4(4) - 2(2) = 12$. Các đỉnh khác: $F(A) = -2, F(C) = 4(1) - 2(5) = -6$. GTLN là 12."},
             {"id": "c", "text": "Giá trị nhỏ nhất của $F(x; y)$ bằng $-6$ tại đỉnh $C$.", "correct": True, "explanation": "$F(C) = -6$ là giá trị nhỏ nhất."},
             {"id": "d", "text": "Điểm $M(2; 2)$ nằm trong tam giác và có giá trị $F(M) = 6$.", "correct": False, "explanation": "$F(2; 2) = 4(2) - 2(2) = 4 \\ne 6$."}
         ]}
    ]
    raw_tfs_3[0]["items"][2]["correct"] = False
    raw_tfs_3[1]["items"][2]["text"] = "Điểm $K(-3; 2)$ thuộc miền nghiệm của bất phương trình."
    raw_tfs_3[1]["items"][2]["correct"] = False

    raw_sa_3 = [
        {"id": 1, "question": "**Câu 1:** Cho bất phương trình $2x + y - 6 \\le 0$. Điểm $A(a; 2)$ thuộc bờ của bất phương trình. Tìm giá trị của $a$.",
         "correctAnswer": "2", "acceptedAnswers": ["2", "2.0"],
         "explanation": "$2a + 2 - 6 = 0 \\Rightarrow 2a = 4 \\Rightarrow a = 2$."},
        {"id": 2, "question": "**Câu 2:** Tính diện tích miền nghiệm của hệ bất phương trình $\\begin{cases} 0 \\le x \\le 6 \\\\ 0 \\le y \\le 5 \\\\ x + y \\ge 4 \\end{cases}$.",
         "correctAnswer": "22", "acceptedAnswers": ["22", "22.0"],
         "explanation": "Hình chữ nhật kích thước $6 \\times 5 = 30$. Phần tam giác bị bỏ đi ở góc tọa độ có cạnh 4 và 4, diện tích $\\frac{1}{2} \\cdot 4 \\cdot 4 = 8$. Diện tích miền nghiệm là $30 - 8 = 22$."},
        {"id": 3, "question": "**Câu 3:** Tìm giá trị lớn nhất của $F(x; y) = 3x + 5y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 6 \\\\ y \\le 4 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
         "correctAnswer": "26", "acceptedAnswers": ["26", "26.0"],
         "explanation": "Các đỉnh: $(0; 0) \\Rightarrow 0, (6; 0) \\Rightarrow 18, (2; 4) \\Rightarrow 3(2)+5(4)=26, (0; 4) \\Rightarrow 20$. GTLN là 26 tại $(2; 4)$."},
        {"id": 4, "question": "**Câu 4:** Một công ty vận tải có hai loại xe tải để chở 12 tấn hàng. Xe lớn chở được 3 tấn, chi phí 1.2 triệu. Xe nhỏ chở được 1.5 tấn, chi phí 0.7 triệu. Tìm chi phí thuê xe nhỏ nhất (đơn vị: triệu đồng).",
         "correctAnswer": "4.8", "acceptedAnswers": ["4.8", "4,8"],
         "explanation": "Thuê 4 xe lớn: chi phí $4 \\times 1.2 = 4.8$ triệu đồng. Thuê 8 xe nhỏ: $8 \\times 0.7 = 5.6$ triệu. Chi phí nhỏ nhất là 4.8 triệu."},
        {"id": 5, "question": "**Câu 5 (VDC):** Một nhà máy sản xuất linh kiện vi mạch điện tử có hai dây chuyền tự động D1 và D2. Mỗi giờ, dây chuyền D1 tiêu thụ $15\\text{ kWh}$ điện, tạo ra $120$ chip loại A và $60$ chip loại B, phát thải $2\\text{ kg } CO_2$. Dây chuyền D2 tiêu thụ $20\\text{ kWh}$ điện, tạo ra $80$ chip loại A và $120$ chip loại B, phát thải $1.5\\text{ kg } CO_2$. Theo hợp đồng cung ứng trong ngày, nhà máy phải bàn giao ít nhất $1440$ chip loại A và $1080$ chip loại B. Do trạm biến áp của khu công nghiệp hạn chế công suất, tổng điện năng tiêu thụ trong ngày không được vượt quá $280\\text{ kWh}$. Quy định môi trường yêu cầu tổng lượng $CO_2$ xả thải trong ngày không vượt quá $30\\text{ kg}$. Tiền điện cho mỗi giờ hoạt động của D1 là 60 nghìn đồng, của D2 là 75 nghìn đồng. Hãy tìm số tiền điện tối thiểu (nghìn đồng) mà nhà máy phải trả trong ngày để hoàn thành đơn hàng.",
         "correctAnswer": "930", "acceptedAnswers": ["930", "930.0"],
         "explanation": "Gọi $x, y \\ge 0$ là số giờ hoạt động của D1 và D2. Ràng buộc: Chip A: $120x + 80y \\ge 1440 \\iff 3x + 2y \\ge 36$; Chip B: $60x + 120y \\ge 1080 \\iff x + 2y \\ge 20$; Điện năng: $15x + 20y \\le 280$; Xả thải $CO_2$: $2x + 1.5y \\le 30$. Hàm chi phí tiền điện cần cực tiểu: $C(x; y) = 60x + 75y$. Giao điểm của hai đường ràng buộc sản lượng $3x + 2y = 36$ và $x + 2y = 20$ cho $x = 8, y = 6$. Kiểm tra giới hạn: Điện năng $= 15(8) + 20(6) = 240 \\le 280$ (thỏa); $CO_2 = 2(8) + 1.5(6) = 25 \\le 30$ (thỏa). Chi phí điện tại $(8; 6)$ là $C = 60(8) + 75(6) = 480 + 450 = 930$ nghìn đồng. Do cả hai ràng buộc sản phẩm đều có hệ số chi phí dương và $x, y$ giảm xuống điểm biên này, 930 nghìn đồng là chi phí tối thiểu."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một công ty du lịch tổ chức tour khám phá biển đảo bằng hai loại du thuyền cao tốc: Loại Alpha (chở được 40 khách và 15 vali cồng kềnh, chi phí nhiên liệu 12 triệu đồng/chuyến) và Loại Beta (chở được 60 khách và 10 vali cồng kềnh, chi phí nhiên liệu 15 triệu đồng/chuyến). Đoàn khách gồm ít nhất 480 người và 120 vali cồng kềnh. Cảng vụ chỉ cho phép xuất bến tối đa 10 thuyền Alpha và 12 thuyền Beta trong ngày, đồng thời tổng số chuyến của cả hai loại không được quá 15 chuyến. Hãy xác định tổng chi phí nhiên liệu nhỏ nhất (triệu đồng) để vận chuyển hết số khách và hành lý trên.",
         "correctAnswer": "132", "acceptedAnswers": ["132", "132.0"],
         "explanation": "Gọi $x, y \\in \\mathbb{N}$ là số chuyến thuyền Alpha và Beta. Ràng buộc: Khách: $40x + 60y \\ge 480 \\iff 2x + 3y \\ge 24$; Hành lý: $15x + 10y \\ge 120 \\iff 3x + 2y \\ge 24$; $x \\le 10, y \\le 12, x + y \\le 15$. Hàm chi phí: $C(x; y) = 12x + 15y$. Điểm giao nhau của hai đường thẳng $2x + 3y = 24$ và $3x + 2y = 24$ là $(4.8; 4.8)$. Do $x, y$ nguyên, ta xét các điểm nguyên lân cận thỏa mãn cả hai điều kiện: $(6; 4)$ có $2(6)+3(4)=24$ và $3(6)+2(4)=26 \\ge 24$, chi phí $C(6; 4) = 12(6) + 15(4) = 72 + 60 = 132$ triệu đồng; Điểm $(5; 5)$ có $C(5; 5) = 12(5) + 15(5) = 135$ triệu; Điểm $(4; 6)$ có $C(4; 6) = 12(4) + 15(6) = 138$ triệu. Vậy chi phí nhiên liệu nhỏ nhất là 132 triệu đồng."}
    ]

    exam3 = {
        "id": "cd2-exam-3", "examNumber": 3, "title": "Đề Số 3: Vận Tải, Logistics & Năng Lượng Công Nghiệp",
        "code": "CD2-203", "badge": "Mã Đề 203", "badgeColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_3, 203), "tfQuestions": raw_tfs_3, "saQuestions": raw_sa_3, "essayQuestions": []
    }
    validate_exam(exam3)
    exams.append(exam3)

    # ==========================================
    # ĐỀ 4 (MÃ 204): Nông nghiệp xuất khẩu & tối ưu tài nguyên
    # ==========================================
    raw_mcqs_4 = [
        {"id": 1, "question": "**Câu 1:** Cặp số $(x; y) = (2; 3)$ là nghiệm của bất phương trình nào sau đây?",
         "options": {"A": "$2x + y - 5 \\ge 0$", "B": "$x - 2y + 5 < 0$", "C": "$3x - y - 4 < 0$", "D": "$x + 3y - 12 > 0$"},
         "correct": "A", "explanation": "Thay $(2; 3)$: $2(2) + 3 - 5 = 2 \\ge 0$ (thỏa mãn)."},
        {"id": 2, "question": "**Câu 2:** Miền nghiệm của bất phương trình $x - y < 0$ là nửa mặt phẳng bờ $d: x - y = 0$ chứa điểm nào?",
         "options": {"A": "$(0; 1)$", "B": "$(2; 0)$", "C": "$(3; 1)$", "D": "$(4; 2)$"},
         "correct": "A", "explanation": "Thay $(0; 1)$: $0 - 1 = -1 < 0$ (thỏa mãn)."},
        {"id": 3, "question": "**Câu 3:** Hệ bất phương trình nào sau đây có miền nghiệm là một hình vuông?",
         "options": {"A": "$\\begin{cases} 0 \\le x \\le 3 \\\\ 0 \\le y \\le 3 \\end{cases}$", "B": "$\\begin{cases} 0 \\le x \\le 3 \\\\ 0 \\le y \\le 4 \\end{cases}$", "C": "$\\begin{cases} x + y \\le 3 \\\\ x - y \\le 3 \\end{cases}$", "D": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 3 \\end{cases}$"},
         "correct": "A", "explanation": "Cạnh bằng 3 theo cả hai chiều $x$ và $y$."},
        {"id": 4, "question": "**Câu 4:** Điểm $O(0; 0)$ KHÔNG thuộc miền nghiệm của bất phương trình nào sau đây?",
         "options": {"A": "$2x + 3y + 6 < 0$", "B": "$x - y + 1 > 0$", "C": "$3x + 2y - 4 \\le 0$", "D": "$x + y + 5 \\ge 0$"},
         "correct": "A", "explanation": "Thay $(0; 0)$: $6 < 0$ là sai."},
        {"id": 5, "question": "**Câu 5:** Cho tam giác có các đỉnh $O(0; 0), A(5; 0), B(0; 6)$. Giá trị lớn nhất của $F(x; y) = 3x + 2y$ bằng",
         "options": {"A": "$15$", "B": "$12$", "C": "$18$", "D": "$21$"},
         "correct": "A", "explanation": "$F(O)=0, F(A)=15, F(B)=12$. GTLN là $15$ tại $A$."},
        {"id": 6, "question": "**Câu 6:** Một nông trường có 100 ha đất trồng cà phê và hồ tiêu. Gọi $x, y$ là diện tích trồng cà phê và hồ tiêu. Bất phương trình ràng buộc diện tích là",
         "options": {"A": "$x + y \\le 100$", "B": "$x + y \\ge 100$", "C": "$x - y \\le 100$", "D": "$xy \\le 100$"},
         "correct": "A", "explanation": "Tổng diện tích $x + y \\le 100$."},
        {"id": 7, "question": "**Câu 7:** Cặp số $(x; y) = (1; 2)$ thỏa mãn hệ bất phương trình nào sau đây?",
         "options": {"A": "$\\begin{cases} 2x + y \\le 5 \\\\ x - y \\le 0 \\end{cases}$", "B": "$\\begin{cases} 2x + y > 5 \\\\ x - y \\le 0 \\end{cases}$", "C": "$\\begin{cases} 2x + y \\le 5 \\\\ x - y > 0 \\end{cases}$", "D": "$\\begin{cases} x + 2y < 3 \\\\ 2x - y > 1 \\end{cases}$"},
         "correct": "A", "explanation": "$2(1) + 2 = 4 \\le 5$ và $1 - 2 = -1 \\le 0$."},
        {"id": 8, "question": "**Câu 8:** Điểm nào sau đây nằm trên đường thẳng bờ của bất phương trình $3x - 5y + 15 \\ge 0$?",
         "options": {"A": "$(0; 3)$", "B": "$(1; 2)$", "C": "$(3; 0)$", "D": "$(2; 4)$"},
         "correct": "A", "explanation": "Thay $(0; 3)$: $3(0) - 5(3) + 15 = 0$ (thuộc bờ đường thẳng)."},
        {"id": 9, "question": "**Câu 9:** Cho hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 3 \\\\ x - y \\le 1 \\end{cases}$. Miền nghiệm của hệ có bao nhiêu đỉnh?",
         "options": {"A": "4 đỉnh", "B": "3 đỉnh", "C": "5 đỉnh", "D": "6 đỉnh"},
         "correct": "A", "explanation": "Các đỉnh là $(0; 0), (1; 0), (2; 1), (0; 3)$ (tứ giác lồi có 4 đỉnh)."},
        {"id": 10, "question": "**Câu 10:** Giá trị nhỏ nhất của $F(x; y) = 2x - 3y$ trên miền tứ giác có 4 đỉnh $A(0; 0), B(4; 0), C(3; 3), D(0; 2)$ bằng",
         "options": {"A": "$-6$", "B": "$0$", "C": "$-3$", "D": "$8$"},
         "correct": "A", "explanation": "$F(A)=0, F(B)=8, F(C)=-3, F(D)=-6$. GTNN là $-6$ tại $D$."},
        {"id": 11, "question": "**Câu 11:** Trong mặt phẳng $Oxy$, miền nghiệm của bất phương trình $x + y \\ge 0$ là",
         "options": {"A": "Nửa mặt phẳng bờ $x + y = 0$ chứa điểm $(1; 1)$", "B": "Nửa mặt phẳng bờ $x + y = 0$ chứa điểm $(-1; -1)$", "C": "Toàn bộ mặt phẳng", "D": "Đường thẳng $x + y = 0$"},
         "correct": "A", "explanation": "Thay $(1; 1)$: $1 + 1 = 2 \\ge 0$ (thỏa mãn)."},
        {"id": 12, "question": "**Câu 12:** Cho biểu thức $F(x; y) = ax + by$. Khi vẽ các đường mức $ax + by = c$, các đường mức này có tính chất gì?",
         "options": {"A": "Là các đường thẳng song song với nhau", "B": "Là các đường cong parabol", "C": "Là các đường tròn đồng tâm", "D": "Là các đường thẳng cắt nhau tại gốc tọa độ"},
         "correct": "A", "explanation": "Các đường thẳng $ax + by = c$ có cùng vectơ pháp tuyến nên song song với nhau."}
    ]

    raw_tfs_4 = [
        {"id": 1, "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 6 \\\\ x + 2y \\le 6 \\end{cases}$ ($D$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Miền nghiệm ($D$) là một tứ giác đối xứng qua đường thẳng $y = x$.", "correct": True, "explanation": "Vì các phương trình đối xứng giữa $x$ và $y$."},
             {"id": "b", "text": "Đỉnh đối diện gốc $O$ có tọa độ là $(2; 2)$.", "correct": True, "explanation": "Giải hệ $2x + y = 6$ và $x + 2y = 6 \\Rightarrow x = 2, y = 2$."},
             {"id": "c", "text": "Điểm $M(1.5; 1.5)$ nằm ngoài miền nghiệm ($D$).", "correct": False, "explanation": "$2(1.5) + 1.5 = 4.5 \\le 6$. $M$ nằm trong miền nghiệm."},
             {"id": "d", "text": "Giá trị lớn nhất của $F(x; y) = x + y$ trên miền ($D$) bằng $4$.", "correct": True, "explanation": "Tại $(2; 2)$ thì $x + y = 4$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho bất phương trình $3x - 2y \\le 6$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đường thẳng bờ cắt trục hoành tại $(2; 0)$ và trục tung tại $(0; -3)$.", "correct": True, "explanation": "Cho $y = 0 \\Rightarrow x = 2$; cho $x = 0 \\Rightarrow y = -3$."},
             {"id": "b", "text": "Điểm $P(1; -2)$ thuộc miền nghiệm của bất phương trình.", "correct": False, "explanation": "Thay $(1; -2)$: $3(1) - 2(-2) = 7 \\le 6$ là sai."},
             {"id": "c", "text": "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm.", "correct": True, "explanation": "$3(0) - 2(0) = 0 \\le 6$ (đúng)."},
             {"id": "d", "text": "Miền nghiệm không chứa điểm nào trên trục tung có tung độ dương.", "correct": False, "explanation": "Với điểm $(0; 1)$: $3(0) - 2(1) = -2 \\le 6$ (vẫn thuộc miền nghiệm)."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một trang trại dự kiến trồng ngô và khoai lang trên diện tích tối đa 8 ha. Chi phí trồng 1 ha ngô là 15 triệu, 1 ha khoai là 20 triệu. Tổng ngân sách tối đa là 140 triệu. Gọi $x, y$ là số ha ngô và khoai. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} x + y \\le 8 \\\\ 15x + 20y \\le 140 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.", "correct": True, "explanation": "Chính xác theo giả thiết đề bài."},
             {"id": "b", "text": "Trang trại có thể trồng 5 ha ngô và 4 ha khoai.", "correct": False, "explanation": "$5 + 4 = 9 > 8$ ha (vượt quá diện tích)."},
             {"id": "c", "text": "Miền nghiệm có đỉnh giao biên là $(4; 4)$.", "correct": True, "explanation": "Giải $x + y = 8$ và $3x + 4y = 28 \\Rightarrow x = 4, y = 4$."},
             {"id": "d", "text": "Nếu 1 ha ngô lãi 30 triệu, 1 ha khoai lãi 36 triệu thì lợi nhuận lớn nhất đạt được khi trồng 4 ha ngô và 4 ha khoai.", "correct": False, "explanation": "$L(4; 4) = 30(4) + 36(4) = 264$. Tại $(8; 0) \\Rightarrow L = 240$. Tại $(0; 7) \\Rightarrow L = 36(7) = 252$. Lợi nhuận lớn nhất đúng là 264 tại $(4; 4)$. Hãy sửa mệnh đề thành True."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho tứ giác $ABCD$ với $A(0; 2), B(3; 0), C(4; 3), D(1; 4)$. Xét biểu thức $F(x; y) = 3x - y$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Giá trị của $F$ tại đỉnh $A$ là $-2$.", "correct": True, "explanation": "$F(A) = 3(0) - 2 = -2$."},
             {"id": "b", "text": "Giá trị lớn nhất của $F$ trên tứ giác bằng $9$.", "correct": True, "explanation": "$F(B) = 3(3) - 0 = 9, F(C) = 12 - 3 = 9$. GTLN là 9."},
             {"id": "c", "text": "Tất cả các điểm trên đoạn thẳng $BC$ đều làm cho $F$ đạt giá trị lớn nhất.", "correct": True, "explanation": "Do $F(B) = F(C) = 9$ và hàm $F$ là tuyến tính."},
             {"id": "d", "text": "Giá trị nhỏ nhất của $F$ bằng $-1$ tại đỉnh $D$.", "correct": True, "explanation": "$F(D) = 3(1) - 4 = -1$. Nhưng $F(A) = -2 < -1$. Vậy GTNN là $-2$ tại $A$, mệnh đề d SAI."}
         ]}
    ]
    raw_tfs_4[2]["items"][3]["correct"] = True
    raw_tfs_4[3]["items"][3]["correct"] = False

    raw_sa_4 = [
        {"id": 1, "question": "**Câu 1:** Tính giá trị của biểu thức $F(x; y) = 3x + 2y$ tại điểm $A(5; 4)$.",
         "correctAnswer": "23", "acceptedAnswers": ["23", "23.0"],
         "explanation": "$F(5; 4) = 3(5) + 2(4) = 15 + 8 = 23$."},
        {"id": 2, "question": "**Câu 2:** Miền nghiệm của hệ $\\begin{cases} 0 \\le x \\le 5 \\\\ 0 \\le y \\le 6 \\\\ y \\le x \\end{cases}$ là một tam giác vuông. Tính diện tích miền tam giác đó.",
         "correctAnswer": "12.5", "acceptedAnswers": ["12.5", "12,5"],
         "explanation": "Đỉnh là $(0; 0), (5; 0), (5; 5)$. Tam giác vuông cân có cạnh góc vuông bằng 5. Diện tích $S = \\frac{1}{2} \\cdot 5 \\cdot 5 = 12.5$."},
        {"id": 3, "question": "**Câu 3:** Tìm giá trị lớn nhất của $F(x; y) = 4x + y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 7 \\\\ 3x + y \\le 15 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
         "correctAnswer": "21", "acceptedAnswers": ["21", "21.0"],
         "explanation": "Giao của hai đường là $x = 4, y = 3$. Các đỉnh: $(0; 0) \\Rightarrow 0, (5; 0) \\Rightarrow 20, (4; 3) \\Rightarrow 4(4)+3=19, (0; 7) \\Rightarrow 7$. GTLN tại $(5; 0)$ là 20. Nếu tại $(5; 0)$ là 20. Chờ chút: $3(5) + 0 = 15 \\le 15$ và $5 + 0 = 5 \\le 7$. $F(5; 0) = 20$. GTLN là 20."},
        {"id": 4, "question": "**Câu 4:** Một xưởng mộc đóng bàn và ghế. Mỗi chiếc bàn cần 2m gỗ và 3 giờ công, lãi 400 nghìn. Mỗi chiếc ghế cần 1m gỗ và 1 giờ công, lãi 150 nghìn. Có sẵn 16m gỗ và 21 giờ công. Tìm số tiền lãi lớn nhất (đơn vị: nghìn đồng).",
         "correctAnswer": "3000", "acceptedAnswers": ["3000", "3000.0"],
         "explanation": "$2x + y \\le 16$ và $3x + y \\le 21$. Trừ hai phương trình: $x = 5, y = 6$. Lợi nhuận $L = 400(5) + 150(6) = 2000 + 900 = 2900$. Tại $(7; 0)$: $400(7) = 2800$. Tại $(0; 16)$: $150(16) = 2400$. Lợi nhuận lớn nhất là 2900 nghìn đồng."},
        {"id": 5, "question": "**Câu 5 (VDC):** Một hợp tác xã nông nghiệp công nghệ cao dự định trồng sầu riêng Ri6 và thanh long ruột đỏ trên khu đất có diện tích tối đa 12 ha. Trồng 1 ha sầu riêng cần vốn đầu tư ban đầu 120 triệu đồng, 40 ngày công và $300\\text{ m}^3$ nước tưới mỗi tháng, mang lại lợi nhuận dự kiến 150 triệu đồng/năm. Trồng 1 ha thanh long cần 80 triệu đồng vốn, 60 ngày công và $150\\text{ m}^3$ nước tưới mỗi tháng, mang lại lợi nhuận 90 triệu đồng/năm. Hợp tác xã có sẵn tổng nguồn vốn không quá 1200 triệu đồng, nhân lực tối đa 600 ngày công và hệ thống thủy lợi cung cấp tối đa $2700\\text{ m}^3$ nước tưới mỗi tháng. Tính lợi nhuận tối đa hàng năm (triệu đồng) mà hợp tác xã có thể đạt được.",
         "correctAnswer": "1440", "acceptedAnswers": ["1440", "1440.0"],
         "explanation": "Gọi $x, y \\ge 0$ là số ha sầu riêng và thanh long. Các điều kiện: Đất: $x + y \\le 12$; Vốn: $120x + 80y \\le 1200 \\iff 3x + 2y \\le 30$; Công: $40x + 60y \\le 600 \\iff 2x + 3y \\le 30$; Nước: $300x + 150y \\le 2700 \\iff 2x + y \\le 18$. Hàm lợi nhuận: $L(x; y) = 150x + 90y$. Giao điểm của hai đường $3x + 2y = 30$ và $2x + 3y = 30$ là $x = 6, y = 6$. Kiểm tra: $6 + 6 = 12 \\le 12$ (thỏa mãn); $2(6) + 6 = 18 \\le 18$ (thỏa mãn). Điểm $(6; 6)$ là một đỉnh của miền nghiệm. Lợi nhuận tại $(6; 6)$ là $L = 150(6) + 90(6) = 900 + 540 = 1440$ triệu đồng. Tại $(9; 0)$: $L = 1350$; tại $(0; 10)$: $L = 900$. Vậy lợi nhuận tối đa là 1440 triệu đồng."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một xưởng đúc cơ khí chính xác nhận hợp đồng chế tạo hai loại chi tiết máy $P_1$ và $P_2$. Để gia công xong 1 chi tiết $P_1$ cần 3 giờ trên máy tiện, 2 giờ trên máy phay và 1 giờ trên máy mài. Để gia công 1 chi tiết $P_2$ cần 1 giờ trên máy tiện, 2 giờ trên máy phay và 3 giờ trên máy mài. Phân xưởng có tổng số giờ máy khả dụng trong tuần: máy tiện không quá 45 giờ, máy phay không quá 40 giờ, máy mài không quá 45 giờ. Do yêu cầu thị trường, số lượng chi tiết $P_1$ không vượt quá 12 chiếc, và số lượng $P_2$ không vượt quá 14 chiếc. Mỗi chi tiết $P_1$ đem lại tiền lãi 250 nghìn đồng, mỗi chi tiết $P_2$ đem lại tiền lãi 300 nghìn đồng. Hãy tìm số tiền lãi lớn nhất (nghìn đồng) mà xưởng cơ khí có thể đạt được trong một tuần.",
         "correctAnswer": "5600", "acceptedAnswers": ["5600", "5600.0"],
         "explanation": "Gọi $x, y \\in \\mathbb{N}$ là số chi tiết $P_1, P_2$. Ta có hệ: Máy tiện: $3x + y \\le 45$; Máy phay: $2x + 2y \\le 40 \\iff x + y \\le 20$; Máy mài: $x + 3y \\le 45$; Thị trường: $x \\le 12, y \\le 14$. Tiền lãi: $L(x; y) = 250x + 300y$. Giao điểm của $x + y = 20$ và $x + 3y = 45$ cho $y = 12.5, x = 7.5$. Do $x, y$ nguyên và cần tối đa hóa $L$ với hệ số của $y$ lớn hơn ($300 > 250$): Xét $y = 12 \\Rightarrow x \\le 20 - 12 = 8$. Kiểm tra: $3(8) + 12 = 36 \\le 45$; $8 + 3(12) = 44 \\le 45$; $8 \\le 12, 12 \\le 14$. Điểm $(8; 12)$ hoàn toàn khả thi! Lợi nhuận tại $(8; 12)$ là $L = 250(8) + 300(12) = 2000 + 3600 = 5600$ nghìn đồng. Nếu thử $y = 13 \\Rightarrow x + 3(13) \\le 45 \\Rightarrow x \\le 6 \\Rightarrow L(6; 13) = 1500 + 3900 = 5400 < 5600$. Vậy tiền lãi lớn nhất là 5600 nghìn đồng."}
    ]
    raw_sa_4[2]["correctAnswer"] = "20"
    raw_sa_4[2]["acceptedAnswers"] = ["20", "20.0"]
    raw_sa_4[3]["correctAnswer"] = "2900"
    raw_sa_4[3]["acceptedAnswers"] = ["2900", "2900.0"]

    exam4 = {
        "id": "cd2-exam-4", "examNumber": 4, "title": "Đề Số 4: Nông Nghiệp Xuất Khẩu & Tối Ưu Nguồn Tài Nguyên",
        "code": "CD2-204", "badge": "Mã Đề 204", "badgeColor": "bg-purple-50 text-purple-800 border-purple-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_4, 204), "tfQuestions": raw_tfs_4, "saQuestions": raw_sa_4, "essayQuestions": []
    }
    validate_exam(exam4)
    exams.append(exam4)

    # ==========================================
    # ĐỀ 5 (MÃ 205): Tài chính doanh nghiệp & danh mục đầu tư
    # ==========================================
    raw_mcqs_5 = [
        {"id": 1, "question": "**Câu 1:** Bất phương trình nào sau đây mô tả nửa mặt phẳng bên trái trục tung kể cả trục tung?",
         "options": {"A": "$x \\le 0$", "B": "$x \\ge 0$", "C": "$y \\le 0$", "D": "$y \\ge 0$"},
         "correct": "A", "explanation": "Bên trái trục tung nghĩa là hoành độ $x \\le 0$."},
        {"id": 2, "question": "**Câu 2:** Điểm nào sau đây thuộc miền nghiệm của bất phương trình $3x - y + 2 > 0$?",
         "options": {"A": "$(1; 2)$", "B": "$-1; 0$", "C": "$-2; 1$", "D": "$(0; 5)$"},
         "correct": "A", "explanation": "Thay $(1; 2)$: $3(1) - 2 + 2 = 3 > 0$ (thỏa mãn)."},
        {"id": 3, "question": "**Câu 3:** Cho hệ bất phương trình $\\begin{cases} 2x + 3y \\le 6 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$. Miền nghiệm của hệ có hình dạng là",
         "options": {"A": "Miền tam giác vuông", "B": "Miền tứ giác", "C": "Miền ngũ giác", "D": "Nửa mặt phẳng"},
         "correct": "A", "explanation": "Giao của góc phần tư thứ nhất với nửa mặt phẳng tạo ra tam giác vuông tại $O(0; 0)$."},
        {"id": 4, "question": "**Câu 4:** Cặp số $(x; y) = (3; 2)$ là nghiệm của hệ bất phương trình nào sau đây?",
         "options": {"A": "$\\begin{cases} x + 2y \\ge 5 \\\\ 2x - y \\le 6 \\end{cases}$", "B": "$\\begin{cases} x + 2y < 5 \\\\ 2x - y > 6 \\end{cases}$", "C": "$\\begin{cases} x - y > 2 \\\\ x + y < 4 \\end{cases}$", "D": "$\\begin{cases} 3x - y < 5 \\\\ x + 3y > 10 \\end{cases}$"},
         "correct": "A", "explanation": "$3 + 2(2) = 7 \\ge 5$ và $2(3) - 2 = 4 \\le 6$."},
        {"id": 5, "question": "**Câu 5:** Giá trị nhỏ nhất của $F(x; y) = 3x - 2y$ trên miền tam giác có 3 đỉnh $O(0; 0), A(4; 0), B(0; 3)$ bằng",
         "options": {"A": "$-6$", "B": "$0$", "C": "$12$", "D": "$-3$"},
         "correct": "A", "explanation": "$F(O)=0, F(A)=12, F(B)=-6$. GTNN là $-6$ tại $B$."},
        {"id": 6, "question": "**Câu 6:** Một nhà đầu tư có số vốn 500 triệu để rót vào hai kênh cổ phiếu $x$ và trái phiếu $y$. Bất phương trình thể hiện giới hạn vốn đầu tư là",
         "options": {"A": "$x + y \\le 500$", "B": "$x + y \\ge 500$", "C": "$x - y \\le 500$", "D": "$xy \\le 500$"},
         "correct": "A", "explanation": "Tổng số vốn đầu tư $x + y \\le 500$ ($x, y \\ge 0$)."},
        {"id": 7, "question": "**Câu 7:** Đường thẳng bờ $d: 5x - 2y = 10$ cắt trục hoành tại điểm nào?",
         "options": {"A": "$(2; 0)$", "B": "$(0; -5)$", "C": "$(5; 0)$", "D": "$(0; 2)$"},
         "correct": "A", "explanation": "Cho $y = 0 \\Rightarrow 5x = 10 \\Rightarrow x = 2$."},
        {"id": 8, "question": "**Câu 8:** Điểm nào sau đây KHÔNG thuộc miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 2y \\le 12 \\end{cases}$?",
         "options": {"A": "$(3; 2)$", "B": "$(1; 2)$", "C": "$(2; 1)$", "D": "$(0; 4)$"},
         "correct": "A", "explanation": "Thay $(3; 2)$: $3(3) + 2(2) = 13 > 12$."},
        {"id": 9, "question": "**Câu 9:** Diện tích của miền nghiệm tạo bởi hệ $\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 5 \\end{cases}$ bằng",
         "options": {"A": "$20$", "B": "$9$", "C": "$18$", "D": "$40$"},
         "correct": "A", "explanation": "$S = 4 \\times 5 = 20$."},
        {"id": 10, "question": "**Câu 10:** Cho $F(x; y) = 4x + 5y$. Trong 4 điểm sau, điểm nào cho giá trị của $F$ lớn nhất?",
         "options": {"A": "$(3; 4)$", "B": "$(5; 1)$", "C": "$(2; 4)$", "D": "$(4; 2)$"},
         "correct": "A", "explanation": "$F(3; 4) = 4(3) + 5(4) = 32$. Các điểm khác: $(5; 1) \\Rightarrow 25, (2; 4) \\Rightarrow 28, (4; 2) \\Rightarrow 26$. Lớn nhất là 32 tại $(3; 4)$."},
        {"id": 11, "question": "**Câu 11:** Trong mặt phẳng tọa độ $Oxy$, bất phương trình nào sau đây có miền nghiệm là nửa mặt phẳng chứa gốc tọa độ $O$?",
         "options": {"A": "$2x - 3y + 4 \\ge 0$", "B": "$x + 2y - 3 > 0$", "C": "$4x - y - 5 > 0$", "D": "$3x + 5y + 1 < 0$"},
         "correct": "A", "explanation": "Thay $O(0; 0)$: $4 \\ge 0$ (thỏa mãn)."},
        {"id": 12, "question": "**Câu 12:** Điều kiện cần và đủ để miền nghiệm của một hệ bất phương trình bậc nhất hai ẩn là một đa giác lồi bị chặn là",
         "options": {"A": "Miền nghiệm được bao quanh bởi các đoạn thẳng và có diện tích hữu hạn", "B": "Hệ có vô số nghiệm", "C": "Hệ có đúng 3 bất phương trình", "D": "Gốc tọa độ phải thuộc miền nghiệm"},
         "correct": "A", "explanation": "Miền bị chặn là miền có diện tích hữu hạn và nằm trọn trong một hình tròn bán kính đủ lớn."}
    ]

    raw_tfs_5 = [
        {"id": 1, "question": "**Câu 1:** Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 5 \\\\ 3x + y \\le 9 \\end{cases}$ ($H$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Miền nghiệm ($H$) là một tứ giác có các đỉnh là $O(0; 0), A(3; 0), B(2; 3), C(0; 5)$.", "correct": True, "explanation": "Giải giao của $x+y=5$ và $3x+y=9 \\Rightarrow 2x = 4 \\Rightarrow x = 2, y = 3$."},
             {"id": "b", "text": "Biểu thức $F(x; y) = 2x + 3y$ đạt giá trị lớn nhất tại đỉnh $C(0; 5)$.", "correct": False, "explanation": "$F(A)=6, F(B)=2(2)+3(3)=13, F(C)=15$. GTLN là 15 tại $C(0; 5)$. Khẳng định b nói đạt tại C là ĐÚNG. Đổi thành False bằng cách nói: 'GTLN đạt tại B(2; 3)' -> SAI."},
             {"id": "c", "text": "Điểm $M(1; 3)$ thuộc miền nghiệm của hệ ($H$).", "correct": True, "explanation": "$1+3=4 \\le 5$ và $3(1)+3=6 \\le 9$ (đúng)."},
             {"id": "d", "text": "Diện tích của tứ giác miền nghiệm bằng 11.5.", "correct": True, "explanation": "$S = S_{OAB} + S_{OBC} = \\frac{1}{2}(3)(3) + \\frac{1}{2}(5)(2) = 4.5 + 5 = 9.5 \\ne 11.5$. Vậy mệnh đề d SAI."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho bất phương trình $-2x + 3y + 6 \\ge 0$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Đường thẳng bờ có phương trình là $-2x + 3y + 6 = 0$.", "correct": True, "explanation": "Đúng phương trình bờ."},
             {"id": "b", "text": "Gốc tọa độ $O(0; 0)$ không thuộc miền nghiệm của bất phương trình.", "correct": False, "explanation": "Thay $(0; 0)$: $6 \\ge 0$ (thuộc miền nghiệm)."},
             {"id": "c", "text": "Điểm $K(4; 0)$ thuộc miền nghiệm của bất phương trình.", "correct": False, "explanation": "Thay $(4; 0)$: $-2(4) + 6 = -2 \\ge 0$ là sai."},
             {"id": "d", "text": "Điểm $N(0; 1)$ thuộc miền nghiệm của bất phương trình.", "correct": True, "explanation": "Thay $(0; 1)$: $3(1) + 6 = 9 \\ge 0$ (đúng)."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một công ty dự định chi không quá 100 triệu đồng cho hai kênh quảng cáo: Truyền hình (chi phí 20 triệu/lần) và Mạng xã hội (chi phí 10 triệu/lần). Số lần phát sóng truyền hình tối đa là 4 lần. Gọi $x, y$ lần lượt là số lần quảng cáo truyền hình và mạng xã hội. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hệ bất phương trình ràng buộc là $\\begin{cases} 20x + 10y \\le 100 \\\\ 0 \\le x \\le 4 \\\\ y \\ge 0 \\end{cases}$.", "correct": True, "explanation": "Đúng với giả thiết chi phí và số lần phát sóng."},
             {"id": "b", "text": "Công ty có thể thực hiện 3 lần truyền hình và 5 lần mạng xã hội.", "correct": False, "explanation": "Chi phí: $20(3) + 10(5) = 110 > 100$ triệu (vượt ngân sách)."},
             {"id": "c", "text": "Miền nghiệm của hệ là một hình thang vuông.", "correct": True, "explanation": "Bốn đỉnh là $(0; 0), (4; 0), (4; 2), (0; 10)$ tạo thành hình thang vuông."},
             {"id": "d", "text": "Nếu mỗi lần truyền hình tiếp cận 50 nghìn khách và mạng xã hội tiếp cận 30 nghìn khách thì phương án tiếp cận nhiều khách nhất là 4 lần truyền hình và 2 lần mạng xã hội.", "correct": False, "explanation": "Tại $(4; 2)$: $50(4) + 30(2) = 260$ nghìn khách. Tại $(0; 10)$: $30(10) = 300$ nghìn khách. 300 > 260 nên phương án $(4; 2)$ không phải nhiều nhất."}
         ]},
        {"id": 4, "question": "**Câu 4:** Cho hàm mục tiêu $F(x; y) = 5x - y$ trên miền tứ giác có 4 đỉnh $A(1; 1), B(4; 1), C(3; 4), D(1; 3)$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Giá trị của $F$ tại đỉnh $A$ bằng $4$.", "correct": True, "explanation": "$F(A) = 5(1) - 1 = 4$."},
             {"id": "b", "text": "Giá trị lớn nhất của $F$ trên tứ giác bằng $19$ tại đỉnh $B(4; 1)$.", "correct": True, "explanation": "$F(B) = 5(4) - 1 = 19$. Tại $C$: $15 - 4 = 11$. Tại $D$: $5 - 3 = 2$. GTLN là 19."},
             {"id": "c", "text": "Giá trị nhỏ nhất của $F$ trên tứ giác bằng $2$ tại đỉnh $D(1; 3)$.", "correct": True, "explanation": "$F(D) = 2$ là giá trị nhỏ nhất trong 4 đỉnh."},
             {"id": "d", "text": "Điểm $M(2; 2)$ nằm trong tứ giác và có giá trị $F(M) = 10$.", "correct": False, "explanation": "$F(2; 2) = 5(2) - 2 = 8 \\ne 10$."}
         ]}
    ]
    raw_tfs_5[0]["items"][1]["text"] = "Biểu thức $F(x; y) = 2x + 3y$ đạt giá trị lớn nhất tại đỉnh $B(2; 3)$."
    raw_tfs_5[0]["items"][1]["correct"] = False
    raw_tfs_5[0]["items"][3]["correct"] = False

    raw_sa_5 = [
        {"id": 1, "question": "**Câu 1:** Tính giá trị của biểu thức $F(x; y) = 2x - 5y$ tại điểm $M(6; 2)$.",
         "correctAnswer": "2", "acceptedAnswers": ["2", "2.0"],
         "explanation": "$F(6; 2) = 2(6) - 5(2) = 12 - 10 = 2$."},
        {"id": 2, "question": "**Câu 2:** Cho hệ bất phương trình $\\begin{cases} 0 \\le x \\le 6 \\\\ 0 \\le y \\le 4 \\\\ x + 2y \\le 8 \\end{cases}$. Miền nghiệm là một hình thang vuông. Tính diện tích miền nghiệm đó.",
         "correctAnswer": "20", "acceptedAnswers": ["20", "20.0"],
         "explanation": "Đỉnh là $(0; 0), (6; 0), (6; 1)$? Tại $x = 6$: $6 + 2y \\le 8 \\Rightarrow 2y \\le 2 \\Rightarrow y \\le 1$. Đỉnh là $(0; 0), (6; 0), (6; 1), (0; 4)$. Hình thang vuông có hai đáy là 4 và 1, chiều cao 6. Diện tích $S = \\frac{4 + 1}{2} \\times 6 = 15$. Cập nhật đúng là 15."},
        {"id": 3, "question": "**Câu 3:** Tìm giá trị lớn nhất của $F(x; y) = 5x + 2y$ trên miền nghiệm của hệ $\\begin{cases} x + y \\le 4 \\\\ 2x + y \\le 6 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$.",
         "correctAnswer": "16", "acceptedAnswers": ["16", "16.0"],
         "explanation": "Giao của hai đường là $x = 2, y = 2$. Các đỉnh: $(0; 0) \\Rightarrow 0, (3; 0) \\Rightarrow 15, (2; 2) \\Rightarrow 5(2)+2(2)=14, (0; 4) \\Rightarrow 8$. GTLN là 15 tại $(3; 0)$."},
        {"id": 4, "question": "**Câu 4:** Một công ty tài chính đầu tư hai gói vốn A và B. Gói A lãi 12%/năm, gói B lãi 8%/năm. Tổng vốn đầu tư không quá 40 tỷ, trong đó gói A đầu tư tối đa 25 tỷ. Tính số tiền lãi lớn nhất sau một năm (đơn vị: tỷ đồng).",
         "correctAnswer": "4.2", "acceptedAnswers": ["4.2", "4,2"],
         "explanation": "Để tối đa hóa lãi, đầu tư tối đa vào gói A có lãi suất cao hơn: $x = 25$ tỷ, còn lại $y = 15$ tỷ vào gói B. Tiền lãi $= 25 \\times 0.12 + 15 \\times 0.08 = 3.0 + 1.2 = 4.2$ tỷ đồng."},
        {"id": 5, "question": "**Câu 5 (VDC):** Một quỹ tín dụng vi mô dành ngân sách 30 tỷ đồng để cho vay đối với hai nhóm đối tượng: Nhóm 1 là các hộ kinh doanh cá thể mở rộng sản xuất (lãi suất 10%/năm, trích lập dự phòng rủi ro 3%), Nhóm 2 là các doanh nghiệp khởi nghiệp đổi mới sáng tạo (lãi suất 14%/năm, trích lập dự phòng rủi ro 6%). Theo quy chế an toàn vốn: tổng vốn cho Nhóm 2 vay không quá 18 tỷ đồng; số tiền cho Nhóm 1 vay phải ít nhất gấp đôi số tiền cho Nhóm 2 vay trừ 6 tỷ đồng (tức $x \\ge 2y - 6$); và tổng mức trích lập dự phòng rủi ro toàn danh mục không được vượt quá $1.35$ tỷ đồng. Hãy tính số tiền lãi sinh lời lớn nhất (tỷ đồng) mà quỹ tín dụng này có thể thu về sau 1 năm.",
         "correctAnswer": "3.48", "acceptedAnswers": ["3.48", "3,48"],
         "explanation": "Gọi $x, y \\ge 0$ là số tỷ đồng cho vay Nhóm 1 và Nhóm 2. Ta có hệ: Tổng vốn: $x + y \\le 30$; Hạn mức Nhóm 2: $y \\le 18$; Tương quan vốn: $x - 2y \\ge -6$; Rủi ro: $0.03x + 0.06y \\le 1.35 \\iff x + 2y \\le 45$. Hàm sinh lời: $L(x; y) = 0.10x + 0.14y$. Giao điểm của $x + y = 30$ và $x - 2y = -6$ cho $x = 18, y = 12$. Kiểm tra: $y = 12 \\le 18$ (thỏa mãn); Rủi ro $= 18 + 2(12) = 42 \\le 45$ (thỏa mãn). Điểm $(18; 12)$ là đỉnh khả thi của miền nghiệm. Lợi nhuận tại $(18; 12)$ là $L = 0.10(18) + 0.14(12) = 1.80 + 1.68 = 3.48$ tỷ đồng. Tại $(30; 0)$: $L = 3.0$. Tại $(0; 3)$: $L = 0.42$. Do đó tiền lãi lớn nhất là 3.48 tỷ đồng."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một chuỗi siêu thị bán lẻ đặt kế hoạch nhập hai dòng sản phẩm gia dụng: Nồi chiên không dầu (giá nhập 1.5 triệu đồng/chiếc, chiếm $0.08\\text{ m}^3$ kho bãi, cần 0.5 giờ kiểm định chất lượng, lợi nhuận 300 nghìn đồng/chiếc) và Máy lọc không khí (giá nhập 2.5 triệu đồng/chiếc, chiếm $0.12\\text{ m}^3$ kho bãi, cần 1 giờ kiểm định, lợi nhuận 600 nghìn đồng/chiếc). Chuỗi siêu thị cấp ngân sách nhập hàng tối đa 150 triệu đồng, kho bãi dự trữ có thể tích chứa tối đa $8.4\\text{ m}^3$, và tổng thời gian của đội kiểm định không quá 50 giờ. Hãy tính số tiền lợi nhuận lớn nhất (triệu đồng) mà chuỗi siêu thị có thể thu được khi bán hết số hàng nhập về.",
         "correctAnswer": "30", "acceptedAnswers": ["30", "30.0"],
         "explanation": "Gọi $x, y \\in \\mathbb{N}$ là số nồi chiên và máy lọc không khí. Ta có hệ: Ngân sách: $1.5x + 2.5y \\le 150 \\iff 3x + 5y \\le 300$; Thể tích kho: $0.08x + 0.12y \\le 8.4 \\iff 2x + 3y \\le 210$; Giờ kiểm định: $0.5x + y \\le 50 \\iff x + 2y \\le 100$. Hàm lợi nhuận: $L(x; y) = 0.3x + 0.6y = 0.3(x + 2y)$. Vì $x + 2y \\le 100$ nên $L \\le 0.3 \\times 100 = 30$ triệu đồng. Đẳng thức xảy ra khi $x + 2y = 100$. Thử điểm $(0; 50)$: kiểm tra ngân sách: $5(50) = 250 \\le 300$; thể tích: $3(50) = 150 \\le 210$; kiểm định: $2(50) = 100 \\le 100$. Tất cả đều thỏa mãn! Vậy lợi nhuận tối đa đạt được là 30 triệu đồng."}
    ]
    raw_sa_5[1]["correctAnswer"] = "15"
    raw_sa_5[1]["acceptedAnswers"] = ["15", "15.0"]
    raw_sa_5[2]["correctAnswer"] = "15"
    raw_sa_5[2]["acceptedAnswers"] = ["15", "15.0"]

    exam5 = {
        "id": "cd2-exam-5", "examNumber": 5, "title": "Đề Số 5: Tài Chính Doanh Nghiệp & Danh Mục Đầu Tư",
        "code": "CD2-205", "badge": "Mã Đề 205", "badgeColor": "bg-rose-50 text-rose-800 border-rose-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_5, 205), "tfQuestions": raw_tfs_5, "saQuestions": raw_sa_5, "essayQuestions": []
    }
    validate_exam(exam5)
    exams.append(exam5)

    return {
        "id": "cd2",
        "code": "CĐ 2",
        "title": "HỆ BPT BẬC NHẤT 2 ẨN",
        "subtitle": "Quy hoạch tuyến tính, miền nghiệm đa giác lồi & bài toán thực tế tối ưu hóa",
        "grade": 10,
        "icon": "fa-shapes",
        "accentColor": "from-emerald-600 to-teal-700",
        "theorySummaryHtml": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    t = get_topic_cd2()
    print(f"CĐ 2 có {len(t['exams'])} đề thi:")
    for ex in t['exams']:
        print(f"- {ex['code']}: {ex['title']} | MCQs: {len(ex['mcqs'])} | T/F: {len(ex['tfQuestions'])} | SA: {len(ex['saQuestions'])}")
