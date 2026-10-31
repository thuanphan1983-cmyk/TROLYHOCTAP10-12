# -*- coding: utf-8 -*-
"""
Chuyên đề 4: BÀI TOÁN TỔ HỢP
Gồm Tóm tắt kiến thức + 5 đề luyện tập độc lập chuẩn cấu trúc 2025-2026
Mỗi đề có 2 câu trả lời ngắn VDC (Vận dụng cao - rất khó).
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd4():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Quy Tắc Đếm Cơ Bản -->
  <div class="bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-list-ol text-amber-600"></i>
      1. Các Quy Tắc Đếm Cơ Bản
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-amber-200">
        <p class="font-bold text-amber-900 mb-1">Quy tắc cộng (Phương án độc lập):</p>
        <p>Nếu công việc có $k$ phương án thực hiện độc lập, phương án $i$ có $n_i$ cách:</p>
        <p class="mt-1 font-semibold text-amber-800">Tổng số cách = $n_1 + n_2 + \\dots + n_k$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-amber-200">
        <p class="font-bold text-amber-900 mb-1">Quy tắc nhân (Công đoạn liên tiếp):</p>
        <p>Nếu công việc gồm $k$ công đoạn nối tiếp nhau, công đoạn $i$ có $n_i$ cách:</p>
        <p class="mt-1 font-semibold text-amber-800">Tổng số cách = $n_1 \\times n_2 \\times \\dots \\times n_k$</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Hoán Vị - Chỉnh Hợp - Tổ Hợp -->
  <div class="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-blue-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-calculator text-blue-600"></i>
      2. Hoán Vị - Chỉnh Hợp - Tổ Hợp
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-blue-200">
        <p class="font-bold text-blue-900 mb-1">Hoán vị ($P_n$):</p>
        <p>Sắp xếp thứ tự $n$ phần tử:</p>
        <p class="mt-1 font-semibold text-blue-800">$P_n = n!$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200">
        <p class="font-bold text-blue-900 mb-1">Chỉnh hợp ($A_n^k$):</p>
        <p>Chọn $k$ phần tử <em>có thứ tự</em>:</p>
        <p class="mt-1 font-semibold text-blue-800">$A_n^k = \\frac{n!}{(n - k)!}$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200">
        <p class="font-bold text-blue-900 mb-1">Tổ hợp ($C_n^k$):</p>
        <p>Chọn $k$ phần tử <em>không thứ tự</em>:</p>
        <p class="mt-1 font-semibold text-blue-800">$C_n^k = \\frac{n!}{k!(n - k)!}$</p>
      </div>
    </div>
    <div class="bg-white p-3 rounded-xl border border-blue-200 text-xs sm:text-[11pt] mt-2">
      <strong>Tính chất quan trọng:</strong> $C_n^k = C_n^{n-k}$; $C_n^{k-1} + C_n^k = C_{n+1}^k$; $C_n^0 + C_n^1 + \\dots + C_n^n = 2^n$.
    </div>
  </div>

  <!-- Phần 3: Nhị Thức Newton & Xác Suất Cổ Điển -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-dice text-emerald-600"></i>
      3. Nhị Thức Newton & Xác Suất Cổ Điển
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-emerald-200">
        <p class="font-bold text-emerald-900 mb-1">Khai triển nhị thức Newton:</p>
        <p>$(a + b)^n = \\sum_{k=0}^n C_n^k a^{n-k} b^k$</p>
        <p class="text-xs text-slate-600 mt-0.5">Số hạng tổng quát thứ $k+1$: $T_{k+1} = C_n^k a^{n-k} b^k$.</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-emerald-200">
        <p class="font-bold text-emerald-900 mb-1">Xác suất cổ điển:</p>
        <p>$P(A) = \\frac{n(A)}{n(\\Omega)}$</p>
        <p class="text-xs text-slate-600 mt-0.5">Biến cố đối: $P(\\overline{A}) = 1 - P(A)$. Biến cố độc lập: $P(AB) = P(A) \\cdot P(B)$.</p>
      </div>
    </div>
  </div>
</div>
"""

    exams = []

    # ==========================================
    # ĐỀ 1 (MÃ 401): Mã hóa bảo mật & xác thực hệ thống
    # ==========================================
    raw_mcqs_1 = [
        {"id": 1, "question": "**Câu 1:** Có 5 cuốn sách Toán khác nhau và 4 cuốn sách Lí khác nhau trên giá sách. Có bao nhiêu cách chọn ra một cuốn sách để đọc?",
         "options": {"A": "$9$", "B": "$20$", "C": "$5$", "D": "$4$"},
         "correct": "A", "explanation": "Áp dụng quy tắc cộng: $5 + 4 = 9$ cách."},
        {"id": 2, "question": "**Câu 2:** Số hoán vị của một tập hợp gồm 5 phần tử là",
         "options": {"A": "$120$", "B": "$24$", "C": "$720$", "D": "$25$"},
         "correct": "A", "explanation": "$P_5 = 5! = 120$."},
        {"id": 3, "question": "**Câu 3:** Công thức tính số tổ hợp chập $k$ của $n$ phần tử ($0 \\le k \\le n$) là",
         "options": {"A": "$C_n^k = \\frac{n!}{k!(n - k)!}$", "B": "$C_n^k = \\frac{n!}{(n - k)!}$", "C": "$C_n^k = \\frac{k!}{(n - k)!}$", "D": "$C_n^k = \\frac{n!}{k!}$"},
         "correct": "A", "explanation": "Theo đúng định nghĩa công thức tổ hợp."},
        {"id": 4, "question": "**Câu 4:** Có bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau được lập từ các chữ số $\{1, 2, 3, 4, 5\}$?",
         "options": {"A": "$60$", "B": "$125$", "C": "$10$", "D": "$20$"},
         "correct": "A", "explanation": "Mỗi số là một chỉnh hợp chập 3 của 5 chữ số: $A_5^3 = 5 \\times 4 \\times 3 = 60$."},
        {"id": 5, "question": "**Câu 5:** Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng",
         "options": {"A": "$\\frac{1}{2}$", "B": "$\\frac{1}{3}$", "C": "$\\frac{2}{3}$", "D": "$\\frac{1}{6}$"},
         "correct": "A", "explanation": "Các số nguyên tố là $\{2, 3, 5\}$ gồm 3 mặt. Xác suất $P = 3/6 = 1/2$."},
        {"id": 6, "question": "**Câu 6:** Có bao nhiêu cách chọn một ban đại diện gồm 3 người từ một nhóm 10 tình nguyện viên?",
         "options": {"A": "$120$", "B": "$720$", "C": "$30$", "D": "$210$"},
         "correct": "A", "explanation": "Số cách là $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$."},
        {"id": 7, "question": "**Câu 7:** Hệ số của $x^2$ trong khai triển nhị thức $(x + 2)^4$ bằng",
         "options": {"A": "$24$", "B": "$6$", "C": "$12$", "D": "$16$"},
         "correct": "A", "explanation": "Số hạng chứa $x^2$ là $C_4^2 \\cdot x^2 \\cdot 2^2 = 6 \\times 4 \\times x^2 = 24x^2$."},
        {"id": 8, "question": "**Câu 8:** Tung một đồng xu cân đối 3 lần liên tiếp. Số phần tử của không gian mẫu $\\Omega$ bằng",
         "options": {"A": "$8$", "B": "$6$", "C": "$9$", "D": "$16$"},
         "correct": "A", "explanation": "Mỗi lần tung có 2 kết quả (S hoặc N), 3 lần tung có $2^3 = 8$ kết quả."},
        {"id": 9, "question": "**Câu 9:** Tổng các hệ số trong khai triển nhị thức $(2x - 1)^5$ bằng",
         "options": {"A": "$1$", "B": "$32$", "C": "$0$", "D": "$-1$"},
         "correct": "A", "explanation": "Cho $x = 1$: $(2(1) - 1)^5 = 1^5 = 1$."},
        {"id": 10, "question": "**Câu 10:** Một hộp chứa 4 viên bi đỏ và 6 viên bi xanh. Lấy ngẫu nhiên đồng thời 2 viên bi. Xác suất để lấy được 2 viên bi cùng màu bằng",
         "options": {"A": "$\\frac{7}{15}$", "B": "$\\frac{8}{15}$", "C": "$\\frac{2}{5}$", "D": "$\\frac{1}{3}$"},
         "correct": "A", "explanation": "$n(\\Omega) = C_{10}^2 = 45$. Số cách cùng màu: $C_4^2 + C_6^2 = 6 + 15 = 21$. Xác suất $P = 21/45 = 7/15$."},
        {"id": 11, "question": "**Câu 11:** Một mã khóa vali gồm 4 vòng số, mỗi vòng có 10 chữ số từ 0 đến 9. Có bao nhiêu mã khóa có 4 chữ số khác nhau?",
         "options": {"A": "$5040$", "B": "$10000$", "C": "$4536$", "D": "$720$"},
         "correct": "A", "explanation": "Số mã khóa là $A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$."},
        {"id": 12, "question": "**Câu 12:** Chọn ngẫu nhiên một số tự nhiên có 2 chữ số từ 10 đến 99. Xác suất để số được chọn chia hết cho 9 bằng",
         "options": {"A": "$\\frac{1}{9}$", "B": "$\\frac{1}{10}$", "C": "$\\frac{11}{90}$", "D": "$\\frac{1}{5}$"},
         "correct": "A", "explanation": "Có $99 - 10 + 1 = 90$ số. Các số chia hết cho 9 là $\{18, 27, \\dots, 99\}$ gồm $(99-18)/9 + 1 = 10$ số. Xác suất $10/90 = 1/9$."}
    ]

    raw_tfs_1 = [
        {"id": 1, "question": "**Câu 1:** Cho tập hợp các chữ số $A = \{0, 1, 2, 3, 4, 5\}$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Có thể lập được 600 số tự nhiên có 4 chữ số bất kỳ từ tập $A$.", "correct": False, "explanation": "Chữ số đầu có 5 cách chọn, 3 chữ số sau mỗi vị trí có 6 cách chọn $\\Rightarrow 5 \\times 6^3 = 1080 \\ne 600$."},
             {"id": "b", "text": "Có thể lập được 300 số tự nhiên có 4 chữ số đôi một khác nhau từ tập $A$.", "correct": True, "explanation": "Chữ số hàng nghìn có 5 cách (khác 0), 3 chữ số còn lại có $A_5^3 = 60$ cách $\\Rightarrow 5 \\times 60 = 300$ số."},
             {"id": "c", "text": "Trong các số tự nhiên có 4 chữ số khác nhau lập từ $A$, có 156 số là số chẵn.", "correct": True, "explanation": "Tận cùng là 0: $A_5^3 = 60$. Tận cùng là 2 hoặc 4: $2 \\times (4 \\times A_4^2) = 2 \\times 48 = 96$. Tổng là $60 + 96 = 156$ số."},
             {"id": "d", "text": "Số các số tự nhiên có 4 chữ số khác nhau lập từ $A$ và chia hết cho 5 là $120$.", "correct": False, "explanation": "Tận cùng là 0: 60 số. Tận cùng là 5: $4 \\times A_4^2 = 48$ số. Tổng là $60 + 48 = 108 \\ne 120$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Xét khai triển nhị thức $(2x - 3)^6 = a_6 x^6 + a_5 x^5 + \\dots + a_1 x + a_0$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Khai triển có tất cả 7 số hạng.", "correct": True, "explanation": "Khai triển nhị thức bậc $n$ có $n + 1$ số hạng, ở đây $6 + 1 = 7$."},
             {"id": "b", "text": "Hệ số tự do (không chứa $x$) $a_0 = 729$.", "correct": True, "explanation": "$a_0 = (-3)^6 = 729$."},
             {"id": "c", "text": "Hệ số của $x^5$ trong khai triển bằng $-576$.", "correct": True, "explanation": "Số hạng chứa $x^5$ là $C_6^1 (2x)^5 (-3)^1 = 6 \\times 32 \\times (-3) x^5 = -576 x^5$."},
             {"id": "d", "text": "Tổng tất cả các hệ số trong khai triển bằng 1.", "correct": True, "explanation": "Thay $x = 1$: $(2(1) - 3)^6 = (-1)^6 = 1$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một tổ làm việc gồm 6 nam và 4 nữ. Cần lập một ban thường trực gồm 4 người. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Tổng số cách chọn 4 người tùy ý là $210$ cách.", "correct": True, "explanation": "$C_{10}^4 = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$ cách."},
             {"id": "b", "text": "Số cách chọn có đúng 2 nam và 2 nữ là $90$ cách.", "correct": True, "explanation": "$C_6^2 \\times C_4^2 = 15 \\times 6 = 90$ cách."},
             {"id": "c", "text": "Số cách chọn có ít nhất một nữ là $195$ cách.", "correct": True, "explanation": "Biến cố đối là chọn toàn nam: $C_6^4 = 15$. Số cách có ít nhất một nữ: $210 - 15 = 195$ cách."},
             {"id": "d", "text": "Số cách chọn sao cho số nam nhiều hơn số nữ là $115$ cách.", "correct": True, "explanation": "Các trường hợp nam > nữ: (4 nam, 0 nữ) có $C_6^4 = 15$; (3 nam, 1 nữ) có $C_6^3 \\times C_4^1 = 20 \\times 4 = 80$. Tổng là $15 + 80 = 95 \\ne 115$. Khẳng định d SAI."}
         ]},
        {"id": 4, "question": "**Câu 4:** Một bài thi trắc nghiệm gồm 4 câu hỏi, mỗi câu có 4 phương án trả lời trong đó chỉ có 1 phương án đúng. Một thí sinh chọn ngẫu nhiên một phương án cho mỗi câu. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số phần tử của không gian mẫu bằng $256$.", "correct": True, "explanation": "$n(\\Omega) = 4^4 = 256$."},
             {"id": "b", "text": "Xác suất để thí sinh trả lời đúng tất cả 4 câu là $\\frac{1}{256}$.", "correct": True, "explanation": "$(1/4)^4 = 1/256$."},
             {"id": "c", "text": "Xác suất để thí sinh trả lời sai cả 4 câu là $\\frac{81}{256}$.", "correct": True, "explanation": "$(3/4)^4 = 81/256$."},
             {"id": "d", "text": "Xác suất để thí sinh trả lời đúng đúng 2 câu bằng $\\frac{27}{128}$.", "correct": True, "explanation": "$C_4^2 \\times (1/4)^2 \\times (3/4)^2 = 6 \\times \\frac{9}{256} = \\frac{54}{256} = \\frac{27}{128}$."}
         ]}
    ]
    raw_tfs_1[2]["items"][3]["correct"] = False

    raw_sa_1 = [
        {"id": 1, "question": "**Câu 1:** Có bao nhiêu cách xếp 5 bạn học sinh ngồi vào một dãy gồm 5 chiếc ghế kê thẳng hàng?",
         "correctAnswer": "120", "acceptedAnswers": ["120", "120.0"],
         "explanation": "Số hoán vị của 5 bạn: $5! = 120$ cách."},
        {"id": 2, "question": "**Câu 2:** Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(x + 2)^5$.",
         "correctAnswer": "40", "acceptedAnswers": ["40", "40.0"],
         "explanation": "Số hạng chứa $x^3$ là $C_5^3 x^3 2^2 = 10 \\times 4 x^3 = 40x^3$. Hệ số là 40."},
        {"id": 3, "question": "**Câu 3:** Có bao nhiêu số tự nhiên có 5 chữ số đôi một khác nhau được lập từ các chữ số $\{1, 2, 3, 4, 5, 6\}$ sao cho số đó luôn là số lẻ?",
         "correctAnswer": "360", "acceptedAnswers": ["360", "360.0"],
         "explanation": "Chữ số tận cùng có 3 cách chọn ($\{1, 3, 5\}$). Bốn chữ số đứng trước có $A_5^4 = 120$ cách chọn. Tổng số các số lẻ là $3 \\times 120 = 360$."},
        {"id": 4, "question": "**Câu 4:** Một hộp có 5 viên bi đỏ và 7 viên bi xanh. Lấy ngẫu nhiên đồng thời 3 viên bi. Tính xác suất để lấy được ít nhất 1 viên bi màu đỏ (làm tròn kết quả đến hàng phần trăm).",
         "correctAnswer": "0.84", "acceptedAnswers": ["0.84", "0,84"],
         "explanation": "Biến cố đối là lấy được 3 viên bi xanh: $P(\\overline{A}) = \\frac{C_7^3}{C_{12}^3} = \\frac{35}{220} = \\frac{7}{44} \\approx 0.159$. Xác suất lấy ít nhất 1 bi đỏ: $P(A) = 1 - 7/44 = 37/44 \\approx 0.8409 \\approx 0.84$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Có bao nhiêu số tự nhiên có 6 chữ số đôi một khác nhau được lập từ tập các chữ số $\{0, 1, 2, 3, 4, 5, 6, 7\}$ sao cho số đó chia hết cho 5 và hai chữ số 1 và 2 luôn đứng cạnh nhau?",
         "correctAnswer": "888", "acceptedAnswers": ["888", "888.0"],
         "explanation": "Để số chia hết cho 5, chữ số tận cùng $a_6 \\in \{0, 5\}$. Hai chữ số 1 và 2 luôn đứng cạnh nhau coi như một khối kép $B = (12)$ hoặc $(21)$ (có 2 hoán vị). Xét 2 trường hợp tận cùng kết hợp loại trừ chữ số hàng đầu bằng 0, tính tổng các cấu hình được chính xác 888 số."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một trung tâm an ninh mạng có 8 chuyên gia mật mã và 7 chuyên gia an toàn thông tin. Cần thành lập một tổ công tác phản ứng nhanh gồm 6 người, yêu cầu phải có cả chuyên gia mật mã và chuyên gia an toàn thông tin, trong đó số chuyên gia mật mã nhiều hơn số chuyên gia an toàn thông tin. Đồng thời, hai chuyên gia kỳ cựu $A$ (mật mã) và $B$ (an toàn thông tin) không thể cùng tham gia tổ công tác. Hỏi có bao nhiêu cách lập tổ công tác thỏa mãn các yêu cầu trên?",
         "correctAnswer": "1617", "acceptedAnswers": ["1617", "1617.0"],
         "explanation": "Số chuyên gia mật mã (M) > an toàn thông tin (T) và có đủ cả hai loại nên có hai cơ cấu: (5 M, 1 T) hoặc (4 M, 2 T). Cơ cấu (5 M, 1 T): có $C_8^5 \\times C_7^1 = 392$ cách; nếu cả A và B cùng tham gia thì có $C_7^4 \\times C_6^0 = 35$ cách $\\Rightarrow 392 - 35 = 357$ cách. Cơ cấu (4 M, 2 T): có $C_8^4 \\times C_7^2 = 70 \\times 21 = 1470$ cách; nếu cả A và B cùng tham gia thì có $C_7^3 \\times C_6^1 = 35 \\times 6 = 210$ cách $\\Rightarrow 1470 - 210 = 1260$ cách. Tổng số cách thỏa mãn là $357 + 1260 = 1617$ cách."}
    ]

    exam1 = {
        "id": "cd4-exam-1", "examNumber": 1, "title": "Đề Số 1: Mã Hóa Bảo Mật & Xác Thực Hệ Thống",
        "code": "CD4-401", "badge": "Mã Đề 401", "badgeColor": "bg-blue-50 text-blue-800 border-blue-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_1, 401), "tfQuestions": raw_tfs_1, "saQuestions": raw_sa_1, "essayQuestions": []
    }
    validate_exam(exam1)
    exams.append(exam1)

    # ==========================================
    # ĐỀ 2 (MÃ 402): Phân công ca trực & hội đồng kiểm định
    # ==========================================
    raw_mcqs_2 = [
        {"id": 1, "question": "**Câu 1:** Một thực đơn ăn trưa có 4 món khai vị và 6 món chính. Một khách hàng muốn chọn 1 món khai vị và 1 món chính. Số cách chọn là",
         "options": {"A": "$24$", "B": "$10$", "C": "$12$", "D": "$16$"},
         "correct": "A", "explanation": "Theo quy tắc nhân: $4 \\times 6 = 24$ cách."},
        {"id": 2, "question": "**Câu 2:** Có bao nhiêu cách sắp xếp 4 bạn học sinh thành một hàng dọc?",
         "options": {"A": "$24$", "B": "$16$", "C": "$12$", "D": "$4$"},
         "correct": "A", "explanation": "$4! = 24$ cách."},
        {"id": 3, "question": "**Câu 3:** Khẳng định nào sau đây là SAI về tổ hợp và chỉnh hợp?",
         "options": {"A": "$A_n^k = k! \\cdot C_n^k$", "B": "$C_n^k = C_n^{n-k}$", "C": "$C_n^k = A_n^k$", "D": "$C_n^0 = 1$"},
         "correct": "C", "explanation": "$C_n^k = \\frac{A_n^k}{k!}$ nên không thể bằng $A_n^k$ khi $k > 1$."},
        {"id": 4, "question": "**Câu 4:** Số cách chọn đồng thời 2 viên kẹo từ gói kẹo gồm 8 viên kẹo khác nhau là",
         "options": {"A": "$28$", "B": "$56$", "C": "$16$", "D": "$64$"},
         "correct": "A", "explanation": "$C_8^2 = \\frac{8 \\times 7}{2} = 28$ cách."},
        {"id": 5, "question": "**Câu 5:** Gieo đồng thời hai con xúc xắc cân đối. Xác suất để tổng số chấm xuất hiện trên hai con xúc xắc bằng 7 là",
         "options": {"A": "$\\frac{1}{6}$", "B": "$\\frac{1}{12}$", "C": "$\\frac{5}{36}$", "D": "$\\frac{7}{36}$"},
         "correct": "A", "explanation": "Các cặp có tổng bằng 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ gồm 6 cặp. Xác suất $6/36 = 1/6$."},
        {"id": 6, "question": "**Câu 6:** Có bao nhiêu đoạn thẳng nối các đỉnh của một bát giác đều 8 đỉnh?",
         "options": {"A": "$28$", "B": "$20$", "C": "$56$", "D": "$16$"},
         "correct": "A", "explanation": "Mỗi đoạn thẳng nối 2 đỉnh là một tổ hợp chập 2 của 8 đỉnh: $C_8^2 = 28$."},
        {"id": 7, "question": "**Câu 7:** Hệ số của $x^3$ trong khai triển nhị thức $(2x + 1)^4$ bằng",
         "options": {"A": "$32$", "B": "$8$", "C": "$16$", "D": "$24$"},
         "correct": "A", "explanation": "Số hạng là $C_4^3 (2x)^3 (1)^1 = 4 \\times 8x^3 = 32x^3$."},
        {"id": 8, "question": "**Câu 8:** Một túi có 5 quả bóng trắng và 3 quả bóng đen. Lấy ngẫu nhiên 1 quả bóng. Xác suất lấy được bóng đen bằng",
         "options": {"A": "$\\frac{3}{8}$", "B": "$\\frac{5}{8}$", "C": "$\\frac{3}{5}$", "D": "$\\frac{1}{3}$"},
         "correct": "A", "explanation": "Có 3 bóng đen trên tổng 8 quả, xác suất bằng $3/8$."},
        {"id": 9, "question": "**Câu 9:** Cho tập hợp $X$ gồm 6 phần tử. Số tập hợp con gồm 3 phần tử của $X$ là",
         "options": {"A": "$20$", "B": "$120$", "C": "$18$", "D": "$30$"},
         "correct": "A", "explanation": "$C_6^3 = \\frac{6 \\times 5 \\times 4}{6} = 20$."},
        {"id": 10, "question": "**Câu 10:** Số đường chéo của một đa giác lồi 10 cạnh bằng",
         "options": {"A": "$35$", "B": "$45$", "C": "$10$", "D": "$20$"},
         "correct": "A", "explanation": "Số đường chéo là $C_{10}^2 - 10 = 45 - 10 = 35$."},
        {"id": 11, "question": "**Câu 11:** Trong khai triển $(x - 1)^6$, số hạng chính giữa là số hạng thứ mấy?",
         "options": {"A": "Số hạng thứ 4", "B": "Số hạng thứ 3", "C": "Số hạng thứ 5", "D": "Số hạng thứ 6"},
         "correct": "A", "explanation": "Khai triển có $6 + 1 = 7$ số hạng nên số hạng chính giữa là số hạng thứ 4."},
        {"id": 12, "question": "**Câu 12:** Gieo một con xúc xắc 2 lần. Biến cố 'Mặt 6 chấm xuất hiện ít nhất một lần' có số phần tử bằng",
         "options": {"A": "$11$", "B": "$12$", "C": "$10$", "D": "$6$"},
         "correct": "A", "explanation": "Biến cố đối là không xuất hiện mặt 6 ở cả 2 lần: $5 \\times 5 = 25$. Số phần tử cần tìm là $36 - 25 = 11$."}
    ]

    raw_tfs_2 = [
        {"id": 1, "question": "**Câu 1:** Một tủ sách gồm 8 cuốn sách Toán khác nhau và 6 cuốn sách Văn khác nhau. Lấy ngẫu nhiên 3 cuốn sách. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Tổng số cách lấy 3 cuốn sách tùy ý là $364$ cách.", "correct": True, "explanation": "$C_{14}^3 = \\frac{14 \\times 13 \\times 12}{6} = 364$ cách."},
             {"id": "b", "text": "Số cách lấy được cả 3 cuốn đều là sách Toán là $56$ cách.", "correct": True, "explanation": "$C_8^3 = \\frac{8 \\times 7 \\times 6}{6} = 56$ cách."},
             {"id": "c", "text": "Số cách lấy được ít nhất 1 cuốn sách Văn là $308$ cách.", "correct": True, "explanation": "$364 - 56 = 308$ cách."},
             {"id": "d", "text": "Xác suất để lấy được 2 cuốn Toán và 1 cuốn Văn lớn hơn $0.5$.", "correct": False, "explanation": "Số cách lấy 2 Toán 1 Văn: $C_8^2 \\times C_6^1 = 28 \\times 6 = 168$. Xác suất $168/364 \\approx 0.4615 < 0.5$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Xét phương trình $C_n^2 = 21$ ($n \\in \\mathbb{N}, n \\ge 2$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Phương trình tương đương với $n(n - 1) = 42$.", "correct": True, "explanation": "$C_n^2 = \\frac{n(n-1)}{2} = 21 \\Rightarrow n(n-1) = 42$."},
             {"id": "b", "text": "Giá trị của $n$ thỏa mãn phương trình là $n = 7$.", "correct": True, "explanation": "$7 \\times 6 = 42$ nên $n = 7$."},
             {"id": "c", "text": "Với giá trị $n$ tìm được, $A_n^3 = 210$.", "correct": True, "explanation": "$A_7^3 = 7 \\times 6 \\times 5 = 210$."},
             {"id": "d", "text": "Với giá trị $n$ tìm được, số tập con có 4 phần tử của tập hợp $n$ phần tử là $28$.", "correct": False, "explanation": "$C_7^4 = C_7^3 = 35 \\ne 28$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Một bệnh viện phân công ca trực cấp cứu ban đêm gồm 5 bác sĩ từ danh sách 12 bác sĩ gồm 7 nam và 5 nữ. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số cách chọn 5 bác sĩ trực tùy ý là $792$ cách.", "correct": True, "explanation": "$C_{12}^5 = 792$ cách."},
             {"id": "b", "text": "Số cách chọn 5 bác sĩ trong đó có đúng 3 nam và 2 nữ là $350$ cách.", "correct": True, "explanation": "$C_7^3 \\times C_5^2 = 35 \\times 10 = 350$ cách."},
             {"id": "c", "text": "Số cách chọn mà có ít nhất 1 bác sĩ nữ là $771$ cách.", "correct": True, "explanation": "Biến cố đối là toàn nam: $C_7^5 = 21$. Số cách là $792 - 21 = 771$ cách."},
             {"id": "d", "text": "Nếu vợ chồng bác sĩ An và Bình (nằm trong danh sách) không thể cùng trực một ca, thì số cách chọn là $650$ cách.", "correct": False, "explanation": "Số cách cả hai cùng trực: $C_{10}^3 = 120$. Số cách thỏa mãn là $792 - 120 = 672 \\ne 650$."}
         ]},
        {"id": 4, "question": "**Câu 4:** Khai triển nhị thức $(3x - 1)^5$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Hệ số của số hạng có bậc cao nhất là $243$.", "correct": True, "explanation": "$3^5 = 243$."},
             {"id": "b", "text": "Hệ số tự do của khai triển là $1$.", "correct": False, "explanation": "$(-1)^5 = -1 \\ne 1$."},
             {"id": "c", "text": "Hệ số của $x^4$ trong khai triển là $-405$.", "correct": True, "explanation": "$C_5^1 (3x)^4 (-1) = 5 \\times 81 \\times (-1) x^4 = -405 x^4$."},
             {"id": "d", "text": "Tổng các hệ số của khai triển bằng $32$.", "correct": True, "explanation": "Cho $x = 1$: $(3(1) - 1)^5 = 2^5 = 32$."}
         ]}
    ]

    raw_sa_2 = [
        {"id": 1, "question": "**Câu 1:** Tính giá trị của $C_{10}^4$.",
         "correctAnswer": "210", "acceptedAnswers": ["210", "210.0"],
         "explanation": "$C_{10}^4 = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$."},
        {"id": 2, "question": "**Câu 2:** Tìm hệ số của $x^4$ trong khai triển $(2x + 1)^6$.",
         "correctAnswer": "240", "acceptedAnswers": ["240", "240.0"],
         "explanation": "$C_6^4 (2x)^4 (1)^2 = 15 \\times 16 x^4 = 240 x^4$. Hệ số là 240."},
        {"id": 3, "question": "**Câu 3:** Có bao nhiêu số tự nhiên gồm 4 chữ số khác nhau lập từ các chữ số $\{1, 2, 3, 4, 5, 6, 7\}$ sao cho chữ số hàng nghìn luôn là chữ số 7?",
         "correctAnswer": "120", "acceptedAnswers": ["120", "120.0"],
         "explanation": "Chữ số hàng nghìn cố định là 7. Ba vị trí còn lại chọn từ 6 chữ số: $A_6^3 = 6 \\times 5 \\times 4 = 120$ số."},
        {"id": 4, "question": "**Câu 4:** Gieo một con xúc xắc cân đối hai lần liên tiếp. Tính xác suất để cả hai lần gieo đều xuất hiện mặt có số chấm chia hết cho 3.",
         "correctAnswer": "0.11", "acceptedAnswers": ["0.11", "0,11", "1/9"],
         "explanation": "Các mặt chia hết cho 3 là $\{3, 6\}$ (2 mặt). Xác suất mỗi lần là $2/6 = 1/3$. Xác suất cả hai lần là $(1/3)^2 = 1/9 \\approx 0.1111 \\approx 0.11$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Từ các chữ số $\{0, 1, 2, 3, 4, 5, 6\}$, có thể lập được bao nhiêu số tự nhiên chẵn gồm 5 chữ số đôi một khác nhau sao cho chữ số hàng chục nghìn nhỏ hơn chữ số hàng đơn vị?",
         "correctAnswer": "540", "acceptedAnswers": ["540", "540.0"],
         "explanation": "Số tự nhiên chẵn $\\overline{a_1 a_2 a_3 a_4 a_5}$ có chữ số tận cùng $a_5 \\in \{0, 2, 4, 6\}$. Điều kiện $1 \\le a_1 < a_5$: do đó $a_5$ chỉ có thể nhận các giá trị trong $\{2, 4, 6\}$. Với $a_5 = 2$: $a_1 = 1$ (1 cách), 3 vị trí giữa chọn từ 5 chữ số còn lại có $A_5^3 = 60$ cách $\\Rightarrow 60$ số. Với $a_5 = 4$: $a_1 \\in \{1, 2, 3\}$ (3 cách), 3 vị trí giữa có $A_5^3 = 60$ cách $\\Rightarrow 180$ số. Với $a_5 = 6$: $a_1 \\in \{1, 2, 3, 4, 5\}$ (5 cách), 3 vị trí giữa có $A_5^3 = 60$ cách $\\Rightarrow 300$ số. Tổng số các số thỏa mãn là $60 + 180 + 300 = 540$ số."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một hội đồng thi tốt nghiệp THPT gồm 15 thầy cô: 7 giáo viên Toán, 5 giáo viên Lí và 3 giáo viên Hóa. Cần thành lập một ban kiểm định chất lượng đề thi gồm 5 người sao cho phải có đủ cả 3 bộ môn, đồng thời số lượng giáo viên Toán không ít hơn số lượng giáo viên Lí. Hỏi có tất cả bao nhiêu cách lập ban kiểm định thỏa mãn yêu cầu?",
         "correctAnswer": "1505", "acceptedAnswers": ["1505", "1505.0"],
         "explanation": "Gọi $(t, l, h)$ lần lượt là số giáo viên Toán, Lí, Hóa. Ta có $t + l + h = 5$, $t, l, h \\ge 1$ và $t \\ge l$. Các trường hợp: TH1: $(3, 1, 1) \\Rightarrow C_7^3 \\times C_5^1 \\times C_3^1 = 35 \\times 5 \\times 3 = 525$. TH2: $(2, 2, 1) \\Rightarrow C_7^2 \\times C_5^2 \\times C_3^1 = 21 \\times 10 \\times 3 = 630$. TH3: $(2, 1, 2) \\Rightarrow C_7^2 \\times C_5^1 \\times C_3^2 = 21 \\times 5 \\times 3 = 315$. TH4: $(1, 1, 3) \\Rightarrow C_7^1 \\times C_5^1 \\times C_3^3 = 7 \\times 5 \\times 1 = 35$. Tổng số cách là $525 + 630 + 315 + 35 = 1505$ cách."}
    ]

    exam2 = {
        "id": "cd4-exam-2", "examNumber": 2, "title": "Đề Số 2: Phân Công Ca Trực & Hội Đồng Kiểm Định",
        "code": "CD4-402", "badge": "Mã Đề 402", "badgeColor": "bg-emerald-50 text-emerald-800 border-emerald-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_2, 402), "tfQuestions": raw_tfs_2, "saQuestions": raw_sa_2, "essayQuestions": []
    }
    validate_exam(exam2)
    exams.append(exam2)

    # ==========================================
    # ĐỀ 3 (MÃ 403): Xếp chỗ ngồi & chia kẹo Euler
    # ==========================================
    raw_mcqs_3 = [
        {"id": 1, "question": "**Câu 1:** Có bao nhiêu cách chọn 1 bạn nam và 1 bạn nữ từ một nhóm gồm 6 bạn nam và 8 bạn nữ?",
         "options": {"A": "$48$", "B": "$14$", "C": "$28$", "D": "$24$"},
         "correct": "A", "explanation": "Quy tắc nhân: $6 \\times 8 = 48$ cách."},
        {"id": 2, "question": "**Câu 2:** Cho tập hợp $S$ gồm 10 phần tử. Số chỉnh hợp chập 2 của 10 phần tử là",
         "options": {"A": "$90$", "B": "$45$", "C": "$100$", "D": "$20$"},
         "correct": "A", "explanation": "$A_{10}^2 = 10 \\times 9 = 90$."},
        {"id": 3, "question": "**Câu 3:** Hệ số của $x^2$ trong khai triển nhị thức $(x + 1)^5$ bằng",
         "options": {"A": "$10$", "B": "$5$", "C": "$20$", "D": "$1$"},
         "correct": "A", "explanation": "$C_5^2 = 10$."},
        {"id": 4, "question": "**Câu 4:** Có 6 học sinh xếp vào một vòng tròn. Số cách xếp các bạn vào bàn tròn là",
         "options": {"A": "$120$", "B": "$720$", "C": "$24$", "D": "$36$"},
         "correct": "A", "explanation": "Số hoán vị vòng quanh của $n$ phần tử là $(n - 1)! = 5! = 120$ cách."},
        {"id": 5, "question": "**Câu 5:** Gieo một đồng xu cân đối hai lần. Xác suất để xuất hiện ít nhất một mặt ngửa là",
         "options": {"A": "$\\frac{3}{4}$", "B": "$\\frac{1}{2}$", "C": "$\\frac{1}{4}$", "D": "$\\frac{2}{3}$"},
         "correct": "A", "explanation": "Biến cố đối là xuất hiện 2 mặt sấp $(SS)$ có xác suất $1/4$. Vậy $P = 1 - 1/4 = 3/4$."},
        {"id": 6, "question": "**Câu 6:** Có bao nhiêu cách chọn 4 bông hoa từ một bình hoa chứa 9 bông hoa khác nhau?",
         "options": {"A": "$126$", "B": "$3024$", "C": "$36$", "D": "$24$"},
         "correct": "A", "explanation": "$C_9^4 = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 126$."},
        {"id": 7, "question": "**Câu 7:** Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 1 học sinh làm lớp trưởng. Có bao nhiêu cách chọn?",
         "options": {"A": "$35$", "B": "$300$", "C": "$20$", "D": "$15$"},
         "correct": "A", "explanation": "Quy tắc cộng: $20 + 15 = 35$ cách."},
        {"id": 8, "question": "**Câu 8:** Trong khai triển $(2x - y)^4$, số hạng thứ 3 có hệ số bằng",
         "options": {"A": "$24$", "B": "$-32$", "C": "$16$", "D": "$-8$"},
         "correct": "A", "explanation": "Số hạng thứ 3 là $C_4^2 (2x)^2 (-y)^2 = 6 \\times 4 x^2 y^2 = 24 x^2 y^2$."},
        {"id": 9, "question": "**Câu 9:** Chọn ngẫu nhiên 2 số từ tập $\{1, 2, 3, 4, 5, 6\}$. Xác suất để tích của 2 số là số chẵn bằng",
         "options": {"A": "$\\frac{4}{5}$", "B": "$\\frac{1}{5}$", "C": "$\\frac{1}{2}$", "D": "$\\frac{2}{3}$"},
         "correct": "A", "explanation": "Tích là số lẻ khi cả hai số đều lẻ $\\{1, 3, 5\\}$ có $C_3^2 = 3$ cách. Tổng số cách $C_6^2 = 15$. Xác suất tích chẵn là $1 - 3/15 = 12/15 = 4/5$."},
        {"id": 10, "question": "**Câu 10:** Số tập con có đúng 2 phần tử của một tập hợp có $n$ phần tử ($n \\ge 2$) được cho bởi biểu thức",
         "options": {"A": "$\\frac{n(n - 1)}{2}$", "B": "$n(n - 1)$", "C": "$n^2$", "D": "$\\frac{n(n + 1)}{2}$"},
         "correct": "A", "explanation": "$C_n^2 = \\frac{n(n-1)}{2}$."},
        {"id": 11, "question": "**Câu 11:** Có bao nhiêu số tự nhiên có 2 chữ số mà cả hai chữ số đều là số chẵn?",
         "options": {"A": "$20$", "B": "$25$", "C": "$16$", "D": "$24$"},
         "correct": "A", "explanation": "Chữ số đầu có 4 cách $\\{2, 4, 6, 8\\}$, chữ số sau có 5 cách $\\{0, 2, 4, 6, 8\\} \\Rightarrow 4 \\times 5 = 20$ số."},
        {"id": 12, "question": "**Câu 12:** Khai triển $(a + b)^n$ có bao nhiêu số hạng?",
         "options": {"A": "$n + 1$", "B": "$n$", "C": "$n - 1$", "D": "$2n$"},
         "correct": "A", "explanation": "Khai triển nhị thức bậc $n$ luôn có $n + 1$ số hạng."}
    ]

    raw_tfs_3 = [
        {"id": 1, "question": "**Câu 1:** Xếp 4 bạn nam và 3 bạn nữ ngồi vào một dãy ghế có 7 chỗ ngồi. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số cách xếp tùy ý 7 bạn là $5040$ cách.", "correct": True, "explanation": "$7! = 5040$ cách."},
             {"id": "b", "text": "Số cách xếp các bạn nữ luôn ngồi cạnh nhau là $720$ cách.", "correct": True, "explanation": "Gộp 3 bạn nữ thành 1 phần tử: $5! \\times 3! = 120 \\times 6 = 720$ cách."},
             {"id": "c", "text": "Số cách xếp nam nữ xen kẽ nhau là $144$ cách.", "correct": True, "explanation": "Vì có 4 nam và 3 nữ nên chỉ có thứ tự N-Nu-N-Nu-N-Nu-N: $4! \\times 3! = 24 \\times 6 = 144$ cách."},
             {"id": "d", "text": "Số cách xếp sao cho không có 2 bạn nữ nào ngồi cạnh nhau là $1200$ cách.", "correct": False, "explanation": "Xếp 4 nam có $4! = 24$ cách, tạo ra 5 khoảng trống. Chọn 3 khoảng trống cho 3 nữ có $A_5^3 = 60$ cách $\\Rightarrow 24 \\times 60 = 1440 \\ne 1200$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Cho tập hợp $A = \{1, 2, 3, 4, 5, 6, 7\}$. Lập các số tự nhiên có 4 chữ số khác nhau từ $A$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Tổng số các số lập được là $840$ số.", "correct": True, "explanation": "$A_7^4 = 7 \\times 6 \\times 5 \\times 4 = 840$."},
             {"id": "b", "text": "Có $360$ số chẵn được tạo thành.", "correct": True, "explanation": "Chữ số tận cùng có 3 cách ($\\{2, 4, 6\\}$). Ba chữ số đầu có $A_6^3 = 120$ cách $\\Rightarrow 3 \\times 120 = 360$ số."},
             {"id": "c", "text": "Số các số chia hết cho 5 là $120$ số.", "correct": True, "explanation": "Chữ số tận cùng là 5 (1 cách), ba vị trí đầu có $A_6^3 = 120$ cách."},
             {"id": "d", "text": "Có $240$ số luôn bắt đầu bằng chữ số 1 và kết thúc bằng chữ số 7.", "correct": False, "explanation": "Cố định vị trí đầu và cuối, còn lại 2 vị trí chọn từ 5 chữ số: $A_5^2 = 20 \\ne 240$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Khai triển $(x^2 - \\frac{2}{x})^6$ ($x \\ne 0$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số hạng tổng quát thứ $k+1$ là $C_6^k (-2)^k x^{12 - 3k}$.", "correct": True, "explanation": "$C_6^k (x^2)^{6-k} (-2/x)^k = C_6^k (-2)^k x^{12-2k-k} = C_6^k (-2)^k x^{12-3k}$."},
             {"id": "b", "text": "Khai triển có số hạng không chứa $x$ ứng với $k = 4$.", "correct": True, "explanation": "$12 - 3k = 0 \\Rightarrow k = 4$."},
             {"id": "c", "text": "Số hạng không chứa $x$ bằng $240$.", "correct": True, "explanation": "$C_6^4 (-2)^4 = 15 \\times 16 = 240$."},
             {"id": "d", "text": "Hệ số của $x^6$ trong khai triển bằng $60$.", "correct": False, "explanation": "$12 - 3k = 6 \\Rightarrow 3k = 6 \\Rightarrow k = 2$. Hệ số là $C_6^2 (-2)^2 = 15 \\times 4 = 60$. Khẳng định này là ĐÚNG. Đổi thành bằng $-60$ -> SAI."}
         ]},
        {"id": 4, "question": "**Câu 4:** Một hộp có 6 quả cầu xanh và 4 quả cầu đỏ. Lấy ngẫu nhiên lần lượt từng quả cầu không hoàn lại cho đến khi lấy được quả cầu đỏ thì dừng. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Xác suất để dừng lại ở lần lấy thứ nhất bằng $\\frac{2}{5}$.", "correct": True, "explanation": "$4/10 = 2/5$."},
             {"id": "b", "text": "Xác suất để dừng lại ở lần lấy thứ hai bằng $\\frac{4}{15}$.", "correct": True, "explanation": "Lần 1 xanh, lần 2 đỏ: $\\frac{6}{10} \\times \\frac{4}{9} = \\frac{24}{90} = \\frac{4}{15}$."},
             {"id": "c", "text": "Số lần lấy tối đa để dừng lại là 7 lần.", "correct": True, "explanation": "Nếu lấy hết cả 6 quả xanh thì quả thứ 7 chắc chắn là đỏ."},
             {"id": "d", "text": "Xác suất để phải lấy đến lần thứ 4 mới dừng lại lớn hơn $0.1$.", "correct": False, "explanation": "3 quả đầu xanh, quả thứ 4 đỏ: $\\frac{6}{10} \\times \\frac{5}{9} \\times \\frac{4}{8} \\times \\frac{4}{7} = \\frac{2}{21} \\approx 0.0952 < 0.1$."}
         ]}
    ]
    raw_tfs_3[2]["items"][3]["text"] = "Hệ số của $x^6$ trong khai triển bằng $-60$."
    raw_tfs_3[2]["items"][3]["correct"] = False

    raw_sa_3 = [
        {"id": 1, "question": "**Câu 1:** Có bao nhiêu cách chọn 3 phần tử từ một tập hợp gồm 8 phần tử phân biệt?",
         "correctAnswer": "56", "acceptedAnswers": ["56", "56.0"],
         "explanation": "$C_8^3 = \\frac{8 \\times 7 \\times 6}{6} = 56$."},
        {"id": 2, "question": "**Câu 2:** Tìm số hạng không chứa $x$ trong khai triển $(x + \\frac{1}{x})^4$.",
         "correctAnswer": "6", "acceptedAnswers": ["6", "6.0"],
         "explanation": "Số hạng không chứa $x$ ứng với $k = 2$: $C_4^2 = 6$."},
        {"id": 3, "question": "**Câu 3:** Một ban chấp hành đoàn trường gồm 10 bạn. Cần bầu ra một bí thư, một phó bí thư và một ủy viên thường trực. Có bao nhiêu cách phân công nhân sự?",
         "correctAnswer": "720", "acceptedAnswers": ["720", "720.0"],
         "explanation": "Có tính thứ tự chức vụ: $A_{10}^3 = 10 \\times 9 \\times 8 = 720$ cách."},
        {"id": 4, "question": "**Câu 4:** Gieo một con xúc xắc cân đối liên tiếp 3 lần. Tính xác suất để ít nhất một lần xuất hiện mặt 1 chấm (làm tròn kết quả đến hàng phần trăm).",
         "correctAnswer": "0.42", "acceptedAnswers": ["0.42", "0,42"],
         "explanation": "Xác suất không có mặt 1 chấm nào là $(5/6)^3 = 125/216$. Xác suất có ít nhất 1 lần là $1 - 125/216 = 91/216 \\approx 0.4213 \\approx 0.42$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Có 10 bạn học sinh gồm 6 bạn nam (trong đó có bạn An) và 4 bạn nữ (trong đó có bạn Bình) xếp thành một hàng dọc. Hỏi có bao nhiêu cách sắp xếp sao cho không có hai bạn nữ nào đứng cạnh nhau, đồng thời bạn An luôn đứng trước bạn Bình?",
         "correctAnswer": "302400", "acceptedAnswers": ["302400", "302400.0"],
         "explanation": "Xếp 6 bạn nam thành hàng dọc có $6! = 720$ cách. Giữa các bạn nam và hai đầu tạo ra 7 khoảng trống để xếp 4 bạn nữ. Chọn 4 khoảng trống trong 7 khoảng trống có $C_7^4 = 35$ cách. Xếp 4 bạn nữ vào 4 vị trí đã chọn có $4! = 24$ cách. Tổng số cách xếp sao cho không có 2 bạn nữ nào đứng cạnh nhau là $720 \\times 35 \\times 24 = 604800$ cách. Do tính đối xứng hoán vị độc lập giữa An và Bình trong toàn bộ các cách xếp hợp lệ, số cách để An đứng trước Bình chiếm đúng một nửa: $604800 / 2 = 302400$ cách."},
        {"id": 6, "question": "**Câu 6 (VDC):** Có bao nhiêu bộ số nguyên $(x, y, z, t)$ thỏa mãn phương trình $x + y + z + t = 20$, với các điều kiện ràng buộc: $x \\ge 1$, $y \\ge 2$, $z \\ge 3$ và $1 \\le t \\le 6$?",
         "correctAnswer": "440", "acceptedAnswers": ["440", "440.0"],
         "explanation": "Đặt $x' = x - 1 \\ge 0, y' = y - 2 \\ge 0, z' = z - 3 \\ge 0, t' = t - 1$ với $0 \\le t' \\le 5$. Khi đó $x' + y' + z' + t' = 20 - 1 - 2 - 3 - 1 = 13$. Tổng số nghiệm nguyên không âm của 4 biến là $C_{13 + 4 - 1}^{4 - 1} = C_{16}^3 = 560$. Loại bỏ các trường hợp vi phạm $t' \\ge 6$: đặt $t'' = t' - 6 \\ge 0$, phương trình thành $x' + y' + z' + t'' = 13 - 6 = 7$. Số nghiệm vi phạm là $C_{7 + 4 - 1}^{4 - 1} = C_{10}^3 = 120$. Vậy số bộ nguyên thỏa mãn là $560 - 120 = 440$."}
    ]

    exam3 = {
        "id": "cd4-exam-3", "examNumber": 3, "title": "Đề Số 3: Xếp Chỗ Ngồi & Bài Toán Nghiệm Nguyên",
        "code": "CD4-403", "badge": "Mã Đề 403", "badgeColor": "bg-indigo-50 text-indigo-800 border-indigo-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_3, 403), "tfQuestions": raw_tfs_3, "saQuestions": raw_sa_3, "essayQuestions": []
    }
    validate_exam(exam3)
    exams.append(exam3)

    # ==========================================
    # ĐỀ 4 (MÃ 404): Hình học tổ hợp & đa giác đều
    # ==========================================
    raw_mcqs_4 = [
        {"id": 1, "question": "**Câu 1:** Một tam giác được xác định bởi bao nhiêu đỉnh không thẳng hàng?",
         "options": {"A": "$3$", "B": "$2$", "C": "$4$", "D": "$1$"},
         "correct": "A", "explanation": "Tam giác có 3 đỉnh không thẳng hàng."},
        {"id": 2, "question": "**Câu 2:** Cho 10 điểm phân biệt trên mặt phẳng sao cho không có 3 điểm nào thẳng hàng. Số tam giác có 3 đỉnh lấy từ 10 điểm đó là",
         "options": {"A": "$120$", "B": "$720$", "C": "$45$", "D": "$30$"},
         "correct": "A", "explanation": "$C_{10}^3 = 120$."},
        {"id": 3, "question": "**Câu 3:** Số cách chọn 2 bạn nam từ 7 bạn nam là",
         "options": {"A": "$21$", "B": "$42$", "C": "$14$", "D": "$49$"},
         "correct": "A", "explanation": "$C_7^2 = 21$."},
        {"id": 4, "question": "**Câu 4:** Gieo một con xúc xắc. Xác suất để số chấm xuất hiện lớn hơn 4 bằng",
         "options": {"A": "$\\frac{1}{3}$", "B": "$\\frac{1}{2}$", "C": "$\\frac{2}{3}$", "D": "$\\frac{1}{6}$"},
         "correct": "A", "explanation": "Các mặt lớn hơn 4 là $\{5, 6\}$ (2 mặt). Xác suất $2/6 = 1/3$."},
        {"id": 5, "question": "**Câu 5:** Hệ số của $x$ trong khai triển $(x + 3)^3$ bằng",
         "options": {"A": "$27$", "B": "$9$", "C": "$3$", "D": "$1$"},
         "correct": "A", "explanation": "$C_3^1 x (3^2) = 3 \\times 9 x = 27x$."},
        {"id": 6, "question": "**Câu 6:** Có bao nhiêu số tự nhiên gồm 3 chữ số khác nhau lập từ tập $\{1, 3, 5, 7, 9\}$?",
         "options": {"A": "$60$", "B": "$125$", "C": "$10$", "D": "$20$"},
         "correct": "A", "explanation": "$A_5^3 = 5 \\times 4 \\times 3 = 60$."},
        {"id": 7, "question": "**Câu 7:** Một tổ có 8 học sinh. Có bao nhiêu cách chọn 1 tổ trưởng và 1 tổ phó?",
         "options": {"A": "$56$", "B": "$28$", "C": "$64$", "D": "$16$"},
         "correct": "A", "explanation": "$A_8^2 = 56$."},
        {"id": 8, "question": "**Câu 8:** Tung 2 đồng xu cân đối. Xác suất để được 2 mặt giống nhau bằng",
         "options": {"A": "$\\frac{1}{2}$", "B": "$\\frac{1}{4}$", "C": "$\\frac{3}{4}$", "D": "$\\frac{1}{3}$"},
         "correct": "A", "explanation": "Có 2 kết quả thuận lợi $(SS, NN)$ trên 4 kết quả. Xác suất $2/4 = 1/2$."},
        {"id": 9, "question": "**Câu 9:** Cho $n \\in \\mathbb{N}^*$. Tổng $C_n^0 + C_n^1 + \\dots + C_n^n$ bằng",
         "options": {"A": "$2^n$", "B": "$n^2$", "C": "$2n$", "D": "$2^{n-1}$"},
         "correct": "A", "explanation": "Công thức cơ bản của nhị thức Newton với $a = b = 1$."},
        {"id": 10, "question": "**Câu 10:** Số đường chéo của một lục giác đều là",
         "options": {"A": "$9$", "B": "$15$", "C": "$6$", "D": "$12$"},
         "correct": "A", "explanation": "$C_6^2 - 6 = 15 - 6 = 9$."},
        {"id": 11, "question": "**Câu 11:** Khai triển $(x - 2)^4$ có bao nhiêu số hạng?",
         "options": {"A": "$5$", "B": "$4$", "C": "$6$", "D": "$3$"},
         "correct": "A", "explanation": "$4 + 1 = 5$ số hạng."},
        {"id": 12, "question": "**Câu 12:** Lấy ngẫu nhiên 1 lá bài từ bộ bài tú lơ khơ 52 lá. Xác suất để lấy được lá Át (Ace) bằng",
         "options": {"A": "$\\frac{1}{13}$", "B": "$\\frac{1}{4}$", "C": "$\\frac{1}{52}$", "D": "$\\frac{4}{13}$"},
         "correct": "A", "explanation": "Có 4 lá Át trong 52 lá, xác suất $4/52 = 1/13$."}
    ]

    raw_tfs_4 = [
        {"id": 1, "question": "**Câu 1:** Cho đa giác đều $H$ có 12 đỉnh nội tiếp trong một đường tròn tâm $O$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số tam giác có 3 đỉnh là đỉnh của đa giác $H$ bằng $220$.", "correct": True, "explanation": "$C_{12}^3 = \\frac{12 \\times 11 \\times 10}{6} = 220$."},
             {"id": "b", "text": "Đa giác $H$ có đúng 6 đường chéo đi qua tâm $O$.", "correct": True, "explanation": "Mỗi đường chéo qua tâm nối 2 đỉnh đối diện: $12 / 2 = 6$ đường."},
             {"id": "c", "text": "Số tam giác vuông có 3 đỉnh là đỉnh của đa giác $H$ bằng $60$.", "correct": True, "explanation": "Mỗi đường kính kết hợp với 10 đỉnh còn lại tạo thành 1 tam giác vuông: $6 \\times 10 = 60$ tam giác."},
             {"id": "d", "text": "Số hình chữ nhật có 4 đỉnh là đỉnh của đa giác $H$ bằng $30$.", "correct": False, "explanation": "Mỗi cặp 2 đường kính tạo thành 1 hình chữ nhật: $C_6^2 = 15 \\ne 30$."}
         ]},
        {"id": 2, "question": "**Câu 2:** Một hộp có 7 viên bi đỏ và 5 viên bi xanh. Lấy ngẫu nhiên 4 viên bi. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số phần tử của không gian mẫu bằng $495$.", "correct": True, "explanation": "$C_{12}^4 = 495$."},
             {"id": "b", "text": "Số cách lấy được 2 bi đỏ và 2 bi xanh là $210$ cách.", "correct": True, "explanation": "$C_7^2 \\times C_5^2 = 21 \\times 10 = 210$."},
             {"id": "c", "text": "Xác suất để lấy được 4 viên bi cùng màu bằng $\\frac{8}{99}$.", "correct": True, "explanation": "Cùng màu đỏ: $C_7^4 = 35$, cùng màu xanh: $C_5^4 = 5$. Tổng là 40. Xác suất $40/495 = 8/99$."},
             {"id": "d", "text": "Xác suất để có ít nhất 1 bi xanh nhỏ hơn $0.9$.", "correct": False, "explanation": "Biến cố đối toàn đỏ: $35/495 = 7/99 \\approx 0.07$. Vậy xác suất có ít nhất 1 bi xanh là $1 - 7/99 = 92/99 \\approx 0.929 > 0.9$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Khai triển nhị thức $(x + \\frac{2}{x^2})^9$ ($x \\ne 0$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số hạng tổng quát thứ $k+1$ là $C_9^k 2^k x^{9 - 3k}$.", "correct": True, "explanation": "$C_9^k x^{9-k} (2 x^{-2})^k = C_9^k 2^k x^{9-3k}$."},
             {"id": "b", "text": "Khai triển có số hạng không chứa $x$ ứng với $k = 3$.", "correct": True, "explanation": "$9 - 3k = 0 \\Rightarrow k = 3$."},
             {"id": "c", "text": "Hệ số của số hạng không chứa $x$ bằng $672$.", "correct": True, "explanation": "$C_9^3 \\times 2^3 = 84 \\times 8 = 672$."},
             {"id": "d", "text": "Trong khai triển không tồn tại số hạng chứa $x^2$.", "correct": True, "explanation": "$9 - 3k = 2 \\Rightarrow 3k = 7$ (không có nghiệm nguyên $k$)."}
         ]},
        {"id": 4, "question": "**Câu 4:** Có 5 người khách bước vào một toa tàu gồm 7 ghế trống. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số cách xếp 5 người vào 7 ghế là $2520$ cách.", "correct": True, "explanation": "$A_7^5 = 7 \\times 6 \\times 5 \\times 4 \\times 3 = 2520$ cách."},
             {"id": "b", "text": "Số cách chọn 5 ghế để 5 người ngồi là $21$ cách.", "correct": True, "explanation": "$C_7^5 = 21$ cách."},
             {"id": "c", "text": "Nếu có 2 ghế đầu luôn phải có người ngồi thì có $840$ cách xếp.", "correct": True, "explanation": "Chọn 2 người vào 2 ghế đầu: $A_5^2 = 20$. Ba người còn lại xếp vào 5 ghế còn lại: $A_5^3 = 60$. Tổng là $20 \\times 60 = 1200 \\ne 840$. Khẳng định c SAI."},
             {"id": "d", "text": "Số ghế còn trống sau khi xếp xong là 2 ghế.", "correct": True, "explanation": "$7 - 5 = 2$ ghế."}
         ]}
    ]
    raw_tfs_4[3]["items"][2]["correct"] = False

    raw_sa_4 = [
        {"id": 1, "question": "**Câu 1:** Một đa giác lồi có 8 đỉnh. Hỏi có bao nhiêu đường chéo?",
         "correctAnswer": "20", "acceptedAnswers": ["20", "20.0"],
         "explanation": "Số đường chéo là $C_8^2 - 8 = 28 - 8 = 20$."},
        {"id": 2, "question": "**Câu 2:** Tìm hệ số của số hạng không chứa $x$ trong khai triển $(x + \\frac{1}{x^2})^6$.",
         "correctAnswer": "15", "acceptedAnswers": ["15", "15.0"],
         "explanation": "$6 - 3k = 0 \\Rightarrow k = 2$. Hệ số là $C_6^2 = 15$."},
        {"id": 3, "question": "**Câu 3:** Có bao nhiêu số tự nhiên gồm 3 chữ số khác nhau lấy từ $\{1, 2, 3, 4, 5, 6\}$?",
         "correctAnswer": "120", "acceptedAnswers": ["120", "120.0"],
         "explanation": "$A_6^3 = 6 \\times 5 \\times 4 = 120$."},
        {"id": 4, "question": "**Câu 4:** Gieo một con xúc xắc cân đối liên tiếp 2 lần. Tính xác suất để tổng số chấm xuất hiện lớn hơn hoặc bằng 10 (làm tròn đến hàng phần trăm).",
         "correctAnswer": "0.17", "acceptedAnswers": ["0.17", "0,17"],
         "explanation": "Các cặp có tổng $\\ge 10$: tổng 10 có $(4,6), (5,5), (6,4)$ (3 cặp); tổng 11 có $(5,6), (6,5)$ (2 cặp); tổng 12 có $(6,6)$ (1 cặp). Tổng cộng 6 cặp. Xác suất $6/36 = 1/6 \\approx 0.1667 \\approx 0.17$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Từ các chữ số $\{1, 2, 3, 4, 5, 6, 7, 8, 9\}$, có thể lập được bao nhiêu số tự nhiên có 6 chữ số đôi một khác nhau sao cho số đó chứa đúng 3 chữ số chẵn và 3 chữ số lẻ, đồng thời các chữ số chẵn không đứng cạnh nhau?",
         "correctAnswer": "5760", "acceptedAnswers": ["5760", "5760.0"],
         "explanation": "Tập các chữ số chẵn là $\{2, 4, 6, 8\}$ (4 số), tập chữ số lẻ là $\{1, 3, 5, 7, 9\}$ (5 số). Chọn 3 chữ số chẵn có $C_4^3 = 4$ cách. Chọn 3 chữ số lẻ có $C_5^3 = 10$ cách. Sắp xếp 3 chữ số lẻ thành hàng có $3! = 6$ cách, tạo ra 4 khoảng trống (gồm hai đầu và hai giữa). Chọn 3 trong 4 khoảng trống và sắp thứ tự 3 chữ số chẵn vào có $A_4^3 = 24$ cách. Theo quy tắc nhân, tổng số các số thỏa mãn là $4 \\times 10 \\times 6 \\times 24 = 5760$ số."},
        {"id": 6, "question": "**Câu 6 (VDC):** Chọn ngẫu nhiên 3 đỉnh từ các đỉnh của một đa giác đều có 20 đỉnh nội tiếp trong một đường tròn. Có bao nhiêu tam giác vuông được tạo thành từ 3 đỉnh được chọn?",
         "correctAnswer": "180", "acceptedAnswers": ["180", "180.0"],
         "explanation": "Một tam giác có 3 đỉnh lấy từ các đỉnh của đa giác đều là tam giác vuông khi và chỉ khi có một cạnh là đường kính của đường tròn ngoại tiếp. Đa giác đều 20 đỉnh có $20 / 2 = 10$ đường kính đi qua tâm. Với mỗi đường kính cố định, có 18 đỉnh còn lại của đa giác; mỗi đỉnh đó kết hợp với 2 đầu mút của đường kính tạo thành đúng một tam giác vuông. Vậy số tam giác vuông tạo thành là $10 \\times 18 = 180$ tam giác."}
    ]

    exam4 = {
        "id": "cd4-exam-4", "examNumber": 4, "title": "Đề Số 4: Hình Học Tổ Hợp & Đa Giác Đều",
        "code": "CD4-404", "badge": "Mã Đề 404", "badgeColor": "bg-purple-50 text-purple-800 border-purple-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_4, 404), "tfQuestions": raw_tfs_4, "saQuestions": raw_sa_4, "essayQuestions": []
    }
    validate_exam(exam4)
    exams.append(exam4)

    # ==========================================
    # ĐỀ 5 (MÃ 405): Đếm cấu hình & xác suất nhị thức
    # ==========================================
    raw_mcqs_5 = [
        {"id": 1, "question": "**Câu 1:** Số các số tự nhiên có 1 chữ số là",
         "options": {"A": "$10$", "B": "$9$", "C": "$8$", "D": "$11$"},
         "correct": "A", "explanation": "Các số từ 0 đến 9 gồm 10 số."},
        {"id": 2, "question": "**Câu 2:** Cho tập hợp $A$ có 5 phần tử. Số hoán vị của 5 phần tử đó là",
         "options": {"A": "$120$", "B": "$24$", "C": "$60$", "D": "$720$"},
         "correct": "A", "explanation": "$5! = 120$."},
        {"id": 3, "question": "**Câu 3:** Khẳng định nào sau đây ĐÚNG về tổ hợp?",
         "options": {"A": "$C_n^k = C_n^{n - k}$", "B": "$C_n^k = C_n^{k + 1}$", "C": "$C_n^k = n!$", "D": "$C_n^1 = 1$"},
         "correct": "A", "explanation": "Tính chất đối xứng cơ bản của tổ hợp."},
        {"id": 4, "question": "**Câu 4:** Có bao nhiêu cách chọn ra 2 học sinh từ một nhóm 8 học sinh?",
         "options": {"A": "$28$", "B": "$56$", "C": "$16$", "D": "$64$"},
         "correct": "A", "explanation": "$C_8^2 = 28$."},
        {"id": 5, "question": "**Câu 5:** Gieo một con xúc xắc cân đối. Xác suất để xuất hiện mặt có số chấm chia hết cho 2 là",
         "options": {"A": "$\\frac{1}{2}$", "B": "$\\frac{1}{3}$", "C": "$\\frac{2}{3}$", "D": "$\\frac{1}{6}$"},
         "correct": "A", "explanation": "Mặt chẵn $\{2, 4, 6\}$ có 3 mặt, xác suất $3/6 = 1/2$."},
        {"id": 6, "question": "**Câu 6:** Khai triển $(x + 1)^4$ có tất cả bao nhiêu số hạng?",
         "options": {"A": "$5$", "B": "$4$", "C": "$3$", "D": "$6$"},
         "correct": "A", "explanation": "$4 + 1 = 5$ số hạng."},
        {"id": 7, "question": "**Câu 7:** Một lớp học có 18 bạn nam và 12 bạn nữ. Cần chọn một bạn đi dự đại hội thanh niên. Có bao nhiêu cách chọn?",
         "options": {"A": "$30$", "B": "$216$", "C": "$18$", "D": "$12$"},
         "correct": "A", "explanation": "$18 + 12 = 30$ cách."},
        {"id": 8, "question": "**Câu 8:** Hệ số của $x^3$ trong khai triển nhị thức $(x + 2)^4$ bằng",
         "options": {"A": "$8$", "B": "$4$", "C": "$16$", "D": "$24$"},
         "correct": "A", "explanation": "$C_4^3 x^3 (2)^1 = 4 \\times 2 x^3 = 8x^3$."},
        {"id": 9, "question": "**Câu 9:** Chọn ngẫu nhiên một số từ tập $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$. Xác suất để chọn được số chia hết cho 3 là",
         "options": {"A": "$\\frac{3}{10}$", "B": "$\\frac{1}{3}$", "C": "$\\frac{2}{5}$", "D": "$\\frac{1}{10}$"},
         "correct": "A", "explanation": "Các số chia hết cho 3 là $\{3, 6, 9\}$ gồm 3 số. Xác suất $3/10$."},
        {"id": 10, "question": "**Câu 10:** Số chỉnh hợp chập 3 của 6 phần tử bằng",
         "options": {"A": "$120$", "B": "$20$", "C": "$720$", "D": "$216$"},
         "correct": "A", "explanation": "$A_6^3 = 6 \\times 5 \\times 4 = 120$."},
        {"id": 11, "question": "**Câu 11:** Trong mặt phẳng có 8 điểm phân biệt không có 3 điểm nào thẳng hàng. Có bao nhiêu đoạn thẳng nối các điểm đó?",
         "options": {"A": "$28$", "B": "$56$", "C": "$16$", "D": "$8$"},
         "correct": "A", "explanation": "$C_8^2 = 28$."},
        {"id": 12, "question": "**Câu 12:** Tổng các hệ số trong khai triển $(3x - 2)^4$ bằng",
         "options": {"A": "$1$", "B": "$16$", "C": "$81$", "D": "$0$"},
         "correct": "A", "explanation": "Thay $x = 1$: $(3(1) - 2)^4 = 1^4 = 1$."}
    ]

    raw_tfs_5 = [
        {"id": 1, "question": "**Câu 1:** Cho tập $S = \{0, 1, 2, 3, 4, 5, 6\}$. Lập số tự nhiên có 5 chữ số khác nhau từ $S$. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Có $2160$ số tự nhiên có 5 chữ số khác nhau được lập.", "correct": True, "explanation": "Chữ số đầu có 6 cách, 4 chữ số sau có $A_6^4 = 360$ cách $\\Rightarrow 6 \\times 360 = 2160$ số."},
             {"id": "b", "text": "Có $1080$ số lẻ được lập.", "correct": False, "explanation": "Tận cùng là số lẻ $\\{1, 3, 5\\}$ (3 cách). Chữ số đầu có 5 cách (khác 0 và chữ số cuối). Ba vị trí giữa có $A_5^3 = 60$ cách $\\Rightarrow 3 \\times 5 \\times 60 = 900 \\ne 1080$ số."},
             {"id": "c", "text": "Số các số chia hết cho 5 lập được là $660$ số.", "correct": True, "explanation": "Tận cùng là 0: $A_6^4 = 360$ số. Tận cùng là 5: $5 \\times A_5^3 = 300$ số. Tổng là $360 + 300 = 660$ số."},
             {"id": "d", "text": "Số các số luôn chứa chữ số 0 và chữ số 1 là $1440$ số.", "correct": False, "explanation": "Dùng bù trừ hoặc chọn vị trí được số khác 1440."}
         ]},
        {"id": 2, "question": "**Câu 2:** Một hộp chứa 6 quả cầu đỏ, 5 quả cầu vàng và 4 quả cầu xanh. Lấy ngẫu nhiên đồng thời 4 quả cầu. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Số phần tử của không gian mẫu là $1365$.", "correct": True, "explanation": "$C_{15}^4 = 1365$."},
             {"id": "b", "text": "Số cách lấy được 4 quả cùng màu đỏ là $15$ cách.", "correct": True, "explanation": "$C_6^4 = 15$ cách."},
             {"id": "c", "text": "Số cách lấy có đủ cả 3 màu là $720$ cách.", "correct": True, "explanation": "(2 đỏ, 1 vàng, 1 xanh): $C_6^2 \\times 5 \\times 4 = 15 \\times 20 = 300$; (1 đỏ, 2 vàng, 1 xanh): $6 \\times C_5^2 \\times 4 = 6 \\times 10 \\times 4 = 240$; (1 đỏ, 1 vàng, 2 xanh): $6 \\times 5 \\times C_4^2 = 30 \\times 6 = 180$. Tổng là $300 + 240 + 180 = 720$ cách."},
             {"id": "d", "text": "Xác suất để trong 4 quả lấy ra có ít nhất 1 quả màu xanh lớn hơn $0.75$.", "correct": True, "explanation": "Biến cố đối không có màu xanh (lấy từ 11 quả đỏ và vàng): $C_{11}^4 = 330$. Xác suất có ít nhất 1 xanh là $1 - 330/1365 = 1 - 22/91 = 69/91 \\approx 0.758 > 0.75$."}
         ]},
        {"id": 3, "question": "**Câu 3:** Khai triển $(2x^3 - \\frac{1}{x})^8$ ($x \\ne 0$). Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Khai triển có tất cả 9 số hạng.", "correct": True, "explanation": "$8 + 1 = 9$ số hạng."},
             {"id": "b", "text": "Số hạng tổng quát thứ $k+1$ có số mũ của $x$ là $24 - 4k$.", "correct": True, "explanation": "Số mũ là $3(8 - k) - k = 24 - 4k$."},
             {"id": "c", "text": "Khai triển có số hạng không chứa $x$ ứng với $k = 6$.", "correct": True, "explanation": "$24 - 4k = 0 \\Rightarrow k = 6$."},
             {"id": "d", "text": "Số hạng không chứa $x$ bằng $112$.", "correct": True, "explanation": "$C_8^6 (2)^2 (-1)^6 = 28 \\times 4 \\times 1 = 112$."}
         ]},
        {"id": 4, "question": "**Câu 4:** Một máy bay ném bom vào một mục tiêu độc lập. Xác suất ném trúng mục tiêu ở mỗi lần là $0.7$. Máy bay ném 3 quả bom độc lập. Xét tính đúng/sai của các mệnh đề sau:",
         "items": [
             {"id": "a", "text": "Xác suất để cả 3 quả đều trúng mục tiêu bằng $0.343$.", "correct": True, "explanation": "$(0.7)^3 = 0.343$."},
             {"id": "b", "text": "Xác suất để cả 3 quả đều trượt mục tiêu bằng $0.027$.", "correct": True, "explanation": "$(0.3)^3 = 0.027$."},
             {"id": "c", "text": "Xác suất để có đúng 2 quả trúng mục tiêu bằng $0.441$.", "correct": True, "explanation": "$C_3^2 (0.7)^2 (0.3)^1 = 3 \\times 0.49 \\times 0.3 = 0.441$."},
             {"id": "d", "text": "Xác suất mục tiêu bị trúng bom (có ít nhất 1 quả trúng) nhỏ hơn $0.95$.", "correct": False, "explanation": "Xác suất là $1 - 0.027 = 0.973 > 0.95$."}
         ]}
    ]

    raw_sa_5 = [
        {"id": 1, "question": "**Câu 1:** Tính giá trị của biểu thức $P = A_6^2 + C_6^2$.",
         "correctAnswer": "45", "acceptedAnswers": ["45", "45.0"],
         "explanation": "$A_6^2 = 30, C_6^2 = 15 \\Rightarrow P = 30 + 15 = 45$."},
        {"id": 2, "question": "**Câu 2:** Tìm hệ số của $x^2$ trong khai triển nhị thức $(3x + 1)^4$.",
         "correctAnswer": "54", "acceptedAnswers": ["54", "54.0"],
         "explanation": "$C_4^2 (3x)^2 (1)^2 = 6 \\times 9 x^2 = 54x^2$. Hệ số là 54."},
        {"id": 3, "question": "**Câu 3:** Có bao nhiêu số tự nhiên gồm 4 chữ số khác nhau lập từ các chữ số $\{2, 4, 6, 8\}$?",
         "correctAnswer": "24", "acceptedAnswers": ["24", "24.0"],
         "explanation": "$4! = 24$ số."},
        {"id": 4, "question": "**Câu 4:** Gieo một đồng xu cân đối 4 lần liên tiếp. Tính xác suất để có đúng 2 lần xuất hiện mặt ngửa.",
         "correctAnswer": "0.375", "acceptedAnswers": ["0.375", "0,375", "3/8"],
         "explanation": "$C_4^2 (1/2)^4 = 6/16 = 3/8 = 0.375$."},
        {"id": 5, "question": "**Câu 5 (VDC):** Trong mặt phẳng cho tập hợp gồm 15 điểm phân biệt, trong đó có đúng 5 điểm thẳng hàng và ngoài ra không có 3 điểm nào khác thẳng hàng. Có bao nhiêu tứ giác lồi có 4 đỉnh lấy từ 15 điểm trên?",
         "correctAnswer": "1260", "acceptedAnswers": ["1260", "1260.0"],
         "explanation": "Tổng số cách chọn 4 điểm bất kỳ từ 15 điểm là $C_{15}^4 = 1365$. Bốn điểm không thể tạo thành tứ giác nếu: cả 4 điểm đều thuộc đường thẳng (có $C_5^4 = 5$ cách), hoặc có đúng 3 điểm thuộc đường thẳng và 1 điểm ngoài đường thẳng (có $C_5^3 \\times C_{10}^1 = 10 \\times 10 = 100$ cách). Số tứ giác lồi tạo thành là $1365 - 5 - 100 = 1260$ tứ giác."},
        {"id": 6, "question": "**Câu 6 (VDC):** Một đề thi khảo sát chất lượng gồm 20 câu hỏi trắc nghiệm, mỗi câu có 4 phương án lựa chọn và chỉ có 1 phương án đúng (mỗi câu đúng được 0.5 điểm). Một học sinh đã làm chắc chắn đúng 12 câu, còn 8 câu còn lại học sinh chọn ngẫu nhiên một phương án. Tính xác suất để học sinh đó đạt điểm từ 8.0 điểm trở lên (làm tròn kết quả đến hàng phần nghìn).",
         "correctAnswer": "0.114", "acceptedAnswers": ["0.114", "0,114"],
         "explanation": "Để đạt từ 8.0 điểm trở lên (ít nhất 16 câu đúng), học sinh cần làm đúng thêm ít nhất $16 - 12 = 4$ câu trong 8 câu chọn ngẫu nhiên. Số câu đúng $X$ trong 8 câu tuân theo phân phối nhị thức $B(8; 0.25)$. Ta tính: $P(X \\ge 4) = \\sum_{k=4}^8 C_8^k (0.25)^k (0.75)^{8-k}$. Cụ thể: $P(X = 4) = C_8^4 (0.25)^4 (0.75)^4 = 70 \\times \\frac{81}{65536} \\approx 0.08651$; $P(X = 5) = C_8^5 (0.25)^5 (0.75)^3 = 56 \\times \\frac{27}{65536} \\approx 0.02307$; $P(X = 6) = C_8^6 (0.25)^6 (0.75)^2 = 28 \\times \\frac{9}{65536} \\approx 0.00384$; $P(X = 7) = C_8^7 (0.25)^7 (0.75)^1 = 8 \\times \\frac{3}{65536} \\approx 0.00037$; $P(X = 8) = (0.25)^8 \\approx 0.000015$. Tổng xác suất: $P(X \\ge 4) \\approx 0.1138 \\approx 0.114$."}
    ]

    exam5 = {
        "id": "cd4-exam-5", "examNumber": 5, "title": "Đề Số 5: Đếm Cấu Hình & Xác Suất Nhị Thức",
        "code": "CD4-405", "badge": "Mã Đề 405", "badgeColor": "bg-rose-50 text-rose-800 border-rose-200",
        "durationMinutes": 90, "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
        "structure": "12 Câu TN (3.0đ) + 4 Câu Đ/S (4.0đ) + 6 Câu TLN (3.0đ)",
        "mcqs": balance_mcqs(raw_mcqs_5, 405), "tfQuestions": raw_tfs_5, "saQuestions": raw_sa_5, "essayQuestions": []
    }
    validate_exam(exam5)
    exams.append(exam5)

    return {
        "id": "cd4",
        "code": "CĐ 4",
        "title": "BÀI TOÁN TỔ HỢP",
        "subtitle": "Quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp, nhị thức Newton & xác suất cổ điển",
        "grade": 10,
        "icon": "fa-calculator",
        "accentColor": "from-amber-600 to-orange-700",
        "theorySummaryHtml": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    t = get_topic_cd4()
    print(f"CD 4 co {len(t['exams'])} de thi:")
    for ex in t['exams']:
        print(f"- {ex['code']}: {ex['title']} | MCQs: {len(ex['mcqs'])} | T/F: {len(ex['tfQuestions'])} | SA: {len(ex['saQuestions'])}")
