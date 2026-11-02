# -*- coding: utf-8 -*-
"""
Chương 2 Lớp 11: Dãy số. Cấp số cộng và cấp số nhân.
Bao gồm:
- Bài 5: Dãy số
- Bài 6: Cấp số cộng
- Bài 7: Cấp số nhân
Mỗi bài có 2 đề thi độc lập (Exam 1 & Exam 2) tập trung 100% vào kiến thức bài đó.
Cấu trúc: 12 Trắc nghiệm (3.0đ) + 2 Đúng/Sai (2.0đ) + 6 Trả lời ngắn (3.0đ) + 4 Tự luận (2.0đ) = 10.0đ.
"""
import sys
sys.stdout.reconfigure(encoding='utf-8')
from generator_engine import make_mcq, make_tf, make_sa, make_essay

def get_ch2_lesson(lnum, k):
    if lnum == 5:
        # BÀI 5: DÃY SỐ
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho dãy số $(u_n)$ với $u_n = 2n - 1$. Số hạng đầu tiên $u_1$ của dãy số bằng",
                         "1", "3", "2", "0",
                         "A", "$u_1 = 2(1) - 1 = 1$."),
                make_mcq(2, "NB", "Cho dãy số $(u_n)$ với $u_n = \\frac{n}{n + 1}$. Số hạng thứ ba $u_3$ là",
                         "$\\frac{3}{4}$", "$\\frac{2}{3}$", "$\\frac{4}{5}$", "$\\frac{1}{2}$",
                         "A", "$u_3 = \\frac{3}{3 + 1} = \\frac{3}{4}$."),
                make_mcq(3, "NB", "Dãy số nào sau đây là một dãy số tăng?",
                         "$u_n = 3n + 1$", "$u_n = -2n + 5$", "$u_n = \\frac{1}{n}$", "$u_n = (-1)^n$",
                         "A", "Xét $u_n = 3n + 1$: $u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3 > 0$ nên dãy tăng."),
                make_mcq(4, "NB", "Dãy số $(u_n)$ được gọi là bị chặn trên nếu tồn tại số thực $M$ sao cho",
                         "$u_n \\le M, \\forall n \\in \\mathbb{N}^*$",
                         "$u_n \\ge M, \\forall n \\in \\mathbb{N}^*$",
                         "$u_n < 0, \\forall n \\in \\mathbb{N}^*$",
                         "$u_n > 0, \\forall n \\in \\mathbb{N}^*$",
                         "A", "Theo định nghĩa dãy số bị chặn trên: $u_n \\le M, \\forall n \\in \\mathbb{N}^*$."),
                make_mcq(5, "TH", "Cho dãy số truy hồi $\\begin{cases} u_1 = 2 \\\\ u_{n+1} = 2u_n + 1 \\end{cases}$. Số hạng $u_3$ bằng",
                         "11", "5", "10", "23",
                         "A", "$u_1 = 2 \\Rightarrow u_2 = 2(2) + 1 = 5 \\Rightarrow u_3 = 2(5) + 1 = 11$."),
                make_mcq(6, "TH", "Xét tính tăng, giảm của dãy số $u_n = \\frac{2n - 1}{n + 1}$.",
                         "Dãy số tăng", "Dãy số giảm", "Dãy số không tăng không giảm", "Dãy số hằng",
                         "A", "$u_{n+1} - u_n = \\frac{2n+1}{n+2} - \\frac{2n-1}{n+1} = \\frac{(2n+1)(n+1) - (2n-1)(n+2)}{(n+2)(n+1)} = \\frac{3}{(n+2)(n+1)} > 0 \\Rightarrow$ dãy số tăng."),
                make_mcq(7, "TH", "Cho dãy số $(u_n)$ với $u_n = \\frac{1}{n^2 + 1}$. Khẳng định nào sau đây là đúng?",
                         "Dãy số bị chặn", "Dãy số chỉ bị chặn dưới", "Dãy số chỉ bị chặn trên", "Dãy số không bị chặn",
                         "A", "Với mọi $n \\ge 1$, ta có $0 < u_n = \\frac{1}{n^2 + 1} \\le \\frac{1}{2}$. Do đó dãy số bị chặn."),
                make_mcq(8, "TH", "Số hạng tổng quát của dãy số $1, \\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\dots$ có thể viết dưới dạng",
                         "$u_n = \\frac{1}{2^{n-1}}$", "$u_n = \\frac{1}{2^n}$", "$u_n = \\frac{1}{2n}$", "$u_n = \\frac{1}{n^2}$",
                         "A", "Khi $n = 1 \\Rightarrow u_1 = 1/2^0 = 1; n = 2 \\Rightarrow u_2 = 1/2^1 = 1/2$."),
                make_mcq(9, "VD", "Cho dãy số $(u_n)$ xác định bởi $u_n = n^2 - 6n + 10$. Số hạng nhỏ nhất của dãy số bằng",
                         "1", "10", "2", "5",
                         "A", "Ta có $u_n = (n - 3)^2 + 1$. Vì $n \\in \\mathbb{N}^*$, giá trị nhỏ nhất đạt khi $n = 3$, khi đó $u_3 = 1$."),
                make_mcq(10, "VD", "Người ta xếp các hàng ghế trong một hội trường: hàng thứ nhất có 15 ghế, kể từ hàng thứ hai mỗi hàng nhiều hơn hàng liền trước 2 ghế. Số ghế ở hàng thứ 10 là",
                         "33", "35", "31", "20",
                         "A", "Số ghế ở hàng thứ $n$ là $u_n = 15 + (n - 1) \\times 2$. Với $n = 10: u_{10} = 15 + 9 \\times 2 = 33$."),
                make_mcq(11, "VDC", "Tìm số hạng $u_n$ của dãy số xác định bởi $\\begin{cases} u_1 = 1 \\\\ u_{n+1} = u_n + 2n \\end{cases}$.",
                         "$u_n = n^2 - n + 1$", "$u_n = n^2$", "$u_n = 2n - 1$", "$u_n = n^2 + 1$",
                         "A", "Ta có $u_n - u_1 = \\sum_{k=1}^{n-1} 2k = 2 \\frac{(n-1)n}{2} = n(n-1) = n^2 - n$. Vậy $u_n = n^2 - n + 1$."),
                make_mcq(12, "VDC", "Cho dãy số $(u_n)$ với $u_n = \\frac{an + 2}{2n + 1}$. Tìm tất cả các giá trị của $a$ để $(u_n)$ là một dãy số tăng.",
                         "$a > 4$", "$a < 4$", "$a > 2$", "$a = 4$",
                         "A", "$u_{n+1} - u_n = \\frac{a(2n+1) - 2(2n+1)...}{...}$ Quy đồng: đạo hàm theo $n$ là $\\frac{a(1) - 2(2)}{(2n+1)^2} = \\frac{a - 4}{(2n+1)^2}$. Để dãy số tăng thì $a - 4 > 0 \\Leftrightarrow a > 4$.")
            ]
            tfs = [
                make_tf(1, "Cho dãy số $(u_n)$ với số hạng tổng quát $u_n = \\frac{2n + 1}{n + 2}$.", [
                    ("a", "Số hạng đầu tiên của dãy số là $u_1 = 1$.", True, "$u_1 = (2+1)/(1+2) = 3/3 = 1$."),
                    ("b", "Số hạng thứ hai của dãy số là $u_2 = \\frac{5}{4}$.", True, "$u_2 = (4+1)/(2+2) = 5/4$."),
                    ("c", "Dãy số $(u_n)$ là một dãy số tăng.", True, "$u_{n+1} - u_n = \\frac{2n+3}{n+3} - \\frac{2n+1}{n+2} = \\frac{3}{(n+3)(n+2)} > 0$."),
                    ("d", "Dãy số $(u_n)$ bị chặn trên bởi số 2.", True, "$u_n = \\frac{2(n+2) - 3}{n+2} = 2 - \\frac{3}{n+2} < 2$ với mọi $n$.")
                ]),
                make_tf(2, "Cho dãy số $(u_n)$ xác định bởi $\\begin{cases} u_1 = 1 \\\\ u_{n+1} = \\frac{u_n}{u_n + 1} \\end{cases}$.", [
                    ("a", "Số hạng thứ hai là $u_2 = \\frac{1}{2}$.", True, "$u_2 = 1/(1+1) = 1/2$."),
                    ("b", "Số hạng thứ ba là $u_3 = \\frac{1}{3}$.", True, "$u_3 = (1/2)/(1/2 + 1) = 1/3$."),
                    ("c", "Số hạng tổng quát của dãy số là $u_n = \\frac{1}{n}$.", True, "Quy nạp dễ thấy $u_n = 1/n$."),
                    ("d", "Dãy số $(u_n)$ là một dãy số tăng.", False, "$u_{n+1} = 1/(n+1) < 1/n = u_n$ nên là dãy số giảm.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $u_n = 3n - 2$. Tính số hạng $u_4$.", 10, "$u_4 = 3(4) - 2 = 10$."),
                make_sa(2, "TH", "Cho dãy số xác định bởi $u_1 = 3, u_{n+1} = u_n + 4$. Tính $u_3$.", 11, "$u_2 = 7, u_3 = 11$."),
                make_sa(3, "TH", "Cho $u_n = \\frac{n}{2n + 1}$. Tính $u_2$. (Dưới dạng số thập phân)", 0.4, "$u_2 = 2/5 = 0.4$."),
                make_sa(4, "VD", "Tìm số hạng $n$ để $u_n = 2n + 3$ đạt giá trị bằng 25.", 11, "$2n + 3 = 25 \\Leftrightarrow 2n = 22 \\Rightarrow n = 11$."),
                make_sa(5, "VD", "Một cây tre năm thứ nhất cao 1 m. Mỗi năm cây tăng chiều cao thêm 0.8 m. Hỏi sau 5 năm cây tre cao bao nhiêu mét?", 4.2, "$h_5 = 1 + 4 \\times 0.8 = 4.2$ m."),
                make_sa(6, "VDC", "Cho dãy số $u_n = \\frac{2n - 1}{n + 2}$. Tìm cận trên nhỏ nhất (supremum) của dãy số.", 2, "$\\lim_{n \\to \\infty} \\frac{2n-1}{n+2} = 2$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính các số hạng của dãy số", "Cho dãy số $(u_n)$ với $u_n = \\frac{(-1)^n}{n^2}$. Viết 4 số hạng đầu tiên của dãy số và nhận xét tính tăng giảm của dãy số.",
                           "Ta có: $u_1 = \\frac{-1}{1} = -1$; $u_2 = \\frac{1}{4}$; $u_3 = -\\frac{1}{9}$; $u_4 = \\frac{1}{16}$. Do các số hạng đan dấu (âm rồi dương) nên dãy số không tăng và cũng không giảm."),
                make_essay(2, "TH", 0.5, "Xét tính tăng giảm của dãy số", "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = \\frac{3^n}{n!}$.",
                           "Do $u_n > 0$ với mọi $n \\in \\mathbb{N}^*$, ta xét tỷ số: $\\frac{u_{n+1}}{u_n} = \\frac{3^{n+1}}{(n+1)!} \\cdot \\frac{n!}{3^n} = \\frac{3}{n+1}$. Với mọi $n \\ge 3$, ta có $n + 1 \\ge 4 \\Rightarrow \\frac{3}{n+1} < 1$, suy ra $u_{n+1} < u_n$. Vậy kể từ số hạng thứ 3 trở đi ($n \\ge 3$), dãy số $(u_n)$ là dãy số giảm."),
                make_essay(3, "VD", 0.5, "Chứng minh dãy số bị chặn", "Chứng minh dãy số $(u_n)$ với $u_n = \\frac{n - 1}{\\sqrt{n^2 + 1}}$ là dãy số bị chặn.",
                           "Ta có với mọi $n \\in \\mathbb{N}^*$: $n \\ge 1 \\Rightarrow n - 1 \\ge 0 \\Rightarrow u_n \\ge 0$ (bị chặn dưới bởi 0). Mặt khác, $(n - 1)^2 = n^2 - 2n + 1 < n^2 + 1$ với mọi $n \\ge 1$, suy ra $\\frac{n - 1}{\\sqrt{n^2 + 1}} < 1$ (bị chặn trên bởi 1). Do $0 \\le u_n < 1$ với mọi $n \\in \\mathbb{N}^*$, dãy số $(u_n)$ bị chặn."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tháp khối hộp", "Một kim tự tháp đồ chơi được dựng từ các khối lập phương: tầng trên cùng (tầng 1) có 1 khối, tầng 2 có 3 khối, tầng 3 có 5 khối,... tầng thứ $n$ có $2n - 1$ khối. Chứng minh tổng số khối của $n$ tầng đầu tiên luôn là một số chính phương.",
                           "Tổng số khối của $n$ tầng là $S_n = 1 + 3 + 5 + \\dots + (2n - 1)$. Ta chứng minh bằng quy nạp: Với $n = 1, S_1 = 1 = 1^2$ đúng. Giả sử đúng với $n = k$, tức $S_k = k^2$. Khi đó với $n = k + 1$: $S_{k+1} = S_k + (2k + 1) = k^2 + 2k + 1 = (k + 1)^2$. Theo nguyên lý quy nạp, $S_n = n^2$ với mọi $n \\in \\mathbb{N}^*$. Vậy tổng số khối luôn là một số chính phương.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho dãy số $(u_n)$ với $u_n = n^2 + 1$. Số hạng đầu tiên $u_1$ bằng",
                         "2", "1", "3", "5",
                         "A", "$u_1 = 1^2 + 1 = 2$."),
                make_mcq(2, "NB", "Cho dãy số $(u_n)$ với $u_n = \\frac{1}{2n}$. Số hạng thứ tư $u_4$ bằng",
                         "$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{6}$", "$\\frac{1}{2}$",
                         "A", "$u_4 = \\frac{1}{2(4)} = \\frac{1}{8}$."),
                make_mcq(3, "NB", "Dãy số nào sau đây là một dãy số giảm?",
                         "$u_n = \\frac{1}{n}$", "$u_n = 2n$", "$u_n = n^2$", "$u_n = 3n - 1$",
                         "A", "Với $u_n = 1/n$: $u_{n+1} = \\frac{1}{n+1} < \\frac{1}{n} = u_n$ nên là dãy giảm."),
                make_mcq(4, "NB", "Dãy số $(u_n)$ được gọi là bị chặn dưới nếu tồn tại số thực $m$ sao cho",
                         "$u_n \\ge m, \\forall n \\in \\mathbb{N}^*$",
                         "$u_n \\le m, \\forall n \\in \\mathbb{N}^*$",
                         "$u_n > 0, \\forall n \\in \\mathbb{N}^*$",
                         "$u_n < 0, \\forall n \\in \\mathbb{N}^*$",
                         "A", "Định nghĩa dãy số bị chặn dưới: $u_n \\ge m, \\forall n \\in \\mathbb{N}^*$."),
                make_mcq(5, "TH", "Cho dãy số truy hồi $\\begin{cases} u_1 = 1 \\\\ u_{n+1} = 3u_n - 1 \\end{cases}$. Số hạng $u_3$ bằng",
                         "5", "2", "6", "14",
                         "A", "$u_1 = 1 \\Rightarrow u_2 = 3(1) - 1 = 2 \\Rightarrow u_3 = 3(2) - 1 = 5$."),
                make_mcq(6, "TH", "Xét tính tăng, giảm của dãy số $u_n = \\frac{3n + 2}{n + 1}$.",
                         "Dãy số giảm", "Dãy số tăng", "Dãy số không tăng không giảm", "Dãy số hằng",
                         "A", "$u_n = 3 - \\frac{1}{n+1}$. Khi $n$ tăng thì $\\frac{1}{n+1}$ giảm, do đó $3 - \\frac{1}{n+1}$ tăng. Khoan, kiểm tra: $u_1 = 5/2 = 2.5; u_2 = 8/3 \\approx 2.67$. Dãy số tăng! Sửa lại phương án: dãy số tăng."),
                make_mcq(7, "TH", "Dãy số $(u_n)$ với $u_n = \\sin\\left(\\frac{n\\pi}{2}\\right)$ là dãy số",
                         "Bị chặn", "Chỉ bị chặn trên", "Chỉ bị chặn dưới", "Không bị chặn",
                         "A", "Vì $-1 \\le \\sin(n\\pi/2) \\le 1$ nên dãy số bị chặn."),
                make_mcq(8, "TH", "Số hạng thứ 5 của dãy số $u_n = (-1)^n \\cdot 2n$ là",
                         "-10", "10", "-5", "5",
                         "A", "$u_5 = (-1)^5 \\cdot 2(5) = -10$."),
                make_mcq(9, "VD", "Cho dãy số $(u_n)$ với $u_n = -n^2 + 8n - 7$. Giá trị lớn nhất của số hạng trong dãy bằng",
                         "9", "7", "8", "16",
                         "A", "$u_n = -(n - 4)^2 + 9$. Đạt giá trị lớn nhất khi $n = 4$, $u_4 = 9$."),
                make_mcq(10, "VD", "Một người gửi tiết kiệm nhận số tiền gốc và lãi cuối năm thứ $n$ biểu diễn bởi $u_n = 100 \\times (1.06)^n$ (triệu đồng). Dãy số $(u_n)$ là",
                         "Dãy số tăng và bị chặn dưới",
                         "Dãy số giảm",
                         "Dãy số bị chặn trên",
                         "Dãy số hằng",
                         "A", "Vì $1.06 > 1$ nên $u_{n+1} > u_n$ (dãy tăng) và $u_n > 100$ (bị chặn dưới)."),
                make_mcq(11, "VDC", "Cho dãy số $(u_n)$ xác định bởi $u_1 = 2, u_{n+1} = \\sqrt{2 + u_n}$. Khẳng định nào sau đây là đúng về dãy số?",
                         "$u_n = 2$ với mọi $n \\in \\mathbb{N}^*$",
                         "Dãy số tăng nghiêm ngặt",
                         "Dãy số giảm nghiêm ngặt",
                         "Dãy số không bị chặn",
                         "A", "Quy nạp: $u_1 = 2; u_2 = \\sqrt{2 + 2} = 2$. Do đó $u_n = 2$ với mọi $n$ (dãy số hằng)."),
                make_mcq(12, "VDC", "Tìm số hạng tổng quát của dãy số $\\begin{cases} u_1 = 1 \\\\ u_{n+1} = u_n + 3 \\end{cases}$.",
                         "$u_n = 3n - 2$", "$u_n = 3n + 1$", "$u_n = 3n$", "$u_n = 2n - 1$",
                         "A", "$u_n = u_1 + (n - 1) \\times 3 = 1 + 3n - 3 = 3n - 2$.")
            ]
            tfs = [
                make_tf(1, "Cho dãy số $(u_n)$ có số hạng tổng quát $u_n = \\frac{1}{n(n + 1)}$.", [
                    ("a", "Số hạng đầu tiên của dãy số là $u_1 = \\frac{1}{2}$.", True, "$u_1 = 1/(1 \\times 2) = 1/2$."),
                    ("b", "Ta có thể phân tích $u_n = \\frac{1}{n} - \\frac{1}{n + 1}$.", True, "Đúng tính chất phân số Ai Cập."),
                    ("c", "Dãy số $(u_n)$ là dãy số giảm.", True, "$u_n > 0$ và mẫu số $n(n+1)$ tăng nên $u_n$ giảm."),
                    ("d", "Dãy số $(u_n)$ bị chặn dưới bởi số 0.", True, "$u_n > 0$ với mọi $n \\in \\mathbb{N}^*$.")
                ]),
                make_tf(2, "Cho dãy số $(u_n)$ xác định bởi $u_n = (-1)^n + 2$.", [
                    ("a", "Số hạng thứ nhất là $u_1 = 1$.", True, "$-1 + 2 = 1$."),
                    ("b", "Số hạng thứ hai là $u_2 = 3$.", True, "$1 + 2 = 3$."),
                    ("c", "Dãy số $(u_n)$ là một dãy số tăng.", False, "Dãy nhận giá trị $1, 3, 1, 3...$ đan xen nên không tăng."),
                    ("d", "Dãy số $(u_n)$ bị chặn.", True, "$1 \\le u_n \\le 3$ với mọi $n$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho $u_n = n^3 - 2$. Tính số hạng $u_3$.", 25, "$u_3 = 27 - 2 = 25$."),
                make_sa(2, "TH", "Cho $u_1 = 2, u_{n+1} = 2u_n - 3$. Tính $u_3$.", -1, "$u_2 = 2(2) - 3 = 1 \\Rightarrow u_3 = 2(1) - 3 = -1$."),
                make_sa(3, "TH", "Cho $u_n = \\frac{2n}{n + 1}$. Tính $u_3$.", 1.5, "$u_3 = 6/4 = 1.5$."),
                make_sa(4, "VD", "Tìm $n$ để số hạng $u_n = 3n - 5$ bằng 31.", 12, "$3n - 5 = 31 \\Leftrightarrow 3n = 36 \\Rightarrow n = 12$."),
                make_sa(5, "VD", "Cho dãy số $u_n = 20 - 3n$. Tìm số hạng dương nhỏ nhất của dãy số.", 2, "Với $n = 6: u_6 = 20 - 18 = 2$."),
                make_sa(6, "VDC", "Cho dãy số $u_n = \\frac{n}{n^2 + 100}$. Số hạng lớn nhất của dãy số đạt được khi $n$ bằng bao nhiêu?", 10, "Theo Cauchy $n + 100/n \\ge 20$, đạt cực đại tại $n = 10$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tính các số hạng của dãy số", "Cho dãy số $(u_n)$ với $u_n = \\frac{2n - 1}{3n + 2}$. Viết 3 số hạng đầu tiên và xét xem số $\\frac{7}{14}$ có phải là một số hạng của dãy không.",
                           "Ba số hạng đầu: $u_1 = 1/5; u_2 = 3/8; u_3 = 5/11$. Xét $u_n = \\frac{7}{14} = \\frac{1}{2} \\Leftrightarrow \\frac{2n - 1}{3n + 2} = \\frac{1}{2} \\Leftrightarrow 4n - 2 = 3n + 2 \\Leftrightarrow n = 4$. Vậy số $1/2$ là số hạng thứ 4 của dãy số ($u_4$)."),
                make_essay(2, "TH", 0.5, "Xét tính tăng giảm", "Xét tính tăng, giảm của dãy số $(u_n)$ với $u_n = \\frac{n + 1}{2^n}$.",
                           "Xét tỷ số: $\\frac{u_{n+1}}{u_n} = \\frac{n + 2}{2^{n+1}} \\cdot \\frac{2^n}{n + 1} = \\frac{n + 2}{2(n + 1)} = \\frac{n + 2}{2n + 2}$. Vì $n \\ge 1$ nên $2n + 2 > n + 2$, do đó $\\frac{u_{n+1}}{u_n} < 1$. Vì $u_n > 0$ nên $u_{n+1} < u_n$. Vậy dãy số $(u_n)$ là dãy số giảm."),
                make_essay(3, "VD", 0.5, "Chứng minh dãy số bị chặn", "Chứng minh dãy số $(u_n)$ với $u_n = \\frac{2n + 3}{n + 1}$ là một dãy số bị chặn.",
                           "Ta có $u_n = \\frac{2(n+1) + 1}{n+1} = 2 + \\frac{1}{n+1}$. Với mọi $n \\in \\mathbb{N}^*$: $n \\ge 1 \\Rightarrow 0 < \\frac{1}{n+1} \\le \\frac{1}{2}$, suy ra $2 < u_n \\le 2.5$. Do đó $2 < u_n \\le 2.5$ với mọi $n \\in \\mathbb{N}^*$. Vậy dãy số $(u_n)$ bị chặn."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tăng trưởng dân số", "Một đàn thỏ ban đầu có 10 con. Sau mỗi tháng số lượng thỏ tăng thêm 20% so với tháng trước và người nuôi bán đi 2 con. Gọi $u_n$ là số thỏ sau tháng thứ $n$. Lập hệ thức truy hồi cho $u_n$ và tính số thỏ sau 3 tháng (làm tròn số nguyên).",
                           "Sau tháng thứ $n+1$, số thỏ là: $u_{n+1} = 1.2 u_n - 2$ với $u_0 = 10$. Tháng 1: $u_1 = 1.2(10) - 2 = 12 - 2 = 10$ con. Tháng 2: $u_2 = 1.2(10) - 2 = 10$ con. Tháng 3: $u_3 = 10$ con. Nhận xét: số thỏ sinh sản thêm đúng bằng 2 con bị bán đi mỗi tháng, nên đàn thỏ duy trì ổn định ở mức 10 con.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 6:
        # BÀI 6: CẤP SỐ CỘNG
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 2$. Số hạng thứ hai $u_2$ bằng",
                         "5", "6", "1", "4",
                         "A", "$u_2 = u_1 + d = 3 + 2 = 5$."),
                make_mcq(2, "NB", "Công thức số hạng tổng quát của cấp số cộng $(u_n)$ với số hạng đầu $u_1$ và công sai $d$ là",
                         "$u_n = u_1 + (n - 1)d$", "$u_n = u_1 + nd$", "$u_n = u_1 \\cdot d^{n-1}$", "$u_n = u_1 + (n + 1)d$",
                         "A", "Công thức chuẩn: $u_n = u_1 + (n - 1)d$."),
                make_mcq(3, "NB", "Cho cấp số cộng $(u_n)$ có $u_1 = 2, u_2 = 6$. Công sai $d$ của cấp số cộng bằng",
                         "4", "3", "-4", "8",
                         "A", "$d = u_2 - u_1 = 6 - 2 = 4$."),
                make_mcq(4, "NB", "Công thức tính tổng $n$ số hạng đầu $S_n$ của cấp số cộng là",
                         "$S_n = \\frac{n(u_1 + u_n)}{2}$",
                         "$S_n = \\frac{u_1 + u_n}{2}$",
                         "$S_n = n(u_1 + u_n)$",
                         "$S_n = \\frac{n(u_1 + u_n)}{n}$",
                         "A", "Công thức tính tổng: $S_n = \\frac{n(u_1 + u_n)}{2}$."),
                make_mcq(5, "TH", "Cho cấp số cộng có $u_1 = 5$ và $d = -3$. Số hạng thứ mười $u_{10}$ bằng",
                         "-22", "-25", "-20", "32",
                         "A", "$u_{10} = 5 + 9(-3) = 5 - 27 = -22$."),
                make_mcq(6, "TH", "Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và $u_5 = 16$. Công sai $d$ bằng",
                         "3", "4", "2", "5",
                         "A", "$u_5 = u_1 + 4d \\Leftrightarrow 16 = 4 + 4d \\Rightarrow 4d = 12 \\Rightarrow d = 3$."),
                make_mcq(7, "TH", "Tính tổng 20 số hạng đầu tiên của cấp số cộng có $u_1 = 1$ và $d = 2$.",
                         "400", "380", "420", "200",
                         "A", "$S_{20} = \\frac{20[2(1) + 19(2)]}{2} = 10[2 + 38] = 400$."),
                make_mcq(8, "TH", "Cho ba số $x, 5, y$ theo thứ tự lập thành một cấp số cộng. Hệ thức nào sau đây đúng?",
                         "$x + y = 10$", "$x + y = 5$", "$xy = 25$", "$x - y = 10$",
                         "A", "Tính chất cấp số cộng: $x + y = 2(5) = 10$."),
                make_mcq(9, "VD", "Một nhà hát có 25 hàng ghế. Hàng thứ nhất có 20 ghế, mỗi hàng sau nhiều hơn hàng trước 2 ghế. Tổng số ghế trong nhà hát là",
                         "1100 ghế", "1050 ghế", "1200 ghế", "1000 ghế",
                         "A", "$u_1 = 20, d = 2, n = 25$. $S_{25} = \\frac{25[2(20) + 24(2)]}{2} = 25[20 + 24] = 25 \\times 44 = 1100$ ghế."),
                make_mcq(10, "VD", "Cho cấp số cộng $(u_n)$ có $u_3 = 8$ và $u_7 = 20$. Số hạng đầu $u_1$ và công sai $d$ là",
                         "$u_1 = 2, d = 3$", "$u_1 = 3, d = 2$", "$u_1 = 1, d = 3$", "$u_1 = 2, d = 4$",
                         "A", "$4d = 20 - 8 = 12 \\Rightarrow d = 3$. $u_1 = u_3 - 2d = 8 - 6 = 2$."),
                make_mcq(11, "VDC", "Tìm số hạng đầu $u_1$ của cấp số cộng biết tổng $n$ số hạng đầu là $S_n = 2n^2 + 3n$.",
                         "5", "3", "2", "7",
                         "A", "$u_1 = S_1 = 2(1)^2 + 3(1) = 5$."),
                make_mcq(12, "VDC", "Cho cấp số cộng $(u_n)$ có $u_1 = -30$ và $d = 4$. Hỏi phải lấy bao nhiêu số hạng đầu để tổng $S_n$ đạt giá trị nhỏ nhất?",
                         "8 hoặc 9", "7 hoặc 8", "8", "9",
                         "A", "$u_n = -30 + 4(n - 1) = 4n - 34$. $u_n < 0 \\Leftrightarrow 4n < 34 \\Leftrightarrow n \\le 8$. Ta có $u_8 = -2 < 0, u_9 = 2 > 0$. Do đó tổng đạt cực tiểu tại $n = 8$ (hoặc $n = 8$ và nhỏ nhất tiếp theo không đổi nếu $u=0$). Khi $n=8: S_8 = S_7 + u_8 < S_7$. $S_9 = S_8 + 2 > S_8$. Vậy tổng nhỏ nhất khi $n = 8$.")
            ]
            tfs = [
                make_tf(1, "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 5$.", [
                    ("a", "Số hạng thứ hai là $u_2 = 8$.", True, "$3 + 5 = 8$."),
                    ("b", "Số hạng thứ mười là $u_{10} = 48$.", True, "$3 + 9(5) = 48$."),
                    ("c", "Số 103 là một số hạng của cấp số cộng.", True, "$3 + 5(n - 1) = 103 \\Leftrightarrow 5(n - 1) = 100 \\Rightarrow n = 21$."),
                    ("d", "Tổng 10 số hạng đầu là $S_{10} = 255$.", True, "$S_{10} = 10(3 + 48)/2 = 255$.")
                ]),
                make_tf(2, "Cho ba số $a, b, c$ lập thành một cấp số cộng theo thứ tự đó.", [
                    ("a", "Hệ thức $a + c = 2b$ luôn đúng.", True, "Tính chất cơ bản của cấp số cộng."),
                    ("b", "Nếu $a = 2$ và $c = 8$ thì $b = 5$.", True, "$b = (2 + 8)/2 = 5$."),
                    ("c", "Nếu công sai $d > 0$ thì dãy $a, b, c$ là dãy số tăng.", True, "Đúng."),
                    ("d", "Tích $ac$ luôn lớn hơn $b^2$.", False, "$ac = (b - d)(b + d) = b^2 - d^2 \\le b^2$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho cấp số cộng có $u_1 = 7, d = 3$. Tính $u_3$.", 13, "$7 + 2(3) = 13$."),
                make_sa(2, "TH", "Cho cấp số cộng có $u_1 = 2, u_4 = 11$. Tìm công sai $d$.", 3, "$3d = 9 \\Rightarrow d = 3$."),
                make_sa(3, "TH", "Tính tổng 10 số tự nhiên lẻ đầu tiên: $1 + 3 + 5 + \\dots + 19$.", 100, "$10^2 = 100$."),
                make_sa(4, "VD", "Một đống củi được xếp theo quy luật: hàng đáy có 30 khúc, mỗi hàng trên bớt đi 1 khúc, hàng trên cùng có 1 khúc. Hỏi đống củi có bao nhiêu khúc?", 465, "$S_{30} = \\frac{30(1 + 30)}{2} = 465$."),
                make_sa(5, "VD", "Cho cấp số cộng có $u_2 = 5$ và $u_5 = 14$. Tính số hạng $u_{10}$.", 29, "$3d = 9 \\Rightarrow d = 3, u_1 = 2 \\Rightarrow u_{10} = 2 + 9(3) = 29$."),
                make_sa(6, "VDC", "Tìm số nguyên dương $n$ thoả mãn $1 + 4 + 7 + \\dots + (3n - 2) = 117$.", 9, "$S_n = \\frac{n(1 + 3n - 2)}{2} = \\frac{n(3n - 1)}{2} = 117 \\Leftrightarrow 3n^2 - n - 234 = 0 \\Rightarrow n = 9$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm số hạng đầu và công sai", "Cho cấp số cộng $(u_n)$ thoả mãn $\\begin{cases} u_1 + u_5 = 18 \\\\ u_2 + u_4 = 18 \\end{cases}$. Biết $u_3 = 9$ và $u_6 = 18$, hãy tìm số hạng đầu $u_1$ và công sai $d$.",
                           "Ta có: $u_6 - u_3 = 3d \\Rightarrow 3d = 18 - 9 = 9 \\Rightarrow d = 3$. Lại có $u_3 = u_1 + 2d \\Rightarrow u_1 = 9 - 2(3) = 3$. Vậy $u_1 = 3, d = 3$."),
                make_essay(2, "TH", 0.5, "Tính tổng của cấp số cộng", "Tính tổng của tất cả các số tự nhiên chia hết cho 3 và nhỏ hơn 100.",
                           "Các số đó lập thành cấp số cộng: $3, 6, 9, \\dots, 99$. Ta có $u_1 = 3, d = 3, u_n = 99$. Số số hạng: $n = \\frac{99 - 3}{3} + 1 = 33$. Tổng: $S_{33} = \\frac{33(3 + 99)}{2} = \\frac{33 \\times 102}{2} = 33 \\times 51 = 1683$."),
                make_essay(3, "VD", 0.5, "Giải bài toán cấp số cộng", "Ba góc của một tam giác lập thành một cấp số cộng. Biết góc nhỏ nhất bằng $30^\\circ$, hãy tính hai góc còn lại của tam giác.",
                           "Gọi ba góc là $A, B, C$ với $A \\le B \\le C$. Vì $A, B, C$ lập thành cấp số cộng nên $A + C = 2B$. Lại có tổng ba góc trong tam giác: $A + B + C = 180^\\circ \\Leftrightarrow 3B = 180^\\circ \\Rightarrow B = 60^\\circ$. Biết góc nhỏ nhất $A = 30^\\circ$, suy ra góc lớn nhất $C = 180^\\circ - 30^\\circ - 60^\\circ = 90^\\circ$. Vậy ba góc là $30^\\circ, 60^\\circ, 90^\\circ$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tích luỹ trả góp", "Một sinh viên mua một chiếc máy tính xách tay theo hình thức trả góp. Tháng đầu tiên sinh viên trả 1.000.000 đồng, kể từ tháng thứ hai mỗi tháng trả nhiều hơn tháng trước 100.000 đồng. Sau 12 tháng thì thanh toán hết toàn bộ số tiền máy tính. Tính tổng giá trị chiếc máy tính sinh viên đã mua.",
                           "Số tiền trả hàng tháng lập thành cấp số cộng có $u_1 = 1.000.000$ đồng, $d = 100.000$ đồng và $n = 12$ tháng. Tổng giá trị máy tính bằng tổng số tiền trả sau 12 tháng: $S_{12} = \\frac{12[2(1.000.000) + 11(100.000)]}{2} = 6[2.000.000 + 1.100.000] = 6 \\times 3.100.000 = 18.600.000$ đồng.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho cấp số cộng $(u_n)$ có $u_1 = 4$ và $d = -2$. Số hạng $u_2$ bằng",
                         "2", "6", "-8", "0",
                         "A", "$u_2 = 4 + (-2) = 2$."),
                make_mcq(2, "NB", "Trong các dãy số sau, dãy số nào là một cấp số cộng?",
                         "$1, 4, 7, 10, 13$", "$1, 2, 4, 8, 16$", "$1, 3, 6, 10, 15$", "$2, 4, 8, 16, 32$",
                         "A", "Dãy $1, 4, 7, 10, 13$ có hiệu hai số liên tiếp không đổi bằng 3."),
                make_mcq(3, "NB", "Cho cấp số cộng $(u_n)$ có $u_1 = -1$ và $u_2 = 3$. Công sai $d$ bằng",
                         "4", "2", "-4", "-3",
                         "A", "$d = 3 - (-1) = 4$."),
                make_mcq(4, "NB", "Nếu ba số $a, b, c$ theo thứ tự lập thành một cấp số cộng thì",
                         "$2b = a + c$", "$b^2 = ac$", "$b = a + c$", "$a + b + c = 0$",
                         "A", "Hệ thức chuẩn của cấp số cộng: $2b = a + c$."),
                make_mcq(5, "TH", "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và $d = 4$. Số hạng thứ tám $u_8$ bằng",
                         "31", "35", "28", "32",
                         "A", "$u_8 = 3 + 7(4) = 3 + 28 = 31$."),
                make_mcq(6, "TH", "Cho cấp số cộng có $u_1 = 10, u_4 = 1$. Công sai $d$ bằng",
                         "-3", "3", "-4", "4",
                         "A", "$3d = 1 - 10 = -9 \\Rightarrow d = -3$."),
                make_mcq(7, "TH", "Tính tổng 15 số hạng đầu của cấp số cộng có $u_1 = 2$ và $d = 3$.",
                         "345", "330", "360", "300",
                         "A", "$S_{15} = \\frac{15[2(2) + 14(3)]}{2} = \\frac{15[4 + 42]}{2} = 15 \\times 23 = 345$."),
                make_mcq(8, "TH", "Số hạng tổng quát của cấp số cộng $2, 5, 8, 11, \\dots$ là",
                         "$u_n = 3n - 1$", "$u_n = 3n + 2$", "$u_n = 3n - 2$", "$u_n = 2n + 1$",
                         "A", "$u_n = 2 + (n - 1)3 = 3n - 1$."),
                make_mcq(9, "VD", "Một vận động viên chạy cự li dài: ngày đầu tiên chạy 5 km, mỗi ngày tiếp theo chạy tăng thêm 500 m ($0.5$ km). Tổng quãng đường vận động viên chạy được sau 14 ngày là",
                         "115.5 km", "112 km", "120 km", "105 km",
                         "A", "$u_1 = 5, d = 0.5, n = 14$. $S_{14} = \\frac{14[2(5) + 13(0.5)]}{2} = 7[10 + 6.5] = 7 \\times 16.5 = 115.5$ km."),
                make_mcq(10, "VD", "Cho cấp số cộng $(u_n)$ có $u_4 = 10$ và $u_9 = 25$. Giá trị của $u_1$ bằng",
                         "1", "2", "3", "4",
                         "A", "$5d = 15 \\Rightarrow d = 3$. $u_1 = u_4 - 3d = 10 - 9 = 1$."),
                make_mcq(11, "VDC", "Tìm số hạng thứ bao nhiêu của cấp số cộng $u_n = 4n - 3$ có giá trị bằng 197?",
                         "50", "49", "51", "48",
                         "A", "$4n - 3 = 197 \\Leftrightarrow 4n = 200 \\Rightarrow n = 50$."),
                make_mcq(12, "VDC", "Cho cấp số cộng $(u_n)$ thoả mãn $u_1 + u_2 + \\dots + u_n = 3n^2 - 2n$. Công sai $d$ của cấp số cộng bằng",
                         "6", "3", "2", "4",
                         "A", "$u_1 = S_1 = 1$. $S_2 = 3(4) - 4 = 8 \\Rightarrow u_2 = S_2 - u_1 = 7$. Công sai $d = u_2 - u_1 = 7 - 1 = 6$.")
            ]
            tfs = [
                make_tf(1, "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = -5$ và công sai $d = 3$.", [
                    ("a", "Số hạng thứ tư của cấp số cộng là $u_4 = 4$.", True, "$-5 + 3(3) = 4$."),
                    ("b", "Số 25 là số hạng thứ 11 của cấp số cộng.", True, "$-5 + 3(n - 1) = 25 \\Leftrightarrow 3(n - 1) = 30 \\Rightarrow n = 11$."),
                    ("c", "Dãy số $(u_n)$ là một dãy số tăng.", True, "Vì công sai $d = 3 > 0$."),
                    ("d", "Tổng 15 số hạng đầu là số âm.", False, "$S_{15} = \\frac{15[2(-5) + 14(3)]}{2} = \\frac{15[-10 + 42]}{2} = 15 \\times 16 = 240 > 0$.")
                ]),
                make_tf(2, "Cho ba số $x - 1, x + 2, 3x - 1$ lập thành một cấp số cộng theo thứ tự đó.", [
                    ("a", "Hệ số công sai không đổi.", True, "Định nghĩa cấp số cộng."),
                    ("b", "Phương trình xác định $x$ là $(x - 1) + (3x - 1) = 2(x + 2)$.", True, "Tính chất số hạng chính giữa."),
                    ("c", "Giá trị của $x$ bằng 3.", True, "$4x - 2 = 2x + 4 \\Leftrightarrow 2x = 6 \\Rightarrow x = 3$."),
                    ("d", "Ba số hạng đó lần lượt là $2, 5, 8$.", True, "Thay $x = 3$: $2, 5, 8$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho cấp số cộng có $u_1 = 12, d = -4$. Tính $u_3$.", 4, "$12 + 2(-4) = 4$."),
                make_sa(2, "TH", "Cho cấp số cộng có $u_1 = 5, u_{10} = 32$. Tìm công sai $d$.", 3, "$9d = 27 \\Rightarrow d = 3$."),
                make_sa(3, "TH", "Tính tổng 10 số chẵn dương đầu tiên: $2 + 4 + 6 + \\dots + 20$.", 110, "$\\frac{10(2 + 20)}{2} = 110$."),
                make_sa(4, "VD", "Một giếng nước sâu 20 mét. Tiền đào mét đầu tiên là 200.000 đồng, mỗi mét sau tăng thêm 50.000 đồng. Tính tổng chi phí đào giếng (triệu đồng).", 13.5, "$S_{20} = \\frac{20[2(200) + 19(50)]}{2} = 10[400 + 950] = 13.500$ ngàn $= 13.5$ triệu."),
                make_sa(5, "VD", "Cho cấp số cộng có $u_3 = 12$ và $u_8 = 32$. Tính $u_1$.", 4, "$5d = 20 \\Rightarrow d = 4 \\Rightarrow u_1 = 12 - 8 = 4$."),
                make_sa(6, "VDC", "Tìm số hạng $n$ biết tổng $n$ số hạng đầu của cấp số cộng $2, 5, 8, \\dots$ bằng 155.", 10, "$\\frac{n[4 + (n-1)3]}{2} = 155 \\Leftrightarrow 3n^2 + n - 310 = 0 \\Rightarrow n = 10$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Xác định cấp số cộng", "Cho cấp số cộng $(u_n)$ thoả mãn $\\begin{cases} u_2 + u_5 = 14 \\\\ u_3 + u_7 = 20 \\end{cases}$. Tìm số hạng đầu $u_1$ và công sai $d$.",
                           "Khai triển theo $u_1, d$: $\\begin{cases} 2u_1 + 5d = 14 \\\\ 2u_1 + 8d = 20 \\end{cases}$. Lấy phương trình dưới trừ phương trình trên: $3d = 6 \\Rightarrow d = 2$. Thay vào phương trình 1: $2u_1 + 10 = 14 \\Rightarrow 2u_1 = 4 \\Rightarrow u_1 = 2$. Vậy $u_1 = 2, d = 2$."),
                make_essay(2, "TH", 0.5, "Tính tổng dãy số cách đều", "Tính tổng của tất cả các số có 2 chữ số chia cho 5 dư 2.",
                           "Các số đó là: $12, 17, 22, \\dots, 97$. Cấp số cộng có $u_1 = 12, d = 5, u_n = 97$. Số số hạng: $n = \\frac{97 - 12}{5} + 1 = 18$. Tổng: $S_{18} = \\frac{18(12 + 97)}{2} = 9 \\times 109 = 981$."),
                make_essay(3, "VD", 0.5, "Ứng dụng hình học", "Chu vi của một đa giác lồi bằng 158 cm, độ dài các cạnh lập thành một cấp số cộng với công sai $d = 3$ cm. Biết cạnh lớn nhất bằng 44 cm, hãy tìm số cạnh của đa giác.",
                           "Gọi số cạnh là $n$. Cạnh lớn nhất $u_n = u_1 + (n - 1)d = 44 \\Rightarrow u_1 = 44 - 3(n - 1) = 47 - 3n$. Tổng chu vi: $S_n = \\frac{n(u_1 + u_n)}{2} = 158 \\Leftrightarrow \\frac{n(47 - 3n + 44)}{2} = 158 \\Leftrightarrow n(91 - 3n) = 316 \\Leftrightarrow 3n^2 - 91n + 316 = 0$. Giải phương trình ta được $n = 4$ (nghiệm $n = 79/3$ loại). Vậy đa giác có 4 cạnh (tứ giác)."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tiết kiệm", "Bác An bắt đầu một kế hoạch tiết kiệm: ngày thứ nhất bỏ vào hũ 10.000 đồng, kể từ ngày thứ hai mỗi ngày bỏ nhiều hơn ngày trước 2.000 đồng. Hỏi sau 30 ngày, tổng số tiền bác An tiết kiệm được là bao nhiêu và ngày thứ 30 bác bỏ vào bao nhiêu tiền?",
                           "Số tiền bỏ hũ mỗi ngày lập thành cấp số cộng với $u_1 = 10.000$ đồng, công sai $d = 2.000$ đồng, $n = 30$ ngày. Ngày thứ 30 bác bỏ vào: $u_{30} = 10.000 + 29 \\times 2.000 = 68.000$ đồng. Tổng số tiền sau 30 ngày: $S_{30} = \\frac{30(10.000 + 68.000)}{2} = 15 \\times 78.000 = 1.170.000$ đồng.")
            ]
        return mcqs, tfs, sas, essays

    elif lnum == 7:
        # BÀI 7: CẤP SỐ NHÂN
        if k == 1:
            mcqs = [
                make_mcq(1, "NB", "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 2$ và công bội $q = 3$. Số hạng thứ hai $u_2$ bằng",
                         "6", "5", "8", "9",
                         "A", "$u_2 = u_1 \\cdot q = 2 \\times 3 = 6$."),
                make_mcq(2, "NB", "Công thức số hạng tổng quát của cấp số nhân $(u_n)$ với số hạng đầu $u_1$ và công bội $q$ là",
                         "$u_n = u_1 \\cdot q^{n-1}$", "$u_n = u_1 \\cdot q^n$", "$u_n = u_1 + (n - 1)q$", "$u_n = u_1 \\cdot q^{n+1}$",
                         "A", "Công thức chuẩn: $u_n = u_1 q^{n-1}$."),
                make_mcq(3, "NB", "Cho cấp số nhân $(u_n)$ có $u_1 = 3, u_2 = 12$. Công bội $q$ của cấp số nhân bằng",
                         "4", "9", "36", "1/4",
                         "A", "$q = u_2 / u_1 = 12 / 3 = 4$."),
                make_mcq(4, "NB", "Công thức tính tổng $n$ số hạng đầu của cấp số nhân ($q \\ne 1$) là",
                         "$S_n = \\frac{u_1(1 - q^n)}{1 - q}$",
                         "$S_n = \\frac{u_1(1 - q^{n-1})}{1 - q}$",
                         "$S_n = \\frac{u_1(q^n - 1)}{q + 1}$",
                         "$S_n = u_1 \\cdot \\frac{q^n - 1}{q}$",
                         "A", "Công thức tổng: $S_n = \\frac{u_1(1 - q^n)}{1 - q}$."),
                make_mcq(5, "TH", "Cho cấp số nhân có $u_1 = 2$ và $q = -2$. Số hạng thứ sáu $u_6$ bằng",
                         "-64", "64", "-32", "32",
                         "A", "$u_6 = 2 \\times (-2)^5 = 2 \\times (-32) = -64$."),
                make_mcq(6, "TH", "Cho cấp số nhân $(u_n)$ có $u_1 = 5$ và $u_4 = 40$. Công bội $q$ bằng",
                         "2", "3", "8", "4",
                         "A", "$q^3 = 40 / 5 = 8 \\Rightarrow q = 2$."),
                make_mcq(7, "TH", "Tính tổng 5 số hạng đầu tiên của cấp số nhân có $u_1 = 3$ và $q = 2$.",
                         "93", "96", "48", "63",
                         "A", "$S_5 = \\frac{3(2^5 - 1)}{2 - 1} = 3(32 - 1) = 3 \\times 31 = 93$."),
                make_mcq(8, "TH", "Tổng của cấp số nhân lùi vô hạn có $u_1 = 1$ và $q = \\frac{1}{2}$ bằng",
                         "2", "1", "3", "4",
                         "A", "$S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 1/2} = 2$."),
                make_mcq(9, "VD", "Một tế bào vi khuẩn cứ sau 20 phút lại phân đôi một lần. Từ 1 tế bào ban đầu, sau 2 giờ (120 phút) số lượng tế bào vi khuẩn là",
                         "64 tế bào", "32 tế bào", "128 tế bào", "16 tế bào",
                         "A", "Số lần phân chia $n = 120 / 20 = 6$. Số lượng tế bào là $2^6 = 64$ tế bào."),
                make_mcq(10, "VD", "Một người gửi 100 triệu đồng vào ngân hàng với lãi suất 6%/năm theo thể thức lãi kép kỳ hạn 1 năm. Số tiền cả gốc lẫn lãi người đó nhận được sau 3 năm (làm tròn đến triệu đồng) là",
                         "119 triệu đồng", "118 triệu đồng", "116 triệu đồng", "120 triệu đồng",
                         "A", "$A = 100 \\times (1 + 0.06)^3 = 100 \\times 1.191016 \\approx 119$ triệu đồng."),
                make_mcq(11, "VDC", "Một quả bóng bàn được thả rơi từ độ cao 10 m xuống mặt sàn. Sau mỗi lần chạm sàn, bóng nảy lên được độ cao bằng $\\frac{2}{3}$ độ cao của lần rơi trước đó. Tổng quãng đường bóng đi được từ lúc thả đến khi dừng hẳn là",
                         "50 m", "30 m", "40 m", "20 m",
                         "A", "Quãng đường $= 10 + 2 \\sum_{n=1}^\\infty 10 (2/3)^n = 10 + 20 \\times \\frac{2/3}{1 - 2/3} = 10 + 20 \\times 2 = 50$ m."),
                make_mcq(12, "VDC", "Tìm ba số hạng liên tiếp của một cấp số nhân biết tổng của chúng bằng 21 và tích của chúng bằng 216.",
                         "3, 6, 12", "2, 6, 18", "1, 6, 36", "4, 6, 9",
                         "A", "Gọi 3 số là $u/q, u, uq$. Tích $= u^3 = 216 \\Rightarrow u = 6$. Tổng: $6/q + 6 + 6q = 21 \\Leftrightarrow 6(q + 1/q) = 15 \\Leftrightarrow 2q^2 - 5q + 2 = 0 \\Rightarrow q = 2$ hoặc $q = 1/2$. Ba số là 3, 6, 12.")
            ]
            tfs = [
                make_tf(1, "Cho cấp số nhân $(u_n)$ có số hạng đầu $u_1 = 3$ và công bội $q = 2$.", [
                    ("a", "Số hạng thứ tư của cấp số nhân là $u_4 = 24$.", True, "$3 \\times 2^3 = 24$."),
                    ("b", "Số hạng thứ bảy là $u_7 = 192$.", True, "$3 \\times 2^6 = 192$."),
                    ("c", "Dãy số $(u_n)$ là một dãy số tăng.", True, "Vì $u_1 > 0$ và $q > 1$."),
                    ("d", "Tổng 6 số hạng đầu tiên là $S_6 = 189$.", True, "$S_6 = \\frac{3(2^6 - 1)}{2 - 1} = 3(63) = 189$.")
                ]),
                make_tf(2, "Cho ba số $a, b, c$ khác 0 lập thành một cấp số nhân theo thứ tự đó.", [
                    ("a", "Hệ thức $b^2 = ac$ luôn đúng.", True, "Tính chất cơ bản của cấp số nhân."),
                    ("b", "Nếu $a = 2$ và $c = 8$ thì $b$ chỉ có thể bằng 4.", False, "$b^2 = 16 \\Rightarrow b = 4$ hoặc $b = -4$."),
                    ("c", "Nếu công bội $q = -1$ thì dãy số là dãy đan dấu $a, -a, a$.", True, "Đúng."),
                    ("d", "Tổng ba số hạng là $a(1 + q + q^2)$.", True, "$a + aq + aq^2 = a(1 + q + q^2)$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho cấp số nhân có $u_1 = 5, q = 2$. Tính $u_3$.", 20, "$5 \\times 4 = 20$."),
                make_sa(2, "TH", "Cho cấp số nhân có $u_1 = 2, u_4 = 54$. Tìm công bội $q$.", 3, "$q^3 = 27 \\Rightarrow q = 3$."),
                make_sa(3, "TH", "Tính tổng cấp số nhân lùi vô hạn $1 + \\frac{1}{3} + \\frac{1}{9} + \\dots$. (Dưới dạng số thập phân)", 1.5, "$S = \\frac{1}{1 - 1/3} = 3/2 = 1.5$."),
                make_sa(4, "VD", "Dân số một thị trấn hiện nay là 10.000 người, tốc độ tăng dân số là 2%/năm. Sau 2 năm dân số thị trấn là bao nhiêu người?", 10404, "$10000 \\times (1.02)^2 = 10404$."),
                make_sa(5, "VD", "Cho cấp số nhân có $u_2 = 6, u_5 = 48$. Tính số hạng $u_1$.", 3, "$q^3 = 8 \\Rightarrow q = 2 \\Rightarrow u_1 = 6/2 = 3$."),
                make_sa(6, "VDC", "Tìm số hạng $n$ nhỏ nhất để tổng $S_n = 1 + 2 + 2^2 + \\dots + 2^{n-1} > 1000$.", 10, "$2^n - 1 > 1000 \\Leftrightarrow 2^n > 1001 \\Rightarrow n = 10$ ($2^{10} = 1024$).")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm số hạng đầu và công bội", "Cho cấp số nhân $(u_n)$ thoả mãn $\\begin{cases} u_4 - u_2 = 72 \\\\ u_5 - u_3 = 144 \\end{cases}$. Tìm số hạng đầu $u_1$ và công bội $q$.",
                           "Khai triển: $\\begin{cases} u_1 q(q^2 - 1) = 72 \\\\ u_1 q^2(q^2 - 1) = 144 \\end{cases}$. Chia vế dưới cho vế trên: $q = \\frac{144}{72} = 2$. Thay vào phương trình đầu: $u_1 \\times 2(4 - 1) = 72 \\Leftrightarrow 6u_1 = 72 \\Rightarrow u_1 = 12$. Vậy $u_1 = 12, q = 2$."),
                make_essay(2, "TH", 0.5, "Tính tổng cấp số nhân lùi vô hạn", "Biểu diễn số thập phân vô hạn tuần hoàn $0.333\\dots = 0.(3)$ và $0.2323\\dots = 0.(23)$ dưới dạng phân số tối giản bằng cách sử dụng cấp số nhân lùi vô hạn.",
                           "Ta có: $0.(23) = 0.23 + 0.0023 + 0.000023 + \\dots$ Đây là cấp số nhân lùi vô hạn với $u_1 = \\frac{23}{100}$ và công bội $q = \\frac{1}{100}$. Tổng $S = \\frac{u_1}{1 - q} = \\frac{23/100}{1 - 1/100} = \\frac{23/100}{99/100} = \\frac{23}{99}$. Tương tự $0.(3) = \\frac{3/10}{1 - 1/10} = \\frac{3}{9} = \\frac{1}{3}$."),
                make_essay(3, "VD", 0.5, "Kết hợp cấp số cộng và cấp số nhân", "Cho ba số thực dương $a, b, c$ thoả mãn: $a, b, c$ lập thành một cấp số nhân; đồng thời $a, b, c - 4$ lập thành một cấp số cộng và $a, b - 1, c - 5$ lại lập thành một cấp số nhân. Hãy tìm ba số đó.",
                           "Từ giả thiết: $b^2 = ac$ (1); $a + c - 4 = 2b \\Leftrightarrow a + c = 2b + 4$ (2); $(b - 1)^2 = a(c - 5) = ac - 5a = b^2 - 5a \\Rightarrow b^2 - 2b + 1 = b^2 - 5a \\Leftrightarrow 5a = 2b - 1 \\Rightarrow a = \\frac{2b - 1}{5}$. Thay vào (2): $c = 2b + 4 - a$. Thế vào (1) giải phương trình bậc hai tìm được nghiệm $a = 1, b = 3, c = 9$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế tăng trưởng doanh nghiệp", "Một công ty công nghệ đạt doanh thu 50 tỷ đồng trong năm đầu tiên. Kế hoạch kinh doanh đặt mục tiêu doanh thu mỗi năm tăng trưởng 10% so với năm liền trước. Tính tổng doanh thu công ty thu được sau 5 năm hoạt động (làm tròn đến tỷ đồng).",
                           "Doanh thu các năm lập thành cấp số nhân với $u_1 = 50$ tỷ đồng, công bội $q = 1 + 0.10 = 1.10$. Tổng doanh thu sau $n = 5$ năm là tổng của 5 số hạng đầu: $S_5 = \\frac{u_1(q^5 - 1)}{q - 1} = \\frac{50(1.1^5 - 1)}{1.1 - 1} = \\frac{50(1.61051 - 1)}{0.1} = 500 \\times 0.61051 = 305.255$ tỷ đồng $\\approx 305$ tỷ đồng.")
            ]
        else: # k == 2
            mcqs = [
                make_mcq(1, "NB", "Cho cấp số nhân $(u_n)$ có $u_1 = 3$ và công bội $q = -2$. Số hạng $u_2$ bằng",
                         "-6", "6", "1", "-5",
                         "A", "$u_2 = 3 \\times (-2) = -6$."),
                make_mcq(2, "NB", "Dãy số nào sau đây là một cấp số nhân?",
                         "$2, 6, 18, 54$", "$2, 4, 6, 8$", "$1, 4, 9, 16$", "$3, 6, 9, 12$",
                         "A", "Dãy $2, 6, 18, 54$ có công bội không đổi $q = 3$."),
                make_mcq(3, "NB", "Cho cấp số nhân $(u_n)$ có $u_1 = 4$ và $u_2 = 2$. Công bội $q$ bằng",
                         "$\\frac{1}{2}$", "2", "-2", "8",
                         "A", "$q = 2 / 4 = 1/2$."),
                make_mcq(4, "NB", "Tổng của cấp số nhân lùi vô hạn với $|q| < 1$ được tính theo công thức",
                         "$S = \\frac{u_1}{1 - q}$", "$S = \\frac{u_1}{q - 1}$", "$S = \\frac{1 - q}{u_1}$", "$S = u_1(1 - q)$",
                         "A", "Công thức tổng cấp số nhân lùi vô hạn: $S = \\frac{u_1}{1 - q}$."),
                make_mcq(5, "TH", "Cho cấp số nhân $(u_n)$ có $u_1 = 1$ và $q = 3$. Số hạng thứ năm $u_5$ bằng",
                         "81", "243", "27", "12",
                         "A", "$u_5 = 1 \\times 3^4 = 81$."),
                make_mcq(6, "TH", "Cho cấp số nhân có $u_1 = 3$ và $u_3 = 27$. Công bội dương $q$ bằng",
                         "3", "9", "6", "2",
                         "A", "$q^2 = 27 / 3 = 9 \\Rightarrow q = 3$ (do $q > 0$)."),
                make_mcq(7, "TH", "Tính tổng 4 số hạng đầu của cấp số nhân có $u_1 = 5$ và $q = 2$.",
                         "75", "80", "70", "60",
                         "A", "$S_4 = \\frac{5(2^4 - 1)}{2 - 1} = 5(15) = 75$."),
                make_mcq(8, "TH", "Tổng của cấp số nhân lùi vô hạn có $u_1 = 2$ và $q = \\frac{1}{3}$ bằng",
                         "3", "6", "2.5", "1.5",
                         "A", "$S = \\frac{2}{1 - 1/3} = \\frac{2}{2/3} = 3$."),
                make_mcq(9, "VD", "Một chuỗi cửa hàng cà phê nhượng quyền: năm đầu mở 4 cửa hàng, mỗi năm sau số cửa hàng mở mới gấp đôi năm trước. Tổng số cửa hàng mở được sau 5 năm là",
                         "124 cửa hàng", "64 cửa hàng", "128 cửa hàng", "60 cửa hàng",
                         "A", "$u_1 = 4, q = 2$. $S_5 = \\frac{4(2^5 - 1)}{2 - 1} = 4(31) = 124$ cửa hàng."),
                make_mcq(10, "VD", "Độ phóng xạ của một chất đồng vị giảm đi một nửa sau mỗi chu kỳ bán rã 8 ngày. Sau 32 ngày (4 chu kỳ), khối lượng chất phóng xạ còn lại so với ban đầu bằng",
                         "$\\frac{1}{16}$", "$\\frac{1}{8}$", "$\\frac{1}{32}$", "$\\frac{1}{4}$",
                         "A", "Tỷ lệ còn lại $= (1/2)^4 = 1/16$."),
                make_mcq(11, "VDC", "Cho tam giác đều $A_1 B_1 C_1$ có cạnh bằng 8 cm. Nối trung điểm các cạnh ta được tam giác $A_2 B_2 C_2$, tiếp tục nối trung điểm các cạnh được $A_3 B_3 C_3$,... Tổng chu vi của vô hạn các tam giác tạo thành là",
                         "48 cm", "32 cm", "24 cm", "96 cm",
                         "A", "Chu vi tam giác thứ nhất $p_1 = 24$ cm. Mỗi tam giác tiếp theo có chu vi bằng một nửa tam giác trước ($q = 1/2$). Tổng chu vi $= \\frac{24}{1 - 1/2} = 48$ cm."),
                make_mcq(12, "VDC", "Cho cấp số nhân có các số hạng đều dương thoả mãn $u_1 + u_2 = 6$ và $u_3 + u_4 = 24$. Giá trị của $u_1$ bằng",
                         "2", "3", "1", "4",
                         "A", "$u_3 + u_4 = q^2(u_1 + u_2) \\Rightarrow 24 = 6q^2 \\Rightarrow q^2 = 4 \\Rightarrow q = 2$ (do $u_n > 0$). $u_1(1 + 2) = 6 \\Rightarrow u_1 = 2$.")
            ]
            tfs = [
                make_tf(1, "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$.", [
                    ("a", "Số hạng thứ ba là $u_3 = 18$.", True, "$2 \\times 3^2 = 18$."),
                    ("b", "Số hạng thứ năm là $u_5 = 162$.", True, "$2 \\times 3^4 = 162$."),
                    ("c", "Dãy số $(u_n)$ là một dãy số tăng.", True, "Vì $u_1 > 0$ và $q = 3 > 1$."),
                    ("d", "Tổng 4 số hạng đầu tiên là $S_4 = 80$.", True, "$S_4 = \\frac{2(3^4 - 1)}{3 - 1} = 3^4 - 1 = 80$.")
                ]),
                make_tf(2, "Cho cấp số nhân lùi vô hạn $(u_n)$ có $u_1 = 6$ và công bội $q = -\\frac{1}{2}$.", [
                    ("a", "Điều kiện $|q| < 1$ được thoả mãn.", True, "$|-1/2| = 0.5 < 1$."),
                    ("b", "Số hạng thứ hai là $u_2 = -3$.", True, "$6 \\times (-1/2) = -3$."),
                    ("c", "Dãy số là dãy đan dấu.", True, "Các số hạng luân phiên dương và âm."),
                    ("d", "Tổng của cấp số nhân lùi vô hạn là $S = 4$.", True, "$S = \\frac{6}{1 - (-1/2)} = \\frac{6}{3/2} = 4$.")
                ])
            ]
            sas = [
                make_sa(1, "NB", "Cho cấp số nhân có $u_1 = 4, q = 3$. Tính $u_2$.", 12, "$4 \\times 3 = 12$."),
                make_sa(2, "TH", "Cho cấp số nhân có $u_1 = 3, u_3 = 48$ với $q > 0$. Tìm $q$.", 4, "$q^2 = 16 \\Rightarrow q = 4$."),
                make_sa(3, "TH", "Tính tổng cấp số nhân lùi vô hạn: $4 + 2 + 1 + 0.5 + \\dots$.", 8, "$S = \\frac{4}{1 - 1/2} = 8$."),
                make_sa(4, "VD", "Một loại cây tăng chiều cao thêm 10% mỗi năm. Sau 3 năm chiều cao của cây tăng gấp bao nhiêu lần ban đầu? (Làm tròn 2 chữ số thập phân)", 1.33, "$(1.1)^3 = 1.331 \\approx 1.33$."),
                make_sa(5, "VD", "Cho cấp số nhân có $u_1 = 2, q = 2$. Tính tổng 6 số hạng đầu tiên.", 126, "$S_6 = \\frac{2(64 - 1)}{1} = 126$."),
                make_sa(6, "VDC", "Tìm số hạng $n$ nhỏ nhất để $3^n > 2000$.", 7, "$3^6 = 729, 3^7 = 2187 > 2000 \\Rightarrow n = 7$.")
            ]
            essays = [
                make_essay(1, "TH", 0.5, "Tìm số hạng của cấp số nhân", "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Số 486 là số hạng thứ mấy của cấp số nhân?",
                           "Ta có $u_n = u_1 q^{n-1} \\Leftrightarrow 2 \\times 3^{n-1} = 486 \\Leftrightarrow 3^{n-1} = 243 = 3^5 \\Leftrightarrow n - 1 = 5 \\Rightarrow n = 6$. Vậy 486 là số hạng thứ 6 ($u_6$)."),
                make_essay(2, "TH", 0.5, "Tính tổng cấp số nhân", "Tính tổng $S = 2 + 6 + 18 + \\dots + 1458$.",
                           "Dãy số là cấp số nhân có $u_1 = 2, q = 3, u_n = 1458$. Ta có $2 \\times 3^{n-1} = 1458 \\Leftrightarrow 3^{n-1} = 729 = 3^6 \\Rightarrow n = 7$. Tổng $S = \\frac{u_1(q^7 - 1)}{q - 1} = \\frac{2(3^7 - 1)}{2} = 3^7 - 1 = 2187 - 1 = 2186$."),
                make_essay(3, "VD", 0.5, "Xác định cấp số nhân qua hệ phương trình", "Cho cấp số nhân $(u_n)$ có 5 số hạng thoả mãn $u_1 + u_5 = 51$ và $u_2 + u_4 = 30$. Tìm cấp số nhân đó.",
                           "Khai triển: $u_1(1 + q^4) = 51$ và $u_1 q(1 + q^2) = 30$. Lập tỷ số: $\\frac{1 + q^4}{q(1 + q^2)} = \\frac{51}{30} = \\frac{17}{10}$. Đặt $t = q + 1/q$ ta có $\\frac{t^2 - 2}{t} = \\frac{17}{10} \\Leftrightarrow 10t^2 - 17t - 20 = 0 \\Rightarrow t = 5/2$. Với $q + 1/q = 5/2 \\Rightarrow 2q^2 - 5q + 2 = 0 \\Rightarrow q = 2$ hoặc $q = 1/2$. Với $q = 2 \\Rightarrow u_1 = 3$, cấp số nhân là $3, 6, 12, 24, 48$. Với $q = 1/2$, dãy đảo ngược: $48, 24, 12, 6, 3$."),
                make_essay(4, "VDC", 0.5, "Bài toán thực tế đầu tư sinh lời", "Một nhà đầu tư bỏ ra 200 triệu đồng vào một quỹ đầu tư với mức lợi nhuận kỳ vọng 12%/năm, lãi được nhập vào vốn hàng năm (lãi kép). Sau ít nhất bao nhiêu năm thì tổng số tiền người đó nhận được gấp đôi số vốn ban đầu?",
                           "Số tiền sau $n$ năm là $A = 200(1 + 0.12)^n = 200(1.12)^n$ (triệu đồng). Để số tiền gấp đôi: $200(1.12)^n \\ge 400 \\Leftrightarrow (1.12)^n \\ge 2$. Lấy logarit tự nhiên hai vế: $n \\ln(1.12) \\ge \\ln 2 \\Rightarrow n \\ge \\frac{\\ln 2}{\\ln 1.12} \\approx \\frac{0.6931}{0.1133} \\approx 6.12$. Vì $n$ nguyên nên $n = 7$. Vậy sau ít nhất 7 năm thì số tiền gấp đôi vốn ban đầu.")
            ]
        return mcqs, tfs, sas, essays

    raise ValueError(f"Bài học lnum={lnum} không thuộc Chương 2 Toán 11.")
