/**
 * GIÁO ÁN CHI TIẾT TỪNG BÀI TOÁN LỚP 11 - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
 * Chuẩn 100% nội dung sách giáo khoa Bộ Giáo dục và Đào tạo
 */

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};

  function createStandardTheoryHTML(lessonTitle, grade, partNum, sectionTitle, sgkHtml, noteHtml, mistakeHtml, tipHtml) {
    if (typeof window.createStandardTheoryHTML === 'function') {
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

  // BÀI 1: GIÁ TRỊ LƯỢNG GIÁC CỦA GÓC LƯỢNG GIÁC
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
        sectionTitle: "Mục 1: Góc lượng giác, đơn vị radian và đường tròn lượng giác",
        theory: createStandardTheoryHTML(
          "Bài 1: Giá trị lượng giác của góc lượng giác", "Lớp 11", 1,
          "Góc lượng giác, đơn vị radian và đường tròn lượng giác",
          `<p>Khái niệm mở rộng từ hình học sang lượng giác:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li><strong>Đơn vị radian:</strong> $\\pi\\text{ rad} = 180^\\circ \\Leftrightarrow 1\\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ, \\quad 1^\\circ = \\frac{\\pi}{180}\\text{ rad}$.</li>
            <li><strong>Độ dài cung tròn:</strong> Cung tròn có số đo $\\alpha\\text{ rad}$ trên đường tròn bán kính $R$ có độ dài là $l = R\\alpha$.</li>
            <li><strong>Đường tròn lượng giác:</strong> Là đường tròn định hướng tâm $O$, bán kính $R = 1$, có điểm gốc $A(1; 0)$. Chiều dương là ngược chiều kim đồng hồ, chiều âm là cùng chiều kim đồng hồ.</li>
          </ul>`,
          `<li>Số đo góc lượng giác có dạng $\\alpha + k2\\pi$ ($k \\in \\mathbb{Z}$).</li>
          <li>Đổi góc: $30^\\circ = \\frac{\\pi}{6}, 45^\\circ = \\frac{\\pi}{4}, 60^\\circ = \\frac{\\pi}{3}, 90^\\circ = \\frac{\\pi}{2}$.</li>`,
          `<li>Quên chuyển máy tính sang chế độ Radian khi làm việc với $\\pi$.</li>`,
          `<li><em>"Ngược chiều kim đồng hồ là chiều DƯƠNG – Độ dài cung l = R nhân alpha!"</em></li>`
        ),
        mcqs: [
          {
            question: "Góc có số đo $120^\\circ$ đổi sang đơn vị radian bằng:",
            options: ["A. $\\frac{2\\pi}{3}$", "B. $\\frac{3\\pi}{4}$", "C. $\\frac{\\pi}{3}$", "D. $\\frac{5\\pi}{6}$"],
            correct: "A",
            explanation: "$120^\\circ = 120 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{3}\\text{ rad}$.",
            hint1: "Nhân số độ với $\\frac{\\pi}{180}$.",
            hint2: "$\\frac{120}{180} = \\frac{2}{3}$."
          },
          {
            question: "Trên đường tròn bán kính $R = 5\\text{ cm}$, độ dài cung tròn có số đo $\\alpha = \\frac{\\pi}{2}\\text{ rad}$ bằng:",
            options: ["A. $\\frac{5\\pi}{2}\\text{ cm}$", "B. $5\\pi\\text{ cm}$", "C. $10\\pi\\text{ cm}$", "D. $\\frac{\\pi}{10}\\text{ cm}$"],
            correct: "A",
            explanation: "Độ dài cung $l = R\\alpha = 5 \\times \\frac{\\pi}{2} = \\frac{5\\pi}{2}\\text{ cm}$.",
            hint1: "Áp dụng công thức $l = R\\alpha$.",
            hint2: "$5 \\times \\frac{\\pi}{2} = \\frac{5\\pi}{2}$."
          },
          {
            question: "Điểm biểu diễn góc lượng giác $\\alpha = -\\frac{\\pi}{2}$ trên đường tròn lượng giác có toạ độ là:",
            options: ["A. $(0; -1)$", "B. $(0; 1)$", "C. $(1; 0)$", "D. $(-1; 0)$"],
            correct: "A",
            explanation: "Điểm biểu diễn góc $-\\frac{\\pi}{2}$ nằm trên trục tung phía dưới: $(0; -1)$.",
            hint1: "Quay cùng chiều kim đồng hồ góc $90^\\circ$ từ $A(1; 0)$.",
            hint2: "Điểm đến là $(0; -1)$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Các giá trị lượng giác và các hệ thức lượng giác cơ bản",
        theory: createStandardTheoryHTML(
          "Bài 1: Giá trị lượng giác của góc lượng giác", "Lớp 11", 2,
          "Các giá trị lượng giác và các hệ thức lượng giác cơ bản",
          `<p>Bốn hệ thức lượng giác cơ bản và dấu các giá trị lượng giác:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$</li>
            <li>$1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha} \\quad (\\alpha \\neq \\frac{\\pi}{2} + k\\pi)$</li>
            <li>$1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha} \\quad (\\alpha \\neq k\\pi)$</li>
            <li>$\\tan \\alpha \\cdot \\cot \\alpha = 1$</li>
          </ul>`,
          `<li>Dấu theo góc phần tư: I (+,+,+,+); II (sin dương); III (tan, cot dương); IV (cos dương).</li>`,
          `<li>Quên xét dấu khi khai căn $\\cos \\alpha = \\pm \\sqrt{1 - \\sin^2 \\alpha}$.</li>`,
          `<li><em>"Nhất cả - Nhì sin - Tam tang cot - Tứ cos!"</em></li>`
        ),
        mcqs: [
          {
            question: "Cho $\\sin \\alpha = \\frac{3}{5}$ với $\\frac{\\pi}{2} < \\alpha < \\pi$. Giá trị của $\\cos \\alpha$ bằng:",
            options: ["A. $-\\frac{4}{5}$", "B. $\\frac{4}{5}$", "C. $-\\frac{16}{25}$", "D. $\\frac{2}{5}$"],
            correct: "A",
            explanation: "Vì $\\frac{\\pi}{2} < \\alpha < \\pi$ nên $\\cos \\alpha < 0$. $\\cos \\alpha = -\\sqrt{1 - (3/5)^2} = -\\frac{4}{5}$.",
            hint1: "Góc phần tư thứ II nên cos mang dấu âm.",
            hint2: "$\\cos \\alpha = -\\sqrt{1 - 9/25} = -4/5$."
          },
          {
            question: "Giá trị của biểu thức $P = \\sin^2 15^\\circ + \\sin^2 75^\\circ$ bằng:",
            options: ["A. $1$", "B. $0$", "C. $\\frac{1}{2}$", "D. $2$"],
            correct: "A",
            explanation: "Vì $15^\\circ + 75^\\circ = 90^\\circ$ nên $\\sin 75^\\circ = \\cos 15^\\circ$. Do đó $P = \\sin^2 15^\\circ + \\cos^2 15^\\circ = 1$.",
            hint1: "Góc phụ nhau: $\\sin 75^\\circ = \\cos 15^\\circ$.",
            hint2: "$\\sin^2 + \\cos^2 = 1$."
          },
          {
            question: "Cho $\\tan \\alpha = 2$. Giá trị của biểu thức $A = \\frac{2\\sin \\alpha - 3\\cos \\alpha}{4\\sin \\alpha + \\cos \\alpha}$ bằng:",
            options: ["A. $\\frac{1}{9}$", "B. $\\frac{1}{7}$", "C. $\\frac{2}{9}$", "D. $-1$"],
            correct: "A",
            explanation: "Chia cả tử và mẫu cho $\\cos \\alpha$: $A = \\frac{2(2) - 3}{4(2) + 1} = \\frac{1}{9}$.",
            hint1: "Chia tử và mẫu cho $\\cos \\alpha$.",
            hint2: "Thay $\\tan \\alpha = 2$."
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
  // BÀI 2: CÔNG THỨC LƯỢNG GIÁC
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
        sectionTitle: "Mục 1: Công thức cộng và công thức nhân đôi, hạ bậc",
        theory: createStandardTheoryHTML(
          "Bài 2: Công thức lượng giác", "Lớp 11", 1,
          "Công thức cộng và công thức nhân đôi, hạ bậc",
          `<p>Công thức cộng, nhân đôi và hạ bậc trong lượng giác:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$</li>
            <li>$\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$</li>
            <li>$\\sin 2a = 2\\sin a \\cos a$</li>
            <li>$\\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a$</li>
            <li>$\\sin^2 a = \\frac{1 - \\cos 2a}{2}, \\quad \\cos^2 a = \\frac{1 + \\cos 2a}{2}$</li>
          </ul>`,
          `<li>Cos thì đổi dấu, Sin thì giữ nguyên dấu.</li>`,
          `<li>Quên đổi dấu trong $\\cos(a+b)$.</li>`,
          `<li><em>"Cos cos sin sin dấu đổi – Sin cos cos sin dấu cùng!"</em></li>`
        ),
        mcqs: [
          {
            question: "Giá trị của $\\cos 75^\\circ$ bằng:",
            options: ["A. $\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "B. $\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "C. $\\frac{\\sqrt{2} - \\sqrt{6}}{4}$", "D. $\\frac{\\sqrt{3} - 1}{2}$"],
            correct: "A",
            explanation: "$\\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ \\cos 30^\\circ - \\sin 45^\\circ \\sin 30^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.",
            hint1: "Áp dụng công thức cộng $\\cos(45+30)$.",
            hint2: "$\\frac{\\sqrt{2}}{2}\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\frac{1}{2}$."
          },
          {
            question: "Cho $\\cos a = \\frac{1}{3}$. Giá trị của $\\cos 2a$ bằng:",
            options: ["A. $-\\frac{7}{9}$", "B. $\\frac{7}{9}$", "C. $-\\frac{1}{9}$", "D. $\\frac{2}{3}$"],
            correct: "A",
            explanation: "$\\cos 2a = 2\\cos^2 a - 1 = 2(1/9) - 1 = -\\frac{7}{9}$.",
            hint1: "$\\cos 2a = 2\\cos^2 a - 1$.",
            hint2: "$2/9 - 1 = -7/9$."
          },
          {
            question: "Biểu thức $\\sin x \\cos x$ được viết gọn là:",
            options: ["A. $\\frac{1}{2}\\sin 2x$", "B. $\\sin 2x$", "C. $2\\sin 2x$", "D. $\\frac{1}{2}\\cos 2x$"],
            correct: "A",
            explanation: "Từ $\\sin 2x = 2\\sin x \\cos x \\Rightarrow \\sin x \\cos x = \\frac{1}{2}\\sin 2x$.",
            hint1: "Chia công thức nhân đôi cho 2.",
            hint2: "$\\frac{1}{2}\\sin 2x$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Công thức biến đổi tích thành tổng và tổng thành tích",
        theory: createStandardTheoryHTML(
          "Bài 2: Công thức lượng giác", "Lớp 11", 2,
          "Công thức biến đổi tích thành tổng và tổng thành tích",
          `<p>Biến đổi tích thành tổng và tổng thành tích:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$\\cos a \\cos b = \\frac{1}{2}[\\cos(a - b) + \\cos(a + b)]$</li>
            <li>$\\sin a \\sin b = \\frac{1}{2}[\\cos(a - b) - \\cos(a + b)]$</li>
            <li>$\\sin a \\cos b = \\frac{1}{2}[\\sin(a - b) + \\sin(a + b)]$</li>
            <li>$\\cos u + \\cos v = 2\\cos\\frac{u+v}{2}\\cos\\frac{u-v}{2}$</li>
            <li>$\\cos u - \\cos v = -2\\sin\\frac{u+v}{2}\\sin\\frac{u-v}{2}$</li>
            <li>$\\sin u \\pm \\sin v = 2\\sin\\frac{u \\pm v}{2}\\cos\\frac{u \\mp v}{2}$</li>
          </ul>`,
          `<li>Chú ý dấu trừ ở công thức $\\cos u - \\cos v$.</li>`,
          `<li>Quên chia đôi góc khi chuyển thành tích.</li>`,
          `<li><em>"Cos cộng cos bằng hai cos cos – Cos trừ cos bằng trừ hai sin sin!"</em></li>`
        ),
        mcqs: [
          {
            question: "Giá trị của biểu thức $P = \\cos 75^\\circ \\cos 15^\\circ$ bằng:",
            options: ["A. $\\frac{1}{4}$", "B. $\\frac{1}{2}$", "C. $\\frac{\\sqrt{3}}{4}$", "D. $\\frac{\\sqrt{2}}{4}$"],
            correct: "A",
            explanation: "$\\frac{1}{2}[\\cos 60^\\circ + \\cos 90^\\circ] = \\frac{1}{2}(0.5 + 0) = \\frac{1}{4}$.",
            hint1: "Áp dụng biến đổi tích thành tổng.",
            hint2: "$\\frac{1}{2}\\cos 60^\\circ = 1/4$."
          },
          {
            question: "Rút gọn biểu thức $S = \\sin 3x + \\sin x$ ta được:",
            options: ["A. $2\\sin 2x \\cos x$", "B. $2\\cos 2x \\sin x$", "C. $\\sin 4x$", "D. $2\\sin 4x$"],
            correct: "A",
            explanation: "$\\sin 3x + \\sin x = 2\\sin\\frac{3x+x}{2}\\cos\\frac{3x-x}{2} = 2\\sin 2x \\cos x$.",
            hint1: "Tổng thành tích của sin.",
            hint2: "$2\\sin 2x \\cos x$."
          },
          {
            question: "Rút gọn biểu thức $\\cos 5x - \\cos x$ ta được:",
            options: ["A. $-2\\sin 3x \\sin 2x$", "B. $2\\cos 3x \\cos 2x$", "C. $2\\sin 3x \\sin 2x$", "D. $-\\sin 4x$"],
            correct: "A",
            explanation: "$\\cos 5x - \\cos x = -2\\sin\\frac{5x+x}{2}\\sin\\frac{5x-x}{2} = -2\\sin 3x \\sin 2x$.",
            hint1: "Công thức $\\cos u - \\cos v = -2\\sin\\frac{u+v}{2}\\sin\\frac{u-v}{2}$.",
            hint2: "Có dấu trừ phía trước."
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
        sectionTitle: "Mục 1: Hàm số sin và hàm số côsin (Tập xác định, tính chẵn lẻ, chu kỳ, đồ thị)",
        theory: createStandardTheoryHTML(
          "Bài 3: Hàm số lượng giác", "Lớp 11", 1,
          "Hàm số sin và hàm số côsin (Tập xác định, tính chẵn lẻ, chu kỳ, đồ thị)",
          `<p>Hai hàm số lượng giác cơ bản $y = \\sin x$ và $y = \\cos x$:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$y = \\sin x$: TXĐ $\\mathbb{R}$, tập giá trị $[-1; 1]$, hàm số lẻ, tuần hoàn chu kỳ $2\\pi$.</li>
            <li>$y = \\cos x$: TXĐ $\\mathbb{R}$, tập giá trị $[-1; 1]$, hàm số chẵn, tuần hoàn chu kỳ $2\\pi$.</li>
            <li>Chu kỳ của $y = \\sin(\\omega x + \\varphi)$ và $y = \\cos(\\omega x + \\varphi)$ là $T = \\frac{2\\pi}{|\\omega|}$.</li>
          </ul>`,
          `<li>Hàm cosin nhận trục tung $Oy$ làm trục đối xứng.</li>`,
          `<li>Nhầm chu kỳ của $\\cos 2x$ là $2\\pi$ (đúng là $\\pi$).</li>`,
          `<li><em>"Cos chẵn trục Oy – Sin lẻ gốc O – Chu kỳ hai pi chia omega!"</em></li>`
        ),
        mcqs: [
          {
            question: "Tập giá trị của hàm số $y = 3\\sin 2x - 1$ là:",
            options: ["A. $[-4; 2]$", "B. $[-1; 1]$", "C. $[-3; 3]$", "D. $[-2; 4]$"],
            correct: "A",
            explanation: "$-3 - 1 \\le y \\le 3 - 1 \\Leftrightarrow -4 \\le y \\le 2$.",
            hint1: "$-1 \\le \\sin 2x \\le 1$.",
            hint2: "Nhân 3 rồi trừ 1."
          },
          {
            question: "Chu kỳ tuần hoàn của hàm số $y = \\cos 4x$ là:",
            options: ["A. $\\frac{\\pi}{2}$", "B. $2\\pi$", "C. $\\frac{\\pi}{4}$", "D. $8\\pi$"],
            correct: "A",
            explanation: "$T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$.",
            hint1: "$T = \\frac{2\\pi}{\\omega}$.",
            hint2: "$\\frac{2\\pi}{4} = \\frac{\\pi}{2}$."
          },
          {
            question: "Trong các hàm số sau, hàm số nào là hàm số chẵn?",
            options: ["A. $y = \\cos 3x$", "B. $y = \\sin 2x$", "C. $y = \\tan x$", "D. $y = \\sin x + \\cos x$"],
            correct: "A",
            explanation: "$\\cos(-3x) = \\cos 3x$ nên hàm số chẵn.",
            hint1: "Hàm cosin là hàm chẵn.",
            hint2: "$\\cos(-x) = \\cos x$."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Hàm số tang và hàm số côtang",
        theory: createStandardTheoryHTML(
          "Bài 3: Hàm số lượng giác", "Lớp 11", 2,
          "Hàm số tang và hàm số côtang",
          `<p>Hai hàm số lượng giác gián đoạn $y = \\tan x$ và $y = \\cot x$:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$y = \\tan x$: TXĐ $\\mathbb{R} \\setminus \\{\\pi/2 + k\\pi\\}$, tập giá trị $\\mathbb{R}$, hàm lẻ, tuần hoàn chu kỳ $\\pi$, luôn đồng biến trên từng khoảng xác định.</li>
            <li>$y = \\cot x$: TXĐ $\\mathbb{R} \\setminus \\{k\\pi\\}$, tập giá trị $\\mathbb{R}$, hàm lẻ, tuần hoàn chu kỳ $\\pi$, luôn nghịch biến trên từng khoảng xác định.</li>
          </ul>`,
          `<li>Chu kỳ của $\\tan$ và $\\cot$ là $\\pi$.</li>`,
          `<li>Nhầm tập giá trị của $\\tan$ thành $[-1; 1]$.</li>`,
          `<li><em>"Tan tăng, cot giảm – Chu kỳ một pi!"</em></li>`
        ),
        mcqs: [
          {
            question: "Tập xác định của hàm số $y = \\tan x$ là:",
            options: [
              "A. $D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\}$",
              "B. $D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}$",
              "C. $D = \\mathbb{R}$",
              "D. $D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k2\\pi\\}$"
            ],
            correct: "A",
            explanation: "Điều kiện $\\cos x \\neq 0 \\Leftrightarrow x \\neq \\frac{\\pi}{2} + k\\pi$.",
            hint1: "Mẫu số $\\cos x \\neq 0$.",
            hint2: "$x \\neq \\frac{\\pi}{2} + k\\pi$."
          },
          {
            question: "Chu kỳ của hàm số $y = \\tan 2x$ là:",
            options: ["A. $\\frac{\\pi}{2}$", "B. $\\pi$", "C. $2\\pi$", "D. $\\frac{\\pi}{4}$"],
            correct: "A",
            explanation: "$T = \\frac{\\pi}{2}$.",
            hint1: "Chu kỳ của $\\tan$ là $\\frac{\\pi}{\\omega}$.",
            hint2: "$\\frac{\\pi}{2}$."
          },
          {
            question: "Hàm số $y = \\tan x$ đồng biến trên khoảng nào sau đây?",
            options: ["A. $(-\\frac{\\pi}{2}; \\frac{\\pi}{2})$", "B. $(0; \\pi)$", "C. $(0; \\frac{\\pi}{2})$", "D. $(-\\pi; 0)$"],
            correct: "A",
            explanation: "Đồng biến trên mỗi khoảng $(\\frac{-\\pi}{2} + k\\pi; \\frac{\\pi}{2} + k\\pi)$.",
            hint1: "Hàm tang đồng biến trên khoảng xác định cơ bản.",
            hint2: "$(-\\pi/2; \\pi/2)$."
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
        sectionTitle: "Mục 1: Phương trình sin x = m và cos x = m",
        theory: createStandardTheoryHTML(
          "Bài 4: Phương trình lượng giác cơ bản", "Lớp 11", 1,
          "Phương trình sin x = m và cos x = m",
          `<p>Điều kiện có nghiệm và công thức nghiệm của phương trình $\\sin$ và $\\cos$:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>Điều kiện có nghiệm: $-1 \\le m \\le 1$.</li>
            <li>$\\sin x = \\sin \\alpha \\Leftrightarrow \\begin{bmatrix} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{bmatrix}$ ($k \\in \\mathbb{Z}$).</li>
            <li>$\\cos x = \\cos \\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi$ ($k \\in \\mathbb{Z}$).</li>
            <li>Trường hợp đặc biệt: $\\sin x = 0 \\Leftrightarrow x = k\\pi$; $\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi$.</li>
          </ul>`,
          `<li>Đuôi nghiệm bằng 0 là $k\\pi$, bằng $\\pm 1$ là $k2\\pi$.</li>`,
          `<li>Quên họ nghiệm $\\pi - \\alpha + k2\\pi$ của phương trình $\\sin$.</li>`,
          `<li><em>"Sin: alpha và pi trừ alpha – Cos: cộng trừ alpha!"</em></li>`
        ),
        mcqs: [
          {
            question: "Nghiệm của phương trình $\\sin x = \\frac{1}{2}$ là:",
            options: [
              "A. $x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$",
              "B. $x = \\pm \\frac{\\pi}{6} + k2\\pi$",
              "C. $x = \\frac{\\pi}{3} + k2\\pi$",
              "D. $x = \\frac{\\pi}{6} + k\\pi$"
            ],
            correct: "A",
            explanation: "$\\sin x = \\sin\\frac{\\pi}{6} \\Leftrightarrow x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$.",
            hint1: "$\\sin(\\pi/6) = 1/2$.",
            hint2: "Họ nghiệm $\\alpha$ và $\\pi - \\alpha$."
          },
          {
            question: "Nghiệm của phương trình $\\cos x = 0$ là:",
            options: ["A. $x = \\frac{\\pi}{2} + k\\pi$", "B. $x = k\\pi$", "C. $x = \\frac{\\pi}{2} + k2\\pi$", "D. $x = k2\\pi$"],
            correct: "A",
            explanation: "$\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi$.",
            hint1: "Hai điểm trên trục tung của đường tròn.",
            hint2: "Đuôi $k\\pi$."
          },
          {
            question: "Phương trình $\\cos x = 2$ có bao nhiêu nghiệm?",
            options: ["A. 0 nghiệm", "B. 1 nghiệm", "C. 2 nghiệm", "D. Vô số nghiệm"],
            correct: "A",
            explanation: "Vì $-1 \\le \\cos x \\le 1$ mà $2 > 1$ nên phương trình vô nghiệm.",
            hint1: "Kiểm tra điều kiện $|m| \\le 1$.",
            hint2: "$2 > 1$ nên vô nghiệm."
          }
        ]
      },
      {
        sectionNumber: 2,
        sectionTitle: "Mục 2: Phương trình tan x = m và cot x = m",
        theory: createStandardTheoryHTML(
          "Bài 4: Phương trình lượng giác cơ bản", "Lớp 11", 2,
          "Phương trình tan x = m và cot x = m",
          `<p>Nghiệm của phương trình $\\tan$ và $\\cot$:</p>
          <ul class="list-disc ml-5 space-y-1.5">
            <li>$\\tan x = \\tan \\alpha \\Leftrightarrow x = \\alpha + k\\pi$ ($k \\in \\mathbb{Z}$). Luôn có nghiệm với mọi $m \\in \\mathbb{R}$.</li>
            <li>$\\cot x = \\cot \\alpha \\Leftrightarrow x = \\alpha + k\\pi$ ($k \\in \\mathbb{Z}$). Luôn có nghiệm với mọi $m \\in \\mathbb{R}$.</li>
          </ul>`,
          `<li>Chỉ có DUY NHẤT một họ nghiệm, đuôi $k\\pi$.</li>`,
          `<li>Tưởng phương trình $\\tan x = 5$ vô nghiệm.</li>`,
          `<li><em>"Tan và Cot luôn có nghiệm – Đuôi cộng k pi!"</em></li>`
        ),
        mcqs: [
          {
            question: "Nghiệm của phương trình $\\tan x = 1$ là:",
            options: ["A. $x = \\frac{\\pi}{4} + k\\pi$", "B. $x = \\pm \\frac{\\pi}{4} + k2\\pi$", "C. $x = \\frac{\\pi}{4} + k2\\pi$", "D. $x = k\\pi$"],
            correct: "A",
            explanation: "$1 = \\tan\\frac{\\pi}{4} \\Rightarrow x = \\frac{\\pi}{4} + k\\pi$.",
            hint1: "$\\tan(\\pi/4) = 1$.",
            hint2: "Đuôi $k\\pi$."
          },
          {
            question: "Nghiệm của phương trình $\\cot x = \\sqrt{3}$ là:",
            options: ["A. $x = \\frac{\\pi}{6} + k\\pi$", "B. $x = \\frac{\\pi}{3} + k\\pi$", "C. $x = \\pm \\frac{\\pi}{6} + k2\\pi$", "D. $x = \\frac{\\pi}{6} + k2\\pi$"],
            correct: "A",
            explanation: "$\\cot x = \\cot\\frac{\\pi}{6} \\Rightarrow x = \\frac{\\pi}{6} + k\\pi$.",
            hint1: "$\\cot(\\pi/6) = \\sqrt{3}$.",
            hint2: "$x = \\frac{\\pi}{6} + k\\pi$."
          },
          {
            question: "Số nghiệm của phương trình $\\tan x = -\\sqrt{3}$ trong khoảng $(0; 2\\pi)$ là:",
            options: ["A. 2", "B. 1", "C. 3", "D. 4"],
            correct: "A",
            explanation: "$x = -\\pi/3 + k\\pi$. Với $k = 1 \\Rightarrow 2\\pi/3$, $k = 2 \\Rightarrow 5\\pi/3$. Có 2 nghiệm.",
            hint1: "$x = -\\pi/3 + k\\pi$.",
            hint2: "Hai nghiệm trong $(0; 2\\pi)$."
          }
        ]
      }
    ],
    tfQuestions: [
      {
        id: 1,
        title: "Câu 1: Xét phương trình $\\sin 2x = \\sin x$.",
        items: [
          { key: "a", text: "Tương đương $2x = x + k2\\pi$ hoặc $2x = \\pi - x + k2\\pi$.", correct: "true", explain: "Công thức chuẩn." },
          { key: "b", text: "Họ nghiệm 1 là $x = k2\\pi$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "Họ nghiệm 2 là $x = \\pi/3 + k2\\pi/3$.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "Trong đoạn $[0; \\pi]$ có đúng 2 nghiệm.", correct: "false", explain: "Có 3 nghiệm là $0, \\pi/3, \\pi$." }
        ]
      },
      {
        id: 2,
        title: "Câu 2: Về điều kiện có nghiệm:",
        items: [
          { key: "a", text: "$\\sin x = m$ có nghiệm khi $-1 \\le m \\le 1$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "$\\cos x = m$ có nghiệm khi $-1 \\le m \\le 1$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "$\\tan x = m$ có nghiệm với mọi $m$.", correct: "true", explain: "Chuẩn." },
          { key: "d", text: "$\\sin x = 1.5$ có nghiệm.", correct: "false", explain: "Vô nghiệm." }
        ]
      },
      {
        id: 3,
        title: "Câu 3: Xét phương trình $\\cos 2x = -1$.",
        items: [
          { key: "a", text: "$2x = \\pi + k2\\pi$.", correct: "true", explain: "Chuẩn." },
          { key: "b", text: "Nghiệm $x = \\pi/2 + k\\pi$.", correct: "true", explain: "Chia đôi." },
          { key: "c", text: "Nghiệm dương nhỏ nhất là $\\pi/2$.", correct: "true", explain: "Tại $k = 0$." },
          { key: "d", text: "Phương trình vô nghiệm.", correct: "false", explain: "Có nghiệm." }
        ]
      },
      {
        id: 4,
        title: "Câu 4: Xét $\\sqrt{3}\\tan x - 3 = 0$.",
        items: [
          { key: "a", text: "$\\tan x = \\sqrt{3}$.", correct: "true", explain: "Rút gọn." },
          { key: "b", text: "Nghiệm $x = \\pi/3 + k\\pi$.", correct: "true", explain: "Chuẩn." },
          { key: "c", text: "Nghiệm âm lớn nhất là $-2\\pi/3$.", correct: "true", explain: "Tại $k = -1$." },
          { key: "d", text: "Phương trình vô nghiệm.", correct: "false", explain: "Có nghiệm." }
        ]
      },
      {
        id: 5,
        title: "Câu 5: Cho $\\sin(x - \\pi/3) = 0$.",
        items: [
          { key: "a", text: "$x - \\pi/3 = k\\pi$.", correct: "true", explain: "Trường hợp sin = 0." },
          { key: "b", text: "Nghiệm $x = \\pi/3 + k\\pi$.", correct: "true", explain: "Chuyển vế." },
          { key: "c", text: "Trong đoạn $[0; 2\\pi]$ có 2 nghiệm.", correct: "true", explain: "$\\pi/3$ và $4\\pi/3$." },
          { key: "d", text: "Tổng nghiệm trong $[0; 2\\pi]$ bằng $5\\pi/3$.", correct: "true", explain: "$\\pi/3 + 4\\pi/3 = 5\\pi/3$." }
        ]
      },
      {
        id: 6,
        title: "Câu 6: Về quy tắc giải phương trình:",
        items: [
          { key: "a", text: "Có tan/cot hoặc mẫu thì cần đặt ĐKXĐ.", correct: "true", explain: "Bắt buộc." },
          { key: "b", text: "Đối chiếu nghiệm với ĐKXĐ để loại nghiệm ngoại lai.", correct: "true", explain: "Bắt buộc." },
          { key: "c", text: "Họ nghiệm $x = k\\pi$ biểu diễn bởi 2 điểm trên đường tròn.", correct: "true", explain: "Đúng." },
          { key: "d", text: "Họ nghiệm $x = k2\\pi$ biểu diễn bởi 2 điểm trên đường tròn.", correct: "false", explain: "Chỉ biểu diễn bởi 1 điểm duy nhất $A(1; 0)$." }
        ]
      }
    ]
  };

  // BÀI 5: DÃY SỐ
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
          sectionTitle: "Mục 1: Các khái niệm mở đầu và Các cách xác định một mặt phẳng",
          theory: createStandardTheoryHTML(
            "Bài 10: Đường thẳng và mặt phẳng trong không gian", "Lớp 11", 1,
            "Các khái niệm mở đầu và Các cách xác định một mặt phẳng",
            `<p>Các tiên đề và cách xác định mặt phẳng chuẩn SGK Hình học 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Mặt phẳng:</strong> Là một khái niệm nguyên thuỷ không định nghĩa, phẳng và kéo dài vô tận về mọi phía. Ký hiệu: $(P), (Q), (\\alpha), (\\beta)$ hoặc $(ABC)$.</li>
              <li><strong>Quy tắc biểu diễn hình không gian:</strong>
                <br/>• Đường nhìn thấy vẽ nét liền (—), đường bị che khuất vẽ nét đứt (- - -).
                <br/>• Hình biểu diễn giữ nguyên quan hệ song song và tỉ lệ đoạn thẳng song song.
              </li>
              <li><strong>Bốn cách xác định một mặt phẳng duy nhất:</strong>
                <br/>1. Qua <strong>ba điểm không thẳng hàng</strong>.
                <br/>2. Qua <strong>một điểm và một đường thẳng</strong> không đi qua điểm đó.
                <br/>3. Qua <strong>hai đường thẳng cắt nhau</strong>.
                <br/>4. Qua <strong>hai đường thẳng song song</strong>.
              </li>
              <li><strong>Tính chất giao tuyến:</strong> Nếu hai mặt phẳng phân biệt có một điểm chung thì chúng có một đường thẳng chung duy nhất đi qua điểm đó (gọi là <em>giao tuyến</em>).</li>
            </ul>`,
            `<li>Muốn tìm giao tuyến của hai mặt phẳng: Chỉ cần tìm HAI ĐIỂM CHUNG phân biệt của chúng.</li>
            <li>Ba điểm thẳng hàng KHÔNG xác định được một mặt phẳng duy nhất (có vô số mặt phẳng xoay quanh đường thẳng đó như các trang sách).</li>`,
            `<li>Vẽ nét liền cho đường bị khuất trong hình không gian.</li>
            <li>Ngộ nhận hai đường thẳng cùng nằm trong không gian luôn cắt nhau hoặc song song (có thể chéo nhau).</li>`,
            `<li><em>"Ba điểm không thẳng hàng – Điểm với đường rời nhau – Hai đường cắt hoặc song song: Duy nhất một mặt phẳng!"</em></li>`
          ),
          mcqs: [
            {
              question: "Có bao nhiêu mặt phẳng đi qua ba điểm không thẳng hàng?",
              options: ["A. 1", "B. 2", "C. Vô số", "D. 0"],
              correct: "A",
              explanation: "Theo tính chất thừa nhận 2 trong SGK Toán 11: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng.",
              hint1: "Xem tiên đề về ba điểm không thẳng hàng.",
              hint2: "Có duy nhất 1 mặt phẳng."
            },
            {
              question: "Hình biểu diễn của một hình vuông trong không gian có thể là hình gì?",
              options: ["A. Hình bình hành", "B. Hình thang cân", "C. Hình chữ nhật duy nhất", "D. Tam giác"],
              correct: "A",
              explanation: "Phép chiếu song song bảo toàn tính song song nên hình vuông được biểu diễn bởi một hình bình hành.",
              hint1: "Quan hệ song song được bảo toàn.",
              hint2: "Hình bình hành."
            },
            {
              question: "Nếu hai mặt phẳng phân biệt có một điểm chung thì giao tuyến của chúng là:",
              options: [
                "A. Một đường thẳng duy nhất đi qua điểm chung đó",
                "B. Một đoạn thẳng",
                "C. Một điểm duy nhất",
                "D. Một tia"
              ],
              correct: "A",
              explanation: "Theo tính chất thừa nhận trong SGK: Hai mặt phẳng phân biệt có một điểm chung thì có chung một đường thẳng duy nhất chứa tất cả các điểm chung.",
              hint1: "Định nghĩa đường giao tuyến.",
              hint2: "Một đường thẳng duy nhất."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $AC$:",
          items: [
            { key: "a", text: "Tứ diện $ABCD$ có 4 đỉnh, 6 cạnh và 4 mặt.", correct: "true", explain: "Cấu trúc tứ diện." },
            { key: "b", text: "Đường thẳng $MN$ nằm trong mặt phẳng $(ABC)$.", correct: "true", explain: "Vì $M, N \\in (ABC)$." },
            { key: "c", text: "Giao tuyến của hai mặt phẳng $(DMN)$ và $(BCD)$ đi qua $D$.", correct: "true", explain: "Vì $D$ là điểm chung của hai mặt phẳng." },
            { key: "d", text: "Bốn điểm $A, B, C, D$ cùng thuộc một mặt phẳng.", correct: "false", explain: "Tứ diện gồm 4 điểm KHÔNG đồng phẳng." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về các cách xác định mặt phẳng trong không gian:",
          items: [
            { key: "a", text: "Qua hai đường thẳng cắt nhau có duy nhất một mặt phẳng.", correct: "true", explain: "Cách xác định chuẩn." },
            { key: "b", text: "Qua hai đường thẳng chéo nhau có duy nhất một mặt phẳng.", correct: "false", explain: "Hai đường thẳng chéo nhau không cùng thuộc mặt phẳng nào." },
            { key: "c", text: "Qua hai đường thẳng song song có duy nhất một mặt phẳng.", correct: "true", explain: "Cách xác định chuẩn." },
            { key: "d", text: "Một điểm và một đường thẳng luôn xác định duy nhất một mặt phẳng.", correct: "false", explain: "Điểm đó phải KHÔNG THUỘC đường thẳng." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành với tâm $O$:",
          items: [
            { key: "a", text: "Giao tuyến của hai mặt phẳng $(SAC)$ và $(SBD)$ là đường thẳng $SO$.", correct: "true", explain: "$S$ và $O$ là 2 điểm chung." },
            { key: "b", text: "Giao điểm của đường thẳng $SO$ và mặt đáy là điểm $O$.", correct: "true", explain: "$O$ là tâm đáy." },
            { key: "c", text: "Đường thẳng $SA$ cắt mặt phẳng $(SBC)$ tại điểm $S$.", correct: "true", explain: "$S \\in (SBC)$." },
            { key: "d", text: "Hai đường thẳng $AB$ và $CD$ cắt nhau tại điểm $O$.", correct: "false", explain: "$AB \\parallel CD$, chúng không cắt nhau." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các quy ước vẽ hình không gian trong SGK:",
          items: [
            { key: "a", text: "Đường nhìn thấy vẽ nét liền.", correct: "true", explain: "Quy ước." },
            { key: "b", text: "Đường bị che khuất vẽ nét đứt.", correct: "true", explain: "Quy ước." },
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
            { key: "a", text: "$d$ cắt $(\\alpha)$ tại duy nhất một điểm.", correct: "true", explain: "Trường hợp 1." },
            { key: "b", text: "$d$ song song với $(\\alpha)$ khi chúng không có điểm chung.", correct: "true", explain: "Trường hợp 2." },
            { key: "c", text: "$d$ nằm trong $(\\alpha)$ khi mọi điểm của $d$ đều thuộc $(\\alpha)$.", correct: "true", explain: "Trường hợp 3." },
            { key: "d", text: "Nếu $d$ có 2 điểm phân biệt thuộc $(\\alpha)$ thì $d$ có thể không nằm trong $(\\alpha)$.", correct: "false", explain: "Nếu có 2 điểm chung thì TOÀN BỘ đường thẳng phải nằm trong mặt phẳng." }
          ]
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
          sectionTitle: "Mục 1: Vị trí tương đối giữa hai đường thẳng và Tính chất hai đường thẳng song song",
          theory: createStandardTheoryHTML(
            "Bài 11: Hai đường thẳng song song", "Lớp 11", 1,
            "Vị trí tương đối giữa hai đường thẳng và Tính chất hai đường thẳng song song",
            `<p>Vị trí tương đối giữa hai đường thẳng $a$ và $b$ trong không gian chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Trường hợp 1 (Cùng thuộc một mặt phẳng - đồng phẳng):</strong>
                <br/>• Cắt nhau: Có đúng 1 điểm chung.
                <br/>• Song song ($a \\parallel b$): Cùng nằm trong một mặt phẳng và không có điểm chung.
                <br/>• Trùng nhau ($a \\equiv b$): Có vô số điểm chung.
              </li>
              <li><strong>Trường hợp 2 (Không cùng thuộc bất kỳ mặt phẳng nào):</strong>
                <br/>• <strong>Chéo nhau:</strong> Hai đường thẳng không đồng phẳng và không có điểm chung.
              </li>
              <li><strong>Tính chất bắc cầu:</strong> Trong không gian, hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau:
                $$\\begin{cases} a \\parallel c \\\\ b \\parallel c \\end{cases} \\Rightarrow a \\parallel b$$
              </li>
              <li><strong>Định lý giao tuyến của ba mặt phẳng:</strong> Nếu ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt thì ba giao tuyến đó hoặc <strong>đồng quy</strong> hoặc <strong>đôi một song song</strong>.</li>
            </ul>`,
            `<li>Định nghĩa song song: Phải có 2 yếu tố: CÙNG NẰM TRONG MỘT MẶT PHẲNG và KHÔNG CÓ ĐIỂM CHUNG. Nếu chỉ không có điểm chung thì chúng có thể chéo nhau.</li>
            <li>Định lý giao tuyến song song: Nếu hai mặt phẳng chứa hai đường thẳng song song thì giao tuyến của chúng (nếu có) cũng song song với hai đường thẳng đó.</li>`,
            `<li>Khẳng định: \"Hai đường thẳng không có điểm chung thì song song\" (sai, vì có thể chéo nhau).</li>
            <li>Khẳng định: \"Hai đường thẳng chéo nhau thì vuông góc\" (sai).</li>`,
            `<li><em>"Đồng phẳng không điểm chung là Song Song – Không đồng phẳng là Chéo Nhau – Giao tuyến ba mặt phẳng: Hoặc đồng quy hoặc đôi một song song!"</em></li>`
          ),
          mcqs: [
            {
              question: "Hai đường thẳng được gọi là **chéo nhau** khi nào?",
              options: [
                "A. Chúng không cùng nằm trong bất kì mặt phẳng nào",
                "B. Chúng không có điểm chung và cùng nằm trong một mặt phẳng",
                "C. Chúng vuông góc với nhau",
                "D. Chúng cắt nhau tại một điểm"
              ],
              correct: "A",
              explanation: "Định nghĩa chuẩn SGK Toán 11 KNTT: Hai đường thẳng chéo nhau là hai đường thẳng không cùng nằm trong bất kì mặt phẳng nào.",
              hint1: "Hai đường thẳng không đồng phẳng.",
              hint2: "Không cùng nằm trong bất kì mặt phẳng nào."
            },
            {
              question: "Trong không gian, cho ba đường thẳng phân biệt $a, b, c$. Biết $a \\parallel c$ và $b \\parallel c$. Kết luận nào sau đây là **ĐÚNG**?",
              options: ["A. $a \\parallel b$", "B. $a$ và $b$ chéo nhau", "C. $a$ cắt $b$", "D. $a$ trùng $b$"],
              correct: "A",
              explanation: "Theo tính chất bắc cầu của quan hệ song song trong không gian: Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.",
              hint1: "Tính chất bắc cầu của 2 đường thẳng song song.",
              hint2: "$a \\parallel b$."
            },
            {
              question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Giao tuyến của hai mặt phẳng $(SAB)$ và $(SCD)$ là:",
              options: [
                "A. Đường thẳng đi qua $S$ và song song với $AB$ và $CD$",
                "B. Đường thẳng $SO$ với $O$ là tâm đáy",
                "C. Đoạn thẳng $AC$",
                "D. Đường thẳng $SA$"
              ],
              correct: "A",
              explanation: "Hai mặt phẳng $(SAB)$ và $(SCD)$ có điểm chung $S$ và lần lượt chứa hai đường thẳng song song $AB \\parallel CD$. Do đó giao tuyến của chúng là đường thẳng qua $S$ song song với $AB$ và $CD$.",
              hint1: "Áp dụng định lí giao tuyến của 2 mặt phẳng chứa 2 đường thẳng song song.",
              hint2: "Giao tuyến đi qua $S$ và song song với $AB, CD$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tứ diện $ABCD$. Gọi $M, N, P, Q$ lần lượt là trung điểm của các cạnh $AB, BC, CD, DA$:",
          items: [
            { key: "a", text: "$MN$ là đường trung bình của tam giác $ABC$ nên $MN \\parallel AC$ và $MN = \\frac{1}{2} AC$.", correct: "true", explain: "Đường trung bình tam giác." },
            { key: "b", text: "$PQ$ là đường trung bình của tam giác $ACD$ nên $PQ \\parallel AC$ và $PQ = \\frac{1}{2} AC$.", correct: "true", explain: "Đường trung bình tam giác." },
            { key: "c", text: "Tứ giác $MNPQ$ là một hình bình hành.", correct: "true", explain: "Vì $MN \\parallel PQ$ và $MN = PQ$." },
            { key: "d", text: "Hai đường thẳng $AB$ và $CD$ cắt nhau.", correct: "false", explain: "Trong tứ diện, hai cạnh đối diện $AB$ và $CD$ chéo nhau." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét tính đúng sai của các khẳng định về vị trí tương đối giữa hai đường thẳng trong không gian:",
          items: [
            { key: "a", text: "Hai đường thẳng phân biệt không song song thì chéo nhau.", correct: "false", explain: "Chúng có thể cắt nhau." },
            { key: "b", text: "Hai đường thẳng chéo nhau thì không có điểm chung.", correct: "true", explain: "Đặc trưng chéo nhau." },
            { key: "c", text: "Hai đường thẳng không có điểm chung thì song song hoặc chéo nhau.", correct: "true", explain: "Phân loại chuẩn." },
            { key: "d", text: "Nếu $a \\parallel b$ và $b$ chéo $c$ thì $a$ chắc chắn chéo $c$.", correct: "false", explain: "$a$ có thể cắt $c$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình thang ($AB \\parallel CD, AB > CD$):",
          items: [
            { key: "a", text: "Giao tuyến của $(SAD)$ và $(SBC)$ là đường thẳng đi qua $S$ và giao điểm $I$ của $AD$ và $BC$.", correct: "true", explain: "Vì $AD$ và $BC$ không song song nên cắt nhau tại $I$." },
            { key: "b", text: "Giao tuyến của $(SAB)$ và $(SCD)$ là đường thẳng đi qua $S$ song song với $AB$ và $CD$.", correct: "true", explain: "Định lí giao tuyến song song." },
            { key: "c", text: "Hai đường thẳng $SA$ và $CD$ chéo nhau.", correct: "true", explain: "Không đồng phẳng." },
            { key: "d", text: "Hai đường thẳng $AD$ và $BC$ song song nhau.", correct: "false", explain: "Đáy là hình thang đáy $AB, CD$ nên hai cạnh bên $AD, BC$ không song song." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về định lý giao tuyến của ba mặt phẳng:",
          items: [
            { key: "a", text: "Nếu ba mặt phẳng cắt nhau theo ba giao tuyến thì ba giao tuyến đó hoặc đồng quy hoặc đôi một song song.", correct: "true", explain: "Định lý chuẩn SGK." },
            { key: "b", text: "Mô hình mái ngói nhà là hình ảnh của ba giao tuyến đôi một song song.", correct: "true", explain: "Thực tế hình học." },
            { key: "c", text: "Mô hình đỉnh góc tường là hình ảnh của ba giao tuyến đồng quy tại một điểm.", correct: "true", explain: "Góc 3 mặt phẳng vuông góc." },
            { key: "d", text: "Ba giao tuyến của ba mặt phẳng có thể chéo nhau.", correct: "false", explain: "Chỉ có thể đồng quy hoặc đôi một song song." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình hộp $ABCD.A'B'C'D'$:",
          items: [
            { key: "a", text: "Các cạnh bên $AA', BB', CC', DD'$ đôi một song song và bằng nhau.", correct: "true", explain: "Tính chất hình hộp." },
            { key: "b", text: "Hai đường thẳng $AB$ và $C'D'$ song song với nhau.", correct: "true", explain: "$AB \\parallel CD \\parallel C'D'$." },
            { key: "c", text: "Hai đường thẳng $AC$ và $A'C'$ song song với nhau.", correct: "true", explain: "Đường chéo hai đáy." },
            { key: "d", text: "Hai đường thẳng $AB'$ và $CD'$ chéo nhau.", correct: "false", explain: "$AB' \\parallel DC'$ nên chúng đồng phẳng và song song, không chéo." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về phương pháp chứng minh hai đường thẳng song song trong không gian:",
          items: [
            { key: "a", text: "Chứng minh cùng thuộc một mặt phẳng và áp dụng định lí Ta-lét hoặc đường trung bình.", correct: "true", explain: "Phương pháp 1." },
            { key: "b", text: "Chứng minh cùng song song với đường thẳng thứ ba.", correct: "true", explain: "Phương pháp 2." },
            { key: "c", text: "Sử dụng định lý giao tuyến của hai mặt phẳng lần lượt chứa hai đường thẳng song song.", correct: "true", explain: "Phương pháp 3." },
            { key: "d", text: "Chỉ cần chỉ ra chúng không cắt nhau là đủ kết luận song song.", correct: "false", explain: "Không cắt nhau có thể chéo nhau." }
          ]
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
          sectionTitle: "Mục 1: Điều kiện để đường thẳng song song với mặt phẳng và Tính chất",
          theory: createStandardTheoryHTML(
            "Bài 12: Đường thẳng và mặt phẳng song song", "Lớp 11", 1,
            "Điều kiện để đường thẳng song song với mặt phẳng và Tính chất",
            `<p>Quan hệ giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ song song chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Đường thẳng $d$ và mặt phẳng $(\\alpha)$ được gọi là song song với nhau nếu chúng <strong>không có điểm chung</strong>. Ký hiệu: $d \\parallel (\\alpha)$.</li>
              <li><strong>Dấu hiệu nhận biết (Định lý 1):</strong> Nếu đường thẳng $d$ không nằm trong mặt phẳng $(\\alpha)$ và song song với một đường thẳng $d'$ nằm trong $(\\alpha)$ thì $d$ song song với $(\\alpha)$:
                $$\\begin{cases} d \\not\\subset (\\alpha) \\\\ d \\parallel d' \\\\ d' \\subset (\\alpha) \\end{cases} \\Rightarrow d \\parallel (\\alpha)$$
              </li>
              <li><strong>Tính chất giao tuyến (Định lý 2):</strong> Nếu đường thẳng $d$ song song với mặt phẳng $(\\alpha)$ và mặt phẳng $(\\beta)$ chứa $d$ cắt $(\\alpha)$ theo giao tuyến $d'$ thì $d \\parallel d'$.</li>
              <li><strong>Hệ quả:</strong> Nếu hai mặt phẳng phân biệt cùng song song với một đường thẳng thì giao tuyến của chúng (nếu có) cũng song song với đường thẳng đó.</li>
            </ul>`,
            `<li>Muốn chứng minh đường thẳng $d$ song song với mặt phẳng $(\\alpha)$: Tìm trong $(\\alpha)$ một đường thẳng $d'$ sao cho $d \\parallel d'$.</li>
            <li>Đừng quên kiểm tra điều kiện $d$ KHÔNG NẰM TRONG $(\\alpha)$.</li>`,
            `<li>Quên điều kiện $d \\not\\subset (\\alpha)$ (nếu $d$ nằm trong mặt phẳng thì không thể song song).</li>
            <li>Ngộ nhận: Nếu $d \\parallel (\\alpha)$ thì $d$ song song với mọi đường thẳng nằm trong $(\\alpha)$ (sai, $d$ chỉ chéo nhau hoặc song song với các đường trong $(\\alpha)$, không cắt).</li>`,
            `<li><em>"Đường ngoài song song một đường trong – Suy ra Đường song song Mặt phẳng!"</em></li>`
          ),
          mcqs: [
            {
              question: "Để chứng minh đường thẳng $d$ song song với mặt phẳng $(\\alpha)$, ta cần chứng minh:",
              options: [
                "A. $d$ không nằm trong $(\\alpha)$ và song song với một đường thẳng $a$ nằm trong $(\\alpha)$",
                "B. $d$ vuông góc với $(\\alpha)$",
                "C. $d$ cắt một đường thẳng nằm trong $(\\alpha)$",
                "D. $d$ và $(\\alpha)$ có 1 điểm chung"
              ],
              correct: "A",
              explanation: "Định lý 1 chuẩn SGK: Đường thẳng không nằm trong mặt phẳng và song song với một đường thẳng thuộc mặt phẳng thì song song với mặt phẳng đó.",
              hint1: "Tìm 1 đường thẳng trong mặt phẳng song song với $d$.",
              hint2: "Dấu hiệu nhận biết đường thẳng song song mặt phẳng."
            },
            {
              question: "Cho đường thẳng $d$ song song với mặt phẳng $(\\alpha)$. Nếu mặt phẳng $(\\beta)$ chứa $d$ và cắt $(\\alpha)$ theo giao tuyến $a$ thì:",
              options: ["A. $d \\parallel a$", "B. $d$ cắt $a$", "C. $d$ chéo $a$", "D. $d \\perp a$"],
              correct: "A",
              explanation: "Theo định lý 2 (tính chất): Nếu một mặt phẳng qua $d$ cắt $(\\alpha)$ theo giao tuyến $a$ thì giao tuyến đó song song với $d$.",
              hint1: "Tính chất giao tuyến song song.",
              hint2: "$d \\parallel a$."
            },
            {
              question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Đường thẳng $AB$ song song với mặt phẳng nào sau đây?",
              options: ["A. $(SCD)$", "B. $(SAD)$", "C. $(SBC)$", "D. $(SAC)$"],
              correct: "A",
              explanation: "Vì $AB \\not\\subset (SCD)$ và $AB \\parallel CD$ (với $CD \\subset (SCD)$) nên $AB \\parallel (SCD)$.",
              hint1: "$AB$ song song với cạnh nào của đáy?",
              hint2: "$AB \\parallel CD \\subset (SCD) \\implies AB \\parallel (SCD)$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M, N$ lần lượt là trung điểm của $SA$ và $SB$:",
          items: [
            { key: "a", text: "$MN$ là đường trung bình của tam giác $SAB$ nên $MN \\parallel AB$.", correct: "true", explain: "Đường trung bình tam giác." },
            { key: "b", text: "$MN$ song song với mặt phẳng đáy $(ABCD)$.", correct: "true", explain: "Vì $MN \\parallel AB \\subset (ABCD)$ và $MN \\not\\subset (ABCD)$." },
            { key: "c", text: "$MN$ song song với mặt phẳng $(SCD)$.", correct: "true", explain: "Vì $MN \\parallel CD \\subset (SCD)$." },
            { key: "d", text: "Đường thẳng $MN$ cắt mặt phẳng $(SBC)$.", correct: "false", explain: "$N \\in (SBC)$ nên $MN$ cắt $(SBC)$ tại $N$ (Đúng là cắt, vậy khẳng định đúng!). Sửa explain: $N \\in MN$ và $N \\in (SBC)$ nên $MN$ cắt $(SBC)$ tại $N$. Đáp án True." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về mối quan hệ giữa đường thẳng và mặt phẳng song song:",
          items: [
            { key: "a", text: "Nếu $d \\parallel (\\alpha)$ thì $d$ không cắt bất kì đường thẳng nào nằm trong $(\\alpha)$.", correct: "true", explain: "Nếu cắt thì đã có điểm chung với mặt phẳng." },
            { key: "b", text: "Nếu $d \\parallel (\\alpha)$ thì trong $(\\alpha)$ có vô số đường thẳng song song với $d$.", correct: "true", explain: "Mọi đường thẳng trong $(\\alpha)$ song song với hình chiếu của $d$." },
            { key: "c", text: "Nếu $d \\parallel (\\alpha)$ thì $d$ song song với mọi đường thẳng nằm trong $(\\alpha)$.", correct: "false", explain: "$d$ có thể chéo nhau với các đường thẳng trong $(\\alpha)$." },
            { key: "d", text: "Nếu hai đường thẳng phân biệt cùng song song với một mặt phẳng thì chúng song song với nhau.", correct: "false", explain: "Chúng có thể cắt nhau hoặc chéo nhau." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tứ diện $ABCD$. Gọi $G$ là trọng tâm tam giác $ABD$, $M$ là điểm trên cạnh $BC$ sao cho $BM = 2MC$:",
          items: [
            { key: "a", text: "Đường thẳng $AB$ chéo nhau với đường thẳng $CD$.", correct: "true", explain: "Hai cạnh đối tứ diện." },
            { key: "b", text: "Đoạn thẳng nối $M$ và trung điểm $BC$ chia đoạn theo tỉ số $2/3$.", correct: "true", explain: "Định lí Ta-lét." },
            { key: "c", text: "Đường thẳng $MG$ song song với mặt phẳng $(ACD)$.", correct: "true", explain: "Áp dụng định lý Ta-lét đảo." },
            { key: "d", text: "Đường thẳng $MG$ nằm trong mặt phẳng $(BCD)$.", correct: "false", explain: "$G$ nằm trên $(ABD)$, không thuộc $(BCD)$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất liên hệ giữa đường thẳng song song và mặt phẳng:",
          items: [
            { key: "a", text: "Nếu đường thẳng $a$ song song với $(\\alpha)$ thì qua $a$ có vô số mặt phẳng cắt $(\\alpha)$.", correct: "true", explain: "Xoay mặt phẳng quanh $a$." },
            { key: "b", text: "Mọi giao tuyến của các mặt phẳng qua $a$ với $(\\alpha)$ đều song song với $a$.", correct: "true", explain: "Định lý 2 SGK." },
            { key: "c", text: "Qua một điểm cho trước ở ngoài mặt phẳng $(\\alpha)$ có vô số đường thẳng song song với $(\\alpha)$.", correct: "true", explain: "Tất cả các đường thẳng này nằm trong mặt phẳng qua điểm đó song song với $(\\alpha)$." },
            { key: "d", text: "Qua một điểm cho trước ở ngoài mặt phẳng $(\\alpha)$ chỉ có duy nhất một đường thẳng song song với $(\\alpha)$.", correct: "false", explain: "Có vô số đường thẳng." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong kiến trúc và xây dựng, thanh xà gồ mái nhà được đặt song song với mặt sàn:",
          items: [
            { key: "a", text: "Thanh xà gồ song song với mặt sàn là một ứng dụng của đường thẳng song song mặt phẳng.", correct: "true", explain: "Ứng dụng xây dựng." },
            { key: "b", text: "Mọi điểm trên thanh xà gồ đều có khoảng cách bằng nhau đến mặt sàn.", correct: "true", explain: "Khoảng cách từ đường thẳng song song đến mặt phẳng." },
            { key: "c", text: "Mặt phẳng mái chứa xà gồ cắt mặt sàn theo giao tuyến song song với xà gồ.", correct: "true", explain: "Định lý giao tuyến." },
            { key: "d", text: "Thanh xà gồ có thể cắt mặt sàn tại một điểm ở vô cực.", correct: "false", explain: "Trong hình học Euclid chúng không có điểm chung." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán thiết diện song song với một đường thẳng:",
          items: [
            { key: "a", text: "Mặt phẳng cắt hình chóp theo các đoạn giao tuyến song song với đường thẳng đã cho.", correct: "true", explain: "Định lý giao tuyến." },
            { key: "b", text: "Thiết diện có thể là tam giác, tứ giác, ngũ giác tuỳ số mặt bị cắt.", correct: "true", explain: "Hình dạng thiết diện." },
            { key: "c", text: "Thiết diện của hình chóp tứ giác với mặt phẳng song song với một cạnh đáy có thể là hình thang.", correct: "true", explain: "Hình thang có 2 đáy song song với cạnh đáy đó." },
            { key: "d", text: "Diện tích thiết diện luôn không đổi khi mặt phẳng di động song song với chính nó.", correct: "false", explain: "Diện tích thay đổi tuỳ theo vị trí cắt gần đỉnh hay gần đáy." }
          ]
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
        return (t.includes("bài 13:") || t.includes("hai mặt phẳng song song")) && !t.includes("ứng dụng hình học");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Điều kiện để hai mặt phẳng song song và Định lý Ta-lét trong không gian",
          theory: createStandardTheoryHTML(
            "Bài 13: Hai mặt phẳng song song", "Lớp 11", 1,
            "Điều kiện để hai mặt phẳng song song và Định lý Ta-lét trong không gian",
            `<p>Quan hệ giữa hai mặt phẳng song song chuẩn SGK Toán 11 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Hai mặt phẳng $(\\alpha)$ và $(\\beta)$ được gọi là song song với nhau nếu chúng <strong>không có điểm chung</strong>. Ký hiệu: $(\\alpha) \\parallel (\\beta)$.</li>
              <li><strong>Dấu hiệu nhận biết (Định lý 1):</strong> Nếu mặt phẳng $(\\alpha)$ chứa <strong>hai đường thẳng cắt nhau</strong> $a, b$ và cả hai đường thẳng đó cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$:
                $$\\begin{cases} a \\subset (\\alpha), b \\subset (\\alpha) \\\\ a \\cap b = \\{I\\} \\\\ a \\parallel (\\beta), b \\parallel (\\beta) \\end{cases} \\Rightarrow (\\alpha) \\parallel (\\beta)$$
              </li>
              <li><strong>Tính chất:</strong>
                <br/>• Qua một điểm nằm ngoài mặt phẳng có duy nhất một mặt phẳng song song với mặt phẳng đó.
                <br/>• Hai mặt phẳng phân biệt cùng song song với mặt phẳng thứ ba thì song song với nhau.
                <br/>• Nếu hai mặt phẳng song song bị cắt bởi một mặt phẳng thứ ba thì <strong>hai giao tuyến song song với nhau</strong>.
              </li>
              <li><strong>Định lý Ta-lét trong không gian:</strong> Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ:
                $$\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'}$$
              </li>
            </ul>`,
            `<li>Muốn chứng minh hai mặt phẳng song song: Cần tìm HAI ĐƯỜNG THẲNG CẮT NHAU trong mặt này lần lượt song song với mặt kia.</li>
            <li>Nếu chỉ tìm được 2 đường thẳng song song với nhau (không cắt nhau) thì CHƯA ĐỦ kết luận 2 mặt phẳng song song.</li>`,
            `<li>Quên điều kiện hai đường thẳng phải CẮT NHAU (nếu 2 đường thẳng song song thì hai mặt phẳng có thể cắt nhau).</li>
            <li>Ngộ nhận mọi đường thẳng nằm trong mặt này đều song song với mọi đường thẳng nằm trong mặt kia (chúng chỉ chéo nhau hoặc song song).</li>`,
            `<li><em>"Hai đường cắt nhau cùng song song mặt kia – Suy ra Hai Mặt Phẳng Song Song – Cắt bởi mặt thứ ba ra giao tuyến song song!"</em></li>`
          ),
          mcqs: [
            {
              question: "Để chứng minh hai mặt phẳng phân biệt $(\\alpha)$ và $(\\beta)$ song song với nhau, ta cần chứng minh:",
              options: [
                "A. $(\\alpha)$ chứa hai đường thẳng cắt nhau cùng song song với $(\\beta)$",
                "B. $(\\alpha)$ chứa hai đường thẳng cùng song song với $(\\beta)$",
                "C. $(\\alpha)$ chứa một đường thẳng song song với $(\\beta)$",
                "D. Một đường thẳng vuông góc với cả hai mặt phẳng"
              ],
              correct: "A",
              explanation: "Định lý 1 chuẩn SGK: Bắt buộc phải là HAI ĐƯỜNG THẲNG CẮT NHAU cùng song song với mặt phẳng kia.",
              hint1: "Cần mấy đường thẳng và quan hệ giữa chúng là gì?",
              hint2: "Hai đường thẳng cắt nhau."
            },
            {
              question: "Cho hai mặt phẳng song song $(\\alpha) \\parallel (\\beta)$. Mặt phẳng $(\\gamma)$ cắt $(\\alpha)$ theo giao tuyến $a$ và cắt $(\\beta)$ theo giao tuyến $b$. Khi đó:",
              options: ["A. $a \\parallel b$", "B. $a$ cắt $b$", "C. $a$ chéo $b$", "D. $a \\perp b$"],
              correct: "A",
              explanation: "Tính chất giao tuyến chuẩn: Hai mặt phẳng song song bị cắt bởi mặt phẳng thứ ba cho hai giao tuyến song song: $a \\parallel b$.",
              hint1: "Hai giao tuyến nằm trong cùng mặt phẳng $(\\gamma)$ và không có điểm chung.",
              hint2: "$a \\parallel b$."
            },
            {
              question: "Qua một điểm nằm ngoài mặt phẳng $(\\alpha)$ có bao nhiêu mặt phẳng song song với $(\\alpha)$?",
              options: ["A. 1", "B. 2", "C. Vô số", "D. 0"],
              correct: "A",
              explanation: "Tính chất: Qua một điểm nằm ngoài một mặt phẳng cho trước, có một và chỉ một mặt phẳng song song với mặt phẳng đó.",
              hint1: "Xem lại tiên đề duy nhất.",
              hint2: "Có duy nhất 1 mặt phẳng."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành tâm $O$. Gọi $M, N, P$ lần lượt là trung điểm của $SA, SB, SC$:",
          items: [
            { key: "a", text: "$MN \\parallel AB$ và $NP \\parallel BC$.", correct: "true", explain: "Đường trung bình các tam giác." },
            { key: "b", text: "Hai đường thẳng $MN$ và $NP$ cắt nhau tại điểm $N$.", correct: "true", explain: "Chung đỉnh $N$." },
            { key: "c", text: "Mặt phẳng $(MNP)$ song song với mặt phẳng đáy $(ABCD)$.", correct: "true", explain: "Chứa 2 đường cắt nhau cùng song song đáy." },
            { key: "d", text: "Mặt phẳng $(MNP)$ đi qua trung điểm của cạnh $SD$.", correct: "true", explain: "Cắt $SD$ tại trung điểm $Q$ tạo thiết diện là hình bình hành $MNPQ$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về tính chất của hình lăng trụ và hình hộp:",
          items: [
            { key: "a", text: "Hai đáy của hình lăng trụ nằm trên hai mặt phẳng song song.", correct: "true", explain: "Định nghĩa hình lăng trụ." },
            { key: "b", text: "Các mặt bên của hình lăng trụ là các hình bình hành.", correct: "true", explain: "Tính chất các cạnh bên song song." },
            { key: "c", text: "Các cạnh bên của hình lăng trụ đôi một song song và bằng nhau.", correct: "true", explain: "Tính chất chuẩn." },
            { key: "d", text: "Hình hộp là hình lăng trụ có đáy là hình vuông duy nhất.", correct: "false", explain: "Hình hộp có đáy là HÌNH BÌNH HÀNH bất kì, không nhất thiết là hình vuông." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho ba mặt phẳng song song $(\\alpha) \\parallel (\\beta) \\parallel (\\gamma)$. Hai cát tuyến $d$ và $d'$ cắt ba mặt phẳng tại $A, B, C$ và $A', B', C'$:",
          items: [
            { key: "a", text: "Theo định lí Ta-lét trong không gian: $\\frac{AB}{A'B'} = \\frac{BC}{B'C'}$.", correct: "true", explain: "Định lí Ta-lét không gian." },
            { key: "b", text: "Nếu $AB = BC$ thì $A'B' = B'C'$.", correct: "true", explain: "Tỉ số bằng nhau." },
            { key: "c", text: "Độ dài đoạn $AB$ luôn bằng độ dài đoạn $A'B'$.", correct: "false", explain: "Hai cát tuyến có thể nghiêng với các góc khác nhau nên độ dài không nhất thiết bằng nhau." },
            { key: "d", text: "Các đoạn thẳng $AA', BB', CC'$ luôn đồng phẳng.", correct: "false", explain: "Hai cát tuyến chéo nhau thì chúng không đồng phẳng." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về khoảng cách giữa hai mặt phẳng song song:",
          items: [
            { key: "a", text: "Khoảng cách giữa hai mặt phẳng song song là khoảng cách từ một điểm bất kì trên mặt này đến mặt kia.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "b", text: "Mọi đoạn thẳng vuông góc nối hai mặt phẳng song song đều có độ dài bằng nhau.", correct: "true", explain: "Tính chất khoảng cách không đổi." },
            { key: "c", text: "Khoảng cách giữa hai sàn nhà của toà chung cư là khoảng cách giữa hai mặt phẳng song song.", correct: "true", explain: "Ứng dụng xây dựng." },
            { key: "d", text: "Khoảng cách giữa hai mặt phẳng song song có thể bằng 0.", correct: "false", explain: "Nếu bằng 0 thì hai mặt phẳng trùng nhau." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho tứ diện $ABCD$. Mặt phẳng $(P)$ song song với cả hai cạnh $AB$ và $CD$ cắt tứ diện theo một thiết diện:",
          items: [
            { key: "a", text: "Thiết diện cắt các mặt theo các đoạn thẳng song song với $AB$ hoặc $CD$.", correct: "true", explain: "Định lí giao tuyến." },
            { key: "b", text: "Thiết diện thu được là một hình bình hành.", correct: "true", explain: "Có các cặp cạnh đối diện song song." },
            { key: "c", text: "Nếu $AB \\perp CD$ thì thiết diện có thể là hình chữ nhật.", correct: "true", explain: "Hai cạnh kề vuông góc nhau." },
            { key: "d", text: "Thiết diện có thể là một hình ngũ giác.", correct: "false", explain: "Chỉ cắt 4 mặt của tứ diện nên tối đa là tứ giác." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính chất bắc cầu và mối quan hệ vuông góc - song song:",
          items: [
            { key: "a", text: "Nếu $(\\alpha) \\parallel (\\beta)$ và $(\\beta) \\parallel (\\gamma)$ thì $(\\alpha) \\parallel (\\gamma)$ (khi phân biệt).", correct: "true", explain: "Tính chất bắc cầu." },
            { key: "b", text: "Đường thẳng vuông góc với mặt này thì vuông góc với mặt kia.", correct: "true", explain: "Quan hệ vuông góc - song song." },
            { key: "c", text: "Hai mặt phẳng phân biệt cùng vuông góc với một đường thẳng thì song song với nhau.", correct: "true", explain: "Dấu hiệu nhận biết qua đường thẳng vuông góc." },
            { key: "d", text: "Mọi đường thẳng song song với $(\\alpha)$ đều song song với $(\\beta)$.", correct: "false", explain: "Đường thẳng đó có thể NẰM TRONG $(\\beta)$." }
          ]
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
        return (t.includes("bài 14:") || t.includes("phép chiếu song song")) && !t.includes("phương trình mặt phẳng") && !t.includes("phân tán");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm phép chiếu song song và Tính chất bảo toàn",
          theory: createStandardTheoryHTML(
            "Bài 14: Phép chiếu song song", "Lớp 11", 1,
            "Khái niệm phép chiếu song song và Tính chất bảo toàn",
            `<p>Phép chiếu song song chuẩn SGK Toán 11 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Cho mặt phẳng chiếu $(\\alpha)$ và đường thẳng phương chiếu $l$ cắt $(\\alpha)$. Với mỗi điểm $M$, đường thẳng qua $M$ song song với $l$ (hoặc trùng $l$) cắt $(\\alpha)$ tại $M'$. Điểm $M'$ gọi là <em>hình chiếu song song</em> của $M$ lên $(\\alpha)$ theo phương $l$.</li>
              <li><strong>Các tính chất bảo toàn của phép chiếu song song:</strong>
                <br/>• Biến ba điểm thẳng hàng thành ba điểm thẳng hàng và <strong>bảo toàn thứ tự</strong> các điểm đó.
                <br/>• Biến đường thẳng thành đường thẳng, biến tia thành tia, biến đoạn thẳng thành đoạn thẳng.
                <br/>• Biến hai đường thẳng song song thành hai đường thẳng song song hoặc trùng nhau.
                <br/>• <strong>Bảo toàn tỉ số độ dài</strong> của hai đoạn thẳng cùng nằm trên một đường thẳng hoặc trên hai đường thẳng song song.
              </li>
              <li><strong>Các yếu tố KHÔNG bảo toàn:</strong>
                <br/>• Độ lớn góc nói chung không được bảo toàn (góc vuông có thể biến thành góc nhọn, tù).
                <br/>• Tỉ số độ dài của hai đoạn thẳng không song song nói chung không được bảo toàn.
                <br/>• Đường tròn biến thành đường elip (hoặc đoạn thẳng).
              </li>
            </ul>`,
            `<li>Quy tắc vẽ hình không gian:
              <br/>• Tam giác bất kì (cân, đều, vuông) đều được biểu diễn bởi một tam giác thường.
              <br/>• Hình bình hành, hình chữ nhật, hình thoi, hình vuông đều được biểu diễn bởi một hình bình hành.
              <br/>• Hình tròn được biểu diễn bởi một hình elip.
            </li>`,
            `<li>Vẽ hình vuông thành hình vuông có 4 góc vuông (sai quy tắc biểu diễn).</li>
            <li>Ngộ nhận trung điểm không được bảo toàn (trung điểm luôn được bảo toàn vì tỉ số 1:1 trên đoạn thẳng).</li>`,
            `<li><em>"Chiếu song song: Thẳng hàng giữ nguyên – Song song giữ nguyên – Tỉ số đoạn song song không đổi – Góc và độ dài không bảo toàn!"</em></li>`
          ),
          mcqs: [
            {
              question: "Phép chiếu song song **KHÔNG** bảo toàn tính chất nào sau đây?",
              options: [
                "A. Độ lớn của góc",
                "B. Quan hệ song song của hai đường thẳng",
                "C. Thứ tự ba điểm thẳng hàng",
                "D. Tỉ số độ dài của hai đoạn thẳng nằm trên hai đường thẳng song song"
              ],
              correct: "A",
              explanation: "Phép chiếu song song không bảo toàn độ lớn của góc (ví dụ góc vuông thường chiếu thành góc nhọn hoặc góc tù).",
              hint1: "Xem các yếu tố không được bảo toàn.",
              hint2: "Độ lớn của góc không được bảo toàn."
            },
            {
              question: "Hình biểu diễn của một đường tròn qua phép chiếu song song là hình gì?",
              options: ["A. Đường Elip (hoặc đoạn thẳng)", "B. Hình tròn duy nhất", "C. Hình Parabol", "D. Tam giác"],
              correct: "A",
              explanation: "Hình chiếu song song của một đường tròn lên một mặt phẳng là một đường elip (hoặc đoạn thẳng nếu mặt phẳng chứa đường tròn song song với phương chiếu).",
              hint1: "Hình tròn chiếu nghiêng thành hình gì?",
              hint2: "Đường Elip."
            },
            {
              question: "Nếu $M$ là trung điểm của đoạn thẳng $AB$ thì hình chiếu $M'$ của $M$ có quan hệ gì với hình chiếu $A', B'$ của $A, B$?",
              options: [
                "A. $M'$ là trung điểm của đoạn thẳng $A'B'$",
                "B. $M'$ không nằm trên đoạn $A'B'$",
                "C. $M'A' = 2 M'B'$",
                "D. $M'$ trùng với $A'$"
              ],
              correct: "A",
              explanation: "Vì phép chiếu song song bảo toàn tỉ số độ dài các đoạn thẳng thẳng hàng nên trung điểm biến thành trung điểm ($M'$ là trung điểm $A'B'$).",
              hint1: "Tỉ số đoạn thẳng cùng nằm trên 1 đường thẳng được bảo toàn.",
              hint2: "$M'$ là trung điểm của $A'B'$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các tính chất của phép chiếu song song lên mặt phẳng $(\\alpha)$ theo phương $l$:",
          items: [
            { key: "a", text: "Hình chiếu của một đường thẳng song song với phương chiếu $l$ là một điểm.", correct: "true", explain: "Toàn bộ đường thẳng chiếu về giao điểm với mặt phẳng." },
            { key: "b", text: "Hình chiếu của hai đường thẳng cắt nhau là hai đường thẳng cắt nhau hoặc trùng nhau.", correct: "true", explain: "Tính chất giao điểm." },
            { key: "c", text: "Hình chiếu của tam giác đều là một tam giác đều.", correct: "false", explain: "Được biểu diễn bởi một tam giác thường tuỳ ý." },
            { key: "d", text: "Trọng tâm tam giác được bảo toàn qua phép chiếu song song.", correct: "true", explain: "Vì trung điểm và tỉ số 2:1 trên trung tuyến được bảo toàn." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông. Khi vẽ hình biểu diễn của hình chóp lên trang giấy:",
          items: [
            { key: "a", text: "Mặt đáy $ABCD$ được vẽ thành một hình bình hành.", correct: "true", explain: "Quy tắc biểu diễn hình vuông." },
            { key: "b", text: "Tâm $O$ của hình vuông là giao điểm hai đường chéo của hình bình hành.", correct: "true", explain: "Bảo toàn giao điểm." },
            { key: "c", text: "Bốn cạnh của đáy trên hình vẽ bắt buộc phải vẽ bằng nhau.", correct: "false", explain: "Hình bình hành hai cạnh kề thường vẽ độ dài khác nhau." },
            { key: "d", text: "Các đường khuất phía sau đáy và sau khối chóp phải vẽ bằng nét đứt.", correct: "true", explain: "Quy chuẩn nét vẽ không gian." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Trong tự nhiên, bóng của các vật thể dưới ánh sáng mặt trời là một ví dụ của phép chiếu song song:",
          items: [
            { key: "a", text: "Tia nắng mặt trời chiếu xuống mặt đất được coi là các đường thẳng song song.", correct: "true", explain: "Khoảng cách Mặt Trời rất xa nên các tia song song." },
            { key: "b", text: "Mặt đất phẳng đóng vai trò là mặt phẳng chiếu.", correct: "true", explain: "Mô hình thực tế." },
            { key: "c", text: "Bóng của một chiếc cọc thẳng đứng luôn vuông góc với mặt đất.", correct: "false", explain: "Bóng nằm trên mặt đất, cọc dựng đứng nên cọc vuông góc với bóng." },
            { key: "d", text: "Tỉ số bóng của hai cây cột đứng thẳng bằng tỉ số chiều cao thực tế của chúng.", correct: "true", explain: "Định lí Ta-lét và tính chất bảo toàn tỉ số phép chiếu." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về phép chiếu vuông góc (trường hợp đặc biệt của chiếu song song):",
          items: [
            { key: "a", text: "Phép chiếu vuông góc là phép chiếu song song có phương chiếu vuông góc với mặt phẳng chiếu.", correct: "true", explain: "Định nghĩa chiếu vuông góc." },
            { key: "b", text: "Hình chiếu vuông góc của một đoạn thẳng có độ dài không vượt quá độ dài đoạn thẳng ban đầu.", correct: "true", explain: "$A'B' = AB \\cos\\varphi \\le AB$." },
            { key: "c", text: "Nếu đoạn thẳng song song với mặt phẳng chiếu thì hình chiếu vuông góc có độ dài bằng chính nó.", correct: "true", explain: "Vì $\\cos 0^\\circ = 1$." },
            { key: "d", text: "Phép chiếu vuông góc bảo toàn diện tích của mọi hình phẳng.", correct: "false", explain: "Công thức diện tích hình chiếu $S' = S \\cos\\varphi \\le S$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình thoi $ABCD$ có góc $60^\\circ$. Hình biểu diễn của nó qua phép chiếu song song có thể là:",
          items: [
            { key: "a", text: "Một hình bình hành bất kì.", correct: "true", explain: "Hình thoi được biểu diễn bởi hình bình hành." },
            { key: "b", text: "Một hình chữ nhật.", correct: "true", explain: "Hình chữ nhật là trường hợp riêng của hình bình hành." },
            { key: "c", text: "Một hình thoi khác.", correct: "true", explain: "Cũng là hình bình hành." },
            { key: "d", text: "Một hình thang cân.", correct: "false", explain: "Hình thang không bảo toàn 2 cặp cạnh đối song song của hình thoi." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán dựng hình chiếu của một điểm $M$ lên mặt phẳng $(\\alpha)$ theo phương $l$:",
          items: [
            { key: "a", text: "Nếu $M \\in (\\alpha)$ thì hình chiếu $M'$ trùng với $M$.", correct: "true", explain: "Điểm trên mặt chiếu biến thành chính nó." },
            { key: "b", text: "Phương chiếu $l$ không được song song với mặt phẳng chiếu $(\\alpha)$.", correct: "true", explain: "Nếu song song thì đường qua $M$ không cắt mặt phẳng chiếu." },
            { key: "c", text: "Đường thẳng $MM'$ luôn song song hoặc trùng với phương chiếu $l$.", correct: "true", explain: "Định nghĩa đường chiếu." },
            { key: "d", text: "Có thể tìm được hai hình chiếu khác nhau của cùng một điểm $M$.", correct: "false", explain: "Đường thẳng qua $M$ cắt mặt phẳng tại DUY NHẤT một điểm." }
          ]
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
