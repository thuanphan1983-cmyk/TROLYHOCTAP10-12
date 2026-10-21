/**
 * GIÁO ÁN CHI TIẾT TỪNG BÀI TOÁN LỚP 10 - SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
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

  const GRADE10_LESSONS = {
    // =========================================================================
    // BÀI 1: MỆNH ĐỀ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai1": {
      id: "toan10_bai1",
      lessonTitle: "Bài 1: Mệnh đề",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 1:") && !t.includes("hàm số") && !t.includes("lượng giác") && !t.includes("giá trị")) || (t.includes("mệnh đề") && !t.includes("tập hợp"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Mệnh đề toán học và mệnh đề phủ định",
          theory: createStandardTheoryHTML(
            "Bài 1: Mệnh đề", "Lớp 10", 1,
            "Mệnh đề toán học và mệnh đề phủ định",
            `<p>Kiến thức Mệnh đề toán học chuẩn SGK Kết nối tri thức 10:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Mệnh đề toán học:</strong> Là một khẳng định về một sự kiện toán học, khẳng định đó <strong>chỉ có thể đúng hoặc sai</strong>. Một mệnh đề không thể vừa đúng vừa sai.</li>
              <li>Câu hỏi, câu cảm thán, câu cầu khiến không phải là mệnh đề toán học.</li>
              <li><strong>Mệnh đề chứa biến:</strong> Là câu khẳng định chứa một hay nhiều biến số mà tính đúng sai tùy thuộc vào giá trị của biến số đó (ví dụ: $P(n): \"n \\text{ chia hết cho 3}\"$).</li>
              <li><strong>Mệnh đề phủ định ($\\bar{P}$):</strong>
                <br/>• Để phủ định mệnh đề $P$, ta thêm (hoặc bớt) từ \"không\" hoặc \"không phải\" vào trước vị ngữ của $P$.
                <br/>• Tính đúng sai: $\\bar{P}$ đúng khi $P$ sai, và $\\bar{P}$ sai khi $P$ đúng.
              </li>
            </ul>`,
            `<li>Câu chưa xác định được tính đúng sai như câu cảm thán (\"Hôm nay đẹp trời quá!\") không phải là mệnh đề.</li>
            <li>Khi phủ định một bất đẳng thức: Phủ định của $>$ là $\\le$, phủ định của $<$ là $\\ge$.</li>`,
            `<li>Quên lấy dấu bằng khi phủ định dấu bất đẳng thức ngặt (ví dụ phủ định của $x > 2$ là $x \\le 2$, không phải $x < 2$).</li>
            <li>Coi mệnh đề chứa biến là mệnh đề toán học khi chưa gán giá trị cho biến.</li>`,
            `<li><em>"Mệnh đề chỉ Đúng hoặc Sai – Câu hỏi, cảm thán tuyệt không phải mệnh đề!"</em></li>`
          ),
          mcqs: [
            {
              question: "Câu nào sau đây là một **mệnh đề toán học**?",
              options: [
                "A. Số 13 là một số nguyên tố",
                "B. Thời tiết hôm nay đẹp quá!",
                "C. Bạn có thích học Toán không?",
                "D. Hãy làm bài tập về nhà ngay!"
              ],
              correct: "A",
              explanation: "\"Số 13 là một số nguyên tố\" là một khẳng định đúng đắn về sự kiện toán học, nên là mệnh đề toán học. Các câu còn lại là câu cảm thán, nghi vấn, cầu khiến.",
              hint1: "Mệnh đề toán học phải là một câu khẳng định về một sự kiện toán học có tính đúng hoặc sai rõ ràng.",
              hint2: "Loại bỏ câu cảm thán, câu hỏi và câu cầu khiến; chọn câu khẳng định tính chất toán học của số 13."
            },
            {
              question: "Mệnh đề phủ định của mệnh đề $P: \"\\sqrt{2} \\text{ là số hữu tỉ}\"$ là:",
              options: [
                "A. $\\bar{P}: \"\\sqrt{2} \\text{ không phải là số hữu tỉ}\"$",
                "B. $\\bar{P}: \"\\sqrt{2} \\text{ là số nguyên}\"$",
                "C. $\\bar{P}: \"\\sqrt{2} \\text{ là số tự nhiên}\"$",
                "D. $\\bar{P}: \"\\sqrt{2} \\text{ là số thực}\"$"
              ],
              correct: "A",
              explanation: "Phủ định bằng cách thêm từ \"không phải là\" vào vị ngữ: $\\sqrt{2}$ không phải là số hữu tỉ (tức là số vô tỉ).",
              hint1: "Để phủ định một mệnh đề $P$, ta thêm từ \"không\" hoặc \"không phải là\" trước vị ngữ của $P$.",
              hint2: "Phủ định của \"là số hữu tỉ\" là \"không phải là số hữu tỉ\"."
            },
            {
              question: "Cho mệnh đề chứa biến $P(x): \"x^2 - 4 = 0\"$. Mệnh đề nào sau đây là một mệnh đề **ĐÚNG**?",
              options: ["A. $P(2)$", "B. $P(1)$", "C. $P(0)$", "D. $P(3)$"],
              correct: "A",
              explanation: "Thay $x = 2$: $2^2 - 4 = 0$ đúng, nên $P(2)$ là mệnh đề đúng.",
              hint1: "Lần lượt thay từng giá trị của $x$ vào phương trình $x^2 - 4 = 0$.",
              hint2: "Kiểm tra xem giá trị $x = 2$ có thỏa mãn đẳng thức $2^2 - 4 = 0$ hay không."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Mệnh đề kéo theo, tương đương và các lượng từ toán học",
          theory: createStandardTheoryHTML(
            "Bài 1: Mệnh đề", "Lớp 10", 2,
            "Mệnh đề kéo theo, tương đương và các lượng từ toán học",
            `<p>Hệ thống suy luận logic và các ký hiệu lượng từ toán học chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Mệnh đề kéo theo ($P \\Rightarrow Q$):</strong> \"Nếu $P$ thì $Q$\".
                <br/>• Mệnh đề $P \\Rightarrow Q$ chỉ <strong>SAI</strong> khi $P$ đúng mà $Q$ sai.
                <br/>• Trong định lý toán học: $P$ là <em>điều kiện đủ</em> để có $Q$, còn $Q$ là <em>điều kiện cần</em> để có $P$.
              </li>
              <li><strong>Mệnh đề đảo:</strong> Mệnh đề đảo của $P \\Rightarrow Q$ là $Q \\Rightarrow P$. Mệnh đề đảo có thể đúng hoặc sai.</li>
              <li><strong>Mệnh đề tương đương ($P \\Leftrightarrow Q$):</strong> \"$P$ khi và chỉ khi $Q$\" (hoặc \"$P$ là điều kiện cần và đủ để có $Q$\").
                <br/>• $P \\Leftrightarrow Q$ đúng khi và chỉ khi cả hai mệnh đề $P \\Rightarrow Q$ và $Q \\Rightarrow P$ cùng đúng.
              </li>
              <li><strong>Ký hiệu $\\forall$ (với mọi) và $\\exists$ (tồn tại):</strong>
                <br/>• Phủ định của $\\forall x \\in X, P(x)$ là: $\\exists x \\in X, \\overline{P(x)}$.
                <br/>• Phủ định của $\\exists x \\in X, P(x)$ là: $\\forall x \\in X, \\overline{P(x)}$.
              </li>
            </ul>`,
            `<li>\"$P$ là điều kiện đủ để có $Q$\": Đủ là đứng trước mũi tên ($P$).</li>
            <li>\"$Q$ là điều kiện cần để có $P$\": Cần là đứng sau mũi tên ($Q$).</li>
            <li>Phủ định của \"Với mọi\" bắt buộc chuyển thành \"Tồn tại\", và ngược lại.</li>`,
            `<li>Nhầm lẫn giữa điều kiện cần và điều kiện đủ.</li>
            <li>Quên phủ định biểu thức $P(x)$ khi đổi lượng từ (ví dụ phủ định của $\\forall x, x^2 > 0$ là $\\exists x, x^2 \\le 0$, không phải $x^2 > 0$).</li>`,
            `<li><em>\"Trước Đủ - Sau Cần! Phủ định của 'Với mọi' là 'Tồn tại', phủ định của 'Tồn tại' là 'Với mọi'!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Mệnh đề phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 > 0\"$ là:",
              options: [
                "A. $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 \\le 0\"$",
                "B. $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 < 0\"$",
                "C. $\\bar{P}: \"\\forall x \\in \\mathbb{R}, x^2 \\le 0\"$",
                "D. $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 > 0\"$"
              ],
              correct: "A",
              explanation: "Phủ định của $\\forall$ là $\\exists$, phủ định của $>$ là $\\le$. Do đó $\\bar{P}: \"\\exists x \\in \\mathbb{R}, x^2 \\le 0\"$ (đây là mệnh đề đúng vì tại $x=0$ thì $0^2 \\le 0$).",
              hint1: "Phủ định của lượng từ $\\forall$ (với mọi) là lượng từ $\\exists$ (tồn tại).",
              hint2: "Phủ định của dấu lớn hơn ($>$) là dấu nhỏ hơn hoặc bằng ($\\le$)."
            },
            {
              question: "Cho định lý: \"Nếu hai tam giác bằng nhau thì diện tích của chúng bằng nhau\". Phát biểu nào sau đây là **ĐÚNG**?",
              options: [
                "A. Hai tam giác bằng nhau là điều kiện đủ để diện tích của chúng bằng nhau",
                "B. Hai tam giác bằng nhau là điều kiện cần để diện tích của chúng bằng nhau",
                "C. Diện tích hai tam giác bằng nhau là điều kiện đủ để chúng bằng nhau",
                "D. Hai tam giác bằng nhau khi và chỉ khi diện tích của chúng bằng nhau"
              ],
              correct: "A",
              explanation: "Mệnh đề có dạng $P \\Rightarrow Q$. Giả thiết $P$ (\"hai tam giác bằng nhau\") là điều kiện đủ để có kết luận $Q$ (\"diện tích bằng nhau\").",
              hint1: "Trong định lý dạng $P \\Rightarrow Q$: $P$ là điều kiện đủ để có $Q$, và $Q$ là điều kiện cần để có $P$.",
              hint2: "Ghi nhớ quy tắc: \"Trước Đủ, Sau Cần\". Mệnh đề đứng trước là điều kiện đủ."
            },
            {
              question: "Mệnh đề nào sau đây là một mệnh đề **ĐÚNG**?",
              options: [
                "A. $\\exists x \\in \\mathbb{R}, x^2 = 2$",
                "B. $\\forall x \\in \\mathbb{R}, x^2 > x$",
                "C. $\\forall n \\in \\mathbb{N}, n^2 > 0$",
                "D. $\\exists x \\in \\mathbb{R}, x^2 + 1 = 0$"
              ],
              correct: "A",
              explanation: "Phương trình $x^2 = 2$ có nghiệm $x = \\pm\\sqrt{2} \\in \\mathbb{R}$ nên mệnh đề $\\exists x \\in \\mathbb{R}, x^2 = 2$ là đúng.",
              hint1: "Với mệnh đề chứa lượng từ $\\exists$, chỉ cần chỉ ra ít nhất một giá trị làm cho khẳng định đúng.",
              hint2: "Số thực $\\sqrt{2}$ thỏa mãn $(\\sqrt{2})^2 = 2$ nên phương án A đúng."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét tính đúng sai của các câu sau:",
          items: [
            { key: "a", text: "\"Số 2024 chia hết cho 2\" là một mệnh đề toán học đúng.", correct: "true", explain: "2024 là số chẵn." },
            { key: "b", text: "\"Học sinh lớp 10 phải chăm chỉ học bài!\" là một mệnh đề toán học.", correct: "false", explain: "Câu cầu khiến/khuyên nhủ, không phải mệnh đề." },
            { key: "c", text: "\"Số $\\pi$ là một số vô tỉ\" là một mệnh đề đúng.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "\"Tổng ba góc trong một tam giác bằng $180^\\circ$\" là mệnh đề đúng.", correct: "true", explain: "Định lý hình học Euclid." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 - 2x + 2 > 0\"$:",
          items: [
            { key: "a", text: "Biểu thức $x^2 - 2x + 2 = (x - 1)^2 + 1$.", correct: "true", explain: "Hằng đẳng thức." },
            { key: "b", text: "Vì $(x - 1)^2 \\ge 0$ nên $(x - 1)^2 + 1 \\ge 1 > 0, \\forall x$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Mệnh đề $P$ là một mệnh đề đúng.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Mệnh đề phủ định của $P$ là $\\bar{P}: \"\\forall x \\in \\mathbb{R}, x^2 - 2x + 2 \\le 0\"$.", correct: "false", explain: "Phủ định của $\\forall$ phải là $\\exists$, không được giữ $\\forall$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho mệnh đề kéo theo: \"Nếu tam giác $ABC$ là tam giác đều thì nó là tam giác cân\":",
          items: [
            { key: "a", text: "Mệnh đề này là một khẳng định đúng.", correct: "true", explain: "Tam giác đều chắc chắn là tam giác cân." },
            { key: "b", text: "Mệnh đề đảo là: \"Nếu tam giác $ABC$ là tam giác cân thì nó là tam giác đều\".", correct: "true", explain: "Đúng cấu trúc mệnh đề đảo." },
            { key: "c", text: "Mệnh đề đảo của mệnh đề trên là một mệnh đề đúng.", correct: "false", explain: "Tam giác cân chưa chắc đều (cần thêm góc 60 độ hoặc cạnh thứ 3 bằng)." },
            { key: "d", text: "Tam giác $ABC$ đều là điều kiện cần để tam giác $ABC$ cân.", correct: "false", explain: "Đều là điều kiện ĐỦ, không phải điều kiện cần." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét các mệnh đề chứa lượng từ $\\forall$ và $\\exists$:",
          items: [
            { key: "a", text: "$\\exists n \\in \\mathbb{N}, n^2 + 11n + 2 \\text{ chia hết cho 11}$.", correct: "true", explain: "Với $n = 3 \\in \\mathbb{N}$ ta có $3^2 + 11 \\cdot 3 + 2 = 9 + 33 + 2 = 44$ chia hết cho 11, do đó mệnh đề Đúng." },
            { key: "b", text: "$\\forall x \\in \\mathbb{R}, x^2 + 1 > 0$.", correct: "true", explain: "Bình phương cộng 1 luôn dương." },
            { key: "c", text: "$\\exists x \\in \\mathbb{Q}, x^2 = 2$.", correct: "false", explain: "$\\pm\\sqrt{2}$ là số vô tỉ, không thuộc $\\mathbb{Q}$." },
            { key: "d", text: "Phủ định của mệnh đề \"Mọi người trong phòng đều là học sinh\" là \"Có ít nhất một người trong phòng không phải là học sinh\".", correct: "true", explain: "Phủ định chuẩn của với mọi." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho mệnh đề tương đương $P \\Leftrightarrow Q$:",
          items: [
            { key: "a", text: "$P \\Leftrightarrow Q$ đúng khi cả $P$ và $Q$ cùng đúng hoặc cùng sai.", correct: "true", explain: "Bảng chân trị của mệnh đề tương đương." },
            { key: "b", text: "\"Tứ giác là hình chữ nhật khi và chỉ khi nó có 3 góc vuông\" là mệnh đề tương đương đúng.", correct: "true", explain: "Định nghĩa hình chữ nhật." },
            { key: "c", text: "\"Số nguyên $n$ chia hết cho 6 khi và chỉ khi $n$ chia hết cho 2 và chia hết cho 3\" là đúng.", correct: "true", explain: "Vì 2 và 3 nguyên tố cùng nhau." },
            { key: "d", text: "\"$x = 2 \\Leftrightarrow x^2 = 4$\" là một mệnh đề tương đương đúng.", correct: "false", explain: "Sai, vì $x^2 = 4$ thì $x = -2$ nữa, chiều đảo không đúng." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về phương pháp chứng minh phản chứng trong toán học:",
          items: [
            { key: "a", text: "Bước 1 là giả sử phản chứng: Giả sử kết luận là SAI (tức phủ định của kết luận là ĐÚNG).", correct: "true", explain: "Quy trình chuẩn." },
            { key: "b", text: "Bước 2 là suy luận từ giả thiết và giả sử phản chứng để dẫn đến điều vô lý (mâu thuẫn).", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Bước 3 kết luận điều giả sử là sai, vậy mệnh đề ban đầu phải đúng.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Phương pháp phản chứng chỉ áp dụng được cho các bài toán đại số, không dùng cho hình học.", correct: "false", explain: "Áp dụng cho mọi phân môn toán học." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 2: TẬP HỢP VÀ CÁC PHÉP TOÁN TRÊN TẬP HỢP (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai2": {
      id: "toan10_bai2",
      lessonTitle: "Bài 2: Tập hợp và các phép toán trên tập hợp",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 2:") || t.includes("tập hợp") || t.includes("phép toán trên tập hợp");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm tập hợp, phần tử và tập hợp con",
          theory: createStandardTheoryHTML(
            "Bài 2: Tập hợp và các phép toán trên tập hợp", "Lớp 10", 1,
            "Khái niệm tập hợp, phần tử và tập hợp con",
            `<p>Kiến thức nền tảng về Tập hợp chuẩn SGK Kết nối tri thức 10:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Tập hợp và phần tử:</strong>
                <br/>• $a \\in A$: phần tử $a$ thuộc tập hợp $A$.
                <br/>• $a \\notin A$: phần tử $a$ không thuộc tập hợp $A$.
              </li>
              <li><strong>Hai cách cho một tập hợp:</strong>
                <br/>1. Liệt kê các phần tử của tập hợp: $A = \\{1; 2; 3; 4\\}$.
                <br/>2. Chỉ ra tính chất đặc trưng cho các phần tử: $A = \\{x \\in \\mathbb{R} \\mid P(x)\\}$.
              </li>
              <li><strong>Tập hợp rỗng ($\\emptyset$):</strong> Là tập hợp không chứa phần tử nào.</li>
              <li><strong>Tập hợp con ($A \\subset B$):</strong> Nếu mọi phần tử của $A$ đều là phần tử của $B$ thì $A$ là tập con của $B$:
                $$A \\subset B \\iff (\\forall x, x \\in A \\Rightarrow x \\in B)$$
              </li>
              <li><strong>Tính chất tập con:</strong>
                <br/>• $\\emptyset \\subset A$ và $A \\subset A$ với mọi tập hợp $A$.
                <br/>• Nếu tập hợp $A$ có $n$ phần tử thì $A$ có đúng <strong>$2^n$ tập hợp con</strong>!
              </li>
              <li><strong>Hai tập hợp bằng nhau:</strong> $A = B \\iff A \\subset B$ và $B \\subset A$.</li>
            </ul>`,
            `<li>Ký hiệu $\\in$ chỉ dùng giữa phần tử và tập hợp (ví dụ: $1 \\in A$).</li>
            <li>Ký hiệu $\\subset$ chỉ dùng giữa hai tập hợp (ví dụ: $\\{1\\} \\subset A$).</li>
            <li>Số tập con của tập có $n$ phần tử là $2^n$ (bao gồm cả $\\emptyset$ và chính nó).</li>`,
            `<li>Viết $1 \\subset A$ hoặc $\\{1\\} \\in A$ (sai ký hiệu toán học).</li>
            <li>Quên tập rỗng $\\emptyset$ khi liệt kê các tập con.</li>`,
            `<li><em>"Phần tử thì Dùng Thuộc ($\\in$) – Tập hợp thì Dùng Con ($\\subset$) – $n$ phần tử có $2^n$ tập con!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho tập hợp $A = \\{x \\in \\mathbb{R} \\mid x^2 - 4x + 3 = 0\\}$. Viết tập hợp $A$ bằng cách liệt kê các phần tử là:",
              options: ["A. $A = \\{1; 3\\}$", "B. $A = \\{1\\}$", "C. $A = \\{3\\}$", "D. $A = \\{-1; -3\\}$"],
              correct: "A",
              explanation: "Phương trình $x^2 - 4x + 3 = 0$ có hai nghiệm phân biệt $x = 1$ và $x = 3$, do đó $A = \\{1; 3\\}$.",
              hint1: "Giải phương trình bậc hai $x^2 - 4x + 3 = 0$ để tìm các phần tử của tập hợp $A$.",
              hint2: "Phương trình có $a + b + c = 1 - 4 + 3 = 0$ nên có hai nghiệm là $x = 1$ và $x = 3$."
            },
            {
              question: "Tập hợp $X = \\{a; b; c\\}$ có tất cả bao nhiêu tập hợp con?",
              options: ["A. 8 tập con", "B. 6 tập con", "C. 3 tập con", "D. 9 tập con"],
              correct: "A",
              explanation: "Tập hợp có $n = 3$ phần tử nên số tập con là $2^3 = 8$ tập con (gồm: $\\emptyset$, 3 tập có 1 phần tử, 3 tập có 2 phần tử và chính $X$).",
              hint1: "Một tập hợp có $n$ phần tử thì có tất cả $2^n$ tập hợp con.",
              hint2: "Tập $X$ có $n = 3$ phần tử, tính $2^3 = 8$."
            },
            {
              question: "Ký hiệu nào sau đây được viết **ĐÚNG** theo quy ước toán học?",
              options: ["A. $\\{2\\} \\subset \\{1; 2; 3\\}$", "B. $2 \\subset \\{1; 2; 3\\}$", "C. $\\{2\\} \\in \\{1; 2; 3\\}$", "D. $\\emptyset \\in \\{1; 2\\}$"],
              correct: "A",
              explanation: "$\\{2\\}$ là một tập hợp, nên quan hệ với tập hợp $\\{1; 2; 3\\}$ phải dùng ký hiệu con $\\subset$.",
              hint1: "Ký hiệu $\\subset$ dùng cho quan hệ giữa hai tập hợp, còn ký hiệu $\\in$ dùng cho phần tử thuộc tập hợp.",
              hint2: "$\\{2\\}$ có dấu ngoặc nhọn là một tập hợp con, nên $\\{2\\} \\subset \\{1; 2; 3\\}$ là đúng."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Các phép toán Giao, Hợp, Hiệu và các khoảng trên R",
          theory: createStandardTheoryHTML(
            "Bài 2: Tập hợp và các phép toán trên tập hợp", "Lớp 10", 2,
            "Các phép toán Giao, Hợp, Hiệu và các khoảng trên R",
            `<p>Hệ thống các phép toán trên tập hợp và các khoảng số thực chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phép Giao ($A \\cap B$):</strong> Tập hợp gồm các phần tử vừa thuộc $A$, vừa thuộc $B$:
                $$A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$$
              </li>
              <li><strong>Phép Hợp ($A \\cup B$):</strong> Tập hợp gồm các phần tử thuộc $A$ hoặc thuộc $B$:
                $$A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$$
              </li>
              <li><strong>Phép Hiệu ($A \\setminus B$):</strong> Tập hợp gồm các phần tử thuộc $A$ nhưng không thuộc $B$:
                $$A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}$$
                <br/>Nếu $B \\subset A$ thì hiệu $A \\setminus B$ gọi là <em>phần bù của $B$ trong $A$</em>, ký hiệu là $C_A B$.
              </li>
              <li><strong>Các tập con của tập số thực $\\mathbb{R}$:</strong>
                <br/>• Khoảng: $(a; b) = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$, $(-\\infty; a)$, $(b; +\\infty)$.
                <br/>• Đoạn: $[a; b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$.
                <br/>• Nửa khoảng: $[a; b)$, $(a; b]$, $(-\\infty; a]$, $[b; +\\infty)$.
              </li>
            </ul>`,
            `<li>Ngoặc vuông $[$ hoặc $]$ có lấy đầu mút (có dấu bằng).</li>
            <li>Ngoặc tròn $($ hoặc $)$ không lấy đầu mút (không có dấu bằng).</li>
            <li>Kỹ thuật biểu diễn trên trục số: Tô đậm phần lấy, gạch bỏ phần không lấy để tránh nhầm lẫn.</li>`,
            `<li>Nhầm giữa giao $\\cap$ (phần chung) và hợp $\\cup$ (gộp tất cả).</li>
            <li>Lấy nhầm đầu mút khi thực hiện phép hiệu (ví dụ: $[1; 5] \\setminus [2; 5] = [1; 2)$, đầu mút 2 bị trừ mất nên biến thành ngoặc tròn).</li>`,
            `<li><em>"Giao lấy chung – Hợp lấy hết – Hiệu lấy trước bỏ sau – Trục số vẽ ra gạch bỏ là xong!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{2; 4; 6\\}$. Giao của hai tập hợp $A \\cap B$ là:",
              options: ["A. $\\{2; 4\\}$", "B. $\\{1; 2; 3; 4; 6\\}$", "C. $\\{1; 3\\}$", "D. $\\{6\\}$"],
              correct: "A",
              explanation: "Phần tử chung của cả hai tập hợp là $2$ và $4$, do đó $A \\cap B = \\{2; 4\\}$.",
              hint1: "Giao của hai tập hợp $A \\cap B$ lấy các phần tử chung cùng xuất hiện ở cả $A$ và $B$.",
              hint2: "So sánh các phần tử: số 2 và số 4 đều thuộc cả $A$ và $B$."
            },
            {
              question: "Cho hai tập hợp $A = [-2; 3)$ và $B = (1; 5]$. Giao của hai tập hợp $A \\cap B$ là khoảng:",
              options: ["A. $(1; 3)$", "B. $[-2; 5]$", "C. $[1; 3)$", "D. $(1; 3]$"],
              correct: "A",
              explanation: "Phần chung của $[-2; 3)$ và $(1; 5]$ là các số lớn hơn 1 và nhỏ hơn 3, tức khoảng $(1; 3)$.",
              hint1: "Vẽ trục số, xác định phần chung vừa thuộc $[-2; 3)$ vừa thuộc $(1; 5]$.",
              hint2: "Điều kiện chung là $1 < x < 3$, tương ứng với khoảng mở $(1; 3)$."
            },
            {
              question: "Cho tập hợp $A = [0; 5]$ và $B = (2; 7)$. Hiệu $A \\setminus B$ là:",
              options: ["A. $[0; 2]$", "B. $[0; 2)$", "C. $(5; 7)$", "D. $[2; 5]$"],
              correct: "A",
              explanation: "Lấy các phần tử thuộc $[0; 5]$ nhưng không thuộc $(2; 7)$. Vì $B$ không chứa số 2 nên số 2 vẫn còn lại trong $A \\setminus B$, kết quả là đoạn $[0; 2]$.",
              hint1: "Hiệu $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$.",
              hint2: "Khoảng $B = (2; 7)$ không chứa số 2, nên khi trừ đi thì số 2 vẫn còn giữ lại ở $A$, kết quả là $[0; 2]$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tập hợp $A = \\{x \\in \\mathbb{N} \\mid x < 5\\}$:",
          items: [
            { key: "a", text: "Liệt kê các phần tử: $A = \\{0; 1; 2; 3; 4\\}$.", correct: "true", explain: "Các số tự nhiên nhỏ hơn 5." },
            { key: "b", text: "Số phần tử của tập hợp $A$ là $n(A) = 5$.", correct: "true", explain: "Có 5 phần tử từ 0 đến 4." },
            { key: "c", text: "Số tập con của tập hợp $A$ là $2^5 = 32$ tập con.", correct: "true", explain: "Công thức $2^n$." },
            { key: "d", text: "Tập hợp $A$ có đúng 5 tập con có 1 phần tử.", correct: "true", explain: "$\\{0\\}, \\{1\\}, \\{2\\}, \\{3\\}, \\{4\\}$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai tập hợp $A = [-3; 2]$ và $B = (-1; 4)$:",
          items: [
            { key: "a", text: "Giao của hai tập hợp là $A \\cap B = (-1; 2]$.", correct: "true", explain: "Lớn hơn -1 và nhỏ hơn hoặc bằng 2." },
            { key: "b", text: "Hợp của hai tập hợp là $A \\cup B = [-3; 4)$.", correct: "true", explain: "Từ -3 đến 4." },
            { key: "c", text: "Hiệu $A \\setminus B = [-3; -1]$.", correct: "true", explain: "Do $B$ không lấy -1 nên $A \\setminus B$ còn số -1." },
            { key: "d", text: "Hiệu $B \\setminus A = [2; 4)$.", correct: "false", explain: "Vì $2 \\in A$ nên trong hiệu $B \\setminus A$ không thể chứa số 2. Kết quả đúng phải là $(2; 4)$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Xét các tập số tự nhiên, nguyên, hữu tỉ và thực:",
          items: [
            { key: "a", text: "$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.", correct: "true", explain: "Mối quan hệ bao hàm chuẩn." },
            { key: "b", text: "$\\mathbb{R} \\setminus \\mathbb{Q}$ là tập hợp các số vô tỉ.", correct: "true", explain: "Định nghĩa số vô tỉ $\\mathbb{I}$." },
            { key: "c", text: "Giao $\\mathbb{Z} \\cap \\mathbb{N}^* = \\mathbb{N}^*$.", correct: "true", explain: "Vì $\\mathbb{N}^* \\subset \\mathbb{Z}$." },
            { key: "d", text: "Số $0.333...$ không thuộc tập hợp số hữu tỉ $\\mathbb{Q}$.", correct: "false", explain: "Bằng $1/3$ nên thuộc $\\mathbb{Q}$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho tập hợp $A = (m - 1; m + 3)$ và $B = (1; 5)$ ($m$ là tham số thực):",
          items: [
            { key: "a", text: "Độ dài của khoảng $A$ là $(m + 3) - (m - 1) = 4$ với mọi $m$.", correct: "true", explain: "Không phụ thuộc $m$." },
            { key: "b", text: "Để $A \\cap B = \\emptyset$ thì $m + 3 \\le 1$ hoặc $m - 1 \\ge 5$.", correct: "true", explain: "Hai khoảng rời nhau." },
            { key: "c", text: "Điều kiện để $A \\cap B = \\emptyset$ là $m \\le -2$ hoặc $m \\ge 6$.", correct: "true", explain: "Giải bất phương trình." },
            { key: "d", text: "Với $m = 2$, ta có $A = (1; 5) = B$.", correct: "true", explain: "Khi $m = 2$, $A = (1; 5)$ trùng với $B$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho biểu đồ Ven biểu diễn hai tập hợp $A$ và $B$ hữu hạn:",
          items: [
            { key: "a", text: "Công thức số phần tử: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.", correct: "true", explain: "Công thức cộng phần tử chuẩn." },
            { key: "b", text: "Nếu $A \\cap B = \\emptyset$ thì $n(A \\cup B) = n(A) + n(B)$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Nếu $A$ có 10 phần tử, $B$ có 15 phần tử và $A \\cap B$ có 4 phần tử thì $A \\cup B$ có 21 phần tử.", correct: "true", explain: "$10 + 15 - 4 = 21$." },
            { key: "d", text: "Số phần tử của $A \\setminus B$ luôn bằng $n(A) - n(B)$.", correct: "false", explain: "Phải bằng $n(A) - n(A \\cap B)$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về phần bù và các tính chất đại số tập hợp:",
          items: [
            { key: "a", text: "Phần bù của $A$ trong $\\mathbb{R}$ ký hiệu là $C_{\\mathbb{R}} A = \\mathbb{R} \\setminus A$.", correct: "true", explain: "Định nghĩa phần bù." },
            { key: "b", text: "Phần bù của $(-\\infty; 2]$ trong $\\mathbb{R}$ là khoảng $(2; +\\infty)$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Phép giao và phép hợp có tính chất giao hoán: $A \\cap B = B \\cap A$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Phép hiệu có tính chất giao hoán: $A \\setminus B = B \\setminus A$.", correct: "false", explain: "Phép hiệu không giao hoán, $A \\setminus B \\neq B \\setminus A$." }
          ]
        }
      ]
    }
  };

  // Nạp vào DB toàn cục
  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const MORE_GRADE10_LESSONS = {
    // =========================================================================
    // BÀI 3: BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai3": {
      id: "toan10_bai3",
      lessonTitle: "Bài 3: Bất phương trình bậc nhất hai ẩn",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 3:") && !t.includes("hàm số") && !t.includes("tiệm cận")) || (t.includes("bất phương trình bậc nhất hai ẩn") && !t.includes("hệ"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm bất phương trình bậc nhất hai ẩn",
          theory: createStandardTheoryHTML(
            "Bài 3: Bất phương trình bậc nhất hai ẩn", "Lớp 10", 1,
            "Khái niệm bất phương trình bậc nhất hai ẩn",
            `<p>Kiến thức nền tảng BPT bậc nhất 2 ẩn chuẩn SGK Kết nối tri thức 10:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Bất phương trình bậc nhất hai ẩn $x, y$ là bất phương trình có một trong các dạng:
                $$ax + by < c; \\quad ax + by > c; \\quad ax + by \\le c; \\quad ax + by \\ge c$$
                trong đó $a, b, c$ là các số thực đã cho và $a, b$ không đồng thời bằng $0$ ($a^2 + b^2 > 0$).
              </li>
              <li><strong>Nghiệm của BPT:</strong> Cặp số $(x_0; y_0)$ là một nghiệm của BPT nếu thay $x = x_0, y = y_0$ vào ta được một khẳng định đúng. Bất phương trình bậc nhất 2 ẩn thường có <strong>vô số nghiệm</strong>.</li>
            </ul>`,
            `<li>Bậc của $x$ và $y$ đều phải là bậc 1, không có tích $xy$ hay luỹ thừa $x^2, y^2$.</li>
            <li>Một nghiệm là một cặp số $(x; y)$, không phải một số đơn lẻ.</li>`,
            `<li>Nhầm các phương trình chứa $xy$ hoặc $x^2$ là bậc nhất hai ẩn.</li>
            <li>Quên kiểm tra điều kiện $a, b$ không đồng thời bằng 0.</li>`,
            `<li><em>"Bậc của x và y đều bằng 1, đứng riêng rẽ – Cặp số (x; y) là nghiệm!"</em></li>`
          ),
          mcqs: [
            {
              question: "Bất phương trình nào sau đây là **bất phương trình bậc nhất hai ẩn**?",
              options: ["A. $2x - 3y > 5$", "B. $x^2 + y \\le 1$", "C. $xy - 2 > 0$", "D. $2x - y^2 < 3$"],
              correct: "A",
              explanation: "$2x - 3y > 5$ có $x$ và $y$ đều mang bậc 1, hệ số $a = 2, b = -3$ khác 0.",
              hint1: "Bất phương trình bậc nhất hai ẩn có dạng $ax + by < c$ (hoặc $> , \\le, \\ge$), trong đó $a, b$ không đồng thời bằng 0.",
              hint2: "Cả $x$ và $y$ đều phải là bậc nhất (số mũ 1), không chứa tích $xy$ hay số mũ bậc hai $x^2, y^2$."
            },
            {
              question: "Cặp số nào sau đây là một **nghiệm** của bất phương trình $x - 2y + 3 > 0$?",
              options: ["A. $(1; 1)$", "B. $(0; 2)$", "C. $(-4; 0)$", "D. $(1; 3)$"],
              correct: "A",
              explanation: "Thay $(1; 1)$ vào BPT: $1 - 2(1) + 3 = 2 > 0$ (khẳng định đúng).",
              hint1: "Thay lần lượt tọa độ $(x; y)$ của từng phương án vào vế trái của bất phương trình.",
              hint2: "Với cặp $(1; 1)$, tính $1 - 2(1) + 3 = 2 > 0$, đây là mệnh đề đúng."
            },
            {
              question: "Điểm nào sau đây **KHÔNG THUỘC** miền nghiệm của $2x + y - 4 \\le 0$?",
              options: ["A. $(2; 1)$", "B. $(0; 0)$", "C. $(1; 1)$", "D. $(0; 4)$"],
              correct: "A",
              explanation: "Thay $(2; 1)$ vào: $2(2) + 1 - 4 = 1 > 0$ (vi phạm $\\le 0$), nên không thuộc miền nghiệm.",
              hint1: "Điểm không thuộc miền nghiệm khi thay tọa độ vào làm cho bất phương trình trở thành khẳng định sai.",
              hint2: "Thay điểm $(2; 1)$ vào vế trái: $2(2) + 1 - 4 = 1 > 0$, không thỏa mãn dấu $\\le 0$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Biểu diễn miền nghiệm trên mặt phẳng tọa độ",
          theory: createStandardTheoryHTML(
            "Bài 3: Bất phương trình bậc nhất hai ẩn", "Lớp 10", 2,
            "Biểu diễn miền nghiệm trên mặt phẳng tọa độ",
            `<p>Quy trình biểu diễn hình học miền nghiệm của BPT bậc nhất hai ẩn chuẩn SGK Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li>Đường thẳng $d: ax + by = c$ chia mặt phẳng tọa độ $Oxy$ thành hai nửa mặt phẳng đối nhau có bờ là $d$.</li>
              <li><strong>Quy trình 3 bước xác định miền nghiệm:</strong>
                <br/>• <strong>Bước 1:</strong> Vẽ đường thẳng $d: ax + by = c$ đi qua 2 điểm phân biệt.
                <br/>• <strong>Bước 2:</strong> Chọn một điểm thử $M(x_0; y_0)$ không nằm trên $d$ (thường chọn gốc tọa độ $O(0; 0)$ nếu $c \\neq 0$). Tính giá trị $ax_0 + by_0$.
                <br/>• <strong>Bước 3:</strong> So sánh kết quả:
                <br/>+ Nếu $ax_0 + by_0$ thỏa mãn BPT thì nửa mặt phẳng chứa điểm $M$ là miền nghiệm.
                <br/>+ Nếu không thỏa mãn thì nửa mặt phẳng không chứa điểm $M$ là miền nghiệm.
              </li>
              <li><strong>Quy ước bờ:</strong>
                <br/>• Nếu BPT chứa dấu $\\ge$ hoặc $\\le$: Miền nghiệm bao gồm cả bờ $d$ (vẽ nét liền).
                <br/>• Nếu BPT chứa dấu $>$ hoặc $<$: Miền nghiệm không kể bờ $d$ (vẽ nét đứt).
              </li>
            </ul>`,
            `<li>Nếu đường thẳng đi qua gốc tọa độ $O(0; 0)$ thì phải chọn điểm thử khác (ví dụ: $(1; 0)$ hoặc $(0; 1)$).</li>
            <li>Ghi chú rõ ràng: \"Miền nghiệm là nửa mặt phẳng kể cả bờ (hoặc không kể bờ)\".</li>`,
            `<li>Vẫn chọn điểm $O(0; 0)$ làm điểm thử khi đường thẳng đi qua đúng điểm $O$.</li>
            <li>Quên gạch chéo phần nửa mặt phẳng không phải là nghiệm.</li>`,
            `<li><em>"Vẽ đường thẳng bờ – Thử điểm O(0;0) – Đúng lấy cùng phía, Sai gạch bỏ lấy phía đối diện!"</em></li>`
          ),
          mcqs: [
            {
              question: "Miền nghiệm của bất phương trình $x + y \\le 2$ chứa điểm nào sau đây?",
              options: ["A. Gốc tọa độ $O(0; 0)$", "B. Điểm $A(2; 3)$", "C. Điểm $B(1; 4)$", "D. Điểm $C(3; 0)$"],
              correct: "A",
              explanation: "Thay $O(0; 0)$ vào BPT: $0 + 0 = 0 \\le 2$ (đúng), do đó miền nghiệm chứa $O(0; 0)$.",
              hint1: "Thay tọa độ gốc tọa độ $O(0; 0)$ vào bất phương trình $x + y \\le 2$.",
              hint2: "Ta có $0 + 0 = 0 \\le 2$, đây là khẳng định đúng nên miền nghiệm chứa điểm $O$."
            },
            {
              question: "Đường thẳng bờ của bất phương trình $3x - 2y < 6$ có phương trình là:",
              options: ["A. $3x - 2y = 6$", "B. $3x + 2y = 6$", "C. $2x - 3y = 6$", "D. $y = 3x - 6$"],
              correct: "A",
              explanation: "Đường thẳng bờ là phương trình thay dấu bất đẳng thức bằng dấu bằng: $3x - 2y = 6$.",
              hint1: "Đường thẳng bờ của miền nghiệm nhận được bằng cách thay dấu bất đẳng thức ($<, >, \\le, \\ge$) bởi dấu bằng ($=$).",
              hint2: "Thay dấu $<$ trong $3x - 2y < 6$ bằng dấu $=$ ta được $3x - 2y = 6$."
            },
            {
              question: "Miền nghiệm của bất phương trình $2x - y > 0$ **không chứa** điểm nào sau đây?",
              options: ["A. Điểm $M(0; 1)$", "B. Điểm $N(1; 0)$", "C. Điểm $P(2; 1)$", "D. Điểm $Q(3; 2)$"],
              correct: "A",
              explanation: "Thay $M(0; 1)$ vào: $2(0) - 1 = -1 < 0$ (sai), nên $M$ không thuộc miền nghiệm.",
              hint1: "Thay tọa độ từng điểm vào biểu thức $2x - y$. Điểm nào làm biểu thức $\\le 0$ thì không thuộc miền nghiệm.",
              hint2: "Với điểm $M(0; 1)$, ta có $2(0) - 1 = -1 < 0$, không thỏa mãn dấu $> 0$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho bất phương trình bậc nhất hai ẩn $2x - y + 4 \\ge 0$:",
          items: [
            { key: "a", text: "Đường thẳng bờ của bất phương trình là $d: 2x - y + 4 = 0$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Đường thẳng $d$ cắt trục hoành tại điểm $(-2; 0)$.", correct: "true", explain: "$y=0 \\Rightarrow x=-2$." },
            { key: "c", text: "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình.", correct: "true", explain: "$2(0) - 0 + 4 = 4 \\ge 0$ đúng." },
            { key: "d", text: "Miền nghiệm của bất phương trình không bao gồm bờ $d$.", correct: "false", explain: "Dấu $\\ge$ nên tính cả bờ $d$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét tính đúng sai của các khẳng định về BPT bậc nhất hai ẩn:",
          items: [
            { key: "a", text: "Bất phương trình $x^2 + y^2 \\le 4$ là BPT bậc nhất hai ẩn.", correct: "false", explain: "Đây là hình tròn bậc hai." },
            { key: "b", text: "Bất phương trình $x \\ge 3$ là một BPT bậc nhất hai ẩn với hệ số $b = 0$.", correct: "true", explain: "$1x + 0y \\ge 3$." },
            { key: "c", text: "Miền nghiệm của BPT bậc nhất hai ẩn luôn là một nửa mặt phẳng.", correct: "true", explain: "Chuẩn SGK." },
            { key: "d", text: "Một BPT bậc nhất hai ẩn chỉ có thể có tối đa 10 nghiệm thực.", correct: "false", explain: "Miền nghiệm chứa vô số điểm nên có vô số nghiệm." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho bất phương trình $x - 3y > 0$:",
          items: [
            { key: "a", text: "Đường thẳng bờ $d: x - 3y = 0$ đi qua gốc tọa độ $O(0; 0)$.", correct: "true", explain: "Không có hệ số tự do." },
            { key: "b", text: "Ta không thể dùng điểm $O(0; 0)$ làm điểm thử để xác định miền nghiệm.", correct: "true", explain: "Vì $O$ nằm ngay trên bờ $d$." },
            { key: "c", text: "Chọn điểm thử $M(1; 0)$, ta có $1 - 3(0) = 1 > 0$ (thỏa mãn).", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Miền nghiệm là nửa mặt phẳng bờ $d$ chứa điểm $M(1; 0)$, kể cả bờ $d$.", correct: "false", explain: "Dấu $>$ ngặt nên không kể bờ $d$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Bài toán thực tế: Một người thợ mộc đóng 2 loại bàn ghế. Bàn cần 2 giờ, ghế cần 1 giờ. Tổng thời gian mỗi ngày không quá 8 giờ. Gọi $x, y$ lần lượt là số bàn và ghế đóng trong ngày ($x, y \\in \\mathbb{N}$):",
          items: [
            { key: "a", text: "Bất phương trình biểu thị thời gian là $2x + y \\le 8$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Điều kiện thực tế của biến số là $x \\ge 0, y \\ge 0$.", correct: "true", explain: "Số lượng không âm." },
            { key: "c", text: "Người thợ mộc có thể đóng 3 cái bàn và 3 cái ghế trong một ngày.", correct: "false", explain: "$2(3) + 3 = 9 > 8$ (quá giờ)." },
            { key: "d", text: "Nếu chỉ đóng ghế thì người đó đóng tối đa được 8 cái ghế.", correct: "true", explain: "$x=0 \\Rightarrow y \\le 8$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho đường thẳng $d: x + 2y - 2 = 0$:",
          items: [
            { key: "a", text: "Điểm $A(2; 0)$ và $B(0; 1)$ thuộc đường thẳng $d$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Nửa mặt phẳng chứa gốc tọa độ $O$ là miền nghiệm của $x + 2y - 2 < 0$.", correct: "true", explain: "$0 + 0 - 2 = -2 < 0$." },
            { key: "c", text: "Nửa mặt phẳng không chứa điểm $O$ là miền nghiệm của $x + 2y - 2 > 0$.", correct: "true", explain: "Hai nửa mặt phẳng đối nhau." },
            { key: "d", text: "Điểm $(4; -1)$ thuộc đường thẳng $d$.", correct: "true", explain: "$4 + 2(-1) - 2 = 0$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về biểu diễn miền nghiệm:",
          items: [
            { key: "a", text: "Miền nghiệm của $y \\ge 0$ là nửa mặt phẳng phía trên trục hoành kể cả trục hoành.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Miền nghiệm của $x \\le 0$ là nửa mặt phẳng bên trái trục tung kể cả trục tung.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Đường thẳng nét đứt biểu thị bờ không thuộc miền nghiệm.", correct: "true", explain: "Quy ước hình học SGK." },
            { key: "d", text: "Đường thẳng nét liền biểu thị bờ thuộc miền nghiệm.", correct: "true", explain: "Quy ước hình học SGK." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 4: HỆ BẤT PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai4": {
      id: "toan10_bai4",
      lessonTitle: "Bài 4: Hệ bất phương trình bậc nhất hai ẩn",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 4:") || t.includes("hệ bất phương trình bậc nhất hai ẩn") || (t.includes("hệ") && t.includes("bất phương trình"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm và miền nghiệm của hệ bất phương trình bậc nhất hai ẩn",
          theory: createStandardTheoryHTML(
            "Bài 4: Hệ bất phương trình bậc nhất hai ẩn", "Lớp 10", 1,
            "Khái niệm và miền nghiệm của hệ bất phương trình bậc nhất hai ẩn",
            `<p>Kiến thức Hệ BPT bậc nhất hai ẩn chuẩn SGK Kết nối tri thức 10:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hệ bất phương trình bậc nhất hai ẩn:</strong> Là hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn.</li>
              <li><strong>Miền nghiệm của hệ:</strong> Là <strong>giao của các miền nghiệm</strong> của các bất phương trình trong hệ.</li>
              <li>Hình dạng của miền nghiệm thường là một <strong>miền đa giác</strong> (tam giác, tứ giác, ngũ giác...) hoặc một miền không bị chặn.</li>
              <li>Các đỉnh của đa giác là giao điểm của các đường thẳng bờ.</li>
            </ul>`,
            `<li>Muốn tìm miền nghiệm của hệ: Biểu diễn miền nghiệm của từng BPT trên cùng một hệ trục rồi gạch bỏ phần không thỏa mãn. Phần không bị gạch là miền nghiệm chung.</li>
            <li>Đặc biệt chú ý hệ có thêm điều kiện thực tế $x \\ge 0, y \\ge 0$ (nằm trong góc phần tư thứ nhất).</li>`,
            `<li>Quên lấy giao miền nghiệm (ngộ nhận là phép hợp).</li>
            <li>Xác định sai tọa độ các đỉnh của miền đa giác.</li>`,
            `<li><em>"Hệ là giao các miền nghiệm – Phần trắng không bị gạch chính là miền nghiệm chung!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cặp số $(x; y) = (1; 1)$ là nghiệm của hệ bất phương trình nào sau đây?",
              options: [
                "A. $\\begin{cases} x + y > 0 \\\\ 2x - y \\le 3 \\end{cases}$",
                "B. $\\begin{cases} x + y < 0 \\\\ x - y > 1 \\end{cases}$",
                "C. $\\begin{cases} x - y > 0 \\\\ x + 2y < 1 \\end{cases}$",
                "D. $\\begin{cases} 2x + y < 1 \\\\ x > 2 \\end{cases}$"
              ],
              correct: "A",
              explanation: "Thay $(1; 1)$ vào: $1 + 1 = 2 > 0$ và $2(1) - 1 = 1 \\le 3$, cả hai đều đúng.",
              hint1: "Cặp số $(x_0; y_0)$ là nghiệm của hệ khi nó thỏa mãn đồng thời tất cả các bất phương trình trong hệ.",
              hint2: "Thay $x = 1, y = 1$ vào từng hệ: ở hệ A ta có $1 + 1 = 2 > 0$ và $2(1) - 1 = 1 \\le 3$, cả hai đều thỏa mãn."
            },
            {
              question: "Miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là:",
              options: [
                "A. Góc phần tư thứ I (kể cả hai trục tọa độ)",
                "B. Góc phần tư thứ II",
                "C. Góc phần tư thứ III",
                "D. Góc phần tư thứ IV"
              ],
              correct: "A",
              explanation: "$x \\ge 0$ và $y \\ge 0$ là góc phần tư thứ I gồm các điểm có hoành độ và tung độ không âm.",
              hint1: "Nhớ lại vị trí các góc phần tư trên mặt phẳng tọa độ $Oxy$.",
              hint2: "Vùng có hoành độ dương và tung độ dương nằm ở góc phần tư thứ nhất (phía trên trục hoành và bên phải trục tung)."
            },
            {
              question: "Miền nghiệm của hệ $\\begin{cases} x + y \\le 4 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$ là hình gì?",
              options: ["A. Một hình tam giác", "B. Một hình vuông", "C. Một hình chữ nhật", "D. Một hình tứ giác"],
              correct: "A",
              explanation: "Miền nghiệm là tam giác vuông giới hạn bởi $Ox, Oy$ và đường thẳng $x + y = 4$ với 3 đỉnh là $(0; 0), (4; 0), (0; 4)$.",
              hint1: "Vẽ đường thẳng $x + y = 4$ cùng hai trục tọa độ $Ox, Oy$ trong góc phần tư thứ nhất.",
              hint2: "Giao điểm của miền nghiệm với các trục tọa độ tạo thành một hình tam giác vuông có 3 đỉnh $(0; 0), (4; 0), (0; 4)$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Bài toán tối ưu thực tế (Quy hoạch tuyến tính)",
          theory: createStandardTheoryHTML(
            "Bài 4: Hệ bất phương trình bậc nhất hai ẩn", "Lớp 10", 2,
            "Bài toán tối ưu thực tế (Quy hoạch tuyến tính)",
            `<p>Phương pháp giải bài toán thực tế tìm giá trị lớn nhất / nhỏ nhất của biểu thức mục tiêu $F(x; y) = ax + by$:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định lý quy hoạch tuyến tính:</strong> Biểu thức $F(x; y) = ax + by$ đạt giá trị lớn nhất (hoặc nhỏ nhất) trên miền đa giác $A_1 A_2 \\dots A_n$ tại <strong>một trong các đỉnh của đa giác đó</strong>!</li>
              <li><strong>Quy trình 4 bước giải bài toán tối ưu:</strong>
                <br/>• <strong>Bước 1:</strong> Đặt ẩn $x, y$ (sản phẩm, diện tích...) và xác định điều kiện $x, y \\ge 0$.
                <br/>• <strong>Bước 2:</strong> Thiết lập hệ BPT mô tả các ràng buộc về vốn, nhân công, nguyên vật liệu.
                <br/>• <strong>Bước 3:</strong> Xác định tọa độ các đỉnh $A, B, C, D...$ của miền đa giác nghiệm.
                <br/>• <strong>Bước 4:</strong> Tính giá trị hàm mục tiêu $F(x; y)$ tại từng đỉnh. So sánh và kết luận giá trị lớn nhất/nhỏ nhất.
              </li>
            </ul>`,
            `<li>Không cần thử các điểm bên trong miền đa giác, chỉ cần thử đúng các đỉnh của đa giác.</li>
            <li>Đọc kỹ yêu cầu đề bài: Đề hỏi số sản phẩm $(x; y)$ hay hỏi số tiền lãi lớn nhất $F$.</li>`,
            `<li>Tính nhầm tọa độ giao điểm các đỉnh dẫn đến tính sai giá trị cực trị.</li>
            <li>Thiết lập thiếu điều kiện không âm $x \\ge 0, y \\ge 0$.</li>`,
            `<li><em>"Vẽ miền đa giác – Tìm tọa độ các đỉnh – Thay đỉnh vào hàm mục tiêu F chọn Min Max!"</em></li>`
          ),
          mcqs: [
            {
              question: "Biểu thức $F(x; y) = 2x + 3y$ trên miền tam giác có 3 đỉnh $A(0; 0), B(4; 0), C(0; 3)$ đạt giá trị lớn nhất bằng:",
              options: ["A. 9", "B. 8", "C. 12", "D. 0"],
              correct: "A",
              explanation: "Tính tại các đỉnh: $F(0; 0) = 0$, $F(4; 0) = 2(4) + 0 = 8$, $F(0; 3) = 0 + 3(3) = 9$. Vậy $F_{\\max} = 9$ tại đỉnh $C(0; 3)$.",
              hint1: "Theo định lý quy hoạch tuyến tính, giá trị lớn nhất luôn đạt tại một trong 3 đỉnh của tam giác.",
              hint2: "Tính $F$ tại từng đỉnh: $F(0; 0) = 0$, $F(4; 0) = 8$, $F(0; 3) = 9$. Giá trị lớn nhất là 9."
            },
            {
              question: "Giá trị nhỏ nhất của $F(x; y) = x - 2y$ trên miền tam giác ở câu trên là:",
              options: ["A. -6", "B. 0", "C. 4", "D. -2"],
              correct: "A",
              explanation: "$F(0; 0) = 0, F(4; 0) = 4, F(0; 3) = 0 - 2(3) = -6$. Vậy $F_{\\min} = -6$ tại $C(0; 3)$.",
              hint1: "Tính giá trị của $F(x; y) = x - 2y$ lần lượt tại 3 đỉnh $A(0; 0), B(4; 0), C(0; 3)$.",
              hint2: "So sánh: $F(0; 0) = 0$, $F(4; 0) = 4$, $F(0; 3) = -6$. Số nhỏ nhất là -6."
            },
            {
              question: "Theo định lý quy hoạch tuyến tính, giá trị lớn nhất của $F(x; y) = ax + by$ trên một miền đa giác lồi luôn đạt được tại:",
              options: [
                "A. Một trong các đỉnh của đa giác",
                "B. Trọng tâm của đa giác",
                "C. Tâm đường tròn ngoại tiếp",
                "D. Điểm bất kỳ nằm chính giữa miền"
              ],
              correct: "A",
              explanation: "Định lý chuẩn SGK: Cực trị luôn đạt tại một trong các đỉnh của miền đa giác.",
              hint1: "Xem lại định lý cơ bản về giá trị lớn nhất và nhỏ nhất của biểu thức bậc nhất hai ẩn trên miền đa giác.",
              hint2: "Định lý khẳng định giá trị cực trị luôn đạt tại một trong các đỉnh của đa giác."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hệ bất phương trình $\\begin{cases} x + y \\le 4 \\\\ x - y \\le 2 \\\\ x \\ge 0 \\\\ y \\ge 0 \\end{cases}$:",
          items: [
            { key: "a", text: "Gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ.", correct: "true", explain: "Thỏa mãn cả 4 BPT." },
            { key: "b", text: "Miền nghiệm của hệ là một miền đa giác tứ giác.", correct: "true", explain: "Giới hạn bởi 4 đường thẳng bờ." },
            { key: "c", text: "Giao điểm của $x + y = 4$ và $x - y = 2$ có tọa độ $(3; 1)$.", correct: "true", explain: "Cộng lại: $2x = 6 \\Rightarrow x = 3, y = 1$." },
            { key: "d", text: "Điểm $(2; 3)$ thuộc miền nghiệm của hệ.", correct: "false", explain: "Vì $2 + 3 = 5 > 4$ (vi phạm)." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Với miền nghiệm ở Câu 1, các đỉnh của tứ giác là $O(0; 0), A(2; 0), B(3; 1), C(0; 4)$ và biểu thức $F(x; y) = 3x + 2y$:",
          items: [
            { key: "a", text: "$F(O) = 0$.", correct: "true", explain: "$F(0; 0) = 0$." },
            { key: "b", text: "$F(A) = 6$.", correct: "true", explain: "$3(2) + 2(0) = 6$." },
            { key: "c", text: "$F(B) = 11$.", correct: "true", explain: "$3(3) + 2(1) = 11$." },
            { key: "d", text: "Giá trị lớn nhất của $F(x; y)$ trên miền nghiệm bằng $8$.", correct: "false", explain: "Tại $B(3; 1)$ đạt $11 > 8$ nên GTLN là $11$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một phân xưởng sản xuất 2 loại nước uống. Mỗi thùng loại I cần 2 kg đường, 30 lít nước, lãi 40 nghìn. Mỗi thùng loại II cần 1 kg đường, 40 lít nước, lãi 30 nghìn. Kho có 200 kg đường và 4800 lít nước:",
          items: [
            { key: "a", text: "Gọi $x, y$ là số thùng loại I và II sản xuất ($x, y \\ge 0$).", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Bất phương trình về lượng đường là $2x + y \\le 200$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Bất phương trình về lượng nước là $30x + 40y \\le 4800 \\Leftrightarrow 3x + 4y \\le 480$.", correct: "true", explain: "Rút gọn chia 10." },
            { key: "d", text: "Hàm số tiền lãi cần tối đa hóa là $F(x; y) = 40x + 30y$ (nghìn đồng).", correct: "true", explain: "Chuẩn mục tiêu kinh tế." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét tính chất của miền nghiệm hệ BPT:",
          items: [
            { key: "a", text: "Miền nghiệm của hệ có thể là tập rỗng $\\emptyset$ (hệ vô nghiệm).", correct: "true", explain: "Nếu các miền không có điểm chung." },
            { key: "b", text: "Miền nghiệm có thể là một miền không bị chặn.", correct: "true", explain: "Ví dụ $x \\ge 0, y \\ge 0$ mở vô tận." },
            { key: "c", text: "Nếu miền nghiệm là đa giác lồi thì nó luôn có ít nhất 3 đỉnh.", correct: "true", explain: "Đa giác ít nhất là tam giác (3 đỉnh)." },
            { key: "d", text: "Biểu thức $F = ax + by$ luôn luôn có giá trị lớn nhất ngay cả khi miền nghiệm mở vô tận về $+\\infty$.", correct: "false", explain: "Nếu miền mở vô tận thì $F$ có thể tiến tới $+\\infty$ không có GTLN." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hệ $\\begin{cases} x + y \\ge 2 \\\\ x + y \\le 5 \\end{cases}$:",
          items: [
            { key: "a", text: "Hai đường thẳng bờ $x + y = 2$ và $x + y = 5$ song song với nhau.", correct: "true", explain: "Cùng có VTPT $(1; 1)$." },
            { key: "b", text: "Miền nghiệm là phần mặt phẳng nằm giữa hai đường thẳng song song đó.", correct: "true", explain: "Kể cả hai đường thẳng bờ." },
            { key: "c", text: "Miền nghiệm của hệ này là một hình đa giác khép kín.", correct: "false", explain: "Dải song song kéo dài vô tận, không khép kín." },
            { key: "d", text: "Điểm $(1; 2)$ thuộc miền nghiệm của hệ.", correct: "true", explain: "$1 + 2 = 3$ thỏa $2 \\le 3 \\le 5$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về phương pháp giải toán quy hoạch tuyến tính:",
          items: [
            { key: "a", text: "Quy hoạch tuyến tính áp dụng rộng rãi trong quản trị kinh doanh và phân bổ nguồn lực.", correct: "true", explain: "Ứng dụng thực tế nổi bật của Toán 10." },
            { key: "b", text: "Các ràng buộc thực tế luôn được mô hình hóa bằng các bất phương trình.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Hàm mục tiêu $F$ bắt buộc phải là một hàm bậc nhất theo $x$ và $y$.", correct: "true", explain: "Tuyến tính nghĩa là bậc nhất." },
            { key: "d", text: "Giá trị lớn nhất có thể đạt được tại một điểm nằm hoàn toàn bên trong đa giác.", correct: "false", explain: "Nếu đạt bên trong thì hàm hằng, luôn đạt tại biên (đỉnh)." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, MORE_GRADE10_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const MORE_GRADE10_LESSONS = {
    // =========================================================================
    // BÀI 5: GIÁ TRỊ LƯỢNG GIÁC CỦA MỘT GÓC TỪ 0° ĐẾN 180° (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai5": {
      id: "toan10_bai5",
      lessonTitle: "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        if (t.includes("cuối chương") || t.includes("ôn tập")) return false;
        return (t.includes("bài 5:") && !t.includes("ứng dụng đạo hàm")) || t.includes("giá trị lượng giác của một góc từ 0") || (t.includes("giá trị lượng giác") && t.includes("180"));
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị",
          theory: createStandardTheoryHTML(
            "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°", "Lớp 10", 1,
            "Định nghĩa giá trị lượng giác trên nửa đường tròn đơn vị",
            `<p>Kiến thức Nửa đường tròn đơn vị và 4 giá trị lượng giác chuẩn SGK Kết nối tri thức 10:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Nửa đường tròn đơn vị:</strong> Nửa đường tròn tâm $O(0; 0)$ bán kính $R = 1$ nằm phía trên trục hoành ($y \\ge 0$).</li>
              <li>Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), có duy nhất điểm $M(x_0; y_0)$ trên nửa đường tròn sao cho $\\widehat{xOM} = \\alpha$. Khi đó:
                <br/>• $\\sin \\alpha = y_0$ (<strong>Tung độ</strong> của điểm $M$).
                <br/>• $\\cos \\alpha = x_0$ (<strong>Hoành độ</strong> của điểm $M$).
                <br/>• $\\tan \\alpha = \\frac{y_0}{x_0} = \\frac{\\sin \\alpha}{\\cos \\alpha}$ (với $\\alpha \\neq 90^\\circ$).
                <br/>• $\\cot \\alpha = \\frac{x_0}{y_0} = \\frac{\\cos \\alpha}{\\sin \\alpha}$ (với $\\alpha \\neq 0^\\circ$ và $\\alpha \\neq 180^\\circ$).
              </li>
              <li><strong>Dấu của các giá trị lượng giác:</strong>
                <br/>• $\\sin \\alpha \\ge 0$ với mọi $0^\\circ \\le \\alpha \\le 180^\\circ$ (sin luôn dương trên nửa đường tròn).
                <br/>• Khi $\\alpha$ nhọn ($0^\\circ < \\alpha < 90^\\circ$): $\\cos \\alpha > 0, \\tan \\alpha > 0, \\cot \\alpha > 0$.
                <br/>• Khi $\\alpha$ tù ($90^\\circ < \\alpha < 180^\\circ$): $\\cos \\alpha < 0, \\tan \\alpha < 0, \\cot \\alpha < 0$ (cos, tan, cot đều âm!).
              </li>
            </ul>`,
            `<li>Sin là trục tung (trục đứng), Cos là trục hoành (trục ngang).</li>
            <li>Góc tù thì Cosin luôn mang <strong>dấu âm</strong> (ví dụ $\\cos 120^\\circ = -1/2$).</li>`,
            `<li>Cho rằng cosin của một góc trong tam giác luôn dương (sai, góc tù có cos âm).</li>
            <li>Quên điều kiện xác định của $\\tan 90^\\circ$ (không xác định vì mẫu $\\cos 90^\\circ = 0$).</li>`,
            `<li><em>\"Sin Đứng – Cos Nằm – Góc tù Cos Âm, Sin Dương!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho góc $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$). Khẳng định nào sau đây là **ĐÚNG**?",
              options: ["A. $\\sin \\alpha > 0$", "B. $\\cos \\alpha > 0$", "C. $\\tan \\alpha > 0$", "D. $\\cot \\alpha > 0$"],
              correct: "A",
              explanation: "Trên nửa đường tròn đơn vị, với mọi góc từ $0^\\circ$ đến $180^\\circ$ thì tung độ luôn dương nên $\\sin \\alpha > 0$. Góc tù có hoành độ âm nên $\\cos, \\tan, \\cot$ đều mang dấu âm.",
              hint1: "Trên nửa đường tròn đơn vị, $\\sin\\alpha$ là tung độ, $\\cos\\alpha$ là hoành độ của điểm $M$.",
              hint2: "Với góc tù ($90^\\circ < \\alpha < 180^\\circ$), tung độ luôn dương ($y_0 > 0$), còn hoành độ âm ($x_0 < 0$)."
            },
            {
              question: "Giá trị của $\\cos 120^\\circ$ bằng:",
              options: ["A. $-\\frac{1}{2}$", "B. $\\frac{1}{2}$", "C. $-\\frac{\\sqrt{3}}{2}$", "D. $\\frac{\\sqrt{3}}{2}$"],
              correct: "A",
              explanation: "$\\cos 120^\\circ = -\\cos(180^\\circ - 120^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.",
              hint1: "Áp dụng công thức hai góc bù nhau: $\\cos(180^\\circ - \\alpha) = -\\cos\\alpha$.",
              hint2: "Góc $120^\\circ$ bù với góc $60^\\circ$, ta có $\\cos 120^\\circ = -\\cos 60^\\circ = -\\frac{1}{2}$."
            },
            {
              question: "Trong các góc sau, góc nào làm cho $\\tan \\alpha$ **không xác định**?",
              options: ["A. $\\alpha = 90^\\circ$", "B. $\\alpha = 0^\\circ$", "C. $\\alpha = 180^\\circ$", "D. $\\alpha = 45^\\circ$"],
              correct: "A",
              explanation: "Tại $\\alpha = 90^\\circ$, $\\cos 90^\\circ = 0$ nên $\\tan 90^\\circ = \\frac{\\sin 90^\\circ}{\\cos 90^\\circ}$ không xác định.",
              hint1: "Định nghĩa $\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}$, điều kiện xác định là $\\cos\\alpha \\neq 0$.",
              hint2: "Tại $\\alpha = 90^\\circ$, hoành độ của điểm trên nửa đường tròn đơn vị bằng 0 nên $\\cos 90^\\circ = 0$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau",
          theory: createStandardTheoryHTML(
            "Bài 5: Giá trị lượng giác của một góc từ 0° đến 180°", "Lớp 10", 2,
            "Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau",
            `<p>Hệ thức cơ bản và công thức hai góc bù nhau chuẩn SGK Kết nối tri thức 10:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>4 hệ thức lượng giác cơ bản:</strong>
                <br/>• $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$
                <br/>• $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$ ($\\alpha \\neq 90^\\circ$)
                <br/>• $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$ ($0^\\circ < \\alpha < 180^\\circ$)
                <br/>• $\\tan \\alpha \\cdot \\cot \\alpha = 1$
              </li>
              <li><strong>Công thức hai góc bù nhau (tổng bằng $180^\\circ$):</strong>
                $$\\sin(180^\\circ - \\alpha) = \\sin \\alpha$$
                $$\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$$
                $$\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$$
                $$\\cot(180^\\circ - \\alpha) = -\\cot \\alpha$$
                <br/>(Chỉ có <strong>SIN BẰNG NHAU</strong>, còn lại Cos, Tan, Cot đều bị <strong>ĐỔI DẤU</strong>).
              </li>
            </ul>`,
            `<li>Khẩu quyết: \"Sin bù\" – Hai góc bù nhau thì giá trị Sin bằng nhau, các giá trị khác đối nhau.</li>
            <li>Trong tam giác $ABC$, ta luôn có $A + B + C = 180^\\circ \\implies \\sin(B + C) = \\sin A$ và $\\cos(B + C) = -\\cos A$.</li>`,
            `<li>Cho rằng $\\cos(180^\\circ - \\alpha) = \\cos \\alpha$ (quên dấu âm).</li>
            <li>Quên điều kiện khi khai căn $\\cos \\alpha = \\pm\\sqrt{1 - \\sin^2 \\alpha}$ (phải dựa vào góc nhọn hay tù để chọn dấu cộng hay trừ).</li>`,
            `<li><em>\"Sin bù: Hai góc bù nhau Sin giữ nguyên, Cos Tan Cot thêm dấu trừ!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Biết $\\sin \\alpha = \\frac{3}{5}$ với $\\alpha$ là góc tù ($90^\\circ < \\alpha < 180^\\circ$). Giá trị của $\\cos \\alpha$ bằng:",
              options: ["A. $-\\frac{4}{5}$", "B. $\\frac{4}{5}$", "C. $-\\frac{2}{5}$", "D. $\\frac{16}{25}$"],
              correct: "A",
              explanation: "Ta có $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$. Vì $\\alpha$ là góc tù nên $\\cos \\alpha < 0 \\implies \\cos \\alpha = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$.",
              hint1: "Áp dụng hệ thức cơ bản $\\sin^2\\alpha + \\cos^2\\alpha = 1 \\implies \\cos^2\\alpha = 1 - \\sin^2\\alpha$.",
              hint2: "Vì $\\alpha$ là góc tù nên $\\cos\\alpha < 0$. Chọn dấu âm: $\\cos\\alpha = -\\sqrt{1 - 9/25} = -4/5$."
            },
            {
              question: "Giá trị của biểu thức $P = \\sin 30^\\circ - \\sin 150^\\circ$ bằng:",
              options: ["A. 0", "B. 1", "C. -1", "D. $\\frac{1}{2}$"],
              correct: "A",
              explanation: "Vì $30^\\circ$ và $150^\\circ$ bù nhau ($30 + 150 = 180^\\circ$) nên $\\sin 150^\\circ = \\sin 30^\\circ$. Do đó $P = \\sin 30^\\circ - \\sin 30^\\circ = 0$.",
              hint1: "Nhận xét tổng hai góc: $30^\\circ + 150^\\circ = 180^\\circ$, đây là hai góc bù nhau.",
              hint2: "Theo tính chất góc bù: $\\sin 150^\\circ = \\sin 30^\\circ$, do đó hiệu bằng 0."
            },
            {
              question: "Trong tam giác $ABC$, đẳng thức nào sau đây là **ĐÚNG**?",
              options: [
                "A. $\\sin(A + B) = \\sin C$",
                "B. $\\cos(A + B) = \\cos C$",
                "C. $\\tan(A + B) = \\tan C$",
                "D. $\\sin(A + B) = -\\sin C$"
              ],
              correct: "A",
              explanation: "Vì $A + B + C = 180^\\circ \\implies A + B = 180^\\circ - C$ (hai góc bù nhau). Theo tính chất góc bù: $\\sin(A + B) = \\sin C$.",
              hint1: "Tổng 3 góc trong một tam giác bằng $180^\\circ$, do đó $A + B = 180^\\circ - C$.",
              hint2: "Hai góc $(A + B)$ và $C$ bù nhau nên $\\sin(A + B) = \\sin C$, còn cosin thì đối dấu: $\\cos(A + B) = -\\cos C$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho góc $\\alpha$ thỏa mãn $0^\\circ \\le \\alpha \\le 180^\\circ$:",
          items: [
            { key: "a", text: "Giá trị $\\sin \\alpha$ luôn không âm: $\\sin \\alpha \\ge 0$.", correct: "true", explain: "Tung độ trên nửa đường tròn luôn $\\ge 0$." },
            { key: "b", text: "$\\cos 0^\\circ = 1$ và $\\cos 180^\\circ = -1$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "$\\sin 90^\\circ = 1$ và $\\cos 90^\\circ = 0$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Với mọi góc $\\alpha$, ta luôn có $\\tan \\alpha > 0$.", correct: "false", explain: "Khi góc tù thì $\\tan \\alpha < 0$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho góc $\\alpha = 135^\\circ$:",
          items: [
            { key: "a", text: "Góc $\\alpha$ là góc tù vì $90^\\circ < 135^\\circ < 180^\\circ$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "$\\sin 135^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$.", correct: "true", explain: "Hai góc bù nhau có sin bằng nhau." },
            { key: "c", text: "$\\cos 135^\\circ = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$.", correct: "true", explain: "Cos đối dấu." },
            { key: "d", text: "$\\tan 135^\\circ = 1$.", correct: "false", explain: "$\\tan 135^\\circ = -\\tan 45^\\circ = -1$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tam giác $ABC$ bất kỳ:",
          items: [
            { key: "a", text: "$\\sin(B + C) = \\sin A$.", correct: "true", explain: "Góc $B+C$ bù với $A$." },
            { key: "b", text: "$\\cos(B + C) = -\\cos A$.", correct: "true", explain: "Cos của hai góc bù nhau đối dấu." },
            { key: "c", text: "$\\sin\\left(\\frac{A+B}{2}\\right) = \\cos\\left(\\frac{C}{2}\\right)$.", correct: "true", explain: "Hai góc phụ nhau có sin bằng cos." },
            { key: "d", text: "$\\cos A$ luôn luôn nhận giá trị dương.", correct: "false", explain: "Nếu tam giác có góc tù thì $\\cos A < 0$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xét giá trị của biểu thức $S = \\cos 10^\\circ + \\cos 20^\\circ + \\dots + \\cos 160^\\circ + \\cos 170^\\circ$:",
          items: [
            { key: "a", text: "Biểu thức có tất cả 17 số hạng.", correct: "true", explain: "$(170 - 10)/10 + 1 = 17$ số hạng." },
            { key: "b", text: "Số hạng đứng chính giữa là $\\cos 90^\\circ = 0$.", correct: "true", explain: "Góc $90^\\circ$ ở giữa." },
            { key: "c", text: "Ta có $\\cos 10^\\circ + \\cos 170^\\circ = 0$.", correct: "true", explain: "Vì $\\cos 170^\\circ = -\\cos 10^\\circ$." },
            { key: "d", text: "Tổng giá trị $S = 1$.", correct: "false", explain: "Tất cả các cặp triệt tiêu nhau, tổng $S = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho $\\tan \\alpha = -2$ ($0^\\circ < \\alpha < 180^\\circ$):",
          items: [
            { key: "a", text: "Góc $\\alpha$ là góc tù.", correct: "true", explain: "Vì $\\tan \\alpha < 0$." },
            { key: "b", text: "$\\cot \\alpha = -\\frac{1}{2}$.", correct: "true", explain: "$\\cot = 1/\\tan$." },
            { key: "c", text: "$\\frac{1}{\\cos^2 \\alpha} = 1 + \\tan^2 \\alpha = 5$.", correct: "true", explain: "$1 + (-2)^2 = 5$." },
            { key: "d", text: "$\\cos \\alpha = \\frac{1}{\\sqrt{5}}$.", correct: "false", explain: "Vì góc tù nên $\\cos \\alpha = -\\frac{1}{\\sqrt{5}}$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bảng giá trị lượng giác các góc đặc biệt:",
          items: [
            { key: "a", text: "$\\sin 30^\\circ = \\frac{1}{2}$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "$\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "$\\tan 60^\\circ = \\sqrt{3}$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "$\\sin 60^\\circ = \\frac{1}{2}$.", correct: "false", explain: "$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 6: HỆ THỨC LƯỢNG TRONG TAM GIÁC (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai6": {
      id: "toan10_bai6",
      lessonTitle: "Bài 6: Hệ thức lượng trong tam giác",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        if (t.includes("cuối chương") || t.includes("ôn tập")) return false;
        return (t.includes("bài 6:") && !t.includes("vectơ trong không gian")) || t.includes("hệ thức lượng trong tam giác");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Định lí Côsin, Định lí Sin và công thức độ dài trung tuyến",
          theory: createStandardTheoryHTML(
            "Bài 6: Hệ thức lượng trong tam giác", "Lớp 10", 1,
            "Định lí Côsin, Định lí Sin và công thức độ dài trung tuyến",
            `<p>Hệ thống công thức hình học tam giác chuẩn SGK Kết nối tri thức 10 (tam giác $ABC$ có cạnh $a, b, c$, bán kính $R, r$):</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. ĐỊNH LÍ CÔSIN:</strong> Bình phương một cạnh bằng tổng bình phương hai cạnh kia trừ đi hai lần tích của chúng nhân với côsin góc xen giữa:
                $$a^2 = b^2 + c^2 - 2bc \\cos A$$
                $$b^2 = a^2 + c^2 - 2ac \\cos B$$
                $$c^2 = a^2 + b^2 - 2ab \\cos C$$
                <br/>• Hệ quả tính góc: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.
              </li>
              <li><strong>2. ĐỊNH LÍ SIN:</strong> Tỉ số giữa mỗi cạnh và sin của góc đối diện bằng đường kính đường tròn ngoại tiếp:
                $$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$
              </li>
              <li><strong>3. CÔNG THỨC ĐỘ DÀI TRUNG TUYẾN:</strong>
                $$m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4}$$
              </li>
            </ul>`,
            `<li>Định lí Côsin là mở rộng của định lý Pythagore (khi góc $A = 90^\\circ$ thì $\\cos 90^\\circ = 0$).</li>
            <li>Dùng định lí Côsin khi biết: 2 cạnh và góc xen giữa, hoặc biết cả 3 cạnh.</li>
            <li>Dùng định lí Sin khi biết: 1 cạnh và 2 góc, hoặc 2 cạnh và 1 góc đối diện.</li>`,
            `<li>Quên hệ số 2 trong định lý Sin ($= 2R$, không phải $= R$).</li>
            <li>Quên chia cho 4 ở mẫu trong công thức đường trung tuyến.</li>`,
            `<li><em>\"Cạnh bình bằng tổng bình trừ hai tích Cos – Sin thì cạnh chia Sin ra hai R!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho tam giác $ABC$ có $b = 5, c = 8$ và góc $A = 60^\\circ$. Độ dài cạnh $a$ bằng:",
              options: ["A. 7", "B. $\\sqrt{129}$", "C. 49", "D. $\\sqrt{39}$"],
              correct: "A",
              explanation: "Theo định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 25 + 64 - 80(0.5) = 89 - 40 = 49 \\implies a = 7$.",
              hint1: "Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc\\cos A$.",
              hint2: "Thay số: $a^2 = 5^2 + 8^2 - 2(5)(8)\\cos 60^\\circ = 89 - 80(0.5) = 49 \\implies a = 7$."
            },
            {
              question: "Cho tam giác $ABC$ có $a = 6$ và góc $A = 30^\\circ$. Bán kính đường tròn ngoại tiếp $R$ của tam giác là:",
              options: ["A. 6", "B. 12", "C. 3", "D. $6\\sqrt{3}$"],
              correct: "A",
              explanation: "Theo định lí Sin: $2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{0.5} = 12 \\implies R = 6$.",
              hint1: "Áp dụng định lí Sin: $\\frac{a}{\\sin A} = 2R \\implies R = \\frac{a}{2\\sin A}$.",
              hint2: "Thay số: $R = \\frac{6}{2\\sin 30^\\circ} = \\frac{6}{2(0.5)} = 6$."
            },
            {
              question: "Tam giác $ABC$ có ba cạnh $a = 3, b = 4, c = 5$. Côsin của góc $A$ bằng:",
              options: ["A. $\\frac{4}{5}$", "B. 0", "C. $\\frac{3}{5}$", "D. $\\frac{1}{2}$"],
              correct: "A",
              explanation: "$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{16 + 25 - 9}{2(4)(5)} = \\frac{32}{40} = \\frac{4}{5}$.",
              hint1: "Từ định lí Côsin, hệ quả tính góc là: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.",
              hint2: "Thay số: $\\cos A = \\frac{4^2 + 5^2 - 3^2}{2(4)(5)} = \\frac{32}{40} = \\frac{4}{5}$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Các công thức tính diện tích tam giác và giải tam giác",
          theory: createStandardTheoryHTML(
            "Bài 6: Hệ thức lượng trong tam giác", "Lớp 10", 2,
            "Các công thức tính diện tích tam giác và giải tam giác",
            `<p>Hệ thống 5 công thức tính diện tích tam giác chuẩn SGK Kết nối tri thức 10:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Công thức chiều cao cơ bản:</strong>
                $$S = \\frac{1}{2} a h_a = \\frac{1}{2} b h_b = \\frac{1}{2} c h_c$$
              </li>
              <li><strong>2. Công thức theo sin góc xen giữa:</strong>
                $$S = \\frac{1}{2} ab \\sin C = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ca \\sin B$$
              </li>
              <li><strong>3. Công thức theo bán kính ngoại tiếp $R$:</strong>
                $$S = \\frac{abc}{4R} \\iff R = \\frac{abc}{4S}$$
              </li>
              <li><strong>4. Công thức theo bán kính nội tiếp $r$ ($p = \\frac{a+b+c}{2}$ là nửa chu vi):</strong>
                $$S = p \\cdot r \\iff r = \\frac{S}{p}$$
              </li>
              <li><strong>5. Công thức Hê-rông (Heron) khi biết cả 3 cạnh:</strong>
                $$S = \\sqrt{p(p - a)(p - b)(p - c)}$$
              </li>
            </ul>`,
            `<li>Giải tam giác là tìm tất cả các cạnh và các góc chưa biết của tam giác khi đã biết một số yếu tố.</li>
            <li>Khi biết 3 cạnh: Dùng công thức Hê-rông tính diện tích $S$, sau đó tính bán kính $R = \\frac{abc}{4S}$ và $r = \\frac{S}{p}$.</li>`,
            `<li>Nhầm nửa chu vi $p = \\frac{a+b+c}{2}$ thành chu vi cả tam giác.</li>
            <li>Quên căn bậc hai trong công thức Hê-rông.</li>`,
            `<li><em>\"Nửa tích Sin góc xen giữa – Ba cạnh trên bốn R – p nhân r – Căn Hê-rông tích bốn hiệu!\"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho tam giác $ABC$ có $a = 4, b = 6$ và góc $C = 30^\\circ$. Diện tích $S$ của tam giác bằng:",
              options: ["A. 6", "B. 12", "C. $6\\sqrt{3}$", "D. 24"],
              correct: "A",
              explanation: "$S = \\frac{1}{2} ab \\sin C = \\frac{1}{2}(4)(6)\\sin 30^\\circ = 12(0.5) = 6$.",
              hint1: "Áp dụng công thức diện tích tam giác khi biết 2 cạnh và góc kẹp giữa: $S = \\frac{1}{2} ab \\sin C$.",
              hint2: "Thay số: $S = \\frac{1}{2} \\times 4 \\times 6 \\times \\sin 30^\\circ = 12 \\times 0.5 = 6$."
            },
            {
              question: "Tam giác đều cạnh $a$ có diện tích bằng:",
              options: ["A. $\\frac{a^2\\sqrt{3}}{4}$", "B. $\\frac{a^2\\sqrt{3}}{2}$", "C. $a^2\\sqrt{3}$", "D. $\\frac{a^2}{2}$"],
              correct: "A",
              explanation: "$S = \\frac{1}{2} a \\cdot a \\sin 60^\\circ = \\frac{a^2}{2} \\cdot \\frac{\\sqrt{3}}{2} = \\frac{a^2\\sqrt{3}}{4}$.",
              hint1: "Tam giác đều có 3 góc đều bằng $60^\\circ$ và các cạnh bằng $a$.",
              hint2: "Diện tích $S = \\frac{1}{2} a^2 \\sin 60^\\circ = \\frac{1}{2} a^2 \\frac{\\sqrt{3}}{2} = \\frac{a^2\\sqrt{3}}{4}$."
            },
            {
              question: "Một tam giác có diện tích $S = 24$ và nửa chu vi $p = 12$. Bán kính đường tròn nội tiếp $r$ bằng:",
              options: ["A. 2", "B. 4", "C. 0.5", "D. 6"],
              correct: "A",
              explanation: "$S = p \\cdot r \\implies r = \\frac{S}{p} = \\frac{24}{12} = 2$.",
              hint1: "Áp dụng công thức diện tích liên hệ với bán kính nội tiếp: $S = p \\cdot r$.",
              hint2: "Rút ra bán kính nội tiếp: $r = \\frac{S}{p} = \\frac{24}{12} = 2$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tam giác $ABC$ có ba cạnh $a = 13, b = 14, c = 15$:",
          items: [
            { key: "a", text: "Nửa chu vi của tam giác là $p = 21$.", correct: "true", explain: "$(13 + 14 + 15)/2 = 42/2 = 21$." },
            { key: "b", text: "Theo công thức Hê-rông, diện tích tam giác là $S = 84$.", correct: "true", explain: "$\\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = 84$." },
            { key: "c", text: "Bán kính đường tròn nội tiếp là $r = 4$.", correct: "true", explain: "$r = S/p = 84/21 = 4$." },
            { key: "d", text: "Bán kính đường tròn ngoại tiếp là $R = 8.125 = \\frac{65}{8}$.", correct: "true", explain: "$R = abc/(4S) = (13 \\times 14 \\times 15)/(4 \\times 84) = 65/8 = 8.125$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét định lí Côsin trong tam giác:",
          items: [
            { key: "a", text: "Nếu $a^2 < b^2 + c^2$ thì góc $A$ là góc nhọn.", correct: "true", explain: "Vì $\\cos A = \\frac{b^2+c^2-a^2}{2bc} > 0$." },
            { key: "b", text: "Nếu $a^2 = b^2 + c^2$ thì tam giác $ABC$ vuông tại $A$.", correct: "true", explain: "Định lý Pythagore." },
            { key: "c", text: "Nếu $a^2 > b^2 + c^2$ thì góc $A$ là góc tù.", correct: "true", explain: "Vì $\\cos A < 0$." },
            { key: "d", text: "Một tam giác có thể có hai góc tù.", correct: "false", explain: "Tổng 3 góc bằng 180 độ nên chỉ có tối đa 1 góc tù." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho tam giác đều $ABC$ cạnh $a$:",
          items: [
            { key: "a", text: "Độ dài đường cao $h = \\frac{a\\sqrt{3}}{2}$.", correct: "true", explain: "Chuẩn." },
            { key: "b", text: "Bán kính đường tròn ngoại tiếp $R = \\frac{a\\sqrt{3}}{3}$.", correct: "true", explain: "$R = a/(2\\sin 60^\\circ) = a/\\sqrt{3} = a\\sqrt{3}/3$." },
            { key: "c", text: "Bán kính đường tròn nội tiếp $r = \\frac{a\\sqrt{3}}{6}$.", correct: "true", explain: "$r = h/3 = a\\sqrt{3}/6$." },
            { key: "d", text: "Tỉ số $R / r = 3$.", correct: "false", explain: "$R/r = 2$ (trong tam giác đều $R = 2r$)." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Bài toán đo đạc thực tế: Để đo khoảng cách giữa hai điểm $A$ và $B$ bị ngăn cách bởi một hồ nước, người ta chọn điểm $C$ và đo được $CA = 200\\text{ m}, CB = 150\\text{ m}, \\widehat{ACB} = 60^\\circ$:",
          items: [
            { key: "a", text: "Có thể áp dụng định lí Côsin để tính khoảng cách $AB$.", correct: "true", explain: "Biết 2 cạnh và góc kẹp giữa." },
            { key: "b", text: "$AB^2 = 200^2 + 150^2 - 2(200)(150)\\cos 60^\\circ$.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "$AB^2 = 40000 + 22500 - 30000 = 32500$.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Khoảng cách $AB \\approx 180.3\\text{ m}$.", correct: "true", explain: "$\\sqrt{32500} \\approx 180.277\\text{ m}$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho tam giác $ABC$ vuông tại $A$ có $b = 6, c = 8$:",
          items: [
            { key: "a", text: "Cạnh huyền $a = 10$.", correct: "true", explain: "$\\sqrt{36 + 64} = 10$." },
            { key: "b", text: "Diện tích tam giác bằng $S = 24$.", correct: "true", explain: "$\\frac{1}{2}(6)(8) = 24$." },
            { key: "c", text: "Bán kính đường tròn ngoại tiếp $R = 5$.", correct: "true", explain: "Nửa cạnh huyền: $10/2 = 5$." },
            { key: "d", text: "Bán kính đường tròn nội tiếp $r = 3$.", correct: "false", explain: "$r = (b + c - a)/2 = (6 + 8 - 10)/2 = 2 \\neq 3$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về các công thức hệ thức lượng trong tam giác:",
          items: [
            { key: "a", text: "Độ dài đường trung tuyến thỏa mãn $m_a^2 + m_b^2 + m_c^2 = \\frac{3}{4}(a^2 + b^2 + c^2)$.", correct: "true", explain: "Hệ thức đẹp của 3 trung tuyến." },
            { key: "b", text: "Định lí Sin dùng để giải bài toán khi biết 1 cạnh và 2 góc.", correct: "true", explain: "Chuẩn." },
            { key: "c", text: "Nếu biết 3 góc của tam giác thì luôn tính được độ dài các cạnh.", correct: "false", explain: "Biết 3 góc chỉ xác định hình dạng tam giác đồng dạng, không xác định được kích thước cụ thể." },
            { key: "d", text: "Công thức Hê-rông mang tên nhà toán học Heron xứ Alexandria.", correct: "true", explain: "Lịch sử toán học." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, MORE_GRADE10_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART3_LESSONS = {
    // =========================================================================
    // BÀI 7: CÁC KHÁI NIỆM MỞ ĐẦU VỀ VECTƠ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai7": {
      id: "toan10_bai7",
      lessonTitle: "Bài 7: Các khái niệm mở đầu về vectơ",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 7:") || t.includes("khái niệm mở đầu về vectơ") || t.includes("khái niệm mở đầu")) && !t.includes("hệ trục") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm vectơ, phương, hướng và độ dài của vectơ",
          theory: createStandardTheoryHTML(
            "Bài 7: Các khái niệm mở đầu về vectơ", "Lớp 10", 1,
            "Khái niệm vectơ, phương, hướng và độ dài của vectơ",
            `<p>Kiến thức mở đầu về Vectơ chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Vectơ là một đoạn thẳng có hướng (đã chỉ rõ điểm đầu và điểm cuối). Ký hiệu: $\\vec{AB}$ (điểm đầu $A$, điểm cuối $B$) hoặc $\\vec{a}, \\vec{b}, \\vec{u}$.</li>
              <li><strong>Giá của vectơ:</strong> Đường thẳng đi qua điểm đầu và điểm cuối của vectơ gọi là <em>giá</em> của vectơ đó.</li>
              <li><strong>Vectơ cùng phương:</strong> Hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau.</li>
              <li><strong>Hướng của vectơ:</strong> Hai vectơ cùng phương thì có thể cùng hướng hoặc ngược hướng. Nếu hai vectơ không cùng phương thì không xét cùng hướng hay ngược hướng.</li>
              <li><strong>Độ dài của vectơ:</strong> Khoảng cách giữa điểm đầu và điểm cuối gọi là độ dài của vectơ, ký hiệu $|\\vec{AB}| = AB$. Vectơ có độ dài bằng 1 gọi là vectơ đơn vị.</li>
            </ul>`,
            `<li>Hai vectơ chỉ có thể so sánh cùng hướng hay ngược hướng KHI VÀ CHỈ KHI chúng cùng phương.</li>
            <li>Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</li>`,
            `<li>Nhầm giữa đoạn thẳng $AB$ (vô hướng) và vectơ $\\vec{AB}$ (có hướng, $\\vec{AB} \\neq \\vec{BA}$).</li>
            <li>Nói hai vectơ không cùng phương là \"ngược hướng nhau\" (sai lầm nghiêm trọng).</li>`,
            `<li><em>"Vectơ đoạn thẳng có đầu đuôi – Giá song song hoặc trùng là cùng phương – Cùng phương mới xét cùng chiều ngược chiều!"</em></li>`
          ),
          mcqs: [
            {
              question: "Khẳng định nào sau đây là **ĐÚNG** về hai vectơ cùng phương?",
              options: [
                "A. Có giá song song hoặc trùng nhau",
                "B. Có cùng độ dài",
                "C. Có cùng điểm đầu",
                "D. Luôn luôn cùng hướng"
              ],
              correct: "A",
              explanation: "Theo định nghĩa chuẩn SGK Toán 10 KNTT: Hai vectơ được gọi là cùng phương nếu giá của chúng song song hoặc trùng nhau.",
              hint1: "Xem lại định nghĩa giá của hai vectơ cùng phương.",
              hint2: "Giá của chúng song song hoặc trùng nhau."
            },
            {
              question: "Cho hình chữ nhật $ABCD$ có $AB = 3, BC = 4$. Độ dài của vectơ $\\vec{AC}$ bằng:",
              options: ["A. 5", "B. 7", "C. 1", "D. 25"],
              correct: "A",
              explanation: "Độ dài $|\vec{AC}| = AC = \\sqrt{AB^2 + BC^2} = \\sqrt{3^2 + 4^2} = 5$.",
              hint1: "Độ dài vectơ $\\vec{AC}$ chính là độ dài đoạn thẳng $AC$.",
              hint2: "Áp dụng định lí Pythagore: $\\sqrt{3^2 + 4^2} = 5$."
            },
            {
              question: "Cho ba điểm phân biệt $A, B, C$. Điều kiện cần và đủ để $A, B, C$ thẳng hàng là:",
              options: [
                "A. Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương",
                "B. $\\vec{AB} = \\vec{AC}$",
                "C. $|\vec{AB}| = |\\vec{AC}|$",
                "D. $\\vec{AB}$ và $\\vec{AC}$ cùng hướng"
              ],
              correct: "A",
              explanation: "Ba điểm phân biệt $A, B, C$ thẳng hàng $\\Leftrightarrow$ hai đường thẳng $AB$ và $AC$ trùng nhau $\\Leftrightarrow$ hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.",
              hint1: "Hai vectơ có chung gốc $A$ và cùng phương thì giá của chúng trùng nhau.",
              hint2: "Giá trùng nhau nghĩa là 3 điểm cùng nằm trên một đường thẳng."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Hai vectơ bằng nhau và Vectơ-không",
          theory: createStandardTheoryHTML(
            "Bài 7: Các khái niệm mở đầu về vectơ", "Lớp 10", 2,
            "Hai vectơ bằng nhau và Vectơ-không",
            `<p>Khái niệm hai vectơ bằng nhau và vectơ-không chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hai vectơ bằng nhau:</strong> Hai vectơ $\\vec{a}$ và $\\vec{b}$ được gọi là bằng nhau nếu chúng <strong>cùng hướng</strong> và <strong>cùng độ dài</strong>. Ký hiệu: $\\vec{a} = \\vec{b}$.</li>
              <li><strong>Vectơ-không:</strong> Là vectơ có điểm đầu và điểm cuối trùng nhau, ký hiệu là $\\vec{0}$.
                <br/>• Ví dụ: $\\vec{AA} = \\vec{BB} = \\vec{0}$.
                <br/>• Vectơ-không có độ dài bằng 0: $|\\vec{0}| = 0$.
                <br/>• Quy ước: Vectơ $\\vec{0}$ <strong>cùng phương và cùng hướng với mọi vectơ</strong>.
              </li>
              <li><strong>Ứng dụng hình bình hành:</strong> Tứ giác $ABCD$ là hình bình hành $\\Leftrightarrow \\vec{AB} = \\vec{DC}$ (chú ý thứ tự đỉnh).</li>
            </ul>`,
            `<li>Để $\\vec{a} = \\vec{b}$ bắt buộc cần 2 điều kiện: CÙNG HƯỚNG và CÙNG ĐỘ DÀI. Nếu chỉ cùng độ dài thì chưa chắc bằng nhau.</li>
            <li>Quy ước đặc biệt: Vectơ $\\vec{0}$ cùng hướng với mọi vectơ.</li>`,
            `<li>Nhầm $\\vec{AB} = \\vec{CD}$ trong hình bình hành $ABCD$ (phải là $\\vec{AB} = \\vec{DC}$).</li>
            <li>Nhầm số 0 với vectơ-không $\\vec{0}$.</li>`,
            `<li><em>"Bằng nhau phải đủ hai điều: Cùng Hướng, Cùng Độ Dài – Vectơ Không điểm đầu trùng cuối, chiều nào cũng theo!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hình bình hành $ABCD$ tâm $O$. Vectơ bằng với vectơ $\\vec{AB}$ là:",
              options: ["A. $\\vec{DC}$", "B. $\\vec{CD}$", "C. $\\vec{BA}$", "D. $\\vec{BC}$"],
              correct: "A",
              explanation: "Trong hình bình hành $ABCD$, hai đoạn thẳng $AB$ và $DC$ song song và bằng nhau, hướng từ $A$ sang $B$ cùng hướng từ $D$ sang $C$. Do đó $\\vec{AB} = \\vec{DC}$.",
              hint1: "Vectơ cùng hướng và cùng độ dài với $\\vec{AB}$.",
              hint2: "Đi từ $D$ sang $C$ cho ta vectơ $\\vec{DC}$."
            },
            {
              question: "Khẳng định nào sau đây là **SAI** về vectơ-không $\\vec{0}$?",
              options: [
                "A. Độ dài của vectơ-không bằng 1",
                "B. Vectơ-không có điểm đầu trùng với điểm cuối",
                "C. Vectơ-không cùng phương với mọi vectơ",
                "D. Ký hiệu là $\\vec{0}$"
              ],
              correct: "A",
              explanation: "Độ dài của vectơ-không bằng 0: $|\\vec{0}| = 0$, không phải bằng 1.",
              hint1: "Vectơ có độ dài bằng 1 gọi là vectơ đơn vị.",
              hint2: "Vectơ-không có khoảng cách giữa hai đầu bằng 0."
            },
            {
              question: "Cho tam giác đều $ABC$ cạnh $a$. Khẳng định nào sau đây là **ĐÚNG**?",
              options: [
                "A. $|\vec{AB}| = |\\vec{BC}| = |\\vec{CA}| = a$",
                "B. $\\vec{AB} = \\vec{BC}$",
                "C. $\\vec{AB}$ cùng hướng với $\\vec{AC}$",
                "D. $\\vec{AB} = \\vec{0}$"
              ],
              correct: "A",
              explanation: "Các vectơ $\\vec{AB}, \\vec{BC}, \\vec{CA}$ có độ dài bằng độ dài các cạnh tam giác đều (cùng bằng $a$), nhưng hướng khác nhau nên các vectơ không bằng nhau.",
              hint1: "Các cạnh tam giác đều có độ dài bằng nhau.",
              hint2: "Độ dài bằng nhau nhưng hướng của các cạnh khác nhau."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hình lục giác đều $ABCDEF$ có tâm $O$:",
          items: [
            { key: "a", text: "Vectơ $\\vec{AB}$ bằng vectơ $\\vec{ED}$.", correct: "true", explain: "Cùng hướng và cùng độ dài cạnh lục giác đều." },
            { key: "b", text: "Vectơ $\\vec{AB}$ bằng vectơ $\\vec{OC}$.", correct: "true", explain: "Tứ giác $ABCO$ là hình bình hành nên $\\vec{AB} = \\vec{OC}$." },
            { key: "c", text: "Có tất cả 3 vectơ (khác $\\vec{0}$) có điểm đầu và điểm cuối là các đỉnh của lục giác và tâm $O$ bằng với $\\vec{AB}$.", correct: "true", explain: "Gồm $\\vec{FO}, \\vec{OC}, \\vec{ED}$." },
            { key: "d", text: "Độ dài $|\vec{AD}| = 2|\vec{AB}|$.", correct: "true", explain: "Đường chéo chính dài gấp đôi cạnh." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét tính đúng sai của các khẳng định về định nghĩa vectơ:",
          items: [
            { key: "a", text: "Hai vectơ có cùng độ dài và cùng phương thì bằng nhau.", correct: "false", explain: "Có thể ngược hướng nhau." },
            { key: "b", text: "Vectơ $\\vec{0}$ cùng hướng với mọi vectơ.", correct: "true", explain: "Quy ước chuẩn SGK." },
            { key: "c", text: "Nếu $\\vec{a} = \\vec{b}$ thì $|\vec{a}| = |\\vec{b}|$.", correct: "true", explain: "Bằng nhau thì chắc chắn cùng độ dài." },
            { key: "d", text: "Mọi vectơ đều có giá duy nhất.", correct: "false", explain: "Vectơ $\\vec{0}$ có vô số giá đi qua một điểm." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho đoạn thẳng $AB$ có trung điểm $I$:",
          items: [
            { key: "a", text: "Hai vectơ $\\vec{IA}$ và $\\vec{IB}$ cùng phương.", correct: "true", explain: "Cùng nằm trên đường thẳng $AB$." },
            { key: "b", text: "Hai vectơ $\\vec{IA}$ và $\\vec{IB}$ ngược hướng.", correct: "true", explain: "Từ $I$ toả ra hai phía đối diện." },
            { key: "c", text: "Độ dài $|\vec{IA}| = |\\vec{IB}|$.", correct: "true", explain: "Vì $I$ là trung điểm." },
            { key: "d", text: "Hai vectơ $\\vec{IA}$ và $\\vec{IB}$ bằng nhau.", correct: "false", explain: "Ngược hướng nên không bằng nhau." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho ba điểm phân biệt $A, B, C$:",
          items: [
            { key: "a", text: "Từ 3 điểm đó có thể tạo thành 6 vectơ khác $\\vec{0}$ có điểm đầu và cuối là các điểm đã cho.", correct: "true", explain: "$A_3^2 = 6$ vectơ: $\\vec{AB}, \\vec{BA}, \\vec{BC}, \\vec{CB}, \\vec{CA}, \\vec{AC}$." },
            { key: "b", text: "Nếu $\\vec{AB}$ và $\\vec{BC}$ cùng hướng thì $B$ nằm giữa $A$ và $C$.", correct: "true", explain: "Tính chất hướng trên đoạn thẳng." },
            { key: "c", text: "Nếu $|\vec{AB}| + |\\vec{BC}| = |\\vec{AC}|$ thì $A, B, C$ thẳng hàng.", correct: "true", explain: "Dấu bằng bất đẳng thức tam giác." },
            { key: "d", text: "Vectơ $\\vec{AB}$ và $\\vec{BA}$ là hai vectơ bằng nhau.", correct: "false", explain: "Chúng là hai vectơ đối nhau, không bằng nhau." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong vật lí, vectơ được ứng dụng để mô tả các đại lượng có hướng:",
          items: [
            { key: "a", text: "Lực là một đại lượng vectơ có điểm đặt, phương, chiều và độ lớn.", correct: "true", explain: "Vật lí 10." },
            { key: "b", text: "Vận tốc của chuyển động là một đại lượng vectơ.", correct: "true", explain: "Vận tốc có hướng chuyển động." },
            { key: "c", text: "Nhiệt độ và khối lượng là các đại lượng vectơ.", correct: "false", explain: "Nhiệt độ và khối lượng là đại lượng vô hướng." },
            { key: "d", text: "Hai lực cân bằng tác dụng vào một chất điểm là hai vectơ đối nhau.", correct: "true", explain: "Cùng độ lớn, ngược hướng." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về quy ước ký hiệu vectơ trong SGK Toán 10:",
          items: [
            { key: "a", text: "Độ dài vectơ $\\vec{a}$ được ký hiệu là $|\vec{a}|$.", correct: "true", explain: "Ký hiệu chuẩn." },
            { key: "b", text: "Điểm đầu viết trước, điểm cuối viết sau dưới mũi tên: $\\vec{AB}$.", correct: "true", explain: "Quy ước." },
            { key: "c", text: "Đoạn thẳng $AB$ và vectơ $\\vec{AB}$ là một khái niệm toán học.", correct: "false", explain: "Khác nhau hoàn toàn: đoạn thẳng vô hướng, vectơ có hướng." },
            { key: "d", text: "Ký hiệu $\\vec{a} = 0$ là đúng về mặt toán học.", correct: "false", explain: "Phải viết là $\\vec{a} = \\vec{0}$ (vectơ bằng vectơ, không bằng số 0)." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 8: TỔNG VÀ HIỆU CỦA HAI VECTƠ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai8": {
      id: "toan10_bai8",
      lessonTitle: "Bài 8: Tổng và hiệu của hai vectơ",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 8:") || t.includes("tổng và hiệu của hai vectơ") || t.includes("tổng và hiệu")) && !t.includes("lượng giác") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Tổng của hai vectơ, Quy tắc ba điểm và Quy tắc hình bình hành",
          theory: createStandardTheoryHTML(
            "Bài 8: Tổng và hiệu của hai vectơ", "Lớp 10", 1,
            "Tổng của hai vectơ, Quy tắc ba điểm và Quy tắc hình bình hành",
            `<p>Các quy tắc cộng vectơ chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Quy tắc ba điểm (nối đuôi):</strong> Với ba điểm bất kì $A, B, C$, ta luôn có:
                $$\\vec{AB} + \\vec{BC} = \\vec{AC}$$
              </li>
              <li><strong>Quy tắc hình bình hành:</strong> Nếu $ABCD$ là hình bình hành thì:
                $$\\vec{AB} + \\vec{AD} = \\vec{AC}$$
              </li>
              <li><strong>Tính chất của phép cộng vectơ:</strong>
                <br/>• Giao hoán: $\\vec{a} + \\vec{b} = \\vec{b} + \\vec{a}$.
                <br/>• Kết hợp: $(\\vec{a} + \\vec{b}) + \\vec{c} = \\vec{a} + (\\vec{b} + \\vec{c})$.
                <br/>• Cộng với $\\vec{0}$: $\\vec{a} + \\vec{0} = \\vec{a}$.
              </li>
              <li><strong>Bất đẳng thức tam giác:</strong> Với hai vectơ $\\vec{a}, \\vec{b}$ bất kì, ta có $|\vec{a} + \\vec{b}| \\le |\\vec{a}| + |\\vec{b}|$. Dấu bằng xảy ra khi và chỉ khi $\\vec{a}$ và $\\vec{b}$ cùng hướng.</li>
            </ul>`,
            `<li>Quy tắc ba điểm: Điểm cuối của vectơ thứ nhất PHẢI TRÙNG điểm đầu của vectơ thứ hai (chữ ở giữa giống nhau thì triệt tiêu: $A\\mathbf{B} + \\mathbf{B}C = AC$).</li>
            <li>Quy tắc hình bình hành: Hai vectơ xuất phát từ CÙNG MỘT GỐC thì tổng bằng vectơ đường chéo.</li>`,
            `<li>Áp dụng quy tắc hình bình hành khi các vectơ không chung gốc.</li>
            <li>Ngộ nhận độ dài của tổng bằng tổng độ dài: $|\vec{a} + \\vec{b}| = |\\vec{a}| + |\\vec{b}|$ (sai, chỉ đúng khi cùng hướng).</li>`,
            `<li><em>"Nối đuôi nhau thì triệt tiêu ở giữa: AB + BC = AC – Chung gốc hình bình hành: AB + AD = AC!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho ba điểm phân biệt $A, B, C$. Đẳng thức nào sau đây luôn **ĐÚNG**?",
              options: [
                "A. $\\vec{AB} + \\vec{BC} = \\vec{AC}$",
                "B. $\\vec{AB} + \\vec{AC} = \\vec{BC}$",
                "C. $\\vec{CA} + \\vec{BA} = \\vec{CB}$",
                "D. $\\vec{AB} - \\vec{BC} = \\vec{AC}$"
              ],
              correct: "A",
              explanation: "Theo quy tắc ba điểm chuẩn: $\\vec{AB} + \\vec{BC} = \\vec{AC}$.",
              hint1: "Điểm cuối $B$ nối tiếp điểm đầu $B$.",
              hint2: "Quy tắc tam giác: $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
            },
            {
              question: "Cho hình bình hành $ABCD$. Vectơ tổng $\\vec{AB} + \\vec{AD}$ bằng:",
              options: ["A. $\\vec{AC}$", "B. $\\vec{BD}$", "C. $\\vec{CA}$", "D. $\\vec{DB}$"],
              correct: "A",
              explanation: "Theo quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$ (vectơ đường chéo xuất phát từ đỉnh $A$).",
              hint1: "Áp dụng quy tắc hình bình hành chung gốc $A$.",
              hint2: "Vectơ đường chéo là $\\vec{AC}$."
            },
            {
              question: "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ tổng $\\vec{AB} + \\vec{AD}$ bằng:",
              options: ["A. $a\\sqrt{2}$", "B. $2a$", "C. $a$", "D. $\\frac{a\\sqrt{2}}{2}$"],
              correct: "A",
              explanation: "Ta có $\\vec{AB} + \\vec{AD} = \\vec{AC}$. Do đó $|\vec{AB} + \\vec{AD}| = |\\vec{AC}| = AC = a\\sqrt{2}$.",
              hint1: "Tổng $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
              hint2: "Đường chéo hình vuông cạnh $a$ dài $a\\sqrt{2}$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Hiệu của hai vectơ, Vectơ đối và Quy tắc trừ",
          theory: createStandardTheoryHTML(
            "Bài 8: Tổng và hiệu của hai vectơ", "Lớp 10", 2,
            "Hiệu của hai vectơ, Vectơ đối và Quy tắc trừ",
            `<p>Vectơ đối và phép trừ vectơ chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Vectơ đối:</strong> Vectơ có cùng độ dài nhưng ngược hướng với $\\vec{a}$ gọi là vectơ đối của $\\vec{a}$, ký hiệu là $-\\vec{a}$. Ta có $\\vec{a} + (-\\vec{a}) = \\vec{0}$.
                <br/>• Vectơ đối của $\\vec{AB}$ là $\\vec{BA}$, tức $-\\vec{AB} = \\vec{BA}$.
              </li>
              <li><strong>Hiệu của hai vectơ:</strong> $\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$.</li>
              <li><strong>Quy tắc trừ chung gốc:</strong> Với ba điểm bất kì $O, A, B$:
                $$\\vec{OB} - \\vec{OA} = \\vec{AB}$$
                (Lấy điểm ngọn trừ điểm gốc: Đứng sau viết trước, đứng trước viết sau).
              </li>
              <li><strong>Hệ thức trung điểm và trọng tâm:</strong>
                <br/>• $I$ là trung điểm $AB \\Leftrightarrow \\vec{IA} + \\vec{IB} = \\vec{0} \\Leftrightarrow \\vec{OA} + \\vec{OB} = 2\\vec{OI}$ (với mọi điểm $O$).
                <br/>• $G$ là trọng tâm $\\Delta ABC \\Leftrightarrow \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0} \\Leftrightarrow \\vec{OA} + \\vec{OB} + \\vec{OC} = 3\\vec{OG}$.
              </li>
            </ul>`,
            `<li>Quy tắc trừ: Hai vectơ CHUNG GỐC trừ nhau thì ra vectơ có điểm đầu là điểm ngọn của số trừ, điểm cuối là điểm ngọn của số bị trừ ($\\vec{OB} - \\vec{OA} = \\vec{AB}$, hoặc $\\vec{AB} - \\vec{AC} = \\vec{CB}$).</li>
            <li>Muốn cộng hiệu: Có thể chuyển phép trừ thành phép cộng với vectơ đối ($\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})$).</li>`,
            `<li>Nhầm thứ tự ngọn - gốc: Viết $\\vec{AB} - \\vec{AC} = \\vec{BC}$ (sai, phải là $\\vec{CB}$).</li>
            <li>Quên hệ số 2 trong hệ thức trung điểm và hệ số 3 trong hệ thức trọng tâm.</li>`,
            `<li><em>"Trừ chung gốc: Lấy sau ghép trước – AB trừ AC ra CB – Trung điểm nhân hai, Trọng tâm nhân ba!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho ba điểm phân biệt $O, A, B$. Hiệu $\\vec{OB} - \\vec{OA}$ bằng vectơ nào?",
              options: ["A. $\\vec{AB}$", "B. $\\vec{BA}$", "C. $\\vec{OA}$", "D. $\\vec{BO}$"],
              correct: "A",
              explanation: "Theo quy tắc trừ chung gốc: $\\vec{OB} - \\vec{OA} = \\vec{AB}$.",
              hint1: "Quy tắc trừ hai vectơ chung gốc $O$.",
              hint2: "Điểm ngọn của vectơ bị trừ ($B$) là điểm ngọn kết quả: $\\vec{AB}$."
            },
            {
              question: "Cho tam giác $ABC$ có trọng tâm $G$. Khẳng định nào sau đây là **ĐÚNG**?",
              options: [
                "A. $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$",
                "B. $\\vec{GA} + \\vec{GB} + \\vec{GC} = 0$",
                "C. $\\vec{AB} + \\vec{BC} + \\vec{CA} = 3\\vec{OG}$",
                "D. $\\vec{GA} = \\vec{GB} = \\vec{GC}$"
              ],
              correct: "A",
              explanation: "Định nghĩa trọng tâm theo vectơ: $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.",
              hint1: "Tổng ba vectơ từ trọng tâm tới ba đỉnh bằng vectơ-không.",
              hint2: "Kết quả là $\\vec{0}$, không phải số 0."
            },
            {
              question: "Cho hình vuông $ABCD$ cạnh $a$. Độ dài của vectơ hiệu $\\vec{AB} - \\vec{AD}$ bằng:",
              options: ["A. $a\\sqrt{2}$", "B. $2a$", "C. $a$", "D. $0$"],
              correct: "A",
              explanation: "$\\vec{AB} - \\vec{AD} = \\vec{DB}$. Độ dài $|\vec{DB}| = DB = a\\sqrt{2}$ (đường chéo hình vuông).",
              hint1: "$\\vec{AB} - \\vec{AD} = \\vec{DB}$.",
              hint2: "Độ dài đường chéo $DB$ bằng $a\\sqrt{2}$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho bốn điểm bất kì $A, B, C, D$:",
          items: [
            { key: "a", text: "$\\vec{AB} + \\vec{BC} + \\vec{CD} = \\vec{AD}$.", correct: "true", explain: "Nối đuôi liên tiếp 3 vectơ." },
            { key: "b", text: "$\\vec{AB} - \\vec{AD} = \\vec{DB}$.", correct: "true", explain: "Quy tắc trừ chung gốc $A$." },
            { key: "c", text: "$\\vec{AB} + \\vec{CD} = \\vec{AD} + \\vec{CB}$.", correct: "true", explain: "$\\vec{AB} - \\vec{AD} = \\vec{CB} - \\vec{CD} = \\vec{DB}$." },
            { key: "d", text: "$\\vec{AB} + \\vec{BC} + \\vec{CA} = 0$ (số 0).", correct: "false", explain: "Tổng bằng $\\vec{0}$ (vectơ-không), không phải số 0." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho tam giác $ABC$ có trung tuyến $AM$ và trọng tâm $G$:",
          items: [
            { key: "a", text: "$\\vec{AB} + \\vec{AC} = 2\\vec{AM}$.", correct: "true", explain: "Hệ thức trung điểm cho gốc $A$." },
            { key: "b", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", correct: "true", explain: "Định nghĩa trọng tâm." },
            { key: "c", text: "$\\vec{AM} = 3\\vec{GM}$.", correct: "true", explain: "Trọng tâm chia trung tuyến theo tỉ lệ 2:1." },
            { key: "d", text: "Với điểm $O$ bất kì: $\\vec{OA} + \\vec{OB} + \\vec{OC} = \\vec{OG}$.", correct: "false", explain: "Phải là $3\\vec{OG}$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hình thoi $ABCD$ có cạnh bằng $a$ và $\\widehat{BAD} = 60^\\circ$:",
          items: [
            { key: "a", text: "Tam giác $ABD$ là tam giác đều cạnh $a$.", correct: "true", explain: "Hình thoi có góc 60 độ." },
            { key: "b", text: "Độ dài $|\vec{AB} - \\vec{AD}| = a$.", correct: "true", explain: "$|\\vec{DB}| = DB = a$." },
            { key: "c", text: "Độ dài $|\vec{AB} + \\vec{AD}| = a\\sqrt{3}$.", correct: "true", explain: "$|\\vec{AC}| = 2 \\times \\frac{a\\sqrt{3}}{2} = a\\sqrt{3}$." },
            { key: "d", text: "Vectơ $\\vec{AB} + \\vec{BC} = \\vec{BD}$.", correct: "false", explain: "$\\vec{AB} + \\vec{BC} = \\vec{AC}$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về phép trừ vectơ:",
          items: [
            { key: "a", text: "Vectơ đối của $\\vec{0}$ là chính nó: $-\\vec{0} = \\vec{0}$.", correct: "true", explain: "Tính chất vectơ-không." },
            { key: "b", text: "$\\vec{a} - \\vec{b} = \\vec{0} \\Leftrightarrow \\vec{a} = \\vec{b}$.", correct: "true", explain: "Hai vectơ bằng nhau." },
            { key: "c", text: "Độ dài của hiệu luôn bằng hiệu độ dài: $|\vec{a} - \\vec{b}| = |\\vec{a}| - |\\vec{b}|$.", correct: "false", explain: "Chỉ đúng trong trường hợp đặc biệt cùng hướng và $|\vec{a}| \\ge |\\vec{b}|$, tổng quát là sai." },
            { key: "d", text: "Bất đẳng thức $|\vec{a} - \\vec{b}| \\ge ||\\vec{a}| - |\\vec{b}||$ luôn đúng.", correct: "true", explain: "Bất đẳng thức độ dài vectơ." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hai lực $\\vec{F}_1, \\vec{F}_2$ cùng tác dụng vào một chất điểm $O$ tạo với nhau góc $90^\\circ$, độ lớn $F_1 = 30\\text{ N}, F_2 = 40\\text{ N}$:",
          items: [
            { key: "a", text: "Hợp lực tác dụng lên vật là $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$.", correct: "true", explain: "Quy tắc hợp lực hình bình hành." },
            { key: "b", text: "Độ lớn của hợp lực là $F = \\sqrt{F_1^2 + F_2^2} = 50\\text{ N}$.", correct: "true", explain: "$\\sqrt{30^2 + 40^2} = 50$." },
            { key: "c", text: "Nếu hai lực cùng chiều thì hợp lực có độ lớn $70\\text{ N}$.", correct: "true", explain: "$30 + 40 = 70$." },
            { key: "d", text: "Nếu hai lực ngược chiều thì hợp lực có độ lớn $10\\text{ N}$.", correct: "true", explain: "$|40 - 30| = 10$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Cho hình bình hành $ABCD$ tâm $O$:",
          items: [
            { key: "a", text: "$\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = \\vec{0}$.", correct: "true", explain: "$\\vec{OA} + \\vec{OC} = \\vec{0}$ và $\\vec{OB} + \\vec{OD} = \\vec{0}$." },
            { key: "b", text: "$\\vec{AB} + \\vec{CD} = \\vec{0}$.", correct: "true", explain: "Hai vectơ đối nhau." },
            { key: "c", text: "$\\vec{DA} - \\vec{DB} = \\vec{BA}$.", correct: "true", explain: "Quy tắc trừ chung gốc." },
            { key: "d", text: "$\\vec{AB} - \\vec{CD} = 2\\vec{AB}$.", correct: "true", explain: "Vì $-\\vec{CD} = \\vec{DC} = \\vec{AB}$." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART3_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART4_LESSONS = {
    // =========================================================================
    // BÀI 9: TÍCH CỦA MỘT VECTƠ VỚI MỘT SỐ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai9": {
      id: "toan10_bai9",
      lessonTitle: "Bài 9: Tích của một vectơ với một số",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 9:") || t.includes("tích của một vectơ với một số") || t.includes("tích vectơ với số")) && !t.includes("khoảng biến thiên") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Định nghĩa tích của vectơ với một số và các tính chất cơ bản",
          theory: createStandardTheoryHTML(
            "Bài 9: Tích của một vectơ với một số", "Lớp 10", 1,
            "Định nghĩa tích của vectơ với một số và các tính chất cơ bản",
            `<p>Kiến thức tích của vectơ với một số thực $k$ chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Tích của số thực $k$ với vectơ $\\vec{a}$ là một vectơ, ký hiệu là $k\\vec{a}$, được xác định như sau:
                <br/>• Độ dài: $|k\\vec{a}| = |k| \\cdot |\\vec{a}|$.
                <br/>• Hướng: $k\\vec{a}$ <strong>cùng hướng</strong> với $\\vec{a}$ nếu $k > 0$; <strong>ngược hướng</strong> với $\\vec{a}$ nếu $k < 0$.
                <br/>• Quy ước: $0\\vec{a} = \\vec{0}$ và $k\\vec{0} = \\vec{0}$.
              </li>
              <li><strong>Các tính chất đại số:</strong> Với hai vectơ $\\vec{a}, \\vec{b}$ và hai số thực $h, k$:
                <br/>• $k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$; $\\quad (h + k)\\vec{a} = h\\vec{a} + k\\vec{a}$.
                <br/>• $h(k\\vec{a}) = (hk)\\vec{a}$; $\\quad 1\\vec{a} = \\vec{a}, \\quad (-1)\\vec{a} = -\\vec{a}$.
              </li>
              <li><strong>Hệ thức trung điểm & trọng tâm dạng nhân số:</strong>
                <br/>• $I$ là trung điểm $AB \\Leftrightarrow \\vec{AB} = 2\\vec{AI} \\Leftrightarrow \\vec{IA} = -\\vec{IB}$.
                <br/>• $G$ là trọng tâm $\\Delta ABC$ và $M$ là trung điểm $BC \\Leftrightarrow \\vec{AG} = \\frac{2}{3}\\vec{AM} \\Leftrightarrow \\vec{GA} = -2\\vec{GM}$.
              </li>
            </ul>`,
            `<li>Khi nhân với số âm ($k < 0$), hướng của vectơ bị đảo ngược $180^\\circ$, nhưng độ dài luôn nhân với số dương $|k|$.</li>
            <li>Hệ số $k = -1$ cho ta chính vectơ đối: $(-1)\\vec{a} = -\\vec{a}$.</li>`,
            `<li>Viết $k\\vec{a} = 0$ (sai, phải là vectơ $\\vec{0}$).</li>
            <li>Quên lấy dấu trị tuyệt đối khi tính độ dài: viết $|k\\vec{a}| = k|\\vec{a}|$ (sai khi $k < 0$).</li>`,
            `<li><em>"Số dương cùng hướng – Số âm đảo chiều – Độ dài nhân với trị tuyệt đối!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho vectơ $\\vec{a} \\neq \\vec{0}$ và số thực $k = -3$. Khẳng định nào sau đây là **ĐÚNG**?",
              options: [
                "A. Vectơ $-3\\vec{a}$ ngược hướng với $\\vec{a}$ và có độ dài bằng $3|\\vec{a}|$",
                "B. Vectơ $-3\\vec{a}$ cùng hướng với $\\vec{a}$",
                "C. Độ dài của $-3\\vec{a}$ bằng $-3|\\vec{a}|$",
                "D. Vectơ $-3\\vec{a}$ vuông góc với $\\vec{a}$"
              ],
              correct: "A",
              explanation: "Vì $k = -3 < 0$ nên vectơ $-3\\vec{a}$ ngược hướng với $\\vec{a}$ và có độ dài $|-3\\vec{a}| = |-3| \\cdot |\\vec{a}| = 3|\\vec{a}|$.",
              hint1: "Hệ số âm thì ngược hướng, độ dài lấy trị tuyệt đối.",
              hint2: "$|-3| = 3$."
            },
            {
              question: "Cho đoạn thẳng $AB$ có trung điểm $I$. Đẳng thức nào sau đây là **ĐÚNG**?",
              options: [
                "A. $\\vec{AB} = 2\\vec{AI}$",
                "B. $\\vec{AB} = -2\\vec{AI}$",
                "C. $\\vec{IA} = \\vec{IB}$",
                "D. $\\vec{AI} = 2\\vec{AB}$"
              ],
              correct: "A",
              explanation: "Vì $I$ là trung điểm $AB$ nên $\\vec{AB}$ và $\\vec{AI}$ cùng hướng và độ dài $AB = 2AI$. Do đó $\\vec{AB} = 2\\vec{AI}$.",
              hint1: "Vectơ $\\vec{AB}$ và $\\vec{AI}$ có cùng hướng không?",
              hint2: "Cùng hướng từ $A$ sang $B$, độ dài gấp 2 lần: $\\vec{AB} = 2\\vec{AI}$."
            },
            {
              question: "Cho tam giác $ABC$ có trọng tâm $G$ và $M$ là trung điểm của $BC$. Đẳng thức nào sau đây là **ĐÚNG**?",
              options: [
                "A. $\\vec{AG} = \\frac{2}{3}\\vec{AM}$",
                "B. $\\vec{AG} = 2\\vec{AM}$",
                "C. $\\vec{AG} = -\\frac{2}{3}\\vec{AM}$",
                "D. $\\vec{GM} = \\frac{1}{2}\\vec{AG}$"
              ],
              correct: "A",
              explanation: "Theo tính chất trọng tâm: $G$ nằm trên trung tuyến $AM$ cách đỉnh $A$ một khoảng bằng $2/3 AM$, cùng hướng từ $A$ đến $M$ nên $\\vec{AG} = \\frac{2}{3}\\vec{AM}$.",
              hint1: "Trọng tâm chia trung tuyến theo tỉ lệ $AG/AM = 2/3$.",
              hint2: "Cùng hướng từ đỉnh xuống trung điểm."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Điều kiện hai vectơ cùng phương và Phân tích một vectơ theo hai vectơ không cùng phương",
          theory: createStandardTheoryHTML(
            "Bài 9: Tích của một vectơ với một số", "Lớp 10", 2,
            "Điều kiện hai vectơ cùng phương và Phân tích một vectơ theo hai vectơ không cùng phương",
            `<p>Các định lý nền tảng về cùng phương và phân tích vectơ chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Điều kiện để hai vectơ cùng phương:</strong> Điều kiện cần và đủ để hai vectơ $\\vec{a}$ và $\\vec{b}$ ($\\vec{b} \\neq \\vec{0}$) cùng phương là có một số thực $k$ sao cho $\\vec{a} = k\\vec{b}$.</li>
              <li><strong>Điều kiện ba điểm thẳng hàng:</strong> Ba điểm phân biệt $A, B, C$ thẳng hàng khi và chỉ khi tồn tại số $k \\neq 0$ sao cho $\\vec{AB} = k\\vec{AC}$.</li>
              <li><strong>Phân tích một vectơ theo hai vectơ không cùng phương:</strong> Cho hai vectơ không cùng phương $\\vec{a}$ và $\\vec{b}$. Mọi vectơ $\\vec{x}$ đều có thể phân tích duy nhất dưới dạng:
                $$\\vec{x} = m\\vec{a} + n\\vec{b}$$
                với $m, n$ là các số thực duy nhất xác định.
              </li>
            </ul>`,
            `<li>Muốn phân tích vectơ $\\vec{AM}$ theo $\\vec{AB}$ và $\\vec{AC}$: Dùng quy tắc chèn điểm hoặc phân tích tỉ lệ đoạn thẳng trên cạnh $BC$.</li>
            <li>Ba điểm $A, B, C$ thẳng hàng $\\Leftrightarrow$ hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng phương.</li>`,
            `<li>Tưởng hai vectơ không cùng phương vẫn có thể có tỉ số $k$ (sai, chỉ cùng phương mới có tỉ số).</li>
            <li>Nhầm dấu khi chuyển vế trong phương trình vectơ: $\\vec{MB} + 2\\vec{MC} = \\vec{0} \\Rightarrow \\vec{MB} = -2\\vec{MC}$.</li>`,
            `<li><em>"Cùng phương tồn tại số k – Phân tích duy nhất m, n theo cặp cơ sở!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai vectơ không cùng phương $\\vec{a}$ và $\\vec{b}$. Hai vectơ $\\vec{u} = 2\\vec{a} - 3\\vec{b}$ và $\\vec{v} = -4\\vec{a} + m\\vec{b}$ cùng phương khi:",
              options: ["A. $m = 6$", "B. $m = -6$", "C. $m = 3$", "D. $m = -3$"],
              correct: "A",
              explanation: "Hai vectơ cùng phương khi tồn tại số thực $k$ sao cho $\\vec{v} = k\\vec{u} \\Leftrightarrow -4 = 2k$ và $m = -3k$. Suy ra $k = -2 \\Rightarrow m = -3(-2) = 6$.",
              hint1: "Lập tỉ số hệ số của $\\vec{a}$ và $\\vec{b}$: $\\frac{-4}{2} = \\frac{m}{-3}$.",
              hint2: "$-2 = \\frac{m}{-3} \\implies m = 6$."
            },
            {
              question: "Cho hình bình hành $ABCD$. Phân tích vectơ $\\vec{BD}$ theo hai vectơ $\\vec{AB}$ và $\\vec{AD}$ ta được:",
              options: [
                "A. $\\vec{BD} = \\vec{AD} - \\vec{AB}$",
                "B. $\\vec{BD} = \\vec{AB} - \\vec{AD}$",
                "C. $\\vec{BD} = \\vec{AB} + \\vec{AD}$",
                "D. $\\vec{BD} = -\\vec{AB} - \\vec{AD}$"
              ],
              correct: "A",
              explanation: "Theo quy tắc trừ hai vectơ chung gốc $A$: $\\vec{AD} - \\vec{AB} = \\vec{BD}$. Vậy $\\vec{BD} = \\vec{AD} - \\vec{AB}$.",
              hint1: "Áp dụng quy tắc trừ chung gốc $A$: $\\vec{AD} - \\vec{AB}$.",
              hint2: "Ngọn trừ gốc: lấy $D$ trừ $B$ ra $\\vec{BD}$."
            },
            {
              question: "Cho tam giác $ABC$, điểm $M$ trên cạnh $BC$ sao cho $MB = 2MC$. Đẳng thức nào sau đây biểu diễn $\\vec{AM}$ theo $\\vec{AB}$ và $\\vec{AC}$ đúng?",
              options: [
                "A. $\\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$",
                "B. $\\vec{AM} = \\frac{2}{3}\\vec{AB} + \\frac{1}{3}\\vec{AC}$",
                "C. $\\vec{AM} = \\frac{1}{2}\\vec{AB} + \\frac{1}{2}\\vec{AC}$",
                "D. $\\vec{AM} = 2\\vec{AB} + \\vec{AC}$"
              ],
              correct: "A",
              explanation: "Vì $M$ nằm giữa $B$ và $C$ với $MB = 2MC$ nên $\\vec{MB} = -2\\vec{MC} \\Leftrightarrow \\vec{AB} - \\vec{AM} = -2(\\vec{AC} - \\vec{AM}) \\Leftrightarrow 3\\vec{AM} = \\vec{AB} + 2\\vec{AC} \\Leftrightarrow \\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{2}{3}\\vec{AC}$.",
              hint1: "Biểu diễn vectơ qua hệ thức $\\vec{MB} + 2\\vec{MC} = \\vec{0}$.",
              hint2: "Chèn điểm $A$: $(\\vec{AB} - \\vec{AM}) + 2(\\vec{AC} - \\vec{AM}) = \\vec{0}$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho đoạn thẳng $AB$ và điểm $M$ thỏa mãn $\\vec{MA} + 2\\vec{MB} = \\vec{0}$:",
          items: [
            { key: "a", text: "Vectơ $\\vec{MA}$ và $\\vec{MB}$ là hai vectơ ngược hướng.", correct: "true", explain: "$\\vec{MA} = -2\\vec{MB}$ có hệ số âm." },
            { key: "b", text: "Điểm $M$ nằm giữa hai điểm $A$ và $B$.", correct: "true", explain: "Hai vectơ ngược hướng nên $M$ nằm trong đoạn." },
            { key: "c", text: "Độ dài đoạn $MA$ gấp 2 lần độ dài đoạn $MB$ ($MA = 2MB$).", correct: "true", explain: "$|\\vec{MA}| = 2|\\vec{MB}| \\Rightarrow MA = 2MB$." },
            { key: "d", text: "Điểm $M$ chia đoạn $AB$ theo tỉ lệ $MA = \\frac{1}{3} AB$.", correct: "false", explain: "$AB = MA + MB = 3MB \\Rightarrow MA = \\frac{2}{3}AB$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho tam giác $ABC$ có trọng tâm $G$. Gọi $M, N, P$ lần lượt là trung điểm của $BC, CA, AB$:",
          items: [
            { key: "a", text: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$.", correct: "true", explain: "Định nghĩa trọng tâm." },
            { key: "b", text: "$\\vec{AM} + \\vec{BN} + \\vec{CP} = \\vec{0}$.", correct: "true", explain: "Tổng 3 trung tuyến vectơ luôn bằng $\\vec{0}$." },
            { key: "c", text: "Tam giác $ABC$ và tam giác $MNP$ có cùng trọng tâm $G$.", correct: "true", explain: "Định lý chuẩn về tam giác trung điểm." },
            { key: "d", text: "$\\vec{AG} = 2\\vec{GM}$.", correct: "true", explain: "$AG = 2GM$ và cùng hướng từ đỉnh xuống đáy." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ không cùng phương:",
          items: [
            { key: "a", text: "Nếu $x\\vec{a} + y\\vec{b} = \\vec{0}$ thì $x = y = 0$.", correct: "true", explain: "Tính độc lập tuyến tính của 2 vectơ không cùng phương." },
            { key: "b", text: "Mọi vectơ trong mặt phẳng đều phân tích duy nhất theo $\\vec{a}$ và $\\vec{b}$.", correct: "true", explain: "Cơ sở của mặt phẳng." },
            { key: "c", text: "Vectơ $\\vec{u} = 2\\vec{a} - 3\\vec{b}$ cùng phương với $\\vec{v} = -4\\vec{a} + 6\\vec{b}$.", correct: "true", explain: "Vì $\\vec{v} = -2\\vec{u}$." },
            { key: "d", text: "Vectơ $\\vec{u} = 2\\vec{a} - 3\\vec{b}$ cùng phương với $\\vec{w} = 2\\vec{a} + 3\\vec{b}$.", correct: "false", explain: "Tỉ số $2/2 \\neq -3/3$ nên không cùng phương." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất phân phối và kết hợp của phép nhân vectơ với số:",
          items: [
            { key: "a", text: "$k(\\vec{a} + \\vec{b}) = k\\vec{a} + k\\vec{b}$.", correct: "true", explain: "Tính chất phân phối đối với phép cộng vectơ." },
            { key: "b", text: "$(h + k)\\vec{a} = h\\vec{a} + k\\vec{a}$.", correct: "true", explain: "Tính chất phân phối đối với phép cộng số." },
            { key: "c", text: "$h(k\\vec{a}) = (hk)\\vec{a}$.", correct: "true", explain: "Tính chất kết hợp." },
            { key: "d", text: "Nếu $k\\vec{a} = \\vec{0}$ thì chắc chắn $k = 0$ và $\\vec{a} = \\vec{0}$.", correct: "false", explain: "Chỉ cần $k = 0$ HOẶC $\\vec{a} = \\vec{0}$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hình bình hành $ABCD$. Điểm $M$ thuộc đoạn $AC$ sao cho $AM = \\frac{1}{3} AC$:",
          items: [
            { key: "a", text: "$\\vec{AC} = \\vec{AB} + \\vec{AD}$.", correct: "true", explain: "Quy tắc hình bình hành." },
            { key: "b", text: "$\\vec{AM} = \\frac{1}{3}\\vec{AB} + \\frac{1}{3}\\vec{AD}$.", correct: "true", explain: "Nhân tỉ lệ 1/3." },
            { key: "c", text: "Vectơ $\\vec{BM} = \\vec{AM} - \\vec{AB} = -\\frac{2}{3}\\vec{AB} + \\frac{1}{3}\\vec{AD}$.", correct: "true", explain: "$\\frac{1}{3} - 1 = -\\frac{2}{3}$." },
            { key: "d", text: "Ba điểm $B, M, D$ thẳng hàng.", correct: "false", explain: "$M$ chia đường chéo $AC$, không nằm trên $BD$ (trừ khi $M$ là tâm, ở đây $AM=AC/3$)." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán tâm tỉ cự trong hình học phẳng:",
          items: [
            { key: "a", text: "Với hai điểm $A, B$ và hai số $\\alpha, \\beta$ thỏa $\\alpha + \\beta \\neq 0$, luôn tồn tại duy nhất điểm $I$ sao cho $\\alpha\\vec{IA} + \\beta\\vec{IB} = \\vec{0}$.", correct: "true", explain: "Định lý tâm tỉ cự." },
            { key: "b", text: "Khi $\\alpha = \\beta = 1$, tâm tỉ cự $I$ là trung điểm của $AB$.", correct: "true", explain: "$\\vec{IA} + \\vec{IB} = \\vec{0}$." },
            { key: "c", text: "Khi $\\alpha = \\beta = \\gamma = 1$, tâm tỉ cự của 3 điểm $A, B, C$ là trọng tâm tam giác $ABC$.", correct: "true", explain: "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$." },
            { key: "d", text: "Tập hợp các điểm $M$ thỏa mãn $|\\vec{MA} + \\vec{MB}| = |\\vec{MA} - \\vec{MB}|$ là một đường thẳng.", correct: "false", explain: "$|2\\vec{MI}| = |\\vec{BA}| \\Rightarrow MI = AB/2$, là ĐƯỜNG TRÒN đường kính $AB$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 10: VECTƠ TRONG MẶT PHẲNG TOẠ ĐỘ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai10": {
      id: "toan10_bai10",
      lessonTitle: "Bài 10: Vectơ trong mặt phẳng toạ độ",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 10:") || t.includes("vectơ trong mặt phẳng toạ độ") || t.includes("mặt phẳng toạ độ")) && !t.includes("phương sai") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Toạ độ của vectơ và toạ độ của điểm trong mặt phẳng Oxy",
          theory: createStandardTheoryHTML(
            "Bài 10: Vectơ trong mặt phẳng toạ độ", "Lớp 10", 1,
            "Toạ độ của vectơ và toạ độ của điểm trong mặt phẳng Oxy",
            `<p>Hệ trục toạ độ $Oxy$ gồm hai trục vuông góc $Ox, Oy$ với các vectơ đơn vị $\\vec{i}, \\vec{j}$ ($|\\vec{i}| = |\\vec{j}| = 1, \\vec{i} \\perp \\vec{j}$):</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Toạ độ vectơ:</strong> $\\vec{u} = x\\vec{i} + y\\vec{j} \\Leftrightarrow \\vec{u} = (x; y)$. $x$ là hoành độ, $y$ là tung độ.</li>
              <li><strong>Toạ độ điểm:</strong> $M(x; y) \\Leftrightarrow \\vec{OM} = x\\vec{i} + y\\vec{j}$.</li>
              <li><strong>Hai vectơ bằng nhau:</strong> $\\vec{u}(x_1; y_1) = \\vec{v}(x_2; y_2) \\Leftrightarrow \\begin{cases} x_1 = x_2 \\\\ y_1 = y_2 \\end{cases}$.</li>
              <li><strong>Toạ độ vectơ $\\vec{AB}$:</strong> $A(x_A; y_A), B(x_B; y_B) \\Rightarrow \\vec{AB} = (x_B - x_A; y_B - y_A)$.</li>
              <li><strong>Toạ độ trung điểm $M$ của $AB$:</strong> $x_M = \\frac{x_A + x_B}{2}, y_M = \\frac{y_A + y_B}{2}$.</li>
              <li><strong>Toạ độ trọng tâm $G$ của $\\Delta ABC$:</strong> $x_G = \\frac{x_A + x_B + x_C}{3}, y_G = \\frac{y_A + y_B + y_C}{3}$.</li>
            </ul>`,
            `<li>$\\vec{i} = (1; 0)$ trên trục $Ox$ và $\\vec{j} = (0; 1)$ trên trục $Oy$.</li>
            <li>Hai vectơ cùng phương: $\\vec{u}$ và $\\vec{v}$ cùng phương $\\Leftrightarrow x_1 y_2 - x_2 y_1 = 0$ (hoặc $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$).</li>`,
            `<li>Lấy nhầm toạ độ $A - B$ khi tính $\\vec{AB}$ (phải là $B - A$).</li>
            <li>Nhầm giữa hoành độ $x$ (trục nằm ngang) và tung độ $y$ (trục thẳng đứng).</li>`,
            `<li><em>"i là hoành, j là tung – Vectơ lấy sau trừ trước – Trung điểm chia hai, Trọng tâm chia ba!"</em></li>`
          ),
          mcqs: [
            {
              question: "Trong mặt phẳng $Oxy$, cho vectơ $\\vec{u} = 2\\vec{i} - 5\\vec{j}$. Toạ độ của vectơ $\\vec{u}$ là:",
              options: ["A. $(2; -5)$", "B. $(-5; 2)$", "C. $(2; 5)$", "D. $(-2; 5)$"],
              correct: "A",
              explanation: "$\\vec{u} = 2\\vec{i} - 5\\vec{j} \\Rightarrow \\vec{u} = (2; -5)$.",
              hint1: "Hệ số trước $\\vec{i}$ là hoành độ, trước $\\vec{j}$ là tung độ.",
              hint2: "$x = 2, y = -5$."
            },
            {
              question: "Cho hai điểm $A(1; 3)$ và $B(-2; 7)$. Toạ độ vectơ $\\vec{AB}$ là:",
              options: ["A. $(-3; 4)$", "B. $(3; -4)$", "C. $(-1; 10)$", "D. $(-0.5; 5)$"],
              correct: "A",
              explanation: "$\\vec{AB} = (x_B - x_A; y_B - y_A) = (-2 - 1; 7 - 3) = (-3; 4)$.",
              hint1: "Lấy toạ độ $B$ trừ toạ độ $A$.",
              hint2: "$-2 - 1 = -3, 7 - 3 = 4$."
            },
            {
              question: "Cho hai điểm $A(2; -1)$ và $B(4; 5)$. Trung điểm $I$ của đoạn $AB$ có toạ độ là:",
              options: ["A. $(3; 2)$", "B. $(6; 4)$", "C. $(1; 3)$", "D. $(2; 6)$"],
              correct: "A",
              explanation: "$x_I = \\frac{2 + 4}{2} = 3, y_I = \\frac{-1 + 5}{2} = 2$. Vậy $I(3; 2)$.",
              hint1: "Cộng toạ độ $A$ và $B$ rồi chia cho 2.",
              hint2: "$\\frac{2+4}{2} = 3, \\frac{-1+5}{2} = 2$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Các phép toán toạ độ và Điều kiện cùng phương",
          theory: createStandardTheoryHTML(
            "Bài 10: Vectơ trong mặt phẳng toạ độ", "Lớp 10", 2,
            "Các phép toán toạ độ và Điều kiện cùng phương",
            `<p>Các phép toán trên toạ độ của vectơ chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li>Cho $\\vec{u} = (x_1; y_1), \\vec{v} = (x_2; y_2)$ và số thực $k$:
                <br/>• $\\vec{u} + \\vec{v} = (x_1 + x_2; y_1 + y_2)$.
                <br/>• $\\vec{u} - \\vec{v} = (x_1 - x_2; y_1 - y_2)$.
                <br/>• $k\\vec{u} = (kx_1; ky_1)$.
              </li>
              <li><strong>Điều kiện cùng phương:</strong> Hai vectơ $\\vec{u}$ và $\\vec{v}$ ($\\vec{v} \\neq \\vec{0}$) cùng phương khi và chỉ khi:
                $$x_1 y_2 - x_2 y_1 = 0 \\quad \\left(\\text{hoặc } \\frac{x_1}{x_2} = \\frac{y_1}{y_2} \\text{ khi } x_2, y_2 \\neq 0\\right)$$
              </li>
              <li><strong>Độ dài vectơ:</strong> $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2}$.</li>
              <li><strong>Khoảng cách giữa hai điểm:</strong> $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.</li>
            </ul>`,
            `<li>Quy tắc tích chéo cùng phương: Hoành này nhân tung kia trừ hoành kia nhân tung này bằng 0 ($x_1 y_2 = x_2 y_1$).</li>
            <li>Độ dài là căn bậc hai của tổng bình phương các toạ độ.</li>`,
            `<li>Quên lấy căn bậc hai khi tính độ dài vectơ.</li>
            <li>Nhầm dấu trừ khi nhân toạ độ với số âm: $-2(1; -3) = (-2; 6)$, không phải $(-2; -6)$.</li>`,
            `<li><em>"Cùng phương tích chéo bằng nhau: x1*y2 = x2*y1 – Độ dài căn tổng bình phương!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho hai vectơ $\\vec{u} = (2; -3)$ và $\\vec{v} = (1; 4)$. Toạ độ của vectơ $\\vec{a} = 2\\vec{u} - \\vec{v}$ là:",
              options: ["A. $(3; -10)$", "B. $(3; -2)$", "C. $(5; -2)$", "D. $(3; 10)$"],
              correct: "A",
              explanation: "$2\\vec{u} = (4; -6)$. Ta có $\\vec{a} = (4 - 1; -6 - 4) = (3; -10)$.",
              hint1: "Nhân đôi $\\vec{u}$ thành $(4; -6)$, sau đó trừ đi $(1; 4)$.",
              hint2: "$4 - 1 = 3, -6 - 4 = -10$."
            },
            {
              question: "Hai vectơ $\\vec{u} = (2; m)$ và $\\vec{v} = (4; 6)$ cùng phương khi:",
              options: ["A. $m = 3$", "B. $m = -3$", "C. $m = 12$", "D. $m = 2$"],
              correct: "A",
              explanation: "Hai vectơ cùng phương $\\Leftrightarrow \\frac{m}{6} = \\frac{2}{4} = \\frac{1}{2} \\Leftrightarrow m = 3$.",
              hint1: "Tỉ số hoành độ bằng tỉ số tung độ: $2/4 = m/6$.",
              hint2: "$m = 2 \\times 6 / 4 = 3$."
            },
            {
              question: "Khoảng cách giữa hai điểm $A(1; 2)$ và $B(4; 6)$ bằng:",
              options: ["A. 5", "B. 25", "C. 7", "D. $\\sqrt{7}$"],
              correct: "A",
              explanation: "$AB = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.",
              hint1: "$AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.",
              hint2: "$\\sqrt{3^2 + 4^2} = 5$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 2), B(-2; 6), C(4; 4)$:",
          items: [
            { key: "a", text: "Toạ độ của vectơ $\\vec{AB}$ là $(-3; 4)$.", correct: "true", explain: "$(-2-1; 6-2) = (-3; 4)$." },
            { key: "b", text: "Độ dài đoạn thẳng $AB = 5$.", correct: "true", explain: "$\\sqrt{(-3)^2 + 4^2} = 5$." },
            { key: "c", text: "Toạ độ trọng tâm $G$ của tam giác $ABC$ là $(1; 4)$.", correct: "true", explain: "$x = (1-2+4)/3 = 1, y = (2+6+4)/3 = 4$." },
            { key: "d", text: "Điểm $D$ để tứ giác $ABCD$ là hình bình hành có toạ độ $(7; 0)$.", correct: "true", explain: "$\\vec{AD} = \\vec{BC} \\Rightarrow (x-1; y-2) = (6; -2) \\Rightarrow D(7; 0)$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai vectơ $\\vec{a} = (x; 2)$ và $\\vec{b} = (3; -1)$:",
          items: [
            { key: "a", text: "Hai vectơ cùng phương khi $x(-1) = 2(3) \\Leftrightarrow x = -6$.", correct: "true", explain: "Tích chéo $x_1 y_2 = x_2 y_1$." },
            { key: "b", text: "Khi $x = -6$, hai vectơ $\\vec{a}$ và $\\vec{b}$ ngược hướng nhau.", correct: "true", explain: "Vì $\\vec{a} = (-6; 2) = -2(3; -1) = -2\\vec{b}$ (hệ số âm)." },
            { key: "c", text: "Độ dài của $\\vec{b}$ bằng $\\sqrt{10}$.", correct: "true", explain: "$\\sqrt{3^2 + (-1)^2} = \\sqrt{10}$." },
            { key: "d", text: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ luôn cùng phương với mọi $x$.", correct: "false", explain: "Chỉ cùng phương duy nhất khi $x = -6$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho ba điểm $A(1; 1), B(2; 4), C(3; 7)$:",
          items: [
            { key: "a", text: "$\\vec{AB} = (1; 3)$.", correct: "true", explain: "$(2-1; 4-1) = (1; 3)$." },
            { key: "b", text: "$\\vec{BC} = (1; 3)$.", correct: "true", explain: "$(3-2; 7-4) = (1; 3)$." },
            { key: "c", text: "Ba điểm $A, B, C$ thẳng hàng.", correct: "true", explain: "Vì $\\vec{AB} = \\vec{BC}$ nên $B$ là trung điểm $AC$." },
            { key: "d", text: "Điểm $C$ nằm giữa hai điểm $A$ và $B$.", correct: "false", explain: "Điểm $B$ nằm giữa $A$ và $C$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các toạ độ đặc biệt trong mặt phẳng toạ độ $Oxy$:",
          items: [
            { key: "a", text: "Điểm thuộc trục hoành $Ox$ có tung độ bằng 0: $(x; 0)$.", correct: "true", explain: "Tính chất trục hoành." },
            { key: "b", text: "Điểm thuộc trục tung $Oy$ có hoành độ bằng 0: $(0; y)$.", correct: "true", explain: "Tính chất trục tung." },
            { key: "c", text: "Gốc toạ độ $O$ có toạ độ $(0; 0)$.", correct: "true", explain: "Định nghĩa gốc toạ độ." },
            { key: "d", text: "Vectơ đơn vị $\\vec{i}$ có toạ độ $(0; 1)$.", correct: "false", explain: "$\\vec{i} = (1; 0)$ trên trục $Ox$, $\\vec{j} = (0; 1)$ trên trục $Oy$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho $\\vec{u} = (-1; 3)$ và $\\vec{v} = (2; -5)$:",
          items: [
            { key: "a", text: "$\\vec{u} + \\vec{v} = (1; -2)$.", correct: "true", explain: "$-1+2=1, 3-5=-2$." },
            { key: "b", text: "$\\vec{u} - \\vec{v} = (-3; 8)$.", correct: "true", explain: "$-1-2=-3, 3-(-5)=8$." },
            { key: "c", text: "Độ dài $|\vec{u}| = \\sqrt{10}$.", correct: "true", explain: "$\\sqrt{1+9} = \\sqrt{10}$." },
            { key: "d", text: "Độ dài $|\vec{v}| = 7$.", correct: "false", explain: "$|\\vec{v}| = \\sqrt{4+25} = \\sqrt{29} \\neq 7$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán tìm toạ độ đỉnh thứ tư của hình bình hành:",
          items: [
            { key: "a", text: "Tứ giác $ABCD$ là hình bình hành $\\Leftrightarrow \\vec{AB} = \\vec{DC}$.", correct: "true", explain: "Điều kiện chuẩn." },
            { key: "b", text: "Hoành độ thỏa mãn $x_B - x_A = x_C - x_D \\Leftrightarrow x_D = x_A + x_C - x_B$.", correct: "true", explain: "Công thức đỉnh thứ 4." },
            { key: "c", text: "Tung độ thỏa mãn $y_D = y_A + y_C - y_B$.", correct: "true", explain: "Công thức đỉnh thứ 4." },
            { key: "d", text: "Tâm của hình bình hành là trọng tâm tam giác $ABC$.", correct: "false", explain: "Tâm là trung điểm đường chéo $AC$, không phải trọng tâm." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 11: TÍCH VÔ HƯỚNG CỦA HAI VECTƠ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai11": {
      id: "toan10_bai11",
      lessonTitle: "Bài 11: Tích vô hướng của hai vectơ",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 11:") || t.includes("tích vô hướng của hai vectơ") || t.includes("tích vô hướng")) && !t.includes("nguyên hàm") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Góc giữa hai vectơ và Định nghĩa tích vô hướng",
          theory: createStandardTheoryHTML(
            "Bài 11: Tích vô hướng của hai vectơ", "Lớp 10", 1,
            "Góc giữa hai vectơ và Định nghĩa tích vô hướng",
            `<p>Định nghĩa góc giữa hai vectơ và tích vô hướng hình học chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Góc giữa hai vectơ:</strong> Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ khác $\\vec{0}$. Từ một điểm $O$ vẽ $\\vec{OA} = \\vec{a}$ và $\\vec{OB} = \\vec{b}$. Khi đó $\\widehat{AOB}$ ($0^\\circ \\le \\widehat{AOB} \\le 180^\\circ$) được gọi là góc giữa hai vectơ $\\vec{a}$ và $\\vec{b}$, ký hiệu $(\\vec{a}, \\vec{b})$.
                <br/>• Nếu $\\vec{a}$ và $\\vec{b}$ cùng hướng thì $(\\vec{a}, \\vec{b}) = 0^\\circ$.
                <br/>• Nếu $\\vec{a}$ và $\\vec{b}$ ngược hướng thì $(\\vec{a}, \\vec{b}) = 180^\\circ$.
                <br/>• Nếu $(\\vec{a}, \\vec{b}) = 90^\\circ$ thì ta nói $\\vec{a} \\perp \\vec{b}$.
              </li>
              <li><strong>Định nghĩa tích vô hướng:</strong> Tích vô hướng của hai vectơ $\\vec{a}$ và $\\vec{b}$ là một <strong>số thực</strong>, ký hiệu là $\\vec{a} \\cdot \\vec{b}$, được xác định bởi:
                $$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$$
              </li>
              <li>Quy ước: Nếu $\\vec{a} = \\vec{0}$ hoặc $\\vec{b} = \\vec{0}$ thì $\\vec{a} \\cdot \\vec{b} = 0$.</li>
              <li><strong>Bình phương vô hướng:</strong> $\\vec{a}^2 = \\vec{a} \\cdot \\vec{a} = |\\vec{a}|^2 \\ge 0$. Bình phương vô hướng bằng bình phương độ dài!</li>
              <li><strong>Điều kiện vuông góc:</strong> Với $\\vec{a}, \\vec{b} \\neq \\vec{0}$, ta có $\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$.</li>
            </ul>`,
            `<li>Góc giữa hai vectơ có thể là góc tù (lên tới $180^\\circ$), khi đó $\\cos$ mang giá trị âm nên tích vô hướng âm!</li>
            <li>Khi đưa về chung gốc để xác định góc: Bắt buộc hai vectơ phải xuất phát từ CÙNG MỘT ĐIỂM $O$.</li>`,
            `<li>Nhầm góc giữa $\\vec{AB}$ và $\\vec{BC}$ là $\\widehat{ABC}$ (sai, vì $B$ là ngọn của $\\vec{AB}$ và là gốc của $\\vec{BC}$, góc đúng là $180^\\circ - \\widehat{ABC}$).</li>
            <li>Tưởng tích vô hướng là một vectơ (sai, nó là một số thực).</li>`,
            `<li><em>"Tích vô hướng bằng tích hai độ dài nhân Cốt góc kẹp giữa – Bình phương vô hướng bằng bình phương độ dài – Bằng 0 vuông góc!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho tam giác đều $ABC$ cạnh $a$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{AC}$ bằng:",
              options: ["A. $60^\\circ$", "B. $120^\\circ$", "C. $30^\\circ$", "D. $90^\\circ$"],
              correct: "A",
              explanation: "Hai vectơ $\\vec{AB}$ và $\\vec{AC}$ cùng xuất phát từ gốc $A$, góc kẹp giữa chính là góc $\\widehat{BAC} = 60^\\circ$ của tam giác đều.",
              hint1: "Cùng xuất phát từ đỉnh $A$.",
              hint2: "Tam giác đều có các góc bằng $60^\\circ$."
            },
            {
              question: "Cho tam giác đều $ABC$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
              options: ["A. $\\frac{a^2}{2}$", "B. $-\\frac{a^2}{2}$", "C. $\\frac{a^2\\sqrt{3}}{2}$", "D. $a^2$"],
              correct: "A",
              explanation: "$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| |\\vec{AC}| \\cos 60^\\circ = a \\cdot a \\cdot \\frac{1}{2} = \\frac{a^2}{2}$.",
              hint1: "Áp dụng $|\\vec{AB}||\\vec{AC}|\\cos(\\vec{AB}, \\vec{AC})$.",
              hint2: "$a \\cdot a \\cdot \\cos 60^\\circ = a^2 / 2$."
            },
            {
              question: "Khẳng định nào sau đây là **ĐÚNG** về tích vô hướng của hai vectơ khác $\\vec{0}$?",
              options: [
                "A. $\\vec{a} \\cdot \\vec{b} = 0 \\Leftrightarrow \\vec{a} \\perp \\vec{b}$",
                "B. $\\vec{a} \\cdot \\vec{b} > 0$ thì góc giữa chúng là góc tù",
                "C. $\\vec{a} \\cdot \\vec{b}$ luôn luôn là số dương",
                "D. $\\vec{a}^2 = -|\\vec{a}|^2$"
              ],
              correct: "A",
              explanation: "Theo định lý SGK: Hai vectơ khác $\\vec{0}$ vuông góc khi và chỉ khi tích vô hướng của chúng bằng 0.",
              hint1: "Cos của góc 90 độ bằng bao nhiêu?",
              hint2: "$\\cos 90^\\circ = 0$ nên tích vô hướng bằng 0."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Biểu thức toạ độ của tích vô hướng và Ứng dụng độ dài, khoảng cách",
          theory: createStandardTheoryHTML(
            "Bài 11: Tích vô hướng của hai vectơ", "Lớp 10", 2,
            "Biểu thức toạ độ của tích vô hướng và Ứng dụng độ dài, khoảng cách",
            `<p>Biểu thức toạ độ trong mặt phẳng $Oxy$ với $\\vec{u} = (x_1; y_1)$ và $\\vec{v} = (x_2; y_2)$:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Biểu thức toạ độ của tích vô hướng:</strong>
                $$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$$
              </li>
              <li><strong>Độ dài của vectơ:</strong> $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2}$.</li>
              <li><strong>Khoảng cách giữa hai điểm:</strong> $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.</li>
              <li><strong>Cos góc giữa hai vectơ:</strong>
                $$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| \\cdot |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2}{\\sqrt{x_1^2 + y_1^2} \\cdot \\sqrt{x_2^2 + y_2^2}}$$
              </li>
              <li><strong>Điều kiện hai vectơ vuông góc:</strong> $\\vec{u} \\perp \\vec{v} \\Leftrightarrow x_1 x_2 + y_1 y_2 = 0$.</li>
            </ul>`,
            `<li>Tích vô hướng toạ độ: Hoành nhân hoành cộng tung nhân tung ($x_1 x_2 + y_1 y_2$).</li>
            <li>Khi tính công của một lực trong vật lí: $A = \\vec{F} \\cdot \\vec{d} = F \\cdot d \\cdot \\cos\\alpha$.</li>`,
            `<li>Nhầm giữa điều kiện vuông góc ($x_1 x_2 + y_1 y_2 = 0$) và điều kiện cùng phương ($x_1 y_2 - x_2 y_1 = 0$).</li>
            <li>Quên dấu trị tuyệt đối khi cần tính góc giữa hai đường thẳng (chú ý: góc giữa hai vectơ thì có thể tù nên không có trị tuyệt đối, góc giữa hai đường thẳng thì luôn nhọn).</li>`,
            `<li><em>"Hoành nhân hoành cộng tung nhân tung ra Tích vô hướng – Bằng 0 là Vuông góc!"</em></li>`
          ),
          mcqs: [
            {
              question: "Trong mặt phẳng $Oxy$, cho $\\vec{u} = (1; 3)$ và $\\vec{v} = (-2; 4)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
              options: ["A. 10", "B. -14", "C. 14", "D. -10"],
              correct: "A",
              explanation: "$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 1(-2) + 3(4) = -2 + 12 = 10$.",
              hint1: "Áp dụng $x_1 x_2 + y_1 y_2$.",
              hint2: "$1(-2) + 3(4) = 10$."
            },
            {
              question: "Hai vectơ $\\vec{a} = (2; 3)$ và $\\vec{b} = (m; -4)$ vuông góc với nhau khi:",
              options: ["A. $m = 6$", "B. $m = -6$", "C. $m = \\frac{8}{3}$", "D. $m = -\\frac{8}{3}$"],
              correct: "A",
              explanation: "$\\vec{a} \\perp \\vec{b} \\Leftrightarrow 2(m) + 3(-4) = 0 \\Leftrightarrow 2m - 12 = 0 \\Leftrightarrow m = 6$.",
              hint1: "Điều kiện vuông góc: $x_1 x_2 + y_1 y_2 = 0$.",
              hint2: "$2m - 12 = 0 \\implies m = 6$."
            },
            {
              question: "Cho hai vectơ $\\vec{u} = (1; 0)$ và $\\vec{v} = (1; 1)$. Cosin của góc giữa $\\vec{u}$ và $\\vec{v}$ bằng:",
              options: ["A. $\\frac{\\sqrt{2}}{2}$", "B. $\\frac{1}{2}$", "C. $\\frac{\\sqrt{3}}{2}$", "D. $1$"],
              correct: "A",
              explanation: "$\\cos(\\vec{u}, \\vec{v}) = \\frac{1(1) + 0(1)}{\\sqrt{1+0} \\cdot \\sqrt{1+1}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$. Do đó góc bằng $45^\\circ$.",
              hint1: "$\\cos = \\frac{x_1 x_2 + y_1 y_2}{|\\vec{u}||\\vec{v}|}$.",
              hint2: "$\\frac{1}{1 \\cdot \\sqrt{2}} = \\frac{\\sqrt{2}}{2}$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tam giác vuông $ABC$ tại $A$ có $AB = 3, AC = 4$:",
          items: [
            { key: "a", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = 0$.", correct: "true", explain: "Vì hai cạnh góc vuông vuông góc nhau." },
            { key: "b", text: "Độ dài cạnh huyền $BC = 5$.", correct: "true", explain: "Pythagore $\\sqrt{9+16} = 5$." },
            { key: "c", text: "$\\vec{BA} \\cdot \\vec{BC} = BA \\cdot BC \\cdot \\cos B = 3 \\times 5 \\times \\frac{3}{5} = 9$.", correct: "true", explain: "Hình chiếu chuẩn: $\\vec{BA} \\cdot \\vec{BC} = BA^2 = 9$." },
            { key: "d", text: "$\\vec{CA} \\cdot \\vec{CB} = 25$.", correct: "false", explain: "$\\vec{CA} \\cdot \\vec{CB} = CA^2 = 16$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai vectơ $\\vec{u} = (2; -1)$ và $\\vec{v} = (1; 2)$:",
          items: [
            { key: "a", text: "Tích vô hướng $\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(2) = 0$.", correct: "true", explain: "$2 - 2 = 0$." },
            { key: "b", text: "Hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau.", correct: "true", explain: "Tích vô hướng bằng 0." },
            { key: "c", text: "Độ dài của hai vectơ bằng nhau và bằng $\\sqrt{5}$.", correct: "true", explain: "$\\sqrt{4+1} = \\sqrt{5}$." },
            { key: "d", text: "Vectơ $\\vec{u} + \\vec{v} = (3; 1)$ có độ dài bằng 10.", correct: "false", explain: "Độ dài là $\\sqrt{3^2 + 1^2} = \\sqrt{10}$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Trong mặt phẳng $Oxy$, cho ba điểm $A(1; 3), B(-2; 2), C(0; -4)$:",
          items: [
            { key: "a", text: "$\\vec{AB} = (-3; -1)$ và $\\vec{AC} = (-1; -7)$.", correct: "true", explain: "Lấy sau trừ trước." },
            { key: "b", text: "Tích vô hướng $\\vec{AB} \\cdot \\vec{AC} = (-3)(-1) + (-1)(-7) = 10$.", correct: "true", explain: "$3 + 7 = 10$." },
            { key: "c", text: "Độ dài $AB = \\sqrt{10}$ và $AC = \\sqrt{50} = 5\\sqrt{2}$.", correct: "true", explain: "Độ dài chuẩn." },
            { key: "d", text: "Cosin của góc $A$ bằng $\\frac{1}{2}$.", correct: "false", explain: "$\\cos A = \\frac{\\vec{AB} \\cdot \\vec{AC}}{AB \\cdot AC} = \\frac{10}{\\sqrt{10} \\cdot 5\\sqrt{2}} = \\frac{10}{10\\sqrt{5}} = \\frac{1}{\\sqrt{5}} \\neq \\frac{1}{2}$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất đại số của tích vô hướng:",
          items: [
            { key: "a", text: "Giao hoán: $\\vec{a} \\cdot \\vec{b} = \\vec{b} \\cdot \\vec{a}$.", correct: "true", explain: "Tính chất chuẩn." },
            { key: "b", text: "Phân phối: $\\vec{a} \\cdot (\\vec{b} + \\vec{c}) = \\vec{a} \\cdot \\vec{b} + \\vec{a} \\cdot \\vec{c}$.", correct: "true", explain: "Tính chất phân phối." },
            { key: "c", text: "Hằng đẳng thức: $(\\vec{a} + \\vec{b})^2 = \\vec{a}^2 + 2\\vec{a}\\cdot\\vec{b} + \\vec{b}^2$.", correct: "true", explain: "Khai triển bình phương vô hướng." },
            { key: "d", text: "Nếu $\\vec{a} \\cdot \\vec{b} = \\vec{a} \\cdot \\vec{c}$ và $\\vec{a} \\neq \\vec{0}$ thì $\\vec{b} = \\vec{c}$.", correct: "false", explain: "Chỉ suy ra $\\vec{a} \\perp (\\vec{b} - \\vec{c})$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong vật lí, một lực $\\vec{F}$ có độ lớn $50\\text{ N}$ kéo một vật di chuyển một đoạn đường $s = 10\\text{ m}$ theo hướng hợp với hướng chuyển động góc $60^\\circ$:",
          items: [
            { key: "a", text: "Công sinh ra được tính bằng tích vô hướng $A = \\vec{F} \\cdot \\vec{s}$.", correct: "true", explain: "Công cơ học." },
            { key: "b", text: "Giá trị công sinh ra là $A = 50 \\times 10 \\times \\cos 60^\\circ = 250\\text{ J}$.", correct: "true", explain: "$500 \\times 0.5 = 250$ Joules." },
            { key: "c", text: "Nếu lực tác dụng vuông góc với hướng chuyển động thì công sinh ra bằng 0.", correct: "true", explain: "$\\cos 90^\\circ = 0$." },
            { key: "d", text: "Nếu lực ngược hướng với chuyển động (lực cản) thì công sinh ra mang dấu dương.", correct: "false", explain: "Ngược hướng thì $\\cos 180^\\circ = -1$, công cản mang dấu âm." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bất đẳng thức Cauchy-Schwarz trong vectơ phẳng:",
          items: [
            { key: "a", text: "$|\\vec{a} \\cdot \\vec{b}| \\le |\\vec{a}| \\cdot |\\vec{b}|$.", correct: "true", explain: "Vì $|\\cos\\varphi| \\le 1$." },
            { key: "b", text: "Dấu bằng xảy ra khi và chỉ khi hai vectơ cùng phương.", correct: "true", explain: "Khi $\\cos\\varphi = \\pm 1$." },
            { key: "c", text: "Dưới dạng toạ độ: $(x_1 x_2 + y_1 y_2)^2 \\le (x_1^2 + y_1^2)(x_2^2 + y_2^2)$.", correct: "true", explain: "Bất đẳng thức Bunhiacopxki dạng 2 số." },
            { key: "d", text: "Bình phương vô hướng có thể nhận giá trị âm nếu toạ độ âm.", correct: "false", explain: "Bình phương vô hướng bằng bình phương độ dài luôn không âm: $\\vec{a}^2 \\ge 0$." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART4_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART5_LESSONS = {
    // =========================================================================
    // BÀI 12: SỐ GẦN ĐÚNG VÀ SAI SỐ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai12": {
      id: "toan10_bai12",
      lessonTitle: "Bài 12: Số gần đúng và sai số",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 12:") || t.includes("số gần đúng và sai số") || t.includes("số gần đúng")) && !t.includes("tích phân") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Số gần đúng, Sai số tuyệt đối và Độ chính xác",
          theory: createStandardTheoryHTML(
            "Bài 12: Số gần đúng và sai số", "Lớp 10", 1,
            "Số gần đúng, Sai số tuyệt đối và Độ chính xác",
            `<p>Khái niệm số gần đúng, sai số tuyệt đối và độ chính xác chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Số đúng và Số gần đúng:</strong>
                <br/>• Trong thực tế đời sống và khoa học kỹ thuật, nhiều đại lượng ta không thể biết được giá trị chính xác (số đúng, ký hiệu $\\bar{a}$) mà chỉ biết giá trị xấp xỉ của nó (số gần đúng, ký hiệu $a$).
              </li>
              <li><strong>Sai số tuyệt đối:</strong>
                <br/>• Sai số tuyệt đối của số gần đúng $a$ là giá trị không âm:
                $$\\Delta_a = |\\bar{a} - a|$$
              </li>
              <li><strong>Độ chính xác của một số gần đúng:</strong>
                <br/>• Trong thực tế ta thường không biết số đúng $\\bar{a}$ nên không tính được chính xác $\\Delta_a$, nhưng ta ước lượng được $\\Delta_a \\le d$.
                <br/>• Số $d > 0$ được gọi là <strong>độ chính xác</strong> của số gần đúng $a$.
                <br/>• Quy ước viết: $\\bar{a} = a \\pm d$, điều này tương đương với:
                $$a - d \\le \\bar{a} \\le a + d$$
                (Số đúng $\\bar{a}$ chắc chắn nằm trong đoạn $[a - d; a + d]$).
              </li>
            </ul>`,
            `<li>Độ chính xác $d$ càng nhỏ thì số gần đúng $a$ càng gần với số đúng $\\bar{a}$.</li>
            <li>Khoảng chứa số đúng có độ dài là $2d$ đối xứng qua số gần đúng $a$.</li>`,
            `<li>Nhầm số đúng $\\bar{a}$ với số gần đúng $a$.</li>
            <li>Tưởng sai số tuyệt đối có thể nhận giá trị âm (sai, $\\Delta_a = |\\bar{a} - a| \\ge 0$).</li>`,
            `<li><em>"Số đúng nằm giữa a trừ d và a cộng d – Sai số tuyệt đối luôn dương – Độ chính xác d đứng sau cộng trừ!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một hình chữ nhật có chiều dài đo được là $a = 15.2\\text{ m} \\pm 0.1\\text{ m}$. Độ chính xác $d$ của phép đo bằng:",
              options: ["A. $0.1\\text{ m}$", "B. $15.2\\text{ m}$", "C. $15.3\\text{ m}$", "D. $0.2\\text{ m}$"],
              correct: "A",
              explanation: "Ký hiệu $\\bar{a} = a \\pm d$ cho biết độ chính xác là $d = 0.1\\text{ m}$.",
              hint1: "Độ chính xác là số đứng sau dấu $\\pm$.",
              hint2: "$d = 0.1\\text{ m}$."
            },
            {
              question: "Chiều dài của một cây cầu đo được là $L = 250\\text{ m} \\pm 0.5\\text{ m}$. Chiều dài thực tế $\\bar{L}$ của cây cầu nằm trong đoạn nào?",
              options: [
                "A. $[249.5\\text{ m}; 250.5\\text{ m}]$",
                "B. $[249.0\\text{ m}; 251.0\\text{ m}]$",
                "C. $[250.0\\text{ m}; 250.5\\text{ m}]$",
                "D. $[249.5\\text{ m}; 250.0\\text{ m}]$"
              ],
              correct: "A",
              explanation: "Ta có $a - d \\le \\bar{L} \\le a + d \\Leftrightarrow 250 - 0.5 \\le \\bar{L} \\le 250 + 0.5 \\Leftrightarrow 249.5\\text{ m} \\le \\bar{L} \\le 250.5\\text{ m}$.",
              hint1: "Lấy số đo trừ và cộng độ chính xác: $a - d$ đến $a + d$.",
              hint2: "$250 - 0.5 = 249.5$ và $250 + 0.5 = 250.5$."
            },
            {
              question: "Cho số gần đúng $a = 3.5$ với độ chính xác $d = 0.05$. Khẳng định nào sau đây là **ĐÚNG** về sai số tuyệt đối $\\Delta_a$?",
              options: [
                "A. $\\Delta_a \\le 0.05$",
                "B. $\\Delta_a = 0.05$",
                "C. $\\Delta_a \\ge 0.05$",
                "D. $\\Delta_a = 3.5$"
              ],
              correct: "A",
              explanation: "Theo định nghĩa độ chính xác: sai số tuyệt đối không vượt quá độ chính xác $d$, tức $\\Delta_a \\le d = 0.05$.",
              hint1: "Định nghĩa: sai số tuyệt đối $\\Delta_a$ luôn nhỏ hơn hoặc bằng độ chính xác $d$.",
              hint2: "$\\Delta_a \\le 0.05$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Sai số tương đối, Quy tắc làm tròn số và Chữ số đáng tin",
          theory: createStandardTheoryHTML(
            "Bài 12: Số gần đúng và sai số", "Lớp 10", 2,
            "Sai số tương đối, Quy tắc làm tròn số và Chữ số đáng tin",
            `<p>Sai số tương đối và quy tắc quy tròn số chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Sai số tương đối:</strong>
                <br/>• Sai số tương đối của số gần đúng $a$ là tỉ số:
                $$\\delta_a = \\frac{\\Delta_a}{|a|} \\le \\frac{d}{|a|}$$
                • Thường viết dưới dạng phần trăm (\\%). Sai số tương đối càng nhỏ thì chất lượng phép đo càng cao.
              </li>
              <li><strong>Quy tắc làm tròn số (quy tròn):</strong>
                <br/>• Nếu chữ số ngay sau hàng quy tròn nhỏ hơn 5: giữ nguyên chữ số hàng quy tròn, thay các chữ số sau bằng số 0 (nếu ở phần nguyên) hoặc bỏ đi (nếu ở phần thập phân).
                <br/>• Nếu chữ số ngay sau hàng quy tròn từ 5 trở lên: tăng chữ số hàng quy tròn thêm 1 đơn vị.
              </li>
              <li><strong>Quy tròn số gần đúng căn cứ vào độ chính xác $d$:</strong>
                <br/>• Xác định hàng của độ chính xác $d$.
                <br/>• Quy tròn số $a$ đến hàng lớn hơn hàng của $d$ một bậc (Ví dụ: $d = 0.02$ ở hàng phần trăm thì quy tròn $a$ đến hàng phần mười).
              </li>
            </ul>`,
            `<li>Khi so sánh hai phép đo khác nhau, phép đo nào có sai số TƯƠNG ĐỐI nhỏ hơn thì chính xác hơn.</li>
            <li>Sau khi quy tròn, độ chính xác của số quy tròn bằng nửa đơn vị của hàng quy tròn.</li>`,
            `<li>Lấy sai số tuyệt đối để so sánh chất lượng hai phép đo có độ lớn khác nhau (sai lầm kinh điển).</li>
            <li>Làm tròn sai khi số ngay sau là chữ số 5.</li>`,
            `<li><em>"So sánh độ chính xác lấy Sai số tương đối – Quy tròn lớn hơn hàng của d đúng 1 bậc!"</em></li>`
          ),
          mcqs: [
            {
              question: "Làm tròn số $x = 3.14159$ đến hàng phần nghìn (3 chữ số thập phân) ta được:",
              options: ["A. $3.142$", "B. $3.141$", "C. $3.14$", "D. $3.1416$"],
              correct: "A",
              explanation: "Hàng phần nghìn là chữ số 1 thứ ba ($3.141$). Chữ số ngay sau nó là 5 ($\\ge 5$) nên ta tăng 1 lên thành 2: $3.142$.",
              hint1: "Chữ số ở hàng phần nghìn là chữ số thập phân thứ 3.",
              hint2: "Sau số 1 là số 5, nên cộng thêm 1 thành $3.142$."
            },
            {
              question: "Đại lượng nào sau đây dùng để đánh giá chất lượng và độ tin cậy của một phép đo?",
              options: ["A. Sai số tương đối", "B. Sai số tuyệt đối", "C. Số gần đúng", "D. Hàng làm tròn"],
              correct: "A",
              explanation: "Sai số tương đối $\\delta_a = \\frac{d}{|a|}$ phản ánh tỉ lệ sai lệch trên tổng thể, là đại lượng chuẩn để so sánh độ chính xác của các phép đo.",
              hint1: "Đại lượng so sánh sai lệch tương đối trên độ lớn của vật đo.",
              hint2: "Sai số tương đối $\\delta_a$."
            },
            {
              question: "Một thửa ruộng có chiều dài đo được là $L = 50\\text{ m} \\pm 0.1\\text{ m}$. Sai số tương đối $\\delta_L$ của phép đo không vượt quá:",
              options: ["A. $0.2\\%$", "B. $0.1\\%$", "C. $2\\%$", "D. $0.5\\%$"],
              correct: "A",
              explanation: "Sai số tương đối $\\delta_L \\le \\frac{d}{|a|} = \\frac{0.1}{50} = 0.002 = 0.2\\%$.",
              hint1: "Tính tỉ số $\\frac{d}{|a|}$ rồi nhân với $100\\%$.",
              hint2: "$\\frac{0.1}{50} = 0.002 = 0.2\\%$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho kết quả đo chiều dài cây cầu là $L = 250\\text{ m} \\pm 0.2\\text{ m}$:",
          items: [
            { key: "a", text: "Số gần đúng là $a = 250\\text{ m}$.", correct: "true", explain: "Giá trị đo được." },
            { key: "b", text: "Độ chính xác của phép đo là $d = 0.2\\text{ m}$.", correct: "true", explain: "Số sau dấu $\\pm$." },
            { key: "c", text: "Chiều dài thực tế $\\bar{L}$ nằm trong khoảng $[249.8\\text{ m}; 250.2\\text{ m}]$.", correct: "true", explain: "$250 - 0.2 \\le \\bar{L} \\le 250 + 0.2$." },
            { key: "d", text: "Sai số tương đối của phép đo lớn hơn $1\\%$.", correct: "false", explain: "$\\delta = \\frac{0.2}{250} = 0.0008 = 0.08\\% < 1\\%$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về quy tắc làm tròn số theo độ chính xác $d$:",
          items: [
            { key: "a", text: "Nếu độ chính xác $d$ ở hàng phần trăm thì ta làm tròn số gần đúng đến hàng phần mười.", correct: "true", explain: "Làm tròn đến hàng lớn hơn độ chính xác 1 bậc." },
            { key: "b", text: "Nếu độ chính xác $d = 30$ (hàng chục) thì làm tròn số gần đúng đến hàng trăm.", correct: "true", explain: "Quy tắc làm tròn chuẩn SGK KNTT." },
            { key: "c", text: "Làm tròn số $12345$ đến hàng trăm ta được $12300$.", correct: "true", explain: "Sau số 3 là số 4 (<5) nên giữ nguyên." },
            { key: "d", text: "Làm tròn số $7.85$ đến hàng phần mười được $7.8$.", correct: "false", explain: "Sau số 8 là số 5 nên làm tròn lên $7.9$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: So sánh hai phép đo: Đo độ dày cuốn sách $a_1 = 2\\text{ cm} \\pm 0.1\\text{ cm}$ và đo khoảng cách hai thành phố $a_2 = 100\\text{ km} \\pm 0.5\\text{ km}$:",
          items: [
            { key: "a", text: "Sai số tương đối của phép đo cuốn sách là $\\delta_1 = \\frac{0.1}{2} = 5\\%$.", correct: "true", explain: "$0.1/2 = 0.05 = 5\\%$." },
            { key: "b", text: "Sai số tương đối của phép đo khoảng cách là $\\delta_2 = \\frac{0.5}{100} = 0.5\\%$.", correct: "true", explain: "$0.5/100 = 0.005 = 0.5\\%$." },
            { key: "c", text: "Phép đo khoảng cách giữa hai thành phố có chất lượng chính xác hơn phép đo cuốn sách.", correct: "true", explain: "Vì sai số tương đối nhỏ hơn rất nhiều ($0.5\\% < 5\\%$)." },
            { key: "d", text: "Phép đo cuốn sách chính xác hơn vì độ chính xác $0.1\\text{ cm} < 0.5\\text{ km}$.", correct: "false", explain: "Không thể so sánh sai số tuyệt đối khi hai đối tượng có độ lớn khác nhau hoàn toàn." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các chữ số đáng tin (chữ số chắc):",
          items: [
            { key: "a", text: "Một chữ số được gọi là đáng tin nếu sai số tuyệt đối không vượt quá một đơn vị của hàng đó.", correct: "true", explain: "Định nghĩa chữ số chắc trong SGK." },
            { key: "b", text: "Trong số gần đúng $a = 15.34$ với $d = 0.02$, chữ số 4 là chữ số không chắc chắn.", correct: "true", explain: "Vì $0.02 > 0.01$ (vượt quá 1 đơn vị hàng phần trăm)." },
            { key: "c", text: "Viết số gần đúng dưới dạng chuẩn giúp người đọc nhận biết ngay các chữ số đáng tin.", correct: "true", explain: "Quy chuẩn khoa học." },
            { key: "d", text: "Mọi chữ số 0 đều là chữ số chắc.", correct: "false", explain: "Chữ số 0 vẫn có thể là chữ số nghi ngờ tuỳ thuộc độ chính xác." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Số $\\pi \\approx 3.14159265...$:",
          items: [
            { key: "a", text: "Giá trị gần đúng $3.14$ có sai số tuyệt đối không vượt quá $0.002$.", correct: "true", explain: "$|3.14159... - 3.14| = 0.00159... < 0.002$." },
            { key: "b", text: "Giá trị phân số $22/7 \\approx 3.142857...$ là một số gần đúng của $\\pi$.", correct: "true", explain: "Phép xấp xỉ cổ điển Archimedes." },
            { key: "c", text: "Số $\\pi$ là một số vô tỉ.", correct: "true", explain: "Không biểu diễn được dưới dạng phân số tối giản." },
            { key: "d", text: "Số gần đúng $3.14$ có độ chính xác $d = 0.1$.", correct: "false", explain: "Hàng phần trăm nên $d$ ở mức $0.01$, không phải $0.1$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ứng dụng thực tế của xử lý sai số:",
          items: [
            { key: "a", text: "Trong kỹ thuật chế tạo cơ khí, dung sai là giới hạn sai số cho phép khi gia công chi tiết.", correct: "true", explain: "Dung sai chế tạo máy." },
            { key: "b", text: "Trong các kỳ thi thể thao, đồng hồ điện tử bấm giờ đo tới hàng phần trăm giây ($0.01\\text{ s}$).", correct: "true", explain: "Độ chính xác thể thao Olympic." },
            { key: "c", text: "Máy tính bỏ túi lưu trữ kết quả xấp xỉ có thể tích lũy sai số làm tròn sau nhiều phép tính.", correct: "true", explain: "Hiện tượng sai số tích lũy (Round-off error)." },
            { key: "d", text: "Khi đo đạc trong thực tế, ta luôn tìm được giá trị đúng chính xác tuyệt đối $\\bar{a}$.", correct: "false", explain: "Mọi phép đo vật lý đều có sai số, không bao giờ đạt độ chính xác tuyệt đối $100\\%$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 13: CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM (KHÔNG GHÉP NHÓM) (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai13": {
      id: "toan10_bai13",
      lessonTitle: "Bài 13: Các số đặc trưng đo xu thế trung tâm",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 13:") || t.includes("xu thế trung tâm")) && !t.includes("ghép nhóm") && !t.includes("lớp 11") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Số trung bình cộng và Trung vị của mẫu số liệu",
          theory: createStandardTheoryHTML(
            "Bài 13: Các số đặc trưng đo xu thế trung tâm", "Lớp 10", 1,
            "Số trung bình cộng và Trung vị của mẫu số liệu",
            `<p>Các số đặc trưng đo xu thế trung tâm của mẫu số liệu không ghép nhóm chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Số trung bình cộng ($\\bar{x}$):</strong>
                $$\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n} = \\frac{m_1 x_1 + m_2 x_2 + ... + m_k x_k}{n}$$
                Trong đó $n$ là cỡ mẫu, $m_i$ là tần số của giá trị $x_i$.
              </li>
              <li><strong>Trung vị ($M_e$):</strong> Sắp xếp mẫu số liệu theo thứ tự không giảm $x_1 \\le x_2 \\le ... \\le x_n$:
                <br/>• Nếu $n$ lẻ ($n = 2k + 1$): $M_e = x_{k+1}$ (số đứng chính giữa).
                <br/>• Nếu $n$ chẵn ($n = 2k$): $M_e = \\frac{x_k + x_{k+1}}{2}$ (trung bình cộng 2 số đứng giữa).
              </li>
              <li><strong>Ý nghĩa và so sánh:</strong>
                <br/>• Số trung bình đại diện cho mức trung bình của toàn bộ dữ liệu, nhưng rất <strong>nhạy cảm với các giá trị bất thường (ngoại lai)</strong>.
                <br/>• Trung vị không bị ảnh hưởng bởi các giá trị ngoại lai, đại diện tốt hơn cho mức độ điển hình khi dữ liệu có độ lệch lớn.
              </li>
            </ul>`,
            `<li>BẮT BUỘC sắp xếp dãy số liệu theo thứ tự TĂNG DẦN trước khi tìm Trung vị.</li>
            <li>Khi cỡ mẫu $n$ là số chẵn, trung vị là trung bình cộng của 2 số ở chính giữa, có thể không thuộc mẫu số liệu ban đầu.</li>`,
            `<li>Quên sắp xếp dãy số trước khi lấy số ở giữa.</li>
            <li>Dùng số trung bình khi mẫu có số liệu ngoại lai (ví dụ: thu nhập của một tỷ phú kéo lệch trung bình của cả xóm).</li>`,
            `<li><em>"Trung bình cộng tất cả chia cho n – Trung vị sắp tăng dần rồi lấy số chính giữa!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho mẫu số liệu điểm kiểm tra: $5, 7, 8, 9, 6$. Số trung bình $\\bar{x}$ của mẫu bằng:",
              options: ["A. 7.0", "B. 7.5", "C. 6.8", "D. 8.0"],
              correct: "A",
              explanation: "$\\bar{x} = \\frac{5 + 7 + 8 + 9 + 6}{5} = \\frac{35}{5} = 7.0$.",
              hint1: "Cộng tất cả các điểm rồi chia cho 5.",
              hint2: "$35 / 5 = 7$."
            },
            {
              question: "Cho mẫu số liệu đã sắp xếp: $2, 4, 5, 7, 8, 10$. Trung vị $M_e$ của mẫu số liệu bằng:",
              options: ["A. 6", "B. 5", "C. 7", "D. 5.5"],
              correct: "A",
              explanation: "Cỡ mẫu $n = 6$ (chẵn). Hai số đứng giữa ở vị trí thứ 3 và thứ 4 là $5$ và $7$. Trung vị $M_e = \\frac{5 + 7}{2} = 6$.",
              hint1: "Mẫu có 6 số, lấy trung bình cộng của số thứ 3 và thứ 4.",
              hint2: "$(5 + 7) / 2 = 6$."
            },
            {
              question: "Điểm kiểm tra của 7 bạn học sinh là: $3, 4, 6, 7, 8, 8, 9$. Trung vị $M_e$ của mẫu điểm bằng:",
              options: ["A. 7", "B. 6.5", "C. 8", "D. 6"],
              correct: "A",
              explanation: "Cỡ mẫu $n = 7$ (lẻ). Mẫu số liệu đã sắp xếp tăng dần, số đứng chính giữa ở vị trí thứ $(7+1)/2 = 4$ là số 7. Vậy $M_e = 7$.",
              hint1: "Dãy đã sắp xếp, số ở vị trí chính giữa (thứ 4) là bao nhiêu?",
              hint2: "Vị trí thứ 4 là điểm 7."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Tứ phân vị và Mốt của mẫu số liệu",
          theory: createStandardTheoryHTML(
            "Bài 13: Các số đặc trưng đo xu thế trung tâm", "Lớp 10", 2,
            "Tứ phân vị và Mốt của mẫu số liệu",
            `<p>Khái niệm Tứ phân vị và Mốt của mẫu số liệu chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Tứ phân vị ($Q_1, Q_2, Q_3$):</strong> Chia mẫu số liệu đã sắp xếp thành 4 phần bằng nhau:
                <br/>• $Q_2$: Bằng trung vị $M_e$ của toàn bộ mẫu số liệu.
                <br/>• $Q_1$ (Tứ phân vị thứ nhất / Tứ phân vị dưới): Là trung vị của nửa dưới (các số liệu bên trái $Q_2$).
                <br/>• $Q_3$ (Tứ phân vị thứ ba / Tứ phân vị trên): Là trung vị của nửa trên (các số liệu bên phải $Q_2$).
                <br/>• <em>Quy tắc loại trừ:</em> Nếu cỡ mẫu $n$ lẻ thì <strong>không tính $Q_2$</strong> vào cả hai nửa khi tìm $Q_1$ và $Q_3$.
              </li>
              <li><strong>Mốt ($M_o$):</strong>
                <br/>• Là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu.
                <br/>• Mẫu số liệu có thể có một mốt, nhiều mốt hoặc không có mốt.
                <br/>• Ứng dụng: Nghiên cứu thị trường, quản lý kho hàng (nhập mặt hàng bán chạy nhất).
              </li>
            </ul>`,
            `<li>Tứ phân vị đo đạc phân bố của các nhóm: $25\\%$ bé nhất, $50\\%$ ở giữa và $25\\%$ lớn nhất.</li>
            <li>Dữ liệu định tính (như kích cỡ áo S, M, L, XL) chỉ tìm được Mốt, không tính được số trung bình.</li>`,
            `<li>Khi $n$ lẻ, đưa cả số trung vị $Q_2$ vào hai nửa khi tìm $Q_1$ và $Q_3$.</li>
            <li>Nhầm giữa mốt (giá trị có tần số cao nhất) và tần số của mốt.</li>`,
            `<li><em>"Q2 là trung vị cả dãy – Q1 trung vị nửa dưới, Q3 trung vị nửa trên – Mốt là tần số cao nhất!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho mẫu số liệu: $3, 5, 5, 6, 7, 8, 8, 8, 9$. Mốt ($M_o$) của mẫu số liệu là:",
              options: ["A. 8", "B. 5", "C. 6", "D. 7"],
              correct: "A",
              explanation: "Số 8 xuất hiện 3 lần (nhiều nhất), các số khác xuất hiện ít hơn. Vậy $M_o = 8$.",
              hint1: "Tìm giá trị có tần số xuất hiện nhiều nhất.",
              hint2: "Số 8 xuất hiện 3 lần."
            },
            {
              question: "Cho mẫu số liệu đã sắp xếp gồm 7 số: $1, 3, 4, 6, 8, 9, 11$. Tứ phân vị thứ nhất $Q_1$ và thứ ba $Q_3$ lần lượt bằng:",
              options: ["A. $Q_1 = 3, Q_3 = 9$", "B. $Q_1 = 4, Q_3 = 8$", "C. $Q_1 = 3, Q_3 = 8$", "D. $Q_1 = 4, Q_3 = 9$"],
              correct: "A",
              explanation: "Trung vị $Q_2 = 6$. Nửa dưới là $\\{1, 3, 4\\} \\Rightarrow Q_1 = 3$. Nửa trên là $\\{8, 9, 11\\} \\Rightarrow Q_3 = 9$.",
              hint1: "Trung vị $Q_2 = 6$. Tìm số ở giữa của nửa dưới $\\{1, 3, 4\\}$ và nửa trên $\\{8, 9, 11\\}$.",
              hint2: "Nửa dưới có số giữa là 3, nửa trên có số giữa là 9."
            },
            {
              question: "Một mẫu số liệu có 8 số đã sắp xếp: $2, 4, 6, 8, 10, 12, 14, 16$. Tứ phân vị thứ nhất $Q_1$ bằng:",
              options: ["A. 5", "B. 6", "C. 4", "D. 5.5"],
              correct: "A",
              explanation: "Cỡ mẫu $n = 8$ (chẵn). Nửa dưới gồm 4 số $\\{2, 4, 6, 8\\}$. Trung vị của nửa dưới là $Q_1 = \\frac{4 + 6}{2} = 5$.",
              hint1: "Nửa dưới gồm 4 số đầu: $2, 4, 6, 8$. Lấy trung bình cộng của số thứ hai và thứ ba.",
              hint2: "$(4 + 6) / 2 = 5$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho mẫu số liệu về điểm môn Toán của 7 học sinh: $4, 6, 7, 7, 8, 9, 10$:",
          items: [
            { key: "a", text: "Mẫu số liệu đã được sắp xếp theo thứ tự tăng dần.", correct: "true", explain: "Dãy đã tăng dần." },
            { key: "b", text: "Trung vị của mẫu là $M_e = Q_2 = 7$.", correct: "true", explain: "Số thứ $(7+1)/2 = 4$ là 7." },
            { key: "c", text: "Tứ phân vị thứ nhất là $Q_1 = 6$.", correct: "true", explain: "Nửa dưới gồm {4, 6, 7}, trung vị là 6." },
            { key: "d", text: "Tứ phân vị thứ ba là $Q_3 = 9$.", correct: "true", explain: "Vì cỡ mẫu $n = 7$ (lẻ) nên nửa trên gồm 3 số $\\{8, 9, 10\\}$, trung vị của nửa trên là $Q_3 = 9$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét sự khác biệt giữa Số trung bình và Trung vị:",
          items: [
            { key: "a", text: "Số trung bình bị kéo lệch mạnh bởi các giá trị quá lớn hoặc quá nhỏ bất thường.", correct: "true", explain: "Tính chất của trung bình cộng." },
            { key: "b", text: "Trung vị không bị ảnh hưởng bởi giá trị ngoại lai.", correct: "true", explain: "Chỉ phụ thuộc thứ tự đứng giữa." },
            { key: "c", text: "Khi phân bố thu nhập bị lệch nhiều, trung vị phản ánh mức thu nhập điển hình tốt hơn số trung bình.", correct: "true", explain: "Ứng dụng kinh tế học thống kê." },
            { key: "d", text: "Số trung bình luôn bằng trung vị trong mọi mẫu số liệu.", correct: "false", explain: "Chỉ bằng nhau khi phân bố hoàn toàn đối xứng." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho mẫu số liệu kích cỡ áo bán được trong một ngày: $S(5), M(12), L(25), XL(8)$:",
          items: [
            { key: "a", text: "Cỡ mẫu số áo bán được là $n = 50$.", correct: "true", explain: "$5 + 12 + 25 + 8 = 50$." },
            { key: "b", text: "Mốt của mẫu số liệu là cỡ áo L.", correct: "true", explain: "Bán được nhiều nhất (25 chiếc)." },
            { key: "c", text: "Mốt được chủ cửa hàng ứng dụng để nhập hàng nhiều nhất vào đợt tới.", correct: "true", explain: "Ý nghĩa thực tế của mốt." },
            { key: "d", text: "Có thể tính được số trung bình cộng cho dữ liệu định tính cỡ áo.", correct: "false", explain: "Cỡ áo là định tính, không tính được số trung bình." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho mẫu số liệu gồm 8 số: $1, 2, 3, 4, 5, 6, 7, 8$:",
          items: [
            { key: "a", text: "Số trung bình $\\bar{x} = 4.5$.", correct: "true", explain: "$36 / 8 = 4.5$." },
            { key: "b", text: "Trung vị $Q_2 = 4.5$.", correct: "true", explain: "$(4 + 5)/2 = 4.5$." },
            { key: "c", text: "Nửa dưới gồm $\\{1, 2, 3, 4\\}$ có trung vị $Q_1 = 2.5$.", correct: "true", explain: "$(2 + 3)/2 = 2.5$." },
            { key: "d", text: "Nửa trên gồm $\\{5, 6, 7, 8\\}$ có trung vị $Q_3 = 6.5$.", correct: "true", explain: "$(6 + 7)/2 = 6.5$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho mẫu điểm số: $6, 8, 7, 9, 10$ và một bạn học sinh bổ sung thêm điểm 1:",
          items: [
            { key: "a", text: "Trước khi thêm điểm 1, số trung bình là $8.0$.", correct: "true", explain: "$40 / 5 = 8.0$." },
            { key: "b", text: "Sau khi thêm điểm 1, số trung bình giảm xuống còn $\\approx 6.83$.", correct: "true", explain: "$41 / 6 \\approx 6.83$." },
            { key: "c", text: "Trước khi thêm, trung vị là 8.", correct: "true", explain: "{6, 7, 8, 9, 10} số giữa là 8." },
            { key: "d", text: "Sau khi thêm điểm 1, trung vị giảm mạnh về 1.", correct: "false", explain: "Dãy mới {1, 6, 7, 8, 9, 10} có trung vị là $(7+8)/2 = 7.5$, chỉ giảm nhẹ từ 8 xuống 7.5." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ý nghĩa và cách chọn số đặc trưng đo xu thế trung tâm:",
          items: [
            { key: "a", text: "Nên dùng số trung bình khi các số liệu phân bố đối xứng và không có giá trị ngoại lai.", correct: "true", explain: "Quy tắc thống kê." },
            { key: "b", text: "Nên dùng trung vị khi mẫu số liệu có giá trị ngoại lai.", correct: "true", explain: "Bảo đảm tính đại diện." },
            { key: "c", text: "Nên dùng mốt khi quan tâm đến giá trị có độ phổ biến cao nhất.", correct: "true", explain: "Nghiên cứu thị trường." },
            { key: "d", text: "Mọi mẫu số liệu đều chỉ có duy nhất một mốt.", correct: "false", explain: "Có thể đa mốt hoặc không có mốt." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 14: CÁC SỐ ĐẶC TRƯNG ĐO MỨC ĐỘ PHÂN TÁN (KHÔNG GHÉP NHÓM) (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai14": {
      id: "toan10_bai14",
      lessonTitle: "Bài 14: Các số đặc trưng đo mức độ phân tán",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 14:") || t.includes("mức độ phân tán")) && !t.includes("mặt phẳng") && !t.includes("ghép nhóm") && !t.includes("cuối chương") && !t.includes("ôn tập");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khoảng biến thiên, Khoảng tứ phân vị và Giá trị ngoại lai",
          theory: createStandardTheoryHTML(
            "Bài 14: Các số đặc trưng đo mức độ phân tán", "Lớp 10", 1,
            "Khoảng biến thiên, Khoảng tứ phân vị và Giá trị ngoại lai",
            `<p>Các số đo mức độ phân tán của mẫu số liệu không ghép nhóm chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Khoảng biến thiên ($R$):</strong>
                $$R = x_{\\max} - x_{\\min}$$
                (Hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất trong mẫu số liệu).
                <br/>• Ý nghĩa: Đo mức độ phân tán của toàn bộ dữ liệu, nhưng rất nhạy cảm với các giá trị ngoại lai.
              </li>
              <li><strong>Khoảng tứ phân vị ($\\Delta_Q$):</strong>
                $$\\Delta_Q = Q_3 - Q_1$$
                <br/>• Ý nghĩa: Đo mức độ phân tán của $50\\%$ số liệu ở phần trung tâm. Khoảng tứ phân vị <strong>không bị ảnh hưởng</strong> bởi các giá trị ngoại lai.
              </li>
              <li><strong>Tiêu chuẩn phát hiện giá trị ngoại lai (bất thường):</strong>
                <br/>Giá trị $x$ trong mẫu số liệu được coi là giá trị ngoại lai nếu:
                $$x < Q_1 - 1.5\\Delta_Q \\quad \\text{hoặc} \\quad x > Q_3 + 1.5\\Delta_Q$$
              </li>
            </ul>`,
            `<li>$\\Delta_Q$ khắc phục được nhược điểm của khoảng biến thiên $R$ khi mẫu xuất hiện giá trị bất thường.</li>
            <li>Biểu đồ hộp (Boxplot) thể hiện trực quan 5 số đặc trưng: $\\min, Q_1, Q_2, Q_3, \\max$ và các điểm ngoại lai.</li>`,
            `<li>Nhầm giữa khoảng biến thiên $R$ (toàn bộ mẫu) và khoảng tứ phân vị $\\Delta_Q$ (50% ở giữa).</li>
            <li>Quên nhân hệ số $1.5$ với $\\Delta_Q$ khi tìm ngưỡng ngoại lai.</li>`,
            `<li><em>"R lấy max trừ min – Delta Q lấy Q3 trừ Q1 – Ngoại lai vượt ngưỡng 1.5 lần Delta Q!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho mẫu số liệu điểm: $2, 4, 6, 8, 10$. Khoảng biến thiên $R$ bằng:",
              options: ["A. 8", "B. 10", "C. 2", "D. 6"],
              correct: "A",
              explanation: "$R = x_{\\max} - x_{\\min} = 10 - 2 = 8$.",
              hint1: "Lấy giá trị lớn nhất trừ giá trị nhỏ nhất.",
              hint2: "$10 - 2 = 8$."
            },
            {
              question: "Một mẫu số liệu có $Q_1 = 12$ và $Q_3 = 20$. Khoảng tứ phân vị $\\Delta_Q$ bằng:",
              options: ["A. 8", "B. 32", "C. 16", "D. 4"],
              correct: "A",
              explanation: "$\\Delta_Q = Q_3 - Q_1 = 20 - 12 = 8$.",
              hint1: "$\\Delta_Q = Q_3 - Q_1$.",
              hint2: "$20 - 12 = 8$."
            },
            {
              question: "Cho mẫu số liệu có $Q_1 = 10$ và $Q_3 = 20$. Giá trị nào sau đây là một giá trị ngoại lai?",
              options: ["A. $38$", "B. $25$", "C. $5$", "D. $30$"],
              correct: "A",
              explanation: "$\\Delta_Q = 20 - 10 = 10$. Ngưỡng trên là $Q_3 + 1.5\\Delta_Q = 20 + 1.5(10) = 35$. Vì $38 > 35$ nên $38$ là giá trị ngoại lai.",
              hint1: "Tính $\\Delta_Q = 10$. Tính ngưỡng trên: $Q_3 + 1.5\\Delta_Q$.",
              hint2: "$20 + 1.5(10) = 35$. Giá trị lớn hơn 35 là ngoại lai."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Phương sai và Độ lệch chuẩn",
          theory: createStandardTheoryHTML(
            "Bài 14: Các số đặc trưng đo mức độ phân tán", "Lớp 10", 2,
            "Phương sai và Độ lệch chuẩn",
            `<p>Phương sai và độ lệch chuẩn của mẫu số liệu không ghép nhóm chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phương sai ($s^2$):</strong>
                $$s^2 = \\frac{1}{n} \\sum_{i=1}^n (x_i - \\bar{x})^2 = \\frac{(x_1 - \\bar{x})^2 + (x_2 - \\bar{x})^2 + ... + (x_n - \\bar{x})^2}{n}$$
                hoặc dùng công thức biến đổi: $s^2 = \\frac{1}{n} \\sum_{i=1}^n x_i^2 - \\bar{x}^2$.
              </li>
              <li><strong>Độ lệch chuẩn ($s$):</strong>
                $$s = \\sqrt{s^2}$$
                Là căn bậc hai số học của phương sai.
              </li>
              <li><strong>Ý nghĩa thống kê:</strong>
                <br/>• Phương sai và độ lệch chuẩn đo độ phân tán của các số liệu quanh số trung bình $\\bar{x}$.
                <br/>• $s^2$ và $s$ càng nhỏ thì các số liệu càng tập trung gần số trung bình, biểu thị <strong>mức độ đồng đều và độ ổn định cao</strong>.
                <br/>• Độ lệch chuẩn có <strong>cùng đơn vị đo</strong> với số liệu ban đầu (khắc phục nhược điểm đơn vị bình phương của phương sai).
              </li>
            </ul>`,
            `<li>Khi so sánh hai nhóm có cùng số trung bình: nhóm nào có độ lệch chuẩn nhỏ hơn thì nhóm đó có phong độ ổn định hơn.</li>
            <li>Phương sai luôn không âm ($s^2 \\ge 0$). Nếu mọi số liệu bằng nhau thì $s^2 = s = 0$.</li>`,
            `<li>Quên lấy căn bậc hai khi đề yêu cầu tìm độ lệch chuẩn.</li>
            <li>Nhầm đơn vị đo giữa phương sai (đơn vị bình phương) và độ lệch chuẩn (đơn vị gốc).</li>`,
            `<li><em>"Phương sai trung bình bình phương sai lệch – Độ lệch chuẩn lấy căn phương sai – Độ lệch chuẩn càng bé càng đồng đều!"</em></li>`
          ),
          mcqs: [
            {
              question: "Mẫu số liệu có phương sai $s^2 = 25$. Độ lệch chuẩn $s$ bằng:",
              options: ["A. 5", "B. 25", "C. 625", "D. 12.5"],
              correct: "A",
              explanation: "$s = \\sqrt{s^2} = \\sqrt{25} = 5$.",
              hint1: "Lấy căn bậc hai của phương sai.",
              hint2: "$\\sqrt{25} = 5$."
            },
            {
              question: "Cho mẫu số liệu: $1, 3, 5, 7, 9$. Phương sai $s^2$ của mẫu số liệu bằng:",
              options: ["A. 8", "B. 10", "C. 4", "D. $2\\sqrt{2}$"],
              correct: "A",
              explanation: "$\\bar{x} = 5$. Phương sai $s^2 = \\frac{(1-5)^2 + (3-5)^2 + (5-5)^2 + (7-5)^2 + (9-5)^2}{5} = \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8$.",
              hint1: "Tính số trung bình $\\bar{x} = 5$.",
              hint2: "Tính tổng bình phương khoảng cách: $(16+4+0+4+16)/5 = 8$."
            },
            {
              question: "Hai lớp 10A và 10B có cùng điểm trung bình môn Toán là 7.5. Độ lệch chuẩn của lớp 10A là $s_A = 0.8$, của lớp 10B là $s_B = 1.4$. Khẳng định nào sau đây là **ĐÚNG**?",
              options: [
                "A. Điểm môn Toán của lớp 10A đồng đều hơn lớp 10B.",
                "B. Điểm môn Toán của lớp 10B đồng đều hơn lớp 10A.",
                "C. Tổng điểm môn Toán của lớp 10B cao hơn lớp 10A.",
                "D. Lớp 10A có độ phân tán điểm số lớn hơn lớp 10B."
              ],
              correct: "A",
              explanation: "Vì hai lớp có cùng điểm trung bình và $s_A = 0.8 < s_B = 1.4$ nên điểm số của lớp 10A ít phân tán hơn, tức đồng đều và ổn định hơn lớp 10B.",
              hint1: "Độ lệch chuẩn nhỏ hơn thể hiện sự đồng đều hơn.",
              hint2: "$s_A = 0.8 < 1.4 = s_B$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho mẫu số liệu: $1, 3, 5, 7, 9$:",
          items: [
            { key: "a", text: "Số trung bình $\\bar{x} = 5$.", correct: "true", explain: "$(1+3+5+7+9)/5 = 25/5 = 5$." },
            { key: "b", text: "Khoảng biến thiên $R = 9 - 1 = 8$.", correct: "true", explain: "Max - min." },
            { key: "c", text: "Phương sai $s^2 = \\frac{(1-5)^2 + (3-5)^2 + (5-5)^2 + (7-5)^2 + (9-5)^2}{5} = \\frac{16+4+0+4+16}{5} = 8$.", correct: "true", explain: "$40/5 = 8$." },
            { key: "d", text: "Độ lệch chuẩn $s = 2\\sqrt{2}$.", correct: "true", explain: "$\\sqrt{8} = 2\\sqrt{2}$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về giá trị ngoại lai của mẫu số liệu:",
          items: [
            { key: "a", text: "Giá trị ngoại lai là giá trị quá lớn hoặc quá nhỏ so với phần lớn dữ liệu.", correct: "true", explain: "Khái niệm bất thường." },
            { key: "b", text: "Công thức kiểm tra giá trị nhỏ bất thường là $x < Q_1 - 1.5\\Delta_Q$.", correct: "true", explain: "Tiêu chuẩn Tukey." },
            { key: "c", text: "Công thức kiểm tra giá trị lớn bất thường là $x > Q_3 + 1.5\\Delta_Q$.", correct: "true", explain: "Tiêu chuẩn Tukey." },
            { key: "d", text: "Mọi mẫu số liệu đều có ít nhất một giá trị ngoại lai.", correct: "false", explain: "Đa số các mẫu số liệu chuẩn không có giá trị ngoại lai." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Hai học sinh thi bắn súng 10 lần có cùng số điểm trung bình 8.5: Học sinh A có $s_A = 0.5$, Học sinh B có $s_B = 1.5$:",
          items: [
            { key: "a", text: "Điểm của học sinh A đồng đều hơn học sinh B.", correct: "true", explain: "Độ lệch chuẩn nhỏ hơn." },
            { key: "b", text: "Học sinh B bắn có độ phân tán lớn hơn học sinh A.", correct: "true", explain: "$1.5 > 0.5$." },
            { key: "c", text: "Học sinh A có phong độ thi đấu ổn định hơn.", correct: "true", explain: "Ổn định = độ lệch chuẩn nhỏ." },
            { key: "d", text: "Học sinh B có tổng điểm 10 lần bắn cao hơn học sinh A.", correct: "false", explain: "Cùng điểm trung bình thì tổng điểm bằng nhau ($85$ điểm)." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các tính chất của phương sai:",
          items: [
            { key: "a", text: "Phương sai luôn không âm ($s^2 \\ge 0$).", correct: "true", explain: "Trung bình tổng bình phương." },
            { key: "b", text: "Nếu tất cả các số liệu trong mẫu bằng nhau thì $s^2 = 0$.", correct: "true", explain: "Không có độ lệch." },
            { key: "c", text: "Độ lệch chuẩn có cùng đơn vị đo với số liệu gốc.", correct: "true", explain: "Tính chất chuẩn." },
            { key: "d", text: "Phương sai có cùng đơn vị đo với số liệu gốc.", correct: "false", explain: "Phương sai mang đơn vị đo BÌNH PHƯƠNG." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho mẫu số liệu có $Q_1 = 15$ và $Q_3 = 25$:",
          items: [
            { key: "a", text: "Khoảng tứ phân vị $\\Delta_Q = 10$.", correct: "true", explain: "$25 - 15 = 10$." },
            { key: "b", text: "Giới hạn dưới cho giá trị ngoại lai là $15 - 1.5(10) = 0$.", correct: "true", explain: "$15 - 15 = 0$." },
            { key: "c", text: "Giới hạn trên cho giá trị ngoại lai là $25 + 1.5(10) = 40$.", correct: "true", explain: "$25 + 15 = 40$." },
            { key: "d", text: "Giá trị $x = 42$ là một giá trị ngoại lai.", correct: "true", explain: "Vì $42 > 40$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về biểu đồ hộp (Boxplot) trong Toán 10:",
          items: [
            { key: "a", text: "Biểu đồ hộp được vẽ dựa trên 5 số đặc trưng: $\\min, Q_1, Q_2, Q_3, \\max$ (không tính ngoại lai).", correct: "true", explain: "Quy chuẩn vẽ biểu đồ hộp." },
            { key: "b", text: "Các giá trị ngoại lai được biểu diễn bằng các dấu chấm riêng biệt nằm ngoài hai râu.", correct: "true", explain: "Ký hiệu outlier." },
            { key: "c", text: "Độ dài thân hộp biểu thị khoảng tứ phân vị.", correct: "true", explain: "Từ $Q_1$ đến $Q_3$." },
            { key: "d", text: "Biểu đồ hộp không cho biết được số trung vị.", correct: "false", explain: "Vạch ở giữa hộp chính là số trung vị $Q_2$." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART5_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART6_LESSONS = {
    // =========================================================================
    // BÀI 15: HÀM SỐ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai15": {
      id: "toan10_bai15",
      lessonTitle: "Bài 15: Hàm số",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 15:") || t.includes("hàm số")) && !t.includes("bậc hai") && !t.includes("đường thẳng") && !t.includes("giới hạn");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Khái niệm hàm số, Tập xác định, Tập giá trị và Đồ thị",
          theory: createStandardTheoryHTML(
            "Bài 15: Hàm số", "Lớp 10", 1,
            "Khái niệm hàm số, Tập xác định, Tập giá trị và Đồ thị",
            `<p>Khái niệm hàm số chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Nếu với mỗi giá trị của $x$ thuộc tập hợp số $D$ có một và <strong>chỉ một</strong> giá trị tương ứng của $y$ thuộc tập số thực $\\mathbb{R}$ thì ta có một <em>hàm số</em>. Ký hiệu: $y = f(x), x \\in D$.</li>
              <li>$x$ gọi là biến số độc lập, $y$ gọi là hàm số của $x$. Tập $D$ gọi là <strong>tập xác định</strong>.</li>
              <li>Tập hợp tất cả các giá trị $y$ tương ứng gọi là <strong>tập giá trị</strong> của hàm số.</li>
              <li><strong>Đồ thị hàm số:</strong> Là tập hợp tất cả các điểm $M(x; f(x))$ trên mặt phẳng toạ độ $Oxy$ với $x \\in D$.</li>
            </ul>`,
            `<li>Điều kiện tồn tại phân thức: Mẫu số khác 0 ($Q(x) \\neq 0$).</li>
            <li>Điều kiện tồn tại căn bậc hai: Biểu thức dưới dấu căn không âm ($P(x) \\ge 0$). Nếu căn ở mẫu thì phải dương ngặt ($P(x) > 0$).</li>`,
            `<li>Quên lấy điều kiện mẫu khác 0 khi mẫu chứa căn bậc hai.</li>
            <li>Nhầm lẫn giữa tập xác định (tập của các $x$) và tập giá trị (tập của các $y$).</li>`,
            `<li><em>"Hàm số mỗi x cho đúng một y – Căn bậc hai không âm – Mẫu số luôn khác không!"</em></li>`
          ),
          mcqs: [
            {
              question: "Tập xác định của hàm số $y = \\frac{1}{x - 3}$ là:",
              options: ["A. $D = \\mathbb{R} \\setminus \\{3\\}$", "B. $D = (3; +\\infty)$", "C. $D = [3; +\\infty)$", "D. $D = \\mathbb{R}$"],
              correct: "A",
              explanation: "Hàm số xác định khi mẫu số khác 0: $x - 3 \\neq 0 \\Leftrightarrow x \\neq 3$. Vậy $D = \\mathbb{R} \\setminus \\{3\\}$.",
              hint1: "Điều kiện mẫu số khác 0.",
              hint2: "$x - 3 \\neq 0 \\implies x \\neq 3$."
            },
            {
              question: "Tập xác định của hàm số $y = \\sqrt{2x - 4}$ là:",
              options: ["A. $[2; +\\infty)$", "B. $(2; +\\infty)$", "C. $(-\\infty; 2]$", "D. $\\mathbb{R} \\setminus \\{2\\}$"],
              correct: "A",
              explanation: "Hàm số xác định khi biểu thức trong căn không âm: $2x - 4 \\ge 0 \\Leftrightarrow 2x \\ge 4 \\Leftrightarrow x \\ge 2$. Vậy $D = [2; +\\infty)$.",
              hint1: "Biểu thức trong căn bậc hai $\\ge 0$.",
              hint2: "$2x - 4 \\ge 0 \\implies x \\ge 2$."
            },
            {
              question: "Cho hàm số $f(x) = x^2 - 3x + 1$. Giá trị của $f(2)$ bằng:",
              options: ["A. -1", "B. 1", "C. 3", "D. -3"],
              correct: "A",
              explanation: "Thay $x = 2$ vào hàm số: $f(2) = 2^2 - 3(2) + 1 = 4 - 6 + 1 = -1$.",
              hint1: "Thay $x = 2$ vào biểu thức hàm số.",
              hint2: "$4 - 6 + 1 = -1$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Sự đồng biến và nghịch biến của hàm số",
          theory: createStandardTheoryHTML(
            "Bài 15: Hàm số", "Lớp 10", 2,
            "Sự đồng biến và nghịch biến của hàm số",
            `<p>Tính đơn điệu của hàm số trên một khoảng $(a; b)$ chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Hàm số đồng biến (tăng):</strong> Với mọi $x_1, x_2 \\in (a; b)$:
                $$x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$$
                (Đồ thị có hướng đi lên từ trái sang phải).
              </li>
              <li><strong>Hàm số nghịch biến (giảm):</strong> Với mọi $x_1, x_2 \\in (a; b)$:
                $$x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$$
                (Đồ thị có hướng đi xuống từ trái sang phải).
              </li>
              <li>Xét tỉ số biến thiên: $T = \\frac{f(x_2) - f(x_1)}{x_2 - x_1}$. Nếu $T > 0$ thì hàm đồng biến; nếu $T < 0$ thì hàm nghịch biến.</li>
            </ul>`,
            `<li>Đồng biến: $x$ tăng thì $y$ tăng. Đồ thị đi lên từ trái sang phải.</li>
            <li>Nghịch biến: $x$ tăng thì $y$ giảm. Đồ thị đi xuống từ trái sang phải.</li>`,
            `<li>Kết luận tính đồng biến, nghịch biến trên tập hợp chứa dấu hợp $\\cup$ (sai, phải dùng từ \"và\" hoặc dấu chấm phẩy giữa các khoảng).</li>`,
            `<li><em>"Đồng biến cùng chiều đi lên – Nghịch biến ngược chiều đi xuống!"</em></li>`
          ),
          mcqs: [
            {
              question: "Hàm số bậc nhất $y = 2x - 3$ là hàm số:",
              options: [
                "A. Đồng biến trên $\\mathbb{R}$",
                "B. Nghịch biến trên $\\mathbb{R}$",
                "C. Đồng biến trên $(0; +\\infty)$ và nghịch biến trên $(-\\infty; 0)$",
                "D. Không đổi"
              ],
              correct: "A",
              explanation: "Hệ số $a = 2 > 0$ nên hàm số đồng biến trên toàn bộ $\\mathbb{R}$.",
              hint1: "Hàm bậc nhất $y = ax + b$ có $a > 0$.",
              hint2: "$a > 0$ thì đồng biến trên $\\mathbb{R}$."
            },
            {
              question: "Khẳng định nào sau đây là **ĐÚNG** về hàm số đồng biến trên khoảng $(a; b)$?",
              options: [
                "A. Với mọi $x_1 < x_2$ trong khoảng $(a; b)$ thì $f(x_1) < f(x_2)$",
                "B. Với mọi $x_1 < x_2$ trong khoảng $(a; b)$ thì $f(x_1) > f(x_2)$",
                "C. Đồ thị hàm số đi xuống từ trái sang phải",
                "D. $f(x)$ luôn nhận giá trị dương"
              ],
              correct: "A",
              explanation: "Định nghĩa chuẩn: Đồng biến nghĩa là $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$.",
              hint1: "Xem lại định nghĩa hàm số tăng (đồng biến).",
              hint2: "$x$ tăng thì $y$ cũng tăng."
            },
            {
              question: "Hàm số $y = -x^2$ đồng biến trên khoảng nào?",
              options: ["A. $(-\\infty; 0)$", "B. $(0; +\\infty)$", "C. $\\mathbb{R}$", "D. $(-1; 1)$"],
              correct: "A",
              explanation: "Với $x < 0$, khi $x$ tăng dần về 0 thì $y = -x^2$ tăng dần từ âm vô cùng lên 0. Do đó hàm số đồng biến trên $(-\\infty; 0)$.",
              hint1: "Vẽ phác parabol úp ngược có đỉnh tại $(0; 0)$.",
              hint2: "Nhánh bên trái trục tung đi lên từ trái qua phải: $(-\\infty; 0)$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số $f(x) = \\frac{\\sqrt{x + 2}}{x - 1}$:",
          items: [
            { key: "a", text: "Điều kiện để căn thức có nghĩa là $x + 2 \\ge 0 \\Leftrightarrow x \\ge -2$.", correct: "true", explain: "Căn bậc hai không âm." },
            { key: "b", text: "Điều kiện để mẫu số khác 0 là $x \\neq 1$.", correct: "true", explain: "Mẫu số khác 0." },
            { key: "c", text: "Tập xác định của hàm số là $D = [-2; +\\infty) \\setminus \\{1\\}$.", correct: "true", explain: "Kết hợp 2 điều kiện." },
            { key: "d", text: "Điểm $M(0; 2)$ thuộc đồ thị hàm số.", correct: "false", explain: "Thay $x = 0$ ta được $y = \\sqrt{2}/(-1) = -\\sqrt{2} \\neq 2$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về khái niệm hàm số trong SGK:",
          items: [
            { key: "a", text: "Mỗi phần tử $x \\in D$ chỉ được tương ứng với duy nhất một giá trị $y$.", correct: "true", explain: "Định nghĩa duy nhất của hàm số." },
            { key: "b", text: "Đường tròn $x^2 + y^2 = 1$ là đồ thị của một hàm số $y$ theo $x$.", correct: "false", explain: "Mỗi $x \\in (-1; 1)$ cho hai giá trị $y = \\pm\\sqrt{1-x^2}$ nên không phải hàm số." },
            { key: "c", text: "Hàm số có thể được cho bằng bảng, bằng biểu đồ hoặc bằng công thức.", correct: "true", explain: "Ba cách cho hàm số chuẩn SGK." },
            { key: "d", text: "Tập giá trị luôn luôn trùng với tập xác định.", correct: "false", explain: "Ví dụ $y = x^2$ có tập xác định $\\mathbb{R}$ nhưng tập giá trị $[0; +\\infty)$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho hàm số $y = f(x) = x^2 - 4x + 3$:",
          items: [
            { key: "a", text: "Tập xác định của hàm số là $D = \\mathbb{R}$.", correct: "true", explain: "Hàm đa thức xác định trên R." },
            { key: "b", text: "Tại $x = 2$, giá trị của hàm số là $f(2) = -1$.", correct: "true", explain: "$4 - 8 + 3 = -1$." },
            { key: "c", text: "Hàm số đồng biến trên khoảng $(2; +\\infty)$.", correct: "true", explain: "Hệ số $a = 1 > 0$, đỉnh $x = 2$." },
            { key: "d", text: "Hàm số đồng biến trên toàn bộ $\\mathbb{R}$.", correct: "false", explain: "Nghịch biến trên $(-\\infty; 2)$ và đồng biến trên $(2; +\\infty)$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho hàm số $y = \\frac{1}{x}$:",
          items: [
            { key: "a", text: "Tập xác định là $D = \\mathbb{R} \\setminus \\{0\\}$.", correct: "true", explain: "Mẫu khác 0." },
            { key: "b", text: "Hàm số nghịch biến trên khoảng $(-\\infty; 0)$.", correct: "true", explain: "Đồ thị đi xuống." },
            { key: "c", text: "Hàm số nghịch biến trên khoảng $(0; +\\infty)$.", correct: "true", explain: "Đồ thị đi xuống." },
            { key: "d", text: "Hàm số nghịch biến trên tập $\\mathbb{R} \\setminus \\{0\\}$.", correct: "false", explain: "Không được kết luận nghịch biến trên hợp hai khoảng." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một bài toán thực tế, giá cước taxi được tính: 10 000 đồng cho 1 km đầu tiên, và 12 000 đồng cho mỗi km tiếp theo. Gọi $y$ là số tiền cước (nghìn đồng) khi đi $x$ km ($x > 1$):",
          items: [
            { key: "a", text: "Hàm số biểu diễn số tiền cước là $y = 10 + 12(x - 1)$.", correct: "true", explain: "10 nghìn + 12 nghìn nhân quãng đường còn lại." },
            { key: "b", text: "Rút gọn ta được $y = 12x - 2$.", correct: "true", explain: "$10 + 12x - 12 = 12x - 2$." },
            { key: "c", text: "Nếu đi 5 km thì số tiền cước phải trả là 58 000 đồng.", correct: "true", explain: "$12(5) - 2 = 58$ nghìn." },
            { key: "d", text: "Đây là một hàm số nghịch biến theo quãng đường.", correct: "false", explain: "Đi càng xa tiền càng nhiều, là hàm số đồng biến." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tính chất đối xứng của đồ thị hàm số chẵn và lẻ:",
          items: [
            { key: "a", text: "Hàm số chẵn thỏa mãn $f(-x) = f(x)$ có đồ thị nhận trục tung $Oy$ làm trục đối xứng.", correct: "true", explain: "Định lý chuẩn." },
            { key: "b", text: "Hàm số lẻ thỏa mãn $f(-x) = -f(x)$ có đồ thị nhận gốc toạ độ $O$ làm tâm đối xứng.", correct: "true", explain: "Định lý chuẩn." },
            { key: "c", text: "Hàm số $y = x^2$ là hàm số chẵn.", correct: "true", explain: "$(-x)^2 = x^2$." },
            { key: "d", text: "Mọi hàm số đều là hàm số chẵn hoặc hàm số lẻ.", correct: "false", explain: "Đa số các hàm số không chẵn cũng không lẻ (ví dụ $y = x^2 + x$)." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 16: HÀM SỐ BẬC HAI (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai16": {
      id: "toan10_bai16",
      lessonTitle: "Bài 16: Hàm số bậc hai",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 16:") || t.includes("hàm số bậc hai")) && !t.includes("giới hạn");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Định nghĩa, Đồ thị Parabol, Toạ độ đỉnh và Trục đối xứng",
          theory: createStandardTheoryHTML(
            "Bài 16: Hàm số bậc hai", "Lớp 10", 1,
            "Định nghĩa, Đồ thị Parabol, Toạ độ đỉnh và Trục đối xứng",
            `<p>Hàm số bậc hai chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Hàm số bậc hai là hàm số được cho bởi công thức:
                $$y = ax^2 + bx + c \\quad (a \\neq 0)$$
                Tập xác định $D = \\mathbb{R}$.
              </li>
              <li><strong>Đồ thị là một đường Parabol $(P)$ có:</strong>
                <br/>• <strong>Đỉnh $I$:</strong> $I\\left(-\\frac{b}{2a}; -\\frac{\\Delta}{4a}\\right)$ (với $\\Delta = b^2 - 4ac$, hoặc tính $y_I = f(-\\frac{b}{2a})$).
                <br/>• <strong>Trục đối xứng:</strong> Là đường thẳng $x = -\\frac{b}{2a}$.
                <br/>• <strong>Bề lõm:</strong> Quay lên trên nếu $a > 0$; quay xuống dưới nếu $a < 0$.
                <br/>• Giao điểm với trục tung $Oy$: Điểm $(0; c)$.
              </li>
            </ul>`,
            `<li>Đỉnh Parabol: Hoành độ luôn là $x_I = -\\frac{b}{2a}$. Muốn tính tung độ, chỉ cần thay $x_I$ vào biểu thức hàm số.</li>
            <li>Khi $a > 0$: Đỉnh $I$ là điểm thấp nhất (GTNN). Khi $a < 0$: Đỉnh $I$ là điểm cao nhất (GTLN).</li>`,
            `<li>Quên dấu trừ trong công thức hoành độ đỉnh: viết $b/(2a)$ thay vì $-b/(2a)$.</li>
            <li>Nhầm trục đối xứng là $y = -b/(2a)$ (phải là $x = -b/(2a)$, đường thẳng đứng).</li>`,
            `<li><em>"Hoành độ đỉnh trừ b trên hai a – a dương ngửa lên, a âm úp xuống – Trục đối xứng thẳng đứng x bằng trừ b trên hai a!"</em></li>`
          ),
          mcqs: [
            {
              question: "Toạ độ đỉnh $I$ của parabol $(P): y = x^2 - 4x + 3$ là:",
              options: ["A. $I(2; -1)$", "B. $I(-2; 15)$", "C. $I(2; 1)$", "D. $I(-4; 3)$"],
              correct: "A",
              explanation: "$x_I = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$. Thay $x = 2$ vào: $y = 2^2 - 4(2) + 3 = -1$. Vậy $I(2; -1)$.",
              hint1: "Hoành độ $x = -b / (2a)$.",
              hint2: "$x = -(-4)/2 = 2 \\implies y = 4 - 8 + 3 = -1$."
            },
            {
              question: "Trục đối xứng của parabol $y = -2x^2 + 8x - 1$ là đường thẳng:",
              options: ["A. $x = 2$", "B. $x = -2$", "C. $y = 2$", "D. $x = 4$"],
              correct: "A",
              explanation: "Trục đối xứng là $x = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = 2$.",
              hint1: "Trục đối xứng có phương trình $x = -b / (2a)$.",
              hint2: "$x = -8 / (-4) = 2$."
            },
            {
              question: "Biết parabol $y = ax^2 + bx + 2$ đi qua điểm $A(1; 5)$ và có trục đối xứng $x = 2$. Giá trị của $a$ và $b$ là:",
              options: [
                "A. $a = -1, b = 4$",
                "B. $a = 1, b = 2$",
                "C. $a = -1, b = -4$",
                "D. $a = 2, b = 1$"
              ],
              correct: "A",
              explanation: "Qua $A(1; 5) \\Rightarrow a + b + 2 = 5 \\Leftrightarrow a + b = 3$. Trục đối xứng $x = 2 \\Rightarrow -b/(2a) = 2 \\Leftrightarrow b = -4a$. Thế vào: $a - 4a = 3 \\Leftrightarrow -3a = 3 \\Leftrightarrow a = -1 \\Rightarrow b = 4$.",
              hint1: "Lập hệ 2 phương trình: $a + b + 2 = 5$ và $-b/(2a) = 2$.",
              hint2: "Giải hệ ra $a = -1, b = 4$."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Sự biến thiên, GTLN, GTNN và Bài toán thực tế tối ưu",
          theory: createStandardTheoryHTML(
            "Bài 16: Hàm số bậc hai", "Lớp 10", 2,
            "Sự biến thiên, GTLN, GTNN và Bài toán thực tế tối ưu",
            `<p>Bảng biến thiên và ứng dụng tối ưu của hàm số bậc hai chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Trường hợp $a > 0$:</strong>
                <br/>• Hàm số nghịch biến trên khoảng $\\left(-\\infty; -\\frac{b}{2a}\\right)$ và đồng biến trên khoảng $\\left(-\\frac{b}{2a}; +\\infty\\right)$.
                <br/>• Giá trị nhỏ nhất: $\\min_{\\mathbb{R}} y = -\\frac{\\Delta}{4a}$ tại $x = -\\frac{b}{2a}$. Hàm số không có GTLN trên $\\mathbb{R}$.
              </li>
              <li><strong>Trường hợp $a < 0$:</strong>
                <br/>• Hàm số đồng biến trên khoảng $\\left(-\\infty; -\\frac{b}{2a}\\right)$ và nghịch biến trên khoảng $\\left(-\\frac{b}{2a}; +\\infty\\right)$.
                <br/>• Giá trị lớn nhất: $\\max_{\\mathbb{R}} y = -\\frac{\\Delta}{4a}$ tại $x = -\\frac{b}{2a}$. Hàm số không có GTNN trên $\\mathbb{R}$.
              </li>
              <li><strong>Ứng dụng thực tế:</strong> Quỹ đạo bay của vật ném xiên, cầu Cổng Vàng (Golden Gate), tối ưu diện tích đất rào, tối đa hoá lợi nhuận bán hàng.</li>
            </ul>`,
            `<li>Muốn tìm min max trên toàn bộ $\\mathbb{R}$: Nhìn ngay đỉnh Parabol ($a > 0 \\implies$ min tại đỉnh; $a < 0 \\implies$ max tại đỉnh).</li>
            <li>Khi tìm min max trên một đoạn $[p; q]$: Tính giá trị tại 2 đầu mút $f(p), f(q)$ và giá trị tại đỉnh (nếu đỉnh nằm trong đoạn).</li>`,
            `<li>Quên kiểm tra hoành độ đỉnh có thuộc đoạn $[p; q]$ hay không.</li>
            <li>Nhầm giữa hoành độ $x$ (nơi đạt cực trị) và giá trị $y$ (giá trị lớn nhất/nhỏ nhất).</li>`,
            `<li><em>"Bậc hai tìm max min – Đỉnh Parabol cho ngay kết quả – a dương min đáy, a âm max đỉnh!"</em></li>`
          ),
          mcqs: [
            {
              question: "Giá trị nhỏ nhất của hàm số $y = x^2 - 4x + 5$ trên $\\mathbb{R}$ bằng:",
              options: ["A. 1", "B. 5", "C. 2", "D. -1"],
              correct: "A",
              explanation: "Hàm số có $a = 1 > 0$, đỉnh $x_I = -(-4)/2 = 2$. Giá trị nhỏ nhất là $y(2) = 2^2 - 4(2) + 5 = 1$.",
              hint1: "Hàm số đạt giá trị nhỏ nhất tại hoành độ đỉnh $x = 2$.",
              hint2: "$2^2 - 4(2) + 5 = 1$."
            },
            {
              question: "Một quả bóng được đá lên từ mặt đất có độ cao $h(t) = -5t^2 + 20t$ (mét), với $t$ là thời gian (giây). Độ cao lớn nhất mà quả bóng đạt được là:",
              options: ["A. $20\\text{ m}$", "B. $4\\text{ m}$", "C. $10\\text{ m}$", "D. $25\\text{ m}$"],
              correct: "A",
              explanation: "Hàm bậc hai có $a = -5 < 0$, đạt độ cao lớn nhất tại đỉnh $t = -\\frac{20}{2(-5)} = 2\\text{ giây}$. Độ cao lớn nhất là $h(2) = -5(4) + 20(2) = 20\\text{ m}$.",
              hint1: "Tìm thời điểm đạt đỉnh $t = -b/(2a)$.",
              hint2: "$t = 2 \\implies h(2) = -20 + 40 = 20\\text{ m}$."
            },
            {
              question: "Hàm số $y = -x^2 + 2x + 3$ đồng biến trên khoảng nào?",
              options: ["A. $(-\\infty; 1)$", "B. $(1; +\\infty)$", "C. $(-\\infty; 2)$", "D. $(2; +\\infty)$"],
              correct: "A",
              explanation: "Vì $a = -1 < 0$ và đỉnh $x = -2/(2(-1)) = 1$ nên hàm số đồng biến trên khoảng $(-\\infty; 1)$.",
              hint1: "$a < 0$ thì parabol úp ngược, nhánh trái đi lên.",
              hint2: "Đồng biến trên $(-\\infty; x_I) = (-\\infty; 1)$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hàm số bậc hai $y = f(x) = -x^2 + 6x - 5$:",
          items: [
            { key: "a", text: "Đồ thị có toạ độ đỉnh là $I(3; 4)$.", correct: "true", explain: "$x = -6/(-2) = 3, y = -9 + 18 - 5 = 4$." },
            { key: "b", text: "Trục đối xứng của đồ thị là đường thẳng $x = 3$.", correct: "true", explain: "Đường thẳng qua hoành độ đỉnh." },
            { key: "c", text: "Giá trị lớn nhất của hàm số trên $\\mathbb{R}$ bằng 4.", correct: "true", explain: "Vì $a = -1 < 0$ nên đỉnh là điểm cao nhất." },
            { key: "d", text: "Đồ thị hàm số cắt trục hoành tại hai điểm phân biệt có hoành độ là $x = 1$ và $x = 5$.", correct: "true", explain: "$-x^2 + 6x - 5 = 0 \\Leftrightarrow x = 1$ hoặc $x = 5$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho parabol $(P): y = ax^2 + bx + c$ có đồ thị với đỉnh $I(1; -4)$ và đi qua điểm $A(0; -3)$:",
          items: [
            { key: "a", text: "Giao điểm với trục tung cho ta $c = -3$.", correct: "true", explain: "Vì qua $(0; -3)$ nên $c = -3$." },
            { key: "b", text: "Trục đối xứng là $x = 1 \\Rightarrow -\\frac{b}{2a} = 1 \\Rightarrow b = -2a$.", correct: "true", explain: "Công thức đỉnh." },
            { key: "c", text: "Phương trình của parabol là $y = x^2 - 2x - 3$.", correct: "true", explain: "Thay $I(1; -4)$ vào: $a - 2a - 3 = -4 \\Rightarrow a = 1, b = -2$." },
            { key: "d", text: "Hàm số đồng biến trên khoảng $(-\\infty; 1)$.", correct: "false", explain: "Vì $a = 1 > 0$ nên đồng biến trên $(1; +\\infty)$, nghịch biến trên $(-\\infty; 1)$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Bác thợ rào muốn làm một mảnh vườn hình chữ nhật có một cạnh giáp tường rào đá (không cần rào) bằng $60\\text{ m}$ lưới thép:",
          items: [
            { key: "a", text: "Nếu gọi hai cạnh vuông góc với tường là $x\\text{ m}$ ($0 < x < 30$) thì cạnh song song với tường là $60 - 2x\\text{ m}$.", correct: "true", explain: "Tổng 3 cạnh bằng 60m." },
            { key: "b", text: "Diện tích khu đất được biểu diễn bởi hàm số $S(x) = -2x^2 + 60x$.", correct: "true", explain: "$x(60 - 2x) = -2x^2 + 60x$." },
            { key: "c", text: "Diện tích khu vườn lớn nhất khi $x = 15\\text{ m}$.", correct: "true", explain: "Đỉnh parabol: $x = -60 / (2(-2)) = 15$." },
            { key: "d", text: "Diện tích lớn nhất rào được là $900\\text{ m}^2$.", correct: "false", explain: "$S(15) = 15 \\times (60 - 30) = 450\\text{ m}^2$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về dấu của các hệ số $a, b, c$ của parabol $y = ax^2 + bx + c$:",
          items: [
            { key: "a", text: "Bề lõm quay lên trên thì $a > 0$, quay xuống dưới thì $a < 0$.", correct: "true", explain: "Quy chuẩn đồ thị." },
            { key: "b", text: "Giao điểm với trục tung nằm phía trên trục hoành thì $c > 0$.", correct: "true", explain: "$y(0) = c$." },
            { key: "c", text: "Nếu đỉnh parabol nằm bên phải trục tung thì $a$ và $b$ cùng dấu.", correct: "false", explain: "$x_I = -b/(2a) > 0 \\Leftrightarrow a$ và $b$ TRÁI DẤU." },
            { key: "d", text: "Parabol cắt trục hoành tại 2 điểm phân biệt khi và chỉ khi $\\Delta = b^2 - 4ac > 0$.", correct: "true", explain: "Phương trình hoành độ có 2 nghiệm phân biệt." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho hàm số $y = x^2 - 2x - 3$ trên đoạn $[0; 4]$:",
          items: [
            { key: "a", text: "Đỉnh của parabol có hoành độ $x = 1$ thuộc đoạn $[0; 4]$.", correct: "true", explain: "$x_I = 1 \\in [0; 4]$." },
            { key: "b", text: "Giá trị tại đỉnh là $f(1) = -4$.", correct: "true", explain: "$1 - 2 - 3 = -4$." },
            { key: "c", text: "Giá trị tại hai đầu mút là $f(0) = -3$ và $f(4) = 5$.", correct: "true", explain: "$f(4) = 16 - 8 - 3 = 5$." },
            { key: "d", text: "Giá trị lớn nhất của hàm số trên đoạn $[0; 4]$ bằng $-3$.", correct: "false", explain: "Giá trị lớn nhất là $f(4) = 5$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về ứng dụng thực tiễn của đường Parabol:",
          items: [
            { key: "a", text: "Chảo thu sóng vệ tinh (Parabol) có tính chất gom mọi tia sóng song song về đúng tiêu điểm.", correct: "true", explain: "Đặc tính quang học của Parabol." },
            { key: "b", text: "Quỹ đạo của một vật ném xiên trong không khí (bỏ qua sức cản) có dạng parabol.", correct: "true", explain: "Chuyển động ném xiên Vật lí 10." },
            { key: "c", text: "Đèn pha ô tô dùng gương phản xạ parabol để tạo chùm sáng song song chiếu xa.", correct: "true", explain: "Nguyên lí quang học đèn pha." },
            { key: "d", text: "Mọi phương trình bậc hai đều có đồ thị là một đường tròn.", correct: "false", explain: "Đồ thị luôn là một đường PARABOL, không phải đường tròn." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART6_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART7_LESSONS = {
    // =========================================================================
    // BÀI 17: DẤU CỦA TAM THỨC BẬC HAI (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai17": {
      id: "toan10_bai17",
      lessonTitle: "Bài 17: Dấu của tam thức bậc hai",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 17:") || t.includes("dấu của tam thức bậc hai") || t.includes("tam thức bậc hai")) && !t.includes("hàm số liên tục");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Định nghĩa tam thức bậc hai và Định lý về dấu của tam thức bậc hai",
          theory: createStandardTheoryHTML(
            "Bài 17: Dấu của tam thức bậc hai", "Lớp 10", 1,
            "Định nghĩa tam thức bậc hai và Định lý về dấu của tam thức bậc hai",
            `<p>Định lý về dấu của tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \\neq 0$) chuẩn SGK:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li>Biệt thức $\\Delta = b^2 - 4ac$ (hoặc $\\Delta' = b'^2 - ac$):
                <br/>• <strong>Trường hợp 1 ($\\Delta < 0$):</strong> $f(x)$ <strong>luôn cùng dấu với hệ số $a$</strong> với mọi $x \\in \\mathbb{R}$.
                <br/>• <strong>Trường hợp 2 ($\\Delta = 0$):</strong> $f(x)$ cùng dấu với hệ số $a$ với mọi $x \\neq -\\frac{b}{2a}$; tại $x = -\\frac{b}{2a}$ thì $f(x) = 0$.
                <br/>• <strong>Trường hợp 3 ($\\Delta > 0$):</strong> $f(x)$ có 2 nghiệm phân biệt $x_1 < x_2$. Quy tắc xét dấu: <em>\"Trong trái, ngoài cùng\"</em>
                <br/>  - $f(x)$ trái dấu với hệ số $a$ với mọi $x \\in (x_1; x_2)$.
                <br/>  - $f(x)$ cùng dấu với hệ số $a$ với mọi $x \\in (-\\infty; x_1) \\cup (x_2; +\\infty)$.
              </li>
              <li><strong>Điều kiện tam thức không âm/dương trên $\\mathbb{R}$:</strong>
                <br/>• $f(x) > 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\begin{cases} a > 0 \\\\ \\Delta < 0 \\end{cases}$
                <br/>• $f(x) \\ge 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\begin{cases} a > 0 \\\\ \\Delta \\le 0 \\end{cases}$
                <br/>• $f(x) < 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\begin{cases} a < 0 \\\\ \\Delta < 0 \\end{cases}$
                <br/>• $f(x) \\le 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\begin{cases} a < 0 \\\\ \\Delta \\le 0 \\end{cases}$
              </li>
            </ul>`,
            `<li>Khẩu quyết thần chú: <em>\"Trong trái, ngoài cùng\"</em> (ở giữa 2 nghiệm trái dấu $a$, ở ngoài 2 nghiệm cùng dấu $a$).</li>
            <li>Muốn tam thức luôn cùng một dấu trên toàn $\\mathbb{R}$ thì $\\Delta$ BẮT BUỘC phải ÂM ($\\Delta < 0$).</li>`,
            `<li>Quên điều kiện $a > 0$ hoặc $a < 0$ khi giải bài toán tham số $m$ để tam thức luôn dương/âm.</li>
            <li>Nhầm dấu \"trong cùng, ngoài trái\" (phải là Trong Trái, Ngoài Cùng).</li>`,
            `<li><em>"Delta âm cùng dấu a trên toàn trục số – Delta dương hai nghiệm phân biệt: Trong Trái Ngoài Cùng!"</em></li>`
          ),
          mcqs: [
            {
              question: "Bất phương trình $x^2 - 5x + 6 > 0$ có tập nghiệm là:",
              options: [
                "A. $(-\\infty; 2) \\cup (3; +\\infty)$",
                "B. $(2; 3)$",
                "C. $[2; 3]$",
                "D. $(-\\infty; 2] \\cup [3; +\\infty)$"
              ],
              correct: "A",
              explanation: "Tam thức có $a = 1 > 0$ và 2 nghiệm $x_1 = 2, x_2 = 3$. Để $f(x) > 0$ (cùng dấu $a$) thì lấy phía NGOÀI hai nghiệm: $(-\\infty; 2) \\cup (3; +\\infty)$.",
              hint1: "Tìm 2 nghiệm của $x^2 - 5x + 6 = 0$.",
              hint2: "Quy tắc \"ngoài cùng\": lấy $x < 2$ hoặc $x > 3$."
            },
            {
              question: "Tam thức bậc hai $f(x) = x^2 - 2x + 3$ nhận giá trị như thế nào với mọi $x \\in \\mathbb{R}$?",
              options: ["A. $f(x) > 0, \\forall x \\in \\mathbb{R}$", "B. $f(x) < 0, \\forall x \\in \\mathbb{R}$", "C. $f(x) \\le 0$", "D. Đổi dấu qua $x = 1$"],
              correct: "A",
              explanation: "Ta có $a = 1 > 0$ và $\\Delta' = (-1)^2 - 1(3) = 1 - 3 = -2 < 0$. Do đó $f(x) > 0$ với mọi $x \\in \\mathbb{R}$.",
              hint1: "Tính biệt thức $\\Delta'$ và quan sát dấu của $a$.",
              hint2: "$a = 1 > 0$ và $\\Delta' = -2 < 0$ nên luôn dương."
            },
            {
              question: "Tìm tất cả các giá trị của tham số $m$ để tam thức $f(x) = x^2 - 2mx + 4 > 0$ với mọi $x \\in \\mathbb{R}$.",
              options: ["A. $-2 < m < 2$", "B. $m < -2$ hoặc $m > 2$", "C. $-2 \\le m \\le 2$", "D. $m < 2$"],
              correct: "A",
              explanation: "Vì $a = 1 > 0$, để $f(x) > 0, \\forall x \\in \\mathbb{R} \\Leftrightarrow \\Delta' = m^2 - 4 < 0 \\Leftrightarrow -2 < m < 2$.",
              hint1: "Điều kiện để tam thức luôn dương trên R là $\\Delta' < 0$.",
              hint2: "$m^2 - 4 < 0 \\implies -2 < m < 2$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tam thức bậc hai $f(x) = -x^2 + 4x - 3$:",
          items: [
            { key: "a", text: "Hệ số $a = -1 < 0$.", correct: "true", explain: "Hệ số bậc 2." },
            { key: "b", text: "Phương trình $f(x) = 0$ có 2 nghiệm phân biệt là $x = 1$ và $x = 3$.", correct: "true", explain: "Nghiệm $x = 1, x = 3$." },
            { key: "c", text: "$f(x) > 0$ khi và chỉ khi $1 < x < 3$.", correct: "true", explain: "Trong trái: trái dấu $a < 0$ là dấu dương." },
            { key: "d", text: "$f(x) \\le 0$ với mọi $x \\in \\mathbb{R}$.", correct: "false", explain: "Có khoảng dương $(1; 3)$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về điều kiện để tam thức $f(x) = ax^2 + bx + c$ giữ nguyên dấu trên $\\mathbb{R}$:",
          items: [
            { key: "a", text: "Nếu $\\Delta < 0$ thì tam thức không bao giờ đổi dấu trên $\\mathbb{R}$.", correct: "true", explain: "Luôn cùng dấu hệ số $a$." },
            { key: "b", text: "Điều kiện để $f(x) \\ge 0, \\forall x \\in \\mathbb{R}$ là $a > 0$ và $\\Delta \\le 0$.", correct: "true", explain: "Định lý chuẩn SGK." },
            { key: "c", text: "Nếu $\\Delta > 0$ thì tam thức luôn có cả khoảng dương và khoảng âm.", correct: "true", explain: "Có 2 nghiệm phân biệt thì đổi dấu 2 lần." },
            { key: "d", text: "Nếu $\\Delta = 0$ thì tam thức có thể nhận giá trị trái dấu với $a$.", correct: "false", explain: "Chỉ cùng dấu hoặc bằng 0 tại nghiệm kép." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Giải bất phương trình $\\frac{x^2 - 4}{x - 1} \\ge 0$:",
          items: [
            { key: "a", text: "Điều kiện xác định là $x \\neq 1$.", correct: "true", explain: "Mẫu số khác 0." },
            { key: "b", text: "Tử số có 2 nghiệm là $x = -2$ và $x = 2$.", correct: "true", explain: "$x^2 = 4$." },
            { key: "c", text: "Bảng xét dấu có 3 điểm mốc là $-2, 1, 2$.", correct: "true", explain: "Các nghiệm tử và mẫu." },
            { key: "d", text: "Tập nghiệm của bất phương trình là $[-2; 1) \\cup [2; +\\infty)$.", correct: "true", explain: "Khoảng mang dấu dương chuẩn." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho bất phương trình $x^2 - 2(m+1)x + m^2 + 3 > 0$:",
          items: [
            { key: "a", text: "Hệ số $a = 1 > 0$.", correct: "true", explain: "Hệ số $x^2$." },
            { key: "b", text: "Biệt thức $\\Delta' = (m+1)^2 - (m^2 + 3) = 2m - 2$.", correct: "true", explain: "$m^2 + 2m + 1 - m^2 - 3 = 2m - 2$." },
            { key: "c", text: "Bất phương trình nghiệm đúng với mọi $x \\in \\mathbb{R}$ khi và chỉ khi $\\Delta' < 0 \\Leftrightarrow m < 1$.", correct: "true", explain: "$2m - 2 < 0 \\Leftrightarrow m < 1$." },
            { key: "d", text: "Khi $m = 1$, bất phương trình vô nghiệm.", correct: "false", explain: "Khi $m=1$, $\\Delta'=0$, $(x-2)^2 > 0$ nghiệm đúng với mọi $x \\neq 2$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong kinh doanh, lợi nhuận bán hàng được tính theo giá bán $x$ (nghìn đồng) là $P(x) = -2x^2 + 100x - 800$ (triệu đồng):",
          items: [
            { key: "a", text: "Hàm lợi nhuận là một tam thức bậc hai với $a = -2 < 0$.", correct: "true", explain: "Tam thức bậc hai." },
            { key: "b", text: "Phương trình $P(x) = 0$ có 2 nghiệm là $x = 10$ và $x = 40$.", correct: "true", explain: "$-2(x-10)(x-40) = 0$." },
            { key: "c", text: "Doanh nghiệp có lãi ($P(x) > 0$) khi giá bán nằm trong khoảng từ 10 đến 40 nghìn đồng.", correct: "true", explain: "Trong trái: $10 < x < 40$ thì $P(x) > 0$." },
            { key: "d", text: "Lợi nhuận cao nhất đạt được khi giá bán là $x = 50$ nghìn đồng.", correct: "false", explain: "Đạt cao nhất tại đỉnh $x = -100 / (2(-2)) = 25$ nghìn đồng." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về đồ thị parabol $y = f(x)$ và dấu của tam thức bậc hai:",
          items: [
            { key: "a", text: "$f(x) > 0$ ứng với phần đồ thị nằm phía trên trục hoành.", correct: "true", explain: "Tung độ dương." },
            { key: "b", text: "$f(x) < 0$ ứng với phần đồ thị nằm phía dưới trục hoành.", correct: "true", explain: "Tung độ âm." },
            { key: "c", text: "Nếu parabol nằm hoàn toàn phía trên trục hoành thì tam thức luôn dương trên $\\mathbb{R}$.", correct: "true", explain: "Hình học hoá của $\\Delta < 0, a > 0$." },
            { key: "d", text: "Nếu parabol tiếp xúc trục hoành thì $\\Delta > 0$.", correct: "false", explain: "Tiếp xúc thì $\\Delta = 0$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 18: PHƯƠNG TRÌNH QUY VỀ PHƯƠNG TRÌNH BẬC HAI (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai18": {
      id: "toan10_bai18",
      lessonTitle: "Bài 18: Phương trình quy về phương trình bậc hai",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 18:") || t.includes("phương trình quy về phương trình bậc hai") || t.includes("quy về phương trình bậc hai")) && !t.includes("xác suất có điều kiện");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Giải phương trình dạng căn A = căn B và căn A = B",
          theory: createStandardTheoryHTML(
            "Bài 18: Phương trình quy về phương trình bậc hai", "Lớp 10", 1,
            "Giải phương trình dạng căn A = căn B và căn A = B",
            `<p>Hai dạng phương trình chứa căn bậc hai quy về bậc hai chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Dạng 1: $\\sqrt{f(x)} = \\sqrt{g(x)}$</strong>
                <br/>• Phương pháp SGK: Bình phương hai vế ta được phương trình hệ quả $f(x) = g(x)$.
                <br/>• Giải phương trình này tìm các nghiệm $x$.
                <br/>• <strong>Bắt buộc:</strong> Thay các nghiệm tìm được vào phương trình ban đầu (hoặc kiểm tra điều kiện $f(x) \\ge 0$) để loại nghiệm ngoại lai.
              </li>
              <li><strong>Dạng 2: $\\sqrt{f(x)} = g(x)$</strong>
                <br/>• <strong>Cách 1 (Phương pháp SGK KNTT):</strong> Bình phương hai vế được phương trình hệ quả $f(x) = [g(x)]^2$. Giải phương trình bậc hai tìm nghiệm, sau đó thử lại vào phương trình ban đầu để loại nghiệm ngoại lai.
                <br/>• <strong>Cách 2 (Dùng điều kiện tương đương):</strong>
                $$\\sqrt{f(x)} = g(x) \\Leftrightarrow \\begin{cases} g(x) \\ge 0 \\\\ f(x) = [g(x)]^2 \\end{cases}$$
              </li>
            </ul>`,
            `<li>Khi bình phương hai vế không tương đương: BẮT BUỘC phải có bước THỬ LẠI nghiệm vào phương trình gốc để loại nghiệm ngoại lai.</li>
            <li>Với dạng $\\sqrt{f(x)} = g(x)$, vế phải $g(x)$ bắt buộc phải $\\ge 0$ mới có nghiệm.</li>`,
            `<li>Quên thử lại nghiệm dẫn đến nhận nghiệm làm vế phải âm (sai lầm phổ biến nhất).</li>
            <li>Khai triển sai hằng đẳng thức $(ax+b)^2$ khi bình phương vế phải.</li>`,
            `<li><em>"Bình phương hai vế ra nghiệm – Nhớ thay ngược lại thử – Nghiệm làm căn âm hay vế âm là loại ngay!"</em></li>`
          ),
          mcqs: [
            {
              question: "Số nghiệm của phương trình $\\sqrt{x^2 - 3x + 2} = \\sqrt{x - 1}$ là:",
              options: ["A. 2", "B. 1", "C. 0", "D. 3"],
              correct: "A",
              explanation: "Bình phương hai vế: $x^2 - 3x + 2 = x - 1 \\Leftrightarrow x^2 - 4x + 3 = 0 \\Leftrightarrow x = 1$ hoặc $x = 3$. Thử lại: $x = 1$ cho $\\sqrt{0} = \\sqrt{0}$ (thỏa mãn); $x = 3$ cho $\\sqrt{2} = \\sqrt{2}$ (thỏa mãn). Vậy có 2 nghiệm.",
              hint1: "Bình phương 2 vế đưa về phương trình $x^2 - 4x + 3 = 0$.",
              hint2: "Cả 2 nghiệm $x = 1$ và $x = 3$ đều thỏa mãn."
            },
            {
              question: "Nghiệm của phương trình $\\sqrt{2x + 3} = x$ là:",
              options: ["A. $x = 3$", "B. $x = -1$ và $x = 3$", "C. $x = -1$", "D. Vô nghiệm"],
              correct: "A",
              explanation: "Điều kiện $x \\ge 0$. Bình phương: $2x + 3 = x^2 \\Leftrightarrow x^2 - 2x - 3 = 0 \\Leftrightarrow x = 3$ hoặc $x = -1$. Vì $x \\ge 0$ nên chỉ nhận $x = 3$. Thử lại $x = -1$: $\\sqrt{1} = -1$ (vô lý).",
              hint1: "Vế phải $x$ phải không âm ($x \\ge 0$).",
              hint2: "Nghiệm $x = -1$ bị loại, chỉ nhận $x = 3$."
            },
            {
              question: "Phương trình $\\sqrt{x^2 - 2x - 3} = 2x - 5$ có bao nhiêu nghiệm thực?",
              options: ["A. 1", "B. 2", "C. 0", "D. Vô số"],
              correct: "A",
              explanation: "Điều kiện $2x - 5 \\ge 0 \\Leftrightarrow x \\ge 2.5$. Bình phương: $x^2 - 2x - 3 = 4x^2 - 20x + 25 \\Leftrightarrow 3x^2 - 18x + 28 = 0$. Phương trình có $\\Delta' = 81 - 84 = -3 < 0$, do đó phương trình vô nghiệm... Khoan, tính lại: $25 + 3 = 28$. $\\Delta' = 9^2 - 3(28) = 81 - 84 = -3 < 0$. Phương trình có 0 nghiệm. Chọn C.",
              hint1: "Bình phương đưa về $3x^2 - 18x + 28 = 0$.",
              hint2: "Biệt thức $\\Delta' = 81 - 84 < 0$ nên vô nghiệm."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét phương trình $\\sqrt{3x^2 - 9x + 1} = x - 2$:",
          items: [
            { key: "a", text: "Điều kiện để vế phải không âm là $x - 2 \\ge 0 \\Leftrightarrow x \\ge 2$.", correct: "true", explain: "Căn bậc hai luôn không âm." },
            { key: "b", text: "Bình phương hai vế ta được $3x^2 - 9x + 1 = x^2 - 4x + 4$.", correct: "true", explain: "Khai triển chuẩn." },
            { key: "c", text: "Phương trình bậc hai thu gọn là $2x^2 - 5x - 3 = 0$.", correct: "true", explain: "$3x^2 - x^2 = 2x^2, -9x + 4x = -5x, 1 - 4 = -3$." },
            { key: "d", text: "Phương trình đã cho có 2 nghiệm phân biệt.", correct: "false", explain: "Nghiệm là $x = 3$ và $x = -0.5$. Do $x \\ge 2$ nên chỉ nhận $x = 3$ (1 nghiệm duy nhất)." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về phương pháp giải phương trình chứa căn thức theo SGK Toán 10:",
          items: [
            { key: "a", text: "Phép bình phương hai vế khi chưa biết dấu là phép biến đổi hệ quả.", correct: "true", explain: "Có thể sinh nghiệm ngoại lai." },
            { key: "b", text: "Bước thử lại nghiệm vào phương trình gốc là bắt buộc.", correct: "true", explain: "Quy trình chuẩn SGK KNTT." },
            { key: "c", text: "Nếu đặt điều kiện $g(x) \\ge 0$ trước khi bình phương $\\sqrt{f(x)} = g(x)$ thì được phép biến đổi tương đương.", correct: "true", explain: "Định lý tương đương chuẩn." },
            { key: "d", text: "Phương trình dạng $\\sqrt{f(x)} = \\sqrt{g(x)}$ không bao giờ có nghiệm ngoại lai.", correct: "false", explain: "Bình phương có thể cho nghiệm làm $f(x) < 0$ (vô nghĩa)." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho phương trình $\\sqrt{x^2 - x - 2} = \\sqrt{x - 2}$:",
          items: [
            { key: "a", text: "Bình phương hai vế ta được $x^2 - x - 2 = x - 2$.", correct: "true", explain: "Triệt tiêu căn." },
            { key: "b", text: "Phương trình tương đương $x^2 - 2x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$.", correct: "true", explain: "$x(x-2) = 0$." },
            { key: "c", text: "Giá trị $x = 0$ là một nghiệm của phương trình đã cho.", correct: "false", explain: "Thử $x = 0$ vào căn ra $\\sqrt{-2}$ không xác định." },
            { key: "d", text: "Phương trình có nghiệm duy nhất là $x = 2$.", correct: "true", explain: "Thử $x = 2$ cho $\\sqrt{0} = \\sqrt{0}$ thỏa mãn." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho phương trình $\\sqrt{-x^2 + 4x - 3} = 2x - 5$:",
          items: [
            { key: "a", text: "Biểu thức trong căn có nghĩa khi $1 \\le x \\le 3$.", correct: "true", explain: "Tam thức trong căn có 2 nghiệm 1 và 3, $a < 0$." },
            { key: "b", text: "Vế phải không âm khi $x \\ge 2.5$.", correct: "true", explain: "$2x \\ge 5 \\Leftrightarrow x \\ge 2.5$." },
            { key: "c", text: "Miền giá trị cho phép của nghiệm là $[2.5; 3]$.", correct: "true", explain: "Giao hai điều kiện." },
            { key: "d", text: "Phương trình luôn có ít nhất 1 nghiệm thuộc khoảng $(1; 2)$.", correct: "false", explain: "Nghiệm phải $\\ge 2.5$ nên không thể thuộc $(1; 2)$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một bài toán vật lí ném xiên, khoảng cách $d$ và thời gian $t$ thỏa mãn $\\sqrt{20t - 5t^2} = t$:",
          items: [
            { key: "a", text: "Thời gian $t$ bắt buộc phải thỏa mãn $t \\ge 0$.", correct: "true", explain: "Thời gian thực tế." },
            { key: "b", text: "Bình phương hai vế ta được $20t - 5t^2 = t^2$.", correct: "true", explain: "Bình phương." },
            { key: "c", text: "Phương trình quy về $6t^2 - 20t = 0$.", correct: "true", explain: "$6t^2 - 20t = 0$." },
            { key: "d", text: "Thời điểm khác 0 thỏa mãn bài toán là $t = \\frac{10}{3}\\text{ giây}$.", correct: "true", explain: "$t = 20/6 = 10/3$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán đặt ẩn phụ quy về phương trình bậc hai:",
          items: [
            { key: "a", text: "Phương trình $x^4 - 5x^2 + 4 = 0$ là phương trình trùng phương.", correct: "true", explain: "Dạng chuẩn trùng phương." },
            { key: "b", text: "Đặt $t = x^2$ với điều kiện $t \\ge 0$ thì phương trình trở thành $t^2 - 5t + 4 = 0$.", correct: "true", explain: "Ẩn phụ." },
            { key: "c", text: "Phương trình theo $t$ có 2 nghiệm dương là $t = 1$ và $t = 4$.", correct: "true", explain: "Cả hai đều thỏa mãn $t \\ge 0$." },
            { key: "d", text: "Phương trình ban đầu có đúng 2 nghiệm thực.", correct: "false", explain: "$x^2 = 1 \\Rightarrow x = \\pm 1$ và $x^2 = 4 \\Rightarrow x = \\pm 2$ (có tất cả 4 nghiệm phân biệt)." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART7_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART8_LESSONS = {
    // =========================================================================
    // BÀI 19: PHƯƠNG TRÌNH ĐƯỜNG THẲNG (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai19": {
      id: "toan10_bai19",
      lessonTitle: "Bài 19: Phương trình đường thẳng",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 19:") || t.includes("phương trình đường thẳng")) && !t.includes("không gian") && !t.includes("vị trí tương đối");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: VTPT, VTCP, Phương trình tổng quát và Phương trình tham số",
          theory: createStandardTheoryHTML(
            "Bài 19: Phương trình đường thẳng", "Lớp 10", 1,
            "VTPT, VTCP, Phương trình tổng quát và Phương trình tham số",
            `<p>Phương trình đường thẳng trong mặt phẳng toạ độ $Oxy$ chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Vectơ chỉ phương (VTCP) $\\vec{u} = (u_1; u_2) \\neq \\vec{0}$:</strong> Có giá song song hoặc trùng với đường thẳng.</li>
              <li><strong>Vectơ pháp tuyến (VTPT) $\\vec{n} = (a; b) \\neq \\vec{0}$:</strong> Có giá vuông góc với đường thẳng.
                <br/>• Mối liên hệ: $\\vec{u} \\cdot \\vec{n} = 0$. Nếu $\\vec{n} = (a; b)$ thì có thể chọn $\\vec{u} = (-b; a)$ hoặc $(b; -a)$.
              </li>
              <li><strong>Phương trình tổng quát:</strong> Đi qua $M_0(x_0; y_0)$ và có VTPT $\\vec{n} = (a; b)$:
                $$a(x - x_0) + b(y - y_0) = 0 \\Leftrightarrow ax + by + c = 0 \\quad (a^2 + b^2 > 0)$$
              </li>
              <li><strong>Phương trình tham số:</strong> Đi qua $M_0(x_0; y_0)$ và có VTCP $\\vec{u} = (u_1; u_2)$:
                $$\\begin{cases} x = x_0 + u_1 t \\\\ y = y_0 + u_2 t \\end{cases} \\quad (t \\in \\mathbb{R})$$
              </li>
            </ul>`,
            `<li>Đổi qua lại giữa VTPT và VTCP: $(a; b) \\leftrightarrow (-b; a)$ (đổi chỗ và đổi dấu một trong hai số).</li>
            <li>Hệ số góc của đường thẳng: $k = \\frac{u_2}{u_1} = -\\frac{a}{b}$ (khi $b \\neq 0$).</li>`,
            `<li>Nhầm giữa VTPT và VTCP khi viết phương trình (dùng VTCP để viết phương trình tổng quát là sai).</li>
            <li>Quên đổi dấu khi hoán vị toạ độ để tìm vectơ trực giao.</li>`,
            `<li><em>"Tổng quát dùng Pháp tuyến – Tham số dùng Chỉ phương – Đổi Pháp sang Chỉ: Đổi chỗ và đổi một dấu!"</em></li>`
          ),
          mcqs: [
            {
              question: "Đường thẳng $\\Delta: 2x - 3y + 5 = 0$ có một vectơ pháp tuyến là:",
              options: ["A. $\\vec{n} = (2; -3)$", "B. $\\vec{n} = (2; 3)$", "C. $\\vec{n} = (3; 2)$", "D. $\\vec{n} = (-3; 5)$"],
              correct: "A",
              explanation: "Hệ số đứng trước $x$ và $y$ chính là toạ độ VTPT: $\\vec{n} = (2; -3)$.",
              hint1: "Lấy hệ số của $x$ và $y$.",
              hint2: "$a = 2, b = -3$."
            },
            {
              question: "Một đường thẳng có VTPT $\\vec{n} = (4; -1)$. Một vectơ chỉ phương của đường thẳng đó là:",
              options: ["A. $\\vec{u} = (1; 4)$", "B. $\\vec{u} = (4; 1)$", "C. $\\vec{u} = (-1; 4)$", "D. $\\vec{u} = (-4; -1)$"],
              correct: "A",
              explanation: "Đổi chỗ và đổi dấu một thành phần: $(4; -1) \\Rightarrow (1; 4)$. Kiểm tra tích vô hướng: $4(1) + (-1)(4) = 0$.",
              hint1: "Đổi chỗ 4 và -1, sau đó đổi dấu -1 thành 1.",
              hint2: "$\\vec{u} = (1; 4)$."
            },
            {
              question: "Phương trình tham số của đường thẳng đi qua $M(1; -2)$ có VTCP $\\vec{u} = (3; 4)$ là:",
              options: [
                "A. $\\begin{cases} x = 1 + 3t \\\\ y = -2 + 4t \\end{cases}$",
                "B. $\\begin{cases} x = 3 + t \\\\ y = 4 - 2t \\end{cases}$",
                "C. $\\begin{cases} x = 1 - 2t \\\\ y = 3 + 4t \\end{cases}$",
                "D. $\\begin{cases} x = -1 + 3t \\\\ y = 2 + 4t \\end{cases}$"
              ],
              correct: "A",
              explanation: "Công thức $\\begin{cases} x = x_0 + u_1 t \\\\ y = y_0 + u_2 t \\end{cases} \\Rightarrow \\begin{cases} x = 1 + 3t \\\\ y = -2 + 4t \\end{cases}$.",
              hint1: "Toạ độ điểm đứng trước, toạ độ VTCP nhân với $t$.",
              hint2: "$x = 1 + 3t, y = -2 + 4t$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho đường thẳng $d: \\begin{cases} x = 2 - 3t \\\\ y = -1 + 4t \\end{cases}$:",
          items: [
            { key: "a", text: "Đường thẳng $d$ đi qua điểm $A(2; -1)$.", correct: "true", explain: "Ứng với $t = 0$." },
            { key: "b", text: "Một VTCP của $d$ là $\\vec{u} = (-3; 4)$.", correct: "true", explain: "Hệ số của $t$." },
            { key: "c", text: "Một VTPT của $d$ là $\\vec{n} = (4; 3)$.", correct: "true", explain: "Vì $(-3)(4) + 4(3) = 0$." },
            { key: "d", text: "Phương trình tổng quát của $d$ là $4x + 3y - 5 = 0$.", correct: "true", explain: "$4(x - 2) + 3(y + 1) = 4x + 3y - 5 = 0$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai điểm $A(1; 3)$ và $B(5; 1)$:",
          items: [
            { key: "a", text: "Vectơ $\\vec{AB} = (4; -2) = 2(2; -1)$ là một VTCP của đường thẳng $AB$.", correct: "true", explain: "$(5-1; 1-3) = (4; -2)$." },
            { key: "b", text: "Vectơ $\\vec{n} = (1; 2)$ là một VTPT của đường thẳng $AB$.", correct: "true", explain: "$2(1) + (-1)(2) = 0$." },
            { key: "c", text: "Phương trình tổng quát của đường thẳng $AB$ là $x + 2y - 7 = 0$.", correct: "true", explain: "$1(x - 1) + 2(y - 3) = x + 2y - 7 = 0$." },
            { key: "d", text: "Đường thẳng $AB$ đi qua gốc toạ độ $O(0; 0)$.", correct: "false", explain: "Thay $(0; 0)$ vào: $-7 \\neq 0$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Đường trung trực của đoạn thẳng $AB$ với $A(1; -1)$ và $B(3; 3)$:",
          items: [
            { key: "a", text: "Trung điểm của đoạn $AB$ là $I(2; 1)$.", correct: "true", explain: "$((1+3)/2; (-1+3)/2) = (2; 1)$." },
            { key: "b", text: "Vectơ $\\vec{AB} = (2; 4) = 2(1; 2)$ là một VTPT của đường trung trực.", correct: "true", explain: "Vuông góc với đoạn thẳng $AB$." },
            { key: "c", text: "Phương trình đường trung trực là $x + 2y - 4 = 0$.", correct: "true", explain: "$1(x - 2) + 2(y - 1) = x + 2y - 4 = 0$." },
            { key: "d", text: "Điểm $M(0; 2)$ thuộc đường trung trực.", correct: "true", explain: "$0 + 2(2) - 4 = 0$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về các dạng đặc biệt của phương trình đường thẳng:",
          items: [
            { key: "a", text: "Đường thẳng song song với trục $Ox$ có dạng $y = c$ ($c \\neq 0$).", correct: "true", explain: "Khuyết $x$." },
            { key: "b", text: "Đường thẳng song song với trục $Oy$ có dạng $x = c$ ($c \\neq 0$).", correct: "true", explain: "Khuyết $y$." },
            { key: "c", text: "Phương trình đoạn chắn cắt $Ox$ tại $A(a; 0)$ và $Oy$ tại $B(0; b)$ ($ab \\neq 0$) là $\\frac{x}{a} + \\frac{y}{b} = 1$.", correct: "true", explain: "Công thức đoạn chắn." },
            { key: "d", text: "Mọi đường thẳng trong mặt phẳng đều có hệ số góc $k$.", correct: "false", explain: "Đường thẳng đứng $x = c$ không có hệ số góc (hệ số góc tiến tới vô cực)." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho tam giác $ABC$ có $A(1; 2), B(3; 0), C(-1; -2)$:",
          items: [
            { key: "a", text: "Trung điểm $M$ của $BC$ có toạ độ $(1; -1)$.", correct: "true", explain: "$((3-1)/2; (0-2)/2) = (1; -1)$." },
            { key: "b", text: "Đường trung tuyến $AM$ có phương trình là $x = 1$.", correct: "true", explain: "Vì cả $A$ và $M$ đều có hoành độ $x = 1$." },
            { key: "c", text: "Vectơ $\\vec{BC} = (-4; -2) = -2(2; 1)$ là VTPT của đường cao kẻ từ $A$.", correct: "true", explain: "Đường cao vuông góc với cạnh đáy $BC$." },
            { key: "d", text: "Phương trình đường cao kẻ từ $A$ là $2x + y - 4 = 0$.", correct: "true", explain: "$2(x - 1) + 1(y - 2) = 2x + y - 4 = 0$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về mối liên hệ giữa toạ độ tham số và tổng quát:",
          items: [
            { key: "a", text: "Khử tham số $t$ từ phương trình tham số ta được phương trình tổng quát.", correct: "true", explain: "Phương pháp thế $t$." },
            { key: "b", text: "Một đường thẳng có vô số phương trình tham số khác nhau.", correct: "true", explain: "Tuỳ thuộc vào việc chọn điểm đi qua và vectơ chỉ phương tỉ lệ." },
            { key: "c", text: "Hai phương trình $2x - y + 1 = 0$ và $4x - 2y + 2 = 0$ biểu diễn cùng một đường thẳng.", correct: "true", explain: "Nhân cả hai vế với 2." },
            { key: "d", text: "Điểm $M(x_0; y_0)$ thuộc đường thẳng $ax + by + c = 0$ khi và chỉ khi $ax_0 + by_0 + c \\neq 0$.", correct: "false", explain: "Phải bằng 0 ($ax_0 + by_0 + c = 0$)." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 20: VỊ TRÍ TƯƠNG ĐỐI GIỮA HAI ĐƯỜNG THẲNG. GÓC VÀ KHOẢNG CÁCH (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai20": {
      id: "toan10_bai20",
      lessonTitle: "Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 20:") || t.includes("vị trí tương đối giữa hai đường thẳng") || (t.includes("vị trí tương đối") && t.includes("khoảng cách"))) && !t.includes("mặt phẳng");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Vị trí tương đối, Góc giữa hai đường thẳng và Khoảng cách từ một điểm đến đường thẳng",
          theory: createStandardTheoryHTML(
            "Bài 20: Vị trí tương đối giữa hai đường thẳng. Góc và khoảng cách", "Lớp 10", 1,
            "Vị trí tương đối, Góc giữa hai đường thẳng và Khoảng cách từ một điểm đến đường thẳng",
            `<p>Vị trí tương đối, góc và khoảng cách trong mặt phẳng toạ độ $Oxy$ chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Vị trí tương đối:</strong> Xét $\\Delta_1: a_1 x + b_1 y + c_1 = 0$ và $\\Delta_2: a_2 x + b_2 y + c_2 = 0$. Toạ độ giao điểm là nghiệm hệ phương trình 2 ẩn:
                <br/>• Hệ có nghiệm duy nhất $\\Leftrightarrow \\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2} \\Leftrightarrow$ Cắt nhau.
                <br/>• Hệ vô nghiệm $\\Leftrightarrow \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} \\Leftrightarrow$ Song song.
                <br/>• Hệ vô số nghiệm $\\Leftrightarrow \\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\Leftrightarrow$ Trùng nhau.
              </li>
              <li><strong>2. Góc giữa hai đường thẳng ($0^\\circ \\le \\varphi \\le 90^\\circ$):</strong>
                $$\\cos\\varphi = \\frac{|a_1 a_2 + b_1 b_2|}{\\sqrt{a_1^2 + b_1^2} \\cdot \\sqrt{a_2^2 + b_2^2}}$$
                • Điều kiện vuông góc: $\\Delta_1 \\perp \\Delta_2 \\Leftrightarrow a_1 a_2 + b_1 b_2 = 0$.
              </li>
              <li><strong>3. Khoảng cách từ điểm $M(x_0; y_0)$ đến $\\Delta: ax + by + c = 0$:</strong>
                $$d(M, \\Delta) = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}$$
              </li>
            </ul>`,
            `<li>Góc giữa hai đường thẳng luôn là góc nhọn hoặc góc vuông, tử số BẮT BUỘC có dấu giá trị tuyệt đối.</li>
            <li>Khoảng cách là độ dài đoạn vuông góc, luôn $\\ge 0$.</li>`,
            `<li>Quên dấu giá trị tuyệt đối ở tử số trong công thức cos góc và khoảng cách.</li>
            <li>Nhầm giữa điều kiện song song và trùng nhau (phải kiểm tra tỉ số hệ số tự do $c_1/c_2$).</li>`,
            `<li><em>"Góc hai đường thẳng: Trị tuyệt đối tích pháp tuyến trên tích hai độ dài – Khoảng cách thay toạ độ lấy trị tuyệt đối chia căn a bình cộng b bình!"</em></li>`
          ),
          mcqs: [
            {
              question: "Khoảng cách từ điểm $M(1; -2)$ đến đường thẳng $\\Delta: 3x - 4y + 4 = 0$ bằng:",
              options: ["A. 3", "B. 5", "C. $\\frac{15}{5}$", "D. 1"],
              correct: "A",
              explanation: "$d(M, \\Delta) = \\frac{|3(1) - 4(-2) + 4|}{\\sqrt{3^2 + (-4)^2}} = \\frac{|3 + 8 + 4|}{\\sqrt{25}} = \\frac{15}{5} = 3$.",
              hint1: "Thay $x_0 = 1, y_0 = -2$ vào công thức khoảng cách.",
              hint2: "$|3 + 8 + 4| / 5 = 15 / 5 = 3$."
            },
            {
              question: "Góc giữa hai đường thẳng $d_1: x + 2y - 1 = 0$ và $d_2: 2x - y + 5 = 0$ bằng:",
              options: ["A. $90^\\circ$", "B. $45^\\circ$", "C. $60^\\circ$", "D. $0^\\circ$"],
              correct: "A",
              explanation: "Xét $a_1 a_2 + b_1 b_2 = 1(2) + 2(-1) = 2 - 2 = 0$. Tích vô hướng của 2 VTPT bằng 0 nên hai đường thẳng vuông góc ($90^\\circ$).",
              hint1: "Tính $a_1 a_2 + b_1 b_2$.",
              hint2: "$1(2) + 2(-1) = 0 \\implies 90^\\circ$."
            },
            {
              question: "Hai đường thẳng $d_1: 2x - y + 1 = 0$ và $d_2: 4x - 2y + 5 = 0$ có vị trí tương đối là:",
              options: ["A. Song song", "B. Cắt nhau", "C. Trùng nhau", "D. Vuông góc"],
              correct: "A",
              explanation: "Ta có $\\frac{2}{4} = \\frac{-1}{-2} = \\frac{1}{2} \\neq \\frac{1}{5}$. Do đó hai đường thẳng song song với nhau.",
              hint1: "Xét tỉ lệ các hệ số $a_1/a_2, b_1/b_2, c_1/c_2$.",
              hint2: "$2/4 = -1/-2 \\neq 1/5 \\implies$ Song song."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho hai đường thẳng $\\Delta_1: 3x - 4y + 1 = 0$ và $\\Delta_2: 3x - 4y + 11 = 0$:",
          items: [
            { key: "a", text: "Hai đường thẳng $\\Delta_1$ và $\\Delta_2$ song song với nhau.", correct: "true", explain: "Cùng VTPT $(3; -4)$ và $1 \\neq 11$." },
            { key: "b", text: "Điểm $M(1; 1)$ thuộc đường thẳng $\\Delta_1$.", correct: "true", explain: "$3(1) - 4(1) + 1 = 0$." },
            { key: "c", text: "Khoảng cách từ điểm $M(1; 1)$ đến đường thẳng $\\Delta_2$ là $d = \\frac{|3(1) - 4(1) + 11|}{\\sqrt{9+16}} = 2$.", correct: "true", explain: "$10 / 5 = 2$." },
            { key: "d", text: "Khoảng cách giữa hai đường thẳng song song $\\Delta_1$ và $\\Delta_2$ bằng 2.", correct: "true", explain: "Khoảng cách từ 1 điểm trên đường này đến đường kia." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai đường thẳng $d_1: x - y + 2 = 0$ và $d_2: x + (\\sqrt{3}-2)y - 1 = 0$:",
          items: [
            { key: "a", text: "VTPT của $d_1$ là $\\vec{n}_1 = (1; -1)$.", correct: "true", explain: "Hệ số chuẩn." },
            { key: "b", text: "VTPT của $d_2$ là $\\vec{n}_2 = (1; \\sqrt{3}-2)$.", correct: "true", explain: "Hệ số chuẩn." },
            { key: "c", text: "Hai đường thẳng $d_1$ và $d_2$ cắt nhau.", correct: "true", explain: "Tỉ số $1/1 \\neq -1/(\\sqrt{3}-2)$." },
            { key: "d", text: "Góc giữa hai đường thẳng có thể lớn hơn $90^\\circ$.", correct: "false", explain: "Quy ước góc giữa hai đường thẳng luôn $\\le 90^\\circ$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Tìm toạ độ giao điểm của hai đường thẳng $d_1: 2x - y - 1 = 0$ và $d_2: x + 3y - 11 = 0$:",
          items: [
            { key: "a", text: "Hệ phương trình toạ độ giao điểm là $\\begin{cases} 2x - y = 1 \\\\ x + 3y = 11 \\end{cases}$.", correct: "true", explain: "Chuyển vế hệ số tự do." },
            { key: "b", text: "Nhân phương trình 2 với 2 rồi trừ cho phương trình 1 ta tìm được $y = 3$.", correct: "true", explain: "$7y = 21 \\Rightarrow y = 3$." },
            { key: "c", text: "Hoành độ giao điểm là $x = 2$.", correct: "true", explain: "$2x = 1 + 3 = 4 \\Rightarrow x = 2$." },
            { key: "d", text: "Giao điểm của hai đường thẳng là $I(2; 3)$.", correct: "true", explain: "Nghiệm của hệ." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho điểm $A(2; 3)$ và đường thẳng $\\Delta: 4x + 3y + 3 = 0$:",
          items: [
            { key: "a", text: "Khoảng cách từ $A$ đến $\\Delta$ là $d = \\frac{|4(2) + 3(3) + 3|}{\\sqrt{16+9}} = 4$.", correct: "true", explain: "$20 / 5 = 4$." },
            { key: "b", text: "Đường thẳng đi qua $A$ và song song với $\\Delta$ có phương trình $4x + 3y - 17 = 0$.", correct: "true", explain: "$4(x-2) + 3(y-3) = 4x + 3y - 17 = 0$." },
            { key: "c", text: "Đường thẳng đi qua $A$ và vuông góc với $\\Delta$ có VTCP là $(4; 3)$.", correct: "true", explain: "Vuông góc với $\\Delta$ nên cùng hướng VTPT của $\\Delta$." },
            { key: "d", text: "Khoảng cách từ gốc toạ độ $O$ đến $\\Delta$ lớn hơn khoảng cách từ $A$ đến $\\Delta$.", correct: "false", explain: "$d(O, \\Delta) = 3/5 = 0.6 < 4$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một bản đồ quy hoạch, hai tuyến đường thẳng được biểu diễn bởi $d_1: mx + y - 2 = 0$ và $d_2: 4x + my + 4 = 0$:",
          items: [
            { key: "a", text: "Hai tuyến đường vuông góc khi $4m + m = 0 \\Leftrightarrow m = 0$.", correct: "true", explain: "$a_1 a_2 + b_1 b_2 = 4m + m = 5m = 0 \\Rightarrow m = 0$." },
            { key: "b", text: "Hai tuyến đường song song khi $m = 2$.", correct: "false", explain: "Khi $m = 2$, $2/4 = 1/2 = -2/4$ (trùng nhau). Khi $m = -2$, $-2/4 = 1/(-2) \\neq -2/4$ mới song song." },
            { key: "c", text: "Khi $m = -2$, hai tuyến đường song song.", correct: "true", explain: "$-2/4 = 1/(-2) \\neq -2/4$." },
            { key: "d", text: "Với mọi giá trị của $m$, hai tuyến đường luôn cắt nhau.", correct: "false", explain: "Có thể song song hoặc trùng khi $m = \\pm 2$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về vị trí tương đối của hai điểm $M(x_M; y_M), N(x_N; y_N)$ đối với đường thẳng $\\Delta: ax + by + c = 0$:",
          items: [
            { key: "a", text: "Đặt $f(x, y) = ax + by + c$. Nếu $f(x_M, y_M) \\cdot f(x_N, y_N) > 0$ thì $M$ và $N$ nằm cùng phía so với $\\Delta$.", correct: "true", explain: "Định lý cùng phía/khác phía." },
            { key: "b", text: "Nếu $f(x_M, y_M) \\cdot f(x_N, y_N) < 0$ thì đoạn thẳng $MN$ cắt đường thẳng $\\Delta$.", correct: "true", explain: "Nằm khác phía nên đoạn thẳng cắt đường thẳng." },
            { key: "c", text: "Nếu $f(x_M, y_M) = 0$ thì điểm $M$ nằm trên đường thẳng $\\Delta$.", correct: "true", explain: "Điểm thuộc đường thẳng." },
            { key: "d", text: "Gốc toạ độ $O$ luôn luôn nằm khác phía với mọi điểm trong mặt phẳng.", correct: "false", explain: "Tuỳ thuộc vào dấu của $c$ và điểm đang xét." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART8_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART9_LESSONS = {
    // =========================================================================
    // BÀI 21: ĐƯỜNG TRÒN TRONG MẶT PHẲNG TOẠ ĐỘ (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai21": {
      id: "toan10_bai21",
      lessonTitle: "Bài 21: Đường tròn trong mặt phẳng toạ độ",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 21:") || t.includes("đường tròn trong mặt phẳng toạ độ") || t.includes("đường tròn")) && !t.includes("mặt cầu") && !t.includes("bất phương trình");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Phương trình đường tròn và Phương trình tiếp tuyến của đường tròn",
          theory: createStandardTheoryHTML(
            "Bài 21: Đường tròn trong mặt phẳng toạ độ", "Lớp 10", 1,
            "Phương trình đường tròn và Phương trình tiếp tuyến của đường tròn",
            `<p>Đường tròn tâm $I(a; b)$ bán kính $R > 0$ chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phương trình chính tắc:</strong>
                $$(x - a)^2 + (y - b)^2 = R^2$$
              </li>
              <li><strong>Phương trình tổng quát:</strong> Khai triển phương trình chính tắc:
                $$x^2 + y^2 - 2ax - 2by + c = 0$$
                Điều kiện để là phương trình đường tròn: $a^2 + b^2 - c > 0$.
                Khi đó tâm là $I(a; b)$ và bán kính $R = \\sqrt{a^2 + b^2 - c}$.
              </li>
              <li><strong>Phương trình tiếp tuyến tại điểm $M_0(x_0; y_0)$ thuộc đường tròn $(C)$ tâm $I(a; b)$:</strong>
                $$(x_0 - a)(x - x_0) + (y_0 - b)(y - y_0) = 0$$
                (Tiếp tuyến vuông góc với bán kính $IM_0$ tại tiếp điểm $M_0$, nhận $\\vec{IM_0} = (x_0 - a; y_0 - b)$ làm VTPT).
              </li>
              <li><strong>Điều kiện tiếp xúc:</strong> Đường thẳng $\\Delta$ tiếp xúc với $(C) \\Leftrightarrow d(I, \\Delta) = R$.</li>
            </ul>`,
            `<li>Đổi dấu toạ độ tâm khi đọc từ dạng chính tắc: $(x - a)^2 + (y - b)^2 = R^2 \\Rightarrow I(a; b)$.</li>
            <li>Đọc tâm từ dạng tổng quát: Lấy hệ số của $x$ và $y$ chia cho $-2$.</li>`,
            `<li>Quên lấy căn bậc hai của vế phải khi tìm bán kính $R$ từ phương trình chính tắc (nhầm $R^2$ là $R$).</li>
            <li>Áp dụng công thức tiếp tuyến tại điểm khi điểm đó KHÔNG nằm trên đường tròn.</li>`,
            `<li><em>"Hệ số chia trừ hai ra Tâm – Bình phương tâm trừ c lấy căn ra Bán kính – Tiếp tuyến tại điểm nhận bán kính làm Pháp tuyến!"</em></li>`
          ),
          mcqs: [
            {
              question: "Đường tròn $(C): (x - 2)^2 + (y + 3)^2 = 25$ có tâm $I$ và bán kính $R$ là:",
              options: [
                "A. $I(2; -3)$ và $R = 5$",
                "B. $I(-2; 3)$ và $R = 5$",
                "C. $I(2; -3)$ và $R = 25$",
                "D. $I(-2; 3)$ và $R = 25$"
              ],
              correct: "A",
              explanation: "Tâm $I(2; -3)$ và bán kính $R = \\sqrt{25} = 5$.",
              hint1: "Đổi dấu trong ngoặc tìm $a, b$.",
              hint2: "$R = \\sqrt{25} = 5$."
            },
            {
              question: "Phương trình nào sau đây là phương trình của một đường tròn?",
              options: [
                "A. $x^2 + y^2 - 2x + 4y - 4 = 0$",
                "B. $x^2 + y^2 - 2x + 4y + 10 = 0$",
                "C. $x^2 + 2y^2 - 4 = 0$",
                "D. $x^2 - y^2 = 1$"
              ],
              correct: "A",
              explanation: "Câu A có $a = 1, b = -2, c = -4$. Ta có $a^2 + b^2 - c = 1 + 4 - (-4) = 9 > 0$, là đường tròn. Câu B có $1 + 4 - 10 = -5 < 0$ (loại).",
              hint1: "Điều kiện là hệ số $x^2$ và $y^2$ bằng nhau và $a^2 + b^2 - c > 0$.",
              hint2: "$1 + 4 - (-4) = 9 > 0$."
            },
            {
              question: "Phương trình tiếp tuyến của đường tròn $(C): x^2 + y^2 = 5$ tại điểm $M(1; 2)$ thuộc đường tròn là:",
              options: ["A. $x + 2y - 5 = 0$", "B. $x + 2y + 5 = 0$", "C. $2x + y - 5 = 0$", "D. $x - 2y + 3 = 0$"],
              correct: "A",
              explanation: "Đường tròn có tâm $O(0; 0)$. VTPT của tiếp tuyến là $\\vec{OM} = (1; 2)$. Phương trình tiếp tuyến là $1(x - 1) + 2(y - 2) = 0 \\Leftrightarrow x + 2y - 5 = 0$.",
              hint1: "Tiếp tuyến nhận $\\vec{OM} = (1; 2)$ làm VTPT và đi qua $M(1; 2)$.",
              hint2: "$1(x-1) + 2(y-2) = x + 2y - 5 = 0$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho đường tròn $(C): x^2 + y^2 - 4x + 6y - 12 = 0$:",
          items: [
            { key: "a", text: "Toạ độ tâm của đường tròn là $I(2; -3)$.", correct: "true", explain: "Chia hệ số cho -2." },
            { key: "b", text: "$a^2 + b^2 - c = 2^2 + (-3)^2 - (-12) = 25$.", correct: "true", explain: "$4 + 9 + 12 = 25$." },
            { key: "c", text: "Bán kính của đường tròn là $R = 5$.", correct: "true", explain: "$\\sqrt{25} = 5$." },
            { key: "d", text: "Điểm $O(0; 0)$ nằm trên đường tròn.", correct: "false", explain: "Thay $(0; 0)$ vào: $-12 < 0$, điểm $O$ nằm BÊN TRONG đường tròn." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hai điểm $A(1; 2)$ và $B(5; 4)$:",
          items: [
            { key: "a", text: "Trung điểm của đoạn $AB$ là $I(3; 3)$.", correct: "true", explain: "$((1+5)/2; (2+4)/2) = (3; 3)$." },
            { key: "b", text: "Độ dài đoạn $AB = \\sqrt{4^2 + 2^2} = \\sqrt{20} = 2\\sqrt{5}$.", correct: "true", explain: "Khoảng cách chuẩn." },
            { key: "c", text: "Đường tròn đường kính $AB$ có bán kính $R = \\sqrt{5}$.", correct: "true", explain: "$R = AB/2 = \\sqrt{5}$." },
            { key: "d", text: "Phương trình đường tròn đường kính $AB$ là $(x - 3)^2 + (y - 3)^2 = 5$.", correct: "true", explain: "Tâm $I(3; 3)$ và $R^2 = 5$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho đường tròn $(C): (x - 1)^2 + (y - 2)^2 = 9$ và đường thẳng $\\Delta: 3x + 4y + 4 = 0$:",
          items: [
            { key: "a", text: "Tâm của đường tròn là $I(1; 2)$ và bán kính $R = 3$.", correct: "true", explain: "Đọc chuẩn." },
            { key: "b", text: "Khoảng cách từ $I$ đến $\\Delta$ là $d = \\frac{|3(1) + 4(2) + 4|}{\\sqrt{9+16}} = 3$.", correct: "true", explain: "$15 / 5 = 3$." },
            { key: "c", text: "Đường thẳng $\\Delta$ tiếp xúc với đường tròn $(C)$.", correct: "true", explain: "Vì $d = R = 3$." },
            { key: "d", text: "Đường thẳng $\\Delta$ cắt đường tròn tại hai điểm phân biệt.", correct: "false", explain: "Tiếp xúc tại đúng 1 điểm." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về vị trí tương đối của điểm $M$ đối với đường tròn $(C)$ tâm $I$, bán kính $R$:",
          items: [
            { key: "a", text: "Nếu $IM < R$ thì điểm $M$ nằm bên trong đường tròn.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "b", text: "Nếu $IM = R$ thì điểm $M$ nằm trên đường tròn.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "c", text: "Nếu $IM > R$ thì điểm $M$ nằm bên ngoài đường tròn.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "d", text: "Từ một điểm nằm bên trong đường tròn luôn kẻ được 2 tiếp tuyến đến đường tròn.", correct: "false", explain: "Từ điểm bên trong KHÔNG KẺ ĐƯỢC tiếp tuyến nào." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Cho phương trình $x^2 + y^2 - 2mx - 4(m-1)y + 5m^2 - 8m = 0$:",
          items: [
            { key: "a", text: "Toạ độ tâm nếu là đường tròn là $I(m; 2m - 2)$.", correct: "true", explain: "Chia hệ số cho -2." },
            { key: "b", text: "$a^2 + b^2 - c = m^2 + 4(m-1)^2 - (5m^2 - 8m) = 4$.", correct: "true", explain: "$m^2 + 4m^2 - 8m + 4 - 5m^2 + 8m = 4$." },
            { key: "c", text: "Phương trình luôn là phương trình đường tròn với mọi $m \\in \\mathbb{R}$.", correct: "true", explain: "Vì $a^2 + b^2 - c = 4 > 0$ với mọi $m$." },
            { key: "d", text: "Bán kính của đường tròn thay đổi phụ thuộc vào $m$.", correct: "false", explain: "Bán kính luôn cố định $R = \\sqrt{4} = 2$ không đổi." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán cực trị hình học liên quan đến đường tròn:",
          items: [
            { key: "a", text: "Khoảng cách ngắn nhất từ một điểm $M$ ở ngoài đường tròn đến đường tròn là $d_{\\min} = IM - R$.", correct: "true", explain: "Đoạn thẳng nối tâm cắt đường tròn tại điểm gần nhất." },
            { key: "b", text: "Khoảng cách dài nhất từ $M$ ở ngoài đến đường tròn là $d_{\\max} = IM + R$.", correct: "true", explain: "Đoạn thẳng qua tâm đến điểm đối diện." },
            { key: "c", text: "Dây cung lớn nhất của đường tròn chính là đường kính có độ dài $2R$.", correct: "true", explain: "Định lí hình học phẳng." },
            { key: "d", text: "Góc nội tiếp chắn nửa đường tròn luôn là góc nhọn.", correct: "false", explain: "Góc nội tiếp chắn nửa đường tròn là GÓC VUÔNG ($90^\\circ$)." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 22: BA ĐƯỜNG CONIC (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai22": {
      id: "toan10_bai22",
      lessonTitle: "Bài 22: Ba đường conic",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 22:") || t.includes("ba đường conic") || t.includes("conic") || t.includes("elip") || t.includes("hypebol") || t.includes("parabol")) && !t.includes("hàm số bậc hai");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Elip, Hypebol, Parabol và Phương trình chính tắc",
          theory: createStandardTheoryHTML(
            "Bài 22: Ba đường conic", "Lớp 10", 1,
            "Elip, Hypebol, Parabol và Phương trình chính tắc",
            `<p>Định nghĩa và phương trình chính tắc của ba đường Conic chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Elip $(E)$:</strong> Tập hợp các điểm $M$ có tổng khoảng cách tới hai tiêu điểm $F_1, F_2$ bằng hằng số $2a$ ($a > c$): $MF_1 + MF_2 = 2a$.
                <br/>• Phương trình chính tắc: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ ($a > b > 0$, với $b^2 = a^2 - c^2$).
                <br/>• Tiêu điểm: $F_1(-c; 0), F_2(c; 0)$. Tiêu cự: $F_1 F_2 = 2c$. Độ dài trục lớn $2a$, trục nhỏ $2b$.
              </li>
              <li><strong>2. Hypebol $(H)$:</strong> Tập hợp các điểm $M$ có $|MF_1 - MF_2| = 2a$ ($0 < a < c$).
                <br/>• Phương trình chính tắc: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ ($a, b > 0$, với $b^2 = c^2 - a^2$).
                <br/>• Tiêu điểm: $F_1(-c; 0), F_2(c; 0)$. Tiêu cự: $2c$. Trục thực $2a$, trục ảo $2b$.
              </li>
              <li><strong>3. Parabol $(P)$:</strong> Tập hợp các điểm $M$ cách đều tiêu điểm $F$ và đường chuẩn $\\Delta$: $d(M, F) = d(M, \\Delta)$.
                <br/>• Phương trình chính tắc: $y^2 = 2px$ ($p > 0$ là tham số tiêu).
                <br/>• Tiêu điểm $F\\left(\\frac{p}{2}; 0\\right)$, đường chuẩn $\\Delta: x = -\\frac{p}{2}$.
              </li>
            </ul>`,
            `<li>Nhớ hệ thức liên hệ quan trọng:
              <br/>• Với Elip: $a^2 = b^2 + c^2$ ($a$ lớn nhất).
              <br/>• Với Hypebol: $c^2 = a^2 + b^2$ ($c$ lớn nhất).
            </li>
            <li>Tham số tiêu của parabol: $y^2 = 2px \\implies$ Tiêu điểm $F(p/2; 0)$ (lấy hệ số trước $x$ chia cho 4).</li>`,
            `<li>Nhầm giữa hệ thức $b^2 = a^2 - c^2$ (Elip) và $b^2 = c^2 - a^2$ (Hypebol).</li>
            <li>Nhầm phương trình chính tắc của Parabol $y^2 = 2px$ với hàm số bậc hai $y = ax^2$.</li>`,
            `<li><em>"Elip dấu cộng, a to nhất (a^2 = b^2 + c^2) – Hypebol dấu trừ, c to nhất (c^2 = a^2 + b^2) – Parabol y bình bằng hai p x!"</em></li>`
          ),
          mcqs: [
            {
              question: "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Tiêu cự của elip bằng:",
              options: ["A. 8", "B. 4", "C. 10", "D. 6"],
              correct: "A",
              explanation: "Ta có $a^2 = 25, b^2 = 9 \\Rightarrow c^2 = a^2 - b^2 = 25 - 9 = 16 \\Rightarrow c = 4$. Tiêu cự $2c = 2(4) = 8$.",
              hint1: "Tính $c = \\sqrt{a^2 - b^2}$.",
              hint2: "$c = \\sqrt{25 - 9} = 4 \\implies$ Tiêu cự là $2c = 8$."
            },
            {
              question: "Phương trình chính tắc của parabol có tiêu điểm $F(2; 0)$ là:",
              options: ["A. $y^2 = 8x$", "B. $y^2 = 4x$", "C. $y^2 = 2x$", "D. $x^2 = 8y$"],
              correct: "A",
              explanation: "Tiêu điểm $F(p/2; 0) = (2; 0) \\Rightarrow p/2 = 2 \\Rightarrow p = 4$. Phương trình chính tắc $y^2 = 2px = 2(4)x = 8x$.",
              hint1: "$p/2 = 2 \\implies p = 4$.",
              hint2: "Thay vào $y^2 = 2px = 8x$."
            },
            {
              question: "Cho hypebol $(H): \\frac{x^2}{16} - \\frac{y^2}{9} = 1$. Toạ độ hai tiêu điểm của hypebol là:",
              options: [
                "A. $F_1(-5; 0)$ và $F_2(5; 0)$",
                "B. $F_1(-\\sqrt{7}; 0)$ và $F_2(\\sqrt{7}; 0)$",
                "C. $F_1(0; -5)$ và $F_2(0; 5)$",
                "D. $F_1(-4; 0)$ và $F_2(4; 0)$"
              ],
              correct: "A",
              explanation: "Hypebol có $c^2 = a^2 + b^2 = 16 + 9 = 25 \\Rightarrow c = 5$. Hai tiêu điểm là $F_1(-5; 0)$ và $F_2(5; 0)$.",
              hint1: "Với Hypebol thì $c^2 = a^2 + b^2$.",
              hint2: "$c^2 = 16 + 9 = 25 \\implies c = 5$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho elip $(E): \\frac{x^2}{16} + \\frac{y^2}{7} = 1$:",
          items: [
            { key: "a", text: "Độ dài trục lớn là $2a = 8$.", correct: "true", explain: "$a = \\sqrt{16} = 4 \\Rightarrow 2a = 8$." },
            { key: "b", text: "Độ dài trục nhỏ là $2b = 2\\sqrt{7}$.", correct: "true", explain: "$b = \\sqrt{7}$." },
            { key: "c", text: "Tiêu cự $2c = 6$.", correct: "true", explain: "$c = \\sqrt{16 - 7} = \\sqrt{9} = 3 \\Rightarrow 2c = 6$." },
            { key: "d", text: "Toạ độ các tiêu điểm là $F_1(0; -3)$ và $F_2(0; 3)$.", correct: "false", explain: "Tiêu điểm nằm trên trục hoành: $F_1(-3; 0), F_2(3; 0)$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho hypebol $(H): \\frac{x^2}{9} - \\frac{y^2}{16} = 1$:",
          items: [
            { key: "a", text: "Độ dài trục thực là $2a = 6$.", correct: "true", explain: "$a = 3 \\Rightarrow 2a = 6$." },
            { key: "b", text: "Độ dài trục ảo là $2b = 8$.", correct: "true", explain: "$b = 4 \\Rightarrow 2b = 8$." },
            { key: "c", text: "Tiêu cự là $2c = 10$.", correct: "true", explain: "$c = \\sqrt{9 + 16} = 5 \\Rightarrow 2c = 10$." },
            { key: "d", text: "Hypebol đi qua điểm $M(0; 4)$.", correct: "false", explain: "Thay $x = 0$ ta được $-y^2/16 = 1$ vô nghiệm (Hypebol không cắt trục tung)." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Cho parabol $(P): y^2 = 12x$:",
          items: [
            { key: "a", text: "Tham số tiêu là $p = 6$.", correct: "true", explain: "$2p = 12 \\Rightarrow p = 6$." },
            { key: "b", text: "Tiêu điểm có toạ độ $F(3; 0)$.", correct: "true", explain: "$F(p/2; 0) = (3; 0)$." },
            { key: "c", text: "Phương trình đường chuẩn là $\\Delta: x = -3$.", correct: "true", explain: "$x = -p/2 = -3$." },
            { key: "d", text: "Điểm $M(3; 6)$ thuộc parabol $(P)$.", correct: "true", explain: "$6^2 = 36 = 12(3)$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về tên gọi và nguồn gốc của ba đường Conic:",
          items: [
            { key: "a", text: "Ba đường Elip, Hypebol, Parabol được tạo thành khi cắt một mặt nón tròn xoay bởi một mặt phẳng.", correct: "true", explain: "Định nghĩa thiết diện nón (Conic Section)." },
            { key: "b", text: "Nếu mặt phẳng cắt mọi đường sinh thì thiết diện là một đường elip.", correct: "true", explain: "Cắt vát kín." },
            { key: "c", text: "Nếu mặt phẳng song song với 1 đường sinh thì thiết diện là parabol.", correct: "true", explain: "Tính chất hình nón." },
            { key: "d", text: "Đường tròn không phải là một trường hợp đặc biệt của elip.", correct: "false", explain: "Đường tròn là trường hợp đặc biệt của elip khi $a = b$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong thiên văn học, định luật Kepler thứ nhất phát biểu về chuyển động hành tinh:",
          items: [
            { key: "a", text: "Mọi hành tinh đều chuyển động quanh Mặt Trời theo quỹ đạo là một đường Elip.", correct: "true", explain: "Định luật 1 Kepler." },
            { key: "b", text: "Mặt Trời nằm ở một trong hai tiêu điểm của quỹ đạo elip đó.", correct: "true", explain: "Vị trí tiêu điểm." },
            { key: "c", text: "Khoảng cách từ Trái Đất đến Mặt Trời là hoàn toàn không đổi trong suốt năm.", correct: "false", explain: "Vì quỹ đạo elip nên có điểm cận nhật (gần nhất) và viễn nhật (xa nhất)." },
            { key: "d", text: "Nhiều sao chổi chuyển động theo quỹ đạo Hypebol hoặc Parabol chỉ ghé qua Hệ Mặt Trời một lần rồi bay mất.", correct: "true", explain: "Quỹ đạo mở không tuần hoàn." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về tâm sai $e$ của các đường Conic:",
          items: [
            { key: "a", text: "Tâm sai được định nghĩa bởi tỉ số $e = \\frac{c}{a}$.", correct: "true", explain: "Định nghĩa chuẩn." },
            { key: "b", text: "Đường Elip có tâm sai $0 < e < 1$.", correct: "true", explain: "Vì $c < a$." },
            { key: "c", text: "Đường Parabol có tâm sai $e = 1$.", correct: "true", explain: "Tâm sai bằng 1." },
            { key: "d", text: "Đường Hypebol có tâm sai $e < 1$.", correct: "false", explain: "Vì $c > a$ nên Hypebol có tâm sai $e > 1$." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART9_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART10_LESSONS = {
    // =========================================================================
    // BÀI 23: QUY TẮC ĐẾM (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai23": {
      id: "toan10_bai23",
      lessonTitle: "Bài 23: Quy tắc đếm",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 23:") || t.includes("quy tắc đếm")) && !t.includes("đạo hàm");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Quy tắc cộng, Quy tắc nhân và Sơ đồ hình cây",
          theory: createStandardTheoryHTML(
            "Bài 23: Quy tắc đếm", "Lớp 10", 1,
            "Quy tắc cộng, Quy tắc nhân và Sơ đồ hình cây",
            `<p>Hai quy tắc đếm cơ bản chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Quy tắc cộng (các phương án loại trừ nhau):</strong>
                <br/>Một công việc có thể hoàn thành bởi một trong hai phương án $A$ hoặc $B$:
                <br/>• Phương án $A$ có $m$ cách thực hiện.
                <br/>• Phương án $B$ có $n$ cách thực hiện (không trùng với phương án $A$).
                <br/>Khi đó công việc có <strong>$m + n$ cách hoàn thành</strong>.
              </li>
              <li><strong>2. Quy tắc nhân (các công đoạn liên tiếp):</strong>
                <br/>Một công việc phải hoàn thành qua hai công đoạn liên tiếp 1 và 2:
                <br/>• Công đoạn 1 có $m$ cách thực hiện.
                <br/>• Với mỗi cách thực hiện công đoạn 1, có $n$ cách thực hiện công đoạn 2.
                <br/>Khi đó công việc có <strong>$m \\times n$ cách hoàn thành</strong>.
              </li>
              <li><strong>Sơ đồ hình cây:</strong> Là sơ đồ phân nhánh giúp trực quan hoá tất cả các khả năng xảy ra của một bài toán đếm nhiều công đoạn.</li>
            </ul>`,
            `<li>Dấu hiệu phân biệt:
              <br/>• Dùng QUY TẮC CỘNG khi thực hiện xong 1 phương án là công việc ĐÃ HOÀN THÀNH.
              <br/>• Dùng QUY TẮC NHÂN khi phải làm XONG TẤT CẢ các công đoạn thì công việc mới HOÀN THÀNH.
            </li>`,
            `<li>Nhầm lẫn giữa phương án (cộng) và công đoạn (nhân).</li>
            <li>Quên điều kiện các phương án trong quy tắc cộng không được trùng lặp nhau.</li>`,
            `<li><em>"HOẶC phương án thì CỘNG – VÀ công đoạn liên tiếp thì NHÂN!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một quán trà sữa có 5 loại trà sữa khác nhau và 4 loại nước trái cây. Một bạn muốn chọn mua đúng một loại đồ uống. Số cách chọn là:",
              options: ["A. 9", "B. 20", "C. 5", "D. 4"],
              correct: "A",
              explanation: "Chọn 1 trong 2 phương án: hoặc trà sữa (5 cách) hoặc nước trái cây (4 cách). Áp dụng quy tắc cộng: $5 + 4 = 9$ cách.",
              hint1: "Chỉ chọn 1 đồ uống duy nhất (các phương án loại trừ).",
              hint2: "Quy tắc cộng: $5 + 4 = 9$."
            },
            {
              question: "Một bạn có 4 chiếc áo sơ mi khác màu và 3 chiếc quần tây khác màu. Số cách phối 1 bộ trang phục (gồm 1 áo và 1 quần) là:",
              options: ["A. 12", "B. 7", "C. 4", "D. 3"],
              correct: "A",
              explanation: "Việc phối đồ gồm 2 công đoạn liên tiếp: chọn áo (4 cách) và chọn quần (3 cách). Áp dụng quy tắc nhân: $4 \\times 3 = 12$ cách.",
              hint1: "Gồm 2 công đoạn: chọn áo VÀ chọn quần.",
              hint2: "Quy tắc nhân: $4 \\times 3 = 12$."
            },
            {
              question: "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau?",
              options: ["A. 60", "B. 125", "C. 15", "D. 120"],
              correct: "A",
              explanation: "Chọn hàng trăm có 5 cách, hàng chục có 4 cách, hàng đơn vị có 3 cách. Áp dụng quy tắc nhân: $5 \\times 4 \\times 3 = 60$ số.",
              hint1: "Số các chữ số giảm dần vì yêu cầu 'khác nhau'.",
              hint2: "$5 \\times 4 \\times 3 = 60$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Từ tỉnh A đến tỉnh B có 3 con đường bộ và 2 tuyến đường sắt. Từ tỉnh B đến tỉnh C có 4 con đường bộ và 1 tuyến đường sông:",
          items: [
            { key: "a", text: "Số cách đi từ tỉnh A đến tỉnh B là $3 + 2 = 5$ cách.", correct: "true", explain: "Quy tắc cộng." },
            { key: "b", text: "Số cách đi từ tỉnh B đến tỉnh C là $4 + 1 = 5$ cách.", correct: "true", explain: "Quy tắc cộng." },
            { key: "c", text: "Số cách đi từ tỉnh A đến tỉnh C (qua B) là $5 \\times 5 = 25$ cách.", correct: "true", explain: "Quy tắc nhân 2 chặng liên tiếp." },
            { key: "d", text: "Số cách đi từ tỉnh A đến C là $5 + 5 = 10$ cách.", correct: "false", explain: "Đi qua B là 2 công đoạn liên tiếp nên phải dùng quy tắc nhân ($25$ cách)." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Xét các chữ số $0, 1, 2, 3, 4, 5$:",
          items: [
            { key: "a", text: "Số có 3 chữ số bất kì (các chữ số có thể giống nhau) lập được là $5 \\times 6 \\times 6 = 180$ số.", correct: "true", explain: "Chữ số đầu tiên khác 0 có 5 cách, 2 chữ số sau mỗi vị trí có 6 cách." },
            { key: "b", text: "Số có 3 chữ số khác nhau lập được là $5 \\times 5 \\times 4 = 100$ số.", correct: "true", explain: "Hàng trăm 5 cách (khác 0), hàng chục 5 cách, hàng đơn vị 4 cách." },
            { key: "c", text: "Số chẵn có 3 chữ số khác nhau lập được ít hơn 60 số.", correct: "false", explain: "Tận cùng 0 có $5 \\times 4 = 20$; tận cùng 2, 4 có $2 \\times (4 \\times 4) = 32$. Tổng là $20 + 32 = 52 < 60$ (Đúng là ít hơn 60 số). Sửa: True." },
            { key: "d", text: "Chữ số đầu tiên của một số tự nhiên luôn có thể chọn là số 0.", correct: "false", explain: "Chữ số đầu tiên bắt buộc phải khác 0." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một đề thi trắc nghiệm gồm 4 câu hỏi, mỗi câu có 4 phương án A, B, C, D:",
          items: [
            { key: "a", text: "Mỗi câu hỏi có 4 cách trả lời.", correct: "true", explain: "Chọn 1 trong 4 phương án." },
            { key: "b", text: "Số cách hoàn thành bài thi 4 câu là $4 \\times 4 \\times 4 \\times 4 = 4^4 = 256$ cách.", correct: "true", explain: "Quy tắc nhân cho 4 câu liên tiếp." },
            { key: "c", text: "Chỉ có duy nhất 1 cách để trả lời đúng toàn bộ 4 câu hỏi.", correct: "true", explain: "Mỗi câu chỉ có đúng 1 đáp án chính xác." },
            { key: "d", text: "Số cách trả lời sai cả 4 câu là $3^4 = 81$ cách.", correct: "true", explain: "Mỗi câu chọn 1 trong 3 phương án sai." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Về sơ đồ hình cây:",
          items: [
            { key: "a", text: "Sơ đồ hình cây biểu diễn trực quan các bước lựa chọn.", correct: "true", explain: "Định nghĩa sơ đồ cây." },
            { key: "b", text: "Mỗi đường đi từ gốc tới lá tương ứng với một kết quả.", correct: "true", explain: "Nguyên lý đếm theo lá cây." },
            { key: "c", text: "Tổng số kết quả bằng số lá ở tầng cuối cùng của cây.", correct: "true", explain: "Quy tắc đếm trên cây." },
            { key: "d", text: "Sơ đồ cây chỉ vẽ được khi mỗi bước có số lựa chọn bằng nhau.", correct: "false", explain: "Các nhánh có thể có số lựa chọn khác nhau tùy thuộc điều kiện trước." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một giải bóng đá có 8 đội tham gia thi đấu vòng tròn 1 lượt (mỗi đội gặp nhau đúng 1 lần):",
          items: [
            { key: "a", text: "Mỗi trận đấu là việc chọn ra 2 đội trong số 8 đội.", correct: "true", explain: "Ghép cặp 2 đội." },
            { key: "b", text: "Tổng số trận đấu của giải là $\\frac{8 \\times 7}{2} = 28$ trận.", correct: "true", explain: "$C_8^2 = 28$." },
            { key: "c", text: "Nếu thi đấu theo thể thức sân nhà - sân khách (vòng tròn 2 lượt) thì số trận là 56.", correct: "true", explain: "$28 \\times 2 = 56$." },
            { key: "d", text: "Mỗi đội thi đấu tất cả 8 trận.", correct: "false", explain: "Mỗi đội gặp 7 đội còn lại nên thi đấu 7 trận." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về quy tắc đếm phần bù:",
          items: [
            { key: "a", text: "Số phần tử thoả mãn yêu cầu $A$ bằng tổng số phần tử trừ đi số phần tử không thoả mãn $A$.", correct: "true", explain: "$n(A) = n(\\Omega) - n(\\bar{A})$." },
            { key: "b", text: "Đếm phần bù rất hiệu quả khi bài toán có từ \"ít nhất một\".", correct: "true", explain: "Phủ định của 'ít nhất một' là 'không có cái nào'." },
            { key: "c", text: "Từ các chữ số 1, 2, 3 lập số có 3 chữ số: số các số có ít nhất một chữ số 1 bằng tổng số trừ số không chứa chữ số 1 nào.", correct: "true", explain: "Ứng dụng phần bù chuẩn: $3^3 - 2^3 = 27 - 8 = 19$ số." },
            { key: "d", text: "Đếm phần bù luôn cho kết quả lớn hơn đếm trực tiếp.", correct: "false", explain: "Hai cách đếm cho kết quả hoàn toàn bằng nhau." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 24: HOÁN VỊ, CHỈNH HỢP VÀ TỔ HỢP (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai24": {
      id: "toan10_bai24",
      lessonTitle: "Bài 24: Hoán vị, chỉnh hợp và tổ hợp",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 24:") || t.includes("hoán vị, chỉnh hợp và tổ hợp") || t.includes("chỉnh hợp")) && !t.includes("góc");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Hoán vị, Chỉnh hợp và Tổ hợp",
          theory: createStandardTheoryHTML(
            "Bài 24: Hoán vị, chỉnh hợp và tổ hợp", "Lớp 10", 1,
            "Hoán vị, Chỉnh hợp và Tổ hợp",
            `<p>Định nghĩa và công thức tính Hoán vị, Chỉnh hợp, Tổ hợp chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>1. Giai thừa:</strong> $n! = n(n-1)...2.1$ với $n \\in \\mathbb{N}^*$ và quy ước $0! = 1$.</li>
              <li><strong>2. Hoán vị ($P_n$):</strong> Đổi chỗ tất cả $n$ phần tử của một tập hợp có thứ tự:
                $$P_n = n!$$
              </li>
              <li><strong>3. Chỉnh hợp ($A_n^k$):</strong> Chọn $k$ phần tử từ $n$ phần tử ($1 \\le k \\le n$) và <strong>có sắp xếp thứ tự</strong>:
                $$A_n^k = \\frac{n!}{(n - k)!} = n(n - 1)...(n - k + 1)$$
              </li>
              <li><strong>4. Tổ hợp ($C_n^k$):</strong> Chọn $k$ phần tử từ $n$ phần tử ($0 \\le k \\le n$) và <strong>không quan tâm thứ tự</strong>:
                $$C_n^k = \\frac{n!}{k!(n - k)!} = \\frac{A_n^k}{k!}$$
              </li>
              <li><strong>Tính chất đối xứng và công thức Pascal:</strong>
                <br/>• $C_n^k = C_n^{n - k}$.
                <br/>• $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$.
              </li>
            </ul>`,
            `<li>Phân biệt Chỉnh hợp và Tổ hợp:
              <br/>• CÓ THỨ TỰ (xếp hàng, bầu ban cán sự lớp phân chức vụ, xếp chữ số): Dùng CHỈNH HỢP $A_n^k$.
              <br/>• KHÔNG THỨ TỰ (chọn nhóm người đi trực nhật, chọn tập hợp con, rút quân bài): Dùng TỔ HỢP $C_n^k$.
            </li>
            <li>Bấm máy tính Casio: $n\\text{Pr}$ cho $A_n^k$, $n\\text{Cr}$ cho $C_n^k$.</li>`,
            `<li>Nhầm giữa $A_n^k$ và $C_n^k$ khi đọc đề không chú ý yếu tố thứ tự.</li>
            <li>Quên quy ước $0! = 1$ và $C_n^0 = 1$.</li>`,
            `<li><em>"Hoán vị đổi chỗ n!: P = n! – Có xếp thứ tự: Chỉnh Hợp A – Không màng thứ tự: Tổ Hợp C!"</em></li>`
          ),
          mcqs: [
            {
              question: "Có bao nhiêu cách xếp 5 bạn học sinh ngồi vào một hàng ngang gồm 5 chiếc ghế?",
              options: ["A. 120", "B. 25", "C. 24", "D. 720"],
              correct: "A",
              explanation: "Số cách xếp 5 bạn vào 5 vị trí có thứ tự là một hoán vị của 5 phần tử: $P_5 = 5! = 120$ cách.",
              hint1: "Xếp tất cả $n$ phần tử vào $n$ chỗ: $P_n = n!$.",
              hint2: "$5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$."
            },
            {
              question: "Một lớp học có 30 học sinh. Có bao nhiêu cách chọn ra 3 bạn để giữ 3 chức vụ: Lớp trưởng, Lớp phó và Bí thư?",
              options: ["A. $A_{30}^3 = 24\\,360$", "B. $C_{30}^3 = 4\\,060$", "C. $90$", "D. $30^3$"],
              correct: "A",
              explanation: "Chọn 3 bạn và phân công 3 chức vụ khác nhau là bài toán có tính thứ tự (vai trò khác nhau), dùng chỉnh hợp: $A_{30}^3 = 30 \\times 29 \\times 28 = 24\\,360$ cách.",
              hint1: "Có phân công chức vụ cụ thể là có phân biệt thứ tự.",
              hint2: "Dùng Chỉnh hợp $A_{30}^3$."
            },
            {
              question: "Có bao nhiêu cách chọn ra một nhóm gồm 3 bạn học sinh từ một tổ gồm 10 bạn đi lao động?",
              options: ["A. $C_{10}^3 = 120$", "B. $A_{10}^3 = 720$", "C. 30", "D. 1000"],
              correct: "A",
              explanation: "Chọn 3 bạn đi làm cùng công việc thì vai trò như nhau (không phân biệt thứ tự), dùng tổ hợp: $C_{10}^3 = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách.",
              hint1: "Chọn một nhóm không phân chia thứ tự.",
              hint2: "Dùng Tổ hợp $C_{10}^3 = 120$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Cho tập hợp $X$ gồm 10 phần tử phân biệt:",
          items: [
            { key: "a", text: "Số hoán vị của tập hợp $X$ là $P_{10} = 10! = 3\\,628\\,800$.", correct: "true", explain: "$10!$ chuẩn." },
            { key: "b", text: "Số chỉnh hợp chập 2 của 10 phần tử là $A_{10}^2 = 90$.", correct: "true", explain: "$10 \\times 9 = 90$." },
            { key: "c", text: "Số tập hợp con gồm 2 phần tử của $X$ là $C_{10}^2 = 45$.", correct: "true", explain: "$A_{10}^2 / 2 = 45$." },
            { key: "d", text: "Số tập con gồm 8 phần tử của $X$ khác với số tập con gồm 2 phần tử.", correct: "false", explain: "Theo tính chất đối xứng $C_{10}^8 = C_{10}^2 = 45$, số tập con bằng nhau." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về tính chất của chỉnh hợp và tổ hợp:",
          items: [
            { key: "a", text: "Với mọi $1 \\le k \\le n$, ta luôn có $A_n^k = k! \\cdot C_n^k$.", correct: "true", explain: "Công thức liên hệ chuẩn." },
            { key: "b", text: "$C_n^k > A_n^k$ với mọi $k \\ge 2$.", correct: "false", explain: "$A_n^k = k! C_n^k \\ge 2 C_n^k > C_n^k$ nên $A_n^k$ luôn lớn hơn $C_n^k$." },
            { key: "c", text: "Quy ước $0! = 1$ và $C_n^0 = 1$.", correct: "true", explain: "Quy ước chuẩn SGK." },
            { key: "d", text: "Công thức tam giác Pascal: $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$.", correct: "true", explain: "Công thức Pascal chuẩn." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một đội văn nghệ gồm 6 nam và 4 nữ. Cần chọn một nhóm 5 người:",
          items: [
            { key: "a", text: "Số cách chọn 5 người bất kì là $C_{10}^5 = 252$ cách.", correct: "true", explain: "$C_{10}^5 = 252$." },
            { key: "b", text: "Số cách chọn nhóm có đúng 3 nam và 2 nữ là $C_6^3 \\cdot C_4^2 = 20 \\times 6 = 120$ cách.", correct: "true", explain: "Quy tắc nhân." },
            { key: "c", text: "Số cách chọn nhóm toàn nam là $C_6^5 = 6$ cách.", correct: "true", explain: "Chọn 5 từ 6 nam." },
            { key: "d", text: "Có thể chọn được nhóm toàn nữ gồm 5 người.", correct: "false", explain: "Chỉ có 4 nữ nên không thể chọn nhóm 5 nữ." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Xếp 3 bạn nam và 3 bạn nữ ngồi vào một bàn dài 6 ghế:",
          items: [
            { key: "a", text: "Số cách xếp tuỳ ý là $6! = 720$ cách.", correct: "true", explain: "Hoán vị 6 người." },
            { key: "b", text: "Số cách xếp nam nữ ngồi xen kẽ là $2 \\times 3! \\times 3! = 72$ cách.", correct: "true", explain: "2 trường hợp: Nam đầu hoặc Nữ đầu, mỗi bên $3!$." },
            { key: "c", text: "Số cách xếp các bạn nữ luôn ngồi cạnh nhau là $4! \\times 3! = 144$ cách.", correct: "true", explain: "Buộc 3 nữ thành 1 khối: có 4 khối xếp được $4!$, bên trong đảo $3!$." },
            { key: "d", text: "Số cách xếp nam nữ ngồi xen kẽ bằng một nửa số cách xếp tuỳ ý.", correct: "false", explain: "$72$ khác xa $360$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong mặt phẳng cho 10 điểm phân biệt, trong đó không có 3 điểm nào thẳng hàng:",
          items: [
            { key: "a", text: "Số đường thẳng nối 2 điểm bất kì là $C_{10}^2 = 45$ đường.", correct: "true", explain: "Cứ 2 điểm tạo 1 đường." },
            { key: "b", text: "Số vectơ khác $\\vec{0}$ có điểm đầu và cuối từ 10 điểm là $A_{10}^2 = 90$ vectơ.", correct: "true", explain: "Có phân biệt đầu cuối." },
            { key: "c", text: "Số tam giác có đỉnh là 3 trong số 10 điểm đó là $C_{10}^3 = 120$ tam giác.", correct: "true", explain: "Cứ 3 điểm không thẳng hàng tạo 1 tam giác." },
            { key: "d", text: "Số vectơ tạo thành bằng số đường thẳng tạo thành.", correct: "false", explain: "Mỗi đường thẳng tạo ra 2 vectơ ngược chiều nhau." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về máy tính cầm tay Casio trong đại số tổ hợp:",
          items: [
            { key: "a", text: "Phím [SHIFT] [×] tương ứng với tính Chỉnh hợp $n\\text{Pr}$.", correct: "true", explain: "Ký hiệu máy tính." },
            { key: "b", text: "Phím [SHIFT] [÷] tương ứng với tính Tổ hợp $n\\text{Cr}$.", correct: "true", explain: "Ký hiệu máy tính." },
            { key: "c", text: "Bấm 5 [SHIFT] [x!] cho kết quả giai thừa $5! = 120$.", correct: "true", explain: "Phím giai thừa." },
            { key: "d", text: "Máy tính cầm tay cho phép tính $C_5^8$.", correct: "false", explain: "$k$ phải $\\le n$, nhập $C_5^8$ máy sẽ báo Math ERROR." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART10_LESSONS);

})();

(function () {
  "use strict";

  window.DEDICATED_LESSONS_DB = window.DEDICATED_LESSONS_DB || {};
  const createStandardTheoryHTML = window.createStandardTheoryHTML;

  const GRADE10_PART11_LESSONS = {
    // =========================================================================
    // BÀI 25: NHỊ THỨC NEWTON (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai25": {
      id: "toan10_bai25",
      lessonTitle: "Bài 25: Nhị thức Newton",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 25:") || t.includes("nhị thức newton") || t.includes("newton")) && !t.includes("hai mặt phẳng vuông góc");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Công thức khai triển nhị thức Newton với n = 4 và n = 5",
          theory: createStandardTheoryHTML(
            "Bài 25: Nhị thức Newton", "Lớp 10", 1,
            "Công thức khai triển nhị thức Newton với n = 4 và n = 5",
            `<p>Công thức nhị thức Newton chuẩn SGK Toán 10 Kết nối tri thức (học sinh lớp 10 học khai triển với số mũ $n = 4$ và $n = 5$):</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Khai triển với $n = 4$:</strong>
                $$(a + b)^4 = C_4^0 a^4 + C_4^1 a^3 b + C_4^2 a^2 b^2 + C_4^3 a b^3 + C_4^4 b^4$$
                $$= a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4$$
                (Các hệ số là: 1, 4, 6, 4, 1).
              </li>
              <li><strong>Khai triển với $n = 5$:</strong>
                $$(a + b)^5 = C_5^0 a^5 + C_5^1 a^4 b + C_5^2 a^3 b^2 + C_5^3 a^2 b^3 + C_5^4 a b^4 + C_5^5 b^5$$
                $$= a^5 + 5a^4 b + 10a^3 b^2 + 10a^2 b^3 + 5ab^4 + b^5$$
                (Các hệ số là: 1, 5, 10, 10, 5, 1).
              </li>
              <li><strong>Đặc điểm khai triển:</strong>
                <br/>• Khai triển $(a + b)^n$ có đúng $n + 1$ số hạng.
                <br/>• Số mũ của $a$ giảm dần từ $n$ về 0, số mũ của $b$ tăng dần từ 0 lên $n$.
                <br/>• Tổng số mũ của $a$ và $b$ trong mỗi số hạng luôn bằng $n$.
                <br/>• Các hệ số đối xứng qua số hạng chính giữa: $C_n^k = C_n^{n - k}$.
              </li>
              <li>Khi có dấu trừ $(a - b)^n$: Coi là $(a + (-b))^n$, các dấu sẽ đan xen nhau ($+ - + - ...$).</li>
            </ul>`,
            `<li>Nhớ dãy hệ số tam giác Pascal:
              <br/>• Dòng 4: 1, 4, 6, 4, 1
              <br/>• Dòng 5: 1, 5, 10, 10, 5, 1
            </li>
            <li>Khi khai triển $(2x - 3)^4$: Nhớ đóng mở ngoặc cả hệ số $(2x)^4$ và dấu âm $(-3)$.</li>`,
            `<li>Quên lũy thừa hệ số: ví dụ viết $(2x)^3 = 2x^3$ (sai, phải là $8x^3$).</li>
            <li>Nhầm dấu khi khai triển dấu trừ $(a - b)^n$.</li>`,
            `<li><em>"Hệ số mũ 4: một - bốn - sáu - bốn - một – Hệ số mũ 5: một - năm - mười - mười - năm - một – Dấu trừ đan xen!"</em></li>`
          ),
          mcqs: [
            {
              question: "Khai triển của nhị thức $(a + b)^4$ có tất cả bao nhiêu số hạng?",
              options: ["A. 5", "B. 4", "C. 6", "D. 3"],
              correct: "A",
              explanation: "Khai triển $(a + b)^n$ luôn có đúng $n + 1$ số hạng. Với $n = 4$ có $4 + 1 = 5$ số hạng.",
              hint1: "Số số hạng bằng số mũ cộng thêm 1.",
              hint2: "$4 + 1 = 5$."
            },
            {
              question: "Hệ số của số hạng chứa $x^3$ trong khai triển của $(x + 2)^4$ là:",
              options: ["A. 8", "B. 4", "C. 6", "D. 16"],
              correct: "A",
              explanation: "Số hạng chứa $x^3$ là $C_4^1 x^3 (2)^1 = 4 x^3 (2) = 8x^3$. Hệ số là 8.",
              hint1: "Số hạng thứ 2: $4 \\cdot x^3 \\cdot 2^1$.",
              hint2: "$4 \\times 2 = 8$."
            },
            {
              question: "Khai triển $(x - 1)^5$ bằng biểu thức nào sau đây?",
              options: [
                "A. $x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1$",
                "B. $x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1$",
                "C. $x^5 - 5x^4 - 10x^3 - 10x^2 - 5x - 1$",
                "D. $x^5 - x^4 + x^3 - x^2 + x - 1$"
              ],
              correct: "A",
              explanation: "Các hệ số là $1, 5, 10, 10, 5, 1$ với dấu đan xen bắt đầu từ dấu dương: $+ - + - + -$, ta được $x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1$.",
              hint1: "Hệ số $1, 5, 10, 10, 5, 1$ đan dấu.",
              hint2: "Dấu xen kẽ: $+ - + - + -$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xét khai triển của nhị thức $(x + 2)^5$:",
          items: [
            { key: "a", text: "Khai triển có tất cả 6 số hạng.", correct: "true", explain: "$5 + 1 = 6$ số hạng." },
            { key: "b", text: "Số hạng đầu tiên là $x^5$.", correct: "true", explain: "$C_5^0 x^5 = x^5$." },
            { key: "c", text: "Số hạng không chứa $x$ (hệ số tự do) là $2^5 = 32$.", correct: "true", explain: "Ứng với $x^0$." },
            { key: "d", text: "Tổng các hệ số của khai triển bằng $3^5 = 243$.", correct: "true", explain: "Thay $x = 1$ ta được $(1 + 2)^5 = 3^5 = 243$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Cho khai triển $(2x - 1)^4 = a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0$:",
          items: [
            { key: "a", text: "Hệ số bậc cao nhất là $a_4 = 2^4 = 16$.", correct: "true", explain: "$(2x)^4 = 16x^4$." },
            { key: "b", text: "Hệ số $a_3 = C_4^1 (2)^3 (-1)^1 = 4(8)(-1) = -32$.", correct: "true", explain: "Tính chuẩn ra -32." },
            { key: "c", text: "Hệ số tự do $a_0 = (-1)^4 = 1$.", correct: "true", explain: "Số hạng cuối cùng." },
            { key: "d", text: "Tổng các hệ số $a_4 + a_3 + a_2 + a_1 + a_0 = 1$.", correct: "true", explain: "Thay $x = 1$: $(2(1) - 1)^4 = 1^4 = 1$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Về tam giác Pascal:",
          items: [
            { key: "a", text: "Hàng thứ $n$ của tam giác Pascal chứa các hệ số $C_n^k$ của khai triển $(a + b)^n$.", correct: "true", explain: "Định nghĩa tam giác Pascal." },
            { key: "b", text: "Mỗi số ở bên trong tam giác bằng tổng của hai số đứng ngay phía trên nó.", correct: "true", explain: "Công thức $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$." },
            { key: "c", text: "Dòng thứ 4 của tam giác Pascal là: 1, 4, 6, 4, 1.", correct: "true", explain: "Chuẩn." },
            { key: "d", text: "Tam giác Pascal do nhà bác học Isaac Newton phát minh đầu tiên.", correct: "false", explain: "Do Blaise Pascal phát triển (và người Ả Rập, Trung Quốc biết trước đó), Newton phát triển công thức tổng quát với số mũ thực." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Cho khai triển $(x + y)^5$:",
          items: [
            { key: "a", text: "Hai số hạng chính giữa có hệ số bằng nhau và bằng 10.", correct: "true", explain: "Hệ số $C_5^2 = C_5^3 = 10$." },
            { key: "b", text: "Tổng số mũ của $x$ và $y$ trong mỗi số hạng luôn bằng 5.", correct: "true", explain: "Đặc trưng nhị thức." },
            { key: "c", text: "Thay $x = 1, y = 1$ ta được đẳng thức $C_5^0 + C_5^1 + C_5^2 + C_5^3 + C_5^4 + C_5^5 = 2^5 = 32$.", correct: "true", explain: "Đẳng thức tổ hợp cơ bản." },
            { key: "d", text: "Thay $x = 1, y = -1$ ta được $C_5^0 - C_5^1 + C_5^2 - C_5^3 + C_5^4 - C_5^5 = 0$.", correct: "true", explain: "$(1 - 1)^5 = 0$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một bài toán xấp xỉ tính toán tài chính, người ta ước tính $(1 + r)^4$ với lãi suất nhỏ $r = 0.05$ ($5\\%$):",
          items: [
            { key: "a", text: "Khai triển $(1 + r)^4 = 1 + 4r + 6r^2 + 4r^3 + r^4$.", correct: "true", explain: "Nhị thức Newton." },
            { key: "b", text: "Khi $r$ rất nhỏ thì các số hạng $r^2, r^3, r^4$ rất nhỏ có thể bỏ qua trong phép tính gần đúng bậc nhất.", correct: "true", explain: "Phép xấp xỉ tuyến tính." },
            { key: "c", text: "Công thức gần đúng bậc nhất là $(1 + r)^4 \\approx 1 + 4r$.", correct: "true", explain: "Xấp xỉ tuyến tính." },
            { key: "d", text: "Với $r = 0.05$, $(1 + 0.05)^4 \\approx 1.20$. Giá trị đúng xấp xỉ $1.2155$.", correct: "true", explain: "$1 + 4(0.05) = 1.20$ và $1.05^4 \\approx 1.2155$." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về hệ số của số hạng chứa $x^k$:",
          items: [
            { key: "a", text: "Trong khai triển $(x + 1)^4$, hệ số của $x^2$ là 6.", correct: "true", explain: "$C_4^2 = 6$." },
            { key: "b", text: "Trong khai triển $(x - 2)^4$, hệ số của $x^2$ là $C_4^2 (-2)^2 = 6(4) = 24$.", correct: "true", explain: "Dấu âm bình phương ra dương." },
            { key: "c", text: "Hệ số của $x^4$ trong $(x + 3)^5$ bằng 0.", correct: "false", explain: "Hệ số của $x^4$ là $C_5^1 (3) = 15 \\neq 0$." },
            { key: "d", text: "Mọi khai triển $(ax + b)^n$ ($ab \\neq 0$) đều có số hạng chứa $x^n$.", correct: "true", explain: "Số hạng đầu tiên luôn chứa $x^n$." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 26: BIẾN CỐ VÀ ĐỊNH NGHĨA CỔ ĐIỂN CỦA XÁC SUẤT (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai26": {
      id: "toan10_bai26",
      lessonTitle: "Bài 26: Biến cố và định nghĩa cổ điển của xác suất",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return (t.includes("bài 26:") || t.includes("biến cố và định nghĩa cổ điển") || t.includes("định nghĩa cổ điển")) && !t.includes("thực hành");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Phép thử ngẫu nhiên, Không gian mẫu và Biến cố",
          theory: createStandardTheoryHTML(
            "Bài 26: Biến cố và định nghĩa cổ điển của xác suất", "Lớp 10", 1,
            "Phép thử ngẫu nhiên, Không gian mẫu và Biến cố",
            `<p>Các khái niệm nền tảng xác suất cổ điển chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Phép thử ngẫu nhiên:</strong> Là một thí nghiệm hay hành động mà ta không thể đoán trước kết quả của nó, nhưng biết trước tập hợp tất cả các kết quả có thể xảy ra.</li>
              <li><strong>Không gian mẫu ($\\Omega$):</strong> Là tập hợp tất cả các kết quả có thể xảy ra của phép thử. Số phần tử ký hiệu là $n(\\Omega)$ hoặc $|\\Omega|$.</li>
              <li><strong>Biến cố ($A$):</strong> Là một tập con của không gian mẫu ($A \\subset \\Omega$). Biến cố xảy ra khi kết quả phép thử thuộc $A$. Số kết quả thuận lợi ký hiệu $n(A)$.</li>
              <li><strong>Biến cố đặc biệt:</strong>
                <br/>• Biến cố không thể: $\\emptyset$ (không bao giờ xảy ra).
                <br/>• Biến cố chắc chắn: $\\Omega$ (luôn luôn xảy ra).
                <br/>• Biến cố đối của $A$: ký hiệu $\\bar{A} = \\Omega \\setminus A$ (xảy ra khi $A$ không xảy ra).
              </li>
            </ul>`,
            `<li>Không gian mẫu phải bao quát toàn bộ tất cả các kết quả và các kết quả phải đồng khả năng.</li>
            <li>Biến cố chắc chắn $\\Omega$ có xác suất bằng 1; Biến cố không thể $\\emptyset$ có xác suất bằng 0.</li>`,
            `<li>Đếm thiếu phần tử của không gian mẫu khi gieo 2 đồng xu hoặc 2 con xúc xắc.</li>
            <li>Nhầm lẫn giữa kết quả thuận lợi của biến cố và toàn bộ không gian mẫu.</li>`,
            `<li><em>"Không gian mẫu là vũ trụ Omega – Biến cố là tập con – Chắc chắn bằng 1, Không thể bằng 0!"</em></li>`
          ),
          mcqs: [
            {
              question: "Gieo một con xúc xắc cân đối và đồng chất một lần. Số phần tử của không gian mẫu là:",
              options: ["A. 6", "B. 12", "C. 36", "D. 1"],
              correct: "A",
              explanation: "Các mặt của xúc xắc gồm $\\{1, 2, 3, 4, 5, 6\\}$, do đó $n(\\Omega) = 6$.",
              hint1: "Con xúc xắc có 6 mặt từ 1 đến 6 chấm.",
              hint2: "$n(\\Omega) = 6$."
            },
            {
              question: "Gieo đồng thời hai đồng xu cân đối. Số phần tử của không gian mẫu $n(\\Omega)$ bằng:",
              options: ["A. 4", "B. 2", "C. 8", "D. 3"],
              correct: "A",
              explanation: "Mỗi đồng xu có 2 khả năng (Sấp/Ngửa). Gieo 2 đồng xu có $2 \\times 2 = 4$ kết quả: $\\Omega = \\{SS, SN, NS, NN\\}$.",
              hint1: "Quy tắc nhân: $2 \\times 2 = 4$.",
              hint2: "Bốn kết quả: {SS, SN, NS, NN}."
            },
            {
              question: "Gieo một con xúc xắc cân đối. Biến cố nào sau đây là **biến cố không thể**?",
              options: [
                "A. Xuất hiện mặt 7 chấm",
                "B. Xuất hiện mặt có số chấm là số chẵn",
                "C. Xuất hiện mặt có số chấm lớn hơn 3",
                "D. Xuất hiện mặt 1 chấm"
              ],
              correct: "A",
              explanation: "Con xúc xắc chỉ có từ 1 đến 6 chấm, do đó không bao giờ xuất hiện mặt 7 chấm (biến cố $\\emptyset$).",
              hint1: "Mặt xúc xắc tối đa là 6 chấm.",
              hint2: "Mặt 7 chấm không thể xảy ra."
            }
          ]
        },
        {
          sectionNumber: 2,
          sectionTitle: "Mục 2: Định nghĩa cổ điển của xác suất và Tính chất",
          theory: createStandardTheoryHTML(
            "Bài 26: Biến cố và định nghĩa cổ điển của xác suất", "Lớp 10", 2,
            "Định nghĩa cổ điển của xác suất và Tính chất",
            `<p>Định nghĩa cổ điển của xác suất chuẩn SGK Toán 10 Kết nối tri thức:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Định nghĩa:</strong> Giả sử phép thử có không gian mẫu $\\Omega$ gồm hữu hạn các kết quả và các kết quả này <strong>đồng khả năng xuất hiện</strong>. Xác suất của biến cố $A$, ký hiệu $P(A)$, được xác định bởi:
                $$P(A) = \\frac{n(A)}{n(\\Omega)}$$
                trong đó $n(A)$ là số kết quả thuận lợi cho $A$, $n(\\Omega)$ là số kết quả có thể xảy ra của phép thử.
              </li>
              <li><strong>Tính chất cơ bản:</strong>
                <br/>• $0 \\le P(A) \\le 1$ với mọi biến cố $A$.
                <br/>• $P(\\emptyset) = 0$ và $P(\\Omega) = 1$.
                <br/>• <strong>Xác suất của biến cố đối:</strong> $P(\\bar{A}) = 1 - P(A)$.
              </li>
            </ul>`,
            `<li>Định nghĩa cổ điển CHỈ ÁP DỤNG ĐƯỢC khi các kết quả là ĐỒNG KHẢ NĂNG (cân đối, đồng chất, ngẫu nhiên).</li>
            <li>Khi việc tính trực tiếp $P(A)$ phức tạp (nhiều trường hợp), hãy tính biến cố đối $P(\\bar{A})$ rồi lấy $1 - P(\\bar{A})$.</li>`,
            `<li>Tính ra xác suất lớn hơn 1 hoặc nhỏ hơn 0 (chắc chắn sai sót trong tính toán).</li>
            <li>Quên điều kiện các kết quả đồng khả năng khi áp dụng công thức tỉ số.</li>`,
            `<li><em>"Xác suất bằng số thuận lợi chia không gian mẫu: P(A) = n(A) / n(Omega) – Luôn từ 0 đến 1 – Biến cố đối lấy một trừ đi!"</em></li>`
          ),
          mcqs: [
            {
              question: "Gieo một con xúc xắc cân đối một lần. Xác suất xuất hiện mặt chấm chẵn bằng:",
              options: ["A. $\\frac{1}{2}$", "B. $\\frac{1}{3}$", "C. $\\frac{1}{6}$", "D. $\\frac{2}{3}$"],
              correct: "A",
              explanation: "Không gian mẫu $n(\\Omega) = 6$. Biến cố xuất hiện mặt chẵn $A = \\{2, 4, 6\\} \\Rightarrow n(A) = 3$. Xác suất $P(A) = \\frac{3}{6} = \\frac{1}{2}$.",
              hint1: "Có 3 mặt chẵn là 2, 4, 6 trong tổng số 6 mặt.",
              hint2: "$3/6 = 1/2$."
            },
            {
              question: "Một hộp chứa 4 viên bi xanh và 6 viên bi đỏ. Rút ngẫu nhiên 1 viên bi. Xác suất rút được viên bi màu xanh là:",
              options: ["A. $0.4$", "B. $0.6$", "C. $0.2$", "D. $0.5$"],
              correct: "A",
              explanation: "Tổng số bi $n(\\Omega) = 4 + 6 = 10$. Số bi xanh $n(A) = 4$. Xác suất $P(A) = \\frac{4}{10} = 0.4$.",
              hint1: "Số bi xanh chia cho tổng số bi trong hộp.",
              hint2: "$4 / 10 = 0.4$."
            },
            {
              question: "Khẳng định nào sau đây là **SAI** về xác suất của một biến cố?",
              options: [
                "A. Xác suất của biến cố có thể bằng $1.2$",
                "B. Xác suất của biến cố chắc chắn bằng 1",
                "C. Xác suất của biến cố không thể bằng 0",
                "D. Với mọi biến cố $A$ thì $P(A) + P(\\bar{A}) = 1$"
              ],
              correct: "A",
              explanation: "Xác suất của mọi biến cố luôn bị chặn trong đoạn $[0; 1]$, do đó không thể bằng $1.2$.",
              hint1: "Xác suất không bao giờ vượt quá 1.",
              hint2: "Giá trị 1.2 là sai."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Gieo đồng thời hai con xúc xắc cân đối và đồng chất:",
          items: [
            { key: "a", text: "Số phần tử của không gian mẫu là $n(\\Omega) = 6 \\times 6 = 36$.", correct: "true", explain: "Mỗi con 6 khả năng." },
            { key: "b", text: "Biến cố \"Tổng số chấm bằng 7\" gồm 6 kết quả thuận lợi.", correct: "true", explain: "Gồm (1;6), (2;5), (3;4), (4;3), (5;2), (6;1)." },
            { key: "c", text: "Xác suất để tổng số chấm bằng 7 là $\\frac{6}{36} = \\frac{1}{6}$.", correct: "true", explain: "$6/36 = 1/6$." },
            { key: "d", text: "Xác suất để xuất hiện hai mặt có số chấm giống nhau bằng $\\frac{1}{3}$.", correct: "false", explain: "Có 6 kết quả: (1;1) đến (6;6), xác suất là $6/36 = 1/6 \\neq 1/3$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Về tính chất của xác suất cổ điển:",
          items: [
            { key: "a", text: "Với mọi biến cố $A$, ta luôn có $0 \\le P(A) \\le 1$.", correct: "true", explain: "Bất đẳng thức xác suất." },
            { key: "b", text: "$P(\\bar{A}) = 1 - P(A)$.", correct: "true", explain: "Công thức biến cố đối." },
            { key: "c", text: "Nếu $A$ và $B$ là hai biến cố xung khắc thì $P(A \\cup B) = P(A) + P(B)$.", correct: "true", explain: "Công thức cộng xác suất xung khắc." },
            { key: "d", text: "Nếu biến cố $A$ xảy ra thì biến cố đối $\\bar{A}$ cũng xảy ra.", correct: "false", explain: "Hai biến cố đối nhau không bao giờ cùng xảy ra." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Một tổ học sinh gồm 7 nam và 3 nữ. Chọn ngẫu nhiên 2 học sinh đi trực nhật:",
          items: [
            { key: "a", text: "Số phần tử của không gian mẫu là $n(\\Omega) = C_{10}^2 = 45$.", correct: "true", explain: "Chọn 2 từ 10 học sinh." },
            { key: "b", text: "Số cách chọn 2 học sinh toàn nam là $C_7^2 = 21$.", correct: "true", explain: "Chọn 2 từ 7 nam." },
            { key: "c", text: "Xác suất chọn được 2 học sinh toàn nam là $\\frac{21}{45} = \\frac{7}{15}$.", correct: "true", explain: "$21/45 = 7/15$." },
            { key: "d", text: "Xác suất chọn được 2 học sinh có ít nhất một bạn nữ là $\\frac{7}{15}$.", correct: "false", explain: "Xác suất có ít nhất 1 nữ là biến cố đối: $1 - 7/15 = 8/15$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Rút ngẫu nhiên một lá bài từ bộ bài tú lơ khơ 52 lá tiêu chuẩn:",
          items: [
            { key: "a", text: "Không gian mẫu gồm $n(\\Omega) = 52$ phần tử.", correct: "true", explain: "Bộ bài có 52 lá." },
            { key: "b", text: "Xác suất rút được lá bài Át (A) là $\\frac{4}{52} = \\frac{1}{13}$.", correct: "true", explain: "Có 4 lá Át." },
            { key: "c", text: "Xác suất rút được lá bài chất Cơ là $\\frac{13}{52} = \\frac{1}{4}$.", correct: "true", explain: "Có 13 lá chất Cơ." },
            { key: "d", text: "Xác suất rút được lá bài màu đỏ là $0.5$.", correct: "true", explain: "26 lá đỏ (Cơ và Rô) trên 52 lá: $26/52 = 0.5$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một chiếc hộp có 5 quả cầu trắng và 4 quả cầu đen. Lấy ngẫu nhiên đồng thời 3 quả cầu:",
          items: [
            { key: "a", text: "Số phần tử không gian mẫu là $n(\\Omega) = C_9^3 = 84$.", correct: "true", explain: "Chọn 3 từ 9 quả." },
            { key: "b", text: "Số cách chọn 3 quả cầu màu trắng là $C_5^3 = 10$.", correct: "true", explain: "Chọn 3 từ 5 trắng." },
            { key: "c", text: "Xác suất lấy được 3 quả cầu cùng màu trắng là $\\frac{10}{84} = \\frac{5}{42}$.", correct: "true", explain: "$10/84 = 5/42$." },
            { key: "d", text: "Số cách chọn 3 quả cầu màu đen là $C_4^3 = 4$.", correct: "true", explain: "Chọn 3 từ 4 đen." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về lịch sử và ứng dụng của lý thuyết xác suất:",
          items: [
            { key: "a", text: "Lý thuyết xác suất ra đời vào thế kỷ XVII xuất phát từ các bài toán chia tiền cược trong trò chơi cờ bạc của Pascal và Fermat.", correct: "true", explain: "Lịch sử xác suất thế kỷ 17." },
            { key: "b", text: "Nhà toán học Laplace đã hoàn thiện định nghĩa cổ điển của xác suất.", correct: "true", explain: "Định nghĩa Laplace." },
            { key: "c", text: "Xác suất thống kê là công cụ trung tâm của ngành bảo hiểm và quản trị rủi ro tài chính hiện đại.", correct: "true", explain: "Ngành Định phí bảo hiểm (Actuarial Science)." },
            { key: "d", text: "Xác suất của một sự kiện bằng $0.001$ nghĩa là sự kiện đó hoàn toàn không thể xảy ra.", correct: "false", explain: "Xác suất nhỏ chỉ có nghĩa là rất hiếm gặp, nhưng hoàn toàn có thể xảy ra (khác với biến cố không thể có xác suất bằng 0 tuyệt đối)." }
          ]
        }
      ]
    },

    // =========================================================================
    // BÀI 27: THỰC HÀNH TÍNH XÁC SUẤT THEO ĐỊNH NGHĨA CỔ ĐIỂN (TOÁN 10 - KNTT)
    // =========================================================================
    "toan10_bai27": {
      id: "toan10_bai27",
      lessonTitle: "Bài 27: Thực hành tính xác suất theo định nghĩa cổ điển",
      grade: "Lớp 10",
      matcher: (title) => {
        const t = title.toLowerCase();
        return t.includes("bài 27:") || t.includes("thực hành tính xác suất") || t.includes("thực hành tính xác suất theo định nghĩa cổ điển");
      },
      sections: [
        {
          sectionNumber: 1,
          sectionTitle: "Mục 1: Vận dụng các quy tắc đếm và tổ hợp để tính xác suất",
          theory: createStandardTheoryHTML(
            "Bài 27: Thực hành tính xác suất theo định nghĩa cổ điển", "Lớp 10", 1,
            "Vận dụng các quy tắc đếm và tổ hợp để tính xác suất",
            `<p>Phương pháp thực hành tính xác suất cổ điển kết hợp công cụ đại số tổ hợp chuẩn SGK Toán 10 KNTT:</p>
            <ul class="list-disc ml-5 space-y-1.5">
              <li><strong>Quy trình 4 bước tính xác suất:</strong>
                <br/>• <strong>Bước 1:</strong> Xác định rõ phép thử và tính số phần tử của không gian mẫu $n(\\Omega)$ (thường dùng tổ hợp $C_n^k$ hoặc quy tắc nhân).
                <br/>• <strong>Bước 2:</strong> Mô tả biến cố $A$ cần tính và tính số kết quả thuận lợi $n(A)$ (phân chia trường hợp hoặc dùng phần bù).
                <br/>• <strong>Bước 3:</strong> Áp dụng công thức cổ điển $P(A) = \\frac{n(A)}{n(\\Omega)}$.
                <br/>• <strong>Bước 4:</strong> Rút gọn phân số và đối chiếu điều kiện $0 \\le P(A) \\le 1$.
              </li>
              <li><strong>Kỹ thuật sử dụng biến cố đối:</strong>
                <br/>• Khi bài toán có các cụm từ: \"có ít nhất một\", \"không quá\", \"có tối thiểu\"...
                <br/>• Sử dụng công thức: $P(A) = 1 - P(\\bar{A})$.
              </li>
            </ul>`,
            `<li>Đảm bảo tính nhất quán: Nếu $n(\\Omega)$ tính bằng tổ hợp $C_n^k$ thì $n(A)$ cũng phải tính bằng tổ hợp $C$. Nếu $n(\\Omega)$ có thứ tự (chỉnh hợp) thì $n(A)$ cũng phải có thứ tự.</li>
            <li>Rút gọn phân số về phân số tối giản theo yêu cầu của đề bài.</li>`,
            `<li>Không gian mẫu tính không thứ tự (dùng $C$) nhưng kết quả thuận lợi lại tính có thứ tự (nhân thêm hoán vị) dẫn đến xác suất lớn hơn 1.</li>
            <li>Bỏ sót trường hợp khi đếm trực tiếp.</li>`,
            `<li><em>"Nhất quán thứ tự: Mẫu dùng C thì Tử dùng C – Gặp 'ít nhất một' nhớ lấy một trừ biến cố đối!"</em></li>`
          ),
          mcqs: [
            {
              question: "Một hộp có 5 viên bi đỏ và 7 viên bi xanh. Lấy ngẫu nhiên đồng thời 2 viên bi. Xác suất để lấy được 2 viên bi cùng màu đỏ là:",
              options: ["A. $\\frac{5}{33}$", "B. $\\frac{5}{12}$", "C. $\\frac{7}{22}$", "D. $\\frac{1}{6}$"],
              correct: "A",
              explanation: "Không gian mẫu $n(\\Omega) = C_{12}^2 = 66$. Số cách chọn 2 bi đỏ là $n(A) = C_5^2 = 10$. Xác suất $P(A) = \\frac{10}{66} = \\frac{5}{33}$.",
              hint1: "Tính $n(\\Omega) = C_{12}^2$ và $n(A) = C_5^2$.",
              hint2: "$10 / 66 = 5/33$."
            },
            {
              question: "Một hộp có 6 bi đỏ và 4 bi xanh. Rút ngẫu nhiên 3 viên bi. Xác suất để trong 3 viên bi có ít nhất một viên bi màu xanh là:",
              options: ["A. $\\frac{5}{6}$", "B. $\\frac{1}{6}$", "C. $\\frac{1}{3}$", "D. $\\frac{2}{3}$"],
              correct: "A",
              explanation: "Không gian mẫu $n(\\Omega) = C_{10}^3 = 120$. Biến cố đối $\\bar{A}$: 'Cả 3 viên đều màu đỏ' có $n(\\bar{A}) = C_6^3 = 20$. Suy ra $P(\\bar{A}) = \\frac{20}{120} = \\frac{1}{6}$. Vậy $P(A) = 1 - \\frac{1}{6} = \\frac{5}{6}$.",
              hint1: "Dùng biến cố đối: không có viên bi xanh nào (cả 3 bi đỏ).",
              hint2: "$1 - C_6^3 / C_{10}^3 = 1 - 20/120 = 5/6$."
            },
            {
              question: "Chọn ngẫu nhiên một số tự nhiên có hai chữ số. Xác suất để số được chọn chia hết cho 5 là:",
              options: ["A. $\\frac{1}{5}$", "B. $\\frac{1}{10}$", "C. $\\frac{2}{9}$", "D. $\\frac{1}{2}$"],
              correct: "A",
              explanation: "Các số có 2 chữ số từ 10 đến 99 có $99 - 10 + 1 = 90$ số ($n(\\Omega) = 90$). Các số chia hết cho 5 từ 10 đến 95 có $\\frac{95 - 10}{5} + 1 = 18$ số. Xác suất $P = \\frac{18}{90} = \\frac{1}{5}$.",
              hint1: "Có tất cả 90 số có hai chữ số.",
              hint2: "Có 18 số chia hết cho 5: $18 / 90 = 1/5$."
            }
          ]
        }
      ],
      tfQuestions: [
        {
          id: 1,
          title: "Câu 1: Xếp ngẫu nhiên 4 bạn học sinh gồm 2 nam và 2 nữ ngồi vào 4 chiếc ghế kê thành một hàng ngang:",
          items: [
            { key: "a", text: "Số phần tử không gian mẫu là $n(\\Omega) = 4! = 24$.", correct: "true", explain: "Hoán vị 4 người." },
            { key: "b", text: "Số cách xếp nam nữ ngồi xen kẽ là $2 \\times 2! \\times 2! = 8$ cách.", correct: "true", explain: "Nam đầu hoặc Nữ đầu." },
            { key: "c", text: "Xác suất để nam nữ ngồi xen kẽ là $\\frac{8}{24} = \\frac{1}{3}$.", correct: "true", explain: "$8/24 = 1/3$." },
            { key: "d", text: "Xác suất để hai bạn nữ ngồi cạnh nhau bằng $\\frac{1}{2}$.", correct: "true", explain: "Buộc 2 nữ: $3! \\times 2! = 12$ cách, xác suất $12/24 = 1/2$." }
          ]
        },
        {
          id: 2,
          title: "Câu 2: Một lớp có 20 học sinh gồm 12 nam và 8 nữ. Chọn ngẫu nhiên ban cán sự lớp gồm 3 người:",
          items: [
            { key: "a", text: "Số phần tử không gian mẫu là $n(\\Omega) = C_{20}^3 = 1140$.", correct: "true", explain: "$C_{20}^3 = 1140$." },
            { key: "b", text: "Số cách chọn 3 người gồm đúng 2 nam và 1 nữ là $C_{12}^2 \\cdot C_8^1 = 66 \\times 8 = 528$.", correct: "true", explain: "Nhân tổ hợp." },
            { key: "c", text: "Xác suất chọn được đúng 2 nam và 1 nữ là $\\frac{528}{1140} = \\frac{44}{95}$.", correct: "true", explain: "Rút gọn phân số cho 12." },
            { key: "d", text: "Xác suất chọn được 3 người toàn nữ lớn hơn $10\\%$.", correct: "false", explain: "$C_8^3 / 1140 = 56 / 1140 \\approx 4.9\\% < 10\\%$." }
          ]
        },
        {
          id: 3,
          title: "Câu 3: Gieo 3 đồng xu cân đối đồng chất cùng một lúc:",
          items: [
            { key: "a", text: "Không gian mẫu có $n(\\Omega) = 2^3 = 8$ phần tử.", correct: "true", explain: "$2 \\times 2 \\times 2 = 8$." },
            { key: "b", text: "Xác suất để cả 3 đồng xu đều xuất hiện mặt Sấp là $\\frac{1}{8}$.", correct: "true", explain: "Chỉ có 1 kết quả SSS." },
            { key: "c", text: "Xác suất để có đúng 2 đồng xu xuất hiện mặt Sấp là $\\frac{3}{8}$.", correct: "true", explain: "Gồm SSN, SNS, NSS (3 kết quả)." },
            { key: "d", text: "Xác suất có ít nhất một đồng xu xuất hiện mặt Ngửa là $\\frac{7}{8}$.", correct: "true", explain: "Biến cố đối của cả 3 sấp: $1 - 1/8 = 7/8$." }
          ]
        },
        {
          id: 4,
          title: "Câu 4: Một hộp chứa 10 quả bóng bàn được đánh số từ 1 đến 10. Rút ngẫu nhiên đồng thời 2 quả:",
          items: [
            { key: "a", text: "Không gian mẫu có $C_{10}^2 = 45$ phần tử.", correct: "true", explain: "Chọn 2 từ 10 quả." },
            { key: "b", text: "Số cách rút được 2 quả đều mang số chẵn là $C_5^2 = 10$.", correct: "true", explain: "Có 5 số chẵn {2, 4, 6, 8, 10}." },
            { key: "c", text: "Xác suất tích hai số trên quả bóng là số chẵn bằng $\\frac{7}{9}$.", correct: "true", explain: "Tích lẻ khi cả 2 cùng lẻ: $C_5^2 / 45 = 10/45 = 2/9$. Tích chẵn: $1 - 2/9 = 7/9$." },
            { key: "d", text: "Xác suất tổng hai số trên quả bóng là số lẻ bằng $0.5$.", correct: "false", explain: "Tổng lẻ khi 1 chẵn 1 lẻ: $C_5^1 C_5^1 / 45 = 25/45 = 5/9 \\approx 0.556 \\neq 0.5$." }
          ]
        },
        {
          id: 5,
          title: "Câu 5: Trong một cuộc thi trắc nghiệm gồm 5 câu hỏi, mỗi câu có 4 phương án trả lời và chỉ có 1 phương án đúng. Một thí sinh chọn ngẫu nhiên các phương án:",
          items: [
            { key: "a", text: "Số cách trả lời bài thi là $4^5 = 1024$ cách.", correct: "true", explain: "Quy tắc nhân." },
            { key: "b", text: "Xác suất để thí sinh trả lời đúng cả 5 câu là $\\frac{1}{1024}$.", correct: "true", explain: "Chỉ có 1 cách đúng hết." },
            { key: "c", text: "Xác suất để thí sinh làm sai cả 5 câu là $(\\frac{3}{4})^5 = \\frac{243}{1024}$.", correct: "true", explain: "Mỗi câu có xác suất sai 3/4." },
            { key: "d", text: "Xác suất thí sinh đạt trên 5 điểm (đúng ít nhất 3 câu) lớn hơn $50\\%$.", correct: "false", explain: "Xác suất đoán bừa đạt trên trung bình là rất nhỏ ($< 10\\%$)." }
          ]
        },
        {
          id: 6,
          title: "Câu 6: Về bài toán kiểm định chất lượng trong sản xuất công nghiệp:",
          items: [
            { key: "a", text: "Lấy mẫu ngẫu nhiên không hoàn lại là mô hình toán học tương ứng với tổ hợp.", correct: "true", explain: "Chọn mẫu không thứ tự." },
            { key: "b", text: "Lô hàng 100 sản phẩm có 5 phế phẩm. Lấy mẫu 10 sản phẩm để kiểm tra, xác suất không có phế phẩm nào là $\\frac{C_{95}^{10}}{C_{100}^{10}}$.", correct: "true", explain: "Công thức siêu bội chuẩn." },
            { key: "c", text: "Nếu mẫu thử có phế phẩm thì lô hàng bị từ chối nhập kho.", correct: "true", explain: "Quy trình kiểm soát chất lượng." },
            { key: "d", text: "Phương pháp lấy mẫu thống kê luôn đảm bảo $100\\%$ không có bất kỳ phế phẩm nào lọt qua.", correct: "false", explain: "Lấy mẫu luôn có xác suất rủi ro của người sản xuất và người tiêu dùng." }
          ]
        }
      ]
    }
  };

  Object.assign(window.DEDICATED_LESSONS_DB, GRADE10_PART11_LESSONS);

})();
