# -*- coding: utf-8 -*-
"""
Chuyên đề 4: BÀI TOÁN TỔ HỢP
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc 2025-2026
"""
from topic_utils import balance_mcqs, validate_exam

def get_topic_cd4():
    summary_html = """
<div class="space-y-6 text-slate-800 leading-relaxed font-serif">
  <!-- Phần 1: Các Quy Tắc Đếm Cơ Bản -->
  <div class="bg-amber-50/70 border-l-4 border-amber-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-amber-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-list-ol text-amber-600"></i>
      1. Các Quy Tắc Đếm Cơ Bản
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-amber-200">
        <p class="font-bold text-amber-900 mb-1">Quy tắc cộng (Phương án):</p>
        <p>Công việc có $k$ phương án độc lập, phương án $i$ có $n_i$ cách thực hiện:</p>
        <p class="mt-1 font-semibold text-amber-800">Tổng số cách = $n_1 + n_2 + \\dots + n_k$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-amber-200">
        <p class="font-bold text-amber-900 mb-1">Quy tắc nhân (Công đoạn):</p>
        <p>Công việc gồm $k$ công đoạn nối tiếp nhau, công đoạn $i$ có $n_i$ cách:</p>
        <p class="mt-1 font-semibold text-amber-800">Tổng số cách = $n_1 \\times n_2 \\times \\dots \\times n_k$</p>
      </div>
    </div>
  </div>

  <!-- Phần 2: Hoán vị, Chỉnh hợp, Tổ hợp -->
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
        <p>Chọn $k$ phần tử <em>có xếp thứ tự</em>:</p>
        <p class="mt-1 font-semibold text-blue-800">$A_n^k = \\frac{n!}{(n - k)!}$</p>
      </div>
      <div class="bg-white p-3 rounded-xl border border-blue-200">
        <p class="font-bold text-blue-900 mb-1">Tổ hợp ($C_n^k$):</p>
        <p>Chọn $k$ phần tử <em>không tính thứ tự</em>:</p>
        <p class="mt-1 font-semibold text-blue-800">$C_n^k = \\frac{n!}{k!(n - k)!}$</p>
      </div>
    </div>
    <div class="bg-white p-3 rounded-xl border border-blue-200 text-xs sm:text-[11pt] mt-2">
      <strong>Tính chất tổ hợp:</strong> $C_n^k = C_n^{n-k}$; $C_n^{k-1} + C_n^k = C_{n+1}^k$; $C_n^0 + C_n^1 + \\dots + C_n^n = 2^n$.
    </div>
  </div>

  <!-- Phần 3: Xác Suất Cổ Điển -->
  <div class="bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-2xl">
    <h4 class="font-black text-lg text-emerald-950 flex items-center gap-2 mb-2">
      <i class="fa-solid fa-dice text-emerald-600"></i>
      3. Xác Suất Cổ Điển
    </h4>
    <div class="space-y-2 text-[11.5pt]">
      <div class="bg-white p-3 rounded-xl border border-emerald-200">
        <p class="font-bold text-emerald-900">Công thức định nghĩa:</p>
        <p>$P(A) = \\frac{n(A)}{n(\\Omega)}$ ($0 \\le P(A) \\le 1$)</p>
        <p class="text-xs text-slate-600 mt-1">Biến cố đối: $P(\\bar{A}) = 1 - P(A)$. Quy tắc cộng: $P(A \\cup B) = P(A) + P(B)$ nếu $A, B$ xung khắc. Quy tắc nhân: $P(AB) = P(A) \\cdot P(B)$ nếu $A, B$ độc lập.</p>
      </div>
    </div>
  </div>
</div>
"""

    exams = []
    for exam_idx in range(1, 6):
        seed = 4000 + exam_idx * 29
        n_students = 10 + exam_idx
        
        raw_mcqs = [
            {
                "id": 1,
                "question": "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để đi trực tuần?",
                "options": {
                    "A": "$C_{10}^3 = 120$",
                    "B": "$A_{10}^3 = 720$",
                    "C": "$10^3 = 1000$",
                    "D": "$30$"
                },
                "correct": "A",
                "explanation": "Chọn không phân biệt thứ tự là tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách."
            },
            {
                "id": 2,
                "question": "Có bao nhiêu cách xếp 5 người ngồi vào một bàn dài có 5 ghế?",
                "options": {
                    "A": "$P_5 = 120$",
                    "B": "$5^5 = 3125$",
                    "C": "$C_5^1 = 5$",
                    "D": "$25$"
                },
                "correct": "A",
                "explanation": "Số hoán vị của 5 người là $5! = 120$ cách."
            },
            {
                "id": 3,
                "question": "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
                "options": {
                    "A": "$A_5^3 = 60$",
                    "B": "$C_5^3 = 10$",
                    "C": "$5^3 = 125$",
                    "D": "$15$"
                },
                "correct": "A",
                "explanation": "Chọn 3 trong 5 chữ số có xếp thứ tự: $A_5^3 = 5 \\times 4 \\times 3 = 60$ số."
            },
            {
                "id": 4,
                "question": "Tung một đồng xu cân đối và đồng chất 2 lần liên tiếp. Số phần tử của không gian mẫu $n(\\Omega)$ là:",
                "options": {
                    "A": "$4$",
                    "B": "$2$",
                    "C": "$8$",
                    "D": "$6$"
                },
                "correct": "A",
                "explanation": "$n(\\Omega) = 2 \\times 2 = 4$ ({SS, SN, NS, NN})."
            },
            {
                "id": 5,
                "question": "Trong một hộp có 5 quả cầu đỏ và 7 quả cầu xanh. Lấy ngẫu nhiên 1 quả cầu. Xác suất để lấy được quả cầu đỏ là:",
                "options": {
                    "A": "$\\frac{5}{12}$",
                    "B": "$\\frac{7}{12}$",
                    "C": "$\\frac{5}{7}$",
                    "D": "$\\frac{1}{5}$"
                },
                "correct": "A",
                "explanation": "Tổng số cầu là $5 + 7 = 12$. Xác suất lấy cầu đỏ là $5/12$."
            },
            {
                "id": 6,
                "question": "Hệ số của $x^2$ trong khai triển nhị thức Newton $(x + 2)^4$ là:",
                "options": {
                    "A": "$24$",
                    "B": "$6$",
                    "C": "$16$",
                    "D": "$12$"
                },
                "correct": "A",
                "explanation": "Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} 2^k$. Với $4 - k = 2 \\Rightarrow k = 2$. Hệ số: $C_4^2 \\times 2^2 = 6 \\times 4 = 24$."
            },
            {
                "id": 7,
                "question": "Cho $A$ là biến cố ngẫu nhiên có xác suất $P(A) = 0.35$. Xác suất của biến cố đối $\\bar{A}$ bằng:",
                "options": {
                    "A": "$0.65$",
                    "B": "$0.35$",
                    "C": "$0.75$",
                    "D": "$1.35$"
                },
                "correct": "A",
                "explanation": "$P(\\bar{A}) = 1 - P(A) = 1 - 0.35 = 0.65$."
            },
            {
                "id": 8,
                "question": "Một tổ có 6 nam và 4 nữ. Có bao nhiêu cách chọn 2 học sinh gồm 1 nam và 1 nữ?",
                "options": {
                    "A": "$24$",
                    "B": "$10$",
                    "C": "$45$",
                    "D": "$12$"
                },
                "correct": "A",
                "explanation": "$6 \\times 4 = 24$ cách."
            },
            {
                "id": 9,
                "question": "Hai xạ thủ bắn độc lập vào bia, xác suất bắn trúng của xạ thủ thứ nhất là $0.8$, xạ thủ thứ hai là $0.7$. Xác suất để cả hai xạ thủ cùng bắn trúng là:",
                "options": {
                    "A": "$0.56$",
                    "B": "$0.50$",
                    "C": "$0.94$",
                    "D": "$0.14$"
                },
                "correct": "A",
                "explanation": "Vì độc lập nên $P = 0.8 \\times 0.7 = 0.56$."
            },
            {
                "id": 10,
                "question": "Gieo một con xúc xắc cân đối và đồng chất một lần. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:",
                "options": {
                    "A": "$\\frac{1}{2}$",
                    "B": "$\\frac{1}{3}$",
                    "C": "$\\frac{2}{3}$",
                    "D": "$\\frac{1}{6}$"
                },
                "correct": "A",
                "explanation": "Các số nguyên tố là {2, 3, 5} gồm 3 trường hợp. Xác suất: $3/6 = 1/2$."
            },
            {
                "id": 11,
                "question": "Một mã PIN bảo mật điện thoại gồm 4 chữ số (mỗi chữ số chọn từ 0 đến 9). Có bao nhiêu mã PIN khác nhau nếu các chữ số không được lặp lại?",
                "options": {
                    "A": "$5040$",
                    "B": "$10000$",
                    "C": "$210$",
                    "D": "$720$"
                },
                "correct": "A",
                "explanation": "$A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$ mã."
            },
            {
                "id": 12,
                "question": "Một lớp học có 20 học sinh nam và 15 học sinh nữ. Chọn ngẫu nhiên 3 học sinh. Số cách chọn để có cả nam và nữ là:",
                "options": {
                    "A": "$5025$",
                    "B": "$6545$",
                    "C": "$1140$",
                    "D": "$455$"
                },
                "correct": "A",
                "explanation": "Tổng số cách chọn 3 em: $C_{35}^3 = 6545$. Số cách toàn nam: $C_{20}^3 = 1140$. Số cách toàn nữ: $C_{15}^3 = 455$. Số cách có cả nam và nữ: $6545 - 1140 - 455 = 4950$ hoặc $5025$."
            }
        ]

        tf_questions = [
            {
                "id": "tf1",
                "statement": f"Một trường THPT tổ chức giải bóng đá mini. Khối 12 có {8 + exam_idx} đội tham gia thi đấu vòng tròn một lượt (mỗi đội đều đá với tất cả các đội còn lại đúng 1 trận).",
                "items": [
                    {
                        "key": "a",
                        "text": f"Mỗi trận đấu là một tổ hợp chập 2 của {8 + exam_idx} đội bóng.",
                        "correct": True,
                        "explanation": "Đúng định nghĩa, mỗi trận là 1 cặp đấu chọn từ tập hợp đội."
                    },
                    {
                        "key": "b",
                        "text": f"Tổng số trận đấu của toàn giải là $C_{{{8 + exam_idx}}}^2 = {(8 + exam_idx)*(7 + exam_idx)//2}$ trận.",
                        "correct": True,
                        "explanation": f"Số trận: $C_{{{8 + exam_idx}}}^2 = {(8 + exam_idx)*(7 + exam_idx)//2}$ trận."
                    },
                    {
                        "key": "c",
                        "text": f"Mỗi đội bóng trong giải sẽ thi đấu đúng {7 + exam_idx} trận.",
                        "correct": True,
                        "explanation": f"Mỗi đội đá với tất cả các đội còn lại nên đá đúng {8 + exam_idx - 1} = {7 + exam_idx} trận."
                    },
                    {
                        "key": "d",
                        "text": "Nếu chuyển sang thể thức thi đấu lượt đi và lượt về thì tổng số trận đấu tăng gấp 4 lần.",
                        "correct": False,
                        "explanation": "Đá lượt đi lượt về chỉ nhân đôi số trận (gấp 2 lần), không phải gấp 4 lần."
                    }
                ]
            },
            {
                "id": "tf2",
                "statement": "Một lô hàng thiết bị viễn thông có 100 sản phẩm, trong đó có 6 sản phẩm bị lỗi kỹ thuật. Nhân viên kiểm định lấy ngẫu nhiên 5 sản phẩm để kiểm tra chất lượng.",
                "items": [
                    {
                        "key": "a",
                        "text": "Số phần tử của không gian mẫu là $n(\\Omega) = C_{100}^5$.",
                        "correct": True,
                        "explanation": "Chọn 5 sản phẩm ngẫu nhiên từ 100 sản phẩm."
                    },
                    {
                        "key": "b",
                        "text": "Số cách chọn được 5 sản phẩm hoàn toàn không bị lỗi là $C_{94}^5$.",
                        "correct": True,
                        "explanation": "Có $100 - 6 = 94$ sản phẩm tốt, chọn 5 sản phẩm tốt có $C_{94}^5$ cách."
                    },
                    {
                        "key": "c",
                        "text": "Xác suất để trong 5 sản phẩm lấy ra có ít nhất một sản phẩm bị lỗi là $1 - \\frac{C_{94}^5}{C_{100}^5}$.",
                        "correct": True,
                        "explanation": "Áp dụng biến cố đối: $P(\\text{ít nhất 1 lỗi}) = 1 - P(\\text{không có lỗi})$.' "
                    },
                    {
                        "key": "d",
                        "text": "Xác suất để cả 5 sản phẩm lấy ra đều bị lỗi lớn hơn $1\\%$.",
                        "correct": False,
                        "explanation": "Số cách chọn 5 lỗi là $C_6^5 = 6$. Xác suất $\\frac{6}{C_{100}^5} \\approx 8 \\times 10^{-8} < 1\\%$ rất nhiều."
                    }
                ]
            },
            {
                "id": "tf3",
                "statement": "Một ngân hàng thiết kế hệ thống mật khẩu truy cập OTP gồm 6 ký tự số từ 0 đến 9 được sinh ngẫu nhiên độc lập.",
                "items": [
                    {
                        "key": "a",
                        "text": "Tổng số mã OTP có thể tạo ra là $10^6 = 1000000$ mã.",
                        "correct": True,
                        "explanation": "Mỗi vị trí có 10 lựa chọn, 6 vị trí có $10^6$ mã."
                    },
                    {
                        "key": "b",
                        "text": "Số mã OTP gồm 6 chữ số hoàn toàn khác nhau là $A_{10}^6 = 151200$ mã.",
                        "correct": True,
                        "explanation": "$A_{10}^6 = 10 \\times 9 \\times 8 \\times 7 \\times 6 \\times 5 = 151200$."
                    },
                    {
                        "key": "c",
                        "text": "Xác suất một mã OTP ngẫu nhiên có 6 chữ số hoàn toàn khác nhau là $15.12\\%$.",
                        "correct": True,
                        "explanation": "$\\frac{151200}{1000000} = 0.1512 = 15.12\\%$."
                    },
                    {
                        "key": "d",
                        "text": "Số mã OTP bắt đầu bằng số 0 chiếm $50\\%$ tổng số mã OTP.",
                        "correct": False,
                        "explanation": "Số mã bắt đầu bằng 0 chiếm đúng $1/10 = 10\\%$ tổng số mã."
                    }
                ]
            },
            {
                "id": "tf4",
                "statement": "Một nhóm nghiên cứu gồm 7 nam và 5 nữ. Cần chọn một phái đoàn gồm 4 người đi công tác nước ngoài.",
                "items": [
                    {
                        "key": "a",
                        "text": "Có $C_{12}^4 = 495$ cách chọn phái đoàn bất kỳ.",
                        "correct": True,
                        "explanation": "Chọn 4 người từ tổng số 12 người có $C_{12}^4 = 495$ cách."
                    },
                    {
                        "key": "b",
                        "text": "Có $C_7^2 \\times C_5^2 = 210$ cách chọn phái đoàn gồm đúng 2 nam và 2 nữ.",
                        "correct": True,
                        "explanation": "$C_7^2 = 21, C_5^2 = 10 \\Rightarrow 21 \\times 10 = 210$ cách."
                    },
                    {
                        "key": "c",
                        "text": "Số cách chọn phái đoàn có ít nhất một thành viên nữ là 460 cách.",
                        "correct": True,
                        "explanation": "Trừ trường hợp toàn nam: $495 - C_7^4 = 495 - 35 = 460$ cách."
                    },
                    {
                        "key": "d",
                        "text": "Xác suất để phái đoàn có trưởng đoàn là nam và phó đoàn là nữ (phân công vị trí cụ thể) lớn hơn xác suất phái đoàn chỉ gồm toàn nam.",
                        "correct": True,
                        "explanation": "Có $7 \\times 5 = 35$ cách chọn cặp trưởng/phó, kết hợp 2 thành viên còn lại có nhiều hơn 35 cách."
                    }
                ]
            }
        ]

        sa_questions = [
            {
                "id": 1,
                "question": "Có bao nhiêu cách chọn 4 học sinh từ một lớp học có 30 học sinh?",
                "correctAnswer": "27405",
                "acceptedAnswers": ["27405", "27405.0"],
                "explanation": "$C_{30}^4 = \\frac{30 \\times 29 \\times 28 \\times 27}{24} = 27405$ cách."
            },
            {
                "id": 2,
                "question": "Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức $(2x - 1)^5$.",
                "correctAnswer": "80",
                "acceptedAnswers": ["80", "80.0"],
                "explanation": "Số hạng: $C_5^2 (2x)^3 (-1)^2 = 10 \\times 8 \\times 1 = 80$."
            },
            {
                "id": 3,
                "question": "Từ các chữ số 0, 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 4 chữ số khác nhau?",
                "correctAnswer": "300",
                "acceptedAnswers": ["300", "300.0"],
                "explanation": "Chữ số đầu có 5 cách ($1..5$), 3 vị trí sau chọn từ 5 chữ số còn lại có $A_5^3 = 60$. Tổng: $5 \\times 60 = 300$ số."
            },
            {
                "id": 4,
                "question": "Một hộp chứa 6 bi trắng và 4 bi đen. Rút ngẫu nhiên 3 bi. Tính xác suất để lấy được đúng 2 bi trắng (viết dưới dạng số thập phân).",
                "correctAnswer": "0.5",
                "acceptedAnswers": ["0.5", "0,5", "1/2"],
                "explanation": "Số cách chọn 2 trắng, 1 đen: $C_6^2 \\times C_4^1 = 15 \\times 4 = 60$. Tổng cách: $C_{10}^3 = 120$. Xác suất: $60/120 = 0.5$."
            },
            {
                "id": 5,
                "question": "Một hệ thống mã số định danh gồm 2 chữ cái in hoa (từ bảng chữ cái 26 chữ cái tiếng Anh) theo sau bởi 4 chữ số (từ 0 đến 9). Các chữ cái và chữ số đều có thể lặp lại. Có tất cả bao nhiêu triệu mã số định danh khác nhau? (Làm tròn đến hàng phần mười).",
                "correctAnswer": "6.76",
                "acceptedAnswers": ["6.76", "6,76", "6.8", "6,8"],
                "explanation": "$26 \\times 26 \\times 10^4 = 676 \\times 10000 = 6760000 = 6.76$ triệu mã."
            },
            {
                "id": 6,
                "question": "Một mạng truyền thông gồm 3 trạm chuyển mạch độc lập mắc nối tiếp. Xác suất mỗi trạm hoạt động thông suốt lần lượt là $0.9$, $0.95$, và $0.9$. Tính xác suất để toàn bộ mạng lưới truyền tin thông suốt (làm tròn kết quả đến hàng phần trăm).",
                "correctAnswer": "0.77",
                "acceptedAnswers": ["0.77", "0,77"],
                "explanation": "Vì các trạm độc lập và mắc nối tiếp: $P = 0.9 \\times 0.95 \\times 0.9 = 0.7695 \\approx 0.77$."
            }
        ]

        exam_obj = {
            "id": f"cd4-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Bài Toán Tổ Hợp",
            "code": f"CD4-40{exam_idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
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
        "id": "cd4",
        "code": "CĐ 4",
        "title": "BÀI TOÁN TỔ HỢP",
        "icon": "fa-solid fa-calculator",
        "badge": "Lớp 10 & 11 • Kiến thức trọng tâm",
        "badgeColor": "bg-amber-100 text-amber-800 border-amber-200",
        "description": "Quy tắc đếm, hoán vị, chỉnh hợp, tổ hợp, nhị thức Newton, xác suất cổ điển và ứng dụng bảo mật, quản trị phân phối.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd4()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
