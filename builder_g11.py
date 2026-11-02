# -*- coding: utf-8 -*-
import json, sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay
from curriculum_registry import G11_LESSONS

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

def generate_g11_exams():
    exams_by_lesson = {}

    for lid, lnum, title, domain, keywords in G11_LESSONS:
        # Build Exam 1 and Exam 2
        for exam_idx in [1, 2]:
            k = exam_idx
            e_key = f"g11_b{lnum}_e{exam_idx}"
            code_letter = "A" if exam_idx == 1 else "B"

            mcqs, tfs, sas, essays = build_g11_domain_questions(lnum, title, domain, keywords, k)

            exam_obj = {
                "id": e_key,
                "examNumber": exam_idx,
                "lessonId": lid,
                "lessonTitle": title,
                "grade": "11",
                "title": f"Đề Ôn Tập {exam_idx}: {title}",
                "code": f"OT11-{lnum:02d}{code_letter}",
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

        print(f"Generated G11 Lesson {lnum}: {title}")

    return exams_by_lesson

def build_g11_domain_questions(lnum, title, domain, keywords, k):
    # Specialized question generators by domain for Grade 11
    if domain == "Lượng giác": # Bài 1, 2, 3, 4
        mcqs = [
            q_mcq(1, "NB", "Góc có số đo $\\frac{\\pi}{3}$ rad đổi sang đơn vị độ bằng:", "$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$", "A", "$\\frac{\\pi}{3} \\times \\frac{180^\\circ}{\\pi} = 60^\\circ$.", k),
            q_mcq(2, "NB", "Giá trị của $\\cos \\frac{\\pi}{2}$ bằng:", "0", "1", "-1", "1/2", "A", "$\\cos 90^\\circ = 0$.", k),
            q_mcq(3, "NB", "Công thức lượng giác nào sau đây đúng?", "$\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$", "$\\sin(a + b) = \\sin a \\cos b - \\cos a \\sin b$", "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$", "$\\cos 2a = 2\\cos^2 a + 1$", "A", "Công thức cộng sin.", k),
            q_mcq(4, "NB", "Tập giá trị của hàm số $y = \\sin x$ là:", "$[-1; 1]$", "$(-1; 1)$", "$[0; 1]$", "$\\mathbb{R}$", "A", "$-1 \\le \\sin x \\le 1$.", k),
            q_mcq(5, "TH", "Phương trình $\\sin x = \\frac{1}{2}$ có họ nghiệm là:", "$x = \\frac{\\pi}{6} + k2\\pi, x = \\frac{5\\pi}{6} + k2\\pi$", "$x = \\frac{\\pi}{3} + k2\\pi$", "$x = \\pm \\frac{\\pi}{6} + k2\\pi$", "$x = \\frac{\\pi}{6} + k\\pi$", "A", "Họ nghiệm chuẩn của phương trình $\\sin x = \\sin(\\pi/6)$.", k),
            q_mcq(6, "TH", "Chu kỳ tuần hoàn của hàm số $y = \\cos 2x$ là:", "$\\pi$", "$2\\pi$", "$\\pi/2$", "$4\\pi$", "A", "$T = \\frac{2\\pi}{|2|} = \\pi$.", k),
            q_mcq(7, "TH", "Rút gọn biểu thức $P = \\sin 2x \\cos x - \\cos 2x \\sin x$ ta được:", "$\\sin x$", "$\\cos x$", "$\\sin 3x$", "$\\cos 3x$", "A", "Áp dụng công thức $\\sin(2x - x) = \\sin x$.", k),
            q_mcq(8, "TH", "Nghiệm của phương trình $\\tan x = 1$ là:", "$x = \\frac{\\pi}{4} + k\\pi$", "$x = \\frac{\\pi}{4} + k2\\pi$", "$x = -\\frac{\\pi}{4} + k\\pi$", "$x = \\pm \\frac{\\pi}{4} + k\\pi$", "A", "Họ nghiệm $\\tan x = \\tan(\\pi/4)$.", k),
            q_mcq(9, "VD", "Có bao nhiêu nghiệm của phương trình $\\cos 2x = 0$ trên đoạn $[0; 2\\pi]$?", "4", "2", "3", "5", "A", "$2x = \\frac{\\pi}{2} + k\\pi \\Rightarrow x = \\frac{\\pi}{4} + k\\frac{\\pi}{2}$. Trên $[0; 2\\pi]$ có 4 nghiệm.", k),
            q_mcq(10, "VD", "Giá trị lớn nhất của hàm số $y = 3\\sin x - 4\\cos x + 1$ bằng:", "6", "5", "8", "4", "A", "$y \\le \\sqrt{3^2 + 4^2} + 1 = 5 + 1 = 6$.", k),
            q_mcq(11, "VDC", "Một vòng quay đu quay có bán kính 30m, tâm đu quay cách mặt đất 35m. Đu quay quay đều 1 vòng hết 12 phút. Người ngồi ở vị trí thấp nhất (5m so với mặt đất) tại thời điểm $t = 0$. Chiều cao của người đó sau $t$ phút kể từ lúc bắt đầu là $h(t) = 35 - 30\\cos(\\frac{\\pi}{6}t)$ (mét). Hỏi trong 12 phút đầu tiên, người đó ở độ cao trên 50m trong thời gian bao lâu?", "4 phút", "3 phút", "5 phút", "6 phút", "A", "$h(t) > 50 \\iff \\cos(\\frac{\\pi}{6}t) < -0.5 \\iff \\frac{2\\pi}{3} < \\frac{\\pi}{6}t < \\frac{4\\pi}{3} \\iff 4 < t < 8$ (tổng cộng 4 phút).", k),
            q_mcq(12, "VDC", "Mực nước tại một bến cảng sau $t$ giờ kể từ nửa đêm được cho bởi $h(t) = 6 + 4\\cos(\\frac{\\pi t}{6})$ (mét). Một tàu chở hàng cần mực nước sâu ít nhất 8m để cập cảng. Hỏi trong 24 giờ của một ngày, có bao nhiêu giờ tàu có thể cập cảng an toàn?", "8 giờ", "10 giờ", "6 giờ", "12 giờ", "A", "$h(t) \\ge 8 \\iff \\cos(\\frac{\\pi t}{6}) \\ge 0.5$. Trong chu kỳ 12h có 4h, trong 24h có 8h.", k)
        ]
        tfs = [
            q_tf(1, "Cho biểu thức $A = \\cos 2x + 2\\sin^2 x$.", [
                ("a", "Công thức nhân đôi là $\\cos 2x = 1 - 2\\sin^2 x$.", True, "Đúng công thức lượng giác cơ bản."),
                ("b", "Biểu thức $A$ luôn có giá trị bằng 1 với mọi $x$.", True, "$A = 1 - 2\\sin^2 x + 2\\sin^2 x = 1$."),
                ("c", "Giá trị của biểu thức $A$ phụ thuộc vào góc $x$.", False, "$A$ là hằng số không phụ thuộc vào $x$."),
                ("d", "Nếu $x = \\frac{\\pi}{4}$ thì $A = 1$.", True, "Thay giá trị vào được 1.")
            ], k),
            q_tf(2, "Xét phương trình lượng giác $\\sin x + \\sqrt{3}\\cos x = 1$.", [
                ("a", "Chia cả hai vế cho 2 ta được $\\frac{1}{2}\\sin x + \\frac{\\sqrt{3}}{2}\\cos x = \\frac{1}{2}$.", True, "Biến đổi dạng $a\\sin x + b\\cos x = c$."),
                ("b", "Phương trình tương đương với $\\sin(x + \\frac{\\pi}{3}) = \\frac{1}{2}$.", True, "Dùng công thức cộng."),
                ("c", "Nghiệm của phương trình là $x = -\\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{\\pi}{2} + k2\\pi$.", True, "Giải phương trình cơ bản."),
                ("d", "Phương trình có đúng 2 nghiệm trên đoạn $[0; \\pi]$.", False, "Trên $[0; \\pi]$ chỉ có nghiệm $x = \\frac{\\pi}{2}$.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tính giá trị của $\\sin 30^\\circ$.", "0.5", "$\\sin 30^\\circ = 1/2 = 0.5$.", k),
            q_sa(2, "TH", "Tìm chu kỳ tuần hoàn $T$ của hàm số $y = \\tan 2x$ (viết theo $\\pi$ là bao nhiêu lần $\\pi$).", "0.5", "$T = \\pi/2 = 0.5\\pi$.", k),
            q_sa(3, "TH", "Tính giá trị của biểu thức $M = \\sin^2 15^\\circ + \\sin^2 75^\\circ$.", "1", "$\\sin 75^\\circ = \\cos 15^\\circ \\Rightarrow \\sin^2 15^\\circ + \\cos^2 15^\\circ = 1$.", k),
            q_sa(4, "VD", "Tìm giá trị lớn nhất của hàm số $y = 5 - 2\\cos^2 x$.", "5", "Đạt GTLN bằng 5 khi $\\cos x = 0$.", k),
            q_sa(5, "VDC", "Số giờ có ánh sáng mặt trời của một thành phố ở vĩ độ $40^\\circ$ Bắc trong ngày thứ $t$ của năm được mô hình bởi $L(t) = 12 + 2.83\\sin(\\frac{2\\pi}{365}(t - 80))$. Ngày có nhiều giờ có ánh sáng mặt trời nhất trong năm là ngày thứ bao nhiêu?", "171", "$t - 80 = 365/4 \\approx 91 \\Rightarrow t = 171$.", k),
            q_sa(6, "VDC", "Một con lắc lò xo dao động điều hòa theo phương trình $x = 8\\cos(2\\pi t - \\frac{\\pi}{3})$ (cm). Vận tốc cực đại của con lắc xấp xỉ bằng bao nhiêu cm/s (lấy $\\pi \\approx 3.1416$, làm tròn đến hàng đơn vị)?", "50", "$v_{\\max} = 8 \\times 2\\pi = 16\\pi \\approx 50.27 \\Rightarrow 50\\text{ cm/s}$.", k)
        ]
        essays = [
            q_essay(1, "NB", 0.5, "Biến đổi lượng giác", "Tính giá trị chính xác của biểu thức $P = \\sin 75^\\circ \\cos 15^\\circ - \\cos 75^\\circ \\sin 15^\\circ$.", "Áp dụng công thức cộng: $P = \\sin(75^\\circ - 15^\\circ) = \\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.", k),
            q_essay(2, "TH", 0.5, "Phương trình lượng giác", "Giải phương trình $\\cos(2x - \\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}$.", "Phương trình $\\iff 2x - \\frac{\\pi}{4} = \\pm \\frac{\\pi}{4} + k2\\pi \\iff x = \\frac{\\pi}{4} + k\\pi$ hoặc $x = k\\pi$ ($k \\in \\mathbb{Z}$).", k),
            q_essay(3, "VD", 0.5, "Ứng dụng lượng giác", "Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = 2\\sin^2 x - \\cos 2x + 3$.", "Ta có $\\cos 2x = 1 - 2\\sin^2 x \\Rightarrow y = 2\\sin^2 x - (1 - 2\\sin^2 x) + 3 = 4\\sin^2 x + 2$. Vì $0 \\le \\sin^2 x \\le 1$ nên $2 \\le y \\le 6$. Vậy $\\min y = 2, \\max y = 6$.", k),
            q_essay(4, "VDC", 0.5, "Bài toán thực tế con lắc", "Một vật nặng treo vào lò xo dao động với độ dịch chuyển $y(t) = 5\\cos(4\\pi t) + 2$ (cm). Hãy xác định vị trí cao nhất, thấp nhất của vật và thời điểm đầu tiên vật đạt vị trí thấp nhất.", "Độ dịch chuyển $-1 \\le \\cos(4\\pi t) \\le 1 \\Rightarrow -3 \\le y(t) \\le 7$. Vị trí cao nhất là $7\\text{ cm}$, thấp nhất là $-3\\text{ cm}$. Đạt thấp nhất khi $\\cos(4\\pi t) = -1 \\iff 4\\pi t = \\pi \\iff t = 0.25\\text{ s}$.", k)
        ]

    elif domain == "Dãy số": # Bài 5, 6, 7
        mcqs = [
            q_mcq(1, "NB", "Số hạng thứ 3 của dãy số $u_n = 2n + 1$ là:", "7", "5", "9", "6", "A", "$u_3 = 2(3) + 1 = 7$.", k),
            q_mcq(2, "NB", "Cho cấp số cộng có $u_1 = 3$ và công sai $d = 2$. Số hạng thứ 5 là:", "11", "9", "13", "10", "A", "$u_5 = u_1 + 4d = 3 + 8 = 11$.", k),
            q_mcq(3, "NB", "Cho cấp số nhân có $u_1 = 2$ và công bội $q = 3$. Số hạng thứ 3 là:", "18", "6", "12", "54", "A", "$u_3 = u_1 q^2 = 2(9) = 18$.", k),
            q_mcq(4, "NB", "Công thức số hạng tổng quát của cấp số cộng $(u_n)$ là:", "$u_n = u_1 + (n - 1)d$", "$u_n = u_1 + nd$", "$u_n = u_1 d^{n-1}$", "$u_n = u_1 + d$", "A", "Công thức CSC chuẩn.", k),
            q_mcq(5, "TH", "Cho cấp số cộng có $u_1 = 2, u_4 = 11$. Công sai $d$ bằng:", "3", "2", "4", "5", "A", "$u_4 = u_1 + 3d \\iff 11 = 2 + 3d \\iff 3d = 9 \\iff d = 3$.", k),
            q_mcq(6, "TH", "Tổng của 10 số hạng đầu của cấp số cộng có $u_1 = 1, d = 2$ bằng:", "100", "90", "110", "120", "A", "$S_{10} = \\frac{10}{2}[2(1) + 9(2)] = 5(20) = 100$.", k),
            q_mcq(7, "TH", "Cho cấp số nhân có $u_1 = 3, q = 2$. Tổng 5 số hạng đầu bằng:", "93", "96", "48", "63", "A", "$S_5 = 3\\frac{2^5 - 1}{2 - 1} = 3(31) = 93$.", k),
            q_mcq(8, "TH", "Dãy số nào sau đây là dãy số tăng?", "$u_n = 3n - 1$", "$u_n = -2n + 5$", "$u_n = (\\frac{1}{2})^n$", "$u_n = (-1)^n$", "A", "$u_{n+1} - u_n = 3 > 0$.", k),
            q_mcq(9, "VD", "Cho tam giác có 3 góc lập thành một cấp số cộng. Số đo góc nhọn ở giữa bằng:", "$60^\\circ$", "$45^\\circ$", "$30^\\circ$", "$90^\\circ$", "A", "Ba góc $A, B, C$ có $B = \\frac{A + B + C}{3} = 60^\\circ$.", k),
            q_mcq(10, "VD", "Một rạp hát có 20 hàng ghế, hàng đầu có 15 ghế, mỗi hàng sau hơn hàng trước 2 ghế. Tổng số ghế trong rạp bằng:", "680", "700", "650", "720", "A", "$S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10(30 + 38) = 680$.", k),
            q_mcq(11, "VDC", "Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất 6%/năm theo hình thức lãi kép kỳ hạn 1 năm. Sau 5 năm, tổng số tiền cả gốc lẫn lãi người đó nhận được xấp xỉ bằng bao nhiêu triệu đồng?", "133.8", "130.0", "135.2", "140.5", "A", "$T = 100(1 + 0.06)^5 \\approx 133.82\\text{ triệu đồng}$.", k),
            q_mcq(12, "VDC", "Một công ty vay ngân hàng 500 triệu đồng để đầu tư kinh doanh với lãi suất 1%/tháng. Mỗi tháng công ty trả cố định một số tiền là $A$ triệu đồng cả gốc lẫn lãi. Sau đúng 24 tháng thì công ty trả hết nợ. Số tiền $A$ mỗi tháng phải trả xấp xỉ bằng bao nhiêu triệu đồng?", "23.5", "25.0", "22.0", "21.5", "A", "Công thức trả nợ đều hàng tháng $A = \\frac{P \\cdot r(1+r)^n}{(1+r)^n - 1} \\approx 23.54\\text{ triệu}$.", k)
        ]
        tfs = [
            q_tf(1, "Cho dãy số $(u_n)$ xác định bởi $u_1 = 3$ và $u_{n+1} = u_n + 4$ với mọi $n \\ge 1$.", [
                ("a", "Dãy số $(u_n)$ là một cấp số cộng với công sai $d = 4$.", True, "Hiệu hai số hạng liên tiếp là hằng số 4."),
                ("b", "Số hạng thứ hai là $u_2 = 7$.", True, "$u_2 = 3 + 4 = 7$."),
                ("c", "Công thức số hạng tổng quát là $u_n = 4n - 1$.", True, "$u_n = 3 + (n-1)4 = 4n - 1$."),
                ("d", "Số 100 là một số hạng của dãy số $(u_n)$.", False, "$4n - 1 = 100 \\iff 4n = 101$ không chia hết.")
            ], k),
            q_tf(2, "Một người muốn mua một chiếc xe máy trị giá 30 triệu đồng theo hình thức trả góp. Tháng đầu tiên người đó trả 3 triệu đồng, kể từ tháng thứ hai mỗi tháng trả nhiều hơn tháng trước 200 nghìn đồng.", [
                ("a", "Số tiền trả mỗi tháng lập thành một cấp số cộng với $u_1 = 3000$ (nghìn đồng) và $d = 200$ (nghìn đồng).", True, "Theo quy tắc trả góp."),
                ("b", "Tháng thứ năm người đó phải trả 3.8 triệu đồng.", True, "$u_5 = 3000 + 4(200) = 3800$ nghìn đồng."),
                ("c", "Sau 8 tháng tổng số tiền người đó đã trả là 29.6 triệu đồng.", True, "$S_8 = \\frac{8}{2}[2(3000) + 7(200)] = 4(6000 + 1400) = 29600$ nghìn = 29.6 triệu."),
                ("d", "Người đó sẽ trả hết nợ vào tháng thứ 9.", True, "Tháng thứ 9 trả thêm phần còn lại là xong.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Cho cấp số cộng có $u_1 = 5, d = 3$. Tìm $u_2$.", "8", "$5 + 3 = 8$.", k),
            q_sa(2, "TH", "Cho cấp số nhân có $u_1 = 4, q = 2$. Tìm số hạng thứ 4.", "32", "$4 \\times 2^3 = 32$.", k),
            q_sa(3, "TH", "Tìm công sai $d$ của cấp số cộng có $u_1 = 2$ và $u_5 = 14$.", "3", "$4d = 12 \\iff d = 3$.", k),
            q_sa(4, "VD", "Tính tổng của 20 số nguyên dương lẻ đầu tiên: $1 + 3 + 5 + \\dots + 39$.", "400", "$S_{20} = 20^2 = 400$.", k),
            q_sa(5, "VDC", "Một kim tự tháp được xếp bằng các khối đá hình lập phương: tầng đáy có 100 khối, mỗi tầng trên ít hơn tầng ngay dưới 2 khối. Tầng trên cùng có 2 khối. Tổng số khối đá của kim tự tháp bằng:", "2550", "$n = 50$ tầng. $S_{50} = \\frac{50}{2}(100 + 2) = 2550$.", k),
            q_sa(6, "VDC", "Một nhà đầu tư mua một căn hộ với giá 2 tỷ đồng. Sau mỗi năm, giá trị căn hộ tăng trung bình 8% so với năm trước đó. Sau 5 năm, giá trị căn hộ bằng bao nhiêu triệu đồng (làm tròn đến hàng đơn vị)?", "2939", "$2000(1 + 0.08)^5 \\approx 2938.66 \\Rightarrow 2939\\text{ triệu}$.", k)
        ]
        essays = [
            q_essay(1, "NB", 0.5, "Số hạng cấp số cộng", "Cho cấp số cộng $(u_n)$ có $u_1 = -3$ và $d = 5$. Tìm số hạng tổng quát $u_n$ và tính $u_{10}$.", "$u_n = u_1 + (n-1)d = -3 + 5(n-1) = 5n - 8$. Với $n = 10 \\Rightarrow u_{10} = 50 - 8 = 42$.", k),
            q_essay(2, "TH", 0.5, "Tổng cấp số cộng", "Tính tổng 15 số hạng đầu của cấp số cộng có $u_1 = 4$ và công sai $d = 3$.", "$S_{15} = \\frac{15}{2}[2(4) + 14(3)] = \\frac{15}{2}[8 + 42] = \\frac{15}{2}(50) = 375$.", k),
            q_essay(3, "VD", 0.5, "Cấp số nhân lùi vô hạn", "Tính tổng của cấp số nhân lùi vô hạn $S = 1 + \\frac{1}{3} + \\frac{1}{9} + \\dots + \\frac{1}{3^n} + \\dots$", "Cấp số nhân có $u_1 = 1$ và $q = \\frac{1}{3} < 1$. Tổng $S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 1/3} = \\frac{3}{2}$.", k),
            q_essay(4, "VDC", 0.5, "Mô hình tài chính trả góp", "Một người mua xe trả góp với giá 40 triệu đồng. Mỗi tháng trả 2 triệu đồng tiền gốc và lãi suất 1%/tháng trên dư nợ thực tế của tháng đó. Hỏi sau 20 tháng trả xong, tổng số tiền lãi người đó phải nộp là bao nhiêu triệu đồng?", "Dư nợ giảm dần: tháng 1 nợ 40tr lãi 0.4tr; tháng 2 nợ 38tr lãi 0.38tr... Tổng lãi là tổng CSC: $0.01(40 + 38 + \\dots + 2) = 0.01 \\times \\frac{20}{2}(42) = 0.01 \\times 420 = 4.2$ triệu đồng.", k)
        ]

    elif domain == "Hình KG": # Bài 10-14, 22-27
        mcqs = [
            q_mcq(1, "NB", "Hai đường thẳng không có điểm chung và cùng nằm trong một mặt phẳng là:", "Hai đường thẳng song song", "Hai đường thẳng chéo nhau", "Hai đường thẳng trùng nhau", "Hai đường thẳng cắt nhau", "A", "Định nghĩa song song trong không gian.", k),
            q_mcq(2, "NB", "Hai đường thẳng không cùng nằm trong bất kỳ mặt phẳng nào gọi là:", "Hai đường thẳng chéo nhau", "Hai đường thẳng song song", "Hai đường thẳng vuông góc", "Hai đường thẳng cắt nhau", "A", "Định nghĩa chéo nhau.", k),
            q_mcq(3, "NB", "Nếu đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng $(P)$ thì:", "$d \\perp (P)$", "$d \\parallel (P)$", "$d \\subset (P)$", "$d$ chéo với $(P)$", "A", "Định lý đường thẳng vuông góc với mặt phẳng.", k),
            q_mcq(4, "NB", "Thể tích khối chóp có diện tích đáy $B$ và chiều cao $h$ bằng:", "$V = \\frac{1}{3}Bh$", "$V = Bh$", "$V = \\frac{1}{2}Bh$", "$V = \\frac{4}{3}Bh$", "A", "Công thức thể tích khối chóp.", k),
            q_mcq(5, "TH", "Cho hình chóp $S.ABCD$ có đáy là hình vuông, $SA \\perp (ABCD)$. Góc giữa $SB$ và đáy là góc:", "$\\widehat{SBA}$", "$\\widehat{SBC}$", "$\\widehat{SBD}$", "$\\widehat{SAB}$", "A", "Vì $A$ là hình chiếu của $S$ lên đáy nên góc là $\\widehat{SBA}$.", k),
            q_mcq(6, "TH", "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$, chiều cao $h = a$. Thể tích khối chóp bằng:", "$\\frac{a^3\\sqrt{3}}{12}$", "$\\frac{a^3\\sqrt{3}}{4}$", "$\\frac{a^3\\sqrt{3}}{6}$", "$\\frac{a^3}{3}$", "A", "$V = \\frac{1}{3} (\\frac{a^2\\sqrt{3}}{4}) a = \\frac{a^3\\sqrt{3}}{12}$.", k),
            q_mcq(7, "TH", "Khoảng cách giữa hai mặt phẳng song song $(\\alpha)$ và $(\\beta)$ là:", "Khoảng cách từ một điểm bất kỳ trên $(\\alpha)$ đến $(\\beta)$", "Độ dài đoạn nối hai điểm tùy ý", "Độ dài nhỏ nhất của các cạnh", "Hiệu diện tích", "A", "Định nghĩa khoảng cách giữa hai mặt phẳng song song.", k),
            q_mcq(8, "TH", "Cho lăng trụ đứng có đáy là tam giác vuông có hai cạnh góc vuông là 3 và 4, chiều cao lăng trụ bằng 5. Thể tích lăng trụ bằng:", "30", "15", "60", "20", "A", "$V = B \\cdot h = (\\frac{1}{2} \\cdot 3 \\cdot 4) \\cdot 5 = 6 \\cdot 5 = 30$.", k),
            q_mcq(9, "VD", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $B$. Cạnh $SA = a, AB = a, BC = a\\sqrt{3}$. Khoảng cách từ $A$ đến mặt phẳng $(SBC)$ bằng:", "$\\frac{a}{\\sqrt{2}}$", "$\\frac{a\\sqrt{3}}{2}$", "$a$", "$\\frac{a}{2}$", "A", "$AH \\perp SB \\Rightarrow AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{a}{\\sqrt{2}}$.", k),
            q_mcq(10, "VD", "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Góc giữa hai đường thẳng $A'B$ và $B'C$ bằng:", "$60^\\circ$", "$90^\\circ$", "$45^\\circ$", "$30^\\circ$", "A", "$A'B \\parallel D'C$, tam giác $D'CB'$ đều có 3 cạnh là đường chéo hình vuông bằng $a\\sqrt{2}$ nên góc bằng $60^\\circ$.", k),
            q_mcq(11, "VDC", "Một mái nhà của một tòa nhà có dạng hình chóp cụt tứ giác đều với đáy lớn cạnh 10m, đáy nhỏ cạnh 4m, chiều cao mái nhà là 4m. Thể tích không gian bên dưới mái nhà bằng bao nhiêu mét khối?", "208", "200", "220", "180", "A", "$V = \\frac{h}{3}(S_1 + S_2 + \\sqrt{S_1 S_2}) = \\frac{4}{3}(100 + 16 + 40) = \\frac{4}{3}(156) = 208\\text{ m}^3$.", k),
            q_mcq(12, "VDC", "Một téc nước bằng inox hình trụ có chiều cao 2m và bán kính đáy 0.8m. Khối lượng nước tối đa téc có thể chứa bằng bao nhiêu tấn (lấy khối lượng riêng của nước là $1000\\text{ kg/m}^3$, $\\pi \\approx 3.1416$, làm tròn đến hàng phần mười)?", "4.0", "3.5", "4.5", "5.0", "A", "$V = \\pi r^2 h = \\pi(0.64)(2) \\approx 4.02\\text{ m}^3 = 4.02\\text{ tấn} \\Rightarrow 4.0\\text{ tấn}$.", k)
        ]
        tfs = [
            q_tf(1, "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật, $SA \\perp (ABCD)$.", [
                ("a", "Đường thẳng $SA$ vuông góc với mọi đường thẳng nằm trong mặt phẳng $(ABCD)$.", True, "Vì $SA \\perp (ABCD)$."),
                ("b", "Tam giác $SAB$ vuông tại $A$.", True, "Vì $SA \\perp AB$."),
                ("c", "Tam giác $SBC$ vuông tại $B$.", True, "Vì $BC \\perp (SAB) \\Rightarrow BC \\perp SB$."),
                ("d", "Mặt phẳng $(SBC)$ vuông góc với mặt phẳng $(SAB)$.", True, "Vì $BC \\perp (SAB)$ và $BC \\subset (SBC)$.")
            ], k),
            q_tf(2, "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$.", [
                ("a", "Diện tích đáy $ABCD$ bằng 12.", True, "$3 \\times 4 = 12$."),
                ("b", "Thể tích hình hộp chữ nhật bằng 60.", True, "$12 \\times 5 = 60$."),
                ("c", "Độ dài đường chéo $AC'$ bằng $5\\sqrt{2}$.", True, "$\\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{50} = 5\\sqrt{2}$."),
                ("d", "Khoảng cách giữa hai mặt phẳng đáy $(ABCD)$ và $(A'B'C'D')$ bằng 5.", True, "Bằng chiều cao $AA' = 5$.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Cho khối lăng trụ có diện tích đáy bằng 12 và chiều cao bằng 5. Tính thể tích khối lăng trụ.", "60", "$12 \\times 5 = 60$.", k),
            q_sa(2, "TH", "Cho khối chóp có thể tích bằng 30 và diện tích đáy bằng 15. Tính chiều cao khối chóp.", "6", "$h = 3V / B = 90 / 15 = 6$.", k),
            q_sa(3, "TH", "Góc giữa hai đường thẳng song song bằng bao nhiêu độ?", "0", "Định nghĩa góc giữa 2 đường thẳng song song là 0 độ.", k),
            q_sa(4, "VD", "Cho hình lập phương cạnh bằng 4. Tính khoảng cách giữa hai mặt đối diện.", "4", "Bằng độ dài cạnh lập phương.", k),
            q_sa(5, "VDC", "Một lều cắm trại có dạng hình chóp tứ giác đều có cạnh đáy 2m, chiều cao 1.5m. Tính diện tích vải bạt xung quanh lều (làm tròn đến hàng phần mười $\\text{m}^2$).", "7.2", "Đường cao mặt bên $\\sqrt{1.5^2 + 1^2} = \\sqrt{3.25} \\approx 1.803$. Diện tích 4 mặt bên $4 \\times \\frac{1}{2}(2)(1.803) \\approx 7.21\\text{ m}^2$.", k),
            q_sa(6, "VDC", "Một bể bơi hình hộp chữ nhật dài 25m, rộng 10m, độ sâu tăng đều từ 1m ở đầu này đến 2m ở đầu kia. Dung tích nước của bể bơi khi đầy bằng bao nhiêu mét khối?", "375", "Mặt cắt dọc là hình thang diện tích $\\frac{1 + 2}{2} \\times 25 = 37.5\\text{ m}^2$. Thể tích $37.5 \\times 10 = 375\\text{ m}^3$.", k)
        ]
        essays = [
            q_essay(1, "NB", 0.5, "Chứng minh quan hệ song song", "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Chứng minh rằng đường thẳng $MN$ song song với mặt phẳng $(ABCD)$.", "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB$. Mà $AB \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$. Do đó $MN \\parallel (ABCD)$.", k),
            q_essay(2, "TH", 0.5, "Chứng minh đường thẳng vuông góc mặt phẳng", "Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $B$, cạnh bên $SA \\perp (ABC)$. Chứng minh rằng $BC \\perp (SAB)$.", "Ta có $BC \\perp AB$ (do tam giác $ABC$ vuông tại $B$) và $BC \\perp SA$ (do $SA \\perp (ABC)$). Mà $AB, SA \\subset (SAB)$ cắt nhau tại $A$. Vậy $BC \\perp (SAB)$.", k),
            q_essay(3, "VD", 0.5, "Tính góc giữa đường thẳng và mặt phẳng", "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông tại $B$, $SA = AB = a$. Tính góc giữa đường thẳng $SB$ và mặt phẳng đáy $(ABC)$.", "Hình chiếu của $S$ lên $(ABC)$ là $A$, do đó hình chiếu của $SB$ lên $(ABC)$ là $AB$. Góc giữa $SB$ và $(ABC)$ là góc $\\widehat{SBA}$. Trong tam giác vuông $SAB$: $\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$.", k),
            q_essay(4, "VDC", 0.5, "Tính khoảng cách trong hình chóp", "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Tính khoảng cách từ điểm $A$ đến mặt phẳng $(SBD)$.", "Gọi $O = AC \\cap BD$. Ta có $BD \\perp AC$ và $BD \\perp SA \\Rightarrow BD \\perp (SAC) \\Rightarrow (SBD) \\perp (SAC)$ theo giao tuyến $SO$. Kẻ $AH \\perp SO$ tại $H$ thì $AH \\perp (SBD) \\Rightarrow d(A, (SBD)) = AH$. Trong tam giác vuông $SAO$: $AO = \\frac{a\\sqrt{2}}{2}, SA = a\\sqrt{2}$. $\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AO^2} = \\frac{1}{2a^2} + \\frac{2}{a^2} = \\frac{5}{2a^2} \\Rightarrow AH = a\\sqrt{\\frac{2}{5}} = \\frac{a\\sqrt{10}}{5}$.", k)
        ]

    else: # Giới hạn, Mũ Log, Xác suất, Đạo hàm, Thống kê
        mcqs = [
            q_mcq(1, "NB", "Giới hạn $\\lim_{n \\to +\\infty} \\frac{1}{n}$ bằng:", "0", "1", "$+\\infty$", "Không tồn tại", "A", "Giới hạn dãy số cơ bản.", k),
            q_mcq(2, "NB", "Giá trị của $\\log_2 8$ bằng:", "3", "4", "2", "8", "A", "$2^3 = 8 \\Rightarrow \\log_2 8 = 3$.", k),
            q_mcq(3, "NB", "Đạo hàm của hàm số $y = x^4$ là:", "$y' = 4x^3$", "$y' = 3x^4$", "$y' = \\frac{x^5}{5}$", "$y' = 4x$", "A", "Quy tắc lũy thừa.", k),
            q_mcq(4, "NB", "Tập xác định của hàm số $y = \\log_3 x$ là:", "$(0; +\\infty)$", "$[0; +\\infty)$", "$\\mathbb{R}$", "$\\mathbb{R} \\setminus \\{0\\}$", "A", "Biểu thức dưới dấu logarit phải dương.", k),
            q_mcq(5, "TH", "Tính giới hạn $\\lim_{x \\to 2} (3x^2 - 4x + 1)$.", "5", "9", "1", "7", "A", "Thay $x = 2$: $3(4) - 4(2) + 1 = 12 - 8 + 1 = 5$.", k),
            q_mcq(6, "TH", "Nghiệm của phương trình $2^{x-1} = 16$ là:", "$x = 5$", "$x = 4$", "$x = 3$", "$x = 6$", "A", "$2^{x-1} = 2^4 \\iff x - 1 = 4 \\iff x = 5$.", k),
            q_mcq(7, "TH", "Đạo hàm của hàm số $y = \\sin 2x$ là:", "$y' = 2\\cos 2x$", "$y' = \\cos 2x$", "$y' = -2\\cos 2x$", "$y' = 2\\sin 2x$", "A", "Đạo hàm hàm hợp $y' = (2x)' \\cos 2x = 2\\cos 2x$.", k),
            q_mcq(8, "TH", "Cho hai biến cố xung khắc $A$ và $B$ có $P(A) = 0.3, P(B) = 0.4$. Xác suất $P(A \\cup B)$ bằng:", "0.7", "0.12", "0.1", "0.5", "A", "$P(A \\cup B) = P(A) + P(B) = 0.7$.", k),
            q_mcq(9, "VD", "Hệ số góc của tiếp tuyến của đồ thị hàm số $y = x^3 - 3x + 2$ tại điểm có hoành độ $x_0 = 2$ bằng:", "9", "6", "3", "12", "A", "$y' = 3x^2 - 3 \\Rightarrow y'(2) = 3(4) - 3 = 9$.", k),
            q_mcq(10, "VD", "Một loại vi khuẩn sinh sản với số lượng sau $t$ giờ là $N(t) = 1000 \\cdot 2^t$. Sau bao nhiêu giờ thì số lượng vi khuẩn đạt 64000 con?", "6", "5", "7", "8", "A", "$1000 \\cdot 2^t = 64000 \\iff 2^t = 64 \\iff t = 6$ giờ.", k),
            q_mcq(11, "VDC", "Một quả bóng được thả rơi tự do từ độ cao 100m. Mỗi lần chạm đất, bóng nảy lên được $\\frac{1}{2}$ độ cao của lần rơi trước. Tổng quãng đường bóng di chuyển từ lúc thả đến khi dừng hẳn bằng bao nhiêu mét?", "300", "200", "250", "400", "A", "$S = 100 + 2(50 + 25 + \\dots) = 100 + 2 \\cdot \\frac{50}{1 - 1/2} = 100 + 200 = 300\\text{ m}$.", k),
            q_mcq(12, "VDC", "Độ pH của dung dịch được tính bằng $\\text{pH} = -\\log_{10}[H^+]$. Dung dịch A có $\\text{pH} = 3$, dung dịch B có $\\text{pH} = 6$. Nồng độ ion $H^+$ của dung dịch A gấp bao nhiêu lần dung dịch B?", "1000", "3", "100", "2", "A", "$[H^+]_A = 10^{-3}, [H^+]_B = 10^{-6} \\Rightarrow 10^{-3} / 10^{-6} = 1000$ lần.", k)
        ]
        tfs = [
            q_tf(1, "Cho hàm số $f(x) = x^3 - 3x^2 + 2x$.", [
                ("a", "Đạo hàm cấp một của hàm số là $f'(x) = 3x^2 - 6x + 2$.", True, "Quy tắc tính đạo hàm đa thức."),
                ("b", "Đạo hàm cấp hai của hàm số là $f''(x) = 6x - 6$.", True, "$f''(x) = (3x^2 - 6x + 2)' = 6x - 6$."),
                ("c", "Phương trình $f''(x) = 0$ có nghiệm $x = 1$.", True, "$6x - 6 = 0 \\iff x = 1$."),
                ("d", "Tiếp tuyến của đồ thị tại điểm có hoành độ $x = 0$ song song với đường thẳng $y = 2x + 5$.", True, "$f'(0) = 2$ trùng hệ số góc $k = 2$.")
            ], k),
            q_tf(2, "Một ngân hàng áp dụng hình thức gửi tiết kiệm với lãi suất $7\\%/\\text{năm}$, tiền lãi sinh ra được cộng dồn vào gốc sau mỗi năm (lãi kép). Bác An gửi số tiền ban đầu là 200 triệu đồng.", [
                ("a", "Số tiền cả gốc lẫn lãi sau 1 năm là 214 triệu đồng.", True, "$200 \\times 1.07 = 214$ triệu."),
                ("b", "Số tiền nhận được sau $n$ năm là $T_n = 200(1.07)^n$ (triệu đồng).", True, "Công thức lãi kép."),
                ("c", "Sau 3 năm tổng số tiền bác An nhận được lớn hơn 245 triệu đồng.", False, "$200(1.07)^3 \\approx 245.0086$ triệu đồng."),
                ("d", "Cần ít nhất 11 năm để số tiền nhận được gấp đôi số tiền gửi ban đầu.", True, "$1.07^{11} \\approx 2.105 > 2$, $1.07^{10} \\approx 1.967 < 2$.")
            ], k)
        ]
        sas = [
            q_sa(1, "NB", "Tính giới hạn $\\lim_{x \\to 1} (2x + 3)$.", "5", "$2(1) + 3 = 5$.", k),
            q_sa(2, "TH", "Giải phương trình $\\log_2(x - 1) = 3$.", "9", "$x - 1 = 2^3 = 8 \\iff x = 9$.", k),
            q_sa(3, "TH", "Tính đạo hàm của $y = x^3 - 5x$ tại $x = 2$.", "7", "$y' = 3x^2 - 5 \\Rightarrow y'(2) = 12 - 5 = 7$.", k),
            q_sa(4, "VD", "Cho hai biến cố độc lập $A, B$ có $P(A) = 0.4, P(B) = 0.5$. Tính $P(AB)$.", "0.2", "$0.4 \\times 0.5 = 0.2$.", k),
            q_sa(5, "VDC", "Cường độ động đất $M$ (độ Richter) tính bởi $M = \\log_{10} A - \\log_{10} A_0$. Một trận động đất mạnh 8 độ Richter có biên độ $A$ gấp bao nhiêu lần trận động đất mạnh 5 độ Richter?", "1000", "$10^{8 - 5} = 10^3 = 1000$.", k),
            q_sa(6, "VDC", "Một vật chuyển động thẳng có phương trình $s(t) = t^3 - 6t^2 + 20t$ (mét). Gia tốc của vật tại thời điểm $t = 3$ giây bằng bao nhiêu $\\text{m/s}^2$?", "6", "$v(t) = 3t^2 - 12t + 20 \\Rightarrow a(t) = 6t - 12 \\Rightarrow a(3) = 6\\text{ m/s}^2$.", k)
        ]
        essays = [
            q_essay(1, "NB", 0.5, "Tính giới hạn hàm số", "Tính giới hạn $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.", "Ta có $\\frac{x^2 - 4}{x - 2} = \\frac{(x - 2)(x + 2)}{x - 2} = x + 2$ với $x \\ne 2$. Do đó $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$.", k),
            q_essay(2, "TH", 0.5, "Phương trình mũ", "Giải phương trình $3^{2x - 1} = 27$.", "$3^{2x - 1} = 3^3 \\iff 2x - 1 = 3 \\iff 2x = 4 \\iff x = 2$.", k),
            q_essay(3, "VD", 0.5, "Viết phương trình tiếp tuyến", "Viết phương trình tiếp tuyến của đồ thị hàm số $y = x^2 - 3x + 1$ tại điểm $M(2; -1)$.", "Đạo hàm $y' = 2x - 3$. Hệ số góc tiếp tuyến tại $x_0 = 2$ là $k = y'(2) = 2(2) - 3 = 1$. Phương trình tiếp tuyến là $y = 1(x - 2) + (-1) \\iff y = x - 3$.", k),
            q_essay(4, "VDC", 0.5, "Bài toán suy giảm phóng xạ", "Chất phóng xạ Iod-131 có chu kỳ bán rã là 8 ngày (cứ sau 8 ngày khối lượng giảm đi một nửa). Khối lượng còn lại sau $t$ ngày là $m(t) = m_0 \\cdot 2^{-t/8}$. Ban đầu có 200 gam chất Iod-131. Sau 24 ngày khối lượng còn lại bao nhiêu gam?", "Với $m_0 = 200\\text{ g}$ và $t = 24$ ngày, ta có $m(24) = 200 \\cdot 2^{-24/8} = 200 \\cdot 2^{-3} = \\frac{200}{8} = 25\\text{ gam}$.", k)
        ]

    return mcqs, tfs, sas, essays

if __name__ == "__main__":
    res = generate_g11_exams()
    print("Total G11 lessons generated:", len(res))
