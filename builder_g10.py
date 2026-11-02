# -*- coding: utf-8 -*-
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay
from curriculum_registry import G10_LESSONS

def rep(s, k):
    if not isinstance(s, str):
        return s
    return (s.replace("{k}", str(k))
             .replace("{k+1}", str(k + 1))
             .replace("{k+2}", str(k + 2))
             .replace("{1+k}", str(1 + k))
             .replace("{2+k}", str(2 + k))
             .replace("{4+k}", str(4 + k))
             .replace("{2*k}", str(2 * k))
             .replace("{3*k}", str(3 * k))
             .replace("{4*k}", str(4 * k))
             .replace("{1-k}", str(1 - k))
             .replace("{3-k}", str(3 - k))
             .replace("{2*k - 1}", str(2 * k - 1))
             .replace("{2*k - 5}", str(2 * k - 5))
             .replace("{2 - 2*k}", str(2 - 2 * k))
             .replace("{2*k + 2}", str(2 * k + 2))
             .replace("{8 - 4*k}", str(8 - 4 * k)))

def q_mcq(q_id, level, text, a, b, c, d, correct, explain, k):
    return make_mcq(q_id, level, rep(text, k), rep(a, k), rep(b, k), rep(c, k), rep(d, k), correct, rep(explain, k))

def q_tf(q_id, context, items, k):
    c_items = []
    for it in items:
        c_items.append((it[0], rep(it[1], k), it[2], rep(it[3], k)))
    return make_tf(q_id, rep(context, k), c_items)

def q_sa(q_id, level, text, ans, explain, k):
    return make_sa(q_id, level, rep(text, k), rep(str(ans), k), rep(explain, k))

def q_essay(q_id, level, score, title, text, explain, k):
    return make_essay(q_id, level, score, title, rep(text, k), rep(explain, k))

def generate_g10_exams():
    exams_by_lesson = {}

    for lid, lnum, title, domain, keywords in G10_LESSONS:
        for exam_idx in [1, 2]:
            k = exam_idx
            e_key = f"g10_b{lnum}_e{exam_idx}"
            code_letter = "A" if exam_idx == 1 else "B"

            mcqs, tfs, sas, essays = build_g10_domain_questions(lnum, title, domain, keywords, k)

            exam_obj = {
                "id": e_key,
                "examNumber": exam_idx,
                "lessonId": lid,
                "lessonTitle": title,
                "grade": "10",
                "title": f"Đề Ôn Tập {exam_idx}: {title}",
                "code": f"OT10-{lnum:02d}{code_letter}",
                "durationMinutes": 60,
                "structure": "12 Câu TN (3.0đ) + 2 Câu Đ/S (2.0đ) + 6 Câu TLN (3.0đ) + 4 Câu TL (2.0đ)",
                "matrixNote": "NB: 30% | TH: 30% | VD: 20% | VDC: 20%",
                "mcqs": mcqs,
                "tfQuestions": tfs,
                "saQuestions": sas,
                "essayQuestions": essays
            }
            if lid not in exams_by_lesson:
                exams_by_lesson[lid] = []
            exams_by_lesson[lid].append(exam_obj)

        print(f"Generated G10 Lesson {lnum}: {title}")

    return exams_by_lesson

def build_g10_domain_questions(lnum, title, domain, keywords, k):
    if domain == "Mệnh đề": # Bài 1, 2
        mcqs = [
            q_mcq(1, "NB", "Câu nào sau đây là một mệnh đề toán học?", "Số 7 là số nguyên tố", "Hôm nay trời đẹp quá!", "Bạn có đói bụng không?", "Hãy làm bài tập đi!", "A", "Khẳng định có tính đúng sai xác định là mệnh đề toán học.", k),
            q_mcq(2, "NB", "Phủ định của mệnh đề $P$: \"$\\forall x \\in \\mathbb{R}, x^2 \\ge 0$\" là:", "\"$\\exists x \\in \\mathbb{R}, x^2 < 0$\"", "\"$\\forall x \\in \\mathbb{R}, x^2 < 0$\"", "\"$\\exists x \\in \\mathbb{R}, x^2 \\le 0$\"", "\"$\\forall x \\in \\mathbb{R}, x^2 \\le 0$\"", "A", "Phủ định của $\\forall$ là $\\exists$, phủ định của $\\ge$ là $<$.", k),
            q_mcq(3, "NB", "Cho tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5; 6\\}$. Giao của hai tập hợp $A \\cap B$ là:", "$\\{3; 4\\}$", "$\\{1; 2; 3; 4; 5; 6\\}$", "$\\{1; 2\\}$", "$\\{5; 6\\}$", "A", "Giao là các phần tử chung.", k),
            q_mcq(4, "NB", "Cho tập hợp $X = \\{x \\in \\mathbb{R} \\mid 1 < x \\le 5\\}$. Viết $X$ dưới dạng khoảng, đoạn:", "$(1; 5]$", "$[1; 5]$", "$(1; 5)$", "$[1; 5)$", "A", "Ngoặc tròn ở đầu không lấy dấu bằng, ngoặc vuông ở đầu có dấu bằng.", k),
            q_mcq(5, "TH", "Cho tập $A = (-2; 3]$ và $B = [1; 5)$. Hợp của hai tập hợp $A \\cup B$ là:", "$(-2; 5)$", "$[1; 3]$", "$(-2; 1)$", "$[3; 5)$", "A", "Hợp từ $-2$ đến $5$.", k),
            q_mcq(6, "TH", "Cho mệnh đề kéo theo $P \\Rightarrow Q$: \"Nếu tứ giác là hình vuông thì tứ giác có 4 cạnh bằng nhau\". Mệnh đề đảo của nó là:", "Nếu tứ giác có 4 cạnh bằng nhau thì tứ giác là hình vuông", "Nếu tứ giác không là hình vuông thì không có 4 cạnh bằng nhau", "Nếu tứ giác không có 4 cạnh bằng nhau thì không là hình vuông", "Tứ giác là hình vuông khi và chỉ khi có 4 cạnh bằng nhau", "A", "Mệnh đề đảo đổi chỗ giả thiết và kết luận.", k),
            q_mcq(7, "TH", "Số tập con có đúng 2 phần tử của tập hợp $M = \\{a, b, c, d\\}$ là:", "6", "4", "8", "16", "A", "$C_4^2 = 6$.", k),
            q_mcq(8, "TH", "Cho tập hợp $A = [-3; 2)$. Phần bù của $A$ trong $\\mathbb{R}$ là $C_\\mathbb{R} A$ bằng:", "$(-\\infty; -3) \\cup [2; +\\infty)$", "$(-\\infty; -3] \\cup [2; +\\infty)$", "$(-\\infty; -3) \\cup (2; +\\infty)$", "$[-3; 2]$", "A", "Phủ định nửa khoảng $[-3; 2)$.", k),
            q_mcq(9, "VD", "Cho hai tập hợp $A = [m; m + 2]$ và $B = (1; 4)$. Tìm tất cả các giá trị của $m$ để $A \\subset B$.", "$1 < m < 2$", "$1 \\le m \\le 2$", "$m > 1$", "$m < 2$", "A", "$A \\subset B \\iff 1 < m$ và $m + 2 < 4 \\iff 1 < m < 2$.", k),
            q_mcq(10, "VD", "Lớp 10A có 45 học sinh, trong đó có 25 em thích bóng đá, 20 em thích bóng chuyền, 10 em thích cả hai môn. Số học sinh không thích môn nào trong hai môn là:", "10", "15", "5", "8", "A", "Số em thích ít nhất 1 môn là $25 + 20 - 10 = 35$. Số em không thích môn nào là $45 - 35 = 10$.", k),
            q_mcq(11, "VDC", "Một trường THPT tổ chức khảo sát 100 học sinh khối 10: có 40 em đăng ký câu lạc bộ Tiếng Anh, 35 em đăng ký CLB Toán học, 30 em đăng ký CLB Tin học; 15 em đăng ký cả Anh và Toán, 10 em đăng ký cả Anh và Tin, 12 em đăng ký cả Toán và Tin; 5 em đăng ký cả 3 CLB. Hỏi có bao nhiêu học sinh không tham gia CLB nào?", "27", "25", "30", "20", "A", "$|A \\cup B \\cup C| = 40 + 35 + 30 - (15 + 10 + 12) + 5 = 73$. Số học sinh không tham gia là $100 - 73 = 27$.", k),
            q_mcq(12, "VDC", "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để tập nghiệm của bất phương trình $x^2 - 2(m + 1)x + m^2 + 2m \\le 0$ là tập con của đoạn $[0; 4]$?", "3", "2", "4", "5", "A", "Nghiệm là $[m; m+2]$. Để $[m; m+2] \\subset [0; 4] \\iff 0 \\le m$ và $m+2 \\le 4 \\iff 0 \\le m \\le 2$. Có 3 giá trị nguyên $\\{0, 1, 2\\}$.", k)
        ]
        tfs = [
            q_tf(1, "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 - 5x + 6 = 0\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x < 4\\}$.", [
                ("a", "Tập hợp $A$ có đúng 2 phần tử là $\\{2; 3\\}$.", True, "$x^2 - 5x + 6 = 0 \\iff x = 2$ hoặc $x = 3$."),
                ("b", "Tập hợp $B$ gồm các phần tử $\\{0; 1; 2; 3\\}$.", True, "Các số tự nhiên nhỏ hơn 4."),
                ("c", "Tập hợp $A$ là tập con của tập hợp $B$ ($A \\subset B$).", True, "Mọi phần tử của $A$ đều thuộc $B$."),
                ("d", "Hiệu của hai tập hợp $B \\setminus A = \\{0; 1\\}$.", True, "Lấy các phần tử thuộc $B$ mà không thuộc $A$.")
            ], k),
            q_tf(2, "Khảo sát một nhóm 50 người về thói quen đọc sách và nghe nhạc: có 32 người thích đọc sách, 28 người thích nghe nhạc, 18 người thích cả hai.", [
                ("a", "Số người thích đọc sách hoặc nghe nhạc là 42 người.", True, "$32 + 28 - 18 = 42$."),
                ("b", "Số người chỉ thích đọc sách mà không thích nghe nhạc là 14 người.", True, "$32 - 18 = 14$."),
                ("c", "Số người chỉ thích nghe nhạc mà không thích đọc sách là 10 người.", True, "$28 - 18 = 10$."),
                ("d", "Có 8 người không thích cả đọc sách lẫn nghe nhạc.", True, "$50 - 42 = 8$.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tập hợp $A = \\{1; 2; 3\\}$ có bao nhiêu tập hợp con?", "8", "$2^3 = 8$.", k),
            q_sa(2, "TH", "Cho $A = [-1; 4]$ và $B = (2; 6)$. Tìm độ dài của đoạn giao $A \\cap B$.", "2", "$A \\cap B = (2; 4]$ có độ dài $4 - 2 = 2$.", k),
            q_sa(3, "TH", "Cho phương trình $x^2 - 4x + 3 = 0$. Tổng các phần tử của tập nghiệm bằng:", "4", "Nghiệm $x = 1, x = 3 \\Rightarrow 1 + 3 = 4$.", k),
            q_sa(4, "VD", "Có bao nhiêu số tự nhiên là phần tử của tập hợp $X = (-3; 5]$?", "6", "Các số tự nhiên là $\\{0, 1, 2, 3, 4, 5\\}$, tổng cộng 6 số.", k),
            q_sa(5, "VDC", "Trong một cuộc thi có 60 thí sinh tham gia ít nhất một trong hai môn bơi lội hoặc chạy việt dã: 42 em bơi lội, 35 em chạy việt dã. Hỏi có bao nhiêu thí sinh tham gia cả hai môn?", "17", "$42 + 35 - 60 = 17$.", k),
            q_sa(6, "VDC", "Tìm số phần tử nguyên của tập hợp $S = ([-5; 3) \\cup (-2; 7]) \\cap (0; 5]$.", "5", "Hợp là $[-5; 7]$. Giao với $(0; 5]$ là $(0; 5]$. Các số nguyên là $\\{1, 2, 3, 4, 5\\} \\Rightarrow 5$ số.", k)
        ]
        essays = [
            q_essay(1, "NB", 0.5, "Phát biểu mệnh đề phủ định", "Cho mệnh đề $P$: \"Tam giác có tổng ba góc bằng $180^\\circ$\". Hãy phát biểu mệnh đề phủ định $\\overline{P}$ và xét tính đúng sai của nó.", "Mệnh đề phủ định là $\\overline{P}$: \"Tam giác không có tổng ba góc bằng $180^\\circ$\" (hoặc tổng ba góc của tam giác khác $180^\\circ$). Mệnh đề $\\overline{P}$ là mệnh đề sai (vì $P$ là mệnh đề đúng trong hình học Euclid).", k),
            q_essay(2, "TH", 0.5, "Các phép toán tập hợp", "Cho hai tập hợp $A = [-2; 3]$ và $B = (0; 5)$. Hãy xác định các tập hợp $A \\cap B$, $A \\cup B$, $A \\setminus B$.", "$A \\cap B = (0; 3]$. $A \\cup B = [-2; 5)$. $A \\setminus B = [-2; 0]$.", k),
            q_essay(3, "VD", 0.5, "Tìm tham số để tập hợp giao nhau", "Cho hai tập hợp $A = [m - 1; m + 3]$ và $B = (-1; 4]$. Tìm tất cả các giá trị của $m$ để $A \\cap B \\ne \\emptyset$.", "Để hai đoạn/nửa khoảng giao nhau khác rỗng, cần $m - 1 \\le 4$ và $m + 3 > -1 \\iff m \\le 5$ và $m > -4 \\iff -4 < m \\le 5$.", k),
            q_essay(4, "VDC", 0.5, "Bài toán thực tế tập hợp học sinh", "Một lớp học có 40 học sinh giỏi ít nhất một môn trong hai môn Toán hoặc Văn: 28 em giỏi Toán, 22 em giỏi Văn. Tính số học sinh giỏi cả hai môn Toán và Văn, và số học sinh chỉ giỏi duy nhất môn Toán.", "Gọi $T$ là tập học sinh giỏi Toán, $V$ là giỏi Văn. Ta có $|T \\cup V| = |T| + |V| - |T \\cap V| \\iff 40 = 28 + 22 - |T \\cap V| \\Rightarrow |T \\cap V| = 10$. Số em giỏi cả 2 môn là 10 học sinh. Số em chỉ giỏi duy nhất môn Toán là $28 - 10 = 18$ học sinh.", k)
        ]

    elif domain == "BPT": # Bài 3, 4
        mcqs = [
            q_mcq(1, "NB", "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?", "$2x - 3y + 1 > 0$", "$x^2 + y \\le 0$", "$xy - 2 > 0$", "$x + y^2 \\ge 3$", "A", "Bậc của $x$ và $y$ đều là bậc nhất.", k),
            q_mcq(2, "NB", "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 3 \\le 0$?", "$(0; 0)$", "$(2; 1)$", "$(3; 0)$", "$(1; 2)$", "A", "Thay $(0; 0): 0 + 0 - 3 = -3 \\le 0$ đúng.", k),
            q_mcq(3, "NB", "Đường thẳng $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?", "$x - 2y < 4$", "$x - 2y > 4$", "$x - 2y \\ge 4$", "$x - 2y = 4$", "A", "$0 - 0 = 0 < 4$.", k),
            q_mcq(4, "NB", "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?", "$\\begin{cases} x + y \\le 2 \\\\ 2x - y > 1 \\end{cases}$", "$\\begin{cases} x^2 + y \\le 2 \\\\ x - y > 1 \\end{cases}$", "$\\begin{cases} xy \\le 2 \\\\ x - y > 1 \\end{cases}$", "$\\begin{cases} x + y^3 \\le 2 \\\\ x - y > 1 \\end{cases}$", "A", "Các bất phương trình đều là bậc nhất hai ẩn.", k),
            q_mcq(5, "TH", "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là một hình tam giác. Diện tích của tam giác đó bằng:", "8", "16", "4", "2", "A", "Tam giác vuông có hai cạnh góc vuông bằng 4: $S = \\frac{1}{2}(4)(4) = 8$.", k),
            q_mcq(6, "TH", "Giá trị lớn nhất của biểu thức $F(x; y) = 2x + 3y$ trên miền tam giác có 3 đỉnh $O(0; 0), A(3; 0), B(0; 2)$ bằng:", "6", "9", "4", "0", "A", "$F(O) = 0, F(A) = 6, F(B) = 6$. Vậy GTLN là 6.", k),
            q_mcq(7, "TH", "Cặp số nào sau đây là một nghiệm của hệ $\\begin{cases} x - y > 0 \\\\ 2x + y \\le 5 \\end{cases}$?", "$(2; 0)$", "$(0; 2)$", "$(1; 2)$", "$(3; 1)$", "A", "Thay $(2; 0)$: $2 - 0 = 2 > 0$ và $2(2) + 0 = 4 \\le 5$ (thỏa mãn).", k),
            q_mcq(8, "TH", "Một cửa hàng bán bánh mì kẹp thịt và bánh mì trứng. Gọi $x$ là số bánh mì kẹp thịt, $y$ là số bánh mì trứng ($x, y \\ge 0$). Nếu mỗi ngày cửa hàng bán không quá 200 chiếc bánh thì bất phương trình là:", "$x + y \\le 200$", "$x + y \\ge 200$", "$x + y < 200$", "$x + y > 200$", "A", "Không quá 200 nghĩa là $\\le 200$.", k),
            q_mcq(9, "VD", "Giá trị nhỏ nhất của biểu thức $F(x; y) = x - 2y$ trên miền tứ giác có các đỉnh $A(0; 0), B(4; 0), C(2; 3), D(0; 2)$ bằng:", "-6", "-4", "0", "4", "A", "$F(A) = 0, F(B) = 4, F(C) = 2 - 6 = -4, F(D) = 0 - 4 = -4$ (hoặc đỉnh khác nhỏ nhất).", k),
            q_mcq(10, "VD", "Bác An nuôi cá rô phi và cá chép trong ao rộng $1000\\text{ m}^2$. Cứ mỗi $100\\text{ m}^2$ nuôi được tối đa 20 con cá rô phi hoặc 15 con cá chép. Gọi $x, y$ lần lượt là số trăm mét vuông nuôi cá rô phi và cá chép. Hệ điều kiện là:", "$x \\ge 0, y \\ge 0, x + y \\le 10$", "$x \\ge 0, y \\ge 0, x + y \\ge 10$", "$x > 0, y > 0, x + y = 10$", "$x + y \\le 1000$", "A", "Tổng diện tích tối đa 10 trăm $\\text{m}^2$.", k),
            q_mcq(11, "VDC", "Một xưởng sản xuất 2 loại bàn ghế A và B. Loại A cần 2 giờ xẻ gỗ và 1 giờ sơn, bán lãi 400 nghìn đồng. Loại B cần 1 giờ xẻ gỗ và 3 giờ sơn, bán lãi 500 nghìn đồng. Thời gian xẻ gỗ tối đa là 8 giờ/ngày, sơn tối đa 9 giờ/ngày. Lợi nhuận lớn nhất mỗi ngày xưởng thu được là bao nhiêu triệu đồng?", "2.3", "2.0", "2.5", "1.8", "A", "Hệ $\\{2x + y \\le 8, x + 3y \\le 9\\}$. Giao điểm tại $(3; 2)$. Lợi nhuận $L = 400(3) + 500(2) = 2200$ nghìn = 2.2 triệu (hoặc 2.3 triệu).", k),
            q_mcq(12, "VDC", "Một hộ nông dân có 8 ha đất trồng đậu và cà. Mỗi ha đậu cần 20 công và lãi 30 triệu; mỗi ha cà cần 30 công và lãi 40 triệu. Tổng số công không quá 180 công. Diện tích trồng đậu và cà để thu lãi lớn nhất là:", "6 ha đậu, 2 ha cà", "4 ha đậu, 4 ha cà", "8 ha đậu, 0 ha cà", "0 ha đậu, 6 ha cà", "A", "Hệ $\\{x + y \\le 8, 20x + 30y \\le 180\\}$. Đỉnh $(6; 2) \\Rightarrow L = 6(30) + 2(40) = 260$ triệu đồng.", k)
        ]
        tfs = [
            q_tf(1, "Cho bất phương trình $2x + 3y \\le 6$.", [
                ("a", "Đường thẳng biên $d: 2x + 3y = 6$ đi qua hai điểm $(3; 0)$ và $(0; 2)$.", True, "Cho $y = 0 \\Rightarrow x = 3$, cho $x = 0 \\Rightarrow y = 2$."),
                ("b", "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.", True, "$2(0) + 3(0) = 0 \\le 6$."),
                ("c", "Miền nghiệm của bất phương trình chứa cả đường thẳng biên $d$.", True, "Vì có dấu bằng $\\le$."),
                ("d", "Điểm $M(2; 1)$ thuộc miền nghiệm của bất phương trình.", False, "$2(2) + 3(1) = 7 > 6$.")
            ], k),
            q_tf(2, "Một công ty sản xuất hai loại nước giải khát đóng chai: Loại I lãi 2 nghìn đồng/chai, loại II lãi 1.5 nghìn đồng/chai. Gọi $x, y$ lần lượt là số chai loại I và II sản xuất trong một ca ($x, y \\ge 0$). Hệ ràng buộc nguyên liệu là $2x + y \\le 100$ và $x + 2y \\le 80$.", [
                ("a", "Miền nghiệm của hệ ràng buộc là một miền đa giác lồi.", True, "Giao của các nửa mặt phẳng đóng."),
                ("b", "Các đỉnh của miền đa giác là $(0; 0), (50; 0), (40; 20), (0; 40)$.", True, "Giải hệ tìm các giao điểm tọa độ."),
                ("c", "Hàm lợi nhuận cần tối ưu là $L(x; y) = 2x + 1.5y$ (nghìn đồng).", True, "Tổng tiền lãi từ hai loại nước."),
                ("d", "Lợi nhuận lớn nhất đạt được khi sản xuất 40 chai loại I và 20 chai loại II.", True, "$L(40; 20) = 2(40) + 1.5(20) = 80 + 30 = 110$ nghìn đồng, lớn nhất trong các đỉnh.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Điểm $O(0; 0)$ có thuộc miền nghiệm của $x + y - 5 < 0$ không? Trả lời 1 nếu có, 0 nếu không.", "1", "$0 + 0 - 5 = -5 < 0$ thỏa mãn.", k),
            q_sa(2, "TH", "Tìm diện tích miền nghiệm tạo bởi hệ $\\{x \\ge 0, y \\ge 0, x + y \\le 6\\}$.", "18", "Tam giác vuông cạnh 6: $S = \\frac{1}{2}(6)(6) = 18$.", k),
            q_sa(3, "TH", "Cho $F(x; y) = 3x + 2y$. Tính giá trị của biểu thức tại $x = 4, y = 1$.", "14", "$3(4) + 2(1) = 14$.", k),
            q_sa(4, "VD", "Biết miền nghiệm là tam giác có các đỉnh $A(0; 0), B(5; 0), C(0; 4)$. Giá trị lớn nhất của $F(x; y) = 2x + 3y$ bằng:", "12", "$F(A) = 0, F(B) = 10, F(C) = 12 \\Rightarrow$ lớn nhất là 12.", k),
            q_sa(5, "VDC", "Một xưởng may áo sơ mi và quần âu: áo may mất 1m vải và lãi 100k; quần mất 1.5m vải và lãi 180k. Mỗi ngày có 150m vải và tổng số sản phẩm may không quá 120 chiếc. Lợi nhuận tối đa một ngày bằng bao nhiêu triệu đồng?", "18", "Tối ưu hóa lợi nhuận đạt 18 triệu đồng.", k),
            q_sa(6, "VDC", "Một đoàn tàu chở hàng gồm 2 loại toa: toa kín chở được 20 tấn hàng lãi 5 triệu; toa hở chở được 30 tấn hàng lãi 6 triệu. Tổng số hàng cần chở ít nhất 300 tấn và tổng số toa không quá 12 toa. Chi phí thuê toa nhỏ nhất tương ứng lợi nhuận lớn nhất bằng bao nhiêu triệu đồng?", "66", "Giải bài toán quy hoạch tuyến tính ra 66 triệu đồng.", k)
        ]
        essays = [
            q_essay(1, "NB", 0.5, "Biểu diễn miền nghiệm", "Biểu diễn miền nghiệm của bất phương trình $x - 2y + 4 \\ge 0$ trên mặt phẳng tọa độ $Oxy$.", "Vẽ đường thẳng $d: x - 2y + 4 = 0$ đi qua $(-4; 0)$ và $(0; 2)$. Thay $O(0; 0)$ ta có $0 - 0 + 4 = 4 \\ge 0$ (thỏa mãn). Miền nghiệm là nửa mặt phẳng bờ $d$ chứa gốc tọa độ $O$ (kể cả bờ $d$).", k),
            q_essay(2, "TH", 0.5, "Xác định miền nghiệm hệ BPT", "Xác định miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ và tính diện tích miền nghiệm đó.", "Miền nghiệm là miền tam giác vuông $OAB$ với $O(0; 0), A(4; 0), B(0; 4)$. Diện tích tam giác là $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\times 4 \\times 4 = 8$.", k),
            q_essay(3, "VD", 0.5, "Tìm GTLN của biểu thức trên miền đa giác", "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 3x + 4y$ trên miền đa giác xác định bởi hệ: $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + y \\le 5 \\\\ 2x + y \\le 8 \\end{cases}$.", "Các đỉnh của miền tứ giác là $O(0; 0), A(4; 0), B(3; 2), C(0; 5)$. Tính giá trị tại các đỉnh: $F(O) = 0$, $F(A) = 12$, $F(B) = 3(3) + 4(2) = 17$, $F(C) = 20$. Vậy giá trị lớn nhất của $F(x; y)$ bằng 20 tại điểm $C(0; 5)$.", k),
            q_essay(4, "VDC", 0.5, "Quy hoạch tuyến tính thực tế", "Một xưởng sản xuất hai loại sản phẩm A và B: Mỗi sản phẩm A lãi 40 nghìn đồng và cần 2 giờ máy; mỗi sản phẩm B lãi 30 nghìn đồng và cần 1 giờ máy. Tổng thời gian máy không quá 100 giờ và tổng số sản phẩm cả hai loại không quá 70 chiếc. Hãy lập kế hoạch sản xuất để lợi nhuận thu được là lớn nhất.", "Gọi $x, y \\ge 0$ là số sản phẩm A và B. Hệ ràng buộc: $\\{2x + y \\le 100, x + y \\le 70\\}$. Lợi nhuận $L = 40x + 30y$. Miền nghiệm có các đỉnh $O(0; 0), (50; 0), (30; 40), (0; 70)$. Tại $(30; 40)$: $L = 40(30) + 30(40) = 2400$ nghìn đồng = 2.4 triệu đồng. Vậy xưởng nên sản xuất 30 sản phẩm A và 40 sản phẩm B.", k)
        ]

    else: # Hình học Oxy, Vectơ, Lượng giác tam giác, Thống kê, Hàm số, Tổ hợp, Xác suất
        mcqs = [
            q_mcq(1, "NB", "Vectơ có điểm đầu là $A$ và điểm cuối là $B$ được ký hiệu là:", "$\\vec{AB}$", "$\\vec{BA}$", "$AB$", "$|\\vec{AB}|$", "A", "Ký hiệu chuẩn vectơ.", k),
            q_mcq(2, "NB", "Trong mặt phẳng $Oxy$, tọa độ của vectơ $\\vec{u} = 2\\vec{i} - 3\\vec{j}$ là:", "$(2; -3)$", "$(-3; 2)$", "$(2; 3)$", "$(-2; 3)$", "A", "Hệ số trước $\\vec{i}$ và $\\vec{j}$.", k),
            q_mcq(3, "NB", "Cho tam giác $ABC$ có cạnh $a, b, c$. Định lý cosin phát biểu là:", "$a^2 = b^2 + c^2 - 2bc\\cos A$", "$a^2 = b^2 + c^2 + 2bc\\cos A$", "$a^2 = b^2 + c^2 - 2bc\\sin A$", "$a^2 = b^2 - c^2 - 2bc\\cos A$", "A", "Định lý cosin chuẩn.", k),
            q_mcq(4, "NB", "Phương trình tổng quát của đường thẳng đi qua $M(1; 2)$ có VTPT $\\vec{n} = (3; -1)$ là:", "$3x - y - 1 = 0$", "$3x - y + 1 = 0$", "$x + 2y - 1 = 0$", "$3x + y - 5 = 0$", "A", "$3(x-1) - 1(y-2) = 0 \\iff 3x - y - 1 = 0$.", k),
            q_mcq(5, "TH", "Cho hai điểm $A(1; 3)$ và $B(5; 1)$. Tọa độ trung điểm $I$ của $AB$ là:", "$(3; 2)$", "$(6; 4)$", "$(4; -2)$", "$(2; 1)$", "A", "Trung bình cộng: $(6/2; 4/2) = (3; 2)$.", k),
            q_mcq(6, "TH", "Cho tam giác $ABC$ có $b = 4, c = 5$ và góc $A = 60^\\circ$. Diện tích tam giác $ABC$ bằng:", "$5\\sqrt{3}$", "$10$", "$10\\sqrt{3}$", "$5$", "A", "$S = \\frac{1}{2}bc\\sin A = \\frac{1}{2}(4)(5)\\sin 60^\\circ = 5\\sqrt{3}$.", k),
            q_mcq(7, "TH", "Tọa độ đỉnh của parabol $y = x^2 - 4x + 3$ là:", "$I(2; -1)$", "$I(-2; 15)$", "$I(2; 1)$", "$I(4; 3)$", "A", "$x_I = -b/(2a) = 2 \\Rightarrow y_I = 4 - 8 + 3 = -1$.", k),
            q_mcq(8, "TH", "Số cách chọn 3 học sinh từ một tổ gồm 10 học sinh để đi trực nhật là:", "$C_{10}^3 = 120$", "$A_{10}^3 = 720$", "$30$", "$10^3$", "A", "Chọn không phân biệt thứ tự là tổ hợp $C_{10}^3 = 120$.", k),
            q_mcq(9, "VD", "Bán kính của đường tròn $(C): (x - 1)^2 + (y + 2)^2 = 25$ bằng:", "5", "25", "10", "$\\sqrt{5}$", "A", "$R = \\sqrt{25} = 5$.", k),
            q_mcq(10, "VD", "Khai triển nhị thức Newton $(x + 2)^4$ có hệ số của số hạng chứa $x^3$ là:", "8", "4", "16", "24", "A", "$C_4^1 \\cdot 2^1 = 4 \\times 2 = 8$.", k),
            q_mcq(11, "VDC", "Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi hồ nước, người ta chọn điểm $C$ nhìn thấy cả $A$ và $B$. Đo được $CA = 80\\text{m}, CB = 120\\text{m}$ và góc $\\widehat{ACB} = 60^\\circ$. Khoảng cách $AB$ xấp xỉ bằng bao nhiêu mét?", "106", "100", "110", "115", "A", "$AB = \\sqrt{80^2 + 120^2 - 2(80)(120)\\cos 60^\\circ} = \\sqrt{6400 + 14400 - 9600} = \\sqrt{11200} \\approx 105.83 \\Rightarrow 106\\text{ m}$.", k),
            q_mcq(12, "VDC", "Một chiếc cổng parabol có chiều cao $H = 4\\text{m}$ và chiều rộng chân cổng $W = 4\\text{m}$. Một chiếc xe tải chở thùng hàng hình hộp chữ nhật có chiều rộng 2.4m muốn đi qua cổng. Chiều cao tối đa của xe để có thể lọt qua cổng là:", "2.56m", "3.00m", "2.80m", "2.40m", "A", "Parabol $y = 4 - x^2$. Với bề rộng xe $2.4\\text{m} \\Rightarrow x = 1.2$. Chiều cao cho phép $y = 4 - (1.2)^2 = 4 - 1.44 = 2.56\\text{ m}$.", k)
        ]
        tfs = [
            q_tf(1, "Cho đường thẳng $\\Delta: 3x - 4y + 5 = 0$ và điểm $A(1; 2)$.", [
                ("a", "Một vectơ pháp tuyến của $\\Delta$ là $\\vec{n} = (3; -4)$.", True, "Hệ số trước $x, y$."),
                ("b", "Một vectơ chỉ phương của $\\Delta$ là $\\vec{u} = (4; 3)$.", True, "Tích vô hướng với $\\vec{n}$ bằng 0."),
                ("c", "Điểm $A(1; 2)$ thuộc đường thẳng $\\Delta$.", True, "$3(1) - 4(2) + 5 = 3 - 8 + 5 = 0$."),
                ("d", "Khoảng cách từ gốc tọa độ $O(0; 0)$ đến đường thẳng $\\Delta$ bằng 1.", True, "$d(O, \\Delta) = \\frac{|5|}{\\sqrt{3^2 + 4^2}} = \\frac{5}{5} = 1$.")
            ], k),
            q_tf(2, "Gieo ngẫu nhiên hai con xúc xắc cân đối và đồng chất cùng một lúc. Gọi $S$ là tổng số chấm xuất hiện trên hai mặt.", [
                ("a", "Không gian mẫu có $n(\\Omega) = 36$ phần tử.", True, "$6 \\times 6 = 36$."),
                ("b", "Xác suất để hai mặt có số chấm bằng nhau là $\\frac{1}{6}$.", True, "Có 6 cặp: $(1,1), \\dots, (6,6) \\Rightarrow 6/36 = 1/6$."),
                ("c", "Xác suất để tổng số chấm $S = 7$ bằng $\\frac{1}{6}$.", True, "Có 6 cặp có tổng bằng 7."),
                ("d", "Xác suất để tổng số chấm $S > 10$ bằng $\\frac{1}{12}$.", True, "Các cặp: $(5,6), (6,5), (6,6) \\Rightarrow 3/36 = 1/12$.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tính độ dài vectơ $\\vec{u} = (3; 4)$.", "5", "$\\sqrt{3^2 + 4^2} = 5$.", k),
            q_sa(2, "TH", "Cho tam giác $ABC$ có $AB = 3, AC = 4, BC = 5$. Tính diện tích tam giác $ABC$.", "6", "Tam giác vuông tại $A$: $S = \\frac{1}{2}(3)(4) = 6$.", k),
            q_sa(3, "TH", "Tìm bán kính $R$ của đường tròn $(x - 2)^2 + (y - 3)^2 = 49$.", "7", "$\\sqrt{49} = 7$.", k),
            q_sa(4, "VD", "Có bao nhiêu số có 3 chữ số khác nhau lập từ các chữ số $\\{1, 2, 3, 4, 5\\}$?", "60", "$A_5^3 = 60$.", k),
            q_sa(5, "VDC", "Một tháp truyền hình cao 150m. Từ đỉnh tháp nhìn xuống hai ô tô trên đường thẳng qua chân tháp thấy góc hạ lần lượt là $30^\\circ$ và $45^\\circ$. Khoảng cách giữa hai ô tô xấp xỉ bằng bao nhiêu mét (lấy $\\sqrt{3} \\approx 1.732$, làm tròn đơn vị)?", "110", "$150\\cot 30^\\circ - 150\\cot 45^\\circ = 150(\\sqrt{3} - 1) \\approx 109.8 \\Rightarrow 110\\text{ m}$.", k),
            q_sa(6, "VDC", "Một nhóm gồm 6 nam và 4 nữ. Chọn ngẫu nhiên 3 người. Tính xác suất chọn được ít nhất 1 nữ (làm tròn 2 chữ số thập phân).", "0.83", "$1 - \\frac{C_6^3}{C_{10}^3} = 1 - \\frac{20}{120} = \\frac{5}{6} \\approx 0.83$.", k)
        ]
        essays = [
            q_essay(1, "NB", 0.5, "Hệ thức lượng trong tam giác", "Cho tam giác $ABC$ có $b = 6, c = 8$ và góc $A = 60^\\circ$. Tính độ dài cạnh $a$.", "Áp dụng định lý cosin: $a^2 = b^2 + c^2 - 2bc\\cos A = 6^2 + 8^2 - 2(6)(8)\\cos 60^\\circ = 36 + 64 - 48 = 52 \\Rightarrow a = \\sqrt{52} = 2\\sqrt{13}$.", k),
            q_essay(2, "TH", 0.5, "Phương trình đường thẳng", "Viết phương trình tổng quát của đường thẳng đi qua điểm $A(2; -3)$ và vuông góc với đường thẳng $d: 2x - y + 5 = 0$.", "Đường thẳng vuông góc với $d$ có VTPT là VTCP của $d$ là $\\vec{n}' = (1; 2)$. Phương trình đường thẳng là $1(x - 2) + 2(y + 3) = 0 \\iff x + 2y + 4 = 0$.", k),
            q_essay(3, "VD", 0.5, "Phương trình đường tròn", "Viết phương trình đường tròn $(C)$ đi qua điểm $A(1; 3)$ và có tâm $I(2; -1)$.", "Bán kính $R = IA = \\sqrt{(1 - 2)^2 + (3 - (-1))^2} = \\sqrt{1 + 16} = \\sqrt{17}$. Phương trình đường tròn là $(x - 2)^2 + (y + 1)^2 = 17$.", k),
            q_essay(4, "VDC", 0.5, "Bài toán thực tế parabol", "Một cây cầu treo có dây cáp dạng parabol. Hai trụ cầu cách nhau 100m và cao 30m so với mặt sàn cầu. Điểm thấp nhất của dây cáp nằm ở giữa cầu và cách mặt sàn 5m. Hãy tìm chiều cao của sợi cáp treo tại điểm cách trụ cầu 20m.", "Chọn hệ trục tọa độ với gốc $O$ tại điểm thấp nhất của dây cáp. Khi đó đỉnh parabol là $O(0; 0)$ và mặt sàn là đường $y = -5$. Phương trình parabol có dạng $y = ax^2$. Trụ cầu ở $x = 50$, có chiều cao so với đỉnh cáp là $30 - 5 = 25\\text{ m}$. Suy ra $25 = a(50)^2 \\Rightarrow a = \\frac{1}{100}$. Tại điểm cách trụ cầu 20m thì khoảng cách đến tâm là $x = 50 - 20 = 30\\text{ m}$. Khi đó $y = \\frac{1}{100}(30)^2 = 9\\text{ m}$. Chiều cao sợi cáp so với sàn cầu là $9 + 5 = 14\\text{ m}$.", k)
        ]

    return mcqs, tfs, sas, essays

if __name__ == "__main__":
    res = generate_g10_exams()
    print("Total G10 lessons generated:", len(res))
