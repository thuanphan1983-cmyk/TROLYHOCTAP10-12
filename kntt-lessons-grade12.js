/**
 * GIÁO ÁN CHI TIẾT TỪNG BÀI TOÁN LỚP 12 - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
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

  const GRADE12_PART1_LESSONS = {
    // =========================================================================
    // BÀI 7: HỆ TRỤC TOẠ ĐỘ TRONG KHÔNG GIAN (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai7": {
      id: "toan12_bai7",
      lessonTitle: "Bài 7: Hệ trục toạ độ trong không gian",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 7:") || t.includes("hệ trục toạ độ") || t.includes("he truc toa do")) && !t.includes("biểu thức toạ độ");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Hệ toạ độ Oxyz, toạ độ của điểm và toạ độ của vectơ",
          theory: createStandardTheoryHTML(
            "Bài 7: Hệ trục toạ độ trong không gian", "Lớp 12", 1,
            "Hệ toạ độ Oxyz, toạ độ của điểm và toạ độ của vectơ",
            `<p>Hệ trục toạ độ Đề-các vuông góc trong không gian gồm ba trục $Ox, Oy, Oz$ đôi một vuông góc với các vectơ đơn vị $\\vec{i}, \\vec{j}, \\vec{k}$ ($|\\vec{i}| = |\\vec{j}| = |\\vec{k}| = 1$):</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Toạ độ của vectơ:</strong> Mỗi vectơ $\\vec{u}$ đều được biểu diễn duy nhất dưới dạng:
                $$\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Leftrightarrow \\vec{u} = (x; y; z)$$
                với $x$ là hoành độ, $y$ là tung độ, $z$ là cao độ.
              </li>
              <li><strong>Toạ độ của điểm:</strong> Điểm $M$ có toạ độ $(x; y; z)$, ký hiệu $M(x; y; z)$, khi và chỉ khi:
                $$\\vec{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}$$
              </li>
              <li><strong>Toạ độ các điểm đặc biệt:</strong> Gốc toạ độ $O(0; 0; 0)$; điểm trên trục $Ox: (x; 0; 0)$; $Oy: (0; y; 0)$; $Oz: (0; 0; z)$. Điểm trên $(Oxy): (x; y; 0)$; $(Oyz): (0; y; z)$; $(Ozx): (x; 0; z)$.</li>
            </ul>`,
            `<li>Thứ tự các trục tuân theo quy tắc bàn tay phải: $Ox$ (ngón cái), $Oy$ (ngón trỏ), $Oz$ (ngón giữa dựng đứng).</li>
            <li>Vectơ đơn vị có toạ độ: $\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$.</li>`,
            `<li>Nhầm thứ tự giữa tung độ $y$ và cao độ $z$ khi đề bài đảo thứ tự $\\vec{j}$ và $\\vec{k}$ (ví dụ $\\vec{u} = 2\\vec{i} - 3\\vec{k} + 4\\vec{j} \\implies \\vec{u} = (2; 4; -3)$).</li>
            <li>Chiếu vuông góc lên mặt phẳng nào thì giữ nguyên toạ độ mang tên mặt phẳng đó, toạ độ còn lại bằng 0.</li>`,
            `<li><em>"Hệ toạ độ Oxyz ba chiều không gian – i hoành j tung k cao – Nhớ xếp đúng thứ tự i, j, k trước khi đọc toạ độ!"</em></li>`
          ),
          mcqs: [
            {
              question: "Trong không gian $Oxyz$, cho vectơ $\\vec{u} = 3\\vec{i} - 5\\vec{k} + 2\\vec{j}$. Toạ độ của vectơ $\\vec{u}$ là:",
              options: ["A. $(3; 2; -5)$", "B. $(3; -5; 2)$", "C. $(-5; 2; 3)$", "D. $(3; 2; 5)$"],
              correct: "A",
              explanation: "Sắp xếp theo thứ tự $\\vec{i}, \\vec{j}, \\vec{k}$: $\\vec{u} = 3\\vec{i} + 2\\vec{j} - 5\\vec{k}$. Vậy toạ độ là $(3; 2; -5)$.",
              hint1: "Đề bài đảo vị trí $\\vec{k}$ trước $\\vec{j}$.",
              hint2: "Viết lại $\\vec{u} = 3\\vec{i} + 2\\vec{j} - 5\\vec{k}$ rồi đọc $(x; y; z)$."
            },
            {
              question: "Trong không gian $Oxyz$, hình chiếu vuông góc của điểm $M(2; -3; 5)$ lên mặt phẳng toạ độ $(Oxy)$ có toạ độ là:",
              options: ["A. $(2; -3; 0)$", "B. $(2; 0; 5)$", "C. $(0; -3; 5)$", "D. $(0; 0; 5)$"],
              correct: "A",
              explanation: "Hình chiếu lên $(Oxy)$ giữ nguyên $x$ và $y$, cao độ $z = 0$, ta được $(2; -3; 0)$.",
              hint1: "Chiếu lên mặt phẳng $(Oxy)$ thì thành phần nào bằng 0?",
              hint2: "Cao độ $z = 0$, còn $x = 2, y = -3$ giữ nguyên."
            },
            {
              question: "Trong không gian $Oxyz$, điểm đối xứng của $A(1; -2; 4)$ qua trục $Oz$ có toạ độ là:",
              options: ["A. $(-1; 2; 4)$", "B. $(1; -2; -4)$", "C. $(-1; -2; 4)$", "D. $(-1; 2; -4)$"],
              correct: "A",
              explanation: "Đối xứng qua trục $Oz$: giữ nguyên cao độ $z = 4$, đổi dấu hoành độ và tung độ: $x' = -1, y' = 2$. Vậy toạ độ là $(-1; 2; 4)$.",
              hint1: "Đối xứng qua trục $Oz$ thì toạ độ nào giữ nguyên dấu?",
              hint2: "$z$ giữ nguyên, $x$ và $y$ đổi dấu."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Trong không gian $Oxyz$, cho điểm $A(2; -3; 1)$ và vectơ $\\vec{u} = -\\vec{i} + 4\\vec{k}$:",
          items: [
            { key: "a", text: "Toạ độ của vectơ $\\vec{u}$ là $(-1; 0; 4)$.", correct: "true", explain: "Vì thiếu $\\vec{j}$ nên tung độ $y = 0$." },
            { key: "b", text: "Vectơ vị trí $\\vec{OA} = (2; -3; 1)$.", correct: "true", explain: "Toạ độ điểm $A$ chính là toạ độ vectơ $\\vec{OA}$." },
            { key: "c", text: "Hình chiếu của $A$ lên trục $Oy$ là điểm $A_1(0; -3; 0)$.", correct: "true", explain: "Chiếu lên $Oy$ thì $x = z = 0$." },
            { key: "d", text: "Khoảng cách từ $A$ đến mặt phẳng $(Oxy)$ bằng $3$.", correct: "false", explain: "Khoảng cách đến $(Oxy)$ là $|z| = |1| = 1$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét các khẳng định về hệ toạ độ $Oxyz$ trong không gian:",
          items: [
            { key: "a", text: "Ba trục $Ox, Oy, Oz$ đôi một vuông góc tại gốc toạ độ $O$.", correct: "true", explain: "Định nghĩa hệ trục toạ độ trực chuẩn." },
            { key: "b", text: "Toạ độ của vectơ đơn vị $\\vec{j}$ là $(0; 1; 0)$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Điểm $M(x; y; z)$ nằm trên mặt phẳng $(Oyz)$ khi và chỉ khi $x = 0$.", correct: "true", explain: "Phương trình mặt toạ độ $(Oyz)$ là $x = 0$." },
            { key: "d", text: "Khoảng cách từ điểm $M(x; y; z)$ đến gốc toạ độ $O$ là $OM = x^2 + y^2 + z^2$.", correct: "false", explain: "Khoảng cách là $OM = \\sqrt{x^2 + y^2 + z^2}$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $A(0; 0; 0), B(a; 0; 0), D(0; b; 0), A'(0; 0; c)$:",
          items: [
            { key: "a", text: "Toạ độ điểm $C$ là $(a; b; 0)$.", correct: "true", explain: "$C$ nằm trên $(Oxy)$ có $x = a, y = b$." },
            { key: "b", text: "Toạ độ điểm $C'$ là $(a; b; c)$.", correct: "true", explain: "Đỉnh đối diện gốc toạ độ." },
            { key: "c", text: "Độ dài đường chéo $AC' = \\sqrt{a^2 + b^2 + c^2}$.", correct: "true", explain: "Độ dài đường chéo hình hộp." },
            { key: "d", text: "Toạ độ tâm hình hộp là $I(a; b; c)$.", correct: "false", explain: "Tâm là trung điểm đường chéo: $(\\frac{a}{2}; \\frac{b}{2}; \\frac{c}{2})$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét điểm $M(1; -2; 3)$:",
          items: [
            { key: "a", text: "Điểm đối xứng của $M$ qua gốc toạ độ $O$ là $(-1; 2; -3)$.", correct: "true", explain: "Đổi dấu cả 3 toạ độ." },
            { key: "b", text: "Điểm đối xứng của $M$ qua mặt phẳng $(Oxz)$ là $(1; 2; 3)$.", correct: "true", explain: "Giữ $x, z$, đổi dấu $y$ thành $+2$." },
            { key: "c", text: "Khoảng cách từ $M$ đến trục $Oz$ là $\\sqrt{1^2 + (-2)^2} = \\sqrt{5}$.", correct: "true", explain: "$d(M, Oz) = \\sqrt{x^2 + y^2}$." },
            { key: "d", text: "Khoảng cách từ $M$ đến mặt phẳng $(Oyz)$ bằng $-1$.", correct: "false", explain: "Khoảng cách luôn không âm: $|x| = |1| = 1$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho ba vectơ $\\vec{a} = (1; 2; -1), \\vec{b} = (0; 3; 4), \\vec{c} = (2; 1; -6)$:",
          items: [
            { key: "a", text: "Vectơ $\\vec{u} = 2\\vec{a} - \\vec{b} = (2; 1; -6)$.", correct: "true", explain: "$2(1)-0=2, 2(2)-3=1, 2(-1)-4=-6$." },
            { key: "b", text: "Vectơ $\\vec{u}$ bằng vectơ $\\vec{c}$.", correct: "true", explain: "Cùng có toạ độ $(2; 1; -6)$." },
            { key: "c", text: "Ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đồng phẳng.", correct: "true", explain: "Vì $\\vec{c} = 2\\vec{a} - \\vec{b}$." },
            { key: "d", text: "Độ dài của $\\vec{a}$ bằng $\\sqrt{5}$.", correct: "false", explain: "$|\\vec{a}| = \\sqrt{1+4+1} = \\sqrt{6}$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ứng dụng hệ toạ độ không gian trong thực tế:",
          items: [
            { key: "a", text: "Hệ toạ độ GPS xác định vị trí vệ tinh dựa trên toạ độ ba chiều.", correct: "true", explain: "Ứng dụng định vị thực tế." },
            { key: "b", text: "Trong đồ họa 3D máy tính, các mô hình được dựng từ hệ toạ độ $Oxyz$.", correct: "true", explain: "Đồ họa vi tính 3D." },
            { key: "c", text: "Radar hàng không xác định máy bay qua cự ly, phương vị và độ cao (tương đương cao độ $z$).", correct: "true", explain: "Kiểm soát không lưu." },
            { key: "d", text: "Trong không gian, toạ độ của một điểm chỉ cần 2 số là xác định được.", correct: "false", explain: "Không gian 3 chiều bắt buộc cần bộ 3 số $(x; y; z)$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 8: BIỂU THỨC TOẠ ĐỘ CỦA CÁC PHÉP TOÁN VECTƠ (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai8": {
      id: "toan12_bai8",
      lessonTitle: "Bài 8: Biểu thức toạ độ của các phép toán vectơ",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 8:") || t.includes("biểu thức toạ độ") || t.includes("bieu thuc toa do")) && !t.includes("mẫu số liệu");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Toạ độ tổng, hiệu, tích vectơ với một số và toạ độ trung điểm, trọng tâm",
          theory: createStandardTheoryHTML(
            "Bài 8: Biểu thức toạ độ của các phép toán vectơ", "Lớp 12", 1,
            "Toạ độ tổng, hiệu, tích vectơ với một số và toạ độ trung điểm, trọng tâm",
            `<p>Cho hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ và số thực $k$:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phép cộng và trừ:</strong> $\\vec{u} \\pm \\vec{v} = (x_1 \\pm x_2; y_1 \\pm y_2; z_1 \\pm z_2)$.</li>
              <li><strong>Nhân với số thực:</strong> $k\\vec{u} = (kx_1; ky_1; kz_1)$.</li>
              <li><strong>Toạ độ vectơ $\\vec{AB}$:</strong> Với $A(x_A; y_A; z_A), B(x_B; y_B; z_B)$ thì:
                $$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$$
              </li>
              <li><strong>Toạ độ trung điểm $M$ của đoạn $AB$:</strong> $M\\left(\\frac{x_A + x_B}{2}; \\frac{y_A + y_B}{2}; \\frac{z_A + z_B}{2}\\right)$.</li>
              <li><strong>Toạ độ trọng tâm $G$ của tam giác $ABC$:</strong> $G\\left(\\frac{x_A + x_B + x_C}{3}; \\frac{y_A + y_B + y_C}{3}; \\frac{z_A + z_B + z_C}{3}\\right)$.</li>
            </ul>`,
            `<li>Lấy toạ độ điểm ngọn trừ toạ độ điểm gốc: $\\vec{AB} = B - A$.</li>
            <li>Hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương khi và chỉ khi tồn tại $k$ sao cho $\\vec{u} = k\\vec{v}$ (hoặc các tỉ số hoành, tung, cao bằng nhau khi mẫu khác 0).</li>`,
            `<li>Lấy ngược $A - B$ khi tính $\\vec{AB}$.</li>
            <li>Nhầm công thức trọng tâm chia cho 2 thay vì chia cho 3.</li>`,
            `<li><em>"Vectơ lấy sau trừ trước – Trung điểm cộng đôi chia hai – Trọng tâm cộng ba chia ba!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai điểm $A(1; 2; -3)$ và $B(3; 0; 1)$. Toạ độ của vectơ $\\vec{AB}$ là:",
              options: ["A. $(2; -2; 4)$", "B. $(-2; 2; -4)$", "C. $(4; 2; -2)$", "D. $(2; 1; -1)$"],
              correct: "A",
              explanation: "$\\vec{AB} = (3-1; 0-2; 1-(-3)) = (2; -2; 4)$.",
              hint1: "Lấy toạ độ của điểm $B$ trừ toạ độ điểm $A$.",
              hint2: "$x_B - x_A = 3 - 1 = 2$."
            },
            {
              question: "Cho đoạn thẳng $AB$ với $A(2; -4; 6)$ và $B(4; 2; 0)$. Toạ độ trung điểm $I$ của $AB$ là:",
              options: ["A. $(3; -1; 3)$", "B. $(6; -2; 6)$", "C. $(1; 3; -3)$", "D. $(2; 6; -6)$"],
              correct: "A",
              explanation: "$I = (\\frac{2+4}{2}; \\frac{-4+2}{2}; \\frac{6+0}{2}) = (3; -1; 3)$.",
              hint1: "Cộng toạ độ của $A$ và $B$ rồi chia cho 2.",
              hint2: "$\\frac{2+4}{2} = 3, \\frac{-4+2}{2} = -1, \\frac{6+0}{2} = 3$."
            },
            {
              question: "Cho ba điểm $A(1; 0; 2), B(-2; 1; 3), C(4; 5; 1)$. Toạ độ trọng tâm $G$ của tam giác $ABC$ là:",
              options: ["A. $(1; 2; 2)$", "B. $(3; 6; 6)$", "C. $(1; 3; 3)$", "D. $(2; 2; 1)$"],
              correct: "A",
              explanation: "$x_G = \\frac{1-2+4}{3} = 1, y_G = \\frac{0+1+5}{3} = 2, z_G = \\frac{2+3+1}{3} = 2$. Vậy $G(1; 2; 2)$.",
              hint1: "Cộng toạ độ 3 đỉnh rồi chia cho 3.",
              hint2: "$(1 - 2 + 4)/3 = 3/3 = 1$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tích vô hướng, độ dài vectơ và khoảng cách giữa hai điểm",
          theory: createStandardTheoryHTML(
            "Bài 8: Biểu thức toạ độ của các phép toán vectơ", "Lớp 12", 2,
            "Tích vô hướng, độ dài vectơ và khoảng cách giữa hai điểm",
            `<p>Biểu thức toạ độ của tích vô hướng và các ứng dụng độ dài, khoảng cách:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Tích vô hướng của hai vectơ:</strong>
                $$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$$
              </li>
              <li><strong>Độ dài của vectơ:</strong> $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}$.</li>
              <li><strong>Khoảng cách giữa hai điểm $A$ và $B$:</strong>
                $$AB = |\\vec{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$$
              </li>
              <li><strong>Góc giữa hai vectơ:</strong>
                $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2} \\cdot \\sqrt{x_2^2 + y_2^2 + z_2^2}}$$
              </li>
              <li><strong>Điều kiện vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$.</li>
            </ul>`,
            `<li>Tích vô hướng của hai vectơ là một SỐ THỰC, không phải là vectơ.</li>
            <li>Hai vectơ vuông góc thì tích vô hướng bằng 0.</li>`,
            `<li>Quên lấy dấu căn bậc hai khi tính độ dài vectơ hoặc khoảng cách hai điểm.</li>
            <li>Nhầm dấu âm trong công thức cos góc giữa hai vectơ khi tích vô hướng âm (góc tù thì cos âm).</li>`,
            `<li><em>"Tích vô hướng: Hoành nhân hoành cộng tung nhân tung cộng cao nhân cao – Ra số 0 là vuông góc!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai vectơ $\\vec{u} = (1; 2; -2)$ và $\\vec{v} = (2; -1; 3)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
              options: ["A. $-6$", "B. $6$", "C. $-4$", "D. $0$"],
              correct: "A",
              explanation: "$\\vec{u} \\cdot \\vec{v} = 1(2) + 2(-1) + (-2)(3) = 2 - 2 - 6 = -6$.",
              hint1: "Áp dụng công thức $x_1 x_2 + y_1 y_2 + z_1 z_2$.",
              hint2: "$1(2) + 2(-1) + (-2)(3) = -6$."
            },
            {
              question: "Độ dài của vectơ $\\vec{a} = (2; -1; 2)$ bằng:",
              options: ["A. $3$", "B. $9$", "C. $\\sqrt{5}$", "D. $\\sqrt{3}$"],
              correct: "A",
              explanation: "$|\\vec{a}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$.",
              hint1: "Lấy căn bậc hai tổng các bình phương toạ độ.",
              hint2: "$\\sqrt{4 + 1 + 4} = 3$."
            },
            {
              question: "Khoảng cách giữa hai điểm $A(1; 0; 1)$ và $B(3; 2; 0)$ bằng:",
              options: ["A. $3$", "B. $\\sqrt{7}$", "C. $9$", "D. $2$"],
              correct: "A",
              explanation: "$AB = \\sqrt{(3-1)^2 + (2-0)^2 + (0-1)^2} = \\sqrt{4 + 4 + 1} = \\sqrt{9} = 3$.",
              hint1: "Khoảng cách $AB = \\sqrt{\\Delta x^2 + \\Delta y^2 + \\Delta z^2}$.",
              hint2: "$\\sqrt{2^2 + 2^2 + (-1)^2} = \\sqrt{9} = 3$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Trong không gian $Oxyz$, cho ba điểm $A(1; 1; 1), B(2; 3; 4), C(3; 5; 7)$:",
          items: [
            { key: "a", text: "Vectơ $\\vec{AB} = (1; 2; 3)$.", correct: "true", explain: "$(2-1; 3-1; 4-1) = (1; 2; 3)$." },
            { key: "b", text: "Vectơ $\\vec{BC} = (1; 2; 3)$.", correct: "true", explain: "$(3-2; 5-3; 7-4) = (1; 2; 3)$." },
            { key: "c", text: "Ba điểm $A, B, C$ thẳng hàng.", correct: "true", explain: "Vì $\\vec{AB} = \\vec{BC}$ nên $B$ là trung điểm $AC$, ba điểm thẳng hàng." },
            { key: "d", text: "Ba điểm $A, B, C$ tạo thành một tam giác có diện tích dương.", correct: "false", explain: "Ba điểm thẳng hàng không tạo thành tam giác." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai vectơ $\\vec{u} = (1; m; 2)$ và $\\vec{v} = (m; 2; -3)$:",
          items: [
            { key: "a", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 3m - 6$.", correct: "true", explain: "$1(m) + m(2) + 2(-3) = 3m - 6$." },
            { key: "b", text: "Hai vectơ vuông góc khi $m = 2$.", correct: "true", explain: "$3m - 6 = 0 \\Leftrightarrow m = 2$." },
            { key: "c", text: "Khi $m = 0$, góc giữa hai vectơ là góc tù.", correct: "true", explain: "Khi $m = 0$, $\\vec{u} \\cdot \\vec{v} = -6 < 0$ nên góc giữa chúng tù." },
            { key: "d", text: "Với mọi $m$, độ dài $|\vec{u}| \\ge 2$.", correct: "true", explain: "$|\\vec{u}| = \\sqrt{m^2 + 5} \\ge \\sqrt{5} > 2$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tam giác $ABC$ có $A(1; 0; 0), B(0; 0; 1), C(2; 1; 1)$:",
          items: [
            { key: "a", text: "Độ dài cạnh $AB = \\sqrt{2}$.", correct: "true", explain: "$\\sqrt{(0-1)^2 + 0 + (1-0)^2} = \\sqrt{2}$." },
            { key: "b", text: "Vectơ $\\vec{AB} = (-1; 0; 1)$ và $\\vec{AC} = (1; 1; 1)$.", correct: "true", explain: "Tính toạ độ chuẩn." },
            { key: "c", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.", correct: "true", explain: "$(-1)(1) + 0(1) + 1(1) = 0$." },
            { key: "d", text: "Tam giác $ABC$ vuông cân tại $A$.", correct: "false", explain: "Vuông tại $A$ nhưng $AC = \\sqrt{3} \\neq AB = \\sqrt{2}$, không cân." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét bốn điểm $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$:",
          items: [
            { key: "a", text: "Trọng tâm tam giác $ABC$ là $G(\\frac{1}{3}; \\frac{1}{3}; \\frac{1}{3})$.", correct: "true", explain: "Cộng lại chia 3." },
            { key: "b", text: "Đoạn $OD$ đi qua trọng tâm $G$.", correct: "true", explain: "$\\vec{OD} = (1; 1; 1) = 3\\vec{OG}$ nên $O, G, D$ thẳng hàng." },
            { key: "c", text: "Tứ diện $ABCD$ có trọng tâm là $M(\\frac{1}{2}; \\frac{1}{2}; \\frac{1}{2})$.", correct: "true", explain: "Cộng 4 điểm chia 4: $x = (1+0+0+1)/4 = 1/2$." },
            { key: "d", text: "Tam giác $ABC$ là tam giác đều.", correct: "true", explain: "Ba cạnh đều bằng $\\sqrt{2}$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hai điểm $A(2; 1; -1)$ và $B(0; 3; 1)$:",
          items: [
            { key: "a", text: "Trung điểm của $AB$ là $I(1; 2; 0)$.", correct: "true", explain: "Cộng đôi chia 2." },
            { key: "b", text: "Độ dài đoạn thẳng $AB = 2\\sqrt{3}$.", correct: "true", explain: "$AB = \\sqrt{(-2)^2 + 2^2 + 2^2} = \\sqrt{12} = 2\\sqrt{3}$." },
            { key: "c", text: "Mặt cầu đường kính $AB$ có bán kính $R = \\sqrt{3}$.", correct: "true", explain: "$R = AB/2 = \\sqrt{3}$." },
            { key: "d", text: "Điểm $M$ thuộc trục $Oz$ cách đều $A$ và $B$ có toạ độ $(0; 0; 0)$.", correct: "false", explain: "Giải $MA = MB$ ra $z = 1$, tức $(0; 0; 1)$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính chất của tích vô hướng trong không gian:",
          items: [
            { key: "a", text: "Bình phương vô hướng của vectơ bằng bình phương độ dài: $\\vec{u}^2 = |\\vec{u}|^2$.", correct: "true", explain: "Tính chất cơ bản." },
            { key: "b", text: "Nếu $\\vec{u} \\cdot \\vec{v} > 0$ thì góc giữa hai vectơ là góc nhọn.", correct: "true", explain: "Cos dương thì góc nhọn." },
            { key: "c", text: "Bất đẳng thức Cauchy-Schwarz: $|\\vec{u} \\cdot \\vec{v}| \\le |\\vec{u}| \\cdot |\\vec{v}|$.", correct: "true", explain: "Vì $|\\cos \\varphi| \\le 1$." },
            { key: "d", text: "Nếu $\\vec{u} \\cdot \\vec{v} = \\vec{u} \\cdot \\vec{w}$ và $\\vec{u} \\neq \\vec{0}$ thì $\\vec{v} = \\vec{w}$.", correct: "false", explain: "Sai, chỉ suy ra $\\vec{u} \\perp (\\vec{v} - \\vec{w})$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 9: KHOẢNG BIẾN THIÊN VÀ KHOẢNG TỨ PHÂN VỊ CỦA MẪU GHÉP NHÓM (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai9": {
      id: "toan12_bai9",
      lessonTitle: "Bài 9: Khoảng biến thiên và khoảng tứ phân vị",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 9:") || t.includes("khoảng biến thiên") || t.includes("khoảng tứ phân vị")) && !t.includes("phương sai");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khoảng biến thiên của mẫu số liệu ghép nhóm",
          theory: createStandardTheoryHTML(
            "Bài 9: Khoảng biến thiên và khoảng tứ phân vị", "Lớp 12", 1,
            "Khoảng biến thiên của mẫu số liệu ghép nhóm",
            `<p>Khoảng biến thiên của mẫu số liệu ghép nhóm phản ánh độ dàn trải của toàn bộ mẫu số liệu:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Khoảng biến thiên của mẫu số liệu ghép nhóm, ký hiệu là $R$, là hiệu giữa đầu mút phải của nhóm cuối cùng ($a_{k+1}$) và đầu mút trái của nhóm đầu tiên ($a_1$):
                $$R = a_{k+1} - a_1$$
              </li>
              <li><strong>Ý nghĩa:</strong> $R$ càng lớn thì số liệu càng phân tán rộng; $R$ càng nhỏ thì số liệu càng tập trung.</li>
            </ul>`,
            `<li>Khoảng biến thiên chỉ phụ thuộc vào hai giá trị mút ngoài cùng, không phụ thuộc vào tần số các nhóm bên trong.</li>
            <li>Đơn vị đo của khoảng biến thiên trùng với đơn vị của số liệu ban đầu.</li>`,
            `<li>Lấy nhầm hiệu giữa giá trị lớn nhất trừ giá trị nhỏ nhất của mẫu gốc khi đề yêu cầu tính trên mẫu ghép nhóm.</li>
            <li>Khoảng biến thiên dễ bị ảnh hưởng bởi các giá trị ngoại lai (bất thường).</li>`,
            `<li><em>"Khoảng biến thiên mẫu ghép nhóm: Lấy mút phải nhóm cuối trừ mút trái nhóm đầu!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một mẫu số liệu ghép nhóm có các nhóm là $[10; 20), [20; 30), [30; 40), [40; 50]$. Khoảng biến thiên $R$ bằng:",
              options: ["A. 40", "B. 30", "C. 50", "D. 10"],
              correct: "A",
              explanation: "$R = a_{k+1} - a_1 = 50 - 10 = 40$.",
              hint1: "Lấy đầu mút phải nhóm cuối trừ đầu mút trái nhóm đầu.",
              hint2: "$50 - 10 = 40$."
            },
            {
              question: "Khẳng định nào sau đây là **ĐÚNG** về khoảng biến thiên của mẫu số liệu ghép nhóm?",
              options: [
                "A. Khoảng biến thiên dễ bị ảnh hưởng bởi các giá trị bất thường (ngoại lai)",
                "B. Khoảng biến thiên luôn nhỏ hơn khoảng tứ phân vị",
                "C. Khoảng biến thiên có thể nhận giá trị âm",
                "D. Khoảng biến thiên thay đổi khi thay đổi tần số các nhóm ở giữa"
              ],
              correct: "A",
              explanation: "Vì chỉ dựa vào hai đầu mút nên $R$ rất nhạy cảm với các giá trị ngoại lai.",
              hint1: "Xem lại nhược điểm của khoảng biến thiên trong SGK KNTT.",
              hint2: "Giá trị bất thường ở hai đầu sẽ kéo dãn khoảng biến thiên."
            },
            {
              question: "Cho mẫu số liệu ghép nhóm với nhóm đầu $[0; 5)$ và nhóm cuối $[25; 30)$. Khoảng biến thiên $R$ của mẫu số liệu là:",
              options: ["A. 30", "B. 25", "C. 5", "D. 35"],
              correct: "A",
              explanation: "$R = 30 - 0 = 30$.",
              hint1: "$a_{k+1} = 30, a_1 = 0$.",
              hint2: "$30 - 0 = 30$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Khoảng tứ phân vị và xác định giá trị ngoại lai",
          theory: createStandardTheoryHTML(
            "Bài 9: Khoảng biến thiên và khoảng tứ phân vị", "Lớp 12", 2,
            "Khoảng tứ phân vị và xác định giá trị ngoại lai",
            `<p>Khoảng tứ phân vị đo mức độ phân tán của $50\\%$ số liệu chính giữa và không bị ảnh hưởng bởi giá trị ngoại lai:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Khoảng tứ phân vị:</strong> $\\Delta_Q = Q_3 - Q_1$.</li>
              <li><strong>Công thức tính $Q_1$ (vị trí $\\frac{n}{4}$):</strong>
                $$Q_1 = a_p + \\frac{\\frac{n}{4} - C_{p-1}}{n_p} \\cdot h$$
              </li>
              <li><strong>Công thức tính $Q_3$ (vị trí $\\frac{3n}{4}$):</strong>
                $$Q_3 = a_q + \\frac{\\frac{3n}{4} - C_{q-1}}{n_q} \\cdot h$$
              </li>
              <li><strong>Tiêu chuẩn xác định giá trị ngoại lai (bất thường):</strong>
                $$x < Q_1 - 1.5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1.5\\Delta_Q$$
              </li>
            </ul>`,
            `<li>$\\Delta_Q$ luôn $\\ge 0$ và $\\Delta_Q \\le R$.</li>
            <li>Khoảng tứ phân vị phản ánh chính xác sự phân tán của phần lớn số liệu trung tâm.</li>`,
            `<li>Quên nhân độ dài nhóm $h$ khi tính tứ phân vị.</li>
            <li>Nhầm giữa số thứ tự tích luỹ $C_{p-1}$ của nhóm trước và tần số $n_p$ của nhóm đang xét.</li>`,
            `<li><em>"Khoảng tứ phân vị: Lấy Q3 trừ Q1 – 50% số liệu nằm gọn ở giữa – Bất thường khi vượt quá 1.5 lần Delta Q!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một mẫu số liệu ghép nhóm có $Q_1 = 20.5$ và $Q_3 = 35.5$. Khoảng tứ phân vị $\\Delta_Q$ bằng:",
              options: ["A. 15", "B. 56", "C. 28", "D. 7.5"],
              correct: "A",
              explanation: "$\\Delta_Q = Q_3 - Q_1 = 35.5 - 20.5 = 15$.",
              hint1: "$\\Delta_Q = Q_3 - Q_1$.",
              hint2: "$35.5 - 20.5 = 15$."
            },
            {
              question: "Cho mẫu số liệu ghép nhóm có $Q_1 = 30, Q_3 = 50$. Giá trị nào sau đây là giá trị ngoại lai (bất thường)?",
              options: ["A. $x = 85$", "B. $x = 40$", "C. $x = 70$", "D. $x = 10$"],
              correct: "A",
              explanation: "$\\Delta_Q = 20$. Mốc trên: $Q_3 + 1.5\\Delta_Q = 50 + 1.5(20) = 80$. Vì $85 > 80$ nên $85$ là giá trị ngoại lai.",
              hint1: "Mốc ngoại lai trên: $Q_3 + 1.5\\Delta_Q$.",
              hint2: "$50 + 30 = 80$, giá trị $85 > 80$."
            },
            {
              question: "Khoảng tứ phân vị của mẫu số liệu ghép nhóm phản ánh độ phân tán của bao nhiêu phần trăm số liệu ở phần giữa?",
              options: ["A. $50\\%$", "B. $75\\%$", "C. $25\\%$", "D. $100\\%$"],
              correct: "A",
              explanation: "Định nghĩa: Khoảng tứ phân vị đo độ phân tán của $50\\%$ số liệu ở phần giữa của mẫu.",
              hint1: "Từ $Q_1$ ($25\\%$) đến $Q_3$ ($75\\%$).",
              hint2: "$75\\% - 25\\% = 50\\%$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét mẫu số liệu ghép nhóm với cỡ mẫu $n = 40$, các nhóm là $[4; 6)$ có 8 HS, $[6; 8)$ có 20 HS, $[8; 10)$ có 12 HS:",
          items: [
            { key: "a", text: "Khoảng biến thiên của mẫu là $R = 10 - 4 = 6$.", correct: "true", explain: "Mút phải cuối trừ mút trái đầu: $10 - 4 = 6$." },
            { key: "b", text: "Vị trí của $Q_1$ tương ứng mốc $\\frac{n}{4} = 10$.", correct: "true", explain: "$40/4 = 10$." },
            { key: "c", text: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là $[6; 8)$.", correct: "true", explain: "Tần số tích lũy nhóm 1 là 8 (<10), nhóm 2 là 28 (>=10)." },
            { key: "d", text: "Tứ phân vị thứ nhất $Q_1 = 6.2$.", correct: "true", explain: "$Q_1 = 6 + \\frac{10-8}{20} \\times 2 = 6.2$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về đặc trưng đo độ phân tán của mẫu số liệu ghép nhóm:",
          items: [
            { key: "a", text: "Khoảng biến thiên $R$ luôn lớn hơn hoặc bằng khoảng tứ phân vị $\\Delta_Q$.", correct: "true", explain: "Vì $R$ bao quát toàn bộ mẫu, $\\Delta_Q$ chỉ đo 50% ở giữa." },
            { key: "b", text: "Khoảng tứ phân vị $\\Delta_Q$ không bao giờ nhận giá trị âm.", correct: "true", explain: "Vì $Q_3 \\ge Q_1$ nên $\\Delta_Q \\ge 0$." },
            { key: "c", text: "Khoảng tứ phân vị giúp xác định các giá trị ngoại lai.", correct: "true", explain: "Dùng tiêu chuẩn $1.5\\Delta_Q$." },
            { key: "d", text: "Khoảng biến thiên không phụ thuộc vào giá trị của các nhóm bên trong.", correct: "true", explain: "Chỉ dựa vào 2 đầu mút ngoài cùng." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Khảo sát thu nhập của nhân viên công ty A có $Q_1 = 12, Q_3 = 20$ và công ty B có $Q_1 = 14, Q_3 = 18$:",
          items: [
            { key: "a", text: "Khoảng tứ phân vị công ty A là $\\Delta_Q = 8$ triệu đồng.", correct: "true", explain: "$20 - 12 = 8$." },
            { key: "b", text: "Khoảng tứ phân vị công ty B là $\\Delta_Q = 4$ triệu đồng.", correct: "true", explain: "$18 - 14 = 4$." },
            { key: "c", text: "Thu nhập $50\\%$ nhân viên ở giữa của công ty B đồng đều hơn công ty A.", correct: "true", explain: "Độ phân tán nhỏ hơn nghĩa là đồng đều hơn." },
            { key: "d", text: "Mức thu nhập 35 triệu ở công ty A là giá trị ngoại lai.", correct: "true", explain: "$Q_3 + 1.5\\Delta_Q = 20 + 12 = 32 < 35$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Mẫu số liệu ghép nhóm có $n = 100$, nhóm chứa $Q_3$ là $[60; 80)$ có tần số 25, tần số tích lũy trước đó là 65:",
          items: [
            { key: "a", text: "Mốc vị trí $Q_3$ là $\\frac{3n}{4} = 75$.", correct: "true", explain: "$3(100)/4 = 75$." },
            { key: "b", text: "Độ dài nhóm chứa $Q_3$ là $h = 20$.", correct: "true", explain: "$80 - 60 = 20$." },
            { key: "c", text: "Tứ phân vị $Q_3 = 60 + \\frac{75-65}{25} \\times 20 = 68$.", correct: "true", explain: "Tính chuẩn ra 68." },
            { key: "d", text: "Nếu $Q_1 = 48$ thì $\\Delta_Q = 20$.", correct: "true", explain: "$68 - 48 = 20$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho các nhóm tuổi thọ bóng đèn $[1000; 1200), [1200; 1400), [1400; 1600), [1600; 1800)$:",
          items: [
            { key: "a", text: "Độ dài của mỗi nhóm bằng 200 giờ.", correct: "true", explain: "$1200 - 1000 = 200$." },
            { key: "b", text: "Khoảng biến thiên $R = 800$ giờ.", correct: "true", explain: "$1800 - 1000 = 800$." },
            { key: "c", text: "Giá trị đại diện nhóm 1 là 1100 giờ.", correct: "true", explain: "$(1000+1200)/2 = 1100$." },
            { key: "d", text: "Nếu nhóm cuối có thêm 1 bóng đèn tuổi thọ 2000 giờ thì khoảng biến thiên không đổi.", correct: "false", explain: "Nhóm cuối mở rộng lên 2000 thì $R$ tăng lên $2000 - 1000 = 1000$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về biểu đồ hộp (Boxplot) và các tứ phân vị:",
          items: [
            { key: "a", text: "Chiều dài của chiếc hộp chính bằng khoảng tứ phân vị $\\Delta_Q$.", correct: "true", explain: "Hộp trải từ $Q_1$ đến $Q_3$." },
            { key: "b", text: "Vạch kẻ bên trong hộp thể hiện số trung vị $Q_2 = M_e$.", correct: "true", explain: "Quy ước biểu đồ hộp." },
            { key: "c", text: "Khoảng cách từ mép hộp đến đầu râu vượt quá $1.5\\Delta_Q$ chứa các điểm ngoại lai.", correct: "true", explain: "Quy chuẩn vẽ boxplot." },
            { key: "d", text: "Hai râu của biểu đồ hộp luôn có độ dài bằng nhau.", correct: "false", explain: "Tuỳ thuộc vào độ lệch của phân bố dữ liệu." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 10: PHƯƠNG SAI VÀ ĐỘ LỆCH CHUẨN CỦA MẪU GHÉP NHÓM (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai10": {
      id: "toan12_bai10",
      lessonTitle: "Bài 10: Phương sai và độ lệch chuẩn",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 10:") || t.includes("phương sai") || t.includes("độ lệch chuẩn")) && !t.includes("đường thẳng");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Công thức tính phương sai và độ lệch chuẩn của mẫu ghép nhóm",
          theory: createStandardTheoryHTML(
            "Bài 10: Phương sai và độ lệch chuẩn", "Lớp 12", 1,
            "Công thức tính phương sai và độ lệch chuẩn của mẫu ghép nhóm",
            `<p>Phương sai và độ lệch chuẩn là các số đặc trưng đo mức độ phân tán quanh số trung bình của mẫu số liệu:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Giá trị đại diện ($c_i$):</strong> $c_i = \\frac{a_i + a_{i+1}}{2}$ (trung bình 2 đầu mút nhóm).</li>
              <li><strong>Số trung bình ($\\bar{x}$):</strong> $\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k m_i c_i$.</li>
              <li><strong>Phương sai ($s^2$):</strong>
                $$s^2 = \\frac{1}{n} \\sum_{i=1}^k m_i (c_i - \\bar{x})^2 = \\frac{1}{n} \\sum_{i=1}^k m_i c_i^2 - \\bar{x}^2$$
              </li>
              <li><strong>Độ lệch chuẩn ($s$):</strong> $s = \\sqrt{s^2}$. Đơn vị của độ lệch chuẩn cùng đơn vị với số liệu gốc.</li>
              <li><strong>Ý nghĩa:</strong> $s$ càng nhỏ thì số liệu càng đồng đều, ổn định quanh số trung bình.</li>
            </ul>`,
            `<li>Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$.</li>
            <li>Khi hai mẫu có số trung bình xấp xỉ nhau, mẫu nào có độ lệch chuẩn nhỏ hơn thì đồng đều hơn.</li>`,
            `<li>Quên chia cho cỡ mẫu $n$ trong công thức tính số trung bình và phương sai.</li>
            <li>Quên bình phương số trung bình $\\bar{x}^2$ trong công thức rút gọn $\\frac{1}{n} \\sum m_i c_i^2 - \\bar{x}^2$.</li>`,
            `<li><em>"Tính tâm từng nhóm – Nhân tần số ra trung bình – Trừ trung bình bình phương ra phương sai – Căn bậc hai ra độ lệch chuẩn!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một mẫu số liệu ghép nhóm có phương sai $s^2 = 0.64$. Độ lệch chuẩn $s$ bằng:",
              options: ["A. 0.8", "B. 0.64", "C. 0.32", "D. 0.08"],
              correct: "A",
              explanation: "$s = \\sqrt{s^2} = \\sqrt{0.64} = 0.8$.",
              hint1: "Lấy căn bậc hai của phương sai.",
              hint2: "$\\sqrt{0.64} = 0.8$."
            },
            {
              question: "Nhóm $[40; 60)$ có giá trị đại diện bằng:",
              options: ["A. 50", "B. 20", "C. 40", "D. 60"],
              correct: "A",
              explanation: "$c = \\frac{40 + 60}{2} = 50$.",
              hint1: "Trung bình cộng hai đầu mút của nhóm.",
              hint2: "$(40 + 60)/2 = 50$."
            },
            {
              question: "Hai xạ thủ thi bắn súng có điểm trung bình đều là 9.0 điểm. Độ lệch chuẩn điểm của xạ thủ A là $0.5$, xạ thủ B là $1.2$. Khẳng định nào đúng?",
              options: [
                "A. Xạ thủ A bắn đều tay và ổn định hơn xạ thủ B",
                "B. Xạ thủ B bắn đều tay hơn xạ thủ A",
                "C. Hai xạ thủ bắn ổn định như nhau",
                "D. Chưa đủ dữ liệu để kết luận"
              ],
              correct: "A",
              explanation: "Độ lệch chuẩn càng nhỏ thì mức độ phân tán càng ít, tức là kết quả càng ổn định, đều tay.",
              hint1: "Độ lệch chuẩn $s_A = 0.5 < s_B = 1.2$.",
              hint2: "Độ lệch chuẩn nhỏ hơn biểu thị sự đồng đều, ổn định hơn."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét các khẳng định về phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm:",
          items: [
            { key: "a", text: "Phương sai $s^2$ luôn là một số không âm ($s^2 \\ge 0$).", correct: "true", explain: "Tổng các bình phương sai lệch luôn $\\ge 0$." },
            { key: "b", text: "Độ lệch chuẩn $s$ có cùng đơn vị đo với dấu hiệu điều tra.", correct: "true", explain: "Căn bậc hai đưa về đơn vị ban đầu." },
            { key: "c", text: "Nếu tất cả các quan sát đều bằng nhau thì phương sai bằng 0.", correct: "true", explain: "Không có sự sai lệch so với số trung bình." },
            { key: "d", text: "Phương sai có thể nhận giá trị âm nếu số trung bình âm.", correct: "false", explain: "Phương sai luôn $\\ge 0$ bất kể số trung bình âm hay dương." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho bảng số liệu ghép nhóm gồm 3 nhóm $[0; 2)$ có 2 người, $[2; 4)$ có 6 người, $[4; 6)$ có 2 người ($n = 10$):",
          items: [
            { key: "a", text: "Giá trị đại diện các nhóm lần lượt là $1, 3, 5$.", correct: "true", explain: "Trung bình cộng các đầu mút." },
            { key: "b", text: "Số trung bình của mẫu là $\\bar{x} = 3$.", correct: "true", explain: "$(2 \\times 1 + 6 \\times 3 + 2 \\times 5)/10 = 30/10 = 3$." },
            { key: "c", text: "Phương sai của mẫu là $s^2 = 1.6$.", correct: "true", explain: "$[2(1-3)^2 + 6(3-3)^2 + 2(5-3)^2]/10 = [8 + 0 + 8]/10 = 1.6$." },
            { key: "d", text: "Độ lệch chuẩn xấp xỉ $1.265$.", correct: "true", explain: "$\\sqrt{1.6} \\approx 1.2649$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: So sánh chất lượng sản phẩm của hai dây chuyền đóng gói với cùng khối lượng trung bình 500g: Dây chuyền I có $s_1 = 2\\text{g}$, Dây chuyền II có $s_2 = 5\\text{g}$:",
          items: [
            { key: "a", text: "Phương sai của Dây chuyền I là $4\\text{g}^2$.", correct: "true", explain: "$2^2 = 4$." },
            { key: "b", text: "Phương sai của Dây chuyền II là $25\\text{g}^2$.", correct: "true", explain: "$5^2 = 25$." },
            { key: "c", text: "Dây chuyền I hoạt động chính xác và đồng đều hơn Dây chuyền II.", correct: "true", explain: "Độ lệch chuẩn nhỏ hơn nhiều." },
            { key: "d", text: "Dây chuyền II đóng gói được nhiều gói hơn Dây chuyền I.", correct: "false", explain: "Độ lệch chuẩn đo độ đồng đều, không đo sản lượng." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Khi tính phương sai ghép nhóm bằng công thức rút gọn:",
          items: [
            { key: "a", text: "Công thức rút gọn là $s^2 = \\frac{1}{n} \\sum m_i c_i^2 - \\bar{x}^2$.", correct: "true", explain: "Công thức chuẩn SGK." },
            { key: "b", text: "Đại lượng $\\sum m_i c_i^2$ luôn lớn hơn hoặc bằng $n\\bar{x}^2$.", correct: "true", explain: "Để đảm bảo $s^2 \\ge 0$." },
            { key: "c", text: "Máy tính cầm tay Casio tính trực tiếp được $\\bar{x}$ và $s$.", correct: "true", explain: "Chức năng 1-Variable Statistics." },
            { key: "d", text: "Nếu cộng tất cả các giá trị của mẫu với một số $c > 0$ thì phương sai tăng lên $c^2$.", correct: "false", explain: "Cộng hằng số không làm đổi độ phân tán nên phương sai giữ nguyên." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho mẫu số liệu ghép nhóm có $n = 50$, tổng $\\sum m_i c_i = 350$ và $\\sum m_i c_i^2 = 2650$:",
          items: [
            { key: "a", text: "Số trung bình $\\bar{x} = 7$.", correct: "true", explain: "$350 / 50 = 7$." },
            { key: "b", text: "$\\frac{1}{n} \\sum m_i c_i^2 = 53$.", correct: "true", explain: "$2650 / 50 = 53$." },
            { key: "c", text: "Phương sai $s^2 = 53 - 7^2 = 4$.", correct: "true", explain: "$53 - 49 = 4$." },
            { key: "d", text: "Độ lệch chuẩn $s = 2$.", correct: "true", explain: "$\\sqrt{4} = 2$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ý nghĩa thực tiễn của độ lệch chuẩn trong tài chính đầu tư:",
          items: [
            { key: "a", text: "Độ lệch chuẩn của lợi nhuận cổ phiếu thường được coi là thước đo mức độ rủi ro.", correct: "true", explain: "Độ biến động càng cao rủi ro càng lớn." },
            { key: "b", text: "Cổ phiếu có độ lệch chuẩn nhỏ có giá biến động ổn định hơn.", correct: "true", explain: "Phân tán ít." },
            { key: "c", text: "Nhà đầu tư mạo hiểm thường chuộng tài sản có độ lệch chuẩn cao.", correct: "true", explain: "Biến động mạnh để lướt sóng." },
            { key: "d", text: "Độ lệch chuẩn bằng 0 nghĩa là cổ phiếu mang lại lợi nhuận cao nhất.", correct: "false", explain: "Độ lệch chuẩn bằng 0 là lợi nhuận cố định không đổi (rủi ro bằng 0, ví dụ gửi tiết kiệm), không có nghĩa lợi nhuận cao nhất." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE12_PART1_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  function createStandardTheoryHTML(lessonTitle, grade, partNum, sectionTitle, sgkHtml, noteHtml, mistakeHtml, tipHtml) {
    if (typeof window.createStandardTheoryHTML === 'function') {
      return window.createStandardTheoryHTML(lessonTitle, grade, partNum, sectionTitle, sgkHtml, noteHtml, mistakeHtml, tipHtml);
    }
    return `<div class="space-y-4 sm:space-y-5 font-serif theory-expanded-card">
  <div class="p-3.5 sm:p-4 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-2xl flex items-center justify-between text-indigo-950">
    <p class="leading-relaxed text-[13.5pt] sm:text-[14pt]">Chào em <strong>{student_name}</strong>! Cùng học <strong>${lessonTitle}</strong> (${grade} - SGK KNTT). Mục ${partNum}: ${sectionTitle} 😊</p>
  </div>
  <div class="p-4 sm:p-6 bg-gradient-to-br from-indigo-50/90 via-white to-blue-50/70 border-2 border-indigo-300 rounded-2xl space-y-3 shadow-sm">${sgkHtml}</div>
  <ul class="text-[13.5pt] sm:text-[14pt] text-sky-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">${noteHtml}</ul>
  <ul class="text-[13.5pt] sm:text-[14pt] text-rose-950 space-y-2.5 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">${mistakeHtml}</ul>
  <ul class="text-[13.5pt] sm:text-[14pt] text-amber-950 space-y-2 ml-4 sm:ml-5 list-disc leading-relaxed sm:leading-loose">${tipHtml}</ul>
</div>`;
  }

  const GRADE12_PART2_LESSONS = {
    // =========================================================================
    // BÀI 14: PHƯƠNG TRÌNH MẶT PHẲNG (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai14": {
      id: "toan12_bai14",
      lessonTitle: "Bài 14: Phương trình mặt phẳng",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 14:") || t.includes("phương trình mặt phẳng")) && !t.includes("đường thẳng");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Vectơ pháp tuyến và Phương trình tổng quát của mặt phẳng",
          theory: createStandardTheoryHTML(
            "Bài 14: Phương trình mặt phẳng", "Lớp 12", 1,
            "Vectơ pháp tuyến và Phương trình tổng quát của mặt phẳng",
            `<p>Kiến thức phương trình tổng quát của mặt phẳng chuẩn SGK Toán 12 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Vectơ pháp tuyến (VPT):</strong> Vectơ $\\vec{n} \\neq \\vec{0}$ có giá vuông góc với mặt phẳng $(\\alpha)$ được gọi là một vectơ pháp tuyến của $(\\alpha)$. Nếu $\\vec{n}$ là VTPT thì $k\\vec{n}$ ($k \\neq 0$) cũng là VTPT.</li>
              <li><strong>Phương trình mặt phẳng đi qua điểm $M_0(x_0; y_0; z_0)$ có VTPT $\\vec{n} = (A; B; C)$:</strong>
                $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\Leftrightarrow Ax + By + Cz + D = 0$$
                với $D = -(Ax_0 + By_0 + Cz_0)$ và $A^2 + B^2 + C^2 > 0$.
              </li>
              <li><strong>Phương trình theo đoạn chắn:</strong> Mặt phẳng cắt ba trục toạ độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ ($abc \\neq 0$) có phương trình:
                $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$
              </li>
              <li><strong>Khoảng cách từ điểm $M(x_M; y_M; z_M)$ đến mặt phẳng $(\\alpha): Ax + By + Cz + D = 0$:</strong>
                $$d(M, (\\alpha)) = \\frac{|Ax_M + By_M + Cz_M + D|}{\\sqrt{A^2 + B^2 + C^2}}$$
              </li>
            </ul>`,
            `<li>Muốn viết phương trình mặt phẳng cần 2 yếu tố: 1 ĐIỂM đi qua và 1 VECTƠ PHÁP TUYẾN.</li>
            <li>Nếu biết hai vectơ không cùng phương $\\vec{a}, \\vec{b}$ có giá song song hoặc nằm trên $(\\alpha)$ thì VTPT $\\vec{n} = [\\vec{a}, \\vec{b}]$ (tích có hướng).</li>`,
            `<li>Nhầm giữa toạ độ điểm đi qua và hệ số VTPT khi viết phương trình.</li>
            <li>Quên dấu trị tuyệt đối ở tử số trong công thức tính khoảng cách.</li>`,
            `<li><em>"Mặt phẳng cần Pháp Tuyến – Điểm nằm trong ngoặc trừ – Nhân A, B, C – Khoảng cách trị tuyệt đối trên căn bình phương!"</em></li>`
          ),
          mcqs: [
            {
              question: "Trong không gian $Oxyz$, mặt phẳng $(P): 2x - 3y + z - 5 = 0$ có một vectơ pháp tuyến là:",
              options: ["A. $\\vec{n} = (2; -3; 1)$", "B. $\\vec{n} = (2; 3; 1)$", "C. $\\vec{n} = (2; -3; -5)$", "D. $\\vec{n} = (-3; 1; -5)$"],
              correct: "A",
              explanation: "Hệ số trước $x, y, z$ chính là toạ độ vectơ pháp tuyến: $\\vec{n} = (2; -3; 1)$.",
              hint1: "Lấy các hệ số đứng trước $x, y, z$.",
              hint2: "$A = 2, B = -3, C = 1$."
            },
            {
              question: "Phương trình mặt phẳng đi qua điểm $M(1; -2; 3)$ và có VTPT $\\vec{n} = (3; 1; -2)$ là:",
              options: [
                "A. $3x + y - 2z + 5 = 0$",
                "B. $3x + y - 2z - 5 = 0$",
                "C. $x - 2y + 3z - 5 = 0$",
                "D. $3x + y - 2z + 7 = 0$"
              ],
              correct: "A",
              explanation: "$3(x - 1) + 1(y + 2) - 2(z - 3) = 0 \\Leftrightarrow 3x - 3 + y + 2 - 2z + 6 = 0 \\Leftrightarrow 3x + y - 2z + 5 = 0$.",
              hint1: "Thay vào $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$.",
              hint2: "$3(x-1) + 1(y+2) - 2(z-3) = 3x + y - 2z + 5 = 0$."
            },
            {
              question: "Khoảng cách từ điểm $O(0; 0; 0)$ đến mặt phẳng $(\\alpha): x + 2y - 2z + 6 = 0$ bằng:",
              options: ["A. 2", "B. 6", "C. 3", "D. 1"],
              correct: "A",
              explanation: "$d(O, (\\alpha)) = \\frac{|0 + 0 - 0 + 6|}{\\sqrt{1^2 + 2^2 + (-2)^2}} = \\frac{6}{\\sqrt{9}} = \\frac{6}{3} = 2$.",
              hint1: "Thay $x=0, y=0, z=0$ vào công thức khoảng cách.",
              hint2: "$\\frac{|6|}{\\sqrt{1+4+4}} = \\frac{6}{3} = 2$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Trong không gian $Oxyz$, cho ba điểm $A(2; 0; 0), B(0; -3; 0), C(0; 0; 4)$:",
          items: [
            { key: "a", text: "Mặt phẳng $(ABC)$ có phương trình đoạn chắn là $\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1$.", correct: "true", explain: "Công thức phương trình theo đoạn chắn chuẩn." },
            { key: "b", text: "Quy đồng mẫu số, phương trình mặt phẳng $(ABC)$ là $6x - 4y + 3z - 12 = 0$.", correct: "true", explain: "Mẫu chung là 12: $6x - 4y + 3z = 12$." },
            { key: "c", text: "Một vectơ pháp tuyến của $(ABC)$ là $\\vec{n} = (6; -4; 3)$.", correct: "true", explain: "Hệ số trước $x, y, z$." },
            { key: "d", text: "Mặt phẳng $(ABC)$ đi qua gốc toạ độ $O(0; 0; 0)$.", correct: "false", explain: "Thay toạ độ $O$ vào: $-12 \\neq 0$, không đi qua $O$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai mặt phẳng $(P): 2x - y + 2z - 1 = 0$ và $(Q): 2x - y + 2z + 5 = 0$:",
          items: [
            { key: "a", text: "Hai mặt phẳng $(P)$ và $(Q)$ có cùng vectơ pháp tuyến $\\vec{n} = (2; -1; 2)$.", correct: "true", explain: "Cùng hệ số trước $x, y, z$." },
            { key: "b", text: "Hai mặt phẳng $(P)$ và $(Q)$ song song với nhau.", correct: "true", explain: "Cùng VTPT và hệ số tự do khác nhau ($-1 \\neq 5$)." },
            { key: "c", text: "Điểm $M(0; -1; 0)$ thuộc mặt phẳng $(P)$.", correct: "true", explain: "$2(0) - (-1) + 0 - 1 = 0$." },
            { key: "d", text: "Khoảng cách giữa hai mặt phẳng $(P)$ và $(Q)$ bằng 2.", correct: "true", explain: "$d = \\frac{|5 - (-1)|}{\\sqrt{4+1+4}} = \\frac{6}{3} = 2$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Mặt phẳng trung trực của đoạn thẳng $AB$ với $A(1; 2; -1)$ và $B(3; 0; 3)$:",
          items: [
            { key: "a", text: "Vectơ $\\vec{AB} = (2; -2; 4) = 2(1; -1; 2)$ là một VTPT của mặt phẳng trung trực.", correct: "true", explain: "Mặt phẳng trung trực vuông góc với $AB$." },
            { key: "b", text: "Mặt phẳng trung trực đi qua trung điểm $I(2; 1; 1)$ của $AB$.", correct: "true", explain: "$I = ((1+3)/2; (2+0)/2; (-1+3)/2) = (2; 1; 1)$." },
            { key: "c", text: "Phương trình mặt phẳng trung trực là $x - y + 2z - 3 = 0$.", correct: "true", explain: "$1(x-2) - 1(y-1) + 2(z-1) = x - y + 2z - 3 = 0$." },
            { key: "d", text: "Điểm $M(1; 1; 1)$ thuộc mặt phẳng trung trực.", correct: "false", explain: "Thay $M$ vào: $1 - 1 + 2 - 3 = -1 \\neq 0$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét các phương trình mặt phẳng toạ độ:",
          items: [
            { key: "a", text: "Phương trình mặt phẳng $(Oxy)$ là $z = 0$.", correct: "true", explain: "Mọi điểm trên $(Oxy)$ đều có $z = 0$." },
            { key: "b", text: "Phương trình mặt phẳng $(Oyz)$ là $x = 0$.", correct: "true", explain: "Mọi điểm trên $(Oyz)$ đều có $x = 0$." },
            { key: "c", text: "Mặt phẳng song song với $(Oxy)$ có dạng $z = c$ ($c \\neq 0$).", correct: "true", explain: "Cùng VTPT $\\vec{k} = (0; 0; 1)$." },
            { key: "d", text: "Mặt phẳng chứa trục $Ox$ luôn có dạng $y + z = 0$.", correct: "false", explain: "Mặt phẳng chứa $Ox$ có dạng tổng quát $By + Cz = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho mặt phẳng $(P): x + 2y - 2z + 1 = 0$ và điểm $A(1; 2; 3)$:",
          items: [
            { key: "a", text: "Khoảng cách từ $A$ đến $(P)$ là $d = \\frac{|1 + 4 - 6 + 1|}{3} = 0$.", correct: "true", explain: "$|1+4-6+1| = 0$." },
            { key: "b", text: "Điểm $A$ thuộc mặt phẳng $(P)$.", correct: "true", explain: "Vì khoảng cách bằng 0." },
            { key: "c", text: "Mặt phẳng đi qua $A$ song song với $(P)$ chính là $(P)$.", correct: "true", explain: "Vì $A \\in (P)$ nên trùng." },
            { key: "d", text: "Vectơ $\\vec{u} = (2; -1; 0)$ có giá song song hoặc nằm trong mặt phẳng $(P)$.", correct: "true", explain: "Vì $\\vec{n} \\cdot \\vec{u} = 1(2) + 2(-1) - 2(0) = 0$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về vị trí tương đối giữa hai mặt phẳng $(\\alpha): A_1 x + B_1 y + C_1 z + D_1 = 0$ và $(\\beta): A_2 x + B_2 y + C_2 z + D_2 = 0$:",
          items: [
            { key: "a", text: "Nếu $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} = \\frac{D_1}{D_2}$ thì hai mặt phẳng trùng nhau.", correct: "true", explain: "Đồng nhất tỉ lệ." },
            { key: "b", text: "Nếu $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\neq \\frac{D_1}{D_2}$ thì hai mặt phẳng song song.", correct: "true", explain: "Cùng pháp tuyến, khác hằng số tự do." },
            { key: "c", text: "Hai mặt phẳng vuông góc khi và chỉ khi $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.", correct: "true", explain: "Hai VTPT vuông góc với nhau." },
            { key: "d", text: "Hai mặt phẳng phân biệt luôn luôn cắt nhau theo một giao tuyến.", correct: "false", explain: "Có thể song song với nhau." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 15: PHƯƠNG TRÌNH ĐƯỜNG THẲNG TRONG KHÔNG GIAN (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai15": {
      id: "toan12_bai15",
      lessonTitle: "Bài 15: Phương trình đường thẳng trong không gian",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 15:") || t.includes("phương trình đường thẳng trong không gian") || t.includes("duong thang trong khong gian")) && !t.includes("góc");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Vectơ chỉ phương, Phương trình tham số và Phương trình chính tắc",
          theory: createStandardTheoryHTML(
            "Bài 15: Phương trình đường thẳng trong không gian", "Lớp 12", 1,
            "Vectơ chỉ phương, Phương trình tham số và Phương trình chính tắc",
            `<p>Đường thẳng trong không gian $Oxyz$ được xác định bởi một điểm và một vectơ chỉ phương (VTCP):</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Vectơ chỉ phương (VTCP):</strong> Vectơ $\\vec{u} \\neq \\vec{0}$ có giá song song hoặc trùng với đường thẳng $\\Delta$ được gọi là VTCP của $\\Delta$.</li>
              <li><strong>Phương trình tham số của đường thẳng đi qua $M_0(x_0; y_0; z_0)$ có VTCP $\\vec{u} = (a; b; c)$:</strong>
                $$\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} \\quad (t \\in \\mathbb{R})$$
              </li>
              <li><strong>Phương trình chính tắc (khi $abc \\neq 0$):</strong>
                $$\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$$
              </li>
              <li>Đường thẳng đi qua hai điểm phân biệt $A, B$ có một VTCP là $\\vec{AB}$.</li>
            </ul>`,
            `<li>Muốn viết phương trình đường thẳng cần: 1 ĐIỂM đi qua và 1 VECTƠ CHỈ PHƯƠNG.</li>
            <li>Nếu đường thẳng vuông góc với mặt phẳng $(\\alpha)$ thì VTCP của đường thẳng chính là VTPT của mặt phẳng: $\\vec{u} = \\vec{n}_\\alpha$.</li>`,
            `<li>Nhầm giữa toạ độ điểm đi qua và hệ số tham số $t$ của VTCP.</li>
            <li>Viết phương trình chính tắc khi có một thành phần của VTCP bằng 0 (khi đó chỉ viết được dạng tham số).</li>`,
            `<li><em>"Đường thẳng cần Chỉ Phương – Toạ độ điểm đứng trước – Tham số $t$ nhân Chỉ Phương!"</em></li>`
          ),
          mcqs: [
            {
              question: "Đường thẳng $d: \\begin{cases} x = 1 - 2t \\\\ y = 3 + t \\\\ z = -4t \\end{cases}$ có một vectơ chỉ phương là:",
              options: ["A. $\\vec{u} = (-2; 1; -4)$", "B. $\\vec{u} = (1; 3; 0)$", "C. $\\vec{u} = (2; 1; 4)$", "D. $\\vec{u} = (-2; 3; -4)$"],
              correct: "A",
              explanation: "Hệ số của tham số $t$ cho toạ độ VTCP: $a = -2, b = 1, c = -4$, tức $\\vec{u} = (-2; 1; -4)$.",
              hint1: "Lấy các hệ số đứng cạnh tham số $t$.",
              hint2: "$x$ có $-2$, $y$ có $1$, $z$ có $-4$."
            },
            {
              question: "Phương trình chính tắc của đường thẳng đi qua $M(2; -1; 4)$ có VTCP $\\vec{u} = (3; 5; -2)$ là:",
              options: [
                "A. $\\frac{x - 2}{3} = \\frac{y + 1}{5} = \\frac{z - 4}{-2}$",
                "B. $\\frac{x + 2}{3} = \\frac{y - 1}{5} = \\frac{z + 4}{-2}$",
                "C. $\\frac{x - 3}{2} = \\frac{y - 5}{-1} = \\frac{z + 2}{4}$",
                "D. $\\frac{x - 2}{3} = \\frac{y - 1}{5} = \\frac{z - 4}{-2}$"
              ],
              correct: "A",
              explanation: "Thay vào công thức $\\frac{x-x_0}{a} = \\frac{y-y_0}{b} = \\frac{z-z_0}{c}$: $\\frac{x-2}{3} = \\frac{y+1}{5} = \\frac{z-4}{-2}$.",
              hint1: "Tử số là $x - x_0, y - y_0, z - z_0$, mẫu số là $a, b, c$.",
              hint2: "$y - (-1) = y + 1$."
            },
            {
              question: "Điểm nào sau đây thuộc đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 2}{-1} = \\frac{z - 3}{4}$?",
              options: ["A. $M(1; -2; 3)$", "B. $N(2; -1; 4)$", "C. $P(-1; 2; -3)$", "D. $Q(3; -3; 4)$"],
              correct: "A",
              explanation: "Thay $x = 1, y = -2, z = 3$ vào được $0/2 = 0/(-1) = 0/4 = 0$ (thỏa mãn).",
              hint1: "Nhìn vào tử số của phương trình chính tắc.",
              hint2: "Điểm đi qua đọc trực tiếp từ tử số là $(1; -2; 3)$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho đường thẳng $d: \\begin{cases} x = 2 + t \\\\ y = -1 + 2t \\\\ z = 3 - t \\end{cases}$:",
          items: [
            { key: "a", text: "Đường thẳng $d$ đi qua điểm $A(2; -1; 3)$.", correct: "true", explain: "Ứng với $t = 0$." },
            { key: "b", text: "Một vectơ chỉ phương của $d$ là $\\vec{u} = (1; 2; -1)$.", correct: "true", explain: "Hệ số của $t$." },
            { key: "c", text: "Điểm $B(3; 1; 2)$ thuộc đường thẳng $d$.", correct: "true", explain: "Ứng với $t = 1$." },
            { key: "d", text: "Đường thẳng $d$ có phương trình chính tắc là $\\frac{x+2}{1} = \\frac{y-1}{2} = \\frac{z+3}{-1}$.", correct: "false", explain: "Tử số phải là $x-2, y+1, z-3$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai điểm $A(1; 0; -2)$ và $B(3; 2; 0)$:",
          items: [
            { key: "a", text: "Vectơ $\\vec{AB} = (2; 2; 2) = 2(1; 1; 1)$.", correct: "true", explain: "$(3-1; 2-0; 0-(-2)) = (2; 2; 2)$." },
            { key: "b", text: "Vectơ $\\vec{u} = (1; 1; 1)$ là một vectơ chỉ phương của đường thẳng $AB$.", correct: "true", explain: "Cùng phương với $\\vec{AB}$." },
            { key: "c", text: "Phương trình tham số của đường thẳng $AB$ là $\\begin{cases} x = 1 + t \\\\ y = t \\\\ z = -2 + t \\end{cases}$.", correct: "true", explain: "Đi qua $A(1; 0; -2)$ có VTCP $(1; 1; 1)$." },
            { key: "d", text: "Đường thẳng $AB$ đi qua gốc toạ độ $O(0; 0; 0)$.", correct: "false", explain: "Thay $O$ vào: $1+t=0 \\Rightarrow t=-1$, nhưng $y=0 \\Rightarrow t=0$ mâu thuẫn." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{1} = \\frac{z - 2}{-3}$ và mặt phẳng $(P): 2x + y - 3z + 5 = 0$:",
          items: [
            { key: "a", text: "VTCP của $d$ là $\\vec{u} = (2; 1; -3)$.", correct: "true", explain: "Mẫu số của $d$." },
            { key: "b", text: "VTPT của $(P)$ là $\\vec{n} = (2; 1; -3)$.", correct: "true", explain: "Hệ số $x, y, z$ của $(P)$." },
            { key: "c", text: "Vectơ chỉ phương $\\vec{u}$ cùng phương với vectơ pháp tuyến $\\vec{n}$.", correct: "true", explain: "Hai vectơ trùng nhau." },
            { key: "d", text: "Đường thẳng $d$ song song với mặt phẳng $(P)$.", correct: "false", explain: "Khi $\\vec{u}$ cùng phương $\\vec{n}$ thì đường thẳng $d$ VUÔNG GÓC với $(P)$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các trục toạ độ trong không gian $Oxyz$:",
          items: [
            { key: "a", text: "Trục $Ox$ có phương trình tham số là $\\begin{cases} x = t \\\\ y = 0 \\\\ z = 0 \\end{cases}$.", correct: "true", explain: "Đi qua $O$ có VTCP $\\vec{i} = (1; 0; 0)$." },
            { key: "b", text: "Trục $Oy$ có phương trình tham số là $\\begin{cases} x = 0 \\\\ y = t \\\\ z = 0 \\end{cases}$.", correct: "true", explain: "Đi qua $O$ có VTCP $\\vec{j} = (0; 1; 0)$." },
            { key: "c", text: "Trục $Oz$ có phương trình chính tắc là $\\frac{x}{0} = \\frac{y}{0} = \\frac{z}{1}$.", correct: "false", explain: "Có mẫu số bằng 0 không thể viết dạng chính tắc." },
            { key: "d", text: "Trục $Oz$ vuông góc với mặt phẳng toạ độ $(Oxy)$.", correct: "true", explain: "Định nghĩa hệ toạ độ." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hai đường thẳng $d_1: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3t \\end{cases}$ và $d_2: \\begin{cases} x = 2t' \\\\ y = 1 - 2t' \\\\ z = 6t' \\end{cases}$:",
          items: [
            { key: "a", text: "VTCP của $d_1$ là $\\vec{u}_1 = (1; -1; 3)$.", correct: "true", explain: "Hệ số của $t$." },
            { key: "b", text: "VTCP của $d_2$ là $\\vec{u}_2 = (2; -2; 6) = 2\\vec{u}_1$.", correct: "true", explain: "Hai VTCP cùng phương." },
            { key: "c", text: "Điểm $A(1; 2; 0) \\in d_1$ không thuộc $d_2$.", correct: "true", explain: "Thay vào $d_2$: $2t'=1 \\Rightarrow t'=0.5$, $1-2(0.5)=0 \\neq 2$." },
            { key: "d", text: "Hai đường thẳng $d_1$ và $d_2$ song song với nhau.", correct: "true", explain: "Cùng phương và không có điểm chung." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về vị trí tương đối giữa hai đường thẳng trong không gian:",
          items: [
            { key: "a", text: "Hai đường thẳng có thể song song, trùng nhau, cắt nhau hoặc chéo nhau.", correct: "true", explain: "Bốn vị trí tương đối chuẩn." },
            { key: "b", text: "Hai đường thẳng chéo nhau khi chúng không cùng nằm trong bất kỳ mặt phẳng nào.", correct: "true", explain: "Định nghĩa đường thẳng chéo nhau." },
            { key: "c", text: "Nếu hai đường thẳng không có điểm chung thì chúng chắc chắn song song.", correct: "false", explain: "Chúng có thể chéo nhau." },
            { key: "d", text: "Hai đường thẳng cắt nhau thì tích vô hướng của hai VTCP phải bằng 0.", correct: "false", explain: "Chỉ khi vuông góc mới có tích vô hướng bằng 0." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 16: CÔNG THỨC TÍNH GÓC TRONG KHÔNG GIAN (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai16": {
      id: "toan12_bai16",
      lessonTitle: "Bài 16: Công thức tính góc trong không gian",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 16:") || t.includes("công thức tính góc") || t.includes("tính góc trong không gian")) && !t.includes("mặt cầu");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Góc giữa hai đường thẳng, giữa đường thẳng và mặt phẳng, giữa hai mặt phẳng",
          theory: createStandardTheoryHTML(
            "Bài 16: Công thức tính góc trong không gian", "Lớp 12", 1,
            "Góc giữa hai đường thẳng, giữa đường thẳng và mặt phẳng, giữa hai mặt phẳng",
            `<p>Các công thức toạ độ tính góc trong không gian $Oxyz$ (góc luôn thoả mãn $0^\\circ \\le \\varphi \\le 90^\\circ$, do đó $\\cos \\varphi \\ge 0$ và $\\sin \\varphi \\ge 0$):</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Góc giữa hai đường thẳng (hai VTCP $\\vec{u}_1, \\vec{u}_2$):</strong>
                $$\\cos(d_1, d_2) = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| \\cdot |\\vec{u}_2|}$$
              </li>
              <li><strong>2. Góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ (VTCP $\\vec{u}$ và VTPT $\\vec{n}$):</strong>
                $$\\sin(d, (\\alpha)) = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}$$
              </li>
              <li><strong>3. Góc giữa hai mặt phẳng (hai VTPT $\\vec{n}_1, \\vec{n}_2$):</strong>
                $$\\cos((\\alpha), (\\beta)) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| \\cdot |\\vec{n}_2|}$$
              </li>
            </ul>`,
            `<li>Góc giữa các đối tượng hình học luôn là góc NHỌN hoặc VUÔNG ($0^\\circ \\le \\varphi \\le 90^\\circ$), nên trên tử số BẮT BUỘC có dấu giá trị tuyệt đối.</li>
            <li>Góc giữa ĐƯỜNG THẲNG và MẶT PHẲNG dùng hàm $\\sin$, còn hai đối tượng cùng loại (đường - đường, mặt - mặt) dùng hàm $\\cos$.</li>`,
            `<li>Dùng nhầm $\\cos$ cho góc giữa đường thẳng và mặt phẳng (phải là $\\sin$).</li>
            <li>Quên giá trị tuyệt đối ở tử số dẫn đến tính ra giá trị âm cho $\\cos$ hoặc $\\sin$.</li>`,
            `<li><em>"Cùng loại dùng Cốt (Đường-Đường, Mặt-Mặt) – Khác loại dùng Sin (Đường-Mặt) – Nhớ kẹp trị tuyệt đối trên tử số!"</em></li>`
          ),
          mcqs: [
            {
              question: "Góc giữa hai đường thẳng có hai vectơ chỉ phương $\\vec{u}_1 = (1; 0; 1)$ và $\\vec{u}_2 = (1; 1; 0)$ bằng:",
              options: ["A. $60^\\circ$", "B. $30^\\circ$", "C. $45^\\circ$", "D. $90^\\circ$"],
              correct: "A",
              explanation: "$\\cos\\varphi = \\frac{|1(1) + 0(1) + 1(0)|}{\\sqrt{1+0+1} \\cdot \\sqrt{1+1+0}} = \\frac{1}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{1}{2} \\Rightarrow \\varphi = 60^\\circ$.",
              hint1: "Áp dụng $\\cos\\varphi = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| |\\vec{u}_2|}$.",
              hint2: "$\\frac{1}{2} \\implies 60^\\circ$."
            },
            {
              question: "Cho đường thẳng $d$ có VTCP $\\vec{u} = (1; 2; -2)$ và mặt phẳng $(P)$ có VTPT $\\vec{n} = (2; -1; 2)$. Sin của góc giữa $d$ và $(P)$ bằng:",
              options: ["A. $\\frac{4}{9}$", "B. $\\frac{2}{9}$", "C. $\\frac{1}{3}$", "D. $\\frac{2}{3}$"],
              correct: "A",
              explanation: "$\\sin\\varphi = \\frac{|1(2) + 2(-1) + (-2)(2)|}{\\sqrt{1+4+4} \\cdot \\sqrt{4+1+4}} = \\frac{|2 - 2 - 4|}{3 \\times 3} = \\frac{4}{9}$.",
              hint1: "Góc giữa đường thẳng và mặt phẳng tính bằng $\\sin\\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}$.",
              hint2: "Tử số là $|-4| = 4$, mẫu số là $3 \\times 3 = 9$."
            },
            {
              question: "Hai mặt phẳng $(P): x - y + z - 1 = 0$ và $(Q): 2x + y - z + 3 = 0$ vuông góc với nhau khi nào?",
              options: [
                "A. Chúng vuông góc vì tích vô hướng hai VTPT bằng 0",
                "B. Chúng không vuông góc vì tích vô hướng bằng 2",
                "C. Chúng song song",
                "D. Chúng trùng nhau"
              ],
              correct: "A",
              explanation: "$\\vec{n}_1 = (1; -1; 1), \\vec{n}_2 = (2; 1; -1)$. Ta có $\\vec{n}_1 \\cdot \\vec{n}_2 = 1(2) + (-1)(1) + 1(-1) = 2 - 1 - 1 = 0$. Tích vô hướng bằng 0 nên hai mặt phẳng vuông góc.",
              hint1: "Kiểm tra tích vô hướng $\\vec{n}_1 \\cdot \\vec{n}_2$.",
              hint2: "$2 - 1 - 1 = 0$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hai đường thẳng $d_1: \\frac{x-1}{1} = \\frac{y}{2} = \\frac{z+1}{-1}$ và $d_2: \\frac{x}{2} = \\frac{y-3}{-1} = \\frac{z}{0}$:",
          items: [
            { key: "a", text: "VTCP của $d_1$ là $\\vec{u}_1 = (1; 2; -1)$.", correct: "true", explain: "Mẫu số của $d_1$." },
            { key: "b", text: "VTCP của $d_2$ là $\\vec{u}_2 = (2; -1; 0)$.", correct: "true", explain: "Mẫu số của $d_2$." },
            { key: "c", text: "Tích vô hướng $\\vec{u}_1 \\cdot \\vec{u}_2 = 1(2) + 2(-1) + (-1)(0) = 0$.", correct: "true", explain: "$2 - 2 = 0$." },
            { key: "d", text: "Góc giữa hai đường thẳng $d_1$ và $d_2$ bằng $90^\\circ$.", correct: "true", explain: "Tích vô hướng bằng 0 nên vuông góc." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về góc giữa đường thẳng và mặt phẳng:",
          items: [
            { key: "a", text: "Góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng và hình chiếu vuông góc của nó lên mặt phẳng.", correct: "true", explain: "Định nghĩa hình học SGK." },
            { key: "b", text: "Góc giữa đường thẳng và mặt phẳng luôn nằm trong đoạn $[0^\\circ; 90^\\circ]$.", correct: "true", explain: "Quy chuẩn độ lớn góc." },
            { key: "c", text: "Nếu đường thẳng song song với mặt phẳng thì góc giữa chúng bằng $0^\\circ$.", correct: "true", explain: "Đúng, hình chiếu song song đường thẳng." },
            { key: "d", text: "Nếu đường thẳng vuông góc với mặt phẳng thì $\\sin\\varphi = 0$.", correct: "false", explain: "Vuông góc thì $\\varphi = 90^\\circ \\Rightarrow \\sin 90^\\circ = 1$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hai mặt phẳng $(P): x + y = 0$ và $(Q): y + z = 0$:",
          items: [
            { key: "a", text: "VTPT của $(P)$ là $\\vec{n}_1 = (1; 1; 0)$.", correct: "true", explain: "Khuyết $z$ nên $z=0$." },
            { key: "b", text: "VTPT của $(Q)$ là $\\vec{n}_2 = (0; 1; 1)$.", correct: "true", explain: "Khuyết $x$ nên $x=0$." },
            { key: "c", text: "Cos góc giữa $(P)$ và $(Q)$ là $\\cos\\varphi = \\frac{|1(0) + 1(1) + 0(1)|}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2}$.", correct: "true", explain: "$\\frac{1}{2}$ chuẩn." },
            { key: "d", text: "Góc giữa hai mặt phẳng $(P)$ và $(Q)$ bằng $60^\\circ$.", correct: "true", explain: "$\\arccos(1/2) = 60^\\circ$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét góc giữa trục toạ độ $Oz$ và mặt phẳng $(P): x + y + \\sqrt{2}z - 1 = 0$:",
          items: [
            { key: "a", text: "VTCP của trục $Oz$ là $\\vec{k} = (0; 0; 1)$.", correct: "true", explain: "Vectơ đơn vị." },
            { key: "b", text: "VTPT của $(P)$ là $\\vec{n} = (1; 1; \\sqrt{2})$.", correct: "true", explain: "Hệ số chuẩn." },
            { key: "c", text: "Độ dài $|\vec{n}| = \\sqrt{1 + 1 + 2} = 2$.", correct: "true", explain: "$\\sqrt{4} = 2$." },
            { key: "d", text: "Góc giữa trục $Oz$ và mặt phẳng $(P)$ bằng $45^\\circ$.", correct: "true", explain: "$\\sin\\varphi = \\frac{|\\sqrt{2}|}{1 \\times 2} = \\frac{\\sqrt{2}}{2} \\Rightarrow \\varphi = 45^\\circ$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình lập phương $ABCD.A'B'C'D'$:",
          items: [
            { key: "a", text: "Góc giữa hai đường thẳng $AB$ và $B'C'$ bằng $90^\\circ$.", correct: "true", explain: "$B'C' \\parallel BC \\perp AB$." },
            { key: "b", text: "Góc giữa đường chéo $AC'$ và mặt đáy $(ABCD)$ thỏa mãn $\\tan\\varphi = \\frac{1}{\\sqrt{2}}$.", correct: "true", explain: "$\\tan\\varphi = C'C / AC = a / (a\\sqrt{2}) = 1/\\sqrt{2}$." },
            { key: "c", text: "Góc giữa hai mặt phẳng $(A'BD)$ và $(C'BD)$ là góc nhọn.", correct: "true", explain: "Góc nhị diện nhỏ hơn 90 độ." },
            { key: "d", text: "Góc giữa hai mặt phẳng đối diện bằng $180^\\circ$.", correct: "false", explain: "Hai mặt phẳng song song có góc bằng $0^\\circ$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính chất công thức góc trong không gian:",
          items: [
            { key: "a", text: "Công thức cos góc giữa hai vectơ có thể âm, nhưng cos góc giữa hai đường thẳng luôn không âm.", correct: "true", explain: "Góc giữa hai vectơ từ 0 đến 180 độ, góc giữa hai đường thẳng từ 0 đến 90 độ." },
            { key: "b", text: "Tích có hướng $[\\vec{u}_1, \\vec{u}_2]$ có độ dài bằng $|\\vec{u}_1||\\vec{u}_2|\\sin(\\vec{u}_1, \\vec{u}_2)$.", correct: "true", explain: "Định lý chuẩn về độ dài tích có hướng." },
            { key: "c", text: "Khi $\\sin(d, (P)) = 1$ thì đường thẳng $d$ song song với mặt phẳng $(P)$.", correct: "false", explain: "Sin bằng 1 nghĩa là góc bằng 90 độ, tức $d$ vuông góc với $(P)$." },
            { key: "d", text: "Góc giữa hai đường thẳng song song bằng $0^\\circ$.", correct: "true", explain: "Quy ước chuẩn SGK." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 17: PHƯƠNG TRÌNH MẶT CẦU (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai17": {
      id: "toan12_bai17",
      lessonTitle: "Bài 17: Phương trình mặt cầu",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 17:") || t.includes("phương trình mặt cầu") || t.includes("mat cau");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Định nghĩa, Phương trình chính tắc và Phương trình tổng quát của mặt cầu",
          theory: createStandardTheoryHTML(
            "Bài 17: Phương trình mặt cầu", "Lớp 12", 1,
            "Định nghĩa, Phương trình chính tắc và Phương trình tổng quát của mặt cầu",
            `<p>Mặt cầu tâm $I(a; b; c)$ bán kính $R > 0$ trong không gian $Oxyz$:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phương trình chính tắc:</strong>
                $$(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$$
              </li>
              <li><strong>Phương trình tổng quát:</strong> Khai triển phương trình chính tắc ta được:
                $$x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$$
                với điều kiện để là phương trình mặt cầu: $a^2 + b^2 + c^2 - d > 0$.
              </li>
              <li>Khi đó tâm mặt cầu là $I(a; b; c)$ và bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$.</li>
              <li><strong>Mặt cầu đường kính $AB$:</strong> Có tâm $I$ là trung điểm của $AB$, bán kính $R = \\frac{AB}{2}$.</li>
            </ul>`,
            `<li>Muốn tìm tâm $I$ từ dạng tổng quát: Lấy hệ số của $x, y, z$ chia cho $-2$.</li>
            <li>Bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$. Chú ý số hạng tự do là $+ d$ thì trong căn là $- d$.</li>`,
            `<li>Quên chia cho $-2$ (lại chia cho 2) dẫn đến sai dấu toạ độ tâm.</li>
            <li>Quên điều kiện $a^2 + b^2 + c^2 - d > 0$ khi đề bài hỏi giá trị tham số $m$ để biểu thức là phương trình mặt cầu.</li>`,
            `<li><em>"Hệ số chia trừ hai ra Tâm I – Bình phương tâm trừ d lấy căn ra Bán kính R!"</em></li>`
          ),
          mcqs: [
            {
              question: "Trong không gian $Oxyz$, mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có tâm $I$ và bán kính $R$ là:",
              options: [
                "A. $I(1; -2; 3)$ và $R = 4$",
                "B. $I(-1; 2; -3)$ và $R = 4$",
                "C. $I(1; -2; 3)$ và $R = 16$",
                "D. $I(-1; 2; -3)$ và $R = 16$"
              ],
              correct: "A",
              explanation: "Đổi dấu trong ngoặc: $a = 1, b = -2, c = 3 \\Rightarrow I(1; -2; 3)$ và $R = \\sqrt{16} = 4$.",
              hint1: "Phương trình $(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2$.",
              hint2: "$R = \\sqrt{16} = 4$."
            },
            {
              question: "Mặt cầu $(S): x^2 + y^2 + z^2 - 4x + 6y - 2z - 2 = 0$ có bán kính $R$ bằng:",
              options: ["A. $4$", "B. $16$", "C. $\\sqrt{12}$", "D. $2$"],
              correct: "A",
              explanation: "Chia hệ số cho $-2$: $a = 2, b = -3, c = 1$ và $d = -2$. Bán kính $R = \\sqrt{2^2 + (-3)^2 + 1^2 - (-2)} = \\sqrt{4 + 9 + 1 + 2} = \\sqrt{16} = 4$.",
              hint1: "Tìm $a, b, c$ bằng cách chia hệ số của $x, y, z$ cho $-2$.",
              hint2: "$R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{4+9+1+2} = 4$."
            },
            {
              question: "Tìm điều kiện của tham số $m$ để phương trình $x^2 + y^2 + z^2 - 2x + 4y - 6z + m = 0$ là phương trình của một mặt cầu.",
              options: ["A. $m < 14$", "B. $m \\le 14$", "C. $m > 14$", "D. $m < 4$"],
              correct: "A",
              explanation: "$a = 1, b = -2, c = 3, d = m$. Điều kiện: $a^2 + b^2 + c^2 - d > 0 \\Leftrightarrow 1 + 4 + 9 - m > 0 \\Leftrightarrow 14 - m > 0 \\Leftrightarrow m < 14$.",
              hint1: "Điều kiện mặt cầu là $a^2 + b^2 + c^2 - d > 0$.",
              hint2: "$1^2 + (-2)^2 + 3^2 - m > 0 \\implies 14 - m > 0$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hai điểm $A(2; 1; -3)$ và $B(4; -1; 1)$:",
          items: [
            { key: "a", text: "Trung điểm của đoạn thẳng $AB$ là $I(3; 0; -1)$.", correct: "true", explain: "Cộng toạ độ chia đôi." },
            { key: "b", text: "Độ dài đoạn thẳng $AB = \\sqrt{2^2 + (-2)^2 + 4^2} = \\sqrt{24} = 2\\sqrt{6}$.", correct: "true", explain: "Khoảng cách chuẩn." },
            { key: "c", text: "Mặt cầu đường kính $AB$ có bán kính $R = \\sqrt{6}$.", correct: "true", explain: "$R = AB/2 = \\sqrt{6}$." },
            { key: "d", text: "Phương trình mặt cầu đường kính $AB$ là $(x - 3)^2 + y^2 + (z + 1)^2 = 6$.", correct: "true", explain: "Tâm $I(3; 0; -1)$ và $R^2 = 6$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 4 = 0$:",
          items: [
            { key: "a", text: "Tâm của mặt cầu là $I(1; -2; 0)$.", correct: "true", explain: "Hệ số $z$ bằng 0 nên $c = 0$." },
            { key: "b", text: "Bán kính của mặt cầu là $R = 3$.", correct: "true", explain: "$R = \\sqrt{1^2 + (-2)^2 + 0^2 - (-4)} = \\sqrt{9} = 3$." },
            { key: "c", text: "Gốc toạ độ $O(0; 0; 0)$ nằm bên ngoài mặt cầu.", correct: "false", explain: "Thay $O$ vào: $-4 < 0$ nên $O$ nằm bên TRONG mặt cầu ($OI = \\sqrt{5} < 3$)." },
            { key: "d", text: "Mặt phẳng $(Oxy)$ đi qua tâm của mặt cầu.", correct: "true", explain: "Vì cao độ tâm $z = 0$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Về vị trí tương đối giữa mặt cầu $(S)$ tâm $I$, bán kính $R$ và mặt phẳng $(P)$:",
          items: [
            { key: "a", text: "Nếu $d(I, (P)) > R$ thì mặt phẳng $(P)$ không cắt mặt cầu $(S)$.", correct: "true", explain: "Khoảng cách lớn hơn bán kính." },
            { key: "b", text: "Nếu $d(I, (P)) = R$ thì mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$.", correct: "true", explain: "Mặt phẳng là tiếp diện." },
            { key: "c", text: "Nếu $d(I, (P)) < R$ thì mặt phẳng $(P)$ cắt mặt cầu $(S)$ theo giao tuyến là đường tròn.", correct: "true", explain: "Giao tuyến là đường tròn bán kính $r = \\sqrt{R^2 - d^2}$." },
            { key: "d", text: "Nếu mặt phẳng đi qua tâm $I$ thì thiết diện có diện tích nhỏ nhất.", correct: "false", explain: "Mặt phẳng đi qua tâm tạo ra hình tròn lớn có diện tích LỚN NHẤT." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho mặt cầu $(S): x^2 + y^2 + z^2 = 9$ và mặt phẳng $(P): 2x - 2y + z + 9 = 0$:",
          items: [
            { key: "a", text: "Tâm mặt cầu là gốc toạ độ $O(0; 0; 0)$ và bán kính $R = 3$.", correct: "true", explain: "Dạng chính tắc đơn giản." },
            { key: "b", text: "Khoảng cách từ tâm $O$ đến $(P)$ là $d = \\frac{|9|}{\\sqrt{4+4+1}} = 3$.", correct: "true", explain: "$9/3 = 3$." },
            { key: "c", text: "Mặt phẳng $(P)$ tiếp xúc với mặt cầu $(S)$.", correct: "true", explain: "Vì $d = R = 3$." },
            { key: "d", text: "Tiếp điểm có toạ độ là $(-2; 2; -1)$.", correct: "true", explain: "Điểm tiếp xúc là $H = O + t\\vec{n}$, với $t = -1$ ra $(-2; 2; -1)$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho phương trình $x^2 + y^2 + z^2 - 2mx + 2(m-1)y - 4z + 14 = 0$:",
          items: [
            { key: "a", text: "Tâm nếu là mặt cầu có toạ độ $I(m; -(m-1); 2)$.", correct: "true", explain: "Chia hệ số cho -2." },
            { key: "b", text: "$a^2 + b^2 + c^2 - d = m^2 + (m-1)^2 + 4 - 14 = 2m^2 - 2m - 9$.", correct: "true", explain: "Khai triển chuẩn." },
            { key: "c", text: "Phương trình luôn là mặt cầu với mọi số thực $m$.", correct: "false", explain: "Tam thức bậc 2 có $\\Delta' = 1 - 2(-9) = 19 > 0$ nên có khoảng âm, không đúng với mọi $m$." },
            { key: "d", text: "Khi $m = 3$, bán kính mặt cầu bằng $\\sqrt{3}$.", correct: "true", explain: "$2(9) - 2(3) - 9 = 18 - 6 - 9 = 3 \\Rightarrow R = \\sqrt{3}$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ứng dụng của mặt cầu trong thực tiễn và thiên văn:",
          items: [
            { key: "a", text: "Trái Đất được mô hình hóa xấp xỉ là một khối cầu bán kính khoảng 6371 km.", correct: "true", explain: "Địa lí thiên văn." },
            { key: "b", text: "Vệ tinh địa tĩnh chuyển động trên quỹ đạo tròn đồng tâm với tâm Trái Đất.", correct: "true", explain: "Cơ học quỹ đạo." },
            { key: "c", text: "Hệ thống định vị GPS sử dụng giao điểm của các mặt cầu để định vị toạ độ người dùng.", correct: "true", explain: "Phương pháp giao ba mặt cầu (Trilateration)." },
            { key: "d", text: "Chỉ cần 2 vệ tinh là xác định được vị trí duy nhất trong không gian 3 chiều.", correct: "false", explain: "Giao 2 mặt cầu là một đường tròn, cần tối thiểu 3 vệ tinh (thực tế 4 vệ tinh để bù sai số đồng hồ)." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 18: XÁC SUẤT CÓ ĐIỀU KIỆN (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai18": {
      id: "toan12_bai18",
      lessonTitle: "Bài 18: Xác suất có điều kiện",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 18:") || t.includes("xác suất có điều kiện")) && !t.includes("toàn phần");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm xác suất có điều kiện và quy tắc nhân xác suất",
          theory: createStandardTheoryHTML(
            "Bài 18: Xác suất có điều kiện", "Lớp 12", 1,
            "Khái niệm xác suất có điều kiện và quy tắc nhân xác suất",
            `<p>Xác suất có điều kiện chuẩn SGK Toán 12 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Cho hai biến cố $A$ và $B$ với $P(B) > 0$. Xác suất của biến cố $A$ với điều kiện biến cố $B$ đã xảy ra được ký hiệu là $P(A|B)$ và tính bởi:
                $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$
              </li>
              <li><strong>Quy tắc nhân xác suất:</strong>
                $$P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$$
              </li>
              <li><strong>Biến cố độc lập:</strong> Hai biến cố $A$ và $B$ độc lập khi và chỉ khi $P(A|B) = P(A)$ (hoặc $P(A \\cap B) = P(A) \\cdot P(B)$).</li>
              <li><strong>Tính chất biến cố đối:</strong> $P(\\bar{A}|B) = 1 - P(A|B)$.</li>
            </ul>`,
            `<li>$P(A|B)$ khác $P(B|A)$ về bản chất: một cái điều kiện là $B$, một cái điều kiện là $A$.</li>
            <li>Có thể dùng sơ đồ hình cây để tính xác suất nhánh liên tiếp.</li>`,
            `<li>Nhầm lẫn giữa biến cố giao $A \\cap B$ và xác suất có điều kiện $A|B$.</li>
            <li>Quên điều kiện mẫu số $P(B) > 0$.</li>`,
            `<li><em>"Xác suất A điều kiện B: Lấy xác suất giao chia xác suất điều kiện!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai biến cố $A$ và $B$ có $P(B) = 0.4$ và $P(A \\cap B) = 0.1$. Giá trị của $P(A|B)$ bằng:",
              options: ["A. $0.25$", "B. $0.04$", "C. $0.50$", "D. $0.30$"],
              correct: "A",
              explanation: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.1}{0.4} = 0.25$.",
              hint1: "Áp dụng định nghĩa $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
              hint2: "$0.1 / 0.4 = 0.25$."
            },
            {
              question: "Cho hai biến cố độc lập $A$ và $B$ với $P(A) = 0.6, P(B) = 0.5$. Giá trị của $P(A|B)$ là:",
              options: ["A. $0.6$", "B. $0.3$", "C. $0.5$", "D. $0.1$"],
              correct: "A",
              explanation: "Vì hai biến cố độc lập nên việc $B$ xảy ra không ảnh hưởng đến $A$, do đó $P(A|B) = P(A) = 0.6$.",
              hint1: "Khi $A$ và $B$ độc lập thì $P(A|B) = ?$",
              hint2: "$P(A|B) = P(A) = 0.6$."
            },
            {
              question: "Gieo một con xúc xắc cân đối. Biết số chấm xuất hiện là số chẵn. Xác suất để số chấm xuất hiện là số nguyên tố bằng:",
              options: ["A. $\\frac{1}{3}$", "B. $\\frac{1}{2}$", "C. $\\frac{1}{6}$", "D. $\\frac{2}{3}$"],
              correct: "A",
              explanation: "Biến cố điều kiện $B = \\{2; 4; 6\\}$ gồm 3 phần tử. Biến cố số nguyên tố trong các số chẵn là $A \\cap B = \\{2\\}$ gồm 1 phần tử. Vậy $P(A|B) = \\frac{1}{3}$.",
              hint1: "Các số chẵn là {2, 4, 6}. Trong đó số nào là số nguyên tố?",
              hint2: "Chỉ có số 2 là số nguyên tố chẵn. Vậy tỉ lệ là 1/3."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Một hộp có 10 viên bi gồm 6 bi đỏ và 4 bi xanh. Lấy ngẫu nhiên lần lượt 2 viên bi không hoàn lại:",
          items: [
            { key: "a", text: "Xác suất viên bi thứ nhất màu đỏ là $\\frac{6}{10} = 0.6$.", correct: "true", explain: "6 bi đỏ trong 10 bi." },
            { key: "b", text: "Biết viên bi thứ nhất màu đỏ, xác suất viên thứ hai màu xanh là $\\frac{4}{9}$.", correct: "true", explain: "Còn 9 viên bi trong đó có 4 bi xanh." },
            { key: "c", text: "Xác suất cả hai viên bi đều màu đỏ là $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{1}{3}$.", correct: "true", explain: "Quy tắc nhân xác suất." },
            { key: "d", text: "Hai biến cố lấy bi ở hai lần độc lập với nhau.", correct: "false", explain: "Vì không hoàn lại nên kết quả lần 1 ảnh hưởng lần 2, không độc lập." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét hai biến cố $A$ và $B$ với $P(A) = 0.5, P(B) = 0.4, P(A|B) = 0.6$:",
          items: [
            { key: "a", text: "Xác suất giao $P(A \\cap B) = 0.4 \\times 0.6 = 0.24$.", correct: "true", explain: "Quy tắc nhân." },
            { key: "b", text: "Xác suất có điều kiện $P(B|A) = \\frac{0.24}{0.5} = 0.48$.", correct: "true", explain: "$P(B|A) = P(AB)/P(A) = 0.24/0.5 = 0.48$." },
            { key: "c", text: "Hai biến cố $A$ và $B$ độc lập với nhau.", correct: "false", explain: "Vì $P(A|B) = 0.6 \\neq P(A) = 0.5$." },
            { key: "d", text: "Xác suất $P(\\bar{A}|B) = 0.4$.", correct: "true", explain: "$1 - P(A|B) = 1 - 0.6 = 0.4$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Khảo sát một trường học thấy có $52\\%$ học sinh là nữ. Trong số học sinh nữ có $25\\%$ tham gia câu lạc bộ thể thao. Trong số học sinh nam có $40\\%$ tham gia câu lạc bộ thể thao:",
          items: [
            { key: "a", text: "Xác suất chọn được một học sinh là nam là $0.48$.", correct: "true", explain: "$1 - 0.52 = 0.48$." },
            { key: "b", text: "Xác suất chọn được một nữ sinh có tham gia CLB thể thao là $0.52 \\times 0.25 = 0.13$.", correct: "true", explain: "Nhân xác suất." },
            { key: "c", text: "Xác suất chọn được một nam sinh có tham gia CLB thể thao là $0.48 \\times 0.40 = 0.192$.", correct: "true", explain: "Nhân xác suất." },
            { key: "d", text: "Tỉ lệ học sinh toàn trường tham gia CLB thể thao là $32.2\\%$.", correct: "true", explain: "$0.13 + 0.192 = 0.322 = 32.2\\%$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất cơ bản của xác suất có điều kiện:",
          items: [
            { key: "a", text: "Với mọi biến cố $A$ và $B$ ($P(B) > 0$), ta luôn có $0 \\le P(A|B) \\le 1$.", correct: "true", explain: "Tính chất xác suất." },
            { key: "b", text: "Nếu $A \\subset B$ và $P(B) > 0$ thì $P(A|B) = \\frac{P(A)}{P(B)}$.", correct: "true", explain: "Vì $A \\cap B = A$." },
            { key: "c", text: "Nếu $B \\subset A$ thì $P(A|B) = 1$.", correct: "true", explain: "Biết $B$ xảy ra thì chắc chắn $A$ xảy ra." },
            { key: "d", text: "Nếu $A$ và $B$ xung khắc ($A \\cap B = \\emptyset$) thì $P(A|B) = 1$.", correct: "false", explain: "Xung khắc thì $P(A \\cap B) = 0 \\Rightarrow P(A|B) = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một đợt kiểm tra chất lượng sản phẩm, tỉ lệ phế phẩm của dây chuyền là $5\\%$. Người ta sử dụng thiết bị kiểm tra có độ chính xác $95\\%$ (nhận biết đúng chính phẩm $95\\%$, phế phẩm $95\\%$):",
          items: [
            { key: "a", text: "Xác suất sản phẩm là chính phẩm là $0.95$.", correct: "true", explain: "$1 - 0.05 = 0.95$." },
            { key: "b", text: "Xác suất sản phẩm là phế phẩm và bị máy báo phế phẩm là $0.05 \\times 0.95 = 0.0475$.", correct: "true", explain: "Nhân xác suất." },
            { key: "c", text: "Xác suất sản phẩm là chính phẩm nhưng bị máy báo nhầm thành phế phẩm là $0.95 \\times 0.05 = 0.0475$.", correct: "true", explain: "Báo nhầm." },
            { key: "d", text: "Xác suất máy phát tín hiệu báo phế phẩm là $0.095$.", correct: "true", explain: "$0.0475 + 0.0475 = 0.095$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về biểu diễn sơ đồ hình cây:",
          items: [
            { key: "a", text: "Mỗi nhánh sơ đồ xuất phát từ một nút có tổng xác suất bằng 1.", correct: "true", explain: "Quy tắc nhánh cây." },
            { key: "b", text: "Xác suất tại các nhánh cấp 2 chính là xác suất có điều kiện.", correct: "true", explain: "Định nghĩa sơ đồ cây." },
            { key: "c", text: "Xác suất của một kết quả ở cuối nhánh là tích các xác suất trên đường đi tới kết quả đó.", correct: "true", explain: "Quy tắc nhân xác suất trên cây." },
            { key: "d", text: "Sơ đồ cây chỉ áp dụng được khi có tối đa 2 nhánh.", correct: "false", explain: "Áp dụng được cho số nhánh bất kỳ." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 19: CÔNG THỨC XÁC SUẤT TOÀN PHẦN VÀ CÔNG THỨC BAYES (TOÁN 12 - KNTT)
    // =========================================================================
    "toan12_bai19": {
      id: "toan12_bai19",
      lessonTitle: "Bài 19: Công thức xác suất toàn phần và công thức Bayes",
      grade: "Lớp 12",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 19:") || t.includes("công thức xác suất toàn phần") || t.includes("bayes") || t.includes("toàn phần");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Công thức xác suất toàn phần",
          theory: createStandardTheoryHTML(
            "Bài 19: Công thức xác suất toàn phần và công thức Bayes", "Lớp 12", 1,
            "Công thức xác suất toàn phần",
            `<p>Công thức xác suất toàn phần chuẩn SGK Toán 12 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hệ biến cố đầy đủ:</strong> Các biến cố $A_1, A_2, ..., A_n$ lập thành một hệ đầy đủ nếu chúng đôi một xung khắc ($A_i \\cap A_j = \\emptyset, \\forall i \\neq j$) và hợp của chúng là không gian mẫu ($A_1 \\cup ... \\cup A_n = \\Omega$). Đặc biệt, $\{A, \\bar{A}\}$ luôn là hệ đầy đủ.</li>
              <li><strong>Công thức xác suất toàn phần:</strong> Với biến cố $B$ bất kỳ và hệ đầy đủ $\{A_1, ..., A_n\}$:
                $$P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B|A_i) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) + ... + P(A_n)P(B|A_n)$$
              </li>
              <li>Với hệ đầy đủ $\{A, \\bar{A}\}$: $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A})$.</li>
            </ul>`,
            `<li>Dùng khi một sự kiện $B$ có thể xảy ra theo nhiều kịch bản/nguyên nhân loại trừ nhau.</li>
            <li>Tổng xác suất của hệ đầy đủ luôn bằng 1: $\\sum P(A_i) = 1$.</li>`,
            `<li>Thiếu một kịch bản dẫn đến tính thiếu tổng xác suất.</li>
            <li>Các biến cố trong hệ đầy đủ không xung khắc thì không được áp dụng công thức toàn phần.</li>`,
            `<li><em>"Liệt kê hết mọi kịch bản A – Nhân xác suất có điều kiện từng nhánh – Cộng hết lại ra Toàn Phần!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hệ đầy đủ $\{A, \\bar{A}\}$ với $P(A) = 0.3$. Biết $P(B|A) = 0.8$ và $P(B|\\bar{A}) = 0.1$. Giá trị $P(B)$ bằng:",
              options: ["A. $0.31$", "B. $0.24$", "C. $0.07$", "D. $0.90$"],
              correct: "A",
              explanation: "$P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A}) = 0.3(0.8) + 0.7(0.1) = 0.24 + 0.07 = 0.31$.",
              hint1: "$P(\\bar{A}) = 1 - 0.3 = 0.7$.",
              hint2: "$0.3(0.8) + 0.7(0.1) = 0.24 + 0.07 = 0.31$."
            },
            {
              question: "Hai phân xưởng sản xuất cùng một loại sản phẩm: Phân xưởng 1 chiếm $60\\%$ sản lượng với tỉ lệ phế phẩm $2\\%$; Phân xưởng 2 chiếm $40\\%$ sản lượng với tỉ lệ phế phẩm $3\\%$. Lấy ngẫu nhiên 1 sản phẩm, xác suất sản phẩm đó là phế phẩm bằng:",
              options: ["A. $2.4\\%$", "B. $5.0\\%$", "C. $1.2\\%$", "D. $3.0\\%$"],
              correct: "A",
              explanation: "$P(P) = 0.60(0.02) + 0.40(0.03) = 0.012 + 0.012 = 0.024 = 2.4\\%$.",
              hint1: "Áp dụng công thức toàn phần: $P(A_1)P(P|A_1) + P(A_2)P(P|A_2)$.",
              hint2: "$0.6(0.02) + 0.4(0.03) = 0.024$."
            },
            {
              question: "Khẳng định nào sau đây là **ĐÚNG** về hệ biến cố đầy đủ?",
              options: [
                "A. Các biến cố đôi một xung khắc và có tổng xác suất bằng 1",
                "B. Các biến cố độc lập với nhau",
                "C. Chỉ có thể gồm đúng 2 biến cố",
                "D. Các biến cố có thể cùng xảy ra một lúc"
              ],
              correct: "A",
              explanation: "Định nghĩa hệ đầy đủ: đôi một xung khắc và phủ kín không gian mẫu $\\Omega$, do đó tổng xác suất bằng 1.",
              hint1: "Xem lại định nghĩa hệ đầy đủ trong SGK KNTT.",
              hint2: "Đôi một xung khắc và hợp bằng không gian mẫu."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Công thức Bayes và Ứng dụng suy luận ngược",
          theory: createStandardTheoryHTML(
            "Bài 19: Công thức xác suất toàn phần và công thức Bayes", "Lớp 12", 2,
            "Công thức Bayes và Ứng dụng suy luận ngược",
            `<p>Công thức Bayes dùng để cập nhật xác suất của giả thuyết (nguyên nhân) khi đã quan sát thấy kết quả:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Công thức Bayes:</strong> Với biến cố $B$ có $P(B) > 0$ và hệ đầy đủ $\{A_1, ..., A_n\}$:
                $$P(A_k|B) = \\frac{P(A_k) \\cdot P(B|A_k)}{P(B)} = \\frac{P(A_k) \\cdot P(B|A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B|A_i)}$$
              </li>
              <li><strong>Ý nghĩa:</strong>
                <br/>• $P(A_k)$: Xác suất tiên nghiệm (trước khi có thông tin).
                <br/>• $P(A_k|B)$: Xác suất hậu nghiệm (sau khi đã biết $B$ xảy ra).
              </li>
              <li><strong>Ứng dụng:</strong> Chẩn đoán y khoa (tính xác suất thực sự mắc bệnh khi có kết quả xét nghiệm dương tính), phát hiện gian lận, lọc thư rác Spam trong công nghệ thông tin.</li>
            </ul>`,
            `<li>Mẫu số của công thức Bayes chính là xác suất toàn phần $P(B)$.</li>
            <li>Tử số là tích xác suất của riêng nhánh nguyên nhân $A_k$ đang xét.</li>`,
            `<li>Quên nhân xác suất tiên nghiệm $P(A_k)$ ở tử số (chỉ lấy mỗi $P(B|A_k)$).</li>
            <li>Nhầm giữa $P(A|B)$ (xác suất cần tìm) và $P(B|A)$ (độ nhạy đề bài cho sẵn).</li>`,
            `<li><em>"Bayes suy luận ngược: Tử số là nhánh nguyên nhân – Mẫu số là Toàn Phần tất cả các nhánh!"</em></li>`
          ),
          mcqs: [
            {
              question: "Hai máy I và II cùng sản xuất một linh kiện: Máy I chiếm $40\\%$ sản lượng với tỉ lệ hỏng $1\\%$; Máy II chiếm $60\\%$ với tỉ lệ hỏng $2\\%$. Lấy ngẫu nhiên 1 linh kiện thấy bị hỏng. Xác suất linh kiện đó do Máy I sản xuất bằng:",
              options: ["A. $0.25$", "B. $0.40$", "C. $0.01$", "D. $0.75$"],
              correct: "A",
              explanation: "$P(\\text{Hỏng}) = 0.4(0.01) + 0.6(0.02) = 0.004 + 0.012 = 0.016$. Theo Bayes: $P(\\text{Máy I}|\\text{Hỏng}) = \\frac{0.004}{0.016} = \\frac{1}{4} = 0.25$.",
              hint1: "Tính xác suất hỏng toàn phần: $0.016$.",
              hint2: "Lấy nhánh Máy I chia cho tổng: $0.004 / 0.016 = 0.25$."
            },
            {
              question: "Công thức Bayes cho phép tính đại lượng nào sau đây?",
              options: [
                "A. Xác suất của nguyên nhân khi đã biết kết quả đã xảy ra (xác suất hậu nghiệm)",
                "B. Số trung bình cộng của mẫu số liệu",
                "C. Phương sai của biến ngẫu nhiên",
                "D. Khoảng biến thiên của mẫu số liệu"
              ],
              correct: "A",
              explanation: "Bản chất công thức Bayes là cập nhật xác suất của nguyên nhân/giả thuyết khi có thêm thông tin thực tế mới.",
              hint1: "Xem lại ý nghĩa triết học và ứng dụng của công thức Bayes.",
              hint2: "Suy luận ngược từ kết quả về nguyên nhân."
            },
            {
              question: "Một que thử chẩn đoán bệnh có độ chính xác cao. Biết tỉ lệ người mắc bệnh trong cộng đồng là $1\\%$. Một người thử que ra kết quả Dương tính. Để tính xác suất người đó thực sự mắc bệnh, ta áp dụng công thức nào?",
              options: [
                "A. Công thức Bayes",
                "B. Công thức nhị thức Newton",
                "C. Công thức tính diện tích Hê-rông",
                "D. Công thức nhân đôi lượng giác"
              ],
              correct: "A",
              explanation: "Bài toán tính xác suất mắc bệnh khi biết que dương tính là ứng dụng kinh điển của công thức Bayes.",
              hint1: "Bài toán chẩn đoán y tế suy luận ngược.",
              hint2: "Áp dụng định lý Bayes."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét bài toán hai hộp bi: Hộp 1 có 6 bi đỏ và 4 bi đen; Hộp 2 có 3 bi đỏ và 7 bi đen. Tung đồng xu cân đối: nếu ra sấp chọn Hộp 1, nếu ra ngửa chọn Hộp 2. Sau đó rút ngẫu nhiên 1 viên bi:",
          items: [
            { key: "a", text: "Xác suất chọn Hộp 1 bằng xác suất chọn Hộp 2 và bằng $0.5$.", correct: "true", explain: "Đồng xu cân đối." },
            { key: "b", text: "Xác suất lấy được bi đỏ khi chọn Hộp 1 là $P(Đ|H_1) = 0.6$.", correct: "true", explain: "$6/10 = 0.6$." },
            { key: "c", text: "Xác suất toàn phần để lấy được viên bi màu đỏ là $0.45$.", correct: "true", explain: "$P(Đ) = 0.5(0.6) + 0.5(0.3) = 0.30 + 0.15 = 0.45$." },
            { key: "d", text: "Biết viên bi lấy ra màu đỏ, xác suất viên bi đó đến từ Hộp 1 là $\\frac{2}{3}$.", correct: "true", explain: "Theo Bayes: $P(H_1|Đ) = \\frac{0.30}{0.45} = \\frac{2}{3}$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về hệ đầy đủ các biến cố trong không gian mẫu $\\Omega$:",
          items: [
            { key: "a", text: "Hai biến cố đối nhau $A$ và $\\bar{A}$ luôn lập thành một hệ đầy đủ.", correct: "true", explain: "$A \\cap \\bar{A} = \\emptyset$ và $A \\cup \\bar{A} = \\Omega$." },
            { key: "b", text: "Tổng xác suất của các biến cố trong hệ đầy đủ luôn bằng 1.", correct: "true", explain: "$\\sum P(A_i) = P(\\Omega) = 1$." },
            { key: "c", text: "Các biến cố trong hệ đầy đủ có thể giao nhau khác rỗng.", correct: "false", explain: "Bắt buộc phải đôi một xung khắc." },
            { key: "d", text: "Công thức xác suất toàn phần áp dụng được cho hệ đầy đủ gồm $n$ biến cố bất kì ($n \\ge 2$).", correct: "true", explain: "Định lý tổng quát." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một thiết bị cảnh báo cháy có độ nhạy $98\\%$ (khi có cháy thì chuông reo xác suất $0.98$). Chuông báo cháy giả với xác suất $1\\%$ khi không có cháy. Tỉ lệ có cháy thực tế là $0.005$:",
          items: [
            { key: "a", text: "Xác suất không có cháy là $0.995$.", correct: "true", explain: "$1 - 0.005 = 0.995$." },
            { key: "b", text: "Xác suất chuông reo báo cháy toàn phần là $P(R) = 0.005(0.98) + 0.995(0.01) = 0.01485$.", correct: "true", explain: "Toàn phần chuẩn." },
            { key: "c", text: "Khi chuông reo, xác suất thực sự có cháy lớn hơn $50\\%$.", correct: "false", explain: "$P(\\text{Cháy}|R) = \\frac{0.0049}{0.01485} \\approx 33\\% < 50\\%$." },
            { key: "d", text: "Công thức Bayes là công cụ toán học để giải quyết bài toán này.", correct: "true", explain: "Ứng dụng trực tiếp của Bayes." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Ba nhà máy I, II, III sản xuất bóng đèn với sản lượng lần lượt là $40\\%, 35\\%, 25\\%$. Tỉ lệ bóng hỏng tương ứng là $1\\%, 2\\%, 3\\%$:",
          items: [
            { key: "a", text: "Tỉ lệ bóng hỏng của nhà máy I trên toàn thị trường là $0.004$.", correct: "true", explain: "$0.40 \\times 0.01 = 0.004$." },
            { key: "b", text: "Tỉ lệ bóng hỏng toàn phần của cả ba nhà máy là $0.0185$.", correct: "true", explain: "$0.40(0.01) + 0.35(0.02) + 0.25(0.03) = 0.0185$ ($1.85\\%$)." },
            { key: "c", text: "Mua ngẫu nhiên 1 bóng thấy bị hỏng, xác suất bóng do nhà máy III sản xuất là $\\frac{15}{37}$.", correct: "true", explain: "Bayes: $0.0075 / 0.0185 = 15/37$." },
            { key: "d", text: "Trong số các bóng hỏng, bóng của nhà máy I chiếm tỉ lệ cao nhất.", correct: "false", explain: "Nhà máy III chiếm tỉ lệ cao nhất ($0.0075$)." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: So sánh giữa công thức xác suất toàn phần và công thức Bayes:",
          items: [
            { key: "a", text: "Công thức xác suất toàn phần dùng để tính $P(B)$ theo chiều xuôi thời gian.", correct: "true", explain: "Từ nguyên nhân tới kết quả." },
            { key: "b", text: "Công thức Bayes dùng để tính $P(A_k|B)$ theo chiều suy luận ngược.", correct: "true", explain: "Từ kết quả suy đoán nguyên nhân." },
            { key: "c", text: "Công thức Bayes sử dụng kết quả của công thức xác suất toàn phần ở mẫu số.", correct: "true", explain: "Mẫu số của Bayes là $P(B)$ toàn phần." },
            { key: "d", text: "Công thức Bayes không cần điều kiện các $A_i$ lập thành hệ đầy đủ.", correct: "false", explain: "Bắt buộc các $A_i$ phải lập thành một hệ đầy đủ." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ứng dụng hiện đại của công thức Bayes trong công nghệ thông tin:",
          items: [
            { key: "a", text: "Thuật toán Naive Bayes là một trong những thuật toán học máy phân loại phổ biến nhất.", correct: "true", explain: "Ứng dụng trong AI và Machine Learning." },
            { key: "b", text: "Bộ lọc thư rác của Gmail áp dụng nguyên lí Bayes để tính xác suất thư rác dựa trên từ khoá.", correct: "true", explain: "Bộ lọc Bayesian Spam Filtering." },
            { key: "c", text: "Hệ thống khuyến nghị (Recommendation System) dùng Bayes để cập nhật sở thích người dùng.", correct: "true", explain: "Cập nhật xác suất hành vi khách hàng." },
            { key: "d", text: "Xác suất tiên nghiệm $P(A)$ không có vai trò gì trong công thức Bayes.", correct: "false", explain: "Rất quan trọng, nó là trọng số nền tảng quyết định xác suất hậu nghiệm." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE12_PART2_LESSONS);

})();
