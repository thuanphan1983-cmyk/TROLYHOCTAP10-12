# -*- coding: utf-8 -*-
"""
Chuyên đề 9: XÁC SUẤT CÓ ĐIỀU KIỆN & CÔNG THỨC BAYES
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc Đề thi TN THPT 2025-2026.
Tập trung vào xác suất có điều kiện, công thức xác suất toàn phần, công thức Bayes và bài toán thực tế y tế, kiểm định chất lượng, báo động.
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd9():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Khái Niệm Xác Suất Có Điều Kiện -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-dice text-blue-600"></i>
      1. Xác Suất Có Điều Kiện & Quy Tắc Nhân
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Định nghĩa xác suất có điều kiện:</p>
        <p>Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Xác suất của $A$ với điều kiện $B$ đã xảy ra:</p>
        <p class="font-semibold text-blue-800 mt-1">$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (hay $\\frac{P(AB)}{P(B)}$).</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200 shadow-xs">
        <p class="font-bold text-blue-900 mb-1">Quy tắc nhân & Độc lập:</p>
        <p>&bull; $P(AB) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$.</p>
        <p>&bull; Hai biến cố $A, B$ độc lập khi và chỉ khi:</p>
        <p class="font-semibold text-blue-800">$P(A|B) = P(A)$ hoặc $P(AB) = P(A) \\cdot P(B)$.</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Công Thức Xác Suất Toàn Phần & Công Thức Bayes -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-network-wired text-emerald-600"></i>
      2. Công Thức Xác Suất Toàn Phần & Công Thức Bayes
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs">
        <p class="font-bold text-emerald-900 mb-1">Công thức xác suất toàn phần:</p>
        <p>Với hệ đầy đủ các biến cố $B_1, B_2, \\dots, B_n$ ($P(B_i) > 0$):</p>
        <p class="font-semibold text-emerald-800 mt-1">$P(A) = \\sum_{i=1}^n P(B_i) \\cdot P(A|B_i)$.</p>
        <p class="text-xs text-slate-600 mt-1">Đặc biệt với 2 biến cố đối $B$ và $\\bar{B}$:</p>
        <p class="text-xs font-semibold">$P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})$.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-xs">
        <p class="font-bold text-emerald-900 mb-1">Công thức Bayes (xác suất hậu nghiệm):</p>
        <p>Xác suất nguyên nhân $B_k$ khi đã biết kết quả $A$ xảy ra:</p>
        <p class="font-semibold text-emerald-800 mt-1">$P(B_k|A) = \\frac{P(B_k) \\cdot P(A|B_k)}{P(A)}$.</p>
        <p class="text-xs text-slate-600 mt-1">Hữu ích trong tính xác suất mắc bệnh khi xét nghiệm dương tính.</p>
      </div>
    </div>
  </div>

  <!-- Phần 3: Sơ Đồ Cây & Ứng Dụng Thực Tiễn -->
  <div class="bg-purple-50/70 border-l-4 border-purple-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-purple-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-stethoscope text-purple-600"></i>
      3. Phương Pháp Sơ Đồ Cây & Ứng Dụng Thực Tế
    </h4>
    <div class="bg-white p-3 rounded-xl border border-purple-200 text-[11.5pt] space-y-1.5">
      <p>&bull; <strong>Sơ đồ cây (Tree Diagram):</strong> Nhánh 1 chia theo các tiền đề (có bệnh / không bệnh; máy 1 / máy 2). Nhánh 2 chia theo kết quả điều kiện (dương tính / âm tính; phế phẩm / chính phẩm). Xác suất mỗi đường đi bằng tích xác suất trên các nhánh.</p>
      <p>&bull; <strong>Chẩn đoán y tế:</strong> Độ nhạy $P(+\\text{ | Bệnh})$ và độ đặc hiệu $P(-\\text{ | Không bệnh})$.</p>
      <p>&bull; <strong>Báo động an ninh:</strong> Tỉ lệ báo động giả $P(\\text{Kêu | Không cháy})$ và báo động sót $P(\\text{Không kêu | Cháy})$.</p>
    </div>
  </div>
</div>
"""

    exams = []
    for exam_idx in range(1, 6):
        seed = 9000 + exam_idx * 43

        if exam_idx == 1:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(B) = 0.5$ và $P(AB) = 0.2$. Xác suất có điều kiện $P(A|B)$ bằng",
                    "options": {"A": "$0.4$", "B": "$0.1$", "C": "$0.7$", "D": "$0.25$"},
                    "correct": "A",
                    "explanation": "$P(A|B) = \\frac{P(AB)}{P(B)} = \\frac{0.2}{0.5} = 0.4$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.6$ và $P(B) = 0.5$. Xác suất của biến cố $A \\cap B$ bằng",
                    "options": {"A": "$0.3$", "B": "$1.1$", "C": "$0.1$", "D": "$0.8$"},
                    "correct": "A",
                    "explanation": "Vì $A, B$ độc lập nên $P(AB) = P(A)P(B) = 0.6 \\times 0.5 = 0.3$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Gieo một con xúc xắc cân đối và đồng chất. Biết rằng số chấm xuất hiện là số chẵn. Xác suất để số chấm xuất hiện là số $2$ bằng",
                    "options": {"A": "$\\frac{1}{3}$", "B": "$\\frac{1}{6}$", "C": "$\\frac{1}{2}$", "D": "$\\frac{2}{3}$"},
                    "correct": "A",
                    "explanation": "Số chấm chẵn gồm $\\{2, 4, 6\\}$ (3 khả năng). Biến cố số 2 có 1 khả năng. Vậy xác suất bằng $1/3$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Một hộp có $6$ viên bi xanh và $4$ viên bi đỏ. Rút ngẫu nhiên lần lượt 2 viên bi không hoàn lại. Xác suất để viên bi thứ hai màu đỏ biết viên bi thứ nhất màu xanh là",
                    "options": {"A": "$\\frac{4}{9}$", "B": "$\\frac{4}{10}$", "C": "$\\frac{3}{9}$", "D": "$\\frac{6}{9}$"},
                    "correct": "A",
                    "explanation": "Sau khi rút 1 bi xanh, trong hộp còn 9 viên bi (gồm 5 bi xanh và 4 bi đỏ). Xác suất rút tiếp được bi đỏ là $4/9$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Tỉ lệ người mắc một bệnh hiểm nghèo trong cộng đồng là $1\\%$. Một xét nghiệm có độ chính xác $95\\%$ (tức là người có bệnh thì $95\\%$ xét nghiệm dương tính, người không bệnh thì $95\\%$ xét nghiệm âm tính). Một người đi xét nghiệm có kết quả dương tính. Xác suất người đó thực sự mắc bệnh xấp xỉ bằng",
                    "options": {"A": "$16.1\\%$", "B": "$95\\%$", "C": "$50\\%$", "D": "$1\\%$"},
                    "correct": "A",
                    "explanation": "Áp dụng Bayes: $P(B|+) = \\frac{0.01 \\times 0.95}{0.01 \\times 0.95 + 0.99 \\times 0.05} = \\frac{0.0095}{0.0095 + 0.0495} = \\frac{0.0095}{0.0590} \\approx 16.1\\%$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một nhà máy có hai dây chuyền sản xuất cùng một loại linh kiện: dây chuyền I sản xuất $60\\%$ sản phẩm, dây chuyền II sản xuất $40\\%$ sản phẩm. Tỉ lệ phế phẩm của dây chuyền I là $2\\%$, của dây chuyền II là $3\\%$. Chọn ngẫu nhiên một sản phẩm của nhà máy, xác suất sản phẩm đó là phế phẩm bằng",
                    "options": {"A": "$0.024$", "B": "$0.025$", "C": "$0.05$", "D": "$0.012$"},
                    "correct": "A",
                    "explanation": "Theo công thức xác suất toàn phần: $P = 0.6 \\times 0.02 + 0.4 \\times 0.03 = 0.012 + 0.012 = 0.024$ ($2.4\\%$)."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một hệ thống báo trộm có xác suất phát chuông khi có trộm đột nhập là $99\\%$. Xác suất chuông báo giả khi không có trộm là $1\\%$. Biết xác suất có trộm đột nhập vào một đêm là $0.1\\%$. Khi chuông báo động reo, xác suất thực sự có trộm đột nhập là",
                    "options": {"A": "$9\\%$", "B": "$99\\%$", "C": "$50\\%$", "D": "$1\\%$"},
                    "correct": "A",
                    "explanation": "Bayes: $P(T|B) = \\frac{0.001 \\times 0.99}{0.001 \\times 0.99 + 0.999 \\times 0.01} = \\frac{0.00099}{0.00099 + 0.00999} = \\frac{0.00099}{0.01098} \\approx 9.02\\% \\approx 9\\%$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.4, P(B) = 0.5$ và $P(A \\cup B) = 0.7$. Xác suất có điều kiện $P(B|A)$ bằng",
                    "options": {"A": "$0.5$", "B": "$0.4$", "C": "$0.2$", "D": "$0.7$"},
                    "correct": "A",
                    "explanation": "$P(AB) = P(A) + P(B) - P(A \\cup B) = 0.4 + 0.5 - 0.7 = 0.2$. $P(B|A) = \\frac{0.2}{0.4} = 0.5$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một lớp học có $60\\%$ học sinh là nữ. Trong số học sinh nữ có $30\\%$ thích môn Toán, trong số học sinh nam có $40\\%$ thích môn Toán. Chọn ngẫu nhiên một học sinh của lớp, xác suất học sinh đó thích môn Toán bằng",
                    "options": {"A": "$0.34$", "B": "$0.35$", "C": "$0.70$", "D": "$0.24$"},
                    "correct": "A",
                    "explanation": "$P = 0.6 \\times 0.3 + 0.4 \\times 0.4 = 0.18 + 0.16 = 0.34$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.8$ và $P(B|A) = 0.75$. Xác suất của biến cố $A \\cap B$ bằng",
                    "options": {"A": "$0.6$", "B": "$0.8$", "C": "$0.75$", "D": "$0.9375$"},
                    "correct": "A",
                    "explanation": "$P(AB) = P(A) \\cdot P(B|A) = 0.8 \\times 0.75 = 0.6$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Trong một kho hàng có $70\\%$ linh kiện do nhà máy $X$ sản xuất và $30\\%$ do nhà máy $Y$ sản xuất. Xác suất để một linh kiện đạt chuẩn của nhà máy $X$ là $0.98$, của nhà máy $Y$ là $0.95$. Lấy ngẫu nhiên một linh kiện thấy đạt chuẩn. Xác suất linh kiện này do nhà máy $X$ sản xuất xấp xỉ bằng",
                    "options": {"A": "$70.7\\%$", "B": "$70\\%$", "C": "$98\\%$", "D": "$50\\%$"},
                    "correct": "A",
                    "explanation": "Bayes: $P(X|ĐC) = \\frac{0.7 \\times 0.98}{0.7 \\times 0.98 + 0.3 \\times 0.95} = \\frac{0.686}{0.686 + 0.285} = \\frac{0.686}{0.971} \\approx 0.7065 \\approx 70.7\\%$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho $P(A) = 0.5, P(B) = 0.4$ và $P(AB) = 0.2$. Khẳng định nào sau đây là đúng?",
                    "options": {"A": "Hai biến cố $A$ và $B$ độc lập với nhau", "B": "Hai biến cố $A$ và $B$ xung khắc với nhau", "C": "$A$ kéo theo $B$", "D": "$P(A|B) = 0.2$"},
                    "correct": "A",
                    "explanation": "Ta có $P(A) \\cdot P(B) = 0.5 \\times 0.4 = 0.2 = P(AB)$, nên hai biến cố $A, B$ độc lập."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Trong một trường học, tỉ lệ học sinh tham gia câu lạc bộ Thể thao là $50\\%$, tham gia câu lạc bộ Nghệ thuật là $40\\%$, và tham gia cả hai câu lạc bộ là $20\\%$. Chọn ngẫu nhiên một học sinh.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất học sinh đó tham gia ít nhất một trong hai câu lạc bộ là $0.7$.", "correct": True, "explanation": "Đúng, $P(T \\cup N) = 0.5 + 0.4 - 0.2 = 0.7$."},
                        {"label": "b", "subLabel": "b)", "content": "Biết học sinh đó tham gia CLB Thể thao, xác suất học sinh đó cũng tham gia CLB Nghệ thuật là $0.4$.", "correct": True, "explanation": "Đúng, $P(N|T) = \\frac{0.2}{0.5} = 0.4$."},
                        {"label": "c", "subLabel": "c)", "content": "Biết học sinh đó tham gia CLB Nghệ thuật, xác suất học sinh đó cũng tham gia CLB Thể thao là $0.5$.", "correct": True, "explanation": "Đúng, $P(T|N) = \\frac{0.2}{0.4} = 0.5$."},
                        {"label": "d", "subLabel": "d)", "content": "Hai biến cố 'tham gia CLB Thể thao' và 'tham gia CLB Nghệ thuật' là hai biến cố xung khắc.", "correct": False, "explanation": "Sai, vì xác suất giao bằng $0.2 \\ne 0$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Một hộp đựng $10$ thẻ được đánh số từ $1$ đến $10$. Rút ngẫu nhiên một thẻ. Gọi $A$ là biến cố 'rút được thẻ ghi số chẵn', $B$ là biến cố 'rút được thẻ ghi số nguyên tố'.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất $P(A) = 0.5$.", "correct": True, "explanation": "Đúng, các số chẵn là $\\{2, 4, 6, 8, 10\\}$ (5 số)."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất $P(B) = 0.4$.", "correct": True, "explanation": "Đúng, các số nguyên tố là $\\{2, 3, 5, 7\\}$ (4 số)."},
                        {"label": "c", "subLabel": "c)", "content": "Biến cố $A \\cap B$ chỉ gồm duy nhất một phần tử là số $2$.", "correct": True, "explanation": "Đúng, số chẵn nguyên tố duy nhất là 2."},
                        {"label": "d", "subLabel": "d)", "content": "Xác suất có điều kiện $P(B|A) = 0.4$.", "correct": False, "explanation": "Sai, $P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0.1}{0.5} = 0.2$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một công ty bảo hiểm chia khách hàng thành 2 nhóm: nhóm lái xe cẩn thận chiếm $80\\%$ và nhóm lái xe ẩu chiếm $20\\%$. Xác suất gặp tai nạn trong năm của người lái xe cẩn thận là $0.05$, của người lái xe ẩu là $0.25$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất để một khách hàng chọn ngẫu nhiên gặp tai nạn trong năm là $0.09$.", "correct": True, "explanation": "Đúng, $P = 0.8 \\times 0.05 + 0.2 \\times 0.25 = 0.04 + 0.05 = 0.09$."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất để một khách hàng không gặp tai nạn trong năm là $0.91$.", "correct": True, "explanation": "Đúng, $1 - 0.09 = 0.91$."},
                        {"label": "c", "subLabel": "c)", "content": "Biết một khách hàng đã gặp tai nạn, xác suất người đó thuộc nhóm lái xe ẩu là $\\frac{5}{9}$.", "correct": True, "explanation": "Đúng, $P(Ẩ|TN) = \\frac{0.2 \\times 0.25}{0.09} = \\frac{0.05}{0.09} = \\frac{5}{9}$."},
                        {"label": "d", "subLabel": "d)", "content": "Biết một khách hàng đã gặp tai nạn, xác suất người đó thuộc nhóm lái xe cẩn thận là $\\frac{1}{2}$.", "correct": False, "explanation": "Sai, xác suất cẩn thận là $\\frac{4}{9} \\ne \\frac{1}{2}$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Xét hai biến cố $A$ và $B$ bất kỳ với $P(A) > 0, P(B) > 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$P(A|B) + P(\\bar{A}|B) = 1$.", "correct": True, "explanation": "Đúng, tổng xác suất biến cố đối trên cùng một điều kiện $B$ luôn bằng 1."},
                        {"label": "b", "subLabel": "b)", "content": "Nếu $A$ và $B$ xung khắc thì $P(A|B) = 0$.", "correct": True, "explanation": "Đúng, vì $P(AB) = 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $A \\subset B$ thì $P(A|B) = 1$.", "correct": False, "explanation": "Sai, $A \\subset B \\Rightarrow AB = A \\Rightarrow P(A|B) = P(A)/P(B) \\le 1$, chỉ bằng 1 khi $A = B$."},
                        {"label": "d", "subLabel": "d)", "content": "Nếu $B \\subset A$ thì $P(A|B) = 1$.", "correct": True, "explanation": "Đúng, vì $B \\subset A \\Rightarrow AB = B \\Rightarrow P(A|B) = P(B)/P(B) = 1$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A, B$ thỏa mãn $P(A) = 0.6, P(B) = 0.5$ và $P(AB) = 0.3$. Tính xác suất có điều kiện $P(A|B)$.",
                    "correctAnswer": "0.6",
                    "acceptedAnswers": ["0.6", "0,6"],
                    "explanation": "$P(A|B) = \\frac{0.3}{0.5} = 0.6$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Gieo hai con xúc xắc cân đối. Biết tổng số chấm xuất hiện bằng $7$. Tính xác suất để có đúng một con xúc xắc xuất hiện mặt $1$ chấm (viết kết quả dưới dạng số thập phân làm tròn 2 chữ số hoặc phân số tối giản).",
                    "correctAnswer": "0.33",
                    "acceptedAnswers": ["0.33", "1/3", "2/6", "0,33"],
                    "explanation": "Các cặp có tổng bằng 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ gồm 6 cặp. Các cặp có số 1 là $(1,6), (6,1)$ gồm 2 cặp. Xác suất bằng $2/6 = 1/3 \\approx 0.33$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Trong một phân xưởng may, máy I sản xuất $40\\%$ sản phẩm, máy II sản xuất $60\\%$ sản phẩm. Tỉ lệ phế phẩm của máy I là $1\\%$, của máy II là $2\\%$. Lấy ngẫu nhiên một sản phẩm, tính xác suất để sản phẩm đó là phế phẩm (nhập dạng phần trăm: ví dụ $1.6\\%$ thì nhập 1.6).",
                    "correctAnswer": "1.6",
                    "acceptedAnswers": ["1.6", "1,6", "0.016"],
                    "explanation": "$P = 0.4 \\times 0.01 + 0.6 \\times 0.02 = 0.004 + 0.012 = 0.016 = 1.6\\%$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.7$ và $P(B) = 0.8$. Tính xác suất để cả hai biến cố cùng xảy ra.",
                    "correctAnswer": "0.56",
                    "acceptedAnswers": ["0.56", "0,56"],
                    "explanation": "$P(AB) = 0.7 \\times 0.8 = 0.56$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một bài kiểm tra trắc nghiệm có 4 phương án cho mỗi câu hỏi. Học sinh $A$ biết câu trả lời đúng với xác suất $0.7$. Nếu không biết, học sinh đó đoán mò ngẫu nhiên. Biết học sinh $A$ đã trả lời đúng câu hỏi đó, tính xác suất học sinh đó thực sự biết đáp án (làm tròn kết quả đến hai chữ số thập phân).",
                    "correctAnswer": "0.90",
                    "acceptedAnswers": ["0.9", "0.90", "0,9", "0,90", "28/31"],
                    "explanation": "Bayes: $P(Biết|Đúng) = \\frac{0.7 \\times 1}{0.7 \\times 1 + 0.3 \\times 0.25} = \\frac{0.7}{0.7 + 0.075} = \\frac{0.7}{0.775} = \\frac{28}{31} \\approx 0.90$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một hộp chứa 3 quả cầu đỏ và 7 quả cầu trắng. Rút ngẫu nhiên lần lượt 2 quả cầu không hoàn lại. Tính xác suất để quả cầu thứ 2 màu đỏ biết quả thứ nhất màu đỏ.",
                    "correctAnswer": "0.22",
                    "acceptedAnswers": ["0.22", "2/9", "0,22"],
                    "explanation": "Sau khi rút 1 quả đỏ, trong hộp còn 2 đỏ và 7 trắng (tổng 9 quả). Xác suất rút tiếp quả đỏ là $2/9 \\approx 0.22$."
                }
            ]

        elif exam_idx == 2:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Công thức nào sau đây biểu diễn định nghĩa xác suất có điều kiện của biến cố $A$ khi biết biến cố $B$ đã xảy ra ($P(B) > 0$)?",
                    "options": {"A": "$P(A|B) = \\frac{P(AB)}{P(B)}$", "B": "$P(A|B) = \\frac{P(AB)}{P(A)}$", "C": "$P(A|B) = P(A) \\cdot P(B)$", "D": "$P(A|B) = P(A) - P(B)$"},
                    "correct": "A",
                    "explanation": "Định nghĩa chuẩn: $P(A|B) = \\frac{P(AB)}{P(B)}$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.6$ và $P(A|B) = 0.5$. Khẳng định nào sau đây là đúng?",
                    "options": {"A": "$A$ và $B$ là hai biến cố độc lập", "B": "$A$ và $B$ là hai biến cố xung khắc", "C": "$P(AB) = 0.1$", "D": "$P(B|A) = 0.5$"},
                    "correct": "A",
                    "explanation": "Vì $P(A|B) = 0.5 = P(A)$ nên hai biến cố $A$ và $B$ độc lập."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Rút ngẫu nhiên một quân bài từ bộ bài tú lơ khơ 52 lá. Biết quân bài rút ra là quân Át. Xác suất để quân bài đó là Át bích bằng",
                    "options": {"A": "$\\frac{1}{4}$", "B": "$\\frac{1}{52}$", "C": "$\\frac{1}{13}$", "D": "$\\frac{1}{2}$"},
                    "correct": "A",
                    "explanation": "Có 4 quân Át trong bộ bài, trong đó có 1 quân Át bích. Xác suất là $1/4$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho $P(A) = 0.3, P(B) = 0.4$ và $P(AB) = 0.12$. Giá trị của $P(B|A)$ bằng",
                    "options": {"A": "$0.4$", "B": "$0.3$", "C": "$0.12$", "D": "$0.7$"},
                    "correct": "A",
                    "explanation": "$P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{0.12}{0.3} = 0.4$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một máy bay có hai động cơ độc lập. Xác suất để động cơ 1 bị hỏng trong chuyến bay là $0.01$, động cơ 2 bị hỏng là $0.02$. Máy bay bay an toàn nếu có ít nhất một động cơ hoạt động bình thường. Xác suất chuyến bay an toàn bằng",
                    "options": {"A": "$0.9998$", "B": "$0.9702$", "C": "$0.9900$", "D": "$0.9800$"},
                    "correct": "A",
                    "explanation": "Xác suất cả 2 động cơ cùng hỏng là $0.01 \\times 0.02 = 0.0002$. Xác suất an toàn: $1 - 0.0002 = 0.9998$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một thùng hàng chứa $80\\%$ sản phẩm loại I và $20\\%$ sản phẩm loại II. Tỉ lệ hỏng của sản phẩm loại I là $1\\%$, loại II là $5\\%$. Lấy ngẫu nhiên một sản phẩm thì thấy bị hỏng. Xác suất để sản phẩm đó là loại I bằng",
                    "options": {"A": "$\\frac{4}{9}$", "B": "$\\frac{5}{9}$", "C": "$\\frac{8}{10}$", "D": "$\\frac{1}{2}$"},
                    "correct": "A",
                    "explanation": "Bayes: $P(I|Hỏng) = \\frac{0.8 \\times 0.01}{0.8 \\times 0.01 + 0.2 \\times 0.05} = \\frac{0.008}{0.008 + 0.010} = \\frac{0.008}{0.018} = \\frac{4}{9}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một trường học có $1000$ học sinh, trong đó có $400$ học sinh nam và $600$ học sinh nữ. Có $10\\%$ học sinh nam và $5\\%$ học sinh nữ bị cận thị. Chọn ngẫu nhiên một học sinh bị cận thị. Xác suất học sinh đó là nam bằng",
                    "options": {"A": "$\\frac{4}{7}$", "B": "$\\frac{3}{7}$", "C": "$\\frac{4}{10}$", "D": "$\\frac{1}{2}$"},
                    "correct": "A",
                    "explanation": "Số nam cận: $400 \\times 0.1 = 40$. Số nữ cận: $600 \\times 0.05 = 30$. Tổng cận: $70$. Xác suất là nam: $40/70 = 4/7$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5$ và $P(A \\cap \\bar{B}) = 0.2$. Xác suất $P(AB)$ bằng",
                    "options": {"A": "$0.3$", "B": "$0.2$", "C": "$0.7$", "D": "$0.1$"},
                    "correct": "A",
                    "explanation": "$P(AB) = P(A) - P(A \\cap \\bar{B}) = 0.5 - 0.2 = 0.3$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một nhân viên bán hàng tiếp xúc với hai đối tác độc lập. Xác suất ký hợp đồng với đối tác thứ nhất là $0.6$, với đối tác thứ hai là $0.7$. Xác suất nhân viên đó ký được đúng một hợp đồng bằng",
                    "options": {"A": "$0.46$", "B": "$0.42$", "C": "$0.18$", "D": "$0.88$"},
                    "correct": "A",
                    "explanation": "$P = 0.6 \\times (1 - 0.7) + (1 - 0.6) \\times 0.7 = 0.6 \\times 0.3 + 0.4 \\times 0.7 = 0.18 + 0.28 = 0.46$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho $P(A|B) = 0.8$ và $P(B) = 0.3$. Giá trị của $P(\\bar{A}|B)$ bằng",
                    "options": {"A": "$0.2$", "B": "$0.8$", "C": "$0.7$", "D": "$0.24$"},
                    "correct": "A",
                    "explanation": "$P(\\bar{A}|B) = 1 - P(A|B) = 1 - 0.8 = 0.2$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Trong chẩn đoán y tế, 'độ nhạy' của một xét nghiệm là xác suất để",
                    "options": {"A": "Xét nghiệm cho kết quả dương tính khi người được xét nghiệm thực sự có bệnh", "B": "Xét nghiệm cho kết quả âm tính khi người được xét nghiệm không có bệnh", "C": "Người có kết quả dương tính thực sự mắc bệnh", "D": "Người có kết quả âm tính thực sự không mắc bệnh"},
                    "correct": "A",
                    "explanation": "Định nghĩa y khoa: Độ nhạy (sensitivity) là $P(+\\text{ | Bệnh})$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.4, P(B) = 0.6$. Nếu $A$ và $B$ xung khắc thì $P(A|B)$ bằng",
                    "options": {"A": "$0$", "B": "$0.4$", "C": "$0.24$", "D": "$1$"},
                    "correct": "A",
                    "explanation": "Vì $A$ và $B$ xung khắc nên $P(AB) = 0 \\Rightarrow P(A|B) = 0$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Một xưởng cơ khí có hai máy tự động $M_1$ và $M_2$ sản xuất ốc vít. Máy $M_1$ sản xuất $70\\%$ số ốc vít, máy $M_2$ sản xuất $30\\%$. Tỉ lệ ốc vít bị lỗi của máy $M_1$ là $1\\%$, của máy $M_2$ là $2\\%$. Lấy ngẫu nhiên một ốc vít.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất ốc vít lấy ra được sản xuất bởi máy $M_1$ là $0.7$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất để ốc vít lấy ra bị lỗi bằng $0.013$.", "correct": True, "explanation": "Đúng, $P = 0.7 \\times 0.01 + 0.3 \\times 0.02 = 0.007 + 0.006 = 0.013$."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu ốc vít lấy ra bị lỗi, xác suất nó do máy $M_1$ sản xuất lớn hơn do máy $M_2$ sản xuất.", "correct": True, "explanation": "Đúng, $P(M_1|Lỗi) = 7/13 > P(M_2|Lỗi) = 6/13$."},
                        {"label": "d", "subLabel": "d)", "content": "Xác suất ốc vít lấy ra không bị lỗi là $0.98$.", "correct": False, "explanation": "Sai, xác suất không lỗi là $1 - 0.013 = 0.987$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.4, P(B) = 0.5$ và $P(AB) = 0.2$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Hai biến cố $A$ và $B$ độc lập với nhau.", "correct": True, "explanation": "Đúng, $0.4 \\times 0.5 = 0.2$."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất có điều kiện $P(A|B) = 0.4$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Xác suất $P(A \\cup B) = 0.7$.", "correct": True, "explanation": "Đúng, $0.4 + 0.5 - 0.2 = 0.7$."},
                        {"label": "d", "subLabel": "d)", "content": "Hai biến cố $\\bar{A}$ và $\\bar{B}$ không độc lập với nhau.", "correct": False, "explanation": "Sai, nếu $A, B$ độc lập thì $\\bar{A}, \\bar{B}$ cũng độc lập."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một xét nghiệm phát hiện kháng thể có độ nhạy $98\\%$ và độ đặc hiệu $99\\%$. Trong một cộng đồng có tỉ lệ người có kháng thể là $5\\%$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất một người có kháng thể xét nghiệm cho kết quả dương tính là $0.98$.", "correct": True, "explanation": "Đúng (độ nhạy)."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất một người không có kháng thể xét nghiệm cho kết quả dương tính (dương tính giả) là $0.01$.", "correct": True, "explanation": "Đúng, $1 - 0.99 = 0.01$."},
                        {"label": "c", "subLabel": "c)", "content": "Xác suất để một người bất kỳ trong cộng đồng có kết quả xét nghiệm dương tính là $0.0585$.", "correct": True, "explanation": "Đúng, $0.05 \\times 0.98 + 0.95 \\times 0.01 = 0.049 + 0.0095 = 0.0585$."},
                        {"label": "d", "subLabel": "d)", "content": "Một người có kết quả xét nghiệm dương tính thì chắc chắn $100\\%$ người đó có kháng thể.", "correct": False, "explanation": "Sai, vẫn có tỉ lệ dương tính giả."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hệ đầy đủ hai biến cố $B_1$ và $B_2$ với $P(B_1) = 0.6, P(B_2) = 0.4$. Cho biến cố $A$ thỏa mãn $P(A|B_1) = 0.3$ và $P(A|B_2) = 0.5$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$B_1$ và $B_2$ là hai biến cố xung khắc và $B_1 \\cup B_2 = \\Omega$.", "correct": True, "explanation": "Đúng, định nghĩa hệ đầy đủ."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất toàn phần $P(A) = 0.38$.", "correct": True, "explanation": "Đúng, $0.6 \\times 0.3 + 0.4 \\times 0.5 = 0.18 + 0.20 = 0.38$."},
                        {"label": "c", "subLabel": "c)", "content": "Xác suất hậu nghiệm $P(B_1|A) = \\frac{18}{38} = \\frac{9}{19}$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Biến cố $A$ độc lập với biến cố $B_1$.", "correct": False, "explanation": "Sai, $P(A|B_1) = 0.3 \\ne P(A) = 0.38$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(B) = 0.8$ và $P(AB) = 0.4$. Tính xác suất có điều kiện $P(A|B)$.",
                    "correctAnswer": "0.5",
                    "acceptedAnswers": ["0.5", "0,5"],
                    "explanation": "$P(A|B) = \\frac{0.4}{0.8} = 0.5$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Hai xạ thủ cùng bắn độc lập vào một bia. Xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, của xạ thủ thứ hai là $0.7$. Tính xác suất để cả hai xạ thủ cùng bắn trúng bia.",
                    "correctAnswer": "0.56",
                    "acceptedAnswers": ["0.56", "0,56"],
                    "explanation": "$0.8 \\times 0.7 = 0.56$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một cửa hàng nhập táo từ hai nông trại $A$ và $B$. Nông trại $A$ cung cấp $60\\%$ số táo với tỉ lệ hư hỏng $5\\%$. Nông trại $B$ cung cấp $40\\%$ số táo với tỉ lệ hư hỏng $10\\%$. Chọn ngẫu nhiên một quả táo, tính xác suất quả táo đó bị hư hỏng (nhập số dưới dạng phần trăm: ví dụ $7\\%$ thì nhập 7).",
                    "correctAnswer": "7",
                    "acceptedAnswers": ["7", "7%", "0.07"],
                    "explanation": "$P = 0.6 \\times 0.05 + 0.4 \\times 0.10 = 0.03 + 0.04 = 0.07 = 7\\%$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho $P(A) = 0.6, P(B) = 0.4$ và $P(A \\cup B) = 0.8$. Tính giá trị của $P(AB)$.",
                    "correctAnswer": "0.2",
                    "acceptedAnswers": ["0.2", "0,2"],
                    "explanation": "$P(AB) = 0.6 + 0.4 - 0.8 = 0.2$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một ngân hàng ước tính xác suất một khách hàng vay tiền vỡ nợ là $0.02$. Một phần mềm chấm điểm tín dụng dự báo đúng khách hàng vỡ nợ với tỉ lệ $90\\%$, nhưng cũng dự báo nhầm khách hàng không vỡ nợ thành vỡ nợ với tỉ lệ $5\\%$. Khi phần mềm cảnh báo một khách hàng sẽ vỡ nợ, tính xác suất thực sự khách hàng đó vỡ nợ (làm tròn kết quả đến hai chữ số thập phân).",
                    "correctAnswer": "0.27",
                    "acceptedAnswers": ["0.27", "0,27", "18/67"],
                    "explanation": "Bayes: $P(VN|CB) = \\frac{0.02 \\times 0.9}{0.02 \\times 0.9 + 0.98 \\times 0.05} = \\frac{0.018}{0.018 + 0.049} = \\frac{0.018}{0.067} = \\frac{18}{67} \\approx 0.27$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một hộp có 5 viên bi trắng và 5 viên bi đen. Rút lần lượt 2 viên bi không hoàn lại. Biết viên thứ nhất màu đen, tính xác suất viên thứ hai màu trắng.",
                    "correctAnswer": "0.56",
                    "acceptedAnswers": ["0.56", "5/9", "0,56"],
                    "explanation": "Còn lại 5 trắng và 4 đen (tổng 9 viên). Xác suất là $5/9 \\approx 0.56$."
                }
            ]

        elif exam_idx == 3:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(B) = 0.4$ và $P(A|B) = 0.5$. Xác suất của biến cố $A \\cap B$ bằng",
                    "options": {"A": "$0.2$", "B": "$0.9$", "C": "$0.1$", "D": "$0.8$"},
                    "correct": "A",
                    "explanation": "$P(AB) = P(B) \\cdot P(A|B) = 0.4 \\times 0.5 = 0.2$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Gieo một đồng xu cân đối đồng chất 2 lần liên tiếp. Xác suất để lần 2 xuất hiện mặt ngửa biết lần 1 đã xuất hiện mặt ngửa bằng",
                    "options": {"A": "$\\frac{1}{2}$", "B": "$\\frac{1}{4}$", "C": "$\\frac{3}{4}$", "D": "$1$"},
                    "correct": "A",
                    "explanation": "Hai lần gieo độc lập nhau nên xác suất lần 2 ngửa vẫn là $1/2$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Cho $P(A) = 0.7$ và $P(B) = 0.6$. Nếu $A$ và $B$ độc lập thì $P(A \\cup B)$ bằng",
                    "options": {"A": "$0.88$", "B": "$1.3$", "C": "$0.42$", "D": "$0.9$"},
                    "correct": "A",
                    "explanation": "$P(AB) = 0.7 \\times 0.6 = 0.42$. $P(A \\cup B) = 0.7 + 0.6 - 0.42 = 0.88$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Một hộp có 4 bóng đèn tốt và 2 bóng đèn hỏng. Lấy ngẫu nhiên lần lượt 2 bóng không hoàn lại. Xác suất để cả 2 bóng lấy ra đều tốt là",
                    "options": {"A": "$\\frac{2}{5}$", "B": "$\\frac{4}{9}$", "C": "$\\frac{1}{3}$", "D": "$\\frac{1}{2}$"},
                    "correct": "A",
                    "explanation": "$\\frac{4}{6} \\times \\frac{3}{5} = \\frac{12}{30} = \\frac{2}{5}$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một thiết bị có hai linh kiện hoạt động độc lập. Xác suất linh kiện A bị lỗi là $0.05$, linh kiện B bị lỗi là $0.1$. Xác suất để thiết bị hoạt động tốt (cả 2 linh kiện không bị lỗi) bằng",
                    "options": {"A": "$0.855$", "B": "$0.85$", "C": "$0.995$", "D": "$0.005$"},
                    "correct": "A",
                    "explanation": "$(1 - 0.05)(1 - 0.1) = 0.95 \\times 0.9 = 0.855$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Tỉ lệ cử tri ủng hộ ứng cử viên X là $60\\%$. Trong số người ủng hộ X, có $70\\%$ đi bỏ phiếu. Trong số người không ủng hộ X, có $40\\%$ đi bỏ phiếu. Xác suất một cử tri được chọn ngẫu nhiên có đi bỏ phiếu bằng",
                    "options": {"A": "$0.58$", "B": "$0.55$", "C": "$0.66$", "D": "$0.50$"},
                    "correct": "A",
                    "explanation": "$0.6 \\times 0.7 + 0.4 \\times 0.4 = 0.42 + 0.16 = 0.58$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một máy lọc nước cảnh báo thay lõi lọc với độ tin cậy $90\\%$. Tỉ lệ lõi lọc thực sự cần thay trong chu kỳ kiểm tra là $10\\%$. Xác suất máy cảnh báo sai (lõi chưa cần thay nhưng máy vẫn báo) là $5\\%$. Khi máy phát cảnh báo thay lõi, xác suất lõi thực sự cần thay là",
                    "options": {"A": "$\\frac{2}{3}$", "B": "$\\frac{9}{10}$", "C": "$\\frac{1}{2}$", "D": "$\\frac{3}{4}$"},
                    "correct": "A",
                    "explanation": "Bayes: $P = \\frac{0.1 \\times 0.9}{0.1 \\times 0.9 + 0.9 \\times 0.05} = \\frac{0.09}{0.09 + 0.045} = \\frac{0.09}{0.135} = \\frac{2}{3}$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho $P(A) = 0.4$ và $P(B|A) = 0.6$. Giá trị của $P(A \\cap \\bar{B})$ bằng",
                    "options": {"A": "$0.16$", "B": "$0.24$", "C": "$0.4$", "D": "$0.6$"},
                    "correct": "A",
                    "explanation": "$P(A \\cap \\bar{B}) = P(A) \\cdot P(\\bar{B}|A) = 0.4 \\times (1 - 0.6) = 0.4 \\times 0.4 = 0.16$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một học sinh đi thi lấy chứng chỉ tin học. Xác suất đậu phần lý thuyết là $0.8$. Nếu đậu lý thuyết, xác suất đậu phần thực hành là $0.9$. Xác suất để học sinh đó đậu cả hai phần thi là",
                    "options": {"A": "$0.72$", "B": "$0.85$", "C": "$0.9$", "D": "$0.1$"},
                    "correct": "A",
                    "explanation": "$0.8 \\times 0.9 = 0.72$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho $A$ và $B$ là hai biến cố xung khắc với $P(A) = 0.3, P(B) = 0.4$. Khẳng định nào sau đây là sai?",
                    "options": {"A": "$A$ và $B$ là hai biến cố độc lập", "B": "$P(AB) = 0$", "C": "$P(A \\cup B) = 0.7$", "D": "$P(A|B) = 0$"},
                    "correct": "A",
                    "explanation": "Hai biến cố xung khắc có xác suất dương thì không bao giờ độc lập (vì $P(AB) = 0 \\ne P(A)P(B)$)."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một bài toán trắc nghiệm có xác suất người thứ nhất giải được là $0.6$, người thứ hai giải được là $0.7$ (hai người giải độc lập). Xác suất bài toán được giải quyết (có ít nhất một người giải được) bằng",
                    "options": {"A": "$0.88$", "B": "$0.42$", "C": "$0.78$", "D": "$0.9$"},
                    "correct": "A",
                    "explanation": "$1 - (1 - 0.6)(1 - 0.7) = 1 - 0.4 \\times 0.3 = 1 - 0.12 = 0.88$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5$ và $P(B) = 0.8$. Khi đó khẳng định nào sau đây luôn đúng?",
                    "options": {"A": "$P(AB) \\ge 0.3$", "B": "$P(AB) \\le 0.3$", "C": "$P(AB) = 0.4$", "D": "$A$ và $B$ xung khắc"},
                    "correct": "A",
                    "explanation": "$P(A \\cup B) = P(A) + P(B) - P(AB) \\le 1 \\Rightarrow P(AB) \\ge 0.5 + 0.8 - 1 = 0.3$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Một nhân viên bán bảo hiểm gọi điện cho hai khách hàng độc lập. Xác suất khách hàng thứ nhất đồng ý mua là $0.4$, khách hàng thứ hai đồng ý mua là $0.5$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất cả hai khách hàng đều đồng ý mua là $0.2$.", "correct": True, "explanation": "Đúng, $0.4 \\times 0.5 = 0.2$."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất cả hai khách hàng đều từ chối là $0.3$.", "correct": True, "explanation": "Đúng, $0.6 \\times 0.5 = 0.3$."},
                        {"label": "c", "subLabel": "c)", "content": "Xác suất có ít nhất một khách hàng đồng ý mua là $0.7$.", "correct": True, "explanation": "Đúng, $1 - 0.3 = 0.7$."},
                        {"label": "d", "subLabel": "d)", "content": "Xác suất có đúng một khách hàng đồng ý mua là $0.6$.", "correct": False, "explanation": "Sai, $0.4(0.5) + 0.6(0.5) = 0.2 + 0.3 = 0.5$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Một hộp có 8 viên bi đỏ và 4 viên bi xanh. Lấy lần lượt 2 viên bi không hoàn lại.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất viên thứ nhất màu đỏ là $\\frac{2}{3}$.", "correct": True, "explanation": "Đúng, $8/12 = 2/3$."},
                        {"label": "b", "subLabel": "b)", "content": "Biết viên thứ nhất màu đỏ, xác suất viên thứ hai màu xanh là $\\frac{4}{11}$.", "correct": True, "explanation": "Đúng, còn 11 viên trong đó 4 viên xanh."},
                        {"label": "c", "subLabel": "c)", "content": "Xác suất cả 2 viên bi đều màu đỏ là $\\frac{14}{33}$.", "correct": True, "explanation": "Đúng, $\\frac{8}{12} \\times \\frac{7}{11} = \\frac{14}{33}$."},
                        {"label": "d", "subLabel": "d)", "content": "Xác suất cả 2 viên bi đều màu xanh bằng $\\frac{1}{6}$.", "correct": False, "explanation": "Sai, $\\frac{4}{12} \\times \\frac{3}{11} = \\frac{1}{11} \\ne \\frac{1}{6}$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Tại một trạm kiểm soát giao thông, $80\\%$ phương tiện qua lại là xe ô tô con và $20\\%$ là xe tải. Xác suất một xe ô tô con vi phạm tốc độ là $0.05$, một xe tải vi phạm tốc độ là $0.15$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất một phương tiện ngẫu nhiên vi phạm tốc độ là $0.07$.", "correct": True, "explanation": "Đúng, $0.8 \\times 0.05 + 0.2 \\times 0.15 = 0.04 + 0.03 = 0.07$."},
                        {"label": "b", "subLabel": "b)", "content": "Trong số các xe vi phạm tốc độ, tỉ lệ xe ô tô con chiếm $\\frac{4}{7}$.", "correct": True, "explanation": "Đúng, $\\frac{0.04}{0.07} = \\frac{4}{7}$."},
                        {"label": "c", "subLabel": "c)", "content": "Trong số các xe vi phạm tốc độ, tỉ lệ xe tải chiếm $\\frac{3}{7}$.", "correct": True, "explanation": "Đúng, $\\frac{0.03}{0.07} = \\frac{3}{7}$."},
                        {"label": "d", "subLabel": "d)", "content": "Xác suất một phương tiện không vi phạm tốc độ là $0.90$.", "correct": False, "explanation": "Sai, xác suất không vi phạm là $1 - 0.07 = 0.93$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hai biến cố $A$ và $B$ bất kỳ có xác suất khác 0.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Nếu $P(A|B) = P(A)$ thì $P(B|A) = P(B)$.", "correct": True, "explanation": "Đúng, tính đối xứng của tính độc lập."},
                        {"label": "b", "subLabel": "b)", "content": "$P(AB) \\le P(A)$ và $P(AB) \\le P(B)$.", "correct": True, "explanation": "Đúng, vì $AB \\subset A$ và $AB \\subset B$."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $P(A) = 1$ thì $P(AB) = P(B)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "$P(A|B) + P(A|\\bar{B}) = 1$ với mọi cặp biến cố.", "correct": False, "explanation": "Sai, tổng hai xác suất này không có lý do phải bằng 1."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ độc lập có $P(A) = 0.5$ và $P(B) = 0.6$. Tính xác suất của biến cố $A \\cap B$.",
                    "correctAnswer": "0.3",
                    "acceptedAnswers": ["0.3", "0,3"],
                    "explanation": "$P(AB) = 0.5 \\times 0.6 = 0.3$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho $P(A) = 0.8, P(B) = 0.5$ và $P(AB) = 0.4$. Tính xác suất có điều kiện $P(B|A)$.",
                    "correctAnswer": "0.5",
                    "acceptedAnswers": ["0.5", "0,5"],
                    "explanation": "$P(B|A) = \\frac{0.4}{0.8} = 0.5$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một công ty tuyển dụng nhân sự qua 2 vòng thi độc lập. Xác suất ứng viên vượt qua vòng 1 là $0.8$. Nếu qua vòng 1, xác suất vượt qua vòng 2 là $0.75$. Tính xác suất để ứng viên trúng tuyển cả 2 vòng.",
                    "correctAnswer": "0.6",
                    "acceptedAnswers": ["0.6", "0,6"],
                    "explanation": "$0.8 \\times 0.75 = 0.6$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Một lô thuốc có $90\\%$ thuốc sản xuất đúng tiêu chuẩn và $10\\%$ thuốc bị lỗi nhẹ. Một máy quét tự động phát hiện đúng thuốc bị lỗi với xác suất $95\\%$, và nhận diện nhầm thuốc đúng tiêu chuẩn thành lỗi với xác suất $5\\%$. Khi máy quét báo một viên thuốc bị lỗi, tính xác suất viên thuốc đó thực sự bị lỗi (làm tròn đến hai chữ số thập phân).",
                    "correctAnswer": "0.68",
                    "acceptedAnswers": ["0.68", "0,68", "19/28"],
                    "explanation": "Bayes: $P = \\frac{0.10 \\times 0.95}{0.10 \\times 0.95 + 0.90 \\times 0.05} = \\frac{0.095}{0.095 + 0.045} = \\frac{0.095}{0.140} = \\frac{19}{28} \\approx 0.68$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Gieo một con xúc xắc cân đối. Biết kết quả xuất hiện số chấm lớn hơn $3$. Tính xác suất xuất hiện mặt $6$ chấm (nhập phân số dạng tối giản $a/b$ hoặc số thập phân làm tròn hai chữ số: ví dụ $1/3$ thì nhập 0.33).",
                    "correctAnswer": "0.33",
                    "acceptedAnswers": ["0.33", "1/3", "0,33"],
                    "explanation": "Các số lớn hơn 3 là $\\{4, 5, 6\\}$ (3 khả năng). Mặt 6 có 1 khả năng, xác suất $1/3 \\approx 0.33$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một trạm thu phí cao tốc có hai làn tự động ETC1 và ETC2. Xe qua ETC1 chiếm $60\\%$, qua ETC2 chiếm $40\\%$. Tỉ lệ xe bị lỗi nhận diện thẻ ở ETC1 là $1\\%$, ở ETC2 là $3\\%$. Tính xác suất một xe bất kỳ qua trạm bị lỗi nhận diện (nhập dưới dạng phần trăm: ví dụ $1.8\\%$ thì nhập 1.8).",
                    "correctAnswer": "1.8",
                    "acceptedAnswers": ["1.8", "1,8", "0.018"],
                    "explanation": "$P = 0.6 \\times 0.01 + 0.4 \\times 0.03 = 0.006 + 0.012 = 0.018 = 1.8\\%$."
                }
            ]

        elif exam_idx == 4:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ với $P(A) = 0.5, P(B) = 0.6$ và $P(AB) = 0.3$. Giá trị của $P(B|A)$ bằng",
                    "options": {"A": "$0.6$", "B": "$0.5$", "C": "$0.3$", "D": "$0.2$"},
                    "correct": "A",
                    "explanation": "$P(B|A) = \\frac{0.3}{0.5} = 0.6$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$. Biết $P(A) = 0.4$ và $P(B) = 0.5$. Xác suất của biến cố $A \\cap \\bar{B}$ bằng",
                    "options": {"A": "$0.2$", "B": "$0.1$", "C": "$0.3$", "D": "$0.4$"},
                    "correct": "A",
                    "explanation": "$P(A \\cap \\bar{B}) = P(A) \\cdot P(\\bar{B}) = 0.4 \\times (1 - 0.5) = 0.2$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một bình kín đựng 5 quả cầu trắng và 5 quả cầu đỏ. Rút ngẫu nhiên lần lượt 2 quả cầu không hoàn lại. Xác suất để quả thứ hai màu đỏ biết quả thứ nhất màu trắng bằng",
                    "options": {"A": "$\\frac{5}{9}$", "B": "$\\frac{4}{9}$", "C": "$\\frac{1}{2}$", "D": "$\\frac{5}{10}$"},
                    "correct": "A",
                    "explanation": "Sau khi rút 1 quả trắng, trong bình còn 9 quả gồm 4 trắng và 5 đỏ. Xác suất quả 2 đỏ là $5/9$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.3, P(B) = 0.5$ và $P(B|A) = 0.6$. Giá trị của $P(A \\cup B)$ bằng",
                    "options": {"A": "$0.62$", "B": "$0.8$", "C": "$0.18$", "D": "$0.5$"},
                    "correct": "A",
                    "explanation": "$P(AB) = 0.3 \\times 0.6 = 0.18$. $P(A \\cup B) = 0.3 + 0.5 - 0.18 = 0.62$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Tỉ lệ người nhiễm một loại virus trong cộng đồng là $0.5\\%$. Một bộ kit xét nghiệm nhanh có độ nhạy $90\\%$ và độ đặc hiệu $95\\%$. Khi xét nghiệm một người ngẫu nhiên cho kết quả dương tính, xác suất người đó thực sự nhiễm virus xấp xỉ bằng",
                    "options": {"A": "$8.3\\%$", "B": "$90\\%$", "C": "$50\\%$", "D": "$0.5\\%$"},
                    "correct": "A",
                    "explanation": "Bayes: $P = \\frac{0.005 \\times 0.90}{0.005 \\times 0.90 + 0.995 \\times 0.05} = \\frac{0.0045}{0.0045 + 0.04975} = \\frac{0.0045}{0.05425} \\approx 8.29\\% \\approx 8.3\\%$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một nông trường nuôi bò sữa có hai trang trại: trang trại A cung cấp $70\\%$ tổng sản lượng sữa, trang trại B cung cấp $30\\%$. Tỉ lệ sữa đạt chuẩn loại 1 của trang trại A là $95\\%$, của trang trại B là $90\\%$. Chọn ngẫu nhiên một hộp sữa của nông trường, xác suất hộp sữa đạt chuẩn loại 1 bằng",
                    "options": {"A": "$0.935$", "B": "$0.925$", "C": "$0.940$", "D": "$0.910$"},
                    "correct": "A",
                    "explanation": "$P = 0.7 \\times 0.95 + 0.3 \\times 0.90 = 0.665 + 0.270 = 0.935$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một hệ thống phòng không có hai radar quét mục tiêu độc lập. Xác suất radar 1 phát hiện máy bay là $0.8$, radar 2 phát hiện là $0.9$. Xác suất máy bay bị ít nhất một radar phát hiện là",
                    "options": {"A": "$0.98$", "B": "$0.72$", "C": "$0.9$", "D": "$0.85$"},
                    "correct": "A",
                    "explanation": "$1 - (1 - 0.8)(1 - 0.9) = 1 - 0.2 \\times 0.1 = 1 - 0.02 = 0.98$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.6, P(B) = 0.4$ và $P(A \\cup B) = 0.8$. Giá trị của $P(A|B)$ bằng",
                    "options": {"A": "$0.5$", "B": "$0.2$", "C": "$0.4$", "D": "$0.6$"},
                    "correct": "A",
                    "explanation": "$P(AB) = 0.6 + 0.4 - 0.8 = 0.2$. $P(A|B) = \\frac{0.2}{0.4} = 0.5$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một học sinh dự thi hai môn Toán và Tiếng Anh. Xác suất học sinh đạt điểm giỏi môn Toán là $0.7$. Nếu đạt điểm giỏi môn Toán, xác suất đạt điểm giỏi môn Tiếng Anh là $0.8$. Xác suất học sinh đạt điểm giỏi cả hai môn là",
                    "options": {"A": "$0.56$", "B": "$0.75$", "C": "$0.50$", "D": "$0.80$"},
                    "correct": "A",
                    "explanation": "$0.7 \\times 0.8 = 0.56$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho $P(A) = 0.4, P(B) = 0.5$. Khẳng định nào sau đây đúng nếu $A \\subset B$?",
                    "options": {"A": "$P(B|A) = 1$", "B": "$P(A|B) = 1$", "C": "$P(AB) = 0.5$", "D": "$P(A \\cup B) = 0.9$"},
                    "correct": "A",
                    "explanation": "Vì $A \\subset B$ nên $A \\cap B = A \\Rightarrow P(B|A) = \\frac{P(AB)}{P(A)} = \\frac{P(A)}{P(A)} = 1$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Một cửa hàng hoa quả có $60\\%$ cam loại ngon và $40\\%$ cam bình thường. Xác suất người mua chọn đúng cam loại ngon là $0.8$, chọn cam bình thường là $0.5$. Chọn ngẫu nhiên một quả cam được người mua chọn, xác suất đó là cam loại ngon bằng",
                    "options": {"A": "$\\frac{12}{17}$", "B": "$\\frac{5}{17}$", "C": "$\\frac{3}{5}$", "D": "$\\frac{2}{3}$"},
                    "correct": "A",
                    "explanation": "Bayes: $P = \\frac{0.6 \\times 0.8}{0.6 \\times 0.8 + 0.4 \\times 0.5} = \\frac{0.48}{0.48 + 0.20} = \\frac{0.48}{0.68} = \\frac{12}{17}$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho $P(A) = 0.3, P(B) = 0.4$. Khi $A$ và $B$ là hai biến cố độc lập thì $P(A|B)$ bằng",
                    "options": {"A": "$0.3$", "B": "$0.4$", "C": "$0.12$", "D": "$0.7$"},
                    "correct": "A",
                    "explanation": "Khi độc lập thì $P(A|B) = P(A) = 0.3$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Một bác sĩ chẩn đoán một triệu chứng bệnh. Tỉ lệ người mắc bệnh $X$ trong nhóm người có triệu chứng này là $20\\%$. Một phương pháp xét nghiệm có độ nhạy $90\\%$ và độ đặc hiệu $85\\%$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất một người mắc bệnh có kết quả xét nghiệm dương tính là $0.90$.", "correct": True, "explanation": "Đúng (độ nhạy)."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất một người không mắc bệnh có kết quả xét nghiệm âm tính là $0.85$.", "correct": True, "explanation": "Đúng (độ đặc hiệu)."},
                        {"label": "c", "subLabel": "c)", "content": "Xác suất một người xét nghiệm cho kết quả dương tính là $0.30$.", "correct": True, "explanation": "Đúng, $0.2 \\times 0.9 + 0.8 \\times 0.15 = 0.18 + 0.12 = 0.30$."},
                        {"label": "d", "subLabel": "d)", "content": "Khi một người có kết quả xét nghiệm dương tính, xác suất người đó thực sự mắc bệnh là $60\\%$.", "correct": True, "explanation": "Đúng, $P = \\frac{0.18}{0.30} = 0.6 = 60\\%$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.4$ và $P(AB) = 0.2$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Hai biến cố $A$ và $B$ độc lập.", "correct": True, "explanation": "Đúng, $0.5 \\times 0.4 = 0.2$."},
                        {"label": "b", "subLabel": "b)", "content": "$P(A|B) = 0.5$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "$P(B|A) = 0.4$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Biến cố $A$ và $\\bar{B}$ không độc lập.", "correct": False, "explanation": "Sai, nếu $A, B$ độc lập thì $A, \\bar{B}$ cũng độc lập."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Một công ty cung cấp dịch vụ Internet có hai tổng đài $T_1$ và $T_2$. Tổng đài $T_1$ tiếp nhận $60\\%$ cuộc gọi hỗ trợ, $T_2$ tiếp nhận $40\\%$. Tỉ lệ khách hàng hài lòng sau cuộc gọi ở $T_1$ là $80\\%$, ở $T_2$ là $90\\%$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất để một cuộc gọi ngẫu nhiên nhận được sự hài lòng của khách hàng là $0.84$.", "correct": True, "explanation": "Đúng, $0.6 \\times 0.8 + 0.4 \\times 0.9 = 0.48 + 0.36 = 0.84$."},
                        {"label": "b", "subLabel": "b)", "content": "Biết một khách hàng hài lòng, xác suất cuộc gọi đó do tổng đài $T_1$ tiếp nhận bằng $\\frac{4}{7}$.", "correct": True, "explanation": "Đúng, $\\frac{0.48}{0.84} = \\frac{4}{7}$."},
                        {"label": "c", "subLabel": "c)", "content": "Biết một khách hàng không hài lòng, xác suất cuộc gọi do $T_1$ tiếp nhận lớn hơn do $T_2$ tiếp nhận.", "correct": True, "explanation": "Đúng, $T_1$ không hài lòng: $0.6 \\times 0.2 = 0.12$; $T_2$ không hài lòng: $0.4 \\times 0.1 = 0.04$ ($0.12 > 0.04$)."},
                        {"label": "d", "subLabel": "d)", "content": "Tỉ lệ khách hàng không hài lòng chung của công ty là $0.20$.", "correct": False, "explanation": "Sai, tỉ lệ không hài lòng là $1 - 0.84 = 0.16$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hai biến cố $A$ và $B$ bất kỳ với $P(B) > 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất có điều kiện luôn thỏa mãn $0 \\le P(A|B) \\le 1$.", "correct": True, "explanation": "Đúng, vì xác suất luôn thuộc đoạn $[0; 1]$."},
                        {"label": "b", "subLabel": "b)", "content": "Nếu $P(A) = 0$ thì $P(A|B) = 0$.", "correct": True, "explanation": "Đúng, vì $AB \\subset A \\Rightarrow P(AB) = 0$."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $P(B) = 1$ thì $P(A|B) = P(A)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Nếu $P(A|B) = 1$ thì chắc chắn $A = B$.", "correct": False, "explanation": "Sai, ví dụ $B \\subset A$ thì $P(A|B) = 1$ nhưng $A$ và $B$ không nhất thiết bằng nhau."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.4, P(B) = 0.5$ và $P(AB) = 0.2$. Tính xác suất có điều kiện $P(A|B)$.",
                    "correctAnswer": "0.4",
                    "acceptedAnswers": ["0.4", "0,4"],
                    "explanation": "$P(A|B) = \\frac{0.2}{0.5} = 0.4$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.5$ và $P(B) = 0.8$. Tính xác suất để ít nhất một trong hai biến cố xảy ra.",
                    "correctAnswer": "0.9",
                    "acceptedAnswers": ["0.9", "0,9"],
                    "explanation": "$P(A \\cup B) = 0.5 + 0.8 - 0.4 = 0.9$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một dây chuyền đóng gói sữa có $98\\%$ sản phẩm đủ khối lượng quy định và $2\\%$ thiếu khối lượng. Một cảm biến phát hiện sản phẩm thiếu khối lượng chính xác $95\\%$, và cảnh báo nhầm sản phẩm đủ khối lượng thành thiếu khối lượng là $1\\%$. Khi cảm biến báo động một hộp sữa thiếu khối lượng, tính xác suất hộp sữa đó thực sự thiếu khối lượng (làm tròn đến hai chữ số thập phân).",
                    "correctAnswer": "0.66",
                    "acceptedAnswers": ["0.66", "0,66", "19/28.8"],
                    "explanation": "Bayes: $P = \\frac{0.02 \\times 0.95}{0.02 \\times 0.95 + 0.98 \\times 0.01} = \\frac{0.019}{0.019 + 0.0098} = \\frac{0.019}{0.0288} \\approx 0.6597 \\approx 0.66$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Một trường có $50\\%$ học sinh chơi bóng đá và $30\\%$ học sinh chơi bóng rổ. Biết rằng $15\\%$ học sinh chơi cả hai môn. Chọn ngẫu nhiên một học sinh chơi bóng đá, tính xác suất học sinh đó cũng chơi bóng rổ.",
                    "correctAnswer": "0.3",
                    "acceptedAnswers": ["0.3", "0,3"],
                    "explanation": "$P(BR|BĐ) = \\frac{0.15}{0.50} = 0.3$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Gieo một con xúc xắc cân đối hai lần. Tính xác suất để lần thứ hai xuất hiện mặt 6 chấm biết tổng số chấm sau hai lần gieo bằng 10 (viết dạng số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
                    "correctAnswer": "0.33",
                    "acceptedAnswers": ["0.33", "1/3", "0,33"],
                    "explanation": "Các cặp có tổng bằng 10: $(4,6), (5,5), (6,4)$ gồm 3 cặp. Cặp có lần 2 bằng 6 là $(4,6)$ (1 cặp). Xác suất là $1/3 \\approx 0.33$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một kho xăng dầu có hai bể chứa $B_1$ và $B_2$ với dung tích bằng nhau ($50\\% - 50\\%$). Bể $B_1$ có tỉ lệ tạp chất $0.5\\%$, bể $B_2$ có tỉ lệ tạp chất $1.5\\%$. Lấy ngẫu nhiên một mẫu xăng từ kho, tính xác suất mẫu xăng có tạp chất (nhập số dạng phần trăm: ví dụ $1\\%$ thì nhập 1).",
                    "correctAnswer": "1",
                    "acceptedAnswers": ["1", "1%", "0.01"],
                    "explanation": "$P = 0.5 \\times 0.005 + 0.5 \\times 0.015 = 0.0025 + 0.0075 = 0.01 = 1\\%$."
                }
            ]

        else:
            raw_mcqs = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.6$ và $P(AB) = 0.18$. Xác suất có điều kiện $P(B|A)$ bằng",
                    "options": {"A": "$0.3$", "B": "$0.12$", "C": "$0.48$", "D": "$0.78$"},
                    "correct": "A",
                    "explanation": "$P(B|A) = \\frac{0.18}{0.6} = 0.3$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.2$ và $P(B) = 0.3$. Xác suất của biến cố $\\bar{A} \\cap B$ bằng",
                    "options": {"A": "$0.24$", "B": "$0.06$", "C": "$0.1$", "D": "$0.56$"},
                    "correct": "A",
                    "explanation": "$P(\\bar{A} \\cap B) = P(\\bar{A}) \\cdot P(B) = (1 - 0.2) \\times 0.3 = 0.8 \\times 0.3 = 0.24$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Gieo một con xúc xắc cân đối. Biết kết quả là một số nguyên tố. Xác suất để xuất hiện số chẵn bằng",
                    "options": {"A": "$\\frac{1}{3}$", "B": "$\\frac{1}{2}$", "C": "$\\frac{1}{6}$", "D": "$\\frac{2}{3}$"},
                    "correct": "A",
                    "explanation": "Các số nguyên tố trên xúc xắc là $\\{2, 3, 5\\}$ (3 số). Số chẵn duy nhất là số 2 (1 số). Xác suất bằng $1/3$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.7$ và $P(A \\cup B) = 0.85$. Giá trị của $P(AB)$ bằng",
                    "options": {"A": "$0.35$", "B": "$0.15$", "C": "$0.25$", "D": "$0.45$"},
                    "correct": "A",
                    "explanation": "$P(AB) = 0.5 + 0.7 - 0.85 = 0.35$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một công ty phần mềm phát hiện một loại mã độc với xác suất $99\\%$. Xác suất phần mềm nhận diện nhầm một file an toàn thành mã độc là $1\\%$. Trong một thư mục, tỉ lệ file chứa mã độc là $0.1\\%$. Khi phần mềm báo một file là mã độc, xác suất file đó thực sự chứa mã độc là",
                    "options": {"A": "$9\\%$", "B": "$99\\%$", "C": "$50\\%$", "D": "$1\\%$"},
                    "correct": "A",
                    "explanation": "Bayes: $P = \\frac{0.001 \\times 0.99}{0.001 \\times 0.99 + 0.999 \\times 0.01} = \\frac{0.00099}{0.00099 + 0.00999} = \\frac{0.00099}{0.01098} \\approx 9\\%$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một trạm phát điện năng lượng mặt trời có hai cụm pin A và B. Cụm A tạo ra $60\\%$ sản lượng điện, cụm B tạo ra $40\\%$. Tỉ lệ suy hao hiệu suất trong ngày nhiều mây của cụm A là $10\\%$, của cụm B là $15\\%$. Chọn ngẫu nhiên một phần điện năng bị suy hao, xác suất phần điện năng đó do cụm A tạo ra bằng",
                    "options": {"A": "$\\frac{1}{2}$", "B": "$\\frac{3}{5}$", "C": "$\\frac{2}{3}$", "D": "$\\frac{4}{7}$"},
                    "correct": "A",
                    "explanation": "Bayes: $P(A|Suy\\ hao) = \\frac{0.6 \\times 0.10}{0.6 \\times 0.10 + 0.4 \\times 0.15} = \\frac{0.06}{0.06 + 0.06} = \\frac{0.06}{0.12} = \\frac{1}{2}$."
                },
                {
                    "id": 7,
                    "question": "**Câu 7:** Một xạ thủ bắn 3 phát đạn độc lập vào mục tiêu với xác suất trúng mỗi phát đều là $0.8$. Xác suất để xạ thủ bắn trúng mục tiêu ít nhất một phát là",
                    "options": {"A": "$0.992$", "B": "$0.512$", "C": "$0.800$", "D": "$0.960$"},
                    "correct": "A",
                    "explanation": "$1 - (1 - 0.8)^3 = 1 - 0.2^3 = 1 - 0.008 = 0.992$."
                },
                {
                    "id": 8,
                    "question": "**Câu 8:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.5$ và $P(B|A) = 0.4$. Khi đó $P(A \\cap B)$ bằng",
                    "options": {"A": "$0.2$", "B": "$0.1$", "C": "$0.8$", "D": "$0.9$"},
                    "correct": "A",
                    "explanation": "$P(AB) = 0.5 \\times 0.4 = 0.2$."
                },
                {
                    "id": 9,
                    "question": "**Câu 9:** Một lớp học có $20$ học sinh giỏi Toán, $15$ học sinh giỏi Văn và $5$ học sinh giỏi cả hai môn. Chọn ngẫu nhiên một học sinh giỏi Văn, xác suất học sinh đó cũng giỏi Toán bằng",
                    "options": {"A": "$\\frac{1}{3}$", "B": "$\\frac{1}{4}$", "C": "$\\frac{5}{20}$", "D": "$\\frac{1}{2}$"},
                    "correct": "A",
                    "explanation": "Có 15 học sinh giỏi Văn, trong đó 5 em giỏi cả Toán. Xác suất là $5/15 = 1/3$."
                },
                {
                    "id": 10,
                    "question": "**Câu 10:** Cho hai biến cố $A$ và $B$ có $P(A) = 0.7, P(B) = 0.3$. Nếu $A$ và $B$ xung khắc thì $P(A \\cup B)$ bằng",
                    "options": {"A": "$1$", "B": "$0.79$", "C": "$0.21$", "D": "$0.5$"},
                    "correct": "A",
                    "explanation": "Vì $A, B$ xung khắc nên $P(A \\cup B) = P(A) + P(B) = 0.7 + 0.3 = 1$."
                },
                {
                    "id": 11,
                    "question": "**Câu 11:** Trong quy trình xét nghiệm kiểm dịch thực vật, một loại vi khuẩn xuất hiện với tỉ lệ $2\\%$. Xét nghiệm có độ chính xác $95\\%$ cho cả mẫu có vi khuẩn và không có vi khuẩn. Khi một mẫu cho kết quả có vi khuẩn, xác suất mẫu đó thực sự nhiễm khuẩn xấp xỉ bằng",
                    "options": {"A": "$27.9\\%$", "B": "$95\\%$", "C": "$50\\%$", "D": "$2\\%$"},
                    "correct": "A",
                    "explanation": "Bayes: $P = \\frac{0.02 \\times 0.95}{0.02 \\times 0.95 + 0.98 \\times 0.05} = \\frac{0.019}{0.019 + 0.049} = \\frac{0.019}{0.068} \\approx 27.94\\% \\approx 27.9\\%$."
                },
                {
                    "id": 12,
                    "question": "**Câu 12:** Cho $P(A) = 0.5, P(B) = 0.4$. Nếu $A$ và $B$ độc lập thì $P(B|A)$ bằng",
                    "options": {"A": "$0.4$", "B": "$0.5$", "C": "$0.2$", "D": "$0.9$"},
                    "correct": "A",
                    "explanation": "Vì độc lập nên $P(B|A) = P(B) = 0.4$."
                }
            ]

            tf_questions = [
                {
                    "id": 1,
                    "context": "**Câu 1:** Một nhà máy sản xuất bóng đèn có hai dây chuyền: dây chuyền A sản xuất $60\\%$ và dây chuyền B sản xuất $40\\%$. Tỉ lệ bóng đèn bị lỗi của dây chuyền A là $2\\%$, của dây chuyền B là $3\\%$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất một bóng đèn ngẫu nhiên do dây chuyền A sản xuất là $0.6$.", "correct": True, "explanation": "Đúng."},
                        {"label": "b", "subLabel": "b)", "content": "Xác suất một bóng đèn ngẫu nhiên bị lỗi là $0.024$.", "correct": True, "explanation": "Đúng, $0.6 \\times 0.02 + 0.4 \\times 0.03 = 0.012 + 0.012 = 0.024$."},
                        {"label": "c", "subLabel": "c)", "content": "Lấy được một bóng đèn bị lỗi, xác suất bóng đèn đó do dây chuyền A sản xuất bằng $0.5$.", "correct": True, "explanation": "Đúng, $\\frac{0.012}{0.024} = 0.5$."},
                        {"label": "d", "subLabel": "d)", "content": "Tỉ lệ bóng đèn đạt chuẩn chất lượng của toàn nhà máy là $98\\%$.", "correct": False, "explanation": "Sai, tỉ lệ đạt chuẩn là $1 - 0.024 = 0.976 = 97.6\\%$."}
                    ]
                },
                {
                    "id": 2,
                    "context": "**Câu 2:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.3, P(B) = 0.4$ và $P(AB) = 0.12$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$A$ và $B$ là hai biến cố độc lập.", "correct": True, "explanation": "Đúng, $0.3 \\times 0.4 = 0.12$."},
                        {"label": "b", "subLabel": "b)", "content": "$P(A|B) = 0.3$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "$P(B|A) = 0.4$.", "correct": True, "explanation": "Đúng."},
                        {"label": "d", "subLabel": "d)", "content": "Xác suất để không có biến cố nào xảy ra là $0.42$.", "correct": True, "explanation": "Đúng, $(1 - 0.3)(1 - 0.4) = 0.7 \\times 0.6 = 0.42$."}
                    ]
                },
                {
                    "id": 3,
                    "context": "**Câu 3:** Trong một đợt khám sức khỏe tổng quát, tỉ lệ người bị bệnh tăng huyết áp là $15\\%$. Trong số người tăng huyết áp, có $40\\%$ bị thừa cân. Trong số người không tăng huyết áp, có $20\\%$ bị thừa cân.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "Xác suất một người khám bất kỳ bị thừa cân là $0.23$.", "correct": True, "explanation": "Đúng, $0.15 \\times 0.4 + 0.85 \\times 0.2 = 0.06 + 0.17 = 0.23$."},
                        {"label": "b", "subLabel": "b)", "content": "Một người đến khám bị thừa cân, xác suất người đó bị tăng huyết áp là $\\frac{6}{23}$.", "correct": True, "explanation": "Đúng, $\\frac{0.06}{0.23} = \\frac{6}{23}$."},
                        {"label": "c", "subLabel": "c)", "content": "Tỉ lệ người không bị thừa cân trong cộng đồng khám là $77\\%$.", "correct": True, "explanation": "Đúng, $1 - 0.23 = 0.77$."},
                        {"label": "d", "subLabel": "d)", "content": "Tăng huyết áp và thừa cân là hai yếu tố độc lập trong tập dữ liệu này.", "correct": False, "explanation": "Sai, vì $P(TC|HA) = 0.4 \\ne P(TC) = 0.23$."}
                    ]
                },
                {
                    "id": 4,
                    "context": "**Câu 4:** Cho hai biến cố $A$ và $B$ với $P(A) > 0, P(B) > 0$.",
                    "items": [
                        {"label": "a", "subLabel": "a)", "content": "$P(AB) = P(A) \\cdot P(B|A)$.", "correct": True, "explanation": "Đúng, công thức nhân xác suất."},
                        {"label": "b", "subLabel": "b)", "content": "$P(AB) = P(B) \\cdot P(A|B)$.", "correct": True, "explanation": "Đúng."},
                        {"label": "c", "subLabel": "c)", "content": "Nếu $P(A|B) > P(A)$ thì $P(B|A) > P(B)$.", "correct": True, "explanation": "Đúng, vì $\\frac{P(AB)}{P(B)} > P(A) \\Leftrightarrow P(AB) > P(A)P(B) \\Leftrightarrow \\frac{P(AB)}{P(A)} > P(B)$."},
                        {"label": "d", "subLabel": "d)", "content": "$P(A|B)$ luôn luôn bằng $P(B|A)$.", "correct": False, "explanation": "Sai, chỉ bằng nhau khi $P(A) = P(B)$."}
                    ]
                }
            ]

            sa_questions = [
                {
                    "id": 1,
                    "question": "**Câu 1:** Cho hai biến cố $A$ và $B$ thỏa mãn $P(A) = 0.5$ và $P(AB) = 0.25$. Tính xác suất có điều kiện $P(B|A)$.",
                    "correctAnswer": "0.5",
                    "acceptedAnswers": ["0.5", "0,5"],
                    "explanation": "$P(B|A) = \\frac{0.25}{0.5} = 0.5$."
                },
                {
                    "id": 2,
                    "question": "**Câu 2:** Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.4$ và $P(B) = 0.6$. Tính xác suất của biến cố $A \\cap B$.",
                    "correctAnswer": "0.24",
                    "acceptedAnswers": ["0.24", "0,24"],
                    "explanation": "$P(AB) = 0.4 \\times 0.6 = 0.24$."
                },
                {
                    "id": 3,
                    "question": "**Câu 3:** Một công ty bảo hiểm thấy rằng $70\\%$ khách hàng mua bảo hiểm nhà ở và $30\\%$ khách hàng mua bảo hiểm xe hơi. Trong năm, tỉ lệ yêu cầu bồi thường ở nhóm nhà ở là $2\\%$, nhóm xe hơi là $8\\%$. Chọn ngẫu nhiên một hợp đồng bảo hiểm, tính xác suất hợp đồng đó có yêu cầu bồi thường (nhập số dạng phần trăm: ví dụ $3.8\\%$ thì nhập 3.8).",
                    "correctAnswer": "3.8",
                    "acceptedAnswers": ["3.8", "3,8", "0.038"],
                    "explanation": "$P = 0.7 \\times 0.02 + 0.3 \\times 0.08 = 0.014 + 0.024 = 0.038 = 3.8\\%$."
                },
                {
                    "id": 4,
                    "question": "**Câu 4:** Gieo một con xúc xắc cân đối. Biết kết quả là số chẵn. Tính xác suất xuất hiện mặt 4 chấm (nhập số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
                    "correctAnswer": "0.33",
                    "acceptedAnswers": ["0.33", "1/3", "0,33"],
                    "explanation": "Số chẵn $\\{2, 4, 6\\}$, số 4 có 1 khả năng, xác suất là $1/3 \\approx 0.33$."
                },
                {
                    "id": 5,
                    "question": "**Câu 5 (VDC):** Một ngân hàng phát hiện giao dịch gian lận chiếm tỉ lệ $0.2\\%$ tổng số giao dịch. Hệ thống AI cảnh báo đúng giao dịch gian lận với xác suất $98\\%$, nhưng cảnh báo nhầm giao dịch hợp pháp thành gian lận với xác suất $1\\%$. Khi hệ thống AI cảnh báo một giao dịch là gian lận, tính xác suất giao dịch đó thực sự là gian lận (làm tròn kết quả đến hai chữ số thập phân).",
                    "correctAnswer": "0.16",
                    "acceptedAnswers": ["0.16", "0,16", "0.164"],
                    "explanation": "Bayes: $P = \\frac{0.002 \\times 0.98}{0.002 \\times 0.98 + 0.998 \\times 0.01} = \\frac{0.00196}{0.00196 + 0.00998} = \\frac{0.00196}{0.01194} \\approx 0.164 \\approx 0.16$."
                },
                {
                    "id": 6,
                    "question": "**Câu 6 (VDC):** Một giỏ hoa quả có 6 quả cam và 4 quả táo. Lấy lần lượt 2 quả không hoàn lại. Tính xác suất quả thứ hai là quả cam biết quả thứ nhất là quả táo (nhập số thập phân làm tròn hai chữ số hoặc phân số tối giản).",
                    "correctAnswer": "0.67",
                    "acceptedAnswers": ["0.67", "6/9", "2/3", "0,67"],
                    "explanation": "Còn lại 6 cam và 3 táo (tổng 9 quả). Xác suất là $6/9 = 2/3 \\approx 0.67$."
                }
            ]

        exam_obj = {
            "id": f"cd9-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Xác Suất Có Điều Kiện",
            "code": f"CD9-10{exam_idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
            "durationMinutes": 90,
            "matrixNote": "30% NB • 30% TH • 20% VD • 20% VDC (Tăng cường bài toán thực tiễn)",
            "structure": "12 câu TN (3.0đ) • 4 câu Đúng/Sai (4.0đ) • 6 câu Trả lời ngắn (3.0đ) • Tổng 10.0đ",
            "mcqs": balance_mcqs(raw_mcqs, seed=seed),
            "tfQuestions": tf_questions,
            "saQuestions": sa_questions,
            "essayQuestions": []
        }
        validate_exam(exam_obj)
        exams.append(exam_obj)

    return {
        "id": "cd9",
        "code": "CĐ 9",
        "title": "XÁC SUẤT CÓ ĐIỀU KIỆN",
        "icon": "fa-solid fa-dice",
        "badge": "Lớp 12 • Xác suất thống kê",
        "badgeColor": "bg-rose-100 text-rose-800 border-rose-200",
        "description": "Xác suất có điều kiện, công thức xác suất toàn phần, công thức Bayes và mô hình cây giải toán y tế, tài chính, kiểm định thực tế.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd9()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
