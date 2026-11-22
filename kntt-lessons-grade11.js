/**
 * GIÁO ÁN CHI TIẾT TỪNG BÀI TOÁN LỚP 11 - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Chuẩn 100% nội dung sách giáo khoa Bộ Giáo dục và Đào tạo
 */

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};

  function createStandardTheoryHTML(lessonTitle, grade, partNum, sectionTitle, sgkHtml, noteHtml, mistakeHtml, tipHtml) {
    if (typeof window.createStandardTheoryHTML === 'function' && window.createStandardTheoryHTML !== createStandardTheoryHTML) {
      return window.createStandardTheoryHTML(lessonTitle, grade, partNum, sectionTitle, sgkHtml, noteHtml, mistakeHtml, tipHtml);
    }
    return `<div class="space-y-4 sm:space-y-5 font-serif theory-expanded-card">
  <div class="p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950">
    <p class="leading-relaxed text-[13.5pt] sm:text-[14pt]">
      Chào em <strong>{student_name}</strong>! Thầy/Cô Trợ lý cùng em học <strong>${lessonTitle}</strong> (${grade} - SGK KNTT). Cùng nắm chắc <strong>Mục ${partNum}: ${sectionTitle}</strong> nhé! 😊
    </p>
  </div>
  <div class="p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-indigo-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-indigo-200">
      <i class="fa-solid fa-book-open-reader text-indigo-600 text-xl"></i>
      <span>1. CÁC Ý CHÍNH TRONG SÁCH GIÁO KHOA KẾT NỐI TRI THỨC:</span>
    </div>
    <div class="space-y-2.5 text-[13.5pt] sm:text-[14pt] text-slate-800 leading-relaxed sm:leading-loose">${sgkHtml}</div>
  </div>
  <div class="p-4 sm:p-6 bg-gradient-to-br from-sky-50/90 via-white to-cyan-50/70 border-2 border-sky-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-sky-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-sky-200">
      <i class="fa-solid fa-circle-exclamation text-sky-600 text-xl"></i>
      <span>2. CÁC LƯU Ý QUAN TRỌNG CỦA PHẦN NÀY (ĐẶC BIỆT CHÚ Ý):</span>
    </div>
    <ul class="text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">${noteHtml}</ul>
  </div>
  <div class="p-4 sm:p-6 bg-gradient-to-br from-rose-50/90 via-white to-red-50/60 border-2 border-rose-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-rose-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-rose-200">
      <i class="fa-solid fa-triangle-exclamation text-rose-600 text-xl"></i>
      <span>3. ⚠️ Các sai lầm & bẫy trắc nghiệm học sinh hay mắc phải:</span>
    </div>
    <ul class="text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">${mistakeHtml}</ul>
  </div>
  <div class="p-4 sm:p-6 bg-gradient-to-br from-amber-50/90 via-white to-yellow-50/60 border-2 border-amber-300 rounded-2xl space-y-3 shadow-sm">
    <div class="flex items-center gap-2.5 text-amber-950 font-black text-[14pt] sm:text-[15pt] pb-2 border-b border-amber-200">
      <i class="fa-solid fa-lightbulb text-amber-600 text-xl"></i>
      <span>4. 💡 Bí kíp & Cách ghi nhớ kiến thức nhanh (Khắc sâu không quên):</span>
    </div>
    <ul class="text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">${tipHtml}</ul>
  </div>
</div>`;
  }

  window.createStandardTheoryHTML = createStandardTheoryHTML;

  // BÀI 1: GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC (CHUẨN 4 MỤC SGK KNTT & ĐỒNG BỘ VIDEO BÀI GIẢNG)
  window.DEDICATED_LESSONS_DB["toan11_bai1"] = {
    id: "toan11_bai1",
    lessonTitle: "Bài 1: Giá trị lượng giác của góc lượng giác",
    grade: "Lớp 11",
    matcher: (title) => {
      const t = title.toLowerCase();
      return t.includes("bài 1:") || (t.includes("giá trị lượng giác") && t.includes("góc lượng giác"));
    },
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Góc lượng giác, đơn vị radian và độ dài cung tròn",
        theory: createStandardTheoryHTML(
          "Bài 1: Giá trị lượng giác của góc lượng giác", "Lớp 11", 1,
          "Góc lượng giác, đơn vị radian và độ dài cung tròn",
          `<p>Khái niệm mở rộng từ hình học phẳng sang lượng giác:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Khái niệm góc lượng giác:</strong> Khi một tia quay quanh gốc $O$ từ tia đầu $Ou$ đến tia cuối $Ov$, nó quét nên một góc lượng giác, ký hiệu là $(Ou, Ov)$. Chiều quay ngược chiều kim đồng hồ là <em>chiều dương</em>; chiều cùng chiều kim đồng hồ là <em>chiều âm</em>.</li>
            <li><strong>Họ số đo góc lượng giác:</strong> Một cặp tia đầu $Ou$ và tia cuối $Ov$ xác định vô số góc lượng giác sai khác nhau số nguyên lần $360^\\circ$ (hoặc $2\\pi\\text{ rad}$): $\\text{sđ}(Ou, Ov) = \\alpha + k360^\\circ$ hay $\\alpha + k2\\pi$ ($k \\in \\mathbb{Z}$).</li>
            <li><strong>Đơn vị radian:</strong> Góc ở tâm chắn một cung có độ dài bằng đúng bán kính đường tròn gọi là góc có số đo $1\\text{ radian}$ ($1\\text{ rad}$). Công thức chuyển đổi: $1^\\circ = \\frac{\\pi}{180}\\text{ rad}, \\quad 1\\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ$.</li>
            <li><strong>Độ dài cung tròn:</strong> Cung tròn có số đo $\\alpha\\text{ rad}$ trên đường tròn bán kính $R$ có độ dài là $l = R\\alpha$.</li>
          </ul>`,
          `<li>Các mốc góc đặc biệt cần nhớ ngay: $30^\\circ = \\frac{\\pi}{6}$, $45^\\circ = \\frac{\\pi}{4}$, $60^\\circ = \\frac{\\pi}{3}$, $90^\\circ = \\frac{\\pi}{2}$, $180^\\circ = \\pi$, $360^\\circ = 2\\pi$.</li>
          <li>Khi áp dụng công thức tính độ dài cung $l = R\\alpha$, số đo góc $\\alpha$ bắt buộc phải ở đơn vị <strong>radian</strong>! Nếu đề bài cho số đo theo độ $a^\\circ$, phải đổi sang radian bằng công thức $\\alpha = a \\times \\frac{\\pi}{180}$ trước khi nhân.</li>`,
          `<li>Quên đổi đơn vị góc từ độ sang radian trước khi dùng $l = R\\alpha$ (lấy trực tiếp $R \\times a^\\circ$).</li>
          <li>Nhầm dấu của góc khi tia quay cùng chiều kim đồng hồ (cùng chiều kim đồng hồ là chiều ÂM, mang dấu $-$).</li>`,
          `<li><em>"Độ sang Rad nhân Pi chia một trăm tám - Ngược chiều đồng hồ là chiều DƯƠNG!"</em></li>`
        ),
        mcqs: [
          {
            question: "Góc có số đo $150^\\circ$ đổi sang đơn vị radian bằng:",
            options: ["A. $\\frac{5\\pi}{6}$", "B. $\\frac{2\\pi}{3}$", "C. $\\frac{3\\pi}{4}$", "D. $\\frac{7\\pi}{6}$"],
            correct: "A",
            explanation: "$150^\\circ = 150 \\times \\frac{\\pi}{180} = \\frac{5\\pi}{6}\\text{ rad}$.",
            hint1: "Nhân số độ với $\\frac{\\pi}{180}$.",
            hint2: "$\\frac{150}{180} = \\frac{5}{6}$."
          },
          {
            question: "Trên đường tròn bán kính $R = 8\\text{ cm}$, độ dài cung tròn có số đo $\\alpha = \\frac{3\\pi}{4}\\text{ rad}$ bằng:",
            options: ["A. $6\\pi\\text{ cm}$", "B. $8\\pi\\text{ cm}$", "C. $12\\pi\\text{ cm}$", "D. $4\\pi\\text{ cm}$"],
            correct: "A",
            explanation: "Độ dài cung tròn là: $l = R\\alpha = 8 \\times \\frac{3\\pi}{4} = 6\\pi\\text{ cm}$.",
            hint1: "Áp dụng công thức $l = R\\alpha$.",
            hint2: "$8 \\times \\frac{3}{4} = 6$."
          },
          {
            question: "Một bánh xe quay được 3,5 vòng ngược chiều kim đồng hồ. Góc lượng giác quét được có số đo bằng:",
            options: ["A. $7\\pi\\text{ rad}$", "B. $-7\\pi\\text{ rad}$", "C. $\\frac{7\\pi}{2}\\text{ rad}$", "D. $14\\pi\\text{ rad}$"],
            correct: "A",
            explanation: "Một vòng quay trọn vẹn ngược chiều kim đồng hồ (chiều dương) tương ứng góc $+2\\pi\\text{ rad}$. Vậy 3,5 vòng quét được $3,5 \\times 2\\pi = 7\\pi\\text{ rad}$.",
            hint1: "1 vòng quay ngược chiều kim đồng hồ là $+2\\pi$.",
            hint2: "$3,5 \\times 2\\pi = 7\\pi$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Đường tròn lượng giác & Điểm biểu diễn góc lượng giác",
        theory: createStandardTheoryHTML(
          "Bài 1: Giá trị lượng giác của góc lượng giác", "Lớp 11", 2,
          "Đường tròn lượng giác & Điểm biểu diễn góc lượng giác",
          `<p>Mô hình biểu diễn góc trên mặt phẳng toạ độ Oxy:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Đường tròn lượng giác:</strong> Là đường tròn tâm tại gốc toạ độ $O(0;0)$, bán kính $R = 1$, được định hướng (chiều dương ngược chiều kim đồng hồ) và lấy điểm $A(1;0)$ làm điểm gốc.</li>
            <li><strong>Bốn điểm mốc chính:</strong> $A(1; 0)$ ứng với góc $0$, $B(0; 1)$ ứng với $\\frac{\\pi}{2}$, $A'(-1; 0)$ ứng với $\\pi$, $B'(0; -1)$ ứng với $\\frac{3\\pi}{2}$ (hoặc $-\\frac{\\pi}{2}$).</li>
            <li><strong>Điểm biểu diễn góc lượng giác:</strong> Với mỗi góc lượng giác có số đo $\\alpha$, có duy nhất một điểm $M$ trên đường tròn lượng giác sao cho $\\text{sđ}(OA, OM) = \\alpha$. Ta gọi $M$ là điểm biểu diễn của góc lượng giác số đo $\\alpha$.</li>
            <li><strong>Số điểm biểu diễn của họ góc:</strong> Họ góc lượng giác dạng $\\alpha + k\\frac{2\\pi}{n}$ ($k \\in \\mathbb{Z}$) được biểu diễn bởi đúng $n$ điểm phân biệt trên đường tròn lượng giác, tạo thành các đỉnh của một đa giác đều $n$ cạnh.</li>
          </ul>`,
          `<li>Khi tìm điểm biểu diễn góc lớn hơn $2\\pi$ hoặc âm, hãy phân tích $\\alpha = \\alpha_0 + k2\\pi$ với $\\alpha_0 \\in [0; 2\\pi)$ để xác định vị trí tức thì.</li>
          <li>Họ góc $\\alpha + k\\pi$ ($k \\in \\mathbb{Z}$) có 2 điểm biểu diễn đối xứng nhau qua tâm toạ độ $O$.</li>`,
          `<li>Quên triệt tiêu chu kỳ $k2\\pi$ dẫn đến xoay quá nhiều vòng gây nhầm lẫn toạ độ.</li>
          <li>Nhầm lẫn giữa các góc phần tư: I (góc từ $0$ đến $\\frac{\\pi}{2}$), II (từ $\\frac{\\pi}{2}$ đến $\\pi$), III (từ $\\pi$ đến $\\frac{3\\pi}{2}$), IV (từ $\\frac{3\\pi}{2}$ đến $2\\pi$).</li>`,
          `<li><em>"Chu kỳ $k2\\pi$ trùng điểm cũ – Chia bước nhảy cho $2\\pi$ ra ngay số điểm biểu diễn!"</em></li>`
        ),
        mcqs: [
          {
            question: "Điểm biểu diễn của góc lượng giác $\\alpha = \\frac{7\\pi}{2}$ trùng với điểm nào sau đây trên đường tròn lượng giác?",
            options: ["A. $B'(0; -1)$", "B. $B(0; 1)$", "C. $A'( -1; 0)$", "D. $A(1; 0)$"],
            correct: "A",
            explanation: "Ta có $\\frac{7\\pi}{2} = 4\\pi - \\frac{\\pi}{2} = -\\frac{\\pi}{2} + 2 \\times 2\\pi$. Điểm biểu diễn trùng với điểm biểu diễn góc $-\\frac{\\pi}{2}$, tức là $B'(0; -1)$.",
            hint1: "Tách $\\frac{7\\pi}{2} = 4\\pi - \\frac{\\pi}{2}$.",
            hint2: "Bỏ $4\\pi = 2 \\times 2\\pi$, còn lại góc $-\\frac{\\pi}{2}$ tương ứng trục tung âm."
          },
          {
            question: "Số điểm biểu diễn của họ góc lượng giác $\\alpha = \\frac{\\pi}{3} + k\\frac{\\pi}{2}$ ($k \\in \\mathbb{Z}$) trên đường tròn lượng giác là:",
            options: ["A. 4 điểm", "B. 2 điểm", "C. 3 điểm", "D. 6 điểm"],
            correct: "A",
            explanation: "Khoảng cách bước nhảy chu kỳ là $\\frac{\\pi}{2}$. Số điểm biểu diễn phân biệt trên đường tròn lượng giác là $\\frac{2\\pi}{\\pi/2} = 4$ điểm, tạo thành một hình vuông.",
            hint1: "Áp dụng quy tắc họ góc $\\alpha + k\\frac{2\\pi}{n}$ có $n$ điểm biểu diễn.",
            hint2: "Ta có $\\frac{\\pi}{2} = \\frac{2\\pi}{4} \\Rightarrow n = 4$."
          },
          {
            question: "Góc lượng giác $\\alpha = -\\frac{2\\pi}{3}$ có điểm biểu diễn thuộc góc phần tư thứ mấy?",
            options: ["A. Góc phần tư thứ III", "B. Góc phần tư thứ II", "C. Góc phần tư thứ IV", "D. Góc phần tư thứ I"],
            correct: "A",
            explanation: "Ta có $-\\frac{2\\pi}{3} = -120^\\circ$. Quay từ tia $OA(1;0)$ theo chiều âm góc $120^\\circ$ sẽ vượt qua $-\\frac{\\pi}{2}$ ($-90^\\circ$) và rơi vào góc phần tư thứ III ($-\\pi < -\\frac{2\\pi}{3} < -\\frac{\\pi}{2}$).",
            hint1: "$-\\frac{2\\pi}{3} = -120^\\circ$.",
            hint2: "Điểm nằm ở góc phần tư III (phía dưới bên trái)."
          }
        ]
      },
      {
        sectionNumber: 3,
        sectionTitle: "Mục 3: Giá trị lượng giác của góc lượng giác & Dấu theo các góc phần tư",
        theory: createStandardTheoryHTML(
          "Bài 1: Giá trị lượng giác của góc lượng giác", "Lớp 11", 3,
          "Giá trị lượng giác của góc lượng giác & Dấu theo các góc phần tư",
          `<p>Định nghĩa 4 giá trị lượng giác theo toạ độ điểm $M(x_M; y_M)$ trên đường tròn lượng giác:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Sin và Cos:</strong> $\\cos \\alpha = x_M$ (hoành độ), $\\quad \\sin \\alpha = y_M$ (tung độ). Ta luôn có: $-1 \\le \\sin\\alpha \\le 1, \\quad -1 \\le \\cos\\alpha \\le 1$.</li>
            <li><strong>Tang và Cô-tang:</strong> $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{y_M}{x_M}$ $(\\alpha \\ne \\frac{\\pi}{2} + k\\pi)$, $\\quad \\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha} = \\frac{x_M}{y_M}$ $(\\alpha \\ne k\\pi)$.</li>
            <li><strong>Dấu theo 4 góc phần tư:</strong>
              <br/>• Góc phần tư I ($0 < \\alpha < \\frac{\\pi}{2}$): $\\sin > 0, \\cos > 0, \\tan > 0, \\cot > 0$ (tất cả đều dương).
              <br/>• Góc phần tư II ($\\frac{\\pi}{2} < \\alpha < \\pi$): $\\sin > 0$, còn $\\cos < 0, \\tan < 0, \\cot < 0$.
              <br/>• Góc phần tư III ($\\pi < \\alpha < \\frac{3\\pi}{2}$): $\\tan > 0, \\cot > 0$, còn $\\sin < 0, \\cos < 0$.
              <br/>• Góc phần tư IV ($\\frac{3\\pi}{2} < \\alpha < 2\\pi$): $\\cos > 0$, còn $\\sin < 0, \\tan < 0, \\cot < 0$.
            </li>
          </ul>`,
          `<li>Thần chú xét dấu siêu tốc: <em>"Nhất cả - Nhì sin - Tam tang cot - Tứ cos"</em> (ở góc phần tư nào thì hàm đó mang dấu dương, còn lại mang dấu âm).</li>
          <li>Trục hoành $Ox$ là trục Cosin ("Cos nằm"), trục tung $Oy$ là trục Sin ("Sin đứng").</li>`,
          `<li>Quên lấy dấu âm khi khai căn trong các góc phần tư II, III, IV (chẳng hạn ở góc phần tư II thì $\\cos\\alpha = -\\sqrt{1 - \\sin^2\\alpha}$).</li>
          <li>Bấm máy tính tính lượng giác mà quên kiểm tra chế độ Radian (chữ R) hay Độ (chữ D).</li>`,
          `<li><em>"Sin đứng, Cos nằm - Nhất cả, Nhì sin, Tam tang cot, Tứ cos!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho góc lượng giác $\\alpha$ thoả mãn $\\frac{\\pi}{2} < \\alpha < \\pi$. Khẳng định nào sau đây là ĐÚNG?",
            options: ["A. $\\sin \\alpha > 0, \\cos \\alpha < 0$", "B. $\\sin \\alpha < 0, \\cos \\alpha > 0$", "C. $\\sin \\alpha > 0, \\cos \\alpha > 0$", "D. $\\sin \\alpha < 0, \\cos \\alpha < 0$"],
            correct: "A",
            explanation: "Góc $\\alpha$ thuộc góc phần tư thứ II. Theo quy tắc 'Nhì sin', tại đây chỉ có $\\sin \\alpha > 0$, còn $\\cos \\alpha < 0$.",
            hint1: "Góc phần tư thứ II nằm ở phía trên bên trái trục toạ độ.",
            hint2: "Tung độ dương ($y > 0$), hoành độ âm ($x < 0$)."
          },
          {
            question: "Cho $\\cos \\alpha = -\\frac{3}{5}$ với $\\pi < \\alpha < \\frac{3\\pi}{2}$. Giá trị của $\\sin \\alpha$ bằng:",
            options: ["A. $-\\frac{4}{5}$", "B. $\\frac{4}{5}$", "C. $-\\frac{2}{5}$", "D. $\\frac{16}{25}$"],
            correct: "A",
            explanation: "Vì $\\pi < \\alpha < \\frac{3\\pi}{2}$ (góc phần tư thứ III) nên $\\sin \\alpha < 0$. Áp dụng $\\sin^2 \\alpha = 1 - \\cos^2 \\alpha = 1 - \\frac{9}{25} = \\frac{16}{25} \\Rightarrow \\sin \\alpha = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$.",
            hint1: "Ở góc phần tư thứ III thì $\\sin \\alpha < 0$.",
            hint2: "$\\sin \\alpha = -\\sqrt{1 - (-3/5)^2} = -4/5$."
          },
          {
            question: "Giá trị của $\\tan\\left(-\\frac{\\pi}{4}\\right)$ bằng:",
            options: ["A. $-1$", "B. $1$", "C. $0$", "D. $-\\sqrt{3}$"],
            correct: "A",
            explanation: "Góc đối: $\\tan(-\\alpha) = -\\tan \\alpha$. Do đó $\\tan\\left(-\\frac{\\pi}{4}\\right) = -\\tan\\left(\\frac{\\pi}{4}\\right) = -1$.",
            hint1: "Áp dụng tính chất góc đối: $\\tan(-x) = -\\tan x$.",
            hint2: "$\\tan(\\pi/4) = 1$."
          }
        ]
      },
      {
        sectionNumber: 4,
        sectionTitle: "Mục 4: Các hệ thức lượng giác cơ bản & Giá trị lượng giác góc có liên quan đặc biệt",
        theory: createStandardTheoryHTML(
          "Bài 1: Giá trị lượng giác của góc lượng giác", "Lớp 11", 4,
          "Các hệ thức lượng giác cơ bản & Giá trị lượng giác góc có liên quan đặc biệt",
          `<p>Bốn hệ thức lượng giác cốt lõi và các góc liên quan đặc biệt:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>4 Hệ thức lượng giác cơ bản:</strong>
              <br/>1) $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.
              <br/>2) $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha} \\quad (\\alpha \\ne \\frac{\\pi}{2} + k\\pi)$.
              <br/>3) $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha} \\quad (\\alpha \\ne k\\pi)$.
              <br/>4) $\\tan \\alpha \\cdot \\cot \\alpha = 1 \\quad (\\alpha \\ne k\\frac{\\pi}{2})$.
            </li>
            <li><strong>Giá trị lượng giác các cung có liên quan đặc biệt:</strong>
              <br/>• <em>Góc đối nhau ($\\alpha$ và $-\\alpha$):</em> $\\cos(-\\alpha) = \\cos\\alpha$, còn $\\sin, \\tan, \\cot$ đều đổi dấu.
              <br/>• <em>Góc bù nhau ($\\alpha$ và $\\pi - \\alpha$):</em> $\\sin(\\pi - \\alpha) = \\sin\\alpha$, còn $\\cos, \\tan, \\cot$ đều đổi dấu.
              <br/>• <em>Góc phụ nhau ($\\alpha$ và $\\frac{\\pi}{2} - \\alpha$):</em> Chéo hàm $\\sin \\leftrightarrow \\cos$ và $\\tan \\leftrightarrow \\cot$.
              <br/>• <em>Góc hơn kém $\\pi$ ($\\alpha$ và $\\alpha + \\pi$):</em> $\\tan(\\alpha + \\pi) = \\tan\\alpha, \\cot(\\alpha + \\pi) = \\cot\\alpha$, còn $\\sin, \\cos$ đổi dấu.
            </li>
          </ul>`,
          `<li>Bài toán tính biểu thức phân thức đồng bậc đối với $\\sin\\alpha$ và $\\cos\\alpha$ khi biết $\\tan\\alpha$: Hãy chia cả tử và mẫu cho $\\cos\\alpha$ (hoặc $\\cos^2\\alpha$) để chuyển toàn bộ biểu thức về $\\tan\\alpha$.</li>
          <li>Khi biết $\\sin\\alpha + \\cos\\alpha = S$, bình phương hai vế: $S^2 = 1 + 2\\sin\\alpha\\cos\\alpha \\Rightarrow \\sin\\alpha\\cos\\alpha = \\frac{S^2 - 1}{2}$.</li>`,
          `<li>Nhầm dấu giữa Sin bù và Cos bù: Hai góc bù nhau thì CHỈ CÓ Sin giữ nguyên dấu dương; $\\cos(\\pi - \\alpha) = -\\cos\\alpha$!</li>
          <li>Quên chéo hàm khi gặp góc phụ $\\frac{\\pi}{2} - \\alpha$ (chẳng hạn $\\sin(\\pi/2 - x) = \\cos x$).</li>`,
          `<li><em>"Cos đối - Sin bù - Phụ chéo - Hơn kém Pi tang cot!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho $\\tan \\alpha = 3$. Giá trị của biểu thức $P = \\frac{3\\sin \\alpha - 2\\cos \\alpha}{\\sin \\alpha + \\cos \\alpha}$ bằng:",
            options: ["A. $\\frac{7}{4}$", "B. $\\frac{5}{4}$", "C. $1$", "D. $\\frac{9}{4}$"],
            correct: "A",
            explanation: "Vì $\\tan\\alpha$ xác định nên $\\cos\\alpha \\ne 0$. Chia cả tử và mẫu cho $\\cos \\alpha$:\n$$P = \\frac{3\\tan \\alpha - 2}{\\tan \\alpha + 1} = \\frac{3(3) - 2}{3 + 1} = \\frac{7}{4}.$$",
            hint1: "Chia cả tử và mẫu cho $\\cos \\alpha$.",
            hint2: "Thay $\\tan \\alpha = 3$ vào biểu thức vừa rút gọn."
          },
          {
            question: "Rút gọn biểu thức $A = \\cos(\\pi - x) + \\sin\\left(\\frac{\\pi}{2} - x\\right)$ ta được kết quả là:",
            options: ["A. $0$", "B. $2\\cos x$", "C. $-2\\cos x$", "D. $2\\sin x$"],
            correct: "A",
            explanation: "Theo công thức góc bù và góc phụ:\n$\\cos(\\pi - x) = -\\cos x$ và $\\sin\\left(\\frac{\\pi}{2} - x\\right) = \\cos x$.\nDo đó $A = -\\cos x + \\cos x = 0$.",
            hint1: "Áp dụng công thức Sin bù và Phụ chéo.",
            hint2: "$-\\cos x + \\cos x = 0$."
          },
          {
            question: "Cho $\\sin \\alpha + \\cos \\alpha = \\frac{1}{2}$. Giá trị của tích $\\sin \\alpha \\cos \\alpha$ bằng:",
            options: ["A. $-\\frac{3}{8}$", "B. $\\frac{3}{8}$", "C. $-\\frac{3}{4}$", "D. $\\frac{1}{4}$"],
            correct: "A",
            explanation: "Bình phương hai vế ta có:\n$(\\sin \\alpha + \\cos \\alpha)^2 = \\sin^2 \\alpha + \\cos^2 \\alpha + 2\\sin \\alpha \\cos \\alpha = 1 + 2\\sin \\alpha \\cos \\alpha = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$.\nSuy ra $2\\sin \\alpha \\cos \\alpha = \\frac{1}{4} - 1 = -\\frac{3}{4} \\Rightarrow \\sin \\alpha \\cos \\alpha = -\\frac{3}{8}$.",
            hint1: "Bình phương hai vế $(\\sin \\alpha + \\cos \\alpha)^2$.",
            hint2: "$1 + 2\\sin \\alpha \\cos \\alpha = 1/4$."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho góc lượng giác $\\alpha$ thoả mãn $\\pi < \\alpha < \\frac{3\\pi}{2}$.",
        items: [
          { key: "a", text: "Điểm biểu diễn góc $\\alpha$ thuộc góc phần tư thứ III.", correct: "true", explain: "Khoảng $(\\pi; 3\\pi/2)$." },
          { key: "b", text: "Ta luôn có $\\sin \\alpha < 0$ và $\\cos \\alpha < 0$.", correct: "true", explain: "Cả x và y đều âm." },
          { key: "c", text: "Giá trị $\\tan \\alpha > 0$.", correct: "true", explain: "Âm chia âm ra dương." },
          { key: "d", text: "Nếu $\\cos \\alpha = -\\frac{5}{13}$ thì $\\sin \\alpha = \\frac{12}{13}$.", correct: "false", explain: "Ở góc phần tư III thì $\\sin$ phải âm: $-\\frac{12}{13}$." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Về giá trị lượng giác của các góc đặc biệt:",
        items: [
          { key: "a", text: "$\\sin \\frac{\\pi}{6} = \\frac{1}{2}$ và $\\cos \\frac{\\pi}{3} = \\frac{1}{2}$.", correct: "true", explain: "Chuẩn SGK." },
          { key: "b", text: "$\\tan \\frac{\\pi}{4} = 1$ và $\\cot \\frac{\\pi}{4} = 1$.", correct: "true", explain: "Tại $45^\\circ$." },
          { key: "c", text: "$\\cos \\pi = -1$ và $\\sin \\pi = 0$.", correct: "true", explain: "Tại $\\pi$." },
          { key: "d", text: "$\\tan \\frac{\\pi}{2} = 0$.", correct: "false", explain: "Tại $\\pi/2$, $\\tan$ không xác định." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Cho tam giác $ABC$.",
        items: [
          { key: "a", text: "$\\sin(A + B) = \\sin C$.", correct: "true", explain: "Hai góc bù nhau có sin bằng nhau." },
          { key: "b", text: "$\\cos(A + B) = -\\cos C$.", correct: "true", explain: "Hai góc bù nhau có cos đối nhau." },
          { key: "c", text: "$\\tan(A + B) = -\\tan C$ (với tam giác không vuông).", correct: "true", explain: "Hai góc bù nhau." },
          { key: "d", text: "$\\cos \\frac{A + B}{2} = \\sin \\frac{C}{2}$.", correct: "true", explain: "Hai góc phụ nhau chéo hàm." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho $\\tan \\alpha = 3$.",
        items: [
          { key: "a", text: "$\\cot \\alpha = \\frac{1}{3}$.", correct: "true", explain: "Nghịch đảo." },
          { key: "b", text: "$1 + \\tan^2 \\alpha = 10$.", correct: "true", explain: "$1 + 9 = 10$." },
          { key: "c", text: "$\\cos^2 \\alpha = 0.1$.", correct: "true", explain: "$1/10 = 0.1$." },
          { key: "d", text: "$\\sin^2 \\alpha = 0.8$.", correct: "false", explain: "$\\sin^2 = 1 - 0.1 = 0.9 \\neq 0.8$." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Về số đo cung tròn và chuyển động:",
        items: [
          { key: "a", text: "Bánh xe bán kính $30\\text{ cm}$ quay 2 vòng đi được $120\\pi\\text{ cm}$.", correct: "true", explain: "$30 \\times 4\\pi = 120\\pi$." },
          { key: "b", text: "Kim phút quay 15 phút quét góc $-\\frac{\\pi}{2}\\text{ rad}$.", correct: "true", explain: "Cùng chiều kim đồng hồ góc $90^\\circ$." },
          { key: "c", text: "Cung $1\\text{ rad}$ có độ dài đúng bằng bán kính $R$.", correct: "true", explain: "Định nghĩa radian." },
          { key: "d", text: "Đơn vị radian chỉ áp dụng khi bán kính $R = 1$.", correct: "false", explain: "Áp dụng cho mọi bán kính." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về biểu thức lượng giác:",
        items: [
          { key: "a", text: "$\\sin^4 x + \\cos^4 x = 1 - 2\\sin^2 x \\cos^2 x$.", correct: "true", explain: "Hằng đẳng thức." },
          { key: "b", text: "Biểu thức có thể viết lại là $1 - \\frac{1}{2}\\sin^2 2x$.", correct: "true", explain: "Công thức nhân đôi." },
          { key: "c", text: "Giá trị lớn nhất của $\\sin^4 x + \\cos^4 x$ bằng 1.", correct: "true", explain: "Khi $\\sin 2x = 0$." },
          { key: "d", text: "Giá trị nhỏ nhất của $\\sin^4 x + \\cos^4 x$ bằng 0.", correct: "false", explain: "GTNN là $1 - 1/2 = 1/2$." }
        ]
      }
    ]
  };
  // BÀI 2: CÔNG THỨC LƯỢNG GIÁC (CHUẨN 3 MỤC SGK KNTT & ĐỒNG BỘ VIDEO BÀI GIẢNG)
  window.DEDICATED_LESSONS_DB["toan11_bai2"] = {
    id: "toan11_bai2",
    lessonTitle: "Bài 2: Công thức lượng giác",
    grade: "Lớp 11",
    matcher: (title) => {
      const t = title.toLowerCase();
      return t.includes("bài 2:") || (t.includes("công thức lượng giác") && !t.includes("hàm số"));
    },
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Công thức cộng",
        theory: createStandardTheoryHTML(
          "Bài 2: Công thức lượng giác", "Lớp 11", 1,
          "Công thức cộng",
          `<p>Bộ công thức cộng mở rộng cho sin, cosin và tang:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Công thức cộng của Cosin:</strong><br/>
              • $\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$<br/>
              • $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$
            </li>
            <li><strong>Công thức cộng của Sin:</strong><br/>
              • $\\sin(a - b) = \\sin a \\cos b - \\cos a \\sin b$<br/>
              • $\\sin(a + b) = \\sin a \\cos b + \\cos a \\sin b$
            </li>
            <li><strong>Công thức cộng của Tang:</strong><br/>
              • $\\tan(a - b) = \\dfrac{\\tan a - \\tan b}{1 + \\tan a \\tan b}$<br/>
              • $\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$
            </li>
          </ul>`,
          `<li>Thần chú ghi nhớ: <em>"Cos cos sin sin dấu đổi - Sin cos cos sin dấu cùng"</em>.</li>
          <li>Với tang: Tử số cùng dấu với vế trái, mẫu số đổi dấu và có số 1 đứng đầu!</li>`,
          `<li>Quên đổi dấu trong công thức cosin của tổng: $\\cos(a+b) = \\cos a\\cos b - \\sin a\\sin b$ (dấu TRỪ chứ không phải dấu CỘNG).</li>
          <li>Nhầm dấu ở mẫu số của $\\tan(a+b)$ thành $1 + \\tan a\\tan b$.</li>`,
          `<li><em>"Cos thì cos cos sin sin dấu đổi - Sin thì sin cos cos sin dấu cùng!"</em></li>`
        ),
        mcqs: [
          {
            question: "Giá trị chính xác của $\\cos 75^\\circ$ bằng:",
            options: ["A. $\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "B. $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "C. $\\frac{\\sqrt{2} - \\sqrt{6}}{4}$", "D. $\\frac{\\sqrt{3} - 1}{2}$"],
            correct: "A",
            explanation: "Tách $75^\\circ = 45^\\circ + 30^\\circ$:\n$$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2}\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}.$$",
            hint1: "Áp dụng công thức cộng $\\cos(45^\\circ + 30^\\circ)$.",
            hint2: "$\\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ$."
          },
          {
            question: "Cho $\\sin a = \\frac{3}{5}$ (với $\\frac{\\pi}{2} < a < \\pi$) và $\\cos b = \\frac{12}{13}$ (với $0 < b < \\frac{\\pi}{2}$). Giá trị của $\\sin(a + b)$ bằng:",
            options: ["A. $\\frac{16}{65}$", "B. $\\frac{56}{65}$", "C. $-\\frac{16}{65}$", "D. $\\frac{33}{65}$"],
            correct: "A",
            explanation: "Vì $\\frac{\\pi}{2} < a < \\pi$ nên $\\cos a = -\\sqrt{1 - 9/25} = -\\frac{4}{5}$.\nVì $0 < b < \\frac{\\pi}{2}$ nên $\\sin b = \\sqrt{1 - 144/169} = \\frac{5}{13}$.\n$$\\sin(a + b) = \\sin a\\cos b + \\cos a\\sin b = \\frac{3}{5}\\frac{12}{13} + \\left(-\\frac{4}{5}\\right)\\frac{5}{13} = \\frac{36 - 20}{65} = \\frac{16}{65}.$$",
            hint1: "Tìm $\\cos a = -4/5$ và $\\sin b = 5/13$.",
            hint2: "$\\sin(a+b) = \\sin a\\cos b + \\cos a\\sin b$."
          },
          {
            question: "Cho $\\tan a = 2$ và $\\tan b = 3$. Giá trị của $\\tan(a + b)$ bằng:",
            options: ["A. $-1$", "B. $1$", "C. $5$", "D. $-\\frac{5}{7}$"],
            correct: "A",
            explanation: "Áp dụng công thức cộng tang:\n$$\\tan(a + b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b} = \\frac{2 + 3}{1 - 2 \\times 3} = \\frac{5}{-5} = -1.$$",
            hint1: "Áp dụng công thức $\\tan(a+b) = \\frac{\\tan a + \\tan b}{1 - \\tan a\\tan b}$.",
            hint2: "$\\frac{2+3}{1 - 6} = \\frac{5}{-5} = -1$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Công thức nhân đôi và công thức hạ bậc",
        theory: createStandardTheoryHTML(
          "Bài 2: Công thức lượng giác", "Lớp 11", 2,
          "Công thức nhân đôi và công thức hạ bậc",
          `<p>Hệ thống công thức nhân đôi và hạ bậc then chốt:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Công thức nhân đôi:</strong><br/>
              • $\\sin 2a = 2\\sin a \\cos a$<br/>
              • $\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$<br/>
              • $\\tan 2a = \\dfrac{2\\tan a}{1 - \\tan^2 a}$
            </li>
            <li><strong>Công thức hạ bậc:</strong><br/>
              • $\\sin^2 a = \\dfrac{1 - \\cos 2a}{2}$<br/>
              • $\\cos^2 a = \\dfrac{1 + \\cos 2a}{2}$
            </li>
          </ul>`,
          `<li>$\\cos 2a$ có 3 dạng biến đổi tương đương linh hoạt.</li>
          <li>Hạ bậc làm giảm số mũ từ 2 xuống 1 và làm tăng góc lên gấp đôi.</li>`,
          `<li>Nhầm lẫn tự tiện ném hệ số 2 ra ngoài: $\\sin 2a \\neq 2\\sin a$!</li>
          <li>Nhầm dấu giữa hai dạng hạ bậc: $\\sin^2$ mang dấu TRỪ, $\\cos^2$ mang dấu CỘNG.</li>`,
          `<li><em>"Sin gấp đôi bằng hai sin cos - Hạ bậc góc nhân đôi: Sin trừ, Cos cộng!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho $\\cos a = -\\frac{3}{5}$ với $\\pi < a < \\frac{3\\pi}{2}$. Giá trị của $\\sin 2a$ bằng:",
            options: ["A. $\\frac{24}{25}$", "B. $-\\frac{24}{25}$", "C. $\\frac{7}{25}$", "D. $-\\frac{7}{25}$"],
            correct: "A",
            explanation: "Vì $\\pi < a < \\frac{3\\pi}{2}$ nên $\\sin a = -\\sqrt{1 - 9/25} = -\\frac{4}{5}$.\nDo đó $\\sin 2a = 2\\sin a\\cos a = 2\\left(-\\frac{4}{5}\\right)\\left(-\\frac{3}{5}\\right) = \\frac{24}{25}$.",
            hint1: "Tìm $\\sin a = -4/5$.",
            hint2: "$\\sin 2a = 2(-4/5)(-3/5) = 24/25$."
          },
          {
            question: "Giá trị của $\\cos^2\\frac{\\pi}{8}$ tính theo công thức hạ bậc bằng:",
            options: ["A. $\\frac{2 + \\sqrt{2}}{4}$", "B. $\\frac{2 - \\sqrt{2}}{4}$", "C. $\\frac{\\sqrt{2 + \\sqrt{2}}}{2}$", "D. $\\frac{1 + \\sqrt{2}}{2}$"],
            correct: "A",
            explanation: "Áp dụng công thức hạ bậc:\n$$\\cos^2\\frac{\\pi}{8} = \\frac{1 + \\cos\\frac{\\pi}{4}}{2} = \\frac{1 + \\frac{\\sqrt{2}}{2}}{2} = \\frac{2 + \\sqrt{2}}{4}.$$",
            hint1: "Áp dụng $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$.",
            hint2: "Góc nhân đôi là $\\frac{\\pi}{4}$ có $\\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$."
          },
          {
            question: "Rút gọn biểu thức $B = \\frac{1 - \\cos 2x + \\sin 2x}{1 + \\cos 2x + \\sin 2x}$ ta được:",
            options: ["A. $\\tan x$", "B. $\\cot x$", "C. $\\sin x$", "D. $\\cos x$"],
            correct: "A",
            explanation: "Biến đổi tử số: $(1 - \\cos 2x) + \\sin 2x = 2\\sin^2 x + 2\\sin x\\cos x = 2\\sin x(\\sin x + \\cos x)$.\nBiến đổi mẫu số: $(1 + \\cos 2x) + \\sin 2x = 2\\cos^2 x + 2\\sin x\\cos x = 2\\cos x(\\cos x + \\sin x)$.\nRút gọn ta được $\\frac{\\sin x}{\\cos x} = \\tan x$.",
            hint1: "Thay $1 - \\cos 2x = 2\\sin^2 x$ và $1 + \\cos 2x = 2\\cos^2 x$.",
            hint2: "Đặt nhân tử chung và triệt tiêu $(\\sin x + \\cos x)$."
          }
        ]
      },
      {
        sectionNumber: 3,
        sectionTitle: "Mục 3: Công thức biến đổi tích thành tổng và tổng thành tích",
        theory: createStandardTheoryHTML(
          "Bài 2: Công thức lượng giác", "Lớp 11", 3,
          "Công thức biến đổi tích thành tổng và tổng thành tích",
          `<p>Hệ thống công thức biến đổi tích - tổng trong giải toán lượng giác:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Biến đổi tích thành tổng:</strong><br/>
              • $\\cos a \\cos b = \\dfrac{1}{2}\\left[\\cos(a - b) + \\cos(a + b)\\right]$<br/>
              • $\\sin a \\sin b = \\dfrac{1}{2}\\left[\\cos(a - b) - \\cos(a + b)\\right]$<br/>
              • $\\sin a \\cos b = \\dfrac{1}{2}\\left[\\sin(a - b) + \\sin(a + b)\\right]$
            </li>
            <li><strong>Biến đổi tổng thành tích:</strong><br/>
              • $\\cos u + \\cos v = 2\\cos\\dfrac{u+v}{2} \\cos\\dfrac{u-v}{2}$<br/>
              • $\\cos u - \\cos v = -2\\sin\\dfrac{u+v}{2} \\sin\\dfrac{u-v}{2}$<br/>
              • $\\sin u + \\sin v = 2\\sin\\dfrac{u+v}{2} \\cos\\dfrac{u-v}{2}$<br/>
              • $\\sin u - \\sin v = 2\\cos\\dfrac{u+v}{2} \\sin\\dfrac{u-v}{2}$
            </li>
          </ul>`,
          `<li>Bài ca lượng giác: <em>"Cos cộng cos bằng hai cos cos - Cos trừ cos bằng trừ hai sin sin - Sin cộng sin bằng hai sin cos - Sin trừ sin bằng hai cos sin"</em>.</li>
          <li>Khi tích thành tổng: Luôn có $\\frac{1}{2}$ phía trước và viết góc hiệu $(a-b)$ trước góc tổng $(a+b)$.</li>`,
          `<li>Quên dấu trừ phía trước ở công thức $\\cos u - \\cos v = -2\\sin\\frac{u+v}{2}\\sin\\frac{u-v}{2}$.</li>
          <li>Quên chia đôi góc khi chuyển từ tổng thành tích.</li>`,
          `<li><em>"Cos cộng cos bằng hai cos cos - Cos trừ cos bằng trừ hai sin sin!"</em></li>`
        ),
        mcqs: [
          {
            question: "Giá trị chính xác của biểu thức $P = \\sin 75^\\circ \\cos 15^\\circ$ bằng:",
            options: ["A. $\\frac{2 + \\sqrt{3}}{4}$", "B. $\\frac{2 - \\sqrt{3}}{4}$", "C. $\\frac{1}{4}$", "D. $\\frac{\\sqrt{3}}{4}$"],
            correct: "A",
            explanation: "Áp dụng biến đổi tích thành tổng:\n$$P = \\frac{1}{2}[\\sin(75^\\circ - 15^\\circ) + \\sin(75^\\circ + 15^\\circ)] = \\frac{1}{2}[\\sin 60^\\circ + \\sin 90^\\circ] = \\frac{1}{2}\\left(\\frac{\\sqrt{3}}{2} + 1\\right) = \\frac{2 + \\sqrt{3}}{4}.$$",
            hint1: "Áp dụng $\\sin a\\cos b = \\frac{1}{2}[\\sin(a-b) + \\sin(a+b)]$.",
            hint2: "$\\frac{1}{2}(\\sin 60^\\circ + \\sin 90^\\circ)$."
          },
          {
            question: "Rút gọn biểu thức $K = \\frac{\\sin x + \\sin 3x + \\sin 5x}{\\cos x + \\cos 3x + \\cos 5x}$ ta được:",
            options: ["A. $\\tan 3x$", "B. $\\cot 3x$", "C. $\\tan x$", "D. $\\tan 5x$"],
            correct: "A",
            explanation: "Ghép đối xứng:\n$$\\sin 5x + \\sin x = 2\\sin 3x\\cos 2x \\Rightarrow \\text{Tử} = \\sin 3x(2\\cos 2x + 1).$$" + "\n" + "$$\\cos 5x + \\cos x = 2\\cos 3x\\cos 2x \\Rightarrow \\text{Mẫu} = \\cos 3x(2\\cos 2x + 1).$$" + "\n" + "Rút gọn được $\\frac{\\sin 3x}{\\cos 3x} = \\tan 3x$.",
            hint1: "Ghép $\\sin 5x$ với $\\sin x$ và $\\cos 5x$ với $\\cos x$.",
            hint2: "Đặt nhân tử chung $2\\cos 2x + 1$."
          },
          {
            question: "Giá trị của tích chuỗi $T = \\cos\\frac{\\pi}{7}\\cos\\frac{2\\pi}{7}\\cos\\frac{4\\pi}{7}$ bằng:",
            options: ["A. $-\\frac{1}{8}$", "B. $\\frac{1}{8}$", "C. $-\\frac{1}{4}$", "D. $\\frac{1}{16}$"],
            correct: "A",
            explanation: "Nhân hai vế với $\\sin\\frac{\\pi}{7}$:\n$$T\\sin\\frac{\\pi}{7} = \\frac{1}{8}\\sin\\frac{8\\pi}{7} = -\\frac{1}{8}\\sin\\frac{\\pi}{7} \\implies T = -\\frac{1}{8}.$$",
            hint1: "Nhân hai vế với $\\sin\\frac{\\pi}{7}$.",
            hint2: "Áp dụng liên tiếp công thức nhân đôi sin."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Về các công thức lượng giác:",
        items: [
          { key: "a", text: "$\\sin 2x = 2\\sin x \\cos x$ với mọi $x$.", correct: "true", explain: "Công thức nhân đôi." },
          { key: "b", text: "$\\cos 2x = 1 - 2\\sin^2 x$.", correct: "true", explain: "Nhân đôi qua sin." },
          { key: "c", text: "$\\cos 2x = 2\\cos^2 x - 1$.", correct: "true", explain: "Nhân đôi qua cos." },
          { key: "d", text: "$\\cos 2x = 1 + 2\\cos^2 x$.", correct: "false", explain: "Sai dấu." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Cho $\\tan x = 2$.",
        items: [
          { key: "a", text: "$\\tan 2x = -\\frac{4}{3}$.", correct: "true", explain: "$\\frac{2(2)}{1-4} = -4/3$." },
          { key: "b", text: "$\\cos 2x = -\\frac{3}{5}$.", correct: "true", explain: "$\\frac{1-4}{1+4} = -3/5$." },
          { key: "c", text: "$\\sin 2x = \\frac{4}{5}$.", correct: "true", explain: "$\\frac{2(2)}{1+4} = 4/5$." },
          { key: "d", text: "$\\tan 2x > 0$.", correct: "false", explain: "$\\tan 2x = -4/3 < 0$." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Xét biểu thức $A = \\cos(x + \\pi/4) + \\cos(x - \\pi/4)$.",
        items: [
          { key: "a", text: "Rút gọn được $A = \\sqrt{2}\\cos x$.", correct: "true", explain: "$2\\cos x \\cos(\\pi/4) = \\sqrt{2}\\cos x$." },
          { key: "b", text: "Giá trị lớn nhất của $A$ là $\\sqrt{2}$.", correct: "true", explain: "Khi $\\cos x = 1$." },
          { key: "c", text: "Giá trị nhỏ nhất của $A$ là $-\\sqrt{2}$.", correct: "true", explain: "Khi $\\cos x = -1$." },
          { key: "d", text: "Biểu thức $A$ nhận giá trị 2.", correct: "false", explain: "GTLN là $\\sqrt{2} \\approx 1.414 < 2$." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Về các đẳng thức biến đổi:",
        items: [
          { key: "a", text: "$\\sin x + \\cos x = \\sqrt{2}\\sin(x + \\pi/4)$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "$\\sin x - \\cos x = \\sqrt{2}\\sin(x - \\pi/4)$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "$\\cos x - \\sin x = \\sqrt{2}\\cos(x + \\pi/4)$.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "(\\sin x + \\cos x)^2 = 1 + \\cos 2x$.", correct: "false", explain: "Là $1 + \\sin 2x$." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Cho $x + y = \\pi/4$.",
        items: [
          { key: "a", text: "$\\tan(x+y) = 1$.", correct: "true", explain: "$\\tan(\\pi/4) = 1$." },
          { key: "b", text: "$\\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 1$.", correct: "true", explain: "Công thức cộng." },
          { key: "c", text: "$(1 + \\tan x)(1 + \\tan y) = 2$.", correct: "true", explain: "$1 + \\tan x + \\tan y + \\tan x \\tan y = 1 + 1 = 2$." },
          { key: "d", text: "$(1 + \\tan x)(1 + \\tan y) = 3$.", correct: "false", explain: "Bằng 2." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về công thức hạ bậc:",
        items: [
          { key: "a", text: "$\\sin^2 x = \\frac{1 - \\cos 2x}{2}$.", correct: "true", explain: "Hạ bậc sin." },
          { key: "b", text: "$\\cos^2 x = \\frac{1 + \\cos 2x}{2}$.", correct: "true", explain: "Hạ bậc cos." },
          { key: "c", text: "Hạ bậc làm giảm số mũ và tăng gấp đôi góc.", correct: "true", explain: "Từ $x$ thành $2x$." },
          { key: "d", text: "$\\sin^2 2x = \\frac{1 - \\cos 2x}{2}$.", correct: "false", explain: "Phải là $\\frac{1 - \\cos 4x}{2}$." }
        ]
      }
    ]
  };

  // BÀI 3: HÀM SỐ LƯỢNG GIÁC
  window.DEDICATED_LESSONS_DB["toan11_bai3"] = {
    id: "toan11_bai3",
    lessonTitle: "Bài 3: Hàm số lượng giác",
    grade: "Lớp 11",
    matcher: (title) => {
      const t = title.toLowerCase();
      return t.includes("bài 3:") || t.includes("hàm số lượng giác");
    },
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn",
        theory: createStandardTheoryHTML(
          "Bài 3: Hàm số lượng giác", "Lớp 11", 1,
          "Khái niệm hàm số lượng giác, tính chẵn - lẻ và chu kỳ tuần hoàn",
          `<p>Kiến thức cơ bản về hàm số lượng giác, tính tuần hoàn và tính chẵn - lẻ chuẩn SGK Toán 11 KNTT:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Khái niệm hàm số lượng giác:</strong> Các quy tắc đặt tương ứng mỗi số thực $x$ với $\\sin x, \\cos x, \\tan x, \\cot x$.</li>
            <li><strong>Hàm số tuần hoàn:</strong> Hàm số $y = f(x)$ xác định trên $D$ được gọi là tuần hoàn nếu tồn tại số $T \\ne 0$ sao cho $\\forall x \\in D \\Rightarrow x \\pm T \\in D$ và $f(x+T) = f(x)$. Số $T > 0$ nhỏ nhất thỏa mãn gọi là <em>chu kỳ</em> của hàm số.</li>
            <li><strong>Chu kỳ chuẩn:</strong>
              <br/>• $y = \\sin(\\omega x + \\varphi)$ và $y = \\cos(\\omega x + \\varphi)$ có chu kỳ $T = \\frac{2\\pi}{|\\omega|}$.
              <br/>• $y = \\tan(\\omega x + \\varphi)$ và $y = \\cot(\\omega x + \\varphi)$ có chu kỳ $T = \\frac{\\pi}{|\\omega|}$.
            </li>
            <li><strong>Tính chẵn - lẻ:</strong>
              <br/>• $y = \\cos x$ là hàm số chẵn: $\\cos(-x) = \\cos x$ (đối xứng qua trục $Oy$).
              <br/>• $y = \\sin x, y = \\tan x, y = \\cot x$ là hàm số lẻ (đối xứng qua gốc tọa độ $O$).
            </li>
          </ul>`,
          `<li>Hàm cosin là hàm duy nhất trong 4 hàm lượng giác cơ bản là hàm số chẵn.</li>
          <li>Khi tìm chu kỳ $T = \\frac{2\\pi}{|\\omega|}$ hoặc $T = \\frac{\\pi}{|\\omega|}$, luôn lấy trị tuyệt đối của hệ số $\\omega$.</li>
          <li>Điều kiện xác định: phân thức mẫu khác 0, biểu thức trong căn bậc hai không âm.</li>`,
          `<li>Nhầm chu kỳ của $\\tan$ và $\\cot$ thành $2\\pi$ (thực tế chỉ là $\\pi$).</li>
          <li>Quên xét tính đối xứng của tập xác định $D$ trước khi kết luận tính chẵn - lẻ.</li>`,
          `<li><em>"Cos chẵn trục Oy – Sin, Tan, Cot lẻ nhận gốc O – Chu kỳ sin, cos hai pi – Tan, cot chỉ một pi!"</em></li>`
        ),
        mcqs: [
          {
            question: "Chu kỳ tuần hoàn của hàm số $y = \\cos 4x$ là:",
            options: ["A. $T = \\frac{\\pi}{2}$", "B. $T = 2\\pi$", "C. $T = \\pi$", "D. $T = 4\\pi$"],
            correct: "A",
            explanation: "Áp dụng công thức chu kỳ hàm cosin: $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$.",
            hint1: "Công thức $T = \\frac{2\\pi}{|\\omega|}$.",
            hint2: "$\\frac{2\\pi}{4} = \\frac{\\pi}{2}$."
          },
          {
            question: "Trong các hàm số sau, hàm số nào là hàm số chẵn?",
            options: ["A. $y = \\cos 3x$", "B. $y = \\sin 2x$", "C. $y = \\tan x$", "D. $y = \\sin x + \\cos x$"],
            correct: "A",
            explanation: "TXĐ $D = \\mathbb{R}$. Ta có $f(-x) = \\cos(-3x) = \\cos 3x = f(x)$, vậy hàm số chẵn.",
            hint1: "Hàm cosin là hàm số chẵn.",
            hint2: "$\\cos(-\\alpha) = \\cos \\alpha$."
          },
          {
            question: "Chu kỳ tuần hoàn của hàm số $y = \\tan\\left(\\frac{x}{3} - \\frac{\\pi}{6}\\right)$ là:",
            options: ["A. $T = 3\\pi$", "B. $T = \\frac{\\pi}{3}$", "C. $T = 6\\pi$", "D. $T = \\pi$"],
            correct: "A",
            explanation: "Chu kỳ hàm tang là $T = \\frac{\\pi}{|\\omega|} = \\frac{\\pi}{1/3} = 3\\pi$.",
            hint1: "Chu kỳ hàm tang: $T = \\frac{\\pi}{|\\omega|}$.",
            hint2: "$\\omega = \\frac{1}{3} \\Rightarrow T = 3\\pi$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Đồ thị và tính chất của hàm số sin và côsin",
        theory: createStandardTheoryHTML(
          "Bài 3: Hàm số lượng giác", "Lớp 11", 2,
          "Đồ thị và tính chất của hàm số sin và côsin",
          `<p>Khảo sát toàn diện hai hàm số sóng $y = \\sin x$ và $y = \\cos x$ chuẩn SGK Toán 11 KNTT:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Hàm số $y = \\sin x$:</strong>
              <br/>• Tập xác định: $D = \\mathbb{R}$; Tập giá trị: $[-1; 1]$.
              <br/>• Tuần hoàn chu kỳ $2\\pi$; là hàm số lẻ, đồ thị nhận gốc $O(0;0)$ làm tâm đối xứng.
              <br/>• Đồng biến trên mỗi khoảng $\\left(-\\frac{\\pi}{2} + k2\\pi; \\frac{\\pi}{2} + k2\\pi\\right)$, nghịch biến trên mỗi khoảng $\\left(\\frac{\\pi}{2} + k2\\pi; \\frac{3\\pi}{2} + k2\\pi\\right)$.
              <br/>• Đồ thị là đường hình sin (sinusoid) đi qua gốc $O(0;0)$.
            </li>
            <li><strong>Hàm số $y = \\cos x$:</strong>
              <br/>• Tập xác định: $D = \\mathbb{R}$; Tập giá trị: $[-1; 1]$.
              <br/>• Tuần hoàn chu kỳ $2\\pi$; là hàm số chẵn, đồ thị nhận trục tung $Oy$ làm trục đối xứng.
              <br/>• Đồng biến trên mỗi khoảng $(-\\pi + k2\\pi; k2\\pi)$, nghịch biến trên mỗi khoảng $(k2\\pi; \\pi + k2\\pi)$.
              <br/>• Đồ thị là đường hình sin đi qua điểm $(0; 1)$.
            </li>
          </ul>`,
          `<li>$-1 \\le \\sin x \\le 1$ và $-1 \\le \\cos x \\le 1$ với mọi $x \\in \\mathbb{R}$.</li>
          <li>Đồ thị hàm số $y = \\cos x$ thu được bằng cách tịnh tiến đồ thị $y = \\sin x$ sang trái một đoạn $\\frac{\\pi}{2}$ vì $\\cos x = \\sin(x + \\frac{\\pi}{2})$.</li>`,
          `<li>Nhầm lẫn khoảng đồng biến và nghịch biến giữa sin và cosin.</li>
          <li>Quên chặn $-1 \\le \\sin, \\cos \\le 1$ khi tìm GTLN, GTNN dẫn đến kết quả sai.</li>`,
          `<li><em>"Sin qua gốc O lẻ loi – Cos qua đỉnh (0;1) chẵn đôi – Biên độ từ trừ 1 tới 1!"</em></li>`
        ),
        mcqs: [
          {
            question: "Tập giá trị của hàm số $y = 3\\sin 2x - 1$ là:",
            options: ["A. $[-4; 2]$", "B. $[-1; 1]$", "C. $[-3; 3]$", "D. $[-2; 4]$"],
            correct: "A",
            explanation: "Vì $-1 \\le \\sin 2x \\le 1 \\Rightarrow -3 \\le 3\\sin 2x \\le 3 \\Rightarrow -4 \\le y \\le 2$.",
            hint1: "$-1 \\le \\sin 2x \\le 1$.",
            hint2: "Nhân 3 rồi trừ 1."
          },
          {
            question: "Giá trị lớn nhất của hàm số $y = 2\\cos\\left(x - \\frac{\\pi}{3}\\right) + 5$ là:",
            options: ["A. 7", "B. 5", "C. 3", "D. 2"],
            correct: "A",
            explanation: "Vì $\\cos\\left(x - \\frac{\\pi}{3}\\right) \\le 1 \\Rightarrow y \\le 2(1) + 5 = 7$.",
            hint1: "$\\cos \\le 1$.",
            hint2: "$2(1) + 5 = 7$."
          },
          {
            question: "Hàm số $y = \\cos x$ nghịch biến trên khoảng nào sau đây?",
            options: ["A. $(0; \\pi)$", "B. $(-\\pi; 0)$", "C. $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$", "D. $(\\pi; 2\\pi)$"],
            correct: "A",
            explanation: "Hàm số $y = \\cos x$ nghịch biến trên mỗi khoảng $(k2\\pi; \\pi + k2\\pi)$. Với $k = 0$, hàm nghịch biến trên $(0; \\pi)$.",
            hint1: "Trên nửa trên đường tròn lượng giác từ 0 đến $\\pi$, hoành độ giảm dần từ 1 về -1.",
            hint2: "Khoảng $(0; \\pi)$."
          }
        ]
      },
      {
        sectionNumber: 3,
        sectionTitle: "Mục 3: Đồ thị và tính chất của hàm số tang và côtang",
        theory: createStandardTheoryHTML(
          "Bài 3: Hàm số lượng giác", "Lớp 11", 3,
          "Đồ thị và tính chất của hàm số tang và côtang",
          `<p>Khảo sát toàn diện hai hàm số gián đoạn $y = \\tan x$ và $y = \\cot x$ chuẩn SGK Toán 11 KNTT:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Hàm số $y = \\tan x$:</strong>
              <br/>• Tập xác định: $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$.
              <br/>• Tập giá trị: $\\mathbb{R}$; Tuần hoàn chu kỳ $\\pi$.
              <br/>• Là hàm số lẻ, đồ thị nhận gốc $O(0;0)$ làm tâm đối xứng.
              <br/>• Luôn đồng biến trên mỗi khoảng xác định $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$.
              <br/>• Các đường tiệm cận đứng là $x = \\frac{\\pi}{2} + k\\pi$.
            </li>
            <li><strong>Hàm số $y = \\cot x$:</strong>
              <br/>• Tập xác định: $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$.
              <br/>• Tập giá trị: $\\mathbb{R}$; Tuần hoàn chu kỳ $\\pi$.
              <br/>• Là hàm số lẻ, đồ thị nhận mỗi điểm $(\\frac{\\pi}{2} + k\\pi; 0)$ làm tâm đối xứng.
              <br/>• Luôn nghịch biến trên mỗi khoảng xác định $(k\\pi; \\pi + k\\pi)$.
              <br/>• Các đường tiệm cận đứng là $x = k\\pi$.
            </li>
          </ul>`,
          `<li>Hàm số $y = \\tan x$ luôn đồng biến trên TỪNG khoảng xác định, tuyệt đối không nói đồng biến trên $\\mathbb{R}$ hay trên $D$.</li>
          <li>Tập giá trị của $\\tan$ và $\\cot$ là toàn bộ $\\mathbb{R}$, do đó chúng không có GTLN và GTNN trên tập xác định của chúng.</li>`,
          `<li>Nói hàm số $y = \\tan x$ đồng biến trên tập xác định $D$ là SAI (phải là trên từng khoảng xác định).</li>
          <li>Nhầm tập xác định của $\\tan$ (mẫu $\\cos x \\ne 0$) với $\\cot$ (mẫu $\\sin x \\ne 0$).</li>`,
          `<li><em>"Tan tăng liên tục, cot giảm đều – Chu kỳ một pi, tiệm cận đứng theo chân!"</em></li>`
        ),
        mcqs: [
          {
            question: "Tập xác định của hàm số $y = \\tan 2x$ là:",
            options: [
              "A. $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{4} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$",
              "B. $D = \\mathbb{R} \\setminus \\left\\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\right\\}$",
              "C. $D = \\mathbb{R} \\setminus \\left\\{k\\frac{\\pi}{2}, k \\in \\mathbb{Z}\\right\\}$",
              "D. $D = \\mathbb{R}$"
            ],
            correct: "A",
            explanation: "ĐK: $\\cos 2x \\ne 0 \\Leftrightarrow 2x \\ne \\frac{\\pi}{2} + k\\pi \\Leftrightarrow x \\ne \\frac{\\pi}{4} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}$.",
            hint1: "Mẫu $\\cos 2x \\ne 0$.",
            hint2: "$x \\ne \\frac{\\pi}{4} + k\\frac{\\pi}{2}$."
          },
          {
            question: "Chu kỳ tuần hoàn của hàm số $y = \\cot 3x$ là:",
            options: ["A. $T = \\frac{\\pi}{3}$", "B. $T = \\pi$", "C. $T = \\frac{2\\pi}{3}$", "D. $T = 3\\pi$"],
            correct: "A",
            explanation: "Chu kỳ hàm côtang là $T = \\frac{\\pi}{|\\omega|} = \\frac{\\pi}{3}$.",
            hint1: "$T = \\frac{\\pi}{\\omega}$.",
            hint2: "$\\frac{\\pi}{3}$."
          },
          {
            question: "Mệnh đề nào sau đây là ĐÚNG?",
            options: [
              "A. Hàm số $y = \\tan x$ đồng biến trên khoảng $\\left(-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right)$.",
              "B. Hàm số $y = \\tan x$ đồng biến trên $\\mathbb{R}$.",
              "C. Hàm số $y = \\cot x$ đồng biến trên khoảng $(0; \\pi)$.",
              "D. Hàm số $y = \\tan x$ có giá trị lớn nhất bằng 1."
            ],
            correct: "A",
            explanation: "Hàm số $y = \\tan x$ đồng biến trên mỗi khoảng xác định $\\left(-\\frac{\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi\\right)$.",
            hint1: "Hàm tang luôn đồng biến trên từng khoảng xác định.",
            hint2: "Phương án A đúng."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho hai hàm số $y = \\sin x$ và $y = \\cos x$.",
        items: [
          { key: "a", text: "Cả hai đều có TXĐ là $\\mathbb{R}$.", correct: "true", explain: "TXĐ chuẩn." },
          { key: "b", text: "Tập giá trị là đoạn $[-1; 1]$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "$\\sin x$ là hàm lẻ, $\\cos x$ là hàm chẵn.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "Chu kỳ tuần hoàn của cả hai hàm số là $\\pi$.", correct: "false", explain: "Chu kỳ là $2\\pi$." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Cho hàm số $y = 2\\cos(3x - \\pi/4) + 1$.",
        items: [
          { key: "a", text: "Chu kỳ là $T = \\frac{2\\pi}{3}$.", correct: "true", explain: "$2\\pi/3$." },
          { key: "b", text: "GTLN bằng 3.", correct: "true", explain: "$2(1) + 1 = 3$." },
          { key: "c", text: "GTNN bằng -1.", correct: "true", explain: "$2(-1) + 1 = -1$." },
          { key: "d", text: "Tập giá trị là $[-2; 2]$.", correct: "false", explain: "Là $[-1; 3]$." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Về đồ thị hàm số lượng giác:",
        items: [
          { key: "a", text: "Đồ thị $y = \\cos x$ đi qua $(0; 1)$.", correct: "true", explain: "$\\cos 0 = 1$." },
          { key: "b", text: "Đồ thị $y = \\sin x$ đi qua $(0; 0)$.", correct: "true", explain: "$\\sin 0 = 0$." },
          { key: "c", text: "Đồ thị $y = \\tan x$ nhận $x = \\pi/2 + k\\pi$ làm tiệm cận đứng.", correct: "true", explain: "Gián đoạn vô cực." },
          { key: "d", text: "Đồ thị $y = \\cot x$ đi qua $(0; 0)$.", correct: "false", explain: "Không xác định tại $x = 0$." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho hàm số $y = \\tan 2x$.",
        items: [
          { key: "a", text: "TXĐ $x \\neq \\pi/4 + k\\pi/2$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "Chu kỳ $T = \\pi/2$.", correct: "true", explain: "$\\pi/2$." },
          { key: "c", text: "Đồng biến trên $(-\\pi/4; \\pi/4)$.", correct: "true", explain: "Đồng biến." },
          { key: "d", text: "GTLN bằng 1.", correct: "false", explain: "Tập giá trị là $\\mathbb{R}$." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Về dao động điều hoà $x(t) = A\\cos(\\omega t + \\varphi)$:",
        items: [
          { key: "a", text: "Biên độ $A > 0$.", correct: "true", explain: "Vật lí." },
          { key: "b", text: "Chu kỳ $T = \\frac{2\\pi}{\\omega}$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "Vận tốc $v(t) = x'(t) = -\\omega A \\sin(\\omega t + \\varphi)$.", correct: "true", explain: "Đạo hàm." },
          { key: "d", text: "Gia tốc cùng pha li độ.", correct: "false", explain: "Gia tốc ngược pha li độ." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về hàm số $y = |\\sin x|$:",
        items: [
          { key: "a", text: "Là hàm số chẵn.", correct: "true", explain: "Trị tuyệt đối." },
          { key: "b", text: "Chu kỳ tuần hoàn là $\\pi$.", correct: "true", explain: "Chu kỳ giảm nửa." },
          { key: "c", text: "Tập giá trị là $[0; 1]$.", correct: "true", explain: "Không âm." },
          { key: "d", text: "GTNN bằng -1.", correct: "false", explain: "GTNN bằng 0." }
        ]
      }
    ]
  };
  // BÀI 4: PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN
  window.DEDICATED_LESSONS_DB["toan11_bai4"] = {
    id: "toan11_bai4",
    lessonTitle: "Bài 4: Phương trình lượng giác cơ bản",
    grade: "Lớp 11",
    matcher: (title) => {
      const t = title.toLowerCase();
      return t.includes("bài 4:") || t.includes("phương trình lượng giác cơ bản");
    },
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Khái niệm phương trình tương đương & Phương trình sin x = m",
        theory: createStandardTheoryHTML(
          "Bài 4: Phương trình lượng giác cơ bản", "Lớp 11", 1,
          "Khái niệm phương trình tương đương & Phương trình sin x = m",
          `<p>Kiến thức trọng tâm về phương trình tương đương và phương trình $\\sin x = m$:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Phương trình tương đương:</strong> Hai phương trình được gọi là tương đương trên tập xác định $D$ nếu chúng có cùng tập nghiệm (ký hiệu $\\Leftrightarrow$). Phép biến đổi tương đương bao gồm cộng/trừ cùng biểu thức xác định, nhân/chia với biểu thức luôn khác 0.</li>
            <li><strong>Điều kiện có nghiệm của $\\sin x = m$:</strong> Phương trình có nghiệm khi và chỉ khi $-1 \\le m \\le 1$ ($|m| \\le 1$). Nếu $|m| > 1$, phương trình vô nghiệm.</li>
            <li><strong>Công thức nghiệm tổng quát:</strong> Khi $|m| \\le 1$, gọi $\\alpha$ là một góc thỏa mãn $\\sin\\alpha = m$:
              $$\\sin x = \\sin\\alpha \\Leftrightarrow \\begin{bmatrix} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{bmatrix} \\quad (k \\in \\mathbb{Z})$$
            </li>
            <li><strong>Đơn vị độ:</strong> $\\sin x = \\sin\\alpha^\\circ \\Leftrightarrow \\begin{bmatrix} x = \\alpha^\\circ + k360^\\circ \\\\ x = 180^\\circ - \\alpha^\\circ + k360^\\circ \\end{bmatrix}$.</li>
            <li><strong>3 trường hợp đặc biệt:</strong>
              <br/>• $\\sin x = 0 \\Leftrightarrow x = k\\pi$ ($k \\in \\mathbb{Z}$).
              <br/>• $\\sin x = 1 \\Leftrightarrow x = \\frac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$).
              <br/>• $\\sin x = -1 \\Leftrightarrow x = -\\frac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$).
            </li>
          </ul>`,
          `<li>Nghiệm của $\\sin$ gồm 2 nhánh: $\\alpha$ và $\\pi - \\alpha$ (đuôi $k2\\pi$).</li>
          <li>Khi $m = 0$, đuôi nghiệm rút gọn thành $k\\pi$.</li>
          <li>Khi $|m| > 1$, phương trình vô nghiệm ngay lập tức.</li>`,
          `<li>Quên nhánh nghiệm bù $\\pi - \\alpha + k2\\pi$.</li>
          <li>Nhầm đuôi $k2\\pi$ thành $k\\pi$ cho nghiệm $\\sin x = 1$ hoặc $-1$.</li>`,
          `<li><em>"Sin: alpha và pi trừ alpha – Chu kỳ k hai pi!"</em></li>`
        ),
        mcqs: [
          {
            question: "Tất cả các nghiệm của phương trình $\\sin x = \\frac{\\sqrt{3}}{2}$ là:",
            options: [
              "A. $x = \\frac{\\pi}{3} + k2\\pi$ hoặc $x = \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "B. $x = \\pm \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "C. $x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "D. $x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)"
            ],
            correct: "A",
            explanation: "Vì $\\sin\\frac{\\pi}{3} = \\frac{\\sqrt{3}}{2}$ nên nghiệm là $x = \\frac{\\pi}{3} + k2\\pi$ hoặc $x = \\pi - \\frac{\\pi}{3} + k2\\pi = \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$).",
            hint1: "Tìm góc $\\alpha$ sao cho $\\sin\\alpha = \\frac{\\sqrt{3}}{2}$.",
            hint2: "Áp dụng $\\sin x = \\sin\\alpha \\Leftrightarrow x = \\alpha + k2\\pi \\lor x = \\pi - \\alpha + k2\\pi$."
          },
          {
            question: "Nghiệm của phương trình $\\sin x = -1$ là:",
            options: [
              "A. $x = -\\frac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "B. $x = \\frac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "C. $x = -\\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)",
              "D. $x = \\pi + k2\\pi$ ($k \\in \\mathbb{Z}$)"
            ],
            correct: "A",
            explanation: "Điểm biểu diễn $\\sin x = -1$ trên đường tròn lượng giác là điểm cực nam $B'(0; -1)$, tương ứng góc $-\\frac{\\pi}{2} + k2\\pi$.",
            hint1: "Trường hợp đặc biệt điểm đáy của đường tròn.",
            hint2: "Đuôi nghiệm là $k2\\pi$."
          },
          {
            question: "Số nghiệm của phương trình $\\sin\\left(2x - \\frac{\\pi}{4}\\right) = 0$ trên đoạn $[0; \\pi]$ là:",
            options: ["A. 2", "B. 1", "C. 3", "D. 4"],
            correct: "A",
            explanation: "$2x - \\frac{\\pi}{4} = k\\pi \\Leftrightarrow x = \\frac{\\pi}{8} + \\frac{k\\pi}{2}$. Với $x \\in [0; \\pi] \\Rightarrow 0 \\le \\frac{\\pi}{8} + \\frac{k\\pi}{2} \\le \\pi \\Leftrightarrow -\\frac{1}{4} \\le k \\le \\frac{7}{4}$. Do $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0; 1\\}$. Có đúng 2 nghiệm là $x = \\frac{\\pi}{8}$ và $x = \\frac{5\\pi}{8}$.",
            hint1: "$\\sin u = 0 \\Leftrightarrow u = k\\pi$.",
            hint2: "Giải bất phương trình tìm số nguyên $k$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Phương trình lượng giác cos x = m",
        theory: createStandardTheoryHTML(
          "Bài 4: Phương trình lượng giác cơ bản", "Lớp 11", 2,
          "Phương trình lượng giác cos x = m",
          `<p>Kiến thức trọng tâm về phương trình lượng giác $\\cos x = m$:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Điều kiện có nghiệm:</strong> $-1 \\le m \\le 1$ ($|m| \\le 1$). Nếu $|m| > 1$, phương trình vô nghiệm.</li>
            <li><strong>Công thức nghiệm tổng quát:</strong> Khi $|m| \\le 1$, gọi $\\alpha$ là một góc thỏa mãn $\\cos\\alpha = m$:
              $$\\cos x = \\cos\\alpha \\Leftrightarrow x = \\pm\\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$
            </li>
            <li><strong>Đơn vị độ:</strong> $\\cos x = \\cos\\alpha^\\circ \\Leftrightarrow x = \\pm\\alpha^\\circ + k360^\\circ$.</li>
            <li><strong>3 trường hợp đặc biệt:</strong>
              <br/>• $\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$).
              <br/>• $\\cos x = 1 \\Leftrightarrow x = k2\\pi$ ($k \\in \\mathbb{Z}$).
              <br/>• $\\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi$ ($k \\in \\mathbb{Z}$).
            </li>
            <li><strong>Kỹ thuật biến đổi đưa về $\\cos$:</strong>
              <br/>• $-\\cos\\alpha = \\cos(\\pi - \\alpha)$.
              <br/>• $\\sin\\alpha = \\cos\\left(\\frac{\\pi}{2} - \\alpha\\right)$.
            </li>
          </ul>`,
          `<li>Nghiệm của $\\cos$ có tính đối xứng: $x = \\pm\\alpha + k2\\pi$.</li>
          <li>Khi $m = 0$, nghiệm là $x = \\frac{\\pi}{2} + k\\pi$ (đuôi $k\\pi$).</li>
          <li>Muốn đổi $-\\cos u$ về $\\cos$, dùng góc bù $\\pi - u$.</li>`,
          `<li>Nhầm công thức cos thành $x = \\pi - \\alpha$ giống như sin.</li>
          <li>Quên đuôi $k\\pi$ khi $\\cos x = 0$, viết nhầm thành $k2\\pi$.</li>`,
          `<li><em>"Cos đối: cộng trừ alpha – Bằng không: nửa pi cộng k pi!"</em></li>`
        ),
        mcqs: [
          {
            question: "Nghiệm của phương trình $\\cos x = -\\frac{1}{2}$ là:",
            options: [
              "A. $x = \\pm \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "B. $x = \\pm \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "C. $x = \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "D. $x = \\pm \\frac{2\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)"
            ],
            correct: "A",
            explanation: "Vì $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ nên $\\cos x = \\cos\\frac{2\\pi}{3} \\Leftrightarrow x = \\pm \\frac{2\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$).",
            hint1: "Bấm $\\arccos(-1/2) = 2\\pi/3$.",
            hint2: "Nghiệm đối xứng $x = \\pm \\alpha + k2\\pi$."
          },
          {
            question: "Tất cả các nghiệm của phương trình $\\cos x = 0$ là:",
            options: [
              "A. $x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$)",
              "B. $x = k\\pi$ ($k \\in \\mathbb{Z}$)",
              "C. $x = \\frac{\\pi}{2} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "D. $x = \\pi + k2\\pi$ ($k \\in \\mathbb{Z}$)"
            ],
            correct: "A",
            explanation: "Trên đường tròn lượng giác, $\\cos x = 0$ tại 2 điểm cực bắc và cực nam: $x = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$).",
            hint1: "Điểm trên trục tung.",
            hint2: "Đuôi chu kỳ là $k\\pi$."
          },
          {
            question: "Phương trình $\\cos\\left(x + \\frac{\\pi}{6}\\right) = 2$ có bao nhiêu nghiệm?",
            options: ["A. 0 nghiệm", "B. 1 nghiệm", "C. 2 nghiệm", "D. Vô số nghiệm"],
            correct: "A",
            explanation: "Vì $-1 \\le \\cos u \\le 1$ với mọi $u$ mà $2 > 1$ nên phương trình vô nghiệm.",
            hint1: "Kiểm tra tập giá trị của hàm cosin.",
            hint2: "$|m| > 1$ thì vô nghiệm."
          }
        ]
      },
      {
        sectionNumber: 3,
        sectionTitle: "Mục 3: Phương trình lượng giác tan x = m và cot x = m",
        theory: createStandardTheoryHTML(
          "Bài 4: Phương trình lượng giác cơ bản", "Lớp 11", 3,
          "Phương trình lượng giác tan x = m và cot x = m",
          `<p>Kiến thức trọng tâm về phương trình lượng giác $\\tan x = m$ và $\\cot x = m$:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Điều kiện có nghiệm:</strong> Cả hai phương trình $\\tan x = m$ và $\\cot x = m$ luôn CÓ NGHIỆM với mọi $m \\in \\mathbb{R}$!</li>
            <li><strong>Công thức nghiệm của $\\tan x = m$:</strong>
              <br/>• Điều kiện xác định: $x \\ne \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$).
              <br/>• Gọi $\\alpha$ là một góc thỏa mãn $\\tan\\alpha = m$:
              $$\\tan x = \\tan\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$
            </li>
            <li><strong>Công thức nghiệm của $\\cot x = m$:</strong>
              <br/>• Điều kiện xác định: $x \\ne k\\pi$ ($k \\in \\mathbb{Z}$).
              <br/>• Gọi $\\alpha$ là một góc thỏa mãn $\\cot\\alpha = m$:
              $$\\cot x = \\cot\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$$
            </li>
            <li><strong>Đặc điểm nổi bật:</strong> Cả $\\tan$ và $\\cot$ chỉ có DUY NHẤT một họ nghiệm với chu kỳ là $\\pi$ (đuôi $+ k\\pi$).</li>
          </ul>`,
          `<li>Tan và Cot luôn có nghiệm với mọi $m \\in \\mathbb{R}$.</li>
          <li>Chỉ có 1 nhánh nghiệm, đuôi $k\\pi$.</li>
          <li>Luôn nhớ đặt điều kiện xác định khi bài toán có $\\tan$ hoặc $\\cot$.</li>`,
          `<li>Nhầm đuôi nghiệm của tan và cot thành $k2\\pi$.</li>
          <li>Tưởng nhầm $\\tan x = 5$ vô nghiệm vì nhầm sang điều kiện của sin và cos.</li>`,
          `<li><em>"Tan và Cot: Nghiệm luôn tồn tại – Đuôi cộng k pi duy nhất một nhánh!"</em></li>`
        ),
        mcqs: [
          {
            question: "Nghiệm của phương trình $\\tan x = \\sqrt{3}$ là:",
            options: [
              "A. $x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$)",
              "B. $x = \\frac{\\pi}{6} + k\\pi$ ($k \\in \\mathbb{Z}$)",
              "C. $x = \\pm \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "D. $x = \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$)"
            ],
            correct: "A",
            explanation: "Vì $\\tan\\frac{\\pi}{3} = \\sqrt{3}$ nên $\\tan x = \\tan\\frac{\\pi}{3} \\Leftrightarrow x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$).",
            hint1: "$\\tan(\\pi/3) = \\sqrt{3}$.",
            hint2: "Đuôi nghiệm là $k\\pi$."
          },
          {
            question: "Nghiệm của phương trình $\\cot x = -1$ là:",
            options: [
              "A. $x = -\\frac{\\pi}{4} + k\\pi$ ($k \\in \\mathbb{Z}$)",
              "B. $x = \\frac{\\pi}{4} + k\\pi$ ($k \\in \\mathbb{Z}$)",
              "C. $x = \\pm \\frac{\\pi}{4} + k2\\pi$ ($k \\in \\mathbb{Z}$)",
              "D. $x = -\\frac{\\pi}{4} + k2\\pi$ ($k \\in \\mathbb{Z}$)"
            ],
            correct: "A",
            explanation: "Ta có $\\cot\\left(-\\frac{\\pi}{4}\\right) = -1 \\Rightarrow x = -\\frac{\\pi}{4} + k\\pi$ ($k \\in \\mathbb{Z}$).",
            hint1: "$\\cot(-\\pi/4) = -1$.",
            hint2: "Duy nhất một họ nghiệm đuôi $k\\pi$."
          },
          {
            question: "Số nghiệm của phương trình $\\tan\\left(2x - \\frac{\\pi}{6}\\right) = 1$ trên khoảng $(0; \\pi)$ là:",
            options: ["A. 2", "B. 1", "C. 3", "D. 4"],
            correct: "A",
            explanation: "Phương trình $\\Leftrightarrow 2x - \\frac{\\pi}{6} = \\frac{\\pi}{4} + k\\pi \\Leftrightarrow 2x = \\frac{5\\pi}{12} + k\\pi \\Leftrightarrow x = \\frac{5\\pi}{24} + \\frac{k\\pi}{2}$. Vì $x \\in (0; \\pi) \\Rightarrow 0 < \\frac{5\\pi}{24} + \\frac{k\\pi}{2} < \\pi \\Leftrightarrow -\\frac{5}{12} < k < \\frac{19}{12}$. Do $k \\in \\mathbb{Z} \\Rightarrow k \\in \\{0; 1\\}$ (2 nghiệm). Cả 2 nghiệm đều thỏa mãn ĐKXĐ $\\cos\\left(2x - \\frac{\\pi}{6}\\right) \\ne 0$.",
            hint1: "$\\tan u = 1 = \\tan(\\pi/4) \\Rightarrow u = \\pi/4 + k\\pi$.",
            hint2: "Chặn khoảng $(0; \\pi)$ tìm các số nguyên $k$."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Xét phương trình $\\sin 2x = \\sin x$.",
        items: [
          { key: "a", text: "Phương trình tương đương $2x = x + k2\\pi$ hoặc $2x = \\pi - x + k2\\pi$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "Áp dụng chuẩn công thức nghiệm của phương trình sin." },
          { key: "b", text: "Họ nghiệm thứ nhất là $x = k2\\pi$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "$2x - x = k2\\pi \\Leftrightarrow x = k2\\pi$." },
          { key: "c", text: "Họ nghiệm thứ hai là $x = \\frac{\\pi}{3} + \\frac{k2\\pi}{3}$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "$3x = \\pi + k2\\pi \\Leftrightarrow x = \\pi/3 + k2\\pi/3$." },
          { key: "d", text: "Trên đoạn $[0; \\pi]$, phương trình có đúng 2 nghiệm phân biệt.", correct: "false", explain: "Có đúng 3 nghiệm: $x = 0$ (từ họ 1), $x = \\pi/3$ (từ họ 2), $x = \\pi$ (từ họ 1 & 2)." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Về điều kiện có nghiệm của các phương trình lượng giác cơ bản:",
        items: [
          { key: "a", text: "Phương trình $\\sin x = m$ có nghiệm khi và chỉ khi $-1 \\le m \\le 1$.", correct: "true", explain: "Tập giá trị của sin là $[-1; 1]$." },
          { key: "b", text: "Phương trình $\\cos x = m$ có nghiệm khi và chỉ khi $-1 \\le m \\le 1$.", correct: "true", explain: "Tập giá trị của cos là $[-1; 1]$." },
          { key: "c", text: "Phương trình $\\tan x = m$ luôn có nghiệm với mọi $m \\in \\mathbb{R}$.", correct: "true", explain: "Tập giá trị của tan là $\\mathbb{R}$." },
          { key: "d", text: "Phương trình $\\sin x = \\sqrt{2}$ có nghiệm thực.", correct: "false", explain: "Vì $\\sqrt{2} \\approx 1.414 > 1$ nên phương trình vô nghiệm." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Xét phương trình $\\cos\\left(2x + \\frac{\\pi}{3}\\right) = 0$.",
        items: [
          { key: "a", text: "Phương trình tương đương $2x + \\frac{\\pi}{3} = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "Trường hợp đặc biệt cos = 0 có đuôi $k\\pi$." },
          { key: "b", text: "Nghiệm tổng quát là $x = \\frac{\\pi}{12} + \\frac{k\\pi}{2}$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "$2x = \\pi/2 - \\pi/3 + k\\pi = \\pi/6 + k\\pi \\Leftrightarrow x = \\pi/12 + k\\pi/2$." },
          { key: "c", text: "Nghiệm dương nhỏ nhất của phương trình là $x = \\frac{\\pi}{12}$.", correct: "true", explain: "Tại $k = 0$, $x = \\pi/12 > 0$ là nhỏ nhất." },
          { key: "d", text: "Trên khoảng $(0; \\pi)$, phương trình có đúng 1 nghiệm.", correct: "false", explain: "Có 2 nghiệm: $\\pi/12$ ($k=0$) và $7\\pi/12$ ($k=1$)." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Xét phương trình $\\sqrt{3}\\tan x - 3 = 0$.",
        items: [
          { key: "a", text: "Phương trình tương đương với $\\tan x = \\sqrt{3}$.", correct: "true", explain: "$3 / \\sqrt{3} = \\sqrt{3}$." },
          { key: "b", text: "Nghiệm tổng quát là $x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "Vì $\\tan(\\pi/3) = \\sqrt{3}$." },
          { key: "c", text: "Nghiệm âm lớn nhất của phương trình là $x = -\\frac{2\\pi}{3}$.", correct: "true", explain: "Tại $k = -1$, $x = \\pi/3 - \\pi = -2\\pi/3$." },
          { key: "d", text: "Phương trình vô nghiệm vì $\\sqrt{3} > 1$.", correct: "false", explain: "Sai, hàm tang nhận mọi giá trị thực nên phương trình luôn có nghiệm." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Cho phương trình $\\sin\\left(x - \\frac{\\pi}{3}\\right) = 0$.",
        items: [
          { key: "a", text: "Phương trình tương đương $x - \\frac{\\pi}{3} = k\\pi$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "Trường hợp sin = 0." },
          { key: "b", text: "Nghiệm tổng quát là $x = \\frac{\\pi}{3} + k\\pi$ ($k \\in \\mathbb{Z}$).", correct: "true", explain: "Chuyển vế đổi dấu chính xác." },
          { key: "c", text: "Trong đoạn $[0; 2\\pi]$, phương trình có đúng 2 nghiệm phân biệt.", correct: "true", explain: "Hai nghiệm là $x = \\pi/3$ ($k=0$) và $x = 4\\pi/3$ ($k=1$)." },
          { key: "d", text: "Tổng các nghiệm của phương trình trong đoạn $[0; 2\\pi]$ bằng $\\frac{5\\pi}{3}$.", correct: "true", explain: "$\\pi/3 + 4\\pi/3 = 5\\pi/3$." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về quy tắc giải và cạm bẫy khi giải phương trình lượng giác:",
        items: [
          { key: "a", text: "Khi giải phương trình chứa $\\tan x$ hoặc $\\cot x$ bắt buộc phải đặt điều kiện xác định.", correct: "true", explain: "ĐKXĐ là bắt buộc để loại trừ các nghiệm vi phạm tập xác định." },
          { key: "b", text: "Đối chiếu nghiệm tìm được với điều kiện xác định để loại bỏ các nghiệm ngoại lai.", correct: "true", explain: "Bước kiểm tra đối chiếu là bắt buộc trong giải toán." },
          { key: "c", text: "Họ nghiệm $x = \\frac{\\pi}{2} + k\\pi$ được biểu diễn bởi đúng 2 điểm trên đường tròn lượng giác.", correct: "true", explain: "Điểm cực bắc $(0; 1)$ ứng với $k$ chẵn và cực nam $(0; -1)$ ứng với $k$ lẻ." },
          { key: "d", text: "Họ nghiệm $x = k2\\pi$ được biểu diễn bởi 2 điểm phân biệt trên đường tròn lượng giác.", correct: "false", explain: "Chỉ biểu diễn bởi đúng 1 điểm duy nhất $A(1; 0)$ trên đường tròn lượng giác." }
        ]
      }
    ]
  };


  window.DEDICATED_LESSONS_DB["toan11_bai5"] = {
    id: "toan11_bai5",
    lessonTitle: "Bài 5: Dãy số",
    grade: "Lớp 11",
    matcher: (title) => {
      const t = title.toLowerCase();
      return (t.includes("bài 5:") || t.includes("dãy số")) && !t.includes("cấp số") && !t.includes("giới hạn");
    },
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Khái niệm dãy số, cách cho dãy số, dãy số tăng và giảm",
        theory: createStandardTheoryHTML(
          "Bài 5: Dãy số", "Lớp 11", 1,
          "Khái niệm dãy số, cách cho dãy số, dãy số tăng và giảm",
          `<p>Dãy số và tính đơn điệu:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>Dãy số là hàm số $u: \\mathbb{N}^* \\to \\mathbb{R}$.</li>
            <li>Dãy số tăng nếu $u_{n+1} - u_n > 0$ với mọi $n \\in \\mathbb{N}^*$.</li>
            <li>Dãy số giảm nếu $u_{n+1} - u_n < 0$ với mọi $n \\in \\mathbb{N}^*$.</li>
          </ul>`,
          `<li>Xét hiệu $u_{n+1} - u_n$ hoặc tỉ số $\\frac{u_{n+1}}{u_n}$ (khi $u_n > 0$).</li>`,
          `<li>Chỉ thử vài số đầu mà không chứng minh cho mọi $n$.</li>`,
          `<li><em>"u sau trừ u trước dương là tăng, âm là giảm!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho dãy số $u_n = \\frac{n}{n + 1}$. Giá trị $u_4$ bằng:",
            options: ["A. $\\frac{4}{5}$", "B. $\\frac{3}{4}$", "C. $\\frac{5}{6}$", "D. $\\frac{4}{3}$"],
            correct: "A",
            explanation: "$u_4 = \\frac{4}{4+1} = \\frac{4}{5}$.",
            hint1: "Thay $n = 4$.",
            hint2: "$4/5$."
          },
          {
            question: "Dãy số nào sau đây là dãy số tăng?",
            options: ["A. $u_n = 2n + 1$", "B. $u_n = -3n + 5$", "C. $u_n = \\frac{1}{n}$", "D. $u_n = (-1)^n$"],
            correct: "A",
            explanation: "$u_{n+1} - u_n = 2 > 0$.",
            hint1: "Xét hiệu $u_{n+1} - u_n$.",
            hint2: "$2 > 0$ nên tăng."
          },
          {
            question: "Cho $u_1 = 2, u_{n+1} = 2u_n - 1$. Ba số hạng đầu tiên là:",
            options: ["A. $2; 3; 5$", "B. $2; 4; 6$", "C. $2; 1; 1$", "D. $2; 3; 7$"],
            correct: "A",
            explanation: "$u_1 = 2, u_2 = 3, u_3 = 5$.",
            hint1: "$u_2 = 2(2) - 1 = 3$.",
            hint2: "$u_3 = 2(3) - 1 = 5$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Dãy số bị chặn trên, bị chặn dưới và dãy số bị chặn",
        theory: createStandardTheoryHTML(
          "Bài 5: Dãy số", "Lớp 11", 2,
          "Dãy số bị chặn trên, bị chặn dưới và dãy số bị chặn",
          `<p>Khái niệm dãy số bị chặn:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>Bị chặn trên: $u_n \\le M, \\forall n$.</li>
            <li>Bị chặn dưới: $u_n \\ge m, \\forall n$.</li>
            <li>Bị chặn: $m \\le u_n \\le M, \\forall n$.</li>
          </ul>`,
          `<li>Dãy phân thức bậc tử $\\le$ bậc mẫu thường bị chặn.</li>`,
          `<li>Nhầm bị chặn trên với bị chặn hoàn toàn.</li>`,
          `<li><em>"Vừa trên vừa dưới gọi là bị chặn!"</em></li>`
        ),
        mcqs: [
          {
            question: "Dãy số $u_n = \\frac{1}{n}$ là dãy số:",
            options: ["A. Bị chặn", "B. Chỉ bị chặn dưới", "C. Chỉ bị chặn trên", "D. Không bị chặn"],
            correct: "A",
            explanation: "$0 < \\frac{1}{n} \\le 1$ nên bị chặn.",
            hint1: "Đánh giá cận dưới 0 và cận trên 1.",
            hint2: "Bị chặn."
          },
          {
            question: "Dãy số nào sau đây bị chặn trên bởi 1?",
            options: ["A. $u_n = \\frac{n}{n + 1}$", "B. $u_n = n^2$", "C. $u_n = 2^n$", "D. $u_n = n + 1$"],
            correct: "A",
            explanation: "$\\frac{n}{n+1} = 1 - \\frac{1}{n+1} < 1$.",
            hint1: "Tử bé hơn mẫu.",
            hint2: "Luôn $< 1$."
          },
          {
            question: "Dãy số $u_n = (-1)^n$ là dãy số:",
            options: ["A. Bị chặn", "B. Tăng", "C. Giảm", "D. Không bị chặn"],
            correct: "A",
            explanation: "$-1 \\le u_n \\le 1$.",
            hint1: "Các giá trị $-1$ và $1$.",
            hint2: "Bị chặn."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho dãy số $u_n = \\frac{2n - 1}{n + 1}$.",
        items: [
          { key: "a", text: "$u_1 = \\frac{1}{2}$.", correct: "true", explain: "Thay $n = 1$." },
          { key: "b", text: "$u_{n+1} - u_n = \\frac{3}{(n+1)(n+2)} > 0$.", correct: "true", explain: "Biến đổi." },
          { key: "c", text: "Dãy số tăng.", correct: "true", explain: "Hiệu dương." },
          { key: "d", text: "Dãy số không bị chặn trên.", correct: "false", explain: "Bị chặn trên bởi 2." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Về tính chất của dãy số:",
        items: [
          { key: "a", text: "Dãy số có thể không tăng cũng không giảm.", correct: "true", explain: "Đan dấu." },
          { key: "b", text: "Dãy số tăng bị chặn dưới bởi $u_1$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "Dãy số giảm bị chặn trên bởi $u_1$.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "Mọi dãy số đều bị chặn.", correct: "false", explain: "Dãy $u_n = n$ không bị chặn." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Dãy Fibonacci $F_1 = 1, F_2 = 1, F_n = F_{n-1} + F_{n-2}$:",
        items: [
          { key: "a", text: "Năm số đầu là $1, 1, 2, 3, 5$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "$F_6 = 8$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "Dãy tăng từ số hạng thứ 2.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "Dãy bị chặn trên.", correct: "false", explain: "Tiến ra vô cực." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho $u_n = \\sin(n\\pi/2)$:",
        items: [
          { key: "a", text: "Bốn số đầu là $1, 0, -1, 0$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "Dãy tuần hoàn chu kỳ 4.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "Bị chặn trong $[-1; 1]$.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "Là dãy tăng.", correct: "false", explain: "Không tăng." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Cho $S_n = n^2 + 2n$:",
        items: [
          { key: "a", text: "$u_1 = 3$.", correct: "true", explain: "$S_1 = 3$." },
          { key: "b", text: "$u_2 = 5$.", correct: "true", explain: "$8 - 3 = 5$." },
          { key: "c", text: "$u_n = 2n + 1$.", correct: "true", explain: "$S_n - S_{n-1}$." },
          { key: "d", text: "Dãy số giảm.", correct: "false", explain: "Là dãy tăng." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về ứng dụng thực tiễn của dãy số:",
        items: [
          { key: "a", text: "Lãi kép tạo thành dãy số tăng.", correct: "true", explain: "Tăng theo luỹ thừa." },
          { key: "b", text: "Dân số tạo thành dãy số.", correct: "true", explain: "Mô hình hoá." },
          { key: "c", text: "Đào thải thuốc tạo dãy số giảm.", correct: "true", explain: "Giảm dần." },
          { key: "d", text: "Mọi quá trình thực tế đều tăng.", correct: "false", explain: "Sai." }
        ]
      }
    ]
  };

  // BÀI 6: CẤP SỐ CỘNG
  window.DEDICATED_LESSONS_DB["toan11_bai6"] = {
    id: "toan11_bai6",
    lessonTitle: "Bài 6: Cấp số cộng",
    grade: "Lớp 11",
    matcher: (title) => {
      const t = title.toLowerCase();
      return t.includes("bài 6:") || t.includes("cấp số cộng");
    },
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Định nghĩa cấp số cộng và số hạng tổng quát",
        theory: createStandardTheoryHTML(
          "Bài 6: Cấp số cộng", "Lớp 11", 1,
          "Định nghĩa cấp số cộng và số hạng tổng quát",
          `<p>Cấp số cộng tăng giảm đều:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$u_{n+1} = u_n + d$</li>
            <li>$u_n = u_1 + (n - 1)d$</li>
            <li>$u_k = \\frac{u_{k-1} + u_{k+1}}{2}$</li>
          </ul>`,
          `<li>$d > 0$ tăng, $d < 0$ giảm, $d = 0$ hằng.</li>`,
          `<li>Quên trừ 1 trong $(n-1)d$.</li>`,
          `<li><em>"un = u1 + (n - 1)d!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho $u_1 = 3, d = 4$. Số hạng $u_{10}$ bằng:",
            options: ["A. $39$", "B. $43$", "C. $40$", "D. $36$"],
            correct: "A",
            explanation: "$u_{10} = 3 + 9(4) = 39$.",
            hint1: "$u_n = u_1 + (n-1)d$.",
            hint2: "$3 + 36 = 39$."
          },
          {
            question: "Cho $u_1 = -2, u_5 = 14$. Công sai $d$ bằng:",
            options: ["A. $4$", "B. $3$", "C. $2$", "D. $5$"],
            correct: "A",
            explanation: "$4d = 16 \\Rightarrow d = 4$.",
            hint1: "$u_5 = u_1 + 4d$.",
            hint2: "$d = 4$."
          },
          {
            question: "Ba số $x, 5, 11$ lập thành cấp số cộng. Giá trị $x$ là:",
            options: ["A. $-1$", "B. $1$", "C. $0$", "D. $2$"],
            correct: "A",
            explanation: "$5 = \\frac{x + 11}{2} \\Rightarrow x = -1$.",
            hint1: "Trung bình cộng.",
            hint2: "$10 - 11 = -1$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Tổng của n số hạng đầu tiên của một cấp số cộng",
        theory: createStandardTheoryHTML(
          "Bài 6: Cấp số cộng", "Lớp 11", 2,
          "Tổng của n số hạng đầu tiên của một cấp số cộng",
          `<p>Tổng $n$ số hạng đầu:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n - 1)d]}{2}$</li>
          </ul>`,
          `<li>Tổng từ 1 đến 100 bằng 5050.</li>`,
          `<li>Quên nhân $n$.</li>`,
          `<li><em>"Đầu cộng cuối nhân n chia đôi!"</em></li>`
        ),
        mcqs: [
          {
            question: "Tổng $S = 1 + 2 + \\dots + 100$ bằng:",
            options: ["A. $5050$", "B. $5000$", "C. $5100$", "D. $5025$"],
            correct: "A",
            explanation: "$100 \\times 101 / 2 = 5050$.",
            hint1: "$n(u_1 + u_n)/2$.",
            hint2: "$5050$."
          },
          {
            question: "Cho $u_1 = 5, d = 2$. Tổng $S_{20}$ bằng:",
            options: ["A. $480$", "B. $460$", "C. $500$", "D. $440$"],
            correct: "A",
            explanation: "$10[10 + 19(2)] = 10(48) = 480$.",
            hint1: "$\\frac{20[2(5) + 19(2)]}{2}$.",
            hint2: "$480$."
          },
          {
            question: "Rạp hát 15 hàng ghế: hàng đầu 20 ghế, mỗi hàng sau thêm 2 ghế. Tổng số ghế là:",
            options: ["A. $510$", "B. $500$", "C. $520$", "D. $480$"],
            correct: "A",
            explanation: "$\\frac{15[40 + 28]}{2} = 510$.",
            hint1: "$u_1 = 20, d = 2, n = 15$.",
            hint2: "$510$."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho $u_1 = 2, u_2 = 5$:",
        items: [
          { key: "a", text: "Công sai $d = 3$.", correct: "true", explain: "$5 - 2 = 3$." },
          { key: "b", text: "$u_6 = 17$.", correct: "true", explain: "$2 + 15 = 17$." },
          { key: "c", text: "$u_n = 3n - 1$.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "100 thuộc cấp số cộng.", correct: "false", explain: "$3n = 101$ không nguyên." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Cho $u_3 = 8, u_7 = 20$:",
        items: [
          { key: "a", text: "$4d = 12$.", correct: "true", explain: "Trừ vế." },
          { key: "b", text: "$d = 3$.", correct: "true", explain: "Chia 4." },
          { key: "c", text: "$u_1 = 2$.", correct: "true", explain: "$8 - 6 = 2$." },
          { key: "d", text: "$S_{10} = 155$.", correct: "true", explain: "$5(4+27) = 155$." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Về cấp số cộng:",
        items: [
          { key: "a", text: "$d > 0$ dãy tăng.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "$d = 0$ dãy hằng.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "$a + c = 2b$.", correct: "true", explain: "Trung bình cộng." },
          { key: "d", text: "Mọi CSC đều bị chặn.", correct: "false", explain: "Tiến ra vô cực." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho $S_n = 2n^2 + 3n$:",
        items: [
          { key: "a", text: "$u_1 = 5$.", correct: "true", explain: "$S_1 = 5$." },
          { key: "b", text: "$S_2 = 14$.", correct: "true", explain: "Thay 2." },
          { key: "c", text: "$u_2 = 9$.", correct: "true", explain: "$14 - 5 = 9$." },
          { key: "d", text: "$d = 2$.", correct: "false", explain: "$d = 4$." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Tiết kiệm ngày 1: $10000$đ, mỗi ngày sau thêm $2000$đ:",
        items: [
          { key: "a", text: "$u_1 = 10000, d = 2000$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "Ngày 30 bỏ $68000$đ.", correct: "true", explain: "$10000 + 58000$." },
          { key: "c", text: "Sau 30 ngày được $1170000$đ.", correct: "true", explain: "$15(78000)$." },
          { key: "d", text: "Đủ mua điện thoại 2 triệu.", correct: "false", explain: "Chưa đủ." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Ba cạnh tam giác lập thành CSC:",
        items: [
          { key: "a", text: "Đặt $a-d, a, a+d$.", correct: "true", explain: "Đối xứng." },
          { key: "b", text: "Chu vi bằng $3a$.", correct: "true", explain: "Cộng lại." },
          { key: "c", text: "$3, 4, 5$ lập thành CSC.", correct: "true", explain: "$d = 1$." },
          { key: "d", text: "Tam giác đều không là CSC.", correct: "false", explain: "CSC với $d = 0$." }
        ]
      }
    ]
  };

  // BÀI 7: CẤP SỐ NHÂN
  window.DEDICATED_LESSONS_DB["toan11_bai7"] = {
    id: "toan11_bai7",
    lessonTitle: "Bài 7: Cấp số nhân",
    grade: "Lớp 11",
    matcher: (title) => {
      const t = title.toLowerCase();
      return t.includes("bài 7:") || t.includes("cấp số nhân");
    },
    sections: [
      {
        sectionNumber: 1,
        sectionTitle: "Mục 1: Định nghĩa cấp số nhân và số hạng tổng quát",
        theory: createStandardTheoryHTML(
          "Bài 7: Cấp số nhân", "Lớp 11", 1,
          "Định nghĩa cấp số nhân và số hạng tổng quát",
          `<p>Cấp số nhân nhân bội:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$u_{n+1} = u_n \\cdot q$</li>
            <li>$u_n = u_1 \\cdot q^{n-1}$</li>
            <li>$u_k^2 = u_{k-1} \\cdot u_{k+1}$</li>
          </ul>`,
          `<li>$q < 0$ đan dấu.</li>`,
          `<li>Số mũ của $q$ là $(n-1)$.</li>`,
          `<li><em>"un = u1 nhân q mũ (n - 1)!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho $u_1 = 2, q = 3$. Số hạng $u_5$ bằng:",
            options: ["A. $162$", "B. $486$", "C. $54$", "D. $243$"],
            correct: "A",
            explanation: "$2 \\times 3^4 = 2 \\times 81 = 162$.",
            hint1: "$u_1 q^4$.",
            hint2: "$162$."
          },
          {
            question: "Cho $u_1 = -3, u_2 = 6$. Công bội $q$ bằng:",
            options: ["A. $-2$", "B. $2$", "C. $-\\frac{1}{2}$", "D. $-18$"],
            correct: "A",
            explanation: "$6 / (-3) = -2$.",
            hint1: "$u_2 / u_1$.",
            hint2: "$-2$."
          },
          {
            question: "Ba số dương $2, x, 18$ lập thành CSN. Giá trị $x$ là:",
            options: ["A. $6$", "B. $10$", "C. $-6$", "D. $9$"],
            correct: "A",
            explanation: "$x^2 = 36 \\Rightarrow x = 6$.",
            hint1: "$x^2 = 2 \\times 18$.",
            hint2: "$x = 6$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Tổng của n số hạng đầu tiên và cấp số nhân lùi vô hạn",
        theory: createStandardTheoryHTML(
          "Bài 7: Cấp số nhân", "Lớp 11", 2,
          "Tổng của n số hạng đầu tiên và cấp số nhân lùi vô hạn",
          `<p>Tổng $n$ số hạng và lùi vô hạn:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$S_n = \\frac{u_1(1 - q^n)}{1 - q} = \\frac{u_1(q^n - 1)}{q - 1}$ ($q \\neq 1$).</li>
            <li>Lùi vô hạn ($|q| < 1$): $S = \\frac{u_1}{1 - q}$.</li>
          </ul>`,
          `<li>Lùi vô hạn chỉ áp dụng khi $|q| < 1$.</li>`,
          `<li>Dùng lùi vô hạn cho $q > 1$.</li>`,
          `<li><em>"Lùi vô hạn: S = u1 chia (1 - q)!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho $u_1 = 3, q = 2$. Tổng $S_5$ bằng:",
            options: ["A. $93$", "B. $96$", "C. $48$", "D. $63$"],
            correct: "A",
            explanation: "$3(32 - 1) = 93$.",
            hint1: "$3(2^5 - 1) / 1$.",
            hint2: "$93$."
          },
          {
            question: "Tổng lùi vô hạn $1 + 1/2 + 1/4 + \\dots$ bằng:",
            options: ["A. $2$", "B. $1.5$", "C. $\\infty$", "D. $4$"],
            correct: "A",
            explanation: "$1 / (1 - 0.5) = 2$.",
            hint1: "$u_1 = 1, q = 0.5$.",
            hint2: "$2$."
          },
          {
            question: "Số thập phân $0.(6) = 0.666\\dots$ bằng phân số:",
            options: ["A. $\\frac{2}{3}$", "B. $\\frac{6}{10}$", "C. $\\frac{3}{5}$", "D. $\\frac{7}{11}$"],
            correct: "A",
            explanation: "$0.6 / 0.9 = 2/3$.",
            hint1: "$u_1 = 0.6, q = 0.1$.",
            hint2: "$2/3$."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Cho $u_1 = 3, u_2 = -6$:",
        items: [
          { key: "a", text: "Công bội $q = -2$.", correct: "true", explain: "Chia." },
          { key: "b", text: "$u_4 = -24$.", correct: "true", explain: "$3(-8) = -24$." },
          { key: "c", text: "Dãy đan dấu.", correct: "true", explain: "$q < 0$." },
          { key: "d", text: "$S_6 = -63$.", correct: "true", explain: "$3(1-64)/3 = -63$." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Về tính chất CSN:",
        items: [
          { key: "a", text: "$q = 1$ dãy hằng.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "$u_1 > 0, q > 1$ dãy tăng.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "$u_1 < 0, q > 1$ dãy giảm.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "Mọi CSN đều tăng.", correct: "false", explain: "Sai." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Quả bóng rơi từ $10\\text{ m}$, mỗi lần nảy $3/4$:",
        items: [
          { key: "a", text: "Nảy lần 1 cao $7.5\\text{ m}$.", correct: "true", explain: "$10 \\times 0.75$." },
          { key: "b", text: "Lập thành CSN lùi vô hạn.", correct: "true", explain: "$|q| < 1$." },
          { key: "c", text: "Tổng các độ cao nảy là $30\\text{ m}$.", correct: "true", explain: "$7.5/0.25 = 30$." },
          { key: "d", text: "Tổng quãng đường là $70\\text{ m}$.", correct: "true", explain: "$10 + 2(30) = 70$." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Cho $u_1 = 1, q = 2$:",
        items: [
          { key: "a", text: "$u_n = 2^{n-1}$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "$S_n = 2^n - 1$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "$S_n > 1000$ khi $n \\ge 10$.", correct: "true", explain: "$2^{10} = 1024$." },
          { key: "d", text: "Tính bằng lùi vô hạn.", correct: "false", explain: "$q > 1$." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Gửi 100 triệu lãi kép $6\\%$/năm:",
        items: [
          { key: "a", text: "Công bội $q = 1.06$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "Sau 1 năm được 106 triệu.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "$A_n = 100(1.06)^n$.", correct: "true", explain: "Lãi kép." },
          { key: "d", text: "Sau 5 năm hơn 135 triệu.", correct: "false", explain: "Được 133.82 triệu." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về liên hệ CSC và CSN:",
        items: [
          { key: "a", text: "$(a^{u_n})$ là CSN nếu $(u_n)$ là CSC.", correct: "true", explain: "Luỹ thừa." },
          { key: "b", text: "$(\\ln v_n)$ là CSC nếu $(v_n)$ là CSN dương.", correct: "true", explain: "Lôgarit." },
          { key: "c", text: "Vừa CSC vừa CSN là dãy hằng khác 0.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "Mọi CSN đều có giới hạn hữu hạn.", correct: "false", explain: "Chỉ khi $|q| < 1$." }
        ]
      }
    ]
  };

  const MORE_GRADE11_LESSONS = {
    // =========================================================================
    // BÀI 8: MẪU SỐ LIỆU GHÉP NHÓM (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai8": {
      id: "toan11_bai8",
      lessonTitle: "Bài 8: Mẫu số liệu ghép nhóm",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 8:") || t.includes("mẫu số liệu ghép nhóm");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm mẫu số liệu ghép nhóm và giá trị đại diện",
          theory: createStandardTheoryHTML(
            "Bài 8: Mẫu số liệu ghép nhóm", "Lớp 11", 1,
            "Khái niệm mẫu số liệu ghép nhóm và giá trị đại diện",
            `<p>Mẫu số liệu ghép nhóm là mẫu số liệu được trình bày dưới dạng bảng tần số các nhóm số liệu:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li>Mỗi nhóm số liệu là một nửa khoảng $[a_i; a_{i+1})$, trong đó $a_i$ là đầu mút trái, $a_{i+1}$ là đầu mút phải. Nhóm cuối cùng có thể là đoạn $[a_k; a_{k+1}]$.</li>
              <li>Độ dài của nhóm $[a_i; a_{i+1})$ là $h = a_{i+1} - a_i$. Thường các nhóm được chọn có độ dài bằng nhau.</li>
              <li><strong>Giá trị đại diện của nhóm $[a_i; a_{i+1})$:</strong> Là trung điểm của nửa khoảng đó:
                $$c_i = \\frac{a_i + a_{i+1}}{2}$$
              </li>
              <li>Tần số của nhóm là số giá trị thuộc vào nửa khoảng $[a_i; a_{i+1})$. Tổng các tần số bằng cỡ mẫu $n$.</li>
            </ul>`,
            `<li>Đầu mút trái $a_i$ được tính vào nhóm, còn đầu mút phải $a_{i+1}$ không được tính vào nhóm (trừ nhóm cuối cùng nếu là đoạn đóng).</li>
            <li>Giá trị đại diện $c_i$ sẽ thay thế cho tất cả các phần tử trong nhóm khi tính toán các số đặc trưng (trung bình, phương sai).</li>`,
            `<li>Nhầm giá trị đại diện là hiệu hai đầu mút thay vì trung bình cộng.</li>
            <li>Đếm một số đúng bằng $a_{i+1}$ vào nhóm $[a_i; a_{i+1})$ thay vì nhóm kế tiếp.</li>`,
            `<li><em>"Đại diện lấy cộng chia đôi – Trái lấy vuông ngoặc, phải thời ngoặc tròn!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho nhóm số liệu $[20; 30)$. Giá trị đại diện $c$ của nhóm này là:",
              options: ["A. 25", "B. 20", "C. 30", "D. 10"],
              correct: "A",
              explanation: "Giá trị đại diện là trung điểm hai đầu mút: $c = \\frac{20 + 30}{2} = 25$."
            },
            {
              question: "Độ dài của nhóm số liệu $[15; 22)$ bằng:",
              options: ["A. 7", "B. 8", "C. 18.5", "D. 37"],
              correct: "A",
              explanation: "Độ dài nhóm là hiệu hai đầu mút: $h = 22 - 15 = 7$."
            },
            {
              question: "Một học sinh có cân nặng đúng $50\\text{ kg}$. Giá trị này thuộc nhóm nào dưới đây?",
              options: ["A. $[50; 55)$", "B. $[45; 50)$", "C. $[40; 49)$", "D. $[51; 56)$"],
              correct: "A",
              explanation: "Nhóm $[50; 55)$ chứa tất cả các giá trị $x$ thỏa mãn $50 \\le x < 55$, do đó $50$ thuộc nhóm $[50; 55)$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Bảng tần số ghép nhóm và tần số tích lũy",
          theory: createStandardTheoryHTML(
            "Bài 8: Mẫu số liệu ghép nhóm", "Lớp 11", 2,
            "Bảng tần số ghép nhóm và tần số tích lũy",
            `<p>Các bước lập bảng tần số ghép nhóm và tần số tích lũy:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li>Xác định khoảng biến thiên $R = x_{\\max} - x_{\\min}$. Chia khoảng này thành $k$ nhóm có độ dài $h \\ge \\frac{R}{k}$.</li>
              <li><strong>Tần số tích lũy ($cf_i$):</strong> Là tổng tần số của nhóm thứ $i$ và tất cả các nhóm đứng trước nó:
                $$cf_i = m_1 + m_2 + \\dots + m_i$$
              </li>
              <li>Tần số tích lũy của nhóm cuối cùng luôn bằng đúng cỡ mẫu $n$ ($cf_k = n$).</li>
              <li>Tần số tích lũy giúp xác định nhanh nhóm chứa trung vị và các tứ phân vị.</li>
            </ul>`,
            `<li>Tần số tích lũy là dãy số không giảm: $cf_1 \\le cf_2 \\le \\dots \\le cf_k = n$.</li>
            <li>Khi cỡ mẫu $n$ lớn, ghép nhóm giúp dữ liệu cô đọng và dễ quan sát xu thế tổng quát.</li>`,
            `<li>Cộng nhầm tần số của các nhóm rời rạc không theo thứ tự tích lũy.</li>
            <li>Quên kiểm tra tổng tần số cuối cùng có khớp với cỡ mẫu $n$ hay không.</li>`,
            `<li><em>"Tích lũy là cộng dồn từ trên xuống – Nhóm cuối cùng phải đúng bằng cỡ mẫu n!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho bảng tần số ghép nhóm có 3 nhóm đầu có tần số lần lượt là $5, 12, 18$. Tần số tích lũy của nhóm thứ ba là:",
              options: ["A. 35", "B. 18", "C. 17", "D. 30"],
              correct: "A",
              explanation: "Tần số tích lũy nhóm 3: $cf_3 = 5 + 12 + 18 = 35$."
            },
            {
              question: "Mẫu số liệu có giá trị nhỏ nhất là $12$ và giá trị lớn nhất là $48$. Khoảng biến thiên $R$ là:",
              options: ["A. 36", "B. 60", "C. 30", "D. 24"],
              correct: "A",
              explanation: "$R = x_{\\max} - x_{\\min} = 48 - 12 = 36$."
            },
            {
              question: "Một mẫu số liệu có cỡ mẫu $n = 50$. Tần số tích lũy của nhóm cuối cùng bắt buộc phải bằng:",
              options: ["A. 50", "B. 25", "C. 100", "D. 0"],
              correct: "A",
              explanation: "Tần số tích lũy của nhóm cuối cùng luôn bằng đúng cỡ mẫu $n = 50$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho mẫu số liệu ghép nhóm về thời gian tự học (phút/ngày) của 40 học sinh: $[30; 60): 8$, $[60; 90): 15$, $[90; 120): 12$, $[120; 150): 5$.",
          items: [
            { key: "a", text: "Cỡ mẫu của mẫu số liệu là $n = 40$.", correct: "true", explain: "$8 + 15 + 12 + 5 = 40$." },
            { key: "b", text: "Độ dài của mỗi nhóm số liệu bằng $30\\text{ phút}$.", correct: "true", explain: "$60 - 30 = 30$." },
            { key: "c", text: "Giá trị đại diện của nhóm $[60; 90)$ là $75\\text{ phút}$.", correct: "true", explain: "$(60 + 90)/2 = 75$." },
            { key: "d", text: "Số học sinh tự học từ $90\\text{ phút}$ trở lên là 12 học sinh.", correct: "false", explain: "Gồm nhóm $[90; 120)$ và $[120; 150)$: $12 + 5 = 17$ học sinh." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Với bảng số liệu ở Câu 1, xét tần số tích lũy:",
          items: [
            { key: "a", text: "Tần số tích lũy của nhóm 1 là 8.", correct: "true", explain: "$cf_1 = 8$." },
            { key: "b", text: "Tần số tích lũy của nhóm 2 là 23.", correct: "true", explain: "$8 + 15 = 23$." },
            { key: "c", text: "Tần số tích lũy của nhóm 3 là 35.", correct: "true", explain: "$23 + 12 = 35$." },
            { key: "d", text: "Tần số tích lũy của nhóm cuối cùng là 40.", correct: "true", explain: "$35 + 5 = 40$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét các mệnh đề lý thuyết về mẫu số liệu ghép nhóm:",
          items: [
            { key: "a", text: "Nhóm $[a; b)$ gồm các giá trị $x$ thoả $a \\le x < b$.", correct: "true", explain: "Đúng định nghĩa nửa khoảng." },
            { key: "b", text: "Mọi nhóm trong bảng ghép nhóm bắt buộc phải có độ dài bằng nhau.", correct: "false", explain: "SGK khuyến khích bằng nhau nhưng thực tế có thể không bằng nhau." },
            { key: "c", text: "Giá trị đại diện bằng nửa tổng hai đầu mút.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Ghép nhóm làm mất thông tin chi tiết từng giá trị đơn lẻ.", correct: "true", explain: "Đúng." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Mẫu số liệu điểm thi có $x_{\\min} = 3.2$ và $x_{\\max} = 9.8$:",
          items: [
            { key: "a", text: "Khoảng biến thiên $R = 6.6$.", correct: "true", explain: "$9.8 - 3.2 = 6.6$." },
            { key: "b", text: "Nếu chia thành 6 nhóm đều nhau thì độ dài mỗi nhóm ít nhất là $1.1$.", correct: "true", explain: "$6.6 / 6 = 1.1$." },
            { key: "c", text: "Nhóm đầu tiên có thể chọn là $[3; 4.2)$.", correct: "true", explain: "Chứa giá trị $3.2$." },
            { key: "d", text: "Điểm $9.8$ có thể đưa vào nhóm cuối dạng nửa khoảng $[9; 9.8)$.", correct: "false", explain: "Đầu mút tròn không lấy giá trị $9.8$, phải là đoạn $[9; 10]$ hoặc $[9; 9.8]$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Xét giá trị đại diện và tính toán:",
          items: [
            { key: "a", text: "Giá trị đại diện của $[0; 10)$ là 5.", correct: "true", explain: "Đúng." },
            { key: "b", text: "Giá trị đại diện của $[10; 20)$ là 15.", correct: "true", explain: "Đúng." },
            { key: "c", text: "Hiệu giữa hai giá trị đại diện liên tiếp bằng độ dài nhóm nếu các nhóm đều nhau.", correct: "true", explain: "$15 - 5 = 10$." },
            { key: "d", text: "Giá trị đại diện luôn luôn là số nguyên.", correct: "false", explain: "Ví dụ $[0; 5)$ có giá trị đại diện $2.5$ không là số nguyên." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tần số và tần số tương đối:",
          items: [
            { key: "a", text: "Tần số tương đối của nhóm $i$ là $f_i = \\frac{m_i}{n} \\times 100\\%$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Tổng các tần số tương đối bằng $100\\%$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Tần số ghép nhóm có thể nhận số âm.", correct: "false", explain: "Số đếm không âm." },
            { key: "d", text: "Biểu đồ cột biểu diễn trực quan tần số các nhóm.", correct: "true", explain: "Chuẩn." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 15: GIỚI HẠN CỦA DÃY SỐ (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai15": {
      id: "toan11_bai15",
      lessonTitle: "Bài 15: Giới hạn của dãy số",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 15:") || (t.includes("giới hạn") && t.includes("dãy số"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Giới hạn hữu hạn của dãy số và các giới hạn cơ bản",
          theory: createStandardTheoryHTML(
            "Bài 15: Giới hạn của dãy số", "Lớp 11", 1,
            "Giới hạn hữu hạn của dãy số và các giới hạn cơ bản",
            `<p>Kiến thức Giới hạn hữu hạn của dãy số theo SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li>Ta nói dãy số $(u_n)$ có giới hạn là $0$ khi $n \\to +\\infty$ nếu $|u_n|$ có thể nhỏ hơn một số dương bé tùy ý kể từ một số hạng nào đó trở đi. Ký hiệu: $\\lim_{n \\to +\\infty} u_n = 0$ hoặc $\\lim u_n = 0$.</li>
              <li>Ta nói dãy số $(u_n)$ có giới hạn là $a$ nếu $\\lim (u_n - a) = 0$. Ký hiệu: $\\lim u_n = a$.</li>
              <li><strong>Các giới hạn cơ bản cần nhớ:</strong>
                <br/>• $\\lim \\frac{1}{n^k} = 0$ với mọi số nguyên dương $k$.
                <br/>• $\\lim q^n = 0$ nếu $|q| < 1$.
                <br/>• $\\lim c = c$ ($c$ là hằng số).
              </li>
              <li><strong>Định lý về phép toán:</strong> Nếu $\\lim u_n = a$ và $\\lim v_n = b$ thì:
                <br/>• $\\lim (u_n \\pm v_n) = a \\pm b$
                <br/>• $\\lim (u_n \\cdot v_n) = a \\cdot b$
                <br/>• $\\lim \\frac{u_n}{v_n} = \\frac{a}{b}$ (với $b \\neq 0$)
                <br/>• Nếu $u_n \\ge 0$ thì $a \\ge 0$ và $\\lim \\sqrt{u_n} = \\sqrt{a}$.
              </li>
            </ul>`,
            `<li>Quy ước viết tắt: Khi viết $\\lim u_n$ luôn ngầm hiểu là $n \\to +\\infty$.</li>
            <li>Khi tính giới hạn phân thức đa thức theo $n$, ta chia cả tử và mẫu cho $n^k$ với $k$ là số mũ cao nhất của mẫu.</li>`,
            `<li>Áp dụng công thức $\\lim q^n = 0$ khi cơ số $|q| \\ge 1$ (sai bản chất).</li>
            <li>Quên kiểm tra mẫu số khác 0 khi lấy giới hạn của một thương.</li>`,
            `<li><em>"Bậc tử bằng bậc mẫu lấy hai hệ số chia nhau – Bậc tử bé hơn mẫu thì kết quả bằng 0!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tính giới hạn $\\lim \\frac{3n - 1}{2n + 5}$:",
              options: ["A. $\\frac{3}{2}$", "B. $-\\frac{1}{5}$", "C. $0$", "D. $+\\infty$"],
              correct: "A",
              explanation: "Chia cả tử và mẫu cho $n$: $\\lim \\frac{3 - 1/n}{2 + 5/n} = \\frac{3 - 0}{2 + 0} = \\frac{3}{2}$."
            },
            {
              question: "Giới hạn $\\lim \\left(\\frac{2}{3}\\right)^n$ bằng:",
              options: ["A. 0", "B. 1", "C. $\\frac{2}{3}$", "D. $+\\infty$"],
              correct: "A",
              explanation: "Vì cơ số $|q| = \\frac{2}{3} < 1$ nên $\\lim q^n = 0$."
            },
            {
              question: "Tính giới hạn $\\lim \\frac{2n^2 + 1}{n^3 - 4}$:",
              options: ["A. 0", "B. 2", "C. $+\\infty$", "D. $-\\frac{1}{4}$"],
              correct: "A",
              explanation: "Bậc tử ($2$) nhỏ hơn bậc mẫu ($3$) nên giới hạn bằng $0$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Giới hạn vô cực và Tổng cấp số nhân lùi vô hạn",
          theory: createStandardTheoryHTML(
            "Bài 15: Giới hạn của dãy số", "Lớp 11", 2,
            "Giới hạn vô cực và Tổng cấp số nhân lùi vô hạn",
            `<p>Kiến thức Giới hạn vô cực và Tổng cấp số nhân lùi vô hạn:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Dãy số tiến đến vô cực:</strong>
                <br/>• $\\lim n^k = +\\infty$ với $k$ nguyên dương.
                <br/>• $\\lim q^n = +\\infty$ nếu $q > 1$.
              </li>
              <li><strong>Quy tắc tìm giới hạn tích và thương có chứa vô cực:</strong>
                <br/>• Nếu $\\lim u_n = a > 0$ và $\\lim v_n = +\\infty$ thì $\\lim (u_n v_n) = +\\infty$.
                <br/>• Nếu $\\lim u_n = a$ hữu hạn và $\\lim v_n = \\pm\\infty$ thì $\\lim \\frac{u_n}{v_n} = 0$.
                <br/>• Nếu $\\lim u_n = a > 0, \\lim v_n = 0$ và $v_n > 0$ thì $\\lim \\frac{u_n}{v_n} = +\\infty$.
              </li>
              <li><strong>Tổng của cấp số nhân lùi vô hạn:</strong> Cấp số nhân có công bội $|q| < 1$ gọi là lùi vô hạn. Tổng tất cả các số hạng của nó là:
                $$S = u_1 + u_2 + \\dots + u_n + \\dots = \\frac{u_1}{1 - q}$$
              </li>
            </ul>`,
            `<li>Tổng cấp số nhân lùi vô hạn chỉ áp dụng khi $|q| < 1$, nếu $|q| \\ge 1$ tổng này phân kỳ không áp dụng được.</li>
            <li>Khi gặp dạng vô định $\\infty - \\infty$ chứa căn thức, ta phải nhân và chia với biểu thức liên hợp.</li>`,
            `<li>Nhầm lẫn giữa giới hạn bằng $0$ và giới hạn vô cực khi mẫu số tiến về $0$.</li>
            <li>Quên xét dấu của mẫu số khi tính giới hạn thương $\\frac{a}{0}$.</li>`,
            `<li><em>"Số chia 0 ra vô cực (chú ý dấu) – Số chia vô cực bằng 0 – Cấp số nhân lùi lấy $u_1$ chia $(1 - q)$!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tổng của cấp số nhân lùi vô hạn $S = 1 + \\frac{1}{2} + \\frac{1}{4} + \\dots + \\frac{1}{2^n} + \\dots$ bằng:",
              options: ["A. 2", "B. $\\frac{3}{2}$", "C. 1", "D. $+\\infty$"],
              correct: "A",
              explanation: "Cấp số nhân có $u_1 = 1, q = \\frac{1}{2}$. Tổng $S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 1/2} = 2$."
            },
            {
              question: "Tính giới hạn $\\lim (2n^3 - 5n + 1)$:",
              options: ["A. $+\\infty$", "B. $-\\infty$", "C. 2", "D. 0"],
              correct: "A",
              explanation: "Đặt $n^3$ ra ngoài: $\\lim n^3(2 - 5/n^2 + 1/n^3) = +\\infty \\times 2 = +\\infty$."
            },
            {
              question: "Tính giới hạn $\\lim \\frac{3^n + 1}{2^n + 3^n}$:",
              options: ["A. 1", "B. 0", "C. $\\frac{1}{2}$", "D. $+\\infty$"],
              correct: "A",
              explanation: "Chia cả tử và mẫu cho $3^n$: $\\lim \\frac{1 + (1/3)^n}{(2/3)^n + 1} = \\frac{1 + 0}{0 + 1} = 1$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho dãy số $(u_n)$ với $u_n = \\frac{2n + 3}{n + 1}$.",
          items: [
            { key: "a", text: "Số hạng đầu tiên của dãy là $u_1 = \\frac{5}{2}$.", correct: "true", explain: "$u_1 = (2(1)+3)/(1+1) = 5/2$." },
            { key: "b", text: "Biểu thức $u_n - 2 = \\frac{1}{n + 1}$.", correct: "true", explain: "$\\frac{2n+3}{n+1} - 2 = \\frac{2n+3-2n-2}{n+1} = \\frac{1}{n+1}$." },
            { key: "c", text: "$\\lim (u_n - 2) = 0$.", correct: "true", explain: "$\\lim \\frac{1}{n+1} = 0$." },
            { key: "d", text: "Giới hạn của dãy số là $\\lim u_n = 3$.", correct: "false", explain: "Giới hạn bằng 2, không phải 3." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét các giới hạn cơ bản của dãy số:",
          items: [
            { key: "a", text: "$\\lim \\frac{1}{\\sqrt{n}} = 0$.", correct: "true", explain: "Đúng." },
            { key: "b", text: "$\\lim (-0.99)^n = 0$.", correct: "true", explain: "Vì $|-0.99| < 1$." },
            { key: "c", text: "$\\lim (1.01)^n = +\\infty$.", correct: "true", explain: "Vì cơ số $> 1$." },
            { key: "d", text: "$\\lim (-1)^n = 0$.", correct: "false", explain: "Dãy $-1, 1, -1, 1...$ dao động không có giới hạn." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho cấp số nhân $u_n = 6 \\cdot \\left(-\\frac{1}{3}\\right)^{n-1}$:",
          items: [
            { key: "a", text: "Số hạng đầu tiên là $u_1 = 6$.", correct: "true", explain: "$u_1 = 6(-1/3)^0 = 6$." },
            { key: "b", text: "Công bội của cấp số nhân là $q = -\\frac{1}{3}$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Dãy $(u_n)$ là một cấp số nhân lùi vô hạn.", correct: "true", explain: "Vì $|q| = 1/3 < 1$." },
            { key: "d", text: "Tổng của cấp số nhân lùi vô hạn này bằng $\\frac{9}{2}$.", correct: "true", explain: "$S = \\frac{6}{1 - (-1/3)} = \\frac{6}{4/3} = \\frac{18}{4} = \\frac{9}{2}$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét giới hạn $\\lim (\\sqrt{n^2 + 2n} - n)$:",
          items: [
            { key: "a", text: "Đây là dạng vô định $\\infty - \\infty$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Nhân liên hợp ta được biểu thức $\\frac{2n}{\\sqrt{n^2 + 2n} + n}$.", correct: "true", explain: "$(n^2+2n) - n^2 = 2n$." },
            { key: "c", text: "Chia cả tử và mẫu cho $n$ ta được $\\lim \\frac{2}{\\sqrt{1 + 2/n} + 1}$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Giá trị giới hạn bằng $0$.", correct: "false", explain: "Giới hạn bằng $\\frac{2}{1+1} = 1$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Số thập phân vô hạn tuần hoàn $0.333... = 0.(3)$:",
          items: [
            { key: "a", text: "Có thể viết thành tổng $0.3 + 0.03 + 0.003 + \\dots$", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đây là tổng cấp số nhân lùi vô hạn với $u_1 = 0.3$ và $q = 0.1$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Tổng bằng $S = \\frac{0.3}{1 - 0.1} = \\frac{0.3}{0.9} = \\frac{1}{3}$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Số $0.(3)$ là một số vô tỉ.", correct: "false", explain: "$1/3$ là số hữu tỉ." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính chất của giới hạn dãy số:",
          items: [
            { key: "a", text: "Nếu dãy số có giới hạn thì giới hạn đó là duy nhất.", correct: "true", explain: "Tính duy nhất của giới hạn." },
            { key: "b", text: "Dãy số tăng và bị chặn trên thì có giới hạn hữu hạn.", correct: "true", explain: "Định lý Weierstrass." },
            { key: "c", text: "Mọi dãy số bị chặn đều có giới hạn hữu hạn.", correct: "false", explain: "Dãy $(-1)^n$ bị chặn trong $[-1; 1]$ nhưng không có giới hạn." },
            { key: "d", text: "Nếu $|u_n| \\le v_n$ và $\\lim v_n = 0$ thì $\\lim u_n = 0$.", correct: "true", explain: "Nguyên lý kẹp giới hạn." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 16: GIỚI HẠN CỦA HÀM SỐ (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai16": {
      id: "toan11_bai16",
      lessonTitle: "Bài 16: Giới hạn của hàm số",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 16:") || (t.includes("giới hạn") && t.includes("hàm số"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Giới hạn hữu hạn tại một điểm và các dạng vô định",
          theory: createStandardTheoryHTML(
            "Bài 16: Giới hạn của hàm số", "Lớp 11", 1,
            "Giới hạn hữu hạn tại một điểm và các dạng vô định",
            `<p>Kiến thức Giới hạn của hàm số tại một điểm chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Cho khoảng $K$ chứa điểm $x_0$ và hàm số $y = f(x)$ xác định trên $K$ hoặc $K \\setminus \\{x_0\\}$. Ta nói hàm số có giới hạn là $L$ khi $x$ dần tới $x_0$ nếu với mọi dãy số $(x_n) \\subset K \\setminus \\{x_0\\}$ mà $x_n \\to x_0$ thì $f(x_n) \\to L$. Ký hiệu: $\\lim_{x \\to x_0} f(x) = L$.</li>
              <li><strong>Giới hạn một bên:</strong>
                <br/>• Giới hạn bên phải: $\\lim_{x \\to x_0^+} f(x) = L$ (với $x > x_0$).
                <br/>• Giới hạn bên trái: $\\lim_{x \\to x_0^-} f(x) = L$ (với $x < x_0$).
                <br/>• <strong>Định lý:</strong> $\\lim_{x \\to x_0} f(x) = L \\Leftrightarrow \\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x) = L$.
              </li>
              <li><strong>Khử dạng vô định $\\frac{0}{0}$ tại $x = x_0$:</strong>
                <br/>• Phân tích đa thức thành nhân tử $(x - x_0)$ rồi rút gọn.
                <br/>• Nhân và chia biểu thức liên hợp nếu có căn thức: $(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2$.
              </li>
            </ul>`,
            `<li>Nếu thay trực tiếp $x = x_0$ vào hàm số được một số thực xác định (mẫu khác 0) thì đó chính là kết quả giới hạn.</li>
            <li>Nếu giới hạn bên trái khác giới hạn bên phải thì hàm số KHÔNG CÓ giới hạn tại điểm đó.</li>`,
            `<li>Quên đổi dấu khi đưa $x$ ra khỏi căn bậc hai khi $x \\to -\\infty$: $\\sqrt{x^2} = |x| = -x$.</li>
            <li>Triệt tiêu nhân tử $(x - x_0)$ nhưng quên điều kiện tương đương.</li>`,
            `<li><em>"Thay số ra số là xong – Dạng $\\frac{0}{0}$ thì nhân liên hợp hoặc phân tích nhân tử để triệt tiêu!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tính giới hạn $\\lim_{x \\to 2} (x^2 - 3x + 5)$:",
              options: ["A. 3", "B. 5", "C. 0", "D. 7"],
              correct: "A",
              explanation: "Thay trực tiếp $x = 2$: $2^2 - 3(2) + 5 = 4 - 6 + 5 = 3$."
            },
            {
              question: "Tính giới hạn $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$:",
              options: ["A. 2", "B. 0", "C. 1", "D. Không tồn tại"],
              correct: "A",
              explanation: "Khử dạng $0/0$: $\\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x-1} = \\lim_{x \\to 1} (x+1) = 2$."
            },
            {
              question: "Cho hàm số $f(x) = \\begin{cases} 2x + 1 & \\text{khi } x \\ge 1 \\\\ x^2 & \\text{khi } x < 1 \\end{cases}$. Giới hạn $\\lim_{x \\to 1^+} f(x)$ bằng:",
              options: ["A. 3", "B. 1", "C. 2", "D. 0"],
              correct: "A",
              explanation: "Khi $x \\to 1^+$ ($x > 1$), $f(x) = 2x + 1 \\Rightarrow \\lim_{x \\to 1^+} (2x + 1) = 3$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Giới hạn tại vô cực và Giới hạn vô cực của hàm số",
          theory: createStandardTheoryHTML(
            "Bài 16: Giới hạn của hàm số", "Lớp 11", 2,
            "Giới hạn tại vô cực và Giới hạn vô cực của hàm số",
            `<p>Kiến thức Giới hạn tại vô cực chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Giới hạn tại vô cực ($x \\to \\pm\\infty$):</strong>
                <br/>• $\\lim_{x \\to \\pm\\infty} \\frac{c}{x^k} = 0$ ($k$ nguyên dương, $c$ là hằng số).
                <br/>• Để tính giới hạn của phân thức khi $x \\to \\pm\\infty$, chia cả tử và mẫu cho $x^k$ với $k$ là bậc cao nhất của mẫu số.
              </li>
              <li><strong>Lưu ý dấu khi đưa $x$ ra khỏi căn:</strong>
                <br/>• Khi $x \\to +\\infty$: $\\sqrt{x^2} = |x| = x$.
                <br/>• Khi $x \\to -\\infty$: $\\sqrt{x^2} = |x| = -x$ (đổi dấu!).
              </li>
              <li><strong>Giới hạn vô cực (kết quả ra $\\pm\\infty$):</strong>
                <br/>• Nếu $\\lim_{x \\to x_0} f(x) = L > 0$ và $\\lim_{x \\to x_0} g(x) = 0$ với $g(x) > 0$ thì $\\lim_{x \\to x_0} \\frac{f(x)}{g(x)} = +\\infty$.
                <br/>• Kết quả này chính là cơ sở định nghĩa Đường tiệm cận đứng và Đường tiệm cận ngang ở Lớp 12.
              </li>
            </ul>`,
            `<li>Đặc biệt cẩn thận khi $x \\to -\\infty$, việc quên dấu âm khi đưa ra khỏi căn là lỗi sai phổ biến nhất của học sinh.</li>
            <li>Khi gặp dạng $\\infty - \\infty$ ở vô cực, nếu các hệ số bậc cao nhất bằng nhau thì bắt buộc phải nhân liên hợp.</li>`,
            `<li>Viết $\\sqrt{x^2} = x$ khi $x \\to -\\infty$ dẫn đến sai hoàn toàn dấu của giới hạn.</li>
            <li>Nhầm lẫn giữa giới hạn tại một điểm và giới hạn tại vô cực.</li>`,
            `<li><em>"$x$ tiến âm vô cực thì căn của $x^2$ ra âm $x$ – Chia bậc cao nhất, nhớ xét kỹ dấu!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tính giới hạn $\\lim_{x \\to +\\infty} \\frac{2x - 3}{x + 1}$:",
              options: ["A. 2", "B. -3", "C. 0", "D. $+\\infty$"],
              correct: "A",
              explanation: "Chia cả tử và mẫu cho $x$: $\\lim \\frac{2 - 3/x}{1 + 1/x} = 2$."
            },
            {
              question: "Tính giới hạn $\\lim_{x \\to 2^+} \\frac{1}{x - 2}$:",
              options: ["A. $+\\infty$", "B. $-\\infty$", "C. 0", "D. 1"],
              correct: "A",
              explanation: "Khi $x \\to 2^+$ thì $x - 2 > 0$ và tiến về $0$. Do tử số $1 > 0$ nên giới hạn bằng $+\\infty$."
            },
            {
              question: "Tính giới hạn $\\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2 + 1}}{x}$:",
              options: ["A. -1", "B. 1", "C. 0", "D. $+\\infty$"],
              correct: "A",
              explanation: "Vì $x < 0$ nên $\\sqrt{x^2+1} = -x\\sqrt{1+1/x^2}$. Chia cho $x$ ta được $-\\sqrt{1+1/x^2} \\to -1$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = \\frac{x^2 - 4}{x - 2}$.",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{2\\}$.", correct: "true", explain: "Mẫu số khác 0." },
            { key: "b", text: "Hàm số không xác định tại $x = 2$ nên không tồn tại $\\lim_{x \\to 2} f(x)$.", correct: "false", explain: "Giới hạn tại điểm không đòi hỏi hàm số phải xác định tại chính điểm đó." },
            { key: "c", text: "Với mọi $x \\neq 2$, ta có $f(x) = x + 2$.", correct: "true", explain: "$(x-2)(x+2)/(x-2) = x+2$." },
            { key: "d", text: "$\\lim_{x \\to 2} f(x) = 4$.", correct: "true", explain: "$2 + 2 = 4$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số $g(x) = \\begin{cases} 3x - 1 & \\text{khi } x > 2 \\\\ 5 & \\text{khi } x = 2 \\\\ x^2 + 1 & \\text{khi } x < 2 \\end{cases}$:",
          items: [
            { key: "a", text: "$\\lim_{x \\to 2^+} g(x) = 5$.", correct: "true", explain: "$3(2) - 1 = 5$." },
            { key: "b", text: "$\\lim_{x \\to 2^-} g(x) = 5$.", correct: "true", explain: "$2^2 + 1 = 5$." },
            { key: "c", text: "Tồn tại giới hạn và $\\lim_{x \\to 2} g(x) = 5$.", correct: "true", explain: "Hai giới hạn một bên bằng nhau." },
            { key: "d", text: "$\\lim_{x \\to 2} g(x) = g(2)$.", correct: "true", explain: "Cả hai đều bằng 5." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét giới hạn $\\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x} - 1}{x}$:",
          items: [
            { key: "a", text: "Khi thay $x = 0$ ta gặp dạng vô định $\\frac{0}{0}$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Biểu thức liên hợp của tử số là $\\sqrt{1 + 2x} + 1$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Sau khi nhân liên hợp, tử số rút gọn thành $2x$.", correct: "true", explain: "$(1+2x) - 1 = 2x$." },
            { key: "d", text: "Giá trị giới hạn bằng $2$.", correct: "false", explain: "Triệt tiêu $x$ còn $\\frac{2}{\\sqrt{1+2x}+1} \\to \\frac{2}{2} = 1$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét các giới hạn ở vô cực:",
          items: [
            { key: "a", text: "$\\lim_{x \\to +\\infty} \\frac{3x^2 - x + 1}{2x^2 + 5} = \\frac{3}{2}$.", correct: "true", explain: "Bậc tử bằng bậc mẫu." },
            { key: "b", text: "$\\lim_{x \\to +\\infty} \\frac{x + 1}{x^2 + 2} = 0$.", correct: "true", explain: "Bậc tử nhỏ hơn bậc mẫu." },
            { key: "c", text: "$\\lim_{x \\to -\\infty} x^3 = -\\infty$.", correct: "true", explain: "Lũy thừa bậc lẻ của số âm." },
            { key: "d", text: "$\\lim_{x \\to -\\infty} x^4 = -\\infty$.", correct: "false", explain: "Bậc chẵn nên kết quả là $+\\infty$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hàm số $y = \\frac{2x - 1}{x - 3}$:",
          items: [
            { key: "a", text: "$\\lim_{x \\to 3^+} y = +\\infty$.", correct: "true", explain: "Tử bằng $5 > 0$, mẫu $> 0$." },
            { key: "b", text: "$\\lim_{x \\to 3^-} y = -\\infty$.", correct: "true", explain: "Tử bằng $5 > 0$, mẫu $< 0$." },
            { key: "c", text: "$\\lim_{x \\to +\\infty} y = 2$.", correct: "true", explain: "Chia cho $x$ được $2$." },
            { key: "d", text: "$\\lim_{x \\to -\\infty} y = -2$.", correct: "false", explain: "Vẫn bằng $2$ vì $\\lim_{x \\to -\\infty} \\frac{2 - 1/x}{1 - 3/x} = 2$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về quy tắc tính giới hạn của hàm số:",
          items: [
            { key: "a", text: "Giới hạn của tổng bằng tổng các giới hạn nếu các giới hạn thành phần hữu hạn.", correct: "true", explain: "Định lý chuẩn." },
            { key: "b", text: "Nếu $\\lim_{x \\to x_0} f(x) = L$ thì $\\lim_{x \\to x_0} |f(x)| = |L|$.", correct: "true", explain: "Đúng." },
            { key: "c", text: "$\\lim_{x \\to 0} \\frac{1}{x} = +\\infty$.", correct: "false", explain: "Bên phải ra $+\\infty$, bên trái ra $-\\infty$ nên không tồn tại giới hạn." },
            { key: "d", text: "$\\lim_{x \\to 0} \\frac{1}{x^2} = +\\infty$.", correct: "true", explain: "Vì $x^2 > 0$ với mọi $x \\neq 0$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 17: HÀM SỐ LIÊN TỤC (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai17": {
      id: "toan11_bai17",
      lessonTitle: "Bài 17: Hàm số liên tục",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 17:") || t.includes("hàm số liên tục") || t.includes("liên tục");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Hàm số liên tục tại một điểm và trên khoảng",
          theory: createStandardTheoryHTML(
            "Bài 17: Hàm số liên tục", "Lớp 11", 1,
            "Hàm số liên tục tại một điểm và trên khoảng",
            `<p>Kiến thức cốt lõi về Hàm số liên tục chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa liên tục tại một điểm:</strong> Cho hàm số $y = f(x)$ xác định trên khoảng $K$ chứa điểm $x_0$. Hàm số được gọi là <em>liên tục tại điểm $x_0$</em> nếu:
                $$\\lim_{x \\to x_0} f(x) = f(x_0)$$
              </li>
              <li><strong>3 điều kiện bắt buộc để hàm số liên tục tại $x_0$:</strong>
                <br/>1. $x_0$ thuộc tập xác định của hàm số (tồn tại giá trị $f(x_0)$).
                <br/>2. Tồn tại giới hạn hữu hạn $\\lim_{x \\to x_0} f(x)$ (tức $\\lim_{x \\to x_0^+} f(x) = \\lim_{x \\to x_0^-} f(x)$).
                <br/>3. Giá trị giới hạn phải bằng đúng giá trị hàm số: $\\lim_{x \\to x_0} f(x) = f(x_0)$.
              </li>
              <li>Nếu hàm số không liên tục tại $x_0$ thì ta nói hàm số <em>gián đoạn tại điểm $x_0$</em>.</li>
              <li><strong>Hàm số liên tục trên khoảng:</strong> Hàm số liên tục tại mọi điểm thuộc khoảng đó. Đồ thị của hàm số liên tục trên một khoảng là một <strong>đường liền nét</strong> trên khoảng đó.</li>
            </ul>`,
            `<li>Các hàm số sơ cấp cơ bản (đa thức, phân thức hữu tỉ, căn thức, lượng giác) đều <strong>liên tục trên từng khoảng xác định</strong> của chúng.</li>
            <li>Hàm số liên tục trên đoạn $[a; b]$ nếu liên tục trên $(a; b)$ và liên tục bên phải tại $a$ ($\\lim_{x \\to a^+} f(x) = f(a)$), liên tục bên trái tại $b$ ($\\lim_{x \\to b^-} f(x) = f(b)$).</li>`,
            `<li>Kết luận hàm số liên tục mà không kiểm tra xem điểm $x_0$ có thuộc tập xác định hay không.</li>
            <li>Nhầm lẫn giữa việc tồn tại giới hạn và việc liên tục (có giới hạn nhưng chưa chắc liên tục nếu giới hạn khác $f(x_0)$).</li>`,
            `<li><em>"Muốn liên tục tại một điểm: Giới hạn trái bằng giới hạn phải và bằng đúng giá trị hàm số!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hàm số $f(x) = \\begin{cases} \\frac{x^2 - 1}{x - 1} & \\text{khi } x \\neq 1 \\\\ m & \\text{khi } x = 1 \\end{cases}$. Để hàm số liên tục tại $x = 1$ thì giá trị của $m$ bằng:",
              options: ["A. $m = 2$", "B. $m = 1$", "C. $m = 0$", "D. $m = -1$"],
              correct: "A",
              explanation: "Ta có $\\lim_{x \\to 1} f(x) = \\lim_{x \\to 1} (x + 1) = 2$. Giá trị $f(1) = m$. Để liên tục tại $x = 1$ thì $f(1) = \\lim_{x \\to 1} f(x) \\Leftrightarrow m = 2$."
            },
            {
              question: "Hàm số nào sau đây **gián đoạn** tại điểm $x = 2$?",
              options: ["A. $y = \\frac{x + 1}{x - 2}$", "B. $y = x^2 - 3x + 1$", "C. $y = \\sin x$", "D. $y = \\sqrt{x + 2}$"],
              correct: "A",
              explanation: "Hàm số $y = \\frac{x+1}{x-2}$ không xác định tại $x = 2$ nên gián đoạn tại $x = 2$."
            },
            {
              question: "Khẳng định nào sau đây là **ĐÚNG**?",
              options: [
                "A. Hàm đa thức $y = P(x)$ liên tục trên toàn bộ $\\mathbb{R}$",
                "B. Hàm phân thức hữu tỉ liên tục trên toàn bộ $\\mathbb{R}$",
                "C. Đồ thị hàm số liên tục có thể bị đứt đoạn",
                "D. Mọi hàm số đều liên tục tại $x = 0$"
              ],
              correct: "A",
              explanation: "Theo định lý chuẩn SGK Kết nối tri thức: Mọi hàm đa thức đều liên tục trên toàn bộ tập số thực $\\mathbb{R}$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Các tính chất của hàm số liên tục và Định lý nghiệm trung gian",
          theory: createStandardTheoryHTML(
            "Bài 17: Hàm số liên tục", "Lớp 11", 2,
            "Các tính chất của hàm số liên tục và Định lý nghiệm trung gian",
            `<p>Kiến thức Định lý giá trị trung gian và ứng dụng chứng minh phương trình có nghiệm:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Tổng, hiệu, tích, thương:</strong> Nếu hai hàm số $y = f(x)$ và $y = g(x)$ liên tục tại $x_0$ thì các hàm $f(x) \\pm g(x)$, $f(x) \\cdot g(x)$ và $\\frac{f(x)}{g(x)}$ (với $g(x_0) \\neq 0$) đều liên tục tại $x_0$.</li>
              <li><strong>Định lý giá trị trung gian (Định lý nghiệm Bolzano - Cauchy):</strong>
                <br/>Nếu hàm số $y = f(x)$ <strong>liên tục trên đoạn $[a; b]$</strong> và $f(a) \\cdot f(b) < 0$ (tức $f(a)$ và $f(b)$ trái dấu nhau), thì tồn tại <strong>ít nhất một điểm $c \\in (a; b)$</strong> sao cho:
                $$f(c) = 0$$
                <br/>Nói cách khác, phương trình $f(x) = 0$ có <strong>ít nhất một nghiệm</strong> trong khoảng $(a; b)$!
              </li>
              <li><strong>Ý nghĩa hình học:</strong> Nếu đồ thị của hàm số liên tục nối một điểm phía dưới trục hoành ($y < 0$) với một điểm phía trên trục hoành ($y > 0$) thì nó bắt buộc phải cắt trục hoành tại ít nhất một điểm.</li>
            </ul>`,
            `<li>Định lý nghiệm chỉ khẳng định có ít nhất 1 nghiệm, có thể có nhiều hơn 1 nghiệm.</li>
            <li>Bắt buộc hàm số phải liên tục trên đoạn $[a; b]$. Nếu hàm bị gián đoạn giữa chừng thì định lý không còn đúng.</li>`,
            `<li>Áp dụng định lý nghiệm mà quên kiểm tra điều kiện hàm số liên tục trên đoạn.</li>
            <li>Chọn nhầm khoảng $(a; b)$ mà $f(a) \\cdot f(b) > 0$ (cùng dấu không suy ra được có nghiệm hay không).</li>`,
            `<li><em>"Hàm liên tục mà hai đầu mút trái dấu $\\rightarrow$ Chắc chắn có nghiệm xuyên qua trục hoành!"</em></li>`
          ),
          mcqs: [
            {
              question: "Phương trình $x^3 - 3x + 1 = 0$ có ít nhất một nghiệm trong khoảng nào dưới đây?",
              options: ["A. $(0; 1)$", "B. $(1; 2)$", "C. $(2; 3)$", "D. $(3; 4)$"],
              correct: "A",
              explanation: "Đặt $f(x) = x^3 - 3x + 1$ liên tục trên $\\mathbb{R}$. Ta có $f(0) = 1 > 0$ và $f(1) = 1 - 3 + 1 = -1 < 0$. Vì $f(0) \\cdot f(1) = -1 < 0$ nên có ít nhất một nghiệm trong khoảng $(0; 1)$."
            },
            {
              question: "Cho hàm số $f(x)$ liên tục trên đoạn $[1; 5]$ có $f(1) = -3$ và $f(5) = 4$. Số nghiệm của phương trình $f(x) = 0$ trên khoảng $(1; 5)$ là:",
              options: ["A. Ít nhất 1 nghiệm", "B. Đúng 1 nghiệm", "C. Vô nghiệm", "D. 2 nghiệm"],
              correct: "A",
              explanation: "Vì $f(1) \\cdot f(5) = -12 < 0$ và hàm liên tục nên phương trình có ít nhất 1 nghiệm thuộc $(1; 5)$."
            },
            {
              question: "Cho hai hàm số $f(x) = x^2$ và $g(x) = \\cos x$. Khẳng định nào sau đây là **SAI**?",
              options: [
                "A. Hàm số $h(x) = \\frac{f(x)}{g(x)}$ liên tục trên toàn bộ $\\mathbb{R}$",
                "B. Hàm số $f(x) + g(x)$ liên tục trên $\\mathbb{R}$",
                "C. Hàm số $f(x) \\cdot g(x)$ liên tục trên $\\mathbb{R}$",
                "D. Cả hai hàm số $f(x)$ và $g(x)$ đều liên tục trên $\\mathbb{R}$"
              ],
              correct: "A",
              explanation: "Hàm $h(x) = \\frac{x^2}{\\cos x}$ không xác định tại các điểm $\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi$ nên không thể liên tục trên toàn bộ $\\mathbb{R}$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = \\begin{cases} \\frac{x^2 - 9}{x - 3} & \\text{khi } x \\neq 3 \\\\ 6 & \\text{khi } x = 3 \\end{cases}$:",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R}$.", correct: "true", explain: "Xác định với mọi số thực." },
            { key: "b", text: "Giá trị của hàm số tại $x = 3$ là $f(3) = 6$.", correct: "true", explain: "Theo đề bài." },
            { key: "c", text: "Giới hạn $\\lim_{x \\to 3} f(x) = 6$.", correct: "true", explain: "$\\lim_{x \\to 3} (x + 3) = 6$." },
            { key: "d", text: "Hàm số gián đoạn tại điểm $x = 3$.", correct: "false", explain: "Vì $\\lim_{x \\to 3} f(x) = f(3) = 6$ nên hàm số liên tục tại $x = 3$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho phương trình $x^5 - 3x - 1 = 0$:",
          items: [
            { key: "a", text: "Hàm số $f(x) = x^5 - 3x - 1$ liên tục trên $\\mathbb{R}$.", correct: "true", explain: "Hàm đa thức." },
            { key: "b", text: "Ta có $f(1) = -3 < 0$.", correct: "true", explain: "$1 - 3 - 1 = -3$." },
            { key: "c", text: "Ta có $f(2) = 25 > 0$.", correct: "true", explain: "$32 - 6 - 1 = 25$." },
            { key: "d", text: "Phương trình có ít nhất một nghiệm thuộc khoảng $(1; 2)$.", correct: "true", explain: "Vì $f(1)f(2) < 0$ và liên tục." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét tính liên tục của các hàm số sau:",
          items: [
            { key: "a", text: "Hàm số $y = \\sqrt{x - 1}$ liên tục trên nửa khoảng $[1; +\\infty)$.", correct: "true", explain: "Tập xác định là $[1; +\\infty)$." },
            { key: "b", text: "Hàm số $y = \\tan x$ liên tục trên $\\mathbb{R}$.", correct: "false", explain: "Gián đoạn tại $x = \\pi/2 + k\\pi$." },
            { key: "c", text: "Hàm số $y = |x|$ liên tục tại $x = 0$.", correct: "true", explain: "$\\lim_{x \\to 0} |x| = |0| = 0$." },
            { key: "d", text: "Đồ thị hàm số $y = \\frac{1}{x}$ là một đường liền nét trên $\\mathbb{R}$.", correct: "false", explain: "Bị đứt đoạn tại $x = 0$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hàm số $f(x)$ liên tục trên đoạn $[a; b]$ với $f(a) = 2$ và $f(b) = -5$:",
          items: [
            { key: "a", text: "Đồ thị hàm số cắt trục hoành tại ít nhất một điểm có hoành độ thuộc $(a; b)$.", correct: "true", explain: "Định lý giá trị trung gian." },
            { key: "b", text: "Phương trình $f(x) = 0$ có ít nhất 1 nghiệm trong $(a; b)$.", correct: "true", explain: "Vì $2 \\times (-5) = -10 < 0$." },
            { key: "c", text: "Phương trình $f(x) = 1$ cũng có ít nhất 1 nghiệm trong $(a; b)$.", correct: "true", explain: "Vì số 1 nằm giữa $-5$ và $2$." },
            { key: "d", text: "Phương trình $f(x) = 0$ có đúng duy nhất 1 nghiệm trong $(a; b)$.", correct: "false", explain: "Có thể có nhiều hơn 1 nghiệm nếu hàm uốn lượn." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hàm số $y = \\frac{x + 2}{x^2 - 1}$:",
          items: [
            { key: "a", text: "Hàm số xác định trên $\\mathbb{R} \\setminus \\{-1; 1\\}$.", correct: "true", explain: "$x^2 - 1 \\neq 0 \\Leftrightarrow x \\neq \\pm 1$." },
            { key: "b", text: "Hàm số liên tục trên các khoảng $(-\\infty; -1), (-1; 1)$ và $(1; +\\infty)$.", correct: "true", explain: "Liên tục trên từng khoảng xác định." },
            { key: "c", text: "Hàm số liên tục trên khoảng $(0; 2)$.", correct: "false", explain: "Chứa điểm gián đoạn $x = 1$." },
            { key: "d", text: "Hàm số gián đoạn tại hai điểm $x = -1$ và $x = 1$.", correct: "true", explain: "Mẫu bằng 0 tại hai điểm này." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về định lý giá trị trung gian trong SGK Toán 11:",
          items: [
            { key: "a", text: "Nếu hàm số liên tục trên $[a; b]$ thì nó nhận mọi giá trị trung gian giữa $f(a)$ và $f(b)$.", correct: "true", explain: "Định lý chuẩn." },
            { key: "b", text: "Mọi phương trình đa thức bậc lẻ luôn có ít nhất một nghiệm thực.", correct: "true", explain: "Vì $\\lim_{x \\to \\pm\\infty} P(x) = \\pm\\infty$ nên luôn đổi dấu." },
            { key: "c", text: "Phương trình đa thức bậc chẵn luôn có ít nhất một nghiệm thực.", correct: "false", explain: "Ví dụ $x^2 + 1 = 0$ vô nghiệm." },
            { key: "d", text: "Định lý nghiệm vẫn đúng nếu hàm số bị gián đoạn tại một điểm trong $[a; b]$.", correct: "false", explain: "Bắt buộc phải liên tục trên toàn bộ đoạn." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 18: LUỸ THỪA VỚI SỐ MŨ THỰC (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai18": {
      id: "toan11_bai18",
      lessonTitle: "Bài 18: Luỹ thừa với số mũ thực",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 18:") || t.includes("luỹ thừa") || t.includes("lũy thừa");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm luỹ thừa với số mũ nguyên, hữu tỉ và số thực",
          theory: createStandardTheoryHTML(
            "Bài 18: Luỹ thừa với số mũ thực", "Lớp 11", 1,
            "Khái niệm luỹ thừa với số mũ nguyên, hữu tỉ và số thực",
            `<p>Kiến thức mở rộng tập số mũ từ nguyên sang hữu tỉ và thực theo SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Số mũ nguyên:</strong>
                <br/>• $a^n = a \\cdot a \\dots a$ ($n$ thừa số $a$, $n \\in \\mathbb{N}^*$).
                <br/>• $a^0 = 1$ và $a^{-n} = \\frac{1}{a^n}$ (<strong>điều kiện: $a \\neq 0$</strong>).
              </li>
              <li><strong>Căn bậc $n$ ($n \\ge 2$ nguyên dương):</strong>
                <br/>• Nếu $n$ lẻ: Mọi số thực $a$ có duy nhất một căn bậc $n$ là $\\sqrt[n]{a}$.
                <br/>• Nếu $n$ chẵn: Số âm không có căn bậc $n$; số dương $a > 0$ có 2 căn đối nhau là $\\pm\\sqrt[n]{a}$.
              </li>
              <li><strong>Số mũ hữu tỉ $\\frac{m}{n}$ và số mũ thực $\\alpha$:</strong>
                <br/>• Cho <strong>cơ số dương $a > 0$</strong>: $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$.
                <br/>• Luỹ thừa với số mũ thực $a^\\alpha$ chỉ xác định khi <strong>$a > 0$</strong>.
              </li>
            </ul>`,
            `<li><strong>Điều kiện cơ số (CỰC KỲ QUAN TRỌNG):</strong>
              <br/>• Mũ nguyên dương: cơ số $a$ tùy ý.
              <br/>• Mũ nguyên âm hoặc bằng 0: cơ số $a \\neq 0$.
              <br/>• Mũ không nguyên (hữu tỉ, vô tỉ, thực): bắt buộc <strong>cơ số $a > 0$</strong>.
            </li>
            <li>Biểu thức $(-2)^{\\frac{1}{2}}$ hay $0^{-3}$ là <strong>hoàn toàn vô nghĩa</strong>.</li>`,
            `<li>Áp dụng công thức $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$ khi cơ số $a < 0$ (Ví dụ: viết $(-8)^{2/6} = \\sqrt[6]{(-8)^2} = 2$ là sai bản chất).</li>
            <li>Quên điều kiện cơ số dương khi làm bài toán tìm tập xác định.</li>`,
            `<li><em>"Mũ nguyên âm cơ số khác 0 – Mũ không nguyên cơ số phải dương hoàn toàn!"</em></li>`
          ),
          mcqs: [
            {
              question: "Biểu thức nào sau đây **KHÔNG CÓ NGHĨA**?",
              options: ["A. $(-3)^{\\frac{1}{3}}$", "B. $2^{\\sqrt{2}}$", "C. $(-5)^3$", "D. $(\\frac{1}{2})^{-2}$"],
              correct: "A",
              explanation: "Luỹ thừa với số mũ không nguyên ($1/3$) chỉ xác định với cơ số dương, do đó $(-3)^{1/3}$ không có nghĩa."
            },
            {
              question: "Viết biểu thức $P = x^{\\frac{2}{3}} \\cdot \\sqrt{x}$ ($x > 0$) dưới dạng luỹ thừa với số mũ hữu tỉ:",
              options: ["A. $x^{\\frac{7}{6}}$", "B. $x^{\\frac{5}{6}}$", "C. $x^{\\frac{1}{3}}$", "D. $x^{\\frac{4}{3}}$"],
              correct: "A",
              explanation: "$P = x^{\\frac{2}{3}} \\cdot x^{\\frac{1}{2}} = x^{\\frac{2}{3} + \\frac{1}{2}} = x^{\\frac{7}{6}}$."
            },
            {
              question: "Giá trị của biểu thức $16^{-\\frac{3}{4}}$ bằng:",
              options: ["A. $\\frac{1}{8}$", "B. 8", "C. $-\\frac{1}{8}$", "D. $\\frac{1}{16}$"],
              correct: "A",
              explanation: "$16^{-\\frac{3}{4}} = (2^4)^{-\\frac{3}{4}} = 2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Các tính chất của luỹ thừa với số mũ thực",
          theory: createStandardTheoryHTML(
            "Bài 18: Luỹ thừa với số mũ thực", "Lớp 11", 2,
            "Các tính chất của luỹ thừa với số mũ thực",
            `<p>Hệ thống 5 tính chất đại số của luỹ thừa với số mũ thực ($a, b > 0$ và $\\alpha, \\beta \\in \\mathbb{R}$):</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Nhân và chia cùng cơ số:</strong>
                <br/>$$a^\\alpha \\cdot a^\\beta = a^{\\alpha + \\beta}, \\qquad \\frac{a^\\alpha}{a^\\beta} = a^{\\alpha - \\beta}$$
              </li>
              <li><strong>Luỹ thừa của luỹ thừa:</strong>
                <br/>$$(a^\\alpha)^\\beta = a^{\\alpha \\beta}$$
              </li>
              <li><strong>Luỹ thừa của một tích và một thương:</strong>
                <br/>$$(a \\cdot b)^\\alpha = a^\\alpha \\cdot b^\\alpha, \\qquad \\left(\\frac{a}{b}\\right)^\\alpha = \\frac{a^\\alpha}{b^\\alpha}$$
              </li>
              <li><strong>So sánh hai luỹ thừa cùng cơ số:</strong>
                <br/>• Nếu $a > 1$: $a^\\alpha > a^\\beta \\Leftrightarrow \\alpha > \\beta$ (<strong>đồng biến - giữ nguyên chiều</strong>).
                <br/>• Nếu $0 < a < 1$: $a^\\alpha > a^\\beta \\Leftrightarrow \\alpha < \\beta$ (<strong>nghịch biến - đảo ngược chiều</strong>).
              </li>
            </ul>`,
            `<li>Khi so sánh hai luỹ thừa cùng cơ số, luôn kiểm tra cơ số lớn hơn 1 hay nằm giữa 0 và 1 để quyết định giữ hay đổi chiều bất đẳng thức.</li>
            <li>Phân biệt $(a^\\alpha)^\\beta = a^{\\alpha \\beta}$ với tháp luỹ thừa $a^{\\alpha^\\beta} = a^{(\\alpha^\\beta)}$.</li>`,
            `<li>Cộng số mũ khi nhân khác cơ số: viết $2^3 \\cdot 3^3 = 6^6$ (sai, phải là $6^3$).</li>
            <li>Nhầm dấu khi so sánh luỹ thừa với cơ số $0 < a < 1$.</li>`,
            `<li><em>"Cơ số lớn hơn 1 giữ chiều – Cơ số từ 0 đến 1 đảo chiều – Nhân cộng số mũ, chia trừ số mũ!"</em></li>`
          ),
          mcqs: [
            {
              question: "Rút gọn biểu thức $A = \\frac{a^{\\sqrt{3} + 1} \\cdot a^{2 - \\sqrt{3}}}{(a^{\\sqrt{2} - 1})^{\\sqrt{2} + 1}}$ với $a > 0$:",
              options: ["A. $a^2$", "B. $a^3$", "C. $a$", "D. $a^4$"],
              correct: "A",
              explanation: "Tử số: $a^{(\\sqrt{3}+1) + (2-\\sqrt{3})} = a^3$. Mẫu số: $a^{(\\sqrt{2}-1)(\\sqrt{2}+1)} = a^{2 - 1} = a^1$. Vậy $A = \\frac{a^3}{a} = a^2$."
            },
            {
              question: "Cho $0 < a < 1$. Khẳng định nào sau đây là **ĐÚNG**?",
              options: ["A. $a^{\\sqrt{2}} < a^{\\sqrt{3}}$", "B. $a^{\\sqrt{2}} > a^{\\sqrt{3}}$", "C. $a^0 < a^1$", "D. $a^{-1} < a^0$"],
              correct: "B",
              explanation: "Vì cơ số $0 < a < 1$ và $\\sqrt{2} < \\sqrt{3}$ nên theo tính chất đảo chiều: $a^{\\sqrt{2}} > a^{\\sqrt{3}}$."
            },
            {
              question: "Biểu thức $(x^2)^{\\frac{1}{2}}$ bằng:",
              options: ["A. $|x|$", "B. $x$", "C. $-x$", "D. $x^2$"],
              correct: "A",
              explanation: "Theo định nghĩa căn bậc hai: $(x^2)^{\\frac{1}{2}} = \\sqrt{x^2} = |x|$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho các số thực dương $a, b$ và các số thực $\\alpha, \\beta$:",
          items: [
            { key: "a", text: "$a^\\alpha \\cdot a^\\beta = a^{\\alpha + \\beta}$.", correct: "true", explain: "Công thức nhân cùng cơ số." },
            { key: "b", text: "$\\frac{a^\\alpha}{a^\\beta} = a^{\\alpha - \\beta}$.", correct: "true", explain: "Công thức chia cùng cơ số." },
            { key: "c", text: "$(a^\\alpha)^\\beta = a^{\\alpha \\beta}$.", correct: "true", explain: "Luỹ thừa của luỹ thừa." },
            { key: "d", text: "$(a + b)^\\alpha = a^\\alpha + b^\\alpha$ với mọi $\\alpha \\neq 0$.", correct: "false", explain: "Sai, không có công thức phân phối luỹ thừa cho phép cộng." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét tính xác định của các biểu thức luỹ thừa:",
          items: [
            { key: "a", text: "$3^{\\pi}$ có nghĩa.", correct: "true", explain: "Cơ số $3 > 0$." },
            { key: "b", text: "$0^0$ bằng 1.", correct: "false", explain: "$0^0$ không có nghĩa trong toán học sơ cấp." },
            { key: "c", text: "$(-2)^{-4} = \\frac{1}{16}$.", correct: "true", explain: "$(-2)^{-4} = \\frac{1}{(-2)^4} = \\frac{1}{16}$." },
            { key: "d", text: "$(-4)^{\\frac{1}{2}} = \\sqrt{-4} = -2$.", correct: "false", explain: "Số âm không có luỹ thừa số mũ hữu tỉ." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $f(x) = (x - 2)^{\\sqrt{3}}$:",
          items: [
            { key: "a", text: "Số mũ $\\sqrt{3}$ là một số vô tỉ (không nguyên).", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Điều kiện xác định của hàm số là $x - 2 > 0$.", correct: "true", explain: "Mũ không nguyên cơ số phải dương." },
            { key: "c", text: "Tập xác định của hàm số là $D = (2; +\\infty)$.", correct: "true", explain: "$x > 2$." },
            { key: "d", text: "Điểm $x = 2$ thuộc tập xác định của hàm số.", correct: "false", explain: "Tại $x = 2$ cơ số bằng 0, không xác định." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: So sánh các luỹ thừa:",
          items: [
            { key: "a", text: "$2^{\\sqrt{3}} > 2^{\\sqrt{2}}$ vì $2 > 1$ và $\\sqrt{3} > \\sqrt{2}$.", correct: "true", explain: "Cơ số lớn hơn 1 giữ chiều." },
            { key: "b", text: "$(0.5)^3 < (0.5)^2$ vì $0.5 < 1$ và $3 > 2$.", correct: "true", explain: "Cơ số bé hơn 1 đảo chiều: $0.125 < 0.25$." },
            { key: "c", text: "$\\pi^0 = 1$.", correct: "true", explain: "Mọi số khác 0 mũ 0 đều bằng 1." },
            { key: "d", text: "$(\\sqrt{2} - 1)^5 > (\\sqrt{2} - 1)^3$.", correct: "false", explain: "Vì $\\sqrt{2} - 1 \\approx 0.414 < 1$ nên số mũ càng lớn thì giá trị càng nhỏ." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Rút gọn biểu thức $P = \\frac{a^{\\frac{1}{3}} \\sqrt{b} + b^{\\frac{1}{3}} \\sqrt{a}}{\\sqrt[6]{a} + \\sqrt[6]{b}}$ với $a, b > 0$:",
          items: [
            { key: "a", text: "$a^{\\frac{1}{3}} = a^{\\frac{2}{6}} = (\\sqrt[6]{a})^2$.", correct: "true", explain: "Quy đồng số mũ." },
            { key: "b", text: "$\\sqrt{a} = a^{\\frac{3}{6}} = (\\sqrt[6]{a})^3$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Tử số đặt được nhân tử chung là $\\sqrt[6]{ab}$.", correct: "false", explain: "Tử số là $(\\sqrt[6]{a})^2 (\\sqrt[6]{b})^3 + (\\sqrt[6]{b})^2 (\\sqrt[6]{a})^3 = (\\sqrt[6]{ab})^2 (\\sqrt[6]{a} + \\sqrt[6]{b})$." },
            { key: "d", text: "Biểu thức rút gọn bằng $\\sqrt[3]{ab}$.", correct: "true", explain: "Sau khi triệt tiêu mẫu còn $(\\sqrt[6]{ab})^2 = (ab)^{2/6} = \\sqrt[3]{ab}$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán lãi kép ứng dụng luỹ thừa:",
          items: [
            { key: "a", text: "Công thức lãi kép là $A_n = A(1 + r)^n$.", correct: "true", explain: "$A$ là vốn gốc, $r$ là lãi suất/kỳ, $n$ là số kỳ." },
            { key: "b", text: "Sau mỗi kỳ, tiền lãi được cộng gộp vào vốn để tính lãi cho kỳ tiếp theo.", correct: "true", explain: "Bản chất lãi kép." },
            { key: "c", text: "Số tiền tăng theo cấp số nhân với công bội $q = 1 + r$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Nếu lãi suất tăng gấp đôi thì số tiền nhận được sau $n$ năm cũng tăng đúng gấp đôi.", correct: "false", explain: "Quan hệ phi tuyến luỹ thừa $(1 + 2r)^n \\neq 2(1+r)^n$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 19: LÔGARIT (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai19": {
      id: "toan11_bai19",
      lessonTitle: "Bài 19: Lôgarit",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 19:") || (t.includes("lôgarit") && !t.includes("hàm số") && !t.includes("phương trình")) || (t.includes("logarit") && !t.includes("hàm số") && !t.includes("phương trình"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm Lôgarit và các tính chất cơ bản",
          theory: createStandardTheoryHTML(
            "Bài 19: Lôgarit", "Lớp 11", 1,
            "Khái niệm Lôgarit và các tính chất cơ bản",
            `<p>Định nghĩa và các hệ quả cốt lõi của Lôgarit chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Cho hai số thực dương $a, b$ với <strong>$a \\neq 1$</strong>. Số $\\alpha$ thỏa mãn đẳng thức $a^\\alpha = b$ được gọi là <em>lôgarit cơ số $a$ của $b$</em>, ký hiệu là $\\log_a b$:
                $$\\alpha = \\log_a b \\iff a^\\alpha = b$$
              </li>
              <li><strong>Điều kiện tồn tại:</strong> Cơ số $a > 0, a \\neq 1$ và biểu thức dưới dấu logarit <strong>$b > 0$</strong>. Không có logarit của số âm và số 0!</li>
              <li><strong>4 tính chất nền tảng:</strong>
                <br/>• $\\log_a 1 = 0$
                <br/>• $\\log_a a = 1$
                <br/>• $\\log_a (a^b) = b$
                <br/>• $a^{\\log_a b} = b$ ($b > 0$)
              </li>
              <li><strong>Lôgarit thập phân & Lôgarit tự nhiên:</strong>
                <br/>• Lôgarit thập phân: Cơ số $10$, ký hiệu là $\\log b$ hoặc $\\lg b$.
                <br/>• Lôgarit tự nhiên: Cơ số $e \\approx 2.71828$, ký hiệu là $\\ln b$.
              </li>
            </ul>`,
            `<li>Muốn viết $\\log_a b$, bắt buộc phải nhớ điều kiện \"Cơ số dương khác 1, biểu thức trong logarit phải dương\".</li>
            <li>Đặc biệt chú ý đẳng thức $a^{\\log_a b} = b$, đây là công thức khử logarit cực mạnh trong các bài toán biến đổi.</li>`,
            `<li>Tính logarit của số âm: viết $\\log_2(-4) = -2$ (sai hoàn toàn, biểu thức vô nghĩa).</li>
            <li>Quên điều kiện cơ số khác 1 (cơ số bằng 1 thì $1^\\alpha = 1$ không xác định được $\\alpha$).</li>`,
            `<li><em>"Logarit là số mũ: $a$ mũ mấy thì bằng $b$ $\\rightarrow$ Số mũ đó chính là $\\log_a b$!"</em></li>`
          ),
          mcqs: [
            {
              question: "Giá trị của biểu thức $\\log_2 32$ bằng:",
              options: ["A. 5", "B. 4", "C. 16", "D. 6"],
              correct: "A",
              explanation: "Vì $2^5 = 32$ nên $\\log_2 32 = 5$."
            },
            {
              question: "Biểu thức $3^{\\log_3 7}$ có giá trị bằng:",
              options: ["A. 7", "B. 3", "C. 21", "D. 1"],
              correct: "A",
              explanation: "Theo tính chất $a^{\\log_a b} = b$, ta có $3^{\\log_3 7} = 7$."
            },
            {
              question: "Điều kiện xác định của biểu thức $\\log_3(x - 5)$ là:",
              options: ["A. $x > 5$", "B. $x \\ge 5$", "C. $x \\neq 5$", "D. $x < 5$"],
              correct: "A",
              explanation: "Biểu thức dưới dấu logarit phải dương: $x - 5 > 0 \\Leftrightarrow x > 5$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Các quy tắc tính và Công thức đổi cơ số",
          theory: createStandardTheoryHTML(
            "Bài 19: Lôgarit", "Lớp 11", 2,
            "Các quy tắc tính và Công thức đổi cơ số",
            `<p>Hệ thống quy tắc tính toán và biến đổi Lôgarit chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Lôgarit của một tích (Log của tích bằng tổng các log):</strong>
                $$\\log_a(b_1 \\cdot b_2) = \\log_a b_1 + \\log_a b_2 \\quad (a, b_1, b_2 > 0, a \\neq 1)$$
              </li>
              <li><strong>Lôgarit của một thương (Log của thương bằng hiệu các log):</strong>
                $$\\log_a\\left(\\frac{b_1}{b_2}\\right) = \\log_a b_1 - \\log_a b_2, \\qquad \\log_a\\left(\\frac{1}{b}\\right) = -\\log_a b$$
              </li>
              <li><strong>Lôgarit của một luỹ thừa (Đưa số mũ ra ngoài):</strong>
                $$\\log_a (b^\\alpha) = \\alpha \\log_a b, \\qquad \\log_{a^\\beta} b = \\frac{1}{\\beta} \\log_a b \\quad (\\beta \\neq 0)$$
                <br/>Tổng hợp: $\\log_{a^\\beta} (b^\\alpha) = \\frac{\\alpha}{\\beta} \\log_a b$.
              </li>
              <li><strong>Công thức đổi cơ số (Chèn cơ số mới $c$):</strong>
                $$\\log_a b = \\frac{\\log_c b}{\\log_c a} \\quad (c > 0, c \\neq 1)$$
                <br/>Hệ quả: $\\log_a b \\cdot \\log_b c = \\log_a c$ và $\\log_a b = \\frac{1}{\\log_b a}$.
              </li>
            </ul>`,
            `<li>Khi đưa số mũ chẵn ra ngoài: $\\log_a(x^{2k}) = 2k \\log_a |x|$ (phải có dấu giá trị tuyệt đối nếu chưa biết dấu của $x$).</li>
            <li>Công thức đổi cơ số cho phép chuyển mọi logarit về logarit tự nhiên $\\ln$ hoặc logarit thập phân để bấm máy tính Casio.</li>`,
            `<li>Nhầm lẫn $\\log_a(x + y)$ thành $\\log_a x + \\log_a y$ (sai nghiêm trọng, chỉ có log của tích mới thành tổng).</li>
            <li>Đưa số mũ ở cơ số ra ngoài mà không lấy nghịch đảo: viết $\\log_{a^2} b = 2\\log_a b$ (sai, phải là $\\frac{1}{2}\\log_a b$).</li>`,
            `<li><em>"Tích thành Tổng – Thương thành Hiệu – Mũ trên tử, Mũ dưới mẫu – Đổi cơ số chèn vào giữa!"</em></li>`
          ),
          mcqs: [
            {
              question: "Biểu thức $\\log_2 6 - \\log_2 3$ bằng:",
              options: ["A. 1", "B. 2", "C. $\\log_2 3$", "D. 0"],
              correct: "A",
              explanation: "$\\log_2 6 - \\log_2 3 = \\log_2\\left(\\frac{6}{3}\\right) = \\log_2 2 = 1$."
            },
            {
              question: "Cho $a > 0, a \\neq 1$. Giá trị của biểu thức $\\log_{a^3} a$ bằng:",
              options: ["A. $\\frac{1}{3}$", "B. 3", "C. -3", "D. 1"],
              correct: "A",
              explanation: "$\\log_{a^3} a = \\frac{1}{3} \\log_a a = \\frac{1}{3}(1) = \\frac{1}{3}$."
            },
            {
              question: "Biết $\\log_2 3 = a$. Giá trị của $\\log_4 9$ tính theo $a$ là:",
              options: ["A. $a$", "B. $2a$", "C. $a^2$", "D. $\\frac{a}{2}$"],
              correct: "A",
              explanation: "$\\log_4 9 = \\log_{2^2} (3^2) = \\frac{2}{2} \\log_2 3 = \\log_2 3 = a$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho các số thực dương $a, b, c$ với $a \\neq 1$:",
          items: [
            { key: "a", text: "$\\log_a(b \\cdot c) = \\log_a b + \\log_a c$.", correct: "true", explain: "Log của tích bằng tổng các log." },
            { key: "b", text: "$\\log_a(b + c) = \\log_a b \\cdot \\log_a c$.", correct: "false", explain: "Sai, không có công thức cho log của tổng." },
            { key: "c", text: "$\\log_a\\left(\\frac{b}{c}\\right) = \\log_a b - \\log_a c$.", correct: "true", explain: "Log của thương bằng hiệu các log." },
            { key: "d", text: "$\\log_a\\sqrt{b} = \\frac{1}{2}\\log_a b$.", correct: "true", explain: "Vì $\\sqrt{b} = b^{1/2}$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét tính đúng sai của việc đưa số mũ ra ngoài logarit:",
          items: [
            { key: "a", text: "$\\log_2 (x^3) = 3\\log_2 x$ với mọi $x > 0$.", correct: "true", explain: "Đúng với số mũ lẻ và $x > 0$." },
            { key: "b", text: "$\\log_2 (x^2) = 2\\log_2 x$ với mọi số thực $x \\neq 0$.", correct: "false", explain: "Sai, nếu $x < 0$ thì phải viết $2\\log_2|x|$." },
            { key: "c", text: "$\\log_{a^2} b = \\frac{1}{2}\\log_a b$ ($a, b > 0, a \\neq 1$).", correct: "true", explain: "Số mũ ở cơ số đưa ra thành nghịch đảo." },
            { key: "d", text: "$\\log_{a^3}(b^6) = 2\\log_a b$.", correct: "true", explain: "$\\frac{6}{3} = 2$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho $a = \\log_2 3$ và $b = \\log_2 5$:",
          items: [
            { key: "a", text: "$\\log_2 15 = a + b$.", correct: "true", explain: "$15 = 3 \\times 5 \\Rightarrow \\log_2 3 + \\log_2 5 = a + b$." },
            { key: "b", text: "$\\log_2 45 = 2a + b$.", correct: "true", explain: "$45 = 9 \\times 5 = 3^2 \\times 5 \\Rightarrow 2\\log_2 3 + \\log_2 5 = 2a + b$." },
            { key: "c", text: "$\\log_2 2.5 = b - 1$.", correct: "true", explain: "$2.5 = 5/2 \\Rightarrow \\log_2 5 - \\log_2 2 = b - 1$." },
            { key: "d", text: "$\\log_3 5 = \\frac{a}{b}$.", correct: "false", explain: "Đổi cơ số: $\\log_3 5 = \\frac{\\log_2 5}{\\log_2 3} = \\frac{b}{a} \\neq \\frac{a}{b}$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về lôgarit thập phân và tự nhiên:",
          items: [
            { key: "a", text: "$\\log 1000 = 3$.", correct: "true", explain: "$10^3 = 1000$." },
            { key: "b", text: "$\\ln e = 1$.", correct: "true", explain: "Đúng định nghĩa." },
            { key: "c", text: "$\\ln(e^2) = 2$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "$\\ln 1 = e$.", correct: "false", explain: "Logarit của 1 luôn bằng 0: $\\ln 1 = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho đẳng thức $a^{\\log_b c} = c^{\\log_b a}$ ($a, b, c > 0, b \\neq 1$):",
          items: [
            { key: "a", text: "Lấy logarit cơ số $b$ hai vế ta được $\\log_b c \\cdot \\log_b a = \\log_b a \\cdot \\log_b c$.", correct: "true", explain: "Hai vế bằng nhau." },
            { key: "b", text: "Đẳng thức $a^{\\log_b c} = c^{\\log_b a}$ luôn đúng.", correct: "true", explain: "Tính chất đảo cơ số nổi tiếng." },
            { key: "c", text: "$2^{\\log_3 5} = 5^{\\log_3 2}$.", correct: "true", explain: "Áp dụng đẳng thức trên." },
            { key: "d", text: "$3^{\\log_2 8} = 27$.", correct: "true", explain: "$\\log_2 8 = 3 \\Rightarrow 3^3 = 27$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ứng dụng thực tế của logarit:",
          items: [
            { key: "a", text: "Độ pH của dung dịch tính theo nồng độ ion $H^+$ là $\\text{pH} = -\\log[H^+]$.", correct: "true", explain: "Công thức chuẩn hóa học." },
            { key: "b", text: "Thang đo độ Richter của động đất là một thang đo logarit.", correct: "true", explain: "Tăng 1 độ Richter năng lượng tăng gấp khoảng 31.6 lần." },
            { key: "c", text: "Mức cường độ âm (Decibel) tính bằng công thức $L = 10\\log\\left(\\frac{I}{I_0}\\right)$.", correct: "true", explain: "Chuẩn vật lý." },
            { key: "d", text: "Độ pH càng nhỏ thì dung dịch có tính bazơ càng mạnh.", correct: "false", explain: "pH càng nhỏ thì tính axit càng mạnh." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 20: HÀM SỐ MŨ VÀ HÀM SỐ LÔGARIT (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai20": {
      id: "toan11_bai20",
      lessonTitle: "Bài 20: Hàm số mũ và hàm số lôgarit",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 20:") || (t.includes("hàm số mũ") && t.includes("lôgarit"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Hàm số mũ y = a^x và đồ thị",
          theory: createStandardTheoryHTML(
            "Bài 20: Hàm số mũ và hàm số lôgarit", "Lớp 11", 1,
            "Hàm số mũ y = a^x và đồ thị",
            `<p>Kiến thức khảo sát hàm số mũ $y = a^x$ ($a > 0, a \\neq 1$) chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Tập xác định:</strong> $D = \\mathbb{R}$.</li>
              <li><strong>Tập giá trị:</strong> $T = (0; +\\infty)$ (hàm số luôn nhận giá trị dương: $a^x > 0, \\forall x$).</li>
              <li><strong>Chiều biến thiên:</strong>
                <br/>• Nếu $a > 1$: Hàm số <strong>đồng biến</strong> trên $\\mathbb{R}$ (đồ thị đi lên từ trái sang phải).
                <br/>• Nếu $0 < a < 1$: Hàm số <strong>nghịch biến</strong> trên $\\mathbb{R}$ (đồ thị đi xuống từ trái sang phải).
              </li>
              <li><strong>Đặc điểm đồ thị:</strong>
                <br/>• Luôn đi qua điểm $(0; 1)$ và $(1; a)$.
                <br/>• Nằm hoàn toàn phía trên trục hoành $Ox$.
                <br/>• Nhận trục hoành $Ox$ làm đường tiệm cận ngang (tiến về $0$ khi $x \\to -\\infty$ nếu $a > 1$; hoặc khi $x \\to +\\infty$ nếu $0 < a < 1$).
              </li>
            </ul>`,
            `<li>Vì tập giá trị là $(0; +\\infty)$ nên đồ thị hàm số mũ không bao giờ cắt hay chạm trục hoành.</li>
            <li>Hai đồ thị $y = a^x$ và $y = \\left(\\frac{1}{a}\\right)^x = a^{-x}$ đối xứng nhau qua trục tung $Oy$.</li>`,
            `<li>Nhầm tập xác định của hàm số mũ: ngộ nhận $x > 0$ (sai, biến số $x$ nhận mọi giá trị thực).</li>
            <li>Quên đổi chiều biến thiên khi cơ số $0 < a < 1$.</li>`,
            `<li><em>"Mũ xác định trên toàn $\\mathbb{R}$, giá trị luôn dương – Cơ số lớn 1 đi lên, cơ số bé 1 đi xuống!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tập xác định của hàm số $y = 5^x$ là:",
              options: ["A. $\\mathbb{R}$", "B. $(0; +\\infty)$", "C. $[0; +\\infty)$", "D. $\\mathbb{R} \\setminus \\{0\\}$"],
              correct: "A",
              explanation: "Hàm số mũ xác định với mọi số thực $x \\in \\mathbb{R}$."
            },
            {
              question: "Hàm số nào sau đây **nghịch biến** trên toàn bộ $\\mathbb{R}$?",
              options: ["A. $y = (0.3)^x$", "B. $y = 2^x$", "C. $y = e^x$", "D. $y = (\\sqrt{2})^x$"],
              correct: "A",
              explanation: "Vì cơ số $a = 0.3 < 1$ nên hàm số $y = (0.3)^x$ nghịch biến trên $\\mathbb{R}$."
            },
            {
              question: "Đồ thị hàm số $y = 3^x$ luôn đi qua điểm nào dưới đây?",
              options: ["A. $(0; 1)$", "B. $(1; 0)$", "C. $(0; 0)$", "D. $(1; 1)$"],
              correct: "A",
              explanation: "Thay $x = 0$ ta được $y = 3^0 = 1$. Vậy đồ thị đi qua điểm $(0; 1)$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Hàm số lôgarit y = log_a x và mối quan hệ đối xứng",
          theory: createStandardTheoryHTML(
            "Bài 20: Hàm số mũ và hàm số lôgarit", "Lớp 11", 2,
            "Hàm số lôgarit y = log_a x và mối quan hệ đối xứng",
            `<p>Kiến thức khảo sát hàm số lôgarit $y = \\log_a x$ ($a > 0, a \\neq 1$) chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Tập xác định:</strong> $D = (0; +\\infty)$ (biểu thức trong logarit bắt buộc phải dương: $x > 0$).</li>
              <li><strong>Tập giá trị:</strong> $T = \\mathbb{R}$.</li>
              <li><strong>Chiều biến thiên:</strong>
                <br/>• Nếu $a > 1$: Hàm số <strong>đồng biến</strong> trên $(0; +\\infty)$.
                <br/>• Nếu $0 < a < 1$: Hàm số <strong>nghịch biến</strong> trên $(0; +\\infty)$.
              </li>
              <li><strong>Đặc điểm đồ thị:</strong>
                <br/>• Luôn đi qua điểm $(1; 0)$ và $(a; 1)$.
                <br/>• Nằm hoàn toàn bên phải trục tung $Oy$.
                <br/>• Nhận trục tung $Oy$ làm đường tiệm cận đứng (vì $\\lim_{x \\to 0^+} \\log_a x = -\\infty$ khi $a > 1$).
              </li>
              <li><strong>Quan hệ đối xứng:</strong> Đồ thị hai hàm số $y = a^x$ và $y = \\log_a x$ <strong>đối xứng nhau qua đường phân giác $y = x$</strong>.</li>
            </ul>`,
            `<li>Khi tìm tập xác định của hàm số $y = \\log_a u(x)$, bắt buộc phải đặt điều kiện $u(x) > 0$.</li>
            <li>Hàm số mũ và hàm số lôgarit cùng cơ số là hai hàm số ngược nhau.</li>`,
            `<li>Quên đặt điều kiện $x > 0$ khi tìm tập xác định hàm logarit.</li>
            <li>Nhầm tiệm cận của hàm logarit (là trục tung $Oy$, còn hàm mũ là trục hoành $Ox$).</li>`,
            `<li><em>"Logarit đứng nhìn trục tung $Oy$ – Mũ nằm ngang nhìn trục hoành $Ox$ – Đối xứng qua đường $y = x$!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tập xác định của hàm số $y = \\log_2(3 - x)$ là:",
              options: ["A. $(-\\infty; 3)$", "B. $(3; +\\infty)$", "C. $(-\\infty; 3]$", "D. $[3; +\\infty)$"],
              correct: "A",
              explanation: "Điều kiện xác định: $3 - x > 0 \\Leftrightarrow x < 3$. Tập xác định là $(-\\infty; 3)$."
            },
            {
              question: "Đồ thị hàm số $y = \\log_3 x$ nhận đường thẳng nào làm tiệm cận đứng?",
              options: ["A. Trục tung $Oy$ ($x = 0$)", "B. Trục hoành $Ox$ ($y = 0$)", "C. $x = 1$", "D. $y = 1$"],
              correct: "A",
              explanation: "Đồ thị hàm logarit luôn nhận trục tung $Oy$ (đường thẳng $x = 0$) làm tiệm cận đứng."
            },
            {
              question: "Hai đồ thị hàm số $y = 2^x$ và $y = \\log_2 x$ đối xứng nhau qua:",
              options: ["A. Đường thẳng $y = x$", "B. Trục hoành $Ox$", "C. Trục tung $Oy$", "D. Gốc tọa độ $O$"],
              correct: "A",
              explanation: "Tính chất chuẩn SGK: đồ thị $y = a^x$ và $y = \\log_a x$ đối xứng nhau qua đường phân giác $y = x$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = 2^x$ và $g(x) = \\log_2 x$:",
          items: [
            { key: "a", text: "Tập xác định của $f(x)$ là $\\mathbb{R}$ và tập giá trị là $(0; +\\infty)$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Tập xác định của $g(x)$ là $(0; +\\infty)$ và tập giá trị là $\\mathbb{R}$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Cả hai hàm số đều đồng biến trên tập xác định của chúng.", correct: "true", explain: "Vì cơ số $a = 2 > 1$." },
            { key: "d", text: "Đồ thị của hai hàm số cắt nhau tại gốc tọa độ $O(0; 0)$.", correct: "false", explain: "Không đi qua gốc tọa độ." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hàm số $y = \\left(\\frac{1}{3}\\right)^x$:",
          items: [
            { key: "a", text: "Hàm số nghịch biến trên toàn bộ $\\mathbb{R}$.", correct: "true", explain: "Cơ số $1/3 < 1$." },
            { key: "b", text: "Đồ thị hàm số đi qua điểm $(0; 1)$ và $(-1; 3)$.", correct: "true", explain: "$(1/3)^0 = 1$ và $(1/3)^{-1} = 3$." },
            { key: "c", text: "$\\lim_{x \\to +\\infty} y = 0$.", correct: "true", explain: "Tiến về 0 khi $x \\to +\\infty$." },
            { key: "d", text: "Hàm số nhận giá trị âm khi $x > 0$.", correct: "false", explain: "Hàm mũ luôn dương trên toàn miền." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $y = \\ln(x^2 - 4)$:",
          items: [
            { key: "a", text: "Điều kiện xác định là $x^2 - 4 > 0$.", correct: "true", explain: "Biểu thức dưới log phải dương." },
            { key: "b", text: "Tập xác định là $D = (-\\infty; -2) \\cup (2; +\\infty)$.", correct: "true", explain: "Giải bất phương trình $x^2 > 4$." },
            { key: "c", text: "Hàm số xác định tại điểm $x = 0$.", correct: "false", explain: "Tại $x = 0$, $0^2 - 4 = -4 < 0$ không xác định." },
            { key: "d", text: "Đồ thị hàm số cắt trục hoành tại các điểm có hoành độ $x = \\pm\\sqrt{5}$.", correct: "true", explain: "$\\ln(x^2 - 4) = 0 \\Leftrightarrow x^2 - 4 = 1 \\Leftrightarrow x^2 = 5$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: So sánh sự tăng trưởng giữa các hàm số khi $x \\to +\\infty$:",
          items: [
            { key: "a", text: "Hàm mũ $y = 2^x$ tăng trưởng nhanh hơn hàm đa thức $y = x^2$.", correct: "true", explain: "$\\lim_{x \\to +\\infty} \\frac{x^2}{2^x} = 0$." },
            { key: "b", text: "Hàm đa thức $y = x$ tăng trưởng nhanh hơn hàm logarit $y = \\ln x$.", correct: "true", explain: "$\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0$." },
            { key: "c", text: "Hàm số $y = \\log_{0.5} x$ luôn đi xuống từ trái qua phải.", correct: "true", explain: "Hàm nghịch biến." },
            { key: "d", text: "Hai đồ thị $y = 2^x$ và $y = 3^x$ cắt nhau tại đúng một điểm duy nhất là $(0; 1)$.", correct: "true", explain: "$2^x = 3^x \\Leftrightarrow (2/3)^x = 1 \\Leftrightarrow x = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho đồ thị hàm số $y = \\log_a x$ có bảng biến thiên đi xuống từ $+\\infty$ đến $-\\infty$ khi $x$ chạy từ $0$ đến $+\\infty$:",
          items: [
            { key: "a", text: "Hàm số nghịch biến trên khoảng $(0; +\\infty)$.", correct: "true", explain: "Bảng biến thiên đi xuống." },
            { key: "b", text: "Cơ số $a$ thỏa mãn điều kiện $0 < a < 1$.", correct: "true", explain: "Hàm logarit nghịch biến khi $0 < a < 1$." },
            { key: "c", text: "$\\lim_{x \\to 0^+} \\log_a x = +\\infty$.", correct: "true", explain: "Quan sát trực tiếp bảng." },
            { key: "d", text: "Hàm số này có thể là $y = \\log_2 x$.", correct: "false", explain: "Cơ số 2 lớn hơn 1 thì hàm đồng biến, không thể nghịch biến." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính liên tục và đạo hàm sơ cấp:",
          items: [
            { key: "a", text: "Hàm số mũ liên tục trên $\\mathbb{R}$.", correct: "true", explain: "Hàm sơ cấp." },
            { key: "b", text: "Hàm số lôgarit liên tục trên khoảng $(0; +\\infty)$.", correct: "true", explain: "Hàm sơ cấp." },
            { key: "c", text: "$(e^x)' = e^x$.", correct: "true", explain: "Đạo hàm hàm số mũ tự nhiên." },
            { key: "d", text: "$(\\ln x)' = \\frac{1}{x^2}$.", correct: "false", explain: "Đạo hàm $(\\ln x)' = \\frac{1}{x}$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 21: PHƯƠNG TRÌNH, BẤT PHƯƠNG TRÌNH MŨ VÀ LÔGARIT (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai21": {
      id: "toan11_bai21",
      lessonTitle: "Bài 21: Phương trình, bất phương trình mũ và lôgarit",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 21:") || t.includes("phương trình, bất phương trình mũ") || (t.includes("phương trình mũ") && t.includes("lôgarit"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Phương trình mũ và phương trình lôgarit cơ bản",
          theory: createStandardTheoryHTML(
            "Bài 21: Phương trình, bất phương trình mũ và lôgarit", "Lớp 11", 1,
            "Phương trình mũ và phương trình lôgarit cơ bản",
            `<p>Phương pháp giải phương trình mũ và phương trình lôgarit chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phương trình mũ cơ bản $a^x = b$ ($a > 0, a \\neq 1$):</strong>
                <br/>• Nếu $b \\le 0$: Phương trình <strong>vô nghiệm</strong> (vì $a^x > 0$ luôn dương).
                <br/>• Nếu $b > 0$: Phương trình có <strong>nghiệm duy nhất</strong> $x = \\log_a b$.
              </li>
              <li><strong>Phương trình đưa về cùng cơ số:</strong>
                <br/>$$a^{f(x)} = a^{g(x)} \\iff f(x) = g(x)$$
              </li>
              <li><strong>Phương trình lôgarit cơ bản $\\log_a x = b$ ($a > 0, a \\neq 1$):</strong>
                <br/>Luôn có nghiệm duy nhất với mọi số thực $b$:
                $$x = a^b$$
              </li>
              <li><strong>Phương trình lôgarit cùng cơ số $\\log_a f(x) = \\log_a g(x)$:</strong>
                <br/>$$\\log_a f(x) = \\log_a g(x) \\iff \\begin{cases} f(x) > 0 \\text{ (hoặc } g(x) > 0) \\\\ f(x) = g(x) \\end{cases}$$
              </li>
              <li><strong>Phương pháp đặt ẩn phụ:</strong> Đặt $t = a^x$ (điều kiện $t > 0$) hoặc đặt $t = \\log_a x$.</li>
            </ul>`,
            `<li>Giải phương trình lôgarit BẮT BUỘC phải đặt điều kiện xác định cho biểu thức trong log trước khi biến đổi.</li>
            <li>Khi đặt ẩn phụ $t = a^x$, nghiệm $t$ bắt buộc phải thỏa mãn $t > 0$. Nếu $t \\le 0$ thì phải loại ngay.</li>`,
            `<li>Kết luận $2^x = -4 \\Leftrightarrow x = -2$ (sai nghiêm trọng, hàm mũ không bao giờ âm).</li>
            <li>Quên đối chiếu điều kiện xác định sau khi tìm được nghiệm của phương trình logarit.</li>`,
            `<li><em>"Mũ bằng số âm là vô nghiệm – Logarit nhớ đặt điều kiện trước tiên – Cùng cơ số thì cho hai số mũ bằng nhau!"</em></li>`
          ),
          mcqs: [
            {
              question: "Nghiệm của phương trình $2^{3x - 1} = 32$ là:",
              options: ["A. $x = 2$", "B. $x = 1$", "C. $x = 3$", "D. $x = \\frac{11}{3}$"],
              correct: "A",
              explanation: "$2^{3x - 1} = 2^5 \\Leftrightarrow 3x - 1 = 5 \\Leftrightarrow 3x = 6 \\Leftrightarrow x = 2$."
            },
            {
              question: "Nghiệm của phương trình $\\log_3(2x + 1) = 2$ là:",
              options: ["A. $x = 4$", "B. $x = 5$", "C. $x = 3$", "D. $x = \\frac{7}{2}$"],
              correct: "A",
              explanation: "Điều kiện $2x + 1 > 0$. Phương trình $\\Leftrightarrow 2x + 1 = 3^2 = 9 \\Leftrightarrow 2x = 8 \\Leftrightarrow x = 4$ (thỏa mãn)."
            },
            {
              question: "Số nghiệm của phương trình $5^x = -5$ là:",
              options: ["A. 0 nghiệm", "B. 1 nghiệm", "C. 2 nghiệm", "D. Vô số nghiệm"],
              correct: "A",
              explanation: "Vì $5^x > 0$ với mọi $x \\in \\mathbb{R}$ nên phương trình $5^x = -5$ vô nghiệm."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Bất phương trình mũ và bất phương trình lôgarit",
          theory: createStandardTheoryHTML(
            "Bài 21: Phương trình, bất phương trình mũ và lôgarit", "Lớp 11", 2,
            "Bất phương trình mũ và bất phương trình lôgarit",
            `<p>Quy tắc xét chiều và giải bất phương trình mũ, lôgarit chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Bất phương trình mũ $a^{f(x)} > a^{g(x)}$ ($a > 0, a \\neq 1$):</strong>
                <br/>• Nếu $a > 1$: <strong>GIỮ NGUYÊN CHIỀU</strong> $\\iff f(x) > g(x)$.
                <br/>• Nếu $0 < a < 1$: <strong>ĐẢO NGƯỢC CHIỀU</strong> $\\iff f(x) < g(x)$.
              </li>
              <li><strong>Bất phương trình lôgarit $\\log_a f(x) > \\log_a g(x)$ ($a > 0, a \\neq 1$):</strong>
                <br/>• Nếu $a > 1$: <strong>GIỮ NGUYÊN CHIỀU</strong> (kèm điều kiện dương):
                $$\\iff \\begin{cases} g(x) > 0 \\\\ f(x) > g(x) \\end{cases}$$
                <br/>• Nếu $0 < a < 1$: <strong>ĐẢO NGƯỢC CHIỀU</strong> (kèm điều kiện dương):
                $$\\iff \\begin{cases} f(x) > 0 \\\\ f(x) < g(x) \\end{cases} \\iff 0 < f(x) < g(x)$$
              </li>
            </ul>`,
            `<li><strong>Bẫy lớn nhất trong đề thi:</strong> Khi cơ số $0 < a < 1$ (ví dụ: $0.5, 1/2, 1/3, \\sqrt{2}-1$) bắt buộc phải <strong>đảo chiều</strong> bất đẳng thức!</li>
            <li>Trong bất phương trình logarit, đừng quên điều kiện $f(x) > 0$ và $g(x) > 0$. Chỉ cần đặt cho biểu thức nhỏ hơn là đủ.</li>`,
            `<li>Quên đổi chiều khi cơ số nhỏ hơn 1 (ví dụ: giải $(1/2)^x > 4$ viết thành $x > -2$ thay vì $x < -2$).</li>
            <li>Quên chặn dưới bằng số 0 khi giải $\\log_a f(x) < b$ (thiếu điều kiện $f(x) > 0$).</li>`,
            `<li><em>"Cơ số $> 1$ cùng chiều – Cơ số $< 1$ ngược chiều – Logarit luôn chặn đầu dương lớn hơn 0!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tập nghiệm của bất phương trình $(0.5)^x > 4$ là:",
              options: ["A. $(-\\infty; -2)$", "B. $(-2; +\\infty)$", "C. $(2; +\\infty)$", "D. $(-\\infty; 2)$"],
              correct: "A",
              explanation: "$(0.5)^x > (0.5)^{-2}$. Vì cơ số $0 < 0.5 < 1$ nên đảo chiều: $x < -2$. Tập nghiệm là $(-\\infty; -2)$."
            },
            {
              question: "Tập nghiệm của bất phương trình $\\log_2(x - 1) \\le 3$ là:",
              options: ["A. $(1; 9]$", "B. $(-\\infty; 9]$", "C. $[1; 9]$", "D. $(1; 8]$"],
              correct: "A",
              explanation: "Điều kiện $x - 1 > 0 \\Leftrightarrow x > 1$. Vì cơ số $2 > 1$ nên giữ chiều: $x - 1 \\le 2^3 = 8 \\Leftrightarrow x \\le 9$. Kết hợp điều kiện: $1 < x \\le 9$."
            },
            {
              question: "Tập nghiệm của bất phương trình $\\log_{\\frac{1}{3}}(x + 2) > -1$ là:",
              options: ["A. $(-2; 1)$", "B. $(1; +\\infty)$", "C. $(-\\infty; 1)$", "D. $[-2; 1)$"],
              correct: "A",
              explanation: "Vì cơ số $1/3 < 1$ nên đổi chiều: $0 < x + 2 < (1/3)^{-1} = 3 \\Leftrightarrow -2 < x < 1$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho phương trình $4^x - 5 \\cdot 2^x + 4 = 0$:",
          items: [
            { key: "a", text: "Đặt $t = 2^x$ với điều kiện $t > 0$.", correct: "true", explain: "Hàm mũ luôn nhận giá trị dương." },
            { key: "b", text: "Phương trình trở thành $t^2 - 5t + 4 = 0$.", correct: "true", explain: "$4^x = (2^x)^2 = t^2$." },
            { key: "c", text: "Phương trình ẩn $t$ có hai nghiệm là $t = 1$ và $t = 4$.", correct: "true", explain: "$t = 1$ hoặc $t = 4$ (cả hai đều $> 0$)." },
            { key: "d", text: "Tập nghiệm của phương trình ban đầu là $S = \\{0; 2\\}$.", correct: "true", explain: "$2^x = 1 \\Rightarrow x = 0$; $2^x = 4 \\Rightarrow x = 2$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho phương trình $\\log_2^2 x - 3\\log_2 x + 2 = 0$:",
          items: [
            { key: "a", text: "Điều kiện xác định của phương trình là $x > 0$.", correct: "true", explain: "Biểu thức dưới dấu logarit phải dương." },
            { key: "b", text: "Đặt $t = \\log_2 x$ thì không cần điều kiện cho $t$ ($t \\in \\mathbb{R}$).", correct: "true", explain: "Tập giá trị của hàm logarit là $\\mathbb{R}$." },
            { key: "c", text: "Hai giá trị của $t$ tìm được là $t = 1$ và $t = 2$.", correct: "true", explain: "$t^2 - 3t + 2 = 0 \\Leftrightarrow t = 1, t = 2$." },
            { key: "d", text: "Tổng các nghiệm của phương trình ban đầu bằng $6$.", correct: "true", explain: "$x_1 = 2^1 = 2, x_2 = 2^2 = 4 \\Rightarrow x_1 + x_2 = 6$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét các bất phương trình mũ:",
          items: [
            { key: "a", text: "$3^x > 9 \\Leftrightarrow x > 2$.", correct: "true", explain: "Cơ số $3 > 1$ giữ chiều: $x > 2$." },
            { key: "b", text: "$(0.2)^x \\ge 1 \\Leftrightarrow x \\le 0$.", correct: "true", explain: "Cơ số $0.2 < 1$ đảo chiều: $x \\le 0$." },
            { key: "c", text: "$2^x > -3$ nghiệm đúng với mọi $x \\in \\mathbb{R}$.", correct: "true", explain: "Vì $2^x > 0 > -3$ luôn đúng." },
            { key: "d", text: "$2^x < -1$ có nghiệm âm.", correct: "false", explain: "Vô nghiệm vì $2^x > 0$ không thể nhỏ hơn số âm." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho bất phương trình $\\log_{0.5}(2x - 3) \\ge -2$:",
          items: [
            { key: "a", text: "Điều kiện xác định là $2x - 3 > 0 \\Leftrightarrow x > 1.5$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Vì cơ số $0.5 < 1$ nên bất phương trình đổi chiều.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Bất phương trình tương đương $2x - 3 \\le (0.5)^{-2} = 4$.", correct: "true", explain: "$2x \\le 7 \\Leftrightarrow x \\le 3.5$." },
            { key: "d", text: "Tập nghiệm là đoạn $[1.5; 3.5]$.", correct: "false", explain: "Tại $1.5$ là ngoặc tròn do điều kiện $x > 1.5$: $(1.5; 3.5]$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho bất phương trình $3^{x^2 - 4} \\le 1$:",
          items: [
            { key: "a", text: "Số 1 có thể viết thành $3^0$.", correct: "true", explain: "$3^0 = 1$." },
            { key: "b", text: "Bất phương trình tương đương $x^2 - 4 \\le 0$.", correct: "true", explain: "Cơ số $3 > 1$ giữ nguyên chiều." },
            { key: "c", text: "Tập nghiệm của bất phương trình là đoạn $[-2; 2]$.", correct: "true", explain: "$x^2 \\le 4 \\Leftrightarrow -2 \\le x \\le 2$." },
            { key: "d", text: "Bất phương trình có vô số nghiệm nguyên.", correct: "false", explain: "Chỉ có 5 nghiệm nguyên: $\\{-2, -1, 0, 1, 2\\}$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán ứng dụng thực tế phân rã phóng xạ:",
          items: [
            { key: "a", text: "Công thức phân rã là $m(t) = m_0 \\cdot 2^{-\\frac{t}{T}}$, với $T$ là chu kỳ bán rã.", correct: "true", explain: "Định luật phân rã phóng xạ." },
            { key: "b", text: "Sau 1 chu kỳ bán rã ($t = T$), khối lượng chất phóng xạ còn lại một nửa.", correct: "true", explain: "$m(T) = m_0 \\cdot 2^{-1} = m_0 / 2$." },
            { key: "c", text: "Thời gian để phân rã còn lại $10\\%$ khối lượng ban đầu được giải bằng phương trình mũ.", correct: "true", explain: "$2^{-t/T} = 0.1 \\Leftrightarrow t = T \\log_2 10$." },
            { key: "d", text: "Sau 3 chu kỳ bán rã, khối lượng chất phóng xạ đã phân rã hết hoàn toàn.", correct: "false", explain: "Còn lại $(1/2)^3 = 1/8 = 12.5\\%$, không bao giờ về 0 tuyệt đối." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 28: BIẾN CỐ HỢP, BIẾN CỐ GIAO, BIẾN CỐ ĐỘC LẬP (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai28": {
      id: "toan11_bai28",
      lessonTitle: "Bài 28: Biến cố hợp, biến cố giao, biến cố độc lập",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 28:") || (t.includes("biến cố hợp") && t.includes("độc lập"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Biến cố hợp và biến cố giao",
          theory: createStandardTheoryHTML(
            "Bài 28: Biến cố hợp, biến cố giao, biến cố độc lập", "Lớp 11", 1,
            "Biến cố hợp và biến cố giao",
            `<p>Kiến thức Biến cố hợp và Biến cố giao chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Biến cố hợp ($A \\cup B$):</strong> Là biến cố <em>\"$A$ hoặc $B$ xảy ra\"</em>. Biến cố hợp xảy ra khi có ít nhất một trong hai biến cố $A, B$ xảy ra.
                <br/>Về tập hợp: $A \\cup B = \\{\\omega \\in \\Omega \\mid \\omega \\in A \\text{ hoặc } \\omega \\in B\\}$.
              </li>
              <li><strong>Biến cố giao ($A \\cap B$ hoặc $AB$):</strong> Là biến cố <em>\"Cả $A$ và $B$ cùng xảy ra\"</em>.
                <br/>Về tập hợp: $A \\cap B = \\{\\omega \\in \\Omega \\mid \\omega \\in A \\text{ và } \\omega \\in B\\}$.
              </li>
              <li><strong>Hai biến cố xung khắc:</strong> Nếu $A$ và $B$ không thể cùng xảy ra, tức là $A \\cap B = \\emptyset$, thì $A$ và $B$ được gọi là hai biến cố xung khắc.</li>
              <li><strong>Biến cố đối ($\\bar{A}$):</strong> Là biến cố \"$A$ không xảy ra\". Biến cố đối thỏa mãn $A \\cap \\bar{A} = \\emptyset$ và $A \\cup \\bar{A} = \\Omega$.</li>
            </ul>`,
            `<li>Hợp tương ứng với liên từ \"HOẶC\" (ít nhất một cái xảy ra).</li>
            <li>Giao tương ứng với liên từ \"VÀ\" (đồng thời cả hai cùng xảy ra).</li>
            <li>Hai biến cố đối nhau thì chắc chắn xung khắc, nhưng hai biến cố xung khắc chưa chắc đối nhau.</li>`,
            `<li>Nhầm lẫn giữa biến cố hợp và biến cố giao.</li>
            <li>Ngộ nhận hai biến cố độc lập là hai biến cố xung khắc (độc lập là về xác suất, xung khắc là giao bằng rỗng).</li>`,
            `<li><em>"Hợp là HOẶC – Giao là VÀ – Xung khắc giao rỗng, không cùng xảy ra!"</em></li>`
          ),
          mcqs: [
            {
              question: "Gieo một con xúc xắc cân đối. Gọi $A$ là biến cố \"Số chấm xuất hiện là số chẵn\", $B$ là biến cố \"Số chấm xuất hiện lớn hơn 3\". Biến cố giao $A \\cap B$ là tập hợp:",
              options: ["A. $\\{4; 6\\}$", "B. $\\{2; 4; 6\\}$", "C. $\\{4; 5; 6\\}$", "D. $\\{5\\}$"],
              correct: "A",
              explanation: "$A = \\{2; 4; 6\\}$ và $B = \\{4; 5; 6\\}$. Giao của hai biến cố là các số vừa chẵn vừa lớn hơn 3: $A \\cap B = \\{4; 6\\}$."
            },
            {
              question: "Hai biến cố $A$ và $B$ được gọi là xung khắc khi và chỉ khi:",
              options: ["A. $A \\cap B = \\emptyset$", "B. $A \\cup B = \\Omega$", "C. $P(A) + P(B) = 1$", "D. $A = B$"],
              correct: "A",
              explanation: "Định nghĩa chuẩn SGK: Hai biến cố xung khắc khi chúng không thể cùng xảy ra, tức $A \\cap B = \\emptyset$."
            },
            {
              question: "Gọi $A$ là biến cố \"Hôm nay trời mưa\". Biến cố đối $\\bar{A}$ là:",
              options: ["A. \"Hôm nay trời không mưa\"", "B. \"Hôm nay trời nắng\"", "C. \"Hôm nay trời nhiều mây\"", "D. \"Hôm nay có bão\""],
              correct: "A",
              explanation: "Phủ định của \"trời mưa\" là \"trời không mưa\"."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Hai biến cố độc lập",
          theory: createStandardTheoryHTML(
            "Bài 28: Biến cố hợp, biến cố giao, biến cố độc lập", "Lớp 11", 2,
            "Hai biến cố độc lập",
            `<p>Khái niệm cốt lõi về Tính độc lập của hai biến cố chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Hai biến cố $A$ và $B$ được gọi là <em>độc lập</em> nếu việc xảy ra hay không xảy ra của biến cố này <strong>không làm ảnh hưởng</strong> tới xác suất xảy ra của biến cố kia.</li>
              <li><strong>Dấu hiệu nhận biết thực tế:</strong>
                <br/>• Hai lần gieo xúc xắc hoặc gieo đồng xu liên tiếp: kết quả lần 1 và lần 2 độc lập nhau.
                <br/>• Hai xạ thủ bắn độc lập vào một bia: kết quả bắn của xạ thủ 1 và xạ thủ 2 độc lập nhau.
                <br/>• Rút thẻ có hoàn lại: các lần rút độc lập nhau.
              </li>
              <li><strong>Định lý:</strong> Nếu $A$ và $B$ là hai biến cố độc lập thì các cặp biến cố sau cũng độc lập:
                <br/>• $A$ và $\\bar{B}$
                <br/>• $\\bar{A}$ và $B$
                <br/>• $\\bar{A}$ và $\\bar{B}$
              </li>
            </ul>`,
            `<li>Độc lập và xung khắc là hai khái niệm hoàn toàn khác nhau. Nếu hai biến cố có xác suất dương mà xung khắc ($A \\cap B = \\emptyset$) thì chúng KHÔNG THỂ độc lập vì nếu $A$ xảy ra thì $B$ chắc chắn không xảy ra!</li>
            <li>Khi bài toán có chữ \"độc lập\", \"tách biệt\", \"đồng thời và riêng rẽ\" ta áp dụng tính chất biến cố độc lập.</li>`,
            `<li>Nhầm lẫn giữa \"xung khắc\" và \"độc lập\".</li>
            <li>Rút vật không hoàn lại nhưng vẫn coi các lần rút là độc lập (sai, không hoàn lại làm thay đổi không gian mẫu nên các lần rút phụ thuộc nhau).</li>`,
            `<li><em>"Độc lập là không ảnh hưởng tới nhau – Xung khắc là không thể cùng xảy ra!"</em></li>`
          ),
          mcqs: [
            {
              question: "Hai xạ thủ cùng bắn độc lập mỗi người một viên đạn vào một tấm bia. Gọi $A$ là biến cố \"Xạ thủ 1 bắn trúng\", $B$ là biến cố \"Xạ thủ 2 bắn trúng\". Khẳng định nào sau đây là **ĐÚNG**?",
              options: [
                "A. $A$ và $B$ là hai biến cố độc lập",
                "B. $A$ và $B$ là hai biến cố xung khắc",
                "C. $A$ và $B$ là hai biến cố đối nhau",
                "D. $A \\cap B = \\emptyset$"
              ],
              correct: "A",
              explanation: "Vì hai xạ thủ bắn độc lập, kết quả bắn của người này không ảnh hưởng đến người kia nên $A$ và $B$ độc lập."
            },
            {
              question: "Nếu hai biến cố $A$ và $B$ độc lập thì cặp biến cố nào sau đây cũng độc lập?",
              options: ["A. $\\bar{A}$ và $\\bar{B}$", "B. $A$ và $A \\cup B$", "C. $A$ và $A \\cap B$", "D. $A$ và $\\bar{A}$"],
              correct: "A",
              explanation: "Theo định lý SGK: Nếu $A$ và $B$ độc lập thì $A$ và $\\bar{B}$, $\\bar{A}$ và $B$, $\\bar{A}$ và $\\bar{B}$ đều độc lập."
            },
            {
              question: "Gieo một đồng xu hai lần liên tiếp. Gọi $A$ là biến cố \"Lần 1 xuất hiện mặt ngửa\", $B$ là biến cố \"Lần 2 xuất hiện mặt ngửa\". Mệnh đề nào sau đây đúng?",
              options: ["A. $A$ và $B$ độc lập", "B. $A$ và $B$ xung khắc", "C. $A = B$", "D. $A$ là biến cố đối của $B$"],
              correct: "A",
              explanation: "Hai lần gieo riêng biệt nên kết quả lần 1 không ảnh hưởng lần 2, hai biến cố độc lập."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hai biến cố $A$ và $B$ trong cùng một phép thử:",
          items: [
            { key: "a", text: "Biến cố hợp $A \\cup B$ xảy ra khi có ít nhất một trong hai biến cố xảy ra.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "b", text: "Biến cố giao $A \\cap B$ xảy ra khi cả hai biến cố cùng xảy ra.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "c", text: "Nếu $A$ và $B$ xung khắc thì $A \\cap B = \\emptyset$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Mọi cặp biến cố xung khắc đều là hai biến cố đối nhau.", correct: "false", explain: "Sai, tổng hai biến cố xung khắc chưa chắc bằng không gian mẫu $\\Omega$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Gieo một con xúc xắc 6 mặt cân đối:",
          items: [
            { key: "a", text: "Gọi $A$: \"Số chấm lẻ\", $B$: \"Số chấm chẵn\". $A$ và $B$ là hai biến cố đối nhau.", correct: "true", explain: "Vì $A \\cap B = \\emptyset$ và $A \\cup B = \\Omega$." },
            { key: "b", text: "Gọi $C$: \"Số chấm lớn hơn 4\", $D$: \"Số chấm nhỏ hơn 3\". $C$ và $D$ xung khắc.", correct: "true", explain: "$C = \\{5; 6\\}$ và $D = \\{1; 2\\}$, giao nhau bằng rỗng." },
            { key: "c", text: "$C$ và $D$ là hai biến cố đối nhau.", correct: "false", explain: "Tổng hợp không chứa 3 và 4 nên không đối nhau." },
            { key: "d", text: "Biến cố giao của $A$ và $C$ là $\\{5\\}$.", correct: "true", explain: "Số vừa lẻ vừa $> 4$ là 5." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Hai người độc lập cùng thi sát hạch lái xe. Gọi $A$ là biến cố \"Người thứ nhất đỗ\", $B$ là biến cố \"Người thứ hai đỗ\":",
          items: [
            { key: "a", text: "Biến cố \"Cả hai người cùng đỗ\" là biến cố giao $AB$.", correct: "true", explain: "Đúng." },
            { key: "b", text: "Biến cố \"Có ít nhất một người đỗ\" là biến cố hợp $A \\cup B$.", correct: "true", explain: "Đúng." },
            { key: "c", text: "Biến cố \"Cả hai người cùng trượt\" là $\\bar{A} \\cap \\bar{B}$.", correct: "true", explain: "Đúng." },
            { key: "d", text: "Hai biến cố $A$ và $B$ là hai biến cố xung khắc.", correct: "false", explain: "Cả hai hoàn toàn có thể cùng đỗ nên không xung khắc." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét tính độc lập của các biến cố:",
          items: [
            { key: "a", text: "Gieo đồng xu và gieo xúc xắc độc lập nhau.", correct: "true", explain: "Hai phép thử riêng biệt." },
            { key: "b", text: "Rút liên tiếp 2 lá bài từ bộ 52 lá không hoàn lại là hai biến cố độc lập.", correct: "false", explain: "Lần 1 rút ảnh hưởng đến số lượng bài còn lại ở lần 2." },
            { key: "c", text: "Nếu $A$ và $B$ độc lập thì $A$ và $\\bar{B}$ cũng độc lập.", correct: "true", explain: "Định lý chuẩn." },
            { key: "d", text: "Hai biến cố có giao bằng rỗng thì luôn độc lập.", correct: "false", explain: "Nếu $P(A) > 0, P(B) > 0$ thì giao rỗng không thể độc lập." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một hộp có 3 bi đỏ và 2 bi xanh. Lấy lần 1 được 1 bi, ghi màu rồi bỏ lại vào hộp (rút có hoàn lại), sau đó lấy lần 2:",
          items: [
            { key: "a", text: "Số lượng bi trong hộp trước mỗi lần rút luôn bằng 5 viên.", correct: "true", explain: "Do có hoàn lại." },
            { key: "b", text: "Xác suất rút được bi đỏ ở lần 1 là $\\frac{3}{5}$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Xác suất rút được bi đỏ ở lần 2 là $\\frac{3}{5}$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Kết quả của hai lần rút là phụ thuộc lẫn nhau.", correct: "false", explain: "Có hoàn lại nên hai lần rút độc lập nhau." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về công thức De Morgan cho biến cố:",
          items: [
            { key: "a", text: "Biến cố đối của $A \\cup B$ là $\\bar{A} \\cap \\bar{B}$.", correct: "true", explain: "\"Không phải (A hoặc B)\" tương đương \"Không A và Không B\"." },
            { key: "b", text: "Biến cố đối của $A \\cap B$ là $\\bar{A} \\cup \\bar{B}$.", correct: "true", explain: "Định lý De Morgan." },
            { key: "c", text: "$\\bar{\\bar{A}} = A$.", correct: "true", explain: "Phủ định của phủ định là chính nó." },
            { key: "d", text: "$A \\cap \\Omega = A$.", correct: "true", explain: "Giao với không gian mẫu chính là $A$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 29: CÔNG THỨC CỘNG XÁC SUẤT (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai29": {
      id: "toan11_bai29",
      lessonTitle: "Bài 29: Công thức cộng xác suất",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 29:") || t.includes("công thức cộng xác suất") || (t.includes("công thức cộng") && t.includes("xác suất"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Công thức cộng xác suất cho hai biến cố xung khắc",
          theory: createStandardTheoryHTML(
            "Bài 29: Công thức cộng xác suất", "Lớp 11", 1,
            "Công thức cộng xác suất cho hai biến cố xung khắc",
            `<p>Kiến thức Quy tắc cộng xác suất chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định lý (Hai biến cố xung khắc):</strong> Nếu hai biến cố $A$ và $B$ <strong>xung khắc</strong> ($A \\cap B = \\emptyset$) thì:
                $$P(A \\cup B) = P(A) + P(B)$$
              </li>
              <li><strong>Mở rộng cho $k$ biến cố đôi một xung khắc:</strong> Nếu $A_1, A_2, \\dots, A_k$ đôi một xung khắc thì:
                $$P(A_1 \\cup A_2 \\cup \\dots \\cup A_k) = P(A_1) + P(A_2) + \\dots + P(A_k)$$
              </li>
              <li><strong>Xác suất của biến cố đối:</strong> Vì $A$ và $\\bar{A}$ luôn xung khắc và $A \\cup \\bar{A} = \\Omega$ nên:
                $$P(A) + P(\\bar{A}) = P(\\Omega) = 1 \\implies P(\\bar{A}) = 1 - P(A)$$
              </li>
            </ul>`,
            `<li>Công thức $P(A \\cup B) = P(A) + P(B)$ CHỈ ĐƯỢC PHÉP ÁP DỤNG KHI $A$ và $B$ XUNG KHẮC!</li>
            <li>Khi gặp bài toán yêu cầu tính xác suất để có \"ít nhất một\", hãy nhớ ngay công thức biến cố đối: $P(A) = 1 - P(\\bar{A})$.</li>`,
            `<li>Tự tiện cộng xác suất khi hai biến cố không xung khắc (dẫn đến xác suất tính ra $> 1$).</li>
            <li>Quên trừ biến cố đối trong bài toán đếm phức tạp.</li>`,
            `<li><em>"Xung khắc thì cộng trực tiếp – Đối nhau thì lấy 1 trừ đi là ra!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai biến cố xung khắc $A$ và $B$ với $P(A) = 0.3$ và $P(B) = 0.4$. Xác suất $P(A \\cup B)$ bằng:",
              options: ["A. 0.7", "B. 0.12", "C. 0.1", "D. 0.5"],
              correct: "A",
              explanation: "Vì hai biến cố xung khắc nên $P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$."
            },
            {
              question: "Biết xác suất một xạ thủ bắn trúng bia là $0.85$. Xác suất để xạ thủ đó bắn trượt là:",
              options: ["A. 0.15", "B. 0.85", "C. 0.25", "D. 0.05"],
              correct: "A",
              explanation: "Bắn trượt là biến cố đối của bắn trúng: $P(\\bar{A}) = 1 - 0.85 = 0.15$."
            },
            {
              question: "Một hộp có 10 viên bi gồm 4 bi đỏ, 3 bi xanh và 3 bi vàng. Rút ngẫu nhiên 1 viên bi. Xác suất để rút được bi đỏ hoặc bi xanh là:",
              options: ["A. 0.7", "B. 0.4", "C. 0.3", "D. 0.12"],
              correct: "A",
              explanation: "Hai biến cố rút bi đỏ và rút bi xanh là xung khắc: $P = \\frac{4}{10} + \\frac{3}{10} = \\frac{7}{10} = 0.7$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Công thức cộng tổng quát cho hai biến cố bất kỳ",
          theory: createStandardTheoryHTML(
            "Bài 29: Công thức cộng xác suất", "Lớp 11", 2,
            "Công thức cộng tổng quát cho hai biến cố bất kỳ",
            `<p>Công thức cộng tổng quát chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Công thức cộng tổng quát:</strong> Với <strong>hai biến cố $A$ và $B$ bất kỳ</strong> trong cùng một phép thử:
                $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$
              </li>
              <li><strong>Giải thích hình học (Biểu đồ Ven):</strong> Khi tính $P(A) + P(B)$, phần giao $A \\cap B$ bị tính lặp lại hai lần. Do đó bắt buộc phải trừ bớt một lần phần giao $P(A \\cap B)$!</li>
              <li><strong>Hệ quả:</strong>
                <br/>• $P(A \\cup B) \\le P(A) + P(B)$.
                <br/>• Dấu \"=\" xảy ra khi và chỉ khi $P(A \\cap B) = 0$ (tức $A$ và $B$ xung khắc).
              </li>
            </ul>`,
            `<li>Đây là công thức tổng quát bao trùm mọi trường hợp: Nếu xung khắc thì $P(A \\cap B) = 0$, công thức tự động trở về $P(A) + P(B)$.</li>
            <li>Có thể dùng công thức này để tìm xác suất phần giao: $P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$.</li>`,
            `<li>Quên trừ phần giao $P(A \\cap B)$ khi hai biến cố có thể đồng thời xảy ra.</li>
            <li>Nhầm dấu trong công thức: viết $P(A) + P(B) + P(A \\cap B)$ (sai).</li>`,
            `<li><em>"Cộng hai cái rồi trừ phần chung – Ra ngay xác suất hợp!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai biến cố $A$ và $B$ có $P(A) = 0.5, P(B) = 0.6$ và $P(A \\cap B) = 0.3$. Xác suất $P(A \\cup B)$ bằng:",
              options: ["A. 0.8", "B. 1.1", "C. 0.4", "D. 0.3"],
              correct: "A",
              explanation: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.5 + 0.6 - 0.3 = 0.8$."
            },
            {
              question: "Một lớp có $60\\%$ học sinh thích Toán, $50\\%$ thích Văn và $30\\%$ thích cả hai môn. Chọn ngẫu nhiên 1 học sinh. Xác suất học sinh đó thích ít nhất một môn Toán hoặc Văn là:",
              options: ["A. 0.8", "B. 0.9", "C. 0.7", "D. 1.0"],
              correct: "A",
              explanation: "$P(T \\cup V) = P(T) + P(V) - P(T \\cap V) = 0.6 + 0.5 - 0.3 = 0.8$."
            },
            {
              question: "Cho $P(A) = 0.4, P(B) = 0.5$ và $P(A \\cup B) = 0.7$. Xác suất $P(A \\cap B)$ bằng:",
              options: ["A. 0.2", "B. 0.3", "C. 0.1", "D. 0.6"],
              correct: "A",
              explanation: "$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.4 + 0.5 - 0.7 = 0.2$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hai biến cố bất kỳ $A$ và $B$:",
          items: [
            { key: "a", text: "Công thức tổng quát là $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.", correct: "true", explain: "Công thức chuẩn." },
            { key: "b", text: "Nếu $A \\cap B = \\emptyset$ thì $P(A \\cup B) = P(A) + P(B)$.", correct: "true", explain: "Do $P(A \\cap B) = 0$." },
            { key: "c", text: "Ta luôn có $P(A \\cup B) \\ge P(A)$.", correct: "true", explain: "Vì $A \\subset A \\cup B$." },
            { key: "d", text: "Ta luôn có $P(A \\cup B) = P(A) + P(B)$ với mọi cặp biến cố.", correct: "false", explain: "Chỉ đúng khi xung khắc." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Một lớp có 40 học sinh. Có 25 bạn chơi bóng đá, 20 bạn chơi bóng rổ và 10 bạn chơi cả hai môn:",
          items: [
            { key: "a", text: "Xác suất chọn 1 bạn chơi bóng đá là $P(A) = \\frac{25}{40} = 0.625$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Xác suất chọn 1 bạn chơi bóng rổ là $P(B) = \\frac{20}{40} = 0.5$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Xác suất chọn bạn chơi cả hai môn là $P(A \\cap B) = \\frac{10}{40} = 0.25$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Số bạn không chơi môn nào trong hai môn này là 5 bạn.", correct: "true", explain: "Số bạn chơi ít nhất 1 môn là $25 + 20 - 10 = 35 \\Rightarrow$ còn $40 - 35 = 5$ bạn." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho $P(A) = 0.7$ và $P(B) = 0.8$:",
          items: [
            { key: "a", text: "Tổng $P(A) + P(B) = 1.5 > 1$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Hai biến cố $A$ và $B$ không thể là hai biến cố xung khắc.", correct: "true", explain: "Vì nếu xung khắc thì tổng xác suất vượt quá 1 (vô lý)." },
            { key: "c", text: "Xác suất $P(A \\cap B)$ ít nhất phải bằng $0.5$.", correct: "true", explain: "Vì $P(A \\cup B) \\le 1 \\Rightarrow P(A \\cap B) \\ge 1.5 - 1 = 0.5$." },
            { key: "d", text: "Xác suất $P(A \\cup B)$ có thể bằng $1.2$.", correct: "false", explain: "Xác suất không bao giờ vượt quá 1." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét một cỗ bài tây 52 lá. Rút ngẫu nhiên 1 lá:",
          items: [
            { key: "a", text: "Gọi $A$: \"Rút được lá Át (Ace)\", $P(A) = \\frac{4}{52} = \\frac{1}{13}$.", correct: "true", explain: "Có 4 lá Át." },
            { key: "b", text: "Gọi $B$: \"Rút được lá chất Cơ\", $P(B) = \\frac{13}{52} = \\frac{1}{4}$.", correct: "true", explain: "Có 13 lá Cơ." },
            { key: "c", text: "Biến cố $A \\cap B$ là \"Rút được lá Át Cơ\" có xác suất $\\frac{1}{52}$.", correct: "true", explain: "Có duy nhất 1 lá Át Cơ." },
            { key: "d", text: "Xác suất rút được lá Át hoặc lá Cơ là $\\frac{17}{52}$.", correct: "false", explain: "$P = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13} \\neq \\frac{17}{52}$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho biến cố đối:",
          items: [
            { key: "a", text: "$P(\\bar{A}) = 1 - P(A)$.", correct: "true", explain: "Công thức chuẩn." },
            { key: "b", text: "Nếu $P(A) = 0$ thì $P(\\bar{A}) = 1$.", correct: "true", explain: "$1 - 0 = 1$." },
            { key: "c", text: "Nếu $P(A) = 0.65$ thì $P(\\bar{A}) = 0.35$.", correct: "true", explain: "$1 - 0.65 = 0.35$." },
            { key: "d", text: "$P(A) \\cdot P(\\bar{A}) = 1$.", correct: "false", explain: "Tổng bằng 1 chứ tích không bằng 1." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính chất của xác suất:",
          items: [
            { key: "a", text: "Với mọi biến cố $A$, ta luôn có $0 \\le P(A) \\le 1$.", correct: "true", explain: "Tiên đề xác suất." },
            { key: "b", text: "Nếu $A \\subset B$ thì $P(A) \\le P(B)$.", correct: "true", explain: "Tính đơn điệu của xác suất." },
            { key: "c", text: "$P(B \\setminus A) = P(B) - P(A \\cap B)$.", correct: "true", explain: "Xác suất của hiệu." },
            { key: "d", text: "Nếu $P(A) = P(B)$ thì bắt buộc $A = B$.", correct: "false", explain: "Hai biến cố khác nhau hoàn toàn có thể có cùng xác suất." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 30: CÔNG THỨC NHÂN XÁC SUẤT CHO HAI BIẾN CỐ ĐỘC LẬP (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai30": {
      id: "toan11_bai30",
      lessonTitle: "Bài 30: Công thức nhân xác suất cho hai biến cố độc lập",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 30:") || t.includes("công thức nhân xác suất") || (t.includes("công thức nhân") && t.includes("độc lập"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Công thức nhân xác suất cho hai biến cố độc lập",
          theory: createStandardTheoryHTML(
            "Bài 30: Công thức nhân xác suất cho hai biến cố độc lập", "Lớp 11", 1,
            "Công thức nhân xác suất cho hai biến cố độc lập",
            `<p>Kiến thức Quy tắc nhân xác suất chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định lý:</strong> Nếu hai biến cố $A$ và $B$ <strong>độc lập</strong> với nhau thì xác suất của biến cố giao $AB$ bằng tích xác suất của hai biến cố đó:
                $$P(AB) = P(A \\cap B) = P(A) \\cdot P(B)$$
              </li>
              <li><strong>Mở rộng cho $k$ biến cố độc lập:</strong> Nếu $A_1, A_2, \\dots, A_k$ độc lập thì:
                $$P(A_1 A_2 \\dots A_k) = P(A_1) \\cdot P(A_2) \\dots P(A_k)$$
              </li>
              <li><strong>Định lý đảo (Dùng để kiểm tra tính độc lập):</strong>
                <br/>Nếu $P(AB) = P(A) \\cdot P(B)$ thì hai biến cố $A$ và $B$ độc lập.
                <br/>Nếu $P(AB) \\neq P(A) \\cdot P(B)$ thì hai biến cố $A$ và $B$ không độc lập (phụ thuộc).
              </li>
            </ul>`,
            `<li>Công thức nhân $P(AB) = P(A) \\cdot P(B)$ CHỈ ĐƯỢC DÙNG KHI HAI BIẾN CỐ ĐỘC LẬP! Nếu không độc lập thì phải dùng xác suất có điều kiện $P(AB) = P(A) \\cdot P(B|A)$ (Toán 12).</li>
            <li>Khi tính xác suất để \"có ít nhất một\" trong các biến cố độc lập xảy ra:
              $$P(\\text{ít nhất một}) = 1 - P(\\text{không cái nào}) = 1 - P(\\bar{A}_1)P(\\bar{A}_2)\\dots P(\\bar{A}_k)$$
            </li>`,
            `<li>Áp dụng công thức nhân cho hai biến cố không độc lập.</li>
            <li>Nhầm lẫn giữa công thức cộng (dành cho biến cố hợp $A \\cup B$) và công thức nhân (dành cho biến cố giao $AB$).</li>`,
            `<li><em>"Độc lập thì nhân xác suất – Ít nhất một thì lấy 1 trừ tích các biến cố đối!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai biến cố độc lập $A$ và $B$ với $P(A) = 0.6$ và $P(B) = 0.5$. Xác suất $P(AB)$ bằng:",
              options: ["A. 0.30", "B. 1.10", "C. 0.10", "D. 0.80"],
              correct: "A",
              explanation: "Vì $A$ và $B$ độc lập nên $P(AB) = P(A) \\cdot P(B) = 0.6 \\times 0.5 = 0.30$."
            },
            {
              question: "Hai xạ thủ bắn độc lập vào một bia. Xác suất bắn trúng của xạ thủ 1 là $0.8$ và của xạ thủ 2 là $0.7$. Xác suất để cả hai xạ thủ cùng bắn trúng là:",
              options: ["A. 0.56", "B. 1.50", "C. 0.10", "D. 0.94"],
              correct: "A",
              explanation: "$P = 0.8 \\times 0.7 = 0.56$."
            },
            {
              question: "Cho $P(A) = 0.4, P(B) = 0.5$ và $P(AB) = 0.2$. Khẳng định nào sau đây đúng?",
              options: [
                "A. Hai biến cố $A$ và $B$ độc lập",
                "B. Hai biến cố $A$ và $B$ xung khắc",
                "C. Hai biến cố $A$ và $B$ đối nhau",
                "D. $A \\cap B = \\emptyset$"
              ],
              correct: "A",
              explanation: "Ta thấy $P(A) \\cdot P(B) = 0.4 \\times 0.5 = 0.2 = P(AB)$, do đó $A$ và $B$ độc lập."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Vận dụng kết hợp quy tắc cộng và quy tắc nhân",
          theory: createStandardTheoryHTML(
            "Bài 30: Công thức nhân xác suất cho hai biến cố độc lập", "Lớp 11", 2,
            "Vận dụng kết hợp quy tắc cộng và quy tắc nhân",
            `<p>Kỹ năng giải các bài toán thực tiễn bằng sự kết hợp giữa Quy tắc cộng và Quy tắc nhân:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Bài toán bắn bia / Thi đấu / Mạch điện:</strong>
                <br/>Cho hai biến cố độc lập $A$ và $B$:
                <br/>• Xác suất cả hai cùng xảy ra: $P_1 = P(A) \\cdot P(B)$.
                <br/>• Xác suất cả hai cùng không xảy ra: $P_2 = P(\\bar{A}) \\cdot P(\\bar{B}) = (1 - P(A))(1 - P(B))$.
                <br/>• Xác suất có đúng một người trúng (hoặc 1 biến cố xảy ra):
                $$P_3 = P(A\\bar{B}) + P(\\bar{A}B) = P(A)P(\\bar{B}) + P(\\bar{A})P(B)$$
                <br/>• Xác suất có ít nhất một người trúng:
                $$P_4 = 1 - P_2 = 1 - (1 - P(A))(1 - P(B)) = P(A) + P(B) - P(AB)$$
              </li>
              <li><strong>Hệ thống mắc nối tiếp và song song:</strong>
                <br/>• Mắc nối tiếp: Hoạt động khi TẤT CẢ các linh kiện đều tốt $\\implies$ dùng tích xác suất.
                <br/>• Mắc song song: Hoạt động khi CÓ ÍT NHẤT MỘT linh kiện tốt $\\implies$ dùng $1$ trừ tích hỏng.
              </li>
            </ul>`,
            `<li>Phân biệt rõ các yêu cầu đề bài: \"Cả hai\", \"Đúng một\", \"Ít nhất một\", \"Không có ai\".</li>
            <li>Các trường hợp con trong \"Đúng một\" ($A\\bar{B}$ và $\\bar{A}B$) luôn xung khắc nhau nên được cộng xác suất.</li>`,
            `<li>Quên trường hợp thứ hai khi tính \"có đúng một biến cố xảy ra\" (chỉ tính $P(A)P(\\bar{B})$ mà quên $P(\\bar{A})P(B)$).</li>
            <li>Nhầm lẫn giữa \"có đúng một\" và \"có ít nhất một\".</li>`,
            `<li><em>"Cả hai thì Nhân – Đúng một thì Chia 2 trường hợp rồi Cộng – Ít nhất một thì Lấy 1 trừ Cả hai cùng trượt!"</em></li>`
          ),
          mcqs: [
            {
              question: "Hai xạ thủ bắn độc lập vào bia với xác suất trúng lần lượt là $0.8$ và $0.7$. Xác suất để có đúng một xạ thủ bắn trúng là:",
              options: ["A. 0.38", "B. 0.56", "C. 0.94", "D. 0.06"],
              correct: "A",
              explanation: "$P = 0.8(1 - 0.7) + (1 - 0.8)(0.7) = 0.8(0.3) + 0.2(0.7) = 0.24 + 0.14 = 0.38$."
            },
            {
              question: "Hai xạ thủ bắn độc lập với xác suất trúng là $0.8$ và $0.7$. Xác suất để có ít nhất một xạ thủ bắn trúng là:",
              options: ["A. 0.94", "B. 0.56", "C. 0.38", "D. 0.06"],
              correct: "A",
              explanation: "Xác suất cả hai trượt: $(1 - 0.8)(1 - 0.7) = 0.2 \\times 0.3 = 0.06$. Xác suất ít nhất một trúng: $1 - 0.06 = 0.94$."
            },
            {
              question: "Một hệ thống gồm hai bóng đèn mắc song song độc lập. Xác suất hỏng của bóng 1 là $0.1$ và bóng 2 là $0.2$. Hệ thống bị tắt khi cả hai bóng đều hỏng. Xác suất để hệ thống hoạt động bình thường là:",
              options: ["A. 0.98", "B. 0.02", "C. 0.72", "D. 0.30"],
              correct: "A",
              explanation: "Xác suất cả 2 bóng hỏng: $0.1 \\times 0.2 = 0.02$. Xác suất hệ thống sáng (hoạt động): $1 - 0.02 = 0.98$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Hai vận động viên bóng rổ độc lập ném bóng vào rổ. Xác suất ném trúng của vận động viên A là $0.6$ và của B là $0.7$:",
          items: [
            { key: "a", text: "Xác suất cả hai người cùng ném trúng là $0.42$.", correct: "true", explain: "$0.6 \\times 0.7 = 0.42$." },
            { key: "b", text: "Xác suất cả hai người cùng ném trượt là $0.12$.", correct: "true", explain: "$(1 - 0.6)(1 - 0.7) = 0.4 \\times 0.3 = 0.12$." },
            { key: "c", text: "Xác suất có đúng một người ném trúng là $0.46$.", correct: "true", explain: "$0.6(0.3) + 0.4(0.7) = 0.18 + 0.28 = 0.46$." },
            { key: "d", text: "Xác suất có ít nhất một người ném trúng là $0.85$.", correct: "false", explain: "$1 - 0.12 = 0.88 \\neq 0.85$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Gieo 3 đồng xu cân đối đồng chất độc lập:",
          items: [
            { key: "a", text: "Xác suất để một đồng xu xuất hiện mặt ngửa là $\\frac{1}{2}$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Xác suất để cả 3 đồng xu cùng xuất hiện mặt ngửa là $\\frac{1}{8}$.", correct: "true", explain: "$(1/2)^3 = 1/8$." },
            { key: "c", text: "Xác suất để có ít nhất 1 đồng xu ngửa là $\\frac{7}{8}$.", correct: "true", explain: "$1 - (1/2)^3 = 7/8$." },
            { key: "d", text: "Xác suất để cả 3 đồng xu cùng xuất hiện mặt sấp là $\\frac{1}{4}$.", correct: "false", explain: "Phải là $(1/2)^3 = 1/8$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hai biến cố độc lập $A$ và $B$ với $P(A) = 0.4$ và $P(B) = 0.5$:",
          items: [
            { key: "a", text: "$P(AB) = 0.20$.", correct: "true", explain: "$0.4 \\times 0.5 = 0.20$." },
            { key: "b", text: "$P(A \\cup B) = 0.70$.", correct: "true", explain: "$0.4 + 0.5 - 0.20 = 0.70$." },
            { key: "c", text: "$P(\\bar{A}B) = 0.30$.", correct: "true", explain: "$(1 - 0.4) \\times 0.5 = 0.6 \\times 0.5 = 0.30$." },
            { key: "d", text: "Vì $A$ và $B$ độc lập nên $P(A \\cup B) = P(A) + P(B) = 0.90$.", correct: "false", explain: "Chỉ đúng khi xung khắc, ở đây độc lập thì phải trừ $P(AB)$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Một bài kiểm tra trắc nghiệm có 5 câu hỏi độc lập, mỗi câu có 4 phương án trả lời và chỉ có 1 phương án đúng. Một học sinh đánh bừa cả 5 câu:",
          items: [
            { key: "a", text: "Xác suất đánh đúng mỗi câu là $\\frac{1}{4} = 0.25$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Xác suất để học sinh đó đánh đúng cả 5 câu là $\\left(\\frac{1}{4}\\right)^5 = \\frac{1}{1024}$.", correct: "true", explain: "Tích 5 câu độc lập." },
            { key: "c", text: "Xác suất để học sinh đánh sai cả 5 câu là $\\left(\\frac{3}{4}\\right)^5 = \\frac{243}{1024}$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Xác suất để học sinh đánh đúng ít nhất 1 câu bằng $\\frac{781}{1024}$.", correct: "true", explain: "$1 - \\frac{243}{1024} = \\frac{781}{1024}$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Một chiếc máy bay có 2 động cơ hoạt động độc lập. Xác suất hỏng của động cơ 1 trong một chuyến bay là $0.01$ và động cơ 2 là $0.01$. Máy bay chỉ rơi khi cả hai động cơ cùng bị hỏng:",
          items: [
            { key: "a", text: "Xác suất để cả hai động cơ cùng hỏng là $0.0001$.", correct: "true", explain: "$0.01 \\times 0.01 = 0.0001$." },
            { key: "b", text: "Xác suất chuyến bay an toàn (không bị rơi) là $0.9999$.", correct: "true", explain: "$1 - 0.0001 = 0.9999$ ($99.99\\%$)." },
            { key: "c", text: "Xác suất để có đúng 1 động cơ bị hỏng là $0.0198$.", correct: "true", explain: "$2 \\times 0.01 \\times 0.99 = 0.0198$." },
            { key: "d", text: "Nếu lắp thêm động cơ thứ 3 độc lập thì độ an toàn của chuyến bay giảm xuống.", correct: "false", explain: "Xác suất cả 3 cùng hỏng là $10^{-6}$ cực nhỏ, độ an toàn tăng lên." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về liên hệ giữa các công thức xác suất:",
          items: [
            { key: "a", text: "Công thức nhân áp dụng cho biến cố độc lập, công thức cộng áp dụng cho biến cố xung khắc.", correct: "true", explain: "Định lý chuẩn SGK 11." },
            { key: "b", text: "Nếu $P(A) = 1$ thì $A$ độc lập với mọi biến cố $B$.", correct: "true", explain: "$P(AB) = P(B) = 1 \\cdot P(B) = P(A)P(B)$." },
            { key: "c", text: "Nếu $P(A) = 0$ thì $A$ độc lập với mọi biến cố $B$.", correct: "true", explain: "$P(AB) = 0 = 0 \\cdot P(B) = P(A)P(B)$." },
            { key: "d", text: "Tích của hai số thực thuộc $[0; 1]$ có thể lớn hơn $1$.", correct: "false", explain: "Tích luôn $\\le 1$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 31: ĐỊNH NGHĨA VÀ Ý NGHĨA CỦA ĐẠO HÀM (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai31": {
      id: "toan11_bai31",
      lessonTitle: "Bài 31: Định nghĩa và ý nghĩa của đạo hàm",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 31:") || (t.includes("định nghĩa") && t.includes("đạo hàm")) || (t.includes("ý nghĩa") && t.includes("đạo hàm"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Định nghĩa đạo hàm tại một điểm",
          theory: createStandardTheoryHTML(
            "Bài 31: Định nghĩa và ý nghĩa của đạo hàm", "Lớp 11", 1,
            "Định nghĩa đạo hàm tại một điểm",
            `<p>Khái niệm nền tảng về Đạo hàm chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Cho hàm số $y = f(x)$ xác định trên khoảng $(a; b)$ và điểm $x_0 \\in (a; b)$. Nếu tồn tại giới hạn hữu hạn:
                $$\\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$$
                thì giới hạn đó được gọi là <em>đạo hàm của hàm số tại điểm $x_0$</em>, ký hiệu là $f'(x_0)$ hoặc $y'(x_0)$.
              </li>
              <li><strong>Công thức theo số gia:</strong> Đặt $\\Delta x = x - x_0$ (số gia của biến số) và $\\Delta y = f(x_0 + \\Delta x) - f(x_0)$ (số gia của hàm số):
                $$f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}$$
              </li>
              <li><strong>Mối liên hệ giữa đạo hàm và tính liên tục:</strong>
                <br/>• <strong>Định lý:</strong> Nếu hàm số có đạo hàm tại $x_0$ thì nó <strong>liên tục tại $x_0$</strong>.
                <br/>• <strong>Chiều ngược lại KHÔNG ĐÚNG:</strong> Hàm số liên tục tại $x_0$ thì CHƯA CHẮC có đạo hàm tại $x_0$ (Ví dụ điển hình: hàm $y = |x|$ liên tục tại $x = 0$ nhưng không có đạo hàm tại $x = 0$ vì đồ thị bị gãy góc nhọn).
              </li>
            </ul>`,
            `<li>Đạo hàm đo tốc độ biến thiên tức thời của hàm số tại một điểm cụ thể.</li>
            <li>Muốn tính đạo hàm bằng định nghĩa: tính tỉ số $\\frac{\\Delta y}{\\Delta x}$ rồi cho $\\Delta x \\to 0$.</li>`,
            `<li>Ngộ nhận hàm số liên tục thì có đạo hàm (sai lầm kinh điển).</li>
            <li>Nhầm lẫn giữa số gia biến số $\\Delta x$ và số gia hàm số $\\Delta y$.</li>`,
            `<li><em>"Có đạo hàm thì chắc chắn liên tục – Liên tục chưa chắc có đạo hàm (nhớ hàm trị tuyệt đối gãy góc)!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hàm số $y = f(x)$ có đạo hàm tại điểm $x_0$. Đẳng thức nào sau đây là **ĐÚNG**?",
              options: [
                "A. $f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}$",
                "B. $f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) + f(x_0)}{x + x_0}$",
                "C. $f'(x_0) = \\frac{f(x_0)}{x_0}$",
                "D. $f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta x}{\\Delta y}$"
              ],
              correct: "A",
              explanation: "Định nghĩa chuẩn SGK của đạo hàm tại một điểm."
            },
            {
              question: "Đạo hàm của hàm số $f(x) = x^2$ tại điểm $x_0 = 3$ bằng:",
              options: ["A. 6", "B. 9", "C. 3", "D. 0"],
              correct: "A",
              explanation: "Ta có $f'(x) = 2x \\Rightarrow f'(3) = 2(3) = 6$."
            },
            {
              question: "Khẳng định nào sau đây là **ĐÚNG**?",
              options: [
                "A. Hàm số có đạo hàm tại $x_0$ thì liên tục tại $x_0$",
                "B. Hàm số liên tục tại $x_0$ thì có đạo hàm tại $x_0$",
                "C. Mọi hàm số xác định đều có đạo hàm",
                "D. Hàm số $y = |x|$ có đạo hàm tại $x = 0$"
              ],
              correct: "A",
              explanation: "Theo định lý SGK: Hàm số có đạo hàm tại $x_0$ thì chắc chắn liên tục tại $x_0$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Ý nghĩa hình học và ý nghĩa vật lý của đạo hàm",
          theory: createStandardTheoryHTML(
            "Bài 31: Định nghĩa và ý nghĩa của đạo hàm", "Lớp 11", 2,
            "Ý nghĩa hình học và ý nghĩa vật lý của đạo hàm",
            `<p>Hai ứng dụng cốt lõi của Đạo hàm trong Hình học và Vật lý chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Ý NGHĨA HÌNH HỌC (Tiếp tuyến của đồ thị):</strong>
                <br/>• Đạo hàm $f'(x_0)$ là <strong>hệ số góc $k$ của tiếp tuyến</strong> của đồ thị hàm số $y = f(x)$ tại tiếp điểm $M_0(x_0; y_0)$ (với $y_0 = f(x_0)$):
                $$k = f'(x_0)$$
                <br/>• <strong>Phương trình tiếp tuyến tại điểm $M_0(x_0; y_0)$:</strong>
                $$y - y_0 = f'(x_0)(x - x_0) \\iff y = f'(x_0)(x - x_0) + y_0$$
              </li>
              <li><strong>2. Ý NGHĨA VẬT LÝ (Vận tốc tức thời):</strong>
                <br/>• Một chất điểm chuyển động theo phương trình $s = s(t)$. Khi đó <strong>vận tốc tức thời</strong> của chất điểm tại thời điểm $t_0$ là đạo hàm của quãng đường theo thời gian:
                $$v(t_0) = s'(t_0)$$
                <br/>• Cường độ dòng điện tức thời: $I(t_0) = Q'(t_0)$.
              </li>
            </ul>`,
            `<li>Phân biệt tiếp tuyến \"TẠI điểm $M_0(x_0; y_0)$\" (điểm $M_0$ nằm trên đồ thị) và tiếp tuyến \"ĐI QUA điểm $A$\" (điểm $A$ có thể không thuộc đồ thị).</li>
            <li>Hệ số góc $k = \\tan \\alpha$, trong đó $\\alpha$ là góc tạo bởi tiếp tuyến và chiều dương trục $Ox$.</li>`,
            `<li>Quên tính tung độ tiếp điểm $y_0 = f(x_0)$ khi viết phương trình tiếp tuyến.</li>
            <li>Nhầm lẫn giữa vận tốc trung bình và vận tốc tức thời.</li>`,
            `<li><em>"Hệ số góc tiếp tuyến là $f'(x_0)$ – Vận tốc tức thời là đạo hàm quãng đường $s'(t)$!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tiếp tuyến của đồ thị hàm số $y = x^3 - 3x$ tại điểm có hoành độ $x_0 = 2$ có hệ số góc bằng:",
              options: ["A. 9", "B. 2", "C. 6", "D. 0"],
              correct: "A",
              explanation: "Ta có $y' = 3x^2 - 3$. Hệ số góc tiếp tuyến tại $x_0 = 2$ là $k = y'(2) = 3(2^2) - 3 = 12 - 3 = 9$."
            },
            {
              question: "Phương trình chuyển động của một vật rơi tự do là $s(t) = 5t^2$ ($s$ tính bằng mét, $t$ tính bằng giây). Vận tốc tức thời của vật tại thời điểm $t = 3\\text{ s}$ là:",
              options: ["A. $30\\text{ m/s}$", "B. $45\\text{ m/s}$", "C. $15\\text{ m/s}$", "D. $10\\text{ m/s}$"],
              correct: "A",
              explanation: "Vận tốc tức thời là đạo hàm của quãng đường: $v(t) = s'(t) = 10t$. Tại $t = 3$: $v(3) = 10(3) = 30\\text{ m/s}$."
            },
            {
              question: "Phương trình tiếp tuyến của đồ thị hàm số $y = x^2 - 2x + 3$ tại điểm $M(1; 2)$ là:",
              options: ["A. $y = 2$", "B. $y = 2x$", "C. $y = x + 1$", "D. $y = -2x + 4$"],
              correct: "A",
              explanation: "Ta có $y' = 2x - 2 \\Rightarrow y'(1) = 0$. Phương trình tiếp tuyến là $y - 2 = 0(x - 1) \\Leftrightarrow y = 2$ (đường thẳng nằm ngang)."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = x^2 - 4x + 1$ có đồ thị parabol $(P)$:",
          items: [
            { key: "a", text: "Đạo hàm của hàm số là $f'(x) = 2x - 4$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Tại đỉnh parabol có $x = 2$, đạo hàm $f'(2) = 0$.", correct: "true", explain: "$2(2) - 4 = 0$." },
            { key: "c", text: "Tiếp tuyến tại đỉnh parabol song song hoặc trùng với trục hoành $Ox$.", correct: "true", explain: "Vì hệ số góc bằng 0." },
            { key: "d", text: "Tiếp tuyến tại điểm có hoành độ $x_0 = 3$ có hệ số góc bằng $1$.", correct: "false", explain: "Hệ số góc bằng $f'(3) = 2(3) - 4 = 2 \\neq 1$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Một vật chuyển động thẳng có phương trình quãng đường $s(t) = -t^3 + 6t^2 + t$ ($t \\ge 0$ tính bằng giây, $s$ tính bằng mét):",
          items: [
            { key: "a", text: "Vận tốc tức thời của vật là $v(t) = s'(t) = -3t^2 + 12t + 1$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Tại thời điểm ban đầu $t = 0$, vận tốc của vật là $1\\text{ m/s}$.", correct: "true", explain: "$v(0) = 1\\text{ m/s}$." },
            { key: "c", text: "Vận tốc tức thời đạt giá trị lớn nhất tại thời điểm $t = 2\\text{ s}$.", correct: "true", explain: "Đỉnh parabol $t = -12/(2(-3)) = 2\\text{ s}$." },
            { key: "d", text: "Vận tốc lớn nhất đó bằng $12\\text{ m/s}$.", correct: "false", explain: "$v(2) = -3(4) + 24 + 1 = 13\\text{ m/s} \\neq 12$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét hàm số $y = |x|$ tại điểm $x = 0$:",
          items: [
            { key: "a", text: "Hàm số liên tục tại điểm $x = 0$.", correct: "true", explain: "$\\lim_{x \\to 0} |x| = 0 = f(0)$." },
            { key: "b", text: "Tỉ số $\\lim_{x \\to 0^+} \\frac{f(x) - f(0)}{x - 0} = 1$.", correct: "true", explain: "Khi $x > 0$, $|x|/x = 1$." },
            { key: "c", text: "Tỉ số $\\lim_{x \\to 0^-} \\frac{f(x) - f(0)}{x - 0} = -1$.", correct: "true", explain: "Khi $x < 0$, $|x|/x = -x/x = -1$." },
            { key: "d", text: "Hàm số có đạo hàm tại $x = 0$ và bằng $0$.", correct: "false", explain: "Hai giới hạn một bên khác nhau ($1 \\neq -1$) nên không có đạo hàm tại $x = 0$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho đồ thị hàm số $(C): y = \\frac{2x - 1}{x + 1}$:",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R} \\setminus \\{-1\\}$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đạo hàm của hàm số là $y' = \\frac{3}{(x + 1)^2}$.", correct: "true", explain: "$\\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2}$." },
            { key: "c", text: "Tiếp tuyến tại điểm có hoành độ $x_0 = 0$ có hệ số góc bằng $3$.", correct: "true", explain: "$y'(0) = 3/(0+1)^2 = 3$." },
            { key: "d", text: "Có tiếp tuyến của $(C)$ có hệ số góc âm ($k < 0$).", correct: "false", explain: "Vì $y' = \\frac{3}{(x+1)^2} > 0$ nên mọi tiếp tuyến đều có hệ số góc dương." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hai đường thẳng $d_1$ và $d_2$ là tiếp tuyến của đồ thị hàm số:",
          items: [
            { key: "a", text: "Nếu $d_1 \\parallel d_2$ thì hai tiếp tuyến có cùng hệ số góc: $k_1 = k_2$.", correct: "true", explain: "Tính chất song song." },
            { key: "b", text: "Nếu $d_1 \\perp d_2$ thì tích hai hệ số góc bằng $-1$: $k_1 \\cdot k_2 = -1$.", correct: "true", explain: "Tính chất vuông góc." },
            { key: "c", text: "Nếu tiếp tuyến tạo với trục hoành một góc $45^\\circ$ thì hệ số góc $k = \\pm 1$.", correct: "true", explain: "$\\tan 45^\\circ = 1$ hoặc $\\tan 135^\\circ = -1$." },
            { key: "d", text: "Mọi tiếp tuyến của đồ thị đều cắt trục hoành.", correct: "false", explain: "Tiếp tuyến nằm ngang $y = y_0$ song song với $Ox$ không cắt $Ox$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ý nghĩa của đạo hàm trong các ngành khoa học:",
          items: [
            { key: "a", text: "Trong kinh tế học, đạo hàm của hàm chi phí được gọi là chi phí biên (Marginal Cost).", correct: "true", explain: "Chuẩn kinh tế lượng." },
            { key: "b", text: "Trong sinh học, đạo hàm biểu thị tốc độ tăng trưởng của quần thể vi khuẩn.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Đạo hàm cấp 1 của vận tốc theo thời gian cho ta gia tốc tức thời.", correct: "true", explain: "$a(t) = v'(t) = s''(t)$." },
            { key: "d", text: "Vận tốc tức thời luôn luôn là một số không âm.", correct: "false", explain: "Vận tốc mang dấu âm khi chất điểm chuyển động theo chiều âm của trục tọa độ." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 32: CÁC QUY TẮC TÍNH ĐẠO HÀM (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai32": {
      id: "toan11_bai32",
      lessonTitle: "Bài 32: Các quy tắc tính đạo hàm",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 32:") || t.includes("quy tắc tính đạo hàm");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Đạo hàm của hàm đa thức, phân thức và căn thức",
          theory: createStandardTheoryHTML(
            "Bài 32: Các quy tắc tính đạo hàm", "Lớp 11", 1,
            "Đạo hàm của hàm đa thức, phân thức và căn thức",
            `<p>Hệ thống công thức và quy tắc tính đạo hàm cơ bản chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Đạo hàm các hàm số sơ cấp cơ bản:</strong>
                <br/>• $(c)' = 0$ ($c$ là hằng số)
                <br/>• $(x)' = 1, \\qquad (x^n)' = n x^{n-1}$ ($n \\in \\mathbb{N}^*$)
                <br/>• $(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}$ ($x > 0$)
                <br/>• $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$ ($x \\neq 0$)
              </li>
              <li><strong>4 quy tắc tính đạo hàm của tổng, hiệu, tích, thương:</strong>
                <br/>• $(u \\pm v)' = u' \\pm v'$
                <br/>• $(k u)' = k u'$ ($k$ là hằng số)
                <br/>• $(u \\cdot v)' = u'v + uv'$
                <br/>• $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$ ($v \\neq 0$)
              </li>
              <li><strong>Mẹo đạo hàm phân thức bậc nhất trên bậc nhất:</strong>
                $$\\left(\\frac{ax + b}{cx + d}\\right)' = \\frac{ad - bc}{(cx + d)^2}$$
              </li>
            </ul>`,
            `<li>Đạo hàm của tích không bằng tích các đạo hàm: $(uv)' \\neq u'v'$. Bắt buộc phải có 2 số hạng: $u'v + uv'$.</li>
            <li>Đạo hàm của thương có dấu TRỪ ở tử số: $\\frac{u'v - uv'}{v^2}$.</li>`,
            `<li>Quên dấu trừ khi lấy đạo hàm của thương: viết $u'v + uv'$ ở tử.</li>
            <li>Nhầm dấu định thức: $\\frac{ad - bc}{(cx+d)^2}$ viết thành $ad + bc$.</li>`,
            `<li><em>"Tích: Đạo trước nhân sau cộng đạo sau nhân trước – Phân thức: Lấy tích chéo tử trừ tích chéo mẫu chia mẫu bình phương!"</em></li>`
          ),
          mcqs: [
            {
              question: "Đạo hàm của hàm số $y = 3x^4 - 2x^2 + 5$ là:",
              options: ["A. $y' = 12x^3 - 4x$", "B. $y' = 12x^3 - 4x + 5$", "C. $y' = 4x^3 - 2x$", "D. $y' = 12x^3 - 2x$"],
              correct: "A",
              explanation: "$y' = 3(4x^3) - 2(2x) + 0 = 12x^3 - 4x$."
            },
            {
              question: "Đạo hàm của hàm số $y = \\frac{2x - 3}{x + 1}$ là:",
              options: ["A. $y' = \\frac{5}{(x + 1)^2}$", "B. $y' = \\frac{-1}{(x + 1)^2}$", "C. $y' = \\frac{1}{(x + 1)^2}$", "D. $y' = 2$"],
              correct: "A",
              explanation: "Tích chéo: $ad - bc = 2(1) - (-3)(1) = 2 + 3 = 5$. Vậy $y' = \\frac{5}{(x + 1)^2}$."
            },
            {
              question: "Đạo hàm của hàm số $y = x \\cdot \\sqrt{x}$ ($x > 0$) là:",
              options: ["A. $\\frac{3}{2}\\sqrt{x}$", "B. $\\sqrt{x}$", "C. $\\frac{1}{2\\sqrt{x}}$", "D. $\\frac{3}{2}x$"],
              correct: "A",
              explanation: "Ta có $y = x^{\\frac{3}{2}} \\Rightarrow y' = \\frac{3}{2} x^{\\frac{1}{2}} = \\frac{3}{2}\\sqrt{x}$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Đạo hàm của hàm số lượng giác và đạo hàm hàm hợp",
          theory: createStandardTheoryHTML(
            "Bài 32: Các quy tắc tính đạo hàm", "Lớp 11", 2,
            "Đạo hàm của hàm số lượng giác và đạo hàm hàm hợp",
            `<p>Kiến thức Đạo hàm Lượng giác và Đạo hàm hàm hợp chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Đạo hàm các hàm số lượng giác cơ bản:</strong>
                <br/>• $(\\sin x)' = \\cos x$
                <br/>• $(\\cos x)' = -\\sin x$ (<strong>chú ý dấu âm!</strong>)
                <br/>• $(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$
                <br/>• $(\\cot x)' = -\\frac{1}{\\sin^2 x} = -(1 + \\cot^2 x)$
              </li>
              <li><strong>Quy tắc đạo hàm hàm hợp $y = f(u)$ với $u = u(x)$:</strong>
                $$y'_x = y'_u \\cdot u'_x$$
                <br/>(Lấy đạo hàm theo biến $u$ rồi <strong>nhân thêm đạo hàm $u'$ của biểu thức bên trong</strong>).
              </li>
              <li><strong>Bảng đạo hàm hàm hợp mở rộng:</strong>
                <br/>• $(u^n)' = n u^{n-1} \\cdot u'$
                <br/>• $(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}$
                <br/>• $(\\sin u)' = u' \\cdot \\cos u$
                <br/>• $(\\cos u)' = -u' \\cdot \\sin u$
              </li>
            </ul>`,
            `<li>Mỗi khi biểu thức bên trong khác chữ $x$ đơn lẻ (ví dụ: $2x, x^2+1, 3-x$), bắt buộc phải nhân thêm $u'$.</li>
            <li>Hàm nào có chữ \"Co\" (Cos, Cot) khi lấy đạo hàm đều xuất hiện <strong>dấu trừ ($-$)</strong>.</li>`,
            `<li>Quên nhân $u'$ khi tính đạo hàm hàm hợp (ví dụ: viết $(\\sin 2x)' = \\cos 2x$ thay vì $2\\cos 2x$).</li>
            <li>Quên dấu trừ của đạo hàm cos: viết $(\\cos x)' = \\sin x$ (sai).</li>`,
            `<li><em>"Sin đạo ra Cốt, Cốt đạo ra Trừ Sin – Hàm hợp luôn nhớ nhân thêm $u'$!"</em></li>`
          ),
          mcqs: [
            {
              question: "Đạo hàm của hàm số $y = \\sin(3x - 1)$ là:",
              options: ["A. $y' = 3\\cos(3x - 1)$", "B. $y' = \\cos(3x - 1)$", "C. $y' = -3\\cos(3x - 1)$", "D. $y' = 3\\sin(3x - 1)$"],
              correct: "A",
              explanation: "Hàm hợp: $y' = (3x - 1)' \\cdot \\cos(3x - 1) = 3\\cos(3x - 1)$."
            },
            {
              question: "Đạo hàm của hàm số $y = \\sqrt{x^2 + 1}$ là:",
              options: ["A. $y' = \\frac{x}{\\sqrt{x^2 + 1}}$", "B. $y' = \\frac{1}{2\\sqrt{x^2 + 1}}$", "C. $y' = \\frac{2x}{\\sqrt{x^2 + 1}}$", "D. $y' = \\frac{x}{2\\sqrt{x^2 + 1}}$"],
              correct: "A",
              explanation: "$(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}} = \\frac{2x}{2\\sqrt{x^2 + 1}} = \\frac{x}{\\sqrt{x^2 + 1}}$."
            },
            {
              question: "Đạo hàm của hàm số $y = \\cos^2 x$ là:",
              options: ["A. $y' = -\\sin 2x$", "B. $y' = 2\\cos x$", "C. $y' = \\sin 2x$", "D. $y' = -2\\sin x$"],
              correct: "A",
              explanation: "$y' = 2\\cos x \\cdot (\\cos x)' = 2\\cos x(-\\sin x) = -2\\sin x\\cos x = -\\sin 2x$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = (2x - 1)^3$:",
          items: [
            { key: "a", text: "Đặt $u = 2x - 1$ thì $u' = 2$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đạo hàm theo biến $u$ là $(u^3)' = 3u^2$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Đạo hàm $f'(x) = 3(2x - 1)^2$.", correct: "false", explain: "Thiếu nhân $u' = 2$: phải là $6(2x-1)^2$." },
            { key: "d", text: "Tại $x = 1$, giá trị đạo hàm bằng $f'(1) = 6$.", correct: "true", explain: "$6(2(1)-1)^2 = 6(1) = 6$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét đạo hàm của các hàm số lượng giác:",
          items: [
            { key: "a", text: "$(\\sin x)' = \\cos x$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "$(\\cos x)' = \\sin x$.", correct: "false", explain: "Phải có dấu trừ: $-\\sin x$." },
            { key: "c", text: "$(\\cos 2x)' = -2\\sin 2x$.", correct: "true", explain: "Nhân thêm $u' = 2$ và có dấu trừ." },
            { key: "d", text: "$(\\tan x)' = 1 + \\tan^2 x$.", correct: "true", explain: "Công thức tương đương chuẩn." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $y = x^2 \\cos x$:",
          items: [
            { key: "a", text: "Hàm số có dạng tích $u \\cdot v$ với $u = x^2, v = \\cos x$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "$u' = 2x$ và $v' = -\\sin x$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "$y' = 2x\\cos x - x^2\\sin x$.", correct: "true", explain: "$u'v + uv' = 2x\\cos x - x^2\\sin x$." },
            { key: "d", text: "Tại $x = 0$, đạo hàm $y'(0) = 1$.", correct: "false", explain: "$y'(0) = 0 - 0 = 0$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hàm số $y = \\frac{x^2 - 2x + 2}{x - 1}$:",
          items: [
            { key: "a", text: "Chia tử cho mẫu ta được $y = x - 1 + \\frac{1}{x - 1}$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đạo hàm $(x - 1)' = 1$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Đạo hàm $\\left(\\frac{1}{x - 1}\\right)' = -\\frac{1}{(x - 1)^2}$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Đạo hàm $y' = 1 - \\frac{1}{(x - 1)^2} = \\frac{x^2 - 2x}{(x - 1)^2}$.", correct: "true", explain: "Quy đồng: $(x-1)^2 - 1 = x^2 - 2x$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Xét các đẳng thức đạo hàm sau:",
          items: [
            { key: "a", text: "$(\\sqrt{2x + 3})' = \\frac{1}{\\sqrt{2x + 3}}$.", correct: "true", explain: "$\\frac{u'}{2\\sqrt{u}} = \\frac{2}{2\\sqrt{2x+3}} = \\frac{1}{\\sqrt{2x+3}}$." },
            { key: "b", text: "$(\\sin^3 x)' = 3\\sin^2 x \\cos x$.", correct: "true", explain: "$3u^2 \\cdot u' = 3\\sin^2 x \\cos x$." },
            { key: "c", text: "$\\left(\\frac{1}{2x - 1}\\right)' = -\\frac{2}{(2x - 1)^2}$.", correct: "true", explain: "$-\\frac{u'}{u^2} = -\\frac{2}{(2x-1)^2}$." },
            { key: "d", text: "$(\\tan 2x)' = \\frac{1}{\\cos^2 2x}$.", correct: "false", explain: "Thiếu nhân 2 ở tử: $\\frac{2}{\\cos^2 2x}$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về quy tắc tính đạo hàm trong SGK Toán 11:",
          items: [
            { key: "a", text: "Đạo hàm của hằng số luôn bằng 0.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đạo hàm của tổng bằng tổng các đạo hàm.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Đạo hàm của thương bằng thương hai đạo hàm: $(u/v)' = u'/v'$.", correct: "false", explain: "Hoàn toàn sai quy tắc." },
            { key: "d", text: "Hằng số nhân với hàm số được giữ nguyên: $(ku)' = ku'$.", correct: "true", explain: "Chuẩn." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 33: ĐẠO HÀM CẤP HAI (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai33": {
      id: "toan11_bai33",
      lessonTitle: "Bài 33: Đạo hàm cấp hai",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 33:") || t.includes("đạo hàm cấp hai") || t.includes("đạo hàm cấp 2");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm và phương pháp tính đạo hàm cấp hai",
          theory: createStandardTheoryHTML(
            "Bài 33: Đạo hàm cấp hai", "Lớp 11", 1,
            "Khái niệm và phương pháp tính đạo hàm cấp hai",
            `<p>Kiến thức Đạo hàm cấp hai chuẩn SGK Kết nối tri thức 11:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Giả sử hàm số $y = f(x)$ có đạo hàm tại mọi điểm $x \\in (a; b)$. Khi đó $y' = f'(x)$ là một hàm số xác định trên $(a; b)$. Nếu hàm số $f'(x)$ lại có đạo hàm tại $x$ thì đạo hàm của nó được gọi là <em>đạo hàm cấp hai của hàm số $f(x)$ tại $x$</em>, ký hiệu là $y''$ hoặc $f''(x)$:
                $$f''(x) = (f'(x))'$$
              </li>
              <li><strong>Quy trình 2 bước tính đạo hàm cấp hai:</strong>
                <br/>• Bước 1: Tính đạo hàm cấp một $f'(x)$ theo các quy tắc đạo hàm đã học.
                <br/>• Bước 2: Lấy tiếp đạo hàm của kết quả $f'(x)$ vừa tìm được để ra $f''(x)$.
              </li>
              <li>Tương tự, đạo hàm cấp ba là đạo hàm của đạo hàm cấp hai: $f'''(x) = (f''(x))'$.</li>
            </ul>`,
            `<li>Muốn tính đạo hàm cấp hai tại điểm $x_0$, ta tính hàm số $f''(x)$ trước, sau đó thay $x = x_0$ vào.</li>
            <li>Đạo hàm cấp hai sẽ được dùng ở Lớp 12 để tìm điểm uốn của đồ thị và xét điều kiện đủ thứ hai để tìm cực trị hàm số.</li>`,
            `<li>Tính nhầm đạo hàm cấp hai là bình phương của đạo hàm cấp một: viết $f''(x) = (f'(x))^2$ (sai hoàn toàn bản chất).</li>
            <li>Sai dấu khi lấy đạo hàm hai lần liên tiếp các hàm lượng giác.</li>`,
            `<li><em>"Đạo hàm cấp hai là đạo hàm của đạo hàm cấp một: Lấy đạo hàm 2 lần liên tiếp!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hàm số $y = x^4 - 2x^2 + 1$. Đạo hàm cấp hai $y''$ của hàm số là:",
              options: ["A. $y'' = 12x^2 - 4$", "B. $y'' = 4x^3 - 4x$", "C. $y'' = 12x^2 - 4x$", "D. $y'' = 24x$"],
              correct: "A",
              explanation: "$y' = 4x^3 - 4x \\Rightarrow y'' = (4x^3 - 4x)' = 12x^2 - 4$."
            },
            {
              question: "Cho hàm số $f(x) = \\sin x$. Giá trị của đạo hàm cấp hai $f''(0)$ bằng:",
              options: ["A. 0", "B. 1", "C. -1", "D. 2"],
              correct: "A",
              explanation: "$f'(x) = \\cos x \\Rightarrow f''(x) = -\\sin x$. Tại $x = 0$: $f''(0) = -\\sin 0 = 0$."
            },
            {
              question: "Đạo hàm cấp hai của hàm số $y = \\frac{1}{x}$ ($x \\neq 0$) là:",
              options: ["A. $y'' = \\frac{2}{x^3}$", "B. $y'' = -\\frac{1}{x^2}$", "C. $y'' = -\\frac{2}{x^3}$", "D. $y'' = \\frac{1}{x^3}$"],
              correct: "A",
              explanation: "$y' = -x^{-2} = -\\frac{1}{x^2} \\Rightarrow y'' = -(-2x^{-3}) = \\frac{2}{x^3}$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Ý nghĩa cơ học của đạo hàm cấp hai (Gia tốc tức thời)",
          theory: createStandardTheoryHTML(
            "Bài 33: Đạo hàm cấp hai", "Lớp 11", 2,
            "Ý nghĩa cơ học của đạo hàm cấp hai (Gia tốc tức thời)",
            `<p>Ý nghĩa vật lý cơ học nổi tiếng của Đạo hàm cấp hai chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa Gia tốc tức thời:</strong> Xét một chất điểm chuyển động thẳng xác định bởi phương trình $s = s(t)$ ($s$ là quãng đường, $t$ là thời gian).
                <br/>• Vận tốc tức thời tại thời điểm $t$ là đạo hàm cấp một: $v(t) = s'(t)$.
                <br/>• <strong>Gia tốc tức thời</strong> $a(t)$ của chất điểm tại thời điểm $t$ là đạo hàm của vận tốc, tức là <strong>đạo hàm cấp hai của quãng đường</strong> theo thời gian:
                $$a(t) = v'(t) = s''(t)$$
              </li>
              <li><strong>Ý nghĩa:</strong> Gia tốc tức thời $a(t)$ đo tốc độ thay đổi nhanh hay chậm của vận tốc tại thời điểm $t$.
                <br/>• Nếu $a(t) > 0$: Vận tốc đang tăng (chuyển động nhanh dần).
                <br/>• Nếu $a(t) < 0$: Vận tốc đang giảm (chuyển động chậm dần).
                <br/>• Nếu $a(t) = 0$: Vận tốc không đổi (chuyển động thẳng đều).
              </li>
            </ul>`,
            `<li>Đơn vị của gia tốc là $\\text{m/s}^2$ (mét trên giây bình phương).</li>
            <li>Trong chuyển động rơi tự do $s(t) = \\frac{1}{2}gt^2$: gia tốc tức thời $a(t) = s''(t) = g \\approx 9.8\\text{ m/s}^2$ là gia tốc trọng trường không đổi.</li>`,
            `<li>Nhầm giữa vận tốc $v(t) = s'(t)$ và gia tốc $a(t) = s''(t)$.</li>
            <li>Quên đơn vị đo khi trả lời bài toán thực tế.</li>`,
            `<li><em>"Đạo hàm lần 1 ra Vận tốc $v(t)$ – Đạo hàm lần 2 ra Gia tốc $a(t)$!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một chất điểm chuyển động thẳng có phương trình $s(t) = t^3 - 3t^2 + 4t$ ($s$ tính bằng mét, $t$ tính bằng giây). Gia tốc của chất điểm tại thời điểm $t = 2\\text{ s}$ là:",
              options: ["A. $6\\text{ m/s}^2$", "B. $4\\text{ m/s}^2$", "C. $0\\text{ m/s}^2$", "D. $12\\text{ m/s}^2$"],
              correct: "A",
              explanation: "$v(t) = s'(t) = 3t^2 - 6t + 4$. Gia tốc $a(t) = v'(t) = s''(t) = 6t - 6$. Tại $t = 2\\text{ s}$: $a(2) = 6(2) - 6 = 6\\text{ m/s}^2$."
            },
            {
              question: "Gia tốc của chất điểm ở câu trên triệt tiêu ($a(t) = 0$) tại thời điểm:",
              options: ["A. $t = 1\\text{ s}$", "B. $t = 2\\text{ s}$", "C. $t = 0\\text{ s}$", "D. $t = 3\\text{ s}$"],
              correct: "A",
              explanation: "$a(t) = 6t - 6 = 0 \\Leftrightarrow t = 1\\text{ s}$."
            },
            {
              question: "Trong chuyển động thẳng đều $s(t) = v_0 t + s_0$, gia tốc tức thời của vật bằng:",
              options: ["A. 0", "B. $v_0$", "C. $s_0$", "D. Hằng số khác 0"],
              correct: "A",
              explanation: "$v(t) = s'(t) = v_0 \\Rightarrow a(t) = v'(t) = 0$ (chuyển động thẳng đều không có gia tốc)."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = x^3 - 6x^2 + 9x + 2$:",
          items: [
            { key: "a", text: "Đạo hàm cấp một là $f'(x) = 3x^2 - 12x + 9$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đạo hàm cấp hai là $f''(x) = 6x - 12$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Phương trình $f''(x) = 0$ có nghiệm $x = 2$.", correct: "true", explain: "$6x - 12 = 0 \\Leftrightarrow x = 2$." },
            { key: "d", text: "Tại điểm $x = 2$, giá trị hàm số bằng $f(2) = 4$.", correct: "true", explain: "$2^3 - 6(4) + 18 + 2 = 8 - 24 + 18 + 2 = 4$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho chuyển động thẳng có phương trình $s(t) = -2t^3 + 9t^2 + 12t$ ($t \\ge 0$ tính bằng giây, $s$ tính bằng mét):",
          items: [
            { key: "a", text: "Vận tốc tức thời là $v(t) = -6t^2 + 18t + 12$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Gia tốc tức thời là $a(t) = -12t + 18$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Gia tốc của chất điểm tại $t = 1\\text{ s}$ bằng $6\\text{ m/s}^2$.", correct: "true", explain: "$a(1) = -12 + 18 = 6\\text{ m/s}^2$." },
            { key: "d", text: "Gia tốc của chất điểm luôn dương với mọi $t \\ge 0$.", correct: "false", explain: "Khi $t > 1.5$ thì $a(t) = -12t + 18 < 0$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $y = \\cos x$:",
          items: [
            { key: "a", text: "Đạo hàm cấp một là $y' = -\\sin x$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đạo hàm cấp hai là $y'' = -\\cos x$.", correct: "true", explain: "$(-\\sin x)' = -\\cos x$." },
            { key: "c", text: "Hàm số thỏa mãn hệ thức $y'' + y = 0$.", correct: "true", explain: "$-\\cos x + \\cos x = 0$." },
            { key: "d", text: "Đạo hàm cấp bốn $y^{(4)} = -\\cos x$.", correct: "false", explain: "Chu kỳ đạo hàm bằng 4: $y^{(4)} = \\cos x = y$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hàm số $y = e^{2x}$:",
          items: [
            { key: "a", text: "Đạo hàm cấp một là $y' = 2e^{2x}$.", correct: "true", explain: "Hàm hợp nhân 2." },
            { key: "b", text: "Đạo hàm cấp hai là $y'' = 4e^{2x}$.", correct: "true", explain: "Nhân thêm 2 nữa thành 4." },
            { key: "c", text: "Đạo hàm cấp $n$ là $y^{(n)} = 2^n e^{2x}$.", correct: "true", explain: "Quy nạp toán học." },
            { key: "d", text: "Hàm số thỏa mãn hệ thức $y'' - 4y = 0$.", correct: "true", explain: "$4e^{2x} - 4e^{2x} = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Xét mối liên hệ giữa đạo hàm cấp hai và cực trị (Dấu hiệu 2 SGK):",
          items: [
            { key: "a", text: "Nếu $f'(x_0) = 0$ và $f''(x_0) < 0$ thì $x_0$ là điểm cực đại.", correct: "true", explain: "Định lý chuẩn." },
            { key: "b", text: "Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $x_0$ là điểm cực tiểu.", correct: "true", explain: "Định lý chuẩn." },
            { key: "c", text: "Nếu $f'(x_0) = 0$ và $f''(x_0) = 0$ thì chưa thể kết luận cực trị bằng dấu hiệu 2.", correct: "true", explain: "Phải quay về lập bảng xét dấu $f'(x)$ (dấu hiệu 1)." },
            { key: "d", text: "Mọi hàm số có cực trị đều thỏa mãn $f''(x_0) \\neq 0$.", correct: "false", explain: "Ví dụ $y = x^4$ đạt cực tiểu tại $x = 0$ nhưng $y''(0) = 0$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ký hiệu và bản chất của đạo hàm cấp cao:",
          items: [
            { key: "a", text: "Ký hiệu đạo hàm cấp hai là $y''$ hoặc $\\frac{d^2 y}{dx^2}$.", correct: "true", explain: "Ký hiệu chuẩn Leibniz." },
            { key: "b", text: "Đạo hàm cấp hai có cùng thứ nguyên với vận tốc.", correct: "false", explain: "Gia tốc có thứ nguyên $\\text{m/s}^2$, vận tốc là $\\text{m/s}$." },
            { key: "c", text: "Đa thức bậc 2 có đạo hàm cấp hai là một hằng số.", correct: "true", explain: "$(ax^2 + bx + c)'' = (2ax + b)' = 2a$." },
            { key: "d", text: "Đa thức bậc $n$ có đạo hàm cấp $n+1$ luôn bằng $0$.", correct: "true", explain: "Mỗi lần lấy đạo hàm bậc giảm 1, sau $n+1$ lần về 0." }
          ]
        }
      ]
    }
  };

  // Đăng ký toàn bộ các bài học Lớp 11 vào Database toàn cục
  Object.assign(window.DEDICATED_LESSONS_DB, MORE_GRADE11_LESSONS);

  // Helper tìm kiếm bài học Lớp 11 chính xác
  function resolveGrade11Lesson(lessonTitle) {
    if (!lessonTitle) return null;
    const lower = lessonTitle.toLowerCase();
    for (const key in window.DEDICATED_LESSONS_DB) {
      const item = window.DEDICATED_LESSONS_DB[key];
      if (item && item.grade === "Lớp 11" && typeof item.matcher === 'function' && item.matcher(lessonTitle)) {
        const clone = JSON.parse(JSON.stringify(item));
        clone.lessonTitle = lessonTitle;
        clone.class = "Lớp 11";
        return clone;
      }
    }
    return null;
  }

  window.resolveGrade11Lesson = resolveGrade11Lesson;

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE11_SUPPLEMENT_LESSONS = {
    // =========================================================================
    // BÀI 9: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM (MẪU GHÉP NHÓM) (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai9": {
      id: "toan11_bai9",
      lessonTitle: "Bài 9: Các số đặc trưng đo xu thế trung tâm",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 9:") || t.includes("xu thế trung tâm")) && !t.includes("khoảng biến thiên") && !t.includes("lớp 10");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Số trung bình, Trung vị và Tứ phân vị của mẫu ghép nhóm",
          theory: createStandardTheoryHTML(
            "Bài 9: Các số đặc trưng đo xu thế trung tâm", "Lớp 11", 1,
            "Số trung bình, Trung vị và Tứ phân vị của mẫu ghép nhóm",
            `<p>Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Số trung bình cộng ($\\bar{x}$):</strong> $\\bar{x} = \\frac{1}{n}\\sum_{i=1}^k m_i c_i$, trong đó $c_i = \\frac{a_i + a_{i+1}}{2}$ là giá trị đại diện của nhóm.</li>
              <li><strong>Trung vị ($M_e$):</strong>
                $$M_e = a_m + \\frac{\\frac{n}{2} - C_{m-1}}{n_m} \\cdot h$$
                với $[a_m; a_{m+1})$ là nhóm đầu tiên có tần số tích lũy $C_m \\ge \\frac{n}{2}$; $h$ là độ dài nhóm.
              </li>
              <li><strong>Tứ phân vị ($Q_1, Q_3$):</strong>
                <br/>• $Q_1 = a_p + \\frac{\\frac{n}{4} - C_{p-1}}{n_p} \\cdot h$ (mốc $\\frac{n}{4}$).
                <br/>• $Q_3 = a_q + \\frac{\\frac{3n}{4} - C_{q-1}}{n_q} \\cdot h$ (mốc $\\frac{3n}{4}$).
              </li>
              <li><strong>Mốt của mẫu ghép nhóm ($M_o$):</strong>
                $$M_o = a_j + \\frac{n_j - n_{j-1}}{(n_j - n_{j-1}) + (n_j - n_{j+1})} \\cdot h$$
                trong đó nhóm $[a_j; a_{j+1})$ là nhóm có tần số lớn nhất $n_j$.
              </li>
            </ul>`,
            `<li>Giá trị đại diện của mỗi nhóm là trung bình cộng hai đầu mút của nhóm đó.</li>
            <li>Độ dài nhóm $h = a_{m+1} - a_m$.</li>`,
            `<li>Quên nhân độ dài nhóm $h$ trong công thức nội suy trung vị và tứ phân vị.</li>
            <li>Nhầm tần số nhóm đang xét $n_m$ với tần số tích lũy nhóm trước $C_{m-1}$.</li>`,
            `<li><em>"Tâm nhóm nhân tần số ra Trung bình – Mốc n/2 tìm Trung vị – Mốc n/4 ra Q1 – Mốc 3n/4 ra Q3!"</em></li>`
          ),
          mcqs: [
            {
              question: "Mẫu số liệu ghép nhóm có $n = 40$. Nhóm chứa trung vị $M_e$ là nhóm đầu tiên có tần số tích luỹ lớn hơn hoặc bằng:",
              options: ["A. 20", "B. 10", "C. 30", "D. 40"],
              correct: "A",
              explanation: "Mốc vị trí của trung vị là $\\frac{n}{2} = \\frac{40}{2} = 20$.",
              hint1: "Vị trí của trung vị bằng cỡ mẫu chia 2.",
              hint2: "$40 / 2 = 20$."
            },
            {
              question: "Nhóm $[20; 30)$ có giá trị đại diện là:",
              options: ["A. 25", "B. 20", "C. 30", "D. 10"],
              correct: "A",
              explanation: "$c = \\frac{20 + 30}{2} = 25$.",
              hint1: "Trung bình cộng 2 đầu mút.",
              hint2: "$(20 + 30)/2 = 25$."
            },
            {
              question: "Công thức xác định mốt của mẫu số liệu ghép nhóm dựa trên nhóm có:",
              options: [
                "A. Tần số lớn nhất",
                "B. Độ dài lớn nhất",
                "C. Tần số tích lũy lớn nhất",
                "D. Giá trị đại diện lớn nhất"
              ],
              correct: "A",
              explanation: "Nhóm chứa mốt là nhóm có tần số xuất hiện $n_j$ lớn nhất trong bảng.",
              hint1: "Mốt biểu thị giá trị xuất hiện nhiều nhất.",
              hint2: "Nhóm có tần số $n_j$ lớn nhất."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét mẫu số liệu ghép nhóm điểm kiểm tra Toán với cỡ mẫu $n = 100$:",
          items: [
            { key: "a", text: "Mốc xác định tứ phân vị thứ nhất $Q_1$ là $\\frac{n}{4} = 25$.", correct: "true", explain: "$100/4 = 25$." },
            { key: "b", text: "Mốc xác định trung vị $M_e = Q_2$ là $\\frac{n}{2} = 50$.", correct: "true", explain: "$100/2 = 50$." },
            { key: "c", text: "Mốc xác định tứ phân vị thứ ba $Q_3$ là $\\frac{3n}{4} = 75$.", correct: "true", explain: "$3(100)/4 = 75$." },
            { key: "d", text: "Số trung bình ghép nhóm luôn bằng đúng số trung bình của số liệu gốc ban đầu.", correct: "false", explain: "Số trung bình ghép nhóm là giá trị xấp xỉ vì đã thay số liệu bằng giá trị đại diện." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về ý nghĩa của các số đặc trưng xu thế trung tâm:",
          items: [
            { key: "a", text: "Số trung bình đại diện cho mức độ trung bình của toàn bộ dữ liệu.", correct: "true", explain: "Ý nghĩa cơ bản." },
            { key: "b", text: "Trung vị chia mẫu số liệu thành hai phần có số lượng quan sát bằng nhau.", correct: "true", explain: "Mỗi bên 50% số liệu." },
            { key: "c", text: "Mốt của mẫu ghép nhóm cho biết khoảng giá trị xuất hiện nhiều nhất.", correct: "true", explain: "Đặc trưng tần số cao nhất." },
            { key: "d", text: "Mọi mẫu số liệu ghép nhóm đều chỉ có duy nhất một nhóm chứa mốt.", correct: "false", explain: "Có thể có 2 nhóm cùng đạt tần số lớn nhất bằng nhau (đa mốt)." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho bảng phân bố: $[0; 10)$ có 5; $[10; 20)$ có 15; $[20; 30)$ có 20; $[30; 40)$ có 10 ($n = 50$):",
          items: [
            { key: "a", text: "Nhóm chứa mốt là nhóm $[20; 30)$ vì có tần số lớn nhất là 20.", correct: "true", explain: "Tần số 20 là cao nhất." },
            { key: "b", text: "Tần số tích luỹ của nhóm $[10; 20)$ là 20.", correct: "true", explain: "$5 + 15 = 20$." },
            { key: "c", text: "Nhóm chứa trung vị là nhóm $[20; 30)$.", correct: "true", explain: "$n/2 = 25$, tích lũy nhóm 2 là 20 (<25), nhóm 3 là 40 (>=25)." },
            { key: "d", text: "Trung vị bằng $22.5$.", correct: "true", explain: "$M_e = 20 + \\frac{25 - 20}{20} \\times 10 = 20 + 2.5 = 22.5$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về công thức tính mốt của mẫu ghép nhóm:",
          items: [
            { key: "a", text: "$n_j$ là tần số của nhóm chứa mốt.", correct: "true", explain: "Định nghĩa ký hiệu." },
            { key: "b", text: "$n_{j-1}$ là tần số của nhóm liền trước nhóm chứa mốt.", correct: "true", explain: "Ký hiệu chuẩn SGK." },
            { key: "c", text: "$n_{j+1}$ là tần số của nhóm liền sau nhóm chứa mốt.", correct: "true", explain: "Ký hiệu chuẩn SGK." },
            { key: "d", text: "Nếu nhóm chứa mốt là nhóm đầu tiên thì $n_{j-1} = 1$.", correct: "false", explain: "Nếu là nhóm đầu tiên thì quy ước $n_{j-1} = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Khảo sát thời gian xem ti vi mỗi ngày của học sinh:",
          items: [
            { key: "a", text: "Số liệu ghép nhóm giúp thu gọn và bảo mật dữ liệu cá nhân.", correct: "true", explain: "Ưu điểm của ghép nhóm." },
            { key: "b", text: "Các nhóm phải có độ dài bằng nhau.", correct: "true", explain: "Quy chuẩn thông thường trong thống kê SGK." },
            { key: "c", text: "Các nhóm không được giao nhau (nửa khoảng rời nhau).", correct: "true", explain: "Không trùng lặp biên." },
            { key: "d", text: "Ghép nhóm làm tăng độ chính xác của số trung bình so với số liệu gốc.", correct: "false", explain: "Ghép nhóm làm MẤT BỚT thông tin chi tiết, nên độ chính xác giảm đi so với số liệu gốc." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tứ phân vị của mẫu số liệu ghép nhóm:",
          items: [
            { key: "a", text: "$Q_1$ phân chia $25\\%$ số liệu nhỏ nhất với $75\\%$ số liệu lớn hơn.", correct: "true", explain: "Ý nghĩa vị trí." },
            { key: "b", text: "$Q_3$ phân chia $75\\%$ số liệu nhỏ hơn với $25\\%$ số liệu lớn nhất.", correct: "true", explain: "Ý nghĩa vị trí." },
            { key: "c", text: "Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$.", correct: "true", explain: "Định nghĩa khoảng tứ phân vị." },
            { key: "d", text: "$Q_2$ luôn luôn bằng trung bình cộng $\\frac{Q_1 + Q_3}{2}$.", correct: "false", explain: "Chỉ bằng nhau khi phân bố đối xứng hoàn hảo." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 10: ĐƯỜNG THẲNG VÀ MẶT PHẲNG TRONG KHÔNG GIAN (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai10": {
      id: "toan11_bai10",
      lessonTitle: "Bài 10: Đường thẳng và mặt phẳng trong không gian",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 10:") || t.includes("đường thẳng và mặt phẳng trong không gian")) && !t.includes("phương sai");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm mở đầu, 6 tính chất thừa nhận & 3 cách xác định mặt phẳng",
          theory: createStandardTheoryHTML(
            "Bài 10: Đường thẳng và mặt phẳng trong không gian", "Lớp 11", 1,
            "Khái niệm mở đầu, 6 tính chất thừa nhận & 3 cách xác định mặt phẳng",
            `<p>Các tiên đề và cách xác định mặt phẳng chuẩn SGK Hình học 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Mặt phẳng:</strong> Khái niệm nguyên thuỷ không định nghĩa, bề mặt phẳng kéo dài vô tận về mọi phía. Ký hiệu: $(P), (Q), (\\alpha), (\\beta)$ hoặc $(ABC)$.</li>
              <li><strong>Điểm thuộc mặt phẳng:</strong> Điểm $A$ thuộc $(P)$ ký hiệu $A \\in (P)$. Điểm $B$ không thuộc $(P)$ ký hiệu $B \\notin (P)$.</li>
              <li><strong>6 tính chất thừa nhận cốt lõi (Tiên đề Hilbert):</strong>
                <br/>• <em>Tính chất 1:</em> Có một và chỉ một đường thẳng đi qua hai điểm phân biệt cho trước.
                <br/>• <em>Tính chất 2:</em> Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng cho trước.
                <br/>• <em>Tính chất 3:</em> Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì mọi điểm của đường thẳng đều thuộc mặt phẳng đó ($d \\subset (P)$).
                <br/>• <em>Tính chất 4:</em> Tồn tại bốn điểm không cùng thuộc một mặt phẳng (bốn điểm không đồng phẳng tạo thành hình tứ diện).
                <br/>• <em>Tính chất 5:</em> Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm đó (gọi là <em>giao tuyến</em>).
                <br/>• <em>Tính chất 6:</em> Trên mỗi mặt phẳng, các kết quả đã biết của hình học phẳng đều đúng.
              </li>
              <li><strong>Ba cách xác định một mặt phẳng duy nhất:</strong>
                <br/>1. Qua <strong>ba điểm không thẳng hàng</strong>: Ký hiệu $(ABC)$.
                <br/>2. Qua <strong>một điểm và một đường thẳng</strong> không đi qua điểm đó: Ký hiệu $(A, d)$.
                <br/>3. Qua <strong>hai đường thẳng cắt nhau</strong>: Ký hiệu $(a, b)$.
                <br/><em>(Mở rộng: Qua hai đường thẳng song song phân biệt cũng xác định duy nhất một mặt phẳng).</em>
              </li>
              <li><strong>Quy ước vẽ hình không gian chuẩn Bộ GD&ĐT:</strong>
                <br/>• Đường nhìn thấy vẽ <strong>nét liền</strong> (—), đường bị che khuất vẽ <strong>nét đứt đoạn</strong> (- - -).
                <br/>• Giữ nguyên quan hệ song song và tỉ lệ độ dài giữa các đoạn thẳng nằm trên hai đường thẳng song song.
              </li>
            </ul>`,
            `<li>Ba điểm thẳng hàng KHÔNG xác định được một mặt phẳng duy nhất (có vô số mặt phẳng xoay quanh đường thẳng đó như các trang sách).</li>
            <li>Muốn chứng minh đường thẳng $d$ nằm trong $(P)$: Chỉ cần chỉ ra hai điểm phân biệt của $d$ đều thuộc $(P)$.</li>`,
            `<li>Vẽ nét liền cho các cạnh bị che khuất ở mặt sau hoặc mặt đáy.</li>
            <li>Ngộ nhận hai đường thẳng trong không gian luôn cắt nhau hoặc song song (có thể chéo nhau).</li>`,
            `<li><em>"Ba điểm không thẳng hàng – Điểm với đường rời nhau – Hai đường cắt hoặc song song: Duy nhất một mặt phẳng!"</em></li>`
          ),
          mcqs: [
            {
              question: "Có bao nhiêu mặt phẳng đi qua ba điểm không thẳng hàng cho trước?",
              options: ["A. 1", "B. 2", "C. Vô số", "D. 0"],
              correct: "A",
              explanation: "Theo tính chất thừa nhận 2 trong SGK Toán 11: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng.",
              hint1: "Xem tiên đề về ba điểm không thẳng hàng.",
              hint2: "Có duy nhất 1 mặt phẳng."
            },
            {
              question: "Cho điểm $A$ không thuộc đường thẳng $d$. Có bao nhiêu mặt phẳng đi qua $A$ và chứa đường thẳng $d$?",
              options: ["A. 1", "B. 2", "C. Vô số", "D. 0"],
              correct: "A",
              explanation: "Một điểm và một đường thẳng không đi qua điểm đó xác định duy nhất một mặt phẳng.",
              hint1: "Cách xác định mặt phẳng thứ 2.",
              hint2: "Duy nhất một mặt phẳng."
            },
            {
              question: "Hình biểu diễn của một hình vuông trong hình học không gian có thể là hình gì?",
              options: ["A. Hình bình hành", "B. Hình thang cân", "C. Hình chữ nhật duy nhất", "D. Tam giác"],
              correct: "A",
              explanation: "Phép chiếu song song bảo toàn tính song song và tỉ lệ đoạn thẳng song song nên hình vuông được biểu diễn bởi một hình bình hành.",
              hint1: "Quan hệ song song được bảo toàn.",
              hint2: "Hình bình hành."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Hình chóp, hình tứ diện & Kỹ thuật tìm giao tuyến của hai mặt phẳng",
          theory: createStandardTheoryHTML(
            "Bài 10: Đường thẳng và mặt phẳng trong không gian", "Lớp 11", 2,
            "Hình chóp, hình tứ diện & Kỹ thuật tìm giao tuyến của hai mặt phẳng",
            `<p>Các khối đa diện mở đầu và kỹ thuật tìm giao tuyến chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hình chóp $S.A_1A_2\\dots A_n$:</strong>
                <br/>• Đỉnh $S$, mặt đáy là đa giác lồi $A_1A_2\\dots A_n$.
                <br/>• Các mặt bên là các tam giác $SA_1A_2, SA_2A_3, \\dots, SA_nA_1$.
                <br/>• Các đoạn thẳng $SA_1, SA_2, \\dots, SA_n$ là các cạnh bên; $A_1A_2, \\dots$ là các cạnh đáy.
              </li>
              <li><strong>Hình tứ diện $ABCD$:</strong> Khối hình có 4 đỉnh, 6 cạnh và 4 mặt đều là tam giác. Hai cạnh không có đỉnh chung gọi là <em>cặp cạnh đối diện</em> (ví dụ: $AB$ và $CD$, $AC$ và $BD$, $AD$ và $BC$).</li>
              <li><strong>Quy trình 2 bước vàng tìm giao tuyến của hai mặt phẳng $(\\alpha)$ và $(\\beta)$ phân biệt:</strong>
                <br/>• <strong>Bước 1 (Điểm chung thứ nhất):</strong> Tìm một điểm chung $S$ đã có sẵn hoặc dễ thấy trong giả thiết.
                <br/>• <strong>Bước 2 (Điểm chung thứ hai):</strong> Tìm trong $(\\alpha)$ đường thẳng $a$, tìm trong $(\\beta)$ đường thẳng $b$ sao cho $a$ và $b$ cùng nằm trong một mặt phẳng thứ ba (đồng phẳng) và cắt nhau tại $O$. Khi đó $O \\in a \\subset (\\alpha)$ và $O \\in b \\subset (\\beta) \\implies O$ là điểm chung thứ hai.
                <br/>• <strong>Kết luận:</strong> Đường thẳng nối hai điểm chung $SO = (\\alpha) \\cap (\\beta)$ chính là giao tuyến cần tìm.
              </li>
            </ul>`,
            `<li>Muốn tìm giao điểm của hai đường thẳng trong không gian: Bắt buộc hai đường thẳng đó phải CÙNG NẰM TRONG MỘT MẶT PHẲNG (đồng phẳng).</li>
            <li>Hình tứ diện có đúng 3 cặp cạnh đối diện chéo nhau.</li>`,
            `<li>Kéo dài hai đường thẳng chéo nhau (không đồng phẳng) cho cắt nhau (sai lầm nghiêm trọng).</li>
            <li>Nhầm lẫn giữa đường cao hình chóp và cạnh bên hình chóp.</li>`,
            `<li><em>"Giao tuyến là một đường chung – Điểm một thấy sẵn, điểm hai tìm kĩ – Đồng phẳng cắt nhau tức thì – Nối hai điểm lại phẳng nào cũng xong!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng:",
              options: ["A. $SO$", "B. $SA$", "C. $AC$", "D. $BD$"],
              correct: "A",
              explanation: "Điểm $S$ là điểm chung thứ nhất. Trong mặt phẳng đáy $(ABCD)$, hai đường chéo $AC$ và $BD$ cắt nhau tại tâm $O$, suy ra $O$ là điểm chung thứ hai. Vậy giao tuyến là $SO$.",
              hint1: "Tìm 2 điểm chung của hai mặt phẳng.",
              hint2: "Điểm S và giao điểm O của AC và BD."
            },
            {
              question: "Cho tứ diện $ABCD$. Giao tuyến của hai mặt phẳng $(ABC)$ và $(BCD)$ là đường thẳng:",
              options: ["A. $BC$", "B. $AB$", "C. $CD$", "D. $AD$"],
              correct: "A",
              explanation: "Hai điểm $B$ và $C$ cùng thuộc cả hai mặt phẳng $(ABC)$ và $(BCD)$, do đó giao tuyến là đường thẳng $BC$.",
              hint1: "Điểm chung nhìn thấy ngay ở tên hai mặt phẳng.",
              hint2: "Đường thẳng BC."
            },
            {
              question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang với hai đáy $AB$ và $CD$ không song song, cắt nhau tại $E$. Giao tuyến của $(SAB)$ và $(SCD)$ là:",
              options: ["A. $SE$", "B. $SO$", "C. $SC$", "D. $SD$"],
              correct: "A",
              explanation: "$S$ là điểm chung thứ nhất. Trong mặt đáy $(ABCD)$, $AB$ cắt $CD$ tại $E$, suy ra $E$ là điểm chung thứ hai. Giao tuyến là $SE$.",
              hint1: "Kéo dài AB và CD cắt nhau tại E.",
              hint2: "Đường thẳng SE."
            }
          ]
        },
        {
          sectionNumber: 3,
          sectionTitle: "Mục 3: Giao điểm đường thẳng và mặt phẳng & Thiết diện của hình chóp",
          theory: createStandardTheoryHTML(
            "Bài 10: Đường thẳng và mặt phẳng trong không gian", "Lớp 11", 3,
            "Giao điểm đường thẳng và mặt phẳng & Thiết diện của hình chóp",
            `<p>Phương pháp tìm giao điểm và dựng thiết diện không gian chuẩn mực:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phương pháp tìm giao điểm của đường thẳng $d$ và mặt phẳng $(\\alpha)$:</strong>
                <br/>• <em>Trường hợp trực tiếp:</em> Nếu trong $(\\alpha)$ có sẵn đường thẳng $a$ đồng phẳng với $d$ và cắt $d$ tại $M$, thì $d \\cap (\\alpha) = \\{M\\}$.
                <br/>• <em>Trường hợp gián tiếp (qua mặt phẳng phụ):</em>
                <br/>1. Tìm/chọn mặt phẳng phụ $(\\beta)$ chứa đường thẳng $d$.
                <br/>2. Tìm giao tuyến $a = (\\alpha) \\cap (\\beta)$.
                <br/>3. Trong $(\\beta)$, tìm giao điểm $M = d \\cap a$. Khi đó $M$ chính là giao điểm của $d$ và $(\\alpha)$.
              </li>
              <li><strong>Khái niệm Thiết diện (Mặt cắt):</strong> Khi cắt khối chóp hoặc tứ diện bởi một mặt phẳng $(\\alpha)$, các đoạn giao tuyến của $(\\alpha)$ với các mặt của khối đa diện tạo thành một đa giác phẳng khép kín gọi là <em>thiết diện</em>.
              </li>
              <li><strong>Quy tắc dựng thiết diện:</strong>
                <br/>• Tìm các đoạn giao tuyến của $(\\alpha)$ lần lượt với từng mặt của khối đa diện.
                <br/>• Kéo dài các đoạn giao tuyến để cắt các cạnh viền nhằm tạo điểm chung mới sang các mặt liền kề.
                <br/>• Nối tất cả các đoạn giao tuyến khép kín thành đa giác thiết diện.
              </li>
            </ul>`,
            `<li>Thiết diện của hình tứ diện chỉ có thể là TAM GIÁC hoặc TỨ GIÁC.</li>
            <li>Thiết diện của hình chóp tứ giác có tối đa 5 cạnh (ngũ giác).</li>`,
            `<li>Kéo dài giao tuyến vượt ra ngoài khối đa diện rồi lấy cả phần bên ngoài làm thiết diện.</li>
            <li>Thiết diện phải là đa giác PHẲNG khép kín, không thể là đường gấp khúc hở.</li>`,
            `<li><em>"Mặt phẳng phụ chứa đường thẳng – Giao tuyến sinh ra điểm vàng – Thiết diện khép kín rõ ràng – Không thừa ra ngoài, chuẩn mực điểm mười!"</em></li>`
          ),
          mcqs: [
            {
              question: "Thiết diện của một hình tứ diện cắt bởi một mặt phẳng bất kì có thể là hình gì?",
              options: [
                "A. Tam giác hoặc tứ giác",
                "B. Ngũ giác",
                "C. Lục giác",
                "D. Luôn luôn là tam giác"
              ],
              correct: "A",
              explanation: "Hình tứ diện có 4 mặt tam giác, mặt phẳng cắt tối đa 4 mặt nên thiết diện chỉ có thể là tam giác (cắt 3 mặt) hoặc tứ giác (cắt cả 4 mặt).",
              hint1: "Đếm số mặt tối đa của hình tứ diện.",
              hint2: "Tam giác hoặc tứ giác."
            },
            {
              question: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Gọi $M$ là trung điểm cạnh $SC$. Giao điểm của đường thẳng $AM$ và mặt phẳng $(SBD)$ là:",
              options: [
                "A. Giao điểm của $AM$ và $SO$",
                "B. Giao điểm của $AM$ và $BD$",
                "C. Giao điểm của $AM$ và $SB$",
                "D. Điểm $M$"
              ],
              correct: "A",
              explanation: "Chọn mặt phẳng phụ $(SAC)$ chứa $AM$. Giao tuyến của $(SAC)$ và $(SBD)$ là đường thẳng $SO$. Trong $(SAC)$, $AM$ cắt $SO$ tại $I$, do đó $I = AM \\cap (SBD)$.",
              hint1: "Xét mặt phẳng phụ (SAC) chứa AM.",
              hint2: "Giao điểm của AM và SO."
            },
            {
              question: "Thiết diện của hình chóp tứ giác $S.ABCD$ cắt bởi một mặt phẳng có tối đa bao nhiêu cạnh?",
              options: ["A. 5 cạnh (ngũ giác)", "B. 4 cạnh (tứ giác)", "C. 6 cạnh (lục giác)", "D. 3 cạnh (tam giác)"],
              correct: "A",
              explanation: "Hình chóp tứ giác có 1 mặt đáy và 4 mặt bên (tổng cộng 5 mặt). Do đó thiết diện có tối đa 5 cạnh (ngũ giác).",
              hint1: "Hình chóp tứ giác có tổng cộng bao nhiêu mặt?",
              hint2: "Tối đa 5 cạnh."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$:",
          items: [
            { key: "a", text: "Tứ diện $ABCD$ có 4 đỉnh, 6 cạnh và 4 mặt.", correct: "true", explain: "Cấu trúc tứ diện gồm 4 đỉnh, 6 cạnh và 4 mặt tam giác." },
            { key: "b", text: "Đường thẳng $MN$ nằm trong mặt phẳng $(ABC)$.", correct: "true", explain: "Vì $M, N \\in (ABC)$ nên đường thẳng $MN \\subset (ABC)$." },
            { key: "c", text: "Giao tuyến của hai mặt phẳng $(DMN)$ và $(BCD)$ đi qua $D$.", correct: "true", explain: "Vì $D$ là điểm chung của hai mặt phẳng $(DMN)$ và $(BCD)$." },
            { key: "d", text: "Bốn điểm $A, B, C, D$ cùng thuộc một mặt phẳng.", correct: "false", explain: "Tứ diện gồm 4 điểm KHÔNG đồng phẳng." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về các cách xác định mặt phẳng trong không gian:",
          items: [
            { key: "a", text: "Qua hai đường thẳng cắt nhau có duy nhất một mặt phẳng.", correct: "true", explain: "Cách xác định chuẩn SGK." },
            { key: "b", text: "Qua hai đường thẳng chéo nhau có duy nhất một mặt phẳng.", correct: "false", explain: "Hai đường thẳng chéo nhau không cùng thuộc bất kì mặt phẳng nào." },
            { key: "c", text: "Qua hai đường thẳng song song có duy nhất một mặt phẳng.", correct: "true", explain: "Cách xác định chuẩn SGK." },
            { key: "d", text: "Một điểm và một đường thẳng luôn xác định duy nhất một mặt phẳng.", correct: "false", explain: "Điểm đó phải KHÔNG THUỘC đường thẳng mới xác định duy nhất mặt phẳng." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành với tâm $O$:",
          items: [
            { key: "a", text: "Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng $SO$.", correct: "true", explain: "$S$ và $O$ là 2 điểm chung phân biệt." },
            { key: "b", text: "Giao điểm của đường thẳng $SO$ và mặt đáy là điểm $O$.", correct: "true", explain: "$O$ là tâm đáy." },
            { key: "c", text: "Đường thẳng $SA$ cắt mặt phẳng $(SBC)$ tại điểm $S$.", correct: "true", explain: "$S \\in (SBC)$ và $A \\notin (SBC)$." },
            { key: "d", text: "Hai đường thẳng $AB$ và $CD$ cắt nhau tại điểm $O$.", correct: "false", explain: "$AB \\parallel CD$, chúng song song không cắt nhau." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các quy ước vẽ hình không gian trong SGK:",
          items: [
            { key: "a", text: "Đường nhìn thấy vẽ nét liền.", correct: "true", explain: "Quy chuẩn Bộ GD&ĐT." },
            { key: "b", text: "Đường bị che khuất vẽ nét đứt.", correct: "true", explain: "Quy chuẩn Bộ GD&ĐT." },
            { key: "c", text: "Tỉ số độ dài hai đoạn thẳng nằm trên hai đường thẳng song song được bảo toàn.", correct: "true", explain: "Tính chất phép chiếu song song." },
            { key: "d", text: "Góc vuông trong không gian luôn được vẽ thành góc vuông trên hình vẽ.", correct: "false", explain: "Góc không được bảo toàn độ lớn, thường vẽ thành góc nhọn hoặc tù." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho 4 điểm phân biệt không đồng phẳng $A, B, C, D$:",
          items: [
            { key: "a", text: "Có tất cả 4 mặt phẳng tạo bởi 3 trong số 4 điểm đó.", correct: "true", explain: "$C_4^3 = 4$ mặt phẳng." },
            { key: "b", text: "Hai đường thẳng $AB$ và $CD$ không có điểm chung.", correct: "true", explain: "Chúng chéo nhau." },
            { key: "c", text: "Hai đường thẳng $AB$ và $CD$ song song với nhau.", correct: "false", explain: "Chúng chéo nhau, không song song." },
            { key: "d", text: "Hình tạo bởi 4 điểm đó là một tứ diện.", correct: "true", explain: "Định nghĩa tứ diện." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về vị trí tương đối giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$:",
          items: [
            { key: "a", text: "$d$ cắt $(\\alpha)$ tại duy nhất một điểm.", correct: "true", explain: "Trường hợp có 1 điểm chung." },
            { key: "b", text: "$d$ song song với $(\\alpha)$ khi chúng không có điểm chung.", correct: "true", explain: "Định nghĩa đường song song mặt phẳng." },
            { key: "c", text: "$d$ nằm trong $(\\alpha)$ khi mọi điểm của $d$ đều thuộc $(\\alpha)$.", correct: "true", explain: "Trường hợp có vô số điểm chung." },
            { key: "d", text: "Nếu $d$ có 2 điểm phân biệt thuộc $(\\alpha)$ thì $d$ có thể không nằm trong $(\\alpha)$.", correct: "false", explain: "Nếu có 2 điểm chung thì TOÀN BỘ đường thẳng phải nằm trong mặt phẳng." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          question: "Cho khối tứ diện $ABCD$. Số cặp cạnh đối diện chéo nhau của khối tứ diện bằng bao nhiêu?",
          answer: "3",
          explain: "Có 3 cặp cạnh đối diện chéo nhau là: (AB, CD), (AC, BD), (AD, BC)."
        },
        {
          id: 2,
          question: "Cho 5 điểm phân biệt trong không gian sao cho không có 4 điểm nào đồng phẳng. Có bao nhiêu mặt phẳng đi qua 3 trong số 5 điểm đã cho?",
          answer: "10",
          explain: "Số mặt phẳng xác định bởi 3 điểm không thẳng hàng là C(5, 3) = 10 mặt phẳng."
        },
        {
          id: 3,
          question: "Một hình chóp có đáy là đa giác 6 cạnh (lục giác). Hỏi hình chóp đó có tổng cộng bao nhiêu mặt (kể cả mặt đáy)?",
          answer: "7",
          explain: "Hình chóp lục giác có 6 mặt bên tam giác và 1 mặt đáy, tổng cộng có 7 mặt."
        },
        {
          id: 4,
          question: "Mặt phẳng $(\\alpha)$ cắt tất cả các cạnh bên của một hình chóp tứ giác. Thiết diện tạo thành là một đa giác có bao nhiêu đỉnh?",
          answer: "4",
          explain: "Mặt phẳng cắt 4 cạnh bên tại 4 điểm phân biệt tạo thành một tứ giác có 4 đỉnh."
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE11_SUPPLEMENT_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE11_PARALLEL_LESSONS = {
    // =========================================================================
    // BÀI 11: HAI ĐƯỜNG THẲNG SONG SONG (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai11": {
      id: "toan11_bai11",
      lessonTitle: "Bài 11: Hai đường thẳng song song",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 11:") || t.includes("hai đường thẳng song song")) && !t.includes("nguyên hàm") && !t.includes("tích vô hướng");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Vị trí tương đối của hai đường thẳng (chéo nhau, cắt nhau, song song, trùng nhau)",
          theory: createStandardTheoryHTML(
            "Bài 11: Hai đường thẳng song song", "Lớp 11", 1,
            "Vị trí tương đối của hai đường thẳng (chéo nhau, cắt nhau, song song, trùng nhau)",
            `<p>Vị trí tương đối giữa hai đường thẳng $a$ và $b$ trong không gian chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Trường hợp 1 (Cùng thuộc một mặt phẳng - đồng phẳng):</strong>
                <br/>• <strong>Cắt nhau:</strong> $a$ và $b$ có đúng 1 điểm chung duy nhất: $a \\cap b = \\{M\\}$.
                <br/>• <strong>Song song:</strong> $a$ và $b$ cùng nằm trong một mặt phẳng và không có điểm chung nào: $a \\parallel b \\iff a, b \\subset (P)$ và $a \\cap b = \\emptyset$.
                <br/>• <strong>Trùng nhau:</strong> $a$ và $b$ có từ hai điểm chung phân biệt trở lên $\\implies a \\equiv b$ (vô số điểm chung).
              </li>
              <li><strong>Trường hợp 2 (Không cùng thuộc bất kỳ mặt phẳng nào):</strong>
                <br/>• <strong>Chéo nhau:</strong> Hai đường thẳng không đồng phẳng và không có điểm chung nào.
              </li>
              <li><strong>Dấu hiệu nhận biết hai đường thẳng chéo nhau:</strong> Nếu đường thẳng $a$ nằm trong mặt phẳng $(P)$ và đường thẳng $b$ cắt $(P)$ tại một điểm $A$ không thuộc $a$, thì $a$ và $b$ chéo nhau.
              </li>
            </ul>`,
            `<li>Trong không gian, hai đường thẳng không có điểm chung thì có thể SONG SONG hoặc CHÉO NHAU (khác với hình phẳng).</li>
            <li>Hai đường thẳng chéo nhau thì KHÔNG THỂ cùng thuộc bất kì một mặt phẳng nào.</li>`,
            `<li>Khẳng định "hai đường thẳng không có điểm chung thì song song" là SAI vì có thể chéo nhau.</li>
            <li>Nhầm lẫn giữa chéo nhau và cắt nhau vuông góc.</li>`,
            `<li><em>"Cùng mặt phẳng: cắt, song song, trùng – Khác mặt phẳng: chéo nhau cùng không gian!"</em></li>`
          ),
          mcqs: [
            {
              question: "Trong không gian, cho hai đường thẳng phân biệt $a$ và $b$ không có điểm chung. Khi đó:",
              options: [
                "A. $a$ và $b$ song song hoặc chéo nhau",
                "B. $a$ và $b$ luôn luôn song song",
                "C. $a$ và $b$ luôn luôn chéo nhau",
                "D. $a$ và $b$ cắt nhau"
              ],
              correct: "A",
              explanation: "Trong không gian, nếu hai đường thẳng không có điểm chung thì chúng có thể cùng thuộc một mặt phẳng (song song) hoặc không cùng thuộc mặt phẳng nào (chéo nhau).",
              hint1: "Xem hai trường hợp đồng phẳng và không đồng phẳng.",
              hint2: "Song song hoặc chéo nhau."
            },
            {
              question: "Cho tứ diện $ABCD$. Cặp đường thẳng nào sau đây CHÉO NHAU?",
              options: ["A. $AB$ và $CD$", "B. $AB$ và $BC$", "C. $AC$ và $AD$", "D. $BD$ và $CD$"],
              correct: "A",
              explanation: "Trong tứ diện $ABCD$, cặp cạnh đối diện $AB$ và $CD$ không đồng phẳng nên chúng chéo nhau.",
              hint1: "Cặp cạnh đối diện của tứ diện.",
              hint2: "AB và CD."
            },
            {
              question: "Cho đường thẳng $a$ nằm trong mặt phẳng $(P)$ và đường thẳng $b$ cắt $(P)$ tại $M \\notin a$. Vị trí tương đối của $a$ và $b$ là:",
              options: ["A. Chéo nhau", "B. Song song", "C. Cắt nhau", "D. Trùng nhau"],
              correct: "A",
              explanation: "Theo định lý nhận biết hai đường thẳng chéo nhau: $a \\subset (P), b \\cap (P) = M \\notin a \\implies a$ và $b$ chéo nhau.",
              hint1: "Dấu hiệu nhận biết hai đường thẳng chéo nhau.",
              hint2: "Chéo nhau."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tính chất hai đường thẳng song song & Định lí ba giao tuyến",
          theory: createStandardTheoryHTML(
            "Bài 11: Hai đường thẳng song song", "Lớp 11", 2,
            "Tính chất hai đường thẳng song song & Định lí ba giao tuyến",
            `<p>Các định lí và tính chất cơ bản của hai đường thẳng song song trong không gian:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Tính chất 1 (Tiên đề Ơ-clit trong không gian):</strong> Trong không gian, qua một điểm không thuộc đường thẳng cho trước, có một và chỉ một đường thẳng song song với đường thẳng đó.</li>
              <li><strong>Tính chất 2 (Tính chất bắc cầu):</strong> Trong không gian, hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau:
                $$\\begin{cases} a \\parallel c \\\\ b \\parallel c \\\\ a \\ne b \\end{cases} \\implies a \\parallel b$$
              </li>
              <li><strong>Định lí ba giao tuyến (Định lí Monge):</strong> Nếu ba mặt phẳng phân biệt đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đôi một song song hoặc đồng quy tại một điểm:
                $$\\begin{cases} (P) \\cap (Q) = d_1 \\\\ (Q) \\cap (R) = d_2 \\\\ (R) \\cap (P) = d_3 \\end{cases} \\implies \\left[\\begin{aligned} &d_1 \\parallel d_2 \\parallel d_3 \\\\ &d_1 \\cap d_2 \\cap d_3 = \\{I\\} \\end{aligned}\\right.$$
              </li>
              <li><strong>Hệ quả giao tuyến song song:</strong> Nếu hai mặt phẳng phân biệt lần lượt chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) song song với hai đường thẳng đó (hoặc trùng với một trong hai đường thẳng):
                $$\\begin{cases} a \\subset (P), b \\subset (Q) \\\\ a \\parallel b \\\\ (P) \\cap (Q) = d \\end{cases} \\implies d \\parallel a \\parallel b$$
              </li>
            </ul>`,
            `<li>Hệ quả giao tuyến song song là phương pháp hàng đầu để tìm giao tuyến của hai mặt phẳng khi biết chúng lần lượt chứa hai đường thẳng song song.</li>
            <li>Ba giao tuyến chỉ có hai trạng thái: Hoặc ĐÔI MỘT SONG SONG, hoặc ĐỒNG QUY TẠI MỘT ĐIỂM.</li>`,
            `<li>Nghĩ rằng ba giao tuyến có thể vừa cắt vừa song song hỗn tạp.</li>
            <li>Quên điều kiện hai mặt phẳng phải phân biệt.</li>`,
            `<li><em>"Ba mặt phẳng cắt ba đường – Hoặc cùng song song chạy dài muôn phương – Hoặc cùng tụ lại một điểm – Định lí ba giao tuyến rõ ràng khắc ghi!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
              options: [
                "A. Đường thẳng đi qua $S$ và song song với $AB$ và $CD$",
                "B. Đường thẳng $SO$ với $O$ là tâm đáy",
                "C. Đường thẳng đi qua $S$ và cắt $AB$",
                "D. Không có giao tuyến"
              ],
              correct: "A",
              explanation: "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$, lần lượt chứa hai đường thẳng song song $AB$ và $CD$. Theo hệ quả giao tuyến song song, giao tuyến là đường thẳng qua $S$ song song với $AB$ và $CD$.",
              hint1: "Áp dụng hệ quả giao tuyến song song.",
              hint2: "Đường thẳng qua S song song với AB và CD."
            },
            {
              question: "Trong không gian, cho ba đường thẳng phân biệt $a, b, c$. Nếu $a \\parallel b$ và $b \\parallel c$ thì:",
              options: ["A. $a \\parallel c$", "B. $a$ và $c$ chéo nhau", "C. $a$ cắt $c$", "D. $a \\equiv c$"],
              correct: "A",
              explanation: "Theo tính chất bắc cầu: Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.",
              hint1: "Tính chất bắc cầu.",
              hint2: "a song song c."
            },
            {
              question: "Ba mặt phẳng phân biệt cắt nhau từng đôi một theo ba giao tuyến phân biệt $d_1, d_2, d_3$. Biết $d_1$ cắt $d_2$ tại $I$. Khi đó:",
              options: [
                "A. $d_3$ phải đi qua điểm $I$",
                "B. $d_3 \\parallel d_1$",
                "C. $d_3$ chéo $d_2$",
                "D. $d_3 \\subset d_1$"
              ],
              correct: "A",
              explanation: "Theo định lí ba giao tuyến: Ba giao tuyến hoặc đôi một song song hoặc đồng quy. Vì $d_1$ cắt $d_2$ tại $I$ nên ba giao tuyến phải đồng quy tại $I$, do đó $d_3$ đi qua $I$.",
              hint1: "Định lí ba giao tuyến.",
              hint2: "Ba đường đồng quy tại I."
            }
          ]
        },
        {
          sectionNumber: 3,
          sectionTitle: "Mục 3: Kỹ thuật chứng minh hai đường thẳng song song & Thiết diện song song",
          theory: createStandardTheoryHTML(
            "Bài 11: Hai đường thẳng song song", "Lớp 11", 3,
            "Kỹ thuật chứng minh hai đường thẳng song song & Thiết diện song song",
            `<p>Các phương pháp chứng minh song song và dựng thiết diện song song chuẩn mực:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>4 phương pháp chứng minh hai đường thẳng song song trong không gian:</strong>
                <br/>• <em>Phương pháp 1 (Đồng phẳng & Hình học phẳng):</em> Chứng minh $a$ và $b$ cùng thuộc một mặt phẳng rồi dùng: Đường trung bình tam giác/hình thang, định lí Ta-lét đảo, hai cạnh đối hình bình hành.
                <br/>• <em>Phương pháp 2 (Bắc cầu):</em> Tìm đường thẳng thứ ba $c$ sao cho $a \\parallel c$ và $b \\parallel c$.
                <br/>• <em>Phương pháp 3 (Hệ quả giao tuyến song song):</em> $\\begin{cases} a \\subset (P), b \\subset (Q) \\\\ a \\parallel b \\\\ (P) \\cap (Q) = d \\end{cases} \\implies d \\parallel a \\parallel b$.
                <br/>• <em>Phương pháp 4 (Định lí ba giao tuyến):</em> Chứng minh hai giao tuyến song song suy ra giao tuyến thứ ba song song.
              </li>
              <li><strong>Dựng thiết diện song song với một đường thẳng $d$:</strong>
                <br/>• Khi mặt phẳng cắt $(\\alpha)$ song song với đường thẳng $d$, giao tuyến của $(\\alpha)$ với bất kì mặt phẳng nào chứa $d$ đều phải song song với $d$.
                <br/>• Từ các điểm đã biết của thiết diện, kẻ các đoạn thẳng song song với $d$ trên các mặt chứa đường thẳng song song hoặc chứa $d$.
              </li>
            </ul>`,
            `<li>Đoạn nối hai trung điểm trong một tam giác luôn bằng một nửa và song song với cạnh thứ ba (đường trung bình).</li>
            <li>Khi kẻ giao tuyến song song, phải xác định rõ đoạn giao tuyến nằm trên mặt nào để kẻ chính xác.</li>`,
            `<li>Kẻ đường song song cắt qua miền không gian mà không nằm trên mặt nào của hình chóp.</li>
            <li>Nhầm lẫn giữa tỉ số đoạn thẳng trong định lí Ta-lét thuận và đảo.</li>`,
            `<li><em>"Trung điểm nối lại trung bình – Song song một nửa cạnh đáy hiển nhiên – Ta-lét tỉ số bằng nhau – Thiết diện song song kẻ đường thẳng ngay!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$. Tứ giác $MNPQ$ là hình gì?",
              options: ["A. Hình bình hành", "B. Hình thang cân", "C. Hình thoi", "D. Tứ giác không đặc biệt"],
              correct: "A",
              explanation: "Trong tam giác $ABC$, $MN$ là đường trung bình nên $MN \\parallel AC$ và $MN = \\frac{1}{2}AC$. Trong tam giác $ADC$, $QP$ là đường trung bình nên $QP \\parallel AC$ và $QP = \\frac{1}{2}AC$. Do đó $MN \\parallel QP$ và $MN = QP$, suy ra $MNPQ$ là hình bình hành.",
              hint1: "Áp dụng tính chất đường trung bình tam giác.",
              hint2: "Hình bình hành."
            },
            {
              question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Mặt phẳng $(\\alpha)$ đi qua điểm $M$ trên cạnh $SA$ và song song với $AB$ và $AD$. Thiết diện của $(\\alpha)$ với hình chóp là:",
              options: [
                "A. Hình bình hành",
                "B. Tam giác",
                "C. Hình thang vuông",
                "D. Ngũ giác"
              ],
              correct: "A",
              explanation: "Mặt phẳng $(\\alpha)$ song song với hai cạnh đáy $AB$ và $AD$ nên các đoạn giao tuyến trên các mặt bên đều song song với các cạnh đáy tương ứng. Do đó thiết diện tạo thành là một hình bình hành đồng dạng với đáy.",
              hint1: "Các giao tuyến song song với cạnh đáy.",
              hint2: "Hình bình hành."
            },
            {
              question: "Cho tứ diện $ABCD$. Lấy điểm $M \\in AB$ sao cho $AM = 2MB$. Mặt phẳng $(\\alpha)$ qua $M$ song song với $BC$ và $CD$. Thiết diện của tứ diện cắt bởi $(\\alpha)$ là hình gì?",
              options: ["A. Tam giác", "B. Tứ giác", "C. Hình bình hành", "D. Hình thang"],
              correct: "A",
              explanation: "Mặt phẳng $(\\alpha)$ qua $M$ kẻ đoạn song song $BC$ cắt $AC$ tại $N$, kẻ đoạn song song $CD$ qua $N$ cắt $AD$ tại $P$. Nối $M$ và $P$ ta được tam giác $MNP$.",
              hint1: "Đếm số mặt mà mặt phẳng cắt qua.",
              hint2: "Tam giác."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$:",
          items: [
            { key: "a", text: "Hai đường thẳng $AB$ và $CD$ song song với nhau.", correct: "true", explain: "Do đáy $ABCD$ là hình bình hành." },
            { key: "b", text: "Hai đường thẳng $SA$ và $CD$ chéo nhau.", correct: "true", explain: "Vì $CD \\subset (ABCD)$ và $SA$ cắt $(ABCD)$ tại $A \\notin CD$." },
            { key: "c", text: "Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ và song song với $AB$.", correct: "true", explain: "Theo hệ quả giao tuyến song song." },
            { key: "d", text: "Hai đường thẳng $AC$ và $BD$ song song với nhau.", correct: "false", explain: "Chúng cắt nhau tại tâm $O$ của hình bình hành." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về vị trí tương đối của hai đường thẳng trong không gian:",
          items: [
            { key: "a", text: "Hai đường thẳng chéo nhau thì không cùng nằm trên một mặt phẳng.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "b", text: "Hai đường thẳng song song thì cùng nằm trên một mặt phẳng.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "c", text: "Hai đường thẳng không có điểm chung thì bắt buộc phải song song.", correct: "false", explain: "Có thể chéo nhau." },
            { key: "d", text: "Qua một điểm nằm ngoài đường thẳng cho trước có duy nhất một đường thẳng song song với đường thẳng đó.", correct: "true", explain: "Tiên đề Ơ-clit trong không gian." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$:",
          items: [
            { key: "a", text: "Đoạn thẳng $MN$ song song với $AC$.", correct: "true", explain: "Đường trung bình tam giác $ABC$." },
            { key: "b", text: "Đoạn thẳng $PQ$ song song với $AC$.", correct: "true", explain: "Đường trung bình tam giác $ADC$." },
            { key: "c", text: "Tứ giác $MNPQ$ là hình bình hành.", correct: "true", explain: "Vì $MN \\parallel PQ$ và $MN = PQ = \\frac{1}{2}AC$." },
            { key: "d", text: "Hai đường chéo $MP$ và $NQ$ chéo nhau trong không gian.", correct: "false", explain: "Chúng cắt nhau tại trung điểm mỗi đường vì $MNPQ$ là hình bình hành phẳng." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về định lí ba giao tuyến trong không gian:",
          items: [
            { key: "a", text: "Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đôi một song song hoặc đồng quy.", correct: "true", explain: "Nội dung định lí ba giao tuyến." },
            { key: "b", text: "Nếu hai trong ba giao tuyến cắt nhau tại $I$ thì giao tuyến thứ ba cũng đi qua $I$.", correct: "true", explain: "Trường hợp đồng quy." },
            { key: "c", text: "Ba giao tuyến luôn luôn đôi một song song với nhau trong mọi trường hợp.", correct: "false", explain: "Có thể đồng quy." },
            { key: "d", text: "Hệ quả giao tuyến song song là trường hợp đặc biệt của định lí ba giao tuyến.", correct: "true", explain: "Chuẩn kiến thức SGK." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình chóp $S.ABCD$ đáy hình thang ($AB \\parallel CD$ và $AB = 2CD$):",
          items: [
            { key: "a", text: "Giao tuyến của $(SAB)$ và $(SCD)$ đi qua $S$ và song song với $AB$.", correct: "true", explain: "Do $AB \\parallel CD$." },
            { key: "b", text: "Hai đường thẳng $AD$ và $BC$ cắt nhau tại một điểm nằm trong mặt đáy.", correct: "true", explain: "Do hình thang có hai cạnh bên không song song." },
            { key: "c", text: "Giao tuyến của $(SAD)$ và $(SBC)$ song song với $AB$.", correct: "false", explain: "Giao tuyến này đi qua $S$ và giao điểm của $AD, BC$ (cắt đáy)." },
            { key: "d", text: "Hai đường thẳng $SA$ và $CD$ là hai đường thẳng chéo nhau.", correct: "true", explain: "Không đồng phẳng." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về thiết diện song song với một đường thẳng:",
          items: [
            { key: "a", text: "Mặt phẳng song song với một đường thẳng thì cắt các mặt phẳng chứa đường thẳng đó theo các giao tuyến song song với đường thẳng đó.", correct: "true", explain: "Tính chất giao tuyến song song." },
            { key: "b", text: "Thiết diện của một khối đa diện là một đa giác phẳng khép kín.", correct: "true", explain: "Định nghĩa thiết diện." },
            { key: "c", text: "Thiết diện của hình tứ diện có thể có 5 cạnh.", correct: "false", explain: "Tối đa chỉ có 4 cạnh." },
            { key: "d", text: "Một mặt phẳng song song với một cạnh của tứ diện thì thiết diện tạo thành có ít nhất một cạnh song song với cạnh đó.", correct: "true", explain: "Đúng theo tính chất giao tuyến." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Có bao nhiêu cặp cạnh đối diện của hình chóp là hai đường thẳng chéo nhau?",
          answer: "4",
          explain: "Các cặp cạnh chéo nhau là (SA, CD), (SB, AD), (SC, AB), (SD, BC)."
        },
        {
          id: 2,
          question: "Cho tứ diện $ABCD$ có tất cả các cạnh bằng 6 cm. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$. Chu vi của hình bình hành $MNPQ$ bằng bao nhiêu cm?",
          answer: "12",
          explain: "MN = PQ = AC/2 = 3 cm, MQ = NP = BD/2 = 3 cm. Chu vi = 2*(3 + 3) = 12 cm."
        },
        {
          id: 3,
          question: "Trong không gian cho 4 đường thẳng đôi một song song, không có 3 đường thẳng nào cùng thuộc một mặt phẳng. Có bao nhiêu mặt phẳng xác định bởi từng cặp đường thẳng song song đó?",
          answer: "6",
          explain: "Số mặt phẳng là C(4, 2) = 6 mặt phẳng."
        },
        {
          id: 4,
          question: "Cho hình chóp tam giác $S.ABC$. Cắt hình chóp bởi một mặt phẳng song song với $BC$. Thiết diện tạo thành là một đa giác có tối đa bao nhiêu cạnh?",
          answer: "3",
          explain: "Hình chóp tam giác có 4 mặt, mặt phẳng cắt các mặt bên tạo thành thiết diện là tam giác (3 cạnh) hoặc tứ giác hình thang (3 hoặc 4 cạnh). Với chóp tam giác, thiết diện song song BC cắt 3 mặt quanh đỉnh S tạo thành tam giác hoặc tứ giác hình thang."
        }
      ]
    },

    // =========================================================================
    // BÀI 12: ĐƯỜNG THẲNG VÀ MẶT PHẲNG SONG SONG (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai12": {
      id: "toan11_bai12",
      lessonTitle: "Bài 12: Đường thẳng và mặt phẳng song song",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 12:") || t.includes("đường thẳng và mặt phẳng song song")) && !t.includes("tích phân");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Vị trí tương đối của đường thẳng và mặt phẳng & Điều kiện d // (P)",
          theory: createStandardTheoryHTML(
            "Bài 12: Đường thẳng và mặt phẳng song song", "Lớp 11", 1,
            "Vị trí tương đối của đường thẳng và mặt phẳng & Điều kiện d // (P)",
            `<p>Quan hệ giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ song song chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Ba vị trí tương đối giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$:</strong>
                <br/>• <strong>$d$ nằm trong $(\\alpha)$:</strong> Mọi điểm của $d$ đều thuộc $(\\alpha)$ ($d \\subset (\\alpha)$). Số điểm chung: Vô số ($d \\cap (\\alpha) = d$).
                <br/>• <strong>$d$ cắt $(\\alpha)$ tại $M$:</strong> $d$ và $(\\alpha)$ có duy nhất 1 điểm chung ($d \\cap (\\alpha) = \\{M\\}$).
                <br/>• <strong>$d$ song song với $(\\alpha)$:</strong> $d$ và $(\\alpha)$ <strong>không có điểm chung</strong> nào: $d \\parallel (\\alpha) \\iff d \\cap (\\alpha) = \\emptyset$.
              </li>
              <li><strong>Điều kiện để đường thẳng song song với mặt phẳng (Định lí 1):</strong> Nếu đường thẳng $a$ không nằm trong mặt phẳng $(P)$ và song song với một đường thẳng $b$ nằm trong $(P)$ thì $a$ song song với mặt phẳng $(P)$:
                $$\\begin{cases} a \\not\\subset (P) \\\\ b \\subset (P) \\\\ a \\parallel b \\end{cases} \\implies a \\parallel (P)$$
              </li>
              <li><strong>Quy trình 3 bước vàng chứng minh $a \\parallel (P)$:</strong>
                <br/>• <em>Bước 1:</em> Tìm trong mặt phẳng $(P)$ một đường thẳng $b$ thích hợp.
                <br/>• <em>Bước 2:</em> Chứng minh $a \\parallel b$ (dùng đường trung bình, định lí Ta-lét đảo, hình bình hành).
                <br/>• <em>Bước 3:</em> Kiểm tra điều kiện $a \\not\\subset (P)$ và kết luận $a \\parallel (P)$.
              </li>
            </ul>`,
            `<li>Muốn chứng minh $a \\parallel (P)$, chỉ cần tìm MỘT đường thẳng $b \\subset (P)$ sao cho $a \\parallel b$ và $a \\not\\subset (P)$.</li>
            <li>Điều kiện $a \\not\\subset (P)$ là BẮT BUỘC để tránh trường hợp $a$ nằm sẵn trong $(P)$.</li>`,
            `<li>Quên kiểm tra điều kiện $a \\not\\subset (P)$.</li>
            <li>Nghĩ rằng muốn $a \\parallel (P)$ thì $a$ phải song song với mọi đường thẳng trong $(P)$ (thực tế $a$ chỉ chéo hoặc song song với các đường trong $P$).</li>`,
            `<li><em>"Muốn chứng minh đường song song mặt – Tìm một đường thẳng nằm trong mặt này – Hai đường song song thấy ngay – Đường không nằm trong, mặt phẳng song song liền!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho đường thẳng $a$ song song với đường thẳng $b$ nằm trong mặt phẳng $(P)$. Khẳng định nào sau đây ĐÚNG và ĐẦY ĐỦ nhất?",
              options: [
                "A. $a \\parallel (P)$ hoặc $a \\subset (P)$",
                "B. $a \\parallel (P)$",
                "C. $a \\subset (P)$",
                "D. $a$ cắt $(P)$"
              ],
              correct: "A",
              explanation: "Nếu chưa biết $a$ có nằm trong $(P)$ hay không, thì $a$ có thể song song với $(P)$ (nếu $a \\not\\subset (P)$) hoặc $a$ nằm trong $(P)$ (nếu $a \\subset (P)$).",
              hint1: "Xem lại điều kiện Định lí 1.",
              hint2: "a // (P) hoặc a nằm trong (P)."
            },
            {
              question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M$ là trung điểm cạnh $SC$. Đường thẳng $OM$ song song với mặt phẳng nào sau đây?",
              options: ["A. $(SAB)$ và $(SAD)$", "B. $(SBC)$", "C. $(SCD)$", "D. $(ABCD)$"],
              correct: "A",
              explanation: "Trong tam giác $SAC$, $O$ là trung điểm $AC$, $M$ là trung điểm $SC \\implies OM$ là đường trung bình $\\implies OM \\parallel SA$. Do $SA \\subset (SAB)$ và $SA \\subset (SAD)$ nên $OM \\parallel (SAB)$ và $OM \\parallel (SAD)$.",
              hint1: "Xét tam giác SAC, OM là đường gì?",
              hint2: "OM // SA."
            },
            {
              question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Khẳng định nào sau đây ĐÚNG?",
              options: ["A. $MN \\parallel (BCD)$", "B. $MN \\subset (BCD)$", "C. $MN$ cắt $(BCD)$", "D. $MN \\parallel (ACD)$"],
              correct: "A",
              explanation: "$MN$ là đường trung bình tam giác $ABC \\implies MN \\parallel BC$. Mà $BC \\subset (BCD)$ và $MN \\not\\subset (BCD) \\implies MN \\parallel (BCD)$.",
              hint1: "MN là đường trung bình của tam giác ABC.",
              hint2: "MN // (BCD)."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tính chất của đường thẳng song song mặt phẳng & Định lí giao tuyến song song",
          theory: createStandardTheoryHTML(
            "Bài 12: Đường thẳng và mặt phẳng song song", "Lớp 11", 2,
            "Tính chất của đường thẳng song song mặt phẳng & Định lí giao tuyến song song",
            `<p>Các tính chất và định lí giao tuyến then chốt của quan hệ song song:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định lí 2 (Định lí giao tuyến song song):</strong> Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Nếu mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$ thì $b$ song song với $a$:
                $$\\begin{cases} a \\parallel (P) \\\\ a \\subset (Q) \\\\ (P) \\cap (Q) = b \\end{cases} \\implies b \\parallel a$$
              </li>
              <li><strong>Hệ quả:</strong> Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) song song với đường thẳng đó:
                $$\\begin{cases} (P) \\parallel a \\\\ (Q) \\parallel a \\\\ (P) \\cap (Q) = d \\end{cases} \\implies d \\parallel a$$
              </li>
              <li><strong>Định lí tồn tại duy nhất mặt phẳng:</strong> Cho hai đường thẳng chéo nhau. Có <strong>duy nhất</strong> một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.
                <br/>• <em>Cách dựng:</em> Lấy điểm $A \\in a$, qua $A$ kẻ $b' \\parallel b$. Khi đó $(a, b')$ là mặt phẳng duy nhất chứa $a$ và song song với $b$.
              </li>
            </ul>`,
            `<li>Định lí 2 là chìa khóa vàng để dựng giao tuyến và thiết diện khi có yếu tố song song.</li>
            <li>Hai mặt phẳng cùng song song với một đường thẳng thì giao tuyến của chúng song song với đường thẳng đó.</li>`,
            `<li>Áp dụng Định lí 2 nhưng mặt phẳng $(Q)$ không chứa đường thẳng $a$.</li>
            <li>Nhầm lẫn giữa điều kiện cần và điều kiện đủ.</li>`,
            `<li><em>"Đường thẳng song song mặt phẳng kia – Mặt phẳng thứ hai chứa đường này – Cắt mặt ban đầu sinh giao tuyến – Giao tuyến song song với đường ban đầu!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho đường thẳng $a$ song song với mặt phẳng $(P)$. Mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$. Khi đó vị trí tương đối giữa $a$ và $b$ là:",
              options: ["A. $b \\parallel a$", "B. $b$ cắt $a$", "C. $b$ chéo $a$", "D. $b \\equiv a$"],
              correct: "A",
              explanation: "Theo định lí 2 về giao tuyến song song: Nếu mặt phẳng $(Q)$ chứa $a \\parallel (P)$ và cắt $(P)$ theo giao tuyến $b$ thì $b \\parallel a$.",
              hint1: "Nội dung Định lí 2.",
              hint2: "b song song a."
            },
            {
              question: "Cho hai đường thẳng chéo nhau $a$ và $b$. Có bao nhiêu mặt phẳng chứa đường thẳng $a$ và song song với đường thẳng $b$?",
              options: ["A. Duy nhất 1", "B. 2", "C. Vô số", "D. 0"],
              correct: "A",
              explanation: "Theo định lí: Cho hai đường thẳng chéo nhau, có duy nhất một mặt phẳng chứa đường thẳng này và song song với đường thẳng kia.",
              hint1: "Định lí tồn tại duy nhất mặt phẳng.",
              hint2: "Duy nhất 1 mặt phẳng."
            },
            {
              question: "Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Mặt phẳng $(P)$ song song với $AB$ và $CD$, cắt các cạnh $AC, BC, BD, AD$ lần lượt tại $M, N, P, Q$. Thiết diện $MNPQ$ là hình gì?",
              options: ["A. Hình chữ nhật", "B. Tam giác đều", "C. Hình thang cân", "D. Hình thoi"],
              correct: "A",
              explanation: "Do $(P) \\parallel AB \\implies MN \\parallel AB, PQ \\parallel AB \\implies MN \\parallel PQ$. Tương tự $MQ \\parallel NP \\parallel CD \\implies MNPQ$ là hình bình hành. Hơn nữa trong tứ diện đều $AB \\perp CD \\implies MN \\perp MQ$, vậy $MNPQ$ là hình chữ nhật.",
              hint1: "Chú ý trong tứ diện đều, hai cạnh đối vuông góc với nhau.",
              hint2: "Hình chữ nhật."
            }
          ]
        },
        {
          sectionNumber: 3,
          sectionTitle: "Mục 3: Phương pháp chứng minh d // (P) & Kỹ thuật dựng thiết diện song song",
          theory: createStandardTheoryHTML(
            "Bài 12: Đường thẳng và mặt phẳng song song", "Lớp 11", 3,
            "Phương pháp chứng minh d // (P) & Kỹ thuật dựng thiết diện song song",
            `<p>Các phương pháp giải toán hình học không gian nâng cao và bài toán thiết diện:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Kỹ thuật chứng minh $d \\parallel (P)$ nâng cao:</strong>
                <br/>• Kết hợp định lí Ta-lét đảo trong tam giác: Nếu $\\frac{AM}{AB} = \\frac{AN}{AC} \\implies MN \\parallel BC \\implies MN \\parallel (BCD)$.
                <br/>• Sử dụng tính chất trọng tâm tam giác với tỉ số $\\frac{2}{3}$.
              </li>
              <li><strong>Quy trình 4 bước dựng thiết diện song song với một đường thẳng:</strong>
                <br/>• <em>Bước 1:</em> Xác định điểm chung xuất phát của mặt phẳng cắt với một mặt bất kì của hình khối.
                <br/>• <em>Bước 2:</em> Qua điểm chung đó, kẻ đoạn giao tuyến song song với đường thẳng đã cho.
                <br/>• <em>Bước 3:</em> Lan tỏa sang các mặt liền kề bằng cách kẻ tiếp các đoạn giao tuyến song song tương ứng.
                <br/>• <em>Bước 4:</em> Khép kín đa giác và kết luận hình dạng thiết diện (hình tam giác, hình thang, hình bình hành, hình chữ nhật...).
              </li>
              <li><strong>Bài toán cực trị diện tích thiết diện:</strong> Đặt độ dài ẩn $x$, lập hàm số diện tích $S(x)$ và áp dụng bất đẳng thức AM-GM (Cô-si) để tìm diện tích lớn nhất.</li>
            </ul>`,
            `<li>Thiết diện song song với 2 cạnh đối vuông góc của tứ diện đều luôn có CHU VI KHÔNG ĐỔI bằng $2a$.</li>
            <li>Diện tích thiết diện lớn nhất khi thiết diện là HÌNH VUÔNG cạnh $a/2$, diện tích bằng $a^2/4$.</li>`,
            `<li>Quên kiểm tra tính đồng phẳng của các đỉnh thiết diện.</li>
            <li>Nhầm lẫn giữa diện tích mặt bên và diện tích thiết diện.</li>`,
            `<li><em>"Điểm chung xuất phát làm mốc – Kẻ đường song song cắt qua cạnh – Lan tỏa khép kín đa giác – Tính diện tích, cực trị đỉnh cao!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hình chóp $S.ABCD$ đáy hình bình hành tâm $O$. Gọi $G_1, G_2$ lần lượt là trọng tâm của tam giác $SAB$ và tam giác $SCD$. Đường thẳng $G_1G_2$ song song với mặt phẳng nào sau đây?",
              options: ["A. $(ABCD)$", "B. $(SAC)$", "C. $(SAD)$", "D. $(SBD)$"],
              correct: "A",
              explanation: "Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Ta có $\\frac{SG_1}{SM} = \\frac{SG_2}{SN} = \\frac{2}{3} \\implies G_1G_2 \\parallel MN$. Do $MN \\subset (ABCD)$ nên $G_1G_2 \\parallel (ABCD)$.",
              hint1: "Xét tỉ số trọng tâm trong tam giác SMN.",
              hint2: "G1G2 song song với (ABCD)."
            },
            {
              question: "Cho tứ diện đều $ABCD$ cạnh $a$. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$, cắt cạnh $AC$ tại $M$ với $AM = x$ ($0 < x < a$). Chu vi của thiết diện tạo bởi $(\\alpha)$ và tứ diện bằng:",
              options: ["A. $2a$", "B. $a$", "C. $4a$", "D. $x(a-x)$"],
              correct: "A",
              explanation: "Thiết diện $MNPQ$ là hình chữ nhật có kích thước $MN = a - x$ và $MQ = x$. Chu vi $P = 2(MN + MQ) = 2(a - x + x) = 2a$ không đổi.",
              hint1: "Tính kích thước 2 cạnh theo định lí Ta-lét.",
              hint2: "Chu vi bằng 2a."
            },
            {
              question: "Tiếp tục bài toán tứ diện đều trên, diện tích thiết diện $MNPQ$ đạt giá trị lớn nhất bằng bao nhiêu?",
              options: ["A. $\\frac{a^2}{4}$", "B. $\\frac{a^2}{2}$", "C. $a^2$", "D. $\\frac{a^2\\sqrt{3}}{4}$"],
              correct: "A",
              explanation: "Diện tích $S(x) = x(a - x) \\le \\left(\\frac{x + a - x}{2}\\right)^2 = \\frac{a^2}{4}$. Dấu bằng xảy ra khi $x = a/2$ (khi đó thiết diện là hình vuông cạnh $a/2$).",
              hint1: "Áp dụng bất đẳng thức AM-GM: x(a - x) <= [(x + a - x)/2]^2.",
              hint2: "Max diện tích bằng a^2 / 4."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$:",
          items: [
            { key: "a", text: "Đường thẳng $AB$ song song với mặt phẳng $(SCD)$.", correct: "true", explain: "Vì $AB \\parallel CD$ và $CD \\subset (SCD)$ nên $AB \\parallel (SCD)$." },
            { key: "b", text: "Đường thẳng $SA$ song song với mặt phẳng $(ABCD)$.", correct: "false", explain: "Vì $SA$ cắt $(ABCD)$ tại điểm $A$." },
            { key: "c", text: "Gọi $M$ là trung điểm $SC$, đường thẳng $OM$ song song với $(SAB)$.", correct: "true", explain: "Do $OM$ là đường trung bình $\\triangle SAC \\implies OM \\parallel SA \\subset (SAB)$." },
            { key: "d", text: "Đường thẳng $SO$ song song với mặt phẳng $(ABCD)$.", correct: "false", explain: "$SO$ cắt $(ABCD)$ tại tâm $O$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về điều kiện và tính chất của đường thẳng song song với mặt phẳng:",
          items: [
            { key: "a", text: "Nếu $a \\not\\subset (P)$ và $a$ song song với một đường thẳng $b \\subset (P)$ thì $a \\parallel (P)$.", correct: "true", explain: "Định lí 1 chuẩn SGK." },
            { key: "b", text: "Nếu $a \\parallel (P)$ thì $a$ song song với mọi đường thẳng nằm trong $(P)$.", correct: "false", explain: "$a$ chỉ song song hoặc chéo với các đường trong $(P)$." },
            { key: "c", text: "Nếu $a \\parallel (P)$ và mặt phẳng $(Q)$ chứa $a$ cắt $(P)$ theo giao tuyến $b$ thì $b \\parallel a$.", correct: "true", explain: "Định lí 2 chuẩn SGK." },
            { key: "d", text: "Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) song song với đường thẳng đó.", correct: "true", explain: "Hệ quả chuẩn SGK." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$:",
          items: [
            { key: "a", text: "Đường thẳng $MN$ song song với mặt phẳng $(BCD)$.", correct: "true", explain: "Do $MN \\parallel BC \\subset (BCD)$." },
            { key: "b", text: "Đường thẳng $MN$ song song với mặt phẳng $(ACD)$.", correct: "false", explain: "$MN$ cắt $(ACD)$ tại điểm $N$." },
            { key: "c", text: "Mọi mặt phẳng chứa $MN$ và cắt $(BCD)$ thì giao tuyến đều song song với $BC$.", correct: "true", explain: "Theo Định lí 2." },
            { key: "d", text: "Đường thẳng $MN$ chéo nhau với đường thẳng $CD$.", correct: "true", explain: "Hai đường thẳng này không cùng nằm trong bất kì mặt phẳng nào." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về mặt phẳng song song qua các đường thẳng chéo nhau:",
          items: [
            { key: "a", text: "Cho hai đường thẳng chéo nhau $a$ và $b$, có duy nhất một mặt phẳng chứa $a$ và song song với $b$.", correct: "true", explain: "Định lí tồn tại duy nhất." },
            { key: "b", text: "Qua một điểm nằm ngoài mặt phẳng $(P)$, có duy nhất một đường thẳng song song với $(P)$.", correct: "false", explain: "Có VÔ SỐ đường thẳng (chúng cùng nằm trong mặt phẳng qua điểm đó $\\parallel (P)$)." },
            { key: "c", text: "Nếu $a \\parallel (P)$ thì trong $(P)$ có vô số đường thẳng song song với $a$.", correct: "true", explain: "Qua mỗi điểm trong $(P)$ đều kẻ được 1 đường song song với $a$." },
            { key: "d", text: "Nếu $a \\parallel (P)$ và $b \\subset (P)$ thì $a$ và $b$ không bao giờ cắt nhau.", correct: "true", explain: "Vì nếu cắt nhau thì $a$ và $(P)$ có điểm chung, mâu thuẫn." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình chóp $S.ABCD$ đáy hình thang ($AB \\parallel CD, AB = 2CD$). Mặt phẳng $(\\alpha)$ song song với $AB$:",
          items: [
            { key: "a", text: "Mặt phẳng $(\\alpha)$ cắt $(ABCD)$ theo giao tuyến song song với $AB$.", correct: "true", explain: "Do $(\\alpha) \\parallel AB$ và $AB \\subset (ABCD)$." },
            { key: "b", text: "Mặt phẳng $(\\alpha)$ cắt $(SAB)$ theo giao tuyến song song với $AB$.", correct: "true", explain: "Theo Định lí 2." },
            { key: "c", text: "Mặt phẳng $(\\alpha)$ cũng song song với đường thẳng $CD$ (nếu không chứa $CD$).", correct: "true", explain: "Vì $CD \\parallel AB$ nên $(\\alpha) \\parallel CD$." },
            { key: "d", text: "Thiết diện của $(\\alpha)$ cắt các cạnh bên $SA, SB, SC, SD$ luôn luôn là hình bình hành.", correct: "false", explain: "Thiết diện là hình thang, nói chung không phải hình bình hành." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Cho tứ diện đều $ABCD$ cạnh $a$. Mặt phẳng $(\\alpha)$ song song với $AB$ và $CD$ cắt các cạnh của tứ diện:",
          items: [
            { key: "a", text: "Thiết diện tạo thành luôn là một hình chữ nhật.", correct: "true", explain: "Do $AB \\perp CD$ nên hai cặp cạnh song song tạo thành hình chữ nhật." },
            { key: "b", text: "Chu vi của thiết diện luôn bằng $2a$ không phụ thuộc vào vị trí cắt.", correct: "true", explain: "Chu vi $P = 2(x + a - x) = 2a$ là hằng số." },
            { key: "c", text: "Diện tích thiết diện lớn nhất khi thiết diện là hình vuông cạnh $a/2$.", correct: "true", explain: "Đẳng thức xảy ra khi $x = a - x = a/2$." },
            { key: "d", text: "Giá trị lớn nhất của diện tích thiết diện bằng $a^2/2$.", correct: "false", explain: "Giá trị lớn nhất bằng $a^2/4$." }
          ]
        }
      ],
      saQuestions: [
        {
          id: 1,
          question: "Cho hình chóp $S.ABCD$ đáy hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Có bao nhiêu mặt của hình chóp mà đường thẳng $MN$ song song?",
          answer: "2",
          explain: "MN // AB nên MN // (ABCD) và MN // (SCD) (vì AB // CD). Do đó MN song song với 2 mặt của hình chóp."
        },
        {
          id: 2,
          question: "Cho tứ diện đều $ABCD$ cạnh bằng 10 cm. Mặt phẳng $(P)$ song song với $AB$ và $CD$ cắt các cạnh của tứ diện. Chu vi của thiết diện tạo thành bằng bao nhiêu cm?",
          answer: "20",
          explain: "Chu vi thiết diện hình chữ nhật luôn bằng 2a = 2 * 10 = 20 cm."
        },
        {
          id: 3,
          question: "Tiếp tục với tứ diện đều cạnh 10 cm ở trên, diện tích lớn nhất của thiết diện bằng bao nhiêu cm²?",
          answer: "25",
          explain: "Diện tích lớn nhất đạt được khi thiết diện là hình vuông cạnh a/2 = 5 cm, diện tích = 5^2 = 25 cm²."
        },
        {
          id: 4,
          question: "Cho hình chóp $S.ABCD$ đáy là hình bình hành tâm $O$. Gọi $G$ là trọng tâm tam giác $SAB$. Điểm $M$ trên cạnh $SC$ sao cho $SM = 2MC$. Đường thẳng $GM$ song song với mặt đáy $(ABCD)$ đúng hay sai? Nhập 1 nếu đúng, 0 nếu sai.",
          answer: "1",
          explain: "Gọi I là trung điểm AB, O là tâm đáy. Trong tam giác SIC, SG/SI = 2/3 và SM/SC = 2/3 => GM // IC. Do IC nằm trong đáy nên GM // (ABCD). Đáp án là 1 (đúng)."
        }
      ]
    },

            // =========================================================================
    // BÀI 13: HAI MẶT PHẲNG SONG SONG (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai13": {
      id: "toan11_bai13",
      lessonTitle: "Bài 13: Hai mặt phẳng song song",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 13") || t.includes("hai mặt phẳng song song")) && !t.includes("ứng dụng");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm & Điều kiện để hai mặt phẳng song song",
          theory: createStandardTheoryHTML(
            "Bài 13: Hai mặt phẳng song song", "Lớp 11", 1,
            "Mục 1: Khái niệm & Điều kiện để hai mặt phẳng song song",
            `<p>Nội dung cốt lõi Mục 1 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Định nghĩa hai mặt phẳng song song:</strong> Hai mặt phẳng được gọi là song song với nhau nếu chúng không có điểm chung. Kí hiệu: $(P) \\parallel (Q) \\iff (P) \\cap (Q) = \\emptyset$.</li>
  <li><strong>2. Điều kiện để hai mặt phẳng song song (Định lí 1):</strong> Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau $a, b$ và $a, b$ cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$.</li>
  <li><strong>3. Công thức suy luận ngắn gọn:</strong> $\\begin{cases} a \\subset (\\alpha), b \\subset (\\alpha) \\ a \\cap b = \\{I\\} \\ a \\parallel (\\beta), b \\parallel (\\beta) \\end{cases} \\implies (\\alpha) \\parallel (\\beta)$.</li>
</ul>`,
            `Hai đường thẳng $a, b$ trong $(\\alpha)$ <strong>bắt buộc phải cắt nhau</strong>. Nếu $a \\parallel b$ thì dù cả hai cùng song song với $(\\beta)$, ta vẫn chưa thể kết luận $(\\alpha) \\parallel (\\beta)$ (khi đó $(\\alpha)$ có thể cắt $(\\beta)$).`,
            `Chỉ chỉ ra 1 đường thẳng trong $(\\alpha)$ song song với $(\\beta)$ rồi vội vã kết luận hai mặt phẳng song song là sai lầm phổ biến nhất!`,
            `Tìm 2 đường thẳng cắt nhau trong mặt phẳng này lần lượt song song với 2 đường thẳng cắt nhau trong mặt phẳng kia là phương pháp chứng minh nhanh nhất!`
          ),
          mcqs: [
          {
                    "question": "**Câu 1:** Trong không gian, cho hai mặt phẳng phân biệt $(P)$ và $(Q)$. Khẳng định nào sau đây là ĐÚNG?",
                    "options": [
                              "A. Hai mặt phẳng không có điểm chung thì song song với nhau.",
                              "B. Hai mặt phẳng có một điểm chung thì song song với nhau.",
                              "C. Hai mặt phẳng cùng song song với một đường thẳng thì song song với nhau.",
                              "D. Hai mặt phẳng cắt nhau theo một điểm."
                    ],
                    "correct": "A",
                    "explanation": "Theo định nghĩa SGK Toán 11, hai mặt phẳng song song nếu chúng không có bất kì điểm chung nào.",
                    "hint1": "Xem lại định nghĩa hai mặt phẳng song song.",
                    "hint2": "Không có điểm chung nghĩa là giao nhau bằng rỗng."
          },
          {
                    "question": "**Câu 2:** Cho hai đường thẳng cắt nhau $a, b$ cùng nằm trong mặt phẳng $(P)$ và cùng song song với mặt phẳng $(Q)$. Khẳng định nào sau đây ĐÚNG?",
                    "options": [
                              "A. $(P) \\parallel (Q)$",
                              "B. $(P)$ cắt $(Q)$",
                              "C. $(P) \\equiv (Q)$",
                              "D. $a \\parallel b$"
                    ],
                    "correct": "A",
                    "explanation": "Theo Định lí 1 về điều kiện hai mặt phẳng song song: nếu mặt phẳng $(P)$ chứa 2 đường thẳng cắt nhau cùng song song với $(Q)$ thì $(P) \\parallel (Q)$.",
                    "hint1": "Định lí 1 SGK Toán 11 KNTT.",
                    "hint2": "2 đường thẳng cắt nhau cùng song song với mặt phẳng thứ hai."
          },
          {
                    "question": "**Câu 3:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M, N$ lần lượt là trung điểm của $SA, SB$. Mặt phẳng $(OMN)$ song song với mặt phẳng nào sau đây?",
                    "options": [
                              "A. $(SCD)$",
                              "B. $(SBC)$",
                              "C. $(SAB)$",
                              "D. $(ABCD)$"
                    ],
                    "correct": "A",
                    "explanation": "Trong tam giác $SAB$, $MN$ là đường trung bình nên $MN \\parallel AB \\parallel CD \\subset (SCD)$. Trong tam giác $SAC$, $OM$ là đường trung bình nên $OM \\parallel SC \\subset (SCD)$. Hai đường thẳng $MN$ và $OM$ cắt nhau tại $M$ cùng song song với $(SCD) \\implies (OMN) \\parallel (SCD)$.",
                    "hint1": "Xét các đường trung bình trong tam giác SAB và SAC.",
                    "hint2": "MN // CD và OM // SC."
          }
]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tính chất của hai mặt phẳng song song & Định lí Ta-lét trong không gian",
          theory: createStandardTheoryHTML(
            "Bài 13: Hai mặt phẳng song song", "Lớp 11", 2,
            "Mục 2: Tính chất của hai mặt phẳng song song & Định lí Ta-lét trong không gian",
            `<p>Nội dung cốt lõi Mục 2 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Tính chất tồn tại và duy nhất:</strong> Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đã cho.</li>
  <li><strong>2. Hệ quả quan trọng:</strong> Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì song song với nhau.</li>
  <li><strong>3. Định lí 2 (Giao tuyến song song):</strong> Cho hai mặt phẳng song song. Nếu một mặt phẳng thứ ba cắt cả hai mặt phẳng đó thì hai giao tuyến phải song song với nhau: $\\begin{cases} (\\alpha) \\parallel (\\beta) \\ (\\gamma) \\cap (\\alpha) = a \\ (\\gamma) \\cap (\\beta) = b \\end{cases} \\implies a \\parallel b$.</li>
  <li><strong>4. Định lí Ta-lét trong không gian:</strong> Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ: $\\frac{A_1B_1}{A_2B_2} = \\frac{B_1C_1}{B_2C_2} = \\frac{A_1C_1}{A_2C_2}$.</li>
</ul>`,
            `Hai đường thẳng song song chắn giữa hai mặt phẳng song song thì bằng nhau: Nếu $(\\alpha) \\parallel (\\beta)$ và $a \\parallel b$ cắt $(\\alpha), (\\beta)$ tại $A, B$ và $A', B'$ thì $AB = A'B'$.`,
            `Nhầm lẫn rằng hai cát tuyến trong định lí Ta-lét phải cùng nằm trên một mặt phẳng. Trong không gian, hai cát tuyến có thể chéo nhau định lí Ta-lét vẫn hoàn toàn đúng!`,
            `Vận dụng Định lí giao tuyến song song để dựng nhanh thiết diện: Khi mặt phẳng cắt qua hai mặt đối diện song song, hai giao tuyến tạo ra luôn song song với nhau!`
          ),
          mcqs: [
          {
                    "question": "**Câu 4:** Qua một điểm $M$ nằm ngoài mặt phẳng $(P)$, có bao nhiêu mặt phẳng đi qua $M$ và song song với $(P)$?",
                    "options": [
                              "A. Duy nhất 1",
                              "B. Vô số",
                              "C. 2",
                              "D. 0"
                    ],
                    "correct": "A",
                    "explanation": "Theo tính chất thừa nhận của SGK Toán 11: Qua một điểm ngoài một mặt phẳng có duy nhất 1 mặt phẳng song song với mặt phẳng đó.",
                    "hint1": "Tính chất cơ bản về tính duy nhất của mặt phẳng song song.",
                    "hint2": "Duy nhất một mặt phẳng."
          },
          {
                    "question": "**Câu 5:** Cho hai mặt phẳng song song $(P)$ và $(Q)$. Mặt phẳng $(R)$ cắt $(P)$ và $(Q)$ theo hai giao tuyến phân biệt $a$ và $b$. Khi đó:",
                    "options": [
                              "A. $a \\parallel b$",
                              "B. $a$ cắt $b$",
                              "C. $a$ và $b$ chéo nhau",
                              "D. $a \\perp b$"
                    ],
                    "correct": "A",
                    "explanation": "Theo Định lí 2: Mặt phẳng cắt hai mặt phẳng song song theo hai giao tuyến song song với nhau.",
                    "hint1": "Định lí giao tuyến song song.",
                    "hint2": "Hai giao tuyến a và b cùng nằm trên mặt phẳng (R) và không có điểm chung nên song song."
          },
          {
                    "question": "**Câu 6:** Ba mặt phẳng song song $(P), (Q), (R)$ cắt đường thẳng $d$ tại $A, B, C$ và cắt $d'$ tại $A', B', C'$. Biết $AB = 3, BC = 6, A'B' = 2$. Độ dài đoạn thẳng $B'C'$ bằng:",
                    "options": [
                              "A. $4$",
                              "B. $5$",
                              "C. $6$",
                              "D. $3$"
                    ],
                    "correct": "A",
                    "explanation": "Theo định lí Ta-lét trong không gian: $\\frac{A'B'}{B'C'} = \\frac{AB}{BC} \\implies \\frac{2}{B'C'} = \\frac{3}{6} = \\frac{1}{2} \\implies B'C' = 4$.",
                    "hint1": "Áp dụng công thức tỉ số định lí Ta-lét.",
                    "hint2": "B'C' = (A'B' * BC) / AB."
          }
]
        },
        {
          sectionNumber: 3,
          sectionTitle: "Mục 3: Hình lăng trụ, hình hộp và hình chóp cụt",
          theory: createStandardTheoryHTML(
            "Bài 13: Hai mặt phẳng song song", "Lớp 11", 3,
            "Mục 3: Hình lăng trụ, hình hộp và hình chóp cụt",
            `<p>Nội dung cốt lõi Mục 3 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Hình lăng trụ:</strong> Là hình đa diện có hai đáy là hai đa giác bằng nhau nằm trên hai mặt phẳng song song; các mặt bên là những hình bình hành; các cạnh bên song song và bằng nhau.</li>
  <li><strong>2. Hình hộp:</strong> Là hình lăng trụ có đáy là hình bình hành. Hình hộp có 6 mặt đều là các hình bình hành, 8 đỉnh, 12 cạnh, và 4 đường chéo đồng quy tại trung điểm mỗi đường.</li>
  <li><strong>3. Hình chóp cụt:</strong> Cắt một hình chóp bởi một mặt phẳng song song với đáy, phần nằm giữa mặt phẳng cắt và mặt đáy gọi là hình chóp cụt. Hai đáy là hai đa giác đồng dạng nằm trên hai mặt phẳng song song; các mặt bên là hình thang.</li>
</ul>`,
            `Tên gọi của hình lăng trụ phụ thuộc vào đa giác đáy: Lăng trụ tam giác, lăng trụ tứ giác, lăng trụ ngũ giác... Tương tự với hình chóp cụt.`,
            `Nhầm lẫn các mặt bên của hình lăng trụ đứng với lăng trụ xiên. Ở lăng trụ tổng quát, các mặt bên chỉ là <strong>hình bình hành</strong>, chưa chắc là hình chữ nhật!`,
            `Ghi nhớ công thức số phần tử của lăng trụ đáy $n$-giác: Có $2n$ đỉnh, $3n$ cạnh (gồm $2n$ cạnh đáy và $n$ cạnh bên), và $n+2$ mặt (2 đáy và $n$ mặt bên)!`
          ),
          mcqs: [
          {
                    "question": "**Câu 7:** Các mặt bên của một hình lăng trụ bất kì luôn là:",
                    "options": [
                              "A. Hình bình hành",
                              "B. Hình chữ nhật",
                              "C. Hình thoi",
                              "D. Hình thang cân"
                    ],
                    "correct": "A",
                    "explanation": "Theo định nghĩa hình lăng trụ trong SGK Toán 11: Các mặt bên của hình lăng trụ luôn luôn là hình bình hành.",
                    "hint1": "Xem lại định nghĩa các mặt bên của lăng trụ.",
                    "hint2": "Mỗi mặt bên giới hạn bởi hai cạnh bên song song bằng nhau và hai cạnh đáy song song."
          },
          {
                    "question": "**Câu 8:** Một hình hộp có tất cả bao nhiêu đường chéo nối các cặp đỉnh đối diện nhau?",
                    "options": [
                              "A. 4",
                              "B. 6",
                              "C. 8",
                              "D. 12"
                    ],
                    "correct": "A",
                    "explanation": "Hình hộp $ABCD.A'B'C'D'$ có đúng 4 đường chéo: $AC', BD', CA', DB'$. Bốn đường chéo này cắt nhau tại trung điểm của mỗi đường.",
                    "hint1": "Đếm các đoạn thẳng nối 2 đỉnh đối diện qua tâm hình hộp.",
                    "hint2": "Hình hộp có 8 đỉnh chia thành 4 cặp đối đỉnh."
          },
          {
                    "question": "**Câu 9:** Các mặt bên của một hình chóp cụt luôn là hình gì?",
                    "options": [
                              "A. Hình thang",
                              "B. Hình bình hành",
                              "C. Hình tam giác",
                              "D. Hình chữ nhật"
                    ],
                    "correct": "A",
                    "explanation": "Theo định nghĩa hình chóp cụt: Các mặt bên của hình chóp cụt luôn là những hình thang (vì hai cạnh đáy song song nằm trên 2 mặt phẳng đáy song song).",
                    "hint1": "Cắt các mặt bên tam giác của hình chóp ban đầu bởi mặt phẳng song song với đáy.",
                    "hint2": "Hai cạnh đáy đối diện song song tạo thành hình thang."
          }
]
        }
      ],
      tfQuestions: [
      {
            "id": 1,
            "title": "Câu 1: Cho hình hộp $ABCD.A'B'C'D'$. Xét tính Đúng/Sai của các khẳng định sau:",
            "items": [
                  {
                        "key": "a",
                        "text": "Mặt phẳng $(ABCD)$ song song với mặt phẳng $(A'B'C'D')$.",
                        "correct": "true",
                        "explain": "Hai đáy của hình hộp là hai hình bình hành nằm trong hai mặt phẳng song song."
                  },
                  {
                        "key": "b",
                        "text": "Đường thẳng $AA'$ song song với mặt phẳng $(CDD'C')$.",
                        "correct": "true",
                        "explain": "Vì $AA' \\parallel DD'$ mà $DD' \\subset (CDD'C') \\implies AA' \\parallel (CDD'C')$."
                  },
                  {
                        "key": "c",
                        "text": "Mặt phẳng $(BDA')$ song song với mặt phẳng $(B'D'C)$.",
                        "correct": "true",
                        "explain": "Ta có $BD \\parallel B'D'$ và $A'B \\parallel D'C$ (các mặt bên là hình bình hành) $\\implies (BDA') \\parallel (B'D'C)$."
                  },
                  {
                        "key": "d",
                        "text": "Đường chéo $AC'$ không cắt mặt phẳng $(BDA')$.",
                        "correct": "false",
                        "explain": "Đường chéo $AC'$ đi xuyên qua và cắt mặt phẳng $(BDA')$ tại trọng tâm tam giác $BDA'$."
                  }
            ]
      },
      {
            "id": 2,
            "title": "Câu 2: Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $SA, SB, SC, SD$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Mặt phẳng $(MNPQ)$ song song với mặt phẳng $(ABCD)$.",
                        "correct": "true",
                        "explain": "Do $MN \\parallel AB$ và $NP \\parallel BC$ nên $(MNPQ) \\parallel (ABCD)$."
                  },
                  {
                        "key": "b",
                        "text": "Đường thẳng $MN$ song song với mặt phẳng $(SCD)$.",
                        "correct": "true",
                        "explain": "Vì $MN \\parallel AB \\parallel CD \\subset (SCD) \\implies MN \\parallel (SCD)$."
                  },
                  {
                        "key": "c",
                        "text": "Thiết diện của hình chóp cắt bởi mặt phẳng $(MNPQ)$ là hình tam giác.",
                        "correct": "false",
                        "explain": "Thiết diện là tứ giác $MNPQ$ (hình bình hành)."
                  },
                  {
                        "key": "d",
                        "text": "Diện tích tứ giác $MNPQ$ bằng một nửa diện tích đáy $ABCD$.",
                        "correct": "false",
                        "explain": "Vì tỉ số đồng dạng là $1/2$ nên diện tích $MNPQ$ bằng $(1/2)^2 = 1/4$ diện tích đáy $ABCD$."
                  }
            ]
      },
      {
            "id": 3,
            "title": "Câu 3: Xét tính Đúng/Sai của các mệnh đề lý thuyết về quan hệ song song trong không gian:",
            "items": [
                  {
                        "key": "a",
                        "text": "Hai mặt phẳng phân biệt cùng song song với một mặt phẳng thứ ba thì song song với nhau.",
                        "correct": "true",
                        "explain": "Đây là hệ quả trực tiếp từ định nghĩa và tiên đề tồn tại duy nhất mặt phẳng song song."
                  },
                  {
                        "key": "b",
                        "text": "Nếu hai mặt phẳng song song thì mọi đường thẳng trong mặt phẳng này đều song song với mọi đường thẳng trong mặt phẳng kia.",
                        "correct": "false",
                        "explain": "Hai đường thẳng thuộc hai mặt phẳng song song có thể song song hoặc chéo nhau, không bao giờ cắt nhau."
                  },
                  {
                        "key": "c",
                        "text": "Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đó.",
                        "correct": "true",
                        "explain": "Định lí cơ bản thừa nhận trong SGK Toán 11."
                  },
                  {
                        "key": "d",
                        "text": "Nếu hai mặt phẳng phân biệt cắt nhau thì mọi đường thẳng trong mặt phẳng này đều cắt mặt phẳng kia.",
                        "correct": "false",
                        "explain": "Đường thẳng song song với giao tuyến sẽ song song với mặt phẳng kia mà không cắt."
                  }
            ]
      },
      {
            "id": 4,
            "title": "Câu 4: Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M, N, P$ lần lượt là trung điểm của các cạnh bên $AA', BB', CC'$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Mặt phẳng $(MNP)$ song song với mặt phẳng $(ABC)$.",
                        "correct": "true",
                        "explain": "$MN$ và $NP$ là đường trung bình trong các hình bình hành $ABB'A'$ và $BCC'B'$ nên $MN \\parallel AB$ và $NP \\parallel BC \\implies (MNP) \\parallel (ABC)$."
                  },
                  {
                        "key": "b",
                        "text": "Tứ giác $ABB'A'$ là hình bình hành.",
                        "correct": "true",
                        "explain": "Theo định nghĩa lăng trụ, tất cả các mặt bên luôn là hình bình hành."
                  },
                  {
                        "key": "c",
                        "text": "Đường thẳng $A'B'$ cắt mặt phẳng $(MNP)$.",
                        "correct": "false",
                        "explain": "Vì $A'B' \\parallel MN \\subset (MNP) \\implies A'B' \\parallel (MNP)$."
                  },
                  {
                        "key": "d",
                        "text": "Tam giác $MNP$ bằng tam giác $ABC$.",
                        "correct": "true",
                        "explain": "Các cạnh $MN = AB, NP = BC, PM = CA$ nên $\\triangle MNP = \\triangle ABC$."
                  }
            ]
      },
      {
            "id": 5,
            "title": "Câu 5: Cho ba mặt phẳng song song $(\\alpha), (\\beta), (\\gamma)$. Hai đường thẳng $d, d'$ cắt ba mặt phẳng tại $A, B, C$ và $A', B', C'$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Tỉ số $\\frac{AB}{BC} = \\frac{A'B'}{B'C'}$.",
                        "correct": "true",
                        "explain": "Định lí Ta-lét trong không gian khẳng định ba mặt phẳng song song chắn trên hai cát tuyến các đoạn tương ứng tỉ lệ."
                  },
                  {
                        "key": "b",
                        "text": "Hai đường thẳng $d$ và $d'$ bắt buộc phải song song với nhau.",
                        "correct": "false",
                        "explain": "Hai đường thẳng $d, d'$ có thể cắt nhau hoặc chéo nhau tuỳ ý."
                  },
                  {
                        "key": "c",
                        "text": "Nếu $B$ là trung điểm của $AC$ thì $B'$ là trung điểm của $A'C'$.",
                        "correct": "true",
                        "explain": "Do $AB/BC = 1 \\implies A'B'/B'C' = 1 \\implies B'$ là trung điểm $A'C'$."
                  },
                  {
                        "key": "d",
                        "text": "Tỉ số $\\frac{AB}{AC} = \\frac{A'B'}{A'C'}$.",
                        "correct": "true",
                        "explain": "Từ tính chất tỉ lệ thức: $AB / (AB + BC) = A'B' / (A'B' + B'C')$."
                  }
            ]
      },
      {
            "id": 6,
            "title": "Câu 6: Cho hình chóp cụt tam giác $ABC.A'B'C'$ có đáy lớn $ABC$ và đáy nhỏ $A'B'C'$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Hai mặt phẳng đáy $(ABC)$ và $(A'B'C')$ song song với nhau.",
                        "correct": "true",
                        "explain": "Định nghĩa hình chóp cụt: Hai đáy nằm trên hai mặt phẳng song song."
                  },
                  {
                        "key": "b",
                        "text": "Các đường thẳng chứa các cạnh bên $AA', BB', CC'$ đồng quy tại một điểm.",
                        "correct": "true",
                        "explain": "Chúng đồng quy tại đỉnh $S$ của hình chóp sinh ra hình chóp cụt."
                  },
                  {
                        "key": "c",
                        "text": "Mặt bên $ABB'A'$ là hình bình hành.",
                        "correct": "false",
                        "explain": "Mặt bên của hình chóp cụt là hình thang chứ không phải hình bình hành."
                  },
                  {
                        "key": "d",
                        "text": "Tam giác đáy nhỏ $A'B'C'$ đồng dạng với tam giác đáy lớn $ABC$.",
                        "correct": "true",
                        "explain": "Vì các cạnh tương ứng song song nên hai tam giác đồng dạng."
                  }
            ]
      }
],
      saQuestions: [
      {
            "id": 1,
            "question": "**Câu 1:** Một hình hộp chữ nhật có tất cả bao nhiêu đường chéo nối các đỉnh đối diện?",
            "answer": "4",
            "explain": "Hình hộp có 8 đỉnh, chia thành 4 cặp đỉnh đối diện qua tâm hình hộp, do đó có 4 đường chéo."
      },
      {
            "id": 2,
            "question": "**Câu 2:** Cho hình lăng trụ ngũ giác. Hỏi hình lăng trụ này có tất cả bao nhiêu cạnh?",
            "answer": "15",
            "explain": "Lăng trụ đáy ngũ giác (5 cạnh) có: 5 cạnh đáy dưới + 5 cạnh đáy trên + 5 cạnh bên = 15 cạnh."
      },
      {
            "id": 3,
            "question": "**Câu 3:** Cho ba mặt phẳng song song cắt hai đường thẳng $a$ và $b$ lần lượt tại $A, B, C$ và $A', B', C'$. Biết $AB = 4$, $BC = 8$ và $A'B' = 5$. Tính độ dài đoạn thẳng $B'C'$.",
            "answer": "10",
            "explain": "Theo định lí Ta-lét: A'B' / B'C' = AB / BC = 4 / 8 = 1/2. Suy ra B'C' = 2 * A'B' = 2 * 5 = 10."
      },
      {
            "id": 4,
            "question": "**Câu 4:** Một hình chóp cụt có đáy lớn là đa giác 8 cạnh. Hỏi hình chóp cụt này có bao nhiêu mặt?",
            "answer": "10",
            "explain": "Hình chóp cụt đáy bát giác có: 2 mặt đáy (đáy lớn, đáy nhỏ) + 8 mặt bên (hình thang) = 10 mặt."
      }
]
    },

    // =========================================================================
    // BÀI 14: PHÉP CHIẾU SONG SONG (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai14": {
      id: "toan11_bai14",
      lessonTitle: "Bài 14: Phép chiếu song song",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 14") || t.includes("phép chiếu song song")) && !t.includes("phương trình mặt phẳng") && !t.includes("phân tán");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm & Các tính chất cơ bản của phép chiếu song song",
          theory: createStandardTheoryHTML(
            "Bài 14: Phép chiếu song song", "Lớp 11", 1,
            "Mục 1: Khái niệm & Các tính chất cơ bản của phép chiếu song song",
            `<p>Nội dung cốt lõi Mục 1 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Định nghĩa phép chiếu song song:</strong> Cho mặt phẳng $(\\alpha)$ và đường thẳng $\\Delta$ cắt $(\\alpha)$. Phép đặt tương ứng mỗi điểm $M$ với giao điểm $M'$ của đường thẳng qua $M$ song song với $\\Delta$ (hoặc trùng $\\Delta$) với $(\\alpha)$ gọi là phép chiếu song song lên $(\\alpha)$ theo phương $\\Delta$.</li>
  <li><strong>2. Tính chất 1 (Thẳng hàng):</strong> Phép chiếu song song biến ba điểm thẳng hàng thành ba điểm thẳng hàng và bảo toàn thứ tự giữa các điểm đó.</li>
  <li><strong>3. Tính chất 2 (Hình dạng cơ bản):</strong> Biến đường thẳng thành đường thẳng, biến tia thành tia, biến đoạn thẳng thành đoạn thẳng.</li>
  <li><strong>4. Tính chất 3 (Tính song song):</strong> Biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau.</li>
  <li><strong>5. Tính chất 4 (Tỉ số độ dài):</strong> Bảo toàn tỉ số độ dài của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc nằm trên hai đường thẳng song song.</li>
</ul>`,
            `Phép chiếu song song <strong>không bảo toàn</strong> độ lớn góc, khoảng cách và diện tích. Hai đường thẳng vuông góc nói chung không chiếu thành hai đường thẳng vuông góc.`,
            `Hiểu lầm rằng phép chiếu song song luôn giữ nguyên độ dài đoạn thẳng. Đoạn thẳng chiếu nói chung sẽ bị co ngắn lại (hoặc bằng nhau khi song song mặt phẳng chiếu).`,
            `Ghi nhớ nguyên tắc: Trung điểm chiếu thành trung điểm, trọng tâm chiếu thành trọng tâm, tỉ số đoạn thẳng cùng phương được giữ nguyên 100%!`
          ),
          mcqs: [
          {
                    "question": "**Câu 1:** Trong các tính chất sau của hình học phẳng, tính chất nào KHÔNG ĐƯỢC bảo toàn qua phép chiếu song song?",
                    "options": [
                              "A. Độ lớn của góc và tính vuông góc",
                              "B. Tính thẳng hàng và thứ tự các điểm",
                              "C. Tính song song của hai đường thẳng",
                              "D. Tỉ số độ dài của hai đoạn thẳng cùng phương"
                    ],
                    "correct": "A",
                    "explanation": "Phép chiếu song song làm biến dạng góc và khoảng cách, do đó tính vuông góc và độ lớn góc không được bảo toàn.",
                    "hint1": "Xem lại các yếu tố bị biến dạng qua phép chiếu.",
                    "hint2": "Góc vuông có thể chiếu thành góc nhọn hoặc góc tù."
          },
          {
                    "question": "**Câu 2:** Phép chiếu song song biến hai đường thẳng song song trong không gian thành hai đường thẳng:",
                    "options": [
                              "A. Song song hoặc trùng nhau",
                              "B. Cắt nhau",
                              "C. Chéo nhau",
                              "D. Vuông góc"
                    ],
                    "correct": "A",
                    "explanation": "Theo tính chất 3 của phép chiếu song song: Hai đường thẳng song song chiếu thành hai đường thẳng song song hoặc trùng nhau (khi mặt phẳng chứa chúng chứa phương chiếu).",
                    "hint1": "Tính chất song song của phép chiếu.",
                    "hint2": "Không thể cắt nhau hay chéo nhau."
          },
          {
                    "question": "**Câu 3:** Cho đoạn thẳng $AB$ có trung điểm $M$. Qua phép chiếu song song lên mặt phẳng $(P)$, đoạn thẳng $AB$ biến thành $A'B'$ và $M$ biến thành $M'$. Khẳng định nào sau đây ĐÚNG?",
                    "options": [
                              "A. $M'$ là trung điểm của đoạn thẳng $A'B'$",
                              "B. $M'$ nằm ngoài đoạn thẳng $A'B'$",
                              "C. $A'M' = 2M'B'$",
                              "D. $M'$ trùng với đỉnh $A'$"
                    ],
                    "correct": "A",
                    "explanation": "Phép chiếu song song bảo toàn tỉ số của các đoạn thẳng cùng nằm trên một đường thẳng, nên tỉ số $AM/MB = 1 \\implies A'M'/M'B' = 1 \\implies M'$ là trung điểm $A'B'$.",
                    "hint1": "Bảo toàn tỉ số độ dài.",
                    "hint2": "Trung điểm biến thành trung điểm."
          }
]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Hình biểu diễn của một hình không gian trên mặt phẳng",
          theory: createStandardTheoryHTML(
            "Bài 14: Phép chiếu song song", "Lớp 11", 2,
            "Mục 2: Hình biểu diễn của một hình không gian trên mặt phẳng",
            `<p>Nội dung cốt lõi Mục 2 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Khái niệm:</strong> Hình biểu diễn của một hình trong không gian là hình chiếu song song của hình đó trên một mặt phẳng hoặc hình đồng dạng với hình chiếu đó.</li>
  <li><strong>2. Tam giác:</strong> Hình biểu diễn của một tam giác bất kì (đều, cân, vuông) là một tam giác tuỳ ý.</li>
  <li><strong>3. Tứ giác đặc biệt:</strong> Hình biểu diễn của hình bình hành, hình chữ nhật, hình thoi, hình vuông đều là một hình bình hành.</li>
  <li><strong>4. Hình thang:</strong> Hình biểu diễn của hình thang là một hình thang với tỉ số độ dài hai đáy được bảo toàn.</li>
  <li><strong>5. Đường tròn:</strong> Hình biểu diễn của một đường tròn thường là một hình elip.</li>
</ul>`,
            `Khi vẽ hình biểu diễn của hình thang có đáy lớn gấp đôi đáy nhỏ, trên hình vẽ bắt buộc phải vẽ đoạn đáy lớn dài đúng gấp đôi đoạn đáy nhỏ!`,
            `Vẽ hình biểu diễn của tam giác đều là tam giác đều, hoặc cố vẽ góc vuông ở chân hình chóp bằng góc 90 độ khiến hình vẽ bị bẹp, sai quy chuẩn biểu diễn.`,
            `Quy tắc vàng vẽ đáy: Đáy hình vuông, hình chữ nhật hay hình thoi đều vẽ thành hình bình hành nghiêng để tạo chiều sâu không gian!`
          ),
          mcqs: [
          {
                    "question": "**Câu 4:** Hình biểu diễn của một hình vuông trong không gian lên một mặt phẳng bất kì là hình gì?",
                    "options": [
                              "A. Hình bình hành",
                              "B. Hình chữ nhật",
                              "C. Hình thoi",
                              "D. Hình thang"
                    ],
                    "correct": "A",
                    "explanation": "Vì phép chiếu song song bảo toàn tính song song của các cặp cạnh đối nhưng không bảo toàn góc vuông và độ dài cạnh kề, nên hình vuông biểu diễn thành hình bình hành.",
                    "hint1": "Các cặp cạnh đối song song được bảo toàn.",
                    "hint2": "Góc vuông không được bảo toàn."
          },
          {
                    "question": "**Câu 5:** Hình biểu diễn của một đường tròn trên một mặt phẳng nói chung là hình gì?",
                    "options": [
                              "A. Hình elip",
                              "B. Hình tròn",
                              "C. Hình parabol",
                              "D. Đoạn thẳng"
                    ],
                    "correct": "A",
                    "explanation": "Theo SGK Toán 11, hình biểu diễn của đường tròn nói chung là hình elip.",
                    "hint1": "Xem lại hình biểu diễn đường tròn.",
                    "hint2": "Đường cong bậc hai khép kín."
          },
          {
                    "question": "**Câu 6:** Khi vẽ hình biểu diễn của hình thang $ABCD$ có đáy lớn $AB = 3CD$, hình biểu diễn $A'B'C'D'$ phải thỏa mãn điều kiện nào sau đây?",
                    "options": [
                              "A. $A'B' \\parallel C'D'$ và $A'B' = 3C'D'$",
                              "B. $A'B' = C'D'$ và $A'B' \\parallel C'D'$",
                              "C. $A'D' = B'C'$",
                              "D. $A'B' \\perp A'D'$"
                    ],
                    "correct": "A",
                    "explanation": "Phép chiếu song song bảo toàn tính song song và tỉ số độ dài hai đoạn thẳng song song, nên $A'B' \\parallel C'D'$ và $A'B' = 3C'D'$.",
                    "hint1": "Tính chất bảo toàn tỉ số hai đoạn thẳng song song.",
                    "hint2": "Đáy lớn dài gấp 3 lần đáy nhỏ."
          }
]
        },
        {
          sectionNumber: 3,
          sectionTitle: "Mục 3: Kỹ năng vẽ hình không gian chuẩn xác & Giải toán bằng phép chiếu",
          theory: createStandardTheoryHTML(
            "Bài 14: Phép chiếu song song", "Lớp 11", 3,
            "Mục 3: Kỹ năng vẽ hình không gian chuẩn xác & Giải toán bằng phép chiếu",
            `<p>Nội dung cốt lõi Mục 3 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Quy ước đường nét:</strong> Đường nhìn thấy vẽ nét liền (solid), đường bị che khuất vẽ nét đứt đoạn (dashed).</li>
  <li><strong>2. Biểu diễn trọng tâm:</strong> Trọng tâm $G$ của $\\triangle ABC$ chiếu thành trọng tâm $G'$ của tam giác ảnh $\\triangle A'B'C'$.</li>
  <li><strong>3. Ứng dụng giải toán:</strong> Sử dụng phép chiếu song song để tính tỉ số đoạn thẳng, xác định giao điểm của đường thẳng và mặt phẳng, và tìm thiết diện.</li>
  <li><strong>4. Hiện tượng thực tế:</strong> Bóng của vật thể dưới ánh sáng mặt trời là một ví dụ trực quan về phép chiếu song song trên mặt đất.</li>
</ul>`,
            `Đỉnh của hình chóp có đường cao vuông góc với đáy (như $SA \\perp (ABCD)$) phải được dựng thẳng đứng vuông góc với mép dưới của trang giấy để tạo góc nhìn trực quan.`,
            `Quên chuyển cạnh khuất thành nét đứt đoạn, khiến hình vẽ trở thành khối trong suốt hoặc sai chiều sâu không gian.`,
            `Khi vẽ hình chóp, hãy vẽ mặt phẳng đáy trước, xác định tâm hoặc chân đường cao rồi dựng thẳng đứng lên đỉnh $S$!`
          ),
          mcqs: [
          {
                    "question": "**Câu 7:** Trong quy ước vẽ hình học không gian, các cạnh hoặc đường thẳng bị che khuất bắt buộc phải vẽ bằng nét gì?",
                    "options": [
                              "A. Nét đứt đoạn",
                              "B. Nét liền đậm",
                              "C. Nét gạch chấm",
                              "D. Nét đôi"
                    ],
                    "correct": "A",
                    "explanation": "Quy ước chuẩn SGK và Bộ GD&ĐT: Cạnh nhìn thấy vẽ nét liền, cạnh bị che khuất vẽ nét đứt đoạn.",
                    "hint1": "Quy ước nét vẽ hình học không gian.",
                    "hint2": "Nét đứt đoạn (dashed line)."
          },
          {
                    "question": "**Câu 8:** Cho tam giác $ABC$ có trọng tâm $G$. Qua phép chiếu song song lên mặt phẳng $(P)$, tam giác $ABC$ biến thành tam giác $A'B'C'$ và điểm $G$ biến thành $G'$. Khi đó:",
                    "options": [
                              "A. $G'$ là trọng tâm của tam giác $A'B'C'$",
                              "B. $G'$ là trực tâm của tam giác $A'B'C'$",
                              "C. $G'$ là tâm ngoại tiếp tam giác $A'B'C'$",
                              "D. $G'$ là tâm nội tiếp tam giác $A'B'C'$"
                    ],
                    "correct": "A",
                    "explanation": "Do phép chiếu song song biến trung điểm thành trung điểm và bảo toàn tỉ số $2/3$ trên trung tuyến, nên trọng tâm biến thành trọng tâm.",
                    "hint1": "Trọng tâm chia trung tuyến theo tỉ số 2/3.",
                    "hint2": "Tỉ số được bảo toàn."
          },
          {
                    "question": "**Câu 9:** Để xác định hình chiếu song song của điểm $M$ lên mặt phẳng $(\\alpha)$ theo phương $\\Delta$ (với $\\Delta$ cắt $(\\alpha)$), ta làm như sau:",
                    "options": [
                              "A. Kẻ đường thẳng qua $M$ song song với $\\Delta$ cắt $(\\alpha)$ tại $M'$",
                              "B. Kẻ đường thẳng qua $M$ vuông góc với $(\\alpha)$",
                              "C. Nối $M$ với gốc toạ độ",
                              "D. Kẻ đường thẳng qua $M$ vuông góc với $\\Delta$"
                    ],
                    "correct": "A",
                    "explanation": "Theo đúng định nghĩa: Qua $M$ vẽ đường thẳng $d \\parallel \\Delta$, giao điểm của $d$ với $(\\alpha)$ chính là hình chiếu $M'$.",
                    "hint1": "Định nghĩa phép chiếu theo phương Delta.",
                    "hint2": "Đường thẳng qua M song song Delta."
          }
]
        }
      ],
      tfQuestions: [
      {
            "id": 1,
            "title": "Câu 1: Cho phép chiếu song song lên mặt phẳng $(P)$ theo phương $\\Delta$ cắt $(P)$. Xét tính Đúng/Sai của các mệnh đề:",
            "items": [
                  {
                        "key": "a",
                        "text": "Phép chiếu song song bảo toàn tính thẳng hàng của ba điểm.",
                        "correct": "true",
                        "explain": "Tính chất 1 của phép chiếu song song."
                  },
                  {
                        "key": "b",
                        "text": "Phép chiếu song song luôn biến hai đường thẳng chéo nhau thành hai đường thẳng song song.",
                        "correct": "false",
                        "explain": "Hai đường thẳng chéo nhau thường có hình chiếu cắt nhau trên mặt phẳng chiếu."
                  },
                  {
                        "key": "c",
                        "text": "Phép chiếu song song bảo toàn tỉ số độ dài của hai đoạn thẳng nằm trên hai đường thẳng song song.",
                        "correct": "true",
                        "explain": "Tính chất 4 của phép chiếu song song."
                  },
                  {
                        "key": "d",
                        "text": "Phép chiếu song song bảo toàn góc giữa hai đường thẳng.",
                        "correct": "false",
                        "explain": "Góc bị biến dạng qua phép chiếu song song."
                  }
            ]
      },
      {
            "id": 2,
            "title": "Câu 2: Về hình biểu diễn của các hình phẳng trong không gian:",
            "items": [
                  {
                        "key": "a",
                        "text": "Hình biểu diễn của một tam giác đều có thể là một tam giác có một góc tù.",
                        "correct": "true",
                        "explain": "Hình biểu diễn của tam giác bất kì là một tam giác tuỳ ý."
                  },
                  {
                        "key": "b",
                        "text": "Hình biểu diễn của một hình chữ nhật luôn là một hình chữ nhật.",
                        "correct": "false",
                        "explain": "Hình biểu diễn của hình chữ nhật nói chung là hình bình hành."
                  },
                  {
                        "key": "c",
                        "text": "Hình biểu diễn của một đường tròn có thể là một đoạn thẳng.",
                        "correct": "true",
                        "explain": "Khi mặt phẳng chứa đường tròn song song với phương chiếu, hình chiếu là đoạn thẳng có độ dài bằng đường kính."
                  },
                  {
                        "key": "d",
                        "text": "Hình biểu diễn của một hình thoi luôn là một hình thoi.",
                        "correct": "false",
                        "explain": "Hình biểu diễn của hình thoi là hình bình hành."
                  }
            ]
      },
      {
            "id": 3,
            "title": "Câu 3: Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Chiếu song song hình chóp lên mặt phẳng $(ABCD)$ theo phương $SA$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Hình chiếu của điểm $S$ là điểm $A$.",
                        "correct": "true",
                        "explain": "Vì phương chiếu là $SA$ nên đường thẳng qua $S$ theo phương $SA$ cắt đáy tại $A$."
                  },
                  {
                        "key": "b",
                        "text": "Hình chiếu của điểm $A$ là chính điểm $A$.",
                        "correct": "true",
                        "explain": "Điểm $A$ thuộc mặt phẳng chiếu nên hình chiếu là chính nó."
                  },
                  {
                        "key": "c",
                        "text": "Tam giác $SAB$ có hình chiếu là đoạn thẳng $AB$.",
                        "correct": "true",
                        "explain": "Điểm $S$ biến thành $A$, cạnh $AB$ nằm trên mặt đáy biến thành chính nó."
                  },
                  {
                        "key": "d",
                        "text": "Toàn bộ hình chóp có hình chiếu là hình bình hành $ABCD$.",
                        "correct": "true",
                        "explain": "Các đỉnh $S \\to A, B \\to B, C \\to C, D \\to D$, bao lồi là hình bình hành $ABCD$."
                  }
            ]
      },
      {
            "id": 4,
            "title": "Câu 4: Cho hình hộp $ABCD.A'B'C'D'$. Xét phép chiếu song song lên mặt phẳng $(ABCD)$ theo phương $AA'$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Đỉnh $A'$ có hình chiếu là đỉnh $A$.",
                        "correct": "true",
                        "explain": "Phương chiếu là $AA'$ nên $A'$ chiếu thành $A$."
                  },
                  {
                        "key": "b",
                        "text": "Đỉnh $C'$ có hình chiếu là đỉnh $C$.",
                        "correct": "true",
                        "explain": "Vì $CC' \\parallel AA'$ nên đường thẳng qua $C'$ song song $AA'$ cắt đáy tại $C$."
                  },
                  {
                        "key": "c",
                        "text": "Đoạn thẳng $A'C'$ có hình chiếu là đoạn thẳng $AC$.",
                        "correct": "true",
                        "explain": "Đoạn thẳng nối 2 đỉnh đáy trên chiếu thành đoạn thẳng nối 2 đỉnh đáy dưới."
                  },
                  {
                        "key": "d",
                        "text": "Tứ giác $A'B'C'D'$ có hình chiếu là hình bình hành $ABCD$.",
                        "correct": "true",
                        "explain": "Hai đáy song song chiếu thẳng đứng thành nhau."
                  }
            ]
      },
      {
            "id": 5,
            "title": "Câu 5: Xét tính Đúng/Sai của các khẳng định toán học sau:",
            "items": [
                  {
                        "key": "a",
                        "text": "Phép chiếu song song biến trung điểm của một đoạn thẳng thành trung điểm của đoạn thẳng ảnh.",
                        "correct": "true",
                        "explain": "Do tỉ số $1:1$ được bảo toàn."
                  },
                  {
                        "key": "b",
                        "text": "Phép chiếu song song biến hai đường thẳng vuông góc thành hai đường thẳng vuông góc.",
                        "correct": "false",
                        "explain": "Góc vuông bị biến dạng thành góc nhọn hoặc góc tù."
                  },
                  {
                        "key": "c",
                        "text": "Phép chiếu song song biến trọng tâm của tam giác thành trọng tâm của tam giác ảnh.",
                        "correct": "true",
                        "explain": "Trọng tâm chia trung tuyến theo tỉ số $2:1$, tỉ số này được bảo toàn."
                  },
                  {
                        "key": "d",
                        "text": "Diện tích của hình phẳng luôn bằng diện tích của hình chiếu song song của nó.",
                        "correct": "false",
                        "explain": "Diện tích bị thu hẹp theo công thức $S' = S \\cdot \\cos \\varphi$."
                  }
            ]
      },
      {
            "id": 6,
            "title": "Câu 6: Về bài toán bóng của vật thể dưới ánh nắng mặt trời:",
            "items": [
                  {
                        "key": "a",
                        "text": "Các tia sáng mặt trời chiếu xuống mặt đất được mô hình hóa là các đường thẳng song song.",
                        "correct": "true",
                        "explain": "Khoảng cách từ Mặt Trời đến Trái Đất rất lớn nên chùm sáng chiếu xuống xem như chùm tia song song."
                  },
                  {
                        "key": "b",
                        "text": "Bóng của một chiếc cọc cắm thẳng đứng trên sân phẳng là hình chiếu song song của chiếc cọc.",
                        "correct": "true",
                        "explain": "Phương chiếu chính là phương của tia nắng mặt trời."
                  },
                  {
                        "key": "c",
                        "text": "Cùng thời điểm, hai chiếc cọc cùng chiều cao cắm thẳng đứng trên sân phẳng có bóng dài bằng nhau.",
                        "correct": "true",
                        "explain": "Vì cùng phương chiếu và góc nghiêng của tia sáng như nhau."
                  },
                  {
                        "key": "d",
                        "text": "Tỉ số giữa chiều cao của cọc và độ dài bóng phụ thuộc vào chiều cao của cọc.",
                        "correct": "false",
                        "explain": "Tỉ số này bằng $\\tan \\alpha$ (với $\\alpha$ là góc nâng mặt trời), hoàn toàn không phụ thuộc vào chiều cao cọc."
                  }
            ]
      }
],
      saQuestions: [
      {
            "id": 1,
            "question": "**Câu 1:** Một đoạn thẳng $AB$ có độ dài $15\\text{ cm}$. Điểm $C$ thuộc đoạn $AB$ sao cho $AC = 5\\text{ cm}$. Phép chiếu song song biến đoạn $AB$ thành đoạn $A'B'$ có độ dài $24\\text{ cm}$, và điểm $C$ biến thành $C'$. Tính độ dài đoạn thẳng $A'C'$ (cm).",
            "answer": "8",
            "explain": "Tỉ số: A'C' / A'B' = AC / AB = 5 / 15 = 1/3. Do đó A'C' = 24 / 3 = 8 cm."
      },
      {
            "id": 2,
            "question": "**Câu 2:** Cho tam giác $ABC$ có diện tích bằng $30\\text{ cm}^2$. Gọi $M$ là trung điểm cạnh $BC$. Qua phép chiếu song song lên mặt phẳng $(P)$, tam giác $ABC$ biến thành tam giác $A'B'C'$ có diện tích $40\\text{ cm}^2$. Điểm $M$ biến thành $M'$. Tính diện tích của tam giác $A'B'M'$ (cm²).",
            "answer": "20",
            "explain": "Vì M' là trung điểm B'C' nên tam giác A'B'M' có diện tích bằng một nửa diện tích tam giác A'B'C': 40 / 2 = 20 cm²."
      },
      {
            "id": 3,
            "question": "**Câu 3:** Một hình bình hành trong không gian khi chiếu song song lên một mặt phẳng có thể tạo ra hình biểu diễn có tối đa bao nhiêu đỉnh?",
            "answer": "4",
            "explain": "Hình biểu diễn của hình bình hành là một hình bình hành (4 đỉnh) hoặc suy biến thành một đoạn thẳng (2 đầu mút). Vậy tối đa là 4 đỉnh."
      },
      {
            "id": 4,
            "question": "**Câu 4:** Một chiếc cọc thẳng đứng cao $1.6\\text{ m}$ có bóng trên mặt đất dài $1.2\\text{ m}$. Cùng thời điểm đó, một toà nhà có bóng trên mặt đất dài $15\\text{ m}$. Hỏi chiều cao của toà nhà là bao nhiêu mét?",
            "answer": "20",
            "explain": "Tỉ số chiều cao và bóng: h / 15 = 1.6 / 1.2 = 4/3. Suy ra chiều cao tòa nhà h = 15 * 4 / 3 = 20 mét."
      }
]
    },

    // =========================================================================
    // BÀI TẬP CUỐI CHƯƠNG IV: QUAN HỆ SONG SONG TRONG KHÔNG GIAN (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_ontap_c4": {
      id: "toan11_ontap_c4",
      lessonTitle: "Bài tập cuối chương IV: Quan hệ song song trong không gian",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("ôn tập chương 4") || t.includes("cuối chương iv") || t.includes("cuối chương 4") || t.includes("ôn tập chương iv")) && (t.includes("toán 11") || t.includes("lớp 11") || !t.includes("toán 12"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Hệ thống hóa kiến thức toàn chương & Sơ đồ tư duy 4 quan hệ song song",
          theory: createStandardTheoryHTML(
            "Bài tập cuối chương IV: Quan hệ song song trong không gian", "Lớp 11", 1,
            "Mục 1: Hệ thống hóa kiến thức toàn chương & Sơ đồ tư duy 4 quan hệ song song",
            `<p>Hệ thống hóa toàn bộ kiến thức Chương IV SGK Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Đường thẳng và mặt phẳng trong không gian (Bài 10):</strong> 6 tính chất thừa nhận, 3 cách xác định mặt phẳng (3 điểm không thẳng hàng, 1 đường và 1 điểm ngoài, 2 đường cắt nhau), kỹ thuật tìm giao tuyến và thiết diện.</li>
  <li><strong>2. Hai đường thẳng song song (Bài 11):</strong> 4 vị trí tương đối (trùng nhau, song song, cắt nhau, chéo nhau), Định lí ba giao tuyến song song hoặc đồng quy.</li>
  <li><strong>3. Đường thẳng và mặt phẳng song song (Bài 12):</strong> Điều kiện $d \\not\\subset (P), d \\parallel a \\subset (P) \\implies d \\parallel (P)$; định lí giao tuyến song song.</li>
  <li><strong>4. Hai mặt phẳng song song & Phép chiếu (Bài 13, 14):</strong> Điều kiện chứa 2 đường cắt nhau; Định lí Ta-lét trong không gian; Hình lăng trụ, hình hộp, hình chóp cụt; Các tính chất bảo toàn của phép chiếu song song.</li>
</ul>`,
            `Sơ đồ tư duy mắt xích: Muốn chứng minh mặt // mặt $\\to$ đưa về đường // mặt $\\to$ đưa về đường // đường $\\to$ dùng định lí phẳng (đường trung bình, Ta-lét).`,
            `Nhầm lẫn giữa quan hệ chéo nhau và quan hệ song song trong không gian. Hai đường thẳng không có điểm chung có thể song song hoặc chéo nhau!`,
            `Khi làm bài thi, luôn xác định rõ bài toán thuộc quan hệ nào trong 4 quan hệ chính để chọn định lí tương ứng!`
          ),
          mcqs: [
          {
                    "question": "**Câu 1:** Trong không gian, hai đường thẳng không có bất kì điểm chung nào thì:",
                    "options": [
                              "A. Song song hoặc chéo nhau",
                              "B. Song song với nhau",
                              "C. Chéo nhau",
                              "D. Cắt nhau"
                    ],
                    "correct": "A",
                    "explanation": "Nếu hai đường thẳng đồng phẳng mà không có điểm chung thì song song; nếu không đồng phẳng thì chéo nhau.",
                    "hint1": "Hai đường thẳng không có điểm chung trong không gian.",
                    "hint2": "Có thể cùng nằm trong một mặt phẳng hoặc không đồng phẳng."
          },
          {
                    "question": "**Câu 2:** Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì mặt phẳng $(Q)$ chứa $a$ và cắt $(P)$ theo giao tuyến $b$. Khi đó vị trí tương đối giữa $a$ và $b$ là:",
                    "options": [
                              "A. $a \\parallel b$",
                              "B. $a$ cắt $b$",
                              "C. $a$ chéo $b$",
                              "D. $a \\perp b$"
                    ],
                    "correct": "A",
                    "explanation": "Theo Định lí giao tuyến: Mặt phẳng chứa một đường thẳng song song với mặt phẳng kia thì cắt mặt phẳng kia theo giao tuyến song song với đường thẳng đó.",
                    "hint1": "Định lí 2 Bài 12 Toán 11 KNTT.",
                    "hint2": "a và b cùng nằm trên mặt phẳng (Q) và không có điểm chung."
          },
          {
                    "question": "**Câu 3:** Điều kiện cần và đủ để hai mặt phẳng phân biệt song song với nhau là:",
                    "options": [
                              "A. Mặt phẳng này chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng kia",
                              "B. Mặt phẳng này chứa một đường thẳng song song với mặt phẳng kia",
                              "C. Cả hai mặt phẳng cùng không cắt một đường thẳng thứ ba",
                              "D. Mặt phẳng này chứa hai đường thẳng song song với nhau"
                    ],
                    "correct": "A",
                    "explanation": "Theo Định lí 1 Bài 13: Hai đường thẳng cắt nhau trong mặt phẳng này cùng song song với mặt phẳng kia là điều kiện đủ để hai mặt phẳng song song.",
                    "hint1": "Định lí điều kiện hai mặt phẳng song song.",
                    "hint2": "Cần 2 đường thẳng cắt nhau."
          }
]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: 4 Dạng toán cốt lõi & Phương pháp giải kinh điển",
          theory: createStandardTheoryHTML(
            "Bài tập cuối chương IV: Quan hệ song song trong không gian", "Lớp 11", 2,
            "Mục 2: 4 Dạng toán cốt lõi & Phương pháp giải kinh điển",
            `<p>Nội dung cốt lõi Mục 2 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Dạng 1 - Tìm giao tuyến hai mặt phẳng:</strong> Tìm 2 điểm chung phân biệt, hoặc 1 điểm chung và phương song song (dùng định lí giao tuyến song song).</li>
  <li><strong>2. Dạng 2 - Tìm giao điểm của đường thẳng $d$ và mặt phẳng $(P)$:</strong> Chọn mặt phẳng phụ $(Q) \\supset d$, tìm giao tuyến $a = (P) \\cap (Q)$, khi đó giao điểm $M = d \\cap a$.</li>
  <li><strong>3. Dạng 3 - Chứng minh quan hệ song song:</strong> Sử dụng đường trung bình, Ta-lét, hình bình hành hoặc định lí ba giao tuyến.</li>
  <li><strong>4. Dạng 4 - Xác định thiết diện:</strong> Tìm giao tuyến của mặt phẳng cắt với tất cả các mặt của hình chóp hoặc hình lăng trụ, khép kín thành đa giác.</li>
</ul>`,
            `Khi hai mặt phẳng chứa hai đường thẳng song song, giao tuyến của chúng (nếu có) phải đi qua điểm chung và song song với hai đường thẳng đó!`,
            `Kéo dài hai đường thẳng chéo nhau (không đồng phẳng) cho cắt nhau. Luôn kiểm tra xem hai đường thẳng có nằm trong cùng một mặt phẳng trước khi lấy giao điểm!`,
            `Quy tắc 4 bước dựng thiết diện: 1. Tìm điểm chung sẵn có $\\to$ 2. Kẻ đường song song $\\to$ 3. Cắt các cạnh bên $\\to$ 4. Nối kín đa giác!`
          ),
          mcqs: [
          {
                    "question": "**Câu 4:** Cho hình chóp $S.ABCD$ có đáy là hình thang ($AB \\parallel CD$). Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
                    "options": [
                              "A. Đường thẳng đi qua $S$ và song song với $AB, CD$",
                              "B. Đường thẳng $SO$ với $O$ là giao điểm $AC$ và $BD$",
                              "C. Đường thẳng $SI$ với $I$ là giao điểm $AD$ và $BC$",
                              "D. Đường thẳng qua $S$ vuông góc với $(ABCD)$"
                    ],
                    "correct": "A",
                    "explanation": "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ và lần lượt chứa hai đường thẳng song song $AB \\parallel CD$, nên giao tuyến đi qua $S$ và song song với $AB$ và $CD$.",
                    "hint1": "Định lí giao tuyến của hai mặt phẳng chứa 2 đường song song.",
                    "hint2": "Đường thẳng qua S song song AB."
          },
          {
                    "question": "**Câu 5:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành tâm $O$. Gọi $M$ là trung điểm của $SC$. Giao điểm của đường thẳng $SO$ và mặt phẳng $(ABM)$ là:",
                    "options": [
                              "A. Trọng tâm của tam giác $SAC$",
                              "B. Trung điểm của đoạn thẳng $SO$",
                              "C. Điểm $O$",
                              "D. Điểm $S$"
                    ],
                    "correct": "A",
                    "explanation": "Trong mặt phẳng phụ $(SAC)$, $SO$ và $AM$ là hai đường trung tuyến của tam giác $SAC$. Chúng cắt nhau tại trọng tâm $G$ của tam giác $SAC$. Điểm $G$ thuộc $AM \\subset (ABM)$ nên $G$ chính là giao điểm cần tìm.",
                    "hint1": "Xét mặt phẳng phụ (SAC) chứa SO.",
                    "hint2": "Giao điểm của 2 trung tuyến SO và AM."
          },
          {
                    "question": "**Câu 6:** Thiết diện của hình chóp tứ giác cắt bởi một mặt phẳng song song với mặt phẳng đáy là một đa giác có bao nhiêu cạnh?",
                    "options": [
                              "A. 4 cạnh",
                              "B. 3 cạnh",
                              "C. 5 cạnh",
                              "D. 6 cạnh"
                    ],
                    "correct": "A",
                    "explanation": "Mặt phẳng cắt cả 4 mặt bên của hình chóp tứ giác tạo thành thiết diện là một tứ giác (4 cạnh) đồng dạng với tứ giác đáy.",
                    "hint1": "Mặt phẳng cắt qua các mặt bên của hình chóp tứ giác.",
                    "hint2": "Tứ giác có 4 cạnh."
          }
]
        },
        {
          sectionNumber: 3,
          sectionTitle: "Mục 3: Luyện đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT 2025",
          theory: createStandardTheoryHTML(
            "Bài tập cuối chương IV: Quan hệ song song trong không gian", "Lớp 11", 3,
            "Mục 3: Luyện đề tổng hợp chuẩn cấu trúc Bộ GD&ĐT 2025",
            `<p>Nội dung cốt lõi Mục 3 Sách giáo khoa Toán 11 Kết Nối Tri Thức:</p>
<ul class="list-disc ml-5 space-y-1.5">
  <li><strong>1. Cấu trúc đề thi mới Bộ GD&ĐT:</strong> Gồm 3 phần: Phần I - Trắc nghiệm nhiều lựa chọn; Phần II - Trắc nghiệm Đúng/Sai (yêu cầu phân tích sâu); Phần III - Trả lời ngắn (điền kết quả số học).</li>
  <li><strong>2. Tổng ôn các định lí mấu chốt:</strong> Định lí 3 giao tuyến, Định lí Ta-lét trong không gian, Định lí điều kiện song song.</li>
  <li><strong>3. Kỹ năng làm bài tốc độ & chính xác:</strong> Vẽ hình tối giản, nhìn nhận nhanh quan hệ song song qua đường trung bình, nhận biết nhanh thiết diện đặc biệt.</li>
  <li><strong>4. Ứng dụng bài toán thực tế:</strong> Khối lăng trụ, chóp cụt, tính toán bậc thang, thanh giằng giàn không gian.</li>
</ul>`,
            `Ở Phần II Đúng/Sai, cần kiểm tra kỹ từng mệnh đề độc lập. Chỉ cần 1 trường hợp suy biến sai là mệnh đề khẳng định tuyệt đối sẽ mang giá trị SAI!`,
            `Chủ quan làm tròn số ở Phần III Trả lời ngắn. Phải đọc kỹ yêu cầu làm tròn đến hàng đơn vị, chữ số thập phân thứ nhất hay phân số tối giản!`,
            `Nắm vững công thức đếm đỉnh, cạnh, mặt của các khối đa diện để trả lời nhanh gọn các câu hỏi điền số Phần III!`
          ),
          mcqs: [
          {
                    "question": "**Câu 7:** Cho hình lăng trụ $ABC.A'B'C'$. Gọi $I, J, K$ lần lượt là trọng tâm các tam giác $ABC, ACC', A'B'C'$. Mặt phẳng $(IJK)$ song song với mặt phẳng nào sau đây?",
                    "options": [
                              "A. $(BB'C'C)$",
                              "B. $(ABC)$",
                              "C. $(AA'B'B)$",
                              "D. $(AA'C'C)$"
                    ],
                    "correct": "A",
                    "explanation": "Sử dụng tính chất trọng tâm và phép chiếu, ta có $IJ \\parallel BC'$ và $IK \\parallel BB'$, do đó mặt phẳng $(IJK) \\parallel (BB'C'C)$.",
                    "hint1": "Xét tỉ số các trọng tâm trên các đường trung tuyến.",
                    "hint2": "Song song với mặt bên (BB'C'C)."
          },
          {
                    "question": "**Câu 8:** Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Mặt phẳng $(\\alpha)$ chứa $MN$ và song song với $BC$. Thiết diện của tứ diện cắt bởi $(\\alpha)$ là:",
                    "options": [
                              "A. Hình bình hành",
                              "B. Hình thang có một góc vuông",
                              "C. Tam giác",
                              "D. Ngũ giác"
                    ],
                    "correct": "A",
                    "explanation": "Mặt phẳng $(\\alpha)$ cắt $(ABC)$ theo đoạn qua $M$ song song $BC$, cắt $(BCD)$ theo đoạn qua $N$ song song $BC$. Thiết diện là hình bình hành.",
                    "hint1": "Mặt phẳng chứa MN và song song BC.",
                    "hint2": "Cắt 2 mặt chứa BC theo 2 giao tuyến song song BC."
          },
          {
                    "question": "**Câu 9:** Cho hình chóp cụt tam giác $ABC.A'B'C'$ có diện tích đáy dưới bằng $36\\text{ cm}^2$. Biết cạnh đáy trên bằng $\\frac{1}{2}$ cạnh đáy dưới. Diện tích đáy trên $A'B'C'$ bằng:",
                    "options": [
                              "A. $9\\text{ cm}^2$",
                              "B. $18\\text{ cm}^2$",
                              "C. $12\\text{ cm}^2$",
                              "D. $6\\text{ cm}^2$"
                    ],
                    "correct": "A",
                    "explanation": "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: $S' = S \\cdot (1/2)^2 = 36 \\cdot 1/4 = 9\\text{ cm}^2$.",
                    "hint1": "Tỉ số diện tích bằng bình phương tỉ số đồng dạng.",
                    "hint2": "S' = 36 * (1/2)^2."
          }
]
        }
      ],
      tfQuestions: [
      {
            "id": 1,
            "title": "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD, AB = 2CD$). Gọi $M$ là trung điểm của $AB$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Tứ giác $AMCD$ là hình bình hành.",
                        "correct": "true",
                        "explain": "Do $AM \\parallel CD$ và $AM = AB/2 = CD$ nên $AMCD$ là hình bình hành."
                  },
                  {
                        "key": "b",
                        "text": "Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng đi qua $S$ và song song với $AB$.",
                        "correct": "false",
                        "explain": "Vì $AD$ và $BC$ cắt nhau tại điểm $I$ (do $ABCD$ là hình thang) nên giao tuyến là đường thẳng $SI$."
                  },
                  {
                        "key": "c",
                        "text": "Đường thẳng $CD$ song song với mặt phẳng $(SAB)$.",
                        "correct": "true",
                        "explain": "Vì $CD \\parallel AB \\subset (SAB) \\implies CD \\parallel (SAB)$."
                  },
                  {
                        "key": "d",
                        "text": "Mặt phẳng $(SMC)$ song song với đường thẳng $AD$.",
                        "correct": "true",
                        "explain": "Do $AMCD$ là hình bình hành nên $MC \\parallel AD \\implies AD \\parallel (SMC)$."
                  }
            ]
      },
      {
            "id": 2,
            "title": "Câu 2: Cho hình lăng trụ tam giác $ABC.A'B'C'$. Gọi $M, N$ lần lượt là trung điểm của $AA'$ và $BB'$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Đường thẳng $MN$ song song với đường thẳng $AB$.",
                        "correct": "true",
                        "explain": "Trong hình bình hành $ABB'A'$, $MN$ là đường trung bình nên $MN \\parallel AB$."
                  },
                  {
                        "key": "b",
                        "text": "Đường thẳng $MN$ song song với mặt phẳng $(A'B'C')$.",
                        "correct": "true",
                        "explain": "Do $MN \\parallel A'B' \\subset (A'B'C') \\implies MN \\parallel (A'B'C')$."
                  },
                  {
                        "key": "c",
                        "text": "Mặt phẳng $(MNC)$ cắt mặt phẳng $(A'B'C')$ theo giao tuyến song song với $AB$.",
                        "correct": "true",
                        "explain": "Mặt phẳng $(MNC)$ chứa $MN \\parallel A'B'$, cắt $(A'B'C')$ theo đường thẳng qua $C'$ song song $AB$."
                  },
                  {
                        "key": "d",
                        "text": "Tứ giác $ABB'A'$ luôn là hình chữ nhật.",
                        "correct": "false",
                        "explain": "Ở lăng trụ xiên, mặt bên chỉ là hình bình hành, không nhất thiết là hình chữ nhật."
                  }
            ]
      },
      {
            "id": 3,
            "title": "Câu 3: Cho hình lập phương $ABCD.A'B'C'D'$. Xét tính Đúng/Sai của các mệnh đề sau:",
            "items": [
                  {
                        "key": "a",
                        "text": "Mặt phẳng $(BDA')$ song song với mặt phẳng $(B'D'C)$.",
                        "correct": "true",
                        "explain": "Do $BD \\parallel B'D'$ và $BA' \\parallel CD'$ nên $(BDA') \\parallel (B'D'C)$."
                  },
                  {
                        "key": "b",
                        "text": "Đường chéo $AC'$ vuông góc với mặt phẳng $(BDA')$.",
                        "correct": "true",
                        "explain": "Tính chất hình lập phương: Đường chéo chính vuông góc với mặt phẳng tạo bởi 3 đỉnh kề."
                  },
                  {
                        "key": "c",
                        "text": "Hai mặt phẳng $(BDA')$ và $(B'D'C)$ chia đoạn thẳng $AC'$ thành ba đoạn có độ dài bằng nhau.",
                        "correct": "true",
                        "explain": "Tính chất kinh điển: Ba đoạn thẳng trên $AC'$ bằng nhau."
                  },
                  {
                        "key": "d",
                        "text": "Đường thẳng $BD$ cắt mặt phẳng $(B'D'C)$.",
                        "correct": "false",
                        "explain": "Vì $BD \\parallel B'D' \\subset (B'D'C) \\implies BD \\parallel (B'D'C)$."
                  }
            ]
      },
      {
            "id": 4,
            "title": "Câu 4: Cho tứ diện đều $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của $AB, BC, CD, DA$:",
            "items": [
                  {
                        "key": "a",
                        "text": "Tứ giác $MNPQ$ là hình bình hành.",
                        "correct": "true",
                        "explain": "Do $MN \\parallel AC$ và $PQ \\parallel AC$, $MN = PQ = AC/2$."
                  },
                  {
                        "key": "b",
                        "text": "Tứ giác $MNPQ$ là hình thoi.",
                        "correct": "true",
                        "explain": "Tứ diện đều có $AC = BD \\implies MN = NP = PQ = QM$ nên là hình thoi."
                  },
                  {
                        "key": "c",
                        "text": "Đường thẳng $AC$ song song với mặt phẳng $(MNPQ)$.",
                        "correct": "true",
                        "explain": "Vì $AC \\parallel MN \\subset (MNPQ) \\implies AC \\parallel (MNPQ)$."
                  },
                  {
                        "key": "d",
                        "text": "Mặt phẳng $(MNPQ)$ song song với đường thẳng $BD$.",
                        "correct": "true",
                        "explain": "Vì $BD \\parallel MQ \\subset (MNPQ) \\implies BD \\parallel (MNPQ)$."
                  }
            ]
      },
      {
            "id": 5,
            "title": "Câu 5: Xét tính Đúng/Sai của các mệnh đề lý thuyết tổng hợp:",
            "items": [
                  {
                        "key": "a",
                        "text": "Hai đường thẳng cùng song song với một mặt phẳng thì song song với nhau.",
                        "correct": "false",
                        "explain": "Hai đường thẳng đó có thể cắt nhau hoặc chéo nhau."
                  },
                  {
                        "key": "b",
                        "text": "Hai mặt phẳng phân biệt cùng song song với một đường thẳng thì song song với nhau.",
                        "correct": "false",
                        "explain": "Hai mặt phẳng đó có thể cắt nhau theo một giao tuyến song song với đường thẳng đó."
                  },
                  {
                        "key": "c",
                        "text": "Nếu đường thẳng $a$ song song với mặt phẳng $(P)$ thì qua $a$ có duy nhất một mặt phẳng song song với $(P)$.",
                        "correct": "true",
                        "explain": "Định lí tính duy nhất mặt phẳng song song chứa đường thẳng song song."
                  },
                  {
                        "key": "d",
                        "text": "Ba mặt phẳng cắt nhau từng đôi một theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc đôi một song song hoặc đồng quy.",
                        "correct": "true",
                        "explain": "Định lí ba giao tuyến kinh điển trong SGK Toán 11."
                  }
            ]
      },
      {
            "id": 6,
            "title": "Câu 6: Về bài toán ứng dụng thực tế các quan hệ song song trong không gian:",
            "items": [
                  {
                        "key": "a",
                        "text": "Các bậc của một cầu thang bộ trong ngôi nhà luôn nằm trên các mặt phẳng song song với mặt sàn.",
                        "correct": "true",
                        "explain": "Để người đi lại thăng bằng, mặt mỗi bậc thang đều song song mặt đất."
                  },
                  {
                        "key": "b",
                        "text": "Tay vịn lan can cầu thang luôn song song với đường thẳng nối mép các bậc thang.",
                        "correct": "true",
                        "explain": "Đảm bảo khoảng cách từ tay vịn đến bậc thang luôn không đổi."
                  },
                  {
                        "key": "c",
                        "text": "Các trụ đứng đỡ tay vịn cầu thang song song với nhau.",
                        "correct": "true",
                        "explain": "Các trụ đều vuông góc với mặt đất hoặc bậc thang nên chúng song song với nhau."
                  },
                  {
                        "key": "d",
                        "text": "Chiều cao của các bậc thang liên tiếp trên một cầu thang thẳng là khác nhau.",
                        "correct": "false",
                        "explain": "Quy chuẩn kiến trúc đòi hỏi chiều cao mỗi bậc thang phải bằng nhau để an toàn."
                  }
            ]
      }
],
      saQuestions: [
      {
            "id": 1,
            "question": "**Câu 1:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA, SC$. Mặt phẳng $(\\alpha)$ qua $M, N$ song song với $BD$. Thiết diện tạo bởi $(\\alpha)$ và hình chóp là đa giác có bao nhiêu cạnh?",
            "answer": "4",
            "explain": "Mặt phẳng (alpha) cắt SA, SB, SC, SD tại 4 điểm M, K, N, H tạo thành hình bình hành MKNH có 4 cạnh."
      },
      {
            "id": 2,
            "question": "**Câu 2:** Cho hình hộp $ABCD.A'B'C'D'$. Có bao nhiêu cặp mặt phẳng đối diện song song với nhau?",
            "answer": "3",
            "explain": "Hình hộp có 3 cặp mặt đối diện song song: (ABCD) // (A'B'C'D'), (ABB'A') // (CDD'C'), (ADD'A') // (BCC'B')."
      },
      {
            "id": 3,
            "question": "**Câu 3:** Cho hình chóp $S.ABCD$ có đáy là hình bình hành. Mặt phẳng song song với đáy cắt các cạnh bên $SA, SB, SC, SD$ chia hình chóp thành một hình chóp nhỏ và một hình chóp cụt. Hỏi hình chóp cụt đó có bao nhiêu đỉnh?",
            "answer": "8",
            "explain": "Hình chóp cụt tứ giác có 4 đỉnh ở đáy dưới và 4 đỉnh ở đáy trên, tổng cộng có 8 đỉnh."
      },
      {
            "id": 4,
            "question": "**Câu 4:** Cho ba mặt phẳng song song cắt đường thẳng $d$ tại $A, B, C$ sao cho $AB = 6\\text{ cm}, BC = 9\\text{ cm}$ và cắt $d'$ tại $A', B', C'$. Biết $A'C' = 25\\text{ cm}$. Tính độ dài đoạn thẳng $A'B'$ (cm).",
            "answer": "10",
            "explain": "Theo định lí Ta-lét: A'B' / A'C' = AB / AC = 6 / (6 + 9) = 6 / 15 = 2/5. Suy ra A'B' = 25 * 2 / 5 = 10 cm."
      }
]
    }
    };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE11_PARALLEL_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE11_PERPENDICULAR_LESSONS = {
    // =========================================================================
    // BÀI 22: HAI ĐƯỜNG THẲNG VUÔNG GÓC (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai22": {
      id: "toan11_bai22",
      lessonTitle: "Bài 22: Hai đường thẳng vuông góc",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 22:") || t.includes("hai đường thẳng vuông góc")) && !t.includes("conic");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Góc giữa hai đường thẳng và Định nghĩa hai đường thẳng vuông góc",
          theory: createStandardTheoryHTML(
            "Bài 22: Hai đường thẳng vuông góc", "Lớp 11", 1,
            "Góc giữa hai đường thẳng và Định nghĩa hai đường thẳng vuông góc",
            `<p>Góc giữa hai đường thẳng trong không gian chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Vectơ chỉ phương:</strong> Vectơ $\\vec{u} \\neq \\vec{0}$ có giá song song hoặc trùng với đường thẳng $d$.</li>
              <li><strong>Góc giữa hai đường thẳng:</strong> Góc giữa hai đường thẳng $a$ và $b$ trong không gian là góc giữa hai đường thẳng $a'$ và $b'$ cùng đi qua một điểm và lần lượt song song với $a$ và $b$. Ký hiệu: $(a, b)$.
                <br/>• Độ lớn: $0^\\circ \\le (a, b) \\le 90^\\circ$.
                <br/>• Liên hệ với vectơ chỉ phương $\\vec{u}_1, \\vec{u}_2$:
                $$\\cos(a, b) = |\\cos(\\vec{u}_1, \\vec{u}_2)| = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$$
              </li>
              <li><strong>Hai đường thẳng vuông góc:</strong> Hai đường thẳng $a$ và $b$ được gọi là vuông góc với nhau nếu góc giữa chúng bằng $90^\\circ$, ký hiệu $a \\perp b$.
                <br/>• Điều kiện: $a \\perp b \\Leftrightarrow \\vec{u}_1 \\cdot \\vec{u}_2 = 0$.
                <br/>• Chú ý: Hai đường thẳng vuông góc có thể <strong>cắt nhau</strong> hoặc <strong>chéo nhau</strong>!
              </li>
            </ul>`,
            `<li>Hai đường thẳng vuông góc trong không gian KHÔNG NHẤT THIẾT phải cắt nhau (chúng có thể chéo nhau).</li>
            <li>Góc giữa hai đường thẳng luôn là góc nhọn hoặc vuông ($0^\\circ \\le \\varphi \\le 90^\\circ$).</li>`,
            `<li>Tưởng hai đường thẳng vuông góc thì phải cắt nhau như trong hình học phẳng.</li>
            <li>Quên giá trị tuyệt đối khi tính cos góc giữa hai đường thẳng từ tích vô hướng hai VTCP.</li>`,
            `<li><em>"Góc giữa hai đường thẳng từ 0 đến 90 độ – Vuông góc có thể cắt hoặc chéo nhau – Tích vô hướng bằng 0 là vuông góc!"</em></li>`
          ),
          mcqs: [
            {
              question: "Hai đường thẳng $a$ và $b$ vuông góc với nhau khi nào?",
              options: [
                "A. Góc giữa chúng bằng $90^\\circ$",
                "B. Chúng cắt nhau tại một điểm",
                "C. Chúng cắt nhau và góc giữa chúng bằng $60^\\circ$",
                "D. Chúng cùng nằm trong một mặt phẳng"
              ],
              correct: "A",
              explanation: "Định nghĩa chuẩn SGK: Hai đường thẳng gọi là vuông góc với nhau nếu góc giữa chúng bằng $90^\\circ$. Chúng có thể cắt nhau hoặc chéo nhau.",
              hint1: "Định nghĩa dựa trên độ lớn của góc.",
              hint2: "Góc giữa chúng bằng $90^\\circ$."
            },
            {
              question: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng:",
              options: ["A. $90^\\circ$", "B. $60^\\circ$", "C. $45^\\circ$", "D. $0^\\circ$"],
              correct: "A",
              explanation: "Vì $B'C' \\parallel BC$ nên góc $(AB, B'C') = (AB, BC) = \\widehat{ABC} = 90^\\circ$.",
              hint1: "Thay $B'C'$ bằng đường thẳng song song với nó ở đáy.",
              hint2: "$B'C' \\parallel BC$, góc $\\widehat{ABC} = 90^\\circ$."
            },
            {
              question: "Trong không gian, cho hai đường thẳng phân biệt $a, b$ cùng vuông góc với đường thẳng $c$. Kết luận nào sau đây là **ĐÚNG**?",
              options: [
                "A. $a$ và $b$ có thể song song, cắt nhau hoặc chéo nhau",
                "B. $a$ và $b$ chắc chắn song song với nhau",
                "C. $a$ và $b$ chắc chắn cắt nhau",
                "D. $a$ và $b$ chắc chắn chéo nhau"
              ],
              correct: "A",
              explanation: "Trong không gian, hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì vị trí tương đối giữa chúng có thể là song song, cắt nhau hoặc chéo nhau.",
              hint1: "Xét 3 cạnh xuất phát từ 1 đỉnh của hình hộp chữ nhật.",
              hint2: "Có thể song song, cắt nhau hoặc chéo nhau."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$:",
          items: [
            { key: "a", text: "Hai đường thẳng $AA'$ và $BC$ vuông góc với nhau.", correct: "true", explain: "$AA' \\perp AB$ và $AA' \\perp AD$ nên $AA' \\perp (ABCD) \\Rightarrow AA' \\perp BC$." },
            { key: "b", text: "Hai đường thẳng $AA'$ và $BC$ là hai đường thẳng chéo nhau.", correct: "true", explain: "Không đồng phẳng." },
            { key: "c", text: "Góc giữa hai đường thẳng $AC$ và $A'D'$ bằng $45^\\circ$.", correct: "true", explain: "$A'D' \\parallel AD$, tam giác $ACD$ vuông cân tại $D$ nên góc bằng $45^\\circ$." },
            { key: "d", text: "Hai đường thẳng $AC$ và $BD$ vuông góc với nhau.", correct: "true", explain: "Hai đường chéo hình vuông đáy vuông góc." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về tính chất của góc giữa hai đường thẳng trong không gian:",
          items: [
            { key: "a", text: "Góc giữa hai đường thẳng song song bằng $0^\\circ$.", correct: "true", explain: "Quy ước chuẩn." },
            { key: "b", text: "Góc giữa hai đường thẳng không vượt quá $90^\\circ$.", correct: "true", explain: "Khoảng góc $[0^\\circ; 90^\\circ]$." },
            { key: "c", text: "Góc giữa hai đường thẳng chéo nhau luôn bằng $90^\\circ$.", correct: "false", explain: "Góc giữa hai đường chéo nhau có thể nhận bất kì giá trị nào từ $0^\\circ$ đến $90^\\circ$." },
            { key: "d", text: "Nếu $a \\parallel b$ thì góc $(a, c)$ bằng góc $(b, c)$.", correct: "true", explain: "Tính chất bảo toàn góc với đường song song." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tứ diện đều $ABCD$ cạnh $a$. Gọi $M$ là trung điểm của $CD$:",
          items: [
            { key: "a", text: "Tam giác $ACD$ và $BCD$ là các tam giác đều.", correct: "true", explain: "Các mặt tứ diện đều." },
            { key: "b", text: "$AM \\perp CD$ và $BM \\perp CD$.", correct: "true", explain: "Trung tuyến tam giác đều đồng thời là đường cao." },
            { key: "c", text: "Đường thẳng $CD$ vuông góc với mặt phẳng $(ABM)$.", correct: "true", explain: "Vuông góc với 2 đường cắt nhau $AM, BM$." },
            { key: "d", text: "Hai cạnh đối diện $AB$ và $CD$ của tứ diện đều vuông góc với nhau.", correct: "true", explain: "Vì $CD \\perp (ABM) \\supset AB$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về phương pháp tính góc giữa hai đường thẳng chéo nhau:",
          items: [
            { key: "a", text: "Dựng đường thẳng song song để đưa về cùng một đỉnh rồi dùng định lí Côsin trong tam giác.", correct: "true", explain: "Phương pháp hình học cổ điển." },
            { key: "b", text: "Sử dụng tích vô hướng của hai vectơ chỉ phương.", correct: "true", explain: "Phương pháp vectơ." },
            { key: "c", text: "Cos góc giữa hai đường thẳng bằng trị tuyệt đối cos góc giữa hai VTCP.", correct: "true", explain: "Đảm bảo góc $\\le 90^\\circ$." },
            { key: "d", text: "Nếu tích vô hướng hai VTCP bằng $-1$ thì hai đường thẳng vuông góc.", correct: "false", explain: "Phải bằng 0 mới vuông góc." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình chóp $S.ABC$ có $SA = SB = SC$ và tam giác $ABC$ vuông tại $A$:",
          items: [
            { key: "a", text: "Hình chiếu vuông góc của đỉnh $S$ lên mặt đáy là tâm đường tròn ngoại tiếp $\\Delta ABC$.", correct: "true", explain: "Vì các cạnh bên bằng nhau." },
            { key: "b", text: "Tâm đường tròn ngoại tiếp tam giác vuông $ABC$ là trung điểm cạnh huyền $BC$.", correct: "true", explain: "Tính chất tam giác vuông." },
            { key: "c", text: "Đường thẳng nối $S$ và trung điểm $BC$ vuông góc với mặt phẳng $(ABC)$.", correct: "true", explain: "Đường cao hình chóp." },
            { key: "d", text: "Cạnh $SA$ vuông góc với cạnh $BC$.", correct: "false", explain: "Chỉ có đường cao $SO \\perp BC$, không nhất thiết $SA \\perp BC$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về vị trí tương đối giữa hai đường thẳng vuông góc:",
          items: [
            { key: "a", text: "Hai đường thẳng vuông góc có thể cắt nhau.", correct: "true", explain: "Cắt nhau tạo góc 90 độ." },
            { key: "b", text: "Hai đường thẳng vuông góc có thể chéo nhau.", correct: "true", explain: "Ví dụ cạnh đứng và cạnh đáy đối diện trong hình hộp." },
            { key: "c", text: "Nếu hai đường thẳng vuông góc thì tích vô hướng của hai VTCP luôn bằng 0.", correct: "true", explain: "Điều kiện cần và đủ." },
            { key: "d", text: "Hai đường thẳng vuông góc luôn cùng nằm trong một mặt phẳng.", correct: "false", explain: "Nếu chéo nhau thì không cùng nằm trong bất kì mặt phẳng nào." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 23: ĐƯỜNG THẲNG VUÔNG GÓC VỚI MẶT PHẲNG (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai23": {
      id: "toan11_bai23",
      lessonTitle: "Bài 23: Đường thẳng vuông góc với mặt phẳng",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 23:") || t.includes("đường thẳng vuông góc với mặt phẳng")) && !t.includes("quy tắc đếm");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Điều kiện để đường thẳng vuông góc với mặt phẳng và Định lí ba đường vuông góc",
          theory: createStandardTheoryHTML(
            "Bài 23: Đường thẳng vuông góc với mặt phẳng", "Lớp 11", 1,
            "Điều kiện để đường thẳng vuông góc với mặt phẳng và Định lí ba đường vuông góc",
            `<p>Đường thẳng vuông góc với mặt phẳng chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Đường thẳng $d$ vuông góc với mặt phẳng $(\\alpha)$ nếu nó vuông góc với <strong>mọi đường thẳng</strong> $a$ nằm trong $(\\alpha)$. Ký hiệu: $d \\perp (\\alpha)$.</li>
              <li><strong>Dấu hiệu nhận biết (Định lý then chốt):</strong> Nếu đường thẳng $d$ vuông góc với <strong>hai đường thẳng cắt nhau</strong> $a$ và $b$ cùng nằm trong mặt phẳng $(\\alpha)$ thì $d \\perp (\\alpha)$:
                $$\\begin{cases} a \\subset (\\alpha), b \\subset (\\alpha) \\\\ a \\cap b = \\{I\\} \\\\ d \\perp a, d \\perp b \\end{cases} \\Rightarrow d \\perp (\\alpha)$$
              </li>
              <li><strong>Hệ quả:</strong> Nếu $d \\perp (\\alpha)$ thì $d$ vuông góc với <strong>bất kì đường thẳng nào</strong> nằm trong $(\\alpha)$.</li>
              <li><strong>Định lí ba đường vuông góc:</strong> Cho đường thẳng $a$ không vuông góc với $(\\alpha)$ và đường thẳng $b$ nằm trong $(\\alpha)$. Gọi $a'$ là hình chiếu vuông góc của $a$ lên $(\\alpha)$. Khi đó:
                $$a \\perp b \\Leftrightarrow a' \\perp b$$
              </li>
            </ul>`,
            `<li>Muốn chứng minh $d \\perp (\\alpha)$: Phải chứng minh $d$ vuông góc với HAI ĐƯỜNG THẲNG CẮT NHAU trong $(\\alpha)$.</li>
            <li>Muốn chứng minh hai đường thẳng vuông góc $a \\perp b$: Cách mạnh nhất là chứng minh $a$ vuông góc với MỘT MẶT PHẲNG chứa $b$!</li>`,
            `<li>Chỉ chứng minh $d$ vuông góc với 1 đường thẳng trong mặt phẳng đã vội kết luận $d$ vuông góc với mặt phẳng.</li>
            <li>Hai đường thẳng cùng nằm trong $(\\alpha)$ phải CẮT NHAU (nếu song song thì không đủ).</li>`,
            `<li><em>"Vuông góc hai đường cắt nhau $\\rightarrow$ Vuông góc cả Mặt Phẳng $\\rightarrow$ Vuông góc với mọi đường bên trong!"</em></li>`
          ),
          mcqs: [
            {
              question: "Để chứng minh đường thẳng $d$ vuông góc với mặt phẳng $(\\alpha)$, ta cần chứng minh $d$ vuông góc với:",
              options: [
                "A. Hai đường thẳng cắt nhau cùng nằm trong $(\\alpha)$",
                "B. Một đường thẳng nằm trong $(\\alpha)$",
                "C. Hai đường thẳng song song nằm trong $(\\alpha)$",
                "D. Mọi đường thẳng song song với $(\\alpha)$"
              ],
              correct: "A",
              explanation: "Định lý chuẩn SGK: Đường thẳng vuông góc với hai đường thẳng cắt nhau cùng thuộc một mặt phẳng thì vuông góc với mặt phẳng đó.",
              hint1: "Cần mấy đường thẳng và quan hệ giữa chúng là gì?",
              hint2: "Hai đường thẳng cắt nhau."
            },
            {
              question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Tam giác $ABC$ vuông tại $B$. Khẳng định nào sau đây là **ĐÚNG**?",
              options: ["A. $BC \\perp (SAB)$", "B. $BC \\perp (SAC)$", "C. $AB \\perp (SBC)$", "D. $AC \\perp (SAB)$"],
              correct: "A",
              explanation: "Ta có $BC \\perp AB$ (giả thiết) và $BC \\perp SA$ (vì $SA \\perp (ABC)$). Do $AB$ và $SA$ cắt nhau tại $A$ trong $(SAB)$ nên $BC \\perp (SAB)$.",
              hint1: "Cạnh $BC$ vuông góc với $AB$ và vuông góc với đường cao $SA$.",
              hint2: "$BC \\perp (SAB)$."
            },
            {
              question: "Nếu đường thẳng $d$ vuông góc với mặt phẳng $(\\alpha)$ thì $d$ vuông góc với bao nhiêu đường thẳng nằm trong $(\\alpha)$?",
              options: ["A. Vô số đường thẳng (mọi đường thẳng)", "B. Đúng 2 đường thẳng", "C. Đúng 1 đường thẳng", "D. Không đường thẳng nào"],
              correct: "A",
              explanation: "Theo định nghĩa: Đường thẳng vuông góc với mặt phẳng thì vuông góc với TẤT CẢ mọi đường thẳng nằm trong mặt phẳng đó.",
              hint1: "Xem lại định nghĩa đường thẳng vuông góc mặt phẳng.",
              hint2: "Vuông góc với mọi đường thẳng nằm trong $(\\alpha)$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông tâm $O$ và $SA \\perp (ABCD)$:",
          items: [
            { key: "a", text: "$SA \\perp AB$ và $SA \\perp AD$.", correct: "true", explain: "Vì $SA \\perp (ABCD)$." },
            { key: "b", text: "$BC \\perp (SAB)$.", correct: "true", explain: "$BC \\perp AB$ và $BC \\perp SA$." },
            { key: "c", text: "$CD \\perp (SAD)$.", correct: "true", explain: "$CD \\perp AD$ và $CD \\perp SA$." },
            { key: "d", text: "$BD \\perp (SAC)$.", correct: "true", explain: "$BD \\perp AC$ (hai đường chéo hình vuông) và $BD \\perp SA$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về mặt phẳng trung trực của đoạn thẳng $AB$ trong không gian:",
          items: [
            { key: "a", text: "Mặt phẳng trung trực đi qua trung điểm của đoạn thẳng $AB$.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "b", text: "Mặt phẳng trung trực vuông góc với đường thẳng $AB$.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "c", text: "Tập hợp các điểm cách đều hai đầu mút $A$ và $B$ chính là mặt phẳng trung trực của đoạn $AB$.", correct: "true", explain: "Tính chất quỹ tích." },
            { key: "d", text: "Qua đoạn thẳng $AB$ có vô số mặt phẳng trung trực.", correct: "false", explain: "Mặt phẳng trung trực là DUY NHẤT." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Gọi $H$ là hình chiếu vuông góc của $A$ lên $BC$:",
          items: [
            { key: "a", text: "$BC \\perp AH$ (theo cách dựng).", correct: "true", explain: "Hình chiếu vuông góc." },
            { key: "b", text: "$BC \\perp SA$.", correct: "true", explain: "Do $SA \\perp (ABC)$." },
            { key: "c", text: "$BC \\perp (SAH)$.", correct: "true", explain: "Vuông góc với 2 đường cắt nhau $AH$ và $SA$." },
            { key: "d", text: "$BC \\perp SH$.", correct: "true", explain: "Hệ quả định lí ba đường vuông góc." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất liên hệ giữa quan hệ vuông góc và song song:",
          items: [
            { key: "a", text: "Nếu hai đường thẳng song song thì mặt phẳng vuông góc với đường này cũng vuông góc với đường kia.", correct: "true", explain: "Tính chất chuẩn." },
            { key: "b", text: "Hai đường thẳng phân biệt cùng vuông góc với một mặt phẳng thì song song với nhau.", correct: "true", explain: "Tính chất chuẩn." },
            { key: "c", text: "Nếu hai mặt phẳng song song thì đường thẳng vuông góc với mặt này cũng vuông góc với mặt kia.", correct: "true", explain: "Tính chất chuẩn." },
            { key: "d", text: "Nếu đường thẳng $a$ song song với mặt phẳng $(\\alpha)$ và $b \\perp (\\alpha)$ thì $a$ cắt $b$.", correct: "false", explain: "$a \\perp b$, chúng có thể chéo nhau." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong thực tế xây dựng, người thợ hồ dùng dây dọi để kiểm tra độ thẳng đứng của bức tường:",
          items: [
            { key: "a", text: "Dây dọi có phương vuông góc với mặt đất (mặt nước nằm ngang).", correct: "true", explain: "Phương trọng trường." },
            { key: "b", text: "Dây dọi vuông góc với mọi đường thẳng nằm trên mặt sàn nhà bằng phẳng.", correct: "true", explain: "Tính chất đường thẳng vuông góc mặt phẳng." },
            { key: "c", text: "Bức tường xây thẳng đứng theo dây dọi sẽ vuông góc với mặt sàn.", correct: "true", explain: "Ứng dụng xây dựng." },
            { key: "d", text: "Dây dọi chỉ vuông góc với duy nhất một cạnh của nền nhà.", correct: "false", explain: "Vuông góc với toàn bộ mặt sàn." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán dựng đường thẳng vuông góc với mặt phẳng qua điểm $O$:",
          items: [
            { key: "a", text: "Có duy nhất một đường thẳng đi qua $O$ và vuông góc với mặt phẳng $(\\alpha)$ cho trước.", correct: "true", explain: "Tiên đề duy nhất." },
            { key: "b", text: "Có duy nhất một mặt phẳng đi qua $O$ và vuông góc với đường thẳng $d$ cho trước.", correct: "true", explain: "Tiên đề duy nhất." },
            { key: "c", text: "Nếu đường thẳng $d$ vuông góc với $(\\alpha)$ thì hình chiếu vuông góc của $d$ lên $(\\alpha)$ là một điểm.", correct: "true", explain: "Giao điểm của $d$ và $(\\alpha)$." },
            { key: "d", text: "Nếu một đường thẳng vuông góc với mặt phẳng thì nó không bao giờ cắt mặt phẳng đó.", correct: "false", explain: "Nó cắt mặt phẳng tại đúng một điểm (gọi là chân đường vuông góc)." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 24: PHÉP CHIẾU VUÔNG GÓC. GÓC GIỮA ĐƯỜNG THẲNG VÀ MẶT PHẲNG (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai24": {
      id: "toan11_bai24",
      lessonTitle: "Bài 24: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 24:") || t.includes("phép chiếu vuông góc") || t.includes("góc giữa đường thẳng và mặt phẳng")) && !t.includes("chỉnh hợp");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Phép chiếu vuông góc và Góc giữa đường thẳng và mặt phẳng",
          theory: createStandardTheoryHTML(
            "Bài 24: Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng", "Lớp 11", 1,
            "Phép chiếu vuông góc và Góc giữa đường thẳng và mặt phẳng",
            `<p>Góc giữa đường thẳng và mặt phẳng chuẩn SGK Toán 11 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phép chiếu vuông góc:</strong> Là phép chiếu song song lên mặt phẳng $(\\alpha)$ theo phương vuông góc với $(\\alpha)$.
                <br/>• Hình chiếu của điểm $M$ là chân đường vuông góc $H$ hạ từ $M$ xuống $(\\alpha)$.
                <br/>• Hình chiếu của đường thẳng $d$ không vuông góc với $(\\alpha)$ là đường thẳng $d'$ đi qua hình chiếu của các điểm thuộc $d$.
              </li>
              <li><strong>Góc giữa đường thẳng và mặt phẳng:</strong>
                <br/>• Nếu $d \\perp (\\alpha)$ thì góc giữa $d$ và $(\\alpha)$ bằng $90^\\circ$.
                <br/>• Nếu $d$ không vuông góc với $(\\alpha)$ thì góc giữa $d$ và $(\\alpha)$ là <strong>góc giữa $d$ và hình chiếu $d'$ của nó trên $(\\alpha)$</strong>.
                <br/>• Độ lớn: $0^\\circ \\le \\varphi \\le 90^\\circ$.
              </li>
              <li><strong>Quy trình 3 bước xác định góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$:</strong>
                <br/>• Bước 1: Tìm giao điểm $A = d \\cap (\\alpha)$ (Đỉnh của góc).
                <br/>• Bước 2: Chọn điểm $S \\in d$ ($S \\neq A$), hạ $SH \\perp (\\alpha)$ tại $H$ ($H$ là chân đường vuông góc).
                <br/>• Bước 3: Nối $AH$ (là hình chiếu của $d$), góc cần tìm là $\\widehat{SAH}$.
              </li>
            </ul>`,
            `<li>Góc giữa đường thẳng và mặt phẳng luôn là góc nhọn của tam giác vuông $SAH$: $\\tan\\varphi = \\frac{SH}{AH}, \\sin\\varphi = \\frac{SH}{SA}, \\cos\\varphi = \\frac{AH}{SA}$.</li>
            <li>Đỉnh góc LUÔN LÀ GIAO ĐIỂM của đường thẳng với mặt phẳng!</li>`,
            `<li>Nhầm góc $\\widehat{SAH}$ với góc $\\widehat{ASH}$ ở đỉnh $S$.</li>
            <li>Hạ sai chân đường cao $H$ xuống mặt phẳng.</li>`,
            `<li><em>"Giao điểm làm Đỉnh – Từ đỉnh đường thẳng hạ Vuông Góc lấy Chân – Góc kẹp giữa Đỉnh, Chân và Điểm ban đầu!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ là góc nào?",
              options: ["A. $\\widehat{SBA}$", "B. $\\widehat{SAB}$", "C. $\\widehat{SBC}$", "D. $\\widehat{ASB}$"],
              correct: "A",
              explanation: "Giao điểm của $SB$ và $(ABC)$ là $B$. Hình chiếu vuông góc của $S$ lên $(ABC)$ là $A$. Do đó hình chiếu của $SB$ lên đáy là $AB$. Góc cần tìm là $\\widehat{SBA}$.",
              hint1: "Đỉnh góc là giao điểm $B$. Chân vuông góc hạ từ $S$ là $A$.",
              hint2: "Góc $\\widehat{SBA}$."
            },
            {
              question: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$ và $SA \\perp (ABCD)$, $SA = a$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
              options: ["A. $\\arctan\\left(\\frac{1}{\\sqrt{2}}\\right)$", "B. $45^\\circ$", "C. $60^\\circ$", "D. $30^\\circ$"],
              correct: "A",
              explanation: "Hình chiếu của $SC$ lên đáy là $AC$. Tam giác $SAC$ vuông tại $A$ có $SA = a$ và $AC = a\\sqrt{2}$ (đường chéo hình vuông). Do đó $\\tan\\varphi = \\frac{SA}{AC} = \\frac{a}{a\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$. Vậy $\\varphi = \\arctan(1/\\sqrt{2}) \\approx 35.26^\\circ$.",
              hint1: "Góc là $\\widehat{SCA}$. Tính $\\tan\\widehat{SCA} = SA / AC$.",
              hint2: "$SA = a, AC = a\\sqrt{2} \\implies \\tan\\varphi = 1/\\sqrt{2}$."
            },
            {
              question: "Góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ có thể nhận giá trị nào sau đây?",
              options: ["A. $60^\\circ$", "B. $120^\\circ$", "C. $180^\\circ$", "D. $-45^\\circ$"],
              correct: "A",
              explanation: "Theo định nghĩa, góc giữa đường thẳng và mặt phẳng luôn nằm trong đoạn $[0^\\circ; 90^\\circ]$. Do đó chỉ có $60^\\circ$ thỏa mãn.",
              hint1: "Góc luôn từ 0 độ đến 90 độ.",
              hint2: "$60^\\circ$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{3}$:",
          items: [
            { key: "a", text: "Hình chiếu của cạnh $SB$ lên mặt phẳng đáy là đoạn thẳng $AB$.", correct: "true", explain: "Vì $SA \\perp (ABCD)$ nên $S$ chiếu thành $A$." },
            { key: "b", text: "Góc giữa $SB$ và đáy là góc $\\widehat{SBA}$.", correct: "true", explain: "Định nghĩa góc đường và mặt." },
            { key: "c", text: "$\\tan\\widehat{SBA} = \\frac{SA}{AB} = \\frac{a\\sqrt{3}}{a} = \\sqrt{3}$.", correct: "true", explain: "Tính tỉ số lượng giác." },
            { key: "d", text: "Góc giữa $SB$ và mặt phẳng đáy $(ABCD)$ bằng $60^\\circ$.", correct: "true", explain: "$\\arctan\\sqrt{3} = 60^\\circ$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về góc giữa đường thẳng và mặt phẳng:",
          items: [
            { key: "a", text: "Nếu đường thẳng song song với mặt phẳng thì góc giữa chúng bằng $0^\\circ$.", correct: "true", explain: "Hình chiếu song song đường thẳng." },
            { key: "b", text: "Nếu đường thẳng nằm trong mặt phẳng thì góc giữa chúng bằng $0^\\circ$.", correct: "true", explain: "Quy ước góc 0 độ." },
            { key: "c", text: "Nếu đường thẳng vuông góc với mặt phẳng thì góc giữa chúng bằng $90^\\circ$.", correct: "true", explain: "Góc lớn nhất." },
            { key: "d", text: "Góc giữa đường thẳng và mặt phẳng có thể là một góc tù.", correct: "false", explain: "Góc luôn $\\le 90^\\circ$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$:",
          items: [
            { key: "a", text: "Hình chiếu của đường chéo $AC'$ lên mặt phẳng đáy $(ABCD)$ là $AC$.", correct: "true", explain: "$C'$ chiếu vuông góc thành $C$." },
            { key: "b", text: "Độ dài $AC = a\\sqrt{2}$ và $C'C = a$.", correct: "true", explain: "Kích thước hình lập phương." },
            { key: "c", text: "Góc giữa $AC'$ và đáy là góc $\\widehat{C'AC}$.", correct: "true", explain: "Định nghĩa góc." },
            { key: "d", text: "Góc giữa $AC'$ và đáy bằng $45^\\circ$.", correct: "false", explain: "$\\tan = a / (a\\sqrt{2}) = 1/\\sqrt{2} \\neq 1$, góc $\\approx 35.26^\\circ$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về định lý diện tích hình chiếu:",
          items: [
            { key: "a", text: "Gọi $S$ là diện tích đa giác $(H)$ trong $(\\alpha)$, $S'$ là diện tích hình chiếu của $(H)$ lên $(\\beta)$. Khi đó $S' = S \\cos\\varphi$ (với $\\varphi$ là góc giữa hai mặt phẳng).", correct: "true", explain: "Công thức diện tích hình chiếu." },
            { key: "b", text: "Diện tích hình chiếu $S'$ luôn nhỏ hơn hoặc bằng diện tích ban đầu $S$.", correct: "true", explain: "Vì $\\cos\\varphi \\le 1$." },
            { key: "c", text: "Nếu mặt phẳng chứa đa giác song song với mặt phẳng chiếu thì $S' = S$.", correct: "true", explain: "Vì $\\cos 0^\\circ = 1$." },
            { key: "d", text: "Nếu tam giác vuông góc với mặt phẳng chiếu thì hình chiếu có diện tích bằng một nửa diện tích ban đầu.", correct: "false", explain: "Nếu vuông góc ($\\varphi = 90^\\circ$) thì $\\cos 90^\\circ = 0$, hình chiếu suy biến thành đoạn thẳng có diện tích bằng 0." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong lắp đặt tấm pin năng lượng mặt trời:",
          items: [
            { key: "a", text: "Góc nghiêng của tấm pin so với mặt đất ảnh hưởng đến lượng bức xạ hấp thụ.", correct: "true", explain: "Kỹ thuật điện mặt trời." },
            { key: "b", text: "Tấm pin hấp thụ năng lượng tối đa khi tia nắng mặt trời vuông góc với bề mặt tấm pin.", correct: "true", explain: "Góc tới 90 độ." },
            { key: "c", text: "Góc giữa tia nắng và bề mặt tấm pin bằng $90^\\circ$ thì góc giữa tia nắng và pháp tuyến tấm pin bằng $0^\\circ$.", correct: "true", explain: "Góc phụ nhau." },
            { key: "d", text: "Tấm pin nằm ngang luôn hấp thụ tốt hơn tấm pin đặt nghiêng ở mọi mùa trong năm.", correct: "false", explain: "Mùa đông Mặt Trời ở góc thấp, đặt nghiêng tối ưu hơn nhiều." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về phương pháp tìm góc bằng lượng giác trong không gian:",
          items: [
            { key: "a", text: "Góc $\\varphi$ luôn được gắn vào một tam giác vuông.", correct: "true", explain: "Tam giác vuông tại chân đường cao." },
            { key: "b", text: "Cạnh đối diện góc $\\varphi$ chính là chiều cao hạ từ điểm xuống mặt phẳng.", correct: "true", explain: "Cạnh đối là $SH$." },
            { key: "c", text: "Cạnh kề chính là đoạn hình chiếu trên mặt phẳng.", correct: "true", explain: "Cạnh kề là $AH$." },
            { key: "d", text: "Nếu $\\tan\\varphi = 1$ thì góc $\\varphi = 60^\\circ$.", correct: "false", explain: "$\\tan\\varphi = 1 \\Rightarrow \\varphi = 45^\\circ$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 25: HAI MẶT PHẲNG VUÔNG GÓC (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai25": {
      id: "toan11_bai25",
      lessonTitle: "Bài 25: Hai mặt phẳng vuông góc",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 25:") || t.includes("hai mặt phẳng vuông góc")) && !t.includes("nhị thức newton");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Góc giữa hai mặt phẳng, Điều kiện để hai mặt phẳng vuông góc và Tính chất",
          theory: createStandardTheoryHTML(
            "Bài 25: Hai mặt phẳng vuông góc", "Lớp 11", 1,
            "Góc giữa hai mặt phẳng, Điều kiện để hai mặt phẳng vuông góc và Tính chất",
            `<p>Hai mặt phẳng vuông góc chuẩn SGK Toán 11 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Góc giữa hai mặt phẳng:</strong> Là góc giữa hai đường thẳng lần lượt vuông góc với giao tuyến tại cùng một điểm:
                <br/>• Cho $(\\alpha) \\cap (\\beta) = c$. Lấy $I \\in c$, trong $(\\alpha)$ vẽ $a \\perp c$, trong $(\\beta)$ vẽ $b \\perp c$.
                <br/>• Góc giữa $(\\alpha)$ và $(\\beta)$ là góc giữa hai đường thẳng $a$ và $b$: $((\\alpha), (\\beta)) = (a, b)$ ($0^\\circ \\le \\varphi \\le 90^\\circ$).
              </li>
              <li><strong>Hai mặt phẳng vuông góc:</strong> Hai mặt phẳng gọi là vuông góc với nhau nếu góc giữa chúng bằng $90^\\circ$. Ký hiệu: $(\\alpha) \\perp (\\beta)$.</li>
              <li><strong>Dấu hiệu nhận biết (Định lý 1 then chốt):</strong> Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia thì hai mặt phẳng đó vuông góc với nhau:
                $$a \\subset (\\alpha), a \\perp (\\beta) \\Rightarrow (\\alpha) \\perp (\\beta)$$
              </li>
              <li><strong>Tính chất hạ đường vuông góc (Định lý 2 cốt lõi để tính khoảng cách):</strong>
                Nếu hai mặt phẳng vuông góc với nhau thì bất kì đường thẳng nào nằm trong mặt này và vuông góc với giao tuyến thì sẽ <strong>vuông góc với mặt phẳng kia</strong>:
                $$\\begin{cases} (\\alpha) \\perp (\\beta) \\\\ (\\alpha) \\cap (\\beta) = c \\\\ a \\subset (\\alpha), a \\perp c \\end{cases} \\Rightarrow a \\perp (\\beta)$$
              </li>
            </ul>`,
            `<li>Muốn chứng minh $(\\alpha) \\perp (\\beta)$: Chỉ cần tìm một đường thẳng $d$ nằm trong mặt này mà vuông góc với mặt kia.</li>
            <li>Định lý 2 là công cụ mạnh nhất để tìm chiều cao: Hạ đường thẳng vuông góc với giao tuyến là có ngay đường vuông góc mặt phẳng!</li>`,
            `<li>Nhầm góc giữa hai mặt phẳng là góc giữa hai cạnh bất kì không vuông góc với giao tuyến.</li>
            <li>Quên điều kiện hai đường thẳng $a, b$ phải cắt giao tuyến tại CÙNG MỘT ĐIỂM $I$.</li>`,
            `<li><em>"Chứa một đường vuông góc mặt kia $\\rightarrow$ Hai Mặt Phẳng Vuông Góc – Vuông góc với giao tuyến thì vuông góc cả mặt phẳng kia!"</em></li>`
          ),
          mcqs: [
            {
              question: "Để chứng minh mặt phẳng $(P)$ vuông góc với mặt phẳng $(Q)$, ta cần chứng minh:",
              options: [
                "A. $(P)$ chứa một đường thẳng vuông góc với $(Q)$",
                "B. $(P)$ và $(Q)$ cắt nhau",
                "C. Mọi đường thẳng trong $(P)$ đều vuông góc với $(Q)$",
                "D. $(P)$ song song với một đường thẳng trong $(Q)$"
              ],
              correct: "A",
              explanation: "Định lý 1 chuẩn SGK: Nếu một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia thì hai mặt phẳng đó vuông góc với nhau.",
              hint1: "Chỉ cần 1 đường thẳng trong mặt này vuông góc với mặt kia.",
              hint2: "$(P)$ chứa đường thẳng vuông góc với $(Q)$."
            },
            {
              question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Mặt phẳng $(SAB)$ vuông góc với mặt phẳng nào sau đây?",
              options: ["A. $(ABC)$", "B. $(SBC)$", "C. $(SAC)$ duy nhất", "D. Không vuông góc với mặt nào"],
              correct: "A",
              explanation: "Vì $(SAB)$ chứa đường thẳng $SA$ mà $SA \\perp (ABC)$ nên theo định lý 1 ta có $(SAB) \\perp (ABC)$. Tương tự $(SAC) \\perp (ABC)$.",
              hint1: "Mặt phẳng $(SAB)$ chứa đường thẳng $SA$.",
              hint2: "Vì $SA \\perp (ABC)$ nên $(SAB) \\perp (ABC)$."
            },
            {
              question: "Cho hai mặt phẳng $(P) \\perp (Q)$ cắt nhau theo giao tuyến $\\Delta$. Đường thẳng $d$ nằm trong $(P)$ và vuông góc với $\\Delta$. Khi đó:",
              options: ["A. $d \\perp (Q)$", "B. $d \\parallel (Q)$", "C. $d$ cắt $(Q)$ tại điểm không thuộc $\\Delta$", "D. $d$ chéo với mọi đường trong $(Q)$"],
              correct: "A",
              explanation: "Định lý 2 chuẩn SGK: Nằm trong mặt này và vuông góc với giao tuyến thì vuông góc với mặt phẳng kia: $d \\perp (Q)$.",
              hint1: "Định lý 2 về hai mặt phẳng vuông góc.",
              hint2: "$d \\perp (Q)$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông và $SA \\perp (ABCD)$:",
          items: [
            { key: "a", text: "Mặt phẳng $(SAB)$ vuông góc với mặt phẳng đáy $(ABCD)$.", correct: "true", explain: "Vì $(SAB)$ chứa $SA \\perp (ABCD)$." },
            { key: "b", text: "Mặt phẳng $(SBC)$ vuông góc với mặt phẳng $(SAB)$.", correct: "true", explain: "Vì $BC \\perp (SAB)$ và $BC \\subset (SBC)$." },
            { key: "c", text: "Mặt phẳng $(SCD)$ vuông góc với mặt phẳng $(SAD)$.", correct: "true", explain: "Vì $CD \\perp (SAD)$ và $CD \\subset (SCD)$." },
            { key: "d", text: "Mặt phẳng $(SBD)$ vuông góc với mặt phẳng $(SAC)$.", correct: "true", explain: "Vì $BD \\perp (SAC)$ (do $BD \\perp AC$ và $BD \\perp SA$)." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về góc giữa hai mặt phẳng cắt nhau:",
          items: [
            { key: "a", text: "Góc giữa hai mặt phẳng luôn nằm trong đoạn $[0^\\circ; 90^\\circ]$.", correct: "true", explain: "Quy chuẩn độ lớn góc." },
            { key: "b", text: "Góc nhị diện có thể nhận giá trị tù lên tới $180^\\circ$.", correct: "true", explain: "Góc nhị diện có hướng từ 0 đến 180 độ, khác với góc giữa hai mặt phẳng." },
            { key: "c", text: "Nếu hai mặt phẳng vuông góc thì góc giữa chúng bằng $90^\\circ$.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "d", text: "Góc giữa hai mặt phẳng song song bằng $180^\\circ$.", correct: "false", explain: "Góc giữa hai mặt phẳng song song hoặc trùng nhau quy ước bằng $0^\\circ$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình chóp tam giác đều $S.ABC$ có đáy $ABC$ là tam giác đều tâm $O$, $SO \\perp (ABC)$:",
          items: [
            { key: "a", text: "Đường thẳng $SO$ vuông góc với mặt đáy $(ABC)$.", correct: "true", explain: "Đặc trưng chóp đều." },
            { key: "b", text: "Mọi mặt phẳng chứa đường cao $SO$ đều vuông góc với mặt phẳng đáy $(ABC)$.", correct: "true", explain: "Vì chứa đường vuông góc đáy." },
            { key: "c", text: "Các mặt bên tạo với đáy các góc bằng nhau.", correct: "true", explain: "Tính chất chóp đều đối xứng." },
            { key: "d", text: "Mặt bên $(SAB)$ vuông góc với mặt bên $(SAC)$.", correct: "false", explain: "Góc giữa 2 mặt bên chóp đều thường nhọn, không vuông góc." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất liên quan đến hai mặt phẳng vuông góc:",
          items: [
            { key: "a", text: "Nếu hai mặt phẳng cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng (nếu có) vuông góc với mặt phẳng thứ ba đó.", correct: "true", explain: "Định lý giao tuyến vuông góc." },
            { key: "b", text: "Qua một đường thẳng không vuông góc với $(\\alpha)$ có duy nhất một mặt phẳng vuông góc với $(\\alpha)$.", correct: "true", explain: "Mặt phẳng chứa đường thẳng và hình chiếu của nó." },
            { key: "c", text: "Nếu hai mặt phẳng vuông góc thì mọi đường thẳng trong mặt này đều vuông góc với mặt kia.", correct: "false", explain: "Chỉ những đường vuông góc với giao tuyến mới vuông góc với mặt kia." },
            { key: "d", text: "Hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau.", correct: "true", explain: "Tính chất quan hệ vuông góc - song song." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong xây dựng, bức tường đứng vuông góc với sàn nhà:",
          items: [
            { key: "a", text: "Giao tuyến của tường và sàn là chân tường.", correct: "true", explain: "Đường giao tuyến." },
            { key: "b", text: "Cột nhà dựng đứng vuông góc với chân tường thì vuông góc với mặt sàn.", correct: "true", explain: "Định lý 2 SGK." },
            { key: "c", text: "Hai bức tường vuông góc với sàn nhà thì đường góc tường nối hai tường vuông góc với sàn nhà.", correct: "true", explain: "Định lý giao tuyến của hai mặt phẳng cùng vuông góc mặt thứ ba." },
            { key: "d", text: "Cửa sổ gắn nghiêng trên tường vẫn vuông góc với sàn nhà.", correct: "false", explain: "Mặt phẳng cửa sổ nghiêng thì không vuông góc với sàn." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về hình lăng trụ đứng:",
          items: [
            { key: "a", text: "Hình lăng trụ đứng có các cạnh bên vuông góc với các mặt phẳng đáy.", correct: "true", explain: "Định nghĩa lăng trụ đứng." },
            { key: "b", text: "Các mặt bên của hình lăng trụ đứng là các hình chữ nhật.", correct: "true", explain: "Hình bình hành có cạnh bên vuông góc đáy." },
            { key: "c", text: "Mọi mặt bên của hình lăng trụ đứng đều vuông góc với hai đáy.", correct: "true", explain: "Vì chứa các cạnh bên vuông góc đáy." },
            { key: "d", text: "Hình lăng trụ đứng có đáy là tam giác đều gọi là hình chóp đều.", correct: "false", explain: "Đó là hình lăng trụ tam giác đều, không phải hình chóp." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 26: KHOẢNG CÁCH (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai26": {
      id: "toan11_bai26",
      lessonTitle: "Bài 26: Khoảng cách",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 26:") || t.includes("khoảng cách")) && !t.includes("vị trí tương đối") && !t.includes("công thức tính góc") && !t.includes("biến cố");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khoảng cách từ điểm đến mặt phẳng và Khoảng cách giữa hai đường thẳng chéo nhau",
          theory: createStandardTheoryHTML(
            "Bài 26: Khoảng cách", "Lớp 11", 1,
            "Khoảng cách từ điểm đến mặt phẳng và Khoảng cách giữa hai đường thẳng chéo nhau",
            `<p>Các loại khoảng cách trong không gian chuẩn SGK Toán 11 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Khoảng cách từ điểm $M$ đến mặt phẳng $(\\alpha)$:</strong>
                $$d(M, (\\alpha)) = MH$$
                với $H$ là hình chiếu vuông góc của $M$ lên $(\\alpha)$.
                <br/>• <strong>Quy tắc dời điểm:</strong> Nếu $AB$ cắt $(\\alpha)$ tại $I$ thì $\\frac{d(A, (\\alpha))}{d(B, (\\alpha))} = \\frac{IA}{IB}$. (Đặc biệt: nếu $AB \\parallel (\\alpha)$ thì $d(A, (\\alpha)) = d(B, (\\alpha))$).
                <br/>• <strong>Quy tắc đổi về chân đường cao $H$:</strong> Mọi khoảng cách từ điểm bất kì đều nên chuyển về tính từ chân đường cao của khối chóp!
              </li>
              <li><strong>2. Khoảng cách giữa đường thẳng và mặt phẳng song song:</strong> $d(a, (\\alpha)) = d(A, (\\alpha))$ với $A$ là điểm bất kì thuộc $a$.</li>
              <li><strong>3. Khoảng cách giữa hai mặt phẳng song song:</strong> $d((\\alpha), (\\beta)) = d(A, (\\beta))$ với $A \\in (\\alpha)$.</li>
              <li><strong>4. Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$:</strong>
                <br/>• Là độ dài đoạn vuông góc chung $MN$ của $a$ và $b$ ($M \\in a, N \\in b, MN \\perp a, MN \\perp b$).
                <br/>• <strong>Phương pháp mặt phẳng song song (hay dùng nhất):</strong> Dựng mặt phẳng $(\\beta)$ chứa $b$ và song song với $a$. Khi đó:
                $$d(a, b) = d(a, (\\beta)) = d(A, (\\beta)) \\quad (A \\in a)$$
              </li>
            </ul>`,
            `<li>Bí quyết tính khoảng cách từ chân đường cao $A$ đến mặt bên $(SBC)$:
              <br/>• Dựng $AK \\perp BC$ tại $K$, nối $SK$.
              <br/>• Dựng $AH \\perp SK$ tại $H$. Khi đó $d(A, (SBC)) = AH$.
              <br/>• Tính bằng hệ thức lượng: $\\frac{1}{AH^2} = \\frac{1}{SA^2} + \\frac{1}{AK^2}$.
            </li>`,
            `<li>Nhầm điểm bất kì với chân đường vuông góc (hạ xiên thay vì hạ vuông góc).</li>
            <li>Dùng sai tỉ số khoảng cách khi điểm nằm khác phía so với mặt phẳng.</li>`,
            `<li><em>"Khoảng cách chân đường cao đến mặt bên: Kẻ hai nhát vuông góc – Nhát 1 xuống đáy, nhát 2 lên cạnh xiên – Nghịch đảo bình phương!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ và $SA = 3$. Khoảng cách từ điểm $S$ đến mặt phẳng $(ABC)$ bằng:",
              options: ["A. 3", "B. $\\sqrt{3}$", "C. 6", "D. 9"],
              correct: "A",
              explanation: "Vì $SA \\perp (ABC)$ nên hình chiếu của $S$ lên mặt phẳng $(ABC)$ chính là $A$. Khoảng cách $d(S, (ABC)) = SA = 3$.",
              hint1: "Chân đường vuông góc hạ từ $S$ xuống đáy là $A$.",
              hint2: "$d = SA = 3$."
            },
            {
              question: "Để tính khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$, phương pháp hiệu quả nhất là đưa về khoảng cách:",
              options: [
                "A. Từ một điểm trên $a$ đến mặt phẳng chứa $b$ và song song với $a$",
                "B. Giữa hai điểm bất kì trên $a$ và $b$",
                "C. Từ trung điểm của $a$ đến $b$",
                "D. Giữa hai mặt phẳng vuông góc"
              ],
              correct: "A",
              explanation: "Phương pháp chuẩn SGK: Dựng mặt phẳng $(\\beta)$ chứa $b$ và song song với $a$. Khi đó $d(a, b) = d(a, (\\beta)) = d(A, (\\beta))$ với $A \\in a$.",
              hint1: "Dựng mặt phẳng chứa đường này và song song đường kia.",
              hint2: "Khoảng cách từ 1 điểm đến mặt phẳng song song."
            },
            {
              question: "Cho tam giác vuông tại $A$ có $SA \\perp (ABC)$. Biết $SA = 4, AB = 3$. Khoảng cách từ $A$ đến đường thẳng $SB$ bằng:",
              options: ["A. 2.4", "B. 5", "C. 3.5", "D. 1.2"],
              correct: "A",
              explanation: "Tam giác $SAB$ vuông tại $A$ có cạnh huyền $SB = \\sqrt{4^2 + 3^2} = 5$. Chiều cao $AH = \\frac{SA \\cdot AB}{SB} = \\frac{4 \\times 3}{5} = 2.4$. Khoảng cách từ $A$ đến $SB$ chính là $AH = 2.4$.",
              hint1: "Dùng hệ thức lượng trong tam giác vuông: $h = (b \\cdot c) / a$.",
              hint2: "$(4 \\times 3) / 5 = 2.4$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$:",
          items: [
            { key: "a", text: "Khoảng cách từ điểm $A'$ đến mặt phẳng đáy $(ABCD)$ bằng $a$.", correct: "true", explain: "Vì $A'A \\perp (ABCD)$ và $A'A = a$." },
            { key: "b", text: "Khoảng cách giữa hai mặt phẳng đối diện $(ABCD)$ và $(A'B'C'D')$ bằng $a$.", correct: "true", explain: "Độ dài cạnh bên." },
            { key: "c", text: "Khoảng cách giữa hai đường thẳng $AB$ và $C'D'$ bằng $a\\sqrt{2}$.", correct: "false", explain: "$AB \\parallel (CDD'C')$ chứa $C'D'$, khoảng cách bằng $d(AB, CD) = a$ (không phải $a\\sqrt{2}$)." },
            { key: "d", text: "Đoạn vuông góc chung của $AA'$ và $BC$ là $AB$ có độ dài bằng $a$.", correct: "true", explain: "$AB \\perp AA'$ và $AB \\perp BC$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$ với $SA = a$. Đáy $ABC$ là tam giác vuông tại $B$ có $AB = a, BC = a\\sqrt{2}$:",
          items: [
            { key: "a", text: "$BC \\perp (SAB)$.", correct: "true", explain: "$BC \\perp AB$ và $BC \\perp SA$." },
            { key: "b", text: "Khoảng cách từ điểm $C$ đến mặt phẳng $(SAB)$ là $CB = a\\sqrt{2}$.", correct: "true", explain: "Vì $CB \\perp (SAB)$ tại $B$." },
            { key: "c", text: "Khoảng cách từ điểm $A$ đến mặt phẳng $(SBC)$ bằng $\\frac{a\\sqrt{2}}{2}$.", correct: "true", explain: "Hạ $AH \\perp SB$. Tam giác $SAB$ vuông cân tại $A$ nên $AH = a/\\sqrt{2} = a\\sqrt{2}/2$." },
            { key: "d", text: "Khoảng cách giữa $SA$ và $BC$ bằng $AB = a$.", correct: "true", explain: "$AB$ vuông góc với cả $SA$ và $BC$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Về quy tắc dời điểm tính khoảng cách:",
          items: [
            { key: "a", text: "Nếu đường thẳng $AB$ song song với $(\\alpha)$ thì $d(A, (\\alpha)) = d(B, (\\alpha))$.", correct: "true", explain: "Tính chất song song." },
            { key: "b", text: "Nếu $M$ là trung điểm của $AB$ và $B \\in (\\alpha)$ thì $d(M, (\\alpha)) = \\frac{1}{2} d(A, (\\alpha))$.", correct: "true", explain: "Định lí Ta-lét." },
            { key: "c", text: "Nếu $AB$ cắt $(\\alpha)$ tại $I$ thì $\\frac{d(A, (\\alpha))}{d(B, (\\alpha))} = \\frac{IA}{IB}$.", correct: "true", explain: "Tỉ số khoảng cách chuẩn." },
            { key: "d", text: "Khoảng cách từ một điểm đến mặt phẳng luôn bằng khoảng cách từ điểm đó đến một điểm bất kì trên mặt phẳng.", correct: "false", explain: "Khoảng cách là độ dài đoạn VUÔNG GÓC, luôn là khoảng cách ngắn nhất, không bằng khoảng cách đến điểm bất kì." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho tứ diện đều $ABCD$ cạnh $a$. Gọi $H$ là trọng tâm tam giác $BCD$:",
          items: [
            { key: "a", text: "Đường thẳng $AH$ vuông góc với mặt phẳng đáy $(BCD)$.", correct: "true", explain: "Tính chất tứ diện đều." },
            { key: "b", text: "Độ dài $BH = \\frac{a\\sqrt{3}}{3}$.", correct: "true", explain: "Bán kính ngoại tiếp tam giác đều đáy." },
            { key: "c", text: "Chiều cao $AH = \\sqrt{a^2 - BH^2} = \\sqrt{a^2 - \\frac{a^2}{3}} = \\frac{a\\sqrt{6}}{3}$.", correct: "true", explain: "Pythagore chuẩn." },
            { key: "d", text: "Khoảng cách từ $A$ đến mặt phẳng $(BCD)$ bằng $\\frac{a\\sqrt{6}}{3}$.", correct: "true", explain: "Chính bằng độ dài $AH$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Về đoạn vuông góc chung của hai đường thẳng chéo nhau:",
          items: [
            { key: "a", text: "Đoạn vuông góc chung có hai đầu mút lần lượt thuộc hai đường thẳng đó.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "b", text: "Đoạn vuông góc chung vuông góc với cả hai đường thẳng đó.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "c", text: "Đoạn vuông góc chung là đoạn thẳng ngắn nhất nối một điểm trên đường này với một điểm trên đường kia.", correct: "true", explain: "Bất đẳng thức hình học." },
            { key: "d", text: "Hai đường thẳng chéo nhau có vô số đoạn vuông góc chung khác nhau.", correct: "false", explain: "Đoạn vuông góc chung là DUY NHẤT." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán khoảng cách trong thực tế đời sống:",
          items: [
            { key: "a", text: "Độ cao của trần nhà là khoảng cách giữa mặt sàn và trần nhà.", correct: "true", explain: "Ứng dụng xây dựng." },
            { key: "b", text: "Khoảng cách an toàn giữa hai đường dây điện cao thế là khoảng cách giữa hai đường thẳng chéo nhau trong không gian.", correct: "true", explain: "An toàn lưới điện." },
            { key: "c", text: "Độ sâu của một cái giếng khoan là khoảng cách từ miệng giếng đến đáy giếng.", correct: "true", explain: "Khoảng cách thẳng đứng." },
            { key: "d", text: "Khoảng cách từ một điểm đến mặt đất luôn được đo theo phương xiên.", correct: "false", explain: "Luôn được đo theo phương THẲNG ĐỨNG vuông góc với mặt đất." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 27: THỂ TÍCH (TOÁN 11 - KNTT)
    // =========================================================================
    "toan11_bai27": {
      id: "toan11_bai27",
      lessonTitle: "Bài 27: Thể tích",
      grade: "Lớp 11",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 27:") || t.includes("thể tích")) && !t.includes("tích phân") && !t.includes("ứng dụng hình học");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Thể tích của khối lăng trụ, khối chóp và khối chóp cụt đều",
          theory: createStandardTheoryHTML(
            "Bài 27: Thể tích", "Lớp 11", 1,
            "Thể tích của khối lăng trụ, khối chóp và khối chóp cụt đều",
            `<p>Các công thức tính thể tích khối đa diện chuẩn SGK Toán 11 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Thể tích khối lăng trụ (kể cả lăng trụ đứng và xiên):</strong>
                $$V = B \\cdot h$$
                với $B$ là diện tích đáy, $h$ là chiều cao (khoảng cách giữa hai đáy).
                <br/>• Khối hộp chữ nhật: $V = a \\cdot b \\cdot c$.
                <br/>• Khối lập phương cạnh $a$: $V = a^3$.
              </li>
              <li><strong>2. Thể tích khối chóp:</strong>
                $$V = \\frac{1}{3} B \\cdot h$$
                với $B$ là diện tích đáy, $h$ là chiều cao hạ từ đỉnh xuống đáy.
              </li>
              <li><strong>3. Thể tích khối chóp cụt đều:</strong>
                $$V = \\frac{1}{3} h \\left(B + B' + \\sqrt{B \\cdot B'}\\right)$$
                với $B, B'$ là diện tích hai đáy, $h$ là chiều cao.
              </li>
              <li><strong>4. Tỉ số thể tích khối chóp tam giác (Công thức Simson):</strong>
                Trên các cạnh $SA, SB, SC$ của hình chóp $S.ABC$ lấy các điểm $A', B', C'$. Khi đó:
                $$\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}$$
              </li>
            </ul>`,
            `<li>Khối lăng trụ KHÔNG CÓ hệ số $1/3$: $V = B \\cdot h$. Khối chóp CÓ hệ số $1/3$: $V = \\frac{1}{3} B \\cdot h$.</li>
            <li>Công thức tỉ số thể tích Simson CHỈ ÁP DỤNG ĐƯỢC CHO CHÓP TAM GIÁC, tuyệt đối không áp dụng trực tiếp cho chóp tứ giác (phải chia chóp tứ giác thành 2 chóp tam giác).</li>`,
            `<li>Quên hệ số $1/3$ khi tính thể tích khối chóp.</li>
            <li>Áp dụng nhầm công thức Simson cho hình chóp đáy tứ giác mà không chia đôi đáy.</li>`,
            `<li><em>"Lăng trụ: Đáy nhân Chiều Cao – Khối chóp: Một Phần Ba Đáy nhân Chiều Cao – Simson nhân 3 tỉ số cạnh!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một khối chóp có diện tích đáy $B = 12\\text{ cm}^2$ và chiều cao $h = 5\\text{ cm}$. Thể tích của khối chóp bằng:",
              options: ["A. $20\\text{ cm}^3$", "B. $60\\text{ cm}^3$", "C. $30\\text{ cm}^3$", "D. $10\\text{ cm}^3$"],
              correct: "A",
              explanation: "$V = \\frac{1}{3} B h = \\frac{1}{3} \\times 12 \\times 5 = 20\\text{ cm}^3$.",
              hint1: "Công thức $V = \\frac{1}{3} B h$.",
              hint2: "$\\frac{1}{3} \\times 12 \\times 5 = 20$."
            },
            {
              question: "Thể tích của khối lập phương có cạnh bằng $3\\text{ cm}$ là:",
              options: ["A. $27\\text{ cm}^3$", "B. $9\\text{ cm}^3$", "C. $18\\text{ cm}^3$", "D. $54\\text{ cm}^3$"],
              correct: "A",
              explanation: "Thể tích khối lập phương cạnh $a$ là $V = a^3 = 3^3 = 27\\text{ cm}^3$.",
              hint1: "$V = a^3$.",
              hint2: "$3^3 = 27$."
            },
            {
              question: "Cho hình chóp $S.ABC$. Gọi $A', B', C'$ lần lượt là trung điểm của $SA, SB, SC$. Tỉ số thể tích $\\frac{V_{S.A'B'C'}}{V_{S.ABC}}$ bằng:",
              options: ["A. $\\frac{1}{8}$", "B. $\\frac{1}{2}$", "C. $\\frac{1}{4}$", "D. $\\frac{1}{6}$"],
              correct: "A",
              explanation: "Theo công thức Simson: $\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC} = \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{8}$.",
              hint1: "Nhân ba tỉ số cạnh: $(1/2) \\times (1/2) \\times (1/2)$.",
              hint2: "$1/8$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = 2a$:",
          items: [
            { key: "a", text: "Diện tích đáy của hình chóp là $B = a^2$.", correct: "true", explain: "Diện tích hình vuông." },
            { key: "b", text: "Chiều cao của khối chóp là $h = SA = 2a$.", correct: "true", explain: "Do $SA \\perp đáy$." },
            { key: "c", text: "Thể tích của khối chóp $S.ABCD$ là $V = \\frac{2a^3}{3}$.", correct: "true", explain: "$V = \\frac{1}{3} a^2 (2a) = \\frac{2a^3}{3}$." },
            { key: "d", text: "Thể tích khối chóp $S.ABC$ bằng thể tích khối chóp $S.ADC$ và bằng $\\frac{a^3}{3}$.", correct: "true", explain: "Đáy chia đôi nên thể tích bằng nửa khối chóp: $\\frac{2a^3}{3} / 2 = \\frac{a^3}{3}$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho khối lăng trụ tam giác đều $ABC.A'B'C'$ có tất cả các cạnh đều bằng $a$:",
          items: [
            { key: "a", text: "Đáy $ABC$ là tam giác đều cạnh $a$ có diện tích $B = \\frac{a^2\\sqrt{3}}{4}$.", correct: "true", explain: "Diện tích tam giác đều." },
            { key: "b", text: "Chiều cao của khối lăng trụ đứng là $h = AA' = a$.", correct: "true", explain: "Cạnh bên bằng $a$." },
            { key: "c", text: "Thể tích của khối lăng trụ là $V = \\frac{a^3\\sqrt{3}}{4}$.", correct: "true", explain: "$V = B \\cdot h = \\frac{a^2\\sqrt{3}}{4} \\cdot a = \\frac{a^3\\sqrt{3}}{4}$." },
            { key: "d", text: "Thể tích của khối chóp $A'.ABC$ bằng $\\frac{a^3\\sqrt{3}}{4}$.", correct: "false", explain: "Thể tích khối chóp $A'.ABC = \\frac{1}{3} V_{lăng trụ} = \\frac{a^3\\sqrt{3}}{12}$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Về công thức tỉ số thể tích Simson:",
          items: [
            { key: "a", text: "Công thức Simson áp dụng cho hình chóp tam giác.", correct: "true", explain: "Định lý chuẩn." },
            { key: "b", text: "Nếu chia đôi cả 3 cạnh bên của chóp tam giác thì thể tích giảm đi 8 lần.", correct: "true", explain: "$(1/2)^3 = 1/8$." },
            { key: "c", text: "Công thức Simson áp dụng được nguyên vẹn cho hình chóp tứ giác $S.ABCD$.", correct: "false", explain: "Sai lầm nghiêm trọng, phải chia chóp tứ giác thành 2 chóp tam giác rồi mới áp dụng." },
            { key: "d", text: "Mặt phẳng đi qua trung điểm các cạnh bên chia khối chóp tam giác thành hai phần có thể tích bằng $1/8$ và $7/8$.", correct: "true", explain: "Phần trên $1/8$, phần dưới $1 - 1/8 = 7/8$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hình hộp chữ nhật có ba kích thước lần lượt là $2\\text{ cm}, 3\\text{ cm}, 4\\text{ cm}$:",
          items: [
            { key: "a", text: "Thể tích của hình hộp chữ nhật là $V = 2 \\times 3 \\times 4 = 24\\text{ cm}^3$.", correct: "true", explain: "Tích 3 kích thước." },
            { key: "b", text: "Diện tích toàn phần của hình hộp là $2(2\\times 3 + 3\\times 4 + 4\\times 2) = 52\\text{ cm}^2$.", correct: "true", explain: "Diện tích 6 mặt." },
            { key: "c", text: "Độ dài đường chéo của hình hộp là $\\sqrt{2^2 + 3^2 + 4^2} = \\sqrt{29}\\text{ cm}$.", correct: "true", explain: "Đường chéo hình hộp." },
            { key: "d", text: "Nếu tăng gấp đôi tất cả các kích thước thì thể tích tăng gấp 2 lần.", correct: "false", explain: "Thể tích tăng gấp $2^3 = 8$ lần." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong thực tế thiết kế bể chứa nước:",
          items: [
            { key: "a", text: "Một mét khối ($1\\text{ m}^3$) nước tương đương với $1000\\text{ lít}$ nước.", correct: "true", explain: "Quy đổi đơn vị thể tích." },
            { key: "b", text: "Bể nước ngầm hình hộp chữ nhật kích thước $2\\text{ m} \\times 1.5\\text{ m} \\times 1\\text{ m}$ chứa được tối đa $3000\\text{ lít}$.", correct: "true", explain: "$2 \\times 1.5 \\times 1 = 3\\text{ m}^3 = 3000$ lít." },
            { key: "c", text: "Tháp nước hình chóp nón hoặc chóp đa diện giúp tạo áp lực nước tự nhiên xuống đường ống.", correct: "true", explain: "Nguyên lí thuỷ tĩnh học." },
            { key: "d", text: "Thể tích bể chứa phụ thuộc vào hình dạng bên ngoài chứ không phụ thuộc kích thước bên trong.", correct: "false", explain: "Dung tích chứa nước phụ thuộc vào kích thước lọt lòng bên trong." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về thể tích khối đa diện tổng quát:",
          items: [
            { key: "a", text: "Có thể tính thể tích khối đa diện phức tạp bằng cách chia nhỏ thành các khối chóp và lăng trụ đơn giản.", correct: "true", explain: "Phương pháp phân chia khối đa diện." },
            { key: "b", text: "Hai khối đa diện bằng nhau thì có thể tích bằng nhau.", correct: "true", explain: "Tính chất thể tích." },
            { key: "c", text: "Nếu một khối đa diện được chia thành hai khối đa diện thì thể tích của nó bằng tổng thể tích hai khối đó.", correct: "true", explain: "Tính chất cộng tính thể tích." },
            { key: "d", text: "Hai khối đa diện có cùng diện tích toàn phần thì chắc chắn có thể tích bằng nhau.", correct: "false", explain: "Thể tích phụ thuộc hình dạng (ví dụ quả cầu có thể tích lớn nhất cùng diện tích mặt)." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE11_PERPENDICULAR_LESSONS);

})();
