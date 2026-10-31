# -*- coding: utf-8 -*-
"""
Chuyên đề 2: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT 2 ẨN
Gồm Tóm tắt kiến thức + 5 đề luyện tập chuẩn cấu trúc 2025-2026
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
        <p class="mt-1">1. Vẽ đường thẳng $d: ax + by = c$.</p>
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
    for exam_idx in range(1, 6):
        seed = 2000 + exam_idx * 19
        c1 = 10 + exam_idx * 2
        c2 = 8 + exam_idx
        
        raw_mcqs = [
            {
                "id": 1,
                "question": "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 4 \\le 0$?",
                "options": {
                    "A": "$(1; 1)$",
                    "B": "$(3; 1)$",
                    "C": "$(2; 2)$",
                    "D": "$(1; 4)$"
                },
                "correct": "A",
                "explanation": "Thay $(1; 1)$ vào: $2(1) + 1 - 4 = -1 \\le 0$ (thỏa mãn)."
            },
            {
                "id": 2,
                "question": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} x + y \\ge 2 \\\\ 2x - y \\le 4 \\end{cases}$?",
                "options": {
                    "A": "$(2; 1)$",
                    "B": "$(0; 1)$",
                    "C": "$(3; 0)$",
                    "D": "$(0; 0)$"
                },
                "correct": "A",
                "explanation": "Thay $(2; 1)$: $2 + 1 = 3 \\ge 2$ và $2(2) - 1 = 3 \\le 4$ (đều thỏa mãn)."
            },
            {
                "id": 3,
                "question": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
                "options": {
                    "A": "$3x - 2y + 5 > 0$",
                    "B": "$x^2 + y \\le 4$",
                    "C": "$xy - 1 \\ge 0$",
                    "D": "$2x + 3y^2 < 1$"
                },
                "correct": "A",
                "explanation": "Phương án A là bất phương trình bậc nhất hai ẩn theo định nghĩa."
            },
            {
                "id": 4,
                "question": "Miền nghiệm của bất phương trình $x \\ge 0$ trên mặt phẳng tọa độ $Oxy$ là:",
                "options": {
                    "A": "Nửa mặt phẳng nằm bên phải trục tung kể cả trục tung",
                    "B": "Nửa mặt phẳng nằm bên trái trục tung",
                    "C": "Nửa mặt phẳng nằm phía trên trục hoành",
                    "D": "Nửa mặt phẳng nằm phía dưới trục hoành"
                },
                "correct": "A",
                "explanation": "$x \\ge 0$ là nửa mặt phẳng bên phải trục tung $Oy$ kể cả trục tung."
            },
            {
                "id": 5,
                "question": f"Cho biểu thức $F(x; y) = 3x + 2y$ trên miền tam giác có ba đỉnh $A(0; 0), B(4; 0), C(0; {c2})$. Giá trị lớn nhất của $F(x; y)$ bằng:",
                "options": {
                    "A": f"${max(12, 2 * c2)}$",
                    "B": "$10$",
                    "C": "$8$",
                    "D": "$6$"
                },
                "correct": "A",
                "explanation": f"$F(A) = 0, F(B) = 3(4) = 12, F(C) = 2({c2}) = {2*c2}$. GTLN là ${max(12, 2 * c2)}$."
            },
            {
                "id": 6,
                "question": "Đường thẳng $d: x - 2y = 4$ chia mặt phẳng tọa độ thành hai nửa mặt phẳng. Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào?",
                "options": {
                    "A": "$x - 2y < 4$",
                    "B": "$x - 2y > 4$",
                    "C": "$x - 2y \\ge 4$",
                    "D": "$x - 2y > 5$"
                },
                "correct": "A",
                "explanation": "Thay $O(0; 0)$ vào: $0 - 2(0) = 0 < 4$ nên thuộc miền nghiệm $x - 2y < 4$."
            },
            {
                "id": 7,
                "question": "Một người nông dân trồng hai loại rau trên diện tích tối đa 10 sào đất. Gọi $x$ và $y$ là số sào đất trồng rau cải và rau muống. Bất phương trình thể hiện điều kiện về diện tích là:",
                "options": {
                    "A": "$x + y \\le 10$ ($x, y \\ge 0$)",
                    "B": "$x + y \\ge 10$",
                    "C": "$x - y \\le 10$",
                    "D": "$xy \\le 10$"
                },
                "correct": "A",
                "explanation": "Tổng diện tích trồng không vượt quá 10 sào: $x + y \\le 10$ với $x, y \\ge 0$."
            },
            {
                "id": 8,
                "question": "Hệ bất phương trình nào sau đây có miền nghiệm là một tứ giác lồi?",
                "options": {
                    "A": "$\\begin{cases} 0 \\le x \\le 4 \\\\ 0 \\le y \\le 3 \\end{cases}$",
                    "B": "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$",
                    "C": "$\\begin{cases} x + y \\ge 1 \\\\ x - y \\le 0 \\end{cases}$",
                    "D": "$\\begin{cases} x + y \\le 2 \\\\ x \\ge 0 \\end{cases}$"
                },
                "correct": "A",
                "explanation": "Miền nghiệm là hình chữ nhật (tứ giác lồi) có 4 đỉnh $(0;0), (4;0), (4;3), (0;3)$."
            },
            {
                "id": 9,
                "question": "Cho miền nghiệm của hệ BPT là tam giác $OAB$ với $O(0; 0), A(3; 0), B(1; 4)$. Giá trị nhỏ nhất của biểu thức $F(x; y) = 2x - 3y$ bằng:",
                "options": {
                    "A": "$-10$",
                    "B": "$0$",
                    "C": "$6$",
                    "D": "$-5$"
                },
                "correct": "A",
                "explanation": "$F(O) = 0, F(A) = 2(3) - 0 = 6, F(B) = 2(1) - 3(4) = -10$. Giá trị nhỏ nhất là $-10$."
            },
            {
                "id": 10,
                "question": "Một xưởng cơ khí có 120 giờ công làm việc mỗi tuần để sản xuất hai loại chi tiết máy. Chi tiết I cần 2 giờ, chi tiết II cần 3 giờ. Bất phương trình ràng buộc về thời gian công là:",
                "options": {
                    "A": "$2x + 3y \\le 120$ ($x, y \\ge 0$)",
                    "B": "$3x + 2y \\le 120$",
                    "C": "$2x + 3y \\ge 120$",
                    "D": "$x + y \\le 120$"
                },
                "correct": "A",
                "explanation": "$2x + 3y \\le 120$ với $x, y \\ge 0$."
            },
            {
                "id": 11,
                "question": f"Tọa độ giao điểm của hai đường thẳng $x + y = {c1}$ và $2x - y = {c2}$ là:",
                "options": {
                    "A": f"$(\\frac{{{c1 + c2}}}{{3}}; \\frac{{{2 * c1 - c2}}}{{3}})$",
                    "B": f"$(\\frac{{{c1 - c2}}}{{3}}; \\frac{{{c1 + c2}}}{{3}})$",
                    "C": f"$({c1}; {c2})$",
                    "D": f"$(\\frac{{{c1}}}{{2}}; \\frac{{{c2}}}{{2}})$"
                },
                "correct": "A",
                "explanation": "Cộng hai phương trình: $3x = c_1 + c_2 \\Rightarrow x = (c_1 + c_2)/3, y = c_1 - x = (2c_1 - c_2)/3$."
            },
            {
                "id": 12,
                "question": "Một cửa hàng kinh doanh hai loại trà sữa với lợi nhuận mỗi ly lần lượt là 15 nghìn đồng và 20 nghìn đồng. Hàm mục tiêu biểu diễn tổng lợi nhuận (nghìn đồng) khi bán $x$ ly loại 1 và $y$ ly loại 2 là:",
                "options": {
                    "A": "$F(x; y) = 15x + 20y$",
                    "B": "$F(x; y) = 20x + 15y$",
                    "C": "$F(x; y) = 15x - 20y$",
                    "D": "$F(x; y) = 35(x + y)$"
                },
                "correct": "A",
                "explanation": "Lợi nhuận: $F(x; y) = 15x + 20y$ (nghìn đồng)."
            }
        ]

        tf_questions = [
            {
                "id": "tf1",
                "statement": "Cho hệ bất phương trình bậc nhất hai ẩn $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 8 \\end{cases}$ có miền nghiệm là tứ giác $OABC$ với $O(0; 0), A(4; 0), B(2; 4), C(0; 6)$.",
                "items": [
                    {
                        "key": "a",
                        "text": "Điểm $M(1; 2)$ thuộc miền nghiệm của hệ bất phương trình.",
                        "correct": True,
                        "explanation": "Thay $(1; 2)$ thỏa mãn cả 4 bất phương trình."
                    },
                    {
                        "key": "b",
                        "text": "Tọa độ đỉnh $B$ là giao điểm của hai đường thẳng $x + y = 6$ và $2x + y = 8$.",
                        "correct": True,
                        "explanation": "Giải hệ: $x = 2, y = 4 \\Rightarrow B(2; 4)$."
                    },
                    {
                        "key": "c",
                        "text": "Diện tích của tứ giác miền nghiệm $OABC$ bằng 16 đơn vị diện tích.",
                        "correct": True,
                        "explanation": "Chia tứ giác thành $\\triangle OAC$ và $\\triangle ABC$, tính được diện tích bằng 16."
                    },
                    {
                        "key": "d",
                        "text": "Biểu thức $F(x; y) = 4x + 3y$ đạt giá trị lớn nhất tại đỉnh $A(4; 0)$.",
                        "correct": False,
                        "explanation": "$F(A) = 16, F(B) = 4(2) + 3(4) = 20, F(C) = 18$. GTLN đạt tại đỉnh $B(2; 4)$ bằng 20, không phải tại $A$."
                    }
                ]
            },
            {
                "id": "tf2",
                "statement": "Một công ty sản xuất hai loại nước trái cây đóng chai: Nước cam (loại A) và Nước táo (loại B). Mỗi chai loại A cần $0.2\\text{ kg}$ đường và 3 quả cam, đem lại lợi nhuận 4 nghìn đồng. Mỗi chai loại B cần $0.1\\text{ kg}$ đường và 2 quả táo, đem lại lợi nhuận 3 nghìn đồng. Nguồn nguyên liệu đường không quá $20\\text{ kg}$ mỗi ngày.",
                "items": [
                    {
                        "key": "a",
                        "text": "Ràng buộc về nguyên liệu đường là $0.2x + 0.1y \\le 20$ (với $x, y \\ge 0$).",
                        "correct": True,
                        "explanation": "Lượng đường sử dụng cho $x$ chai loại A và $y$ chai loại B không vượt quá 20 kg."
                    },
                    {
                        "key": "b",
                        "text": "Hàm số biểu diễn lợi nhuận hàng ngày là $F(x; y) = 4x + 3y$ (nghìn đồng).",
                        "correct": True,
                        "explanation": "Lợi nhuận là 4 nghìn đồng cho mỗi chai A và 3 nghìn đồng cho mỗi chai B."
                    },
                    {
                        "key": "c",
                        "text": "Nếu chỉ sản xuất duy nhất loại A thì sản xuất được tối đa 100 chai mỗi ngày.",
                        "correct": True,
                        "explanation": "Cho $y = 0 \\Rightarrow 0.2x \\le 20 \\Leftrightarrow x \\le 100$ chai."
                    },
                    {
                        "key": "d",
                        "text": "Nếu sản xuất 80 chai loại A thì có thể sản xuất tối đa 50 chai loại B.",
                        "correct": False,
                        "explanation": "$0.2(80) + 0.1y \\le 20 \\Leftrightarrow 16 + 0.1y \\le 20 \\Leftrightarrow 0.1y \\le 4 \\Leftrightarrow y \\le 40$ chai (không phải 50)."
                    }
                ]
            },
            {
                "id": "tf3",
                "statement": "Một trang trại dự định dùng tối đa 20 triệu đồng để mua hai loại thức ăn bổ sung cho bò sữa: Loại I giá 400 nghìn đồng/bao (chứa 10 đơn vị đạm), Loại II giá 300 nghìn đồng/bao (chứa 5 đơn vị đạm). Nhu cầu tối thiểu của đàn bò là cần 300 đơn vị đạm mỗi tháng.",
                "items": [
                    {
                        "key": "a",
                        "text": "Bất phương trình ràng buộc về ngân sách mua thức ăn là $4x + 3y \\le 200$ (với $x, y$ là số bao loại I và II).",
                        "correct": True,
                        "explanation": "$400x + 300y \\le 20000 \\Leftrightarrow 4x + 3y \\le 200$."
                    },
                    {
                        "key": "b",
                        "text": "Bất phương trình ràng buộc về lượng đạm tối thiểu là $10x + 5y \\ge 300$.",
                        "correct": True,
                        "explanation": "Tổng lượng đạm $10x + 5y \\ge 300$ đơn vị."
                    },
                    {
                        "key": "c",
                        "text": "Trang trại có thể mua 20 bao loại I và 30 bao loại II.",
                        "correct": True,
                        "explanation": "$4(20) + 3(30) = 170 \\le 200$ và $10(20) + 5(30) = 350 \\ge 300$ (thỏa mãn)."
                    },
                    {
                        "key": "d",
                        "text": "Số bao thức ăn loại I tối đa mà trang trại có thể mua được là 40 bao.",
                        "correct": False,
                        "explanation": "$4x \\le 200 \\Rightarrow x \\le 50$ bao (khi $y = 0$, đạm $= 500 \\ge 300$)."
                    }
                ]
            },
            {
                "id": "tf4",
                "statement": "Một đội xe vận tải cần chở ít nhất 140 người và 9 tấn hàng. Có hai loại xe: Xe A (thuê 4 triệu đồng/chuyến, chở được 20 người và 0.6 tấn hàng), Xe B (thuê 3 triệu đồng/chuyến, chở được 10 người và 1.5 tấn hàng). Đội xe có tối đa 10 xe loại A và 9 xe loại B.",
                "items": [
                    {
                        "key": "a",
                        "text": "Điều kiện số xe: $0 \\le x \\le 10$ và $0 \\le y \\le 9$ ($x, y \\in \\mathbb{N}$).",
                        "correct": True,
                        "explanation": "Đội xe chỉ có sẵn tối đa 10 xe A và 9 xe B."
                    },
                    {
                        "key": "b",
                        "text": "Ràng buộc số người: $20x + 10y \\ge 140 \\Leftrightarrow 2x + y \\ge 14$.",
                        "correct": True,
                        "explanation": "Đúng theo dữ kiện chở ít nhất 140 người."
                    },
                    {
                        "key": "c",
                        "text": "Ràng buộc khối lượng hàng: $0.6x + 1.5y \\ge 9 \\Leftrightarrow 2x + 5y \\ge 30$.",
                        "correct": True,
                        "explanation": "Nhân hai vế với $10/3$: $2x + 5y \\ge 30$."
                    },
                    {
                        "key": "d",
                        "text": "Chi phí thuê xe thấp nhất đạt được khi thuê 10 xe loại A và 0 xe loại B.",
                        "correct": False,
                        "explanation": "Thuê $x = 5, y = 4$: người $= 100+40=140$, hàng $= 3+6=9$ tấn. Chi phí $= 4(5) + 3(4) = 32$ triệu đồng ($< 10 \\times 4 = 40$ triệu đồng)."
                    }
                ]
            }
        ]

        sa_questions = [
            {
                "id": 1,
                "question": "Tìm hoành độ giao điểm của hai đường thẳng $x + y = 10$ và $2x - y = 5$.",
                "correctAnswer": "5",
                "acceptedAnswers": ["5", "5.0"],
                "explanation": "Cộng hai phương trình: $3x = 15 \\Rightarrow x = 5$."
            },
            {
                "id": 2,
                "question": "Tính diện tích của hình tam giác giới hạn bởi ba đường thẳng: $x = 0, y = 0, x + 2y = 8$.",
                "correctAnswer": "16",
                "acceptedAnswers": ["16", "16.0"],
                "explanation": "Giao với trục tọa độ tại $A(8; 0)$ và $B(0; 4)$. Diện tích $S = \\frac{1}{2}(8)(4) = 16$."
            },
            {
                "id": 3,
                "question": "Tìm giá trị lớn nhất của biểu thức $F(x; y) = 5x + 3y$ trên miền đa giác có các đỉnh $A(0; 0), B(6; 0), C(4; 3), D(0; 5)$.",
                "correctAnswer": "30",
                "acceptedAnswers": ["30", "30.0"],
                "explanation": "$F(A) = 0, F(B) = 30, F(C) = 5(4)+3(3) = 29, F(D) = 15$. GTLN là 30."
            },
            {
                "id": 4,
                "question": "Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = 3x - 4y$ trên miền tam giác có ba đỉnh $A(1; 1), B(5; 2), C(2; 6)$.",
                "correctAnswer": "-18",
                "acceptedAnswers": ["-18", "-18.0"],
                "explanation": "$F(A) = 3(1)-4(1) = -1, F(B) = 3(5)-4(2) = 7, F(C) = 3(2)-4(6) = -18$. GTNN là -18."
            },
            {
                "id": 5,
                "question": "Một xí nghiệp sản xuất hai loại sản phẩm I và II. Mỗi tấn sản phẩm I cần 2 máy A và 1 máy B, đem lại lợi nhuận 40 triệu đồng. Mỗi tấn sản phẩm II cần 1 máy A và 2 máy B, đem lại lợi nhuận 50 triệu đồng. Xí nghiệp có tối đa 8 máy A và 10 máy B. Hỏi lợi nhuận lớn nhất xí nghiệp có thể đạt được là bao nhiêu triệu đồng?",
                "correctAnswer": "260",
                "acceptedAnswers": ["260", "260.0"],
                "explanation": "Hệ BPT: $2x + y \\le 8, x + 2y \\le 10, x \\ge 0, y \\ge 0$. Đỉnh miền nghiệm: $(0;0), (4;0), (2;4), (0;5)$. Lợi nhuận $F(x; y) = 40x + 50y$. $F(2; 4) = 40(2) + 50(4) = 260$ triệu đồng."
            },
            {
                "id": 6,
                "question": "Một công ty cần thuê xe để chở 140 người và 9 tấn hàng. Xe lớn thuê 4 triệu/chuyến (chở 20 người, 0.6 tấn), xe nhỏ thuê 3 triệu/chuyến (chở 10 người, 1.5 tấn). Chi phí thuê xe nhỏ nhất là bao nhiêu triệu đồng?",
                "correctAnswer": "32",
                "acceptedAnswers": ["32", "32.0"],
                "explanation": "Thuê 5 xe lớn và 4 xe nhỏ: người $= 5(20)+4(10)=140$, hàng $= 5(0.6)+4(1.5)=9$ tấn. Chi phí $= 5(4) + 4(3) = 32$ triệu đồng."
            }
        ]

        exam_obj = {
            "id": f"cd2-de{exam_idx}",
            "examNumber": exam_idx,
            "title": f"Đề số {exam_idx}: Luyện Thi Chuyên Đề Hệ BPT Bậc Nhất 2 Ẩn",
            "code": f"CD2-20{exam_idx}",
            "badge": "Chuẩn Cấu Trúc 2025 - 2026",
            "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
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
        "id": "cd2",
        "code": "CĐ 2",
        "title": "HỆ BPT BẬC NHẤT 2 ẨN",
        "icon": "fa-solid fa-shapes",
        "badge": "Lớp 10 • Kiến thức trọng tâm",
        "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-200",
        "description": "BPT bậc nhất hai ẩn, biểu diễn miền nghiệm của hệ BPT, bài toán quy hoạch tuyến tính tối ưu hóa chi phí và lợi nhuận sản xuất.",
        "summary": summary_html,
        "exams": exams
    }

if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding='utf-8')
    t = get_topic_cd2()
    print(f"Topic {t['code']}: {t['title']} created with {len(t['exams'])} exams.")
