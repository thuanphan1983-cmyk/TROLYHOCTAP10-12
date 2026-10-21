/**
 * BỘ MÁY GIÁO ÁN CHI TIẾT CHUẨN TỪNG BÀI HỌC - TOÁN 10, 11, 12
 * SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG - BỘ GIÁO DỤC VÀ ĐÀO TẠO
 * 
 * Đảm bảo 100% các tiêu chuẩn sư phạm khắt khe:
 * 1. Nội dung kiến thức CHUẨN XÁC theo thứ tự từng bài của SGK Kết nối tri thức.
 * 2. Mỗi mục lý thuyết gồm đúng 3 câu hỏi trắc nghiệm bám sát nội dung mục đó.
 * 3. Chấm 4 mức sư phạm (Lần 1: 100% -> Lần 2: 75% + Gợi ý 1 -> Lần 3: 50% + Gợi ý 2 -> Lần 4: 0% + Lời giải chi tiết).
 * 4. Kết thúc tất cả các mục lý thuyết là 6 câu Đúng / Sai (mỗi câu 4 ý a, b, c, d) liên quan trực tiếp đến bài vừa học.
 * 5. Trợ lý AI giải đáp tương tác đúng nội dung học sinh cần hỏi theo bài và mục đang học.
 */

(function () {
  "use strict";

  // Helper tạo HTML khối lý thuyết chuẩn 4 phần
  function createStandardTheoryHTML(lessonTitle, grade, partNum, sectionTitle, sgkHtml, noteHtml, mistakeHtml, tipHtml) {
    return `<div class="space-y-4 sm:space-y-5 font-serif theory-expanded-card">
  <div class="p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950">
    <p class="leading-relaxed text-[13.5pt] sm:text-[14pt]">
      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em tìm hiểu <strong>${lessonTitle}</strong> (${grade} - SGK Kết nối tri thức). Cùng học và nắm chắc <strong>Mục ${partNum}: ${sectionTitle}</strong> nhé! 😊
    </p>
  </div>

  <!-- 1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA -->
  <div class="p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200">
      <i class="fa-solid fa-book-open-reader text-indigo-600 text-xl"></i>
      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>
    </div>
    <div class="space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose">
      ${sgkHtml}
    </div>
  </div>

  <!-- 2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY -->
  <div class="p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200">
      <i class="fa-solid fa-circle-exclamation text-sky-600 text-xl"></i>
      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>
    </div>
    <ul class="text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">
      ${noteHtml}
    </ul>
  </div>

  <!-- 3. CÁC SAI LẦM THƯỜNG GẶP -->
  <div class="p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200">
      <i class="fa-solid fa-triangle-exclamation text-rose-600 text-xl"></i>
      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>
    </div>
    <ul class="text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">
      ${mistakeHtml}
    </ul>
  </div>

  <!-- 4. CÁCH GHI NHỚ KIẾN THỨC -->
  <div class="p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200">
      <i class="fa-solid fa-lightbulb text-amber-600 text-xl"></i>
      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>
    </div>
    <ul class="text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">
      ${tipHtml}
    </ul>
  </div>
</div>`;
  }

  // TỔNG HỢP CÁC BÀI HỌC CHUẨN XÁC TỪNG BÀI SGK TOÁN 10 - 11 - 12
  const DEDICATED_LESSONS_DB = {
    // =========================================================================
    // TOÁN 12 - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
    // =========================================================================

    // BÀI 1: TÍNH ĐƠN ĐIỆU VÀ CỰC TRỊ CỦA HÀM SỐ
    "toan12_bai1": {
      id: "toan12_bai1",
      lessonTitle: "Bài 1: Tính đơn điệu và cực trị của hàm số",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 1:") || (t.includes("đơn điệu") && t.includes("cực trị"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Tính đơn điệu của hàm số",
          theory: createStandardTheoryHTML(
            "Bài 1: Tính đơn điệu và cực trị của hàm số", "Lớp 12", 1,
            "Tính đơn điệu của hàm số",
            `<p>Cho hàm số $y = f(x)$ xác định trên khoảng, đoạn hoặc nửa khoảng $K$:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hàm số đồng biến (tăng)</strong> trên $K \\Leftrightarrow \\forall x_1, x_2 \\in K: x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$ (Đồ thị đi lên từ trái sang phải).</li>
              <li><strong>Hàm số nghịch biến (giảm)</strong> trên $K \\Leftrightarrow \\forall x_1, x_2 \\in K: x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$ (Đồ thị đi xuống từ trái sang phải).</li>
              <li><strong>Định lý dấu đạo hàm:</strong> Giả sử $f(x)$ có đạo hàm trên khoảng $K$:
                <br/>• Nếu $f'(x) > 0, \\forall x \\in K$ thì hàm số đồng biến trên $K$.
                <br/>• Nếu $f'(x) < 0, \\forall x \\in K$ thì hàm số nghịch biến trên $K$.
              </li>
              <li><strong>Định lý mở rộng:</strong> Nếu $f'(x) \\ge 0$ (hoặc $f'(x) \\le 0$) với mọi $x \\in K$ và $f'(x) = 0$ chỉ tại một số <strong>hữu hạn điểm</strong> thì hàm số đồng biến (hoặc nghịch biến) trên $K$.</li>
            </ul>`,
            `<li>Nếu hàm số liên tục trên đoạn $[a; b]$ và có $f'(x) > 0$ với mọi $x \\in (a; b)$ thì hàm số đồng biến trên toàn bộ đoạn $[a; b]$.</li>
            <li>Khi kết luận các khoảng đơn điệu, phải dùng từ \"và\" hoặc dấu chấm phẩy \";\". TUYỆT ĐỐI không dùng ký hiệu hợp $\\cup$ hay hiệu $\\setminus$.</li>
            <li>Với hàm phân thức bậc nhất $y = \\frac{ax+b}{cx+d}$, đạo hàm $y' = \\frac{ad-bc}{(cx+d)^2} \\neq 0$, không có dấu bằng, hàm số đồng biến hoặc nghịch biến trên từng khoảng xác định.</li>`,
            `<li>Dùng ký hiệu hợp $\\cup$ hay hiệu $\\setminus$ để kết luận khoảng đơn điệu (sai hoàn toàn).</li>
            <li>Ngộ nhận hàm đồng biến thì bắt buộc $f'(x) > 0$ mọi nơi, quên rằng $f'(x)$ có thể triệt tiêu tại hữu hạn điểm.</li>`,
            `<li><em>"Đạo hàm dương đồ thị đi lên – Đạo hàm âm đồ thị đi xuống – Kết luận khoảng chỉ dùng chữ VÀ!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hàm số $y = x^3 - 3x^2 + 2$. Hàm số đã cho đồng biến trên khoảng nào dưới đây?",
              options: ["A. $(0; 2)$", "B. $(2; +\\infty)$", "C. $(-\\infty; 2)$", "D. $(0; +\\infty)$"],
              correct: "B",
              explanation: "Ta có $y' = 3x^2 - 6x = 3x(x - 2)$. Giải $y' > 0 \\Leftrightarrow x < 0$ hoặc $x > 2$. Do đó hàm số đồng biến trên $(-\\infty; 0)$ và $(2; +\\infty)$.",
              hint1: "Tính đạo hàm $y'$ và tìm các nghiệm của phương trình $y' = 0$.",
              hint2: "$y' = 3x(x - 2) > 0$ khi $x \\in (-\\infty; 0) \\cup (2; +\\infty)$."
            },
            {
              question: "Hàm số phân thức $y = \\frac{2x - 1}{x + 1}$ đồng biến trên khoảng nào sau đây?",
              options: ["A. $\\mathbb{R}$", "B. $(-\\infty; -1)$ và $(-1; +\\infty)$", "C. $(-\\infty; -1) \\cup (-1; +\\infty)$", "D. $\\mathbb{R} \\setminus \\{-1\\}$"],
              correct: "B",
              explanation: "TXĐ $D = \\mathbb{R} \\setminus \\{-1\\}$. Đạo hàm $y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\neq -1$. Kết luận đúng chuẩn SGK: hàm số đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$.",
              hint1: "Áp dụng công thức tính nhanh đạo hàm hàm phân thức bậc nhất: $y' = \\frac{ad - bc}{(cx+d)^2}$.",
              hint2: "Quy chuẩn SGK: kết luận trên từng khoảng riêng rẽ, không dùng dấu $\\cup$ hay $\\setminus$."
            },
            {
              question: "Cho hàm số $y = f(x)$ có bảng biến thiên: $f'(x) < 0$ trên $(-1; 3)$ và $f'(x) > 0$ trên $(-\\infty; -1)$ cùng $(3; +\\infty)$. Khẳng định nào sau đây ĐÚNG?",
              options: ["A. Hàm số nghịch biến trên khoảng $(-1; 3)$", "B. Hàm số đồng biến trên khoảng $(-1; 3)$", "C. Hàm số nghịch biến trên khoảng $(3; +\\infty)$", "D. Hàm số đồng biến trên $\\mathbb{R}$"],
              correct: "A",
              explanation: "Vì trên khoảng $(-1; 3)$ ta có $f'(x) < 0$ nên hàm số nghịch biến trên khoảng $(-1; 3)$.",
              hint1: "Nhìn vào dấu của $f'(x)$ trên khoảng $(-1; 3)$.",
              hint2: "Đạo hàm mang dấu âm (-) thì hàm số nghịch biến."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Cực trị của hàm số",
          theory: createStandardTheoryHTML(
            "Bài 1: Tính đơn điệu và cực trị của hàm số", "Lớp 12", 2,
            "Cực trị của hàm số",
            `<p>Khái niệm cực đại, cực tiểu và các điều kiện cực trị chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Khái niệm:</strong>
                <br/>• $x_0$ gọi là <em>điểm cực đại</em> nếu tồn tại khoảng $(a; b)$ chứa $x_0$ sao cho $f(x) < f(x_0), \\forall x \\in (a; b) \\setminus \\{x_0\\}$. Giá trị $f(x_0)$ là <em>giá trị cực đại</em> ($y_{\\text{CĐ}}$).
                <br/>• $x_0$ gọi là <em>điểm cực tiểu</em> nếu tồn tại khoảng $(a; b)$ chứa $x_0$ sao cho $f(x) > f(x_0), \\forall x \\in (a; b) \\setminus \\{x_0\\}$. Giá trị $f(x_0)$ là <em>giá trị cực tiểu</em> ($y_{\\text{CT}}$).
                <br/>• Điểm $M(x_0; f(x_0))$ trên mặt phẳng tọa độ gọi là <em>điểm cực trị của đồ thị hàm số</em>.
              </li>
              <li><strong>Định lí Fermat (Điều kiện cần):</strong> Nếu $y = f(x)$ đạt cực trị tại $x_0$ và có đạo hàm tại đó thì $f'(x_0) = 0$.</li>
              <li><strong>Dấu hiệu 1 (Điều kiện đủ):</strong> Giả sử hàm số liên tục trên khoảng chứa $x_0$ và có đạo hàm trên khoảng đó (có thể trừ $x_0$):
                <br/>• Nếu $f'(x)$ đổi dấu từ <strong>dương $(+)$ sang âm $(-)$</strong> khi qua $x_0$ thì $x_0$ là điểm cực đại.
                <br/>• Nếu $f'(x)$ đổi dấu từ <strong>âm $(-)$ sang dương $(+)$</strong> khi qua $x_0$ thì $x_0$ là điểm cực tiểu.
              </li>
              <li><strong>Dấu hiệu 2 (Đạo hàm cấp hai):</strong> Giả sử $f'(x_0) = 0$ và $f''(x_0)$ tồn tại:
                <br/>• $f''(x_0) < 0 \\implies x_0$ là điểm cực đại.
                <br/>• $f''(x_0) > 0 \\implies x_0$ là điểm cực tiểu.
              </li>
            </ul>`,
            `<li>Phân biệt: \"Điểm cực trị của hàm số\" ($x$), \"Cực trị của hàm số\" ($y$), \"Điểm cực trị của đồ thị\" ($M(x; y)$).</li>
            <li>Hàm số vẫn có thể đạt cực trị tại điểm $x_0$ mà tại đó đạo hàm $f'(x_0)$ không xác định, miễn là hàm số liên tục tại $x_0$ và đạo hàm đổi dấu khi qua $x_0$.</li>
            <li>Nghiệm bội chẵn của $f'(x) = 0$ không làm đạo hàm đổi dấu nên không sinh ra cực trị.</li>`,
            `<li>Nhầm lẫn giữa hoành độ $x$ và tung độ $y$ khi trả lời câu hỏi cực trị.</li>
            <li>Ngộ nhận giá trị cực đại luôn lớn hơn giá trị cực tiểu (cực trị chỉ mang tính cục bộ lân cận).</li>`,
            `<li><em>\"Hàm số hỏi x – Cực trị hỏi y – Đồ thị hỏi cả cặp – Dương sang âm Cực Đại, âm sang dương Cực Tiểu!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hàm số $y = x^3 - 3x^2 + 2$. Điểm cực tiểu của hàm số đã cho là:",
              options: ["A. $x = 0$", "B. $x = 2$", "C. $x = -2$", "D. $x = 1$"],
              correct: "B",
              explanation: "Ta có $y' = 3x^2 - 6x = 3x(x - 2)$. Bảng xét dấu: qua $x = 0$ đổi dấu từ $(+)$ sang $(-)$ (cực đại); qua $x = 2$ đổi dấu từ $(-)$ sang $(+)$ (cực tiểu). Do đó điểm cực tiểu của hàm số là $x = 2$.",
              hint1: "Giải phương trình $y' = 0$ và xét dấu đạo hàm qua các nghiệm.",
              hint2: "Điểm cực tiểu là điểm làm đạo hàm đổi dấu từ âm sang dương: $x = 2$."
            },
            {
              question: "Giá trị cực đại của hàm số $y = -x^3 + 3x - 1$ bằng:",
              options: ["A. 1", "B. -3", "C. -1", "D. 2"],
              correct: "A",
              explanation: "Ta có $y' = -3x^2 + 3 = 0 \\Leftrightarrow x = \\pm 1$. Vì hệ số $a = -1 < 0$ nên $x = 1$ là điểm cực đại. Giá trị cực đại là $y(1) = -(1)^3 + 3(1) - 1 = 1$.",
              hint1: "Đề bài hỏi \"giá trị cực đại\" tức là hỏi $y_{\\text{CĐ}}$.",
              hint2: "Tính $y'(x) = -3x^2 + 3 = 0 \\Rightarrow x = 1$ là điểm cực đại. Thay vào tính $y(1)$."
            },
            {
              question: "Số điểm cực trị của hàm số $y = \\frac{2x - 1}{x + 1}$ là:",
              options: ["A. 0", "B. 1", "C. 2", "D. Vô số"],
              correct: "A",
              explanation: "Hàm phân thức bậc nhất trên bậc nhất có đạo hàm $y' = \\frac{3}{(x+1)^2} > 0, \\forall x \\neq -1$. Đạo hàm không đổi dấu nên hàm số không có bất kỳ điểm cực trị nào.",
              hint1: "Kiểm tra xem đạo hàm $y'$ của hàm phân thức bậc nhất có nghiệm hay không.",
              hint2: "$y' = \\frac{3}{(x+1)^2} > 0$ luôn dương, không đổi dấu nên số cực trị là 0."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số trùng phương $f(x) = x^4 - 2x^2 + 3$.",
          items: [
            { key: "a", text: "Đạo hàm của hàm số là $f'(x) = 4x^3 - 4x$.", correct: "true", explain: "$f'(x) = 4x^3 - 4x$." },
            { key: "b", text: "Phương trình $f'(x) = 0$ có đúng 3 nghiệm phân biệt $x = -1, x = 0, x = 1$.", correct: "true", explain: "$4x(x^2 - 1) = 0 \\Leftrightarrow x = 0, x = \\pm 1$." },
            { key: "c", text: "Hàm số đạt cực đại tại điểm $x = 0$.", correct: "true", explain: "Qua $x = 0$, $f'(x)$ đổi dấu từ $(+)$ sang $(-)$ nên đạt cực đại tại $x = 0$." },
            { key: "d", text: "Giá trị cực tiểu của hàm số bằng 3.", correct: "false", explain: "Giá trị cực tiểu tại $x = \\pm 1$ là $f(\\pm 1) = 1 - 2 + 3 = 2 \\neq 3$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số phân thức $y = \\frac{2x - 1}{x + 1}$.",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", correct: "true", explain: "Mẫu thức khác 0: $x \\neq -1$." },
            { key: "b", text: "Đạo hàm của hàm số là $y' = \\frac{3}{(x + 1)^2}$.", correct: "true", explain: "$y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$." },
            { key: "c", text: "Hàm số đồng biến trên toàn bộ $\\mathbb{R}$.", correct: "false", explain: "Chỉ đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$, không đồng biến trên $\\mathbb{R}$." },
            { key: "d", text: "Đồ thị hàm số không có bất kỳ điểm cực trị nào.", correct: "true", explain: "Đạo hàm không đổi dấu nên không có cực trị." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số bậc ba $y = -x^3 + 3x - 1$.",
          items: [
            { key: "a", text: "Hàm số nghịch biến trên khoảng $(-1; 1)$.", correct: "false", explain: "Trên $(-1; 1)$, $y' = -3x^2 + 3 > 0$ nên hàm số đồng biến." },
            { key: "b", text: "Điểm cực đại của đồ thị hàm số có tọa độ là $(1; 1)$.", correct: "true", explain: "Tại $x = 1$, $y = 1$, tọa độ điểm cực đại $(1; 1)$." },
            { key: "c", text: "Giá trị cực tiểu của hàm số bằng $-3$.", correct: "true", explain: "Tại $x = -1$, giá trị cực tiểu là $y(-1) = -3$." },
            { key: "d", text: "Hàm số đồng biến trên $(-\\infty; -1)$ và $(1; +\\infty)$.", correct: "false", explain: "Trên hai khoảng này $y' < 0$ nên hàm số nghịch biến." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét tính đúng sai của các định lý về tính đơn điệu và cực trị.",
          items: [
            { key: "a", text: "Nếu $f'(x) \\ge 0, \\forall x \\in (a; b)$ và $f'(x) = 0$ tại hữu hạn điểm thì hàm số đồng biến trên $(a; b)$.", correct: "true", explain: "Định lý mở rộng chuẩn SGK GDPT 2018." },
            { key: "b", text: "Điểm $x_0$ thỏa mãn $f'(x_0) = 0$ chắc chắn là điểm cực trị của hàm số.", correct: "false", explain: "Nếu $f'(x)$ không đổi dấu qua $x_0$ thì không phải cực trị (ví dụ $y = x^3$ tại $x=0$)." },
            { key: "c", text: "Nếu $f'(x_0) = 0$ và $f''(x_0) < 0$ thì $x_0$ là điểm cực đại của hàm số.", correct: "true", explain: "Dấu hiệu 2 về cực trị chuẩn SGK." },
            { key: "d", text: "Giá trị cực đại của hàm số luôn lớn hơn mọi giá trị cực tiểu của nó.", correct: "false", explain: "Cực đại chỉ mang tính địa phương (cục bộ)." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hàm số $y = x^3 - 3x^2 + 4$.",
          items: [
            { key: "a", text: "Điểm cực đại của hàm số là $x = 0$.", correct: "true", explain: "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ (cực đại) hoặc $x = 2$ (cực tiểu)." },
            { key: "b", text: "Giá trị cực đại của hàm số bằng $4$.", correct: "true", explain: "$y(0) = 4$." },
            { key: "c", text: "Giá trị cực tiểu của hàm số bằng $0$.", correct: "true", explain: "$y(2) = 8 - 12 + 4 = 0$." },
            { key: "d", text: "Đồ thị hàm số có hai điểm cực trị nằm về cùng một phía đối với trục hoành.", correct: "false", explain: "Hai điểm cực trị là $(0; 4)$ và $(2; 0)$, trong đó $(2; 0)$ nằm trên trục hoành." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Tìm tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 4)x + 1$ có 2 điểm cực trị $x_1, x_2$.",
          items: [
            { key: "a", text: "Đạo hàm $y' = x^2 - 2mx + m^2 - 4$.", correct: "true", explain: "$y' = x^2 - 2mx + m^2 - 4$." },
            { key: "b", text: "Biệt thức thu gọn $\\Delta' = 4 > 0$ với mọi số thực $m$.", correct: "true", explain: "$\\Delta' = m^2 - (m^2 - 4) = 4 > 0$." },
            { key: "c", text: "Hàm số luôn có 2 điểm cực trị với mọi giá trị thực của tham số $m$.", correct: "true", explain: "Vì $\\Delta' = 4 > 0$ với mọi $m$ nên phương trình luôn có 2 nghiệm phân biệt." },
            { key: "d", text: "Khoảng cách giữa hai nghiệm của $y' = 0$ là $|x_1 - x_2| = 2$.", correct: "false", explain: "$|x_1 - x_2| = \\frac{2\\sqrt{\\Delta'}}{a} = \\frac{2\\sqrt{4}}{1} = 4 \\neq 2$." }
          ]
        }
      ]
    },

    // BÀI 2: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ
    "toan12_bai2": {
      id: "toan12_bai2",
      lessonTitle: "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 2:") || t.includes("giá trị lớn nhất") || t.includes("lớn nhất và giá trị nhỏ nhất") || t.includes("gtln");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm GTLN, GTNN và quy tắc tìm trên một đoạn",
          theory: createStandardTheoryHTML(
            "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", "Lớp 12", 1,
            "Khái niệm GTLN, GTNN và quy tắc tìm trên một đoạn",
            `<p>Cho hàm số $y = f(x)$ xác định trên tập hợp $D$:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li>Số $M$ gọi là <strong>giá trị lớn nhất (GTLN)</strong> của $f(x)$ trên $D$ nếu $f(x) \\le M, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$. Ký hiệu: $M = \\max_{D} f(x)$.</li>
              <li>Số $m$ gọi là <strong>giá trị nhỏ nhất (GTNN)</strong> của $f(x)$ trên $D$ nếu $f(x) \\ge m, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = m$. Ký hiệu: $m = \\min_{D} f(x)$.</li>
              <li><strong>Định lý Weierstrass:</strong> Mọi hàm số liên tục trên đoạn $[a; b]$ đều có GTLN và GTNN trên đoạn đó.</li>
              <li><strong>Quy tắc tìm GTLN, GTNN trên đoạn $[a; b]$:</strong>
                <br/>1. Tính $f'(x)$, tìm các nghiệm $x_1, x_2, ... \\in (a; b)$ của phương trình $f'(x) = 0$ hoặc tại đó $f'(x)$ không xác định.
                <br/>2. Tính các giá trị $f(a), f(b), f(x_1), f(x_2), ...$
                <br/>3. Số lớn nhất trong các giá trị đó là $\\max$, số nhỏ nhất là $\\min$ (Không cần lập bảng biến thiên).
              </li>
            </ul>`,
            `<li>Bắt buộc phải chỉ ra điểm đạt dấu bằng $x_0 \\in D$ để $f(x_0) = M$.</li>
            <li>Chỉ lấy các nghiệm $x_i$ nằm trong khoảng mở $(a; b)$, loại các nghiệm ngoài đoạn $[a; b]$.</li>`,
            `<li>Nhầm hoành độ $x$ với giá trị $y$ khi trả lời kết quả.</li>
            <li>Quên tính giá trị tại hai đầu mút $a$ và $b$.</li>`,
            `<li><em>\"Tính nghiệm trong khoảng – Tính cả hai đầu mút – So sánh chọn max min!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 2$ trên đoạn $[0; 2]$ bằng:",
              options: ["A. 2", "B. 4", "C. 0", "D. 6"],
              correct: "B",
              explanation: "Ta có $f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in (0; 2)$ (loại $x = -1$). Tính $f(0) = 2, f(1) = 0, f(2) = 4$. Vậy $\\max_{[0; 2]} f(x) = 4$ tại $x = 2$.",
              hint1: "Tính đạo hàm $f'(x) = 3x^2 - 3$, tìm nghiệm nằm trong $(0; 2)$.",
              hint2: "So sánh $f(0), f(1), f(2)$: giá trị lớn nhất là $f(2) = 4$."
            },
            {
              question: "Giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ là:",
              options: ["A. 4", "B. 2", "C. 0", "D. 8"],
              correct: "A",
              explanation: "Áp dụng bất đẳng thức Cô-si cho hai số dương $x$ và $\\frac{4}{x}$: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$. Dấu '=' xảy ra khi $x = \\frac{4}{x} \\Leftrightarrow x = 2$. Vậy $\\min = 4$.",
              hint1: "Áp dụng bất đẳng thức Cauchy (Cô-si) hoặc dùng đạo hàm $y' = 1 - 4/x^2 = 0$.",
              hint2: "$x = 2$ cho $y(2) = 2 + 2 = 4$."
            },
            {
              question: "Khẳng định nào sau đây là ĐÚNG về GTLN và GTNN của hàm số?",
              options: [
                "A. GTLN của hàm số luôn bằng giá trị cực đại của hàm số",
                "B. Mọi hàm số liên tục trên một đoạn đều đạt GTLN và GTNN trên đoạn đó",
                "C. Mọi hàm số xác định trên khoảng đều có GTLN",
                "D. GTNN luôn luôn phải là một số không âm"
              ],
              correct: "B",
              explanation: "Theo Định lý Weierstrass trong SGK KNTT: Hàm số liên tục trên một đoạn $[a; b]$ thì luôn đạt GTLN và GTNN trên đoạn đó.",
              hint1: "Đối chiếu với Định lý Weierstrass trong SGK KNTT Toán 12.",
              hint2: "Hàm số liên tục trên một đoạn kín $[a; b]$ luôn đạt được cả GTLN và GTNN."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tìm GTLN, GTNN trên khoảng và bài toán thực tế tối ưu",
          theory: createStandardTheoryHTML(
            "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số", "Lớp 12", 2,
            "Tìm GTLN, GTNN trên khoảng và bài toán thực tế tối ưu",
            `<p>Phương pháp tìm GTLN, GTNN trên một khoảng hoặc nửa khoảng:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Bước 1:</strong> Tính $f'(x)$, giải phương trình $f'(x) = 0$ trên khoảng $K$.</li>
              <li><strong>Bước 2:</strong> Lập <strong>Bảng biến thiên</strong> của hàm số trên $K$, tính giới hạn tại các đầu mút vô cực hoặc điểm gián đoạn.</li>
              <li><strong>Bước 3:</strong> Căn cứ vào bảng biến thiên để kết luận GTLN, GTNN (nếu hàm số tiến tới $\\pm\\infty$ thì không có GTLN hoặc GTNN).</li>
              <li><strong>Mô hình hóa bài toán thực tiễn tối ưu:</strong> Thiết lập hàm số theo một ẩn số $x$ (diện tích, thể tích, chi phí...), xác định điều kiện thực tế của biến số rồi tìm điểm cực trị tối ưu.</li>
            </ul>`,
            `<li>Vô cực $\\pm\\infty$ không phải là giá trị; nếu $\\lim = +\\infty$ thì kết luận hàm không có GTLN.</li>
            <li>Khi giải bài toán thực tế, ẩn số $x$ bắt buộc phải thỏa mãn điều kiện hình học/thực tế.</li>`,
            `<li>Ngộ nhận trên khoảng mở luôn tồn tại GTLN, GTNN (chỉ chắc chắn trên đoạn đóng).</li>`,
            `<li><em>\"Đọc kỹ đề – Chọn ẩn và tìm điều kiện – Lập hàm mục tiêu – Đạo hàm bằng 0 cho kết quả tối ưu!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Một mảnh vườn hình chữ nhật có chu vi $40\\text{ m}$. Diện tích lớn nhất của mảnh vườn bằng:",
              options: ["A. $100\\text{ m}^2$", "B. $200\\text{ m}^2$", "C. $400\\text{ m}^2$", "D. $50\\text{ m}^2$"],
              correct: "A",
              explanation: "Gọi chiều rộng là $x$ ($0 < x < 20$), chiều dài là $20 - x$. Diện tích $S(x) = x(20 - x) = -x^2 + 20x$. Đạt cực đại tại $x = 10 \\Rightarrow S_{\\max} = 100\\text{ m}^2$ (khi là hình vuông cạnh 10m).",
              hint1: "Nửa chu vi là $20\\text{ m}$. Diện tích là $S(x) = x(20 - x)$.",
              hint2: "Đạo hàm $S'(x) = 20 - 2x = 0 \\Rightarrow x = 10$. Tính $S(10) = 100$."
            },
            {
              question: "Giá trị nhỏ nhất của hàm số $y = x^4 - 2x^2 + 3$ trên $\\mathbb{R}$ bằng:",
              options: ["A. 2", "B. 3", "C. 1", "D. 0"],
              correct: "A",
              explanation: "Đặt $t = x^2 \\ge 0$, ta có $y = t^2 - 2t + 3 = (t - 1)^2 + 2 \\ge 2$. Dấu '=' xảy ra khi $t = 1 \\Leftrightarrow x = \\pm 1$. Vậy $\\min = 2$.",
              hint1: "Đặt $t = x^2 \\ge 0$, đưa về tam thức bậc hai $t^2 - 2t + 3$.",
              hint2: "$(t - 1)^2 + 2 \\ge 2$ với mọi $t \\ge 0$."
            },
            {
              question: "Hàm số $y = \\frac{x - 1}{x + 1}$ trên đoạn $[0; 3]$ có tổng GTLN và GTNN bằng:",
              options: ["A. $-\\frac{1}{2}$", "B. $\\frac{1}{2}$", "C. $-1$", "D. $0$"],
              correct: "A",
              explanation: "Ta có $y' = \\frac{2}{(x+1)^2} > 0, \\forall x \\neq -1$, hàm số đồng biến trên $[0; 3]$. Do đó $\\min = f(0) = -1$, $\\max = f(3) = \\frac{2}{4} = \\frac{1}{2}$. Tổng bằng $-1 + \\frac{1}{2} = -\\frac{1}{2}$.",
              hint1: "Hàm số đồng biến trên $[0; 3]$ nên $\\min = f(0)$ và $\\max = f(3)$.",
              hint2: "$f(0) = -1, f(3) = 1/2$. Tổng là $-1 + 1/2 = -1/2$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = x^3 - 3x^2 - 9x + 5$ trên đoạn $[0; 4]$.",
          items: [
            { key: "a", text: "Đạo hàm của hàm số là $f'(x) = 3x^2 - 6x - 9$.", correct: "true", explain: "$f'(x) = 3(x^2 - 2x - 3) = 3(x+1)(x-3)$." },
            { key: "b", text: "Phương trình $f'(x) = 0$ có hai nghiệm phân biệt thuộc khoảng $(0; 4)$.", correct: "false", explain: "Nghiệm $x = -1 \\notin (0; 4)$, chỉ có $x = 3 \\in (0; 4)$." },
            { key: "c", text: "Giá trị nhỏ nhất của hàm số trên đoạn $[0; 4]$ bằng $-22$.", correct: "true", explain: "$f(0) = 5, f(3) = -22, f(4) = -15$. Vậy $\\min = -22$ tại $x = 3$." },
            { key: "d", text: "Giá trị lớn nhất của hàm số trên đoạn $[0; 4]$ bằng $5$.", correct: "true", explain: "Số lớn nhất trong $\\{5; -22; -15\\}$ là $5$ tại $x = 0$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số $y = \\frac{2x - 1}{x - 2}$ trên đoạn $[3; 5]$.",
          items: [
            { key: "a", text: "Hàm số liên tục trên đoạn $[3; 5]$.", correct: "true", explain: "Điểm gián đoạn $x = 2 \\notin [3; 5]$ nên hàm liên tục trên $[3; 5]$." },
            { key: "b", text: "Hàm số đồng biến trên đoạn $[3; 5]$.", correct: "false", explain: "$y' = \\frac{-3}{(x-2)^2} < 0$, hàm số nghịch biến trên $[3; 5]$." },
            { key: "c", text: "Giá trị lớn nhất của hàm số trên đoạn $[3; 5]$ bằng $5$.", correct: "true", explain: "Hàm nghịch biến nên $\\max = f(3) = \\frac{5}{1} = 5$." },
            { key: "d", text: "Giá trị nhỏ nhất của hàm số trên đoạn $[3; 5]$ bằng $3$.", correct: "true", explain: "$\\min = f(5) = \\frac{9}{3} = 3$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét bài toán tối ưu thực tế sản xuất hộp kim loại không nắp có đáy hình vuông và thể tích $500\\text{ cm}^3$.",
          items: [
            { key: "a", text: "Nếu gọi cạnh đáy là $x$ ($x > 0$), chiều cao là $h$ thì $h = \\frac{500}{x^2}$.", correct: "true", explain: "Thể tích $V = x^2 h = 500 \\Rightarrow h = \\frac{500}{x^2}$." },
            { key: "b", text: "Diện tích toàn phần của hộp không nắp là $S(x) = x^2 + \\frac{2000}{x}$.", correct: "true", explain: "$S = x^2 + 4xh = x^2 + 4x \\cdot \\frac{500}{x^2} = x^2 + \\frac{2000}{x}$." },
            { key: "c", text: "Đạo hàm $S'(x) = 2x - \\frac{2000}{x^2}$.", correct: "true", explain: "Đạo hàm chính xác." },
            { key: "d", text: "Để tiết kiệm vật liệu nhất (diện tích nhỏ nhất) thì cạnh đáy $x = 10\\text{ cm}$.", correct: "true", explain: "$S'(x) = 0 \\Leftrightarrow 2x^3 = 2000 \\Leftrightarrow x = 10\\text{ cm}$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hàm số $f(x) = \\sqrt{4 - x^2}$.",
          items: [
            { key: "a", text: "Tập xác định của hàm số là đoạn $[-2; 2]$.", correct: "true", explain: "$4 - x^2 \\ge 0 \\Leftrightarrow x \\in [-2; 2]$." },
            { key: "b", text: "Giá trị nhỏ nhất của hàm số bằng $0$.", correct: "true", explain: "$f(-2) = f(2) = 0$, căn bậc hai luôn $\\ge 0$." },
            { key: "c", text: "Giá trị lớn nhất của hàm số bằng $4$.", correct: "false", explain: "$\\max = f(0) = \\sqrt{4} = 2$, không phải $4$." },
            { key: "d", text: "Hàm số đạt giá trị lớn nhất tại $x = 0$.", correct: "true", explain: "Tại $x = 0$, $f(0) = 2$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Xét tính đúng sai của các khẳng định về định lý và tính chất GTLN, GTNN.",
          items: [
            { key: "a", text: "Nếu $f(x) \\le M, \\forall x \\in D$ thì $M$ chắc chắn là giá trị lớn nhất.", correct: "false", explain: "Thiếu điều kiện tồn tại $x_0 \\in D$ để $f(x_0) = M$." },
            { key: "b", text: "Hàm số liên tục trên khoảng $(a; b)$ luôn luôn có GTLN và GTNN.", correct: "false", explain: "Chỉ chắc chắn trên đoạn $[a; b]$, trên khoảng có thể không có." },
            { key: "c", text: "Điểm cực đại của hàm số có thể nhỏ hơn điểm cực tiểu.", correct: "true", explain: "Giá trị cực đại mang tính địa phương nên có thể nhỏ hơn giá trị cực tiểu." },
            { key: "d", text: "Nếu hàm số đồng biến trên $[a; b]$ thì $\\min_{[a; b]} f(x) = f(a)$ và $\\max_{[a; b]} f(x) = f(b)$.", correct: "true", explain: "Tính chất đơn điệu chuẩn trên đoạn." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2 (x - 2)$ trên $\\mathbb{R}$.",
          items: [
            { key: "a", text: "Phương trình $f'(x) = 0$ có 3 nghiệm phân biệt là $x = 0, x = 1, x = 2$.", correct: "true", explain: "Các nghiệm là $0, 1, 2$." },
            { key: "b", text: "Hàm số đạt cực trị tại $x = 1$.", correct: "false", explain: "$x = 1$ là nghiệm bội chẵn nên $f'(x)$ không đổi dấu, không có cực trị." },
            { key: "c", text: "Hàm số có đúng 2 điểm cực trị.", correct: "true", explain: "Đạo hàm đổi dấu qua $x = 0$ và $x = 2$." },
            { key: "d", text: "Hàm số đạt cực tiểu tại $x = 2$.", correct: "true", explain: "Bảng xét dấu: qua $x = 2$, $f'(x)$ đổi dấu từ âm sang dương." }
          ]
        }
      ]
    },

    // BÀI 3: ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ
    "toan12_bai3": {
      id: "toan12_bai3",
      lessonTitle: "Bài 3: Đường tiệm cận của đồ thị hàm số",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 3:") || t.includes("tiệm cận") || t.includes("tiem can");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Đường tiệm cận ngang",
          theory: createStandardTheoryHTML(
            "Bài 3: Đường tiệm cận của đồ thị hàm số", "Lớp 12", 1,
            "Đường tiệm cận ngang",
            `<p>Kiến thức cốt lõi chuẩn SGK Toán 12 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Đường thẳng $y = y_0$ được gọi là <em>đường tiệm cận ngang</em> của đồ thị hàm số $y = f(x)$ nếu:
                <br/>$$\\lim_{x \\to +\\infty} f(x) = y_0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} f(x) = y_0$$
              </li>
              <li><strong>Hàm phân thức hữu tỉ $y = \\frac{P(x)}{Q(x)}$:</strong>
                <br/>• Bậc tử = Bậc mẫu: Có 1 tiệm cận ngang $y = \\frac{a_n}{b_n}$ (tỉ số hệ số bậc cao nhất).
                <br/>• Bậc tử < Bậc mẫu: Có 1 tiệm cận ngang $y = 0$ (trục hoành $Ox$).
                <br/>• Bậc tử > Bậc mẫu: Không có tiệm cận ngang.
              </li>
              <li><strong>Hàm phân thức chứa căn:</strong> Cần xét riêng hai hướng $x \\to +\\infty$ và $x \\to -\\infty$ (chú ý $\\sqrt{x^2} = |x| = -x$ khi $x \\to -\\infty$).</li>
            </ul>`,
            `<li>Đồ thị hàm số có tối đa 2 đường tiệm cận ngang.</li>
            <li>Đồ thị hàm số hoàn toàn CÓ THỂ cắt đường tiệm cận ngang tại hữu hạn hoặc vô hạn điểm.</li>`,
            `<li>Quên dấu âm khi rút $x$ ra khỏi căn bậc hai khi $x \\to -\\infty$.</li>
            <li>Nhầm phương trình tiệm cận ngang thành $x = y_0$ (tiệm cận ngang luôn có dạng $y = y_0$).</li>`,
            `<li><em>\"Ngang y vô cực x – Tỉ số hệ số bậc cao – Chú ý căn bậc chẵn khi x âm!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{2x - 1}{x + 3}$ là:",
              options: ["A. $y = 2$", "B. $x = 2$", "C. $x = -3$", "D. $y = -\\frac{1}{3}$"],
              correct: "A",
              explanation: "Ta có $\\lim_{x \\to \\pm\\infty} \\frac{2x - 1}{x + 3} = 2$. Do đó đường tiệm cận ngang là $y = 2$.",
              hint1: "Lấy hệ số của $x$ ở tử chia cho hệ số của $x$ ở mẫu: $2/1 = 2$.",
              hint2: "Tiệm cận ngang có dạng $y = y_0$, suy ra $y = 2$."
            },
            {
              question: "Số đường tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 2}$ là:",
              options: ["A. 2", "B. 1", "C. 0", "D. 3"],
              correct: "A",
              explanation: "Khi $x \\to +\\infty$, $\\sqrt{x^2+1} = x\\sqrt{1+1/x^2} \\Rightarrow \\lim = 1$ (tiệm cận $y = 1$). Khi $x \\to -\\infty$, $\\sqrt{x^2+1} = -x\\sqrt{1+1/x^2} \\Rightarrow \\lim = -1$ (tiệm cận $y = -1$). Vậy có đúng 2 tiệm cận ngang.",
              hint1: "Tính hai giới hạn khi $x \\to +\\infty$ và khi $x \\to -\\infty$.",
              hint2: "Khi $x \\to -\\infty$ thì $\\sqrt{x^2} = -x$, do đó có hai tiệm cận $y = 1$ và $y = -1$."
            },
            {
              question: "Tiệm cận ngang của đồ thị hàm số $y = \\frac{5}{x^2 + 2}$ là đường thẳng:",
              options: ["A. $y = 0$", "B. $y = 5$", "C. $y = \\frac{5}{2}$", "D. $x = 0$"],
              correct: "A",
              explanation: "Vì bậc của tử (0) bé hơn bậc của mẫu (2) nên $\\lim_{x \\to \\pm\\infty} \\frac{5}{x^2+2} = 0$. Tiệm cận ngang là trục hoành $y = 0$.",
              hint1: "So sánh bậc của tử số và bậc của mẫu số.",
              hint2: "Bậc tử nhỏ hơn bậc mẫu nên giới hạn tại vô cực bằng 0: $y = 0$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Đường tiệm cận đứng",
          theory: createStandardTheoryHTML(
            "Bài 3: Đường tiệm cận của đồ thị hàm số", "Lớp 12", 2,
            "Đường tiệm cận đứng",
            `<p>Kiến thức Đường tiệm cận đứng chuẩn SGK Toán 12 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Đường thẳng $x = x_0$ được gọi là <em>đường tiệm cận đứng</em> của đồ thị hàm số $y = f(x)$ nếu ít nhất một trong các điều kiện sau được thỏa mãn:
                <br/>$$\\lim_{x \\to x_0^+} f(x) = +\\infty, \\quad \\lim_{x \\to x_0^+} f(x) = -\\infty, \\quad \\lim_{x \\to x_0^-} f(x) = +\\infty, \\quad \\lim_{x \\to x_0^-} f(x) = -\\infty$$
              </li>
              <li><strong>Phương pháp xác định đối với hàm phân thức $y = \\frac{P(x)}{Q(x)}$:</strong>
                <br/>1. Giải phương trình mẫu số $Q(x) = 0$ tìm các nghiệm $x_0$.
                <br/>2. Kiểm tra nếu $P(x_0) \\neq 0$ thì $x = x_0$ chắc chắn là tiệm cận đứng.
                <br/>3. Nếu $P(x_0) = 0$, rút gọn nhân tử chung $(x - x_0)$ trước khi kết luận.
              </li>
              <li>Đồ thị hàm số <strong>không bao giờ cắt</strong> đường tiệm cận đứng.</li>
            </ul>`,
            `<li>Tiệm cận đứng luôn có dạng $x = x_0$.</li>
            <li>Nghiệm của mẫu phải thuộc tập xác định của biểu thức tử số.</li>`,
            `<li>Vội vàng kết luận mọi nghiệm của mẫu là tiệm cận đứng mà quên rút gọn nhân tử chung với tử.</li>`,
            `<li><em>\"Đứng x nghiệm mẫu triệt tiêu – Tử số khác 0 mới thành tiệm cận!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{3x - 1}{x + 2}$ là:",
              options: ["A. $x = -2$", "B. $x = 2$", "C. $y = 3$", "D. $x = \\frac{1}{3}$"],
              correct: "A",
              explanation: "Mẫu số $x + 2 = 0 \\Leftrightarrow x = -2$. Tại $x = -2$, tử số là $3(-2) - 1 = -7 \\neq 0$. Do đó đường tiệm cận đứng là $x = -2$.",
              hint1: "Tìm nghiệm của mẫu số làm cho mẫu bằng 0.",
              hint2: "$x + 2 = 0 \\Leftrightarrow x = -2$. Tại đó tử khác 0 nên $x = -2$ là tiệm cận đứng."
            },
            {
              question: "Số đường tiệm cận đứng của đồ thị hàm số $y = \\frac{x - 3}{x^2 - 9}$ là:",
              options: ["A. 1", "B. 2", "C. 0", "D. 3"],
              correct: "A",
              explanation: "Phân tích: $y = \\frac{x - 3}{(x - 3)(x + 3)} = \\frac{1}{x + 3}$ ($x \\neq 3$). Tại $x = 3$, $\\lim = 1/6$ hữu hạn. Chỉ có $x = -3$ làm mẫu bằng 0 và tử khác 0 nên có đúng 1 tiệm cận đứng là $x = -3$.",
              hint1: "Rút gọn nhân tử chung $(x - 3)$ giữa tử và mẫu.",
              hint2: "Sau khi rút gọn còn $1/(x+3)$, chỉ có $x = -3$ là tiệm cận đứng."
            },
            {
              question: "Đồ thị hàm số $y = \\frac{x + 1}{x^2 + 1}$ có bao nhiêu đường tiệm cận đứng?",
              options: ["A. 0", "B. 1", "C. 2", "D. Vô số"],
              correct: "A",
              explanation: "Vì $x^2 + 1 \\ge 1 > 0, \\forall x \\in \\mathbb{R}$, phương trình mẫu số vô nghiệm. Hàm số xác định trên $\\mathbb{R}$ nên đồ thị không có đường tiệm cận đứng nào.",
              hint1: "Kiểm tra xem mẫu số $x^2 + 1 = 0$ có nghiệm thực hay không.",
              hint2: "$x^2 + 1 > 0$ với mọi $x$, mẫu không bao giờ triệt tiêu nên số tiệm cận đứng là 0."
            }
          ]
        },
        {
          sectionNumber: 3,
          sectionTitle: "Mục 3: Đường tiệm cận xiên",
          theory: createStandardTheoryHTML(
            "Bài 3: Đường tiệm cận của đồ thị hàm số", "Lớp 12", 3,
            "Đường tiệm cận xiên",
            `<p>Kiến thức Đường tiệm cận xiên chuẩn SGK Toán 12 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Đường thẳng $y = ax + b$ ($a \\neq 0$) được gọi là <em>đường tiệm cận xiên</em> của đồ thị hàm số $y = f(x)$ nếu:
                <br/>$$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0 \\quad \\text{hoặc} \\quad \\lim_{x \\to -\\infty} [f(x) - (ax + b)] = 0$$
              </li>
              <li><strong>Phương pháp tìm đối với hàm phân thức hữu tỉ:</strong> Đồ thị hàm phân thức hữu tỉ có tiệm cận xiên khi và chỉ khi <strong>bậc của tử lớn hơn bậc của mẫu đúng 1 bậc</strong>.
                <br/>Thực hiện phép chia đa thức tử cho mẫu:
                $$y = \\frac{P(x)}{Q(x)} = ax + b + \\frac{R(x)}{Q(x)} \\quad (\\text{với } \\lim_{x \\to \\pm\\infty} \\frac{R(x)}{Q(x)} = 0)$$
                Khi đó đường thẳng $y = ax + b$ chính là đường tiệm cận xiên.
              </li>
            </ul>`,
            `<li>Nếu đồ thị có tiệm cận ngang thì không có tiệm cận xiên (khi $x \\to +\\infty$ hoặc $x \\to -\\infty$).</li>
            <li>Hệ số góc của tiệm cận xiên $a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}$, hệ số tự do $b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]$.</li>`,
            `<li>Nhầm lẫn giữa tiệm cận xiên và tiệm cận ngang.</li>`,
            `<li><em>\"Chia tử cho mẫu nhị thức ra – Thương bậc nhất chính là xiên!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Phương trình đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ là:",
              options: ["A. $y = x$", "B. $y = x - 1$", "C. $y = x + 1$", "D. $y = 2x$"],
              correct: "A",
              explanation: "Chia tử cho mẫu: $\\frac{x^2 - x + 1}{x - 1} = x + \\frac{1}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\frac{1}{x - 1} = 0$ nên đường tiệm cận xiên là $y = x$.",
              hint1: "Thực hiện phép chia đa thức $x^2 - x + 1$ cho $x - 1$.",
              hint2: "Ta có $x^2 - x + 1 = x(x - 1) + 1$, phần thương là $x$."
            },
            {
              question: "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x - 1}{x + 1}$ là:",
              options: ["A. $y = 2x + 1$", "B. $y = 2x - 1$", "C. $y = 2x + 3$", "D. $y = x + 2$"],
              correct: "A",
              explanation: "Chia tử cho mẫu: $2x^2 + 3x - 1 = (x + 1)(2x + 1) - 2$. Do đó $y = 2x + 1 - \\frac{2}{x + 1}$. Tiệm cận xiên là $y = 2x + 1$.",
              hint1: "Chia đa thức $2x^2 + 3x - 1$ cho $x + 1$.",
              hint2: "Thương thu được là $2x + 1$, số dư là $-2$."
            },
            {
              question: "Đồ thị hàm phân thức hữu tỉ có đường tiệm cận xiên khi và chỉ khi:",
              options: [
                "A. Bậc của đa thức tử lớn hơn bậc của đa thức mẫu đúng 1 bậc",
                "B. Bậc của tử bằng bậc của mẫu",
                "C. Bậc của tử nhỏ hơn bậc của mẫu",
                "D. Bậc của tử lớn hơn bậc của mẫu ít nhất 2 bậc"
              ],
              correct: "A",
              explanation: "Theo định nghĩa chuẩn SGK Toán 12 KNTT: đồ thị hàm phân thức hữu tỉ có tiệm cận xiên khi bậc của tử lớn hơn bậc của mẫu đúng 1 bậc.",
              hint1: "Nhớ lại điều kiện để thương của phép chia tử cho mẫu là một nhị thức bậc nhất.",
              hint2: "Nhị thức bậc nhất có bậc 1, do đó bậc tử trừ bậc mẫu phải bằng 1."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $y = \\frac{3x - 1}{x + 2}$.",
          items: [
            { key: "a", text: "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = -2$.", correct: "true", explain: "Mẫu số $x + 2 = 0 \\Leftrightarrow x = -2$." },
            { key: "b", text: "Đồ thị hàm số có tiệm cận ngang là đường thẳng $y = 3$.", correct: "true", explain: "$\\lim_{x \\to \\pm\\infty} \\frac{3x-1}{x+2} = 3$." },
            { key: "c", text: "Giao điểm của hai đường tiệm cận có tọa độ là $(-2; 3)$.", correct: "true", explain: "Giao của $x = -2$ và $y = 3$ là $(-2; 3)$." },
            { key: "d", text: "Đồ thị hàm số có đường tiệm cận xiên.", correct: "false", explain: "Bậc tử bằng bậc mẫu nên có TC ngang, không có TC xiên." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$.",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", correct: "true", explain: "$x - 1 \\neq 0 \\Leftrightarrow x \\neq 1$." },
            { key: "b", text: "Đồ thị hàm số có tiệm cận đứng là $x = 1$.", correct: "true", explain: "Tử tại $x=1$ bằng $1 \\neq 0$, do đó $x = 1$ là TC đứng." },
            { key: "c", text: "Tiệm cận xiên của đồ thị là đường thẳng $y = x$.", correct: "true", explain: "$\\frac{x^2-x+1}{x-1} = x + \\frac{1}{x-1} \\Rightarrow y = x$ là TC xiên." },
            { key: "d", text: "Đồ thị hàm số có tiệm cận ngang là $y = 1$.", correct: "false", explain: "Bậc tử lớn hơn bậc mẫu 1 bậc nên không có TC ngang." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 1}$.",
          items: [
            { key: "a", text: "Đồ thị hàm số có tiệm cận đứng là $x = 1$.", correct: "true", explain: "Mẫu bằng 0 tại $x = 1$, tử bằng $\\sqrt{2} > 0$." },
            { key: "b", text: "$\\lim_{x \\to +\\infty} y = 1$.", correct: "true", explain: "Khi $x \\to +\\infty$, tỉ số hệ số bậc cao nhất là 1." },
            { key: "c", text: "$\\lim_{x \\to -\\infty} y = 1$.", correct: "false", explain: "Khi $x \\to -\\infty$, $\\sqrt{x^2} = -x$, giới hạn bằng $-1$." },
            { key: "d", text: "Đồ thị hàm số có đúng hai đường tiệm cận ngang.", correct: "true", explain: "Hai đường tiệm cận ngang là $y = 1$ và $y = -1$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét các mệnh đề lý thuyết về đường tiệm cận của đồ thị hàm số.",
          items: [
            { key: "a", text: "Nếu $\\lim_{x \\to x_0^+} f(x) = +\\infty$ thì $x = x_0$ là tiệm cận đứng.", correct: "true", explain: "Định nghĩa chuẩn của tiệm cận đứng." },
            { key: "b", text: "Đồ thị hàm đa thức bậc ba luôn có một đường tiệm cận ngang.", correct: "false", explain: "Hàm đa thức không bao giờ có tiệm cận." },
            { key: "c", text: "Đồ thị hàm phân thức hữu tỉ có thể vừa có tiệm cận ngang vừa có tiệm cận xiên.", correct: "false", explain: "Bậc tử bằng bậc mẫu thì có TC ngang; bậc tử lớn hơn 1 bậc thì có TC xiên, không thể cùng có cả hai." },
            { key: "d", text: "Đường tiệm cận có thể cắt đồ thị hàm số tại một số điểm.", correct: "true", explain: "Tiệm cận ngang hoặc xiên hoàn toàn có thể cắt đồ thị." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hàm số $y = \\frac{2x^2 + mx - 1}{x + 1}$ ($m$ là tham số thực).",
          items: [
            { key: "a", text: "Đồ thị hàm số luôn có tiệm cận đứng $x = -1$ khi $m \\neq 1$.", correct: "true", explain: "Tử tại $x = -1$ là $2(-1)^2 + m(-1) - 1 = 1 - m \\neq 0 \\Leftrightarrow m \\neq 1$." },
            { key: "b", text: "Đường tiệm cận xiên của đồ thị có hệ số góc bằng 2.", correct: "true", explain: "$\\lim_{x \\to \\pm\\infty} \\frac{y}{x} = 2$." },
            { key: "c", text: "Khi $m = 2$, tiệm cận xiên là $y = 2x$.", correct: "true", explain: "$\\frac{2x^2+2x-1}{x+1} = 2x - \\frac{1}{x+1} \\Rightarrow y = 2x$." },
            { key: "d", text: "Khi $m = 1$, đồ thị hàm số có đúng hai đường tiệm cận.", correct: "false", explain: "Khi $m = 1$, tử triệt tiêu mẫu thành đường thẳng $y = 2x - 1$, không có tiệm cận." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Cho hàm số $y = f(x)$ có bảng biến thiên với $\\lim_{x \\to \\pm\\infty} f(x) = 2$, $\\lim_{x \\to 1^\\pm} f(x) = \\pm\\infty$.",
          items: [
            { key: "a", text: "Đồ thị hàm số có tiệm cận ngang là đường thẳng $y = 2$.", correct: "true", explain: "$\\lim_{x \\to \\pm\\infty} f(x) = 2$." },
            { key: "b", text: "Đồ thị hàm số có tiệm cận đứng là đường thẳng $x = 1$.", correct: "true", explain: "Giới hạn tại $x \\to 1$ tiến tới vô cực." },
            { key: "c", text: "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị là 2.", correct: "true", explain: "Gồm 1 TC đứng $x = 1$ và 1 TC ngang $y = 2$." },
            { key: "d", text: "Giao điểm của hai đường tiệm cận là $I(1; 2)$.", correct: "true", explain: "Giao của $x = 1$ và $y = 2$ là $(1; 2)$." }
          ]
        }
      ]
    },

    // BÀI 4: KHẢO SÁT SỰ BIẾN THIÊN VÀ VẼ ĐỒ THỊ CỦA HÀM SỐ
    "toan12_bai4": {
      id: "toan12_bai4",
      lessonTitle: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 4:") || t.includes("khảo sát sự biến thiên") || (t.includes("khảo sát") && t.includes("vẽ đồ thị"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Sơ đồ khảo sát và đồ thị các hàm số cơ bản",
          theory: createStandardTheoryHTML(
            "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số", "Lớp 12", 1,
            "Sơ đồ khảo sát và đồ thị các hàm số cơ bản",
            `<p>Quy trình 3 bước chuẩn SGK Kết nối tri thức để khảo sát hàm số $y = f(x)$:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Bước 1: Tập xác định:</strong> Tìm TXĐ $D$, xét tính chẵn lẻ hoặc tuần hoàn (nếu có).</li>
              <li><strong>Bước 2: Sự biến thiên:</strong>
                <br/>- Tính $y'$, tìm nghiệm $y' = 0$ và điểm $y'$ không xác định.
                <br/>- Tìm giới hạn tại vô cực, tiệm cận (đứng, ngang, xiên).
                <br/>- Lập <strong>Bảng biến thiên</strong> (khoảng đồng biến, nghịch biến, cực trị).
              </li>
              <li><strong>Bước 3: Vẽ đồ thị:</strong>
                <br/>- Điểm đặc biệt: Giao $Oy$ ($x = 0$), giao $Ox$ ($y = 0$), điểm cực trị.
                <br/>- <strong>Tâm đối xứng:</strong> Hàm bậc ba $y = ax^3+bx^2+cx+d$ có tâm đối xứng là điểm uốn $I(x_0; y_0)$ với $y''(x_0) = 0$ ($x_0 = -\\frac{b}{3a}$). Hàm phân thức bậc nhất $y = \\frac{ax+b}{cx+d}$ có tâm đối xứng là giao điểm hai tiệm cận $I(-d/c; a/c)$.
              </li>
            </ul>`,
            `<li>Đồ thị hàm bậc ba luôn nhận điểm uốn làm tâm đối xứng.</li>
            <li>Hàm phân thức: vẽ tiệm cận trước, vẽ nhánh đồ thị sau.</li>`,
            `<li>Vẽ đồ thị cắt qua đường tiệm cận đứng (sai hoàn toàn).</li>`,
            `<li><em>\"TXĐ – Đạo hàm – Giới hạn Tiệm cận – Bảng biến thiên – Điểm uốn tâm đối xứng vẽ mượt mà!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Tọa độ tâm đối xứng của đồ thị hàm số $y = x^3 - 3x^2 + 2$ là:",
              options: ["A. $I(1; 0)$", "B. $I(1; 2)$", "C. $I(0; 2)$", "D. $I(2; -2)$"],
              correct: "A",
              explanation: "Ta có $y' = 3x^2 - 6x \\Rightarrow y'' = 6x - 6 = 0 \\Leftrightarrow x = 1$. Với $x = 1 \\Rightarrow y = 1 - 3 + 2 = 0$. Vậy tâm đối xứng là điểm uốn $I(1; 0)$.",
              hint1: "Điểm uốn của đồ thị hàm bậc ba là nghiệm của phương trình $y'' = 0$.",
              hint2: "$y'' = 6x - 6 = 0 \\Leftrightarrow x = 1$. Tính $y(1) = 0$."
            },
            {
              question: "Tọa độ tâm đối xứng của đồ thị hàm số phân thức $y = \\frac{2x + 1}{x - 1}$ là:",
              options: ["A. $I(1; 2)$", "B. $I(-1; 2)$", "C. $I(1; -1)$", "D. $I(2; 1)$"],
              correct: "A",
              explanation: "Đồ thị có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 2$. Tâm đối xứng là giao điểm hai tiệm cận: $I(1; 2)$.",
              hint1: "Tâm đối xứng của hàm phân thức bậc nhất trên bậc nhất là giao điểm của hai đường tiệm cận.",
              hint2: "Tiệm cận đứng $x = 1$, tiệm cận ngang $y = 2$ cho điểm $I(1; 2)$."
            },
            {
              question: "Đồ thị hàm số $y = x^3 - 3x$ cắt trục hoành $Ox$ tại bao nhiêu điểm phân biệt?",
              options: ["A. 3 điểm", "B. 2 điểm", "C. 1 điểm", "D. 0 điểm"],
              correct: "A",
              explanation: "Giải phương trình hoành độ giao điểm: $x^3 - 3x = 0 \\Leftrightarrow x(x^2 - 3) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm\\sqrt{3}$. Vậy có đúng 3 giao điểm phân biệt.",
              hint1: "Cho $y = 0$ và giải phương trình bậc ba $x^3 - 3x = 0$.",
              hint2: "Đặt nhân tử chung $x(x^2 - 3) = 0$, ta có 3 nghiệm phân biệt $0, \\sqrt{3}, -\\sqrt{3}$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tương giao đồ thị và các yếu tố hình học của đồ thị",
          theory: createStandardTheoryHTML(
            "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số", "Lớp 12", 2,
            "Tương giao đồ thị và các yếu tố hình học của đồ thị",
            `<p>Phương pháp giải bài toán tương giao đồ thị và tiếp tuyến chuẩn SGK Toán 12:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Biện luận số nghiệm phương trình:</strong> Số nghiệm của phương trình $f(x) = m$ chính là số giao điểm của đồ thị $(C): y = f(x)$ và đường thẳng nằm ngang $d: y = m$. Dựa vào các điểm cực trị trên Bảng biến thiên để kết luận.</li>
              <li><strong>Phương trình tiếp tuyến:</strong> Tiếp tuyến của đồ thị $(C): y = f(x)$ tại điểm $M_0(x_0; y_0) \\in (C)$ có phương trình:
                $$y = f'(x_0)(x - x_0) + y_0$$
                với $k = f'(x_0)$ là hệ số góc của tiếp tuyến.
              </li>
              <li><strong>Tâm đối xứng và trục đối xứng:</strong>
                <br/>• Hàm bậc ba nhận điểm uốn làm tâm đối xứng, không có trục đối xứng.
                <br/>• Hàm phân thức bậc nhất trên bậc nhất nhận giao điểm 2 tiệm cận làm tâm đối xứng và nhận 2 đường phân giác của góc tạo bởi 2 tiệm cận làm trục đối xứng.
              </li>
            </ul>`,
            `<li>Hệ số góc tiếp tuyến chính là giá trị đạo hàm tại tiếp điểm: $k = f'(x_0)$.</li>
            <li>Biện luận nghiệm phải chú ý dấu bằng tại các điểm cực trị (tiếp xúc).</li>`,
            `<li>Nhầm lẫn giữa tiếp tuyến tại điểm $M_0 \\in (C)$ và tiếp tuyến đi qua điểm $A \\notin (C)$.</li>`,
            `<li><em>\"Số giao điểm bằng số nghiệm – Tiếp tuyến tại điểm: Đạo hàm hoành độ làm hệ số góc!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Đường thẳng $y = m$ cắt đồ thị hàm số $y = x^3 - 3x$ tại 3 điểm phân biệt khi và chỉ khi:",
              options: ["A. $-2 < m < 2$", "B. $m > 2$", "C. $m < -2$", "D. $-2 \\le m \\le 2$"],
              correct: "A",
              explanation: "Ta có $y' = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Giá trị cực đại $y(-1) = 2$, giá trị cực tiểu $y(1) = -2$. Để cắt tại 3 điểm phân biệt thì $y_{\\text{CT}} < m < y_{\\text{CĐ}} \\Leftrightarrow -2 < m < 2$.",
              hint1: "Tìm giá trị cực tiểu và giá trị cực đại của hàm số.",
              hint2: "Đường thẳng $y = m$ phải nằm giữa cực tiểu và cực đại: $-2 < m < 2$."
            },
            {
              question: "Hệ số góc của tiếp tuyến của đồ thị hàm số $y = x^3 - 2x + 1$ tại điểm có hoành độ $x_0 = 2$ bằng:",
              options: ["A. 10", "B. 12", "C. 8", "D. 5"],
              correct: "A",
              explanation: "Ta có $y' = 3x^2 - 2$. Hệ số góc tiếp tuyến là $k = y'(2) = 3(2)^2 - 2 = 10$.",
              hint1: "Hệ số góc của tiếp tuyến tại điểm có hoành độ $x_0$ là $k = y'(x_0)$.",
              hint2: "Tính $y'(x) = 3x^2 - 2$, thay $x = 2$ vào: $3(4) - 2 = 10$."
            },
            {
              question: "Phương trình tiếp tuyến của đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ tại điểm có hoành độ $x_0 = 0$ là:",
              options: ["A. $y = 3x - 1$", "B. $y = 3x + 1$", "C. $y = x - 1$", "D. $y = -3x - 1$"],
              correct: "A",
              explanation: "Tại $x_0 = 0 \\Rightarrow y_0 = -1$. Đạo hàm $y' = \\frac{3}{(x+1)^2} \\Rightarrow y'(0) = 3$. Phương trình tiếp tuyến: $y = 3(x - 0) - 1 \\Leftrightarrow y = 3x - 1$.",
              hint1: "Tính $y_0 = y(0)$ và $k = y'(0)$.",
              hint2: "$y_0 = -1, k = 3$. Phương trình $y = 3(x - 0) - 1 = 3x - 1$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số bậc ba $f(x) = x^3 - 3x^2 + 2$ có đồ thị $(C)$.",
          items: [
            { key: "a", text: "Đạo hàm của hàm số là $f'(x) = 3x^2 - 6x$.", correct: "true", explain: "$f'(x) = 3x^2 - 6x$." },
            { key: "b", text: "Hàm số đồng biến trên khoảng $(0; 2)$.", correct: "false", explain: "Trên $(0; 2)$, $f'(x) < 0$ nên hàm số nghịch biến." },
            { key: "c", text: "Điểm cực đại của đồ thị hàm số là $A(0; 2)$.", correct: "true", explain: "Tại $x = 0$, $f'(x)$ đổi dấu từ $(+)$ sang $(-)$ và $f(0) = 2$." },
            { key: "d", text: "Tâm đối xứng của đồ thị $(C)$ là điểm $I(1; 0)$.", correct: "true", explain: "$f''(x) = 6x - 6 = 0 \\Leftrightarrow x = 1 \\Rightarrow f(1) = 0$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số phân thức $y = \\frac{x + 2}{x - 1}$ có đồ thị $(H)$.",
          items: [
            { key: "a", text: "Đồ thị $(H)$ có đường tiệm cận đứng là $x = 1$.", correct: "true", explain: "Mẫu triệt tiêu tại $x = 1$." },
            { key: "b", text: "Đồ thị $(H)$ có đường tiệm cận ngang là $y = 1$.", correct: "true", explain: "Bậc tử bằng bậc mẫu, $\\lim = 1$." },
            { key: "c", text: "Hàm số đồng biến trên từng khoảng xác định.", correct: "false", explain: "$y' = \\frac{-3}{(x-1)^2} < 0$, hàm số nghịch biến." },
            { key: "d", text: "Tâm đối xứng của đồ thị $(H)$ là giao điểm hai tiệm cận $I(1; 1)$.", correct: "true", explain: "Giao của $x = 1$ và $y = 1$ là $I(1; 1)$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho phương trình hoành độ giao điểm $x^3 - 3x^2 + 2 = m$.",
          items: [
            { key: "a", text: "Với $m = 3$, phương trình có đúng 1 nghiệm thực.", correct: "true", explain: "$m = 3 > y_{\\text{CĐ}} = 2$ nên cắt đồ thị tại 1 điểm." },
            { key: "b", text: "Với $m = 2$, phương trình có đúng 3 nghiệm thực phân biệt.", correct: "false", explain: "Tại $m = 2 = y_{\\text{CĐ}}$, tiếp xúc tại cực đại nên chỉ có 2 nghiệm phân biệt." },
            { key: "c", text: "Để phương trình có 3 nghiệm thực phân biệt thì $-2 < m < 2$.", correct: "true", explain: "$y_{\\text{CT}} = -2 < m < y_{\\text{CĐ}} = 2$." },
            { key: "d", text: "Với mọi giá trị của $m$, phương trình luôn có ít nhất 1 nghiệm thực.", correct: "true", explain: "Hàm số bậc ba liên tục trên $\\mathbb{R}$ và có miền giá trị là $\\mathbb{R}$ nên luôn cắt đường thẳng $y=m$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho đồ thị hàm số $(C): y = x^3 - 3x + 1$ và đường thẳng $d: y = x + 1$.",
          items: [
            { key: "a", text: "Phương trình hoành độ giao điểm là $x^3 - 4x = 0$.", correct: "true", explain: "$x^3 - 3x + 1 = x + 1 \\Leftrightarrow x^3 - 4x = 0$." },
            { key: "b", text: "Đường thẳng $d$ cắt đồ thị $(C)$ tại đúng 3 điểm phân biệt.", correct: "true", explain: "$x(x^2 - 4) = 0 \\Leftrightarrow x = 0, x = \\pm 2$ (3 nghiệm phân biệt)." },
            { key: "c", text: "Tọa độ một giao điểm là $M(0; 1)$.", correct: "true", explain: "Tại $x = 0 \\Rightarrow y = 1$." },
            { key: "d", text: "Tổng hoành độ của 3 giao điểm bằng 2.", correct: "false", explain: "Tổng các nghiệm: $(-2) + 0 + 2 = 0 \\neq 2$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hàm số $y = \\frac{x^2 - x + 1}{x - 1}$.",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{1\\}$.", correct: "true", explain: "Mẫu số khác 0." },
            { key: "b", text: "Phân tích đa thức ta được $y = x + \\frac{1}{x - 1}$.", correct: "true", explain: "$(x^2 - x + 1) = x(x - 1) + 1$." },
            { key: "c", text: "Đường thẳng $y = x$ là tiệm cận xiên của đồ thị hàm số.", correct: "true", explain: "Vì $\\lim_{x \\to \\pm\\infty} \\frac{1}{x-1} = 0$ nên tiệm cận xiên là $y = x$." },
            { key: "d", text: "Đường thẳng $x = 1$ là tiệm cận đứng của đồ thị hàm số.", correct: "true", explain: "Mẫu bằng 0 tại $x = 1$ và tử tại $x = 1$ bằng $1 \\neq 0$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính chất đối xứng của đồ thị hàm số trong SGK Toán 12 KNTT:",
          items: [
            { key: "a", text: "Mọi đồ thị hàm số bậc ba luôn có tâm đối xứng là điểm uốn của đồ thị.", correct: "true", explain: "Điểm uốn $I(x_0; y_0)$ với $y''(x_0) = 0$ là tâm đối xứng." },
            { key: "b", text: "Đồ thị hàm số phân thức $y = \\frac{ax+b}{cx+d}$ nhận giao điểm của hai tiệm cận làm tâm đối xứng.", correct: "true", explain: "Giao điểm của tiệm cận đứng và tiệm cận ngang là tâm đối xứng." },
            { key: "c", text: "Đồ thị hàm số chẵn nhận trục tung $Oy$ làm trục đối xứng.", correct: "true", explain: "Tính chất hàm số chẵn chuẩn." },
            { key: "d", text: "Đồ thị hàm số bậc ba có trục đối xứng thẳng đứng đi qua điểm uốn.", correct: "false", explain: "Đồ thị hàm bậc ba chỉ có tâm đối xứng, không có trục đối xứng." }
          ]
        }
      ]
    },

    // BÀI 5: ỨNG DỤNG ĐẠO HÀM ĐỂ GIẢI QUYẾT MỘT SỐ BÀI TOÁN THỰC TIỄN
    "toan12_bai5": {
      id: "toan12_bai5",
      lessonTitle: "Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 5:") || t.includes("bài toán thực tiễn") || t.includes("thực tiễn") || t.includes("bài toán tối ưu");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Bài toán tối ưu hoá trong hình học và đời sống thực tế",
          theory: createStandardTheoryHTML(
            "Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn", "Lớp 12", 1,
            "Bài toán tối ưu hoá trong hình học và đời sống thực tế",
            `<p>Trong thực tiễn, ta thường gặp các bài toán tìm kích thước để diện tích lớn nhất, thể tích lớn nhất hoặc chi phí nguyên vật liệu làm bể chứa/hộp chứa là nhỏ nhất:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Bước 1 (Chọn biến):</strong> Chọn một đại lượng thay đổi làm biến số độc lập $x$ (ví dụ: độ dài cạnh đáy, chiều cao, bán kính đáy...) và xác định điều kiện xác định thực tế của $x$ (thường là một khoảng $(a; b)$).</li>
              <li><strong>Bước 2 (Thiết lập hàm số mục tiêu):</strong> Biểu diễn đại lượng cần tối ưu hoá (diện tích, thể tích, chiều dài hàng rào...) thành hàm số một biến $f(x)$ trên khoảng $(a; b)$.</li>
              <li><strong>Bước 3 (Khảo sát và tìm cực trị):</strong> Tính đạo hàm $f'(x)$, giải phương trình $f'(x) = 0$ tìm nghiệm $x_0 \\in (a; b)$. Lập bảng biến thiên để khẳng định $f(x_0)$ là GTLN (hoặc GTNN).</li>
              <li><strong>Bước 4 (Kết luận):</strong> Trả lời chính xác câu hỏi thực tiễn của đề bài kèm đơn vị đo tương ứng.</li>
            </ul>`,
            `<li><strong>Điều kiện thực tế:</strong> Các kích thước độ dài $x$ luôn phải dương ($x > 0$) và bị chặn bởi kích thước tấm vật liệu ban đầu.</li>
            <li><strong>Tính chất hàm số trên một khoảng:</strong> Nếu hàm số $f(x)$ liên tục trên khoảng $(a; b)$ và chỉ có DUY NHẤT một điểm tới hạn $x_0$ mà tại đó là điểm cực đại (cực tiểu), thì $f(x_0)$ chính là GTLN (GTNN) trên toàn khoảng $(a; b)$.</li>`,
            `<li>Quên kiểm tra điều kiện hình học dẫn đến chọn nghiệm ngoại lai (ví dụ chiều cao âm hoặc lớn hơn kích thước tấm tôn).</li>
            <li>Đọc nhầm yêu cầu: Đề bài hỏi "kích thước $x$" nhưng học sinh lại kết luận "thể tích $V$", hoặc ngược lại.</li>`,
            `<li><em>"Vẽ hình phác thảo – Đặt biến $x$ – Lập hàm mục tiêu $f(x)$ – Đạo hàm bằng 0 tìm cực trị tối ưu!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một người thợ muốn làm một chiếc hộp hình chữ nhật không nắp từ một tấm tôn hình vuông cạnh $60\\text{ cm}$ bằng cách cắt ở bốn góc bốn hình vuông cạnh $x\\text{ cm}$ rồi gập mép lên. Để thể tích chiếc hộp đạt giá trị lớn nhất, độ dài cạnh $x$ phải bằng:",
              options: ["A. $x = 10\\text{ cm}$", "B. $x = 15\\text{ cm}$", "C. $x = 20\\text{ cm}$", "D. $x = 12\\text{ cm}$"],
              correct: "A",
              explanation: "Sau khi cắt bỏ 4 góc cạnh $x$, đáy hộp là hình vuông cạnh $60 - 2x\\text{ cm}$ (điều kiện $0 < x < 30$), chiều cao hộp là $x$. Thể tích chiếc hộp là $V(x) = x(60 - 2x)^2 = 4x(30 - x)^2 = 4(x^3 - 60x^2 + 900x)$. Đạo hàm: $V'(x) = 4(3x^2 - 120x + 900) = 12(x^2 - 40x + 300) = 12(x - 10)(x - 30)$. Vì $x \\in (0; 30)$ nên nghiệm duy nhất là $x = 10$. Qua $x = 10$, $V'(x)$ đổi dấu từ dương sang âm nên $V(x)$ đạt GTLN tại $x = 10\\text{ cm}$.",
              hint1: "Đáy hộp là hình vuông cạnh $60 - 2x$ và chiều cao là $x$. Thiết lập hàm thể tích $V(x) = x(60 - 2x)^2$ với $0 < x < 30$.",
              hint2: "Tính đạo hàm $V'(x) = 12(x^2 - 40x + 300)$ rồi tìm nghiệm thuộc khoảng $(0; 30)$."
            },
            {
              question: "Một người nông dân có $100\\text{ m}$ lưới thép muốn rào một khu đất hình chữ nhật sát một bờ tường thẳng (bờ tường không cần rào). Diện tích lớn nhất của mảnh đất rào được là:",
              options: ["A. $1250\\text{ m}^2$", "B. $2500\\text{ m}^2$", "C. $625\\text{ m}^2$", "D. $1200\\text{ m}^2$"],
              correct: "A",
              explanation: "Gọi hai cạnh vuông góc với bờ tường có độ dài là $x\\text{ m}$ ($0 < x < 50$). Chiều dài cạnh song song với tường là $100 - 2x\\text{ m}$. Diện tích khu đất là $S(x) = x(100 - 2x) = 100x - 2x^2$. Ta có $S'(x) = 100 - 4x = 0 \\Leftrightarrow x = 25$. Diện tích lớn nhất đạt được là $S(25) = 25(100 - 50) = 1250\\text{ m}^2$.",
              hint1: "Khu đất rào 3 phía: 2 cạnh chiều rộng $x$ và 1 cạnh chiều dài $100 - 2x$. Diện tích là $S(x) = x(100 - 2x)$.",
              hint2: "Đạo hàm $S'(x) = 100 - 4x = 0$ cho $x = 25$. Thay $x = 25$ tính $S(25)$."
            },
            {
              question: "Một lon nước ngọt hình trụ bằng nhôm có thể tích không đổi $V = 500\\pi\\text{ cm}^3$. Để diện tích toàn phần của lon nước (tức lượng nhôm dùng ít nhất) đạt giá trị nhỏ nhất thì bán kính đáy $R$ bằng:",
              options: ["A. $R = 5\\sqrt[3]{2}\\text{ cm}$", "B. $R = 5\\text{ cm}$", "C. $R = 10\\text{ cm}$", "D. $R = 5\\sqrt{2}\\text{ cm}$"],
              correct: "A",
              explanation: "Thể tích lon: $V = \\pi R^2 h = 500\\pi \\Rightarrow h = \\frac{500}{R^2}$. Diện tích toàn phần: $S_{tp} = 2\\pi R^2 + 2\\pi R h = 2\\pi R^2 + 2\\pi R \\cdot \\frac{500}{R^2} = 2\\pi R^2 + \\frac{1000\\pi}{R}$. Đạo hàm theo $R$: $S'_{tp} = 4\\pi R - \\frac{1000\\pi}{R^2} = 0 \\Leftrightarrow 4R^3 = 1000 \\Leftrightarrow R^3 = 250 = 125 \\times 2 \\Leftrightarrow R = 5\\sqrt[3]{2}\\text{ cm}$.",
              hint1: "Biểu diễn chiều cao $h = \\frac{V}{\\pi R^2}$ theo bán kính $R$, sau đó thay vào diện tích toàn phần $S_{tp} = 2\\pi R^2 + 2\\pi Rh$.",
              hint2: "Giải phương trình đạo hàm $S'_{tp}(R) = 4\\pi R - \\frac{1000\\pi}{R^2} = 0$ ta được $R^3 = 250$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Bài toán tối ưu hoá trong kinh tế, kinh doanh và tài chính",
          theory: createStandardTheoryHTML(
            "Bài 5: Ứng dụng đạo hàm để giải quyết một số bài toán thực tiễn", "Lớp 12", 2,
            "Bài toán tối ưu hoá trong kinh tế, kinh doanh và tài chính",
            `<p>Trong hoạt động kinh tế sản xuất, đạo hàm là công cụ đắc lực để tối đa hoá lợi nhuận và tối thiểu hoá chi phí:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hàm doanh thu:</strong> $R(x) = x \\cdot p(x)$, trong đó $x$ là số lượng sản phẩm tiêu thụ, $p(x)$ là giá bán một sản phẩm.</li>
              <li><strong>Hàm chi phí:</strong> $C(x)$ là tổng chi phí sản xuất $x$ sản phẩm. Chi phí biên là $C'(x)$.</li>
              <li><strong>Hàm lợi nhuận:</strong> $P(x) = R(x) - C(x)$. Lợi nhuận đạt cực đại khi $P'(x) = 0 \\Leftrightarrow R'(x) = C'(x)$ (doanh thu biên bằng chi phí biên).</li>
              <li><strong>Chi phí trung bình:</strong> $\\bar{C}(x) = \\frac{C(x)}{x}$. Chi phí trung bình đạt giá trị nhỏ nhất khi $\\bar{C}'(x) = 0$.</li>
            </ul>`,
            `<li>Lợi nhuận cực đại xảy ra khi doanh thu biên bằng chi phí biên: $R'(x) = C'(x)$.</li>
            <li>Số lượng sản phẩm $x$ trong kinh tế luôn là số nguyên không âm ($x \\in \\mathbb{N}^*$). Sau khi tìm nghiệm cực trị liên tục, nếu $x$ không nguyên thì ta so sánh giá trị tại hai số nguyên liền kề.</li>`,
            `<li>Nhầm lẫn giữa doanh thu $R(x)$ và lợi nhuận $P(x)$ ($P(x) = R(x) - C(x)$).</li>
            <li>Quên trừ đi chi phí cố định trong hàm chi phí khi tính toán.</li>`,
            `<li><em>"Doanh thu trừ Chi phí ra Lợi nhuận – Đạo hàm bằng 0: Doanh thu biên cân bằng Chi phí biên!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một công ty sản xuất sản phẩm với hàm chi phí tổng cộng là $C(x) = 50 + 20x + 0.5x^2$ (triệu đồng) và giá bán mỗi sản phẩm phụ thuộc vào số lượng bán ra theo hàm $p(x) = 100 - x$ (triệu đồng). Số sản phẩm $x$ cần sản xuất để công ty đạt lợi nhuận tối đa là:",
              options: ["A. $x = 26$", "B. $x = 27$", "C. $x = 28$", "D. $x = 30$"],
              correct: "B",
              explanation: "Hàm doanh thu: $R(x) = x \\cdot p(x) = 100x - x^2$. Hàm lợi nhuận: $P(x) = R(x) - C(x) = (100x - x^2) - (50 + 20x + 0.5x^2) = -1.5x^2 + 80x - 50$. Đạo hàm: $P'(x) = -3x + 80 = 0 \\Leftrightarrow x = \\frac{80}{3} \\approx 26.67$. Vì $x$ là số nguyên, ta so sánh $P(26) = -1.5(26)^2 + 80(26) - 50 = 1016$ và $P(27) = -1.5(27)^2 + 80(27) - 50 = 1016.5$. Vậy lợi nhuận tối đa khi sản xuất $x = 27$ sản phẩm.",
              hint1: "Lập hàm lợi nhuận $P(x) = R(x) - C(x) = x(100 - x) - (50 + 20x + 0.5x^2) = -1.5x^2 + 80x - 50$.",
              hint2: "Đạo hàm $P'(x) = -3x + 80 = 0 \\Rightarrow x = \\frac{80}{3} \\approx 26.67$. Kiểm tra hai số nguyên liền kề $x = 26$ và $x = 27$."
            },
            {
              question: "Một xưởng may sản xuất $x$ áo sơ mi mỗi ngày với hàm chi phí trung bình $\\bar{C}(x) = 2x + \\frac{1800}{x} + 50$ (nghìn đồng). Để chi phí trung bình trên mỗi chiếc áo là thấp nhất, xưởng cần may mỗi ngày số áo là:",
              options: ["A. $30$ áo", "B. $20$ áo", "C. $40$ áo", "D. $50$ áo"],
              correct: "A",
              explanation: "Ta có $\\bar{C}'(x) = 2 - \\frac{1800}{x^2} = 0 \\Leftrightarrow 2x^2 = 1800 \\Leftrightarrow x^2 = 900 \\Leftrightarrow x = 30$ (vì $x > 0$). Với $x = 30$, chi phí trung bình là nhỏ nhất.",
              hint1: "Tính đạo hàm của hàm chi phí trung bình $\\bar{C}'(x) = 2 - \\frac{1800}{x^2}$.",
              hint2: "Cho $\\bar{C}'(x) = 0 \\Rightarrow 2x^2 = 1800 \\Rightarrow x = 30$."
            },
            {
              question: "Một công ty du lịch ước tính: nếu giá tour là $2$ triệu đồng thì có $150$ khách đăng ký. Cứ mỗi lần giảm giá tour $100$ nghìn đồng ($0.1$ triệu) thì số khách tăng thêm $20$ người. Giá tour để công ty thu được tổng doanh thu lớn nhất là:",
              options: ["A. $1.375$ triệu đồng", "B. $1.4$ triệu đồng", "C. $1.5$ triệu đồng", "D. $1.6$ triệu đồng"],
              correct: "A",
              explanation: "Gọi $x$ là số lần giảm giá $100$ nghìn đồng ($x > 0$). Giá vé sau giảm: $p(x) = 2 - 0.1x$ (triệu đồng). Số khách đăng ký: $N(x) = 150 + 20x$. Doanh thu: $R(x) = p(x) \\cdot N(x) = (2 - 0.1x)(150 + 20x) = 300 + 40x - 15x - 2x^2 = -2x^2 + 25x + 300$. Đạo hàm $R'(x) = -4x + 25 = 0 \\Leftrightarrow x = 6.25$. Khi đó giá tour tối ưu là $p(6.25) = 2 - 0.1(6.25) = 2 - 0.625 = 1.375$ triệu đồng (tức $1.375.000$ đồng).",
              hint1: "Gọi số lần giảm giá là $x$. Giá tour là $2 - 0.1x$, số khách là $150 + 20x$.",
              hint2: "Doanh thu $R(x) = (2 - 0.1x)(150 + 20x) = -2x^2 + 25x + 300$. Cực đại tại $x = \\frac{25}{4} = 6.25$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét bài toán làm bể cá hình hộp chữ nhật không nắp có thể tích $V = 4\\text{ m}^3$, đáy là hình chữ nhật có chiều dài gấp đôi chiều rộng. Gọi chiều rộng đáy là $x$ ($x > 0$).",
          items: [
            { key: "a", text: "Chiều dài của đáy bể cá là $2x$.", correct: "true", explain: "Theo giả thiết, đáy là hình chữ nhật có chiều dài gấp đôi chiều rộng nên chiều dài là $2x$." },
            { key: "b", text: "Chiều cao của bể cá là $h = \\frac{2}{x^2}$.", correct: "true", explain: "Thể tích $V = x \\cdot 2x \\cdot h = 2x^2 h = 4 \\Rightarrow h = \\frac{4}{2x^2} = \\frac{2}{x^2}$." },
            { key: "c", text: "Diện tích kính cần dùng (không nắp) là $S(x) = 2x^2 + \\frac{6}{x}$.", correct: "false", explain: "Diện tích kính gồm 1 đáy và 4 mặt bên: $S(x) = 2x^2 + 2(x \\cdot h + 2x \\cdot h) = 2x^2 + 6xh = 2x^2 + 6x \\cdot \\frac{2}{x^2} = 2x^2 + \\frac{12}{x}$." },
            { key: "d", text: "Diện tích kính ít nhất khi chiều rộng đáy $x = \\sqrt[3]{3}\\text{ m}$.", correct: "true", explain: "Đạo hàm $S'(x) = 4x - \\frac{12}{x^2} = 0 \\Leftrightarrow 4x^3 = 12 \\Leftrightarrow x^3 = 3 \\Leftrightarrow x = \\sqrt[3]{3}\\text{ m}$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Một doanh nghiệp sản xuất một loại hàng hoá độc quyền với hàm cầu $p = 120 - 2x$ và hàm tổng chi phí $C(x) = x^2 + 30x + 100$ ($x$ là số lượng sản phẩm).",
          items: [
            { key: "a", text: "Hàm doanh thu của doanh nghiệp là $R(x) = 120x - 2x^2$.", correct: "true", explain: "Doanh thu $R(x) = x \\cdot p = x(120 - 2x) = 120x - 2x^2$." },
            { key: "b", text: "Hàm lợi nhuận là $P(x) = -3x^2 + 90x - 100$.", correct: "true", explain: "$P(x) = R(x) - C(x) = (120x - 2x^2) - (x^2 + 30x + 100) = -3x^2 + 90x - 100$." },
            { key: "c", text: "Doanh nghiệp đạt lợi nhuận tối đa khi bán ra $x = 15$ sản phẩm.", correct: "true", explain: "$P'(x) = -6x + 90 = 0 \\Leftrightarrow x = 15$. Tại $x = 15$, $P''(15) = -6 < 0$ nên đạt cực đại." },
            { key: "d", text: "Lợi nhuận tối đa của doanh nghiệp là $600$ triệu đồng.", correct: "false", explain: "$P(15) = -3(15)^2 + 90(15) - 100 = -675 + 1350 - 100 = 575$ triệu đồng $\\neq 600$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một tấm kim loại hình chữ nhật kích thước $30\\text{ cm} \\times 80\\text{ cm}$ được cuộn tròn lại thành mặt xung quanh của một ống hình trụ.",
          items: [
            { key: "a", text: "Nếu lấy cạnh $80\\text{ cm}$ làm chiều cao hình trụ thì chu vi đáy hình trụ là $30\\text{ cm}$.", correct: "true", explain: "Cạnh $30\\text{ cm}$ cuộn thành chu vi đường tròn đáy." },
            { key: "b", text: "Bán kính đáy của hình trụ trong trường hợp này là $R = \\frac{15}{\\pi}\\text{ cm}$.", correct: "true", explain: "Chu vi $2\\pi R = 30 \\Rightarrow R = \\frac{15}{\\pi}\\text{ cm}$." },
            { key: "c", text: "Thể tích của hình trụ khi lấy cạnh $80\\text{ cm}$ làm chiều cao là $V_1 = \\frac{18000}{\\pi}\\text{ cm}^3$.", correct: "true", explain: "$V_1 = \\pi R^2 h = \\pi \\left(\\frac{15}{\\pi}\\right)^2 \\cdot 80 = \\frac{225}{\\pi} \\cdot 80 = \\frac{18000}{\\pi}\\text{ cm}^3$." },
            { key: "d", text: "Thể tích ống trụ khi lấy cạnh $30\\text{ cm}$ làm chiều cao nhỏ hơn $V_1$.", correct: "false", explain: "Nếu lấy chiều cao $h_2 = 30$, chu vi đáy là $80 \\Rightarrow R_2 = \\frac{40}{\\pi} \\Rightarrow V_2 = \\pi \\left(\\frac{40}{\\pi}\\right)^2 \\cdot 30 = \\frac{48000}{\\pi} > V_1$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét bài toán đưa dòng điện từ trạm biến áp $A$ trên bờ sông đến nhà máy $B$ ở bên kia sông rộng $3\\text{ km}$, biết khoảng cách bờ đối diện $A$ tới $B$ là $8\\text{ km}$. Chi phí đặt cáp ngầm dưới nước là $50$ triệu/km, chi phí đặt cáp trên đất liền là $30$ triệu/km.",
          items: [
            { key: "a", text: "Nếu cáp đi hoàn toàn dưới nước thẳng từ $A$ đến $B$ thì chiều dài cáp là $\\sqrt{73}\\text{ km}$.", correct: "true", explain: "Khoảng cách $AB = \\sqrt{3^2 + 8^2} = \\sqrt{9 + 64} = \\sqrt{73}\\text{ km}$." },
            { key: "b", text: "Gọi $x$ ($0 \\le x \\le 8$) là khoảng cách từ hình chiếu của $A$ trên bờ đối diện đến điểm cáp cập bờ. Chiều dài cáp dưới nước là $\\sqrt{x^2 + 9}$.", correct: "true", explain: "Theo định lí Pythagore: cạnh huyền là $\\sqrt{3^2 + x^2} = \\sqrt{x^2 + 9}$." },
            { key: "c", text: "Tổng chi phí lắp đặt cáp là hàm số $f(x) = 50\\sqrt{x^2 + 9} + 30(8 - x)$ (triệu đồng).", correct: "true", explain: "Chi phí dưới nước là $50\\sqrt{x^2+9}$, trên bờ là $30(8-x)$." },
            { key: "d", text: "Chi phí nhỏ nhất khi cáp cập bờ tại điểm cách hình chiếu của $A$ một đoạn $x = 2.25\\text{ km}$.", correct: "true", explain: "$f'(x) = \\frac{50x}{\\sqrt{x^2+9}} - 30 = 0 \\Leftrightarrow 50x = 30\\sqrt{x^2+9} \\Leftrightarrow 5x = 3\\sqrt{x^2+9} \\Leftrightarrow 25x^2 = 9(x^2+9) \\Leftrightarrow 16x^2 = 81 \\Leftrightarrow x = \\frac{9}{4} = 2.25\\text{ km}$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Một cửa hàng bán gạo dự đoán nếu bán với giá $15000$ đồng/kg thì bán được $2000\\text{ kg}$ mỗi ngày. Mỗi khi tăng giá thêm $1000$ đồng/kg thì lượng bán giảm $100\\text{ kg}$. Giá vốn nhập vào là $10000$ đồng/kg.",
          items: [
            { key: "a", text: "Nếu tăng giá $x$ nghìn đồng/kg thì giá bán mới là $15 + x$ (nghìn đồng/kg).", correct: "true", explain: "Giá bán mới là $15 + x$ nghìn đồng/kg." },
            { key: "b", text: "Lợi nhuận trên mỗi kilôgam gạo sau khi tăng giá là $5 + x$ (nghìn đồng).", correct: "true", explain: "Lợi nhuận trên 1 kg: $(15 + x) - 10 = 5 + x$ nghìn đồng." },
            { key: "c", text: "Lượng gạo bán ra mỗi ngày khi tăng giá là $2000 - 100x$ (kg) với $0 < x < 20$.", correct: "true", explain: "Mỗi nghìn đồng tăng làm giảm $100\\text{ kg}$ gạo nên lượng bán là $2000 - 100x$." },
            { key: "d", text: "Cửa hàng nên tăng giá thêm $10$ nghìn đồng/kg để lợi nhuận thu về là lớn nhất.", correct: "false", explain: "Tổng lợi nhuận $P(x) = (5 + x)(2000 - 100x) = 100(5 + x)(20 - x) = 100(-x^2 + 15x + 100)$. $P'(x) = 100(-2x + 15) = 0 \\Leftrightarrow x = 7.5$ nghìn đồng (không phải $10$ nghìn đồng)." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Một giọt nước hình cầu bay trong không khí bị bốc hơi sao cho tốc độ giảm thể tích tỉ lệ thuận với diện tích bề mặt của nó: $\\frac{dV}{dt} = -k S$ ($k > 0$ là hằng số).",
          items: [
            { key: "a", text: "Thể tích giọt nước bán kính $R$ là $V = \\frac{4}{3}\\pi R^3$.", correct: "true", explain: "Công thức thể tích hình cầu $V = \\frac{4}{3}\\pi R^3$." },
            { key: "b", text: "Diện tích bề mặt của giọt nước là $S = 4\\pi R^2$.", correct: "true", explain: "Công thức diện tích mặt cầu $S = 4\\pi R^2$." },
            { key: "c", text: "Tốc độ thay đổi của bán kính theo thời gian $\\frac{dR}{dt}$ luôn là một hằng số âm.", correct: "true", explain: "Ta có $\\frac{dV}{dt} = 4\\pi R^2 \\frac{dR}{dt} = S \\frac{dR}{dt}$. Mà $\\frac{dV}{dt} = -kS \\Rightarrow S \\frac{dR}{dt} = -kS \\Rightarrow \\frac{dR}{dt} = -k$ (hằng số âm)." },
            { key: "d", text: "Bán kính của giọt nước giảm theo hàm số bậc hai theo thời gian $t$.", correct: "false", explain: "Vì $\\frac{dR}{dt} = -k$ nên $R(t) = R_0 - kt$, tức bán kính giảm tuyến tính (bậc nhất) theo thời gian, không phải bậc hai." }
          ]
        }
      ]
    },

    // BÀI 6: VECTƠ TRONG KHÔNG GIAN (HÌNH HỌC KHÔNG GIAN THUẦN TUÝ - KHÔNG LẪN TOẠ ĐỘ OXYZ)
    "toan12_bai6": {
      id: "toan12_bai6",
      lessonTitle: "Bài 6: Vectơ trong không gian",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 6:") || t.includes("vectơ trong không gian") || t.includes("vecto trong khong gian")) && !t.includes("toạ độ") && !t.includes("hệ trục");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm vectơ trong không gian và các phép toán vectơ",
          theory: createStandardTheoryHTML(
            "Bài 6: Vectơ trong không gian", "Lớp 12", 1,
            "Khái niệm vectơ trong không gian và các phép toán vectơ",
            `<p>Vectơ trong không gian là một đoạn thẳng có hướng. Các phép toán vectơ trong mặt phẳng vẫn giữ nguyên giá trị trong không gian, bổ sung quy tắc hình hộp và điều kiện ba vectơ đồng phẳng:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Quy tắc ba điểm (Tam giác):</strong> Với ba điểm $A, B, C$ bất kì trong không gian: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.</li>
              <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.</li>
              <li><strong>Quy tắc hình hộp:</strong> Cho hình hộp $ABCD.A'B'C'D'$. Khi đó tổng ba vectơ xuất phát từ đỉnh $A$ bằng vectơ đường chéo xuất phát từ $A$:
                $$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$$
              </li>
              <li><strong>Điều kiện ba vectơ đồng phẳng:</strong> Trong không gian, ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ (với $\\vec{a}, \\vec{b}$ không cùng phương) đồng phẳng khi và chỉ khi tồn tại duy nhất cặp số thực $(m; n)$ sao cho:
                $$\\vec{c} = m\\vec{a} + n\\vec{b}$$
              </li>
            </ul>`,
            `<li>Quy tắc hình hộp chỉ áp dụng cho hình hộp và 3 vectơ phải chung gốc đỉnh $A$: cạnh dài + cạnh rộng + cạnh cao = đường chéo chính.</li>
            <li>Ba vectơ có giá song song hoặc nằm trong cùng một mặt phẳng thì được gọi là đồng phẳng.</li>`,
            `<li>Nhầm lẫn giữa quy tắc hình bình hành (mặt phẳng đáy $\\vec{AB} + \\vec{AD} = \\vec{AC}$) với quy tắc hình hộp ($\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$).</li>
            <li>Tự ý đưa toạ độ $(x; y; z)$ vào khi đề bài đang ở dạng hình học thuần túy của Bài 6.</li>`,
            `<li><em>"Ba cạnh chung gốc hình hộp gom về một mối – Tổng ba vectơ cạnh bằng vectơ đường chéo đối diện!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hình hộp $ABCD.A'B'C'D'$. Đẳng thức vectơ nào sau đây là ĐÚNG theo quy tắc hình hộp?",
              options: [
                "A. $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$",
                "B. $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC}$",
                "C. $\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AC'}$",
                "D. $\\vec{AB} + \\vec{AD} + \\vec{A'C'} = \\vec{0}$"
              ],
              correct: "A",
              explanation: "Theo định lí quy tắc hình hộp chuẩn SGK Kết nối tri thức: Tổng ba vectơ xuất phát từ đỉnh $A$ dọc theo ba cạnh của hình hộp bằng vectơ đường chéo xuất phát từ đỉnh đó: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.",
              hint1: "Quy tắc hình hộp phát biểu: Tổng ba vectơ xuất phát từ một đỉnh bằng vectơ đường chéo chính của hình hộp xuất phát từ đỉnh đó.",
              hint2: "Đỉnh xuất phát là $A$, đường chéo đối diện xuất phát từ $A$ là $\\vec{AC'}$."
            },
            {
              question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Đẳng thức nào sau đây đúng?",
              options: [
                "A. $\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$",
                "B. $\\vec{MN} = \\vec{AD} + \\vec{BC}$",
                "C. $\\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$",
                "D. Cả A và C đều đúng"
              ],
              correct: "D",
              explanation: "Ta có $\\vec{MN} = \\vec{MA} + \\vec{AD} + \\vec{DN}$ và $\\vec{MN} = \\vec{MB} + \\vec{BC} + \\vec{CN}$. Cộng hai vế: $2\\vec{MN} = (\\vec{MA} + \\vec{MB}) + (\\vec{AD} + \\vec{BC}) + (\\vec{DN} + \\vec{CN})$. Vì $M, N$ là trung điểm nên $\\vec{MA} + \\vec{MB} = \\vec{0}$ và $\\vec{DN} + \\vec{CN} = \\vec{0}$. Suy ra $\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$. Tương tự: $\\vec{MN} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$. Do đó cả A và C đều đúng.",
              hint1: "Chèn điểm $A, D$ vào vectơ $\\vec{MN}$ và chèn điểm $B, C$ vào $\\vec{MN}$ rồi cộng vế theo vế.",
              hint2: "Vì $M, N$ là trung điểm nên tổng các vectơ đối bằng $\\vec{0}$. Kết quả suy ra $\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC}) = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$."
            },
            {
              question: "Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ không đồng phẳng. Điều kiện cần và đủ để vectơ $\\vec{d} = m\\vec{a} + n\\vec{b} + p\\vec{c}$ cùng phương với vectơ $\\vec{a}$ là:",
              options: ["A. $n = p = 0$ và $m \\neq 0$", "B. $m = 0$", "C. $n = 0$", "D. $m = n = p = 0$"],
              correct: "A",
              explanation: "Vectơ $\\vec{d}$ cùng phương với $\\vec{a}$ khi $\\vec{d} = k\\vec{a}$ ($k \\neq 0$). Do $\\vec{a}, \\vec{b}, \\vec{c}$ không đồng phẳng nên phân tích là duy nhất: $m = k \\neq 0$ và $n = p = 0$.",
              hint1: "Vectơ cùng phương với $\\vec{a}$ phải có dạng $k\\vec{a}$ ($k \\neq 0$).",
              hint2: "Vì ba vectơ cơ sở không đồng phẳng nên hệ số của $\\vec{b}$ và $\\vec{c}$ bắt buộc phải đồng thời bằng 0."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tích vô hướng của hai vectơ trong không gian",
          theory: createStandardTheoryHTML(
            "Bài 6: Vectơ trong không gian", "Lớp 12", 2,
            "Tích vô hướng của hai vectơ trong không gian",
            `<p>Tích vô hướng là công cụ mạnh mẽ để tính góc và chứng minh quan hệ vuông góc trong hình học không gian:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Góc giữa hai vectơ:</strong> Cho hai vectơ $\\vec{u}, \\vec{v} \\neq \\vec{0}$. Lấy điểm $A$ tùy ý, vẽ $\\vec{AB} = \\vec{u}$ và $\\vec{AC} = \\vec{v}$. Khi đó $\\widehat{BAC} = (\\vec{u}, \\vec{v})$ với $0^\\circ \\le (\\vec{u}, \\vec{v}) \\le 180^\\circ$.</li>
              <li><strong>Định nghĩa tích vô hướng:</strong>
                $$\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$$
              </li>
              <li><strong>Điều kiện hai vectơ vuông góc:</strong>
                $$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$$
              </li>
              <li><strong>Bình phương vô hướng:</strong> $\\vec{u}^2 = |\\vec{u}|^2$. Độ dài: $|\\vec{u}| = \\sqrt{\\vec{u}^2}$.</li>
            </ul>`,
            `<li>Góc giữa hai vectơ có thể là góc tù ($> 90^\\circ$), trong khi góc giữa hai đường thẳng luôn là góc nhọn hoặc vuông ($\\le 90^\\circ$).</li>
            <li>Khi tính góc giữa $\\vec{AB}$ và $\\vec{CD}$, phải đưa về cùng gốc hoặc sử dụng tính chất vectơ đối: $(\\vec{AB}, \\vec{CD}) = 180^\\circ - (\\vec{AB}, \\vec{DC})$.</li>`,
            `<li>Nhầm giữa tích vô hướng (ra một SỐ) với tích có hướng (ra một VECTƠ).</li>
            <li>Quên nhân với $\\cos$ của góc giữa hai vectơ khi áp dụng công thức.</li>`,
            `<li><em>"Tích vô hướng bằng Tích độ dài nhân Cosin góc kẹp giữa – Bằng 0 khi và chỉ khi hai vectơ vuông góc!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Giá trị của tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
              options: ["A. $\\frac{a^2}{2}$", "B. $-\\frac{a^2}{2}$", "C. $\\frac{a^2\\sqrt{3}}{2}$", "D. $a^2$"],
              correct: "A",
              explanation: "Tam giác $ABC$ là tam giác đều cạnh $a$ nên $|\vec{AB}| = a, |\vec{AC}| = a$ và góc $(\vec{AB}, \vec{AC}) = \widehat{BAC} = 60^\circ$. Áp dụng công thức: $\vec{AB} \cdot \vec{AC} = |\vec{AB}| \cdot |\vec{AC}| \cdot \cos 60^\circ = a \cdot a \cdot \frac{1}{2} = \frac{a^2}{2}$.",
              hint1: "Tam giác $ABC$ là tam giác đều vì tứ diện $ABCD$ là tứ diện đều cạnh $a$.",
              hint2: "Góc giữa hai vectơ chung gốc $A$ là góc $\widehat{BAC} = 60^\circ$. Tính $a \cdot a \cdot \cos 60^\circ$."
            },
            {
              question: "Cho tứ diện đều $ABCD$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{CD}$ bằng:",
              options: ["A. $90^\\circ$", "B. $60^\\circ$", "C. $45^\\circ$", "D. $120^\\circ$"],
              correct: "A",
              explanation: "Ta tính tích vô hướng $\\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC}$. Vì các mặt là tam giác đều cạnh $a$: $\\vec{AB} \\cdot \\vec{AD} = a^2 \\cos 60^\\circ = \\frac{a^2}{2}$ và $\\vec{AB} \\cdot \\vec{AC} = a^2 \\cos 60^\\circ = \\frac{a^2}{2}$. Do đó $\\vec{AB} \\cdot \\vec{CD} = \\frac{a^2}{2} - \\frac{a^2}{2} = 0$. Suy ra $\\vec{AB} \\perp \\vec{CD}$, góc giữa chúng bằng $90^\\circ$.",
              hint1: "Biểu diễn $\\vec{CD} = \\vec{AD} - \\vec{AC}$ rồi nhân phân phối với $\\vec{AB}$.",
              hint2: "Nhận thấy $\\vec{AB} \\cdot \\vec{AD} = \\vec{AB} \\cdot \\vec{AC} = \\frac{a^2}{2}$, hiệu của chúng bằng $0$ nên hai vectơ vuông góc."
            },
            {
              question: "Cho hai vectơ $\\vec{u}, \\vec{v}$ thỏa mãn $|\\vec{u}| = 2, |\\vec{v}| = 3$ và góc $(\\vec{u}, \\vec{v}) = 120^\\circ$. Độ dài của vectơ $\\vec{u} + \\vec{v}$ bằng:",
              options: ["A. $\\sqrt{7}$", "B. $\\sqrt{19}$", "C. $\\sqrt{13}$", "D. $5$"],
              correct: "A",
              explanation: "Ta có $|\vec{u} + \vec{v}|^2 = (\vec{u} + \vec{v})^2 = \vec{u}^2 + 2\vec{u}\cdot\vec{v} + \vec{v}^2 = |\vec{u}|^2 + 2|\vec{u}||\vec{v}|\cos 120^\circ + |\vec{v}|^2 = 2^2 + 2(2)(3)(-\frac{1}{2}) + 3^2 = 4 - 6 + 9 = 7$. Suy ra $|\vec{u} + \vec{v}| = \sqrt{7}$.",
              hint1: "Khai triển bình phương vô hướng $|\vec{u} + \vec{v}|^2 = |\vec{u}|^2 + 2\vec{u} \cdot \vec{v} + |\vec{v}|^2$.",
              hint2: "Thay số: $4 + 2(2)(3)(-\frac{1}{2}) + 9 = 7$. Lấy căn bậc hai."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$.",
          items: [
            { key: "a", text: "$\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$.", correct: "true", explain: "Quy tắc hình hộp cho hình lập phương." },
            { key: "b", text: "Độ dài vectơ $\\vec{AC'}$ bằng $a\\sqrt{3}$.", correct: "true", explain: "Độ dài đường chéo hình lập phương cạnh $a$ là $a\\sqrt{3}$." },
            { key: "c", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{B'C'} = 0$.", correct: "true", explain: "$\\vec{B'C'} = \\vec{AD}$, mà $AB \\perp AD$ nên $\\vec{AB} \\cdot \\vec{AD} = 0$." },
            { key: "d", text: "Góc giữa hai vectơ $\\vec{AC}$ và $\\vec{A'D'}$ bằng $45^\\circ$.", correct: "true", explain: "$\\vec{A'D'} = \\vec{AD}$. Góc $(\\vec{AC}, \\vec{AD}) = \\widehat{CAD} = 45^\\circ$ vì đáy $ABCD$ là hình vuông." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc và $OA = OB = OC = a$.",
          items: [
            { key: "a", text: "$\\vec{OA} \\cdot \\vec{OB} = 0$ và $\\vec{OB} \\cdot \\vec{OC} = 0$.", correct: "true", explain: "Vì $OA, OB, OC$ đôi một vuông góc nên tích vô hướng giữa chúng bằng $0$." },
            { key: "b", text: "Độ dài vectơ $\\vec{AB} = \\vec{OB} - \\vec{OA}$ bằng $a\\sqrt{2}$.", correct: "true", explain: "Tam giác $OAB$ vuông cân tại $O$ nên $AB = \\sqrt{OA^2 + OB^2} = a\\sqrt{2}$." },
            { key: "c", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = a^2$.", correct: "true", explain: "$\\vec{AB} \\cdot \\vec{AC} = (\\vec{OB} - \\vec{OA}) \\cdot (\\vec{OC} - \\vec{OA}) = \\vec{OB}\\cdot\\vec{OC} - \\vec{OB}\\cdot\\vec{OA} - \\vec{OA}\\cdot\\vec{OC} + \\vec{OA}^2 = 0 - 0 - 0 + a^2 = a^2$." },
            { key: "d", text: "Tam giác $ABC$ là tam giác đều cạnh $a\\sqrt{2}$.", correct: "true", explain: "$AB = BC = CA = a\\sqrt{2}$ nên $ABC$ là tam giác đều." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ trong không gian.",
          items: [
            { key: "a", text: "Nếu $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}$ và $\\vec{a} \\neq \\vec{0}$ thì $\\vec{b} = \\vec{c}$.", correct: "false", explain: "Sai, vì $\\vec{a} \\cdot (\\vec{b} - \\vec{c}) = 0$ chỉ suy ra $\\vec{a} \\perp (\\vec{b} - \\vec{c})$, không nhất thiết $\\vec{b} = \\vec{c}$." },
            { key: "b", text: "Nếu ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ có giá cùng song song với một mặt phẳng thì chúng đồng phẳng.", correct: "true", explain: "Định nghĩa chuẩn về ba vectơ đồng phẳng trong SGK." },
            { key: "c", text: "Mọi vectơ trong không gian đều biểu diễn duy nhất qua ba vectơ không đồng phẳng cho trước.", correct: "true", explain: "Định lí cơ bản về phân tích một vectơ theo ba vectơ không đồng phẳng." },
            { key: "d", text: "Nếu $\\vec{a} \\cdot \\vec{b} < 0$ thì góc giữa $\\vec{a}$ và $\\vec{b}$ là góc nhọn.", correct: "false", explain: "$\\vec{a} \\cdot \\vec{b} < 0 \\Leftrightarrow \\cos(\\vec{a}, \\vec{b}) < 0$, suy ra góc giữa chúng là góc TÙ ($> 90^\\circ$)." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $G, G'$ lần lượt là trọng tâm tam giác $ABC$ và $A'B'C'$.",
          items: [
            { key: "a", text: "$\\vec{AA'} + \\vec{BB'} + \\vec{CC'} = 3\\vec{GG'}$.", correct: "true", explain: "Vì $\\vec{AA'} = \\vec{BB'} = \\vec{CC'} = \\vec{GG'}$ nên tổng của 3 vectơ bằng $3\\vec{GG'}$." },
            { key: "b", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", correct: "true", explain: "Tính chất trọng tâm tam giác trong không gian." },
            { key: "c", text: "$\\vec{A'B'} + \\vec{B'C'} + \\vec{C'A'} = \\vec{0}$.", correct: "true", explain: "Quy tắc cộng vectơ khép kín tam giác." },
            { key: "d", text: "Ba vectơ $\\vec{AA'}, \\vec{AB}, \\vec{AC}$ đồng phẳng.", correct: "false", explain: "Không đồng phẳng vì đỉnh $A'$ không nằm trong mặt phẳng $(ABC)$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hai vectơ $\\vec{u}, \\vec{v}$ có $|\\vec{u}| = 3, |\\vec{v}| = 4$ và $|\\vec{u} + \\vec{v}| = 5$.",
          items: [
            { key: "a", text: "$|\\vec{u} + \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2$.", correct: "true", explain: "$5^2 = 3^2 + 4^2 = 25$." },
            { key: "b", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.", correct: "true", explain: "$|\\vec{u}+\\vec{v}|^2 = |\\vec{u}|^2 + 2\\vec{u}\\cdot\\vec{v} + |\\vec{v}|^2 = 25 \\Rightarrow 25 + 2\\vec{u}\\cdot\\vec{v} = 25 \\Rightarrow \\vec{u}\\cdot\\vec{v} = 0$." },
            { key: "c", text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.", correct: "true", explain: "Vì tích vô hướng bằng $0$." },
            { key: "d", text: "Độ dài vectơ $\\vec{u} - \\vec{v}$ bằng $1$.", correct: "false", explain: "$|\\vec{u} - \\vec{v}|^2 = |\\vec{u}|^2 - 2\\vec{u}\\cdot\\vec{v} + |\\vec{v}|^2 = 9 - 0 + 16 = 25 \\Rightarrow |\\vec{u}-\\vec{v}| = 5 \\neq 1$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Cho tứ diện $ABCD$. Gọi $I$ là trung điểm của $AB$ và $J$ là trung điểm của $CD$.",
          items: [
            { key: "a", text: "$\\vec{IA} + \\vec{IB} = \\vec{0}$.", correct: "true", explain: "$I$ là trung điểm $AB$." },
            { key: "b", text: "$\\vec{JC} + \\vec{JD} = \\vec{0}$.", correct: "true", explain: "$J$ là trung điểm $CD$." },
            { key: "c", text: "$\\vec{IJ} = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$.", correct: "true", explain: "Hệ quả cộng vectơ đối với đoạn nối trung điểm." },
            { key: "d", text: "$\\vec{IJ} = \\frac{1}{2}(\\vec{AD} - \\vec{BC})$.", correct: "false", explain: "Công thức đúng phải là $\\vec{IJ} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$, mang dấu cộng." }
          ]
        }
      ]
    },

    // BÀI 11: NGUYÊN HÀM
    "toan12_bai11": {
      id: "toan12_bai11",
      lessonTitle: "Bài 11: Nguyên hàm",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 11:") || t.includes("nguyên hàm") || t.includes("nguyen ham")) && !t.includes("tích phân");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm nguyên hàm và các tính chất cơ bản",
          theory: createStandardTheoryHTML(
            "Bài 11: Nguyên hàm", "Lớp 12", 1,
            "Khái niệm nguyên hàm và các tính chất cơ bản",
            `<p>Kiến thức trọng tâm chuẩn SGK Toán 12 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Cho hàm số $f(x)$ xác định trên khoảng hoặc đoạn $K$. Hàm số $F(x)$ được gọi là một <strong>nguyên hàm</strong> của $f(x)$ trên $K$ nếu:
                $$F'(x) = f(x), \\quad \\forall x \\in K$$
              </li>
              <li><strong>Định lí họ nguyên hàm:</strong> Nếu $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ thì mọi nguyên hàm của $f(x)$ đều có dạng $F(x) + C$ ($C \\in \\mathbb{R}$). Kí hiệu họ nguyên hàm:
                $$\\int f(x)dx = F(x) + C$$
              </li>
              <li><strong>Tính chất cơ bản của nguyên hàm:</strong>
                <br/>• $\\left(\\int f(x)dx\\right)' = f(x)$ và $\\int f'(x)dx = f(x) + C$.
                <br/>• $\\int k \\cdot f(x)dx = k \\int f(x)dx$ ($k \\neq 0$).
                <br/>• $\\int [f(x) \\pm g(x)]dx = \\int f(x)dx \\pm \\int g(x)dx$.
              </li>
            </ul>`,
            `<li>Họ nguyên hàm luôn phải có hằng số $+ C$.</li>
            <li>Hai nguyên hàm bất kì của cùng một hàm số trên khoảng $K$ luôn chỉ sai khác nhau một hằng số.</li>`,
            `<li>Đưa biến số $x$ ra ngoài dấu nguyên hàm (chỉ được đưa hằng số $k \\neq 0$ ra ngoài).</li>
            <li>Nhầm giữa phép tính đạo hàm và nguyên hàm.</li>`,
            `<li><em>\"Nguyên hàm là phép toán ngược đạo hàm – Đạo hàm của nguyên hàm bằng hàm số ban đầu!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Mệnh đề nào sau đây là ĐÚNG về định nghĩa nguyên hàm?",
              options: [
                "A. Nếu $F'(x) = f(x)$ thì $F(x)$ là một nguyên hàm của $f(x)$",
                "B. Nếu $f'(x) = F(x)$ thì $F(x)$ là một nguyên hàm của $f(x)$",
                "C. Mọi hàm số đều có duy nhất 1 nguyên hàm",
                "D. $\\int f(x)dx = F(x)$ không cần cộng hằng số $C$"
              ],
              correct: "A",
              explanation: "Theo định nghĩa SGK Kết nối tri thức: Hàm số $F(x)$ là một nguyên hàm của $f(x)$ trên $K$ nếu $F'(x) = f(x), \\forall x \\in K$.",
              hint1: "Định nghĩa: $F(x)$ là nguyên hàm của $f(x)$ khi lấy đạo hàm của $F(x)$ ra $f(x)$.",
              hint2: "Đẳng thức đúng là $F'(x) = f(x)$."
            },
            {
              question: "Khẳng định nào sau đây SAI về tính chất của nguyên hàm?",
              options: [
                "A. $\\int [f(x) \\cdot g(x)]dx = \\int f(x)dx \\cdot \\int g(x)dx$",
                "B. $\\int [f(x) + g(x)]dx = \\int f(x)dx + \\int g(x)dx$",
                "C. $\\int kf(x)dx = k\\int f(x)dx$ ($k \\neq 0$)",
                "D. $\\left(\\int f(x)dx\\right)' = f(x)$"
              ],
              correct: "A",
              explanation: "Nguyên hàm của một tích KHÔNG bằng tích các nguyên hàm: $\\int [f(x)g(x)]dx \\neq \\int f(x)dx \\cdot \\int g(x)dx$. Khẳng định A là sai.",
              hint1: "Xem lại tính chất tuyến tính của nguyên hàm (chỉ áp dụng cho tổng, hiệu và nhân hằng số).",
              hint2: "Không có tính chất nguyên hàm của tích bằng tích các nguyên hàm."
            },
            {
              question: "Cho hàm số $f(x) = 3x^2 + 2x$. Một nguyên hàm $F(x)$ của hàm số $f(x)$ là:",
              options: ["A. $F(x) = x^3 + x^2$", "B. $F(x) = 6x + 2$", "C. $F(x) = 3x^3 + 2x^2$", "D. $F(x) = x^3 + 2x^2$"],
              correct: "A",
              explanation: "Ta có $\\int (3x^2 + 2x)dx = 3 \\cdot \\frac{x^3}{3} + 2 \\cdot \\frac{x^2}{2} + C = x^3 + x^2 + C$. Chọn $C = 0$ ta được $F(x) = x^3 + x^2$.",
              hint1: "Tính nguyên hàm từng số hạng: $\\int 3x^2 dx = x^3$ và $\\int 2x dx = x^2$.",
              hint2: "Tổng là $x^3 + x^2$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Bảng nguyên hàm của một số hàm số sơ cấp và ứng dụng",
          theory: createStandardTheoryHTML(
            "Bài 11: Nguyên hàm", "Lớp 12", 2,
            "Bảng nguyên hàm của một số hàm số sơ cấp và ứng dụng",
            `<p>Bảng các nguyên hàm cơ bản chuẩn SGK Toán 12 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Lũy thừa:</strong> $\\int x^\\alpha dx = \\frac{x^{\\alpha + 1}}{\\alpha + 1} + C$ ($\\alpha \\neq -1$). $\\int \\frac{1}{x} dx = \\ln|x| + C$.</li>
              <li><strong>Mũ:</strong> $\\int e^x dx = e^x + C$, $\\quad \\int a^x dx = \\frac{a^x}{\\ln a} + C$ ($0 < a \\neq 1$).</li>
              <li><strong>Lượng giác:</strong>
                <br/>• $\\int \\cos x dx = \\sin x + C$
                <br/>• $\\int \\sin x dx = -\\cos x + C$
                <br/>• $\\int \\frac{1}{\\cos^2 x} dx = \\tan x + C$
                <br/>• $\\int \\frac{1}{\\sin^2 x} dx = -\\cot x + C$
              </li>
              <li><strong>Công thức mở rộng $f(ax + b)$:</strong> $\\int f(ax + b)dx = \\frac{1}{a} F(ax + b) + C$ ($a \\neq 0$).</li>
              <li><strong>Ứng dụng vật lý:</strong> Vận tốc $v(t) = \\int a(t)dt$, quãng đường $s(t) = \\int v(t)dt$.</li>
            </ul>`,
            `<li>SGK GDPT 2018 KHÔNG học nguyên hàm từng phần; chỉ tập trung bảng nguyên hàm và công thức $f(ax+b)$.</li>
            <li>Gặp biểu thức $ax + b$ phải nhân thêm hệ số $\\frac{1}{a}$.</li>`,
            `<li>Quên dấu âm khi tính nguyên hàm của $\\sin$: $\\int \\sin x dx = -\\cos x + C$.</li>
            <li>Quên dấu giá trị tuyệt đối: $\\int \\frac{1}{x}dx = \\ln|x| + C$.</li>`,
            `<li><em>\"Nguyên hàm Sin ra Trừ Cốt – Mũ e giữ nguyên – Gặp ax+b nhớ chia cho a!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Tìm nguyên hàm $\\int e^{3x - 1} dx$:",
              options: ["A. $\\frac{1}{3}e^{3x - 1} + C$", "B. $3e^{3x - 1} + C$", "C. $e^{3x - 1} + C$", "D. $\\frac{1}{3}e^{3x} + C$"],
              correct: "A",
              explanation: "Áp dụng công thức $\\int e^{ax+b}dx = \\frac{1}{a}e^{ax+b} + C$ với $a = 3$, ta được $\\frac{1}{3}e^{3x-1} + C$.",
              hint1: "Áp dụng công thức $\\int e^{ax+b}dx = \\frac{1}{a}e^{ax+b} + C$.",
              hint2: "Ở đây $a = 3$, do đó chia cho 3: $\\frac{1}{3}e^{3x-1} + C$."
            },
            {
              question: "Biết $F(x)$ là một nguyên hàm của hàm số $f(x) = 2x + 3$ thỏa mãn $F(1) = 6$. Tìm $F(x)$:",
              options: ["A. $F(x) = x^2 + 3x + 2$", "B. $F(x) = x^2 + 3x + 6$", "C. $F(x) = x^2 + 3x$", "D. $F(x) = 2x^2 + 3x + 1$"],
              correct: "A",
              explanation: "$F(x) = \\int (2x + 3)dx = x^2 + 3x + C$. Vì $F(1) = 6 \\Rightarrow 1^2 + 3(1) + C = 6 \\Rightarrow C = 2$. Vậy $F(x) = x^2 + 3x + 2$.",
              hint1: "Tìm họ nguyên hàm $F(x) = x^2 + 3x + C$.",
              hint2: "Thay $x = 1$, giải $1 + 3 + C = 6 \\Rightarrow C = 2$."
            },
            {
              question: "Một vật chuyển động với gia tốc $a(t) = 6t$ ($\\text{m/s}^2$). Biết vận tốc ban đầu $v(0) = 2\\text{ m/s}$. Hàm vận tốc $v(t)$ là:",
              options: ["A. $v(t) = 3t^2 + 2$", "B. $v(t) = 6t^2 + 2$", "C. $v(t) = 3t^2$", "D. $v(t) = 6t + 2$"],
              correct: "A",
              explanation: "$v(t) = \\int 6t dt = 3t^2 + C$. Vì $v(0) = 2 \\Rightarrow C = 2$. Vậy $v(t) = 3t^2 + 2$.",
              hint1: "Vận tốc là nguyên hàm của gia tốc: $v(t) = \\int a(t)dt$.",
              hint2: "$\\int 6t dt = 3t^2 + C$. Với $v(0) = 2 \\Rightarrow C = 2$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét hàm số $f(x) = 4x^3 - 2x + 3$ trên $\\mathbb{R}$.",
          items: [
            { key: "a", text: "Một nguyên hàm của $f(x)$ là $F(x) = x^4 - x^2 + 3x$.", correct: "true", explain: "$F'(x) = 4x^3 - 2x + 3 = f(x)$." },
            { key: "b", text: "Họ tất cả các nguyên hàm của $f(x)$ là $x^4 - x^2 + 3x + C$ ($C \\in \\mathbb{R}$).", correct: "true", explain: "Định nghĩa họ nguyên hàm." },
            { key: "c", text: "Nguyên hàm $F(x)$ thỏa mãn $F(0) = 5$ có hằng số $C = 5$.", correct: "true", explain: "$F(0) = 0 + C = 5 \\Rightarrow C = 5$." },
            { key: "d", text: "Đạo hàm của mọi nguyên hàm $F(x)$ đều bằng $12x^2 - 2$.", correct: "false", explain: "$F'(x) = f(x) = 4x^3 - 2x + 3$, không phải $12x^2 - 2$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét tính đúng sai của các công thức nguyên hàm cơ bản trong SGK Kết nối tri thức.",
          items: [
            { key: "a", text: "$\\int x^5 dx = \\frac{x^6}{6} + C$.", correct: "true", explain: "Công thức lũy thừa chuẩn." },
            { key: "b", text: "$\\int \\frac{1}{x} dx = \\ln|x| + C$ với mọi $x \\neq 0$.", correct: "true", explain: "Bắt buộc có dấu giá trị tuyệt đối." },
            { key: "c", text: "$\\int e^{3x} dx = 3e^{3x} + C$.", correct: "false", explain: "Phải chia cho 3: $\\frac{1}{3}e^{3x} + C$." },
            { key: "d", text: "$\\int \\sin 2x dx = -\\frac{1}{2}\\cos 2x + C$.", correct: "true", explain: "Nguyên hàm của sin có dấu trừ và chia cho hệ số $a = 2$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $f(x) = \\cos x - \\frac{1}{\\cos^2 x}$ trên khoảng $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.",
          items: [
            { key: "a", text: "Một nguyên hàm của $\\cos x$ là $\\sin x$.", correct: "true", explain: "$(\\sin x)' = \\cos x$." },
            { key: "b", text: "Một nguyên hàm của $\\frac{1}{\\cos^2 x}$ là $\\tan x$.", correct: "true", explain: "$(\\tan x)' = \\frac{1}{\\cos^2 x}$." },
            { key: "c", text: "Họ nguyên hàm của $f(x)$ là $F(x) = \\sin x - \\tan x + C$.", correct: "true", explain: "Kết hợp hai nguyên hàm." },
            { key: "d", text: "Nguyên hàm $F(x)$ thỏa mãn $F(0) = 1$ có công thức $F(x) = \\sin x - \\tan x + 2$.", correct: "false", explain: "$F(0) = \\sin 0 - \\tan 0 + C = C = 1$, do đó $F(x) = \\sin x - \\tan x + 1$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hàm số $f(x) = 2x + e^x$.",
          items: [
            { key: "a", text: "Họ nguyên hàm của $f(x)$ là $F(x) = x^2 + e^x + C$.", correct: "true", explain: "$(x^2 + e^x)' = 2x + e^x$." },
            { key: "b", text: "Nguyên hàm $F(x)$ đi qua điểm $M(0; 3)$ có hằng số $C = 2$.", correct: "true", explain: "$F(0) = 0 + e^0 + C = 1 + C = 3 \\Rightarrow C = 2$." },
            { key: "c", text: "Giá trị của $F(1)$ khi $C = 2$ bằng $3 + e$.", correct: "true", explain: "$F(1) = 1^2 + e^1 + 2 = 3 + e$." },
            { key: "d", text: "Đạo hàm của $F(x)$ tại $x = 0$ bằng 2.", correct: "false", explain: "$F'(0) = f(0) = 2(0) + e^0 = 1 \\neq 2$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Một ô tô đang chạy với vận tốc $10\\text{ m/s}$ thì người lái đạp phanh, ô tô chuyển động với gia tốc $a(t) = -2\\text{ m/s}^2$.",
          items: [
            { key: "a", text: "Hàm vận tốc của ô tô là $v(t) = -2t + 10$.", correct: "true", explain: "$v(t) = \\int (-2)dt = -2t + C$, với $v(0) = 10 \\Rightarrow C = 10$." },
            { key: "b", text: "Ô tô dừng hẳn sau 5 giây kể từ lúc đạp phanh.", correct: "true", explain: "$v(t) = 0 \\Leftrightarrow -2t + 10 = 0 \\Leftrightarrow t = 5$ giây." },
            { key: "c", text: "Quãng đường ô tô đi được từ lúc đạp phanh đến khi dừng hẳn là $25\\text{ m}$.", correct: "true", explain: "$s(t) = -t^2 + 10t \\Rightarrow s(5) = -25 + 50 = 25\\text{ m}$." },
            { key: "d", text: "Vận tốc của ô tô tại thời điểm $t = 3$ giây bằng $6\\text{ m/s}$.", correct: "false", explain: "$v(3) = -2(3) + 10 = 4\\text{ m/s} \\neq 6\\text{ m/s}$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Xét các mệnh đề lý thuyết về nguyên hàm theo Chương trình GDPT 2018.",
          items: [
            { key: "a", text: "Nếu $F(x)$ là một nguyên hàm của $f(x)$ thì $(F(x) + 2025)$ cũng là một nguyên hàm của $f(x)$.", correct: "true", explain: "Vì đạo hàm của hằng số bằng 0." },
            { key: "b", text: "Mọi hàm số liên tục trên khoảng $K$ đều có nguyên hàm trên khoảng đó.", correct: "true", explain: "Định lý về sự tồn tại nguyên hàm." },
            { key: "c", text: "$\\int [f(x) \\cdot g(x)]dx = \\int f(x)dx \\cdot \\int g(x)dx$.", correct: "false", explain: "Nguyên hàm của tích không bằng tích các nguyên hàm." },
            { key: "d", text: "$\\int k \\cdot f(x)dx = k \\int f(x)dx$ với mọi hằng số $k \\neq 0$.", correct: "true", explain: "Tính chất đưa hằng số ra ngoài dấu nguyên hàm." }
          ]
        }
      ]
    },

    // BÀI 12: TÍCH PHÂN
    "toan12_bai12": {
      id: "toan12_bai12",
      lessonTitle: "Bài 12: Tích phân",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 12:") || t.includes("tích phân") || t.includes("tich phan")) && !t.includes("ứng dụng") && !t.includes("hình học");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm diện tích hình thang cong và Định nghĩa Tích phân",
          theory: createStandardTheoryHTML(
            "Bài 12: Tích phân", "Lớp 12", 1,
            "Khái niệm diện tích hình thang cong và Định nghĩa Tích phân",
            `<p>Kiến thức chuẩn SGK Toán 12 Kết nối tri thức với cuộc sống:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Diện tích hình thang cong:</strong> Cho hàm số $y = f(x)$ liên tục và không âm trên đoạn $[a; b]$. Hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$ được gọi là <em>hình thang cong</em>.</li>
              <li><strong>Định nghĩa Tích phân (Công thức Newton – Leibniz):</strong>
                <br/>Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$. Giả sử $F(x)$ là một nguyên hàm của $f(x)$ trên $[a; b]$.
                <br/>Hiệu số $F(b) - F(a)$ được gọi là <strong>tích phân từ $a$ đến $b$</strong> của hàm số $f(x)$, kí hiệu:
                $$\\int_a^b f(x)dx = [F(x)]_a^b = F(b) - F(a)$$
              </li>
              <li><strong>Ý nghĩa hình học:</strong> Nếu $f(x) \\ge 0$ trên đoạn $[a; b]$ thì diện tích $S$ của hình thang cong bằng $S = \\int_a^b f(x)dx$.</li>
              <li><strong>Quy ước:</strong> $\\int_a^a f(x)dx = 0$ và $\\int_a^b f(x)dx = -\\int_b^a f(x)dx$.</li>
            </ul>`,
            `<li>Tích phân $\\int_a^b f(x)dx$ là một <strong>số thực duy nhất</strong> (hằng số), không phụ thuộc vào tên biến: $\\int_a^b f(x)dx = \\int_a^b f(t)dt$.</li>
            <li>Khi tính $[F(x)]_a^b = F(b) - F(a)$, luôn chọn nguyên hàm có $C = 0$.</li>`,
            `<li>Ngược cận: lấy $F(a) - F(b)$ thay vì cận trên trừ cận dưới $F(b) - F(a)$.</li>
            <li>Nhầm giữa tích phân (số thực) và nguyên hàm (họ hàm số).</li>`,
            `<li><em>\"Tìm một nguyên hàm – Thế cận trên trừ cận dưới – Ra ngay một số thực duy nhất!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Tính tích phân $I = \\int_0^1 (3x^2 + 2x) dx$:",
              options: ["A. 2", "B. 3", "C. 5", "D. 1"],
              correct: "A",
              explanation: "Nguyên hàm $F(x) = x^3 + x^2$. Áp dụng Newton-Leibniz: $I = [x^3 + x^2]_0^1 = (1 + 1) - 0 = 2$.",
              hint1: "Tìm một nguyên hàm của $3x^2 + 2x$ rồi thế hai cận $0$ và $1$.",
              hint2: "$F(x) = x^3 + x^2$. Lấy $F(1) - F(0) = 2 - 0 = 2$."
            },
            {
              question: "Cho $F(x)$ là một nguyên hàm của $f(x)$ trên đoạn $[1; 3]$ thỏa mãn $F(1) = 2$ và $F(3) = 9$. Giá trị của $\\int_1^3 f(x)dx$ bằng:",
              options: ["A. 7", "B. 11", "C. -7", "D. 18"],
              correct: "A",
              explanation: "Theo công thức Newton-Leibniz: $\\int_1^3 f(x)dx = F(3) - F(1) = 9 - 2 = 7$.",
              hint1: "Áp dụng trực tiếp công thức Newton-Leibniz: $\\int_a^b f(x)dx = F(b) - F(a)$.",
              hint2: "Lấy $F(3) - F(1) = 9 - 2 = 7$."
            },
            {
              question: "Diện tích hình thang cong giới hạn bởi $y = 3x^2$, trục $Ox$ và hai đường $x = 0, x = 2$ bằng:",
              options: ["A. 8", "B. 12", "C. 6", "D. 24"],
              correct: "A",
              explanation: "Vì $3x^2 \\ge 0$ trên $[0; 2]$ nên $S = \\int_0^2 3x^2 dx = [x^3]_0^2 = 8 - 0 = 8$.",
              hint1: "Diện tích hình thang cong bằng tích phân $\\int_0^2 3x^2 dx$.",
              hint2: "Nguyên hàm là $x^3$, thế cận: $2^3 - 0 = 8$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Các tính chất của Tích phân và Ứng dụng thực tiễn",
          theory: createStandardTheoryHTML(
            "Bài 12: Tích phân", "Lớp 12", 2,
            "Các tính chất của Tích phân và Ứng dụng thực tiễn",
            `<p>Các tính chất nền tảng và ứng dụng thực tiễn chuẩn SGK Toán 12 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Đưa hằng số ra ngoài:</strong> $\\int_a^b k \\cdot f(x)dx = k \\int_a^b f(x)dx$ ($k \\in \\mathbb{R}$).</li>
              <li><strong>Tổng và hiệu:</strong> $\\int_a^b [f(x) \\pm g(x)]dx = \\int_a^b f(x)dx \\pm \\int_a^b g(x)dx$.</li>
              <li><strong>Tính chất chèn cận:</strong> $\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx$ với ba số $a, b, c$ bất kì.</li>
              <li><strong>Bảo toàn dấu:</strong> Nếu $f(x) \\ge 0, \\forall x \\in [a; b]$ ($a < b$) thì $\\int_a^b f(x)dx \\ge 0$.</li>
              <li><strong>Ứng dụng chuyển động:</strong> Quãng đường vật đi được từ thời điểm $t_1$ đến $t_2$ với vận tốc $v(t) \\ge 0$ là:
                $$s = \\int_{t_1}^{t_2} v(t)dt$$
              </li>
            </ul>`,
            `<li>SGK GDPT 2018 KHÔNG học tích phân từng phần; chỉ tập trung các tính chất, chèn cận và ứng dụng tính quãng đường.</li>
            <li>Đổi vị trí hai cận thì tích phân đổi dấu: $\\int_a^b = -\\int_b^a$.</li>`,
            `<li>Tích phân của tích không bằng tích các tích phân.</li>
            <li>Tích phân của thương không bằng thương các tích phân.</li>`,
            `<li><em>\"Nối cận giữa hai đầu mút – Hằng số kéo tự do – Quãng đường bằng tích phân vận tốc!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho $\\int_0^2 f(x)dx = 3$ và $\\int_2^5 f(x)dx = 7$. Giá trị của $\\int_0^5 f(x)dx$ bằng:",
              options: ["A. 10", "B. 4", "C. -4", "D. 21"],
              correct: "A",
              explanation: "Theo tính chất chèn cận: $\\int_0^5 f(x)dx = \\int_0^2 f(x)dx + \\int_2^5 f(x)dx = 3 + 7 = 10$.",
              hint1: "Áp dụng tính chất chèn cận: $\\int_0^5 = \\int_0^2 + \\int_2^5$.",
              hint2: "Cộng hai giá trị lại: $3 + 7 = 10$."
            },
            {
              question: "Cho $\\int_1^3 f(x)dx = 4$ và $\\int_1^3 g(x)dx = -2$. Giá trị của $\\int_1^3 [2f(x) - 3g(x)]dx$ bằng:",
              options: ["A. 14", "B. 2", "C. 8", "D. -14"],
              correct: "A",
              explanation: "$\\int_1^3 [2f(x) - 3g(x)]dx = 2\\int_1^3 f(x)dx - 3\\int_1^3 g(x)dx = 2(4) - 3(-2) = 8 + 6 = 14$.",
              hint1: "Áp dụng tính chất tuyến tính tách thành $2\\int f - 3\\int g$.",
              hint2: "$2(4) - 3(-2) = 8 + 6 = 14$."
            },
            {
              question: "Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2$ ($\\text{m/s}$). Quãng đường vật đi được từ $t = 0$ đến $t = 2$ giây bằng:",
              options: ["A. $12\\text{ m}$", "B. $14\\text{ m}$", "C. $8\\text{ m}$", "D. $16\\text{ m}$"],
              correct: "A",
              explanation: "Quãng đường $s = \\int_0^2 (3t^2 + 2)dt = [t^3 + 2t]_0^2 = (8 + 4) - 0 = 12\\text{ m}$.",
              hint1: "Tính tích phân của vận tốc từ 0 đến 2: $s = \\int_0^2 v(t)dt$.",
              hint2: "$[t^3 + 2t]_0^2 = (8 + 4) - 0 = 12$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = 3x^2 - 4x + 1$ liên tục trên đoạn $[0; 2]$.",
          items: [
            { key: "a", text: "Một nguyên hàm của hàm số $f(x)$ là $F(x) = x^3 - 2x^2 + x$.", correct: "true", explain: "$F'(x) = 3x^2 - 4x + 1 = f(x)$." },
            { key: "b", text: "Giá trị của tích phân $\\int_0^2 f(x)dx = 2$.", correct: "true", explain: "$[x^3 - 2x^2 + x]_0^2 = (8 - 8 + 2) - 0 = 2$." },
            { key: "c", text: "Tích phân $\\int_2^0 f(x)dx = 2$.", correct: "false", explain: "Đổi cận đổi dấu: $\\int_2^0 f(x)dx = -\\int_0^2 f(x)dx = -2$." },
            { key: "d", text: "$\\int_0^2 f(t)dt = 2$.", correct: "true", explain: "Tích phân không phụ thuộc vào biến số." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai hàm số $f(x), g(x)$ liên tục trên đoạn $[1; 4]$ thỏa mãn $\\int_1^4 f(x)dx = 6$ và $\\int_1^4 g(x)dx = -2$.",
          items: [
            { key: "a", text: "$\\int_1^4 [f(x) + g(x)]dx = 4$.", correct: "true", explain: "$6 + (-2) = 4$." },
            { key: "b", text: "$\\int_1^4 3f(x)dx = 18$.", correct: "true", explain: "$3 \\times 6 = 18$." },
            { key: "c", text: "$\\int_1^4 [f(x) - 2g(x)]dx = 10$.", correct: "true", explain: "$6 - 2(-2) = 10$." },
            { key: "d", text: "$\\int_1^4 [f(x) \\cdot g(x)]dx = -12$.", correct: "false", explain: "Tích phân của tích không bằng tích các tích phân." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $f(x)$ liên tục trên đoạn $[-1; 5]$ thỏa mãn $\\int_{-1}^2 f(x)dx = 5$ và $\\int_2^5 f(x)dx = -3$.",
          items: [
            { key: "a", text: "Tích phân $\\int_{-1}^5 f(x)dx = 2$.", correct: "true", explain: "$\\int_{-1}^5 = \\int_{-1}^2 + \\int_2^5 = 5 + (-3) = 2$." },
            { key: "b", text: "Tích phân $\\int_5^2 f(x)dx = 3$.", correct: "true", explain: "$\\int_5^2 = -\\int_2^5 = -(-3) = 3$." },
            { key: "c", text: "Tích phân $\\int_2^2 f(x)dx = 0$.", correct: "true", explain: "Cận trên bằng cận dưới thì tích phân bằng 0." },
            { key: "d", text: "Nếu $\\int_{-1}^5 [f(x) + k]dx = 14$ thì hằng số $k = 2$.", correct: "true", explain: "$\\int_{-1}^5 [f(x)+k]dx = 2 + 6k = 14 \\Rightarrow 6k = 12 \\Rightarrow k = 2$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Một ô tô bắt đầu chuyển động với gia tốc $a(t) = 2t$ ($\\text{m/s}^2$). Vận tốc của ô tô là $v(t) = t^2$ ($\\text{m/s}$).",
          items: [
            { key: "a", text: "Vận tốc của ô tô tại thời điểm $t = 3$ giây bằng $9\\text{ m/s}$.", correct: "true", explain: "$v(3) = 3^2 = 9\\text{ m/s}$." },
            { key: "b", text: "Quãng đường ô tô đi được trong 3 giây đầu tính theo công thức $s = \\int_0^3 t^2 dt$.", correct: "true", explain: "Công thức quãng đường $s = \\int_0^3 v(t)dt$." },
            { key: "c", text: "Quãng đường ô tô đi được trong 3 giây đầu bằng $9\\text{ m}$.", correct: "true", explain: "$s = [\\frac{t^3}{3}]_0^3 = \\frac{27}{3} = 9\\text{ m}$." },
            { key: "d", text: "Vận tốc trung bình của ô tô trong 3 giây đầu bằng $9\\text{ m/s}$.", correct: "false", explain: "Vận tốc trung bình bằng quãng đường chia thời gian: $v_{tb} = 9/3 = 3\\text{ m/s} \\neq 9\\text{ m/s}$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình phẳng $S$ giới hạn bởi parabol $y = x^2$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 3$.",
          items: [
            { key: "a", text: "Vì $x^2 \\ge 0$ trên $[0; 3]$ nên diện tích $S = \\int_0^3 x^2 dx$.", correct: "true", explain: "Ý nghĩa hình học của tích phân." },
            { key: "b", text: "Một nguyên hàm của $x^2$ là $\\frac{x^3}{3}$.", correct: "true", explain: "Công thức nguyên hàm cơ bản." },
            { key: "c", text: "Diện tích hình phẳng $S = 9$.", correct: "true", explain: "$S = [\\frac{x^3}{3}]_0^3 = \\frac{27}{3} = 9$." },
            { key: "d", text: "Thể tích khối tròn xoay khi quay $S$ quanh $Ox$ là $V = \\int_0^3 x^4 dx$ (không có $\\pi$).", correct: "false", explain: "Công thức thể tích khối tròn xoay bắt buộc có $\\pi$: $V = \\pi \\int_0^3 x^4 dx$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Xét các mệnh đề toán học về tích phân theo Chương trình GDPT 2018 (SGK Kết nối tri thức).",
          items: [
            { key: "a", text: "Tích phân $\\int_a^b f(x)dx$ luôn là một số thực xác định khi $f(x)$ liên tục trên đoạn $[a; b]$.", correct: "true", explain: "Định nghĩa chuẩn của tích phân." },
            { key: "b", text: "Nếu $f(x) \\ge 0, \\forall x \\in [a; b]$ ($a < b$) thì $\\int_a^b f(x)dx \\ge 0$.", correct: "true", explain: "Tính chất bảo toàn dấu của tích phân." },
            { key: "c", text: "Tích phân $\\int_a^b f(x)dx = \\int_a^b f(t)dt$ không phụ thuộc vào biến số.", correct: "true", explain: "Tính chất cơ bản chuẩn SGK." },
            { key: "d", text: "Tích phân $\\int_a^b \\frac{f(x)}{g(x)}dx = \\frac{\\int_a^b f(x)dx}{\\int_a^b g(x)dx}$ với mọi hàm $g(x) \\neq 0$.", correct: "false", explain: "Tích phân của thương không bằng thương các tích phân." }
          ]
        }
      ]
    },

    // BÀI 13: ỨNG DỤNG HÌNH HỌC CỦA TÍCH PHÂN (DIỆN TÍCH HÌNH PHẲNG & THỂ TÍCH VẬT THỂ, KHỐI TRÒN XOAY)
    "toan12_bai13": {
      id: "toan12_bai13",
      lessonTitle: "Bài 13: Ứng dụng hình học của tích phân",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 13:") || t.includes("ứng dụng hình học") || (t.includes("diện tích") && t.includes("tích phân")) || (t.includes("thể tích") && t.includes("tròn xoay"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Tính diện tích hình phẳng bằng tích phân",
          theory: createStandardTheoryHTML(
            "Bài 13: Ứng dụng hình học của tích phân", "Lớp 12", 1,
            "Tính diện tích hình phẳng bằng tích phân",
            `<p>Tích phân xác định là công cụ chuẩn xác nhất để tính diện tích các hình phẳng giới hạn bởi đường cong:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hình phẳng giới hạn bởi đồ thị $y = f(x)$, trục hoành $Ox$ và hai đường thẳng $x = a, x = b$:</strong>
                $$S = \\int_a^b |f(x)| dx$$
              </li>
              <li><strong>Hình phẳng giới hạn bởi hai đồ thị hàm số $y = f_1(x), y = f_2(x)$ và hai đường thẳng $x = a, x = b$:</strong>
                $$S = \\int_a^b |f_1(x) - f_2(x)| dx$$
              </li>
              <li><strong>Quy tắc phá dấu giá trị tuyệt đối:</strong>
                <br/>1. Giải phương trình hoành độ giao điểm $f_1(x) - f_2(x) = 0$ trên đoạn $[a; b]$ để tìm các nghiệm $c_1, c_2, ...$
                <br/>2. Tách tích phân thành các đoạn con: Trên mỗi đoạn con, hiệu $f_1(x) - f_2(x)$ không đổi dấu, ta đưa dấu trị tuyệt đối ra ngoài tích phân:
                $$S = \\left| \\int_a^{c_1} (f_1 - f_2) dx \\right| + \\left| \\int_{c_1}^b (f_1 - f_2) dx \\right|$$
              </li>
            </ul>`,
            `<li>Nếu đề bài KHÔNG cho trước hai cận $x = a, x = b$, các cận này chính là nghiệm nhỏ nhất và lớn nhất của phương trình hoành độ giao điểm $f_1(x) = f_2(x)$.</li>
            <li>Nếu đổi trục sang $Oy$: Hình phẳng giới hạn bởi $x = g_1(y), x = g_2(y), y = c, y = d$ thì $S = \\int_c^d |g_1(y) - g_2(y)| dy$.</li>`,
            `<li>Quên dấu giá trị tuyệt đối dẫn đến kết quả diện tích bị âm hoặc bị triệt tiêu do phần nằm trên và nằm dưới trục hoành bù trừ nhau.</li>
            <li>Bấm máy tính Casio tích phân có trị tuyệt đối quá lâu do không tách khoảng nghiệm.</li>`,
            `<li><em>"Diện tích hình phẳng nhớ trị tuyệt đối – Tìm nghiệm giao điểm chia nhỏ từng cung – Tích phân từng đoạn lấy độ lớn dương!"</em></li>`
          ),
          mcqs: [
            {
              question: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = x^2 - 4$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 3$ bằng:",
              options: ["A. $\\frac{23}{3}$", "B. $7$", "C. $\\frac{7}{3}$", "D. $9$"],
              correct: "A",
              explanation: "Phương trình hoành độ giao điểm: $x^2 - 4 = 0 \\Leftrightarrow x = \\pm 2$. Trên đoạn $[0; 3]$ có nghiệm $x = 2$. Do đó: $S = \\int_0^3 |x^2 - 4| dx = \\int_0^2 |x^2 - 4| dx + \\int_2^3 |x^2 - 4| dx = -\\int_0^2 (x^2 - 4) dx + \\int_2^3 (x^2 - 4) dx = -\\left[\\frac{x^3}{3} - 4x\\right]_0^2 + \\left[\\frac{x^3}{3} - 4x\\right]_2^3 = -\\left(\\frac{8}{3} - 8\\right) + \\left[(9 - 12) - \\left(\\frac{8}{3} - 8\\right)\\right] = \\frac{16}{3} + \\left(-3 + \\frac{16}{3}\\right) = \\frac{16}{3} + \\frac{7}{3} = \\frac{23}{3}$.",
              hint1: "Phương trình $x^2 - 4 = 0$ có nghiệm $x = 2$ nằm trong đoạn $[0; 3]$. Tách tích phân tại $x = 2$.",
              hint2: "Trên $[0; 2]$ thì $x^2 - 4 \\le 0$, trên $[2; 3]$ thì $x^2 - 4 \\ge 0$."
            },
            {
              question: "Diện tích hình phẳng giới hạn bởi hai đường parabol $y = x^2$ và đường thẳng $y = 2x$ bằng:",
              options: ["A. $\\frac{4}{3}$", "B. $\\frac{2}{3}$", "C. $\\frac{5}{3}$", "D. $2$"],
              correct: "A",
              explanation: "Phương trình hoành độ giao điểm: $x^2 = 2x \\Leftrightarrow x^2 - 2x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Diện tích: $S = \\int_0^2 |2x - x^2| dx$. Vì trên $[0; 2]$, $2x \\ge x^2$ nên $S = \\int_0^2 (2x - x^2) dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
              hint1: "Giải phương trình $x^2 - 2x = 0$ tìm cận tích phân $a = 0, b = 2$.",
              hint2: "Tính tích phân $\\int_0^2 (2x - x^2) dx$."
            },
            {
              question: "Diện tích hình phẳng giới hạn bởi đồ thị hàm số $y = \\sin x$, trục hoành và hai đường thẳng $x = 0, x = 2\\pi$ bằng:",
              options: ["A. $4$", "B. $0$", "C. $2$", "D. $2\\pi$"],
              correct: "A",
              explanation: "Hàm $\\sin x$ đổi dấu tại $x = \\pi \\in [0; 2\\pi]$. Diện tích là $S = \\int_0^{2\\pi} |\\sin x| dx = \\int_0^\\pi \\sin x dx - \\int_\\pi^{2\\pi} \\sin x dx = [-\\cos x]_0^\\pi - [-\\cos x]_\\pi^{2\\pi} = (1 + 1) - (-1 - 1) = 2 + 2 = 4$.",
              hint1: "Đừng nhầm $\\int_0^{2\\pi} \\sin x dx = 0$. Diện tích phải lấy trị tuyệt đối: $\\int_0^{2\\pi} |\\sin x| dx$.",
              hint2: "Tách tại nghiệm $x = \\pi$: phần $[0; \\pi]$ có diện tích là $2$, phần $[\\pi; 2\\pi]$ có diện tích là $2$. Tổng bằng $4$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tính thể tích vật thể và thể tích khối tròn xoay",
          theory: createStandardTheoryHTML(
            "Bài 13: Ứng dụng hình học của tích phân", "Lớp 12", 2,
            "Tính thể tích vật thể và thể tích khối tròn xoay",
            `<p>Tích phân cho phép tính thể tích của vật thể bất kì khi biết diện tích mặt cắt và thể tích khối tròn xoay khi quay quanh trục toạ độ:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Thể tích vật thể có thiết diện $S(x)$:</strong> Cắt vật thể bởi hai mặt phẳng vuông góc với trục $Ox$ tại $x = a$ và $x = b$. Nếu mặt cắt vuông góc với $Ox$ tại điểm có hoành độ $x$ có diện tích là $S(x)$ liên tục trên $[a; b]$ thì:
                $$V = \\int_a^b S(x) dx$$
              </li>
              <li><strong>Thể tích khối tròn xoay quay quanh trục $Ox$:</strong> Cho hình phẳng giới hạn bởi đường cong $y = f(x)$, trục $Ox$ và hai đường thẳng $x = a, x = b$ quay xung quanh trục hoành $Ox$:
                $$V = \\pi \\int_a^b [f(x)]^2 dx$$
              </li>
              <li><strong>Khối tròn xoay giới hạn bởi hai đường cong:</strong> Giới hạn bởi $y = f_1(x), y = f_2(x)$ (cùng phía so với $Ox$) quay quanh $Ox$:
                $$V = \\pi \\int_a^b |f_1^2(x) - f_2^2(x)| dx$$
              </li>
            </ul>`,
            `<li>Thể tích khối tròn xoay BẮT BUỘC có hệ số $\\pi$ phía trước tích phân: $V = \\pi \\int [f(x)]^2 dx$. (Thể tích vật thể cắt lát $V = \\int S(x) dx$ thì KHÔNG có $\\pi$).</li>
            <li>Hàm số $f(x)$ phải được bình phương trước khi lấy nguyên hàm.</li>`,
            `<li>Quên nhân số $\\pi$ ở công thức khối tròn xoay.</li>
            <li>Nhầm giữa $[f_1(x) - f_2(x)]^2$ với $|f_1^2(x) - f_2^2(x)|$. Công thức đúng là hiệu hai bình phương!</li>`,
            `<li><em>"Cắt lát vuông góc: tích phân diện tích S(x) – Tròn xoay quanh trục Ox: pi nhân tích phân của hàm f bình phương!"</em></li>`
          ),
          mcqs: [
            {
              question: "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{x}$, trục hoành và hai đường thẳng $x = 1, x = 4$ xung quanh trục $Ox$ bằng:",
              options: ["A. $\\frac{15\\pi}{2}$", "B. $\\frac{15}{2}$", "C. $\\frac{14\\pi}{3}$", "D. $8\\pi$"],
              correct: "A",
              explanation: "Áp dụng công thức thể tích khối tròn xoay quanh $Ox$: $V = \\pi \\int_1^4 [f(x)]^2 dx = \\pi \\int_1^4 (\\sqrt{x})^2 dx = \\pi \\int_1^4 x dx = \\pi \\left[\\frac{x^2}{2}\\right]_1^4 = \\pi \\left(\\frac{16}{2} - \\frac{1}{2}\\right) = \\frac{15\\pi}{2}$.",
              hint1: "Bình phương hàm số: $(\\sqrt{x})^2 = x$.",
              hint2: "Tính tích phân $\\pi \\int_1^4 x dx = \\pi [\\frac{x^2}{2}]_1^4$."
            },
            {
              question: "Tính thể tích vật thể nằm giữa hai mặt phẳng $x = 0$ và $x = 2$, biết rằng thiết diện của vật thể bị cắt bởi mặt phẳng vuông góc với trục $Ox$ tại điểm có hoành độ $x$ ($0 \\le x \\le 2$) là một hình vuông có cạnh bằng $\\sqrt{x(2 - x)}$.",
              options: ["A. $\\frac{4}{3}$", "B. $\\frac{4\\pi}{3}$", "C. $\\frac{2}{3}$", "D. $2$"],
              correct: "A",
              explanation: "Diện tích thiết diện hình vuông cạnh $\\sqrt{x(2-x)}$ là: $S(x) = [\\sqrt{x(2 - x)}]^2 = 2x - x^2$. Thể tích vật thể là: $V = \\int_0^2 S(x) dx = \\int_0^2 (2x - x^2) dx = \\left[x^2 - \\frac{x^3}{3}\\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$. (Chú ý: Đây là thể tích vật thể cắt lát nên KHÔNG có $\\pi$).",
              hint1: "Diện tích hình vuông là bình phương độ dài cạnh: $S(x) = 2x - x^2$.",
              hint2: "Thể tích là tích phân của diện tích thiết diện $V = \\int_0^2 S(x) dx$. Chú ý không có $\\pi$!"
            },
            {
              question: "Thể tích khối tròn xoay thu được khi quay hình phẳng giới hạn bởi đường cong $y = e^x$, trục hoành và hai đường thẳng $x = 0, x = 1$ quanh trục $Ox$ bằng:",
              options: ["A. $\\frac{\\pi(e^2 - 1)}{2}$", "B. $\\pi(e - 1)$", "C. $\\frac{e^2 - 1}{2}$", "D. $\\pi(e^2 - 1)$"],
              correct: "A",
              explanation: "Thể tích: $V = \\pi \\int_0^1 (e^x)^2 dx = \\pi \\int_0^1 e^{2x} dx = \\pi \\left[\\frac{e^{2x}}{2}\\right]_0^1 = \\pi \\left(\\frac{e^2}{2} - \\frac{1}{2}\\right) = \\frac{\\pi(e^2 - 1)}{2}$.",
              hint1: "Bình phương hàm số: $(e^x)^2 = e^{2x}$.",
              hint2: "Nguyên hàm của $e^{2x}$ là $\\frac{1}{2}e^{2x}$. Thay cận từ $0$ đến $1$ và nhân với $\\pi$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình phẳng $(H)$ giới hạn bởi đồ thị hàm số $y = x^3 - 3x$, trục hoành $Ox$ và hai đường thẳng $x = -1, x = 2$.",
          items: [
            { key: "a", text: "Phương trình hoành độ giao điểm $x^3 - 3x = 0$ có các nghiệm $x = 0$ và $x = \\pm \\sqrt{3}$.", correct: "true", explain: "$x(x^2 - 3) = 0 \\Leftrightarrow x = 0$ hoặc $x = \\pm \\sqrt{3}$." },
            { key: "b", text: "Trong đoạn $[-1; 2]$, phương trình $x^3 - 3x = 0$ có 2 nghiệm là $x = 0$ và $x = \\sqrt{3} \\approx 1.732$.", correct: "true", explain: "Vì $-\\sqrt{3} < -1$ nằm ngoài đoạn $[-1; 2]$, còn $0$ và $\\sqrt{3}$ nằm trong đoạn." },
            { key: "c", text: "Diện tích hình phẳng được tính bởi công thức $S = \\int_{-1}^2 (x^3 - 3x) dx$.", correct: "false", explain: "Sai, vì thiếu dấu trị tuyệt đối $|x^3 - 3x|$. Tích phân không có trị tuyệt đối sẽ làm các phần âm và dương triệt tiêu nhau." },
            { key: "d", text: "Diện tích hình phẳng $(H)$ là một số dương lớn hơn $2$.", correct: "true", explain: "Diện tích tính đúng là $S = \\int_{-1}^0 (x^3-3x)dx - \\int_0^{\\sqrt{3}}(x^3-3x)dx + \\int_{\\sqrt{3}}^2(x^3-3x)dx = \\frac{5}{4} + \\frac{9}{4} + \\frac{1}{4} = \\frac{15}{4} = 3.75 > 2$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{4 - x^2}$ và trục $Ox$ quanh trục hoành.",
          items: [
            { key: "a", text: "Đồ thị hàm số $y = \\sqrt{4 - x^2}$ là nửa trên của đường tròn tâm $O$ bán kính $R = 2$.", correct: "true", explain: "$y \\ge 0$ và $x^2 + y^2 = 4$." },
            { key: "b", text: "Hình phẳng cắt trục hoành tại hai điểm $x = -2$ và $x = 2$.", correct: "true", explain: "Giải $4 - x^2 = 0 \\Leftrightarrow x = \\pm 2$." },
            { key: "c", text: "Khối tròn xoay tạo thành chính là một khối cầu bán kính $R = 2$.", correct: "true", explain: "Nửa đường tròn quay quanh trục đường kính tạo thành một khối cầu." },
            { key: "d", text: "Thể tích của khối tròn xoay này bằng $\\frac{16\\pi}{3}$.", correct: "false", explain: "Thể tích khối cầu bán kính $R = 2$ là $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi(8) = \\frac{32\\pi}{3} \\neq \\frac{16\\pi}{3}$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một cổng chào hình Parabol có chiều cao $h = 4\\text{ m}$ và bề rộng chân cổng $d = 4\\text{ m}$.",
          items: [
            { key: "a", text: "Chọn hệ trục toạ độ $Oxy$ sao cho đỉnh parabol nằm trên trục $Oy$ tại điểm $I(0; 4)$ và hai chân cổng nằm trên trục $Ox$ tại $(-2; 0)$ và $(2; 0)$.", correct: "true", explain: "Cách đặt hệ trục đối xứng chuẩn giúp phương trình đơn giản." },
            { key: "b", text: "Phương trình của đường cong parabol là $y = 4 - x^2$.", correct: "true", explain: "Parabol có đỉnh $(0; 4)$ đi qua $(\\pm 2; 0)$: $y = a x^2 + 4$, thay $x = 2, y = 0 \\Rightarrow 4a + 4 = 0 \\Rightarrow a = -1$. Vậy $y = 4 - x^2$." },
            { key: "c", text: "Diện tích mặt trước của cổng chào là $S = \\int_{-2}^2 (4 - x^2) dx$.", correct: "true", explain: "Ứng dụng tích phân tính diện tích hình phẳng giới hạn bởi parabol và trục hoành." },
            { key: "d", text: "Diện tích mặt trước của cổng chào bằng $\\frac{32}{3}\\text{ m}^2$.", correct: "true", explain: "$S = [4x - \\frac{x^3}{3}]_{-2}^2 = (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{16}{3} + \\frac{16}{3} = \\frac{32}{3}\\text{ m}^2$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hình phẳng giới hạn bởi hai đường $y = x^2$ và $y = \\sqrt{x}$.",
          items: [
            { key: "a", text: "Hai đường cong cắt nhau tại hai điểm có hoành độ $x = 0$ và $x = 1$.", correct: "true", explain: "$x^2 = \\sqrt{x} \\Leftrightarrow x^4 = x \\Leftrightarrow x(x^3 - 1) = 0 \\Leftrightarrow x = 0$ hoặc $x = 1$." },
            { key: "b", text: "Trên đoạn $[0; 1]$, ta luôn có $\\sqrt{x} \\ge x^2$.", correct: "true", explain: "Ví dụ tại $x = 0.25$: $\\sqrt{0.25} = 0.5 > 0.25^2 = 0.0625$." },
            { key: "c", text: "Diện tích hình phẳng giới hạn bởi hai đường này là $S = \\frac{1}{3}$.", correct: "true", explain: "$S = \\int_0^1 (\\sqrt{x} - x^2) dx = [\\frac{2}{3}x^{3/2} - \\frac{x^3}{3}]_0^1 = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3}$." },
            { key: "d", text: "Thể tích khối tròn xoay khi quay hình phẳng này quanh trục $Ox$ là $V = \\pi \\int_0^1 (\\sqrt{x} - x^2)^2 dx$.", correct: "false", explain: "Sai công thức: Công thức đúng là $V = \\pi \\int_0^1 [(\\sqrt{x})^2 - (x^2)^2] dx = \\pi \\int_0^1 (x - x^4) dx$, không được lấy bình phương của hiệu." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình phẳng $(H)$ giới hạn bởi $y = \\frac{1}{x}$, trục $Ox$ và hai đường thẳng $x = 1, x = a$ ($a > 1$).",
          items: [
            { key: "a", text: "Diện tích của $(H)$ được tính bởi $S(a) = \\ln a$.", correct: "true", explain: "$S(a) = \\int_1^a \\frac{1}{x} dx = [\\ln |x|]_1^a = \\ln a - \\ln 1 = \\ln a$ (do $a > 1$)." },
            { key: "b", text: "Khi $a \\to +\\infty$ thì diện tích $S(a) \\to +\\infty$.", correct: "true", explain: "$\\lim_{a \\to +\\infty} \\ln a = +\\infty$." },
            { key: "c", text: "Thể tích khối tròn xoay khi $(H)$ quay quanh $Ox$ là $V(a) = \\pi \\left(1 - \\frac{1}{a}\\right)$.", correct: "true", explain: "$V(a) = \\pi \\int_1^a \\frac{1}{x^2} dx = \\pi [-\\frac{1}{x}]_1^a = \\pi (1 - \\frac{1}{a})$." },
            { key: "d", text: "Khi $a \\to +\\infty$, thể tích khối tròn xoay tiến đến vô cực.", correct: "false", explain: "$\\lim_{a \\to +\\infty} V(a) = \\pi(1 - 0) = \\pi$ (hữu hạn, nghịch lý chiếc kèn của Gabriel: diện tích vô hạn nhưng thể tích hữu hạn)." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về các công thức tính diện tích và thể tích trong SGK Toán 12 KNTT:",
          items: [
            { key: "a", text: "Nếu hàm số $f(x)$ liên tục và âm trên đoạn $[a; b]$ thì $\\int_a^b f(x) dx = -S$, với $S$ là diện tích hình phẳng giới hạn bởi đồ thị $f(x), Ox, x=a, x=b$.", correct: "true", explain: "Vì $f(x) < 0$ nên $|f(x)| = -f(x)$, do đó tích phân mang dấu âm." },
            { key: "b", text: "Thể tích của vật thể có diện tích thiết diện $S(x)$ vuông góc với $Ox$ luôn có hệ số $\\pi$ trước tích phân.", correct: "false", explain: "Sai, thể tích vật thể cắt lát $V = \\int_a^b S(x) dx$ KHÔNG có hệ số $\\pi$." },
            { key: "c", text: "Đơn vị diện tích tính được bằng tích phân luôn là đơn vị diện tích vuông của hệ trục toạ độ.", correct: "true", explain: "Quy chuẩn hình học giải tích." },
            { key: "d", text: "Diện tích hình Elip $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ có thể chứng minh bằng tích phân và bằng $\\pi a b$.", correct: "true", explain: "Ứng dụng tích phân đổi biến lượng giác tính được $S = \\pi a b$." }
          ]
        }
      ]
    }
  };

  // Xuất ra phạm vi toàn cục window
  window.DEDICATED_LESSONS_DB = Object.assign(window.DEDICATED_LESSONS_DB || {}, DEDICATED_LESSONS_DB);
  window.createStandardTheoryHTML = createStandardTheoryHTML;

  // Helper tìm kiếm bài học chính xác trong Database toàn cục
  function resolveDedicatedKNTTLesson(lessonTitle, grade) {
    if (!lessonTitle) return null;
    const db = window.DEDICATED_LESSONS_DB || DEDICATED_LESSONS_DB;
    const gStr = String(grade || '').trim();

    for (const key in db) {
      const item = db[key];
      if (item && typeof item.matcher === 'function') {
        const itemGrade = String(item.grade || '').trim();
        const gradeMatch = !gStr || itemGrade === gStr || 
          (gStr.includes('12') && itemGrade.includes('12')) ||
          (gStr.includes('11') && itemGrade.includes('11')) ||
          (gStr.includes('10') && itemGrade.includes('10'));

        if (gradeMatch) {
          try {
            if (item.matcher(lessonTitle)) {
              const clone = JSON.parse(JSON.stringify(item));
              clone.lessonTitle = lessonTitle;
              clone.class = item.grade || grade;
              return clone;
            }
          } catch (e) {
            console.error("Lỗi khi kiểm tra matcher bài học:", key, e);
          }
        }
      }
    }
    return null;
  }

  window.resolveDedicatedKNTTLesson = resolveDedicatedKNTTLesson;

})();
